goog.provide('com.fulcrologic.fulcro.dom');
goog.scope(function(){
  com.fulcrologic.fulcro.dom.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});





































































































































































































/**
 * Returns true if the given arg is a react element.
 */
com.fulcrologic.fulcro.dom.element_QMARK_ = (function com$fulcrologic$fulcro$dom$element_QMARK_(x){
return module$node_modules$react$index.isValidElement(x);
});
com.fulcrologic.fulcro.dom.child__GT_typed_child = (function com$fulcrologic$fulcro$dom$child__GT_typed_child(child){
if(typeof child === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),child], null);
} else {
if(typeof child === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"number","number",1570378438),child], null);
} else {
if(((cljs.core.vector_QMARK_(child)) || (((cljs.core.seq_QMARK_(child)) || (cljs.core.array_QMARK_(child)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),child], null);
} else {
if((child == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),child], null);
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(child))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749),child], null);
} else {
return null;
}
}
}
}
}
});
/**
 * Runtime parsing of DOM tag arguments. Returns a map with keys :css, :attrs, and :children.
 */
com.fulcrologic.fulcro.dom.parse_args = (function com$fulcrologic$fulcro$dom$parse_args(args){
var parse_css = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_css(p__53346){
var vec__53347 = p__53346;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53347,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53347,(1),null);
var pair = vec__53347;
var arg = cljs.core.first(args__$1);
if((arg instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"css","css",1135045163),arg)], null);
} else {
return pair;
}
});
var parse_attrs = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_attrs(p__53350){
var vec__53351 = p__53350;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53351,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53351,(1),null);
var pair = vec__53351;
var has_arg_QMARK_ = cljs.core.seq(args__$1);
var arg = cljs.core.first(args__$1);
if(((has_arg_QMARK_) && ((arg == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil","nil",99600501),null], null))], null);
} else {
if(((cljs.core.object_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-object","js-object",1830199158),arg], null))], null);
} else {
if(((cljs.core.map_QMARK_(arg)) && (cljs.core.not(com.fulcrologic.fulcro.dom.element_QMARK_(arg))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.next(args__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),arg], null))], null);
} else {
return pair;

}
}
}
});
var parse_children = (function com$fulcrologic$fulcro$dom$parse_args_$_parse_children(p__53354){
var vec__53355 = p__53354;
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53355,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53355,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(function (){var G__53358 = result;
if(cljs.core.seq(args__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53358,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.child__GT_typed_child,args__$1));
} else {
return G__53358;
}
})()], null);
});
return cljs.core.second(parse_children(parse_attrs(parse_css(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null)))));
});
/**
 * Equivalent to React.render
 */
com.fulcrologic.fulcro.dom.render = (function com$fulcrologic$fulcro$dom$render(component,el){
return module$node_modules$react_dom$index.render(component,el);
});
/**
 * This fn is outdated - it expects js/ReactDOMServer to be defined (used to be provided cljsjs.react.dom.server).
 *   It is better to do it yourself (under shadow-cljs):
 * 
 * ```clj
 * (ns ex (:require ["react-dom/server" :as react-dom-server] ...))
 * (react-dom-server/renderToString c)
 * ```
 */
com.fulcrologic.fulcro.dom.render_to_str = (function com$fulcrologic$fulcro$dom$render_to_str(c){
return ReactDOMServer.renderToString(c);
});
/**
 * Returns the dom node associated with a component's React ref.
 */
com.fulcrologic.fulcro.dom.node = (function com$fulcrologic$fulcro$dom$node(var_args){
var G__53360 = arguments.length;
switch (G__53360) {
case 1:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1 = (function (component){
return module$node_modules$react_dom$index.findDOMNode(component);
}));

(com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$2 = (function (component,name){
var G__53361 = component.refs;
var G__53361__$1 = (((G__53361 == null))?null:com.fulcrologic.fulcro.dom.goog$module$goog$object.get(G__53361,name));
if((G__53361__$1 == null)){
return null;
} else {
return module$node_modules$react_dom$index.findDOMNode(G__53361__$1);
}
}));

(com.fulcrologic.fulcro.dom.node.cljs$lang$maxFixedArity = 2);

/**
 * React component that wraps dom/input to prevent cursor madness.
 */
com.fulcrologic.fulcro.dom.Input = com.fulcrologic.fulcro.dom.inputs.StringBufferedInput(new cljs.core.Keyword("com.fulcrologic.fulcro.dom","Input","com.fulcrologic.fulcro.dom/Input",-2041077839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"string->model","string->model",-134531957),cljs.core.identity,new cljs.core.Keyword(null,"model->string","model->string",-2085451701),cljs.core.identity], null));
/**
 * A wrapped input. Use this when you see the cursor jump around while you're trying to type in an input. Drop-in replacement
 * for `dom/input`.
 * 
 * NOTE: The onChange and onBlur handlers will receive a string value, not an event. If you want the raw event on changes use onInput.
 */
com.fulcrologic.fulcro.dom.ui_input = (function (){var factory = com.fulcrologic.fulcro.components.factory.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.dom.Input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
return (function (props){
var temp__5814__auto__ = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5814__auto__)){
var ref = temp__5814__auto__;
var G__53362 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"ref","ref",1289896967),(function (r){
var G__53363 = (function (){var G__53364 = r;
if((G__53364 == null)){
return null;
} else {
return com.fulcrologic.fulcro.dom.node.cljs$core$IFn$_invoke$arity$1(G__53364);
}
})();
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(G__53363) : ref.call(null,G__53363));
}));
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__53362) : factory.call(null,G__53362));
} else {
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(props) : factory.call(null,props));
}
});
})();
/**
 * Create a DOM element for which there exists no corresponding function.
 * Useful to create DOM elements not included in React.DOM. Equivalent
 * to calling `js/React.createElement`
 */
com.fulcrologic.fulcro.dom.create_element = (function com$fulcrologic$fulcro$dom$create_element(var_args){
var G__53369 = arguments.length;
switch (G__53369) {
case 1:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___53803 = arguments.length;
var i__5770__auto___53804 = (0);
while(true){
if((i__5770__auto___53804 < len__5769__auto___53803)){
args_arr__5794__auto__.push((arguments[i__5770__auto___53804]));

var G__53805 = (i__5770__auto___53804 + (1));
i__5770__auto___53804 = G__53805;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2(tag,null);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag,opts){
return module$node_modules$react$index.createElement(tag,opts);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,tag,opts,children);
}));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.create_element.cljs$lang$applyTo = (function (seq53366){
var G__53367 = cljs.core.first(seq53366);
var seq53366__$1 = cljs.core.next(seq53366);
var G__53368 = cljs.core.first(seq53366__$1);
var seq53366__$2 = cljs.core.next(seq53366__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53367,G__53368,seq53366__$2);
}));

(com.fulcrologic.fulcro.dom.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Given props, which can be nil, a js-obj or a clj map: returns a js object.
 */
com.fulcrologic.fulcro.dom.convert_props = (function com$fulcrologic$fulcro$dom$convert_props(props){
if((props == null)){
return ({});
} else {
if(cljs.core.map_QMARK_(props)){
return cljs.core.clj__GT_js(props);
} else {
return props;

}
}
});
/**
 * Used internally by the DOM element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_element_STAR_ = (function com$fulcrologic$fulcro$dom$macro_create_element_STAR_(arr){
if(cljs.core.array_QMARK_(arr)){
} else {
throw (new Error("Assert failed: (array? arr)"));
}

return module$node_modules$react$index.createElement.apply(null,arr);
});
/**
 * Updates the state of the wrapped input element.
 */
com.fulcrologic.fulcro.dom.update_state = (function com$fulcrologic$fulcro$dom$update_state(component,next_props,value){
var on_change = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(component,"state","cached-props","onChange");
var next_state = ({});
var inputRef = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(next_props,"inputRef");
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(next_state,next_props,({"onChange": on_change}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"value",value);

if(cljs.core.truth_(inputRef)){
com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(next_state,"inputRef");

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(next_state,"ref",inputRef);
} else {
}

return component.setState(({"cached-props": next_state}));
});
if((typeof com !== 'undefined') && (typeof com.fulcrologic !== 'undefined') && (typeof com.fulcrologic.fulcro !== 'undefined') && (typeof com.fulcrologic.fulcro.dom !== 'undefined') && (typeof com.fulcrologic.fulcro.dom.form_elements_QMARK_ !== 'undefined')){
} else {
com.fulcrologic.fulcro.dom.form_elements_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["option",null,"select",null,"input",null,"textarea",null], null), null);
}
com.fulcrologic.fulcro.dom.is_form_element_QMARK_ = (function com$fulcrologic$fulcro$dom$is_form_element_QMARK_(element){
var tag = element.tagName;
var and__5043__auto__ = tag;
if(cljs.core.truth_(and__5043__auto__)){
var G__53370 = clojure.string.lower_case(tag);
return (com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(G__53370) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,G__53370));
} else {
return and__5043__auto__;
}
});
com.fulcrologic.fulcro.dom.wrap_form_element = (function com$fulcrologic$fulcro$dom$wrap_form_element(element){
var ctor = (function (props){
var this$ = this;
(this$.state = (function (){var state = ({"ref": com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"inputRef")});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(state,props,({"onChange": goog.bind(com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$,"onChange"),this$)}));

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(state,"inputRef");

return ({"cached-props": state});
})());

return module$node_modules$react$index.Component.apply(this$,arguments);
});
(ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''));

goog.inherits(ctor,module$node_modules$react$index.Component);

var x53372_53806 = ctor.prototype;
(x53372_53806.onChange = (function (event){
var this$ = this;
var temp__5816__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(this$.props,"onChange");
if(cljs.core.truth_(temp__5816__auto__)){
var handler = temp__5816__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return com.fulcrologic.fulcro.dom.update_state(this$,this$.props,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(event,"target","value"));
} else {
return null;
}
}));

(x53372_53806.UNSAFE_componentWillReceiveProps = (function (new_props){
var this$ = this;
var state_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props","value");
var this_node = module$node_modules$react_dom$index.findDOMNode(this$);
var value_node = (cljs.core.truth_(com.fulcrologic.fulcro.dom.is_form_element_QMARK_(this_node))?this_node:goog.dom.findNode(this_node,(function (p1__53371_SHARP_){
return com.fulcrologic.fulcro.dom.is_form_element_QMARK_(p1__53371_SHARP_);
})));
var element_value = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(value_node,"value");
if(cljs.core.truth_(goog.DEBUG)){
if(cljs.core.truth_((function (){var and__5043__auto__ = state_value;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = element_value;
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(state_value),cljs.core.type(element_value));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"com.fulcrologic.fulcro.dom",null,187,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["There is a mismatch for the data type of the value on an input with value ",element_value,". This will cause the input to miss refreshes. In general you should force the :value of an input to\n                be a string since that is how values are stored on most real DOM elements. See https://book.fulcrologic.com/#warn-dom-type-mismatch"], null);
}),null)),null,1736085772,null);
} else {
}
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,element_value);
} else {
return com.fulcrologic.fulcro.dom.update_state(this$,new_props,com.fulcrologic.fulcro.dom.goog$module$goog$object.get(new_props,"value"));
}
}));

(x53372_53806.render = (function (){
var this$ = this;
return module$node_modules$react$index.createElement(element,com.fulcrologic.fulcro.dom.goog$module$goog$object.getValueByKeys(this$,"state","cached-props"));
}));


var real_factory = (function() { 
var G__53807__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(module$node_modules$react$index.createElement,ctor,args);
};
var G__53807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53808__i = 0, G__53808__a = new Array(arguments.length -  0);
while (G__53808__i < G__53808__a.length) {G__53808__a[G__53808__i] = arguments[G__53808__i + 0]; ++G__53808__i;}
  args = new cljs.core.IndexedSeq(G__53808__a,0,null);
} 
return G__53807__delegate.call(this,args);};
G__53807.cljs$lang$maxFixedArity = 0;
G__53807.cljs$lang$applyTo = (function (arglist__53809){
var args = cljs.core.seq(arglist__53809);
return G__53807__delegate(args);
});
G__53807.cljs$core$IFn$_invoke$arity$variadic = G__53807__delegate;
return G__53807;
})()
;
return (function() { 
var G__53810__delegate = function (props,children){
var t = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"type");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,"file")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,"input",props,children);
} else {
var temp__5814__auto__ = com.fulcrologic.fulcro.dom.goog$module$goog$object.get(props,"ref");
if(cljs.core.truth_(temp__5814__auto__)){
var r = temp__5814__auto__;
if(typeof r === 'string'){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
} else {
var p = ({});
com.fulcrologic.fulcro.dom.goog$module$goog$object.extend(p,props);

com.fulcrologic.fulcro.dom.goog$module$goog$object.set(p,"inputRef",r);

com.fulcrologic.fulcro.dom.goog$module$goog$object.remove(p,"ref");

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,p,children);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(real_factory,props,children);
}
}
};
var G__53810 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__53811__i = 0, G__53811__a = new Array(arguments.length -  1);
while (G__53811__i < G__53811__a.length) {G__53811__a[G__53811__i] = arguments[G__53811__i + 1]; ++G__53811__i;}
  children = new cljs.core.IndexedSeq(G__53811__a,0,null);
} 
return G__53810__delegate.call(this,props,children);};
G__53810.cljs$lang$maxFixedArity = 1;
G__53810.cljs$lang$applyTo = (function (arglist__53812){
var props = cljs.core.first(arglist__53812);
var children = cljs.core.rest(arglist__53812);
return G__53810__delegate(props,children);
});
G__53810.cljs$core$IFn$_invoke$arity$variadic = G__53810__delegate;
return G__53810;
})()
;
});
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_input = com.fulcrologic.fulcro.dom.wrap_form_element("input");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_textarea = com.fulcrologic.fulcro.dom.wrap_form_element("textarea");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_option = com.fulcrologic.fulcro.dom.wrap_form_element("option");
/**
 * Low-level form input, with no syntactic sugar. Used internally by DOM macros
 */
com.fulcrologic.fulcro.dom.wrapped_select = com.fulcrologic.fulcro.dom.wrap_form_element("select");
com.fulcrologic.fulcro.dom.arr_append_STAR_ = (function com$fulcrologic$fulcro$dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
com.fulcrologic.fulcro.dom.arr_append = (function com$fulcrologic$fulcro$dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.arr_append_STAR_,arr,tail);
});
/**
 * Used internally by element generation.
 */
com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element = (function com$fulcrologic$fulcro$dom$macro_create_wrapped_form_element(opts){
var tag = (opts[(0)]);
var props = (opts[(1)]);
var children = opts.splice((2));
var G__53373 = tag;
switch (G__53373) {
case "input":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_input,props,children);

break;
case "textarea":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_textarea,props,children);

break;
case "select":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_select,props,children);

break;
case "option":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(com.fulcrologic.fulcro.dom.wrapped_option,props,children);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53373)].join('')));

}
});
/**
 * Runtime interpretation of props. Used internally by element generation when the macro cannot expand the element at compile time.
 */
com.fulcrologic.fulcro.dom.macro_create_element = (function com$fulcrologic$fulcro$dom$macro_create_element(var_args){
var G__53375 = arguments.length;
switch (G__53375) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__53376 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__53377 = cljs.core.seq(vec__53376);
var first__53378 = cljs.core.first(seq__53377);
var seq__53377__$1 = cljs.core.next(seq__53377);
var head = first__53378;
var tail = seq__53377__$1;
var f = (cljs.core.truth_((com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.fulcrologic.fulcro.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : com.fulcrologic.fulcro.dom.form_elements_QMARK_.call(null,type)))?com.fulcrologic.fulcro.dom.macro_create_wrapped_form_element:com.fulcrologic.fulcro.dom.macro_create_element_STAR_);
if((head == null)){
var G__53379 = (function (){var G__53380 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53380,tail);

return G__53380;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53379) : f.call(null,G__53379));
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
var G__53381 = (function (){var G__53382 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53382,args);

return G__53382;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53381) : f.call(null,G__53381));
} else {
if(cljs.core.object_QMARK_(head)){
var G__53383 = (function (){var G__53384 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53384,tail);

return G__53384;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53383) : f.call(null,G__53383));
} else {
if(cljs.core.map_QMARK_(head)){
var G__53385 = (function (){var G__53386 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__53386,tail);

return G__53386;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53385) : f.call(null,G__53385));
} else {
var G__53387 = (function (){var G__53388 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53388,args);

return G__53388;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53387) : f.call(null,G__53387));

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_element.cljs$lang$maxFixedArity = 3);

/**
 * Just like macro-create-element, but never wraps form input types.
 */
