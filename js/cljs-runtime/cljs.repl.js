goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37864){
var map__37865 = p__37864;
var map__37865__$1 = (((((!((map__37865 == null))))?(((((map__37865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37865):map__37865);
var m = map__37865__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37865__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37865__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37868_38075 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37869_38076 = null;
var count__37870_38077 = (0);
var i__37871_38078 = (0);
while(true){
if((i__37871_38078 < count__37870_38077)){
var f_38079 = chunk__37869_38076.cljs$core$IIndexed$_nth$arity$2(null,i__37871_38078);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38079], 0));


var G__38080 = seq__37868_38075;
var G__38081 = chunk__37869_38076;
var G__38082 = count__37870_38077;
var G__38083 = (i__37871_38078 + (1));
seq__37868_38075 = G__38080;
chunk__37869_38076 = G__38081;
count__37870_38077 = G__38082;
i__37871_38078 = G__38083;
continue;
} else {
var temp__5735__auto___38085 = cljs.core.seq(seq__37868_38075);
if(temp__5735__auto___38085){
var seq__37868_38086__$1 = temp__5735__auto___38085;
if(cljs.core.chunked_seq_QMARK_(seq__37868_38086__$1)){
var c__4556__auto___38087 = cljs.core.chunk_first(seq__37868_38086__$1);
var G__38088 = cljs.core.chunk_rest(seq__37868_38086__$1);
var G__38089 = c__4556__auto___38087;
var G__38090 = cljs.core.count(c__4556__auto___38087);
var G__38091 = (0);
seq__37868_38075 = G__38088;
chunk__37869_38076 = G__38089;
count__37870_38077 = G__38090;
i__37871_38078 = G__38091;
continue;
} else {
var f_38092 = cljs.core.first(seq__37868_38086__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38092], 0));


var G__38093 = cljs.core.next(seq__37868_38086__$1);
var G__38094 = null;
var G__38095 = (0);
var G__38096 = (0);
seq__37868_38075 = G__38093;
chunk__37869_38076 = G__38094;
count__37870_38077 = G__38095;
i__37871_38078 = G__38096;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38097 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38097], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38097)))?cljs.core.second(arglists_38097):arglists_38097)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37875_38100 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37876_38101 = null;
var count__37877_38102 = (0);
var i__37878_38103 = (0);
while(true){
if((i__37878_38103 < count__37877_38102)){
var vec__37890_38104 = chunk__37876_38101.cljs$core$IIndexed$_nth$arity$2(null,i__37878_38103);
var name_38105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37890_38104,(0),null);
var map__37893_38106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37890_38104,(1),null);
var map__37893_38107__$1 = (((((!((map__37893_38106 == null))))?(((((map__37893_38106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37893_38106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37893_38106):map__37893_38106);
var doc_38108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893_38107__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893_38107__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38105], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38109], 0));

if(cljs.core.truth_(doc_38108)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38108], 0));
} else {
}


var G__38110 = seq__37875_38100;
var G__38111 = chunk__37876_38101;
var G__38112 = count__37877_38102;
var G__38113 = (i__37878_38103 + (1));
seq__37875_38100 = G__38110;
chunk__37876_38101 = G__38111;
count__37877_38102 = G__38112;
i__37878_38103 = G__38113;
continue;
} else {
var temp__5735__auto___38114 = cljs.core.seq(seq__37875_38100);
if(temp__5735__auto___38114){
var seq__37875_38115__$1 = temp__5735__auto___38114;
if(cljs.core.chunked_seq_QMARK_(seq__37875_38115__$1)){
var c__4556__auto___38116 = cljs.core.chunk_first(seq__37875_38115__$1);
var G__38117 = cljs.core.chunk_rest(seq__37875_38115__$1);
var G__38118 = c__4556__auto___38116;
var G__38119 = cljs.core.count(c__4556__auto___38116);
var G__38120 = (0);
seq__37875_38100 = G__38117;
chunk__37876_38101 = G__38118;
count__37877_38102 = G__38119;
i__37878_38103 = G__38120;
continue;
} else {
var vec__37895_38121 = cljs.core.first(seq__37875_38115__$1);
var name_38122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37895_38121,(0),null);
var map__37898_38123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37895_38121,(1),null);
var map__37898_38124__$1 = (((((!((map__37898_38123 == null))))?(((((map__37898_38123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37898_38123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37898_38123):map__37898_38123);
var doc_38125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898_38124__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898_38124__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38122], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38126], 0));

if(cljs.core.truth_(doc_38125)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38125], 0));
} else {
}


var G__38128 = cljs.core.next(seq__37875_38115__$1);
var G__38129 = null;
var G__38130 = (0);
var G__38131 = (0);
seq__37875_38100 = G__38128;
chunk__37876_38101 = G__38129;
count__37877_38102 = G__38130;
i__37878_38103 = G__38131;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37902 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37903 = null;
var count__37904 = (0);
var i__37905 = (0);
while(true){
if((i__37905 < count__37904)){
var role = chunk__37903.cljs$core$IIndexed$_nth$arity$2(null,i__37905);
var temp__5735__auto___38132__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38132__$1)){
var spec_38133 = temp__5735__auto___38132__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38133)], 0));
} else {
}


