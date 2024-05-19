goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38369 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_38369(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38375 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_38375(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36870 = coll;
var G__36871 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36870,G__36871) : shadow.dom.lazy_native_coll_seq.call(null,G__36870,G__36871));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36912 = arguments.length;
switch (G__36912) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36921 = arguments.length;
switch (G__36921) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36947 = arguments.length;
switch (G__36947) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36960 = arguments.length;
switch (G__36960) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36977 = arguments.length;
switch (G__36977) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36989 = arguments.length;
switch (G__36989) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e37006){if((e37006 instanceof Object)){
var e = e37006;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37006;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__37031 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37032 = null;
var count__37033 = (0);
var i__37034 = (0);
while(true){
if((i__37034 < count__37033)){
var el = chunk__37032.cljs$core$IIndexed$_nth$arity$2(null,i__37034);
var handler_38403__$1 = ((function (seq__37031,chunk__37032,count__37033,i__37034,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37031,chunk__37032,count__37033,i__37034,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38403__$1);


var G__38405 = seq__37031;
var G__38406 = chunk__37032;
var G__38407 = count__37033;
var G__38408 = (i__37034 + (1));
seq__37031 = G__38405;
chunk__37032 = G__38406;
count__37033 = G__38407;
i__37034 = G__38408;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__37031);
if(temp__5816__auto__){
var seq__37031__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37031__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37031__$1);
var G__38409 = cljs.core.chunk_rest(seq__37031__$1);
var G__38410 = c__5568__auto__;
var G__38411 = cljs.core.count(c__5568__auto__);
var G__38412 = (0);
seq__37031 = G__38409;
chunk__37032 = G__38410;
count__37033 = G__38411;
i__37034 = G__38412;
continue;
} else {
var el = cljs.core.first(seq__37031__$1);
var handler_38415__$1 = ((function (seq__37031,chunk__37032,count__37033,i__37034,el,seq__37031__$1,temp__5816__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37031,chunk__37032,count__37033,i__37034,el,seq__37031__$1,temp__5816__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38415__$1);


var G__38416 = cljs.core.next(seq__37031__$1);
var G__38417 = null;
var G__38418 = (0);
var G__38419 = (0);
seq__37031 = G__38416;
chunk__37032 = G__38417;
count__37033 = G__38418;
i__37034 = G__38419;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__37049 = arguments.length;
switch (G__37049) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37081 = cljs.core.seq(events);
var chunk__37082 = null;
var count__37083 = (0);
var i__37084 = (0);
while(true){
if((i__37084 < count__37083)){
var vec__37100 = chunk__37082.cljs$core$IIndexed$_nth$arity$2(null,i__37084);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37100,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38431 = seq__37081;
var G__38432 = chunk__37082;
var G__38433 = count__37083;
var G__38434 = (i__37084 + (1));
seq__37081 = G__38431;
chunk__37082 = G__38432;
count__37083 = G__38433;
i__37084 = G__38434;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__37081);
if(temp__5816__auto__){
var seq__37081__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37081__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37081__$1);
var G__38441 = cljs.core.chunk_rest(seq__37081__$1);
var G__38442 = c__5568__auto__;
var G__38443 = cljs.core.count(c__5568__auto__);
var G__38444 = (0);
seq__37081 = G__38441;
chunk__37082 = G__38442;
count__37083 = G__38443;
i__37084 = G__38444;
continue;
} else {
var vec__37107 = cljs.core.first(seq__37081__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37107,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38452 = cljs.core.next(seq__37081__$1);
var G__38453 = null;
var G__38454 = (0);
var G__38455 = (0);
seq__37081 = G__38452;
chunk__37082 = G__38453;
count__37083 = G__38454;
i__37084 = G__38455;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__37124 = cljs.core.seq(styles);
var chunk__37125 = null;
var count__37126 = (0);
var i__37127 = (0);
while(true){
if((i__37127 < count__37126)){
var vec__37203 = chunk__37125.cljs$core$IIndexed$_nth$arity$2(null,i__37127);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37203,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38461 = seq__37124;
var G__38462 = chunk__37125;
var G__38463 = count__37126;
var G__38464 = (i__37127 + (1));
seq__37124 = G__38461;
chunk__37125 = G__38462;
count__37126 = G__38463;
i__37127 = G__38464;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__37124);
if(temp__5816__auto__){
var seq__37124__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37124__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37124__$1);
var G__38465 = cljs.core.chunk_rest(seq__37124__$1);
var G__38466 = c__5568__auto__;
var G__38467 = cljs.core.count(c__5568__auto__);
var G__38468 = (0);
seq__37124 = G__38465;
chunk__37125 = G__38466;
count__37126 = G__38467;
i__37127 = G__38468;
continue;
} else {
var vec__37219 = cljs.core.first(seq__37124__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37219,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37219,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38480 = cljs.core.next(seq__37124__$1);
var G__38481 = null;
var G__38482 = (0);
var G__38483 = (0);
seq__37124 = G__38480;
chunk__37125 = G__38481;
count__37126 = G__38482;
i__37127 = G__38483;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__37238_38484 = key;
var G__37238_38485__$1 = (((G__37238_38484 instanceof cljs.core.Keyword))?G__37238_38484.fqn:null);
switch (G__37238_38485__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_38514 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_38514,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_38514,"aria-");
}
})())){
el.setAttribute(ks_38514,value);
} else {
(el[ks_38514] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37302){
var map__37303 = p__37302;
var map__37303__$1 = cljs.core.__destructure_map(map__37303);
var props = map__37303__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37303__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37305 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37318 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37318,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37318;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37324 = arguments.length;
switch (G__37324) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5816__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5816__auto__)){
var n = temp__5816__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5816__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5816__auto__)){
var n = temp__5816__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37340){
var vec__37344 = p__37340;
var seq__37345 = cljs.core.seq(vec__37344);
var first__37346 = cljs.core.first(seq__37345);
var seq__37345__$1 = cljs.core.next(seq__37345);
var nn = first__37346;
var first__37346__$1 = cljs.core.first(seq__37345__$1);
var seq__37345__$2 = cljs.core.next(seq__37345__$1);
var np = first__37346__$1;
var nc = seq__37345__$2;
var node = vec__37344;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37350 = nn;
var G__37351 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37350,G__37351) : create_fn.call(null,G__37350,G__37351));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37354 = nn;
var G__37355 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37354,G__37355) : create_fn.call(null,G__37354,G__37355));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37360 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37360,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37360,(1),null);
var seq__37363_38545 = cljs.core.seq(node_children);
var chunk__37364_38546 = null;
var count__37365_38547 = (0);
var i__37366_38548 = (0);
while(true){
if((i__37366_38548 < count__37365_38547)){
var child_struct_38549 = chunk__37364_38546.cljs$core$IIndexed$_nth$arity$2(null,i__37366_38548);
var children_38550 = shadow.dom.dom_node(child_struct_38549);
if(cljs.core.seq_QMARK_(children_38550)){
var seq__37446_38551 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38550));
var chunk__37448_38552 = null;
var count__37449_38553 = (0);
var i__37450_38554 = (0);
while(true){
if((i__37450_38554 < count__37449_38553)){
var child_38555 = chunk__37448_38552.cljs$core$IIndexed$_nth$arity$2(null,i__37450_38554);
if(cljs.core.truth_(child_38555)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38555);


var G__38556 = seq__37446_38551;
var G__38557 = chunk__37448_38552;
var G__38558 = count__37449_38553;
var G__38559 = (i__37450_38554 + (1));
seq__37446_38551 = G__38556;
chunk__37448_38552 = G__38557;
count__37449_38553 = G__38558;
i__37450_38554 = G__38559;
continue;
} else {
var G__38560 = seq__37446_38551;
var G__38561 = chunk__37448_38552;
var G__38562 = count__37449_38553;
var G__38563 = (i__37450_38554 + (1));
seq__37446_38551 = G__38560;
chunk__37448_38552 = G__38561;
count__37449_38553 = G__38562;
i__37450_38554 = G__38563;
continue;
}
} else {
var temp__5816__auto___38564 = cljs.core.seq(seq__37446_38551);
if(temp__5816__auto___38564){
var seq__37446_38565__$1 = temp__5816__auto___38564;
if(cljs.core.chunked_seq_QMARK_(seq__37446_38565__$1)){
var c__5568__auto___38566 = cljs.core.chunk_first(seq__37446_38565__$1);
var G__38567 = cljs.core.chunk_rest(seq__37446_38565__$1);
var G__38568 = c__5568__auto___38566;
var G__38569 = cljs.core.count(c__5568__auto___38566);
var G__38570 = (0);
seq__37446_38551 = G__38567;
chunk__37448_38552 = G__38568;
count__37449_38553 = G__38569;
i__37450_38554 = G__38570;
continue;
} else {
var child_38571 = cljs.core.first(seq__37446_38565__$1);
if(cljs.core.truth_(child_38571)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38571);


var G__38572 = cljs.core.next(seq__37446_38565__$1);
var G__38573 = null;
var G__38574 = (0);
var G__38575 = (0);
seq__37446_38551 = G__38572;
chunk__37448_38552 = G__38573;
count__37449_38553 = G__38574;
i__37450_38554 = G__38575;
continue;
} else {
var G__38576 = cljs.core.next(seq__37446_38565__$1);
var G__38577 = null;
var G__38578 = (0);
var G__38579 = (0);
seq__37446_38551 = G__38576;
chunk__37448_38552 = G__38577;
count__37449_38553 = G__38578;
i__37450_38554 = G__38579;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38550);
}


var G__38580 = seq__37363_38545;
var G__38581 = chunk__37364_38546;
var G__38582 = count__37365_38547;
var G__38583 = (i__37366_38548 + (1));
seq__37363_38545 = G__38580;
chunk__37364_38546 = G__38581;
count__37365_38547 = G__38582;
i__37366_38548 = G__38583;
continue;
} else {
var temp__5816__auto___38584 = cljs.core.seq(seq__37363_38545);
if(temp__5816__auto___38584){
var seq__37363_38585__$1 = temp__5816__auto___38584;
if(cljs.core.chunked_seq_QMARK_(seq__37363_38585__$1)){
var c__5568__auto___38586 = cljs.core.chunk_first(seq__37363_38585__$1);
var G__38587 = cljs.core.chunk_rest(seq__37363_38585__$1);
var G__38588 = c__5568__auto___38586;
var G__38589 = cljs.core.count(c__5568__auto___38586);
var G__38590 = (0);
seq__37363_38545 = G__38587;
chunk__37364_38546 = G__38588;
count__37365_38547 = G__38589;
i__37366_38548 = G__38590;
continue;
} else {
var child_struct_38591 = cljs.core.first(seq__37363_38585__$1);
var children_38592 = shadow.dom.dom_node(child_struct_38591);
if(cljs.core.seq_QMARK_(children_38592)){
var seq__37487_38593 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38592));
var chunk__37489_38594 = null;
var count__37490_38595 = (0);
var i__37491_38596 = (0);
while(true){
if((i__37491_38596 < count__37490_38595)){
var child_38597 = chunk__37489_38594.cljs$core$IIndexed$_nth$arity$2(null,i__37491_38596);
if(cljs.core.truth_(child_38597)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38597);


var G__38598 = seq__37487_38593;
var G__38599 = chunk__37489_38594;
var G__38600 = count__37490_38595;
var G__38601 = (i__37491_38596 + (1));
seq__37487_38593 = G__38598;
chunk__37489_38594 = G__38599;
count__37490_38595 = G__38600;
i__37491_38596 = G__38601;
continue;
} else {
var G__38602 = seq__37487_38593;
var G__38603 = chunk__37489_38594;
var G__38604 = count__37490_38595;
var G__38605 = (i__37491_38596 + (1));
seq__37487_38593 = G__38602;
chunk__37489_38594 = G__38603;
count__37490_38595 = G__38604;
i__37491_38596 = G__38605;
continue;
}
} else {
var temp__5816__auto___38606__$1 = cljs.core.seq(seq__37487_38593);
if(temp__5816__auto___38606__$1){
var seq__37487_38607__$1 = temp__5816__auto___38606__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37487_38607__$1)){
var c__5568__auto___38608 = cljs.core.chunk_first(seq__37487_38607__$1);
var G__38609 = cljs.core.chunk_rest(seq__37487_38607__$1);
var G__38610 = c__5568__auto___38608;
var G__38611 = cljs.core.count(c__5568__auto___38608);
var G__38612 = (0);
seq__37487_38593 = G__38609;
chunk__37489_38594 = G__38610;
count__37490_38595 = G__38611;
i__37491_38596 = G__38612;
continue;
} else {
var child_38613 = cljs.core.first(seq__37487_38607__$1);
if(cljs.core.truth_(child_38613)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38613);


var G__38614 = cljs.core.next(seq__37487_38607__$1);
var G__38615 = null;
var G__38616 = (0);
var G__38617 = (0);
seq__37487_38593 = G__38614;
chunk__37489_38594 = G__38615;
count__37490_38595 = G__38616;
i__37491_38596 = G__38617;
continue;
} else {
var G__38619 = cljs.core.next(seq__37487_38607__$1);
var G__38620 = null;
var G__38621 = (0);
var G__38622 = (0);
seq__37487_38593 = G__38619;
chunk__37489_38594 = G__38620;
count__37490_38595 = G__38621;
i__37491_38596 = G__38622;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38592);
}


var G__38623 = cljs.core.next(seq__37363_38585__$1);
var G__38624 = null;
var G__38625 = (0);
var G__38626 = (0);
seq__37363_38545 = G__38623;
chunk__37364_38546 = G__38624;
count__37365_38547 = G__38625;
i__37366_38548 = G__38626;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37532 = cljs.core.seq(node);
var chunk__37533 = null;
var count__37534 = (0);
var i__37535 = (0);
while(true){
if((i__37535 < count__37534)){
var n = chunk__37533.cljs$core$IIndexed$_nth$arity$2(null,i__37535);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38633 = seq__37532;
var G__38634 = chunk__37533;
var G__38635 = count__37534;
var G__38636 = (i__37535 + (1));
seq__37532 = G__38633;
chunk__37533 = G__38634;
count__37534 = G__38635;
i__37535 = G__38636;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__37532);
if(temp__5816__auto__){
var seq__37532__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37532__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37532__$1);
var G__38637 = cljs.core.chunk_rest(seq__37532__$1);
var G__38638 = c__5568__auto__;
var G__38639 = cljs.core.count(c__5568__auto__);
var G__38640 = (0);
seq__37532 = G__38637;
chunk__37533 = G__38638;
count__37534 = G__38639;
i__37535 = G__38640;
continue;
} else {
var n = cljs.core.first(seq__37532__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38641 = cljs.core.next(seq__37532__$1);
var G__38642 = null;
var G__38643 = (0);
var G__38644 = (0);
seq__37532 = G__38641;
chunk__37533 = G__38642;
count__37534 = G__38643;
i__37535 = G__38644;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37557 = arguments.length;
switch (G__37557) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37568 = arguments.length;
switch (G__37568) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__37601 = arguments.length;
switch (G__37601) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38658 = arguments.length;
var i__5770__auto___38659 = (0);
while(true){
if((i__5770__auto___38659 < len__5769__auto___38658)){
args__5775__auto__.push((arguments[i__5770__auto___38659]));

var G__38660 = (i__5770__auto___38659 + (1));
i__5770__auto___38659 = G__38660;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37619_38662 = cljs.core.seq(nodes);
var chunk__37620_38663 = null;
var count__37621_38664 = (0);
var i__37622_38665 = (0);
while(true){
if((i__37622_38665 < count__37621_38664)){
var node_38666 = chunk__37620_38663.cljs$core$IIndexed$_nth$arity$2(null,i__37622_38665);
fragment.appendChild(shadow.dom._to_dom(node_38666));


var G__38667 = seq__37619_38662;
var G__38668 = chunk__37620_38663;
var G__38669 = count__37621_38664;
var G__38670 = (i__37622_38665 + (1));
seq__37619_38662 = G__38667;
chunk__37620_38663 = G__38668;
count__37621_38664 = G__38669;
i__37622_38665 = G__38670;
continue;
} else {
var temp__5816__auto___38671 = cljs.core.seq(seq__37619_38662);
if(temp__5816__auto___38671){
var seq__37619_38672__$1 = temp__5816__auto___38671;
if(cljs.core.chunked_seq_QMARK_(seq__37619_38672__$1)){
var c__5568__auto___38673 = cljs.core.chunk_first(seq__37619_38672__$1);
var G__38674 = cljs.core.chunk_rest(seq__37619_38672__$1);
var G__38675 = c__5568__auto___38673;
var G__38676 = cljs.core.count(c__5568__auto___38673);
var G__38677 = (0);
seq__37619_38662 = G__38674;
chunk__37620_38663 = G__38675;
count__37621_38664 = G__38676;
i__37622_38665 = G__38677;
continue;
} else {
var node_38678 = cljs.core.first(seq__37619_38672__$1);
fragment.appendChild(shadow.dom._to_dom(node_38678));


var G__38679 = cljs.core.next(seq__37619_38672__$1);
var G__38680 = null;
var G__38681 = (0);
var G__38682 = (0);
seq__37619_38662 = G__38679;
chunk__37620_38663 = G__38680;
count__37621_38664 = G__38681;
i__37622_38665 = G__38682;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37617){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37617));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37632_38685 = cljs.core.seq(scripts);
var chunk__37633_38686 = null;
var count__37634_38687 = (0);
var i__37635_38688 = (0);
while(true){
if((i__37635_38688 < count__37634_38687)){
var vec__37648_38689 = chunk__37633_38686.cljs$core$IIndexed$_nth$arity$2(null,i__37635_38688);
var script_tag_38690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37648_38689,(0),null);
var script_body_38691 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37648_38689,(1),null);
eval(script_body_38691);


var G__38692 = seq__37632_38685;
var G__38693 = chunk__37633_38686;
var G__38694 = count__37634_38687;
var G__38695 = (i__37635_38688 + (1));
seq__37632_38685 = G__38692;
chunk__37633_38686 = G__38693;
count__37634_38687 = G__38694;
i__37635_38688 = G__38695;
continue;
} else {
var temp__5816__auto___38696 = cljs.core.seq(seq__37632_38685);
if(temp__5816__auto___38696){
var seq__37632_38697__$1 = temp__5816__auto___38696;
if(cljs.core.chunked_seq_QMARK_(seq__37632_38697__$1)){
var c__5568__auto___38698 = cljs.core.chunk_first(seq__37632_38697__$1);
var G__38699 = cljs.core.chunk_rest(seq__37632_38697__$1);
var G__38700 = c__5568__auto___38698;
var G__38701 = cljs.core.count(c__5568__auto___38698);
var G__38702 = (0);
seq__37632_38685 = G__38699;
chunk__37633_38686 = G__38700;
count__37634_38687 = G__38701;
i__37635_38688 = G__38702;
continue;
} else {
var vec__37651_38703 = cljs.core.first(seq__37632_38697__$1);
var script_tag_38704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37651_38703,(0),null);
var script_body_38705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37651_38703,(1),null);
eval(script_body_38705);


var G__38706 = cljs.core.next(seq__37632_38697__$1);
var G__38707 = null;
var G__38708 = (0);
var G__38709 = (0);
seq__37632_38685 = G__38706;
chunk__37633_38686 = G__38707;
count__37634_38687 = G__38708;
i__37635_38688 = G__38709;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37658){
var vec__37659 = p__37658;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37659,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37659,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37680 = arguments.length;
switch (G__37680) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__37709 = cljs.core.seq(style_keys);
var chunk__37710 = null;
var count__37711 = (0);
var i__37712 = (0);
while(true){
if((i__37712 < count__37711)){
var it = chunk__37710.cljs$core$IIndexed$_nth$arity$2(null,i__37712);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38711 = seq__37709;
var G__38712 = chunk__37710;
var G__38713 = count__37711;
var G__38714 = (i__37712 + (1));
seq__37709 = G__38711;
chunk__37710 = G__38712;
count__37711 = G__38713;
i__37712 = G__38714;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__37709);
if(temp__5816__auto__){
var seq__37709__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37709__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37709__$1);
var G__38715 = cljs.core.chunk_rest(seq__37709__$1);
var G__38716 = c__5568__auto__;
var G__38717 = cljs.core.count(c__5568__auto__);
var G__38718 = (0);
seq__37709 = G__38715;
chunk__37710 = G__38716;
count__37711 = G__38717;
i__37712 = G__38718;
continue;
} else {
var it = cljs.core.first(seq__37709__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38719 = cljs.core.next(seq__37709__$1);
var G__38720 = null;
var G__38721 = (0);
var G__38722 = (0);
seq__37709 = G__38719;
chunk__37710 = G__38720;
count__37711 = G__38721;
i__37712 = G__38722;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37725,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37736 = k37725;
var G__37736__$1 = (((G__37736 instanceof cljs.core.Keyword))?G__37736.fqn:null);
switch (G__37736__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37725,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37748){
var vec__37749 = p__37748;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37749,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37749,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37724){
var self__ = this;
var G__37724__$1 = this;
return (new cljs.core.RecordIter((0),G__37724__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37726,other37727){
var self__ = this;
var this37726__$1 = this;
return (((!((other37727 == null)))) && ((((this37726__$1.constructor === other37727.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37726__$1.x,other37727.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37726__$1.y,other37727.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37726__$1.__extmap,other37727.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37725){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37798 = k37725;
var G__37798__$1 = (((G__37798 instanceof cljs.core.Keyword))?G__37798.fqn:null);
switch (G__37798__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37725);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37724){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37802 = cljs.core.keyword_identical_QMARK_;
var expr__37803 = k__5352__auto__;
if(cljs.core.truth_((pred__37802.cljs$core$IFn$_invoke$arity$2 ? pred__37802.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37803) : pred__37802.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37803)))){
return (new shadow.dom.Coordinate(G__37724,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37802.cljs$core$IFn$_invoke$arity$2 ? pred__37802.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37803) : pred__37802.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37803)))){
return (new shadow.dom.Coordinate(self__.x,G__37724,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37724),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37724){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37724,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37728){
var extmap__5385__auto__ = (function (){var G__37825 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37728,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37728)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37825);
} else {
return G__37825;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37728),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37728),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k37842,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__37850 = k37842;
var G__37850__$1 = (((G__37850 instanceof cljs.core.Keyword))?G__37850.fqn:null);
switch (G__37850__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37842,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__37854){
var vec__37855 = p__37854;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37855,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37855,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37841){
var self__ = this;
var G__37841__$1 = this;
return (new cljs.core.RecordIter((0),G__37841__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37843,other37844){
var self__ = this;
var this37843__$1 = this;
return (((!((other37844 == null)))) && ((((this37843__$1.constructor === other37844.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37843__$1.w,other37844.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37843__$1.h,other37844.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37843__$1.__extmap,other37844.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k37842){
var self__ = this;
var this__5350__auto____$1 = this;
var G__37928 = k37842;
var G__37928__$1 = (((G__37928 instanceof cljs.core.Keyword))?G__37928.fqn:null);
switch (G__37928__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k37842);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__37841){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__37930 = cljs.core.keyword_identical_QMARK_;
var expr__37931 = k__5352__auto__;
if(cljs.core.truth_((pred__37930.cljs$core$IFn$_invoke$arity$2 ? pred__37930.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37931) : pred__37930.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37931)))){
return (new shadow.dom.Size(G__37841,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37930.cljs$core$IFn$_invoke$arity$2 ? pred__37930.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37931) : pred__37930.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37931)))){
return (new shadow.dom.Size(self__.w,G__37841,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__37841),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__37841){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37841,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37845){
var extmap__5385__auto__ = (function (){var G__37950 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37845,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37845)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37950);
} else {
return G__37950;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37845),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37845),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__38752 = (i + (1));
var G__38753 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38752;
ret = G__38753;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37976){
var vec__37977 = p__37976;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37977,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37977,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37988 = arguments.length;
switch (G__37988) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5814__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5814__auto__)){
var child = temp__5814__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__38762 = ps;
var G__38763 = (i + (1));
el__$1 = G__38762;
i = G__38763;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__38034 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38034,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38034,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38034,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38044_38766 = cljs.core.seq(props);
var chunk__38045_38767 = null;
var count__38046_38768 = (0);
var i__38047_38769 = (0);
while(true){
if((i__38047_38769 < count__38046_38768)){
var vec__38061_38770 = chunk__38045_38767.cljs$core$IIndexed$_nth$arity$2(null,i__38047_38769);
var k_38771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38061_38770,(0),null);
var v_38772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38061_38770,(1),null);
el.setAttributeNS((function (){var temp__5816__auto__ = cljs.core.namespace(k_38771);
if(cljs.core.truth_(temp__5816__auto__)){
var ns = temp__5816__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38771),v_38772);


var G__38773 = seq__38044_38766;
var G__38774 = chunk__38045_38767;
var G__38775 = count__38046_38768;
var G__38776 = (i__38047_38769 + (1));
seq__38044_38766 = G__38773;
chunk__38045_38767 = G__38774;
count__38046_38768 = G__38775;
i__38047_38769 = G__38776;
continue;
} else {
var temp__5816__auto___38777 = cljs.core.seq(seq__38044_38766);
if(temp__5816__auto___38777){
var seq__38044_38778__$1 = temp__5816__auto___38777;
if(cljs.core.chunked_seq_QMARK_(seq__38044_38778__$1)){
var c__5568__auto___38779 = cljs.core.chunk_first(seq__38044_38778__$1);
var G__38780 = cljs.core.chunk_rest(seq__38044_38778__$1);
var G__38781 = c__5568__auto___38779;
var G__38782 = cljs.core.count(c__5568__auto___38779);
var G__38783 = (0);
seq__38044_38766 = G__38780;
chunk__38045_38767 = G__38781;
count__38046_38768 = G__38782;
i__38047_38769 = G__38783;
continue;
} else {
var vec__38065_38784 = cljs.core.first(seq__38044_38778__$1);
var k_38785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38065_38784,(0),null);
var v_38786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38065_38784,(1),null);
el.setAttributeNS((function (){var temp__5816__auto____$1 = cljs.core.namespace(k_38785);
if(cljs.core.truth_(temp__5816__auto____$1)){
var ns = temp__5816__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38785),v_38786);


var G__38788 = cljs.core.next(seq__38044_38778__$1);
var G__38789 = null;
var G__38790 = (0);
var G__38791 = (0);
seq__38044_38766 = G__38788;
chunk__38045_38767 = G__38789;
count__38046_38768 = G__38790;
i__38047_38769 = G__38791;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__38079 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38079,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38079,(1),null);
var seq__38082_38792 = cljs.core.seq(node_children);
var chunk__38084_38793 = null;
var count__38085_38794 = (0);
var i__38086_38795 = (0);
while(true){
if((i__38086_38795 < count__38085_38794)){
var child_struct_38796 = chunk__38084_38793.cljs$core$IIndexed$_nth$arity$2(null,i__38086_38795);
if((!((child_struct_38796 == null)))){
if(typeof child_struct_38796 === 'string'){
var text_38797 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38797),child_struct_38796].join(''));
} else {
var children_38798 = shadow.dom.svg_node(child_struct_38796);
if(cljs.core.seq_QMARK_(children_38798)){
var seq__38153_38799 = cljs.core.seq(children_38798);
var chunk__38155_38800 = null;
var count__38156_38801 = (0);
var i__38157_38802 = (0);
while(true){
if((i__38157_38802 < count__38156_38801)){
var child_38803 = chunk__38155_38800.cljs$core$IIndexed$_nth$arity$2(null,i__38157_38802);
if(cljs.core.truth_(child_38803)){
node.appendChild(child_38803);


var G__38804 = seq__38153_38799;
var G__38805 = chunk__38155_38800;
var G__38806 = count__38156_38801;
var G__38807 = (i__38157_38802 + (1));
seq__38153_38799 = G__38804;
chunk__38155_38800 = G__38805;
count__38156_38801 = G__38806;
i__38157_38802 = G__38807;
continue;
} else {
var G__38808 = seq__38153_38799;
var G__38809 = chunk__38155_38800;
var G__38810 = count__38156_38801;
var G__38811 = (i__38157_38802 + (1));
seq__38153_38799 = G__38808;
chunk__38155_38800 = G__38809;
count__38156_38801 = G__38810;
i__38157_38802 = G__38811;
continue;
}
} else {
var temp__5816__auto___38812 = cljs.core.seq(seq__38153_38799);
if(temp__5816__auto___38812){
var seq__38153_38813__$1 = temp__5816__auto___38812;
if(cljs.core.chunked_seq_QMARK_(seq__38153_38813__$1)){
var c__5568__auto___38814 = cljs.core.chunk_first(seq__38153_38813__$1);
var G__38815 = cljs.core.chunk_rest(seq__38153_38813__$1);
var G__38816 = c__5568__auto___38814;
var G__38817 = cljs.core.count(c__5568__auto___38814);
var G__38818 = (0);
seq__38153_38799 = G__38815;
chunk__38155_38800 = G__38816;
count__38156_38801 = G__38817;
i__38157_38802 = G__38818;
continue;
} else {
var child_38819 = cljs.core.first(seq__38153_38813__$1);
if(cljs.core.truth_(child_38819)){
node.appendChild(child_38819);


var G__38820 = cljs.core.next(seq__38153_38813__$1);
var G__38821 = null;
var G__38822 = (0);
var G__38823 = (0);
seq__38153_38799 = G__38820;
chunk__38155_38800 = G__38821;
count__38156_38801 = G__38822;
i__38157_38802 = G__38823;
continue;
} else {
var G__38824 = cljs.core.next(seq__38153_38813__$1);
var G__38825 = null;
var G__38826 = (0);
var G__38827 = (0);
seq__38153_38799 = G__38824;
chunk__38155_38800 = G__38825;
count__38156_38801 = G__38826;
i__38157_38802 = G__38827;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38798);
}
}


var G__38828 = seq__38082_38792;
var G__38829 = chunk__38084_38793;
var G__38830 = count__38085_38794;
var G__38831 = (i__38086_38795 + (1));
seq__38082_38792 = G__38828;
chunk__38084_38793 = G__38829;
count__38085_38794 = G__38830;
i__38086_38795 = G__38831;
continue;
} else {
var G__38832 = seq__38082_38792;
var G__38833 = chunk__38084_38793;
var G__38834 = count__38085_38794;
var G__38835 = (i__38086_38795 + (1));
seq__38082_38792 = G__38832;
chunk__38084_38793 = G__38833;
count__38085_38794 = G__38834;
i__38086_38795 = G__38835;
continue;
}
} else {
var temp__5816__auto___38836 = cljs.core.seq(seq__38082_38792);
if(temp__5816__auto___38836){
var seq__38082_38837__$1 = temp__5816__auto___38836;
if(cljs.core.chunked_seq_QMARK_(seq__38082_38837__$1)){
var c__5568__auto___38838 = cljs.core.chunk_first(seq__38082_38837__$1);
var G__38839 = cljs.core.chunk_rest(seq__38082_38837__$1);
var G__38840 = c__5568__auto___38838;
var G__38841 = cljs.core.count(c__5568__auto___38838);
var G__38842 = (0);
seq__38082_38792 = G__38839;
chunk__38084_38793 = G__38840;
count__38085_38794 = G__38841;
i__38086_38795 = G__38842;
continue;
} else {
var child_struct_38843 = cljs.core.first(seq__38082_38837__$1);
if((!((child_struct_38843 == null)))){
if(typeof child_struct_38843 === 'string'){
var text_38844 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38844),child_struct_38843].join(''));
} else {
var children_38845 = shadow.dom.svg_node(child_struct_38843);
if(cljs.core.seq_QMARK_(children_38845)){
var seq__38189_38846 = cljs.core.seq(children_38845);
var chunk__38191_38847 = null;
var count__38192_38848 = (0);
var i__38193_38849 = (0);
while(true){
if((i__38193_38849 < count__38192_38848)){
var child_38856 = chunk__38191_38847.cljs$core$IIndexed$_nth$arity$2(null,i__38193_38849);
if(cljs.core.truth_(child_38856)){
node.appendChild(child_38856);


var G__38857 = seq__38189_38846;
var G__38858 = chunk__38191_38847;
var G__38859 = count__38192_38848;
var G__38860 = (i__38193_38849 + (1));
seq__38189_38846 = G__38857;
chunk__38191_38847 = G__38858;
count__38192_38848 = G__38859;
i__38193_38849 = G__38860;
continue;
} else {
var G__38861 = seq__38189_38846;
var G__38862 = chunk__38191_38847;
var G__38863 = count__38192_38848;
var G__38864 = (i__38193_38849 + (1));
seq__38189_38846 = G__38861;
chunk__38191_38847 = G__38862;
count__38192_38848 = G__38863;
i__38193_38849 = G__38864;
continue;
}
} else {
var temp__5816__auto___38865__$1 = cljs.core.seq(seq__38189_38846);
if(temp__5816__auto___38865__$1){
var seq__38189_38866__$1 = temp__5816__auto___38865__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38189_38866__$1)){
var c__5568__auto___38867 = cljs.core.chunk_first(seq__38189_38866__$1);
var G__38868 = cljs.core.chunk_rest(seq__38189_38866__$1);
var G__38869 = c__5568__auto___38867;
var G__38870 = cljs.core.count(c__5568__auto___38867);
var G__38871 = (0);
seq__38189_38846 = G__38868;
chunk__38191_38847 = G__38869;
count__38192_38848 = G__38870;
i__38193_38849 = G__38871;
continue;
} else {
var child_38876 = cljs.core.first(seq__38189_38866__$1);
if(cljs.core.truth_(child_38876)){
node.appendChild(child_38876);


var G__38877 = cljs.core.next(seq__38189_38866__$1);
var G__38878 = null;
var G__38879 = (0);
var G__38880 = (0);
seq__38189_38846 = G__38877;
chunk__38191_38847 = G__38878;
count__38192_38848 = G__38879;
i__38193_38849 = G__38880;
continue;
} else {
var G__38881 = cljs.core.next(seq__38189_38866__$1);
var G__38882 = null;
var G__38883 = (0);
var G__38884 = (0);
seq__38189_38846 = G__38881;
chunk__38191_38847 = G__38882;
count__38192_38848 = G__38883;
i__38193_38849 = G__38884;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38845);
}
}


var G__38885 = cljs.core.next(seq__38082_38837__$1);
var G__38886 = null;
var G__38887 = (0);
var G__38888 = (0);
seq__38082_38792 = G__38885;
chunk__38084_38793 = G__38886;
count__38085_38794 = G__38887;
i__38086_38795 = G__38888;
continue;
} else {
var G__38889 = cljs.core.next(seq__38082_38837__$1);
var G__38890 = null;
var G__38891 = (0);
var G__38892 = (0);
seq__38082_38792 = G__38889;
chunk__38084_38793 = G__38890;
count__38085_38794 = G__38891;
i__38086_38795 = G__38892;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38894 = arguments.length;
var i__5770__auto___38895 = (0);
while(true){
if((i__5770__auto___38895 < len__5769__auto___38894)){
args__5775__auto__.push((arguments[i__5770__auto___38895]));

var G__38896 = (i__5770__auto___38895 + (1));
i__5770__auto___38895 = G__38896;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38227){
var G__38228 = cljs.core.first(seq38227);
var seq38227__$1 = cljs.core.next(seq38227);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38228,seq38227__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__38260 = arguments.length;
switch (G__38260) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33582__auto___38908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33584__auto__ = (function (){var switch__33064__auto__ = (function (state_38293){
var state_val_38294 = (state_38293[(1)]);
if((state_val_38294 === (1))){
var state_38293__$1 = state_38293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38293__$1,(2),once_or_cleanup);
} else {
if((state_val_38294 === (2))){
var inst_38288 = (state_38293[(2)]);
var inst_38289 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38293__$1 = (function (){var statearr_38311 = state_38293;
(statearr_38311[(7)] = inst_38288);

return statearr_38311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38293__$1,inst_38289);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33065__auto__ = null;
var shadow$dom$state_machine__33065__auto____0 = (function (){
var statearr_38317 = [null,null,null,null,null,null,null,null];
(statearr_38317[(0)] = shadow$dom$state_machine__33065__auto__);

(statearr_38317[(1)] = (1));

return statearr_38317;
});
var shadow$dom$state_machine__33065__auto____1 = (function (state_38293){
while(true){
var ret_value__33066__auto__ = (function (){try{while(true){
var result__33067__auto__ = switch__33064__auto__(state_38293);
if(cljs.core.keyword_identical_QMARK_(result__33067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33067__auto__;
}
break;
}
}catch (e38321){var ex__33068__auto__ = e38321;
var statearr_38323_38909 = state_38293;
(statearr_38323_38909[(2)] = ex__33068__auto__);


if(cljs.core.seq((state_38293[(4)]))){
var statearr_38325_38910 = state_38293;
(statearr_38325_38910[(1)] = cljs.core.first((state_38293[(4)])));

} else {
throw ex__33068__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33066__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38911 = state_38293;
state_38293 = G__38911;
continue;
} else {
return ret_value__33066__auto__;
}
break;
}
});
shadow$dom$state_machine__33065__auto__ = function(state_38293){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33065__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33065__auto____1.call(this,state_38293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33065__auto____0;
shadow$dom$state_machine__33065__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33065__auto____1;
return shadow$dom$state_machine__33065__auto__;
})()
})();
var state__33585__auto__ = (function (){var statearr_38327 = f__33584__auto__();
(statearr_38327[(6)] = c__33582__auto___38908);

return statearr_38327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33585__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
