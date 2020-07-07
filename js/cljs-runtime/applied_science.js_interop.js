goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27436 = arguments.length;
var i__4737__auto___27437 = (0);
while(true){
if((i__4737__auto___27437 < len__4736__auto___27436)){
args__4742__auto__.push((arguments[i__4737__auto___27437]));

var G__27438 = (i__4737__auto___27437 + (1));
i__4737__auto___27437 = G__27438;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__27335_27439 = keyvals;
var vec__27336_27440 = G__27335_27439;
var seq__27337_27441 = cljs.core.seq(vec__27336_27440);
var first__27338_27442 = cljs.core.first(seq__27337_27441);
var seq__27337_27443__$1 = cljs.core.next(seq__27337_27441);
var k_27444 = first__27338_27442;
var first__27338_27445__$1 = cljs.core.first(seq__27337_27443__$1);
var seq__27337_27446__$2 = cljs.core.next(seq__27337_27443__$1);
var v_27447 = first__27338_27445__$1;
var keyvals_27448__$1 = seq__27337_27446__$2;
var G__27335_27449__$1 = G__27335_27439;
while(true){
var vec__27339_27450 = G__27335_27449__$1;
var seq__27340_27451 = cljs.core.seq(vec__27339_27450);
var first__27341_27452 = cljs.core.first(seq__27340_27451);
var seq__27340_27453__$1 = cljs.core.next(seq__27340_27451);
var k_27454__$1 = first__27341_27452;
var first__27341_27455__$1 = cljs.core.first(seq__27340_27453__$1);
var seq__27340_27456__$2 = cljs.core.next(seq__27340_27453__$1);
var v_27457__$1 = first__27341_27455__$1;
var keyvals_27458__$2 = seq__27340_27456__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_27454__$1)] = v_27457__$1);

