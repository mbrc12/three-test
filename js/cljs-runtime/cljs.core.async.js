goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30899 = arguments.length;
switch (G__30899) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30900 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30900 = (function (f,blockable,meta30901){
this.f = f;
this.blockable = blockable;
this.meta30901 = meta30901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30902,meta30901__$1){
var self__ = this;
var _30902__$1 = this;
return (new cljs.core.async.t_cljs$core$async30900(self__.f,self__.blockable,meta30901__$1));
}));

(cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30902){
var self__ = this;
var _30902__$1 = this;
return self__.meta30901;
}));

(cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30900.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30901","meta30901",1026068460,null)], null);
}));

(cljs.core.async.t_cljs$core$async30900.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30900");

(cljs.core.async.t_cljs$core$async30900.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30900");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30900.
 */
cljs.core.async.__GT_t_cljs$core$async30900 = (function cljs$core$async$__GT_t_cljs$core$async30900(f__$1,blockable__$1,meta30901){
return (new cljs.core.async.t_cljs$core$async30900(f__$1,blockable__$1,meta30901));
});

}

return (new cljs.core.async.t_cljs$core$async30900(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30919 = arguments.length;
switch (G__30919) {
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
var G__30932 = arguments.length;
switch (G__30932) {
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
var G__30944 = arguments.length;
switch (G__30944) {
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
var val_33554 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33554) : fn1.call(null,val_33554));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33554) : fn1.call(null,val_33554));
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
var G__30953 = arguments.length;
switch (G__30953) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___33567 = n;
var x_33568 = (0);
while(true){
if((x_33568 < n__4613__auto___33567)){
(a[x_33568] = x_33568);

var G__33569 = (x_33568 + (1));
x_33568 = G__33569;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30990 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30990 = (function (flag,meta30991){
this.flag = flag;
this.meta30991 = meta30991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30992,meta30991__$1){
var self__ = this;
var _30992__$1 = this;
return (new cljs.core.async.t_cljs$core$async30990(self__.flag,meta30991__$1));
}));

(cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30992){
var self__ = this;
var _30992__$1 = this;
return self__.meta30991;
}));

(cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30991","meta30991",548311221,null)], null);
}));

(cljs.core.async.t_cljs$core$async30990.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30990");

(cljs.core.async.t_cljs$core$async30990.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30990");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30990.
 */
cljs.core.async.__GT_t_cljs$core$async30990 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30990(flag__$1,meta30991){
return (new cljs.core.async.t_cljs$core$async30990(flag__$1,meta30991));
});

}

return (new cljs.core.async.t_cljs$core$async30990(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31022 = (function (flag,cb,meta31023){
this.flag = flag;
this.cb = cb;
this.meta31023 = meta31023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31024,meta31023__$1){
var self__ = this;
var _31024__$1 = this;
return (new cljs.core.async.t_cljs$core$async31022(self__.flag,self__.cb,meta31023__$1));
}));

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31024){
var self__ = this;
var _31024__$1 = this;
return self__.meta31023;
}));

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31023","meta31023",-1707964722,null)], null);
}));

(cljs.core.async.t_cljs$core$async31022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31022");

(cljs.core.async.t_cljs$core$async31022.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31022.
 */
cljs.core.async.__GT_t_cljs$core$async31022 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31022(flag__$1,cb__$1,meta31023){
return (new cljs.core.async.t_cljs$core$async31022(flag__$1,cb__$1,meta31023));
});

}

