goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40862 = arguments.length;
var i__5770__auto___40863 = (0);
while(true){
if((i__5770__auto___40863 < len__5769__auto___40862)){
args__5775__auto__.push((arguments[i__5770__auto___40863]));

var G__40864 = (i__5770__auto___40863 + (1));
i__5770__auto___40863 = G__40864;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40396){
var G__40401 = cljs.core.first(seq40396);
var seq40396__$1 = cljs.core.next(seq40396);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40401,seq40396__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40411 = cljs.core.seq(sources);
var chunk__40412 = null;
var count__40413 = (0);
var i__40414 = (0);
while(true){
if((i__40414 < count__40413)){
var map__40420 = chunk__40412.cljs$core$IIndexed$_nth$arity$2(null,i__40414);
var map__40420__$1 = cljs.core.__destructure_map(map__40420);
var src = map__40420__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40420__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40420__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40420__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40420__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40421){var e_40865 = e40421;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40865);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40865.message)].join('')));
}

var G__40866 = seq__40411;
var G__40867 = chunk__40412;
var G__40868 = count__40413;
var G__40869 = (i__40414 + (1));
seq__40411 = G__40866;
chunk__40412 = G__40867;
count__40413 = G__40868;
i__40414 = G__40869;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__40411);
if(temp__5816__auto__){
var seq__40411__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40411__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40411__$1);
var G__40870 = cljs.core.chunk_rest(seq__40411__$1);
var G__40871 = c__5568__auto__;
var G__40872 = cljs.core.count(c__5568__auto__);
var G__40873 = (0);
seq__40411 = G__40870;
chunk__40412 = G__40871;
count__40413 = G__40872;
i__40414 = G__40873;
continue;
} else {
var map__40423 = cljs.core.first(seq__40411__$1);
var map__40423__$1 = cljs.core.__destructure_map(map__40423);
var src = map__40423__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40423__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40424){var e_40877 = e40424;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40877);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40877.message)].join('')));
}

var G__40878 = cljs.core.next(seq__40411__$1);
var G__40879 = null;
var G__40880 = (0);
var G__40881 = (0);
seq__40411 = G__40878;
chunk__40412 = G__40879;
count__40413 = G__40880;
i__40414 = G__40881;
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
var seq__40429 = cljs.core.seq(js_requires);
var chunk__40430 = null;
var count__40431 = (0);
var i__40432 = (0);
while(true){
if((i__40432 < count__40431)){
var js_ns = chunk__40430.cljs$core$IIndexed$_nth$arity$2(null,i__40432);
var require_str_40882 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40882);


var G__40883 = seq__40429;
var G__40884 = chunk__40430;
var G__40885 = count__40431;
var G__40886 = (i__40432 + (1));
seq__40429 = G__40883;
chunk__40430 = G__40884;
count__40431 = G__40885;
i__40432 = G__40886;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__40429);
if(temp__5816__auto__){
var seq__40429__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40429__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40429__$1);
var G__40890 = cljs.core.chunk_rest(seq__40429__$1);
var G__40891 = c__5568__auto__;
var G__40892 = cljs.core.count(c__5568__auto__);
var G__40893 = (0);
seq__40429 = G__40890;
chunk__40430 = G__40891;
count__40431 = G__40892;
i__40432 = G__40893;
continue;
} else {
var js_ns = cljs.core.first(seq__40429__$1);
var require_str_40894 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40894);


