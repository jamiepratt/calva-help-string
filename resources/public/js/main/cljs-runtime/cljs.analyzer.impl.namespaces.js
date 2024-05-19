goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__40515 = libspec;
var seq__40516 = cljs.core.seq(vec__40515);
var first__40517 = cljs.core.first(seq__40516);
var seq__40516__$1 = cljs.core.next(seq__40516);
var lib = first__40517;
var spec = seq__40516__$1;
var libspec__$1 = vec__40515;
var vec__40518 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40518,(0),null);
var vec__40521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40518,(1),null);
var seq__40522 = cljs.core.seq(vec__40521);
var first__40523 = cljs.core.first(seq__40522);
var seq__40522__$1 = cljs.core.next(seq__40522);
var _ = first__40523;
var first__40523__$1 = cljs.core.first(seq__40522__$1);
var seq__40522__$2 = cljs.core.next(seq__40522__$1);
var alias = first__40523__$1;
var post_spec = seq__40522__$2;
var post = vec__40521;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__40524 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40524,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__40524;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__40526 = cljs.core.seq(new_as_aliases);
var chunk__40527 = null;
var count__40528 = (0);
var i__40529 = (0);
while(true){
if((i__40529 < count__40528)){
var vec__40557 = chunk__40527.cljs$core$IIndexed$_nth$arity$2(null,i__40529);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40557,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40557,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__40607 = seq__40526;
var G__40608 = chunk__40527;
var G__40609 = count__40528;
var G__40610 = (i__40529 + (1));
seq__40526 = G__40607;
chunk__40527 = G__40608;
count__40528 = G__40609;
i__40529 = G__40610;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__40526);
if(temp__5816__auto__){
var seq__40526__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40526__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40526__$1);
var G__40611 = cljs.core.chunk_rest(seq__40526__$1);
var G__40612 = c__5568__auto__;
var G__40613 = cljs.core.count(c__5568__auto__);
var G__40614 = (0);
seq__40526 = G__40611;
chunk__40527 = G__40612;
count__40528 = G__40613;
i__40529 = G__40614;
continue;
} else {
var vec__40565 = cljs.core.first(seq__40526__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40565,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40565,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__40615 = cljs.core.next(seq__40526__$1);
var G__40616 = null;
var G__40617 = (0);
var G__40618 = (0);
seq__40526 = G__40615;
chunk__40527 = G__40616;
count__40528 = G__40617;
i__40529 = G__40618;
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
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__40573 = arguments.length;
switch (G__40573) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__40574 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__40574__$1 = cljs.core.__destructure_map(map__40574);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40574__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40574__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__40575 = ret__$1;
var G__40575__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__40575,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__40575);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__40575__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__40575__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__40589,p__40590){
var map__40591 = p__40589;
var map__40591__$1 = cljs.core.__destructure_map(map__40591);
var ret__$1 = map__40591__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40591__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__40592 = p__40590;
var seq__40593 = cljs.core.seq(vec__40592);
var first__40594 = cljs.core.first(seq__40593);
var seq__40593__$1 = cljs.core.next(seq__40593);
var spec_key = first__40594;
var libspecs = seq__40593__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__40595 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__40595__$1 = cljs.core.__destructure_map(map__40595);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40595__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40595__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__40597 = ret__$1;
var G__40597__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__40597,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__40597);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__40597__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__40597__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
