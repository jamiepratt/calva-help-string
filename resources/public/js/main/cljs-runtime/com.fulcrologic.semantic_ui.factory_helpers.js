goog.provide('com.fulcrologic.semantic_ui.factory_helpers');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Creates a function that can make elements of the given class.
 */
com.fulcrologic.semantic_ui.factory_helpers.factory_apply = (function com$fulcrologic$semantic_ui$factory_helpers$factory_apply(class$){
return (function() { 
var G__53795__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,class$,cljs.core.clj__GT_js(props),children);
};
var G__53795 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__53796__i = 0, G__53796__a = new Array(arguments.length -  1);
while (G__53796__i < G__53796__a.length) {G__53796__a[G__53796__i] = arguments[G__53796__i + 1]; ++G__53796__i;}
  children = new cljs.core.IndexedSeq(G__53796__a,0,null);
} 
return G__53795__delegate.call(this,props,children);};
G__53795.cljs$lang$maxFixedArity = 1;
G__53795.cljs$lang$applyTo = (function (arglist__53797){
var props = cljs.core.first(arglist__53797);
var children = cljs.core.rest(arglist__53797);
return G__53795__delegate(props,children);
});
G__53795.cljs$core$IFn$_invoke$arity$variadic = G__53795__delegate;
return G__53795;
})()
;
});
/**
 * Returns a factory that wraps the given class as an input. Requires that the target item support `:value` as a prop.
 */
com.fulcrologic.semantic_ui.factory_helpers.wrapped_factory_apply = (function com$fulcrologic$semantic_ui$factory_helpers$wrapped_factory_apply(class$){
var factory = com.fulcrologic.fulcro.dom.wrap_form_element(class$);
return (function() { 
var G__53798__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(factory,cljs.core.clj__GT_js(props),children);
};
var G__53798 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__53799__i = 0, G__53799__a = new Array(arguments.length -  1);
while (G__53799__i < G__53799__a.length) {G__53799__a[G__53799__i] = arguments[G__53799__i + 1]; ++G__53799__i;}
  children = new cljs.core.IndexedSeq(G__53799__a,0,null);
} 
return G__53798__delegate.call(this,props,children);};
G__53798.cljs$lang$maxFixedArity = 1;
G__53798.cljs$lang$applyTo = (function (arglist__53800){
var props = cljs.core.first(arglist__53800);
var children = cljs.core.rest(arglist__53800);
return G__53798__delegate(props,children);
});
G__53798.cljs$core$IFn$_invoke$arity$variadic = G__53798__delegate;
return G__53798;
})()
;
});

//# sourceMappingURL=com.fulcrologic.semantic_ui.factory_helpers.js.map