var G__40895 = cljs.core.next(seq__40429__$1);
var G__40896 = null;
var G__40897 = (0);
var G__40898 = (0);
seq__40429 = G__40895;
chunk__40430 = G__40896;
count__40431 = G__40897;
i__40432 = G__40898;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40435){
var map__40436 = p__40435;
var map__40436__$1 = cljs.core.__destructure_map(map__40436);
var msg = map__40436__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40436__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40436__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40437(s__40438){
return (new cljs.core.LazySeq(null,(function (){
var s__40438__$1 = s__40438;
while(true){
var temp__5816__auto__ = cljs.core.seq(s__40438__$1);
if(temp__5816__auto__){
var xs__6374__auto__ = temp__5816__auto__;
var map__40443 = cljs.core.first(xs__6374__auto__);
var map__40443__$1 = cljs.core.__destructure_map(map__40443);
var src = map__40443__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40443__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40443__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__40438__$1,map__40443,map__40443__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__40436,map__40436__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40437_$_iter__40439(s__40440){
return (new cljs.core.LazySeq(null,((function (s__40438__$1,map__40443,map__40443__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__40436,map__40436__$1,msg,info,reload_info){
return (function (){
var s__40440__$1 = s__40440;
while(true){
var temp__5816__auto____$1 = cljs.core.seq(s__40440__$1);
if(temp__5816__auto____$1){
var s__40440__$2 = temp__5816__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40440__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40440__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40442 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40441 = (0);
while(true){
if((i__40441 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__40441);
cljs.core.chunk_append(b__40442,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40903 = (i__40441 + (1));
i__40441 = G__40903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40442),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40437_$_iter__40439(cljs.core.chunk_rest(s__40440__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40442),null);
}
} else {
var warning = cljs.core.first(s__40440__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40437_$_iter__40439(cljs.core.rest(s__40440__$2)));
}
} else {
return null;
}
break;
}
});})(s__40438__$1,map__40443,map__40443__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__40436,map__40436__$1,msg,info,reload_info))
,null,null));
});})(s__40438__$1,map__40443,map__40443__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__40436,map__40436__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40437(cljs.core.rest(s__40438__$1)));
} else {
var G__40904 = cljs.core.rest(s__40438__$1);
s__40438__$1 = G__40904;
continue;
}
} else {
var G__40905 = cljs.core.rest(s__40438__$1);
s__40438__$1 = G__40905;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40444_40907 = cljs.core.seq(warnings);
var chunk__40445_40908 = null;
var count__40446_40909 = (0);
var i__40447_40910 = (0);
while(true){
if((i__40447_40910 < count__40446_40909)){
var map__40450_40911 = chunk__40445_40908.cljs$core$IIndexed$_nth$arity$2(null,i__40447_40910);
var map__40450_40912__$1 = cljs.core.__destructure_map(map__40450_40911);
var w_40913 = map__40450_40912__$1;
var msg_40914__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40450_40912__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40450_40912__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40450_40912__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40450_40912__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40917)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40915),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40916),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40914__$1)].join(''));


var G__40918 = seq__40444_40907;
var G__40919 = chunk__40445_40908;
var G__40920 = count__40446_40909;
var G__40921 = (i__40447_40910 + (1));
seq__40444_40907 = G__40918;
chunk__40445_40908 = G__40919;
count__40446_40909 = G__40920;
i__40447_40910 = G__40921;
continue;
} else {
var temp__5816__auto___40922 = cljs.core.seq(seq__40444_40907);
if(temp__5816__auto___40922){
var seq__40444_40923__$1 = temp__5816__auto___40922;
if(cljs.core.chunked_seq_QMARK_(seq__40444_40923__$1)){
var c__5568__auto___40924 = cljs.core.chunk_first(seq__40444_40923__$1);
var G__40925 = cljs.core.chunk_rest(seq__40444_40923__$1);
var G__40926 = c__5568__auto___40924;
var G__40927 = cljs.core.count(c__5568__auto___40924);
var G__40928 = (0);
seq__40444_40907 = G__40925;
chunk__40445_40908 = G__40926;
count__40446_40909 = G__40927;
i__40447_40910 = G__40928;
continue;
} else {
var map__40451_40929 = cljs.core.first(seq__40444_40923__$1);
var map__40451_40930__$1 = cljs.core.__destructure_map(map__40451_40929);
var w_40931 = map__40451_40930__$1;
var msg_40932__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40451_40930__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40451_40930__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40451_40930__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40451_40930__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40935)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40933),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40934),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40932__$1)].join(''));


