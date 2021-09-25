'use strict';

var fs = require('fs');
var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

var n$2,
    l$4,
    u$4,
    t$2,
    o$2,
    r$3,
    f$3,
    e$1 = {},
    c$3 = [],
    s$4 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function a$3(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function h$2(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v$3(l, u, i) {
  var t,
      o,
      r,
      f = {};

  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n$2.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
  return y$1(l, f, t, o, null);
}

function y$1(n, i, t, o, r) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: o,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == r ? ++u$4 : r
  };
  return null != l$4.vnode && l$4.vnode(f), f;
}

function d$2(n) {
  return n.children;
}

function _$3(n, l) {
  this.props = n, this.context = l;
}

function k$2(n, l) {
  if (null == l) return n.__ ? k$2(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? k$2(n) : null;
}

function b$2(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return b$2(n);
  }
}

function m$3(n) {
  (!n.__d && (n.__d = !0) && t$2.push(n) && !g$2.__r++ || r$3 !== l$4.debounceRendering) && ((r$3 = l$4.debounceRendering) || o$2)(g$2);
}

function g$2() {
  for (var n; g$2.__r = t$2.length;) n = t$2.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), t$2 = [], n.some(function (n) {
    var l, u, i, t, o, r;
    n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], (i = a$3({}, t)).__v = t.__v + 1, j$2(r, t, i, l.__n, void 0 !== r.ownerSVGElement, null != t.__h ? [o] : null, u, null == o ? k$2(t) : o, t.__h), z$2(u, t), t.__e != o && b$2(t)));
  });
}

function w$3(n, l, u, i, t, o, r, f, s, a) {
  var h,
      v,
      p,
      _,
      b,
      m,
      g,
      w = i && i.__k || c$3,
      A = w.length;

  for (u.__k = [], h = 0; h < l.length; h++) if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y$1(null, _, null, null, _) : Array.isArray(_) ? y$1(d$2, {
    children: _
  }, null, null, null) : _.__b > 0 ? y$1(_.type, _.props, _.key, null, _.__v) : _)) {
    if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;else for (v = 0; v < A; v++) {
      if ((p = w[v]) && _.key == p.key && _.type === p.type) {
        w[v] = void 0;
        break;
      }

      p = null;
    }
    j$2(n, _, p = p || e$1, t, o, r, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && null != _.__k && _.__k === p.__k ? _.__d = s = x$3(_, s, n) : s = P$2(n, _, p, w, b, s), a || "option" !== u.type ? "function" == typeof u.type && (u.__d = s) : n.value = "") : s && p.__e == s && s.parentNode != n && (s = k$2(p));
  }

  for (u.__e = m, h = A; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k$2(i, h + 1)), N$1(w[h], w[h]));

  if (g) for (h = 0; h < g.length; h++) M$2(g[h], g[++h], g[++h]);
}

function x$3(n, l, u) {
  var i, t;

  for (i = 0; i < n.__k.length; i++) (t = n.__k[i]) && (t.__ = n, l = "function" == typeof t.type ? x$3(t, l, u) : P$2(u, t, t, n.__k, t.__e, l));

  return l;
}

function A$2(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    A$2(n, l);
  }) : l.push(n)), l;
}

function P$2(n, l, u, i, t, o) {
  var r, f, e;
  if (void 0 !== l.__d) r = l.__d, l.__d = void 0;else if (null == u || t != o || null == t.parentNode) n: if (null == o || o.parentNode !== n) n.appendChild(t), r = null;else {
    for (f = o, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

    n.insertBefore(t, o), r = o;
  }
  return void 0 !== r ? r : t.nextSibling;
}

function C$2(n, l, u, i, t) {
  var o;

  for (o in u) "children" === o || "key" === o || o in l || H$2(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || H$2(n, o, l[o], u[o], i);
}

function $$1(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s$4.test(l) ? u : u + "px";
}

function H$2(n, l, u, i, t) {
  var o;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $$1(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || $$1(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? i || n.addEventListener(l, o ? T$1 : I, o) : n.removeEventListener(l, o ? T$1 : I, o);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
  }
}

function I(n) {
  this.l[n.type + !1](l$4.event ? l$4.event(n) : n);
}

function T$1(n) {
  this.l[n.type + !0](l$4.event ? l$4.event(n) : n);
}

function j$2(n, u, i, t, o, r, f, e, c) {
  var s,
      h,
      v,
      y,
      p,
      k,
      b,
      m,
      g,
      x,
      A,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, r = [e]), (s = l$4.__b) && s(u);

  try {
    n: if ("function" == typeof P) {
      if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new _$3(m, x), h.constructor = P, h.render = O$2), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a$3({}, h.__s)), a$3(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) {
          h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), h.__h.length && f.push(h);
          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(y, p, k);
        });
      }
      h.context = x, h.props = m, h.state = h.__s, (s = l$4.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a$3(a$3({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d$2 && null == s.key ? s.props.children : s, w$3(n, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
    } else null == r && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L$2(i.__e, u, i, t, o, r, f, c);

    (s = l$4.diffed) && s(u);
  } catch (n) {
    u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l$4.__e(n, u, i);
  }
}

function z$2(n, u) {
  l$4.__c && l$4.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l$4.__e(n, u.__v);
    }
  });
}

function L$2(l, u, i, t, o, r, f, c) {
  var s,
      a,
      v,
      y = i.props,
      p = u.props,
      d = u.type,
      _ = 0;
  if ("svg" === d && (o = !0), null != r) for (; _ < r.length; _++) if ((s = r[_]) && (s === l || (d ? s.localName == d : 3 == s.nodeType))) {
    l = s, r[_] = null;
    break;
  }

  if (null == l) {
    if (null === d) return document.createTextNode(p);
    l = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), r = null, c = !1;
  }

  if (null === d) y === p || c && l.data === p || (l.data = p);else {
    if (r = r && n$2.call(l.childNodes), a = (y = i.props || e$1).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
      if (null != r) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
      (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
    }

    if (C$2(l, p, y, o, c), v) u.__k = [];else if (_ = u.props.children, w$3(l, Array.isArray(_) ? _ : [_], u, i, t, o && "foreignObject" !== d, r, f, r ? r[0] : i.__k && k$2(i, 0), c), null != r) for (_ = r.length; _--;) null != r[_] && h$2(r[_]);
    c || ("value" in p && void 0 !== (_ = p.value) && (_ !== l.value || "progress" === d && !_) && H$2(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H$2(l, "checked", _, y.checked, !1));
  }
  return l;
}

function M$2(n, u, i) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l$4.__e(n, i);
  }
}

function N$1(n, u, i) {
  var t, o;

  if (l$4.unmount && l$4.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M$2(t, null, u)), null != (t = n.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      l$4.__e(n, u);
    }
    t.base = t.__P = null;
  }

  if (t = n.__k) for (o = 0; o < t.length; o++) t[o] && N$1(t[o], u, "function" != typeof n.type);
  i || null == n.__e || h$2(n.__e), n.__e = n.__d = void 0;
}

function O$2(n, l, u) {
  return this.constructor(n, u);
}

function B$1(l, u, i) {
  var t,
      o,
      r,
      f = a$3({}, l.props);

  for (r in u) "key" == r ? t = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];

  return arguments.length > 2 && (f.children = arguments.length > 3 ? n$2.call(arguments, 2) : i), y$1(l.type, f, t || l.key, o || l.ref, null);
}

function D$1(n, l) {
  var u = {
    __c: l = "__cC" + f$3++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(m$3);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

n$2 = c$3.slice, l$4 = {
  __e: function (n, l) {
    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, u$4 = 0, _$3.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a$3({}, this.state), "function" == typeof n && (n = n(a$3({}, u), this.props)), n && a$3(u, n), null != n && this.__v && (l && this.__h.push(l), m$3(this));
}, _$3.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), m$3(this));
}, _$3.prototype.render = d$2, t$2 = [], o$2 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g$2.__r = 0, f$3 = 0;

var r$2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
    n$1 = /[&<>"]/;

function o$1(e) {
  var t = String(e);
  return n$1.test(t) ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t;
}

var a$2 = function (e, t) {
  return String(e).replace(/(\n+)/g, "$1" + (t || "\t"));
},
    i$2 = function (e, t, r) {
  return String(e).length > (t || 40) || !r && -1 !== String(e).indexOf("\n") || -1 !== String(e).indexOf("<");
},
    l$3 = {};

function s$3(e) {
  var t = "";

  for (var n in e) {
    var o = e[n];
    null != o && "" !== o && (t && (t += " "), t += "-" == n[0] ? n : l$3[n] || (l$3[n] = n.replace(/([A-Z])/g, "-$1").toLowerCase()), t += ": ", t += o, "number" == typeof o && !1 === r$2.test(n) && (t += "px"), t += ";");
  }

  return t || void 0;
}

function f$2(e, t) {
  for (var r in t) e[r] = t[r];

  return e;
}

function u$3(e, t) {
  return Array.isArray(t) ? t.reduce(u$3, e) : null != t && !1 !== t && e.push(t), e;
}

var c$2 = {
  shallow: !0
},
    p$2 = [],
    _$2 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
    v$2 = /[\s\n\\/='"\0<>]/,
    d$1 = function () {};

m$2.render = m$2;

var g$1 = function (e, t) {
  return m$2(e, t, c$2);
},
    h$1 = [];

function m$2(t, r, n) {
  r = r || {}, n = n || {};
  var o = l$4.__s;
  l$4.__s = !0;
  var a = x$2(t, r, n);
  return l$4.__c && l$4.__c(t, h$1), h$1.length = 0, l$4.__s = o, a;
}

function x$2(r, n, l, c, g, h) {
  if (null == r || "boolean" == typeof r) return "";
  if ("object" != typeof r) return o$1(r);
  var m = l.pretty,
      y = m && "string" == typeof m ? m : "\t";

  if (Array.isArray(r)) {
    for (var b = "", S = 0; S < r.length; S++) m && S > 0 && (b += "\n"), b += x$2(r[S], n, l, c, g, h);

    return b;
  }

  var w,
      k = r.type,
      O = r.props,
      C = !1;

  if ("function" == typeof k) {
    if (C = !0, !l.shallow || !c && !1 !== l.renderRootComponent) {
      if (k === d$2) {
        var A = [];
        return u$3(A, r.props.children), x$2(A, n, l, !1 !== l.shallowHighOrder, g, h);
      }

      var H,
          j = r.__c = {
        __v: r,
        context: n,
        props: r.props,
        setState: d$1,
        forceUpdate: d$1,
        __h: []
      };

      if (l$4.__b && l$4.__b(r), l$4.__r && l$4.__r(r), k.prototype && "function" == typeof k.prototype.render) {
        var F = k.contextType,
            M = F && n[F.__c],
            T = null != F ? M ? M.props.value : F.__ : n;
        (j = r.__c = new k(O, T)).__v = r, j._dirty = j.__d = !0, j.props = O, null == j.state && (j.state = {}), null == j._nextState && null == j.__s && (j._nextState = j.__s = j.state), j.context = T, k.getDerivedStateFromProps ? j.state = f$2(f$2({}, j.state), k.getDerivedStateFromProps(j.props, j.state)) : j.componentWillMount && (j.componentWillMount(), j.state = j._nextState !== j.state ? j._nextState : j.__s !== j.state ? j.__s : j.state), H = j.render(j.props, j.state, j.context);
      } else {
        var $ = k.contextType,
            L = $ && n[$.__c];
        H = k.call(r.__c, O, null != $ ? L ? L.props.value : $.__ : n);
      }

      return j.getChildContext && (n = f$2(f$2({}, n), j.getChildContext())), l$4.diffed && l$4.diffed(r), x$2(H, n, l, !1 !== l.shallowHighOrder, g, h);
    }

    k = (w = k).displayName || w !== Function && w.name || function (e) {
      var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) || "")[1];

      if (!t) {
        for (var r = -1, n = p$2.length; n--;) if (p$2[n] === e) {
          r = n;
          break;
        }

        r < 0 && (r = p$2.push(e) - 1), t = "UnnamedComponent" + r;
      }

      return t;
    }(w);
  }

  var E,
      D,
      N = "<" + k;

  if (O) {
    var P = Object.keys(O);
    l && !0 === l.sortAttributes && P.sort();

    for (var R = 0; R < P.length; R++) {
      var U = P[R],
          W = O[U];

      if ("children" !== U) {
        if (!v$2.test(U) && (l && l.allAttributes || "key" !== U && "ref" !== U && "__self" !== U && "__source" !== U && "defaultValue" !== U)) {
          if ("className" === U) {
            if (O.class) continue;
            U = "class";
          } else g && U.match(/^xlink:?./) && (U = U.toLowerCase().replace(/^xlink:?/, "xlink:"));

          if ("htmlFor" === U) {
            if (O.for) continue;
            U = "for";
          }

          "style" === U && W && "object" == typeof W && (W = s$3(W)), "a" === U[0] && "r" === U[1] && "boolean" == typeof W && (W = String(W));
          var q = l.attributeHook && l.attributeHook(U, W, n, l, C);
          if (q || "" === q) N += q;else if ("dangerouslySetInnerHTML" === U) D = W && W.__html;else if ("textarea" === k && "value" === U) E = W;else if ((W || 0 === W || "" === W) && "function" != typeof W) {
            if (!(!0 !== W && "" !== W || (W = U, l && l.xml))) {
              N += " " + U;
              continue;
            }

            if ("value" === U) {
              if ("select" === k) {
                h = W;
                continue;
              }

              "option" === k && h == W && (N += " selected");
            }

            N += " " + U + '="' + o$1(W) + '"';
          }
        }
      } else E = W;
    }
  }

  if (m) {
    var z = N.replace(/\n\s*/, " ");
    z === N || ~z.indexOf("\n") ? m && ~N.indexOf("\n") && (N += "\n") : N = z;
  }

  if (N += ">", v$2.test(k)) throw new Error(k + " is not a valid HTML tag name in " + N);
  var I,
      V = _$2.test(k) || l.voidElements && l.voidElements.test(k),
      Z = [];
  if (D) m && i$2(D) && (D = "\n" + y + a$2(D, y)), N += D;else if (null != E && u$3(I = [], E).length) {
    for (var B = m && ~N.indexOf("\n"), G = !1, J = 0; J < I.length; J++) {
      var K = I[J];

      if (null != K && !1 !== K) {
        var Q = x$2(K, n, l, !0, "svg" === k || "foreignObject" !== k && g, h);
        if (m && !B && i$2(Q) && (B = !0), Q) if (m) {
          var X = Q.length > 0 && "<" != Q[0];
          G && X ? Z[Z.length - 1] += Q : Z.push(Q), G = X;
        } else Z.push(Q);
      }
    }

    if (m && B) for (var Y = Z.length; Y--;) Z[Y] = "\n" + y + a$2(Z[Y], y);
  }
  if (Z.length || D) N += Z.join("");else if (l && l.xml) return N.substring(0, N.length - 1) + " />";
  return !V || I || D ? (m && ~N.indexOf("\n") && (N += "\n"), N += "</" + k + ">") : N = N.replace(/>$/, " />"), N;
}