if(keyvals_27458__$2){
var G__27459 = keyvals_27458__$2;
G__27335_27449__$1 = G__27459;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq27327){
var G__27328 = cljs.core.first(seq27327);
var seq27327__$1 = cljs.core.next(seq27327);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27328,seq27327__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__27343 = arguments.length;
switch (G__27343) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj27344 = obj;
var k27345 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27346 = obj27344;
return (((!((obj27346 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27345,obj27346)));
})()){
return (obj27344[k27345]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj27347 = obj;
var k27348 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27349 = obj27347;
return (((!((obj27349 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27348,obj27349)));
})()){
return (obj27347[k27348]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__27351 = arguments.length;
switch (G__27351) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj27352 = self__.obj;
var k27353 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27354 = obj27352;
return (((!((obj27354 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27353,obj27354)));
})()){
return (obj27352[k27353]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj27355 = self__.obj;
var k27356 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27357 = obj27355;
return (((!((obj27357 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27356,obj27357)));
})()){
return (obj27355[k27356]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27462 = arguments.length;
var i__4737__auto___27463 = (0);
while(true){
if((i__4737__auto___27463 < len__4736__auto___27462)){
args__4742__auto__.push((arguments[i__4737__auto___27463]));

var G__27464 = (i__4737__auto___27463 + (1));
i__4737__auto___27463 = G__27464;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__27363 = keyvals;
var vec__27364 = G__27363;
var seq__27365 = cljs.core.seq(vec__27364);
var first__27366 = cljs.core.first(seq__27365);
var seq__27365__$1 = cljs.core.next(seq__27365);
var k = first__27366;
var first__27366__$1 = cljs.core.first(seq__27365__$1);
var seq__27365__$2 = cljs.core.next(seq__27365__$1);
var v = first__27366__$1;
var kvs = seq__27365__$2;
var G__27363__$1 = G__27363;
while(true){
var vec__27367 = G__27363__$1;
var seq__27368 = cljs.core.seq(vec__27367);
var first__27369 = cljs.core.first(seq__27368);
var seq__27368__$1 = cljs.core.next(seq__27368);
var k__$1 = first__27369;
var first__27369__$1 = cljs.core.first(seq__27368__$1);
var seq__27368__$2 = cljs.core.next(seq__27368__$1);
var v__$1 = first__27369__$1;
var kvs__$1 = seq__27368__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__27465 = kvs__$1;
G__27363__$1 = G__27465;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq27358){
var G__27359 = cljs.core.first(seq27358);
var seq27358__$1 = cljs.core.next(seq27358);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27359,seq27358__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27466 = arguments.length;
var i__4737__auto___27467 = (0);
while(true){
if((i__4737__auto___27467 < len__4736__auto___27466)){
args__4742__auto__.push((arguments[i__4737__auto___27467]));

var G__27468 = (i__4737__auto___27467 + (1));
i__4737__auto___27467 = G__27468;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq27370){
var G__27371 = cljs.core.first(seq27370);
var seq27370__$1 = cljs.core.next(seq27370);
var G__27372 = cljs.core.first(seq27370__$1);
var seq27370__$2 = cljs.core.next(seq27370__$1);
var G__27373 = cljs.core.first(seq27370__$2);
var seq27370__$3 = cljs.core.next(seq27370__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27371,G__27372,G__27373,seq27370__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27469 = arguments.length;
var i__4737__auto___27470 = (0);
while(true){
if((i__4737__auto___27470 < len__4736__auto___27469)){
args__4742__auto__.push((arguments[i__4737__auto___27470]));

var G__27471 = (i__4737__auto___27470 + (1));
i__4737__auto___27470 = G__27471;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq27374){
var G__27375 = cljs.core.first(seq27374);
var seq27374__$1 = cljs.core.next(seq27374);
var G__27376 = cljs.core.first(seq27374__$1);
var seq27374__$2 = cljs.core.next(seq27374__$1);
var G__27377 = cljs.core.first(seq27374__$2);
var seq27374__$3 = cljs.core.next(seq27374__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27375,G__27376,G__27377,seq27374__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__27382 = arguments.length;
switch (G__27382) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___27473 = arguments.length;
var i__4737__auto___27474 = (0);
while(true){
if((i__4737__auto___27474 < len__4736__auto___27473)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27474]));

var G__27475 = (i__4737__auto___27474 + (1));
i__4737__auto___27474 = G__27475;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__27383_27476 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__27384_27477 = null;
var count__27385_27478 = (0);
var i__27386_27479 = (0);
while(true){
if((i__27386_27479 < count__27385_27478)){
var k_27480 = chunk__27384_27477.cljs$core$IIndexed$_nth$arity$2(null,i__27386_27479);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27480,applied_science.js_interop.unchecked_get(x,k_27480)], 0));


var G__27481 = seq__27383_27476;
var G__27482 = chunk__27384_27477;
var G__27483 = count__27385_27478;
var G__27484 = (i__27386_27479 + (1));
seq__27383_27476 = G__27481;
chunk__27384_27477 = G__27482;
count__27385_27478 = G__27483;
i__27386_27479 = G__27484;
continue;
} else {
var temp__5735__auto___27485 = cljs.core.seq(seq__27383_27476);
if(temp__5735__auto___27485){
var seq__27383_27486__$1 = temp__5735__auto___27485;
if(cljs.core.chunked_seq_QMARK_(seq__27383_27486__$1)){
var c__4556__auto___27487 = cljs.core.chunk_first(seq__27383_27486__$1);
var G__27488 = cljs.core.chunk_rest(seq__27383_27486__$1);
var G__27489 = c__4556__auto___27487;
var G__27490 = cljs.core.count(c__4556__auto___27487);
var G__27491 = (0);
seq__27383_27476 = G__27488;
chunk__27384_27477 = G__27489;
count__27385_27478 = G__27490;
i__27386_27479 = G__27491;
continue;
} else {
var k_27492 = cljs.core.first(seq__27383_27486__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27492,applied_science.js_interop.unchecked_get(x,k_27492)], 0));


var G__27493 = cljs.core.next(seq__27383_27486__$1);
var G__27494 = null;
var G__27495 = (0);
var G__27496 = (0);
seq__27383_27476 = G__27493;
chunk__27384_27477 = G__27494;
count__27385_27478 = G__27495;
i__27386_27479 = G__27496;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq27379){
var G__27380 = cljs.core.first(seq27379);
var seq27379__$1 = cljs.core.next(seq27379);
var G__27381 = cljs.core.first(seq27379__$1);
var seq27379__$2 = cljs.core.next(seq27379__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27380,G__27381,seq27379__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__27387 = array;
G__27387.push(x);

return G__27387;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__27388 = array;
G__27388.unshift(x);

return G__27388;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27497 = arguments.length;
var i__4737__auto___27498 = (0);
while(true){
if((i__4737__auto___27498 < len__4736__auto___27497)){
args__4742__auto__.push((arguments[i__4737__auto___27498]));

var G__27499 = (i__4737__auto___27498 + (1));
i__4737__auto___27498 = G__27499;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj27392 = obj;
var k27393 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27394 = obj27392;
return (((!((obj27394 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27393,obj27394)));
})()){
return (obj27392[k27393]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq27389){
var G__27390 = cljs.core.first(seq27389);
var seq27389__$1 = cljs.core.next(seq27389);
var G__27391 = cljs.core.first(seq27389__$1);
var seq27389__$2 = cljs.core.next(seq27389__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27390,G__27391,seq27389__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj27395 = obj;
var k27396 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27397 = obj27395;
return (((!((obj27397 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27396,obj27397)));
})()){
return (obj27395[k27396]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27500 = arguments.length;
var i__4737__auto___27501 = (0);
while(true){
if((i__4737__auto___27501 < len__4736__auto___27500)){
args__4742__auto__.push((arguments[i__4737__auto___27501]));

var G__27502 = (i__4737__auto___27501 + (1));
i__4737__auto___27501 = G__27502;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq27398){
var G__27399 = cljs.core.first(seq27398);
var seq27398__$1 = cljs.core.next(seq27398);
var G__27400 = cljs.core.first(seq27398__$1);
var seq27398__$2 = cljs.core.next(seq27398__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27399,G__27400,seq27398__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27503 = arguments.length;
var i__4737__auto___27504 = (0);
while(true){
if((i__4737__auto___27504 < len__4736__auto___27503)){
args__4742__auto__.push((arguments[i__4737__auto___27504]));

var G__27505 = (i__4737__auto___27504 + (1));
i__4737__auto___27504 = G__27505;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__27404_27506 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__27405_27507 = null;
var count__27406_27508 = (0);
var i__27407_27509 = (0);
while(true){
if((i__27407_27509 < count__27406_27508)){
var vec__27422_27510 = chunk__27405_27507.cljs$core$IIndexed$_nth$arity$2(null,i__27407_27509);
var k_27511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27422_27510,(0),null);
var v_27512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27422_27510,(1),null);
var obj27425_27513 = obj;
var obj27426_27514 = (((!((obj27425_27513 == null))))?obj27425_27513:({}));
(obj27426_27514[applied_science.js_interop.impl.wrap_key(k_27511)] = v_27512);



var G__27515 = seq__27404_27506;
var G__27516 = chunk__27405_27507;
var G__27517 = count__27406_27508;
var G__27518 = (i__27407_27509 + (1));
seq__27404_27506 = G__27515;
chunk__27405_27507 = G__27516;
count__27406_27508 = G__27517;
i__27407_27509 = G__27518;
continue;
} else {
var temp__5735__auto___27519 = cljs.core.seq(seq__27404_27506);
if(temp__5735__auto___27519){
var seq__27404_27520__$1 = temp__5735__auto___27519;
if(cljs.core.chunked_seq_QMARK_(seq__27404_27520__$1)){
var c__4556__auto___27521 = cljs.core.chunk_first(seq__27404_27520__$1);
var G__27522 = cljs.core.chunk_rest(seq__27404_27520__$1);
var G__27523 = c__4556__auto___27521;
var G__27524 = cljs.core.count(c__4556__auto___27521);
var G__27525 = (0);
seq__27404_27506 = G__27522;
chunk__27405_27507 = G__27523;
count__27406_27508 = G__27524;
i__27407_27509 = G__27525;
continue;
} else {
var vec__27429_27526 = cljs.core.first(seq__27404_27520__$1);
var k_27527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27429_27526,(0),null);
var v_27528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27429_27526,(1),null);
var obj27432_27529 = obj;
var obj27433_27530 = (((!((obj27432_27529 == null))))?obj27432_27529:({}));
(obj27433_27530[applied_science.js_interop.impl.wrap_key(k_27527)] = v_27528);



var G__27531 = cljs.core.next(seq__27404_27520__$1);
var G__27532 = null;
var G__27533 = (0);
var G__27534 = (0);
seq__27404_27506 = G__27531;
chunk__27405_27507 = G__27532;
count__27406_27508 = G__27533;
i__27407_27509 = G__27534;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq27401){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27401));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
