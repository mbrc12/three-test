goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36910 = arguments.length;
var i__4737__auto___36911 = (0);
while(true){
if((i__4737__auto___36911 < len__4736__auto___36910)){
args__4742__auto__.push((arguments[i__4737__auto___36911]));

var G__36912 = (i__4737__auto___36911 + (1));
i__4737__auto___36911 = G__36912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36761){
var G__36762 = cljs.core.first(seq36761);
var seq36761__$1 = cljs.core.next(seq36761);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36762,seq36761__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36765 = cljs.core.seq(sources);
var chunk__36766 = null;
var count__36767 = (0);
var i__36768 = (0);
while(true){
if((i__36768 < count__36767)){
var map__36783 = chunk__36766.cljs$core$IIndexed$_nth$arity$2(null,i__36768);
var map__36783__$1 = (((((!((map__36783 == null))))?(((((map__36783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36783):map__36783);
var src = map__36783__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36783__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36783__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36783__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36783__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36786){var e_36913 = e36786;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36913);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36913.message)].join('')));
}

var G__36914 = seq__36765;
var G__36915 = chunk__36766;
var G__36916 = count__36767;
var G__36917 = (i__36768 + (1));
seq__36765 = G__36914;
chunk__36766 = G__36915;
count__36767 = G__36916;
i__36768 = G__36917;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36765);
if(temp__5735__auto__){
var seq__36765__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36765__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36765__$1);
var G__36918 = cljs.core.chunk_rest(seq__36765__$1);
var G__36919 = c__4556__auto__;
var G__36920 = cljs.core.count(c__4556__auto__);
var G__36921 = (0);
seq__36765 = G__36918;
chunk__36766 = G__36919;
count__36767 = G__36920;
i__36768 = G__36921;
continue;
} else {
var map__36787 = cljs.core.first(seq__36765__$1);
var map__36787__$1 = (((((!((map__36787 == null))))?(((((map__36787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36787):map__36787);
var src = map__36787__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36787__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36787__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36787__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36787__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36789){var e_36922 = e36789;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36922);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36922.message)].join('')));
}

var G__36923 = cljs.core.next(seq__36765__$1);
var G__36924 = null;
var G__36925 = (0);
var G__36926 = (0);
seq__36765 = G__36923;
chunk__36766 = G__36924;
count__36767 = G__36925;
i__36768 = G__36926;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36790 = cljs.core.seq(js_requires);
var chunk__36791 = null;
var count__36792 = (0);
var i__36793 = (0);
while(true){
if((i__36793 < count__36792)){
var js_ns = chunk__36791.cljs$core$IIndexed$_nth$arity$2(null,i__36793);
var require_str_36927 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36927);


var G__36928 = seq__36790;
var G__36929 = chunk__36791;
var G__36930 = count__36792;
var G__36931 = (i__36793 + (1));
seq__36790 = G__36928;
chunk__36791 = G__36929;
count__36792 = G__36930;
i__36793 = G__36931;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36790);
if(temp__5735__auto__){
var seq__36790__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36790__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36790__$1);
var G__36932 = cljs.core.chunk_rest(seq__36790__$1);
var G__36933 = c__4556__auto__;
var G__36934 = cljs.core.count(c__4556__auto__);
var G__36935 = (0);
seq__36790 = G__36932;
chunk__36791 = G__36933;
count__36792 = G__36934;
i__36793 = G__36935;
continue;
} else {
var js_ns = cljs.core.first(seq__36790__$1);
var require_str_36936 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36936);


var G__36937 = cljs.core.next(seq__36790__$1);
var G__36938 = null;
var G__36939 = (0);
var G__36940 = (0);
seq__36790 = G__36937;
chunk__36791 = G__36938;
count__36792 = G__36939;
i__36793 = G__36940;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36796){
var map__36797 = p__36796;
var map__36797__$1 = (((((!((map__36797 == null))))?(((((map__36797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36797):map__36797);
var msg = map__36797__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36797__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36797__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36799(s__36800){
return (new cljs.core.LazySeq(null,(function (){
var s__36800__$1 = s__36800;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36800__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36805 = cljs.core.first(xs__6292__auto__);
var map__36805__$1 = (((((!((map__36805 == null))))?(((((map__36805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36805):map__36805);
var src = map__36805__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36805__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36805__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36800__$1,map__36805,map__36805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36797,map__36797__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36799_$_iter__36801(s__36802){
return (new cljs.core.LazySeq(null,((function (s__36800__$1,map__36805,map__36805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36797,map__36797__$1,msg,info,reload_info){
return (function (){
var s__36802__$1 = s__36802;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36802__$1);
if(temp__5735__auto____$1){
var s__36802__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36802__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36802__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36804 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36803 = (0);
while(true){
if((i__36803 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36803);
cljs.core.chunk_append(b__36804,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36941 = (i__36803 + (1));
i__36803 = G__36941;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36804),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36799_$_iter__36801(cljs.core.chunk_rest(s__36802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36804),null);
}
} else {
var warning = cljs.core.first(s__36802__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36799_$_iter__36801(cljs.core.rest(s__36802__$2)));
}
} else {
return null;
}
break;
}
});})(s__36800__$1,map__36805,map__36805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36797,map__36797__$1,msg,info,reload_info))
,null,null));
});})(s__36800__$1,map__36805,map__36805__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36797,map__36797__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36799(cljs.core.rest(s__36800__$1)));
} else {
var G__36942 = cljs.core.rest(s__36800__$1);
s__36800__$1 = G__36942;
continue;
}
} else {
var G__36943 = cljs.core.rest(s__36800__$1);
s__36800__$1 = G__36943;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__36807_36944 = cljs.core.seq(warnings);
var chunk__36808_36945 = null;
var count__36809_36946 = (0);
var i__36810_36947 = (0);
while(true){
if((i__36810_36947 < count__36809_36946)){
var map__36815_36948 = chunk__36808_36945.cljs$core$IIndexed$_nth$arity$2(null,i__36810_36947);
var map__36815_36949__$1 = (((((!((map__36815_36948 == null))))?(((((map__36815_36948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36815_36948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36815_36948):map__36815_36948);
var w_36950 = map__36815_36949__$1;
var msg_36951__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36815_36949__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36815_36949__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36815_36949__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36815_36949__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36954)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36952),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36953),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36951__$1)].join(''));


var G__36955 = seq__36807_36944;
var G__36956 = chunk__36808_36945;
var G__36957 = count__36809_36946;
var G__36958 = (i__36810_36947 + (1));
seq__36807_36944 = G__36955;
chunk__36808_36945 = G__36956;
count__36809_36946 = G__36957;
i__36810_36947 = G__36958;
continue;
} else {
var temp__5735__auto___36959 = cljs.core.seq(seq__36807_36944);
if(temp__5735__auto___36959){
var seq__36807_36960__$1 = temp__5735__auto___36959;
if(cljs.core.chunked_seq_QMARK_(seq__36807_36960__$1)){
var c__4556__auto___36961 = cljs.core.chunk_first(seq__36807_36960__$1);
var G__36962 = cljs.core.chunk_rest(seq__36807_36960__$1);
var G__36963 = c__4556__auto___36961;
var G__36964 = cljs.core.count(c__4556__auto___36961);
var G__36965 = (0);
seq__36807_36944 = G__36962;
chunk__36808_36945 = G__36963;
count__36809_36946 = G__36964;
i__36810_36947 = G__36965;
continue;
} else {
var map__36817_36966 = cljs.core.first(seq__36807_36960__$1);
var map__36817_36967__$1 = (((((!((map__36817_36966 == null))))?(((((map__36817_36966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36817_36966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36817_36966):map__36817_36966);
var w_36968 = map__36817_36967__$1;
var msg_36969__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36817_36967__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36817_36967__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36817_36967__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36817_36967__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36972)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36970),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36971),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36969__$1)].join(''));


var G__36973 = cljs.core.next(seq__36807_36960__$1);
var G__36974 = null;
var G__36975 = (0);
var G__36976 = (0);
seq__36807_36944 = G__36973;
chunk__36808_36945 = G__36974;
count__36809_36946 = G__36975;
i__36810_36947 = G__36976;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36795_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36795_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36821){
var map__36822 = p__36821;
var map__36822__$1 = (((((!((map__36822 == null))))?(((((map__36822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36822):map__36822);
var msg = map__36822__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36822__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36824 = cljs.core.seq(updates);
var chunk__36826 = null;
var count__36827 = (0);
var i__36828 = (0);
while(true){
if((i__36828 < count__36827)){
var path = chunk__36826.cljs$core$IIndexed$_nth$arity$2(null,i__36828);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36854_36977 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36857_36978 = null;
var count__36858_36979 = (0);
var i__36859_36980 = (0);
while(true){
if((i__36859_36980 < count__36858_36979)){
var node_36981 = chunk__36857_36978.cljs$core$IIndexed$_nth$arity$2(null,i__36859_36980);
var path_match_36982 = shadow.cljs.devtools.client.browser.match_paths(node_36981.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36982)){
var new_link_36983 = (function (){var G__36864 = node_36981.cloneNode(true);
G__36864.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36982),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36864;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36982], 0));

goog.dom.insertSiblingAfter(new_link_36983,node_36981);

goog.dom.removeNode(node_36981);


var G__36984 = seq__36854_36977;
var G__36985 = chunk__36857_36978;
var G__36986 = count__36858_36979;
var G__36987 = (i__36859_36980 + (1));
seq__36854_36977 = G__36984;
chunk__36857_36978 = G__36985;
count__36858_36979 = G__36986;
i__36859_36980 = G__36987;
continue;
} else {
var G__36988 = seq__36854_36977;
var G__36989 = chunk__36857_36978;
var G__36990 = count__36858_36979;
var G__36991 = (i__36859_36980 + (1));
seq__36854_36977 = G__36988;
chunk__36857_36978 = G__36989;
count__36858_36979 = G__36990;
i__36859_36980 = G__36991;
continue;
}
} else {
var temp__5735__auto___36992 = cljs.core.seq(seq__36854_36977);
if(temp__5735__auto___36992){
var seq__36854_36993__$1 = temp__5735__auto___36992;
if(cljs.core.chunked_seq_QMARK_(seq__36854_36993__$1)){
var c__4556__auto___36994 = cljs.core.chunk_first(seq__36854_36993__$1);
var G__36995 = cljs.core.chunk_rest(seq__36854_36993__$1);
var G__36996 = c__4556__auto___36994;
var G__36997 = cljs.core.count(c__4556__auto___36994);
var G__36998 = (0);
seq__36854_36977 = G__36995;
chunk__36857_36978 = G__36996;
count__36858_36979 = G__36997;
i__36859_36980 = G__36998;
continue;
} else {
var node_36999 = cljs.core.first(seq__36854_36993__$1);
var path_match_37000 = shadow.cljs.devtools.client.browser.match_paths(node_36999.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37000)){
var new_link_37001 = (function (){var G__36865 = node_36999.cloneNode(true);
G__36865.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37000),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36865;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37000], 0));

goog.dom.insertSiblingAfter(new_link_37001,node_36999);

goog.dom.removeNode(node_36999);


var G__37002 = cljs.core.next(seq__36854_36993__$1);
var G__37003 = null;
var G__37004 = (0);
var G__37005 = (0);
seq__36854_36977 = G__37002;
chunk__36857_36978 = G__37003;
count__36858_36979 = G__37004;
i__36859_36980 = G__37005;
continue;
} else {
var G__37006 = cljs.core.next(seq__36854_36993__$1);
var G__37007 = null;
var G__37008 = (0);
var G__37009 = (0);
seq__36854_36977 = G__37006;
chunk__36857_36978 = G__37007;
count__36858_36979 = G__37008;
i__36859_36980 = G__37009;
continue;
}
}
} else {
}
}
break;
}


var G__37010 = seq__36824;
var G__37011 = chunk__36826;
var G__37012 = count__36827;
var G__37013 = (i__36828 + (1));
seq__36824 = G__37010;
chunk__36826 = G__37011;
count__36827 = G__37012;
i__36828 = G__37013;
continue;
} else {
var G__37014 = seq__36824;
var G__37015 = chunk__36826;
var G__37016 = count__36827;
var G__37017 = (i__36828 + (1));
seq__36824 = G__37014;
chunk__36826 = G__37015;
count__36827 = G__37016;
i__36828 = G__37017;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36824);
if(temp__5735__auto__){
var seq__36824__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36824__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36824__$1);
var G__37018 = cljs.core.chunk_rest(seq__36824__$1);
var G__37019 = c__4556__auto__;
var G__37020 = cljs.core.count(c__4556__auto__);
var G__37021 = (0);
seq__36824 = G__37018;
chunk__36826 = G__37019;
count__36827 = G__37020;
i__36828 = G__37021;
continue;
} else {
var path = cljs.core.first(seq__36824__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36866_37022 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36869_37023 = null;
var count__36870_37024 = (0);
var i__36871_37025 = (0);
while(true){
if((i__36871_37025 < count__36870_37024)){
var node_37026 = chunk__36869_37023.cljs$core$IIndexed$_nth$arity$2(null,i__36871_37025);
var path_match_37027 = shadow.cljs.devtools.client.browser.match_paths(node_37026.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37027)){
var new_link_37028 = (function (){var G__36876 = node_37026.cloneNode(true);
G__36876.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37027),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36876;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37027], 0));

goog.dom.insertSiblingAfter(new_link_37028,node_37026);

goog.dom.removeNode(node_37026);


var G__37029 = seq__36866_37022;
var G__37030 = chunk__36869_37023;
var G__37031 = count__36870_37024;
var G__37032 = (i__36871_37025 + (1));
seq__36866_37022 = G__37029;
chunk__36869_37023 = G__37030;
count__36870_37024 = G__37031;
i__36871_37025 = G__37032;
continue;
} else {
var G__37033 = seq__36866_37022;
var G__37034 = chunk__36869_37023;
var G__37035 = count__36870_37024;
var G__37036 = (i__36871_37025 + (1));
seq__36866_37022 = G__37033;
chunk__36869_37023 = G__37034;
count__36870_37024 = G__37035;
i__36871_37025 = G__37036;
continue;
}
} else {
var temp__5735__auto___37037__$1 = cljs.core.seq(seq__36866_37022);
if(temp__5735__auto___37037__$1){
var seq__36866_37038__$1 = temp__5735__auto___37037__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36866_37038__$1)){
var c__4556__auto___37039 = cljs.core.chunk_first(seq__36866_37038__$1);
var G__37040 = cljs.core.chunk_rest(seq__36866_37038__$1);
var G__37041 = c__4556__auto___37039;
var G__37042 = cljs.core.count(c__4556__auto___37039);
var G__37043 = (0);
seq__36866_37022 = G__37040;
chunk__36869_37023 = G__37041;
count__36870_37024 = G__37042;
i__36871_37025 = G__37043;
continue;
} else {
var node_37044 = cljs.core.first(seq__36866_37038__$1);
var path_match_37045 = shadow.cljs.devtools.client.browser.match_paths(node_37044.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37045)){
var new_link_37046 = (function (){var G__36877 = node_37044.cloneNode(true);
G__36877.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37045),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36877;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37045], 0));

goog.dom.insertSiblingAfter(new_link_37046,node_37044);

goog.dom.removeNode(node_37044);


var G__37047 = cljs.core.next(seq__36866_37038__$1);
var G__37048 = null;
var G__37049 = (0);
var G__37050 = (0);
seq__36866_37022 = G__37047;
chunk__36869_37023 = G__37048;
count__36870_37024 = G__37049;
i__36871_37025 = G__37050;
continue;
} else {
var G__37051 = cljs.core.next(seq__36866_37038__$1);
var G__37052 = null;
var G__37053 = (0);
var G__37054 = (0);
seq__36866_37022 = G__37051;
chunk__36869_37023 = G__37052;
count__36870_37024 = G__37053;
i__36871_37025 = G__37054;
continue;
}
}
} else {
}
}
break;
}


var G__37055 = cljs.core.next(seq__36824__$1);
var G__37056 = null;
var G__37057 = (0);
var G__37058 = (0);
seq__36824 = G__37055;
chunk__36826 = G__37056;
count__36827 = G__37057;
i__36828 = G__37058;
continue;
} else {
var G__37059 = cljs.core.next(seq__36824__$1);
var G__37060 = null;
var G__37061 = (0);
var G__37062 = (0);
seq__36824 = G__37059;
chunk__36826 = G__37060;
count__36827 = G__37061;
i__36828 = G__37062;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36878){
var map__36879 = p__36878;
var map__36879__$1 = (((((!((map__36879 == null))))?(((((map__36879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36879):map__36879);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36879__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36881){
var map__36882 = p__36881;
var map__36882__$1 = (((((!((map__36882 == null))))?(((((map__36882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36882):map__36882);
var _ = map__36882__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36882__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36884,done,error){
var map__36885 = p__36884;
var map__36885__$1 = (((((!((map__36885 == null))))?(((((map__36885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36885):map__36885);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36885__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36887,done,error){
var map__36888 = p__36887;
var map__36888__$1 = (((((!((map__36888 == null))))?(((((map__36888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36888):map__36888);
var msg = map__36888__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36888__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36888__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36888__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36890){
var map__36891 = p__36890;
var map__36891__$1 = (((((!((map__36891 == null))))?(((((map__36891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36891):map__36891);
var src = map__36891__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36891__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36893 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36893) : done.call(null,G__36893));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36894){
var map__36895 = p__36894;
var map__36895__$1 = (((((!((map__36895 == null))))?(((((map__36895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36895):map__36895);
var msg__$1 = map__36895__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36895__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36897){var ex = e36897;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36898){
var map__36899 = p__36898;
var map__36899__$1 = (((((!((map__36899 == null))))?(((((map__36899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36899):map__36899);
var env = map__36899__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36899__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36901){
var map__36902 = p__36901;
var map__36902__$1 = (((((!((map__36902 == null))))?(((((map__36902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36902):map__36902);
var msg = map__36902__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36902__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36904){
var map__36905 = p__36904;
var map__36905__$1 = (((((!((map__36905 == null))))?(((((map__36905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36905):map__36905);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36905__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36905__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36907){
var map__36908 = p__36907;
var map__36908__$1 = (((((!((map__36908 == null))))?(((((map__36908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36908):map__36908);
var svc = map__36908__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36908__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
