goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34476 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34476(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34482 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34482(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33580 = coll;
var G__33581 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33580,G__33581) : shadow.dom.lazy_native_coll_seq.call(null,G__33580,G__33581));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33613 = arguments.length;
switch (G__33613) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33618 = arguments.length;
switch (G__33618) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33621 = arguments.length;
switch (G__33621) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33624 = arguments.length;
switch (G__33624) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33632 = arguments.length;
switch (G__33632) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33642 = arguments.length;
switch (G__33642) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33654){if((e33654 instanceof Object)){
var e = e33654;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33654;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33664 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33665 = null;
var count__33666 = (0);
var i__33667 = (0);
while(true){
if((i__33667 < count__33666)){
var el = chunk__33665.cljs$core$IIndexed$_nth$arity$2(null,i__33667);
var handler_34542__$1 = ((function (seq__33664,chunk__33665,count__33666,i__33667,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33664,chunk__33665,count__33666,i__33667,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34542__$1);


var G__34543 = seq__33664;
var G__34544 = chunk__33665;
var G__34545 = count__33666;
var G__34546 = (i__33667 + (1));
seq__33664 = G__34543;
chunk__33665 = G__34544;
count__33666 = G__34545;
i__33667 = G__34546;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33664);
if(temp__5735__auto__){
var seq__33664__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33664__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33664__$1);
var G__34550 = cljs.core.chunk_rest(seq__33664__$1);
var G__34551 = c__4556__auto__;
var G__34552 = cljs.core.count(c__4556__auto__);
var G__34553 = (0);
seq__33664 = G__34550;
chunk__33665 = G__34551;
count__33666 = G__34552;
i__33667 = G__34553;
continue;
} else {
var el = cljs.core.first(seq__33664__$1);
var handler_34554__$1 = ((function (seq__33664,chunk__33665,count__33666,i__33667,el,seq__33664__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33664,chunk__33665,count__33666,i__33667,el,seq__33664__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34554__$1);


var G__34556 = cljs.core.next(seq__33664__$1);
var G__34557 = null;
var G__34558 = (0);
var G__34559 = (0);
seq__33664 = G__34556;
chunk__33665 = G__34557;
count__33666 = G__34558;
i__33667 = G__34559;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33685 = arguments.length;
switch (G__33685) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33695 = cljs.core.seq(events);
var chunk__33696 = null;
var count__33697 = (0);
var i__33698 = (0);
while(true){
if((i__33698 < count__33697)){
var vec__33710 = chunk__33696.cljs$core$IIndexed$_nth$arity$2(null,i__33698);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33710,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34568 = seq__33695;
var G__34569 = chunk__33696;
var G__34570 = count__33697;
var G__34571 = (i__33698 + (1));
seq__33695 = G__34568;
chunk__33696 = G__34569;
count__33697 = G__34570;
i__33698 = G__34571;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33695);
if(temp__5735__auto__){
var seq__33695__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33695__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33695__$1);
var G__34576 = cljs.core.chunk_rest(seq__33695__$1);
var G__34577 = c__4556__auto__;
var G__34578 = cljs.core.count(c__4556__auto__);
var G__34579 = (0);
seq__33695 = G__34576;
chunk__33696 = G__34577;
count__33697 = G__34578;
i__33698 = G__34579;
continue;
} else {
var vec__33714 = cljs.core.first(seq__33695__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34582 = cljs.core.next(seq__33695__$1);
var G__34583 = null;
var G__34584 = (0);
var G__34585 = (0);
seq__33695 = G__34582;
chunk__33696 = G__34583;
count__33697 = G__34584;
i__33698 = G__34585;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33718 = cljs.core.seq(styles);
var chunk__33719 = null;
var count__33720 = (0);
var i__33721 = (0);
while(true){
if((i__33721 < count__33720)){
var vec__33733 = chunk__33719.cljs$core$IIndexed$_nth$arity$2(null,i__33721);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33733,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33733,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34590 = seq__33718;
var G__34591 = chunk__33719;
var G__34592 = count__33720;
var G__34593 = (i__33721 + (1));
seq__33718 = G__34590;
chunk__33719 = G__34591;
count__33720 = G__34592;
i__33721 = G__34593;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33718);
if(temp__5735__auto__){
var seq__33718__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33718__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33718__$1);
var G__34595 = cljs.core.chunk_rest(seq__33718__$1);
var G__34596 = c__4556__auto__;
var G__34597 = cljs.core.count(c__4556__auto__);
var G__34598 = (0);
seq__33718 = G__34595;
chunk__33719 = G__34596;
count__33720 = G__34597;
i__33721 = G__34598;
continue;
} else {
var vec__33740 = cljs.core.first(seq__33718__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33740,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34599 = cljs.core.next(seq__33718__$1);
var G__34600 = null;
var G__34601 = (0);
var G__34602 = (0);
seq__33718 = G__34599;
chunk__33719 = G__34600;
count__33720 = G__34601;
i__33721 = G__34602;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33748_34604 = key;
var G__33748_34605__$1 = (((G__33748_34604 instanceof cljs.core.Keyword))?G__33748_34604.fqn:null);
switch (G__33748_34605__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34611 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34611,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34611,"aria-");
}
})())){
el.setAttribute(ks_34611,value);
} else {
(el[ks_34611] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33764){
var map__33765 = p__33764;
var map__33765__$1 = (((((!((map__33765 == null))))?(((((map__33765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33765):map__33765);
var props = map__33765__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33765__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33769 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33769,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33769,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33769,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33772 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33772,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33772;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33776 = arguments.length;
switch (G__33776) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33780){
var vec__33781 = p__33780;
var seq__33782 = cljs.core.seq(vec__33781);
var first__33783 = cljs.core.first(seq__33782);
var seq__33782__$1 = cljs.core.next(seq__33782);
var nn = first__33783;
var first__33783__$1 = cljs.core.first(seq__33782__$1);
var seq__33782__$2 = cljs.core.next(seq__33782__$1);
var np = first__33783__$1;
var nc = seq__33782__$2;
var node = vec__33781;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33787 = nn;
var G__33788 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33787,G__33788) : create_fn.call(null,G__33787,G__33788));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33789 = nn;
var G__33790 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33789,G__33790) : create_fn.call(null,G__33789,G__33790));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33792 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33792,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33792,(1),null);
var seq__33795_34628 = cljs.core.seq(node_children);
var chunk__33796_34629 = null;
var count__33797_34630 = (0);
var i__33798_34631 = (0);
while(true){
if((i__33798_34631 < count__33797_34630)){
var child_struct_34633 = chunk__33796_34629.cljs$core$IIndexed$_nth$arity$2(null,i__33798_34631);
var children_34634 = shadow.dom.dom_node(child_struct_34633);
if(cljs.core.seq_QMARK_(children_34634)){
var seq__33833_34635 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34634));
var chunk__33835_34636 = null;
var count__33836_34637 = (0);
var i__33837_34638 = (0);
while(true){
if((i__33837_34638 < count__33836_34637)){
var child_34639 = chunk__33835_34636.cljs$core$IIndexed$_nth$arity$2(null,i__33837_34638);
if(cljs.core.truth_(child_34639)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34639);


var G__34641 = seq__33833_34635;
var G__34642 = chunk__33835_34636;
var G__34643 = count__33836_34637;
var G__34644 = (i__33837_34638 + (1));
seq__33833_34635 = G__34641;
chunk__33835_34636 = G__34642;
count__33836_34637 = G__34643;
i__33837_34638 = G__34644;
continue;
} else {
var G__34645 = seq__33833_34635;
var G__34646 = chunk__33835_34636;
var G__34647 = count__33836_34637;
var G__34648 = (i__33837_34638 + (1));
seq__33833_34635 = G__34645;
chunk__33835_34636 = G__34646;
count__33836_34637 = G__34647;
i__33837_34638 = G__34648;
continue;
}
} else {
var temp__5735__auto___34649 = cljs.core.seq(seq__33833_34635);
if(temp__5735__auto___34649){
var seq__33833_34650__$1 = temp__5735__auto___34649;
if(cljs.core.chunked_seq_QMARK_(seq__33833_34650__$1)){
var c__4556__auto___34652 = cljs.core.chunk_first(seq__33833_34650__$1);
var G__34653 = cljs.core.chunk_rest(seq__33833_34650__$1);
var G__34654 = c__4556__auto___34652;
var G__34655 = cljs.core.count(c__4556__auto___34652);
var G__34656 = (0);
seq__33833_34635 = G__34653;
chunk__33835_34636 = G__34654;
count__33836_34637 = G__34655;
i__33837_34638 = G__34656;
continue;
} else {
var child_34659 = cljs.core.first(seq__33833_34650__$1);
if(cljs.core.truth_(child_34659)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34659);


var G__34660 = cljs.core.next(seq__33833_34650__$1);
var G__34661 = null;
var G__34662 = (0);
var G__34664 = (0);
seq__33833_34635 = G__34660;
chunk__33835_34636 = G__34661;
count__33836_34637 = G__34662;
i__33837_34638 = G__34664;
continue;
} else {
var G__34665 = cljs.core.next(seq__33833_34650__$1);
var G__34666 = null;
var G__34667 = (0);
var G__34668 = (0);
seq__33833_34635 = G__34665;
chunk__33835_34636 = G__34666;
count__33836_34637 = G__34667;
i__33837_34638 = G__34668;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34634);
}


var G__34669 = seq__33795_34628;
var G__34670 = chunk__33796_34629;
var G__34671 = count__33797_34630;
var G__34672 = (i__33798_34631 + (1));
seq__33795_34628 = G__34669;
chunk__33796_34629 = G__34670;
count__33797_34630 = G__34671;
i__33798_34631 = G__34672;
continue;
} else {
var temp__5735__auto___34674 = cljs.core.seq(seq__33795_34628);
if(temp__5735__auto___34674){
var seq__33795_34675__$1 = temp__5735__auto___34674;
if(cljs.core.chunked_seq_QMARK_(seq__33795_34675__$1)){
var c__4556__auto___34677 = cljs.core.chunk_first(seq__33795_34675__$1);
var G__34678 = cljs.core.chunk_rest(seq__33795_34675__$1);
var G__34679 = c__4556__auto___34677;
var G__34680 = cljs.core.count(c__4556__auto___34677);
var G__34681 = (0);
seq__33795_34628 = G__34678;
chunk__33796_34629 = G__34679;
count__33797_34630 = G__34680;
i__33798_34631 = G__34681;
continue;
} else {
var child_struct_34682 = cljs.core.first(seq__33795_34675__$1);
var children_34683 = shadow.dom.dom_node(child_struct_34682);
if(cljs.core.seq_QMARK_(children_34683)){
var seq__33846_34684 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34683));
var chunk__33848_34685 = null;
var count__33849_34686 = (0);
var i__33850_34687 = (0);
while(true){
if((i__33850_34687 < count__33849_34686)){
var child_34688 = chunk__33848_34685.cljs$core$IIndexed$_nth$arity$2(null,i__33850_34687);
if(cljs.core.truth_(child_34688)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34688);


var G__34689 = seq__33846_34684;
var G__34690 = chunk__33848_34685;
var G__34691 = count__33849_34686;
var G__34692 = (i__33850_34687 + (1));
seq__33846_34684 = G__34689;
chunk__33848_34685 = G__34690;
count__33849_34686 = G__34691;
i__33850_34687 = G__34692;
continue;
} else {
var G__34694 = seq__33846_34684;
var G__34695 = chunk__33848_34685;
var G__34696 = count__33849_34686;
var G__34697 = (i__33850_34687 + (1));
seq__33846_34684 = G__34694;
chunk__33848_34685 = G__34695;
count__33849_34686 = G__34696;
i__33850_34687 = G__34697;
continue;
}
} else {
var temp__5735__auto___34698__$1 = cljs.core.seq(seq__33846_34684);
if(temp__5735__auto___34698__$1){
var seq__33846_34699__$1 = temp__5735__auto___34698__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33846_34699__$1)){
var c__4556__auto___34700 = cljs.core.chunk_first(seq__33846_34699__$1);
var G__34701 = cljs.core.chunk_rest(seq__33846_34699__$1);
var G__34702 = c__4556__auto___34700;
var G__34703 = cljs.core.count(c__4556__auto___34700);
var G__34704 = (0);
seq__33846_34684 = G__34701;
chunk__33848_34685 = G__34702;
count__33849_34686 = G__34703;
i__33850_34687 = G__34704;
continue;
} else {
var child_34705 = cljs.core.first(seq__33846_34699__$1);
if(cljs.core.truth_(child_34705)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34705);


var G__34707 = cljs.core.next(seq__33846_34699__$1);
var G__34708 = null;
var G__34709 = (0);
var G__34710 = (0);
seq__33846_34684 = G__34707;
chunk__33848_34685 = G__34708;
count__33849_34686 = G__34709;
i__33850_34687 = G__34710;
continue;
} else {
var G__34711 = cljs.core.next(seq__33846_34699__$1);
var G__34712 = null;
var G__34713 = (0);
var G__34714 = (0);
seq__33846_34684 = G__34711;
chunk__33848_34685 = G__34712;
count__33849_34686 = G__34713;
i__33850_34687 = G__34714;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34683);
}


var G__34717 = cljs.core.next(seq__33795_34675__$1);
var G__34718 = null;
var G__34719 = (0);
var G__34720 = (0);
seq__33795_34628 = G__34717;
chunk__33796_34629 = G__34718;
count__33797_34630 = G__34719;
i__33798_34631 = G__34720;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33866 = cljs.core.seq(node);
var chunk__33867 = null;
var count__33868 = (0);
var i__33869 = (0);
while(true){
if((i__33869 < count__33868)){
var n = chunk__33867.cljs$core$IIndexed$_nth$arity$2(null,i__33869);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34727 = seq__33866;
var G__34728 = chunk__33867;
var G__34729 = count__33868;
var G__34730 = (i__33869 + (1));
seq__33866 = G__34727;
chunk__33867 = G__34728;
count__33868 = G__34729;
i__33869 = G__34730;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33866);
if(temp__5735__auto__){
var seq__33866__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33866__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33866__$1);
var G__34738 = cljs.core.chunk_rest(seq__33866__$1);
var G__34739 = c__4556__auto__;
var G__34740 = cljs.core.count(c__4556__auto__);
var G__34741 = (0);
seq__33866 = G__34738;
chunk__33867 = G__34739;
count__33868 = G__34740;
i__33869 = G__34741;
continue;
} else {
var n = cljs.core.first(seq__33866__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34747 = cljs.core.next(seq__33866__$1);
var G__34748 = null;
var G__34749 = (0);
var G__34750 = (0);
seq__33866 = G__34747;
chunk__33867 = G__34748;
count__33868 = G__34749;
i__33869 = G__34750;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33875 = arguments.length;
switch (G__33875) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33879 = arguments.length;
switch (G__33879) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33885 = arguments.length;
switch (G__33885) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34773 = arguments.length;
var i__4737__auto___34775 = (0);
while(true){
if((i__4737__auto___34775 < len__4736__auto___34773)){
args__4742__auto__.push((arguments[i__4737__auto___34775]));

var G__34777 = (i__4737__auto___34775 + (1));
i__4737__auto___34775 = G__34777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33907_34781 = cljs.core.seq(nodes);
var chunk__33908_34782 = null;
var count__33909_34783 = (0);
var i__33910_34784 = (0);
while(true){
if((i__33910_34784 < count__33909_34783)){
var node_34786 = chunk__33908_34782.cljs$core$IIndexed$_nth$arity$2(null,i__33910_34784);
fragment.appendChild(shadow.dom._to_dom(node_34786));


var G__34787 = seq__33907_34781;
var G__34788 = chunk__33908_34782;
var G__34789 = count__33909_34783;
var G__34790 = (i__33910_34784 + (1));
seq__33907_34781 = G__34787;
chunk__33908_34782 = G__34788;
count__33909_34783 = G__34789;
i__33910_34784 = G__34790;
continue;
} else {
var temp__5735__auto___34791 = cljs.core.seq(seq__33907_34781);
if(temp__5735__auto___34791){
var seq__33907_34793__$1 = temp__5735__auto___34791;
if(cljs.core.chunked_seq_QMARK_(seq__33907_34793__$1)){
var c__4556__auto___34794 = cljs.core.chunk_first(seq__33907_34793__$1);
var G__34795 = cljs.core.chunk_rest(seq__33907_34793__$1);
var G__34796 = c__4556__auto___34794;
var G__34797 = cljs.core.count(c__4556__auto___34794);
var G__34798 = (0);
seq__33907_34781 = G__34795;
chunk__33908_34782 = G__34796;
count__33909_34783 = G__34797;
i__33910_34784 = G__34798;
continue;
} else {
var node_34799 = cljs.core.first(seq__33907_34793__$1);
fragment.appendChild(shadow.dom._to_dom(node_34799));


var G__34800 = cljs.core.next(seq__33907_34793__$1);
var G__34801 = null;
var G__34802 = (0);
var G__34803 = (0);
seq__33907_34781 = G__34800;
chunk__33908_34782 = G__34801;
count__33909_34783 = G__34802;
i__33910_34784 = G__34803;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33903){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33903));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33914_34805 = cljs.core.seq(scripts);
var chunk__33915_34806 = null;
var count__33916_34807 = (0);
var i__33917_34808 = (0);
while(true){
if((i__33917_34808 < count__33916_34807)){
var vec__33925_34810 = chunk__33915_34806.cljs$core$IIndexed$_nth$arity$2(null,i__33917_34808);
var script_tag_34811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33925_34810,(0),null);
var script_body_34812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33925_34810,(1),null);
eval(script_body_34812);


var G__34814 = seq__33914_34805;
var G__34815 = chunk__33915_34806;
var G__34816 = count__33916_34807;
var G__34817 = (i__33917_34808 + (1));
seq__33914_34805 = G__34814;
chunk__33915_34806 = G__34815;
count__33916_34807 = G__34816;
i__33917_34808 = G__34817;
continue;
} else {
var temp__5735__auto___34818 = cljs.core.seq(seq__33914_34805);
if(temp__5735__auto___34818){
var seq__33914_34820__$1 = temp__5735__auto___34818;
if(cljs.core.chunked_seq_QMARK_(seq__33914_34820__$1)){
var c__4556__auto___34822 = cljs.core.chunk_first(seq__33914_34820__$1);
var G__34823 = cljs.core.chunk_rest(seq__33914_34820__$1);
var G__34824 = c__4556__auto___34822;
var G__34825 = cljs.core.count(c__4556__auto___34822);
var G__34826 = (0);
seq__33914_34805 = G__34823;
chunk__33915_34806 = G__34824;
count__33916_34807 = G__34825;
i__33917_34808 = G__34826;
continue;
} else {
var vec__33928_34828 = cljs.core.first(seq__33914_34820__$1);
var script_tag_34829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33928_34828,(0),null);
var script_body_34830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33928_34828,(1),null);
eval(script_body_34830);


var G__34831 = cljs.core.next(seq__33914_34820__$1);
var G__34832 = null;
var G__34833 = (0);
var G__34834 = (0);
seq__33914_34805 = G__34831;
chunk__33915_34806 = G__34832;
count__33916_34807 = G__34833;
i__33917_34808 = G__34834;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33931){
var vec__33932 = p__33931;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33932,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33932,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33944 = arguments.length;
switch (G__33944) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33951 = cljs.core.seq(style_keys);
var chunk__33952 = null;
var count__33953 = (0);
var i__33954 = (0);
while(true){
if((i__33954 < count__33953)){
var it = chunk__33952.cljs$core$IIndexed$_nth$arity$2(null,i__33954);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34849 = seq__33951;
var G__34850 = chunk__33952;
var G__34851 = count__33953;
var G__34852 = (i__33954 + (1));
seq__33951 = G__34849;
chunk__33952 = G__34850;
count__33953 = G__34851;
i__33954 = G__34852;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33951);
if(temp__5735__auto__){
var seq__33951__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33951__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33951__$1);
var G__34854 = cljs.core.chunk_rest(seq__33951__$1);
var G__34855 = c__4556__auto__;
var G__34856 = cljs.core.count(c__4556__auto__);
var G__34857 = (0);
seq__33951 = G__34854;
chunk__33952 = G__34855;
count__33953 = G__34856;
i__33954 = G__34857;
continue;
} else {
var it = cljs.core.first(seq__33951__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34858 = cljs.core.next(seq__33951__$1);
var G__34859 = null;
var G__34860 = (0);
var G__34861 = (0);
seq__33951 = G__34858;
chunk__33952 = G__34859;
count__33953 = G__34860;
i__33954 = G__34861;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33962,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33969 = k33962;
var G__33969__$1 = (((G__33969 instanceof cljs.core.Keyword))?G__33969.fqn:null);
switch (G__33969__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33962,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33981){
var vec__33986 = p__33981;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33961){
var self__ = this;
var G__33961__$1 = this;
return (new cljs.core.RecordIter((0),G__33961__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33963,other33964){
var self__ = this;
var this33963__$1 = this;
return (((!((other33964 == null)))) && ((this33963__$1.constructor === other33964.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33963__$1.x,other33964.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33963__$1.y,other33964.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33963__$1.__extmap,other33964.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33961){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34005 = cljs.core.keyword_identical_QMARK_;
var expr__34006 = k__4388__auto__;
if(cljs.core.truth_((pred__34005.cljs$core$IFn$_invoke$arity$2 ? pred__34005.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34006) : pred__34005.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34006)))){
return (new shadow.dom.Coordinate(G__33961,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34005.cljs$core$IFn$_invoke$arity$2 ? pred__34005.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34006) : pred__34005.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34006)))){
return (new shadow.dom.Coordinate(self__.x,G__33961,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33961),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33961){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33961,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33966){
var extmap__4419__auto__ = (function (){var G__34021 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33966,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33966)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34021);
} else {
return G__34021;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33966),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33966),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34040,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34054 = k34040;
var G__34054__$1 = (((G__34054 instanceof cljs.core.Keyword))?G__34054.fqn:null);
switch (G__34054__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34040,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34057){
var vec__34058 = p__34057;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34058,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34058,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34039){
var self__ = this;
var G__34039__$1 = this;
return (new cljs.core.RecordIter((0),G__34039__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34041,other34042){
var self__ = this;
var this34041__$1 = this;
return (((!((other34042 == null)))) && ((this34041__$1.constructor === other34042.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34041__$1.w,other34042.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34041__$1.h,other34042.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34041__$1.__extmap,other34042.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34039){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34093 = cljs.core.keyword_identical_QMARK_;
var expr__34094 = k__4388__auto__;
if(cljs.core.truth_((pred__34093.cljs$core$IFn$_invoke$arity$2 ? pred__34093.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34094) : pred__34093.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34094)))){
return (new shadow.dom.Size(G__34039,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34093.cljs$core$IFn$_invoke$arity$2 ? pred__34093.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34094) : pred__34093.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34094)))){
return (new shadow.dom.Size(self__.w,G__34039,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34039),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34039){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34039,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34045){
var extmap__4419__auto__ = (function (){var G__34110 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34045,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34045)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34110);
} else {
return G__34110;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34045),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34045),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34969 = (i + (1));
var G__34970 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34969;
ret = G__34970;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34135){
var vec__34139 = p__34135;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34139,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34139,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34147 = arguments.length;
switch (G__34147) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34985 = ps;
var G__34986 = (i + (1));
el__$1 = G__34985;
i = G__34986;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34195 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34195,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34203_35005 = cljs.core.seq(props);
var chunk__34204_35006 = null;
var count__34205_35007 = (0);
var i__34206_35008 = (0);
while(true){
if((i__34206_35008 < count__34205_35007)){
var vec__34235_35009 = chunk__34204_35006.cljs$core$IIndexed$_nth$arity$2(null,i__34206_35008);
var k_35010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34235_35009,(0),null);
var v_35011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34235_35009,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35010);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35010),v_35011);


var G__35013 = seq__34203_35005;
var G__35014 = chunk__34204_35006;
var G__35015 = count__34205_35007;
var G__35016 = (i__34206_35008 + (1));
seq__34203_35005 = G__35013;
chunk__34204_35006 = G__35014;
count__34205_35007 = G__35015;
i__34206_35008 = G__35016;
continue;
} else {
var temp__5735__auto___35018 = cljs.core.seq(seq__34203_35005);
if(temp__5735__auto___35018){
var seq__34203_35020__$1 = temp__5735__auto___35018;
if(cljs.core.chunked_seq_QMARK_(seq__34203_35020__$1)){
var c__4556__auto___35021 = cljs.core.chunk_first(seq__34203_35020__$1);
var G__35022 = cljs.core.chunk_rest(seq__34203_35020__$1);
var G__35023 = c__4556__auto___35021;
var G__35024 = cljs.core.count(c__4556__auto___35021);
var G__35025 = (0);
seq__34203_35005 = G__35022;
chunk__34204_35006 = G__35023;
count__34205_35007 = G__35024;
i__34206_35008 = G__35025;
continue;
} else {
var vec__34246_35027 = cljs.core.first(seq__34203_35020__$1);
var k_35028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34246_35027,(0),null);
var v_35029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34246_35027,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35028);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35028),v_35029);


var G__35036 = cljs.core.next(seq__34203_35020__$1);
var G__35037 = null;
var G__35038 = (0);
var G__35039 = (0);
seq__34203_35005 = G__35036;
chunk__34204_35006 = G__35037;
count__34205_35007 = G__35038;
i__34206_35008 = G__35039;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34264 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34264,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34264,(1),null);
var seq__34269_35046 = cljs.core.seq(node_children);
var chunk__34271_35047 = null;
var count__34272_35048 = (0);
var i__34273_35049 = (0);
while(true){
if((i__34273_35049 < count__34272_35048)){
var child_struct_35051 = chunk__34271_35047.cljs$core$IIndexed$_nth$arity$2(null,i__34273_35049);
if((!((child_struct_35051 == null)))){
if(typeof child_struct_35051 === 'string'){
var text_35052 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35052),child_struct_35051].join(''));
} else {
var children_35053 = shadow.dom.svg_node(child_struct_35051);
if(cljs.core.seq_QMARK_(children_35053)){
var seq__34324_35055 = cljs.core.seq(children_35053);
var chunk__34326_35056 = null;
var count__34327_35057 = (0);
var i__34328_35058 = (0);
while(true){
if((i__34328_35058 < count__34327_35057)){
var child_35060 = chunk__34326_35056.cljs$core$IIndexed$_nth$arity$2(null,i__34328_35058);
if(cljs.core.truth_(child_35060)){
node.appendChild(child_35060);


var G__35064 = seq__34324_35055;
var G__35065 = chunk__34326_35056;
var G__35066 = count__34327_35057;
var G__35067 = (i__34328_35058 + (1));
seq__34324_35055 = G__35064;
chunk__34326_35056 = G__35065;
count__34327_35057 = G__35066;
i__34328_35058 = G__35067;
continue;
} else {
var G__35069 = seq__34324_35055;
var G__35070 = chunk__34326_35056;
var G__35071 = count__34327_35057;
var G__35072 = (i__34328_35058 + (1));
seq__34324_35055 = G__35069;
chunk__34326_35056 = G__35070;
count__34327_35057 = G__35071;
i__34328_35058 = G__35072;
continue;
}
} else {
var temp__5735__auto___35073 = cljs.core.seq(seq__34324_35055);
if(temp__5735__auto___35073){
var seq__34324_35075__$1 = temp__5735__auto___35073;
if(cljs.core.chunked_seq_QMARK_(seq__34324_35075__$1)){
var c__4556__auto___35076 = cljs.core.chunk_first(seq__34324_35075__$1);
var G__35077 = cljs.core.chunk_rest(seq__34324_35075__$1);
var G__35078 = c__4556__auto___35076;
var G__35079 = cljs.core.count(c__4556__auto___35076);
var G__35080 = (0);
seq__34324_35055 = G__35077;
chunk__34326_35056 = G__35078;
count__34327_35057 = G__35079;
i__34328_35058 = G__35080;
continue;
} else {
var child_35081 = cljs.core.first(seq__34324_35075__$1);
if(cljs.core.truth_(child_35081)){
node.appendChild(child_35081);


var G__35082 = cljs.core.next(seq__34324_35075__$1);
var G__35083 = null;
var G__35084 = (0);
var G__35085 = (0);
seq__34324_35055 = G__35082;
chunk__34326_35056 = G__35083;
count__34327_35057 = G__35084;
i__34328_35058 = G__35085;
continue;
} else {
var G__35087 = cljs.core.next(seq__34324_35075__$1);
var G__35088 = null;
var G__35089 = (0);
var G__35090 = (0);
seq__34324_35055 = G__35087;
chunk__34326_35056 = G__35088;
count__34327_35057 = G__35089;
i__34328_35058 = G__35090;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35053);
}
}


var G__35093 = seq__34269_35046;
var G__35094 = chunk__34271_35047;
var G__35095 = count__34272_35048;
var G__35096 = (i__34273_35049 + (1));
seq__34269_35046 = G__35093;
chunk__34271_35047 = G__35094;
count__34272_35048 = G__35095;
i__34273_35049 = G__35096;
continue;
} else {
var G__35100 = seq__34269_35046;
var G__35101 = chunk__34271_35047;
var G__35102 = count__34272_35048;
var G__35103 = (i__34273_35049 + (1));
seq__34269_35046 = G__35100;
chunk__34271_35047 = G__35101;
count__34272_35048 = G__35102;
i__34273_35049 = G__35103;
continue;
}
} else {
var temp__5735__auto___35106 = cljs.core.seq(seq__34269_35046);
if(temp__5735__auto___35106){
var seq__34269_35107__$1 = temp__5735__auto___35106;
if(cljs.core.chunked_seq_QMARK_(seq__34269_35107__$1)){
var c__4556__auto___35108 = cljs.core.chunk_first(seq__34269_35107__$1);
var G__35109 = cljs.core.chunk_rest(seq__34269_35107__$1);
var G__35110 = c__4556__auto___35108;
var G__35111 = cljs.core.count(c__4556__auto___35108);
var G__35112 = (0);
seq__34269_35046 = G__35109;
chunk__34271_35047 = G__35110;
count__34272_35048 = G__35111;
i__34273_35049 = G__35112;
continue;
} else {
var child_struct_35113 = cljs.core.first(seq__34269_35107__$1);
if((!((child_struct_35113 == null)))){
if(typeof child_struct_35113 === 'string'){
var text_35115 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35115),child_struct_35113].join(''));
} else {
var children_35118 = shadow.dom.svg_node(child_struct_35113);
if(cljs.core.seq_QMARK_(children_35118)){
var seq__34342_35121 = cljs.core.seq(children_35118);
var chunk__34345_35122 = null;
var count__34346_35123 = (0);
var i__34347_35124 = (0);
while(true){
if((i__34347_35124 < count__34346_35123)){
var child_35126 = chunk__34345_35122.cljs$core$IIndexed$_nth$arity$2(null,i__34347_35124);
if(cljs.core.truth_(child_35126)){
node.appendChild(child_35126);


var G__35128 = seq__34342_35121;
var G__35129 = chunk__34345_35122;
var G__35130 = count__34346_35123;
var G__35131 = (i__34347_35124 + (1));
seq__34342_35121 = G__35128;
chunk__34345_35122 = G__35129;
count__34346_35123 = G__35130;
i__34347_35124 = G__35131;
continue;
} else {
var G__35132 = seq__34342_35121;
var G__35133 = chunk__34345_35122;
var G__35134 = count__34346_35123;
var G__35135 = (i__34347_35124 + (1));
seq__34342_35121 = G__35132;
chunk__34345_35122 = G__35133;
count__34346_35123 = G__35134;
i__34347_35124 = G__35135;
continue;
}
} else {
var temp__5735__auto___35137__$1 = cljs.core.seq(seq__34342_35121);
if(temp__5735__auto___35137__$1){
var seq__34342_35138__$1 = temp__5735__auto___35137__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34342_35138__$1)){
var c__4556__auto___35139 = cljs.core.chunk_first(seq__34342_35138__$1);
var G__35140 = cljs.core.chunk_rest(seq__34342_35138__$1);
var G__35141 = c__4556__auto___35139;
var G__35142 = cljs.core.count(c__4556__auto___35139);
var G__35143 = (0);
seq__34342_35121 = G__35140;
chunk__34345_35122 = G__35141;
count__34346_35123 = G__35142;
i__34347_35124 = G__35143;
continue;
} else {
var child_35146 = cljs.core.first(seq__34342_35138__$1);
if(cljs.core.truth_(child_35146)){
node.appendChild(child_35146);


var G__35149 = cljs.core.next(seq__34342_35138__$1);
var G__35150 = null;
var G__35151 = (0);
var G__35152 = (0);
seq__34342_35121 = G__35149;
chunk__34345_35122 = G__35150;
count__34346_35123 = G__35151;
i__34347_35124 = G__35152;
continue;
} else {
var G__35153 = cljs.core.next(seq__34342_35138__$1);
var G__35154 = null;
var G__35155 = (0);
var G__35156 = (0);
seq__34342_35121 = G__35153;
chunk__34345_35122 = G__35154;
count__34346_35123 = G__35155;
i__34347_35124 = G__35156;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35118);
}
}


var G__35158 = cljs.core.next(seq__34269_35107__$1);
var G__35159 = null;
var G__35160 = (0);
var G__35161 = (0);
seq__34269_35046 = G__35158;
chunk__34271_35047 = G__35159;
count__34272_35048 = G__35160;
i__34273_35049 = G__35161;
continue;
} else {
var G__35164 = cljs.core.next(seq__34269_35107__$1);
var G__35165 = null;
var G__35166 = (0);
var G__35167 = (0);
seq__34269_35046 = G__35164;
chunk__34271_35047 = G__35165;
count__34272_35048 = G__35166;
i__34273_35049 = G__35167;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35175 = arguments.length;
var i__4737__auto___35176 = (0);
while(true){
if((i__4737__auto___35176 < len__4736__auto___35175)){
args__4742__auto__.push((arguments[i__4737__auto___35176]));

var G__35177 = (i__4737__auto___35176 + (1));
i__4737__auto___35176 = G__35177;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34387){
var G__34388 = cljs.core.first(seq34387);
var seq34387__$1 = cljs.core.next(seq34387);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34388,seq34387__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34406 = arguments.length;
switch (G__34406) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30807__auto___35196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30808__auto__ = (function (){var switch__30586__auto__ = (function (state_34427){
var state_val_34428 = (state_34427[(1)]);
if((state_val_34428 === (1))){
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34427__$1,(2),once_or_cleanup);
} else {
if((state_val_34428 === (2))){
var inst_34424 = (state_34427[(2)]);
var inst_34425 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34427__$1 = (function (){var statearr_34436 = state_34427;
(statearr_34436[(7)] = inst_34424);

return statearr_34436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34427__$1,inst_34425);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30587__auto__ = null;
var shadow$dom$state_machine__30587__auto____0 = (function (){
var statearr_34439 = [null,null,null,null,null,null,null,null];
(statearr_34439[(0)] = shadow$dom$state_machine__30587__auto__);

(statearr_34439[(1)] = (1));

return statearr_34439;
});
var shadow$dom$state_machine__30587__auto____1 = (function (state_34427){
while(true){
var ret_value__30588__auto__ = (function (){try{while(true){
var result__30589__auto__ = switch__30586__auto__(state_34427);
if(cljs.core.keyword_identical_QMARK_(result__30589__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30589__auto__;
}
break;
}
}catch (e34443){var ex__30590__auto__ = e34443;
var statearr_34444_35205 = state_34427;
(statearr_34444_35205[(2)] = ex__30590__auto__);


if(cljs.core.seq((state_34427[(4)]))){
var statearr_34446_35207 = state_34427;
(statearr_34446_35207[(1)] = cljs.core.first((state_34427[(4)])));

} else {
throw ex__30590__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35208 = state_34427;
state_34427 = G__35208;
continue;
} else {
return ret_value__30588__auto__;
}
break;
}
});
shadow$dom$state_machine__30587__auto__ = function(state_34427){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30587__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30587__auto____1.call(this,state_34427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30587__auto____0;
shadow$dom$state_machine__30587__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30587__auto____1;
return shadow$dom$state_machine__30587__auto__;
})()
})();
var state__30809__auto__ = (function (){var statearr_34455 = f__30808__auto__();
(statearr_34455[(6)] = c__30807__auto___35196);

return statearr_34455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30809__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