var G__40936 = cljs.core.next(seq__40444_40923__$1);
var G__40937 = null;
var G__40938 = (0);
var G__40939 = (0);
seq__40444_40907 = G__40936;
chunk__40445_40908 = G__40937;
count__40446_40909 = G__40938;
i__40447_40910 = G__40939;
continue;
}
} else {
}
}
break;
}
} else {
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40434_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40434_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40453){
var map__40454 = p__40453;
var map__40454__$1 = cljs.core.__destructure_map(map__40454);
var msg = map__40454__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40454__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40454__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__40455 = cljs.core.seq(updates);
var chunk__40457 = null;
var count__40458 = (0);
var i__40459 = (0);
while(true){
if((i__40459 < count__40458)){
var path = chunk__40457.cljs$core$IIndexed$_nth$arity$2(null,i__40459);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40633_40941 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40637_40942 = null;
var count__40638_40943 = (0);
var i__40639_40944 = (0);
while(true){
if((i__40639_40944 < count__40638_40943)){
var node_40945 = chunk__40637_40942.cljs$core$IIndexed$_nth$arity$2(null,i__40639_40944);
if(cljs.core.not(node_40945.shadow$old)){
var path_match_40946 = shadow.cljs.devtools.client.browser.match_paths(node_40945.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40946)){
var new_link_40947 = (function (){var G__40688 = node_40945.cloneNode(true);
G__40688.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40946),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40688;
})();
(node_40945.shadow$old = true);

(new_link_40947.onload = ((function (seq__40633_40941,chunk__40637_40942,count__40638_40943,i__40639_40944,seq__40455,chunk__40457,count__40458,i__40459,new_link_40947,path_match_40946,node_40945,path,map__40454,map__40454__$1,msg,updates,reload_info){
return (function (e){
var seq__40689_40948 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40691_40949 = null;
var count__40692_40950 = (0);
var i__40693_40951 = (0);
while(true){
if((i__40693_40951 < count__40692_40950)){
var map__40702_40952 = chunk__40691_40949.cljs$core$IIndexed$_nth$arity$2(null,i__40693_40951);
var map__40702_40953__$1 = cljs.core.__destructure_map(map__40702_40952);
var task_40954 = map__40702_40953__$1;
var fn_str_40955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40702_40953__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40702_40953__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40957 = goog.getObjectByName(fn_str_40955,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40956)].join(''));

(fn_obj_40957.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40957.cljs$core$IFn$_invoke$arity$2(path,new_link_40947) : fn_obj_40957.call(null,path,new_link_40947));


var G__40958 = seq__40689_40948;
var G__40959 = chunk__40691_40949;
var G__40960 = count__40692_40950;
var G__40961 = (i__40693_40951 + (1));
seq__40689_40948 = G__40958;
chunk__40691_40949 = G__40959;
count__40692_40950 = G__40960;
i__40693_40951 = G__40961;
continue;
} else {
var temp__5816__auto___40962 = cljs.core.seq(seq__40689_40948);
if(temp__5816__auto___40962){
var seq__40689_40963__$1 = temp__5816__auto___40962;
if(cljs.core.chunked_seq_QMARK_(seq__40689_40963__$1)){
var c__5568__auto___40964 = cljs.core.chunk_first(seq__40689_40963__$1);
var G__40965 = cljs.core.chunk_rest(seq__40689_40963__$1);
var G__40966 = c__5568__auto___40964;
var G__40967 = cljs.core.count(c__5568__auto___40964);
var G__40968 = (0);
seq__40689_40948 = G__40965;
chunk__40691_40949 = G__40966;
count__40692_40950 = G__40967;
i__40693_40951 = G__40968;
continue;
} else {
var map__40706_40969 = cljs.core.first(seq__40689_40963__$1);
var map__40706_40970__$1 = cljs.core.__destructure_map(map__40706_40969);
var task_40971 = map__40706_40970__$1;
var fn_str_40972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40706_40970__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40706_40970__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40974 = goog.getObjectByName(fn_str_40972,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40973)].join(''));

(fn_obj_40974.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40974.cljs$core$IFn$_invoke$arity$2(path,new_link_40947) : fn_obj_40974.call(null,path,new_link_40947));


var G__40975 = cljs.core.next(seq__40689_40963__$1);
var G__40976 = null;
var G__40977 = (0);
var G__40978 = (0);
seq__40689_40948 = G__40975;
chunk__40691_40949 = G__40976;
count__40692_40950 = G__40977;
i__40693_40951 = G__40978;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40945);
});})(seq__40633_40941,chunk__40637_40942,count__40638_40943,i__40639_40944,seq__40455,chunk__40457,count__40458,i__40459,new_link_40947,path_match_40946,node_40945,path,map__40454,map__40454__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40946], 0));

goog.dom.insertSiblingAfter(new_link_40947,node_40945);


var G__40979 = seq__40633_40941;
var G__40980 = chunk__40637_40942;
var G__40981 = count__40638_40943;
var G__40982 = (i__40639_40944 + (1));
seq__40633_40941 = G__40979;
chunk__40637_40942 = G__40980;
count__40638_40943 = G__40981;
i__40639_40944 = G__40982;
continue;
} else {
var G__40983 = seq__40633_40941;
var G__40984 = chunk__40637_40942;
var G__40985 = count__40638_40943;
var G__40986 = (i__40639_40944 + (1));
seq__40633_40941 = G__40983;
chunk__40637_40942 = G__40984;
count__40638_40943 = G__40985;
i__40639_40944 = G__40986;
continue;
}
} else {
var G__40987 = seq__40633_40941;
var G__40988 = chunk__40637_40942;
var G__40989 = count__40638_40943;
var G__40990 = (i__40639_40944 + (1));
seq__40633_40941 = G__40987;
chunk__40637_40942 = G__40988;
count__40638_40943 = G__40989;
i__40639_40944 = G__40990;
continue;
}
} else {
var temp__5816__auto___40991 = cljs.core.seq(seq__40633_40941);
if(temp__5816__auto___40991){
var seq__40633_40992__$1 = temp__5816__auto___40991;
if(cljs.core.chunked_seq_QMARK_(seq__40633_40992__$1)){
var c__5568__auto___40993 = cljs.core.chunk_first(seq__40633_40992__$1);
var G__40994 = cljs.core.chunk_rest(seq__40633_40992__$1);
var G__40995 = c__5568__auto___40993;
var G__40996 = cljs.core.count(c__5568__auto___40993);
var G__40997 = (0);
seq__40633_40941 = G__40994;
chunk__40637_40942 = G__40995;
count__40638_40943 = G__40996;
i__40639_40944 = G__40997;
continue;
} else {
var node_40998 = cljs.core.first(seq__40633_40992__$1);
if(cljs.core.not(node_40998.shadow$old)){
var path_match_40999 = shadow.cljs.devtools.client.browser.match_paths(node_40998.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40999)){
var new_link_41000 = (function (){var G__40709 = node_40998.cloneNode(true);
G__40709.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40999),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40709;
})();
(node_40998.shadow$old = true);

(new_link_41000.onload = ((function (seq__40633_40941,chunk__40637_40942,count__40638_40943,i__40639_40944,seq__40455,chunk__40457,count__40458,i__40459,new_link_41000,path_match_40999,node_40998,seq__40633_40992__$1,temp__5816__auto___40991,path,map__40454,map__40454__$1,msg,updates,reload_info){
return (function (e){
var seq__40710_41001 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40712_41002 = null;
var count__40713_41003 = (0);
var i__40714_41004 = (0);
while(true){
if((i__40714_41004 < count__40713_41003)){
var map__40721_41005 = chunk__40712_41002.cljs$core$IIndexed$_nth$arity$2(null,i__40714_41004);
var map__40721_41006__$1 = cljs.core.__destructure_map(map__40721_41005);
var task_41007 = map__40721_41006__$1;
var fn_str_41008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40721_41006__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40721_41006__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41010 = goog.getObjectByName(fn_str_41008,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41009)].join(''));

(fn_obj_41010.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41010.cljs$core$IFn$_invoke$arity$2(path,new_link_41000) : fn_obj_41010.call(null,path,new_link_41000));


var G__41011 = seq__40710_41001;
var G__41012 = chunk__40712_41002;
var G__41013 = count__40713_41003;
var G__41014 = (i__40714_41004 + (1));
seq__40710_41001 = G__41011;
chunk__40712_41002 = G__41012;
count__40713_41003 = G__41013;
i__40714_41004 = G__41014;
continue;
} else {
var temp__5816__auto___41015__$1 = cljs.core.seq(seq__40710_41001);
if(temp__5816__auto___41015__$1){
var seq__40710_41016__$1 = temp__5816__auto___41015__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40710_41016__$1)){
var c__5568__auto___41017 = cljs.core.chunk_first(seq__40710_41016__$1);
var G__41018 = cljs.core.chunk_rest(seq__40710_41016__$1);
var G__41019 = c__5568__auto___41017;
var G__41020 = cljs.core.count(c__5568__auto___41017);
var G__41021 = (0);
seq__40710_41001 = G__41018;
chunk__40712_41002 = G__41019;
count__40713_41003 = G__41020;
i__40714_41004 = G__41021;
continue;
} else {
var map__40723_41022 = cljs.core.first(seq__40710_41016__$1);
var map__40723_41023__$1 = cljs.core.__destructure_map(map__40723_41022);
var task_41024 = map__40723_41023__$1;
var fn_str_41025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40723_41023__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40723_41023__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41027 = goog.getObjectByName(fn_str_41025,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41026)].join(''));

(fn_obj_41027.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41027.cljs$core$IFn$_invoke$arity$2(path,new_link_41000) : fn_obj_41027.call(null,path,new_link_41000));


var G__41028 = cljs.core.next(seq__40710_41016__$1);
var G__41029 = null;
var G__41030 = (0);
var G__41031 = (0);
seq__40710_41001 = G__41028;
chunk__40712_41002 = G__41029;
count__40713_41003 = G__41030;
i__40714_41004 = G__41031;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40998);
});})(seq__40633_40941,chunk__40637_40942,count__40638_40943,i__40639_40944,seq__40455,chunk__40457,count__40458,i__40459,new_link_41000,path_match_40999,node_40998,seq__40633_40992__$1,temp__5816__auto___40991,path,map__40454,map__40454__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40999], 0));

goog.dom.insertSiblingAfter(new_link_41000,node_40998);


var G__41032 = cljs.core.next(seq__40633_40992__$1);
var G__41033 = null;
var G__41034 = (0);
var G__41035 = (0);
seq__40633_40941 = G__41032;
chunk__40637_40942 = G__41033;
count__40638_40943 = G__41034;
i__40639_40944 = G__41035;
continue;
} else {
var G__41036 = cljs.core.next(seq__40633_40992__$1);
var G__41037 = null;
var G__41038 = (0);
var G__41039 = (0);
seq__40633_40941 = G__41036;
chunk__40637_40942 = G__41037;
count__40638_40943 = G__41038;
i__40639_40944 = G__41039;
continue;
}
} else {
var G__41040 = cljs.core.next(seq__40633_40992__$1);
var G__41041 = null;
var G__41042 = (0);
var G__41043 = (0);
seq__40633_40941 = G__41040;
chunk__40637_40942 = G__41041;
count__40638_40943 = G__41042;
i__40639_40944 = G__41043;
continue;
}
}
} else {
}
}
break;
}


