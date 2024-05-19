goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33744 = (function (f,blockable,meta33745){
this.f = f;
this.blockable = blockable;
this.meta33745 = meta33745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33746,meta33745__$1){
var self__ = this;
var _33746__$1 = this;
return (new cljs.core.async.t_cljs$core$async33744(self__.f,self__.blockable,meta33745__$1));
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33746){
var self__ = this;
var _33746__$1 = this;
return self__.meta33745;
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33745","meta33745",1309077386,null)], null);
}));

(cljs.core.async.t_cljs$core$async33744.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33744");

(cljs.core.async.t_cljs$core$async33744.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33744");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33744.
 */
cljs.core.async.__GT_t_cljs$core$async33744 = (function cljs$core$async$__GT_t_cljs$core$async33744(f,blockable,meta33745){
return (new cljs.core.async.t_cljs$core$async33744(f,blockable,meta33745));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33735 = arguments.length;
switch (G__33735) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async33744(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33789 = arguments.length;
switch (G__33789) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33797 = arguments.length;
switch (G__33797) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33807 = arguments.length;
switch (G__33807) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36817 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36817) : fn1.call(null,val_36817));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36817) : fn1.call(null,val_36817));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33837 = arguments.length;
switch (G__33837) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5814__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5814__auto__)){
var ret = temp__5814__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5814__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5814__auto__)){
var retb = temp__5814__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___36839 = n;
var x_36840 = (0);
while(true){
if((x_36840 < n__5636__auto___36839)){
(a[x_36840] = x_36840);

var G__36841 = (x_36840 + (1));
x_36840 = G__36841;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33881 = (function (flag,meta33882){
this.flag = flag;
this.meta33882 = meta33882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33883,meta33882__$1){
var self__ = this;
var _33883__$1 = this;
return (new cljs.core.async.t_cljs$core$async33881(self__.flag,meta33882__$1));
}));

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33883){
var self__ = this;
var _33883__$1 = this;
return self__.meta33882;
}));

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33882","meta33882",371333117,null)], null);
}));

(cljs.core.async.t_cljs$core$async33881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33881");

(cljs.core.async.t_cljs$core$async33881.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33881.
 */
cljs.core.async.__GT_t_cljs$core$async33881 = (function cljs$core$async$__GT_t_cljs$core$async33881(flag,meta33882){
return (new cljs.core.async.t_cljs$core$async33881(flag,meta33882));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33881(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33897 = (function (flag,cb,meta33898){
this.flag = flag;
this.cb = cb;
this.meta33898 = meta33898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33899,meta33898__$1){
var self__ = this;
var _33899__$1 = this;
return (new cljs.core.async.t_cljs$core$async33897(self__.flag,self__.cb,meta33898__$1));
}));

(cljs.core.async.t_cljs$core$async33897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33899){
var self__ = this;
var _33899__$1 = this;
return self__.meta33898;
}));

(cljs.core.async.t_cljs$core$async33897.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33897.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33898","meta33898",635012666,null)], null);
}));

