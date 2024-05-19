goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38068){
var map__38070 = p__38068;
var map__38070__$1 = cljs.core.__destructure_map(map__38070);
var m = map__38070__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5816__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5816__auto__)){
var ns = temp__5816__auto__;
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
var seq__38073_38427 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38074_38428 = null;
var count__38075_38429 = (0);
var i__38076_38430 = (0);
while(true){
if((i__38076_38430 < count__38075_38429)){
var f_38435 = chunk__38074_38428.cljs$core$IIndexed$_nth$arity$2(null,i__38076_38430);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38435], 0));


var G__38436 = seq__38073_38427;
var G__38437 = chunk__38074_38428;
var G__38438 = count__38075_38429;
var G__38439 = (i__38076_38430 + (1));
seq__38073_38427 = G__38436;
chunk__38074_38428 = G__38437;
count__38075_38429 = G__38438;
i__38076_38430 = G__38439;
continue;
} else {
var temp__5816__auto___38440 = cljs.core.seq(seq__38073_38427);
if(temp__5816__auto___38440){
var seq__38073_38445__$1 = temp__5816__auto___38440;
if(cljs.core.chunked_seq_QMARK_(seq__38073_38445__$1)){
var c__5568__auto___38446 = cljs.core.chunk_first(seq__38073_38445__$1);
var G__38447 = cljs.core.chunk_rest(seq__38073_38445__$1);
var G__38448 = c__5568__auto___38446;
var G__38449 = cljs.core.count(c__5568__auto___38446);
var G__38450 = (0);
seq__38073_38427 = G__38447;
chunk__38074_38428 = G__38448;
count__38075_38429 = G__38449;
i__38076_38430 = G__38450;
continue;
} else {
var f_38451 = cljs.core.first(seq__38073_38445__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38451], 0));


var G__38456 = cljs.core.next(seq__38073_38445__$1);
var G__38457 = null;
var G__38458 = (0);
var G__38459 = (0);
seq__38073_38427 = G__38456;
chunk__38074_38428 = G__38457;
count__38075_38429 = G__38458;
i__38076_38430 = G__38459;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38460 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38460], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38460)))?cljs.core.second(arglists_38460):arglists_38460)], 0));
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
var seq__38090_38469 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38091_38470 = null;
var count__38092_38471 = (0);
var i__38093_38472 = (0);
while(true){
if((i__38093_38472 < count__38092_38471)){
var vec__38125_38474 = chunk__38091_38470.cljs$core$IIndexed$_nth$arity$2(null,i__38093_38472);
var name_38475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38125_38474,(0),null);
var map__38128_38476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38125_38474,(1),null);
var map__38128_38477__$1 = cljs.core.__destructure_map(map__38128_38476);
var doc_38478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38128_38477__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38128_38477__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38475], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38479], 0));

if(cljs.core.truth_(doc_38478)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38478], 0));
} else {
}


var G__38487 = seq__38090_38469;
var G__38488 = chunk__38091_38470;
var G__38489 = count__38092_38471;
var G__38490 = (i__38093_38472 + (1));
seq__38090_38469 = G__38487;
chunk__38091_38470 = G__38488;
count__38092_38471 = G__38489;
i__38093_38472 = G__38490;
continue;
} else {
var temp__5816__auto___38491 = cljs.core.seq(seq__38090_38469);
if(temp__5816__auto___38491){
var seq__38090_38492__$1 = temp__5816__auto___38491;
if(cljs.core.chunked_seq_QMARK_(seq__38090_38492__$1)){
var c__5568__auto___38493 = cljs.core.chunk_first(seq__38090_38492__$1);
var G__38494 = cljs.core.chunk_rest(seq__38090_38492__$1);
var G__38495 = c__5568__auto___38493;
var G__38496 = cljs.core.count(c__5568__auto___38493);
var G__38497 = (0);
seq__38090_38469 = G__38494;
chunk__38091_38470 = G__38495;
count__38092_38471 = G__38496;
i__38093_38472 = G__38497;
continue;
} else {
var vec__38185_38498 = cljs.core.first(seq__38090_38492__$1);
var name_38499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38185_38498,(0),null);
var map__38188_38500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38185_38498,(1),null);
var map__38188_38501__$1 = cljs.core.__destructure_map(map__38188_38500);
var doc_38502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38188_38501__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38188_38501__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38499], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38503], 0));