m$2.shallowRender = g$1;

var EMPTY$1 = {};

function assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
      c = url.match(reg),
      matches = {},
      ret;

  if (c && c[1]) {
    var p = c[1].split('&');

    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }

  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);

  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
          flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
          plus = ~flags.indexOf('+'),
          star = ~flags.indexOf('*'),
          val = url[i$1] || '';

      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }

      matches[param] = decodeURIComponent(val);

      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }

  if (opts.default !== true && ret === false) {
    return false;
  }

  return matches;
}

function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
} // filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.


function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}

function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}

var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};

function setUrl(url, type) {
  if (type === void 0) type = 'push';

  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}

function getCurrentUrl() {
  var url;

  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }

  return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
  if (replace === void 0) replace = false;

  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  } // only push URL into history if we can handle it


  if (canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }

  return routeTo(url);
}
/** Check if the given URL can be handled by any router instances. */


function canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }

  return false;
}
/** Tell all router instances to handle the given URL.  */


function routeTo(url) {
  var didRoute = false;

  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }

  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }

  return didRoute;
}

function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }

  var href = node.getAttribute('href'),
      target = node.getAttribute('target'); // ignore links with targets and non-path URLs

  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  } // attempt to route, if no match simply cede control to browser


  return route(href);
}

function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }

  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}

function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }

    if (e.stopPropagation) {
      e.stopPropagation();
    }

    e.preventDefault();
  }

  return false;
}

function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }

  var t = e.target;

  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      } // if link is handled by the router, prevent browser defaults


      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }

  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }

    addEventListener('click', delegateLinkHandler);
  }

  eventListenersInitialized = true;
}

var Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);

    if (props.history) {
      customHistory = props.history;
    }

    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }

  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;

  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }

    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };
  /** Check if the given URL can be matched against any children */


  Router.prototype.canRoute = function canRoute(url) {
    var children = A$2(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };
  /** Re-render children with a new URL to match against. */


  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url); // trigger a manual re-route if we're not in the middle of an update:

    if (!this.updating) {
      this.forceUpdate();
    }

    return didRoute;
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };

  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1$1 = this;

    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }

    this.updating = false;
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }

    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };

  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };

  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };

  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);

      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return B$1(vnode, newProps);
        }

        return vnode;
      }
    }).filter(Boolean);
  };

  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(A$2(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;

    if (url !== previous) {
      this.previousUrl = url;

      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }

    return current;
  };

  return Router;
}(_$3);

var Link = function (props) {
  return v$3('a', assign({
    onClick: handleLinkClick
  }, props));
};