var G__41044 = seq__40455;
var G__41045 = chunk__40457;
var G__41046 = count__40458;
var G__41047 = (i__40459 + (1));
seq__40455 = G__41044;
chunk__40457 = G__41045;
count__40458 = G__41046;
i__40459 = G__41047;
continue;
} else {
var G__41048 = seq__40455;
var G__41049 = chunk__40457;
var G__41050 = count__40458;
var G__41051 = (i__40459 + (1));
seq__40455 = G__41048;
chunk__40457 = G__41049;
count__40458 = G__41050;
i__40459 = G__41051;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__40455);
if(temp__5816__auto__){
var seq__40455__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40455__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40455__$1);
var G__41053 = cljs.core.chunk_rest(seq__40455__$1);
var G__41054 = c__5568__auto__;
var G__41055 = cljs.core.count(c__5568__auto__);
var G__41056 = (0);
seq__40455 = G__41053;
chunk__40457 = G__41054;
count__40458 = G__41055;
i__40459 = G__41056;
continue;
} else {
var path = cljs.core.first(seq__40455__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40726_41057 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40730_41058 = null;
var count__40731_41059 = (0);
var i__40732_41060 = (0);
while(true){
if((i__40732_41060 < count__40731_41059)){
var node_41061 = chunk__40730_41058.cljs$core$IIndexed$_nth$arity$2(null,i__40732_41060);
if(cljs.core.not(node_41061.shadow$old)){
var path_match_41062 = shadow.cljs.devtools.client.browser.match_paths(node_41061.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41062)){
var new_link_41063 = (function (){var G__40782 = node_41061.cloneNode(true);
G__40782.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41062),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40782;
})();
(node_41061.shadow$old = true);

(new_link_41063.onload = ((function (seq__40726_41057,chunk__40730_41058,count__40731_41059,i__40732_41060,seq__40455,chunk__40457,count__40458,i__40459,new_link_41063,path_match_41062,node_41061,path,seq__40455__$1,temp__5816__auto__,map__40454,map__40454__$1,msg,updates,reload_info){
return (function (e){
var seq__40783_41064 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40785_41065 = null;
var count__40786_41066 = (0);
var i__40787_41067 = (0);
while(true){
if((i__40787_41067 < count__40786_41066)){
var map__40795_41068 = chunk__40785_41065.cljs$core$IIndexed$_nth$arity$2(null,i__40787_41067);
var map__40795_41069__$1 = cljs.core.__destructure_map(map__40795_41068);
var task_41070 = map__40795_41069__$1;
var fn_str_41071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40795_41069__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40795_41069__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41073 = goog.getObjectByName(fn_str_41071,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41072)].join(''));

(fn_obj_41073.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41073.cljs$core$IFn$_invoke$arity$2(path,new_link_41063) : fn_obj_41073.call(null,path,new_link_41063));


var G__41074 = seq__40783_41064;
var G__41075 = chunk__40785_41065;
var G__41076 = count__40786_41066;
var G__41077 = (i__40787_41067 + (1));
seq__40783_41064 = G__41074;
chunk__40785_41065 = G__41075;
count__40786_41066 = G__41076;
i__40787_41067 = G__41077;
continue;
} else {
var temp__5816__auto___41078__$1 = cljs.core.seq(seq__40783_41064);
if(temp__5816__auto___41078__$1){
var seq__40783_41079__$1 = temp__5816__auto___41078__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40783_41079__$1)){
var c__5568__auto___41080 = cljs.core.chunk_first(seq__40783_41079__$1);
var G__41081 = cljs.core.chunk_rest(seq__40783_41079__$1);
var G__41082 = c__5568__auto___41080;
var G__41083 = cljs.core.count(c__5568__auto___41080);
var G__41084 = (0);
seq__40783_41064 = G__41081;
chunk__40785_41065 = G__41082;
count__40786_41066 = G__41083;
i__40787_41067 = G__41084;
continue;
} else {
var map__40800_41085 = cljs.core.first(seq__40783_41079__$1);
var map__40800_41086__$1 = cljs.core.__destructure_map(map__40800_41085);
var task_41087 = map__40800_41086__$1;
var fn_str_41088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800_41086__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40800_41086__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41090 = goog.getObjectByName(fn_str_41088,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41089)].join(''));

(fn_obj_41090.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41090.cljs$core$IFn$_invoke$arity$2(path,new_link_41063) : fn_obj_41090.call(null,path,new_link_41063));


var G__41091 = cljs.core.next(seq__40783_41079__$1);
var G__41092 = null;
var G__41093 = (0);
var G__41094 = (0);
seq__40783_41064 = G__41091;
chunk__40785_41065 = G__41092;
count__40786_41066 = G__41093;
i__40787_41067 = G__41094;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41061);
});})(seq__40726_41057,chunk__40730_41058,count__40731_41059,i__40732_41060,seq__40455,chunk__40457,count__40458,i__40459,new_link_41063,path_match_41062,node_41061,path,seq__40455__$1,temp__5816__auto__,map__40454,map__40454__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41062], 0));

goog.dom.insertSiblingAfter(new_link_41063,node_41061);


var G__41095 = seq__40726_41057;
var G__41096 = chunk__40730_41058;
var G__41097 = count__40731_41059;
var G__41098 = (i__40732_41060 + (1));
seq__40726_41057 = G__41095;
chunk__40730_41058 = G__41096;
count__40731_41059 = G__41097;
i__40732_41060 = G__41098;
continue;
} else {
var G__41099 = seq__40726_41057;
var G__41100 = chunk__40730_41058;
var G__41101 = count__40731_41059;
var G__41102 = (i__40732_41060 + (1));
seq__40726_41057 = G__41099;
chunk__40730_41058 = G__41100;
count__40731_41059 = G__41101;
i__40732_41060 = G__41102;
continue;
}
} else {
var G__41103 = seq__40726_41057;
var G__41104 = chunk__40730_41058;
var G__41105 = count__40731_41059;
var G__41106 = (i__40732_41060 + (1));
seq__40726_41057 = G__41103;
chunk__40730_41058 = G__41104;
count__40731_41059 = G__41105;
i__40732_41060 = G__41106;
continue;
}
} else {
var temp__5816__auto___41107__$1 = cljs.core.seq(seq__40726_41057);
if(temp__5816__auto___41107__$1){
var seq__40726_41108__$1 = temp__5816__auto___41107__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40726_41108__$1)){
var c__5568__auto___41109 = cljs.core.chunk_first(seq__40726_41108__$1);
var G__41110 = cljs.core.chunk_rest(seq__40726_41108__$1);
var G__41111 = c__5568__auto___41109;
var G__41112 = cljs.core.count(c__5568__auto___41109);
var G__41113 = (0);
seq__40726_41057 = G__41110;
chunk__40730_41058 = G__41111;
count__40731_41059 = G__41112;
i__40732_41060 = G__41113;
continue;
} else {
var node_41114 = cljs.core.first(seq__40726_41108__$1);
if(cljs.core.not(node_41114.shadow$old)){
var path_match_41115 = shadow.cljs.devtools.client.browser.match_paths(node_41114.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41115)){
var new_link_41116 = (function (){var G__40807 = node_41114.cloneNode(true);
G__40807.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41115),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40807;
})();
(node_41114.shadow$old = true);

(new_link_41116.onload = ((function (seq__40726_41057,chunk__40730_41058,count__40731_41059,i__40732_41060,seq__40455,chunk__40457,count__40458,i__40459,new_link_41116,path_match_41115,node_41114,seq__40726_41108__$1,temp__5816__auto___41107__$1,path,seq__40455__$1,temp__5816__auto__,map__40454,map__40454__$1,msg,updates,reload_info){
return (function (e){
var seq__40808_41117 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40810_41118 = null;
var count__40811_41119 = (0);
var i__40812_41120 = (0);
while(true){
if((i__40812_41120 < count__40811_41119)){
var map__40825_41121 = chunk__40810_41118.cljs$core$IIndexed$_nth$arity$2(null,i__40812_41120);
var map__40825_41122__$1 = cljs.core.__destructure_map(map__40825_41121);
var task_41123 = map__40825_41122__$1;
var fn_str_41124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40825_41122__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40825_41122__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41126 = goog.getObjectByName(fn_str_41124,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41125)].join(''));

(fn_obj_41126.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41126.cljs$core$IFn$_invoke$arity$2(path,new_link_41116) : fn_obj_41126.call(null,path,new_link_41116));


var G__41127 = seq__40808_41117;
var G__41128 = chunk__40810_41118;
var G__41129 = count__40811_41119;
var G__41130 = (i__40812_41120 + (1));
seq__40808_41117 = G__41127;
chunk__40810_41118 = G__41128;
count__40811_41119 = G__41129;
i__40812_41120 = G__41130;
continue;
} else {
var temp__5816__auto___41131__$2 = cljs.core.seq(seq__40808_41117);
if(temp__5816__auto___41131__$2){
var seq__40808_41132__$1 = temp__5816__auto___41131__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40808_41132__$1)){
var c__5568__auto___41133 = cljs.core.chunk_first(seq__40808_41132__$1);
var G__41134 = cljs.core.chunk_rest(seq__40808_41132__$1);
var G__41135 = c__5568__auto___41133;
var G__41136 = cljs.core.count(c__5568__auto___41133);
var G__41137 = (0);
seq__40808_41117 = G__41134;
chunk__40810_41118 = G__41135;
count__40811_41119 = G__41136;
i__40812_41120 = G__41137;
continue;
} else {
var map__40827_41138 = cljs.core.first(seq__40808_41132__$1);
var map__40827_41139__$1 = cljs.core.__destructure_map(map__40827_41138);
var task_41140 = map__40827_41139__$1;
var fn_str_41141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40827_41139__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40827_41139__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41143 = goog.getObjectByName(fn_str_41141,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41142)].join(''));

(fn_obj_41143.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41143.cljs$core$IFn$_invoke$arity$2(path,new_link_41116) : fn_obj_41143.call(null,path,new_link_41116));


var G__41145 = cljs.core.next(seq__40808_41132__$1);
var G__41146 = null;
var G__41147 = (0);
var G__41148 = (0);
seq__40808_41117 = G__41145;
chunk__40810_41118 = G__41146;
count__40811_41119 = G__41147;
i__40812_41120 = G__41148;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41114);
});})(seq__40726_41057,chunk__40730_41058,count__40731_41059,i__40732_41060,seq__40455,chunk__40457,count__40458,i__40459,new_link_41116,path_match_41115,node_41114,seq__40726_41108__$1,temp__5816__auto___41107__$1,path,seq__40455__$1,temp__5816__auto__,map__40454,map__40454__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41115], 0));

