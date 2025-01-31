goog.provide('com.fulcrologic.guardrails.utils');
com.fulcrologic.guardrails.utils.cljs_env_QMARK_ = (function com$fulcrologic$guardrails$utils$cljs_env_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
com.fulcrologic.guardrails.utils.get_ns_meta = (function com$fulcrologic$guardrails$utils$get_ns_meta(env){
if(com.fulcrologic.guardrails.utils.cljs_env_QMARK_(env)){
var or__5045__auto__ = cljs.core.meta(cljs.core._STAR_ns_STAR_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__42442 = env;
var G__42442__$1 = (((G__42442 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__42442));
if((G__42442__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(G__42442__$1);
}
}
} else {
return cljs.core.meta(cljs.core._STAR_ns_STAR_);
}
});
com.fulcrologic.guardrails.utils.get_ns_name = (function com$fulcrologic$guardrails$utils$get_ns_name(env){
if(com.fulcrologic.guardrails.utils.cljs_env_QMARK_(env)){
var or__5045__auto__ = cljs.core._STAR_ns_STAR_.name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__42444 = env;
var G__42444__$1 = (((G__42444 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__42444));
if((G__42444__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__42444__$1);
}
}
} else {
return cljs.core._STAR_ns_STAR_.name;
}
});
com.fulcrologic.guardrails.utils.clj__GT_cljs = (function com$fulcrologic$guardrails$utils$clj__GT_cljs(var_args){
var G__42450 = arguments.length;
switch (G__42450) {
case 1:
return com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$1 = (function (form){
return com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$2(form,true);
}));

(com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$core$IFn$_invoke$arity$2 = (function (form,strip_core_ns){
var ns_replacements = (function (){var G__42455 = new cljs.core.PersistentArrayMap(null, 6, ["clojure.core","cljs.core","clojure.test","cljs.test","clojure.spec.alpha","cljs.spec.alpha","clojure.spec.test.alpha","cljs.spec.test.alpha","orchestra.spec.test","orchestra-cljs.spec.test","clojure.spec.gen.alpha","cljs.spec.gen.alpha"], null);
if(cljs.core.truth_(strip_core_ns)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__42455,new cljs.core.PersistentArrayMap(null, 2, ["clojure.core",null,"cljs.core",null], null)], 0));
} else {
return G__42455;
}
})();
var replace_namespace = (function (p1__42448_SHARP_){
if((!(cljs.core.qualified_symbol_QMARK_(p1__42448_SHARP_)))){
return p1__42448_SHARP_;
} else {
var nspace = cljs.core.namespace(p1__42448_SHARP_);
if(cljs.core.contains_QMARK_(ns_replacements,nspace)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns_replacements,nspace),cljs.core.name(p1__42448_SHARP_));
} else {
return p1__42448_SHARP_;
}
}
});
return clojure.walk.postwalk(replace_namespace,form);
}));

(com.fulcrologic.guardrails.utils.clj__GT_cljs.cljs$lang$maxFixedArity = 2);