return (new cljs.core.async.t_cljs$core$async31022(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31049_SHARP_){
var G__31054 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31049_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31054) : fret.call(null,G__31054));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31050_SHARP_){
var G__31055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31050_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31055) : fret.call(null,G__31055));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33576 = (i + (1));
i = G__33576;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___33577 = arguments.length;
var i__4737__auto___33578 = (0);
while(true){
if((i__4737__auto___33578 < len__4736__auto___33577)){
args__4742__auto__.push((arguments[i__4737__auto___33578]));

var G__33579 = (i__4737__auto___33578 + (1));
i__4737__auto___33578 = G__33579;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31069){
var map__31070 = p__31069;
var map__31070__$1 = (((((!((map__31070 == null))))?(((((map__31070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31070):map__31070);
var opts = map__31070__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31066){
var G__31067 = cljs.core.first(seq31066);
var seq31066__$1 = cljs.core.next(seq31066);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31067,seq31066__$1);
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
var G__31087 = arguments.length;
switch (G__31087) {
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
var c__30807__auto___33588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_31150){
var state_val_31152 = (state_31150[(1)]);
if((state_val_31152 === (7))){
var inst_31144 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31160_33589 = state_31150__$1;
(statearr_31160_33589[(2)] = inst_31144);

(statearr_31160_33589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (1))){
var state_31150__$1 = state_31150;
var statearr_31161_33594 = state_31150__$1;
(statearr_31161_33594[(2)] = null);

(statearr_31161_33594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (4))){
var inst_31122 = (state_31150[(7)]);
var inst_31122__$1 = (state_31150[(2)]);
var inst_31124 = (inst_31122__$1 == null);
var state_31150__$1 = (function (){var statearr_31171 = state_31150;
(statearr_31171[(7)] = inst_31122__$1);

return statearr_31171;
})();
if(cljs.core.truth_(inst_31124)){
var statearr_31172_33596 = state_31150__$1;
(statearr_31172_33596[(1)] = (5));

} else {
var statearr_31174_33598 = state_31150__$1;
(statearr_31174_33598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (13))){
var state_31150__$1 = state_31150;
var statearr_31177_33599 = state_31150__$1;
(statearr_31177_33599[(2)] = null);

(statearr_31177_33599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (6))){
var inst_31122 = (state_31150[(7)]);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31150__$1,(11),to,inst_31122);
} else {
if((state_val_31152 === (3))){
var inst_31146 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31150__$1,inst_31146);
} else {
if((state_val_31152 === (12))){
var state_31150__$1 = state_31150;
var statearr_31182_33601 = state_31150__$1;
(statearr_31182_33601[(2)] = null);

(statearr_31182_33601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (2))){
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31150__$1,(4),from);
} else {
if((state_val_31152 === (11))){
var inst_31133 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31133)){
var statearr_31183_33603 = state_31150__$1;
(statearr_31183_33603[(1)] = (12));

} else {
var statearr_31184_33604 = state_31150__$1;
(statearr_31184_33604[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (9))){
var state_31150__$1 = state_31150;
var statearr_31186_33605 = state_31150__$1;
(statearr_31186_33605[(2)] = null);

(statearr_31186_33605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (5))){
var state_31150__$1 = state_31150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31193_33606 = state_31150__$1;
(statearr_31193_33606[(1)] = (8));

} else {
var statearr_31194_33607 = state_31150__$1;
(statearr_31194_33607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (14))){
var inst_31142 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31196_33608 = state_31150__$1;
(statearr_31196_33608[(2)] = inst_31142);

(statearr_31196_33608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (10))){
var inst_31130 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31200_33610 = state_31150__$1;
(statearr_31200_33610[(2)] = inst_31130);

(statearr_31200_33610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31152 === (8))){
var inst_31127 = cljs.core.async.close_BANG_(to);
var state_31150__$1 = state_31150;
var statearr_31201_33611 = state_31150__$1;
(statearr_31201_33611[(2)] = inst_31127);

(statearr_31201_33611[(1)] = (10));


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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_31204 = [null,null,null,null,null,null,null,null];
(statearr_31204[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_31204[(1)] = (1));

return statearr_31204;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_31150){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_31150);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e31206){var ex__30590__auto__ = e31206;
var statearr_31207_33614 = state_31150;
(statearr_31207_33614[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_31150[(4)]))){
var statearr_31210_33615 = state_31150;
(statearr_31210_33615[(1)] = cljs.core.first((state_31150[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33616 = state_31150;
state_31150 = G__33616;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_31150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_31150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_31217 = f__30808__auto__();
(statearr_31217[(6)] = c__30807__auto___33588);

return statearr_31217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
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
var process = (function (p__31226){
var vec__31228 = p__31226;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31228,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31228,(1),null);
var job = vec__31228;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30807__auto___33620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_31239){
var state_val_31240 = (state_31239[(1)]);
if((state_val_31240 === (1))){
var state_31239__$1 = state_31239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31239__$1,(2),res,v);
} else {
if((state_val_31240 === (2))){
var inst_31236 = (state_31239[(2)]);
var inst_31237 = cljs.core.async.close_BANG_(res);
var state_31239__$1 = (function (){var statearr_31244 = state_31239;
(statearr_31244[(7)] = inst_31236);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31239__$1,inst_31237);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0 = (function (){
var statearr_31248 = [null,null,null,null,null,null,null,null];
(statearr_31248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__);

(statearr_31248[(1)] = (1));

return statearr_31248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1 = (function (state_31239){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_31239);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e31250){var ex__30590__auto__ = e31250;
var statearr_31251_33625 = state_31239;
(statearr_31251_33625[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_31239[(4)]))){
var statearr_31256_33627 = state_31239;
(statearr_31256_33627[(1)] = cljs.core.first((state_31239[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33629 = state_31239;
state_31239 = G__33629;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__ = function(state_31239){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1.call(this,state_31239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_31258 = f__30808__auto__();
(statearr_31258[(6)] = c__30807__auto___33620);

return statearr_31258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31264){
var vec__31274 = p__31264;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31274,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31274,(1),null);
var job = vec__31274;
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
var n__4613__auto___33631 = n;
var __33633 = (0);
while(true){
if((__33633 < n__4613__auto___33631)){
var G__31291_33634 = type;
var G__31291_33635__$1 = (((G__31291_33634 instanceof cljs.core.Keyword))?G__31291_33634.fqn:null);
switch (G__31291_33635__$1) {
case "compute":
var c__30807__auto___33637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33633,c__30807__auto___33637,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async){
return (function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = ((function (__33633,c__30807__auto___33637,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async){
return (function (state_31314){
var state_val_31315 = (state_31314[(1)]);
if((state_val_31315 === (1))){
var state_31314__$1 = state_31314;
var statearr_31331_33638 = state_31314__$1;
(statearr_31331_33638[(2)] = null);

(statearr_31331_33638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (2))){
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31314__$1,(4),jobs);
} else {
if((state_val_31315 === (3))){
var inst_31311 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31314__$1,inst_31311);
} else {
if((state_val_31315 === (4))){
var inst_31300 = (state_31314[(2)]);
var inst_31301 = process(inst_31300);
var state_31314__$1 = state_31314;
if(cljs.core.truth_(inst_31301)){
var statearr_31340_33639 = state_31314__$1;
(statearr_31340_33639[(1)] = (5));

} else {
var statearr_31341_33640 = state_31314__$1;
(statearr_31341_33640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (5))){
var state_31314__$1 = state_31314;
var statearr_31342_33643 = state_31314__$1;
(statearr_31342_33643[(2)] = null);

(statearr_31342_33643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (6))){
var state_31314__$1 = state_31314;
var statearr_31346_33644 = state_31314__$1;
(statearr_31346_33644[(2)] = null);

(statearr_31346_33644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31315 === (7))){
var inst_31307 = (state_31314[(2)]);
var state_31314__$1 = state_31314;
var statearr_31347_33645 = state_31314__$1;
(statearr_31347_33645[(2)] = inst_31307);

(statearr_31347_33645[(1)] = (3));


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
});})(__33633,c__30807__auto___33637,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async))
;
return ((function (__33633,switch__30586__auto__,c__30807__auto___33637,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0 = (function (){
var statearr_31350 = [null,null,null,null,null,null,null];
(statearr_31350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__);

(statearr_31350[(1)] = (1));

return statearr_31350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1 = (function (state_31314){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_31314);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e31351){var ex__30590__auto__ = e31351;
var statearr_31352_33655 = state_31314;
(statearr_31352_33655[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_31314[(4)]))){
var statearr_31358_33656 = state_31314;
(statearr_31358_33656[(1)] = cljs.core.first((state_31314[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33657 = state_31314;
state_31314 = G__33657;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__ = function(state_31314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1.call(this,state_31314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__;
})()
;})(__33633,switch__30586__auto__,c__30807__auto___33637,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async))
})();
var state__30809__auto__ = (function (){var statearr_31361 = f__30808__auto__();
(statearr_31361[(6)] = c__30807__auto___33637);

return statearr_31361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
});})(__33633,c__30807__auto___33637,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async))
);


break;
case "async":
var c__30807__auto___33662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33633,c__30807__auto___33662,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async){
return (function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = ((function (__33633,c__30807__auto___33662,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async){
return (function (state_31379){
var state_val_31380 = (state_31379[(1)]);
if((state_val_31380 === (1))){
var state_31379__$1 = state_31379;
var statearr_31384_33663 = state_31379__$1;
(statearr_31384_33663[(2)] = null);

(statearr_31384_33663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (2))){
var state_31379__$1 = state_31379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31379__$1,(4),jobs);
} else {
if((state_val_31380 === (3))){
var inst_31377 = (state_31379[(2)]);
var state_31379__$1 = state_31379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31379__$1,inst_31377);
} else {
if((state_val_31380 === (4))){
var inst_31367 = (state_31379[(2)]);
var inst_31369 = async(inst_31367);
var state_31379__$1 = state_31379;
if(cljs.core.truth_(inst_31369)){
var statearr_31389_33668 = state_31379__$1;
(statearr_31389_33668[(1)] = (5));

} else {
var statearr_31390_33669 = state_31379__$1;
(statearr_31390_33669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (5))){
var state_31379__$1 = state_31379;
var statearr_31392_33670 = state_31379__$1;
(statearr_31392_33670[(2)] = null);

(statearr_31392_33670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (6))){
var state_31379__$1 = state_31379;
var statearr_31394_33671 = state_31379__$1;
(statearr_31394_33671[(2)] = null);

(statearr_31394_33671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31380 === (7))){
var inst_31375 = (state_31379[(2)]);
var state_31379__$1 = state_31379;
var statearr_31395_33676 = state_31379__$1;
(statearr_31395_33676[(2)] = inst_31375);

(statearr_31395_33676[(1)] = (3));


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
});})(__33633,c__30807__auto___33662,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async))
;
return ((function (__33633,switch__30586__auto__,c__30807__auto___33662,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0 = (function (){
var statearr_31397 = [null,null,null,null,null,null,null];
(statearr_31397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__);

(statearr_31397[(1)] = (1));

return statearr_31397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1 = (function (state_31379){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_31379);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e31400){var ex__30590__auto__ = e31400;
var statearr_31401_33682 = state_31379;
(statearr_31401_33682[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_31379[(4)]))){
var statearr_31403_33684 = state_31379;
(statearr_31403_33684[(1)] = cljs.core.first((state_31379[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33686 = state_31379;
state_31379 = G__33686;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__ = function(state_31379){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1.call(this,state_31379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__;
})()
;})(__33633,switch__30586__auto__,c__30807__auto___33662,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async))
})();
var state__30809__auto__ = (function (){var statearr_31407 = f__30808__auto__();
(statearr_31407[(6)] = c__30807__auto___33662);

return statearr_31407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
});})(__33633,c__30807__auto___33662,G__31291_33634,G__31291_33635__$1,n__4613__auto___33631,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31291_33635__$1)].join('')));

}

var G__33687 = (__33633 + (1));
__33633 = G__33687;
continue;
} else {
}
break;
}

var c__30807__auto___33688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_31432){
var state_val_31433 = (state_31432[(1)]);
if((state_val_31433 === (7))){
var inst_31428 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
var statearr_31446_33689 = state_31432__$1;
(statearr_31446_33689[(2)] = inst_31428);

(statearr_31446_33689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (1))){
var state_31432__$1 = state_31432;
var statearr_31451_33694 = state_31432__$1;
(statearr_31451_33694[(2)] = null);

(statearr_31451_33694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (4))){
var inst_31412 = (state_31432[(7)]);
var inst_31412__$1 = (state_31432[(2)]);
var inst_31413 = (inst_31412__$1 == null);
var state_31432__$1 = (function (){var statearr_31457 = state_31432;
(statearr_31457[(7)] = inst_31412__$1);

return statearr_31457;
})();
if(cljs.core.truth_(inst_31413)){
var statearr_31460_33699 = state_31432__$1;
(statearr_31460_33699[(1)] = (5));

} else {
var statearr_31464_33703 = state_31432__$1;
(statearr_31464_33703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (6))){
var inst_31417 = (state_31432[(8)]);
var inst_31412 = (state_31432[(7)]);
var inst_31417__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31420 = [inst_31412,inst_31417__$1];
var inst_31421 = (new cljs.core.PersistentVector(null,2,(5),inst_31419,inst_31420,null));
var state_31432__$1 = (function (){var statearr_31469 = state_31432;
(statearr_31469[(8)] = inst_31417__$1);

return statearr_31469;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31432__$1,(8),jobs,inst_31421);
} else {
if((state_val_31433 === (3))){
var inst_31430 = (state_31432[(2)]);
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31432__$1,inst_31430);
} else {
if((state_val_31433 === (2))){
var state_31432__$1 = state_31432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31432__$1,(4),from);
} else {
if((state_val_31433 === (9))){
var inst_31425 = (state_31432[(2)]);
var state_31432__$1 = (function (){var statearr_31481 = state_31432;
(statearr_31481[(9)] = inst_31425);

return statearr_31481;
})();
var statearr_31482_33713 = state_31432__$1;
(statearr_31482_33713[(2)] = null);

(statearr_31482_33713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (5))){
var inst_31415 = cljs.core.async.close_BANG_(jobs);
var state_31432__$1 = state_31432;
var statearr_31491_33717 = state_31432__$1;
(statearr_31491_33717[(2)] = inst_31415);

(statearr_31491_33717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31433 === (8))){
var inst_31417 = (state_31432[(8)]);
var inst_31423 = (state_31432[(2)]);
var state_31432__$1 = (function (){var statearr_31494 = state_31432;
(statearr_31494[(10)] = inst_31423);

return statearr_31494;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31432__$1,(9),results,inst_31417);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0 = (function (){
var statearr_31500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__);

(statearr_31500[(1)] = (1));

return statearr_31500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1 = (function (state_31432){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_31432);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e31505){var ex__30590__auto__ = e31505;
var statearr_31506_33725 = state_31432;
(statearr_31506_33725[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_31432[(4)]))){
var statearr_31510_33726 = state_31432;
(statearr_31510_33726[(1)] = cljs.core.first((state_31432[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33730 = state_31432;
state_31432 = G__33730;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__ = function(state_31432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1.call(this,state_31432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_31516 = f__30808__auto__();
(statearr_31516[(6)] = c__30807__auto___33688);

return statearr_31516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));


var c__30807__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_31576){
var state_val_31577 = (state_31576[(1)]);
if((state_val_31577 === (7))){
var inst_31568 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31580_33736 = state_31576__$1;
(statearr_31580_33736[(2)] = inst_31568);

(statearr_31580_33736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (20))){
var state_31576__$1 = state_31576;
var statearr_31584_33739 = state_31576__$1;
(statearr_31584_33739[(2)] = null);

(statearr_31584_33739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (1))){
var state_31576__$1 = state_31576;
var statearr_31585_33743 = state_31576__$1;
(statearr_31585_33743[(2)] = null);

(statearr_31585_33743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (4))){
var inst_31530 = (state_31576[(7)]);
var inst_31530__$1 = (state_31576[(2)]);
var inst_31531 = (inst_31530__$1 == null);
var state_31576__$1 = (function (){var statearr_31588 = state_31576;
(statearr_31588[(7)] = inst_31530__$1);

return statearr_31588;
})();
if(cljs.core.truth_(inst_31531)){
var statearr_31590_33745 = state_31576__$1;
(statearr_31590_33745[(1)] = (5));

} else {
var statearr_31591_33747 = state_31576__$1;
(statearr_31591_33747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (15))){
var inst_31545 = (state_31576[(8)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31576__$1,(18),to,inst_31545);
} else {
if((state_val_31577 === (21))){
var inst_31561 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31597_33749 = state_31576__$1;
(statearr_31597_33749[(2)] = inst_31561);

(statearr_31597_33749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (13))){
var inst_31564 = (state_31576[(2)]);
var state_31576__$1 = (function (){var statearr_31598 = state_31576;
(statearr_31598[(9)] = inst_31564);

return statearr_31598;
})();
var statearr_31599_33750 = state_31576__$1;
(statearr_31599_33750[(2)] = null);

(statearr_31599_33750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (6))){
var inst_31530 = (state_31576[(7)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31576__$1,(11),inst_31530);
} else {
if((state_val_31577 === (17))){
var inst_31555 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31555)){
var statearr_31600_33753 = state_31576__$1;
(statearr_31600_33753[(1)] = (19));

} else {
var statearr_31602_33754 = state_31576__$1;
(statearr_31602_33754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (3))){
var inst_31570 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31576__$1,inst_31570);
} else {
if((state_val_31577 === (12))){
var inst_31542 = (state_31576[(10)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31576__$1,(14),inst_31542);
} else {
if((state_val_31577 === (2))){
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31576__$1,(4),results);
} else {
if((state_val_31577 === (19))){
var state_31576__$1 = state_31576;
var statearr_31605_33755 = state_31576__$1;
(statearr_31605_33755[(2)] = null);

(statearr_31605_33755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (11))){
var inst_31542 = (state_31576[(2)]);
var state_31576__$1 = (function (){var statearr_31606 = state_31576;
(statearr_31606[(10)] = inst_31542);

return statearr_31606;
})();
var statearr_31607_33756 = state_31576__$1;
(statearr_31607_33756[(2)] = null);

(statearr_31607_33756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (9))){
var state_31576__$1 = state_31576;
var statearr_31608_33757 = state_31576__$1;
(statearr_31608_33757[(2)] = null);

(statearr_31608_33757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (5))){
var state_31576__$1 = state_31576;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31609_33758 = state_31576__$1;
(statearr_31609_33758[(1)] = (8));

} else {
var statearr_31610_33759 = state_31576__$1;
(statearr_31610_33759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (14))){
var inst_31545 = (state_31576[(8)]);
var inst_31545__$1 = (state_31576[(2)]);
var inst_31548 = (inst_31545__$1 == null);
var inst_31549 = cljs.core.not(inst_31548);
var state_31576__$1 = (function (){var statearr_31614 = state_31576;
(statearr_31614[(8)] = inst_31545__$1);

return statearr_31614;
})();
if(inst_31549){
var statearr_31615_33760 = state_31576__$1;
(statearr_31615_33760[(1)] = (15));

} else {
var statearr_31616_33761 = state_31576__$1;
(statearr_31616_33761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (16))){
var state_31576__$1 = state_31576;
var statearr_31618_33762 = state_31576__$1;
(statearr_31618_33762[(2)] = false);

(statearr_31618_33762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (10))){
var inst_31538 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31619_33763 = state_31576__$1;
(statearr_31619_33763[(2)] = inst_31538);

(statearr_31619_33763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (18))){
var inst_31552 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31620_33767 = state_31576__$1;
(statearr_31620_33767[(2)] = inst_31552);

(statearr_31620_33767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (8))){
var inst_31535 = cljs.core.async.close_BANG_(to);
var state_31576__$1 = state_31576;
var statearr_31622_33768 = state_31576__$1;
(statearr_31622_33768[(2)] = inst_31535);

(statearr_31622_33768[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0 = (function (){
var statearr_31631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__);

(statearr_31631[(1)] = (1));

return statearr_31631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1 = (function (state_31576){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_31576);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e31632){var ex__30590__auto__ = e31632;
var statearr_31633_33775 = state_31576;
(statearr_31633_33775[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_31576[(4)]))){
var statearr_31634_33777 = state_31576;
(statearr_31634_33777[(1)] = cljs.core.first((state_31576[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33778 = state_31576;
state_31576 = G__33778;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__ = function(state_31576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1.call(this,state_31576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30587__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_31644 = f__30808__auto__();
(statearr_31644[(6)] = c__30807__auto__);

return statearr_31644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));

return c__30807__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31654 = arguments.length;
switch (G__31654) {
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
var G__31664 = arguments.length;
switch (G__31664) {
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
var G__31674 = arguments.length;
switch (G__31674) {
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
var c__30807__auto___33810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_31709){
var state_val_31710 = (state_31709[(1)]);
if((state_val_31710 === (7))){
var inst_31705 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31713_33812 = state_31709__$1;
(statearr_31713_33812[(2)] = inst_31705);

(statearr_31713_33812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (1))){
var state_31709__$1 = state_31709;
var statearr_31714_33816 = state_31709__$1;
(statearr_31714_33816[(2)] = null);

(statearr_31714_33816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (4))){
var inst_31686 = (state_31709[(7)]);
var inst_31686__$1 = (state_31709[(2)]);
var inst_31687 = (inst_31686__$1 == null);
var state_31709__$1 = (function (){var statearr_31717 = state_31709;
(statearr_31717[(7)] = inst_31686__$1);

return statearr_31717;
})();
if(cljs.core.truth_(inst_31687)){
var statearr_31718_33818 = state_31709__$1;
(statearr_31718_33818[(1)] = (5));

} else {
var statearr_31719_33820 = state_31709__$1;
(statearr_31719_33820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (13))){
var state_31709__$1 = state_31709;
var statearr_31720_33828 = state_31709__$1;
(statearr_31720_33828[(2)] = null);

(statearr_31720_33828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (6))){
var inst_31686 = (state_31709[(7)]);
var inst_31692 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31686) : p.call(null,inst_31686));
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31692)){
var statearr_31728_33829 = state_31709__$1;
(statearr_31728_33829[(1)] = (9));

} else {
var statearr_31729_33830 = state_31709__$1;
(statearr_31729_33830[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (3))){
var inst_31707 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31709__$1,inst_31707);
} else {
if((state_val_31710 === (12))){
var state_31709__$1 = state_31709;
var statearr_31730_33831 = state_31709__$1;
(statearr_31730_33831[(2)] = null);

(statearr_31730_33831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (2))){
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31709__$1,(4),ch);
} else {
if((state_val_31710 === (11))){
var inst_31686 = (state_31709[(7)]);
var inst_31696 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31709__$1,(8),inst_31696,inst_31686);
} else {
if((state_val_31710 === (9))){
var state_31709__$1 = state_31709;
var statearr_31732_33832 = state_31709__$1;
(statearr_31732_33832[(2)] = tc);

(statearr_31732_33832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (5))){
var inst_31689 = cljs.core.async.close_BANG_(tc);
var inst_31690 = cljs.core.async.close_BANG_(fc);
var state_31709__$1 = (function (){var statearr_31735 = state_31709;
(statearr_31735[(8)] = inst_31689);

return statearr_31735;
})();
var statearr_31737_33839 = state_31709__$1;
(statearr_31737_33839[(2)] = inst_31690);

(statearr_31737_33839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (14))){
var inst_31703 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31738_33840 = state_31709__$1;
(statearr_31738_33840[(2)] = inst_31703);

(statearr_31738_33840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (10))){
var state_31709__$1 = state_31709;
var statearr_31739_33841 = state_31709__$1;
(statearr_31739_33841[(2)] = fc);

(statearr_31739_33841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (8))){
var inst_31698 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31698)){
var statearr_31740_33842 = state_31709__$1;
(statearr_31740_33842[(1)] = (12));

} else {
var statearr_31741_33843 = state_31709__$1;
(statearr_31741_33843[(1)] = (13));

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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_31742 = [null,null,null,null,null,null,null,null,null];
(statearr_31742[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_31742[(1)] = (1));

return statearr_31742;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_31709){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_31709);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e31743){var ex__30590__auto__ = e31743;
var statearr_31744_33844 = state_31709;
(statearr_31744_33844[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_31709[(4)]))){
var statearr_31745_33845 = state_31709;
(statearr_31745_33845[(1)] = cljs.core.first((state_31709[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33852 = state_31709;
state_31709 = G__33852;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_31709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_31709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_31751 = f__30808__auto__();
(statearr_31751[(6)] = c__30807__auto___33810);

return statearr_31751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
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
var c__30807__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_31781){
var state_val_31782 = (state_31781[(1)]);
if((state_val_31782 === (7))){
var inst_31777 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
var statearr_31783_33853 = state_31781__$1;
(statearr_31783_33853[(2)] = inst_31777);

(statearr_31783_33853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (1))){
var inst_31760 = init;
var inst_31761 = inst_31760;
var state_31781__$1 = (function (){var statearr_31784 = state_31781;
(statearr_31784[(7)] = inst_31761);

return statearr_31784;
})();
var statearr_31785_33854 = state_31781__$1;
(statearr_31785_33854[(2)] = null);

(statearr_31785_33854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (4))){
var inst_31764 = (state_31781[(8)]);
var inst_31764__$1 = (state_31781[(2)]);
var inst_31765 = (inst_31764__$1 == null);
var state_31781__$1 = (function (){var statearr_31786 = state_31781;
(statearr_31786[(8)] = inst_31764__$1);

return statearr_31786;
})();
if(cljs.core.truth_(inst_31765)){
var statearr_31791_33855 = state_31781__$1;
(statearr_31791_33855[(1)] = (5));

} else {
var statearr_31792_33856 = state_31781__$1;
(statearr_31792_33856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (6))){
var inst_31761 = (state_31781[(7)]);
var inst_31764 = (state_31781[(8)]);
var inst_31768 = (state_31781[(9)]);
var inst_31768__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31761,inst_31764) : f.call(null,inst_31761,inst_31764));
var inst_31769 = cljs.core.reduced_QMARK_(inst_31768__$1);
var state_31781__$1 = (function (){var statearr_31793 = state_31781;
(statearr_31793[(9)] = inst_31768__$1);

return statearr_31793;
})();
if(inst_31769){
var statearr_31794_33857 = state_31781__$1;
(statearr_31794_33857[(1)] = (8));

} else {
var statearr_31795_33858 = state_31781__$1;
(statearr_31795_33858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (3))){
var inst_31779 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31781__$1,inst_31779);
} else {
if((state_val_31782 === (2))){
var state_31781__$1 = state_31781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31781__$1,(4),ch);
} else {
if((state_val_31782 === (9))){
var inst_31768 = (state_31781[(9)]);
var inst_31761 = inst_31768;
var state_31781__$1 = (function (){var statearr_31801 = state_31781;
(statearr_31801[(7)] = inst_31761);

return statearr_31801;
})();
var statearr_31802_33859 = state_31781__$1;
(statearr_31802_33859[(2)] = null);

(statearr_31802_33859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (5))){
var inst_31761 = (state_31781[(7)]);
var state_31781__$1 = state_31781;
var statearr_31803_33860 = state_31781__$1;
(statearr_31803_33860[(2)] = inst_31761);

(statearr_31803_33860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (10))){
var inst_31775 = (state_31781[(2)]);
var state_31781__$1 = state_31781;
var statearr_31804_33862 = state_31781__$1;
(statearr_31804_33862[(2)] = inst_31775);

(statearr_31804_33862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31782 === (8))){
var inst_31768 = (state_31781[(9)]);
var inst_31771 = cljs.core.deref(inst_31768);
var state_31781__$1 = state_31781;
var statearr_31805_33865 = state_31781__$1;
(statearr_31805_33865[(2)] = inst_31771);

(statearr_31805_33865[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30587__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30587__auto____0 = (function (){
var statearr_31808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31808[(0)] = cljs$core$async$reduce_$_state_machine__30587__auto__);

(statearr_31808[(1)] = (1));

return statearr_31808;
});
var cljs$core$async$reduce_$_state_machine__30587__auto____1 = (function (state_31781){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_31781);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e31809){var ex__30590__auto__ = e31809;
var statearr_31810_33871 = state_31781;
(statearr_31810_33871[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_31781[(4)]))){
var statearr_31811_33872 = state_31781;
(statearr_31811_33872[(1)] = cljs.core.first((state_31781[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33873 = state_31781;
state_31781 = G__33873;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30587__auto__ = function(state_31781){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30587__auto____1.call(this,state_31781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30587__auto____0;
cljs$core$async$reduce_$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30587__auto____1;
return cljs$core$async$reduce_$_state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_31815 = f__30808__auto__();
(statearr_31815[(6)] = c__30807__auto__);

return statearr_31815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));

return c__30807__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30807__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_31822){
var state_val_31823 = (state_31822[(1)]);
if((state_val_31823 === (1))){
var inst_31817 = cljs.core.async.reduce(f__$1,init,ch);
var state_31822__$1 = state_31822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31822__$1,(2),inst_31817);
} else {
if((state_val_31823 === (2))){
var inst_31819 = (state_31822[(2)]);
var inst_31820 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31819) : f__$1.call(null,inst_31819));
var state_31822__$1 = state_31822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31822__$1,inst_31820);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30587__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30587__auto____0 = (function (){
var statearr_31831 = [null,null,null,null,null,null,null];
(statearr_31831[(0)] = cljs$core$async$transduce_$_state_machine__30587__auto__);

(statearr_31831[(1)] = (1));

return statearr_31831;
});
var cljs$core$async$transduce_$_state_machine__30587__auto____1 = (function (state_31822){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_31822);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e31833){var ex__30590__auto__ = e31833;
var statearr_31834_33876 = state_31822;
(statearr_31834_33876[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_31822[(4)]))){
var statearr_31836_33878 = state_31822;
(statearr_31836_33878[(1)] = cljs.core.first((state_31822[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33880 = state_31822;
state_31822 = G__33880;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30587__auto__ = function(state_31822){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30587__auto____1.call(this,state_31822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30587__auto____0;
cljs$core$async$transduce_$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30587__auto____1;
return cljs$core$async$transduce_$_state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_31837 = f__30808__auto__();
(statearr_31837[(6)] = c__30807__auto__);

return statearr_31837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));

return c__30807__auto__;
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
var G__31839 = arguments.length;
switch (G__31839) {
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
var c__30807__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_31872){
var state_val_31873 = (state_31872[(1)]);
if((state_val_31873 === (7))){
var inst_31854 = (state_31872[(2)]);
var state_31872__$1 = state_31872;
var statearr_31874_33882 = state_31872__$1;
(statearr_31874_33882[(2)] = inst_31854);

(statearr_31874_33882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (1))){
var inst_31848 = cljs.core.seq(coll);
var inst_31849 = inst_31848;
var state_31872__$1 = (function (){var statearr_31877 = state_31872;
(statearr_31877[(7)] = inst_31849);

return statearr_31877;
})();
var statearr_31878_33883 = state_31872__$1;
(statearr_31878_33883[(2)] = null);

(statearr_31878_33883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (4))){
var inst_31849 = (state_31872[(7)]);
var inst_31852 = cljs.core.first(inst_31849);
var state_31872__$1 = state_31872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31872__$1,(7),ch,inst_31852);
} else {
if((state_val_31873 === (13))){
var inst_31866 = (state_31872[(2)]);
var state_31872__$1 = state_31872;
var statearr_31884_33886 = state_31872__$1;
(statearr_31884_33886[(2)] = inst_31866);

(statearr_31884_33886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (6))){
var inst_31857 = (state_31872[(2)]);
var state_31872__$1 = state_31872;
if(cljs.core.truth_(inst_31857)){
var statearr_31885_33887 = state_31872__$1;
(statearr_31885_33887[(1)] = (8));

} else {
var statearr_31888_33888 = state_31872__$1;
(statearr_31888_33888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (3))){
var inst_31870 = (state_31872[(2)]);
var state_31872__$1 = state_31872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31872__$1,inst_31870);
} else {
if((state_val_31873 === (12))){
var state_31872__$1 = state_31872;
var statearr_31889_33889 = state_31872__$1;
(statearr_31889_33889[(2)] = null);

(statearr_31889_33889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (2))){
var inst_31849 = (state_31872[(7)]);
var state_31872__$1 = state_31872;
if(cljs.core.truth_(inst_31849)){
var statearr_31890_33891 = state_31872__$1;
(statearr_31890_33891[(1)] = (4));

} else {
var statearr_31891_33892 = state_31872__$1;
(statearr_31891_33892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (11))){
var inst_31863 = cljs.core.async.close_BANG_(ch);
var state_31872__$1 = state_31872;
var statearr_31892_33893 = state_31872__$1;
(statearr_31892_33893[(2)] = inst_31863);

(statearr_31892_33893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (9))){
var state_31872__$1 = state_31872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31893_33894 = state_31872__$1;
(statearr_31893_33894[(1)] = (11));

} else {
var statearr_31894_33895 = state_31872__$1;
(statearr_31894_33895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (5))){
var inst_31849 = (state_31872[(7)]);
var state_31872__$1 = state_31872;
var statearr_31895_33896 = state_31872__$1;
(statearr_31895_33896[(2)] = inst_31849);

(statearr_31895_33896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (10))){
var inst_31868 = (state_31872[(2)]);
var state_31872__$1 = state_31872;
var statearr_31896_33897 = state_31872__$1;
(statearr_31896_33897[(2)] = inst_31868);

(statearr_31896_33897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31873 === (8))){
var inst_31849 = (state_31872[(7)]);
var inst_31859 = cljs.core.next(inst_31849);
var inst_31849__$1 = inst_31859;
var state_31872__$1 = (function (){var statearr_31897 = state_31872;
(statearr_31897[(7)] = inst_31849__$1);

return statearr_31897;
})();
var statearr_31898_33898 = state_31872__$1;
(statearr_31898_33898[(2)] = null);

(statearr_31898_33898[(1)] = (2));


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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_31900 = [null,null,null,null,null,null,null,null];
(statearr_31900[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_31900[(1)] = (1));

return statearr_31900;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_31872){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_31872);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e31901){var ex__30590__auto__ = e31901;
var statearr_31902_33900 = state_31872;
(statearr_31902_33900[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_31872[(4)]))){
var statearr_31903_33901 = state_31872;
(statearr_31903_33901[(1)] = cljs.core.first((state_31872[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33904 = state_31872;
state_31872 = G__33904;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_31872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_31872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_31907 = f__30808__auto__();
(statearr_31907[(6)] = c__30807__auto__);

return statearr_31907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));

return c__30807__auto__;
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
var G__31911 = arguments.length;
switch (G__31911) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_33911 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33911(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33912 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33912(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33913 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33913(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33921 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33921(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31951 = (function (ch,cs,meta31952){
this.ch = ch;
this.cs = cs;
this.meta31952 = meta31952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31953,meta31952__$1){
var self__ = this;
var _31953__$1 = this;
return (new cljs.core.async.t_cljs$core$async31951(self__.ch,self__.cs,meta31952__$1));
}));

(cljs.core.async.t_cljs$core$async31951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31953){
var self__ = this;
var _31953__$1 = this;
return self__.meta31952;
}));

(cljs.core.async.t_cljs$core$async31951.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31951.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31951.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31951.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31951.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31952","meta31952",1731347502,null)], null);
}));

(cljs.core.async.t_cljs$core$async31951.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31951");

(cljs.core.async.t_cljs$core$async31951.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31951");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31951.
 */
cljs.core.async.__GT_t_cljs$core$async31951 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31951(ch__$1,cs__$1,meta31952){
return (new cljs.core.async.t_cljs$core$async31951(ch__$1,cs__$1,meta31952));
});

}

return (new cljs.core.async.t_cljs$core$async31951(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30807__auto___33935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_32105){
var state_val_32106 = (state_32105[(1)]);
if((state_val_32106 === (7))){
var inst_32101 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32112_33937 = state_32105__$1;
(statearr_32112_33937[(2)] = inst_32101);

(statearr_32112_33937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (20))){
var inst_31999 = (state_32105[(7)]);
var inst_32013 = cljs.core.first(inst_31999);
var inst_32014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32013,(0),null);
var inst_32015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32013,(1),null);
var state_32105__$1 = (function (){var statearr_32114 = state_32105;
(statearr_32114[(8)] = inst_32014);

return statearr_32114;
})();
if(cljs.core.truth_(inst_32015)){
var statearr_32117_33938 = state_32105__$1;
(statearr_32117_33938[(1)] = (22));

} else {
var statearr_32120_33939 = state_32105__$1;
(statearr_32120_33939[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (27))){
var inst_32043 = (state_32105[(9)]);
var inst_32050 = (state_32105[(10)]);
var inst_31965 = (state_32105[(11)]);
var inst_32045 = (state_32105[(12)]);
var inst_32050__$1 = cljs.core._nth(inst_32043,inst_32045);
var inst_32051 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32050__$1,inst_31965,done);
var state_32105__$1 = (function (){var statearr_32127 = state_32105;
(statearr_32127[(10)] = inst_32050__$1);

return statearr_32127;
})();
if(cljs.core.truth_(inst_32051)){
var statearr_32128_33942 = state_32105__$1;
(statearr_32128_33942[(1)] = (30));

} else {
var statearr_32130_33943 = state_32105__$1;
(statearr_32130_33943[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (1))){
var state_32105__$1 = state_32105;
var statearr_32133_33945 = state_32105__$1;
(statearr_32133_33945[(2)] = null);

(statearr_32133_33945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (24))){
var inst_31999 = (state_32105[(7)]);
var inst_32020 = (state_32105[(2)]);
var inst_32021 = cljs.core.next(inst_31999);
var inst_31974 = inst_32021;
var inst_31975 = null;
var inst_31976 = (0);
var inst_31977 = (0);
var state_32105__$1 = (function (){var statearr_32136 = state_32105;
(statearr_32136[(13)] = inst_31975);

(statearr_32136[(14)] = inst_31976);

(statearr_32136[(15)] = inst_31977);

(statearr_32136[(16)] = inst_32020);

(statearr_32136[(17)] = inst_31974);

return statearr_32136;
})();
var statearr_32139_33946 = state_32105__$1;
(statearr_32139_33946[(2)] = null);

(statearr_32139_33946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (39))){
var state_32105__$1 = state_32105;
var statearr_32147_33947 = state_32105__$1;
(statearr_32147_33947[(2)] = null);

(statearr_32147_33947[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (4))){
var inst_31965 = (state_32105[(11)]);
var inst_31965__$1 = (state_32105[(2)]);
var inst_31966 = (inst_31965__$1 == null);
var state_32105__$1 = (function (){var statearr_32151 = state_32105;
(statearr_32151[(11)] = inst_31965__$1);

return statearr_32151;
})();
if(cljs.core.truth_(inst_31966)){
var statearr_32152_33948 = state_32105__$1;
(statearr_32152_33948[(1)] = (5));

} else {
var statearr_32153_33949 = state_32105__$1;
(statearr_32153_33949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (15))){
var inst_31975 = (state_32105[(13)]);
var inst_31976 = (state_32105[(14)]);
var inst_31977 = (state_32105[(15)]);
var inst_31974 = (state_32105[(17)]);
var inst_31993 = (state_32105[(2)]);
var inst_31995 = (inst_31977 + (1));
var tmp32143 = inst_31975;
var tmp32144 = inst_31976;
var tmp32145 = inst_31974;
var inst_31974__$1 = tmp32145;
var inst_31975__$1 = tmp32143;
var inst_31976__$1 = tmp32144;
var inst_31977__$1 = inst_31995;
var state_32105__$1 = (function (){var statearr_32154 = state_32105;
(statearr_32154[(13)] = inst_31975__$1);

(statearr_32154[(14)] = inst_31976__$1);

(statearr_32154[(15)] = inst_31977__$1);

(statearr_32154[(17)] = inst_31974__$1);

(statearr_32154[(18)] = inst_31993);

return statearr_32154;
})();
var statearr_32156_33950 = state_32105__$1;
(statearr_32156_33950[(2)] = null);

(statearr_32156_33950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (21))){
var inst_32024 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32166_33955 = state_32105__$1;
(statearr_32166_33955[(2)] = inst_32024);

(statearr_32166_33955[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (31))){
var inst_32050 = (state_32105[(10)]);
var inst_32054 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32050);
var state_32105__$1 = state_32105;
var statearr_32176_33956 = state_32105__$1;
(statearr_32176_33956[(2)] = inst_32054);

(statearr_32176_33956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (32))){
var inst_32043 = (state_32105[(9)]);
var inst_32044 = (state_32105[(19)]);
var inst_32042 = (state_32105[(20)]);
var inst_32045 = (state_32105[(12)]);
var inst_32056 = (state_32105[(2)]);
var inst_32057 = (inst_32045 + (1));
var tmp32159 = inst_32043;
var tmp32160 = inst_32044;
var tmp32161 = inst_32042;
var inst_32042__$1 = tmp32161;
var inst_32043__$1 = tmp32159;
var inst_32044__$1 = tmp32160;
var inst_32045__$1 = inst_32057;
var state_32105__$1 = (function (){var statearr_32179 = state_32105;
(statearr_32179[(9)] = inst_32043__$1);

(statearr_32179[(21)] = inst_32056);

(statearr_32179[(19)] = inst_32044__$1);

(statearr_32179[(20)] = inst_32042__$1);

(statearr_32179[(12)] = inst_32045__$1);

return statearr_32179;
})();
var statearr_32182_33957 = state_32105__$1;
(statearr_32182_33957[(2)] = null);

(statearr_32182_33957[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (40))){
var inst_32072 = (state_32105[(22)]);
var inst_32078 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32072);
var state_32105__$1 = state_32105;
var statearr_32184_33958 = state_32105__$1;
(statearr_32184_33958[(2)] = inst_32078);

(statearr_32184_33958[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (33))){
var inst_32061 = (state_32105[(23)]);
var inst_32063 = cljs.core.chunked_seq_QMARK_(inst_32061);
var state_32105__$1 = state_32105;
if(inst_32063){
var statearr_32187_33959 = state_32105__$1;
(statearr_32187_33959[(1)] = (36));

} else {
var statearr_32188_33960 = state_32105__$1;
(statearr_32188_33960[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (13))){
var inst_31987 = (state_32105[(24)]);
var inst_31990 = cljs.core.async.close_BANG_(inst_31987);
var state_32105__$1 = state_32105;
var statearr_32191_33965 = state_32105__$1;
(statearr_32191_33965[(2)] = inst_31990);

(statearr_32191_33965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (22))){
var inst_32014 = (state_32105[(8)]);
var inst_32017 = cljs.core.async.close_BANG_(inst_32014);
var state_32105__$1 = state_32105;
var statearr_32194_33967 = state_32105__$1;
(statearr_32194_33967[(2)] = inst_32017);

(statearr_32194_33967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (36))){
var inst_32061 = (state_32105[(23)]);
var inst_32065 = cljs.core.chunk_first(inst_32061);
var inst_32067 = cljs.core.chunk_rest(inst_32061);
var inst_32068 = cljs.core.count(inst_32065);
var inst_32042 = inst_32067;
var inst_32043 = inst_32065;
var inst_32044 = inst_32068;
var inst_32045 = (0);
var state_32105__$1 = (function (){var statearr_32197 = state_32105;
(statearr_32197[(9)] = inst_32043);

(statearr_32197[(19)] = inst_32044);

(statearr_32197[(20)] = inst_32042);

(statearr_32197[(12)] = inst_32045);

return statearr_32197;
})();
var statearr_32199_33968 = state_32105__$1;
(statearr_32199_33968[(2)] = null);

(statearr_32199_33968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (41))){
var inst_32061 = (state_32105[(23)]);
var inst_32080 = (state_32105[(2)]);
var inst_32081 = cljs.core.next(inst_32061);
var inst_32042 = inst_32081;
var inst_32043 = null;
var inst_32044 = (0);
var inst_32045 = (0);
var state_32105__$1 = (function (){var statearr_32202 = state_32105;
(statearr_32202[(9)] = inst_32043);

(statearr_32202[(19)] = inst_32044);

(statearr_32202[(20)] = inst_32042);

(statearr_32202[(25)] = inst_32080);

(statearr_32202[(12)] = inst_32045);

return statearr_32202;
})();
var statearr_32203_33974 = state_32105__$1;
(statearr_32203_33974[(2)] = null);

(statearr_32203_33974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (43))){
var state_32105__$1 = state_32105;
var statearr_32205_33979 = state_32105__$1;
(statearr_32205_33979[(2)] = null);

(statearr_32205_33979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (29))){
var inst_32089 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32209_33980 = state_32105__$1;
(statearr_32209_33980[(2)] = inst_32089);

(statearr_32209_33980[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (44))){
var inst_32098 = (state_32105[(2)]);
var state_32105__$1 = (function (){var statearr_32215 = state_32105;
(statearr_32215[(26)] = inst_32098);

return statearr_32215;
})();
var statearr_32219_33989 = state_32105__$1;
(statearr_32219_33989[(2)] = null);

(statearr_32219_33989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (6))){
var inst_32034 = (state_32105[(27)]);
var inst_32033 = cljs.core.deref(cs);
var inst_32034__$1 = cljs.core.keys(inst_32033);
var inst_32035 = cljs.core.count(inst_32034__$1);
var inst_32036 = cljs.core.reset_BANG_(dctr,inst_32035);
var inst_32041 = cljs.core.seq(inst_32034__$1);
var inst_32042 = inst_32041;
var inst_32043 = null;
var inst_32044 = (0);
var inst_32045 = (0);
var state_32105__$1 = (function (){var statearr_32223 = state_32105;
(statearr_32223[(28)] = inst_32036);

(statearr_32223[(9)] = inst_32043);

(statearr_32223[(27)] = inst_32034__$1);

(statearr_32223[(19)] = inst_32044);

(statearr_32223[(20)] = inst_32042);

(statearr_32223[(12)] = inst_32045);

return statearr_32223;
})();
var statearr_32226_33990 = state_32105__$1;
(statearr_32226_33990[(2)] = null);

(statearr_32226_33990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (28))){
var inst_32042 = (state_32105[(20)]);
var inst_32061 = (state_32105[(23)]);
var inst_32061__$1 = cljs.core.seq(inst_32042);
var state_32105__$1 = (function (){var statearr_32230 = state_32105;
(statearr_32230[(23)] = inst_32061__$1);

return statearr_32230;
})();
if(inst_32061__$1){
var statearr_32231_33992 = state_32105__$1;
(statearr_32231_33992[(1)] = (33));

} else {
var statearr_32232_33994 = state_32105__$1;
(statearr_32232_33994[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (25))){
var inst_32044 = (state_32105[(19)]);
var inst_32045 = (state_32105[(12)]);
var inst_32047 = (inst_32045 < inst_32044);
var inst_32048 = inst_32047;
var state_32105__$1 = state_32105;
if(cljs.core.truth_(inst_32048)){
var statearr_32233_33995 = state_32105__$1;
(statearr_32233_33995[(1)] = (27));

} else {
var statearr_32235_33996 = state_32105__$1;
(statearr_32235_33996[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (34))){
var state_32105__$1 = state_32105;
var statearr_32236_33997 = state_32105__$1;
(statearr_32236_33997[(2)] = null);

(statearr_32236_33997[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (17))){
var state_32105__$1 = state_32105;
var statearr_32238_33998 = state_32105__$1;
(statearr_32238_33998[(2)] = null);

(statearr_32238_33998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (3))){
var inst_32103 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32105__$1,inst_32103);
} else {
if((state_val_32106 === (12))){
var inst_32029 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32245_33999 = state_32105__$1;
(statearr_32245_33999[(2)] = inst_32029);

(statearr_32245_33999[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (2))){
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32105__$1,(4),ch);
} else {
if((state_val_32106 === (23))){
var state_32105__$1 = state_32105;
var statearr_32249_34000 = state_32105__$1;
(statearr_32249_34000[(2)] = null);

(statearr_32249_34000[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (35))){
var inst_32087 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32251_34001 = state_32105__$1;
(statearr_32251_34001[(2)] = inst_32087);

(statearr_32251_34001[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (19))){
var inst_31999 = (state_32105[(7)]);
var inst_32005 = cljs.core.chunk_first(inst_31999);
var inst_32006 = cljs.core.chunk_rest(inst_31999);
var inst_32007 = cljs.core.count(inst_32005);
var inst_31974 = inst_32006;
var inst_31975 = inst_32005;
var inst_31976 = inst_32007;
var inst_31977 = (0);
var state_32105__$1 = (function (){var statearr_32253 = state_32105;
(statearr_32253[(13)] = inst_31975);

(statearr_32253[(14)] = inst_31976);

(statearr_32253[(15)] = inst_31977);

(statearr_32253[(17)] = inst_31974);

return statearr_32253;
})();
var statearr_32254_34002 = state_32105__$1;
(statearr_32254_34002[(2)] = null);

(statearr_32254_34002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (11))){
var inst_31999 = (state_32105[(7)]);
var inst_31974 = (state_32105[(17)]);
var inst_31999__$1 = cljs.core.seq(inst_31974);
var state_32105__$1 = (function (){var statearr_32258 = state_32105;
(statearr_32258[(7)] = inst_31999__$1);

return statearr_32258;
})();
if(inst_31999__$1){
var statearr_32259_34003 = state_32105__$1;
(statearr_32259_34003[(1)] = (16));

} else {
var statearr_32260_34004 = state_32105__$1;
(statearr_32260_34004[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (9))){
var inst_32031 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32263_34008 = state_32105__$1;
(statearr_32263_34008[(2)] = inst_32031);

(statearr_32263_34008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (5))){
var inst_31972 = cljs.core.deref(cs);
var inst_31973 = cljs.core.seq(inst_31972);
var inst_31974 = inst_31973;
var inst_31975 = null;
var inst_31976 = (0);
var inst_31977 = (0);
var state_32105__$1 = (function (){var statearr_32269 = state_32105;
(statearr_32269[(13)] = inst_31975);

(statearr_32269[(14)] = inst_31976);

(statearr_32269[(15)] = inst_31977);

(statearr_32269[(17)] = inst_31974);

return statearr_32269;
})();
var statearr_32270_34009 = state_32105__$1;
(statearr_32270_34009[(2)] = null);

(statearr_32270_34009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (14))){
var state_32105__$1 = state_32105;
var statearr_32271_34010 = state_32105__$1;
(statearr_32271_34010[(2)] = null);

(statearr_32271_34010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (45))){
var inst_32095 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32272_34013 = state_32105__$1;
(statearr_32272_34013[(2)] = inst_32095);

(statearr_32272_34013[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (26))){
var inst_32034 = (state_32105[(27)]);
var inst_32091 = (state_32105[(2)]);
var inst_32092 = cljs.core.seq(inst_32034);
var state_32105__$1 = (function (){var statearr_32274 = state_32105;
(statearr_32274[(29)] = inst_32091);

return statearr_32274;
})();
if(inst_32092){
var statearr_32275_34015 = state_32105__$1;
(statearr_32275_34015[(1)] = (42));

} else {
var statearr_32276_34016 = state_32105__$1;
(statearr_32276_34016[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (16))){
var inst_31999 = (state_32105[(7)]);
var inst_32003 = cljs.core.chunked_seq_QMARK_(inst_31999);
var state_32105__$1 = state_32105;
if(inst_32003){
var statearr_32281_34017 = state_32105__$1;
(statearr_32281_34017[(1)] = (19));

} else {
var statearr_32282_34018 = state_32105__$1;
(statearr_32282_34018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (38))){
var inst_32084 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32283_34019 = state_32105__$1;
(statearr_32283_34019[(2)] = inst_32084);

(statearr_32283_34019[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (30))){
var state_32105__$1 = state_32105;
var statearr_32288_34020 = state_32105__$1;
(statearr_32288_34020[(2)] = null);

(statearr_32288_34020[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (10))){
var inst_31975 = (state_32105[(13)]);
var inst_31977 = (state_32105[(15)]);
var inst_31986 = cljs.core._nth(inst_31975,inst_31977);
var inst_31987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31986,(0),null);
var inst_31988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31986,(1),null);
var state_32105__$1 = (function (){var statearr_32289 = state_32105;
(statearr_32289[(24)] = inst_31987);

return statearr_32289;
})();
if(cljs.core.truth_(inst_31988)){
var statearr_32290_34022 = state_32105__$1;
(statearr_32290_34022[(1)] = (13));

} else {
var statearr_32293_34023 = state_32105__$1;
(statearr_32293_34023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (18))){
var inst_32027 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32294_34026 = state_32105__$1;
(statearr_32294_34026[(2)] = inst_32027);

(statearr_32294_34026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (42))){
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32105__$1,(45),dchan);
} else {
if((state_val_32106 === (37))){
var inst_32072 = (state_32105[(22)]);
var inst_31965 = (state_32105[(11)]);
var inst_32061 = (state_32105[(23)]);
var inst_32072__$1 = cljs.core.first(inst_32061);
var inst_32073 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32072__$1,inst_31965,done);
var state_32105__$1 = (function (){var statearr_32297 = state_32105;
(statearr_32297[(22)] = inst_32072__$1);

return statearr_32297;
})();
if(cljs.core.truth_(inst_32073)){
var statearr_32298_34034 = state_32105__$1;
(statearr_32298_34034[(1)] = (39));

} else {
var statearr_32299_34035 = state_32105__$1;
(statearr_32299_34035[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (8))){
var inst_31976 = (state_32105[(14)]);
var inst_31977 = (state_32105[(15)]);
var inst_31979 = (inst_31977 < inst_31976);
var inst_31980 = inst_31979;
var state_32105__$1 = state_32105;
if(cljs.core.truth_(inst_31980)){
var statearr_32300_34037 = state_32105__$1;
(statearr_32300_34037[(1)] = (10));

} else {
var statearr_32301_34038 = state_32105__$1;
(statearr_32301_34038[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30587__auto__ = null;
var cljs$core$async$mult_$_state_machine__30587__auto____0 = (function (){
var statearr_32305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32305[(0)] = cljs$core$async$mult_$_state_machine__30587__auto__);

(statearr_32305[(1)] = (1));

return statearr_32305;
});
var cljs$core$async$mult_$_state_machine__30587__auto____1 = (function (state_32105){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_32105);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e32307){var ex__30590__auto__ = e32307;
var statearr_32308_34047 = state_32105;
(statearr_32308_34047[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_32105[(4)]))){
var statearr_32311_34050 = state_32105;
(statearr_32311_34050[(1)] = cljs.core.first((state_32105[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34051 = state_32105;
state_32105 = G__34051;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30587__auto__ = function(state_32105){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30587__auto____1.call(this,state_32105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30587__auto____0;
cljs$core$async$mult_$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30587__auto____1;
return cljs$core$async$mult_$_state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_32313 = f__30808__auto__();
(statearr_32313[(6)] = c__30807__auto___33935);

return statearr_32313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
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
var G__32318 = arguments.length;
switch (G__32318) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_34063 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34063(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34066 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34066(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34070 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34070(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34080 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34080(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34085 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34085(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34089 = arguments.length;
var i__4737__auto___34090 = (0);
while(true){
if((i__4737__auto___34090 < len__4736__auto___34089)){
args__4742__auto__.push((arguments[i__4737__auto___34090]));

var G__34091 = (i__4737__auto___34090 + (1));
i__4737__auto___34090 = G__34091;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32367){
var map__32368 = p__32367;
var map__32368__$1 = (((((!((map__32368 == null))))?(((((map__32368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32368):map__32368);
var opts = map__32368__$1;
var statearr_32371_34102 = state;
(statearr_32371_34102[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32374_34103 = state;
(statearr_32374_34103[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32376_34104 = state;
(statearr_32376_34104[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32361){
var G__32362 = cljs.core.first(seq32361);
var seq32361__$1 = cljs.core.next(seq32361);
var G__32363 = cljs.core.first(seq32361__$1);
var seq32361__$2 = cljs.core.next(seq32361__$1);
var G__32364 = cljs.core.first(seq32361__$2);
var seq32361__$3 = cljs.core.next(seq32361__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32362,G__32363,G__32364,seq32361__$3);
}));

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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32378 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32378 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32379){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32379 = meta32379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32380,meta32379__$1){
var self__ = this;
var _32380__$1 = this;
return (new cljs.core.async.t_cljs$core$async32378(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32379__$1));
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32380){
var self__ = this;
var _32380__$1 = this;
return self__.meta32379;
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32378.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32379","meta32379",-1327121573,null)], null);
}));

(cljs.core.async.t_cljs$core$async32378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32378");

(cljs.core.async.t_cljs$core$async32378.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32378.
 */
cljs.core.async.__GT_t_cljs$core$async32378 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32378(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32379){
return (new cljs.core.async.t_cljs$core$async32378(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32379));
});

}

return (new cljs.core.async.t_cljs$core$async32378(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30807__auto___34125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_32491){
var state_val_32492 = (state_32491[(1)]);
if((state_val_32492 === (7))){
var inst_32406 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32494_34126 = state_32491__$1;
(statearr_32494_34126[(2)] = inst_32406);

(statearr_32494_34126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (20))){
var inst_32418 = (state_32491[(7)]);
var state_32491__$1 = state_32491;
var statearr_32495_34131 = state_32491__$1;
(statearr_32495_34131[(2)] = inst_32418);

(statearr_32495_34131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (27))){
var state_32491__$1 = state_32491;
var statearr_32496_34132 = state_32491__$1;
(statearr_32496_34132[(2)] = null);

(statearr_32496_34132[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (1))){
var inst_32393 = (state_32491[(8)]);
var inst_32393__$1 = calc_state();
var inst_32395 = (inst_32393__$1 == null);
var inst_32396 = cljs.core.not(inst_32395);
var state_32491__$1 = (function (){var statearr_32500 = state_32491;
(statearr_32500[(8)] = inst_32393__$1);

return statearr_32500;
})();
if(inst_32396){
var statearr_32501_34137 = state_32491__$1;
(statearr_32501_34137[(1)] = (2));

} else {
var statearr_32502_34138 = state_32491__$1;
(statearr_32502_34138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (24))){
var inst_32442 = (state_32491[(9)]);
var inst_32465 = (state_32491[(10)]);
var inst_32451 = (state_32491[(11)]);
var inst_32465__$1 = (inst_32442.cljs$core$IFn$_invoke$arity$1 ? inst_32442.cljs$core$IFn$_invoke$arity$1(inst_32451) : inst_32442.call(null,inst_32451));
var state_32491__$1 = (function (){var statearr_32504 = state_32491;
(statearr_32504[(10)] = inst_32465__$1);

return statearr_32504;
})();
if(cljs.core.truth_(inst_32465__$1)){
var statearr_32505_34142 = state_32491__$1;
(statearr_32505_34142[(1)] = (29));

} else {
var statearr_32506_34143 = state_32491__$1;
(statearr_32506_34143[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (4))){
var inst_32409 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32409)){
var statearr_32507_34145 = state_32491__$1;
(statearr_32507_34145[(1)] = (8));

} else {
var statearr_32508_34146 = state_32491__$1;
(statearr_32508_34146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (15))){
var inst_32436 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32436)){
var statearr_32510_34149 = state_32491__$1;
(statearr_32510_34149[(1)] = (19));

} else {
var statearr_32512_34151 = state_32491__$1;
(statearr_32512_34151[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (21))){
var inst_32441 = (state_32491[(12)]);
var inst_32441__$1 = (state_32491[(2)]);
var inst_32442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32441__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32443 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32441__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32441__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32491__$1 = (function (){var statearr_32513 = state_32491;
(statearr_32513[(9)] = inst_32442);

(statearr_32513[(12)] = inst_32441__$1);

(statearr_32513[(13)] = inst_32443);

return statearr_32513;
})();
return cljs.core.async.ioc_alts_BANG_(state_32491__$1,(22),inst_32444);
} else {
if((state_val_32492 === (31))){
var inst_32473 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32473)){
var statearr_32514_34160 = state_32491__$1;
(statearr_32514_34160[(1)] = (32));

} else {
var statearr_32515_34161 = state_32491__$1;
(statearr_32515_34161[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (32))){
var inst_32450 = (state_32491[(14)]);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32491__$1,(35),out,inst_32450);
} else {
if((state_val_32492 === (33))){
var inst_32441 = (state_32491[(12)]);
var inst_32418 = inst_32441;
var state_32491__$1 = (function (){var statearr_32516 = state_32491;
(statearr_32516[(7)] = inst_32418);

return statearr_32516;
})();
var statearr_32517_34165 = state_32491__$1;
(statearr_32517_34165[(2)] = null);

(statearr_32517_34165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (13))){
var inst_32418 = (state_32491[(7)]);
var inst_32425 = inst_32418.cljs$lang$protocol_mask$partition0$;
var inst_32426 = (inst_32425 & (64));
var inst_32427 = inst_32418.cljs$core$ISeq$;
var inst_32428 = (cljs.core.PROTOCOL_SENTINEL === inst_32427);
var inst_32429 = ((inst_32426) || (inst_32428));
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32429)){
var statearr_32518_34166 = state_32491__$1;
(statearr_32518_34166[(1)] = (16));

} else {
var statearr_32519_34169 = state_32491__$1;
(statearr_32519_34169[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (22))){
var inst_32451 = (state_32491[(11)]);
var inst_32450 = (state_32491[(14)]);
var inst_32449 = (state_32491[(2)]);
var inst_32450__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32449,(0),null);
var inst_32451__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32449,(1),null);
var inst_32452 = (inst_32450__$1 == null);
var inst_32453 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32451__$1,change);
var inst_32454 = ((inst_32452) || (inst_32453));
var state_32491__$1 = (function (){var statearr_32521 = state_32491;
(statearr_32521[(11)] = inst_32451__$1);

(statearr_32521[(14)] = inst_32450__$1);

return statearr_32521;
})();
if(cljs.core.truth_(inst_32454)){
var statearr_32522_34170 = state_32491__$1;
(statearr_32522_34170[(1)] = (23));

} else {
var statearr_32523_34171 = state_32491__$1;
(statearr_32523_34171[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (36))){
var inst_32441 = (state_32491[(12)]);
var inst_32418 = inst_32441;
var state_32491__$1 = (function (){var statearr_32526 = state_32491;
(statearr_32526[(7)] = inst_32418);

return statearr_32526;
})();
var statearr_32527_34172 = state_32491__$1;
(statearr_32527_34172[(2)] = null);

(statearr_32527_34172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (29))){
var inst_32465 = (state_32491[(10)]);
var state_32491__$1 = state_32491;
var statearr_32528_34173 = state_32491__$1;
(statearr_32528_34173[(2)] = inst_32465);

(statearr_32528_34173[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (6))){
var state_32491__$1 = state_32491;
var statearr_32529_34174 = state_32491__$1;
(statearr_32529_34174[(2)] = false);

(statearr_32529_34174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (28))){
var inst_32461 = (state_32491[(2)]);
var inst_32462 = calc_state();
var inst_32418 = inst_32462;
var state_32491__$1 = (function (){var statearr_32530 = state_32491;
(statearr_32530[(7)] = inst_32418);

(statearr_32530[(15)] = inst_32461);

return statearr_32530;
})();
var statearr_32531_34179 = state_32491__$1;
(statearr_32531_34179[(2)] = null);

(statearr_32531_34179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (25))){
var inst_32487 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32534_34188 = state_32491__$1;
(statearr_32534_34188[(2)] = inst_32487);

(statearr_32534_34188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (34))){
var inst_32485 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32537_34193 = state_32491__$1;
(statearr_32537_34193[(2)] = inst_32485);

(statearr_32537_34193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (17))){
var state_32491__$1 = state_32491;
var statearr_32538_34198 = state_32491__$1;
(statearr_32538_34198[(2)] = false);

(statearr_32538_34198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (3))){
var state_32491__$1 = state_32491;
var statearr_32540_34201 = state_32491__$1;
(statearr_32540_34201[(2)] = false);

(statearr_32540_34201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (12))){
var inst_32489 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32491__$1,inst_32489);
} else {
if((state_val_32492 === (2))){
var inst_32393 = (state_32491[(8)]);
var inst_32398 = inst_32393.cljs$lang$protocol_mask$partition0$;
var inst_32399 = (inst_32398 & (64));
var inst_32400 = inst_32393.cljs$core$ISeq$;
var inst_32401 = (cljs.core.PROTOCOL_SENTINEL === inst_32400);
var inst_32402 = ((inst_32399) || (inst_32401));
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32402)){
var statearr_32541_34210 = state_32491__$1;
(statearr_32541_34210[(1)] = (5));

} else {
var statearr_32542_34211 = state_32491__$1;
(statearr_32542_34211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (23))){
var inst_32450 = (state_32491[(14)]);
var inst_32456 = (inst_32450 == null);
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32456)){
var statearr_32543_34213 = state_32491__$1;
(statearr_32543_34213[(1)] = (26));

} else {
var statearr_32544_34214 = state_32491__$1;
(statearr_32544_34214[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (35))){
var inst_32476 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
if(cljs.core.truth_(inst_32476)){
var statearr_32545_34217 = state_32491__$1;
(statearr_32545_34217[(1)] = (36));

} else {
var statearr_32546_34218 = state_32491__$1;
(statearr_32546_34218[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (19))){
var inst_32418 = (state_32491[(7)]);
var inst_32438 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32418);
var state_32491__$1 = state_32491;
var statearr_32547_34226 = state_32491__$1;
(statearr_32547_34226[(2)] = inst_32438);

(statearr_32547_34226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (11))){
var inst_32418 = (state_32491[(7)]);
var inst_32422 = (inst_32418 == null);
var inst_32423 = cljs.core.not(inst_32422);
var state_32491__$1 = state_32491;
if(inst_32423){
var statearr_32548_34231 = state_32491__$1;
(statearr_32548_34231[(1)] = (13));

} else {
var statearr_32549_34232 = state_32491__$1;
(statearr_32549_34232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (9))){
var inst_32393 = (state_32491[(8)]);
var state_32491__$1 = state_32491;
var statearr_32550_34234 = state_32491__$1;
(statearr_32550_34234[(2)] = inst_32393);

(statearr_32550_34234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (5))){
var state_32491__$1 = state_32491;
var statearr_32551_34238 = state_32491__$1;
(statearr_32551_34238[(2)] = true);

(statearr_32551_34238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (14))){
var state_32491__$1 = state_32491;
var statearr_32552_34243 = state_32491__$1;
(statearr_32552_34243[(2)] = false);

(statearr_32552_34243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (26))){
var inst_32451 = (state_32491[(11)]);
var inst_32458 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32451);
var state_32491__$1 = state_32491;
var statearr_32553_34244 = state_32491__$1;
(statearr_32553_34244[(2)] = inst_32458);

(statearr_32553_34244[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (16))){
var state_32491__$1 = state_32491;
var statearr_32555_34245 = state_32491__$1;
(statearr_32555_34245[(2)] = true);

(statearr_32555_34245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (38))){
var inst_32481 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32556_34249 = state_32491__$1;
(statearr_32556_34249[(2)] = inst_32481);

(statearr_32556_34249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (30))){
var inst_32442 = (state_32491[(9)]);
var inst_32451 = (state_32491[(11)]);
var inst_32443 = (state_32491[(13)]);
var inst_32468 = cljs.core.empty_QMARK_(inst_32442);
var inst_32469 = (inst_32443.cljs$core$IFn$_invoke$arity$1 ? inst_32443.cljs$core$IFn$_invoke$arity$1(inst_32451) : inst_32443.call(null,inst_32451));
var inst_32470 = cljs.core.not(inst_32469);
var inst_32471 = ((inst_32468) && (inst_32470));
var state_32491__$1 = state_32491;
var statearr_32561_34252 = state_32491__$1;
(statearr_32561_34252[(2)] = inst_32471);

(statearr_32561_34252[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (10))){
var inst_32393 = (state_32491[(8)]);
var inst_32414 = (state_32491[(2)]);
var inst_32415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32414,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32414,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32414,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32418 = inst_32393;
var state_32491__$1 = (function (){var statearr_32573 = state_32491;
(statearr_32573[(16)] = inst_32417);

(statearr_32573[(17)] = inst_32416);

(statearr_32573[(7)] = inst_32418);

(statearr_32573[(18)] = inst_32415);

return statearr_32573;
})();
var statearr_32574_34259 = state_32491__$1;
(statearr_32574_34259[(2)] = null);

(statearr_32574_34259[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (18))){
var inst_32433 = (state_32491[(2)]);
var state_32491__$1 = state_32491;
var statearr_32575_34262 = state_32491__$1;
(statearr_32575_34262[(2)] = inst_32433);

(statearr_32575_34262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (37))){
var state_32491__$1 = state_32491;
var statearr_32576_34267 = state_32491__$1;
(statearr_32576_34267[(2)] = null);

(statearr_32576_34267[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32492 === (8))){
var inst_32393 = (state_32491[(8)]);
var inst_32411 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32393);
var state_32491__$1 = state_32491;
var statearr_32577_34276 = state_32491__$1;
(statearr_32577_34276[(2)] = inst_32411);

(statearr_32577_34276[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__30587__auto__ = null;
var cljs$core$async$mix_$_state_machine__30587__auto____0 = (function (){
var statearr_32580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32580[(0)] = cljs$core$async$mix_$_state_machine__30587__auto__);

(statearr_32580[(1)] = (1));

return statearr_32580;
});
var cljs$core$async$mix_$_state_machine__30587__auto____1 = (function (state_32491){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_32491);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e32581){var ex__30590__auto__ = e32581;
var statearr_32582_34287 = state_32491;
(statearr_32582_34287[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_32491[(4)]))){
var statearr_32583_34288 = state_32491;
(statearr_32583_34288[(1)] = cljs.core.first((state_32491[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34290 = state_32491;
state_32491 = G__34290;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30587__auto__ = function(state_32491){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30587__auto____1.call(this,state_32491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30587__auto____0;
cljs$core$async$mix_$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30587__auto____1;
return cljs$core$async$mix_$_state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_32584 = f__30808__auto__();
(statearr_32584[(6)] = c__30807__auto___34125);

return statearr_32584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_34295 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34295(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34298 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34298(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34309 = (function() {
var G__34310 = null;
var G__34310__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34310__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34310 = function(p,v){
switch(arguments.length){
case 1:
return G__34310__1.call(this,p);
case 2:
return G__34310__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34310.cljs$core$IFn$_invoke$arity$1 = G__34310__1;
G__34310.cljs$core$IFn$_invoke$arity$2 = G__34310__2;
return G__34310;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32601 = arguments.length;
switch (G__32601) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34309(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34309(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__32608 = arguments.length;
switch (G__32608) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32605_SHARP_){
if(cljs.core.truth_((p1__32605_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32605_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32605_SHARP_.call(null,topic)))){
return p1__32605_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32605_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32609 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32610){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32610 = meta32610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32611,meta32610__$1){
var self__ = this;
var _32611__$1 = this;
return (new cljs.core.async.t_cljs$core$async32609(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32610__$1));
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32611){
var self__ = this;
var _32611__$1 = this;
return self__.meta32610;
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32609.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32610","meta32610",-1148284560,null)], null);
}));

(cljs.core.async.t_cljs$core$async32609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32609");

(cljs.core.async.t_cljs$core$async32609.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32609.
 */
cljs.core.async.__GT_t_cljs$core$async32609 = (function cljs$core$async$__GT_t_cljs$core$async32609(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32610){
return (new cljs.core.async.t_cljs$core$async32609(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32610));
});

}

return (new cljs.core.async.t_cljs$core$async32609(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30807__auto___34355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_32691){
var state_val_32692 = (state_32691[(1)]);
if((state_val_32692 === (7))){
var inst_32687 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32693_34356 = state_32691__$1;
(statearr_32693_34356[(2)] = inst_32687);

(statearr_32693_34356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (20))){
var state_32691__$1 = state_32691;
var statearr_32694_34358 = state_32691__$1;
(statearr_32694_34358[(2)] = null);

(statearr_32694_34358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (1))){
var state_32691__$1 = state_32691;
var statearr_32695_34360 = state_32691__$1;
(statearr_32695_34360[(2)] = null);

(statearr_32695_34360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (24))){
var inst_32670 = (state_32691[(7)]);
var inst_32679 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32670);
var state_32691__$1 = state_32691;
var statearr_32696_34362 = state_32691__$1;
(statearr_32696_34362[(2)] = inst_32679);

(statearr_32696_34362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (4))){
var inst_32622 = (state_32691[(8)]);
var inst_32622__$1 = (state_32691[(2)]);
var inst_32623 = (inst_32622__$1 == null);
var state_32691__$1 = (function (){var statearr_32697 = state_32691;
(statearr_32697[(8)] = inst_32622__$1);

return statearr_32697;
})();
if(cljs.core.truth_(inst_32623)){
var statearr_32698_34364 = state_32691__$1;
(statearr_32698_34364[(1)] = (5));

} else {
var statearr_32699_34367 = state_32691__$1;
(statearr_32699_34367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (15))){
var inst_32664 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32700_34370 = state_32691__$1;
(statearr_32700_34370[(2)] = inst_32664);

(statearr_32700_34370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (21))){
var inst_32684 = (state_32691[(2)]);
var state_32691__$1 = (function (){var statearr_32702 = state_32691;
(statearr_32702[(9)] = inst_32684);

return statearr_32702;
})();
var statearr_32703_34372 = state_32691__$1;
(statearr_32703_34372[(2)] = null);

(statearr_32703_34372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (13))){
var inst_32646 = (state_32691[(10)]);
var inst_32648 = cljs.core.chunked_seq_QMARK_(inst_32646);
var state_32691__$1 = state_32691;
if(inst_32648){
var statearr_32704_34377 = state_32691__$1;
(statearr_32704_34377[(1)] = (16));

} else {
var statearr_32705_34378 = state_32691__$1;
(statearr_32705_34378[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (22))){
var inst_32676 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32676)){
var statearr_32706_34382 = state_32691__$1;
(statearr_32706_34382[(1)] = (23));

} else {
var statearr_32707_34384 = state_32691__$1;
(statearr_32707_34384[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (6))){
var inst_32670 = (state_32691[(7)]);
var inst_32672 = (state_32691[(11)]);
var inst_32622 = (state_32691[(8)]);
var inst_32670__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32622) : topic_fn.call(null,inst_32622));
var inst_32671 = cljs.core.deref(mults);
var inst_32672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32671,inst_32670__$1);
var state_32691__$1 = (function (){var statearr_32708 = state_32691;
(statearr_32708[(7)] = inst_32670__$1);

(statearr_32708[(11)] = inst_32672__$1);

return statearr_32708;
})();
if(cljs.core.truth_(inst_32672__$1)){
var statearr_32709_34390 = state_32691__$1;
(statearr_32709_34390[(1)] = (19));

} else {
var statearr_32710_34392 = state_32691__$1;
(statearr_32710_34392[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (25))){
var inst_32681 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32712_34396 = state_32691__$1;
(statearr_32712_34396[(2)] = inst_32681);

(statearr_32712_34396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (17))){
var inst_32646 = (state_32691[(10)]);
var inst_32655 = cljs.core.first(inst_32646);
var inst_32656 = cljs.core.async.muxch_STAR_(inst_32655);
var inst_32657 = cljs.core.async.close_BANG_(inst_32656);
var inst_32658 = cljs.core.next(inst_32646);
var inst_32632 = inst_32658;
var inst_32633 = null;
var inst_32634 = (0);
var inst_32635 = (0);
var state_32691__$1 = (function (){var statearr_32714 = state_32691;
(statearr_32714[(12)] = inst_32657);

(statearr_32714[(13)] = inst_32635);

(statearr_32714[(14)] = inst_32632);

(statearr_32714[(15)] = inst_32634);

(statearr_32714[(16)] = inst_32633);

return statearr_32714;
})();
var statearr_32715_34401 = state_32691__$1;
(statearr_32715_34401[(2)] = null);

(statearr_32715_34401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (3))){
var inst_32689 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32691__$1,inst_32689);
} else {
if((state_val_32692 === (12))){
var inst_32666 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32716_34403 = state_32691__$1;
(statearr_32716_34403[(2)] = inst_32666);

(statearr_32716_34403[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (2))){
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32691__$1,(4),ch);
} else {
if((state_val_32692 === (23))){
var state_32691__$1 = state_32691;
var statearr_32717_34405 = state_32691__$1;
(statearr_32717_34405[(2)] = null);

(statearr_32717_34405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (19))){
var inst_32672 = (state_32691[(11)]);
var inst_32622 = (state_32691[(8)]);
var inst_32674 = cljs.core.async.muxch_STAR_(inst_32672);
var state_32691__$1 = state_32691;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32691__$1,(22),inst_32674,inst_32622);
} else {
if((state_val_32692 === (11))){
var inst_32632 = (state_32691[(14)]);
var inst_32646 = (state_32691[(10)]);
var inst_32646__$1 = cljs.core.seq(inst_32632);
var state_32691__$1 = (function (){var statearr_32721 = state_32691;
(statearr_32721[(10)] = inst_32646__$1);

return statearr_32721;
})();
if(inst_32646__$1){
var statearr_32722_34408 = state_32691__$1;
(statearr_32722_34408[(1)] = (13));

} else {
var statearr_32723_34413 = state_32691__$1;
(statearr_32723_34413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (9))){
var inst_32668 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32724_34414 = state_32691__$1;
(statearr_32724_34414[(2)] = inst_32668);

(statearr_32724_34414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (5))){
var inst_32629 = cljs.core.deref(mults);
var inst_32630 = cljs.core.vals(inst_32629);
var inst_32631 = cljs.core.seq(inst_32630);
var inst_32632 = inst_32631;
var inst_32633 = null;
var inst_32634 = (0);
var inst_32635 = (0);
var state_32691__$1 = (function (){var statearr_32725 = state_32691;
(statearr_32725[(13)] = inst_32635);

(statearr_32725[(14)] = inst_32632);

(statearr_32725[(15)] = inst_32634);

(statearr_32725[(16)] = inst_32633);

return statearr_32725;
})();
var statearr_32726_34417 = state_32691__$1;
(statearr_32726_34417[(2)] = null);

(statearr_32726_34417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (14))){
var state_32691__$1 = state_32691;
var statearr_32730_34420 = state_32691__$1;
(statearr_32730_34420[(2)] = null);

(statearr_32730_34420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (16))){
var inst_32646 = (state_32691[(10)]);
var inst_32650 = cljs.core.chunk_first(inst_32646);
var inst_32651 = cljs.core.chunk_rest(inst_32646);
var inst_32652 = cljs.core.count(inst_32650);
var inst_32632 = inst_32651;
var inst_32633 = inst_32650;
var inst_32634 = inst_32652;
var inst_32635 = (0);
var state_32691__$1 = (function (){var statearr_32731 = state_32691;
(statearr_32731[(13)] = inst_32635);

(statearr_32731[(14)] = inst_32632);

(statearr_32731[(15)] = inst_32634);

(statearr_32731[(16)] = inst_32633);

return statearr_32731;
})();
var statearr_32732_34430 = state_32691__$1;
(statearr_32732_34430[(2)] = null);

(statearr_32732_34430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (10))){
var inst_32635 = (state_32691[(13)]);
var inst_32632 = (state_32691[(14)]);
var inst_32634 = (state_32691[(15)]);
var inst_32633 = (state_32691[(16)]);
var inst_32640 = cljs.core._nth(inst_32633,inst_32635);
var inst_32641 = cljs.core.async.muxch_STAR_(inst_32640);
var inst_32642 = cljs.core.async.close_BANG_(inst_32641);
var inst_32643 = (inst_32635 + (1));
var tmp32727 = inst_32632;
var tmp32728 = inst_32634;
var tmp32729 = inst_32633;
var inst_32632__$1 = tmp32727;
var inst_32633__$1 = tmp32729;
var inst_32634__$1 = tmp32728;
var inst_32635__$1 = inst_32643;
var state_32691__$1 = (function (){var statearr_32733 = state_32691;
(statearr_32733[(13)] = inst_32635__$1);

(statearr_32733[(14)] = inst_32632__$1);

(statearr_32733[(15)] = inst_32634__$1);

(statearr_32733[(17)] = inst_32642);

(statearr_32733[(16)] = inst_32633__$1);

return statearr_32733;
})();
var statearr_32734_34438 = state_32691__$1;
(statearr_32734_34438[(2)] = null);

(statearr_32734_34438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (18))){
var inst_32661 = (state_32691[(2)]);
var state_32691__$1 = state_32691;
var statearr_32735_34440 = state_32691__$1;
(statearr_32735_34440[(2)] = inst_32661);

(statearr_32735_34440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32692 === (8))){
var inst_32635 = (state_32691[(13)]);
var inst_32634 = (state_32691[(15)]);
var inst_32637 = (inst_32635 < inst_32634);
var inst_32638 = inst_32637;
var state_32691__$1 = state_32691;
if(cljs.core.truth_(inst_32638)){
var statearr_32736_34445 = state_32691__$1;
(statearr_32736_34445[(1)] = (10));

} else {
var statearr_32737_34447 = state_32691__$1;
(statearr_32737_34447[(1)] = (11));

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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_32740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32740[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_32740[(1)] = (1));

return statearr_32740;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_32691){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_32691);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e32741){var ex__30590__auto__ = e32741;
var statearr_32743_34456 = state_32691;
(statearr_32743_34456[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_32691[(4)]))){
var statearr_32745_34458 = state_32691;
(statearr_32745_34458[(1)] = cljs.core.first((state_32691[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34463 = state_32691;
state_32691 = G__34463;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_32691){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_32691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_32746 = f__30808__auto__();
(statearr_32746[(6)] = c__30807__auto___34355);

return statearr_32746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
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
var G__32751 = arguments.length;
switch (G__32751) {
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
var G__32758 = arguments.length;
switch (G__32758) {
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
var G__32762 = arguments.length;
switch (G__32762) {
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
var c__30807__auto___34491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_32819){
var state_val_32820 = (state_32819[(1)]);
if((state_val_32820 === (7))){
var state_32819__$1 = state_32819;
var statearr_32823_34494 = state_32819__$1;
(statearr_32823_34494[(2)] = null);

(statearr_32823_34494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (1))){
var state_32819__$1 = state_32819;
var statearr_32824_34497 = state_32819__$1;
(statearr_32824_34497[(2)] = null);

(statearr_32824_34497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (4))){
var inst_32769 = (state_32819[(7)]);
var inst_32768 = (state_32819[(8)]);
var inst_32772 = (inst_32769 < inst_32768);
var state_32819__$1 = state_32819;
if(cljs.core.truth_(inst_32772)){
var statearr_32826_34503 = state_32819__$1;
(statearr_32826_34503[(1)] = (6));

} else {
var statearr_32827_34504 = state_32819__$1;
(statearr_32827_34504[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (15))){
var inst_32801 = (state_32819[(9)]);
var inst_32810 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32801);
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32819__$1,(17),out,inst_32810);
} else {
if((state_val_32820 === (13))){
var inst_32801 = (state_32819[(9)]);
var inst_32801__$1 = (state_32819[(2)]);
var inst_32802 = cljs.core.some(cljs.core.nil_QMARK_,inst_32801__$1);
var state_32819__$1 = (function (){var statearr_32832 = state_32819;
(statearr_32832[(9)] = inst_32801__$1);

return statearr_32832;
})();
if(cljs.core.truth_(inst_32802)){
var statearr_32833_34514 = state_32819__$1;
(statearr_32833_34514[(1)] = (14));

} else {
var statearr_32834_34516 = state_32819__$1;
(statearr_32834_34516[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (6))){
var state_32819__$1 = state_32819;
var statearr_32835_34518 = state_32819__$1;
(statearr_32835_34518[(2)] = null);

(statearr_32835_34518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (17))){
var inst_32812 = (state_32819[(2)]);
var state_32819__$1 = (function (){var statearr_32837 = state_32819;
(statearr_32837[(10)] = inst_32812);

return statearr_32837;
})();
var statearr_32838_34521 = state_32819__$1;
(statearr_32838_34521[(2)] = null);

(statearr_32838_34521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (3))){
var inst_32817 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32819__$1,inst_32817);
} else {
if((state_val_32820 === (12))){
var _ = (function (){var statearr_32839 = state_32819;
(statearr_32839[(4)] = cljs.core.rest((state_32819[(4)])));

return statearr_32839;
})();
var state_32819__$1 = state_32819;
var ex32836 = (state_32819__$1[(2)]);
var statearr_32840_34527 = state_32819__$1;
(statearr_32840_34527[(5)] = ex32836);


if((ex32836 instanceof Object)){
var statearr_32841_34528 = state_32819__$1;
(statearr_32841_34528[(1)] = (11));

(statearr_32841_34528[(5)] = null);

} else {
throw ex32836;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (2))){
var inst_32767 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32768 = cnt;
var inst_32769 = (0);
var state_32819__$1 = (function (){var statearr_32843 = state_32819;
(statearr_32843[(11)] = inst_32767);

(statearr_32843[(7)] = inst_32769);

(statearr_32843[(8)] = inst_32768);

return statearr_32843;
})();
var statearr_32844_34534 = state_32819__$1;
(statearr_32844_34534[(2)] = null);

(statearr_32844_34534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (11))){
var inst_32776 = (state_32819[(2)]);
var inst_32781 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32819__$1 = (function (){var statearr_32845 = state_32819;
(statearr_32845[(12)] = inst_32776);

return statearr_32845;
})();
var statearr_32846_34541 = state_32819__$1;
(statearr_32846_34541[(2)] = inst_32781);

(statearr_32846_34541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (9))){
var inst_32769 = (state_32819[(7)]);
var _ = (function (){var statearr_32847 = state_32819;
(statearr_32847[(4)] = cljs.core.cons((12),(state_32819[(4)])));

return statearr_32847;
})();
var inst_32787 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32769) : chs__$1.call(null,inst_32769));
var inst_32788 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32769) : done.call(null,inst_32769));
var inst_32789 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32787,inst_32788);
var ___$1 = (function (){var statearr_32849 = state_32819;
(statearr_32849[(4)] = cljs.core.rest((state_32819[(4)])));

return statearr_32849;
})();
var state_32819__$1 = state_32819;
var statearr_32850_34549 = state_32819__$1;
(statearr_32850_34549[(2)] = inst_32789);

(statearr_32850_34549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (5))){
var inst_32799 = (state_32819[(2)]);
var state_32819__$1 = (function (){var statearr_32851 = state_32819;
(statearr_32851[(13)] = inst_32799);

return statearr_32851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32819__$1,(13),dchan);
} else {
if((state_val_32820 === (14))){
var inst_32804 = cljs.core.async.close_BANG_(out);
var state_32819__$1 = state_32819;
var statearr_32853_34560 = state_32819__$1;
(statearr_32853_34560[(2)] = inst_32804);

(statearr_32853_34560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (16))){
var inst_32815 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
var statearr_32854_34562 = state_32819__$1;
(statearr_32854_34562[(2)] = inst_32815);

(statearr_32854_34562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (10))){
var inst_32769 = (state_32819[(7)]);
var inst_32792 = (state_32819[(2)]);
var inst_32793 = (inst_32769 + (1));
var inst_32769__$1 = inst_32793;
var state_32819__$1 = (function (){var statearr_32855 = state_32819;
(statearr_32855[(7)] = inst_32769__$1);

(statearr_32855[(14)] = inst_32792);

return statearr_32855;
})();
var statearr_32856_34565 = state_32819__$1;
(statearr_32856_34565[(2)] = null);

(statearr_32856_34565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32820 === (8))){
var inst_32797 = (state_32819[(2)]);
var state_32819__$1 = state_32819;
var statearr_32857_34567 = state_32819__$1;
(statearr_32857_34567[(2)] = inst_32797);

(statearr_32857_34567[(1)] = (5));


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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_32859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32859[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_32859[(1)] = (1));

return statearr_32859;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_32819){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_32819);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e32860){var ex__30590__auto__ = e32860;
var statearr_32861_34586 = state_32819;
(statearr_32861_34586[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_32819[(4)]))){
var statearr_32863_34589 = state_32819;
(statearr_32863_34589[(1)] = cljs.core.first((state_32819[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34594 = state_32819;
state_32819 = G__34594;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_32819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_32819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_32865 = f__30808__auto__();
(statearr_32865[(6)] = c__30807__auto___34491);

return statearr_32865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));


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
var G__32868 = arguments.length;
switch (G__32868) {
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
var c__30807__auto___34608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_32912){
var state_val_32913 = (state_32912[(1)]);
if((state_val_32913 === (7))){
var inst_32885 = (state_32912[(7)]);
var inst_32886 = (state_32912[(8)]);
var inst_32885__$1 = (state_32912[(2)]);
var inst_32886__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32885__$1,(0),null);
var inst_32888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32885__$1,(1),null);
var inst_32889 = (inst_32886__$1 == null);
var state_32912__$1 = (function (){var statearr_32927 = state_32912;
(statearr_32927[(7)] = inst_32885__$1);

(statearr_32927[(9)] = inst_32888);

(statearr_32927[(8)] = inst_32886__$1);

return statearr_32927;
})();
if(cljs.core.truth_(inst_32889)){
var statearr_32928_34612 = state_32912__$1;
(statearr_32928_34612[(1)] = (8));

} else {
var statearr_32929_34613 = state_32912__$1;
(statearr_32929_34613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (1))){
var inst_32871 = cljs.core.vec(chs);
var inst_32872 = inst_32871;
var state_32912__$1 = (function (){var statearr_32930 = state_32912;
(statearr_32930[(10)] = inst_32872);

return statearr_32930;
})();
var statearr_32931_34616 = state_32912__$1;
(statearr_32931_34616[(2)] = null);

(statearr_32931_34616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (4))){
var inst_32872 = (state_32912[(10)]);
var state_32912__$1 = state_32912;
return cljs.core.async.ioc_alts_BANG_(state_32912__$1,(7),inst_32872);
} else {
if((state_val_32913 === (6))){
var inst_32907 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32932_34617 = state_32912__$1;
(statearr_32932_34617[(2)] = inst_32907);

(statearr_32932_34617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (3))){
var inst_32909 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32912__$1,inst_32909);
} else {
if((state_val_32913 === (2))){
var inst_32872 = (state_32912[(10)]);
var inst_32874 = cljs.core.count(inst_32872);
var inst_32875 = (inst_32874 > (0));
var state_32912__$1 = state_32912;
if(cljs.core.truth_(inst_32875)){
var statearr_32934_34618 = state_32912__$1;
(statearr_32934_34618[(1)] = (4));

} else {
var statearr_32935_34619 = state_32912__$1;
(statearr_32935_34619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (11))){
var inst_32872 = (state_32912[(10)]);
var inst_32896 = (state_32912[(2)]);
var tmp32933 = inst_32872;
var inst_32872__$1 = tmp32933;
var state_32912__$1 = (function (){var statearr_32936 = state_32912;
(statearr_32936[(10)] = inst_32872__$1);

(statearr_32936[(11)] = inst_32896);

return statearr_32936;
})();
var statearr_32937_34621 = state_32912__$1;
(statearr_32937_34621[(2)] = null);

(statearr_32937_34621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (9))){
var inst_32886 = (state_32912[(8)]);
var state_32912__$1 = state_32912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32912__$1,(11),out,inst_32886);
} else {
if((state_val_32913 === (5))){
var inst_32905 = cljs.core.async.close_BANG_(out);
var state_32912__$1 = state_32912;
var statearr_32938_34622 = state_32912__$1;
(statearr_32938_34622[(2)] = inst_32905);

(statearr_32938_34622[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (10))){
var inst_32899 = (state_32912[(2)]);
var state_32912__$1 = state_32912;
var statearr_32939_34624 = state_32912__$1;
(statearr_32939_34624[(2)] = inst_32899);

(statearr_32939_34624[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32913 === (8))){
var inst_32885 = (state_32912[(7)]);
var inst_32888 = (state_32912[(9)]);
var inst_32872 = (state_32912[(10)]);
var inst_32886 = (state_32912[(8)]);
var inst_32891 = (function (){var cs = inst_32872;
var vec__32881 = inst_32885;
var v = inst_32886;
var c = inst_32888;
return (function (p1__32866_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32866_SHARP_);
});
})();
var inst_32892 = cljs.core.filterv(inst_32891,inst_32872);
var inst_32872__$1 = inst_32892;
var state_32912__$1 = (function (){var statearr_32940 = state_32912;
(statearr_32940[(10)] = inst_32872__$1);

return statearr_32940;
})();
var statearr_32941_34632 = state_32912__$1;
(statearr_32941_34632[(2)] = null);

(statearr_32941_34632[(1)] = (2));


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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_32942 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32942[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_32942[(1)] = (1));

return statearr_32942;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_32912){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_32912);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e32943){var ex__30590__auto__ = e32943;
var statearr_32944_34657 = state_32912;
(statearr_32944_34657[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_32912[(4)]))){
var statearr_32945_34663 = state_32912;
(statearr_32945_34663[(1)] = cljs.core.first((state_32912[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34673 = state_32912;
state_32912 = G__34673;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_32912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_32912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_32948 = f__30808__auto__();
(statearr_32948[(6)] = c__30807__auto___34608);

return statearr_32948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
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
var G__32956 = arguments.length;
switch (G__32956) {
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
var c__30807__auto___34716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_32984){
var state_val_32985 = (state_32984[(1)]);
if((state_val_32985 === (7))){
var inst_32966 = (state_32984[(7)]);
var inst_32966__$1 = (state_32984[(2)]);
var inst_32967 = (inst_32966__$1 == null);
var inst_32968 = cljs.core.not(inst_32967);
var state_32984__$1 = (function (){var statearr_32988 = state_32984;
(statearr_32988[(7)] = inst_32966__$1);

return statearr_32988;
})();
if(inst_32968){
var statearr_32989_34723 = state_32984__$1;
(statearr_32989_34723[(1)] = (8));

} else {
var statearr_32990_34724 = state_32984__$1;
(statearr_32990_34724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (1))){
var inst_32961 = (0);
var state_32984__$1 = (function (){var statearr_32991 = state_32984;
(statearr_32991[(8)] = inst_32961);

return statearr_32991;
})();
var statearr_32992_34725 = state_32984__$1;
(statearr_32992_34725[(2)] = null);

(statearr_32992_34725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (4))){
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32984__$1,(7),ch);
} else {
if((state_val_32985 === (6))){
var inst_32979 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_32993_34735 = state_32984__$1;
(statearr_32993_34735[(2)] = inst_32979);

(statearr_32993_34735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (3))){
var inst_32981 = (state_32984[(2)]);
var inst_32982 = cljs.core.async.close_BANG_(out);
var state_32984__$1 = (function (){var statearr_32994 = state_32984;
(statearr_32994[(9)] = inst_32981);

return statearr_32994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32984__$1,inst_32982);
} else {
if((state_val_32985 === (2))){
var inst_32961 = (state_32984[(8)]);
var inst_32963 = (inst_32961 < n);
var state_32984__$1 = state_32984;
if(cljs.core.truth_(inst_32963)){
var statearr_32995_34756 = state_32984__$1;
(statearr_32995_34756[(1)] = (4));

} else {
var statearr_32996_34757 = state_32984__$1;
(statearr_32996_34757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (11))){
var inst_32961 = (state_32984[(8)]);
var inst_32971 = (state_32984[(2)]);
var inst_32972 = (inst_32961 + (1));
var inst_32961__$1 = inst_32972;
var state_32984__$1 = (function (){var statearr_32997 = state_32984;
(statearr_32997[(8)] = inst_32961__$1);

(statearr_32997[(10)] = inst_32971);

return statearr_32997;
})();
var statearr_32998_34759 = state_32984__$1;
(statearr_32998_34759[(2)] = null);

(statearr_32998_34759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (9))){
var state_32984__$1 = state_32984;
var statearr_32999_34761 = state_32984__$1;
(statearr_32999_34761[(2)] = null);

(statearr_32999_34761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (5))){
var state_32984__$1 = state_32984;
var statearr_33000_34762 = state_32984__$1;
(statearr_33000_34762[(2)] = null);

(statearr_33000_34762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (10))){
var inst_32976 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_33004_34764 = state_32984__$1;
(statearr_33004_34764[(2)] = inst_32976);

(statearr_33004_34764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (8))){
var inst_32966 = (state_32984[(7)]);
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32984__$1,(11),out,inst_32966);
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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_33006 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33006[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_33006[(1)] = (1));

return statearr_33006;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_32984){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_32984);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e33007){var ex__30590__auto__ = e33007;
var statearr_33008_34769 = state_32984;
(statearr_33008_34769[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_32984[(4)]))){
var statearr_33009_34770 = state_32984;
(statearr_33009_34770[(1)] = cljs.core.first((state_32984[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34771 = state_32984;
state_32984 = G__34771;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_32984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_32984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_33010 = f__30808__auto__();
(statearr_33010[(6)] = c__30807__auto___34716);

return statearr_33010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33012 = (function (f,ch,meta33013){
this.f = f;
this.ch = ch;
this.meta33013 = meta33013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33014,meta33013__$1){
var self__ = this;
var _33014__$1 = this;
return (new cljs.core.async.t_cljs$core$async33012(self__.f,self__.ch,meta33013__$1));
}));

(cljs.core.async.t_cljs$core$async33012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33014){
var self__ = this;
var _33014__$1 = this;
return self__.meta33013;
}));

(cljs.core.async.t_cljs$core$async33012.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33012.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33012.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33012.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33012.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33022 = (function (f,ch,meta33013,_,fn1,meta33023){
this.f = f;
this.ch = ch;
this.meta33013 = meta33013;
this._ = _;
this.fn1 = fn1;
this.meta33023 = meta33023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33024,meta33023__$1){
var self__ = this;
var _33024__$1 = this;
return (new cljs.core.async.t_cljs$core$async33022(self__.f,self__.ch,self__.meta33013,self__._,self__.fn1,meta33023__$1));
}));

(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33024){
var self__ = this;
var _33024__$1 = this;
return self__.meta33023;
}));

(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33011_SHARP_){
var G__33027 = (((p1__33011_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33011_SHARP_) : self__.f.call(null,p1__33011_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33027) : f1.call(null,G__33027));
});
}));

(cljs.core.async.t_cljs$core$async33022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33013","meta33013",324497615,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33012","cljs.core.async/t_cljs$core$async33012",1188159557,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33023","meta33023",1777698271,null)], null);
}));

(cljs.core.async.t_cljs$core$async33022.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33022");

(cljs.core.async.t_cljs$core$async33022.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33022");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33022.
 */
cljs.core.async.__GT_t_cljs$core$async33022 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33022(f__$1,ch__$1,meta33013__$1,___$2,fn1__$1,meta33023){
return (new cljs.core.async.t_cljs$core$async33022(f__$1,ch__$1,meta33013__$1,___$2,fn1__$1,meta33023));
});

}

return (new cljs.core.async.t_cljs$core$async33022(self__.f,self__.ch,self__.meta33013,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33035 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33035) : self__.f.call(null,G__33035));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33012.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33012.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33013","meta33013",324497615,null)], null);
}));

(cljs.core.async.t_cljs$core$async33012.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33012");

(cljs.core.async.t_cljs$core$async33012.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33012");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33012.
 */
cljs.core.async.__GT_t_cljs$core$async33012 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33012(f__$1,ch__$1,meta33013){
return (new cljs.core.async.t_cljs$core$async33012(f__$1,ch__$1,meta33013));
});

}

return (new cljs.core.async.t_cljs$core$async33012(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33041 = (function (f,ch,meta33042){
this.f = f;
this.ch = ch;
this.meta33042 = meta33042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33043,meta33042__$1){
var self__ = this;
var _33043__$1 = this;
return (new cljs.core.async.t_cljs$core$async33041(self__.f,self__.ch,meta33042__$1));
}));

(cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33043){
var self__ = this;
var _33043__$1 = this;
return self__.meta33042;
}));

(cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33042","meta33042",-1778661037,null)], null);
}));

(cljs.core.async.t_cljs$core$async33041.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33041");

(cljs.core.async.t_cljs$core$async33041.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33041");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33041.
 */
cljs.core.async.__GT_t_cljs$core$async33041 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33041(f__$1,ch__$1,meta33042){
return (new cljs.core.async.t_cljs$core$async33041(f__$1,ch__$1,meta33042));
});

}

return (new cljs.core.async.t_cljs$core$async33041(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33046 = (function (p,ch,meta33047){
this.p = p;
this.ch = ch;
this.meta33047 = meta33047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33048,meta33047__$1){
var self__ = this;
var _33048__$1 = this;
return (new cljs.core.async.t_cljs$core$async33046(self__.p,self__.ch,meta33047__$1));
}));

(cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33048){
var self__ = this;
var _33048__$1 = this;
return self__.meta33047;
}));

(cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33047","meta33047",-857145351,null)], null);
}));

(cljs.core.async.t_cljs$core$async33046.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33046");

(cljs.core.async.t_cljs$core$async33046.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33046");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33046.
 */
cljs.core.async.__GT_t_cljs$core$async33046 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33046(p__$1,ch__$1,meta33047){
return (new cljs.core.async.t_cljs$core$async33046(p__$1,ch__$1,meta33047));
});

}

return (new cljs.core.async.t_cljs$core$async33046(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33053 = arguments.length;
switch (G__33053) {
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
var c__30807__auto___34873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_33074){
var state_val_33075 = (state_33074[(1)]);
if((state_val_33075 === (7))){
var inst_33070 = (state_33074[(2)]);
var state_33074__$1 = state_33074;
var statearr_33077_34875 = state_33074__$1;
(statearr_33077_34875[(2)] = inst_33070);

(statearr_33077_34875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (1))){
var state_33074__$1 = state_33074;
var statearr_33078_34876 = state_33074__$1;
(statearr_33078_34876[(2)] = null);

(statearr_33078_34876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (4))){
var inst_33056 = (state_33074[(7)]);
var inst_33056__$1 = (state_33074[(2)]);
var inst_33057 = (inst_33056__$1 == null);
var state_33074__$1 = (function (){var statearr_33079 = state_33074;
(statearr_33079[(7)] = inst_33056__$1);

return statearr_33079;
})();
if(cljs.core.truth_(inst_33057)){
var statearr_33080_34879 = state_33074__$1;
(statearr_33080_34879[(1)] = (5));

} else {
var statearr_33081_34880 = state_33074__$1;
(statearr_33081_34880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (6))){
var inst_33056 = (state_33074[(7)]);
var inst_33061 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33056) : p.call(null,inst_33056));
var state_33074__$1 = state_33074;
if(cljs.core.truth_(inst_33061)){
var statearr_33082_34886 = state_33074__$1;
(statearr_33082_34886[(1)] = (8));

} else {
var statearr_33083_34887 = state_33074__$1;
(statearr_33083_34887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (3))){
var inst_33072 = (state_33074[(2)]);
var state_33074__$1 = state_33074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33074__$1,inst_33072);
} else {
if((state_val_33075 === (2))){
var state_33074__$1 = state_33074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33074__$1,(4),ch);
} else {
if((state_val_33075 === (11))){
var inst_33064 = (state_33074[(2)]);
var state_33074__$1 = state_33074;
var statearr_33084_34889 = state_33074__$1;
(statearr_33084_34889[(2)] = inst_33064);

(statearr_33084_34889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (9))){
var state_33074__$1 = state_33074;
var statearr_33085_34890 = state_33074__$1;
(statearr_33085_34890[(2)] = null);

(statearr_33085_34890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (5))){
var inst_33059 = cljs.core.async.close_BANG_(out);
var state_33074__$1 = state_33074;
var statearr_33086_34892 = state_33074__$1;
(statearr_33086_34892[(2)] = inst_33059);

(statearr_33086_34892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (10))){
var inst_33067 = (state_33074[(2)]);
var state_33074__$1 = (function (){var statearr_33087 = state_33074;
(statearr_33087[(8)] = inst_33067);

return statearr_33087;
})();
var statearr_33088_34896 = state_33074__$1;
(statearr_33088_34896[(2)] = null);

(statearr_33088_34896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (8))){
var inst_33056 = (state_33074[(7)]);
var state_33074__$1 = state_33074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33074__$1,(11),out,inst_33056);
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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_33089 = [null,null,null,null,null,null,null,null,null];
(statearr_33089[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_33089[(1)] = (1));

return statearr_33089;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_33074){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_33074);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e33090){var ex__30590__auto__ = e33090;
var statearr_33091_34900 = state_33074;
(statearr_33091_34900[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_33074[(4)]))){
var statearr_33092_34901 = state_33074;
(statearr_33092_34901[(1)] = cljs.core.first((state_33074[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34902 = state_33074;
state_33074 = G__34902;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_33074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_33074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_33097 = f__30808__auto__();
(statearr_33097[(6)] = c__30807__auto___34873);

return statearr_33097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33107 = arguments.length;
switch (G__33107) {
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
var c__30807__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_33172){
var state_val_33173 = (state_33172[(1)]);
if((state_val_33173 === (7))){
var inst_33168 = (state_33172[(2)]);
var state_33172__$1 = state_33172;
var statearr_33176_34904 = state_33172__$1;
(statearr_33176_34904[(2)] = inst_33168);

(statearr_33176_34904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (20))){
var inst_33137 = (state_33172[(7)]);
var inst_33149 = (state_33172[(2)]);
var inst_33150 = cljs.core.next(inst_33137);
var inst_33123 = inst_33150;
var inst_33124 = null;
var inst_33125 = (0);
var inst_33126 = (0);
var state_33172__$1 = (function (){var statearr_33179 = state_33172;
(statearr_33179[(8)] = inst_33149);

(statearr_33179[(9)] = inst_33124);

(statearr_33179[(10)] = inst_33123);

(statearr_33179[(11)] = inst_33126);

(statearr_33179[(12)] = inst_33125);

return statearr_33179;
})();
var statearr_33180_34908 = state_33172__$1;
(statearr_33180_34908[(2)] = null);

(statearr_33180_34908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (1))){
var state_33172__$1 = state_33172;
var statearr_33181_34910 = state_33172__$1;
(statearr_33181_34910[(2)] = null);

(statearr_33181_34910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (4))){
var inst_33112 = (state_33172[(13)]);
var inst_33112__$1 = (state_33172[(2)]);
var inst_33113 = (inst_33112__$1 == null);
var state_33172__$1 = (function (){var statearr_33182 = state_33172;
(statearr_33182[(13)] = inst_33112__$1);

return statearr_33182;
})();
if(cljs.core.truth_(inst_33113)){
var statearr_33183_34916 = state_33172__$1;
(statearr_33183_34916[(1)] = (5));

} else {
var statearr_33184_34917 = state_33172__$1;
(statearr_33184_34917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (15))){
var state_33172__$1 = state_33172;
var statearr_33188_34921 = state_33172__$1;
(statearr_33188_34921[(2)] = null);

(statearr_33188_34921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (21))){
var state_33172__$1 = state_33172;
var statearr_33189_34924 = state_33172__$1;
(statearr_33189_34924[(2)] = null);

(statearr_33189_34924[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (13))){
var inst_33124 = (state_33172[(9)]);
var inst_33123 = (state_33172[(10)]);
var inst_33126 = (state_33172[(11)]);
var inst_33125 = (state_33172[(12)]);
var inst_33133 = (state_33172[(2)]);
var inst_33134 = (inst_33126 + (1));
var tmp33185 = inst_33124;
var tmp33186 = inst_33123;
var tmp33187 = inst_33125;
var inst_33123__$1 = tmp33186;
var inst_33124__$1 = tmp33185;
var inst_33125__$1 = tmp33187;
var inst_33126__$1 = inst_33134;
var state_33172__$1 = (function (){var statearr_33192 = state_33172;
(statearr_33192[(14)] = inst_33133);

(statearr_33192[(9)] = inst_33124__$1);

(statearr_33192[(10)] = inst_33123__$1);

(statearr_33192[(11)] = inst_33126__$1);

(statearr_33192[(12)] = inst_33125__$1);

return statearr_33192;
})();
var statearr_33194_34928 = state_33172__$1;
(statearr_33194_34928[(2)] = null);

(statearr_33194_34928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (22))){
var state_33172__$1 = state_33172;
var statearr_33195_34929 = state_33172__$1;
(statearr_33195_34929[(2)] = null);

(statearr_33195_34929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (6))){
var inst_33112 = (state_33172[(13)]);
var inst_33121 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33112) : f.call(null,inst_33112));
var inst_33122 = cljs.core.seq(inst_33121);
var inst_33123 = inst_33122;
var inst_33124 = null;
var inst_33125 = (0);
var inst_33126 = (0);
var state_33172__$1 = (function (){var statearr_33202 = state_33172;
(statearr_33202[(9)] = inst_33124);

(statearr_33202[(10)] = inst_33123);

(statearr_33202[(11)] = inst_33126);

(statearr_33202[(12)] = inst_33125);

return statearr_33202;
})();
var statearr_33203_34938 = state_33172__$1;
(statearr_33203_34938[(2)] = null);

(statearr_33203_34938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (17))){
var inst_33137 = (state_33172[(7)]);
var inst_33142 = cljs.core.chunk_first(inst_33137);
var inst_33143 = cljs.core.chunk_rest(inst_33137);
var inst_33144 = cljs.core.count(inst_33142);
var inst_33123 = inst_33143;
var inst_33124 = inst_33142;
var inst_33125 = inst_33144;
var inst_33126 = (0);
var state_33172__$1 = (function (){var statearr_33204 = state_33172;
(statearr_33204[(9)] = inst_33124);

(statearr_33204[(10)] = inst_33123);

(statearr_33204[(11)] = inst_33126);

(statearr_33204[(12)] = inst_33125);

return statearr_33204;
})();
var statearr_33205_34945 = state_33172__$1;
(statearr_33205_34945[(2)] = null);

(statearr_33205_34945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (3))){
var inst_33170 = (state_33172[(2)]);
var state_33172__$1 = state_33172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33172__$1,inst_33170);
} else {
if((state_val_33173 === (12))){
var inst_33158 = (state_33172[(2)]);
var state_33172__$1 = state_33172;
var statearr_33206_34947 = state_33172__$1;
(statearr_33206_34947[(2)] = inst_33158);

(statearr_33206_34947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (2))){
var state_33172__$1 = state_33172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33172__$1,(4),in$);
} else {
if((state_val_33173 === (23))){
var inst_33166 = (state_33172[(2)]);
var state_33172__$1 = state_33172;
var statearr_33211_34949 = state_33172__$1;
(statearr_33211_34949[(2)] = inst_33166);

(statearr_33211_34949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (19))){
var inst_33153 = (state_33172[(2)]);
var state_33172__$1 = state_33172;
var statearr_33213_34950 = state_33172__$1;
(statearr_33213_34950[(2)] = inst_33153);

(statearr_33213_34950[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (11))){
var inst_33137 = (state_33172[(7)]);
var inst_33123 = (state_33172[(10)]);
var inst_33137__$1 = cljs.core.seq(inst_33123);
var state_33172__$1 = (function (){var statearr_33218 = state_33172;
(statearr_33218[(7)] = inst_33137__$1);

return statearr_33218;
})();
if(inst_33137__$1){
var statearr_33220_34954 = state_33172__$1;
(statearr_33220_34954[(1)] = (14));

} else {
var statearr_33221_34955 = state_33172__$1;
(statearr_33221_34955[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (9))){
var inst_33160 = (state_33172[(2)]);
var inst_33161 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33172__$1 = (function (){var statearr_33223 = state_33172;
(statearr_33223[(15)] = inst_33160);

return statearr_33223;
})();
if(cljs.core.truth_(inst_33161)){
var statearr_33225_34956 = state_33172__$1;
(statearr_33225_34956[(1)] = (21));

} else {
var statearr_33229_34957 = state_33172__$1;
(statearr_33229_34957[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (5))){
var inst_33115 = cljs.core.async.close_BANG_(out);
var state_33172__$1 = state_33172;
var statearr_33231_34962 = state_33172__$1;
(statearr_33231_34962[(2)] = inst_33115);

(statearr_33231_34962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (14))){
var inst_33137 = (state_33172[(7)]);
var inst_33139 = cljs.core.chunked_seq_QMARK_(inst_33137);
var state_33172__$1 = state_33172;
if(inst_33139){
var statearr_33233_34966 = state_33172__$1;
(statearr_33233_34966[(1)] = (17));

} else {
var statearr_33234_34967 = state_33172__$1;
(statearr_33234_34967[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (16))){
var inst_33156 = (state_33172[(2)]);
var state_33172__$1 = state_33172;
var statearr_33235_34968 = state_33172__$1;
(statearr_33235_34968[(2)] = inst_33156);

(statearr_33235_34968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33173 === (10))){
var inst_33124 = (state_33172[(9)]);
var inst_33126 = (state_33172[(11)]);
var inst_33131 = cljs.core._nth(inst_33124,inst_33126);
var state_33172__$1 = state_33172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33172__$1,(13),out,inst_33131);
} else {
if((state_val_33173 === (18))){
var inst_33137 = (state_33172[(7)]);
var inst_33147 = cljs.core.first(inst_33137);
var state_33172__$1 = state_33172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33172__$1,(20),out,inst_33147);
} else {
if((state_val_33173 === (8))){
var inst_33126 = (state_33172[(11)]);
var inst_33125 = (state_33172[(12)]);
var inst_33128 = (inst_33126 < inst_33125);
var inst_33129 = inst_33128;
var state_33172__$1 = state_33172;
if(cljs.core.truth_(inst_33129)){
var statearr_33240_34972 = state_33172__$1;
(statearr_33240_34972[(1)] = (10));

} else {
var statearr_33241_34973 = state_33172__$1;
(statearr_33241_34973[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30587__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30587__auto____0 = (function (){
var statearr_33246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33246[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30587__auto__);

(statearr_33246[(1)] = (1));

return statearr_33246;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30587__auto____1 = (function (state_33172){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_33172);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e33249){var ex__30590__auto__ = e33249;
var statearr_33250_34978 = state_33172;
(statearr_33250_34978[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_33172[(4)]))){
var statearr_33251_34979 = state_33172;
(statearr_33251_34979[(1)] = cljs.core.first((state_33172[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34980 = state_33172;
state_33172 = G__34980;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30587__auto__ = function(state_33172){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30587__auto____1.call(this,state_33172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30587__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30587__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_33252 = f__30808__auto__();
(statearr_33252[(6)] = c__30807__auto__);

return statearr_33252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));

return c__30807__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33254 = arguments.length;
switch (G__33254) {
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
var G__33263 = arguments.length;
switch (G__33263) {
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
var G__33270 = arguments.length;
switch (G__33270) {
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
var c__30807__auto___35004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_33303){
var state_val_33304 = (state_33303[(1)]);
if((state_val_33304 === (7))){
var inst_33298 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33305_35012 = state_33303__$1;
(statearr_33305_35012[(2)] = inst_33298);

(statearr_33305_35012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (1))){
var inst_33280 = null;
var state_33303__$1 = (function (){var statearr_33306 = state_33303;
(statearr_33306[(7)] = inst_33280);

return statearr_33306;
})();
var statearr_33308_35017 = state_33303__$1;
(statearr_33308_35017[(2)] = null);

(statearr_33308_35017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (4))){
var inst_33283 = (state_33303[(8)]);
var inst_33283__$1 = (state_33303[(2)]);
var inst_33284 = (inst_33283__$1 == null);
var inst_33285 = cljs.core.not(inst_33284);
var state_33303__$1 = (function (){var statearr_33309 = state_33303;
(statearr_33309[(8)] = inst_33283__$1);

return statearr_33309;
})();
if(inst_33285){
var statearr_33310_35026 = state_33303__$1;
(statearr_33310_35026[(1)] = (5));

} else {
var statearr_33311_35030 = state_33303__$1;
(statearr_33311_35030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (6))){
var state_33303__$1 = state_33303;
var statearr_33312_35031 = state_33303__$1;
(statearr_33312_35031[(2)] = null);

(statearr_33312_35031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (3))){
var inst_33300 = (state_33303[(2)]);
var inst_33301 = cljs.core.async.close_BANG_(out);
var state_33303__$1 = (function (){var statearr_33315 = state_33303;
(statearr_33315[(9)] = inst_33300);

return statearr_33315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33303__$1,inst_33301);
} else {
if((state_val_33304 === (2))){
var state_33303__$1 = state_33303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33303__$1,(4),ch);
} else {
if((state_val_33304 === (11))){
var inst_33283 = (state_33303[(8)]);
var inst_33292 = (state_33303[(2)]);
var inst_33280 = inst_33283;
var state_33303__$1 = (function (){var statearr_33316 = state_33303;
(statearr_33316[(10)] = inst_33292);

(statearr_33316[(7)] = inst_33280);

return statearr_33316;
})();
var statearr_33317_35043 = state_33303__$1;
(statearr_33317_35043[(2)] = null);

(statearr_33317_35043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (9))){
var inst_33283 = (state_33303[(8)]);
var state_33303__$1 = state_33303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33303__$1,(11),out,inst_33283);
} else {
if((state_val_33304 === (5))){
var inst_33280 = (state_33303[(7)]);
var inst_33283 = (state_33303[(8)]);
var inst_33287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33283,inst_33280);
var state_33303__$1 = state_33303;
if(inst_33287){
var statearr_33321_35054 = state_33303__$1;
(statearr_33321_35054[(1)] = (8));

} else {
var statearr_33322_35059 = state_33303__$1;
(statearr_33322_35059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (10))){
var inst_33295 = (state_33303[(2)]);
var state_33303__$1 = state_33303;
var statearr_33323_35062 = state_33303__$1;
(statearr_33323_35062[(2)] = inst_33295);

(statearr_33323_35062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33304 === (8))){
var inst_33280 = (state_33303[(7)]);
var tmp33320 = inst_33280;
var inst_33280__$1 = tmp33320;
var state_33303__$1 = (function (){var statearr_33324 = state_33303;
(statearr_33324[(7)] = inst_33280__$1);

return statearr_33324;
})();
var statearr_33325_35074 = state_33303__$1;
(statearr_33325_35074[(2)] = null);

(statearr_33325_35074[(1)] = (2));


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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_33326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33326[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_33326[(1)] = (1));

return statearr_33326;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_33303){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_33303);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e33327){var ex__30590__auto__ = e33327;
var statearr_33328_35092 = state_33303;
(statearr_33328_35092[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_33303[(4)]))){
var statearr_33329_35098 = state_33303;
(statearr_33329_35098[(1)] = cljs.core.first((state_33303[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35105 = state_33303;
state_33303 = G__35105;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_33303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_33303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_33330 = f__30808__auto__();
(statearr_33330[(6)] = c__30807__auto___35004);

return statearr_33330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33332 = arguments.length;
switch (G__33332) {
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
var c__30807__auto___35127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_33371){
var state_val_33372 = (state_33371[(1)]);
if((state_val_33372 === (7))){
var inst_33367 = (state_33371[(2)]);
var state_33371__$1 = state_33371;
var statearr_33373_35136 = state_33371__$1;
(statearr_33373_35136[(2)] = inst_33367);

(statearr_33373_35136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (1))){
var inst_33334 = (new Array(n));
var inst_33335 = inst_33334;
var inst_33336 = (0);
var state_33371__$1 = (function (){var statearr_33374 = state_33371;
(statearr_33374[(7)] = inst_33335);

(statearr_33374[(8)] = inst_33336);

return statearr_33374;
})();
var statearr_33375_35147 = state_33371__$1;
(statearr_33375_35147[(2)] = null);

(statearr_33375_35147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (4))){
var inst_33339 = (state_33371[(9)]);
var inst_33339__$1 = (state_33371[(2)]);
var inst_33340 = (inst_33339__$1 == null);
var inst_33341 = cljs.core.not(inst_33340);
var state_33371__$1 = (function (){var statearr_33376 = state_33371;
(statearr_33376[(9)] = inst_33339__$1);

return statearr_33376;
})();
if(inst_33341){
var statearr_33377_35162 = state_33371__$1;
(statearr_33377_35162[(1)] = (5));

} else {
var statearr_33378_35163 = state_33371__$1;
(statearr_33378_35163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (15))){
var inst_33361 = (state_33371[(2)]);
var state_33371__$1 = state_33371;
var statearr_33379_35169 = state_33371__$1;
(statearr_33379_35169[(2)] = inst_33361);

(statearr_33379_35169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (13))){
var state_33371__$1 = state_33371;
var statearr_33380_35172 = state_33371__$1;
(statearr_33380_35172[(2)] = null);

(statearr_33380_35172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (6))){
var inst_33336 = (state_33371[(8)]);
var inst_33357 = (inst_33336 > (0));
var state_33371__$1 = state_33371;
if(cljs.core.truth_(inst_33357)){
var statearr_33381_35173 = state_33371__$1;
(statearr_33381_35173[(1)] = (12));

} else {
var statearr_33382_35174 = state_33371__$1;
(statearr_33382_35174[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (3))){
var inst_33369 = (state_33371[(2)]);
var state_33371__$1 = state_33371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33371__$1,inst_33369);
} else {
if((state_val_33372 === (12))){
var inst_33335 = (state_33371[(7)]);
var inst_33359 = cljs.core.vec(inst_33335);
var state_33371__$1 = state_33371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33371__$1,(15),out,inst_33359);
} else {
if((state_val_33372 === (2))){
var state_33371__$1 = state_33371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33371__$1,(4),ch);
} else {
if((state_val_33372 === (11))){
var inst_33351 = (state_33371[(2)]);
var inst_33352 = (new Array(n));
var inst_33335 = inst_33352;
var inst_33336 = (0);
var state_33371__$1 = (function (){var statearr_33389 = state_33371;
(statearr_33389[(7)] = inst_33335);

(statearr_33389[(8)] = inst_33336);

(statearr_33389[(10)] = inst_33351);

return statearr_33389;
})();
var statearr_33390_35178 = state_33371__$1;
(statearr_33390_35178[(2)] = null);

(statearr_33390_35178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (9))){
var inst_33335 = (state_33371[(7)]);
var inst_33349 = cljs.core.vec(inst_33335);
var state_33371__$1 = state_33371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33371__$1,(11),out,inst_33349);
} else {
if((state_val_33372 === (5))){
var inst_33335 = (state_33371[(7)]);
var inst_33336 = (state_33371[(8)]);
var inst_33344 = (state_33371[(11)]);
var inst_33339 = (state_33371[(9)]);
var inst_33343 = (inst_33335[inst_33336] = inst_33339);
var inst_33344__$1 = (inst_33336 + (1));
var inst_33345 = (inst_33344__$1 < n);
var state_33371__$1 = (function (){var statearr_33391 = state_33371;
(statearr_33391[(11)] = inst_33344__$1);

(statearr_33391[(12)] = inst_33343);

return statearr_33391;
})();
if(cljs.core.truth_(inst_33345)){
var statearr_33392_35185 = state_33371__$1;
(statearr_33392_35185[(1)] = (8));

} else {
var statearr_33393_35189 = state_33371__$1;
(statearr_33393_35189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (14))){
var inst_33364 = (state_33371[(2)]);
var inst_33365 = cljs.core.async.close_BANG_(out);
var state_33371__$1 = (function (){var statearr_33395 = state_33371;
(statearr_33395[(13)] = inst_33364);

return statearr_33395;
})();
var statearr_33396_35190 = state_33371__$1;
(statearr_33396_35190[(2)] = inst_33365);

(statearr_33396_35190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (10))){
var inst_33355 = (state_33371[(2)]);
var state_33371__$1 = state_33371;
var statearr_33397_35194 = state_33371__$1;
(statearr_33397_35194[(2)] = inst_33355);

(statearr_33397_35194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33372 === (8))){
var inst_33335 = (state_33371[(7)]);
var inst_33344 = (state_33371[(11)]);
var tmp33394 = inst_33335;
var inst_33335__$1 = tmp33394;
var inst_33336 = inst_33344;
var state_33371__$1 = (function (){var statearr_33403 = state_33371;
(statearr_33403[(7)] = inst_33335__$1);

(statearr_33403[(8)] = inst_33336);

return statearr_33403;
})();
var statearr_33404_35197 = state_33371__$1;
(statearr_33404_35197[(2)] = null);

(statearr_33404_35197[(1)] = (2));


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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_33405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33405[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_33405[(1)] = (1));

return statearr_33405;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_33371){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_33371);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e33406){var ex__30590__auto__ = e33406;
var statearr_33407_35202 = state_33371;
(statearr_33407_35202[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_33371[(4)]))){
var statearr_33408_35203 = state_33371;
(statearr_33408_35203[(1)] = cljs.core.first((state_33371[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35206 = state_33371;
state_33371 = G__35206;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_33371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_33371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_33417 = f__30808__auto__();
(statearr_33417[(6)] = c__30807__auto___35127);

return statearr_33417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33445 = arguments.length;
switch (G__33445) {
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
var c__30807__auto___35211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_33492){
var state_val_33493 = (state_33492[(1)]);
if((state_val_33493 === (7))){
var inst_33488 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33494_35212 = state_33492__$1;
(statearr_33494_35212[(2)] = inst_33488);

(statearr_33494_35212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (1))){
var inst_33446 = [];
var inst_33447 = inst_33446;
var inst_33448 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33492__$1 = (function (){var statearr_33495 = state_33492;
(statearr_33495[(7)] = inst_33448);

(statearr_33495[(8)] = inst_33447);

return statearr_33495;
})();
var statearr_33496_35217 = state_33492__$1;
(statearr_33496_35217[(2)] = null);

(statearr_33496_35217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (4))){
var inst_33451 = (state_33492[(9)]);
var inst_33451__$1 = (state_33492[(2)]);
var inst_33452 = (inst_33451__$1 == null);
var inst_33453 = cljs.core.not(inst_33452);
var state_33492__$1 = (function (){var statearr_33498 = state_33492;
(statearr_33498[(9)] = inst_33451__$1);

return statearr_33498;
})();
if(inst_33453){
var statearr_33499_35218 = state_33492__$1;
(statearr_33499_35218[(1)] = (5));

} else {
var statearr_33500_35219 = state_33492__$1;
(statearr_33500_35219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (15))){
var inst_33482 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33501_35220 = state_33492__$1;
(statearr_33501_35220[(2)] = inst_33482);

(statearr_33501_35220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (13))){
var state_33492__$1 = state_33492;
var statearr_33502_35221 = state_33492__$1;
(statearr_33502_35221[(2)] = null);

(statearr_33502_35221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (6))){
var inst_33447 = (state_33492[(8)]);
var inst_33477 = inst_33447.length;
var inst_33478 = (inst_33477 > (0));
var state_33492__$1 = state_33492;
if(cljs.core.truth_(inst_33478)){
var statearr_33503_35222 = state_33492__$1;
(statearr_33503_35222[(1)] = (12));

} else {
var statearr_33504_35223 = state_33492__$1;
(statearr_33504_35223[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (3))){
var inst_33490 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33492__$1,inst_33490);
} else {
if((state_val_33493 === (12))){
var inst_33447 = (state_33492[(8)]);
var inst_33480 = cljs.core.vec(inst_33447);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33492__$1,(15),out,inst_33480);
} else {
if((state_val_33493 === (2))){
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33492__$1,(4),ch);
} else {
if((state_val_33493 === (11))){
var inst_33451 = (state_33492[(9)]);
var inst_33455 = (state_33492[(10)]);
var inst_33465 = (state_33492[(2)]);
var inst_33466 = [];
var inst_33467 = inst_33466.push(inst_33451);
var inst_33447 = inst_33466;
var inst_33448 = inst_33455;
var state_33492__$1 = (function (){var statearr_33511 = state_33492;
(statearr_33511[(7)] = inst_33448);

(statearr_33511[(8)] = inst_33447);

(statearr_33511[(11)] = inst_33465);

(statearr_33511[(12)] = inst_33467);

return statearr_33511;
})();
var statearr_33512_35224 = state_33492__$1;
(statearr_33512_35224[(2)] = null);

(statearr_33512_35224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (9))){
var inst_33447 = (state_33492[(8)]);
var inst_33463 = cljs.core.vec(inst_33447);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33492__$1,(11),out,inst_33463);
} else {
if((state_val_33493 === (5))){
var inst_33451 = (state_33492[(9)]);
var inst_33455 = (state_33492[(10)]);
var inst_33448 = (state_33492[(7)]);
var inst_33455__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33451) : f.call(null,inst_33451));
var inst_33456 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33455__$1,inst_33448);
var inst_33457 = cljs.core.keyword_identical_QMARK_(inst_33448,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33458 = ((inst_33456) || (inst_33457));
var state_33492__$1 = (function (){var statearr_33513 = state_33492;
(statearr_33513[(10)] = inst_33455__$1);

return statearr_33513;
})();
if(cljs.core.truth_(inst_33458)){
var statearr_33514_35225 = state_33492__$1;
(statearr_33514_35225[(1)] = (8));

} else {
var statearr_33515_35226 = state_33492__$1;
(statearr_33515_35226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (14))){
var inst_33485 = (state_33492[(2)]);
var inst_33486 = cljs.core.async.close_BANG_(out);
var state_33492__$1 = (function (){var statearr_33517 = state_33492;
(statearr_33517[(13)] = inst_33485);

return statearr_33517;
})();
var statearr_33518_35227 = state_33492__$1;
(statearr_33518_35227[(2)] = inst_33486);

(statearr_33518_35227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (10))){
var inst_33470 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33519_35228 = state_33492__$1;
(statearr_33519_35228[(2)] = inst_33470);

(statearr_33519_35228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (8))){
var inst_33451 = (state_33492[(9)]);
var inst_33455 = (state_33492[(10)]);
var inst_33447 = (state_33492[(8)]);
var inst_33460 = inst_33447.push(inst_33451);
var tmp33516 = inst_33447;
var inst_33447__$1 = tmp33516;
var inst_33448 = inst_33455;
var state_33492__$1 = (function (){var statearr_33520 = state_33492;
(statearr_33520[(14)] = inst_33460);

(statearr_33520[(7)] = inst_33448);

(statearr_33520[(8)] = inst_33447__$1);

return statearr_33520;
})();
var statearr_33521_35232 = state_33492__$1;
(statearr_33521_35232[(2)] = null);

(statearr_33521_35232[(1)] = (2));


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
var cljs$core$async$state_machine__30587__auto__ = null;
var cljs$core$async$state_machine__30587__auto____0 = (function (){
var statearr_33522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33522[(0)] = cljs$core$async$state_machine__30587__auto__);

(statearr_33522[(1)] = (1));

return statearr_33522;
});
var cljs$core$async$state_machine__30587__auto____1 = (function (state_33492){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_33492);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e33523){var ex__30590__auto__ = e33523;
var statearr_33524_35233 = state_33492;
(statearr_33524_35233[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_33492[(4)]))){
var statearr_33525_35234 = state_33492;
(statearr_33525_35234[(1)] = cljs.core.first((state_33492[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35235 = state_33492;
state_33492 = G__35235;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
cljs$core$async$state_machine__30587__auto__ = function(state_33492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30587__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30587__auto____1.call(this,state_33492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30587__auto____0;
cljs$core$async$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30587__auto____1;
return cljs$core$async$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_33530 = f__30808__auto__();
(statearr_33530[(6)] = c__30807__auto___35211);

return statearr_33530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
