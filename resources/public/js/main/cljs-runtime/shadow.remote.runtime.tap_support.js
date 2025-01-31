goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__39367,p__39368){
var map__39369 = p__39367;
var map__39369__$1 = cljs.core.__destructure_map(map__39369);
var svc = map__39369__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39369__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39369__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39369__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39370 = p__39368;
var map__39370__$1 = cljs.core.__destructure_map(map__39370);
var msg = map__39370__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39370__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39370__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39370__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39370__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__39400,p__39401){
var map__39402 = p__39400;
var map__39402__$1 = cljs.core.__destructure_map(map__39402);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39402__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__39403 = p__39401;
var map__39403__$1 = cljs.core.__destructure_map(map__39403);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39403__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39404,p__39405){
var map__39406 = p__39404;
var map__39406__$1 = cljs.core.__destructure_map(map__39406);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39406__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39406__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39407 = p__39405;
var map__39407__$1 = cljs.core.__destructure_map(map__39407);
var msg = map__39407__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39407__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39409,tid){
var map__39410 = p__39409;
var map__39410__$1 = cljs.core.__destructure_map(map__39410);
var svc = map__39410__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39410__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39419 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39420 = null;
var count__39421 = (0);
var i__39422 = (0);
while(true){
if((i__39422 < count__39421)){
var vec__39438 = chunk__39420.cljs$core$IIndexed$_nth$arity$2(null,i__39422);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39438,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39438,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39486 = seq__39419;
var G__39487 = chunk__39420;
var G__39488 = count__39421;
var G__39489 = (i__39422 + (1));
seq__39419 = G__39486;
chunk__39420 = G__39487;
count__39421 = G__39488;
i__39422 = G__39489;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__39419);
if(temp__5816__auto__){
var seq__39419__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39419__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__39419__$1);
var G__39490 = cljs.core.chunk_rest(seq__39419__$1);
var G__39491 = c__5568__auto__;
var G__39492 = cljs.core.count(c__5568__auto__);
var G__39493 = (0);
seq__39419 = G__39490;
chunk__39420 = G__39491;
count__39421 = G__39492;
i__39422 = G__39493;
continue;
} else {
var vec__39441 = cljs.core.first(seq__39419__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39441,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39441,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39495 = cljs.core.next(seq__39419__$1);
var G__39496 = null;
var G__39497 = (0);
var G__39498 = (0);
seq__39419 = G__39495;
chunk__39420 = G__39496;
count__39421 = G__39497;
i__39422 = G__39498;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39411_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39411_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39412_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39412_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39413_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39413_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39414_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39414_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39450){
var map__39451 = p__39450;
var map__39451__$1 = cljs.core.__destructure_map(map__39451);
var svc = map__39451__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39451__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39451__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