com.fulcrologic.fulcro.dom.macro_create_unwrapped_element = (function com$fulcrologic$fulcro$dom$macro_create_unwrapped_element(var_args){
var G__53390 = arguments.length;
switch (G__53390) {
case 2:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__53391 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.fulcrologic.fulcro.components.force_children,args);
var seq__53392 = cljs.core.seq(vec__53391);
var first__53393 = cljs.core.first(seq__53392);
var seq__53392__$1 = cljs.core.next(seq__53392);
var head = first__53393;
var tail = seq__53392__$1;
if((head == null)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__53394 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53394,tail);

return G__53394;
})());
} else {
if(cljs.core.truth_(com.fulcrologic.fulcro.dom.element_QMARK_(head))){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__53395 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53395,args);

return G__53395;
})());
} else {
if(cljs.core.object_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__53396 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(head,csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53396,tail);

return G__53396;
})());
} else {
if(cljs.core.map_QMARK_(head)){
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__53397 = [type,cljs.core.clj__GT_js(com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(com.fulcrologic.fulcro.dom_common.interpret_classes(head),csskw))];
com.fulcrologic.fulcro.dom.arr_append(G__53397,tail);

return G__53397;
})());
} else {
return com.fulcrologic.fulcro.dom.macro_create_element_STAR_((function (){var G__53398 = [type,com.fulcrologic.fulcro.dom_common.add_kwprops_to_props(({}),csskw)];
com.fulcrologic.fulcro.dom.arr_append(G__53398,args);

return G__53398;
})());

}
}
}
}
}));