com.fulcrologic.guardrails.utils.get_file_position = (function com$fulcrologic$guardrails$utils$get_file_position(env){
if(com.fulcrologic.guardrails.utils.cljs_env_QMARK_(env)){
var map__42456 = env;
var map__42456__$1 = cljs.core.__destructure_map(map__42456);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42456__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42456__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return null;
}
});
com.fulcrologic.guardrails.utils.get_call_context = (function com$fulcrologic$guardrails$utils$get_call_context(var_args){
var G__42462 = arguments.length;
switch (G__42462) {
case 1:
return com.fulcrologic.guardrails.utils.get_call_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.guardrails.utils.get_call_context.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.guardrails.utils.get_call_context.cljs$core$IFn$_invoke$arity$1 = (function (env){
return com.fulcrologic.guardrails.utils.get_call_context.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(com.fulcrologic.guardrails.utils.get_call_context.cljs$core$IFn$_invoke$arity$2 = (function (env,label){
return [(cljs.core.truth_(label)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)," \u2013 "].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.get_ns_name(env)),":",com.fulcrologic.guardrails.utils.get_file_position(env)].join('');
}));

(com.fulcrologic.guardrails.utils.get_call_context.cljs$lang$maxFixedArity = 2);

com.fulcrologic.guardrails.utils.gen_exception = (function com$fulcrologic$guardrails$utils$gen_exception(env,msg){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,((com.fulcrologic.guardrails.utils.cljs_env_QMARK_(env))?new cljs.core.Symbol("js","Error.","js/Error.",750655924,null):new cljs.core.Symbol(null,"Exception.","Exception.",-981206655,null)),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))))),null,(1),null)))));
});
com.fulcrologic.guardrails.utils.devtools_config_override = (function com$fulcrologic$guardrails$utils$devtools_config_override(){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"current-config__42467__auto__","current-config__42467__auto__",1608611825,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("devtools.prefs","get-prefs","devtools.prefs/get-prefs",1778468250,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"overrides__42468__auto__","overrides__42468__auto__",-489313239,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"max-print-level","max-print-level",-462237413),null,(1),null)),(new cljs.core.List(null,(4),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"min-expandable-sequable-count-for-well-known-types","min-expandable-sequable-count-for-well-known-types",-1879576081),null,(1),null)),(new cljs.core.List(null,(2),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"left-adjust__42469__auto__","left-adjust__42469__auto__",598748474,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"margin-left: -17px;",null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",-822184067,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"current-config__42467__auto__","current-config__42467__auto__",1608611825,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"overrides__42468__auto__","overrides__42468__auto__",-489313239,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"k__42470__auto__","k__42470__auto__",177747188,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"header-style","header-style",-2122121341),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"let","let",-1282412701),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"v__42471__auto__","v__42471__auto__",337637225,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"current-config__42467__auto__","current-config__42467__auto__",1608611825,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__42470__auto__","k__42470__auto__",177747188,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__42470__auto__","k__42470__auto__",177747188,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__42471__auto__","v__42471__auto__",337637225,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"left-adjust__42469__auto__","left-adjust__42469__auto__",598748474,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
com.fulcrologic.guardrails.utils.map_vals = (function com$fulcrologic$guardrails$utils$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
}
});
com.fulcrologic.guardrails.utils.map_keys = (function com$fulcrologic$guardrails$utils$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
var p_BANG__42524 = cljs.core.persistent_BANG_;
var t_42525 = cljs.core.transient$;
com.fulcrologic.guardrails.utils.filter_vals = (function com$fulcrologic$guardrails$utils$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var G__42489 = cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),(t_42525.cljs$core$IFn$_invoke$arity$1 ? t_42525.cljs$core$IFn$_invoke$arity$1(m) : t_42525.call(null,m)),m);
return (p_BANG__42524.cljs$core$IFn$_invoke$arity$1 ? p_BANG__42524.cljs$core$IFn$_invoke$arity$1(G__42489) : p_BANG__42524.call(null,G__42489));
}
});
com.fulcrologic.guardrails.utils.atom_QMARK_ = (function com$fulcrologic$guardrails$utils$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
com.fulcrologic.guardrails.utils.stacktrace = (function com$fulcrologic$guardrails$utils$stacktrace(var_args){
var G__42496 = arguments.length;
switch (G__42496) {
case 1:
return com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$2(err,null);
}));

(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(err);
}));

(com.fulcrologic.guardrails.utils.stacktrace.cljs$lang$maxFixedArity = 2);

com.fulcrologic.guardrails.utils.report_problem = (function com$fulcrologic$guardrails$utils$report_problem(message){
return console.error(message);
});
com.fulcrologic.guardrails.utils.report_exception = (function com$fulcrologic$guardrails$utils$report_exception(e,message){
return console.error(message,e);
});

//# sourceMappingURL=com.fulcrologic.guardrails.utils.js.map