(cljs.core.async.t_cljs$core$async33897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33897");

(cljs.core.async.t_cljs$core$async33897.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33897.
 */
cljs.core.async.__GT_t_cljs$core$async33897 = (function cljs$core$async$__GT_t_cljs$core$async33897(flag,cb,meta33898){
return (new cljs.core.async.t_cljs$core$async33897(flag,cb,meta33898));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33897(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33902_SHARP_){
var G__33916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33902_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33916) : fret.call(null,G__33916));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33903_SHARP_){
var G__33917 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33903_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33917) : fret.call(null,G__33917));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36863 = (i + (1));
i = G__36863;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5816__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5816__auto__)){
var got = temp__5816__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36864 = arguments.length;
var i__5770__auto___36865 = (0);
while(true){
if((i__5770__auto___36865 < len__5769__auto___36864)){
args__5775__auto__.push((arguments[i__5770__auto___36865]));

var G__36866 = (i__5770__auto___36865 + (1));
i__5770__auto___36865 = G__36866;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33922){
var map__33924 = p__33922;
var map__33924__$1 = cljs.core.__destructure_map(map__33924);
var opts = map__33924__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33920){
var G__33921 = cljs.core.first(seq33920);
var seq33920__$1 = cljs.core.next(seq33920);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33921,seq33920__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33927 = arguments.length;
switch (G__33927) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33582__auto___36868 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_33984){
var state_val_33985 = (state_33984[(1)]);
if((state_val_33985 === (7))){
var inst_33976 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
var statearr_34011_36869 = state_33984__$1;
(statearr_34011_36869[(2)] = inst_33976);

(statearr_34011_36869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (1))){
var state_33984__$1 = state_33984;
var statearr_34017_36872 = state_33984__$1;
(statearr_34017_36872[(2)] = null);

(statearr_34017_36872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (4))){
var inst_33953 = (state_33984[(7)]);
var inst_33953__$1 = (state_33984[(2)]);
var inst_33958 = (inst_33953__$1 == null);
var state_33984__$1 = (function (){var statearr_34018 = state_33984;
(statearr_34018[(7)] = inst_33953__$1);

return statearr_34018;
})();
if(cljs.core.truth_(inst_33958)){
var statearr_34019_36873 = state_33984__$1;
(statearr_34019_36873[(1)] = (5));

} else {
var statearr_34020_36874 = state_33984__$1;
(statearr_34020_36874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (13))){
var state_33984__$1 = state_33984;
var statearr_34026_36875 = state_33984__$1;
(statearr_34026_36875[(2)] = null);

(statearr_34026_36875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (6))){
var inst_33953 = (state_33984[(7)]);
var state_33984__$1 = state_33984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33984__$1,(11),to,inst_33953);
} else {
if((state_val_33985 === (3))){
var inst_33982 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33984__$1,inst_33982);
} else {
if((state_val_33985 === (12))){
var state_33984__$1 = state_33984;
var statearr_34038_36876 = state_33984__$1;
(statearr_34038_36876[(2)] = null);

(statearr_34038_36876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (2))){
var state_33984__$1 = state_33984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33984__$1,(4),from);
} else {
if((state_val_33985 === (11))){
var inst_33969 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
if(cljs.core.truth_(inst_33969)){
var statearr_34041_36877 = state_33984__$1;
(statearr_34041_36877[(1)] = (12));

} else {
var statearr_34042_36881 = state_33984__$1;
(statearr_34042_36881[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (9))){
var state_33984__$1 = state_33984;
var statearr_34043_36882 = state_33984__$1;
(statearr_34043_36882[(2)] = null);

(statearr_34043_36882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (5))){
var state_33984__$1 = state_33984;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34045_36883 = state_33984__$1;
(statearr_34045_36883[(1)] = (8));

} else {
var statearr_34046_36884 = state_33984__$1;
(statearr_34046_36884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (14))){
var inst_33974 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
var statearr_34047_36885 = state_33984__$1;
(statearr_34047_36885[(2)] = inst_33974);

(statearr_34047_36885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (10))){
var inst_33966 = (state_33984[(2)]);
var state_33984__$1 = state_33984;
var statearr_34048_36886 = state_33984__$1;
(statearr_34048_36886[(2)] = inst_33966);

(statearr_34048_36886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33985 === (8))){
var inst_33963 = cljs.core.async.close_BANG_(to);
var state_33984__$1 = state_33984;
var statearr_34049_36887 = state_33984__$1;
(statearr_34049_36887[(2)] = inst_33963);

(statearr_34049_36887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_34052 = [null,null,null,null,null,null,null,null];
(statearr_34052[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_34052[(1)] = (1));

return statearr_34052;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_33984){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_33984);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e34054){var ex__33068__auto__ = e34054;
var statearr_34055_36888 = state_33984;
(statearr_34055_36888[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_33984[(4)]))){
var statearr_34057_36889 = state_33984;
(statearr_34057_36889[(1)] = cljs.core.first((state_33984[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36893 = state_33984;
state_33984 = G__36893;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_33984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_33984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_34058 = f__33584__auto__();
(statearr_34058[(6)] = c__33582__auto___36868);

return statearr_34058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__34074){
var vec__34076 = p__34074;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34076,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34076,(1),null);
var job = vec__34076;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33582__auto___36901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_34085){
var state_val_34086 = (state_34085[(1)]);
if((state_val_34086 === (1))){
var state_34085__$1 = state_34085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34085__$1,(2),res,v);
} else {
if((state_val_34086 === (2))){
var inst_34082 = (state_34085[(2)]);
var inst_34083 = cljs.core.async.close_BANG_(res);
var state_34085__$1 = (function (){var statearr_34091 = state_34085;
(statearr_34091[(7)] = inst_34082);

return statearr_34091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34085__$1,inst_34083);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0 = (function (){
var statearr_34093 = [null,null,null,null,null,null,null,null];
(statearr_34093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__);

(statearr_34093[(1)] = (1));

return statearr_34093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1 = (function (state_34085){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_34085);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e34094){var ex__33068__auto__ = e34094;
var statearr_34095_36906 = state_34085;
(statearr_34095_36906[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_34085[(4)]))){
var statearr_34096_36907 = state_34085;
(statearr_34096_36907[(1)] = cljs.core.first((state_34085[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36909 = state_34085;
state_34085 = G__36909;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__ = function(state_34085){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1.call(this,state_34085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_34100 = f__33584__auto__();
(statearr_34100[(6)] = c__33582__auto___36901);

return statearr_34100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34102){
var vec__34103 = p__34102;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34103,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34103,(1),null);
var job = vec__34103;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___36913 = n;
var __36914 = (0);
while(true){
if((__36914 < n__5636__auto___36913)){
var G__34109_36915 = type;
var G__34109_36916__$1 = (((G__34109_36915 instanceof cljs.core.Keyword))?G__34109_36915.fqn:null);
switch (G__34109_36916__$1) {
case "compute":
var c__33582__auto___36918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36914,c__33582__auto___36918,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async){
return (function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = ((function (__36914,c__33582__auto___36918,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async){
return (function (state_34127){
var state_val_34128 = (state_34127[(1)]);
if((state_val_34128 === (1))){
var state_34127__$1 = state_34127;
var statearr_34134_36919 = state_34127__$1;
(statearr_34134_36919[(2)] = null);

(statearr_34134_36919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (2))){
var state_34127__$1 = state_34127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34127__$1,(4),jobs);
} else {
if((state_val_34128 === (3))){
var inst_34125 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34127__$1,inst_34125);
} else {
if((state_val_34128 === (4))){
var inst_34117 = (state_34127[(2)]);
var inst_34118 = process__$1(inst_34117);
var state_34127__$1 = state_34127;
if(cljs.core.truth_(inst_34118)){
var statearr_34135_36922 = state_34127__$1;
(statearr_34135_36922[(1)] = (5));

} else {
var statearr_34136_36926 = state_34127__$1;
(statearr_34136_36926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (5))){
var state_34127__$1 = state_34127;
var statearr_34138_36931 = state_34127__$1;
(statearr_34138_36931[(2)] = null);

(statearr_34138_36931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (6))){
var state_34127__$1 = state_34127;
var statearr_34139_36939 = state_34127__$1;
(statearr_34139_36939[(2)] = null);

(statearr_34139_36939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (7))){
var inst_34123 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
var statearr_34140_36943 = state_34127__$1;
(statearr_34140_36943[(2)] = inst_34123);

(statearr_34140_36943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36914,c__33582__auto___36918,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async))
;
return ((function (__36914,switch__33064__auto__,c__33582__auto___36918,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0 = (function (){
var statearr_34145 = [null,null,null,null,null,null,null];
(statearr_34145[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__);

(statearr_34145[(1)] = (1));

return statearr_34145;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1 = (function (state_34127){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_34127);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e34148){var ex__33068__auto__ = e34148;
var statearr_34149_36945 = state_34127;
(statearr_34149_36945[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_34127[(4)]))){
var statearr_34150_36946 = state_34127;
(statearr_34150_36946[(1)] = cljs.core.first((state_34127[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36949 = state_34127;
state_34127 = G__36949;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__ = function(state_34127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1.call(this,state_34127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__;
})()
;})(__36914,switch__33064__auto__,c__33582__auto___36918,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async))
})();
var state__33585__auto__ = (function (){var statearr_34156 = f__33584__auto__();
(statearr_34156[(6)] = c__33582__auto___36918);

return statearr_34156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
});})(__36914,c__33582__auto___36918,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async))
);


break;
case "async":
var c__33582__auto___36951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36914,c__33582__auto___36951,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async){
return (function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = ((function (__36914,c__33582__auto___36951,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async){
return (function (state_34173){
var state_val_34174 = (state_34173[(1)]);
if((state_val_34174 === (1))){
var state_34173__$1 = state_34173;
var statearr_34176_36955 = state_34173__$1;
(statearr_34176_36955[(2)] = null);

(statearr_34176_36955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (2))){
var state_34173__$1 = state_34173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34173__$1,(4),jobs);
} else {
if((state_val_34174 === (3))){
var inst_34171 = (state_34173[(2)]);
var state_34173__$1 = state_34173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34173__$1,inst_34171);
} else {
if((state_val_34174 === (4))){
var inst_34161 = (state_34173[(2)]);
var inst_34164 = async(inst_34161);
var state_34173__$1 = state_34173;
if(cljs.core.truth_(inst_34164)){
var statearr_34183_36956 = state_34173__$1;
(statearr_34183_36956[(1)] = (5));

} else {
var statearr_34190_36957 = state_34173__$1;
(statearr_34190_36957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (5))){
var state_34173__$1 = state_34173;
var statearr_34191_36959 = state_34173__$1;
(statearr_34191_36959[(2)] = null);

(statearr_34191_36959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (6))){
var state_34173__$1 = state_34173;
var statearr_34192_36961 = state_34173__$1;
(statearr_34192_36961[(2)] = null);

(statearr_34192_36961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (7))){
var inst_34169 = (state_34173[(2)]);
var state_34173__$1 = state_34173;
var statearr_34194_36962 = state_34173__$1;
(statearr_34194_36962[(2)] = inst_34169);

(statearr_34194_36962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36914,c__33582__auto___36951,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async))
;
return ((function (__36914,switch__33064__auto__,c__33582__auto___36951,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0 = (function (){
var statearr_34195 = [null,null,null,null,null,null,null];
(statearr_34195[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__);

(statearr_34195[(1)] = (1));

return statearr_34195;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1 = (function (state_34173){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_34173);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e34199){var ex__33068__auto__ = e34199;
var statearr_34200_36964 = state_34173;
(statearr_34200_36964[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_34173[(4)]))){
var statearr_34203_36968 = state_34173;
(statearr_34203_36968[(1)] = cljs.core.first((state_34173[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36969 = state_34173;
state_34173 = G__36969;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__ = function(state_34173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1.call(this,state_34173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__;
})()
;})(__36914,switch__33064__auto__,c__33582__auto___36951,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async))
})();
var state__33585__auto__ = (function (){var statearr_34208 = f__33584__auto__();
(statearr_34208[(6)] = c__33582__auto___36951);

return statearr_34208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
});})(__36914,c__33582__auto___36951,G__34109_36915,G__34109_36916__$1,n__5636__auto___36913,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34109_36916__$1)].join('')));

}

var G__36970 = (__36914 + (1));
__36914 = G__36970;
continue;
} else {
}
break;
}

var c__33582__auto___36971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_34241){
var state_val_34242 = (state_34241[(1)]);
if((state_val_34242 === (7))){
var inst_34236 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
var statearr_34254_36972 = state_34241__$1;
(statearr_34254_36972[(2)] = inst_34236);

(statearr_34254_36972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (1))){
var state_34241__$1 = state_34241;
var statearr_34257_36973 = state_34241__$1;
(statearr_34257_36973[(2)] = null);

(statearr_34257_36973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (4))){
var inst_34215 = (state_34241[(7)]);
var inst_34215__$1 = (state_34241[(2)]);
var inst_34216 = (inst_34215__$1 == null);
var state_34241__$1 = (function (){var statearr_34258 = state_34241;
(statearr_34258[(7)] = inst_34215__$1);

return statearr_34258;
})();
if(cljs.core.truth_(inst_34216)){
var statearr_34259_36975 = state_34241__$1;
(statearr_34259_36975[(1)] = (5));

} else {
var statearr_34260_36976 = state_34241__$1;
(statearr_34260_36976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (6))){
var inst_34222 = (state_34241[(8)]);
var inst_34215 = (state_34241[(7)]);
var inst_34222__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34227 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34228 = [inst_34215,inst_34222__$1];
var inst_34229 = (new cljs.core.PersistentVector(null,2,(5),inst_34227,inst_34228,null));
var state_34241__$1 = (function (){var statearr_34261 = state_34241;
(statearr_34261[(8)] = inst_34222__$1);

return statearr_34261;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34241__$1,(8),jobs,inst_34229);
} else {
if((state_val_34242 === (3))){
var inst_34238 = (state_34241[(2)]);
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34241__$1,inst_34238);
} else {
if((state_val_34242 === (2))){
var state_34241__$1 = state_34241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34241__$1,(4),from);
} else {
if((state_val_34242 === (9))){
var inst_34233 = (state_34241[(2)]);
var state_34241__$1 = (function (){var statearr_34263 = state_34241;
(statearr_34263[(9)] = inst_34233);

return statearr_34263;
})();
var statearr_34264_36979 = state_34241__$1;
(statearr_34264_36979[(2)] = null);

(statearr_34264_36979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (5))){
var inst_34219 = cljs.core.async.close_BANG_(jobs);
var state_34241__$1 = state_34241;
var statearr_34265_36980 = state_34241__$1;
(statearr_34265_36980[(2)] = inst_34219);

(statearr_34265_36980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34242 === (8))){
var inst_34222 = (state_34241[(8)]);
var inst_34231 = (state_34241[(2)]);
var state_34241__$1 = (function (){var statearr_34266 = state_34241;
(statearr_34266[(10)] = inst_34231);

return statearr_34266;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34241__$1,(9),results,inst_34222);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0 = (function (){
var statearr_34271 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__);

(statearr_34271[(1)] = (1));

return statearr_34271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1 = (function (state_34241){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_34241);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e34272){var ex__33068__auto__ = e34272;
var statearr_34273_36983 = state_34241;
(statearr_34273_36983[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_34241[(4)]))){
var statearr_34275_36986 = state_34241;
(statearr_34275_36986[(1)] = cljs.core.first((state_34241[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36987 = state_34241;
state_34241 = G__36987;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__ = function(state_34241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1.call(this,state_34241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_34278 = f__33584__auto__();
(statearr_34278[(6)] = c__33582__auto___36971);

return statearr_34278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


var c__33582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_34319){
var state_val_34320 = (state_34319[(1)]);
if((state_val_34320 === (7))){
var inst_34315 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34332_36990 = state_34319__$1;
(statearr_34332_36990[(2)] = inst_34315);

(statearr_34332_36990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (20))){
var state_34319__$1 = state_34319;
var statearr_34345_36991 = state_34319__$1;
(statearr_34345_36991[(2)] = null);

(statearr_34345_36991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (1))){
var state_34319__$1 = state_34319;
var statearr_34349_36996 = state_34319__$1;
(statearr_34349_36996[(2)] = null);

(statearr_34349_36996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (4))){
var inst_34282 = (state_34319[(7)]);
var inst_34282__$1 = (state_34319[(2)]);
var inst_34284 = (inst_34282__$1 == null);
var state_34319__$1 = (function (){var statearr_34350 = state_34319;
(statearr_34350[(7)] = inst_34282__$1);

return statearr_34350;
})();
if(cljs.core.truth_(inst_34284)){
var statearr_34351_36998 = state_34319__$1;
(statearr_34351_36998[(1)] = (5));

} else {
var statearr_34352_36999 = state_34319__$1;
(statearr_34352_36999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (15))){
var inst_34297 = (state_34319[(8)]);
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34319__$1,(18),to,inst_34297);
} else {
if((state_val_34320 === (21))){
var inst_34310 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34354_37001 = state_34319__$1;
(statearr_34354_37001[(2)] = inst_34310);

(statearr_34354_37001[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (13))){
var inst_34312 = (state_34319[(2)]);
var state_34319__$1 = (function (){var statearr_34357 = state_34319;
(statearr_34357[(9)] = inst_34312);

return statearr_34357;
})();
var statearr_34358_37002 = state_34319__$1;
(statearr_34358_37002[(2)] = null);

(statearr_34358_37002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (6))){
var inst_34282 = (state_34319[(7)]);
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34319__$1,(11),inst_34282);
} else {
if((state_val_34320 === (17))){
var inst_34305 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
if(cljs.core.truth_(inst_34305)){
var statearr_34359_37004 = state_34319__$1;
(statearr_34359_37004[(1)] = (19));

} else {
var statearr_34361_37005 = state_34319__$1;
(statearr_34361_37005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (3))){
var inst_34317 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34319__$1,inst_34317);
} else {
if((state_val_34320 === (12))){
var inst_34293 = (state_34319[(10)]);
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34319__$1,(14),inst_34293);
} else {
if((state_val_34320 === (2))){
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34319__$1,(4),results);
} else {
if((state_val_34320 === (19))){
var state_34319__$1 = state_34319;
var statearr_34364_37016 = state_34319__$1;
(statearr_34364_37016[(2)] = null);

(statearr_34364_37016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (11))){
var inst_34293 = (state_34319[(2)]);
var state_34319__$1 = (function (){var statearr_34366 = state_34319;
(statearr_34366[(10)] = inst_34293);

return statearr_34366;
})();
var statearr_34367_37018 = state_34319__$1;
(statearr_34367_37018[(2)] = null);

(statearr_34367_37018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (9))){
var state_34319__$1 = state_34319;
var statearr_34368_37019 = state_34319__$1;
(statearr_34368_37019[(2)] = null);

(statearr_34368_37019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (5))){
var state_34319__$1 = state_34319;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34370_37021 = state_34319__$1;
(statearr_34370_37021[(1)] = (8));

} else {
var statearr_34371_37022 = state_34319__$1;
(statearr_34371_37022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (14))){
var inst_34297 = (state_34319[(8)]);
var inst_34299 = (state_34319[(11)]);
var inst_34297__$1 = (state_34319[(2)]);
var inst_34298 = (inst_34297__$1 == null);
var inst_34299__$1 = cljs.core.not(inst_34298);
var state_34319__$1 = (function (){var statearr_34372 = state_34319;
(statearr_34372[(8)] = inst_34297__$1);

(statearr_34372[(11)] = inst_34299__$1);

return statearr_34372;
})();
if(inst_34299__$1){
var statearr_34373_37026 = state_34319__$1;
(statearr_34373_37026[(1)] = (15));

} else {
var statearr_34374_37028 = state_34319__$1;
(statearr_34374_37028[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (16))){
var inst_34299 = (state_34319[(11)]);
var state_34319__$1 = state_34319;
var statearr_34375_37029 = state_34319__$1;
(statearr_34375_37029[(2)] = inst_34299);

(statearr_34375_37029[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (10))){
var inst_34290 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34376_37030 = state_34319__$1;
(statearr_34376_37030[(2)] = inst_34290);

(statearr_34376_37030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (18))){
var inst_34302 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34378_37035 = state_34319__$1;
(statearr_34378_37035[(2)] = inst_34302);

(statearr_34378_37035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (8))){
var inst_34287 = cljs.core.async.close_BANG_(to);
var state_34319__$1 = state_34319;
var statearr_34379_37036 = state_34319__$1;
(statearr_34379_37036[(2)] = inst_34287);

(statearr_34379_37036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0 = (function (){
var statearr_34383 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__);

(statearr_34383[(1)] = (1));

return statearr_34383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1 = (function (state_34319){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_34319);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e34384){var ex__33068__auto__ = e34384;
var statearr_34386_37040 = state_34319;
(statearr_34386_37040[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_34319[(4)]))){
var statearr_34387_37041 = state_34319;
(statearr_34387_37041[(1)] = cljs.core.first((state_34319[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37042 = state_34319;
state_34319 = G__37042;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__ = function(state_34319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1.call(this,state_34319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33065__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_34392 = f__33584__auto__();
(statearr_34392[(6)] = c__33582__auto__);

return statearr_34392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));

return c__33582__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34402 = arguments.length;
switch (G__34402) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34414 = arguments.length;
switch (G__34414) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34427 = arguments.length;
switch (G__34427) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33582__auto___37050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_34464){
var state_val_34465 = (state_34464[(1)]);
if((state_val_34465 === (7))){
var inst_34460 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
var statearr_34468_37055 = state_34464__$1;
(statearr_34468_37055[(2)] = inst_34460);

(statearr_34468_37055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (1))){
var state_34464__$1 = state_34464;
var statearr_34475_37057 = state_34464__$1;
(statearr_34475_37057[(2)] = null);

(statearr_34475_37057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (4))){
var inst_34437 = (state_34464[(7)]);
var inst_34437__$1 = (state_34464[(2)]);
var inst_34438 = (inst_34437__$1 == null);
var state_34464__$1 = (function (){var statearr_34476 = state_34464;
(statearr_34476[(7)] = inst_34437__$1);

return statearr_34476;
})();
if(cljs.core.truth_(inst_34438)){
var statearr_34477_37058 = state_34464__$1;
(statearr_34477_37058[(1)] = (5));

} else {
var statearr_34478_37059 = state_34464__$1;
(statearr_34478_37059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (13))){
var state_34464__$1 = state_34464;
var statearr_34484_37060 = state_34464__$1;
(statearr_34484_37060[(2)] = null);

(statearr_34484_37060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (6))){
var inst_34437 = (state_34464[(7)]);
var inst_34443 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34437) : p.call(null,inst_34437));
var state_34464__$1 = state_34464;
if(cljs.core.truth_(inst_34443)){
var statearr_34492_37073 = state_34464__$1;
(statearr_34492_37073[(1)] = (9));

} else {
var statearr_34494_37075 = state_34464__$1;
(statearr_34494_37075[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (3))){
var inst_34462 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34464__$1,inst_34462);
} else {
if((state_val_34465 === (12))){
var state_34464__$1 = state_34464;
var statearr_34495_37077 = state_34464__$1;
(statearr_34495_37077[(2)] = null);

(statearr_34495_37077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (2))){
var state_34464__$1 = state_34464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34464__$1,(4),ch);
} else {
if((state_val_34465 === (11))){
var inst_34437 = (state_34464[(7)]);
var inst_34451 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34464__$1,(8),inst_34451,inst_34437);
} else {
if((state_val_34465 === (9))){
var state_34464__$1 = state_34464;
var statearr_34500_37080 = state_34464__$1;
(statearr_34500_37080[(2)] = tc);

(statearr_34500_37080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (5))){
var inst_34440 = cljs.core.async.close_BANG_(tc);
var inst_34441 = cljs.core.async.close_BANG_(fc);
var state_34464__$1 = (function (){var statearr_34501 = state_34464;
(statearr_34501[(8)] = inst_34440);

return statearr_34501;
})();
var statearr_34502_37085 = state_34464__$1;
(statearr_34502_37085[(2)] = inst_34441);

(statearr_34502_37085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (14))){
var inst_34458 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
var statearr_34503_37089 = state_34464__$1;
(statearr_34503_37089[(2)] = inst_34458);

(statearr_34503_37089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (10))){
var state_34464__$1 = state_34464;
var statearr_34505_37090 = state_34464__$1;
(statearr_34505_37090[(2)] = fc);

(statearr_34505_37090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (8))){
var inst_34453 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
if(cljs.core.truth_(inst_34453)){
var statearr_34509_37092 = state_34464__$1;
(statearr_34509_37092[(1)] = (12));

} else {
var statearr_34510_37093 = state_34464__$1;
(statearr_34510_37093[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_34513 = [null,null,null,null,null,null,null,null,null];
(statearr_34513[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_34513[(1)] = (1));

return statearr_34513;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_34464){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_34464);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e34517){var ex__33068__auto__ = e34517;
var statearr_34518_37097 = state_34464;
(statearr_34518_37097[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_34464[(4)]))){
var statearr_34519_37098 = state_34464;
(statearr_34519_37098[(1)] = cljs.core.first((state_34464[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37099 = state_34464;
state_34464 = G__37099;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_34464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_34464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_34521 = f__33584__auto__();
(statearr_34521[(6)] = c__33582__auto___37050);

return statearr_34521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_34544){
var state_val_34545 = (state_34544[(1)]);
if((state_val_34545 === (7))){
var inst_34540 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
var statearr_34546_37106 = state_34544__$1;
(statearr_34546_37106[(2)] = inst_34540);

(statearr_34546_37106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (1))){
var inst_34522 = init;
var inst_34523 = inst_34522;
var state_34544__$1 = (function (){var statearr_34547 = state_34544;
(statearr_34547[(7)] = inst_34523);

return statearr_34547;
})();
var statearr_34548_37110 = state_34544__$1;
(statearr_34548_37110[(2)] = null);

(statearr_34548_37110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (4))){
var inst_34526 = (state_34544[(8)]);
var inst_34526__$1 = (state_34544[(2)]);
var inst_34527 = (inst_34526__$1 == null);
var state_34544__$1 = (function (){var statearr_34550 = state_34544;
(statearr_34550[(8)] = inst_34526__$1);

return statearr_34550;
})();
if(cljs.core.truth_(inst_34527)){
var statearr_34552_37111 = state_34544__$1;
(statearr_34552_37111[(1)] = (5));

} else {
var statearr_34554_37112 = state_34544__$1;
(statearr_34554_37112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (6))){
var inst_34523 = (state_34544[(7)]);
var inst_34526 = (state_34544[(8)]);
var inst_34530 = (state_34544[(9)]);
var inst_34530__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34523,inst_34526) : f.call(null,inst_34523,inst_34526));
var inst_34532 = cljs.core.reduced_QMARK_(inst_34530__$1);
var state_34544__$1 = (function (){var statearr_34555 = state_34544;
(statearr_34555[(9)] = inst_34530__$1);

return statearr_34555;
})();
if(inst_34532){
var statearr_34556_37131 = state_34544__$1;
(statearr_34556_37131[(1)] = (8));

} else {
var statearr_34557_37132 = state_34544__$1;
(statearr_34557_37132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (3))){
var inst_34542 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34544__$1,inst_34542);
} else {
if((state_val_34545 === (2))){
var state_34544__$1 = state_34544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34544__$1,(4),ch);
} else {
if((state_val_34545 === (9))){
var inst_34530 = (state_34544[(9)]);
var inst_34523 = inst_34530;
var state_34544__$1 = (function (){var statearr_34558 = state_34544;
(statearr_34558[(7)] = inst_34523);

return statearr_34558;
})();
var statearr_34559_37147 = state_34544__$1;
(statearr_34559_37147[(2)] = null);

(statearr_34559_37147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (5))){
var inst_34523 = (state_34544[(7)]);
var state_34544__$1 = state_34544;
var statearr_34561_37152 = state_34544__$1;
(statearr_34561_37152[(2)] = inst_34523);

(statearr_34561_37152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (10))){
var inst_34538 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
var statearr_34562_37157 = state_34544__$1;
(statearr_34562_37157[(2)] = inst_34538);

(statearr_34562_37157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (8))){
var inst_34530 = (state_34544[(9)]);
var inst_34534 = cljs.core.deref(inst_34530);
var state_34544__$1 = state_34544;
var statearr_34564_37165 = state_34544__$1;
(statearr_34564_37165[(2)] = inst_34534);

(statearr_34564_37165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33065__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33065__auto____0 = (function (){
var statearr_34567 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34567[(0)] = cljs$core$async$reduce_$_state_machine__33065__auto__);

(statearr_34567[(1)] = (1));

return statearr_34567;
});
var cljs$core$async$reduce_$_state_machine__33065__auto____1 = (function (state_34544){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_34544);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e34568){var ex__33068__auto__ = e34568;
var statearr_34569_37197 = state_34544;
(statearr_34569_37197[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_34544[(4)]))){
var statearr_34570_37202 = state_34544;
(statearr_34570_37202[(1)] = cljs.core.first((state_34544[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37210 = state_34544;
state_34544 = G__37210;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33065__auto__ = function(state_34544){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33065__auto____1.call(this,state_34544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33065__auto____0;
cljs$core$async$reduce_$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33065__auto____1;
return cljs$core$async$reduce_$_state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_34572 = f__33584__auto__();
(statearr_34572[(6)] = c__33582__auto__);

return statearr_34572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));

return c__33582__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_34578){
var state_val_34579 = (state_34578[(1)]);
if((state_val_34579 === (1))){
var inst_34573 = cljs.core.async.reduce(f__$1,init,ch);
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34578__$1,(2),inst_34573);
} else {
if((state_val_34579 === (2))){
var inst_34575 = (state_34578[(2)]);
var inst_34576 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34575) : f__$1.call(null,inst_34575));
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34578__$1,inst_34576);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33065__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33065__auto____0 = (function (){
var statearr_34583 = [null,null,null,null,null,null,null];
(statearr_34583[(0)] = cljs$core$async$transduce_$_state_machine__33065__auto__);

(statearr_34583[(1)] = (1));

return statearr_34583;
});
var cljs$core$async$transduce_$_state_machine__33065__auto____1 = (function (state_34578){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_34578);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e34584){var ex__33068__auto__ = e34584;
var statearr_34585_37222 = state_34578;
(statearr_34585_37222[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_34578[(4)]))){
var statearr_34586_37224 = state_34578;
(statearr_34586_37224[(1)] = cljs.core.first((state_34578[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37227 = state_34578;
state_34578 = G__37227;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33065__auto__ = function(state_34578){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33065__auto____1.call(this,state_34578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33065__auto____0;
cljs$core$async$transduce_$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33065__auto____1;
return cljs$core$async$transduce_$_state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_34588 = f__33584__auto__();
(statearr_34588[(6)] = c__33582__auto__);

return statearr_34588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));

return c__33582__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34593 = arguments.length;
switch (G__34593) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_34622){
var state_val_34623 = (state_34622[(1)]);
if((state_val_34623 === (7))){
var inst_34603 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34628_37237 = state_34622__$1;
(statearr_34628_37237[(2)] = inst_34603);

(statearr_34628_37237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (1))){
var inst_34597 = cljs.core.seq(coll);
var inst_34598 = inst_34597;
var state_34622__$1 = (function (){var statearr_34629 = state_34622;
(statearr_34629[(7)] = inst_34598);

return statearr_34629;
})();
var statearr_34630_37240 = state_34622__$1;
(statearr_34630_37240[(2)] = null);

(statearr_34630_37240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (4))){
var inst_34598 = (state_34622[(7)]);
var inst_34601 = cljs.core.first(inst_34598);
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34622__$1,(7),ch,inst_34601);
} else {
if((state_val_34623 === (13))){
var inst_34616 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34631_37241 = state_34622__$1;
(statearr_34631_37241[(2)] = inst_34616);

(statearr_34631_37241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (6))){
var inst_34606 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
if(cljs.core.truth_(inst_34606)){
var statearr_34634_37242 = state_34622__$1;
(statearr_34634_37242[(1)] = (8));

} else {
var statearr_34636_37243 = state_34622__$1;
(statearr_34636_37243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (3))){
var inst_34620 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34622__$1,inst_34620);
} else {
if((state_val_34623 === (12))){
var state_34622__$1 = state_34622;
var statearr_34640_37244 = state_34622__$1;
(statearr_34640_37244[(2)] = null);

(statearr_34640_37244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (2))){
var inst_34598 = (state_34622[(7)]);
var state_34622__$1 = state_34622;
if(cljs.core.truth_(inst_34598)){
var statearr_34641_37246 = state_34622__$1;
(statearr_34641_37246[(1)] = (4));

} else {
var statearr_34642_37247 = state_34622__$1;
(statearr_34642_37247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (11))){
var inst_34612 = cljs.core.async.close_BANG_(ch);
var state_34622__$1 = state_34622;
var statearr_34643_37248 = state_34622__$1;
(statearr_34643_37248[(2)] = inst_34612);

(statearr_34643_37248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (9))){
var state_34622__$1 = state_34622;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34644_37253 = state_34622__$1;
(statearr_34644_37253[(1)] = (11));

} else {
var statearr_34645_37255 = state_34622__$1;
(statearr_34645_37255[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (5))){
var inst_34598 = (state_34622[(7)]);
var state_34622__$1 = state_34622;
var statearr_34648_37258 = state_34622__$1;
(statearr_34648_37258[(2)] = inst_34598);

(statearr_34648_37258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (10))){
var inst_34618 = (state_34622[(2)]);
var state_34622__$1 = state_34622;
var statearr_34654_37263 = state_34622__$1;
(statearr_34654_37263[(2)] = inst_34618);

(statearr_34654_37263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34623 === (8))){
var inst_34598 = (state_34622[(7)]);
var inst_34608 = cljs.core.next(inst_34598);
var inst_34598__$1 = inst_34608;
var state_34622__$1 = (function (){var statearr_34655 = state_34622;
(statearr_34655[(7)] = inst_34598__$1);

return statearr_34655;
})();
var statearr_34656_37267 = state_34622__$1;
(statearr_34656_37267[(2)] = null);

(statearr_34656_37267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_34657 = [null,null,null,null,null,null,null,null];
(statearr_34657[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_34657[(1)] = (1));

return statearr_34657;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_34622){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_34622);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e34658){var ex__33068__auto__ = e34658;
var statearr_34659_37269 = state_34622;
(statearr_34659_37269[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_34622[(4)]))){
var statearr_34660_37270 = state_34622;
(statearr_34660_37270[(1)] = cljs.core.first((state_34622[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37271 = state_34622;
state_34622 = G__37271;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_34622){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_34622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_34662 = f__33584__auto__();
(statearr_34662[(6)] = c__33582__auto__);

return statearr_34662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));

return c__33582__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34667 = arguments.length;
switch (G__34667) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37278 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37278(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37288 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37288(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37290 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37290(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37292 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37292(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34688 = (function (ch,cs,meta34689){
this.ch = ch;
this.cs = cs;
this.meta34689 = meta34689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34690,meta34689__$1){
var self__ = this;
var _34690__$1 = this;
return (new cljs.core.async.t_cljs$core$async34688(self__.ch,self__.cs,meta34689__$1));
}));

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34690){
var self__ = this;
var _34690__$1 = this;
return self__.meta34689;
}));

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34688.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34689","meta34689",-1828872425,null)], null);
}));

(cljs.core.async.t_cljs$core$async34688.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34688");

(cljs.core.async.t_cljs$core$async34688.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34688");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34688.
 */
cljs.core.async.__GT_t_cljs$core$async34688 = (function cljs$core$async$__GT_t_cljs$core$async34688(ch,cs,meta34689){
return (new cljs.core.async.t_cljs$core$async34688(ch,cs,meta34689));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async34688(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33582__auto___37320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_34839){
var state_val_34840 = (state_34839[(1)]);
if((state_val_34840 === (7))){
var inst_34835 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34856_37323 = state_34839__$1;
(statearr_34856_37323[(2)] = inst_34835);

(statearr_34856_37323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (20))){
var inst_34733 = (state_34839[(7)]);
var inst_34746 = cljs.core.first(inst_34733);
var inst_34747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34746,(0),null);
var inst_34748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34746,(1),null);
var state_34839__$1 = (function (){var statearr_34860 = state_34839;
(statearr_34860[(8)] = inst_34747);

return statearr_34860;
})();
if(cljs.core.truth_(inst_34748)){
var statearr_34861_37328 = state_34839__$1;
(statearr_34861_37328[(1)] = (22));

} else {
var statearr_34862_37329 = state_34839__$1;
(statearr_34862_37329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (27))){
var inst_34778 = (state_34839[(9)]);
var inst_34776 = (state_34839[(10)]);
var inst_34701 = (state_34839[(11)]);
var inst_34783 = (state_34839[(12)]);
var inst_34783__$1 = cljs.core._nth(inst_34776,inst_34778);
var inst_34784 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34783__$1,inst_34701,done);
var state_34839__$1 = (function (){var statearr_34865 = state_34839;
(statearr_34865[(12)] = inst_34783__$1);

return statearr_34865;
})();
if(cljs.core.truth_(inst_34784)){
var statearr_34866_37330 = state_34839__$1;
(statearr_34866_37330[(1)] = (30));

} else {
var statearr_34867_37333 = state_34839__$1;
(statearr_34867_37333[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (1))){
var state_34839__$1 = state_34839;
var statearr_34869_37334 = state_34839__$1;
(statearr_34869_37334[(2)] = null);

(statearr_34869_37334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (24))){
var inst_34733 = (state_34839[(7)]);
var inst_34753 = (state_34839[(2)]);
var inst_34754 = cljs.core.next(inst_34733);
var inst_34710 = inst_34754;
var inst_34711 = null;
var inst_34712 = (0);
var inst_34713 = (0);
var state_34839__$1 = (function (){var statearr_34870 = state_34839;
(statearr_34870[(13)] = inst_34711);

(statearr_34870[(14)] = inst_34713);

(statearr_34870[(15)] = inst_34710);

(statearr_34870[(16)] = inst_34712);

(statearr_34870[(17)] = inst_34753);

return statearr_34870;
})();
var statearr_34872_37335 = state_34839__$1;
(statearr_34872_37335[(2)] = null);

(statearr_34872_37335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (39))){
var state_34839__$1 = state_34839;
var statearr_34876_37336 = state_34839__$1;
(statearr_34876_37336[(2)] = null);

(statearr_34876_37336[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (4))){
var inst_34701 = (state_34839[(11)]);
var inst_34701__$1 = (state_34839[(2)]);
var inst_34702 = (inst_34701__$1 == null);
var state_34839__$1 = (function (){var statearr_34880 = state_34839;
(statearr_34880[(11)] = inst_34701__$1);

return statearr_34880;
})();
if(cljs.core.truth_(inst_34702)){
var statearr_34881_37338 = state_34839__$1;
(statearr_34881_37338[(1)] = (5));

} else {
var statearr_34884_37339 = state_34839__$1;
(statearr_34884_37339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (15))){
var inst_34711 = (state_34839[(13)]);
var inst_34713 = (state_34839[(14)]);
var inst_34710 = (state_34839[(15)]);
var inst_34712 = (state_34839[(16)]);
var inst_34729 = (state_34839[(2)]);
var inst_34730 = (inst_34713 + (1));
var tmp34873 = inst_34711;
var tmp34874 = inst_34710;
var tmp34875 = inst_34712;
var inst_34710__$1 = tmp34874;
var inst_34711__$1 = tmp34873;
var inst_34712__$1 = tmp34875;
var inst_34713__$1 = inst_34730;
var state_34839__$1 = (function (){var statearr_34885 = state_34839;
(statearr_34885[(13)] = inst_34711__$1);

(statearr_34885[(14)] = inst_34713__$1);

(statearr_34885[(15)] = inst_34710__$1);

(statearr_34885[(16)] = inst_34712__$1);

(statearr_34885[(18)] = inst_34729);

return statearr_34885;
})();
var statearr_34886_37348 = state_34839__$1;
(statearr_34886_37348[(2)] = null);

(statearr_34886_37348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (21))){
var inst_34757 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34890_37349 = state_34839__$1;
(statearr_34890_37349[(2)] = inst_34757);

(statearr_34890_37349[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (31))){
var inst_34783 = (state_34839[(12)]);
var inst_34787 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34783);
var state_34839__$1 = state_34839;
var statearr_34891_37353 = state_34839__$1;
(statearr_34891_37353[(2)] = inst_34787);

(statearr_34891_37353[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (32))){
var inst_34775 = (state_34839[(19)]);
var inst_34778 = (state_34839[(9)]);
var inst_34776 = (state_34839[(10)]);
var inst_34777 = (state_34839[(20)]);
var inst_34789 = (state_34839[(2)]);
var inst_34792 = (inst_34778 + (1));
var tmp34887 = inst_34775;
var tmp34888 = inst_34776;
var tmp34889 = inst_34777;
var inst_34775__$1 = tmp34887;
var inst_34776__$1 = tmp34888;
var inst_34777__$1 = tmp34889;
var inst_34778__$1 = inst_34792;
var state_34839__$1 = (function (){var statearr_34895 = state_34839;
(statearr_34895[(19)] = inst_34775__$1);

(statearr_34895[(21)] = inst_34789);

(statearr_34895[(9)] = inst_34778__$1);

(statearr_34895[(10)] = inst_34776__$1);

(statearr_34895[(20)] = inst_34777__$1);

return statearr_34895;
})();
var statearr_34898_37359 = state_34839__$1;
(statearr_34898_37359[(2)] = null);

(statearr_34898_37359[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (40))){
var inst_34808 = (state_34839[(22)]);
var inst_34812 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34808);
var state_34839__$1 = state_34839;
var statearr_34899_37367 = state_34839__$1;
(statearr_34899_37367[(2)] = inst_34812);

(statearr_34899_37367[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (33))){
var inst_34797 = (state_34839[(23)]);
var inst_34799 = cljs.core.chunked_seq_QMARK_(inst_34797);
var state_34839__$1 = state_34839;
if(inst_34799){
var statearr_34903_37368 = state_34839__$1;
(statearr_34903_37368[(1)] = (36));

} else {
var statearr_34904_37369 = state_34839__$1;
(statearr_34904_37369[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (13))){
var inst_34723 = (state_34839[(24)]);
var inst_34726 = cljs.core.async.close_BANG_(inst_34723);
var state_34839__$1 = state_34839;
var statearr_34905_37376 = state_34839__$1;
(statearr_34905_37376[(2)] = inst_34726);

(statearr_34905_37376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (22))){
var inst_34747 = (state_34839[(8)]);
var inst_34750 = cljs.core.async.close_BANG_(inst_34747);
var state_34839__$1 = state_34839;
var statearr_34908_37380 = state_34839__$1;
(statearr_34908_37380[(2)] = inst_34750);

(statearr_34908_37380[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (36))){
var inst_34797 = (state_34839[(23)]);
var inst_34802 = cljs.core.chunk_first(inst_34797);
var inst_34803 = cljs.core.chunk_rest(inst_34797);
var inst_34804 = cljs.core.count(inst_34802);
var inst_34775 = inst_34803;
var inst_34776 = inst_34802;
var inst_34777 = inst_34804;
var inst_34778 = (0);
var state_34839__$1 = (function (){var statearr_34913 = state_34839;
(statearr_34913[(19)] = inst_34775);

(statearr_34913[(9)] = inst_34778);

(statearr_34913[(10)] = inst_34776);

(statearr_34913[(20)] = inst_34777);

return statearr_34913;
})();
var statearr_34915_37387 = state_34839__$1;
(statearr_34915_37387[(2)] = null);

(statearr_34915_37387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (41))){
var inst_34797 = (state_34839[(23)]);
var inst_34814 = (state_34839[(2)]);
var inst_34815 = cljs.core.next(inst_34797);
var inst_34775 = inst_34815;
var inst_34776 = null;
var inst_34777 = (0);
var inst_34778 = (0);
var state_34839__$1 = (function (){var statearr_34921 = state_34839;
(statearr_34921[(19)] = inst_34775);

(statearr_34921[(9)] = inst_34778);

(statearr_34921[(10)] = inst_34776);

(statearr_34921[(25)] = inst_34814);

(statearr_34921[(20)] = inst_34777);

return statearr_34921;
})();
var statearr_34922_37394 = state_34839__$1;
(statearr_34922_37394[(2)] = null);

(statearr_34922_37394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (43))){
var state_34839__$1 = state_34839;
var statearr_34923_37395 = state_34839__$1;
(statearr_34923_37395[(2)] = null);

(statearr_34923_37395[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (29))){
var inst_34823 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34927_37397 = state_34839__$1;
(statearr_34927_37397[(2)] = inst_34823);

(statearr_34927_37397[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (44))){
var inst_34832 = (state_34839[(2)]);
var state_34839__$1 = (function (){var statearr_34930 = state_34839;
(statearr_34930[(26)] = inst_34832);

return statearr_34930;
})();
var statearr_34933_37398 = state_34839__$1;
(statearr_34933_37398[(2)] = null);

(statearr_34933_37398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (6))){
var inst_34767 = (state_34839[(27)]);
var inst_34766 = cljs.core.deref(cs);
var inst_34767__$1 = cljs.core.keys(inst_34766);
var inst_34768 = cljs.core.count(inst_34767__$1);
var inst_34769 = cljs.core.reset_BANG_(dctr,inst_34768);
var inst_34774 = cljs.core.seq(inst_34767__$1);
var inst_34775 = inst_34774;
var inst_34776 = null;
var inst_34777 = (0);
var inst_34778 = (0);
var state_34839__$1 = (function (){var statearr_34934 = state_34839;
(statearr_34934[(19)] = inst_34775);

(statearr_34934[(28)] = inst_34769);

(statearr_34934[(27)] = inst_34767__$1);

(statearr_34934[(9)] = inst_34778);

(statearr_34934[(10)] = inst_34776);

(statearr_34934[(20)] = inst_34777);

return statearr_34934;
})();
var statearr_34937_37405 = state_34839__$1;
(statearr_34937_37405[(2)] = null);

(statearr_34937_37405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (28))){
var inst_34775 = (state_34839[(19)]);
var inst_34797 = (state_34839[(23)]);
var inst_34797__$1 = cljs.core.seq(inst_34775);
var state_34839__$1 = (function (){var statearr_34939 = state_34839;
(statearr_34939[(23)] = inst_34797__$1);

return statearr_34939;
})();
if(inst_34797__$1){
var statearr_34940_37413 = state_34839__$1;
(statearr_34940_37413[(1)] = (33));

} else {
var statearr_34941_37414 = state_34839__$1;
(statearr_34941_37414[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (25))){
var inst_34778 = (state_34839[(9)]);
var inst_34777 = (state_34839[(20)]);
var inst_34780 = (inst_34778 < inst_34777);
var inst_34781 = inst_34780;
var state_34839__$1 = state_34839;
if(cljs.core.truth_(inst_34781)){
var statearr_34949_37418 = state_34839__$1;
(statearr_34949_37418[(1)] = (27));

} else {
var statearr_34950_37419 = state_34839__$1;
(statearr_34950_37419[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (34))){
var state_34839__$1 = state_34839;
var statearr_34953_37420 = state_34839__$1;
(statearr_34953_37420[(2)] = null);

(statearr_34953_37420[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (17))){
var state_34839__$1 = state_34839;
var statearr_34956_37422 = state_34839__$1;
(statearr_34956_37422[(2)] = null);

(statearr_34956_37422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (3))){
var inst_34837 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34839__$1,inst_34837);
} else {
if((state_val_34840 === (12))){
var inst_34762 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34961_37424 = state_34839__$1;
(statearr_34961_37424[(2)] = inst_34762);

(statearr_34961_37424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (2))){
var state_34839__$1 = state_34839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34839__$1,(4),ch);
} else {
if((state_val_34840 === (23))){
var state_34839__$1 = state_34839;
var statearr_34963_37428 = state_34839__$1;
(statearr_34963_37428[(2)] = null);

(statearr_34963_37428[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (35))){
var inst_34821 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34965_37430 = state_34839__$1;
(statearr_34965_37430[(2)] = inst_34821);

(statearr_34965_37430[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (19))){
var inst_34733 = (state_34839[(7)]);
var inst_34737 = cljs.core.chunk_first(inst_34733);
var inst_34738 = cljs.core.chunk_rest(inst_34733);
var inst_34739 = cljs.core.count(inst_34737);
var inst_34710 = inst_34738;
var inst_34711 = inst_34737;
var inst_34712 = inst_34739;
var inst_34713 = (0);
var state_34839__$1 = (function (){var statearr_34966 = state_34839;
(statearr_34966[(13)] = inst_34711);

(statearr_34966[(14)] = inst_34713);

(statearr_34966[(15)] = inst_34710);

(statearr_34966[(16)] = inst_34712);

return statearr_34966;
})();
var statearr_34967_37431 = state_34839__$1;
(statearr_34967_37431[(2)] = null);

(statearr_34967_37431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (11))){
var inst_34710 = (state_34839[(15)]);
var inst_34733 = (state_34839[(7)]);
var inst_34733__$1 = cljs.core.seq(inst_34710);
var state_34839__$1 = (function (){var statearr_34974 = state_34839;
(statearr_34974[(7)] = inst_34733__$1);

return statearr_34974;
})();
if(inst_34733__$1){
var statearr_34975_37433 = state_34839__$1;
(statearr_34975_37433[(1)] = (16));

} else {
var statearr_34976_37434 = state_34839__$1;
(statearr_34976_37434[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (9))){
var inst_34764 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34978_37435 = state_34839__$1;
(statearr_34978_37435[(2)] = inst_34764);

(statearr_34978_37435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (5))){
var inst_34708 = cljs.core.deref(cs);
var inst_34709 = cljs.core.seq(inst_34708);
var inst_34710 = inst_34709;
var inst_34711 = null;
var inst_34712 = (0);
var inst_34713 = (0);
var state_34839__$1 = (function (){var statearr_34979 = state_34839;
(statearr_34979[(13)] = inst_34711);

(statearr_34979[(14)] = inst_34713);

(statearr_34979[(15)] = inst_34710);

(statearr_34979[(16)] = inst_34712);

return statearr_34979;
})();
var statearr_34980_37443 = state_34839__$1;
(statearr_34980_37443[(2)] = null);

(statearr_34980_37443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (14))){
var state_34839__$1 = state_34839;
var statearr_34982_37444 = state_34839__$1;
(statearr_34982_37444[(2)] = null);

(statearr_34982_37444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (45))){
var inst_34829 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34984_37445 = state_34839__$1;
(statearr_34984_37445[(2)] = inst_34829);

(statearr_34984_37445[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (26))){
var inst_34767 = (state_34839[(27)]);
var inst_34825 = (state_34839[(2)]);
var inst_34826 = cljs.core.seq(inst_34767);
var state_34839__$1 = (function (){var statearr_34985 = state_34839;
(statearr_34985[(29)] = inst_34825);

return statearr_34985;
})();
if(inst_34826){
var statearr_34986_37459 = state_34839__$1;
(statearr_34986_37459[(1)] = (42));

} else {
var statearr_34987_37460 = state_34839__$1;
(statearr_34987_37460[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (16))){
var inst_34733 = (state_34839[(7)]);
var inst_34735 = cljs.core.chunked_seq_QMARK_(inst_34733);
var state_34839__$1 = state_34839;
if(inst_34735){
var statearr_34989_37467 = state_34839__$1;
(statearr_34989_37467[(1)] = (19));

} else {
var statearr_34990_37469 = state_34839__$1;
(statearr_34990_37469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (38))){
var inst_34818 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_34993_37470 = state_34839__$1;
(statearr_34993_37470[(2)] = inst_34818);

(statearr_34993_37470[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (30))){
var state_34839__$1 = state_34839;
var statearr_34994_37471 = state_34839__$1;
(statearr_34994_37471[(2)] = null);

(statearr_34994_37471[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (10))){
var inst_34711 = (state_34839[(13)]);
var inst_34713 = (state_34839[(14)]);
var inst_34722 = cljs.core._nth(inst_34711,inst_34713);
var inst_34723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34722,(0),null);
var inst_34724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34722,(1),null);
var state_34839__$1 = (function (){var statearr_34996 = state_34839;
(statearr_34996[(24)] = inst_34723);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34724)){
var statearr_34997_37473 = state_34839__$1;
(statearr_34997_37473[(1)] = (13));

} else {
var statearr_34998_37474 = state_34839__$1;
(statearr_34998_37474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (18))){
var inst_34760 = (state_34839[(2)]);
var state_34839__$1 = state_34839;
var statearr_35000_37476 = state_34839__$1;
(statearr_35000_37476[(2)] = inst_34760);

(statearr_35000_37476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (42))){
var state_34839__$1 = state_34839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34839__$1,(45),dchan);
} else {
if((state_val_34840 === (37))){
var inst_34797 = (state_34839[(23)]);
var inst_34808 = (state_34839[(22)]);
var inst_34701 = (state_34839[(11)]);
var inst_34808__$1 = cljs.core.first(inst_34797);
var inst_34809 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34808__$1,inst_34701,done);
var state_34839__$1 = (function (){var statearr_35002 = state_34839;
(statearr_35002[(22)] = inst_34808__$1);

return statearr_35002;
})();
if(cljs.core.truth_(inst_34809)){
var statearr_35003_37478 = state_34839__$1;
(statearr_35003_37478[(1)] = (39));

} else {
var statearr_35004_37479 = state_34839__$1;
(statearr_35004_37479[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34840 === (8))){
var inst_34713 = (state_34839[(14)]);
var inst_34712 = (state_34839[(16)]);
var inst_34715 = (inst_34713 < inst_34712);
var inst_34716 = inst_34715;
var state_34839__$1 = state_34839;
if(cljs.core.truth_(inst_34716)){
var statearr_35005_37481 = state_34839__$1;
(statearr_35005_37481[(1)] = (10));

} else {
var statearr_35006_37482 = state_34839__$1;
(statearr_35006_37482[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33065__auto__ = null;
var cljs$core$async$mult_$_state_machine__33065__auto____0 = (function (){
var statearr_35011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35011[(0)] = cljs$core$async$mult_$_state_machine__33065__auto__);

(statearr_35011[(1)] = (1));

return statearr_35011;
});
var cljs$core$async$mult_$_state_machine__33065__auto____1 = (function (state_34839){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_34839);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e35012){var ex__33068__auto__ = e35012;
var statearr_35013_37484 = state_34839;
(statearr_35013_37484[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_34839[(4)]))){
var statearr_35014_37485 = state_34839;
(statearr_35014_37485[(1)] = cljs.core.first((state_34839[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37486 = state_34839;
state_34839 = G__37486;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33065__auto__ = function(state_34839){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33065__auto____1.call(this,state_34839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33065__auto____0;
cljs$core$async$mult_$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33065__auto____1;
return cljs$core$async$mult_$_state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_35018 = f__33584__auto__();
(statearr_35018[(6)] = c__33582__auto___37320);

return statearr_35018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35021 = arguments.length;
switch (G__35021) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_37499 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_37499(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37508 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_37508(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37509 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37509(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37510 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_37510(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37512 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37512(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37514 = arguments.length;
var i__5770__auto___37515 = (0);
while(true){
if((i__5770__auto___37515 < len__5769__auto___37514)){
args__5775__auto__.push((arguments[i__5770__auto___37515]));

var G__37516 = (i__5770__auto___37515 + (1));
i__5770__auto___37515 = G__37516;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35055){
var map__35056 = p__35055;
var map__35056__$1 = cljs.core.__destructure_map(map__35056);
var opts = map__35056__$1;
var statearr_35057_37517 = state;
(statearr_35057_37517[(1)] = cont_block);


var temp__5816__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35058_37523 = state;
(statearr_35058_37523[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5816__auto__)){
var cb = temp__5816__auto__;
var statearr_35065_37524 = state;
(statearr_35065_37524[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35051){
var G__35052 = cljs.core.first(seq35051);
var seq35051__$1 = cljs.core.next(seq35051);
var G__35053 = cljs.core.first(seq35051__$1);
var seq35051__$2 = cljs.core.next(seq35051__$1);
var G__35054 = cljs.core.first(seq35051__$2);
var seq35051__$3 = cljs.core.next(seq35051__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35052,G__35053,G__35054,seq35051__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35083 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35084){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35084 = meta35084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35085,meta35084__$1){
var self__ = this;
var _35085__$1 = this;
return (new cljs.core.async.t_cljs$core$async35083(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35084__$1));
}));

(cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35085){
var self__ = this;
var _35085__$1 = this;
return self__.meta35084;
}));

(cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35083.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35084","meta35084",763828155,null)], null);
}));

(cljs.core.async.t_cljs$core$async35083.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35083");

(cljs.core.async.t_cljs$core$async35083.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35083");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35083.
 */
cljs.core.async.__GT_t_cljs$core$async35083 = (function cljs$core$async$__GT_t_cljs$core$async35083(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35084){
return (new cljs.core.async.t_cljs$core$async35083(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35084));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async35083(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33582__auto___37543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_35188){
var state_val_35189 = (state_35188[(1)]);
if((state_val_35189 === (7))){
var inst_35137 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
if(cljs.core.truth_(inst_35137)){
var statearr_35192_37544 = state_35188__$1;
(statearr_35192_37544[(1)] = (8));

} else {
var statearr_35193_37549 = state_35188__$1;
(statearr_35193_37549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (20))){
var inst_35130 = (state_35188[(7)]);
var state_35188__$1 = state_35188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35188__$1,(23),out,inst_35130);
} else {
if((state_val_35189 === (1))){
var inst_35112 = calc_state();
var inst_35113 = cljs.core.__destructure_map(inst_35112);
var inst_35114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35113,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35113,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35113,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35117 = inst_35112;
var state_35188__$1 = (function (){var statearr_35197 = state_35188;
(statearr_35197[(8)] = inst_35116);

(statearr_35197[(9)] = inst_35115);

(statearr_35197[(10)] = inst_35117);

(statearr_35197[(11)] = inst_35114);

return statearr_35197;
})();
var statearr_35199_37558 = state_35188__$1;
(statearr_35199_37558[(2)] = null);

(statearr_35199_37558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (24))){
var inst_35120 = (state_35188[(12)]);
var inst_35117 = inst_35120;
var state_35188__$1 = (function (){var statearr_35202 = state_35188;
(statearr_35202[(10)] = inst_35117);

return statearr_35202;
})();
var statearr_35204_37562 = state_35188__$1;
(statearr_35204_37562[(2)] = null);

(statearr_35204_37562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (4))){
var inst_35130 = (state_35188[(7)]);
var inst_35132 = (state_35188[(13)]);
var inst_35129 = (state_35188[(2)]);
var inst_35130__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35129,(0),null);
var inst_35131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35129,(1),null);
var inst_35132__$1 = (inst_35130__$1 == null);
var state_35188__$1 = (function (){var statearr_35206 = state_35188;
(statearr_35206[(14)] = inst_35131);

(statearr_35206[(7)] = inst_35130__$1);

(statearr_35206[(13)] = inst_35132__$1);

return statearr_35206;
})();
if(cljs.core.truth_(inst_35132__$1)){
var statearr_35207_37565 = state_35188__$1;
(statearr_35207_37565[(1)] = (5));

} else {
var statearr_35208_37566 = state_35188__$1;
(statearr_35208_37566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (15))){
var inst_35155 = (state_35188[(15)]);
var inst_35121 = (state_35188[(16)]);
var inst_35155__$1 = cljs.core.empty_QMARK_(inst_35121);
var state_35188__$1 = (function (){var statearr_35212 = state_35188;
(statearr_35212[(15)] = inst_35155__$1);

return statearr_35212;
})();
if(inst_35155__$1){
var statearr_35213_37569 = state_35188__$1;
(statearr_35213_37569[(1)] = (17));

} else {
var statearr_35214_37570 = state_35188__$1;
(statearr_35214_37570[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (21))){
var inst_35120 = (state_35188[(12)]);
var inst_35117 = inst_35120;
var state_35188__$1 = (function (){var statearr_35216 = state_35188;
(statearr_35216[(10)] = inst_35117);

return statearr_35216;
})();
var statearr_35217_37574 = state_35188__$1;
(statearr_35217_37574[(2)] = null);

(statearr_35217_37574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (13))){
var inst_35146 = (state_35188[(2)]);
var inst_35149 = calc_state();
var inst_35117 = inst_35149;
var state_35188__$1 = (function (){var statearr_35220 = state_35188;
(statearr_35220[(17)] = inst_35146);

(statearr_35220[(10)] = inst_35117);

return statearr_35220;
})();
var statearr_35222_37577 = state_35188__$1;
(statearr_35222_37577[(2)] = null);

(statearr_35222_37577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (22))){
var inst_35176 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
var statearr_35223_37578 = state_35188__$1;
(statearr_35223_37578[(2)] = inst_35176);

(statearr_35223_37578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (6))){
var inst_35131 = (state_35188[(14)]);
var inst_35135 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35131,change);
var state_35188__$1 = state_35188;
var statearr_35225_37582 = state_35188__$1;
(statearr_35225_37582[(2)] = inst_35135);

(statearr_35225_37582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (25))){
var state_35188__$1 = state_35188;
var statearr_35226_37583 = state_35188__$1;
(statearr_35226_37583[(2)] = null);

(statearr_35226_37583[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (17))){
var inst_35131 = (state_35188[(14)]);
var inst_35122 = (state_35188[(18)]);
var inst_35157 = (inst_35122.cljs$core$IFn$_invoke$arity$1 ? inst_35122.cljs$core$IFn$_invoke$arity$1(inst_35131) : inst_35122.call(null,inst_35131));
var inst_35158 = cljs.core.not(inst_35157);
var state_35188__$1 = state_35188;
var statearr_35230_37584 = state_35188__$1;
(statearr_35230_37584[(2)] = inst_35158);

(statearr_35230_37584[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (3))){
var inst_35180 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35188__$1,inst_35180);
} else {
if((state_val_35189 === (12))){
var state_35188__$1 = state_35188;
var statearr_35233_37585 = state_35188__$1;
(statearr_35233_37585[(2)] = null);

(statearr_35233_37585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (2))){
var inst_35120 = (state_35188[(12)]);
var inst_35117 = (state_35188[(10)]);
var inst_35120__$1 = cljs.core.__destructure_map(inst_35117);
var inst_35121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35120__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35120__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35120__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35188__$1 = (function (){var statearr_35238 = state_35188;
(statearr_35238[(18)] = inst_35122);

(statearr_35238[(12)] = inst_35120__$1);

(statearr_35238[(16)] = inst_35121);

return statearr_35238;
})();
return cljs.core.async.ioc_alts_BANG_(state_35188__$1,(4),inst_35123);
} else {
if((state_val_35189 === (23))){
var inst_35166 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
if(cljs.core.truth_(inst_35166)){
var statearr_35240_37599 = state_35188__$1;
(statearr_35240_37599[(1)] = (24));

} else {
var statearr_35244_37600 = state_35188__$1;
(statearr_35244_37600[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (19))){
var inst_35161 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
var statearr_35246_37602 = state_35188__$1;
(statearr_35246_37602[(2)] = inst_35161);

(statearr_35246_37602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (11))){
var inst_35131 = (state_35188[(14)]);
var inst_35143 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35131);
var state_35188__$1 = state_35188;
var statearr_35249_37603 = state_35188__$1;
(statearr_35249_37603[(2)] = inst_35143);

(statearr_35249_37603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (9))){
var inst_35131 = (state_35188[(14)]);
var inst_35121 = (state_35188[(16)]);
var inst_35152 = (state_35188[(19)]);
var inst_35152__$1 = (inst_35121.cljs$core$IFn$_invoke$arity$1 ? inst_35121.cljs$core$IFn$_invoke$arity$1(inst_35131) : inst_35121.call(null,inst_35131));
var state_35188__$1 = (function (){var statearr_35251 = state_35188;
(statearr_35251[(19)] = inst_35152__$1);

return statearr_35251;
})();
if(cljs.core.truth_(inst_35152__$1)){
var statearr_35252_37604 = state_35188__$1;
(statearr_35252_37604[(1)] = (14));

} else {
var statearr_35255_37605 = state_35188__$1;
(statearr_35255_37605[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (5))){
var inst_35132 = (state_35188[(13)]);
var state_35188__$1 = state_35188;
var statearr_35257_37606 = state_35188__$1;
(statearr_35257_37606[(2)] = inst_35132);

(statearr_35257_37606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (14))){
var inst_35152 = (state_35188[(19)]);
var state_35188__$1 = state_35188;
var statearr_35261_37607 = state_35188__$1;
(statearr_35261_37607[(2)] = inst_35152);

(statearr_35261_37607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (26))){
var inst_35171 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
var statearr_35263_37608 = state_35188__$1;
(statearr_35263_37608[(2)] = inst_35171);

(statearr_35263_37608[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (16))){
var inst_35163 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
if(cljs.core.truth_(inst_35163)){
var statearr_35264_37609 = state_35188__$1;
(statearr_35264_37609[(1)] = (20));

} else {
var statearr_35267_37610 = state_35188__$1;
(statearr_35267_37610[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (10))){
var inst_35178 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
var statearr_35268_37611 = state_35188__$1;
(statearr_35268_37611[(2)] = inst_35178);

(statearr_35268_37611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (18))){
var inst_35155 = (state_35188[(15)]);
var state_35188__$1 = state_35188;
var statearr_35272_37612 = state_35188__$1;
(statearr_35272_37612[(2)] = inst_35155);

(statearr_35272_37612[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (8))){
var inst_35130 = (state_35188[(7)]);
var inst_35141 = (inst_35130 == null);
var state_35188__$1 = state_35188;
if(cljs.core.truth_(inst_35141)){
var statearr_35273_37613 = state_35188__$1;
(statearr_35273_37613[(1)] = (11));

} else {
var statearr_35274_37614 = state_35188__$1;
(statearr_35274_37614[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33065__auto__ = null;
var cljs$core$async$mix_$_state_machine__33065__auto____0 = (function (){
var statearr_35277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35277[(0)] = cljs$core$async$mix_$_state_machine__33065__auto__);

(statearr_35277[(1)] = (1));

return statearr_35277;
});
var cljs$core$async$mix_$_state_machine__33065__auto____1 = (function (state_35188){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_35188);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e35280){var ex__33068__auto__ = e35280;
var statearr_35281_37615 = state_35188;
(statearr_35281_37615[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_35188[(4)]))){
var statearr_35283_37616 = state_35188;
(statearr_35283_37616[(1)] = cljs.core.first((state_35188[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37618 = state_35188;
state_35188 = G__37618;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33065__auto__ = function(state_35188){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33065__auto____1.call(this,state_35188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33065__auto____0;
cljs$core$async$mix_$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33065__auto____1;
return cljs$core$async$mix_$_state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_35285 = f__33584__auto__();
(statearr_35285[(6)] = c__33582__auto___37543);

return statearr_35285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37623 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37623(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37624 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37624(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37625 = (function() {
var G__37626 = null;
var G__37626__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37626__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37626 = function(p,v){
switch(arguments.length){
case 1:
return G__37626__1.call(this,p);
case 2:
return G__37626__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37626.cljs$core$IFn$_invoke$arity$1 = G__37626__1;
G__37626.cljs$core$IFn$_invoke$arity$2 = G__37626__2;
return G__37626;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35332 = arguments.length;
switch (G__35332) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37625(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37625(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35358 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35359){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35359 = meta35359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35360,meta35359__$1){
var self__ = this;
var _35360__$1 = this;
return (new cljs.core.async.t_cljs$core$async35358(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35359__$1));
}));

(cljs.core.async.t_cljs$core$async35358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35360){
var self__ = this;
var _35360__$1 = this;
return self__.meta35359;
}));

(cljs.core.async.t_cljs$core$async35358.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35358.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35358.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35358.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35358.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5816__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5816__auto__)){
var m = temp__5816__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35358.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35358.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35359","meta35359",-114558847,null)], null);
}));

(cljs.core.async.t_cljs$core$async35358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35358");

(cljs.core.async.t_cljs$core$async35358.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35358.
 */
cljs.core.async.__GT_t_cljs$core$async35358 = (function cljs$core$async$__GT_t_cljs$core$async35358(ch,topic_fn,buf_fn,mults,ensure_mult,meta35359){
return (new cljs.core.async.t_cljs$core$async35358(ch,topic_fn,buf_fn,mults,ensure_mult,meta35359));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35348 = arguments.length;
switch (G__35348) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35341_SHARP_){
if(cljs.core.truth_((p1__35341_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35341_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35341_SHARP_.call(null,topic)))){
return p1__35341_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35341_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async35358(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33582__auto___37665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_35473){
var state_val_35474 = (state_35473[(1)]);
if((state_val_35474 === (7))){
var inst_35467 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35480_37666 = state_35473__$1;
(statearr_35480_37666[(2)] = inst_35467);

(statearr_35480_37666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (20))){
var state_35473__$1 = state_35473;
var statearr_35482_37667 = state_35473__$1;
(statearr_35482_37667[(2)] = null);

(statearr_35482_37667[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (1))){
var state_35473__$1 = state_35473;
var statearr_35487_37668 = state_35473__$1;
(statearr_35487_37668[(2)] = null);

(statearr_35487_37668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (24))){
var inst_35447 = (state_35473[(7)]);
var inst_35457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35447);
var state_35473__$1 = state_35473;
var statearr_35494_37669 = state_35473__$1;
(statearr_35494_37669[(2)] = inst_35457);

(statearr_35494_37669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (4))){
var inst_35393 = (state_35473[(8)]);
var inst_35393__$1 = (state_35473[(2)]);
var inst_35394 = (inst_35393__$1 == null);
var state_35473__$1 = (function (){var statearr_35499 = state_35473;
(statearr_35499[(8)] = inst_35393__$1);

return statearr_35499;
})();
if(cljs.core.truth_(inst_35394)){
var statearr_35500_37673 = state_35473__$1;
(statearr_35500_37673[(1)] = (5));

} else {
var statearr_35501_37674 = state_35473__$1;
(statearr_35501_37674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (15))){
var inst_35441 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35503_37675 = state_35473__$1;
(statearr_35503_37675[(2)] = inst_35441);

(statearr_35503_37675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (21))){
var inst_35464 = (state_35473[(2)]);
var state_35473__$1 = (function (){var statearr_35506 = state_35473;
(statearr_35506[(9)] = inst_35464);

return statearr_35506;
})();
var statearr_35508_37676 = state_35473__$1;
(statearr_35508_37676[(2)] = null);

(statearr_35508_37676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (13))){
var inst_35422 = (state_35473[(10)]);
var inst_35424 = cljs.core.chunked_seq_QMARK_(inst_35422);
var state_35473__$1 = state_35473;
if(inst_35424){
var statearr_35512_37678 = state_35473__$1;
(statearr_35512_37678[(1)] = (16));

} else {
var statearr_35513_37679 = state_35473__$1;
(statearr_35513_37679[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (22))){
var inst_35453 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35453)){
var statearr_35519_37681 = state_35473__$1;
(statearr_35519_37681[(1)] = (23));

} else {
var statearr_35523_37682 = state_35473__$1;
(statearr_35523_37682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (6))){
var inst_35447 = (state_35473[(7)]);
var inst_35449 = (state_35473[(11)]);
var inst_35393 = (state_35473[(8)]);
var inst_35447__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35393) : topic_fn.call(null,inst_35393));
var inst_35448 = cljs.core.deref(mults);
var inst_35449__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35448,inst_35447__$1);
var state_35473__$1 = (function (){var statearr_35528 = state_35473;
(statearr_35528[(7)] = inst_35447__$1);

(statearr_35528[(11)] = inst_35449__$1);

return statearr_35528;
})();
if(cljs.core.truth_(inst_35449__$1)){
var statearr_35529_37683 = state_35473__$1;
(statearr_35529_37683[(1)] = (19));

} else {
var statearr_35530_37684 = state_35473__$1;
(statearr_35530_37684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (25))){
var inst_35460 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35532_37686 = state_35473__$1;
(statearr_35532_37686[(2)] = inst_35460);

(statearr_35532_37686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (17))){
var inst_35422 = (state_35473[(10)]);
var inst_35431 = cljs.core.first(inst_35422);
var inst_35433 = cljs.core.async.muxch_STAR_(inst_35431);
var inst_35434 = cljs.core.async.close_BANG_(inst_35433);
var inst_35435 = cljs.core.next(inst_35422);
var inst_35404 = inst_35435;
var inst_35405 = null;
var inst_35406 = (0);
var inst_35407 = (0);
var state_35473__$1 = (function (){var statearr_35539 = state_35473;
(statearr_35539[(12)] = inst_35434);

(statearr_35539[(13)] = inst_35407);

(statearr_35539[(14)] = inst_35404);

(statearr_35539[(15)] = inst_35405);

(statearr_35539[(16)] = inst_35406);

return statearr_35539;
})();
var statearr_35546_37687 = state_35473__$1;
(statearr_35546_37687[(2)] = null);

(statearr_35546_37687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (3))){
var inst_35469 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35473__$1,inst_35469);
} else {
if((state_val_35474 === (12))){
var inst_35443 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35552_37688 = state_35473__$1;
(statearr_35552_37688[(2)] = inst_35443);

(statearr_35552_37688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (2))){
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35473__$1,(4),ch);
} else {
if((state_val_35474 === (23))){
var state_35473__$1 = state_35473;
var statearr_35557_37689 = state_35473__$1;
(statearr_35557_37689[(2)] = null);

(statearr_35557_37689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (19))){
var inst_35449 = (state_35473[(11)]);
var inst_35393 = (state_35473[(8)]);
var inst_35451 = cljs.core.async.muxch_STAR_(inst_35449);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35473__$1,(22),inst_35451,inst_35393);
} else {
if((state_val_35474 === (11))){
var inst_35422 = (state_35473[(10)]);
var inst_35404 = (state_35473[(14)]);
var inst_35422__$1 = cljs.core.seq(inst_35404);
var state_35473__$1 = (function (){var statearr_35566 = state_35473;
(statearr_35566[(10)] = inst_35422__$1);

return statearr_35566;
})();
if(inst_35422__$1){
var statearr_35567_37690 = state_35473__$1;
(statearr_35567_37690[(1)] = (13));

} else {
var statearr_35568_37691 = state_35473__$1;
(statearr_35568_37691[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (9))){
var inst_35445 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35571_37692 = state_35473__$1;
(statearr_35571_37692[(2)] = inst_35445);

(statearr_35571_37692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (5))){
var inst_35401 = cljs.core.deref(mults);
var inst_35402 = cljs.core.vals(inst_35401);
var inst_35403 = cljs.core.seq(inst_35402);
var inst_35404 = inst_35403;
var inst_35405 = null;
var inst_35406 = (0);
var inst_35407 = (0);
var state_35473__$1 = (function (){var statearr_35574 = state_35473;
(statearr_35574[(13)] = inst_35407);

(statearr_35574[(14)] = inst_35404);

(statearr_35574[(15)] = inst_35405);

(statearr_35574[(16)] = inst_35406);

return statearr_35574;
})();
var statearr_35576_37694 = state_35473__$1;
(statearr_35576_37694[(2)] = null);

(statearr_35576_37694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (14))){
var state_35473__$1 = state_35473;
var statearr_35582_37697 = state_35473__$1;
(statearr_35582_37697[(2)] = null);

(statearr_35582_37697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (16))){
var inst_35422 = (state_35473[(10)]);
var inst_35426 = cljs.core.chunk_first(inst_35422);
var inst_35427 = cljs.core.chunk_rest(inst_35422);
var inst_35428 = cljs.core.count(inst_35426);
var inst_35404 = inst_35427;
var inst_35405 = inst_35426;
var inst_35406 = inst_35428;
var inst_35407 = (0);
var state_35473__$1 = (function (){var statearr_35586 = state_35473;
(statearr_35586[(13)] = inst_35407);

(statearr_35586[(14)] = inst_35404);

(statearr_35586[(15)] = inst_35405);

(statearr_35586[(16)] = inst_35406);

return statearr_35586;
})();
var statearr_35595_37703 = state_35473__$1;
(statearr_35595_37703[(2)] = null);

(statearr_35595_37703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (10))){
var inst_35407 = (state_35473[(13)]);
var inst_35404 = (state_35473[(14)]);
var inst_35405 = (state_35473[(15)]);
var inst_35406 = (state_35473[(16)]);
var inst_35413 = cljs.core._nth(inst_35405,inst_35407);
var inst_35414 = cljs.core.async.muxch_STAR_(inst_35413);
var inst_35415 = cljs.core.async.close_BANG_(inst_35414);
var inst_35418 = (inst_35407 + (1));
var tmp35579 = inst_35404;
var tmp35580 = inst_35405;
var tmp35581 = inst_35406;
var inst_35404__$1 = tmp35579;
var inst_35405__$1 = tmp35580;
var inst_35406__$1 = tmp35581;
var inst_35407__$1 = inst_35418;
var state_35473__$1 = (function (){var statearr_35603 = state_35473;
(statearr_35603[(17)] = inst_35415);

(statearr_35603[(13)] = inst_35407__$1);

(statearr_35603[(14)] = inst_35404__$1);

(statearr_35603[(15)] = inst_35405__$1);

(statearr_35603[(16)] = inst_35406__$1);

return statearr_35603;
})();
var statearr_35605_37708 = state_35473__$1;
(statearr_35605_37708[(2)] = null);

(statearr_35605_37708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (18))){
var inst_35438 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35606_37713 = state_35473__$1;
(statearr_35606_37713[(2)] = inst_35438);

(statearr_35606_37713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (8))){
var inst_35407 = (state_35473[(13)]);
var inst_35406 = (state_35473[(16)]);
var inst_35409 = (inst_35407 < inst_35406);
var inst_35410 = inst_35409;
var state_35473__$1 = state_35473;
if(cljs.core.truth_(inst_35410)){
var statearr_35613_37714 = state_35473__$1;
(statearr_35613_37714[(1)] = (10));

} else {
var statearr_35615_37715 = state_35473__$1;
(statearr_35615_37715[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_35620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35620[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_35620[(1)] = (1));

return statearr_35620;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_35473){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_35473);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e35621){var ex__33068__auto__ = e35621;
var statearr_35622_37719 = state_35473;
(statearr_35622_37719[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_35473[(4)]))){
var statearr_35623_37721 = state_35473;
(statearr_35623_37721[(1)] = cljs.core.first((state_35473[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37722 = state_35473;
state_35473 = G__37722;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_35473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_35473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_35628 = f__33584__auto__();
(statearr_35628[(6)] = c__33582__auto___37665);

return statearr_35628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35632 = arguments.length;
switch (G__35632) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35645 = arguments.length;
switch (G__35645) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35656 = arguments.length;
switch (G__35656) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33582__auto___37739 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_35720){
var state_val_35721 = (state_35720[(1)]);
if((state_val_35721 === (7))){
var state_35720__$1 = state_35720;
var statearr_35730_37741 = state_35720__$1;
(statearr_35730_37741[(2)] = null);

(statearr_35730_37741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (1))){
var state_35720__$1 = state_35720;
var statearr_35731_37742 = state_35720__$1;
(statearr_35731_37742[(2)] = null);

(statearr_35731_37742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (4))){
var inst_35665 = (state_35720[(7)]);
var inst_35664 = (state_35720[(8)]);
var inst_35667 = (inst_35665 < inst_35664);
var state_35720__$1 = state_35720;
if(cljs.core.truth_(inst_35667)){
var statearr_35732_37746 = state_35720__$1;
(statearr_35732_37746[(1)] = (6));

} else {
var statearr_35733_37747 = state_35720__$1;
(statearr_35733_37747[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (15))){
var inst_35705 = (state_35720[(9)]);
var inst_35710 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35705);
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35720__$1,(17),out,inst_35710);
} else {
if((state_val_35721 === (13))){
var inst_35705 = (state_35720[(9)]);
var inst_35705__$1 = (state_35720[(2)]);
var inst_35706 = cljs.core.some(cljs.core.nil_QMARK_,inst_35705__$1);
var state_35720__$1 = (function (){var statearr_35734 = state_35720;
(statearr_35734[(9)] = inst_35705__$1);

return statearr_35734;
})();
if(cljs.core.truth_(inst_35706)){
var statearr_35735_37754 = state_35720__$1;
(statearr_35735_37754[(1)] = (14));

} else {
var statearr_35736_37755 = state_35720__$1;
(statearr_35736_37755[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (6))){
var state_35720__$1 = state_35720;
var statearr_35737_37756 = state_35720__$1;
(statearr_35737_37756[(2)] = null);

(statearr_35737_37756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (17))){
var inst_35712 = (state_35720[(2)]);
var state_35720__$1 = (function (){var statearr_35746 = state_35720;
(statearr_35746[(10)] = inst_35712);

return statearr_35746;
})();
var statearr_35747_37757 = state_35720__$1;
(statearr_35747_37757[(2)] = null);

(statearr_35747_37757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (3))){
var inst_35718 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35720__$1,inst_35718);
} else {
if((state_val_35721 === (12))){
var _ = (function (){var statearr_35748 = state_35720;
(statearr_35748[(4)] = cljs.core.rest((state_35720[(4)])));

return statearr_35748;
})();
var state_35720__$1 = state_35720;
var ex35744 = (state_35720__$1[(2)]);
var statearr_35749_37758 = state_35720__$1;
(statearr_35749_37758[(5)] = ex35744);


if((ex35744 instanceof Object)){
var statearr_35750_37759 = state_35720__$1;
(statearr_35750_37759[(1)] = (11));

(statearr_35750_37759[(5)] = null);

} else {
throw ex35744;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (2))){
var inst_35663 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35664 = cnt;
var inst_35665 = (0);
var state_35720__$1 = (function (){var statearr_35754 = state_35720;
(statearr_35754[(7)] = inst_35665);

(statearr_35754[(11)] = inst_35663);

(statearr_35754[(8)] = inst_35664);

return statearr_35754;
})();
var statearr_35755_37764 = state_35720__$1;
(statearr_35755_37764[(2)] = null);

(statearr_35755_37764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (11))){
var inst_35681 = (state_35720[(2)]);
var inst_35682 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35720__$1 = (function (){var statearr_35756 = state_35720;
(statearr_35756[(12)] = inst_35681);

return statearr_35756;
})();
var statearr_35757_37769 = state_35720__$1;
(statearr_35757_37769[(2)] = inst_35682);

(statearr_35757_37769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (9))){
var inst_35665 = (state_35720[(7)]);
var _ = (function (){var statearr_35760 = state_35720;
(statearr_35760[(4)] = cljs.core.cons((12),(state_35720[(4)])));

return statearr_35760;
})();
var inst_35688 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35665) : chs__$1.call(null,inst_35665));
var inst_35689 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35665) : done.call(null,inst_35665));
var inst_35690 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35688,inst_35689);
var ___$1 = (function (){var statearr_35762 = state_35720;
(statearr_35762[(4)] = cljs.core.rest((state_35720[(4)])));

return statearr_35762;
})();
var state_35720__$1 = state_35720;
var statearr_35763_37779 = state_35720__$1;
(statearr_35763_37779[(2)] = inst_35690);

(statearr_35763_37779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (5))){
var inst_35700 = (state_35720[(2)]);
var state_35720__$1 = (function (){var statearr_35764 = state_35720;
(statearr_35764[(13)] = inst_35700);

return statearr_35764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35720__$1,(13),dchan);
} else {
if((state_val_35721 === (14))){
var inst_35708 = cljs.core.async.close_BANG_(out);
var state_35720__$1 = state_35720;
var statearr_35765_37780 = state_35720__$1;
(statearr_35765_37780[(2)] = inst_35708);

(statearr_35765_37780[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (16))){
var inst_35716 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35767_37781 = state_35720__$1;
(statearr_35767_37781[(2)] = inst_35716);

(statearr_35767_37781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (10))){
var inst_35665 = (state_35720[(7)]);
var inst_35693 = (state_35720[(2)]);
var inst_35694 = (inst_35665 + (1));
var inst_35665__$1 = inst_35694;
var state_35720__$1 = (function (){var statearr_35768 = state_35720;
(statearr_35768[(7)] = inst_35665__$1);

(statearr_35768[(14)] = inst_35693);

return statearr_35768;
})();
var statearr_35769_37782 = state_35720__$1;
(statearr_35769_37782[(2)] = null);

(statearr_35769_37782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35721 === (8))){
var inst_35698 = (state_35720[(2)]);
var state_35720__$1 = state_35720;
var statearr_35770_37783 = state_35720__$1;
(statearr_35770_37783[(2)] = inst_35698);

(statearr_35770_37783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_35771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35771[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_35771[(1)] = (1));

return statearr_35771;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_35720){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_35720);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e35772){var ex__33068__auto__ = e35772;
var statearr_35776_37784 = state_35720;
(statearr_35776_37784[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_35720[(4)]))){
var statearr_35777_37785 = state_35720;
(statearr_35777_37785[(1)] = cljs.core.first((state_35720[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37786 = state_35720;
state_35720 = G__37786;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_35720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_35720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_35781 = f__33584__auto__();
(statearr_35781[(6)] = c__33582__auto___37739);

return statearr_35781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35784 = arguments.length;
switch (G__35784) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33582__auto___37788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_35818){
var state_val_35819 = (state_35818[(1)]);
if((state_val_35819 === (7))){
var inst_35797 = (state_35818[(7)]);
var inst_35796 = (state_35818[(8)]);
var inst_35796__$1 = (state_35818[(2)]);
var inst_35797__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35796__$1,(0),null);
var inst_35798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35796__$1,(1),null);
var inst_35799 = (inst_35797__$1 == null);
var state_35818__$1 = (function (){var statearr_35821 = state_35818;
(statearr_35821[(7)] = inst_35797__$1);

(statearr_35821[(9)] = inst_35798);

(statearr_35821[(8)] = inst_35796__$1);

return statearr_35821;
})();
if(cljs.core.truth_(inst_35799)){
var statearr_35822_37789 = state_35818__$1;
(statearr_35822_37789[(1)] = (8));

} else {
var statearr_35823_37790 = state_35818__$1;
(statearr_35823_37790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (1))){
var inst_35786 = cljs.core.vec(chs);
var inst_35787 = inst_35786;
var state_35818__$1 = (function (){var statearr_35824 = state_35818;
(statearr_35824[(10)] = inst_35787);

return statearr_35824;
})();
var statearr_35825_37793 = state_35818__$1;
(statearr_35825_37793[(2)] = null);

(statearr_35825_37793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (4))){
var inst_35787 = (state_35818[(10)]);
var state_35818__$1 = state_35818;
return cljs.core.async.ioc_alts_BANG_(state_35818__$1,(7),inst_35787);
} else {
if((state_val_35819 === (6))){
var inst_35813 = (state_35818[(2)]);
var state_35818__$1 = state_35818;
var statearr_35827_37796 = state_35818__$1;
(statearr_35827_37796[(2)] = inst_35813);

(statearr_35827_37796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (3))){
var inst_35815 = (state_35818[(2)]);
var state_35818__$1 = state_35818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35818__$1,inst_35815);
} else {
if((state_val_35819 === (2))){
var inst_35787 = (state_35818[(10)]);
var inst_35789 = cljs.core.count(inst_35787);
var inst_35790 = (inst_35789 > (0));
var state_35818__$1 = state_35818;
if(cljs.core.truth_(inst_35790)){
var statearr_35830_37799 = state_35818__$1;
(statearr_35830_37799[(1)] = (4));

} else {
var statearr_35831_37800 = state_35818__$1;
(statearr_35831_37800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (11))){
var inst_35787 = (state_35818[(10)]);
var inst_35806 = (state_35818[(2)]);
var tmp35828 = inst_35787;
var inst_35787__$1 = tmp35828;
var state_35818__$1 = (function (){var statearr_35836 = state_35818;
(statearr_35836[(10)] = inst_35787__$1);

(statearr_35836[(11)] = inst_35806);

return statearr_35836;
})();
var statearr_35837_37801 = state_35818__$1;
(statearr_35837_37801[(2)] = null);

(statearr_35837_37801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (9))){
var inst_35797 = (state_35818[(7)]);
var state_35818__$1 = state_35818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35818__$1,(11),out,inst_35797);
} else {
if((state_val_35819 === (5))){
var inst_35811 = cljs.core.async.close_BANG_(out);
var state_35818__$1 = state_35818;
var statearr_35844_37809 = state_35818__$1;
(statearr_35844_37809[(2)] = inst_35811);

(statearr_35844_37809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (10))){
var inst_35809 = (state_35818[(2)]);
var state_35818__$1 = state_35818;
var statearr_35849_37811 = state_35818__$1;
(statearr_35849_37811[(2)] = inst_35809);

(statearr_35849_37811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35819 === (8))){
var inst_35797 = (state_35818[(7)]);
var inst_35787 = (state_35818[(10)]);
var inst_35798 = (state_35818[(9)]);
var inst_35796 = (state_35818[(8)]);
var inst_35801 = (function (){var cs = inst_35787;
var vec__35792 = inst_35796;
var v = inst_35797;
var c = inst_35798;
return (function (p1__35782_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35782_SHARP_);
});
})();
var inst_35802 = cljs.core.filterv(inst_35801,inst_35787);
var inst_35787__$1 = inst_35802;
var state_35818__$1 = (function (){var statearr_35854 = state_35818;
(statearr_35854[(10)] = inst_35787__$1);

return statearr_35854;
})();
var statearr_35855_37813 = state_35818__$1;
(statearr_35855_37813[(2)] = null);

(statearr_35855_37813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_35858 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35858[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_35858[(1)] = (1));

return statearr_35858;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_35818){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_35818);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e35859){var ex__33068__auto__ = e35859;
var statearr_35860_37814 = state_35818;
(statearr_35860_37814[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_35818[(4)]))){
var statearr_35861_37818 = state_35818;
(statearr_35861_37818[(1)] = cljs.core.first((state_35818[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37819 = state_35818;
state_35818 = G__37819;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_35818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_35818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_35862 = f__33584__auto__();
(statearr_35862[(6)] = c__33582__auto___37788);

return statearr_35862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35864 = arguments.length;
switch (G__35864) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33582__auto___37821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_35896){
var state_val_35897 = (state_35896[(1)]);
if((state_val_35897 === (7))){
var inst_35875 = (state_35896[(7)]);
var inst_35875__$1 = (state_35896[(2)]);
var inst_35876 = (inst_35875__$1 == null);
var inst_35877 = cljs.core.not(inst_35876);
var state_35896__$1 = (function (){var statearr_35910 = state_35896;
(statearr_35910[(7)] = inst_35875__$1);

return statearr_35910;
})();
if(inst_35877){
var statearr_35911_37822 = state_35896__$1;
(statearr_35911_37822[(1)] = (8));

} else {
var statearr_35912_37823 = state_35896__$1;
(statearr_35912_37823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (1))){
var inst_35870 = (0);
var state_35896__$1 = (function (){var statearr_35914 = state_35896;
(statearr_35914[(8)] = inst_35870);

return statearr_35914;
})();
var statearr_35915_37824 = state_35896__$1;
(statearr_35915_37824[(2)] = null);

(statearr_35915_37824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (4))){
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35896__$1,(7),ch);
} else {
if((state_val_35897 === (6))){
var inst_35891 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35921_37826 = state_35896__$1;
(statearr_35921_37826[(2)] = inst_35891);

(statearr_35921_37826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (3))){
var inst_35893 = (state_35896[(2)]);
var inst_35894 = cljs.core.async.close_BANG_(out);
var state_35896__$1 = (function (){var statearr_35924 = state_35896;
(statearr_35924[(9)] = inst_35893);

return statearr_35924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35896__$1,inst_35894);
} else {
if((state_val_35897 === (2))){
var inst_35870 = (state_35896[(8)]);
var inst_35872 = (inst_35870 < n);
var state_35896__$1 = state_35896;
if(cljs.core.truth_(inst_35872)){
var statearr_35928_37828 = state_35896__$1;
(statearr_35928_37828[(1)] = (4));

} else {
var statearr_35929_37829 = state_35896__$1;
(statearr_35929_37829[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (11))){
var inst_35870 = (state_35896[(8)]);
var inst_35880 = (state_35896[(2)]);
var inst_35884 = (inst_35870 + (1));
var inst_35870__$1 = inst_35884;
var state_35896__$1 = (function (){var statearr_35935 = state_35896;
(statearr_35935[(10)] = inst_35880);

(statearr_35935[(8)] = inst_35870__$1);

return statearr_35935;
})();
var statearr_35936_37830 = state_35896__$1;
(statearr_35936_37830[(2)] = null);

(statearr_35936_37830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (9))){
var state_35896__$1 = state_35896;
var statearr_35937_37831 = state_35896__$1;
(statearr_35937_37831[(2)] = null);

(statearr_35937_37831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (5))){
var state_35896__$1 = state_35896;
var statearr_35938_37832 = state_35896__$1;
(statearr_35938_37832[(2)] = null);

(statearr_35938_37832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (10))){
var inst_35888 = (state_35896[(2)]);
var state_35896__$1 = state_35896;
var statearr_35942_37833 = state_35896__$1;
(statearr_35942_37833[(2)] = inst_35888);

(statearr_35942_37833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35897 === (8))){
var inst_35875 = (state_35896[(7)]);
var state_35896__$1 = state_35896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35896__$1,(11),out,inst_35875);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_35948 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35948[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_35948[(1)] = (1));

return statearr_35948;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_35896){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_35896);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e35951){var ex__33068__auto__ = e35951;
var statearr_35952_37838 = state_35896;
(statearr_35952_37838[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_35896[(4)]))){
var statearr_35955_37839 = state_35896;
(statearr_35955_37839[(1)] = cljs.core.first((state_35896[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37840 = state_35896;
state_35896 = G__37840;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_35896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_35896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_35959 = f__33584__auto__();
(statearr_35959[(6)] = c__33582__auto___37821);

return statearr_35959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35997 = (function (f,ch,meta35977,_,fn1,meta35998){
this.f = f;
this.ch = ch;
this.meta35977 = meta35977;
this._ = _;
this.fn1 = fn1;
this.meta35998 = meta35998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35999,meta35998__$1){
var self__ = this;
var _35999__$1 = this;
return (new cljs.core.async.t_cljs$core$async35997(self__.f,self__.ch,self__.meta35977,self__._,self__.fn1,meta35998__$1));
}));

(cljs.core.async.t_cljs$core$async35997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35999){
var self__ = this;
var _35999__$1 = this;
return self__.meta35998;
}));

(cljs.core.async.t_cljs$core$async35997.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35997.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35969_SHARP_){
var G__36003 = (((p1__35969_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35969_SHARP_) : self__.f.call(null,p1__35969_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36003) : f1.call(null,G__36003));
});
}));

(cljs.core.async.t_cljs$core$async35997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35977","meta35977",1005808466,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35976","cljs.core.async/t_cljs$core$async35976",1168865238,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35998","meta35998",-543173714,null)], null);
}));

(cljs.core.async.t_cljs$core$async35997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35997");

(cljs.core.async.t_cljs$core$async35997.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35997.
 */
cljs.core.async.__GT_t_cljs$core$async35997 = (function cljs$core$async$__GT_t_cljs$core$async35997(f,ch,meta35977,_,fn1,meta35998){
return (new cljs.core.async.t_cljs$core$async35997(f,ch,meta35977,_,fn1,meta35998));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35976 = (function (f,ch,meta35977){
this.f = f;
this.ch = ch;
this.meta35977 = meta35977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35978,meta35977__$1){
var self__ = this;
var _35978__$1 = this;
return (new cljs.core.async.t_cljs$core$async35976(self__.f,self__.ch,meta35977__$1));
}));

(cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35978){
var self__ = this;
var _35978__$1 = this;
return self__.meta35977;
}));

(cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async35997(self__.f,self__.ch,self__.meta35977,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36008 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36008) : self__.f.call(null,G__36008));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35976.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35977","meta35977",1005808466,null)], null);
}));

(cljs.core.async.t_cljs$core$async35976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35976");

(cljs.core.async.t_cljs$core$async35976.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35976.
 */
cljs.core.async.__GT_t_cljs$core$async35976 = (function cljs$core$async$__GT_t_cljs$core$async35976(f,ch,meta35977){
return (new cljs.core.async.t_cljs$core$async35976(f,ch,meta35977));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35976(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36014 = (function (f,ch,meta36015){
this.f = f;
this.ch = ch;
this.meta36015 = meta36015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36016,meta36015__$1){
var self__ = this;
var _36016__$1 = this;
return (new cljs.core.async.t_cljs$core$async36014(self__.f,self__.ch,meta36015__$1));
}));

(cljs.core.async.t_cljs$core$async36014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36016){
var self__ = this;
var _36016__$1 = this;
return self__.meta36015;
}));

(cljs.core.async.t_cljs$core$async36014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36015","meta36015",-1173688775,null)], null);
}));

(cljs.core.async.t_cljs$core$async36014.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36014");

(cljs.core.async.t_cljs$core$async36014.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36014");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36014.
 */
cljs.core.async.__GT_t_cljs$core$async36014 = (function cljs$core$async$__GT_t_cljs$core$async36014(f,ch,meta36015){
return (new cljs.core.async.t_cljs$core$async36014(f,ch,meta36015));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36014(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36030 = (function (p,ch,meta36031){
this.p = p;
this.ch = ch;
this.meta36031 = meta36031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36032,meta36031__$1){
var self__ = this;
var _36032__$1 = this;
return (new cljs.core.async.t_cljs$core$async36030(self__.p,self__.ch,meta36031__$1));
}));

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36032){
var self__ = this;
var _36032__$1 = this;
return self__.meta36031;
}));

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36031","meta36031",69191431,null)], null);
}));

(cljs.core.async.t_cljs$core$async36030.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36030");

(cljs.core.async.t_cljs$core$async36030.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async36030");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36030.
 */
cljs.core.async.__GT_t_cljs$core$async36030 = (function cljs$core$async$__GT_t_cljs$core$async36030(p,ch,meta36031){
return (new cljs.core.async.t_cljs$core$async36030(p,ch,meta36031));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async36030(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36077 = arguments.length;
switch (G__36077) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33582__auto___37892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_36105){
var state_val_36106 = (state_36105[(1)]);
if((state_val_36106 === (7))){
var inst_36101 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36108_37893 = state_36105__$1;
(statearr_36108_37893[(2)] = inst_36101);

(statearr_36108_37893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (1))){
var state_36105__$1 = state_36105;
var statearr_36110_37894 = state_36105__$1;
(statearr_36110_37894[(2)] = null);

(statearr_36110_37894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (4))){
var inst_36087 = (state_36105[(7)]);
var inst_36087__$1 = (state_36105[(2)]);
var inst_36088 = (inst_36087__$1 == null);
var state_36105__$1 = (function (){var statearr_36114 = state_36105;
(statearr_36114[(7)] = inst_36087__$1);

return statearr_36114;
})();
if(cljs.core.truth_(inst_36088)){
var statearr_36115_37901 = state_36105__$1;
(statearr_36115_37901[(1)] = (5));

} else {
var statearr_36116_37902 = state_36105__$1;
(statearr_36116_37902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (6))){
var inst_36087 = (state_36105[(7)]);
var inst_36092 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36087) : p.call(null,inst_36087));
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36092)){
var statearr_36117_37906 = state_36105__$1;
(statearr_36117_37906[(1)] = (8));

} else {
var statearr_36118_37907 = state_36105__$1;
(statearr_36118_37907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (3))){
var inst_36103 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36105__$1,inst_36103);
} else {
if((state_val_36106 === (2))){
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36105__$1,(4),ch);
} else {
if((state_val_36106 === (11))){
var inst_36095 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36122_37908 = state_36105__$1;
(statearr_36122_37908[(2)] = inst_36095);

(statearr_36122_37908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (9))){
var state_36105__$1 = state_36105;
var statearr_36126_37909 = state_36105__$1;
(statearr_36126_37909[(2)] = null);

(statearr_36126_37909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (5))){
var inst_36090 = cljs.core.async.close_BANG_(out);
var state_36105__$1 = state_36105;
var statearr_36129_37910 = state_36105__$1;
(statearr_36129_37910[(2)] = inst_36090);

(statearr_36129_37910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (10))){
var inst_36098 = (state_36105[(2)]);
var state_36105__$1 = (function (){var statearr_36130 = state_36105;
(statearr_36130[(8)] = inst_36098);

return statearr_36130;
})();
var statearr_36133_37911 = state_36105__$1;
(statearr_36133_37911[(2)] = null);

(statearr_36133_37911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (8))){
var inst_36087 = (state_36105[(7)]);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36105__$1,(11),out,inst_36087);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_36140 = [null,null,null,null,null,null,null,null,null];
(statearr_36140[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_36140[(1)] = (1));

return statearr_36140;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_36105){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_36105);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e36143){var ex__33068__auto__ = e36143;
var statearr_36144_37912 = state_36105;
(statearr_36144_37912[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_36105[(4)]))){
var statearr_36149_37913 = state_36105;
(statearr_36149_37913[(1)] = cljs.core.first((state_36105[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37914 = state_36105;
state_36105 = G__37914;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_36105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_36105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_36151 = f__33584__auto__();
(statearr_36151[(6)] = c__33582__auto___37892);

return statearr_36151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36154 = arguments.length;
switch (G__36154) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_36238){
var state_val_36239 = (state_36238[(1)]);
if((state_val_36239 === (7))){
var inst_36231 = (state_36238[(2)]);
var state_36238__$1 = state_36238;
var statearr_36241_37916 = state_36238__$1;
(statearr_36241_37916[(2)] = inst_36231);

(statearr_36241_37916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (20))){
var inst_36201 = (state_36238[(7)]);
var inst_36212 = (state_36238[(2)]);
var inst_36213 = cljs.core.next(inst_36201);
var inst_36180 = inst_36213;
var inst_36181 = null;
var inst_36182 = (0);
var inst_36183 = (0);
var state_36238__$1 = (function (){var statearr_36242 = state_36238;
(statearr_36242[(8)] = inst_36182);

(statearr_36242[(9)] = inst_36181);

(statearr_36242[(10)] = inst_36212);

(statearr_36242[(11)] = inst_36180);

(statearr_36242[(12)] = inst_36183);

return statearr_36242;
})();
var statearr_36243_37917 = state_36238__$1;
(statearr_36243_37917[(2)] = null);

(statearr_36243_37917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (1))){
var state_36238__$1 = state_36238;
var statearr_36251_37918 = state_36238__$1;
(statearr_36251_37918[(2)] = null);

(statearr_36251_37918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (4))){
var inst_36164 = (state_36238[(13)]);
var inst_36164__$1 = (state_36238[(2)]);
var inst_36165 = (inst_36164__$1 == null);
var state_36238__$1 = (function (){var statearr_36258 = state_36238;
(statearr_36258[(13)] = inst_36164__$1);

return statearr_36258;
})();
if(cljs.core.truth_(inst_36165)){
var statearr_36260_37919 = state_36238__$1;
(statearr_36260_37919[(1)] = (5));

} else {
var statearr_36263_37920 = state_36238__$1;
(statearr_36263_37920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (15))){
var state_36238__$1 = state_36238;
var statearr_36276_37921 = state_36238__$1;
(statearr_36276_37921[(2)] = null);

(statearr_36276_37921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (21))){
var state_36238__$1 = state_36238;
var statearr_36280_37923 = state_36238__$1;
(statearr_36280_37923[(2)] = null);

(statearr_36280_37923[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (13))){
var inst_36182 = (state_36238[(8)]);
var inst_36181 = (state_36238[(9)]);
var inst_36180 = (state_36238[(11)]);
var inst_36183 = (state_36238[(12)]);
var inst_36194 = (state_36238[(2)]);
var inst_36198 = (inst_36183 + (1));
var tmp36265 = inst_36182;
var tmp36266 = inst_36181;
var tmp36267 = inst_36180;
var inst_36180__$1 = tmp36267;
var inst_36181__$1 = tmp36266;
var inst_36182__$1 = tmp36265;
var inst_36183__$1 = inst_36198;
var state_36238__$1 = (function (){var statearr_36286 = state_36238;
(statearr_36286[(8)] = inst_36182__$1);

(statearr_36286[(9)] = inst_36181__$1);

(statearr_36286[(14)] = inst_36194);

(statearr_36286[(11)] = inst_36180__$1);

(statearr_36286[(12)] = inst_36183__$1);

return statearr_36286;
})();
var statearr_36287_37925 = state_36238__$1;
(statearr_36287_37925[(2)] = null);

(statearr_36287_37925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (22))){
var state_36238__$1 = state_36238;
var statearr_36288_37927 = state_36238__$1;
(statearr_36288_37927[(2)] = null);

(statearr_36288_37927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (6))){
var inst_36164 = (state_36238[(13)]);
var inst_36178 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36164) : f.call(null,inst_36164));
var inst_36179 = cljs.core.seq(inst_36178);
var inst_36180 = inst_36179;
var inst_36181 = null;
var inst_36182 = (0);
var inst_36183 = (0);
var state_36238__$1 = (function (){var statearr_36289 = state_36238;
(statearr_36289[(8)] = inst_36182);

(statearr_36289[(9)] = inst_36181);

(statearr_36289[(11)] = inst_36180);

(statearr_36289[(12)] = inst_36183);

return statearr_36289;
})();
var statearr_36291_37929 = state_36238__$1;
(statearr_36291_37929[(2)] = null);

(statearr_36291_37929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (17))){
var inst_36201 = (state_36238[(7)]);
var inst_36205 = cljs.core.chunk_first(inst_36201);
var inst_36206 = cljs.core.chunk_rest(inst_36201);
var inst_36207 = cljs.core.count(inst_36205);
var inst_36180 = inst_36206;
var inst_36181 = inst_36205;
var inst_36182 = inst_36207;
var inst_36183 = (0);
var state_36238__$1 = (function (){var statearr_36293 = state_36238;
(statearr_36293[(8)] = inst_36182);

(statearr_36293[(9)] = inst_36181);

(statearr_36293[(11)] = inst_36180);

(statearr_36293[(12)] = inst_36183);

return statearr_36293;
})();
var statearr_36294_37933 = state_36238__$1;
(statearr_36294_37933[(2)] = null);

(statearr_36294_37933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (3))){
var inst_36234 = (state_36238[(2)]);
var state_36238__$1 = state_36238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36238__$1,inst_36234);
} else {
if((state_val_36239 === (12))){
var inst_36221 = (state_36238[(2)]);
var state_36238__$1 = state_36238;
var statearr_36297_37934 = state_36238__$1;
(statearr_36297_37934[(2)] = inst_36221);

(statearr_36297_37934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (2))){
var state_36238__$1 = state_36238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36238__$1,(4),in$);
} else {
if((state_val_36239 === (23))){
var inst_36229 = (state_36238[(2)]);
var state_36238__$1 = state_36238;
var statearr_36304_37935 = state_36238__$1;
(statearr_36304_37935[(2)] = inst_36229);

(statearr_36304_37935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (19))){
var inst_36216 = (state_36238[(2)]);
var state_36238__$1 = state_36238;
var statearr_36310_37936 = state_36238__$1;
(statearr_36310_37936[(2)] = inst_36216);

(statearr_36310_37936[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (11))){
var inst_36180 = (state_36238[(11)]);
var inst_36201 = (state_36238[(7)]);
var inst_36201__$1 = cljs.core.seq(inst_36180);
var state_36238__$1 = (function (){var statearr_36311 = state_36238;
(statearr_36311[(7)] = inst_36201__$1);

return statearr_36311;
})();
if(inst_36201__$1){
var statearr_36313_37937 = state_36238__$1;
(statearr_36313_37937[(1)] = (14));

} else {
var statearr_36314_37938 = state_36238__$1;
(statearr_36314_37938[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (9))){
var inst_36223 = (state_36238[(2)]);
var inst_36224 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36238__$1 = (function (){var statearr_36321 = state_36238;
(statearr_36321[(15)] = inst_36223);

return statearr_36321;
})();
if(cljs.core.truth_(inst_36224)){
var statearr_36326_37939 = state_36238__$1;
(statearr_36326_37939[(1)] = (21));

} else {
var statearr_36327_37940 = state_36238__$1;
(statearr_36327_37940[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (5))){
var inst_36171 = cljs.core.async.close_BANG_(out);
var state_36238__$1 = state_36238;
var statearr_36328_37941 = state_36238__$1;
(statearr_36328_37941[(2)] = inst_36171);

(statearr_36328_37941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (14))){
var inst_36201 = (state_36238[(7)]);
var inst_36203 = cljs.core.chunked_seq_QMARK_(inst_36201);
var state_36238__$1 = state_36238;
if(inst_36203){
var statearr_36329_37942 = state_36238__$1;
(statearr_36329_37942[(1)] = (17));

} else {
var statearr_36330_37943 = state_36238__$1;
(statearr_36330_37943[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (16))){
var inst_36219 = (state_36238[(2)]);
var state_36238__$1 = state_36238;
var statearr_36331_37944 = state_36238__$1;
(statearr_36331_37944[(2)] = inst_36219);

(statearr_36331_37944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36239 === (10))){
var inst_36181 = (state_36238[(9)]);
var inst_36183 = (state_36238[(12)]);
var inst_36192 = cljs.core._nth(inst_36181,inst_36183);
var state_36238__$1 = state_36238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36238__$1,(13),out,inst_36192);
} else {
if((state_val_36239 === (18))){
var inst_36201 = (state_36238[(7)]);
var inst_36210 = cljs.core.first(inst_36201);
var state_36238__$1 = state_36238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36238__$1,(20),out,inst_36210);
} else {
if((state_val_36239 === (8))){
var inst_36182 = (state_36238[(8)]);
var inst_36183 = (state_36238[(12)]);
var inst_36189 = (inst_36183 < inst_36182);
var inst_36190 = inst_36189;
var state_36238__$1 = state_36238;
if(cljs.core.truth_(inst_36190)){
var statearr_36333_37948 = state_36238__$1;
(statearr_36333_37948[(1)] = (10));

} else {
var statearr_36334_37949 = state_36238__$1;
(statearr_36334_37949[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33065__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33065__auto____0 = (function (){
var statearr_36336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36336[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33065__auto__);

(statearr_36336[(1)] = (1));

return statearr_36336;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33065__auto____1 = (function (state_36238){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_36238);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e36337){var ex__33068__auto__ = e36337;
var statearr_36339_37951 = state_36238;
(statearr_36339_37951[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_36238[(4)]))){
var statearr_36340_37952 = state_36238;
(statearr_36340_37952[(1)] = cljs.core.first((state_36238[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37953 = state_36238;
state_36238 = G__37953;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33065__auto__ = function(state_36238){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33065__auto____1.call(this,state_36238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33065__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33065__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_36343 = f__33584__auto__();
(statearr_36343[(6)] = c__33582__auto__);

return statearr_36343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));

return c__33582__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36345 = arguments.length;
switch (G__36345) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36349 = arguments.length;
switch (G__36349) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36356 = arguments.length;
switch (G__36356) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33582__auto___37957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_36387){
var state_val_36388 = (state_36387[(1)]);
if((state_val_36388 === (7))){
var inst_36382 = (state_36387[(2)]);
var state_36387__$1 = state_36387;
var statearr_36390_37958 = state_36387__$1;
(statearr_36390_37958[(2)] = inst_36382);

(statearr_36390_37958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (1))){
var inst_36362 = null;
var state_36387__$1 = (function (){var statearr_36392 = state_36387;
(statearr_36392[(7)] = inst_36362);

return statearr_36392;
})();
var statearr_36393_37959 = state_36387__$1;
(statearr_36393_37959[(2)] = null);

(statearr_36393_37959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (4))){
var inst_36366 = (state_36387[(8)]);
var inst_36366__$1 = (state_36387[(2)]);
var inst_36368 = (inst_36366__$1 == null);
var inst_36369 = cljs.core.not(inst_36368);
var state_36387__$1 = (function (){var statearr_36394 = state_36387;
(statearr_36394[(8)] = inst_36366__$1);

return statearr_36394;
})();
if(inst_36369){
var statearr_36395_37960 = state_36387__$1;
(statearr_36395_37960[(1)] = (5));

} else {
var statearr_36397_37961 = state_36387__$1;
(statearr_36397_37961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (6))){
var state_36387__$1 = state_36387;
var statearr_36401_37962 = state_36387__$1;
(statearr_36401_37962[(2)] = null);

(statearr_36401_37962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (3))){
var inst_36384 = (state_36387[(2)]);
var inst_36385 = cljs.core.async.close_BANG_(out);
var state_36387__$1 = (function (){var statearr_36404 = state_36387;
(statearr_36404[(9)] = inst_36384);

return statearr_36404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36387__$1,inst_36385);
} else {
if((state_val_36388 === (2))){
var state_36387__$1 = state_36387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36387__$1,(4),ch);
} else {
if((state_val_36388 === (11))){
var inst_36366 = (state_36387[(8)]);
var inst_36376 = (state_36387[(2)]);
var inst_36362 = inst_36366;
var state_36387__$1 = (function (){var statearr_36408 = state_36387;
(statearr_36408[(7)] = inst_36362);

(statearr_36408[(10)] = inst_36376);

return statearr_36408;
})();
var statearr_36409_37963 = state_36387__$1;
(statearr_36409_37963[(2)] = null);

(statearr_36409_37963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (9))){
var inst_36366 = (state_36387[(8)]);
var state_36387__$1 = state_36387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36387__$1,(11),out,inst_36366);
} else {
if((state_val_36388 === (5))){
var inst_36366 = (state_36387[(8)]);
var inst_36362 = (state_36387[(7)]);
var inst_36371 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36366,inst_36362);
var state_36387__$1 = state_36387;
if(inst_36371){
var statearr_36411_37964 = state_36387__$1;
(statearr_36411_37964[(1)] = (8));

} else {
var statearr_36412_37965 = state_36387__$1;
(statearr_36412_37965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (10))){
var inst_36379 = (state_36387[(2)]);
var state_36387__$1 = state_36387;
var statearr_36413_37966 = state_36387__$1;
(statearr_36413_37966[(2)] = inst_36379);

(statearr_36413_37966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36388 === (8))){
var inst_36362 = (state_36387[(7)]);
var tmp36410 = inst_36362;
var inst_36362__$1 = tmp36410;
var state_36387__$1 = (function (){var statearr_36414 = state_36387;
(statearr_36414[(7)] = inst_36362__$1);

return statearr_36414;
})();
var statearr_36416_37967 = state_36387__$1;
(statearr_36416_37967[(2)] = null);

(statearr_36416_37967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_36418 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36418[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_36418[(1)] = (1));

return statearr_36418;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_36387){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_36387);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e36420){var ex__33068__auto__ = e36420;
var statearr_36424_37969 = state_36387;
(statearr_36424_37969[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_36387[(4)]))){
var statearr_36427_37973 = state_36387;
(statearr_36427_37973[(1)] = cljs.core.first((state_36387[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37974 = state_36387;
state_36387 = G__37974;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_36387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_36387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_36428 = f__33584__auto__();
(statearr_36428[(6)] = c__33582__auto___37957);

return statearr_36428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36430 = arguments.length;
switch (G__36430) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33582__auto___37980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_36475){
var state_val_36476 = (state_36475[(1)]);
if((state_val_36476 === (7))){
var inst_36471 = (state_36475[(2)]);
var state_36475__$1 = state_36475;
var statearr_36493_37981 = state_36475__$1;
(statearr_36493_37981[(2)] = inst_36471);

(statearr_36493_37981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36476 === (1))){
var inst_36434 = (new Array(n));
var inst_36435 = inst_36434;
var inst_36436 = (0);
var state_36475__$1 = (function (){var statearr_36500 = state_36475;
(statearr_36500[(7)] = inst_36436);

(statearr_36500[(8)] = inst_36435);

return statearr_36500;
})();
var statearr_36501_37982 = state_36475__$1;
(statearr_36501_37982[(2)] = null);

(statearr_36501_37982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36476 === (4))){
var inst_36439 = (state_36475[(9)]);
var inst_36439__$1 = (state_36475[(2)]);
var inst_36440 = (inst_36439__$1 == null);
var inst_36441 = cljs.core.not(inst_36440);
var state_36475__$1 = (function (){var statearr_36503 = state_36475;
(statearr_36503[(9)] = inst_36439__$1);

return statearr_36503;
})();
if(inst_36441){
var statearr_36504_37989 = state_36475__$1;
(statearr_36504_37989[(1)] = (5));

} else {
var statearr_36506_37990 = state_36475__$1;
(statearr_36506_37990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36476 === (15))){
var inst_36465 = (state_36475[(2)]);
var state_36475__$1 = state_36475;
var statearr_36522_37991 = state_36475__$1;
(statearr_36522_37991[(2)] = inst_36465);

(statearr_36522_37991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36476 === (13))){
var state_36475__$1 = state_36475;
var statearr_36523_37992 = state_36475__$1;
(statearr_36523_37992[(2)] = null);

(statearr_36523_37992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36476 === (6))){
var inst_36436 = (state_36475[(7)]);
var inst_36461 = (inst_36436 > (0));
var state_36475__$1 = state_36475;
if(cljs.core.truth_(inst_36461)){
var statearr_36530_37993 = state_36475__$1;
(statearr_36530_37993[(1)] = (12));

} else {
var statearr_36531_37994 = state_36475__$1;
(statearr_36531_37994[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36476 === (3))){
var inst_36473 = (state_36475[(2)]);
var state_36475__$1 = state_36475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36475__$1,inst_36473);
} else {
if((state_val_36476 === (12))){
var inst_36435 = (state_36475[(8)]);
var inst_36463 = cljs.core.vec(inst_36435);
var state_36475__$1 = state_36475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36475__$1,(15),out,inst_36463);
} else {
if((state_val_36476 === (2))){
var state_36475__$1 = state_36475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36475__$1,(4),ch);
} else {
if((state_val_36476 === (11))){
var inst_36454 = (state_36475[(2)]);
var inst_36456 = (new Array(n));
var inst_36435 = inst_36456;
var inst_36436 = (0);
var state_36475__$1 = (function (){var statearr_36542 = state_36475;
(statearr_36542[(7)] = inst_36436);

(statearr_36542[(10)] = inst_36454);

(statearr_36542[(8)] = inst_36435);

return statearr_36542;
})();
var statearr_36546_38002 = state_36475__$1;
(statearr_36546_38002[(2)] = null);

(statearr_36546_38002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36476 === (9))){
var inst_36435 = (state_36475[(8)]);
var inst_36452 = cljs.core.vec(inst_36435);
var state_36475__$1 = state_36475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36475__$1,(11),out,inst_36452);
} else {
if((state_val_36476 === (5))){
var inst_36447 = (state_36475[(11)]);
var inst_36436 = (state_36475[(7)]);
var inst_36439 = (state_36475[(9)]);
var inst_36435 = (state_36475[(8)]);
var inst_36443 = (inst_36435[inst_36436] = inst_36439);
var inst_36447__$1 = (inst_36436 + (1));
var inst_36448 = (inst_36447__$1 < n);
var state_36475__$1 = (function (){var statearr_36552 = state_36475;
(statearr_36552[(11)] = inst_36447__$1);

(statearr_36552[(12)] = inst_36443);

return statearr_36552;
})();
if(cljs.core.truth_(inst_36448)){
var statearr_36553_38009 = state_36475__$1;
(statearr_36553_38009[(1)] = (8));

} else {
var statearr_36555_38010 = state_36475__$1;
(statearr_36555_38010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36476 === (14))){
var inst_36468 = (state_36475[(2)]);
var inst_36469 = cljs.core.async.close_BANG_(out);
var state_36475__$1 = (function (){var statearr_36557 = state_36475;
(statearr_36557[(13)] = inst_36468);

return statearr_36557;
})();
var statearr_36558_38011 = state_36475__$1;
(statearr_36558_38011[(2)] = inst_36469);

(statearr_36558_38011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36476 === (10))){
var inst_36459 = (state_36475[(2)]);
var state_36475__$1 = state_36475;
var statearr_36563_38012 = state_36475__$1;
(statearr_36563_38012[(2)] = inst_36459);

(statearr_36563_38012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36476 === (8))){
var inst_36447 = (state_36475[(11)]);
var inst_36435 = (state_36475[(8)]);
var tmp36556 = inst_36435;
var inst_36435__$1 = tmp36556;
var inst_36436 = inst_36447;
var state_36475__$1 = (function (){var statearr_36569 = state_36475;
(statearr_36569[(7)] = inst_36436);

(statearr_36569[(8)] = inst_36435__$1);

return statearr_36569;
})();
var statearr_36571_38013 = state_36475__$1;
(statearr_36571_38013[(2)] = null);

(statearr_36571_38013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_36574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36574[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_36574[(1)] = (1));

return statearr_36574;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_36475){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_36475);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e36575){var ex__33068__auto__ = e36575;
var statearr_36576_38014 = state_36475;
(statearr_36576_38014[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_36475[(4)]))){
var statearr_36577_38015 = state_36475;
(statearr_36577_38015[(1)] = cljs.core.first((state_36475[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38016 = state_36475;
state_36475 = G__38016;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_36475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_36475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_36581 = f__33584__auto__();
(statearr_36581[(6)] = c__33582__auto___37980);

return statearr_36581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36590 = arguments.length;
switch (G__36590) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33582__auto___38018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_36647){
var state_val_36648 = (state_36647[(1)]);
if((state_val_36648 === (7))){
var inst_36642 = (state_36647[(2)]);
var state_36647__$1 = state_36647;
var statearr_36654_38019 = state_36647__$1;
(statearr_36654_38019[(2)] = inst_36642);

(statearr_36654_38019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (1))){
var inst_36596 = [];
var inst_36597 = inst_36596;
var inst_36598 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36647__$1 = (function (){var statearr_36655 = state_36647;
(statearr_36655[(7)] = inst_36598);

(statearr_36655[(8)] = inst_36597);

return statearr_36655;
})();
var statearr_36656_38020 = state_36647__$1;
(statearr_36656_38020[(2)] = null);

(statearr_36656_38020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (4))){
var inst_36602 = (state_36647[(9)]);
var inst_36602__$1 = (state_36647[(2)]);
var inst_36603 = (inst_36602__$1 == null);
var inst_36604 = cljs.core.not(inst_36603);
var state_36647__$1 = (function (){var statearr_36657 = state_36647;
(statearr_36657[(9)] = inst_36602__$1);

return statearr_36657;
})();
if(inst_36604){
var statearr_36658_38021 = state_36647__$1;
(statearr_36658_38021[(1)] = (5));

} else {
var statearr_36659_38022 = state_36647__$1;
(statearr_36659_38022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (15))){
var inst_36597 = (state_36647[(8)]);
var inst_36634 = cljs.core.vec(inst_36597);
var state_36647__$1 = state_36647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36647__$1,(18),out,inst_36634);
} else {
if((state_val_36648 === (13))){
var inst_36629 = (state_36647[(2)]);
var state_36647__$1 = state_36647;
var statearr_36660_38023 = state_36647__$1;
(statearr_36660_38023[(2)] = inst_36629);

(statearr_36660_38023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (6))){
var inst_36597 = (state_36647[(8)]);
var inst_36631 = inst_36597.length;
var inst_36632 = (inst_36631 > (0));
var state_36647__$1 = state_36647;
if(cljs.core.truth_(inst_36632)){
var statearr_36662_38024 = state_36647__$1;
(statearr_36662_38024[(1)] = (15));

} else {
var statearr_36663_38025 = state_36647__$1;
(statearr_36663_38025[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (17))){
var inst_36639 = (state_36647[(2)]);
var inst_36640 = cljs.core.async.close_BANG_(out);
var state_36647__$1 = (function (){var statearr_36669 = state_36647;
(statearr_36669[(10)] = inst_36639);

return statearr_36669;
})();
var statearr_36670_38026 = state_36647__$1;
(statearr_36670_38026[(2)] = inst_36640);

(statearr_36670_38026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (3))){
var inst_36645 = (state_36647[(2)]);
var state_36647__$1 = state_36647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36647__$1,inst_36645);
} else {
if((state_val_36648 === (12))){
var inst_36597 = (state_36647[(8)]);
var inst_36622 = cljs.core.vec(inst_36597);
var state_36647__$1 = state_36647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36647__$1,(14),out,inst_36622);
} else {
if((state_val_36648 === (2))){
var state_36647__$1 = state_36647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36647__$1,(4),ch);
} else {
if((state_val_36648 === (11))){
var inst_36607 = (state_36647[(11)]);
var inst_36602 = (state_36647[(9)]);
var inst_36597 = (state_36647[(8)]);
var inst_36618 = inst_36597.push(inst_36602);
var tmp36681 = inst_36597;
var inst_36597__$1 = tmp36681;
var inst_36598 = inst_36607;
var state_36647__$1 = (function (){var statearr_36698 = state_36647;
(statearr_36698[(7)] = inst_36598);

(statearr_36698[(8)] = inst_36597__$1);

(statearr_36698[(12)] = inst_36618);

return statearr_36698;
})();
var statearr_36699_38027 = state_36647__$1;
(statearr_36699_38027[(2)] = null);

(statearr_36699_38027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (9))){
var inst_36598 = (state_36647[(7)]);
var inst_36612 = cljs.core.keyword_identical_QMARK_(inst_36598,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_36647__$1 = state_36647;
var statearr_36708_38028 = state_36647__$1;
(statearr_36708_38028[(2)] = inst_36612);

(statearr_36708_38028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (5))){
var inst_36598 = (state_36647[(7)]);
var inst_36609 = (state_36647[(13)]);
var inst_36607 = (state_36647[(11)]);
var inst_36602 = (state_36647[(9)]);
var inst_36607__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36602) : f.call(null,inst_36602));
var inst_36609__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36607__$1,inst_36598);
var state_36647__$1 = (function (){var statearr_36709 = state_36647;
(statearr_36709[(13)] = inst_36609__$1);

(statearr_36709[(11)] = inst_36607__$1);

return statearr_36709;
})();
if(inst_36609__$1){
var statearr_36710_38029 = state_36647__$1;
(statearr_36710_38029[(1)] = (8));

} else {
var statearr_36711_38030 = state_36647__$1;
(statearr_36711_38030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (14))){
var inst_36607 = (state_36647[(11)]);
var inst_36602 = (state_36647[(9)]);
var inst_36624 = (state_36647[(2)]);
var inst_36625 = [];
var inst_36626 = inst_36625.push(inst_36602);
var inst_36597 = inst_36625;
var inst_36598 = inst_36607;
var state_36647__$1 = (function (){var statearr_36715 = state_36647;
(statearr_36715[(7)] = inst_36598);

(statearr_36715[(14)] = inst_36624);

(statearr_36715[(15)] = inst_36626);

(statearr_36715[(8)] = inst_36597);

return statearr_36715;
})();
var statearr_36716_38037 = state_36647__$1;
(statearr_36716_38037[(2)] = null);

(statearr_36716_38037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (16))){
var state_36647__$1 = state_36647;
var statearr_36717_38038 = state_36647__$1;
(statearr_36717_38038[(2)] = null);

(statearr_36717_38038[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (10))){
var inst_36614 = (state_36647[(2)]);
var state_36647__$1 = state_36647;
if(cljs.core.truth_(inst_36614)){
var statearr_36718_38039 = state_36647__$1;
(statearr_36718_38039[(1)] = (11));

} else {
var statearr_36719_38040 = state_36647__$1;
(statearr_36719_38040[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (18))){
var inst_36636 = (state_36647[(2)]);
var state_36647__$1 = state_36647;
var statearr_36720_38048 = state_36647__$1;
(statearr_36720_38048[(2)] = inst_36636);

(statearr_36720_38048[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36648 === (8))){
var inst_36609 = (state_36647[(13)]);
var state_36647__$1 = state_36647;
var statearr_36721_38049 = state_36647__$1;
(statearr_36721_38049[(2)] = inst_36609);

(statearr_36721_38049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33065__auto__ = null;
var cljs$core$async$state_machine__33065__auto____0 = (function (){
var statearr_36723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36723[(0)] = cljs$core$async$state_machine__33065__auto__);

(statearr_36723[(1)] = (1));

return statearr_36723;
});
var cljs$core$async$state_machine__33065__auto____1 = (function (state_36647){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_36647);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e36724){var ex__33068__auto__ = e36724;
var statearr_36725_38053 = state_36647;
(statearr_36725_38053[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_36647[(4)]))){
var statearr_36726_38054 = state_36647;
(statearr_36726_38054[(1)] = cljs.core.first((state_36647[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38055 = state_36647;
state_36647 = G__38055;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
cljs$core$async$state_machine__33065__auto__ = function(state_36647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33065__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33065__auto____1.call(this,state_36647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33065__auto____0;
cljs$core$async$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33065__auto____1;
return cljs$core$async$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_36727 = f__33584__auto__();
(statearr_36727[(6)] = c__33582__auto___38018);

return statearr_36727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
