(ns test
  (:require [com.fulcrologic.semantic-ui.modules.popup.ui-popup :refer [ui-popup]]))

;formatting of this help string works as expected
(defn foo
 "Increments x if it is positive, otherwise returns x.
  
  - x: a number
  - returns: a number" 
  [x]
  (if (pos? x)
    (inc x)
    x))

(foo 1)

(def ui-popup-1 (ui-popup {:content "Hello, world!"}))

(defn init []
  (js/console.log "Hello, world!"))