var G__38134 = seq__37902;
var G__38135 = chunk__37903;
var G__38136 = count__37904;
var G__38137 = (i__37905 + (1));
seq__37902 = G__38134;
chunk__37903 = G__38135;
count__37904 = G__38136;
i__37905 = G__38137;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37902);
if(temp__5735__auto____$1){
var seq__37902__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37902__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37902__$1);
var G__38138 = cljs.core.chunk_rest(seq__37902__$1);
var G__38139 = c__4556__auto__;
var G__38140 = cljs.core.count(c__4556__auto__);
var G__38141 = (0);
seq__37902 = G__38138;
chunk__37903 = G__38139;
count__37904 = G__38140;
i__37905 = G__38141;
continue;
} else {
var role = cljs.core.first(seq__37902__$1);
var temp__5735__auto___38142__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38142__$2)){
var spec_38143 = temp__5735__auto___38142__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38143)], 0));
} else {
}


var G__38144 = cljs.core.next(seq__37902__$1);
var G__38145 = null;
var G__38146 = (0);
var G__38147 = (0);
seq__37902 = G__38144;
chunk__37903 = G__38145;
count__37904 = G__38146;
i__37905 = G__38147;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38148 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38149 = cljs.core.ex_cause(t);
via = G__38148;
t = G__38149;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37911 = datafied_throwable;
var map__37911__$1 = (((((!((map__37911 == null))))?(((((map__37911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37911):map__37911);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37911__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37911__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37911__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37912 = cljs.core.last(via);
var map__37912__$1 = (((((!((map__37912 == null))))?(((((map__37912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37912):map__37912);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37912__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37912__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37912__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37913 = data;
var map__37913__$1 = (((((!((map__37913 == null))))?(((((map__37913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37913):map__37913);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37913__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37914 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37914__$1 = (((((!((map__37914 == null))))?(((((map__37914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37914):map__37914);
var top_data = map__37914__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37914__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37936 = phase;
var G__37936__$1 = (((G__37936 instanceof cljs.core.Keyword))?G__37936.fqn:null);
switch (G__37936__$1) {
case "read-source":
var map__37937 = data;
var map__37937__$1 = (((((!((map__37937 == null))))?(((((map__37937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37937):map__37937);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37939 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37939__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37939,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37939);
var G__37939__$2 = (cljs.core.truth_((function (){var fexpr__37940 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37940.cljs$core$IFn$_invoke$arity$1 ? fexpr__37940.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37940.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37939__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37939__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37939__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37939__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37948 = top_data;
var G__37948__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37948,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37948);
var G__37948__$2 = (cljs.core.truth_((function (){var fexpr__37949 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37949.cljs$core$IFn$_invoke$arity$1 ? fexpr__37949.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37949.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37948__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37948__$1);
var G__37948__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37948__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37948__$2);
var G__37948__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37948__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37948__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37948__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37948__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37950 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37950,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37950,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37950,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37950,(3),null);
var G__37953 = top_data;
var G__37953__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37953,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37953);
var G__37953__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37953__$1);
var G__37953__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37953__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37953__$2);
var G__37953__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37953__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37953__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37953__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37953__$4;
}

break;
case "execution":
var vec__37968 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37968,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37968,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37968,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37968,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37910_SHARP_){
var or__4126__auto__ = (p1__37910_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__37980 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37980.cljs$core$IFn$_invoke$arity$1 ? fexpr__37980.cljs$core$IFn$_invoke$arity$1(p1__37910_SHARP_) : fexpr__37980.call(null,p1__37910_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__37984 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37984__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37984,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37984);
var G__37984__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37984__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37984__$1);
var G__37984__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37984__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37984__$2);
var G__37984__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37984__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37984__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37984__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37984__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37936__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38007){
var map__38008 = p__38007;
var map__38008__$1 = (((((!((map__38008 == null))))?(((((map__38008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38008):map__38008);
var triage_data = map__38008__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38008__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38024 = phase;
var G__38024__$1 = (((G__38024 instanceof cljs.core.Keyword))?G__38024.fqn:null);
switch (G__38024__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38029 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38030 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38031 = loc;
var G__38032 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38037_38160 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38038_38161 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38039_38162 = true;
var _STAR_print_fn_STAR__temp_val__38040_38163 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38039_38162);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38040_38163);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37998_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37998_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38038_38161);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38037_38160);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38029,G__38030,G__38031,G__38032) : format.call(null,G__38029,G__38030,G__38031,G__38032));

break;
case "macroexpansion":
var G__38045 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38046 = cause_type;
var G__38047 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38048 = loc;
var G__38049 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38045,G__38046,G__38047,G__38048,G__38049) : format.call(null,G__38045,G__38046,G__38047,G__38048,G__38049));

break;
case "compile-syntax-check":
var G__38050 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38051 = cause_type;
var G__38052 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38053 = loc;
var G__38054 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38050,G__38051,G__38052,G__38053,G__38054) : format.call(null,G__38050,G__38051,G__38052,G__38053,G__38054));

break;
case "compilation":
var G__38055 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38056 = cause_type;
var G__38057 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38058 = loc;
var G__38059 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38055,G__38056,G__38057,G__38058,G__38059) : format.call(null,G__38055,G__38056,G__38057,G__38058,G__38059));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38060 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38061 = symbol;
var G__38062 = loc;
var G__38063 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38064_38165 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38065_38166 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38066_38167 = true;
var _STAR_print_fn_STAR__temp_val__38067_38168 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38066_38167);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38067_38168);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38003_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38003_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38065_38166);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38064_38165);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38060,G__38061,G__38062,G__38063) : format.call(null,G__38060,G__38061,G__38062,G__38063));
} else {
var G__38069 = "Execution error%s at %s(%s).\n%s\n";
var G__38070 = cause_type;
var G__38071 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38072 = loc;
var G__38073 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38069,G__38070,G__38071,G__38072,G__38073) : format.call(null,G__38069,G__38070,G__38071,G__38072,G__38073));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38024__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