if(cljs.core.truth_(doc_38502)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38502], 0));
} else {
}


var G__38509 = cljs.core.next(seq__38090_38492__$1);
var G__38510 = null;
var G__38511 = (0);
var G__38512 = (0);
seq__38090_38469 = G__38509;
chunk__38091_38470 = G__38510;
count__38092_38471 = G__38511;
i__38093_38472 = G__38512;
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
var temp__5816__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5816__auto__)){
var fnspec = temp__5816__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38223 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38224 = null;
var count__38225 = (0);
var i__38226 = (0);
while(true){
if((i__38226 < count__38225)){
var role = chunk__38224.cljs$core$IIndexed$_nth$arity$2(null,i__38226);
var temp__5816__auto___38515__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5816__auto___38515__$1)){
var spec_38516 = temp__5816__auto___38515__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38516)], 0));
} else {
}


var G__38517 = seq__38223;
var G__38518 = chunk__38224;
var G__38519 = count__38225;
var G__38520 = (i__38226 + (1));
seq__38223 = G__38517;
chunk__38224 = G__38518;
count__38225 = G__38519;
i__38226 = G__38520;
continue;
} else {
var temp__5816__auto____$1 = cljs.core.seq(seq__38223);
if(temp__5816__auto____$1){
var seq__38223__$1 = temp__5816__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38223__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38223__$1);
var G__38521 = cljs.core.chunk_rest(seq__38223__$1);
var G__38522 = c__5568__auto__;
var G__38523 = cljs.core.count(c__5568__auto__);
var G__38524 = (0);
seq__38223 = G__38521;
chunk__38224 = G__38522;
count__38225 = G__38523;
i__38226 = G__38524;
continue;
} else {
var role = cljs.core.first(seq__38223__$1);
var temp__5816__auto___38525__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5816__auto___38525__$2)){
var spec_38526 = temp__5816__auto___38525__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38526)], 0));
} else {
}