var Route = function (props) {
  return v$3(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;
Router.exec = exec;

const Header = () => v$3("header", {
  class: "header"
}, v$3("h1", null, "Preact App"), v$3("nav", null, v$3("a", {
  activeClassName: "active",
  href: "/"
}, "Home"), v$3("a", {
  activeClassName: "active",
  href: "/profile"
}, "Me"), v$3("a", {
  activeClassName: "active",
  href: "/profile/john"
}, "John")));

// istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
var nodejsCustomInspectSymbol$1 = nodejsCustomInspectSymbol;

function _typeof$3(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$3 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$3(obj);
}
var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof$3(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      if (value === null) {
        return 'null';
      }

      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);
  var customInspectFn = getCustomFn(value);

  if (customInspectFn !== undefined) {
    var customValue = customInspectFn.call(value); // check for infinite recursion

    if (customValue !== value) {
      return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(nodejsCustomInspectSymbol$1)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}

function invariant(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}

/**
 * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
 */

function defineInspect(classObject) {
  var fn = classObject.prototype.toJSON;
  typeof fn === 'function' || invariant(0);
  classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

  if (nodejsCustomInspectSymbol$1) {
    classObject.prototype[nodejsCustomInspectSymbol$1] = fn;
  }
}

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */

var Location = /*#__PURE__*/function () {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  function Location(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  var _proto = Location.prototype;

  _proto.toJSON = function toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  };

  return Location;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

defineInspect(Location);
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

var Token = /*#__PURE__*/function () {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  function Token(kind, start, end, line, column, prev, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = prev;
    this.next = null;
  }

  var _proto2 = Token.prototype;

  _proto2.toJSON = function toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  };

  return Token;
}(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

defineInspect(Token);
/**
 * @internal
 */

function isNode(maybeNode) {
  return maybeNode != null && typeof maybeNode.kind === 'string';
}
/**
 * The list of all possible AST node types.
 */

/**
 * A visitor is provided to visit, it contains the collection of
 * relevant functions to be called during the visitor's traversal.
 */

var QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: ['name', // Note: fragment variable definitions are experimental and may be changed
  // or removed in the future.
  'variableDefinitions', 'typeCondition', 'directives', 'selectionSet'],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
  InterfaceTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields']
};
var BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 *     const editedAST = visit(ast, {
 *       enter(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: skip visiting this node
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       },
 *       leave(node, key, parent, path, ancestors) {
 *         // @return
 *         //   undefined: no action
 *         //   false: no action
 *         //   visitor.BREAK: stop visiting altogether
 *         //   null: delete this node
 *         //   any value: replace this node with the returned value
 *       }
 *     });
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to four permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 *     visit(ast, {
 *       Kind(node) {
 *         // enter the "Kind" node
 *       }
 *     })
 *
 * 2) Named visitors that trigger upon entering and leaving a node of
 *    a specific kind.
 *
 *     visit(ast, {
 *       Kind: {
 *         enter(node) {
 *           // enter the "Kind" node
 *         }
 *         leave(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 *     visit(ast, {
 *       enter(node) {
 *         // enter any node
 *       },
 *       leave(node) {
 *         // leave any node
 *       }
 *     })
 *
 * 4) Parallel visitors for entering and leaving nodes of a specific kind.
 *
 *     visit(ast, {
 *       enter: {
 *         Kind(node) {
 *           // enter the "Kind" node
 *         }
 *       },
 *       leave: {
 *         Kind(node) {
 *           // leave the "Kind" node
 *         }
 *       }
 *     })
 */

function visit(root, visitor) {
  var visitorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : QueryDocumentKeys;
  /* eslint-disable no-undef-init */

  var stack = undefined;
  var inArray = Array.isArray(root);
  var keys = [root];
  var index = -1;
  var edits = [];
  var node = undefined;
  var key = undefined;
  var parent = undefined;
  var path = [];
  var ancestors = [];
  var newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    var isLeaving = index === keys.length;
    var isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
        } else {
          var clone = {};

          for (var _i2 = 0, _Object$keys2 = Object.keys(node); _i2 < _Object$keys2.length; _i2++) {
            var k = _Object$keys2[_i2];
            clone[k] = node[k];
          }

          node = clone;
        }

        var editOffset = 0;

        for (var ii = 0; ii < edits.length; ii++) {
          var editKey = edits[ii][0];
          var editValue = edits[ii][1];

          if (inArray) {
            editKey -= editOffset;
          }

          if (inArray && editValue === null) {
            node.splice(editKey, 1);
            editOffset++;
          } else {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? inArray ? index : keys[index] : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    var result = void 0;

    if (!Array.isArray(node)) {
      if (!isNode(node)) {
        throw new Error("Invalid AST Node: ".concat(inspect(node), "."));
      }

      var visitFn = getVisitFn(visitor, node.kind, isLeaving);

      if (visitFn) {
        result = visitFn.call(visitor, node, key, parent, path, ancestors);

        if (result === BREAK) {
          break;
        }

        if (result === false) {
          if (!isLeaving) {
            path.pop();
            continue;
          }
        } else if (result !== undefined) {
          edits.push([key, result]);

          if (!isLeaving) {
            if (isNode(result)) {
              node = result;
            } else {
              path.pop();
              continue;
            }
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _visitorKeys$node$kin;

      stack = {
        inArray: inArray,
        index: index,
        keys: keys,
        edits: edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_visitorKeys$node$kin = visitorKeys[node.kind]) !== null && _visitorKeys$node$kin !== void 0 ? _visitorKeys$node$kin : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 */

function getVisitFn(visitor, kind, isLeaving) {
  var kindVisitor = visitor[kind];

  if (kindVisitor) {
    if (!isLeaving && typeof kindVisitor === 'function') {
      // { Kind() {} }
      return kindVisitor;
    }

    var kindSpecificVisitor = isLeaving ? kindVisitor.leave : kindVisitor.enter;

    if (typeof kindSpecificVisitor === 'function') {
      // { Kind: { enter() {}, leave() {} } }
      return kindSpecificVisitor;
    }
  } else {
    var specificVisitor = isLeaving ? visitor.leave : visitor.enter;

    if (specificVisitor) {
      if (typeof specificVisitor === 'function') {
        // { enter() {}, leave() {} }
        return specificVisitor;
      }

      var specificKindVisitor = specificVisitor[kind];

      if (typeof specificKindVisitor === 'function') {
        // { enter: { Kind() {} }, leave: { Kind() {} } }
        return specificKindVisitor;
      }
    }
  }
}

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  var startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  var endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.


  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (var i = 0; i < str.length; ++i) {
    if (str[i] !== ' ' && str[i] !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */


function getBlockStringIndentation(value) {
  var _commonIndent;

  var isFirstLine = true;
  var isEmptyLine = true;
  var indent = 0;
  var commonIndent = null;

  for (var i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (isEmptyLine && !isFirstLine && (commonIndent === null || indent < commonIndent)) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0 ? _commonIndent : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var hasTrailingSlash = value[value.length - 1] === '\\';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || hasTrailingSlash || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */

function print(ast) {
  return visit(ast, {
    leave: printDocASTReducer
  });
}
var MAX_LINE_LENGTH = 80; // TODO: provide better type coverage in future

var printDocASTReducer = {
  Name: function Name(node) {
    return node.value;
  },
  Variable: function Variable(node) {
    return '$' + node.name;
  },
  // Document
  Document: function Document(node) {
    return join(node.definitions, '\n\n') + '\n';
  },
  OperationDefinition: function OperationDefinition(node) {
    var op = node.operation;
    var name = node.name;
    var varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
    var directives = join(node.directives, ' ');
    var selectionSet = node.selectionSet; // Anonymous queries with no directives or variable definitions can use
    // the query short form.

    return !name && !directives && !varDefs && op === 'query' ? selectionSet : join([op, join([name, varDefs]), directives, selectionSet], ' ');
  },
  VariableDefinition: function VariableDefinition(_ref) {
    var variable = _ref.variable,
        type = _ref.type,
        defaultValue = _ref.defaultValue,
        directives = _ref.directives;
    return variable + ': ' + type + wrap(' = ', defaultValue) + wrap(' ', join(directives, ' '));
  },
  SelectionSet: function SelectionSet(_ref2) {
    var selections = _ref2.selections;
    return block(selections);
  },
  Field: function Field(_ref3) {
    var alias = _ref3.alias,
        name = _ref3.name,
        args = _ref3.arguments,
        directives = _ref3.directives,
        selectionSet = _ref3.selectionSet;
    var prefix = wrap('', alias, ': ') + name;
    var argsLine = prefix + wrap('(', join(args, ', '), ')');

    if (argsLine.length > MAX_LINE_LENGTH) {
      argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
    }

    return join([argsLine, join(directives, ' '), selectionSet], ' ');
  },
  Argument: function Argument(_ref4) {
    var name = _ref4.name,
        value = _ref4.value;
    return name + ': ' + value;
  },
  // Fragments
  FragmentSpread: function FragmentSpread(_ref5) {
    var name = _ref5.name,
        directives = _ref5.directives;
    return '...' + name + wrap(' ', join(directives, ' '));
  },
  InlineFragment: function InlineFragment(_ref6) {
    var typeCondition = _ref6.typeCondition,
        directives = _ref6.directives,
        selectionSet = _ref6.selectionSet;
    return join(['...', wrap('on ', typeCondition), join(directives, ' '), selectionSet], ' ');
  },
  FragmentDefinition: function FragmentDefinition(_ref7) {
    var name = _ref7.name,
        typeCondition = _ref7.typeCondition,
        variableDefinitions = _ref7.variableDefinitions,
        directives = _ref7.directives,
        selectionSet = _ref7.selectionSet;
    return (// Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(name).concat(wrap('(', join(variableDefinitions, ', '), ')'), " ") + "on ".concat(typeCondition, " ").concat(wrap('', join(directives, ' '), ' ')) + selectionSet
    );
  },
  // Value
  IntValue: function IntValue(_ref8) {
    var value = _ref8.value;
    return value;
  },
  FloatValue: function FloatValue(_ref9) {
    var value = _ref9.value;
    return value;
  },
  StringValue: function StringValue(_ref10, key) {
    var value = _ref10.value,
        isBlockString = _ref10.block;
    return isBlockString ? printBlockString(value, key === 'description' ? '' : '  ') : JSON.stringify(value);
  },
  BooleanValue: function BooleanValue(_ref11) {
    var value = _ref11.value;
    return value ? 'true' : 'false';
  },
  NullValue: function NullValue() {
    return 'null';
  },
  EnumValue: function EnumValue(_ref12) {
    var value = _ref12.value;
    return value;
  },
  ListValue: function ListValue(_ref13) {
    var values = _ref13.values;
    return '[' + join(values, ', ') + ']';
  },
  ObjectValue: function ObjectValue(_ref14) {
    var fields = _ref14.fields;
    return '{' + join(fields, ', ') + '}';
  },
  ObjectField: function ObjectField(_ref15) {
    var name = _ref15.name,
        value = _ref15.value;
    return name + ': ' + value;
  },
  // Directive
  Directive: function Directive(_ref16) {
    var name = _ref16.name,
        args = _ref16.arguments;
    return '@' + name + wrap('(', join(args, ', '), ')');
  },
  // Type
  NamedType: function NamedType(_ref17) {
    var name = _ref17.name;
    return name;
  },
  ListType: function ListType(_ref18) {
    var type = _ref18.type;
    return '[' + type + ']';
  },
  NonNullType: function NonNullType(_ref19) {
    var type = _ref19.type;
    return type + '!';
  },
  // Type System Definitions
  SchemaDefinition: addDescription(function (_ref20) {
    var directives = _ref20.directives,
        operationTypes = _ref20.operationTypes;
    return join(['schema', join(directives, ' '), block(operationTypes)], ' ');
  }),
  OperationTypeDefinition: function OperationTypeDefinition(_ref21) {
    var operation = _ref21.operation,
        type = _ref21.type;
    return operation + ': ' + type;
  },
  ScalarTypeDefinition: addDescription(function (_ref22) {
    var name = _ref22.name,
        directives = _ref22.directives;
    return join(['scalar', name, join(directives, ' ')], ' ');
  }),
  ObjectTypeDefinition: addDescription(function (_ref23) {
    var name = _ref23.name,
        interfaces = _ref23.interfaces,
        directives = _ref23.directives,
        fields = _ref23.fields;
    return join(['type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  FieldDefinition: addDescription(function (_ref24) {
    var name = _ref24.name,
        args = _ref24.arguments,
        type = _ref24.type,
        directives = _ref24.directives;
    return name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + ': ' + type + wrap(' ', join(directives, ' '));
  }),
  InputValueDefinition: addDescription(function (_ref25) {
    var name = _ref25.name,
        type = _ref25.type,
        defaultValue = _ref25.defaultValue,
        directives = _ref25.directives;
    return join([name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')], ' ');
  }),
  InterfaceTypeDefinition: addDescription(function (_ref26) {
    var name = _ref26.name,
        interfaces = _ref26.interfaces,
        directives = _ref26.directives,
        fields = _ref26.fields;
    return join(['interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  }),
  UnionTypeDefinition: addDescription(function (_ref27) {
    var name = _ref27.name,
        directives = _ref27.directives,
        types = _ref27.types;
    return join(['union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  }),
  EnumTypeDefinition: addDescription(function (_ref28) {
    var name = _ref28.name,
        directives = _ref28.directives,
        values = _ref28.values;
    return join(['enum', name, join(directives, ' '), block(values)], ' ');
  }),
  EnumValueDefinition: addDescription(function (_ref29) {
    var name = _ref29.name,
        directives = _ref29.directives;
    return join([name, join(directives, ' ')], ' ');
  }),
  InputObjectTypeDefinition: addDescription(function (_ref30) {
    var name = _ref30.name,
        directives = _ref30.directives,
        fields = _ref30.fields;
    return join(['input', name, join(directives, ' '), block(fields)], ' ');
  }),
  DirectiveDefinition: addDescription(function (_ref31) {
    var name = _ref31.name,
        args = _ref31.arguments,
        repeatable = _ref31.repeatable,
        locations = _ref31.locations;
    return 'directive @' + name + (hasMultilineItems(args) ? wrap('(\n', indent(join(args, '\n')), '\n)') : wrap('(', join(args, ', '), ')')) + (repeatable ? ' repeatable' : '') + ' on ' + join(locations, ' | ');
  }),
  SchemaExtension: function SchemaExtension(_ref32) {
    var directives = _ref32.directives,
        operationTypes = _ref32.operationTypes;
    return join(['extend schema', join(directives, ' '), block(operationTypes)], ' ');
  },
  ScalarTypeExtension: function ScalarTypeExtension(_ref33) {
    var name = _ref33.name,
        directives = _ref33.directives;
    return join(['extend scalar', name, join(directives, ' ')], ' ');
  },
  ObjectTypeExtension: function ObjectTypeExtension(_ref34) {
    var name = _ref34.name,
        interfaces = _ref34.interfaces,
        directives = _ref34.directives,
        fields = _ref34.fields;
    return join(['extend type', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  InterfaceTypeExtension: function InterfaceTypeExtension(_ref35) {
    var name = _ref35.name,
        interfaces = _ref35.interfaces,
        directives = _ref35.directives,
        fields = _ref35.fields;
    return join(['extend interface', name, wrap('implements ', join(interfaces, ' & ')), join(directives, ' '), block(fields)], ' ');
  },
  UnionTypeExtension: function UnionTypeExtension(_ref36) {
    var name = _ref36.name,
        directives = _ref36.directives,
        types = _ref36.types;
    return join(['extend union', name, join(directives, ' '), types && types.length !== 0 ? '= ' + join(types, ' | ') : ''], ' ');
  },
  EnumTypeExtension: function EnumTypeExtension(_ref37) {
    var name = _ref37.name,
        directives = _ref37.directives,
        values = _ref37.values;
    return join(['extend enum', name, join(directives, ' '), block(values)], ' ');
  },
  InputObjectTypeExtension: function InputObjectTypeExtension(_ref38) {
    var name = _ref38.name,
        directives = _ref38.directives,
        fields = _ref38.fields;
    return join(['extend input', name, join(directives, ' '), block(fields)], ' ');
  }
};

function addDescription(cb) {
  return function (node) {
    return join([node.description, cb(node)], '\n');
  };
}
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */


function join(maybeArray) {
  var _maybeArray$filter$jo;

  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter(function (x) {
    return x;
  }).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : '';
}
/**
 * Given array, print each item on its own line, wrapped in an
 * indented "{ }" block.
 */


function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */


function wrap(start, maybeString) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return maybeString != null && maybeString !== '' ? start + maybeString + end : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function isMultiline(str) {
  return str.indexOf('\n') !== -1;
}

function hasMultilineItems(maybeArray) {
  return maybeArray != null && maybeArray.some(isMultiline);
}

function _typeof$2(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$2(obj);
}
/**
 * Return true if `value` is object-like. A value is object-like if it's not
 * `null` and has a `typeof` result of "object".
 */


function isObjectLike(value) {
  return _typeof$2(value) == 'object' && value !== null;
}

// In ES2015 (or a polyfilled) environment, this will be Symbol.iterator

var SYMBOL_TO_STRING_TAG = typeof Symbol === 'function' && Symbol.toStringTag != null ? Symbol.toStringTag : '@@toStringTag';

/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}

/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printLocation(location) {
  return printSourceLocation(location.source, getLocation(location.source, location.start));
}
/**
 * Render a helpful description of the location in the GraphQL Source document.
 */

function printSourceLocation(source, sourceLocation) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = sourceLocation.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = sourceLocation.line + lineOffset;
  var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = sourceLocation.column + columnOffset;
  var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
  var lines = body.split(/\r\n|[\n\r]/g);
  var locationLine = lines[lineIndex]; // Special case for minified documents

  if (locationLine.length > 120) {
    var subLineIndex = Math.floor(columnNum / 80);
    var subLineColumnNum = columnNum % 80;
    var subLines = [];

    for (var i = 0; i < locationLine.length; i += 80) {
      subLines.push(locationLine.slice(i, i + 80));
    }

    return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
      return ['', subLine];
    }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
  }

  return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    _ref[0];
        var line = _ref[1];
    return line !== undefined;
  });
  var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
    var prefix = _ref2[0];
    return prefix.length;
  }));
  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function leftPad(len, str) {
  return whitespace(len - str.length) + str;
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
} // FIXME:
/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

var GraphQLError = /*#__PURE__*/function (_Error) {
  _inherits(GraphQLError, _Error);

  var _super = _createSuper(GraphQLError);
  /**
   * A message describing the Error for debugging purposes.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   *
   * Note: should be treated as readonly, despite invariant usage.
   */

  /**
   * An array of { line, column } locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */

  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */

  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */

  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */

  /**
   * The original error thrown from a field resolver during execution.
   */

  /**
   * Extension fields to add to the formatted error.
   */


  function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
    var _locations2, _source2, _positions2, _extensions2;

    var _this;

    _classCallCheck(this, GraphQLError);

    _this = _super.call(this, message); // Compute list of blame nodes.

    var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


    var _source = source;

    if (!_source && _nodes) {
      var _nodes$0$loc;

      _source = (_nodes$0$loc = _nodes[0].loc) === null || _nodes$0$loc === void 0 ? void 0 : _nodes$0$loc.source;
    }

    var _positions = positions;

    if (!_positions && _nodes) {
      _positions = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(node.loc.start);
        }

        return list;
      }, []);
    }

    if (_positions && _positions.length === 0) {
      _positions = undefined;
    }

    var _locations;

    if (positions && source) {
      _locations = positions.map(function (pos) {
        return getLocation(source, pos);
      });
    } else if (_nodes) {
      _locations = _nodes.reduce(function (list, node) {
        if (node.loc) {
          list.push(getLocation(node.loc.source, node.loc.start));
        }

        return list;
      }, []);
    }

    var _extensions = extensions;

    if (_extensions == null && originalError != null) {
      var originalExtensions = originalError.extensions;

      if (isObjectLike(originalExtensions)) {
        _extensions = originalExtensions;
      }
    }

    Object.defineProperties(_assertThisInitialized(_this), {
      name: {
        value: 'GraphQLError'
      },
      message: {
        value: message,
        // By being enumerable, JSON.stringify will include `message` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: true,
        writable: true
      },
      locations: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_locations2 = _locations) !== null && _locations2 !== void 0 ? _locations2 : undefined,
        // By being enumerable, JSON.stringify will include `locations` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _locations != null
      },
      path: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: path !== null && path !== void 0 ? path : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: path != null
      },
      nodes: {
        value: _nodes !== null && _nodes !== void 0 ? _nodes : undefined
      },
      source: {
        value: (_source2 = _source) !== null && _source2 !== void 0 ? _source2 : undefined
      },
      positions: {
        value: (_positions2 = _positions) !== null && _positions2 !== void 0 ? _positions2 : undefined
      },
      originalError: {
        value: originalError
      },
      extensions: {
        // Coercing falsy values to undefined ensures they will not be included
        // in JSON.stringify() when not provided.
        value: (_extensions2 = _extensions) !== null && _extensions2 !== void 0 ? _extensions2 : undefined,
        // By being enumerable, JSON.stringify will include `path` in the
        // resulting output. This ensures that the simplest possible GraphQL
        // service adheres to the spec.
        enumerable: _extensions != null
      }
    }); // Include (non-enumerable) stack trace.

    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
      return _possibleConstructorReturn(_this);
    } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
    } else {
      Object.defineProperty(_assertThisInitialized(_this), 'stack', {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }

    return _this;
  }

  _createClass$1(GraphQLError, [{
    key: "toString",
    value: function toString() {
      return printError(this);
    } // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet

  }, {
    key: SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Object';
    }
  }]);

  return GraphQLError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + printLocation(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + printSourceLocation(error.source, location);
    }
  }

  return output;
}

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}

/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

function devAssert(condition, message) {
  var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/

var instanceOf = process.env.NODE_ENV === 'production' ? // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
// eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  return value instanceof constructor;
} : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (_typeof(value) === 'object' && value !== null) {
    var _value$constructor;

    var className = constructor.prototype[Symbol.toStringTag];
    var valueClassName = // We still need to support constructor's name to detect conflicts with older versions of this library.
    Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name;

    if (className === valueClassName) {
      var stringifiedValue = inspect(value);
      throw new Error("Cannot use ".concat(className, " \"").concat(stringifiedValue, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
};

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/**
 * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
 * optional, but they are useful for clients who store GraphQL documents in source files.
 * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
 * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
 * The `line` and `column` properties in `locationOffset` are 1-indexed.
 */

var Source = /*#__PURE__*/function () {
  function Source(body) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
    var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof body === 'string' || devAssert(0, "Body must be a string. Received: ".concat(inspect(body), "."));
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(0, 'line in locationOffset is 1-indexed and must be positive.');
    this.locationOffset.column > 0 || devAssert(0, 'column in locationOffset is 1-indexed and must be positive.');
  } // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet


  _createClass(Source, [{
    key: SYMBOL_TO_STRING_TAG,
    get: function get() {
      return 'Source';
    }
  }]);

  return Source;
}();
/**
 * Test if the given value is a Source object.
 *
 * @internal
 */
// eslint-disable-next-line no-redeclare

function isSource(source) {
  return instanceOf(source, Source);
}

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

/**
 * Given a Source object, creates a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */

var Lexer = /*#__PURE__*/function () {
  /**
   * The previously focused non-ignored token.
   */

  /**
   * The currently focused non-ignored token.
   */

  /**
   * The (1-indexed) line containing the current token.
   */

  /**
   * The character offset at which the current line begins.
   */
  function Lexer(source) {
    var startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0, null);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */


  var _proto = Lexer.prototype;

  _proto.advance = function advance() {
    this.lastToken = this.token;
    var token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  ;

  _proto.lookahead = function lookahead() {
    var token = this.token;

    if (token.kind !== TokenKind.EOF) {
      do {
        var _token$next; // Note: next is only mutable during parsing, so we cast to allow this.


        token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
      } while (token.kind === TokenKind.COMMENT);
    }

    return token;
  };

  return Lexer;
}();
/**
 * @internal
 */

function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = prev.end;

  while (pos < bodyLength) {
    var code = body.charCodeAt(pos);
    var _line = lexer.line;

    var _col = 1 + pos - lexer.lineStart; // SourceCharacter


    switch (code) {
      case 0xfeff: // <BOM>

      case 9: //   \t

      case 32: //  <space>

      case 44:
        //  ,
        ++pos;
        continue;

      case 10:
        //  \n
        ++pos;
        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 13:
        //  \r
        if (body.charCodeAt(pos + 1) === 10) {
          pos += 2;
        } else {
          ++pos;
        }

        ++lexer.line;
        lexer.lineStart = pos;
        continue;

      case 33:
        //  !
        return new Token(TokenKind.BANG, pos, pos + 1, _line, _col, prev);

      case 35:
        //  #
        return readComment(source, pos, _line, _col, prev);

      case 36:
        //  $
        return new Token(TokenKind.DOLLAR, pos, pos + 1, _line, _col, prev);

      case 38:
        //  &
        return new Token(TokenKind.AMP, pos, pos + 1, _line, _col, prev);

      case 40:
        //  (
        return new Token(TokenKind.PAREN_L, pos, pos + 1, _line, _col, prev);

      case 41:
        //  )
        return new Token(TokenKind.PAREN_R, pos, pos + 1, _line, _col, prev);

      case 46:
        //  .
        if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
          return new Token(TokenKind.SPREAD, pos, pos + 3, _line, _col, prev);
        }

        break;

      case 58:
        //  :
        return new Token(TokenKind.COLON, pos, pos + 1, _line, _col, prev);

      case 61:
        //  =
        return new Token(TokenKind.EQUALS, pos, pos + 1, _line, _col, prev);

      case 64:
        //  @
        return new Token(TokenKind.AT, pos, pos + 1, _line, _col, prev);

      case 91:
        //  [
        return new Token(TokenKind.BRACKET_L, pos, pos + 1, _line, _col, prev);

      case 93:
        //  ]
        return new Token(TokenKind.BRACKET_R, pos, pos + 1, _line, _col, prev);

      case 123:
        // {
        return new Token(TokenKind.BRACE_L, pos, pos + 1, _line, _col, prev);

      case 124:
        // |
        return new Token(TokenKind.PIPE, pos, pos + 1, _line, _col, prev);

      case 125:
        // }
        return new Token(TokenKind.BRACE_R, pos, pos + 1, _line, _col, prev);

      case 34:
        //  "
        if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
          return readBlockString(source, pos, _line, _col, prev, lexer);
        }

        return readString(source, pos, _line, _col, prev);

      case 45: //  -

      case 48: //  0

      case 49: //  1

      case 50: //  2

      case 51: //  3

      case 52: //  4

      case 53: //  5

      case 54: //  6

      case 55: //  7

      case 56: //  8

      case 57:
        //  9
        return readNumber(source, pos, code, _line, _col, prev);

      case 65: //  A

      case 66: //  B

      case 67: //  C

      case 68: //  D

      case 69: //  E

      case 70: //  F

      case 71: //  G

      case 72: //  H

      case 73: //  I

      case 74: //  J

      case 75: //  K

      case 76: //  L

      case 77: //  M

      case 78: //  N

      case 79: //  O

      case 80: //  P

      case 81: //  Q

      case 82: //  R

      case 83: //  S

      case 84: //  T

      case 85: //  U

      case 86: //  V

      case 87: //  W

      case 88: //  X

      case 89: //  Y

      case 90: //  Z

      case 95: //  _

      case 97: //  a

      case 98: //  b

      case 99: //  c

      case 100: // d

      case 101: // e

      case 102: // f

      case 103: // g

      case 104: // h

      case 105: // i

      case 106: // j

      case 107: // k

      case 108: // l

      case 109: // m

      case 110: // n

      case 111: // o

      case 112: // p

      case 113: // q

      case 114: // r

      case 115: // s

      case 116: // t

      case 117: // u

      case 118: // v

      case 119: // w

      case 120: // x

      case 121: // y

      case 122:
        // z
        return readName(source, pos, _line, _col, prev);
    }

    throw syntaxError(source, pos, unexpectedCharacterMessage(code));
  }

  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;
  return new Token(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Token(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  } // Numbers cannot be followed by . or NameStart


  if (code === 46 || isNameStart(code)) {
    throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
  }

  return new Token(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new Token(TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          {
            // uXXXX
            var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

            if (charCode < 0) {
              var invalidSequence = body.slice(position + 1, position + 5);
              throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
            }

            value += String.fromCharCode(charCode);
            position += 4;
            break;
          }

        default:
          throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new Token(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw syntaxError(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Token(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
} // _ A-Z a-z


function isNameStart(code) {
  return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
}

/**
 * Configuration options to control parser behavior
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */

function parse(source, options) {
  var parser = new Parser(source, options);
  return parser.parseDocument();
}
/**
 * This class is exported only to assist people in implementing their own parsers
 * without duplicating too much code and should be used only as last resort for cases
 * such as experimental syntax or if certain features could not be contributed upstream.
 *
 * It is still part of the internal API and is versioned, so any changes to it are never
 * considered breaking changes. If you still need to support multiple versions of the
 * library, please use the `versionInfo` variable for version detection.
 *
 * @internal
 */

var Parser = /*#__PURE__*/function () {
  function Parser(source, options) {
    var sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
  }
  /**
   * Converts a name lex token into a name parse node.
   */


  var _proto = Parser.prototype;

  _proto.parseName = function parseName() {
    var token = this.expectToken(TokenKind.NAME);
    return {
      kind: Kind.NAME,
      value: token.value,
      loc: this.loc(token)
    };
  } // Implements the parsing rules in the Document section.

  /**
   * Document : Definition+
   */
  ;

  _proto.parseDocument = function parseDocument() {
    var start = this._lexer.token;
    return {
      kind: Kind.DOCUMENT,
      definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
      loc: this.loc(start)
    };
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   */
  ;

  _proto.parseDefinition = function parseDefinition() {
    if (this.peek(TokenKind.NAME)) {
      switch (this._lexer.token.value) {
        case 'query':
        case 'mutation':
        case 'subscription':
          return this.parseOperationDefinition();

        case 'fragment':
          return this.parseFragmentDefinition();

        case 'schema':
        case 'scalar':
        case 'type':
        case 'interface':
        case 'union':
        case 'enum':
        case 'input':
        case 'directive':
          return this.parseTypeSystemDefinition();

        case 'extend':
          return this.parseTypeSystemExtension();
      }
    } else if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    } else if (this.peekDescription()) {
      return this.parseTypeSystemDefinition();
    }

    throw this.unexpected();
  } // Implements the parsing rules in the Operations section.

  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  ;

  _proto.parseOperationDefinition = function parseOperationDefinition() {
    var start = this._lexer.token;

    if (this.peek(TokenKind.BRACE_L)) {
      return {
        kind: Kind.OPERATION_DEFINITION,
        operation: 'query',
        name: undefined,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    var operation = this.parseOperationType();
    var name;

    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }

    return {
      kind: Kind.OPERATION_DEFINITION,
      operation: operation,
      name: name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * OperationType : one of query mutation subscription
   */
  ;

  _proto.parseOperationType = function parseOperationType() {
    var operationToken = this.expectToken(TokenKind.NAME);

    switch (operationToken.value) {
      case 'query':
        return 'query';

      case 'mutation':
        return 'mutation';

      case 'subscription':
        return 'subscription';
    }

    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  ;

  _proto.parseVariableDefinitions = function parseVariableDefinitions() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseVariableDefinition = function parseVariableDefinition() {
    var start = this._lexer.token;
    return {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
      directives: this.parseDirectives(true),
      loc: this.loc(start)
    };
  }
  /**
   * Variable : $ Name
   */
  ;

  _proto.parseVariable = function parseVariable() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return {
      kind: Kind.VARIABLE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  }
  /**
   * SelectionSet : { Selection+ }
   */
  ;

  _proto.parseSelectionSet = function parseSelectionSet() {
    var start = this._lexer.token;
    return {
      kind: Kind.SELECTION_SET,
      selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  ;

  _proto.parseSelection = function parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  ;

  _proto.parseField = function parseField() {
    var start = this._lexer.token;
    var nameOrAlias = this.parseName();
    var alias;
    var name;

    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }

    return {
      kind: Kind.FIELD,
      alias: alias,
      name: name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
      loc: this.loc(start)
    };
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  ;

  _proto.parseArguments = function parseArguments(isConst) {
    var item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseArgument = function parseArgument() {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.ARGUMENT,
      name: name,
      value: this.parseValueLiteral(false),
      loc: this.loc(start)
    };
  };

  _proto.parseConstArgument = function parseConstArgument() {
    var start = this._lexer.token;
    return {
      kind: Kind.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Fragments section.

  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  ;

  _proto.parseFragment = function parseFragment() {
    var start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    var hasTypeCondition = this.expectOptionalKeyword('on');

    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  ;

  _proto.parseFragmentDefinition = function parseFragmentDefinition() {
    var _this$_options;

    var start = this._lexer.token;
    this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
    // the grammar of FragmentDefinition:
    //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

    if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
      return {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(start)
      };
    }

    return {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(start)
    };
  }
  /**
   * FragmentName : Name but not `on`
   */
  ;

  _proto.parseFragmentName = function parseFragmentName() {
    if (this._lexer.token.value === 'on') {
      throw this.unexpected();
    }

    return this.parseName();
  } // Implements the parsing rules in the Values section.

  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  ;

  _proto.parseValueLiteral = function parseValueLiteral(isConst) {
    var token = this._lexer.token;

    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);

      case TokenKind.BRACE_L:
        return this.parseObject(isConst);

      case TokenKind.INT:
        this._lexer.advance();

        return {
          kind: Kind.INT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.FLOAT:
        this._lexer.advance();

        return {
          kind: Kind.FLOAT,
          value: token.value,
          loc: this.loc(token)
        };

      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();

      case TokenKind.NAME:
        this._lexer.advance();

        switch (token.value) {
          case 'true':
            return {
              kind: Kind.BOOLEAN,
              value: true,
              loc: this.loc(token)
            };

          case 'false':
            return {
              kind: Kind.BOOLEAN,
              value: false,
              loc: this.loc(token)
            };

          case 'null':
            return {
              kind: Kind.NULL,
              loc: this.loc(token)
            };

          default:
            return {
              kind: Kind.ENUM,
              value: token.value,
              loc: this.loc(token)
            };
        }

      case TokenKind.DOLLAR:
        if (!isConst) {
          return this.parseVariable();
        }

        break;
    }

    throw this.unexpected();
  };

  _proto.parseStringLiteral = function parseStringLiteral() {
    var token = this._lexer.token;

    this._lexer.advance();

    return {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING,
      loc: this.loc(token)
    };
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  ;

  _proto.parseList = function parseList(isConst) {
    var _this = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this.parseValueLiteral(isConst);
    };

    return {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   */
  ;

  _proto.parseObject = function parseObject(isConst) {
    var _this2 = this;

    var start = this._lexer.token;

    var item = function item() {
      return _this2.parseObjectField(isConst);
    };

    return {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
      loc: this.loc(start)
    };
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  ;

  _proto.parseObjectField = function parseObjectField(isConst) {
    var start = this._lexer.token;
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return {
      kind: Kind.OBJECT_FIELD,
      name: name,
      value: this.parseValueLiteral(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Directives section.

  /**
   * Directives[Const] : Directive[?Const]+
   */
  ;

  _proto.parseDirectives = function parseDirectives(isConst) {
    var directives = [];

    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }

    return directives;
  }
  /**
   * Directive[Const] : @ Name Arguments[?Const]?
   */
  ;

  _proto.parseDirective = function parseDirective(isConst) {
    var start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Types section.

  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  ;

  _proto.parseTypeReference = function parseTypeReference() {
    var start = this._lexer.token;
    var type;

    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      type = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = {
        kind: Kind.LIST_TYPE,
        type: type,
        loc: this.loc(start)
      };
    } else {
      type = this.parseNamedType();
    }

    if (this.expectOptionalToken(TokenKind.BANG)) {
      return {
        kind: Kind.NON_NULL_TYPE,
        type: type,
        loc: this.loc(start)
      };
    }

    return type;
  }
  /**
   * NamedType : Name
   */
  ;

  _proto.parseNamedType = function parseNamedType() {
    var start = this._lexer.token;
    return {
      kind: Kind.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(start)
    };
  } // Implements the parsing rules in the Type Definition section.

  /**
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
    // Many definitions begin with a description and require a lookahead.
    var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaDefinition();

        case 'scalar':
          return this.parseScalarTypeDefinition();

        case 'type':
          return this.parseObjectTypeDefinition();

        case 'interface':
          return this.parseInterfaceTypeDefinition();

        case 'union':
          return this.parseUnionTypeDefinition();

        case 'enum':
          return this.parseEnumTypeDefinition();

        case 'input':
          return this.parseInputObjectTypeDefinition();

        case 'directive':
          return this.parseDirectiveDefinition();
      }
    }

    throw this.unexpected(keywordToken);
  };

  _proto.peekDescription = function peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  ;

  _proto.parseDescription = function parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   */
  ;

  _proto.parseSchemaDefinition = function parseSchemaDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
    return {
      kind: Kind.SCHEMA_DEFINITION,
      description: description,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  ;

  _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
    var start = this._lexer.token;
    var operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    var type = this.parseNamedType();
    return {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation: operation,
      type: type,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  ;

  _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  ;

  _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
    var _this$_options2;

    if (!this.expectOptionalKeyword('implements')) {
      return [];
    }

    if (((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true) {
      var types = []; // Optional leading ampersand

      this.expectOptionalToken(TokenKind.AMP);

      do {
        types.push(this.parseNamedType());
      } while (this.expectOptionalToken(TokenKind.AMP) || this.peek(TokenKind.NAME));

      return types;
    }

    return this.delimitedMany(TokenKind.AMP, this.parseNamedType);
  }
  /**
   * FieldsDefinition : { FieldDefinition+ }
   */
  ;

  _proto.parseFieldsDefinition = function parseFieldsDefinition() {
    var _this$_options3; // Legacy support for the SDL?


    if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
      this._lexer.advance();

      this._lexer.advance();

      return [];
    }

    return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  ;

  _proto.parseFieldDefinition = function parseFieldDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.FIELD_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      type: type,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  ;

  _proto.parseArgumentDefs = function parseArgumentDefs() {
    return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  ;

  _proto.parseInputValueDef = function parseInputValueDef() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    this.expectToken(TokenKind.COLON);
    var type = this.parseTypeReference();
    var defaultValue;

    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseValueLiteral(true);
    }

    var directives = this.parseDirectives(true);
    return {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description: description,
      name: name,
      type: type,
      defaultValue: defaultValue,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  ;

  _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();
    return {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description: description,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  ;

  _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();
    return {
      kind: Kind.UNION_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  ;

  _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  ;

  _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();
    return {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * EnumValuesDefinition : { EnumValueDefinition+ }
   */
  ;

  _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   *
   * EnumValue : Name
   */
  ;

  _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    return {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  ;

  _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();
    return {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description: description,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InputFieldsDefinition : { InputValueDefinition+ }
   */
  ;

  _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
    return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  ;

  _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
    var keywordToken = this._lexer.lookahead();

    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case 'schema':
          return this.parseSchemaExtension();

        case 'scalar':
          return this.parseScalarTypeExtension();

        case 'type':
          return this.parseObjectTypeExtension();

        case 'interface':
          return this.parseInterfaceTypeExtension();

        case 'union':
          return this.parseUnionTypeExtension();

        case 'enum':
          return this.parseEnumTypeExtension();

        case 'input':
          return this.parseInputObjectTypeExtension();
      }
    }

    throw this.unexpected(keywordToken);
  }
  /**
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   */
  ;

  _proto.parseSchemaExtension = function parseSchemaExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('schema');
    var directives = this.parseDirectives(true);
    var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);

    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCHEMA_EXTENSION,
      directives: directives,
      operationTypes: operationTypes,
      loc: this.loc(start)
    };
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  ;

  _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('scalar');
    var name = this.parseName();
    var directives = this.parseDirectives(true);

    if (directives.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name: name,
      directives: directives,
      loc: this.loc(start)
    };
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  ;

  _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('type');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  ;

  _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('interface');
    var name = this.parseName();
    var interfaces = this.parseImplementsInterfaces();
    var directives = this.parseDirectives(true);
    var fields = this.parseFieldsDefinition();

    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name: name,
      interfaces: interfaces,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  ;

  _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('union');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var types = this.parseUnionMemberTypes();

    if (directives.length === 0 && types.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.UNION_TYPE_EXTENSION,
      name: name,
      directives: directives,
      types: types,
      loc: this.loc(start)
    };
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  ;

  _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('enum');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var values = this.parseEnumValuesDefinition();

    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name: name,
      directives: directives,
      values: values,
      loc: this.loc(start)
    };
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  ;

  _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
    var start = this._lexer.token;
    this.expectKeyword('extend');
    this.expectKeyword('input');
    var name = this.parseName();
    var directives = this.parseDirectives(true);
    var fields = this.parseInputFieldsDefinition();

    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }

    return {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name: name,
      directives: directives,
      fields: fields,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   */
  ;

  _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
    var start = this._lexer.token;
    var description = this.parseDescription();
    this.expectKeyword('directive');
    this.expectToken(TokenKind.AT);
    var name = this.parseName();
    var args = this.parseArgumentDefs();
    var repeatable = this.expectOptionalKeyword('repeatable');
    this.expectKeyword('on');
    var locations = this.parseDirectiveLocations();
    return {
      kind: Kind.DIRECTIVE_DEFINITION,
      description: description,
      name: name,
      arguments: args,
      repeatable: repeatable,
      locations: locations,
      loc: this.loc(start)
    };
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  ;

  _proto.parseDirectiveLocations = function parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  ;

  _proto.parseDirectiveLocation = function parseDirectiveLocation() {
    var start = this._lexer.token;
    var name = this.parseName();

    if (DirectiveLocation[name.value] !== undefined) {
      return name;
    }

    throw this.unexpected(start);
  } // Core parsing utility functions

  /**
   * Returns a location object, used to identify the place in the source that created a given parsed object.
   */
  ;

  _proto.loc = function loc(startToken) {
    var _this$_options4;

    if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
      return new Location(startToken, this._lexer.lastToken, this._lexer.source);
    }
  }
  /**
   * Determines if the next token is of a given kind
   */
  ;

  _proto.peek = function peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectToken = function expectToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    throw syntaxError(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and return undefined.
   */
  ;

  _proto.expectOptionalToken = function expectOptionalToken(kind) {
    var token = this._lexer.token;

    if (token.kind === kind) {
      this._lexer.advance();

      return token;
    }

    return undefined;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  ;

  _proto.expectKeyword = function expectKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();
    } else {
      throw syntaxError(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  ;

  _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
    var token = this._lexer.token;

    if (token.kind === TokenKind.NAME && token.value === value) {
      this._lexer.advance();

      return true;
    }

    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  ;

  _proto.unexpected = function unexpected(atToken) {
    var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.any = function any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }

    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      var nodes = [];

      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));

      return nodes;
    }

    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  ;

  _proto.many = function many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));

    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  ;

  _proto.delimitedMany = function delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    var nodes = [];

    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));

    return nodes;
  };

  return Parser;
}();
/**
 * A helper function to describe a token as a string for debugging.
 */

function getTokenDesc(token) {
  var value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
}
/**
 * A helper function to describe a token kind as a string for debugging.
 */


function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? "\"".concat(kind, "\"") : kind;
}

function l$2(a, b) {
  b.tag = a;
  return b;
}

function m$1() {}

function p$1(a) {
  return function (b) {
    var c = a.length;
    let d = !1,
        e = !1,
        f = !1,
        g = 0;
    b(l$2(0, [function (h) {
      if (h) {
        d = !0;
      } else if (e) {
        f = !0;
      } else {
        for (e = f = !0; f && !d;) {
          g < c ? (h = a[g], g = g + 1 | 0, f = !1, b(l$2(1, [h]))) : (d = !0, b(0));
        }

        e = !1;
      }
    }]));
  };
}

function r$1() {}

function t$1(a) {
  a(0);
}

function u$2(a) {
  let b = !1;
  a(l$2(0, [function (c) {
    c ? b = !0 : b || a(0);
  }]));
}

function x$1(a) {
  if (null === a || a[0] !== v$1) {
    return a;
  }

  if (0 !== (a = a[1])) {
    return [v$1, a - 1 | 0];
  }
}

function z$1(a) {
  return function (b) {
    return function (c) {
      function d(b) {
        'number' == typeof b ? k && (k = !1, void 0 !== (b = e.shift()) ? (b = a(x$1(b)), k = !0, b(d)) : q ? c(0) : g || (g = !0, f(0))) : b.tag ? k && (c(b), n ? n = !1 : h(0)) : (h = b = b[0], n = !1, b(0));
      }

      let e = [],
          f = m$1,
          g = !1,
          h = m$1,
          k = !1,
          n = !1,
          q = !1;
      b(function (b) {
        'number' == typeof b ? q || (q = !0, k || 0 !== e.length || c(0)) : b.tag ? q || (b = b[0], g = !1, k ? e.push(b) : (b = a(b), k = !0, b(d))) : f = b[0];
      });
      c(l$2(0, [function (c) {
        if (c) {
          if (q || (q = !0, f(1)), k) {
            return k = !1, h(1);
          }
        } else {
          q || g || (g = !0, f(0)), k && !n && (n = !0, h(0));
        }
      }]));
    };
  };
}

function B(a) {
  return a;
}

function C$1(a) {
  return a(0);
}

function D(a) {
  return function (b) {
    return function (c) {
      let e = m$1,
          f = !1,
          g = [],
          h = !1;
      b(function (b) {
        'number' == typeof b ? h || (h = !0, 0 === g.length && c(0)) : b.tag ? h || (f = !1, function (a) {
          function b(a) {
            'number' == typeof a ? 0 !== g.length && (g = g.filter(d), a = 0 === g.length, h && a ? c(0) : !f && a && (f = !0, e(0))) : a.tag ? 0 !== g.length && (c(l$2(1, [a[0]])), k(0)) : (k = a = a[0], g = g.concat(a), a(0));
          }

          function d(a) {
            return a !== k;
          }

          let k = m$1;
          1 === a.length ? a(b) : a.bind(null, b);
        }(a(b[0])), f || (f = !0, e(0))) : e = b[0];
      });
      c(l$2(0, [function (a) {
        a ? (h || (h = !0, e(a)), g.forEach(function (c) {
          return c(a);
        }), g = []) : (f || h ? f = !1 : (f = !0, e(0)), g.forEach(C$1));
      }]));
    };
  };
}

function E$1(a) {
  return a;
}

function H$1(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (e) {
        if ('number' == typeof e) {
          d || (d = !0, c(e));
        } else if (e.tag) {
          d || (a(e[0]), c(e));
        } else {
          var g = e[0];
          c(l$2(0, [function (a) {
            if (!d) {
              return a && (d = !0), g(a);
            }
          }]));
        }
      });
    };
  };
}

function J$1(a) {
  a(0);
}

function K$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        h && ('number' == typeof a ? (h = !1, n ? c(a) : f || (f = !0, e(0))) : a.tag ? (c(a), k ? k = !1 : g(0)) : (g = a = a[0], k = !1, a(0)));
      }

      let e = m$1,
          f = !1,
          g = m$1,
          h = !1,
          k = !1,
          n = !1;
      b(function (b) {
        'number' == typeof b ? n || (n = !0, h || c(0)) : b.tag ? n || (h && (g(1), g = m$1), f ? f = !1 : (f = !0, e(0)), b = a(b[0]), h = !0, b(d)) : e = b[0];
      });
      c(l$2(0, [function (a) {
        if (a) {
          if (n || (n = !0, e(1)), h) {
            return h = !1, g(1);
          }
        } else {
          n || f || (f = !0, e(0)), h && !k && (k = !0, g(0));
        }
      }]));
    };
  };
}

function M$1(a) {
  return function (b) {
    return function (c) {
      let d = [],
          e = m$1;
      return b(function (b) {
        'number' == typeof b ? p$1(d)(c) : b.tag ? (d.length >= a && 0 < a && d.shift(), d.push(b[0]), e(0)) : (b = b[0], 0 >= a ? (b(1), u$2(c)) : (e = b, b(0)));
      });
    };
  };
}

function N(a) {
  return function (b) {
    let c = m$1,
        d = !1;
    b(function (e) {
      'number' == typeof e ? d = !0 : e.tag ? d || (a(e[0]), c(0)) : (c = e = e[0], e(0));
    });
    return {
      unsubscribe: function () {
        if (!d) {
          return d = !0, c(1);
        }
      }
    };
  };
}

function O$1() {}

function concat$1(a) {
  return z$1(B)(p$1(a));
}

function filter$1(a) {
  return function (b) {
    return function (c) {
      let d = m$1;
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? a(b[0]) ? c(b) : d(0) : (d = b[0], c(b));
      });
    };
  };
}

function fromValue$1(a) {
  return function (b) {
    let c = !1;
    b(l$2(0, [function (d) {
      d ? c = !0 : c || (c = !0, b(l$2(1, [a])), b(0));
    }]));
  };
}

function make$1(a) {
  return function (b) {
    let c = r$1,
        d = !1;
    c = a({
      next: function (a) {
        d || b(l$2(1, [a]));
      },
      complete: function () {
        d || (d = !0, b(0));
      }
    });
    b(l$2(0, [function (a) {
      if (a && !d) {
        return d = !0, c();
      }
    }]));
  };
}

function makeSubject$1() {
  let a = [],
      b = !1;
  return {
    source: function (c) {
      function b(a) {
        return a !== c;
      }

      a = a.concat(c);
      c(l$2(0, [function (c) {
        c && (a = a.filter(b));
      }]));
    },
    next: function (c) {
      b || a.forEach(function (a) {
        a(l$2(1, [c]));
      });
    },
    complete: function () {
      b || (b = !0, a.forEach(t$1));
    }
  };
}

function map$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        b = 'number' == typeof b ? 0 : b.tag ? l$2(1, [a(b[0])]) : l$2(0, [b[0]]);
        c(b);
      });
    };
  };
}

function merge$1(a) {
  return D(E$1)(p$1(a));
}

function onEnd$1(a) {
  return function (b) {
    return function (c) {
      let d = !1;
      return b(function (b) {
        if ('number' == typeof b) {
          if (d) {
            return;
          }

          d = !0;
          c(b);
          return a();
        }

        if (b.tag) {
          d || c(b);
        } else {
          var e = b[0];
          c(l$2(0, [function (c) {
            if (!d) {
              return c ? (d = !0, e(c), a()) : e(c);
            }
          }]));
        }
      });
    };
  };
}

function onStart$1(a) {
  return function (b) {
    return function (c) {
      return b(function (b) {
        'number' == typeof b ? c(b) : b.tag ? c(b) : (c(b), a());
      });
    };
  };
}

function publish$1(a) {
  return N(O$1)(a);
}

function scan$1(a, b) {
  return function (a, b) {
    return function (c) {
      return function (d) {
        let e = b;
        return c(function (c) {
          'number' == typeof c ? c = 0 : c.tag ? (e = a(e, c[0]), c = l$2(1, [e])) : c = l$2(0, [c[0]]);
          d(c);
        });
      };
    };
  }(a, b);
}

function share$1(a) {
  function b(a) {
    'number' == typeof a ? (c.forEach(J$1), c = []) : a.tag ? (e = !1, c.forEach(function (b) {
      b(a);
    })) : d = a[0];
  }

  let c = [],
      d = m$1,
      e = !1;
  return function (f) {
    function g(a) {
      return a !== f;
    }

    c = c.concat(f);
    1 === c.length && a(b);
    f(l$2(0, [function (a) {
      if (a) {
        if (c = c.filter(g), 0 === c.length) {
          return d(1);
        }
      } else {
        e || (e = !0, d(a));
      }
    }]));
  };
}

function take$1(a) {
  return function (b) {
    return function (c) {
      let d = !1,
          e = 0,
          f = m$1;
      b(function (b) {
        'number' == typeof b ? d || (d = !0, c(0)) : b.tag ? e < a && !d && (e = e + 1 | 0, c(b), !d && e >= a && (d = !0, c(0), f(1))) : (b = b[0], 0 >= a ? (d = !0, c(0), b(1)) : f = b);
      });
      c(l$2(0, [function (b) {
        if (!d) {
          if (b) {
            return d = !0, f(1);
          }

          if (e < a) {
            return f(0);
          }
        }
      }]));
    };
  };
}

function takeUntil$1(a) {
  return function (b) {
    return function (c) {
      function d(a) {
        'number' != typeof a && (a.tag ? (e = !0, f(1), c(0)) : (g = a = a[0], a(0)));
      }

      let e = !1,
          f = m$1,
          g = m$1;
      b(function (b) {
        'number' == typeof b ? e || (e = !0, g(1), c(0)) : b.tag ? e || c(b) : (f = b[0], a(d));
      });
      c(l$2(0, [function (a) {
        if (!e) {
          return a ? (e = !0, f(1), g(1)) : f(0);
        }
      }]));
    };
  };
}

function takeWhile$1(a) {
  return function (b) {
    return function (c) {
      let d = m$1,
          e = !1;
      return b(function (b) {
        'number' == typeof b ? e || (e = !0, c(0)) : b.tag ? e || (a(b[0]) ? c(b) : (e = !0, c(0), d(1))) : (d = b[0], c(b));
      });
    };
  };
}

function toPromise$1(a) {
  return new Promise(function (b) {
    M$1(1)(a)(function (a) {
      if ('number' != typeof a) {
        if (a.tag) {
          b(a[0]);
        } else {
          a[0](0);
        }
      }
    });
  });
}

var v$1 = [];
    'function' == typeof Symbol ? Symbol.observable || (Symbol.observable = Symbol('observable')) : '@@observable';

function rehydrateGraphQlError(r) {
  if ("string" == typeof r) {
    return new GraphQLError(r);
  } else if ("object" == typeof r && r.message) {
    return new GraphQLError(r.message, r.nodes, r.source, r.positions, r.path, r, r.extensions || {});
  } else {
    return r;
  }
}

var a$1 = function (e) {
  function CombinedError(r) {
    var t = r.networkError;
    var n = r.response;
    var o = (r.graphQLErrors || []).map(rehydrateGraphQlError);

    var a = function generateErrorMessage(e, r) {
      var t = "";

      if (void 0 !== e) {
        return t = "[Network] " + e.message;
      }

      if (void 0 !== r) {
        r.forEach(function (e) {
          t += "[GraphQL] " + e.message + "\n";
        });
      }

      return t.trim();
    }(t, o);

    e.call(this, a);
    this.name = "CombinedError";
    this.message = a;
    this.graphQLErrors = o;
    this.networkError = t;
    this.response = n;
  }

  if (e) {
    CombinedError.__proto__ = e;
  }

  (CombinedError.prototype = Object.create(e && e.prototype)).constructor = CombinedError;

  CombinedError.prototype.toString = function toString() {
    return this.message;
  };

  return CombinedError;
}(Error);

function phash(e, r) {
  e |= 0;

  for (var t = 0, n = 0 | r.length; t < n; t++) {
    e = (e << 5) + e + r.charCodeAt(t);
  }

  return e;
}

function hash(e) {
  return phash(5381, e) >>> 0;
}

var i$1 = new Set();
var s$2 = new WeakMap();

function stringify(e) {
  if (null === e || i$1.has(e)) {
    return "null";
  } else if ("object" != typeof e) {
    return JSON.stringify(e) || "";
  } else if (e.toJSON) {
    return stringify(e.toJSON());
  } else if (Array.isArray(e)) {
    var r = "[";

    for (var t = 0, n = e.length; t < n; t++) {
      if (t > 0) {
        r += ",";
      }

      var o = stringify(e[t]);
      r += o.length > 0 ? o : "null";
    }

    return r += "]";
  }

  var a = Object.keys(e).sort();

  if (!a.length && e.constructor && e.constructor !== Object) {
    var f = s$2.get(e) || Math.random().toString(36).slice(2);
    s$2.set(e, f);
    return '{"__key":"' + f + '"}';
  }

  i$1.add(e);
  var u = "{";

  for (var c = 0, l = a.length; c < l; c++) {
    var h = a[c];
    var p = stringify(e[h]);

    if (p) {
      if (u.length > 1) {
        u += ",";
      }

      u += stringify(h) + ":" + p;
    }
  }

  i$1.delete(e);
  return u += "}";
}

function stringifyVariables(e) {
  i$1.clear();
  return stringify(e);
}

function stringifyDocument(e) {
  var r = ("string" != typeof e ? e.loc && e.loc.source.body || print(e) : e).replace(/([\s,]|#[^\n\r]+)+/g, " ").trim();

  if ("string" != typeof e) {
    var t = "definitions" in e && getOperationName(e);

    if (t) {
      r = "# " + t + "\n" + r;
    }

    if (!e.loc) {
      e.loc = {
        start: 0,
        end: r.length,
        source: {
          body: r,
          name: "gql",
          locationOffset: {
            line: 1,
            column: 1
          }
        }
      };
    }
  }

  return r;
}

var f$1 = new Map();

function keyDocument(e) {
  var r;
  var n;

  if ("string" == typeof e) {
    r = hash(stringifyDocument(e));
    n = f$1.get(r) || parse(e, {
      noLocation: !0
    });
  } else {
    r = e.__key || hash(stringifyDocument(e));
    n = f$1.get(r) || e;
  }

  if (!n.loc) {
    stringifyDocument(n);
  }

  n.__key = r;
  f$1.set(r, n);
  return n;
}

function createRequest(e, r) {
  if (!r) {
    r = {};
  }

  var t = keyDocument(e);
  return {
    key: phash(t.__key, stringifyVariables(r)) >>> 0,
    query: t,
    variables: r
  };
}

function getOperationName(e) {
  for (var t = 0, n = e.definitions.length; t < n; t++) {
    var o = e.definitions[t];

    if (o.kind === Kind.OPERATION_DEFINITION && o.name) {
      return o.name.value;
    }
  }
}

function getOperationType(e) {
  for (var t = 0, n = e.definitions.length; t < n; t++) {
    var o = e.definitions[t];

    if (o.kind === Kind.OPERATION_DEFINITION) {
      return o.operation;
    }
  }
}

function _extends$1() {
  return (_extends$1 = Object.assign || function (e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];

      for (var n in t) {
        if (Object.prototype.hasOwnProperty.call(t, n)) {
          e[n] = t[n];
        }
      }
    }

    return e;
  }).apply(this, arguments);
}

function makeResult(e, r, t) {
  if (!("data" in r) && !("errors" in r) || "path" in r) {
    throw new Error("No Content");
  }

  return {
    operation: e,
    data: r.data,
    error: Array.isArray(r.errors) ? new a$1({
      graphQLErrors: r.errors,
      response: t
    }) : void 0,
    extensions: "object" == typeof r.extensions && r.extensions || void 0,
    hasNext: !!r.hasNext
  };
}

function mergeResultPatch(e, r, t) {
  var n = _extends$1({}, e);

  n.hasNext = !!r.hasNext;

  if (!("path" in r)) {
    if ("data" in r) {
      n.data = r.data;
    }

    return n;
  }

  if (Array.isArray(r.errors)) {
    n.error = new a$1({
      graphQLErrors: n.error ? n.error.graphQLErrors.concat(r.errors) : r.errors,
      response: t
    });
  }

  var o = n.data = _extends$1({}, n.data);

  var i = 0;
  var s;

  while (i < r.path.length) {
    o = o[s = r.path[i++]] = Array.isArray(o[s]) ? [].concat(o[s]) : _extends$1({}, o[s]);
  }

  _extends$1(o, r.data);

  return n;
}

function makeErrorResult(e, r, t) {
  return {
    operation: e,
    data: void 0,
    error: new a$1({
      networkError: r,
      response: t
    }),
    extensions: void 0
  };
}

function shouldUseGet(e) {
  return "query" === e.kind && !!e.context.preferGetMethod;
}

function makeFetchBody(e) {
  return {
    query: print(e.query),
    operationName: getOperationName(e.query),
    variables: e.variables || void 0,
    extensions: void 0
  };
}

function makeFetchURL(e, r) {
  var t = shouldUseGet(e);
  var n = e.context.url;

  if (!t || !r) {
    return n;
  }

  var o = [];

  if (r.operationName) {
    o.push("operationName=" + encodeURIComponent(r.operationName));
  }

  if (r.query) {
    o.push("query=" + encodeURIComponent(r.query.replace(/#[^\n\r]+/g, " ").trim()));
  }

  if (r.variables) {
    o.push("variables=" + encodeURIComponent(stringifyVariables(r.variables)));
  }

  if (r.extensions) {
    o.push("extensions=" + encodeURIComponent(stringifyVariables(r.extensions)));
  }

  return n + "?" + o.join("&");
}

function makeFetchOptions(e, r) {
  var t = shouldUseGet(e);
  var n = "function" == typeof e.context.fetchOptions ? e.context.fetchOptions() : e.context.fetchOptions || {};
  return _extends$1({}, n, {
    body: !t && r ? JSON.stringify(r) : void 0,
    method: t ? "GET" : "POST",
    headers: t ? n.headers : _extends$1({}, {
      "content-type": "application/json"
    }, n.headers)
  });
}

var u$1 = "undefined" != typeof Symbol ? Symbol.asyncIterator : null;
var c$1 = "undefined" != typeof TextDecoder ? new TextDecoder() : null;
var l$1 = /content-type:[^\r\n]*application\/json/i;
var h = /boundary="?([^=";]+)"?/i;

function executeIncrementalFetch(e, r, t) {
  var n = t.headers && t.headers.get("Content-Type") || "";

  if (!/multipart\/mixed/i.test(n)) {
    return t.json().then(function (n) {
      e(makeResult(r, n, t));
    });
  }

  var o = "---";
  var a = n.match(h);

  if (a) {
    o = "--" + a[1];
  }

  var i;

  var cancel = function () {};

  if (u$1 && t[u$1]) {
    var s = t[u$1]();
    i = s.next.bind(s);
  } else if ("body" in t && t.body) {
    var f = t.body.getReader();
    cancel = f.cancel.bind(f);
    i = f.read.bind(f);
  } else {
    throw new TypeError("Streaming requests unsupported");
  }

  var p = "";
  var d = !0;
  var v = null;
  var m = null;
  return i().then(function next(n) {
    if (!n.done) {
      var a = function toString(e) {
        return "undefined" != typeof Buffer && Buffer.isBuffer(e) ? e.toString() : c$1.decode(e);
      }(n.value);

      var s = a.indexOf(o);

      if (s > -1) {
        s += p.length;
      } else {
        s = p.indexOf(o);
      }

      p += a;

      while (s > -1) {
        var f = p.slice(0, s);
        var u = p.slice(s + o.length);

        if (d) {
          d = !1;
        } else {
          var h = f.indexOf("\r\n\r\n") + 4;
          var g = f.slice(0, h);
          var y = f.slice(h, f.lastIndexOf("\r\n"));
          var x = void 0;

          if (l$1.test(g)) {
            try {
              x = JSON.parse(y);
              v = m = m ? mergeResultPatch(m, x, t) : makeResult(r, x, t);
            } catch (e) {}
          }

          if ("--" === u.slice(0, 2) || x && !x.hasNext) {
            if (!m) {
              return e(makeResult(r, {}, t));
            }

            break;
          }
        }

        s = (p = u).indexOf(o);
      }
    }

    if (v) {
      e(v);
      v = null;
    }

    if (!n.done && (!m || m.hasNext)) {
      return i().then(next);
    }
  }).finally(cancel);
}

function makeFetchSource(e, r, t) {
  var n = "manual" === t.redirect ? 400 : 300;
  var a = e.context.fetch;
  return make$1(function (o) {
    var i = o.next;
    var s = o.complete;
    var f = "undefined" != typeof AbortController ? new AbortController() : null;

    if (f) {
      t.signal = f.signal;
    }

    var u = !1;
    var c = !1;
    var l;
    Promise.resolve().then(function () {
      if (u) {
        return;
      }

      return (a || fetch)(r, t);
    }).then(function (r) {
      if (!r) {
        return;
      }

      c = (l = r).status < 200 || l.status >= n;
      return executeIncrementalFetch(i, e, l);
    }).then(s).catch(function (r) {
      if ("AbortError" !== r.name) {
        var t = makeErrorResult(e, c ? new Error(l.statusText) : r, l);
        i(t);
        s();
      }
    });
    return function () {
      u = !0;

      if (f) {
        f.abort();
      }
    };
  });
}

function collectTypes(e, r) {
  if (Array.isArray(e)) {
    for (var n = 0; n < e.length; n++) {
      collectTypes(e[n], r);
    }
  } else if ("object" == typeof e && null !== e) {
    for (var t in e) {
      if ("__typename" === t && "string" == typeof e[t]) {
        r[e[t]] = 0;
      } else {
        collectTypes(e[t], r);
      }
    }
  }

  return r;
}

function collectTypesFromResponse(e) {
  return Object.keys(collectTypes(e, {}));
}

var formatNode = function (e) {
  if (e.selectionSet && !e.selectionSet.selections.some(function (e) {
    return e.kind === Kind.FIELD && "__typename" === e.name.value && !e.alias;
  })) {
    return _extends$1({}, e, {
      selectionSet: _extends$1({}, e.selectionSet, {
        selections: e.selectionSet.selections.concat([{
          kind: Kind.FIELD,
          name: {
            kind: Kind.NAME,
            value: "__typename"
          }
        }])
      })
    });
  }
};

var Q = new Map();

function formatDocument(r) {
  var n = keyDocument(r);
  var a = Q.get(n.__key);

  if (!a) {
    a = visit(n, {
      Field: formatNode,
      InlineFragment: formatNode
    });
    Object.defineProperty(a, "__key", {
      value: n.__key,
      enumerable: !1
    });
    Q.set(n.__key, a);
  }

  return a;
}

function maskTypename(e) {
  if (!e || "object" != typeof e) {
    return e;
  }

  return Object.keys(e).reduce(function (r, n) {
    var t = e[n];

    if ("__typename" === n) {
      Object.defineProperty(r, "__typename", {
        enumerable: !1,
        value: t
      });
    } else if (Array.isArray(t)) {
      r[n] = t.map(maskTypename);
    } else if (t && "object" == typeof t && "__typename" in t) {
      r[n] = maskTypename(t);
    } else {
      r[n] = t;
    }

    return r;
  }, {});
}

function withPromise(e) {
  e.toPromise = function () {
    return toPromise$1(take$1(1)(filter$1(function (e) {
      return !e.stale && !e.hasNext;
    })(e)));
  };

  return e;
}

function makeOperation(e, r, n) {
  if (!n) {
    n = r.context;
  }

  return {
    key: r.key,
    query: r.query,
    variables: r.variables,
    kind: e,
    context: n
  };
}

function addMetadata(e, r) {
  return makeOperation(e.kind, e, _extends$1({}, e.context, {
    meta: _extends$1({}, e.context.meta, r)
  }));
}

function noop() {}

function shouldSkip(e) {
  var r = e.kind;
  return "mutation" !== r && "query" !== r;
}

function cacheExchange(e) {
  var r = e.forward;
  var n = e.client;
  var t = e.dispatchDebug;
  var a = new Map();
  var i = Object.create(null);

  function mapTypeNames(e) {
    var r = makeOperation(e.kind, e);
    r.query = formatDocument(e.query);
    return r;
  }

  function isOperationCached(e) {
    var r = e.context.requestPolicy;
    return "query" === e.kind && "network-only" !== r && ("cache-only" === r || a.has(e.key));
  }

  return function (e) {
    var u = share$1(e);
    var c = map$1(function (e) {
      var r = a.get(e.key);
      "production" !== process.env.NODE_ENV && t(_extends$1({}, {
        operation: e
      }, r ? {
        type: "cacheHit",
        message: "The result was successfully retried from the cache"
      } : {
        type: "cacheMiss",
        message: "The result could not be retrieved from the cache"
      }));
      var i = _extends$1({}, r, {
        operation: addMetadata(e, {
          cacheOutcome: r ? "hit" : "miss"
        })
      });

      if ("cache-and-network" === e.context.requestPolicy) {
        i.stale = !0;
        reexecuteOperation(n, e);
      }

      return i;
    })(filter$1(function (e) {
      return !shouldSkip(e) && isOperationCached(e);
    })(u));
    var s = H$1(function (e) {
      var r = e.operation;

      if (!r) {
        return;
      }

      var o = collectTypesFromResponse(e.data).concat(r.context.additionalTypenames || []);

      if ("mutation" === e.operation.kind) {
        var u = new Set();
        "production" !== process.env.NODE_ENV && t({
          type: "cacheInvalidation",
          message: "The following typenames have been invalidated: " + o,
          operation: r,
          data: {
            typenames: o,
            response: e
          },
          source: "cacheExchange"
        });

        for (var c = 0; c < o.length; c++) {
          var s = o[c];
          var f = i[s] || (i[s] = new Set());
          f.forEach(function (e) {
            u.add(e);
          });
          f.clear();
        }

        u.forEach(function (e) {
          if (a.has(e)) {
            r = a.get(e).operation;
            a.delete(e);
            reexecuteOperation(n, r);
          }
        });
      } else if ("query" === r.kind && e.data) {
        a.set(r.key, e);

        for (var p = 0; p < o.length; p++) {
          var l = o[p];
          (i[l] || (i[l] = new Set())).add(r.key);
        }
      }
    })(r(filter$1(function (e) {
      return "query" !== e.kind || "cache-only" !== e.context.requestPolicy;
    })(map$1(function (e) {
      return addMetadata(e, {
        cacheOutcome: "miss"
      });
    })(merge$1([map$1(mapTypeNames)(filter$1(function (e) {
      return !shouldSkip(e) && !isOperationCached(e);
    })(u)), filter$1(function (e) {
      return shouldSkip(e);
    })(u)])))));
    return merge$1([c, s]);
  };
}

function reexecuteOperation(e, r) {
  return e.reexecuteOperation(makeOperation(r.kind, r, _extends$1({}, r.context, {
    requestPolicy: "network-only"
  })));
}

function ssrExchange(e) {
  var r = !(!e || !e.staleWhileRevalidate);
  var n = {};
  var t = [];

  function invalidate(e) {
    t.push(e.operation.key);

    if (1 === t.length) {
      Promise.resolve().then(function () {
        var e;

        while (e = t.shift()) {
          n[e] = null;
        }
      });
    }
  }

  var ssr = function (t) {
    var a = t.client;
    var o = t.forward;
    return function (t) {
      var i = e && "boolean" == typeof e.isClient ? !!e.isClient : !a.suspense;
      var u = share$1(t);
      var s = o(filter$1(function (e) {
        return !n[e.key] || !!n[e.key].hasNext;
      })(u));
      var f = map$1(function (e) {
        var t = function deserializeResult(e, r) {
          return {
            operation: e,
            data: r.data ? JSON.parse(r.data) : void 0,
            extensions: void 0,
            error: r.error ? new a$1({
              networkError: r.error.networkError ? new Error(r.error.networkError) : void 0,
              graphQLErrors: r.error.graphQLErrors
            }) : void 0,
            hasNext: r.hasNext
          };
        }(e, n[e.key]);

        if (r) {
          t.stale = !0;
          reexecuteOperation(a, e);
        }

        return t;
      })(filter$1(function (e) {
        return !!n[e.key];
      })(u));

      if (!i) {
        s = H$1(function (e) {
          var r = e.operation;

          if ("mutation" !== r.kind) {
            var t = function serializeResult(e) {
              var r = e.hasNext;
              var n = e.data;
              var t = e.error;
              var a = {};

              if (void 0 !== n) {
                a.data = JSON.stringify(n);
              }

              if (r) {
                a.hasNext = !0;
              }

              if (t) {
                a.error = {
                  graphQLErrors: t.graphQLErrors.map(function (e) {
                    if (!e.path && !e.extensions) {
                      return e.message;
                    }

                    return {
                      message: e.message,
                      path: e.path,
                      extensions: e.extensions
                    };
                  })
                };

                if (t.networkError) {
                  a.error.networkError = "" + t.networkError;
                }
              }

              return a;
            }(e);

            n[r.key] = t;
          }
        })(s);
      } else {
        f = H$1(invalidate)(f);
      }

      return merge$1([s, f]);
    };
  };

  ssr.restoreData = function (e) {
    for (var r in e) {
      if (null !== n[r]) {
        n[r] = e[r];
      }
    }
  };

  ssr.extractData = function () {
    var e = {};

    for (var r in n) {
      if (null != n[r]) {
        e[r] = n[r];
      }
    }

    return e;
  };

  if (e && e.initialState) {
    ssr.restoreData(e.initialState);
  }

  return ssr;
}

function dedupExchange(e) {
  var r = e.forward;
  var n = e.dispatchDebug;
  var t = new Set();

  function filterIncomingOperation(e) {
    var r = e.key;
    var a = e.kind;

    if ("teardown" === a) {
      t.delete(r);
      return !0;
    }

    if ("query" !== a && "subscription" !== a) {
      return !0;
    }

    var o = t.has(r);
    t.add(r);

    if (o) {
      "production" !== process.env.NODE_ENV && n({
        type: "dedup",
        message: "An operation has been deduped.",
        operation: e,
        source: "dedupExchange"
      });
    }

    return !o;
  }

  function afterOperationResult(e) {
    if (!e.hasNext) {
      t.delete(e.operation.key);
    }
  }

  return function (e) {
    var n = filter$1(filterIncomingOperation)(e);
    return H$1(afterOperationResult)(r(n));
  };
}

function fetchExchange(e) {
  var r = e.forward;
  var n = e.dispatchDebug;
  return function (e) {
    var t = share$1(e);
    var a = D(function (e) {
      var r = e.key;
      var a = filter$1(function (e) {
        return "teardown" === e.kind && e.key === r;
      })(t);
      var o = makeFetchBody(e);
      var i = makeFetchURL(e, o);
      var u = makeFetchOptions(e, o);
      "production" !== process.env.NODE_ENV && n({
        type: "fetchRequest",
        message: "A fetch request is being executed.",
        operation: e,
        data: {
          url: i,
          fetchOptions: u
        },
        source: "fetchExchange"
      });
      return H$1(function (r) {
        var t = !r.data ? r.error : void 0;
        "production" !== process.env.NODE_ENV && n({
          type: t ? "fetchError" : "fetchSuccess",
          message: "A " + (t ? "failed" : "successful") + " fetch response has been returned.",
          operation: e,
          data: {
            url: i,
            fetchOptions: u,
            value: t || r
          },
          source: "fetchExchange"
        });
      })(takeUntil$1(a)(makeFetchSource(e, i, u)));
    })(filter$1(function (e) {
      return "query" === e.kind || "mutation" === e.kind;
    })(t));
    var o = r(filter$1(function (e) {
      return "query" !== e.kind && "mutation" !== e.kind;
    })(t));
    return merge$1([a, o]);
  };
}

function fallbackExchange(e) {
  var r = e.dispatchDebug;
  return function (e) {
    return filter$1(function () {
      return !1;
    })(H$1(function (e) {
      if ("teardown" !== e.kind && "production" !== process.env.NODE_ENV) {
        var n = 'No exchange has handled operations of kind "' + e.kind + "\". Check whether you've added an exchange responsible for these operations.";
        "production" !== process.env.NODE_ENV && r({
          type: "fallbackCatch",
          message: n,
          operation: e,
          source: "fallbackExchange"
        });
        console.warn(n);
      }
    })(e));
  };
}

fallbackExchange({
  dispatchDebug: noop
});

function composeExchanges(e) {
  return function (r) {
    var n = r.client;
    var t = r.dispatchDebug;
    return e.reduceRight(function (e, r) {
      return r({
        client: n,
        forward: e,
        dispatchDebug: function dispatchDebug$1(e) {
          "production" !== process.env.NODE_ENV && t(_extends$1({}, {
            timestamp: Date.now(),
            source: r.name
          }, e));
        }
      });
    }, r.forward);
  };
}

var L$1 = [dedupExchange, cacheExchange, fetchExchange];

var W = function Client(e) {
  if ("production" !== process.env.NODE_ENV && !e.url) {
    throw new Error("You are creating an urql-client without a url.");
  }

  var r = new Map();
  var n = new Map();
  var t = [];
  var a = makeSubject$1();
  var i = a.source;
  var u = a.next;
  var c = !1;

  function dispatchOperation(e) {
    c = !0;

    if (e) {
      u(e);
    }

    while (e = t.shift()) {
      u(e);
    }

    c = !1;
  }

  function makeResultSource(e) {
    var a = filter$1(function (r) {
      return r.operation.kind === e.kind && r.operation.key === e.key;
    })(y);

    if (f.maskTypename) {
      a = map$1(function (e) {
        return _extends$1({}, e, {
          data: maskTypename(e.data)
        });
      })(a);
    }

    if ("mutation" === e.kind) {
      return take$1(1)(onStart$1(function () {
        return dispatchOperation(e);
      })(a));
    }

    return share$1(onEnd$1(function () {
      r.delete(e.key);
      n.delete(e.key);

      for (var a = t.length - 1; a >= 0; a--) {
        if (t[a].key === e.key) {
          t.splice(a, 1);
        }
      }

      dispatchOperation(makeOperation("teardown", e, e.context));
    })(H$1(function (n) {
      r.set(e.key, n);
    })(K$1(function (r) {
      if ("query" !== e.kind || r.stale) {
        return fromValue$1(r);
      }

      return merge$1([fromValue$1(r), map$1(function () {
        return _extends$1({}, r, {
          stale: !0
        });
      })(take$1(1)(filter$1(function (r) {
        return "query" === r.kind && r.key === e.key && "cache-only" !== r.context.requestPolicy;
      })(i)))]);
    })(takeUntil$1(filter$1(function (r) {
      return "teardown" === r.kind && r.key === e.key;
    })(i))(a)))));
  }

  var s = this instanceof Client ? this : Object.create(Client.prototype);
  var f = _extends$1(s, {
    url: e.url,
    fetchOptions: e.fetchOptions,
    fetch: e.fetch,
    suspense: !!e.suspense,
    requestPolicy: e.requestPolicy || "cache-first",
    preferGetMethod: !!e.preferGetMethod,
    maskTypename: !!e.maskTypename,
    operations$: i,
    reexecuteOperation: function reexecuteOperation(e) {
      if ("mutation" === e.kind || n.has(e.key)) {
        t.push(e);

        if (!c) {
          Promise.resolve().then(dispatchOperation);
        }
      }
    },
    createOperationContext: function createOperationContext(e) {
      if (!e) {
        e = {};
      }

      return _extends$1({}, {
        url: f.url,
        fetchOptions: f.fetchOptions,
        fetch: f.fetch,
        preferGetMethod: f.preferGetMethod
      }, e, {
        suspense: e.suspense || !1 !== e.suspense && f.suspense,
        requestPolicy: e.requestPolicy || f.requestPolicy
      });
    },
    createRequestOperation: function createRequestOperation(e, r, n) {
      var t = getOperationType(r.query);

      if ("production" !== process.env.NODE_ENV && "teardown" !== e && t !== e) {
        throw new Error('Expected operation of type "' + e + '" but found "' + t + '"');
      }

      return makeOperation(e, r, f.createOperationContext(n));
    },
    executeRequestOperation: function executeRequestOperation(e) {
      if ("mutation" === e.kind) {
        return makeResultSource(e);
      }

      return make$1(function (t) {
        var a = n.get(e.key);

        if (!a) {
          n.set(e.key, a = makeResultSource(e));
        }

        var i = "cache-and-network" === e.context.requestPolicy || "network-only" === e.context.requestPolicy;
        return N(t.next)(onEnd$1(t.complete)(onStart$1(function () {
          var n = r.get(e.key);

          if ("subscription" === e.kind) {
            return dispatchOperation(e);
          } else if (i) {
            dispatchOperation(e);
          }

          if (null != n && n === r.get(e.key)) {
            t.next(i ? _extends$1({}, n, {
              stale: !0
            }) : n);
          } else if (!i) {
            dispatchOperation(e);
          }
        })(a))).unsubscribe;
      });
    },
    executeQuery: function executeQuery(e, r) {
      var n = f.createRequestOperation("query", e, r);
      return f.executeRequestOperation(n);
    },
    executeSubscription: function executeSubscription(e, r) {
      var n = f.createRequestOperation("subscription", e, r);
      return f.executeRequestOperation(n);
    },
    executeMutation: function executeMutation(e, r) {
      var n = f.createRequestOperation("mutation", e, r);
      return f.executeRequestOperation(n);
    },
    query: function query(e, r, n) {
      if (!n || "boolean" != typeof n.suspense) {
        n = _extends$1({}, n, {
          suspense: !1
        });
      }

      return withPromise(f.executeQuery(createRequest(e, r), n));
    },
    readQuery: function readQuery(e, r, n) {
      var t = null;
      N(function (e) {
        t = e;
      })(f.query(e, r, n)).unsubscribe();
      return t;
    },
    subscription: function subscription(e, r, n) {
      return f.executeSubscription(createRequest(e, r), n);
    },
    mutation: function mutation(e, r, n) {
      return withPromise(f.executeMutation(createRequest(e, r), n));
    }
  });
  var p = noop;

  if ("production" !== process.env.NODE_ENV) {
    var l = makeSubject$1();
    var d = l.next;
    var h = l.source;

    f.subscribeToDebugTarget = function (e) {
      return N(e)(h);
    };

    p = d;
  }

  var v = composeExchanges(void 0 !== e.exchanges ? e.exchanges : L$1);
  var y = share$1(v({
    client: f,
    dispatchDebug: p,
    forward: fallbackExchange({
      dispatchDebug: p
    })
  })(i));
  publish$1(y);
  return f;
};

var z = W;

var t,
    u,
    r,
    o = 0,
    i = [],
    c = l$4.__b,
    f = l$4.__r,
    e = l$4.diffed,
    a = l$4.__c,
    v = l$4.unmount;

function m(t, r) {
  l$4.__h && l$4.__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function l(n) {
  return o = 1, p(w$2, n);
}

function p(n, r, o) {
  var i = m(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : w$2(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}

function y(r, o) {
  var i = m(t++, 3);
  !l$4.__s && k$1(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}

function s$1(n) {
  return o = 5, d(function () {
    return {
      current: n
    };
  }, []);
}

function d(n, u) {
  var r = m(t++, 7);
  return k$1(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}

function A$1(n, t) {
  return o = 8, d(function () {
    return n;
  }, t);
}

function F(n) {
  var r = u.context[n.__c],
      o = m(t++, 9);
  return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function x() {
  i.forEach(function (t) {
    if (t.__P) try {
      t.__H.__h.forEach(g), t.__H.__h.forEach(j$1), t.__H.__h = [];
    } catch (u) {
      t.__H.__h = [], l$4.__e(u, t.__v);
    }
  }), i = [];
}

l$4.__b = function (n) {
  u = null, c && c(n);
}, l$4.__r = function (n) {
  f && f(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(j$1), r.__h = []);
}, l$4.diffed = function (t) {
  e && e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === l$4.requestAnimationFrame || ((r = l$4.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), b$1 && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    b$1 && (t = requestAnimationFrame(u));
  })(x)), u = void 0;
}, l$4.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j$1(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], l$4.__e(r, t.__v);
    }
  }), a && a(t, u);
}, l$4.unmount = function (t) {
  v && v(t);
  var u = t.__c;
  if (u && u.__H) try {
    u.__H.__.forEach(g);
  } catch (t) {
    l$4.__e(t, u.__v);
  }
};
var b$1 = "function" == typeof requestAnimationFrame;

function g(n) {
  var t = u;
  "function" == typeof n.__c && n.__c(), u = t;
}

function j$1(n) {
  var t = u;
  n.__c = n.__(), u = t;
}

function k$1(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}

function w$2(n, t) {
  return "function" == typeof t ? t(n) : t;
}

function _extends() {
  return (_extends = Object.assign || function (e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];

      for (var t in n) {
        if (Object.prototype.hasOwnProperty.call(n, t)) {
          e[t] = n[t];
        }
      }
    }

    return e;
  }).apply(this, arguments);
}

var b = z({
  url: "/graphql"
});
var q = D$1(b);
var S$1 = q.Provider;
q.Consumer;
q.displayName = "UrqlContext";
var w$1 = !1;

function useClient() {
  var e = F(q);

  if ("production" !== process.env.NODE_ENV && e === b && !w$1) {
    w$1 = !0;
    console.warn("Default Client: No client has been specified using urql's Provider.This means that urql will be falling back to defaults including making requests to `/graphql`.\nIf that's not what you want, please create a client and add a Provider.");
  }

  return e;
}

var _$1 = !1;

function useSource(e, r) {
  var n = d(function () {
    var r = makeSubject$1();
    return [concat$1([fromValue$1(e), r.source]), function (n) {
      if (n !== e) {
        r.next(e = n);
      }
    }];
  }, []);
  var t = n[0];
  var a = n[1];
  var s = l(function () {
    _$1 = !0;
    var n;

    try {
      N(function (e) {
        n = e;
      })(r(fromValue$1(e))).unsubscribe();
    } finally {
      _$1 = !1;
    }

    return n;
  });
  var d$1 = s[0];
  var p = s[1];
  y(function () {
    return N(function (e) {
      if (!_$1) {
        p(function (r) {
          return function isShallowDifferent(e, r) {
            if ("object" != typeof e || "object" != typeof r) {
              return e !== r;
            }

            for (var n in e) {
              if (!(n in r)) {
                return !0;
              }
            }

            for (var t in r) {
              if (e[t] !== r[t]) {
                return !0;
              }
            }

            return !1;
          }(r, e) ? e : r;
        });
      }
    })(r(t, d$1)).unsubscribe;
  }, [t]);
  return [d$1, a];
}

function useRequest(e, n) {
  var t = s$1(void 0);
  return d(function () {
    var u = createRequest(e, n);

    if (void 0 !== t.current && t.current.key === u.key) {
      return t.current;
    } else {
      t.current = u;
      return u;
    }
  }, [e, n]);
}

var k = {
  fetching: !1,
  stale: !1,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
};

function isSuspense(e, r) {
  return e.suspense && (!r || !1 !== r.suspense);
}

var P$1 = new Map();

function useQuery(e) {
  var r = useClient();
  var n = useRequest(e.query, e.variables);
  var t = A$1(function (t) {
    var u = isSuspense(r, e.context);
    var i = u ? P$1.get(n.key) : void 0;

    if (!i) {
      i = r.executeQuery(n, _extends({}, {
        requestPolicy: e.requestPolicy
      }, e.context, t));

      if (u) {
        i = function toSuspenseSource(e) {
          var r = share$1(e);
          var n;
          var t;
          return function (e) {
            var u = !1;
            takeWhile$1(function (e) {
              if (void 0 === n) {
                Promise.resolve(e).then(t);
              }

              n = e;
              return !u;
            })(r)(e);

            if (void 0 !== n) {
              var i = [n];
              i.tag = 1;
              e(i);
            } else {
              u = !0;
              e(0);
              throw new Promise(function (e) {
                t = e;
              });
            }
          };
        }(i);

        if ("undefined" != typeof window) {
          P$1.set(n.key, i);
        }
      }
    }

    return i;
  }, [r, n, e.requestPolicy, e.context]);
  var i = d(function () {
    return e.pause ? null : t();
  }, [e.pause, t]);
  var a = useSource(i, A$1(function (e, r) {
    return scan$1(function (e, r) {
      return _extends({}, e, r);
    }, r || k)(K$1(function (e) {
      if (!e) {
        return fromValue$1({
          fetching: !1,
          stale: !1
        });
      }

      return concat$1([fromValue$1({
        fetching: !0,
        stale: !1
      }), map$1(function (e) {
        return {
          fetching: !1,
          stale: !!e.stale,
          data: e.data,
          error: e.error,
          operation: e.operation,
          extensions: e.extensions
        };
      })(e), fromValue$1({
        fetching: !1,
        stale: !1
      })]);
    })(e));
  }, []));
  var c = a[0];
  var l = a[1];
  var g = A$1(function (e) {
    l(t(_extends({}, {
      suspense: !1
    }, e)));
  }, [l, t]);
  y(function () {
    P$1.delete(n.key);

    if (!isSuspense(r, e.context)) {
      l(i);
    }
  }, [l, r, i, n, e.context]);

  if (isSuspense(r, e.context)) {
    l(i);
  }

  return [c, g];
}

const Home = () => {
  const [{
    data,
    fetching,
    error
  } = {}, refetch] = useQuery({
    query: `{ items { id title } }`
    /*requestPolicy: 'network-only'*/

  });
  console.log('- Home result ->', data, fetching, error);
  return v$3("div", {
    id: "app"
  }, v$3("h2", null, "Home"), v$3("p", null, v$3("button", {
    onClick: refetch
  }, "Reload")), v$3("small", null, "Query: ", fetching ? 'loading...' : 'loaded'), v$3("ul", {
    key: "u1"
  }, data?.items?.map(i => v$3("li", {
    key: i.id
  }, i.title))));
};

const Profile = () => v$3("div", null, v$3("h1", null, "Profile"), v$3("p", null, "Here some sample information.."));

const Contacts = () => v$3("div", null, v$3("h1", null, "Contacts"), v$3("p", null, "Here some sample information.."));

const App = ({
  url
}) => {
  console.log('- App');
  return v$3("div", {
    id: "app"
  }, v$3(Header, null), v$3(Router, {
    url: url
  }, v$3(Home, {
    path: "/"
  }), v$3(Profile, {
    path: "/profile",
    user: "me"
  }), v$3(Profile, {
    path: "/profile/:user"
  }), v$3(Contacts, {
    path: "/contacts"
  })));
};

function S(n, t) {
  for (var e in t) n[e] = t[e];

  return n;
}

function C(n, t) {
  for (var e in n) if ("__source" !== e && !(e in t)) return !0;

  for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;

  return !1;
}

function E(n) {
  this.props = n;
}

(E.prototype = new _$3()).isPureReactComponent = !0, E.prototype.shouldComponentUpdate = function (n, t) {
  return C(this.props, n) || C(this.state, t);
};
var w = l$4.__b;

l$4.__b = function (n) {
  n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), w && w(n);
};

var A = l$4.__e;

l$4.__e = function (n, t, e) {
  if (n.then) for (var r, u = t; u = u.__;) if ((r = u.__c) && r.__c) return null == t.__e && (t.__e = e.__e, t.__k = e.__k), r.__c(n, t);
  A(n, t, e);
};

var O = l$4.unmount;

function L() {
  this.__u = 0, this.t = null, this.__b = null;
}

function U(n) {
  var t = n.__.__c;
  return t && t.__e && t.__e(n);
}

function M() {
  this.u = null, this.o = null;
}

l$4.unmount = function (n) {
  var t = n.__c;
  t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), O && O(n);
}, (L.prototype = new _$3()).__c = function (n, t) {
  var e = t.__c,
      r = this;
  null == r.t && (r.t = []), r.t.push(e);

  var u = U(r.__v),
      o = !1,
      i = function () {
    o || (o = !0, e.__R = null, u ? u(l) : l());
  };

  e.__R = i;

  var l = function () {
    if (! --r.__u) {
      if (r.state.__e) {
        var n = r.state.__e;

        r.__v.__k[0] = function n(t, e, r) {
          return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
            return n(t, e, r);
          }), t.__c && t.__c.__P === e && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
        }(n, n.__c.__P, n.__c.__O);
      }

      var t;

      for (r.setState({
        __e: r.__b = null
      }); t = r.t.pop();) t.forceUpdate();
    }
  },
      f = !0 === t.__h;

  r.__u++ || f || r.setState({
    __e: r.__b = r.__v.__k[0]
  }), n.then(i, i);
}, L.prototype.componentWillUnmount = function () {
  this.t = [];
}, L.prototype.render = function (n, t) {
  if (this.__b) {
    if (this.__v.__k) {
      var e = document.createElement("div"),
          r = this.__v.__k[0].__c;

      this.__v.__k[0] = function n(t, e, r) {
        return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (n) {
          "function" == typeof n.__c && n.__c();
        }), t.__c.__H = null), null != (t = S({}, t)).__c && (t.__c.__P === r && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
          return n(t, e, r);
        })), t;
      }(this.__b, e, r.__O = r.__P);
    }

    this.__b = null;
  }

  var u = t.__e && v$3(d$2, null, n.fallback);
  return u && (u.__h = null), [v$3(d$2, null, t.__e ? null : n.children), u];
};

var T = function (n, t, e) {
  if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
    for (; e.length > 3;) e.pop()();

    if (e[1] < e[0]) break;
    n.u = e = e[2];
  }
};

(M.prototype = new _$3()).__e = function (n) {
  var t = this,
      e = U(t.__v),
      r = t.o.get(n);
  return r[0]++, function (u) {
    var o = function () {
      t.props.revealOrder ? (r.push(u), T(t, n, r)) : u();
    };

    e ? e(o) : o();
  };
}, M.prototype.render = function (n) {
  this.u = null, this.o = new Map();
  var t = A$2(n.children);
  n.revealOrder && "b" === n.revealOrder[0] && t.reverse();

  for (var e = t.length; e--;) this.o.set(t[e], this.u = [1, 0, this.u]);

  return n.children;
}, M.prototype.componentDidUpdate = M.prototype.componentDidMount = function () {
  var n = this;
  this.o.forEach(function (t, e) {
    T(n, e, t);
  });
};

var j = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    P = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    V = function (n) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(n);
};

_$3.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (n) {
  Object.defineProperty(_$3.prototype, n, {
    configurable: !0,
    get: function () {
      return this["UNSAFE_" + n];
    },
    set: function (t) {
      Object.defineProperty(this, n, {
        configurable: !0,
        writable: !0,
        value: t
      });
    }
  });
});
var H = l$4.event;

function Z() {}

function Y() {
  return this.cancelBubble;
}

function $() {
  return this.defaultPrevented;
}

l$4.event = function (n) {
  return H && (n = H(n)), n.persist = Z, n.isPropagationStopped = Y, n.isDefaultPrevented = $, n.nativeEvent = n;
};

var G = {
  configurable: !0,
  get: function () {
    return this.class;
  }
},
    J = l$4.vnode;

l$4.vnode = function (n) {
  var t = n.type,
      e = n.props,
      r = e;

  if ("string" == typeof t) {
    for (var u in r = {}, e) {
      var o = e[u];
      "value" === u && "defaultValue" in e && null == o || ("defaultValue" === u && "value" in e && null == e.value ? u = "value" : "download" === u && !0 === o ? o = "" : /ondoubleclick/i.test(u) ? u = "ondblclick" : /^onchange(textarea|input)/i.test(u + t) && !V(e.type) ? u = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(u) ? u = u.toLowerCase() : P.test(u) ? u = u.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === o && (o = void 0), r[u] = o);
    }

    "select" == t && r.multiple && Array.isArray(r.value) && (r.value = A$2(e.children).forEach(function (n) {
      n.props.selected = -1 != r.value.indexOf(n.props.value);
    })), "select" == t && null != r.defaultValue && (r.value = A$2(e.children).forEach(function (n) {
      n.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(n.props.value) : r.defaultValue == n.props.value;
    })), n.props = r;
  }

  t && e.class != e.className && (G.enumerable = "className" in e, null != e.className && (r.class = e.className), Object.defineProperty(r, "className", G)), n.$$typeof = j, J && J(n);
};

var K = l$4.__r;

l$4.__r = function (n) {
  K && K(n);
};

function n(e, t) {
  for (let r in t) e[r] = t[r];

  return e;
}

function s(e, t) {
  return Array.isArray(t) ? t.reduce(s, e) : null != t && !1 !== t && e.push(t), e;
}

function _(p, i, l) {
  if (null == p || "object" != typeof p) return Promise.resolve();
  let c = p.type,
      a = p.props,
      u = [];

  if (l = l || {}, "function" == typeof c && c !== d$2 && c !== L) {
    let e,
        o = p.__c = new _$3(a, l);
    o.__d = !0, o.__v = p, void 0 === o.state && (o.state = {});
    let s = !1,
        u = c.contextType,
        m = u && l[u.__c],
        d = null != u ? m ? m.props.value : u.__p || u.__ : l;
    return c.prototype && "function" == typeof c.prototype.render ? (s = !0, o = p.__c = new c(a, d), o.__d = !0, o.__v = p, o.props = a, o.context = d, void 0 === o.state && (o.state = {}), c.getDerivedStateFromProps ? o.state = n(n({}, o.state), c.getDerivedStateFromProps(o.props, o.state)) : o.componentWillMount && o.componentWillMount(), e = () => {
      try {
        return l$4.render && l$4.render(p), l$4.__r && l$4.__r(p), Promise.resolve(o.render(o.props, o.state, o.context));
      } catch (t) {
        return t && t.then ? t.then(e, e) : Promise.reject(t);
      }
    }) : e = () => {
      try {
        const e = l$4.__s;
        l$4.__s = !0, l$4.render && l$4.render(p), l$4.__r && l$4.__r(p);
        const t = Promise.resolve(c.call(p.__c, a, d));
        return l$4.__s = e, t;
      } catch (t) {
        return t && t.then ? t.then(e, e) : Promise.reject(t);
      }
    }, (i ? (i(p, s ? o : void 0) || Promise.resolve()).then(e) : e()).then(e => (o.getChildContext && (l = n(n({}, l), o.getChildContext())), Array.isArray(e) ? Promise.all(e.map(e => _(e, i, l))) : _(e, i, l)));
  }

  return a && s(u = [], a.children).length ? Promise.all(u.map(e => _(e, i, l))) : Promise.resolve();
}

const polka = require('polka');

const fetch$1 = require('isomorphic-unfetch');

if (!global.fetch) global.fetch = fetch$1;
const RGX = /<div id="app"[^>]*>.*?(?=<script)/i;
const index = fs__default["default"].readFileSync(path__default["default"].join(__dirname, '/index.html'), 'utf8');
polka().get('*', async (req, res) => {
  console.log('- req', req.url);
  const t0 = Date.now();
  const ssr = ssrExchange({
    isClient: false
  });
  const client = z({
    url: 'http://localhost:3031/graphql',
    suspense: true,
    // activate urql's Suspense mode on the server-side
    exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
    fetch: fetch$1
  });
  const Main = v$3(S$1, {
    value: client
  }, v$3(App, {
    url: req.url,
    value: client
  })); // Using `react-ssr-prepass` this prefetches all data

  await _(Main);
  const content = m$2(v$3(() => Main, {
    url: req.url
  }));
  const state = JSON.stringify(ssr.extractData()); //.replace(/</g, '\\u003c')
  // Extract the data after prepass and rendering

  const html = index.replace(RGX, `${content}<script type="text/urql">${state}</script>`);
  console.log('- req', `[${Date.now() - t0} ms]`, html.length, req.path);
  res.writeHead(200, {
    'Content-Type': 'text/html'
  }).end(html);
}) // .use(compress, build)
.listen(3000, err => {
  if (err) throw err;
  console.log('> Ready on http://localhost:3000/');
});
