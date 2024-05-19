goog.provide('com.fulcrologic.guardrails.core');
com.fulcrologic.guardrails.core._EQ__GT_ = new cljs.core.Keyword(null,"ret","ret",-468222814);
com.fulcrologic.guardrails.core._BAR_ = new cljs.core.Keyword(null,"st","st",1455255828);
com.fulcrologic.guardrails.core._LT__ = new cljs.core.Keyword(null,"gen","gen",142575302);
com.fulcrologic.guardrails.core.global_context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
/**
 * Push a global context, accessible from all threads, onto a stack.
 * Used to add information to what guardrails will report when a function failed a check.
 */
com.fulcrologic.guardrails.core.enter_global_context_BANG_ = (function com$fulcrologic$guardrails$core$enter_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cons,ctx));
});
/**
 * Pops a global context (see `enter-global-context!`).
 * Should be passed the same context that was pushed, although is not enforced, as it's only to be easily compatible with fulcro-spec's hooks API.
 */
com.fulcrologic.guardrails.core.leave_global_context_BANG_ = (function com$fulcrologic$guardrails$core$leave_global_context_BANG_(ctx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.guardrails.core.global_context,cljs.core.rest);
});
com.fulcrologic.guardrails.core.get_global_context = (function com$fulcrologic$guardrails$core$get_global_context(){
return cljs.core.first(cljs.core.deref(com.fulcrologic.guardrails.core.global_context));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.pending_check_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.pending_check_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10000)));
}
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.guardrails !== 'undefined') && (typeof com.fulcrologic.guardrails.core !== 'undefined') && (typeof com.fulcrologic.guardrails.core.async_go_channel !== 'undefined')){
} else {
com.fulcrologic.guardrails.core.async_go_channel = (function (){var c__33582__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_48314){
var state_val_48316 = (state_48314[(1)]);
if((state_val_48316 === (7))){
var inst_48310 = (state_48314[(2)]);
var state_48314__$1 = state_48314;
var statearr_48317_48392 = state_48314__$1;
(statearr_48317_48392[(2)] = inst_48310);

(statearr_48317_48392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48316 === (1))){
var state_48314__$1 = state_48314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48314__$1,(2),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_48316 === (4))){
var inst_48312 = (state_48314[(2)]);
var state_48314__$1 = state_48314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48314__$1,inst_48312);
} else {
if((state_val_48316 === (6))){
var inst_48308 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Guardrails ASYNC LOOP STOPPED ****************************************"], 0));
var state_48314__$1 = state_48314;
var statearr_48322_48393 = state_48314__$1;
(statearr_48322_48393[(2)] = inst_48308);

(statearr_48322_48393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48316 === (3))){
var inst_48291 = (state_48314[(7)]);
var state_48314__$1 = state_48314;
if(cljs.core.truth_(inst_48291)){
var statearr_48324_48394 = state_48314__$1;
(statearr_48324_48394[(1)] = (5));

} else {
var statearr_48325_48395 = state_48314__$1;
(statearr_48325_48395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48316 === (12))){
var inst_48305 = (state_48314[(2)]);
var inst_48291 = inst_48305;
var state_48314__$1 = (function (){var statearr_48327 = state_48314;
(statearr_48327[(7)] = inst_48291);

return statearr_48327;
})();
var statearr_48328_48396 = state_48314__$1;
(statearr_48328_48396[(2)] = null);

(statearr_48328_48396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48316 === (2))){
var inst_48290 = (state_48314[(2)]);
var inst_48291 = inst_48290;
var state_48314__$1 = (function (){var statearr_48329 = state_48314;
(statearr_48329[(7)] = inst_48291);

return statearr_48329;
})();
var statearr_48330_48399 = state_48314__$1;
(statearr_48330_48399[(2)] = null);

(statearr_48330_48399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48316 === (11))){
var _ = (function (){var statearr_48333 = state_48314;
(statearr_48333[(4)] = cljs.core.rest((state_48314[(4)])));

return statearr_48333;
})();
var state_48314__$1 = state_48314;
var ex48326 = (state_48314__$1[(2)]);
var statearr_48334_48400 = state_48314__$1;
(statearr_48334_48400[(5)] = ex48326);


var statearr_48335_48401 = state_48314__$1;
(statearr_48335_48401[(1)] = (10));

(statearr_48335_48401[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48316 === (9))){
var inst_48303 = (state_48314[(2)]);
var state_48314__$1 = (function (){var statearr_48336 = state_48314;
(statearr_48336[(8)] = inst_48303);

return statearr_48336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48314__$1,(12),com.fulcrologic.guardrails.core.pending_check_channel);
} else {
if((state_val_48316 === (5))){
var state_48314__$1 = state_48314;
var statearr_48337_48403 = state_48314__$1;
(statearr_48337_48403[(2)] = null);

(statearr_48337_48403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48316 === (10))){
var inst_48294 = (state_48314[(2)]);
var state_48314__$1 = (function (){var statearr_48338 = state_48314;
(statearr_48338[(9)] = inst_48294);

return statearr_48338;
})();
var statearr_48339_48405 = state_48314__$1;
(statearr_48339_48405[(2)] = null);

(statearr_48339_48405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48316 === (8))){
var inst_48291 = (state_48314[(7)]);
var _ = (function (){var statearr_48340 = state_48314;
(statearr_48340[(4)] = cljs.core.cons((11),(state_48314[(4)])));

return statearr_48340;
})();
var inst_48300 = (inst_48291.cljs$core$IFn$_invoke$arity$0 ? inst_48291.cljs$core$IFn$_invoke$arity$0() : inst_48291.call(null));
var ___$1 = (function (){var statearr_48343 = state_48314;
(statearr_48343[(4)] = cljs.core.rest((state_48314[(4)])));

return statearr_48343;
})();
var state_48314__$1 = state_48314;
var statearr_48345_48407 = state_48314__$1;
(statearr_48345_48407[(2)] = inst_48300);

(statearr_48345_48407[(1)] = (9));


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
});
return (function() {
var com$fulcrologic$guardrails$core$state_machine__33065__auto__ = null;
var com$fulcrologic$guardrails$core$state_machine__33065__auto____0 = (function (){
var statearr_48346 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48346[(0)] = com$fulcrologic$guardrails$core$state_machine__33065__auto__);

(statearr_48346[(1)] = (1));

return statearr_48346;
});
var com$fulcrologic$guardrails$core$state_machine__33065__auto____1 = (function (state_48314){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_48314);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e48347){var ex__33068__auto__ = e48347;
var statearr_48348_48409 = state_48314;
(statearr_48348_48409[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_48314[(4)]))){
var statearr_48351_48410 = state_48314;
(statearr_48351_48410[(1)] = cljs.core.first((state_48314[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48411 = state_48314;
state_48314 = G__48411;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
com$fulcrologic$guardrails$core$state_machine__33065__auto__ = function(state_48314){
switch(arguments.length){
case 0:
return com$fulcrologic$guardrails$core$state_machine__33065__auto____0.call(this);
case 1:
return com$fulcrologic$guardrails$core$state_machine__33065__auto____1.call(this,state_48314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$fulcrologic$guardrails$core$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = com$fulcrologic$guardrails$core$state_machine__33065__auto____0;
com$fulcrologic$guardrails$core$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = com$fulcrologic$guardrails$core$state_machine__33065__auto____1;
return com$fulcrologic$guardrails$core$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_48353 = f__33584__auto__();
(statearr_48353[(6)] = c__33582__auto__);

return statearr_48353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));

return c__33582__auto__;
})();
}
com.fulcrologic.guardrails.core.output_fn = (function com$fulcrologic$guardrails$core$output_fn(data){
var map__48355 = data;
var map__48355__$1 = cljs.core.__destructure_map(map__48355);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"?err","?err",549653299));
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"?ns-str","?ns-str",2012733966));
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"?file","?file",1533429675));
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"hostname_","hostname_",-2091647379));
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"timestamp_","timestamp_",-954533417));
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48355__$1,new cljs.core.Keyword(null,"?line","?line",-631853385));
return [clojure.string.upper_case(cljs.core.name(level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.force(msg_)),(function (){var temp__5816__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5816__auto__)){
var err = temp__5816__auto__;
return ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1(err))].join('');
} else {
return null;
}
})()].join('');
});
com.fulcrologic.guardrails.core.now_ms = (function com$fulcrologic$guardrails$core$now_ms(){
return cljs.core.inst_ms((new Date()));
});
com.fulcrologic.guardrails.core.tap = (((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.tap_GT_ !== 'undefined'))?(new cljs.core.Var((function (){
return cljs.core.tap_GT_;
}),cljs.core.with_meta(new cljs.core.Symbol("cljs.core","tap>","cljs.core/tap>",895722640,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"tap>","tap>",1822490677,null),"cljs/core.cljs",20,1,11858,11858,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Sends x to any taps. Returns the result of *exec-tap-fn*, a Boolean value.",((cljs.core.tap_GT_)?cljs.core.tap_GT_.cljs$lang$test:null)]))):null);
com.fulcrologic.guardrails.core.run_check = (function com$fulcrologic$guardrails$core$run_check(p__48356,spec,value){
var map__48357 = p__48356;
var map__48357__$1 = cljs.core.__destructure_map(map__48357);
var tap_GT__QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"tap>?","tap>?",212454486));
var args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"args?","args?",-1963723548));
var vararg_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"vararg?","vararg?",1908105777));
var callsite = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"callsite","callsite",243654023));
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
var expound_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"expound-opts","expound-opts",623087481));
var start_48416 = com.fulcrologic.guardrails.core.now_ms();
var vargs_QMARK__48417 = (function (){var and__5043__auto__ = args_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return vararg_QMARK_;
} else {
return and__5043__auto__;
}
})();
var varg_48418 = (cljs.core.truth_(vargs_QMARK__48417)?cljs.core.last(cljs.core.seq(value)):null);
var specable_args_48419 = (cljs.core.truth_(vargs_QMARK__48417)?((cljs.core.map_QMARK_(varg_48418))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.flatten(cljs.core.seq(varg_48418))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(value)),cljs.core.seq(varg_48418))):value);
var valid_exception_48420 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
try{if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,specable_args_48419)){
} else {
var problem_48422 = expound.alpha.expound_str.cljs$core$IFn$_invoke$arity$3(spec,specable_args_48419,expound_opts);
var description_48423 = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name),(cljs.core.truth_(args_QMARK_)?" argument list":" return type"),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(problem_48422)].join('');
var context_48424 = com.fulcrologic.guardrails.core.get_global_context();
if(cljs.core.truth_((function (){var and__5043__auto__ = com.fulcrologic.guardrails.core.tap;
if(cljs.core.truth_(and__5043__auto__)){
return tap_GT__QMARK_;
} else {
return and__5043__auto__;
}
})())){
var G__48359_48425 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","explain-data","com.fulcrologic.guardrails/explain-data",-1120944464),cljs.spec.alpha.explain_data(spec,specable_args_48419)], null);
(com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.guardrails.core.tap.cljs$core$IFn$_invoke$arity$1(G__48359_48425) : com.fulcrologic.guardrails.core.tap.call(null,G__48359_48425));
} else {
}