goog.dom.insertSiblingAfter(new_link_41116,node_41114);


var G__41149 = cljs.core.next(seq__40726_41108__$1);
var G__41150 = null;
var G__41151 = (0);
var G__41152 = (0);
seq__40726_41057 = G__41149;
chunk__40730_41058 = G__41150;
count__40731_41059 = G__41151;
i__40732_41060 = G__41152;
continue;
} else {
var G__41153 = cljs.core.next(seq__40726_41108__$1);
var G__41154 = null;
var G__41155 = (0);
var G__41156 = (0);
seq__40726_41057 = G__41153;
chunk__40730_41058 = G__41154;
count__40731_41059 = G__41155;
i__40732_41060 = G__41156;
continue;
}
} else {
var G__41157 = cljs.core.next(seq__40726_41108__$1);
var G__41158 = null;
var G__41159 = (0);
var G__41160 = (0);
seq__40726_41057 = G__41157;
chunk__40730_41058 = G__41158;
count__40731_41059 = G__41159;
i__40732_41060 = G__41160;
continue;
}
}
} else {
}
}
break;
}


var G__41161 = cljs.core.next(seq__40455__$1);
var G__41162 = null;
var G__41163 = (0);
var G__41164 = (0);
seq__40455 = G__41161;
chunk__40457 = G__41162;
count__40458 = G__41163;
i__40459 = G__41164;
continue;
} else {
var G__41165 = cljs.core.next(seq__40455__$1);
var G__41166 = null;
var G__41167 = (0);
var G__41168 = (0);
seq__40455 = G__41165;
chunk__40457 = G__41166;
count__40458 = G__41167;
i__40459 = G__41168;
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
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__40835){
var map__40836 = p__40835;
var map__40836__$1 = cljs.core.__destructure_map(map__40836);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40836__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40837,done,error){
var map__40838 = p__40837;
var map__40838__$1 = cljs.core.__destructure_map(map__40838);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40838__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40844,done,error){
var map__40845 = p__40844;
var map__40845__$1 = cljs.core.__destructure_map(map__40845);
var msg = map__40845__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40845__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40845__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40845__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40846){
var map__40847 = p__40846;
var map__40847__$1 = cljs.core.__destructure_map(map__40847);
var src = map__40847__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40847__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40848 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40848) : done.call(null,G__40848));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40849){
var map__40850 = p__40849;
var map__40850__$1 = cljs.core.__destructure_map(map__40850);
var msg__$1 = map__40850__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40850__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40851){var ex = e40851;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40852){
var map__40853 = p__40852;
var map__40853__$1 = cljs.core.__destructure_map(map__40853);
var env = map__40853__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40853__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40854){
var map__40855 = p__40854;
var map__40855__$1 = cljs.core.__destructure_map(map__40855);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40855__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40855__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__40856){
var map__40857 = p__40856;
var map__40857__$1 = cljs.core.__destructure_map(map__40857);
var svc = map__40857__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40857__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