(com.fulcrologic.fulcro.dom.macro_create_unwrapped_element.cljs$lang$maxFixedArity = 3);

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.form = (function com$fulcrologic$fulcro$dom$form(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53816 = arguments.length;
var i__5770__auto___53817 = (0);
while(true){
if((i__5770__auto___53817 < len__5769__auto___53816)){
args__5775__auto__.push((arguments[i__5770__auto___53817]));

var G__53818 = (i__5770__auto___53817 + (1));
i__5770__auto___53817 = G__53818;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53400 = conformed_args__52134__auto__;
var map__53400__$1 = cljs.core.__destructure_map(map__53400);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.form.cljs$lang$applyTo = (function (seq53399){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53399));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.audio = (function com$fulcrologic$fulcro$dom$audio(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53819 = arguments.length;
var i__5770__auto___53820 = (0);
while(true){
if((i__5770__auto___53820 < len__5769__auto___53819)){
args__5775__auto__.push((arguments[i__5770__auto___53820]));

var G__53821 = (i__5770__auto___53820 + (1));
i__5770__auto___53820 = G__53821;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53402 = conformed_args__52134__auto__;
var map__53402__$1 = cljs.core.__destructure_map(map__53402);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53402__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53402__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53402__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.audio.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.audio.cljs$lang$applyTo = (function (seq53401){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53401));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.input = (function com$fulcrologic$fulcro$dom$input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53822 = arguments.length;
var i__5770__auto___53823 = (0);
while(true){
if((i__5770__auto___53823 < len__5769__auto___53822)){
args__5775__auto__.push((arguments[i__5770__auto___53823]));

var G__53824 = (i__5770__auto___53823 + (1));
i__5770__auto___53823 = G__53824;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53404 = conformed_args__52134__auto__;
var map__53404__$1 = cljs.core.__destructure_map(map__53404);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.input.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.input.cljs$lang$applyTo = (function (seq53403){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53403));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menuitem = (function com$fulcrologic$fulcro$dom$menuitem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53825 = arguments.length;
var i__5770__auto___53826 = (0);
while(true){
if((i__5770__auto___53826 < len__5769__auto___53825)){
args__5775__auto__.push((arguments[i__5770__auto___53826]));

var G__53827 = (i__5770__auto___53826 + (1));
i__5770__auto___53826 = G__53827;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53406 = conformed_args__52134__auto__;
var map__53406__$1 = cljs.core.__destructure_map(map__53406);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53406__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53406__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53406__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menuitem.cljs$lang$applyTo = (function (seq53405){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53405));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.radialGradient = (function com$fulcrologic$fulcro$dom$radialGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53828 = arguments.length;
var i__5770__auto___53829 = (0);
while(true){
if((i__5770__auto___53829 < len__5769__auto___53828)){
args__5775__auto__.push((arguments[i__5770__auto___53829]));

var G__53830 = (i__5770__auto___53829 + (1));
i__5770__auto___53829 = G__53830;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53408 = conformed_args__52134__auto__;
var map__53408__$1 = cljs.core.__destructure_map(map__53408);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53408__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53408__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53408__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.radialGradient.cljs$lang$applyTo = (function (seq53407){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53407));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMerge = (function com$fulcrologic$fulcro$dom$feMerge(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53831 = arguments.length;
var i__5770__auto___53832 = (0);
while(true){
if((i__5770__auto___53832 < len__5769__auto___53831)){
args__5775__auto__.push((arguments[i__5770__auto___53832]));

var G__53833 = (i__5770__auto___53832 + (1));
i__5770__auto___53832 = G__53833;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53410 = conformed_args__52134__auto__;
var map__53410__$1 = cljs.core.__destructure_map(map__53410);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53410__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53410__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53410__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMerge.cljs$lang$applyTo = (function (seq53409){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53409));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.set = (function com$fulcrologic$fulcro$dom$set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53834 = arguments.length;
var i__5770__auto___53835 = (0);
while(true){
if((i__5770__auto___53835 < len__5769__auto___53834)){
args__5775__auto__.push((arguments[i__5770__auto___53835]));

var G__53836 = (i__5770__auto___53835 + (1));
i__5770__auto___53835 = G__53836;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53412 = conformed_args__52134__auto__;
var map__53412__$1 = cljs.core.__destructure_map(map__53412);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.set.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.set.cljs$lang$applyTo = (function (seq53411){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53411));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpecularLighting = (function com$fulcrologic$fulcro$dom$feSpecularLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53837 = arguments.length;
var i__5770__auto___53838 = (0);
while(true){
if((i__5770__auto___53838 < len__5769__auto___53837)){
args__5775__auto__.push((arguments[i__5770__auto___53838]));

var G__53839 = (i__5770__auto___53838 + (1));
i__5770__auto___53838 = G__53839;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53414 = conformed_args__52134__auto__;
var map__53414__$1 = cljs.core.__destructure_map(map__53414);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53414__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53414__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53414__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpecularLighting.cljs$lang$applyTo = (function (seq53413){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53413));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.base = (function com$fulcrologic$fulcro$dom$base(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53840 = arguments.length;
var i__5770__auto___53841 = (0);
while(true){
if((i__5770__auto___53841 < len__5769__auto___53840)){
args__5775__auto__.push((arguments[i__5770__auto___53841]));

var G__53842 = (i__5770__auto___53841 + (1));
i__5770__auto___53841 = G__53842;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53416 = conformed_args__52134__auto__;
var map__53416__$1 = cljs.core.__destructure_map(map__53416);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.base.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.base.cljs$lang$applyTo = (function (seq53415){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53415));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h1 = (function com$fulcrologic$fulcro$dom$h1(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53843 = arguments.length;
var i__5770__auto___53844 = (0);
while(true){
if((i__5770__auto___53844 < len__5769__auto___53843)){
args__5775__auto__.push((arguments[i__5770__auto___53844]));

var G__53845 = (i__5770__auto___53844 + (1));
i__5770__auto___53844 = G__53845;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53418 = conformed_args__52134__auto__;
var map__53418__$1 = cljs.core.__destructure_map(map__53418);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.h1.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h1.cljs$lang$applyTo = (function (seq53417){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53417));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feOffset = (function com$fulcrologic$fulcro$dom$feOffset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53846 = arguments.length;
var i__5770__auto___53847 = (0);
while(true){
if((i__5770__auto___53847 < len__5769__auto___53846)){
args__5775__auto__.push((arguments[i__5770__auto___53847]));

var G__53848 = (i__5770__auto___53847 + (1));
i__5770__auto___53847 = G__53848;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53420 = conformed_args__52134__auto__;
var map__53420__$1 = cljs.core.__destructure_map(map__53420);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53420__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53420__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53420__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feOffset.cljs$lang$applyTo = (function (seq53419){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53419));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.embed = (function com$fulcrologic$fulcro$dom$embed(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53849 = arguments.length;
var i__5770__auto___53850 = (0);
while(true){
if((i__5770__auto___53850 < len__5769__auto___53849)){
args__5775__auto__.push((arguments[i__5770__auto___53850]));

var G__53851 = (i__5770__auto___53850 + (1));
i__5770__auto___53850 = G__53851;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53422 = conformed_args__52134__auto__;
var map__53422__$1 = cljs.core.__destructure_map(map__53422);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.embed.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.embed.cljs$lang$applyTo = (function (seq53421){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53421));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateMotion = (function com$fulcrologic$fulcro$dom$animateMotion(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53852 = arguments.length;
var i__5770__auto___53853 = (0);
while(true){
if((i__5770__auto___53853 < len__5769__auto___53852)){
args__5775__auto__.push((arguments[i__5770__auto___53853]));

var G__53854 = (i__5770__auto___53853 + (1));
i__5770__auto___53853 = G__53854;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53424 = conformed_args__52134__auto__;
var map__53424__$1 = cljs.core.__destructure_map(map__53424);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53424__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53424__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53424__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateMotion.cljs$lang$applyTo = (function (seq53423){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53423));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h3 = (function com$fulcrologic$fulcro$dom$h3(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53855 = arguments.length;
var i__5770__auto___53856 = (0);
while(true){
if((i__5770__auto___53856 < len__5769__auto___53855)){
args__5775__auto__.push((arguments[i__5770__auto___53856]));

var G__53857 = (i__5770__auto___53856 + (1));
i__5770__auto___53856 = G__53857;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53426 = conformed_args__52134__auto__;
var map__53426__$1 = cljs.core.__destructure_map(map__53426);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53426__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.h3.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h3.cljs$lang$applyTo = (function (seq53425){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53425));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.body = (function com$fulcrologic$fulcro$dom$body(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53858 = arguments.length;
var i__5770__auto___53859 = (0);
while(true){
if((i__5770__auto___53859 < len__5769__auto___53858)){
args__5775__auto__.push((arguments[i__5770__auto___53859]));

var G__53860 = (i__5770__auto___53859 + (1));
i__5770__auto___53859 = G__53860;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53428 = conformed_args__52134__auto__;
var map__53428__$1 = cljs.core.__destructure_map(map__53428);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.body.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.body.cljs$lang$applyTo = (function (seq53427){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53427));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hkern = (function com$fulcrologic$fulcro$dom$hkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53861 = arguments.length;
var i__5770__auto___53862 = (0);
while(true){
if((i__5770__auto___53862 < len__5769__auto___53861)){
args__5775__auto__.push((arguments[i__5770__auto___53862]));

var G__53863 = (i__5770__auto___53862 + (1));
i__5770__auto___53862 = G__53863;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53430 = conformed_args__52134__auto__;
var map__53430__$1 = cljs.core.__destructure_map(map__53430);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.hkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hkern.cljs$lang$applyTo = (function (seq53429){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53429));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.keygen = (function com$fulcrologic$fulcro$dom$keygen(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53864 = arguments.length;
var i__5770__auto___53865 = (0);
while(true){
if((i__5770__auto___53865 < len__5769__auto___53864)){
args__5775__auto__.push((arguments[i__5770__auto___53865]));

var G__53866 = (i__5770__auto___53865 + (1));
i__5770__auto___53865 = G__53866;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53432 = conformed_args__52134__auto__;
var map__53432__$1 = cljs.core.__destructure_map(map__53432);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53432__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53432__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53432__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.keygen.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.keygen.cljs$lang$applyTo = (function (seq53431){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53431));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_format = (function com$fulcrologic$fulcro$dom$font_face_format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53867 = arguments.length;
var i__5770__auto___53868 = (0);
while(true){
if((i__5770__auto___53868 < len__5769__auto___53867)){
args__5775__auto__.push((arguments[i__5770__auto___53868]));

var G__53869 = (i__5770__auto___53868 + (1));
i__5770__auto___53868 = G__53869;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53434 = conformed_args__52134__auto__;
var map__53434__$1 = cljs.core.__destructure_map(map__53434);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_format.cljs$lang$applyTo = (function (seq53433){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53433));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncA = (function com$fulcrologic$fulcro$dom$feFuncA(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53870 = arguments.length;
var i__5770__auto___53871 = (0);
while(true){
if((i__5770__auto___53871 < len__5769__auto___53870)){
args__5775__auto__.push((arguments[i__5770__auto___53871]));

var G__53872 = (i__5770__auto___53871 + (1));
i__5770__auto___53871 = G__53872;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53436 = conformed_args__52134__auto__;
var map__53436__$1 = cljs.core.__destructure_map(map__53436);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53436__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53436__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53436__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncA.cljs$lang$applyTo = (function (seq53435){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53435));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.progress = (function com$fulcrologic$fulcro$dom$progress(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53873 = arguments.length;
var i__5770__auto___53874 = (0);
while(true){
if((i__5770__auto___53874 < len__5769__auto___53873)){
args__5775__auto__.push((arguments[i__5770__auto___53874]));

var G__53875 = (i__5770__auto___53874 + (1));
i__5770__auto___53874 = G__53875;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53438 = conformed_args__52134__auto__;
var map__53438__$1 = cljs.core.__destructure_map(map__53438);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53438__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53438__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53438__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.progress.cljs$lang$applyTo = (function (seq53437){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53437));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.main = (function com$fulcrologic$fulcro$dom$main(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53876 = arguments.length;
var i__5770__auto___53877 = (0);
while(true){
if((i__5770__auto___53877 < len__5769__auto___53876)){
args__5775__auto__.push((arguments[i__5770__auto___53877]));

var G__53878 = (i__5770__auto___53877 + (1));
i__5770__auto___53877 = G__53878;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53440 = conformed_args__52134__auto__;
var map__53440__$1 = cljs.core.__destructure_map(map__53440);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53440__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53440__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.main.cljs$lang$applyTo = (function (seq53439){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53439));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cite = (function com$fulcrologic$fulcro$dom$cite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53879 = arguments.length;
var i__5770__auto___53880 = (0);
while(true){
if((i__5770__auto___53880 < len__5769__auto___53879)){
args__5775__auto__.push((arguments[i__5770__auto___53880]));

var G__53881 = (i__5770__auto___53880 + (1));
i__5770__auto___53880 = G__53881;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53442 = conformed_args__52134__auto__;
var map__53442__$1 = cljs.core.__destructure_map(map__53442);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.cite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cite.cljs$lang$applyTo = (function (seq53441){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53441));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rect = (function com$fulcrologic$fulcro$dom$rect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53882 = arguments.length;
var i__5770__auto___53883 = (0);
while(true){
if((i__5770__auto___53883 < len__5769__auto___53882)){
args__5775__auto__.push((arguments[i__5770__auto___53883]));

var G__53884 = (i__5770__auto___53883 + (1));
i__5770__auto___53883 = G__53884;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53444 = conformed_args__52134__auto__;
var map__53444__$1 = cljs.core.__destructure_map(map__53444);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53444__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53444__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53444__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.rect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rect.cljs$lang$applyTo = (function (seq53443){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53443));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tref = (function com$fulcrologic$fulcro$dom$tref(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53885 = arguments.length;
var i__5770__auto___53886 = (0);
while(true){
if((i__5770__auto___53886 < len__5769__auto___53885)){
args__5775__auto__.push((arguments[i__5770__auto___53886]));

var G__53887 = (i__5770__auto___53886 + (1));
i__5770__auto___53886 = G__53887;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53446 = conformed_args__52134__auto__;
var map__53446__$1 = cljs.core.__destructure_map(map__53446);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53446__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53446__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.tref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tref.cljs$lang$applyTo = (function (seq53445){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53445));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshpatch = (function com$fulcrologic$fulcro$dom$meshpatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53888 = arguments.length;
var i__5770__auto___53889 = (0);
while(true){
if((i__5770__auto___53889 < len__5769__auto___53888)){
args__5775__auto__.push((arguments[i__5770__auto___53889]));

var G__53890 = (i__5770__auto___53889 + (1));
i__5770__auto___53889 = G__53890;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53448 = conformed_args__52134__auto__;
var map__53448__$1 = cljs.core.__destructure_map(map__53448);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshpatch.cljs$lang$applyTo = (function (seq53447){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53447));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polyline = (function com$fulcrologic$fulcro$dom$polyline(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53891 = arguments.length;
var i__5770__auto___53892 = (0);
while(true){
if((i__5770__auto___53892 < len__5769__auto___53891)){
args__5775__auto__.push((arguments[i__5770__auto___53892]));

var G__53893 = (i__5770__auto___53892 + (1));
i__5770__auto___53892 = G__53893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53450 = conformed_args__52134__auto__;
var map__53450__$1 = cljs.core.__destructure_map(map__53450);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53450__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53450__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53450__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.polyline.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polyline.cljs$lang$applyTo = (function (seq53449){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53449));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.metadata = (function com$fulcrologic$fulcro$dom$metadata(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53894 = arguments.length;
var i__5770__auto___53895 = (0);
while(true){
if((i__5770__auto___53895 < len__5769__auto___53894)){
args__5775__auto__.push((arguments[i__5770__auto___53895]));

var G__53896 = (i__5770__auto___53895 + (1));
i__5770__auto___53895 = G__53896;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53452 = conformed_args__52134__auto__;
var map__53452__$1 = cljs.core.__destructure_map(map__53452);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.metadata.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.metadata.cljs$lang$applyTo = (function (seq53451){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53451));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.map = (function com$fulcrologic$fulcro$dom$map(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53897 = arguments.length;
var i__5770__auto___53898 = (0);
while(true){
if((i__5770__auto___53898 < len__5769__auto___53897)){
args__5775__auto__.push((arguments[i__5770__auto___53898]));

var G__53899 = (i__5770__auto___53898 + (1));
i__5770__auto___53898 = G__53899;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53454 = conformed_args__52134__auto__;
var map__53454__$1 = cljs.core.__destructure_map(map__53454);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53454__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53454__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53454__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.map.cljs$lang$applyTo = (function (seq53453){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53453));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.object = (function com$fulcrologic$fulcro$dom$object(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53900 = arguments.length;
var i__5770__auto___53901 = (0);
while(true){
if((i__5770__auto___53901 < len__5769__auto___53900)){
args__5775__auto__.push((arguments[i__5770__auto___53901]));

var G__53902 = (i__5770__auto___53901 + (1));
i__5770__auto___53901 = G__53902;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53456 = conformed_args__52134__auto__;
var map__53456__$1 = cljs.core.__destructure_map(map__53456);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53456__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53456__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53456__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.object.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.object.cljs$lang$applyTo = (function (seq53455){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53455));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.i = (function com$fulcrologic$fulcro$dom$i(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53903 = arguments.length;
var i__5770__auto___53904 = (0);
while(true){
if((i__5770__auto___53904 < len__5769__auto___53903)){
args__5775__auto__.push((arguments[i__5770__auto___53904]));

var G__53905 = (i__5770__auto___53904 + (1));
i__5770__auto___53904 = G__53905;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53458 = conformed_args__52134__auto__;
var map__53458__$1 = cljs.core.__destructure_map(map__53458);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.i.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.i.cljs$lang$applyTo = (function (seq53457){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53457));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_name = (function com$fulcrologic$fulcro$dom$font_face_name(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53906 = arguments.length;
var i__5770__auto___53907 = (0);
while(true){
if((i__5770__auto___53907 < len__5769__auto___53906)){
args__5775__auto__.push((arguments[i__5770__auto___53907]));

var G__53908 = (i__5770__auto___53907 + (1));
i__5770__auto___53907 = G__53908;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53460 = conformed_args__52134__auto__;
var map__53460__$1 = cljs.core.__destructure_map(map__53460);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53460__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53460__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53460__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_name.cljs$lang$applyTo = (function (seq53459){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53459));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.p = (function com$fulcrologic$fulcro$dom$p(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53909 = arguments.length;
var i__5770__auto___53910 = (0);
while(true){
if((i__5770__auto___53910 < len__5769__auto___53909)){
args__5775__auto__.push((arguments[i__5770__auto___53910]));

var G__53911 = (i__5770__auto___53910 + (1));
i__5770__auto___53910 = G__53911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53462 = conformed_args__52134__auto__;
var map__53462__$1 = cljs.core.__destructure_map(map__53462);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53462__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53462__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53462__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.p.cljs$lang$applyTo = (function (seq53461){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53461));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncR = (function com$fulcrologic$fulcro$dom$feFuncR(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53912 = arguments.length;
var i__5770__auto___53913 = (0);
while(true){
if((i__5770__auto___53913 < len__5769__auto___53912)){
args__5775__auto__.push((arguments[i__5770__auto___53913]));

var G__53914 = (i__5770__auto___53913 + (1));
i__5770__auto___53913 = G__53914;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53464 = conformed_args__52134__auto__;
var map__53464__$1 = cljs.core.__destructure_map(map__53464);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncR.cljs$lang$applyTo = (function (seq53463){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53463));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatchpath = (function com$fulcrologic$fulcro$dom$hatchpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53915 = arguments.length;
var i__5770__auto___53916 = (0);
while(true){
if((i__5770__auto___53916 < len__5769__auto___53915)){
args__5775__auto__.push((arguments[i__5770__auto___53916]));

var G__53917 = (i__5770__auto___53916 + (1));
i__5770__auto___53916 = G__53917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53466 = conformed_args__52134__auto__;
var map__53466__$1 = cljs.core.__destructure_map(map__53466);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53466__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatchpath.cljs$lang$applyTo = (function (seq53465){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53465));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphItem = (function com$fulcrologic$fulcro$dom$altGlyphItem(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53918 = arguments.length;
var i__5770__auto___53919 = (0);
while(true){
if((i__5770__auto___53919 < len__5769__auto___53918)){
args__5775__auto__.push((arguments[i__5770__auto___53919]));

var G__53920 = (i__5770__auto___53919 + (1));
i__5770__auto___53919 = G__53920;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53468 = conformed_args__52134__auto__;
var map__53468__$1 = cljs.core.__destructure_map(map__53468);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53468__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphItem.cljs$lang$applyTo = (function (seq53467){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53467));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.nav = (function com$fulcrologic$fulcro$dom$nav(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53921 = arguments.length;
var i__5770__auto___53922 = (0);
while(true){
if((i__5770__auto___53922 < len__5769__auto___53921)){
args__5775__auto__.push((arguments[i__5770__auto___53922]));

var G__53923 = (i__5770__auto___53922 + (1));
i__5770__auto___53922 = G__53923;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53470 = conformed_args__52134__auto__;
var map__53470__$1 = cljs.core.__destructure_map(map__53470);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53470__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.nav.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.nav.cljs$lang$applyTo = (function (seq53469){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53469));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ruby = (function com$fulcrologic$fulcro$dom$ruby(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53924 = arguments.length;
var i__5770__auto___53925 = (0);
while(true){
if((i__5770__auto___53925 < len__5769__auto___53924)){
args__5775__auto__.push((arguments[i__5770__auto___53925]));

var G__53926 = (i__5770__auto___53925 + (1));
i__5770__auto___53925 = G__53926;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53472 = conformed_args__52134__auto__;
var map__53472__$1 = cljs.core.__destructure_map(map__53472);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53472__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53472__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53472__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.ruby.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ruby.cljs$lang$applyTo = (function (seq53471){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53471));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.switch$ = (function com$fulcrologic$fulcro$dom$switch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53927 = arguments.length;
var i__5770__auto___53928 = (0);
while(true){
if((i__5770__auto___53928 < len__5769__auto___53927)){
args__5775__auto__.push((arguments[i__5770__auto___53928]));

var G__53929 = (i__5770__auto___53928 + (1));
i__5770__auto___53928 = G__53929;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53474 = conformed_args__52134__auto__;
var map__53474__$1 = cljs.core.__destructure_map(map__53474);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53474__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53474__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53474__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.switch$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.switch$.cljs$lang$applyTo = (function (seq53473){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53473));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.a = (function com$fulcrologic$fulcro$dom$a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53930 = arguments.length;
var i__5770__auto___53931 = (0);
while(true){
if((i__5770__auto___53931 < len__5769__auto___53930)){
args__5775__auto__.push((arguments[i__5770__auto___53931]));

var G__53932 = (i__5770__auto___53931 + (1));
i__5770__auto___53931 = G__53932;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53476 = conformed_args__52134__auto__;
var map__53476__$1 = cljs.core.__destructure_map(map__53476);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53476__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.a.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.a.cljs$lang$applyTo = (function (seq53475){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53475));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.view = (function com$fulcrologic$fulcro$dom$view(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53933 = arguments.length;
var i__5770__auto___53934 = (0);
while(true){
if((i__5770__auto___53934 < len__5769__auto___53933)){
args__5775__auto__.push((arguments[i__5770__auto___53934]));

var G__53935 = (i__5770__auto___53934 + (1));
i__5770__auto___53934 = G__53935;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53478 = conformed_args__52134__auto__;
var map__53478__$1 = cljs.core.__destructure_map(map__53478);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53478__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53478__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53478__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.view.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.view.cljs$lang$applyTo = (function (seq53477){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53477));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.menu = (function com$fulcrologic$fulcro$dom$menu(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53936 = arguments.length;
var i__5770__auto___53937 = (0);
while(true){
if((i__5770__auto___53937 < len__5769__auto___53936)){
args__5775__auto__.push((arguments[i__5770__auto___53937]));

var G__53938 = (i__5770__auto___53937 + (1));
i__5770__auto___53937 = G__53938;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53480 = conformed_args__52134__auto__;
var map__53480__$1 = cljs.core.__destructure_map(map__53480);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53480__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53480__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53480__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.menu.cljs$lang$applyTo = (function (seq53479){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53479));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.blockquote = (function com$fulcrologic$fulcro$dom$blockquote(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53939 = arguments.length;
var i__5770__auto___53940 = (0);
while(true){
if((i__5770__auto___53940 < len__5769__auto___53939)){
args__5775__auto__.push((arguments[i__5770__auto___53940]));

var G__53941 = (i__5770__auto___53940 + (1));
i__5770__auto___53940 = G__53941;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53482 = conformed_args__52134__auto__;
var map__53482__$1 = cljs.core.__destructure_map(map__53482);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.blockquote.cljs$lang$applyTo = (function (seq53481){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53481));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.img = (function com$fulcrologic$fulcro$dom$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53942 = arguments.length;
var i__5770__auto___53943 = (0);
while(true){
if((i__5770__auto___53943 < len__5769__auto___53942)){
args__5775__auto__.push((arguments[i__5770__auto___53943]));

var G__53944 = (i__5770__auto___53943 + (1));
i__5770__auto___53943 = G__53944;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53484 = conformed_args__52134__auto__;
var map__53484__$1 = cljs.core.__destructure_map(map__53484);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53484__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53484__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53484__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.img.cljs$lang$applyTo = (function (seq53483){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53483));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncG = (function com$fulcrologic$fulcro$dom$feFuncG(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53945 = arguments.length;
var i__5770__auto___53946 = (0);
while(true){
if((i__5770__auto___53946 < len__5769__auto___53945)){
args__5775__auto__.push((arguments[i__5770__auto___53946]));

var G__53947 = (i__5770__auto___53946 + (1));
i__5770__auto___53946 = G__53947;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53486 = conformed_args__52134__auto__;
var map__53486__$1 = cljs.core.__destructure_map(map__53486);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncG.cljs$lang$applyTo = (function (seq53485){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53485));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.text = (function com$fulcrologic$fulcro$dom$text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53948 = arguments.length;
var i__5770__auto___53949 = (0);
while(true){
if((i__5770__auto___53949 < len__5769__auto___53948)){
args__5775__auto__.push((arguments[i__5770__auto___53949]));

var G__53950 = (i__5770__auto___53949 + (1));
i__5770__auto___53949 = G__53950;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53488 = conformed_args__52134__auto__;
var map__53488__$1 = cljs.core.__destructure_map(map__53488);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.text.cljs$lang$applyTo = (function (seq53487){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53487));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.span = (function com$fulcrologic$fulcro$dom$span(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53951 = arguments.length;
var i__5770__auto___53952 = (0);
while(true){
if((i__5770__auto___53952 < len__5769__auto___53951)){
args__5775__auto__.push((arguments[i__5770__auto___53952]));

var G__53953 = (i__5770__auto___53952 + (1));
i__5770__auto___53952 = G__53953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53490 = conformed_args__52134__auto__;
var map__53490__$1 = cljs.core.__destructure_map(map__53490);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53490__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53490__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53490__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.span.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.span.cljs$lang$applyTo = (function (seq53489){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53489));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.track = (function com$fulcrologic$fulcro$dom$track(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53954 = arguments.length;
var i__5770__auto___53955 = (0);
while(true){
if((i__5770__auto___53955 < len__5769__auto___53954)){
args__5775__auto__.push((arguments[i__5770__auto___53955]));

var G__53956 = (i__5770__auto___53955 + (1));
i__5770__auto___53955 = G__53956;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53492 = conformed_args__52134__auto__;
var map__53492__$1 = cljs.core.__destructure_map(map__53492);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53492__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53492__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53492__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.track.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.track.cljs$lang$applyTo = (function (seq53491){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53491));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.data = (function com$fulcrologic$fulcro$dom$data(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53957 = arguments.length;
var i__5770__auto___53958 = (0);
while(true){
if((i__5770__auto___53958 < len__5769__auto___53957)){
args__5775__auto__.push((arguments[i__5770__auto___53958]));

var G__53959 = (i__5770__auto___53958 + (1));
i__5770__auto___53958 = G__53959;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53494 = conformed_args__52134__auto__;
var map__53494__$1 = cljs.core.__destructure_map(map__53494);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53494__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53494__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.data.cljs$lang$applyTo = (function (seq53493){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53493));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.u = (function com$fulcrologic$fulcro$dom$u(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53960 = arguments.length;
var i__5770__auto___53961 = (0);
while(true){
if((i__5770__auto___53961 < len__5769__auto___53960)){
args__5775__auto__.push((arguments[i__5770__auto___53961]));

var G__53962 = (i__5770__auto___53961 + (1));
i__5770__auto___53961 = G__53962;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53496 = conformed_args__52134__auto__;
var map__53496__$1 = cljs.core.__destructure_map(map__53496);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53496__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53496__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53496__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.u.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.u.cljs$lang$applyTo = (function (seq53495){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53495));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dl = (function com$fulcrologic$fulcro$dom$dl(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53963 = arguments.length;
var i__5770__auto___53964 = (0);
while(true){
if((i__5770__auto___53964 < len__5769__auto___53963)){
args__5775__auto__.push((arguments[i__5770__auto___53964]));

var G__53965 = (i__5770__auto___53964 + (1));
i__5770__auto___53964 = G__53965;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53498 = conformed_args__52134__auto__;
var map__53498__$1 = cljs.core.__destructure_map(map__53498);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53498__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53498__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53498__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.dl.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dl.cljs$lang$applyTo = (function (seq53497){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53497));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.select = (function com$fulcrologic$fulcro$dom$select(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53966 = arguments.length;
var i__5770__auto___53967 = (0);
while(true){
if((i__5770__auto___53967 < len__5769__auto___53966)){
args__5775__auto__.push((arguments[i__5770__auto___53967]));

var G__53968 = (i__5770__auto___53967 + (1));
i__5770__auto___53967 = G__53968;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53500 = conformed_args__52134__auto__;
var map__53500__$1 = cljs.core.__destructure_map(map__53500);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53500__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53500__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.select.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.select.cljs$lang$applyTo = (function (seq53499){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53499));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.polygon = (function com$fulcrologic$fulcro$dom$polygon(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53969 = arguments.length;
var i__5770__auto___53970 = (0);
while(true){
if((i__5770__auto___53970 < len__5769__auto___53969)){
args__5775__auto__.push((arguments[i__5770__auto___53970]));

var G__53971 = (i__5770__auto___53970 + (1));
i__5770__auto___53970 = G__53971;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53502 = conformed_args__52134__auto__;
var map__53502__$1 = cljs.core.__destructure_map(map__53502);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53502__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53502__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53502__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.polygon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.polygon.cljs$lang$applyTo = (function (seq53501){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53501));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pattern = (function com$fulcrologic$fulcro$dom$pattern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53972 = arguments.length;
var i__5770__auto___53973 = (0);
while(true){
if((i__5770__auto___53973 < len__5769__auto___53972)){
args__5775__auto__.push((arguments[i__5770__auto___53973]));

var G__53974 = (i__5770__auto___53973 + (1));
i__5770__auto___53973 = G__53974;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53504 = conformed_args__52134__auto__;
var map__53504__$1 = cljs.core.__destructure_map(map__53504);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.pattern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pattern.cljs$lang$applyTo = (function (seq53503){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53503));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.html = (function com$fulcrologic$fulcro$dom$html(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53975 = arguments.length;
var i__5770__auto___53976 = (0);
while(true){
if((i__5770__auto___53976 < len__5769__auto___53975)){
args__5775__auto__.push((arguments[i__5770__auto___53976]));

var G__53977 = (i__5770__auto___53976 + (1));
i__5770__auto___53976 = G__53977;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53506 = conformed_args__52134__auto__;
var map__53506__$1 = cljs.core.__destructure_map(map__53506);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.html.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.html.cljs$lang$applyTo = (function (seq53505){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53505));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.foreignObject = (function com$fulcrologic$fulcro$dom$foreignObject(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53978 = arguments.length;
var i__5770__auto___53979 = (0);
while(true){
if((i__5770__auto___53979 < len__5769__auto___53978)){
args__5775__auto__.push((arguments[i__5770__auto___53979]));

var G__53980 = (i__5770__auto___53979 + (1));
i__5770__auto___53979 = G__53980;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53508 = conformed_args__52134__auto__;
var map__53508__$1 = cljs.core.__destructure_map(map__53508);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.foreignObject.cljs$lang$applyTo = (function (seq53507){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53507));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.thead = (function com$fulcrologic$fulcro$dom$thead(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53981 = arguments.length;
var i__5770__auto___53982 = (0);
while(true){
if((i__5770__auto___53982 < len__5769__auto___53981)){
args__5775__auto__.push((arguments[i__5770__auto___53982]));

var G__53983 = (i__5770__auto___53982 + (1));
i__5770__auto___53982 = G__53983;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53510 = conformed_args__52134__auto__;
var map__53510__$1 = cljs.core.__destructure_map(map__53510);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53510__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53510__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53510__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.thead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.thead.cljs$lang$applyTo = (function (seq53509){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53509));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.path = (function com$fulcrologic$fulcro$dom$path(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53984 = arguments.length;
var i__5770__auto___53985 = (0);
while(true){
if((i__5770__auto___53985 < len__5769__auto___53984)){
args__5775__auto__.push((arguments[i__5770__auto___53985]));

var G__53986 = (i__5770__auto___53985 + (1));
i__5770__auto___53985 = G__53986;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53512 = conformed_args__52134__auto__;
var map__53512__$1 = cljs.core.__destructure_map(map__53512);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53512__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.path.cljs$lang$applyTo = (function (seq53511){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53511));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.del = (function com$fulcrologic$fulcro$dom$del(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53987 = arguments.length;
var i__5770__auto___53988 = (0);
while(true){
if((i__5770__auto___53988 < len__5769__auto___53987)){
args__5775__auto__.push((arguments[i__5770__auto___53988]));

var G__53989 = (i__5770__auto___53988 + (1));
i__5770__auto___53988 = G__53989;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53514 = conformed_args__52134__auto__;
var map__53514__$1 = cljs.core.__destructure_map(map__53514);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53514__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53514__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53514__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.del.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.del.cljs$lang$applyTo = (function (seq53513){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53513));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyph = (function com$fulcrologic$fulcro$dom$altGlyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53990 = arguments.length;
var i__5770__auto___53991 = (0);
while(true){
if((i__5770__auto___53991 < len__5769__auto___53990)){
args__5775__auto__.push((arguments[i__5770__auto___53991]));

var G__53992 = (i__5770__auto___53991 + (1));
i__5770__auto___53991 = G__53992;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53516 = conformed_args__52134__auto__;
var map__53516__$1 = cljs.core.__destructure_map(map__53516);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyph.cljs$lang$applyTo = (function (seq53515){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53515));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fieldset = (function com$fulcrologic$fulcro$dom$fieldset(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53993 = arguments.length;
var i__5770__auto___53994 = (0);
while(true){
if((i__5770__auto___53994 < len__5769__auto___53993)){
args__5775__auto__.push((arguments[i__5770__auto___53994]));

var G__53995 = (i__5770__auto___53994 + (1));
i__5770__auto___53994 = G__53995;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53518 = conformed_args__52134__auto__;
var map__53518__$1 = cljs.core.__destructure_map(map__53518);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53518__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fieldset.cljs$lang$applyTo = (function (seq53517){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53517));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.aside = (function com$fulcrologic$fulcro$dom$aside(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53996 = arguments.length;
var i__5770__auto___53997 = (0);
while(true){
if((i__5770__auto___53997 < len__5769__auto___53996)){
args__5775__auto__.push((arguments[i__5770__auto___53997]));

var G__53998 = (i__5770__auto___53997 + (1));
i__5770__auto___53997 = G__53998;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53520 = conformed_args__52134__auto__;
var map__53520__$1 = cljs.core.__destructure_map(map__53520);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.aside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.aside.cljs$lang$applyTo = (function (seq53519){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53519));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feBlend = (function com$fulcrologic$fulcro$dom$feBlend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53999 = arguments.length;
var i__5770__auto___54000 = (0);
while(true){
if((i__5770__auto___54000 < len__5769__auto___53999)){
args__5775__auto__.push((arguments[i__5770__auto___54000]));

var G__54001 = (i__5770__auto___54000 + (1));
i__5770__auto___54000 = G__54001;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53522 = conformed_args__52134__auto__;
var map__53522__$1 = cljs.core.__destructure_map(map__53522);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feBlend.cljs$lang$applyTo = (function (seq53521){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53521));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figure = (function com$fulcrologic$fulcro$dom$figure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54002 = arguments.length;
var i__5770__auto___54003 = (0);
while(true){
if((i__5770__auto___54003 < len__5769__auto___54002)){
args__5775__auto__.push((arguments[i__5770__auto___54003]));

var G__54004 = (i__5770__auto___54003 + (1));
i__5770__auto___54003 = G__54004;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53524 = conformed_args__52134__auto__;
var map__53524__$1 = cljs.core.__destructure_map(map__53524);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53524__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53524__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53524__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.figure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figure.cljs$lang$applyTo = (function (seq53523){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53523));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textPath = (function com$fulcrologic$fulcro$dom$textPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54005 = arguments.length;
var i__5770__auto___54006 = (0);
while(true){
if((i__5770__auto___54006 < len__5769__auto___54005)){
args__5775__auto__.push((arguments[i__5770__auto___54006]));

var G__54007 = (i__5770__auto___54006 + (1));
i__5770__auto___54006 = G__54007;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53526 = conformed_args__52134__auto__;
var map__53526__$1 = cljs.core.__destructure_map(map__53526);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.textPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textPath.cljs$lang$applyTo = (function (seq53525){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53525));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.figcaption = (function com$fulcrologic$fulcro$dom$figcaption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54008 = arguments.length;
var i__5770__auto___54009 = (0);
while(true){
if((i__5770__auto___54009 < len__5769__auto___54008)){
args__5775__auto__.push((arguments[i__5770__auto___54009]));

var G__54010 = (i__5770__auto___54009 + (1));
i__5770__auto___54009 = G__54010;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53528 = conformed_args__52134__auto__;
var map__53528__$1 = cljs.core.__destructure_map(map__53528);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53528__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53528__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53528__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.figcaption.cljs$lang$applyTo = (function (seq53527){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53527));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mask = (function com$fulcrologic$fulcro$dom$mask(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54011 = arguments.length;
var i__5770__auto___54012 = (0);
while(true){
if((i__5770__auto___54012 < len__5769__auto___54011)){
args__5775__auto__.push((arguments[i__5770__auto___54012]));

var G__54013 = (i__5770__auto___54012 + (1));
i__5770__auto___54012 = G__54013;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53530 = conformed_args__52134__auto__;
var map__53530__$1 = cljs.core.__destructure_map(map__53530);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.mask.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mask.cljs$lang$applyTo = (function (seq53529){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53529));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.q = (function com$fulcrologic$fulcro$dom$q(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54014 = arguments.length;
var i__5770__auto___54015 = (0);
while(true){
if((i__5770__auto___54015 < len__5769__auto___54014)){
args__5775__auto__.push((arguments[i__5770__auto___54015]));

var G__54016 = (i__5770__auto___54015 + (1));
i__5770__auto___54015 = G__54016;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53532 = conformed_args__52134__auto__;
var map__53532__$1 = cljs.core.__destructure_map(map__53532);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.q.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.q.cljs$lang$applyTo = (function (seq53531){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53531));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdi = (function com$fulcrologic$fulcro$dom$bdi(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54017 = arguments.length;
var i__5770__auto___54018 = (0);
while(true){
if((i__5770__auto___54018 < len__5769__auto___54017)){
args__5775__auto__.push((arguments[i__5770__auto___54018]));

var G__54019 = (i__5770__auto___54018 + (1));
i__5770__auto___54018 = G__54019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53534 = conformed_args__52134__auto__;
var map__53534__$1 = cljs.core.__destructure_map(map__53534);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.bdi.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdi.cljs$lang$applyTo = (function (seq53533){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53533));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDistantLight = (function com$fulcrologic$fulcro$dom$feDistantLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54020 = arguments.length;
var i__5770__auto___54021 = (0);
while(true){
if((i__5770__auto___54021 < len__5769__auto___54020)){
args__5775__auto__.push((arguments[i__5770__auto___54021]));

var G__54022 = (i__5770__auto___54021 + (1));
i__5770__auto___54021 = G__54022;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53536 = conformed_args__52134__auto__;
var map__53536__$1 = cljs.core.__destructure_map(map__53536);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDistantLight.cljs$lang$applyTo = (function (seq53535){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53535));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.video = (function com$fulcrologic$fulcro$dom$video(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54023 = arguments.length;
var i__5770__auto___54024 = (0);
while(true){
if((i__5770__auto___54024 < len__5769__auto___54023)){
args__5775__auto__.push((arguments[i__5770__auto___54024]));

var G__54025 = (i__5770__auto___54024 + (1));
i__5770__auto___54024 = G__54025;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53538 = conformed_args__52134__auto__;
var map__53538__$1 = cljs.core.__destructure_map(map__53538);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53538__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53538__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53538__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.video.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.video.cljs$lang$applyTo = (function (seq53537){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53537));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.address = (function com$fulcrologic$fulcro$dom$address(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54026 = arguments.length;
var i__5770__auto___54027 = (0);
while(true){
if((i__5770__auto___54027 < len__5769__auto___54026)){
args__5775__auto__.push((arguments[i__5770__auto___54027]));

var G__54028 = (i__5770__auto___54027 + (1));
i__5770__auto___54027 = G__54028;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53540 = conformed_args__52134__auto__;
var map__53540__$1 = cljs.core.__destructure_map(map__53540);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.address.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.address.cljs$lang$applyTo = (function (seq53539){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53539));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.caption = (function com$fulcrologic$fulcro$dom$caption(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54029 = arguments.length;
var i__5770__auto___54030 = (0);
while(true){
if((i__5770__auto___54030 < len__5769__auto___54029)){
args__5775__auto__.push((arguments[i__5770__auto___54030]));

var G__54031 = (i__5770__auto___54030 + (1));
i__5770__auto___54030 = G__54031;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53542 = conformed_args__52134__auto__;
var map__53542__$1 = cljs.core.__destructure_map(map__53542);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.caption.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.caption.cljs$lang$applyTo = (function (seq53541){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53541));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dd = (function com$fulcrologic$fulcro$dom$dd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54032 = arguments.length;
var i__5770__auto___54033 = (0);
while(true){
if((i__5770__auto___54033 < len__5769__auto___54032)){
args__5775__auto__.push((arguments[i__5770__auto___54033]));

var G__54034 = (i__5770__auto___54033 + (1));
i__5770__auto___54033 = G__54034;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53544 = conformed_args__52134__auto__;
var map__53544__$1 = cljs.core.__destructure_map(map__53544);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53544__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53544__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53544__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.dd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dd.cljs$lang$applyTo = (function (seq53543){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53543));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rp = (function com$fulcrologic$fulcro$dom$rp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54035 = arguments.length;
var i__5770__auto___54036 = (0);
while(true){
if((i__5770__auto___54036 < len__5769__auto___54035)){
args__5775__auto__.push((arguments[i__5770__auto___54036]));

var G__54037 = (i__5770__auto___54036 + (1));
i__5770__auto___54036 = G__54037;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53546 = conformed_args__52134__auto__;
var map__53546__$1 = cljs.core.__destructure_map(map__53546);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.rp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rp.cljs$lang$applyTo = (function (seq53545){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53545));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hr = (function com$fulcrologic$fulcro$dom$hr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54038 = arguments.length;
var i__5770__auto___54039 = (0);
while(true){
if((i__5770__auto___54039 < len__5769__auto___54038)){
args__5775__auto__.push((arguments[i__5770__auto___54039]));

var G__54040 = (i__5770__auto___54039 + (1));
i__5770__auto___54039 = G__54040;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53548 = conformed_args__52134__auto__;
var map__53548__$1 = cljs.core.__destructure_map(map__53548);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53548__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.hr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hr.cljs$lang$applyTo = (function (seq53547){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53547));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meta = (function com$fulcrologic$fulcro$dom$meta(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54041 = arguments.length;
var i__5770__auto___54042 = (0);
while(true){
if((i__5770__auto___54042 < len__5769__auto___54041)){
args__5775__auto__.push((arguments[i__5770__auto___54042]));

var G__54043 = (i__5770__auto___54042 + (1));
i__5770__auto___54042 = G__54043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53550 = conformed_args__52134__auto__;
var map__53550__$1 = cljs.core.__destructure_map(map__53550);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53550__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53550__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53550__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.meta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meta.cljs$lang$applyTo = (function (seq53549){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53549));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tbody = (function com$fulcrologic$fulcro$dom$tbody(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54044 = arguments.length;
var i__5770__auto___54045 = (0);
while(true){
if((i__5770__auto___54045 < len__5769__auto___54044)){
args__5775__auto__.push((arguments[i__5770__auto___54045]));

var G__54046 = (i__5770__auto___54045 + (1));
i__5770__auto___54045 = G__54046;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53552 = conformed_args__52134__auto__;
var map__53552__$1 = cljs.core.__destructure_map(map__53552);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53552__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53552__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53552__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.tbody.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tbody.cljs$lang$applyTo = (function (seq53551){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53551));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.desc = (function com$fulcrologic$fulcro$dom$desc(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54047 = arguments.length;
var i__5770__auto___54048 = (0);
while(true){
if((i__5770__auto___54048 < len__5769__auto___54047)){
args__5775__auto__.push((arguments[i__5770__auto___54048]));

var G__54049 = (i__5770__auto___54048 + (1));
i__5770__auto___54048 = G__54049;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53554 = conformed_args__52134__auto__;
var map__53554__$1 = cljs.core.__destructure_map(map__53554);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53554__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53554__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53554__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.desc.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.desc.cljs$lang$applyTo = (function (seq53553){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53553));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.table = (function com$fulcrologic$fulcro$dom$table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54050 = arguments.length;
var i__5770__auto___54051 = (0);
while(true){
if((i__5770__auto___54051 < len__5769__auto___54050)){
args__5775__auto__.push((arguments[i__5770__auto___54051]));

var G__54052 = (i__5770__auto___54051 + (1));
i__5770__auto___54051 = G__54052;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53556 = conformed_args__52134__auto__;
var map__53556__$1 = cljs.core.__destructure_map(map__53556);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.table.cljs$lang$applyTo = (function (seq53555){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53555));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.pre = (function com$fulcrologic$fulcro$dom$pre(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54053 = arguments.length;
var i__5770__auto___54054 = (0);
while(true){
if((i__5770__auto___54054 < len__5769__auto___54053)){
args__5775__auto__.push((arguments[i__5770__auto___54054]));

var G__54055 = (i__5770__auto___54054 + (1));
i__5770__auto___54054 = G__54055;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53558 = conformed_args__52134__auto__;
var map__53558__$1 = cljs.core.__destructure_map(map__53558);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.pre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.pre.cljs$lang$applyTo = (function (seq53557){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53557));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ul = (function com$fulcrologic$fulcro$dom$ul(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54056 = arguments.length;
var i__5770__auto___54057 = (0);
while(true){
if((i__5770__auto___54057 < len__5769__auto___54056)){
args__5775__auto__.push((arguments[i__5770__auto___54057]));

var G__54058 = (i__5770__auto___54057 + (1));
i__5770__auto___54057 = G__54058;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53560 = conformed_args__52134__auto__;
var map__53560__$1 = cljs.core.__destructure_map(map__53560);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53560__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53560__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53560__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.ul.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ul.cljs$lang$applyTo = (function (seq53559){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53559));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feConvolveMatrix = (function com$fulcrologic$fulcro$dom$feConvolveMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54059 = arguments.length;
var i__5770__auto___54060 = (0);
while(true){
if((i__5770__auto___54060 < len__5769__auto___54059)){
args__5775__auto__.push((arguments[i__5770__auto___54060]));

var G__54061 = (i__5770__auto___54060 + (1));
i__5770__auto___54060 = G__54061;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53562 = conformed_args__52134__auto__;
var map__53562__$1 = cljs.core.__destructure_map(map__53562);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53562__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53562__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53562__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq53561){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53561));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sup = (function com$fulcrologic$fulcro$dom$sup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54062 = arguments.length;
var i__5770__auto___54063 = (0);
while(true){
if((i__5770__auto___54063 < len__5769__auto___54062)){
args__5775__auto__.push((arguments[i__5770__auto___54063]));

var G__54064 = (i__5770__auto___54063 + (1));
i__5770__auto___54063 = G__54064;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53564 = conformed_args__52134__auto__;
var map__53564__$1 = cljs.core.__destructure_map(map__53564);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53564__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53564__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53564__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.sup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sup.cljs$lang$applyTo = (function (seq53563){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53563));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dfn = (function com$fulcrologic$fulcro$dom$dfn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54065 = arguments.length;
var i__5770__auto___54066 = (0);
while(true){
if((i__5770__auto___54066 < len__5769__auto___54065)){
args__5775__auto__.push((arguments[i__5770__auto___54066]));

var G__54067 = (i__5770__auto___54066 + (1));
i__5770__auto___54066 = G__54067;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53566 = conformed_args__52134__auto__;
var map__53566__$1 = cljs.core.__destructure_map(map__53566);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53566__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53566__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53566__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.dfn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dfn.cljs$lang$applyTo = (function (seq53565){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53565));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.sub = (function com$fulcrologic$fulcro$dom$sub(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54068 = arguments.length;
var i__5770__auto___54069 = (0);
while(true){
if((i__5770__auto___54069 < len__5769__auto___54068)){
args__5775__auto__.push((arguments[i__5770__auto___54069]));

var G__54070 = (i__5770__auto___54069 + (1));
i__5770__auto___54069 = G__54070;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53568 = conformed_args__52134__auto__;
var map__53568__$1 = cljs.core.__destructure_map(map__53568);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53568__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53568__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53568__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.sub.cljs$lang$applyTo = (function (seq53567){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53567));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mark = (function com$fulcrologic$fulcro$dom$mark(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54071 = arguments.length;
var i__5770__auto___54072 = (0);
while(true){
if((i__5770__auto___54072 < len__5769__auto___54071)){
args__5775__auto__.push((arguments[i__5770__auto___54072]));

var G__54073 = (i__5770__auto___54072 + (1));
i__5770__auto___54072 = G__54073;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53570 = conformed_args__52134__auto__;
var map__53570__$1 = cljs.core.__destructure_map(map__53570);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53570__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53570__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53570__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.mark.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mark.cljs$lang$applyTo = (function (seq53569){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53569));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDisplacementMap = (function com$fulcrologic$fulcro$dom$feDisplacementMap(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54074 = arguments.length;
var i__5770__auto___54075 = (0);
while(true){
if((i__5770__auto___54075 < len__5769__auto___54074)){
args__5775__auto__.push((arguments[i__5770__auto___54075]));

var G__54076 = (i__5770__auto___54075 + (1));
i__5770__auto___54075 = G__54076;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53572 = conformed_args__52134__auto__;
var map__53572__$1 = cljs.core.__destructure_map(map__53572);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDisplacementMap.cljs$lang$applyTo = (function (seq53571){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53571));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.unknown = (function com$fulcrologic$fulcro$dom$unknown(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54077 = arguments.length;
var i__5770__auto___54078 = (0);
while(true){
if((i__5770__auto___54078 < len__5769__auto___54077)){
args__5775__auto__.push((arguments[i__5770__auto___54078]));

var G__54079 = (i__5770__auto___54078 + (1));
i__5770__auto___54078 = G__54079;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53574 = conformed_args__52134__auto__;
var map__53574__$1 = cljs.core.__destructure_map(map__53574);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53574__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53574__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53574__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.unknown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.unknown.cljs$lang$applyTo = (function (seq53573){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53573));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.script = (function com$fulcrologic$fulcro$dom$script(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54080 = arguments.length;
var i__5770__auto___54081 = (0);
while(true){
if((i__5770__auto___54081 < len__5769__auto___54080)){
args__5775__auto__.push((arguments[i__5770__auto___54081]));

var G__54082 = (i__5770__auto___54081 + (1));
i__5770__auto___54081 = G__54082;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53576 = conformed_args__52134__auto__;
var map__53576__$1 = cljs.core.__destructure_map(map__53576);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53576__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53576__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53576__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.script.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.script.cljs$lang$applyTo = (function (seq53575){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53575));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTurbulence = (function com$fulcrologic$fulcro$dom$feTurbulence(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54083 = arguments.length;
var i__5770__auto___54084 = (0);
while(true){
if((i__5770__auto___54084 < len__5769__auto___54083)){
args__5775__auto__.push((arguments[i__5770__auto___54084]));

var G__54085 = (i__5770__auto___54084 + (1));
i__5770__auto___54084 = G__54085;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53578 = conformed_args__52134__auto__;
var map__53578__$1 = cljs.core.__destructure_map(map__53578);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53578__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53578__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53578__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTurbulence.cljs$lang$applyTo = (function (seq53577){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53577));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.big = (function com$fulcrologic$fulcro$dom$big(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54086 = arguments.length;
var i__5770__auto___54087 = (0);
while(true){
if((i__5770__auto___54087 < len__5769__auto___54086)){
args__5775__auto__.push((arguments[i__5770__auto___54087]));

var G__54088 = (i__5770__auto___54087 + (1));
i__5770__auto___54087 = G__54088;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53580 = conformed_args__52134__auto__;
var map__53580__$1 = cljs.core.__destructure_map(map__53580);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.big.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.big.cljs$lang$applyTo = (function (seq53579){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53579));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.button = (function com$fulcrologic$fulcro$dom$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54089 = arguments.length;
var i__5770__auto___54090 = (0);
while(true){
if((i__5770__auto___54090 < len__5769__auto___54089)){
args__5775__auto__.push((arguments[i__5770__auto___54090]));

var G__54091 = (i__5770__auto___54090 + (1));
i__5770__auto___54090 = G__54091;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53582 = conformed_args__52134__auto__;
var map__53582__$1 = cljs.core.__destructure_map(map__53582);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.button.cljs$lang$applyTo = (function (seq53581){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53581));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_uri = (function com$fulcrologic$fulcro$dom$font_face_uri(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54092 = arguments.length;
var i__5770__auto___54093 = (0);
while(true){
if((i__5770__auto___54093 < len__5769__auto___54092)){
args__5775__auto__.push((arguments[i__5770__auto___54093]));

var G__54094 = (i__5770__auto___54093 + (1));
i__5770__auto___54093 = G__54094;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53584 = conformed_args__52134__auto__;
var map__53584__$1 = cljs.core.__destructure_map(map__53584);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_uri.cljs$lang$applyTo = (function (seq53583){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53583));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.wbr = (function com$fulcrologic$fulcro$dom$wbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54095 = arguments.length;
var i__5770__auto___54096 = (0);
while(true){
if((i__5770__auto___54096 < len__5769__auto___54095)){
args__5775__auto__.push((arguments[i__5770__auto___54096]));

var G__54097 = (i__5770__auto___54096 + (1));
i__5770__auto___54096 = G__54097;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53586 = conformed_args__52134__auto__;
var map__53586__$1 = cljs.core.__destructure_map(map__53586);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.wbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.wbr.cljs$lang$applyTo = (function (seq53585){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53585));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.symbol = (function com$fulcrologic$fulcro$dom$symbol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54098 = arguments.length;
var i__5770__auto___54099 = (0);
while(true){
if((i__5770__auto___54099 < len__5769__auto___54098)){
args__5775__auto__.push((arguments[i__5770__auto___54099]));

var G__54100 = (i__5770__auto___54099 + (1));
i__5770__auto___54099 = G__54100;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53588 = conformed_args__52134__auto__;
var map__53588__$1 = cljs.core.__destructure_map(map__53588);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53588__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53588__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53588__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.symbol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.symbol.cljs$lang$applyTo = (function (seq53587){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53587));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.strong = (function com$fulcrologic$fulcro$dom$strong(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54101 = arguments.length;
var i__5770__auto___54102 = (0);
while(true){
if((i__5770__auto___54102 < len__5769__auto___54101)){
args__5775__auto__.push((arguments[i__5770__auto___54102]));

var G__54103 = (i__5770__auto___54102 + (1));
i__5770__auto___54102 = G__54103;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53590 = conformed_args__52134__auto__;
var map__53590__$1 = cljs.core.__destructure_map(map__53590);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53590__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53590__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53590__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.strong.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.strong.cljs$lang$applyTo = (function (seq53589){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53589));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.use = (function com$fulcrologic$fulcro$dom$use(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54104 = arguments.length;
var i__5770__auto___54105 = (0);
while(true){
if((i__5770__auto___54105 < len__5769__auto___54104)){
args__5775__auto__.push((arguments[i__5770__auto___54105]));

var G__54106 = (i__5770__auto___54105 + (1));
i__5770__auto___54105 = G__54106;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53592 = conformed_args__52134__auto__;
var map__53592__$1 = cljs.core.__destructure_map(map__53592);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.use.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.use.cljs$lang$applyTo = (function (seq53591){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53591));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.solidcolor = (function com$fulcrologic$fulcro$dom$solidcolor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54107 = arguments.length;
var i__5770__auto___54108 = (0);
while(true){
if((i__5770__auto___54108 < len__5769__auto___54107)){
args__5775__auto__.push((arguments[i__5770__auto___54108]));

var G__54109 = (i__5770__auto___54108 + (1));
i__5770__auto___54108 = G__54109;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53594 = conformed_args__52134__auto__;
var map__53594__$1 = cljs.core.__destructure_map(map__53594);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53594__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53594__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53594__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.solidcolor.cljs$lang$applyTo = (function (seq53593){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53593));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.fePointLight = (function com$fulcrologic$fulcro$dom$fePointLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54110 = arguments.length;
var i__5770__auto___54111 = (0);
while(true){
if((i__5770__auto___54111 < len__5769__auto___54110)){
args__5775__auto__.push((arguments[i__5770__auto___54111]));

var G__54112 = (i__5770__auto___54111 + (1));
i__5770__auto___54111 = G__54112;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53596 = conformed_args__52134__auto__;
var map__53596__$1 = cljs.core.__destructure_map(map__53596);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.fePointLight.cljs$lang$applyTo = (function (seq53595){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53595));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.li = (function com$fulcrologic$fulcro$dom$li(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54113 = arguments.length;
var i__5770__auto___54114 = (0);
while(true){
if((i__5770__auto___54114 < len__5769__auto___54113)){
args__5775__auto__.push((arguments[i__5770__auto___54114]));

var G__54115 = (i__5770__auto___54114 + (1));
i__5770__auto___54114 = G__54115;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53598 = conformed_args__52134__auto__;
var map__53598__$1 = cljs.core.__destructure_map(map__53598);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53598__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53598__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53598__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.li.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.li.cljs$lang$applyTo = (function (seq53597){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53597));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dt = (function com$fulcrologic$fulcro$dom$dt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54116 = arguments.length;
var i__5770__auto___54117 = (0);
while(true){
if((i__5770__auto___54117 < len__5769__auto___54116)){
args__5775__auto__.push((arguments[i__5770__auto___54117]));

var G__54118 = (i__5770__auto___54117 + (1));
i__5770__auto___54117 = G__54118;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53600 = conformed_args__52134__auto__;
var map__53600__$1 = cljs.core.__destructure_map(map__53600);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.dt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dt.cljs$lang$applyTo = (function (seq53599){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53599));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFuncB = (function com$fulcrologic$fulcro$dom$feFuncB(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54119 = arguments.length;
var i__5770__auto___54120 = (0);
while(true){
if((i__5770__auto___54120 < len__5769__auto___54119)){
args__5775__auto__.push((arguments[i__5770__auto___54120]));

var G__54121 = (i__5770__auto___54120 + (1));
i__5770__auto___54120 = G__54121;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53602 = conformed_args__52134__auto__;
var map__53602__$1 = cljs.core.__destructure_map(map__53602);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53602__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53602__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53602__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFuncB.cljs$lang$applyTo = (function (seq53601){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53601));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.marker = (function com$fulcrologic$fulcro$dom$marker(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54122 = arguments.length;
var i__5770__auto___54123 = (0);
while(true){
if((i__5770__auto___54123 < len__5769__auto___54122)){
args__5775__auto__.push((arguments[i__5770__auto___54123]));

var G__54124 = (i__5770__auto___54123 + (1));
i__5770__auto___54123 = G__54124;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53604 = conformed_args__52134__auto__;
var map__53604__$1 = cljs.core.__destructure_map(map__53604);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.marker.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.marker.cljs$lang$applyTo = (function (seq53603){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53603));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComponentTransfer = (function com$fulcrologic$fulcro$dom$feComponentTransfer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54125 = arguments.length;
var i__5770__auto___54126 = (0);
while(true){
if((i__5770__auto___54126 < len__5769__auto___54125)){
args__5775__auto__.push((arguments[i__5770__auto___54126]));

var G__54127 = (i__5770__auto___54126 + (1));
i__5770__auto___54126 = G__54127;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53606 = conformed_args__52134__auto__;
var map__53606__$1 = cljs.core.__destructure_map(map__53606);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53606__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53606__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53606__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComponentTransfer.cljs$lang$applyTo = (function (seq53605){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53605));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.td = (function com$fulcrologic$fulcro$dom$td(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54128 = arguments.length;
var i__5770__auto___54129 = (0);
while(true){
if((i__5770__auto___54129 < len__5769__auto___54128)){
args__5775__auto__.push((arguments[i__5770__auto___54129]));

var G__54130 = (i__5770__auto___54129 + (1));
i__5770__auto___54129 = G__54130;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53608 = conformed_args__52134__auto__;
var map__53608__$1 = cljs.core.__destructure_map(map__53608);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53608__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53608__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53608__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.td.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.td.cljs$lang$applyTo = (function (seq53607){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53607));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tr = (function com$fulcrologic$fulcro$dom$tr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54131 = arguments.length;
var i__5770__auto___54132 = (0);
while(true){
if((i__5770__auto___54132 < len__5769__auto___54131)){
args__5775__auto__.push((arguments[i__5770__auto___54132]));

var G__54133 = (i__5770__auto___54132 + (1));
i__5770__auto___54132 = G__54133;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53610 = conformed_args__52134__auto__;
var map__53610__$1 = cljs.core.__destructure_map(map__53610);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53610__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53610__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53610__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.tr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tr.cljs$lang$applyTo = (function (seq53609){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53609));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.circle = (function com$fulcrologic$fulcro$dom$circle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54134 = arguments.length;
var i__5770__auto___54135 = (0);
while(true){
if((i__5770__auto___54135 < len__5769__auto___54134)){
args__5775__auto__.push((arguments[i__5770__auto___54135]));

var G__54136 = (i__5770__auto___54135 + (1));
i__5770__auto___54135 = G__54136;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53612 = conformed_args__52134__auto__;
var map__53612__$1 = cljs.core.__destructure_map(map__53612);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53612__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53612__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53612__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.circle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.circle.cljs$lang$applyTo = (function (seq53611){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53611));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.section = (function com$fulcrologic$fulcro$dom$section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54137 = arguments.length;
var i__5770__auto___54138 = (0);
while(true){
if((i__5770__auto___54138 < len__5769__auto___54137)){
args__5775__auto__.push((arguments[i__5770__auto___54138]));

var G__54139 = (i__5770__auto___54138 + (1));
i__5770__auto___54138 = G__54139;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53614 = conformed_args__52134__auto__;
var map__53614__$1 = cljs.core.__destructure_map(map__53614);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53614__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53614__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53614__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.section.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.section.cljs$lang$applyTo = (function (seq53613){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53613));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDropShadow = (function com$fulcrologic$fulcro$dom$feDropShadow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54140 = arguments.length;
var i__5770__auto___54141 = (0);
while(true){
if((i__5770__auto___54141 < len__5769__auto___54140)){
args__5775__auto__.push((arguments[i__5770__auto___54141]));

var G__54142 = (i__5770__auto___54141 + (1));
i__5770__auto___54141 = G__54142;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53616 = conformed_args__52134__auto__;
var map__53616__$1 = cljs.core.__destructure_map(map__53616);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53616__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53616__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53616__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDropShadow.cljs$lang$applyTo = (function (seq53615){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53615));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.th = (function com$fulcrologic$fulcro$dom$th(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54143 = arguments.length;
var i__5770__auto___54144 = (0);
while(true){
if((i__5770__auto___54144 < len__5769__auto___54143)){
args__5775__auto__.push((arguments[i__5770__auto___54144]));

var G__54145 = (i__5770__auto___54144 + (1));
i__5770__auto___54144 = G__54145;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53618 = conformed_args__52134__auto__;
var map__53618__$1 = cljs.core.__destructure_map(map__53618);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.th.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.th.cljs$lang$applyTo = (function (seq53617){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53617));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.time = (function com$fulcrologic$fulcro$dom$time(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54146 = arguments.length;
var i__5770__auto___54147 = (0);
while(true){
if((i__5770__auto___54147 < len__5769__auto___54146)){
args__5775__auto__.push((arguments[i__5770__auto___54147]));

var G__54148 = (i__5770__auto___54147 + (1));
i__5770__auto___54147 = G__54148;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53620 = conformed_args__52134__auto__;
var map__53620__$1 = cljs.core.__destructure_map(map__53620);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.time.cljs$lang$applyTo = (function (seq53619){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53619));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.optgroup = (function com$fulcrologic$fulcro$dom$optgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54149 = arguments.length;
var i__5770__auto___54150 = (0);
while(true){
if((i__5770__auto___54150 < len__5769__auto___54149)){
args__5775__auto__.push((arguments[i__5770__auto___54150]));

var G__54151 = (i__5770__auto___54150 + (1));
i__5770__auto___54150 = G__54151;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53622 = conformed_args__52134__auto__;
var map__53622__$1 = cljs.core.__destructure_map(map__53622);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.optgroup.cljs$lang$applyTo = (function (seq53621){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53621));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.iframe = (function com$fulcrologic$fulcro$dom$iframe(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54152 = arguments.length;
var i__5770__auto___54153 = (0);
while(true){
if((i__5770__auto___54153 < len__5769__auto___54152)){
args__5775__auto__.push((arguments[i__5770__auto___54153]));

var G__54154 = (i__5770__auto___54153 + (1));
i__5770__auto___54153 = G__54154;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53624 = conformed_args__52134__auto__;
var map__53624__$1 = cljs.core.__destructure_map(map__53624);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.iframe.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.iframe.cljs$lang$applyTo = (function (seq53623){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53623));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.color_profile = (function com$fulcrologic$fulcro$dom$color_profile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54155 = arguments.length;
var i__5770__auto___54156 = (0);
while(true){
if((i__5770__auto___54156 < len__5769__auto___54155)){
args__5775__auto__.push((arguments[i__5770__auto___54156]));

var G__54157 = (i__5770__auto___54156 + (1));
i__5770__auto___54156 = G__54157;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53626 = conformed_args__52134__auto__;
var map__53626__$1 = cljs.core.__destructure_map(map__53626);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53626__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53626__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53626__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.color_profile.cljs$lang$applyTo = (function (seq53625){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53625));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.legend = (function com$fulcrologic$fulcro$dom$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54158 = arguments.length;
var i__5770__auto___54159 = (0);
while(true){
if((i__5770__auto___54159 < len__5769__auto___54158)){
args__5775__auto__.push((arguments[i__5770__auto___54159]));

var G__54160 = (i__5770__auto___54159 + (1));
i__5770__auto___54159 = G__54160;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53628 = conformed_args__52134__auto__;
var map__53628__$1 = cljs.core.__destructure_map(map__53628);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.legend.cljs$lang$applyTo = (function (seq53627){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53627));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.em = (function com$fulcrologic$fulcro$dom$em(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54161 = arguments.length;
var i__5770__auto___54162 = (0);
while(true){
if((i__5770__auto___54162 < len__5769__auto___54161)){
args__5775__auto__.push((arguments[i__5770__auto___54162]));

var G__54163 = (i__5770__auto___54162 + (1));
i__5770__auto___54162 = G__54163;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53630 = conformed_args__52134__auto__;
var map__53630__$1 = cljs.core.__destructure_map(map__53630);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.em.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.em.cljs$lang$applyTo = (function (seq53629){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53629));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.kbd = (function com$fulcrologic$fulcro$dom$kbd(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54164 = arguments.length;
var i__5770__auto___54165 = (0);
while(true){
if((i__5770__auto___54165 < len__5769__auto___54164)){
args__5775__auto__.push((arguments[i__5770__auto___54165]));

var G__54166 = (i__5770__auto___54165 + (1));
i__5770__auto___54165 = G__54166;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53632 = conformed_args__52134__auto__;
var map__53632__$1 = cljs.core.__destructure_map(map__53632);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.kbd.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.kbd.cljs$lang$applyTo = (function (seq53631){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53631));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.article = (function com$fulcrologic$fulcro$dom$article(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54167 = arguments.length;
var i__5770__auto___54168 = (0);
while(true){
if((i__5770__auto___54168 < len__5769__auto___54167)){
args__5775__auto__.push((arguments[i__5770__auto___54168]));

var G__54169 = (i__5770__auto___54168 + (1));
i__5770__auto___54168 = G__54169;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53634 = conformed_args__52134__auto__;
var map__53634__$1 = cljs.core.__destructure_map(map__53634);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53634__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53634__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53634__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.article.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.article.cljs$lang$applyTo = (function (seq53633){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53633));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateColor = (function com$fulcrologic$fulcro$dom$animateColor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54170 = arguments.length;
var i__5770__auto___54171 = (0);
while(true){
if((i__5770__auto___54171 < len__5769__auto___54170)){
args__5775__auto__.push((arguments[i__5770__auto___54171]));

var G__54172 = (i__5770__auto___54171 + (1));
i__5770__auto___54171 = G__54172;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53636 = conformed_args__52134__auto__;
var map__53636__$1 = cljs.core.__destructure_map(map__53636);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateColor.cljs$lang$applyTo = (function (seq53635){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53635));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.clipPath = (function com$fulcrologic$fulcro$dom$clipPath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54173 = arguments.length;
var i__5770__auto___54174 = (0);
while(true){
if((i__5770__auto___54174 < len__5769__auto___54173)){
args__5775__auto__.push((arguments[i__5770__auto___54174]));

var G__54175 = (i__5770__auto___54174 + (1));
i__5770__auto___54174 = G__54175;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53638 = conformed_args__52134__auto__;
var map__53638__$1 = cljs.core.__destructure_map(map__53638);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.clipPath.cljs$lang$applyTo = (function (seq53637){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53637));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.abbr = (function com$fulcrologic$fulcro$dom$abbr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54176 = arguments.length;
var i__5770__auto___54177 = (0);
while(true){
if((i__5770__auto___54177 < len__5769__auto___54176)){
args__5775__auto__.push((arguments[i__5770__auto___54177]));

var G__54178 = (i__5770__auto___54177 + (1));
i__5770__auto___54177 = G__54178;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53640 = conformed_args__52134__auto__;
var map__53640__$1 = cljs.core.__destructure_map(map__53640);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53640__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53640__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53640__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.abbr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.abbr.cljs$lang$applyTo = (function (seq53639){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53639));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.altGlyphDef = (function com$fulcrologic$fulcro$dom$altGlyphDef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54179 = arguments.length;
var i__5770__auto___54180 = (0);
while(true){
if((i__5770__auto___54180 < len__5769__auto___54179)){
args__5775__auto__.push((arguments[i__5770__auto___54180]));

var G__54181 = (i__5770__auto___54180 + (1));
i__5770__auto___54180 = G__54181;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53642 = conformed_args__52134__auto__;
var map__53642__$1 = cljs.core.__destructure_map(map__53642);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53642__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53642__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53642__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.altGlyphDef.cljs$lang$applyTo = (function (seq53641){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53641));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshrow = (function com$fulcrologic$fulcro$dom$meshrow(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54182 = arguments.length;
var i__5770__auto___54183 = (0);
while(true){
if((i__5770__auto___54183 < len__5769__auto___54182)){
args__5775__auto__.push((arguments[i__5770__auto___54183]));

var G__54184 = (i__5770__auto___54183 + (1));
i__5770__auto___54183 = G__54184;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53644 = conformed_args__52134__auto__;
var map__53644__$1 = cljs.core.__destructure_map(map__53644);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53644__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53644__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53644__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshrow.cljs$lang$applyTo = (function (seq53643){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53643));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.cursor = (function com$fulcrologic$fulcro$dom$cursor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54185 = arguments.length;
var i__5770__auto___54186 = (0);
while(true){
if((i__5770__auto___54186 < len__5769__auto___54185)){
args__5775__auto__.push((arguments[i__5770__auto___54186]));

var G__54187 = (i__5770__auto___54186 + (1));
i__5770__auto___54186 = G__54187;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53646 = conformed_args__52134__auto__;
var map__53646__$1 = cljs.core.__destructure_map(map__53646);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53646__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53646__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53646__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.cursor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.cursor.cljs$lang$applyTo = (function (seq53645){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53645));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animate = (function com$fulcrologic$fulcro$dom$animate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54188 = arguments.length;
var i__5770__auto___54189 = (0);
while(true){
if((i__5770__auto___54189 < len__5769__auto___54188)){
args__5775__auto__.push((arguments[i__5770__auto___54189]));

var G__54190 = (i__5770__auto___54189 + (1));
i__5770__auto___54189 = G__54190;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53648 = conformed_args__52134__auto__;
var map__53648__$1 = cljs.core.__destructure_map(map__53648);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.animate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animate.cljs$lang$applyTo = (function (seq53647){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53647));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.source = (function com$fulcrologic$fulcro$dom$source(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54191 = arguments.length;
var i__5770__auto___54192 = (0);
while(true){
if((i__5770__auto___54192 < len__5769__auto___54191)){
args__5775__auto__.push((arguments[i__5770__auto___54192]));

var G__54193 = (i__5770__auto___54192 + (1));
i__5770__auto___54192 = G__54193;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53650 = conformed_args__52134__auto__;
var map__53650__$1 = cljs.core.__destructure_map(map__53650);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53650__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53650__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53650__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.source.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.source.cljs$lang$applyTo = (function (seq53649){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53649));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.output = (function com$fulcrologic$fulcro$dom$output(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54194 = arguments.length;
var i__5770__auto___54195 = (0);
while(true){
if((i__5770__auto___54195 < len__5769__auto___54194)){
args__5775__auto__.push((arguments[i__5770__auto___54195]));

var G__54196 = (i__5770__auto___54195 + (1));
i__5770__auto___54195 = G__54196;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53652 = conformed_args__52134__auto__;
var map__53652__$1 = cljs.core.__destructure_map(map__53652);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53652__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53652__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53652__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.output.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.output.cljs$lang$applyTo = (function (seq53651){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53651));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face = (function com$fulcrologic$fulcro$dom$font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54197 = arguments.length;
var i__5770__auto___54198 = (0);
while(true){
if((i__5770__auto___54198 < len__5769__auto___54197)){
args__5775__auto__.push((arguments[i__5770__auto___54198]));

var G__54199 = (i__5770__auto___54198 + (1));
i__5770__auto___54198 = G__54199;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53654 = conformed_args__52134__auto__;
var map__53654__$1 = cljs.core.__destructure_map(map__53654);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53654__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53654__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53654__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face.cljs$lang$applyTo = (function (seq53653){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53653));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMergeNode = (function com$fulcrologic$fulcro$dom$feMergeNode(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54200 = arguments.length;
var i__5770__auto___54201 = (0);
while(true){
if((i__5770__auto___54201 < len__5769__auto___54200)){
args__5775__auto__.push((arguments[i__5770__auto___54201]));

var G__54202 = (i__5770__auto___54201 + (1));
i__5770__auto___54201 = G__54202;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53656 = conformed_args__52134__auto__;
var map__53656__$1 = cljs.core.__destructure_map(map__53656);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53656__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53656__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53656__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMergeNode.cljs$lang$applyTo = (function (seq53655){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53655));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feSpotLight = (function com$fulcrologic$fulcro$dom$feSpotLight(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54203 = arguments.length;
var i__5770__auto___54204 = (0);
while(true){
if((i__5770__auto___54204 < len__5769__auto___54203)){
args__5775__auto__.push((arguments[i__5770__auto___54204]));

var G__54205 = (i__5770__auto___54204 + (1));
i__5770__auto___54204 = G__54205;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53658 = conformed_args__52134__auto__;
var map__53658__$1 = cljs.core.__destructure_map(map__53658);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feSpotLight.cljs$lang$applyTo = (function (seq53657){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53657));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.header = (function com$fulcrologic$fulcro$dom$header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54206 = arguments.length;
var i__5770__auto___54207 = (0);
while(true){
if((i__5770__auto___54207 < len__5769__auto___54206)){
args__5775__auto__.push((arguments[i__5770__auto___54207]));

var G__54208 = (i__5770__auto___54207 + (1));
i__5770__auto___54207 = G__54208;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53660 = conformed_args__52134__auto__;
var map__53660__$1 = cljs.core.__destructure_map(map__53660);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53660__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53660__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53660__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.header.cljs$lang$applyTo = (function (seq53659){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53659));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.datalist = (function com$fulcrologic$fulcro$dom$datalist(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54209 = arguments.length;
var i__5770__auto___54210 = (0);
while(true){
if((i__5770__auto___54210 < len__5769__auto___54209)){
args__5775__auto__.push((arguments[i__5770__auto___54210]));

var G__54211 = (i__5770__auto___54210 + (1));
i__5770__auto___54210 = G__54211;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53662 = conformed_args__52134__auto__;
var map__53662__$1 = cljs.core.__destructure_map(map__53662);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53662__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53662__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53662__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.datalist.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.datalist.cljs$lang$applyTo = (function (seq53661){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53661));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tfoot = (function com$fulcrologic$fulcro$dom$tfoot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54212 = arguments.length;
var i__5770__auto___54213 = (0);
while(true){
if((i__5770__auto___54213 < len__5769__auto___54212)){
args__5775__auto__.push((arguments[i__5770__auto___54213]));

var G__54214 = (i__5770__auto___54213 + (1));
i__5770__auto___54213 = G__54214;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53664 = conformed_args__52134__auto__;
var map__53664__$1 = cljs.core.__destructure_map(map__53664);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53664__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53664__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tfoot.cljs$lang$applyTo = (function (seq53663){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53663));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.s = (function com$fulcrologic$fulcro$dom$s(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54215 = arguments.length;
var i__5770__auto___54216 = (0);
while(true){
if((i__5770__auto___54216 < len__5769__auto___54215)){
args__5775__auto__.push((arguments[i__5770__auto___54216]));

var G__54217 = (i__5770__auto___54216 + (1));
i__5770__auto___54216 = G__54217;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53666 = conformed_args__52134__auto__;
var map__53666__$1 = cljs.core.__destructure_map(map__53666);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.s.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.s.cljs$lang$applyTo = (function (seq53665){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53665));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.hatch = (function com$fulcrologic$fulcro$dom$hatch(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54218 = arguments.length;
var i__5770__auto___54219 = (0);
while(true){
if((i__5770__auto___54219 < len__5769__auto___54218)){
args__5775__auto__.push((arguments[i__5770__auto___54219]));

var G__54220 = (i__5770__auto___54219 + (1));
i__5770__auto___54219 = G__54220;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53668 = conformed_args__52134__auto__;
var map__53668__$1 = cljs.core.__destructure_map(map__53668);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53668__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53668__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53668__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.hatch.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.hatch.cljs$lang$applyTo = (function (seq53667){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53667));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ins = (function com$fulcrologic$fulcro$dom$ins(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54221 = arguments.length;
var i__5770__auto___54222 = (0);
while(true){
if((i__5770__auto___54222 < len__5769__auto___54221)){
args__5775__auto__.push((arguments[i__5770__auto___54222]));

var G__54223 = (i__5770__auto___54222 + (1));
i__5770__auto___54222 = G__54223;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53670 = conformed_args__52134__auto__;
var map__53670__$1 = cljs.core.__destructure_map(map__53670);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.ins.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ins.cljs$lang$applyTo = (function (seq53669){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53669));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.footer = (function com$fulcrologic$fulcro$dom$footer(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54224 = arguments.length;
var i__5770__auto___54225 = (0);
while(true){
if((i__5770__auto___54225 < len__5769__auto___54224)){
args__5775__auto__.push((arguments[i__5770__auto___54225]));

var G__54226 = (i__5770__auto___54225 + (1));
i__5770__auto___54225 = G__54226;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53672 = conformed_args__52134__auto__;
var map__53672__$1 = cljs.core.__destructure_map(map__53672);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53672__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53672__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53672__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.footer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.footer.cljs$lang$applyTo = (function (seq53671){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53671));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mpath = (function com$fulcrologic$fulcro$dom$mpath(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54227 = arguments.length;
var i__5770__auto___54228 = (0);
while(true){
if((i__5770__auto___54228 < len__5769__auto___54227)){
args__5775__auto__.push((arguments[i__5770__auto___54228]));

var G__54229 = (i__5770__auto___54228 + (1));
i__5770__auto___54228 = G__54229;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53674 = conformed_args__52134__auto__;
var map__53674__$1 = cljs.core.__destructure_map(map__53674);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.mpath.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mpath.cljs$lang$applyTo = (function (seq53673){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53673));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.title = (function com$fulcrologic$fulcro$dom$title(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54230 = arguments.length;
var i__5770__auto___54231 = (0);
while(true){
if((i__5770__auto___54231 < len__5769__auto___54230)){
args__5775__auto__.push((arguments[i__5770__auto___54231]));

var G__54232 = (i__5770__auto___54231 + (1));
i__5770__auto___54231 = G__54232;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53676 = conformed_args__52134__auto__;
var map__53676__$1 = cljs.core.__destructure_map(map__53676);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53676__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53676__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53676__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.title.cljs$lang$applyTo = (function (seq53675){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53675));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h5 = (function com$fulcrologic$fulcro$dom$h5(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54233 = arguments.length;
var i__5770__auto___54234 = (0);
while(true){
if((i__5770__auto___54234 < len__5769__auto___54233)){
args__5775__auto__.push((arguments[i__5770__auto___54234]));

var G__54235 = (i__5770__auto___54234 + (1));
i__5770__auto___54234 = G__54235;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53678 = conformed_args__52134__auto__;
var map__53678__$1 = cljs.core.__destructure_map(map__53678);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53678__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53678__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53678__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.h5.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h5.cljs$lang$applyTo = (function (seq53677){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53677));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meshgradient = (function com$fulcrologic$fulcro$dom$meshgradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54236 = arguments.length;
var i__5770__auto___54237 = (0);
while(true){
if((i__5770__auto___54237 < len__5769__auto___54236)){
args__5775__auto__.push((arguments[i__5770__auto___54237]));

var G__54238 = (i__5770__auto___54237 + (1));
i__5770__auto___54237 = G__54238;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53680 = conformed_args__52134__auto__;
var map__53680__$1 = cljs.core.__destructure_map(map__53680);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53680__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53680__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53680__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meshgradient.cljs$lang$applyTo = (function (seq53679){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53679));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.canvas = (function com$fulcrologic$fulcro$dom$canvas(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54239 = arguments.length;
var i__5770__auto___54240 = (0);
while(true){
if((i__5770__auto___54240 < len__5769__auto___54239)){
args__5775__auto__.push((arguments[i__5770__auto___54240]));

var G__54241 = (i__5770__auto___54240 + (1));
i__5770__auto___54240 = G__54241;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53682 = conformed_args__52134__auto__;
var map__53682__$1 = cljs.core.__destructure_map(map__53682);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.canvas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.canvas.cljs$lang$applyTo = (function (seq53681){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53681));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.param = (function com$fulcrologic$fulcro$dom$param(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54242 = arguments.length;
var i__5770__auto___54243 = (0);
while(true){
if((i__5770__auto___54243 < len__5769__auto___54242)){
args__5775__auto__.push((arguments[i__5770__auto___54243]));

var G__54244 = (i__5770__auto___54243 + (1));
i__5770__auto___54243 = G__54244;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53684 = conformed_args__52134__auto__;
var map__53684__$1 = cljs.core.__destructure_map(map__53684);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.param.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.param.cljs$lang$applyTo = (function (seq53683){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53683));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font = (function com$fulcrologic$fulcro$dom$font(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54245 = arguments.length;
var i__5770__auto___54246 = (0);
while(true){
if((i__5770__auto___54246 < len__5769__auto___54245)){
args__5775__auto__.push((arguments[i__5770__auto___54246]));

var G__54247 = (i__5770__auto___54246 + (1));
i__5770__auto___54246 = G__54247;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53686 = conformed_args__52134__auto__;
var map__53686__$1 = cljs.core.__destructure_map(map__53686);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53686__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.font.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font.cljs$lang$applyTo = (function (seq53685){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53685));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.div = (function com$fulcrologic$fulcro$dom$div(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54248 = arguments.length;
var i__5770__auto___54249 = (0);
while(true){
if((i__5770__auto___54249 < len__5769__auto___54248)){
args__5775__auto__.push((arguments[i__5770__auto___54249]));

var G__54250 = (i__5770__auto___54249 + (1));
i__5770__auto___54249 = G__54250;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53688 = conformed_args__52134__auto__;
var map__53688__$1 = cljs.core.__destructure_map(map__53688);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.div.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.div.cljs$lang$applyTo = (function (seq53687){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53687));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.option = (function com$fulcrologic$fulcro$dom$option(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54251 = arguments.length;
var i__5770__auto___54252 = (0);
while(true){
if((i__5770__auto___54252 < len__5769__auto___54251)){
args__5775__auto__.push((arguments[i__5770__auto___54252]));

var G__54253 = (i__5770__auto___54252 + (1));
i__5770__auto___54252 = G__54253;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53690 = conformed_args__52134__auto__;
var map__53690__$1 = cljs.core.__destructure_map(map__53690);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53690__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53690__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.option.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.option.cljs$lang$applyTo = (function (seq53689){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53689));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feFlood = (function com$fulcrologic$fulcro$dom$feFlood(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54254 = arguments.length;
var i__5770__auto___54255 = (0);
while(true){
if((i__5770__auto___54255 < len__5769__auto___54254)){
args__5775__auto__.push((arguments[i__5770__auto___54255]));

var G__54256 = (i__5770__auto___54255 + (1));
i__5770__auto___54255 = G__54256;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53692 = conformed_args__52134__auto__;
var map__53692__$1 = cljs.core.__destructure_map(map__53692);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feFlood.cljs$lang$applyTo = (function (seq53691){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53691));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.summary = (function com$fulcrologic$fulcro$dom$summary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54257 = arguments.length;
var i__5770__auto___54258 = (0);
while(true){
if((i__5770__auto___54258 < len__5769__auto___54257)){
args__5775__auto__.push((arguments[i__5770__auto___54258]));

var G__54259 = (i__5770__auto___54258 + (1));
i__5770__auto___54258 = G__54259;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53694 = conformed_args__52134__auto__;
var map__53694__$1 = cljs.core.__destructure_map(map__53694);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.summary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.summary.cljs$lang$applyTo = (function (seq53693){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53693));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feMorphology = (function com$fulcrologic$fulcro$dom$feMorphology(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54260 = arguments.length;
var i__5770__auto___54261 = (0);
while(true){
if((i__5770__auto___54261 < len__5769__auto___54260)){
args__5775__auto__.push((arguments[i__5770__auto___54261]));

var G__54262 = (i__5770__auto___54261 + (1));
i__5770__auto___54261 = G__54262;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53696 = conformed_args__52134__auto__;
var map__53696__$1 = cljs.core.__destructure_map(map__53696);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feMorphology.cljs$lang$applyTo = (function (seq53695){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53695));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.samp = (function com$fulcrologic$fulcro$dom$samp(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54263 = arguments.length;
var i__5770__auto___54264 = (0);
while(true){
if((i__5770__auto___54264 < len__5769__auto___54263)){
args__5775__auto__.push((arguments[i__5770__auto___54264]));

var G__54265 = (i__5770__auto___54264 + (1));
i__5770__auto___54264 = G__54265;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53698 = conformed_args__52134__auto__;
var map__53698__$1 = cljs.core.__destructure_map(map__53698);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53698__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53698__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.samp.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.samp.cljs$lang$applyTo = (function (seq53697){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53697));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyphRef = (function com$fulcrologic$fulcro$dom$glyphRef(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54266 = arguments.length;
var i__5770__auto___54267 = (0);
while(true){
if((i__5770__auto___54267 < len__5769__auto___54266)){
args__5775__auto__.push((arguments[i__5770__auto___54267]));

var G__54268 = (i__5770__auto___54267 + (1));
i__5770__auto___54267 = G__54268;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53700 = conformed_args__52134__auto__;
var map__53700__$1 = cljs.core.__destructure_map(map__53700);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyphRef.cljs$lang$applyTo = (function (seq53699){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53699));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.small = (function com$fulcrologic$fulcro$dom$small(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54269 = arguments.length;
var i__5770__auto___54270 = (0);
while(true){
if((i__5770__auto___54270 < len__5769__auto___54269)){
args__5775__auto__.push((arguments[i__5770__auto___54270]));

var G__54271 = (i__5770__auto___54270 + (1));
i__5770__auto___54270 = G__54271;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53702 = conformed_args__52134__auto__;
var map__53702__$1 = cljs.core.__destructure_map(map__53702);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.small.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.small.cljs$lang$applyTo = (function (seq53701){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53701));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.style = (function com$fulcrologic$fulcro$dom$style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54272 = arguments.length;
var i__5770__auto___54273 = (0);
while(true){
if((i__5770__auto___54273 < len__5769__auto___54272)){
args__5775__auto__.push((arguments[i__5770__auto___54273]));

var G__54274 = (i__5770__auto___54273 + (1));
i__5770__auto___54273 = G__54274;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53704 = conformed_args__52134__auto__;
var map__53704__$1 = cljs.core.__destructure_map(map__53704);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53704__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53704__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53704__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.style.cljs$lang$applyTo = (function (seq53703){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53703));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.textarea = (function com$fulcrologic$fulcro$dom$textarea(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54275 = arguments.length;
var i__5770__auto___54276 = (0);
while(true){
if((i__5770__auto___54276 < len__5769__auto___54275)){
args__5775__auto__.push((arguments[i__5770__auto___54276]));

var G__54277 = (i__5770__auto___54276 + (1));
i__5770__auto___54276 = G__54277;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53706 = conformed_args__52134__auto__;
var map__53706__$1 = cljs.core.__destructure_map(map__53706);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.textarea.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.textarea.cljs$lang$applyTo = (function (seq53705){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53705));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feGaussianBlur = (function com$fulcrologic$fulcro$dom$feGaussianBlur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54278 = arguments.length;
var i__5770__auto___54279 = (0);
while(true){
if((i__5770__auto___54279 < len__5769__auto___54278)){
args__5775__auto__.push((arguments[i__5770__auto___54279]));

var G__54280 = (i__5770__auto___54279 + (1));
i__5770__auto___54279 = G__54280;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53708 = conformed_args__52134__auto__;
var map__53708__$1 = cljs.core.__destructure_map(map__53708);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53708__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53708__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53708__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feGaussianBlur.cljs$lang$applyTo = (function (seq53707){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53707));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h4 = (function com$fulcrologic$fulcro$dom$h4(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54281 = arguments.length;
var i__5770__auto___54282 = (0);
while(true){
if((i__5770__auto___54282 < len__5769__auto___54281)){
args__5775__auto__.push((arguments[i__5770__auto___54282]));

var G__54283 = (i__5770__auto___54282 + (1));
i__5770__auto___54282 = G__54283;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53710 = conformed_args__52134__auto__;
var map__53710__$1 = cljs.core.__destructure_map(map__53710);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53710__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53710__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53710__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.h4.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h4.cljs$lang$applyTo = (function (seq53709){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53709));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.head = (function com$fulcrologic$fulcro$dom$head(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54284 = arguments.length;
var i__5770__auto___54285 = (0);
while(true){
if((i__5770__auto___54285 < len__5769__auto___54284)){
args__5775__auto__.push((arguments[i__5770__auto___54285]));

var G__54286 = (i__5770__auto___54285 + (1));
i__5770__auto___54285 = G__54286;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53712 = conformed_args__52134__auto__;
var map__53712__$1 = cljs.core.__destructure_map(map__53712);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.head.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.head.cljs$lang$applyTo = (function (seq53711){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53711));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.g = (function com$fulcrologic$fulcro$dom$g(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54287 = arguments.length;
var i__5770__auto___54288 = (0);
while(true){
if((i__5770__auto___54288 < len__5769__auto___54287)){
args__5775__auto__.push((arguments[i__5770__auto___54288]));

var G__54289 = (i__5770__auto___54288 + (1));
i__5770__auto___54288 = G__54289;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53714 = conformed_args__52134__auto__;
var map__53714__$1 = cljs.core.__destructure_map(map__53714);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53714__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53714__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53714__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.g.cljs$lang$applyTo = (function (seq53713){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53713));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.missing_glyph = (function com$fulcrologic$fulcro$dom$missing_glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54290 = arguments.length;
var i__5770__auto___54291 = (0);
while(true){
if((i__5770__auto___54291 < len__5769__auto___54290)){
args__5775__auto__.push((arguments[i__5770__auto___54291]));

var G__54292 = (i__5770__auto___54291 + (1));
i__5770__auto___54291 = G__54292;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53716 = conformed_args__52134__auto__;
var map__53716__$1 = cljs.core.__destructure_map(map__53716);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.missing_glyph.cljs$lang$applyTo = (function (seq53715){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53715));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.stop = (function com$fulcrologic$fulcro$dom$stop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54293 = arguments.length;
var i__5770__auto___54294 = (0);
while(true){
if((i__5770__auto___54294 < len__5769__auto___54293)){
args__5775__auto__.push((arguments[i__5770__auto___54294]));

var G__54295 = (i__5770__auto___54294 + (1));
i__5770__auto___54294 = G__54295;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53718 = conformed_args__52134__auto__;
var map__53718__$1 = cljs.core.__destructure_map(map__53718);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.stop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.stop.cljs$lang$applyTo = (function (seq53717){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53717));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feDiffuseLighting = (function com$fulcrologic$fulcro$dom$feDiffuseLighting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54296 = arguments.length;
var i__5770__auto___54297 = (0);
while(true){
if((i__5770__auto___54297 < len__5769__auto___54296)){
args__5775__auto__.push((arguments[i__5770__auto___54297]));

var G__54298 = (i__5770__auto___54297 + (1));
i__5770__auto___54297 = G__54298;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53720 = conformed_args__52134__auto__;
var map__53720__$1 = cljs.core.__destructure_map(map__53720);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq53719){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53719));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.filter = (function com$fulcrologic$fulcro$dom$filter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54299 = arguments.length;
var i__5770__auto___54300 = (0);
while(true){
if((i__5770__auto___54300 < len__5769__auto___54299)){
args__5775__auto__.push((arguments[i__5770__auto___54300]));

var G__54301 = (i__5770__auto___54300 + (1));
i__5770__auto___54300 = G__54301;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53722 = conformed_args__52134__auto__;
var map__53722__$1 = cljs.core.__destructure_map(map__53722);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.filter.cljs$lang$applyTo = (function (seq53721){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53721));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feComposite = (function com$fulcrologic$fulcro$dom$feComposite(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54302 = arguments.length;
var i__5770__auto___54303 = (0);
while(true){
if((i__5770__auto___54303 < len__5769__auto___54302)){
args__5775__auto__.push((arguments[i__5770__auto___54303]));

var G__54304 = (i__5770__auto___54303 + (1));
i__5770__auto___54303 = G__54304;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53724 = conformed_args__52134__auto__;
var map__53724__$1 = cljs.core.__destructure_map(map__53724);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feComposite.cljs$lang$applyTo = (function (seq53723){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53723));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.mesh = (function com$fulcrologic$fulcro$dom$mesh(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54305 = arguments.length;
var i__5770__auto___54306 = (0);
while(true){
if((i__5770__auto___54306 < len__5769__auto___54305)){
args__5775__auto__.push((arguments[i__5770__auto___54306]));

var G__54307 = (i__5770__auto___54306 + (1));
i__5770__auto___54306 = G__54307;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53726 = conformed_args__52134__auto__;
var map__53726__$1 = cljs.core.__destructure_map(map__53726);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.mesh.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.mesh.cljs$lang$applyTo = (function (seq53725){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53725));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.var$ = (function com$fulcrologic$fulcro$dom$var(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54308 = arguments.length;
var i__5770__auto___54309 = (0);
while(true){
if((i__5770__auto___54309 < len__5769__auto___54308)){
args__5775__auto__.push((arguments[i__5770__auto___54309]));

var G__54310 = (i__5770__auto___54309 + (1));
i__5770__auto___54309 = G__54310;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53728 = conformed_args__52134__auto__;
var map__53728__$1 = cljs.core.__destructure_map(map__53728);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53728__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53728__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53728__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.var$.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.var$.cljs$lang$applyTo = (function (seq53727){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53727));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.tspan = (function com$fulcrologic$fulcro$dom$tspan(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54311 = arguments.length;
var i__5770__auto___54312 = (0);
while(true){
if((i__5770__auto___54312 < len__5769__auto___54311)){
args__5775__auto__.push((arguments[i__5770__auto___54312]));

var G__54313 = (i__5770__auto___54312 + (1));
i__5770__auto___54312 = G__54313;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53730 = conformed_args__52134__auto__;
var map__53730__$1 = cljs.core.__destructure_map(map__53730);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.tspan.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.tspan.cljs$lang$applyTo = (function (seq53729){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53729));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ol = (function com$fulcrologic$fulcro$dom$ol(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54314 = arguments.length;
var i__5770__auto___54315 = (0);
while(true){
if((i__5770__auto___54315 < len__5769__auto___54314)){
args__5775__auto__.push((arguments[i__5770__auto___54315]));

var G__54316 = (i__5770__auto___54315 + (1));
i__5770__auto___54315 = G__54316;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53732 = conformed_args__52134__auto__;
var map__53732__$1 = cljs.core.__destructure_map(map__53732);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53732__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.ol.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ol.cljs$lang$applyTo = (function (seq53731){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53731));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.details = (function com$fulcrologic$fulcro$dom$details(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54317 = arguments.length;
var i__5770__auto___54318 = (0);
while(true){
if((i__5770__auto___54318 < len__5769__auto___54317)){
args__5775__auto__.push((arguments[i__5770__auto___54318]));

var G__54319 = (i__5770__auto___54318 + (1));
i__5770__auto___54318 = G__54319;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53734 = conformed_args__52134__auto__;
var map__53734__$1 = cljs.core.__destructure_map(map__53734);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53734__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53734__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.details.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.details.cljs$lang$applyTo = (function (seq53733){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53733));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.line = (function com$fulcrologic$fulcro$dom$line(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54320 = arguments.length;
var i__5770__auto___54321 = (0);
while(true){
if((i__5770__auto___54321 < len__5769__auto___54320)){
args__5775__auto__.push((arguments[i__5770__auto___54321]));

var G__54322 = (i__5770__auto___54321 + (1));
i__5770__auto___54321 = G__54322;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53736 = conformed_args__52134__auto__;
var map__53736__$1 = cljs.core.__destructure_map(map__53736);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.line.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.line.cljs$lang$applyTo = (function (seq53735){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53735));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.col = (function com$fulcrologic$fulcro$dom$col(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54323 = arguments.length;
var i__5770__auto___54324 = (0);
while(true){
if((i__5770__auto___54324 < len__5769__auto___54323)){
args__5775__auto__.push((arguments[i__5770__auto___54324]));

var G__54325 = (i__5770__auto___54324 + (1));
i__5770__auto___54324 = G__54325;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53738 = conformed_args__52134__auto__;
var map__53738__$1 = cljs.core.__destructure_map(map__53738);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53738__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53738__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53738__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.col.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.col.cljs$lang$applyTo = (function (seq53737){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53737));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.label = (function com$fulcrologic$fulcro$dom$label(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54326 = arguments.length;
var i__5770__auto___54327 = (0);
while(true){
if((i__5770__auto___54327 < len__5769__auto___54326)){
args__5775__auto__.push((arguments[i__5770__auto___54327]));

var G__54328 = (i__5770__auto___54327 + (1));
i__5770__auto___54327 = G__54328;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53740 = conformed_args__52134__auto__;
var map__53740__$1 = cljs.core.__destructure_map(map__53740);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53740__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53740__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53740__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.label.cljs$lang$applyTo = (function (seq53739){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53739));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.picture = (function com$fulcrologic$fulcro$dom$picture(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54329 = arguments.length;
var i__5770__auto___54330 = (0);
while(true){
if((i__5770__auto___54330 < len__5769__auto___54329)){
args__5775__auto__.push((arguments[i__5770__auto___54330]));

var G__54331 = (i__5770__auto___54330 + (1));
i__5770__auto___54330 = G__54331;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53742 = conformed_args__52134__auto__;
var map__53742__$1 = cljs.core.__destructure_map(map__53742);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.picture.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.picture.cljs$lang$applyTo = (function (seq53741){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53741));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.rt = (function com$fulcrologic$fulcro$dom$rt(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54332 = arguments.length;
var i__5770__auto___54333 = (0);
while(true){
if((i__5770__auto___54333 < len__5769__auto___54332)){
args__5775__auto__.push((arguments[i__5770__auto___54333]));

var G__54334 = (i__5770__auto___54333 + (1));
i__5770__auto___54333 = G__54334;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53744 = conformed_args__52134__auto__;
var map__53744__$1 = cljs.core.__destructure_map(map__53744);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.rt.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.rt.cljs$lang$applyTo = (function (seq53743){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53743));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h6 = (function com$fulcrologic$fulcro$dom$h6(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54335 = arguments.length;
var i__5770__auto___54336 = (0);
while(true){
if((i__5770__auto___54336 < len__5769__auto___54335)){
args__5775__auto__.push((arguments[i__5770__auto___54336]));

var G__54337 = (i__5770__auto___54336 + (1));
i__5770__auto___54336 = G__54337;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53746 = conformed_args__52134__auto__;
var map__53746__$1 = cljs.core.__destructure_map(map__53746);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.h6.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h6.cljs$lang$applyTo = (function (seq53745){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53745));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.vkern = (function com$fulcrologic$fulcro$dom$vkern(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54338 = arguments.length;
var i__5770__auto___54339 = (0);
while(true){
if((i__5770__auto___54339 < len__5769__auto___54338)){
args__5775__auto__.push((arguments[i__5770__auto___54339]));

var G__54340 = (i__5770__auto___54339 + (1));
i__5770__auto___54339 = G__54340;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53748 = conformed_args__52134__auto__;
var map__53748__$1 = cljs.core.__destructure_map(map__53748);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.vkern.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.vkern.cljs$lang$applyTo = (function (seq53747){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53747));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.link = (function com$fulcrologic$fulcro$dom$link(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54341 = arguments.length;
var i__5770__auto___54342 = (0);
while(true){
if((i__5770__auto___54342 < len__5769__auto___54341)){
args__5775__auto__.push((arguments[i__5770__auto___54342]));

var G__54343 = (i__5770__auto___54342 + (1));
i__5770__auto___54342 = G__54343;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53750 = conformed_args__52134__auto__;
var map__53750__$1 = cljs.core.__destructure_map(map__53750);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53750__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53750__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53750__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.link.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.link.cljs$lang$applyTo = (function (seq53749){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53749));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.defs = (function com$fulcrologic$fulcro$dom$defs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54344 = arguments.length;
var i__5770__auto___54345 = (0);
while(true){
if((i__5770__auto___54345 < len__5769__auto___54344)){
args__5775__auto__.push((arguments[i__5770__auto___54345]));

var G__54346 = (i__5770__auto___54345 + (1));
i__5770__auto___54345 = G__54346;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53752 = conformed_args__52134__auto__;
var map__53752__$1 = cljs.core.__destructure_map(map__53752);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.defs.cljs$lang$applyTo = (function (seq53751){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53751));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.glyph = (function com$fulcrologic$fulcro$dom$glyph(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54347 = arguments.length;
var i__5770__auto___54348 = (0);
while(true){
if((i__5770__auto___54348 < len__5769__auto___54347)){
args__5775__auto__.push((arguments[i__5770__auto___54348]));

var G__54349 = (i__5770__auto___54348 + (1));
i__5770__auto___54348 = G__54349;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53754 = conformed_args__52134__auto__;
var map__53754__$1 = cljs.core.__destructure_map(map__53754);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.glyph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.glyph.cljs$lang$applyTo = (function (seq53753){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53753));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.colgroup = (function com$fulcrologic$fulcro$dom$colgroup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54350 = arguments.length;
var i__5770__auto___54351 = (0);
while(true){
if((i__5770__auto___54351 < len__5769__auto___54350)){
args__5775__auto__.push((arguments[i__5770__auto___54351]));

var G__54352 = (i__5770__auto___54351 + (1));
i__5770__auto___54351 = G__54352;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53756 = conformed_args__52134__auto__;
var map__53756__$1 = cljs.core.__destructure_map(map__53756);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53756__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53756__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.colgroup.cljs$lang$applyTo = (function (seq53755){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53755));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.meter = (function com$fulcrologic$fulcro$dom$meter(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54353 = arguments.length;
var i__5770__auto___54354 = (0);
while(true){
if((i__5770__auto___54354 < len__5769__auto___54353)){
args__5775__auto__.push((arguments[i__5770__auto___54354]));

var G__54355 = (i__5770__auto___54354 + (1));
i__5770__auto___54354 = G__54355;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53758 = conformed_args__52134__auto__;
var map__53758__$1 = cljs.core.__destructure_map(map__53758);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53758__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53758__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53758__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.meter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.meter.cljs$lang$applyTo = (function (seq53757){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53757));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.bdo = (function com$fulcrologic$fulcro$dom$bdo(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54356 = arguments.length;
var i__5770__auto___54357 = (0);
while(true){
if((i__5770__auto___54357 < len__5769__auto___54356)){
args__5775__auto__.push((arguments[i__5770__auto___54357]));

var G__54358 = (i__5770__auto___54357 + (1));
i__5770__auto___54357 = G__54358;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53760 = conformed_args__52134__auto__;
var map__53760__$1 = cljs.core.__destructure_map(map__53760);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.bdo.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.bdo.cljs$lang$applyTo = (function (seq53759){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53759));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feImage = (function com$fulcrologic$fulcro$dom$feImage(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54359 = arguments.length;
var i__5770__auto___54360 = (0);
while(true){
if((i__5770__auto___54360 < len__5769__auto___54359)){
args__5775__auto__.push((arguments[i__5770__auto___54360]));

var G__54361 = (i__5770__auto___54360 + (1));
i__5770__auto___54360 = G__54361;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53762 = conformed_args__52134__auto__;
var map__53762__$1 = cljs.core.__destructure_map(map__53762);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feImage.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feImage.cljs$lang$applyTo = (function (seq53761){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53761));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.b = (function com$fulcrologic$fulcro$dom$b(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54362 = arguments.length;
var i__5770__auto___54363 = (0);
while(true){
if((i__5770__auto___54363 < len__5769__auto___54362)){
args__5775__auto__.push((arguments[i__5770__auto___54363]));

var G__54364 = (i__5770__auto___54363 + (1));
i__5770__auto___54363 = G__54364;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53764 = conformed_args__52134__auto__;
var map__53764__$1 = cljs.core.__destructure_map(map__53764);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53764__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53764__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53764__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.b.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.b.cljs$lang$applyTo = (function (seq53763){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53763));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.svg = (function com$fulcrologic$fulcro$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54365 = arguments.length;
var i__5770__auto___54366 = (0);
while(true){
if((i__5770__auto___54366 < len__5769__auto___54365)){
args__5775__auto__.push((arguments[i__5770__auto___54366]));

var G__54367 = (i__5770__auto___54366 + (1));
i__5770__auto___54366 = G__54367;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53766 = conformed_args__52134__auto__;
var map__53766__$1 = cljs.core.__destructure_map(map__53766);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53766__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53766__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.svg.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.svg.cljs$lang$applyTo = (function (seq53765){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53765));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feTile = (function com$fulcrologic$fulcro$dom$feTile(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54368 = arguments.length;
var i__5770__auto___54369 = (0);
while(true){
if((i__5770__auto___54369 < len__5769__auto___54368)){
args__5775__auto__.push((arguments[i__5770__auto___54369]));

var G__54370 = (i__5770__auto___54369 + (1));
i__5770__auto___54369 = G__54370;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53768 = conformed_args__52134__auto__;
var map__53768__$1 = cljs.core.__destructure_map(map__53768);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feTile.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feTile.cljs$lang$applyTo = (function (seq53767){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53767));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.ellipse = (function com$fulcrologic$fulcro$dom$ellipse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54371 = arguments.length;
var i__5770__auto___54372 = (0);
while(true){
if((i__5770__auto___54372 < len__5769__auto___54371)){
args__5775__auto__.push((arguments[i__5770__auto___54372]));

var G__54373 = (i__5770__auto___54372 + (1));
i__5770__auto___54372 = G__54373;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53770 = conformed_args__52134__auto__;
var map__53770__$1 = cljs.core.__destructure_map(map__53770);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53770__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53770__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53770__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.ellipse.cljs$lang$applyTo = (function (seq53769){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53769));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.code = (function com$fulcrologic$fulcro$dom$code(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54374 = arguments.length;
var i__5770__auto___54375 = (0);
while(true){
if((i__5770__auto___54375 < len__5769__auto___54374)){
args__5775__auto__.push((arguments[i__5770__auto___54375]));

var G__54376 = (i__5770__auto___54375 + (1));
i__5770__auto___54375 = G__54376;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53772 = conformed_args__52134__auto__;
var map__53772__$1 = cljs.core.__destructure_map(map__53772);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53772__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53772__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53772__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.code.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.code.cljs$lang$applyTo = (function (seq53771){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53771));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.dialog = (function com$fulcrologic$fulcro$dom$dialog(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54377 = arguments.length;
var i__5770__auto___54378 = (0);
while(true){
if((i__5770__auto___54378 < len__5769__auto___54377)){
args__5775__auto__.push((arguments[i__5770__auto___54378]));

var G__54379 = (i__5770__auto___54378 + (1));
i__5770__auto___54378 = G__54379;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53774 = conformed_args__52134__auto__;
var map__53774__$1 = cljs.core.__destructure_map(map__53774);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53774__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53774__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53774__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.dialog.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.dialog.cljs$lang$applyTo = (function (seq53773){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53773));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.linearGradient = (function com$fulcrologic$fulcro$dom$linearGradient(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54380 = arguments.length;
var i__5770__auto___54381 = (0);
while(true){
if((i__5770__auto___54381 < len__5769__auto___54380)){
args__5775__auto__.push((arguments[i__5770__auto___54381]));

var G__54382 = (i__5770__auto___54381 + (1));
i__5770__auto___54381 = G__54382;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53776 = conformed_args__52134__auto__;
var map__53776__$1 = cljs.core.__destructure_map(map__53776);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.linearGradient.cljs$lang$applyTo = (function (seq53775){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53775));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.discard = (function com$fulcrologic$fulcro$dom$discard(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54383 = arguments.length;
var i__5770__auto___54384 = (0);
while(true){
if((i__5770__auto___54384 < len__5769__auto___54383)){
args__5775__auto__.push((arguments[i__5770__auto___54384]));

var G__54385 = (i__5770__auto___54384 + (1));
i__5770__auto___54384 = G__54385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53778 = conformed_args__52134__auto__;
var map__53778__$1 = cljs.core.__destructure_map(map__53778);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53778__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53778__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53778__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.discard.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.discard.cljs$lang$applyTo = (function (seq53777){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53777));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.font_face_src = (function com$fulcrologic$fulcro$dom$font_face_src(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54386 = arguments.length;
var i__5770__auto___54387 = (0);
while(true){
if((i__5770__auto___54387 < len__5769__auto___54386)){
args__5775__auto__.push((arguments[i__5770__auto___54387]));

var G__54388 = (i__5770__auto___54387 + (1));
i__5770__auto___54387 = G__54388;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53780 = conformed_args__52134__auto__;
var map__53780__$1 = cljs.core.__destructure_map(map__53780);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53780__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53780__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53780__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.font_face_src.cljs$lang$applyTo = (function (seq53779){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53779));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.noscript = (function com$fulcrologic$fulcro$dom$noscript(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54389 = arguments.length;
var i__5770__auto___54390 = (0);
while(true){
if((i__5770__auto___54390 < len__5769__auto___54389)){
args__5775__auto__.push((arguments[i__5770__auto___54390]));

var G__54391 = (i__5770__auto___54390 + (1));
i__5770__auto___54390 = G__54391;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53782 = conformed_args__52134__auto__;
var map__53782__$1 = cljs.core.__destructure_map(map__53782);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.noscript.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.noscript.cljs$lang$applyTo = (function (seq53781){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53781));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.animateTransform = (function com$fulcrologic$fulcro$dom$animateTransform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54392 = arguments.length;
var i__5770__auto___54393 = (0);
while(true){
if((i__5770__auto___54393 < len__5769__auto___54392)){
args__5775__auto__.push((arguments[i__5770__auto___54393]));

var G__54394 = (i__5770__auto___54393 + (1));
i__5770__auto___54393 = G__54394;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53784 = conformed_args__52134__auto__;
var map__53784__$1 = cljs.core.__destructure_map(map__53784);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.animateTransform.cljs$lang$applyTo = (function (seq53783){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53783));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.feColorMatrix = (function com$fulcrologic$fulcro$dom$feColorMatrix(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54395 = arguments.length;
var i__5770__auto___54396 = (0);
while(true){
if((i__5770__auto___54396 < len__5769__auto___54395)){
args__5775__auto__.push((arguments[i__5770__auto___54396]));

var G__54397 = (i__5770__auto___54396 + (1));
i__5770__auto___54396 = G__54397;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53786 = conformed_args__52134__auto__;
var map__53786__$1 = cljs.core.__destructure_map(map__53786);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53786__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53786__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53786__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.feColorMatrix.cljs$lang$applyTo = (function (seq53785){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53785));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.h2 = (function com$fulcrologic$fulcro$dom$h2(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54398 = arguments.length;
var i__5770__auto___54399 = (0);
while(true){
if((i__5770__auto___54399 < len__5769__auto___54398)){
args__5775__auto__.push((arguments[i__5770__auto___54399]));

var G__54400 = (i__5770__auto___54399 + (1));
i__5770__auto___54399 = G__54400;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53788 = conformed_args__52134__auto__;
var map__53788__$1 = cljs.core.__destructure_map(map__53788);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53788__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53788__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53788__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.h2.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.h2.cljs$lang$applyTo = (function (seq53787){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53787));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.area = (function com$fulcrologic$fulcro$dom$area(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54401 = arguments.length;
var i__5770__auto___54402 = (0);
while(true){
if((i__5770__auto___54402 < len__5769__auto___54401)){
args__5775__auto__.push((arguments[i__5770__auto___54402]));

var G__54403 = (i__5770__auto___54402 + (1));
i__5770__auto___54402 = G__54403;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53790 = conformed_args__52134__auto__;
var map__53790__$1 = cljs.core.__destructure_map(map__53790);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53790__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53790__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53790__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.area.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.area.cljs$lang$applyTo = (function (seq53789){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53789));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.br = (function com$fulcrologic$fulcro$dom$br(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54404 = arguments.length;
var i__5770__auto___54405 = (0);
while(true){
if((i__5770__auto___54405 < len__5769__auto___54404)){
args__5775__auto__.push((arguments[i__5770__auto___54405]));

var G__54406 = (i__5770__auto___54405 + (1));
i__5770__auto___54405 = G__54406;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53792 = conformed_args__52134__auto__;
var map__53792__$1 = cljs.core.__destructure_map(map__53792);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53792__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53792__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53792__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.br.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.br.cljs$lang$applyTo = (function (seq53791){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53791));
}));


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
com.fulcrologic.fulcro.dom.image = (function com$fulcrologic$fulcro$dom$image(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54407 = arguments.length;
var i__5770__auto___54408 = (0);
while(true){
if((i__5770__auto___54408 < len__5769__auto___54407)){
args__5775__auto__.push((arguments[i__5770__auto___54408]));

var G__54409 = (i__5770__auto___54408 + (1));
i__5770__auto___54408 = G__54409;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.fulcrologic.fulcro.dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__52134__auto__ = com.fulcrologic.fulcro.dom.parse_args(args);
var map__53794 = conformed_args__52134__auto__;
var map__53794__$1 = cljs.core.__destructure_map(map__53794);
var attrs__52135__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__52136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__52137__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__52136__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__52136__auto__);
var attrs_value__52138__auto__ = (function (){var or__5045__auto__ = cljs.core.second(attrs__52135__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return com.fulcrologic.fulcro.dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__52138__auto__], null),children__52136__auto____$1),css__52137__auto__);
}));

(com.fulcrologic.fulcro.dom.image.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.fulcrologic.fulcro.dom.image.cljs$lang$applyTo = (function (seq53793){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53793));
}));


//# sourceMappingURL=com.fulcrologic.fulcro.dom.js.map