if(cljs.core.truth_(throw_QMARK_)){
cljs.core.reset_BANG_(valid_exception_48420,cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__48360 = description_48423;
if(cljs.core.truth_(context_48424)){
return ["\nContext: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context_48424),G__48360].join('');
} else {
return G__48360;
}
})(),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("com.fulcrologic.guardrails","validation-error","com.fulcrologic.guardrails/validation-error",776351266),new cljs.core.Keyword("com.fulcrologic.guardrails","fn-name","com.fulcrologic.guardrails/fn-name",-762819408),fn_name,new cljs.core.Keyword("com.fulcrologic.guardrails","failure-point","com.fulcrologic.guardrails/failure-point",340797326),(cljs.core.truth_(args_QMARK_)?new cljs.core.Keyword(null,"args","args",1315556576):new cljs.core.Keyword(null,"ret","ret",-468222814)),new cljs.core.Keyword("com.fulcrologic.guardrails","spec","com.fulcrologic.guardrails/spec",343160061),spec,new cljs.core.Keyword("com.fulcrologic.guardrails","context","com.fulcrologic.guardrails/context",-834538901),context_48424], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.fulcrologic.guardrails","val","com.fulcrologic.guardrails/val",132345656),specable_args_48419], null))));
} else {
com.fulcrologic.guardrails.utils.report_problem([description_48423,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(com.fulcrologic.guardrails.utils.stacktrace.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = callsite;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("",cljs.core.PersistentArrayMap.EMPTY);
}
})()))].join(''));
}
}
}catch (e48358){var e_48431 = e48358;
com.fulcrologic.guardrails.utils.report_exception(e_48431,"BUG: Internal error in expound or clojure spec.\n");
}finally {var duration_48432 = (com.fulcrologic.guardrails.core.now_ms() - start_48416);
if((duration_48432 > (100))){
com.fulcrologic.guardrails.utils.report_problem(["WARNING: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," ",(cljs.core.truth_(args_QMARK_)?"argument specs":"return spec")," took ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration_48432),"ms to run."].join(''));
} else {
}
}
if(cljs.core.truth_(cljs.core.deref(valid_exception_48420))){
throw cljs.core.deref(valid_exception_48420);
} else {
}

return null;
});
com.fulcrologic.guardrails.core.callsite_exception = (function com$fulcrologic$guardrails$core$callsite_exception(){
return (new Error(""));
});

//# sourceMappingURL=com.fulcrologic.guardrails.core.js.map
