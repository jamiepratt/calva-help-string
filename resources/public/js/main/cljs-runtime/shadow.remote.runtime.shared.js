goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33477){
var map__33478 = p__33477;
var map__33478__$1 = cljs.core.__destructure_map(map__33478);
var runtime = map__33478__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33478__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_33638 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_33638)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__33479 = runtime;
var G__33480 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_33638);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__33479,G__33480) : shadow.remote.runtime.shared.process.call(null,G__33479,G__33480));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33488,res){
var map__33490 = p__33488;
var map__33490__$1 = cljs.core.__destructure_map(map__33490);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33490__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33490__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33491 = res;
var G__33491__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33491,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33491);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33491__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33491__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33493 = arguments.length;
switch (G__33493) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33503,msg,handlers,timeout_after_ms){
var map__33504 = p__33503;
var map__33504__$1 = cljs.core.__destructure_map(map__33504);
var runtime = map__33504__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33504__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33657 = arguments.length;
var i__5770__auto___33658 = (0);
while(true){
if((i__5770__auto___33658 < len__5769__auto___33657)){
args__5775__auto__.push((arguments[i__5770__auto___33658]));

var G__33661 = (i__5770__auto___33658 + (1));
i__5770__auto___33658 = G__33661;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33512,ev,args){
var map__33513 = p__33512;
var map__33513__$1 = cljs.core.__destructure_map(map__33513);
var runtime = map__33513__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33513__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33515 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33518 = null;
var count__33519 = (0);
var i__33520 = (0);
while(true){
if((i__33520 < count__33519)){
var ext = chunk__33518.cljs$core$IIndexed$_nth$arity$2(null,i__33520);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33682 = seq__33515;
var G__33683 = chunk__33518;
var G__33684 = count__33519;
var G__33685 = (i__33520 + (1));
seq__33515 = G__33682;
chunk__33518 = G__33683;
count__33519 = G__33684;
i__33520 = G__33685;
continue;
} else {
var G__33687 = seq__33515;
var G__33688 = chunk__33518;
var G__33689 = count__33519;
var G__33690 = (i__33520 + (1));
seq__33515 = G__33687;
chunk__33518 = G__33688;
count__33519 = G__33689;
i__33520 = G__33690;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__33515);
if(temp__5816__auto__){
var seq__33515__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33515__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33515__$1);
var G__33692 = cljs.core.chunk_rest(seq__33515__$1);
var G__33693 = c__5568__auto__;
var G__33694 = cljs.core.count(c__5568__auto__);
var G__33695 = (0);
seq__33515 = G__33692;
chunk__33518 = G__33693;
count__33519 = G__33694;
i__33520 = G__33695;
continue;
} else {
var ext = cljs.core.first(seq__33515__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33696 = cljs.core.next(seq__33515__$1);
var G__33697 = null;
var G__33698 = (0);
var G__33699 = (0);
seq__33515 = G__33696;
chunk__33518 = G__33697;
count__33519 = G__33698;
i__33520 = G__33699;
continue;
} else {
var G__33702 = cljs.core.next(seq__33515__$1);
var G__33703 = null;
var G__33704 = (0);
var G__33705 = (0);
seq__33515 = G__33702;
chunk__33518 = G__33703;
count__33519 = G__33704;
i__33520 = G__33705;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33506){
var G__33507 = cljs.core.first(seq33506);
var seq33506__$1 = cljs.core.next(seq33506);
var G__33508 = cljs.core.first(seq33506__$1);
var seq33506__$2 = cljs.core.next(seq33506__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33507,G__33508,seq33506__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33537,p__33538){
var map__33539 = p__33537;
var map__33539__$1 = cljs.core.__destructure_map(map__33539);
var runtime = map__33539__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33539__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33540 = p__33538;
var map__33540__$1 = cljs.core.__destructure_map(map__33540);
var msg = map__33540__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33540__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33542 = cljs.core.deref(state_ref);
var map__33542__$1 = cljs.core.__destructure_map(map__33542);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33542__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33542__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33553,msg){
var map__33554 = p__33553;
var map__33554__$1 = cljs.core.__destructure_map(map__33554);
var runtime = map__33554__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33554__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33557,key,p__33558){
var map__33560 = p__33557;
var map__33560__$1 = cljs.core.__destructure_map(map__33560);
var state = map__33560__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33560__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33561 = p__33558;
var map__33561__$1 = cljs.core.__destructure_map(map__33561);
var spec = map__33561__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33561__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33570,key,spec){
var map__33571 = p__33570;
var map__33571__$1 = cljs.core.__destructure_map(map__33571);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33571__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33576_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33576_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33577_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33577_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33578_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33578_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33579_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33579_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33580_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33580_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33590,key){
var map__33591 = p__33590;
var map__33591__$1 = cljs.core.__destructure_map(map__33591);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33591__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33598,msg){
var map__33599 = p__33598;
var map__33599__$1 = cljs.core.__destructure_map(map__33599);
var runtime = map__33599__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33599__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33608,p__33609){
var map__33610 = p__33608;
var map__33610__$1 = cljs.core.__destructure_map(map__33610);
var runtime = map__33610__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33610__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33611 = p__33609;
var map__33611__$1 = cljs.core.__destructure_map(map__33611);
var msg = map__33611__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33611__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33611__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33618 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33620 = null;
var count__33621 = (0);
var i__33622 = (0);
while(true){
if((i__33622 < count__33621)){
var map__33629 = chunk__33620.cljs$core$IIndexed$_nth$arity$2(null,i__33622);
var map__33629__$1 = cljs.core.__destructure_map(map__33629);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33629__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33736 = seq__33618;
var G__33737 = chunk__33620;
var G__33738 = count__33621;
var G__33739 = (i__33622 + (1));
seq__33618 = G__33736;
chunk__33620 = G__33737;
count__33621 = G__33738;
i__33622 = G__33739;
continue;
} else {
var G__33740 = seq__33618;
var G__33741 = chunk__33620;
var G__33742 = count__33621;
var G__33743 = (i__33622 + (1));
seq__33618 = G__33740;
chunk__33620 = G__33741;
count__33621 = G__33742;
i__33622 = G__33743;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__33618);
if(temp__5816__auto__){
var seq__33618__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33618__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33618__$1);
var G__33747 = cljs.core.chunk_rest(seq__33618__$1);
var G__33748 = c__5568__auto__;
var G__33749 = cljs.core.count(c__5568__auto__);
var G__33750 = (0);
seq__33618 = G__33747;
chunk__33620 = G__33748;
count__33621 = G__33749;
i__33622 = G__33750;
continue;
} else {
var map__33630 = cljs.core.first(seq__33618__$1);
var map__33630__$1 = cljs.core.__destructure_map(map__33630);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33630__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33753 = cljs.core.next(seq__33618__$1);
var G__33754 = null;
var G__33755 = (0);
var G__33756 = (0);
seq__33618 = G__33753;
chunk__33620 = G__33754;
count__33621 = G__33755;
i__33622 = G__33756;
continue;
} else {
var G__33757 = cljs.core.next(seq__33618__$1);
var G__33758 = null;
var G__33759 = (0);
var G__33760 = (0);
seq__33618 = G__33757;
chunk__33620 = G__33758;
count__33621 = G__33759;
i__33622 = G__33760;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