var G__38527 = cljs.core.next(seq__38223__$1);
var G__38528 = null;
var G__38529 = (0);
var G__38530 = (0);
seq__38223 = G__38527;
chunk__38224 = G__38528;
count__38225 = G__38529;
i__38226 = G__38530;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5816__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5816__auto__)){
var msg = temp__5816__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5816__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5816__auto__)){
var ed = temp__5816__auto__;
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
var G__38533 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38534 = cljs.core.ex_cause(t);
via = G__38533;
t = G__38534;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5816__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5816__auto__)){
var root_msg = temp__5816__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5816__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5816__auto__)){
var data = temp__5816__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5816__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5816__auto__)){
var phase = temp__5816__auto__;
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
var map__38296 = datafied_throwable;
var map__38296__$1 = cljs.core.__destructure_map(map__38296);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38296__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38296__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38296__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38297 = cljs.core.last(via);
var map__38297__$1 = cljs.core.__destructure_map(map__38297);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38297__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38298 = data;
var map__38298__$1 = cljs.core.__destructure_map(map__38298);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38298__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38298__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38298__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38299 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38299__$1 = cljs.core.__destructure_map(map__38299);
var top_data = map__38299__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38299__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38300 = phase;
var G__38300__$1 = (((G__38300 instanceof cljs.core.Keyword))?G__38300.fqn:null);
switch (G__38300__$1) {
case "read-source":
var map__38301 = data;
var map__38301__$1 = cljs.core.__destructure_map(map__38301);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38301__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38301__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38306 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38306__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38306,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38306);
var G__38306__$2 = (cljs.core.truth_((function (){var fexpr__38307 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38307.cljs$core$IFn$_invoke$arity$1 ? fexpr__38307.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38307.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38306__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38306__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38306__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38306__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38308 = top_data;
var G__38308__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38308,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38308);
var G__38308__$2 = (cljs.core.truth_((function (){var fexpr__38310 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38310.cljs$core$IFn$_invoke$arity$1 ? fexpr__38310.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38310.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38308__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38308__$1);
var G__38308__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38308__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38308__$2);
var G__38308__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38308__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38308__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38308__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38308__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38313 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38313,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38313,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38313,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38313,(3),null);
var G__38316 = top_data;
var G__38316__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38316,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38316);
var G__38316__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38316__$1);
var G__38316__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38316__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38316__$2);
var G__38316__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38316__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38316__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38316__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38316__$4;
}

break;
case "execution":
var vec__38318 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38318,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38318,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38318,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38318,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38292_SHARP_){
var or__5045__auto__ = (p1__38292_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__38324 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38324.cljs$core$IFn$_invoke$arity$1 ? fexpr__38324.cljs$core$IFn$_invoke$arity$1(p1__38292_SHARP_) : fexpr__38324.call(null,p1__38292_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__38326 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38326__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38326,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38326);
var G__38326__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38326__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38326__$1);
var G__38326__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38326__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38326__$2);
var G__38326__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38326__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38326__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38326__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38326__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38300__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38338){
var map__38339 = p__38338;
var map__38339__$1 = cljs.core.__destructure_map(map__38339);
var triage_data = map__38339__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38339__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38339__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38339__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38339__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38339__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38339__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38339__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38339__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38340 = phase;
var G__38340__$1 = (((G__38340 instanceof cljs.core.Keyword))?G__38340.fqn:null);
switch (G__38340__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38342 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38343 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38344 = loc;
var G__38345 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38349_38628 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38350_38629 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38351_38630 = true;
var _STAR_print_fn_STAR__temp_val__38352_38631 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38351_38630);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38352_38631);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38332_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38332_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38350_38629);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38349_38628);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38342,G__38343,G__38344,G__38345) : format.call(null,G__38342,G__38343,G__38344,G__38345));

break;
case "macroexpansion":
var G__38359 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38360 = cause_type;
var G__38361 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38362 = loc;
var G__38363 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38359,G__38360,G__38361,G__38362,G__38363) : format.call(null,G__38359,G__38360,G__38361,G__38362,G__38363));

break;
case "compile-syntax-check":
var G__38364 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38365 = cause_type;
var G__38366 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38367 = loc;
var G__38368 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38364,G__38365,G__38366,G__38367,G__38368) : format.call(null,G__38364,G__38365,G__38366,G__38367,G__38368));

break;
case "compilation":
var G__38370 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38371 = cause_type;
var G__38372 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38373 = loc;
var G__38374 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38370,G__38371,G__38372,G__38373,G__38374) : format.call(null,G__38370,G__38371,G__38372,G__38373,G__38374));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38376 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38377 = symbol;
var G__38378 = loc;
var G__38379 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38380_38649 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38381_38650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38382_38651 = true;
var _STAR_print_fn_STAR__temp_val__38383_38652 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38382_38651);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38383_38652);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38333_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38333_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38381_38650);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38380_38649);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38376,G__38377,G__38378,G__38379) : format.call(null,G__38376,G__38377,G__38378,G__38379));
} else {
var G__38394 = "Execution error%s at %s(%s).\n%s\n";
var G__38395 = cause_type;
var G__38396 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38397 = loc;
var G__38398 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38394,G__38395,G__38396,G__38397,G__38398) : format.call(null,G__38394,G__38395,G__38396,G__38397,G__38398));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38340__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
