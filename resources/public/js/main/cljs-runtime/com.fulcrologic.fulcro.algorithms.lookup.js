goog.provide('com.fulcrologic.fulcro.algorithms.lookup');
/**
 * Get the current value of a particular Fulcro plugin algorithm.  These are set by default and can be overridden
 *   when you create your fulcro app.
 * 
 *   `app` - The application
 *   `k` - the algorithm to obtain. This can be a plain keyword or a symbol of the algorithm desired.
 * 
 *   Supported algorithms that can be obtained/overridden in Fulcro (check the source of app/fulcro-app if you suspect this is out
 *   of date, which is likely is):
 * 
 *   - `:global-eql-transform` - A `(fn [tx] tx')` that is applied to all outgoing requests (when using default `tx!`).
 *   Defaults to stripping things like `:ui/*` and form state config joins.
 *   - `:remote-error?` - A `(fn [result] boolean)` that defines what a remote error is.
 *   - `:global-error-action` - A `(fn [env] ...)` that is run on any remote error (as defined by `remote-error?`).
 *   - `:optimized-render!` - The concrete render algorithm for optimized renders (not root refreshes)
 *   - `:render!` - The top-level render function. Calls root render or optimized render by default. Renders on the calling thread.
 *   - `:schedule-render!` - The call that schedules a render. Defaults to using `js/requestAnimationFrame`.
 *   - `:default-result-action!` -  The action used for remote results in all mutations that do not have a `result-action` section.
 *   - `:index-root!` - The algorithm that scans the current query from root an indexes all classes by their queries.
 *   - `:index-component!` - The algorithm that adds a component to indexes when it mounts.
 *   - `:drop-component!` - The algorithm that removes a component from indexes when it unmounts.
 *   - `:props-middleware` - Middleware that can modify `props` for all components.
 *   - `:render-middleware` - Middlware that wraps all `render` methods of `defsc` components.
 *   - `:before-render - A function `(fn [app RootClass])` that is called after a transaction completes, just BEFORE
 *  rendering. This function is allowed to affect the state atom to do things like compute dynamic derived state. Prefer
 *  this over an atom watch, since it will be called less frequently that an atom watch. This will be called EVEN IF
 *  Fulcro is running "headless". So, it can be thought of as `after-transaction`.
 * 
 *   Returns nil if the algorithm is currently undefined.
 *   
 */
com.fulcrologic.fulcro.algorithms.lookup.app_algorithm = (function com$fulcrologic$fulcro$algorithms$lookup$app_algorithm(p__49316,k){
var map__49317 = p__49316;
var map__49317__$1 = cljs.core.__destructure_map(map__49317);
var app = map__49317__$1;
var algorithms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49317__$1,new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538));
var temp__5816__auto__ = ((((typeof k === 'string') || ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("com.fulcrologic.fulcro.algorithm",cljs.core.name(k)):null);
if(cljs.core.truth_(temp__5816__auto__)){
var nm = temp__5816__auto__;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.fulcrologic.fulcro.application","algorithms","com.fulcrologic.fulcro.application/algorithms",-397334538),nm], null),null);
} else {
return null;
}
});

//# sourceMappingURL=com.fulcrologic.fulcro.algorithms.lookup.js.map
