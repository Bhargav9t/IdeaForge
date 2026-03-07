(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function vh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xh = { exports: {} },
  js = {},
  wh = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vo = Symbol.for("react.element"),
  Yy = Symbol.for("react.portal"),
  Qy = Symbol.for("react.fragment"),
  Ky = Symbol.for("react.strict_mode"),
  qy = Symbol.for("react.profiler"),
  Gy = Symbol.for("react.provider"),
  Zy = Symbol.for("react.context"),
  Jy = Symbol.for("react.forward_ref"),
  ev = Symbol.for("react.suspense"),
  tv = Symbol.for("react.memo"),
  nv = Symbol.for("react.lazy"),
  Hc = Symbol.iterator;
function rv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hc && e[Hc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Eh = Object.assign,
  kh = {};
function Lr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = kh),
    (this.updater = n || Sh));
}
Lr.prototype.isReactComponent = {};
Lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _h() {}
_h.prototype = Lr.prototype;
function mu(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = kh),
    (this.updater = n || Sh));
}
var gu = (mu.prototype = new _h());
gu.constructor = mu;
Eh(gu, Lr.prototype);
gu.isPureReactComponent = !0;
var Bc = Array.isArray,
  Nh = Object.prototype.hasOwnProperty,
  yu = { current: null },
  Ch = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ph(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Nh.call(t, r) && !Ch.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Vo,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: yu.current,
  };
}
function ov(e, t) {
  return {
    $$typeof: Vo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function vu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vo;
}
function iv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vc = /\/+/g;
function vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? iv("" + e.key)
    : t.toString(36);
}
function Li(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vo:
          case Yy:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + vl(s, 0) : r),
      Bc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Vc, "$&/") + "/"),
          Li(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (vu(o) &&
            (o = ov(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Vc, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Bc(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + vl(i, l);
      s += Li(i, t, n, a, o);
    }
  else if (((a = rv(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      ((i = i.value), (a = r + vl(i, l++)), (s += Li(i, t, n, a, o)));
  else if (i === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function li(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Li(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function sv(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var $e = { current: null },
  zi = { transition: null },
  lv = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: zi,
    ReactCurrentOwner: yu,
  };
function Mh() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = {
  map: li,
  forEach: function (e, t, n) {
    li(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      li(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      li(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!vu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
re.Component = Lr;
re.Fragment = Qy;
re.Profiler = qy;
re.PureComponent = mu;
re.StrictMode = Ky;
re.Suspense = ev;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lv;
re.act = Mh;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Eh({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = yu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Nh.call(t, a) &&
        !Ch.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Vo, type: e.type, key: o, ref: i, props: r, _owner: s };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Gy, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = Ph;
re.createFactory = function (e) {
  var t = Ph.bind(null, e);
  return ((t.type = e), t);
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: Jy, render: e };
};
re.isValidElement = vu;
re.lazy = function (e) {
  return { $$typeof: nv, _payload: { _status: -1, _result: e }, _init: sv };
};
re.memo = function (e, t) {
  return { $$typeof: tv, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = zi.transition;
  zi.transition = {};
  try {
    e();
  } finally {
    zi.transition = t;
  }
};
re.unstable_act = Mh;
re.useCallback = function (e, t) {
  return $e.current.useCallback(e, t);
};
re.useContext = function (e) {
  return $e.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
  return $e.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return $e.current.useEffect(e, t);
};
re.useId = function () {
  return $e.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return $e.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return $e.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return $e.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return $e.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return $e.current.useRef(e);
};
re.useState = function (e) {
  return $e.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return $e.current.useTransition();
};
re.version = "18.3.1";
wh.exports = re;
var I = wh.exports;
const bh = vh(I);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var av = I,
  uv = Symbol.for("react.element"),
  cv = Symbol.for("react.fragment"),
  fv = Object.prototype.hasOwnProperty,
  dv = av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Th(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  (n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) fv.call(t, r) && !hv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: uv,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: dv.current,
  };
}
js.Fragment = cv;
js.jsx = Th;
js.jsxs = Th;
xh.exports = js;
var S = xh.exports,
  oa = {},
  Rh = { exports: {} },
  tt = {},
  Ah = { exports: {} },
  Ih = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, P) {
    var A = N.length;
    N.push(P);
    e: for (; 0 < A; ) {
      var D = (A - 1) >>> 1,
        $ = N[D];
      if (0 < o($, P)) ((N[D] = P), (N[A] = $), (A = D));
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var P = N[0],
      A = N.pop();
    if (A !== P) {
      N[0] = A;
      e: for (var D = 0, $ = N.length, W = $ >>> 1; D < W; ) {
        var U = 2 * (D + 1) - 1,
          Y = N[U],
          Q = U + 1,
          q = N[Q];
        if (0 > o(Y, A))
          Q < $ && 0 > o(q, Y)
            ? ((N[D] = q), (N[Q] = A), (D = Q))
            : ((N[D] = Y), (N[U] = A), (D = U));
        else if (Q < $ && 0 > o(q, A)) ((N[D] = q), (N[Q] = A), (D = Q));
        else break e;
      }
    }
    return P;
  }
  function o(N, P) {
    var A = N.sortIndex - P.sortIndex;
    return A !== 0 ? A : N.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    f = 1,
    c = null,
    d = 3,
    y = !1,
    p = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var P = n(u); P !== null; ) {
      if (P.callback === null) r(u);
      else if (P.startTime <= N)
        (r(u), (P.sortIndex = P.expirationTime), t(a, P));
      else break;
      P = n(u);
    }
  }
  function x(N) {
    if (((v = !1), h(N), !p))
      if (n(a) !== null) ((p = !0), b(E));
      else {
        var P = n(u);
        P !== null && j(x, P.startTime - N);
      }
  }
  function E(N, P) {
    ((p = !1), v && ((v = !1), m(M), (M = -1)), (y = !0));
    var A = d;
    try {
      for (
        h(P), c = n(a);
        c !== null && (!(c.expirationTime > P) || (N && !T()));
      ) {
        var D = c.callback;
        if (typeof D == "function") {
          ((c.callback = null), (d = c.priorityLevel));
          var $ = D(c.expirationTime <= P);
          ((P = e.unstable_now()),
            typeof $ == "function" ? (c.callback = $) : c === n(a) && r(a),
            h(P));
        } else r(a);
        c = n(a);
      }
      if (c !== null) var W = !0;
      else {
        var U = n(u);
        (U !== null && j(x, U.startTime - P), (W = !1));
      }
      return W;
    } finally {
      ((c = null), (d = A), (y = !1));
    }
  }
  var k = !1,
    _ = null,
    M = -1,
    R = 5,
    F = -1;
  function T() {
    return !(e.unstable_now() - F < R);
  }
  function L() {
    if (_ !== null) {
      var N = e.unstable_now();
      F = N;
      var P = !0;
      try {
        P = _(!0, N);
      } finally {
        P ? H() : ((k = !1), (_ = null));
      }
    } else k = !1;
  }
  var H;
  if (typeof g == "function")
    H = function () {
      g(L);
    };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(),
      z = C.port2;
    ((C.port1.onmessage = L),
      (H = function () {
        z.postMessage(null);
      }));
  } else
    H = function () {
      w(L, 0);
    };
  function b(N) {
    ((_ = N), k || ((k = !0), H()));
  }
  function j(N, P) {
    M = w(function () {
      N(e.unstable_now());
    }, P);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || y || ((p = !0), b(E));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (R = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = d;
      }
      var A = d;
      d = P;
      try {
        return N();
      } finally {
        d = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, P) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var A = d;
      d = N;
      try {
        return P();
      } finally {
        d = A;
      }
    }),
    (e.unstable_scheduleCallback = function (N, P, A) {
      var D = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? D + A : D))
          : (A = D),
        N)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = A + $),
        (N = {
          id: f++,
          callback: P,
          priorityLevel: N,
          startTime: A,
          expirationTime: $,
          sortIndex: -1,
        }),
        A > D
          ? ((N.sortIndex = A),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (v ? (m(M), (M = -1)) : (v = !0), j(x, A - D)))
          : ((N.sortIndex = $), t(a, N), p || y || ((p = !0), b(E))),
        N
      );
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (N) {
      var P = d;
      return function () {
        var A = d;
        d = P;
        try {
          return N.apply(this, arguments);
        } finally {
          d = A;
        }
      };
    }));
})(Ih);
Ah.exports = Ih;
var pv = Ah.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mv = I,
  Je = pv;
function B(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lh = new Set(),
  yo = {};
function Vn(e, t) {
  (gr(e, t), gr(e + "Capture", t));
}
function gr(e, t) {
  for (yo[e] = t, e = 0; e < t.length; e++) Lh.add(t[e]);
}
var Ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ia = Object.prototype.hasOwnProperty,
  gv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uc = {},
  Wc = {};
function yv(e) {
  return ia.call(Wc, e)
    ? !0
    : ia.call(Uc, e)
      ? !1
      : gv.test(e)
        ? (Wc[e] = !0)
        : ((Uc[e] = !0), !1);
}
function vv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xv(e, t, n, r) {
  if (t === null || typeof t > "u" || vv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, o, i, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s));
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Te[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Te[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Te[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Te[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Te[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Te[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Te[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xu = /[\-:]([a-z])/g;
function wu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xu, wu);
    Te[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xu, wu);
    Te[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(xu, wu);
  Te[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Te[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Te[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Su(e, t, n, r) {
  var o = Te.hasOwnProperty(t) ? Te[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xv(t, n, o, r) && (n = null),
    r || o === null
      ? yv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wt = mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ai = Symbol.for("react.element"),
  Qn = Symbol.for("react.portal"),
  Kn = Symbol.for("react.fragment"),
  Eu = Symbol.for("react.strict_mode"),
  sa = Symbol.for("react.profiler"),
  zh = Symbol.for("react.provider"),
  jh = Symbol.for("react.context"),
  ku = Symbol.for("react.forward_ref"),
  la = Symbol.for("react.suspense"),
  aa = Symbol.for("react.suspense_list"),
  _u = Symbol.for("react.memo"),
  Gt = Symbol.for("react.lazy"),
  Oh = Symbol.for("react.offscreen"),
  Xc = Symbol.iterator;
function Br(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xc && e[Xc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ve = Object.assign,
  xl;
function Jr(e) {
  if (xl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xl = (t && t[1]) || "";
    }
  return (
    `
` +
    xl +
    e
  );
}
var wl = !1;
function Sl(e, t) {
  if (!e || wl) return "";
  wl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];
      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    ((wl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Jr(e) : "";
}
function wv(e) {
  switch (e.tag) {
    case 5:
      return Jr(e.type);
    case 16:
      return Jr("Lazy");
    case 13:
      return Jr("Suspense");
    case 19:
      return Jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Sl(e.type, !1)), e);
    case 11:
      return ((e = Sl(e.type.render, !1)), e);
    case 1:
      return ((e = Sl(e.type, !0)), e);
    default:
      return "";
  }
}
function ua(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kn:
      return "Fragment";
    case Qn:
      return "Portal";
    case sa:
      return "Profiler";
    case Eu:
      return "StrictMode";
    case la:
      return "Suspense";
    case aa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case jh:
        return (e.displayName || "Context") + ".Consumer";
      case zh:
        return (e._context.displayName || "Context") + ".Provider";
      case ku:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _u:
        return (
          (t = e.displayName || null),
          t !== null ? t : ua(e.type) || "Memo"
        );
      case Gt:
        ((t = e._payload), (e = e._init));
        try {
          return ua(e(t));
        } catch {}
    }
  return null;
}
function Sv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ua(t);
    case 8:
      return t === Eu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Dh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ev(e) {
  var t = Dh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          ((r = "" + s), i.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function ui(e) {
  e._valueTracker || (e._valueTracker = Ev(e));
}
function $h(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Dh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function es(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ca(e, t) {
  var n = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Yc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = pn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Fh(e, t) {
  ((t = t.checked), t != null && Su(e, "checked", t, !1));
}
function fa(e, t) {
  Fh(e, t);
  var n = pn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? da(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && da(e, t.type, pn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Qc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function da(e, t, n) {
  (t !== "number" || es(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var eo = Array.isArray;
function ar(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + pn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ha(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Kc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(B(92));
      if (eo(n)) {
        if (1 < n.length) throw Error(B(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: pn(n) };
}
function Hh(e, t) {
  var n = pn(t.value),
    r = pn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function qc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Bh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Bh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ci,
  Vh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ci = ci || document.createElement("div"),
          ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ci.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function vo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var io = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  kv = ["Webkit", "ms", "Moz", "O"];
Object.keys(io).forEach(function (e) {
  kv.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (io[t] = io[e]));
  });
});
function Uh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (io.hasOwnProperty(e) && io[e])
      ? ("" + t).trim()
      : t + "px";
}
function Wh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Uh(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var _v = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ma(e, t) {
  if (t) {
    if (_v[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(B(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(B(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(B(62));
  }
}
function ga(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ya = null;
function Nu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var va = null,
  ur = null,
  cr = null;
function Gc(e) {
  if ((e = Xo(e))) {
    if (typeof va != "function") throw Error(B(280));
    var t = e.stateNode;
    t && ((t = Hs(t)), va(e.stateNode, e.type, t));
  }
}
function Xh(e) {
  ur ? (cr ? cr.push(e) : (cr = [e])) : (ur = e);
}
function Yh() {
  if (ur) {
    var e = ur,
      t = cr;
    if (((cr = ur = null), Gc(e), t)) for (e = 0; e < t.length; e++) Gc(t[e]);
  }
}
function Qh(e, t) {
  return e(t);
}
function Kh() {}
var El = !1;
function qh(e, t, n) {
  if (El) return e(t, n);
  El = !0;
  try {
    return Qh(e, t, n);
  } finally {
    ((El = !1), (ur !== null || cr !== null) && (Kh(), Yh()));
  }
}
function xo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Hs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(B(231, t, typeof n));
  return n;
}
var xa = !1;
if (Ft)
  try {
    var Vr = {};
    (Object.defineProperty(Vr, "passive", {
      get: function () {
        xa = !0;
      },
    }),
      window.addEventListener("test", Vr, Vr),
      window.removeEventListener("test", Vr, Vr));
  } catch {
    xa = !1;
  }
function Nv(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var so = !1,
  ts = null,
  ns = !1,
  wa = null,
  Cv = {
    onError: function (e) {
      ((so = !0), (ts = e));
    },
  };
function Pv(e, t, n, r, o, i, s, l, a) {
  ((so = !1), (ts = null), Nv.apply(Cv, arguments));
}
function Mv(e, t, n, r, o, i, s, l, a) {
  if ((Pv.apply(this, arguments), so)) {
    if (so) {
      var u = ts;
      ((so = !1), (ts = null));
    } else throw Error(B(198));
    ns || ((ns = !0), (wa = u));
  }
}
function Un(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Zc(e) {
  if (Un(e) !== e) throw Error(B(188));
}
function bv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Un(e)), t === null)) throw Error(B(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return (Zc(o), e);
        if (i === r) return (Zc(o), t);
        i = i.sibling;
      }
      throw Error(B(188));
    }
    if (n.return !== r.return) ((n = o), (r = i));
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          ((s = !0), (n = o), (r = i));
          break;
        }
        if (l === r) {
          ((s = !0), (r = o), (n = i));
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            ((s = !0), (n = i), (r = o));
            break;
          }
          if (l === r) {
            ((s = !0), (r = i), (n = o));
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(B(189));
      }
    }
    if (n.alternate !== r) throw Error(B(190));
  }
  if (n.tag !== 3) throw Error(B(188));
  return n.stateNode.current === n ? e : t;
}
function Zh(e) {
  return ((e = bv(e)), e !== null ? Jh(e) : null);
}
function Jh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ep = Je.unstable_scheduleCallback,
  Jc = Je.unstable_cancelCallback,
  Tv = Je.unstable_shouldYield,
  Rv = Je.unstable_requestPaint,
  Se = Je.unstable_now,
  Av = Je.unstable_getCurrentPriorityLevel,
  Cu = Je.unstable_ImmediatePriority,
  tp = Je.unstable_UserBlockingPriority,
  rs = Je.unstable_NormalPriority,
  Iv = Je.unstable_LowPriority,
  np = Je.unstable_IdlePriority,
  Os = null,
  Pt = null;
function Lv(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == "function")
    try {
      Pt.onCommitFiberRoot(Os, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : Ov,
  zv = Math.log,
  jv = Math.LN2;
function Ov(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((zv(e) / jv) | 0)) | 0);
}
var fi = 64,
  di = 4194304;
function to(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function os(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = to(l)) : ((i &= s), i !== 0 && (r = to(i)));
  } else ((s = n & ~o), s !== 0 ? (r = to(s)) : i !== 0 && (r = to(i)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - vt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function Dv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $v(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;
  ) {
    var s = 31 - vt(i),
      l = 1 << s,
      a = o[s];
    (a === -1
      ? (!(l & n) || l & r) && (o[s] = Dv(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l));
  }
}
function Sa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function rp() {
  var e = fi;
  return ((fi <<= 1), !(fi & 4194240) && (fi = 64), e);
}
function kl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Uo(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vt(t)),
    (e[t] = n));
}
function Fv(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - vt(n),
      i = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i));
  }
}
function Pu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var ae = 0;
function op(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ip,
  Mu,
  sp,
  lp,
  ap,
  Ea = !1,
  hi = [],
  on = null,
  sn = null,
  ln = null,
  wo = new Map(),
  So = new Map(),
  Jt = [],
  Hv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ef(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      on = null;
      break;
    case "dragenter":
    case "dragleave":
      sn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      wo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      So.delete(t.pointerId);
  }
}
function Ur(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Xo(t)), t !== null && Mu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Bv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((on = Ur(on, e, t, n, r, o)), !0);
    case "dragenter":
      return ((sn = Ur(sn, e, t, n, r, o)), !0);
    case "mouseover":
      return ((ln = Ur(ln, e, t, n, r, o)), !0);
    case "pointerover":
      var i = o.pointerId;
      return (wo.set(i, Ur(wo.get(i) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (i = o.pointerId),
        So.set(i, Ur(So.get(i) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function up(e) {
  var t = kn(e.target);
  if (t !== null) {
    var n = Un(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gh(n)), t !== null)) {
          ((e.blockedOn = t),
            ap(e.priority, function () {
              sp(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ji(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ka(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ya = r), n.target.dispatchEvent(r), (ya = null));
    } else return ((t = Xo(n)), t !== null && Mu(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function tf(e, t, n) {
  ji(e) && n.delete(t);
}
function Vv() {
  ((Ea = !1),
    on !== null && ji(on) && (on = null),
    sn !== null && ji(sn) && (sn = null),
    ln !== null && ji(ln) && (ln = null),
    wo.forEach(tf),
    So.forEach(tf));
}
function Wr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ea ||
      ((Ea = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Vv)));
}
function Eo(e) {
  function t(o) {
    return Wr(o, e);
  }
  if (0 < hi.length) {
    Wr(hi[0], e);
    for (var n = 1; n < hi.length; n++) {
      var r = hi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    on !== null && Wr(on, e),
      sn !== null && Wr(sn, e),
      ln !== null && Wr(ln, e),
      wo.forEach(t),
      So.forEach(t),
      n = 0;
    n < Jt.length;
    n++
  )
    ((r = Jt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
    (up(n), n.blockedOn === null && Jt.shift());
}
var fr = Wt.ReactCurrentBatchConfig,
  is = !0;
function Uv(e, t, n, r) {
  var o = ae,
    i = fr.transition;
  fr.transition = null;
  try {
    ((ae = 1), bu(e, t, n, r));
  } finally {
    ((ae = o), (fr.transition = i));
  }
}
function Wv(e, t, n, r) {
  var o = ae,
    i = fr.transition;
  fr.transition = null;
  try {
    ((ae = 4), bu(e, t, n, r));
  } finally {
    ((ae = o), (fr.transition = i));
  }
}
function bu(e, t, n, r) {
  if (is) {
    var o = ka(e, t, n, r);
    if (o === null) (Il(e, t, r, ss, n), ef(e, r));
    else if (Bv(o, e, t, n, r)) r.stopPropagation();
    else if ((ef(e, r), t & 4 && -1 < Hv.indexOf(e))) {
      for (; o !== null; ) {
        var i = Xo(o);
        if (
          (i !== null && ip(i),
          (i = ka(e, t, n, r)),
          i === null && Il(e, t, r, ss, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Il(e, t, r, null, n);
  }
}
var ss = null;
function ka(e, t, n, r) {
  if (((ss = null), (e = Nu(r)), (e = kn(e)), e !== null))
    if (((t = Un(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Gh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ss = e), null);
}
function cp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Av()) {
        case Cu:
          return 1;
        case tp:
          return 4;
        case rs:
        case Iv:
          return 16;
        case np:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null,
  Tu = null,
  Oi = null;
function fp() {
  if (Oi) return Oi;
  var e,
    t = Tu,
    n = t.length,
    r,
    o = "value" in nn ? nn.value : nn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Oi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Di(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pi() {
  return !0;
}
function nf() {
  return !1;
}
function nt(e) {
  function t(n, r, o, i, s) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? pi
        : nf),
      (this.isPropagationStopped = nf),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = pi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = pi));
      },
      persist: function () {},
      isPersistent: pi,
    }),
    t
  );
}
var zr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ru = nt(zr),
  Wo = ve({}, zr, { view: 0, detail: 0 }),
  Xv = nt(Wo),
  _l,
  Nl,
  Xr,
  Ds = ve({}, Wo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Au,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xr &&
            (Xr && e.type === "mousemove"
              ? ((_l = e.screenX - Xr.screenX), (Nl = e.screenY - Xr.screenY))
              : (Nl = _l = 0),
            (Xr = e)),
          _l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Nl;
    },
  }),
  rf = nt(Ds),
  Yv = ve({}, Ds, { dataTransfer: 0 }),
  Qv = nt(Yv),
  Kv = ve({}, Wo, { relatedTarget: 0 }),
  Cl = nt(Kv),
  qv = ve({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gv = nt(qv),
  Zv = ve({}, zr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jv = nt(Zv),
  ex = ve({}, zr, { data: 0 }),
  of = nt(ex),
  tx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  nx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  rx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function ox(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = rx[e]) ? !!t[e] : !1;
}
function Au() {
  return ox;
}
var ix = ve({}, Wo, {
    key: function (e) {
      if (e.key) {
        var t = tx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Di(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? nx[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Au,
    charCode: function (e) {
      return e.type === "keypress" ? Di(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Di(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  sx = nt(ix),
  lx = ve({}, Ds, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  sf = nt(lx),
  ax = ve({}, Wo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Au,
  }),
  ux = nt(ax),
  cx = ve({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fx = nt(cx),
  dx = ve({}, Ds, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hx = nt(dx),
  px = [9, 13, 27, 32],
  Iu = Ft && "CompositionEvent" in window,
  lo = null;
Ft && "documentMode" in document && (lo = document.documentMode);
var mx = Ft && "TextEvent" in window && !lo,
  dp = Ft && (!Iu || (lo && 8 < lo && 11 >= lo)),
  lf = " ",
  af = !1;
function hp(e, t) {
  switch (e) {
    case "keyup":
      return px.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function pp(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var qn = !1;
function gx(e, t) {
  switch (e) {
    case "compositionend":
      return pp(t);
    case "keypress":
      return t.which !== 32 ? null : ((af = !0), lf);
    case "textInput":
      return ((e = t.data), e === lf && af ? null : e);
    default:
      return null;
  }
}
function yx(e, t) {
  if (qn)
    return e === "compositionend" || (!Iu && hp(e, t))
      ? ((e = fp()), (Oi = Tu = nn = null), (qn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return dp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function uf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vx[e.type] : t === "textarea";
}
function mp(e, t, n, r) {
  (Xh(r),
    (t = ls(t, "onChange")),
    0 < t.length &&
      ((n = new Ru("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var ao = null,
  ko = null;
function xx(e) {
  Cp(e, 0);
}
function $s(e) {
  var t = Jn(e);
  if ($h(t)) return e;
}
function wx(e, t) {
  if (e === "change") return t;
}
var gp = !1;
if (Ft) {
  var Pl;
  if (Ft) {
    var Ml = "oninput" in document;
    if (!Ml) {
      var cf = document.createElement("div");
      (cf.setAttribute("oninput", "return;"),
        (Ml = typeof cf.oninput == "function"));
    }
    Pl = Ml;
  } else Pl = !1;
  gp = Pl && (!document.documentMode || 9 < document.documentMode);
}
function ff() {
  ao && (ao.detachEvent("onpropertychange", yp), (ko = ao = null));
}
function yp(e) {
  if (e.propertyName === "value" && $s(ko)) {
    var t = [];
    (mp(t, ko, e, Nu(e)), qh(xx, t));
  }
}
function Sx(e, t, n) {
  e === "focusin"
    ? (ff(), (ao = t), (ko = n), ao.attachEvent("onpropertychange", yp))
    : e === "focusout" && ff();
}
function Ex(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $s(ko);
}
function kx(e, t) {
  if (e === "click") return $s(t);
}
function _x(e, t) {
  if (e === "input" || e === "change") return $s(t);
}
function Nx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wt = typeof Object.is == "function" ? Object.is : Nx;
function _o(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ia.call(t, o) || !wt(e[o], t[o])) return !1;
  }
  return !0;
}
function df(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hf(e, t) {
  var n = df(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = df(n);
  }
}
function vp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? vp(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function xp() {
  for (var e = window, t = es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = es(e.document);
  }
  return t;
}
function Lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Cx(e) {
  var t = xp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Lu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        ((r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = hf(n, i)));
        var s = hf(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Px = Ft && "documentMode" in document && 11 >= document.documentMode,
  Gn = null,
  _a = null,
  uo = null,
  Na = !1;
function pf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Na ||
    Gn == null ||
    Gn !== es(r) ||
    ((r = Gn),
    "selectionStart" in r && Lu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (uo && _o(uo, r)) ||
      ((uo = r),
      (r = ls(_a, "onSelect")),
      0 < r.length &&
        ((t = new Ru("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gn))));
}
function mi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zn = {
    animationend: mi("Animation", "AnimationEnd"),
    animationiteration: mi("Animation", "AnimationIteration"),
    animationstart: mi("Animation", "AnimationStart"),
    transitionend: mi("Transition", "TransitionEnd"),
  },
  bl = {},
  wp = {};
Ft &&
  ((wp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zn.animationend.animation,
    delete Zn.animationiteration.animation,
    delete Zn.animationstart.animation),
  "TransitionEvent" in window || delete Zn.transitionend.transition);
function Fs(e) {
  if (bl[e]) return bl[e];
  if (!Zn[e]) return e;
  var t = Zn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in wp) return (bl[e] = t[n]);
  return e;
}
var Sp = Fs("animationend"),
  Ep = Fs("animationiteration"),
  kp = Fs("animationstart"),
  _p = Fs("transitionend"),
  Np = new Map(),
  mf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function gn(e, t) {
  (Np.set(e, t), Vn(t, [e]));
}
for (var Tl = 0; Tl < mf.length; Tl++) {
  var Rl = mf[Tl],
    Mx = Rl.toLowerCase(),
    bx = Rl[0].toUpperCase() + Rl.slice(1);
  gn(Mx, "on" + bx);
}
gn(Sp, "onAnimationEnd");
gn(Ep, "onAnimationIteration");
gn(kp, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(_p, "onTransitionEnd");
gr("onMouseEnter", ["mouseout", "mouseover"]);
gr("onMouseLeave", ["mouseout", "mouseover"]);
gr("onPointerEnter", ["pointerout", "pointerover"]);
gr("onPointerLeave", ["pointerout", "pointerover"]);
Vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var no =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Tx = new Set("cancel close invalid load scroll toggle".split(" ").concat(no));
function gf(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Mv(r, t, void 0, e), (e.currentTarget = null));
}
function Cp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          (gf(o, l, u), (i = a));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          (gf(o, l, u), (i = a));
        }
    }
  }
  if (ns) throw ((e = wa), (ns = !1), (wa = null), e);
}
function fe(e, t) {
  var n = t[Ta];
  n === void 0 && (n = t[Ta] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Pp(t, e, 2, !1), n.add(r));
}
function Al(e, t, n) {
  var r = 0;
  (t && (r |= 4), Pp(n, e, r, t));
}
var gi = "_reactListening" + Math.random().toString(36).slice(2);
function No(e) {
  if (!e[gi]) {
    ((e[gi] = !0),
      Lh.forEach(function (n) {
        n !== "selectionchange" && (Tx.has(n) || Al(n, !1, e), Al(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gi] || ((t[gi] = !0), Al("selectionchange", !1, t));
  }
}
function Pp(e, t, n, r) {
  switch (cp(t)) {
    case 1:
      var o = Uv;
      break;
    case 4:
      o = Wv;
      break;
    default:
      o = bu;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !xa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function Il(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = kn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  qh(function () {
    var u = i,
      f = Nu(n),
      c = [];
    e: {
      var d = Np.get(e);
      if (d !== void 0) {
        var y = Ru,
          p = e;
        switch (e) {
          case "keypress":
            if (Di(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = sx;
            break;
          case "focusin":
            ((p = "focus"), (y = Cl));
            break;
          case "focusout":
            ((p = "blur"), (y = Cl));
            break;
          case "beforeblur":
          case "afterblur":
            y = Cl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = rf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Qv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = ux;
            break;
          case Sp:
          case Ep:
          case kp:
            y = Gv;
            break;
          case _p:
            y = fx;
            break;
          case "scroll":
            y = Xv;
            break;
          case "wheel":
            y = hx;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Jv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = sf;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          m = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var g = u, h; g !== null; ) {
          h = g;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              m !== null && ((x = xo(g, m)), x != null && v.push(Co(g, x, h)))),
            w)
          )
            break;
          g = g.return;
        }
        0 < v.length &&
          ((d = new y(d, p, null, n, f)), c.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          d &&
            n !== ya &&
            (p = n.relatedTarget || n.fromElement) &&
            (kn(p) || p[Ht]))
        )
          break e;
        if (
          (y || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          y
            ? ((p = n.relatedTarget || n.toElement),
              (y = u),
              (p = p ? kn(p) : null),
              p !== null &&
                ((w = Un(p)), p !== w || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((y = null), (p = u)),
          y !== p)
        ) {
          if (
            ((v = rf),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = sf),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (g = "pointer")),
            (w = y == null ? d : Jn(y)),
            (h = p == null ? d : Jn(p)),
            (d = new v(x, g + "leave", y, n, f)),
            (d.target = w),
            (d.relatedTarget = h),
            (x = null),
            kn(f) === u &&
              ((v = new v(m, g + "enter", p, n, f)),
              (v.target = h),
              (v.relatedTarget = w),
              (x = v)),
            (w = x),
            y && p)
          )
            t: {
              for (v = y, m = p, g = 0, h = v; h; h = Xn(h)) g++;
              for (h = 0, x = m; x; x = Xn(x)) h++;
              for (; 0 < g - h; ) ((v = Xn(v)), g--);
              for (; 0 < h - g; ) ((m = Xn(m)), h--);
              for (; g--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                ((v = Xn(v)), (m = Xn(m)));
              }
              v = null;
            }
          else v = null;
          (y !== null && yf(c, d, y, v, !1),
            p !== null && w !== null && yf(c, w, p, v, !0));
        }
      }
      e: {
        if (
          ((d = u ? Jn(u) : window),
          (y = d.nodeName && d.nodeName.toLowerCase()),
          y === "select" || (y === "input" && d.type === "file"))
        )
          var E = wx;
        else if (uf(d))
          if (gp) E = _x;
          else {
            E = Ex;
            var k = Sx;
          }
        else
          (y = d.nodeName) &&
            y.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (E = kx);
        if (E && (E = E(e, u))) {
          mp(c, E, n, f);
          break e;
        }
        (k && k(e, d, u),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            da(d, "number", d.value));
      }
      switch (((k = u ? Jn(u) : window), e)) {
        case "focusin":
          (uf(k) || k.contentEditable === "true") &&
            ((Gn = k), (_a = u), (uo = null));
          break;
        case "focusout":
          uo = _a = Gn = null;
          break;
        case "mousedown":
          Na = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Na = !1), pf(c, n, f));
          break;
        case "selectionchange":
          if (Px) break;
        case "keydown":
        case "keyup":
          pf(c, n, f);
      }
      var _;
      if (Iu)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        qn
          ? hp(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      (M &&
        (dp &&
          n.locale !== "ko" &&
          (qn || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && qn && (_ = fp())
            : ((nn = f),
              (Tu = "value" in nn ? nn.value : nn.textContent),
              (qn = !0))),
        (k = ls(u, M)),
        0 < k.length &&
          ((M = new of(M, e, null, n, f)),
          c.push({ event: M, listeners: k }),
          _ ? (M.data = _) : ((_ = pp(n)), _ !== null && (M.data = _)))),
        (_ = mx ? gx(e, n) : yx(e, n)) &&
          ((u = ls(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new of("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: u }),
            (f.data = _))));
    }
    Cp(c, t);
  });
}
function Co(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ls(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    (o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = xo(e, n)),
      i != null && r.unshift(Co(e, i, o)),
      (i = xo(e, t)),
      i != null && r.push(Co(e, i, o))),
      (e = e.return));
  }
  return r;
}
function Xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = xo(n, i)), a != null && s.unshift(Co(n, a, l)))
        : o || ((a = xo(n, i)), a != null && s.push(Co(n, a, l)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Rx = /\r\n?/g,
  Ax = /\u0000|\uFFFD/g;
function vf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rx,
      `
`,
    )
    .replace(Ax, "");
}
function yi(e, t, n) {
  if (((t = vf(t)), vf(e) !== t && n)) throw Error(B(425));
}
function as() {}
var Ca = null,
  Pa = null;
function Ma(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ba = typeof setTimeout == "function" ? setTimeout : void 0,
  Ix = typeof clearTimeout == "function" ? clearTimeout : void 0,
  xf = typeof Promise == "function" ? Promise : void 0,
  Lx =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof xf < "u"
        ? function (e) {
            return xf.resolve(null).then(e).catch(zx);
          }
        : ba;
function zx(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ll(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), Eo(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Eo(t);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function wf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jr = Math.random().toString(36).slice(2),
  Ct = "__reactFiber$" + jr,
  Po = "__reactProps$" + jr,
  Ht = "__reactContainer$" + jr,
  Ta = "__reactEvents$" + jr,
  jx = "__reactListeners$" + jr,
  Ox = "__reactHandles$" + jr;
function kn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Ct])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wf(e); e !== null; ) {
          if ((n = e[Ct])) return n;
          e = wf(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Xo(e) {
  return (
    (e = e[Ct] || e[Ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(B(33));
}
function Hs(e) {
  return e[Po] || null;
}
var Ra = [],
  er = -1;
function yn(e) {
  return { current: e };
}
function de(e) {
  0 > er || ((e.current = Ra[er]), (Ra[er] = null), er--);
}
function ue(e, t) {
  (er++, (Ra[er] = e.current), (e.current = t));
}
var mn = {},
  je = yn(mn),
  Ue = yn(!1),
  In = mn;
function yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function We(e) {
  return ((e = e.childContextTypes), e != null);
}
function us() {
  (de(Ue), de(je));
}
function Sf(e, t, n) {
  if (je.current !== mn) throw Error(B(168));
  (ue(je, t), ue(Ue, n));
}
function Mp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(B(108, Sv(e) || "Unknown", o));
  return ve({}, n, r);
}
function cs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (In = je.current),
    ue(je, e),
    ue(Ue, Ue.current),
    !0
  );
}
function Ef(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(B(169));
  (n
    ? ((e = Mp(e, t, In)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(Ue),
      de(je),
      ue(je, e))
    : de(Ue),
    ue(Ue, n));
}
var zt = null,
  Bs = !1,
  zl = !1;
function bp(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function Dx(e) {
  ((Bs = !0), bp(e));
}
function vn() {
  if (!zl && zt !== null) {
    zl = !0;
    var e = 0,
      t = ae;
    try {
      var n = zt;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((zt = null), (Bs = !1));
    } catch (o) {
      throw (zt !== null && (zt = zt.slice(e + 1)), ep(Cu, vn), o);
    } finally {
      ((ae = t), (zl = !1));
    }
  }
  return null;
}
var tr = [],
  nr = 0,
  fs = null,
  ds = 0,
  ot = [],
  it = 0,
  Ln = null,
  jt = 1,
  Ot = "";
function wn(e, t) {
  ((tr[nr++] = ds), (tr[nr++] = fs), (fs = e), (ds = t));
}
function Tp(e, t, n) {
  ((ot[it++] = jt), (ot[it++] = Ot), (ot[it++] = Ln), (Ln = e));
  var r = jt;
  e = Ot;
  var o = 32 - vt(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var i = 32 - vt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    ((i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (jt = (1 << (32 - vt(t) + o)) | (n << o) | r),
      (Ot = i + e));
  } else ((jt = (1 << i) | (n << o) | r), (Ot = e));
}
function zu(e) {
  e.return !== null && (wn(e, 1), Tp(e, 1, 0));
}
function ju(e) {
  for (; e === fs; )
    ((fs = tr[--nr]), (tr[nr] = null), (ds = tr[--nr]), (tr[nr] = null));
  for (; e === Ln; )
    ((Ln = ot[--it]),
      (ot[it] = null),
      (Ot = ot[--it]),
      (ot[it] = null),
      (jt = ot[--it]),
      (ot[it] = null));
}
var Ze = null,
  Ge = null,
  he = !1,
  pt = null;
function Rp(e, t) {
  var n = st(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function kf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Ge = an(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ln !== null ? { id: jt, overflow: Ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Aa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ia(e) {
  if (he) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!kf(e, t)) {
        if (Aa(e)) throw Error(B(418));
        t = an(n.nextSibling);
        var r = Ze;
        t && kf(e, t)
          ? Rp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (Ze = e));
      }
    } else {
      if (Aa(e)) throw Error(B(418));
      ((e.flags = (e.flags & -4097) | 2), (he = !1), (Ze = e));
    }
  }
}
function _f(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function vi(e) {
  if (e !== Ze) return !1;
  if (!he) return (_f(e), (he = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ma(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (Aa(e)) throw (Ap(), Error(B(418)));
    for (; t; ) (Rp(e, t), (t = an(t.nextSibling)));
  }
  if ((_f(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(B(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = an(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Ze ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function Ap() {
  for (var e = Ge; e; ) e = an(e.nextSibling);
}
function vr() {
  ((Ge = Ze = null), (he = !1));
}
function Ou(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
var $x = Wt.ReactCurrentBatchConfig;
function Yr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(B(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(B(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(B(284));
    if (!n._owner) throw Error(B(290, e));
  }
  return e;
}
function xi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      B(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Nf(e) {
  var t = e._init;
  return t(e._payload);
}
function Ip(e) {
  function t(m, g) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [g]), (m.flags |= 16)) : h.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) (t(m, g), (g = g.sibling));
    return null;
  }
  function r(m, g) {
    for (m = new Map(); g !== null; )
      (g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling));
    return m;
  }
  function o(m, g) {
    return ((m = dn(m, g)), (m.index = 0), (m.sibling = null), m);
  }
  function i(m, g, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < g ? ((m.flags |= 2), g) : h)
            : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    );
  }
  function s(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function l(m, g, h, x) {
    return g === null || g.tag !== 6
      ? ((g = Bl(h, m.mode, x)), (g.return = m), g)
      : ((g = o(g, h)), (g.return = m), g);
  }
  function a(m, g, h, x) {
    var E = h.type;
    return E === Kn
      ? f(m, g, h.props.children, x, h.key)
      : g !== null &&
          (g.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === Gt &&
              Nf(E) === g.type))
        ? ((x = o(g, h.props)), (x.ref = Yr(m, g, h)), (x.return = m), x)
        : ((x = Wi(h.type, h.key, h.props, null, m.mode, x)),
          (x.ref = Yr(m, g, h)),
          (x.return = m),
          x);
  }
  function u(m, g, h, x) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== h.containerInfo ||
      g.stateNode.implementation !== h.implementation
      ? ((g = Vl(h, m.mode, x)), (g.return = m), g)
      : ((g = o(g, h.children || [])), (g.return = m), g);
  }
  function f(m, g, h, x, E) {
    return g === null || g.tag !== 7
      ? ((g = bn(h, m.mode, x, E)), (g.return = m), g)
      : ((g = o(g, h)), (g.return = m), g);
  }
  function c(m, g, h) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return ((g = Bl("" + g, m.mode, h)), (g.return = m), g);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ai:
          return (
            (h = Wi(g.type, g.key, g.props, null, m.mode, h)),
            (h.ref = Yr(m, null, g)),
            (h.return = m),
            h
          );
        case Qn:
          return ((g = Vl(g, m.mode, h)), (g.return = m), g);
        case Gt:
          var x = g._init;
          return c(m, x(g._payload), h);
      }
      if (eo(g) || Br(g))
        return ((g = bn(g, m.mode, h, null)), (g.return = m), g);
      xi(m, g);
    }
    return null;
  }
  function d(m, g, h, x) {
    var E = g !== null ? g.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return E !== null ? null : l(m, g, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ai:
          return h.key === E ? a(m, g, h, x) : null;
        case Qn:
          return h.key === E ? u(m, g, h, x) : null;
        case Gt:
          return ((E = h._init), d(m, g, E(h._payload), x));
      }
      if (eo(h) || Br(h)) return E !== null ? null : f(m, g, h, x, null);
      xi(m, h);
    }
    return null;
  }
  function y(m, g, h, x, E) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((m = m.get(h) || null), l(g, m, "" + x, E));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ai:
          return (
            (m = m.get(x.key === null ? h : x.key) || null),
            a(g, m, x, E)
          );
        case Qn:
          return (
            (m = m.get(x.key === null ? h : x.key) || null),
            u(g, m, x, E)
          );
        case Gt:
          var k = x._init;
          return y(m, g, h, k(x._payload), E);
      }
      if (eo(x) || Br(x)) return ((m = m.get(h) || null), f(g, m, x, E, null));
      xi(g, x);
    }
    return null;
  }
  function p(m, g, h, x) {
    for (
      var E = null, k = null, _ = g, M = (g = 0), R = null;
      _ !== null && M < h.length;
      M++
    ) {
      _.index > M ? ((R = _), (_ = null)) : (R = _.sibling);
      var F = d(m, _, h[M], x);
      if (F === null) {
        _ === null && (_ = R);
        break;
      }
      (e && _ && F.alternate === null && t(m, _),
        (g = i(F, g, M)),
        k === null ? (E = F) : (k.sibling = F),
        (k = F),
        (_ = R));
    }
    if (M === h.length) return (n(m, _), he && wn(m, M), E);
    if (_ === null) {
      for (; M < h.length; M++)
        ((_ = c(m, h[M], x)),
          _ !== null &&
            ((g = i(_, g, M)),
            k === null ? (E = _) : (k.sibling = _),
            (k = _)));
      return (he && wn(m, M), E);
    }
    for (_ = r(m, _); M < h.length; M++)
      ((R = y(_, m, M, h[M], x)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? M : R.key),
          (g = i(R, g, M)),
          k === null ? (E = R) : (k.sibling = R),
          (k = R)));
    return (
      e &&
        _.forEach(function (T) {
          return t(m, T);
        }),
      he && wn(m, M),
      E
    );
  }
  function v(m, g, h, x) {
    var E = Br(h);
    if (typeof E != "function") throw Error(B(150));
    if (((h = E.call(h)), h == null)) throw Error(B(151));
    for (
      var k = (E = null), _ = g, M = (g = 0), R = null, F = h.next();
      _ !== null && !F.done;
      M++, F = h.next()
    ) {
      _.index > M ? ((R = _), (_ = null)) : (R = _.sibling);
      var T = d(m, _, F.value, x);
      if (T === null) {
        _ === null && (_ = R);
        break;
      }
      (e && _ && T.alternate === null && t(m, _),
        (g = i(T, g, M)),
        k === null ? (E = T) : (k.sibling = T),
        (k = T),
        (_ = R));
    }
    if (F.done) return (n(m, _), he && wn(m, M), E);
    if (_ === null) {
      for (; !F.done; M++, F = h.next())
        ((F = c(m, F.value, x)),
          F !== null &&
            ((g = i(F, g, M)),
            k === null ? (E = F) : (k.sibling = F),
            (k = F)));
      return (he && wn(m, M), E);
    }
    for (_ = r(m, _); !F.done; M++, F = h.next())
      ((F = y(_, m, M, F.value, x)),
        F !== null &&
          (e && F.alternate !== null && _.delete(F.key === null ? M : F.key),
          (g = i(F, g, M)),
          k === null ? (E = F) : (k.sibling = F),
          (k = F)));
    return (
      e &&
        _.forEach(function (L) {
          return t(m, L);
        }),
      he && wn(m, M),
      E
    );
  }
  function w(m, g, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Kn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case ai:
          e: {
            for (var E = h.key, k = g; k !== null; ) {
              if (k.key === E) {
                if (((E = h.type), E === Kn)) {
                  if (k.tag === 7) {
                    (n(m, k.sibling),
                      (g = o(k, h.props.children)),
                      (g.return = m),
                      (m = g));
                    break e;
                  }
                } else if (
                  k.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Gt &&
                    Nf(E) === k.type)
                ) {
                  (n(m, k.sibling),
                    (g = o(k, h.props)),
                    (g.ref = Yr(m, k, h)),
                    (g.return = m),
                    (m = g));
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            h.type === Kn
              ? ((g = bn(h.props.children, m.mode, x, h.key)),
                (g.return = m),
                (m = g))
              : ((x = Wi(h.type, h.key, h.props, null, m.mode, x)),
                (x.ref = Yr(m, g, h)),
                (x.return = m),
                (m = x));
          }
          return s(m);
        case Qn:
          e: {
            for (k = h.key; g !== null; ) {
              if (g.key === k)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === h.containerInfo &&
                  g.stateNode.implementation === h.implementation
                ) {
                  (n(m, g.sibling),
                    (g = o(g, h.children || [])),
                    (g.return = m),
                    (m = g));
                  break e;
                } else {
                  n(m, g);
                  break;
                }
              else t(m, g);
              g = g.sibling;
            }
            ((g = Vl(h, m.mode, x)), (g.return = m), (m = g));
          }
          return s(m);
        case Gt:
          return ((k = h._init), w(m, g, k(h._payload), x));
      }
      if (eo(h)) return p(m, g, h, x);
      if (Br(h)) return v(m, g, h, x);
      xi(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = o(g, h)), (g.return = m), (m = g))
          : (n(m, g), (g = Bl(h, m.mode, x)), (g.return = m), (m = g)),
        s(m))
      : n(m, g);
  }
  return w;
}
var xr = Ip(!0),
  Lp = Ip(!1),
  hs = yn(null),
  ps = null,
  rr = null,
  Du = null;
function $u() {
  Du = rr = ps = null;
}
function Fu(e) {
  var t = hs.current;
  (de(hs), (e._currentValue = t));
}
function La(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function dr(e, t) {
  ((ps = e),
    (Du = rr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null)));
}
function at(e) {
  var t = e._currentValue;
  if (Du !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rr === null)) {
      if (ps === null) throw Error(B(308));
      ((rr = e), (ps.dependencies = { lanes: 0, firstContext: e }));
    } else rr = rr.next = e;
  return t;
}
var _n = null;
function Hu(e) {
  _n === null ? (_n = [e]) : _n.push(e);
}
function zp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Hu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  );
}
function Bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function Bu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function jp(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function $t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Bt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Hu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function $i(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Pu(e, n));
  }
}
function Cf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (i === null ? (o = i = s) : (i = i.next = s), (n = n.next));
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ms(e, t, n, r) {
  var o = e.updateQueue;
  Zt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    ((a.next = null), s === null ? (i = u) : (s.next = u), (s = a));
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (l = f.lastBaseUpdate),
      l !== s &&
        (l === null ? (f.firstBaseUpdate = u) : (l.next = u),
        (f.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var c = o.baseState;
    ((s = 0), (f = u = a = null), (l = i));
    do {
      var d = l.lane,
        y = l.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var p = e,
            v = l;
          switch (((d = t), (y = n), v.tag)) {
            case 1:
              if (((p = v.payload), typeof p == "function")) {
                c = p.call(y, c, d);
                break e;
              }
              c = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = v.payload),
                (d = typeof p == "function" ? p.call(y, c, d) : p),
                d == null)
              )
                break e;
              c = ve({}, c, d);
              break e;
            case 2:
              Zt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [l]) : d.push(l));
      } else
        ((y = {
          eventTime: y,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          f === null ? ((u = f = y), (a = c)) : (f = f.next = y),
          (s |= d));
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        ((d = l),
          (l = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (f === null && (a = c),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((s |= o.lane), (o = o.next));
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    ((jn |= s), (e.lanes = s), (e.memoizedState = c));
  }
}
function Pf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(B(191, o));
        o.call(r);
      }
    }
}
var Yo = {},
  Mt = yn(Yo),
  Mo = yn(Yo),
  bo = yn(Yo);
function Nn(e) {
  if (e === Yo) throw Error(B(174));
  return e;
}
function Vu(e, t) {
  switch ((ue(bo, t), ue(Mo, e), ue(Mt, Yo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pa(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pa(t, e)));
  }
  (de(Mt), ue(Mt, t));
}
function wr() {
  (de(Mt), de(Mo), de(bo));
}
function Op(e) {
  Nn(bo.current);
  var t = Nn(Mt.current),
    n = pa(t, e.type);
  t !== n && (ue(Mo, e), ue(Mt, n));
}
function Uu(e) {
  Mo.current === e && (de(Mt), de(Mo));
}
var ge = yn(0);
function gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var jl = [];
function Wu() {
  for (var e = 0; e < jl.length; e++)
    jl[e]._workInProgressVersionPrimary = null;
  jl.length = 0;
}
var Fi = Wt.ReactCurrentDispatcher,
  Ol = Wt.ReactCurrentBatchConfig,
  zn = 0,
  ye = null,
  _e = null,
  Ce = null,
  ys = !1,
  co = !1,
  To = 0,
  Fx = 0;
function Ae() {
  throw Error(B(321));
}
function Xu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!wt(e[n], t[n])) return !1;
  return !0;
}
function Yu(e, t, n, r, o, i) {
  if (
    ((zn = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fi.current = e === null || e.memoizedState === null ? Ux : Wx),
    (e = n(r, o)),
    co)
  ) {
    i = 0;
    do {
      if (((co = !1), (To = 0), 25 <= i)) throw Error(B(301));
      ((i += 1),
        (Ce = _e = null),
        (t.updateQueue = null),
        (Fi.current = Xx),
        (e = n(r, o)));
    } while (co);
  }
  if (
    ((Fi.current = vs),
    (t = _e !== null && _e.next !== null),
    (zn = 0),
    (Ce = _e = ye = null),
    (ys = !1),
    t)
  )
    throw Error(B(300));
  return e;
}
function Qu() {
  var e = To !== 0;
  return ((To = 0), e);
}
function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Ce === null ? (ye.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce);
}
function ut() {
  if (_e === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = _e.next;
  var t = Ce === null ? ye.memoizedState : Ce.next;
  if (t !== null) ((Ce = t), (_e = e));
  else {
    if (e === null) throw Error(B(310));
    ((_e = e),
      (e = {
        memoizedState: _e.memoizedState,
        baseState: _e.baseState,
        baseQueue: _e.baseQueue,
        queue: _e.queue,
        next: null,
      }),
      Ce === null ? (ye.memoizedState = Ce = e) : (Ce = Ce.next = e));
  }
  return Ce;
}
function Ro(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Dl(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = _e,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      ((o.next = i.next), (i.next = s));
    }
    ((r.baseQueue = o = i), (n.pending = null));
  }
  if (o !== null) {
    ((i = o.next), (r = r.baseState));
    var l = (s = null),
      a = null,
      u = i;
    do {
      var f = u.lane;
      if ((zn & f) === f)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (a === null ? ((l = a = c), (s = r)) : (a = a.next = c),
          (ye.lanes |= f),
          (jn |= f));
      }
      u = u.next;
    } while (u !== null && u !== i);
    (a === null ? (s = r) : (a.next = l),
      wt(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((i = o.lane), (ye.lanes |= i), (jn |= i), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $l(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(B(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do ((i = e(i, s.action)), (s = s.next));
    while (s !== o);
    (wt(i, t.memoizedState) || (Be = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i));
  }
  return [i, r];
}
function Dp() {}
function $p(e, t) {
  var n = ye,
    r = ut(),
    o = t(),
    i = !wt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Be = !0)),
    (r = r.queue),
    Ku(Bp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ao(9, Hp.bind(null, n, r, o, t), void 0, null),
      Pe === null)
    )
      throw Error(B(349));
    zn & 30 || Fp(n, t, o);
  }
  return o;
}
function Fp(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Hp(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Vp(t) && Up(e));
}
function Bp(e, t, n) {
  return n(function () {
    Vp(t) && Up(e);
  });
}
function Vp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function Up(e) {
  var t = Bt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function Mf(e) {
  var t = _t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ro,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Vx.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function Ao(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wp() {
  return ut().memoizedState;
}
function Hi(e, t, n, r) {
  var o = _t();
  ((ye.flags |= e),
    (o.memoizedState = Ao(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Vs(e, t, n, r) {
  var o = ut();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (_e !== null) {
    var s = _e.memoizedState;
    if (((i = s.destroy), r !== null && Xu(r, s.deps))) {
      o.memoizedState = Ao(t, n, i, r);
      return;
    }
  }
  ((ye.flags |= e), (o.memoizedState = Ao(1 | t, n, i, r)));
}
function bf(e, t) {
  return Hi(8390656, 8, e, t);
}
function Ku(e, t) {
  return Vs(2048, 8, e, t);
}
function Xp(e, t) {
  return Vs(4, 2, e, t);
}
function Yp(e, t) {
  return Vs(4, 4, e, t);
}
function Qp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Kp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Vs(4, 4, Qp.bind(null, t, e), n)
  );
}
function qu() {}
function qp(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Gp(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zp(e, t, n) {
  return zn & 21
    ? (wt(n, t) || ((n = rp()), (ye.lanes |= n), (jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function Hx(e, t) {
  var n = ae;
  ((ae = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Ol.transition;
  Ol.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ae = n), (Ol.transition = r));
  }
}
function Jp() {
  return ut().memoizedState;
}
function Bx(e, t, n) {
  var r = fn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    em(e))
  )
    tm(t, n);
  else if (((n = zp(e, t, n, r)), n !== null)) {
    var o = De();
    (xt(n, e, r, o), nm(n, t, r));
  }
}
function Vx(e, t, n) {
  var r = fn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (em(e)) tm(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), wt(l, s))) {
          var a = t.interleaved;
          (a === null
            ? ((o.next = o), Hu(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = zp(e, t, o, r)),
      n !== null && ((o = De()), xt(n, e, r, o), nm(n, t, r)));
  }
}
function em(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function tm(e, t) {
  co = ys = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function nm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Pu(e, n));
  }
}
var vs = {
    readContext: at,
    useCallback: Ae,
    useContext: Ae,
    useEffect: Ae,
    useImperativeHandle: Ae,
    useInsertionEffect: Ae,
    useLayoutEffect: Ae,
    useMemo: Ae,
    useReducer: Ae,
    useRef: Ae,
    useState: Ae,
    useDebugValue: Ae,
    useDeferredValue: Ae,
    useTransition: Ae,
    useMutableSource: Ae,
    useSyncExternalStore: Ae,
    useId: Ae,
    unstable_isNewReconciler: !1,
  },
  Ux = {
    readContext: at,
    useCallback: function (e, t) {
      return ((_t().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: at,
    useEffect: bf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hi(4194308, 4, Qp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _t();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = _t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Bx.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _t();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Mf,
    useDebugValue: qu,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e);
    },
    useTransition: function () {
      var e = Mf(!1),
        t = e[0];
      return ((e = Hx.bind(null, e[1])), (_t().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        o = _t();
      if (he) {
        if (n === void 0) throw Error(B(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(B(349));
        zn & 30 || Fp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        bf(Bp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ao(9, Hp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _t(),
        t = Pe.identifierPrefix;
      if (he) {
        var n = Ot,
          r = jt;
        ((n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = To++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Fx++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Wx = {
    readContext: at,
    useCallback: qp,
    useContext: at,
    useEffect: Ku,
    useImperativeHandle: Kp,
    useInsertionEffect: Xp,
    useLayoutEffect: Yp,
    useMemo: Gp,
    useReducer: Dl,
    useRef: Wp,
    useState: function () {
      return Dl(Ro);
    },
    useDebugValue: qu,
    useDeferredValue: function (e) {
      var t = ut();
      return Zp(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = Dl(Ro)[0],
        t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: Dp,
    useSyncExternalStore: $p,
    useId: Jp,
    unstable_isNewReconciler: !1,
  },
  Xx = {
    readContext: at,
    useCallback: qp,
    useContext: at,
    useEffect: Ku,
    useImperativeHandle: Kp,
    useInsertionEffect: Xp,
    useLayoutEffect: Yp,
    useMemo: Gp,
    useReducer: $l,
    useRef: Wp,
    useState: function () {
      return $l(Ro);
    },
    useDebugValue: qu,
    useDeferredValue: function (e) {
      var t = ut();
      return _e === null ? (t.memoizedState = e) : Zp(t, _e.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Ro)[0],
        t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: Dp,
    useSyncExternalStore: $p,
    useId: Jp,
    unstable_isNewReconciler: !1,
  };
function ft(e, t) {
  if (e && e.defaultProps) {
    ((t = ve({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function za(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Us = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Un(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      o = fn(e),
      i = $t(r, o);
    ((i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, o)),
      t !== null && (xt(t, e, o, r), $i(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      o = fn(e),
      i = $t(r, o);
    ((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = un(e, i, o)),
      t !== null && (xt(t, e, o, r), $i(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = fn(e),
      o = $t(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = un(e, o, r)),
      t !== null && (xt(t, e, r, n), $i(t, e, r)));
  },
};
function Tf(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !_o(n, r) || !_o(o, i)
        : !0
  );
}
function rm(e, t, n) {
  var r = !1,
    o = mn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = at(i))
      : ((o = We(t) ? In : je.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? yr(e, o) : mn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Us),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Rf(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Us.enqueueReplaceState(t, t.state, null));
}
function ja(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Bu(e));
  var i = t.contextType;
  (typeof i == "object" && i !== null
    ? (o.context = at(i))
    : ((i = We(t) ? In : je.current), (o.context = yr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (za(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Us.enqueueReplaceState(o, o.state, null),
      ms(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function Sr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += wv(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Fl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Oa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yx = typeof WeakMap == "function" ? WeakMap : Map;
function om(e, t, n) {
  ((n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (ws || ((ws = !0), (Ya = r)), Oa(e, t));
    }),
    n
  );
}
function im(e, t, n) {
  ((n = $t(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Oa(e, t);
      }));
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        (Oa(e, t),
          typeof r != "function" &&
            (cn === null ? (cn = new Set([this])) : cn.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Af(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yx();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = lw.bind(null, e, t, n)), t.then(e, e));
}
function If(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Lf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $t(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Qx = Wt.ReactCurrentOwner,
  Be = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? Lp(t, null, n, r) : xr(t, e.child, n, r);
}
function zf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    dr(t, o),
    (r = Yu(e, t, n, r, i, o)),
    (n = Qu()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Vt(e, t, o))
      : (he && n && zu(t), (t.flags |= 1), Oe(e, t, r, o), t.child)
  );
}
function jf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !oc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), sm(e, t, i, r, o))
      : ((e = Wi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : _o), n(s, r) && e.ref === t.ref)
    )
      return Vt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = dn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sm(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (_o(i, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Be = !0);
      else return ((t.lanes = e.lanes), Vt(e, t, o));
  }
  return Da(e, t, n, r, o);
}
function lm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(ir, Ke),
        (Ke |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(ir, Ke),
          (Ke |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ue(ir, Ke),
        (Ke |= r));
    }
  else
    (i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(ir, Ke),
      (Ke |= r));
  return (Oe(e, t, o, n), t.child);
}
function am(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Da(e, t, n, r, o) {
  var i = We(n) ? In : je.current;
  return (
    (i = yr(t, i)),
    dr(t, o),
    (n = Yu(e, t, n, r, i, o)),
    (r = Qu()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Vt(e, t, o))
      : (he && r && zu(t), (t.flags |= 1), Oe(e, t, n, o), t.child)
  );
}
function Of(e, t, n, r, o) {
  if (We(n)) {
    var i = !0;
    cs(t);
  } else i = !1;
  if ((dr(t, o), t.stateNode === null))
    (Bi(e, t), rm(t, n, r), ja(t, n, r, o), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = at(u))
      : ((u = We(n) ? In : je.current), (u = yr(t, u)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (c ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Rf(t, s, r, u)),
      (Zt = !1));
    var d = t.memoizedState;
    ((s.state = d),
      ms(t, r, s, o),
      (a = t.memoizedState),
      l !== r || d !== a || Ue.current || Zt
        ? (typeof f == "function" && (za(t, n, f, r), (a = t.memoizedState)),
          (l = Zt || Tf(t, n, l, r, d, a, u))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      jp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : ft(t.type, l)),
      (s.props = u),
      (c = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = at(a))
        : ((a = We(n) ? In : je.current), (a = yr(t, a))));
    var y = n.getDerivedStateFromProps;
    ((f =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== c || d !== a) && Rf(t, s, r, a)),
      (Zt = !1),
      (d = t.memoizedState),
      (s.state = d),
      ms(t, r, s, o));
    var p = t.memoizedState;
    l !== c || d !== p || Ue.current || Zt
      ? (typeof y == "function" && (za(t, n, y, r), (p = t.memoizedState)),
        (u = Zt || Tf(t, n, u, r, d, p, a) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, p, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, p, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (s.props = r),
        (s.state = p),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $a(e, t, n, r, i, o);
}
function $a(e, t, n, r, o, i) {
  am(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (o && Ef(t, n, !1), Vt(e, t, i));
  ((r = t.stateNode), (Qx.current = t));
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = xr(t, e.child, null, i)), (t.child = xr(t, null, l, i)))
      : Oe(e, t, l, i),
    (t.memoizedState = r.state),
    o && Ef(t, n, !0),
    t.child
  );
}
function um(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Sf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Sf(e, t.context, !1),
    Vu(e, t.containerInfo));
}
function Df(e, t, n, r, o) {
  return (vr(), Ou(o), (t.flags |= 256), Oe(e, t, n, r), t.child);
}
var Fa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ha(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cm(e, t, n) {
  var r = t.pendingProps,
    o = ge.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ue(ge, o & 1),
    e === null)
  )
    return (
      Ia(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Ys(s, r, 0, null)),
              (e = bn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ha(n)),
              (t.memoizedState = Fa),
              e)
            : Gu(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Kx(e, t, s, r, l, o, n);
  if (i) {
    ((i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = dn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = dn(l, i)) : ((i = bn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ha(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fa),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Gu(e, t) {
  return (
    (t = Ys({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wi(e, t, n, r) {
  return (
    r !== null && Ou(r),
    xr(t, e.child, null, n),
    (e = Gu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Kx(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fl(Error(B(422)))), wi(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Ys({ mode: "visible", children: r.children }, o, 0, null)),
          (i = bn(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && xr(t, e.child, null, s),
          (t.child.memoizedState = Ha(s)),
          (t.memoizedState = Fa),
          i);
  if (!(t.mode & 1)) return wi(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (i = Error(B(419))),
      (r = Fl(i, r, void 0)),
      wi(e, t, s, r)
    );
  }
  if (((l = (s & e.childLanes) !== 0), Be || l)) {
    if (((r = Pe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Bt(e, o), xt(r, e, o, -1)));
    }
    return (rc(), (r = Fl(Error(B(421)))), wi(e, t, s, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = aw.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ge = an(o.nextSibling)),
      (Ze = t),
      (he = !0),
      (pt = null),
      e !== null &&
        ((ot[it++] = jt),
        (ot[it++] = Ot),
        (ot[it++] = Ln),
        (jt = e.id),
        (Ot = e.overflow),
        (Ln = t)),
      (t = Gu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function $f(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), La(e.return, t, n));
}
function Hl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function fm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Oe(e, t, r.children, n), (r = ge.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $f(e, n, t);
        else if (e.tag === 19) $f(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((ue(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && gs(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Hl(t, !1, o, n, i));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gs(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Hl(t, !0, n, null, i);
        break;
      case "together":
        Hl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(B(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = dn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function qx(e, t, n) {
  switch (t.tag) {
    case 3:
      (um(t), vr());
      break;
    case 5:
      Op(t);
      break;
    case 1:
      We(t.type) && cs(t);
      break;
    case 4:
      Vu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (ue(hs, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? cm(e, t, n)
            : (ue(ge, ge.current & 1),
              (e = Vt(e, t, n)),
              e !== null ? e.sibling : null);
      ue(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ue(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), lm(e, t, n));
  }
  return Vt(e, t, n);
}
var dm, Ba, hm, pm;
dm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Ba = function () {};
hm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), Nn(Mt.current));
    var i = null;
    switch (n) {
      case "input":
        ((o = ca(e, o)), (r = ca(e, r)), (i = []));
        break;
      case "select":
        ((o = ve({}, o, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (i = []));
        break;
      case "textarea":
        ((o = ha(e, o)), (r = ha(e, r)), (i = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = as);
    }
    ma(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (yo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else (n || (i || (i = []), i.push(u, n)), (n = a));
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (yo.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && fe("scroll", e),
                    i || l === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
pm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qr(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Gx(e, t, n) {
  var r = t.pendingProps;
  switch ((ju(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Ie(t), null);
    case 1:
      return (We(t.type) && us(), Ie(t), null);
    case 3:
      return (
        (r = t.stateNode),
        wr(),
        de(Ue),
        de(je),
        Wu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pt !== null && (qa(pt), (pt = null)))),
        Ba(e, t),
        Ie(t),
        null
      );
    case 5:
      Uu(t);
      var o = Nn(bo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (hm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166));
          return (Ie(t), null);
        }
        if (((e = Nn(Mt.current)), vi(t))) {
          ((r = t.stateNode), (n = t.type));
          var i = t.memoizedProps;
          switch (((r[Ct] = t), (r[Po] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (fe("cancel", r), fe("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < no.length; o++) fe(no[o], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (fe("error", r), fe("load", r));
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              (Yc(r, i), fe("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!i.multiple }),
                fe("invalid", r));
              break;
            case "textarea":
              (Kc(r, i), fe("invalid", r));
          }
          (ma(n, i), (o = null));
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      yi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      yi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : yo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              (ui(r), Qc(r, i, !0));
              break;
            case "textarea":
              (ui(r), qc(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = as);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Bh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ct] = t),
            (e[Po] = r),
            dm(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = ga(n, r)), n)) {
              case "dialog":
                (fe("cancel", e), fe("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (fe("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < no.length; o++) fe(no[o], e);
                o = r;
                break;
              case "source":
                (fe("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (fe("error", e), fe("load", e), (o = r));
                break;
              case "details":
                (fe("toggle", e), (o = r));
                break;
              case "input":
                (Yc(e, r), (o = ca(e, r)), fe("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ve({}, r, { value: void 0 })),
                  fe("invalid", e));
                break;
              case "textarea":
                (Kc(e, r), (o = ha(e, r)), fe("invalid", e));
                break;
              default:
                o = r;
            }
            (ma(n, o), (l = o));
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Wh(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Vh(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && vo(e, a)
                        : typeof a == "number" && vo(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (yo.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && fe("scroll", e)
                          : a != null && Su(e, i, a, s));
              }
            switch (n) {
              case "input":
                (ui(e), Qc(e, r, !1));
                break;
              case "textarea":
                (ui(e), qc(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ar(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      ar(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = as);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Ie(t), null);
    case 6:
      if (e && t.stateNode != null) pm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(B(166));
        if (((n = Nn(bo.current)), Nn(Mt.current), vi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ct] = t),
            (i = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                yi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ct] = t),
            (t.stateNode = r));
      }
      return (Ie(t), null);
    case 13:
      if (
        (de(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && Ge !== null && t.mode & 1 && !(t.flags & 128))
          (Ap(), vr(), (t.flags |= 98560), (i = !1));
        else if (((i = vi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(B(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(B(317));
            i[Ct] = t;
          } else
            (vr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ie(t), (i = !1));
        } else (pt !== null && (qa(pt), (pt = null)), (i = !0));
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Ne === 0 && (Ne = 3) : rc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return (
        wr(),
        Ba(e, t),
        e === null && No(t.stateNode.containerInfo),
        Ie(t),
        null
      );
    case 10:
      return (Fu(t.type._context), Ie(t), null);
    case 17:
      return (We(t.type) && us(), Ie(t), null);
    case 19:
      if ((de(ge), (i = t.memoizedState), i === null)) return (Ie(t), null);
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Qr(i, !1);
        else {
          if (Ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = gs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Qr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (ue(ge, (ge.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Se() > Er &&
            ((t.flags |= 128), (r = !0), Qr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Qr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !he)
            )
              return (Ie(t), null);
          } else
            2 * Se() - i.renderingStartTime > Er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Qr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Se()),
          (t.sibling = null),
          (n = ge.current),
          ue(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        nc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(B(156, t.tag));
}
function Zx(e, t) {
  switch ((ju(t), t.tag)) {
    case 1:
      return (
        We(t.type) && us(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wr(),
        de(Ue),
        de(je),
        Wu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Uu(t), null);
    case 13:
      if (
        (de(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(B(340));
        vr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (de(ge), null);
    case 4:
      return (wr(), null);
    case 10:
      return (Fu(t.type._context), null);
    case 22:
    case 23:
      return (nc(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Si = !1,
  Le = !1,
  Jx = typeof WeakSet == "function" ? WeakSet : Set,
  X = null;
function or(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function Va(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var Ff = !1;
function ew(e, t) {
  if (((Ca = is), (e = xp()), Lu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, i.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var y;
              c !== n || (o !== 0 && c.nodeType !== 3) || (l = s + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (a = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (y = c.firstChild) !== null;
            )
              ((d = c), (c = y));
            for (;;) {
              if (c === e) break t;
              if (
                (d === n && ++u === o && (l = s),
                d === i && ++f === r && (a = s),
                (y = c.nextSibling) !== null)
              )
                break;
              ((c = d), (d = c.parentNode));
            }
            c = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Pa = { focusedElem: e, selectionRange: n }, is = !1, X = t; X !== null; )
    if (((t = X), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (X = e));
    else
      for (; X !== null; ) {
        t = X;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var v = p.memoizedProps,
                    w = p.memoizedState,
                    m = t.stateNode,
                    g = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : ft(t.type, v),
                      w,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(B(163));
            }
        } catch (x) {
          we(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (X = e));
          break;
        }
        X = t.return;
      }
  return ((p = Ff), (Ff = !1), p);
}
function fo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        ((o.destroy = void 0), i !== void 0 && Va(t, n, i));
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ws(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ua(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function mm(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), mm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ct], delete t[Po], delete t[Ta], delete t[jx], delete t[Ox])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function gm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = as)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wa(e, t, n), e = e.sibling; e !== null; )
      (Wa(e, t, n), (e = e.sibling));
}
function Xa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xa(e, t, n), e = e.sibling; e !== null; )
      (Xa(e, t, n), (e = e.sibling));
}
var Me = null,
  dt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) (ym(e, t, n), (n = n.sibling));
}
function ym(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function")
    try {
      Pt.onCommitFiberUnmount(Os, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || or(n, t);
    case 6:
      var r = Me,
        o = dt;
      ((Me = null),
        Qt(e, t, n),
        (Me = r),
        (dt = o),
        Me !== null &&
          (dt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode)));
      break;
    case 18:
      Me !== null &&
        (dt
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ll(e.parentNode, n)
              : e.nodeType === 1 && Ll(e, n),
            Eo(e))
          : Ll(Me, n.stateNode));
      break;
    case 4:
      ((r = Me),
        (o = dt),
        (Me = n.stateNode.containerInfo),
        (dt = !0),
        Qt(e, t, n),
        (Me = r),
        (dt = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          ((i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Va(n, t, s),
            (o = o.next));
        } while (o !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !Le &&
        (or(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          we(n, t, l);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), Qt(e, t, n), (Le = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function Bf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Jx()),
      t.forEach(function (r) {
        var o = uw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((Me = l.stateNode), (dt = !1));
              break e;
            case 3:
              ((Me = l.stateNode.containerInfo), (dt = !0));
              break e;
            case 4:
              ((Me = l.stateNode.containerInfo), (dt = !0));
              break e;
          }
          l = l.return;
        }
        if (Me === null) throw Error(B(160));
        (ym(i, s, o), (Me = null), (dt = !1));
        var a = o.alternate;
        (a !== null && (a.return = null), (o.return = null));
      } catch (u) {
        we(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (vm(t, e), (t = t.sibling));
}
function vm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), kt(e), r & 4)) {
        try {
          (fo(3, e, e.return), Ws(3, e));
        } catch (v) {
          we(e, e.return, v);
        }
        try {
          fo(5, e, e.return);
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 1:
      (ct(t, e), kt(e), r & 512 && n !== null && or(n, n.return));
      break;
    case 5:
      if (
        (ct(t, e),
        kt(e),
        r & 512 && n !== null && or(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          vo(o, "");
        } catch (v) {
          we(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (l === "input" && i.type === "radio" && i.name != null && Fh(o, i),
              ga(l, s));
            var u = ga(l, i);
            for (s = 0; s < a.length; s += 2) {
              var f = a[s],
                c = a[s + 1];
              f === "style"
                ? Wh(o, c)
                : f === "dangerouslySetInnerHTML"
                  ? Vh(o, c)
                  : f === "children"
                    ? vo(o, c)
                    : Su(o, f, c, u);
            }
            switch (l) {
              case "input":
                fa(o, i);
                break;
              case "textarea":
                Hh(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? ar(o, !!i.multiple, y, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ar(o, !!i.multiple, i.defaultValue, !0)
                      : ar(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Po] = i;
          } catch (v) {
            we(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ct(t, e), kt(e), r & 4)) {
        if (e.stateNode === null) throw Error(B(162));
        ((o = e.stateNode), (i = e.memoizedProps));
        try {
          o.nodeValue = i;
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Eo(t.containerInfo);
        } catch (v) {
          we(e, e.return, v);
        }
      break;
    case 4:
      (ct(t, e), kt(e));
      break;
    case 13:
      (ct(t, e),
        kt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ec = Se())),
        r & 4 && Bf(e));
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (u = Le) || f), ct(t, e), (Le = u)) : ct(t, e),
        kt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (X = e, f = e.child; f !== null; ) {
            for (c = X = f; X !== null; ) {
              switch (((d = X), (y = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fo(4, d, d.return);
                  break;
                case 1:
                  or(d, d.return);
                  var p = d.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount());
                    } catch (v) {
                      we(r, n, v);
                    }
                  }
                  break;
                case 5:
                  or(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Uf(c);
                    continue;
                  }
              }
              y !== null ? ((y.return = d), (X = y)) : Uf(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                ((o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = c.stateNode),
                      (a = c.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Uh("display", s))));
              } catch (v) {
                we(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (v) {
                we(e, e.return, v);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            ((c.child.return = c), (c = c.child));
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            (f === c && (f = null), (c = c.return));
          }
          (f === c && (f = null),
            (c.sibling.return = c.return),
            (c = c.sibling));
        }
      }
      break;
    case 19:
      (ct(t, e), kt(e), r & 4 && Bf(e));
      break;
    case 21:
      break;
    default:
      (ct(t, e), kt(e));
  }
}
function kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(B(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (vo(o, ""), (r.flags &= -33));
          var i = Hf(e);
          Xa(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Hf(e);
          Wa(e, l, s);
          break;
        default:
          throw Error(B(161));
      }
    } catch (a) {
      we(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function tw(e, t, n) {
  ((X = e), xm(e));
}
function xm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; X !== null; ) {
    var o = X,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Si;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Le;
        l = Si;
        var u = Le;
        if (((Si = s), (Le = a) && !u))
          for (X = o; X !== null; )
            ((s = X),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Wf(o)
                : a !== null
                  ? ((a.return = s), (X = a))
                  : Wf(o));
        for (; i !== null; ) ((X = i), xm(i), (i = i.sibling));
        ((X = o), (Si = l), (Le = u));
      }
      Vf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (X = i)) : Vf(e);
  }
}
function Vf(e) {
  for (; X !== null; ) {
    var t = X;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || Ws(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Pf(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pf(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && Eo(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(B(163));
          }
        Le || (t.flags & 512 && Ua(t));
      } catch (d) {
        we(t, t.return, d);
      }
    }
    if (t === e) {
      X = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (X = n));
      break;
    }
    X = t.return;
  }
}
function Uf(e) {
  for (; X !== null; ) {
    var t = X;
    if (t === e) {
      X = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (X = n));
      break;
    }
    X = t.return;
  }
}
function Wf(e) {
  for (; X !== null; ) {
    var t = X;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ws(4, t);
          } catch (a) {
            we(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              we(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ua(t);
          } catch (a) {
            we(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ua(t);
          } catch (a) {
            we(t, s, a);
          }
      }
    } catch (a) {
      we(t, t.return, a);
    }
    if (t === e) {
      X = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (X = l));
      break;
    }
    X = t.return;
  }
}
var nw = Math.ceil,
  xs = Wt.ReactCurrentDispatcher,
  Zu = Wt.ReactCurrentOwner,
  lt = Wt.ReactCurrentBatchConfig,
  ie = 0,
  Pe = null,
  Ee = null,
  be = 0,
  Ke = 0,
  ir = yn(0),
  Ne = 0,
  Io = null,
  jn = 0,
  Xs = 0,
  Ju = 0,
  ho = null,
  He = null,
  ec = 0,
  Er = 1 / 0,
  Lt = null,
  ws = !1,
  Ya = null,
  cn = null,
  Ei = !1,
  rn = null,
  Ss = 0,
  po = 0,
  Qa = null,
  Vi = -1,
  Ui = 0;
function De() {
  return ie & 6 ? Se() : Vi !== -1 ? Vi : (Vi = Se());
}
function fn(e) {
  return e.mode & 1
    ? ie & 2 && be !== 0
      ? be & -be
      : $x.transition !== null
        ? (Ui === 0 && (Ui = rp()), Ui)
        : ((e = ae),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cp(e.type))),
          e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < po) throw ((po = 0), (Qa = null), Error(B(185)));
  (Uo(e, n, r),
    (!(ie & 2) || e !== Pe) &&
      (e === Pe && (!(ie & 2) && (Xs |= n), Ne === 4 && en(e, be)),
      Xe(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && ((Er = Se() + 500), Bs && vn())));
}
function Xe(e, t) {
  var n = e.callbackNode;
  $v(e, t);
  var r = os(e, e === Pe ? be : 0);
  if (r === 0)
    (n !== null && Jc(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Jc(n), t === 1))
      (e.tag === 0 ? Dx(Xf.bind(null, e)) : bp(Xf.bind(null, e)),
        Lx(function () {
          !(ie & 6) && vn();
        }),
        (n = null));
    else {
      switch (op(r)) {
        case 1:
          n = Cu;
          break;
        case 4:
          n = tp;
          break;
        case 16:
          n = rs;
          break;
        case 536870912:
          n = np;
          break;
        default:
          n = rs;
      }
      n = Pm(n, wm.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function wm(e, t) {
  if (((Vi = -1), (Ui = 0), ie & 6)) throw Error(B(327));
  var n = e.callbackNode;
  if (hr() && e.callbackNode !== n) return null;
  var r = os(e, e === Pe ? be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Es(e, r);
  else {
    t = r;
    var o = ie;
    ie |= 2;
    var i = Em();
    (Pe !== e || be !== t) && ((Lt = null), (Er = Se() + 500), Mn(e, t));
    do
      try {
        iw();
        break;
      } catch (l) {
        Sm(e, l);
      }
    while (!0);
    ($u(),
      (xs.current = i),
      (ie = o),
      Ee !== null ? (t = 0) : ((Pe = null), (be = 0), (t = Ne)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Sa(e)), o !== 0 && ((r = o), (t = Ka(e, o)))), t === 1)
    )
      throw ((n = Io), Mn(e, 0), en(e, r), Xe(e, Se()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !rw(o) &&
          ((t = Es(e, r)),
          t === 2 && ((i = Sa(e)), i !== 0 && ((r = i), (t = Ka(e, i)))),
          t === 1))
      )
        throw ((n = Io), Mn(e, 0), en(e, r), Xe(e, Se()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(B(345));
        case 2:
          Sn(e, He, Lt);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = ec + 500 - Se()), 10 < t))
          ) {
            if (os(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (De(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = ba(Sn.bind(null, e, He, Lt), t);
            break;
          }
          Sn(e, He, Lt);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - vt(r);
            ((i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i));
          }
          if (
            ((r = o),
            (r = Se() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * nw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ba(Sn.bind(null, e, He, Lt), r);
            break;
          }
          Sn(e, He, Lt);
          break;
        case 5:
          Sn(e, He, Lt);
          break;
        default:
          throw Error(B(329));
      }
    }
  }
  return (Xe(e, Se()), e.callbackNode === n ? wm.bind(null, e) : null);
}
function Ka(e, t) {
  var n = ho;
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    (e = Es(e, t)),
    e !== 2 && ((t = He), (He = n), t !== null && qa(t)),
    e
  );
}
function qa(e) {
  He === null ? (He = e) : He.push.apply(He, e);
}
function rw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!wt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function en(e, t) {
  for (
    t &= ~Ju,
      t &= ~Xs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - vt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Xf(e) {
  if (ie & 6) throw Error(B(327));
  hr();
  var t = os(e, 0);
  if (!(t & 1)) return (Xe(e, Se()), null);
  var n = Es(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Sa(e);
    r !== 0 && ((t = r), (n = Ka(e, r)));
  }
  if (n === 1) throw ((n = Io), Mn(e, 0), en(e, t), Xe(e, Se()), n);
  if (n === 6) throw Error(B(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Sn(e, He, Lt),
    Xe(e, Se()),
    null
  );
}
function tc(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    ((ie = n), ie === 0 && ((Er = Se() + 500), Bs && vn()));
  }
}
function On(e) {
  rn !== null && rn.tag === 0 && !(ie & 6) && hr();
  var t = ie;
  ie |= 1;
  var n = lt.transition,
    r = ae;
  try {
    if (((lt.transition = null), (ae = 1), e)) return e();
  } finally {
    ((ae = r), (lt.transition = n), (ie = t), !(ie & 6) && vn());
  }
}
function nc() {
  ((Ke = ir.current), de(ir));
}
function Mn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ix(n)), Ee !== null))
    for (n = Ee.return; n !== null; ) {
      var r = n;
      switch ((ju(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && us());
          break;
        case 3:
          (wr(), de(Ue), de(je), Wu());
          break;
        case 5:
          Uu(r);
          break;
        case 4:
          wr();
          break;
        case 13:
          de(ge);
          break;
        case 19:
          de(ge);
          break;
        case 10:
          Fu(r.type._context);
          break;
        case 22:
        case 23:
          nc();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (Ee = e = dn(e.current, null)),
    (be = Ke = t),
    (Ne = 0),
    (Io = null),
    (Ju = Xs = jn = 0),
    (He = ho = null),
    _n !== null)
  ) {
    for (t = 0; t < _n.length; t++)
      if (((n = _n[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          ((i.next = o), (r.next = s));
        }
        n.pending = r;
      }
    _n = null;
  }
  return e;
}
function Sm(e, t) {
  do {
    var n = Ee;
    try {
      if (($u(), (Fi.current = vs), ys)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        ys = !1;
      }
      if (
        ((zn = 0),
        (Ce = _e = ye = null),
        (co = !1),
        (To = 0),
        (Zu.current = null),
        n === null || n.return === null)
      ) {
        ((Ne = 1), (Io = t), (Ee = null));
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = be),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            f = l,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var y = If(s);
          if (y !== null) {
            ((y.flags &= -257),
              Lf(y, s, l, i, t),
              y.mode & 1 && Af(i, u, t),
              (t = y),
              (a = u));
            var p = t.updateQueue;
            if (p === null) {
              var v = new Set();
              (v.add(a), (t.updateQueue = v));
            } else p.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (Af(i, u, t), rc());
              break e;
            }
            a = Error(B(426));
          }
        } else if (he && l.mode & 1) {
          var w = If(s);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              Lf(w, s, l, i, t),
              Ou(Sr(a, l)));
            break e;
          }
        }
        ((i = a = Sr(a, l)),
          Ne !== 4 && (Ne = 2),
          ho === null ? (ho = [i]) : ho.push(i),
          (i = s));
        do {
          switch (i.tag) {
            case 3:
              ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
              var m = om(i, a, t);
              Cf(i, m);
              break e;
            case 1:
              l = a;
              var g = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (cn === null || !cn.has(h))))
              ) {
                ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                var x = im(i, l, t);
                Cf(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _m(n);
    } catch (E) {
      ((t = E), Ee === n && n !== null && (Ee = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Em() {
  var e = xs.current;
  return ((xs.current = vs), e === null ? vs : e);
}
function rc() {
  ((Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
    Pe === null || (!(jn & 268435455) && !(Xs & 268435455)) || en(Pe, be));
}
function Es(e, t) {
  var n = ie;
  ie |= 2;
  var r = Em();
  (Pe !== e || be !== t) && ((Lt = null), Mn(e, t));
  do
    try {
      ow();
      break;
    } catch (o) {
      Sm(e, o);
    }
  while (!0);
  if (($u(), (ie = n), (xs.current = r), Ee !== null)) throw Error(B(261));
  return ((Pe = null), (be = 0), Ne);
}
function ow() {
  for (; Ee !== null; ) km(Ee);
}
function iw() {
  for (; Ee !== null && !Tv(); ) km(Ee);
}
function km(e) {
  var t = Cm(e.alternate, e, Ke);
  ((e.memoizedProps = e.pendingProps),
    t === null ? _m(e) : (Ee = t),
    (Zu.current = null));
}
function _m(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zx(n, t)), n !== null)) {
        ((n.flags &= 32767), (Ee = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Ne = 6), (Ee = null));
        return;
      }
    } else if (((n = Gx(n, t, Ke)), n !== null)) {
      Ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  Ne === 0 && (Ne = 5);
}
function Sn(e, t, n) {
  var r = ae,
    o = lt.transition;
  try {
    ((lt.transition = null), (ae = 1), sw(e, t, n, r));
  } finally {
    ((lt.transition = o), (ae = r));
  }
  return null;
}
function sw(e, t, n, r) {
  do hr();
  while (rn !== null);
  if (ie & 6) throw Error(B(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(B(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var i = n.lanes | n.childLanes;
  if (
    (Fv(e, i),
    e === Pe && ((Ee = Pe = null), (be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ei ||
      ((Ei = !0),
      Pm(rs, function () {
        return (hr(), null);
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ((i = lt.transition), (lt.transition = null));
    var s = ae;
    ae = 1;
    var l = ie;
    ((ie |= 4),
      (Zu.current = null),
      ew(e, n),
      vm(n, e),
      Cx(Pa),
      (is = !!Ca),
      (Pa = Ca = null),
      (e.current = n),
      tw(n),
      Rv(),
      (ie = l),
      (ae = s),
      (lt.transition = i));
  } else e.current = n;
  if (
    (Ei && ((Ei = !1), (rn = e), (Ss = o)),
    (i = e.pendingLanes),
    i === 0 && (cn = null),
    Lv(n.stateNode),
    Xe(e, Se()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (ws) throw ((ws = !1), (e = Ya), (Ya = null), e);
  return (
    Ss & 1 && e.tag !== 0 && hr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Qa ? po++ : ((po = 0), (Qa = e))) : (po = 0),
    vn(),
    null
  );
}
function hr() {
  if (rn !== null) {
    var e = op(Ss),
      t = lt.transition,
      n = ae;
    try {
      if (((lt.transition = null), (ae = 16 > e ? 16 : e), rn === null))
        var r = !1;
      else {
        if (((e = rn), (rn = null), (Ss = 0), ie & 6)) throw Error(B(331));
        var o = ie;
        for (ie |= 4, X = e.current; X !== null; ) {
          var i = X,
            s = i.child;
          if (X.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (X = u; X !== null; ) {
                  var f = X;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fo(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null) ((c.return = f), (X = c));
                  else
                    for (; X !== null; ) {
                      f = X;
                      var d = f.sibling,
                        y = f.return;
                      if ((mm(f), f === u)) {
                        X = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = y), (X = d));
                        break;
                      }
                      X = y;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var v = p.child;
                if (v !== null) {
                  p.child = null;
                  do {
                    var w = v.sibling;
                    ((v.sibling = null), (v = w));
                  } while (v !== null);
                }
              }
              X = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) ((s.return = i), (X = s));
          else
            e: for (; X !== null; ) {
              if (((i = X), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fo(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                ((m.return = i.return), (X = m));
                break e;
              }
              X = i.return;
            }
        }
        var g = e.current;
        for (X = g; X !== null; ) {
          s = X;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) ((h.return = s), (X = h));
          else
            e: for (s = g; X !== null; ) {
              if (((l = X), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ws(9, l);
                  }
                } catch (E) {
                  we(l, l.return, E);
                }
              if (l === s) {
                X = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                ((x.return = l.return), (X = x));
                break e;
              }
              X = l.return;
            }
        }
        if (
          ((ie = o), vn(), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        )
          try {
            Pt.onPostCommitFiberRoot(Os, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ae = n), (lt.transition = t));
    }
  }
  return !1;
}
function Yf(e, t, n) {
  ((t = Sr(n, t)),
    (t = om(e, t, 1)),
    (e = un(e, t, 1)),
    (t = De()),
    e !== null && (Uo(e, 1, t), Xe(e, t)));
}
function we(e, t, n) {
  if (e.tag === 3) Yf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cn === null || !cn.has(r)))
        ) {
          ((e = Sr(n, e)),
            (e = im(t, e, 1)),
            (t = un(t, e, 1)),
            (e = De()),
            t !== null && (Uo(t, 1, e), Xe(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function lw(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (be & n) === n &&
      (Ne === 4 || (Ne === 3 && (be & 130023424) === be && 500 > Se() - ec)
        ? Mn(e, 0)
        : (Ju |= n)),
    Xe(e, t));
}
function Nm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = di), (di <<= 1), !(di & 130023424) && (di = 4194304))
      : (t = 1));
  var n = De();
  ((e = Bt(e, t)), e !== null && (Uo(e, t, n), Xe(e, n)));
}
function aw(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Nm(e, n));
}
function uw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(B(314));
  }
  (r !== null && r.delete(t), Nm(e, n));
}
var Cm;
Cm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Be = !1), qx(e, t, n));
      Be = !!(e.flags & 131072);
    }
  else ((Be = !1), he && t.flags & 1048576 && Tp(t, ds, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Bi(e, t), (e = t.pendingProps));
      var o = yr(t, je.current);
      (dr(t, n), (o = Yu(null, t, r, e, o, n)));
      var i = Qu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            We(r) ? ((i = !0), cs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Bu(t),
            (o.updater = Us),
            (t.stateNode = o),
            (o._reactInternals = t),
            ja(t, r, e, n),
            (t = $a(null, t, r, !0, i, n)))
          : ((t.tag = 0), he && i && zu(t), Oe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = fw(r)),
          (e = ft(r, e)),
          o)
        ) {
          case 0:
            t = Da(null, t, r, e, n);
            break e;
          case 1:
            t = Of(null, t, r, e, n);
            break e;
          case 11:
            t = zf(null, t, r, e, n);
            break e;
          case 14:
            t = jf(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(B(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        Da(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        Of(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((um(t), e === null)) throw Error(B(387));
        ((r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          jp(e, t),
          ms(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ((o = Sr(Error(B(423)), t)), (t = Df(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = Sr(Error(B(424)), t)), (t = Df(e, t, r, n, o)));
            break e;
          } else
            for (
              Ge = an(t.stateNode.containerInfo.firstChild),
                Ze = t,
                he = !0,
                pt = null,
                n = Lp(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((vr(), r === o)) {
            t = Vt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Op(t),
        e === null && Ia(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Ma(r, o) ? (s = null) : i !== null && Ma(r, i) && (t.flags |= 32),
        am(e, t),
        Oe(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && Ia(t), null);
    case 13:
      return cm(e, t, n);
    case 4:
      return (
        Vu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = xr(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        zf(e, t, r, o, n)
      );
    case 7:
      return (Oe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Oe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Oe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ue(hs, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (wt(i.value, s)) {
            if (i.children === o.children && !Ue.current) {
              t = Vt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ((a = $t(-1, n & -n)), (a.tag = 2));
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        (f === null
                          ? (a.next = a)
                          : ((a.next = f.next), (f.next = a)),
                          (u.pending = a));
                      }
                    }
                    ((i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      La(i.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(B(341));
                ((s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  La(s, n, t),
                  (s = i.sibling));
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    ((i.return = s.return), (s = i));
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        (Oe(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        dr(t, n),
        (o = at(o)),
        (r = r(o)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ft(r, t.pendingProps)),
        (o = ft(r.type, o)),
        jf(e, t, r, o, n)
      );
    case 15:
      return sm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ft(r, o)),
        Bi(e, t),
        (t.tag = 1),
        We(r) ? ((e = !0), cs(t)) : (e = !1),
        dr(t, n),
        rm(t, r, o),
        ja(t, r, o, n),
        $a(null, t, r, !0, e, n)
      );
    case 19:
      return fm(e, t, n);
    case 22:
      return lm(e, t, n);
  }
  throw Error(B(156, t.tag));
};
function Pm(e, t) {
  return ep(e, t);
}
function cw(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function st(e, t, n, r) {
  return new cw(e, t, n, r);
}
function oc(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function fw(e) {
  if (typeof e == "function") return oc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ku)) return 11;
    if (e === _u) return 14;
  }
  return 2;
}
function dn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wi(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) oc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Kn:
        return bn(n.children, o, i, t);
      case Eu:
        ((s = 8), (o |= 8));
        break;
      case sa:
        return (
          (e = st(12, n, t, o | 2)),
          (e.elementType = sa),
          (e.lanes = i),
          e
        );
      case la:
        return ((e = st(13, n, t, o)), (e.elementType = la), (e.lanes = i), e);
      case aa:
        return ((e = st(19, n, t, o)), (e.elementType = aa), (e.lanes = i), e);
      case Oh:
        return Ys(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case zh:
              s = 10;
              break e;
            case jh:
              s = 9;
              break e;
            case ku:
              s = 11;
              break e;
            case _u:
              s = 14;
              break e;
            case Gt:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(B(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(s, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = i),
    t
  );
}
function bn(e, t, n, r) {
  return ((e = st(7, e, r, t)), (e.lanes = n), e);
}
function Ys(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = Oh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bl(e, t, n) {
  return ((e = st(6, e, null, t)), (e.lanes = n), e);
}
function Vl(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function dw(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = kl(0)),
    (this.expirationTimes = kl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = kl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function ic(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new dw(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = st(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bu(i),
    e
  );
}
function hw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Qn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Mm(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (Un(e) !== e || e.tag !== 1) throw Error(B(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(B(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return Mp(e, n, t);
  }
  return t;
}
function bm(e, t, n, r, o, i, s, l, a) {
  return (
    (e = ic(n, r, !0, e, o, i, s, l, a)),
    (e.context = Mm(null)),
    (n = e.current),
    (r = De()),
    (o = fn(n)),
    (i = $t(r, o)),
    (i.callback = t ?? null),
    un(n, i, o),
    (e.current.lanes = o),
    Uo(e, o, r),
    Xe(e, r),
    e
  );
}
function Qs(e, t, n, r) {
  var o = t.current,
    i = De(),
    s = fn(o);
  return (
    (n = Mm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $t(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(o, t, s)),
    e !== null && (xt(e, o, s, i), $i(e, o, s)),
    s
  );
}
function ks(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sc(e, t) {
  (Qf(e, t), (e = e.alternate) && Qf(e, t));
}
function pw() {
  return null;
}
var Tm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lc(e) {
  this._internalRoot = e;
}
Ks.prototype.render = lc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(B(409));
  Qs(e, t, null, null);
};
Ks.prototype.unmount = lc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (On(function () {
      Qs(null, e, null, null);
    }),
      (t[Ht] = null));
  }
};
function Ks(e) {
  this._internalRoot = e;
}
Ks.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = lp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jt.length && t !== 0 && t < Jt[n].priority; n++);
    (Jt.splice(n, 0, e), n === 0 && up(e));
  }
};
function ac(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Kf() {}
function mw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = ks(s);
        i.call(u);
      };
    }
    var s = bm(t, r, e, 0, null, !1, !1, "", Kf);
    return (
      (e._reactRootContainer = s),
      (e[Ht] = s.current),
      No(e.nodeType === 8 ? e.parentNode : e),
      On(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ks(a);
      l.call(u);
    };
  }
  var a = ic(e, 0, !1, null, null, !1, !1, "", Kf);
  return (
    (e._reactRootContainer = a),
    (e[Ht] = a.current),
    No(e.nodeType === 8 ? e.parentNode : e),
    On(function () {
      Qs(t, a, n, r);
    }),
    a
  );
}
function Gs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = ks(s);
        l.call(a);
      };
    }
    Qs(t, s, e, o);
  } else s = mw(n, t, e, o, r);
  return ks(s);
}
ip = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = to(t.pendingLanes);
        n !== 0 &&
          (Pu(t, n | 1), Xe(t, Se()), !(ie & 6) && ((Er = Se() + 500), vn()));
      }
      break;
    case 13:
      (On(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var o = De();
          xt(r, e, 1, o);
        }
      }),
        sc(e, 1));
  }
};
Mu = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = De();
      xt(t, e, 134217728, n);
    }
    sc(e, 134217728);
  }
};
sp = function (e) {
  if (e.tag === 13) {
    var t = fn(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = De();
      xt(n, e, t, r);
    }
    sc(e, t);
  }
};
lp = function () {
  return ae;
};
ap = function (e, t) {
  var n = ae;
  try {
    return ((ae = e), t());
  } finally {
    ae = n;
  }
};
va = function (e, t, n) {
  switch (t) {
    case "input":
      if ((fa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Hs(r);
            if (!o) throw Error(B(90));
            ($h(r), fa(r, o));
          }
        }
      }
      break;
    case "textarea":
      Hh(e, n);
      break;
    case "select":
      ((t = n.value), t != null && ar(e, !!n.multiple, t, !1));
  }
};
Qh = tc;
Kh = On;
var gw = { usingClientEntryPoint: !1, Events: [Xo, Jn, Hs, Xh, Yh, tc] },
  Kr = {
    findFiberByHostInstance: kn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  yw = {
    bundleType: Kr.bundleType,
    version: Kr.version,
    rendererPackageName: Kr.rendererPackageName,
    rendererConfig: Kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Zh(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Kr.findFiberByHostInstance || pw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ki.isDisabled && ki.supportsFiber)
    try {
      ((Os = ki.inject(yw)), (Pt = ki));
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gw;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ac(t)) throw Error(B(200));
  return hw(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!ac(e)) throw Error(B(299));
  var n = !1,
    r = "",
    o = Tm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ic(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ht] = t.current),
    No(e.nodeType === 8 ? e.parentNode : e),
    new lc(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(B(188))
      : ((e = Object.keys(e).join(",")), Error(B(268, e)));
  return ((e = Zh(t)), (e = e === null ? null : e.stateNode), e);
};
tt.flushSync = function (e) {
  return On(e);
};
tt.hydrate = function (e, t, n) {
  if (!qs(t)) throw Error(B(200));
  return Gs(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!ac(e)) throw Error(B(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Tm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = bm(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Ht] = t.current),
    No(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Ks(t);
};
tt.render = function (e, t, n) {
  if (!qs(t)) throw Error(B(200));
  return Gs(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!qs(e)) throw Error(B(40));
  return e._reactRootContainer
    ? (On(function () {
        Gs(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ht] = null));
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = tc;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qs(n)) throw Error(B(200));
  if (e == null || e._reactInternals === void 0) throw Error(B(38));
  return Gs(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function Rm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rm);
    } catch (e) {
      console.error(e);
    }
}
(Rm(), (Rh.exports = tt));
var vw = Rh.exports,
  qf = vw;
((oa.createRoot = qf.createRoot), (oa.hydrateRoot = qf.hydrateRoot));
function xw({ children: e, currentView: t, onViewChange: n }) {
  const [r, o] = I.useState(!1),
    i = [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
      },
      {
        id: "new",
        label: "+ New Project",
        icon: "M12 4v16m8-8H4",
        isPrimary: !0,
      },
      {
        id: "map",
        label: "Concept Map",
        icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
      },
      {
        id: "analysis",
        label: "Analysis",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      },
    ];
  return S.jsxs("div", {
    className:
      "min-h-screen w-screen bg-ceramic-base overflow-x-hidden flex flex-col",
    children: [
      S.jsxs("header", {
        className:
          "fixed top-0 left-0 right-0 z-50 h-20 glass-panel-light flex items-center justify-between px-8",
        children: [
          S.jsxs("div", {
            className: "flex items-center gap-2 cursor-pointer",
            onClick: () => n("dashboard"),
            children: [
              S.jsx("div", {
                className:
                  "w-8 h-8 rounded-lg bg-ceramic-base shadow-skeuo-outer flex items-center justify-center border border-cloud-accent/30",
                children: S.jsx("span", {
                  className: "text-cloud-accent font-black text-xl",
                  children: "<>",
                }),
              }),
              S.jsxs("h1", {
                className:
                  "text-2xl font-black tracking-tighter text-ink-dark italic",
                children: [
                  "IDEA",
                  S.jsx("span", {
                    className: "text-cloud-accent font-light not-italic",
                    children: "FORGE",
                  }),
                ],
              }),
            ],
          }),
          S.jsx("nav", {
            className: "flex items-center gap-4",
            children: i.map((s) =>
              S.jsxs(
                "button",
                {
                  onClick: () => n(s.id),
                  className: `flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold tracking-wide text-sm transition-all duration-300 ${s.isPrimary ? "bg-cloud-accent text-white shadow-[0_4px_12px_rgba(74,144,226,0.3)] hover:shadow-[0_6px_16px_rgba(74,144,226,0.4)] hover:-translate-y-0.5" : t === s.id ? "bg-ceramic-base shadow-skeuo-inner text-cloud-accent" : "text-ink-muted hover:text-ink-dark hover:bg-white/50"}`,
                  children: [
                    S.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: S.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2.5",
                        d: s.icon,
                      }),
                    }),
                    s.label,
                  ],
                },
                s.id,
              ),
            ),
          }),
          S.jsxs("div", {
            className: "relative",
            children: [
              S.jsxs("button", {
                onClick: () => o(!r),
                className:
                  "flex items-center gap-3 pl-6 border-l border-ink-muted/20 hover:opacity-80 transition-opacity",
                children: [
                  S.jsxs("div", {
                    className: "text-right hidden md:block",
                    children: [
                      S.jsx("span", {
                        className: "block text-sm font-bold text-ink-dark",
                        children: "Architect",
                      }),
                      S.jsx("span", {
                        className:
                          "block text-[10px] text-ink-muted uppercase tracking-widest",
                        children: "Active",
                      }),
                    ],
                  }),
                  S.jsx("div", {
                    className: `w-10 h-10 rounded-full bg-ceramic-base shadow-skeuo-outer border-2 border-white flex items-center justify-center text-cloud-accent font-black transition-transform ${r ? "scale-95 shadow-skeuo-inner" : ""}`,
                    children: "A",
                  }),
                ],
              }),
              r &&
                S.jsxs("div", {
                  className:
                    "absolute right-0 mt-4 w-48 py-2 bg-white/80 backdrop-blur-3xl rounded-2xl shadow-skeuo-outer border border-white flex flex-col z-50 animate-fade-in origin-top-right",
                  children: [
                    S.jsx("button", {
                      onClick: () => {
                        (o(!1), n("dashboard"));
                      },
                      className:
                        "px-4 py-2 text-left font-bold text-ink-dark shadow-skeuo-inner bg-ceramic-base m-2 rounded-xl hover:text-cloud-accent",
                      children: "Settings",
                    }),
                    S.jsx("button", {
                      onClick: () => {
                        (o(!1),
                          localStorage.removeItem("ideaforge_token"),
                          localStorage.removeItem("ideaforge_user_id"),
                          window.location.reload());
                      },
                      className:
                        "px-4 py-2 text-left font-bold text-ink-dark shadow-skeuo-inner bg-ceramic-base mx-2 mb-2 rounded-xl text-red-500 hover:text-red-600",
                      children: "Logout",
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      S.jsx("main", {
        className: "flex-1 pt-24 px-8 pb-8",
        children: S.jsx("div", {
          className: "max-w-7xl mx-auto h-full animate-fade-in",
          children: e,
        }),
      }),
    ],
  });
}
function Gf() {
  const e = [
    {
      label: "Total Projects",
      value: "6",
      icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
      color: "text-cloud-accent",
    },
    {
      label: "Active Projects",
      value: "2",
      icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z",
      color: "text-green-500",
    },
    {
      label: "Completed",
      value: "1",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      color: "text-teal-500",
    },
    {
      label: "Collaborative",
      value: "3",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      color: "text-indigo-500",
    },
  ];
  return S.jsxs("div", {
    className: "space-y-8 scale-in-slow",
    children: [
      S.jsxs("div", {
        children: [
          S.jsx("h2", {
            className: "text-3xl font-black text-ink-dark",
            children: "Project Dashboard",
          }),
          S.jsx("p", {
            className: "text-ink-muted font-medium mt-1",
            children: "Manage and track your AI-powered development projects",
          }),
        ],
      }),
      S.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
        children: e.map((t, n) =>
          S.jsxs(
            "div",
            {
              className:
                "bg-ceramic-base rounded-2xl p-6 shadow-skeuo-outer flex items-center justify-between border border-white/50",
              children: [
                S.jsxs("div", {
                  children: [
                    S.jsx("p", {
                      className: "text-4xl font-black text-ink-dark",
                      children: t.value,
                    }),
                    S.jsx("p", {
                      className:
                        "text-sm font-bold text-ink-muted uppercase tracking-wider mt-1",
                      children: t.label,
                    }),
                  ],
                }),
                S.jsx("div", {
                  className: `w-12 h-12 rounded-xl shadow-skeuo-inner flex items-center justify-center bg-ceramic-base ${t.color}`,
                  children: S.jsx("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: S.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: t.icon,
                    }),
                  }),
                }),
              ],
            },
            n,
          ),
        ),
      }),
      S.jsxs("div", {
        className:
          "bg-ceramic-base rounded-3xl p-8 shadow-skeuo-outer border border-white/50 mt-8 min-h-[300px]",
        children: [
          S.jsx("div", {
            className:
              "flex justify-between items-center border-b border-ink-muted/10 pb-4 mb-4",
            children: S.jsx("input", {
              type: "text",
              placeholder: "Search projects...",
              className:
                "bg-ceramic-dark shadow-skeuo-inner px-4 py-2 rounded-lg text-sm w-64 focus:outline-none focus:ring-1 focus:ring-cloud-accent",
            }),
          }),
          S.jsx("div", {
            className:
              "flex items-center justify-center h-48 text-ink-muted font-medium italic",
            children:
              "Backend Analyst: Connect API to populate project list here.",
          }),
        ],
      }),
    ],
  });
}
function ww({ isOpen: e, onClose: t, onSelect: n }) {
  const [r, o] = I.useState("simple");
  return e
    ? S.jsx("div", {
        className:
          "fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: S.jsxs("div", {
          className:
            "bg-white/80 backdrop-blur-3xl p-10 rounded-[2.5rem] shadow-glass-depth border border-white max-w-lg w-full scale-in-slow",
          children: [
            S.jsx("h3", {
              className:
                "text-3xl font-black text-ink-dark tracking-tight mb-8",
              children: "Set Your Forging Depth",
            }),
            S.jsx("div", {
              className: "flex flex-col gap-4",
              children: ["simple", "moderate", "complex"].map((i) =>
                S.jsxs(
                  "button",
                  {
                    onClick: () => o(i),
                    className: `w-full p-6 rounded-2xl transition-all duration-300 flex items-center gap-6 ${r === i ? "bg-ceramic-base shadow-skeuo-outer border-2 border-cloud-accent" : "bg-ceramic-dark hover:bg-ceramic-base/60"}`,
                    children: [
                      S.jsx("div", {
                        className: `w-8 h-8 rounded-full shadow-skeuo-inner flex items-center justify-center ${r === i ? "bg-cloud-accent" : "bg-ceramic-dark"}`,
                        children:
                          r === i &&
                          S.jsx("div", {
                            className: "w-3 h-3 bg-white rounded-full",
                          }),
                      }),
                      S.jsxs("div", {
                        children: [
                          S.jsx("span", {
                            className:
                              "block text-xl font-bold uppercase tracking-wide text-ink-dark",
                            children: i,
                          }),
                          S.jsx("span", {
                            className:
                              "block text-xs font-medium text-ink-muted mt-0.5",
                            children:
                              i === "simple"
                                ? "5 Targeted Questions"
                                : i === "moderate"
                                  ? "15 In-Depth Questions"
                                  : "25 Comprehensive Questions",
                          }),
                        ],
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
            S.jsxs("div", {
              className: "flex gap-4 mt-12 justify-end",
              children: [
                S.jsx("button", {
                  onClick: t,
                  className:
                    "px-6 py-3 rounded-xl bg-ceramic-dark text-ink-muted font-bold hover:text-ink-dark",
                  children: "Cancel",
                }),
                S.jsx("button", {
                  onClick: () => n(r),
                  className:
                    "px-8 py-3 rounded-xl bg-ceramic-base text-cloud-accent font-black tracking-widest uppercase shadow-skeuo-outer active:shadow-skeuo-inner",
                  children: "Start Forging",
                }),
              ],
            }),
          ],
        }),
      })
    : null;
}
function Sw({ onGenerate: e }) {
  const [t, n] = I.useState(""),
    [r, o] = I.useState(!1),
    [i, s] = I.useState(!1),
    [l, a] = I.useState("simple"),
    u = () => {
      t.trim() && o(!0);
    },
    f = (c) => {
      (o(!1),
        a(c),
        s(!0),
        setTimeout(() => {
          (e({ idea: t, depth: c }), s(!1));
        }, 4e3));
    };
  return i
    ? S.jsxs("div", {
        className:
          "h-full w-full flex flex-col items-center justify-center relative scale-in-slow",
        children: [
          S.jsxs("div", {
            className: "relative flex items-center justify-center",
            children: [
              S.jsx("div", {
                className:
                  "absolute w-64 h-64 bg-cloud-blue/50 rounded-full animate-ping blur-2xl",
              }),
              S.jsx("div", {
                className:
                  "absolute w-40 h-40 bg-white/60 backdrop-blur-3xl border border-white rounded-full shadow-glass-depth animate-pulse",
              }),
              S.jsx("div", {
                className:
                  "z-10 w-20 h-20 bg-ceramic-base rounded-full shadow-skeuo-inner border-4 border-cloud-accent flex items-center justify-center",
                children: S.jsx("div", {
                  className:
                    "w-4 h-4 bg-cloud-accent rounded-full animate-bounce",
                }),
              }),
            ],
          }),
          S.jsx("h2", {
            className:
              "mt-12 text-3xl font-black text-ink-dark tracking-widest uppercase",
            children: "Forging Architecture",
          }),
          S.jsxs("p", {
            className:
              "mt-3 text-sm font-bold text-ink-muted uppercase tracking-widest animate-pulse",
            children: ["Analyzing ", l, " requirements..."],
          }),
        ],
      })
    : S.jsxs("div", {
        className:
          "h-full w-full flex flex-col items-center justify-center p-8 relative overflow-y-auto",
        children: [
          S.jsx(ww, { isOpen: r, onClose: () => o(!1), onSelect: f }),
          S.jsxs("div", {
            className:
              "w-full max-w-4xl flex flex-col items-center gap-12 z-10 scale-in-slow",
            children: [
              S.jsxs("div", {
                className: "text-center space-y-2",
                children: [
                  S.jsxs("h1", {
                    className:
                      "text-8xl font-black tracking-tighter text-ink-dark italic drop-shadow-sm",
                    children: [
                      "IDEA",
                      S.jsx("span", {
                        className: "text-cloud-accent font-light not-italic",
                        children: "FORGE",
                      }),
                    ],
                  }),
                  S.jsx("p", {
                    className:
                      "text-sm text-ink-muted font-bold tracking-[0.2em] uppercase",
                    children: "Blueprint Generator & Flowchart Architect",
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "w-full flex flex-col gap-3",
                children: [
                  S.jsx("label", {
                    className:
                      "text-[10px] font-bold text-ink-muted uppercase tracking-widest pl-2",
                    children: "Project Concept",
                  }),
                  S.jsx("textarea", {
                    value: t,
                    onChange: (c) => n(c.target.value),
                    placeholder:
                      "Describe your app or web platform. What is the core problem it solves?",
                    className:
                      "w-full h-56 p-8 rounded-[2rem] bg-ceramic-base shadow-skeuo-inner text-ink-dark focus:outline-none focus:ring-2 focus:ring-cloud-accent/20 transition-all placeholder-ink-muted/40 font-medium text-lg resize-none leading-relaxed",
                  }),
                ],
              }),
              S.jsxs("button", {
                onClick: u,
                disabled: !t.trim(),
                className:
                  "group relative px-12 py-5 rounded-2xl bg-ceramic-base text-cloud-accent font-black tracking-[0.2em] uppercase shadow-skeuo-outer active:shadow-skeuo-inner active:translate-y-[2px] transition-all disabled:opacity-50 disabled:shadow-none",
                children: [
                  "Initiate Forging",
                  S.jsx("div", {
                    className:
                      "absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
function ke(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = ke(e[n])) !== "" && (t += (t && " ") + r);
  else for (let n in e) e[n] && (t += (t && " ") + n);
  return t;
}
var Ew = { value: () => {} };
function Zs() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Xi(n);
}
function Xi(e) {
  this._ = e;
}
function kw(e, t) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (n) {
      var r = "",
        o = n.indexOf(".");
      if (
        (o >= 0 && ((r = n.slice(o + 1)), (n = n.slice(0, o))),
        n && !t.hasOwnProperty(n))
      )
        throw new Error("unknown type: " + n);
      return { type: n, name: r };
    });
}
Xi.prototype = Zs.prototype = {
  constructor: Xi,
  on: function (e, t) {
    var n = this._,
      r = kw(e + "", n),
      o,
      i = -1,
      s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; )
        if ((o = (e = r[i]).type) && (o = _w(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if ((o = (e = r[i]).type)) n[o] = Zf(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Zf(n[o], e.name, null);
    return this;
  },
  copy: function () {
    var e = {},
      t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Xi(e);
  },
  call: function (e, t) {
    if ((o = arguments.length - 2) > 0)
      for (var n = new Array(o), r = 0, o, i; r < o; ++r)
        n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function (e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o)
      r[o].value.apply(t, n);
  },
};
function _w(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t) return o.value;
}
function Zf(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      ((e[r] = Ew), (e = e.slice(0, r).concat(e.slice(r + 1))));
      break;
    }
  return (n != null && e.push({ name: t, value: n }), e);
}
var Ga = "http://www.w3.org/1999/xhtml";
const Jf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ga,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/",
};
function Js(e) {
  var t = (e += ""),
    n = t.indexOf(":");
  return (
    n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)),
    Jf.hasOwnProperty(t) ? { space: Jf[t], local: e } : e
  );
}
function Nw(e) {
  return function () {
    var t = this.ownerDocument,
      n = this.namespaceURI;
    return n === Ga && t.documentElement.namespaceURI === Ga
      ? t.createElement(e)
      : t.createElementNS(n, e);
  };
}
function Cw(e) {
  return function () {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Am(e) {
  var t = Js(e);
  return (t.local ? Cw : Nw)(t);
}
function Pw() {}
function uc(e) {
  return e == null
    ? Pw
    : function () {
        return this.querySelector(e);
      };
}
function Mw(e) {
  typeof e != "function" && (e = uc(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (
      var i = t[o], s = i.length, l = (r[o] = new Array(s)), a, u, f = 0;
      f < s;
      ++f
    )
      (a = i[f]) &&
        (u = e.call(a, a.__data__, f, i)) &&
        ("__data__" in a && (u.__data__ = a.__data__), (l[f] = u));
  return new et(r, this._parents);
}
function bw(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Tw() {
  return [];
}
function Im(e) {
  return e == null
    ? Tw
    : function () {
        return this.querySelectorAll(e);
      };
}
function Rw(e) {
  return function () {
    return bw(e.apply(this, arguments));
  };
}
function Aw(e) {
  typeof e == "function" ? (e = Rw(e)) : (e = Im(e));
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], l = s.length, a, u = 0; u < l; ++u)
      (a = s[u]) && (r.push(e.call(a, a.__data__, u, s)), o.push(a));
  return new et(r, o);
}
function Lm(e) {
  return function () {
    return this.matches(e);
  };
}
function zm(e) {
  return function (t) {
    return t.matches(e);
  };
}
var Iw = Array.prototype.find;
function Lw(e) {
  return function () {
    return Iw.call(this.children, e);
  };
}
function zw() {
  return this.firstElementChild;
}
function jw(e) {
  return this.select(e == null ? zw : Lw(typeof e == "function" ? e : zm(e)));
}
var Ow = Array.prototype.filter;
function Dw() {
  return Array.from(this.children);
}
function $w(e) {
  return function () {
    return Ow.call(this.children, e);
  };
}
function Fw(e) {
  return this.selectAll(
    e == null ? Dw : $w(typeof e == "function" ? e : zm(e)),
  );
}
function Hw(e) {
  typeof e != "function" && (e = Lm(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = (r[o] = []), a, u = 0; u < s; ++u)
      (a = i[u]) && e.call(a, a.__data__, u, i) && l.push(a);
  return new et(r, this._parents);
}
function jm(e) {
  return new Array(e.length);
}
function Bw() {
  return new et(this._enter || this._groups.map(jm), this._parents);
}
function _s(e, t) {
  ((this.ownerDocument = e.ownerDocument),
    (this.namespaceURI = e.namespaceURI),
    (this._next = null),
    (this._parent = e),
    (this.__data__ = t));
}
_s.prototype = {
  constructor: _s,
  appendChild: function (e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function (e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function (e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function (e) {
    return this._parent.querySelectorAll(e);
  },
};
function Vw(e) {
  return function () {
    return e;
  };
}
function Uw(e, t, n, r, o, i) {
  for (var s = 0, l, a = t.length, u = i.length; s < u; ++s)
    (l = t[s]) ? ((l.__data__ = i[s]), (r[s] = l)) : (n[s] = new _s(e, i[s]));
  for (; s < a; ++s) (l = t[s]) && (o[s] = l);
}
function Ww(e, t, n, r, o, i, s) {
  var l,
    a,
    u = new Map(),
    f = t.length,
    c = i.length,
    d = new Array(f),
    y;
  for (l = 0; l < f; ++l)
    (a = t[l]) &&
      ((d[l] = y = s.call(a, a.__data__, l, t) + ""),
      u.has(y) ? (o[l] = a) : u.set(y, a));
  for (l = 0; l < c; ++l)
    ((y = s.call(e, i[l], l, i) + ""),
      (a = u.get(y))
        ? ((r[l] = a), (a.__data__ = i[l]), u.delete(y))
        : (n[l] = new _s(e, i[l])));
  for (l = 0; l < f; ++l) (a = t[l]) && u.get(d[l]) === a && (o[l] = a);
}
function Xw(e) {
  return e.__data__;
}
function Yw(e, t) {
  if (!arguments.length) return Array.from(this, Xw);
  var n = t ? Ww : Uw,
    r = this._parents,
    o = this._groups;
  typeof e != "function" && (e = Vw(e));
  for (
    var i = o.length,
      s = new Array(i),
      l = new Array(i),
      a = new Array(i),
      u = 0;
    u < i;
    ++u
  ) {
    var f = r[u],
      c = o[u],
      d = c.length,
      y = Qw(e.call(f, f && f.__data__, u, r)),
      p = y.length,
      v = (l[u] = new Array(p)),
      w = (s[u] = new Array(p)),
      m = (a[u] = new Array(d));
    n(f, c, v, w, m, y, t);
    for (var g = 0, h = 0, x, E; g < p; ++g)
      if ((x = v[g])) {
        for (g >= h && (h = g + 1); !(E = w[h]) && ++h < p; );
        x._next = E || null;
      }
  }
  return ((s = new et(s, r)), (s._enter = l), (s._exit = a), s);
}
function Qw(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Kw() {
  return new et(this._exit || this._groups.map(jm), this._parents);
}
function qw(e, t, n) {
  var r = this.enter(),
    o = this,
    i = this.exit();
  return (
    typeof e == "function"
      ? ((r = e(r)), r && (r = r.selection()))
      : (r = r.append(e + "")),
    t != null && ((o = t(o)), o && (o = o.selection())),
    n == null ? i.remove() : n(i),
    r && o ? r.merge(o).order() : o
  );
}
function Gw(e) {
  for (
    var t = e.selection ? e.selection() : e,
      n = this._groups,
      r = t._groups,
      o = n.length,
      i = r.length,
      s = Math.min(o, i),
      l = new Array(o),
      a = 0;
    a < s;
    ++a
  )
    for (
      var u = n[a], f = r[a], c = u.length, d = (l[a] = new Array(c)), y, p = 0;
      p < c;
      ++p
    )
      (y = u[p] || f[p]) && (d[p] = y);
  for (; a < o; ++a) l[a] = n[a];
  return new et(l, this._parents);
}
function Zw() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) &&
        (i &&
          s.compareDocumentPosition(i) ^ 4 &&
          i.parentNode.insertBefore(s, i),
        (i = s));
  return this;
}
function Jw(e) {
  e || (e = e1);
  function t(c, d) {
    return c && d ? e(c.__data__, d.__data__) : !c - !d;
  }
  for (
    var n = this._groups, r = n.length, o = new Array(r), i = 0;
    i < r;
    ++i
  ) {
    for (
      var s = n[i], l = s.length, a = (o[i] = new Array(l)), u, f = 0;
      f < l;
      ++f
    )
      (u = s[f]) && (a[f] = u);
    a.sort(t);
  }
  return new et(o, this._parents).order();
}
function e1(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function t1() {
  var e = arguments[0];
  return ((arguments[0] = this), e.apply(null, arguments), this);
}
function n1() {
  return Array.from(this);
}
function r1() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function o1() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function i1() {
  return !this.node();
}
function s1(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, l; i < s; ++i)
      (l = o[i]) && e.call(l, l.__data__, i, o);
  return this;
}
function l1(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function a1(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function u1(e, t) {
  return function () {
    this.setAttribute(e, t);
  };
}
function c1(e, t) {
  return function () {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function f1(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function d1(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null
      ? this.removeAttributeNS(e.space, e.local)
      : this.setAttributeNS(e.space, e.local, n);
  };
}
function h1(e, t) {
  var n = Js(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each(
    (t == null
      ? n.local
        ? a1
        : l1
      : typeof t == "function"
        ? n.local
          ? d1
          : f1
        : n.local
          ? c1
          : u1)(n, t),
  );
}
function Om(e) {
  return (
    (e.ownerDocument && e.ownerDocument.defaultView) ||
    (e.document && e) ||
    e.defaultView
  );
}
function p1(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function m1(e, t, n) {
  return function () {
    this.style.setProperty(e, t, n);
  };
}
function g1(e, t, n) {
  return function () {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function y1(e, t, n) {
  return arguments.length > 1
    ? this.each(
        (t == null ? p1 : typeof t == "function" ? g1 : m1)(e, t, n ?? ""),
      )
    : kr(this.node(), e);
}
function kr(e, t) {
  return (
    e.style.getPropertyValue(t) ||
    Om(e).getComputedStyle(e, null).getPropertyValue(t)
  );
}
function v1(e) {
  return function () {
    delete this[e];
  };
}
function x1(e, t) {
  return function () {
    this[e] = t;
  };
}
function w1(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : (this[e] = n);
  };
}
function S1(e, t) {
  return arguments.length > 1
    ? this.each((t == null ? v1 : typeof t == "function" ? w1 : x1)(e, t))
    : this.node()[e];
}
function Dm(e) {
  return e.trim().split(/^|\s+/);
}
function cc(e) {
  return e.classList || new $m(e);
}
function $m(e) {
  ((this._node = e), (this._names = Dm(e.getAttribute("class") || "")));
}
$m.prototype = {
  add: function (e) {
    var t = this._names.indexOf(e);
    t < 0 &&
      (this._names.push(e),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function (e) {
    var t = this._names.indexOf(e);
    t >= 0 &&
      (this._names.splice(t, 1),
      this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function (e) {
    return this._names.indexOf(e) >= 0;
  },
};
function Fm(e, t) {
  for (var n = cc(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Hm(e, t) {
  for (var n = cc(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function E1(e) {
  return function () {
    Fm(this, e);
  };
}
function k1(e) {
  return function () {
    Hm(this, e);
  };
}
function _1(e, t) {
  return function () {
    (t.apply(this, arguments) ? Fm : Hm)(this, e);
  };
}
function N1(e, t) {
  var n = Dm(e + "");
  if (arguments.length < 2) {
    for (var r = cc(this.node()), o = -1, i = n.length; ++o < i; )
      if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? _1 : t ? E1 : k1)(n, t));
}
function C1() {
  this.textContent = "";
}
function P1(e) {
  return function () {
    this.textContent = e;
  };
}
function M1(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function b1(e) {
  return arguments.length
    ? this.each(e == null ? C1 : (typeof e == "function" ? M1 : P1)(e))
    : this.node().textContent;
}
function T1() {
  this.innerHTML = "";
}
function R1(e) {
  return function () {
    this.innerHTML = e;
  };
}
function A1(e) {
  return function () {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function I1(e) {
  return arguments.length
    ? this.each(e == null ? T1 : (typeof e == "function" ? A1 : R1)(e))
    : this.node().innerHTML;
}
function L1() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function z1() {
  return this.each(L1);
}
function j1() {
  this.previousSibling &&
    this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function O1() {
  return this.each(j1);
}
function D1(e) {
  var t = typeof e == "function" ? e : Am(e);
  return this.select(function () {
    return this.appendChild(t.apply(this, arguments));
  });
}
function $1() {
  return null;
}
function F1(e, t) {
  var n = typeof e == "function" ? e : Am(e),
    r = t == null ? $1 : typeof t == "function" ? t : uc(t);
  return this.select(function () {
    return this.insertBefore(
      n.apply(this, arguments),
      r.apply(this, arguments) || null,
    );
  });
}
function H1() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function B1() {
  return this.each(H1);
}
function V1() {
  var e = this.cloneNode(!1),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function U1() {
  var e = this.cloneNode(!0),
    t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function W1(e) {
  return this.select(e ? U1 : V1);
}
function X1(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Y1(e) {
  return function (t) {
    e.call(this, t, this.__data__);
  };
}
function Q1(e) {
  return e
    .trim()
    .split(/^|\s+/)
    .map(function (t) {
      var n = "",
        r = t.indexOf(".");
      return (
        r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
        { type: t, name: n }
      );
    });
}
function K1(e) {
  return function () {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        ((i = t[n]),
          (!e.type || i.type === e.type) && i.name === e.name
            ? this.removeEventListener(i.type, i.listener, i.options)
            : (t[++r] = i));
      ++r ? (t.length = r) : delete this.__on;
    }
  };
}
function q1(e, t, n) {
  return function () {
    var r = this.__on,
      o,
      i = Y1(t);
    if (r) {
      for (var s = 0, l = r.length; s < l; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          (this.removeEventListener(o.type, o.listener, o.options),
            this.addEventListener(o.type, (o.listener = i), (o.options = n)),
            (o.value = t));
          return;
        }
    }
    (this.addEventListener(e.type, i, n),
      (o = { type: e.type, name: e.name, value: t, listener: i, options: n }),
      r ? r.push(o) : (this.__on = [o]));
  };
}
function G1(e, t, n) {
  var r = Q1(e + ""),
    o,
    i = r.length,
    s;
  if (arguments.length < 2) {
    var l = this.node().__on;
    if (l) {
      for (var a = 0, u = l.length, f; a < u; ++a)
        for (o = 0, f = l[a]; o < i; ++o)
          if ((s = r[o]).type === f.type && s.name === f.name) return f.value;
    }
    return;
  }
  for (l = t ? q1 : K1, o = 0; o < i; ++o) this.each(l(r[o], t, n));
  return this;
}
function Bm(e, t, n) {
  var r = Om(e),
    o = r.CustomEvent;
  (typeof o == "function"
    ? (o = new o(t, n))
    : ((o = r.document.createEvent("Event")),
      n
        ? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail))
        : o.initEvent(t, !1, !1)),
    e.dispatchEvent(o));
}
function Z1(e, t) {
  return function () {
    return Bm(this, e, t);
  };
}
function J1(e, t) {
  return function () {
    return Bm(this, e, t.apply(this, arguments));
  };
}
function e2(e, t) {
  return this.each((typeof t == "function" ? J1 : Z1)(e, t));
}
function* t2() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Vm = [null];
function et(e, t) {
  ((this._groups = e), (this._parents = t));
}
function Qo() {
  return new et([[document.documentElement]], Vm);
}
function n2() {
  return this;
}
et.prototype = Qo.prototype = {
  constructor: et,
  select: Mw,
  selectAll: Aw,
  selectChild: jw,
  selectChildren: Fw,
  filter: Hw,
  data: Yw,
  enter: Bw,
  exit: Kw,
  join: qw,
  merge: Gw,
  selection: n2,
  order: Zw,
  sort: Jw,
  call: t1,
  nodes: n1,
  node: r1,
  size: o1,
  empty: i1,
  each: s1,
  attr: h1,
  style: y1,
  property: S1,
  classed: N1,
  text: b1,
  html: I1,
  raise: z1,
  lower: O1,
  append: D1,
  insert: F1,
  remove: B1,
  clone: W1,
  datum: X1,
  on: G1,
  dispatch: e2,
  [Symbol.iterator]: t2,
};
function qe(e) {
  return typeof e == "string"
    ? new et([[document.querySelector(e)]], [document.documentElement])
    : new et([[e]], Vm);
}
function r2(e) {
  let t;
  for (; (t = e.sourceEvent); ) e = t;
  return e;
}
function ht(e, t) {
  if (((e = r2(e)), t === void 0 && (t = e.currentTarget), t)) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return (
        (r.x = e.clientX),
        (r.y = e.clientY),
        (r = r.matrixTransform(t.getScreenCTM().inverse())),
        [r.x, r.y]
      );
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [
        e.clientX - o.left - t.clientLeft,
        e.clientY - o.top - t.clientTop,
      ];
    }
  }
  return [e.pageX, e.pageY];
}
const o2 = { passive: !1 },
  Lo = { capture: !0, passive: !1 };
function Ul(e) {
  e.stopImmediatePropagation();
}
function pr(e) {
  (e.preventDefault(), e.stopImmediatePropagation());
}
function Um(e) {
  var t = e.document.documentElement,
    n = qe(e).on("dragstart.drag", pr, Lo);
  "onselectstart" in t
    ? n.on("selectstart.drag", pr, Lo)
    : ((t.__noselect = t.style.MozUserSelect),
      (t.style.MozUserSelect = "none"));
}
function Wm(e, t) {
  var n = e.document.documentElement,
    r = qe(e).on("dragstart.drag", null);
  (t &&
    (r.on("click.drag", pr, Lo),
    setTimeout(function () {
      r.on("click.drag", null);
    }, 0)),
    "onselectstart" in n
      ? r.on("selectstart.drag", null)
      : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect));
}
const _i = (e) => () => e;
function Za(
  e,
  {
    sourceEvent: t,
    subject: n,
    target: r,
    identifier: o,
    active: i,
    x: s,
    y: l,
    dx: a,
    dy: u,
    dispatch: f,
  },
) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: l, enumerable: !0, configurable: !0 },
    dx: { value: a, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: f },
  });
}
Za.prototype.on = function () {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function i2(e) {
  return !e.ctrlKey && !e.button;
}
function s2() {
  return this.parentNode;
}
function l2(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function a2() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Xm() {
  var e = i2,
    t = s2,
    n = l2,
    r = a2,
    o = {},
    i = Zs("start", "drag", "end"),
    s = 0,
    l,
    a,
    u,
    f,
    c = 0;
  function d(x) {
    x.on("mousedown.drag", y)
      .filter(r)
      .on("touchstart.drag", w)
      .on("touchmove.drag", m, o2)
      .on("touchend.drag touchcancel.drag", g)
      .style("touch-action", "none")
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function y(x, E) {
    if (!(f || !e.call(this, x, E))) {
      var k = h(this, t.call(this, x, E), x, E, "mouse");
      k &&
        (qe(x.view).on("mousemove.drag", p, Lo).on("mouseup.drag", v, Lo),
        Um(x.view),
        Ul(x),
        (u = !1),
        (l = x.clientX),
        (a = x.clientY),
        k("start", x));
    }
  }
  function p(x) {
    if ((pr(x), !u)) {
      var E = x.clientX - l,
        k = x.clientY - a;
      u = E * E + k * k > c;
    }
    o.mouse("drag", x);
  }
  function v(x) {
    (qe(x.view).on("mousemove.drag mouseup.drag", null),
      Wm(x.view, u),
      pr(x),
      o.mouse("end", x));
  }
  function w(x, E) {
    if (e.call(this, x, E)) {
      var k = x.changedTouches,
        _ = t.call(this, x, E),
        M = k.length,
        R,
        F;
      for (R = 0; R < M; ++R)
        (F = h(this, _, x, E, k[R].identifier, k[R])) &&
          (Ul(x), F("start", x, k[R]));
    }
  }
  function m(x) {
    var E = x.changedTouches,
      k = E.length,
      _,
      M;
    for (_ = 0; _ < k; ++_)
      (M = o[E[_].identifier]) && (pr(x), M("drag", x, E[_]));
  }
  function g(x) {
    var E = x.changedTouches,
      k = E.length,
      _,
      M;
    for (
      f && clearTimeout(f),
        f = setTimeout(function () {
          f = null;
        }, 500),
        _ = 0;
      _ < k;
      ++_
    )
      (M = o[E[_].identifier]) && (Ul(x), M("end", x, E[_]));
  }
  function h(x, E, k, _, M, R) {
    var F = i.copy(),
      T = ht(R || k, E),
      L,
      H,
      C;
    if (
      (C = n.call(
        x,
        new Za("beforestart", {
          sourceEvent: k,
          target: d,
          identifier: M,
          active: s,
          x: T[0],
          y: T[1],
          dx: 0,
          dy: 0,
          dispatch: F,
        }),
        _,
      )) != null
    )
      return (
        (L = C.x - T[0] || 0),
        (H = C.y - T[1] || 0),
        function z(b, j, N) {
          var P = T,
            A;
          switch (b) {
            case "start":
              ((o[M] = z), (A = s++));
              break;
            case "end":
              (delete o[M], --s);
            case "drag":
              ((T = ht(N || j, E)), (A = s));
              break;
          }
          F.call(
            b,
            x,
            new Za(b, {
              sourceEvent: j,
              subject: C,
              target: d,
              identifier: M,
              active: A,
              x: T[0] + L,
              y: T[1] + H,
              dx: T[0] - P[0],
              dy: T[1] - P[1],
              dispatch: F,
            }),
            _,
          );
        }
      );
  }
  return (
    (d.filter = function (x) {
      return arguments.length
        ? ((e = typeof x == "function" ? x : _i(!!x)), d)
        : e;
    }),
    (d.container = function (x) {
      return arguments.length
        ? ((t = typeof x == "function" ? x : _i(x)), d)
        : t;
    }),
    (d.subject = function (x) {
      return arguments.length
        ? ((n = typeof x == "function" ? x : _i(x)), d)
        : n;
    }),
    (d.touchable = function (x) {
      return arguments.length
        ? ((r = typeof x == "function" ? x : _i(!!x)), d)
        : r;
    }),
    (d.on = function () {
      var x = i.on.apply(i, arguments);
      return x === i ? d : x;
    }),
    (d.clickDistance = function (x) {
      return arguments.length ? ((c = (x = +x) * x), d) : Math.sqrt(c);
    }),
    d
  );
}
function fc(e, t, n) {
  ((e.prototype = t.prototype = n), (n.constructor = e));
}
function Ym(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ko() {}
var zo = 0.7,
  Ns = 1 / zo,
  mr = "\\s*([+-]?\\d+)\\s*",
  jo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  u2 = /^#([0-9a-f]{3,8})$/,
  c2 = new RegExp(`^rgb\\(${mr},${mr},${mr}\\)$`),
  f2 = new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`),
  d2 = new RegExp(`^rgba\\(${mr},${mr},${mr},${jo}\\)$`),
  h2 = new RegExp(`^rgba\\(${bt},${bt},${bt},${jo}\\)$`),
  p2 = new RegExp(`^hsl\\(${jo},${bt},${bt}\\)$`),
  m2 = new RegExp(`^hsla\\(${jo},${bt},${bt},${jo}\\)$`),
  ed = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
fc(Ko, Dn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: td,
  formatHex: td,
  formatHex8: g2,
  formatHsl: y2,
  formatRgb: nd,
  toString: nd,
});
function td() {
  return this.rgb().formatHex();
}
function g2() {
  return this.rgb().formatHex8();
}
function y2() {
  return Qm(this).formatHsl();
}
function nd() {
  return this.rgb().formatRgb();
}
function Dn(e) {
  var t, n;
  return (
    (e = (e + "").trim().toLowerCase()),
    (t = u2.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? rd(t)
          : n === 3
            ? new Ve(
                ((t >> 8) & 15) | ((t >> 4) & 240),
                ((t >> 4) & 15) | (t & 240),
                ((t & 15) << 4) | (t & 15),
                1,
              )
            : n === 8
              ? Ni(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (t & 255) / 255,
                )
              : n === 4
                ? Ni(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (t & 240),
                    (((t & 15) << 4) | (t & 15)) / 255,
                  )
                : null)
      : (t = c2.exec(e))
        ? new Ve(t[1], t[2], t[3], 1)
        : (t = f2.exec(e))
          ? new Ve(
              (t[1] * 255) / 100,
              (t[2] * 255) / 100,
              (t[3] * 255) / 100,
              1,
            )
          : (t = d2.exec(e))
            ? Ni(t[1], t[2], t[3], t[4])
            : (t = h2.exec(e))
              ? Ni(
                  (t[1] * 255) / 100,
                  (t[2] * 255) / 100,
                  (t[3] * 255) / 100,
                  t[4],
                )
              : (t = p2.exec(e))
                ? sd(t[1], t[2] / 100, t[3] / 100, 1)
                : (t = m2.exec(e))
                  ? sd(t[1], t[2] / 100, t[3] / 100, t[4])
                  : ed.hasOwnProperty(e)
                    ? rd(ed[e])
                    : e === "transparent"
                      ? new Ve(NaN, NaN, NaN, 0)
                      : null
  );
}
function rd(e) {
  return new Ve((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function Ni(e, t, n, r) {
  return (r <= 0 && (e = t = n = NaN), new Ve(e, t, n, r));
}
function v2(e) {
  return (
    e instanceof Ko || (e = Dn(e)),
    e ? ((e = e.rgb()), new Ve(e.r, e.g, e.b, e.opacity)) : new Ve()
  );
}
function Ja(e, t, n, r) {
  return arguments.length === 1 ? v2(e) : new Ve(e, t, n, r ?? 1);
}
function Ve(e, t, n, r) {
  ((this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r));
}
fc(
  Ve,
  Ja,
  Ym(Ko, {
    brighter(e) {
      return (
        (e = e == null ? Ns : Math.pow(Ns, e)),
        new Ve(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? zo : Math.pow(zo, e)),
        new Ve(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Ve(Tn(this.r), Tn(this.g), Tn(this.b), Cs(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: od,
    formatHex: od,
    formatHex8: x2,
    formatRgb: id,
    toString: id,
  }),
);
function od() {
  return `#${Cn(this.r)}${Cn(this.g)}${Cn(this.b)}`;
}
function x2() {
  return `#${Cn(this.r)}${Cn(this.g)}${Cn(this.b)}${Cn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function id() {
  const e = Cs(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Tn(this.r)}, ${Tn(this.g)}, ${Tn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Cs(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Tn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Cn(e) {
  return ((e = Tn(e)), (e < 16 ? "0" : "") + e.toString(16));
}
function sd(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
        ? (e = t = NaN)
        : t <= 0 && (e = NaN),
    new mt(e, t, n, r)
  );
}
function Qm(e) {
  if (e instanceof mt) return new mt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Ko || (e = Dn(e)), !e)) return new mt();
  if (e instanceof mt) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    o = Math.min(t, n, r),
    i = Math.max(t, n, r),
    s = NaN,
    l = i - o,
    a = (i + o) / 2;
  return (
    l
      ? (t === i
          ? (s = (n - r) / l + (n < r) * 6)
          : n === i
            ? (s = (r - t) / l + 2)
            : (s = (t - n) / l + 4),
        (l /= a < 0.5 ? i + o : 2 - i - o),
        (s *= 60))
      : (l = a > 0 && a < 1 ? 0 : s),
    new mt(s, l, a, e.opacity)
  );
}
function w2(e, t, n, r) {
  return arguments.length === 1 ? Qm(e) : new mt(e, t, n, r ?? 1);
}
function mt(e, t, n, r) {
  ((this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r));
}
fc(
  mt,
  w2,
  Ym(Ko, {
    brighter(e) {
      return (
        (e = e == null ? Ns : Math.pow(Ns, e)),
        new mt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? zo : Math.pow(zo, e)),
        new mt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        o = 2 * n - r;
      return new Ve(
        Wl(e >= 240 ? e - 240 : e + 120, o, r),
        Wl(e, o, r),
        Wl(e < 120 ? e + 240 : e - 120, o, r),
        this.opacity,
      );
    },
    clamp() {
      return new mt(ld(this.h), Ci(this.s), Ci(this.l), Cs(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = Cs(this.opacity);
      return `${e === 1 ? "hsl(" : "hsla("}${ld(this.h)}, ${Ci(this.s) * 100}%, ${Ci(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
    },
  }),
);
function ld(e) {
  return ((e = (e || 0) % 360), e < 0 ? e + 360 : e);
}
function Ci(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Wl(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
        ? n
        : e < 240
          ? t + ((n - t) * (240 - e)) / 60
          : t) * 255
  );
}
const dc = (e) => () => e;
function S2(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function E2(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function k2(e) {
  return (e = +e) == 1
    ? Km
    : function (t, n) {
        return n - t ? E2(t, n, e) : dc(isNaN(t) ? n : t);
      };
}
function Km(e, t) {
  var n = t - e;
  return n ? S2(e, n) : dc(isNaN(e) ? t : e);
}
const Ps = (function e(t) {
  var n = k2(t);
  function r(o, i) {
    var s = n((o = Ja(o)).r, (i = Ja(i)).r),
      l = n(o.g, i.g),
      a = n(o.b, i.b),
      u = Km(o.opacity, i.opacity);
    return function (f) {
      return (
        (o.r = s(f)),
        (o.g = l(f)),
        (o.b = a(f)),
        (o.opacity = u(f)),
        o + ""
      );
    };
  }
  return ((r.gamma = e), r);
})(1);
function _2(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    o;
  return function (i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function N2(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function C2(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    o = new Array(r),
    i = new Array(n),
    s;
  for (s = 0; s < r; ++s) o[s] = mo(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function (l) {
    for (s = 0; s < r; ++s) i[s] = o[s](l);
    return i;
  };
}
function P2(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return (n.setTime(e * (1 - r) + t * r), n);
    }
  );
}
function Nt(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function M2(e, t) {
  var n = {},
    r = {},
    o;
  ((e === null || typeof e != "object") && (e = {}),
    (t === null || typeof t != "object") && (t = {}));
  for (o in t) o in e ? (n[o] = mo(e[o], t[o])) : (r[o] = t[o]);
  return function (i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var eu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Xl = new RegExp(eu.source, "g");
function b2(e) {
  return function () {
    return e;
  };
}
function T2(e) {
  return function (t) {
    return e(t) + "";
  };
}
function qm(e, t) {
  var n = (eu.lastIndex = Xl.lastIndex = 0),
    r,
    o,
    i,
    s = -1,
    l = [],
    a = [];
  for (e = e + "", t = t + ""; (r = eu.exec(e)) && (o = Xl.exec(t)); )
    ((i = o.index) > n &&
      ((i = t.slice(n, i)), l[s] ? (l[s] += i) : (l[++s] = i)),
      (r = r[0]) === (o = o[0])
        ? l[s]
          ? (l[s] += o)
          : (l[++s] = o)
        : ((l[++s] = null), a.push({ i: s, x: Nt(r, o) })),
      (n = Xl.lastIndex));
  return (
    n < t.length && ((i = t.slice(n)), l[s] ? (l[s] += i) : (l[++s] = i)),
    l.length < 2
      ? a[0]
        ? T2(a[0].x)
        : b2(t)
      : ((t = a.length),
        function (u) {
          for (var f = 0, c; f < t; ++f) l[(c = a[f]).i] = c.x(u);
          return l.join("");
        })
  );
}
function mo(e, t) {
  var n = typeof t,
    r;
  return t == null || n === "boolean"
    ? dc(t)
    : (n === "number"
        ? Nt
        : n === "string"
          ? (r = Dn(t))
            ? ((t = r), Ps)
            : qm
          : t instanceof Dn
            ? Ps
            : t instanceof Date
              ? P2
              : N2(t)
                ? _2
                : Array.isArray(t)
                  ? C2
                  : (typeof t.valueOf != "function" &&
                        typeof t.toString != "function") ||
                      isNaN(t)
                    ? M2
                    : Nt)(e, t);
}
var ad = 180 / Math.PI,
  tu = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
  };
function Gm(e, t, n, r, o, i) {
  var s, l, a;
  return (
    (s = Math.sqrt(e * e + t * t)) && ((e /= s), (t /= s)),
    (a = e * n + t * r) && ((n -= e * a), (r -= t * a)),
    (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (a /= l)),
    e * r < t * n && ((e = -e), (t = -t), (a = -a), (s = -s)),
    {
      translateX: o,
      translateY: i,
      rotate: Math.atan2(t, e) * ad,
      skewX: Math.atan(a) * ad,
      scaleX: s,
      scaleY: l,
    }
  );
}
var Pi;
function R2(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(
    e + "",
  );
  return t.isIdentity ? tu : Gm(t.a, t.b, t.c, t.d, t.e, t.f);
}
function A2(e) {
  return e == null ||
    (Pi || (Pi = document.createElementNS("http://www.w3.org/2000/svg", "g")),
    Pi.setAttribute("transform", e),
    !(e = Pi.transform.baseVal.consolidate()))
    ? tu
    : ((e = e.matrix), Gm(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Zm(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, f, c, d, y, p) {
    if (u !== c || f !== d) {
      var v = y.push("translate(", null, t, null, n);
      p.push({ i: v - 4, x: Nt(u, c) }, { i: v - 2, x: Nt(f, d) });
    } else (c || d) && y.push("translate(" + c + t + d + n);
  }
  function s(u, f, c, d) {
    u !== f
      ? (u - f > 180 ? (f += 360) : f - u > 180 && (u += 360),
        d.push({ i: c.push(o(c) + "rotate(", null, r) - 2, x: Nt(u, f) }))
      : f && c.push(o(c) + "rotate(" + f + r);
  }
  function l(u, f, c, d) {
    u !== f
      ? d.push({ i: c.push(o(c) + "skewX(", null, r) - 2, x: Nt(u, f) })
      : f && c.push(o(c) + "skewX(" + f + r);
  }
  function a(u, f, c, d, y, p) {
    if (u !== c || f !== d) {
      var v = y.push(o(y) + "scale(", null, ",", null, ")");
      p.push({ i: v - 4, x: Nt(u, c) }, { i: v - 2, x: Nt(f, d) });
    } else (c !== 1 || d !== 1) && y.push(o(y) + "scale(" + c + "," + d + ")");
  }
  return function (u, f) {
    var c = [],
      d = [];
    return (
      (u = e(u)),
      (f = e(f)),
      i(u.translateX, u.translateY, f.translateX, f.translateY, c, d),
      s(u.rotate, f.rotate, c, d),
      l(u.skewX, f.skewX, c, d),
      a(u.scaleX, u.scaleY, f.scaleX, f.scaleY, c, d),
      (u = f = null),
      function (y) {
        for (var p = -1, v = d.length, w; ++p < v; ) c[(w = d[p]).i] = w.x(y);
        return c.join("");
      }
    );
  };
}
var I2 = Zm(R2, "px, ", "px)", "deg)"),
  L2 = Zm(A2, ", ", ")", ")"),
  z2 = 1e-12;
function ud(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function j2(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function O2(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Yi = (function e(t, n, r) {
  function o(i, s) {
    var l = i[0],
      a = i[1],
      u = i[2],
      f = s[0],
      c = s[1],
      d = s[2],
      y = f - l,
      p = c - a,
      v = y * y + p * p,
      w,
      m;
    if (v < z2)
      ((m = Math.log(d / u) / t),
        (w = function (_) {
          return [l + _ * y, a + _ * p, u * Math.exp(t * _ * m)];
        }));
    else {
      var g = Math.sqrt(v),
        h = (d * d - u * u + r * v) / (2 * u * n * g),
        x = (d * d - u * u - r * v) / (2 * d * n * g),
        E = Math.log(Math.sqrt(h * h + 1) - h),
        k = Math.log(Math.sqrt(x * x + 1) - x);
      ((m = (k - E) / t),
        (w = function (_) {
          var M = _ * m,
            R = ud(E),
            F = (u / (n * g)) * (R * O2(t * M + E) - j2(E));
          return [l + F * y, a + F * p, (u * R) / ud(t * M + E)];
        }));
    }
    return ((w.duration = (m * 1e3 * t) / Math.SQRT2), w);
  }
  return (
    (o.rho = function (i) {
      var s = Math.max(0.001, +i),
        l = s * s,
        a = l * l;
      return e(s, l, a);
    }),
    o
  );
})(Math.SQRT2, 2, 4);
var _r = 0,
  ro = 0,
  qr = 0,
  Jm = 1e3,
  Ms,
  oo,
  bs = 0,
  $n = 0,
  el = 0,
  Oo = typeof performance == "object" && performance.now ? performance : Date,
  eg =
    typeof window == "object" && window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : function (e) {
          setTimeout(e, 17);
        };
function hc() {
  return $n || (eg(D2), ($n = Oo.now() + el));
}
function D2() {
  $n = 0;
}
function Ts() {
  this._call = this._time = this._next = null;
}
Ts.prototype = tg.prototype = {
  constructor: Ts,
  restart: function (e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    ((n = (n == null ? hc() : +n) + (t == null ? 0 : +t)),
      !this._next &&
        oo !== this &&
        (oo ? (oo._next = this) : (Ms = this), (oo = this)),
      (this._call = e),
      (this._time = n),
      nu());
  },
  stop: function () {
    this._call && ((this._call = null), (this._time = 1 / 0), nu());
  },
};
function tg(e, t, n) {
  var r = new Ts();
  return (r.restart(e, t, n), r);
}
function $2() {
  (hc(), ++_r);
  for (var e = Ms, t; e; )
    ((t = $n - e._time) >= 0 && e._call.call(void 0, t), (e = e._next));
  --_r;
}
function cd() {
  (($n = (bs = Oo.now()) + el), (_r = ro = 0));
  try {
    $2();
  } finally {
    ((_r = 0), H2(), ($n = 0));
  }
}
function F2() {
  var e = Oo.now(),
    t = e - bs;
  t > Jm && ((el -= t), (bs = e));
}
function H2() {
  for (var e, t = Ms, n, r = 1 / 0; t; )
    t._call
      ? (r > t._time && (r = t._time), (e = t), (t = t._next))
      : ((n = t._next), (t._next = null), (t = e ? (e._next = n) : (Ms = n)));
  ((oo = e), nu(r));
}
function nu(e) {
  if (!_r) {
    ro && (ro = clearTimeout(ro));
    var t = e - $n;
    t > 24
      ? (e < 1 / 0 && (ro = setTimeout(cd, e - Oo.now() - el)),
        qr && (qr = clearInterval(qr)))
      : (qr || ((bs = Oo.now()), (qr = setInterval(F2, Jm))), (_r = 1), eg(cd));
  }
}
function fd(e, t, n) {
  var r = new Ts();
  return (
    (t = t == null ? 0 : +t),
    r.restart(
      (o) => {
        (r.stop(), e(o + t));
      },
      t,
      n,
    ),
    r
  );
}
var B2 = Zs("start", "end", "cancel", "interrupt"),
  V2 = [],
  ng = 0,
  dd = 1,
  ru = 2,
  Qi = 3,
  hd = 4,
  ou = 5,
  Ki = 6;
function tl(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  U2(e, n, {
    name: t,
    index: r,
    group: o,
    on: B2,
    tween: V2,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ng,
  });
}
function pc(e, t) {
  var n = St(e, t);
  if (n.state > ng) throw new Error("too late; already scheduled");
  return n;
}
function Rt(e, t) {
  var n = St(e, t);
  if (n.state > Qi) throw new Error("too late; already running");
  return n;
}
function St(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function U2(e, t, n) {
  var r = e.__transition,
    o;
  ((r[t] = n), (n.timer = tg(i, 0, n.time)));
  function i(u) {
    ((n.state = dd),
      n.timer.restart(s, n.delay, n.time),
      n.delay <= u && s(u - n.delay));
  }
  function s(u) {
    var f, c, d, y;
    if (n.state !== dd) return a();
    for (f in r)
      if (((y = r[f]), y.name === n.name)) {
        if (y.state === Qi) return fd(s);
        y.state === hd
          ? ((y.state = Ki),
            y.timer.stop(),
            y.on.call("interrupt", e, e.__data__, y.index, y.group),
            delete r[f])
          : +f < t &&
            ((y.state = Ki),
            y.timer.stop(),
            y.on.call("cancel", e, e.__data__, y.index, y.group),
            delete r[f]);
      }
    if (
      (fd(function () {
        n.state === Qi &&
          ((n.state = hd), n.timer.restart(l, n.delay, n.time), l(u));
      }),
      (n.state = ru),
      n.on.call("start", e, e.__data__, n.index, n.group),
      n.state === ru)
    ) {
      for (
        n.state = Qi, o = new Array((d = n.tween.length)), f = 0, c = -1;
        f < d;
        ++f
      )
        (y = n.tween[f].value.call(e, e.__data__, n.index, n.group)) &&
          (o[++c] = y);
      o.length = c + 1;
    }
  }
  function l(u) {
    for (
      var f =
          u < n.duration
            ? n.ease.call(null, u / n.duration)
            : (n.timer.restart(a), (n.state = ou), 1),
        c = -1,
        d = o.length;
      ++c < d;
    )
      o[c].call(e, f);
    n.state === ou && (n.on.call("end", e, e.__data__, n.index, n.group), a());
  }
  function a() {
    ((n.state = Ki), n.timer.stop(), delete r[t]);
    for (var u in r) return;
    delete e.__transition;
  }
}
function qi(e, t) {
  var n = e.__transition,
    r,
    o,
    i = !0,
    s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      ((o = r.state > ru && r.state < ou),
        (r.state = Ki),
        r.timer.stop(),
        r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group),
        delete n[s]);
    }
    i && delete e.__transition;
  }
}
function W2(e) {
  return this.each(function () {
    qi(this, e);
  });
}
function X2(e, t) {
  var n, r;
  return function () {
    var o = Rt(this, e),
      i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, l = r.length; s < l; ++s)
        if (r[s].name === t) {
          ((r = r.slice()), r.splice(s, 1));
          break;
        }
    }
    o.tween = r;
  };
}
function Y2(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function () {
    var i = Rt(this, e),
      s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var l = { name: t, value: n }, a = 0, u = o.length; a < u; ++a)
        if (o[a].name === t) {
          o[a] = l;
          break;
        }
      a === u && o.push(l);
    }
    i.tween = o;
  };
}
function Q2(e, t) {
  var n = this._id;
  if (((e += ""), arguments.length < 2)) {
    for (var r = St(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e) return s.value;
    return null;
  }
  return this.each((t == null ? X2 : Y2)(n, e, t));
}
function mc(e, t, n) {
  var r = e._id;
  return (
    e.each(function () {
      var o = Rt(this, r);
      (o.value || (o.value = {}))[t] = n.apply(this, arguments);
    }),
    function (o) {
      return St(o, r).value[t];
    }
  );
}
function rg(e, t) {
  var n;
  return (
    typeof t == "number"
      ? Nt
      : t instanceof Dn
        ? Ps
        : (n = Dn(t))
          ? ((t = n), Ps)
          : qm
  )(e, t);
}
function K2(e) {
  return function () {
    this.removeAttribute(e);
  };
}
function q2(e) {
  return function () {
    this.removeAttributeNS(e.space, e.local);
  };
}
function G2(e, t, n) {
  var r,
    o = n + "",
    i;
  return function () {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : (i = t((r = s), n));
  };
}
function Z2(e, t, n) {
  var r,
    o = n + "",
    i;
  return function () {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : (i = t((r = s), n));
  };
}
function J2(e, t, n) {
  var r, o, i;
  return function () {
    var s,
      l = n(this),
      a;
    return l == null
      ? void this.removeAttribute(e)
      : ((s = this.getAttribute(e)),
        (a = l + ""),
        s === a
          ? null
          : s === r && a === o
            ? i
            : ((o = a), (i = t((r = s), l))));
  };
}
function eS(e, t, n) {
  var r, o, i;
  return function () {
    var s,
      l = n(this),
      a;
    return l == null
      ? void this.removeAttributeNS(e.space, e.local)
      : ((s = this.getAttributeNS(e.space, e.local)),
        (a = l + ""),
        s === a
          ? null
          : s === r && a === o
            ? i
            : ((o = a), (i = t((r = s), l))));
  };
}
function tS(e, t) {
  var n = Js(e),
    r = n === "transform" ? L2 : rg;
  return this.attrTween(
    e,
    typeof t == "function"
      ? (n.local ? eS : J2)(n, r, mc(this, "attr." + e, t))
      : t == null
        ? (n.local ? q2 : K2)(n)
        : (n.local ? Z2 : G2)(n, r, t),
  );
}
function nS(e, t) {
  return function (n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function rS(e, t) {
  return function (n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function oS(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return (i !== r && (n = (r = i) && rS(e, i)), n);
  }
  return ((o._value = t), o);
}
function iS(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return (i !== r && (n = (r = i) && nS(e, i)), n);
  }
  return ((o._value = t), o);
}
function sS(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Js(e);
  return this.tween(n, (r.local ? oS : iS)(r, t));
}
function lS(e, t) {
  return function () {
    pc(this, e).delay = +t.apply(this, arguments);
  };
}
function aS(e, t) {
  return (
    (t = +t),
    function () {
      pc(this, e).delay = t;
    }
  );
}
function uS(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? lS : aS)(t, e))
    : St(this.node(), t).delay;
}
function cS(e, t) {
  return function () {
    Rt(this, e).duration = +t.apply(this, arguments);
  };
}
function fS(e, t) {
  return (
    (t = +t),
    function () {
      Rt(this, e).duration = t;
    }
  );
}
function dS(e) {
  var t = this._id;
  return arguments.length
    ? this.each((typeof e == "function" ? cS : fS)(t, e))
    : St(this.node(), t).duration;
}
function hS(e, t) {
  if (typeof t != "function") throw new Error();
  return function () {
    Rt(this, e).ease = t;
  };
}
function pS(e) {
  var t = this._id;
  return arguments.length ? this.each(hS(t, e)) : St(this.node(), t).ease;
}
function mS(e, t) {
  return function () {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Rt(this, e).ease = n;
  };
}
function gS(e) {
  if (typeof e != "function") throw new Error();
  return this.each(mS(this._id, e));
}
function yS(e) {
  typeof e != "function" && (e = Lm(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, l = (r[o] = []), a, u = 0; u < s; ++u)
      (a = i[u]) && e.call(a, a.__data__, u, i) && l.push(a);
  return new Ut(r, this._parents, this._name, this._id);
}
function vS(e) {
  if (e._id !== this._id) throw new Error();
  for (
    var t = this._groups,
      n = e._groups,
      r = t.length,
      o = n.length,
      i = Math.min(r, o),
      s = new Array(r),
      l = 0;
    l < i;
    ++l
  )
    for (
      var a = t[l], u = n[l], f = a.length, c = (s[l] = new Array(f)), d, y = 0;
      y < f;
      ++y
    )
      (d = a[y] || u[y]) && (c[y] = d);
  for (; l < r; ++l) s[l] = t[l];
  return new Ut(s, this._parents, this._name, this._id);
}
function xS(e) {
  return (e + "")
    .trim()
    .split(/^|\s+/)
    .every(function (t) {
      var n = t.indexOf(".");
      return (n >= 0 && (t = t.slice(0, n)), !t || t === "start");
    });
}
function wS(e, t, n) {
  var r,
    o,
    i = xS(t) ? pc : Rt;
  return function () {
    var s = i(this, e),
      l = s.on;
    (l !== r && (o = (r = l).copy()).on(t, n), (s.on = o));
  };
}
function SS(e, t) {
  var n = this._id;
  return arguments.length < 2
    ? St(this.node(), n).on.on(e)
    : this.each(wS(n, e, t));
}
function ES(e) {
  return function () {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function kS() {
  return this.on("end.remove", ES(this._id));
}
function _S(e) {
  var t = this._name,
    n = this._id;
  typeof e != "function" && (e = uc(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (
      var l = r[s], a = l.length, u = (i[s] = new Array(a)), f, c, d = 0;
      d < a;
      ++d
    )
      (f = l[d]) &&
        (c = e.call(f, f.__data__, d, l)) &&
        ("__data__" in f && (c.__data__ = f.__data__),
        (u[d] = c),
        tl(u[d], t, n, d, u, St(f, n)));
  return new Ut(i, this._parents, t, n);
}
function NS(e) {
  var t = this._name,
    n = this._id;
  typeof e != "function" && (e = Im(e));
  for (var r = this._groups, o = r.length, i = [], s = [], l = 0; l < o; ++l)
    for (var a = r[l], u = a.length, f, c = 0; c < u; ++c)
      if ((f = a[c])) {
        for (
          var d = e.call(f, f.__data__, c, a),
            y,
            p = St(f, n),
            v = 0,
            w = d.length;
          v < w;
          ++v
        )
          (y = d[v]) && tl(y, t, n, v, d, p);
        (i.push(d), s.push(f));
      }
  return new Ut(i, s, t, n);
}
var CS = Qo.prototype.constructor;
function PS() {
  return new CS(this._groups, this._parents);
}
function MS(e, t) {
  var n, r, o;
  return function () {
    var i = kr(this, e),
      s = (this.style.removeProperty(e), kr(this, e));
    return i === s ? null : i === n && s === r ? o : (o = t((n = i), (r = s)));
  };
}
function og(e) {
  return function () {
    this.style.removeProperty(e);
  };
}
function bS(e, t, n) {
  var r,
    o = n + "",
    i;
  return function () {
    var s = kr(this, e);
    return s === o ? null : s === r ? i : (i = t((r = s), n));
  };
}
function TS(e, t, n) {
  var r, o, i;
  return function () {
    var s = kr(this, e),
      l = n(this),
      a = l + "";
    return (
      l == null && (a = l = (this.style.removeProperty(e), kr(this, e))),
      s === a ? null : s === r && a === o ? i : ((o = a), (i = t((r = s), l)))
    );
  };
}
function RS(e, t) {
  var n,
    r,
    o,
    i = "style." + t,
    s = "end." + i,
    l;
  return function () {
    var a = Rt(this, e),
      u = a.on,
      f = a.value[i] == null ? l || (l = og(t)) : void 0;
    ((u !== n || o !== f) && (r = (n = u).copy()).on(s, (o = f)), (a.on = r));
  };
}
function AS(e, t, n) {
  var r = (e += "") == "transform" ? I2 : rg;
  return t == null
    ? this.styleTween(e, MS(e, r)).on("end.style." + e, og(e))
    : typeof t == "function"
      ? this.styleTween(e, TS(e, r, mc(this, "style." + e, t))).each(
          RS(this._id, e),
        )
      : this.styleTween(e, bS(e, r, t), n).on("end.style." + e, null);
}
function IS(e, t, n) {
  return function (r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function LS(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return (s !== o && (r = (o = s) && IS(e, s, n)), r);
  }
  return ((i._value = t), i);
}
function zS(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, LS(e, t, n ?? ""));
}
function jS(e) {
  return function () {
    this.textContent = e;
  };
}
function OS(e) {
  return function () {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function DS(e) {
  return this.tween(
    "text",
    typeof e == "function"
      ? OS(mc(this, "text", e))
      : jS(e == null ? "" : e + ""),
  );
}
function $S(e) {
  return function (t) {
    this.textContent = e.call(this, t);
  };
}
function FS(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return (o !== n && (t = (n = o) && $S(o)), t);
  }
  return ((r._value = e), r);
}
function HS(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, FS(e));
}
function BS() {
  for (
    var e = this._name,
      t = this._id,
      n = ig(),
      r = this._groups,
      o = r.length,
      i = 0;
    i < o;
    ++i
  )
    for (var s = r[i], l = s.length, a, u = 0; u < l; ++u)
      if ((a = s[u])) {
        var f = St(a, t);
        tl(a, e, n, u, s, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease,
        });
      }
  return new Ut(r, this._parents, e, n);
}
function VS() {
  var e,
    t,
    n = this,
    r = n._id,
    o = n.size();
  return new Promise(function (i, s) {
    var l = { value: s },
      a = {
        value: function () {
          --o === 0 && i();
        },
      };
    (n.each(function () {
      var u = Rt(this, r),
        f = u.on;
      (f !== e &&
        ((t = (e = f).copy()),
        t._.cancel.push(l),
        t._.interrupt.push(l),
        t._.end.push(a)),
        (u.on = t));
    }),
      o === 0 && i());
  });
}
var US = 0;
function Ut(e, t, n, r) {
  ((this._groups = e), (this._parents = t), (this._name = n), (this._id = r));
}
function ig() {
  return ++US;
}
var It = Qo.prototype;
Ut.prototype = {
  constructor: Ut,
  select: _S,
  selectAll: NS,
  selectChild: It.selectChild,
  selectChildren: It.selectChildren,
  filter: yS,
  merge: vS,
  selection: PS,
  transition: BS,
  call: It.call,
  nodes: It.nodes,
  node: It.node,
  size: It.size,
  empty: It.empty,
  each: It.each,
  on: SS,
  attr: tS,
  attrTween: sS,
  style: AS,
  styleTween: zS,
  text: DS,
  textTween: HS,
  remove: kS,
  tween: Q2,
  delay: uS,
  duration: dS,
  ease: pS,
  easeVarying: gS,
  end: VS,
  [Symbol.iterator]: It[Symbol.iterator],
};
function WS(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var XS = { time: null, delay: 0, duration: 250, ease: WS };
function YS(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
  return n;
}
function QS(e) {
  var t, n;
  e instanceof Ut
    ? ((t = e._id), (e = e._name))
    : ((t = ig()), ((n = XS).time = hc()), (e = e == null ? null : e + ""));
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], l = s.length, a, u = 0; u < l; ++u)
      (a = s[u]) && tl(a, e, t, u, s, n || YS(a, t));
  return new Ut(r, this._parents, e, t);
}
Qo.prototype.interrupt = W2;
Qo.prototype.transition = QS;
const Mi = (e) => () => e;
function KS(e, { sourceEvent: t, target: n, transform: r, dispatch: o }) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o },
  });
}
function Dt(e, t, n) {
  ((this.k = e), (this.x = t), (this.y = n));
}
Dt.prototype = {
  constructor: Dt,
  scale: function (e) {
    return e === 1 ? this : new Dt(this.k * e, this.x, this.y);
  },
  translate: function (e, t) {
    return (e === 0) & (t === 0)
      ? this
      : new Dt(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function (e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function (e) {
    return e * this.k + this.x;
  },
  applyY: function (e) {
    return e * this.k + this.y;
  },
  invert: function (e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function (e) {
    return (e - this.x) / this.k;
  },
  invertY: function (e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function (e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function (e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function () {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  },
};
var nl = new Dt(1, 0, 0);
sg.prototype = Dt.prototype;
function sg(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return nl;
  return e.__zoom;
}
function Yl(e) {
  e.stopImmediatePropagation();
}
function Gr(e) {
  (e.preventDefault(), e.stopImmediatePropagation());
}
function qS(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function GS() {
  var e = this;
  return e instanceof SVGElement
    ? ((e = e.ownerSVGElement || e),
      e.hasAttribute("viewBox")
        ? ((e = e.viewBox.baseVal),
          [
            [e.x, e.y],
            [e.x + e.width, e.y + e.height],
          ])
        : [
            [0, 0],
            [e.width.baseVal.value, e.height.baseVal.value],
          ])
    : [
        [0, 0],
        [e.clientWidth, e.clientHeight],
      ];
}
function pd() {
  return this.__zoom || nl;
}
function ZS(e) {
  return (
    -e.deltaY *
    (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) *
    (e.ctrlKey ? 10 : 1)
  );
}
function JS() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function eE(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0],
    o = e.invertX(t[1][0]) - n[1][0],
    i = e.invertY(t[0][1]) - n[0][1],
    s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s),
  );
}
function lg() {
  var e = qS,
    t = GS,
    n = eE,
    r = ZS,
    o = JS,
    i = [0, 1 / 0],
    s = [
      [-1 / 0, -1 / 0],
      [1 / 0, 1 / 0],
    ],
    l = 250,
    a = Yi,
    u = Zs("start", "zoom", "end"),
    f,
    c,
    d,
    y = 500,
    p = 150,
    v = 0,
    w = 10;
  function m(C) {
    C.property("__zoom", pd)
      .on("wheel.zoom", M, { passive: !1 })
      .on("mousedown.zoom", R)
      .on("dblclick.zoom", F)
      .filter(o)
      .on("touchstart.zoom", T)
      .on("touchmove.zoom", L)
      .on("touchend.zoom touchcancel.zoom", H)
      .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  ((m.transform = function (C, z, b, j) {
    var N = C.selection ? C.selection() : C;
    (N.property("__zoom", pd),
      C !== N
        ? E(C, z, b, j)
        : N.interrupt().each(function () {
            k(this, arguments)
              .event(j)
              .start()
              .zoom(null, typeof z == "function" ? z.apply(this, arguments) : z)
              .end();
          }));
  }),
    (m.scaleBy = function (C, z, b, j) {
      m.scaleTo(
        C,
        function () {
          var N = this.__zoom.k,
            P = typeof z == "function" ? z.apply(this, arguments) : z;
          return N * P;
        },
        b,
        j,
      );
    }),
    (m.scaleTo = function (C, z, b, j) {
      m.transform(
        C,
        function () {
          var N = t.apply(this, arguments),
            P = this.__zoom,
            A =
              b == null
                ? x(N)
                : typeof b == "function"
                  ? b.apply(this, arguments)
                  : b,
            D = P.invert(A),
            $ = typeof z == "function" ? z.apply(this, arguments) : z;
          return n(h(g(P, $), A, D), N, s);
        },
        b,
        j,
      );
    }),
    (m.translateBy = function (C, z, b, j) {
      m.transform(
        C,
        function () {
          return n(
            this.__zoom.translate(
              typeof z == "function" ? z.apply(this, arguments) : z,
              typeof b == "function" ? b.apply(this, arguments) : b,
            ),
            t.apply(this, arguments),
            s,
          );
        },
        null,
        j,
      );
    }),
    (m.translateTo = function (C, z, b, j, N) {
      m.transform(
        C,
        function () {
          var P = t.apply(this, arguments),
            A = this.__zoom,
            D =
              j == null
                ? x(P)
                : typeof j == "function"
                  ? j.apply(this, arguments)
                  : j;
          return n(
            nl
              .translate(D[0], D[1])
              .scale(A.k)
              .translate(
                typeof z == "function" ? -z.apply(this, arguments) : -z,
                typeof b == "function" ? -b.apply(this, arguments) : -b,
              ),
            P,
            s,
          );
        },
        j,
        N,
      );
    }));
  function g(C, z) {
    return (
      (z = Math.max(i[0], Math.min(i[1], z))),
      z === C.k ? C : new Dt(z, C.x, C.y)
    );
  }
  function h(C, z, b) {
    var j = z[0] - b[0] * C.k,
      N = z[1] - b[1] * C.k;
    return j === C.x && N === C.y ? C : new Dt(C.k, j, N);
  }
  function x(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function E(C, z, b, j) {
    C.on("start.zoom", function () {
      k(this, arguments).event(j).start();
    })
      .on("interrupt.zoom end.zoom", function () {
        k(this, arguments).event(j).end();
      })
      .tween("zoom", function () {
        var N = this,
          P = arguments,
          A = k(N, P).event(j),
          D = t.apply(N, P),
          $ = b == null ? x(D) : typeof b == "function" ? b.apply(N, P) : b,
          W = Math.max(D[1][0] - D[0][0], D[1][1] - D[0][1]),
          U = N.__zoom,
          Y = typeof z == "function" ? z.apply(N, P) : z,
          Q = a(U.invert($).concat(W / U.k), Y.invert($).concat(W / Y.k));
        return function (q) {
          if (q === 1) q = Y;
          else {
            var V = Q(q),
              G = W / V[2];
            q = new Dt(G, $[0] - V[0] * G, $[1] - V[1] * G);
          }
          A.zoom(null, q);
        };
      });
  }
  function k(C, z, b) {
    return (!b && C.__zooming) || new _(C, z);
  }
  function _(C, z) {
    ((this.that = C),
      (this.args = z),
      (this.active = 0),
      (this.sourceEvent = null),
      (this.extent = t.apply(C, z)),
      (this.taps = 0));
  }
  _.prototype = {
    event: function (C) {
      return (C && (this.sourceEvent = C), this);
    },
    start: function () {
      return (
        ++this.active === 1 &&
          ((this.that.__zooming = this), this.emit("start")),
        this
      );
    },
    zoom: function (C, z) {
      return (
        this.mouse &&
          C !== "mouse" &&
          (this.mouse[1] = z.invert(this.mouse[0])),
        this.touch0 &&
          C !== "touch" &&
          (this.touch0[1] = z.invert(this.touch0[0])),
        this.touch1 &&
          C !== "touch" &&
          (this.touch1[1] = z.invert(this.touch1[0])),
        (this.that.__zoom = z),
        this.emit("zoom"),
        this
      );
    },
    end: function () {
      return (
        --this.active === 0 && (delete this.that.__zooming, this.emit("end")),
        this
      );
    },
    emit: function (C) {
      var z = qe(this.that).datum();
      u.call(
        C,
        this.that,
        new KS(C, {
          sourceEvent: this.sourceEvent,
          target: m,
          transform: this.that.__zoom,
          dispatch: u,
        }),
        z,
      );
    },
  };
  function M(C, ...z) {
    if (!e.apply(this, arguments)) return;
    var b = k(this, z).event(C),
      j = this.__zoom,
      N = Math.max(
        i[0],
        Math.min(i[1], j.k * Math.pow(2, r.apply(this, arguments))),
      ),
      P = ht(C);
    if (b.wheel)
      ((b.mouse[0][0] !== P[0] || b.mouse[0][1] !== P[1]) &&
        (b.mouse[1] = j.invert((b.mouse[0] = P))),
        clearTimeout(b.wheel));
    else {
      if (j.k === N) return;
      ((b.mouse = [P, j.invert(P)]), qi(this), b.start());
    }
    (Gr(C),
      (b.wheel = setTimeout(A, p)),
      b.zoom("mouse", n(h(g(j, N), b.mouse[0], b.mouse[1]), b.extent, s)));
    function A() {
      ((b.wheel = null), b.end());
    }
  }
  function R(C, ...z) {
    if (d || !e.apply(this, arguments)) return;
    var b = C.currentTarget,
      j = k(this, z, !0).event(C),
      N = qe(C.view).on("mousemove.zoom", $, !0).on("mouseup.zoom", W, !0),
      P = ht(C, b),
      A = C.clientX,
      D = C.clientY;
    (Um(C.view),
      Yl(C),
      (j.mouse = [P, this.__zoom.invert(P)]),
      qi(this),
      j.start());
    function $(U) {
      if ((Gr(U), !j.moved)) {
        var Y = U.clientX - A,
          Q = U.clientY - D;
        j.moved = Y * Y + Q * Q > v;
      }
      j.event(U).zoom(
        "mouse",
        n(h(j.that.__zoom, (j.mouse[0] = ht(U, b)), j.mouse[1]), j.extent, s),
      );
    }
    function W(U) {
      (N.on("mousemove.zoom mouseup.zoom", null),
        Wm(U.view, j.moved),
        Gr(U),
        j.event(U).end());
    }
  }
  function F(C, ...z) {
    if (e.apply(this, arguments)) {
      var b = this.__zoom,
        j = ht(C.changedTouches ? C.changedTouches[0] : C, this),
        N = b.invert(j),
        P = b.k * (C.shiftKey ? 0.5 : 2),
        A = n(h(g(b, P), j, N), t.apply(this, z), s);
      (Gr(C),
        l > 0
          ? qe(this).transition().duration(l).call(E, A, j, C)
          : qe(this).call(m.transform, A, j, C));
    }
  }
  function T(C, ...z) {
    if (e.apply(this, arguments)) {
      var b = C.touches,
        j = b.length,
        N = k(this, z, C.changedTouches.length === j).event(C),
        P,
        A,
        D,
        $;
      for (Yl(C), A = 0; A < j; ++A)
        ((D = b[A]),
          ($ = ht(D, this)),
          ($ = [$, this.__zoom.invert($), D.identifier]),
          N.touch0
            ? !N.touch1 &&
              N.touch0[2] !== $[2] &&
              ((N.touch1 = $), (N.taps = 0))
            : ((N.touch0 = $), (P = !0), (N.taps = 1 + !!f)));
      (f && (f = clearTimeout(f)),
        P &&
          (N.taps < 2 &&
            ((c = $[0]),
            (f = setTimeout(function () {
              f = null;
            }, y))),
          qi(this),
          N.start()));
    }
  }
  function L(C, ...z) {
    if (this.__zooming) {
      var b = k(this, z).event(C),
        j = C.changedTouches,
        N = j.length,
        P,
        A,
        D,
        $;
      for (Gr(C), P = 0; P < N; ++P)
        ((A = j[P]),
          (D = ht(A, this)),
          b.touch0 && b.touch0[2] === A.identifier
            ? (b.touch0[0] = D)
            : b.touch1 && b.touch1[2] === A.identifier && (b.touch1[0] = D));
      if (((A = b.that.__zoom), b.touch1)) {
        var W = b.touch0[0],
          U = b.touch0[1],
          Y = b.touch1[0],
          Q = b.touch1[1],
          q = (q = Y[0] - W[0]) * q + (q = Y[1] - W[1]) * q,
          V = (V = Q[0] - U[0]) * V + (V = Q[1] - U[1]) * V;
        ((A = g(A, Math.sqrt(q / V))),
          (D = [(W[0] + Y[0]) / 2, (W[1] + Y[1]) / 2]),
          ($ = [(U[0] + Q[0]) / 2, (U[1] + Q[1]) / 2]));
      } else if (b.touch0) ((D = b.touch0[0]), ($ = b.touch0[1]));
      else return;
      b.zoom("touch", n(h(A, D, $), b.extent, s));
    }
  }
  function H(C, ...z) {
    if (this.__zooming) {
      var b = k(this, z).event(C),
        j = C.changedTouches,
        N = j.length,
        P,
        A;
      for (
        Yl(C),
          d && clearTimeout(d),
          d = setTimeout(function () {
            d = null;
          }, y),
          P = 0;
        P < N;
        ++P
      )
        ((A = j[P]),
          b.touch0 && b.touch0[2] === A.identifier
            ? delete b.touch0
            : b.touch1 && b.touch1[2] === A.identifier && delete b.touch1);
      if (
        (b.touch1 && !b.touch0 && ((b.touch0 = b.touch1), delete b.touch1),
        b.touch0)
      )
        b.touch0[1] = this.__zoom.invert(b.touch0[0]);
      else if (
        (b.end(),
        b.taps === 2 &&
          ((A = ht(A, this)), Math.hypot(c[0] - A[0], c[1] - A[1]) < w))
      ) {
        var D = qe(this).on("dblclick.zoom");
        D && D.apply(this, arguments);
      }
    }
  }
  return (
    (m.wheelDelta = function (C) {
      return arguments.length
        ? ((r = typeof C == "function" ? C : Mi(+C)), m)
        : r;
    }),
    (m.filter = function (C) {
      return arguments.length
        ? ((e = typeof C == "function" ? C : Mi(!!C)), m)
        : e;
    }),
    (m.touchable = function (C) {
      return arguments.length
        ? ((o = typeof C == "function" ? C : Mi(!!C)), m)
        : o;
    }),
    (m.extent = function (C) {
      return arguments.length
        ? ((t =
            typeof C == "function"
              ? C
              : Mi([
                  [+C[0][0], +C[0][1]],
                  [+C[1][0], +C[1][1]],
                ])),
          m)
        : t;
    }),
    (m.scaleExtent = function (C) {
      return arguments.length
        ? ((i[0] = +C[0]), (i[1] = +C[1]), m)
        : [i[0], i[1]];
    }),
    (m.translateExtent = function (C) {
      return arguments.length
        ? ((s[0][0] = +C[0][0]),
          (s[1][0] = +C[1][0]),
          (s[0][1] = +C[0][1]),
          (s[1][1] = +C[1][1]),
          m)
        : [
            [s[0][0], s[0][1]],
            [s[1][0], s[1][1]],
          ];
    }),
    (m.constrain = function (C) {
      return arguments.length ? ((n = C), m) : n;
    }),
    (m.duration = function (C) {
      return arguments.length ? ((l = +C), m) : l;
    }),
    (m.interpolate = function (C) {
      return arguments.length ? ((a = C), m) : a;
    }),
    (m.on = function () {
      var C = u.on.apply(u, arguments);
      return C === u ? m : C;
    }),
    (m.clickDistance = function (C) {
      return arguments.length ? ((v = (C = +C) * C), m) : Math.sqrt(v);
    }),
    (m.tapDistance = function (C) {
      return arguments.length ? ((w = +C), m) : w;
    }),
    m
  );
}
const Tt = {
    error001: () =>
      "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
    error002: () =>
      "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
    error003: (e) =>
      `Node type "${e}" not found. Using fallback type "default".`,
    error004: () =>
      "The React Flow parent container needs a width and a height to render the graph.",
    error005: () => "Only child nodes can use a parent extent.",
    error006: () => "Can't create edge. An edge needs a source and a target.",
    error007: (e) => `The old edge with id=${e} does not exist.`,
    error009: (e) => `Marker type "${e}" doesn't exist.`,
    error008: (e, { id: t, sourceHandle: n, targetHandle: r }) =>
      `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
    error010: () =>
      "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
    error011: (e) =>
      `Edge type "${e}" not found. Using fallback type "default".`,
    error012: (e) =>
      `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
    error013: (e = "react") =>
      `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
    error014: () =>
      "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
    error015: () =>
      "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",
  },
  Do = [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
  ],
  ag = ["Enter", " ", "Escape"],
  ug = {
    "node.a11yDescription.default":
      "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.keyboardDisabled":
      "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
    "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) =>
      `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
    "edge.a11yDescription.default":
      "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
    "controls.ariaLabel": "Control Panel",
    "controls.zoomIn.ariaLabel": "Zoom In",
    "controls.zoomOut.ariaLabel": "Zoom Out",
    "controls.fitView.ariaLabel": "Fit View",
    "controls.interactive.ariaLabel": "Toggle Interactivity",
    "minimap.ariaLabel": "Mini Map",
    "handle.ariaLabel": "Handle",
  };
var Nr;
(function (e) {
  ((e.Strict = "strict"), (e.Loose = "loose"));
})(Nr || (Nr = {}));
var Rn;
(function (e) {
  ((e.Free = "free"), (e.Vertical = "vertical"), (e.Horizontal = "horizontal"));
})(Rn || (Rn = {}));
var $o;
(function (e) {
  ((e.Partial = "partial"), (e.Full = "full"));
})($o || ($o = {}));
const cg = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
  pointer: null,
};
var tn;
(function (e) {
  ((e.Bezier = "default"),
    (e.Straight = "straight"),
    (e.Step = "step"),
    (e.SmoothStep = "smoothstep"),
    (e.SimpleBezier = "simplebezier"));
})(tn || (tn = {}));
var Rs;
(function (e) {
  ((e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed"));
})(Rs || (Rs = {}));
var K;
(function (e) {
  ((e.Left = "left"),
    (e.Top = "top"),
    (e.Right = "right"),
    (e.Bottom = "bottom"));
})(K || (K = {}));
const md = {
  [K.Left]: K.Right,
  [K.Right]: K.Left,
  [K.Top]: K.Bottom,
  [K.Bottom]: K.Top,
};
function fg(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const dg = (e) => "id" in e && "source" in e && "target" in e,
  tE = (e) =>
    "id" in e && "position" in e && !("source" in e) && !("target" in e),
  gc = (e) =>
    "id" in e && "internals" in e && !("source" in e) && !("target" in e),
  qo = (e, t = [0, 0]) => {
    const { width: n, height: r } = Xt(e),
      o = e.origin ?? t,
      i = n * o[0],
      s = r * o[1];
    return { x: e.position.x - i, y: e.position.y - s };
  },
  nE = (e, t = { nodeOrigin: [0, 0] }) => {
    if (e.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
    const n = e.reduce(
      (r, o) => {
        const i = typeof o == "string";
        let s = !t.nodeLookup && !i ? o : void 0;
        t.nodeLookup &&
          (s = i ? t.nodeLookup.get(o) : gc(o) ? o : t.nodeLookup.get(o.id));
        const l = s ? As(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
        return rl(r, l);
      },
      { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
    );
    return ol(n);
  },
  Go = (e, t = {}) => {
    let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
      r = !1;
    return (
      e.forEach((o) => {
        (t.filter === void 0 || t.filter(o)) && ((n = rl(n, As(o))), (r = !0));
      }),
      r ? ol(n) : { x: 0, y: 0, width: 0, height: 0 }
    );
  },
  yc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
    const l = { ...Jo(t, [n, r, o]), width: t.width / o, height: t.height / o },
      a = [];
    for (const u of e.values()) {
      const { measured: f, selectable: c = !0, hidden: d = !1 } = u;
      if ((s && !c) || d) continue;
      const y = f.width ?? u.width ?? u.initialWidth ?? null,
        p = f.height ?? u.height ?? u.initialHeight ?? null,
        v = Fo(l, Pr(u)),
        w = (y ?? 0) * (p ?? 0),
        m = i && v > 0;
      (!u.internals.handleBounds || m || v >= w || u.dragging) && a.push(u);
    }
    return a;
  },
  rE = (e, t) => {
    const n = new Set();
    return (
      e.forEach((r) => {
        n.add(r.id);
      }),
      t.filter((r) => n.has(r.source) || n.has(r.target))
    );
  };
function oE(e, t) {
  const n = new Map(),
    r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return (
    e.forEach((o) => {
      o.measured.width &&
        o.measured.height &&
        ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) &&
        (!r || r.has(o.id)) &&
        n.set(o.id, o);
    }),
    n
  );
}
async function iE(
  { nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i },
  s,
) {
  if (e.size === 0) return Promise.resolve(!0);
  const l = oE(e, s),
    a = Go(l),
    u = vc(
      a,
      t,
      n,
      (s == null ? void 0 : s.minZoom) ?? o,
      (s == null ? void 0 : s.maxZoom) ?? i,
      (s == null ? void 0 : s.padding) ?? 0.1,
    );
  return (
    await r.setViewport(u, {
      duration: s == null ? void 0 : s.duration,
      ease: s == null ? void 0 : s.ease,
      interpolate: s == null ? void 0 : s.interpolate,
    }),
    Promise.resolve(!0)
  );
}
function hg({
  nodeId: e,
  nextPosition: t,
  nodeLookup: n,
  nodeOrigin: r = [0, 0],
  nodeExtent: o,
  onError: i,
}) {
  const s = n.get(e),
    l = s.parentId ? n.get(s.parentId) : void 0,
    { x: a, y: u } = l ? l.internals.positionAbsolute : { x: 0, y: 0 },
    f = s.origin ?? r;
  let c = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!l) i == null || i("005", Tt.error005());
    else {
      const y = l.measured.width,
        p = l.measured.height;
      y &&
        p &&
        (c = [
          [a, u],
          [a + y, u + p],
        ]);
    }
  else
    l &&
      Mr(s.extent) &&
      (c = [
        [s.extent[0][0] + a, s.extent[0][1] + u],
        [s.extent[1][0] + a, s.extent[1][1] + u],
      ]);
  const d = Mr(c) ? Fn(t, c, s.measured) : t;
  return (
    (s.measured.width === void 0 || s.measured.height === void 0) &&
      (i == null || i("015", Tt.error015())),
    {
      position: {
        x: d.x - a + (s.measured.width ?? 0) * f[0],
        y: d.y - u + (s.measured.height ?? 0) * f[1],
      },
      positionAbsolute: d,
    }
  );
}
async function sE({
  nodesToRemove: e = [],
  edgesToRemove: t = [],
  nodes: n,
  edges: r,
  onBeforeDelete: o,
}) {
  const i = new Set(e.map((d) => d.id)),
    s = [];
  for (const d of n) {
    if (d.deletable === !1) continue;
    const y = i.has(d.id),
      p = !y && d.parentId && s.find((v) => v.id === d.parentId);
    (y || p) && s.push(d);
  }
  const l = new Set(t.map((d) => d.id)),
    a = r.filter((d) => d.deletable !== !1),
    f = rE(s, a);
  for (const d of a) l.has(d.id) && !f.find((p) => p.id === d.id) && f.push(d);
  if (!o) return { edges: f, nodes: s };
  const c = await o({ nodes: s, edges: f });
  return typeof c == "boolean"
    ? c
      ? { edges: f, nodes: s }
      : { edges: [], nodes: [] }
    : c;
}
const Cr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
  Fn = (e = { x: 0, y: 0 }, t, n) => ({
    x: Cr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
    y: Cr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0)),
  });
function pg(e, t, n) {
  const { width: r, height: o } = Xt(n),
    { x: i, y: s } = n.internals.positionAbsolute;
  return Fn(
    e,
    [
      [i, s],
      [i + r, s + o],
    ],
    t,
  );
}
const gd = (e, t, n) =>
    e < t
      ? Cr(Math.abs(e - t), 1, t) / t
      : e > n
        ? -Cr(Math.abs(e - n), 1, t) / t
        : 0,
  mg = (e, t, n = 15, r = 40) => {
    const o = gd(e.x, r, t.width - r) * n,
      i = gd(e.y, r, t.height - r) * n;
    return [o, i];
  },
  rl = (e, t) => ({
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2),
  }),
  iu = ({ x: e, y: t, width: n, height: r }) => ({
    x: e,
    y: t,
    x2: e + n,
    y2: t + r,
  }),
  ol = ({ x: e, y: t, x2: n, y2: r }) => ({
    x: e,
    y: t,
    width: n - e,
    height: r - t,
  }),
  Pr = (e, t = [0, 0]) => {
    var o, i;
    const { x: n, y: r } = gc(e) ? e.internals.positionAbsolute : qo(e, t);
    return {
      x: n,
      y: r,
      width:
        ((o = e.measured) == null ? void 0 : o.width) ??
        e.width ??
        e.initialWidth ??
        0,
      height:
        ((i = e.measured) == null ? void 0 : i.height) ??
        e.height ??
        e.initialHeight ??
        0,
    };
  },
  As = (e, t = [0, 0]) => {
    var o, i;
    const { x: n, y: r } = gc(e) ? e.internals.positionAbsolute : qo(e, t);
    return {
      x: n,
      y: r,
      x2:
        n +
        (((o = e.measured) == null ? void 0 : o.width) ??
          e.width ??
          e.initialWidth ??
          0),
      y2:
        r +
        (((i = e.measured) == null ? void 0 : i.height) ??
          e.height ??
          e.initialHeight ??
          0),
    };
  },
  gg = (e, t) => ol(rl(iu(e), iu(t))),
  Fo = (e, t) => {
    const n = Math.max(
        0,
        Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x),
      ),
      r = Math.max(
        0,
        Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y),
      );
    return Math.ceil(n * r);
  },
  yd = (e) => gt(e.width) && gt(e.height) && gt(e.x) && gt(e.y),
  gt = (e) => !isNaN(e) && isFinite(e),
  lE = (e, t) => {},
  Zo = (e, t = [1, 1]) => ({
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1]),
  }),
  Jo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
    const l = { x: (e - n) / o, y: (t - r) / o };
    return i ? Zo(l, s) : l;
  },
  Is = ({ x: e, y: t }, [n, r, o]) => ({ x: e * o + n, y: t * o + r });
function Yn(e, t) {
  if (typeof e == "number") return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n)) return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n)) return Math.floor(t * n * 0.01);
  }
  return (
    console.error(
      `[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`,
    ),
    0
  );
}
function aE(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = Yn(e, n),
      o = Yn(e, t);
    return { top: r, right: o, bottom: r, left: o, x: o * 2, y: r * 2 };
  }
  if (typeof e == "object") {
    const r = Yn(e.top ?? e.y ?? 0, n),
      o = Yn(e.bottom ?? e.y ?? 0, n),
      i = Yn(e.left ?? e.x ?? 0, t),
      s = Yn(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function uE(e, t, n, r, o, i) {
  const { x: s, y: l } = Is(e, [t, n, r]),
    { x: a, y: u } = Is({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]),
    f = o - a,
    c = i - u;
  return {
    left: Math.floor(s),
    top: Math.floor(l),
    right: Math.floor(f),
    bottom: Math.floor(c),
  };
}
const vc = (e, t, n, r, o, i) => {
    const s = aE(i, t, n),
      l = (t - s.x) / e.width,
      a = (n - s.y) / e.height,
      u = Math.min(l, a),
      f = Cr(u, r, o),
      c = e.x + e.width / 2,
      d = e.y + e.height / 2,
      y = t / 2 - c * f,
      p = n / 2 - d * f,
      v = uE(e, y, p, f, t, n),
      w = {
        left: Math.min(v.left - s.left, 0),
        top: Math.min(v.top - s.top, 0),
        right: Math.min(v.right - s.right, 0),
        bottom: Math.min(v.bottom - s.bottom, 0),
      };
    return { x: y - w.left + w.right, y: p - w.top + w.bottom, zoom: f };
  },
  Ho = () => {
    var e;
    return (
      typeof navigator < "u" &&
      ((e = navigator == null ? void 0 : navigator.userAgent) == null
        ? void 0
        : e.indexOf("Mac")) >= 0
    );
  };
function Mr(e) {
  return e != null && e !== "parent";
}
function Xt(e) {
  var t, n;
  return {
    width:
      ((t = e.measured) == null ? void 0 : t.width) ??
      e.width ??
      e.initialWidth ??
      0,
    height:
      ((n = e.measured) == null ? void 0 : n.height) ??
      e.height ??
      e.initialHeight ??
      0,
  };
}
function yg(e) {
  var t, n;
  return (
    (((t = e.measured) == null ? void 0 : t.width) ??
      e.width ??
      e.initialWidth) !== void 0 &&
    (((n = e.measured) == null ? void 0 : n.height) ??
      e.height ??
      e.initialHeight) !== void 0
  );
}
function vg(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e },
    s = r.get(n);
  if (s) {
    const l = s.origin || o;
    ((i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * l[0]),
      (i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * l[1]));
  }
  return i;
}
function vd(e, t) {
  if (e.size !== t.size) return !1;
  for (const n of e) if (!t.has(n)) return !1;
  return !0;
}
function cE() {
  let e, t;
  return {
    promise: new Promise((r, o) => {
      ((e = r), (t = o));
    }),
    resolve: e,
    reject: t,
  };
}
function fE(e) {
  return { ...ug, ...(e || {}) };
}
function go(
  e,
  {
    snapGrid: t = [0, 0],
    snapToGrid: n = !1,
    transform: r,
    containerBounds: o,
  },
) {
  const { x: i, y: s } = yt(e),
    l = Jo(
      {
        x: i - ((o == null ? void 0 : o.left) ?? 0),
        y: s - ((o == null ? void 0 : o.top) ?? 0),
      },
      r,
    ),
    { x: a, y: u } = n ? Zo(l, t) : l;
  return { xSnapped: a, ySnapped: u, ...l };
}
const xc = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
  xg = (e) => {
    var t;
    return (
      ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) ||
      (window == null ? void 0 : window.document)
    );
  },
  dE = ["INPUT", "SELECT", "TEXTAREA"];
function wg(e) {
  var r, o;
  const t =
    ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null
      ? void 0
      : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1
    ? !1
    : dE.includes(t.nodeName) ||
        t.hasAttribute("contenteditable") ||
        !!t.closest(".nokey");
}
const Sg = (e) => "clientX" in e,
  yt = (e, t) => {
    var i, s;
    const n = Sg(e),
      r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX,
      o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
    return {
      x: r - ((t == null ? void 0 : t.left) ?? 0),
      y: o - ((t == null ? void 0 : t.top) ?? 0),
    };
  },
  xd = (e, t, n, r, o) => {
    const i = t.querySelectorAll(`.${e}`);
    return !i || !i.length
      ? null
      : Array.from(i).map((s) => {
          const l = s.getBoundingClientRect();
          return {
            id: s.getAttribute("data-handleid"),
            type: e,
            nodeId: o,
            position: s.getAttribute("data-handlepos"),
            x: (l.left - n.left) / r,
            y: (l.top - n.top) / r,
            ...xc(s),
          };
        });
  };
function Eg({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r,
  sourceControlX: o,
  sourceControlY: i,
  targetControlX: s,
  targetControlY: l,
}) {
  const a = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125,
    u = t * 0.125 + i * 0.375 + l * 0.375 + r * 0.125,
    f = Math.abs(a - e),
    c = Math.abs(u - t);
  return [a, u, f, c];
}
function bi(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function wd({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case K.Left:
      return [t - bi(t - r, i), n];
    case K.Right:
      return [t + bi(r - t, i), n];
    case K.Top:
      return [t, n - bi(n - o, i)];
    case K.Bottom:
      return [t, n + bi(o - n, i)];
  }
}
function wc({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = K.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = K.Top,
  curvature: s = 0.25,
}) {
  const [l, a] = wd({ pos: n, x1: e, y1: t, x2: r, y2: o, c: s }),
    [u, f] = wd({ pos: i, x1: r, y1: o, x2: e, y2: t, c: s }),
    [c, d, y, p] = Eg({
      sourceX: e,
      sourceY: t,
      targetX: r,
      targetY: o,
      sourceControlX: l,
      sourceControlY: a,
      targetControlX: u,
      targetControlY: f,
    });
  return [`M${e},${t} C${l},${a} ${u},${f} ${r},${o}`, c, d, y, p];
}
function kg({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2,
    i = n < e ? n + o : n - o,
    s = Math.abs(r - t) / 2,
    l = r < t ? r + s : r - s;
  return [i, l, o, s];
}
function hE({
  sourceNode: e,
  targetNode: t,
  selected: n = !1,
  zIndex: r = 0,
  elevateOnSelect: o = !1,
  zIndexMode: i = "basic",
}) {
  if (i === "manual") return r;
  const s = o && n ? r + 1e3 : r,
    l = Math.max(
      e.parentId || (o && e.selected) ? e.internals.z : 0,
      t.parentId || (o && t.selected) ? t.internals.z : 0,
    );
  return s + l;
}
function pE({
  sourceNode: e,
  targetNode: t,
  width: n,
  height: r,
  transform: o,
}) {
  const i = rl(As(e), As(t));
  (i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1));
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2],
  };
  return Fo(s, ol(i)) > 0;
}
const mE = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) =>
    `xy-edge__${e}${t || ""}-${n}${r || ""}`,
  gE = (e, t) =>
    t.some(
      (n) =>
        n.source === e.source &&
        n.target === e.target &&
        (n.sourceHandle === e.sourceHandle ||
          (!n.sourceHandle && !e.sourceHandle)) &&
        (n.targetHandle === e.targetHandle ||
          (!n.targetHandle && !e.targetHandle)),
    ),
  _g = (e, t, n = {}) => {
    if (!e.source || !e.target) return t;
    const r = n.getEdgeId || mE;
    let o;
    return (
      dg(e) ? (o = { ...e }) : (o = { ...e, id: r(e) }),
      gE(o, t)
        ? t
        : (o.sourceHandle === null && delete o.sourceHandle,
          o.targetHandle === null && delete o.targetHandle,
          t.concat(o))
    );
  };
function Ng({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, l] = kg({ sourceX: e, sourceY: t, targetX: n, targetY: r });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, l];
}
const Sd = {
    [K.Left]: { x: -1, y: 0 },
    [K.Right]: { x: 1, y: 0 },
    [K.Top]: { x: 0, y: -1 },
    [K.Bottom]: { x: 0, y: 1 },
  },
  yE = ({ source: e, sourcePosition: t = K.Bottom, target: n }) =>
    t === K.Left || t === K.Right
      ? e.x < n.x
        ? { x: 1, y: 0 }
        : { x: -1, y: 0 }
      : e.y < n.y
        ? { x: 0, y: 1 }
        : { x: 0, y: -1 },
  Ed = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function vE({
  source: e,
  sourcePosition: t = K.Bottom,
  target: n,
  targetPosition: r = K.Top,
  center: o,
  offset: i,
  stepPosition: s,
}) {
  const l = Sd[t],
    a = Sd[r],
    u = { x: e.x + l.x * i, y: e.y + l.y * i },
    f = { x: n.x + a.x * i, y: n.y + a.y * i },
    c = yE({ source: u, sourcePosition: t, target: f }),
    d = c.x !== 0 ? "x" : "y",
    y = c[d];
  let p = [],
    v,
    w;
  const m = { x: 0, y: 0 },
    g = { x: 0, y: 0 },
    [, , h, x] = kg({ sourceX: e.x, sourceY: e.y, targetX: n.x, targetY: n.y });
  if (l[d] * a[d] === -1) {
    d === "x"
      ? ((v = o.x ?? u.x + (f.x - u.x) * s), (w = o.y ?? (u.y + f.y) / 2))
      : ((v = o.x ?? (u.x + f.x) / 2), (w = o.y ?? u.y + (f.y - u.y) * s));
    const k = [
        { x: v, y: u.y },
        { x: v, y: f.y },
      ],
      _ = [
        { x: u.x, y: w },
        { x: f.x, y: w },
      ];
    l[d] === y ? (p = d === "x" ? k : _) : (p = d === "x" ? _ : k);
  } else {
    const k = [{ x: u.x, y: f.y }],
      _ = [{ x: f.x, y: u.y }];
    if (
      (d === "x" ? (p = l.x === y ? _ : k) : (p = l.y === y ? k : _), t === r)
    ) {
      const L = Math.abs(e[d] - n[d]);
      if (L <= i) {
        const H = Math.min(i - 1, i - L);
        l[d] === y
          ? (m[d] = (u[d] > e[d] ? -1 : 1) * H)
          : (g[d] = (f[d] > n[d] ? -1 : 1) * H);
      }
    }
    if (t !== r) {
      const L = d === "x" ? "y" : "x",
        H = l[d] === a[L],
        C = u[L] > f[L],
        z = u[L] < f[L];
      ((l[d] === 1 && ((!H && C) || (H && z))) ||
        (l[d] !== 1 && ((!H && z) || (H && C)))) &&
        (p = d === "x" ? k : _);
    }
    const M = { x: u.x + m.x, y: u.y + m.y },
      R = { x: f.x + g.x, y: f.y + g.y },
      F = Math.max(Math.abs(M.x - p[0].x), Math.abs(R.x - p[0].x)),
      T = Math.max(Math.abs(M.y - p[0].y), Math.abs(R.y - p[0].y));
    F >= T
      ? ((v = (M.x + R.x) / 2), (w = p[0].y))
      : ((v = p[0].x), (w = (M.y + R.y) / 2));
  }
  return [
    [
      e,
      { x: u.x + m.x, y: u.y + m.y },
      ...p,
      { x: f.x + g.x, y: f.y + g.y },
      n,
    ],
    v,
    w,
    h,
    x,
  ];
}
function xE(e, t, n, r) {
  const o = Math.min(Ed(e, t) / 2, Ed(t, n) / 2, r),
    { x: i, y: s } = t;
  if ((e.x === i && i === n.x) || (e.y === s && s === n.y)) return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1,
      f = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * f}`;
  }
  const l = e.x < n.x ? 1 : -1,
    a = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * a}Q ${i},${s} ${i + o * l},${s}`;
}
function su({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = K.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = K.Top,
  borderRadius: s = 5,
  centerX: l,
  centerY: a,
  offset: u = 20,
  stepPosition: f = 0.5,
}) {
  const [c, d, y, p, v] = vE({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: l, y: a },
    offset: u,
    stepPosition: f,
  });
  return [
    c.reduce((m, g, h) => {
      let x = "";
      return (
        h > 0 && h < c.length - 1
          ? (x = xE(c[h - 1], g, c[h + 1], s))
          : (x = `${h === 0 ? "M" : "L"}${g.x} ${g.y}`),
        (m += x),
        m
      );
    }, ""),
    d,
    y,
    p,
    v,
  ];
}
function kd(e) {
  var t;
  return (
    e &&
    !!(e.internals.handleBounds || ((t = e.handles) != null && t.length)) &&
    !!(e.measured.width || e.width || e.initialWidth)
  );
}
function wE(e) {
  var c;
  const { sourceNode: t, targetNode: n } = e;
  if (!kd(t) || !kd(n)) return null;
  const r = t.internals.handleBounds || _d(t.handles),
    o = n.internals.handleBounds || _d(n.handles),
    i = Nd((r == null ? void 0 : r.source) ?? [], e.sourceHandle),
    s = Nd(
      e.connectionMode === Nr.Strict
        ? ((o == null ? void 0 : o.target) ?? [])
        : ((o == null ? void 0 : o.target) ?? []).concat(
            (o == null ? void 0 : o.source) ?? [],
          ),
      e.targetHandle,
    );
  if (!i || !s)
    return (
      (c = e.onError) == null ||
        c.call(
          e,
          "008",
          Tt.error008(i ? "target" : "source", {
            id: e.id,
            sourceHandle: e.sourceHandle,
            targetHandle: e.targetHandle,
          }),
        ),
      null
    );
  const l = (i == null ? void 0 : i.position) || K.Bottom,
    a = (s == null ? void 0 : s.position) || K.Top,
    u = Hn(t, i, l),
    f = Hn(n, s, a);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: f.x,
    targetY: f.y,
    sourcePosition: l,
    targetPosition: a,
  };
}
function _d(e) {
  if (!e) return null;
  const t = [],
    n = [];
  for (const r of e)
    ((r.width = r.width ?? 1),
      (r.height = r.height ?? 1),
      r.type === "source" ? t.push(r) : r.type === "target" && n.push(r));
  return { source: t, target: n };
}
function Hn(e, t, n = K.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x,
    i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y,
    { width: s, height: l } = t ?? Xt(e);
  if (r) return { x: o + s / 2, y: i + l / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case K.Top:
      return { x: o + s / 2, y: i };
    case K.Right:
      return { x: o + s, y: i + l / 2 };
    case K.Bottom:
      return { x: o + s / 2, y: i + l };
    case K.Left:
      return { x: o, y: i + l / 2 };
  }
}
function Nd(e, t) {
  return (e && (t ? e.find((n) => n.id === t) : e[0])) || null;
}
function lu(e, t) {
  return e
    ? typeof e == "string"
      ? e
      : `${t ? `${t}__` : ""}${Object.keys(e)
          .sort()
          .map((r) => `${r}=${e[r]}`)
          .join("&")}`
    : "";
}
function SE(
  e,
  { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o },
) {
  const i = new Set();
  return e
    .reduce(
      (s, l) => (
        [l.markerStart || r, l.markerEnd || o].forEach((a) => {
          if (a && typeof a == "object") {
            const u = lu(a, t);
            i.has(u) ||
              (s.push({ id: u, color: a.color || n, ...a }), i.add(u));
          }
        }),
        s
      ),
      [],
    )
    .sort((s, l) => s.id.localeCompare(l.id));
}
const Cg = 1e3,
  EE = 10,
  Sc = {
    nodeOrigin: [0, 0],
    nodeExtent: Do,
    elevateNodesOnSelect: !0,
    zIndexMode: "basic",
    defaults: {},
  },
  kE = { ...Sc, checkEquality: !0 };
function Ec(e, t) {
  const n = { ...e };
  for (const r in t) t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function _E(e, t, n) {
  const r = Ec(Sc, n);
  for (const o of e.values())
    if (o.parentId) _c(o, e, t, r);
    else {
      const i = qo(o, r.nodeOrigin),
        s = Mr(o.extent) ? o.extent : r.nodeExtent,
        l = Fn(i, s, Xt(o));
      o.internals.positionAbsolute = l;
    }
}
function NE(e, t) {
  if (!e.handles)
    return e.measured
      ? t == null
        ? void 0
        : t.internals.handleBounds
      : void 0;
  const n = [],
    r = [];
  for (const o of e.handles) {
    const i = {
      id: o.id,
      width: o.width ?? 1,
      height: o.height ?? 1,
      nodeId: e.id,
      x: o.x,
      y: o.y,
      position: o.position,
      type: o.type,
    };
    o.type === "source" ? n.push(i) : o.type === "target" && r.push(i);
  }
  return { source: n, target: r };
}
function kc(e) {
  return e === "manual";
}
function au(e, t, n, r = {}) {
  var u, f;
  const o = Ec(kE, r),
    i = { i: 0 },
    s = new Map(t),
    l = o != null && o.elevateNodesOnSelect && !kc(o.zIndexMode) ? Cg : 0;
  let a = e.length > 0;
  (t.clear(), n.clear());
  for (const c of e) {
    let d = s.get(c.id);
    if (o.checkEquality && c === (d == null ? void 0 : d.internals.userNode))
      t.set(c.id, d);
    else {
      const y = qo(c, o.nodeOrigin),
        p = Mr(c.extent) ? c.extent : o.nodeExtent,
        v = Fn(y, p, Xt(c));
      ((d = {
        ...o.defaults,
        ...c,
        measured: {
          width: (u = c.measured) == null ? void 0 : u.width,
          height: (f = c.measured) == null ? void 0 : f.height,
        },
        internals: {
          positionAbsolute: v,
          handleBounds: NE(c, d),
          z: Pg(c, l, o.zIndexMode),
          userNode: c,
        },
      }),
        t.set(c.id, d));
    }
    ((d.measured === void 0 ||
      d.measured.width === void 0 ||
      d.measured.height === void 0) &&
      !d.hidden &&
      (a = !1),
      c.parentId && _c(d, t, n, r, i));
  }
  return a;
}
function CE(e, t) {
  if (!e.parentId) return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
}
function _c(e, t, n, r, o) {
  const {
      elevateNodesOnSelect: i,
      nodeOrigin: s,
      nodeExtent: l,
      zIndexMode: a,
    } = Ec(Sc, r),
    u = e.parentId,
    f = t.get(u);
  if (!f) {
    console.warn(
      `Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
    );
    return;
  }
  (CE(e, n),
    o &&
      !f.parentId &&
      f.internals.rootParentIndex === void 0 &&
      a === "auto" &&
      ((f.internals.rootParentIndex = ++o.i),
      (f.internals.z = f.internals.z + o.i * EE)),
    o &&
      f.internals.rootParentIndex !== void 0 &&
      (o.i = f.internals.rootParentIndex));
  const c = i && !kc(a) ? Cg : 0,
    { x: d, y, z: p } = PE(e, f, s, l, c, a),
    { positionAbsolute: v } = e.internals,
    w = d !== v.x || y !== v.y;
  (w || p !== e.internals.z) &&
    t.set(e.id, {
      ...e,
      internals: {
        ...e.internals,
        positionAbsolute: w ? { x: d, y } : v,
        z: p,
      },
    });
}
function Pg(e, t, n) {
  const r = gt(e.zIndex) ? e.zIndex : 0;
  return kc(n) ? r : r + (e.selected ? t : 0);
}
function PE(e, t, n, r, o, i) {
  const { x: s, y: l } = t.internals.positionAbsolute,
    a = Xt(e),
    u = qo(e, n),
    f = Mr(e.extent) ? Fn(u, e.extent, a) : u;
  let c = Fn({ x: s + f.x, y: l + f.y }, r, a);
  e.extent === "parent" && (c = pg(c, a, t));
  const d = Pg(e, o, i),
    y = t.internals.z ?? 0;
  return { x: c.x, y: c.y, z: y >= d ? y + 1 : d };
}
function Nc(e, t, n, r = [0, 0]) {
  var s;
  const o = [],
    i = new Map();
  for (const l of e) {
    const a = t.get(l.parentId);
    if (!a) continue;
    const u =
        ((s = i.get(l.parentId)) == null ? void 0 : s.expandedRect) ?? Pr(a),
      f = gg(u, l.rect);
    i.set(l.parentId, { expandedRect: f, parent: a });
  }
  return (
    i.size > 0 &&
      i.forEach(({ expandedRect: l, parent: a }, u) => {
        var h;
        const f = a.internals.positionAbsolute,
          c = Xt(a),
          d = a.origin ?? r,
          y = l.x < f.x ? Math.round(Math.abs(f.x - l.x)) : 0,
          p = l.y < f.y ? Math.round(Math.abs(f.y - l.y)) : 0,
          v = Math.max(c.width, Math.round(l.width)),
          w = Math.max(c.height, Math.round(l.height)),
          m = (v - c.width) * d[0],
          g = (w - c.height) * d[1];
        ((y > 0 || p > 0 || m || g) &&
          (o.push({
            id: u,
            type: "position",
            position: { x: a.position.x - y + m, y: a.position.y - p + g },
          }),
          (h = n.get(u)) == null ||
            h.forEach((x) => {
              e.some((E) => E.id === x.id) ||
                o.push({
                  id: x.id,
                  type: "position",
                  position: { x: x.position.x + y, y: x.position.y + p },
                });
            })),
          (c.width < l.width || c.height < l.height || y || p) &&
            o.push({
              id: u,
              type: "dimensions",
              setAttributes: !0,
              dimensions: {
                width: v + (y ? d[0] * y - m : 0),
                height: w + (p ? d[1] * p - g : 0),
              },
            }));
      }),
    o
  );
}
function ME(e, t, n, r, o, i, s) {
  const l = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!l) return { changes: [], updatedInternals: a };
  const u = [],
    f = window.getComputedStyle(l),
    { m22: c } = new window.DOMMatrixReadOnly(f.transform),
    d = [];
  for (const y of e.values()) {
    const p = t.get(y.id);
    if (!p) continue;
    if (p.hidden) {
      (t.set(p.id, {
        ...p,
        internals: { ...p.internals, handleBounds: void 0 },
      }),
        (a = !0));
      continue;
    }
    const v = xc(y.nodeElement),
      w = p.measured.width !== v.width || p.measured.height !== v.height;
    if (
      !!(v.width && v.height && (w || !p.internals.handleBounds || y.force))
    ) {
      const g = y.nodeElement.getBoundingClientRect(),
        h = Mr(p.extent) ? p.extent : i;
      let { positionAbsolute: x } = p.internals;
      p.parentId && p.extent === "parent"
        ? (x = pg(x, v, t.get(p.parentId)))
        : h && (x = Fn(x, h, v));
      const E = {
        ...p,
        measured: v,
        internals: {
          ...p.internals,
          positionAbsolute: x,
          handleBounds: {
            source: xd("source", y.nodeElement, g, c, p.id),
            target: xd("target", y.nodeElement, g, c, p.id),
          },
        },
      };
      (t.set(p.id, E),
        p.parentId && _c(E, t, n, { nodeOrigin: o, zIndexMode: s }),
        (a = !0),
        w &&
          (u.push({ id: p.id, type: "dimensions", dimensions: v }),
          p.expandParent &&
            p.parentId &&
            d.push({ id: p.id, parentId: p.parentId, rect: Pr(E, o) })));
    }
  }
  if (d.length > 0) {
    const y = Nc(d, t, n, o);
    u.push(...y);
  }
  return { changes: u, updatedInternals: a };
}
async function bE({
  delta: e,
  panZoom: t,
  transform: n,
  translateExtent: r,
  width: o,
  height: i,
}) {
  if (!t || (!e.x && !e.y)) return Promise.resolve(!1);
  const s = await t.setViewportConstrained(
      { x: n[0] + e.x, y: n[1] + e.y, zoom: n[2] },
      [
        [0, 0],
        [o, i],
      ],
      r,
    ),
    l = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(l);
}
function Cd(e, t, n, r, o, i) {
  let s = o;
  const l = r.get(s) || new Map();
  (r.set(s, l.set(n, t)), (s = `${o}-${e}`));
  const a = r.get(s) || new Map();
  if ((r.set(s, a.set(n, t)), i)) {
    s = `${o}-${e}-${i}`;
    const u = r.get(s) || new Map();
    r.set(s, u.set(n, t));
  }
}
function Mg(e, t, n) {
  (e.clear(), t.clear());
  for (const r of n) {
    const {
        source: o,
        target: i,
        sourceHandle: s = null,
        targetHandle: l = null,
      } = r,
      a = {
        edgeId: r.id,
        source: o,
        target: i,
        sourceHandle: s,
        targetHandle: l,
      },
      u = `${o}-${s}--${i}-${l}`,
      f = `${i}-${l}--${o}-${s}`;
    (Cd("source", a, f, e, o, s), Cd("target", a, u, e, i, l), t.set(r.id, r));
  }
}
function bg(e, t) {
  if (!e.parentId) return !1;
  const n = t.get(e.parentId);
  return n ? (n.selected ? !0 : bg(n, t)) : !1;
}
function Pd(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t)) return !0;
    if (r === n) return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function TE(e, t, n, r) {
  const o = new Map();
  for (const [i, s] of e)
    if (
      (s.selected || s.id === r) &&
      (!s.parentId || !bg(s, e)) &&
      (s.draggable || (t && typeof s.draggable > "u"))
    ) {
      const l = e.get(i);
      l &&
        o.set(i, {
          id: i,
          position: l.position || { x: 0, y: 0 },
          distance: {
            x: n.x - l.internals.positionAbsolute.x,
            y: n.y - l.internals.positionAbsolute.y,
          },
          extent: l.extent,
          parentId: l.parentId,
          origin: l.origin,
          expandParent: l.expandParent,
          internals: {
            positionAbsolute: l.internals.positionAbsolute || { x: 0, y: 0 },
          },
          measured: {
            width: l.measured.width ?? 0,
            height: l.measured.height ?? 0,
          },
        });
    }
  return o;
}
function Ql({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, l, a;
  const o = [];
  for (const [u, f] of t) {
    const c = (s = n.get(u)) == null ? void 0 : s.internals.userNode;
    c && o.push({ ...c, position: f.position, dragging: r });
  }
  if (!e) return [o[0], o];
  const i = (l = n.get(e)) == null ? void 0 : l.internals.userNode;
  return [
    i
      ? {
          ...i,
          position:
            ((a = t.get(e)) == null ? void 0 : a.position) || i.position,
          dragging: r,
        }
      : o[0],
    o,
  ];
}
function RE({ dragItems: e, snapGrid: t, x: n, y: r }) {
  const o = e.values().next().value;
  if (!o) return null;
  const i = { x: n - o.distance.x, y: r - o.distance.y },
    s = Zo(i, t);
  return { x: s.x - i.x, y: s.y - i.y };
}
function AE({
  onNodeMouseDown: e,
  getStoreItems: t,
  onDragStart: n,
  onDrag: r,
  onDragStop: o,
}) {
  let i = { x: null, y: null },
    s = 0,
    l = new Map(),
    a = !1,
    u = { x: 0, y: 0 },
    f = null,
    c = !1,
    d = null,
    y = !1,
    p = !1,
    v = null;
  function w({
    noDragClassName: g,
    handleSelector: h,
    domNode: x,
    isSelectable: E,
    nodeId: k,
    nodeClickDistance: _ = 0,
  }) {
    d = qe(x);
    function M({ x: L, y: H }) {
      const {
        nodeLookup: C,
        nodeExtent: z,
        snapGrid: b,
        snapToGrid: j,
        nodeOrigin: N,
        onNodeDrag: P,
        onSelectionDrag: A,
        onError: D,
        updateNodePositions: $,
      } = t();
      i = { x: L, y: H };
      let W = !1;
      const U = l.size > 1,
        Y = U && z ? iu(Go(l)) : null,
        Q = U && j ? RE({ dragItems: l, snapGrid: b, x: L, y: H }) : null;
      for (const [q, V] of l) {
        if (!C.has(q)) continue;
        let G = { x: L - V.distance.x, y: H - V.distance.y };
        j &&
          (G = Q
            ? { x: Math.round(G.x + Q.x), y: Math.round(G.y + Q.y) }
            : Zo(G, b));
        let ne = null;
        if (U && z && !V.extent && Y) {
          const { positionAbsolute: Z } = V.internals,
            le = Z.x - Y.x + z[0][0],
            ce = Z.x + V.measured.width - Y.x2 + z[1][0],
            se = Z.y - Y.y + z[0][1],
            Re = Z.y + V.measured.height - Y.y2 + z[1][1];
          ne = [
            [le, se],
            [ce, Re],
          ];
        }
        const { position: te, positionAbsolute: J } = hg({
          nodeId: q,
          nextPosition: G,
          nodeLookup: C,
          nodeExtent: ne || z,
          nodeOrigin: N,
          onError: D,
        });
        ((W = W || V.position.x !== te.x || V.position.y !== te.y),
          (V.position = te),
          (V.internals.positionAbsolute = J));
      }
      if (((p = p || W), !!W && ($(l, !0), v && (r || P || (!k && A))))) {
        const [q, V] = Ql({ nodeId: k, dragItems: l, nodeLookup: C });
        (r == null || r(v, l, q, V),
          P == null || P(v, q, V),
          k || A == null || A(v, V));
      }
    }
    async function R() {
      if (!f) return;
      const {
        transform: L,
        panBy: H,
        autoPanSpeed: C,
        autoPanOnNodeDrag: z,
      } = t();
      if (!z) {
        ((a = !1), cancelAnimationFrame(s));
        return;
      }
      const [b, j] = mg(u, f, C);
      ((b !== 0 || j !== 0) &&
        ((i.x = (i.x ?? 0) - b / L[2]),
        (i.y = (i.y ?? 0) - j / L[2]),
        (await H({ x: b, y: j })) && M(i)),
        (s = requestAnimationFrame(R)));
    }
    function F(L) {
      var U;
      const {
        nodeLookup: H,
        multiSelectionActive: C,
        nodesDraggable: z,
        transform: b,
        snapGrid: j,
        snapToGrid: N,
        selectNodesOnDrag: P,
        onNodeDragStart: A,
        onSelectionDragStart: D,
        unselectNodesAndEdges: $,
      } = t();
      ((c = !0),
        (!P || !E) &&
          !C &&
          k &&
          (((U = H.get(k)) != null && U.selected) || $()),
        E && P && k && (e == null || e(k)));
      const W = go(L.sourceEvent, {
        transform: b,
        snapGrid: j,
        snapToGrid: N,
        containerBounds: f,
      });
      if (
        ((i = W), (l = TE(H, z, W, k)), l.size > 0 && (n || A || (!k && D)))
      ) {
        const [Y, Q] = Ql({ nodeId: k, dragItems: l, nodeLookup: H });
        (n == null || n(L.sourceEvent, l, Y, Q),
          A == null || A(L.sourceEvent, Y, Q),
          k || D == null || D(L.sourceEvent, Q));
      }
    }
    const T = Xm()
      .clickDistance(_)
      .on("start", (L) => {
        const {
          domNode: H,
          nodeDragThreshold: C,
          transform: z,
          snapGrid: b,
          snapToGrid: j,
        } = t();
        ((f = (H == null ? void 0 : H.getBoundingClientRect()) || null),
          (y = !1),
          (p = !1),
          (v = L.sourceEvent),
          C === 0 && F(L),
          (i = go(L.sourceEvent, {
            transform: z,
            snapGrid: b,
            snapToGrid: j,
            containerBounds: f,
          })),
          (u = yt(L.sourceEvent, f)));
      })
      .on("drag", (L) => {
        const {
            autoPanOnNodeDrag: H,
            transform: C,
            snapGrid: z,
            snapToGrid: b,
            nodeDragThreshold: j,
            nodeLookup: N,
          } = t(),
          P = go(L.sourceEvent, {
            transform: C,
            snapGrid: z,
            snapToGrid: b,
            containerBounds: f,
          });
        if (
          ((v = L.sourceEvent),
          ((L.sourceEvent.type === "touchmove" &&
            L.sourceEvent.touches.length > 1) ||
            (k && !N.has(k))) &&
            (y = !0),
          !y)
        ) {
          if ((!a && H && c && ((a = !0), R()), !c)) {
            const A = yt(L.sourceEvent, f),
              D = A.x - u.x,
              $ = A.y - u.y;
            Math.sqrt(D * D + $ * $) > j && F(L);
          }
          (i.x !== P.xSnapped || i.y !== P.ySnapped) &&
            l &&
            c &&
            ((u = yt(L.sourceEvent, f)), M(P));
        }
      })
      .on("end", (L) => {
        if (
          !(!c || y) &&
          ((a = !1), (c = !1), cancelAnimationFrame(s), l.size > 0)
        ) {
          const {
            nodeLookup: H,
            updateNodePositions: C,
            onNodeDragStop: z,
            onSelectionDragStop: b,
          } = t();
          if ((p && (C(l, !1), (p = !1)), o || z || (!k && b))) {
            const [j, N] = Ql({
              nodeId: k,
              dragItems: l,
              nodeLookup: H,
              dragging: !1,
            });
            (o == null || o(L.sourceEvent, l, j, N),
              z == null || z(L.sourceEvent, j, N),
              k || b == null || b(L.sourceEvent, N));
          }
        }
      })
      .filter((L) => {
        const H = L.target;
        return !L.button && (!g || !Pd(H, `.${g}`, x)) && (!h || Pd(H, h, x));
      });
    d.call(T);
  }
  function m() {
    d == null || d.on(".drag", null);
  }
  return { update: w, destroy: m };
}
function IE(e, t, n) {
  const r = [],
    o = { x: e.x - n, y: e.y - n, width: n * 2, height: n * 2 };
  for (const i of t.values()) Fo(o, Pr(i)) > 0 && r.push(i);
  return r;
}
const LE = 250;
function zE(e, t, n, r) {
  var l, a;
  let o = [],
    i = 1 / 0;
  const s = IE(e, n, t + LE);
  for (const u of s) {
    const f = [
      ...(((l = u.internals.handleBounds) == null ? void 0 : l.source) ?? []),
      ...(((a = u.internals.handleBounds) == null ? void 0 : a.target) ?? []),
    ];
    for (const c of f) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id) continue;
      const { x: d, y } = Hn(u, c, c.position, !0),
        p = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(y - e.y, 2));
      p > t ||
        (p < i
          ? ((o = [{ ...c, x: d, y }]), (i = p))
          : p === i && o.push({ ...c, x: d, y }));
    }
  }
  if (!o.length) return null;
  if (o.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return o.find((f) => f.type === u) ?? o[0];
  }
  return o[0];
}
function Tg(e, t, n, r, o, i = !1) {
  var u, f, c;
  const s = r.get(e);
  if (!s) return null;
  const l =
      o === "strict"
        ? (u = s.internals.handleBounds) == null
          ? void 0
          : u[t]
        : [
            ...(((f = s.internals.handleBounds) == null ? void 0 : f.source) ??
              []),
            ...(((c = s.internals.handleBounds) == null ? void 0 : c.target) ??
              []),
          ],
    a =
      (n
        ? l == null
          ? void 0
          : l.find((d) => d.id === n)
        : l == null
          ? void 0
          : l[0]) ?? null;
  return a && i ? { ...a, ...Hn(s, a, a.position, !0) } : a;
}
function Rg(e, t) {
  return (
    e ||
    (t != null && t.classList.contains("target")
      ? "target"
      : t != null && t.classList.contains("source")
        ? "source"
        : null)
  );
}
function jE(e, t) {
  let n = null;
  return (t ? (n = !0) : e && !t && (n = !1), n);
}
const Ag = () => !0;
function OE(
  e,
  {
    connectionMode: t,
    connectionRadius: n,
    handleId: r,
    nodeId: o,
    edgeUpdaterType: i,
    isTarget: s,
    domNode: l,
    nodeLookup: a,
    lib: u,
    autoPanOnConnect: f,
    flowId: c,
    panBy: d,
    cancelConnection: y,
    onConnectStart: p,
    onConnect: v,
    onConnectEnd: w,
    isValidConnection: m = Ag,
    onReconnectEnd: g,
    updateConnection: h,
    getTransform: x,
    getFromHandle: E,
    autoPanSpeed: k,
    dragThreshold: _ = 1,
    handleDomNode: M,
  },
) {
  const R = xg(e.target);
  let F = 0,
    T;
  const { x: L, y: H } = yt(e),
    C = Rg(i, M),
    z = l == null ? void 0 : l.getBoundingClientRect();
  let b = !1;
  if (!z || !C) return;
  const j = Tg(o, C, r, a, t);
  if (!j) return;
  let N = yt(e, z),
    P = !1,
    A = null,
    D = !1,
    $ = null;
  function W() {
    if (!f || !z) return;
    const [te, J] = mg(N, z, k);
    (d({ x: te, y: J }), (F = requestAnimationFrame(W)));
  }
  const U = { ...j, nodeId: o, type: C, position: j.position },
    Y = a.get(o);
  let q = {
    inProgress: !0,
    isValid: null,
    from: Hn(Y, U, K.Left, !0),
    fromHandle: U,
    fromPosition: U.position,
    fromNode: Y,
    to: N,
    toHandle: null,
    toPosition: md[U.position],
    toNode: null,
    pointer: N,
  };
  function V() {
    ((b = !0),
      h(q),
      p == null || p(e, { nodeId: o, handleId: r, handleType: C }));
  }
  _ === 0 && V();
  function G(te) {
    if (!b) {
      const { x: Re, y: Yt } = yt(te),
        At = Re - L,
        xn = Yt - H;
      if (!(At * At + xn * xn > _ * _)) return;
      V();
    }
    if (!E() || !U) {
      ne(te);
      return;
    }
    const J = x();
    ((N = yt(te, z)),
      (T = zE(Jo(N, J, !1, [1, 1]), n, a, U)),
      P || (W(), (P = !0)));
    const Z = Ig(te, {
      handle: T,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: m,
      doc: R,
      lib: u,
      flowId: c,
      nodeLookup: a,
    });
    (($ = Z.handleDomNode), (A = Z.connection), (D = jE(!!T, Z.isValid)));
    const le = a.get(o),
      ce = le ? Hn(le, U, K.Left, !0) : q.from,
      se = {
        ...q,
        from: ce,
        isValid: D,
        to: Z.toHandle && D ? Is({ x: Z.toHandle.x, y: Z.toHandle.y }, J) : N,
        toHandle: Z.toHandle,
        toPosition: D && Z.toHandle ? Z.toHandle.position : md[U.position],
        toNode: Z.toHandle ? a.get(Z.toHandle.nodeId) : null,
        pointer: N,
      };
    (h(se), (q = se));
  }
  function ne(te) {
    if (!("touches" in te && te.touches.length > 0)) {
      if (b) {
        (T || $) && A && D && (v == null || v(A));
        const { inProgress: J, ...Z } = q,
          le = { ...Z, toPosition: q.toHandle ? q.toPosition : null };
        (w == null || w(te, le), i && (g == null || g(te, le)));
      }
      (y(),
        cancelAnimationFrame(F),
        (P = !1),
        (D = !1),
        (A = null),
        ($ = null),
        R.removeEventListener("mousemove", G),
        R.removeEventListener("mouseup", ne),
        R.removeEventListener("touchmove", G),
        R.removeEventListener("touchend", ne));
    }
  }
  (R.addEventListener("mousemove", G),
    R.addEventListener("mouseup", ne),
    R.addEventListener("touchmove", G),
    R.addEventListener("touchend", ne));
}
function Ig(
  e,
  {
    handle: t,
    connectionMode: n,
    fromNodeId: r,
    fromHandleId: o,
    fromType: i,
    doc: s,
    lib: l,
    flowId: a,
    isValidConnection: u = Ag,
    nodeLookup: f,
  },
) {
  const c = i === "target",
    d = t
      ? s.querySelector(
          `.${l}-flow__handle[data-id="${a}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`,
        )
      : null,
    { x: y, y: p } = yt(e),
    v = s.elementFromPoint(y, p),
    w = v != null && v.classList.contains(`${l}-flow__handle`) ? v : d,
    m = { handleDomNode: w, isValid: !1, connection: null, toHandle: null };
  if (w) {
    const g = Rg(void 0, w),
      h = w.getAttribute("data-nodeid"),
      x = w.getAttribute("data-handleid"),
      E = w.classList.contains("connectable"),
      k = w.classList.contains("connectableend");
    if (!h || !g) return m;
    const _ = {
      source: c ? h : r,
      sourceHandle: c ? x : o,
      target: c ? r : h,
      targetHandle: c ? o : x,
    };
    m.connection = _;
    const R =
      E &&
      k &&
      (n === Nr.Strict
        ? (c && g === "source") || (!c && g === "target")
        : h !== r || x !== o);
    ((m.isValid = R && u(_)), (m.toHandle = Tg(h, g, x, f, n, !0)));
  }
  return m;
}
const uu = { onPointerDown: OE, isValid: Ig };
function DE({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = qe(e);
  function i({
    translateExtent: l,
    width: a,
    height: u,
    zoomStep: f = 1,
    pannable: c = !0,
    zoomable: d = !0,
    inversePan: y = !1,
  }) {
    const p = (h) => {
      if (h.sourceEvent.type !== "wheel" || !t) return;
      const x = n(),
        E = h.sourceEvent.ctrlKey && Ho() ? 10 : 1,
        k =
          -h.sourceEvent.deltaY *
          (h.sourceEvent.deltaMode === 1
            ? 0.05
            : h.sourceEvent.deltaMode
              ? 1
              : 0.002) *
          f,
        _ = x[2] * Math.pow(2, k * E);
      t.scaleTo(_);
    };
    let v = [0, 0];
    const w = (h) => {
        (h.sourceEvent.type === "mousedown" ||
          h.sourceEvent.type === "touchstart") &&
          (v = [
            h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
            h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY,
          ]);
      },
      m = (h) => {
        const x = n();
        if (
          (h.sourceEvent.type !== "mousemove" &&
            h.sourceEvent.type !== "touchmove") ||
          !t
        )
          return;
        const E = [
            h.sourceEvent.clientX ?? h.sourceEvent.touches[0].clientX,
            h.sourceEvent.clientY ?? h.sourceEvent.touches[0].clientY,
          ],
          k = [E[0] - v[0], E[1] - v[1]];
        v = E;
        const _ = r() * Math.max(x[2], Math.log(x[2])) * (y ? -1 : 1),
          M = { x: x[0] - k[0] * _, y: x[1] - k[1] * _ },
          R = [
            [0, 0],
            [a, u],
          ];
        t.setViewportConstrained({ x: M.x, y: M.y, zoom: x[2] }, R, l);
      },
      g = lg()
        .on("start", w)
        .on("zoom", c ? m : null)
        .on("zoom.wheel", d ? p : null);
    o.call(g, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return { update: i, destroy: s, pointer: ht };
}
const il = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
  Kl = ({ x: e, y: t, zoom: n }) => nl.translate(e, t).scale(n),
  sr = (e, t) => e.target.closest(`.${t}`),
  Lg = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
  $E = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2,
  ql = (e, t = 0, n = $E, r = () => {}) => {
    const o = typeof t == "number" && t > 0;
    return (o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e);
  },
  zg = (e) => {
    const t = e.ctrlKey && Ho() ? 10 : 1;
    return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) * t;
  };
function FE({
  zoomPanValues: e,
  noWheelClassName: t,
  d3Selection: n,
  d3Zoom: r,
  panOnScrollMode: o,
  panOnScrollSpeed: i,
  zoomOnPinch: s,
  onPanZoomStart: l,
  onPanZoom: a,
  onPanZoomEnd: u,
}) {
  return (f) => {
    if (sr(f, t)) return (f.ctrlKey && f.preventDefault(), !1);
    (f.preventDefault(), f.stopImmediatePropagation());
    const c = n.property("__zoom").k || 1;
    if (f.ctrlKey && s) {
      const w = ht(f),
        m = zg(f),
        g = c * Math.pow(2, m);
      r.scaleTo(n, g, w, f);
      return;
    }
    const d = f.deltaMode === 1 ? 20 : 1;
    let y = o === Rn.Vertical ? 0 : f.deltaX * d,
      p = o === Rn.Horizontal ? 0 : f.deltaY * d;
    (!Ho() && f.shiftKey && o !== Rn.Vertical && ((y = f.deltaY * d), (p = 0)),
      r.translateBy(n, -(y / c) * i, -(p / c) * i, { internal: !0 }));
    const v = il(n.property("__zoom"));
    (clearTimeout(e.panScrollTimeout),
      e.isPanScrolling
        ? (a == null || a(f, v),
          (e.panScrollTimeout = setTimeout(() => {
            (u == null || u(f, v), (e.isPanScrolling = !1));
          }, 150)))
        : ((e.isPanScrolling = !0), l == null || l(f, v)));
  };
}
function HE({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function (r, o) {
    const i = r.type === "wheel",
      s = !t && i && !r.ctrlKey,
      l = sr(r, e);
    if ((r.ctrlKey && i && l && r.preventDefault(), s || l)) return null;
    (r.preventDefault(), n.call(this, r, o));
  };
}
function BE({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, l;
    if ((i = r.sourceEvent) != null && i.internal) return;
    const o = il(r.transform);
    ((e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0),
      (e.isZoomingOrPanning = !0),
      (e.prevViewport = o),
      ((l = r.sourceEvent) == null ? void 0 : l.type) === "mousedown" && t(!0),
      n && (n == null || n(r.sourceEvent, o)));
  };
}
function VE({
  zoomPanValues: e,
  panOnDrag: t,
  onPaneContextMenu: n,
  onTransformChange: r,
  onPanZoom: o,
}) {
  return (i) => {
    var s, l;
    ((e.usedRightMouseButton = !!(n && Lg(t, e.mouseButton ?? 0))),
      ((s = i.sourceEvent) != null && s.sync) ||
        r([i.transform.x, i.transform.y, i.transform.k]),
      o &&
        !((l = i.sourceEvent) != null && l.internal) &&
        (o == null || o(i.sourceEvent, il(i.transform))));
  };
}
function UE({
  zoomPanValues: e,
  panOnDrag: t,
  panOnScroll: n,
  onDraggingChange: r,
  onPanZoomEnd: o,
  onPaneContextMenu: i,
}) {
  return (s) => {
    var l;
    if (
      !((l = s.sourceEvent) != null && l.internal) &&
      ((e.isZoomingOrPanning = !1),
      i &&
        Lg(t, e.mouseButton ?? 0) &&
        !e.usedRightMouseButton &&
        s.sourceEvent &&
        i(s.sourceEvent),
      (e.usedRightMouseButton = !1),
      r(!1),
      o)
    ) {
      const a = il(s.transform);
      ((e.prevViewport = a),
        clearTimeout(e.timerId),
        (e.timerId = setTimeout(
          () => {
            o == null || o(s.sourceEvent, a);
          },
          n ? 150 : 0,
        )));
    }
  };
}
function WE({
  zoomActivationKeyPressed: e,
  zoomOnScroll: t,
  zoomOnPinch: n,
  panOnDrag: r,
  panOnScroll: o,
  zoomOnDoubleClick: i,
  userSelectionActive: s,
  noWheelClassName: l,
  noPanClassName: a,
  lib: u,
  connectionInProgress: f,
}) {
  return (c) => {
    var w;
    const d = e || t,
      y = n && c.ctrlKey,
      p = c.type === "wheel";
    if (
      c.button === 1 &&
      c.type === "mousedown" &&
      (sr(c, `${u}-flow__node`) || sr(c, `${u}-flow__edge`))
    )
      return !0;
    if (
      (!r && !d && !o && !i && !n) ||
      s ||
      (f && !p) ||
      (sr(c, l) && p) ||
      (sr(c, a) && (!p || (o && p && !e))) ||
      (!n && c.ctrlKey && p)
    )
      return !1;
    if (
      !n &&
      c.type === "touchstart" &&
      ((w = c.touches) == null ? void 0 : w.length) > 1
    )
      return (c.preventDefault(), !1);
    if (
      (!d && !o && !y && p) ||
      (!r && (c.type === "mousedown" || c.type === "touchstart")) ||
      (Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
    )
      return !1;
    const v =
      (Array.isArray(r) && r.includes(c.button)) || !c.button || c.button <= 1;
    return (!c.ctrlKey || p) && v;
  };
}
function XE({
  domNode: e,
  minZoom: t,
  maxZoom: n,
  translateExtent: r,
  viewport: o,
  onPanZoom: i,
  onPanZoomStart: s,
  onPanZoomEnd: l,
  onDraggingChange: a,
}) {
  const u = {
      isZoomingOrPanning: !1,
      usedRightMouseButton: !1,
      prevViewport: {},
      mouseButton: 0,
      timerId: void 0,
      panScrollTimeout: void 0,
      isPanScrolling: !1,
    },
    f = e.getBoundingClientRect(),
    c = lg().scaleExtent([t, n]).translateExtent(r),
    d = qe(e).call(c);
  g(
    { x: o.x, y: o.y, zoom: Cr(o.zoom, t, n) },
    [
      [0, 0],
      [f.width, f.height],
    ],
    r,
  );
  const y = d.on("wheel.zoom"),
    p = d.on("dblclick.zoom");
  c.wheelDelta(zg);
  function v(T, L) {
    return d
      ? new Promise((H) => {
          c == null ||
            c
              .interpolate(
                (L == null ? void 0 : L.interpolate) === "linear" ? mo : Yi,
              )
              .transform(
                ql(
                  d,
                  L == null ? void 0 : L.duration,
                  L == null ? void 0 : L.ease,
                  () => H(!0),
                ),
                T,
              );
        })
      : Promise.resolve(!1);
  }
  function w({
    noWheelClassName: T,
    noPanClassName: L,
    onPaneContextMenu: H,
    userSelectionActive: C,
    panOnScroll: z,
    panOnDrag: b,
    panOnScrollMode: j,
    panOnScrollSpeed: N,
    preventScrolling: P,
    zoomOnPinch: A,
    zoomOnScroll: D,
    zoomOnDoubleClick: $,
    zoomActivationKeyPressed: W,
    lib: U,
    onTransformChange: Y,
    connectionInProgress: Q,
    paneClickDistance: q,
    selectionOnDrag: V,
  }) {
    C && !u.isZoomingOrPanning && m();
    const G = z && !W && !C;
    c.clickDistance(V ? 1 / 0 : !gt(q) || q < 0 ? 0 : q);
    const ne = G
      ? FE({
          zoomPanValues: u,
          noWheelClassName: T,
          d3Selection: d,
          d3Zoom: c,
          panOnScrollMode: j,
          panOnScrollSpeed: N,
          zoomOnPinch: A,
          onPanZoomStart: s,
          onPanZoom: i,
          onPanZoomEnd: l,
        })
      : HE({ noWheelClassName: T, preventScrolling: P, d3ZoomHandler: y });
    if ((d.on("wheel.zoom", ne, { passive: !1 }), !C)) {
      const J = BE({
        zoomPanValues: u,
        onDraggingChange: a,
        onPanZoomStart: s,
      });
      c.on("start", J);
      const Z = VE({
        zoomPanValues: u,
        panOnDrag: b,
        onPaneContextMenu: !!H,
        onPanZoom: i,
        onTransformChange: Y,
      });
      c.on("zoom", Z);
      const le = UE({
        zoomPanValues: u,
        panOnDrag: b,
        panOnScroll: z,
        onPaneContextMenu: H,
        onPanZoomEnd: l,
        onDraggingChange: a,
      });
      c.on("end", le);
    }
    const te = WE({
      zoomActivationKeyPressed: W,
      panOnDrag: b,
      zoomOnScroll: D,
      panOnScroll: z,
      zoomOnDoubleClick: $,
      zoomOnPinch: A,
      userSelectionActive: C,
      noPanClassName: L,
      noWheelClassName: T,
      lib: U,
      connectionInProgress: Q,
    });
    (c.filter(te), $ ? d.on("dblclick.zoom", p) : d.on("dblclick.zoom", null));
  }
  function m() {
    c.on("zoom", null);
  }
  async function g(T, L, H) {
    const C = Kl(T),
      z = c == null ? void 0 : c.constrain()(C, L, H);
    return (z && (await v(z)), new Promise((b) => b(z)));
  }
  async function h(T, L) {
    const H = Kl(T);
    return (await v(H, L), new Promise((C) => C(H)));
  }
  function x(T) {
    if (d) {
      const L = Kl(T),
        H = d.property("__zoom");
      (H.k !== T.zoom || H.x !== T.x || H.y !== T.y) &&
        (c == null || c.transform(d, L, null, { sync: !0 }));
    }
  }
  function E() {
    const T = d ? sg(d.node()) : { x: 0, y: 0, k: 1 };
    return { x: T.x, y: T.y, zoom: T.k };
  }
  function k(T, L) {
    return d
      ? new Promise((H) => {
          c == null ||
            c
              .interpolate(
                (L == null ? void 0 : L.interpolate) === "linear" ? mo : Yi,
              )
              .scaleTo(
                ql(
                  d,
                  L == null ? void 0 : L.duration,
                  L == null ? void 0 : L.ease,
                  () => H(!0),
                ),
                T,
              );
        })
      : Promise.resolve(!1);
  }
  function _(T, L) {
    return d
      ? new Promise((H) => {
          c == null ||
            c
              .interpolate(
                (L == null ? void 0 : L.interpolate) === "linear" ? mo : Yi,
              )
              .scaleBy(
                ql(
                  d,
                  L == null ? void 0 : L.duration,
                  L == null ? void 0 : L.ease,
                  () => H(!0),
                ),
                T,
              );
        })
      : Promise.resolve(!1);
  }
  function M(T) {
    c == null || c.scaleExtent(T);
  }
  function R(T) {
    c == null || c.translateExtent(T);
  }
  function F(T) {
    const L = !gt(T) || T < 0 ? 0 : T;
    c == null || c.clickDistance(L);
  }
  return {
    update: w,
    destroy: m,
    setViewport: h,
    setViewportConstrained: g,
    getViewport: E,
    scaleTo: k,
    scaleBy: _,
    setScaleExtent: M,
    setTranslateExtent: R,
    syncViewport: x,
    setClickDistance: F,
  };
}
var br;
(function (e) {
  ((e.Line = "line"), (e.Handle = "handle"));
})(br || (br = {}));
function YE({
  width: e,
  prevWidth: t,
  height: n,
  prevHeight: r,
  affectsX: o,
  affectsY: i,
}) {
  const s = e - t,
    l = n - r,
    a = [s > 0 ? 1 : s < 0 ? -1 : 0, l > 0 ? 1 : l < 0 ? -1 : 0];
  return (s && o && (a[0] = a[0] * -1), l && i && (a[1] = a[1] * -1), a);
}
function Md(e) {
  const t = e.includes("right") || e.includes("left"),
    n = e.includes("bottom") || e.includes("top"),
    r = e.includes("left"),
    o = e.includes("top");
  return { isHorizontal: t, isVertical: n, affectsX: r, affectsY: o };
}
function Kt(e, t) {
  return Math.max(0, t - e);
}
function qt(e, t) {
  return Math.max(0, e - t);
}
function Ti(e, t, n) {
  return Math.max(0, t - e, e - n);
}
function bd(e, t) {
  return e ? !t : t;
}
function QE(e, t, n, r, o, i, s, l) {
  let { affectsX: a, affectsY: u } = t;
  const { isHorizontal: f, isVertical: c } = t,
    d = f && c,
    { xSnapped: y, ySnapped: p } = n,
    { minWidth: v, maxWidth: w, minHeight: m, maxHeight: g } = r,
    { x: h, y: x, width: E, height: k, aspectRatio: _ } = e;
  let M = Math.floor(f ? y - e.pointerX : 0),
    R = Math.floor(c ? p - e.pointerY : 0);
  const F = E + (a ? -M : M),
    T = k + (u ? -R : R),
    L = -i[0] * E,
    H = -i[1] * k;
  let C = Ti(F, v, w),
    z = Ti(T, m, g);
  if (s) {
    let N = 0,
      P = 0;
    (a && M < 0
      ? (N = Kt(h + M + L, s[0][0]))
      : !a && M > 0 && (N = qt(h + F + L, s[1][0])),
      u && R < 0
        ? (P = Kt(x + R + H, s[0][1]))
        : !u && R > 0 && (P = qt(x + T + H, s[1][1])),
      (C = Math.max(C, N)),
      (z = Math.max(z, P)));
  }
  if (l) {
    let N = 0,
      P = 0;
    (a && M > 0
      ? (N = qt(h + M, l[0][0]))
      : !a && M < 0 && (N = Kt(h + F, l[1][0])),
      u && R > 0
        ? (P = qt(x + R, l[0][1]))
        : !u && R < 0 && (P = Kt(x + T, l[1][1])),
      (C = Math.max(C, N)),
      (z = Math.max(z, P)));
  }
  if (o) {
    if (f) {
      const N = Ti(F / _, m, g) * _;
      if (((C = Math.max(C, N)), s)) {
        let P = 0;
        ((!a && !u) || (a && !u && d)
          ? (P = qt(x + H + F / _, s[1][1]) * _)
          : (P = Kt(x + H + (a ? M : -M) / _, s[0][1]) * _),
          (C = Math.max(C, P)));
      }
      if (l) {
        let P = 0;
        ((!a && !u) || (a && !u && d)
          ? (P = Kt(x + F / _, l[1][1]) * _)
          : (P = qt(x + (a ? M : -M) / _, l[0][1]) * _),
          (C = Math.max(C, P)));
      }
    }
    if (c) {
      const N = Ti(T * _, v, w) / _;
      if (((z = Math.max(z, N)), s)) {
        let P = 0;
        ((!a && !u) || (u && !a && d)
          ? (P = qt(h + T * _ + L, s[1][0]) / _)
          : (P = Kt(h + (u ? R : -R) * _ + L, s[0][0]) / _),
          (z = Math.max(z, P)));
      }
      if (l) {
        let P = 0;
        ((!a && !u) || (u && !a && d)
          ? (P = Kt(h + T * _, l[1][0]) / _)
          : (P = qt(h + (u ? R : -R) * _, l[0][0]) / _),
          (z = Math.max(z, P)));
      }
    }
  }
  ((R = R + (R < 0 ? z : -z)),
    (M = M + (M < 0 ? C : -C)),
    o &&
      (d
        ? F > T * _
          ? (R = (bd(a, u) ? -M : M) / _)
          : (M = (bd(a, u) ? -R : R) * _)
        : f
          ? ((R = M / _), (u = a))
          : ((M = R * _), (a = u))));
  const b = a ? h + M : h,
    j = u ? x + R : x;
  return {
    width: E + (a ? -M : M),
    height: k + (u ? -R : R),
    x: i[0] * M * (a ? -1 : 1) + b,
    y: i[1] * R * (u ? -1 : 1) + j,
  };
}
const jg = { width: 0, height: 0, x: 0, y: 0 },
  KE = { ...jg, pointerX: 0, pointerY: 0, aspectRatio: 1 };
function qE(e) {
  return [
    [0, 0],
    [e.measured.width, e.measured.height],
  ];
}
function GE(e, t, n) {
  const r = t.position.x + e.position.x,
    o = t.position.y + e.position.y,
    i = e.measured.width ?? 0,
    s = e.measured.height ?? 0,
    l = n[0] * i,
    a = n[1] * s;
  return [
    [r - l, o - a],
    [r + i - l, o + s - a],
  ];
}
function ZE({
  domNode: e,
  nodeId: t,
  getStoreItems: n,
  onChange: r,
  onEnd: o,
}) {
  const i = qe(e);
  let s = {
    controlDirection: Md("bottom-right"),
    boundaries: {
      minWidth: 0,
      minHeight: 0,
      maxWidth: Number.MAX_VALUE,
      maxHeight: Number.MAX_VALUE,
    },
    resizeDirection: void 0,
    keepAspectRatio: !1,
  };
  function l({
    controlPosition: u,
    boundaries: f,
    keepAspectRatio: c,
    resizeDirection: d,
    onResizeStart: y,
    onResize: p,
    onResizeEnd: v,
    shouldResize: w,
  }) {
    let m = { ...jg },
      g = { ...KE };
    s = {
      boundaries: f,
      resizeDirection: d,
      keepAspectRatio: c,
      controlDirection: Md(u),
    };
    let h,
      x = null,
      E = [],
      k,
      _,
      M,
      R = !1;
    const F = Xm()
      .on("start", (T) => {
        const {
          nodeLookup: L,
          transform: H,
          snapGrid: C,
          snapToGrid: z,
          nodeOrigin: b,
          paneDomNode: j,
        } = n();
        if (((h = L.get(t)), !h)) return;
        x = (j == null ? void 0 : j.getBoundingClientRect()) ?? null;
        const { xSnapped: N, ySnapped: P } = go(T.sourceEvent, {
          transform: H,
          snapGrid: C,
          snapToGrid: z,
          containerBounds: x,
        });
        ((m = {
          width: h.measured.width ?? 0,
          height: h.measured.height ?? 0,
          x: h.position.x ?? 0,
          y: h.position.y ?? 0,
        }),
          (g = {
            ...m,
            pointerX: N,
            pointerY: P,
            aspectRatio: m.width / m.height,
          }),
          (k = void 0),
          h.parentId &&
            (h.extent === "parent" || h.expandParent) &&
            ((k = L.get(h.parentId)),
            (_ = k && h.extent === "parent" ? qE(k) : void 0)),
          (E = []),
          (M = void 0));
        for (const [A, D] of L)
          if (
            D.parentId === t &&
            (E.push({ id: A, position: { ...D.position }, extent: D.extent }),
            D.extent === "parent" || D.expandParent)
          ) {
            const $ = GE(D, h, D.origin ?? b);
            M
              ? (M = [
                  [Math.min($[0][0], M[0][0]), Math.min($[0][1], M[0][1])],
                  [Math.max($[1][0], M[1][0]), Math.max($[1][1], M[1][1])],
                ])
              : (M = $);
          }
        y == null || y(T, { ...m });
      })
      .on("drag", (T) => {
        const { transform: L, snapGrid: H, snapToGrid: C, nodeOrigin: z } = n(),
          b = go(T.sourceEvent, {
            transform: L,
            snapGrid: H,
            snapToGrid: C,
            containerBounds: x,
          }),
          j = [];
        if (!h) return;
        const { x: N, y: P, width: A, height: D } = m,
          $ = {},
          W = h.origin ?? z,
          {
            width: U,
            height: Y,
            x: Q,
            y: q,
          } = QE(
            g,
            s.controlDirection,
            b,
            s.boundaries,
            s.keepAspectRatio,
            W,
            _,
            M,
          ),
          V = U !== A,
          G = Y !== D,
          ne = Q !== N && V,
          te = q !== P && G;
        if (!ne && !te && !V && !G) return;
        if (
          (ne || te || W[0] === 1 || W[1] === 1) &&
          (($.x = ne ? Q : m.x),
          ($.y = te ? q : m.y),
          (m.x = $.x),
          (m.y = $.y),
          E.length > 0)
        ) {
          const ce = Q - N,
            se = q - P;
          for (const Re of E)
            ((Re.position = {
              x: Re.position.x - ce + W[0] * (U - A),
              y: Re.position.y - se + W[1] * (Y - D),
            }),
              j.push(Re));
        }
        if (
          ((V || G) &&
            (($.width =
              V && (!s.resizeDirection || s.resizeDirection === "horizontal")
                ? U
                : m.width),
            ($.height =
              G && (!s.resizeDirection || s.resizeDirection === "vertical")
                ? Y
                : m.height),
            (m.width = $.width),
            (m.height = $.height)),
          k && h.expandParent)
        ) {
          const ce = W[0] * ($.width ?? 0);
          $.x && $.x < ce && ((m.x = ce), (g.x = g.x - ($.x - ce)));
          const se = W[1] * ($.height ?? 0);
          $.y && $.y < se && ((m.y = se), (g.y = g.y - ($.y - se)));
        }
        const J = YE({
            width: m.width,
            prevWidth: A,
            height: m.height,
            prevHeight: D,
            affectsX: s.controlDirection.affectsX,
            affectsY: s.controlDirection.affectsY,
          }),
          Z = { ...m, direction: J };
        (w == null ? void 0 : w(T, Z)) !== !1 &&
          ((R = !0), p == null || p(T, Z), r($, j));
      })
      .on("end", (T) => {
        R && (v == null || v(T, { ...m }), o == null || o({ ...m }), (R = !1));
      });
    i.call(F);
  }
  function a() {
    i.on(".drag", null);
  }
  return { update: l, destroy: a };
}
var Og = { exports: {} },
  Dg = {},
  $g = { exports: {} },
  Fg = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tr = I;
function JE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ek = typeof Object.is == "function" ? Object.is : JE,
  tk = Tr.useState,
  nk = Tr.useEffect,
  rk = Tr.useLayoutEffect,
  ok = Tr.useDebugValue;
function ik(e, t) {
  var n = t(),
    r = tk({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    rk(
      function () {
        ((o.value = n), (o.getSnapshot = t), Gl(o) && i({ inst: o }));
      },
      [e, n, t],
    ),
    nk(
      function () {
        return (
          Gl(o) && i({ inst: o }),
          e(function () {
            Gl(o) && i({ inst: o });
          })
        );
      },
      [e],
    ),
    ok(n),
    n
  );
}
function Gl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ek(e, n);
  } catch {
    return !0;
  }
}
function sk(e, t) {
  return t();
}
var lk =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? sk
    : ik;
Fg.useSyncExternalStore =
  Tr.useSyncExternalStore !== void 0 ? Tr.useSyncExternalStore : lk;
$g.exports = Fg;
var ak = $g.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sl = I,
  uk = ak;
function ck(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var fk = typeof Object.is == "function" ? Object.is : ck,
  dk = uk.useSyncExternalStore,
  hk = sl.useRef,
  pk = sl.useEffect,
  mk = sl.useMemo,
  gk = sl.useDebugValue;
Dg.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = hk(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = mk(
    function () {
      function a(y) {
        if (!u) {
          if (((u = !0), (f = y), (y = r(y)), o !== void 0 && s.hasValue)) {
            var p = s.value;
            if (o(p, y)) return (c = p);
          }
          return (c = y);
        }
        if (((p = c), fk(f, y))) return p;
        var v = r(y);
        return o !== void 0 && o(p, v) ? ((f = y), p) : ((f = y), (c = v));
      }
      var u = !1,
        f,
        c,
        d = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        d === null
          ? void 0
          : function () {
              return a(d());
            },
      ];
    },
    [t, n, r, o],
  );
  var l = dk(e, i[0], i[1]);
  return (
    pk(
      function () {
        ((s.hasValue = !0), (s.value = l));
      },
      [l],
    ),
    gk(l),
    l
  );
};
Og.exports = Dg;
var yk = Og.exports;
const vk = vh(yk),
  xk = {},
  Td = (e) => {
    let t;
    const n = new Set(),
      r = (f, c) => {
        const d = typeof f == "function" ? f(t) : f;
        if (!Object.is(d, t)) {
          const y = t;
          ((t =
            (c ?? (typeof d != "object" || d === null))
              ? d
              : Object.assign({}, t, d)),
            n.forEach((p) => p(t, y)));
        }
      },
      o = () => t,
      a = {
        setState: r,
        getState: o,
        getInitialState: () => u,
        subscribe: (f) => (n.add(f), () => n.delete(f)),
        destroy: () => {
          ((xk ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
            ),
            n.clear());
        },
      },
      u = (t = e(r, o, a));
    return a;
  },
  wk = (e) => (e ? Td(e) : Td),
  { useDebugValue: Sk } = bh,
  { useSyncExternalStoreWithSelector: Ek } = vk,
  kk = (e) => e;
function Hg(e, t = kk, n) {
  const r = Ek(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n,
  );
  return (Sk(r), r);
}
const Rd = (e, t) => {
    const n = wk(e),
      r = (o, i = t) => Hg(n, o, i);
    return (Object.assign(r, n), r);
  },
  _k = (e, t) => (e ? Rd(e, t) : Rd);
function pe(e, t) {
  if (Object.is(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e) if (!Object.is(o, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r]))
      return !1;
  return !0;
}
const ll = I.createContext(null),
  Nk = ll.Provider,
  Bg = Tt.error001();
function oe(e, t) {
  const n = I.useContext(ll);
  if (n === null) throw new Error(Bg);
  return Hg(n, e, t);
}
function me() {
  const e = I.useContext(ll);
  if (e === null) throw new Error(Bg);
  return I.useMemo(
    () => ({
      getState: e.getState,
      setState: e.setState,
      subscribe: e.subscribe,
    }),
    [e],
  );
}
const Ad = { display: "none" },
  Ck = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0px, 0px, 0px, 0px)",
    clipPath: "inset(100%)",
  },
  Vg = "react-flow__node-desc",
  Ug = "react-flow__edge-desc",
  Pk = "react-flow__aria-live",
  Mk = (e) => e.ariaLiveMessage,
  bk = (e) => e.ariaLabelConfig;
function Tk({ rfId: e }) {
  const t = oe(Mk);
  return S.jsx("div", {
    id: `${Pk}-${e}`,
    "aria-live": "assertive",
    "aria-atomic": "true",
    style: Ck,
    children: t,
  });
}
function Rk({ rfId: e, disableKeyboardA11y: t }) {
  const n = oe(bk);
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx("div", {
        id: `${Vg}-${e}`,
        style: Ad,
        children: t
          ? n["node.a11yDescription.default"]
          : n["node.a11yDescription.keyboardDisabled"],
      }),
      S.jsx("div", {
        id: `${Ug}-${e}`,
        style: Ad,
        children: n["edge.a11yDescription.default"],
      }),
      !t && S.jsx(Tk, { rfId: e }),
    ],
  });
}
const al = I.forwardRef(
  (
    { position: e = "top-left", children: t, className: n, style: r, ...o },
    i,
  ) => {
    const s = `${e}`.split("-");
    return S.jsx("div", {
      className: ke(["react-flow__panel", n, ...s]),
      style: r,
      ref: i,
      ...o,
      children: t,
    });
  },
);
al.displayName = "Panel";
function Ak({ proOptions: e, position: t = "bottom-right" }) {
  return e != null && e.hideAttribution
    ? null
    : S.jsx(al, {
        position: t,
        className: "react-flow__attribution",
        "data-message":
          "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",
        children: S.jsx("a", {
          href: "https://reactflow.dev",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "React Flow attribution",
          children: "React Flow",
        }),
      });
}
const Ik = (e) => {
    const t = [],
      n = [];
    for (const [, r] of e.nodeLookup)
      r.selected && t.push(r.internals.userNode);
    for (const [, r] of e.edgeLookup) r.selected && n.push(r);
    return { selectedNodes: t, selectedEdges: n };
  },
  Ri = (e) => e.id;
function Lk(e, t) {
  return (
    pe(e.selectedNodes.map(Ri), t.selectedNodes.map(Ri)) &&
    pe(e.selectedEdges.map(Ri), t.selectedEdges.map(Ri))
  );
}
function zk({ onSelectionChange: e }) {
  const t = me(),
    { selectedNodes: n, selectedEdges: r } = oe(Ik, Lk);
  return (
    I.useEffect(() => {
      const o = { nodes: n, edges: r };
      (e == null || e(o),
        t.getState().onSelectionChangeHandlers.forEach((i) => i(o)));
    }, [n, r, e]),
    null
  );
}
const jk = (e) => !!e.onSelectionChangeHandlers;
function Ok({ onSelectionChange: e }) {
  const t = oe(jk);
  return e || t ? S.jsx(zk, { onSelectionChange: e }) : null;
}
const Wg = [0, 0],
  Dk = { x: 0, y: 0, zoom: 1 },
  $k = [
    "nodes",
    "edges",
    "defaultNodes",
    "defaultEdges",
    "onConnect",
    "onConnectStart",
    "onConnectEnd",
    "onClickConnectStart",
    "onClickConnectEnd",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "nodesFocusable",
    "edgesFocusable",
    "edgesReconnectable",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "minZoom",
    "maxZoom",
    "nodeExtent",
    "onNodesChange",
    "onEdgesChange",
    "elementsSelectable",
    "connectionMode",
    "snapGrid",
    "snapToGrid",
    "translateExtent",
    "connectOnClick",
    "defaultEdgeOptions",
    "fitView",
    "fitViewOptions",
    "onNodesDelete",
    "onEdgesDelete",
    "onDelete",
    "onNodeDrag",
    "onNodeDragStart",
    "onNodeDragStop",
    "onSelectionDrag",
    "onSelectionDragStart",
    "onSelectionDragStop",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "noPanClassName",
    "nodeOrigin",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onError",
    "connectionRadius",
    "isValidConnection",
    "selectNodesOnDrag",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "onBeforeDelete",
    "debug",
    "autoPanSpeed",
    "ariaLabelConfig",
    "zIndexMode",
  ],
  Id = [...$k, "rfId"],
  Fk = (e) => ({
    setNodes: e.setNodes,
    setEdges: e.setEdges,
    setMinZoom: e.setMinZoom,
    setMaxZoom: e.setMaxZoom,
    setTranslateExtent: e.setTranslateExtent,
    setNodeExtent: e.setNodeExtent,
    reset: e.reset,
    setDefaultNodesAndEdges: e.setDefaultNodesAndEdges,
  }),
  Ld = {
    translateExtent: Do,
    nodeOrigin: Wg,
    minZoom: 0.5,
    maxZoom: 2,
    elementsSelectable: !0,
    noPanClassName: "nopan",
    rfId: "1",
  };
function Hk(e) {
  const {
      setNodes: t,
      setEdges: n,
      setMinZoom: r,
      setMaxZoom: o,
      setTranslateExtent: i,
      setNodeExtent: s,
      reset: l,
      setDefaultNodesAndEdges: a,
    } = oe(Fk, pe),
    u = me();
  I.useEffect(
    () => (
      a(e.defaultNodes, e.defaultEdges),
      () => {
        ((f.current = Ld), l());
      }
    ),
    [],
  );
  const f = I.useRef(Ld);
  return (
    I.useEffect(
      () => {
        for (const c of Id) {
          const d = e[c],
            y = f.current[c];
          d !== y &&
            (typeof e[c] > "u" ||
              (c === "nodes"
                ? t(d)
                : c === "edges"
                  ? n(d)
                  : c === "minZoom"
                    ? r(d)
                    : c === "maxZoom"
                      ? o(d)
                      : c === "translateExtent"
                        ? i(d)
                        : c === "nodeExtent"
                          ? s(d)
                          : c === "ariaLabelConfig"
                            ? u.setState({ ariaLabelConfig: fE(d) })
                            : c === "fitView"
                              ? u.setState({ fitViewQueued: d })
                              : c === "fitViewOptions"
                                ? u.setState({ fitViewOptions: d })
                                : u.setState({ [c]: d })));
        }
        f.current = e;
      },
      Id.map((c) => e[c]),
    ),
    null
  );
}
function zd() {
  return typeof window > "u" || !window.matchMedia
    ? null
    : window.matchMedia("(prefers-color-scheme: dark)");
}
function Bk(e) {
  var r;
  const [t, n] = I.useState(e === "system" ? null : e);
  return (
    I.useEffect(() => {
      if (e !== "system") {
        n(e);
        return;
      }
      const o = zd(),
        i = () => n(o != null && o.matches ? "dark" : "light");
      return (
        i(),
        o == null || o.addEventListener("change", i),
        () => {
          o == null || o.removeEventListener("change", i);
        }
      );
    }, [e]),
    t !== null ? t : (r = zd()) != null && r.matches ? "dark" : "light"
  );
}
const jd = typeof document < "u" ? document : null;
function Bo(e = null, t = { target: jd, actInsideInputWithModifier: !0 }) {
  const [n, r] = I.useState(!1),
    o = I.useRef(!1),
    i = I.useRef(new Set([])),
    [s, l] = I.useMemo(() => {
      if (e !== null) {
        const u = (Array.isArray(e) ? e : [e])
            .filter((c) => typeof c == "string")
            .map((c) =>
              c
                .replace(
                  "+",
                  `
`,
                )
                .replace(
                  `

`,
                  `
+`,
                ).split(`
`),
            ),
          f = u.reduce((c, d) => c.concat(...d), []);
        return [u, f];
      }
      return [[], []];
    }, [e]);
  return (
    I.useEffect(() => {
      const a = (t == null ? void 0 : t.target) ?? jd,
        u = (t == null ? void 0 : t.actInsideInputWithModifier) ?? !0;
      if (e !== null) {
        const f = (y) => {
            var w, m;
            if (
              ((o.current = y.ctrlKey || y.metaKey || y.shiftKey || y.altKey),
              (!o.current || (o.current && !u)) && wg(y))
            )
              return !1;
            const v = Dd(y.code, l);
            if ((i.current.add(y[v]), Od(s, i.current, !1))) {
              const g =
                  ((m = (w = y.composedPath) == null ? void 0 : w.call(y)) ==
                  null
                    ? void 0
                    : m[0]) || y.target,
                h =
                  (g == null ? void 0 : g.nodeName) === "BUTTON" ||
                  (g == null ? void 0 : g.nodeName) === "A";
              (t.preventDefault !== !1 &&
                (o.current || !h) &&
                y.preventDefault(),
                r(!0));
            }
          },
          c = (y) => {
            const p = Dd(y.code, l);
            (Od(s, i.current, !0)
              ? (r(!1), i.current.clear())
              : i.current.delete(y[p]),
              y.key === "Meta" && i.current.clear(),
              (o.current = !1));
          },
          d = () => {
            (i.current.clear(), r(!1));
          };
        return (
          a == null || a.addEventListener("keydown", f),
          a == null || a.addEventListener("keyup", c),
          window.addEventListener("blur", d),
          window.addEventListener("contextmenu", d),
          () => {
            (a == null || a.removeEventListener("keydown", f),
              a == null || a.removeEventListener("keyup", c),
              window.removeEventListener("blur", d),
              window.removeEventListener("contextmenu", d));
          }
        );
      }
    }, [e, r]),
    n
  );
}
function Od(e, t, n) {
  return e
    .filter((r) => n || r.length === t.size)
    .some((r) => r.every((o) => t.has(o)));
}
function Dd(e, t) {
  return t.includes(e) ? "code" : "key";
}
const Vk = () => {
  const e = me();
  return I.useMemo(
    () => ({
      zoomIn: (t) => {
        const { panZoom: n } = e.getState();
        return n
          ? n.scaleBy(1.2, { duration: t == null ? void 0 : t.duration })
          : Promise.resolve(!1);
      },
      zoomOut: (t) => {
        const { panZoom: n } = e.getState();
        return n
          ? n.scaleBy(1 / 1.2, { duration: t == null ? void 0 : t.duration })
          : Promise.resolve(!1);
      },
      zoomTo: (t, n) => {
        const { panZoom: r } = e.getState();
        return r
          ? r.scaleTo(t, { duration: n == null ? void 0 : n.duration })
          : Promise.resolve(!1);
      },
      getZoom: () => e.getState().transform[2],
      setViewport: async (t, n) => {
        const {
          transform: [r, o, i],
          panZoom: s,
        } = e.getState();
        return s
          ? (await s.setViewport(
              { x: t.x ?? r, y: t.y ?? o, zoom: t.zoom ?? i },
              n,
            ),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      },
      getViewport: () => {
        const [t, n, r] = e.getState().transform;
        return { x: t, y: n, zoom: r };
      },
      setCenter: async (t, n, r) => e.getState().setCenter(t, n, r),
      fitBounds: async (t, n) => {
        const {
            width: r,
            height: o,
            minZoom: i,
            maxZoom: s,
            panZoom: l,
          } = e.getState(),
          a = vc(t, r, o, i, s, (n == null ? void 0 : n.padding) ?? 0.1);
        return l
          ? (await l.setViewport(a, {
              duration: n == null ? void 0 : n.duration,
              ease: n == null ? void 0 : n.ease,
              interpolate: n == null ? void 0 : n.interpolate,
            }),
            Promise.resolve(!0))
          : Promise.resolve(!1);
      },
      screenToFlowPosition: (t, n = {}) => {
        const {
          transform: r,
          snapGrid: o,
          snapToGrid: i,
          domNode: s,
        } = e.getState();
        if (!s) return t;
        const { x: l, y: a } = s.getBoundingClientRect(),
          u = { x: t.x - l, y: t.y - a },
          f = n.snapGrid ?? o,
          c = n.snapToGrid ?? i;
        return Jo(u, r, c, f);
      },
      flowToScreenPosition: (t) => {
        const { transform: n, domNode: r } = e.getState();
        if (!r) return t;
        const { x: o, y: i } = r.getBoundingClientRect(),
          s = Is(t, n);
        return { x: s.x + o, y: s.y + i };
      },
    }),
    [],
  );
};
function Xg(e, t) {
  const n = [],
    r = new Map(),
    o = [];
  for (const i of e)
    if (i.type === "add") {
      o.push(i);
      continue;
    } else if (i.type === "remove" || i.type === "replace") r.set(i.id, [i]);
    else {
      const s = r.get(i.id);
      s ? s.push(i) : r.set(i.id, [i]);
    }
  for (const i of t) {
    const s = r.get(i.id);
    if (!s) {
      n.push(i);
      continue;
    }
    if (s[0].type === "remove") continue;
    if (s[0].type === "replace") {
      n.push({ ...s[0].item });
      continue;
    }
    const l = { ...i };
    for (const a of s) Uk(a, l);
    n.push(l);
  }
  return (
    o.length &&
      o.forEach((i) => {
        i.index !== void 0
          ? n.splice(i.index, 0, { ...i.item })
          : n.push({ ...i.item });
      }),
    n
  );
}
function Uk(e, t) {
  switch (e.type) {
    case "select": {
      t.selected = e.selected;
      break;
    }
    case "position": {
      (typeof e.position < "u" && (t.position = e.position),
        typeof e.dragging < "u" && (t.dragging = e.dragging));
      break;
    }
    case "dimensions": {
      (typeof e.dimensions < "u" &&
        ((t.measured = { ...e.dimensions }),
        e.setAttributes &&
          ((e.setAttributes === !0 || e.setAttributes === "width") &&
            (t.width = e.dimensions.width),
          (e.setAttributes === !0 || e.setAttributes === "height") &&
            (t.height = e.dimensions.height))),
        typeof e.resizing == "boolean" && (t.resizing = e.resizing));
      break;
    }
  }
}
function Yg(e, t) {
  return Xg(e, t);
}
function Qg(e, t) {
  return Xg(e, t);
}
function En(e, t) {
  return { id: e, type: "select", selected: t };
}
function lr(e, t = new Set(), n = !1) {
  const r = [];
  for (const [o, i] of e) {
    const s = t.has(o);
    !(i.selected === void 0 && !s) &&
      i.selected !== s &&
      (n && (i.selected = s), r.push(En(i.id, s)));
  }
  return r;
}
function $d({ items: e = [], lookup: t }) {
  var o;
  const n = [],
    r = new Map(e.map((i) => [i.id, i]));
  for (const [i, s] of e.entries()) {
    const l = t.get(s.id),
      a =
        ((o = l == null ? void 0 : l.internals) == null
          ? void 0
          : o.userNode) ?? l;
    (a !== void 0 && a !== s && n.push({ id: s.id, item: s, type: "replace" }),
      a === void 0 && n.push({ item: s, type: "add", index: i }));
  }
  for (const [i] of t) r.get(i) === void 0 && n.push({ id: i, type: "remove" });
  return n;
}
function Fd(e) {
  return { id: e.id, type: "remove" };
}
const Hd = (e) => tE(e),
  Wk = (e) => dg(e);
function Kg(e) {
  return I.forwardRef(e);
}
const Xk = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
function Bd(e) {
  const [t, n] = I.useState(BigInt(0)),
    [r] = I.useState(() => Yk(() => n((o) => o + BigInt(1))));
  return (
    Xk(() => {
      const o = r.get();
      o.length && (e(o), r.reset());
    }, [t]),
    r
  );
}
function Yk(e) {
  let t = [];
  return {
    get: () => t,
    reset: () => {
      t = [];
    },
    push: (n) => {
      (t.push(n), e());
    },
  };
}
const qg = I.createContext(null);
function Qk({ children: e }) {
  const t = me(),
    n = I.useCallback((l) => {
      const {
        nodes: a = [],
        setNodes: u,
        hasDefaultNodes: f,
        onNodesChange: c,
        nodeLookup: d,
        fitViewQueued: y,
        onNodesChangeMiddlewareMap: p,
      } = t.getState();
      let v = a;
      for (const m of l) v = typeof m == "function" ? m(v) : m;
      let w = $d({ items: v, lookup: d });
      for (const m of p.values()) w = m(w);
      (f && u(v),
        w.length > 0
          ? c == null || c(w)
          : y &&
            window.requestAnimationFrame(() => {
              const { fitViewQueued: m, nodes: g, setNodes: h } = t.getState();
              m && h(g);
            }));
    }, []),
    r = Bd(n),
    o = I.useCallback((l) => {
      const {
        edges: a = [],
        setEdges: u,
        hasDefaultEdges: f,
        onEdgesChange: c,
        edgeLookup: d,
      } = t.getState();
      let y = a;
      for (const p of l) y = typeof p == "function" ? p(y) : p;
      f ? u(y) : c && c($d({ items: y, lookup: d }));
    }, []),
    i = Bd(o),
    s = I.useMemo(() => ({ nodeQueue: r, edgeQueue: i }), []);
  return S.jsx(qg.Provider, { value: s, children: e });
}
function Kk() {
  const e = I.useContext(qg);
  if (!e)
    throw new Error("useBatchContext must be used within a BatchProvider");
  return e;
}
const qk = (e) => !!e.panZoom;
function Cc() {
  const e = Vk(),
    t = me(),
    n = Kk(),
    r = oe(qk),
    o = I.useMemo(() => {
      const i = (c) => t.getState().nodeLookup.get(c),
        s = (c) => {
          n.nodeQueue.push(c);
        },
        l = (c) => {
          n.edgeQueue.push(c);
        },
        a = (c) => {
          var m, g;
          const { nodeLookup: d, nodeOrigin: y } = t.getState(),
            p = Hd(c) ? c : d.get(c.id),
            v = p.parentId
              ? vg(p.position, p.measured, p.parentId, d, y)
              : p.position,
            w = {
              ...p,
              position: v,
              width: ((m = p.measured) == null ? void 0 : m.width) ?? p.width,
              height:
                ((g = p.measured) == null ? void 0 : g.height) ?? p.height,
            };
          return Pr(w);
        },
        u = (c, d, y = { replace: !1 }) => {
          s((p) =>
            p.map((v) => {
              if (v.id === c) {
                const w = typeof d == "function" ? d(v) : d;
                return y.replace && Hd(w) ? w : { ...v, ...w };
              }
              return v;
            }),
          );
        },
        f = (c, d, y = { replace: !1 }) => {
          l((p) =>
            p.map((v) => {
              if (v.id === c) {
                const w = typeof d == "function" ? d(v) : d;
                return y.replace && Wk(w) ? w : { ...v, ...w };
              }
              return v;
            }),
          );
        };
      return {
        getNodes: () => t.getState().nodes.map((c) => ({ ...c })),
        getNode: (c) => {
          var d;
          return (d = i(c)) == null ? void 0 : d.internals.userNode;
        },
        getInternalNode: i,
        getEdges: () => {
          const { edges: c = [] } = t.getState();
          return c.map((d) => ({ ...d }));
        },
        getEdge: (c) => t.getState().edgeLookup.get(c),
        setNodes: s,
        setEdges: l,
        addNodes: (c) => {
          const d = Array.isArray(c) ? c : [c];
          n.nodeQueue.push((y) => [...y, ...d]);
        },
        addEdges: (c) => {
          const d = Array.isArray(c) ? c : [c];
          n.edgeQueue.push((y) => [...y, ...d]);
        },
        toObject: () => {
          const { nodes: c = [], edges: d = [], transform: y } = t.getState(),
            [p, v, w] = y;
          return {
            nodes: c.map((m) => ({ ...m })),
            edges: d.map((m) => ({ ...m })),
            viewport: { x: p, y: v, zoom: w },
          };
        },
        deleteElements: async ({ nodes: c = [], edges: d = [] }) => {
          const {
              nodes: y,
              edges: p,
              onNodesDelete: v,
              onEdgesDelete: w,
              triggerNodeChanges: m,
              triggerEdgeChanges: g,
              onDelete: h,
              onBeforeDelete: x,
            } = t.getState(),
            { nodes: E, edges: k } = await sE({
              nodesToRemove: c,
              edgesToRemove: d,
              nodes: y,
              edges: p,
              onBeforeDelete: x,
            }),
            _ = k.length > 0,
            M = E.length > 0;
          if (_) {
            const R = k.map(Fd);
            (w == null || w(k), g(R));
          }
          if (M) {
            const R = E.map(Fd);
            (v == null || v(E), m(R));
          }
          return (
            (M || _) && (h == null || h({ nodes: E, edges: k })),
            { deletedNodes: E, deletedEdges: k }
          );
        },
        getIntersectingNodes: (c, d = !0, y) => {
          const p = yd(c),
            v = p ? c : a(c),
            w = y !== void 0;
          return v
            ? (y || t.getState().nodes).filter((m) => {
                const g = t.getState().nodeLookup.get(m.id);
                if (g && !p && (m.id === c.id || !g.internals.positionAbsolute))
                  return !1;
                const h = Pr(w ? m : g),
                  x = Fo(h, v);
                return (
                  (d && x > 0) ||
                  x >= h.width * h.height ||
                  x >= v.width * v.height
                );
              })
            : [];
        },
        isNodeIntersecting: (c, d, y = !0) => {
          const v = yd(c) ? c : a(c);
          if (!v) return !1;
          const w = Fo(v, d);
          return (
            (y && w > 0) || w >= d.width * d.height || w >= v.width * v.height
          );
        },
        updateNode: u,
        updateNodeData: (c, d, y = { replace: !1 }) => {
          u(
            c,
            (p) => {
              const v = typeof d == "function" ? d(p) : d;
              return y.replace
                ? { ...p, data: v }
                : { ...p, data: { ...p.data, ...v } };
            },
            y,
          );
        },
        updateEdge: f,
        updateEdgeData: (c, d, y = { replace: !1 }) => {
          f(
            c,
            (p) => {
              const v = typeof d == "function" ? d(p) : d;
              return y.replace
                ? { ...p, data: v }
                : { ...p, data: { ...p.data, ...v } };
            },
            y,
          );
        },
        getNodesBounds: (c) => {
          const { nodeLookup: d, nodeOrigin: y } = t.getState();
          return nE(c, { nodeLookup: d, nodeOrigin: y });
        },
        getHandleConnections: ({ type: c, id: d, nodeId: y }) => {
          var p;
          return Array.from(
            ((p = t
              .getState()
              .connectionLookup.get(`${y}-${c}${d ? `-${d}` : ""}`)) == null
              ? void 0
              : p.values()) ?? [],
          );
        },
        getNodeConnections: ({ type: c, handleId: d, nodeId: y }) => {
          var p;
          return Array.from(
            ((p = t
              .getState()
              .connectionLookup.get(
                `${y}${c ? (d ? `-${c}-${d}` : `-${c}`) : ""}`,
              )) == null
              ? void 0
              : p.values()) ?? [],
          );
        },
        fitView: async (c) => {
          const d = t.getState().fitViewResolver ?? cE();
          return (
            t.setState({
              fitViewQueued: !0,
              fitViewOptions: c,
              fitViewResolver: d,
            }),
            n.nodeQueue.push((y) => [...y]),
            d.promise
          );
        },
      };
    }, []);
  return I.useMemo(() => ({ ...o, ...e, viewportInitialized: r }), [r]);
}
const Vd = (e) => e.selected,
  Gk = typeof window < "u" ? window : void 0;
function Zk({ deleteKeyCode: e, multiSelectionKeyCode: t }) {
  const n = me(),
    { deleteElements: r } = Cc(),
    o = Bo(e, { actInsideInputWithModifier: !1 }),
    i = Bo(t, { target: Gk });
  (I.useEffect(() => {
    if (o) {
      const { edges: s, nodes: l } = n.getState();
      (r({ nodes: l.filter(Vd), edges: s.filter(Vd) }),
        n.setState({ nodesSelectionActive: !1 }));
    }
  }, [o]),
    I.useEffect(() => {
      n.setState({ multiSelectionActive: i });
    }, [i]));
}
function Jk(e) {
  const t = me();
  I.useEffect(() => {
    const n = () => {
      var o, i, s, l;
      if (
        !e.current ||
        !(
          ((i = (o = e.current).checkVisibility) == null
            ? void 0
            : i.call(o)) ?? !0
        )
      )
        return !1;
      const r = xc(e.current);
      ((r.height === 0 || r.width === 0) &&
        ((l = (s = t.getState()).onError) == null ||
          l.call(s, "004", Tt.error004())),
        t.setState({ width: r.width || 500, height: r.height || 500 }));
    };
    if (e.current) {
      (n(), window.addEventListener("resize", n));
      const r = new ResizeObserver(() => n());
      return (
        r.observe(e.current),
        () => {
          (window.removeEventListener("resize", n),
            r && e.current && r.unobserve(e.current));
        }
      );
    }
  }, []);
}
const ul = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  e_ = (e) => ({
    userSelectionActive: e.userSelectionActive,
    lib: e.lib,
    connectionInProgress: e.connection.inProgress,
  });
function t_({
  onPaneContextMenu: e,
  zoomOnScroll: t = !0,
  zoomOnPinch: n = !0,
  panOnScroll: r = !1,
  panOnScrollSpeed: o = 0.5,
  panOnScrollMode: i = Rn.Free,
  zoomOnDoubleClick: s = !0,
  panOnDrag: l = !0,
  defaultViewport: a,
  translateExtent: u,
  minZoom: f,
  maxZoom: c,
  zoomActivationKeyCode: d,
  preventScrolling: y = !0,
  children: p,
  noWheelClassName: v,
  noPanClassName: w,
  onViewportChange: m,
  isControlledViewport: g,
  paneClickDistance: h,
  selectionOnDrag: x,
}) {
  const E = me(),
    k = I.useRef(null),
    { userSelectionActive: _, lib: M, connectionInProgress: R } = oe(e_, pe),
    F = Bo(d),
    T = I.useRef();
  Jk(k);
  const L = I.useCallback(
    (H) => {
      (m == null || m({ x: H[0], y: H[1], zoom: H[2] }),
        g || E.setState({ transform: H }));
    },
    [m, g],
  );
  return (
    I.useEffect(() => {
      if (k.current) {
        T.current = XE({
          domNode: k.current,
          minZoom: f,
          maxZoom: c,
          translateExtent: u,
          viewport: a,
          onDraggingChange: (b) =>
            E.setState((j) => (j.paneDragging === b ? j : { paneDragging: b })),
          onPanZoomStart: (b, j) => {
            const { onViewportChangeStart: N, onMoveStart: P } = E.getState();
            (P == null || P(b, j), N == null || N(j));
          },
          onPanZoom: (b, j) => {
            const { onViewportChange: N, onMove: P } = E.getState();
            (P == null || P(b, j), N == null || N(j));
          },
          onPanZoomEnd: (b, j) => {
            const { onViewportChangeEnd: N, onMoveEnd: P } = E.getState();
            (P == null || P(b, j), N == null || N(j));
          },
        });
        const { x: H, y: C, zoom: z } = T.current.getViewport();
        return (
          E.setState({
            panZoom: T.current,
            transform: [H, C, z],
            domNode: k.current.closest(".react-flow"),
          }),
          () => {
            var b;
            (b = T.current) == null || b.destroy();
          }
        );
      }
    }, []),
    I.useEffect(() => {
      var H;
      (H = T.current) == null ||
        H.update({
          onPaneContextMenu: e,
          zoomOnScroll: t,
          zoomOnPinch: n,
          panOnScroll: r,
          panOnScrollSpeed: o,
          panOnScrollMode: i,
          zoomOnDoubleClick: s,
          panOnDrag: l,
          zoomActivationKeyPressed: F,
          preventScrolling: y,
          noPanClassName: w,
          userSelectionActive: _,
          noWheelClassName: v,
          lib: M,
          onTransformChange: L,
          connectionInProgress: R,
          selectionOnDrag: x,
          paneClickDistance: h,
        });
    }, [e, t, n, r, o, i, s, l, F, y, w, _, v, M, L, R, x, h]),
    S.jsx("div", {
      className: "react-flow__renderer",
      ref: k,
      style: ul,
      children: p,
    })
  );
}
const n_ = (e) => ({
  userSelectionActive: e.userSelectionActive,
  userSelectionRect: e.userSelectionRect,
});
function r_() {
  const { userSelectionActive: e, userSelectionRect: t } = oe(n_, pe);
  return e && t
    ? S.jsx("div", {
        className: "react-flow__selection react-flow__container",
        style: {
          width: t.width,
          height: t.height,
          transform: `translate(${t.x}px, ${t.y}px)`,
        },
      })
    : null;
}
const Zl = (e, t) => (n) => {
    n.target === t.current && (e == null || e(n));
  },
  o_ = (e) => ({
    userSelectionActive: e.userSelectionActive,
    elementsSelectable: e.elementsSelectable,
    connectionInProgress: e.connection.inProgress,
    dragging: e.paneDragging,
  });
function i_({
  isSelecting: e,
  selectionKeyPressed: t,
  selectionMode: n = $o.Full,
  panOnDrag: r,
  paneClickDistance: o,
  selectionOnDrag: i,
  onSelectionStart: s,
  onSelectionEnd: l,
  onPaneClick: a,
  onPaneContextMenu: u,
  onPaneScroll: f,
  onPaneMouseEnter: c,
  onPaneMouseMove: d,
  onPaneMouseLeave: y,
  children: p,
}) {
  const v = me(),
    {
      userSelectionActive: w,
      elementsSelectable: m,
      dragging: g,
      connectionInProgress: h,
    } = oe(o_, pe),
    x = m && (e || w),
    E = I.useRef(null),
    k = I.useRef(),
    _ = I.useRef(new Set()),
    M = I.useRef(new Set()),
    R = I.useRef(!1),
    F = (N) => {
      if (R.current || h) {
        R.current = !1;
        return;
      }
      (a == null || a(N),
        v.getState().resetSelectedElements(),
        v.setState({ nodesSelectionActive: !1 }));
    },
    T = (N) => {
      if (Array.isArray(r) && r != null && r.includes(2)) {
        N.preventDefault();
        return;
      }
      u == null || u(N);
    },
    L = f ? (N) => f(N) : void 0,
    H = (N) => {
      R.current && (N.stopPropagation(), (R.current = !1));
    },
    C = (N) => {
      var Y, Q;
      const { domNode: P } = v.getState();
      if (
        ((k.current = P == null ? void 0 : P.getBoundingClientRect()),
        !k.current)
      )
        return;
      const A = N.target === E.current;
      if (
        (!A && !!N.target.closest(".nokey")) ||
        !e ||
        !((i && A) || t) ||
        N.button !== 0 ||
        !N.isPrimary
      )
        return;
      ((Q = (Y = N.target) == null ? void 0 : Y.setPointerCapture) == null ||
        Q.call(Y, N.pointerId),
        (R.current = !1));
      const { x: W, y: U } = yt(N.nativeEvent, k.current);
      (v.setState({
        userSelectionRect: {
          width: 0,
          height: 0,
          startX: W,
          startY: U,
          x: W,
          y: U,
        },
      }),
        A || (N.stopPropagation(), N.preventDefault()));
    },
    z = (N) => {
      const {
        userSelectionRect: P,
        transform: A,
        nodeLookup: D,
        edgeLookup: $,
        connectionLookup: W,
        triggerNodeChanges: U,
        triggerEdgeChanges: Y,
        defaultEdgeOptions: Q,
        resetSelectedElements: q,
      } = v.getState();
      if (!k.current || !P) return;
      const { x: V, y: G } = yt(N.nativeEvent, k.current),
        { startX: ne, startY: te } = P;
      if (!R.current) {
        const se = t ? 0 : o;
        if (Math.hypot(V - ne, G - te) <= se) return;
        (q(), s == null || s(N));
      }
      R.current = !0;
      const J = {
          startX: ne,
          startY: te,
          x: V < ne ? V : ne,
          y: G < te ? G : te,
          width: Math.abs(V - ne),
          height: Math.abs(G - te),
        },
        Z = _.current,
        le = M.current;
      ((_.current = new Set(
        yc(D, J, A, n === $o.Partial, !0).map((se) => se.id),
      )),
        (M.current = new Set()));
      const ce = (Q == null ? void 0 : Q.selectable) ?? !0;
      for (const se of _.current) {
        const Re = W.get(se);
        if (Re)
          for (const { edgeId: Yt } of Re.values()) {
            const At = $.get(Yt);
            At && (At.selectable ?? ce) && M.current.add(Yt);
          }
      }
      if (!vd(Z, _.current)) {
        const se = lr(D, _.current, !0);
        U(se);
      }
      if (!vd(le, M.current)) {
        const se = lr($, M.current);
        Y(se);
      }
      v.setState({
        userSelectionRect: J,
        userSelectionActive: !0,
        nodesSelectionActive: !1,
      });
    },
    b = (N) => {
      var P, A;
      N.button === 0 &&
        ((A = (P = N.target) == null ? void 0 : P.releasePointerCapture) ==
          null || A.call(P, N.pointerId),
        !w &&
          N.target === E.current &&
          v.getState().userSelectionRect &&
          (F == null || F(N)),
        v.setState({ userSelectionActive: !1, userSelectionRect: null }),
        R.current &&
          (l == null || l(N),
          v.setState({ nodesSelectionActive: _.current.size > 0 })));
    },
    j = r === !0 || (Array.isArray(r) && r.includes(0));
  return S.jsxs("div", {
    className: ke([
      "react-flow__pane",
      { draggable: j, dragging: g, selection: e },
    ]),
    onClick: x ? void 0 : Zl(F, E),
    onContextMenu: Zl(T, E),
    onWheel: Zl(L, E),
    onPointerEnter: x ? void 0 : c,
    onPointerMove: x ? z : d,
    onPointerUp: x ? b : void 0,
    onPointerDownCapture: x ? C : void 0,
    onClickCapture: x ? H : void 0,
    onPointerLeave: y,
    ref: E,
    style: ul,
    children: [p, S.jsx(r_, {})],
  });
}
function cu({ id: e, store: t, unselect: n = !1, nodeRef: r }) {
  const {
      addSelectedNodes: o,
      unselectNodesAndEdges: i,
      multiSelectionActive: s,
      nodeLookup: l,
      onError: a,
    } = t.getState(),
    u = l.get(e);
  if (!u) {
    a == null || a("012", Tt.error012(e));
    return;
  }
  (t.setState({ nodesSelectionActive: !1 }),
    u.selected
      ? (n || (u.selected && s)) &&
        (i({ nodes: [u], edges: [] }),
        requestAnimationFrame(() => {
          var f;
          return (f = r == null ? void 0 : r.current) == null
            ? void 0
            : f.blur();
        }))
      : o([e]));
}
function Gg({
  nodeRef: e,
  disabled: t = !1,
  noDragClassName: n,
  handleSelector: r,
  nodeId: o,
  isSelectable: i,
  nodeClickDistance: s,
}) {
  const l = me(),
    [a, u] = I.useState(!1),
    f = I.useRef();
  return (
    I.useEffect(() => {
      f.current = AE({
        getStoreItems: () => l.getState(),
        onNodeMouseDown: (c) => {
          cu({ id: c, store: l, nodeRef: e });
        },
        onDragStart: () => {
          u(!0);
        },
        onDragStop: () => {
          u(!1);
        },
      });
    }, []),
    I.useEffect(() => {
      if (!(t || !e.current || !f.current))
        return (
          f.current.update({
            noDragClassName: n,
            handleSelector: r,
            domNode: e.current,
            isSelectable: i,
            nodeId: o,
            nodeClickDistance: s,
          }),
          () => {
            var c;
            (c = f.current) == null || c.destroy();
          }
        );
    }, [n, r, t, i, e, o, s]),
    a
  );
}
const s_ = (e) => (t) =>
  t.selected && (t.draggable || (e && typeof t.draggable > "u"));
function Zg() {
  const e = me();
  return I.useCallback((n) => {
    const {
        nodeExtent: r,
        snapToGrid: o,
        snapGrid: i,
        nodesDraggable: s,
        onError: l,
        updateNodePositions: a,
        nodeLookup: u,
        nodeOrigin: f,
      } = e.getState(),
      c = new Map(),
      d = s_(s),
      y = o ? i[0] : 5,
      p = o ? i[1] : 5,
      v = n.direction.x * y * n.factor,
      w = n.direction.y * p * n.factor;
    for (const [, m] of u) {
      if (!d(m)) continue;
      let g = {
        x: m.internals.positionAbsolute.x + v,
        y: m.internals.positionAbsolute.y + w,
      };
      o && (g = Zo(g, i));
      const { position: h, positionAbsolute: x } = hg({
        nodeId: m.id,
        nextPosition: g,
        nodeLookup: u,
        nodeExtent: r,
        nodeOrigin: f,
        onError: l,
      });
      ((m.position = h), (m.internals.positionAbsolute = x), c.set(m.id, m));
    }
    a(c);
  }, []);
}
const Pc = I.createContext(null),
  l_ = Pc.Provider;
Pc.Consumer;
const Jg = () => I.useContext(Pc),
  a_ = (e) => ({
    connectOnClick: e.connectOnClick,
    noPanClassName: e.noPanClassName,
    rfId: e.rfId,
  }),
  u_ = (e, t, n) => (r) => {
    const {
        connectionClickStartHandle: o,
        connectionMode: i,
        connection: s,
      } = r,
      { fromHandle: l, toHandle: a, isValid: u } = s,
      f =
        (a == null ? void 0 : a.nodeId) === e &&
        (a == null ? void 0 : a.id) === t &&
        (a == null ? void 0 : a.type) === n;
    return {
      connectingFrom:
        (l == null ? void 0 : l.nodeId) === e &&
        (l == null ? void 0 : l.id) === t &&
        (l == null ? void 0 : l.type) === n,
      connectingTo: f,
      clickConnecting:
        (o == null ? void 0 : o.nodeId) === e &&
        (o == null ? void 0 : o.id) === t &&
        (o == null ? void 0 : o.type) === n,
      isPossibleEndHandle:
        i === Nr.Strict
          ? (l == null ? void 0 : l.type) !== n
          : e !== (l == null ? void 0 : l.nodeId) ||
            t !== (l == null ? void 0 : l.id),
      connectionInProcess: !!l,
      clickConnectionInProcess: !!o,
      valid: f && u,
    };
  };
function c_(
  {
    type: e = "source",
    position: t = K.Top,
    isValidConnection: n,
    isConnectable: r = !0,
    isConnectableStart: o = !0,
    isConnectableEnd: i = !0,
    id: s,
    onConnect: l,
    children: a,
    className: u,
    onMouseDown: f,
    onTouchStart: c,
    ...d
  },
  y,
) {
  var z, b;
  const p = s || null,
    v = e === "target",
    w = me(),
    m = Jg(),
    { connectOnClick: g, noPanClassName: h, rfId: x } = oe(a_, pe),
    {
      connectingFrom: E,
      connectingTo: k,
      clickConnecting: _,
      isPossibleEndHandle: M,
      connectionInProcess: R,
      clickConnectionInProcess: F,
      valid: T,
    } = oe(u_(m, p, e), pe);
  m ||
    (b = (z = w.getState()).onError) == null ||
    b.call(z, "010", Tt.error010());
  const L = (j) => {
      const {
          defaultEdgeOptions: N,
          onConnect: P,
          hasDefaultEdges: A,
        } = w.getState(),
        D = { ...N, ...j };
      if (A) {
        const { edges: $, setEdges: W } = w.getState();
        W(_g(D, $));
      }
      (P == null || P(D), l == null || l(D));
    },
    H = (j) => {
      if (!m) return;
      const N = Sg(j.nativeEvent);
      if (o && ((N && j.button === 0) || !N)) {
        const P = w.getState();
        uu.onPointerDown(j.nativeEvent, {
          handleDomNode: j.currentTarget,
          autoPanOnConnect: P.autoPanOnConnect,
          connectionMode: P.connectionMode,
          connectionRadius: P.connectionRadius,
          domNode: P.domNode,
          nodeLookup: P.nodeLookup,
          lib: P.lib,
          isTarget: v,
          handleId: p,
          nodeId: m,
          flowId: P.rfId,
          panBy: P.panBy,
          cancelConnection: P.cancelConnection,
          onConnectStart: P.onConnectStart,
          onConnectEnd: (...A) => {
            var D, $;
            return ($ = (D = w.getState()).onConnectEnd) == null
              ? void 0
              : $.call(D, ...A);
          },
          updateConnection: P.updateConnection,
          onConnect: L,
          isValidConnection:
            n ||
            ((...A) => {
              var D, $;
              return (
                (($ = (D = w.getState()).isValidConnection) == null
                  ? void 0
                  : $.call(D, ...A)) ?? !0
              );
            }),
          getTransform: () => w.getState().transform,
          getFromHandle: () => w.getState().connection.fromHandle,
          autoPanSpeed: P.autoPanSpeed,
          dragThreshold: P.connectionDragThreshold,
        });
      }
      N ? f == null || f(j) : c == null || c(j);
    },
    C = (j) => {
      const {
        onClickConnectStart: N,
        onClickConnectEnd: P,
        connectionClickStartHandle: A,
        connectionMode: D,
        isValidConnection: $,
        lib: W,
        rfId: U,
        nodeLookup: Y,
        connection: Q,
      } = w.getState();
      if (!m || (!A && !o)) return;
      if (!A) {
        (N == null ||
          N(j.nativeEvent, { nodeId: m, handleId: p, handleType: e }),
          w.setState({
            connectionClickStartHandle: { nodeId: m, type: e, id: p },
          }));
        return;
      }
      const q = xg(j.target),
        V = n || $,
        { connection: G, isValid: ne } = uu.isValid(j.nativeEvent, {
          handle: { nodeId: m, id: p, type: e },
          connectionMode: D,
          fromNodeId: A.nodeId,
          fromHandleId: A.id || null,
          fromType: A.type,
          isValidConnection: V,
          flowId: U,
          doc: q,
          lib: W,
          nodeLookup: Y,
        });
      ne && G && L(G);
      const te = structuredClone(Q);
      (delete te.inProgress,
        (te.toPosition = te.toHandle ? te.toHandle.position : null),
        P == null || P(j, te),
        w.setState({ connectionClickStartHandle: null }));
    };
  return S.jsx("div", {
    "data-handleid": p,
    "data-nodeid": m,
    "data-handlepos": t,
    "data-id": `${x}-${m}-${p}-${e}`,
    className: ke([
      "react-flow__handle",
      `react-flow__handle-${t}`,
      "nodrag",
      h,
      u,
      {
        source: !v,
        target: v,
        connectable: r,
        connectablestart: o,
        connectableend: i,
        clickconnecting: _,
        connectingfrom: E,
        connectingto: k,
        valid: T,
        connectionindicator: r && (!R || M) && (R || F ? i : o),
      },
    ]),
    onMouseDown: H,
    onTouchStart: H,
    onClick: g ? C : void 0,
    ref: y,
    ...d,
    children: a,
  });
}
const Rr = I.memo(Kg(c_));
function f_({ data: e, isConnectable: t, sourcePosition: n = K.Bottom }) {
  return S.jsxs(S.Fragment, {
    children: [
      e == null ? void 0 : e.label,
      S.jsx(Rr, { type: "source", position: n, isConnectable: t }),
    ],
  });
}
function d_({
  data: e,
  isConnectable: t,
  targetPosition: n = K.Top,
  sourcePosition: r = K.Bottom,
}) {
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx(Rr, { type: "target", position: n, isConnectable: t }),
      e == null ? void 0 : e.label,
      S.jsx(Rr, { type: "source", position: r, isConnectable: t }),
    ],
  });
}
function h_() {
  return null;
}
function p_({ data: e, isConnectable: t, targetPosition: n = K.Top }) {
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx(Rr, { type: "target", position: n, isConnectable: t }),
      e == null ? void 0 : e.label,
    ],
  });
}
const Ls = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 },
  },
  Ud = { input: f_, default: d_, output: p_, group: h_ };
function m_(e) {
  var t, n, r, o;
  return e.internals.handleBounds === void 0
    ? {
        width:
          e.width ??
          e.initialWidth ??
          ((t = e.style) == null ? void 0 : t.width),
        height:
          e.height ??
          e.initialHeight ??
          ((n = e.style) == null ? void 0 : n.height),
      }
    : {
        width: e.width ?? ((r = e.style) == null ? void 0 : r.width),
        height: e.height ?? ((o = e.style) == null ? void 0 : o.height),
      };
}
const g_ = (e) => {
  const {
    width: t,
    height: n,
    x: r,
    y: o,
  } = Go(e.nodeLookup, { filter: (i) => !!i.selected });
  return {
    width: gt(t) ? t : null,
    height: gt(n) ? n : null,
    userSelectionActive: e.userSelectionActive,
    transformString: `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${o}px)`,
  };
};
function y_({
  onSelectionContextMenu: e,
  noPanClassName: t,
  disableKeyboardA11y: n,
}) {
  const r = me(),
    {
      width: o,
      height: i,
      transformString: s,
      userSelectionActive: l,
    } = oe(g_, pe),
    a = Zg(),
    u = I.useRef(null);
  I.useEffect(() => {
    var y;
    n || (y = u.current) == null || y.focus({ preventScroll: !0 });
  }, [n]);
  const f = !l && o !== null && i !== null;
  if ((Gg({ nodeRef: u, disabled: !f }), !f)) return null;
  const c = e
      ? (y) => {
          const p = r.getState().nodes.filter((v) => v.selected);
          e(y, p);
        }
      : void 0,
    d = (y) => {
      Object.prototype.hasOwnProperty.call(Ls, y.key) &&
        (y.preventDefault(),
        a({ direction: Ls[y.key], factor: y.shiftKey ? 4 : 1 }));
    };
  return S.jsx("div", {
    className: ke(["react-flow__nodesselection", "react-flow__container", t]),
    style: { transform: s },
    children: S.jsx("div", {
      ref: u,
      className: "react-flow__nodesselection-rect",
      onContextMenu: c,
      tabIndex: n ? void 0 : -1,
      onKeyDown: n ? void 0 : d,
      style: { width: o, height: i },
    }),
  });
}
const Wd = typeof window < "u" ? window : void 0,
  v_ = (e) => ({
    nodesSelectionActive: e.nodesSelectionActive,
    userSelectionActive: e.userSelectionActive,
  });
function e0({
  children: e,
  onPaneClick: t,
  onPaneMouseEnter: n,
  onPaneMouseMove: r,
  onPaneMouseLeave: o,
  onPaneContextMenu: i,
  onPaneScroll: s,
  paneClickDistance: l,
  deleteKeyCode: a,
  selectionKeyCode: u,
  selectionOnDrag: f,
  selectionMode: c,
  onSelectionStart: d,
  onSelectionEnd: y,
  multiSelectionKeyCode: p,
  panActivationKeyCode: v,
  zoomActivationKeyCode: w,
  elementsSelectable: m,
  zoomOnScroll: g,
  zoomOnPinch: h,
  panOnScroll: x,
  panOnScrollSpeed: E,
  panOnScrollMode: k,
  zoomOnDoubleClick: _,
  panOnDrag: M,
  defaultViewport: R,
  translateExtent: F,
  minZoom: T,
  maxZoom: L,
  preventScrolling: H,
  onSelectionContextMenu: C,
  noWheelClassName: z,
  noPanClassName: b,
  disableKeyboardA11y: j,
  onViewportChange: N,
  isControlledViewport: P,
}) {
  const { nodesSelectionActive: A, userSelectionActive: D } = oe(v_, pe),
    $ = Bo(u, { target: Wd }),
    W = Bo(v, { target: Wd }),
    U = W || M,
    Y = W || x,
    Q = f && U !== !0,
    q = $ || D || Q;
  return (
    Zk({ deleteKeyCode: a, multiSelectionKeyCode: p }),
    S.jsx(t_, {
      onPaneContextMenu: i,
      elementsSelectable: m,
      zoomOnScroll: g,
      zoomOnPinch: h,
      panOnScroll: Y,
      panOnScrollSpeed: E,
      panOnScrollMode: k,
      zoomOnDoubleClick: _,
      panOnDrag: !$ && U,
      defaultViewport: R,
      translateExtent: F,
      minZoom: T,
      maxZoom: L,
      zoomActivationKeyCode: w,
      preventScrolling: H,
      noWheelClassName: z,
      noPanClassName: b,
      onViewportChange: N,
      isControlledViewport: P,
      paneClickDistance: l,
      selectionOnDrag: Q,
      children: S.jsxs(i_, {
        onSelectionStart: d,
        onSelectionEnd: y,
        onPaneClick: t,
        onPaneMouseEnter: n,
        onPaneMouseMove: r,
        onPaneMouseLeave: o,
        onPaneContextMenu: i,
        onPaneScroll: s,
        panOnDrag: U,
        isSelecting: !!q,
        selectionMode: c,
        selectionKeyPressed: $,
        paneClickDistance: l,
        selectionOnDrag: Q,
        children: [
          e,
          A &&
            S.jsx(y_, {
              onSelectionContextMenu: C,
              noPanClassName: b,
              disableKeyboardA11y: j,
            }),
        ],
      }),
    })
  );
}
e0.displayName = "FlowRenderer";
const x_ = I.memo(e0),
  w_ = (e) => (t) =>
    e
      ? yc(
          t.nodeLookup,
          { x: 0, y: 0, width: t.width, height: t.height },
          t.transform,
          !0,
        ).map((n) => n.id)
      : Array.from(t.nodeLookup.keys());
function S_(e) {
  return oe(I.useCallback(w_(e), [e]), pe);
}
const E_ = (e) => e.updateNodeInternals;
function k_() {
  const e = oe(E_),
    [t] = I.useState(() =>
      typeof ResizeObserver > "u"
        ? null
        : new ResizeObserver((n) => {
            const r = new Map();
            (n.forEach((o) => {
              const i = o.target.getAttribute("data-id");
              r.set(i, { id: i, nodeElement: o.target, force: !0 });
            }),
              e(r));
          }),
    );
  return (
    I.useEffect(
      () => () => {
        t == null || t.disconnect();
      },
      [t],
    ),
    t
  );
}
function __({ node: e, nodeType: t, hasDimensions: n, resizeObserver: r }) {
  const o = me(),
    i = I.useRef(null),
    s = I.useRef(null),
    l = I.useRef(e.sourcePosition),
    a = I.useRef(e.targetPosition),
    u = I.useRef(t),
    f = n && !!e.internals.handleBounds;
  return (
    I.useEffect(() => {
      i.current &&
        !e.hidden &&
        (!f || s.current !== i.current) &&
        (s.current && (r == null || r.unobserve(s.current)),
        r == null || r.observe(i.current),
        (s.current = i.current));
    }, [f, e.hidden]),
    I.useEffect(
      () => () => {
        s.current && (r == null || r.unobserve(s.current), (s.current = null));
      },
      [],
    ),
    I.useEffect(() => {
      if (i.current) {
        const c = u.current !== t,
          d = l.current !== e.sourcePosition,
          y = a.current !== e.targetPosition;
        (c || d || y) &&
          ((u.current = t),
          (l.current = e.sourcePosition),
          (a.current = e.targetPosition),
          o
            .getState()
            .updateNodeInternals(
              new Map([
                [e.id, { id: e.id, nodeElement: i.current, force: !0 }],
              ]),
            ));
      }
    }, [e.id, t, e.sourcePosition, e.targetPosition]),
    i
  );
}
function N_({
  id: e,
  onClick: t,
  onMouseEnter: n,
  onMouseMove: r,
  onMouseLeave: o,
  onContextMenu: i,
  onDoubleClick: s,
  nodesDraggable: l,
  elementsSelectable: a,
  nodesConnectable: u,
  nodesFocusable: f,
  resizeObserver: c,
  noDragClassName: d,
  noPanClassName: y,
  disableKeyboardA11y: p,
  rfId: v,
  nodeTypes: w,
  nodeClickDistance: m,
  onError: g,
}) {
  const {
    node: h,
    internals: x,
    isParent: E,
  } = oe((V) => {
    const G = V.nodeLookup.get(e),
      ne = V.parentLookup.has(e);
    return { node: G, internals: G.internals, isParent: ne };
  }, pe);
  let k = h.type || "default",
    _ = (w == null ? void 0 : w[k]) || Ud[k];
  _ === void 0 &&
    (g == null || g("003", Tt.error003(k)),
    (k = "default"),
    (_ = (w == null ? void 0 : w.default) || Ud.default));
  const M = !!(h.draggable || (l && typeof h.draggable > "u")),
    R = !!(h.selectable || (a && typeof h.selectable > "u")),
    F = !!(h.connectable || (u && typeof h.connectable > "u")),
    T = !!(h.focusable || (f && typeof h.focusable > "u")),
    L = me(),
    H = yg(h),
    C = __({ node: h, nodeType: k, hasDimensions: H, resizeObserver: c }),
    z = Gg({
      nodeRef: C,
      disabled: h.hidden || !M,
      noDragClassName: d,
      handleSelector: h.dragHandle,
      nodeId: e,
      isSelectable: R,
      nodeClickDistance: m,
    }),
    b = Zg();
  if (h.hidden) return null;
  const j = Xt(h),
    N = m_(h),
    P = R || M || t || n || r || o,
    A = n ? (V) => n(V, { ...x.userNode }) : void 0,
    D = r ? (V) => r(V, { ...x.userNode }) : void 0,
    $ = o ? (V) => o(V, { ...x.userNode }) : void 0,
    W = i ? (V) => i(V, { ...x.userNode }) : void 0,
    U = s ? (V) => s(V, { ...x.userNode }) : void 0,
    Y = (V) => {
      const { selectNodesOnDrag: G, nodeDragThreshold: ne } = L.getState();
      (R && (!G || !M || ne > 0) && cu({ id: e, store: L, nodeRef: C }),
        t && t(V, { ...x.userNode }));
    },
    Q = (V) => {
      if (!(wg(V.nativeEvent) || p)) {
        if (ag.includes(V.key) && R) {
          const G = V.key === "Escape";
          cu({ id: e, store: L, unselect: G, nodeRef: C });
        } else if (
          M &&
          h.selected &&
          Object.prototype.hasOwnProperty.call(Ls, V.key)
        ) {
          V.preventDefault();
          const { ariaLabelConfig: G } = L.getState();
          (L.setState({
            ariaLiveMessage: G["node.a11yDescription.ariaLiveMessage"]({
              direction: V.key.replace("Arrow", "").toLowerCase(),
              x: ~~x.positionAbsolute.x,
              y: ~~x.positionAbsolute.y,
            }),
          }),
            b({ direction: Ls[V.key], factor: V.shiftKey ? 4 : 1 }));
        }
      }
    },
    q = () => {
      var le;
      if (p || !((le = C.current) != null && le.matches(":focus-visible")))
        return;
      const {
        transform: V,
        width: G,
        height: ne,
        autoPanOnNodeFocus: te,
        setCenter: J,
      } = L.getState();
      if (!te) return;
      yc(new Map([[e, h]]), { x: 0, y: 0, width: G, height: ne }, V, !0)
        .length > 0 ||
        J(h.position.x + j.width / 2, h.position.y + j.height / 2, {
          zoom: V[2],
        });
    };
  return S.jsx("div", {
    className: ke([
      "react-flow__node",
      `react-flow__node-${k}`,
      { [y]: M },
      h.className,
      {
        selected: h.selected,
        selectable: R,
        parent: E,
        draggable: M,
        dragging: z,
      },
    ]),
    ref: C,
    style: {
      zIndex: x.z,
      transform: `translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,
      pointerEvents: P ? "all" : "none",
      visibility: H ? "visible" : "hidden",
      ...h.style,
      ...N,
    },
    "data-id": e,
    "data-testid": `rf__node-${e}`,
    onMouseEnter: A,
    onMouseMove: D,
    onMouseLeave: $,
    onContextMenu: W,
    onClick: Y,
    onDoubleClick: U,
    onKeyDown: T ? Q : void 0,
    tabIndex: T ? 0 : void 0,
    onFocus: T ? q : void 0,
    role: h.ariaRole ?? (T ? "group" : void 0),
    "aria-roledescription": "node",
    "aria-describedby": p ? void 0 : `${Vg}-${v}`,
    "aria-label": h.ariaLabel,
    ...h.domAttributes,
    children: S.jsx(l_, {
      value: e,
      children: S.jsx(_, {
        id: e,
        data: h.data,
        type: k,
        positionAbsoluteX: x.positionAbsolute.x,
        positionAbsoluteY: x.positionAbsolute.y,
        selected: h.selected ?? !1,
        selectable: R,
        draggable: M,
        deletable: h.deletable ?? !0,
        isConnectable: F,
        sourcePosition: h.sourcePosition,
        targetPosition: h.targetPosition,
        dragging: z,
        dragHandle: h.dragHandle,
        zIndex: x.z,
        parentId: h.parentId,
        ...j,
      }),
    }),
  });
}
var C_ = I.memo(N_);
const P_ = (e) => ({
  nodesDraggable: e.nodesDraggable,
  nodesConnectable: e.nodesConnectable,
  nodesFocusable: e.nodesFocusable,
  elementsSelectable: e.elementsSelectable,
  onError: e.onError,
});
function t0(e) {
  const {
      nodesDraggable: t,
      nodesConnectable: n,
      nodesFocusable: r,
      elementsSelectable: o,
      onError: i,
    } = oe(P_, pe),
    s = S_(e.onlyRenderVisibleElements),
    l = k_();
  return S.jsx("div", {
    className: "react-flow__nodes",
    style: ul,
    children: s.map((a) =>
      S.jsx(
        C_,
        {
          id: a,
          nodeTypes: e.nodeTypes,
          nodeExtent: e.nodeExtent,
          onClick: e.onNodeClick,
          onMouseEnter: e.onNodeMouseEnter,
          onMouseMove: e.onNodeMouseMove,
          onMouseLeave: e.onNodeMouseLeave,
          onContextMenu: e.onNodeContextMenu,
          onDoubleClick: e.onNodeDoubleClick,
          noDragClassName: e.noDragClassName,
          noPanClassName: e.noPanClassName,
          rfId: e.rfId,
          disableKeyboardA11y: e.disableKeyboardA11y,
          resizeObserver: l,
          nodesDraggable: t,
          nodesConnectable: n,
          nodesFocusable: r,
          elementsSelectable: o,
          nodeClickDistance: e.nodeClickDistance,
          onError: i,
        },
        a,
      ),
    ),
  });
}
t0.displayName = "NodeRenderer";
const M_ = I.memo(t0);
function b_(e) {
  return oe(
    I.useCallback(
      (n) => {
        if (!e) return n.edges.map((o) => o.id);
        const r = [];
        if (n.width && n.height)
          for (const o of n.edges) {
            const i = n.nodeLookup.get(o.source),
              s = n.nodeLookup.get(o.target);
            i &&
              s &&
              pE({
                sourceNode: i,
                targetNode: s,
                width: n.width,
                height: n.height,
                transform: n.transform,
              }) &&
              r.push(o.id);
          }
        return r;
      },
      [e],
    ),
    pe,
  );
}
const T_ = ({ color: e = "none", strokeWidth: t = 1 }) => {
    const n = { strokeWidth: t, ...(e && { stroke: e }) };
    return S.jsx("polyline", {
      className: "arrow",
      style: n,
      strokeLinecap: "round",
      fill: "none",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4",
    });
  },
  R_ = ({ color: e = "none", strokeWidth: t = 1 }) => {
    const n = { strokeWidth: t, ...(e && { stroke: e, fill: e }) };
    return S.jsx("polyline", {
      className: "arrowclosed",
      style: n,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      points: "-5,-4 0,0 -5,4 -5,-4",
    });
  },
  Xd = { [Rs.Arrow]: T_, [Rs.ArrowClosed]: R_ };
function A_(e) {
  const t = me();
  return I.useMemo(() => {
    var o, i;
    return Object.prototype.hasOwnProperty.call(Xd, e)
      ? Xd[e]
      : ((i = (o = t.getState()).onError) == null ||
          i.call(o, "009", Tt.error009(e)),
        null);
  }, [e]);
}
const I_ = ({
    id: e,
    type: t,
    color: n,
    width: r = 12.5,
    height: o = 12.5,
    markerUnits: i = "strokeWidth",
    strokeWidth: s,
    orient: l = "auto-start-reverse",
  }) => {
    const a = A_(t);
    return a
      ? S.jsx("marker", {
          className: "react-flow__arrowhead",
          id: e,
          markerWidth: `${r}`,
          markerHeight: `${o}`,
          viewBox: "-10 -10 20 20",
          markerUnits: i,
          orient: l,
          refX: "0",
          refY: "0",
          children: S.jsx(a, { color: n, strokeWidth: s }),
        })
      : null;
  },
  n0 = ({ defaultColor: e, rfId: t }) => {
    const n = oe((i) => i.edges),
      r = oe((i) => i.defaultEdgeOptions),
      o = I.useMemo(
        () =>
          SE(n, {
            id: t,
            defaultColor: e,
            defaultMarkerStart: r == null ? void 0 : r.markerStart,
            defaultMarkerEnd: r == null ? void 0 : r.markerEnd,
          }),
        [n, r, t, e],
      );
    return o.length
      ? S.jsx("svg", {
          className: "react-flow__marker",
          "aria-hidden": "true",
          children: S.jsx("defs", {
            children: o.map((i) =>
              S.jsx(
                I_,
                {
                  id: i.id,
                  type: i.type,
                  color: i.color,
                  width: i.width,
                  height: i.height,
                  markerUnits: i.markerUnits,
                  strokeWidth: i.strokeWidth,
                  orient: i.orient,
                },
                i.id,
              ),
            ),
          }),
        })
      : null;
  };
n0.displayName = "MarkerDefinitions";
var L_ = I.memo(n0);
function r0({
  x: e,
  y: t,
  label: n,
  labelStyle: r,
  labelShowBg: o = !0,
  labelBgStyle: i,
  labelBgPadding: s = [2, 4],
  labelBgBorderRadius: l = 2,
  children: a,
  className: u,
  ...f
}) {
  const [c, d] = I.useState({ x: 1, y: 0, width: 0, height: 0 }),
    y = ke(["react-flow__edge-textwrapper", u]),
    p = I.useRef(null);
  return (
    I.useEffect(() => {
      if (p.current) {
        const v = p.current.getBBox();
        d({ x: v.x, y: v.y, width: v.width, height: v.height });
      }
    }, [n]),
    n
      ? S.jsxs("g", {
          transform: `translate(${e - c.width / 2} ${t - c.height / 2})`,
          className: y,
          visibility: c.width ? "visible" : "hidden",
          ...f,
          children: [
            o &&
              S.jsx("rect", {
                width: c.width + 2 * s[0],
                x: -s[0],
                y: -s[1],
                height: c.height + 2 * s[1],
                className: "react-flow__edge-textbg",
                style: i,
                rx: l,
                ry: l,
              }),
            S.jsx("text", {
              className: "react-flow__edge-text",
              y: c.height / 2,
              dy: "0.3em",
              ref: p,
              style: r,
              children: n,
            }),
            a,
          ],
        })
      : null
  );
}
r0.displayName = "EdgeText";
const z_ = I.memo(r0);
function Ar({
  path: e,
  labelX: t,
  labelY: n,
  label: r,
  labelStyle: o,
  labelShowBg: i,
  labelBgStyle: s,
  labelBgPadding: l,
  labelBgBorderRadius: a,
  interactionWidth: u = 20,
  ...f
}) {
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx("path", {
        ...f,
        d: e,
        fill: "none",
        className: ke(["react-flow__edge-path", f.className]),
      }),
      u
        ? S.jsx("path", {
            d: e,
            fill: "none",
            strokeOpacity: 0,
            strokeWidth: u,
            className: "react-flow__edge-interaction",
          })
        : null,
      r && gt(t) && gt(n)
        ? S.jsx(z_, {
            x: t,
            y: n,
            label: r,
            labelStyle: o,
            labelShowBg: i,
            labelBgStyle: s,
            labelBgPadding: l,
            labelBgBorderRadius: a,
          })
        : null,
    ],
  });
}
function Yd({ pos: e, x1: t, y1: n, x2: r, y2: o }) {
  return e === K.Left || e === K.Right
    ? [0.5 * (t + r), n]
    : [t, 0.5 * (n + o)];
}
function o0({
  sourceX: e,
  sourceY: t,
  sourcePosition: n = K.Bottom,
  targetX: r,
  targetY: o,
  targetPosition: i = K.Top,
}) {
  const [s, l] = Yd({ pos: n, x1: e, y1: t, x2: r, y2: o }),
    [a, u] = Yd({ pos: i, x1: r, y1: o, x2: e, y2: t }),
    [f, c, d, y] = Eg({
      sourceX: e,
      sourceY: t,
      targetX: r,
      targetY: o,
      sourceControlX: s,
      sourceControlY: l,
      targetControlX: a,
      targetControlY: u,
    });
  return [`M${e},${t} C${s},${l} ${a},${u} ${r},${o}`, f, c, d, y];
}
function i0(e) {
  return I.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      sourcePosition: s,
      targetPosition: l,
      label: a,
      labelStyle: u,
      labelShowBg: f,
      labelBgStyle: c,
      labelBgPadding: d,
      labelBgBorderRadius: y,
      style: p,
      markerEnd: v,
      markerStart: w,
      interactionWidth: m,
    }) => {
      const [g, h, x] = o0({
          sourceX: n,
          sourceY: r,
          sourcePosition: s,
          targetX: o,
          targetY: i,
          targetPosition: l,
        }),
        E = e.isInternal ? void 0 : t;
      return S.jsx(Ar, {
        id: E,
        path: g,
        labelX: h,
        labelY: x,
        label: a,
        labelStyle: u,
        labelShowBg: f,
        labelBgStyle: c,
        labelBgPadding: d,
        labelBgBorderRadius: y,
        style: p,
        markerEnd: v,
        markerStart: w,
        interactionWidth: m,
      });
    },
  );
}
const j_ = i0({ isInternal: !1 }),
  s0 = i0({ isInternal: !0 });
j_.displayName = "SimpleBezierEdge";
s0.displayName = "SimpleBezierEdgeInternal";
function l0(e) {
  return I.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      label: s,
      labelStyle: l,
      labelShowBg: a,
      labelBgStyle: u,
      labelBgPadding: f,
      labelBgBorderRadius: c,
      style: d,
      sourcePosition: y = K.Bottom,
      targetPosition: p = K.Top,
      markerEnd: v,
      markerStart: w,
      pathOptions: m,
      interactionWidth: g,
    }) => {
      const [h, x, E] = su({
          sourceX: n,
          sourceY: r,
          sourcePosition: y,
          targetX: o,
          targetY: i,
          targetPosition: p,
          borderRadius: m == null ? void 0 : m.borderRadius,
          offset: m == null ? void 0 : m.offset,
          stepPosition: m == null ? void 0 : m.stepPosition,
        }),
        k = e.isInternal ? void 0 : t;
      return S.jsx(Ar, {
        id: k,
        path: h,
        labelX: x,
        labelY: E,
        label: s,
        labelStyle: l,
        labelShowBg: a,
        labelBgStyle: u,
        labelBgPadding: f,
        labelBgBorderRadius: c,
        style: d,
        markerEnd: v,
        markerStart: w,
        interactionWidth: g,
      });
    },
  );
}
const a0 = l0({ isInternal: !1 }),
  u0 = l0({ isInternal: !0 });
a0.displayName = "SmoothStepEdge";
u0.displayName = "SmoothStepEdgeInternal";
function c0(e) {
  return I.memo(({ id: t, ...n }) => {
    var o;
    const r = e.isInternal ? void 0 : t;
    return S.jsx(a0, {
      ...n,
      id: r,
      pathOptions: I.useMemo(() => {
        var i;
        return {
          borderRadius: 0,
          offset: (i = n.pathOptions) == null ? void 0 : i.offset,
        };
      }, [(o = n.pathOptions) == null ? void 0 : o.offset]),
    });
  });
}
const O_ = c0({ isInternal: !1 }),
  f0 = c0({ isInternal: !0 });
O_.displayName = "StepEdge";
f0.displayName = "StepEdgeInternal";
function d0(e) {
  return I.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      label: s,
      labelStyle: l,
      labelShowBg: a,
      labelBgStyle: u,
      labelBgPadding: f,
      labelBgBorderRadius: c,
      style: d,
      markerEnd: y,
      markerStart: p,
      interactionWidth: v,
    }) => {
      const [w, m, g] = Ng({ sourceX: n, sourceY: r, targetX: o, targetY: i }),
        h = e.isInternal ? void 0 : t;
      return S.jsx(Ar, {
        id: h,
        path: w,
        labelX: m,
        labelY: g,
        label: s,
        labelStyle: l,
        labelShowBg: a,
        labelBgStyle: u,
        labelBgPadding: f,
        labelBgBorderRadius: c,
        style: d,
        markerEnd: y,
        markerStart: p,
        interactionWidth: v,
      });
    },
  );
}
const D_ = d0({ isInternal: !1 }),
  h0 = d0({ isInternal: !0 });
D_.displayName = "StraightEdge";
h0.displayName = "StraightEdgeInternal";
function p0(e) {
  return I.memo(
    ({
      id: t,
      sourceX: n,
      sourceY: r,
      targetX: o,
      targetY: i,
      sourcePosition: s = K.Bottom,
      targetPosition: l = K.Top,
      label: a,
      labelStyle: u,
      labelShowBg: f,
      labelBgStyle: c,
      labelBgPadding: d,
      labelBgBorderRadius: y,
      style: p,
      markerEnd: v,
      markerStart: w,
      pathOptions: m,
      interactionWidth: g,
    }) => {
      const [h, x, E] = wc({
          sourceX: n,
          sourceY: r,
          sourcePosition: s,
          targetX: o,
          targetY: i,
          targetPosition: l,
          curvature: m == null ? void 0 : m.curvature,
        }),
        k = e.isInternal ? void 0 : t;
      return S.jsx(Ar, {
        id: k,
        path: h,
        labelX: x,
        labelY: E,
        label: a,
        labelStyle: u,
        labelShowBg: f,
        labelBgStyle: c,
        labelBgPadding: d,
        labelBgBorderRadius: y,
        style: p,
        markerEnd: v,
        markerStart: w,
        interactionWidth: g,
      });
    },
  );
}
const $_ = p0({ isInternal: !1 }),
  m0 = p0({ isInternal: !0 });
$_.displayName = "BezierEdge";
m0.displayName = "BezierEdgeInternal";
const Qd = {
    default: m0,
    straight: h0,
    step: f0,
    smoothstep: u0,
    simplebezier: s0,
  },
  Kd = {
    sourceX: null,
    sourceY: null,
    targetX: null,
    targetY: null,
    sourcePosition: null,
    targetPosition: null,
  },
  F_ = (e, t, n) => (n === K.Left ? e - t : n === K.Right ? e + t : e),
  H_ = (e, t, n) => (n === K.Top ? e - t : n === K.Bottom ? e + t : e),
  qd = "react-flow__edgeupdater";
function Gd({
  position: e,
  centerX: t,
  centerY: n,
  radius: r = 10,
  onMouseDown: o,
  onMouseEnter: i,
  onMouseOut: s,
  type: l,
}) {
  return S.jsx("circle", {
    onMouseDown: o,
    onMouseEnter: i,
    onMouseOut: s,
    className: ke([qd, `${qd}-${l}`]),
    cx: F_(t, r, e),
    cy: H_(n, r, e),
    r,
    stroke: "transparent",
    fill: "transparent",
  });
}
function B_({
  isReconnectable: e,
  reconnectRadius: t,
  edge: n,
  sourceX: r,
  sourceY: o,
  targetX: i,
  targetY: s,
  sourcePosition: l,
  targetPosition: a,
  onReconnect: u,
  onReconnectStart: f,
  onReconnectEnd: c,
  setReconnecting: d,
  setUpdateHover: y,
}) {
  const p = me(),
    v = (x, E) => {
      if (x.button !== 0) return;
      const {
          autoPanOnConnect: k,
          domNode: _,
          connectionMode: M,
          connectionRadius: R,
          lib: F,
          onConnectStart: T,
          cancelConnection: L,
          nodeLookup: H,
          rfId: C,
          panBy: z,
          updateConnection: b,
        } = p.getState(),
        j = E.type === "target",
        N = (D, $) => {
          (d(!1), c == null || c(D, n, E.type, $));
        },
        P = (D) => (u == null ? void 0 : u(n, D)),
        A = (D, $) => {
          (d(!0), f == null || f(x, n, E.type), T == null || T(D, $));
        };
      uu.onPointerDown(x.nativeEvent, {
        autoPanOnConnect: k,
        connectionMode: M,
        connectionRadius: R,
        domNode: _,
        handleId: E.id,
        nodeId: E.nodeId,
        nodeLookup: H,
        isTarget: j,
        edgeUpdaterType: E.type,
        lib: F,
        flowId: C,
        cancelConnection: L,
        panBy: z,
        isValidConnection: (...D) => {
          var $, W;
          return (
            ((W = ($ = p.getState()).isValidConnection) == null
              ? void 0
              : W.call($, ...D)) ?? !0
          );
        },
        onConnect: P,
        onConnectStart: A,
        onConnectEnd: (...D) => {
          var $, W;
          return (W = ($ = p.getState()).onConnectEnd) == null
            ? void 0
            : W.call($, ...D);
        },
        onReconnectEnd: N,
        updateConnection: b,
        getTransform: () => p.getState().transform,
        getFromHandle: () => p.getState().connection.fromHandle,
        dragThreshold: p.getState().connectionDragThreshold,
        handleDomNode: x.currentTarget,
      });
    },
    w = (x) =>
      v(x, { nodeId: n.target, id: n.targetHandle ?? null, type: "target" }),
    m = (x) =>
      v(x, { nodeId: n.source, id: n.sourceHandle ?? null, type: "source" }),
    g = () => y(!0),
    h = () => y(!1);
  return S.jsxs(S.Fragment, {
    children: [
      (e === !0 || e === "source") &&
        S.jsx(Gd, {
          position: l,
          centerX: r,
          centerY: o,
          radius: t,
          onMouseDown: w,
          onMouseEnter: g,
          onMouseOut: h,
          type: "source",
        }),
      (e === !0 || e === "target") &&
        S.jsx(Gd, {
          position: a,
          centerX: i,
          centerY: s,
          radius: t,
          onMouseDown: m,
          onMouseEnter: g,
          onMouseOut: h,
          type: "target",
        }),
    ],
  });
}
function V_({
  id: e,
  edgesFocusable: t,
  edgesReconnectable: n,
  elementsSelectable: r,
  onClick: o,
  onDoubleClick: i,
  onContextMenu: s,
  onMouseEnter: l,
  onMouseMove: a,
  onMouseLeave: u,
  reconnectRadius: f,
  onReconnect: c,
  onReconnectStart: d,
  onReconnectEnd: y,
  rfId: p,
  edgeTypes: v,
  noPanClassName: w,
  onError: m,
  disableKeyboardA11y: g,
}) {
  let h = oe((J) => J.edgeLookup.get(e));
  const x = oe((J) => J.defaultEdgeOptions);
  h = x ? { ...x, ...h } : h;
  let E = h.type || "default",
    k = (v == null ? void 0 : v[E]) || Qd[E];
  k === void 0 &&
    (m == null || m("011", Tt.error011(E)),
    (E = "default"),
    (k = (v == null ? void 0 : v.default) || Qd.default));
  const _ = !!(h.focusable || (t && typeof h.focusable > "u")),
    M =
      typeof c < "u" &&
      (h.reconnectable || (n && typeof h.reconnectable > "u")),
    R = !!(h.selectable || (r && typeof h.selectable > "u")),
    F = I.useRef(null),
    [T, L] = I.useState(!1),
    [H, C] = I.useState(!1),
    z = me(),
    {
      zIndex: b,
      sourceX: j,
      sourceY: N,
      targetX: P,
      targetY: A,
      sourcePosition: D,
      targetPosition: $,
    } = oe(
      I.useCallback(
        (J) => {
          const Z = J.nodeLookup.get(h.source),
            le = J.nodeLookup.get(h.target);
          if (!Z || !le) return { zIndex: h.zIndex, ...Kd };
          const ce = wE({
            id: e,
            sourceNode: Z,
            targetNode: le,
            sourceHandle: h.sourceHandle || null,
            targetHandle: h.targetHandle || null,
            connectionMode: J.connectionMode,
            onError: m,
          });
          return {
            zIndex: hE({
              selected: h.selected,
              zIndex: h.zIndex,
              sourceNode: Z,
              targetNode: le,
              elevateOnSelect: J.elevateEdgesOnSelect,
              zIndexMode: J.zIndexMode,
            }),
            ...(ce || Kd),
          };
        },
        [
          h.source,
          h.target,
          h.sourceHandle,
          h.targetHandle,
          h.selected,
          h.zIndex,
        ],
      ),
      pe,
    ),
    W = I.useMemo(
      () => (h.markerStart ? `url('#${lu(h.markerStart, p)}')` : void 0),
      [h.markerStart, p],
    ),
    U = I.useMemo(
      () => (h.markerEnd ? `url('#${lu(h.markerEnd, p)}')` : void 0),
      [h.markerEnd, p],
    );
  if (h.hidden || j === null || N === null || P === null || A === null)
    return null;
  const Y = (J) => {
      var se;
      const {
        addSelectedEdges: Z,
        unselectNodesAndEdges: le,
        multiSelectionActive: ce,
      } = z.getState();
      (R &&
        (z.setState({ nodesSelectionActive: !1 }),
        h.selected && ce
          ? (le({ nodes: [], edges: [h] }),
            (se = F.current) == null || se.blur())
          : Z([e])),
        o && o(J, h));
    },
    Q = i
      ? (J) => {
          i(J, { ...h });
        }
      : void 0,
    q = s
      ? (J) => {
          s(J, { ...h });
        }
      : void 0,
    V = l
      ? (J) => {
          l(J, { ...h });
        }
      : void 0,
    G = a
      ? (J) => {
          a(J, { ...h });
        }
      : void 0,
    ne = u
      ? (J) => {
          u(J, { ...h });
        }
      : void 0,
    te = (J) => {
      var Z;
      if (!g && ag.includes(J.key) && R) {
        const { unselectNodesAndEdges: le, addSelectedEdges: ce } =
          z.getState();
        J.key === "Escape"
          ? ((Z = F.current) == null || Z.blur(), le({ edges: [h] }))
          : ce([e]);
      }
    };
  return S.jsx("svg", {
    style: { zIndex: b },
    children: S.jsxs("g", {
      className: ke([
        "react-flow__edge",
        `react-flow__edge-${E}`,
        h.className,
        w,
        {
          selected: h.selected,
          animated: h.animated,
          inactive: !R && !o,
          updating: T,
          selectable: R,
        },
      ]),
      onClick: Y,
      onDoubleClick: Q,
      onContextMenu: q,
      onMouseEnter: V,
      onMouseMove: G,
      onMouseLeave: ne,
      onKeyDown: _ ? te : void 0,
      tabIndex: _ ? 0 : void 0,
      role: h.ariaRole ?? (_ ? "group" : "img"),
      "aria-roledescription": "edge",
      "data-id": e,
      "data-testid": `rf__edge-${e}`,
      "aria-label":
        h.ariaLabel === null
          ? void 0
          : h.ariaLabel || `Edge from ${h.source} to ${h.target}`,
      "aria-describedby": _ ? `${Ug}-${p}` : void 0,
      ref: F,
      ...h.domAttributes,
      children: [
        !H &&
          S.jsx(k, {
            id: e,
            source: h.source,
            target: h.target,
            type: h.type,
            selected: h.selected,
            animated: h.animated,
            selectable: R,
            deletable: h.deletable ?? !0,
            label: h.label,
            labelStyle: h.labelStyle,
            labelShowBg: h.labelShowBg,
            labelBgStyle: h.labelBgStyle,
            labelBgPadding: h.labelBgPadding,
            labelBgBorderRadius: h.labelBgBorderRadius,
            sourceX: j,
            sourceY: N,
            targetX: P,
            targetY: A,
            sourcePosition: D,
            targetPosition: $,
            data: h.data,
            style: h.style,
            sourceHandleId: h.sourceHandle,
            targetHandleId: h.targetHandle,
            markerStart: W,
            markerEnd: U,
            pathOptions: "pathOptions" in h ? h.pathOptions : void 0,
            interactionWidth: h.interactionWidth,
          }),
        M &&
          S.jsx(B_, {
            edge: h,
            isReconnectable: M,
            reconnectRadius: f,
            onReconnect: c,
            onReconnectStart: d,
            onReconnectEnd: y,
            sourceX: j,
            sourceY: N,
            targetX: P,
            targetY: A,
            sourcePosition: D,
            targetPosition: $,
            setUpdateHover: L,
            setReconnecting: C,
          }),
      ],
    }),
  });
}
var U_ = I.memo(V_);
const W_ = (e) => ({
  edgesFocusable: e.edgesFocusable,
  edgesReconnectable: e.edgesReconnectable,
  elementsSelectable: e.elementsSelectable,
  connectionMode: e.connectionMode,
  onError: e.onError,
});
function g0({
  defaultMarkerColor: e,
  onlyRenderVisibleElements: t,
  rfId: n,
  edgeTypes: r,
  noPanClassName: o,
  onReconnect: i,
  onEdgeContextMenu: s,
  onEdgeMouseEnter: l,
  onEdgeMouseMove: a,
  onEdgeMouseLeave: u,
  onEdgeClick: f,
  reconnectRadius: c,
  onEdgeDoubleClick: d,
  onReconnectStart: y,
  onReconnectEnd: p,
  disableKeyboardA11y: v,
}) {
  const {
      edgesFocusable: w,
      edgesReconnectable: m,
      elementsSelectable: g,
      onError: h,
    } = oe(W_, pe),
    x = b_(t);
  return S.jsxs("div", {
    className: "react-flow__edges",
    children: [
      S.jsx(L_, { defaultColor: e, rfId: n }),
      x.map((E) =>
        S.jsx(
          U_,
          {
            id: E,
            edgesFocusable: w,
            edgesReconnectable: m,
            elementsSelectable: g,
            noPanClassName: o,
            onReconnect: i,
            onContextMenu: s,
            onMouseEnter: l,
            onMouseMove: a,
            onMouseLeave: u,
            onClick: f,
            reconnectRadius: c,
            onDoubleClick: d,
            onReconnectStart: y,
            onReconnectEnd: p,
            rfId: n,
            onError: h,
            edgeTypes: r,
            disableKeyboardA11y: v,
          },
          E,
        ),
      ),
    ],
  });
}
g0.displayName = "EdgeRenderer";
const X_ = I.memo(g0),
  Y_ = (e) =>
    `translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;
function Q_({ children: e }) {
  const t = oe(Y_);
  return S.jsx("div", {
    className: "react-flow__viewport xyflow__viewport react-flow__container",
    style: { transform: t },
    children: e,
  });
}
function K_(e) {
  const t = Cc(),
    n = I.useRef(!1);
  I.useEffect(() => {
    !n.current &&
      t.viewportInitialized &&
      e &&
      (setTimeout(() => e(t), 1), (n.current = !0));
  }, [e, t.viewportInitialized]);
}
const q_ = (e) => {
  var t;
  return (t = e.panZoom) == null ? void 0 : t.syncViewport;
};
function G_(e) {
  const t = oe(q_),
    n = me();
  return (
    I.useEffect(() => {
      e && (t == null || t(e), n.setState({ transform: [e.x, e.y, e.zoom] }));
    }, [e, t]),
    null
  );
}
function Z_(e) {
  return e.connection.inProgress
    ? { ...e.connection, to: Jo(e.connection.to, e.transform) }
    : { ...e.connection };
}
function J_(e) {
  return Z_;
}
function eN(e) {
  const t = J_();
  return oe(t, pe);
}
const tN = (e) => ({
  nodesConnectable: e.nodesConnectable,
  isValid: e.connection.isValid,
  inProgress: e.connection.inProgress,
  width: e.width,
  height: e.height,
});
function nN({ containerStyle: e, style: t, type: n, component: r }) {
  const {
    nodesConnectable: o,
    width: i,
    height: s,
    isValid: l,
    inProgress: a,
  } = oe(tN, pe);
  return !(i && o && a)
    ? null
    : S.jsx("svg", {
        style: e,
        width: i,
        height: s,
        className: "react-flow__connectionline react-flow__container",
        children: S.jsx("g", {
          className: ke(["react-flow__connection", fg(l)]),
          children: S.jsx(y0, {
            style: t,
            type: n,
            CustomComponent: r,
            isValid: l,
          }),
        }),
      });
}
const y0 = ({
  style: e,
  type: t = tn.Bezier,
  CustomComponent: n,
  isValid: r,
}) => {
  const {
    inProgress: o,
    from: i,
    fromNode: s,
    fromHandle: l,
    fromPosition: a,
    to: u,
    toNode: f,
    toHandle: c,
    toPosition: d,
    pointer: y,
  } = eN();
  if (!o) return;
  if (n)
    return S.jsx(n, {
      connectionLineType: t,
      connectionLineStyle: e,
      fromNode: s,
      fromHandle: l,
      fromX: i.x,
      fromY: i.y,
      toX: u.x,
      toY: u.y,
      fromPosition: a,
      toPosition: d,
      connectionStatus: fg(r),
      toNode: f,
      toHandle: c,
      pointer: y,
    });
  let p = "";
  const v = {
    sourceX: i.x,
    sourceY: i.y,
    sourcePosition: a,
    targetX: u.x,
    targetY: u.y,
    targetPosition: d,
  };
  switch (t) {
    case tn.Bezier:
      [p] = wc(v);
      break;
    case tn.SimpleBezier:
      [p] = o0(v);
      break;
    case tn.Step:
      [p] = su({ ...v, borderRadius: 0 });
      break;
    case tn.SmoothStep:
      [p] = su(v);
      break;
    default:
      [p] = Ng(v);
  }
  return S.jsx("path", {
    d: p,
    fill: "none",
    className: "react-flow__connection-path",
    style: e,
  });
};
y0.displayName = "ConnectionLine";
const rN = {};
function Zd(e = rN) {
  (I.useRef(e), me(), I.useEffect(() => {}, [e]));
}
function oN() {
  (me(), I.useRef(!1), I.useEffect(() => {}, []));
}
function v0({
  nodeTypes: e,
  edgeTypes: t,
  onInit: n,
  onNodeClick: r,
  onEdgeClick: o,
  onNodeDoubleClick: i,
  onEdgeDoubleClick: s,
  onNodeMouseEnter: l,
  onNodeMouseMove: a,
  onNodeMouseLeave: u,
  onNodeContextMenu: f,
  onSelectionContextMenu: c,
  onSelectionStart: d,
  onSelectionEnd: y,
  connectionLineType: p,
  connectionLineStyle: v,
  connectionLineComponent: w,
  connectionLineContainerStyle: m,
  selectionKeyCode: g,
  selectionOnDrag: h,
  selectionMode: x,
  multiSelectionKeyCode: E,
  panActivationKeyCode: k,
  zoomActivationKeyCode: _,
  deleteKeyCode: M,
  onlyRenderVisibleElements: R,
  elementsSelectable: F,
  defaultViewport: T,
  translateExtent: L,
  minZoom: H,
  maxZoom: C,
  preventScrolling: z,
  defaultMarkerColor: b,
  zoomOnScroll: j,
  zoomOnPinch: N,
  panOnScroll: P,
  panOnScrollSpeed: A,
  panOnScrollMode: D,
  zoomOnDoubleClick: $,
  panOnDrag: W,
  onPaneClick: U,
  onPaneMouseEnter: Y,
  onPaneMouseMove: Q,
  onPaneMouseLeave: q,
  onPaneScroll: V,
  onPaneContextMenu: G,
  paneClickDistance: ne,
  nodeClickDistance: te,
  onEdgeContextMenu: J,
  onEdgeMouseEnter: Z,
  onEdgeMouseMove: le,
  onEdgeMouseLeave: ce,
  reconnectRadius: se,
  onReconnect: Re,
  onReconnectStart: Yt,
  onReconnectEnd: At,
  noDragClassName: xn,
  noWheelClassName: Dr,
  noPanClassName: $r,
  disableKeyboardA11y: Fr,
  nodeExtent: ml,
  rfId: ii,
  viewport: Wn,
  onViewportChange: Hr,
}) {
  return (
    Zd(e),
    Zd(t),
    oN(),
    K_(n),
    G_(Wn),
    S.jsx(x_, {
      onPaneClick: U,
      onPaneMouseEnter: Y,
      onPaneMouseMove: Q,
      onPaneMouseLeave: q,
      onPaneContextMenu: G,
      onPaneScroll: V,
      paneClickDistance: ne,
      deleteKeyCode: M,
      selectionKeyCode: g,
      selectionOnDrag: h,
      selectionMode: x,
      onSelectionStart: d,
      onSelectionEnd: y,
      multiSelectionKeyCode: E,
      panActivationKeyCode: k,
      zoomActivationKeyCode: _,
      elementsSelectable: F,
      zoomOnScroll: j,
      zoomOnPinch: N,
      zoomOnDoubleClick: $,
      panOnScroll: P,
      panOnScrollSpeed: A,
      panOnScrollMode: D,
      panOnDrag: W,
      defaultViewport: T,
      translateExtent: L,
      minZoom: H,
      maxZoom: C,
      onSelectionContextMenu: c,
      preventScrolling: z,
      noDragClassName: xn,
      noWheelClassName: Dr,
      noPanClassName: $r,
      disableKeyboardA11y: Fr,
      onViewportChange: Hr,
      isControlledViewport: !!Wn,
      children: S.jsxs(Q_, {
        children: [
          S.jsx(X_, {
            edgeTypes: t,
            onEdgeClick: o,
            onEdgeDoubleClick: s,
            onReconnect: Re,
            onReconnectStart: Yt,
            onReconnectEnd: At,
            onlyRenderVisibleElements: R,
            onEdgeContextMenu: J,
            onEdgeMouseEnter: Z,
            onEdgeMouseMove: le,
            onEdgeMouseLeave: ce,
            reconnectRadius: se,
            defaultMarkerColor: b,
            noPanClassName: $r,
            disableKeyboardA11y: Fr,
            rfId: ii,
          }),
          S.jsx(nN, { style: v, type: p, component: w, containerStyle: m }),
          S.jsx("div", { className: "react-flow__edgelabel-renderer" }),
          S.jsx(M_, {
            nodeTypes: e,
            onNodeClick: r,
            onNodeDoubleClick: i,
            onNodeMouseEnter: l,
            onNodeMouseMove: a,
            onNodeMouseLeave: u,
            onNodeContextMenu: f,
            nodeClickDistance: te,
            onlyRenderVisibleElements: R,
            noPanClassName: $r,
            noDragClassName: xn,
            disableKeyboardA11y: Fr,
            nodeExtent: ml,
            rfId: ii,
          }),
          S.jsx("div", { className: "react-flow__viewport-portal" }),
        ],
      }),
    })
  );
}
v0.displayName = "GraphView";
const iN = I.memo(v0),
  Jd = ({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: s,
    fitViewOptions: l,
    minZoom: a = 0.5,
    maxZoom: u = 2,
    nodeOrigin: f,
    nodeExtent: c,
    zIndexMode: d = "basic",
  } = {}) => {
    const y = new Map(),
      p = new Map(),
      v = new Map(),
      w = new Map(),
      m = r ?? t ?? [],
      g = n ?? e ?? [],
      h = f ?? [0, 0],
      x = c ?? Do;
    Mg(v, w, m);
    const E = au(g, y, p, { nodeOrigin: h, nodeExtent: x, zIndexMode: d });
    let k = [0, 0, 1];
    if (s && o && i) {
      const _ = Go(y, {
          filter: (T) =>
            !!((T.width || T.initialWidth) && (T.height || T.initialHeight)),
        }),
        {
          x: M,
          y: R,
          zoom: F,
        } = vc(_, o, i, a, u, (l == null ? void 0 : l.padding) ?? 0.1);
      k = [M, R, F];
    }
    return {
      rfId: "1",
      width: o ?? 0,
      height: i ?? 0,
      transform: k,
      nodes: g,
      nodesInitialized: E,
      nodeLookup: y,
      parentLookup: p,
      edges: m,
      edgeLookup: w,
      connectionLookup: v,
      onNodesChange: null,
      onEdgesChange: null,
      hasDefaultNodes: n !== void 0,
      hasDefaultEdges: r !== void 0,
      panZoom: null,
      minZoom: a,
      maxZoom: u,
      translateExtent: Do,
      nodeExtent: x,
      nodesSelectionActive: !1,
      userSelectionActive: !1,
      userSelectionRect: null,
      connectionMode: Nr.Strict,
      domNode: null,
      paneDragging: !1,
      noPanClassName: "nopan",
      nodeOrigin: h,
      nodeDragThreshold: 1,
      connectionDragThreshold: 1,
      snapGrid: [15, 15],
      snapToGrid: !1,
      nodesDraggable: !0,
      nodesConnectable: !0,
      nodesFocusable: !0,
      edgesFocusable: !0,
      edgesReconnectable: !0,
      elementsSelectable: !0,
      elevateNodesOnSelect: !0,
      elevateEdgesOnSelect: !0,
      selectNodesOnDrag: !0,
      multiSelectionActive: !1,
      fitViewQueued: s ?? !1,
      fitViewOptions: l,
      fitViewResolver: null,
      connection: { ...cg },
      connectionClickStartHandle: null,
      connectOnClick: !0,
      ariaLiveMessage: "",
      autoPanOnConnect: !0,
      autoPanOnNodeDrag: !0,
      autoPanOnNodeFocus: !0,
      autoPanSpeed: 15,
      connectionRadius: 20,
      onError: lE,
      isValidConnection: void 0,
      onSelectionChangeHandlers: [],
      lib: "react",
      debug: !1,
      ariaLabelConfig: ug,
      zIndexMode: d,
      onNodesChangeMiddlewareMap: new Map(),
      onEdgesChangeMiddlewareMap: new Map(),
    };
  },
  sN = ({
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    width: o,
    height: i,
    fitView: s,
    fitViewOptions: l,
    minZoom: a,
    maxZoom: u,
    nodeOrigin: f,
    nodeExtent: c,
    zIndexMode: d,
  }) =>
    _k((y, p) => {
      async function v() {
        const {
          nodeLookup: w,
          panZoom: m,
          fitViewOptions: g,
          fitViewResolver: h,
          width: x,
          height: E,
          minZoom: k,
          maxZoom: _,
        } = p();
        m &&
          (await iE(
            {
              nodes: w,
              width: x,
              height: E,
              panZoom: m,
              minZoom: k,
              maxZoom: _,
            },
            g,
          ),
          h == null || h.resolve(!0),
          y({ fitViewResolver: null }));
      }
      return {
        ...Jd({
          nodes: e,
          edges: t,
          width: o,
          height: i,
          fitView: s,
          fitViewOptions: l,
          minZoom: a,
          maxZoom: u,
          nodeOrigin: f,
          nodeExtent: c,
          defaultNodes: n,
          defaultEdges: r,
          zIndexMode: d,
        }),
        setNodes: (w) => {
          const {
              nodeLookup: m,
              parentLookup: g,
              nodeOrigin: h,
              elevateNodesOnSelect: x,
              fitViewQueued: E,
              zIndexMode: k,
            } = p(),
            _ = au(w, m, g, {
              nodeOrigin: h,
              nodeExtent: c,
              elevateNodesOnSelect: x,
              checkEquality: !0,
              zIndexMode: k,
            });
          E && _
            ? (v(),
              y({
                nodes: w,
                nodesInitialized: _,
                fitViewQueued: !1,
                fitViewOptions: void 0,
              }))
            : y({ nodes: w, nodesInitialized: _ });
        },
        setEdges: (w) => {
          const { connectionLookup: m, edgeLookup: g } = p();
          (Mg(m, g, w), y({ edges: w }));
        },
        setDefaultNodesAndEdges: (w, m) => {
          if (w) {
            const { setNodes: g } = p();
            (g(w), y({ hasDefaultNodes: !0 }));
          }
          if (m) {
            const { setEdges: g } = p();
            (g(m), y({ hasDefaultEdges: !0 }));
          }
        },
        updateNodeInternals: (w) => {
          const {
              triggerNodeChanges: m,
              nodeLookup: g,
              parentLookup: h,
              domNode: x,
              nodeOrigin: E,
              nodeExtent: k,
              debug: _,
              fitViewQueued: M,
              zIndexMode: R,
            } = p(),
            { changes: F, updatedInternals: T } = ME(w, g, h, x, E, k, R);
          T &&
            (_E(g, h, { nodeOrigin: E, nodeExtent: k, zIndexMode: R }),
            M ? (v(), y({ fitViewQueued: !1, fitViewOptions: void 0 })) : y({}),
            (F == null ? void 0 : F.length) > 0 &&
              (_ && console.log("React Flow: trigger node changes", F),
              m == null || m(F)));
        },
        updateNodePositions: (w, m = !1) => {
          const g = [];
          let h = [];
          const {
            nodeLookup: x,
            triggerNodeChanges: E,
            connection: k,
            updateConnection: _,
            onNodesChangeMiddlewareMap: M,
          } = p();
          for (const [R, F] of w) {
            const T = x.get(R),
              L = !!(
                T != null &&
                T.expandParent &&
                T != null &&
                T.parentId &&
                F != null &&
                F.position
              ),
              H = {
                id: R,
                type: "position",
                position: L
                  ? {
                      x: Math.max(0, F.position.x),
                      y: Math.max(0, F.position.y),
                    }
                  : F.position,
                dragging: m,
              };
            if (T && k.inProgress && k.fromNode.id === T.id) {
              const C = Hn(T, k.fromHandle, K.Left, !0);
              _({ ...k, from: C });
            }
            (L &&
              T.parentId &&
              g.push({
                id: R,
                parentId: T.parentId,
                rect: {
                  ...F.internals.positionAbsolute,
                  width: F.measured.width ?? 0,
                  height: F.measured.height ?? 0,
                },
              }),
              h.push(H));
          }
          if (g.length > 0) {
            const { parentLookup: R, nodeOrigin: F } = p(),
              T = Nc(g, x, R, F);
            h.push(...T);
          }
          for (const R of M.values()) h = R(h);
          E(h);
        },
        triggerNodeChanges: (w) => {
          const {
            onNodesChange: m,
            setNodes: g,
            nodes: h,
            hasDefaultNodes: x,
            debug: E,
          } = p();
          if (w != null && w.length) {
            if (x) {
              const k = Yg(w, h);
              g(k);
            }
            (E && console.log("React Flow: trigger node changes", w),
              m == null || m(w));
          }
        },
        triggerEdgeChanges: (w) => {
          const {
            onEdgesChange: m,
            setEdges: g,
            edges: h,
            hasDefaultEdges: x,
            debug: E,
          } = p();
          if (w != null && w.length) {
            if (x) {
              const k = Qg(w, h);
              g(k);
            }
            (E && console.log("React Flow: trigger edge changes", w),
              m == null || m(w));
          }
        },
        addSelectedNodes: (w) => {
          const {
            multiSelectionActive: m,
            edgeLookup: g,
            nodeLookup: h,
            triggerNodeChanges: x,
            triggerEdgeChanges: E,
          } = p();
          if (m) {
            const k = w.map((_) => En(_, !0));
            x(k);
            return;
          }
          (x(lr(h, new Set([...w]), !0)), E(lr(g)));
        },
        addSelectedEdges: (w) => {
          const {
            multiSelectionActive: m,
            edgeLookup: g,
            nodeLookup: h,
            triggerNodeChanges: x,
            triggerEdgeChanges: E,
          } = p();
          if (m) {
            const k = w.map((_) => En(_, !0));
            E(k);
            return;
          }
          (E(lr(g, new Set([...w]))), x(lr(h, new Set(), !0)));
        },
        unselectNodesAndEdges: ({ nodes: w, edges: m } = {}) => {
          const {
              edges: g,
              nodes: h,
              nodeLookup: x,
              triggerNodeChanges: E,
              triggerEdgeChanges: k,
            } = p(),
            _ = w || h,
            M = m || g,
            R = [];
          for (const T of _) {
            if (!T.selected) continue;
            const L = x.get(T.id);
            (L && (L.selected = !1), R.push(En(T.id, !1)));
          }
          const F = [];
          for (const T of M) T.selected && F.push(En(T.id, !1));
          (E(R), k(F));
        },
        setMinZoom: (w) => {
          const { panZoom: m, maxZoom: g } = p();
          (m == null || m.setScaleExtent([w, g]), y({ minZoom: w }));
        },
        setMaxZoom: (w) => {
          const { panZoom: m, minZoom: g } = p();
          (m == null || m.setScaleExtent([g, w]), y({ maxZoom: w }));
        },
        setTranslateExtent: (w) => {
          var m;
          ((m = p().panZoom) == null || m.setTranslateExtent(w),
            y({ translateExtent: w }));
        },
        resetSelectedElements: () => {
          const {
            edges: w,
            nodes: m,
            triggerNodeChanges: g,
            triggerEdgeChanges: h,
            elementsSelectable: x,
          } = p();
          if (!x) return;
          const E = m.reduce(
              (_, M) => (M.selected ? [..._, En(M.id, !1)] : _),
              [],
            ),
            k = w.reduce((_, M) => (M.selected ? [..._, En(M.id, !1)] : _), []);
          (g(E), h(k));
        },
        setNodeExtent: (w) => {
          const {
            nodes: m,
            nodeLookup: g,
            parentLookup: h,
            nodeOrigin: x,
            elevateNodesOnSelect: E,
            nodeExtent: k,
            zIndexMode: _,
          } = p();
          (w[0][0] === k[0][0] &&
            w[0][1] === k[0][1] &&
            w[1][0] === k[1][0] &&
            w[1][1] === k[1][1]) ||
            (au(m, g, h, {
              nodeOrigin: x,
              nodeExtent: w,
              elevateNodesOnSelect: E,
              checkEquality: !1,
              zIndexMode: _,
            }),
            y({ nodeExtent: w }));
        },
        panBy: (w) => {
          const {
            transform: m,
            width: g,
            height: h,
            panZoom: x,
            translateExtent: E,
          } = p();
          return bE({
            delta: w,
            panZoom: x,
            transform: m,
            translateExtent: E,
            width: g,
            height: h,
          });
        },
        setCenter: async (w, m, g) => {
          const { width: h, height: x, maxZoom: E, panZoom: k } = p();
          if (!k) return Promise.resolve(!1);
          const _ = typeof (g == null ? void 0 : g.zoom) < "u" ? g.zoom : E;
          return (
            await k.setViewport(
              { x: h / 2 - w * _, y: x / 2 - m * _, zoom: _ },
              {
                duration: g == null ? void 0 : g.duration,
                ease: g == null ? void 0 : g.ease,
                interpolate: g == null ? void 0 : g.interpolate,
              },
            ),
            Promise.resolve(!0)
          );
        },
        cancelConnection: () => {
          y({ connection: { ...cg } });
        },
        updateConnection: (w) => {
          y({ connection: w });
        },
        reset: () => y({ ...Jd() }),
      };
    }, Object.is);
function lN({
  initialNodes: e,
  initialEdges: t,
  defaultNodes: n,
  defaultEdges: r,
  initialWidth: o,
  initialHeight: i,
  initialMinZoom: s,
  initialMaxZoom: l,
  initialFitViewOptions: a,
  fitView: u,
  nodeOrigin: f,
  nodeExtent: c,
  zIndexMode: d,
  children: y,
}) {
  const [p] = I.useState(() =>
    sN({
      nodes: e,
      edges: t,
      defaultNodes: n,
      defaultEdges: r,
      width: o,
      height: i,
      fitView: u,
      minZoom: s,
      maxZoom: l,
      fitViewOptions: a,
      nodeOrigin: f,
      nodeExtent: c,
      zIndexMode: d,
    }),
  );
  return S.jsx(Nk, { value: p, children: S.jsx(Qk, { children: y }) });
}
function aN({
  children: e,
  nodes: t,
  edges: n,
  defaultNodes: r,
  defaultEdges: o,
  width: i,
  height: s,
  fitView: l,
  fitViewOptions: a,
  minZoom: u,
  maxZoom: f,
  nodeOrigin: c,
  nodeExtent: d,
  zIndexMode: y,
}) {
  return I.useContext(ll)
    ? S.jsx(S.Fragment, { children: e })
    : S.jsx(lN, {
        initialNodes: t,
        initialEdges: n,
        defaultNodes: r,
        defaultEdges: o,
        initialWidth: i,
        initialHeight: s,
        fitView: l,
        initialFitViewOptions: a,
        initialMinZoom: u,
        initialMaxZoom: f,
        nodeOrigin: c,
        nodeExtent: d,
        zIndexMode: y,
        children: e,
      });
}
const uN = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  zIndex: 0,
};
function cN(
  {
    nodes: e,
    edges: t,
    defaultNodes: n,
    defaultEdges: r,
    className: o,
    nodeTypes: i,
    edgeTypes: s,
    onNodeClick: l,
    onEdgeClick: a,
    onInit: u,
    onMove: f,
    onMoveStart: c,
    onMoveEnd: d,
    onConnect: y,
    onConnectStart: p,
    onConnectEnd: v,
    onClickConnectStart: w,
    onClickConnectEnd: m,
    onNodeMouseEnter: g,
    onNodeMouseMove: h,
    onNodeMouseLeave: x,
    onNodeContextMenu: E,
    onNodeDoubleClick: k,
    onNodeDragStart: _,
    onNodeDrag: M,
    onNodeDragStop: R,
    onNodesDelete: F,
    onEdgesDelete: T,
    onDelete: L,
    onSelectionChange: H,
    onSelectionDragStart: C,
    onSelectionDrag: z,
    onSelectionDragStop: b,
    onSelectionContextMenu: j,
    onSelectionStart: N,
    onSelectionEnd: P,
    onBeforeDelete: A,
    connectionMode: D,
    connectionLineType: $ = tn.Bezier,
    connectionLineStyle: W,
    connectionLineComponent: U,
    connectionLineContainerStyle: Y,
    deleteKeyCode: Q = "Backspace",
    selectionKeyCode: q = "Shift",
    selectionOnDrag: V = !1,
    selectionMode: G = $o.Full,
    panActivationKeyCode: ne = "Space",
    multiSelectionKeyCode: te = Ho() ? "Meta" : "Control",
    zoomActivationKeyCode: J = Ho() ? "Meta" : "Control",
    snapToGrid: Z,
    snapGrid: le,
    onlyRenderVisibleElements: ce = !1,
    selectNodesOnDrag: se,
    nodesDraggable: Re,
    autoPanOnNodeFocus: Yt,
    nodesConnectable: At,
    nodesFocusable: xn,
    nodeOrigin: Dr = Wg,
    edgesFocusable: $r,
    edgesReconnectable: Fr,
    elementsSelectable: ml = !0,
    defaultViewport: ii = Dk,
    minZoom: Wn = 0.5,
    maxZoom: Hr = 2,
    translateExtent: Ic = Do,
    preventScrolling: U0 = !0,
    nodeExtent: gl,
    defaultMarkerColor: W0 = "#b1b1b7",
    zoomOnScroll: X0 = !0,
    zoomOnPinch: Y0 = !0,
    panOnScroll: Q0 = !1,
    panOnScrollSpeed: K0 = 0.5,
    panOnScrollMode: q0 = Rn.Free,
    zoomOnDoubleClick: G0 = !0,
    panOnDrag: Z0 = !0,
    onPaneClick: J0,
    onPaneMouseEnter: ey,
    onPaneMouseMove: ty,
    onPaneMouseLeave: ny,
    onPaneScroll: ry,
    onPaneContextMenu: oy,
    paneClickDistance: iy = 1,
    nodeClickDistance: sy = 0,
    children: ly,
    onReconnect: ay,
    onReconnectStart: uy,
    onReconnectEnd: cy,
    onEdgeContextMenu: fy,
    onEdgeDoubleClick: dy,
    onEdgeMouseEnter: hy,
    onEdgeMouseMove: py,
    onEdgeMouseLeave: my,
    reconnectRadius: gy = 10,
    onNodesChange: yy,
    onEdgesChange: vy,
    noDragClassName: xy = "nodrag",
    noWheelClassName: wy = "nowheel",
    noPanClassName: Lc = "nopan",
    fitView: zc,
    fitViewOptions: jc,
    connectOnClick: Sy,
    attributionPosition: Ey,
    proOptions: ky,
    defaultEdgeOptions: _y,
    elevateNodesOnSelect: Ny = !0,
    elevateEdgesOnSelect: Cy = !1,
    disableKeyboardA11y: Oc = !1,
    autoPanOnConnect: Py,
    autoPanOnNodeDrag: My,
    autoPanSpeed: by,
    connectionRadius: Ty,
    isValidConnection: Ry,
    onError: Ay,
    style: Iy,
    id: Dc,
    nodeDragThreshold: Ly,
    connectionDragThreshold: zy,
    viewport: jy,
    onViewportChange: Oy,
    width: Dy,
    height: $y,
    colorMode: Fy = "light",
    debug: Hy,
    onScroll: si,
    ariaLabelConfig: By,
    zIndexMode: $c = "basic",
    ...Vy
  },
  Uy,
) {
  const yl = Dc || "1",
    Wy = Bk(Fy),
    Xy = I.useCallback(
      (Fc) => {
        (Fc.currentTarget.scrollTo({ top: 0, left: 0, behavior: "instant" }),
          si == null || si(Fc));
      },
      [si],
    );
  return S.jsx("div", {
    "data-testid": "rf__wrapper",
    ...Vy,
    onScroll: Xy,
    style: { ...Iy, ...uN },
    ref: Uy,
    className: ke(["react-flow", o, Wy]),
    id: Dc,
    role: "application",
    children: S.jsxs(aN, {
      nodes: e,
      edges: t,
      width: Dy,
      height: $y,
      fitView: zc,
      fitViewOptions: jc,
      minZoom: Wn,
      maxZoom: Hr,
      nodeOrigin: Dr,
      nodeExtent: gl,
      zIndexMode: $c,
      children: [
        S.jsx(iN, {
          onInit: u,
          onNodeClick: l,
          onEdgeClick: a,
          onNodeMouseEnter: g,
          onNodeMouseMove: h,
          onNodeMouseLeave: x,
          onNodeContextMenu: E,
          onNodeDoubleClick: k,
          nodeTypes: i,
          edgeTypes: s,
          connectionLineType: $,
          connectionLineStyle: W,
          connectionLineComponent: U,
          connectionLineContainerStyle: Y,
          selectionKeyCode: q,
          selectionOnDrag: V,
          selectionMode: G,
          deleteKeyCode: Q,
          multiSelectionKeyCode: te,
          panActivationKeyCode: ne,
          zoomActivationKeyCode: J,
          onlyRenderVisibleElements: ce,
          defaultViewport: ii,
          translateExtent: Ic,
          minZoom: Wn,
          maxZoom: Hr,
          preventScrolling: U0,
          zoomOnScroll: X0,
          zoomOnPinch: Y0,
          zoomOnDoubleClick: G0,
          panOnScroll: Q0,
          panOnScrollSpeed: K0,
          panOnScrollMode: q0,
          panOnDrag: Z0,
          onPaneClick: J0,
          onPaneMouseEnter: ey,
          onPaneMouseMove: ty,
          onPaneMouseLeave: ny,
          onPaneScroll: ry,
          onPaneContextMenu: oy,
          paneClickDistance: iy,
          nodeClickDistance: sy,
          onSelectionContextMenu: j,
          onSelectionStart: N,
          onSelectionEnd: P,
          onReconnect: ay,
          onReconnectStart: uy,
          onReconnectEnd: cy,
          onEdgeContextMenu: fy,
          onEdgeDoubleClick: dy,
          onEdgeMouseEnter: hy,
          onEdgeMouseMove: py,
          onEdgeMouseLeave: my,
          reconnectRadius: gy,
          defaultMarkerColor: W0,
          noDragClassName: xy,
          noWheelClassName: wy,
          noPanClassName: Lc,
          rfId: yl,
          disableKeyboardA11y: Oc,
          nodeExtent: gl,
          viewport: jy,
          onViewportChange: Oy,
        }),
        S.jsx(Hk, {
          nodes: e,
          edges: t,
          defaultNodes: n,
          defaultEdges: r,
          onConnect: y,
          onConnectStart: p,
          onConnectEnd: v,
          onClickConnectStart: w,
          onClickConnectEnd: m,
          nodesDraggable: Re,
          autoPanOnNodeFocus: Yt,
          nodesConnectable: At,
          nodesFocusable: xn,
          edgesFocusable: $r,
          edgesReconnectable: Fr,
          elementsSelectable: ml,
          elevateNodesOnSelect: Ny,
          elevateEdgesOnSelect: Cy,
          minZoom: Wn,
          maxZoom: Hr,
          nodeExtent: gl,
          onNodesChange: yy,
          onEdgesChange: vy,
          snapToGrid: Z,
          snapGrid: le,
          connectionMode: D,
          translateExtent: Ic,
          connectOnClick: Sy,
          defaultEdgeOptions: _y,
          fitView: zc,
          fitViewOptions: jc,
          onNodesDelete: F,
          onEdgesDelete: T,
          onDelete: L,
          onNodeDragStart: _,
          onNodeDrag: M,
          onNodeDragStop: R,
          onSelectionDrag: z,
          onSelectionDragStart: C,
          onSelectionDragStop: b,
          onMove: f,
          onMoveStart: c,
          onMoveEnd: d,
          noPanClassName: Lc,
          nodeOrigin: Dr,
          rfId: yl,
          autoPanOnConnect: Py,
          autoPanOnNodeDrag: My,
          autoPanSpeed: by,
          onError: Ay,
          connectionRadius: Ty,
          isValidConnection: Ry,
          selectNodesOnDrag: se,
          nodeDragThreshold: Ly,
          connectionDragThreshold: zy,
          onBeforeDelete: A,
          debug: Hy,
          ariaLabelConfig: By,
          zIndexMode: $c,
        }),
        S.jsx(Ok, { onSelectionChange: H }),
        ly,
        S.jsx(Ak, { proOptions: ky, position: Ey }),
        S.jsx(Rk, { rfId: yl, disableKeyboardA11y: Oc }),
      ],
    }),
  });
}
var fN = Kg(cN);
function dN({ dimensions: e, lineWidth: t, variant: n, className: r }) {
  return S.jsx("path", {
    strokeWidth: t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`,
    className: ke(["react-flow__background-pattern", n, r]),
  });
}
function hN({ radius: e, className: t }) {
  return S.jsx("circle", {
    cx: e,
    cy: e,
    r: e,
    className: ke(["react-flow__background-pattern", "dots", t]),
  });
}
var hn;
(function (e) {
  ((e.Lines = "lines"), (e.Dots = "dots"), (e.Cross = "cross"));
})(hn || (hn = {}));
const pN = { [hn.Dots]: 1, [hn.Lines]: 1, [hn.Cross]: 6 },
  mN = (e) => ({ transform: e.transform, patternId: `pattern-${e.rfId}` });
function x0({
  id: e,
  variant: t = hn.Dots,
  gap: n = 20,
  size: r,
  lineWidth: o = 1,
  offset: i = 0,
  color: s,
  bgColor: l,
  style: a,
  className: u,
  patternClassName: f,
}) {
  const c = I.useRef(null),
    { transform: d, patternId: y } = oe(mN, pe),
    p = r || pN[t],
    v = t === hn.Dots,
    w = t === hn.Cross,
    m = Array.isArray(n) ? n : [n, n],
    g = [m[0] * d[2] || 1, m[1] * d[2] || 1],
    h = p * d[2],
    x = Array.isArray(i) ? i : [i, i],
    E = w ? [h, h] : g,
    k = [x[0] * d[2] || 1 + E[0] / 2, x[1] * d[2] || 1 + E[1] / 2],
    _ = `${y}${e || ""}`;
  return S.jsxs("svg", {
    className: ke(["react-flow__background", u]),
    style: {
      ...a,
      ...ul,
      "--xy-background-color-props": l,
      "--xy-background-pattern-color-props": s,
    },
    ref: c,
    "data-testid": "rf__background",
    children: [
      S.jsx("pattern", {
        id: _,
        x: d[0] % g[0],
        y: d[1] % g[1],
        width: g[0],
        height: g[1],
        patternUnits: "userSpaceOnUse",
        patternTransform: `translate(-${k[0]},-${k[1]})`,
        children: v
          ? S.jsx(hN, { radius: h / 2, className: f })
          : S.jsx(dN, {
              dimensions: E,
              lineWidth: o,
              variant: t,
              className: f,
            }),
      }),
      S.jsx("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: `url(#${_})`,
      }),
    ],
  });
}
x0.displayName = "Background";
const gN = I.memo(x0);
function yN() {
  return S.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    children: S.jsx("path", {
      d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
    }),
  });
}
function vN() {
  return S.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 5",
    children: S.jsx("path", { d: "M0 0h32v4.2H0z" }),
  });
}
function xN() {
  return S.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 30",
    children: S.jsx("path", {
      d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
    }),
  });
}
function wN() {
  return S.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 32",
    children: S.jsx("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
    }),
  });
}
function SN() {
  return S.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 32",
    children: S.jsx("path", {
      d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
    }),
  });
}
function Ai({ children: e, className: t, ...n }) {
  return S.jsx("button", {
    type: "button",
    className: ke(["react-flow__controls-button", t]),
    ...n,
    children: e,
  });
}
const EN = (e) => ({
  isInteractive: e.nodesDraggable || e.nodesConnectable || e.elementsSelectable,
  minZoomReached: e.transform[2] <= e.minZoom,
  maxZoomReached: e.transform[2] >= e.maxZoom,
  ariaLabelConfig: e.ariaLabelConfig,
});
function w0({
  style: e,
  showZoom: t = !0,
  showFitView: n = !0,
  showInteractive: r = !0,
  fitViewOptions: o,
  onZoomIn: i,
  onZoomOut: s,
  onFitView: l,
  onInteractiveChange: a,
  className: u,
  children: f,
  position: c = "bottom-left",
  orientation: d = "vertical",
  "aria-label": y,
}) {
  const p = me(),
    {
      isInteractive: v,
      minZoomReached: w,
      maxZoomReached: m,
      ariaLabelConfig: g,
    } = oe(EN, pe),
    { zoomIn: h, zoomOut: x, fitView: E } = Cc(),
    k = () => {
      (h(), i == null || i());
    },
    _ = () => {
      (x(), s == null || s());
    },
    M = () => {
      (E(o), l == null || l());
    },
    R = () => {
      (p.setState({
        nodesDraggable: !v,
        nodesConnectable: !v,
        elementsSelectable: !v,
      }),
        a == null || a(!v));
    },
    F = d === "horizontal" ? "horizontal" : "vertical";
  return S.jsxs(al, {
    className: ke(["react-flow__controls", F, u]),
    position: c,
    style: e,
    "data-testid": "rf__controls",
    "aria-label": y ?? g["controls.ariaLabel"],
    children: [
      t &&
        S.jsxs(S.Fragment, {
          children: [
            S.jsx(Ai, {
              onClick: k,
              className: "react-flow__controls-zoomin",
              title: g["controls.zoomIn.ariaLabel"],
              "aria-label": g["controls.zoomIn.ariaLabel"],
              disabled: m,
              children: S.jsx(yN, {}),
            }),
            S.jsx(Ai, {
              onClick: _,
              className: "react-flow__controls-zoomout",
              title: g["controls.zoomOut.ariaLabel"],
              "aria-label": g["controls.zoomOut.ariaLabel"],
              disabled: w,
              children: S.jsx(vN, {}),
            }),
          ],
        }),
      n &&
        S.jsx(Ai, {
          className: "react-flow__controls-fitview",
          onClick: M,
          title: g["controls.fitView.ariaLabel"],
          "aria-label": g["controls.fitView.ariaLabel"],
          children: S.jsx(xN, {}),
        }),
      r &&
        S.jsx(Ai, {
          className: "react-flow__controls-interactive",
          onClick: R,
          title: g["controls.interactive.ariaLabel"],
          "aria-label": g["controls.interactive.ariaLabel"],
          children: v ? S.jsx(SN, {}) : S.jsx(wN, {}),
        }),
      f,
    ],
  });
}
w0.displayName = "Controls";
const kN = I.memo(w0);
function _N({
  id: e,
  x: t,
  y: n,
  width: r,
  height: o,
  style: i,
  color: s,
  strokeColor: l,
  strokeWidth: a,
  className: u,
  borderRadius: f,
  shapeRendering: c,
  selected: d,
  onClick: y,
}) {
  const { background: p, backgroundColor: v } = i || {},
    w = s || p || v;
  return S.jsx("rect", {
    className: ke(["react-flow__minimap-node", { selected: d }, u]),
    x: t,
    y: n,
    rx: f,
    ry: f,
    width: r,
    height: o,
    style: { fill: w, stroke: l, strokeWidth: a },
    shapeRendering: c,
    onClick: y ? (m) => y(m, e) : void 0,
  });
}
const NN = I.memo(_N),
  CN = (e) => e.nodes.map((t) => t.id),
  Jl = (e) => (e instanceof Function ? e : () => e);
function PN({
  nodeStrokeColor: e,
  nodeColor: t,
  nodeClassName: n = "",
  nodeBorderRadius: r = 5,
  nodeStrokeWidth: o,
  nodeComponent: i = NN,
  onClick: s,
}) {
  const l = oe(CN, pe),
    a = Jl(t),
    u = Jl(e),
    f = Jl(n),
    c =
      typeof window > "u" || window.chrome
        ? "crispEdges"
        : "geometricPrecision";
  return S.jsx(S.Fragment, {
    children: l.map((d) =>
      S.jsx(
        bN,
        {
          id: d,
          nodeColorFunc: a,
          nodeStrokeColorFunc: u,
          nodeClassNameFunc: f,
          nodeBorderRadius: r,
          nodeStrokeWidth: o,
          NodeComponent: i,
          onClick: s,
          shapeRendering: c,
        },
        d,
      ),
    ),
  });
}
function MN({
  id: e,
  nodeColorFunc: t,
  nodeStrokeColorFunc: n,
  nodeClassNameFunc: r,
  nodeBorderRadius: o,
  nodeStrokeWidth: i,
  shapeRendering: s,
  NodeComponent: l,
  onClick: a,
}) {
  const {
    node: u,
    x: f,
    y: c,
    width: d,
    height: y,
  } = oe((p) => {
    const v = p.nodeLookup.get(e);
    if (!v) return { node: void 0, x: 0, y: 0, width: 0, height: 0 };
    const w = v.internals.userNode,
      { x: m, y: g } = v.internals.positionAbsolute,
      { width: h, height: x } = Xt(w);
    return { node: w, x: m, y: g, width: h, height: x };
  }, pe);
  return !u || u.hidden || !yg(u)
    ? null
    : S.jsx(l, {
        x: f,
        y: c,
        width: d,
        height: y,
        style: u.style,
        selected: !!u.selected,
        className: r(u),
        color: t(u),
        borderRadius: o,
        strokeColor: n(u),
        strokeWidth: i,
        shapeRendering: s,
        onClick: a,
        id: u.id,
      });
}
const bN = I.memo(MN);
var TN = I.memo(PN);
const RN = 200,
  AN = 150,
  IN = (e) => !e.hidden,
  LN = (e) => {
    const t = {
      x: -e.transform[0] / e.transform[2],
      y: -e.transform[1] / e.transform[2],
      width: e.width / e.transform[2],
      height: e.height / e.transform[2],
    };
    return {
      viewBB: t,
      boundingRect:
        e.nodeLookup.size > 0 ? gg(Go(e.nodeLookup, { filter: IN }), t) : t,
      rfId: e.rfId,
      panZoom: e.panZoom,
      translateExtent: e.translateExtent,
      flowWidth: e.width,
      flowHeight: e.height,
      ariaLabelConfig: e.ariaLabelConfig,
    };
  },
  zN = "react-flow__minimap-desc";
function S0({
  style: e,
  className: t,
  nodeStrokeColor: n,
  nodeColor: r,
  nodeClassName: o = "",
  nodeBorderRadius: i = 5,
  nodeStrokeWidth: s,
  nodeComponent: l,
  bgColor: a,
  maskColor: u,
  maskStrokeColor: f,
  maskStrokeWidth: c,
  position: d = "bottom-right",
  onClick: y,
  onNodeClick: p,
  pannable: v = !1,
  zoomable: w = !1,
  ariaLabel: m,
  inversePan: g,
  zoomStep: h = 1,
  offsetScale: x = 5,
}) {
  const E = me(),
    k = I.useRef(null),
    {
      boundingRect: _,
      viewBB: M,
      rfId: R,
      panZoom: F,
      translateExtent: T,
      flowWidth: L,
      flowHeight: H,
      ariaLabelConfig: C,
    } = oe(LN, pe),
    z = (e == null ? void 0 : e.width) ?? RN,
    b = (e == null ? void 0 : e.height) ?? AN,
    j = _.width / z,
    N = _.height / b,
    P = Math.max(j, N),
    A = P * z,
    D = P * b,
    $ = x * P,
    W = _.x - (A - _.width) / 2 - $,
    U = _.y - (D - _.height) / 2 - $,
    Y = A + $ * 2,
    Q = D + $ * 2,
    q = `${zN}-${R}`,
    V = I.useRef(0),
    G = I.useRef();
  ((V.current = P),
    I.useEffect(() => {
      if (k.current && F)
        return (
          (G.current = DE({
            domNode: k.current,
            panZoom: F,
            getTransform: () => E.getState().transform,
            getViewScale: () => V.current,
          })),
          () => {
            var Z;
            (Z = G.current) == null || Z.destroy();
          }
        );
    }, [F]),
    I.useEffect(() => {
      var Z;
      (Z = G.current) == null ||
        Z.update({
          translateExtent: T,
          width: L,
          height: H,
          inversePan: g,
          pannable: v,
          zoomStep: h,
          zoomable: w,
        });
    }, [v, w, g, h, T, L, H]));
  const ne = y
      ? (Z) => {
          var se;
          const [le, ce] = ((se = G.current) == null
            ? void 0
            : se.pointer(Z)) || [0, 0];
          y(Z, { x: le, y: ce });
        }
      : void 0,
    te = p
      ? I.useCallback((Z, le) => {
          const ce = E.getState().nodeLookup.get(le).internals.userNode;
          p(Z, ce);
        }, [])
      : void 0,
    J = m ?? C["minimap.ariaLabel"];
  return S.jsx(al, {
    position: d,
    style: {
      ...e,
      "--xy-minimap-background-color-props": typeof a == "string" ? a : void 0,
      "--xy-minimap-mask-background-color-props":
        typeof u == "string" ? u : void 0,
      "--xy-minimap-mask-stroke-color-props": typeof f == "string" ? f : void 0,
      "--xy-minimap-mask-stroke-width-props":
        typeof c == "number" ? c * P : void 0,
      "--xy-minimap-node-background-color-props":
        typeof r == "string" ? r : void 0,
      "--xy-minimap-node-stroke-color-props": typeof n == "string" ? n : void 0,
      "--xy-minimap-node-stroke-width-props": typeof s == "number" ? s : void 0,
    },
    className: ke(["react-flow__minimap", t]),
    "data-testid": "rf__minimap",
    children: S.jsxs("svg", {
      width: z,
      height: b,
      viewBox: `${W} ${U} ${Y} ${Q}`,
      className: "react-flow__minimap-svg",
      role: "img",
      "aria-labelledby": q,
      ref: k,
      onClick: ne,
      children: [
        J && S.jsx("title", { id: q, children: J }),
        S.jsx(TN, {
          onClick: te,
          nodeColor: r,
          nodeStrokeColor: n,
          nodeBorderRadius: i,
          nodeClassName: o,
          nodeStrokeWidth: s,
          nodeComponent: l,
        }),
        S.jsx("path", {
          className: "react-flow__minimap-mask",
          d: `M${W - $},${U - $}h${Y + $ * 2}v${Q + $ * 2}h${-Y - $ * 2}z
        M${M.x},${M.y}h${M.width}v${M.height}h${-M.width}z`,
          fillRule: "evenodd",
          pointerEvents: "none",
        }),
      ],
    }),
  });
}
S0.displayName = "MiniMap";
I.memo(S0);
const jN = (e) => (t) => (e ? `${Math.max(1 / t.transform[2], 1)}` : void 0),
  ON = { [br.Line]: "right", [br.Handle]: "bottom-right" };
function DN({
  nodeId: e,
  position: t,
  variant: n = br.Handle,
  className: r,
  style: o = void 0,
  children: i,
  color: s,
  minWidth: l = 10,
  minHeight: a = 10,
  maxWidth: u = Number.MAX_VALUE,
  maxHeight: f = Number.MAX_VALUE,
  keepAspectRatio: c = !1,
  resizeDirection: d,
  autoScale: y = !0,
  shouldResize: p,
  onResizeStart: v,
  onResize: w,
  onResizeEnd: m,
}) {
  const g = Jg(),
    h = typeof e == "string" ? e : g,
    x = me(),
    E = I.useRef(null),
    k = n === br.Handle,
    _ = oe(I.useCallback(jN(k && y), [k, y]), pe),
    M = I.useRef(null),
    R = t ?? ON[n];
  I.useEffect(() => {
    if (!(!E.current || !h))
      return (
        M.current ||
          (M.current = ZE({
            domNode: E.current,
            nodeId: h,
            getStoreItems: () => {
              const {
                nodeLookup: T,
                transform: L,
                snapGrid: H,
                snapToGrid: C,
                nodeOrigin: z,
                domNode: b,
              } = x.getState();
              return {
                nodeLookup: T,
                transform: L,
                snapGrid: H,
                snapToGrid: C,
                nodeOrigin: z,
                paneDomNode: b,
              };
            },
            onChange: (T, L) => {
              const {
                  triggerNodeChanges: H,
                  nodeLookup: C,
                  parentLookup: z,
                  nodeOrigin: b,
                } = x.getState(),
                j = [],
                N = { x: T.x, y: T.y },
                P = C.get(h);
              if (P && P.expandParent && P.parentId) {
                const A = P.origin ?? b,
                  D = T.width ?? P.measured.width ?? 0,
                  $ = T.height ?? P.measured.height ?? 0,
                  W = {
                    id: P.id,
                    parentId: P.parentId,
                    rect: {
                      width: D,
                      height: $,
                      ...vg(
                        { x: T.x ?? P.position.x, y: T.y ?? P.position.y },
                        { width: D, height: $ },
                        P.parentId,
                        C,
                        A,
                      ),
                    },
                  },
                  U = Nc([W], C, z, b);
                (j.push(...U),
                  (N.x = T.x ? Math.max(A[0] * D, T.x) : void 0),
                  (N.y = T.y ? Math.max(A[1] * $, T.y) : void 0));
              }
              if (N.x !== void 0 && N.y !== void 0) {
                const A = { id: h, type: "position", position: { ...N } };
                j.push(A);
              }
              if (T.width !== void 0 && T.height !== void 0) {
                const D = {
                  id: h,
                  type: "dimensions",
                  resizing: !0,
                  setAttributes: d
                    ? d === "horizontal"
                      ? "width"
                      : "height"
                    : !0,
                  dimensions: { width: T.width, height: T.height },
                };
                j.push(D);
              }
              for (const A of L) {
                const D = { ...A, type: "position" };
                j.push(D);
              }
              H(j);
            },
            onEnd: ({ width: T, height: L }) => {
              const H = {
                id: h,
                type: "dimensions",
                resizing: !1,
                dimensions: { width: T, height: L },
              };
              x.getState().triggerNodeChanges([H]);
            },
          })),
        M.current.update({
          controlPosition: R,
          boundaries: { minWidth: l, minHeight: a, maxWidth: u, maxHeight: f },
          keepAspectRatio: c,
          resizeDirection: d,
          onResizeStart: v,
          onResize: w,
          onResizeEnd: m,
          shouldResize: p,
        }),
        () => {
          var T;
          (T = M.current) == null || T.destroy();
        }
      );
  }, [R, l, a, u, f, c, v, w, m, p]);
  const F = R.split("-");
  return S.jsx("div", {
    className: ke(["react-flow__resize-control", "nodrag", ...F, n, r]),
    ref: E,
    style: {
      ...o,
      scale: _,
      ...(s && { [k ? "backgroundColor" : "borderColor"]: s }),
    },
    children: i,
  });
}
I.memo(DN);
const $N = ({ data: e }) => {
  var r;
  const t = e.status === "error",
    n = e.status === "verified";
  return S.jsxs("div", {
    className: `
      relative w-80 p-6 rounded-3xl bg-ceramic-base shadow-skeuo-outer border border-white
      transition-all duration-300 ease-out hover:shadow-skeuo-inner hover:translate-y-px
      ${t ? "shadow-[10px_10px_20px_#D5D5D0,-10px_-10px_20px_#FFFFFF,0_0_25px_rgba(255,42,42,0.3)] border-red-300" : ""}
    `,
    children: [
      S.jsx(Rr, {
        type: "target",
        position: K.Top,
        className:
          "w-4 h-4 !bg-ceramic-base !border-2 !border-cloud-accent shadow-skeuo-inner rounded-full",
      }),
      S.jsxs("div", {
        className: "relative z-10 space-y-4",
        children: [
          S.jsxs("div", {
            className: "flex justify-between items-start",
            children: [
              S.jsx("h3", {
                className:
                  "text-xl font-bold tracking-tight text-ink-dark leading-snug",
                children: e.title || "Untitled Milestone",
              }),
              S.jsx("div", {
                className: `w-4 h-4 rounded-full glass-panel-light shadow-skeuo-outer ${t ? "bg-[#ff2a2a] animate-pulse shadow-[0_0_15px_#ff2a2a]" : n ? "bg-green-400 shadow-[0_0_15px_#4ade80]" : "bg-yellow-500 animate-pulse"}`,
                children: S.jsx("div", {
                  className:
                    "w-full h-full rounded-full bg-white opacity-40 blur-[2px]",
                }),
              }),
            ],
          }),
          S.jsx("p", {
            className: "text-sm text-ink-muted leading-relaxed font-medium",
            children: e.description || "No description provided.",
          }),
          S.jsx("div", {
            className:
              "mt-5 p-3 rounded-xl bg-ceramic-dark shadow-skeuo-inner flex gap-2.5 flex-wrap",
            children:
              ((r = e.techStack) == null
                ? void 0
                : r.map((o, i) =>
                    S.jsx(
                      "span",
                      {
                        className:
                          "text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-white/70 text-cloud-accent border border-white/30 shadow-sm",
                        children: o,
                      },
                      i,
                    ),
                  )) ||
              S.jsx("span", {
                className: "text-[10px] text-gray-500 italic",
                children: "No stack defined",
              }),
          }),
        ],
      }),
      S.jsx(Rr, {
        type: "source",
        position: K.Bottom,
        className:
          "w-4 h-4 !bg-ceramic-base !border-2 !border-cloud-accent shadow-skeuo-inner rounded-full",
      }),
    ],
  });
};
function FN({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: r,
  sourcePosition: o,
  targetPosition: i,
  style: s = {},
  markerEnd: l,
}) {
  const [a] = wc({
    sourceX: e,
    sourceY: t,
    sourcePosition: o,
    targetPosition: i,
    targetX: n,
    targetY: r,
  });
  return S.jsxs(S.Fragment, {
    children: [
      S.jsx(Ar, {
        path: a,
        markerEnd: l,
        style: {
          ...s,
          strokeWidth: 12,
          stroke: "rgba(0, 240, 255, 0.1)",
          strokeLinecap: "round",
          filter: "drop-shadow(0px 12px 8px rgba(0,0,0,0.8))",
        },
      }),
      S.jsx(Ar, {
        path: a,
        markerEnd: l,
        style: {
          ...s,
          strokeWidth: 4,
          stroke: "#00f0ff",
          strokeLinecap: "round",
          opacity: 0.9,
        },
      }),
    ],
  });
}
const HN = { skeuomorphic: $N },
  BN = { patchCable: FN },
  VN = [
    {
      id: "1",
      type: "skeuomorphic",
      position: { x: 250, y: 100 },
      data: {
        title: "Project Initiation",
        description:
          "The raw idea is parsed and the base architecture is drafted.",
        techStack: ["Groq Llama-3", "FastAPI"],
        status: "verified",
      },
    },
    {
      id: "2",
      type: "skeuomorphic",
      position: { x: 250, y: 450 },
      data: {
        title: "Database Schema",
        description: "Generating UUID-based MySQL tables with SQLAlchemy.",
        techStack: ["MySQL", "SQLAlchemy"],
        status: "pending",
      },
    },
  ];
function UN({ idea: e }) {
  const [t, n] = I.useState((e == null ? void 0 : e.nodes) || VN),
    [r, o] = I.useState((e == null ? void 0 : e.edges) || []),
    i = I.useCallback((a) => n((u) => Yg(a, u)), []),
    s = I.useCallback((a) => o((u) => Qg(a, u)), []),
    l = I.useCallback((a) => o((u) => _g({ ...a, type: "patchCable" }, u)), []);
  return S.jsxs("div", {
    className: "w-full h-full bg-ceramic-base relative",
    children: [
      S.jsxs(fN, {
        nodes: t,
        edges: r,
        onNodesChange: i,
        onEdgesChange: s,
        onConnect: l,
        nodeTypes: HN,
        edgeTypes: BN,
        fitView: !0,
        proOptions: { hideAttribution: !0 },
        children: [
          S.jsx(gN, { color: "#DEDEC9", gap: 30, size: 1 }),
          S.jsx(kN, {}),
        ],
      }),
      S.jsx("div", {
        className: "absolute top-8 left-8 z-10 pointer-events-none",
        children: S.jsxs("h2", {
          className:
            "text-2xl font-black text-ink-dark tracking-[0.3em] uppercase opacity-40",
          children: [
            "FORGE ",
            S.jsx("span", {
              className: "text-cloud-accent font-medium",
              children: "WORKSPACE",
            }),
          ],
        }),
      }),
    ],
  });
}
function E0(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: WN } = Object.prototype,
  { getPrototypeOf: Mc } = Object,
  { iterator: cl, toStringTag: k0 } = Symbol,
  fl = ((e) => (t) => {
    const n = WN.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Et = (e) => ((e = e.toLowerCase()), (t) => fl(t) === e),
  dl = (e) => (t) => typeof t === e,
  { isArray: Or } = Array,
  Ir = dl("undefined");
function ei(e) {
  return (
    e !== null &&
    !Ir(e) &&
    e.constructor !== null &&
    !Ir(e.constructor) &&
    Ye(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const _0 = Et("ArrayBuffer");
function XN(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && _0(e.buffer)),
    t
  );
}
const YN = dl("string"),
  Ye = dl("function"),
  N0 = dl("number"),
  ti = (e) => e !== null && typeof e == "object",
  QN = (e) => e === !0 || e === !1,
  Gi = (e) => {
    if (fl(e) !== "object") return !1;
    const t = Mc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(k0 in e) &&
      !(cl in e)
    );
  },
  KN = (e) => {
    if (!ti(e) || ei(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  qN = Et("Date"),
  GN = Et("File"),
  ZN = (e) => !!(e && typeof e.uri < "u"),
  JN = (e) => e && typeof e.getParts < "u",
  eC = Et("Blob"),
  tC = Et("FileList"),
  nC = (e) => ti(e) && Ye(e.pipe);
function rC() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
}
const eh = rC(),
  th = typeof eh.FormData < "u" ? eh.FormData : void 0,
  oC = (e) => {
    let t;
    return (
      e &&
      ((th && e instanceof th) ||
        (Ye(e.append) &&
          ((t = fl(e)) === "formdata" ||
            (t === "object" &&
              Ye(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  iC = Et("URLSearchParams"),
  [sC, lC, aC, uC] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Et,
  ),
  cC = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ni(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Or(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    if (ei(e)) return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let l;
    for (r = 0; r < s; r++) ((l = i[r]), t.call(null, e[l], l, e));
  }
}
function C0(e, t) {
  if (ei(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Pn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  P0 = (e) => !Ir(e) && e !== Pn;
function fu() {
  const { caseless: e, skipUndefined: t } = (P0(this) && this) || {},
    n = {},
    r = (o, i) => {
      if (i === "__proto__" || i === "constructor" || i === "prototype") return;
      const s = (e && C0(n, i)) || i;
      Gi(n[s]) && Gi(o)
        ? (n[s] = fu(n[s], o))
        : Gi(o)
          ? (n[s] = fu({}, o))
          : Or(o)
            ? (n[s] = o.slice())
            : (!t || !Ir(o)) && (n[s] = o);
    };
  for (let o = 0, i = arguments.length; o < i; o++)
    arguments[o] && ni(arguments[o], r);
  return n;
}
const fC = (e, t, n, { allOwnKeys: r } = {}) => (
    ni(
      t,
      (o, i) => {
        n && Ye(o)
          ? Object.defineProperty(e, i, {
              value: E0(o, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, i, {
              value: o,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r },
    ),
    e
  ),
  dC = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  hC = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, "constructor", {
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n));
  },
  pC = (e, t, n, r) => {
    let o, i, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        ((s = o[i]),
          (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0)));
      e = n !== !1 && Mc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  mC = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  gC = (e) => {
    if (!e) return null;
    if (Or(e)) return e;
    let t = e.length;
    if (!N0(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  yC = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Mc(Uint8Array)),
  vC = (e, t) => {
    const r = (e && e[cl]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  xC = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  wC = Et("HTMLFormElement"),
  SC = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  nh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  EC = Et("RegExp"),
  M0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (ni(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r));
  },
  kC = (e) => {
    M0(e, (t, n) => {
      if (Ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ye(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  _C = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return (Or(e) ? r(e) : r(String(e).split(t)), n);
  },
  NC = () => {},
  CC = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function PC(e) {
  return !!(e && Ye(e.append) && e[k0] === "FormData" && e[cl]);
}
const MC = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (ti(r)) {
          if (t.indexOf(r) >= 0) return;
          if (ei(r)) return r;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Or(r) ? [] : {};
            return (
              ni(r, (s, l) => {
                const a = n(s, o + 1);
                !Ir(a) && (i[l] = a);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  bC = Et("AsyncFunction"),
  TC = (e) => e && (ti(e) || Ye(e)) && Ye(e.then) && Ye(e.catch),
  b0 = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            Pn.addEventListener(
              "message",
              ({ source: o, data: i }) => {
                o === Pn && i === n && r.length && r.shift()();
              },
              !1,
            ),
            (o) => {
              (r.push(o), Pn.postMessage(n, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ye(Pn.postMessage),
  ),
  RC =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Pn)
      : (typeof process < "u" && process.nextTick) || b0,
  AC = (e) => e != null && Ye(e[cl]),
  O = {
    isArray: Or,
    isArrayBuffer: _0,
    isBuffer: ei,
    isFormData: oC,
    isArrayBufferView: XN,
    isString: YN,
    isNumber: N0,
    isBoolean: QN,
    isObject: ti,
    isPlainObject: Gi,
    isEmptyObject: KN,
    isReadableStream: sC,
    isRequest: lC,
    isResponse: aC,
    isHeaders: uC,
    isUndefined: Ir,
    isDate: qN,
    isFile: GN,
    isReactNativeBlob: ZN,
    isReactNative: JN,
    isBlob: eC,
    isRegExp: EC,
    isFunction: Ye,
    isStream: nC,
    isURLSearchParams: iC,
    isTypedArray: yC,
    isFileList: tC,
    forEach: ni,
    merge: fu,
    extend: fC,
    trim: cC,
    stripBOM: dC,
    inherits: hC,
    toFlatObject: pC,
    kindOf: fl,
    kindOfTest: Et,
    endsWith: mC,
    toArray: gC,
    forEachEntry: vC,
    matchAll: xC,
    isHTMLForm: wC,
    hasOwnProperty: nh,
    hasOwnProp: nh,
    reduceDescriptors: M0,
    freezeMethods: kC,
    toObjectSet: _C,
    toCamelCase: SC,
    noop: NC,
    toFiniteNumber: CC,
    findKey: C0,
    global: Pn,
    isContextDefined: P0,
    isSpecCompliantForm: PC,
    toJSONObject: MC,
    isAsyncFn: bC,
    isThenable: TC,
    setImmediate: b0,
    asap: RC,
    isIterable: AC,
  };
let ee = class T0 extends Error {
  static from(t, n, r, o, i, s) {
    const l = new T0(t.message, n || t.code, r, o, i);
    return (
      (l.cause = t),
      (l.name = t.name),
      t.status != null && l.status == null && (l.status = t.status),
      s && Object.assign(l, s),
      l
    );
  }
  constructor(t, n, r, o, i) {
    (super(t),
      Object.defineProperty(this, "message", {
        value: t,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = "AxiosError"),
      (this.isAxiosError = !0),
      n && (this.code = n),
      r && (this.config = r),
      o && (this.request = o),
      i && ((this.response = i), (this.status = i.status)));
  }
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: O.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  }
};
ee.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
ee.ERR_BAD_OPTION = "ERR_BAD_OPTION";
ee.ECONNABORTED = "ECONNABORTED";
ee.ETIMEDOUT = "ETIMEDOUT";
ee.ERR_NETWORK = "ERR_NETWORK";
ee.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
ee.ERR_DEPRECATED = "ERR_DEPRECATED";
ee.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
ee.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
ee.ERR_CANCELED = "ERR_CANCELED";
ee.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
ee.ERR_INVALID_URL = "ERR_INVALID_URL";
const IC = null;
function du(e) {
  return O.isPlainObject(e) || O.isArray(e);
}
function R0(e) {
  return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ea(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return ((o = R0(o)), !n && i ? "[" + o + "]" : o);
        })
        .join(n ? "." : "")
    : t;
}
function LC(e) {
  return O.isArray(e) && !e.some(du);
}
const zC = O.toFlatObject(O, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function hl(e, t, n) {
  if (!O.isObject(e)) throw new TypeError("target must be an object");
  ((t = t || new FormData()),
    (n = O.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, w) {
        return !O.isUndefined(w[v]);
      },
    )));
  const r = n.metaTokens,
    o = n.visitor || f,
    i = n.dots,
    s = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && O.isSpecCompliantForm(t);
  if (!O.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (O.isDate(p)) return p.toISOString();
    if (O.isBoolean(p)) return p.toString();
    if (!a && O.isBlob(p))
      throw new ee("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(p) || O.isTypedArray(p)
      ? a && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function f(p, v, w) {
    let m = p;
    if (O.isReactNative(t) && O.isReactNativeBlob(p))
      return (t.append(ea(w, v, i), u(p)), !1);
    if (p && !w && typeof p == "object") {
      if (O.endsWith(v, "{}"))
        ((v = r ? v : v.slice(0, -2)), (p = JSON.stringify(p)));
      else if (
        (O.isArray(p) && LC(p)) ||
        ((O.isFileList(p) || O.endsWith(v, "[]")) && (m = O.toArray(p)))
      )
        return (
          (v = R0(v)),
          m.forEach(function (h, x) {
            !(O.isUndefined(h) || h === null) &&
              t.append(
                s === !0 ? ea([v], x, i) : s === null ? v : v + "[]",
                u(h),
              );
          }),
          !1
        );
    }
    return du(p) ? !0 : (t.append(ea(w, v, i), u(p)), !1);
  }
  const c = [],
    d = Object.assign(zC, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: du,
    });
  function y(p, v) {
    if (!O.isUndefined(p)) {
      if (c.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      (c.push(p),
        O.forEach(p, function (m, g) {
          (!(O.isUndefined(m) || m === null) &&
            o.call(t, m, O.isString(g) ? g.trim() : g, v, d)) === !0 &&
            y(m, v ? v.concat(g) : [g]);
        }),
        c.pop());
    }
  }
  if (!O.isObject(e)) throw new TypeError("data must be an object");
  return (y(e), t);
}
function rh(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function bc(e, t) {
  ((this._pairs = []), e && hl(e, this, t));
}
const A0 = bc.prototype;
A0.append = function (t, n) {
  this._pairs.push([t, n]);
};
A0.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, rh);
      }
    : rh;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function jC(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function I0(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || jC,
    o = O.isFunction(n) ? { serialize: n } : n,
    i = o && o.serialize;
  let s;
  if (
    (i
      ? (s = i(t, o))
      : (s = O.isURLSearchParams(t) ? t.toString() : new bc(t, o).toString(r)),
    s)
  ) {
    const l = e.indexOf("#");
    (l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s));
  }
  return e;
}
class oh {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    O.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Tc = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
  },
  OC = typeof URLSearchParams < "u" ? URLSearchParams : bc,
  DC = typeof FormData < "u" ? FormData : null,
  $C = typeof Blob < "u" ? Blob : null,
  FC = {
    isBrowser: !0,
    classes: { URLSearchParams: OC, FormData: DC, Blob: $C },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Rc = typeof window < "u" && typeof document < "u",
  hu = (typeof navigator == "object" && navigator) || void 0,
  HC =
    Rc &&
    (!hu || ["ReactNative", "NativeScript", "NS"].indexOf(hu.product) < 0),
  BC =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  VC = (Rc && window.location.href) || "http://localhost",
  UC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Rc,
        hasStandardBrowserEnv: HC,
        hasStandardBrowserWebWorkerEnv: BC,
        navigator: hu,
        origin: VC,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ze = { ...UC, ...FC };
function WC(e, t) {
  return hl(e, new ze.classes.URLSearchParams(), {
    visitor: function (n, r, o, i) {
      return ze.isNode && O.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : i.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
function XC(e) {
  return O.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function YC(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) ((i = n[r]), (t[i] = e[i]));
  return t;
}
function L0(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s),
      a = i >= n.length;
    return (
      (s = !s && O.isArray(o) ? o.length : s),
      a
        ? (O.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !l)
        : ((!o[s] || !O.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && O.isArray(o[s]) && (o[s] = YC(o[s])),
          !l)
    );
  }
  if (O.isFormData(e) && O.isFunction(e.entries)) {
    const n = {};
    return (
      O.forEachEntry(e, (r, o) => {
        t(XC(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function QC(e, t, n) {
  if (O.isString(e))
    try {
      return ((t || JSON.parse)(e), O.trim(e));
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ri = {
  transitional: Tc,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = O.isObject(t);
      if ((i && O.isHTMLForm(t) && (t = new FormData(t)), O.isFormData(t)))
        return o ? JSON.stringify(L0(t)) : t;
      if (
        O.isArrayBuffer(t) ||
        O.isBuffer(t) ||
        O.isStream(t) ||
        O.isFile(t) ||
        O.isBlob(t) ||
        O.isReadableStream(t)
      )
        return t;
      if (O.isArrayBufferView(t)) return t.buffer;
      if (O.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return WC(t, this.formSerializer).toString();
        if ((l = O.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return hl(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer,
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), QC(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ri.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (O.isResponse(t) || O.isReadableStream(t)) return t;
      if (t && O.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t, this.parseReviver);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? ee.from(l, ee.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ze.classes.FormData, Blob: ze.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
O.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ri.headers[e] = {};
});
const KC = O.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  qC = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (s) {
            ((o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && KC[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r)));
          }),
      t
    );
  },
  ih = Symbol("internals");
function Zr(e) {
  return e && String(e).trim().toLowerCase();
}
function Zi(e) {
  return e === !1 || e == null ? e : O.isArray(e) ? e.map(Zi) : String(e);
}
function GC(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const ZC = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ta(e, t, n, r, o) {
  if (O.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!O.isString(t))) {
    if (O.isString(r)) return t.indexOf(r) !== -1;
    if (O.isRegExp(r)) return r.test(t);
  }
}
function JC(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function e3(e, t) {
  const n = O.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
let Qe = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(l, a, u) {
      const f = Zr(a);
      if (!f) throw new Error("header name must be a non-empty string");
      const c = O.findKey(o, f);
      (!c || o[c] === void 0 || u === !0 || (u === void 0 && o[c] !== !1)) &&
        (o[c || a] = Zi(l));
    }
    const s = (l, a) => O.forEach(l, (u, f) => i(u, f, a));
    if (O.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (O.isString(t) && (t = t.trim()) && !ZC(t)) s(qC(t), n);
    else if (O.isObject(t) && O.isIterable(t)) {
      let l = {},
        a,
        u;
      for (const f of t) {
        if (!O.isArray(f))
          throw TypeError("Object iterator must return a key-value pair");
        l[(u = f[0])] = (a = l[u])
          ? O.isArray(a)
            ? [...a, f[1]]
            : [a, f[1]]
          : f[1];
      }
      s(l, n);
    } else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Zr(t)), t)) {
      const r = O.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return GC(o);
        if (O.isFunction(n)) return n.call(this, o, r);
        if (O.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Zr(t)), t)) {
      const r = O.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ta(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = Zr(s)), s)) {
        const l = O.findKey(r, s);
        l && (!n || ta(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }
    return (O.isArray(t) ? t.forEach(i) : i(t), o);
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || ta(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      O.forEach(this, (o, i) => {
        const s = O.findKey(r, i);
        if (s) {
          ((n[s] = Zi(o)), delete n[i]);
          return;
        }
        const l = t ? JC(i) : String(i).trim();
        (l !== i && delete n[i], (n[l] = Zi(o)), (r[l] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      O.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && O.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return (n.forEach((o) => r.set(o)), r);
  }
  static accessor(t) {
    const r = (this[ih] = this[ih] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const l = Zr(s);
      r[l] || (e3(o, s), (r[l] = !0));
    }
    return (O.isArray(t) ? t.forEach(i) : i(t), this);
  }
};
Qe.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
O.reduceDescriptors(Qe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
O.freezeMethods(Qe);
function na(e, t) {
  const n = this || ri,
    r = t || n,
    o = Qe.from(r.headers);
  let i = r.data;
  return (
    O.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function z0(e) {
  return !!(e && e.__CANCEL__);
}
let oi = class extends ee {
  constructor(t, n, r) {
    (super(t ?? "canceled", ee.ERR_CANCELED, n, r),
      (this.name = "CanceledError"),
      (this.__CANCEL__ = !0));
  }
};
function j0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new ee(
          "Request failed with status code " + n.status,
          [ee.ERR_BAD_REQUEST, ee.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function t3(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function n3(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        f = r[i];
      (s || (s = u), (n[o] = a), (r[o] = u));
      let c = i,
        d = 0;
      for (; c !== o; ) ((d += n[c++]), (c = c % e));
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const y = f && u - f;
      return y ? Math.round((d * 1e3) / y) : void 0;
    }
  );
}
function r3(e, t) {
  let n = 0,
    r = 1e3 / t,
    o,
    i;
  const s = (u, f = Date.now()) => {
    ((n = f), (o = null), i && (clearTimeout(i), (i = null)), e(...u));
  };
  return [
    (...u) => {
      const f = Date.now(),
        c = f - n;
      c >= r
        ? s(u, f)
        : ((o = u),
          i ||
            (i = setTimeout(() => {
              ((i = null), s(o));
            }, r - c)));
    },
    () => o && s(o),
  ];
}
const zs = (e, t, n = 3) => {
    let r = 0;
    const o = n3(50, 250);
    return r3((i) => {
      const s = i.loaded,
        l = i.lengthComputable ? i.total : void 0,
        a = s - r,
        u = o(a),
        f = s <= l;
      r = s;
      const c = {
        loaded: s,
        total: l,
        progress: l ? s / l : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && l && f ? (l - s) / u : void 0,
        event: i,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(c);
    }, n);
  },
  sh = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  lh =
    (e) =>
    (...t) =>
      O.asap(() => e(...t)),
  o3 = ze.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, ze.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(ze.origin),
        ze.navigator && /(msie|trident)/i.test(ze.navigator.userAgent),
      )
    : () => !0,
  i3 = ze.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, o, i, s) {
          if (typeof document > "u") return;
          const l = [`${e}=${encodeURIComponent(t)}`];
          (O.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`),
            O.isString(r) && l.push(`path=${r}`),
            O.isString(o) && l.push(`domain=${o}`),
            i === !0 && l.push("secure"),
            O.isString(s) && l.push(`SameSite=${s}`),
            (document.cookie = l.join("; ")));
        },
        read(e) {
          if (typeof document > "u") return null;
          const t = document.cookie.match(
            new RegExp("(?:^|; )" + e + "=([^;]*)"),
          );
          return t ? decodeURIComponent(t[1]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function s3(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function l3(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function O0(e, t, n) {
  let r = !s3(t);
  return e && (r || n == !1) ? l3(e, t) : t;
}
const ah = (e) => (e instanceof Qe ? { ...e } : e);
function Bn(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, c, d) {
    return O.isPlainObject(u) && O.isPlainObject(f)
      ? O.merge.call({ caseless: d }, u, f)
      : O.isPlainObject(f)
        ? O.merge({}, f)
        : O.isArray(f)
          ? f.slice()
          : f;
  }
  function o(u, f, c, d) {
    if (O.isUndefined(f)) {
      if (!O.isUndefined(u)) return r(void 0, u, c, d);
    } else return r(u, f, c, d);
  }
  function i(u, f) {
    if (!O.isUndefined(f)) return r(void 0, f);
  }
  function s(u, f) {
    if (O.isUndefined(f)) {
      if (!O.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, f);
  }
  function l(u, f, c) {
    if (c in t) return r(u, f);
    if (c in e) return r(void 0, u);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (u, f, c) => o(ah(u), ah(f), c, !0),
  };
  return (
    O.forEach(Object.keys({ ...e, ...t }), function (f) {
      if (f === "__proto__" || f === "constructor" || f === "prototype") return;
      const c = O.hasOwnProp(a, f) ? a[f] : o,
        d = c(e[f], t[f], f);
      (O.isUndefined(d) && c !== l) || (n[f] = d);
    }),
    n
  );
}
const D0 = (e) => {
    const t = Bn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: o,
      xsrfCookieName: i,
      headers: s,
      auth: l,
    } = t;
    if (
      ((t.headers = s = Qe.from(s)),
      (t.url = I0(
        O0(t.baseURL, t.url, t.allowAbsoluteUrls),
        e.params,
        e.paramsSerializer,
      )),
      l &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : ""),
            ),
        ),
      O.isFormData(n))
    ) {
      if (ze.hasStandardBrowserEnv || ze.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if (O.isFunction(n.getHeaders)) {
        const a = n.getHeaders(),
          u = ["content-type", "content-length"];
        Object.entries(a).forEach(([f, c]) => {
          u.includes(f.toLowerCase()) && s.set(f, c);
        });
      }
    }
    if (
      ze.hasStandardBrowserEnv &&
      (r && O.isFunction(r) && (r = r(t)), r || (r !== !1 && o3(t.url)))
    ) {
      const a = o && i && i3.read(i);
      a && s.set(o, a);
    }
    return t;
  },
  a3 = typeof XMLHttpRequest < "u",
  u3 =
    a3 &&
    function (e) {
      return new Promise(function (n, r) {
        const o = D0(e);
        let i = o.data;
        const s = Qe.from(o.headers).normalize();
        let { responseType: l, onUploadProgress: a, onDownloadProgress: u } = o,
          f,
          c,
          d,
          y,
          p;
        function v() {
          (y && y(),
            p && p(),
            o.cancelToken && o.cancelToken.unsubscribe(f),
            o.signal && o.signal.removeEventListener("abort", f));
        }
        let w = new XMLHttpRequest();
        (w.open(o.method.toUpperCase(), o.url, !0), (w.timeout = o.timeout));
        function m() {
          if (!w) return;
          const h = Qe.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders(),
            ),
            E = {
              data:
                !l || l === "text" || l === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: h,
              config: e,
              request: w,
            };
          (j0(
            function (_) {
              (n(_), v());
            },
            function (_) {
              (r(_), v());
            },
            E,
          ),
            (w = null));
        }
        ("onloadend" in w
          ? (w.onloadend = m)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (w.onabort = function () {
            w &&
              (r(new ee("Request aborted", ee.ECONNABORTED, e, w)), (w = null));
          }),
          (w.onerror = function (x) {
            const E = x && x.message ? x.message : "Network Error",
              k = new ee(E, ee.ERR_NETWORK, e, w);
            ((k.event = x || null), r(k), (w = null));
          }),
          (w.ontimeout = function () {
            let x = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const E = o.transitional || Tc;
            (o.timeoutErrorMessage && (x = o.timeoutErrorMessage),
              r(
                new ee(
                  x,
                  E.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED,
                  e,
                  w,
                ),
              ),
              (w = null));
          }),
          i === void 0 && s.setContentType(null),
          "setRequestHeader" in w &&
            O.forEach(s.toJSON(), function (x, E) {
              w.setRequestHeader(E, x);
            }),
          O.isUndefined(o.withCredentials) ||
            (w.withCredentials = !!o.withCredentials),
          l && l !== "json" && (w.responseType = o.responseType),
          u && (([d, p] = zs(u, !0)), w.addEventListener("progress", d)),
          a &&
            w.upload &&
            (([c, y] = zs(a)),
            w.upload.addEventListener("progress", c),
            w.upload.addEventListener("loadend", y)),
          (o.cancelToken || o.signal) &&
            ((f = (h) => {
              w &&
                (r(!h || h.type ? new oi(null, e, w) : h),
                w.abort(),
                (w = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(f),
            o.signal &&
              (o.signal.aborted
                ? f()
                : o.signal.addEventListener("abort", f))));
        const g = t3(o.url);
        if (g && ze.protocols.indexOf(g) === -1) {
          r(new ee("Unsupported protocol " + g + ":", ee.ERR_BAD_REQUEST, e));
          return;
        }
        w.send(i || null);
      });
    },
  c3 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        o;
      const i = function (u) {
        if (!o) {
          ((o = !0), l());
          const f = u instanceof Error ? u : this.reason;
          r.abort(
            f instanceof ee ? f : new oi(f instanceof Error ? f.message : f),
          );
        }
      };
      let s =
        t &&
        setTimeout(() => {
          ((s = null), i(new ee(`timeout of ${t}ms exceeded`, ee.ETIMEDOUT)));
        }, t);
      const l = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(i)
              : u.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", i));
      const { signal: a } = r;
      return ((a.unsubscribe = () => O.asap(l)), a);
    }
  },
  f3 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      o;
    for (; r < n; ) ((o = r + t), yield e.slice(r, o), (r = o));
  },
  d3 = async function* (e, t) {
    for await (const n of h3(e)) yield* f3(n, t);
  },
  h3 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  uh = (e, t, n, r) => {
    const o = d3(e, t);
    let i = 0,
      s,
      l = (a) => {
        s || ((s = !0), r && r(a));
      };
    return new ReadableStream(
      {
        async pull(a) {
          try {
            const { done: u, value: f } = await o.next();
            if (u) {
              (l(), a.close());
              return;
            }
            let c = f.byteLength;
            if (n) {
              let d = (i += c);
              n(d);
            }
            a.enqueue(new Uint8Array(f));
          } catch (u) {
            throw (l(u), u);
          }
        },
        cancel(a) {
          return (l(a), o.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  ch = 64 * 1024,
  { isFunction: Ii } = O,
  p3 = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
    O.global,
  ),
  { ReadableStream: fh, TextEncoder: dh } = O.global,
  hh = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  m3 = (e) => {
    e = O.merge.call({ skipUndefined: !0 }, p3, e);
    const { fetch: t, Request: n, Response: r } = e,
      o = t ? Ii(t) : typeof fetch == "function",
      i = Ii(n),
      s = Ii(r);
    if (!o) return !1;
    const l = o && Ii(fh),
      a =
        o &&
        (typeof dh == "function"
          ? (
              (p) => (v) =>
                p.encode(v)
            )(new dh())
          : async (p) => new Uint8Array(await new n(p).arrayBuffer())),
      u =
        i &&
        l &&
        hh(() => {
          let p = !1;
          const v = new n(ze.origin, {
            body: new fh(),
            method: "POST",
            get duplex() {
              return ((p = !0), "half");
            },
          }).headers.has("Content-Type");
          return p && !v;
        }),
      f = s && l && hh(() => O.isReadableStream(new r("").body)),
      c = { stream: f && ((p) => p.body) };
    o &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
        !c[p] &&
          (c[p] = (v, w) => {
            let m = v && v[p];
            if (m) return m.call(v);
            throw new ee(
              `Response type '${p}' is not supported`,
              ee.ERR_NOT_SUPPORT,
              w,
            );
          });
      });
    const d = async (p) => {
        if (p == null) return 0;
        if (O.isBlob(p)) return p.size;
        if (O.isSpecCompliantForm(p))
          return (
            await new n(ze.origin, { method: "POST", body: p }).arrayBuffer()
          ).byteLength;
        if (O.isArrayBufferView(p) || O.isArrayBuffer(p)) return p.byteLength;
        if ((O.isURLSearchParams(p) && (p = p + ""), O.isString(p)))
          return (await a(p)).byteLength;
      },
      y = async (p, v) => {
        const w = O.toFiniteNumber(p.getContentLength());
        return w ?? d(v);
      };
    return async (p) => {
      let {
          url: v,
          method: w,
          data: m,
          signal: g,
          cancelToken: h,
          timeout: x,
          onDownloadProgress: E,
          onUploadProgress: k,
          responseType: _,
          headers: M,
          withCredentials: R = "same-origin",
          fetchOptions: F,
        } = D0(p),
        T = t || fetch;
      _ = _ ? (_ + "").toLowerCase() : "text";
      let L = c3([g, h && h.toAbortSignal()], x),
        H = null;
      const C =
        L &&
        L.unsubscribe &&
        (() => {
          L.unsubscribe();
        });
      let z;
      try {
        if (
          k &&
          u &&
          w !== "get" &&
          w !== "head" &&
          (z = await y(M, m)) !== 0
        ) {
          let D = new n(v, { method: "POST", body: m, duplex: "half" }),
            $;
          if (
            (O.isFormData(m) &&
              ($ = D.headers.get("content-type")) &&
              M.setContentType($),
            D.body)
          ) {
            const [W, U] = sh(z, zs(lh(k)));
            m = uh(D.body, ch, W, U);
          }
        }
        O.isString(R) || (R = R ? "include" : "omit");
        const b = i && "credentials" in n.prototype,
          j = {
            ...F,
            signal: L,
            method: w.toUpperCase(),
            headers: M.normalize().toJSON(),
            body: m,
            duplex: "half",
            credentials: b ? R : void 0,
          };
        H = i && new n(v, j);
        let N = await (i ? T(H, F) : T(v, j));
        const P = f && (_ === "stream" || _ === "response");
        if (f && (E || (P && C))) {
          const D = {};
          ["status", "statusText", "headers"].forEach((Y) => {
            D[Y] = N[Y];
          });
          const $ = O.toFiniteNumber(N.headers.get("content-length")),
            [W, U] = (E && sh($, zs(lh(E), !0))) || [];
          N = new r(
            uh(N.body, ch, W, () => {
              (U && U(), C && C());
            }),
            D,
          );
        }
        _ = _ || "text";
        let A = await c[O.findKey(c, _) || "text"](N, p);
        return (
          !P && C && C(),
          await new Promise((D, $) => {
            j0(D, $, {
              data: A,
              headers: Qe.from(N.headers),
              status: N.status,
              statusText: N.statusText,
              config: p,
              request: H,
            });
          })
        );
      } catch (b) {
        throw (
          C && C(),
          b && b.name === "TypeError" && /Load failed|fetch/i.test(b.message)
            ? Object.assign(
                new ee("Network Error", ee.ERR_NETWORK, p, H, b && b.response),
                { cause: b.cause || b },
              )
            : ee.from(b, b && b.code, p, H, b && b.response)
        );
      }
    };
  },
  g3 = new Map(),
  $0 = (e) => {
    let t = (e && e.env) || {};
    const { fetch: n, Request: r, Response: o } = t,
      i = [r, o, n];
    let s = i.length,
      l = s,
      a,
      u,
      f = g3;
    for (; l--; )
      ((a = i[l]),
        (u = f.get(a)),
        u === void 0 && f.set(a, (u = l ? new Map() : m3(t))),
        (f = u));
    return u;
  };
$0();
const Ac = { http: IC, xhr: u3, fetch: { get: $0 } };
O.forEach(Ac, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ph = (e) => `- ${e}`,
  y3 = (e) => O.isFunction(e) || e === null || e === !1;
function v3(e, t) {
  e = O.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, o;
  const i = {};
  for (let s = 0; s < n; s++) {
    r = e[s];
    let l;
    if (
      ((o = r),
      !y3(r) && ((o = Ac[(l = String(r)).toLowerCase()]), o === void 0))
    )
      throw new ee(`Unknown adapter '${l}'`);
    if (o && (O.isFunction(o) || (o = o.get(t)))) break;
    i[l || "#" + s] = o;
  }
  if (!o) {
    const s = Object.entries(i).map(
      ([a, u]) =>
        `adapter ${a} ` +
        (u === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let l = n
      ? s.length > 1
        ? `since :
` +
          s.map(ph).join(`
`)
        : " " + ph(s[0])
      : "as no adapter specified";
    throw new ee(
      "There is no suitable adapter to dispatch the request " + l,
      "ERR_NOT_SUPPORT",
    );
  }
  return o;
}
const F0 = { getAdapter: v3, adapters: Ac };
function ra(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new oi(null, e);
}
function mh(e) {
  return (
    ra(e),
    (e.headers = Qe.from(e.headers)),
    (e.data = na.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    F0.getAdapter(
      e.adapter || ri.adapter,
      e,
    )(e).then(
      function (r) {
        return (
          ra(e),
          (r.data = na.call(e, e.transformResponse, r)),
          (r.headers = Qe.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          z0(r) ||
            (ra(e),
            r &&
              r.response &&
              ((r.response.data = na.call(e, e.transformResponse, r.response)),
              (r.response.headers = Qe.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const H0 = "1.13.6",
  pl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    pl[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const gh = {};
pl.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      H0 +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, l) => {
    if (t === !1)
      throw new ee(
        o(s, " has been removed" + (n ? " in " + n : "")),
        ee.ERR_DEPRECATED,
      );
    return (
      n &&
        !gh[s] &&
        ((gh[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(i, s, l) : !0
    );
  };
};
pl.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function x3(e, t, n) {
  if (typeof e != "object")
    throw new ee("options must be an object", ee.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const l = e[i],
        a = l === void 0 || s(l, i, e);
      if (a !== !0)
        throw new ee("option " + i + " must be " + a, ee.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new ee("Unknown option " + i, ee.ERR_BAD_OPTION);
  }
}
const Ji = { assertOptions: x3, validators: pl },
  rt = Ji.validators;
let An = class {
  constructor(t) {
    ((this.defaults = t || {}),
      (this.interceptors = { request: new oh(), response: new oh() }));
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    (typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Bn(this.defaults, n)));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    (r !== void 0 &&
      Ji.assertOptions(
        r,
        {
          silentJSONParsing: rt.transitional(rt.boolean),
          forcedJSONParsing: rt.transitional(rt.boolean),
          clarifyTimeoutError: rt.transitional(rt.boolean),
          legacyInterceptorReqResOrdering: rt.transitional(rt.boolean),
        },
        !1,
      ),
      o != null &&
        (O.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Ji.assertOptions(
              o,
              { encode: rt.function, serialize: rt.function },
              !0,
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Ji.assertOptions(
        n,
        {
          baseUrl: rt.spelling("baseURL"),
          withXsrfToken: rt.spelling("withXSRFToken"),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase()));
    let s = i && O.merge(i.common, i[n.method]);
    (i &&
      O.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete i[p];
        },
      ),
      (n.headers = Qe.concat(s, i)));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (v) {
      if (typeof v.runWhen == "function" && v.runWhen(n) === !1) return;
      a = a && v.synchronous;
      const w = n.transitional || Tc;
      w && w.legacyInterceptorReqResOrdering
        ? l.unshift(v.fulfilled, v.rejected)
        : l.push(v.fulfilled, v.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let f,
      c = 0,
      d;
    if (!a) {
      const p = [mh.bind(this), void 0];
      for (
        p.unshift(...l), p.push(...u), d = p.length, f = Promise.resolve(n);
        c < d;
      )
        f = f.then(p[c++], p[c++]);
      return f;
    }
    d = l.length;
    let y = n;
    for (; c < d; ) {
      const p = l[c++],
        v = l[c++];
      try {
        y = p(y);
      } catch (w) {
        v.call(this, w);
        break;
      }
    }
    try {
      f = mh.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (c = 0, d = u.length; c < d; ) f = f.then(u[c++], u[c++]);
    return f;
  }
  getUri(t) {
    t = Bn(this.defaults, t);
    const n = O0(t.baseURL, t.url, t.allowAbsoluteUrls);
    return I0(n, t.params, t.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function (t) {
  An.prototype[t] = function (n, r) {
    return this.request(
      Bn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
O.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, l) {
      return this.request(
        Bn(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        }),
      );
    };
  }
  ((An.prototype[t] = n()), (An.prototype[t + "Form"] = n(!0)));
});
let w3 = class B0 {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    (this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((l) => {
          (r.subscribe(l), (i = l));
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, l) {
        r.reason || ((r.reason = new oi(i, s, l)), n(r.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new B0(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
};
function S3(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function E3(e) {
  return O.isObject(e) && e.isAxiosError === !0;
}
const pu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(pu).forEach(([e, t]) => {
  pu[t] = e;
});
function V0(e) {
  const t = new An(e),
    n = E0(An.prototype.request, t);
  return (
    O.extend(n, An.prototype, t, { allOwnKeys: !0 }),
    O.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return V0(Bn(e, o));
    }),
    n
  );
}
const xe = V0(ri);
xe.Axios = An;
xe.CanceledError = oi;
xe.CancelToken = w3;
xe.isCancel = z0;
xe.VERSION = H0;
xe.toFormData = hl;
xe.AxiosError = ee;
xe.Cancel = xe.CanceledError;
xe.all = function (t) {
  return Promise.all(t);
};
xe.spread = S3;
xe.isAxiosError = E3;
xe.mergeConfig = Bn;
xe.AxiosHeaders = Qe;
xe.formToJSON = (e) => L0(O.isHTMLForm(e) ? new FormData(e) : e);
xe.getAdapter = F0.getAdapter;
xe.HttpStatusCode = pu;
xe.default = xe;
const {
  Axios: T3,
  AxiosError: R3,
  CanceledError: A3,
  isCancel: I3,
  CancelToken: L3,
  VERSION: z3,
  all: j3,
  Cancel: O3,
  isAxiosError: D3,
  spread: $3,
  toFormData: F3,
  AxiosHeaders: H3,
  HttpStatusCode: B3,
  formToJSON: V3,
  getAdapter: U3,
  mergeConfig: W3,
} = xe;
function k3({ concept: e, depth: t, onComplete: n }) {
  const [r, o] = I.useState([]),
    [i, s] = I.useState({}),
    [l, a] = I.useState(!0),
    [u, f] = I.useState(""),
    [c, d] = I.useState(0),
    [y, p] = I.useState("Forging architecture questions..."),
    [v, w] = I.useState(!1);
  I.useEffect(() => {
    let h;
    const x = async () => {
      var E, k, _, M;
      try {
        (a(!0),
          p(
            c > 0
              ? "Cooling the Forge... Retrying"
              : "Forging architecture questions...",
          ),
          f(""));
        const R = await xe.get(
          `http://localhost:8001/api/v1/forge/questions/${t}?concept=${encodeURIComponent(e)}`,
        );
        o(((E = R.data) == null ? void 0 : E.questions) || []);
      } catch (R) {
        if (((k = R.response) == null ? void 0 : k.status) === 429) {
          const F = Math.pow(2, c) * 1e3;
          (p(`Cooling the Forge... Retrying in ${F / 1e3}s`),
            (h = setTimeout(() => {
              d((T) => T + 1);
            }, F)));
          return;
        }
        (M = (_ = R.response) == null ? void 0 : _.data) != null && M.detail
          ? f(R.response.data.detail)
          : f(R.message || "Failed to generate questions");
      } finally {
        (!u || !u.includes("Cooling")) && (a(!1), d(0));
      }
    };
    return (e && r.length === 0 && x(), () => clearTimeout(h));
  }, [e, t, c, r.length]);
  const m = (h, x) => {
      s({ ...i, [h]: x });
    },
    g = async (h) => {
      var x, E, k;
      (h.preventDefault(), w(!0), f(""));
      try {
        const _ = await xe.post("http://localhost:8001/api/v1/forge/generate", {
          concept: e,
          answers: i,
          user_id: localStorage.getItem("ideaforge_user_id"),
        });
        n(_.data);
      } catch (_) {
        ((x = _.response) == null ? void 0 : x.status) === 429
          ? f("Rate limit exceeded. Cooling the Forge...")
          : f(
              ((k = (E = _.response) == null ? void 0 : E.data) == null
                ? void 0
                : k.detail) ||
                _.message ||
                "Failed to refine architecture",
            );
      } finally {
        w(!1);
      }
    };
  return S.jsxs(S.Fragment, {
    children: [
      (l || v) &&
        S.jsx("div", {
          className:
            "fixed inset-0 bg-[#F5F5F0]/60 backdrop-blur-md z-50 flex items-center justify-center",
          children: S.jsxs("div", {
            className:
              "flex flex-col items-center justify-center space-y-6 scale-in-slow",
            children: [
              S.jsxs("div", {
                className: "relative flex items-center justify-center",
                children: [
                  S.jsx("div", {
                    className:
                      "absolute w-32 h-32 bg-cloud-blue/50 rounded-full animate-ping blur-xl",
                  }),
                  S.jsx("div", {
                    className:
                      "z-10 w-16 h-16 bg-ceramic-base rounded-full shadow-skeuo-inner border-2 border-cloud-accent flex items-center justify-center",
                    children: S.jsx("div", {
                      className: `w-3 h-3 rounded-full ${y.includes("Cooling") ? "bg-orange-400" : "bg-cloud-accent"} animate-pulse`,
                    }),
                  }),
                ],
              }),
              S.jsx("p", {
                className:
                  "text-sm font-bold text-ink-muted uppercase tracking-widest animate-pulse",
                children: v ? "Refining Architecture..." : y,
              }),
            ],
          }),
        }),
      u &&
        !y.includes("Cooling") &&
        S.jsxs("div", {
          className: "text-center space-y-4 mb-8",
          children: [
            S.jsx("p", { className: "text-red-500 font-bold", children: u }),
            S.jsx("button", {
              onClick: () => {
                (d(0), fetchQuestions());
              },
              className:
                "px-6 py-2 rounded-xl bg-ceramic-base text-cloud-accent shadow-skeuo-outer active:shadow-skeuo-inner",
              children: "Retry Connection",
            }),
          ],
        }),
      S.jsxs("form", {
        onSubmit: g,
        className: "w-full max-w-2xl space-y-8 animate-fade-in text-left",
        children: [
          S.jsx("div", {
            className:
              "space-y-6 max-h-[60vh] overflow-y-auto px-4 pb-4 custom-scrollbar",
            children: r.map((h, x) =>
              S.jsxs(
                "div",
                {
                  className: "space-y-3",
                  children: [
                    S.jsxs("label", {
                      className: "block text-sm font-bold text-ink-dark",
                      children: [x + 1, ". ", h.text],
                    }),
                    h.type === "select" && h.options && h.options.length > 0
                      ? S.jsxs("select", {
                          required: !0,
                          value: i[h.id] || "",
                          onChange: (E) => m(h.id, E.target.value),
                          className:
                            "w-full p-4 rounded-xl bg-ceramic-base shadow-skeuo-inner text-ink-dark focus:outline-none focus:ring-2 focus:ring-cloud-accent/30 transition-all font-medium appearance-none cursor-pointer",
                          children: [
                            S.jsx("option", {
                              value: "",
                              disabled: !0,
                              children: "Select an option...",
                            }),
                            h.options.map((E) =>
                              S.jsx("option", { value: E, children: E }, E),
                            ),
                          ],
                        })
                      : S.jsx("input", {
                          type: "text",
                          required: !0,
                          value: i[h.id] || "",
                          onChange: (E) => m(h.id, E.target.value),
                          className:
                            "w-full p-4 rounded-xl bg-ceramic-base shadow-skeuo-inner text-ink-dark focus:outline-none focus:ring-2 focus:ring-cloud-accent/30 transition-all placeholder-ink-muted/40 font-medium",
                          placeholder: "Type your answer...",
                        }),
                  ],
                },
                h.id || x,
              ),
            ),
          }),
          S.jsx("div", {
            className: "pt-4 border-t border-white/50 flex justify-end",
            children: S.jsx("button", {
              type: "submit",
              disabled:
                r.length === 0 || Object.keys(i).length < r.length || l || v,
              className:
                "px-8 py-4 rounded-xl bg-ceramic-base text-cloud-accent font-black tracking-widest uppercase shadow-skeuo-outer active:shadow-skeuo-inner active:translate-y-[2px] transition-all disabled:opacity-50",
              children: "Forge Blueprint",
            }),
          }),
        ],
      }),
    ],
  });
}
const _3 = ({
  onClick: e,
  children: t,
  disabled: n,
  variant: r = "primary",
}) => {
  const o = r === "primary",
    i = o ? "border-[#00f0ff] text-[#00f0ff]" : "border-gray-600 text-gray-400",
    s = o
      ? "hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
      : "hover:shadow-white/5";
  return S.jsxs("button", {
    onClick: e,
    disabled: n,
    className: `
        relative px-10 py-4 rounded-xl font-black tracking-[0.2em] uppercase 
        transition-all duration-75 ease-in-out
        bg-[#0a0a0c] border-2 ${i} ${s}
        
        /* The "Skeuomorphic Lift" - Heavy outer shadows */
        shadow-[6px_6px_12px_#040405,-6px_-6px_12px_#121216]
        
        /* The "Mechanical Press" - Move down and flatten shadow on click */
        active:translate-y-1 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.8)]
        
        /* Disabled state */
        disabled:opacity-30 disabled:cursor-not-allowed disabled:active:translate-y-0
      `,
    children: [
      S.jsx("div", {
        className:
          "absolute inset-0 rounded-lg bg-gradient-to-tr from-white/5 to-transparent pointer-events-none",
      }),
      S.jsx("span", {
        className: "relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]",
        children: t,
      }),
    ],
  });
};
function yh({ isOpen: e, errorMessage: t, onRetry: n }) {
  return e
    ? S.jsx("div", {
        className:
          "fixed inset-0 bg-[#F5F5F0]/60 backdrop-blur-md z-[100] flex items-center justify-center p-4",
        children: S.jsxs("div", {
          className:
            "bg-ceramic-base p-10 rounded-[2.5rem] shadow-skeuo-outer border border-white max-w-lg w-full scale-in-slow text-center",
          children: [
            S.jsxs("div", {
              className:
                "bg-ceramic-base shadow-skeuo-inner rounded-3xl p-8 mb-8 border border-cloud-accent/10",
              children: [
                S.jsx("div", {
                  className:
                    "w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center mb-4",
                  children: S.jsx("svg", {
                    className: "w-8 h-8 text-red-500",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: S.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                    }),
                  }),
                }),
                S.jsx("h3", {
                  className:
                    "text-2xl font-black text-ink-dark tracking-tight mb-2 uppercase",
                  children: "Connection Severed",
                }),
                S.jsx("p", {
                  className: "text-sm font-bold text-ink-muted leading-relaxed",
                  children:
                    t ||
                    "The SQLAlchemy Forge link was broken. Check backend services and database status.",
                }),
              ],
            }),
            S.jsx("div", {
              className: "flex justify-center",
              children: S.jsx(_3, {
                onClick: n,
                variant: "primary",
                children: "Reconnect",
              }),
            }),
          ],
        }),
      })
    : null;
}
function N3({ onLogin: e }) {
  const [t, n] = I.useState(""),
    [r, o] = I.useState(""),
    [i, s] = I.useState(""),
    [l, a] = I.useState(!1),
    u = async (f) => {
      (f.preventDefault(), a(!0), s(""));
      try {
        const c = await xe.post("http://localhost:8001/api/v1/auth/login", {
            email: t,
            password: r,
          }),
          { access_token: d, user_id: y } = c.data;
        (localStorage.setItem("ideaforge_token", d),
          localStorage.setItem("ideaforge_user_id", y),
          e());
      } catch (c) {
        c.response && c.response.data && c.response.data.detail
          ? s(c.response.data.detail)
          : s(c.message || "Login failed");
      } finally {
        a(!1);
      }
    };
  return S.jsxs("div", {
    className:
      "flex h-screen w-screen bg-ceramic-base items-center justify-center overflow-hidden relative",
    children: [
      S.jsx("div", {
        className:
          "absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cloud-blue/60 rounded-full blur-[100px] animate-pulse pointer-events-none",
      }),
      S.jsx("div", {
        className:
          "absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#E8E8E1] rounded-full blur-[120px] pointer-events-none",
      }),
      S.jsxs("div", {
        className:
          "z-10 w-full max-w-md p-10 rounded-[2rem] glass-panel-light flex flex-col gap-8",
        children: [
          S.jsxs("div", {
            className: "text-center space-y-2",
            children: [
              S.jsxs("h1", {
                className:
                  "text-5xl font-black tracking-tighter text-ink-dark italic drop-shadow-sm",
                children: [
                  "IDEA",
                  S.jsx("span", {
                    className: "text-cloud-accent font-light not-italic",
                    children: "GRAPH",
                  }),
                ],
              }),
              S.jsx("p", {
                className:
                  "text-sm text-ink-muted font-medium tracking-wide uppercase",
                children: "Workspace Authentication",
              }),
            ],
          }),
          S.jsxs("form", {
            className: "space-y-6",
            onSubmit: u,
            children: [
              S.jsxs("div", {
                className: "space-y-2",
                children: [
                  S.jsx("label", {
                    className:
                      "text-[10px] font-bold text-ink-muted uppercase tracking-widest pl-2",
                    children: "Email",
                  }),
                  S.jsx("input", {
                    type: "email",
                    value: t,
                    onChange: (f) => n(f.target.value),
                    className:
                      "w-full p-4 rounded-xl bg-ceramic-base shadow-skeuo-inner text-ink-dark focus:outline-none focus:ring-2 focus:ring-cloud-accent/30 transition-all placeholder-ink-muted/40 font-medium",
                    placeholder: "architect@hitam.org",
                    required: !0,
                  }),
                ],
              }),
              S.jsxs("div", {
                className: "space-y-2",
                children: [
                  S.jsx("label", {
                    className:
                      "text-[10px] font-bold text-ink-muted uppercase tracking-widest pl-2",
                    children: "Password",
                  }),
                  S.jsx("input", {
                    type: "password",
                    value: r,
                    onChange: (f) => o(f.target.value),
                    className:
                      "w-full p-4 rounded-xl bg-ceramic-base shadow-skeuo-inner text-ink-dark focus:outline-none focus:ring-2 focus:ring-cloud-accent/30 transition-all placeholder-ink-muted/40 font-medium",
                    placeholder: "••••••••",
                    required: !0,
                  }),
                ],
              }),
              S.jsx("button", {
                type: "submit",
                disabled: l,
                className:
                  "w-full py-4 mt-2 rounded-xl bg-ceramic-base text-cloud-accent font-black tracking-widest uppercase shadow-skeuo-outer active:shadow-skeuo-inner active:translate-y-[2px] transition-all disabled:opacity-50 flex justify-center items-center",
                children: l
                  ? S.jsxs("svg", {
                      className: "animate-spin h-5 w-5 text-cloud-accent",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        S.jsx("circle", {
                          className: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          strokeWidth: "4",
                        }),
                        S.jsx("path", {
                          className: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                        }),
                      ],
                    })
                  : "Access Terminal",
              }),
              i &&
                S.jsx("div", {
                  className: "text-red-500 text-xs font-bold text-center mt-2",
                  children: i,
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function C3() {
  const [e, t] = I.useState("dashboard"),
    [n, r] = I.useState(null),
    [o, i] = I.useState(!1),
    [s, l] = I.useState(!!localStorage.getItem("ideaforge_token")),
    a = async () => {
      try {
        (await fetch("http://localhost:8001/api/v1/admin/system-health")).ok
          ? i(!1)
          : i(!0);
      } catch {
        i(!0);
      }
    };
  I.useEffect(() => {
    a();
    const c = setInterval(a, 3e4);
    return () => clearInterval(c);
  }, []);
  const u = (c) => {
      (r(c), t("analysis"));
    },
    f = () => {
      switch (e) {
        case "dashboard":
          return S.jsx(Gf, {});
        case "new":
          return S.jsx(Sw, { onGenerate: u });
        case "map":
          return S.jsx("div", {
            className:
              "h-[80vh] w-full rounded-3xl overflow-hidden shadow-skeuo-outer border border-white",
            children: S.jsx(UN, { idea: n }),
          });
        case "analysis":
          return S.jsx("div", {
            className:
              "bg-ceramic-base p-8 rounded-3xl shadow-skeuo-outer min-h-[80vh] flex flex-col items-center justify-center scale-in-slow",
            children: S.jsx(k3, {
              concept: n == null ? void 0 : n.idea,
              depth: n == null ? void 0 : n.depth,
              onComplete: (c) => {
                (r({ ...n, ...c }), t("map"));
              },
            }),
          });
        default:
          return S.jsx(Gf, {});
      }
    };
  return s
    ? S.jsxs(S.Fragment, {
        children: [
          S.jsx(yh, { isOpen: o, onRetry: a }),
          S.jsx(xw, { currentView: e, onViewChange: t, children: f() }),
        ],
      })
    : S.jsxs(S.Fragment, {
        children: [
          S.jsx(yh, { isOpen: o, onRetry: a }),
          S.jsx(N3, { onLogin: () => l(!0) }),
        ],
      });
}
oa.createRoot(document.getElementById("root")).render(
  S.jsx(bh.StrictMode, { children: S.jsx(C3, {}) }),
);
