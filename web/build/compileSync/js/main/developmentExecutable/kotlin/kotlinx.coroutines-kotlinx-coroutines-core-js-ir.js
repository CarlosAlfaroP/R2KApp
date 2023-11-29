(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.jd;
  var THROW_CCE = kotlin_kotlin.$_$.xg;
  var isObject = kotlin_kotlin.$_$.wc;
  var Unit_getInstance = kotlin_kotlin.$_$.v4;
  var plus = kotlin_kotlin.$_$.db;
  var get = kotlin_kotlin.$_$.za;
  var fold = kotlin_kotlin.$_$.ya;
  var minusKey = kotlin_kotlin.$_$.ab;
  var Continuation = kotlin_kotlin.$_$.xa;
  var classMeta = kotlin_kotlin.$_$.xb;
  var VOID = kotlin_kotlin.$_$.li;
  var setMetadataFor = kotlin_kotlin.$_$.kd;
  var Annotation = kotlin_kotlin.$_$.fg;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.di;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var Companion_getInstance = kotlin_kotlin.$_$.q4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.ra;
  var fillArrayVal = kotlin_kotlin.$_$.cc;
  var CoroutineImpl = kotlin_kotlin.$_$.eb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.oa;
  var copyToArray = kotlin_kotlin.$_$.h7;
  var emptyList = kotlin_kotlin.$_$.j7;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.e4;
  var Key_getInstance = kotlin_kotlin.$_$.d4;
  var equals = kotlin_kotlin.$_$.bc;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.qa;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y1;
  var interfaceMeta = kotlin_kotlin.$_$.lc;
  var isInterface = kotlin_kotlin.$_$.uc;
  var toString = kotlin_kotlin.$_$.hi;
  var toString_0 = kotlin_kotlin.$_$.od;
  var objectMeta = kotlin_kotlin.$_$.id;
  var hashCode = kotlin_kotlin.$_$.jc;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.t2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.v2;
  var createFailure = kotlin_kotlin.$_$.nh;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.ta;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.sa;
  var get_0 = kotlin_kotlin.$_$.ua;
  var minusKey_0 = kotlin_kotlin.$_$.va;
  var ContinuationInterceptor = kotlin_kotlin.$_$.wa;
  var Key = kotlin_kotlin.$_$.cb;
  var Element = kotlin_kotlin.$_$.bb;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var getStringHashCode = kotlin_kotlin.$_$.ic;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.d1;
  var THROW_ISE = kotlin_kotlin.$_$.yg;
  var Enum = kotlin_kotlin.$_$.lg;
  var startCoroutine = kotlin_kotlin.$_$.kb;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.wh;
  var startCoroutine_0 = kotlin_kotlin.$_$.lb;
  var Long = kotlin_kotlin.$_$.qg;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.p4;
  var RuntimeException = kotlin_kotlin.$_$.wg;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.g2;
  var captureStack = kotlin_kotlin.$_$.rb;
  var Error_0 = kotlin_kotlin.$_$.mg;
  var Error_init_$Init$ = kotlin_kotlin.$_$.l1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.h1;
  var CancellationException = kotlin_kotlin.$_$.na;
  var ArrayList = kotlin_kotlin.$_$.e5;
  var SequenceScope = kotlin_kotlin.$_$.ue;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.z1;
  var sequence = kotlin_kotlin.$_$.bf;
  var anyToString = kotlin_kotlin.$_$.ob;
  var SuspendFunction1 = kotlin_kotlin.$_$.gb;
  var UnsupportedOperationException = kotlin_kotlin.$_$.jh;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var emptySequence = kotlin_kotlin.$_$.we;
  var objectCreate = kotlin_kotlin.$_$.hd;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.a1;
  var returnIfSuspended = kotlin_kotlin.$_$.h;
  var isSuspendFunction = kotlin_kotlin.$_$.yc;
  var addSuppressed = kotlin_kotlin.$_$.kh;
  var fill = kotlin_kotlin.$_$.o7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var ensureNotNull = kotlin_kotlin.$_$.oh;
  var NoSuchElementException = kotlin_kotlin.$_$.rg;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.c2;
  var IllegalStateException = kotlin_kotlin.$_$.pg;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.x1;
  var Unit = kotlin_kotlin.$_$.ih;
  var toLong = kotlin_kotlin.$_$.md;
  var arrayIterator = kotlin_kotlin.$_$.pb;
  var copyOf = kotlin_kotlin.$_$.f7;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.j4;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.ci;
  var checkBuilderCapacity = kotlin_kotlin.$_$.i6;
  var joinToString = kotlin_kotlin.$_$.i8;
  var SuspendFunction2 = kotlin_kotlin.$_$.hb;
  var listOf = kotlin_kotlin.$_$.t8;
  var IndexedValue = kotlin_kotlin.$_$.j5;
  var numberToByte = kotlin_kotlin.$_$.cd;
  var isArray = kotlin_kotlin.$_$.mc;
  var arrayCopy = kotlin_kotlin.$_$.c6;
  var coerceAtLeast = kotlin_kotlin.$_$.ae;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var toLongOrNull = kotlin_kotlin.$_$.yf;
  var createCoroutineUnintercepted_0 = kotlin_kotlin.$_$.pa;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.c1;
  var coerceIn = kotlin_kotlin.$_$.ie;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.cancel_4b7aim_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.cancel_4b7aim_k$.call(this, cause);
    }
    return tmp;
  }
  function cancel() {
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_as6ug7_k$(cause) : $super.cancel_as6ug7_k$.call(this, cause);
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $super) {
    onCancelling = onCancelling === VOID ? false : onCancelling;
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    return $super === VOID ? this.invokeOnCompletion_npwpyn_k$(onCancelling, invokeImmediately, handler) : $super.invokeOnCompletion_npwpyn_k$.call(this, onCancelling, invokeImmediately, handler);
  }
  function plus_0(other) {
    return other;
  }
  setMetadataFor(Job, 'Job', interfaceMeta, VOID, [Element], VOID, VOID, [0]);
  setMetadataFor(ChildJob, 'ChildJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(ParentJob, 'ParentJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(SelectClause0, 'SelectClause0', interfaceMeta);
  setMetadataFor(JobSupport, 'JobSupport', classMeta, VOID, [Job, ChildJob, ParentJob, SelectClause0], VOID, VOID, [0]);
  setMetadataFor(CoroutineScope, 'CoroutineScope', interfaceMeta);
  setMetadataFor(AbstractCoroutine, 'AbstractCoroutine', classMeta, JobSupport, [JobSupport, Job, Continuation, CoroutineScope], VOID, VOID, [0]);
  setMetadataFor(InternalCoroutinesApi, 'InternalCoroutinesApi', classMeta, VOID, [Annotation]);
  setMetadataFor(FlowPreview, 'FlowPreview', classMeta, VOID, [Annotation]);
  setMetadataFor(ExperimentalCoroutinesApi, 'ExperimentalCoroutinesApi', classMeta, VOID, [Annotation]);
  setMetadataFor(CancelHandlerBase, 'CancelHandlerBase', classMeta);
  setMetadataFor(NotCompleted, 'NotCompleted', interfaceMeta);
  setMetadataFor(CancelHandler, 'CancelHandler', classMeta, CancelHandlerBase, [CancelHandlerBase, NotCompleted]);
  setMetadataFor(DisposeHandlersOnCancel, 'DisposeHandlersOnCancel', classMeta, CancelHandler);
  setMetadataFor(LinkedListNode, 'LinkedListNode', classMeta);
  setMetadataFor(CompletionHandlerBase, 'CompletionHandlerBase', classMeta, LinkedListNode);
  setMetadataFor(DisposableHandle, 'DisposableHandle', interfaceMeta);
  setMetadataFor(Incomplete, 'Incomplete', interfaceMeta);
  setMetadataFor(JobNode, 'JobNode', classMeta, CompletionHandlerBase, [CompletionHandlerBase, DisposableHandle, Incomplete]);
  setMetadataFor(AwaitAllNode, 'AwaitAllNode', classMeta, JobNode);
  setMetadataFor(AwaitAll, 'AwaitAll', classMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor($joinAllCOROUTINE$0, '$joinAllCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($awaitAllCOROUTINE$1, '$awaitAllCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor(StandaloneCoroutine, 'StandaloneCoroutine', classMeta, AbstractCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', classMeta, StandaloneCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(CoroutineStackFrame, 'CoroutineStackFrame', interfaceMeta);
  setMetadataFor(ScopeCoroutine, 'ScopeCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, CoroutineStackFrame], VOID, VOID, [0]);
  setMetadataFor(DispatchedCoroutine, 'DispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor($awaitCOROUTINE$2, '$awaitCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(Deferred, 'Deferred', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(SelectClause1, 'SelectClause1', interfaceMeta);
  setMetadataFor(DeferredCoroutine, 'DeferredCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Deferred, SelectClause1], VOID, VOID, [0]);
  setMetadataFor(LazyDeferredCoroutine, 'LazyDeferredCoroutine', classMeta, DeferredCoroutine, VOID, VOID, VOID, [0]);
  function tryResume$default(value, idempotent, $super) {
    idempotent = idempotent === VOID ? null : idempotent;
    return $super === VOID ? this.tryResume_10oxem_k$(value, idempotent) : $super.tryResume_10oxem_k$.call(this, value, idempotent);
  }
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_as6ug7_k$(cause) : $super.cancel_as6ug7_k$.call(this, cause);
  }
  setMetadataFor(CancellableContinuation, 'CancellableContinuation', interfaceMeta, VOID, [Continuation]);
  setMetadataFor(DisposeOnCancel, 'DisposeOnCancel', classMeta, CancelHandler);
  setMetadataFor(BeforeResumeCancelHandler, 'BeforeResumeCancelHandler', classMeta, CancelHandler);
  setMetadataFor(RemoveOnCancel, 'RemoveOnCancel', classMeta, BeforeResumeCancelHandler);
  setMetadataFor(Runnable, 'Runnable', interfaceMeta);
  setMetadataFor(SchedulerTask, 'SchedulerTask', classMeta, VOID, [Runnable]);
  setMetadataFor(DispatchedTask, 'DispatchedTask', classMeta, SchedulerTask);
  setMetadataFor(CancellableContinuationImpl, 'CancellableContinuationImpl', classMeta, DispatchedTask, [DispatchedTask, CancellableContinuation, CoroutineStackFrame]);
  setMetadataFor(Active, 'Active', objectMeta, VOID, [NotCompleted]);
  setMetadataFor(CompletedContinuation, 'CompletedContinuation', classMeta);
  setMetadataFor(InvokeOnCancel, 'InvokeOnCancel', classMeta, CancelHandler);
  setMetadataFor(CompletableDeferred, 'CompletableDeferred', interfaceMeta, VOID, [Deferred], VOID, VOID, [0]);
  setMetadataFor($awaitCOROUTINE$3, '$awaitCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(CompletableDeferredImpl, 'CompletableDeferredImpl', classMeta, JobSupport, [JobSupport, CompletableDeferred, SelectClause1], VOID, VOID, [0]);
  setMetadataFor(CompletableJob, 'CompletableJob', interfaceMeta, VOID, [Job], VOID, VOID, [0]);
  setMetadataFor(CompletedExceptionally, 'CompletedExceptionally', classMeta);
  setMetadataFor(CancelledContinuation, 'CancelledContinuation', classMeta, CompletedExceptionally);
  setMetadataFor(CompletedWithCancellation, 'CompletedWithCancellation', classMeta);
  setMetadataFor(Key_0, 'Key', objectMeta, AbstractCoroutineContextKey);
  setMetadataFor(CoroutineDispatcher, 'CoroutineDispatcher', classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, ContinuationInterceptor]);
  setMetadataFor(Key_1, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(CoroutineExceptionHandler, 'CoroutineExceptionHandler', interfaceMeta, VOID, [Element]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, CoroutineExceptionHandler]);
  setMetadataFor(Key_2, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(CoroutineName, 'CoroutineName', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(CoroutineStart, 'CoroutineStart', classMeta, Enum);
  setMetadataFor(CopyableThrowable, 'CopyableThrowable', interfaceMeta);
  function delay(time, $completion) {
    if (time.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0_anonymous = $completion;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0_anonymous), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.Delay.delay.<anonymous>' call
    this.scheduleResumeAfterDelay_5x4w1l_k$(time, cancellable);
    tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    var tmp0 = tmp$ret$0;
    return tmp0;
  }
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  }
  setMetadataFor(Delay, 'Delay', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(EventLoop, 'EventLoop', classMeta, CoroutineDispatcher);
  setMetadataFor(ThreadLocalEventLoop, 'ThreadLocalEventLoop', objectMeta);
  setMetadataFor(CompletionHandlerException, 'CompletionHandlerException', classMeta, RuntimeException);
  setMetadataFor(CoroutinesInternalError, 'CoroutinesInternalError', classMeta, Error_0);
  setMetadataFor(Key_3, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(ChildHandle, 'ChildHandle', interfaceMeta, VOID, [DisposableHandle]);
  setMetadataFor(NonDisposableHandle, 'NonDisposableHandle', objectMeta, VOID, [DisposableHandle, ChildHandle]);
  setMetadataFor(Empty, 'Empty', classMeta, VOID, [Incomplete]);
  setMetadataFor(LinkedListHead, 'LinkedListHead', classMeta, LinkedListNode);
  setMetadataFor(NodeList, 'NodeList', classMeta, LinkedListHead, [LinkedListHead, Incomplete]);
  setMetadataFor(Finishing, 'Finishing', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildCompletion, 'ChildCompletion', classMeta, JobNode);
  setMetadataFor(AwaitContinuation, 'AwaitContinuation', classMeta, CancellableContinuationImpl);
  setMetadataFor(JobSupport$_get_children_$slambda_k839f8, 'JobSupport$<get-children>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(JobCancellingNode, 'JobCancellingNode', classMeta, JobNode);
  setMetadataFor(InactiveNodeList, 'InactiveNodeList', classMeta, VOID, [Incomplete]);
  setMetadataFor(ChildHandleNode, 'ChildHandleNode', classMeta, JobCancellingNode, [JobCancellingNode, ChildHandle]);
  setMetadataFor(InvokeOnCancelling, 'InvokeOnCancelling', classMeta, JobCancellingNode);
  setMetadataFor(InvokeOnCompletion, 'InvokeOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeOnCompletion, 'ResumeOnCompletion', classMeta, JobNode);
  setMetadataFor(SelectJoinOnCompletion, 'SelectJoinOnCompletion', classMeta, JobNode);
  setMetadataFor(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(SelectAwaitOnCompletion, 'SelectAwaitOnCompletion', classMeta, JobNode);
  setMetadataFor(IncompleteStateBox, 'IncompleteStateBox', classMeta);
  setMetadataFor(ChildContinuation, 'ChildContinuation', classMeta, JobCancellingNode);
  setMetadataFor(JobImpl, 'JobImpl', classMeta, JobSupport, [JobSupport, CompletableJob], VOID, VOID, [0]);
  setMetadataFor(DisposeOnCompletion, 'DisposeOnCompletion', classMeta, JobNode);
  setMetadataFor(MainCoroutineDispatcher, 'MainCoroutineDispatcher', classMeta, CoroutineDispatcher);
  setMetadataFor(NonCancellable, 'NonCancellable', objectMeta, AbstractCoroutineContextElement, [AbstractCoroutineContextElement, Job], VOID, VOID, [0]);
  setMetadataFor(SupervisorJobImpl, 'SupervisorJobImpl', classMeta, JobImpl, VOID, VOID, VOID, [0]);
  setMetadataFor(TimeoutCancellationException, 'TimeoutCancellationException', classMeta, CancellationException, [CancellationException, CopyableThrowable]);
  setMetadataFor(TimeoutCoroutine, 'TimeoutCoroutine', classMeta, ScopeCoroutine, [ScopeCoroutine, Runnable], VOID, VOID, [0]);
  setMetadataFor($withTimeoutOrNullCOROUTINE$4, '$withTimeoutOrNullCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(Unconfined, 'Unconfined', objectMeta, CoroutineDispatcher);
  setMetadataFor(Key_4, 'Key', objectMeta, VOID, [Key]);
  setMetadataFor(YieldContext, 'YieldContext', classMeta, AbstractCoroutineContextElement);
  setMetadataFor(AtomicDesc, 'AtomicDesc', classMeta);
  setMetadataFor(AbstractAtomicDesc, 'AbstractAtomicDesc', classMeta, AtomicDesc);
  setMetadataFor(RemoveFirstDesc, 'RemoveFirstDesc', classMeta, AbstractAtomicDesc);
  setMetadataFor(TryPollDesc, 'TryPollDesc', classMeta, RemoveFirstDesc);
  setMetadataFor(RemoveReceiveOnCancel, 'RemoveReceiveOnCancel', classMeta, BeforeResumeCancelHandler);
  function next0($completion) {
    var tmp = new $next0COROUTINE$6(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  setMetadataFor(ChannelIterator, 'ChannelIterator', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Itr, 'Itr', classMeta, VOID, [ChannelIterator], VOID, VOID, [0]);
  setMetadataFor(ReceiveOrClosed, 'ReceiveOrClosed', interfaceMeta);
  setMetadataFor(Receive, 'Receive', classMeta, LinkedListNode, [LinkedListNode, ReceiveOrClosed]);
  setMetadataFor(ReceiveElement, 'ReceiveElement', classMeta, Receive);
  setMetadataFor(ReceiveElementWithUndeliveredHandler, 'ReceiveElementWithUndeliveredHandler', classMeta, ReceiveElement);
  setMetadataFor(ReceiveHasNext, 'ReceiveHasNext', classMeta, Receive);
  setMetadataFor(ReceiveSelect, 'ReceiveSelect', classMeta, Receive, [Receive, DisposableHandle]);
  setMetadataFor(AbstractChannel$onReceive$1, VOID, classMeta, VOID, [SelectClause1]);
  setMetadataFor(AbstractChannel$onReceiveCatching$1, VOID, classMeta, VOID, [SelectClause1]);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.close_9zy44b_k$(cause) : $super.close_9zy44b_k$.call(this, cause);
  }
  function offer(element) {
    var result = this.trySend_3hclq4_k$(element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return true;
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  setMetadataFor(SendChannel, 'SendChannel', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(AbstractSendChannel, 'AbstractSendChannel', classMeta, VOID, [SendChannel], VOID, VOID, [1]);
  function cancel$default_2(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.cancel_4b7aim_k$(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.cancel_4b7aim_k$.call(this, cause);
    }
    return tmp;
  }
  function cancel_0() {
    return this.cancel_4b7aim_k$(null);
  }
  function cancel$default_3(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.cancel_as6ug7_k$(cause) : $super.cancel_as6ug7_k$.call(this, cause);
  }
  function poll() {
    var result = this.tryReceive_5r5v2p_k$();
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result))
      return ChannelResult__getOrThrow_impl_od1axs(result);
    var tmp0_elvis_lhs = ChannelResult__exceptionOrNull_impl_16ei30(result);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    throw recoverStackTrace_0(tmp);
  }
  function receiveOrNull($completion) {
    var tmp = new $receiveOrNullCOROUTINE$5(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_onReceiveOrNull() {
    return new ReceiveChannel$onReceiveOrNull$1(this);
  }
  setMetadataFor(ReceiveChannel, 'ReceiveChannel', interfaceMeta, VOID, VOID, VOID, VOID, [0]);
  setMetadataFor(Channel, 'Channel', interfaceMeta, VOID, [SendChannel, ReceiveChannel], VOID, VOID, [1, 0]);
  setMetadataFor(AbstractChannel, 'AbstractChannel', classMeta, AbstractSendChannel, [AbstractSendChannel, Channel], VOID, VOID, [0, 1]);
  setMetadataFor(AddLastDesc, 'AddLastDesc', classMeta, AbstractAtomicDesc);
  setMetadataFor(SendBufferedDesc, 'SendBufferedDesc', classMeta, AddLastDesc);
  setMetadataFor(TryOfferDesc, 'TryOfferDesc', classMeta, RemoveFirstDesc);
  setMetadataFor(Send, 'Send', classMeta, LinkedListNode);
  setMetadataFor(SendSelect, 'SendSelect', classMeta, Send, [Send, DisposableHandle]);
  setMetadataFor(SendBuffered, 'SendBuffered', classMeta, Send);
  setMetadataFor(SelectClause2, 'SelectClause2', interfaceMeta);
  setMetadataFor(AbstractSendChannel$onSend$1, VOID, classMeta, VOID, [SelectClause2]);
  setMetadataFor(Closed, 'Closed', classMeta, Send, [Send, ReceiveOrClosed]);
  setMetadataFor(SendElement, 'SendElement', classMeta, Send);
  setMetadataFor(SendElementWithUndeliveredHandler, 'SendElementWithUndeliveredHandler', classMeta, SendElement);
  setMetadataFor(ArrayChannel, 'ArrayChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(BufferOverflow, 'BufferOverflow', classMeta, Enum);
  setMetadataFor(Factory, 'Factory', objectMeta);
  setMetadataFor(Failed, 'Failed', classMeta);
  setMetadataFor(Closed_0, 'Closed', classMeta, Failed);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ChannelResult, 'ChannelResult', classMeta);
  setMetadataFor(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt, 'ReceiveChannel$<get-onReceiveOrNull>$o$registerSelectClause1$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ReceiveChannel$onReceiveOrNull$1, VOID, classMeta, VOID, [SelectClause1]);
  setMetadataFor($receiveOrNullCOROUTINE$5, '$receiveOrNullCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor($next0COROUTINE$6, '$next0COROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(ClosedReceiveChannelException, 'ClosedReceiveChannelException', classMeta, NoSuchElementException);
  setMetadataFor(ClosedSendChannelException, 'ClosedSendChannelException', classMeta, IllegalStateException);
  setMetadataFor(ChannelCoroutine, 'ChannelCoroutine', classMeta, AbstractCoroutine, [AbstractCoroutine, Channel], VOID, VOID, [0, 1]);
  setMetadataFor($consumeEachCOROUTINE$7, '$consumeEachCOROUTINE$7', classMeta, CoroutineImpl);
  setMetadataFor(ConflatedChannel, 'ConflatedChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(LinkedListChannel, 'LinkedListChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor(ProducerScope, 'ProducerScope', interfaceMeta, VOID, [CoroutineScope, SendChannel], VOID, VOID, [1]);
  setMetadataFor(ProducerCoroutine, 'ProducerCoroutine', classMeta, ChannelCoroutine, [ChannelCoroutine, ProducerScope], VOID, VOID, [0, 1]);
  setMetadataFor($awaitCloseCOROUTINE$8, '$awaitCloseCOROUTINE$8', classMeta, CoroutineImpl);
  setMetadataFor(RendezvousChannel, 'RendezvousChannel', classMeta, AbstractChannel, VOID, VOID, VOID, [0, 1]);
  setMetadataFor($collectToCOROUTINE$9, '$collectToCOROUTINE$9', classMeta, CoroutineImpl);
  setMetadataFor(Flow, 'Flow', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  function fuse$default(context, capacity, onBufferOverflow, $super) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    return $super === VOID ? this.fuse_pocnsz_k$(context, capacity, onBufferOverflow) : $super.fuse_pocnsz_k$.call(this, context, capacity, onBufferOverflow);
  }
  setMetadataFor(FusibleFlow, 'FusibleFlow', interfaceMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(ChannelFlow, 'ChannelFlow', classMeta, VOID, [FusibleFlow], VOID, VOID, [1]);
  setMetadataFor(ChannelFlowBuilder, 'ChannelFlowBuilder', classMeta, ChannelFlow, VOID, VOID, VOID, [1]);
  setMetadataFor(CallbackFlowBuilder, 'CallbackFlowBuilder', classMeta, ChannelFlowBuilder, VOID, VOID, VOID, [1]);
  setMetadataFor(CancellableFlow, 'CancellableFlow', interfaceMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(AbstractFlow, 'AbstractFlow', classMeta, VOID, [Flow, CancellableFlow], VOID, VOID, [1]);
  setMetadataFor(SafeFlow, 'SafeFlow', classMeta, AbstractFlow, VOID, VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$10, '$collectCOROUTINE$10', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$11, '$collectCOROUTINE$11', classMeta, CoroutineImpl);
  setMetadataFor(ChannelAsFlow, 'ChannelAsFlow', classMeta, ChannelFlow, VOID, VOID, VOID, [1]);
  setMetadataFor($emitAllImplCOROUTINE$12, '$emitAllImplCOROUTINE$12', classMeta, CoroutineImpl);
  setMetadataFor($collectCOROUTINE$13, '$collectCOROUTINE$13', classMeta, CoroutineImpl);
  setMetadataFor(FlowCollector, 'FlowCollector', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(SharedFlow, 'SharedFlow', interfaceMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(MutableSharedFlow, 'MutableSharedFlow', interfaceMeta, VOID, [SharedFlow, FlowCollector], VOID, VOID, [1]);
  setMetadataFor(Emitter, 'Emitter', classMeta, VOID, [DisposableHandle]);
  setMetadataFor($collectCOROUTINE$14, '$collectCOROUTINE$14', classMeta, CoroutineImpl);
  setMetadataFor(AbstractSharedFlow, 'AbstractSharedFlow', classMeta);
  setMetadataFor(SharedFlowImpl, 'SharedFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, MutableSharedFlow, CancellableFlow, FusibleFlow], VOID, VOID, [1]);
  setMetadataFor(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot', classMeta);
  setMetadataFor(SharedFlowSlot, 'SharedFlowSlot', classMeta, AbstractSharedFlowSlot);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(SharingStarted, 'SharingStarted', interfaceMeta);
  setMetadataFor(SharingCommand, 'SharingCommand', classMeta, Enum);
  setMetadataFor(StartedEagerly, 'StartedEagerly', classMeta, VOID, [SharingStarted]);
  setMetadataFor(StartedLazily$command$slambda$slambda, 'StartedLazily$command$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(StartedLazily$command$slambda, 'StartedLazily$command$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(StartedLazily, 'StartedLazily', classMeta, VOID, [SharingStarted]);
  setMetadataFor(StartedWhileSubscribed$command$slambda, 'StartedWhileSubscribed$command$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(StartedWhileSubscribed$command$slambda_1, 'StartedWhileSubscribed$command$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(StartedWhileSubscribed, 'StartedWhileSubscribed', classMeta, VOID, [SharingStarted]);
  setMetadataFor(StateFlow, 'StateFlow', interfaceMeta, VOID, [SharedFlow], VOID, VOID, [1]);
  setMetadataFor(MutableStateFlow, 'MutableStateFlow', interfaceMeta, VOID, [StateFlow, MutableSharedFlow], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$15, '$collectCOROUTINE$15', classMeta, CoroutineImpl);
  setMetadataFor(StateFlowImpl, 'StateFlowImpl', classMeta, AbstractSharedFlow, [AbstractSharedFlow, MutableStateFlow, CancellableFlow, FusibleFlow], VOID, VOID, [1]);
  setMetadataFor(StateFlowSlot, 'StateFlowSlot', classMeta, AbstractSharedFlowSlot, VOID, VOID, VOID, [0]);
  setMetadataFor(SubscriptionCountStateFlow, 'SubscriptionCountStateFlow', classMeta, SharedFlowImpl, [StateFlow, SharedFlowImpl], VOID, VOID, [1]);
  setMetadataFor(ChannelFlow$_get_collectToFun_$slambda_j53z2e, 'ChannelFlow$<get-collectToFun>$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ChannelFlow$collect$slambda, 'ChannelFlow$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ChannelFlowOperator, 'ChannelFlowOperator', classMeta, ChannelFlow, VOID, VOID, VOID, [1, 2]);
  setMetadataFor(ChannelFlowOperatorImpl, 'ChannelFlowOperatorImpl', classMeta, ChannelFlowOperator, VOID, VOID, VOID, [1]);
  setMetadataFor(ChannelFlowOperator$collectWithContextUndispatched$slambda, 'ChannelFlowOperator$collectWithContextUndispatched$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$16, '$collectCOROUTINE$16', classMeta, CoroutineImpl);
  setMetadataFor(UndispatchedContextCollector$emitRef$slambda, 'UndispatchedContextCollector$emitRef$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(UndispatchedContextCollector, 'UndispatchedContextCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(StackFrameContinuation, 'StackFrameContinuation', classMeta, VOID, [Continuation, CoroutineStackFrame]);
  setMetadataFor(combineInternal$slambda$slambda$slambda, 'combineInternal$slambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(combineInternal$slambda$slambda, 'combineInternal$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(combineInternal$slambda, 'combineInternal$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(FlowCoroutine, 'FlowCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda, 'ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ChannelFlowTransformLatest$flowCollect$slambda$slambda, 'ChannelFlowTransformLatest$flowCollect$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(ChannelFlowTransformLatest$flowCollect$slambda, 'ChannelFlowTransformLatest$flowCollect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(ChannelFlowTransformLatest, 'ChannelFlowTransformLatest', classMeta, ChannelFlowOperator, VOID, VOID, VOID, [1]);
  setMetadataFor(NopCollector, 'NopCollector', objectMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(SendingCollector, 'SendingCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_2, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(DistinctFlowImpl$collect$slambda, 'DistinctFlowImpl$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(DistinctFlowImpl, 'DistinctFlowImpl', classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(ThrowingCollector, 'ThrowingCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$18, '$collectCOROUTINE$18', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_2, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_3, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(unsafeTransform$o$collect$slambda, 'unsafeTransform$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$19, '$collectCOROUTINE$19', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_3, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($invokeSafelyCOROUTINE$17, '$invokeSafelyCOROUTINE$17', classMeta, CoroutineImpl);
  setMetadataFor($emitCOROUTINE$22, '$emitCOROUTINE$22', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_4, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$21, '$collectCOROUTINE$21', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_5, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$23, '$emitCOROUTINE$23', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_6, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_4, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(dropWhile$o$collect$slambda, 'dropWhile$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$24, '$collectCOROUTINE$24', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_7, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($collectWhileCOROUTINE$20, '$collectWhileCOROUTINE$20', classMeta, CoroutineImpl);
  setMetadataFor(mapLatest$slambda, 'mapLatest$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(flatMapLatest$slambda, 'flatMapLatest$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($onSubscriptionCOROUTINE$25, '$onSubscriptionCOROUTINE$25', classMeta, CoroutineImpl);
  setMetadataFor(SubscribedFlowCollector, 'SubscribedFlowCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1, 0]);
  setMetadataFor(SharingConfig, 'SharingConfig', classMeta);
  setMetadataFor($collectCOROUTINE$26, '$collectCOROUTINE$26', classMeta, CoroutineImpl);
  setMetadataFor(ReadonlyStateFlow, 'ReadonlyStateFlow', classMeta, VOID, [StateFlow, CancellableFlow, FusibleFlow], VOID, VOID, [1]);
  setMetadataFor(launchSharing$slambda$slambda, 'launchSharing$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(launchSharing$slambda$slambda_1, 'launchSharing$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(launchSharing$slambda, 'launchSharing$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_5, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(map$o$collect$slambda, 'map$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$27, '$collectCOROUTINE$27', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_8, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_6, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(filter$o$collect$slambda, 'filter$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$28, '$collectCOROUTINE$28', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_9, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_7, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(runningFold$o$collect$slambda, 'runningFold$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$29, '$collectCOROUTINE$29', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_10, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_8, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(filterNotNull$o$collect$slambda, 'filterNotNull$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($collectCOROUTINE$30, '$collectCOROUTINE$30', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_11, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(combine$o$collect$slambda, 'combine$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$31, '$collectCOROUTINE$31', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_12, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor(combine$o$collect$slambda_1, 'combine$o$collect$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($collectCOROUTINE$32, '$collectCOROUTINE$32', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_13, VOID, classMeta, VOID, [Flow], VOID, VOID, [1]);
  setMetadataFor($emitCOROUTINE$34, '$emitCOROUTINE$34', classMeta, CoroutineImpl);
  setMetadataFor(_no_name_provided__qut3iv_14, VOID, classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor($firstCOROUTINE$33, '$firstCOROUTINE$33', classMeta, CoroutineImpl);
  setMetadataFor(ArrayQueue, 'ArrayQueue', classMeta);
  setMetadataFor(OpDescriptor, 'OpDescriptor', classMeta);
  setMetadataFor(AtomicOp, 'AtomicOp', classMeta, OpDescriptor);
  setMetadataFor(DispatchedContinuation, 'DispatchedContinuation', classMeta, DispatchedTask, [DispatchedTask, CoroutineStackFrame, Continuation]);
  setMetadataFor(InlineList, 'InlineList', classMeta);
  setMetadataFor(LimitedDispatcher, 'LimitedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Runnable, Delay], VOID, VOID, [1]);
  setMetadataFor(LockFreeTaskQueue, 'LockFreeTaskQueue', classMeta);
  setMetadataFor(Placeholder, 'Placeholder', classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(LockFreeTaskQueueCore, 'LockFreeTaskQueueCore', classMeta);
  setMetadataFor(UndeliveredElementException, 'UndeliveredElementException', classMeta, RuntimeException);
  setMetadataFor(ContextScope, 'ContextScope', classMeta, VOID, [CoroutineScope]);
  setMetadataFor(Symbol, 'Symbol', classMeta);
  setMetadataFor(SelectInstance, 'SelectInstance', interfaceMeta);
  setMetadataFor(SeqNumber, 'SeqNumber', classMeta);
  setMetadataFor(Empty_0, 'Empty', classMeta);
  function tryLock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.tryLock_jl1wg7_k$(owner) : $super.tryLock_jl1wg7_k$.call(this, owner);
  }
  function lock$default(owner, $completion, $super) {
    owner = owner === VOID ? null : owner;
    return $super === VOID ? this.lock_25dizd_k$(owner, $completion) : $super.lock_25dizd_k$.call(this, owner, $completion);
  }
  function unlock$default(owner, $super) {
    owner = owner === VOID ? null : owner;
    var tmp;
    if ($super === VOID) {
      this.unlock_uksyr8_k$(owner);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.unlock_uksyr8_k$.call(this, owner);
    }
    return tmp;
  }
  setMetadataFor(Mutex, 'Mutex', interfaceMeta, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(PrepareOp, 'PrepareOp', classMeta, OpDescriptor);
  setMetadataFor(TryLockDesc, 'TryLockDesc', classMeta, AtomicDesc);
  setMetadataFor(LockedQueue, 'LockedQueue', classMeta, LinkedListHead);
  setMetadataFor(LockWaiter, 'LockWaiter', classMeta, LinkedListNode, [LinkedListNode, DisposableHandle]);
  setMetadataFor(LockCont, 'LockCont', classMeta, LockWaiter);
  setMetadataFor(LockSelect, 'LockSelect', classMeta, LockWaiter);
  setMetadataFor(UnlockOp, 'UnlockOp', classMeta, AtomicOp);
  setMetadataFor(MutexImpl, 'MutexImpl', classMeta, VOID, [Mutex, SelectClause2], VOID, VOID, [1]);
  setMetadataFor($withLockCOROUTINE$35, '$withLockCOROUTINE$35', classMeta, CoroutineImpl);
  setMetadataFor(UndispatchedCoroutine, 'UndispatchedCoroutine', classMeta, ScopeCoroutine, VOID, VOID, VOID, [0]);
  setMetadataFor(Dispatchers, 'Dispatchers', objectMeta);
  setMetadataFor(JsMainDispatcher, 'JsMainDispatcher', classMeta, MainCoroutineDispatcher);
  setMetadataFor(UnconfinedEventLoop, 'UnconfinedEventLoop', classMeta, EventLoop);
  setMetadataFor(JobCancellationException, 'JobCancellationException', classMeta, CancellationException);
  setMetadataFor(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(NodeDispatcher, 'NodeDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(SetTimeoutDispatcher, 'SetTimeoutDispatcher', objectMeta, SetTimeoutBasedDispatcher, VOID, VOID, VOID, [1]);
  setMetadataFor(MessageQueue, 'MessageQueue', classMeta, ArrayQueue);
  setMetadataFor(ScheduledMessageQueue, 'ScheduledMessageQueue', classMeta, MessageQueue);
  setMetadataFor(ClearTimeout, 'ClearTimeout', classMeta, CancelHandler, [CancelHandler, DisposableHandle]);
  setMetadataFor(WindowDispatcher$invokeOnTimeout$1, VOID, classMeta, VOID, [DisposableHandle]);
  setMetadataFor(WindowDispatcher, 'WindowDispatcher', classMeta, CoroutineDispatcher, [CoroutineDispatcher, Delay], VOID, VOID, [1]);
  setMetadataFor(WindowMessageQueue, 'WindowMessageQueue', classMeta, MessageQueue);
  setMetadataFor(_no_name_provided__qut3iv_15, VOID, classMeta, VOID, [Runnable]);
  setMetadataFor(AbortFlowException, 'AbortFlowException', classMeta, CancellationException);
  setMetadataFor(ChildCancelledException, 'ChildCancelledException', classMeta, CancellationException);
  setMetadataFor(SafeCollector, 'SafeCollector', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(NoOpLock, 'NoOpLock', classMeta);
  setMetadataFor(PrepareOp_0, 'PrepareOp', classMeta, OpDescriptor);
  setMetadataFor(LocalAtomicInt, 'LocalAtomicInt', classMeta);
  setMetadataFor(CommonThreadLocal, 'CommonThreadLocal', classMeta);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.initParentJob_4c2lht_k$(parentContext.get_j1ktw6_k$(Key_getInstance_3()));
    }
    this.context_1 = parentContext.plus_rgw9wi_k$(this);
  }
  protoOf(AbstractCoroutine).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(AbstractCoroutine).get_coroutineContext_115oqo_k$ = function () {
    return this.context_1;
  };
  protoOf(AbstractCoroutine).get_isActive_quafmh_k$ = function () {
    return protoOf(JobSupport).get_isActive_quafmh_k$.call(this);
  };
  protoOf(AbstractCoroutine).onCompleted_wmtzyo_k$ = function (value) {
  };
  protoOf(AbstractCoroutine).onCancelled_oqqex5_k$ = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).cancellationExceptionMessage_a64063_k$ = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).onCompletionInternal_39c1g8_k$ = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.onCancelled_oqqex5_k$(state.get_cause_iplhs0_k$(), state.get_handled_cq14k3_k$());
    } else {
      this.onCompleted_wmtzyo_k$((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  protoOf(AbstractCoroutine).resumeWith_s3a3yh_k$ = function (result) {
    var state = this.makeCompletingOnce_b13xy2_k$(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.afterResume_ufx9w9_k$(state);
  };
  protoOf(AbstractCoroutine).afterResume_ufx9w9_k$ = function (state) {
    return this.afterCompletion_2ogq6g_k$(state);
  };
  protoOf(AbstractCoroutine).handleOnCompletionException_o179kb_k$ = function (exception) {
    handleCoroutineException(this.context_1, exception);
  };
  protoOf(AbstractCoroutine).nameString_cd9e9w_k$ = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.context_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).nameString_cd9e9w_k$.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).nameString_cd9e9w_k$.call(this);
  };
  protoOf(AbstractCoroutine).start_eui3tp_k$ = function (start, receiver, block) {
    start.invoke_gvylz3_k$(block, receiver, this);
  };
  function InternalCoroutinesApi() {
  }
  protoOf(InternalCoroutinesApi).equals = function (other) {
    if (!(other instanceof InternalCoroutinesApi))
      return false;
    other instanceof InternalCoroutinesApi || THROW_CCE();
    return true;
  };
  protoOf(InternalCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(InternalCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.InternalCoroutinesApi()';
  };
  function FlowPreview() {
  }
  protoOf(FlowPreview).equals = function (other) {
    if (!(other instanceof FlowPreview))
      return false;
    other instanceof FlowPreview || THROW_CCE();
    return true;
  };
  protoOf(FlowPreview).hashCode = function () {
    return 0;
  };
  protoOf(FlowPreview).toString = function () {
    return '@kotlinx.coroutines.FlowPreview()';
  };
  function ExperimentalCoroutinesApi() {
  }
  protoOf(ExperimentalCoroutinesApi).equals = function (other) {
    if (!(other instanceof ExperimentalCoroutinesApi))
      return false;
    other instanceof ExperimentalCoroutinesApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalCoroutinesApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalCoroutinesApi).toString = function () {
    return '@kotlinx.coroutines.ExperimentalCoroutinesApi()';
  };
  function joinAll(_this__u8e3s4, $completion) {
    var tmp = new $joinAllCOROUTINE$0(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function awaitAll(_this__u8e3s4, $completion) {
    var tmp = new $awaitAllCOROUTINE$1(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function _get_nodes__dowtds($this) {
    return $this.nodes_1;
  }
  function _get_continuation__y3gzck($this) {
    return $this.continuation_1;
  }
  function _get__disposer__sxelfj($this) {
    return $this._disposer_1;
  }
  function _get_deferreds__o26roj($this) {
    return $this.deferreds_1;
  }
  function _get_notCompletedCount__7wje9m($this) {
    return $this.notCompletedCount_1;
  }
  function DisposeHandlersOnCancel($outer, nodes) {
    this.$this_1 = $outer;
    CancelHandler.call(this);
    this.nodes_1 = nodes;
  }
  protoOf(DisposeHandlersOnCancel).disposeAll_hqizwv_k$ = function () {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.nodes_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlinx.coroutines.DisposeHandlersOnCancel.disposeAll.<anonymous>' call
      element.get_handle_e5p7ht_k$().dispose_3n44we_k$();
    }
  };
  protoOf(DisposeHandlersOnCancel).invoke_7fb7sc_k$ = function (cause) {
    this.disposeAll_hqizwv_k$();
  };
  protoOf(DisposeHandlersOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(DisposeHandlersOnCancel).toString = function () {
    return 'DisposeHandlersOnCancel[' + this.nodes_1 + ']';
  };
  function AwaitAllNode($outer, continuation) {
    this.$this_1 = $outer;
    JobNode.call(this);
    this.continuation_1 = continuation;
    this._disposer_1 = atomic$ref$1(null);
  }
  protoOf(AwaitAllNode).set_handle_vg5jax_k$ = function (_set____db54di) {
    this.handle_1 = _set____db54di;
  };
  protoOf(AwaitAllNode).get_handle_e5p7ht_k$ = function () {
    var tmp = this.handle_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('handle');
    }
  };
  protoOf(AwaitAllNode).set_disposer_iw5p2i_k$ = function (value) {
    this._disposer_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  };
  protoOf(AwaitAllNode).get_disposer_r356h0_k$ = function () {
    return this._disposer_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AwaitAllNode).invoke_7fb7sc_k$ = function (cause) {
    if (!(cause == null)) {
      var token = this.continuation_1.tryResumeWithException_3icka9_k$(cause);
      if (!(token == null)) {
        this.continuation_1.completeResume_fu4ex_k$(token);
        var tmp0_safe_receiver = this.get_disposer_r356h0_k$();
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.disposeAll_hqizwv_k$();
        }
      }
    } else if (this.$this_1.notCompletedCount_1.atomicfu$decrementAndGet() === 0) {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp1_resume = this.continuation_1;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = this.$this_1.deferreds_1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.length);
      var inductionVariable = 0;
      var last = tmp0_map.length;
      while (inductionVariable < last) {
        var item = tmp0_map[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.AwaitAllNode.invoke.<anonymous>' call
        tmp$ret$0 = item.getCompleted_nczk2z_k$();
        tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
      }
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_mapTo);
      tmp1_resume.resumeWith_s3a3yh_k$(tmp$ret$3);
    }
  };
  protoOf(AwaitAllNode).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function AwaitAll(deferreds) {
    this.deferreds_1 = deferreds;
    this.notCompletedCount_1 = atomic$int$1(this.deferreds_1.length);
  }
  protoOf(AwaitAll).await_hrlwee_k$ = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.AwaitAll.await.<anonymous>' call
    var tmp = 0;
    var tmp_0 = this.deferreds_1.length;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var deferred = this.deferreds_1[tmp_2];
      deferred.start_1tchgi_k$();
      // Inline function 'kotlin.apply' call
      var tmp0_apply = new AwaitAllNode(this, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.AwaitAll.await.<anonymous>.<anonymous>' call
      var tmp_3 = tmp0_apply;
      // Inline function 'kotlinx.coroutines.asHandler' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_3.handle_1 = deferred.invokeOnCompletion_t2apld_k$(tmp0_apply);
      tmp_1[tmp_2] = tmp0_apply;
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
      element.set_disposer_iw5p2i_k$(disposer);
    }
    if (cancellable.get_isCompleted_a6j6c8_k$()) {
      disposer.disposeAll_hqizwv_k$();
    } else {
      // Inline function 'kotlinx.coroutines.asHandler' call
      // Inline function 'kotlin.js.asDynamic' call
      cancellable.invokeOnCancellation_yygv6h_k$(disposer);
    }
    return cancellable.getResult_clfhg3_k$();
  };
  function $joinAllCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($joinAllCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.tmp0_iterator0__1 = this._this__u8e3s4__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!this.tmp0_iterator0__1.hasNext_bitz1p_k$()) {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

            this.element1__1 = this.tmp0_iterator0__1.next_20eer_k$();
            this.set_state_a96kl8_k$(2);
            suspendResult = this.element1__1.join_kbq7u1_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $awaitAllCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitAllCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            if (this._this__u8e3s4__1.isEmpty_y1axqb_k$()) {
              this.WHEN_RESULT0__1 = emptyList();
              this.set_state_a96kl8_k$(2);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              suspendResult = (new AwaitAll(copyToArray(this._this__u8e3s4__1))).await_hrlwee_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            return this.WHEN_RESULT0__1;
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.get_isLazy_ew1d53_k$() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_eui3tp_k$(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.withContext.<anonymous>' call
      var oldContext = $completion.get_context_h02k06_k$();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.get_j1ktw6_k$(Key_getInstance()), oldContext.get_j1ktw6_k$(Key_getInstance()))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.getResult_clfhg3_k$();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).handleJobException_oc4gxk_k$ = function (exception) {
    handleCoroutineException(this.get_context_h02k06_k$(), exception);
    return true;
  };
  function _get_continuation__y3gzck_0($this) {
    return $this.continuation_1;
  }
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).onStart_qth026_k$ = function () {
    startCoroutineCancellable_1(this.continuation_1, this);
  };
  function _get__decision__uou2k6($this) {
    return $this._decision_1;
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.trySuspend.<anonymous>' call
      switch (tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$()) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.DispatchedCoroutine.tryResume.<anonymous>' call
      switch (tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$()) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this._decision_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).afterCompletion_2ogq6g_k$ = function (state) {
    this.afterResume_ufx9w9_k$(state);
  };
  protoOf(DispatchedCoroutine).afterResume_ufx9w9_k$ = function (state) {
    if (tryResume(this))
      return Unit_getInstance();
    resumeCancellableWith(intercepted(this.get_uCont_iyyiam_k$()), recoverResult(state, this.get_uCont_iyyiam_k$()));
  };
  protoOf(DispatchedCoroutine).getResult_clfhg3_k$ = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.get_state_iypx7s_k$());
    if (state instanceof CompletedExceptionally)
      throw state.get_cause_iplhs0_k$();
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.get_isLazy_ew1d53_k$() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.start_eui3tp_k$(start, coroutine, block);
    return coroutine;
  }
  function $awaitCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.awaitInternal_pz51jj_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).getCompleted_nczk2z_k$ = function () {
    var tmp = this.getCompletedInternal_26f4i6_k$();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(DeferredCoroutine).await_xhs9og_k$ = function ($completion) {
    var tmp = new $awaitCOROUTINE$2(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DeferredCoroutine).get_onAwait_l48qpe_k$ = function () {
    return this;
  };
  protoOf(DeferredCoroutine).registerSelectClause1_7bev4b_k$ = function (select, block) {
    return this.registerSelectClause1Internal_77s7gf_k$(select, block);
  };
  protoOf(DeferredCoroutine).registerSelectClause1_cysp94_k$ = function (select, block) {
    return this.registerSelectClause1_7bev4b_k$(select, block);
  };
  function _get_continuation__y3gzck_1($this) {
    return $this.continuation_1;
  }
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.continuation_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).onStart_qth026_k$ = function () {
    startCoroutineCancellable_1(this.continuation_1, this);
  };
  function suspendCancellableCoroutine(block, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    block(cancellable);
    return cancellable.getResult_clfhg3_k$();
  }
  function CancellableContinuation() {
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new DisposeOnCancel(handle);
    return _this__u8e3s4.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function _get_handle__ls055p($this) {
    return $this.handle_1;
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  protoOf(DisposeOnCancel).invoke_7fb7sc_k$ = function (cause) {
    return this.handle_1.dispose_3n44we_k$();
  };
  protoOf(DisposeOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + this.handle_1 + ']';
  };
  function suspendCancellableCoroutineReusable(block, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    block(cancellable);
    return cancellable.getResult_clfhg3_k$();
  }
  function removeOnCancellation(_this__u8e3s4, node) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new RemoveOnCancel(node);
    return _this__u8e3s4.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.claimReusableCancellableContinuation_oatv30_k$();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      if (tmp0_safe_receiver.resetStateReusable_a3kq5v_k$()) {
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
  function _get_node__db0vwp($this) {
    return $this.node_1;
  }
  function RemoveOnCancel(node) {
    BeforeResumeCancelHandler.call(this);
    this.node_1 = node;
  }
  protoOf(RemoveOnCancel).invoke_7fb7sc_k$ = function (cause) {
    this.node_1.remove_fgfybg_k$();
  };
  protoOf(RemoveOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(RemoveOnCancel).toString = function () {
    return 'RemoveOnCancel[' + this.node_1 + ']';
  };
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get__decision__uou2k6_0($this) {
    return $this._decision_1;
  }
  function _get__state__37adl3($this) {
    return $this._state_1;
  }
  function _set_parentHandle__bde57($this, _set____db54di) {
    $this.parentHandle_1 = _set____db54di;
  }
  function _get_parentHandle__f8dcex($this) {
    return $this.parentHandle_1;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.get_state_iypx7s_k$();
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
    if (get_isReusableMode($this.get_resumeMode_te1i4n_k$())) {
      var tmp_0 = $this.delegate_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_hrfetn_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.delegate_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_723ard_k$(cause);
  }
  function callCancelHandlerSafely($this, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
      } else {
        throw $p;
      }
    }
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      switch (tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$()) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._decision_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      switch (tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$()) {
        case 0:
          if ($this._decision_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ChildContinuation($this);
    var handle = parent.invokeOnCompletion$default_gp7u53_k$(true, VOID, tmp$ret$1);
    $this.parentHandle_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.delegate_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_5s4a1c_k$($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.detachChild_qdtbew_k$();
    $this.cancel_as6ug7_k$(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
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
      return Unit_getInstance();
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
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
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
    var tmp0_loop = $this._state_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
          var update = resumedState($this, tmp1_anonymous, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this._state_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp1_anonymous instanceof CancelledContinuation) {
            if (tmp1_anonymous.makeResumed_vjvawn_k$()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.callOnCancellation_adp92k_k$(onCancellation, tmp1_anonymous.get_cause_iplhs0_k$());
              }
              return Unit_getInstance();
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
    var tmp0_loop = $this._state_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
          var update = resumedState($this, tmp1_anonymous, proposedUpdate, $this.get_resumeMode_te1i4n_k$(), onCancellation, idempotent);
          if (!$this._state_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp1_anonymous instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1_anonymous.idempotentResume_1 === idempotent : false) {
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
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.detachChild_qdtbew_k$();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.delegate_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.context_1 = this.delegate_1.get_context_h02k06_k$();
    this._decision_1 = atomic$int$1(0);
    this._state_1 = atomic$ref$1(Active_getInstance());
    this.parentHandle_1 = null;
  }
  protoOf(CancellableContinuationImpl).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(CancellableContinuationImpl).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(CancellableContinuationImpl).get_state_iypx7s_k$ = function () {
    return this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(CancellableContinuationImpl).get_isActive_quafmh_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(tmp == null) ? isInterface(tmp, NotCompleted) : false;
  };
  protoOf(CancellableContinuationImpl).get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).get_isCancelled_trk8pu_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return tmp instanceof CancelledContinuation;
  };
  protoOf(CancellableContinuationImpl).initCancellability_sh6jkn_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3n44we_k$();
      this.parentHandle_1 = NonDisposableHandle_getInstance();
    }
  };
  protoOf(CancellableContinuationImpl).resetStateReusable_a3kq5v_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.idempotentResume_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.detachChild_qdtbew_k$();
      return false;
    }
    this._decision_1.set_kotlinx$atomicfu$value_3lx0f_k$(0);
    this._state_1.set_kotlinx$atomicfu$value_koguff_k$(Active_getInstance());
    return true;
  };
  protoOf(CancellableContinuationImpl).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.delegate_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(CancellableContinuationImpl).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(CancellableContinuationImpl).takeState_olvzuy_k$ = function () {
    return this.get_state_iypx7s_k$();
  };
  protoOf(CancellableContinuationImpl).cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp1_anonymous instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp1_anonymous instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!!tmp1_anonymous.get_cancelled_ge9r54_k$()) {
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              var message = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1_anonymous.copy$default_g8p7u0_k$(VOID, VOID, VOID, VOID, cause);
            if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
              tmp1_anonymous.invokeHandlers_2wd6qe_k$(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, new CompletedContinuation(tmp1_anonymous, VOID, VOID, VOID, cause))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  protoOf(CancellableContinuationImpl).cancel_as6ug7_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        if (!(!(tmp1_anonymous == null) ? isInterface(tmp1_anonymous, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1_anonymous instanceof CancelHandler);
        if (!this._state_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1_anonymous instanceof CancelHandler ? tmp1_anonymous : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver, cause);
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.get_resumeMode_te1i4n_k$());
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).parentCancelled_uc06zq_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_as6ug7_k$(cause);
    detachChildIfNonResuable(this);
  };
  protoOf(CancellableContinuationImpl).callCancelHandler_qcjvzx_k$ = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, ex));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).callOnCancellation_adp92k_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.get_context_h02k06_k$(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    return parent.getCancellationException_8i1q6u_k$();
  };
  protoOf(CancellableContinuationImpl).getResult_clfhg3_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (this.parentHandle_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.get_state_iypx7s_k$();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.get_cause_iplhs0_k$(), this);
    if (get_isCancellableMode(this.get_resumeMode_te1i4n_k$())) {
      var job = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
      if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_tweln2_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.getSuccessfulResult_t876z0_k$(state);
  };
  protoOf(CancellableContinuationImpl).resumeWith_s3a3yh_k$ = function (result) {
    return resumeImpl$default(this, toState(result, this), this.get_resumeMode_te1i4n_k$());
  };
  protoOf(CancellableContinuationImpl).resume_l1w5in_k$ = function (value, onCancellation) {
    return resumeImpl(this, value, this.get_resumeMode_te1i4n_k$(), onCancellation);
  };
  protoOf(CancellableContinuationImpl).invokeOnCancellation_yygv6h_k$ = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1_anonymous instanceof Active) {
        if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp1_anonymous instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1_anonymous);
        } else {
          if (tmp1_anonymous instanceof CompletedExceptionally) {
            if (!tmp1_anonymous.makeHandled_ws9oq6_k$()) {
              multipleHandlersError(this, handler, tmp1_anonymous);
            }
            if (tmp1_anonymous instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1_anonymous instanceof CompletedExceptionally ? tmp1_anonymous : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$());
            }
            return Unit_getInstance();
          } else {
            if (tmp1_anonymous instanceof CompletedContinuation) {
              if (!(tmp1_anonymous.cancelHandler_1 == null)) {
                multipleHandlersError(this, handler, tmp1_anonymous);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1_anonymous.get_cancelled_ge9r54_k$()) {
                callCancelHandler(this, handler, tmp1_anonymous.cancelCause_1);
                return Unit_getInstance();
              }
              var update = tmp1_anonymous.copy$default_g8p7u0_k$(VOID, cancelHandler);
              if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = new CompletedContinuation(tmp1_anonymous, cancelHandler);
              if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  protoOf(CancellableContinuationImpl).detachChild_qdtbew_k$ = function () {
    var tmp0_elvis_lhs = this.parentHandle_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_3n44we_k$();
    this.parentHandle_1 = NonDisposableHandle_getInstance();
  };
  protoOf(CancellableContinuationImpl).tryResume_10oxem_k$ = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  protoOf(CancellableContinuationImpl).tryResume_93jc0s_k$ = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).tryResumeWithException_3icka9_k$ = function (exception) {
    return tryResumeImpl(this, new CompletedExceptionally(exception), null, null);
  };
  protoOf(CancellableContinuationImpl).completeResume_fu4ex_k$ = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.get_resumeMode_te1i4n_k$());
  };
  protoOf(CancellableContinuationImpl).resumeUndispatched_re4yxz_k$ = function (_this__u8e3s4, value) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.get_dispatcher_usy1bk_k$()) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.get_resumeMode_te1i4n_k$();
    }
    resumeImpl$default(this, value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).resumeUndispatchedWithException_xuy3rd_k$ = function (_this__u8e3s4, exception) {
    var tmp = this.delegate_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0 = new CompletedExceptionally(exception);
    var tmp_1;
    if ((dc == null ? null : dc.get_dispatcher_usy1bk_k$()) === _this__u8e3s4) {
      tmp_1 = get_MODE_UNDISPATCHED();
    } else {
      tmp_1 = this.get_resumeMode_te1i4n_k$();
    }
    resumeImpl$default(this, tmp_0, tmp_1);
  };
  protoOf(CancellableContinuationImpl).getSuccessfulResult_t876z0_k$ = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      var tmp_0 = state.result_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).getExceptionalResult_bnge6_k$.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.delegate_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.nameString_cd9e9w_k$() + '(' + toDebugString(this.delegate_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).nameString_cd9e9w_k$ = function () {
    return 'CancellableContinuation';
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  function get_UNDECIDED_0() {
    return UNDECIDED_0;
  }
  var UNDECIDED_0;
  function Active() {
    Active_instance = this;
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.result_1 = result;
    this.cancelHandler_1 = cancelHandler;
    this.onCancellation_1 = onCancellation;
    this.idempotentResume_1 = idempotentResume;
    this.cancelCause_1 = cancelCause;
  }
  protoOf(CompletedContinuation).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedContinuation).get_cancelHandler_w4ijbb_k$ = function () {
    return this.cancelHandler_1;
  };
  protoOf(CompletedContinuation).get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedContinuation).get_idempotentResume_61d27l_k$ = function () {
    return this.idempotentResume_1;
  };
  protoOf(CompletedContinuation).get_cancelCause_cj8bx6_k$ = function () {
    return this.cancelCause_1;
  };
  protoOf(CompletedContinuation).get_cancelled_ge9r54_k$ = function () {
    return !(this.cancelCause_1 == null);
  };
  protoOf(CompletedContinuation).invokeHandlers_2wd6qe_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this.cancelHandler_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.callCancelHandler_qcjvzx_k$(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.onCancellation_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.callOnCancellation_adp92k_k$(tmp1_safe_receiver, cause);
    }
  };
  protoOf(CompletedContinuation).component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedContinuation).component2_7eebsb_k$ = function () {
    return this.cancelHandler_1;
  };
  protoOf(CompletedContinuation).component3_7eebsa_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedContinuation).component4_7eebs9_k$ = function () {
    return this.idempotentResume_1;
  };
  protoOf(CompletedContinuation).component5_7eebs8_k$ = function () {
    return this.cancelCause_1;
  };
  protoOf(CompletedContinuation).copy_q5vocy_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).copy$default_g8p7u0_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.result_1 : result;
    cancelHandler = cancelHandler === VOID ? this.cancelHandler_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.onCancellation_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.idempotentResume_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.cancelCause_1 : cancelCause;
    return $super === VOID ? this.copy_q5vocy_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.copy_q5vocy_k$.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString(this.result_1) + ', cancelHandler=' + this.cancelHandler_1 + ', onCancellation=' + this.onCancellation_1 + ', idempotentResume=' + toString(this.idempotentResume_1) + ', cancelCause=' + this.cancelCause_1 + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + (this.cancelHandler_1 == null ? 0 : hashCode(this.cancelHandler_1)) | 0;
    result = imul(result, 31) + (this.onCancellation_1 == null ? 0 : hashCode(this.onCancellation_1)) | 0;
    result = imul(result, 31) + (this.idempotentResume_1 == null ? 0 : hashCode(this.idempotentResume_1)) | 0;
    result = imul(result, 31) + (this.cancelCause_1 == null ? 0 : hashCode(this.cancelCause_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.cancelHandler_1, tmp0_other_with_cast.cancelHandler_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    if (!equals(this.idempotentResume_1, tmp0_other_with_cast.idempotentResume_1))
      return false;
    if (!equals(this.cancelCause_1, tmp0_other_with_cast.cancelCause_1))
      return false;
    return true;
  };
  function get_SUSPENDED_0() {
    return SUSPENDED_0;
  }
  var SUSPENDED_0;
  function get_RESUMED_0() {
    return RESUMED_0;
  }
  var RESUMED_0;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  function _get_handler__z70553($this) {
    return $this.handler_1;
  }
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.handler_1 = handler;
  }
  protoOf(InvokeOnCancel).invoke_7fb7sc_k$ = function (cause) {
    this.handler_1(cause);
  };
  protoOf(InvokeOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(InvokeOnCancel).toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.handler_1) + '@' + get_hexAddress(this) + ']';
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred() {
  }
  function CompletableDeferred_0(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.awaitInternal_pz51jj_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_4c2lht_k$(parent);
  }
  protoOf(CompletableDeferredImpl).get_onCancelComplete_4lfsth_k$ = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).getCompleted_nczk2z_k$ = function () {
    var tmp = this.getCompletedInternal_26f4i6_k$();
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CompletableDeferredImpl).await_xhs9og_k$ = function ($completion) {
    var tmp = new $awaitCOROUTINE$3(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CompletableDeferredImpl).get_onAwait_l48qpe_k$ = function () {
    return this;
  };
  protoOf(CompletableDeferredImpl).registerSelectClause1_7bev4b_k$ = function (select, block) {
    return this.registerSelectClause1Internal_77s7gf_k$(select, block);
  };
  protoOf(CompletableDeferredImpl).registerSelectClause1_cysp94_k$ = function (select, block) {
    return this.registerSelectClause1_7bev4b_k$(select, block);
  };
  protoOf(CompletableDeferredImpl).complete_8y7ynm_k$ = function (value) {
    return this.makeCompleting_2ycklh_k$(value);
  };
  protoOf(CompletableDeferredImpl).completeExceptionally_7s0ccc_k$ = function (exception) {
    return this.makeCompleting_2ycklh_k$(new CompletedExceptionally(exception));
  };
  function CompletableJob() {
  }
  function _get__handled__q1dawe($this) {
    return $this._handled_1;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.cause_1 = cause;
    this._handled_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(CompletedExceptionally).get_handled_cq14k3_k$ = function () {
    return this._handled_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(CompletedExceptionally).makeHandled_ws9oq6_k$ = function () {
    return this._handled_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.cause_1 + ']';
  };
  function _get__resumed__kg85kj($this) {
    return $this._resumed_1;
  }
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : cause, handled);
    this._resumed_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).makeResumed_vjvawn_k$ = function () {
    return this._resumed_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
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
      var tmp0_anonymous = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp = !(onCancellation == null) ? new CompletedWithCancellation(tmp0_anonymous, onCancellation) : tmp0_anonymous;
    } else {
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.result_1 = result;
    this.onCancellation_1 = onCancellation;
  }
  protoOf(CompletedWithCancellation).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedWithCancellation).get_onCancellation_no7t6d_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedWithCancellation).component1_7eebsc_k$ = function () {
    return this.result_1;
  };
  protoOf(CompletedWithCancellation).component2_7eebsb_k$ = function () {
    return this.onCancellation_1;
  };
  protoOf(CompletedWithCancellation).copy_eadg01_k$ = function (result, onCancellation) {
    return new CompletedWithCancellation(result, onCancellation);
  };
  protoOf(CompletedWithCancellation).copy$default_y4c1k2_k$ = function (result, onCancellation, $super) {
    result = result === VOID ? this.result_1 : result;
    onCancellation = onCancellation === VOID ? this.onCancellation_1 : onCancellation;
    return $super === VOID ? this.copy_eadg01_k$(result, onCancellation) : $super.copy_eadg01_k$.call(this, result, onCancellation);
  };
  protoOf(CompletedWithCancellation).toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.result_1) + ', onCancellation=' + this.onCancellation_1 + ')';
  };
  protoOf(CompletedWithCancellation).hashCode = function () {
    var result = this.result_1 == null ? 0 : hashCode(this.result_1);
    result = imul(result, 31) + hashCode(this.onCancellation_1) | 0;
    return result;
  };
  protoOf(CompletedWithCancellation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.result_1, tmp0_other_with_cast.result_1))
      return false;
    if (!equals(this.onCancellation_1, tmp0_other_with_cast.onCancellation_1))
      return false;
    return true;
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      var tmp1_failure = recoverStackTrace(state.cause_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
    } else {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp3_success = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      tmp = _Result___init__impl__xyqfz8(tmp3_success);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  protoOf(CoroutineDispatcher).isDispatchNeeded_fmz9vn_k$ = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return new LimitedDispatcher(this, parallelism);
  };
  protoOf(CoroutineDispatcher).dispatchYield_ww21f6_k$ = function (context, block) {
    return this.dispatch_o98ux7_k$(context, block);
  };
  protoOf(CoroutineDispatcher).interceptContinuation_gcmqkx_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).releaseInterceptedContinuation_4i98ok_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_wtm6d2_k$();
  };
  protoOf(CoroutineDispatcher).plus_jld99k_k$ = function (other) {
    return other;
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_j1ktw6_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.handleException_w1h9is_k$(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleCoroutineExceptionImpl(context, handlerException(exception, t));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
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
  function CoroutineExceptionHandler_0(handler) {
    return new _no_name_provided__qut3iv(handler);
  }
  function _no_name_provided__qut3iv($handler) {
    this.$handler_1 = $handler;
    AbstractCoroutineContextElement.call(this, Key_getInstance_1());
  }
  protoOf(_no_name_provided__qut3iv).handleException_w1h9is_k$ = function (context, exception) {
    return this.$handler_1(context, exception);
  };
  function Key_2() {
    Key_instance_1 = this;
  }
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.name_1 = name;
  }
  protoOf(CoroutineName).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  protoOf(CoroutineName).toString = function () {
    return 'CoroutineName(' + this.name_1 + ')';
  };
  protoOf(CoroutineName).component1_7eebsc_k$ = function () {
    return this.name_1;
  };
  protoOf(CoroutineName).copy_3t26ic_k$ = function (name) {
    return new CoroutineName(name);
  };
  protoOf(CoroutineName).copy$default_hajcdj_k$ = function (name, $super) {
    name = name === VOID ? this.name_1 : name;
    return $super === VOID ? this.copy_3t26ic_k$(name) : $super.copy_3t26ic_k$.call(this, name);
  };
  protoOf(CoroutineName).hashCode = function () {
    return getStringHashCode(this.name_1);
  };
  protoOf(CoroutineName).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.name_1 === tmp0_other_with_cast.name_1))
      return false;
    return true;
  };
  function CoroutineScope() {
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.get_j1ktw6_k$(Key_getInstance_3()) == null) ? context : context.plus_rgw9wi_k$(Job_0()));
  }
  function coroutineScope(block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.coroutineScope.<anonymous>' call
    var coroutine = new ScopeCoroutine($completion.get_context_h02k06_k$(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function cancel_1(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.cancel_4b7aim_k$(cause);
  }
  function MainScope() {
    return new ContextScope(SupervisorJob().plus_rgw9wi_k$(Dispatchers_getInstance().get_Main_wo5vz6_k$()));
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_coroutineContext_115oqo_k$().get_j1ktw6_k$(Key_getInstance_3());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isActive_quafmh_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function cancel_2(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return cancel_1(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function currentCoroutineContext($completion) {
    // Inline function 'kotlin.js.getCoroutineContext' call
    return $completion.get_context_h02k06_k$();
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  function values() {
    return [CoroutineStart_DEFAULT_getInstance(), CoroutineStart_LAZY_getInstance(), CoroutineStart_ATOMIC_getInstance(), CoroutineStart_UNDISPATCHED_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'DEFAULT':
        return CoroutineStart_DEFAULT_getInstance();
      case 'LAZY':
        return CoroutineStart_LAZY_getInstance();
      case 'ATOMIC':
        return CoroutineStart_ATOMIC_getInstance();
      case 'UNDISPATCHED':
        return CoroutineStart_UNDISPATCHED_getInstance();
      default:
        CoroutineStart_initEntries();
        THROW_ISE();
        break;
    }
  }
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).invoke_80e41m_k$ = function (block, completion) {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        startCoroutineCancellable_0(block, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).invoke_gvylz3_k$ = function (block, receiver, completion) {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine_0(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched_0(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).get_isLazy_ew1d53_k$ = function () {
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
  function CopyableThrowable() {
  }
  function Deferred() {
  }
  function Delay() {
  }
  function delay_0(timeMillis, $completion) {
    if (timeMillis.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    if (timeMillis.compareTo_n4fqi2_k$(Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$()) < 0) {
      get_delay(cancellable.get_context_h02k06_k$()).scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, cancellable);
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function get_DISPOSED_TASK() {
    _init_properties_EventLoop_common_kt__pwfggr();
    return DISPOSED_TASK;
  }
  var DISPOSED_TASK;
  function get_CLOSED_EMPTY() {
    _init_properties_EventLoop_common_kt__pwfggr();
    return CLOSED_EMPTY;
  }
  var CLOSED_EMPTY;
  function _set_useCount__kwzmz3($this, _set____db54di) {
    $this.useCount_1 = _set____db54di;
  }
  function _get_useCount__843bib($this) {
    return $this.useCount_1;
  }
  function _set_shared__q6vn2($this, _set____db54di) {
    $this.shared_1 = _set____db54di;
  }
  function _get_shared__qjozq($this) {
    return $this.shared_1;
  }
  function _set_unconfinedQueue__ri92ob($this, _set____db54di) {
    $this.unconfinedQueue_1 = _set____db54di;
  }
  function _get_unconfinedQueue__heiv5r($this) {
    return $this.unconfinedQueue_1;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.useCount_1 = new Long(0, 0);
    this.shared_1 = false;
    this.unconfinedQueue_1 = null;
  }
  protoOf(EventLoop).processNextEvent_jmndfc_k$ = function () {
    if (!this.processUnconfinedEvent_mypjl6_k$())
      return Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$();
    return new Long(0, 0);
  };
  protoOf(EventLoop).get_isEmpty_zauvru_k$ = function () {
    return this.get_isUnconfinedQueueEmpty_mi405s_k$();
  };
  protoOf(EventLoop).get_nextTime_88vw7r_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    return queue.get_isEmpty_zauvru_k$() ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : new Long(0, 0);
  };
  protoOf(EventLoop).processUnconfinedEvent_mypjl6_k$ = function () {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_eges3a_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_mw4iiu_k$();
    return true;
  };
  protoOf(EventLoop).shouldBeProcessedFromContext_tzcyz7_k$ = function () {
    return false;
  };
  protoOf(EventLoop).dispatchUnconfined_do6j6f_k$ = function (task) {
    var tmp0_elvis_lhs = this.unconfinedQueue_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.unconfinedQueue_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_xhfl3v_k$(task);
  };
  protoOf(EventLoop).get_isActive_quafmh_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0;
  };
  protoOf(EventLoop).get_isUnconfinedLoopActive_g78ri6_k$ = function () {
    return this.useCount_1.compareTo_n4fqi2_k$(delta(this, true)) >= 0;
  };
  protoOf(EventLoop).get_isUnconfinedQueueEmpty_mi405s_k$ = function () {
    var tmp0_safe_receiver = this.unconfinedQueue_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isEmpty_zauvru_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).incrementUseCount_ocukpa_k$ = function (unconfined) {
    this.useCount_1 = this.useCount_1.plus_u6jwas_k$(delta(this, unconfined));
    if (!unconfined)
      this.shared_1 = true;
  };
  protoOf(EventLoop).incrementUseCount$default_cfnf22_k$ = function (unconfined, $super) {
    unconfined = unconfined === VOID ? false : unconfined;
    var tmp;
    if ($super === VOID) {
      this.incrementUseCount_ocukpa_k$(unconfined);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.incrementUseCount_ocukpa_k$.call(this, unconfined);
    }
    return tmp;
  };
  protoOf(EventLoop).decrementUseCount_saho26_k$ = function (unconfined) {
    this.useCount_1 = this.useCount_1.minus_llf5ei_k$(delta(this, unconfined));
    if (this.useCount_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.shared_1) {
      this.shutdown_cq5p8b_k$();
    }
  };
  protoOf(EventLoop).decrementUseCount$default_fi51yi_k$ = function (unconfined, $super) {
    unconfined = unconfined === VOID ? false : unconfined;
    var tmp;
    if ($super === VOID) {
      this.decrementUseCount_saho26_k$(unconfined);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.decrementUseCount_saho26_k$.call(this, unconfined);
    }
    return tmp;
  };
  protoOf(EventLoop).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(EventLoop).shutdown_cq5p8b_k$ = function () {
  };
  function _get_ref__e6fxpa($this) {
    return $this.ref_1;
  }
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ref_1 = new CommonThreadLocal();
  }
  protoOf(ThreadLocalEventLoop).get_eventLoop_913645_k$ = function () {
    var tmp0_elvis_lhs = this.ref_1.get_26vq_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().ref_1.set_hda1d2_k$(tmp0_also);
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ThreadLocalEventLoop).currentOrNull_z5p8mb_k$ = function () {
    return this.ref_1.get_26vq_k$();
  };
  protoOf(ThreadLocalEventLoop).resetEventLoop_a6lzlu_k$ = function () {
    this.ref_1.set_hda1d2_k$(null);
  };
  protoOf(ThreadLocalEventLoop).setEventLoop_d3g3n0_k$ = function (eventLoop) {
    this.ref_1.set_hda1d2_k$(eventLoop);
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  var properties_initialized_EventLoop_common_kt_cfxg9p;
  function _init_properties_EventLoop_common_kt__pwfggr() {
    if (!properties_initialized_EventLoop_common_kt_cfxg9p) {
      properties_initialized_EventLoop_common_kt_cfxg9p = true;
      DISPOSED_TASK = new Symbol('REMOVED_TASK');
      CLOSED_EMPTY = new Symbol('CLOSED_EMPTY');
    }
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function DisposableHandle() {
  }
  function Key_3() {
    Key_instance_2 = this;
  }
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
  }
  function ChildJob() {
  }
  function ParentJob() {
  }
  function ChildHandle() {
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  protoOf(NonDisposableHandle).get_parent_hy4reb_k$ = function () {
    return null;
  };
  protoOf(NonDisposableHandle).dispose_3n44we_k$ = function () {
  };
  protoOf(NonDisposableHandle).childCancelled_fdoq8t_k$ = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.get_isActive_quafmh_k$())
      throw _this__u8e3s4.getCancellationException_8i1q6u_k$();
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancelAndJoin(_this__u8e3s4, $completion) {
    _this__u8e3s4.cancel$default_64jlsz_k$();
    return _this__u8e3s4.join_kbq7u1_k$($completion);
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.get_j1ktw6_k$(Key_getInstance_3());
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_isActive_quafmh_k$()) === true;
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new DisposeOnCompletion(handle);
    return _this__u8e3s4.invokeOnCompletion_t2apld_k$(tmp$ret$1);
  }
  function cancel_3(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.cancel_4b7aim_k$(CancellationException_init_$Create$_0(message, cause));
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
    this.isActive_1 = isActive;
  }
  protoOf(Empty).get_isActive_quafmh_k$ = function () {
    return this.isActive_1;
  };
  protoOf(Empty).get_list_wopuqv_k$ = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.isActive_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function NodeList() {
    LinkedListHead.call(this);
  }
  protoOf(NodeList).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(NodeList).get_list_wopuqv_k$ = function () {
    return this;
  };
  protoOf(NodeList).getString_xqex6i_k$ = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.append_ssq29y_k$('List{');
    tmp0_apply.append_ssq29y_k$(state);
    tmp0_apply.append_ssq29y_k$('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.get__next_inmai1_k$();
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0_anonymous = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.append_ssq29y_k$(', ');
        }
        tmp0_apply.append_t8pm91_k$(tmp0_anonymous);
      }
      cur = cur.get__next_inmai1_k$();
    }
    tmp0_apply.append_ssq29y_k$(']');
    return tmp0_apply.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.getString_xqex6i_k$('Active') : protoOf(LinkedListHead).toString.call(this);
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  protoOf(JobNode).set_job_d610gu_k$ = function (_set____db54di) {
    this.job_1 = _set____db54di;
  };
  protoOf(JobNode).get_job_18j2r0_k$ = function () {
    var tmp = this.job_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(JobNode).get_list_wopuqv_k$ = function () {
    return null;
  };
  protoOf(JobNode).dispose_3n44we_k$ = function () {
    return this.get_job_18j2r0_k$().removeNode_o3o6t1_k$(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.get_job_18j2r0_k$()) + ']';
  };
  function _get__isCompleting__kxhw32($this) {
    return $this._isCompleting_1;
  }
  function _get__rootCause__pzi6w3($this) {
    return $this._rootCause_1;
  }
  function _get__exceptionsHolder__e2tfjy($this) {
    return $this._exceptionsHolder_1;
  }
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this._exceptionsHolder_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this._exceptionsHolder_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function _get_state__b8zcm8($this) {
    return $this.state_1;
  }
  function _get_child__j05w3v($this) {
    return $this.child_1;
  }
  function _get_proposedUpdate__cai7fg($this) {
    return $this.proposedUpdate_1;
  }
  function _get_job__e6b14k($this) {
    return $this.job_1;
  }
  function _get__state__37adl3_0($this) {
    return $this._state_1;
  }
  function _get__parentHandle__f9kzhc($this) {
    return $this._parentHandle_1;
  }
  function loopOnState($this, block) {
    while (true) {
      block($this.get_state_iypx7s_k$());
    }
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
    var wasCancelling = false;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.get_isCancelling_o1apv_k$();
    var exceptions = state.sealLocked_11gdw4_k$(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_oc4gxk_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_ws9oq6_k$();
      }
    }
    if (!wasCancelling) {
      $this.onCancelling_bxyn9n_k$(finalException);
    }
    $this.onCompletionInternal_39c1g8_k$(finalState);
    var casSuccess = $this._state_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_y1axqb_k$()) {
      if (state.get_isCancelling_o1apv_k$()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.cancellationExceptionMessage_a64063_k$() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
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
    var first = exceptions.get_fkrdnv_k$(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
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
    if (exceptions.get_size_woubt6_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.get_size_woubt6_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var exception = tmp0_iterator.next_20eer_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_1j60pz_k$(unwrapped);
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
    if (!$this._state_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_bxyn9n_k$(null);
    $this.onCompletionInternal_39c1g8_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.get_parentHandle_gmoqez_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.dispose_3n44we_k$();
      $this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$();
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.handleOnCompletionException_o179kb_k$(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.get_list_wopuqv_k$();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_bxyn9n_k$(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.get__next_inmai1_k$();
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0_anonymous = cur;
        try {
          tmp0_anonymous.invoke(cause);
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
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0_anonymous + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.get__next_inmai1_k$();
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.get_isScopedCoroutine_rwmmff_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.get_parentHandle_gmoqez_k$();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.childCancelled_fdoq8t_k$(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.get__next_inmai1_k$();
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0_anonymous = cur;
        try {
          tmp0_anonymous.invoke(cause);
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
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0_anonymous + ' for ' + $this, ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.get__next_inmai1_k$();
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.handleOnCompletionException_o179kb_k$(tmp0_safe_receiver_0);
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.isActive_1)
        return 0;
      if (!$this._state_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.onStart_qth026_k$();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this._state_1.atomicfu$compareAndSet(state, state.list_1))
          return -1;
        $this.onStart_qth026_k$();
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
    node.job_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      if (!($this.get_state_iypx7s_k$() === expect)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.addLast_uyctnf_k$(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.isActive_1 ? list : new InactiveNodeList(list);
    $this._state_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_cbgboi_k$(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var list = state.get__next_inmai1_k$();
    $this._state_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0_anonymous = $this.get_state_iypx7s_k$();
      if (!(!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0_anonymous) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ResumeOnCompletion(cancellable);
    disposeOnCancellation(cancellable, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
    return cancellable.getResult_clfhg3_k$();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0_anonymous = $this.get_state_iypx7s_k$();
      var tmp;
      if (!(!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0_anonymous instanceof Finishing) {
          tmp_0 = tmp0_anonymous.get_isCompleting_vi2bwp_k$();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, tmp0_anonymous, proposedUpdate);
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
        tmp_0 = new JobCancellationException(null == null ? $this.cancellationExceptionMessage_a64063_k$() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_wx9uoh_k$();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0_anonymous = $this.get_state_iypx7s_k$();
        if (tmp0_anonymous instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0_anonymous.get_isSealed_zdv4z3_k$())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0_anonymous.get_isCancelling_o1apv_k$();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp = tmp0_also;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0_anonymous.addExceptionLocked_jeuhbd_k$(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0_anonymous.get_rootCause_69dwxu_k$();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          if (!wasCancelling) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0_anonymous.list_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp_1 = tmp0_also_0;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0_anonymous.get_isActive_quafmh_k$()) {
              if (tryMakeCancelling($this, tmp0_anonymous, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0_anonymous, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0_anonymous);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
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
    var tmp1_elvis_lhs = state.get_list_wopuqv_k$();
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
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
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
    if (!$this._state_1.atomicfu$compareAndSet(state, cancelling))
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
    if (finishing.get_isCompleting_vi2bwp_k$())
      return get_COMPLETING_ALREADY();
    finishing.set_isCompleting_i5ljas_k$(true);
    if (!(finishing === state)) {
      if (!$this._state_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.get_isCancelling_o1apv_k$();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.addExceptionLocked_jeuhbd_k$(tmp0_safe_receiver.get_cause_iplhs0_k$());
    }
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.get_rootCause_69dwxu_k$();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    if (!wasCancelling) {
      tmp_0 = tmp0_takeIf;
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
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.get_list_wopuqv_k$();
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
        var tmp = child_0.childJob_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var handle = tmp.invokeOnCompletion$default_gp7u53_k$(VOID, false, tmp$ret$1);
        if (!(handle === NonDisposableHandle_getInstance()))
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
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_2ogq6g_k$(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (!cur.get__removed_p9514a_k$()) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      cur = cur.get__prev_inntnt_k$();
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      cur = cur.get__next_inmai1_k$();
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      if (cur.get__removed_p9514a_k$())
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
      tmp = state.get_isCancelling_o1apv_k$() ? 'Cancelling' : state.get_isCompleting_vi2bwp_k$() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.get_isActive_quafmh_k$() ? 'Active' : 'New';
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
    this.list_1 = list;
    this._isCompleting_1 = atomic$boolean$1(isCompleting);
    this._rootCause_1 = atomic$ref$1(rootCause);
    this._exceptionsHolder_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(Finishing).set_isCompleting_i5ljas_k$ = function (value) {
    this._isCompleting_1.set_kotlinx$atomicfu$value_rpu4go_k$(value);
  };
  protoOf(Finishing).get_isCompleting_vi2bwp_k$ = function () {
    return this._isCompleting_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(Finishing).set_rootCause_s52kuy_k$ = function (value) {
    this._rootCause_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  };
  protoOf(Finishing).get_rootCause_69dwxu_k$ = function () {
    return this._rootCause_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(Finishing).get_isSealed_zdv4z3_k$ = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).get_isCancelling_o1apv_k$ = function () {
    return !(this.get_rootCause_69dwxu_k$() == null);
  };
  protoOf(Finishing).get_isActive_quafmh_k$ = function () {
    return this.get_rootCause_69dwxu_k$() == null;
  };
  protoOf(Finishing).sealLocked_11gdw4_k$ = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.add_1j60pz_k$(eh);
        tmp = tmp0_also;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.get_rootCause_69dwxu_k$();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.add_ydlf05_k$(0, rootCause);
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.add_1j60pz_k$(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).addExceptionLocked_jeuhbd_k$ = function (exception) {
    var rootCause = this.get_rootCause_69dwxu_k$();
    if (rootCause == null) {
      this.set_rootCause_s52kuy_k$(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.add_1j60pz_k$(eh);
        tmp0_apply.add_1j60pz_k$(exception);
        _set_exceptionsHolder__tqm22h(this, tmp0_apply);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_1j60pz_k$(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.get_isCancelling_o1apv_k$() + ', completing=' + this.get_isCompleting_vi2bwp_k$() + ', rootCause=' + this.get_rootCause_69dwxu_k$() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.list_1 + ']';
  };
  function _get_isCancelling__hlz7m9(_this__u8e3s4, $this) {
    var tmp;
    if (_this__u8e3s4 instanceof Finishing) {
      tmp = _this__u8e3s4.get_isCancelling_o1apv_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.parent_1 = parent;
    this.state_1 = state;
    this.child_1 = child;
    this.proposedUpdate_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).invoke_7fb7sc_k$ = function (cause) {
    continueCompleting(this.parent_1, this.state_1, this.child_1, this.proposedUpdate_1);
  };
  protoOf(ChildCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.job_1 = job;
  }
  protoOf(AwaitContinuation).getContinuationCancellationCause_62o4c9_k$ = function (parent) {
    var state = this.job_1.get_state_iypx7s_k$();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.get_cause_iplhs0_k$();
    return parent.getCancellationException_8i1q6u_k$();
  };
  protoOf(AwaitContinuation).nameString_cd9e9w_k$ = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.initCancellability_sh6jkn_k$();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ResumeAwaitOnCompletion(cont);
    disposeOnCancellation(cont, $this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
    return cont.getResult_clfhg3_k$();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).invoke_6hwafz_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_d86qwy_k$($this$sequence, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6hwafz_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(8);
            this.state0__1 = this.this$0__1.get_state_iypx7s_k$();
            var tmp_0 = this.state0__1;
            if (tmp_0 instanceof ChildHandleNode) {
              this.set_state_a96kl8_k$(6);
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.state0__1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.state0__1;
              if (!(tmp_1 == null) ? isInterface(tmp_1, Incomplete) : false) {
                this.tmp0_safe_receiver1__1 = this.state0__1.get_list_wopuqv_k$();
                if (this.tmp0_safe_receiver1__1 == null) {
                  this.WHEN_RESULT2__1 = null;
                  this.set_state_a96kl8_k$(5);
                  continue $sm;
                } else {
                  this.cur3__1 = this.tmp0_safe_receiver1__1.get__next_inmai1_k$();
                  this.set_state_a96kl8_k$(1);
                  continue $sm;
                }
              } else {
                this.set_state_a96kl8_k$(7);
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.cur3__1, this.tmp0_safe_receiver1__1)) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            var tmp_2 = this.cur3__1;
            if (tmp_2 instanceof ChildHandleNode) {
              var tmp_3 = this;
              tmp_3.tmp0_anonymous4__1 = this.cur3__1;
              this.set_state_a96kl8_k$(2);
              suspendResult = this.$this$sequence_1.yield_24z9an_k$(this.tmp0_anonymous4__1.childJob_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.cur3__1 = this.cur3__1.get__next_inmai1_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 4:
            this.WHEN_RESULT2__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).create_d86qwy_k$ = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).create_xubfvz_k$ = function (value, completion) {
    return this.create_d86qwy_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_6hwafz_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JobSupport(active) {
    this._state_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this._parentHandle_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).get_key_18j28a_k$ = function () {
    return Key_getInstance_3();
  };
  protoOf(JobSupport).set_parentHandle_voxu0m_k$ = function (value) {
    this._parentHandle_1.set_kotlinx$atomicfu$value_koguff_k$(value);
  };
  protoOf(JobSupport).get_parentHandle_gmoqez_k$ = function () {
    return this._parentHandle_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(JobSupport).initParentJob_4c2lht_k$ = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.start_1tchgi_k$();
    var handle = parent.attachChild_ik9c8b_k$(this);
    this.set_parentHandle_voxu0m_k$(handle);
    if (this.get_isCompleted_a6j6c8_k$()) {
      handle.dispose_3n44we_k$();
      this.set_parentHandle_voxu0m_k$(NonDisposableHandle_getInstance());
    }
  };
  protoOf(JobSupport).get_state_iypx7s_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(tmp1_anonymous instanceof OpDescriptor))
        return tmp1_anonymous;
      tmp1_anonymous.perform_8emi3i_k$(this);
    }
  };
  protoOf(JobSupport).get_isActive_quafmh_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.get_isActive_quafmh_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).get_isCompleted_a6j6c8_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).get_isCancelled_trk8pu_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.get_isCancelling_o1apv_k$();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).start_1tchgi_k$ = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0_anonymous = this.get_state_iypx7s_k$();
      var tmp0_subject = startInternal(this, tmp0_anonymous);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).onStart_qth026_k$ = function () {
  };
  protoOf(JobSupport).getCancellationException_8i1q6u_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.get_rootCause_69dwxu_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_8ve25p_k$(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.toCancellationException$default_9ghy63_k$(state.get_cause_iplhs0_k$());
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).toCancellationException_8ve25p_k$ = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.cancellationExceptionMessage_a64063_k$() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).toCancellationException$default_9ghy63_k$ = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.toCancellationException_8ve25p_k$(_this__u8e3s4, message) : $super.toCancellationException_8ve25p_k$.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).get_completionCause_bxx3i4_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_elvis_lhs = state.get_rootCause_69dwxu_k$();
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = state.get_cause_iplhs0_k$();
        } else {
          tmp = null;
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).get_completionCauseHandled_bdr920_k$ = function () {
    // Inline function 'kotlin.let' call
    var tmp0_let = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.JobSupport.<get-completionCauseHandled>.<anonymous>' call
    var tmp;
    if (tmp0_let instanceof CompletedExceptionally) {
      tmp = tmp0_let.get_handled_cq14k3_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).invokeOnCompletion_t2apld_k$ = function (handler) {
    return this.invokeOnCompletion_npwpyn_k$(false, true, handler);
  };
  protoOf(JobSupport).invokeOnCompletion_npwpyn_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0_anonymous = this.get_state_iypx7s_k$();
        if (tmp0_anonymous instanceof Empty) {
          if (tmp0_anonymous.isActive_1) {
            if (this._state_1.atomicfu$compareAndSet(tmp0_anonymous, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0_anonymous);
          }
        } else {
          if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
            var list = tmp0_anonymous.get_list_wopuqv_k$();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0_anonymous instanceof JobNode ? tmp0_anonymous : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0_anonymous instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0_anonymous.get_rootCause_69dwxu_k$();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  if (handler instanceof ChildHandleNode) {
                    tmp_2 = !tmp0_anonymous.get_isCompleting_vi2bwp_k$();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0_anonymous, list, node)) {
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0_anonymous, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0_anonymous instanceof CompletedExceptionally ? tmp0_anonymous : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_cause_iplhs0_k$());
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  protoOf(JobSupport).join_kbq7u1_k$ = function ($completion) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $completion.get_context_h02k06_k$();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).get_onJoin_hnj4j6_k$ = function () {
    return this;
  };
  protoOf(JobSupport).registerSelectClause0_glbs1v_k$ = function (select, block) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.registerSelectClause0.<anonymous>' call
      var tmp0_anonymous = this.get_state_iypx7s_k$();
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (!(!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false)) {
        if (select.trySelect_1ivjiv_k$()) {
          startCoroutineUnintercepted(block, select.get_completion_t4gxwb_k$());
        }
        return Unit_getInstance();
      }
      if (startInternal(this, tmp0_anonymous) === 0) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = new SelectJoinOnCompletion(select, block);
        select.disposeOnSelect_lrl426_k$(this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
        return Unit_getInstance();
      }
    }
  };
  protoOf(JobSupport).removeNode_o3o6t1_k$ = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0_anonymous = this.get_state_iypx7s_k$();
      if (tmp0_anonymous instanceof JobNode) {
        if (!(tmp0_anonymous === node))
          return Unit_getInstance();
        if (this._state_1.atomicfu$compareAndSet(tmp0_anonymous, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false) {
          if (!(tmp0_anonymous.get_list_wopuqv_k$() == null)) {
            node.remove_fgfybg_k$();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(JobSupport).get_onCancelComplete_4lfsth_k$ = function () {
    return false;
  };
  protoOf(JobSupport).cancel_4b7aim_k$ = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    } else {
      tmp = cause;
    }
    this.cancelInternal_wqrppy_k$(tmp);
  };
  protoOf(JobSupport).cancellationExceptionMessage_a64063_k$ = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).cancel_as6ug7_k$ = function (cause) {
    var tmp1_elvis_lhs = cause == null ? null : this.toCancellationException$default_9ghy63_k$(cause);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    this.cancelInternal_wqrppy_k$(tmp);
    return true;
  };
  protoOf(JobSupport).cancelInternal_wqrppy_k$ = function (cause) {
    this.cancelImpl_5ls1mt_k$(cause);
  };
  protoOf(JobSupport).parentCancelled_53w4ri_k$ = function (parentJob) {
    this.cancelImpl_5ls1mt_k$(parentJob);
  };
  protoOf(JobSupport).childCancelled_fdoq8t_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.cancelImpl_5ls1mt_k$(cause) ? this.get_handlesException_f6my9f_k$() : false;
  };
  protoOf(JobSupport).cancelCoroutine_dy4tw5_k$ = function (cause) {
    return this.cancelImpl_5ls1mt_k$(cause);
  };
  protoOf(JobSupport).cancelImpl_5ls1mt_k$ = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.get_onCancelComplete_4lfsth_k$()) {
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
      this.afterCompletion_2ogq6g_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).defaultCancellationException_lkdizi_k$ = function (message, cause) {
    return new JobCancellationException(message == null ? this.cancellationExceptionMessage_a64063_k$() : message, cause, this);
  };
  protoOf(JobSupport).getChildJobCancellationCause_wx9uoh_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.get_rootCause_69dwxu_k$();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.get_cause_iplhs0_k$();
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).makeCompleting_2ycklh_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0_anonymous = this.get_state_iypx7s_k$();
        var finalState = tryMakeCompleting(this, tmp0_anonymous, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.afterCompletion_2ogq6g_k$(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).makeCompletingOnce_b13xy2_k$ = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0_anonymous = this.get_state_iypx7s_k$();
        var finalState = tryMakeCompleting(this, tmp0_anonymous, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).get_children_4cwbp4_k$ = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).attachChild_ik9c8b_k$ = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ChildHandleNode(child);
    var tmp = this.invokeOnCompletion$default_gp7u53_k$(true, VOID, tmp$ret$1);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  protoOf(JobSupport).handleOnCompletionException_o179kb_k$ = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).onCancelling_bxyn9n_k$ = function (cause) {
  };
  protoOf(JobSupport).get_isScopedCoroutine_rwmmff_k$ = function () {
    return false;
  };
  protoOf(JobSupport).get_handlesException_f6my9f_k$ = function () {
    return true;
  };
  protoOf(JobSupport).handleJobException_oc4gxk_k$ = function (exception) {
    return false;
  };
  protoOf(JobSupport).onCompletionInternal_39c1g8_k$ = function (state) {
  };
  protoOf(JobSupport).afterCompletion_2ogq6g_k$ = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.toDebugString_v3moy1_k$() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).toDebugString_v3moy1_k$ = function () {
    return this.nameString_cd9e9w_k$() + '{' + stateString(this, this.get_state_iypx7s_k$()) + '}';
  };
  protoOf(JobSupport).nameString_cd9e9w_k$ = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).get_isCompletedExceptionally_i25lfz_k$ = function () {
    var tmp = this.get_state_iypx7s_k$();
    return tmp instanceof CompletedExceptionally;
  };
  protoOf(JobSupport).getCompletionExceptionOrNull_snuvbb_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletionExceptionOrNull.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return _get_exceptionOrNull__b3j7js(state, this);
  };
  protoOf(JobSupport).getCompletedInternal_26f4i6_k$ = function () {
    var state = this.get_state_iypx7s_k$();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(!(state == null) ? isInterface(state, Incomplete) : false)) {
      // Inline function 'kotlinx.coroutines.JobSupport.getCompletedInternal.<anonymous>' call
      var message = 'This job has not completed yet';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    if (state instanceof CompletedExceptionally)
      throw state.get_cause_iplhs0_k$();
    return unboxState(state);
  };
  protoOf(JobSupport).awaitInternal_pz51jj_k$ = function ($completion) {
    $l$loop: while (true) {
      var state = this.get_state_iypx7s_k$();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.get_cause_iplhs0_k$();
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  protoOf(JobSupport).registerSelectClause1Internal_77s7gf_k$ = function (select, block) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.registerSelectClause1Internal.<anonymous>' call
      var tmp0_anonymous = this.get_state_iypx7s_k$();
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (!(!(tmp0_anonymous == null) ? isInterface(tmp0_anonymous, Incomplete) : false)) {
        if (select.trySelect_1ivjiv_k$()) {
          if (tmp0_anonymous instanceof CompletedExceptionally) {
            select.resumeSelectWithException_xs2ljz_k$(tmp0_anonymous.get_cause_iplhs0_k$());
          } else {
            var tmp = unboxState(tmp0_anonymous);
            startCoroutineUnintercepted_0(block, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), select.get_completion_t4gxwb_k$());
          }
        }
        return Unit_getInstance();
      }
      if (startInternal(this, tmp0_anonymous) === 0) {
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = new SelectAwaitOnCompletion(select, block);
        select.disposeOnSelect_lrl426_k$(this.invokeOnCompletion_t2apld_k$(tmp$ret$1));
        return Unit_getInstance();
      }
    }
  };
  protoOf(JobSupport).selectAwaitCompletion_q773bd_k$ = function (select, block) {
    var state = this.get_state_iypx7s_k$();
    if (state instanceof CompletedExceptionally) {
      select.resumeSelectWithException_xs2ljz_k$(state.get_cause_iplhs0_k$());
    } else {
      var tmp = unboxState(state);
      startCoroutineCancellable(block, (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE(), select.get_completion_t4gxwb_k$());
    }
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
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function get_RETRY() {
    return RETRY;
  }
  var RETRY;
  function InactiveNodeList(list) {
    this.list_1 = list;
  }
  protoOf(InactiveNodeList).get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  protoOf(InactiveNodeList).get_isActive_quafmh_k$ = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.list_1.getString_xqex6i_k$('New') : anyToString(this);
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.childJob_1 = childJob;
  }
  protoOf(ChildHandleNode).get_childJob_4cx54m_k$ = function () {
    return this.childJob_1;
  };
  protoOf(ChildHandleNode).get_parent_hy4reb_k$ = function () {
    return this.get_job_18j2r0_k$();
  };
  protoOf(ChildHandleNode).invoke_7fb7sc_k$ = function (cause) {
    return this.childJob_1.parentCancelled_53w4ri_k$(this.get_job_18j2r0_k$());
  };
  protoOf(ChildHandleNode).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(ChildHandleNode).childCancelled_fdoq8t_k$ = function (cause) {
    return this.get_job_18j2r0_k$().childCancelled_fdoq8t_k$(cause);
  };
  function _get_handler__z70553_0($this) {
    return $this.handler_1;
  }
  function _get__invoked__yhwoci($this) {
    return $this._invoked_1;
  }
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.handler_1 = handler;
    this._invoked_1 = atomic$int$1(0);
  }
  protoOf(InvokeOnCancelling).invoke_7fb7sc_k$ = function (cause) {
    if (this._invoked_1.atomicfu$compareAndSet(0, 1))
      this.handler_1(cause);
  };
  protoOf(InvokeOnCancelling).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function _get_handler__z70553_1($this) {
    return $this.handler_1;
  }
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.handler_1 = handler;
  }
  protoOf(InvokeOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    return this.handler_1(cause);
  };
  protoOf(InvokeOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function _get_continuation__y3gzck_2($this) {
    return $this.continuation_1;
  }
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  protoOf(ResumeOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var tmp0_resume = this.continuation_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp0_resume.resumeWith_s3a3yh_k$(tmp$ret$0);
    return Unit_getInstance();
  };
  protoOf(ResumeOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function _get_select__irrld($this) {
    return $this.select_1;
  }
  function _get_block__jewopo($this) {
    return $this.block_1;
  }
  function SelectJoinOnCompletion(select, block) {
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(SelectJoinOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      startCoroutineCancellable_0(this.block_1, this.select_1.get_completion_t4gxwb_k$());
    }
  };
  protoOf(SelectJoinOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.state_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function _get_continuation__y3gzck_3($this) {
    return $this.continuation_1;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.continuation_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    var state = this.get_job_18j2r0_k$().get_state_iypx7s_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = this.continuation_1;
      var tmp1_resumeWithException = state.get_cause_iplhs0_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
      tmp0_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$0);
    } else {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = this.continuation_1;
      var tmp = unboxState(state);
      var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
      tmp2_resume.resumeWith_s3a3yh_k$(tmp$ret$2);
    }
  };
  protoOf(ResumeAwaitOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function _get_select__irrld_0($this) {
    return $this.select_1;
  }
  function _get_block__jewopo_0($this) {
    return $this.block_1;
  }
  function SelectAwaitOnCompletion(select, block) {
    JobNode.call(this);
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(SelectAwaitOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      this.get_job_18j2r0_k$().selectAwaitCompletion_q773bd_k$(this.select_1, this.block_1);
    }
  };
  protoOf(SelectAwaitOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function IncompleteStateBox(state) {
    this.state_1 = state;
  }
  protoOf(IncompleteStateBox).get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.child_1 = child;
  }
  protoOf(ChildContinuation).get_child_ipppmb_k$ = function () {
    return this.child_1;
  };
  protoOf(ChildContinuation).invoke_7fb7sc_k$ = function (cause) {
    this.child_1.parentCancelled_uc06zq_k$(this.child_1.getContinuationCancellationCause_62o4c9_k$(this.get_job_18j2r0_k$()));
  };
  protoOf(ChildContinuation).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  function handlesException($this) {
    var tmp = $this.get_parentHandle_gmoqez_k$();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_job_18j2r0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.get_handlesException_f6my9f_k$())
        return true;
      var tmp_1 = parentJob.get_parentHandle_gmoqez_k$();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_job_18j2r0_k$();
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
    this.initParentJob_4c2lht_k$(parent);
    this.handlesException_1 = handlesException(this);
  }
  protoOf(JobImpl).get_onCancelComplete_4lfsth_k$ = function () {
    return true;
  };
  protoOf(JobImpl).get_handlesException_f6my9f_k$ = function () {
    return this.handlesException_1;
  };
  protoOf(JobImpl).complete_9ww6vb_k$ = function () {
    return this.makeCompleting_2ycklh_k$(Unit_getInstance());
  };
  protoOf(JobImpl).completeExceptionally_7s0ccc_k$ = function (exception) {
    return this.makeCompleting_2ycklh_k$(new CompletedExceptionally(exception));
  };
  function _get_handle__ls055p_0($this) {
    return $this.handle_1;
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.handle_1 = handle;
  }
  protoOf(DisposeOnCompletion).invoke_7fb7sc_k$ = function (cause) {
    return this.handle_1.dispose_3n44we_k$();
  };
  protoOf(DisposeOnCompletion).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
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
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(MainCoroutineDispatcher).toStringInternalImpl_hcqz93_k$ = function () {
    var main = Dispatchers_getInstance().get_Main_wo5vz6_k$();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.get_immediate_r3y8eg_k$();
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
  function _get_message__rinilm($this) {
    return $this.message_1;
  }
  function NonCancellable() {
    NonCancellable_instance = this;
    AbstractCoroutineContextElement.call(this, Key_getInstance_3());
    this.message_1 = "NonCancellable can be used only as an argument for 'withContext', direct usages of its API are prohibited";
  }
  protoOf(NonCancellable).get_isActive_quafmh_k$ = function () {
    return true;
  };
  protoOf(NonCancellable).get_isCompleted_a6j6c8_k$ = function () {
    return false;
  };
  protoOf(NonCancellable).get_isCancelled_trk8pu_k$ = function () {
    return false;
  };
  protoOf(NonCancellable).start_1tchgi_k$ = function () {
    return false;
  };
  protoOf(NonCancellable).join_kbq7u1_k$ = function ($completion) {
    throw UnsupportedOperationException_init_$Create$('This job is always active');
  };
  protoOf(NonCancellable).get_onJoin_hnj4j6_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('This job is always active');
  };
  protoOf(NonCancellable).getCancellationException_8i1q6u_k$ = function () {
    throw IllegalStateException_init_$Create$('This job is always active');
  };
  protoOf(NonCancellable).invokeOnCompletion_t2apld_k$ = function (handler) {
    return NonDisposableHandle_getInstance();
  };
  protoOf(NonCancellable).invokeOnCompletion_npwpyn_k$ = function (onCancelling, invokeImmediately, handler) {
    return NonDisposableHandle_getInstance();
  };
  protoOf(NonCancellable).cancel_4b7aim_k$ = function (cause) {
  };
  protoOf(NonCancellable).cancel_as6ug7_k$ = function (cause) {
    return false;
  };
  protoOf(NonCancellable).get_children_4cwbp4_k$ = function () {
    return emptySequence();
  };
  protoOf(NonCancellable).attachChild_ik9c8b_k$ = function (child) {
    return NonDisposableHandle_getInstance();
  };
  protoOf(NonCancellable).toString = function () {
    return 'NonCancellable';
  };
  var NonCancellable_instance;
  function NonCancellable_getInstance() {
    if (NonCancellable_instance == null)
      new NonCancellable();
    return NonCancellable_instance;
  }
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).childCancelled_fdoq8t_k$ = function (cause) {
    return false;
  };
  function TimeoutCancellationException_init_$Init$(message, $this) {
    TimeoutCancellationException.call($this, message, null);
    return $this;
  }
  function TimeoutCancellationException_init_$Create$(message) {
    var tmp = TimeoutCancellationException_init_$Init$(message, objectCreate(protoOf(TimeoutCancellationException)));
    captureStack(tmp, TimeoutCancellationException_init_$Create$);
    return tmp;
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.coroutine_1 = coroutine;
  }
  protoOf(TimeoutCancellationException).get_coroutine_cnpmtt_k$ = function () {
    return this.coroutine_1;
  };
  protoOf(TimeoutCancellationException).createCopy_mmw9ld_k$ = function () {
    // Inline function 'kotlin.also' call
    var tmp0_elvis_lhs = this.message;
    var tmp0_also = new TimeoutCancellationException(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, this.coroutine_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.TimeoutCancellationException.createCopy.<anonymous>' call
    initCause(tmp0_also, this);
    return tmp0_also;
  };
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$4(timeMillis, block, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.get_context_h02k06_k$(), uCont);
    this.time_1 = time;
  }
  protoOf(TimeoutCoroutine).get_time_wouyhi_k$ = function () {
    return this.time_1;
  };
  protoOf(TimeoutCoroutine).run_mw4iiu_k$ = function () {
    this.cancelCoroutine_dy4tw5_k$(TimeoutCancellationException_0(this.time_1, this));
  };
  protoOf(TimeoutCoroutine).nameString_cd9e9w_k$ = function () {
    return protoOf(ScopeCoroutine).nameString_cd9e9w_k$.call(this) + '(timeMillis=' + toString_0(this.time_1) + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.get_uCont_iyyiam_k$();
    var context = cont.get_context_h02k06_k$();
    disposeOnCompletion(coroutine, get_delay(context).invokeOnTimeout_sx2bqq_k$(coroutine.time_1, coroutine, coroutine.get_context_h02k06_k$()));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, coroutine) {
    return new TimeoutCancellationException('Timed out waiting for ' + toString_0(time) + ' ms', coroutine);
  }
  function withTimeout(timeMillis, block, $completion) {
    // Inline function 'kotlin.contracts.contract' call
    if (timeMillis.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
      throw TimeoutCancellationException_init_$Create$('Timed out immediately');
    // Inline function 'kotlinx.coroutines.withTimeout.<anonymous>' call
    return setupTimeout(new TimeoutCoroutine(timeMillis, $completion), block);
  }
  function $withTimeoutOrNullCOROUTINE$4(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.timeMillis_1 = timeMillis;
    this.block_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            if (this.timeMillis_1.compareTo_n4fqi2_k$(new Long(0, 0)) <= 0)
              return null;
            this.coroutine0__1 = {_v: null};
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var timeoutCoroutine = new TimeoutCoroutine(this.timeMillis_1, this);
            this.coroutine0__1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.block_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.get_exception_x0n6w6_k$();
              if (e.coroutine_1 === this.coroutine0__1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).limitedParallelism_glrman_k$ = function (parallelism) {
    throw UnsupportedOperationException_init_$Create$('limitedParallelism is not supported for Dispatchers.Unconfined');
  };
  protoOf(Unconfined).isDispatchNeeded_fmz9vn_k$ = function (context) {
    return false;
  };
  protoOf(Unconfined).dispatch_o98ux7_k$ = function (context, block) {
    var yieldContext = context.get_j1ktw6_k$(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.dispatcherWasUnconfined_1 = true;
      return Unit_getInstance();
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
  function Key_4() {
    Key_instance_3 = this;
  }
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  function YieldContext() {
    Key_getInstance_4();
    AbstractCoroutineContextElement.call(this, Key_getInstance_4());
    this.dispatcherWasUnconfined_1 = false;
  }
  protoOf(YieldContext).set_dispatcherWasUnconfined_6oi8pp_k$ = function (_set____db54di) {
    this.dispatcherWasUnconfined_1 = _set____db54di;
  };
  protoOf(YieldContext).get_dispatcherWasUnconfined_gkf39i_k$ = function () {
    return this.dispatcherWasUnconfined_1;
  };
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.yield.<anonymous>' call
      var context = $completion.get_context_h02k06_k$();
      ensureActive(context);
      var tmp = intercepted($completion);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (cont.get_dispatcher_usy1bk_k$().isDispatchNeeded_fmz9vn_k$(context)) {
        cont.dispatchYield_r38es3_k$(context, Unit_getInstance());
      } else {
        var yieldContext = new YieldContext();
        cont.dispatchYield_r38es3_k$(context.plus_rgw9wi_k$(yieldContext), Unit_getInstance());
        if (yieldContext.get_dispatcherWasUnconfined_gkf39i_k$()) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_getInstance();
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  function get_EMPTY() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  function get_ENQUEUE_FAILED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return ENQUEUE_FAILED;
  }
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    _init_properties_AbstractChannel_kt__sw8o27();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function _get_receive__lsa4cu($this) {
    return $this.receive_1;
  }
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.closeCause_1 == null))
        throw recoverStackTrace_0(result.get_receiveException_nqbiq3_k$());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.channel_1, receive)) {
          removeReceiveOnCancel($this.channel_1, cancellable, receive);
          break $l$block_1;
        }
        var result = $this.channel_1.pollInternal_ml771g_k$();
        $this.result_1 = result;
        if (result instanceof Closed) {
          if (result.closeCause_1 == null) {
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            Companion_getInstance();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.resumeWith_s3a3yh_k$(tmp$ret$1);
          } else {
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp0_resumeWithException = result.get_receiveException_nqbiq3_k$();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            Companion_getInstance();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
            cancellable.resumeWith_s3a3yh_k$(tmp$ret$3);
          }
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.channel_1.onUndeliveredElement_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.get_context_h02k06_k$());
          }
          cancellable.resume_l1w5in_k$(true, tmp);
          break $l$block_1;
        }
      }
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function receiveSuspend($this, receiveMode, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.AbstractChannel.receiveSuspend.<anonymous>' call
      var tmp;
      if ($this.onUndeliveredElement_1 == null) {
        tmp = new ReceiveElement(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode);
      } else {
        tmp = new ReceiveElementWithUndeliveredHandler(isInterface(cancellable, CancellableContinuation) ? cancellable : THROW_CCE(), receiveMode, $this.onUndeliveredElement_1);
      }
      var receive = tmp;
      while (true) {
        if (enqueueReceive($this, receive)) {
          removeReceiveOnCancel($this, cancellable, receive);
          break $l$block_1;
        }
        var result = $this.pollInternal_ml771g_k$();
        if (result instanceof Closed) {
          receive.resumeReceiveClosed_ep2qlw_k$(result);
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp_0 = receive.resumeValue_nsekne_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
          cancellable.resume_l1w5in_k$(tmp_0, receive.resumeOnCancellationFun_ya26h6_k$((result == null ? true : isObject(result)) ? result : THROW_CCE()));
          break $l$block_1;
        }
      }
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function enqueueReceive($this, receive) {
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.enqueueReceiveInternal_rxtsl7_k$(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.onReceiveEnqueued_xu1a6p_k$();
    }
    return tmp0_also;
  }
  function TryPollDesc(queue) {
    RemoveFirstDesc.call(this, queue);
  }
  protoOf(TryPollDesc).failure_mowj19_k$ = function (affected) {
    var tmp;
    if (affected instanceof Closed) {
      tmp = affected;
    } else {
      if (!(affected instanceof Send)) {
        tmp = get_POLL_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(TryPollDesc).onPrepare_soaf0c_k$ = function (prepareOp) {
    var tmp = prepareOp.get_affected_lutt4z_k$();
    var affected = tmp instanceof Send ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.tryResumeSend_93c6it_k$(prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return get_REMOVE_PREPARED();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === get_RETRY_ATOMIC())
      return get_RETRY_ATOMIC();
    // Inline function 'kotlinx.coroutines.assert' call
    return null;
  };
  protoOf(TryPollDesc).onRemoved_gagg6z_k$ = function (affected) {
    (affected instanceof Send ? affected : THROW_CCE()).undeliveredElement_djsee8_k$();
  };
  function registerSelectReceiveMode($this, select, receiveMode, block) {
    while (true) {
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if ($this.get_isEmptyImpl_9w6w0q_k$()) {
        if (enqueueReceiveSelect($this, select, block, receiveMode))
          return Unit_getInstance();
      } else {
        var pollResult = $this.pollSelectInternal_puj25v_k$(select);
        if (pollResult === get_ALREADY_SELECTED())
          return Unit_getInstance();
        else if (pollResult !== get_POLL_FAILED())
          if (pollResult !== get_RETRY_ATOMIC()) {
            tryStartBlockUnintercepted(block, $this, select, receiveMode, pollResult);
          }
      }
    }
  }
  function tryStartBlockUnintercepted(_this__u8e3s4, $this, select, receiveMode, value) {
    if (value instanceof Closed) {
      if (receiveMode === 0) {
        throw recoverStackTrace_0(value.get_receiveException_nqbiq3_k$());
      } else if (receiveMode === 1) {
        if (!select.trySelect_1ivjiv_k$())
          return Unit_getInstance();
        startCoroutineUnintercepted_0(_this__u8e3s4, new ChannelResult(Companion_getInstance_1().closed_raq7mh_k$(value.closeCause_1)), select.get_completion_t4gxwb_k$());
      }
    } else {
      if (receiveMode === 1) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.toResult' call
        var tmp;
        if (value instanceof Closed) {
          tmp = Companion_getInstance_1().closed_raq7mh_k$(value.closeCause_1);
        } else {
          var tmp_0 = Companion_getInstance_1();
          tmp = tmp_0.success_qotpmt_k$((value == null ? true : isObject(value)) ? value : THROW_CCE());
        }
        tmp$ret$0 = tmp;
        startCoroutineUnintercepted_0(_this__u8e3s4, new ChannelResult(tmp$ret$0), select.get_completion_t4gxwb_k$());
      } else {
        startCoroutineUnintercepted_0(_this__u8e3s4, value, select.get_completion_t4gxwb_k$());
      }
    }
  }
  function enqueueReceiveSelect($this, select, block, receiveMode) {
    var node = new ReceiveSelect($this, select, block, receiveMode);
    var result = enqueueReceive($this, node);
    if (result) {
      select.disposeOnSelect_lrl426_k$(node);
    }
    return result;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new RemoveReceiveOnCancel($this, receive);
    return cont.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.$this_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.receive_1 = receive;
  }
  protoOf(RemoveReceiveOnCancel).invoke_7fb7sc_k$ = function (cause) {
    if (this.receive_1.remove_fgfybg_k$()) {
      this.$this_1.onReceiveDequeued_4wpjax_k$();
    }
  };
  protoOf(RemoveReceiveOnCancel).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(RemoveReceiveOnCancel).toString = function () {
    return 'RemoveReceiveOnCancel[' + this.receive_1 + ']';
  };
  function Itr(channel) {
    this.channel_1 = channel;
    this.result_1 = get_POLL_FAILED();
  }
  protoOf(Itr).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(Itr).set_result_kw7ubu_k$ = function (_set____db54di) {
    this.result_1 = _set____db54di;
  };
  protoOf(Itr).get_result_iyg5d2_k$ = function () {
    return this.result_1;
  };
  protoOf(Itr).hasNext_4tgia2_k$ = function ($completion) {
    if (!(this.result_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.result_1);
    this.result_1 = this.channel_1.pollInternal_ml771g_k$();
    if (!(this.result_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.result_1);
    return hasNextSuspend(this, $completion);
  };
  protoOf(Itr).next_20eer_k$ = function () {
    var result = this.result_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.get_receiveException_nqbiq3_k$());
    if (!(result === get_POLL_FAILED())) {
      this.result_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  function ReceiveElement(cont, receiveMode) {
    Receive.call(this);
    this.cont_1 = cont;
    this.receiveMode_1 = receiveMode;
  }
  protoOf(ReceiveElement).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(ReceiveElement).get_receiveMode_kw93yb_k$ = function () {
    return this.receiveMode_1;
  };
  protoOf(ReceiveElement).resumeValue_nsekne_k$ = function (value) {
    return this.receiveMode_1 === 1 ? new ChannelResult(Companion_getInstance_1().success_qotpmt_k$(value)) : value;
  };
  protoOf(ReceiveElement).tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp = this.resumeValue_nsekne_k$(value);
    var tmp1_elvis_lhs = this.cont_1.tryResume_93jc0s_k$(tmp, otherOp == null ? null : otherOp.get_desc_woknve_k$(), this.resumeOnCancellationFun_ya26h6_k$(value));
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var token = tmp_0;
    // Inline function 'kotlinx.coroutines.assert' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o9c8d9_k$();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveElement).completeResumeReceive_1cyi5u_k$ = function (value) {
    return this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  protoOf(ReceiveElement).resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    if (this.receiveMode_1 === 1) {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = this.cont_1;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      var tmp1_resume = Companion_getInstance_1().closed_raq7mh_k$(closed.closeCause_1);
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(new ChannelResult(tmp1_resume));
      tmp0_resume.resumeWith_s3a3yh_k$(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp2_resumeWithException = this.cont_1;
      var tmp3_resumeWithException = closed.get_receiveException_nqbiq3_k$();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp3_resumeWithException));
      tmp2_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$3);
    }
  };
  protoOf(ReceiveElement).toString = function () {
    return 'ReceiveElement@' + get_hexAddress(this) + '[receiveMode=' + this.receiveMode_1 + ']';
  };
  function ReceiveElementWithUndeliveredHandler(cont, receiveMode, onUndeliveredElement) {
    ReceiveElement.call(this, cont, receiveMode);
    this.onUndeliveredElement_1 = onUndeliveredElement;
  }
  protoOf(ReceiveElementWithUndeliveredHandler).get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(ReceiveElementWithUndeliveredHandler).resumeOnCancellationFun_ya26h6_k$ = function (value) {
    return bindCancellationFun(this.onUndeliveredElement_1, value, this.cont_1.get_context_h02k06_k$());
  };
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.iterator_1 = iterator;
    this.cont_1 = cont;
  }
  protoOf(ReceiveHasNext).get_iterator_c8vxs9_k$ = function () {
    return this.iterator_1;
  };
  protoOf(ReceiveHasNext).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(ReceiveHasNext).tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp1_elvis_lhs = this.cont_1.tryResume_93jc0s_k$(true, otherOp == null ? null : otherOp.get_desc_woknve_k$(), this.resumeOnCancellationFun_ya26h6_k$(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o9c8d9_k$();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(ReceiveHasNext).completeResumeReceive_1cyi5u_k$ = function (value) {
    this.iterator_1.result_1 = value;
    this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  protoOf(ReceiveHasNext).resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    var tmp;
    if (closed.closeCause_1 == null) {
      tmp = this.cont_1.tryResume$default_32aap5_k$(false);
    } else {
      tmp = this.cont_1.tryResumeWithException_3icka9_k$(closed.get_receiveException_nqbiq3_k$());
    }
    var token = tmp;
    if (!(token == null)) {
      this.iterator_1.result_1 = closed;
      this.cont_1.completeResume_fu4ex_k$(token);
    }
  };
  protoOf(ReceiveHasNext).resumeOnCancellationFun_ya26h6_k$ = function (value) {
    var tmp0_safe_receiver = this.iterator_1.channel_1.onUndeliveredElement_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.cont_1.get_context_h02k06_k$());
  };
  protoOf(ReceiveHasNext).toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  function ReceiveSelect(channel, select, block, receiveMode) {
    Receive.call(this);
    this.channel_1 = channel;
    this.select_1 = select;
    this.block_1 = block;
    this.receiveMode_1 = receiveMode;
  }
  protoOf(ReceiveSelect).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(ReceiveSelect).get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  protoOf(ReceiveSelect).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(ReceiveSelect).get_receiveMode_kw93yb_k$ = function () {
    return this.receiveMode_1;
  };
  protoOf(ReceiveSelect).tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    var tmp = this.select_1.trySelectOther_zha44u_k$(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  protoOf(ReceiveSelect).completeResumeReceive_1cyi5u_k$ = function (value) {
    startCoroutineCancellable(this.block_1, this.receiveMode_1 === 1 ? new ChannelResult(Companion_getInstance_1().success_qotpmt_k$(value)) : value, this.select_1.get_completion_t4gxwb_k$(), this.resumeOnCancellationFun_ya26h6_k$(value));
  };
  protoOf(ReceiveSelect).resumeReceiveClosed_ep2qlw_k$ = function (closed) {
    if (!this.select_1.trySelect_1ivjiv_k$())
      return Unit_getInstance();
    var tmp0_subject = this.receiveMode_1;
    if (tmp0_subject === 0) {
      this.select_1.resumeSelectWithException_xs2ljz_k$(closed.get_receiveException_nqbiq3_k$());
    } else if (tmp0_subject === 1) {
      startCoroutineCancellable(this.block_1, new ChannelResult(Companion_getInstance_1().closed_raq7mh_k$(closed.closeCause_1)), this.select_1.get_completion_t4gxwb_k$());
    }
  };
  protoOf(ReceiveSelect).dispose_3n44we_k$ = function () {
    if (this.remove_fgfybg_k$()) {
      this.channel_1.onReceiveDequeued_4wpjax_k$();
    }
  };
  protoOf(ReceiveSelect).resumeOnCancellationFun_ya26h6_k$ = function (value) {
    var tmp0_safe_receiver = this.channel_1.onUndeliveredElement_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.select_1.get_completion_t4gxwb_k$().get_context_h02k06_k$());
  };
  protoOf(ReceiveSelect).toString = function () {
    return 'ReceiveSelect@' + get_hexAddress(this) + '[' + this.select_1 + ',receiveMode=' + this.receiveMode_1 + ']';
  };
  function AbstractChannel$onReceive$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(AbstractChannel$onReceive$1).registerSelectClause1_n2iwro_k$ = function (select, block) {
    registerSelectReceiveMode(this.this$0__1, select, 0, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  protoOf(AbstractChannel$onReceive$1).registerSelectClause1_cysp94_k$ = function (select, block) {
    return this.registerSelectClause1_n2iwro_k$(select, block);
  };
  function AbstractChannel$onReceiveCatching$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(AbstractChannel$onReceiveCatching$1).registerSelectClause1_bsb2fm_k$ = function (select, block) {
    registerSelectReceiveMode(this.this$0__1, select, 1, isSuspendFunction(block, 1) ? block : THROW_CCE());
  };
  protoOf(AbstractChannel$onReceiveCatching$1).registerSelectClause1_cysp94_k$ = function (select, block) {
    return this.registerSelectClause1_bsb2fm_k$(select, block);
  };
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  protoOf(AbstractChannel).pollInternal_ml771g_k$ = function () {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstSendOrPeekClosed_h7sgez_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.tryResumeSend_93c6it_k$(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.completeResumeSend_upvqar_k$();
        return send.get_pollResult_t5mkl7_k$();
      }
      send.undeliveredElement_djsee8_k$();
    }
  };
  protoOf(AbstractChannel).pollSelectInternal_puj25v_k$ = function (select) {
    var pollOp = this.describeTryPoll_k2m4a9_k$();
    var failure = select.performAtomicTrySelect_9r1u91_k$(pollOp);
    if (!(failure == null))
      return failure;
    var send = pollOp.get_result_iyg5d2_k$();
    send.completeResumeSend_upvqar_k$();
    return pollOp.get_result_iyg5d2_k$().get_pollResult_t5mkl7_k$();
  };
  protoOf(AbstractChannel).get_hasReceiveOrClosed_wl54xr_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp = this.queue_1.get__next_inmai1_k$();
    return isInterface(tmp, ReceiveOrClosed);
  };
  protoOf(AbstractChannel).get_isClosedForReceive_v0r77d_k$ = function () {
    return !(this.get_closedForReceive_iep3v5_k$() == null) ? this.get_isBufferEmpty_t57jne_k$() : false;
  };
  protoOf(AbstractChannel).get_isEmpty_zauvru_k$ = function () {
    return this.get_isEmptyImpl_9w6w0q_k$();
  };
  protoOf(AbstractChannel).get_isEmptyImpl_9w6w0q_k$ = function () {
    var tmp;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp_0 = this.queue_1.get__next_inmai1_k$();
    if (!(tmp_0 instanceof Send)) {
      tmp = this.get_isBufferEmpty_t57jne_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AbstractChannel).receive_ihhf9g_k$ = function ($completion) {
    var result = this.pollInternal_ml771g_k$();
    var tmp;
    if (!(result === get_POLL_FAILED())) {
      tmp = !(result instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    return receiveSuspend(this, 0, $completion);
  };
  protoOf(AbstractChannel).enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    var tmp;
    if (this.get_isBufferAlwaysEmpty_ross6j_k$()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.queue_1;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        if (!!(tmp0_addLastIfPrev.get__prev_inntnt_k$() instanceof Send)) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.addLast_uyctnf_k$(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.queue_1;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        if (!!(tmp2_addLastIfPrevAndIf.get__prev_inntnt_k$() instanceof Send)) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        if (!this.get_isBufferEmpty_t57jne_k$()) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.addLast_uyctnf_k$(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  protoOf(AbstractChannel).receiveCatching_wrys2l_k$ = function ($completion) {
    var result = this.pollInternal_ml771g_k$();
    if (!(result === get_POLL_FAILED())) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.toResult' call
      var tmp;
      if (result instanceof Closed) {
        tmp = Companion_getInstance_1().closed_raq7mh_k$(result.closeCause_1);
      } else {
        var tmp_0 = Companion_getInstance_1();
        tmp = tmp_0.success_qotpmt_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
      }
      tmp$ret$0 = tmp;
      return new ChannelResult(tmp$ret$0);
    }
    var tmp_1 = receiveSuspend(this, 1, $completion);
    if (tmp_1 === get_COROUTINE_SUSPENDED())
      return tmp_1;
    return new ChannelResult(tmp_1.holder_1);
  };
  protoOf(AbstractChannel).tryReceive_5r5v2p_k$ = function () {
    var result = this.pollInternal_ml771g_k$();
    if (result === get_POLL_FAILED())
      return Companion_getInstance_1().failure_gnxj6a_k$();
    if (result instanceof Closed)
      return Companion_getInstance_1().closed_raq7mh_k$(result.closeCause_1);
    var tmp = Companion_getInstance_1();
    return tmp.success_qotpmt_k$((result == null ? true : isObject(result)) ? result : THROW_CCE());
  };
  protoOf(AbstractChannel).cancel_as6ug7_k$ = function (cause) {
    return this.cancelInternal_vex9ac_k$(cause);
  };
  protoOf(AbstractChannel).cancel_4b7aim_k$ = function (cause) {
    if (this.get_isClosedForReceive_v0r77d_k$())
      return Unit_getInstance();
    this.cancelInternal_vex9ac_k$(cause == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : cause);
  };
  protoOf(AbstractChannel).cancelInternal_vex9ac_k$ = function (cause) {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.close_9zy44b_k$(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.onCancelIdempotent_1zp8pj_k$(tmp0_also);
    return tmp0_also;
  };
  protoOf(AbstractChannel).onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var previous = closed.get__prev_inntnt_k$();
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.remove_fgfybg_k$()) {
        previous.helpRemove_v3vfak_k$();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.onCancelIdempotentList_icdvp_k$(list, closed);
  };
  protoOf(AbstractChannel).onCancelIdempotentList_icdvp_k$ = function (list, closed) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          ((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE()).resumeSendClosed_r0hgr7_k$(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              list_0.get_fkrdnv_k$(i).resumeSendClosed_r0hgr7_k$(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  protoOf(AbstractChannel).iterator_jk1svi_k$ = function () {
    return new Itr(this);
  };
  protoOf(AbstractChannel).describeTryPoll_k2m4a9_k$ = function () {
    return new TryPollDesc(this.queue_1);
  };
  protoOf(AbstractChannel).get_onReceive_mimw11_k$ = function () {
    return new AbstractChannel$onReceive$1(this);
  };
  protoOf(AbstractChannel).get_onReceiveCatching_ajg9xa_k$ = function () {
    return new AbstractChannel$onReceiveCatching$1(this);
  };
  protoOf(AbstractChannel).takeFirstReceiveOrPeekClosed_ri9e84_k$ = function () {
    // Inline function 'kotlin.also' call
    var tmp0_also = protoOf(AbstractSendChannel).takeFirstReceiveOrPeekClosed_ri9e84_k$.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.onReceiveDequeued_4wpjax_k$();
    }
    return tmp0_also;
  };
  protoOf(AbstractChannel).onReceiveEnqueued_xu1a6p_k$ = function () {
  };
  protoOf(AbstractChannel).onReceiveDequeued_4wpjax_k$ = function () {
  };
  function _get_onCloseHandler__k3p6yi($this) {
    return $this.onCloseHandler_1;
  }
  function SendBufferedDesc(queue, element) {
    AddLastDesc.call(this, queue, new SendBuffered(element));
  }
  protoOf(SendBufferedDesc).failure_mowj19_k$ = function (affected) {
    var tmp;
    if (affected instanceof Closed) {
      tmp = affected;
    } else {
      if (isInterface(affected, ReceiveOrClosed)) {
        tmp = get_OFFER_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  function _get_isFullImpl__v905xu($this) {
    var tmp;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp_0 = $this.queue_1.get__next_inmai1_k$();
    if (!isInterface(tmp_0, ReceiveOrClosed)) {
      tmp = $this.get_isBufferFull_xv8jm_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.get_sendException_qpq1ry_k$();
  }
  function helpCloseAndGetSendException_0($this, element, closed) {
    helpClose($this, closed);
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(tmp1_safe_receiver, closed.get_sendException_qpq1ry_k$());
      throw tmp1_safe_receiver;
    }
    return closed.get_sendException_qpq1ry_k$();
  }
  function sendSuspend($this, element, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendSuspend.<anonymous>' call
      loop: while (true) {
        if (_get_isFullImpl__v905xu($this)) {
          var send = $this.onUndeliveredElement_1 == null ? new SendElement(element, cancellable) : new SendElementWithUndeliveredHandler(element, cancellable, $this.onUndeliveredElement_1);
          var enqueueResult = $this.enqueueSend_9ksp3t_k$(send);
          if (enqueueResult == null) {
            removeOnCancellation(cancellable, send);
            break $l$block_2;
          } else {
            if (enqueueResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, enqueueResult);
              break $l$block_2;
            } else {
              if (enqueueResult !== get_ENQUEUE_FAILED()) {
                if (!(enqueueResult instanceof Receive)) {
                  var tmp0_error = 'enqueueSend returned ' + toString(enqueueResult);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
        var offerResult = $this.offerInternal_tuzlq7_k$(element);
        if (offerResult === get_OFFER_SUCCESS()) {
          // Inline function 'kotlin.coroutines.resume' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
          cancellable.resumeWith_s3a3yh_k$(tmp$ret$1);
          break $l$block_2;
        } else {
          if (offerResult === get_OFFER_FAILED())
            continue loop;
          else {
            if (offerResult instanceof Closed) {
              helpCloseAndResumeWithSendException(cancellable, $this, element, offerResult);
              break $l$block_2;
            } else {
              var tmp1_error = 'offerInternal returned ' + toString_0(offerResult);
              throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
            }
          }
        }
      }
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function helpCloseAndResumeWithSendException(_this__u8e3s4, $this, element, closed) {
    helpClose($this, closed);
    var sendException = closed.get_sendException_qpq1ry_k$();
    var tmp0_safe_receiver = $this.onUndeliveredElement_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      addSuppressed(tmp1_safe_receiver, sendException);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_safe_receiver));
      _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$0);
      return Unit_getInstance();
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp$ret$3;
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(sendException));
    _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$3);
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.onCloseHandler_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.onCloseHandler_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56();
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp = closed.get__prev_inntnt_k$();
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.remove_fgfybg_k$()) {
        previous.helpRemove_v3vfak_k$();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          ((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE()).resumeReceiveClosed_ep2qlw_k$(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              list.get_fkrdnv_k$(i).resumeReceiveClosed_ep2qlw_k$(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.onClosedIdempotent_57xn14_k$(closed);
  }
  function TryOfferDesc(element, queue) {
    RemoveFirstDesc.call(this, queue);
    this.element_1 = element;
  }
  protoOf(TryOfferDesc).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  protoOf(TryOfferDesc).failure_mowj19_k$ = function (affected) {
    var tmp;
    if (affected instanceof Closed) {
      tmp = affected;
    } else {
      if (!isInterface(affected, ReceiveOrClosed)) {
        tmp = get_OFFER_FAILED();
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(TryOfferDesc).onPrepare_soaf0c_k$ = function (prepareOp) {
    var tmp = prepareOp.get_affected_lutt4z_k$();
    var affected = isInterface(tmp, ReceiveOrClosed) ? tmp : THROW_CCE();
    var tmp0_elvis_lhs = affected.tryResumeReceive_mpjrre_k$(this.element_1, prepareOp);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return get_REMOVE_PREPARED();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var token = tmp_0;
    if (token === get_RETRY_ATOMIC())
      return get_RETRY_ATOMIC();
    // Inline function 'kotlinx.coroutines.assert' call
    return null;
  };
  function registerSelectSend($this, select, element, block) {
    while (true) {
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      if (_get_isFullImpl__v905xu($this)) {
        var node = new SendSelect(element, $this, select, block);
        var enqueueResult = $this.enqueueSend_9ksp3t_k$(node);
        if (enqueueResult == null) {
          select.disposeOnSelect_lrl426_k$(node);
          return Unit_getInstance();
        } else {
          if (enqueueResult instanceof Closed)
            throw recoverStackTrace_0(helpCloseAndGetSendException_0($this, element, enqueueResult));
          else {
            if (enqueueResult !== get_ENQUEUE_FAILED()) {
              if (!(enqueueResult instanceof Receive)) {
                var tmp0_error = 'enqueueSend returned ' + toString(enqueueResult) + ' ';
                throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
              }
            }
          }
        }
      }
      var offerResult = $this.offerSelectInternal_lspj9s_k$(element, select);
      if (offerResult === get_ALREADY_SELECTED())
        return Unit_getInstance();
      else {
        if (offerResult !== get_OFFER_FAILED()) {
          if (offerResult !== get_RETRY_ATOMIC()) {
            if (offerResult === get_OFFER_SUCCESS()) {
              startCoroutineUnintercepted_0(block, $this, select.get_completion_t4gxwb_k$());
              return Unit_getInstance();
            } else {
              if (offerResult instanceof Closed)
                throw recoverStackTrace_0(helpCloseAndGetSendException_0($this, element, offerResult));
              else {
                var tmp1_error = 'offerSelectInternal returned ' + toString_0(offerResult);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              }
            }
          }
        }
      }
    }
  }
  function _get_queueDebugStateString__k7jj75($this) {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var head = $this.queue_1.get__next_inmai1_k$();
    if (head === $this.queue_1)
      return 'EmptyQueue';
    var tmp;
    if (head instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (head instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (head instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tail = $this.queue_1.get__prev_inntnt_k$();
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var tmp0_forEach = $this.queue_1;
    var cur = tmp0_forEach.get__next_inmai1_k$();
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        size = size + 1 | 0;
      }
      cur = cur.get__next_inmai1_k$();
    }
    return size;
  }
  function SendSelect(pollResult, channel, select, block) {
    Send.call(this);
    this.pollResult_1 = pollResult;
    this.channel_1 = channel;
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(SendSelect).get_pollResult_t5mkl7_k$ = function () {
    return this.pollResult_1;
  };
  protoOf(SendSelect).get_channel_dhi7tm_k$ = function () {
    return this.channel_1;
  };
  protoOf(SendSelect).get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  protoOf(SendSelect).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(SendSelect).tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp = this.select_1.trySelectOther_zha44u_k$(otherOp);
    return (tmp == null ? true : tmp instanceof Symbol) ? tmp : THROW_CCE();
  };
  protoOf(SendSelect).completeResumeSend_upvqar_k$ = function () {
    startCoroutineCancellable(this.block_1, this.channel_1, this.select_1.get_completion_t4gxwb_k$());
  };
  protoOf(SendSelect).dispose_3n44we_k$ = function () {
    if (!this.remove_fgfybg_k$())
      return Unit_getInstance();
    this.undeliveredElement_djsee8_k$();
  };
  protoOf(SendSelect).resumeSendClosed_r0hgr7_k$ = function (closed) {
    if (this.select_1.trySelect_1ivjiv_k$()) {
      this.select_1.resumeSelectWithException_xs2ljz_k$(closed.get_sendException_qpq1ry_k$());
    }
  };
  protoOf(SendSelect).undeliveredElement_djsee8_k$ = function () {
    var tmp0_safe_receiver = this.channel_1.onUndeliveredElement_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, this.pollResult_1, this.select_1.get_completion_t4gxwb_k$().get_context_h02k06_k$());
    }
  };
  protoOf(SendSelect).toString = function () {
    return 'SendSelect@' + get_hexAddress(this) + '(' + this.pollResult_1 + ')[' + this.channel_1 + ', ' + this.select_1 + ']';
  };
  function SendBuffered(element) {
    Send.call(this);
    this.element_1 = element;
  }
  protoOf(SendBuffered).get_element_q8gf71_k$ = function () {
    return this.element_1;
  };
  protoOf(SendBuffered).get_pollResult_t5mkl7_k$ = function () {
    return this.element_1;
  };
  protoOf(SendBuffered).tryResumeSend_93c6it_k$ = function (otherOp) {
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o9c8d9_k$();
    }
    return tmp0_also;
  };
  protoOf(SendBuffered).completeResumeSend_upvqar_k$ = function () {
  };
  protoOf(SendBuffered).resumeSendClosed_r0hgr7_k$ = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  protoOf(SendBuffered).toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.element_1 + ')';
  };
  function AbstractSendChannel$onSend$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(AbstractSendChannel$onSend$1).registerSelectClause2_5777du_k$ = function (select, param, block) {
    registerSelectSend(this.this$0__1, select, param, block);
  };
  protoOf(AbstractSendChannel$onSend$1).registerSelectClause2_5jxiui_k$ = function (select, param, block) {
    return this.registerSelectClause2_5777du_k$(select, (param == null ? true : isObject(param)) ? param : THROW_CCE(), block);
  };
  function AbstractSendChannel(onUndeliveredElement) {
    this.onUndeliveredElement_1 = onUndeliveredElement;
    this.queue_1 = new LinkedListHead();
    this.onCloseHandler_1 = atomic$ref$1(null);
  }
  protoOf(AbstractSendChannel).get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(AbstractSendChannel).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(AbstractSendChannel).offerInternal_tuzlq7_k$ = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.tryResumeReceive_mpjrre_k$(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.completeResumeReceive_1cyi5u_k$(element);
        return receive.get_offerResult_jdi2i8_k$();
      }
    }
  };
  protoOf(AbstractSendChannel).offerSelectInternal_lspj9s_k$ = function (element, select) {
    var offerOp = this.describeTryOffer_6o0iky_k$(element);
    var failure = select.performAtomicTrySelect_9r1u91_k$(offerOp);
    if (!(failure == null))
      return failure;
    var receive = offerOp.get_result_iyg5d2_k$();
    receive.completeResumeReceive_1cyi5u_k$(element);
    return receive.get_offerResult_jdi2i8_k$();
  };
  protoOf(AbstractSendChannel).get_closedForSend_4r8ipo_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp = this.queue_1.get__prev_inntnt_k$();
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp_0 = tmp0_safe_receiver;
    }
    return tmp_0;
  };
  protoOf(AbstractSendChannel).get_closedForReceive_iep3v5_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp = this.queue_1.get__next_inmai1_k$();
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp_0 = tmp0_safe_receiver;
    }
    return tmp_0;
  };
  protoOf(AbstractSendChannel).takeFirstSendOrPeekClosed_h7sgez_k$ = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp0_removeFirstIfIsInstanceOfOrPeekIf = this.queue_1;
      var next = tmp0_removeFirstIfIsInstanceOfOrPeekIf.get__next_inmai1_k$();
      if (next === tmp0_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      if (next instanceof Closed) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!next.removeImpl_i5v938_k$()) {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        var message = 'Should remove';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractSendChannel).sendBuffered_4b6ooj_k$ = function (element) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.queue_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2_anonymous = tmp0_addLastIfPrev.get__prev_inntnt_k$();
      if (isInterface(tmp2_anonymous, ReceiveOrClosed))
        return tmp2_anonymous;
      if (!true) {
        break $l$block;
      }
      tmp0_addLastIfPrev.addLast_uyctnf_k$(tmp1_addLastIfPrev);
    }
    return null;
  };
  protoOf(AbstractSendChannel).describeSendBuffered_gmw7y0_k$ = function (element) {
    return new SendBufferedDesc(this.queue_1, element);
  };
  protoOf(AbstractSendChannel).get_isClosedForSend_ajczci_k$ = function () {
    return !(this.get_closedForSend_4r8ipo_k$() == null);
  };
  protoOf(AbstractSendChannel).send_4idxxh_k$ = function (element, $completion) {
    if (this.offerInternal_tuzlq7_k$(element) === get_OFFER_SUCCESS())
      return Unit_getInstance();
    return sendSuspend(this, element, $completion);
  };
  protoOf(AbstractSendChannel).offer_pm4fdq_k$ = function (element) {
    try {
      return offer.call(this, element);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        var tmp0_safe_receiver = this.onUndeliveredElement_1;
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          addSuppressed(tmp1_safe_receiver, e);
          throw tmp1_safe_receiver;
        }
        throw e;
      } else {
        throw $p;
      }
    }
  };
  protoOf(AbstractSendChannel).trySend_3hclq4_k$ = function (element) {
    var result = this.offerInternal_tuzlq7_k$(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().success_qotpmt_k$(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().failure_gnxj6a_k$();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().closed_raq7mh_k$(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().closed_raq7mh_k$(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  protoOf(AbstractSendChannel).enqueueSend_9ksp3t_k$ = function (send) {
    if (this.get_isBufferAlwaysFull_v6nbtb_k$()) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.queue_1;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp1_anonymous = tmp0_addLastIfPrev.get__prev_inntnt_k$();
        if (isInterface(tmp1_anonymous, ReceiveOrClosed))
          return tmp1_anonymous;
        if (!true) {
          break $l$block;
        }
        tmp0_addLastIfPrev.addLast_uyctnf_k$(send);
      }
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.queue_1;
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        var tmp3_anonymous = tmp2_addLastIfPrevAndIf.get__prev_inntnt_k$();
        if (isInterface(tmp3_anonymous, ReceiveOrClosed))
          return tmp3_anonymous;
        if (!true) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.enqueueSend.<anonymous>' call
        if (!this.get_isBufferFull_xv8jm_k$()) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.addLast_uyctnf_k$(send);
        tmp$ret$3 = true;
      }
      if (!tmp$ret$3)
        return get_ENQUEUE_FAILED();
    }
    return null;
  };
  protoOf(AbstractSendChannel).close_9zy44b_k$ = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.queue_1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      if (!!(tmp0_addLastIfPrev.get__prev_inntnt_k$() instanceof Closed)) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.addLast_uyctnf_k$(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp_0 = this.queue_1.get__prev_inntnt_k$();
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  protoOf(AbstractSendChannel).invokeOnClose_88rhe6_k$ = function (handler) {
    if (!this.onCloseHandler_1.atomicfu$compareAndSet(null, handler)) {
      var value = this.onCloseHandler_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (value === get_HANDLER_INVOKED()) {
        throw IllegalStateException_init_$Create$('Another handler was already registered and successfully invoked');
      }
      throw IllegalStateException_init_$Create$('Another handler was already registered: ' + toString(value));
    } else {
      var closedToken = this.get_closedForSend_4r8ipo_k$();
      if (!(closedToken == null) ? this.onCloseHandler_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
        handler(closedToken.closeCause_1);
      }
    }
  };
  protoOf(AbstractSendChannel).onClosedIdempotent_57xn14_k$ = function (closed) {
  };
  protoOf(AbstractSendChannel).takeFirstReceiveOrPeekClosed_ri9e84_k$ = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp0_removeFirstIfIsInstanceOfOrPeekIf = this.queue_1;
      var next = tmp0_removeFirstIfIsInstanceOfOrPeekIf.get__next_inmai1_k$();
      if (next === tmp0_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      if (next instanceof Closed) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!next.removeImpl_i5v938_k$()) {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        var message = 'Should remove';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractSendChannel).describeTryOffer_6o0iky_k$ = function (element) {
    return new TryOfferDesc(element, this.queue_1);
  };
  protoOf(AbstractSendChannel).get_onSend_hnoo40_k$ = function () {
    return new AbstractSendChannel$onSend$1(this);
  };
  protoOf(AbstractSendChannel).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.get_bufferDebugString_66mwn9_k$();
  };
  protoOf(AbstractSendChannel).get_bufferDebugString_66mwn9_k$ = function () {
    return '';
  };
  function Send() {
    LinkedListNode.call(this);
  }
  protoOf(Send).undeliveredElement_djsee8_k$ = function () {
  };
  function ReceiveOrClosed() {
  }
  function Closed(closeCause) {
    Send.call(this);
    this.closeCause_1 = closeCause;
  }
  protoOf(Closed).get_closeCause_gbqkm2_k$ = function () {
    return this.closeCause_1;
  };
  protoOf(Closed).get_sendException_qpq1ry_k$ = function () {
    var tmp0_elvis_lhs = this.closeCause_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).get_receiveException_nqbiq3_k$ = function () {
    var tmp0_elvis_lhs = this.closeCause_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  protoOf(Closed).get_offerResult_jdi2i8_k$ = function () {
    return this;
  };
  protoOf(Closed).get_pollResult_t5mkl7_k$ = function () {
    return this;
  };
  protoOf(Closed).tryResumeSend_93c6it_k$ = function (otherOp) {
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o9c8d9_k$();
    }
    return tmp0_also;
  };
  protoOf(Closed).completeResumeSend_upvqar_k$ = function () {
  };
  protoOf(Closed).tryResumeReceive_mpjrre_k$ = function (value, otherOp) {
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o9c8d9_k$();
    }
    return tmp0_also;
  };
  protoOf(Closed).completeResumeReceive_1cyi5u_k$ = function (value) {
  };
  protoOf(Closed).resumeSendClosed_r0hgr7_k$ = function (closed) {
    return Unit_getInstance();
  };
  protoOf(Closed).toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.closeCause_1 + ']';
  };
  function get_RECEIVE_THROWS_ON_CLOSE() {
    return RECEIVE_THROWS_ON_CLOSE;
  }
  var RECEIVE_THROWS_ON_CLOSE;
  function Receive() {
    LinkedListNode.call(this);
  }
  protoOf(Receive).get_offerResult_jdi2i8_k$ = function () {
    return get_OFFER_SUCCESS();
  };
  protoOf(Receive).resumeOnCancellationFun_ya26h6_k$ = function (value) {
    return null;
  };
  function toResult(_this__u8e3s4) {
    _init_properties_AbstractChannel_kt__sw8o27();
    var tmp;
    if (_this__u8e3s4 instanceof Closed) {
      tmp = Companion_getInstance_1().closed_raq7mh_k$(_this__u8e3s4.closeCause_1);
    } else {
      var tmp_0 = Companion_getInstance_1();
      tmp = tmp_0.success_qotpmt_k$((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
    }
    return tmp;
  }
  function get_RECEIVE_RESULT() {
    return RECEIVE_RESULT;
  }
  var RECEIVE_RESULT;
  function toResult_0(_this__u8e3s4) {
    _init_properties_AbstractChannel_kt__sw8o27();
    return Companion_getInstance_1().closed_raq7mh_k$(_this__u8e3s4.closeCause_1);
  }
  function SendElement(pollResult, cont) {
    Send.call(this);
    this.pollResult_1 = pollResult;
    this.cont_1 = cont;
  }
  protoOf(SendElement).get_pollResult_t5mkl7_k$ = function () {
    return this.pollResult_1;
  };
  protoOf(SendElement).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(SendElement).tryResumeSend_93c6it_k$ = function (otherOp) {
    var tmp1_elvis_lhs = this.cont_1.tryResume_10oxem_k$(Unit_getInstance(), otherOp == null ? null : otherOp.get_desc_woknve_k$());
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    if (otherOp == null)
      null;
    else {
      otherOp.finishPrepare_o9c8d9_k$();
    }
    return get_RESUME_TOKEN();
  };
  protoOf(SendElement).completeResumeSend_upvqar_k$ = function () {
    return this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  protoOf(SendElement).resumeSendClosed_r0hgr7_k$ = function (closed) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    var tmp0_resumeWithException = this.cont_1;
    var tmp1_resumeWithException = closed.get_sendException_qpq1ry_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
    tmp0_resumeWithException.resumeWith_s3a3yh_k$(tmp$ret$0);
    return Unit_getInstance();
  };
  protoOf(SendElement).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '(' + this.get_pollResult_t5mkl7_k$() + ')';
  };
  function SendElementWithUndeliveredHandler(pollResult, cont, onUndeliveredElement) {
    SendElement.call(this, pollResult, cont);
    this.onUndeliveredElement_1 = onUndeliveredElement;
  }
  protoOf(SendElementWithUndeliveredHandler).get_onUndeliveredElement_a8l4w7_k$ = function () {
    return this.onUndeliveredElement_1;
  };
  protoOf(SendElementWithUndeliveredHandler).remove_fgfybg_k$ = function () {
    if (!protoOf(SendElement).remove_fgfybg_k$.call(this))
      return false;
    this.undeliveredElement_djsee8_k$();
    return true;
  };
  protoOf(SendElementWithUndeliveredHandler).undeliveredElement_djsee8_k$ = function () {
    callUndeliveredElement(this.onUndeliveredElement_1, this.get_pollResult_t5mkl7_k$(), this.cont_1.get_context_h02k06_k$());
  };
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function _init_properties_AbstractChannel_kt__sw8o27() {
    if (!properties_initialized_AbstractChannel_kt_uwqnpt) {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function _get_capacity__a9k9f3($this) {
    return $this.capacity_1;
  }
  function _get_onBufferOverflow__4ha2pi($this) {
    return $this.onBufferOverflow_1;
  }
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_head__9nromv($this, _set____db54di) {
    $this.head_1 = _set____db54di;
  }
  function _get_head__d7jo8b($this) {
    return $this.head_1;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.capacity_1) {
      $this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(currentSize + 1 | 0);
      return null;
    }
    var tmp;
    switch ($this.onBufferOverflow_1.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.capacity_1) {
      ensureCapacity($this, currentSize);
      $this.buffer_1[($this.head_1 + currentSize | 0) % $this.buffer_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.buffer_1[$this.head_1 % $this.buffer_1.length | 0] = null;
      $this.buffer_1[($this.head_1 + currentSize | 0) % $this.buffer_1.length | 0] = element;
      $this.head_1 = ($this.head_1 + 1 | 0) % $this.buffer_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.buffer_1.length) {
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.buffer_1.length, 2);
      var tmp1_min = $this.capacity_1;
      var newSize = Math.min(tmp0_min, tmp1_min);
      // Inline function 'kotlin.arrayOfNulls' call
      var newBuffer = fillArrayVal(Array(newSize), null);
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.buffer_1[($this.head_1 + i | 0) % $this.buffer_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.buffer_1 = newBuffer;
      $this.head_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.capacity_1 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.capacity_1 >= 1)) {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      var message = 'ArrayChannel capacity must be at least 1, but ' + this.capacity_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.lock_1 = new NoOpLock();
    var tmp = this;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.capacity_1;
    var tmp1_arrayOfNulls = Math.min(tmp0_min, 8);
    var tmp2_apply = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    fill(tmp2_apply, get_EMPTY());
    tmp.buffer_1 = tmp2_apply;
    this.head_1 = 0;
    this.size_1 = atomic$int$1(0);
  }
  protoOf(ArrayChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return false;
  };
  protoOf(ArrayChannel).get_isBufferEmpty_t57jne_k$ = function () {
    return this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$() === 0;
  };
  protoOf(ArrayChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  protoOf(ArrayChannel).get_isBufferFull_xv8jm_k$ = function () {
    return this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$() === this.capacity_1 ? this.onBufferOverflow_1.equals(BufferOverflow_SUSPEND_getInstance()) : false;
  };
  protoOf(ArrayChannel).get_isEmpty_zauvru_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isEmpty>.<anonymous>' call
    return this.get_isEmptyImpl_9w6w0q_k$();
  };
  protoOf(ArrayChannel).get_isClosedForReceive_v0r77d_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    return protoOf(AbstractChannel).get_isClosedForReceive_v0r77d_k$.call(this);
  };
  protoOf(ArrayChannel).offerInternal_tuzlq7_k$ = function (element) {
    var receive = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).tryResumeReceive_mpjrre_k$(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ArrayChannel).offerSelectInternal_lspj9s_k$ = function (element, select) {
    var receive = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerSelectInternal.<anonymous>' call
      var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var offerOp = this.describeTryOffer_6o0iky_k$(element);
          var failure = select.performAtomicTrySelect_9r1u91_k$(offerOp);
          if (failure == null) {
            this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
            receive = offerOp.get_result_iyg5d2_k$();
            break $l$block;
          } else {
            if (failure === get_OFFER_FAILED())
              break loop;
            else {
              if (failure !== get_RETRY_ATOMIC()) {
                var tmp;
                if (failure === get_ALREADY_SELECTED()) {
                  tmp = true;
                } else {
                  tmp = failure instanceof Closed;
                }
                if (tmp) {
                  this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
                  return failure;
                } else {
                  var tmp0_error = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
      if (!select.trySelect_1ivjiv_k$()) {
        this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
        return get_ALREADY_SELECTED();
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ArrayChannel).enqueueSend_9ksp3t_k$ = function (send) {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueSend.<anonymous>' call
    return protoOf(AbstractChannel).enqueueSend_9ksp3t_k$.call(this, send);
  };
  protoOf(ArrayChannel).pollInternal_ml771g_k$ = function () {
    var send = null;
    var resumed = false;
    var result = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (size === 0) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.buffer_1[this.head_1];
    this.buffer_1[this.head_1] = null;
    this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size - 1 | 0);
    var replacement = get_POLL_FAILED();
    if (size === this.capacity_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.takeFirstSendOrPeekClosed_h7sgez_k$();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).tryResumeSend_93c6it_k$(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).get_pollResult_t5mkl7_k$();
          break loop;
        }
        ensureNotNull(send).undeliveredElement_djsee8_k$();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
      this.buffer_1[(this.head_1 + size | 0) % this.buffer_1.length | 0] = replacement;
    }
    this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
    if (resumed) {
      ensureNotNull(send).completeResumeSend_upvqar_k$();
    }
    return result;
  };
  protoOf(ArrayChannel).pollSelectInternal_puj25v_k$ = function (select) {
    var send = null;
    var success = false;
    var result = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    var size = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (size === 0) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.buffer_1[this.head_1];
    this.buffer_1[this.head_1] = null;
    this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size - 1 | 0);
    var replacement = get_POLL_FAILED();
    if (size === this.capacity_1) {
      loop: while (true) {
        var pollOp = this.describeTryPoll_k2m4a9_k$();
        var failure = select.performAtomicTrySelect_9r1u91_k$(pollOp);
        if (failure == null) {
          send = pollOp.get_result_iyg5d2_k$();
          success = true;
          replacement = ensureNotNull(send).get_pollResult_t5mkl7_k$();
          break loop;
        } else {
          if (failure === get_POLL_FAILED())
            break loop;
          else {
            if (failure !== get_RETRY_ATOMIC()) {
              if (failure === get_ALREADY_SELECTED()) {
                this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
                this.buffer_1[this.head_1] = result;
                return failure;
              } else {
                if (failure instanceof Closed) {
                  send = failure;
                  success = true;
                  replacement = failure;
                  break loop;
                } else {
                  var tmp0_error = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
    }
    var tmp;
    if (!(replacement === get_POLL_FAILED())) {
      tmp = !(replacement instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
      this.buffer_1[(this.head_1 + size | 0) % this.buffer_1.length | 0] = replacement;
    } else {
      if (!select.trySelect_1ivjiv_k$()) {
        this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(size);
        this.buffer_1[this.head_1] = result;
        return get_ALREADY_SELECTED();
      }
    }
    this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
    if (success) {
      ensureNotNull(send).completeResumeSend_upvqar_k$();
    }
    return result;
  };
  protoOf(ArrayChannel).enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    return protoOf(AbstractChannel).enqueueReceiveInternal_rxtsl7_k$.call(this, receive);
  };
  protoOf(ArrayChannel).onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var onUndeliveredElement = this.get_onUndeliveredElement_a8l4w7_k$();
    var undeliveredElementException = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.buffer_1[this.head_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.buffer_1[this.head_1] = get_EMPTY();
        this.head_1 = (this.head_1 + 1 | 0) % this.buffer_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.size_1.set_kotlinx$atomicfu$value_3lx0f_k$(0);
    protoOf(AbstractChannel).onCancelIdempotent_1zp8pj_k$.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  protoOf(ArrayChannel).get_bufferDebugString_66mwn9_k$ = function () {
    return '(buffer:capacity=' + this.capacity_1 + ',size=' + this.size_1.get_kotlinx$atomicfu$value_vi2am5_k$() + ')';
  };
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  function values_0() {
    return [BufferOverflow_SUSPEND_getInstance(), BufferOverflow_DROP_OLDEST_getInstance(), BufferOverflow_DROP_LATEST_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'SUSPEND':
        return BufferOverflow_SUSPEND_getInstance();
      case 'DROP_OLDEST':
        return BufferOverflow_DROP_OLDEST_getInstance();
      case 'DROP_LATEST':
        return BufferOverflow_DROP_LATEST_getInstance();
      default:
        BufferOverflow_initEntries();
        THROW_ISE();
        break;
    }
  }
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
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
  function Factory() {
    Factory_instance = this;
    this.UNLIMITED_1 = 2147483647;
    this.RENDEZVOUS_1 = 0;
    this.CONFLATED_1 = -1;
    this.BUFFERED_1 = -2;
    this.OPTIONAL_CHANNEL_1 = -3;
    this.DEFAULT_BUFFER_PROPERTY_NAME_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.CHANNEL_DEFAULT_CAPACITY_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  protoOf(Factory).get_UNLIMITED_eshsm0_k$ = function () {
    return this.UNLIMITED_1;
  };
  protoOf(Factory).get_RENDEZVOUS_7qhqgu_k$ = function () {
    return this.RENDEZVOUS_1;
  };
  protoOf(Factory).get_CONFLATED_tox14f_k$ = function () {
    return this.CONFLATED_1;
  };
  protoOf(Factory).get_BUFFERED_qzy754_k$ = function () {
    return this.BUFFERED_1;
  };
  protoOf(Factory).get_OPTIONAL_CHANNEL_c6wrw3_k$ = function () {
    return this.OPTIONAL_CHANNEL_1;
  };
  protoOf(Factory).get_DEFAULT_BUFFER_PROPERTY_NAME_rafy59_k$ = function () {
    return this.DEFAULT_BUFFER_PROPERTY_NAME_1;
  };
  protoOf(Factory).get_CHANNEL_DEFAULT_CAPACITY_4xco1p_k$ = function () {
    return this.CHANNEL_DEFAULT_CAPACITY_1;
  };
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp;
    if (capacity === VOID) {
      Factory_getInstance();
      tmp = 0;
    } else {
      tmp = capacity;
    }
    capacity = tmp;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp_0;
    Factory_getInstance();
    if (capacity === 0) {
      tmp_0 = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (capacity === -1) {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp_0 = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (capacity === 2147483647) {
          tmp_0 = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (capacity === -2) {
            tmp_0 = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().CHANNEL_DEFAULT_CAPACITY_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp_0 = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp_0;
  }
  function _get_failed__jtpc32($this) {
    return $this.failed_1;
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
  function _ChannelResult___get_isFailure__impl__nz6ehu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Failed;
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed_0;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw($this);
      tmp = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__getOrThrow_impl_od1axs($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp instanceof Failed)) {
      var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
      return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var tmp_1;
    var tmp_2 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (tmp_2 instanceof Closed_0) {
      tmp_1 = !(_ChannelResult___get_holder__impl__pm9gzw($this).cause_1 == null);
    } else {
      tmp_1 = false;
    }
    if (tmp_1)
      throw _ChannelResult___get_holder__impl__pm9gzw($this).cause_1;
    // Inline function 'kotlin.error' call
    var tmp0_error = "Trying to call 'getOrThrow' on a failed channel result: " + toString(_ChannelResult___get_holder__impl__pm9gzw($this));
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed_0 ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cause_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed_0(cause) {
    Failed.call(this);
    this.cause_1 = cause;
  }
  protoOf(Closed_0).get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  protoOf(Closed_0).equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.cause_1, other.cause_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed_0).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.cause_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed_0).toString = function () {
    return 'Closed(' + this.cause_1 + ')';
  };
  function Companion() {
    Companion_instance = this;
    this.failed_1 = new Failed();
  }
  protoOf(Companion).success_qotpmt_k$ = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).failure_gnxj6a_k$ = function () {
    return _ChannelResult___init__impl__siwsuf(this.failed_1);
  };
  protoOf(Companion).closed_raq7mh_k$ = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed_0) {
      tmp = toString_0(_ChannelResult___get_holder__impl__pm9gzw($this));
    } else {
      tmp = 'Value(' + toString(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other instanceof ChannelResult ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_1();
    this.holder_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.holder_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.holder_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.holder_1, other);
  };
  function SendChannel() {
  }
  function ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt($block, resultContinuation) {
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).invoke_xgbiie_k$ = function (it, $completion) {
    var tmp = this.create_vaj3v6_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_xgbiie_k$(p1 instanceof ChannelResult ? p1.holder_1 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.it_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            this.set_state_a96kl8_k$(1);
            suspendResult = this.$block_1(ChannelResult__getOrNull_impl_f5e07h(this.it_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).create_vaj3v6_k$ = function (it, completion) {
    var i = new ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt(this.$block_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt).create_xubfvz_k$ = function (value, completion) {
    return this.create_vaj3v6_k$(value instanceof ChannelResult ? value.holder_1 : THROW_CCE(), completion);
  };
  function ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt_0($block, resultContinuation) {
    var i = new ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt($block, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_xgbiie_k$(it.holder_1, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ReceiveChannel$onReceiveOrNull$1(this$0) {
    this.this$0__1 = this$0;
  }
  protoOf(ReceiveChannel$onReceiveOrNull$1).registerSelectClause1_d10579_k$ = function (select, block) {
    var tmp = this.this$0__1.get_onReceiveCatching_ajg9xa_k$();
    tmp.registerSelectClause1_cysp94_k$(select, ReceiveChannel$_get_onReceiveOrNull_$o$registerSelectClause1$slambda_mk5gpt_0(block, null));
  };
  protoOf(ReceiveChannel$onReceiveOrNull$1).registerSelectClause1_cysp94_k$ = function (select, block) {
    return this.registerSelectClause1_d10579_k$(select, block);
  };
  function $receiveOrNullCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($receiveOrNullCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.receiveCatching_wrys2l_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 1:
            var unboxed = suspendResult.holder_1;
            suspendResult = new ChannelResult(unboxed);
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult.holder_1;
            return ChannelResult__getOrNull_impl_f5e07h(ARGUMENT);
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function ReceiveChannel() {
  }
  function $next0COROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($next0COROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE());
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

          case 2:
            return this._this__u8e3s4__1.next_20eer_k$();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function ChannelIterator() {
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this._channel_1 = _channel;
  }
  protoOf(ChannelCoroutine).get__channel_jf1gul_k$ = function () {
    return this._channel_1;
  };
  protoOf(ChannelCoroutine).get_isClosedForReceive_v0r77d_k$ = function () {
    return this._channel_1.get_isClosedForReceive_v0r77d_k$();
  };
  protoOf(ChannelCoroutine).get_isClosedForSend_ajczci_k$ = function () {
    return this._channel_1.get_isClosedForSend_ajczci_k$();
  };
  protoOf(ChannelCoroutine).get_isEmpty_zauvru_k$ = function () {
    return this._channel_1.get_isEmpty_zauvru_k$();
  };
  protoOf(ChannelCoroutine).get_onReceive_mimw11_k$ = function () {
    return this._channel_1.get_onReceive_mimw11_k$();
  };
  protoOf(ChannelCoroutine).get_onReceiveCatching_ajg9xa_k$ = function () {
    return this._channel_1.get_onReceiveCatching_ajg9xa_k$();
  };
  protoOf(ChannelCoroutine).get_onReceiveOrNull_5u62it_k$ = function () {
    return this._channel_1.get_onReceiveOrNull_5u62it_k$();
  };
  protoOf(ChannelCoroutine).get_onSend_hnoo40_k$ = function () {
    return this._channel_1.get_onSend_hnoo40_k$();
  };
  protoOf(ChannelCoroutine).close_9zy44b_k$ = function (cause) {
    return this._channel_1.close_9zy44b_k$(cause);
  };
  protoOf(ChannelCoroutine).invokeOnClose_88rhe6_k$ = function (handler) {
    this._channel_1.invokeOnClose_88rhe6_k$(handler);
  };
  protoOf(ChannelCoroutine).iterator_jk1svi_k$ = function () {
    return this._channel_1.iterator_jk1svi_k$();
  };
  protoOf(ChannelCoroutine).offer_pm4fdq_k$ = function (element) {
    return this._channel_1.offer_pm4fdq_k$(element);
  };
  protoOf(ChannelCoroutine).poll_21vi7_k$ = function () {
    return this._channel_1.poll_21vi7_k$();
  };
  protoOf(ChannelCoroutine).receive_ihhf9g_k$ = function ($completion) {
    return this._channel_1.receive_ihhf9g_k$($completion);
  };
  protoOf(ChannelCoroutine).receiveCatching_wrys2l_k$ = function ($completion) {
    var tmp = this._channel_1.receiveCatching_wrys2l_k$($completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return new ChannelResult(tmp.holder_1);
  };
  protoOf(ChannelCoroutine).receiveOrNull_5cvr9l_k$ = function ($completion) {
    return this._channel_1.receiveOrNull_5cvr9l_k$($completion);
  };
  protoOf(ChannelCoroutine).send_4idxxh_k$ = function (element, $completion) {
    return this._channel_1.send_4idxxh_k$(element, $completion);
  };
  protoOf(ChannelCoroutine).tryReceive_5r5v2p_k$ = function () {
    return this._channel_1.tryReceive_5r5v2p_k$();
  };
  protoOf(ChannelCoroutine).trySend_3hclq4_k$ = function (element) {
    return this._channel_1.trySend_3hclq4_k$(element);
  };
  protoOf(ChannelCoroutine).get_channel_dhi7tm_k$ = function () {
    return this;
  };
  protoOf(ChannelCoroutine).cancel_2kogtl_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
    tmp$ret$0 = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    this.cancelInternal_wqrppy_k$(tmp$ret$0);
  };
  protoOf(ChannelCoroutine).cancel_as6ug7_k$ = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
    tmp$ret$0 = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    this.cancelInternal_wqrppy_k$(tmp$ret$0);
    return true;
  };
  protoOf(ChannelCoroutine).cancel$default_do42m4_k$ = function (cause, $super) {
    return this.cancel$default_midxay_k$(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).cancel_4b7aim_k$ = function (cause) {
    if (this.get_isCancelled_trk8pu_k$())
      return Unit_getInstance();
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.cancellationExceptionMessage_a64063_k$() : null, null, this);
    } else {
      tmp = cause;
    }
    this.cancelInternal_wqrppy_k$(tmp);
  };
  protoOf(ChannelCoroutine).cancel$default_l3ut5j_k$ = function (cause, $super) {
    return this.cancel$default_64jlsz_k$(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).cancelInternal_wqrppy_k$ = function (cause) {
    var exception = this.toCancellationException$default_9ghy63_k$(cause);
    this._channel_1.cancel_4b7aim_k$(exception);
    this.cancelCoroutine_dy4tw5_k$(exception);
  };
  function consumeEach(_this__u8e3s4, action, $completion) {
    var tmp = new $consumeEachCOROUTINE$7(_this__u8e3s4, action, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function consume(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var cause = null;
    try {
      return block(_this__u8e3s4);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cause = e;
        throw e;
      } else {
        throw $p;
      }
    }
    finally {
      cancelConsumed(_this__u8e3s4, cause);
    }
  }
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
    _this__u8e3s4.cancel_4b7aim_k$(tmp);
  }
  function $consumeEachCOROUTINE$7(_this__u8e3s4, action, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.action_1 = action;
  }
  protoOf($consumeEachCOROUTINE$7).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(10);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.cause1__1 = null;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_exceptionState_s9sevl_k$(8);
            this.tmp0_iterator4__1 = this._this__u8e3s4__1.iterator_jk1svi_k$();
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(5);
            suspendResult = this.tmp0_iterator4__1.hasNext_4tgia2_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

            var e = this.tmp0_iterator4__1.next_20eer_k$();
            this.action_1(e);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 6:
            this.tmp$ret$03__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(10);
            this.set_state_a96kl8_k$(7);
            var tmp_0 = this;
            continue $sm;
          case 7:
            var tmp_1 = this;
            cancelConsumed(this._this__u8e3s4__1, this.cause1__1);
            tmp_1.tmp$ret$40__1 = Unit_getInstance();
            this.set_state_a96kl8_k$(12);
            continue $sm;
          case 8:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Error) {
              var e_0 = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              this.cause1__1 = e_0;
              throw e_0;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 9:
            this.set_exceptionState_s9sevl_k$(10);
            var t = this.get_exception_x0n6w6_k$();
            cancelConsumed(this._this__u8e3s4__1, this.cause1__1);
            throw t;
          case 10:
            throw this.get_exception_x0n6w6_k$();
          case 11:
            cancelConsumed(this._this__u8e3s4__1, this.cause1__1);
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(12);
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 10) {
          throw e_1;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_1);
        }
      }
     while (true);
  };
  function _get_lock__d9xa4g_0($this) {
    return $this.lock_1;
  }
  function _set_value__lx0xdg($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40($this) {
    return $this.value_1;
  }
  function updateValueLocked($this, element) {
    var old = $this.value_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.get_onUndeliveredElement_a8l4w7_k$();
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = callUndeliveredElementCatchingException(tmp0_safe_receiver, (old == null ? true : isObject(old)) ? old : THROW_CCE());
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.value_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.lock_1 = new NoOpLock();
    this.value_1 = get_EMPTY();
  }
  protoOf(ConflatedChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return false;
  };
  protoOf(ConflatedChannel).get_isBufferEmpty_t57jne_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    return this.value_1 === get_EMPTY();
  };
  protoOf(ConflatedChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  protoOf(ConflatedChannel).get_isBufferFull_xv8jm_k$ = function () {
    return false;
  };
  protoOf(ConflatedChannel).get_isEmpty_zauvru_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isEmpty>.<anonymous>' call
    return this.get_isEmptyImpl_9w6w0q_k$();
  };
  protoOf(ConflatedChannel).offerInternal_tuzlq7_k$ = function (element) {
    var receive = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.value_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.takeFirstReceiveOrPeekClosed_ri9e84_k$();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).tryResumeReceive_mpjrre_k$(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ConflatedChannel).offerSelectInternal_lspj9s_k$ = function (element, select) {
    var receive = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerSelectInternal.<anonymous>' call
      var tmp0_safe_receiver = this.get_closedForSend_4r8ipo_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.value_1 === get_EMPTY()) {
        loop: while (true) {
          var offerOp = this.describeTryOffer_6o0iky_k$(element);
          var failure = select.performAtomicTrySelect_9r1u91_k$(offerOp);
          if (failure == null) {
            receive = offerOp.get_result_iyg5d2_k$();
            break $l$block;
          } else {
            if (failure === get_OFFER_FAILED())
              break loop;
            else {
              if (failure !== get_RETRY_ATOMIC()) {
                var tmp;
                if (failure === get_ALREADY_SELECTED()) {
                  tmp = true;
                } else {
                  tmp = failure instanceof Closed;
                }
                if (tmp)
                  return failure;
                else {
                  var tmp0_error = 'performAtomicTrySelect(describeTryOffer) returned ' + toString(failure);
                  throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
                }
              }
            }
          }
        }
      }
      if (!select.trySelect_1ivjiv_k$()) {
        return get_ALREADY_SELECTED();
      }
      var tmp1_safe_receiver = updateValueLocked(this, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp1_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    ensureNotNull(receive).completeResumeReceive_1cyi5u_k$(element);
    return ensureNotNull(receive).get_offerResult_jdi2i8_k$();
  };
  protoOf(ConflatedChannel).pollInternal_ml771g_k$ = function () {
    var result = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    if (this.value_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.value_1;
    this.value_1 = get_EMPTY();
    return result;
  };
  protoOf(ConflatedChannel).pollSelectInternal_puj25v_k$ = function (select) {
    var result = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    if (this.value_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.get_closedForSend_4r8ipo_k$();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    if (!select.trySelect_1ivjiv_k$())
      return get_ALREADY_SELECTED();
    result = this.value_1;
    this.value_1 = get_EMPTY();
    return result;
  };
  protoOf(ConflatedChannel).onCancelIdempotent_1zp8pj_k$ = function (wasClosed) {
    var undeliveredElementException = null;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    protoOf(AbstractChannel).onCancelIdempotent_1zp8pj_k$.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  protoOf(ConflatedChannel).enqueueReceiveInternal_rxtsl7_k$ = function (receive) {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    return protoOf(AbstractChannel).enqueueReceiveInternal_rxtsl7_k$.call(this, receive);
  };
  protoOf(ConflatedChannel).get_bufferDebugString_66mwn9_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    this.lock_1;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    return '(value=' + toString(this.value_1) + ')';
  };
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(LinkedListChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return true;
  };
  protoOf(LinkedListChannel).get_isBufferEmpty_t57jne_k$ = function () {
    return true;
  };
  protoOf(LinkedListChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return false;
  };
  protoOf(LinkedListChannel).get_isBufferFull_xv8jm_k$ = function () {
    return false;
  };
  protoOf(LinkedListChannel).offerInternal_tuzlq7_k$ = function (element) {
    while (true) {
      var result = protoOf(AbstractChannel).offerInternal_tuzlq7_k$.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.sendBuffered_4b6ooj_k$(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  protoOf(LinkedListChannel).offerSelectInternal_lspj9s_k$ = function (element, select) {
    while (true) {
      var tmp;
      if (this.get_hasReceiveOrClosed_wl54xr_k$()) {
        tmp = protoOf(AbstractChannel).offerSelectInternal_lspj9s_k$.call(this, element, select);
      } else {
        var tmp0_elvis_lhs = select.performAtomicTrySelect_9r1u91_k$(this.describeSendBuffered_gmw7y0_k$(element));
        tmp = tmp0_elvis_lhs == null ? get_OFFER_SUCCESS() : tmp0_elvis_lhs;
      }
      var result = tmp;
      if (result === get_ALREADY_SELECTED())
        return get_ALREADY_SELECTED();
      else {
        if (result === get_OFFER_SUCCESS())
          return get_OFFER_SUCCESS();
        else {
          if (result !== get_OFFER_FAILED()) {
            if (result !== get_RETRY_ATOMIC()) {
              if (result instanceof Closed)
                return result;
              else {
                var tmp0_error = 'Invalid result ' + toString_0(result);
                throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
              }
            }
          }
        }
      }
    }
  };
  protoOf(LinkedListChannel).onCancelIdempotentList_icdvp_k$ = function (list, closed) {
    var undeliveredElementException = null;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0_anonymous = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          if (tmp0_anonymous instanceof SendBuffered) {
            var tmp1_safe_receiver = this.get_onUndeliveredElement_a8l4w7_k$();
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0_anonymous.get_element_q8gf71_k$();
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0_anonymous.resumeSendClosed_r0hgr7_k$(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.get_size_woubt6_k$() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1_anonymous = list_0.get_fkrdnv_k$(i);
              if (tmp1_anonymous instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.get_onUndeliveredElement_a8l4w7_k$();
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1_anonymous.get_element_q8gf71_k$();
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1_anonymous.resumeSendClosed_r0hgr7_k$(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  function ProducerScope() {
  }
  function awaitClose(_this__u8e3s4, block, $completion) {
    var tmp;
    if (block === VOID) {
      tmp = awaitClose$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $awaitCloseCOROUTINE$8(_this__u8e3s4, block, $completion);
    tmp_0.set_result_ximc09_k$(Unit_getInstance());
    tmp_0.set_exception_pwgeox_k$(null);
    return tmp_0.doResume_5yljmg_k$();
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel_0(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.invokeOnCompletion_t2apld_k$(onCompletion);
    }
    coroutine.start_eui3tp_k$(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).get_isActive_quafmh_k$ = function () {
    return protoOf(ChannelCoroutine).get_isActive_quafmh_k$.call(this);
  };
  protoOf(ProducerCoroutine).onCompleted_pxpqwj_k$ = function (value) {
    this.get__channel_jf1gul_k$().close$default_4vjk8d_k$();
  };
  protoOf(ProducerCoroutine).onCompleted_wmtzyo_k$ = function (value) {
    return this.onCompleted_pxpqwj_k$(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).onCancelled_oqqex5_k$ = function (cause, handled) {
    var processed = this.get__channel_jf1gul_k$().close_9zy44b_k$(cause);
    if (!processed ? !handled : false) {
      handleCoroutineException(this.get_context_h02k06_k$(), cause);
    }
  };
  protoOf(ProducerCoroutine).cancel$default_do42m4_k$ = function (cause, $super) {
    return this.cancel$default_midxay_k$(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ProducerCoroutine).cancel$default_l3ut5j_k$ = function (cause, $super) {
    return this.cancel$default_64jlsz_k$(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function awaitClose$lambda() {
    return Unit_getInstance();
  }
  function awaitClose$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      $cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function $awaitCloseCOROUTINE$8(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.block_1 = block;
  }
  protoOf($awaitCloseCOROUTINE$8).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            if (!(this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3()) === this._this__u8e3s4__1)) {
              var message = 'awaitClose() can only be invoked from the producer context';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }

            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(2);
            var cancellable = new CancellableContinuationImpl(intercepted(this), get_MODE_CANCELLABLE());
            cancellable.initCancellability_sh6jkn_k$();
            this._this__u8e3s4__1.invokeOnClose_88rhe6_k$(awaitClose$lambda_0(cancellable));
            suspendResult = returnIfSuspended(cancellable.getResult_clfhg3_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$00__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.block_1();
            return Unit_getInstance();
          case 4:
            this.set_exceptionState_s9sevl_k$(5);
            var t = this.get_exception_x0n6w6_k$();
            this.block_1();
            throw t;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  protoOf(RendezvousChannel).get_isBufferAlwaysEmpty_ross6j_k$ = function () {
    return true;
  };
  protoOf(RendezvousChannel).get_isBufferEmpty_t57jne_k$ = function () {
    return true;
  };
  protoOf(RendezvousChannel).get_isBufferAlwaysFull_v6nbtb_k$ = function () {
    return true;
  };
  protoOf(RendezvousChannel).get_isBufferFull_xv8jm_k$ = function () {
    return true;
  };
  function callbackFlow(block) {
    return new CallbackFlowBuilder(block);
  }
  function flowOf(value) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_0(value);
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function _get_block__jewopo_1($this) {
    return $this.block_2;
  }
  function $collectToCOROUTINE$9(_this__u8e3s4, scope, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.scope_1 = scope;
  }
  protoOf($collectToCOROUTINE$9).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = protoOf(ChannelFlowBuilder).collectTo_cxc1tf_k$.call(this._this__u8e3s4__1, this.scope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (!this.scope_1.get_isClosedForSend_ajczci_k$()) {
              throw IllegalStateException_init_$Create$("'awaitClose { yourCallbackOrListener.cancel() }' should be used in the end of callbackFlow block.\nOtherwise, a callback/listener may leak in case of external cancellation.\nSee callbackFlow API documentation for the details.");
            }

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
  function CallbackFlowBuilder(block, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? Factory_getInstance().get_BUFFERED_qzy754_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowBuilder.call(this, block, context, capacity, onBufferOverflow);
    this.block_2 = block;
  }
  protoOf(CallbackFlowBuilder).collectTo_cxc1tf_k$ = function (scope, $completion) {
    var tmp = new $collectToCOROUTINE$9(this, scope, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(CallbackFlowBuilder).create_ne139a_k$ = function (context, capacity, onBufferOverflow) {
    return new CallbackFlowBuilder(this.block_2, context, capacity, onBufferOverflow);
  };
  function _get_block__jewopo_2($this) {
    return $this.block_1;
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.block_1 = block;
  }
  protoOf(SafeFlow).collectSafely_b70wvn_k$ = function (collector, $completion) {
    return this.block_1(collector, $completion);
  };
  function _get_block__jewopo_3($this) {
    return $this.block_1;
  }
  function ChannelFlowBuilder(block, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? Factory_getInstance().get_BUFFERED_qzy754_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.block_1 = block;
  }
  protoOf(ChannelFlowBuilder).create_ne139a_k$ = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowBuilder(this.block_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowBuilder).collectTo_cxc1tf_k$ = function (scope, $completion) {
    return this.block_1(scope, $completion);
  };
  protoOf(ChannelFlowBuilder).toString = function () {
    return 'block[' + this.block_1 + '] -> ' + protoOf(ChannelFlow).toString.call(this);
  };
  function $collectCOROUTINE$10(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$10).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.collector_1.emit_1fbrsb_k$(this._this__u8e3s4__1.$value_1, this);
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
  function _no_name_provided__qut3iv_0($value) {
    this.$value_1 = $value;
  }
  protoOf(_no_name_provided__qut3iv_0).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$10(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function receiveAsFlow(_this__u8e3s4) {
    return new ChannelAsFlow(_this__u8e3s4, false);
  }
  function _get_channel__c6e3yq($this) {
    return $this.channel_1;
  }
  function _get_consume__prqidx($this) {
    return $this.consume_1;
  }
  function _get_consumed__hjl97n($this) {
    return $this.consumed_1;
  }
  function markConsumed($this) {
    if ($this.consume_1) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!$this.consumed_1.atomicfu$getAndSet(true)) {
        // Inline function 'kotlinx.coroutines.flow.ChannelAsFlow.markConsumed.<anonymous>' call
        var message = 'ReceiveChannel.consumeAsFlow can be collected just once';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
    }
  }
  function $collectCOROUTINE$11(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$11).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            if (this._this__u8e3s4__1.get_capacity_wxbgcd_k$() === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
              markConsumed(this._this__u8e3s4__1);
              this.set_state_a96kl8_k$(2);
              suspendResult = emitAllImpl(this.collector_1, this._this__u8e3s4__1.channel_1, this._this__u8e3s4__1.consume_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              suspendResult = protoOf(ChannelFlow).collect_llpwvh_k$.call(this._this__u8e3s4__1, this.collector_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function ChannelAsFlow(channel, consume, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.channel_1 = channel;
    this.consume_1 = consume;
    this.consumed_1 = atomic$boolean$1(false);
  }
  protoOf(ChannelAsFlow).create_ne139a_k$ = function (context, capacity, onBufferOverflow) {
    return new ChannelAsFlow(this.channel_1, this.consume_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelAsFlow).dropChannelOperators_b7m5cr_k$ = function () {
    return new ChannelAsFlow(this.channel_1, this.consume_1);
  };
  protoOf(ChannelAsFlow).collectTo_cxc1tf_k$ = function (scope, $completion) {
    return emitAllImpl(new SendingCollector(scope), this.channel_1, this.consume_1, $completion);
  };
  protoOf(ChannelAsFlow).produceImpl_3l1x6h_k$ = function (scope) {
    markConsumed(this);
    var tmp;
    if (this.get_capacity_wxbgcd_k$() === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
      tmp = this.channel_1;
    } else {
      tmp = protoOf(ChannelFlow).produceImpl_3l1x6h_k$.call(this, scope);
    }
    return tmp;
  };
  protoOf(ChannelAsFlow).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$11(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelAsFlow).additionalToStringProps_j3cp6l_k$ = function () {
    return 'channel=' + this.channel_1;
  };
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$12(_this__u8e3s4, channel, consume, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function $emitAllImplCOROUTINE$12(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.channel_1 = channel;
    this.consume_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$12).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(11);
            ensureActive_1(this._this__u8e3s4__1);
            this.cause0__1 = null;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_exceptionState_s9sevl_k$(8);
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (false) {
              this.set_state_a96kl8_k$(7);
              continue $sm;
            }

            this.set_state_a96kl8_k$(3);
            suspendResult = this.channel_1.receiveCatching_wrys2l_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.unboxed2__1 = suspendResult.holder_1;
            suspendResult = new ChannelResult(this.unboxed2__1);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.result3__1 = suspendResult.holder_1;
            if (_ChannelResult___get_isClosed__impl__mg7kuu(this.result3__1)) {
              var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.result3__1);
              if (tmp0_safe_receiver == null)
                null;
              else {
                throw tmp0_safe_receiver;
              }
              this.set_state_a96kl8_k$(7);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

          case 5:
            this.set_state_a96kl8_k$(6);
            suspendResult = this._this__u8e3s4__1.emit_1fbrsb_k$(ChannelResult__getOrThrow_impl_od1axs(this.result3__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 7:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(11);
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 8:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_1 = this;
              this.cause0__1 = e;
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 9:
            this.set_exceptionState_s9sevl_k$(11);
            var t = this.get_exception_x0n6w6_k$();
            if (this.consume_1) {
              cancelConsumed(this.channel_1, this.cause0__1);
            }

            throw t;
          case 10:
            if (this.consume_1) {
              cancelConsumed(this.channel_1, this.cause0__1);
            }

            return Unit_getInstance();
          case 11:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 11) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function Flow() {
  }
  function $collectCOROUTINE$13(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$13).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            var tmp_0 = this;
            tmp_0.safeCollector0__1 = new SafeCollector(this.collector_1, this.get_context_h02k06_k$());
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.collectSafely_b70wvn_k$(this.safeCollector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            return Unit_getInstance();
          case 4:
            this.set_exceptionState_s9sevl_k$(5);
            var t = this.get_exception_x0n6w6_k$();
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            throw t;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$13(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow() {
  }
  function SharedFlow() {
  }
  function fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_SharedFlow_kt__umasnn();
    if ((capacity === Factory_getInstance().get_RENDEZVOUS_7qhqgu_k$() ? true : capacity === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) ? onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) : false) {
      return _this__u8e3s4;
    }
    return new ChannelFlowOperatorImpl(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  function _get_replay__f4ufwc($this) {
    return $this.replay_1;
  }
  function _get_bufferCapacity__1egje9($this) {
    return $this.bufferCapacity_1;
  }
  function _get_onBufferOverflow__4ha2pi_0($this) {
    return $this.onBufferOverflow_1;
  }
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_replayIndex__ufyvqy($this, _set____db54di) {
    $this.replayIndex_1 = _set____db54di;
  }
  function _get_replayIndex__aaqzwa($this) {
    return $this.replayIndex_1;
  }
  function _set_minCollectorIndex__ukunhq($this, _set____db54di) {
    $this.minCollectorIndex_1 = _set____db54di;
  }
  function _get_minCollectorIndex__8v1r7e($this) {
    return $this.minCollectorIndex_1;
  }
  function _set_bufferSize__x9ue96($this, _set____db54di) {
    $this.bufferSize_1 = _set____db54di;
  }
  function _get_bufferSize__mp12kq($this) {
    return $this.bufferSize_1;
  }
  function _set_queueSize__jc2i7h($this, _set____db54di) {
    $this.queueSize_1 = _set____db54di;
  }
  function _get_queueSize__9yry73($this) {
    return $this.queueSize_1;
  }
  function _get_head__d7jo8b_0($this) {
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = $this.minCollectorIndex_1;
    var tmp1_minOf = $this.replayIndex_1;
    return tmp0_minOf.compareTo_n4fqi2_k$(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
  }
  function _get_replaySize__dxgnb1($this) {
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b_0($this);
    var tmp1_plus = $this.bufferSize_1;
    return tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus)).minus_llf5ei_k$($this.replayIndex_1).toInt_1tsl84_k$();
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.bufferSize_1 + $this.queueSize_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b_0($this);
    var tmp1_plus = $this.bufferSize_1;
    return tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
  }
  function _get_queueEndIndex__4m025l($this) {
    // Inline function 'kotlin.Long.plus' call
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b_0($this);
    var tmp1_plus = $this.bufferSize_1;
    var tmp2_plus = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
    var tmp3_plus = $this.queueSize_1;
    return tmp2_plus.plus_u6jwas_k$(toLong(tmp3_plus));
  }
  function tryEmitLocked($this, value) {
    if ($this.get_nCollectors_gh2yp7_k$() === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.bufferSize_1 >= $this.bufferCapacity_1 ? $this.minCollectorIndex_1.compareTo_n4fqi2_k$($this.replayIndex_1) <= 0 : false) {
      switch ($this.onBufferOverflow_1.get_ordinal_ip24qg_k$()) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
      }
    }
    enqueueLocked($this, value);
    $this.bufferSize_1 = $this.bufferSize_1 + 1 | 0;
    if ($this.bufferSize_1 > $this.bufferCapacity_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.replay_1) {
      var tmp$ret$0;
      // Inline function 'kotlin.Long.plus' call
      tmp$ret$0 = $this.replayIndex_1.plus_u6jwas_k$(new Long(1, 0));
      updateBufferLocked($this, tmp$ret$0, $this.minCollectorIndex_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.replay_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.bufferSize_1 = $this.bufferSize_1 + 1 | 0;
    if ($this.bufferSize_1 > $this.replay_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = _get_head__d7jo8b_0($this);
    var tmp1_plus = $this.bufferSize_1;
    tmp.minCollectorIndex_1 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.buffer_1), _get_head__d7jo8b_0($this), null);
    $this.bufferSize_1 = $this.bufferSize_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var newHead = _get_head__d7jo8b_0($this).plus_u6jwas_k$(new Long(1, 0));
    if ($this.replayIndex_1.compareTo_n4fqi2_k$(newHead) < 0)
      $this.replayIndex_1 = newHead;
    if ($this.minCollectorIndex_1.compareTo_n4fqi2_k$(newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.get_nCollectors_gh2yp7_k$() === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.correctCollectorIndexesOnDropOldest.<anonymous>' call
            if (element.index_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? element.index_1.compareTo_n4fqi2_k$(newHead) < 0 : false) {
              element.index_1 = newHead;
            }
          }
        }
      }
    }
    $this.minCollectorIndex_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.buffer_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.plus' call
    tmp$ret$0 = _get_head__d7jo8b_0($this).plus_u6jwas_k$(toLong(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newSize > 0)) {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp1_also = fillArrayVal(Array(newSize), null);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.growBuffer.<anonymous>' call
    $this.buffer_1 = tmp1_also;
    var newBuffer = tmp1_also;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b_0($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = head.plus_u6jwas_k$(toLong(i));
        var tmp$ret$4;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$4 = head.plus_u6jwas_k$(toLong(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$4));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>' call
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>' call
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$2 = null;
        break $l$block;
      }
      // Inline function 'kotlin.also' call
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = _get_head__d7jo8b_0($this);
      var tmp1_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$3 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus));
      var tmp2_also = new Emitter($this, tmp$ret$3, value, cancellable);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.emitSuspend.<anonymous>.<anonymous>.<anonymous>' call
      enqueueLocked($this, tmp2_also);
      $this.queueSize_1 = $this.queueSize_1 + 1 | 0;
      if ($this.bufferCapacity_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$2 = tmp2_also;
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
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$7 = _Result___init__impl__xyqfz8(Unit_getInstance());
        r.resumeWith_s3a3yh_k$(tmp$ret$7);
      }
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (emitter.index_1.compareTo_n4fqi2_k$(_get_head__d7jo8b_0($this)) < 0)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.buffer_1);
    if (!(getBufferAt(buffer, emitter.index_1) === emitter))
      return Unit_getInstance();
    setBufferAt(buffer, emitter.index_1, get_NO_VALUE());
    cleanupTailLocked($this);
    return Unit_getInstance();
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = newMinCollectorIndex.compareTo_n4fqi2_k$(newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b_0($this);
    if (inductionVariable.compareTo_n4fqi2_k$(newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable.plus_u6jwas_k$(new Long(1, 0));
        setBufferAt(ensureNotNull($this.buffer_1), index, null);
      }
       while (inductionVariable.compareTo_n4fqi2_k$(newHead) < 0);
    $this.replayIndex_1 = newReplayIndex;
    $this.minCollectorIndex_1 = newMinCollectorIndex;
    $this.bufferSize_1 = newBufferEndIndex.minus_llf5ei_k$(newHead).toInt_1tsl84_k$();
    $this.queueSize_1 = newQueueEndIndex.minus_llf5ei_k$(newBufferEndIndex).toInt_1tsl84_k$();
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.bufferCapacity_1 === 0 ? $this.queueSize_1 <= 1 : false)
      return Unit_getInstance();
    var buffer = ensureNotNull($this.buffer_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.queueSize_1 > 0) {
        var tmp$ret$1;
        // Inline function 'kotlin.Long.minus' call
        // Inline function 'kotlin.Long.plus' call
        var tmp0_plus = _get_head__d7jo8b_0($this);
        var tmp1_plus = _get_totalSize__xhdb3o($this);
        tmp$ret$1 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus)).minus_llf5ei_k$(new Long(1, 0));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.queueSize_1 = $this.queueSize_1 - 1 | 0;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp3_plus = _get_head__d7jo8b_0($this);
      var tmp4_plus = _get_totalSize__xhdb3o($this);
      tmp$ret$2 = tmp3_plus.plus_u6jwas_k$(toLong(tmp4_plus));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.tryTakeValue.<anonymous>' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (index.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.index_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.index_1 = index.plus_u6jwas_k$(new Long(1, 0));
      resumes = $this.updateCollectorIndexLocked_lspmte_k$(oldIndex);
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
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_getInstance());
        resume.resumeWith_s3a3yh_k$(tmp$ret$3);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.index_1;
    if (index.compareTo_n4fqi2_k$(_get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.bufferCapacity_1 > 0)
      return new Long(-1, -1);
    if (index.compareTo_n4fqi2_k$(_get_head__d7jo8b_0($this)) > 0)
      return new Long(-1, -1);
    if ($this.queueSize_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.buffer_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.value_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>' call
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.awaitValue.<anonymous>.<anonymous>' call
      var index = tryPeekLocked($this, slot);
      if (index.compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
        slot.cont_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
        break $l$block;
      }
      slot.cont_1 = cancellable;
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.get_nCollectors_gh2yp7_k$() === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            $l$block_1: {
              // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.findSlotsToResumeLocked.<anonymous>' call
              var tmp0_elvis_lhs = element.cont_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (tryPeekLocked($this, element).compareTo_n4fqi2_k$(new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                var tmp$ret$2;
                // Inline function 'kotlin.comparisons.maxOf' call
                var tmp0_maxOf = imul(2, resumes.length);
                tmp$ret$2 = Math.max(2, tmp0_maxOf);
                resumes = copyOf(tmp_0, tmp$ret$2);
              }
              var tmp_1 = resumes;
              var tmp1 = resumeCount;
              resumeCount = tmp1 + 1 | 0;
              tmp_1[tmp1] = cont;
              element.cont_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.flow_1 = flow;
    this.index_1 = index;
    this.value_1 = value;
    this.cont_1 = cont;
  }
  protoOf(Emitter).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(Emitter).set_index_e0930u_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  protoOf(Emitter).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(Emitter).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(Emitter).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(Emitter).dispose_3n44we_k$ = function () {
    return cancelEmitter(this.flow_1, this);
  };
  function $collectCOROUTINE$14(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$14).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(13);
            this.slot0__1 = this._this__u8e3s4__1.allocateSlot_67zie3_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(12);
            var tmp_0 = this.collector_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.set_state_a96kl8_k$(2);
              suspendResult = this.collector_1.onSubscription_igsb49_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.collectorJob2__1 = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            if (false) {
              this.set_state_a96kl8_k$(10);
              continue $sm;
            }

            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            if (false) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            this.newValue3__1 = tryTakeValue(this._this__u8e3s4__1, this.slot0__1);
            if (!(this.newValue3__1 === get_NO_VALUE())) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

          case 6:
            this.set_state_a96kl8_k$(7);
            suspendResult = awaitValue(this._this__u8e3s4__1, this.slot0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.collectorJob2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            this.set_state_a96kl8_k$(9);
            var tmp_2 = this.newValue3__1;
            suspendResult = this.collector_1.emit_1fbrsb_k$((tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 10:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(13);
            this.set_state_a96kl8_k$(11);
            continue $sm;
          case 11:
            this._this__u8e3s4__1.freeSlot_w9jsdv_k$(this.slot0__1);
            return Unit_getInstance();
          case 12:
            this.set_exceptionState_s9sevl_k$(13);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.freeSlot_w9jsdv_k$(this.slot0__1);
            throw t;
          case 13:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 13) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.replay_1 = replay;
    this.bufferCapacity_1 = bufferCapacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    this.buffer_1 = null;
    this.replayIndex_1 = new Long(0, 0);
    this.minCollectorIndex_1 = new Long(0, 0);
    this.bufferSize_1 = 0;
    this.queueSize_1 = 0;
  }
  protoOf(SharedFlowImpl).get_replayCache_uwub8y_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.<get-replayCache>.<anonymous>' call
    var replaySize = _get_replaySize__dxgnb1(this);
    if (replaySize === 0)
      return emptyList();
    var result = ArrayList_init_$Create$(replaySize);
    var buffer = ensureNotNull(this.buffer_1);
    var inductionVariable = 0;
    if (inductionVariable < replaySize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp$ret$0;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$0 = this.replayIndex_1.plus_u6jwas_k$(toLong(i));
        var tmp = getBufferAt(buffer, tmp$ret$0);
        var tmp1_plusAssign = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        result.add_1j60pz_k$(tmp1_plusAssign);
      }
       while (inductionVariable < replaySize);
    return result;
  };
  protoOf(SharedFlowImpl).get_lastReplayedLocked_pnaey7_k$ = function () {
    var tmp = ensureNotNull(this.buffer_1);
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.replayIndex_1;
    var tmp1_plus = _get_replaySize__dxgnb1(this);
    tmp$ret$1 = tmp0_plus.plus_u6jwas_k$(toLong(tmp1_plus)).minus_llf5ei_k$(new Long(1, 0));
    var tmp_0 = getBufferAt(tmp, tmp$ret$1);
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  protoOf(SharedFlowImpl).collect_4rdebi_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$14(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(SharedFlowImpl).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_4rdebi_k$(collector, $completion);
  };
  protoOf(SharedFlowImpl).tryEmit_4zef7h_k$ = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
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
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cont.resumeWith_s3a3yh_k$(tmp$ret$2);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).emit_1fbrsb_k$ = function (value, $completion) {
    if (this.tryEmit_4zef7h_k$(value))
      return Unit_getInstance();
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).updateNewCollectorIndexLocked_xl3tlm_k$ = function () {
    var index = this.replayIndex_1;
    if (index.compareTo_n4fqi2_k$(this.minCollectorIndex_1) < 0)
      this.minCollectorIndex_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).updateCollectorIndexLocked_lspmte_k$ = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (oldIndex.compareTo_n4fqi2_k$(this.minCollectorIndex_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b_0(this);
    // Inline function 'kotlin.Long.plus' call
    var tmp0_plus = this.bufferSize_1;
    var newMinCollectorIndex = head.plus_u6jwas_k$(toLong(tmp0_plus));
    if (this.bufferCapacity_1 === 0 ? this.queueSize_1 > 0 : false) {
      newMinCollectorIndex = newMinCollectorIndex.inc_28ke_k$();
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.get_nCollectors_gh2yp7_k$() === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = this.get_slots_iyl3po_k$();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
          if (!(element == null)) {
            // Inline function 'kotlinx.coroutines.flow.SharedFlowImpl.updateCollectorIndexLocked.<anonymous>' call
            if (element.index_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0 ? element.index_1.compareTo_n4fqi2_k$(newMinCollectorIndex) < 0 : false)
              newMinCollectorIndex = element.index_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (newMinCollectorIndex.compareTo_n4fqi2_k$(this.minCollectorIndex_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.get_nCollectors_gh2yp7_k$() > 0) {
      var newBufferSize0 = newBufferEndIndex.minus_llf5ei_k$(newMinCollectorIndex).toInt_1tsl84_k$();
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = this.queueSize_1;
      var tmp2_minOf = this.bufferCapacity_1 - newBufferSize0 | 0;
      tmp = Math.min(tmp1_minOf, tmp2_minOf);
    } else {
      tmp = this.queueSize_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlin.Long.plus' call
    var tmp3_plus = newBufferEndIndex;
    var tmp4_plus = this.queueSize_1;
    var newQueueEndIndex = tmp3_plus.plus_u6jwas_k$(toLong(tmp4_plus));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = fillArrayVal(Array(maxResumeCount), null);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.buffer_1);
      var inductionVariable = newBufferEndIndex;
      if (inductionVariable.compareTo_n4fqi2_k$(newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable;
          inductionVariable = inductionVariable.plus_u6jwas_k$(new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var tmp2 = resumeCount;
            resumeCount = tmp2 + 1 | 0;
            tmp_0[tmp2] = emitter.cont_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.value_1);
            newBufferEndIndex = newBufferEndIndex.inc_28ke_k$();
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (inductionVariable.compareTo_n4fqi2_k$(newQueueEndIndex) < 0);
    }
    var newBufferSize1 = newBufferEndIndex.minus_llf5ei_k$(head).toInt_1tsl84_k$();
    if (this.get_nCollectors_gh2yp7_k$() === 0)
      newMinCollectorIndex = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp8_maxOf = this.replayIndex_1;
    // Inline function 'kotlin.Long.minus' call
    var tmp6_minus = newBufferEndIndex;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp5_minOf = this.replay_1;
    var tmp7_minus = Math.min(tmp5_minOf, newBufferSize1);
    var tmp9_maxOf = tmp6_minus.minus_llf5ei_k$(toLong(tmp7_minus));
    var newReplayIndex = tmp8_maxOf.compareTo_n4fqi2_k$(tmp9_maxOf) >= 0 ? tmp8_maxOf : tmp9_maxOf;
    if ((this.bufferCapacity_1 === 0 ? newReplayIndex.compareTo_n4fqi2_k$(newQueueEndIndex) < 0 : false) ? equals(getBufferAt(ensureNotNull(this.buffer_1), newReplayIndex), get_NO_VALUE()) : false) {
      newBufferEndIndex = newBufferEndIndex.inc_28ke_k$();
      newReplayIndex = newReplayIndex.inc_28ke_k$();
    }
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).createSlot_mn6f4q_k$ = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).createSlotArray_n47sjm_k$ = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  protoOf(SharedFlowImpl).resetReplayCache_tzw4vv_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    updateBufferLocked(this, _get_bufferEndIndex__d2rk18(this), this.minCollectorIndex_1, _get_bufferEndIndex__d2rk18(this), _get_queueEndIndex__4m025l(this));
    return Unit_getInstance();
  };
  protoOf(SharedFlowImpl).fuse_pocnsz_k$ = function (context, capacity, onBufferOverflow) {
    return fuseSharedFlow(this, context, capacity, onBufferOverflow);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.index_1 = new Long(-1, -1);
    this.cont_1 = null;
  }
  protoOf(SharedFlowSlot).set_index_e0930u_k$ = function (_set____db54di) {
    this.index_1 = _set____db54di;
  };
  protoOf(SharedFlowSlot).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(SharedFlowSlot).set_cont_hmvecm_k$ = function (_set____db54di) {
    this.cont_1 = _set____db54di;
  };
  protoOf(SharedFlowSlot).get_cont_wok86z_k$ = function () {
    return this.cont_1;
  };
  protoOf(SharedFlowSlot).allocateLocked_qtt5lr_k$ = function (flow) {
    if (this.index_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0)
      return false;
    this.index_1 = flow.updateNewCollectorIndexLocked_xl3tlm_k$();
    return true;
  };
  protoOf(SharedFlowSlot).allocateLocked_8qz7hq_k$ = function (flow) {
    return this.allocateLocked_qtt5lr_k$(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).freeLocked_o4dpjk_k$ = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.index_1;
    this.index_1 = new Long(-1, -1);
    this.cont_1 = null;
    return flow.updateCollectorIndexLocked_lspmte_k$(oldIndex);
  };
  protoOf(SharedFlowSlot).freeLocked_l0ao83_k$ = function (flow) {
    return this.freeLocked_o4dpjk_k$(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.toInt_1tsl84_k$() & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[index.toInt_1tsl84_k$() & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  function MutableSharedFlow_0(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(replay >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message = 'replay cannot be negative, but was ' + replay;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(extraBufferCapacity >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_0 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((replay > 0 ? true : extraBufferCapacity > 0) ? true : onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      // Inline function 'kotlinx.coroutines.flow.MutableSharedFlow.<anonymous>' call
      var message_1 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow;
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : bufferCapacity0;
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
    Companion_instance_0 = this;
    this.Eagerly_1 = new StartedEagerly();
    this.Lazily_1 = new StartedLazily();
  }
  protoOf(Companion_0).get_Eagerly_3vw7yc_k$ = function () {
    return this.Eagerly_1;
  };
  protoOf(Companion_0).get_Lazily_wnk0q_k$ = function () {
    return this.Lazily_1;
  };
  protoOf(Companion_0).WhileSubscribed_8ndrxb_k$ = function (stopTimeoutMillis, replayExpirationMillis) {
    return new StartedWhileSubscribed(stopTimeoutMillis, replayExpirationMillis);
  };
  protoOf(Companion_0).WhileSubscribed$default_51v8um_k$ = function (stopTimeoutMillis, replayExpirationMillis, $super) {
    stopTimeoutMillis = stopTimeoutMillis === VOID ? new Long(0, 0) : stopTimeoutMillis;
    replayExpirationMillis = replayExpirationMillis === VOID ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : replayExpirationMillis;
    return $super === VOID ? this.WhileSubscribed_8ndrxb_k$(stopTimeoutMillis, replayExpirationMillis) : $super.WhileSubscribed_8ndrxb_k$.call(this, stopTimeoutMillis, replayExpirationMillis);
  };
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SharingStarted() {
  }
  var SharingCommand_START_instance;
  var SharingCommand_STOP_instance;
  var SharingCommand_STOP_AND_RESET_REPLAY_CACHE_instance;
  function values_1() {
    return [SharingCommand_START_getInstance(), SharingCommand_STOP_getInstance(), SharingCommand_STOP_AND_RESET_REPLAY_CACHE_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'START':
        return SharingCommand_START_getInstance();
      case 'STOP':
        return SharingCommand_STOP_getInstance();
      case 'STOP_AND_RESET_REPLAY_CACHE':
        return SharingCommand_STOP_AND_RESET_REPLAY_CACHE_getInstance();
      default:
        SharingCommand_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SharingCommand_entriesInitialized;
  function SharingCommand_initEntries() {
    if (SharingCommand_entriesInitialized)
      return Unit_getInstance();
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
  protoOf(StartedEagerly).command_gzzpfd_k$ = function (subscriptionCount) {
    return flowOf(SharingCommand_START_getInstance());
  };
  protoOf(StartedEagerly).toString = function () {
    return 'SharingStarted.Eagerly';
  };
  function StartedLazily$command$slambda$slambda($started, $this_flow, resultContinuation) {
    this.$started_1 = $started;
    this.$this_flow_1 = $this_flow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StartedLazily$command$slambda$slambda).invoke_kv9s22_k$ = function (count, $completion) {
    var tmp = this.create_4s7vdz_k$(count, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StartedLazily$command$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_kv9s22_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StartedLazily$command$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            if (this.count_1 > 0 ? !this.$started_1._v : false) {
              this.$started_1._v = true;
              this.set_state_a96kl8_k$(1);
              suspendResult = this.$this_flow_1.emit_1fbrsb_k$(SharingCommand_START_getInstance(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(StartedLazily$command$slambda$slambda).create_4s7vdz_k$ = function (count, completion) {
    var i = new StartedLazily$command$slambda$slambda(this.$started_1, this.$this_flow_1, completion);
    i.count_1 = count;
    return i;
  };
  protoOf(StartedLazily$command$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_4s7vdz_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function StartedLazily$command$slambda$slambda_0($started, $this_flow, resultContinuation) {
    var i = new StartedLazily$command$slambda$slambda($started, $this_flow, resultContinuation);
    var l = function (count, $completion) {
      return i.invoke_kv9s22_k$(count, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function StartedLazily$command$slambda($subscriptionCount, resultContinuation) {
    this.$subscriptionCount_1 = $subscriptionCount;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StartedLazily$command$slambda).invoke_epqy4w_k$ = function ($this$flow, $completion) {
    var tmp = this.create_6f2na3_k$($this$flow, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StartedLazily$command$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_epqy4w_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StartedLazily$command$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.started0__1 = {_v: false};
            this.set_state_a96kl8_k$(1);
            var tmp_0 = StartedLazily$command$slambda$slambda_0(this.started0__1, this.$this$flow_1, null);
            suspendResult = this.$subscriptionCount_1.collect_4rdebi_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  protoOf(StartedLazily$command$slambda).create_6f2na3_k$ = function ($this$flow, completion) {
    var i = new StartedLazily$command$slambda(this.$subscriptionCount_1, completion);
    i.$this$flow_1 = $this$flow;
    return i;
  };
  protoOf(StartedLazily$command$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_6f2na3_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function StartedLazily$command$slambda_0($subscriptionCount, resultContinuation) {
    var i = new StartedLazily$command$slambda($subscriptionCount, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.invoke_epqy4w_k$($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StartedLazily() {
  }
  protoOf(StartedLazily).command_gzzpfd_k$ = function (subscriptionCount) {
    return flow(StartedLazily$command$slambda_0(subscriptionCount, null));
  };
  protoOf(StartedLazily).toString = function () {
    return 'SharingStarted.Lazily';
  };
  function _get_stopTimeout__qe07ta($this) {
    return $this.stopTimeout_1;
  }
  function _get_replayExpiration__slg31n($this) {
    return $this.replayExpiration_1;
  }
  function StartedWhileSubscribed$command$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StartedWhileSubscribed$command$slambda).invoke_n8tpor_k$ = function ($this$transformLatest, count, $completion) {
    var tmp = this.create_y1dooe_k$($this$transformLatest, count, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StartedWhileSubscribed$command$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_n8tpor_k$(tmp, (!(p2 == null) ? typeof p2 === 'number' : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(StartedWhileSubscribed$command$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(8);
            if (this.count_1 > 0) {
              this.set_state_a96kl8_k$(6);
              suspendResult = this.$this$transformLatest_1.emit_1fbrsb_k$(SharingCommand_START_getInstance(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              suspendResult = delay_0(this.this$0__1.stopTimeout_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            if (this.this$0__1.replayExpiration_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
              this.set_state_a96kl8_k$(2);
              suspendResult = this.$this$transformLatest_1.emit_1fbrsb_k$(SharingCommand_STOP_getInstance(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

          case 2:
            this.set_state_a96kl8_k$(3);
            suspendResult = delay_0(this.this$0__1.replayExpiration_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(5);
            suspendResult = this.$this$transformLatest_1.emit_1fbrsb_k$(SharingCommand_STOP_AND_RESET_REPLAY_CACHE_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            return Unit_getInstance();
          case 8:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(StartedWhileSubscribed$command$slambda).create_y1dooe_k$ = function ($this$transformLatest, count, completion) {
    var i = new StartedWhileSubscribed$command$slambda(this.this$0__1, completion);
    i.$this$transformLatest_1 = $this$transformLatest;
    i.count_1 = count;
    return i;
  };
  function StartedWhileSubscribed$command$slambda_0(this$0, resultContinuation) {
    var i = new StartedWhileSubscribed$command$slambda(this$0, resultContinuation);
    var l = function ($this$transformLatest, count, $completion) {
      return i.invoke_n8tpor_k$($this$transformLatest, count, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function StartedWhileSubscribed$command$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StartedWhileSubscribed$command$slambda_1).invoke_83do7d_k$ = function (it, $completion) {
    var tmp = this.create_46y1ti_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StartedWhileSubscribed$command$slambda_1).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_83do7d_k$(p1 instanceof SharingCommand ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StartedWhileSubscribed$command$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return !this.it_1.equals(SharingCommand_START_getInstance());
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(StartedWhileSubscribed$command$slambda_1).create_46y1ti_k$ = function (it, completion) {
    var i = new StartedWhileSubscribed$command$slambda_1(completion);
    i.it_1 = it;
    return i;
  };
  protoOf(StartedWhileSubscribed$command$slambda_1).create_xubfvz_k$ = function (value, completion) {
    return this.create_46y1ti_k$(value instanceof SharingCommand ? value : THROW_CCE(), completion);
  };
  function StartedWhileSubscribed$command$slambda_2(resultContinuation) {
    var i = new StartedWhileSubscribed$command$slambda_1(resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_83do7d_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function StartedWhileSubscribed(stopTimeout, replayExpiration) {
    this.stopTimeout_1 = stopTimeout;
    this.replayExpiration_1 = replayExpiration;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.stopTimeout_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.StartedWhileSubscribed.<anonymous>' call
      var message = 'stopTimeout(' + toString_0(this.stopTimeout_1) + ' ms) cannot be negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.replayExpiration_1.compareTo_n4fqi2_k$(new Long(0, 0)) >= 0)) {
      // Inline function 'kotlinx.coroutines.flow.StartedWhileSubscribed.<anonymous>' call
      var message_0 = 'replayExpiration(' + toString_0(this.replayExpiration_1) + ' ms) cannot be negative';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(StartedWhileSubscribed).command_gzzpfd_k$ = function (subscriptionCount) {
    var tmp = transformLatest(subscriptionCount, StartedWhileSubscribed$command$slambda_0(this, null));
    return distinctUntilChanged(dropWhile(tmp, StartedWhileSubscribed$command$slambda_2(null)));
  };
  protoOf(StartedWhileSubscribed).toString = function () {
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.buildListInternal' call
    checkBuilderCapacity(2);
    // Inline function 'kotlin.apply' call
    var tmp0_apply = ArrayList_init_$Create$(2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.flow.StartedWhileSubscribed.toString.<anonymous>' call
    if (this.stopTimeout_1.compareTo_n4fqi2_k$(new Long(0, 0)) > 0) {
      tmp0_apply.add_1j60pz_k$('stopTimeout=' + toString_0(this.stopTimeout_1) + 'ms');
    }
    if (this.replayExpiration_1.compareTo_n4fqi2_k$(Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$()) < 0) {
      tmp0_apply.add_1j60pz_k$('replayExpiration=' + toString_0(this.replayExpiration_1) + 'ms');
    }
    var params = tmp0_apply.build_1k0s4u_k$();
    return 'SharingStarted.WhileSubscribed(' + joinToString(params) + ')';
  };
  protoOf(StartedWhileSubscribed).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof StartedWhileSubscribed) {
      tmp_0 = this.stopTimeout_1.equals(other.stopTimeout_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.replayExpiration_1.equals(other.replayExpiration_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StartedWhileSubscribed).hashCode = function () {
    return imul(this.stopTimeout_1.hashCode(), 31) + this.replayExpiration_1.hashCode() | 0;
  };
  function SharingCommand_START_getInstance() {
    SharingCommand_initEntries();
    return SharingCommand_START_instance;
  }
  function SharingCommand_STOP_getInstance() {
    SharingCommand_initEntries();
    return SharingCommand_STOP_instance;
  }
  function SharingCommand_STOP_AND_RESET_REPLAY_CACHE_getInstance() {
    SharingCommand_initEntries();
    return SharingCommand_STOP_AND_RESET_REPLAY_CACHE_instance;
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
  function MutableStateFlow() {
  }
  function MutableStateFlow_0(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function StateFlow() {
  }
  function update(_this__u8e3s4, function_0) {
    _init_properties_StateFlow_kt__eu9yi5();
    while (true) {
      var prevValue = _this__u8e3s4.get_value_j01efc_k$();
      var nextValue = function_0(prevValue);
      if (_this__u8e3s4.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
        return Unit_getInstance();
      }
    }
  }
  function updateAndGet(_this__u8e3s4, function_0) {
    _init_properties_StateFlow_kt__eu9yi5();
    while (true) {
      var prevValue = _this__u8e3s4.get_value_j01efc_k$();
      var nextValue = function_0(prevValue);
      if (_this__u8e3s4.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
        return nextValue;
      }
    }
  }
  function _get__state__37adl3_1($this) {
    return $this._state_1;
  }
  function _set_sequence__iw30om($this, _set____db54di) {
    $this.sequence_1 = _set____db54di;
  }
  function _get_sequence__636p7u($this) {
    return $this.sequence_1;
  }
  function updateState($this, expectedState, newState) {
    var curSequence = 0;
    var curSlots = $this.get_slots_iyl3po_k$();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var oldState = $this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (!(expectedState == null) ? !equals(oldState, expectedState) : false)
      return false;
    if (equals(oldState, newState))
      return true;
    $this._state_1.set_kotlinx$atomicfu$value_koguff_k$(newState);
    curSequence = $this.sequence_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.sequence_1 = curSequence;
    } else {
      $this.sequence_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.get_slots_iyl3po_k$();
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlinx.coroutines.flow.StateFlowImpl.updateState.<anonymous>' call
          if (element == null)
            null;
          else {
            element.makePending_e81oco_k$();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      if ($this.sequence_1 === curSequence) {
        $this.sequence_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.sequence_1;
      curSlots = $this.get_slots_iyl3po_k$();
    }
  }
  function $collectCOROUTINE$15(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$15).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(12);
            this.slot0__1 = this._this__u8e3s4__1.allocateSlot_67zie3_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(11);
            var tmp_0 = this.collector_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.set_state_a96kl8_k$(2);
              suspendResult = this.collector_1.onSubscription_igsb49_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.collectorJob2__1 = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
            this.oldState3__1 = null;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            if (false) {
              this.set_state_a96kl8_k$(9);
              continue $sm;
            }

            this.newState4__1 = this._this__u8e3s4__1._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            var tmp0_safe_receiver = this.collectorJob2__1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            if (this.oldState3__1 == null ? true : !equals(this.oldState3__1, this.newState4__1)) {
              this.set_state_a96kl8_k$(5);
              var tmp0_unbox = get_NULL();
              var tmp_2;
              if (this.newState4__1 === tmp0_unbox) {
                tmp_2 = (null == null ? true : isObject(null)) ? null : THROW_CCE();
              } else {
                var tmp_3 = this.newState4__1;
                tmp_2 = isObject(tmp_3) ? tmp_3 : THROW_CCE();
              }
              suspendResult = this.collector_1.emit_1fbrsb_k$(tmp_2, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(6);
              continue $sm;
            }

          case 5:
            this.oldState3__1 = this.newState4__1;
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            if (!this.slot0__1.takePending_f3q49c_k$()) {
              this.set_state_a96kl8_k$(7);
              suspendResult = this.slot0__1.awaitPending_yebmnm_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

          case 7:
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 8:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 9:
            this.tmp$ret$01__1 = Unit_getInstance();
            this.set_exceptionState_s9sevl_k$(12);
            this.set_state_a96kl8_k$(10);
            continue $sm;
          case 10:
            this._this__u8e3s4__1.freeSlot_w9jsdv_k$(this.slot0__1);
            return Unit_getInstance();
          case 11:
            this.set_exceptionState_s9sevl_k$(12);
            var t = this.get_exception_x0n6w6_k$();
            this._this__u8e3s4__1.freeSlot_w9jsdv_k$(this.slot0__1);
            throw t;
          case 12:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 12) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this._state_1 = atomic$ref$1(initialState);
    this.sequence_1 = 0;
  }
  protoOf(StateFlowImpl).set_value_rnwamw_k$ = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).get_value_j01efc_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var tmp0_unbox = get_NULL();
    var tmp1_unbox = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (tmp1_unbox === tmp0_unbox) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = isObject(tmp1_unbox) ? tmp1_unbox : THROW_CCE();
    }
    return tmp;
  };
  protoOf(StateFlowImpl).compareAndSet_fjyiiu_k$ = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).get_replayCache_uwub8y_k$ = function () {
    return listOf(this.get_value_j01efc_k$());
  };
  protoOf(StateFlowImpl).tryEmit_4zef7h_k$ = function (value) {
    this.set_value_rnwamw_k$(value);
    return true;
  };
  protoOf(StateFlowImpl).emit_1fbrsb_k$ = function (value, $completion) {
    this.set_value_rnwamw_k$(value);
    return Unit_getInstance();
  };
  protoOf(StateFlowImpl).resetReplayCache_tzw4vv_k$ = function () {
    throw UnsupportedOperationException_init_$Create$('MutableStateFlow.resetReplayCache is not supported');
  };
  protoOf(StateFlowImpl).collect_4rdebi_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$15(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(StateFlowImpl).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_4rdebi_k$(collector, $completion);
  };
  protoOf(StateFlowImpl).createSlot_mn6f4q_k$ = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).createSlotArray_n47sjm_k$ = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return fillArrayVal(Array(size), null);
  };
  protoOf(StateFlowImpl).fuse_pocnsz_k$ = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function _get__state__37adl3_2($this) {
    return $this._state_1;
  }
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this._state_1 = atomic$ref$1(null);
  }
  protoOf(StateFlowSlot).allocateLocked_v1uryr_k$ = function (flow) {
    if (!(this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null))
      return false;
    this._state_1.set_kotlinx$atomicfu$value_koguff_k$(get_NONE());
    return true;
  };
  protoOf(StateFlowSlot).allocateLocked_8qz7hq_k$ = function (flow) {
    return this.allocateLocked_v1uryr_k$(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).freeLocked_l01cri_k$ = function (flow) {
    this._state_1.set_kotlinx$atomicfu$value_koguff_k$(null);
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).freeLocked_l0ao83_k$ = function (flow) {
    return this.freeLocked_l01cri_k$(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).makePending_e81oco_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.makePending.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1_anonymous == null)
        return Unit_getInstance();
      else if (tmp1_anonymous === get_PENDING())
        return Unit_getInstance();
      else if (tmp1_anonymous === get_NONE()) {
        if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, get_PENDING()))
          return Unit_getInstance();
      } else {
        if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var tmp0_resume = tmp1_anonymous instanceof CancellableContinuationImpl ? tmp1_anonymous : THROW_CCE();
          var tmp$ret$0;
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
          tmp0_resume.resumeWith_s3a3yh_k$(tmp$ret$0);
          return Unit_getInstance();
        }
      }
    }
  };
  protoOf(StateFlowSlot).takePending_f3q49c_k$ = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this._state_1.atomicfu$getAndSet(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).awaitPending_yebmnm_k$ = function ($completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var cancellable = new CancellableContinuationImpl(intercepted($completion), get_MODE_CANCELLABLE());
    cancellable.initCancellability_sh6jkn_k$();
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.StateFlowSlot.awaitPending.<anonymous>' call
      // Inline function 'kotlinx.coroutines.assert' call
      if (this._state_1.atomicfu$compareAndSet(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
      cancellable.resumeWith_s3a3yh_k$(tmp$ret$1);
    }
    return cancellable.getResult_clfhg3_k$();
  };
  function fuseStateFlow(_this__u8e3s4, context, capacity, onBufferOverflow) {
    _init_properties_StateFlow_kt__eu9yi5();
    // Inline function 'kotlinx.coroutines.assert' call
    if (((0 <= capacity ? capacity <= 1 : false) ? true : capacity === Factory_getInstance().get_BUFFERED_qzy754_k$()) ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) {
      return _this__u8e3s4;
    }
    return fuseSharedFlow(_this__u8e3s4, context, capacity, onBufferOverflow);
  }
  function getAndUpdate(_this__u8e3s4, function_0) {
    _init_properties_StateFlow_kt__eu9yi5();
    while (true) {
      var prevValue = _this__u8e3s4.get_value_j01efc_k$();
      var nextValue = function_0(prevValue);
      if (_this__u8e3s4.compareAndSet_fjyiiu_k$(prevValue, nextValue)) {
        return prevValue;
      }
    }
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
  function _set_slots__knzp9s($this, _set____db54di) {
    $this.slots_1 = _set____db54di;
  }
  function _set_nCollectors__60nrap($this, _set____db54di) {
    $this.nCollectors_1 = _set____db54di;
  }
  function _set_nextIndex__5mwvzu($this, _set____db54di) {
    $this.nextIndex_1 = _set____db54di;
  }
  function _get_nextIndex__nnxkeq($this) {
    return $this.nextIndex_1;
  }
  function _set__subscriptionCount__l7i64c($this, _set____db54di) {
    $this._subscriptionCount_1 = _set____db54di;
  }
  function _get__subscriptionCount__fvqkqg($this) {
    return $this._subscriptionCount_1;
  }
  function AbstractSharedFlow() {
    this.slots_1 = null;
    this.nCollectors_1 = 0;
    this.nextIndex_1 = 0;
    this._subscriptionCount_1 = null;
  }
  protoOf(AbstractSharedFlow).get_slots_iyl3po_k$ = function () {
    return this.slots_1;
  };
  protoOf(AbstractSharedFlow).get_nCollectors_gh2yp7_k$ = function () {
    return this.nCollectors_1;
  };
  protoOf(AbstractSharedFlow).get_subscriptionCount_9h9j93_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>' call
    var tmp0_elvis_lhs = this._subscriptionCount_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new SubscriptionCountStateFlow(this.nCollectors_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.<get-subscriptionCount>.<anonymous>.<anonymous>' call
      this._subscriptionCount_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractSharedFlow).allocateSlot_67zie3_k$ = function () {
    var subscriptionCount = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>' call
    var curSlots = this.slots_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = this.createSlotArray_n47sjm_k$(2);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
      this.slots_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      var tmp_0;
      if (this.nCollectors_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var tmp1_also = copyOf(curSlots, imul(2, curSlots.length));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        this.slots_1 = tmp1_also;
        tmp_0 = tmp1_also;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.nextIndex_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp2_also = this.createSlot_mn6f4q_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.allocateSlot.<anonymous>.<anonymous>' call
        slots[index] = tmp2_also;
        tmp_1 = tmp2_also;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).allocateLocked_8qz7hq_k$(this))
        break $l$loop;
    }
    this.nextIndex_1 = index;
    this.nCollectors_1 = this.nCollectors_1 + 1 | 0;
    subscriptionCount = this._subscriptionCount_1;
    var slot_0 = slot;
    var tmp0_safe_receiver = subscriptionCount;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.increment_t15t82_k$(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).freeSlot_w9jsdv_k$ = function (slot) {
    var subscriptionCount = null;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.freeSlot.<anonymous>' call
    this.nCollectors_1 = this.nCollectors_1 - 1 | 0;
    subscriptionCount = this._subscriptionCount_1;
    if (this.nCollectors_1 === 0)
      this.nextIndex_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).freeLocked_l0ao83_k$(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_getInstance());
        cont.resumeWith_s3a3yh_k$(tmp$ret$2);
      }
    }
    var tmp2_safe_receiver = subscriptionCount;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver.increment_t15t82_k$(-1);
  };
  protoOf(AbstractSharedFlow).forEachSlotLocked_fx14oo_k$ = function (block) {
    if (this.nCollectors_1 === 0)
      return Unit_getInstance();
    var tmp0_safe_receiver = this.slots_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = arrayIterator(tmp0_safe_receiver);
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked.<anonymous>' call
        if (!(element == null))
          block(element);
      }
    }
  };
  function AbstractSharedFlowSlot() {
  }
  function SubscriptionCountStateFlow(initialValue) {
    SharedFlowImpl.call(this, 1, IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$(), BufferOverflow_DROP_OLDEST_getInstance());
    this.tryEmit_4zef7h_k$(initialValue);
  }
  protoOf(SubscriptionCountStateFlow).get_value_j01efc_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.<get-value>.<anonymous>' call
    return this.get_lastReplayedLocked_pnaey7_k$();
  };
  protoOf(SubscriptionCountStateFlow).increment_t15t82_k$ = function (delta) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.flow.internal.SubscriptionCountStateFlow.increment.<anonymous>' call
    return this.tryEmit_4zef7h_k$(this.get_lastReplayedLocked_pnaey7_k$() + delta | 0);
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
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).invoke_7587ie_k$ = function (it, $completion) {
    var tmp = this.create_xnm1el_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_7587ie_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.collectTo_cxc1tf_k$(this.it_1, this);
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
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).create_xnm1el_k$ = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).create_xubfvz_k$ = function (value, completion) {
    return this.create_xnm1el_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_7587ie_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.$collector_1 = $collector;
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).invoke_d6gbsu_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlow$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = emitAll(this.$collector_1, this.this$0__1.produceImpl_3l1x6h_k$(this.$this$coroutineScope_1), this);
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
  protoOf(ChannelFlow$collect$slambda).create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.$collector_1, this.this$0__1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(ChannelFlow$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.context_1 = context;
    this.capacity_1 = capacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(ChannelFlow).get_capacity_wxbgcd_k$ = function () {
    return this.capacity_1;
  };
  protoOf(ChannelFlow).get_onBufferOverflow_51en86_k$ = function () {
    return this.onBufferOverflow_1;
  };
  protoOf(ChannelFlow).get_collectToFun_va2loj_k$ = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).get_produceCapacity_7smiwf_k$ = function () {
    return this.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() ? Factory_getInstance().get_BUFFERED_qzy754_k$() : this.capacity_1;
  };
  protoOf(ChannelFlow).dropChannelOperators_b7m5cr_k$ = function () {
    return null;
  };
  protoOf(ChannelFlow).fuse_pocnsz_k$ = function (context, capacity, onBufferOverflow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var newContext = context.plus_rgw9wi_k$(this.context_1);
    var newCapacity;
    var newOverflow;
    if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
      newCapacity = capacity;
      newOverflow = onBufferOverflow;
    } else {
      var tmp;
      if (this.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
        tmp = capacity;
      } else if (capacity === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
        tmp = this.capacity_1;
      } else if (this.capacity_1 === Factory_getInstance().get_BUFFERED_qzy754_k$()) {
        tmp = capacity;
      } else if (capacity === Factory_getInstance().get_BUFFERED_qzy754_k$()) {
        tmp = this.capacity_1;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        // Inline function 'kotlinx.coroutines.assert' call
        var sum = this.capacity_1 + capacity | 0;
        tmp = sum >= 0 ? sum : Factory_getInstance().get_UNLIMITED_eshsm0_k$();
      }
      newCapacity = tmp;
      newOverflow = this.onBufferOverflow_1;
    }
    if ((equals(newContext, this.context_1) ? newCapacity === this.capacity_1 : false) ? newOverflow.equals(this.onBufferOverflow_1) : false)
      return this;
    return this.create_ne139a_k$(newContext, newCapacity, newOverflow);
  };
  protoOf(ChannelFlow).produceImpl_3l1x6h_k$ = function (scope) {
    return produce(scope, this.context_1, this.get_produceCapacity_7smiwf_k$(), this.onBufferOverflow_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.get_collectToFun_va2loj_k$());
  };
  protoOf(ChannelFlow).collect_llpwvh_k$ = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).additionalToStringProps_j3cp6l_k$ = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.additionalToStringProps_j3cp6l_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.flow.internal.ChannelFlow.toString.<anonymous>' call
      props.add_1j60pz_k$(tmp0_safe_receiver);
    }
    if (!(this.context_1 === EmptyCoroutineContext_getInstance())) {
      props.add_1j60pz_k$('context=' + this.context_1);
    }
    if (!(this.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$())) {
      props.add_1j60pz_k$('capacity=' + this.capacity_1);
    }
    if (!this.onBufferOverflow_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.add_1j60pz_k$('onBufferOverflow=' + this.onBufferOverflow_1);
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function ChannelFlowOperatorImpl(flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
  }
  protoOf(ChannelFlowOperatorImpl).create_ne139a_k$ = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowOperatorImpl(this.flow_1, context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowOperatorImpl).dropChannelOperators_b7m5cr_k$ = function () {
    return this.flow_1;
  };
  protoOf(ChannelFlowOperatorImpl).flowCollect_ltb8cl_k$ = function (collector, $completion) {
    return this.flow_1.collect_llpwvh_k$(collector, $completion);
  };
  function collectWithContextUndispatched($this, collector, newContext, $completion) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $completion.get_context_h02k06_k$();
    var originalContextCollector = withUndispatchedContextCollector(collector, tmp$ret$0);
    return withContextUndispatched(newContext, originalContextCollector, VOID, ChannelFlowOperator$collectWithContextUndispatched$slambda_0($this, null), $completion);
  }
  function ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).invoke_i6lhpd_k$ = function (it, $completion) {
    var tmp = this.create_w91w5e_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_i6lhpd_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.flowCollect_ltb8cl_k$(this.it_1, this);
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
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).create_w91w5e_k$ = function (it, completion) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this.this$0__1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(ChannelFlowOperator$collectWithContextUndispatched$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_w91w5e_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlowOperator$collectWithContextUndispatched$slambda_0(this$0, resultContinuation) {
    var i = new ChannelFlowOperator$collectWithContextUndispatched$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_i6lhpd_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$16(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$16).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            if (this._this__u8e3s4__1.capacity_1 === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$()) {
              var tmp_0 = this;
              tmp_0.collectContext0__1 = this.get_context_h02k06_k$();
              this.newContext1__1 = this.collectContext0__1.plus_rgw9wi_k$(this._this__u8e3s4__1.context_1);
              if (equals(this.newContext1__1, this.collectContext0__1)) {
                this.set_state_a96kl8_k$(6);
                suspendResult = this._this__u8e3s4__1.flowCollect_ltb8cl_k$(this.collector_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(1);
                continue $sm;
              }
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

          case 1:
            if (equals(this.newContext1__1.get_j1ktw6_k$(Key_getInstance()), this.collectContext0__1.get_j1ktw6_k$(Key_getInstance()))) {
              this.set_state_a96kl8_k$(5);
              suspendResult = collectWithContextUndispatched(this._this__u8e3s4__1, this.collector_1, this.newContext1__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

          case 2:
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            suspendResult = protoOf(ChannelFlow).collect_llpwvh_k$.call(this._this__u8e3s4__1, this.collector_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            return Unit_getInstance();
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function ChannelFlowOperator(flow, context, capacity, onBufferOverflow) {
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.flow_1 = flow;
  }
  protoOf(ChannelFlowOperator).get_flow_wom2yf_k$ = function () {
    return this.flow_1;
  };
  protoOf(ChannelFlowOperator).collectTo_cxc1tf_k$ = function (scope, $completion) {
    return this.flowCollect_ltb8cl_k$(new SendingCollector(scope), $completion);
  };
  protoOf(ChannelFlowOperator).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$16(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowOperator).toString = function () {
    return '' + this.flow_1 + ' -> ' + protoOf(ChannelFlow).toString.call(this);
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
    var tmp0_startCoroutineUninterceptedOrReturn = new StackFrameContinuation($completion, newContext);
    // Inline function 'kotlin.js.asDynamic' call
    var a = block;
    return typeof a === 'function' ? a(value, tmp0_startCoroutineUninterceptedOrReturn) : block.invoke_5zdxxo_k$(value, tmp0_startCoroutineUninterceptedOrReturn);
  }
  function _get_emitContext__5m2ab9($this) {
    return $this.emitContext_1;
  }
  function _get_countOrElement__mr0q9r($this) {
    return $this.countOrElement_1;
  }
  function _get_emitRef__jc7zqn($this) {
    return $this.emitRef_1;
  }
  function UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation) {
    this.$downstream_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UndispatchedContextCollector$emitRef$slambda).invoke_tr8wvu_k$ = function (it, $completion) {
    var tmp = this.create_aq37ol_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$downstream_1.emit_1fbrsb_k$(this.it_1, this);
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
  protoOf(UndispatchedContextCollector$emitRef$slambda).create_aq37ol_k$ = function (it, completion) {
    var i = new UndispatchedContextCollector$emitRef$slambda(this.$downstream_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(UndispatchedContextCollector$emitRef$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function UndispatchedContextCollector$emitRef$slambda_0($downstream, resultContinuation) {
    var i = new UndispatchedContextCollector$emitRef$slambda($downstream, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_tr8wvu_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function UndispatchedContextCollector(downstream, emitContext) {
    this.emitContext_1 = emitContext;
    this.countOrElement_1 = threadContextElements(this.emitContext_1);
    var tmp = this;
    tmp.emitRef_1 = UndispatchedContextCollector$emitRef$slambda_0(downstream, null);
  }
  protoOf(UndispatchedContextCollector).emit_1fbrsb_k$ = function (value, $completion) {
    return withContextUndispatched(this.emitContext_1, value, this.countOrElement_1, this.emitRef_1, $completion);
  };
  function _get_uCont__b1l76e($this) {
    return $this.uCont_1;
  }
  function StackFrameContinuation(uCont, context) {
    this.uCont_1 = uCont;
    this.context_1 = context;
  }
  protoOf(StackFrameContinuation).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  protoOf(StackFrameContinuation).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(StackFrameContinuation).resumeWith_s3a3yh_k$ = function (result) {
    this.uCont_1.resumeWith_s3a3yh_k$(result);
  };
  protoOf(StackFrameContinuation).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  function combineInternal(_this__u8e3s4, flows, arrayFactory, transform, $completion) {
    return flowScope(combineInternal$slambda_0(flows, arrayFactory, transform, _this__u8e3s4, null), $completion);
  }
  function combineInternal$slambda$slambda$slambda($resultChannel, $i, resultContinuation) {
    this.$resultChannel_1 = $resultChannel;
    this.$i_1 = $i;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combineInternal$slambda$slambda$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(combineInternal$slambda$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combineInternal$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$resultChannel_1.send_4idxxh_k$(new IndexedValue(this.$i_1, this.value_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = yield_0(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(combineInternal$slambda$slambda$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new combineInternal$slambda$slambda$slambda(this.$resultChannel_1, this.$i_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(combineInternal$slambda$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function combineInternal$slambda$slambda$slambda_0($resultChannel, $i, resultContinuation) {
    var i = new combineInternal$slambda$slambda$slambda($resultChannel, $i, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function combineInternal$slambda$slambda($flows, $i, $nonClosed, $resultChannel, resultContinuation) {
    this.$flows_1 = $flows;
    this.$i_1 = $i;
    this.$nonClosed_1 = $nonClosed;
    this.$resultChannel_1 = $resultChannel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combineInternal$slambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(combineInternal$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combineInternal$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(2);
            var tmp_0 = this.$flows_1[this.$i_1];
            var tmp_1 = combineInternal$slambda$slambda$slambda_0(this.$resultChannel_1, this.$i_1, null);
            suspendResult = tmp_0.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$00__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            if (this.$nonClosed_1.decrementAndGet_dinmnm_k$() === 0) {
              this.$resultChannel_1.close$default_4vjk8d_k$();
            }

            return Unit_getInstance();
          case 4:
            this.set_exceptionState_s9sevl_k$(5);
            var t = this.get_exception_x0n6w6_k$();
            if (this.$nonClosed_1.decrementAndGet_dinmnm_k$() === 0) {
              this.$resultChannel_1.close$default_4vjk8d_k$();
            }

            throw t;
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(combineInternal$slambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new combineInternal$slambda$slambda(this.$flows_1, this.$i_1, this.$nonClosed_1, this.$resultChannel_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(combineInternal$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function combineInternal$slambda$slambda_0($flows, $i, $nonClosed, $resultChannel, resultContinuation) {
    var i = new combineInternal$slambda$slambda($flows, $i, $nonClosed, $resultChannel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function combineInternal$slambda($flows, $arrayFactory, $transform, $this_combineInternal, resultContinuation) {
    this.$flows_1 = $flows;
    this.$arrayFactory_1 = $arrayFactory;
    this.$transform_1 = $transform;
    this.$this_combineInternal_1 = $this_combineInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combineInternal$slambda).invoke_d6gbsu_k$ = function ($this$flowScope, $completion) {
    var tmp = this.create_b6qu53_k$($this$flowScope, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(combineInternal$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(combineInternal$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(10);
            this.size0__1 = this.$flows_1.length;
            if (this.size0__1 === 0)
              return Unit_getInstance();
            var tmp_0 = this;
            tmp_0.latestValues1__1 = fillArrayVal(Array(this.size0__1), null);
            fill(this.latestValues1__1, get_UNINITIALIZED());
            this.resultChannel2__1 = Channel_0(this.size0__1);
            this.nonClosed3__1 = new LocalAtomicInt(this.size0__1);
            this.remainingAbsentValues4__1 = this.size0__1;
            var inductionVariable = 0;
            var last = this.size0__1;
            if (inductionVariable < last)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                launch(this.$this$flowScope_1, VOID, VOID, combineInternal$slambda$slambda_0(this.$flows_1, i, this.nonClosed3__1, this.resultChannel2__1, null));
              }
               while (inductionVariable < last);
            this.lastReceivedEpoch5__1 = new Int8Array(this.size0__1);
            this.currentEpoch6__1 = 0;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(9);
              continue $sm;
            }

            this.currentEpoch6__1 = numberToByte(this.currentEpoch6__1 + 1);
            this.set_state_a96kl8_k$(2);
            suspendResult = this.resultChannel2__1.receiveCatching_wrys2l_k$(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 2:
            this.unboxed7__1 = suspendResult.holder_1;
            suspendResult = new ChannelResult(this.unboxed7__1);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.ARGUMENT8__1 = suspendResult.holder_1;
            this.tmp1_elvis_lhs9__1 = ChannelResult__getOrNull_impl_f5e07h(this.ARGUMENT8__1);
            if (this.tmp1_elvis_lhs9__1 == null) {
              this.set_state_a96kl8_k$(9);
              var tmp_1 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT10__1 = this.tmp1_elvis_lhs9__1;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

          case 4:
            this.element11__1 = this.WHEN_RESULT10__1;
            $l$loop_0: while (true) {
              var index = this.element11__1.get_index_it478p_k$();
              var previous = this.latestValues1__1[index];
              this.latestValues1__1[index] = this.element11__1.get_value_j01efc_k$();
              if (previous === get_UNINITIALIZED()) {
                this.remainingAbsentValues4__1 = this.remainingAbsentValues4__1 - 1 | 0;
              }
              if (this.lastReceivedEpoch5__1[index] === this.currentEpoch6__1)
                break $l$loop_0;
              this.lastReceivedEpoch5__1[index] = this.currentEpoch6__1;
              var tmp_2 = this;
              var tmp2_elvis_lhs = ChannelResult__getOrNull_impl_f5e07h(this.resultChannel2__1.tryReceive_5r5v2p_k$());
              var tmp_3;
              if (tmp2_elvis_lhs == null) {
                break $l$loop_0;
              } else {
                tmp_3 = tmp2_elvis_lhs;
              }
              tmp_2.element11__1 = tmp_3;
            }

            if (this.remainingAbsentValues4__1 === 0) {
              this.results12__1 = this.$arrayFactory_1();
              if (this.results12__1 == null) {
                this.set_state_a96kl8_k$(6);
                var tmp_4 = this.latestValues1__1;
                suspendResult = this.$transform_1(this.$this_combineInternal_1, isArray(tmp_4) ? tmp_4 : THROW_CCE(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_5 = this.latestValues1__1;
                var tmp0_copyInto = isArray(tmp_5) ? tmp_5 : THROW_CCE();
                var tmp1_copyInto = tmp0_copyInto.length;
                arrayCopy(tmp0_copyInto, this.results12__1, 0, 0, tmp1_copyInto);
                this.set_state_a96kl8_k$(5);
                var tmp_6 = this.results12__1;
                suspendResult = this.$transform_1(this.$this_combineInternal_1, (!(tmp_6 == null) ? isArray(tmp_6) : false) ? tmp_6 : THROW_CCE(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

          case 5:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 8:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 9:
            return Unit_getInstance();
          case 10:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 10) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(combineInternal$slambda).create_b6qu53_k$ = function ($this$flowScope, completion) {
    var i = new combineInternal$slambda(this.$flows_1, this.$arrayFactory_1, this.$transform_1, this.$this_combineInternal_1, completion);
    i.$this$flowScope_1 = $this$flowScope;
    return i;
  };
  protoOf(combineInternal$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function combineInternal$slambda_0($flows, $arrayFactory, $transform, $this_combineInternal, resultContinuation) {
    var i = new combineInternal$slambda($flows, $arrayFactory, $transform, $this_combineInternal, resultContinuation);
    var l = function ($this$flowScope, $completion) {
      return i.invoke_d6gbsu_k$($this$flowScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function flowScope(block, $completion) {
    // Inline function 'kotlinx.coroutines.flow.internal.flowScope.<anonymous>' call
    var coroutine = new FlowCoroutine($completion.get_context_h02k06_k$(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function FlowCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(FlowCoroutine).childCancelled_fdoq8t_k$ = function (cause) {
    if (cause instanceof ChildCancelledException)
      return true;
    return this.cancelImpl_5ls1mt_k$(cause);
  };
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.get_owner_iwkx3e_k$() === owner))
      throw _this__u8e3s4;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation) {
    this.this$0__1 = this$0;
    this.$collector_1 = $collector;
    this.$value_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.this$0__1.transform_1(this.$collector_1, this.$value_1, this);
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this.this$0__1, this.$collector_1, this.$value_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this$0, $collector, $value, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda(this$0, $collector, $value, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    this.$previousFlow_1 = $previousFlow;
    this.$this_coroutineScope_1 = $this_coroutineScope;
    this.this$0__1 = this$0;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.tmp0_safe_receiver0__1 = this.$previousFlow_1._v;
            if (this.tmp0_safe_receiver0__1 == null) {
              this.WHEN_RESULT1__1 = null;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            } else {
              this.tmp0_safe_receiver0__1.cancel_4b7aim_k$(new ChildCancelledException());
              this.set_state_a96kl8_k$(1);
              suspendResult = this.tmp0_safe_receiver0__1.join_kbq7u1_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.WHEN_RESULT1__1 = this.tmp0_safe_receiver0__1;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
            this.$previousFlow_1._v = launch(this.$this_coroutineScope_1, VOID, tmp_0, ChannelFlowTransformLatest$flowCollect$slambda$slambda$slambda_0(this.this$0__1, this.$collector_1, this.value_1, null));
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda(this.$previousFlow_1, this.$this_coroutineScope_1, this.this$0__1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function ChannelFlowTransformLatest$flowCollect$slambda$slambda_0($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda$slambda($previousFlow, $this_coroutineScope, this$0, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function _get_transform__ku8tb9($this) {
    return $this.transform_1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation) {
    this.this$0__1 = this$0;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).invoke_d6gbsu_k$ = function ($this$coroutineScope, $completion) {
    var tmp = this.create_b6qu53_k$($this$coroutineScope, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.previousFlow0__1 = {_v: null};
            this.set_state_a96kl8_k$(1);
            var tmp_0 = this.this$0__1.get_flow_wom2yf_k$();
            var tmp_1 = ChannelFlowTransformLatest$flowCollect$slambda$slambda_0(this.previousFlow0__1, this.$this$coroutineScope_1, this.this$0__1, this.$collector_1, null);
            suspendResult = tmp_0.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_1), this);
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
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).create_b6qu53_k$ = function ($this$coroutineScope, completion) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this.this$0__1, this.$collector_1, completion);
    i.$this$coroutineScope_1 = $this$coroutineScope;
    return i;
  };
  protoOf(ChannelFlowTransformLatest$flowCollect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function ChannelFlowTransformLatest$flowCollect$slambda_0(this$0, $collector, resultContinuation) {
    var i = new ChannelFlowTransformLatest$flowCollect$slambda(this$0, $collector, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.invoke_d6gbsu_k$($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function ChannelFlowTransformLatest(transform, flow, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? Factory_getInstance().get_BUFFERED_qzy754_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlowOperator.call(this, flow, context, capacity, onBufferOverflow);
    this.transform_1 = transform;
  }
  protoOf(ChannelFlowTransformLatest).create_ne139a_k$ = function (context, capacity, onBufferOverflow) {
    return new ChannelFlowTransformLatest(this.transform_1, this.get_flow_wom2yf_k$(), context, capacity, onBufferOverflow);
  };
  protoOf(ChannelFlowTransformLatest).flowCollect_hbr8vx_k$ = function (collector, $completion) {
    // Inline function 'kotlinx.coroutines.assert' call
    return coroutineScope(ChannelFlowTransformLatest$flowCollect$slambda_0(this, collector, null), $completion);
  };
  protoOf(ChannelFlowTransformLatest).flowCollect_ltb8cl_k$ = function (collector, $completion) {
    return this.flowCollect_hbr8vx_k$(collector, $completion);
  };
  function NopCollector() {
    NopCollector_instance = this;
  }
  protoOf(NopCollector).emit_pisoht_k$ = function (value, $completion) {
    return Unit_getInstance();
  };
  protoOf(NopCollector).emit_1fbrsb_k$ = function (value, $completion) {
    return this.emit_pisoht_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), $completion);
  };
  var NopCollector_instance;
  function NopCollector_getInstance() {
    if (NopCollector_instance == null)
      new NopCollector();
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
  function get_DONE() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return DONE;
  }
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
  function unsafeFlow(block) {
    return new _no_name_provided__qut3iv_1(block);
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.fold_iindx8_k$(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.get_collectContextSize_pumapd_k$())) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + _this__u8e3s4.get_collectContext_m0m2mq_k$() + ',\n') + ('\t\tbut emission happened in ' + currentContext + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
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
        $this = $this.get_parent_hy4reb_k$();
        collectJob_0 = collectJob_0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function _no_name_provided__qut3iv_1($block) {
    this.$block_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv_1).collect_llpwvh_k$ = function (collector, $completion) {
    return this.$block_1(collector, $completion);
  };
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.get_key_18j28a_k$();
      var collectElement = $this_checkContext.get_collectContext_m0m2mq_k$().get_j1ktw6_k$(key);
      var tmp;
      if (!(key === Key_getInstance_3())) {
        return !(element === collectElement) ? IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$() : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        var tmp0_error = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + emissionParentJob + ', expected child of ' + collectJob + '.\n') + '\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n' + "\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function _get_channel__c6e3yq_0($this) {
    return $this.channel_1;
  }
  function SendingCollector(channel) {
    this.channel_1 = channel;
  }
  protoOf(SendingCollector).emit_1fbrsb_k$ = function (value, $completion) {
    return this.channel_1.send_4idxxh_k$(value, $completion);
  };
  function CancellableFlow() {
  }
  function buffer(_this__u8e3s4, capacity, onBufferOverflow) {
    capacity = capacity === VOID ? Factory_getInstance().get_BUFFERED_qzy754_k$() : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((capacity >= 0 ? true : capacity === Factory_getInstance().get_BUFFERED_qzy754_k$()) ? true : capacity === Factory_getInstance().get_CONFLATED_tox14f_k$())) {
      // Inline function 'kotlinx.coroutines.flow.buffer.<anonymous>' call
      var message = 'Buffer size should be non-negative, BUFFERED, or CONFLATED, but was ' + capacity;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(capacity === Factory_getInstance().get_CONFLATED_tox14f_k$()) ? true : onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      // Inline function 'kotlinx.coroutines.flow.buffer.<anonymous>' call
      var message_0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    var capacity_0 = capacity;
    var onBufferOverflow_0 = onBufferOverflow;
    if (capacity_0 === Factory_getInstance().get_CONFLATED_tox14f_k$()) {
      capacity_0 = 0;
      onBufferOverflow_0 = BufferOverflow_DROP_OLDEST_getInstance();
    }
    var tmp;
    if (isInterface(_this__u8e3s4, FusibleFlow)) {
      tmp = _this__u8e3s4.fuse$default_fjb5uq_k$(VOID, capacity_0, onBufferOverflow_0);
    } else {
      tmp = new ChannelFlowOperatorImpl(_this__u8e3s4, VOID, capacity_0, onBufferOverflow_0);
    }
    return tmp;
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
      tmp_1 = _this__u8e3s4.keySelector_1 === keySelector;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = _this__u8e3s4.areEquivalent_1 === areEquivalent;
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
  function _get_upstream__8b4500($this) {
    return $this.upstream_1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_2).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function DistinctFlowImpl$collect$slambda(this$0, $previousKey, $collector, resultContinuation) {
    this.this$0__1 = this$0;
    this.$previousKey_1 = $previousKey;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DistinctFlowImpl$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(DistinctFlowImpl$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DistinctFlowImpl$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.key0__1 = this.this$0__1.keySelector_1(this.value_1);
            if (this.$previousKey_1._v === get_NULL() ? true : !this.this$0__1.areEquivalent_1(this.$previousKey_1._v, this.key0__1)) {
              this.$previousKey_1._v = this.key0__1;
              this.set_state_a96kl8_k$(1);
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

          case 1:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(DistinctFlowImpl$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new DistinctFlowImpl$collect$slambda(this.this$0__1, this.$previousKey_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(DistinctFlowImpl$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function DistinctFlowImpl$collect$slambda_0(this$0, $previousKey, $collector, resultContinuation) {
    var i = new DistinctFlowImpl$collect$slambda(this$0, $previousKey, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function DistinctFlowImpl(upstream, keySelector, areEquivalent) {
    this.upstream_1 = upstream;
    this.keySelector_1 = keySelector;
    this.areEquivalent_1 = areEquivalent;
  }
  protoOf(DistinctFlowImpl).get_keySelector_cq3tv9_k$ = function () {
    return this.keySelector_1;
  };
  protoOf(DistinctFlowImpl).get_areEquivalent_egyvrf_k$ = function () {
    return this.areEquivalent_1;
  };
  protoOf(DistinctFlowImpl).collect_llpwvh_k$ = function (collector, $completion) {
    var previousKey = {_v: get_NULL()};
    var tmp = DistinctFlowImpl$collect$slambda_0(this, previousKey, collector, null);
    return this.upstream_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_2(tmp), $completion);
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
    return new _no_name_provided__qut3iv_2(_this__u8e3s4, action);
  }
  function unsafeTransform(_this__u8e3s4, transform) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_3(_this__u8e3s4, transform);
  }
  function invokeSafely(_this__u8e3s4, action, cause, $completion) {
    var tmp = new $invokeSafelyCOROUTINE$17(_this__u8e3s4, action, cause, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function ThrowingCollector(e) {
    this.e_1 = e;
  }
  protoOf(ThrowingCollector).get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  protoOf(ThrowingCollector).emit_pisoht_k$ = function (value, $completion) {
    throw this.e_1;
  };
  protoOf(ThrowingCollector).emit_1fbrsb_k$ = function (value, $completion) {
    return this.emit_pisoht_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), $completion);
  };
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.e_1;
  }
  function $collectCOROUTINE$18(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$18).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_exceptionState_s9sevl_k$(7);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$this_onCompletion_1.collect_llpwvh_k$(this.collector_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_0 = this;
            tmp_0.sc0__1 = new SafeCollector(this.collector_1, this.get_context_h02k06_k$());
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(4);
            suspendResult = this._this__u8e3s4__1.$action_1(this.sc0__1, null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.tmp$ret$01__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.sc0__1.releaseIntercepted_5cexvt_k$();
            return Unit_getInstance();
          case 6:
            this.set_exceptionState_s9sevl_k$(9);
            this.t2__1 = this.get_exception_x0n6w6_k$();
            this.sc0__1.releaseIntercepted_5cexvt_k$();
            throw this.t2__1;
          case 7:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof Error) {
              this.e3__1 = this.get_exception_x0n6w6_k$();
              this.set_state_a96kl8_k$(8);
              suspendResult = invokeSafely(new ThrowingCollector(this.e3__1), this._this__u8e3s4__1.$action_1, this.e3__1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 8:
            throw this.e3__1;
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_2($this_onCompletion, $action) {
    this.$this_onCompletion_1 = $this_onCompletion;
    this.$action_1 = $action;
  }
  protoOf(_no_name_provided__qut3iv_2).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$18(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_3).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function unsafeTransform$o$collect$slambda($transform, $collector, resultContinuation) {
    this.$transform_1 = $transform;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(unsafeTransform$o$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(unsafeTransform$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(unsafeTransform$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$transform_1(this.$collector_1, this.value_1, this);
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
  protoOf(unsafeTransform$o$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new unsafeTransform$o$collect$slambda(this.$transform_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(unsafeTransform$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function unsafeTransform$o$collect$slambda_0($transform, $collector, resultContinuation) {
    var i = new unsafeTransform$o$collect$slambda($transform, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$19(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$19).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = unsafeTransform$o$collect$slambda_0(this._this__u8e3s4__1.$transform_1, this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$this_unsafeTransform_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_3(tmp_0), this);
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
  function _no_name_provided__qut3iv_3($this_unsafeTransform, $transform) {
    this.$this_unsafeTransform_1 = $this_unsafeTransform;
    this.$transform_1 = $transform;
  }
  protoOf(_no_name_provided__qut3iv_3).collect_aabnv5_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$19(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_3).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_aabnv5_k$(collector, $completion);
  };
  function $invokeSafelyCOROUTINE$17(_this__u8e3s4, action, cause, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.action_1 = action;
    this.cause_1 = cause;
  }
  protoOf($invokeSafelyCOROUTINE$17).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.action_1(this._this__u8e3s4__1, this.cause_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof Error) {
              var e = this.get_exception_x0n6w6_k$();
              !(this.cause_1 === null) && !(this.cause_1 === e);
              throw e;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function takeWhile(_this__u8e3s4, predicate) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_5(_this__u8e3s4, predicate);
  }
  function collectWhile(_this__u8e3s4, predicate, $completion) {
    var tmp = new $collectWhileCOROUTINE$20(_this__u8e3s4, predicate, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function dropWhile(_this__u8e3s4, predicate) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_7(_this__u8e3s4, predicate);
  }
  function $emitCOROUTINE$22(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$22).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              this.set_state_a96kl8_k$(2);
              suspendResult = this._this__u8e3s4__1.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.WHEN_RESULT0__1 = false;
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

          case 2:
            this.WHEN_RESULT0__1 = true;
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            var ARGUMENT = this.WHEN_RESULT0__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_4($predicate, $collector) {
    this.$predicate_1 = $predicate;
    this.$collector_1 = $collector;
  }
  protoOf(_no_name_provided__qut3iv_4).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$22(this, value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $collectCOROUTINE$21(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$21).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.collector0__1 = new _no_name_provided__qut3iv_4(this._this__u8e3s4__1.$predicate_1, this.collector_1);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$this_takeWhile_1.collect_llpwvh_k$(this.collector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector0__1);
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_5($this_takeWhile, $predicate) {
    this.$this_takeWhile_1 = $this_takeWhile;
    this.$predicate_1 = $predicate;
  }
  protoOf(_no_name_provided__qut3iv_5).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$21(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $emitCOROUTINE$23(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$23).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_6($predicate) {
    this.$predicate_1 = $predicate;
  }
  protoOf(_no_name_provided__qut3iv_6).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$23(this, value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_4(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_4).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function dropWhile$o$collect$slambda($matched, $collector, $predicate, resultContinuation) {
    this.$matched_1 = $matched;
    this.$collector_1 = $collector;
    this.$predicate_1 = $predicate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dropWhile$o$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(dropWhile$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dropWhile$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            if (this.$matched_1._v) {
              this.set_state_a96kl8_k$(3);
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(1);
              suspendResult = this.$predicate_1(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.ARGUMENT0__1 = suspendResult;
            if (!this.ARGUMENT0__1) {
              this.$matched_1._v = true;
              this.set_state_a96kl8_k$(2);
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

          case 2:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(dropWhile$o$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new dropWhile$o$collect$slambda(this.$matched_1, this.$collector_1, this.$predicate_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(dropWhile$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function dropWhile$o$collect$slambda_0($matched, $collector, $predicate, resultContinuation) {
    var i = new dropWhile$o$collect$slambda($matched, $collector, $predicate, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$24(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$24).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.matched0__1 = {_v: false};
            this.set_state_a96kl8_k$(1);
            var tmp_0 = dropWhile$o$collect$slambda_0(this.matched0__1, this.collector_1, this._this__u8e3s4__1.$predicate_1, null);
            suspendResult = this._this__u8e3s4__1.$this_dropWhile_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_4(tmp_0), this);
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
  function _no_name_provided__qut3iv_7($this_dropWhile, $predicate) {
    this.$this_dropWhile_1 = $this_dropWhile;
    this.$predicate_1 = $predicate;
  }
  protoOf(_no_name_provided__qut3iv_7).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$24(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $collectWhileCOROUTINE$20(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  protoOf($collectWhileCOROUTINE$20).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_0 = this;
            tmp_0.collector0__1 = new _no_name_provided__qut3iv_6(this.predicate_1);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.collect_llpwvh_k$(this.collector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector0__1);
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function get_DEFAULT_CONCURRENCY() {
    _init_properties_Merge_kt__cbpr96();
    return DEFAULT_CONCURRENCY;
  }
  var DEFAULT_CONCURRENCY;
  function get_DEFAULT_CONCURRENCY_PROPERTY_NAME() {
    return DEFAULT_CONCURRENCY_PROPERTY_NAME;
  }
  var DEFAULT_CONCURRENCY_PROPERTY_NAME;
  function transformLatest(_this__u8e3s4, transform) {
    _init_properties_Merge_kt__cbpr96();
    return new ChannelFlowTransformLatest(transform, _this__u8e3s4);
  }
  function mapLatest(_this__u8e3s4, transform) {
    _init_properties_Merge_kt__cbpr96();
    return transformLatest(_this__u8e3s4, mapLatest$slambda_0(transform, null));
  }
  function flatMapLatest(_this__u8e3s4, transform) {
    _init_properties_Merge_kt__cbpr96();
    return transformLatest(_this__u8e3s4, flatMapLatest$slambda_0(transform, null));
  }
  function mapLatest$slambda($transform, resultContinuation) {
    this.$transform_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mapLatest$slambda).invoke_xzialy_k$ = function ($this$transformLatest, it, $completion) {
    var tmp = this.create_fmyotj_k$($this$transformLatest, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(mapLatest$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_xzialy_k$(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(mapLatest$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$transform_1(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$transformLatest_1.emit_1fbrsb_k$(this.ARGUMENT0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(mapLatest$slambda).create_fmyotj_k$ = function ($this$transformLatest, it, completion) {
    var i = new mapLatest$slambda(this.$transform_1, completion);
    i.$this$transformLatest_1 = $this$transformLatest;
    i.it_1 = it;
    return i;
  };
  function mapLatest$slambda_0($transform, resultContinuation) {
    var i = new mapLatest$slambda($transform, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.invoke_xzialy_k$($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function flatMapLatest$slambda($transform, resultContinuation) {
    this.$transform_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(flatMapLatest$slambda).invoke_xzialy_k$ = function ($this$transformLatest, it, $completion) {
    var tmp = this.create_fmyotj_k$($this$transformLatest, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(flatMapLatest$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_xzialy_k$(tmp, (p2 == null ? true : isObject(p2)) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(flatMapLatest$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$transform_1(this.it_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = emitAll_0(this.$this$transformLatest_1, this.ARGUMENT0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(flatMapLatest$slambda).create_fmyotj_k$ = function ($this$transformLatest, it, completion) {
    var i = new flatMapLatest$slambda(this.$transform_1, completion);
    i.$this$transformLatest_1 = $this$transformLatest;
    i.it_1 = it;
    return i;
  };
  function flatMapLatest$slambda_0($transform, resultContinuation) {
    var i = new flatMapLatest$slambda($transform, resultContinuation);
    var l = function ($this$transformLatest, it, $completion) {
      return i.invoke_xzialy_k$($this$transformLatest, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  var properties_initialized_Merge_kt_dhn6vs;
  function _init_properties_Merge_kt__cbpr96() {
    if (!properties_initialized_Merge_kt_dhn6vs) {
      properties_initialized_Merge_kt_dhn6vs = true;
      DEFAULT_CONCURRENCY = systemProp('kotlinx.coroutines.flow.defaultConcurrency', 16, 1, IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
    }
  }
  function stateIn(_this__u8e3s4, scope, started, initialValue) {
    var config = configureSharing(_this__u8e3s4, 1);
    var state = MutableStateFlow_0(initialValue);
    var job = launchSharing(scope, config.context_1, config.upstream_1, state, started, initialValue);
    return new ReadonlyStateFlow(state, job);
  }
  function asStateFlow(_this__u8e3s4) {
    return new ReadonlyStateFlow(_this__u8e3s4, null);
  }
  function _get_collector__klro10($this) {
    return $this.collector_1;
  }
  function _get_action__ikx8yd($this) {
    return $this.action_1;
  }
  function $onSubscriptionCOROUTINE$25(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$25).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            var tmp_0 = this;
            tmp_0.safeCollector0__1 = new SafeCollector(this._this__u8e3s4__1.collector_1, this.get_context_h02k06_k$());
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.action_1(this.safeCollector0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp$ret$01__1 = suspendResult;
            this.set_exceptionState_s9sevl_k$(7);
            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            var tmp_1 = this._this__u8e3s4__1.collector_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.set_state_a96kl8_k$(4);
              suspendResult = this._this__u8e3s4__1.collector_1.onSubscription_igsb49_k$(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

          case 4:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            this.set_exceptionState_s9sevl_k$(7);
            var t = this.get_exception_x0n6w6_k$();
            this.safeCollector0__1.releaseIntercepted_5cexvt_k$();
            throw t;
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function SubscribedFlowCollector(collector, action) {
    this.collector_1 = collector;
    this.action_1 = action;
  }
  protoOf(SubscribedFlowCollector).emit_1fbrsb_k$ = function (value, $completion) {
    return this.collector_1.emit_1fbrsb_k$(value, $completion);
  };
  protoOf(SubscribedFlowCollector).onSubscription_igsb49_k$ = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$25(this, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function SharingConfig(upstream, extraBufferCapacity, onBufferOverflow, context) {
    this.upstream_1 = upstream;
    this.extraBufferCapacity_1 = extraBufferCapacity;
    this.onBufferOverflow_1 = onBufferOverflow;
    this.context_1 = context;
  }
  protoOf(SharingConfig).get_upstream_2jerto_k$ = function () {
    return this.upstream_1;
  };
  protoOf(SharingConfig).get_extraBufferCapacity_3c3oyn_k$ = function () {
    return this.extraBufferCapacity_1;
  };
  protoOf(SharingConfig).get_onBufferOverflow_51en86_k$ = function () {
    return this.onBufferOverflow_1;
  };
  protoOf(SharingConfig).get_context_h02k06_k$ = function () {
    return this.context_1;
  };
  function configureSharing(_this__u8e3s4, replay) {
    // Inline function 'kotlinx.coroutines.assert' call
    var defaultExtraCapacity = coerceAtLeast(replay, Factory_getInstance().get_CHANNEL_DEFAULT_CAPACITY_4xco1p_k$()) - replay | 0;
    if (_this__u8e3s4 instanceof ChannelFlow) {
      var upstream = _this__u8e3s4.dropChannelOperators_b7m5cr_k$();
      if (!(upstream == null)) {
        var tmp0_subject = _this__u8e3s4.get_capacity_wxbgcd_k$();
        return new SharingConfig(upstream, ((tmp0_subject === Factory_getInstance().get_OPTIONAL_CHANNEL_c6wrw3_k$() ? true : tmp0_subject === Factory_getInstance().get_BUFFERED_qzy754_k$()) ? true : tmp0_subject === 0) ? _this__u8e3s4.get_onBufferOverflow_51en86_k$().equals(BufferOverflow_SUSPEND_getInstance()) ? _this__u8e3s4.get_capacity_wxbgcd_k$() === 0 ? 0 : defaultExtraCapacity : replay === 0 ? 1 : 0 : _this__u8e3s4.get_capacity_wxbgcd_k$(), _this__u8e3s4.get_onBufferOverflow_51en86_k$(), _this__u8e3s4.get_context_h02k06_k$());
      }
    }
    return new SharingConfig(_this__u8e3s4, defaultExtraCapacity, BufferOverflow_SUSPEND_getInstance(), EmptyCoroutineContext_getInstance());
  }
  function launchSharing(_this__u8e3s4, context, upstream, shared, started, initialValue) {
    var start = equals(started, Companion_getInstance_2().get_Eagerly_3vw7yc_k$()) ? CoroutineStart_DEFAULT_getInstance() : CoroutineStart_UNDISPATCHED_getInstance();
    return launch(_this__u8e3s4, context, start, launchSharing$slambda_0(started, upstream, shared, initialValue, null));
  }
  function _get_job__e6b14k_0($this) {
    return $this.job_1;
  }
  function $collectCOROUTINE$26(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$26).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$$delegate_0__1.collect_4rdebi_k$(this.collector_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlyStateFlow(flow, job) {
    this.job_1 = job;
    this.$$delegate_0__1 = flow;
  }
  protoOf(ReadonlyStateFlow).get_replayCache_uwub8y_k$ = function () {
    return this.$$delegate_0__1.get_replayCache_uwub8y_k$();
  };
  protoOf(ReadonlyStateFlow).get_value_j01efc_k$ = function () {
    return this.$$delegate_0__1.get_value_j01efc_k$();
  };
  protoOf(ReadonlyStateFlow).collect_4rdebi_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$26(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(ReadonlyStateFlow).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_4rdebi_k$(collector, $completion);
  };
  protoOf(ReadonlyStateFlow).fuse_pocnsz_k$ = function (context, capacity, onBufferOverflow) {
    return fuseStateFlow(this, context, capacity, onBufferOverflow);
  };
  function launchSharing$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchSharing$slambda$slambda).invoke_2d59ga_k$ = function (it, $completion) {
    var tmp = this.create_4s7vdz_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(launchSharing$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_2d59ga_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchSharing$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return this.it_1 > 0;
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(launchSharing$slambda$slambda).create_4s7vdz_k$ = function (it, completion) {
    var i = new launchSharing$slambda$slambda(completion);
    i.it_1 = it;
    return i;
  };
  protoOf(launchSharing$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_4s7vdz_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  function launchSharing$slambda$slambda_0(resultContinuation) {
    var i = new launchSharing$slambda$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_2d59ga_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchSharing$slambda$slambda_1($upstream, $shared, $initialValue, resultContinuation) {
    this.$upstream_1 = $upstream;
    this.$shared_1 = $shared;
    this.$initialValue_1 = $initialValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchSharing$slambda$slambda_1).invoke_53zb15_k$ = function (it, $completion) {
    var tmp = this.create_46y1ti_k$(it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(launchSharing$slambda$slambda_1).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_53zb15_k$(p1 instanceof SharingCommand ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchSharing$slambda$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.tmp0_subject0__1 = this.it_1;
            this.tmp01__1 = this.tmp0_subject0__1.get_ordinal_ip24qg_k$();
            if (this.tmp01__1 === 0) {
              this.set_state_a96kl8_k$(1);
              suspendResult = this.$upstream_1.collect_llpwvh_k$(this.$shared_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.tmp01__1 === 1) {
                this.set_state_a96kl8_k$(2);
                continue $sm;
              } else {
                if (this.tmp01__1 === 2) {
                  if (this.$initialValue_1 === get_NO_VALUE()) {
                    this.$shared_1.resetReplayCache_tzw4vv_k$();
                  } else {
                    this.$shared_1.tryEmit_4zef7h_k$(this.$initialValue_1);
                  }
                  this.set_state_a96kl8_k$(2);
                  continue $sm;
                } else {
                  this.set_state_a96kl8_k$(2);
                  continue $sm;
                }
              }
            }

          case 1:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(launchSharing$slambda$slambda_1).create_46y1ti_k$ = function (it, completion) {
    var i = new launchSharing$slambda$slambda_1(this.$upstream_1, this.$shared_1, this.$initialValue_1, completion);
    i.it_1 = it;
    return i;
  };
  protoOf(launchSharing$slambda$slambda_1).create_xubfvz_k$ = function (value, completion) {
    return this.create_46y1ti_k$(value instanceof SharingCommand ? value : THROW_CCE(), completion);
  };
  function launchSharing$slambda$slambda_2($upstream, $shared, $initialValue, resultContinuation) {
    var i = new launchSharing$slambda$slambda_1($upstream, $shared, $initialValue, resultContinuation);
    var l = function (it, $completion) {
      return i.invoke_53zb15_k$(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function launchSharing$slambda($started, $upstream, $shared, $initialValue, resultContinuation) {
    this.$started_1 = $started;
    this.$upstream_1 = $upstream;
    this.$shared_1 = $shared;
    this.$initialValue_1 = $initialValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(launchSharing$slambda).invoke_d6gbsu_k$ = function ($this$launch, $completion) {
    var tmp = this.create_b6qu53_k$($this$launch, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(launchSharing$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(launchSharing$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            if (this.$started_1 === Companion_getInstance_2().get_Eagerly_3vw7yc_k$()) {
              this.set_state_a96kl8_k$(4);
              suspendResult = this.$upstream_1.collect_llpwvh_k$(this.$shared_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.$started_1 === Companion_getInstance_2().get_Lazily_wnk0q_k$()) {
                this.set_state_a96kl8_k$(2);
                var tmp_0 = this.$shared_1.get_subscriptionCount_9h9j93_k$();
                suspendResult = first(tmp_0, launchSharing$slambda$slambda_0(null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(1);
                var tmp_1 = distinctUntilChanged(this.$started_1.command_gzzpfd_k$(this.$shared_1.get_subscriptionCount_9h9j93_k$()));
                suspendResult = collectLatest(tmp_1, launchSharing$slambda$slambda_2(this.$upstream_1, this.$shared_1, this.$initialValue_1, null), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

          case 1:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            suspendResult = this.$upstream_1.collect_llpwvh_k$(this.$shared_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(launchSharing$slambda).create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new launchSharing$slambda(this.$started_1, this.$upstream_1, this.$shared_1, this.$initialValue_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(launchSharing$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function launchSharing$slambda_0($started, $upstream, $shared, $initialValue, resultContinuation) {
    var i = new launchSharing$slambda($started, $upstream, $shared, $initialValue, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d6gbsu_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function map(_this__u8e3s4, transform) {
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_8(_this__u8e3s4, transform);
  }
  function filter(_this__u8e3s4, predicate) {
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_9(_this__u8e3s4, predicate);
  }
  function scan(_this__u8e3s4, initial, operation) {
    return runningFold(_this__u8e3s4, initial, operation);
  }
  function runningFold(_this__u8e3s4, initial, operation) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_10(initial, _this__u8e3s4, operation);
  }
  function filterNotNull(_this__u8e3s4) {
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_11(_this__u8e3s4);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_5(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_5).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function map$o$collect$slambda($collector, $transform, resultContinuation) {
    this.$collector_1 = $collector;
    this.$transform_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(map$o$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(map$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(map$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$transform_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.ARGUMENT0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(map$o$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new map$o$collect$slambda(this.$collector_1, this.$transform_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(map$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function map$o$collect$slambda_0($collector, $transform, resultContinuation) {
    var i = new map$o$collect$slambda($collector, $transform, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$27(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$27).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = map$o$collect$slambda_0(this.collector_1, this._this__u8e3s4__1.$transform_1, null);
            suspendResult = this._this__u8e3s4__1.$this_map_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_5(tmp_0), this);
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
  function _no_name_provided__qut3iv_8($this_map, $transform) {
    this.$this_map_1 = $this_map;
    this.$transform_1 = $transform;
  }
  protoOf(_no_name_provided__qut3iv_8).collect_aabnv5_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$27(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_8).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_aabnv5_k$(collector, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_6(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_6).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function filter$o$collect$slambda($predicate, $collector, resultContinuation) {
    this.$predicate_1 = $predicate;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(filter$o$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(filter$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(filter$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (suspendResult) {
              this.set_state_a96kl8_k$(4);
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

          case 3:
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 4:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(filter$o$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new filter$o$collect$slambda(this.$predicate_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(filter$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function filter$o$collect$slambda_0($predicate, $collector, resultContinuation) {
    var i = new filter$o$collect$slambda($predicate, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$28(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$28).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = filter$o$collect$slambda_0(this._this__u8e3s4__1.$predicate_1, this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$this_filter_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_6(tmp_0), this);
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
  function _no_name_provided__qut3iv_9($this_filter, $predicate) {
    this.$this_filter_1 = $this_filter;
    this.$predicate_1 = $predicate;
  }
  protoOf(_no_name_provided__qut3iv_9).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$28(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_7(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_7).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function runningFold$o$collect$slambda($accumulator, $operation, $collector, resultContinuation) {
    this.$accumulator_1 = $accumulator;
    this.$operation_1 = $operation;
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(runningFold$o$collect$slambda).invoke_tr8wvu_k$ = function (value, $completion) {
    var tmp = this.create_aq37ol_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(runningFold$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(runningFold$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            suspendResult = this.$operation_1(this.$accumulator_1._v, this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.$accumulator_1._v = this.ARGUMENT0__1;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$collector_1.emit_1fbrsb_k$(this.$accumulator_1._v, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(runningFold$o$collect$slambda).create_aq37ol_k$ = function (value, completion) {
    var i = new runningFold$o$collect$slambda(this.$accumulator_1, this.$operation_1, this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(runningFold$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function runningFold$o$collect$slambda_0($accumulator, $operation, $collector, resultContinuation) {
    var i = new runningFold$o$collect$slambda($accumulator, $operation, $collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_tr8wvu_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$29(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$29).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.accumulator0__1 = {_v: this._this__u8e3s4__1.$initial_1};
            this.set_state_a96kl8_k$(1);
            suspendResult = this.collector_1.emit_1fbrsb_k$(this.accumulator0__1._v, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            var tmp_0 = runningFold$o$collect$slambda_0(this.accumulator0__1, this._this__u8e3s4__1.$operation_1, this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$this_runningFold_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_7(tmp_0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_10($initial, $this_runningFold, $operation) {
    this.$initial_1 = $initial;
    this.$this_runningFold_1 = $this_runningFold;
    this.$operation_1 = $operation;
  }
  protoOf(_no_name_provided__qut3iv_10).collect_aabnv5_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$29(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_10).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_aabnv5_k$(collector, $completion);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_8(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_8).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function filterNotNull$o$collect$slambda($collector, resultContinuation) {
    this.$collector_1 = $collector;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(filterNotNull$o$collect$slambda).invoke_s90ht_k$ = function (value, $completion) {
    var tmp = this.create_4gojz6_k$(value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(filterNotNull$o$collect$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_s90ht_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(filterNotNull$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!(this.value_1 == null)) {
              this.set_state_a96kl8_k$(3);
              suspendResult = this.$collector_1.emit_1fbrsb_k$(this.value_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

          case 2:
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 3:
            this.tmp$ret$00__1 = suspendResult;
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(filterNotNull$o$collect$slambda).create_4gojz6_k$ = function (value, completion) {
    var i = new filterNotNull$o$collect$slambda(this.$collector_1, completion);
    i.value_1 = value;
    return i;
  };
  protoOf(filterNotNull$o$collect$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_4gojz6_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  function filterNotNull$o$collect$slambda_0($collector, resultContinuation) {
    var i = new filterNotNull$o$collect$slambda($collector, resultContinuation);
    var l = function (value, $completion) {
      return i.invoke_s90ht_k$(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$30(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$30).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = filterNotNull$o$collect$slambda_0(this.collector_1, null);
            suspendResult = this._this__u8e3s4__1.$this_filterNotNull_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_8(tmp_0), this);
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
  function _no_name_provided__qut3iv_11($this_filterNotNull) {
    this.$this_filterNotNull_1 = $this_filterNotNull;
  }
  protoOf(_no_name_provided__qut3iv_11).collect_llpwvh_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$30(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function combine(_this__u8e3s4, flow, transform) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_12(_this__u8e3s4, flow, transform);
  }
  function combine_0(flow, flow2, flow3, transform) {
    // Inline function 'kotlinx.coroutines.flow.combineUnsafe' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new _no_name_provided__qut3iv_13(flow, flow2, flow3, transform);
  }
  function nullArrayFactory() {
    return nullArrayFactory$lambda;
  }
  function combine_1(flow, flow2, transform) {
    return combine(flow, flow2, transform);
  }
  function combine$o$collect$slambda($transform, resultContinuation) {
    this.$transform_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$collect$slambda).invoke_mxytio_k$ = function ($this$combineInternal, it, $completion) {
    var tmp = this.create_k4q88j_k$($this$combineInternal, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(combine$o$collect$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_mxytio_k$(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$collect$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = this.it_1[0];
            var tmp_1 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp_2 = this.it_1[1];
            suspendResult = this.$transform_1(tmp_1, (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$combineInternal_1.emit_1fbrsb_k$(this.ARGUMENT0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(combine$o$collect$slambda).create_k4q88j_k$ = function ($this$combineInternal, it, completion) {
    var i = new combine$o$collect$slambda(this.$transform_1, completion);
    i.$this$combineInternal_1 = $this$combineInternal;
    i.it_1 = it;
    return i;
  };
  function combine$o$collect$slambda_0($transform, resultContinuation) {
    var i = new combine$o$collect$slambda($transform, resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.invoke_mxytio_k$($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$31(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$31).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = nullArrayFactory();
            suspendResult = combineInternal(this.collector_1, [this._this__u8e3s4__1.$this_combine_1, this._this__u8e3s4__1.$flow_1], tmp_0, combine$o$collect$slambda_0(this._this__u8e3s4__1.$transform_1, null), this);
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
  function _no_name_provided__qut3iv_12($this_combine, $flow, $transform) {
    this.$this_combine_1 = $this_combine;
    this.$flow_1 = $flow;
    this.$transform_1 = $transform;
  }
  protoOf(_no_name_provided__qut3iv_12).collect_aabnv5_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$31(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_12).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_aabnv5_k$(collector, $completion);
  };
  function combine$o$collect$slambda_1($transform, resultContinuation) {
    this.$transform_1 = $transform;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(combine$o$collect$slambda_1).invoke_mxytio_k$ = function ($this$combineInternal, it, $completion) {
    var tmp = this.create_k4q88j_k$($this$combineInternal, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(combine$o$collect$slambda_1).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE();
    return this.invoke_mxytio_k$(tmp, (!(p2 == null) ? isArray(p2) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(combine$o$collect$slambda_1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = this.it_1[0];
            var tmp_1 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
            var tmp_2 = this.it_1[1];
            var tmp_3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
            var tmp_4 = this.it_1[2];
            suspendResult = this.$transform_1(tmp_1, tmp_3, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ARGUMENT0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$combineInternal_1.emit_1fbrsb_k$(this.ARGUMENT0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(combine$o$collect$slambda_1).create_k4q88j_k$ = function ($this$combineInternal, it, completion) {
    var i = new combine$o$collect$slambda_1(this.$transform_1, completion);
    i.$this$combineInternal_1 = $this$combineInternal;
    i.it_1 = it;
    return i;
  };
  function combine$o$collect$slambda_2($transform, resultContinuation) {
    var i = new combine$o$collect$slambda_1($transform, resultContinuation);
    var l = function ($this$combineInternal, it, $completion) {
      return i.invoke_mxytio_k$($this$combineInternal, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $collectCOROUTINE$32(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.collector_1 = collector;
  }
  protoOf($collectCOROUTINE$32).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            var tmp_0 = nullArrayFactory();
            suspendResult = combineInternal(this.collector_1, [this._this__u8e3s4__1.$flow_1, this._this__u8e3s4__1.$flow2__1, this._this__u8e3s4__1.$flow3__1], tmp_0, combine$o$collect$slambda_2(this._this__u8e3s4__1.$transform_1, null), this);
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
  function _no_name_provided__qut3iv_13($flow, $flow2, $flow3, $transform) {
    this.$flow_1 = $flow;
    this.$flow2__1 = $flow2;
    this.$flow3__1 = $flow3;
    this.$transform_1 = $transform;
  }
  protoOf(_no_name_provided__qut3iv_13).collect_aabnv5_k$ = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$32(this, collector, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(_no_name_provided__qut3iv_13).collect_llpwvh_k$ = function (collector, $completion) {
    return this.collect_aabnv5_k$(collector, $completion);
  };
  function nullArrayFactory$lambda() {
    return null;
  }
  function collect(_this__u8e3s4, $completion) {
    return _this__u8e3s4.collect_llpwvh_k$(NopCollector_getInstance(), $completion);
  }
  function collectLatest(_this__u8e3s4, action, $completion) {
    return collect(buffer(mapLatest(_this__u8e3s4, action), 0), $completion);
  }
  function emitAll_0(_this__u8e3s4, flow, $completion) {
    ensureActive_1(_this__u8e3s4);
    return flow.collect_llpwvh_k$(_this__u8e3s4, $completion);
  }
  function first(_this__u8e3s4, predicate, $completion) {
    var tmp = new $firstCOROUTINE$33(_this__u8e3s4, predicate, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $emitCOROUTINE$34(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.value_1 = value;
  }
  protoOf($emitCOROUTINE$34).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.$predicate_1(this.value_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this._this__u8e3s4__1.$result_1._v = this.value_1;
              tmp_0.WHEN_RESULT0__1 = false;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.WHEN_RESULT0__1 = true;
              this.set_state_a96kl8_k$(2);
              continue $sm;
            }

          case 2:
            var ARGUMENT = this.WHEN_RESULT0__1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this._this__u8e3s4__1);
            } else {
              this.set_state_a96kl8_k$(3);
              continue $sm;
            }

          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function _no_name_provided__qut3iv_14($predicate, $result) {
    this.$predicate_1 = $predicate;
    this.$result_1 = $result;
  }
  protoOf(_no_name_provided__qut3iv_14).emit_1fbrsb_k$ = function (value, $completion) {
    var tmp = new $emitCOROUTINE$34(this, value, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  function $firstCOROUTINE$33(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.predicate_1 = predicate;
  }
  protoOf($firstCOROUTINE$33).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.result0__1 = {_v: get_NULL()};
            var tmp_0 = this;
            tmp_0.collector1__1 = new _no_name_provided__qut3iv_14(this.predicate_1, this.result0__1);
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.collect_llpwvh_k$(this.collector1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.get_exception_x0n6w6_k$();
              checkOwnership(e, this.collector1__1);
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            if (this.result0__1._v === get_NULL())
              throw NoSuchElementException_init_$Create$('Expected at least one element matching the predicate ' + this.predicate_1);
            var tmp_2 = this.result0__1._v;
            return (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e_0);
        }
      }
     while (true);
  };
  function _set_elements__x18af4($this, _set____db54di) {
    $this.elements_1 = _set____db54di;
  }
  function _get_elements__k8byyc($this) {
    return $this.elements_1;
  }
  function _set_head__9nromv_0($this, _set____db54di) {
    $this.head_1 = _set____db54di;
  }
  function _get_head__d7jo8b_1($this) {
    return $this.head_1;
  }
  function _set_tail__9uatxj($this, _set____db54di) {
    $this.tail_1 = _set____db54di;
  }
  function _get_tail__de2tiz($this) {
    return $this.tail_1;
  }
  function ensureCapacity_0($this) {
    var currentSize = $this.elements_1.length;
    var newCapacity = currentSize << 1;
    // Inline function 'kotlin.arrayOfNulls' call
    var newElements = fillArrayVal(Array(newCapacity), null);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.elements_1;
    var tmp1_copyInto = $this.head_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.elements_1;
    var tmp4_copyInto = $this.elements_1.length - $this.head_1 | 0;
    var tmp5_copyInto = $this.head_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    $this.elements_1 = newElements;
    $this.head_1 = 0;
    $this.tail_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.elements_1 = fillArrayVal(Array(16), null);
    this.head_1 = 0;
    this.tail_1 = 0;
  }
  protoOf(ArrayQueue).get_isEmpty_zauvru_k$ = function () {
    return this.head_1 === this.tail_1;
  };
  protoOf(ArrayQueue).addLast_xhfl3v_k$ = function (element) {
    this.elements_1[this.tail_1] = element;
    this.tail_1 = (this.tail_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    if (this.tail_1 === this.head_1) {
      ensureCapacity_0(this);
    }
  };
  protoOf(ArrayQueue).removeFirstOrNull_eges3a_k$ = function () {
    if (this.head_1 === this.tail_1)
      return null;
    var element = this.elements_1[this.head_1];
    this.elements_1[this.head_1] = null;
    this.head_1 = (this.head_1 + 1 | 0) & (this.elements_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  protoOf(ArrayQueue).clear_j9y8zo_k$ = function () {
    this.head_1 = 0;
    this.tail_1 = 0;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.elements_1.length;
    tmp.elements_1 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
  };
  function get_NO_DECISION() {
    _init_properties_Atomic_kt__5uvtv9();
    return NO_DECISION;
  }
  var NO_DECISION;
  function get_RETRY_ATOMIC() {
    _init_properties_Atomic_kt__5uvtv9();
    return RETRY_ATOMIC;
  }
  var RETRY_ATOMIC;
  function OpDescriptor() {
  }
  protoOf(OpDescriptor).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  protoOf(OpDescriptor).isEarlierThan_b5adjh_k$ = function (that) {
    var tmp0_elvis_lhs = this.get_atomicOp_p2pkuj_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var thisOp = tmp;
    var tmp1_elvis_lhs = that.get_atomicOp_p2pkuj_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var thatOp = tmp_0;
    return thisOp.get_opSequence_bttwhh_k$().compareTo_n4fqi2_k$(thatOp.get_opSequence_bttwhh_k$()) < 0;
  };
  function _get__consensus__nhzvjh($this) {
    return $this._consensus_1;
  }
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_1 = atomic$ref$1(get_NO_DECISION());
  }
  protoOf(AtomicOp).get_consensus_1b3g0e_k$ = function () {
    return this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicOp).get_isDecided_ofk0qx_k$ = function () {
    return !(this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$() === get_NO_DECISION());
  };
  protoOf(AtomicOp).get_opSequence_bttwhh_k$ = function () {
    return new Long(0, 0);
  };
  protoOf(AtomicOp).get_atomicOp_p2pkuj_k$ = function () {
    return this;
  };
  protoOf(AtomicOp).decide_ydi1rd_k$ = function (decision) {
    // Inline function 'kotlinx.coroutines.assert' call
    var current = this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (!(current === get_NO_DECISION()))
      return current;
    if (this._consensus_1.atomicfu$compareAndSet(get_NO_DECISION(), decision))
      return decision;
    return this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
  };
  protoOf(AtomicOp).perform_8emi3i_k$ = function (affected) {
    var decision = this._consensus_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    if (decision === get_NO_DECISION()) {
      decision = this.decide_ydi1rd_k$(this.prepare_gq68ys_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE()));
    }
    this.complete_fye4ce_k$((affected == null ? true : isObject(affected)) ? affected : THROW_CCE(), decision);
    return decision;
  };
  function AtomicDesc() {
  }
  protoOf(AtomicDesc).set_atomicOp_7j6ry0_k$ = function (_set____db54di) {
    this.atomicOp_1 = _set____db54di;
  };
  protoOf(AtomicDesc).get_atomicOp_p2pkuj_k$ = function () {
    var tmp = this.atomicOp_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('atomicOp');
    }
  };
  var properties_initialized_Atomic_kt_vn225v;
  function _init_properties_Atomic_kt__5uvtv9() {
    if (!properties_initialized_Atomic_kt_vn225v) {
      properties_initialized_Atomic_kt_vn225v = true;
      NO_DECISION = new Symbol('NO_DECISION');
      RETRY_ATOMIC = new Symbol('RETRY_ATOMIC');
    }
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
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
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (_this__u8e3s4.dispatcher_1.isDispatchNeeded_fmz9vn_k$(_this__u8e3s4.get_context_h02k06_k$())) {
        _this__u8e3s4._state_1 = state;
        _this__u8e3s4.set_resumeMode_b1d3vh_k$(get_MODE_CANCELLABLE());
        _this__u8e3s4.dispatcher_1.dispatch_o98ux7_k$(_this__u8e3s4.get_context_h02k06_k$(), _this__u8e3s4);
        tmp_0 = Unit_getInstance();
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
          if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
            _this__u8e3s4._state_1 = state;
            _this__u8e3s4.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
            eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.incrementUseCount_ocukpa_k$(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
                if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
                  var cause = job.getCancellationException_8i1q6u_k$();
                  _this__u8e3s4.cancelCompletedResult_tweln2_k$(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  Companion_getInstance();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$1);
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.continuation_1;
                _this__u8e3s4.countOrElement_1;
                _this__u8e3s4.continuation_1.resumeWith_s3a3yh_k$(result);
              }
              $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.decrementUseCount_saho26_k$(true);
            }
            tmp_1 = false;
          }
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.resumeWith_s3a3yh_k$(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function _get__reusableCancellableContinuation__ic28e($this) {
    return $this._reusableCancellableContinuation_1;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this._reusableCancellableContinuation_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.dispatcher_1 = dispatcher;
    this.continuation_1 = continuation;
    this._state_1 = get_UNDEFINED();
    this.countOrElement_1 = threadContextElements(this.get_context_h02k06_k$());
    this._reusableCancellableContinuation_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).get_dispatcher_usy1bk_k$ = function () {
    return this.dispatcher_1;
  };
  protoOf(DispatchedContinuation).get_continuation_7yron4_k$ = function () {
    return this.continuation_1;
  };
  protoOf(DispatchedContinuation).get_context_h02k06_k$ = function () {
    return this.continuation_1.get_context_h02k06_k$();
  };
  protoOf(DispatchedContinuation).set__state_9u8p4v_k$ = function (_set____db54di) {
    this._state_1 = _set____db54di;
  };
  protoOf(DispatchedContinuation).get__state_a6aoij_k$ = function () {
    return this._state_1;
  };
  protoOf(DispatchedContinuation).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.continuation_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(DispatchedContinuation).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(DispatchedContinuation).get_countOrElement_ut92s3_k$ = function () {
    return this.countOrElement_1;
  };
  protoOf(DispatchedContinuation).isReusable_hrfetn_k$ = function () {
    return !(this._reusableCancellableContinuation_1.get_kotlinx$atomicfu$value_vi2am5_k$() == null);
  };
  protoOf(DispatchedContinuation).awaitReusability_itz0u_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      if (!(tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$() === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  protoOf(DispatchedContinuation).release_wtm6d2_k$ = function () {
    this.awaitReusability_itz0u_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_qdtbew_k$();
    }
  };
  protoOf(DispatchedContinuation).claimReusableCancellableContinuation_oatv30_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1_anonymous === null) {
        this._reusableCancellableContinuation_1.set_kotlinx$atomicfu$value_koguff_k$(get_REUSABLE_CLAIMED());
        return null;
      } else {
        if (tmp1_anonymous instanceof CancellableContinuationImpl) {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1_anonymous, get_REUSABLE_CLAIMED())) {
            return tmp1_anonymous instanceof CancellableContinuationImpl ? tmp1_anonymous : THROW_CCE();
          }
        } else {
          if (tmp1_anonymous !== get_REUSABLE_CLAIMED()) {
            if (!(tmp1_anonymous instanceof Error)) {
              var tmp0_error = 'Inconsistent state ' + toString(tmp1_anonymous);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).tryReleaseClaimedContinuation_5s4a1c_k$ = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1_anonymous === get_REUSABLE_CLAIMED()) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1_anonymous instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1_anonymous, null)) {
            // Inline function 'kotlin.require.<anonymous>' call
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1_anonymous;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1_anonymous);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).postponeCancellation_723ard_k$ = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._reusableCancellableContinuation_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (equals(tmp1_anonymous, get_REUSABLE_CLAIMED())) {
        if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp1_anonymous instanceof Error)
          return true;
        else {
          if (this._reusableCancellableContinuation_1.atomicfu$compareAndSet(tmp1_anonymous, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).takeState_olvzuy_k$ = function () {
    var state = this._state_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this._state_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).get_delegate_i94tki_k$ = function () {
    return this;
  };
  protoOf(DispatchedContinuation).resumeWith_s3a3yh_k$ = function (result) {
    var context = this.continuation_1.get_context_h02k06_k$();
    var state = toState_0(result);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(context)) {
      this._state_1 = state;
      this.set_resumeMode_b1d3vh_k$(get_MODE_ATOMIC());
      this.dispatcher_1.dispatch_o98ux7_k$(context, this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
        if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
          eventLoop.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_ocukpa_k$(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.get_context_h02k06_k$();
            this.countOrElement_1;
            this.continuation_1.resumeWith_s3a3yh_k$(result);
            $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.handleFatalException_56zdfo_k$(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_saho26_k$(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).resumeCancellableWith_tuk66b_k$ = function (result, onCancellation) {
    var state = toState_0(result, onCancellation);
    if (this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this.get_context_h02k06_k$())) {
      this._state_1 = state;
      this.set_resumeMode_b1d3vh_k$(get_MODE_CANCELLABLE());
      this.dispatcher_1.dispatch_o98ux7_k$(this.get_context_h02k06_k$(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
        if (false ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
          this._state_1 = state;
          this.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
          eventLoop.dispatchUnconfined_do6j6f_k$(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.incrementUseCount_ocukpa_k$(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
            var tmp$ret$3;
            $l$block_0: {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
              var job = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
              if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
                var cause = job.getCancellationException_8i1q6u_k$();
                this.cancelCompletedResult_tweln2_k$(state, cause);
                // Inline function 'kotlin.coroutines.resumeWithException' call
                var tmp$ret$1;
                // Inline function 'kotlin.Companion.failure' call
                Companion_getInstance();
                tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                this.resumeWith_s3a3yh_k$(tmp$ret$1);
                tmp$ret$3 = true;
                break $l$block_0;
              }
              tmp$ret$3 = false;
            }
            if (!tmp$ret$3) {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
              // Inline function 'kotlinx.coroutines.withContinuationContext' call
              this.continuation_1;
              this.countOrElement_1;
              this.continuation_1.resumeWith_s3a3yh_k$(result);
            }
            $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.handleFatalException_56zdfo_k$(e, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.decrementUseCount_saho26_k$(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.get_onCancellation_no7t6d_k$()(cause);
    }
  };
  protoOf(DispatchedContinuation).resumeCancelled_vc1wm3_k$ = function (state) {
    var job = this.get_context_h02k06_k$().get_j1ktw6_k$(Key_getInstance_3());
    if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
      var cause = job.getCancellationException_8i1q6u_k$();
      this.cancelCompletedResult_tweln2_k$(state, cause);
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this.resumeWith_s3a3yh_k$(tmp$ret$0);
      return true;
    }
    return false;
  };
  protoOf(DispatchedContinuation).resumeUndispatchedWith_xz834r_k$ = function (result) {
    // Inline function 'kotlinx.coroutines.withContinuationContext' call
    this.continuation_1;
    this.countOrElement_1;
    this.continuation_1.resumeWith_s3a3yh_k$(result);
  };
  protoOf(DispatchedContinuation).dispatchYield_r38es3_k$ = function (context, value) {
    this._state_1 = value;
    this.set_resumeMode_b1d3vh_k$(get_MODE_CANCELLABLE());
    this.dispatcher_1.dispatchYield_ww21f6_k$(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher_1 + ', ' + toDebugString(this.continuation_1) + ']';
  };
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    doYield = doYield === VOID ? false : doYield;
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    // Inline function 'kotlinx.coroutines.assert' call
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
    if (doYield ? eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$() : false)
      return false;
    var tmp;
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      _this__u8e3s4._state_1 = contState;
      _this__u8e3s4.set_resumeMode_b1d3vh_k$(mode);
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
      tmp = true;
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_ocukpa_k$(true);
      try {
        block();
        $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_saho26_k$(true);
      }
      tmp = false;
    }
    return tmp;
  }
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
      if (eventLoop.get_isUnconfinedQueueEmpty_mi405s_k$()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
        _this__u8e3s4._state_1 = Unit_getInstance();
        _this__u8e3s4.set_resumeMode_b1d3vh_k$(tmp0_executeUnconfined);
        eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.incrementUseCount_ocukpa_k$(true);
        try {
          // Inline function 'kotlinx.coroutines.internal.yieldUndispatched.<anonymous>' call
          _this__u8e3s4.run_mw4iiu_k$();
          $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.decrementUseCount_saho26_k$(true);
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
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.resumeMode_1 = resumeMode;
  }
  protoOf(DispatchedTask).set_resumeMode_b1d3vh_k$ = function (_set____db54di) {
    this.resumeMode_1 = _set____db54di;
  };
  protoOf(DispatchedTask).get_resumeMode_te1i4n_k$ = function () {
    return this.resumeMode_1;
  };
  protoOf(DispatchedTask).cancelCompletedResult_tweln2_k$ = function (takenState, cause) {
  };
  protoOf(DispatchedTask).getSuccessfulResult_t876z0_k$ = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  protoOf(DispatchedTask).getExceptionalResult_bnge6_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_cause_iplhs0_k$();
  };
  protoOf(DispatchedTask).run_mw4iiu_k$ = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.get_delegate_i94tki_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.get_continuation_7yron4_k$();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.get_countOrElement_ut92s3_k$();
      var context = continuation.get_context_h02k06_k$();
      var state = this.takeState_olvzuy_k$();
      var exception = this.getExceptionalResult_bnge6_k$(state);
      var job = (exception == null ? get_isCancellableMode(this.resumeMode_1) : false) ? context.get_j1ktw6_k$(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.get_isActive_quafmh_k$() : false) {
        var cause = job.getCancellationException_8i1q6u_k$();
        this.cancelCompletedResult_tweln2_k$(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.resumeWith_s3a3yh_k$(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.resumeWith_s3a3yh_k$(tmp$ret$1);
          tmp_1 = Unit_getInstance();
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          var tmp0_resume = this.getSuccessfulResult_t876z0_k$(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          Companion_getInstance();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
          continuation.resumeWith_s3a3yh_k$(tmp$ret$3);
          tmp_1 = Unit_getInstance();
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
        Companion_getInstance();
        tmp_2 = _Result___init__impl__xyqfz8(Unit_getInstance());
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp_3 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      var result = tmp_2;
      this.handleFatalException_56zdfo_k$(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  protoOf(DispatchedTask).handleFatalException_56zdfo_k$ = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var cause = exception == null ? finallyException : exception;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.get_delegate_i94tki_k$().get_context_h02k06_k$(), reason);
  };
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.get_delegate_i94tki_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.resumeMode_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.get_dispatcher_usy1bk_k$();
      var context = delegate.get_context_h02k06_k$();
      if (dispatcher.isDispatchNeeded_fmz9vn_k$(context)) {
        dispatcher.dispatch_o98ux7_k$(context, _this__u8e3s4);
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
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.incrementUseCount_ocukpa_k$(true);
    try {
      block();
      $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.decrementUseCount_saho26_k$(true);
    }
  }
  function resumeWithStackTrace(_this__u8e3s4, exception) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    var tmp1_failure = recoverStackTrace(exception, _this__u8e3s4);
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
    _this__u8e3s4.resumeWith_s3a3yh_k$(tmp$ret$0);
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().get_eventLoop_913645_k$();
    if (eventLoop.get_isUnconfinedLoopActive_g78ri6_k$()) {
      eventLoop.dispatchUnconfined_do6j6f_k$(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.incrementUseCount_ocukpa_k$(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.get_delegate_i94tki_k$(), true);
        $l$loop: while (eventLoop.processUnconfinedEvent_mypjl6_k$()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.handleFatalException_56zdfo_k$(e, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.decrementUseCount_saho26_k$(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.takeState_olvzuy_k$();
    var exception = _this__u8e3s4.getExceptionalResult_bnge6_k$(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      Companion_getInstance();
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      var tmp2_success = _this__u8e3s4.getSuccessfulResult_t876z0_k$(state);
      tmp = _Result___init__impl__xyqfz8(tmp2_success);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      tmp3_resumeUndispatchedWith.get_continuation_7yron4_k$();
      tmp3_resumeUndispatchedWith.get_countOrElement_ut92s3_k$();
      tmp3_resumeUndispatchedWith.get_continuation_7yron4_k$().resumeWith_s3a3yh_k$(result);
    } else {
      delegate.resumeWith_s3a3yh_k$(result);
    }
  }
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
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).add_1j60pz_k$(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.add_1j60pz_k$((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.add_1j60pz_k$(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = _get_holder__f6h5pd($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__f6h5pd($this);
        action((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = _get_holder__f6h5pd($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.get_size_woubt6_k$() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.get_fkrdnv_k$(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.holder_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    this.holder_1 = holder;
  }
  protoOf(InlineList).toString = function () {
    return InlineList__toString_impl_1aej86(this.holder_1);
  };
  protoOf(InlineList).hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.holder_1);
  };
  protoOf(InlineList).equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.holder_1, other);
  };
  function checkParallelism(_this__u8e3s4) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!(_this__u8e3s4 >= 1)) {
      // Inline function 'kotlinx.coroutines.internal.checkParallelism.<anonymous>' call
      var message = 'Expected positive parallelism level, but got ' + _this__u8e3s4;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    return tmp;
  }
  function _get_dispatcher__dketks($this) {
    return $this.dispatcher_1;
  }
  function _get_parallelism__25q2h7($this) {
    return $this.parallelism_1;
  }
  function _set_runningWorkers__ctf6jl($this, _set____db54di) {
    $this.runningWorkers_1 = _set____db54di;
  }
  function _get_runningWorkers__wolfe3($this) {
    return $this.runningWorkers_1;
  }
  function _get_queue__c6g84g($this) {
    return $this.queue_1;
  }
  function _get_workerAllocationLock__l5417m($this) {
    return $this.workerAllocationLock_1;
  }
  function dispatchInternal($this, block, dispatch) {
    if (addAndTryDispatching($this, block))
      return Unit_getInstance();
    if (!tryAllocateWorker($this))
      return Unit_getInstance();
    dispatch();
  }
  function tryAllocateWorker($this) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    $this.workerAllocationLock_1;
    if ($this.runningWorkers_1 >= $this.parallelism_1)
      return false;
    $this.runningWorkers_1 = $this.runningWorkers_1 + 1 | 0;
    return true;
  }
  function addAndTryDispatching($this, block) {
    $this.queue_1.addLast_3l8aar_k$(block);
    return $this.runningWorkers_1 >= $this.parallelism_1;
  }
  function LimitedDispatcher(dispatcher, parallelism) {
    CoroutineDispatcher.call(this);
    this.dispatcher_1 = dispatcher;
    this.parallelism_1 = parallelism;
    var tmp = this;
    var tmp0_elvis_lhs = isInterface(dispatcher, Delay) ? dispatcher : null;
    tmp.$$delegate_0__1 = tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
    this.runningWorkers_1 = 0;
    this.queue_1 = new LockFreeTaskQueue(false);
    this.workerAllocationLock_1 = new Object();
  }
  protoOf(LimitedDispatcher).delay_sw4t2e_k$ = function (time, $completion) {
    return this.$$delegate_0__1.delay_sw4t2e_k$(time, $completion);
  };
  protoOf(LimitedDispatcher).invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    return this.$$delegate_0__1.invokeOnTimeout_sx2bqq_k$(timeMillis, block, context);
  };
  protoOf(LimitedDispatcher).scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    this.$$delegate_0__1.scheduleResumeAfterDelay_5x4w1l_k$(timeMillis, continuation);
  };
  protoOf(LimitedDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    if (parallelism >= this.parallelism_1)
      return this;
    return protoOf(CoroutineDispatcher).limitedParallelism_glrman_k$.call(this, parallelism);
  };
  protoOf(LimitedDispatcher).run_mw4iiu_k$ = function () {
    var fairnessCounter = 0;
    $l$loop: while (true) {
      var task = this.queue_1.removeFirstOrNull_eges3a_k$();
      if (!(task == null)) {
        try {
          task.run_mw4iiu_k$();
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            handleCoroutineException(EmptyCoroutineContext_getInstance(), e);
          } else {
            throw $p;
          }
        }
        var tmp;
        fairnessCounter = fairnessCounter + 1 | 0;
        if (fairnessCounter >= 16) {
          tmp = this.dispatcher_1.isDispatchNeeded_fmz9vn_k$(this);
        } else {
          tmp = false;
        }
        if (tmp) {
          this.dispatcher_1.dispatch_o98ux7_k$(this, this);
          return Unit_getInstance();
        }
        continue $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      this.workerAllocationLock_1;
      this.runningWorkers_1 = this.runningWorkers_1 - 1 | 0;
      if (this.queue_1.get_size_woubt6_k$() === 0)
        return Unit_getInstance();
      this.runningWorkers_1 = this.runningWorkers_1 + 1 | 0;
      fairnessCounter = 0;
    }
  };
  protoOf(LimitedDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      if (addAndTryDispatching(this, block)) {
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        break $l$block_0;
      }
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatch.<anonymous>' call
      this.dispatcher_1.dispatch_o98ux7_k$(this, this);
    }
  };
  protoOf(LimitedDispatcher).dispatchYield_ww21f6_k$ = function (context, block) {
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchInternal' call
      if (addAndTryDispatching(this, block)) {
        break $l$block_0;
      }
      if (!tryAllocateWorker(this)) {
        break $l$block_0;
      }
      // Inline function 'kotlinx.coroutines.internal.LimitedDispatcher.dispatchYield.<anonymous>' call
      this.dispatcher_1.dispatchYield_ww21f6_k$(this, this);
    }
  };
  function get_REMOVE_PREPARED() {
    _init_properties_LockFreeLinkedList_common_kt__j1bptz();
    return REMOVE_PREPARED;
  }
  var REMOVE_PREPARED;
  var properties_initialized_LockFreeLinkedList_common_kt_b0cmf9;
  function _init_properties_LockFreeLinkedList_common_kt__j1bptz() {
    if (!properties_initialized_LockFreeLinkedList_common_kt_b0cmf9) {
      properties_initialized_LockFreeLinkedList_common_kt_b0cmf9 = true;
      REMOVE_PREPARED = new Symbol('REMOVE_PREPARED');
    }
  }
  function _get__cur__d2ko2y($this) {
    return $this._cur_1;
  }
  function LockFreeTaskQueue(singleConsumer) {
    var tmp = this;
    Companion_getInstance_3();
    tmp._cur_1 = atomic$ref$1(new LockFreeTaskQueueCore(8, singleConsumer));
  }
  protoOf(LockFreeTaskQueue).get_isEmpty_zauvru_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_isEmpty_zauvru_k$();
  };
  protoOf(LockFreeTaskQueue).get_size_woubt6_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().get_size_woubt6_k$();
  };
  protoOf(LockFreeTaskQueue).close_ymq55z_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.close.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1_anonymous.close_1keygo_k$())
        return Unit_getInstance();
      this._cur_1.atomicfu$compareAndSet(tmp1_anonymous, tmp1_anonymous.next_20eer_k$());
    }
  };
  protoOf(LockFreeTaskQueue).addLast_3l8aar_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.addLast.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp0_subject = tmp1_anonymous.addLast_3l8aar_k$(element);
      Companion_getInstance_3();
      if (tmp0_subject === 0)
        return true;
      else {
        Companion_getInstance_3();
        if (tmp0_subject === 2)
          return false;
        else {
          Companion_getInstance_3();
          if (tmp0_subject === 1) {
            this._cur_1.atomicfu$compareAndSet(tmp1_anonymous, tmp1_anonymous.next_20eer_k$());
          }
        }
      }
    }
  };
  protoOf(LockFreeTaskQueue).removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._cur_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueue.removeFirstOrNull.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      var result = tmp1_anonymous.removeFirstOrNull_eges3a_k$();
      if (!(result === Companion_getInstance_3().REMOVE_FROZEN_1)) {
        return (result == null ? true : isObject(result)) ? result : THROW_CCE();
      }
      this._cur_1.atomicfu$compareAndSet(tmp1_anonymous, tmp1_anonymous.next_20eer_k$());
    }
  };
  protoOf(LockFreeTaskQueue).map_o73y3q_k$ = function (transform) {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().map_o73y3q_k$(transform);
  };
  protoOf(LockFreeTaskQueue).isClosed_baxhhm_k$ = function () {
    return this._cur_1.get_kotlinx$atomicfu$value_vi2am5_k$().isClosed_baxhhm_k$();
  };
  function _get_capacity__a9k9f3_0($this) {
    return $this.capacity_1;
  }
  function _get_singleConsumer__485sb7($this) {
    return $this.singleConsumer_1;
  }
  function _get_mask__da8grj($this) {
    return $this.mask_1;
  }
  function _get__next__kt3wsh($this) {
    return $this._next_1;
  }
  function _get__state__37adl3_3($this) {
    return $this._state_1;
  }
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function fillPlaceholder($this, index, element) {
    var old = $this.array_1.atomicfu$get(index & $this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (old instanceof Placeholder) {
      tmp = old.index_1 === index;
    } else {
      tmp = false;
    }
    if (tmp) {
      $this.array_1.atomicfu$get(index & $this.mask_1).set_kotlinx$atomicfu$value_koguff_k$(element);
      return $this;
    }
    return null;
  }
  function removeSlowPath($this, oldHead, newHead) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.removeSlowPath.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
      Companion_getInstance_3();
      var head = tmp1_anonymous.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
      var tail = tmp1_anonymous.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
      // Inline function 'kotlinx.coroutines.assert' call
      Companion_getInstance_3();
      if (!tmp1_anonymous.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0))) {
        return $this.next_20eer_k$();
      }
      var tmp;
      if ($this._state_1.atomicfu$compareAndSet(tmp1_anonymous, Companion_getInstance_3().updateHead_eajy5c_k$(tmp1_anonymous, newHead))) {
        $this.array_1.atomicfu$get(head & $this.mask_1).set_kotlinx$atomicfu$value_koguff_k$(null);
        return null;
      }
    }
  }
  function markFrozen($this) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var tmp0_updateAndGet = $this._state_1;
      while (true) {
        var cur = tmp0_updateAndGet.get_kotlinx$atomicfu$value_vi2am5_k$();
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.markFrozen.<anonymous>' call
        Companion_getInstance_3();
        if (!cur.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return cur;
        Companion_getInstance_3();
        var upd = cur.or_s401rn_k$(new Long(0, 268435456));
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1;
  }
  function allocateOrGetNextCopy($this, state) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this._next_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.allocateOrGetNextCopy.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (!(tmp1_anonymous == null))
        return tmp1_anonymous;
      $this._next_1.atomicfu$compareAndSet(null, allocateNextCopy($this, state));
    }
  }
  function allocateNextCopy($this, state) {
    var next = new LockFreeTaskQueueCore(imul($this.capacity_1, 2), $this.singleConsumer_1);
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    Companion_getInstance_3();
    var head = state.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = state.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & $this.mask_1) === (tail & $this.mask_1))) {
      var tmp0_elvis_lhs = $this.array_1.atomicfu$get(index & $this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
      var value = tmp0_elvis_lhs == null ? new Placeholder(index) : tmp0_elvis_lhs;
      next.array_1.atomicfu$get(index & next.mask_1).set_kotlinx$atomicfu$value_koguff_k$(value);
      index = index + 1 | 0;
    }
    var tmp = Companion_getInstance_3();
    Companion_getInstance_3();
    next._state_1.set_kotlinx$atomicfu$value_sbfhx2_k$(tmp.wo_iscla2_k$(state, new Long(0, 268435456)));
    return next;
  }
  function Placeholder(index) {
    this.index_1 = index;
  }
  protoOf(Placeholder).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.INITIAL_CAPACITY_1 = 8;
    this.CAPACITY_BITS_1 = 30;
    this.MAX_CAPACITY_MASK_1 = 1073741823;
    this.HEAD_SHIFT_1 = 0;
    this.HEAD_MASK_1 = new Long(1073741823, 0);
    this.TAIL_SHIFT_1 = 30;
    this.TAIL_MASK_1 = new Long(-1073741824, 268435455);
    this.FROZEN_SHIFT_1 = 60;
    this.FROZEN_MASK_1 = new Long(0, 268435456);
    this.CLOSED_SHIFT_1 = 61;
    this.CLOSED_MASK_1 = new Long(0, 536870912);
    this.MIN_ADD_SPIN_CAPACITY_1 = 1024;
    this.REMOVE_FROZEN_1 = new Symbol('REMOVE_FROZEN');
    this.ADD_SUCCESS_1 = 0;
    this.ADD_FROZEN_1 = 1;
    this.ADD_CLOSED_1 = 2;
  }
  protoOf(Companion_1).get_INITIAL_CAPACITY_tvo5ku_k$ = function () {
    return this.INITIAL_CAPACITY_1;
  };
  protoOf(Companion_1).get_CAPACITY_BITS_m7bade_k$ = function () {
    return this.CAPACITY_BITS_1;
  };
  protoOf(Companion_1).get_MAX_CAPACITY_MASK_bnmlt9_k$ = function () {
    return this.MAX_CAPACITY_MASK_1;
  };
  protoOf(Companion_1).get_HEAD_SHIFT_ww01xo_k$ = function () {
    return this.HEAD_SHIFT_1;
  };
  protoOf(Companion_1).get_HEAD_MASK_jkay7y_k$ = function () {
    return this.HEAD_MASK_1;
  };
  protoOf(Companion_1).get_TAIL_SHIFT_z9ya0s_k$ = function () {
    return this.TAIL_SHIFT_1;
  };
  protoOf(Companion_1).get_TAIL_MASK_h71l4e_k$ = function () {
    return this.TAIL_MASK_1;
  };
  protoOf(Companion_1).get_FROZEN_SHIFT_9ve6oc_k$ = function () {
    return this.FROZEN_SHIFT_1;
  };
  protoOf(Companion_1).get_FROZEN_MASK_gcrlj6_k$ = function () {
    return this.FROZEN_MASK_1;
  };
  protoOf(Companion_1).get_CLOSED_SHIFT_v5gopk_k$ = function () {
    return this.CLOSED_SHIFT_1;
  };
  protoOf(Companion_1).get_CLOSED_MASK_agddhm_k$ = function () {
    return this.CLOSED_MASK_1;
  };
  protoOf(Companion_1).get_MIN_ADD_SPIN_CAPACITY_z2m7z7_k$ = function () {
    return this.MIN_ADD_SPIN_CAPACITY_1;
  };
  protoOf(Companion_1).get_REMOVE_FROZEN_w56qum_k$ = function () {
    return this.REMOVE_FROZEN_1;
  };
  protoOf(Companion_1).get_ADD_SUCCESS_vnro04_k$ = function () {
    return this.ADD_SUCCESS_1;
  };
  protoOf(Companion_1).get_ADD_FROZEN_bsr1ax_k$ = function () {
    return this.ADD_FROZEN_1;
  };
  protoOf(Companion_1).get_ADD_CLOSED_db6t8t_k$ = function () {
    return this.ADD_CLOSED_1;
  };
  protoOf(Companion_1).wo_iscla2_k$ = function (_this__u8e3s4, other) {
    return _this__u8e3s4.and_jhajnj_k$(other.inv_28kx_k$());
  };
  protoOf(Companion_1).updateHead_eajy5c_k$ = function (_this__u8e3s4, newHead) {
    return this.wo_iscla2_k$(_this__u8e3s4, new Long(1073741823, 0)).or_s401rn_k$(toLong(newHead).shl_po5ip6_k$(0));
  };
  protoOf(Companion_1).updateTail_fwivqo_k$ = function (_this__u8e3s4, newTail) {
    return this.wo_iscla2_k$(_this__u8e3s4, new Long(-1073741824, 268435455)).or_s401rn_k$(toLong(newTail).shl_po5ip6_k$(30));
  };
  protoOf(Companion_1).withState_mwp87b_k$ = function (_this__u8e3s4, block) {
    var head = _this__u8e3s4.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = _this__u8e3s4.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    return block(head, tail);
  };
  protoOf(Companion_1).addFailReason_gc2gzp_k$ = function (_this__u8e3s4) {
    return !_this__u8e3s4.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)) ? 2 : 1;
  };
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function LockFreeTaskQueueCore(capacity, singleConsumer) {
    Companion_getInstance_3();
    this.capacity_1 = capacity;
    this.singleConsumer_1 = singleConsumer;
    this.mask_1 = this.capacity_1 - 1 | 0;
    this._next_1 = atomic$ref$1(null);
    this._state_1 = atomic$long$1(new Long(0, 0));
    this.array_1 = atomicfu$AtomicRefArray$ofNulls(this.capacity_1);
    // Inline function 'kotlin.check' call
    Companion_getInstance_3();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.mask_1 <= 1073741823)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((this.capacity_1 & this.mask_1) === 0)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message_0 = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
  }
  protoOf(LockFreeTaskQueueCore).get_isEmpty_zauvru_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    Companion_getInstance_3();
    var tmp1_withState = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.<get-isEmpty>.<anonymous>' call
    return head === tail;
  };
  protoOf(LockFreeTaskQueueCore).get_size_woubt6_k$ = function () {
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    Companion_getInstance_3();
    var tmp1_withState = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.<get-size>.<anonymous>' call
    var tmp = tail - head | 0;
    Companion_getInstance_3();
    return tmp & 1073741823;
  };
  protoOf(LockFreeTaskQueueCore).close_1keygo_k$ = function () {
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this._state_1;
      while (true) {
        var cur = tmp0_update.get_kotlinx$atomicfu$value_vi2am5_k$();
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.close.<anonymous>' call
        Companion_getInstance_3();
        if (!cur.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0)))
          return true;
        Companion_getInstance_3();
        if (!cur.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return false;
        Companion_getInstance_3();
        var upd = cur.or_s401rn_k$(new Long(0, 536870912));
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    return true;
  };
  protoOf(LockFreeTaskQueueCore).addLast_3l8aar_k$ = function (element) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.addLast.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        Companion_getInstance_3();
        var tmp = new Long(0, 268435456);
        Companion_getInstance_3();
        if (!tmp1_anonymous.and_jhajnj_k$(tmp.or_s401rn_k$(new Long(0, 536870912))).equals(new Long(0, 0)))
          return Companion_getInstance_3().addFailReason_gc2gzp_k$(tmp1_anonymous);
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        Companion_getInstance_3();
        var head = tmp1_anonymous.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
        var tail = tmp1_anonymous.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
        var mask = this.mask_1;
        if (((tail + 2 | 0) & mask) === (head & mask)) {
          Companion_getInstance_3();
          return 1;
        }
        if (!this.singleConsumer_1 ? !(this.array_1.atomicfu$get(tail & mask).get_kotlinx$atomicfu$value_vi2am5_k$() == null) : false) {
          var tmp_0;
          Companion_getInstance_3();
          if (this.capacity_1 < 1024) {
            tmp_0 = true;
          } else {
            var tmp_1 = tail - head | 0;
            Companion_getInstance_3();
            tmp_0 = (tmp_1 & 1073741823) > this.capacity_1 >> 1;
          }
          if (tmp_0) {
            Companion_getInstance_3();
            return 1;
          }
          break $l$block;
        }
        var tmp_2 = tail + 1 | 0;
        Companion_getInstance_3();
        var newTail = tmp_2 & 1073741823;
        var tmp_3;
        if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, Companion_getInstance_3().updateTail_fwivqo_k$(tmp1_anonymous, newTail))) {
          this.array_1.atomicfu$get(tail & mask).set_kotlinx$atomicfu$value_koguff_k$(element);
          var cur = this;
          $l$loop_0: while (true) {
            var tmp_4 = cur._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
            Companion_getInstance_3();
            if (tmp_4.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
              break $l$loop_0;
            var tmp0_elvis_lhs = fillPlaceholder(cur.next_20eer_k$(), tail, element);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              break $l$loop_0;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            cur = tmp_5;
          }
          Companion_getInstance_3();
          return 0;
        }
      }
    }
  };
  protoOf(LockFreeTaskQueueCore).removeFirstOrNull_eges3a_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      $l$block_0: {
        // Inline function 'kotlinx.coroutines.internal.LockFreeTaskQueueCore.removeFirstOrNull.<anonymous>' call
        var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
        Companion_getInstance_3();
        if (!tmp1_anonymous.and_jhajnj_k$(new Long(0, 268435456)).equals(new Long(0, 0)))
          return Companion_getInstance_3().REMOVE_FROZEN_1;
        // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
        Companion_getInstance_3();
        var head = tmp1_anonymous.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
        var tail = tmp1_anonymous.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
        if ((tail & this.mask_1) === (head & this.mask_1))
          return null;
        var element = this.array_1.atomicfu$get(head & this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
        if (element == null) {
          if (this.singleConsumer_1)
            return null;
          break $l$block_0;
        }
        if (element instanceof Placeholder)
          return null;
        var tmp = head + 1 | 0;
        Companion_getInstance_3();
        var newHead = tmp & 1073741823;
        if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, Companion_getInstance_3().updateHead_eajy5c_k$(tmp1_anonymous, newHead))) {
          this.array_1.atomicfu$get(head & this.mask_1).set_kotlinx$atomicfu$value_koguff_k$(null);
          return element;
        }
        if (!this.singleConsumer_1) {
          break $l$block_0;
        }
        var cur = this;
        while (true) {
          var tmp0_elvis_lhs = removeSlowPath(cur, head, newHead);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            return element;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          cur = tmp_0;
        }
      }
    }
  };
  protoOf(LockFreeTaskQueueCore).next_20eer_k$ = function () {
    return allocateOrGetNextCopy(this, markFrozen(this));
  };
  protoOf(LockFreeTaskQueueCore).map_o73y3q_k$ = function (transform) {
    var res = ArrayList_init_$Create$(this.capacity_1);
    // Inline function 'kotlinx.coroutines.internal.Companion.withState' call
    Companion_getInstance_3();
    var tmp1_withState = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var head = tmp1_withState.and_jhajnj_k$(new Long(1073741823, 0)).shr_wjue3g_k$(0).toInt_1tsl84_k$();
    var tail = tmp1_withState.and_jhajnj_k$(new Long(-1073741824, 268435455)).shr_wjue3g_k$(30).toInt_1tsl84_k$();
    var index = head;
    while (!((index & this.mask_1) === (tail & this.mask_1))) {
      var element = this.array_1.atomicfu$get(index & this.mask_1).get_kotlinx$atomicfu$value_vi2am5_k$();
      var tmp;
      if (!(element == null)) {
        tmp = !(element instanceof Placeholder);
      } else {
        tmp = false;
      }
      if (tmp) {
        res.add_1j60pz_k$(transform(isObject(element) ? element : THROW_CCE()));
      }
      index = index + 1 | 0;
    }
    return res;
  };
  protoOf(LockFreeTaskQueueCore).isClosed_baxhhm_k$ = function () {
    var tmp = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    Companion_getInstance_3();
    return !tmp.and_jhajnj_k$(new Long(0, 536870912)).equals(new Long(0, 0));
  };
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
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
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.coroutineContext_1 = context;
  }
  protoOf(ContextScope).get_coroutineContext_115oqo_k$ = function () {
    return this.coroutineContext_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.coroutineContext_1 + ')';
  };
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.uCont_1 = uCont;
  }
  protoOf(ScopeCoroutine).get_uCont_iyyiam_k$ = function () {
    return this.uCont_1;
  };
  protoOf(ScopeCoroutine).get_callerFrame_pfdb95_k$ = function () {
    var tmp = this.uCont_1;
    return isInterface(tmp, CoroutineStackFrame) ? tmp : null;
  };
  protoOf(ScopeCoroutine).getStackTraceElement_um8m53_k$ = function () {
    return null;
  };
  protoOf(ScopeCoroutine).get_isScopedCoroutine_rwmmff_k$ = function () {
    return true;
  };
  protoOf(ScopeCoroutine).get_parent_hy4reb_k$ = function () {
    var tmp0_safe_receiver = this.get_parentHandle_gmoqez_k$();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_parent_hy4reb_k$();
  };
  protoOf(ScopeCoroutine).afterCompletion_2ogq6g_k$ = function (state) {
    resumeCancellableWith(intercepted(this.uCont_1), recoverResult(state, this.uCont_1));
  };
  protoOf(ScopeCoroutine).afterResume_ufx9w9_k$ = function (state) {
    this.uCont_1.resumeWith_s3a3yh_k$(recoverResult(state, this.uCont_1));
  };
  function Symbol(symbol) {
    this.symbol_1 = symbol;
  }
  protoOf(Symbol).get_symbol_jqdfoh_k$ = function () {
    return this.symbol_1;
  };
  protoOf(Symbol).toString = function () {
    return '<' + this.symbol_1 + '>';
  };
  protoOf(Symbol).unbox_4pmzbj_k$ = function (value) {
    var tmp;
    if (value === this) {
      tmp = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    } else {
      tmp = (value == null ? true : isObject(value)) ? value : THROW_CCE();
    }
    return tmp;
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxValue;
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).toInt_1tsl84_k$();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$() : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.compareTo_n4fqi2_k$(parsed) <= 0 ? parsed.compareTo_n4fqi2_k$(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, completion) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted_0(_this__u8e3s4, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function runSafely(completion, block) {
    try {
      block();
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(completion, e);
      } else {
        throw $p;
      }
    }
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    Companion_getInstance();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.resumeWith_s3a3yh_k$(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_1(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure$accessor$paksz7(fatalCompletion, e);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startCoroutineUnintercepted(_this__u8e3s4, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUnintercepted.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(actualCompletion) : _this__u8e3s4.invoke_34if6s_k$(actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$4);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$7 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$7);
      }
    }
  }
  function startCoroutineUnintercepted_0(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUnintercepted.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.invoke_5zdxxo_k$(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$4);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$7 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$7);
      }
    }
  }
  function startDirect(completion, block) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        Companion_getInstance();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(e));
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$1);
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      Companion_getInstance();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
      actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$3);
    }
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
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.invoke_5zdxxo_k$(receiver, _this__u8e3s4);
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
      var state = _this__u8e3s4.makeCompletingOnce_b13xy2_k$(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturn.<anonymous>' call
        state.get_cause_iplhs0_k$();
        if (true) {
          throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
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
        tmp = typeof a === 'function' ? a(receiver, _this__u8e3s4) : block.invoke_5zdxxo_k$(receiver, _this__u8e3s4);
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
      var state = _this__u8e3s4.makeCompletingOnce_b13xy2_k$(result);
      if (state === get_COMPLETING_WAITING_CHILDREN()) {
        tmp$ret$3 = get_COROUTINE_SUSPENDED();
        break $l$block_0;
      }
      var tmp_1;
      if (state instanceof CompletedExceptionally) {
        var tmp_2;
        // Inline function 'kotlinx.coroutines.intrinsics.startUndispatchedOrReturnIgnoreTimeout.<anonymous>' call
        var tmp0_anonymous = state.get_cause_iplhs0_k$();
        var tmp_3;
        if (tmp0_anonymous instanceof TimeoutCancellationException) {
          tmp_3 = tmp0_anonymous.get_coroutine_cnpmtt_k$() === _this__u8e3s4;
        } else {
          tmp_3 = false;
        }
        if (!tmp_3) {
          throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          if (result instanceof CompletedExceptionally) {
            throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
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
  function startCoroutineUndispatched(_this__u8e3s4, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.get_context_h02k06_k$();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(actualCompletion) : _this__u8e3s4.invoke_34if6s_k$(actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$9);
      }
    }
  }
  function startCoroutineUndispatched_0(_this__u8e3s4, receiver, completion) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      var actualCompletion = completion;
      var tmp;
      try {
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        completion.get_context_h02k06_k$();
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        // Inline function 'kotlin.js.asDynamic' call
        var a = _this__u8e3s4;
        tmp = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.invoke_5zdxxo_k$(receiver, actualCompletion);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          Companion_getInstance();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(e));
          actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$6);
          break $l$block;
        } else {
          throw $p;
        }
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        Companion_getInstance();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.resumeWith_s3a3yh_k$(tmp$ret$9);
      }
    }
  }
  function undispatchedResult(_this__u8e3s4, shouldThrow, startBlock) {
    var tmp;
    try {
      tmp = startBlock();
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
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.makeCompletingOnce_b13xy2_k$(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (shouldThrow(state.get_cause_iplhs0_k$())) {
        throw recoverStackTrace(state.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.get_cause_iplhs0_k$(), _this__u8e3s4.get_uCont_iyyiam_k$());
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function get_NOT_SELECTED() {
    _init_properties_Select_kt__zhm2jg();
    return NOT_SELECTED;
  }
  var NOT_SELECTED;
  function get_ALREADY_SELECTED() {
    _init_properties_Select_kt__zhm2jg();
    return ALREADY_SELECTED;
  }
  var ALREADY_SELECTED;
  function get_UNDECIDED_1() {
    _init_properties_Select_kt__zhm2jg();
    return UNDECIDED_1;
  }
  var UNDECIDED_1;
  function get_RESUMED_1() {
    _init_properties_Select_kt__zhm2jg();
    return RESUMED_1;
  }
  var RESUMED_1;
  function get_selectOpSequenceNumber() {
    _init_properties_Select_kt__zhm2jg();
    return selectOpSequenceNumber;
  }
  var selectOpSequenceNumber;
  function SelectClause0() {
  }
  function SelectInstance() {
  }
  function _get_number__4pkqn6($this) {
    return $this.number_1;
  }
  function SeqNumber() {
    this.number_1 = atomic$long$1(new Long(1, 0));
  }
  protoOf(SeqNumber).next_20eer_k$ = function () {
    return this.number_1.atomicfu$incrementAndGet$long();
  };
  function SelectClause2() {
  }
  function SelectClause1() {
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      NOT_SELECTED = new Symbol('NOT_SELECTED');
      ALREADY_SELECTED = new Symbol('ALREADY_SELECTED');
      UNDECIDED_1 = new Symbol('UNDECIDED');
      RESUMED_1 = new Symbol('RESUMED');
      selectOpSequenceNumber = new SeqNumber();
    }
  }
  function get_LOCK_FAIL() {
    _init_properties_Mutex_kt__jod56b();
    return LOCK_FAIL;
  }
  var LOCK_FAIL;
  function get_UNLOCK_FAIL() {
    _init_properties_Mutex_kt__jod56b();
    return UNLOCK_FAIL;
  }
  var UNLOCK_FAIL;
  function get_LOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return LOCKED;
  }
  var LOCKED;
  function get_UNLOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return UNLOCKED;
  }
  var UNLOCKED;
  function get_EMPTY_LOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return EMPTY_LOCKED;
  }
  var EMPTY_LOCKED;
  function get_EMPTY_UNLOCKED() {
    _init_properties_Mutex_kt__jod56b();
    return EMPTY_UNLOCKED;
  }
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this.locked_1 = locked;
  }
  protoOf(Empty_0).get_locked_g9dxjn_k$ = function () {
    return this.locked_1;
  };
  protoOf(Empty_0).toString = function () {
    return 'Empty[' + toString_0(this.locked_1) + ']';
  };
  function Mutex() {
  }
  function Mutex_0(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function withLock(_this__u8e3s4, owner, action, $completion) {
    owner = owner === VOID ? null : owner;
    var tmp = new $withLockCOROUTINE$35(_this__u8e3s4, owner, action, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function PrepareOp($outer, atomicOp) {
    this.$this_1 = $outer;
    OpDescriptor.call(this);
    this.atomicOp_1 = atomicOp;
  }
  protoOf(PrepareOp).get_atomicOp_p2pkuj_k$ = function () {
    return this.atomicOp_1;
  };
  protoOf(PrepareOp).perform_8emi3i_k$ = function (affected) {
    var update = this.atomicOp_1.get_isDecided_ofk0qx_k$() ? get_EMPTY_UNLOCKED() : this.atomicOp_1;
    (affected instanceof MutexImpl ? affected : THROW_CCE())._state_1.atomicfu$compareAndSet(this, update);
    return null;
  };
  function _get_isTaken__vqhb78($this) {
    return $this.isTaken_1;
  }
  function _get_cont__d4zd5l($this) {
    return $this.cont_1;
  }
  function MutexImpl$LockCont$tryResumeLockWaiter$lambda(this$0, this$1) {
    return function (it) {
      this$0.unlock_uksyr8_k$(this$1.owner_1);
      return Unit_getInstance();
    };
  }
  function MutexImpl$LockSelect$completeResumeLockWaiter$lambda(this$0, this$1) {
    return function (it) {
      this$0.unlock_uksyr8_k$(this$1.owner_1);
      return Unit_getInstance();
    };
  }
  function _get__state__37adl3_4($this) {
    return $this._state_1;
  }
  function lockSuspend($this, owner, $completion) {
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>' call
      var waiter = new LockCont($this, owner, cancellable);
      // Inline function 'kotlinx.atomicfu.loop' call
      var tmp0_loop = $this._state_1;
      while (true) {
        $l$block_1: {
          // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>.<anonymous>' call
          var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
          if (tmp1_anonymous instanceof Empty_0) {
            if (!(tmp1_anonymous.locked_1 === get_UNLOCKED())) {
              $this._state_1.atomicfu$compareAndSet(tmp1_anonymous, new LockedQueue(tmp1_anonymous.locked_1));
            } else {
              var update = owner == null ? get_EMPTY_LOCKED() : new Empty_0(owner);
              if ($this._state_1.atomicfu$compareAndSet(tmp1_anonymous, update)) {
                cancellable.resume_l1w5in_k$(Unit_getInstance(), MutexImpl$lockSuspend$lambda($this, owner));
                break $l$block_0;
              }
            }
          } else {
            if (tmp1_anonymous instanceof LockedQueue) {
              var curOwner = tmp1_anonymous.owner_1;
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              if (!!(curOwner === owner)) {
                // Inline function 'kotlinx.coroutines.sync.MutexImpl.lockSuspend.<anonymous>.<anonymous>.<anonymous>' call
                var message = 'Already locked by ' + toString(owner);
                throw IllegalStateException_init_$Create$(toString_0(message));
              }
              tmp1_anonymous.addLast_uyctnf_k$(waiter);
              if ($this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$() === tmp1_anonymous ? true : !waiter.take_2451j_k$()) {
                removeOnCancellation(cancellable, waiter);
                break $l$block_0;
              }
              waiter = new LockCont($this, owner, cancellable);
              break $l$block_1;
            } else {
              if (tmp1_anonymous instanceof OpDescriptor) {
                tmp1_anonymous.perform_8emi3i_k$($this);
              } else {
                var tmp1_error = 'Illegal state ' + toString(tmp1_anonymous);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              }
            }
          }
        }
      }
    }
    return cancellable.getResult_clfhg3_k$();
  }
  function TryLockDesc(mutex, owner) {
    AtomicDesc.call(this);
    this.mutex_1 = mutex;
    this.owner_1 = owner;
  }
  protoOf(TryLockDesc).get_mutex_ivg6dy_k$ = function () {
    return this.mutex_1;
  };
  protoOf(TryLockDesc).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  protoOf(TryLockDesc).prepare_lz7jjr_k$ = function (op) {
    var prepare = new PrepareOp(this, op);
    if (!this.mutex_1._state_1.atomicfu$compareAndSet(get_EMPTY_UNLOCKED(), prepare))
      return get_LOCK_FAIL();
    return prepare.perform_8emi3i_k$(this.mutex_1);
  };
  protoOf(TryLockDesc).complete_b09hpj_k$ = function (op, failure) {
    var tmp;
    if (!(failure == null)) {
      tmp = get_EMPTY_UNLOCKED();
    } else {
      tmp = this.owner_1 == null ? get_EMPTY_LOCKED() : new Empty_0(this.owner_1);
    }
    var update = tmp;
    this.mutex_1._state_1.atomicfu$compareAndSet(op, update);
  };
  function LockedQueue(owner) {
    LinkedListHead.call(this);
    this.owner_1 = owner;
  }
  protoOf(LockedQueue).set_owner_hxk9qv_k$ = function (_set____db54di) {
    this.owner_1 = _set____db54di;
  };
  protoOf(LockedQueue).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  protoOf(LockedQueue).toString = function () {
    return 'LockedQueue[' + toString_0(this.owner_1) + ']';
  };
  function LockWaiter($outer, owner) {
    this.$this_1 = $outer;
    LinkedListNode.call(this);
    this.owner_1 = owner;
    this.isTaken_1 = atomic$boolean$1(false);
  }
  protoOf(LockWaiter).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  protoOf(LockWaiter).take_2451j_k$ = function () {
    return this.isTaken_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(LockWaiter).dispose_3n44we_k$ = function () {
    this.remove_fgfybg_k$();
  };
  function LockCont($outer, owner, cont) {
    this.$this_2 = $outer;
    LockWaiter.call(this, $outer, owner);
    this.cont_1 = cont;
  }
  protoOf(LockCont).tryResumeLockWaiter_ic8017_k$ = function () {
    if (!this.take_2451j_k$())
      return false;
    return !(this.cont_1.tryResume_93jc0s_k$(Unit_getInstance(), null, MutexImpl$LockCont$tryResumeLockWaiter$lambda(this.$this_2, this)) == null);
  };
  protoOf(LockCont).completeResumeLockWaiter_9lh6gy_k$ = function () {
    return this.cont_1.completeResume_fu4ex_k$(get_RESUME_TOKEN());
  };
  protoOf(LockCont).toString = function () {
    return 'LockCont[' + toString(this.owner_1) + ', ' + this.cont_1 + '] for ' + this.$this_2;
  };
  function LockSelect($outer, owner, select, block) {
    this.$this_2 = $outer;
    LockWaiter.call(this, $outer, owner);
    this.select_1 = select;
    this.block_1 = block;
  }
  protoOf(LockSelect).get_select_jfcyrp_k$ = function () {
    return this.select_1;
  };
  protoOf(LockSelect).get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  protoOf(LockSelect).tryResumeLockWaiter_ic8017_k$ = function () {
    return this.take_2451j_k$() ? this.select_1.trySelect_1ivjiv_k$() : false;
  };
  protoOf(LockSelect).completeResumeLockWaiter_9lh6gy_k$ = function () {
    var tmp = this.select_1.get_completion_t4gxwb_k$();
    startCoroutineCancellable(this.block_1, this.$this_2, tmp, MutexImpl$LockSelect$completeResumeLockWaiter$lambda(this.$this_2, this));
  };
  protoOf(LockSelect).toString = function () {
    return 'LockSelect[' + toString(this.owner_1) + ', ' + this.select_1 + '] for ' + this.$this_2;
  };
  function UnlockOp(queue) {
    AtomicOp.call(this);
    this.queue_1 = queue;
  }
  protoOf(UnlockOp).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(UnlockOp).prepare_qor5c_k$ = function (affected) {
    return this.queue_1.get_isEmpty_zauvru_k$() ? null : get_UNLOCK_FAIL();
  };
  protoOf(UnlockOp).prepare_gq68ys_k$ = function (affected) {
    return this.prepare_qor5c_k$(affected instanceof MutexImpl ? affected : THROW_CCE());
  };
  protoOf(UnlockOp).complete_fo0qwe_k$ = function (affected, failure) {
    var update = failure == null ? get_EMPTY_UNLOCKED() : this.queue_1;
    affected._state_1.atomicfu$compareAndSet(this, update);
  };
  protoOf(UnlockOp).complete_fye4ce_k$ = function (affected, failure) {
    return this.complete_fo0qwe_k$(affected instanceof MutexImpl ? affected : THROW_CCE(), failure);
  };
  function MutexImpl$lockSuspend$lambda(this$0, $owner) {
    return function (it) {
      this$0.unlock_uksyr8_k$($owner);
      return Unit_getInstance();
    };
  }
  function MutexImpl(locked) {
    this._state_1 = atomic$ref$1(locked ? get_EMPTY_LOCKED() : get_EMPTY_UNLOCKED());
  }
  protoOf(MutexImpl).get_isLocked_w82zdp_k$ = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.<get-isLocked>.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1_anonymous instanceof Empty_0)
        return !(tmp1_anonymous.locked_1 === get_UNLOCKED());
      else {
        if (tmp1_anonymous instanceof LockedQueue)
          return true;
        else {
          if (tmp1_anonymous instanceof OpDescriptor) {
            tmp1_anonymous.perform_8emi3i_k$(this);
          } else {
            var tmp0_error = 'Illegal state ' + toString(tmp1_anonymous);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).get_isLockedEmptyQueueState_r5n45s_k$ = function () {
    var state = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    var tmp;
    if (state instanceof LockedQueue) {
      tmp = state.get_isEmpty_zauvru_k$();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MutexImpl).tryLock_jl1wg7_k$ = function (owner) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.tryLock.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1_anonymous instanceof Empty_0) {
        if (!(tmp1_anonymous.locked_1 === get_UNLOCKED()))
          return false;
        var update = owner == null ? get_EMPTY_LOCKED() : new Empty_0(owner);
        if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, update))
          return true;
      } else {
        if (tmp1_anonymous instanceof LockedQueue) {
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!(tmp1_anonymous.owner_1 === owner)) {
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.tryLock.<anonymous>.<anonymous>' call
            var message = 'Already locked by ' + toString(owner);
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
          return false;
        } else {
          if (tmp1_anonymous instanceof OpDescriptor) {
            tmp1_anonymous.perform_8emi3i_k$(this);
          } else {
            var tmp1_error = 'Illegal state ' + toString(tmp1_anonymous);
            throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).lock_25dizd_k$ = function (owner, $completion) {
    if (this.tryLock_jl1wg7_k$(owner))
      return Unit_getInstance();
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).get_onLock_hnkecz_k$ = function () {
    return this;
  };
  protoOf(MutexImpl).registerSelectClause2_k018gz_k$ = function (select, owner, block) {
    while (true) {
      if (select.get_isSelected_dl432q_k$())
        return Unit_getInstance();
      var state = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (state instanceof Empty_0) {
        if (!(state.locked_1 === get_UNLOCKED())) {
          this._state_1.atomicfu$compareAndSet(state, new LockedQueue(state.locked_1));
        } else {
          var failure = select.performAtomicTrySelect_9r1u91_k$(new TryLockDesc(this, owner));
          if (failure == null) {
            startCoroutineUnintercepted_0(block, this, select.get_completion_t4gxwb_k$());
            return Unit_getInstance();
          } else if (failure === get_ALREADY_SELECTED())
            return Unit_getInstance();
          else if (failure !== get_LOCK_FAIL())
            if (failure !== get_RETRY_ATOMIC()) {
              // Inline function 'kotlin.error' call
              var tmp0_error = 'performAtomicTrySelect(TryLockDesc) returned ' + toString(failure);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
        }
      } else {
        if (state instanceof LockedQueue) {
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!(state.owner_1 === owner)) {
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.registerSelectClause2.<anonymous>' call
            var message = 'Already locked by ' + toString(owner);
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
          var node = new LockSelect(this, owner, select, block);
          state.addLast_uyctnf_k$(node);
          if (this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$() === state ? true : !node.take_2451j_k$()) {
            select.disposeOnSelect_lrl426_k$(node);
            return Unit_getInstance();
          }
        } else {
          if (state instanceof OpDescriptor) {
            state.perform_8emi3i_k$(this);
          } else {
            var tmp2_error = 'Illegal state ' + toString(state);
            throw IllegalStateException_init_$Create$(toString_0(tmp2_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).registerSelectClause2_5jxiui_k$ = function (select, param, block) {
    return this.registerSelectClause2_k018gz_k$(select, (param == null ? true : isObject(param)) ? param : THROW_CCE(), block);
  };
  protoOf(MutexImpl).holdsLock_9pqa81_k$ = function (owner) {
    // Inline function 'kotlin.let' call
    var tmp0_let = this._state_1.get_kotlinx$atomicfu$value_vi2am5_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.sync.MutexImpl.holdsLock.<anonymous>' call
    var tmp;
    if (tmp0_let instanceof Empty_0) {
      tmp = tmp0_let.locked_1 === owner;
    } else {
      if (tmp0_let instanceof LockedQueue) {
        tmp = tmp0_let.owner_1 === owner;
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  protoOf(MutexImpl).unlock_uksyr8_k$ = function (owner) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1_anonymous instanceof Empty_0) {
        if (owner == null) {
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!!(tmp1_anonymous.locked_1 === get_UNLOCKED())) {
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
            var message = 'Mutex is not locked';
            throw IllegalStateException_init_$Create$(toString_0(message));
          }
        } else {
          // Inline function 'kotlin.check' call
          // Inline function 'kotlin.contracts.contract' call
          if (!(tmp1_anonymous.locked_1 === owner)) {
            // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
            var message_0 = 'Mutex is locked by ' + toString_0(tmp1_anonymous.locked_1) + ' but expected ' + toString(owner);
            throw IllegalStateException_init_$Create$(toString_0(message_0));
          }
        }
        if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, get_EMPTY_UNLOCKED()))
          return Unit_getInstance();
      } else {
        if (tmp1_anonymous instanceof OpDescriptor) {
          tmp1_anonymous.perform_8emi3i_k$(this);
        } else {
          if (tmp1_anonymous instanceof LockedQueue) {
            if (!(owner == null)) {
              // Inline function 'kotlin.check' call
              // Inline function 'kotlin.contracts.contract' call
              if (!(tmp1_anonymous.owner_1 === owner)) {
                // Inline function 'kotlinx.coroutines.sync.MutexImpl.unlock.<anonymous>.<anonymous>' call
                var message_1 = 'Mutex is locked by ' + toString_0(tmp1_anonymous.owner_1) + ' but expected ' + toString(owner);
                throw IllegalStateException_init_$Create$(toString_0(message_1));
              }
            }
            var waiter = tmp1_anonymous.removeFirstOrNull_eges3a_k$();
            if (waiter == null) {
              var op = new UnlockOp(tmp1_anonymous);
              if (this._state_1.atomicfu$compareAndSet(tmp1_anonymous, op) ? op.perform_8emi3i_k$(this) == null : false)
                return Unit_getInstance();
            } else {
              if ((waiter instanceof LockWaiter ? waiter : THROW_CCE()).tryResumeLockWaiter_ic8017_k$()) {
                var tmp = tmp1_anonymous;
                var tmp1_elvis_lhs = waiter.owner_1;
                tmp.owner_1 = tmp1_elvis_lhs == null ? get_LOCKED() : tmp1_elvis_lhs;
                waiter.completeResumeLockWaiter_9lh6gy_k$();
                return Unit_getInstance();
              }
            }
          } else {
            var tmp3_error = 'Illegal state ' + toString(tmp1_anonymous);
            throw IllegalStateException_init_$Create$(toString_0(tmp3_error));
          }
        }
      }
    }
  };
  protoOf(MutexImpl).toString = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this._state_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.sync.MutexImpl.toString.<anonymous>' call
      var tmp1_anonymous = tmp0_loop.get_kotlinx$atomicfu$value_vi2am5_k$();
      if (tmp1_anonymous instanceof Empty_0)
        return 'Mutex[' + toString_0(tmp1_anonymous.locked_1) + ']';
      else {
        if (tmp1_anonymous instanceof OpDescriptor) {
          tmp1_anonymous.perform_8emi3i_k$(this);
        } else {
          if (tmp1_anonymous instanceof LockedQueue)
            return 'Mutex[' + toString_0(tmp1_anonymous.owner_1) + ']';
          else {
            var tmp0_error = 'Illegal state ' + toString(tmp1_anonymous);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  function $withLockCOROUTINE$35(_this__u8e3s4, owner, action, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.owner_1 = owner;
    this.action_1 = action;
  }
  protoOf($withLockCOROUTINE$35).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.lock_25dizd_k$(this.owner_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$3: do {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp_0;
                try {
                  tmp$ret$0 = this.action_1();
                  break l$ret$1;
                } catch ($p) {
                  var tmp_1;
                  var t = $p;
                  this._this__u8e3s4__1.unlock_uksyr8_k$(this.owner_1);
                  throw t;
                }
              }
               while (false);
              var tmp_2 = tmp$ret$0;
              this._this__u8e3s4__1.unlock_uksyr8_k$(this.owner_1);
              return tmp_2;
            }
             while (false);
            this._this__u8e3s4__1.unlock_uksyr8_k$(this.owner_1);
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
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      LOCK_FAIL = new Symbol('LOCK_FAIL');
      UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
      LOCKED = new Symbol('LOCKED');
      UNLOCKED = new Symbol('UNLOCKED');
      EMPTY_LOCKED = new Empty_0(get_LOCKED());
      EMPTY_UNLOCKED = new Empty_0(get_UNLOCKED());
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
  function get_SEGMENT_SIZE() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
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
  function get_asHandler(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function get_asHandler_0(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4;
  }
  function CancelHandlerBase() {
  }
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().get_Default_goqax4_k$();
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
  function get_UNDEFINED_0() {
    return UNDEFINED_0;
  }
  var UNDEFINED_0;
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.get_coroutineContext_115oqo_k$().plus_rgw9wi_k$(context);
    return (!(combined === Dispatchers_getInstance().get_Default_goqax4_k$()) ? combined.get_j1ktw6_k$(Key_getInstance()) == null : false) ? combined.plus_rgw9wi_k$(Dispatchers_getInstance().get_Default_goqax4_k$()) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.plus_rgw9wi_k$(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).afterResume_ufx9w9_k$ = function (state) {
    return this.get_uCont_iyyiam_k$().resumeWith_s3a3yh_k$(recoverResult(state, this.get_uCont_iyyiam_k$()));
  };
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  function set_counter(_set____db54di) {
    counter = _set____db54di;
  }
  function get_counter() {
    return counter;
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).get_simpleName_r6f8py_k$();
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
  function assert(value) {
  }
  function _get_mainDispatcher__sm5ex7($this) {
    return $this.mainDispatcher_1;
  }
  function _set_injectedMainDispatcher__9278zd($this, _set____db54di) {
    $this.injectedMainDispatcher_1 = _set____db54di;
  }
  function _get_injectedMainDispatcher__d6w7gb($this) {
    return $this.injectedMainDispatcher_1;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.Default_1 = createDefaultDispatcher();
    this.Unconfined_1 = Unconfined_getInstance();
    this.mainDispatcher_1 = new JsMainDispatcher(this.Default_1, false);
    this.injectedMainDispatcher_1 = null;
  }
  protoOf(Dispatchers).get_Default_goqax4_k$ = function () {
    return this.Default_1;
  };
  protoOf(Dispatchers).get_Main_wo5vz6_k$ = function () {
    var tmp0_elvis_lhs = this.injectedMainDispatcher_1;
    return tmp0_elvis_lhs == null ? this.mainDispatcher_1 : tmp0_elvis_lhs;
  };
  protoOf(Dispatchers).get_Unconfined_sfvx0q_k$ = function () {
    return this.Unconfined_1;
  };
  protoOf(Dispatchers).injectMain_isae1a_k$ = function (dispatcher) {
    this.injectedMainDispatcher_1 = dispatcher;
  };
  protoOf(Dispatchers).resetInjectedMain_6cv6vt_k$ = function () {
    this.injectedMainDispatcher_1 = null;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function _get_invokeImmediately__pxbc17($this) {
    return $this.invokeImmediately_1;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.delegate_1 = delegate;
    this.invokeImmediately_1 = invokeImmediately;
    this.immediate_1 = this.invokeImmediately_1 ? this : new JsMainDispatcher(this.delegate_1, true);
  }
  protoOf(JsMainDispatcher).get_delegate_i94tki_k$ = function () {
    return this.delegate_1;
  };
  protoOf(JsMainDispatcher).get_immediate_r3y8eg_k$ = function () {
    return this.immediate_1;
  };
  protoOf(JsMainDispatcher).isDispatchNeeded_fmz9vn_k$ = function (context) {
    return !this.invokeImmediately_1;
  };
  protoOf(JsMainDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    return this.delegate_1.dispatch_o98ux7_k$(context, block);
  };
  protoOf(JsMainDispatcher).dispatchYield_ww21f6_k$ = function (context, block) {
    return this.delegate_1.dispatchYield_ww21f6_k$(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.toStringInternalImpl_hcqz93_k$();
    return tmp0_elvis_lhs == null ? this.delegate_1.toString() : tmp0_elvis_lhs;
  };
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).dispatch_o98ux7_k$ = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.job_1 = job;
  }
  protoOf(JobCancellationException).get_job_18j2r0_k$ = function () {
    return this.job_1;
  };
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + this.job_1;
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
        tmp_1 = equals(other.job_1, this.job_1);
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
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.job_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).scheduleQueueProcessing_nyddyc_k$ = function () {
    process.nextTick(this.messageQueue_1.processQueue_1);
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
  protoOf(SetTimeoutDispatcher).scheduleQueueProcessing_nyddyc_k$ = function () {
    setTimeout(this.messageQueue_1.processQueue_1, 0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.$this_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.processQueue_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).get_processQueue_xqf7it_k$ = function () {
    return this.processQueue_1;
  };
  protoOf(ScheduledMessageQueue).schedule_o6nex2_k$ = function () {
    this.$this_1.scheduleQueueProcessing_nyddyc_k$();
  };
  protoOf(ScheduledMessageQueue).reschedule_mh206x_k$ = function () {
    setTimeout(this.processQueue_1, 0);
  };
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.messageQueue_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).get_messageQueue_gxtffx_k$ = function () {
    return this.messageQueue_1;
  };
  protoOf(SetTimeoutBasedDispatcher).limitedParallelism_glrman_k$ = function (parallelism) {
    checkParallelism(parallelism);
    return this;
  };
  protoOf(SetTimeoutBasedDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    this.messageQueue_1.enqueue_w6uc33_k$(block);
  };
  protoOf(SetTimeoutBasedDispatcher).invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = new ClearTimeout(handle);
    continuation.invokeOnCancellation_yygv6h_k$(tmp$ret$1);
  };
  function _set_scheduled__8qlfaw($this, _set____db54di) {
    $this.scheduled_1 = _set____db54di;
  }
  function _get_scheduled__wzo69o($this) {
    return $this.scheduled_1;
  }
  function MessageQueue() {
    ArrayQueue.call(this);
    this.yieldEvery_1 = 16;
    this.scheduled_1 = false;
  }
  protoOf(MessageQueue).get_yieldEvery_1qy12h_k$ = function () {
    return this.yieldEvery_1;
  };
  protoOf(MessageQueue).enqueue_w6uc33_k$ = function (element) {
    this.addLast_xhfl3v_k$(element);
    if (!this.scheduled_1) {
      this.scheduled_1 = true;
      this.schedule_o6nex2_k$();
    }
  };
  protoOf(MessageQueue).process_mza50i_k$ = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.yieldEvery_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.removeFirstOrNull_eges3a_k$();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.run_mw4iiu_k$();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.get_isEmpty_zauvru_k$()) {
        this.scheduled_1 = false;
      } else {
        this.reschedule_mh206x_k$();
      }
    }
  };
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).toInt_1tsl84_k$();
  }
  function _get_handle__ls055p_1($this) {
    return $this.handle_1;
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.handle_1 = handle;
  }
  protoOf(ClearTimeout).dispose_3n44we_k$ = function () {
    clearTimeout(this.handle_1);
  };
  protoOf(ClearTimeout).invoke_7fb7sc_k$ = function (cause) {
    this.dispose_3n44we_k$();
  };
  protoOf(ClearTimeout).invoke = function (cause) {
    return this.invoke_7fb7sc_k$(cause);
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.handle_1 + ']';
  };
  function get_MAX_DELAY() {
    return MAX_DELAY;
  }
  var MAX_DELAY;
  function _get_window__ax0zxh($this) {
    return $this.window_1;
  }
  function _get_queue__c6g84g_0($this) {
    return $this.queue_1;
  }
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.resumeUndispatched_re4yxz_k$(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.run_mw4iiu_k$();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher$invokeOnTimeout$1(this$0, $handle) {
    this.this$0__1 = this$0;
    this.$handle_1 = $handle;
  }
  protoOf(WindowDispatcher$invokeOnTimeout$1).dispose_3n44we_k$ = function () {
    this.this$0__1.window_1.clearTimeout(this.$handle_1);
  };
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_1 = window_0;
    this.queue_1 = new WindowMessageQueue(this.window_1);
  }
  protoOf(WindowDispatcher).dispatch_o98ux7_k$ = function (context, block) {
    return this.queue_1.enqueue_w6uc33_k$(block);
  };
  protoOf(WindowDispatcher).scheduleResumeAfterDelay_5x4w1l_k$ = function (timeMillis, continuation) {
    this.window_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  protoOf(WindowDispatcher).invokeOnTimeout_sx2bqq_k$ = function (timeMillis, block, context) {
    var handle = this.window_1.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$1(this, handle);
  };
  function _get_window__ax0zxh_0($this) {
    return $this.window_1;
  }
  function _get_messageName__5th09r($this) {
    return $this.messageName_1;
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.window_1 ? event.data == this$0.messageName_1 : false) {
        event.stopPropagation();
        this$0.process_mza50i_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.process_mza50i_k$();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.window_1 = window_0;
    this.messageName_1 = 'dispatchCoroutine';
    this.window_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).schedule_o6nex2_k$ = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).reschedule_mh206x_k$ = function () {
    this.window_1.postMessage(this.messageName_1, '*');
  };
  function Runnable() {
  }
  function Runnable_0(block) {
    return new _no_name_provided__qut3iv_15(block);
  }
  function _no_name_provided__qut3iv_15($block) {
    this.$block_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv_15).run_mw4iiu_k$ = function () {
    this.$block_1();
  };
  function SchedulerTask() {
  }
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function afterTask(_this__u8e3s4) {
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$('Flow was aborted, no more elements needed', this);
    captureStack(this, AbortFlowException);
    this.owner_1 = owner;
  }
  protoOf(AbortFlowException).get_owner_iwkx3e_k$ = function () {
    return this.owner_1;
  };
  function ChildCancelledException() {
    CancellationException_init_$Init$('Child of the scoped flow was cancelled', this);
    captureStack(this, ChildCancelledException);
  }
  function _set_lastEmissionContext__smyz7($this, _set____db54di) {
    $this.lastEmissionContext_1 = _set____db54di;
  }
  function _get_lastEmissionContext__e3d7vj($this) {
    return $this.lastEmissionContext_1;
  }
  function SafeCollector$collectContextSize$lambda(count, _anonymous_parameter_1__qggqgd) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.collector_1 = collector;
    this.collectContext_1 = collectContext;
    var tmp = this;
    tmp.collectContextSize_1 = this.collectContext_1.fold_iindx8_k$(0, SafeCollector$collectContextSize$lambda);
    this.lastEmissionContext_1 = null;
  }
  protoOf(SafeCollector).get_collector_vd7hgc_k$ = function () {
    return this.collector_1;
  };
  protoOf(SafeCollector).get_collectContext_m0m2mq_k$ = function () {
    return this.collectContext_1;
  };
  protoOf(SafeCollector).get_collectContextSize_pumapd_k$ = function () {
    return this.collectContextSize_1;
  };
  protoOf(SafeCollector).emit_1fbrsb_k$ = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.get_context_h02k06_k$();
    ensureActive(currentContext);
    if (!(this.lastEmissionContext_1 === currentContext)) {
      checkContext(this, currentContext);
      this.lastEmissionContext_1 = currentContext;
    }
    return this.collector_1.emit_1fbrsb_k$(value, $completion);
  };
  protoOf(SafeCollector).releaseIntercepted_5cexvt_k$ = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  protoOf(NoOpLock).tryLock_hapj0a_k$ = function () {
    return true;
  };
  protoOf(NoOpLock).unlock_85cgkz_k$ = function () {
  };
  function withLock_0(_this__u8e3s4, action) {
    return action();
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  protoOf(LinkedListHead).get_isEmpty_zauvru_k$ = function () {
    return this._next_1 === this;
  };
  protoOf(LinkedListHead).remove_fgfybg_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  function LinkedListNode() {
    this._next_1 = this;
    this._prev_1 = this;
    this._removed_1 = false;
  }
  protoOf(LinkedListNode).set__next_ir5h2x_k$ = function (_set____db54di) {
    this._next_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__next_inmai1_k$ = function () {
    return this._next_1;
  };
  protoOf(LinkedListNode).set__prev_qmwz5z_k$ = function (_set____db54di) {
    this._prev_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__prev_inntnt_k$ = function () {
    return this._prev_1;
  };
  protoOf(LinkedListNode).set__removed_pin64r_k$ = function (_set____db54di) {
    this._removed_1 = _set____db54di;
  };
  protoOf(LinkedListNode).get__removed_p9514a_k$ = function () {
    return this._removed_1;
  };
  protoOf(LinkedListNode).get_nextNode_88zlwi_k$ = function () {
    return this._next_1;
  };
  protoOf(LinkedListNode).get_prevNode_i5bmvy_k$ = function () {
    return this._prev_1;
  };
  protoOf(LinkedListNode).get_isRemoved_gzdz59_k$ = function () {
    return this._removed_1;
  };
  protoOf(LinkedListNode).addLast_uyctnf_k$ = function (node) {
    var prev = this._prev_1;
    node._next_1 = this;
    node._prev_1 = prev;
    prev._next_1 = node;
    this._prev_1 = node;
  };
  protoOf(LinkedListNode).remove_fgfybg_k$ = function () {
    return this.removeImpl_i5v938_k$();
  };
  protoOf(LinkedListNode).removeImpl_i5v938_k$ = function () {
    if (this._removed_1)
      return false;
    var prev = this._prev_1;
    var next = this._next_1;
    prev._next_1 = next;
    next._prev_1 = prev;
    this._removed_1 = true;
    return true;
  };
  protoOf(LinkedListNode).addOneIfEmpty_cbgboi_k$ = function (node) {
    if (!(this._next_1 === this))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIf_h8xph4_k$ = function (node, condition) {
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIfPrev_bzlxtw_k$ = function (node, predicate) {
    if (!predicate(this._prev_1))
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).addLastIfPrevAndIf_gphed7_k$ = function (node, predicate, condition) {
    if (!predicate(this._prev_1))
      return false;
    if (!condition())
      return false;
    this.addLast_uyctnf_k$(node);
    return true;
  };
  protoOf(LinkedListNode).helpRemove_v3vfak_k$ = function () {
  };
  protoOf(LinkedListNode).removeFirstOrNull_eges3a_k$ = function () {
    var next = this._next_1;
    if (next === this)
      return null;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!next.removeImpl_i5v938_k$()) {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstOrNull.<anonymous>' call
      var message = 'Should remove';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    return next;
  };
  function PrepareOp_0(affected, desc, atomicOp) {
    OpDescriptor.call(this);
    this.affected_1 = affected;
    this.desc_1 = desc;
    this.atomicOp_1 = atomicOp;
  }
  protoOf(PrepareOp_0).get_affected_lutt4z_k$ = function () {
    return this.affected_1;
  };
  protoOf(PrepareOp_0).get_desc_woknve_k$ = function () {
    return this.desc_1;
  };
  protoOf(PrepareOp_0).get_atomicOp_p2pkuj_k$ = function () {
    return this.atomicOp_1;
  };
  protoOf(PrepareOp_0).perform_8emi3i_k$ = function (affected) {
    return null;
  };
  protoOf(PrepareOp_0).finishPrepare_o9c8d9_k$ = function () {
  };
  function AbstractAtomicDesc() {
    AtomicDesc.call(this);
  }
  protoOf(AbstractAtomicDesc).onPrepare_soaf0c_k$ = function (prepareOp) {
    this.finishPrepare_kkga2x_k$(prepareOp);
    return null;
  };
  protoOf(AbstractAtomicDesc).onRemoved_gagg6z_k$ = function (affected) {
  };
  protoOf(AbstractAtomicDesc).prepare_lz7jjr_k$ = function (op) {
    var affected = this.get_affectedNode_2377z5_k$();
    var failure = this.failure_mowj19_k$(affected);
    if (!(failure == null))
      return failure;
    return this.onPrepare_soaf0c_k$(new PrepareOp_0(affected, this, op));
  };
  protoOf(AbstractAtomicDesc).complete_b09hpj_k$ = function (op, failure) {
    return this.onComplete_9ma4gp_k$();
  };
  protoOf(AbstractAtomicDesc).failure_mowj19_k$ = function (affected) {
    return null;
  };
  protoOf(AbstractAtomicDesc).retry_84e02v_k$ = function (affected, next) {
    return false;
  };
  function RemoveFirstDesc(queue) {
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    var tmp = this;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp.affectedNode_1 = this.queue_1._next_1;
  }
  protoOf(RemoveFirstDesc).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(RemoveFirstDesc).get_result_iyg5d2_k$ = function () {
    var tmp = this.get_affectedNode_2377z5_k$();
    return isObject(tmp) ? tmp : THROW_CCE();
  };
  protoOf(RemoveFirstDesc).get_affectedNode_2377z5_k$ = function () {
    return this.affectedNode_1;
  };
  protoOf(RemoveFirstDesc).finishPrepare_kkga2x_k$ = function (prepareOp) {
  };
  protoOf(RemoveFirstDesc).onComplete_9ma4gp_k$ = function () {
    this.queue_1.removeFirstOrNull_eges3a_k$();
  };
  protoOf(RemoveFirstDesc).finishOnSuccess_jxa2jk_k$ = function (affected, next) {
    return Unit_getInstance();
  };
  function AddLastDesc(queue, node) {
    AbstractAtomicDesc.call(this);
    this.queue_1 = queue;
    this.node_1 = node;
  }
  protoOf(AddLastDesc).get_queue_ixn208_k$ = function () {
    return this.queue_1;
  };
  protoOf(AddLastDesc).get_node_wor8sr_k$ = function () {
    return this.node_1;
  };
  protoOf(AddLastDesc).get_affectedNode_2377z5_k$ = function () {
    return this.queue_1._prev_1;
  };
  protoOf(AddLastDesc).finishPrepare_kkga2x_k$ = function (prepareOp) {
  };
  protoOf(AddLastDesc).onComplete_9ma4gp_k$ = function () {
    return this.queue_1.addLast_uyctnf_k$(this.node_1);
  };
  protoOf(AddLastDesc).finishOnSuccess_jxa2jk_k$ = function (affected, next) {
    return Unit_getInstance();
  };
  function _set_value__lx0xdg_0($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40_0($this) {
    return $this.value_1;
  }
  function LocalAtomicInt(value) {
    this.value_1 = value;
  }
  protoOf(LocalAtomicInt).set_2jdgjy_k$ = function (value) {
    this.value_1 = value;
  };
  protoOf(LocalAtomicInt).get_26vq_k$ = function () {
    return this.value_1;
  };
  protoOf(LocalAtomicInt).decrementAndGet_dinmnm_k$ = function () {
    this.value_1 = this.value_1 - 1 | 0;
    return this.value_1;
  };
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverAndThrow(exception, $completion) {
    throw exception;
  }
  function initCause(_this__u8e3s4, cause) {
  }
  function CoroutineStackFrame() {
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function _set_value__lx0xdg_1($this, _set____db54di) {
    $this.value_1 = _set____db54di;
  }
  function _get_value__a43j40_1($this) {
    return $this.value_1;
  }
  function CommonThreadLocal() {
    this.value_1 = null;
  }
  protoOf(CommonThreadLocal).get_26vq_k$ = function () {
    var tmp = this.value_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  protoOf(CommonThreadLocal).set_hda1d2_k$ = function (value) {
    this.value_1 = value;
  };
  //region block: post-declaration
  protoOf(JobSupport).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(JobSupport).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(JobSupport).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(JobSupport).cancel_2kogtl_k$ = cancel;
  protoOf(JobSupport).plus_ee14jq_k$ = plus_0;
  protoOf(JobSupport).plus_rgw9wi_k$ = plus;
  protoOf(JobSupport).get_j1ktw6_k$ = get;
  protoOf(JobSupport).fold_iindx8_k$ = fold;
  protoOf(JobSupport).minusKey_y21q55_k$ = minusKey;
  protoOf(AbstractCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(AbstractCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(AbstractCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(AbstractCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(AbstractCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(AbstractCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(AbstractCoroutine).get_j1ktw6_k$ = get;
  protoOf(AbstractCoroutine).fold_iindx8_k$ = fold;
  protoOf(AbstractCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(StandaloneCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(StandaloneCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(StandaloneCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(StandaloneCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(StandaloneCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(StandaloneCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(StandaloneCoroutine).get_j1ktw6_k$ = get;
  protoOf(StandaloneCoroutine).fold_iindx8_k$ = fold;
  protoOf(StandaloneCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(LazyStandaloneCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(LazyStandaloneCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(LazyStandaloneCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(LazyStandaloneCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(LazyStandaloneCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(LazyStandaloneCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(LazyStandaloneCoroutine).get_j1ktw6_k$ = get;
  protoOf(LazyStandaloneCoroutine).fold_iindx8_k$ = fold;
  protoOf(LazyStandaloneCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(ScopeCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(ScopeCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(ScopeCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(ScopeCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(ScopeCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(ScopeCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(ScopeCoroutine).get_j1ktw6_k$ = get;
  protoOf(ScopeCoroutine).fold_iindx8_k$ = fold;
  protoOf(ScopeCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(DispatchedCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(DispatchedCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(DispatchedCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(DispatchedCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(DispatchedCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(DispatchedCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(DispatchedCoroutine).get_j1ktw6_k$ = get;
  protoOf(DispatchedCoroutine).fold_iindx8_k$ = fold;
  protoOf(DispatchedCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(DeferredCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(DeferredCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(DeferredCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(DeferredCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(DeferredCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(DeferredCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(DeferredCoroutine).get_j1ktw6_k$ = get;
  protoOf(DeferredCoroutine).fold_iindx8_k$ = fold;
  protoOf(DeferredCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(LazyDeferredCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(LazyDeferredCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(LazyDeferredCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(LazyDeferredCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(LazyDeferredCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(LazyDeferredCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(LazyDeferredCoroutine).get_j1ktw6_k$ = get;
  protoOf(LazyDeferredCoroutine).fold_iindx8_k$ = fold;
  protoOf(LazyDeferredCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(CancellableContinuationImpl).cancel$default_hru8c2_k$ = cancel$default_1;
  protoOf(CancellableContinuationImpl).tryResume$default_32aap5_k$ = tryResume$default;
  protoOf(CompletableDeferredImpl).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(CompletableDeferredImpl).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(CompletableDeferredImpl).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(CompletableDeferredImpl).cancel_2kogtl_k$ = cancel;
  protoOf(CompletableDeferredImpl).plus_ee14jq_k$ = plus_0;
  protoOf(CompletableDeferredImpl).plus_rgw9wi_k$ = plus;
  protoOf(CompletableDeferredImpl).get_j1ktw6_k$ = get;
  protoOf(CompletableDeferredImpl).fold_iindx8_k$ = fold;
  protoOf(CompletableDeferredImpl).minusKey_y21q55_k$ = minusKey;
  protoOf(CoroutineDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(CoroutineDispatcher).fold_iindx8_k$ = fold;
  protoOf(CoroutineDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(CoroutineDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(_no_name_provided__qut3iv).get_j1ktw6_k$ = get;
  protoOf(_no_name_provided__qut3iv).fold_iindx8_k$ = fold;
  protoOf(_no_name_provided__qut3iv).minusKey_y21q55_k$ = minusKey;
  protoOf(_no_name_provided__qut3iv).plus_rgw9wi_k$ = plus;
  protoOf(CoroutineName).get_j1ktw6_k$ = get;
  protoOf(CoroutineName).fold_iindx8_k$ = fold;
  protoOf(CoroutineName).minusKey_y21q55_k$ = minusKey;
  protoOf(CoroutineName).plus_rgw9wi_k$ = plus;
  protoOf(EventLoop).plus_rgw9wi_k$ = plus;
  protoOf(EventLoop).get_j1ktw6_k$ = get_0;
  protoOf(EventLoop).fold_iindx8_k$ = fold;
  protoOf(EventLoop).minusKey_y21q55_k$ = minusKey_0;
  protoOf(AwaitContinuation).cancel$default_hru8c2_k$ = cancel$default_1;
  protoOf(AwaitContinuation).tryResume$default_32aap5_k$ = tryResume$default;
  protoOf(JobImpl).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(JobImpl).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(JobImpl).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(JobImpl).cancel_2kogtl_k$ = cancel;
  protoOf(JobImpl).plus_ee14jq_k$ = plus_0;
  protoOf(JobImpl).plus_rgw9wi_k$ = plus;
  protoOf(JobImpl).get_j1ktw6_k$ = get;
  protoOf(JobImpl).fold_iindx8_k$ = fold;
  protoOf(JobImpl).minusKey_y21q55_k$ = minusKey;
  protoOf(MainCoroutineDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(MainCoroutineDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(MainCoroutineDispatcher).fold_iindx8_k$ = fold;
  protoOf(MainCoroutineDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(NonCancellable).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(NonCancellable).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(NonCancellable).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(NonCancellable).get_j1ktw6_k$ = get;
  protoOf(NonCancellable).fold_iindx8_k$ = fold;
  protoOf(NonCancellable).minusKey_y21q55_k$ = minusKey;
  protoOf(NonCancellable).plus_rgw9wi_k$ = plus;
  protoOf(NonCancellable).plus_ee14jq_k$ = plus_0;
  protoOf(NonCancellable).cancel_2kogtl_k$ = cancel;
  protoOf(SupervisorJobImpl).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(SupervisorJobImpl).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(SupervisorJobImpl).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(SupervisorJobImpl).cancel_2kogtl_k$ = cancel;
  protoOf(SupervisorJobImpl).plus_ee14jq_k$ = plus_0;
  protoOf(SupervisorJobImpl).plus_rgw9wi_k$ = plus;
  protoOf(SupervisorJobImpl).get_j1ktw6_k$ = get;
  protoOf(SupervisorJobImpl).fold_iindx8_k$ = fold;
  protoOf(SupervisorJobImpl).minusKey_y21q55_k$ = minusKey;
  protoOf(TimeoutCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(TimeoutCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(TimeoutCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(TimeoutCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(TimeoutCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(TimeoutCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(TimeoutCoroutine).get_j1ktw6_k$ = get;
  protoOf(TimeoutCoroutine).fold_iindx8_k$ = fold;
  protoOf(TimeoutCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(Unconfined).plus_rgw9wi_k$ = plus;
  protoOf(Unconfined).get_j1ktw6_k$ = get_0;
  protoOf(Unconfined).fold_iindx8_k$ = fold;
  protoOf(Unconfined).minusKey_y21q55_k$ = minusKey_0;
  protoOf(YieldContext).get_j1ktw6_k$ = get;
  protoOf(YieldContext).fold_iindx8_k$ = fold;
  protoOf(YieldContext).minusKey_y21q55_k$ = minusKey;
  protoOf(YieldContext).plus_rgw9wi_k$ = plus;
  protoOf(Itr).next0_nshvhy_k$ = next0;
  protoOf(AbstractSendChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(AbstractChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(AbstractChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(AbstractChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(AbstractChannel).cancel_2kogtl_k$ = cancel_0;
  protoOf(AbstractChannel).poll_21vi7_k$ = poll;
  protoOf(AbstractChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(AbstractChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(ArrayChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(ArrayChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(ArrayChannel).cancel_2kogtl_k$ = cancel_0;
  protoOf(ArrayChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(ArrayChannel).poll_21vi7_k$ = poll;
  protoOf(ArrayChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(ArrayChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(ChannelCoroutine).close$default_4vjk8d_k$ = close$default;
  protoOf(ChannelCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(ChannelCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(ChannelCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(ChannelCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(ChannelCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(ChannelCoroutine).get_j1ktw6_k$ = get;
  protoOf(ChannelCoroutine).fold_iindx8_k$ = fold;
  protoOf(ChannelCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(ConflatedChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(ConflatedChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(ConflatedChannel).cancel_2kogtl_k$ = cancel_0;
  protoOf(ConflatedChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(ConflatedChannel).poll_21vi7_k$ = poll;
  protoOf(ConflatedChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(ConflatedChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(LinkedListChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(LinkedListChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(LinkedListChannel).cancel_2kogtl_k$ = cancel_0;
  protoOf(LinkedListChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(LinkedListChannel).poll_21vi7_k$ = poll;
  protoOf(LinkedListChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(LinkedListChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(ProducerCoroutine).close$default_4vjk8d_k$ = close$default;
  protoOf(ProducerCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(ProducerCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(ProducerCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(ProducerCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(ProducerCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(ProducerCoroutine).get_j1ktw6_k$ = get;
  protoOf(ProducerCoroutine).fold_iindx8_k$ = fold;
  protoOf(ProducerCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(RendezvousChannel).cancel$default_do42m4_k$ = cancel$default_3;
  protoOf(RendezvousChannel).cancel$default_l3ut5j_k$ = cancel$default_2;
  protoOf(RendezvousChannel).cancel_2kogtl_k$ = cancel_0;
  protoOf(RendezvousChannel).close$default_4vjk8d_k$ = close$default;
  protoOf(RendezvousChannel).poll_21vi7_k$ = poll;
  protoOf(RendezvousChannel).receiveOrNull_5cvr9l_k$ = receiveOrNull;
  protoOf(RendezvousChannel).get_onReceiveOrNull_5u62it_k$ = get_onReceiveOrNull;
  protoOf(ChannelFlow).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(ChannelFlowBuilder).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(CallbackFlowBuilder).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(ChannelAsFlow).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(SharedFlowImpl).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(StateFlowImpl).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(SubscriptionCountStateFlow).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(ChannelFlowOperator).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(ChannelFlowOperatorImpl).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(FlowCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(FlowCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(FlowCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(FlowCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(FlowCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(FlowCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(FlowCoroutine).get_j1ktw6_k$ = get;
  protoOf(FlowCoroutine).fold_iindx8_k$ = fold;
  protoOf(FlowCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(ChannelFlowTransformLatest).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(ReadonlyStateFlow).fuse$default_fjb5uq_k$ = fuse$default;
  protoOf(LimitedDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(LimitedDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(LimitedDispatcher).fold_iindx8_k$ = fold;
  protoOf(LimitedDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(MutexImpl).tryLock$default_rul8cl_k$ = tryLock$default;
  protoOf(MutexImpl).lock$default_6ude1f_k$ = lock$default;
  protoOf(MutexImpl).unlock$default_u8q7s8_k$ = unlock$default;
  protoOf(UndispatchedCoroutine).invokeOnCompletion$default_gp7u53_k$ = invokeOnCompletion$default;
  protoOf(UndispatchedCoroutine).cancel$default_64jlsz_k$ = cancel$default;
  protoOf(UndispatchedCoroutine).cancel$default_midxay_k$ = cancel$default_0;
  protoOf(UndispatchedCoroutine).cancel_2kogtl_k$ = cancel;
  protoOf(UndispatchedCoroutine).plus_ee14jq_k$ = plus_0;
  protoOf(UndispatchedCoroutine).plus_rgw9wi_k$ = plus;
  protoOf(UndispatchedCoroutine).get_j1ktw6_k$ = get;
  protoOf(UndispatchedCoroutine).fold_iindx8_k$ = fold;
  protoOf(UndispatchedCoroutine).minusKey_y21q55_k$ = minusKey;
  protoOf(JsMainDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(JsMainDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(JsMainDispatcher).fold_iindx8_k$ = fold;
  protoOf(JsMainDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(UnconfinedEventLoop).plus_rgw9wi_k$ = plus;
  protoOf(UnconfinedEventLoop).get_j1ktw6_k$ = get_0;
  protoOf(UnconfinedEventLoop).fold_iindx8_k$ = fold;
  protoOf(UnconfinedEventLoop).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(SetTimeoutBasedDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(SetTimeoutBasedDispatcher).fold_iindx8_k$ = fold;
  protoOf(SetTimeoutBasedDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SetTimeoutBasedDispatcher).delay_sw4t2e_k$ = delay;
  protoOf(NodeDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(NodeDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(NodeDispatcher).fold_iindx8_k$ = fold;
  protoOf(NodeDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(NodeDispatcher).delay_sw4t2e_k$ = delay;
  protoOf(SetTimeoutDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(SetTimeoutDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(SetTimeoutDispatcher).fold_iindx8_k$ = fold;
  protoOf(SetTimeoutDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(SetTimeoutDispatcher).delay_sw4t2e_k$ = delay;
  protoOf(WindowDispatcher).plus_rgw9wi_k$ = plus;
  protoOf(WindowDispatcher).get_j1ktw6_k$ = get_0;
  protoOf(WindowDispatcher).fold_iindx8_k$ = fold;
  protoOf(WindowDispatcher).minusKey_y21q55_k$ = minusKey_0;
  protoOf(WindowDispatcher).delay_sw4t2e_k$ = delay;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  UNDECIDED_0 = 0;
  SUSPENDED_0 = 1;
  RESUMED_0 = 2;
  FALSE = 0;
  TRUE = 1;
  RETRY = -1;
  RECEIVE_THROWS_ON_CLOSE = 0;
  RECEIVE_RESULT = 1;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  DEFAULT_CONCURRENCY_PROPERTY_NAME = 'kotlinx.coroutines.flow.defaultConcurrency';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  UNDEFINED_0 = 'undefined';
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  MAX_DELAY = new Long(2147483647, 0);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.b = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.c = awaitClose;
  _.$_$.d = combineInternal;
  _.$_$.e = collect;
  _.$_$.f = emitAll_0;
  _.$_$.g = first;
  _.$_$.h = delay;
  _.$_$.i = awaitAll;
  _.$_$.j = cancelAndJoin;
  _.$_$.k = coroutineScope;
  _.$_$.l = delay_0;
  _.$_$.m = joinAll;
  _.$_$.n = withContext;
  _.$_$.o = withTimeoutOrNull;
  _.$_$.p = withTimeout;
  _.$_$.q = yield_0;
  _.$_$.r = ChannelResult__getOrNull_impl_f5e07h;
  _.$_$.s = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.t = Factory_getInstance;
  _.$_$.u = Companion_getInstance_2;
  _.$_$.v = Key_getInstance_1;
  _.$_$.w = Key_getInstance_2;
  _.$_$.x = Dispatchers_getInstance;
  _.$_$.y = Key_getInstance_3;
  _.$_$.z = NonCancellable_getInstance;
  _.$_$.a1 = Channel_0;
  _.$_$.b1 = ProducerScope;
  _.$_$.c1 = cancelConsumed;
  _.$_$.d1 = FlowCollector;
  _.$_$.e1 = Flow;
  _.$_$.f1 = MutableSharedFlow_0;
  _.$_$.g1 = MutableStateFlow_0;
  _.$_$.h1 = asStateFlow;
  _.$_$.i1 = callbackFlow;
  _.$_$.j1 = combine_0;
  _.$_$.k1 = combine_1;
  _.$_$.l1 = combine;
  _.$_$.m1 = distinctUntilChanged;
  _.$_$.n1 = filterNotNull;
  _.$_$.o1 = flow;
  _.$_$.p1 = onCompletion;
  _.$_$.q1 = receiveAsFlow;
  _.$_$.r1 = scan;
  _.$_$.s1 = stateIn;
  _.$_$.t1 = takeWhile;
  _.$_$.u1 = transformLatest;
  _.$_$.v1 = Mutex_0;
  _.$_$.w1 = CancellableContinuationImpl;
  _.$_$.x1 = CompletableDeferred_0;
  _.$_$.y1 = CoroutineDispatcher;
  _.$_$.z1 = CoroutineExceptionHandler;
  _.$_$.a2 = CoroutineScope_0;
  _.$_$.b2 = CoroutineScope;
  _.$_$.c2 = invokeOnTimeout;
  _.$_$.d2 = Delay;
  _.$_$.e2 = Job_0;
  _.$_$.f2 = get_MODE_CANCELLABLE;
  _.$_$.g2 = MainScope;
  _.$_$.h2 = Runnable;
  _.$_$.i2 = SupervisorJob;
  _.$_$.j2 = async;
  _.$_$.k2 = cancel_1;
  _.$_$.l2 = cancel_2;
  _.$_$.m2 = cancel_3;
  _.$_$.n2 = get_isActive_0;
  _.$_$.o2 = get_isActive;
  _.$_$.p2 = get_job;
  _.$_$.q2 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
