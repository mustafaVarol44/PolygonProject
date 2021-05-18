!function(e)
{
    var t = {};
    function n(i) {
        if (t[i])
            return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                n.d(i, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return i
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 14)
}([function(e, t, n) {
    var i;
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    !function(t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, function(n, o) {
        "use strict";
        var a = []
          , r = n.document
          , s = Object.getPrototypeOf
          , l = a.slice
          , u = a.concat
          , c = a.push
          , d = a.indexOf
          , h = {}
          , p = h.toString
          , f = h.hasOwnProperty
          , v = f.toString
          , g = v.call(Object)
          , m = {}
          , y = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
          , b = function(e) {
            return null != e && e === e.window
        }
          , _ = {
            type: !0,
            src: !0,
            noModule: !0
        };
        function w(e, t, n) {
            var i, o = (t = t || r).createElement("script");
            if (o.text = e,
            n)
                for (i in _)
                    n[i] && (o[i] = n[i]);
            t.head.appendChild(o).parentNode.removeChild(o)
        }
        function C(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[p.call(e)] || "object" : typeof e
        }
        var x = function(e, t) {
            return new x.fn.init(e,t)
        }
          , k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function T(e) {
            var t = !!e && "length"in e && e.length
              , n = C(e);
            return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        x.fn = x.prototype = {
            jquery: "3.3.1",
            constructor: x,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(e) {
                return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = x.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return x.each(this, e)
            },
            map: function(e) {
                return this.pushStack(x.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: c,
            sort: a.sort,
            splice: a.splice
        },
        x.extend = x.fn.extend = function() {
            var e, t, n, i, o, a, r = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof r && (u = r,
            r = arguments[s] || {},
            s++),
            "object" == typeof r || y(r) || (r = {}),
            s === l && (r = this,
            s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        n = r[t],
                        r !== (i = e[t]) && (u && i && (x.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1,
                        a = n && Array.isArray(n) ? n : []) : a = n && x.isPlainObject(n) ? n : {},
                        r[t] = x.extend(u, a, i)) : void 0 !== i && (r[t] = i));
            return r
        }
        ,
        x.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = s(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && v.call(n) === g)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e) {
                w(e)
            },
            each: function(e, t) {
                var n, i = 0;
                if (T(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(k, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (T(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : d.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++)
                    e[o++] = t[i];
                return e.length = o,
                e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, a = e.length, r = !n; o < a; o++)
                    !t(e[o], o) !== r && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var i, o, a = 0, r = [];
                if (T(e))
                    for (i = e.length; a < i; a++)
                        null != (o = t(e[a], a, n)) && r.push(o);
                else
                    for (a in e)
                        null != (o = t(e[a], a, n)) && r.push(o);
                return u.apply([], r)
            },
            guid: 1,
            support: m
        }),
        "function" == typeof Symbol && (x.fn[Symbol.iterator] = a[Symbol.iterator]),
        x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            h["[object " + t + "]"] = t.toLowerCase()
        });
        var D = /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
        function(e) {
            var t, n, i, o, a, r, s, l, u, c, d, h, p, f, v, g, m, y, b, _ = "sizzle" + 1 * new Date, w = e.document, C = 0, x = 0, k = re(), T = re(), D = re(), S = function(e, t) {
                return e === t && (d = !0),
                0
            }, E = {}.hasOwnProperty, M = [], L = M.pop, O = M.push, A = M.push, I = M.slice, B = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", $ = "[\\x20\\t\\r\\n\\f]", P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", j = "\\[" + $ + "*(" + P + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + $ + "*\\]", H = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)", N = new RegExp($ + "+","g"), F = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$","g"), W = new RegExp("^" + $ + "*," + $ + "*"), q = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"), z = new RegExp("=" + $ + "*([^\\]'\"]*?)" + $ + "*\\]","g"), V = new RegExp(H), X = new RegExp("^" + P + "$"), U = {
                ID: new RegExp("^#(" + P + ")"),
                CLASS: new RegExp("^\\.(" + P + ")"),
                TAG: new RegExp("^(" + P + "|[*])"),
                ATTR: new RegExp("^" + j),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)","i"),
                bool: new RegExp("^(?:" + R + ")$","i"),
                needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)","i")
            }, Y = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)","ig"), ee = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, ie = function() {
                h()
            }, oe = ye(function(e) {
                return !0 === e.disabled && ("form"in e || "label"in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                A.apply(M = I.call(w.childNodes), w.childNodes),
                M[w.childNodes.length].nodeType
            } catch (e) {
                A = {
                    apply: M.length ? function(e, t) {
                        O.apply(e, I.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            function ae(e, t, i, o) {
                var a, s, u, c, d, f, m, y = t && t.ownerDocument, C = t ? t.nodeType : 9;
                if (i = i || [],
                "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C)
                    return i;
                if (!o && ((t ? t.ownerDocument || t : w) !== p && h(t),
                t = t || p,
                v)) {
                    if (11 !== C && (d = K.exec(e)))
                        if (a = d[1]) {
                            if (9 === C) {
                                if (!(u = t.getElementById(a)))
                                    return i;
                                if (u.id === a)
                                    return i.push(u),
                                    i
                            } else if (y && (u = y.getElementById(a)) && b(t, u) && u.id === a)
                                return i.push(u),
                                i
                        } else {
                            if (d[2])
                                return A.apply(i, t.getElementsByTagName(e)),
                                i;
                            if ((a = d[3]) && n.getElementsByClassName && t.getElementsByClassName)
                                return A.apply(i, t.getElementsByClassName(a)),
                                i
                        }
                    if (n.qsa && !D[e + " "] && (!g || !g.test(e))) {
                        if (1 !== C)
                            y = t,
                            m = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = _),
                            s = (f = r(e)).length; s--; )
                                f[s] = "#" + c + " " + me(f[s]);
                            m = f.join(","),
                            y = G.test(e) && ve(t.parentNode) || t
                        }
                        if (m)
                            try {
                                return A.apply(i, y.querySelectorAll(m)),
                                i
                            } catch (e) {} finally {
                                c === _ && t.removeAttribute("id")
                            }
                    }
                }
                return l(e.replace(F, "$1"), t, i, o)
            }
            function re() {
                var e = [];
                return function t(n, o) {
                    return e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                    t[n + " "] = o
                }
            }
            function se(e) {
                return e[_] = !0,
                e
            }
            function le(e) {
                var t = p.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function ue(e, t) {
                for (var n = e.split("|"), o = n.length; o--; )
                    i.attrHandle[n[o]] = t
            }
            function ce(e, t) {
                var n = t && e
                  , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function de(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }
            function he(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function pe(e) {
                return function(t) {
                    return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label"in t && t.disabled === e
                }
            }
            function fe(e) {
                return se(function(t) {
                    return t = +t,
                    se(function(n, i) {
                        for (var o, a = e([], n.length, t), r = a.length; r--; )
                            n[o = a[r]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }
            function ve(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (t in n = ae.support = {},
            a = ae.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            h = ae.setDocument = function(e) {
                var t, o, r = e ? e.ownerDocument || e : w;
                return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement,
                v = !a(p),
                w !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)),
                n.attributes = le(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                n.getElementsByTagName = le(function(e) {
                    return e.appendChild(p.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                n.getElementsByClassName = J.test(p.getElementsByClassName),
                n.getById = le(function(e) {
                    return f.appendChild(e).id = _,
                    !p.getElementsByName || !p.getElementsByName(_).length
                }),
                n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (i.filter.ID = function(e) {
                    var t = e.replace(Z, ee);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ,
                i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var n, i, o, a = t.getElementById(e);
                        if (a) {
                            if ((n = a.getAttributeNode("id")) && n.value === e)
                                return [a];
                            for (o = t.getElementsByName(e),
                            i = 0; a = o[i++]; )
                                if ((n = a.getAttributeNode("id")) && n.value === e)
                                    return [a]
                        }
                        return []
                    }
                }
                ),
                i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, i = [], o = 0, a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[o++]; )
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }
                ,
                i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && v)
                        return t.getElementsByClassName(e)
                }
                ,
                m = [],
                g = [],
                (n.qsa = J.test(p.querySelectorAll)) && (le(function(e) {
                    f.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + $ + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || g.push("\\[" + $ + "*(?:value|" + R + ")"),
                    e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="),
                    e.querySelectorAll(":checked").length || g.push(":checked"),
                    e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]")
                }),
                le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && g.push("name" + $ + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                    f.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    g.push(",.*:")
                })),
                (n.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function(e) {
                    n.disconnectedMatch = y.call(e, "*"),
                    y.call(e, "[s!='']:x"),
                    m.push("!=", H)
                }),
                g = g.length && new RegExp(g.join("|")),
                m = m.length && new RegExp(m.join("|")),
                t = J.test(f.compareDocumentPosition),
                b = t || J.test(f.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                S = t ? function(e, t) {
                    if (e === t)
                        return d = !0,
                        0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : c ? B(c, e) - B(c, t) : 0 : 4 & i ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return d = !0,
                        0;
                    var n, i = 0, o = e.parentNode, a = t.parentNode, r = [e], s = [t];
                    if (!o || !a)
                        return e === p ? -1 : t === p ? 1 : o ? -1 : a ? 1 : c ? B(c, e) - B(c, t) : 0;
                    if (o === a)
                        return ce(e, t);
                    for (n = e; n = n.parentNode; )
                        r.unshift(n);
                    for (n = t; n = n.parentNode; )
                        s.unshift(n);
                    for (; r[i] === s[i]; )
                        i++;
                    return i ? ce(r[i], s[i]) : r[i] === w ? -1 : s[i] === w ? 1 : 0
                }
                ,
                p) : p
            }
            ,
            ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }
            ,
            ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && h(e),
                t = t.replace(z, "='$1']"),
                n.matchesSelector && v && !D[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t)))
                    try {
                        var i = y.call(e, t);
                        if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return i
                    } catch (e) {}
                return ae(t, p, null, [e]).length > 0
            }
            ,
            ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && h(e),
                b(e, t)
            }
            ,
            ae.attr = function(e, t) {
                (e.ownerDocument || e) !== p && h(e);
                var o = i.attrHandle[t.toLowerCase()]
                  , a = o && E.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !v) : void 0;
                return void 0 !== a ? a : n.attributes || !v ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }
            ,
            ae.escape = function(e) {
                return (e + "").replace(te, ne)
            }
            ,
            ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            ae.uniqueSort = function(e) {
                var t, i = [], o = 0, a = 0;
                if (d = !n.detectDuplicates,
                c = !n.sortStable && e.slice(0),
                e.sort(S),
                d) {
                    for (; t = e[a++]; )
                        t === e[a] && (o = i.push(a));
                    for (; o--; )
                        e.splice(i[o], 1)
                }
                return c = null,
                e
            }
            ,
            o = ae.getText = function(e) {
                var t, n = "", i = 0, a = e.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === a || 4 === a)
                        return e.nodeValue
                } else
                    for (; t = e[i++]; )
                        n += o(t);
                return n
            }
            ,
            (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(Z, ee),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = r(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = k[e + " "];
                        return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && k(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var o = ae.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "",
                            "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(N, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var a = "nth" !== e.slice(0, 3)
                          , r = "last" !== e.slice(-4)
                          , s = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, l) {
                            var u, c, d, h, p, f, v = a !== r ? "nextSibling" : "previousSibling", g = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                            if (g) {
                                if (a) {
                                    for (; v; ) {
                                        for (h = t; h = h[v]; )
                                            if (s ? h.nodeName.toLowerCase() === m : 1 === h.nodeType)
                                                return !1;
                                        f = v = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild],
                                r && y) {
                                    for (b = (p = (u = (c = (d = (h = g)[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && u[1]) && u[2],
                                    h = p && g.childNodes[p]; h = ++p && h && h[v] || (b = p = 0) || f.pop(); )
                                        if (1 === h.nodeType && ++b && h === t) {
                                            c[e] = [C, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (u = (c = (d = (h = t)[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && u[1]),
                                !1 === b)
                                    for (; (h = ++p && h && h[v] || (b = p = 0) || f.pop()) && ((s ? h.nodeName.toLowerCase() !== m : 1 !== h.nodeType) || !++b || (y && ((c = (d = h[_] || (h[_] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [C, b]),
                                    h !== t)); )
                                        ;
                                return (b -= o) === i || b % i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[_] ? o(t) : o.length > 1 ? (n = [e, e, "", t],
                        i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                            for (var i, a = o(e, t), r = a.length; r--; )
                                e[i = B(e, a[r])] = !(n[i] = a[r])
                        }) : function(e) {
                            return o(e, 0, n)
                        }
                        ) : o
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = []
                          , n = []
                          , i = s(e.replace(F, "$1"));
                        return i[_] ? se(function(e, t, n, o) {
                            for (var a, r = i(e, null, o, []), s = e.length; s--; )
                                (a = r[s]) && (e[s] = !(t[s] = a))
                        }) : function(e, o, a) {
                            return t[0] = e,
                            i(t, null, a, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: se(function(e) {
                        return function(t) {
                            return ae(e, t).length > 0
                        }
                    }),
                    contains: se(function(e) {
                        return e = e.replace(Z, ee),
                        function(t) {
                            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                        }
                    }),
                    lang: se(function(e) {
                        return X.test(e || "") || ae.error("unsupported lang: " + e),
                        e = e.replace(Z, ee).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: pe(!1),
                    disabled: pe(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return Y.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe(function() {
                        return [0]
                    }),
                    last: fe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: fe(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: fe(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: fe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0; )
                            e.push(i);
                        return e
                    }),
                    gt: fe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t; )
                            e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                i.pseudos[t] = de(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                i.pseudos[t] = he(t);
            function ge() {}
            function me(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)
                    i += e[t].value;
                return i
            }
            function ye(e, t, n) {
                var i = t.dir
                  , o = t.next
                  , a = o || i
                  , r = n && "parentNode" === a
                  , s = x++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r)
                            return e(t, n, o);
                    return !1
                }
                : function(t, n, l) {
                    var u, c, d, h = [C, s];
                    if (l) {
                        for (; t = t[i]; )
                            if ((1 === t.nodeType || r) && e(t, n, l))
                                return !0
                    } else
                        for (; t = t[i]; )
                            if (1 === t.nodeType || r)
                                if (c = (d = t[_] || (t[_] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                                o && o === t.nodeName.toLowerCase())
                                    t = t[i] || t;
                                else {
                                    if ((u = c[a]) && u[0] === C && u[1] === s)
                                        return h[2] = u[2];
                                    if (c[a] = h,
                                    h[2] = e(t, n, l))
                                        return !0
                                }
                    return !1
                }
            }
            function be(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--; )
                        if (!e[o](t, n, i))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function _e(e, t, n, i, o) {
                for (var a, r = [], s = 0, l = e.length, u = null != t; s < l; s++)
                    (a = e[s]) && (n && !n(a, i, o) || (r.push(a),
                    u && t.push(s)));
                return r
            }
            function we(e, t, n, i, o, a) {
                return i && !i[_] && (i = we(i)),
                o && !o[_] && (o = we(o, a)),
                se(function(a, r, s, l) {
                    var u, c, d, h = [], p = [], f = r.length, v = a || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++)
                            ae(e, t[i], n);
                        return n
                    }(t || "*", s.nodeType ? [s] : s, []), g = !e || !a && t ? v : _e(v, h, e, s, l), m = n ? o || (a ? e : f || i) ? [] : r : g;
                    if (n && n(g, m, s, l),
                    i)
                        for (u = _e(m, p),
                        i(u, [], s, l),
                        c = u.length; c--; )
                            (d = u[c]) && (m[p[c]] = !(g[p[c]] = d));
                    if (a) {
                        if (o || e) {
                            if (o) {
                                for (u = [],
                                c = m.length; c--; )
                                    (d = m[c]) && u.push(g[c] = d);
                                o(null, m = [], u, l)
                            }
                            for (c = m.length; c--; )
                                (d = m[c]) && (u = o ? B(a, d) : h[c]) > -1 && (a[u] = !(r[u] = d))
                        }
                    } else
                        m = _e(m === r ? m.splice(f, m.length) : m),
                        o ? o(null, r, m, l) : A.apply(r, m)
                })
            }
            function Ce(e) {
                for (var t, n, o, a = e.length, r = i.relative[e[0].type], s = r || i.relative[" "], l = r ? 1 : 0, c = ye(function(e) {
                    return e === t
                }, s, !0), d = ye(function(e) {
                    return B(t, e) > -1
                }, s, !0), h = [function(e, n, i) {
                    var o = !r && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                    return t = null,
                    o
                }
                ]; l < a; l++)
                    if (n = i.relative[e[l].type])
                        h = [ye(be(h), n)];
                    else {
                        if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                            for (o = ++l; o < a && !i.relative[e[o].type]; o++)
                                ;
                            return we(l > 1 && be(h), l > 1 && me(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(F, "$1"), n, l < o && Ce(e.slice(l, o)), o < a && Ce(e = e.slice(o)), o < a && me(e))
                        }
                        h.push(n)
                    }
                return be(h)
            }
            return ge.prototype = i.filters = i.pseudos,
            i.setFilters = new ge,
            r = ae.tokenize = function(e, t) {
                var n, o, a, r, s, l, u, c = T[e + " "];
                if (c)
                    return t ? 0 : c.slice(0);
                for (s = e,
                l = [],
                u = i.preFilter; s; ) {
                    for (r in n && !(o = W.exec(s)) || (o && (s = s.slice(o[0].length) || s),
                    l.push(a = [])),
                    n = !1,
                    (o = q.exec(s)) && (n = o.shift(),
                    a.push({
                        value: n,
                        type: o[0].replace(F, " ")
                    }),
                    s = s.slice(n.length)),
                    i.filter)
                        !(o = U[r].exec(s)) || u[r] && !(o = u[r](o)) || (n = o.shift(),
                        a.push({
                            value: n,
                            type: r,
                            matches: o
                        }),
                        s = s.slice(n.length));
                    if (!n)
                        break
                }
                return t ? s.length : s ? ae.error(e) : T(e, l).slice(0)
            }
            ,
            s = ae.compile = function(e, t) {
                var n, o = [], a = [], s = D[e + " "];
                if (!s) {
                    for (t || (t = r(e)),
                    n = t.length; n--; )
                        (s = Ce(t[n]))[_] ? o.push(s) : a.push(s);
                    (s = D(e, function(e, t) {
                        var n = t.length > 0
                          , o = e.length > 0
                          , a = function(a, r, s, l, c) {
                            var d, f, g, m = 0, y = "0", b = a && [], _ = [], w = u, x = a || o && i.find.TAG("*", c), k = C += null == w ? 1 : Math.random() || .1, T = x.length;
                            for (c && (u = r === p || r || c); y !== T && null != (d = x[y]); y++) {
                                if (o && d) {
                                    for (f = 0,
                                    r || d.ownerDocument === p || (h(d),
                                    s = !v); g = e[f++]; )
                                        if (g(d, r || p, s)) {
                                            l.push(d);
                                            break
                                        }
                                    c && (C = k)
                                }
                                n && ((d = !g && d) && m--,
                                a && b.push(d))
                            }
                            if (m += y,
                            n && y !== m) {
                                for (f = 0; g = t[f++]; )
                                    g(b, _, r, s);
                                if (a) {
                                    if (m > 0)
                                        for (; y--; )
                                            b[y] || _[y] || (_[y] = L.call(l));
                                    _ = _e(_)
                                }
                                A.apply(l, _),
                                c && !a && _.length > 0 && m + t.length > 1 && ae.uniqueSort(l)
                            }
                            return c && (C = k,
                            u = w),
                            b
                        };
                        return n ? se(a) : a
                    }(a, o))).selector = e
                }
                return s
            }
            ,
            l = ae.select = function(e, t, n, o) {
                var a, l, u, c, d, h = "function" == typeof e && e, p = !o && r(e = h.selector || e);
                if (n = n || [],
                1 === p.length) {
                    if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && v && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(u.matches[0].replace(Z, ee), t) || [])[0]))
                            return n;
                        h && (t = t.parentNode),
                        e = e.slice(l.shift().value.length)
                    }
                    for (a = U.needsContext.test(e) ? 0 : l.length; a-- && (u = l[a],
                    !i.relative[c = u.type]); )
                        if ((d = i.find[c]) && (o = d(u.matches[0].replace(Z, ee), G.test(l[0].type) && ve(t.parentNode) || t))) {
                            if (l.splice(a, 1),
                            !(e = o.length && me(l)))
                                return A.apply(n, o),
                                n;
                            break
                        }
                }
                return (h || s(e, p))(o, t, !v, n, !t || G.test(e) && ve(t.parentNode) || t),
                n
            }
            ,
            n.sortStable = _.split("").sort(S).join("") === _,
            n.detectDuplicates = !!d,
            h(),
            n.sortDetached = le(function(e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
            }),
            le(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || ue("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            n.attributes && le(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || ue("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            le(function(e) {
                return null == e.getAttribute("disabled")
            }) || ue(R, function(e, t, n) {
                var i;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }),
            ae
        }(n);
        x.find = D,
        x.expr = D.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.uniqueSort = x.unique = D.uniqueSort,
        x.text = D.getText,
        x.isXMLDoc = D.isXML,
        x.contains = D.contains,
        x.escapeSelector = D.escape;
        var S = function(e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (o && x(e).is(n))
                        break;
                    i.push(e)
                }
            return i
        }
          , E = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , M = x.expr.match.needsContext;
        function L(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function A(e, t, n) {
            return y(t) ? x.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? x.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? x.grep(e, function(e) {
                return d.call(t, e) > -1 !== n
            }) : x.filter(t, e, n)
        }
        x.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? x.find.matchesSelector(i, e) ? [i] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        x.fn.extend({
            find: function(e) {
                var t, n, i = this.length, o = this;
                if ("string" != typeof e)
                    return this.pushStack(x(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (x.contains(o[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                t = 0; t < i; t++)
                    x.find(e, o[t], n);
                return i > 1 ? x.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(A(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(A(this, e || [], !0))
            },
            is: function(e) {
                return !!A(this, "string" == typeof e && M.test(e) ? x(e) : e || [], !1).length
            }
        });
        var I, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (x.fn.init = function(e, t, n) {
            var i, o;
            if (!e)
                return this;
            if (n = n || I,
            "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : B.exec(e)) || !i[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof x ? t[0] : t,
                    x.merge(this, x.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
                    O.test(i[1]) && x.isPlainObject(t))
                        for (i in t)
                            y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (o = r.getElementById(i[2])) && (this[0] = o,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(x) : x.makeArray(e, this)
        }
        ).prototype = x.fn,
        I = x(r);
        var R = /^(?:parents|prev(?:Until|All))/
          , $ = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function P(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        x.fn.extend({
            has: function(e) {
                var t = x(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (x.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0, o = this.length, a = [], r = "string" != typeof e && x(e);
                if (!M.test(e))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                return this.pushStack(a.length > 1 ? x.uniqueSort(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? d.call(x(e), this[0]) : d.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        x.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return S(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return S(e, "parentNode", n)
            },
            next: function(e) {
                return P(e, "nextSibling")
            },
            prev: function(e) {
                return P(e, "previousSibling")
            },
            nextAll: function(e) {
                return S(e, "nextSibling")
            },
            prevAll: function(e) {
                return S(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return S(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return S(e, "previousSibling", n)
            },
            siblings: function(e) {
                return E((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return E(e.firstChild)
            },
            contents: function(e) {
                return L(e, "iframe") ? e.contentDocument : (L(e, "template") && (e = e.content || e),
                x.merge([], e.childNodes))
            }
        }, function(e, t) {
            x.fn[e] = function(n, i) {
                var o = x.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (o = x.filter(i, o)),
                this.length > 1 && ($[e] || x.uniqueSort(o),
                R.test(e) && o.reverse()),
                this.pushStack(o)
            }
        });
        var j = /[^\x20\t\r\n\f]+/g;
        function H(e) {
            return e
        }
        function N(e) {
            throw e
        }
        function F(e, t, n, i) {
            var o;
            try {
                e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        x.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return x.each(e.match(j) || [], function(e, n) {
                    t[n] = !0
                }),
                t
            }(e) : x.extend({}, e);
            var t, n, i, o, a = [], r = [], s = -1, l = function() {
                for (o = o || e.once,
                i = t = !0; r.length; s = -1)
                    for (n = r.shift(); ++s < a.length; )
                        !1 === a[s].apply(n[0], n[1]) && e.stopOnFalse && (s = a.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                o && (a = n ? [] : "")
            }, u = {
                add: function() {
                    return a && (n && !t && (s = a.length - 1,
                    r.push(n)),
                    function t(n) {
                        x.each(n, function(n, i) {
                            y(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== C(i) && t(i)
                        })
                    }(arguments),
                    n && !t && l()),
                    this
                },
                remove: function() {
                    return x.each(arguments, function(e, t) {
                        for (var n; (n = x.inArray(t, a, n)) > -1; )
                            a.splice(n, 1),
                            n <= s && s--
                    }),
                    this
                },
                has: function(e) {
                    return e ? x.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []),
                    this
                },
                disable: function() {
                    return o = r = [],
                    a = n = "",
                    this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return o = r = [],
                    n || t || (a = n = ""),
                    this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = [e, (n = n || []).slice ? n.slice() : n],
                    r.push(n),
                    t || l()),
                    this
                },
                fire: function() {
                    return u.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!i
                }
            };
            return u
        }
        ,
        x.extend({
            Deferred: function(e) {
                var t = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]]
                  , i = "pending"
                  , o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, i) {
                                var o = y(e[i[4]]) && e[i[4]];
                                a[i[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    then: function(e, i, o) {
                        var a = 0;
                        function r(e, t, i, o) {
                            return function() {
                                var s = this
                                  , l = arguments
                                  , u = function() {
                                    var n, u;
                                    if (!(e < a)) {
                                        if ((n = i.apply(s, l)) === t.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        u = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        y(u) ? o ? u.call(n, r(a, t, H, o), r(a, t, N, o)) : (a++,
                                        u.call(n, r(a, t, H, o), r(a, t, N, o), r(a, t, H, t.notifyWith))) : (i !== H && (s = void 0,
                                        l = [n]),
                                        (o || t.resolveWith)(s, l))
                                    }
                                }
                                  , c = o ? u : function() {
                                    try {
                                        u()
                                    } catch (n) {
                                        x.Deferred.exceptionHook && x.Deferred.exceptionHook(n, c.stackTrace),
                                        e + 1 >= a && (i !== N && (s = void 0,
                                        l = [n]),
                                        t.rejectWith(s, l))
                                    }
                                }
                                ;
                                e ? c() : (x.Deferred.getStackHook && (c.stackTrace = x.Deferred.getStackHook()),
                                n.setTimeout(c))
                            }
                        }
                        return x.Deferred(function(n) {
                            t[0][3].add(r(0, n, y(o) ? o : H, n.notifyWith)),
                            t[1][3].add(r(0, n, y(e) ? e : H)),
                            t[2][3].add(r(0, n, y(i) ? i : N))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, o) : o
                    }
                }
                  , a = {};
                return x.each(t, function(e, n) {
                    var r = n[2]
                      , s = n[5];
                    o[n[1]] = r.add,
                    s && r.add(function() {
                        i = s
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                    r.add(n[3].fire),
                    a[n[0]] = function() {
                        return a[n[0] + "With"](this === a ? void 0 : this, arguments),
                        this
                    }
                    ,
                    a[n[0] + "With"] = r.fireWith
                }),
                o.promise(a),
                e && e.call(a, a),
                a
            },
            when: function(e) {
                var t = arguments.length
                  , n = t
                  , i = Array(n)
                  , o = l.call(arguments)
                  , a = x.Deferred()
                  , r = function(e) {
                    return function(n) {
                        i[e] = this,
                        o[e] = arguments.length > 1 ? l.call(arguments) : n,
                        --t || a.resolveWith(i, o)
                    }
                };
                if (t <= 1 && (F(e, a.done(r(n)).resolve, a.reject, !t),
                "pending" === a.state() || y(o[n] && o[n].then)))
                    return a.then();
                for (; n--; )
                    F(o[n], r(n), a.reject);
                return a.promise()
            }
        });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        x.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && W.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        x.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        }
        ;
        var q = x.Deferred();
        function z() {
            r.removeEventListener("DOMContentLoaded", z),
            n.removeEventListener("load", z),
            x.ready()
        }
        x.fn.ready = function(e) {
            return q.then(e).catch(function(e) {
                x.readyException(e)
            }),
            this
        }
        ,
        x.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0,
                !0 !== e && --x.readyWait > 0 || q.resolveWith(r, [x]))
            }
        }),
        x.ready.then = q.then,
        "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? n.setTimeout(x.ready) : (r.addEventListener("DOMContentLoaded", z),
        n.addEventListener("load", z));
        var V = function(e, t, n, i, o, a, r) {
            var s = 0
              , l = e.length
              , u = null == n;
            if ("object" === C(n))
                for (s in o = !0,
                n)
                    V(e, t, s, n[s], !0, a, r);
            else if (void 0 !== i && (o = !0,
            y(i) || (r = !0),
            u && (r ? (t.call(e, i),
            t = null) : (u = t,
            t = function(e, t, n) {
                return u.call(x(e), n)
            }
            )),
            t))
                for (; s < l; s++)
                    t(e[s], n, r ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : a
        }
          , X = /^-ms-/
          , U = /-([a-z])/g;
        function Y(e, t) {
            return t.toUpperCase()
        }
        function Q(e) {
            return e.replace(X, "ms-").replace(U, Y)
        }
        var J = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function K() {
            this.expando = x.expando + K.uid++
        }
        K.uid = 1,
        K.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var i, o = this.cache(e);
                if ("string" == typeof t)
                    o[Q(t)] = n;
                else
                    for (i in t)
                        o[Q(i)] = t[i];
                return o
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t))in i ? [t] : t.match(j) || []).length;
                        for (; n--; )
                            delete i[t[n]]
                    }
                    (void 0 === t || x.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !x.isEmptyObject(t)
            }
        };
        var G = new K
          , Z = new K
          , ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , te = /[A-Z]/g;
        function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(te, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Z.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        x.extend({
            hasData: function(e) {
                return Z.hasData(e) || G.hasData(e)
            },
            data: function(e, t, n) {
                return Z.access(e, t, n)
            },
            removeData: function(e, t) {
                Z.remove(e, t)
            },
            _data: function(e, t, n) {
                return G.access(e, t, n)
            },
            _removeData: function(e, t) {
                G.remove(e, t)
            }
        }),
        x.fn.extend({
            data: function(e, t) {
                var n, i, o, a = this[0], r = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (o = Z.get(a),
                    1 === a.nodeType && !G.get(a, "hasDataAttrs"))) {
                        for (n = r.length; n--; )
                            r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = Q(i.slice(5)),
                            ne(a, i, o[i]));
                        G.set(a, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    Z.set(this, e)
                }) : V(this, function(t) {
                    var n;
                    if (a && void 0 === t)
                        return void 0 !== (n = Z.get(a, e)) ? n : void 0 !== (n = ne(a, e)) ? n : void 0;
                    this.each(function() {
                        Z.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Z.remove(this, e)
                })
            }
        }),
        x.extend({
            queue: function(e, t, n) {
                var i;
                if (e)
                    return t = (t || "fx") + "queue",
                    i = G.get(e, t),
                    n && (!i || Array.isArray(n) ? i = G.access(e, t, x.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = x.queue(e, t)
                  , i = n.length
                  , o = n.shift()
                  , a = x._queueHooks(e, t);
                "inprogress" === o && (o = n.shift(),
                i--),
                o && ("fx" === t && n.unshift("inprogress"),
                delete a.stop,
                o.call(e, function() {
                    x.dequeue(e, t)
                }, a)),
                !i && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return G.get(e, n) || G.access(e, n, {
                    empty: x.Callbacks("once memory").add(function() {
                        G.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        x.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? x.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = x.queue(this, e, t);
                    x._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    x.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1, o = x.Deferred(), a = this, r = this.length, s = function() {
                    --i || o.resolveWith(a, [a])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; r--; )
                    (n = G.get(a[r], e + "queueHooks")) && n.empty && (i++,
                    n.empty.add(s));
                return s(),
                o.promise(t)
            }
        });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , oe = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$","i")
          , ae = ["Top", "Right", "Bottom", "Left"]
          , re = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
        }
          , se = function(e, t, n, i) {
            var o, a, r = {};
            for (a in t)
                r[a] = e.style[a],
                e.style[a] = t[a];
            for (a in o = n.apply(e, i || []),
            t)
                e.style[a] = r[a];
            return o
        };
        function le(e, t, n, i) {
            var o, a, r = 20, s = i ? function() {
                return i.cur()
            }
            : function() {
                return x.css(e, t, "")
            }
            , l = s(), u = n && n[3] || (x.cssNumber[t] ? "" : "px"), c = (x.cssNumber[t] || "px" !== u && +l) && oe.exec(x.css(e, t));
            if (c && c[3] !== u) {
                for (l /= 2,
                u = u || c[3],
                c = +l || 1; r--; )
                    x.style(e, t, c + u),
                    (1 - a) * (1 - (a = s() / l || .5)) <= 0 && (r = 0),
                    c /= a;
                c *= 2,
                x.style(e, t, c + u),
                n = n || []
            }
            return n && (c = +c || +l || 0,
            o = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = u,
            i.start = c,
            i.end = o)),
            o
        }
        var ue = {};
        function ce(e) {
            var t, n = e.ownerDocument, i = e.nodeName, o = ue[i];
            return o || (t = n.body.appendChild(n.createElement(i)),
            o = x.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            ue[i] = o,
            o)
        }
        function de(e, t) {
            for (var n, i, o = [], a = 0, r = e.length; a < r; a++)
                (i = e[a]).style && (n = i.style.display,
                t ? ("none" === n && (o[a] = G.get(i, "display") || null,
                o[a] || (i.style.display = "")),
                "" === i.style.display && re(i) && (o[a] = ce(i))) : "none" !== n && (o[a] = "none",
                G.set(i, "display", n)));
            for (a = 0; a < r; a++)
                null != o[a] && (e[a].style.display = o[a]);
            return e
        }
        x.fn.extend({
            show: function() {
                return de(this, !0)
            },
            hide: function() {
                return de(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    re(this) ? x(this).show() : x(this).hide()
                })
            }
        });
        var he = /^(?:checkbox|radio)$/i
          , pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , fe = /^$|^module$|\/(?:java|ecma)script/i
          , ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function ge(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && L(e, t) ? x.merge([e], n) : n
        }
        function me(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
        }
        ve.optgroup = ve.option,
        ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead,
        ve.th = ve.td;
        var ye = /<|&#?\w+;/;
        function be(e, t, n, i, o) {
            for (var a, r, s, l, u, c, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
                if ((a = e[p]) || 0 === a)
                    if ("object" === C(a))
                        x.merge(h, a.nodeType ? [a] : a);
                    else if (ye.test(a)) {
                        for (r = r || d.appendChild(t.createElement("div")),
                        s = (pe.exec(a) || ["", ""])[1].toLowerCase(),
                        l = ve[s] || ve._default,
                        r.innerHTML = l[1] + x.htmlPrefilter(a) + l[2],
                        c = l[0]; c--; )
                            r = r.lastChild;
                        x.merge(h, r.childNodes),
                        (r = d.firstChild).textContent = ""
                    } else
                        h.push(t.createTextNode(a));
            for (d.textContent = "",
            p = 0; a = h[p++]; )
                if (i && x.inArray(a, i) > -1)
                    o && o.push(a);
                else if (u = x.contains(a.ownerDocument, a),
                r = ge(d.appendChild(a), "script"),
                u && me(r),
                n)
                    for (c = 0; a = r[c++]; )
                        fe.test(a.type || "") && n.push(a);
            return d
        }
        !function() {
            var e = r.createDocumentFragment().appendChild(r.createElement("div"))
              , t = r.createElement("input");
            t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            m.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            e.innerHTML = "<textarea>x</textarea>",
            m.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var _e = r.documentElement
          , we = /^key/
          , Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , xe = /^([^.]*)(?:\.(.+)|)/;
        function ke() {
            return !0
        }
        function Te() {
            return !1
        }
        function De() {
            try {
                return r.activeElement
            } catch (e) {}
        }
        function Se(e, t, n, i, o, a) {
            var r, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (i = i || n,
                n = void 0),
                t)
                    Se(e, s, n, i, t[s], a);
                return e
            }
            if (null == i && null == o ? (o = n,
            i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
            i = void 0) : (o = i,
            i = n,
            n = void 0)),
            !1 === o)
                o = Te;
            else if (!o)
                return e;
            return 1 === a && (r = o,
            (o = function(e) {
                return x().off(e),
                r.apply(this, arguments)
            }
            ).guid = r.guid || (r.guid = x.guid++)),
            e.each(function() {
                x.event.add(this, t, o, i, n)
            })
        }
        x.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var a, r, s, l, u, c, d, h, p, f, v, g = G.get(e);
                if (g)
                    for (n.handler && (n = (a = n).handler,
                    o = a.selector),
                    o && x.find.matchesSelector(_e, o),
                    n.guid || (n.guid = x.guid++),
                    (l = g.events) || (l = g.events = {}),
                    (r = g.handle) || (r = g.handle = function(t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    u = (t = (t || "").match(j) || [""]).length; u--; )
                        p = v = (s = xe.exec(t[u]) || [])[1],
                        f = (s[2] || "").split(".").sort(),
                        p && (d = x.event.special[p] || {},
                        p = (o ? d.delegateType : d.bindType) || p,
                        d = x.event.special[p] || {},
                        c = x.extend({
                            type: p,
                            origType: v,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && x.expr.match.needsContext.test(o),
                            namespace: f.join(".")
                        }, a),
                        (h = l[p]) || ((h = l[p] = []).delegateCount = 0,
                        d.setup && !1 !== d.setup.call(e, i, f, r) || e.addEventListener && e.addEventListener(p, r)),
                        d.add && (d.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                        o ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                        x.event.global[p] = !0)
            },
            remove: function(e, t, n, i, o) {
                var a, r, s, l, u, c, d, h, p, f, v, g = G.hasData(e) && G.get(e);
                if (g && (l = g.events)) {
                    for (u = (t = (t || "").match(j) || [""]).length; u--; )
                        if (p = v = (s = xe.exec(t[u]) || [])[1],
                        f = (s[2] || "").split(".").sort(),
                        p) {
                            for (d = x.event.special[p] || {},
                            h = l[p = (i ? d.delegateType : d.bindType) || p] || [],
                            s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            r = a = h.length; a--; )
                                c = h[a],
                                !o && v !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(a, 1),
                                c.selector && h.delegateCount--,
                                d.remove && d.remove.call(e, c));
                            r && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || x.removeEvent(e, p, g.handle),
                            delete l[p])
                        } else
                            for (p in l)
                                x.event.remove(e, p + t[u], n, i, !0);
                    x.isEmptyObject(l) && G.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, o, a, r, s = x.event.fix(e), l = new Array(arguments.length), u = (G.get(this, "events") || {})[s.type] || [], c = x.event.special[s.type] || {};
                for (l[0] = s,
                t = 1; t < arguments.length; t++)
                    l[t] = arguments[t];
                if (s.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                    for (r = x.event.handlers.call(this, s, u),
                    t = 0; (o = r[t++]) && !s.isPropagationStopped(); )
                        for (s.currentTarget = o.elem,
                        n = 0; (a = o.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                            s.rnamespace && !s.rnamespace.test(a.namespace) || (s.handleObj = a,
                            s.data = a.data,
                            void 0 !== (i = ((x.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, l)) && !1 === (s.result = i) && (s.preventDefault(),
                            s.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, s),
                    s.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, a, r, s = [], l = t.delegateCount, u = e.target;
                if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (a = [],
                            r = {},
                            n = 0; n < l; n++)
                                void 0 === r[o = (i = t[n]).selector + " "] && (r[o] = i.needsContext ? x(o, this).index(u) > -1 : x.find(o, this, null, [u]).length),
                                r[o] && a.push(i);
                            a.length && s.push({
                                elem: u,
                                handlers: a
                            })
                        }
                return u = this,
                l < t.length && s.push({
                    elem: u,
                    handlers: t.slice(l)
                }),
                s
            },
            addProp: function(e, t) {
                Object.defineProperty(x.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(t) ? function() {
                        if (this.originalEvent)
                            return t(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[e]
                    }
                    ,
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[x.expando] ? e : new x.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== De() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === De() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && L(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(e) {
                        return L(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        x.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        x.Event = function(e, t) {
            if (!(this instanceof x.Event))
                return new x.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Te,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && x.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[x.expando] = !0
        }
        ,
        x.Event.prototype = {
            constructor: x.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ke,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ke,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ke,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        x.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, x.event.addProp),
        x.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            x.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = e.relatedTarget, o = e.handleObj;
                    return i && (i === this || x.contains(this, i)) || (e.type = o.origType,
                    n = o.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        x.fn.extend({
            on: function(e, t, n, i) {
                return Se(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return Se(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                    x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ("object" == typeof e) {
                    for (o in e)
                        this.off(o, t, e[o]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Te),
                this.each(function() {
                    x.event.remove(this, e, n, t)
                })
            }
        });
        var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , Me = /<script|<style|<link/i
          , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Ae(e, t) {
            return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
        }
        function Ie(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function Be(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function Re(e, t) {
            var n, i, o, a, r, s, l, u;
            if (1 === t.nodeType) {
                if (G.hasData(e) && (a = G.access(e),
                r = G.set(t, a),
                u = a.events))
                    for (o in delete r.handle,
                    r.events = {},
                    u)
                        for (n = 0,
                        i = u[o].length; n < i; n++)
                            x.event.add(t, o, u[o][n]);
                Z.hasData(e) && (s = Z.access(e),
                l = x.extend({}, s),
                Z.set(t, l))
            }
        }
        function $e(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && he.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function Pe(e, t, n, i) {
            t = u.apply([], t);
            var o, a, r, s, l, c, d = 0, h = e.length, p = h - 1, f = t[0], v = y(f);
            if (v || h > 1 && "string" == typeof f && !m.checkClone && Le.test(f))
                return e.each(function(o) {
                    var a = e.eq(o);
                    v && (t[0] = f.call(this, o, a.html())),
                    Pe(a, t, n, i)
                });
            if (h && (a = (o = be(t, e[0].ownerDocument, !1, e, i)).firstChild,
            1 === o.childNodes.length && (o = a),
            a || i)) {
                for (s = (r = x.map(ge(o, "script"), Ie)).length; d < h; d++)
                    l = o,
                    d !== p && (l = x.clone(l, !0, !0),
                    s && x.merge(r, ge(l, "script"))),
                    n.call(e[d], l, d);
                if (s)
                    for (c = r[r.length - 1].ownerDocument,
                    x.map(r, Be),
                    d = 0; d < s; d++)
                        l = r[d],
                        fe.test(l.type || "") && !G.access(l, "globalEval") && x.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(l.src) : w(l.textContent.replace(Oe, ""), c, l))
            }
            return e
        }
        function je(e, t, n) {
            for (var i, o = t ? x.filter(t, e) : e, a = 0; null != (i = o[a]); a++)
                n || 1 !== i.nodeType || x.cleanData(ge(i)),
                i.parentNode && (n && x.contains(i.ownerDocument, i) && me(ge(i, "script")),
                i.parentNode.removeChild(i));
            return e
        }
        x.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ee, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, o, a, r, s = e.cloneNode(!0), l = x.contains(e.ownerDocument, e);
                if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                    for (r = ge(s),
                    i = 0,
                    o = (a = ge(e)).length; i < o; i++)
                        $e(a[i], r[i]);
                if (t)
                    if (n)
                        for (a = a || ge(e),
                        r = r || ge(s),
                        i = 0,
                        o = a.length; i < o; i++)
                            Re(a[i], r[i]);
                    else
                        Re(e, s);
                return (r = ge(s, "script")).length > 0 && me(r, !l && ge(e, "script")),
                s
            },
            cleanData: function(e) {
                for (var t, n, i, o = x.event.special, a = 0; void 0 !== (n = e[a]); a++)
                    if (J(n)) {
                        if (t = n[G.expando]) {
                            if (t.events)
                                for (i in t.events)
                                    o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                            n[G.expando] = void 0
                        }
                        n[Z.expando] && (n[Z.expando] = void 0)
                    }
            }
        }),
        x.fn.extend({
            detach: function(e) {
                return je(this, e, !0)
            },
            remove: function(e) {
                return je(this, e)
            },
            text: function(e) {
                return V(this, function(e) {
                    return void 0 === e ? x.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Pe(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Pe(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Ae(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Pe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Pe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (x.cleanData(ge(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return x.clone(this, e, t)
                })
            },
            html: function(e) {
                return V(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , i = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !Me.test(e) && !ve[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = x.htmlPrefilter(e);
                        try {
                            for (; n < i; n++)
                                1 === (t = this[n] || {}).nodeType && (x.cleanData(ge(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return Pe(this, arguments, function(t) {
                    var n = this.parentNode;
                    x.inArray(this, e) < 0 && (x.cleanData(ge(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        x.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            x.fn[e] = function(e) {
                for (var n, i = [], o = x(e), a = o.length - 1, r = 0; r <= a; r++)
                    n = r === a ? this : this.clone(!0),
                    x(o[r])[t](n),
                    c.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var He = new RegExp("^(" + ie + ")(?!px)[a-z%]+$","i")
          , Ne = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }
          , Fe = new RegExp(ae.join("|"),"i");
        function We(e, t, n) {
            var i, o, a, r, s = e.style;
            return (n = n || Ne(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || x.contains(e.ownerDocument, e) || (r = x.style(e, t)),
            !m.pixelBoxStyles() && He.test(r) && Fe.test(t) && (i = s.width,
            o = s.minWidth,
            a = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = r,
            r = n.width,
            s.width = i,
            s.minWidth = o,
            s.maxWidth = a)),
            void 0 !== r ? r + "" : r
        }
        function qe(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function e() {
                if (c) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    _e.appendChild(u).appendChild(c);
                    var e = n.getComputedStyle(c);
                    i = "1%" !== e.top,
                    l = 12 === t(e.marginLeft),
                    c.style.right = "60%",
                    s = 36 === t(e.right),
                    o = 36 === t(e.width),
                    c.style.position = "absolute",
                    a = 36 === c.offsetWidth || "absolute",
                    _e.removeChild(u),
                    c = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var i, o, a, s, l, u = r.createElement("div"), c = r.createElement("div");
            c.style && (c.style.backgroundClip = "content-box",
            c.cloneNode(!0).style.backgroundClip = "",
            m.clearCloneStyle = "content-box" === c.style.backgroundClip,
            x.extend(m, {
                boxSizingReliable: function() {
                    return e(),
                    o
                },
                pixelBoxStyles: function() {
                    return e(),
                    s
                },
                pixelPosition: function() {
                    return e(),
                    i
                },
                reliableMarginLeft: function() {
                    return e(),
                    l
                },
                scrollboxSize: function() {
                    return e(),
                    a
                }
            }))
        }();
        var ze = /^(none|table(?!-c[ea]).+)/
          , Ve = /^--/
          , Xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Ue = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , Ye = ["Webkit", "Moz", "ms"]
          , Qe = r.createElement("div").style;
        function Je(e) {
            var t = x.cssProps[e];
            return t || (t = x.cssProps[e] = function(e) {
                if (e in Qe)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; )
                    if ((e = Ye[n] + t)in Qe)
                        return e
            }(e) || e),
            t
        }
        function Ke(e, t, n) {
            var i = oe.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }
        function Ge(e, t, n, i, o, a) {
            var r = "width" === t ? 1 : 0
              , s = 0
              , l = 0;
            if (n === (i ? "border" : "content"))
                return 0;
            for (; r < 4; r += 2)
                "margin" === n && (l += x.css(e, n + ae[r], !0, o)),
                i ? ("content" === n && (l -= x.css(e, "padding" + ae[r], !0, o)),
                "margin" !== n && (l -= x.css(e, "border" + ae[r] + "Width", !0, o))) : (l += x.css(e, "padding" + ae[r], !0, o),
                "padding" !== n ? l += x.css(e, "border" + ae[r] + "Width", !0, o) : s += x.css(e, "border" + ae[r] + "Width", !0, o));
            return !i && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - .5))),
            l
        }
        function Ze(e, t, n) {
            var i = Ne(e)
              , o = We(e, t, i)
              , a = "border-box" === x.css(e, "boxSizing", !1, i)
              , r = a;
            if (He.test(o)) {
                if (!n)
                    return o;
                o = "auto"
            }
            return r = r && (m.boxSizingReliable() || o === e.style[t]),
            ("auto" === o || !parseFloat(o) && "inline" === x.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)],
            r = !0),
            (o = parseFloat(o) || 0) + Ge(e, t, n || (a ? "border" : "content"), r, i, o) + "px"
        }
        function et(e, t, n, i, o) {
            return new et.prototype.init(e,t,n,i,o)
        }
        x.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, r, s = Q(t), l = Ve.test(t), u = e.style;
                    if (l || (t = Je(s)),
                    r = x.cssHooks[t] || x.cssHooks[s],
                    void 0 === n)
                        return r && "get"in r && void 0 !== (o = r.get(e, !1, i)) ? o : u[t];
                    "string" === (a = typeof n) && (o = oe.exec(n)) && o[1] && (n = le(e, t, o),
                    a = "number"),
                    null != n && n == n && ("number" === a && (n += o && o[3] || (x.cssNumber[s] ? "" : "px")),
                    m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    r && "set"in r && void 0 === (n = r.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var o, a, r, s = Q(t);
                return Ve.test(t) || (t = Je(s)),
                (r = x.cssHooks[t] || x.cssHooks[s]) && "get"in r && (o = r.get(e, !0, n)),
                void 0 === o && (o = We(e, t, i)),
                "normal" === o && t in Ue && (o = Ue[t]),
                "" === n || n ? (a = parseFloat(o),
                !0 === n || isFinite(a) ? a || 0 : o) : o
            }
        }),
        x.each(["height", "width"], function(e, t) {
            x.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n)
                        return !ze.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, i) : se(e, Xe, function() {
                            return Ze(e, t, i)
                        })
                },
                set: function(e, n, i) {
                    var o, a = Ne(e), r = "border-box" === x.css(e, "boxSizing", !1, a), s = i && Ge(e, t, i, r, a);
                    return r && m.scrollboxSize() === a.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Ge(e, t, "border", !1, a) - .5)),
                    s && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                    n = x.css(e, t)),
                    Ke(0, n, s)
                }
            }
        }),
        x.cssHooks.marginLeft = qe(m.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        x.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            x.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                        o[e + ae[i] + t] = a[i] || a[i - 2] || a[0];
                    return o
                }
            },
            "margin" !== e && (x.cssHooks[e + t].set = Ke)
        }),
        x.fn.extend({
            css: function(e, t) {
                return V(this, function(e, t, n) {
                    var i, o, a = {}, r = 0;
                    if (Array.isArray(t)) {
                        for (i = Ne(e),
                        o = t.length; r < o; r++)
                            a[t[r]] = x.css(e, t[r], !1, i);
                        return a
                    }
                    return void 0 !== n ? x.style(e, t, n) : x.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        x.Tween = et,
        et.prototype = {
            constructor: et,
            init: function(e, t, n, i, o, a) {
                this.elem = e,
                this.prop = n,
                this.easing = o || x.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = a || (x.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = et.propHooks[this.prop];
                return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : et.propHooks._default.set(this),
                this
            }
        },
        et.prototype.init.prototype = et.prototype,
        et.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        et.propHooks.scrollTop = et.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        x.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        x.fx = et.prototype.init,
        x.fx.step = {};
        var tt, nt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
        function at() {
            nt && (!1 === r.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(at) : n.setTimeout(at, x.fx.interval),
            x.fx.tick())
        }
        function rt() {
            return n.setTimeout(function() {
                tt = void 0
            }),
            tt = Date.now()
        }
        function st(e, t) {
            var n, i = 0, o = {
                height: e
            };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
                o["margin" + (n = ae[i])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e),
            o
        }
        function lt(e, t, n) {
            for (var i, o = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), a = 0, r = o.length; a < r; a++)
                if (i = o[a].call(n, t, e))
                    return i
        }
        function ut(e, t, n) {
            var i, o, a = 0, r = ut.prefilters.length, s = x.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (o)
                    return !1;
                for (var t = tt || rt(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), a = 0, r = u.tweens.length; a < r; a++)
                    u.tweens[a].run(i);
                return s.notifyWith(e, [u, i, n]),
                i < 1 && r ? n : (r || s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u]),
                !1)
            }, u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || rt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i),
                    i
                },
                stop: function(t) {
                    var n = 0
                      , i = t ? u.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; n < i; n++)
                        u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]),
                    s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                    this
                }
            }), c = u.props;
            for (!function(e, t) {
                var n, i, o, a, r;
                for (n in e)
                    if (o = t[i = Q(n)],
                    a = e[n],
                    Array.isArray(a) && (o = a[1],
                    a = e[n] = a[0]),
                    n !== i && (e[i] = a,
                    delete e[n]),
                    (r = x.cssHooks[i]) && "expand"in r)
                        for (n in a = r.expand(a),
                        delete e[i],
                        a)
                            n in e || (e[n] = a[n],
                            t[n] = o);
                    else
                        t[i] = o
            }(c, u.opts.specialEasing); a < r; a++)
                if (i = ut.prefilters[a].call(u, e, c, u.opts))
                    return y(i.stop) && (x._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)),
                    i;
            return x.map(c, lt, u),
            y(u.opts.start) && u.opts.start.call(e, u),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
            x.fx.timer(x.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })),
            u
        }
        x.Animation = x.extend(ut, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return le(n.elem, e, oe.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                y(e) ? (t = e,
                e = ["*"]) : e = e.match(j);
                for (var n, i = 0, o = e.length; i < o; i++)
                    n = e[i],
                    ut.tweeners[n] = ut.tweeners[n] || [],
                    ut.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, o, a, r, s, l, u, c, d = "width"in t || "height"in t, h = this, p = {}, f = e.style, v = e.nodeType && re(e), g = G.get(e, "fxshow");
                for (i in n.queue || (null == (r = x._queueHooks(e, "fx")).unqueued && (r.unqueued = 0,
                s = r.empty.fire,
                r.empty.fire = function() {
                    r.unqueued || s()
                }
                ),
                r.unqueued++,
                h.always(function() {
                    h.always(function() {
                        r.unqueued--,
                        x.queue(e, "fx").length || r.empty.fire()
                    })
                })),
                t)
                    if (o = t[i],
                    it.test(o)) {
                        if (delete t[i],
                        a = a || "toggle" === o,
                        o === (v ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i])
                                continue;
                            v = !0
                        }
                        p[i] = g && g[i] || x.style(e, i)
                    }
                if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(p))
                    for (i in d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                    null == (u = g && g.display) && (u = G.get(e, "display")),
                    "none" === (c = x.css(e, "display")) && (u ? c = u : (de([e], !0),
                    u = e.style.display || u,
                    c = x.css(e, "display"),
                    de([e]))),
                    ("inline" === c || "inline-block" === c && null != u) && "none" === x.css(e, "float") && (l || (h.done(function() {
                        f.display = u
                    }),
                    null == u && (c = f.display,
                    u = "none" === c ? "" : c)),
                    f.display = "inline-block")),
                    n.overflow && (f.overflow = "hidden",
                    h.always(function() {
                        f.overflow = n.overflow[0],
                        f.overflowX = n.overflow[1],
                        f.overflowY = n.overflow[2]
                    })),
                    l = !1,
                    p)
                        l || (g ? "hidden"in g && (v = g.hidden) : g = G.access(e, "fxshow", {
                            display: u
                        }),
                        a && (g.hidden = !v),
                        v && de([e], !0),
                        h.done(function() {
                            for (i in v || de([e]),
                            G.remove(e, "fxshow"),
                            p)
                                x.style(e, i, p[i])
                        })),
                        l = lt(v ? g[i] : 0, i, h),
                        i in g || (g[i] = l.start,
                        v && (l.end = l.start,
                        l.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
            }
        }),
        x.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? x.extend({}, e) : {
                complete: n || !n && t || y(e) && e,
                duration: e,
                easing: n && t || t && !y(t) && t
            };
            return x.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in x.fx.speeds ? i.duration = x.fx.speeds[i.duration] : i.duration = x.fx.speeds._default),
            null != i.queue && !0 !== i.queue || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                y(i.old) && i.old.call(this),
                i.queue && x.dequeue(this, i.queue)
            }
            ,
            i
        }
        ,
        x.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(re).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = x.isEmptyObject(e)
                  , a = x.speed(t, n, i)
                  , r = function() {
                    var t = ut(this, x.extend({}, e), a);
                    (o || G.get(this, "finish")) && t.stop(!0)
                };
                return r.finish = r,
                o || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && !1 !== e && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , o = null != e && e + "queueHooks"
                      , a = x.timers
                      , r = G.get(this);
                    if (o)
                        r[o] && r[o].stop && i(r[o]);
                    else
                        for (o in r)
                            r[o] && r[o].stop && ot.test(o) && i(r[o]);
                    for (o = a.length; o--; )
                        a[o].elem !== this || null != e && a[o].queue !== e || (a[o].anim.stop(n),
                        t = !1,
                        a.splice(o, 1));
                    !t && n || x.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"),
                this.each(function() {
                    var t, n = G.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], a = x.timers, r = i ? i.length : 0;
                    for (n.finish = !0,
                    x.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = a.length; t--; )
                        a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0),
                        a.splice(t, 1));
                    for (t = 0; t < r; t++)
                        i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        x.each(["toggle", "show", "hide"], function(e, t) {
            var n = x.fn[t];
            x.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, o)
            }
        }),
        x.each({
            slideDown: st("show"),
            slideUp: st("hide"),
            slideToggle: st("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            x.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }),
        x.timers = [],
        x.fx.tick = function() {
            var e, t = 0, n = x.timers;
            for (tt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || x.fx.stop(),
            tt = void 0
        }
        ,
        x.fx.timer = function(e) {
            x.timers.push(e),
            x.fx.start()
        }
        ,
        x.fx.interval = 13,
        x.fx.start = function() {
            nt || (nt = !0,
            at())
        }
        ,
        x.fx.stop = function() {
            nt = null
        }
        ,
        x.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        x.fn.delay = function(e, t) {
            return e = x.fx && x.fx.speeds[e] || e,
            t = t || "fx",
            this.queue(t, function(t, i) {
                var o = n.setTimeout(t, e);
                i.stop = function() {
                    n.clearTimeout(o)
                }
            })
        }
        ,
        function() {
            var e = r.createElement("input")
              , t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox",
            m.checkOn = "" !== e.value,
            m.optSelected = t.selected,
            (e = r.createElement("input")).value = "t",
            e.type = "radio",
            m.radioValue = "t" === e.value
        }();
        var ct, dt = x.expr.attrHandle;
        x.fn.extend({
            attr: function(e, t) {
                return V(this, x.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    x.removeAttr(this, e)
                })
            }
        }),
        x.extend({
            attr: function(e, t, n) {
                var i, o, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                    return void 0 === e.getAttribute ? x.prop(e, t, n) : (1 === a && x.isXMLDoc(e) || (o = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? ct : void 0)),
                    void 0 !== n ? null === n ? void x.removeAttr(e, t) : o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                    n) : o && "get"in o && null !== (i = o.get(e, t)) ? i : null == (i = x.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!m.radioValue && "radio" === t && L(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0, o = t && t.match(j);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++]; )
                        e.removeAttribute(n)
            }
        }),
        ct = {
            set: function(e, t, n) {
                return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = dt[t] || x.find.attr;
            dt[t] = function(e, t, i) {
                var o, a, r = t.toLowerCase();
                return i || (a = dt[r],
                dt[r] = o,
                o = null != n(e, t, i) ? r : null,
                dt[r] = a),
                o
            }
        });
        var ht = /^(?:input|select|textarea|button)$/i
          , pt = /^(?:a|area)$/i;
        function ft(e) {
            return (e.match(j) || []).join(" ")
        }
        function vt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function gt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
        }
        x.fn.extend({
            prop: function(e, t) {
                return V(this, x.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[x.propFix[e] || e]
                })
            }
        }),
        x.extend({
            prop: function(e, t, n) {
                var i, o, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                    return 1 === a && x.isXMLDoc(e) || (t = x.propFix[t] || t,
                    o = x.propHooks[t]),
                    void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get"in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = x.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        m.optSelected || (x.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            x.propFix[this.toLowerCase()] = this
        }),
        x.fn.extend({
            addClass: function(e) {
                var t, n, i, o, a, r, s, l = 0;
                if (y(e))
                    return this.each(function(t) {
                        x(this).addClass(e.call(this, t, vt(this)))
                    });
                if ((t = gt(e)).length)
                    for (; n = this[l++]; )
                        if (o = vt(n),
                        i = 1 === n.nodeType && " " + ft(o) + " ") {
                            for (r = 0; a = t[r++]; )
                                i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            o !== (s = ft(i)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, a, r, s, l = 0;
                if (y(e))
                    return this.each(function(t) {
                        x(this).removeClass(e.call(this, t, vt(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((t = gt(e)).length)
                    for (; n = this[l++]; )
                        if (o = vt(n),
                        i = 1 === n.nodeType && " " + ft(o) + " ") {
                            for (r = 0; a = t[r++]; )
                                for (; i.indexOf(" " + a + " ") > -1; )
                                    i = i.replace(" " + a + " ", " ");
                            o !== (s = ft(i)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e
                  , i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function(n) {
                    x(this).toggleClass(e.call(this, n, vt(this), t), t)
                }) : this.each(function() {
                    var t, o, a, r;
                    if (i)
                        for (o = 0,
                        a = x(this),
                        r = gt(e); t = r[o++]; )
                            a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || ((t = vt(this)) && G.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++]; )
                    if (1 === n.nodeType && (" " + ft(vt(n)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var mt = /\r/g;
        x.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = y(e),
                this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? e.call(this, n, x(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(mt, "") : null == n ? "" : n : void 0
            }
        }),
        x.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = x.find.attr(e, "value");
                        return null != t ? t : ft(x.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, o = e.options, a = e.selectedIndex, r = "select-one" === e.type, s = r ? null : [], l = r ? a + 1 : o.length;
                        for (i = a < 0 ? l : r ? a : 0; i < l; i++)
                            if (((n = o[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                                if (t = x(n).val(),
                                r)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, a = x.makeArray(t), r = o.length; r--; )
                            ((i = o[r]).selected = x.inArray(x.valHooks.option.get(i), a) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        a
                    }
                }
            }
        }),
        x.each(["radio", "checkbox"], function() {
            x.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = x.inArray(x(e).val(), t) > -1
                }
            },
            m.checkOn || (x.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }),
        m.focusin = "onfocusin"in n;
        var yt = /^(?:focusinfocus|focusoutblur)$/
          , bt = function(e) {
            e.stopPropagation()
        };
        x.extend(x.event, {
            trigger: function(e, t, i, o) {
                var a, s, l, u, c, d, h, p, v = [i || r], g = f.call(e, "type") ? e.type : e, m = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = p = l = i = i || r,
                3 !== i.nodeType && 8 !== i.nodeType && !yt.test(g + x.event.triggered) && (g.indexOf(".") > -1 && (g = (m = g.split(".")).shift(),
                m.sort()),
                c = g.indexOf(":") < 0 && "on" + g,
                (e = e[x.expando] ? e : new x.Event(g,"object" == typeof e && e)).isTrigger = o ? 2 : 3,
                e.namespace = m.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = i),
                t = null == t ? [e] : x.makeArray(t, [e]),
                h = x.event.special[g] || {},
                o || !h.trigger || !1 !== h.trigger.apply(i, t))) {
                    if (!o && !h.noBubble && !b(i)) {
                        for (u = h.delegateType || g,
                        yt.test(u + g) || (s = s.parentNode); s; s = s.parentNode)
                            v.push(s),
                            l = s;
                        l === (i.ownerDocument || r) && v.push(l.defaultView || l.parentWindow || n)
                    }
                    for (a = 0; (s = v[a++]) && !e.isPropagationStopped(); )
                        p = s,
                        e.type = a > 1 ? u : h.bindType || g,
                        (d = (G.get(s, "events") || {})[e.type] && G.get(s, "handle")) && d.apply(s, t),
                        (d = c && s[c]) && d.apply && J(s) && (e.result = d.apply(s, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = g,
                    o || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), t) || !J(i) || c && y(i[g]) && !b(i) && ((l = i[c]) && (i[c] = null),
                    x.event.triggered = g,
                    e.isPropagationStopped() && p.addEventListener(g, bt),
                    i[g](),
                    e.isPropagationStopped() && p.removeEventListener(g, bt),
                    x.event.triggered = void 0,
                    l && (i[c] = l)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var i = x.extend(new x.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                x.event.trigger(i, null, t)
            }
        }),
        x.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    x.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return x.event.trigger(e, t, n, !0)
            }
        }),
        m.focusin || x.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e))
            };
            x.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this
                      , o = G.access(i, t);
                    o || i.addEventListener(e, n, !0),
                    G.access(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this
                      , o = G.access(i, t) - 1;
                    o ? G.access(i, t, o) : (i.removeEventListener(e, n, !0),
                    G.remove(i, t))
                }
            }
        });
        var _t = n.location
          , wt = Date.now()
          , Ct = /\?/;
        x.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + e),
            t
        }
        ;
        var xt = /\[\]$/
          , kt = /\r?\n/g
          , Tt = /^(?:submit|button|image|reset|file)$/i
          , Dt = /^(?:input|select|textarea|keygen)/i;
        function St(e, t, n, i) {
            var o;
            if (Array.isArray(t))
                x.each(t, function(t, o) {
                    n || xt.test(e) ? i(e, o) : St(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
                });
            else if (n || "object" !== C(t))
                i(e, t);
            else
                for (o in t)
                    St(e + "[" + o + "]", t[o], n, i)
        }
        x.param = function(e, t) {
            var n, i = [], o = function(e, t) {
                var n = y(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(e) || e.jquery && !x.isPlainObject(e))
                x.each(e, function() {
                    o(this.name, this.value)
                });
            else
                for (n in e)
                    St(n, e[n], t, o);
            return i.join("&")
        }
        ,
        x.fn.extend({
            serialize: function() {
                return x.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = x.prop(this, "elements");
                    return e ? x.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !x(this).is(":disabled") && Dt.test(this.nodeName) && !Tt.test(e) && (this.checked || !he.test(e))
                }).map(function(e, t) {
                    var n = x(this).val();
                    return null == n ? null : Array.isArray(n) ? x.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(kt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(kt, "\r\n")
                    }
                }).get()
            }
        });
        var Et = /%20/g
          , Mt = /#.*$/
          , Lt = /([?&])_=[^&]*/
          , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , At = /^(?:GET|HEAD)$/
          , It = /^\/\//
          , Bt = {}
          , Rt = {}
          , $t = "*/".concat("*")
          , Pt = r.createElement("a");
        function jt(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var i, o = 0, a = t.toLowerCase().match(j) || [];
                if (y(n))
                    for (; i = a[o++]; )
                        "+" === i[0] ? (i = i.slice(1) || "*",
                        (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }
        function Ht(e, t, n, i) {
            var o = {}
              , a = e === Rt;
            function r(s) {
                var l;
                return o[s] = !0,
                x.each(e[s] || [], function(e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                    r(u),
                    !1)
                }),
                l
            }
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }
        function Nt(e, t) {
            var n, i, o = x.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
            return i && x.extend(!0, e, i),
            e
        }
        Pt.href = _t.href,
        x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _t.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": x.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Nt(Nt(e, x.ajaxSettings), t) : Nt(x.ajaxSettings, e)
            },
            ajaxPrefilter: jt(Bt),
            ajaxTransport: jt(Rt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var i, o, a, s, l, u, c, d, h, p, f = x.ajaxSetup({}, t), v = f.context || f, g = f.context && (v.nodeType || v.jquery) ? x(v) : x.event, m = x.Deferred(), y = x.Callbacks("once memory"), b = f.statusCode || {}, _ = {}, w = {}, C = "canceled", k = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Ot.exec(a); )
                                    s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                        _[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (f.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c)
                                k.always(e[k.status]);
                            else
                                for (t in e)
                                    b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || C;
                        return i && i.abort(t),
                        T(0, t),
                        this
                    }
                };
                if (m.promise(k),
                f.url = ((e || f.url || _t.href) + "").replace(It, _t.protocol + "//"),
                f.type = t.method || t.type || f.method || f.type,
                f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""],
                null == f.crossDomain) {
                    u = r.createElement("a");
                    try {
                        u.href = f.url,
                        u.href = u.href,
                        f.crossDomain = Pt.protocol + "//" + Pt.host != u.protocol + "//" + u.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)),
                Ht(Bt, f, t, k),
                c)
                    return k;
                for (h in (d = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !At.test(f.type),
                o = f.url.replace(Mt, ""),
                f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Et, "+")) : (p = f.url.slice(o.length),
                f.data && (f.processData || "string" == typeof f.data) && (o += (Ct.test(o) ? "&" : "?") + f.data,
                delete f.data),
                !1 === f.cache && (o = o.replace(Lt, "$1"),
                p = (Ct.test(o) ? "&" : "?") + "_=" + wt++ + p),
                f.url = o + p),
                f.ifModified && (x.lastModified[o] && k.setRequestHeader("If-Modified-Since", x.lastModified[o]),
                x.etag[o] && k.setRequestHeader("If-None-Match", x.etag[o])),
                (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && k.setRequestHeader("Content-Type", f.contentType),
                k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : f.accepts["*"]),
                f.headers)
                    k.setRequestHeader(h, f.headers[h]);
                if (f.beforeSend && (!1 === f.beforeSend.call(v, k, f) || c))
                    return k.abort();
                if (C = "abort",
                y.add(f.complete),
                k.done(f.success),
                k.fail(f.error),
                i = Ht(Rt, f, t, k)) {
                    if (k.readyState = 1,
                    d && g.trigger("ajaxSend", [k, f]),
                    c)
                        return k;
                    f.async && f.timeout > 0 && (l = n.setTimeout(function() {
                        k.abort("timeout")
                    }, f.timeout));
                    try {
                        c = !1,
                        i.send(_, T)
                    } catch (e) {
                        if (c)
                            throw e;
                        T(-1, e)
                    }
                } else
                    T(-1, "No Transport");
                function T(e, t, r, s) {
                    var u, h, p, _, w, C = t;
                    c || (c = !0,
                    l && n.clearTimeout(l),
                    i = void 0,
                    a = s || "",
                    k.readyState = e > 0 ? 4 : 0,
                    u = e >= 200 && e < 300 || 304 === e,
                    r && (_ = function(e, t, n) {
                        for (var i, o, a, r, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                            l.shift(),
                            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in s)
                                if (s[o] && s[o].test(i)) {
                                    l.unshift(o);
                                    break
                                }
                        if (l[0]in n)
                            a = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || e.converters[o + " " + l[0]]) {
                                    a = o;
                                    break
                                }
                                r || (r = o)
                            }
                            a = a || r
                        }
                        if (a)
                            return a !== l[0] && l.unshift(a),
                            n[a]
                    }(f, k, r)),
                    _ = function(e, t, n, i) {
                        var o, a, r, s, l, u = {}, c = e.dataTypes.slice();
                        if (c[1])
                            for (r in e.converters)
                                u[r.toLowerCase()] = e.converters[r];
                        for (a = c.shift(); a; )
                            if (e.responseFields[a] && (n[e.responseFields[a]] = t),
                            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            l = a,
                            a = c.shift())
                                if ("*" === a)
                                    a = l;
                                else if ("*" !== l && l !== a) {
                                    if (!(r = u[l + " " + a] || u["* " + a]))
                                        for (o in u)
                                            if ((s = o.split(" "))[1] === a && (r = u[l + " " + s[0]] || u["* " + s[0]])) {
                                                !0 === r ? r = u[o] : !0 !== u[o] && (a = s[0],
                                                c.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== r)
                                        if (r && e.throws)
                                            t = r(t);
                                        else
                                            try {
                                                t = r(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: r ? e : "No conversion from " + l + " to " + a
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(f, _, k, u),
                    u ? (f.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (x.lastModified[o] = w),
                    (w = k.getResponseHeader("etag")) && (x.etag[o] = w)),
                    204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = _.state,
                    h = _.data,
                    u = !(p = _.error))) : (p = C,
                    !e && C || (C = "error",
                    e < 0 && (e = 0))),
                    k.status = e,
                    k.statusText = (t || C) + "",
                    u ? m.resolveWith(v, [h, C, k]) : m.rejectWith(v, [k, C, p]),
                    k.statusCode(b),
                    b = void 0,
                    d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [k, f, u ? h : p]),
                    y.fireWith(v, [k, C]),
                    d && (g.trigger("ajaxComplete", [k, f]),
                    --x.active || x.event.trigger("ajaxStop")))
                }
                return k
            },
            getJSON: function(e, t, n) {
                return x.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return x.get(e, void 0, t, "script")
            }
        }),
        x.each(["get", "post"], function(e, t) {
            x[t] = function(e, n, i, o) {
                return y(n) && (o = o || i,
                i = n,
                n = void 0),
                x.ajax(x.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                }, x.isPlainObject(e) && e))
            }
        }),
        x._evalUrl = function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        x.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])),
                t = x(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(e) {
                return y(e) ? this.each(function(t) {
                    x(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = x(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = y(e);
                return this.each(function(n) {
                    x(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    x(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        x.expr.pseudos.hidden = function(e) {
            return !x.expr.pseudos.visible(e)
        }
        ,
        x.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        x.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Ft = {
            0: 200,
            1223: 204
        }
          , Wt = x.ajaxSettings.xhr();
        m.cors = !!Wt && "withCredentials"in Wt,
        m.ajax = Wt = !!Wt,
        x.ajaxTransport(function(e) {
            var t, i;
            if (m.cors || Wt && !e.crossDomain)
                return {
                    send: function(o, a) {
                        var r, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (r in e.xhrFields)
                                s[r] = e.xhrFields[r];
                        for (r in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                        e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                        o)
                            s.setRequestHeader(r, o[r]);
                        t = function(e) {
                            return function() {
                                t && (t = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                                "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }
                        ,
                        s.onload = t(),
                        i = s.onerror = s.ontimeout = t("error"),
                        void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                            4 === s.readyState && n.setTimeout(function() {
                                t && i()
                            })
                        }
                        ,
                        t = t("abort");
                        try {
                            s.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }),
        x.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        x.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return x.globalEval(e),
                    e
                }
            }
        }),
        x.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        x.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain)
                return {
                    send: function(i, o) {
                        t = x("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && o("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        r.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
        });
        var qt = []
          , zt = /(=)\?(?=&|$)|\?\?/;
        x.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = qt.pop() || x.expando + "_" + wt++;
                return this[e] = !0,
                e
            }
        }),
        x.ajaxPrefilter("json jsonp", function(e, t, i) {
            var o, a, r, s = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                s ? e[s] = e[s].replace(zt, "$1" + o) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                e.converters["script json"] = function() {
                    return r || x.error(o + " was not called"),
                    r[0]
                }
                ,
                e.dataTypes[0] = "json",
                a = n[o],
                n[o] = function() {
                    r = arguments
                }
                ,
                i.always(function() {
                    void 0 === a ? x(n).removeProp(o) : n[o] = a,
                    e[o] && (e.jsonpCallback = t.jsonpCallback,
                    qt.push(o)),
                    r && y(a) && a(r[0]),
                    r = a = void 0
                }),
                "script"
        }),
        m.createHTMLDocument = function() {
            var e = r.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
            2 === e.childNodes.length
        }(),
        x.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (m.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
            t.head.appendChild(i)) : t = r),
            o = O.exec(e),
            a = !n && [],
            o ? [t.createElement(o[1])] : (o = be([e], t, a),
            a && a.length && x(a).remove(),
            x.merge([], o.childNodes)));
            var i, o, a
        }
        ,
        x.fn.load = function(e, t, n) {
            var i, o, a, r = this, s = e.indexOf(" ");
            return s > -1 && (i = ft(e.slice(s)),
            e = e.slice(0, s)),
            y(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (o = "POST"),
            r.length > 0 && x.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                a = arguments,
                r.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                r.each(function() {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            x.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        x.expr.pseudos.animated = function(e) {
            return x.grep(x.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        x.offset = {
            setOffset: function(e, t, n) {
                var i, o, a, r, s, l, u = x.css(e, "position"), c = x(e), d = {};
                "static" === u && (e.style.position = "relative"),
                s = c.offset(),
                a = x.css(e, "top"),
                l = x.css(e, "left"),
                ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1 ? (r = (i = c.position()).top,
                o = i.left) : (r = parseFloat(a) || 0,
                o = parseFloat(l) || 0),
                y(t) && (t = t.call(e, n, x.extend({}, s))),
                null != t.top && (d.top = t.top - s.top + r),
                null != t.left && (d.left = t.left - s.left + o),
                "using"in t ? t.using.call(e, d) : c.css(d)
            }
        },
        x.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        x.offset.setOffset(this, e, t)
                    });
                var t, n, i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(),
                n = i.ownerDocument.defaultView,
                {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0], o = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === x.css(i, "position"))
                        t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === x.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0),
                        o.left += x.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - x.css(i, "marginTop", !0),
                        left: t.left - o.left - x.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === x.css(e, "position"); )
                        e = e.offsetParent;
                    return e || _e
                })
            }
        }),
        x.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            x.fn[e] = function(i) {
                return V(this, function(e, i, o) {
                    var a;
                    if (b(e) ? a = e : 9 === e.nodeType && (a = e.defaultView),
                    void 0 === o)
                        return a ? a[t] : e[i];
                    a ? a.scrollTo(n ? a.pageXOffset : o, n ? o : a.pageYOffset) : e[i] = o
                }, e, i, arguments.length)
            }
        }),
        x.each(["top", "left"], function(e, t) {
            x.cssHooks[t] = qe(m.pixelPosition, function(e, n) {
                if (n)
                    return n = We(e, t),
                    He.test(n) ? x(e).position()[t] + "px" : n
            })
        }),
        x.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            x.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                x.fn[i] = function(o, a) {
                    var r = arguments.length && (n || "boolean" != typeof o)
                      , s = n || (!0 === o || !0 === a ? "margin" : "border");
                    return V(this, function(t, n, o) {
                        var a;
                        return b(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement,
                        Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === o ? x.css(t, n, s) : x.style(t, n, o, s)
                    }, t, r ? o : void 0, r)
                }
            })
        }),
        x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            x.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        x.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        x.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        x.proxy = function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            y(e))
                return i = l.call(arguments, 2),
                (o = function() {
                    return e.apply(t || this, i.concat(l.call(arguments)))
                }
                ).guid = e.guid = e.guid || x.guid++,
                o
        }
        ,
        x.holdReady = function(e) {
            e ? x.readyWait++ : x.ready(!0)
        }
        ,
        x.isArray = Array.isArray,
        x.parseJSON = JSON.parse,
        x.nodeName = L,
        x.isFunction = y,
        x.isWindow = b,
        x.camelCase = Q,
        x.type = C,
        x.now = Date.now,
        x.isNumeric = function(e) {
            var t = x.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        void 0 === (i = function() {
            return x
        }
        .apply(t, [])) || (e.exports = i);
        var Vt = n.jQuery
          , Xt = n.$;
        return x.noConflict = function(e) {
            return n.$ === x && (n.$ = Xt),
            e && n.jQuery === x && (n.jQuery = Vt),
            x
        }
        ,
        o || (n.jQuery = n.$ = x),
        x
    })
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "i", function() {
        return s
    }),
    n.d(t, "a", function() {
        return l
    }),
    n.d(t, "o", function() {
        return u
    }),
    n.d(t, "b", function() {
        return c
    }),
    n.d(t, "g", function() {
        return d
    }),
    n.d(t, "f", function() {
        return h
    }),
    n.d(t, "h", function() {
        return p
    }),
    n.d(t, "k", function() {
        return f
    }),
    n.d(t, "m", function() {
        return v
    }),
    n.d(t, "l", function() {
        return g
    }),
    n.d(t, "e", function() {
        return m
    }),
    n.d(t, "n", function() {
        return y
    }),
    n.d(t, "j", function() {
        return b
    }),
    n.d(t, "c", function() {
        return _
    }),
    n.d(t, "d", function() {
        return w
    });
    n(8);
    function i(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = []
              , i = !0
              , o = !1
              , a = void 0;
            try {
                for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value),
                !t || n.length !== t); i = !0)
                    ;
            } catch (e) {
                o = !0,
                a = e
            } finally {
                try {
                    i || null == s.return || s.return()
                } finally {
                    if (o)
                        throw a
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var o = "/dashboard";
    function a(e) {
        if (e) {
            var t = e.join(",");
            return "?fields=".concat(t)
        }
        return ""
    }
    function r(e, t, n) {
        fetch(e, t).then(function(e) {
            return new Promise(function(t) {
                if (e.ok)
                    e.json().then(function(e) {
                        t([null, e])
                    });
                else {
                    var n = e.headers && e.headers.get("content-type");
                    n && -1 !== n.indexOf("application/json") ? e.json().then(function(n) {
                        t([{
                            status: e.status,
                            statusText: e.statusText
                        }, n])
                    }) : e.text().then(function(n) {
                        t([{
                            status: e.status,
                            statusText: e.statusText
                        }, n])
                    })
                }
            }
            )
        }).then(function(e) {
            var t = i(e, 2)
              , o = t[0]
              , a = t[1];
            n(o, a)
        }).catch(function(e) {
            n({
                status: 500,
                message: e.message
            }, null)
        })
    }
    function s(e, t) {
        var n = a(e);
        fetch("https://agromonitoring.com".concat(o, "/api/polygons").concat(n)).then(function(e) {
            return e.json()
        }).then(function(e) {
            t(null, e)
        }).catch(function(e) {
            t(e, null)
        })
    }
    function l(e, t, n, i) {
        var s = a(n);
        r("https://agromonitoring.com".concat(o, "/api/polygons").concat(s), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e,
                geo_json: t
            })
        }, i)
    }
    function u(e, t, n, i) {
        var s = a(n);
        r("https://agromonitoring.com".concat(o, "/api/polygons/").concat(t).concat(s), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: e
            })
        }, i)
    }
    function c(e, t) {
        fetch("https://agromonitoring.com".concat(o, "/api/polygons/").concat(e), {
            method: "DELETE"
        }).then(function(e) {
            t(null)
        }).catch(function(e) {
            t(e)
        })
    }
    function d(e, t) {
        r("https://agromonitoring.com".concat(o, "/api/meta?polyid=").concat(e), {}, function(e, n) {
            t(e, n && n.data)
        })
    }
    function h(e, t, n, i) {
        r("https://agromonitoring.com".concat(o, "/api/ndvi/one?src=").concat(e, "&date=").concat(t, "&polyid=").concat(n), {}, i)
    }
    function p(e, t, n, i, a) {
        var s = "https://agromonitoring.com".concat(o, "/api/ndvi/all?start=").concat(e, "&end=").concat(t, "&polyid=").concat(n)
          , l = i && i.join(",")
          , u = l ? "&fields=".concat(l) : "";
        r(u ? s + u : s, {}, a)
    }
    function f(e, t, n) {
        Promise.all([fetch("https://agromonitoring.com".concat(o, "/api/weather/current?lat=").concat(e, "&lon=").concat(t)), fetch("".concat(o, "/api/weather/uvi?lat=").concat(e, "&lon=").concat(t))]).then(function(e) {
            var t = i(e, 2)
              , n = t[0]
              , o = t[1];
            return new Promise(function(e) {
                if (n.ok)
                    if (o.ok)
                        Promise.all([n.json(), o.json()]).then(function(t) {
                            e([null, t])
                        });
                    else {
                        var t = o
                          , i = t.headers && t.headers.get("content-type");
                        i && -1 !== i.indexOf("application/json") ? t.json().then(function(n) {
                            e([{
                                status: t.status,
                                statusText: t.statusText
                            }, n])
                        }) : t.text().then(function(n) {
                            e([{
                                status: t.status,
                                statusText: t.statusText
                            }, n])
                        })
                    }
                else {
                    var a = n
                      , r = a.headers && a.headers.get("content-type");
                    r && -1 !== r.indexOf("application/json") ? a.json().then(function(t) {
                        e([{
                            status: a.status,
                            statusText: a.statusText
                        }, t])
                    }) : a.text().then(function(t) {
                        e([{
                            status: a.status,
                            statusText: a.statusText
                        }, t])
                    })
                }
            }
            )
        }).then(function(e) {
            var t = i(e, 2)
              , o = t[0]
              , a = t[1];
            n(o, a)
        }).catch(function(e) {
            n({
                status: 500,
                message: e.message
            }, null)
        })
    }
    function v(e, t, n) {
        r("https://agromonitoring.com".concat(o, "/api/weather/forecast/hourly?lat=").concat(e, "&lon=").concat(t), {}, n)
    }
    function g(e, t, n) {
        r("https://agromonitoring.com".concat(o, "/api/weather/forecast/16?lat=").concat(e, "&lon=").concat(t), {}, n)
    }
    function m(e, t, n, i, a, s) {
        r("https://agromonitoring.com".concat(o, "/api/weather/accumulated?lat=").concat(n, "&lon=").concat(i, "&start=").concat(e, "&end=").concat(t, "&threshold=").concat(Number(a) + 273.15), {}, s)
    }
    function y(e, t, n, i, a) {
        r("https://agromonitoring.com".concat(o, "/api/weather/history?lat=").concat(n, "&lon=").concat(i, "&start=").concat(e, "&end=").concat(t), {}, a)
    }
    function b(e, t, n, i, a) {
        r("https://agromonitoring.com".concat(o, "/api/weather/soil_history?lat=").concat(n, "&lon=").concat(i, "&start=").concat(e, "&end=").concat(t), {}, a)
    }
    function _(e, t, n) {
        r("https://nominatim.openstreetmap.org/search?q=".concat(e, "&format=json&limit=1&viewbox=").concat(t), {}, n)
    }
    function w(e) {
        //r("http://wp.agromonitoring.com/dashboard/api/".concat(o, "/lauth/service"), {}, e)
    }
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        var t = "0" + e;
        return t.substr(t.length - 2)
    }
    function o(e) {
        if (null == e)
            return null;
        var t = new Date(1e3 * e);
        return "".concat(t.getFullYear(), "-").concat(i(t.getMonth() + 1), "-").concat(i(t.getDate()))
    }
    function a(e, t) {
        return 0 != (t & e)
    }
    n.d(t, "a", function() {
        return o
    }),
    n.d(t, "b", function() {
        return a
    })
}
, , function(e, t, n) {
    (function(n) {
        var i;
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        /*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
        var a = function e(t, n, i) {
            null === t && (t = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === o) {
                var a = Object.getPrototypeOf(t);
                return null === a ? void 0 : e(a, n, i)
            }
            if ("value"in o)
                return o.value;
            var r = o.get;
            return void 0 !== r ? r.call(i) : void 0
        }
          , r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n),
                i && e(t, i),
                t
            }
        }();
        function s(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== o(t) && "function" != typeof t ? e : t
        }
        function l(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + o(t));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function u(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        /*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
        /*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
        !function(e) {
            window.cash = function() {
                var e, t = document, n = window, i = Array.prototype, a = i.slice, r = i.filter, s = i.push, l = function() {}, u = function(e) {
                    return o(e) === o(l) && e.call
                }, c = function(e) {
                    return o(e) === o("")
                }, d = /^#[\w-]*$/, h = /^\.[\w-]*$/, p = /<.+>/, f = /^\w+$/;
                function v(e, n) {
                    n = n || t;
                    var i = h.test(e) ? n.getElementsByClassName(e.slice(1)) : f.test(e) ? n.getElementsByTagName(e) : n.querySelectorAll(e);
                    return i
                }
                function g(n) {
                    if (!e) {
                        var i = (e = t.implementation.createHTMLDocument(null)).createElement("base");
                        i.href = t.location.href,
                        e.head.appendChild(i)
                    }
                    return e.body.innerHTML = n,
                    e.body.childNodes
                }
                function m(e) {
                    "loading" !== t.readyState ? e() : t.addEventListener("DOMContentLoaded", e)
                }
                function y(e, i) {
                    if (!e)
                        return this;
                    if (e.cash && e !== n)
                        return e;
                    var o, a = e, r = 0;
                    if (c(e))
                        a = d.test(e) ? t.getElementById(e.slice(1)) : p.test(e) ? g(e) : v(e, i);
                    else if (u(e))
                        return m(e),
                        this;
                    if (!a)
                        return this;
                    if (a.nodeType || a === n)
                        this[0] = a,
                        this.length = 1;
                    else
                        for (o = this.length = a.length; r < o; r++)
                            this[r] = a[r];
                    return this
                }
                function b(e, t) {
                    return new y(e,t)
                }
                var _ = b.fn = b.prototype = y.prototype = {
                    cash: !0,
                    length: 0,
                    push: s,
                    splice: i.splice,
                    map: i.map,
                    init: y
                };
                function w(e, t) {
                    for (var n = e.length, i = 0; i < n && !1 !== t.call(e[i], e[i], i, e); i++)
                        ;
                }
                function C(e, t) {
                    var n = e && (e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector);
                    return !!n && n.call(e, t)
                }
                function x(e) {
                    return c(e) ? C : e.cash ? function(t) {
                        return e.is(t)
                    }
                    : function(e, t) {
                        return e === t
                    }
                }
                function k(e) {
                    return b(a.call(e).filter(function(e, t, n) {
                        return n.indexOf(e) === t
                    }))
                }
                Object.defineProperty(_, "constructor", {
                    value: b
                }),
                b.parseHTML = g,
                b.noop = l,
                b.isFunction = u,
                b.isString = c,
                b.extend = _.extend = function(e) {
                    e = e || {};
                    var t = a.call(arguments)
                      , n = t.length
                      , i = 1;
                    for (1 === t.length && (e = this,
                    i = 0); i < n; i++)
                        if (t[i])
                            for (var o in t[i])
                                t[i].hasOwnProperty(o) && (e[o] = t[i][o]);
                    return e
                }
                ,
                b.extend({
                    merge: function(e, t) {
                        for (var n = +t.length, i = e.length, o = 0; o < n; i++,
                        o++)
                            e[i] = t[o];
                        return e.length = i,
                        e
                    },
                    each: w,
                    matches: C,
                    unique: k,
                    isArray: Array.isArray,
                    isNumeric: function(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }
                });
                var T = b.uid = "_cash" + Date.now();
                function D(e) {
                    return e[T] = e[T] || {}
                }
                function S(e, t, n) {
                    return D(e)[t] = n
                }
                function E(e, t) {
                    var n = D(e);
                    return void 0 === n[t] && (n[t] = e.dataset ? e.dataset[t] : b(e).attr("data-" + t)),
                    n[t]
                }
                _.extend({
                    data: function(e, t) {
                        if (c(e))
                            return void 0 === t ? E(this[0], e) : this.each(function(n) {
                                return S(n, e, t)
                            });
                        for (var n in e)
                            this.data(n, e[n]);
                        return this
                    },
                    removeData: function(e) {
                        return this.each(function(t) {
                            return function(e, t) {
                                var n = D(e);
                                n ? delete n[t] : e.dataset ? delete e.dataset[t] : b(e).removeAttr("data-" + name)
                            }(t, e)
                        })
                    }
                });
                var M = /\S+/g;
                function L(e) {
                    return c(e) && e.match(M)
                }
                function O(e, t) {
                    return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)","gi").test(e.className)
                }
                function A(e, t, n) {
                    e.classList ? e.classList.add(t) : n.indexOf(" " + t + " ") && (e.className += " " + t)
                }
                function I(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.replace(t, "")
                }
                _.extend({
                    addClass: function(e) {
                        var t = L(e);
                        return t ? this.each(function(e) {
                            var n = " " + e.className + " ";
                            w(t, function(t) {
                                A(e, t, n)
                            })
                        }) : this
                    },
                    attr: function(e, t) {
                        if (e) {
                            if (c(e))
                                return void 0 === t ? this[0] ? this[0].getAttribute ? this[0].getAttribute(e) : this[0][e] : void 0 : this.each(function(n) {
                                    n.setAttribute ? n.setAttribute(e, t) : n[e] = t
                                });
                            for (var n in e)
                                this.attr(n, e[n]);
                            return this
                        }
                    },
                    hasClass: function(e) {
                        var t = !1
                          , n = L(e);
                        return n && n.length && this.each(function(e) {
                            return !(t = O(e, n[0]))
                        }),
                        t
                    },
                    prop: function(e, t) {
                        if (c(e))
                            return void 0 === t ? this[0][e] : this.each(function(n) {
                                n[e] = t
                            });
                        for (var n in e)
                            this.prop(n, e[n]);
                        return this
                    },
                    removeAttr: function(e) {
                        return this.each(function(t) {
                            t.removeAttribute ? t.removeAttribute(e) : delete t[e]
                        })
                    },
                    removeClass: function(e) {
                        if (!arguments.length)
                            return this.attr("class", "");
                        var t = L(e);
                        return t ? this.each(function(e) {
                            w(t, function(t) {
                                I(e, t)
                            })
                        }) : this
                    },
                    removeProp: function(e) {
                        return this.each(function(t) {
                            delete t[e]
                        })
                    },
                    toggleClass: function(e, t) {
                        if (void 0 !== t)
                            return this[t ? "addClass" : "removeClass"](e);
                        var n = L(e);
                        return n ? this.each(function(e) {
                            var t = " " + e.className + " ";
                            w(n, function(n) {
                                O(e, n) ? I(e, n) : A(e, n, t)
                            })
                        }) : this
                    }
                }),
                _.extend({
                    add: function(e, t) {
                        return k(b.merge(this, b(e, t)))
                    },
                    each: function(e) {
                        return w(this, e),
                        this
                    },
                    eq: function(e) {
                        return b(this.get(e))
                    },
                    filter: function(e) {
                        if (!e)
                            return this;
                        var t = u(e) ? e : x(e);
                        return b(r.call(this, function(n) {
                            return t(n, e)
                        }))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    get: function(e) {
                        return void 0 === e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    index: function(e) {
                        var t = e ? b(e)[0] : this[0]
                          , n = e ? this : b(t).parent().children();
                        return a.call(n).indexOf(t)
                    },
                    last: function() {
                        return this.eq(-1)
                    }
                });
                var B = function() {
                    var e = /(?:^\w|[A-Z]|\b\w)/g
                      , t = /[\s-_]+/g;
                    return function(n) {
                        return n.replace(e, function(e, t) {
                            return e[0 === t ? "toLowerCase" : "toUpperCase"]()
                        }).replace(t, "")
                    }
                }()
                  , R = function() {
                    var e = {}
                      , t = document
                      , n = t.createElement("div")
                      , i = n.style;
                    return function(t) {
                        if (t = B(t),
                        e[t])
                            return e[t];
                        var n = t.charAt(0).toUpperCase() + t.slice(1)
                          , o = (t + " " + ["webkit", "moz", "ms", "o"].join(n + " ") + n).split(" ");
                        return w(o, function(n) {
                            if (n in i)
                                return e[n] = t = e[t] = n,
                                !1
                        }),
                        e[t]
                    }
                }();
                function $(e, t) {
                    return parseInt(n.getComputedStyle(e[0], null)[t], 10) || 0
                }
                function P(e, t, n) {
                    var i, o = E(e, "_cashEvents"), a = o && o[t];
                    a && (n ? (e.removeEventListener(t, n),
                    (i = a.indexOf(n)) >= 0 && a.splice(i, 1)) : (w(a, function(n) {
                        e.removeEventListener(t, n)
                    }),
                    a = []))
                }
                function j(e, t) {
                    return "&" + encodeURIComponent(e) + "=" + encodeURIComponent(t).replace(/%20/g, "+")
                }
                function H(e) {
                    var t = e.type;
                    if (!t)
                        return null;
                    switch (t.toLowerCase()) {
                    case "select-one":
                        return function(e) {
                            var t = e.selectedIndex;
                            return t >= 0 ? e.options[t].value : null
                        }(e);
                    case "select-multiple":
                        return function(e) {
                            var t = [];
                            return w(e.options, function(e) {
                                e.selected && t.push(e.value)
                            }),
                            t.length ? t : null
                        }(e);
                    case "radio":
                    case "checkbox":
                        return e.checked ? e.value : null;
                    default:
                        return e.value ? e.value : null
                    }
                }
                function N(e, t, n) {
                    var i = c(t);
                    i || !t.length ? w(e, i ? function(e) {
                        return e.insertAdjacentHTML(n ? "afterbegin" : "beforeend", t)
                    }
                    : function(e, i) {
                        return function(e, t, n) {
                            if (n) {
                                var i = e.childNodes[0];
                                e.insertBefore(t, i)
                            } else
                                e.appendChild(t)
                        }(e, 0 === i ? t : t.cloneNode(!0), n)
                    }
                    ) : w(t, function(t) {
                        return N(e, t, n)
                    })
                }
                b.prefixedProp = R,
                b.camelCase = B,
                _.extend({
                    css: function(e, t) {
                        if (c(e))
                            return e = R(e),
                            arguments.length > 1 ? this.each(function(n) {
                                return n.style[e] = t
                            }) : n.getComputedStyle(this[0])[e];
                        for (var i in e)
                            this.css(i, e[i]);
                        return this
                    }
                }),
                w(["Width", "Height"], function(e) {
                    var t = e.toLowerCase();
                    _[t] = function() {
                        return this[0].getBoundingClientRect()[t]
                    }
                    ,
                    _["inner" + e] = function() {
                        return this[0]["client" + e]
                    }
                    ,
                    _["outer" + e] = function(t) {
                        return this[0]["offset" + e] + (t ? $(this, "margin" + ("Width" === e ? "Left" : "Top")) + $(this, "margin" + ("Width" === e ? "Right" : "Bottom")) : 0)
                    }
                }),
                _.extend({
                    off: function(e, t) {
                        return this.each(function(n) {
                            return P(n, e, t)
                        })
                    },
                    on: function(e, t, n, i) {
                        var o;
                        if (!c(e)) {
                            for (var a in e)
                                this.on(a, t, e[a]);
                            return this
                        }
                        return u(t) && (n = t,
                        t = null),
                        "ready" === e ? (m(n),
                        this) : (t && (o = n,
                        n = function(e) {
                            for (var n = e.target; !C(n, t); ) {
                                if (n === this || null === n)
                                    return n = !1;
                                n = n.parentNode
                            }
                            n && o.call(n, e)
                        }
                        ),
                        this.each(function(t) {
                            var o = n;
                            i && (o = function() {
                                n.apply(this, arguments),
                                P(t, e, o)
                            }
                            ),
                            function(e, t, n) {
                                var i = E(e, "_cashEvents") || S(e, "_cashEvents", {});
                                i[t] = i[t] || [],
                                i[t].push(n),
                                e.addEventListener(t, n)
                            }(t, e, o)
                        }))
                    },
                    one: function(e, t, n) {
                        return this.on(e, t, n, !0)
                    },
                    ready: m,
                    trigger: function(e, t) {
                        if (document.createEvent) {
                            var n = document.createEvent("HTMLEvents");
                            return n.initEvent(e, !0, !1),
                            n = this.extend(n, t),
                            this.each(function(e) {
                                return e.dispatchEvent(n)
                            })
                        }
                    }
                }),
                _.extend({
                    serialize: function() {
                        var e = "";
                        return w(this[0].elements || this, function(t) {
                            if (!t.disabled && "FIELDSET" !== t.tagName) {
                                var n = t.name;
                                switch (t.type.toLowerCase()) {
                                case "file":
                                case "reset":
                                case "submit":
                                case "button":
                                    break;
                                case "select-multiple":
                                    var i = H(t);
                                    null !== i && w(i, function(t) {
                                        e += j(n, t)
                                    });
                                    break;
                                default:
                                    var o = H(t);
                                    null !== o && (e += j(n, o))
                                }
                            }
                        }),
                        e.substr(1)
                    },
                    val: function(e) {
                        return void 0 === e ? H(this[0]) : this.each(function(t) {
                            return t.value = e
                        })
                    }
                }),
                _.extend({
                    after: function(e) {
                        return b(e).insertAfter(this),
                        this
                    },
                    append: function(e) {
                        return N(this, e),
                        this
                    },
                    appendTo: function(e) {
                        return N(b(e), this),
                        this
                    },
                    before: function(e) {
                        return b(e).insertBefore(this),
                        this
                    },
                    clone: function() {
                        return b(this.map(function(e) {
                            return e.cloneNode(!0)
                        }))
                    },
                    empty: function() {
                        return this.html(""),
                        this
                    },
                    html: function(e) {
                        if (void 0 === e)
                            return this[0].innerHTML;
                        var t = e.nodeType ? e[0].outerHTML : e;
                        return this.each(function(e) {
                            return e.innerHTML = t
                        })
                    },
                    insertAfter: function(e) {
                        var t = this;
                        return b(e).each(function(e, n) {
                            var i = e.parentNode
                              , o = e.nextSibling;
                            t.each(function(e) {
                                i.insertBefore(0 === n ? e : e.cloneNode(!0), o)
                            })
                        }),
                        this
                    },
                    insertBefore: function(e) {
                        var t = this;
                        return b(e).each(function(e, n) {
                            var i = e.parentNode;
                            t.each(function(t) {
                                i.insertBefore(0 === n ? t : t.cloneNode(!0), e)
                            })
                        }),
                        this
                    },
                    prepend: function(e) {
                        return N(this, e, !0),
                        this
                    },
                    prependTo: function(e) {
                        return N(b(e), this, !0),
                        this
                    },
                    remove: function() {
                        return this.each(function(e) {
                            if (e.parentNode)
                                return e.parentNode.removeChild(e)
                        })
                    },
                    text: function(e) {
                        return void 0 === e ? this[0].textContent : this.each(function(t) {
                            return t.textContent = e
                        })
                    }
                });
                var F = t.documentElement;
                return _.extend({
                    position: function() {
                        var e = this[0];
                        return {
                            left: e.offsetLeft,
                            top: e.offsetTop
                        }
                    },
                    offset: function() {
                        var e = this[0].getBoundingClientRect();
                        return {
                            top: e.top + n.pageYOffset - F.clientTop,
                            left: e.left + n.pageXOffset - F.clientLeft
                        }
                    },
                    offsetParent: function() {
                        return b(this[0].offsetParent)
                    }
                }),
                _.extend({
                    children: function(e) {
                        var t = [];
                        return this.each(function(e) {
                            s.apply(t, e.children)
                        }),
                        t = k(t),
                        e ? t.filter(function(t) {
                            return C(t, e)
                        }) : t
                    },
                    closest: function(e) {
                        return !e || this.length < 1 ? b() : this.is(e) ? this.filter(e) : this.parent().closest(e)
                    },
                    is: function(e) {
                        if (!e)
                            return !1;
                        var t = !1
                          , n = x(e);
                        return this.each(function(i) {
                            return !(t = n(i, e))
                        }),
                        t
                    },
                    find: function(e) {
                        if (!e || e.nodeType)
                            return b(e && this.has(e).length ? e : null);
                        var t = [];
                        return this.each(function(n) {
                            s.apply(t, v(e, n))
                        }),
                        k(t)
                    },
                    has: function(e) {
                        var t = c(e) ? function(t) {
                            return 0 !== v(e, t).length
                        }
                        : function(t) {
                            return t.contains(e)
                        }
                        ;
                        return this.filter(t)
                    },
                    next: function() {
                        return b(this[0].nextElementSibling)
                    },
                    not: function(e) {
                        if (!e)
                            return this;
                        var t = x(e);
                        return this.filter(function(n) {
                            return !t(n, e)
                        })
                    },
                    parent: function() {
                        var e = [];
                        return this.each(function(t) {
                            t && t.parentNode && e.push(t.parentNode)
                        }),
                        k(e)
                    },
                    parents: function(e) {
                        var n, i = [];
                        return this.each(function(o) {
                            for (n = o; n && n.parentNode && n !== t.body.parentNode; )
                                n = n.parentNode,
                                (!e || e && C(n, e)) && i.push(n)
                        }),
                        k(i)
                    },
                    prev: function() {
                        return b(this[0].previousElementSibling)
                    },
                    siblings: function(e) {
                        var t = this.parent().children(e)
                          , n = this[0];
                        return t.filter(function(e) {
                            return e !== n
                        })
                    }
                }),
                b
            }()
        }();
        var c = function() {
            function e(t, n, i) {
                u(this, e),
                Element;
                var o = t.getInstance(n);
                o && o.destroy(),
                this.el = n,
                this.$el = cash(n)
            }
            return r(e, null, [{
                key: "init",
                value: function(e, t, n) {
                    var i = null;
                    if (t instanceof Element)
                        i = new e(t,n);
                    else if (t && (t.jquery || t.cash || t instanceof NodeList)) {
                        for (var o = [], a = 0; a < t.length; a++)
                            o.push(new e(t[a],n));
                        i = o
                    }
                    return i
                }
            }]),
            e
        }();
        !function(e) {
            e.Package ? M = {} : e.M = {},
            M.jQueryLoaded = !!e.jQuery
        }(window),
        void 0 === (i = function() {
            return M
        }
        .apply(t, [])) || (e.exports = i),
        M.version = "1.0.0",
        M.keys = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            ARROW_UP: 38,
            ARROW_DOWN: 40
        },
        M.tabPressed = !1,
        M.keyDown = !1;
        document.addEventListener("keydown", function(e) {
            M.keyDown = !0,
            e.which !== M.keys.TAB && e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ARROW_UP || (M.tabPressed = !0)
        }, !0),
        document.addEventListener("keyup", function(e) {
            M.keyDown = !1,
            e.which !== M.keys.TAB && e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ARROW_UP || (M.tabPressed = !1)
        }, !0),
        document.addEventListener("focus", function(e) {
            M.keyDown && document.body.classList.add("keyboard-focused")
        }, !0),
        document.addEventListener("blur", function(e) {
            document.body.classList.remove("keyboard-focused")
        }, !0),
        M.initializeJqueryWrapper = function(e, t, n) {
            jQuery.fn[t] = function(i) {
                if (e.prototype[i]) {
                    var a = Array.prototype.slice.call(arguments, 1);
                    if ("get" === i.slice(0, 3)) {
                        var r = this.first()[0][n];
                        return r[i].apply(r, a)
                    }
                    return this.each(function() {
                        var e = this[n];
                        e[i].apply(e, a)
                    })
                }
                if ("object" === o(i) || !i)
                    return e.init(this, arguments[0]),
                    this;
                jQuery.error("Method " + i + " does not exist on jQuery." + t)
            }
        }
        ,
        M.AutoInit = function(e) {
            var t = e || document.body
              , n = {
                Autocomplete: t.querySelectorAll(".autocomplete:not(.no-autoinit)"),
                Carousel: t.querySelectorAll(".carousel:not(.no-autoinit)"),
                Chips: t.querySelectorAll(".chips:not(.no-autoinit)"),
                Collapsible: t.querySelectorAll(".collapsible:not(.no-autoinit)"),
                Datepicker: t.querySelectorAll(".datepicker:not(.no-autoinit)"),
                Dropdown: t.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),
                Materialbox: t.querySelectorAll(".materialboxed:not(.no-autoinit)"),
                Modal: t.querySelectorAll(".modal:not(.no-autoinit)"),
                Parallax: t.querySelectorAll(".parallax:not(.no-autoinit)"),
                Pushpin: t.querySelectorAll(".pushpin:not(.no-autoinit)"),
                ScrollSpy: t.querySelectorAll(".scrollspy:not(.no-autoinit)"),
                FormSelect: t.querySelectorAll("select:not(.no-autoinit)"),
                Sidenav: t.querySelectorAll(".sidenav:not(.no-autoinit)"),
                Tabs: t.querySelectorAll(".tabs:not(.no-autoinit)"),
                TapTarget: t.querySelectorAll(".tap-target:not(.no-autoinit)"),
                Timepicker: t.querySelectorAll(".timepicker:not(.no-autoinit)"),
                Tooltip: t.querySelectorAll(".tooltipped:not(.no-autoinit)"),
                FloatingActionButton: t.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")
            };
            for (var i in n) {
                M[i].init(n[i])
            }
        }
        ,
        M.objectSelectorString = function(e) {
            return ((e.prop("tagName") || "") + (e.attr("id") || "") + (e.attr("class") || "")).replace(/\s/g, "")
        }
        ,
        M.guid = function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        }(),
        M.escapeHash = function(e) {
            return e.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1")
        }
        ,
        M.elementOrParentIsFixed = function(e) {
            var t = $(e)
              , n = !1;
            return t.add(t.parents()).each(function() {
                if ("fixed" === $(this).css("position"))
                    return n = !0,
                    !1
            }),
            n
        }
        ,
        M.checkWithinContainer = function(e, t, n) {
            var i = {
                top: !1,
                right: !1,
                bottom: !1,
                left: !1
            }
              , o = e.getBoundingClientRect()
              , a = e === document.body ? Math.max(o.bottom, window.innerHeight) : o.bottom
              , r = e.scrollLeft
              , s = e.scrollTop
              , l = t.left - r
              , u = t.top - s;
            return (l < o.left + n || l < n) && (i.left = !0),
            (l + t.width > o.right - n || l + t.width > window.innerWidth - n) && (i.right = !0),
            (u < o.top + n || u < n) && (i.top = !0),
            (u + t.height > a - n || u + t.height > window.innerHeight - n) && (i.bottom = !0),
            i
        }
        ,
        M.checkPossibleAlignments = function(e, t, n, i) {
            var o = {
                top: !0,
                right: !0,
                bottom: !0,
                left: !0,
                spaceOnTop: null,
                spaceOnRight: null,
                spaceOnBottom: null,
                spaceOnLeft: null
            }
              , a = "visible" === getComputedStyle(t).overflow
              , r = t.getBoundingClientRect()
              , s = Math.min(r.height, window.innerHeight)
              , l = Math.min(r.width, window.innerWidth)
              , u = e.getBoundingClientRect()
              , c = t.scrollLeft
              , d = t.scrollTop
              , h = n.left - c
              , p = n.top - d
              , f = n.top + u.height - d;
            return o.spaceOnRight = a ? window.innerWidth - (u.left + n.width) : l - (h + n.width),
            o.spaceOnRight < 0 && (o.left = !1),
            o.spaceOnLeft = a ? u.right - n.width : h - n.width + u.width,
            o.spaceOnLeft < 0 && (o.right = !1),
            o.spaceOnBottom = a ? window.innerHeight - (u.top + n.height + i) : s - (p + n.height + i),
            o.spaceOnBottom < 0 && (o.top = !1),
            o.spaceOnTop = a ? u.bottom - (n.height + i) : f - (n.height - i),
            o.spaceOnTop < 0 && (o.bottom = !1),
            o
        }
        ,
        M.getOverflowParent = function(e) {
            return null == e ? null : e === document.body || "visible" !== getComputedStyle(e).overflow ? e : M.getOverflowParent(e.parentElement)
        }
        ,
        M.getIdFromTrigger = function(e) {
            var t = e.getAttribute("data-target");
            return t || (t = (t = e.getAttribute("href")) ? t.slice(1) : ""),
            t
        }
        ,
        M.getDocumentScrollTop = function() {
            return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        }
        ,
        M.getDocumentScrollLeft = function() {
            return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        }
        ;
        /**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
        var d = Date.now || function() {
            return (new Date).getTime()
        }
        ;
        /**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
        M.throttle = function(e, t, n) {
            var i = void 0
              , o = void 0
              , a = void 0
              , r = null
              , s = 0;
            n || (n = {});
            var l = function() {
                s = !1 === n.leading ? 0 : d(),
                r = null,
                a = e.apply(i, o),
                i = o = null
            };
            return function() {
                var u = d();
                s || !1 !== n.leading || (s = u);
                var c = t - (u - s);
                return i = this,
                o = arguments,
                c <= 0 ? (clearTimeout(r),
                r = null,
                s = u,
                a = e.apply(i, o),
                i = o = null) : r || !1 === n.trailing || (r = setTimeout(l, c)),
                a
            }
        }
        ;
        var h = {
            scope: {}
        };
        h.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
            if (n.get || n.set)
                throw new TypeError("ES3 does not support getters and setters.");
            e != Array.prototype && e != Object.prototype && (e[t] = n.value)
        }
        ,
        h.getGlobal = function(e) {
            return "undefined" != typeof window && window === e ? e : void 0 !== n && null != n ? n : e
        }
        ,
        h.global = h.getGlobal(this),
        h.SYMBOL_PREFIX = "jscomp_symbol_",
        h.initSymbol = function() {
            h.initSymbol = function() {}
            ,
            h.global.Symbol || (h.global.Symbol = h.Symbol)
        }
        ,
        h.symbolCounter_ = 0,
        h.Symbol = function(e) {
            return h.SYMBOL_PREFIX + (e || "") + h.symbolCounter_++
        }
        ,
        h.initSymbolIterator = function() {
            h.initSymbol();
            var e = h.global.Symbol.iterator;
            e || (e = h.global.Symbol.iterator = h.global.Symbol("iterator")),
            "function" != typeof Array.prototype[e] && h.defineProperty(Array.prototype, e, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return h.arrayIterator(this)
                }
            }),
            h.initSymbolIterator = function() {}
        }
        ,
        h.arrayIterator = function(e) {
            var t = 0;
            return h.iteratorPrototype(function() {
                return t < e.length ? {
                    done: !1,
                    value: e[t++]
                } : {
                    done: !0
                }
            })
        }
        ,
        h.iteratorPrototype = function(e) {
            return h.initSymbolIterator(),
            (e = {
                next: e
            })[h.global.Symbol.iterator] = function() {
                return this
            }
            ,
            e
        }
        ,
        h.array = h.array || {},
        h.iteratorFromArray = function(e, t) {
            h.initSymbolIterator(),
            e instanceof String && (e += "");
            var n = 0
              , i = {
                next: function() {
                    if (n < e.length) {
                        var o = n++;
                        return {
                            value: t(o, e[o]),
                            done: !1
                        }
                    }
                    return i.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    }
                    ,
                    i.next()
                }
            };
            return i[Symbol.iterator] = function() {
                return i
            }
            ,
            i
        }
        ,
        h.polyfill = function(e, t, n, i) {
            if (t) {
                for (n = h.global,
                e = e.split("."),
                i = 0; i < e.length - 1; i++) {
                    var o = e[i];
                    o in n || (n[o] = {}),
                    n = n[o]
                }
                (t = t(i = n[e = e[e.length - 1]])) != i && null != t && h.defineProperty(n, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        }
        ,
        h.polyfill("Array.prototype.keys", function(e) {
            return e || function() {
                return h.iteratorFromArray(this, function(e) {
                    return e
                })
            }
        }, "es6-impl", "es3");
        var p = this;
        !function(e) {
            M.anime = function() {
                function e(e) {
                    if (!L.col(e))
                        try {
                            return document.querySelectorAll(e)
                        } catch (e) {}
                }
                function t(e, t) {
                    for (var n = e.length, i = 2 <= arguments.length ? arguments[1] : void 0, o = [], a = 0; a < n; a++)
                        if (a in e) {
                            var r = e[a];
                            t.call(i, r, a, e) && o.push(r)
                        }
                    return o
                }
                function n(e) {
                    return e.reduce(function(e, t) {
                        return e.concat(L.arr(t) ? n(t) : t)
                    }, [])
                }
                function i(t) {
                    return L.arr(t) ? t : (L.str(t) && (t = e(t) || t),
                    t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
                }
                function o(e, t) {
                    return e.some(function(e) {
                        return e === t
                    })
                }
                function a(e) {
                    var t, n = {};
                    for (t in e)
                        n[t] = e[t];
                    return n
                }
                function r(e, t) {
                    var n, i = a(e);
                    for (n in e)
                        i[n] = t.hasOwnProperty(n) ? t[n] : e[n];
                    return i
                }
                function s(e, t) {
                    var n, i = a(e);
                    for (n in t)
                        i[n] = L.und(e[n]) ? t[n] : e[n];
                    return i
                }
                function l(e) {
                    if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e))
                        return e[2]
                }
                function u(e, t) {
                    return L.fnc(e) ? e(t.target, t.id, t.total) : e
                }
                function c(e, t) {
                    if (t in e.style)
                        return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
                }
                function d(e, t) {
                    return L.dom(e) && o(M, t) ? "transform" : L.dom(e) && (e.getAttribute(t) || L.svg(e) && e[t]) ? "attribute" : L.dom(e) && "transform" !== t && c(e, t) ? "css" : null != e[t] ? "object" : void 0
                }
                function h(e, n) {
                    switch (d(e, n)) {
                    case "transform":
                        return function(e, n) {
                            var i = function(e) {
                                if (-1 < e.indexOf("translate") || "perspective" === e)
                                    return "px";
                                if (-1 < e.indexOf("rotate") || -1 < e.indexOf("skew"))
                                    return "deg"
                            }(n)
                              , i = -1 < n.indexOf("scale") ? 1 : 0 + i;
                            if (!(e = e.style.transform))
                                return i;
                            for (var o = [], a = [], r = [], s = /(\w+)\((.+?)\)/g; o = s.exec(e); )
                                a.push(o[1]),
                                r.push(o[2]);
                            return (e = t(r, function(e, t) {
                                return a[t] === n
                            })).length ? e[0] : i
                        }(e, n);
                    case "css":
                        return c(e, n);
                    case "attribute":
                        return e.getAttribute(n)
                    }
                    return e[n] || 0
                }
                function f(e, t) {
                    var n = /^(\*=|\+=|-=)/.exec(e);
                    if (!n)
                        return e;
                    var i = l(e) || 0;
                    switch (t = parseFloat(t),
                    e = parseFloat(e.replace(n[0], "")),
                    n[0][0]) {
                    case "+":
                        return t + e + i;
                    case "-":
                        return t - e + i;
                    case "*":
                        return t * e + i
                    }
                }
                function v(e, t) {
                    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                }
                function g(e) {
                    e = e.points;
                    for (var t, n = 0, i = 0; i < e.numberOfItems; i++) {
                        var o = e.getItem(i);
                        0 < i && (n += v(t, o)),
                        t = o
                    }
                    return n
                }
                function m(e) {
                    if (e.getTotalLength)
                        return e.getTotalLength();
                    switch (e.tagName.toLowerCase()) {
                    case "circle":
                        return 2 * Math.PI * e.getAttribute("r");
                    case "rect":
                        return 2 * e.getAttribute("width") + 2 * e.getAttribute("height");
                    case "line":
                        return v({
                            x: e.getAttribute("x1"),
                            y: e.getAttribute("y1")
                        }, {
                            x: e.getAttribute("x2"),
                            y: e.getAttribute("y2")
                        });
                    case "polyline":
                        return g(e);
                    case "polygon":
                        var t = e.points;
                        return g(e) + v(t.getItem(t.numberOfItems - 1), t.getItem(0))
                    }
                }
                function y(e, t) {
                    function n(n) {
                        return n = void 0 === n ? 0 : n,
                        e.el.getPointAtLength(1 <= t + n ? t + n : 0)
                    }
                    var i = n()
                      , o = n(-1)
                      , a = n(1);
                    switch (e.property) {
                    case "x":
                        return i.x;
                    case "y":
                        return i.y;
                    case "angle":
                        return 180 * Math.atan2(a.y - o.y, a.x - o.x) / Math.PI
                    }
                }
                function b(e, t) {
                    var n, i = /-?\d*\.?\d+/g;
                    if (n = L.pth(e) ? e.totalLength : e,
                    L.col(n))
                        if (L.rgb(n)) {
                            var o = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
                            n = o ? "rgba(" + o[1] + ",1)" : n
                        } else
                            n = L.hex(n) ? function(e) {
                                e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                                    return t + t + n + n + i + i
                                });
                                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                                e = parseInt(t[1], 16);
                                var n = parseInt(t[2], 16)
                                  , t = parseInt(t[3], 16);
                                return "rgba(" + e + "," + n + "," + t + ",1)"
                            }(n) : L.hsl(n) ? function(e) {
                                function t(e, t, n) {
                                    return 0 > n && (n += 1),
                                    1 < n && --n,
                                    n < 1 / 6 ? e + 6 * (t - e) * n : .5 > n ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                                }
                                var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
                                e = parseInt(n[1]) / 360;
                                var i = parseInt(n[2]) / 100
                                  , o = parseInt(n[3]) / 100
                                  , n = n[4] || 1;
                                if (0 == i)
                                    o = i = e = o;
                                else {
                                    var a = .5 > o ? o * (1 + i) : o + i - o * i
                                      , r = 2 * o - a
                                      , o = t(r, a, e + 1 / 3)
                                      , i = t(r, a, e);
                                    e = t(r, a, e - 1 / 3)
                                }
                                return "rgba(" + 255 * o + "," + 255 * i + "," + 255 * e + "," + n + ")"
                            }(n) : void 0;
                    else
                        o = (o = l(n)) ? n.substr(0, n.length - o.length) : n,
                        n = t && !/\s/g.test(n) ? o + t : o;
                    return {
                        original: n += "",
                        numbers: n.match(i) ? n.match(i).map(Number) : [0],
                        strings: L.str(e) || t ? n.split(i) : []
                    }
                }
                function _(e) {
                    return t(e = e ? n(L.arr(e) ? e.map(i) : i(e)) : [], function(e, t, n) {
                        return n.indexOf(e) === t
                    })
                }
                function w(e, t) {
                    var n = a(t);
                    if (L.arr(e)) {
                        var o = e.length;
                        2 !== o || L.obj(e[0]) ? L.fnc(t.duration) || (n.duration = t.duration / o) : e = {
                            value: e
                        }
                    }
                    return i(e).map(function(e, n) {
                        return n = n ? 0 : t.delay,
                        e = L.obj(e) && !L.pth(e) ? e : {
                            value: e
                        },
                        L.und(e.delay) && (e.delay = n),
                        e
                    }).map(function(e) {
                        return s(e, n)
                    })
                }
                function C(e, t) {
                    var n;
                    return e.tweens.map(function(i) {
                        var o = (i = function(e, t) {
                            var n, i = {};
                            for (n in e) {
                                var o = u(e[n], t);
                                L.arr(o) && (1 === (o = o.map(function(e) {
                                    return u(e, t)
                                })).length && (o = o[0])),
                                i[n] = o
                            }
                            return i.duration = parseFloat(i.duration),
                            i.delay = parseFloat(i.delay),
                            i
                        }(i, t)).value
                          , a = h(t.target, e.name)
                          , r = n ? n.to.original : a
                          , r = L.arr(o) ? o[0] : r
                          , s = f(L.arr(o) ? o[1] : o, r)
                          , a = l(s) || l(r) || l(a);
                        return i.from = b(r, a),
                        i.to = b(s, a),
                        i.start = n ? n.end : e.offset,
                        i.end = i.start + i.delay + i.duration,
                        i.easing = function(e) {
                            return L.arr(e) ? O.apply(this, e) : A[e]
                        }(i.easing),
                        i.elasticity = (1e3 - Math.min(Math.max(i.elasticity, 1), 999)) / 1e3,
                        i.isPath = L.pth(o),
                        i.isColor = L.col(i.from.original),
                        i.isColor && (i.round = 1),
                        n = i
                    })
                }
                function x(e, t, n, i) {
                    var o = "delay" === e;
                    return t.length ? (o ? Math.min : Math.max).apply(Math, t.map(function(t) {
                        return t[e]
                    })) : o ? i.delay : n.offset + i.delay + i.duration
                }
                function k(e) {
                    var i, o = r(S, e), a = r(E, e), l = function(e) {
                        var t = _(e);
                        return t.map(function(e, n) {
                            return {
                                target: e,
                                id: n,
                                total: t.length
                            }
                        })
                    }(e.targets), u = [], c = s(o, a);
                    for (i in e)
                        c.hasOwnProperty(i) || "targets" === i || u.push({
                            name: i,
                            offset: c.offset,
                            tweens: w(e[i], a)
                        });
                    return e = function(e, i) {
                        return t(n(e.map(function(e) {
                            return i.map(function(t) {
                                var n = d(e.target, t.name);
                                if (n) {
                                    var i = C(t, e);
                                    t = {
                                        type: n,
                                        property: t.name,
                                        animatable: e,
                                        tweens: i,
                                        duration: i[i.length - 1].end,
                                        delay: i[0].delay
                                    }
                                } else
                                    t = void 0;
                                return t
                            })
                        })), function(e) {
                            return !L.und(e)
                        })
                    }(l, u),
                    s(o, {
                        children: [],
                        animatables: l,
                        animations: e,
                        duration: x("duration", e, o, a),
                        delay: x("delay", e, o, a)
                    })
                }
                function T(e) {
                    function n() {
                        return window.Promise && new Promise(function(e) {
                            return h = e
                        }
                        )
                    }
                    function i(e) {
                        return f.reversed ? f.duration - e : e
                    }
                    function o(e) {
                        for (var n = 0, i = {}, o = f.animations, a = o.length; n < a; ) {
                            var r = o[n]
                              , s = r.animatable
                              , l = r.tweens
                              , u = l.length - 1
                              , d = l[u];
                            u && (d = t(l, function(t) {
                                return e < t.end
                            })[0] || d);
                            for (var l = Math.min(Math.max(e - d.start - d.delay, 0), d.duration) / d.duration, h = isNaN(l) ? 1 : d.easing(l, d.elasticity), l = d.to.strings, p = d.round, u = [], v = void 0, v = d.to.numbers.length, g = 0; g < v; g++) {
                                var m = void 0
                                  , m = d.to.numbers[g]
                                  , b = d.from.numbers[g]
                                  , m = d.isPath ? y(d.value, h * m) : b + h * (m - b);
                                p && (d.isColor && 2 < g || (m = Math.round(m * p) / p)),
                                u.push(m)
                            }
                            if (d = l.length)
                                for (v = l[0],
                                h = 0; h < d; h++)
                                    p = l[h + 1],
                                    g = u[h],
                                    isNaN(g) || (v = p ? v + (g + p) : v + (g + " "));
                            else
                                v = u[0];
                            I[r.type](s.target, r.property, v, i, s.id),
                            r.currentValue = v,
                            n++
                        }
                        if (n = Object.keys(i).length)
                            for (o = 0; o < n; o++)
                                D || (D = c(document.body, "transform") ? "transform" : "-webkit-transform"),
                                f.animatables[o].target.style[D] = i[o].join(" ");
                        f.currentTime = e,
                        f.progress = e / f.duration * 100
                    }
                    function a(e) {
                        f[e] && f[e](f)
                    }
                    function r() {
                        f.remaining && !0 !== f.remaining && f.remaining--
                    }
                    function s(e) {
                        var t = f.duration
                          , s = f.offset
                          , c = s + f.delay
                          , v = f.currentTime
                          , g = f.reversed
                          , m = i(e);
                        if (f.children.length) {
                            var y = f.children
                              , b = y.length;
                            if (m >= f.currentTime)
                                for (var _ = 0; _ < b; _++)
                                    y[_].seek(m);
                            else
                                for (; b--; )
                                    y[b].seek(m)
                        }
                        (m >= c || !t) && (f.began || (f.began = !0,
                        a("begin")),
                        a("run")),
                        m > s && m < t ? o(m) : (m <= s && 0 !== v && (o(0),
                        g && r()),
                        (m >= t && v !== t || !t) && (o(t),
                        g || r())),
                        a("update"),
                        e >= t && (f.remaining ? (u = l,
                        "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(),
                        f.completed || (f.completed = !0,
                        a("complete"),
                        "Promise"in window && (h(),
                        p = n()))),
                        d = 0)
                    }
                    e = void 0 === e ? {} : e;
                    var l, u, d = 0, h = null, p = n(), f = k(e);
                    return f.reset = function() {
                        var e = f.direction
                          , t = f.loop;
                        for (f.currentTime = 0,
                        f.progress = 0,
                        f.paused = !0,
                        f.began = !1,
                        f.completed = !1,
                        f.reversed = "reverse" === e,
                        f.remaining = "alternate" === e && 1 === t ? 2 : t,
                        o(0),
                        e = f.children.length; e--; )
                            f.children[e].reset()
                    }
                    ,
                    f.tick = function(e) {
                        l = e,
                        u || (u = l),
                        s((d + l - u) * T.speed)
                    }
                    ,
                    f.seek = function(e) {
                        s(i(e))
                    }
                    ,
                    f.pause = function() {
                        var e = B.indexOf(f);
                        -1 < e && B.splice(e, 1),
                        f.paused = !0
                    }
                    ,
                    f.play = function() {
                        f.paused && (f.paused = !1,
                        u = 0,
                        d = i(f.currentTime),
                        B.push(f),
                        R || $())
                    }
                    ,
                    f.reverse = function() {
                        f.reversed = !f.reversed,
                        u = 0,
                        d = i(f.currentTime)
                    }
                    ,
                    f.restart = function() {
                        f.pause(),
                        f.reset(),
                        f.play()
                    }
                    ,
                    f.finished = p,
                    f.reset(),
                    f.autoplay && f.play(),
                    f
                }
                var D, S = {
                    update: void 0,
                    begin: void 0,
                    run: void 0,
                    complete: void 0,
                    loop: 1,
                    direction: "normal",
                    autoplay: !0,
                    offset: 0
                }, E = {
                    duration: 1e3,
                    delay: 0,
                    easing: "easeOutElastic",
                    elasticity: 500,
                    round: 0
                }, M = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), L = {
                    arr: function(e) {
                        return Array.isArray(e)
                    },
                    obj: function(e) {
                        return -1 < Object.prototype.toString.call(e).indexOf("Object")
                    },
                    pth: function(e) {
                        return L.obj(e) && e.hasOwnProperty("totalLength")
                    },
                    svg: function(e) {
                        return e instanceof SVGElement
                    },
                    dom: function(e) {
                        return e.nodeType || L.svg(e)
                    },
                    str: function(e) {
                        return "string" == typeof e
                    },
                    fnc: function(e) {
                        return "function" == typeof e
                    },
                    und: function(e) {
                        return void 0 === e
                    },
                    hex: function(e) {
                        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
                    },
                    rgb: function(e) {
                        return /^rgb/.test(e)
                    },
                    hsl: function(e) {
                        return /^hsl/.test(e)
                    },
                    col: function(e) {
                        return L.hex(e) || L.rgb(e) || L.hsl(e)
                    }
                }, O = function() {
                    function e(e, t, n) {
                        return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
                    }
                    return function(t, n, i, o) {
                        if (0 <= t && 1 >= t && 0 <= i && 1 >= i) {
                            var a = new Float32Array(11);
                            if (t !== n || i !== o)
                                for (var r = 0; 11 > r; ++r)
                                    a[r] = e(.1 * r, t, i);
                            return function(r) {
                                if (t === n && i === o)
                                    return r;
                                if (0 === r)
                                    return 0;
                                if (1 === r)
                                    return 1;
                                for (var s = 0, l = 1; 10 !== l && a[l] <= r; ++l)
                                    s += .1;
                                var l = s + (r - a[--l]) / (a[l + 1] - a[l]) * .1
                                  , u = 3 * (1 - 3 * i + 3 * t) * l * l + 2 * (3 * i - 6 * t) * l + 3 * t;
                                if (.001 <= u) {
                                    for (s = 0; 4 > s && 0 !== (u = 3 * (1 - 3 * i + 3 * t) * l * l + 2 * (3 * i - 6 * t) * l + 3 * t); ++s)
                                        var c = e(l, t, i) - r
                                          , l = l - c / u;
                                    r = l
                                } else if (0 === u)
                                    r = l;
                                else {
                                    var l = s
                                      , s = s + .1
                                      , d = 0;
                                    do {
                                        0 < (u = e(c = l + (s - l) / 2, t, i) - r) ? s = c : l = c
                                    } while (1e-7 < Math.abs(u) && 10 > ++d);
                                    r = c
                                }
                                return e(r, n, o)
                            }
                        }
                    }
                }(), A = function() {
                    function e(e, t) {
                        return 0 === e || 1 === e ? e : -Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - t / (2 * Math.PI) * Math.asin(1)) * Math.PI / t)
                    }
                    var t, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), i = {
                        In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], e],
                        Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function(t, n) {
                            return 1 - e(1 - t, n)
                        }
                        ],
                        InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function(t, n) {
                            return .5 > t ? e(2 * t, n) / 2 : 1 - e(-2 * t + 2, n) / 2
                        }
                        ]
                    }, o = {
                        linear: O(.25, .25, .75, .75)
                    }, a = {};
                    for (t in i)
                        a.type = t,
                        i[a.type].forEach(function(e) {
                            return function(t, i) {
                                o["ease" + e.type + n[i]] = L.fnc(t) ? t : O.apply(p, t)
                            }
                        }(a)),
                        a = {
                            type: a.type
                        };
                    return o
                }(), I = {
                    css: function(e, t, n) {
                        return e.style[t] = n
                    },
                    attribute: function(e, t, n) {
                        return e.setAttribute(t, n)
                    },
                    object: function(e, t, n) {
                        return e[t] = n
                    },
                    transform: function(e, t, n, i, o) {
                        i[o] || (i[o] = []),
                        i[o].push(t + "(" + n + ")")
                    }
                }, B = [], R = 0, $ = function() {
                    function e() {
                        R = requestAnimationFrame(t)
                    }
                    function t(t) {
                        var n = B.length;
                        if (n) {
                            for (var i = 0; i < n; )
                                B[i] && B[i].tick(t),
                                i++;
                            e()
                        } else
                            cancelAnimationFrame(R),
                            R = 0
                    }
                    return e
                }();
                return T.version = "2.2.0",
                T.speed = 1,
                T.running = B,
                T.remove = function(e) {
                    e = _(e);
                    for (var t = B.length; t--; )
                        for (var n = B[t], i = n.animations, a = i.length; a--; )
                            o(e, i[a].animatable.target) && (i.splice(a, 1),
                            i.length || n.pause())
                }
                ,
                T.getValue = h,
                T.path = function(t, n) {
                    var i = L.str(t) ? e(t)[0] : t
                      , o = n || 100;
                    return function(e) {
                        return {
                            el: i,
                            property: e,
                            totalLength: m(i) * (o / 100)
                        }
                    }
                }
                ,
                T.setDashoffset = function(e) {
                    var t = m(e);
                    return e.setAttribute("stroke-dasharray", t),
                    t
                }
                ,
                T.bezier = O,
                T.easings = A,
                T.timeline = function(e) {
                    var t = T(e);
                    return t.pause(),
                    t.duration = 0,
                    t.add = function(n) {
                        return t.children.forEach(function(e) {
                            e.began = !0,
                            e.completed = !0
                        }),
                        i(n).forEach(function(n) {
                            var i = s(n, r(E, e || {}));
                            i.targets = i.targets || e.targets,
                            n = t.duration;
                            var o = i.offset;
                            i.autoplay = !1,
                            i.direction = t.direction,
                            i.offset = L.und(o) ? n : f(o, n),
                            t.began = !0,
                            t.completed = !0,
                            t.seek(i.offset),
                            (i = T(i)).began = !0,
                            i.completed = !0,
                            i.duration > n && (t.duration = i.duration),
                            t.children.push(i)
                        }),
                        t.seek(0),
                        t.reset(),
                        t.autoplay && t.restart(),
                        t
                    }
                    ,
                    t
                }
                ,
                T.random = function(e, t) {
                    return Math.floor(Math.random() * (t - e + 1)) + e
                }
                ,
                T
            }()
        }(),
        function(e, t) {
            "use strict";
            var n = {
                accordion: !0,
                onOpenStart: void 0,
                onOpenEnd: void 0,
                onCloseStart: void 0,
                onCloseEnd: void 0,
                inDuration: 300,
                outDuration: 300
            }
              , i = function(i) {
                function o(t, n) {
                    u(this, o);
                    var i = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, t, n));
                    i.el.M_Collapsible = i,
                    i.options = e.extend({}, o.defaults, n),
                    i.$headers = i.$el.children("li").children(".collapsible-header"),
                    i.$headers.attr("tabindex", 0),
                    i._setupEventHandlers();
                    var a = i.$el.children("li.active").children(".collapsible-body");
                    return i.options.accordion ? a.first().css("display", "block") : a.css("display", "block"),
                    i
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_Collapsible = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var e = this;
                        this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this),
                        this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this),
                        this.el.addEventListener("click", this._handleCollapsibleClickBound),
                        this.$headers.each(function(t) {
                            t.addEventListener("keydown", e._handleCollapsibleKeydownBound)
                        })
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var e = this;
                        this.el.removeEventListener("click", this._handleCollapsibleClickBound),
                        this.$headers.each(function(t) {
                            t.removeEventListener("keydown", e._handleCollapsibleKeydownBound)
                        })
                    }
                }, {
                    key: "_handleCollapsibleClick",
                    value: function(t) {
                        var n = e(t.target).closest(".collapsible-header");
                        if (t.target && n.length) {
                            var i = n.closest(".collapsible");
                            if (i[0] === this.el) {
                                var o = n.closest("li")
                                  , a = i.children("li")
                                  , r = o[0].classList.contains("active")
                                  , s = a.index(o);
                                r ? this.close(s) : this.open(s)
                            }
                        }
                    }
                }, {
                    key: "_handleCollapsibleKeydown",
                    value: function(e) {
                        13 === e.keyCode && this._handleCollapsibleClickBound(e)
                    }
                }, {
                    key: "_animateIn",
                    value: function(e) {
                        var n = this
                          , i = this.$el.children("li").eq(e);
                        if (i.length) {
                            var o = i.children(".collapsible-body");
                            t.remove(o[0]),
                            o.css({
                                display: "block",
                                overflow: "hidden",
                                height: 0,
                                paddingTop: "",
                                paddingBottom: ""
                            });
                            var a = o.css("padding-top")
                              , r = o.css("padding-bottom")
                              , s = o[0].scrollHeight;
                            o.css({
                                paddingTop: 0,
                                paddingBottom: 0
                            }),
                            t({
                                targets: o[0],
                                height: s,
                                paddingTop: a,
                                paddingBottom: r,
                                duration: this.options.inDuration,
                                easing: "easeInOutCubic",
                                complete: function(e) {
                                    o.css({
                                        overflow: "",
                                        paddingTop: "",
                                        paddingBottom: "",
                                        height: ""
                                    }),
                                    "function" == typeof n.options.onOpenEnd && n.options.onOpenEnd.call(n, i[0])
                                }
                            })
                        }
                    }
                }, {
                    key: "_animateOut",
                    value: function(e) {
                        var n = this
                          , i = this.$el.children("li").eq(e);
                        if (i.length) {
                            var o = i.children(".collapsible-body");
                            t.remove(o[0]),
                            o.css("overflow", "hidden"),
                            t({
                                targets: o[0],
                                height: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                duration: this.options.outDuration,
                                easing: "easeInOutCubic",
                                complete: function() {
                                    o.css({
                                        height: "",
                                        overflow: "",
                                        padding: "",
                                        display: ""
                                    }),
                                    "function" == typeof n.options.onCloseEnd && n.options.onCloseEnd.call(n, i[0])
                                }
                            })
                        }
                    }
                }, {
                    key: "open",
                    value: function(t) {
                        var n = this
                          , i = this.$el.children("li").eq(t);
                        if (i.length && !i[0].classList.contains("active")) {
                            if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, i[0]),
                            this.options.accordion) {
                                var o = this.$el.children("li");
                                this.$el.children("li.active").each(function(t) {
                                    var i = o.index(e(t));
                                    n.close(i)
                                })
                            }
                            i[0].classList.add("active"),
                            this._animateIn(t)
                        }
                    }
                }, {
                    key: "close",
                    value: function(e) {
                        var t = this.$el.children("li").eq(e);
                        t.length && t[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, t[0]),
                        t[0].classList.remove("active"),
                        this._animateOut(e))
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Collapsible
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            M.Collapsible = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "collapsible", "M_Collapsible")
        }(cash, M.anime),
        function(e, t) {
            "use strict";
            var n = {
                alignment: "left",
                autoFocus: !0,
                constrainWidth: !0,
                container: null,
                coverTrigger: !0,
                closeOnClick: !0,
                hover: !1,
                inDuration: 150,
                outDuration: 250,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null,
                onItemClick: null
            }
              , i = function(i) {
                function o(t, n) {
                    u(this, o);
                    var i = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, t, n));
                    return i.el.M_Dropdown = i,
                    o._dropdowns.push(i),
                    i.id = M.getIdFromTrigger(t),
                    i.dropdownEl = document.getElementById(i.id),
                    i.$dropdownEl = e(i.dropdownEl),
                    i.options = e.extend({}, o.defaults, n),
                    i.isOpen = !1,
                    i.isScrollable = !1,
                    i.isTouchMoving = !1,
                    i.focusedIndex = -1,
                    i.filterQuery = [],
                    i.options.container ? e(i.options.container).append(i.dropdownEl) : i.$el.after(i.dropdownEl),
                    i._makeDropdownFocusable(),
                    i._resetFilterQueryBound = i._resetFilterQuery.bind(i),
                    i._handleDocumentClickBound = i._handleDocumentClick.bind(i),
                    i._handleDocumentTouchmoveBound = i._handleDocumentTouchmove.bind(i),
                    i._handleDropdownClickBound = i._handleDropdownClick.bind(i),
                    i._handleDropdownKeydownBound = i._handleDropdownKeydown.bind(i),
                    i._handleTriggerKeydownBound = i._handleTriggerKeydown.bind(i),
                    i._setupEventHandlers(),
                    i
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this._resetDropdownStyles(),
                        this._removeEventHandlers(),
                        o._dropdowns.splice(o._dropdowns.indexOf(this), 1),
                        this.el.M_Dropdown = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this.el.addEventListener("keydown", this._handleTriggerKeydownBound),
                        this.dropdownEl.addEventListener("click", this._handleDropdownClickBound),
                        this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this),
                        this.el.addEventListener("mouseenter", this._handleMouseEnterBound),
                        this._handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                        this.el.addEventListener("mouseleave", this._handleMouseLeaveBound),
                        this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this),
                        this.el.addEventListener("click", this._handleClickBound))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("keydown", this._handleTriggerKeydownBound),
                        this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound),
                        this.options.hover ? (this.el.removeEventListener("mouseenter", this._handleMouseEnterBound),
                        this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound),
                        this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound)
                    }
                }, {
                    key: "_setupTemporaryEventHandlers",
                    value: function() {
                        document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                        document.body.addEventListener("touchend", this._handleDocumentClickBound),
                        document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound),
                        this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound)
                    }
                }, {
                    key: "_removeTemporaryEventHandlers",
                    value: function() {
                        document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                        document.body.removeEventListener("touchend", this._handleDocumentClickBound),
                        document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound),
                        this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound)
                    }
                }, {
                    key: "_handleClick",
                    value: function(e) {
                        e.preventDefault(),
                        this.open()
                    }
                }, {
                    key: "_handleMouseEnter",
                    value: function() {
                        this.open()
                    }
                }, {
                    key: "_handleMouseLeave",
                    value: function(t) {
                        var n = t.toElement || t.relatedTarget
                          , i = !!e(n).closest(".dropdown-content").length
                          , o = !1
                          , a = e(n).closest(".dropdown-trigger");
                        a.length && a[0].M_Dropdown && a[0].M_Dropdown.isOpen && (o = !0),
                        o || i || this.close()
                    }
                }, {
                    key: "_handleDocumentClick",
                    value: function(t) {
                        var n = this
                          , i = e(t.target);
                        this.options.closeOnClick && i.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function() {
                            n.close()
                        }, 0) : !i.closest(".dropdown-trigger").length && i.closest(".dropdown-content").length || setTimeout(function() {
                            n.close()
                        }, 0),
                        this.isTouchMoving = !1
                    }
                }, {
                    key: "_handleTriggerKeydown",
                    value: function(e) {
                        e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ENTER || this.isOpen || (e.preventDefault(),
                        this.open())
                    }
                }, {
                    key: "_handleDocumentTouchmove",
                    value: function(t) {
                        e(t.target).closest(".dropdown-content").length && (this.isTouchMoving = !0)
                    }
                }, {
                    key: "_handleDropdownClick",
                    value: function(t) {
                        if ("function" == typeof this.options.onItemClick) {
                            var n = e(t.target).closest("li")[0];
                            this.options.onItemClick.call(this, n)
                        }
                    }
                }, {
                    key: "_handleDropdownKeydown",
                    value: function(t) {
                        if (t.which === M.keys.TAB)
                            t.preventDefault(),
                            this.close();
                        else if (t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || !this.isOpen)
                            if (t.which === M.keys.ENTER && this.isOpen) {
                                var n = this.dropdownEl.children[this.focusedIndex]
                                  , i = e(n).find("a, button").first();
                                i.length ? i[0].click() : n && n.click()
                            } else
                                t.which === M.keys.ESC && this.isOpen && (t.preventDefault(),
                                this.close());
                        else {
                            t.preventDefault();
                            var o = t.which === M.keys.ARROW_DOWN ? 1 : -1
                              , a = this.focusedIndex
                              , r = !1;
                            do {
                                if (a += o,
                                this.dropdownEl.children[a] && -1 !== this.dropdownEl.children[a].tabIndex) {
                                    r = !0;
                                    break
                                }
                            } while (a < this.dropdownEl.children.length && a >= 0);
                            r && (this.focusedIndex = a,
                            this._focusFocusedItem())
                        }
                        var s = String.fromCharCode(t.which).toLowerCase();
                        if (s && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
                            this.filterQuery.push(s);
                            var l = this.filterQuery.join("")
                              , u = e(this.dropdownEl).find("li").filter(function(t) {
                                return 0 === e(t).text().toLowerCase().indexOf(l)
                            })[0];
                            u && (this.focusedIndex = e(u).index(),
                            this._focusFocusedItem())
                        }
                        this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3)
                    }
                }, {
                    key: "_resetFilterQuery",
                    value: function() {
                        this.filterQuery = []
                    }
                }, {
                    key: "_resetDropdownStyles",
                    value: function() {
                        this.$dropdownEl.css({
                            display: "",
                            width: "",
                            height: "",
                            left: "",
                            top: "",
                            "transform-origin": "",
                            transform: "",
                            opacity: ""
                        })
                    }
                }, {
                    key: "_makeDropdownFocusable",
                    value: function() {
                        this.dropdownEl.tabIndex = 0,
                        e(this.dropdownEl).children().each(function(e) {
                            e.getAttribute("tabindex") || e.setAttribute("tabindex", 0)
                        })
                    }
                }, {
                    key: "_focusFocusedItem",
                    value: function() {
                        this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus()
                    }
                }, {
                    key: "_getDropdownPosition",
                    value: function() {
                        this.el.offsetParent.getBoundingClientRect();
                        var e = this.el.getBoundingClientRect()
                          , t = this.dropdownEl.getBoundingClientRect()
                          , n = t.height
                          , i = t.width
                          , o = e.left - t.left
                          , a = e.top - t.top
                          , r = {
                            left: o,
                            top: a,
                            height: n,
                            width: i
                        }
                          , s = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode
                          , l = M.checkPossibleAlignments(this.el, s, r, this.options.coverTrigger ? 0 : e.height)
                          , u = "top"
                          , c = this.options.alignment;
                        if (a += this.options.coverTrigger ? 0 : e.height,
                        this.isScrollable = !1,
                        l.top || (l.bottom ? u = "bottom" : (this.isScrollable = !0,
                        l.spaceOnTop > l.spaceOnBottom ? (u = "bottom",
                        n += l.spaceOnTop,
                        a -= l.spaceOnTop) : n += l.spaceOnBottom)),
                        !l[c]) {
                            var d = "left" === c ? "right" : "left";
                            l[d] ? c = d : l.spaceOnLeft > l.spaceOnRight ? (c = "right",
                            i += l.spaceOnLeft,
                            o -= l.spaceOnLeft) : (c = "left",
                            i += l.spaceOnRight)
                        }
                        return "bottom" === u && (a = a - t.height + (this.options.coverTrigger ? e.height : 0)),
                        "right" === c && (o = o - t.width + e.width),
                        {
                            x: o,
                            y: a,
                            verticalAlignment: u,
                            horizontalAlignment: c,
                            height: n,
                            width: i
                        }
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        var e = this;
                        t.remove(this.dropdownEl),
                        t({
                            targets: this.dropdownEl,
                            opacity: {
                                value: [0, 1],
                                easing: "easeOutQuad"
                            },
                            scaleX: [.3, 1],
                            scaleY: [.3, 1],
                            duration: this.options.inDuration,
                            easing: "easeOutQuint",
                            complete: function(t) {
                                e.options.autoFocus && e.dropdownEl.focus(),
                                "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el)
                            }
                        })
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        var e = this;
                        t.remove(this.dropdownEl),
                        t({
                            targets: this.dropdownEl,
                            opacity: {
                                value: 0,
                                easing: "easeOutQuint"
                            },
                            scaleX: .3,
                            scaleY: .3,
                            duration: this.options.outDuration,
                            easing: "easeOutQuint",
                            complete: function(t) {
                                e._resetDropdownStyles(),
                                "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el)
                            }
                        })
                    }
                }, {
                    key: "_placeDropdown",
                    value: function() {
                        var e = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
                        this.dropdownEl.style.width = e + "px";
                        var t = this._getDropdownPosition();
                        this.dropdownEl.style.left = t.x + "px",
                        this.dropdownEl.style.top = t.y + "px",
                        this.dropdownEl.style.height = t.height + "px",
                        this.dropdownEl.style.width = t.width + "px",
                        this.dropdownEl.style.transformOrigin = ("left" === t.horizontalAlignment ? "0" : "100%") + " " + ("top" === t.verticalAlignment ? "0" : "100%")
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.isOpen || (this.isOpen = !0,
                        "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                        this._resetDropdownStyles(),
                        this.dropdownEl.style.display = "block",
                        this._placeDropdown(),
                        this._animateIn(),
                        this._setupTemporaryEventHandlers())
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen && (this.isOpen = !1,
                        this.focusedIndex = -1,
                        "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                        this._animateOut(),
                        this._removeTemporaryEventHandlers(),
                        this.options.autoFocus && this.el.focus())
                    }
                }, {
                    key: "recalculateDimensions",
                    value: function() {
                        this.isOpen && (this.$dropdownEl.css({
                            width: "",
                            height: "",
                            left: "",
                            top: "",
                            "transform-origin": ""
                        }),
                        this._placeDropdown())
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Dropdown
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            i._dropdowns = [],
            M.Dropdown = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "dropdown", "M_Dropdown")
        }(cash, M.anime),
        function(e, t) {
            "use strict";
            var n = {
                opacity: .5,
                inDuration: 250,
                outDuration: 250,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null,
                preventScrolling: !0,
                dismissible: !0,
                startingTop: "4%",
                endingTop: "10%"
            }
              , i = function(i) {
                function o(t, n) {
                    u(this, o);
                    var i = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, t, n));
                    return i.el.M_Modal = i,
                    i.options = e.extend({}, o.defaults, n),
                    i.isOpen = !1,
                    i.id = i.$el.attr("id"),
                    i._openingTrigger = void 0,
                    i.$overlay = e('<div class="modal-overlay"></div>'),
                    i.el.tabIndex = 0,
                    i._nthModalOpened = 0,
                    o._count++,
                    i._setupEventHandlers(),
                    i
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        o._count--,
                        this._removeEventHandlers(),
                        this.el.removeAttribute("style"),
                        this.$overlay.remove(),
                        this.el.M_Modal = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleOverlayClickBound = this._handleOverlayClick.bind(this),
                        this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this),
                        1 === o._count && document.body.addEventListener("click", this._handleTriggerClick),
                        this.$overlay[0].addEventListener("click", this._handleOverlayClickBound),
                        this.el.addEventListener("click", this._handleModalCloseClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        0 === o._count && document.body.removeEventListener("click", this._handleTriggerClick),
                        this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound),
                        this.el.removeEventListener("click", this._handleModalCloseClickBound)
                    }
                }, {
                    key: "_handleTriggerClick",
                    value: function(t) {
                        var n = e(t.target).closest(".modal-trigger");
                        if (n.length) {
                            var i = M.getIdFromTrigger(n[0])
                              , o = document.getElementById(i).M_Modal;
                            o && o.open(n),
                            t.preventDefault()
                        }
                    }
                }, {
                    key: "_handleOverlayClick",
                    value: function() {
                        this.options.dismissible && this.close()
                    }
                }, {
                    key: "_handleModalCloseClick",
                    value: function(t) {
                        e(t.target).closest(".modal-close").length && this.close()
                    }
                }, {
                    key: "_handleKeydown",
                    value: function(e) {
                        27 === e.keyCode && this.options.dismissible && this.close()
                    }
                }, {
                    key: "_handleFocus",
                    value: function(e) {
                        this.el.contains(e.target) || this._nthModalOpened !== o._modalsOpen || this.el.focus()
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        var n = this;
                        e.extend(this.el.style, {
                            display: "block",
                            opacity: 0
                        }),
                        e.extend(this.$overlay[0].style, {
                            display: "block",
                            opacity: 0
                        }),
                        t({
                            targets: this.$overlay[0],
                            opacity: this.options.opacity,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        });
                        var i = {
                            targets: this.el,
                            duration: this.options.inDuration,
                            easing: "easeOutCubic",
                            complete: function() {
                                "function" == typeof n.options.onOpenEnd && n.options.onOpenEnd.call(n, n.el, n._openingTrigger)
                            }
                        };
                        this.el.classList.contains("bottom-sheet") ? (e.extend(i, {
                            bottom: 0,
                            opacity: 1
                        }),
                        t(i)) : (e.extend(i, {
                            top: [this.options.startingTop, this.options.endingTop],
                            opacity: 1,
                            scaleX: [.8, 1],
                            scaleY: [.8, 1]
                        }),
                        t(i))
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        var n = this;
                        t({
                            targets: this.$overlay[0],
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuart"
                        });
                        var i = {
                            targets: this.el,
                            duration: this.options.outDuration,
                            easing: "easeOutCubic",
                            complete: function() {
                                n.el.style.display = "none",
                                n.$overlay.remove(),
                                "function" == typeof n.options.onCloseEnd && n.options.onCloseEnd.call(n, n.el)
                            }
                        };
                        this.el.classList.contains("bottom-sheet") ? (e.extend(i, {
                            bottom: "-100%",
                            opacity: 0
                        }),
                        t(i)) : (e.extend(i, {
                            top: [this.options.endingTop, this.options.startingTop],
                            opacity: 0,
                            scaleX: .8,
                            scaleY: .8
                        }),
                        t(i))
                    }
                }, {
                    key: "open",
                    value: function(e) {
                        if (!this.isOpen)
                            return this.isOpen = !0,
                            o._modalsOpen++,
                            this._nthModalOpened = o._modalsOpen,
                            this.$overlay[0].style.zIndex = 1e3 + 2 * o._modalsOpen,
                            this.el.style.zIndex = 1e3 + 2 * o._modalsOpen + 1,
                            this._openingTrigger = e ? e[0] : void 0,
                            "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger),
                            this.options.preventScrolling && (document.body.style.overflow = "hidden"),
                            this.el.classList.add("open"),
                            this.el.insertAdjacentElement("afterend", this.$overlay[0]),
                            this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this),
                            this._handleFocusBound = this._handleFocus.bind(this),
                            document.addEventListener("keydown", this._handleKeydownBound),
                            document.addEventListener("focus", this._handleFocusBound, !0)),
                            t.remove(this.el),
                            t.remove(this.$overlay[0]),
                            this._animateIn(),
                            this.el.focus(),
                            this
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (this.isOpen)
                            return this.isOpen = !1,
                            o._modalsOpen--,
                            this._nthModalOpened = 0,
                            "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                            this.el.classList.remove("open"),
                            0 === o._modalsOpen && (document.body.style.overflow = ""),
                            this.options.dismissible && (document.removeEventListener("keydown", this._handleKeydownBound),
                            document.removeEventListener("focus", this._handleFocusBound, !0)),
                            t.remove(this.el),
                            t.remove(this.$overlay[0]),
                            this._animateOut(),
                            this
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Modal
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            i._modalsOpen = 0,
            i._count = 0,
            M.Modal = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "modal", "M_Modal")
        }(cash, M.anime),
        function(e, t) {
            "use strict";
            var n = {
                inDuration: 275,
                outDuration: 200,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null
            }
              , i = function(i) {
                function o(t, n) {
                    u(this, o);
                    var i = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, t, n));
                    return i.el.M_Materialbox = i,
                    i.options = e.extend({}, o.defaults, n),
                    i.overlayActive = !1,
                    i.doneAnimating = !0,
                    i.placeholder = e("<div></div>").addClass("material-placeholder"),
                    i.originalWidth = 0,
                    i.originalHeight = 0,
                    i.originInlineStyles = i.$el.attr("style"),
                    i.caption = i.el.getAttribute("data-caption") || "",
                    i.$el.before(i.placeholder),
                    i.placeholder.append(i.$el),
                    i._setupEventHandlers(),
                    i
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_Materialbox = void 0,
                        e(this.placeholder).after(this.el).remove(),
                        this.$el.removeAttr("style")
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this),
                        this.el.addEventListener("click", this._handleMaterialboxClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleMaterialboxClickBound)
                    }
                }, {
                    key: "_handleMaterialboxClick",
                    value: function(e) {
                        !1 === this.doneAnimating || this.overlayActive && this.doneAnimating ? this.close() : this.open()
                    }
                }, {
                    key: "_handleWindowScroll",
                    value: function() {
                        this.overlayActive && this.close()
                    }
                }, {
                    key: "_handleWindowResize",
                    value: function() {
                        this.overlayActive && this.close()
                    }
                }, {
                    key: "_handleWindowEscape",
                    value: function(e) {
                        27 === e.keyCode && this.doneAnimating && this.overlayActive && this.close()
                    }
                }, {
                    key: "_makeAncestorsOverflowVisible",
                    value: function() {
                        this.ancestorsChanged = e();
                        for (var t = this.placeholder[0].parentNode; null !== t && !e(t).is(document); ) {
                            var n = e(t);
                            "visible" !== n.css("overflow") && (n.css("overflow", "visible"),
                            void 0 === this.ancestorsChanged ? this.ancestorsChanged = n : this.ancestorsChanged = this.ancestorsChanged.add(n)),
                            t = t.parentNode
                        }
                    }
                }, {
                    key: "_animateImageIn",
                    value: function() {
                        var e = this
                          , n = {
                            targets: this.el,
                            height: [this.originalHeight, this.newHeight],
                            width: [this.originalWidth, this.newWidth],
                            left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
                            top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                e.doneAnimating = !0,
                                "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el)
                            }
                        };
                        this.maxWidth = this.$el.css("max-width"),
                        this.maxHeight = this.$el.css("max-height"),
                        "none" !== this.maxWidth && (n.maxWidth = this.newWidth),
                        "none" !== this.maxHeight && (n.maxHeight = this.newHeight),
                        t(n)
                    }
                }, {
                    key: "_animateImageOut",
                    value: function() {
                        var e = this
                          , n = {
                            targets: this.el,
                            width: this.originalWidth,
                            height: this.originalHeight,
                            left: 0,
                            top: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                e.placeholder.css({
                                    height: "",
                                    width: "",
                                    position: "",
                                    top: "",
                                    left: ""
                                }),
                                e.attrWidth && e.$el.attr("width", e.attrWidth),
                                e.attrHeight && e.$el.attr("height", e.attrHeight),
                                e.$el.removeAttr("style"),
                                e.originInlineStyles && e.$el.attr("style", e.originInlineStyles),
                                e.$el.removeClass("active"),
                                e.doneAnimating = !0,
                                e.ancestorsChanged.length && e.ancestorsChanged.css("overflow", ""),
                                "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el)
                            }
                        };
                        t(n)
                    }
                }, {
                    key: "_updateVars",
                    value: function() {
                        this.windowWidth = window.innerWidth,
                        this.windowHeight = window.innerHeight,
                        this.caption = this.el.getAttribute("data-caption") || ""
                    }
                }, {
                    key: "open",
                    value: function() {
                        var n = this;
                        this._updateVars(),
                        this.originalWidth = this.el.getBoundingClientRect().width,
                        this.originalHeight = this.el.getBoundingClientRect().height,
                        this.doneAnimating = !1,
                        this.$el.addClass("active"),
                        this.overlayActive = !0,
                        "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                        this.placeholder.css({
                            width: this.placeholder[0].getBoundingClientRect().width + "px",
                            height: this.placeholder[0].getBoundingClientRect().height + "px",
                            position: "relative",
                            top: 0,
                            left: 0
                        }),
                        this._makeAncestorsOverflowVisible(),
                        this.$el.css({
                            position: "absolute",
                            "z-index": 1e3,
                            "will-change": "left, top, width, height"
                        }),
                        this.attrWidth = this.$el.attr("width"),
                        this.attrHeight = this.$el.attr("height"),
                        this.attrWidth && (this.$el.css("width", this.attrWidth + "px"),
                        this.$el.removeAttr("width")),
                        this.attrHeight && (this.$el.css("width", this.attrHeight + "px"),
                        this.$el.removeAttr("height")),
                        this.$overlay = e('<div id="materialbox-overlay"></div>').css({
                            opacity: 0
                        }).one("click", function() {
                            n.doneAnimating && n.close()
                        }),
                        this.$el.before(this.$overlay);
                        var i = this.$overlay[0].getBoundingClientRect();
                        this.$overlay.css({
                            width: this.windowWidth + "px",
                            height: this.windowHeight + "px",
                            left: -1 * i.left + "px",
                            top: -1 * i.top + "px"
                        }),
                        t.remove(this.el),
                        t.remove(this.$overlay[0]),
                        t({
                            targets: this.$overlay[0],
                            opacity: 1,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        }),
                        "" !== this.caption && (this.$photocaption && t.remove(this.$photoCaption[0]),
                        this.$photoCaption = e('<div class="materialbox-caption"></div>'),
                        this.$photoCaption.text(this.caption),
                        e("body").append(this.$photoCaption),
                        this.$photoCaption.css({
                            display: "inline"
                        }),
                        t({
                            targets: this.$photoCaption[0],
                            opacity: 1,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        }));
                        var o = 0
                          , a = this.originalWidth / this.windowWidth
                          , r = this.originalHeight / this.windowHeight;
                        this.newWidth = 0,
                        this.newHeight = 0,
                        a > r ? (o = this.originalHeight / this.originalWidth,
                        this.newWidth = .9 * this.windowWidth,
                        this.newHeight = .9 * this.windowWidth * o) : (o = this.originalWidth / this.originalHeight,
                        this.newWidth = .9 * this.windowHeight * o,
                        this.newHeight = .9 * this.windowHeight),
                        this._animateImageIn(),
                        this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                        this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                        this._handleWindowEscapeBound = this._handleWindowEscape.bind(this),
                        window.addEventListener("scroll", this._handleWindowScrollBound),
                        window.addEventListener("resize", this._handleWindowResizeBound),
                        window.addEventListener("keyup", this._handleWindowEscapeBound)
                    }
                }, {
                    key: "close",
                    value: function() {
                        var e = this;
                        this._updateVars(),
                        this.doneAnimating = !1,
                        "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                        t.remove(this.el),
                        t.remove(this.$overlay[0]),
                        "" !== this.caption && t.remove(this.$photoCaption[0]),
                        window.removeEventListener("scroll", this._handleWindowScrollBound),
                        window.removeEventListener("resize", this._handleWindowResizeBound),
                        window.removeEventListener("keyup", this._handleWindowEscapeBound),
                        t({
                            targets: this.$overlay[0],
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                e.overlayActive = !1,
                                e.$overlay.remove()
                            }
                        }),
                        this._animateImageOut(),
                        "" !== this.caption && t({
                            targets: this.$photoCaption[0],
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                e.$photoCaption.remove()
                            }
                        })
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Materialbox
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            M.Materialbox = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "materialbox", "M_Materialbox")
        }(cash, M.anime),
        function(e) {
            "use strict";
            var t = {
                responsiveThreshold: 0
            }
              , n = function(n) {
                function i(t, n) {
                    u(this, i);
                    var o = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
                    return o.el.M_Parallax = o,
                    o.options = e.extend({}, i.defaults, n),
                    o._enabled = window.innerWidth > o.options.responsiveThreshold,
                    o.$img = o.$el.find("img").first(),
                    o.$img.each(function() {
                        this.complete && e(this).trigger("load")
                    }),
                    o._updateParallax(),
                    o._setupEventHandlers(),
                    o._setupStyles(),
                    i._parallaxes.push(o),
                    o
                }
                return l(i, c),
                r(i, [{
                    key: "destroy",
                    value: function() {
                        i._parallaxes.splice(i._parallaxes.indexOf(this), 1),
                        this.$img[0].style.transform = "",
                        this._removeEventHandlers(),
                        this.$el[0].M_Parallax = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleImageLoadBound = this._handleImageLoad.bind(this),
                        this.$img[0].addEventListener("load", this._handleImageLoadBound),
                        0 === i._parallaxes.length && (i._handleScrollThrottled = M.throttle(i._handleScroll, 5),
                        window.addEventListener("scroll", i._handleScrollThrottled),
                        i._handleWindowResizeThrottled = M.throttle(i._handleWindowResize, 5),
                        window.addEventListener("resize", i._handleWindowResizeThrottled))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.$img[0].removeEventListener("load", this._handleImageLoadBound),
                        0 === i._parallaxes.length && (window.removeEventListener("scroll", i._handleScrollThrottled),
                        window.removeEventListener("resize", i._handleWindowResizeThrottled))
                    }
                }, {
                    key: "_setupStyles",
                    value: function() {
                        this.$img[0].style.opacity = 1
                    }
                }, {
                    key: "_handleImageLoad",
                    value: function() {
                        this._updateParallax()
                    }
                }, {
                    key: "_updateParallax",
                    value: function() {
                        var e = this.$el.height() > 0 ? this.el.parentNode.offsetHeight : 500
                          , t = this.$img[0].offsetHeight - e
                          , n = this.$el.offset().top + e
                          , i = this.$el.offset().top
                          , o = M.getDocumentScrollTop()
                          , a = window.innerHeight
                          , r = t * ((o + a - i) / (e + a));
                        this._enabled ? n > o && i < o + a && (this.$img[0].style.transform = "translate3D(-50%, " + r + "px, 0)") : this.$img[0].style.transform = ""
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Parallax
                    }
                }, {
                    key: "_handleScroll",
                    value: function() {
                        for (var e = 0; e < i._parallaxes.length; e++) {
                            var t = i._parallaxes[e];
                            t._updateParallax.call(t)
                        }
                    }
                }, {
                    key: "_handleWindowResize",
                    value: function() {
                        for (var e = 0; e < i._parallaxes.length; e++) {
                            var t = i._parallaxes[e];
                            t._enabled = window.innerWidth > t.options.responsiveThreshold
                        }
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return t
                    }
                }]),
                i
            }();
            n._parallaxes = [],
            M.Parallax = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "parallax", "M_Parallax")
        }(cash),
        function(e, t) {
            "use strict";
            var n = {
                duration: 300,
                onShow: null,
                swipeable: !1,
                responsiveThreshold: 1 / 0
            }
              , i = function(i) {
                function o(t, n) {
                    u(this, o);
                    var i = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, t, n));
                    return i.el.M_Tabs = i,
                    i.options = e.extend({}, o.defaults, n),
                    i.$tabLinks = i.$el.children("li.tab").children("a"),
                    i.index = 0,
                    i._setupActiveTabLink(),
                    i.options.swipeable ? i._setupSwipeableTabs() : i._setupNormalTabs(),
                    i._setTabsAndTabWidth(),
                    i._createIndicator(),
                    i._setupEventHandlers(),
                    i
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._indicator.parentNode.removeChild(this._indicator),
                        this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(),
                        this.$el[0].M_Tabs = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                        window.addEventListener("resize", this._handleWindowResizeBound),
                        this._handleTabClickBound = this._handleTabClick.bind(this),
                        this.el.addEventListener("click", this._handleTabClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        window.removeEventListener("resize", this._handleWindowResizeBound),
                        this.el.removeEventListener("click", this._handleTabClickBound)
                    }
                }, {
                    key: "_handleWindowResize",
                    value: function() {
                        this._setTabsAndTabWidth(),
                        0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px",
                        this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px")
                    }
                }, {
                    key: "_handleTabClick",
                    value: function(t) {
                        var n = this
                          , i = e(t.target).closest("li.tab")
                          , o = e(t.target).closest("a");
                        if (o.length && o.parent().hasClass("tab"))
                            if (i.hasClass("disabled"))
                                t.preventDefault();
                            else if (!o.attr("target")) {
                                this.$activeTabLink.removeClass("active");
                                var a = this.$content;
                                this.$activeTabLink = o,
                                this.$content = e(M.escapeHash(o[0].hash)),
                                this.$tabLinks = this.$el.children("li.tab").children("a"),
                                this.$activeTabLink.addClass("active");
                                var r = this.index;
                                this.index = Math.max(this.$tabLinks.index(o), 0),
                                this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index, function() {
                                    "function" == typeof n.options.onShow && n.options.onShow.call(n, n.$content[0])
                                }) : this.$content.length && (this.$content[0].style.display = "block",
                                this.$content.addClass("active"),
                                "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]),
                                a.length && !a.is(this.$content) && (a[0].style.display = "none",
                                a.removeClass("active"))),
                                this._setTabsAndTabWidth(),
                                this._animateIndicator(r),
                                t.preventDefault()
                            }
                    }
                }, {
                    key: "_createIndicator",
                    value: function() {
                        var e = this
                          , t = document.createElement("li");
                        t.classList.add("indicator"),
                        this.el.appendChild(t),
                        this._indicator = t,
                        setTimeout(function() {
                            e._indicator.style.left = e._calcLeftPos(e.$activeTabLink) + "px",
                            e._indicator.style.right = e._calcRightPos(e.$activeTabLink) + "px"
                        }, 0)
                    }
                }, {
                    key: "_setupActiveTabLink",
                    value: function() {
                        this.$activeTabLink = e(this.$tabLinks.filter('[href="' + location.hash + '"]')),
                        0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()),
                        0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()),
                        this.$tabLinks.removeClass("active"),
                        this.$activeTabLink[0].classList.add("active"),
                        this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0),
                        this.$activeTabLink.length && (this.$content = e(M.escapeHash(this.$activeTabLink[0].hash)),
                        this.$content.addClass("active"))
                    }
                }, {
                    key: "_setupSwipeableTabs",
                    value: function() {
                        var t = this;
                        window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
                        var n = e();
                        this.$tabLinks.each(function(t) {
                            var i = e(M.escapeHash(t.hash));
                            i.addClass("carousel-item"),
                            n = n.add(i)
                        });
                        var i = e('<div class="tabs-content carousel carousel-slider"></div>');
                        n.first().before(i),
                        i.append(n),
                        n[0].style.display = "";
                        var o = this.$activeTabLink.closest(".tab").index();
                        this._tabsCarousel = M.Carousel.init(i[0], {
                            fullWidth: !0,
                            noWrap: !0,
                            onCycleTo: function(n) {
                                var i = t.index;
                                t.index = e(n).index(),
                                t.$activeTabLink.removeClass("active"),
                                t.$activeTabLink = t.$tabLinks.eq(t.index),
                                t.$activeTabLink.addClass("active"),
                                t._animateIndicator(i),
                                "function" == typeof t.options.onShow && t.options.onShow.call(t, t.$content[0])
                            }
                        }),
                        this._tabsCarousel.set(o)
                    }
                }, {
                    key: "_teardownSwipeableTabs",
                    value: function() {
                        var e = this._tabsCarousel.$el;
                        this._tabsCarousel.destroy(),
                        e.after(e.children()),
                        e.remove()
                    }
                }, {
                    key: "_setupNormalTabs",
                    value: function() {
                        this.$tabLinks.not(this.$activeTabLink).each(function(t) {
                            if (t.hash) {
                                var n = e(M.escapeHash(t.hash));
                                n.length && (n[0].style.display = "none")
                            }
                        })
                    }
                }, {
                    key: "_teardownNormalTabs",
                    value: function() {
                        this.$tabLinks.each(function(t) {
                            if (t.hash) {
                                var n = e(M.escapeHash(t.hash));
                                n.length && (n[0].style.display = "")
                            }
                        })
                    }
                }, {
                    key: "_setTabsAndTabWidth",
                    value: function() {
                        this.tabsWidth = this.$el.width(),
                        this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length
                    }
                }, {
                    key: "_calcRightPos",
                    value: function(e) {
                        return Math.ceil(this.tabsWidth - e.position().left - e[0].getBoundingClientRect().width)
                    }
                }, {
                    key: "_calcLeftPos",
                    value: function(e) {
                        return Math.floor(e.position().left)
                    }
                }, {
                    key: "updateTabIndicator",
                    value: function() {
                        this._setTabsAndTabWidth(),
                        this._animateIndicator(this.index)
                    }
                }, {
                    key: "_animateIndicator",
                    value: function(e) {
                        var n = 0
                          , i = 0;
                        this.index - e >= 0 ? n = 90 : i = 90;
                        var o = {
                            targets: this._indicator,
                            left: {
                                value: this._calcLeftPos(this.$activeTabLink),
                                delay: n
                            },
                            right: {
                                value: this._calcRightPos(this.$activeTabLink),
                                delay: i
                            },
                            duration: this.options.duration,
                            easing: "easeOutQuad"
                        };
                        t.remove(this._indicator),
                        t(o)
                    }
                }, {
                    key: "select",
                    value: function(e) {
                        var t = this.$tabLinks.filter('[href="#' + e + '"]');
                        t.length && t.trigger("click")
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Tabs
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            M.Tabs = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "tabs", "M_Tabs")
        }(cash, M.anime),
        function(e, t) {
            "use strict";
            var n = {
                exitDelay: 200,
                enterDelay: 0,
                html: null,
                margin: 5,
                inDuration: 250,
                outDuration: 200,
                position: "bottom",
                transitionMovement: 10
            }
              , i = function(i) {
                function o(t, n) {
                    u(this, o);
                    var i = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, t, n));
                    return i.el.M_Tooltip = i,
                    i.options = e.extend({}, o.defaults, n),
                    i.isOpen = !1,
                    i.isHovered = !1,
                    i.isFocused = !1,
                    i._appendTooltipEl(),
                    i._setupEventHandlers(),
                    i
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        e(this.tooltipEl).remove(),
                        this._removeEventHandlers(),
                        this.el.M_Tooltip = void 0
                    }
                }, {
                    key: "_appendTooltipEl",
                    value: function() {
                        var e = document.createElement("div");
                        e.classList.add("material-tooltip"),
                        this.tooltipEl = e;
                        var t = document.createElement("div");
                        t.classList.add("tooltip-content"),
                        t.innerHTML = this.options.html,
                        e.appendChild(t),
                        document.body.appendChild(e)
                    }
                }, {
                    key: "_updateTooltipContent",
                    value: function() {
                        this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleMouseEnterBound = this._handleMouseEnter.bind(this),
                        this._handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                        this._handleFocusBound = this._handleFocus.bind(this),
                        this._handleBlurBound = this._handleBlur.bind(this),
                        this.el.addEventListener("mouseenter", this._handleMouseEnterBound),
                        this.el.addEventListener("mouseleave", this._handleMouseLeaveBound),
                        this.el.addEventListener("focus", this._handleFocusBound, !0),
                        this.el.addEventListener("blur", this._handleBlurBound, !0)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("mouseenter", this._handleMouseEnterBound),
                        this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound),
                        this.el.removeEventListener("focus", this._handleFocusBound, !0),
                        this.el.removeEventListener("blur", this._handleBlurBound, !0)
                    }
                }, {
                    key: "open",
                    value: function(t) {
                        this.isOpen || (t = void 0 === t || void 0,
                        this.isOpen = !0,
                        this.options = e.extend({}, this.options, this._getAttributeOptions()),
                        this._updateTooltipContent(),
                        this._setEnterDelayTimeout(t))
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen && (this.isHovered = !1,
                        this.isFocused = !1,
                        this.isOpen = !1,
                        this._setExitDelayTimeout())
                    }
                }, {
                    key: "_setExitDelayTimeout",
                    value: function() {
                        var e = this;
                        clearTimeout(this._exitDelayTimeout),
                        this._exitDelayTimeout = setTimeout(function() {
                            e.isHovered || e.isFocused || e._animateOut()
                        }, this.options.exitDelay)
                    }
                }, {
                    key: "_setEnterDelayTimeout",
                    value: function(e) {
                        var t = this;
                        clearTimeout(this._enterDelayTimeout),
                        this._enterDelayTimeout = setTimeout(function() {
                            (t.isHovered || t.isFocused || e) && t._animateIn()
                        }, this.options.enterDelay)
                    }
                }, {
                    key: "_positionTooltip",
                    value: function() {
                        var t, n = this.el, i = this.tooltipEl, o = n.offsetHeight, a = n.offsetWidth, r = i.offsetHeight, s = i.offsetWidth, l = this.options.margin, u = void 0, c = void 0;
                        this.xMovement = 0,
                        this.yMovement = 0,
                        u = n.getBoundingClientRect().top + M.getDocumentScrollTop(),
                        c = n.getBoundingClientRect().left + M.getDocumentScrollLeft(),
                        "top" === this.options.position ? (u += -r - l,
                        c += a / 2 - s / 2,
                        this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (u += o / 2 - r / 2,
                        c += a + l,
                        this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (u += o / 2 - r / 2,
                        c += -s - l,
                        this.xMovement = -this.options.transitionMovement) : (u += o + l,
                        c += a / 2 - s / 2,
                        this.yMovement = this.options.transitionMovement),
                        t = this._repositionWithinScreen(c, u, s, r),
                        e(i).css({
                            top: t.y + "px",
                            left: t.x + "px"
                        })
                    }
                }, {
                    key: "_repositionWithinScreen",
                    value: function(e, t, n, i) {
                        var o = M.getDocumentScrollLeft()
                          , a = M.getDocumentScrollTop()
                          , r = e - o
                          , s = t - a
                          , l = {
                            left: r,
                            top: s,
                            width: n,
                            height: i
                        }
                          , u = this.options.margin + this.options.transitionMovement
                          , c = M.checkWithinContainer(document.body, l, u);
                        return c.left ? r = u : c.right && (r -= r + n - window.innerWidth),
                        c.top ? s = u : c.bottom && (s -= s + i - window.innerHeight),
                        {
                            x: r + o,
                            y: s + a
                        }
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        this._positionTooltip(),
                        this.tooltipEl.style.visibility = "visible",
                        t.remove(this.tooltipEl),
                        t({
                            targets: this.tooltipEl,
                            opacity: 1,
                            translateX: this.xMovement,
                            translateY: this.yMovement,
                            duration: this.options.inDuration,
                            easing: "easeOutCubic"
                        })
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        t.remove(this.tooltipEl),
                        t({
                            targets: this.tooltipEl,
                            opacity: 0,
                            translateX: 0,
                            translateY: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutCubic"
                        })
                    }
                }, {
                    key: "_handleMouseEnter",
                    value: function() {
                        this.isHovered = !0,
                        this.isFocused = !1,
                        this.open(!1)
                    }
                }, {
                    key: "_handleMouseLeave",
                    value: function() {
                        this.isHovered = !1,
                        this.isFocused = !1,
                        this.close()
                    }
                }, {
                    key: "_handleFocus",
                    value: function() {
                        M.tabPressed && (this.isFocused = !0,
                        this.open(!1))
                    }
                }, {
                    key: "_handleBlur",
                    value: function() {
                        this.isFocused = !1,
                        this.close()
                    }
                }, {
                    key: "_getAttributeOptions",
                    value: function() {
                        var e = {}
                          , t = this.el.getAttribute("data-tooltip")
                          , n = this.el.getAttribute("data-position");
                        return t && (e.html = t),
                        n && (e.position = n),
                        e
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Tooltip
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            M.Tooltip = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "tooltip", "M_Tooltip")
        }(cash, M.anime),
        function(e) {
            "use strict";
            var t = t || {}
              , n = document.querySelectorAll.bind(document);
            function i(e) {
                var t = "";
                for (var n in e)
                    e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
                return t
            }
            var a = {
                duration: 750,
                show: function(e, t) {
                    if (2 === e.button)
                        return !1;
                    var n = t || this
                      , r = document.createElement("div");
                    r.className = "waves-ripple",
                    n.appendChild(r);
                    var s = function(e) {
                        var t, n, i = {
                            top: 0,
                            left: 0
                        }, a = e && e.ownerDocument;
                        return t = a.documentElement,
                        "undefined" !== o(e.getBoundingClientRect) && (i = e.getBoundingClientRect()),
                        n = function(e) {
                            return function(e) {
                                return null !== e && e === e.window
                            }(e) ? e : 9 === e.nodeType && e.defaultView
                        }(a),
                        {
                            top: i.top + n.pageYOffset - t.clientTop,
                            left: i.left + n.pageXOffset - t.clientLeft
                        }
                    }(n)
                      , l = e.pageY - s.top
                      , u = e.pageX - s.left
                      , c = "scale(" + n.clientWidth / 100 * 10 + ")";
                    "touches"in e && (l = e.touches[0].pageY - s.top,
                    u = e.touches[0].pageX - s.left),
                    r.setAttribute("data-hold", Date.now()),
                    r.setAttribute("data-scale", c),
                    r.setAttribute("data-x", u),
                    r.setAttribute("data-y", l);
                    var d = {
                        top: l + "px",
                        left: u + "px"
                    };
                    r.className = r.className + " waves-notransition",
                    r.setAttribute("style", i(d)),
                    r.className = r.className.replace("waves-notransition", ""),
                    d["-webkit-transform"] = c,
                    d["-moz-transform"] = c,
                    d["-ms-transform"] = c,
                    d["-o-transform"] = c,
                    d.transform = c,
                    d.opacity = "1",
                    d["-webkit-transition-duration"] = a.duration + "ms",
                    d["-moz-transition-duration"] = a.duration + "ms",
                    d["-o-transition-duration"] = a.duration + "ms",
                    d["transition-duration"] = a.duration + "ms",
                    d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    r.setAttribute("style", i(d))
                },
                hide: function(e) {
                    r.touchup(e);
                    var t = this
                      , n = (t.clientWidth,
                    null)
                      , o = t.getElementsByClassName("waves-ripple");
                    if (!(o.length > 0))
                        return !1;
                    var s = (n = o[o.length - 1]).getAttribute("data-x")
                      , l = n.getAttribute("data-y")
                      , u = n.getAttribute("data-scale")
                      , c = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                    c < 0 && (c = 0),
                    setTimeout(function() {
                        var e = {
                            top: l + "px",
                            left: s + "px",
                            opacity: "0",
                            "-webkit-transition-duration": a.duration + "ms",
                            "-moz-transition-duration": a.duration + "ms",
                            "-o-transition-duration": a.duration + "ms",
                            "transition-duration": a.duration + "ms",
                            "-webkit-transform": u,
                            "-moz-transform": u,
                            "-ms-transform": u,
                            "-o-transform": u,
                            transform: u
                        };
                        n.setAttribute("style", i(e)),
                        setTimeout(function() {
                            try {
                                t.removeChild(n)
                            } catch (e) {
                                return !1
                            }
                        }, a.duration)
                    }, c)
                },
                wrapInput: function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if ("input" === n.tagName.toLowerCase()) {
                            var i = n.parentNode;
                            if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf("waves-effect"))
                                continue;
                            var o = document.createElement("i");
                            o.className = n.className + " waves-input-wrapper";
                            var a = n.getAttribute("style");
                            a || (a = ""),
                            o.setAttribute("style", a),
                            n.className = "waves-button-input",
                            n.removeAttribute("style"),
                            i.replaceChild(o, n),
                            o.appendChild(n)
                        }
                    }
                }
            }
              , r = {
                touches: 0,
                allowEvent: function(e) {
                    var t = !0;
                    return "touchstart" === e.type ? r.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function() {
                        r.touches > 0 && (r.touches -= 1)
                    }, 500) : "mousedown" === e.type && r.touches > 0 && (t = !1),
                    t
                },
                touchup: function(e) {
                    r.allowEvent(e)
                }
            };
            function s(t) {
                var n = function(e) {
                    if (!1 === r.allowEvent(e))
                        return null;
                    for (var t = null, n = e.target || e.srcElement; null !== n.parentNode; ) {
                        if (!(n instanceof SVGElement) && -1 !== n.className.indexOf("waves-effect")) {
                            t = n;
                            break
                        }
                        n = n.parentNode
                    }
                    return t
                }(t);
                null !== n && (a.show(t, n),
                "ontouchstart"in e && (n.addEventListener("touchend", a.hide, !1),
                n.addEventListener("touchcancel", a.hide, !1)),
                n.addEventListener("mouseup", a.hide, !1),
                n.addEventListener("mouseleave", a.hide, !1),
                n.addEventListener("dragend", a.hide, !1))
            }
            t.displayEffect = function(t) {
                "duration"in (t = t || {}) && (a.duration = t.duration),
                a.wrapInput(n(".waves-effect")),
                "ontouchstart"in e && document.body.addEventListener("touchstart", s, !1),
                document.body.addEventListener("mousedown", s, !1)
            }
            ,
            t.attach = function(t) {
                "input" === t.tagName.toLowerCase() && (a.wrapInput([t]),
                t = t.parentNode),
                "ontouchstart"in e && t.addEventListener("touchstart", s, !1),
                t.addEventListener("mousedown", s, !1)
            }
            ,
            e.Waves = t,
            document.addEventListener("DOMContentLoaded", function() {
                t.displayEffect()
            }, !1)
        }(window),
        function(e, t) {
            "use strict";
            var n = {
                html: "",
                displayLength: 4e3,
                inDuration: 300,
                outDuration: 375,
                classes: "",
                completeCallback: null,
                activationPercent: .8
            }
              , i = function() {
                function i(t) {
                    u(this, i),
                    this.options = e.extend({}, i.defaults, t),
                    this.message = this.options.html,
                    this.panning = !1,
                    this.timeRemaining = this.options.displayLength,
                    0 === i._toasts.length && i._createContainer(),
                    i._toasts.push(this);
                    var n = this._createToast();
                    n.M_Toast = this,
                    this.el = n,
                    this.$el = e(n),
                    this._animateIn(),
                    this._setTimer()
                }
                return r(i, [{
                    key: "_createToast",
                    value: function() {
                        var t = document.createElement("div");
                        return t.classList.add("toast"),
                        this.options.classes.length && e(t).addClass(this.options.classes),
                        ("object" === ("undefined" == typeof HTMLElement ? "undefined" : o(HTMLElement)) ? this.message instanceof HTMLElement : this.message && "object" === o(this.message) && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? t.appendChild(this.message) : this.message.jquery ? e(t).append(this.message[0]) : t.innerHTML = this.message,
                        i._container.appendChild(t),
                        t
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        t({
                            targets: this.el,
                            top: 0,
                            opacity: 1,
                            duration: this.options.inDuration,
                            easing: "easeOutCubic"
                        })
                    }
                }, {
                    key: "_setTimer",
                    value: function() {
                        var e = this;
                        this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function() {
                            e.panning || (e.timeRemaining -= 20),
                            e.timeRemaining <= 0 && e.dismiss()
                        }, 20))
                    }
                }, {
                    key: "dismiss",
                    value: function() {
                        var e = this;
                        window.clearInterval(this.counterInterval);
                        var n = this.el.offsetWidth * this.options.activationPercent;
                        this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s",
                        this.el.style.transform = "translateX(" + n + "px)",
                        this.el.style.opacity = 0),
                        t({
                            targets: this.el,
                            opacity: 0,
                            marginTop: -40,
                            duration: this.options.outDuration,
                            easing: "easeOutExpo",
                            complete: function() {
                                "function" == typeof e.options.completeCallback && e.options.completeCallback(),
                                e.$el.remove(),
                                i._toasts.splice(i._toasts.indexOf(e), 1),
                                0 === i._toasts.length && i._removeContainer()
                            }
                        })
                    }
                }], [{
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Toast
                    }
                }, {
                    key: "_createContainer",
                    value: function() {
                        var e = document.createElement("div");
                        e.setAttribute("id", "toast-container"),
                        e.addEventListener("touchstart", i._onDragStart),
                        e.addEventListener("touchmove", i._onDragMove),
                        e.addEventListener("touchend", i._onDragEnd),
                        e.addEventListener("mousedown", i._onDragStart),
                        document.addEventListener("mousemove", i._onDragMove),
                        document.addEventListener("mouseup", i._onDragEnd),
                        document.body.appendChild(e),
                        i._container = e
                    }
                }, {
                    key: "_removeContainer",
                    value: function() {
                        document.removeEventListener("mousemove", i._onDragMove),
                        document.removeEventListener("mouseup", i._onDragEnd),
                        e(i._container).remove(),
                        i._container = null
                    }
                }, {
                    key: "_onDragStart",
                    value: function(t) {
                        if (t.target && e(t.target).closest(".toast").length) {
                            var n = e(t.target).closest(".toast")[0].M_Toast;
                            n.panning = !0,
                            i._draggedToast = n,
                            n.el.classList.add("panning"),
                            n.el.style.transition = "",
                            n.startingXPos = i._xPos(t),
                            n.time = Date.now(),
                            n.xPos = i._xPos(t)
                        }
                    }
                }, {
                    key: "_onDragMove",
                    value: function(e) {
                        if (i._draggedToast) {
                            e.preventDefault();
                            var t = i._draggedToast;
                            t.deltaX = Math.abs(t.xPos - i._xPos(e)),
                            t.xPos = i._xPos(e),
                            t.velocityX = t.deltaX / (Date.now() - t.time),
                            t.time = Date.now();
                            var n = t.xPos - t.startingXPos
                              , o = t.el.offsetWidth * t.options.activationPercent;
                            t.el.style.transform = "translateX(" + n + "px)",
                            t.el.style.opacity = 1 - Math.abs(n / o)
                        }
                    }
                }, {
                    key: "_onDragEnd",
                    value: function() {
                        if (i._draggedToast) {
                            var e = i._draggedToast;
                            e.panning = !1,
                            e.el.classList.remove("panning");
                            var t = e.xPos - e.startingXPos
                              , n = e.el.offsetWidth * e.options.activationPercent;
                            Math.abs(t) > n || e.velocityX > 1 ? (e.wasSwiped = !0,
                            e.dismiss()) : (e.el.style.transition = "transform .2s, opacity .2s",
                            e.el.style.transform = "",
                            e.el.style.opacity = ""),
                            i._draggedToast = null
                        }
                    }
                }, {
                    key: "_xPos",
                    value: function(e) {
                        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
                    }
                }, {
                    key: "dismissAll",
                    value: function() {
                        for (var e in i._toasts)
                            i._toasts[e].dismiss()
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                i
            }();
            i._toasts = [],
            i._container = null,
            i._draggedToast = null,
            M.Toast = i,
            M.toast = function(e) {
                return new i(e)
            }
        }(cash, M.anime),
        function(e, t) {
            "use strict";
            var n = {
                edge: "left",
                draggable: !0,
                inDuration: 250,
                outDuration: 200,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null,
                preventScrolling: !0
            }
              , i = function(i) {
                function o(t, n) {
                    u(this, o);
                    var i = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, t, n));
                    return i.el.M_Sidenav = i,
                    i.id = i.$el.attr("id"),
                    i.options = e.extend({}, o.defaults, n),
                    i.isOpen = !1,
                    i.isFixed = i.el.classList.contains("sidenav-fixed"),
                    i.isDragged = !1,
                    i.lastWindowWidth = window.innerWidth,
                    i.lastWindowHeight = window.innerHeight,
                    i._createOverlay(),
                    i._createDragTarget(),
                    i._setupEventHandlers(),
                    i._setupClasses(),
                    i._setupFixed(),
                    o._sidenavs.push(i),
                    i
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._enableBodyScrolling(),
                        this._overlay.parentNode.removeChild(this._overlay),
                        this.dragTarget.parentNode.removeChild(this.dragTarget),
                        this.el.M_Sidenav = void 0,
                        this.el.style.transform = "";
                        var e = o._sidenavs.indexOf(this);
                        e >= 0 && o._sidenavs.splice(e, 1)
                    }
                }, {
                    key: "_createOverlay",
                    value: function() {
                        var e = document.createElement("div");
                        this._closeBound = this.close.bind(this),
                        e.classList.add("sidenav-overlay"),
                        e.addEventListener("click", this._closeBound),
                        document.body.appendChild(e),
                        this._overlay = e
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        0 === o._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick),
                        this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this),
                        this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this),
                        this._handleCloseDragBound = this._handleCloseDrag.bind(this),
                        this._handleCloseReleaseBound = this._handleCloseRelease.bind(this),
                        this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this),
                        this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound),
                        this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound),
                        this._overlay.addEventListener("touchmove", this._handleCloseDragBound),
                        this._overlay.addEventListener("touchend", this._handleCloseReleaseBound),
                        this.el.addEventListener("touchmove", this._handleCloseDragBound),
                        this.el.addEventListener("touchend", this._handleCloseReleaseBound),
                        this.el.addEventListener("click", this._handleCloseTriggerClickBound),
                        this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                        window.addEventListener("resize", this._handleWindowResizeBound))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        1 === o._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick),
                        this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound),
                        this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound),
                        this._overlay.removeEventListener("touchmove", this._handleCloseDragBound),
                        this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound),
                        this.el.removeEventListener("touchmove", this._handleCloseDragBound),
                        this.el.removeEventListener("touchend", this._handleCloseReleaseBound),
                        this.el.removeEventListener("click", this._handleCloseTriggerClickBound),
                        this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound)
                    }
                }, {
                    key: "_handleTriggerClick",
                    value: function(t) {
                        var n = e(t.target).closest(".sidenav-trigger");
                        if (t.target && n.length) {
                            var i = M.getIdFromTrigger(n[0])
                              , o = document.getElementById(i).M_Sidenav;
                            o && o.open(n),
                            t.preventDefault()
                        }
                    }
                }, {
                    key: "_startDrag",
                    value: function(e) {
                        var n = e.targetTouches[0].clientX;
                        this.isDragged = !0,
                        this._startingXpos = n,
                        this._xPos = this._startingXpos,
                        this._time = Date.now(),
                        this._width = this.el.getBoundingClientRect().width,
                        this._overlay.style.display = "block",
                        this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(),
                        this._verticallyScrolling = !1,
                        t.remove(this.el),
                        t.remove(this._overlay)
                    }
                }, {
                    key: "_dragMoveUpdate",
                    value: function(e) {
                        var t = e.targetTouches[0].clientX
                          , n = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
                        this.deltaX = Math.abs(this._xPos - t),
                        this._xPos = t,
                        this.velocityX = this.deltaX / (Date.now() - this._time),
                        this._time = Date.now(),
                        this._initialScrollTop !== n && (this._verticallyScrolling = !0)
                    }
                }, {
                    key: "_handleDragTargetDrag",
                    value: function(e) {
                        if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
                            this.isDragged || this._startDrag(e),
                            this._dragMoveUpdate(e);
                            var t = this._xPos - this._startingXpos
                              , n = t > 0 ? "right" : "left";
                            t = Math.min(this._width, Math.abs(t)),
                            this.options.edge === n && (t = 0);
                            var i = t
                              , o = "translateX(-100%)";
                            "right" === this.options.edge && (o = "translateX(100%)",
                            i = -i),
                            this.percentOpen = Math.min(1, t / this._width),
                            this.el.style.transform = o + " translateX(" + i + "px)",
                            this._overlay.style.opacity = this.percentOpen
                        }
                    }
                }, {
                    key: "_handleDragTargetRelease",
                    value: function() {
                        this.isDragged && (this.percentOpen > .2 ? this.open() : this._animateOut(),
                        this.isDragged = !1,
                        this._verticallyScrolling = !1)
                    }
                }, {
                    key: "_handleCloseDrag",
                    value: function(e) {
                        if (this.isOpen) {
                            if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling)
                                return;
                            this.isDragged || this._startDrag(e),
                            this._dragMoveUpdate(e);
                            var t = this._xPos - this._startingXpos
                              , n = t > 0 ? "right" : "left";
                            t = Math.min(this._width, Math.abs(t)),
                            this.options.edge !== n && (t = 0);
                            var i = -t;
                            "right" === this.options.edge && (i = -i),
                            this.percentOpen = Math.min(1, 1 - t / this._width),
                            this.el.style.transform = "translateX(" + i + "px)",
                            this._overlay.style.opacity = this.percentOpen
                        }
                    }
                }, {
                    key: "_handleCloseRelease",
                    value: function() {
                        this.isOpen && this.isDragged && (this.percentOpen > .8 ? this._animateIn() : this.close(),
                        this.isDragged = !1,
                        this._verticallyScrolling = !1)
                    }
                }, {
                    key: "_handleCloseTriggerClick",
                    value: function(t) {
                        e(t.target).closest(".sidenav-close").length && !this._isCurrentlyFixed() && this.close()
                    }
                }, {
                    key: "_handleWindowResize",
                    value: function() {
                        this.lastWindowWidth !== window.innerWidth && (window.innerWidth > 992 ? this.open() : this.close()),
                        this.lastWindowWidth = window.innerWidth,
                        this.lastWindowHeight = window.innerHeight
                    }
                }, {
                    key: "_setupClasses",
                    value: function() {
                        "right" === this.options.edge && (this.el.classList.add("right-aligned"),
                        this.dragTarget.classList.add("right-aligned"))
                    }
                }, {
                    key: "_removeClasses",
                    value: function() {
                        this.el.classList.remove("right-aligned"),
                        this.dragTarget.classList.remove("right-aligned")
                    }
                }, {
                    key: "_setupFixed",
                    value: function() {
                        this._isCurrentlyFixed() && this.open()
                    }
                }, {
                    key: "_isCurrentlyFixed",
                    value: function() {
                        return this.isFixed && window.innerWidth > 992
                    }
                }, {
                    key: "_createDragTarget",
                    value: function() {
                        var e = document.createElement("div");
                        e.classList.add("drag-target"),
                        document.body.appendChild(e),
                        this.dragTarget = e
                    }
                }, {
                    key: "_preventBodyScrolling",
                    value: function() {
                        document.body.style.overflow = "hidden"
                    }
                }, {
                    key: "_enableBodyScrolling",
                    value: function() {
                        document.body.style.overflow = ""
                    }
                }, {
                    key: "open",
                    value: function() {
                        !0 !== this.isOpen && (this.isOpen = !0,
                        "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                        this._isCurrentlyFixed() ? (t.remove(this.el),
                        t({
                            targets: this.el,
                            translateX: 0,
                            duration: 0,
                            easing: "easeOutQuad"
                        }),
                        this._enableBodyScrolling(),
                        this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(),
                        this.isDragged && 1 == this.percentOpen || this._animateIn()))
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (!1 !== this.isOpen)
                            if (this.isOpen = !1,
                            "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                            this._isCurrentlyFixed()) {
                                var e = "left" === this.options.edge ? "-105%" : "105%";
                                this.el.style.transform = "translateX(" + e + ")"
                            } else
                                this._enableBodyScrolling(),
                                this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none" : this._animateOut()
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        this._animateSidenavIn(),
                        this._animateOverlayIn()
                    }
                }, {
                    key: "_animateSidenavIn",
                    value: function() {
                        var e = this
                          , n = "left" === this.options.edge ? -1 : 1;
                        this.isDragged && (n = "left" === this.options.edge ? n + this.percentOpen : n - this.percentOpen),
                        t.remove(this.el),
                        t({
                            targets: this.el,
                            translateX: [100 * n + "%", 0],
                            duration: this.options.inDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el)
                            }
                        })
                    }
                }, {
                    key: "_animateOverlayIn",
                    value: function() {
                        var n = 0;
                        this.isDragged ? n = this.percentOpen : e(this._overlay).css({
                            display: "block"
                        }),
                        t.remove(this._overlay),
                        t({
                            targets: this._overlay,
                            opacity: [n, 1],
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        })
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        this._animateSidenavOut(),
                        this._animateOverlayOut()
                    }
                }, {
                    key: "_animateSidenavOut",
                    value: function() {
                        var e = this
                          , n = "left" === this.options.edge ? -1 : 1
                          , i = 0;
                        this.isDragged && (i = "left" === this.options.edge ? n + this.percentOpen : n - this.percentOpen),
                        t.remove(this.el),
                        t({
                            targets: this.el,
                            translateX: [100 * i + "%", 105 * n + "%"],
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el)
                            }
                        })
                    }
                }, {
                    key: "_animateOverlayOut",
                    value: function() {
                        var n = this;
                        t.remove(this._overlay),
                        t({
                            targets: this._overlay,
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(n._overlay).css("display", "none")
                            }
                        })
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Sidenav
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            i._sidenavs = [],
            M.Sidenav = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "sidenav", "M_Sidenav")
        }(cash, M.anime),
        function(e, t) {
            "use strict";
            var n = {
                throttle: 100,
                scrollOffset: 200,
                activeClass: "active",
                getActiveElement: function(e) {
                    return 'a[href="#' + e + '"]'
                }
            }
              , i = function(i) {
                function o(t, n) {
                    u(this, o);
                    var i = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, t, n));
                    return i.el.M_ScrollSpy = i,
                    i.options = e.extend({}, o.defaults, n),
                    o._elements.push(i),
                    o._count++,
                    o._increment++,
                    i.tickId = -1,
                    i.id = o._increment,
                    i._setupEventHandlers(),
                    i._handleWindowScroll(),
                    i
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        o._elements.splice(o._elements.indexOf(this), 1),
                        o._elementsInView.splice(o._elementsInView.indexOf(this), 1),
                        o._visibleElements.splice(o._visibleElements.indexOf(this.$el), 1),
                        o._count--,
                        this._removeEventHandlers(),
                        e(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),
                        this.el.M_ScrollSpy = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var e = M.throttle(this._handleWindowScroll, 200);
                        this._handleThrottledResizeBound = e.bind(this),
                        this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                        1 === o._count && (window.addEventListener("scroll", this._handleWindowScrollBound),
                        window.addEventListener("resize", this._handleThrottledResizeBound),
                        document.body.addEventListener("click", this._handleTriggerClick))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        0 === o._count && (window.removeEventListener("scroll", this._handleWindowScrollBound),
                        window.removeEventListener("resize", this._handleThrottledResizeBound),
                        document.body.removeEventListener("click", this._handleTriggerClick))
                    }
                }, {
                    key: "_handleTriggerClick",
                    value: function(n) {
                        for (var i = e(n.target), a = o._elements.length - 1; a >= 0; a--) {
                            var r = o._elements[a];
                            if (i.is('a[href="#' + r.$el.attr("id") + '"]')) {
                                n.preventDefault();
                                var s = r.$el.offset().top + 1;
                                t({
                                    targets: [document.documentElement, document.body],
                                    scrollTop: s - r.options.scrollOffset,
                                    duration: 400,
                                    easing: "easeOutCubic"
                                });
                                break
                            }
                        }
                    }
                }, {
                    key: "_handleWindowScroll",
                    value: function() {
                        o._ticks++;
                        for (var e = M.getDocumentScrollTop(), t = M.getDocumentScrollLeft(), n = t + window.innerWidth, i = e + window.innerHeight, a = o._findElements(e, n, i, t), r = 0; r < a.length; r++) {
                            var s = a[r];
                            s.tickId < 0 && s._enter(),
                            s.tickId = o._ticks
                        }
                        for (var l = 0; l < o._elementsInView.length; l++) {
                            var u = o._elementsInView[l]
                              , c = u.tickId;
                            c >= 0 && c !== o._ticks && (u._exit(),
                            u.tickId = -1)
                        }
                        o._elementsInView = a
                    }
                }, {
                    key: "_enter",
                    value: function() {
                        o._visibleElements = o._visibleElements.filter(function(e) {
                            return 0 != e.height()
                        }),
                        o._visibleElements[0] ? (e(this.options.getActiveElement(o._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                        o._visibleElements[0][0].M_ScrollSpy && this.id < o._visibleElements[0][0].M_ScrollSpy.id ? o._visibleElements.unshift(this.$el) : o._visibleElements.push(this.$el)) : o._visibleElements.push(this.$el),
                        e(this.options.getActiveElement(o._visibleElements[0].attr("id"))).addClass(this.options.activeClass)
                    }
                }, {
                    key: "_exit",
                    value: function() {
                        var t = this;
                        o._visibleElements = o._visibleElements.filter(function(e) {
                            return 0 != e.height()
                        }),
                        o._visibleElements[0] && (e(this.options.getActiveElement(o._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                        o._visibleElements = o._visibleElements.filter(function(e) {
                            return e.attr("id") != t.$el.attr("id")
                        }),
                        o._visibleElements[0] && e(this.options.getActiveElement(o._visibleElements[0].attr("id"))).addClass(this.options.activeClass))
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_ScrollSpy
                    }
                }, {
                    key: "_findElements",
                    value: function(e, t, n, i) {
                        for (var a = [], r = 0; r < o._elements.length; r++) {
                            var s = o._elements[r]
                              , l = e + s.options.scrollOffset || 200;
                            if (s.$el.height() > 0) {
                                var u = s.$el.offset().top
                                  , c = s.$el.offset().left
                                  , d = c + s.$el.width()
                                  , h = u + s.$el.height();
                                !(c > t || d < i || u > n || h < l) && a.push(s)
                            }
                        }
                        return a
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            i._elements = [],
            i._elementsInView = [],
            i._visibleElements = [],
            i._count = 0,
            i._increment = 0,
            i._ticks = 0,
            M.ScrollSpy = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "scrollSpy", "M_ScrollSpy")
        }(cash, M.anime),
        function(e) {
            "use strict";
            var t = {
                data: {},
                limit: 1 / 0,
                onAutocomplete: null,
                minLength: 1,
                sortFunction: function(e, t, n) {
                    return e.indexOf(n) - t.indexOf(n)
                }
            }
              , n = function(n) {
                function i(t, n) {
                    u(this, i);
                    var o = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
                    return o.el.M_Autocomplete = o,
                    o.options = e.extend({}, i.defaults, n),
                    o.isOpen = !1,
                    o.count = 0,
                    o.activeIndex = -1,
                    o.oldVal,
                    o.$inputField = o.$el.closest(".input-field"),
                    o.$active = e(),
                    o._mousedown = !1,
                    o._setupDropdown(),
                    o._setupEventHandlers(),
                    o
                }
                return l(i, c),
                r(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._removeDropdown(),
                        this.el.M_Autocomplete = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleInputBlurBound = this._handleInputBlur.bind(this),
                        this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this),
                        this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                        this._handleInputClickBound = this._handleInputClick.bind(this),
                        this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this),
                        this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this),
                        this.el.addEventListener("blur", this._handleInputBlurBound),
                        this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound),
                        this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound),
                        this.el.addEventListener("keydown", this._handleInputKeydownBound),
                        this.el.addEventListener("click", this._handleInputClickBound),
                        this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                        this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound),
                        void 0 !== window.ontouchstart && (this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound),
                        this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("blur", this._handleInputBlurBound),
                        this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound),
                        this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound),
                        this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                        this.el.removeEventListener("click", this._handleInputClickBound),
                        this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                        this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound),
                        void 0 !== window.ontouchstart && (this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound),
                        this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
                    }
                }, {
                    key: "_setupDropdown",
                    value: function() {
                        var t = this;
                        this.container = document.createElement("ul"),
                        this.container.id = "autocomplete-options-" + M.guid(),
                        e(this.container).addClass("autocomplete-content dropdown-content"),
                        this.$inputField.append(this.container),
                        this.el.setAttribute("data-target", this.container.id),
                        this.dropdown = M.Dropdown.init(this.el, {
                            autoFocus: !1,
                            closeOnClick: !1,
                            coverTrigger: !1,
                            onItemClick: function(n) {
                                t.selectOption(e(n))
                            }
                        }),
                        this.el.removeEventListener("click", this.dropdown._handleClickBound)
                    }
                }, {
                    key: "_removeDropdown",
                    value: function() {
                        this.container.parentNode.removeChild(this.container)
                    }
                }, {
                    key: "_handleInputBlur",
                    value: function() {
                        this._mousedown || (this.close(),
                        this._resetAutocomplete())
                    }
                }, {
                    key: "_handleInputKeyupAndFocus",
                    value: function(e) {
                        "keyup" === e.type && (i._keydown = !1),
                        this.count = 0;
                        var t = this.el.value.toLowerCase();
                        13 !== e.keyCode && 38 !== e.keyCode && 40 !== e.keyCode && (this.oldVal === t || !M.tabPressed && "focus" === e.type || this.open(),
                        this.oldVal = t)
                    }
                }, {
                    key: "_handleInputKeydown",
                    value: function(t) {
                        i._keydown = !0;
                        var n = t.keyCode
                          , o = void 0
                          , a = e(this.container).children("li").length;
                        n === M.keys.ENTER && this.activeIndex >= 0 ? (o = e(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(o),
                        t.preventDefault()) : n !== M.keys.ARROW_UP && n !== M.keys.ARROW_DOWN || (t.preventDefault(),
                        n === M.keys.ARROW_UP && this.activeIndex > 0 && this.activeIndex--,
                        n === M.keys.ARROW_DOWN && this.activeIndex < a - 1 && this.activeIndex++,
                        this.$active.removeClass("active"),
                        this.activeIndex >= 0 && (this.$active = e(this.container).children("li").eq(this.activeIndex),
                        this.$active.addClass("active")))
                    }
                }, {
                    key: "_handleInputClick",
                    value: function(e) {
                        this.open()
                    }
                }, {
                    key: "_handleContainerMousedownAndTouchstart",
                    value: function(e) {
                        this._mousedown = !0
                    }
                }, {
                    key: "_handleContainerMouseupAndTouchend",
                    value: function(e) {
                        this._mousedown = !1
                    }
                }, {
                    key: "_highlight",
                    value: function(e, t) {
                        var n = t.find("img")
                          , i = t.text().toLowerCase().indexOf("" + e.toLowerCase())
                          , o = i + e.length - 1
                          , a = t.text().slice(0, i)
                          , r = t.text().slice(i, o + 1)
                          , s = t.text().slice(o + 1);
                        t.html("<span>" + a + "<span class='highlight'>" + r + "</span>" + s + "</span>"),
                        n.length && t.prepend(n)
                    }
                }, {
                    key: "_resetCurrentElement",
                    value: function() {
                        this.activeIndex = -1,
                        this.$active.removeClass("active")
                    }
                }, {
                    key: "_resetAutocomplete",
                    value: function() {
                        e(this.container).empty(),
                        this._resetCurrentElement(),
                        this.oldVal = null,
                        this.isOpen = !1,
                        this._mousedown = !1
                    }
                }, {
                    key: "selectOption",
                    value: function(e) {
                        var t = e.text().trim();
                        this.el.value = t,
                        this.$el.trigger("change"),
                        this._resetAutocomplete(),
                        this.close(),
                        "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, t)
                    }
                }, {
                    key: "_renderDropdown",
                    value: function(t, n) {
                        var i = this;
                        this._resetAutocomplete();
                        var o = [];
                        for (var a in t)
                            if (t.hasOwnProperty(a) && -1 !== a.toLowerCase().indexOf(n)) {
                                if (this.count >= this.options.limit)
                                    break;
                                var r = {
                                    data: t[a],
                                    key: a
                                };
                                o.push(r),
                                this.count++
                            }
                        if (this.options.sortFunction) {
                            o.sort(function(e, t) {
                                return i.options.sortFunction(e.key.toLowerCase(), t.key.toLowerCase(), n.toLowerCase())
                            })
                        }
                        for (var s = 0; s < o.length; s++) {
                            var l = o[s]
                              , u = e("<li></li>");
                            l.data ? u.append('<img src="' + l.data + '" class="right circle"><span>' + l.key + "</span>") : u.append("<span>" + l.key + "</span>"),
                            e(this.container).append(u),
                            this._highlight(n, u)
                        }
                    }
                }, {
                    key: "open",
                    value: function() {
                        var e = this.el.value.toLowerCase();
                        this._resetAutocomplete(),
                        e.length >= this.options.minLength && (this.isOpen = !0,
                        this._renderDropdown(this.options.data, e)),
                        this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open()
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.dropdown.close()
                    }
                }, {
                    key: "updateData",
                    value: function(e) {
                        var t = this.el.value.toLowerCase();
                        this.options.data = e,
                        this.isOpen && this._renderDropdown(e, t)
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Autocomplete
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return t
                    }
                }]),
                i
            }();
            n._keydown = !1,
            M.Autocomplete = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "autocomplete", "M_Autocomplete")
        }(cash),
        function(e) {
            M.updateTextFields = function() {
                e("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(t, n) {
                    var i = e(this);
                    t.value.length > 0 || e(t).is(":focus") || t.autofocus || null !== i.attr("placeholder") ? i.siblings("label").addClass("active") : t.validity ? i.siblings("label").toggleClass("active", !0 === t.validity.badInput) : i.siblings("label").removeClass("active")
                })
            }
            ,
            M.validate_field = function(e) {
                var t = null !== e.attr("data-length")
                  , n = parseInt(e.attr("data-length"))
                  , i = e[0].value.length;
                0 !== i || !1 !== e[0].validity.badInput || e.is(":required") ? e.hasClass("validate") && (e.is(":valid") && t && i <= n || e.is(":valid") && !t ? (e.removeClass("invalid"),
                e.addClass("valid")) : (e.removeClass("valid"),
                e.addClass("invalid"))) : e.hasClass("validate") && (e.removeClass("valid"),
                e.removeClass("invalid"))
            }
            ,
            M.textareaAutoResize = function(t) {
                if (t instanceof Element && (t = e(t)),
                t.length) {
                    var n = e(".hiddendiv").first();
                    n.length || (n = e('<div class="hiddendiv common"></div>'),
                    e("body").append(n));
                    var i = t.css("font-family")
                      , o = t.css("font-size")
                      , a = t.css("line-height")
                      , r = t.css("padding-top")
                      , s = t.css("padding-right")
                      , l = t.css("padding-bottom")
                      , u = t.css("padding-left");
                    o && n.css("font-size", o),
                    i && n.css("font-family", i),
                    a && n.css("line-height", a),
                    r && n.css("padding-top", r),
                    s && n.css("padding-right", s),
                    l && n.css("padding-bottom", l),
                    u && n.css("padding-left", u),
                    t.data("original-height") || t.data("original-height", t.height()),
                    "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"),
                    n.text(t[0].value + "\n");
                    var c = n.html().replace(/\n/g, "<br>");
                    n.html(c),
                    t[0].offsetWidth > 0 && t[0].offsetHeight > 0 ? n.css("width", t.width() + "px") : n.css("width", window.innerWidth / 2 + "px"),
                    t.data("original-height") <= n.innerHeight() ? t.css("height", n.innerHeight() + "px") : t[0].value.length < t.data("previous-length") && t.css("height", t.data("original-height") + "px"),
                    t.data("previous-length", t[0].value.length)
                }
            }
            ,
            e(document).ready(function() {
                var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
                e(document).on("change", t, function() {
                    0 === this.value.length && null === e(this).attr("placeholder") || e(this).siblings("label").addClass("active"),
                    M.validate_field(e(this))
                }),
                e(document).ready(function() {
                    M.updateTextFields()
                }),
                e(document).on("reset", function(n) {
                    var i = e(n.target);
                    i.is("form") && (i.find(t).removeClass("valid").removeClass("invalid"),
                    i.find(t).each(function(t) {
                        this.value.length && e(this).siblings("label").removeClass("active")
                    }),
                    setTimeout(function() {
                        i.find("select").each(function() {
                            this.M_FormSelect && e(this).trigger("change")
                        })
                    }, 0))
                }),
                document.addEventListener("focus", function(n) {
                    e(n.target).is(t) && e(n.target).siblings("label, .prefix").addClass("active")
                }, !0),
                document.addEventListener("blur", function(n) {
                    var i = e(n.target);
                    if (i.is(t)) {
                        var o = ".prefix";
                        0 === i[0].value.length && !0 !== i[0].validity.badInput && null === i.attr("placeholder") && (o += ", label"),
                        i.siblings(o).removeClass("active"),
                        M.validate_field(i)
                    }
                }, !0);
                e(document).on("keyup", "input[type=radio], input[type=checkbox]", function(t) {
                    if (t.which === M.keys.TAB)
                        return e(this).addClass("tabbed"),
                        void e(this).one("blur", function(t) {
                            e(this).removeClass("tabbed")
                        })
                });
                e(".materialize-textarea").each(function() {
                    var t = e(this);
                    t.data("original-height", t.height()),
                    t.data("previous-length", this.value.length),
                    M.textareaAutoResize(t)
                }),
                e(document).on("keyup", ".materialize-textarea", function() {
                    M.textareaAutoResize(e(this))
                }),
                e(document).on("keydown", ".materialize-textarea", function() {
                    M.textareaAutoResize(e(this))
                }),
                e(document).on("change", '.file-field input[type="file"]', function() {
                    for (var t = e(this).closest(".file-field").find("input.file-path"), n = e(this)[0].files, i = [], o = 0; o < n.length; o++)
                        i.push(n[o].name);
                    t[0].value = i.join(", "),
                    t.trigger("change")
                })
            })
        }(cash),
        function(e, t) {
            "use strict";
            var n = {
                indicators: !0,
                height: 400,
                duration: 500,
                interval: 6e3
            }
              , i = function(i) {
                function o(n, i) {
                    u(this, o);
                    var a = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, n, i));
                    return a.el.M_Slider = a,
                    a.options = e.extend({}, o.defaults, i),
                    a.$slider = a.$el.find(".slides"),
                    a.$slides = a.$slider.children("li"),
                    a.activeIndex = a.$slides.filter(function(t) {
                        return e(t).hasClass("active")
                    }).first().index(),
                    -1 != a.activeIndex && (a.$active = a.$slides.eq(a.activeIndex)),
                    a._setSliderHeight(),
                    a.$slides.find(".caption").each(function(e) {
                        a._animateCaptionIn(e, 0)
                    }),
                    a.$slides.find("img").each(function(t) {
                        var n = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                        e(t).attr("src") !== n && (e(t).css("background-image", 'url("' + e(t).attr("src") + '")'),
                        e(t).attr("src", n))
                    }),
                    a._setupIndicators(),
                    a.$active ? a.$active.css("display", "block") : (a.$slides.first().addClass("active"),
                    t({
                        targets: a.$slides.first()[0],
                        opacity: 1,
                        duration: a.options.duration,
                        easing: "easeOutQuad"
                    }),
                    a.activeIndex = 0,
                    a.$active = a.$slides.eq(a.activeIndex),
                    a.options.indicators && a.$indicators.eq(a.activeIndex).addClass("active")),
                    a.$active.find("img").each(function(e) {
                        t({
                            targets: a.$active.find(".caption")[0],
                            opacity: 1,
                            translateX: 0,
                            translateY: 0,
                            duration: a.options.duration,
                            easing: "easeOutQuad"
                        })
                    }),
                    a._setupEventHandlers(),
                    a.start(),
                    a
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this.pause(),
                        this._removeIndicators(),
                        this._removeEventHandlers(),
                        this.el.M_Slider = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var e = this;
                        this._handleIntervalBound = this._handleInterval.bind(this),
                        this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                        this.options.indicators && this.$indicators.each(function(t) {
                            t.addEventListener("click", e._handleIndicatorClickBound)
                        })
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var e = this;
                        this.options.indicators && this.$indicators.each(function(t) {
                            t.removeEventListener("click", e._handleIndicatorClickBound)
                        })
                    }
                }, {
                    key: "_handleIndicatorClick",
                    value: function(t) {
                        var n = e(t.target).index();
                        this.set(n)
                    }
                }, {
                    key: "_handleInterval",
                    value: function() {
                        var e = this.$slider.find(".active").index();
                        this.$slides.length === e + 1 ? e = 0 : e += 1,
                        this.set(e)
                    }
                }, {
                    key: "_animateCaptionIn",
                    value: function(n, i) {
                        var o = {
                            targets: n,
                            opacity: 0,
                            duration: i,
                            easing: "easeOutQuad"
                        };
                        e(n).hasClass("center-align") ? o.translateY = -100 : e(n).hasClass("right-align") ? o.translateX = 100 : e(n).hasClass("left-align") && (o.translateX = -100),
                        t(o)
                    }
                }, {
                    key: "_setSliderHeight",
                    value: function() {
                        this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"),
                        this.$slider.css("height", this.options.height + "px"))
                    }
                }, {
                    key: "_setupIndicators",
                    value: function() {
                        var t = this;
                        this.options.indicators && (this.$indicators = e('<ul class="indicators"></ul>'),
                        this.$slides.each(function(n, i) {
                            var o = e('<li class="indicator-item"></li>');
                            t.$indicators.append(o[0])
                        }),
                        this.$el.append(this.$indicators[0]),
                        this.$indicators = this.$indicators.children("li.indicator-item"))
                    }
                }, {
                    key: "_removeIndicators",
                    value: function() {
                        this.$el.find("ul.indicators").remove()
                    }
                }, {
                    key: "set",
                    value: function(e) {
                        var n = this;
                        if (e >= this.$slides.length ? e = 0 : e < 0 && (e = this.$slides.length - 1),
                        this.activeIndex != e) {
                            this.$active = this.$slides.eq(this.activeIndex);
                            var i = this.$active.find(".caption");
                            this.$active.removeClass("active"),
                            t({
                                targets: this.$active[0],
                                opacity: 0,
                                duration: this.options.duration,
                                easing: "easeOutQuad",
                                complete: function() {
                                    n.$slides.not(".active").each(function(e) {
                                        t({
                                            targets: e,
                                            opacity: 0,
                                            translateX: 0,
                                            translateY: 0,
                                            duration: 0,
                                            easing: "easeOutQuad"
                                        })
                                    })
                                }
                            }),
                            this._animateCaptionIn(i[0], this.options.duration),
                            this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"),
                            this.$indicators.eq(e).addClass("active")),
                            t({
                                targets: this.$slides.eq(e)[0],
                                opacity: 1,
                                duration: this.options.duration,
                                easing: "easeOutQuad"
                            }),
                            t({
                                targets: this.$slides.eq(e).find(".caption")[0],
                                opacity: 1,
                                translateX: 0,
                                translateY: 0,
                                duration: this.options.duration,
                                delay: this.options.duration,
                                easing: "easeOutQuad"
                            }),
                            this.$slides.eq(e).addClass("active"),
                            this.activeIndex = e,
                            this.start()
                        }
                    }
                }, {
                    key: "pause",
                    value: function() {
                        clearInterval(this.interval)
                    }
                }, {
                    key: "start",
                    value: function() {
                        clearInterval(this.interval),
                        this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval)
                    }
                }, {
                    key: "next",
                    value: function() {
                        var e = this.activeIndex + 1;
                        e >= this.$slides.length ? e = 0 : e < 0 && (e = this.$slides.length - 1),
                        this.set(e)
                    }
                }, {
                    key: "prev",
                    value: function() {
                        var e = this.activeIndex - 1;
                        e >= this.$slides.length ? e = 0 : e < 0 && (e = this.$slides.length - 1),
                        this.set(e)
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Slider
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            M.Slider = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "slider", "M_Slider")
        }(cash, M.anime),
        function(e, t) {
            e(document).on("click", ".card", function(n) {
                if (e(this).children(".card-reveal").length) {
                    var i = e(n.target).closest(".card");
                    void 0 === i.data("initialOverflow") && i.data("initialOverflow", void 0 === i.css("overflow") ? "" : i.css("overflow"));
                    var o = e(this).find(".card-reveal");
                    e(n.target).is(e(".card-reveal .card-title")) || e(n.target).is(e(".card-reveal .card-title i")) ? t({
                        targets: o[0],
                        translateY: 0,
                        duration: 225,
                        easing: "easeInOutQuad",
                        complete: function(t) {
                            var n = t.animatables[0].target;
                            e(n).css({
                                display: "none"
                            }),
                            i.css("overflow", i.data("initialOverflow"))
                        }
                    }) : (e(n.target).is(e(".card .activator")) || e(n.target).is(e(".card .activator i"))) && (i.css("overflow", "hidden"),
                    o.css({
                        display: "block"
                    }),
                    t({
                        targets: o[0],
                        translateY: "-100%",
                        duration: 300,
                        easing: "easeInOutQuad"
                    }))
                }
            })
        }(cash, M.anime),
        function(e) {
            "use strict";
            var t = {
                data: [],
                placeholder: "",
                secondaryPlaceholder: "",
                autocompleteOptions: {},
                limit: 1 / 0,
                onChipAdd: null,
                onChipSelect: null,
                onChipDelete: null
            }
              , n = function(n) {
                function i(t, n) {
                    u(this, i);
                    var o = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
                    return o.el.M_Chips = o,
                    o.options = e.extend({}, i.defaults, n),
                    o.$el.addClass("chips input-field"),
                    o.chipsData = [],
                    o.$chips = e(),
                    o._setupInput(),
                    o.hasAutocomplete = Object.keys(o.options.autocompleteOptions).length > 0,
                    o.$input.attr("id") || o.$input.attr("id", M.guid()),
                    o.options.data.length && (o.chipsData = o.options.data,
                    o._renderChips(o.chipsData)),
                    o.hasAutocomplete && o._setupAutocomplete(),
                    o._setPlaceholder(),
                    o._setupLabel(),
                    o._setupEventHandlers(),
                    o
                }
                return l(i, c),
                r(i, [{
                    key: "getData",
                    value: function() {
                        return this.chipsData
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.$chips.remove(),
                        this.el.M_Chips = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleChipClickBound = this._handleChipClick.bind(this),
                        this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                        this._handleInputFocusBound = this._handleInputFocus.bind(this),
                        this._handleInputBlurBound = this._handleInputBlur.bind(this),
                        this.el.addEventListener("click", this._handleChipClickBound),
                        document.addEventListener("keydown", i._handleChipsKeydown),
                        document.addEventListener("keyup", i._handleChipsKeyup),
                        this.el.addEventListener("blur", i._handleChipsBlur, !0),
                        this.$input[0].addEventListener("focus", this._handleInputFocusBound),
                        this.$input[0].addEventListener("blur", this._handleInputBlurBound),
                        this.$input[0].addEventListener("keydown", this._handleInputKeydownBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleChipClickBound),
                        document.removeEventListener("keydown", i._handleChipsKeydown),
                        document.removeEventListener("keyup", i._handleChipsKeyup),
                        this.el.removeEventListener("blur", i._handleChipsBlur, !0),
                        this.$input[0].removeEventListener("focus", this._handleInputFocusBound),
                        this.$input[0].removeEventListener("blur", this._handleInputBlurBound),
                        this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound)
                    }
                }, {
                    key: "_handleChipClick",
                    value: function(t) {
                        var n = e(t.target).closest(".chip")
                          , i = e(t.target).is(".close");
                        if (n.length) {
                            var o = n.index();
                            i ? (this.deleteChip(o),
                            this.$input[0].focus()) : this.selectChip(o)
                        } else
                            this.$input[0].focus()
                    }
                }, {
                    key: "_handleInputFocus",
                    value: function() {
                        this.$el.addClass("focus")
                    }
                }, {
                    key: "_handleInputBlur",
                    value: function() {
                        this.$el.removeClass("focus")
                    }
                }, {
                    key: "_handleInputKeydown",
                    value: function(e) {
                        if (i._keydown = !0,
                        13 === e.keyCode) {
                            if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen)
                                return;
                            e.preventDefault(),
                            this.addChip({
                                tag: this.$input[0].value
                            }),
                            this.$input[0].value = ""
                        } else
                            8 !== e.keyCode && 37 !== e.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (e.preventDefault(),
                            this.selectChip(this.chipsData.length - 1))
                    }
                }, {
                    key: "_renderChip",
                    value: function(t) {
                        if (t.tag) {
                            var n = document.createElement("div")
                              , i = document.createElement("i");
                            if (n.classList.add("chip"),
                            n.textContent = t.tag,
                            n.setAttribute("tabindex", 0),
                            e(i).addClass("material-icons close"),
                            i.textContent = "close",
                            t.image) {
                                var o = document.createElement("img");
                                o.setAttribute("src", t.image),
                                n.insertBefore(o, n.firstChild)
                            }
                            return n.appendChild(i),
                            n
                        }
                    }
                }, {
                    key: "_renderChips",
                    value: function() {
                        this.$chips.remove();
                        for (var e = 0; e < this.chipsData.length; e++) {
                            var t = this._renderChip(this.chipsData[e]);
                            this.$el.append(t),
                            this.$chips.add(t)
                        }
                        this.$el.append(this.$input[0])
                    }
                }, {
                    key: "_setupAutocomplete",
                    value: function() {
                        var e = this;
                        this.options.autocompleteOptions.onAutocomplete = function(t) {
                            e.addChip({
                                tag: t
                            }),
                            e.$input[0].value = "",
                            e.$input[0].focus()
                        }
                        ,
                        this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions)
                    }
                }, {
                    key: "_setupInput",
                    value: function() {
                        this.$input = this.$el.find("input"),
                        this.$input.length || (this.$input = e("<input></input>"),
                        this.$el.append(this.$input)),
                        this.$input.addClass("input")
                    }
                }, {
                    key: "_setupLabel",
                    value: function() {
                        this.$label = this.$el.find("label"),
                        this.$label.length && this.$label.setAttribute("for", this.$input.attr("id"))
                    }
                }, {
                    key: "_setPlaceholder",
                    value: function() {
                        void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? e(this.$input).prop("placeholder", this.options.placeholder) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && e(this.$input).prop("placeholder", this.options.secondaryPlaceholder)
                    }
                }, {
                    key: "_isValid",
                    value: function(e) {
                        if (e.hasOwnProperty("tag") && "" !== e.tag) {
                            for (var t = !1, n = 0; n < this.chipsData.length; n++)
                                if (this.chipsData[n].tag === e.tag) {
                                    t = !0;
                                    break
                                }
                            return !t
                        }
                        return !1
                    }
                }, {
                    key: "addChip",
                    value: function(t) {
                        if (this._isValid(t) && !(this.chipsData.length >= this.options.limit)) {
                            var n = this._renderChip(t);
                            this.$chips.add(n),
                            this.chipsData.push(t),
                            e(this.$input).before(n),
                            this._setPlaceholder(),
                            "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, n)
                        }
                    }
                }, {
                    key: "deleteChip",
                    value: function(t) {
                        var n = this.$chips.eq(t);
                        this.$chips.eq(t).remove(),
                        this.$chips = this.$chips.filter(function(t) {
                            return e(t).index() >= 0
                        }),
                        this.chipsData.splice(t, 1),
                        this._setPlaceholder(),
                        "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, n[0])
                    }
                }, {
                    key: "selectChip",
                    value: function(e) {
                        var t = this.$chips.eq(e);
                        this._selectedChip = t,
                        t[0].focus(),
                        "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, t[0])
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Chips
                    }
                }, {
                    key: "_handleChipsKeydown",
                    value: function(t) {
                        i._keydown = !0;
                        var n = e(t.target).closest(".chips")
                          , o = t.target && n.length;
                        if (!e(t.target).is("input, textarea") && o) {
                            var a = n[0].M_Chips;
                            if (8 === t.keyCode || 46 === t.keyCode) {
                                t.preventDefault();
                                var r = a.chipsData.length;
                                if (a._selectedChip) {
                                    var s = a._selectedChip.index();
                                    a.deleteChip(s),
                                    a._selectedChip = null,
                                    r = Math.max(s - 1, 0)
                                }
                                a.chipsData.length && a.selectChip(r)
                            } else if (37 === t.keyCode) {
                                if (a._selectedChip) {
                                    var l = a._selectedChip.index() - 1;
                                    if (l < 0)
                                        return;
                                    a.selectChip(l)
                                }
                            } else if (39 === t.keyCode && a._selectedChip) {
                                var u = a._selectedChip.index() + 1;
                                u >= a.chipsData.length ? a.$input[0].focus() : a.selectChip(u)
                            }
                        }
                    }
                }, {
                    key: "_handleChipsKeyup",
                    value: function(e) {
                        i._keydown = !1
                    }
                }, {
                    key: "_handleChipsBlur",
                    value: function(t) {
                        i._keydown || (e(t.target).closest(".chips")[0].M_Chips._selectedChip = null)
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return t
                    }
                }]),
                i
            }();
            n._keydown = !1,
            M.Chips = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "chips", "M_Chips"),
            e(document).ready(function() {
                e(document.body).on("click", ".chip .close", function() {
                    var t = e(this).closest(".chips");
                    t.length && t[0].M_Chips || e(this).closest(".chip").remove()
                })
            })
        }(cash),
        function(e) {
            "use strict";
            var t = {
                top: 0,
                bottom: 1 / 0,
                offset: 0,
                onPositionChange: null
            }
              , n = function(n) {
                function i(t, n) {
                    u(this, i);
                    var o = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
                    return o.el.M_Pushpin = o,
                    o.options = e.extend({}, i.defaults, n),
                    o.originalOffset = o.el.offsetTop,
                    i._pushpins.push(o),
                    o._setupEventHandlers(),
                    o._updatePosition(),
                    o
                }
                return l(i, c),
                r(i, [{
                    key: "destroy",
                    value: function() {
                        this.el.style.top = null,
                        this._removePinClasses(),
                        this._removeEventHandlers();
                        var e = i._pushpins.indexOf(this);
                        i._pushpins.splice(e, 1)
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        document.addEventListener("scroll", i._updateElements)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        document.removeEventListener("scroll", i._updateElements)
                    }
                }, {
                    key: "_updatePosition",
                    value: function() {
                        var e = M.getDocumentScrollTop() + this.options.offset;
                        this.options.top <= e && this.options.bottom >= e && !this.el.classList.contains("pinned") && (this._removePinClasses(),
                        this.el.style.top = this.options.offset + "px",
                        this.el.classList.add("pinned"),
                        "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")),
                        e < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(),
                        this.el.style.top = 0,
                        this.el.classList.add("pin-top"),
                        "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")),
                        e > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(),
                        this.el.classList.add("pin-bottom"),
                        this.el.style.top = this.options.bottom - this.originalOffset + "px",
                        "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-bottom"))
                    }
                }, {
                    key: "_removePinClasses",
                    value: function() {
                        this.el.classList.remove("pin-top"),
                        this.el.classList.remove("pinned"),
                        this.el.classList.remove("pin-bottom")
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Pushpin
                    }
                }, {
                    key: "_updateElements",
                    value: function() {
                        for (var e in i._pushpins) {
                            i._pushpins[e]._updatePosition()
                        }
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return t
                    }
                }]),
                i
            }();
            n._pushpins = [],
            M.Pushpin = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "pushpin", "M_Pushpin")
        }(cash),
        function(e, t) {
            "use strict";
            var n = {
                direction: "top",
                hoverEnabled: !0,
                toolbarEnabled: !1
            };
            e.fn.reverse = [].reverse;
            var i = function(i) {
                function o(t, n) {
                    u(this, o);
                    var i = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, t, n));
                    return i.el.M_FloatingActionButton = i,
                    i.options = e.extend({}, o.defaults, n),
                    i.isOpen = !1,
                    i.$anchor = i.$el.children("a").first(),
                    i.$menu = i.$el.children("ul").first(),
                    i.$floatingBtns = i.$el.find("ul .btn-floating"),
                    i.$floatingBtnsReverse = i.$el.find("ul .btn-floating").reverse(),
                    i.offsetY = 0,
                    i.offsetX = 0,
                    i.$el.addClass("direction-" + i.options.direction),
                    "top" === i.options.direction ? i.offsetY = 40 : "right" === i.options.direction ? i.offsetX = -40 : "bottom" === i.options.direction ? i.offsetY = -40 : i.offsetX = 40,
                    i._setupEventHandlers(),
                    i
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_FloatingActionButton = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleFABClickBound = this._handleFABClick.bind(this),
                        this._handleOpenBound = this.open.bind(this),
                        this._handleCloseBound = this.close.bind(this),
                        this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound),
                        this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound),
                        this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound)
                    }
                }, {
                    key: "_handleFABClick",
                    value: function() {
                        this.isOpen ? this.close() : this.open()
                    }
                }, {
                    key: "_handleDocumentClick",
                    value: function(t) {
                        e(t.target).closest(this.$menu).length || this.close()
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(),
                        this.isOpen = !0)
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, !0),
                        document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                        this._animateOutToolbar()) : this._animateOutFAB(),
                        this.isOpen = !1)
                    }
                }, {
                    key: "_animateInFAB",
                    value: function() {
                        var e = this;
                        this.$el.addClass("active");
                        var n = 0;
                        this.$floatingBtnsReverse.each(function(i) {
                            t({
                                targets: i,
                                opacity: 1,
                                scale: [.4, 1],
                                translateY: [e.offsetY, 0],
                                translateX: [e.offsetX, 0],
                                duration: 275,
                                delay: n,
                                easing: "easeInOutQuad"
                            }),
                            n += 40
                        })
                    }
                }, {
                    key: "_animateOutFAB",
                    value: function() {
                        var e = this;
                        this.$floatingBtnsReverse.each(function(n) {
                            t.remove(n),
                            t({
                                targets: n,
                                opacity: 0,
                                scale: .4,
                                translateY: e.offsetY,
                                translateX: e.offsetX,
                                duration: 175,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e.$el.removeClass("active")
                                }
                            })
                        })
                    }
                }, {
                    key: "_animateInToolbar",
                    value: function() {
                        var t, n = this, i = window.innerWidth, o = window.innerHeight, a = this.el.getBoundingClientRect(), r = e('<div class="fab-backdrop"></div>'), s = this.$anchor.css("background-color");
                        this.$anchor.append(r),
                        this.offsetX = a.left - i / 2 + a.width / 2,
                        this.offsetY = o - a.bottom,
                        t = i / r[0].clientWidth,
                        this.btnBottom = a.bottom,
                        this.btnLeft = a.left,
                        this.btnWidth = a.width,
                        this.$el.addClass("active"),
                        this.$el.css({
                            "text-align": "center",
                            width: "100%",
                            bottom: 0,
                            left: 0,
                            transform: "translateX(" + this.offsetX + "px)",
                            transition: "none"
                        }),
                        this.$anchor.css({
                            transform: "translateY(" + -this.offsetY + "px)",
                            transition: "none"
                        }),
                        r.css({
                            "background-color": s
                        }),
                        setTimeout(function() {
                            n.$el.css({
                                transform: "",
                                transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                            }),
                            n.$anchor.css({
                                overflow: "visible",
                                transform: "",
                                transition: "transform .2s"
                            }),
                            setTimeout(function() {
                                n.$el.css({
                                    overflow: "hidden",
                                    "background-color": s
                                }),
                                r.css({
                                    transform: "scale(" + t + ")",
                                    transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                                }),
                                n.$menu.children("li").children("a").css({
                                    opacity: 1
                                }),
                                n._handleDocumentClickBound = n._handleDocumentClick.bind(n),
                                window.addEventListener("scroll", n._handleCloseBound, !0),
                                document.body.addEventListener("click", n._handleDocumentClickBound, !0)
                            }, 100)
                        }, 0)
                    }
                }, {
                    key: "_animateOutToolbar",
                    value: function() {
                        var e = this
                          , t = window.innerWidth
                          , n = window.innerHeight
                          , i = this.$el.find(".fab-backdrop")
                          , o = this.$anchor.css("background-color");
                        this.offsetX = this.btnLeft - t / 2 + this.btnWidth / 2,
                        this.offsetY = n - this.btnBottom,
                        this.$el.removeClass("active"),
                        this.$el.css({
                            "background-color": "transparent",
                            transition: "none"
                        }),
                        this.$anchor.css({
                            transition: "none"
                        }),
                        i.css({
                            transform: "scale(0)",
                            "background-color": o
                        }),
                        this.$menu.children("li").children("a").css({
                            opacity: ""
                        }),
                        setTimeout(function() {
                            i.remove(),
                            e.$el.css({
                                "text-align": "",
                                width: "",
                                bottom: "",
                                left: "",
                                overflow: "",
                                "background-color": "",
                                transform: "translate3d(" + -e.offsetX + "px,0,0)"
                            }),
                            e.$anchor.css({
                                overflow: "",
                                transform: "translate3d(0," + e.offsetY + "px,0)"
                            }),
                            setTimeout(function() {
                                e.$el.css({
                                    transform: "translate3d(0,0,0)",
                                    transition: "transform .2s"
                                }),
                                e.$anchor.css({
                                    transform: "translate3d(0,0,0)",
                                    transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                                })
                            }, 20)
                        }, 200)
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_FloatingActionButton
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            M.FloatingActionButton = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "floatingActionButton", "M_FloatingActionButton")
        }(cash, M.anime),
        function(e) {
            "use strict";
            var t = {
                autoClose: !1,
                format: "mmm dd, yyyy",
                parse: null,
                defaultDate: null,
                setDefaultDate: !1,
                disableWeekends: !1,
                disableDayFn: null,
                firstDay: 0,
                minDate: null,
                maxDate: null,
                yearRange: 10,
                minYear: 0,
                maxYear: 9999,
                minMonth: void 0,
                maxMonth: void 0,
                startRange: null,
                endRange: null,
                isRTL: !1,
                showMonthAfterYear: !1,
                showDaysInNextAndPreviousMonths: !1,
                container: null,
                showClearBtn: !1,
                i18n: {
                    cancel: "Cancel",
                    clear: "Clear",
                    done: "Ok",
                    previousMonth: "‹",
                    nextMonth: "›",
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]
                },
                events: [],
                onSelect: null,
                onOpen: null,
                onClose: null,
                onDraw: null
            }
              , n = function(n) {
                function i(t, n) {
                    u(this, i);
                    var a = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
                    a.el.M_Datepicker = a,
                    a.options = e.extend({}, i.defaults, n),
                    n && n.hasOwnProperty("i18n") && "object" === o(n.i18n) && (a.options.i18n = e.extend({}, i.defaults.i18n, n.i18n)),
                    a.options.minDate && a.options.minDate.setHours(0, 0, 0, 0),
                    a.options.maxDate && a.options.maxDate.setHours(0, 0, 0, 0),
                    a.id = M.guid(),
                    a._setupVariables(),
                    a._insertHTMLIntoDOM(),
                    a._setupModal(),
                    a._setupEventHandlers(),
                    a.options.defaultDate || (a.options.defaultDate = new Date(Date.parse(a.el.value)));
                    var r = a.options.defaultDate;
                    return i._isDate(r) ? a.options.setDefaultDate ? (a.setDate(r, !0),
                    a.setInputValue()) : a.gotoDate(r) : a.gotoDate(new Date),
                    a.isOpen = !1,
                    a
                }
                return l(i, c),
                r(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.modal.destroy(),
                        e(this.modalEl).remove(),
                        this.destroySelects(),
                        this.el.M_Datepicker = void 0
                    }
                }, {
                    key: "destroySelects",
                    value: function() {
                        var e = this.calendarEl.querySelector(".orig-select-year");
                        e && M.FormSelect.getInstance(e).destroy();
                        var t = this.calendarEl.querySelector(".orig-select-month");
                        t && M.FormSelect.getInstance(t).destroy()
                    }
                }, {
                    key: "_insertHTMLIntoDOM",
                    value: function() {
                        this.options.showClearBtn && (e(this.clearBtn).css({
                            visibility: ""
                        }),
                        this.clearBtn.innerHTML = this.options.i18n.clear),
                        this.doneBtn.innerHTML = this.options.i18n.done,
                        this.cancelBtn.innerHTML = this.options.i18n.cancel,
                        this.options.container ? this.$modalEl.appendTo(this.options.container) : this.$modalEl.insertBefore(this.el)
                    }
                }, {
                    key: "_setupModal",
                    value: function() {
                        var e = this;
                        this.modalEl.id = "modal-" + this.id,
                        this.modal = M.Modal.init(this.modalEl, {
                            onCloseEnd: function() {
                                e.isOpen = !1
                            }
                        })
                    }
                }, {
                    key: "toString",
                    value: function(e) {
                        var t = this;
                        return e = e || this.options.format,
                        i._isDate(this.date) ? e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(e) {
                            return t.formats[e] ? t.formats[e]() : e
                        }).join("") : ""
                    }
                }, {
                    key: "setDate",
                    value: function(e, t) {
                        if (!e)
                            return this.date = null,
                            this._renderDateDisplay(),
                            this.draw();
                        if ("string" == typeof e && (e = new Date(Date.parse(e))),
                        i._isDate(e)) {
                            var n = this.options.minDate
                              , o = this.options.maxDate;
                            i._isDate(n) && e < n ? e = n : i._isDate(o) && e > o && (e = o),
                            this.date = new Date(e.getTime()),
                            this._renderDateDisplay(),
                            i._setToStartOfDay(this.date),
                            this.gotoDate(this.date),
                            t || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date)
                        }
                    }
                }, {
                    key: "setInputValue",
                    value: function() {
                        this.el.value = this.toString(),
                        this.$el.trigger("change", {
                            firedBy: this
                        })
                    }
                }, {
                    key: "_renderDateDisplay",
                    value: function() {
                        var e = i._isDate(this.date) ? this.date : new Date
                          , t = this.options.i18n
                          , n = t.weekdaysShort[e.getDay()]
                          , o = t.monthsShort[e.getMonth()]
                          , a = e.getDate();
                        this.yearTextEl.innerHTML = e.getFullYear(),
                        this.dateTextEl.innerHTML = n + ", " + o + " " + a
                    }
                }, {
                    key: "gotoDate",
                    value: function(e) {
                        var t = !0;
                        if (i._isDate(e)) {
                            if (this.calendars) {
                                var n = new Date(this.calendars[0].year,this.calendars[0].month,1)
                                  , o = new Date(this.calendars[this.calendars.length - 1].year,this.calendars[this.calendars.length - 1].month,1)
                                  , a = e.getTime();
                                o.setMonth(o.getMonth() + 1),
                                o.setDate(o.getDate() - 1),
                                t = a < n.getTime() || o.getTime() < a
                            }
                            t && (this.calendars = [{
                                month: e.getMonth(),
                                year: e.getFullYear()
                            }]),
                            this.adjustCalendars()
                        }
                    }
                }, {
                    key: "adjustCalendars",
                    value: function() {
                        this.calendars[0] = this.adjustCalendar(this.calendars[0]),
                        this.draw()
                    }
                }, {
                    key: "adjustCalendar",
                    value: function(e) {
                        return e.month < 0 && (e.year -= Math.ceil(Math.abs(e.month) / 12),
                        e.month += 12),
                        e.month > 11 && (e.year += Math.floor(Math.abs(e.month) / 12),
                        e.month -= 12),
                        e
                    }
                }, {
                    key: "nextMonth",
                    value: function() {
                        this.calendars[0].month++,
                        this.adjustCalendars()
                    }
                }, {
                    key: "prevMonth",
                    value: function() {
                        this.calendars[0].month--,
                        this.adjustCalendars()
                    }
                }, {
                    key: "render",
                    value: function(e, t, n) {
                        var o = this.options
                          , a = new Date
                          , r = i._getDaysInMonth(e, t)
                          , s = new Date(e,t,1).getDay()
                          , l = []
                          , u = [];
                        i._setToStartOfDay(a),
                        o.firstDay > 0 && (s -= o.firstDay) < 0 && (s += 7);
                        for (var c = 0 === t ? 11 : t - 1, d = 11 === t ? 0 : t + 1, h = 0 === t ? e - 1 : e, p = 11 === t ? e + 1 : e, f = i._getDaysInMonth(h, c), v = r + s, g = v; g > 7; )
                            g -= 7;
                        v += 7 - g;
                        for (var m = !1, y = 0, b = 0; y < v; y++) {
                            var _ = new Date(e,t,y - s + 1)
                              , w = !!i._isDate(this.date) && i._compareDates(_, this.date)
                              , C = i._compareDates(_, a)
                              , x = -1 !== o.events.indexOf(_.toDateString())
                              , k = y < s || y >= r + s
                              , T = y - s + 1
                              , D = t
                              , S = e
                              , E = o.startRange && i._compareDates(o.startRange, _)
                              , M = o.endRange && i._compareDates(o.endRange, _)
                              , L = o.startRange && o.endRange && o.startRange < _ && _ < o.endRange
                              , O = o.minDate && _ < o.minDate || o.maxDate && _ > o.maxDate || o.disableWeekends && i._isWeekend(_) || o.disableDayFn && o.disableDayFn(_);
                            k && (y < s ? (T = f + T,
                            D = c,
                            S = h) : (T -= r,
                            D = d,
                            S = p));
                            var A = {
                                day: T,
                                month: D,
                                year: S,
                                hasEvent: x,
                                isSelected: w,
                                isToday: C,
                                isDisabled: O,
                                isEmpty: k,
                                isStartRange: E,
                                isEndRange: M,
                                isInRange: L,
                                showDaysInNextAndPreviousMonths: o.showDaysInNextAndPreviousMonths
                            };
                            u.push(this.renderDay(A)),
                            7 == ++b && (l.push(this.renderRow(u, o.isRTL, m)),
                            u = [],
                            b = 0,
                            m = !1)
                        }
                        return this.renderTable(o, l, n)
                    }
                }, {
                    key: "renderDay",
                    value: function(e) {
                        var t = []
                          , n = "false";
                        if (e.isEmpty) {
                            if (!e.showDaysInNextAndPreviousMonths)
                                return '<td class="is-empty"></td>';
                            t.push("is-outside-current-month"),
                            t.push("is-selection-disabled")
                        }
                        return e.isDisabled && t.push("is-disabled"),
                        e.isToday && t.push("is-today"),
                        e.isSelected && (t.push("is-selected"),
                        n = "true"),
                        e.hasEvent && t.push("has-event"),
                        e.isInRange && t.push("is-inrange"),
                        e.isStartRange && t.push("is-startrange"),
                        e.isEndRange && t.push("is-endrange"),
                        '<td data-day="' + e.day + '" class="' + t.join(" ") + '" aria-selected="' + n + '"><button class="datepicker-day-button" type="button" data-year="' + e.year + '" data-month="' + e.month + '" data-day="' + e.day + '">' + e.day + "</button></td>"
                    }
                }, {
                    key: "renderRow",
                    value: function(e, t, n) {
                        return '<tr class="datepicker-row' + (n ? " is-selected" : "") + '">' + (t ? e.reverse() : e).join("") + "</tr>"
                    }
                }, {
                    key: "renderTable",
                    value: function(e, t, n) {
                        return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + n + '">' + this.renderHead(e) + this.renderBody(t) + "</table></div>"
                    }
                }, {
                    key: "renderHead",
                    value: function(e) {
                        var t = void 0
                          , n = [];
                        for (t = 0; t < 7; t++)
                            n.push('<th scope="col"><abbr title="' + this.renderDayName(e, t) + '">' + this.renderDayName(e, t, !0) + "</abbr></th>");
                        return "<thead><tr>" + (e.isRTL ? n.reverse() : n).join("") + "</tr></thead>"
                    }
                }, {
                    key: "renderBody",
                    value: function(e) {
                        return "<tbody>" + e.join("") + "</tbody>"
                    }
                }, {
                    key: "renderTitle",
                    value: function(t, n, i, o, a, r) {
                        var s, l, u = void 0, c = void 0, d = void 0, h = this.options, p = i === h.minYear, f = i === h.maxYear, v = '<div id="' + r + '" class="datepicker-controls" role="heading" aria-live="assertive">', g = !0, m = !0;
                        for (d = [],
                        u = 0; u < 12; u++)
                            d.push('<option value="' + (i === a ? u - n : 12 + u - n) + '"' + (u === o ? ' selected="selected"' : "") + (p && u < h.minMonth || f && u > h.maxMonth ? 'disabled="disabled"' : "") + ">" + h.i18n.months[u] + "</option>");
                        for (s = '<select class="datepicker-select orig-select-month" tabindex="-1">' + d.join("") + "</select>",
                        e.isArray(h.yearRange) ? (u = h.yearRange[0],
                        c = h.yearRange[1] + 1) : (u = i - h.yearRange,
                        c = 1 + i + h.yearRange),
                        d = []; u < c && u <= h.maxYear; u++)
                            u >= h.minYear && d.push('<option value="' + u + '" ' + (u === i ? 'selected="selected"' : "") + ">" + u + "</option>");
                        l = '<select class="datepicker-select orig-select-year" tabindex="-1">' + d.join("") + "</select>";
                        v += '<button class="month-prev' + (g ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>',
                        v += '<div class="selects-container">',
                        h.showMonthAfterYear ? v += l + s : v += s + l,
                        v += "</div>",
                        p && (0 === o || h.minMonth >= o) && (g = !1),
                        f && (11 === o || h.maxMonth <= o) && (m = !1);
                        return (v += '<button class="month-next' + (m ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>"
                    }
                }, {
                    key: "draw",
                    value: function(e) {
                        if (this.isOpen || e) {
                            var t, n = this.options, i = n.minYear, o = n.maxYear, a = n.minMonth, r = n.maxMonth, s = "";
                            this._y <= i && (this._y = i,
                            !isNaN(a) && this._m < a && (this._m = a)),
                            this._y >= o && (this._y = o,
                            !isNaN(r) && this._m > r && (this._m = r)),
                            t = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                            for (var l = 0; l < 1; l++)
                                this._renderDateDisplay(),
                                s += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, t) + this.render(this.calendars[l].year, this.calendars[l].month, t);
                            this.destroySelects(),
                            this.calendarEl.innerHTML = s;
                            var u = this.calendarEl.querySelector(".orig-select-year")
                              , c = this.calendarEl.querySelector(".orig-select-month");
                            M.FormSelect.init(u, {
                                classes: "select-year",
                                dropdownOptions: {
                                    container: document.body,
                                    constrainWidth: !1
                                }
                            }),
                            M.FormSelect.init(c, {
                                classes: "select-month",
                                dropdownOptions: {
                                    container: document.body,
                                    constrainWidth: !1
                                }
                            }),
                            u.addEventListener("change", this._handleYearChange.bind(this)),
                            c.addEventListener("change", this._handleMonthChange.bind(this)),
                            "function" == typeof this.options.onDraw && this.options.onDraw(this)
                        }
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                        this._handleInputClickBound = this._handleInputClick.bind(this),
                        this._handleInputChangeBound = this._handleInputChange.bind(this),
                        this._handleCalendarClickBound = this._handleCalendarClick.bind(this),
                        this._finishSelectionBound = this._finishSelection.bind(this),
                        this._handleMonthChange = this._handleMonthChange.bind(this),
                        this._closeBound = this.close.bind(this),
                        this.el.addEventListener("click", this._handleInputClickBound),
                        this.el.addEventListener("keydown", this._handleInputKeydownBound),
                        this.el.addEventListener("change", this._handleInputChangeBound),
                        this.calendarEl.addEventListener("click", this._handleCalendarClickBound),
                        this.doneBtn.addEventListener("click", this._finishSelectionBound),
                        this.cancelBtn.addEventListener("click", this._closeBound),
                        this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind(this),
                        this.clearBtn.addEventListener("click", this._handleClearClickBound))
                    }
                }, {
                    key: "_setupVariables",
                    value: function() {
                        var t = this;
                        this.$modalEl = e(i._template),
                        this.modalEl = this.$modalEl[0],
                        this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"),
                        this.yearTextEl = this.modalEl.querySelector(".year-text"),
                        this.dateTextEl = this.modalEl.querySelector(".date-text"),
                        this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")),
                        this.doneBtn = this.modalEl.querySelector(".datepicker-done"),
                        this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"),
                        this.formats = {
                            d: function() {
                                return t.date.getDate()
                            },
                            dd: function() {
                                var e = t.date.getDate();
                                return (e < 10 ? "0" : "") + e
                            },
                            ddd: function() {
                                return t.options.i18n.weekdaysShort[t.date.getDay()]
                            },
                            dddd: function() {
                                return t.options.i18n.weekdays[t.date.getDay()]
                            },
                            m: function() {
                                return t.date.getMonth() + 1
                            },
                            mm: function() {
                                var e = t.date.getMonth() + 1;
                                return (e < 10 ? "0" : "") + e
                            },
                            mmm: function() {
                                return t.options.i18n.monthsShort[t.date.getMonth()]
                            },
                            mmmm: function() {
                                return t.options.i18n.months[t.date.getMonth()]
                            },
                            yy: function() {
                                return ("" + t.date.getFullYear()).slice(2)
                            },
                            yyyy: function() {
                                return t.date.getFullYear()
                            }
                        }
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleInputClickBound),
                        this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                        this.el.removeEventListener("change", this._handleInputChangeBound),
                        this.calendarEl.removeEventListener("click", this._handleCalendarClickBound)
                    }
                }, {
                    key: "_handleInputClick",
                    value: function() {
                        this.open()
                    }
                }, {
                    key: "_handleInputKeydown",
                    value: function(e) {
                        e.which === M.keys.ENTER && (e.preventDefault(),
                        this.open())
                    }
                }, {
                    key: "_handleCalendarClick",
                    value: function(t) {
                        if (this.isOpen) {
                            var n = e(t.target);
                            n.hasClass("is-disabled") || (!n.hasClass("datepicker-day-button") || n.hasClass("is-empty") || n.parent().hasClass("is-disabled") ? n.closest(".month-prev").length ? this.prevMonth() : n.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(t.target.getAttribute("data-year"),t.target.getAttribute("data-month"),t.target.getAttribute("data-day"))),
                            this.options.autoClose && this._finishSelection()))
                        }
                    }
                }, {
                    key: "_handleClearClick",
                    value: function() {
                        this.date = null,
                        this.setInputValue(),
                        this.close()
                    }
                }, {
                    key: "_handleMonthChange",
                    value: function(e) {
                        this.gotoMonth(e.target.value)
                    }
                }, {
                    key: "_handleYearChange",
                    value: function(e) {
                        this.gotoYear(e.target.value)
                    }
                }, {
                    key: "gotoMonth",
                    value: function(e) {
                        isNaN(e) || (this.calendars[0].month = parseInt(e, 10),
                        this.adjustCalendars())
                    }
                }, {
                    key: "gotoYear",
                    value: function(e) {
                        isNaN(e) || (this.calendars[0].year = parseInt(e, 10),
                        this.adjustCalendars())
                    }
                }, {
                    key: "_handleInputChange",
                    value: function(e) {
                        var t = void 0;
                        e.firedBy !== this && (t = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)),
                        i._isDate(t) && this.setDate(t))
                    }
                }, {
                    key: "renderDayName",
                    value: function(e, t, n) {
                        for (t += e.firstDay; t >= 7; )
                            t -= 7;
                        return n ? e.i18n.weekdaysAbbrev[t] : e.i18n.weekdays[t]
                    }
                }, {
                    key: "_finishSelection",
                    value: function() {
                        this.setInputValue(),
                        this.close()
                    }
                }, {
                    key: "open",
                    value: function() {
                        if (!this.isOpen)
                            return this.isOpen = !0,
                            "function" == typeof this.options.onOpen && this.options.onOpen.call(this),
                            this.draw(),
                            this.modal.open(),
                            this
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (this.isOpen)
                            return this.isOpen = !1,
                            "function" == typeof this.options.onClose && this.options.onClose.call(this),
                            this.modal.close(),
                            this
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "_isDate",
                    value: function(e) {
                        return /Date/.test(Object.prototype.toString.call(e)) && !isNaN(e.getTime())
                    }
                }, {
                    key: "_isWeekend",
                    value: function(e) {
                        var t = e.getDay();
                        return 0 === t || 6 === t
                    }
                }, {
                    key: "_setToStartOfDay",
                    value: function(e) {
                        i._isDate(e) && e.setHours(0, 0, 0, 0)
                    }
                }, {
                    key: "_getDaysInMonth",
                    value: function(e, t) {
                        return [31, i._isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
                    }
                }, {
                    key: "_isLeapYear",
                    value: function(e) {
                        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                    }
                }, {
                    key: "_compareDates",
                    value: function(e, t) {
                        return e.getTime() === t.getTime()
                    }
                }, {
                    key: "_setToStartOfDay",
                    value: function(e) {
                        i._isDate(e) && e.setHours(0, 0, 0, 0)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Datepicker
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return t
                    }
                }]),
                i
            }();
            n._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""),
            M.Datepicker = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "datepicker", "M_Datepicker")
        }(cash),
        function(e) {
            "use strict";
            var t = {
                dialRadius: 135,
                outerRadius: 105,
                innerRadius: 70,
                tickRadius: 20,
                duration: 350,
                container: null,
                defaultTime: "now",
                fromNow: 0,
                showClearBtn: !1,
                i18n: {
                    cancel: "Cancel",
                    clear: "Clear",
                    done: "Ok"
                },
                autoClose: !1,
                twelveHour: !0,
                vibrate: !0,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null,
                onSelect: null
            }
              , n = function(n) {
                function i(t, n) {
                    u(this, i);
                    var o = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
                    return o.el.M_Timepicker = o,
                    o.options = e.extend({}, i.defaults, n),
                    o.id = M.guid(),
                    o._insertHTMLIntoDOM(),
                    o._setupModal(),
                    o._setupVariables(),
                    o._setupEventHandlers(),
                    o._clockSetup(),
                    o._pickerSetup(),
                    o
                }
                return l(i, c),
                r(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.modal.destroy(),
                        e(this.modalEl).remove(),
                        this.el.M_Timepicker = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                        this._handleInputClickBound = this._handleInputClick.bind(this),
                        this._handleClockClickStartBound = this._handleClockClickStart.bind(this),
                        this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this),
                        this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this),
                        this.el.addEventListener("click", this._handleInputClickBound),
                        this.el.addEventListener("keydown", this._handleInputKeydownBound),
                        this.plate.addEventListener("mousedown", this._handleClockClickStartBound),
                        this.plate.addEventListener("touchstart", this._handleClockClickStartBound),
                        e(this.spanHours).on("click", this.showView.bind(this, "hours")),
                        e(this.spanMinutes).on("click", this.showView.bind(this, "minutes"))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleInputClickBound),
                        this.el.removeEventListener("keydown", this._handleInputKeydownBound)
                    }
                }, {
                    key: "_handleInputClick",
                    value: function() {
                        this.open()
                    }
                }, {
                    key: "_handleInputKeydown",
                    value: function(e) {
                        e.which === M.keys.ENTER && (e.preventDefault(),
                        this.open())
                    }
                }, {
                    key: "_handleClockClickStart",
                    value: function(e) {
                        e.preventDefault();
                        var t = this.plate.getBoundingClientRect()
                          , n = t.left
                          , o = t.top;
                        this.x0 = n + this.options.dialRadius,
                        this.y0 = o + this.options.dialRadius,
                        this.moved = !1;
                        var a = i._Pos(e);
                        this.dx = a.x - this.x0,
                        this.dy = a.y - this.y0,
                        this.setHand(this.dx, this.dy, !1),
                        document.addEventListener("mousemove", this._handleDocumentClickMoveBound),
                        document.addEventListener("touchmove", this._handleDocumentClickMoveBound),
                        document.addEventListener("mouseup", this._handleDocumentClickEndBound),
                        document.addEventListener("touchend", this._handleDocumentClickEndBound)
                    }
                }, {
                    key: "_handleDocumentClickMove",
                    value: function(e) {
                        e.preventDefault();
                        var t = i._Pos(e)
                          , n = t.x - this.x0
                          , o = t.y - this.y0;
                        this.moved = !0,
                        this.setHand(n, o, !1, !0)
                    }
                }, {
                    key: "_handleDocumentClickEnd",
                    value: function(t) {
                        var n = this;
                        t.preventDefault(),
                        document.removeEventListener("mouseup", this._handleDocumentClickEndBound),
                        document.removeEventListener("touchend", this._handleDocumentClickEndBound);
                        var o = i._Pos(t)
                          , a = o.x - this.x0
                          , r = o.y - this.y0;
                        this.moved && a === this.dx && r === this.dy && this.setHand(a, r),
                        "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (e(this.minutesView).addClass("timepicker-dial-out"),
                        setTimeout(function() {
                            n.done()
                        }, this.options.duration / 2)),
                        "function" == typeof this.options.onSelect && this.options.onSelect.call(this, this.hours, this.minutes),
                        document.removeEventListener("mousemove", this._handleDocumentClickMoveBound),
                        document.removeEventListener("touchmove", this._handleDocumentClickMoveBound)
                    }
                }, {
                    key: "_insertHTMLIntoDOM",
                    value: function() {
                        this.$modalEl = e(i._template),
                        this.modalEl = this.$modalEl[0],
                        this.modalEl.id = "modal-" + this.id;
                        var t = document.querySelector(this.options.container);
                        this.options.container && t ? this.$modalEl.appendTo(t) : this.$modalEl.insertBefore(this.el)
                    }
                }, {
                    key: "_setupModal",
                    value: function() {
                        var e = this;
                        this.modal = M.Modal.init(this.modalEl, {
                            onOpenStart: this.options.onOpenStart,
                            onOpenEnd: this.options.onOpenEnd,
                            onCloseStart: this.options.onCloseStart,
                            onCloseEnd: function() {
                                "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e),
                                e.isOpen = !1
                            }
                        })
                    }
                }, {
                    key: "_setupVariables",
                    value: function() {
                        this.currentView = "hours",
                        this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
                        this._canvas = this.modalEl.querySelector(".timepicker-canvas"),
                        this.plate = this.modalEl.querySelector(".timepicker-plate"),
                        this.hoursView = this.modalEl.querySelector(".timepicker-hours"),
                        this.minutesView = this.modalEl.querySelector(".timepicker-minutes"),
                        this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"),
                        this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"),
                        this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"),
                        this.footer = this.modalEl.querySelector(".timepicker-footer"),
                        this.amOrPm = "PM"
                    }
                }, {
                    key: "_pickerSetup",
                    value: function() {
                        var t = e('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
                        this.options.showClearBtn && t.css({
                            visibility: ""
                        });
                        var n = e('<div class="confirmation-btns"></div>');
                        e('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(n).on("click", this.close.bind(this)),
                        e('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(n).on("click", this.done.bind(this)),
                        n.appendTo(this.footer)
                    }
                }, {
                    key: "_clockSetup",
                    value: function() {
                        this.options.twelveHour && (this.$amBtn = e('<div class="am-btn">AM</div>'),
                        this.$pmBtn = e('<div class="pm-btn">PM</div>'),
                        this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm),
                        this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),
                        this._buildHoursView(),
                        this._buildMinutesView(),
                        this._buildSVGClock()
                    }
                }, {
                    key: "_buildSVGClock",
                    value: function() {
                        var e = this.options.dialRadius
                          , t = this.options.tickRadius
                          , n = 2 * e
                          , o = i._createSVGEl("svg");
                        o.setAttribute("class", "timepicker-svg"),
                        o.setAttribute("width", n),
                        o.setAttribute("height", n);
                        var a = i._createSVGEl("g");
                        a.setAttribute("transform", "translate(" + e + "," + e + ")");
                        var r = i._createSVGEl("circle");
                        r.setAttribute("class", "timepicker-canvas-bearing"),
                        r.setAttribute("cx", 0),
                        r.setAttribute("cy", 0),
                        r.setAttribute("r", 4);
                        var s = i._createSVGEl("line");
                        s.setAttribute("x1", 0),
                        s.setAttribute("y1", 0);
                        var l = i._createSVGEl("circle");
                        l.setAttribute("class", "timepicker-canvas-bg"),
                        l.setAttribute("r", t),
                        a.appendChild(s),
                        a.appendChild(l),
                        a.appendChild(r),
                        o.appendChild(a),
                        this._canvas.appendChild(o),
                        this.hand = s,
                        this.bg = l,
                        this.bearing = r,
                        this.g = a
                    }
                }, {
                    key: "_buildHoursView",
                    value: function() {
                        var t = e('<div class="timepicker-tick"></div>');
                        if (this.options.twelveHour)
                            for (var n = 1; n < 13; n += 1) {
                                var i = t.clone()
                                  , o = n / 6 * Math.PI
                                  , a = this.options.outerRadius;
                                i.css({
                                    left: this.options.dialRadius + Math.sin(o) * a - this.options.tickRadius + "px",
                                    top: this.options.dialRadius - Math.cos(o) * a - this.options.tickRadius + "px"
                                }),
                                i.html(0 === n ? "00" : n),
                                this.hoursView.appendChild(i[0])
                            }
                        else
                            for (var r = 0; r < 24; r += 1) {
                                var s = t.clone()
                                  , l = r / 6 * Math.PI
                                  , u = r > 0 && r < 13 ? this.options.innerRadius : this.options.outerRadius;
                                s.css({
                                    left: this.options.dialRadius + Math.sin(l) * u - this.options.tickRadius + "px",
                                    top: this.options.dialRadius - Math.cos(l) * u - this.options.tickRadius + "px"
                                }),
                                s.html(0 === r ? "00" : r),
                                this.hoursView.appendChild(s[0])
                            }
                    }
                }, {
                    key: "_buildMinutesView",
                    value: function() {
                        for (var t = e('<div class="timepicker-tick"></div>'), n = 0; n < 60; n += 5) {
                            var o = t.clone()
                              , a = n / 30 * Math.PI;
                            o.css({
                                left: this.options.dialRadius + Math.sin(a) * this.options.outerRadius - this.options.tickRadius + "px",
                                top: this.options.dialRadius - Math.cos(a) * this.options.outerRadius - this.options.tickRadius + "px"
                            }),
                            o.html(i._addLeadingZero(n)),
                            this.minutesView.appendChild(o[0])
                        }
                    }
                }, {
                    key: "_handleAmPmClick",
                    value: function(t) {
                        var n = e(t.target);
                        this.amOrPm = n.hasClass("am-btn") ? "AM" : "PM",
                        this._updateAmPmView()
                    }
                }, {
                    key: "_updateAmPmView",
                    value: function() {
                        this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", "AM" === this.amOrPm),
                        this.$pmBtn.toggleClass("text-primary", "PM" === this.amOrPm))
                    }
                }, {
                    key: "_updateTimeFromInput",
                    value: function() {
                        var e = ((this.el.value || this.options.defaultTime || "") + "").split(":");
                        if (this.options.twelveHour && void 0 !== e[1] && (e[1].toUpperCase().indexOf("AM") > 0 ? this.amOrPm = "AM" : this.amOrPm = "PM",
                        e[1] = e[1].replace("AM", "").replace("PM", "")),
                        "now" === e[0]) {
                            var t = new Date(+new Date + this.options.fromNow);
                            e = [t.getHours(), t.getMinutes()],
                            this.options.twelveHour && (this.amOrPm = e[0] >= 12 && e[0] < 24 ? "PM" : "AM")
                        }
                        this.hours = +e[0] || 0,
                        this.minutes = +e[1] || 0,
                        this.spanHours.innerHTML = this.hours,
                        this.spanMinutes.innerHTML = i._addLeadingZero(this.minutes),
                        this._updateAmPmView()
                    }
                }, {
                    key: "showView",
                    value: function(t, n) {
                        "minutes" === t && e(this.hoursView).css("visibility");
                        var i = "hours" === t
                          , o = i ? this.hoursView : this.minutesView
                          , a = i ? this.minutesView : this.hoursView;
                        this.currentView = t,
                        e(this.spanHours).toggleClass("text-primary", i),
                        e(this.spanMinutes).toggleClass("text-primary", !i),
                        a.classList.add("timepicker-dial-out"),
                        e(o).css("visibility", "visible").removeClass("timepicker-dial-out"),
                        this.resetClock(n),
                        clearTimeout(this.toggleViewTimer),
                        this.toggleViewTimer = setTimeout(function() {
                            e(a).css("visibility", "hidden")
                        }, this.options.duration)
                    }
                }, {
                    key: "resetClock",
                    value: function(t) {
                        var n = this.currentView
                          , i = this[n]
                          , o = "hours" === n
                          , a = i * (Math.PI / (o ? 6 : 30))
                          , r = o && i > 0 && i < 13 ? this.options.innerRadius : this.options.outerRadius
                          , s = Math.sin(a) * r
                          , l = -Math.cos(a) * r
                          , u = this;
                        t ? (e(this.canvas).addClass("timepicker-canvas-out"),
                        setTimeout(function() {
                            e(u.canvas).removeClass("timepicker-canvas-out"),
                            u.setHand(s, l)
                        }, t)) : this.setHand(s, l)
                    }
                }, {
                    key: "setHand",
                    value: function(e, t, n) {
                        var o = this
                          , a = Math.atan2(e, -t)
                          , r = "hours" === this.currentView
                          , s = Math.PI / (r || n ? 6 : 30)
                          , l = Math.sqrt(e * e + t * t)
                          , u = r && l < (this.options.outerRadius + this.options.innerRadius) / 2
                          , c = u ? this.options.innerRadius : this.options.outerRadius;
                        this.options.twelveHour && (c = this.options.outerRadius),
                        a < 0 && (a = 2 * Math.PI + a);
                        var d = Math.round(a / s);
                        a = d * s,
                        this.options.twelveHour ? r ? 0 === d && (d = 12) : (n && (d *= 5),
                        60 === d && (d = 0)) : r ? (12 === d && (d = 0),
                        d = u ? 0 === d ? 12 : d : 0 === d ? 0 : d + 12) : (n && (d *= 5),
                        60 === d && (d = 0)),
                        this[this.currentView] !== d && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10),
                        this.vibrateTimer = setTimeout(function() {
                            o.vibrateTimer = null
                        }, 100))),
                        this[this.currentView] = d,
                        r ? this.spanHours.innerHTML = d : this.spanMinutes.innerHTML = i._addLeadingZero(d);
                        var h = Math.sin(a) * (c - this.options.tickRadius)
                          , p = -Math.cos(a) * (c - this.options.tickRadius)
                          , f = Math.sin(a) * c
                          , v = -Math.cos(a) * c;
                        this.hand.setAttribute("x2", h),
                        this.hand.setAttribute("y2", p),
                        this.bg.setAttribute("cx", f),
                        this.bg.setAttribute("cy", v)
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.isOpen || (this.isOpen = !0,
                        this._updateTimeFromInput(),
                        this.showView("hours"),
                        this.modal.open())
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen && (this.isOpen = !1,
                        this.modal.close())
                    }
                }, {
                    key: "done",
                    value: function(e, t) {
                        var n = this.el.value
                          , o = t ? "" : i._addLeadingZero(this.hours) + ":" + i._addLeadingZero(this.minutes);
                        this.time = o,
                        !t && this.options.twelveHour && (o = o + " " + this.amOrPm),
                        this.el.value = o,
                        o !== n && this.$el.trigger("change"),
                        this.close(),
                        this.el.focus()
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.done(null, !0)
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "_addLeadingZero",
                    value: function(e) {
                        return (e < 10 ? "0" : "") + e
                    }
                }, {
                    key: "_createSVGEl",
                    value: function(e) {
                        return document.createElementNS("http://www.w3.org/2000/svg", e)
                    }
                }, {
                    key: "_Pos",
                    value: function(e) {
                        return e.targetTouches && e.targetTouches.length >= 1 ? {
                            x: e.targetTouches[0].clientX,
                            y: e.targetTouches[0].clientY
                        } : {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Timepicker
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return t
                    }
                }]),
                i
            }();
            n._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""),
            M.Timepicker = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "timepicker", "M_Timepicker")
        }(cash),
        function(e) {
            "use strict";
            var t = {}
              , n = function(n) {
                function i(t, n) {
                    u(this, i);
                    var o = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
                    return o.el.M_CharacterCounter = o,
                    o.options = e.extend({}, i.defaults, n),
                    o.isInvalid = !1,
                    o.isValidLength = !1,
                    o._setupCounter(),
                    o._setupEventHandlers(),
                    o
                }
                return l(i, c),
                r(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.CharacterCounter = void 0,
                        this._removeCounter()
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleUpdateCounterBound = this.updateCounter.bind(this),
                        this.el.addEventListener("focus", this._handleUpdateCounterBound, !0),
                        this.el.addEventListener("input", this._handleUpdateCounterBound, !0)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("focus", this._handleUpdateCounterBound, !0),
                        this.el.removeEventListener("input", this._handleUpdateCounterBound, !0)
                    }
                }, {
                    key: "_setupCounter",
                    value: function() {
                        this.counterEl = document.createElement("span"),
                        e(this.counterEl).addClass("character-counter").css({
                            float: "right",
                            "font-size": "12px",
                            height: 1
                        }),
                        this.$el.parent().append(this.counterEl)
                    }
                }, {
                    key: "_removeCounter",
                    value: function() {
                        e(this.counterEl).remove()
                    }
                }, {
                    key: "updateCounter",
                    value: function() {
                        var t = +this.$el.attr("data-length")
                          , n = this.el.value.length;
                        this.isValidLength = n <= t;
                        var i = n;
                        t && (i += "/" + t,
                        this._validateInput()),
                        e(this.counterEl).html(i)
                    }
                }, {
                    key: "_validateInput",
                    value: function() {
                        this.isValidLength && this.isInvalid ? (this.isInvalid = !1,
                        this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = !0,
                        this.$el.removeClass("valid"),
                        this.$el.addClass("invalid"))
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_CharacterCounter
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return t
                    }
                }]),
                i
            }();
            M.CharacterCounter = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "characterCounter", "M_CharacterCounter")
        }(cash),
        function(e) {
            "use strict";
            var t = {
                duration: 200,
                dist: -100,
                shift: 0,
                padding: 0,
                numVisible: 5,
                fullWidth: !1,
                indicators: !1,
                noWrap: !1,
                onCycleTo: null
            }
              , n = function(n) {
                function i(t, n) {
                    u(this, i);
                    var o = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
                    return o.el.M_Carousel = o,
                    o.options = e.extend({}, i.defaults, n),
                    o.hasMultipleSlides = o.$el.find(".carousel-item").length > 1,
                    o.showIndicators = o.options.indicators && o.hasMultipleSlides,
                    o.noWrap = o.options.noWrap || !o.hasMultipleSlides,
                    o.pressed = !1,
                    o.dragged = !1,
                    o.offset = o.target = 0,
                    o.images = [],
                    o.itemWidth = o.$el.find(".carousel-item").first().innerWidth(),
                    o.itemHeight = o.$el.find(".carousel-item").first().innerHeight(),
                    o.dim = 2 * o.itemWidth + o.options.padding || 1,
                    o._autoScrollBound = o._autoScroll.bind(o),
                    o._trackBound = o._track.bind(o),
                    o.options.fullWidth && (o.options.dist = 0,
                    o._setCarouselHeight(),
                    o.showIndicators && o.$el.find(".carousel-fixed-item").addClass("with-indicators")),
                    o.$indicators = e('<ul class="indicators"></ul>'),
                    o.$el.find(".carousel-item").each(function(t, n) {
                        if (o.images.push(t),
                        o.showIndicators) {
                            var i = e('<li class="indicator-item"></li>');
                            0 === n && i[0].classList.add("active"),
                            o.$indicators.append(i)
                        }
                    }),
                    o.showIndicators && o.$el.append(o.$indicators),
                    o.count = o.images.length,
                    o.options.numVisible = Math.min(o.count, o.options.numVisible),
                    o.xform = "transform",
                    ["webkit", "Moz", "O", "ms"].every(function(e) {
                        var t = e + "Transform";
                        return void 0 === document.body.style[t] || (o.xform = t,
                        !1)
                    }),
                    o._setupEventHandlers(),
                    o._scroll(o.offset),
                    o
                }
                return l(i, c),
                r(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_Carousel = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var e = this;
                        this._handleCarouselTapBound = this._handleCarouselTap.bind(this),
                        this._handleCarouselDragBound = this._handleCarouselDrag.bind(this),
                        this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this),
                        this._handleCarouselClickBound = this._handleCarouselClick.bind(this),
                        void 0 !== window.ontouchstart && (this.el.addEventListener("touchstart", this._handleCarouselTapBound),
                        this.el.addEventListener("touchmove", this._handleCarouselDragBound),
                        this.el.addEventListener("touchend", this._handleCarouselReleaseBound)),
                        this.el.addEventListener("mousedown", this._handleCarouselTapBound),
                        this.el.addEventListener("mousemove", this._handleCarouselDragBound),
                        this.el.addEventListener("mouseup", this._handleCarouselReleaseBound),
                        this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound),
                        this.el.addEventListener("click", this._handleCarouselClickBound),
                        this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                        this.$indicators.find(".indicator-item").each(function(t, n) {
                            t.addEventListener("click", e._handleIndicatorClickBound)
                        }));
                        var t = M.throttle(this._handleResize, 200);
                        this._handleThrottledResizeBound = t.bind(this),
                        window.addEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var e = this;
                        void 0 !== window.ontouchstart && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound),
                        this.el.removeEventListener("touchmove", this._handleCarouselDragBound),
                        this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)),
                        this.el.removeEventListener("mousedown", this._handleCarouselTapBound),
                        this.el.removeEventListener("mousemove", this._handleCarouselDragBound),
                        this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound),
                        this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound),
                        this.el.removeEventListener("click", this._handleCarouselClickBound),
                        this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function(t, n) {
                            t.removeEventListener("click", e._handleIndicatorClickBound)
                        }),
                        window.removeEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_handleCarouselTap",
                    value: function(t) {
                        "mousedown" === t.type && e(t.target).is("img") && t.preventDefault(),
                        this.pressed = !0,
                        this.dragged = !1,
                        this.verticalDragged = !1,
                        this.reference = this._xpos(t),
                        this.referenceY = this._ypos(t),
                        this.velocity = this.amplitude = 0,
                        this.frame = this.offset,
                        this.timestamp = Date.now(),
                        clearInterval(this.ticker),
                        this.ticker = setInterval(this._trackBound, 100)
                    }
                }, {
                    key: "_handleCarouselDrag",
                    value: function(e) {
                        var t = void 0
                          , n = void 0
                          , i = void 0;
                        if (this.pressed)
                            if (t = this._xpos(e),
                            n = this._ypos(e),
                            i = this.reference - t,
                            Math.abs(this.referenceY - n) < 30 && !this.verticalDragged)
                                (i > 2 || i < -2) && (this.dragged = !0,
                                this.reference = t,
                                this._scroll(this.offset + i));
                            else {
                                if (this.dragged)
                                    return e.preventDefault(),
                                    e.stopPropagation(),
                                    !1;
                                this.verticalDragged = !0
                            }
                        if (this.dragged)
                            return e.preventDefault(),
                            e.stopPropagation(),
                            !1
                    }
                }, {
                    key: "_handleCarouselRelease",
                    value: function(e) {
                        if (this.pressed)
                            return this.pressed = !1,
                            clearInterval(this.ticker),
                            this.target = this.offset,
                            (this.velocity > 10 || this.velocity < -10) && (this.amplitude = .9 * this.velocity,
                            this.target = this.offset + this.amplitude),
                            this.target = Math.round(this.target / this.dim) * this.dim,
                            this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)),
                            this.amplitude = this.target - this.offset,
                            this.timestamp = Date.now(),
                            requestAnimationFrame(this._autoScrollBound),
                            this.dragged && (e.preventDefault(),
                            e.stopPropagation()),
                            !1
                    }
                }, {
                    key: "_handleCarouselClick",
                    value: function(t) {
                        if (this.dragged)
                            return t.preventDefault(),
                            t.stopPropagation(),
                            !1;
                        if (!this.options.fullWidth) {
                            var n = e(t.target).closest(".carousel-item").index();
                            0 !== this._wrap(this.center) - n && (t.preventDefault(),
                            t.stopPropagation()),
                            this._cycleTo(n)
                        }
                    }
                }, {
                    key: "_handleIndicatorClick",
                    value: function(t) {
                        t.stopPropagation();
                        var n = e(t.target).closest(".indicator-item");
                        n.length && this._cycleTo(n.index())
                    }
                }, {
                    key: "_handleResize",
                    value: function(e) {
                        this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(),
                        this.imageHeight = this.$el.find(".carousel-item.active").height(),
                        this.dim = 2 * this.itemWidth + this.options.padding,
                        this.offset = 2 * this.center * this.itemWidth,
                        this.target = this.offset,
                        this._setCarouselHeight(!0)) : this._scroll()
                    }
                }, {
                    key: "_setCarouselHeight",
                    value: function(e) {
                        var t = this
                          , n = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first()
                          , i = n.find("img").first();
                        if (i.length)
                            if (i[0].complete) {
                                var o = i.height();
                                if (o > 0)
                                    this.$el.css("height", o + "px");
                                else {
                                    var a = i[0].naturalWidth
                                      , r = i[0].naturalHeight
                                      , s = this.$el.width() / a * r;
                                    this.$el.css("height", s + "px")
                                }
                            } else
                                i.one("load", function(e, n) {
                                    t.$el.css("height", e.offsetHeight + "px")
                                });
                        else if (!e) {
                            var l = n.height();
                            this.$el.css("height", l + "px")
                        }
                    }
                }, {
                    key: "_xpos",
                    value: function(e) {
                        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
                    }
                }, {
                    key: "_ypos",
                    value: function(e) {
                        return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
                    }
                }, {
                    key: "_wrap",
                    value: function(e) {
                        return e >= this.count ? e % this.count : e < 0 ? this._wrap(this.count + e % this.count) : e
                    }
                }, {
                    key: "_track",
                    value: function() {
                        var e, t, n, i;
                        t = (e = Date.now()) - this.timestamp,
                        this.timestamp = e,
                        n = this.offset - this.frame,
                        this.frame = this.offset,
                        i = 1e3 * n / (1 + t),
                        this.velocity = .8 * i + .2 * this.velocity
                    }
                }, {
                    key: "_autoScroll",
                    value: function() {
                        var e = void 0
                          , t = void 0;
                        this.amplitude && (e = Date.now() - this.timestamp,
                        (t = this.amplitude * Math.exp(-e / this.options.duration)) > 2 || t < -2 ? (this._scroll(this.target - t),
                        requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target))
                    }
                }, {
                    key: "_scroll",
                    value: function(t) {
                        var n = this;
                        this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"),
                        null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout),
                        this.scrollingTimeout = window.setTimeout(function() {
                            n.$el.removeClass("scrolling")
                        }, this.options.duration);
                        var i, o, a, r, s = void 0, l = void 0, u = void 0, c = void 0, d = void 0, h = void 0, p = this.center, f = 1 / this.options.numVisible;
                        if (this.offset = "number" == typeof t ? t : this.offset,
                        this.center = Math.floor((this.offset + this.dim / 2) / this.dim),
                        r = -(a = (o = this.offset - this.center * this.dim) < 0 ? 1 : -1) * o * 2 / this.dim,
                        i = this.count >> 1,
                        this.options.fullWidth ? (u = "translateX(0)",
                        h = 1) : (u = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ",
                        u += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)",
                        h = 1 - f * r),
                        this.showIndicators) {
                            var v = this.center % this.count
                              , g = this.$indicators.find(".indicator-item.active");
                            g.index() !== v && (g.removeClass("active"),
                            this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"))
                        }
                        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
                            l = this.images[this._wrap(this.center)],
                            e(l).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"),
                            l.classList.add("active"));
                            var m = u + " translateX(" + -o / 2 + "px) translateX(" + a * this.options.shift * r * s + "px) translateZ(" + this.options.dist * r + "px)";
                            this._updateItemStyle(l, h, 0, m)
                        }
                        for (s = 1; s <= i; ++s) {
                            if (this.options.fullWidth ? (c = this.options.dist,
                            d = s === i && o < 0 ? 1 - r : 1) : (c = this.options.dist * (2 * s + r * a),
                            d = 1 - f * (2 * s + r * a)),
                            !this.noWrap || this.center + s < this.count) {
                                l = this.images[this._wrap(this.center + s)];
                                var y = u + " translateX(" + (this.options.shift + (this.dim * s - o) / 2) + "px) translateZ(" + c + "px)";
                                this._updateItemStyle(l, d, -s, y)
                            }
                            if (this.options.fullWidth ? (c = this.options.dist,
                            d = s === i && o > 0 ? 1 - r : 1) : (c = this.options.dist * (2 * s - r * a),
                            d = 1 - f * (2 * s - r * a)),
                            !this.noWrap || this.center - s >= 0) {
                                l = this.images[this._wrap(this.center - s)];
                                var b = u + " translateX(" + (-this.options.shift + (-this.dim * s - o) / 2) + "px) translateZ(" + c + "px)";
                                this._updateItemStyle(l, d, -s, b)
                            }
                        }
                        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
                            l = this.images[this._wrap(this.center)];
                            var _ = u + " translateX(" + -o / 2 + "px) translateX(" + a * this.options.shift * r + "px) translateZ(" + this.options.dist * r + "px)";
                            this._updateItemStyle(l, h, 0, _)
                        }
                        var w = this.$el.find(".carousel-item").eq(this._wrap(this.center));
                        p !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, w[0], this.dragged),
                        "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, w[0], this.dragged),
                        this.oneTimeCallback = null)
                    }
                }, {
                    key: "_updateItemStyle",
                    value: function(e, t, n, i) {
                        e.style[this.xform] = i,
                        e.style.zIndex = n,
                        e.style.opacity = t,
                        e.style.visibility = "visible"
                    }
                }, {
                    key: "_cycleTo",
                    value: function(e, t) {
                        var n = this.center % this.count - e;
                        this.noWrap || (n < 0 ? Math.abs(n + this.count) < Math.abs(n) && (n += this.count) : n > 0 && Math.abs(n - this.count) < n && (n -= this.count)),
                        this.target = this.dim * Math.round(this.offset / this.dim),
                        n < 0 ? this.target += this.dim * Math.abs(n) : n > 0 && (this.target -= this.dim * n),
                        "function" == typeof t && (this.oneTimeCallback = t),
                        this.offset !== this.target && (this.amplitude = this.target - this.offset,
                        this.timestamp = Date.now(),
                        requestAnimationFrame(this._autoScrollBound))
                    }
                }, {
                    key: "next",
                    value: function(e) {
                        (void 0 === e || isNaN(e)) && (e = 1);
                        var t = this.center + e;
                        if (t >= this.count || t < 0) {
                            if (this.noWrap)
                                return;
                            t = this._wrap(t)
                        }
                        this._cycleTo(t)
                    }
                }, {
                    key: "prev",
                    value: function(e) {
                        (void 0 === e || isNaN(e)) && (e = 1);
                        var t = this.center - e;
                        if (t >= this.count || t < 0) {
                            if (this.noWrap)
                                return;
                            t = this._wrap(t)
                        }
                        this._cycleTo(t)
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        if ((void 0 === e || isNaN(e)) && (e = 0),
                        e > this.count || e < 0) {
                            if (this.noWrap)
                                return;
                            e = this._wrap(e)
                        }
                        this._cycleTo(e, t)
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Carousel
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return t
                    }
                }]),
                i
            }();
            M.Carousel = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "carousel", "M_Carousel")
        }(cash),
        function(e) {
            "use strict";
            var t = {
                onOpen: void 0,
                onClose: void 0
            }
              , n = function(n) {
                function i(t, n) {
                    u(this, i);
                    var o = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
                    return o.el.M_TapTarget = o,
                    o.options = e.extend({}, i.defaults, n),
                    o.isOpen = !1,
                    o.$origin = e("#" + o.$el.attr("data-target")),
                    o._setup(),
                    o._calculatePositioning(),
                    o._setupEventHandlers(),
                    o
                }
                return l(i, c),
                r(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.TapTarget = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleDocumentClickBound = this._handleDocumentClick.bind(this),
                        this._handleTargetClickBound = this._handleTargetClick.bind(this),
                        this._handleOriginClickBound = this._handleOriginClick.bind(this),
                        this.el.addEventListener("click", this._handleTargetClickBound),
                        this.originEl.addEventListener("click", this._handleOriginClickBound);
                        var e = M.throttle(this._handleResize, 200);
                        this._handleThrottledResizeBound = e.bind(this),
                        window.addEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleTargetClickBound),
                        this.originEl.removeEventListener("click", this._handleOriginClickBound),
                        window.removeEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_handleTargetClick",
                    value: function(e) {
                        this.open()
                    }
                }, {
                    key: "_handleOriginClick",
                    value: function(e) {
                        this.close()
                    }
                }, {
                    key: "_handleResize",
                    value: function(e) {
                        this._calculatePositioning()
                    }
                }, {
                    key: "_handleDocumentClick",
                    value: function(t) {
                        e(t.target).closest(".tap-target-wrapper").length || (this.close(),
                        t.preventDefault(),
                        t.stopPropagation())
                    }
                }, {
                    key: "_setup",
                    value: function() {
                        this.wrapper = this.$el.parent()[0],
                        this.waveEl = e(this.wrapper).find(".tap-target-wave")[0],
                        this.originEl = e(this.wrapper).find(".tap-target-origin")[0],
                        this.contentEl = this.$el.find(".tap-target-content")[0],
                        e(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"),
                        this.wrapper.classList.add("tap-target-wrapper"),
                        this.$el.before(e(this.wrapper)),
                        this.wrapper.append(this.el)),
                        this.contentEl || (this.contentEl = document.createElement("div"),
                        this.contentEl.classList.add("tap-target-content"),
                        this.$el.append(this.contentEl)),
                        this.waveEl || (this.waveEl = document.createElement("div"),
                        this.waveEl.classList.add("tap-target-wave"),
                        this.originEl || (this.originEl = this.$origin.clone(!0, !0),
                        this.originEl.addClass("tap-target-origin"),
                        this.originEl.removeAttr("id"),
                        this.originEl.removeAttr("style"),
                        this.originEl = this.originEl[0],
                        this.waveEl.append(this.originEl)),
                        this.wrapper.append(this.waveEl))
                    }
                }, {
                    key: "_calculatePositioning",
                    value: function() {
                        var t = "fixed" === this.$origin.css("position");
                        if (!t)
                            for (var n = this.$origin.parents(), i = 0; i < n.length && !(t = "fixed" == e(n[i]).css("position")); i++)
                                ;
                        var o = this.$origin.outerWidth()
                          , a = this.$origin.outerHeight()
                          , r = t ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top
                          , s = t ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left
                          , l = window.innerWidth
                          , u = window.innerHeight
                          , c = l / 2
                          , d = u / 2
                          , h = s <= c
                          , p = s > c
                          , f = r <= d
                          , v = r > d
                          , g = s >= .25 * l && s <= .75 * l
                          , m = this.$el.outerWidth()
                          , y = this.$el.outerHeight()
                          , b = r + a / 2 - y / 2
                          , _ = s + o / 2 - m / 2
                          , w = t ? "fixed" : "absolute"
                          , C = g ? m : m / 2 + o
                          , x = y / 2
                          , k = f ? y / 2 : 0
                          , T = h && !g ? m / 2 - o : 0
                          , D = o
                          , S = v ? "bottom" : "top"
                          , E = 2 * o
                          , L = E
                          , O = y / 2 - L / 2
                          , A = m / 2 - E / 2
                          , I = {};
                        I.top = f ? b + "px" : "",
                        I.right = p ? l - _ - m + "px" : "",
                        I.bottom = v ? u - b - y + "px" : "",
                        I.left = h ? _ + "px" : "",
                        I.position = w,
                        e(this.wrapper).css(I),
                        e(this.contentEl).css({
                            width: C + "px",
                            height: x + "px",
                            top: k + "px",
                            right: "0px",
                            bottom: "0px",
                            left: T + "px",
                            padding: D + "px",
                            verticalAlign: S
                        }),
                        e(this.waveEl).css({
                            top: O + "px",
                            left: A + "px",
                            width: E + "px",
                            height: L + "px"
                        })
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call(this, this.$origin[0]),
                        this.isOpen = !0,
                        this.wrapper.classList.add("open"),
                        document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                        document.body.addEventListener("touchend", this._handleDocumentClickBound))
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call(this, this.$origin[0]),
                        this.isOpen = !1,
                        this.wrapper.classList.remove("open"),
                        document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                        document.body.removeEventListener("touchend", this._handleDocumentClickBound))
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_TapTarget
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return t
                    }
                }]),
                i
            }();
            M.TapTarget = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "tapTarget", "M_TapTarget")
        }(cash),
        function(e) {
            "use strict";
            var t = {
                classes: "",
                dropdownOptions: {}
            }
              , n = function(n) {
                function i(t, n) {
                    u(this, i);
                    var o = s(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
                    return o.$el.hasClass("browser-default") ? s(o) : (o.el.M_FormSelect = o,
                    o.options = e.extend({}, i.defaults, n),
                    o.isMultiple = o.$el.prop("multiple"),
                    o.el.tabIndex = -1,
                    o._keysSelected = {},
                    o._valueDict = {},
                    o._setupDropdown(),
                    o._setupEventHandlers(),
                    o)
                }
                return l(i, c),
                r(i, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._removeDropdown(),
                        this.el.M_FormSelect = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var t = this;
                        this._handleSelectChangeBound = this._handleSelectChange.bind(this),
                        this._handleOptionClickBound = this._handleOptionClick.bind(this),
                        this._handleInputClickBound = this._handleInputClick.bind(this),
                        e(this.dropdownOptions).find("li:not(.optgroup)").each(function(e) {
                            e.addEventListener("click", t._handleOptionClickBound)
                        }),
                        this.el.addEventListener("change", this._handleSelectChangeBound),
                        this.input.addEventListener("click", this._handleInputClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var t = this;
                        e(this.dropdownOptions).find("li:not(.optgroup)").each(function(e) {
                            e.removeEventListener("click", t._handleOptionClickBound)
                        }),
                        this.el.removeEventListener("change", this._handleSelectChangeBound),
                        this.input.removeEventListener("click", this._handleInputClickBound)
                    }
                }, {
                    key: "_handleSelectChange",
                    value: function(e) {
                        this._setValueToInput()
                    }
                }, {
                    key: "_handleOptionClick",
                    value: function(t) {
                        t.preventDefault();
                        var n = e(t.target).closest("li")[0]
                          , i = n.id;
                        if (!e(n).hasClass("disabled") && !e(n).hasClass("optgroup") && i.length) {
                            var o = !0;
                            if (this.isMultiple) {
                                var a = e(this.dropdownOptions).find("li.disabled.selected");
                                a.length && (a.removeClass("selected"),
                                a.find('input[type="checkbox"]').prop("checked", !1),
                                this._toggleEntryFromArray(a[0].id)),
                                o = this._toggleEntryFromArray(i)
                            } else
                                e(this.dropdownOptions).find("li").removeClass("selected"),
                                e(n).toggleClass("selected", o);
                            e(this._valueDict[i].el).prop("selected") !== o && (e(this._valueDict[i].el).prop("selected", o),
                            this.$el.trigger("change"))
                        }
                        t.stopPropagation()
                    }
                }, {
                    key: "_handleInputClick",
                    value: function() {
                        this.dropdown && this.dropdown.isOpen && (this._setValueToInput(),
                        this._setSelectedStates())
                    }
                }, {
                    key: "_setupDropdown",
                    value: function() {
                        var t = this;
                        this.wrapper = document.createElement("div"),
                        e(this.wrapper).addClass("select-wrapper " + this.options.classes),
                        this.$el.before(e(this.wrapper)),
                        this.wrapper.appendChild(this.el),
                        this.el.disabled && this.wrapper.classList.add("disabled"),
                        this.$selectOptions = this.$el.children("option, optgroup"),
                        this.dropdownOptions = document.createElement("ul"),
                        this.dropdownOptions.id = "select-options-" + M.guid(),
                        e(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")),
                        this.$selectOptions.length && this.$selectOptions.each(function(n) {
                            if (e(n).is("option")) {
                                var i = void 0;
                                i = t.isMultiple ? t._appendOptionWithIcon(t.$el, n, "multiple") : t._appendOptionWithIcon(t.$el, n),
                                t._addOptionToValueDict(n, i)
                            } else if (e(n).is("optgroup")) {
                                var o = e(n).children("option");
                                e(t.dropdownOptions).append(e('<li class="optgroup"><span>' + n.getAttribute("label") + "</span></li>")[0]),
                                o.each(function(e) {
                                    var n = t._appendOptionWithIcon(t.$el, e, "optgroup-option");
                                    t._addOptionToValueDict(e, n)
                                })
                            }
                        }),
                        this.$el.after(this.dropdownOptions),
                        this.input = document.createElement("input"),
                        e(this.input).addClass("select-dropdown dropdown-trigger"),
                        this.input.setAttribute("type", "text"),
                        this.input.setAttribute("readonly", "true"),
                        this.input.setAttribute("data-target", this.dropdownOptions.id),
                        this.el.disabled && e(this.input).prop("disabled", "true"),
                        this.$el.before(this.input),
                        this._setValueToInput();
                        var n = e('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
                        if (this.$el.before(n[0]),
                        !this.el.disabled) {
                            var i = e.extend({}, this.options.dropdownOptions);
                            i.onOpenEnd = function(n) {
                                var i = e(t.dropdownOptions).find(".selected").first();
                                if (i.length && (M.keyDown = !0,
                                t.dropdown.focusedIndex = i.index(),
                                t.dropdown._focusFocusedItem(),
                                M.keyDown = !1,
                                t.dropdown.isScrollable)) {
                                    var o = i[0].getBoundingClientRect().top - t.dropdownOptions.getBoundingClientRect().top;
                                    o -= t.dropdownOptions.clientHeight / 2,
                                    t.dropdownOptions.scrollTop = o
                                }
                            }
                            ,
                            this.isMultiple && (i.closeOnClick = !1),
                            this.dropdown = M.Dropdown.init(this.input, i)
                        }
                        this._setSelectedStates()
                    }
                }, {
                    key: "_addOptionToValueDict",
                    value: function(e, t) {
                        var n = Object.keys(this._valueDict).length
                          , i = this.dropdownOptions.id + n
                          , o = {};
                        t.id = i,
                        o.el = e,
                        o.optionEl = t,
                        this._valueDict[i] = o
                    }
                }, {
                    key: "_removeDropdown",
                    value: function() {
                        e(this.wrapper).find(".caret").remove(),
                        e(this.input).remove(),
                        e(this.dropdownOptions).remove(),
                        e(this.wrapper).before(this.$el),
                        e(this.wrapper).remove()
                    }
                }, {
                    key: "_appendOptionWithIcon",
                    value: function(t, n, i) {
                        var o = n.disabled ? "disabled " : ""
                          , a = "optgroup-option" === i ? "optgroup-option " : ""
                          , r = this.isMultiple ? '<label><input type="checkbox"' + o + '"/><span>' + n.innerHTML + "</span></label>" : n.innerHTML
                          , s = e("<li></li>")
                          , l = e("<span></span>");
                        l.html(r),
                        s.addClass(o + " " + a),
                        s.append(l);
                        var u = n.getAttribute("data-icon");
                        if (u) {
                            var c = e('<img alt="" src="' + u + '">');
                            s.prepend(c)
                        }
                        return e(this.dropdownOptions).append(s[0]),
                        s[0]
                    }
                }, {
                    key: "_toggleEntryFromArray",
                    value: function(t) {
                        var n = !this._keysSelected.hasOwnProperty(t)
                          , i = e(this._valueDict[t].optionEl);
                        return n ? this._keysSelected[t] = !0 : delete this._keysSelected[t],
                        i.toggleClass("selected", n),
                        i.find('input[type="checkbox"]').prop("checked", n),
                        i.prop("selected", n),
                        n
                    }
                }, {
                    key: "_setValueToInput",
                    value: function() {
                        var t = [];
                        if (this.$el.find("option").each(function(n) {
                            if (e(n).prop("selected")) {
                                var i = e(n).text();
                                t.push(i)
                            }
                        }),
                        !t.length) {
                            var n = this.$el.find("option:disabled").eq(0);
                            n.length && "" === n[0].value && t.push(n.text())
                        }
                        this.input.value = t.join(", ")
                    }
                }, {
                    key: "_setSelectedStates",
                    value: function() {
                        for (var t in this._keysSelected = {},
                        this._valueDict) {
                            var n = this._valueDict[t]
                              , i = e(n.el).prop("selected");
                            e(n.optionEl).find('input[type="checkbox"]').prop("checked", i),
                            i ? (this._activateOption(e(this.dropdownOptions), e(n.optionEl)),
                            this._keysSelected[t] = !0) : e(n.optionEl).removeClass("selected")
                        }
                    }
                }, {
                    key: "_activateOption",
                    value: function(t, n) {
                        n && (this.isMultiple || t.find("li.selected").removeClass("selected"),
                        e(n).addClass("selected"))
                    }
                }, {
                    key: "getSelectedValues",
                    value: function() {
                        var e = [];
                        for (var t in this._keysSelected)
                            e.push(this._valueDict[t].el.value);
                        return e
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_FormSelect
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return t
                    }
                }]),
                i
            }();
            M.FormSelect = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "formSelect", "M_FormSelect")
        }(cash),
        function(e, t) {
            "use strict";
            var n = {}
              , i = function(i) {
                function o(t, n) {
                    u(this, o);
                    var i = s(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, t, n));
                    return i.el.M_Range = i,
                    i.options = e.extend({}, o.defaults, n),
                    i._mousedown = !1,
                    i._setupThumb(),
                    i._setupEventHandlers(),
                    i
                }
                return l(o, c),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._removeThumb(),
                        this.el.M_Range = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleRangeChangeBound = this._handleRangeChange.bind(this),
                        this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this),
                        this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this),
                        this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this),
                        this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this),
                        this.el.addEventListener("change", this._handleRangeChangeBound),
                        this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                        this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                        this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                        this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound),
                        this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                        this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                        this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("change", this._handleRangeChangeBound),
                        this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                        this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                        this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                        this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                        this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound),
                        this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                        this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                        this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
                    }
                }, {
                    key: "_handleRangeChange",
                    value: function() {
                        e(this.value).html(this.$el.val()),
                        e(this.thumb).hasClass("active") || this._showRangeBubble();
                        var t = this._calcRangeOffset();
                        e(this.thumb).addClass("active").css("left", t + "px")
                    }
                }, {
                    key: "_handleRangeMousedownTouchstart",
                    value: function(t) {
                        if (e(this.value).html(this.$el.val()),
                        this._mousedown = !0,
                        this.$el.addClass("active"),
                        e(this.thumb).hasClass("active") || this._showRangeBubble(),
                        "input" !== t.type) {
                            var n = this._calcRangeOffset();
                            e(this.thumb).addClass("active").css("left", n + "px")
                        }
                    }
                }, {
                    key: "_handleRangeInputMousemoveTouchmove",
                    value: function() {
                        if (this._mousedown) {
                            e(this.thumb).hasClass("active") || this._showRangeBubble();
                            var t = this._calcRangeOffset();
                            e(this.thumb).addClass("active").css("left", t + "px"),
                            e(this.value).html(this.$el.val())
                        }
                    }
                }, {
                    key: "_handleRangeMouseupTouchend",
                    value: function() {
                        this._mousedown = !1,
                        this.$el.removeClass("active")
                    }
                }, {
                    key: "_handleRangeBlurMouseoutTouchleave",
                    value: function() {
                        if (!this._mousedown) {
                            var n = 7 + parseInt(this.$el.css("padding-left")) + "px";
                            e(this.thumb).hasClass("active") && (t.remove(this.thumb),
                            t({
                                targets: this.thumb,
                                height: 0,
                                width: 0,
                                top: 10,
                                easing: "easeOutQuad",
                                marginLeft: n,
                                duration: 100
                            })),
                            e(this.thumb).removeClass("active")
                        }
                    }
                }, {
                    key: "_setupThumb",
                    value: function() {
                        this.thumb = document.createElement("span"),
                        this.value = document.createElement("span"),
                        e(this.thumb).addClass("thumb"),
                        e(this.value).addClass("value"),
                        e(this.thumb).append(this.value),
                        this.$el.after(this.thumb)
                    }
                }, {
                    key: "_removeThumb",
                    value: function() {
                        e(this.thumb).remove()
                    }
                }, {
                    key: "_showRangeBubble",
                    value: function() {
                        var n = -7 + parseInt(e(this.thumb).parent().css("padding-left")) + "px";
                        t.remove(this.thumb),
                        t({
                            targets: this.thumb,
                            height: 30,
                            width: 30,
                            top: -30,
                            marginLeft: n,
                            duration: 300,
                            easing: "easeOutQuint"
                        })
                    }
                }, {
                    key: "_calcRangeOffset",
                    value: function() {
                        var e = this.$el.width() - 15
                          , t = parseFloat(this.$el.attr("max")) || 100
                          , n = parseFloat(this.$el.attr("min")) || 0;
                        return (parseFloat(this.$el.val()) - n) / (t - n) * e
                    }
                }], [{
                    key: "init",
                    value: function(e, t) {
                        return a(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, e, t)
                    }
                }, {
                    key: "getInstance",
                    value: function(e) {
                        return (e.jquery ? e[0] : e).M_Range
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return n
                    }
                }]),
                o
            }();
            M.Range = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "range", "M_Range"),
            i.init(e("input[type=range]"))
        }(cash, M.anime)
    }
    ).call(this, n(6))
}
, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {}
, function(e, t, n) {
    "use strict";
    var i = {
        searchParams: "URLSearchParams"in self,
        iterable: "Symbol"in self && "iterator"in Symbol,
        blob: "FileReader"in self && "Blob"in self && function() {
            try {
                return new Blob,
                !0
            } catch (e) {
                return !1
            }
        }(),
        formData: "FormData"in self,
        arrayBuffer: "ArrayBuffer"in self
    };
    if (i.arrayBuffer)
        var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
          , a = ArrayBuffer.isView || function(e) {
            return e && o.indexOf(Object.prototype.toString.call(e)) > -1
        }
        ;
    function r(e) {
        if ("string" != typeof e && (e = String(e)),
        /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
            throw new TypeError("Invalid character in header field name");
        return e.toLowerCase()
    }
    function s(e) {
        return "string" != typeof e && (e = String(e)),
        e
    }
    function l(e) {
        var t = {
            next: function() {
                var t = e.shift();
                return {
                    done: void 0 === t,
                    value: t
                }
            }
        };
        return i.iterable && (t[Symbol.iterator] = function() {
            return t
        }
        ),
        t
    }
    function u(e) {
        this.map = {},
        e instanceof u ? e.forEach(function(e, t) {
            this.append(t, e)
        }, this) : Array.isArray(e) ? e.forEach(function(e) {
            this.append(e[0], e[1])
        }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
            this.append(t, e[t])
        }, this)
    }
    function c(e) {
        if (e.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
        e.bodyUsed = !0
    }
    function d(e) {
        return new Promise(function(t, n) {
            e.onload = function() {
                t(e.result)
            }
            ,
            e.onerror = function() {
                n(e.error)
            }
        }
        )
    }
    function h(e) {
        var t = new FileReader
          , n = d(t);
        return t.readAsArrayBuffer(e),
        n
    }
    function p(e) {
        if (e.slice)
            return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)),
        t.buffer
    }
    function f() {
        return this.bodyUsed = !1,
        this._initBody = function(e) {
            this._bodyInit = e,
            e ? "string" == typeof e ? this._bodyText = e : i.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : i.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : i.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : i.arrayBuffer && i.blob && function(e) {
                return e && DataView.prototype.isPrototypeOf(e)
            }(e) ? (this._bodyArrayBuffer = p(e.buffer),
            this._bodyInit = new Blob([this._bodyArrayBuffer])) : i.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || a(e)) ? this._bodyArrayBuffer = p(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "",
            this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }
        ,
        i.blob && (this.blob = function() {
            var e = c(this);
            if (e)
                return e;
            if (this._bodyBlob)
                return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }
        ,
        this.arrayBuffer = function() {
            return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
        }
        ),
        this.text = function() {
            var e = c(this);
            if (e)
                return e;
            if (this._bodyBlob)
                return function(e) {
                    var t = new FileReader
                      , n = d(t);
                    return t.readAsText(e),
                    n
                }(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), i = 0; i < t.length; i++)
                        n[i] = String.fromCharCode(t[i]);
                    return n.join("")
                }(this._bodyArrayBuffer));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }
        ,
        i.formData && (this.formData = function() {
            return this.text().then(m)
        }
        ),
        this.json = function() {
            return this.text().then(JSON.parse)
        }
        ,
        this
    }
    u.prototype.append = function(e, t) {
        e = r(e),
        t = s(t);
        var n = this.map[e];
        this.map[e] = n ? n + ", " + t : t
    }
    ,
    u.prototype.delete = function(e) {
        delete this.map[r(e)]
    }
    ,
    u.prototype.get = function(e) {
        return e = r(e),
        this.has(e) ? this.map[e] : null
    }
    ,
    u.prototype.has = function(e) {
        return this.map.hasOwnProperty(r(e))
    }
    ,
    u.prototype.set = function(e, t) {
        this.map[r(e)] = s(t)
    }
    ,
    u.prototype.forEach = function(e, t) {
        for (var n in this.map)
            this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
    }
    ,
    u.prototype.keys = function() {
        var e = [];
        return this.forEach(function(t, n) {
            e.push(n)
        }),
        l(e)
    }
    ,
    u.prototype.values = function() {
        var e = [];
        return this.forEach(function(t) {
            e.push(t)
        }),
        l(e)
    }
    ,
    u.prototype.entries = function() {
        var e = [];
        return this.forEach(function(t, n) {
            e.push([n, t])
        }),
        l(e)
    }
    ,
    i.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
    var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function g(e, t) {
        var n = (t = t || {}).body;
        if (e instanceof g) {
            if (e.bodyUsed)
                throw new TypeError("Already read");
            this.url = e.url,
            this.credentials = e.credentials,
            t.headers || (this.headers = new u(e.headers)),
            this.method = e.method,
            this.mode = e.mode,
            this.signal = e.signal,
            n || null == e._bodyInit || (n = e._bodyInit,
            e.bodyUsed = !0)
        } else
            this.url = String(e);
        if (this.credentials = t.credentials || this.credentials || "same-origin",
        !t.headers && this.headers || (this.headers = new u(t.headers)),
        this.method = function(e) {
            var t = e.toUpperCase();
            return v.indexOf(t) > -1 ? t : e
        }(t.method || this.method || "GET"),
        this.mode = t.mode || this.mode || null,
        this.signal = t.signal || this.signal,
        this.referrer = null,
        ("GET" === this.method || "HEAD" === this.method) && n)
            throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n)
    }
    function m(e) {
        var t = new FormData;
        return e.trim().split("&").forEach(function(e) {
            if (e) {
                var n = e.split("=")
                  , i = n.shift().replace(/\+/g, " ")
                  , o = n.join("=").replace(/\+/g, " ");
                t.append(decodeURIComponent(i), decodeURIComponent(o))
            }
        }),
        t
    }
    function y(e, t) {
        t || (t = {}),
        this.type = "default",
        this.status = void 0 === t.status ? 200 : t.status,
        this.ok = this.status >= 200 && this.status < 300,
        this.statusText = "statusText"in t ? t.statusText : "OK",
        this.headers = new u(t.headers),
        this.url = t.url || "",
        this._initBody(e)
    }
    g.prototype.clone = function() {
        return new g(this,{
            body: this._bodyInit
        })
    }
    ,
    f.call(g.prototype),
    f.call(y.prototype),
    y.prototype.clone = function() {
        return new y(this._bodyInit,{
            status: this.status,
            statusText: this.statusText,
            headers: new u(this.headers),
            url: this.url
        })
    }
    ,
    y.error = function() {
        var e = new y(null,{
            status: 0,
            statusText: ""
        });
        return e.type = "error",
        e
    }
    ;
    var b = [301, 302, 303, 307, 308];
    y.redirect = function(e, t) {
        if (-1 === b.indexOf(t))
            throw new RangeError("Invalid status code");
        return new y(null,{
            status: t,
            headers: {
                location: e
            }
        })
    }
    ;
    var _ = self.DOMException;
    try {
        new _
    } catch (e) {
        (_ = function(e, t) {
            this.message = e,
            this.name = t;
            var n = Error(e);
            this.stack = n.stack
        }
        ).prototype = Object.create(Error.prototype),
        _.prototype.constructor = _
    }
    function w(e, t) {
        return new Promise(function(n, o) {
            var a = new g(e,t);
            if (a.signal && a.signal.aborted)
                return o(new _("Aborted","AbortError"));
            var r = new XMLHttpRequest;
            function s() {
                r.abort()
            }
            r.onload = function() {
                var e = {
                    status: r.status,
                    statusText: r.statusText,
                    headers: function(e) {
                        var t = new u;
                        return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                            var n = e.split(":")
                              , i = n.shift().trim();
                            if (i) {
                                var o = n.join(":").trim();
                                t.append(i, o)
                            }
                        }),
                        t
                    }(r.getAllResponseHeaders() || "")
                };
                e.url = "responseURL"in r ? r.responseURL : e.headers.get("X-Request-URL");
                var t = "response"in r ? r.response : r.responseText;
                n(new y(t,e))
            }
            ,
            r.onerror = function() {
                o(new TypeError("Network request failed"))
            }
            ,
            r.ontimeout = function() {
                o(new TypeError("Network request failed"))
            }
            ,
            r.onabort = function() {
                o(new _("Aborted","AbortError"))
            }
            ,
            r.open(a.method, a.url, !0),
            "include" === a.credentials ? r.withCredentials = !0 : "omit" === a.credentials && (r.withCredentials = !1),
            "responseType"in r && i.blob && (r.responseType = "blob"),
            a.headers.forEach(function(e, t) {
                r.setRequestHeader(t, e)
            }),
            a.signal && (a.signal.addEventListener("abort", s),
            r.onreadystatechange = function() {
                4 === r.readyState && a.signal.removeEventListener("abort", s)
            }
            ),
            r.send(void 0 === a._bodyInit ? null : a._bodyInit)
        }
        )
    }
    w.polyfill = !0,
    self.fetch || (self.fetch = w,
    self.Headers = u,
    self.Request = g,
    self.Response = y)
}
, , , function(e, t, n) {
    "use strict";
    function i(e, t, n) {
        n = n || 1;
        var i = e.getElementsByTagName("canvas")[0];
        i || (i = document.createElement("canvas"),
        e && e.appendChild(i)),
        i.width = 50 * n,
        i.height = 50 * n;
        var o = i.getContext("2d")
          , a = t && t.map(function(e) {
            return {
                x: e[0] * n,
                y: e[1] * n
            }
        })
          , r = new Path2D;
        r.strokeWidth = 5,
        r.moveTo(a[0].x, a[0].y);
        for (var s = 1; s < a.length; s++) {
            var l = a[s];
            r.lineTo(l.x, l.y)
        }
        r.closePath(),
        o.strokeStyle = "rgba(3, 155, 229, 1)",
        o.fillStyle = "rgba(3, 155, 229, 0.1)",
        o.lineWidth = 2,
        o.fill(r, "evenodd"),
        o.stroke(r, "evenodd")
    }
    n.d(t, "a", function() {
        return i
    })
}
, , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(5),
    n(7),
    n(15);
    var i = n(0)
      , o = n.n(i)
      , a = (n(16),
    n(11))
      , r = (n(17),
    n(3))
      , s = n(2);
    o()(document).ready(function() {
        var e = {};
        Object(s.d)(function(e, t) {
            if (t && t.rate && Object(r.b)(parseInt("10111", 2), t.rate))
                ;
            else {
                var n = o()(".nav-wrapper ul li:eq(1)");
                n.addClass("disabled tooltipped-tab"),
                n.append('<span class="tooltip-text tooltip-text__bottom">This functionality is not available for your tariff plan.</span>')
            }
        }),
        M.AutoInit(),
        M.Modal.init(o()("#response-modal"), {
            onCloseEnd: function() {
                o()(this.el).html("")
            }
        }),
        e.modal = M.Modal.getInstance(o()("#response-modal"));
        var t = M.Modal.getInstance(o()(".modal")[0])
          , n = M.Tabs.init(o()(".tabs")[0], {
            onShow: function(e) {
                o()(e).find("input").focus()
            }
        });
        function i() {
            Object(s.o)(e.editName.val(), e.currentData.id, ["area", "pixels", "createdAt"], function(e, n) {
                e ? consol.error(e) : (d.ajax.reload().draw(!1),
                t.close())
            })
        }
        function l() {
            Object(s.b)(e.currentData.id, function(n) {
                n ? consol.error(n) : (d.row(o()(e.currentRow)).remove().draw(!1),
                delete e.currentData,
                u(d.data()),
                t.close())
            })
        }
        function u() {
            var t = 0
              , n = 0;
            d.rows().every(function(e, i, o) {
                var a = this.data();
                t += a.area,
                n++
            }),
            e.totalArea.text(Math.round(10 * t) / 10),
            e.totalCount.text(n)
        }
        e.deleteName = o()("#delete_name"),
        e.editName = o()("#edit_name"),
        e.deleteBtn = o()("#delete-btn"),
        e.acceptBtn = o()("#accept-btn"),
        e.totalArea = o()("#total-area"),
        e.totalCount = o()("#total-polygons"),
        e.editName.keyup(function(t) {
            o()(this).val() != e.currentData.name ? 13 == t.keyCode ? i() : e.acceptBtn.removeClass("disabled") : e.acceptBtn.addClass("disabled")
        }),
        e.deleteName.keyup(function(t) {
            o()(this).val() == e.currentData.name ? 13 == t.keyCode ? l() : e.deleteBtn.removeClass("disabled") : e.deleteBtn.addClass("disabled")
        }),
        e.acceptBtn.click(function() {
            i()
        }),
        e.deleteBtn.click(function() {
            l()
        }),
        t.options.onOpenStart = function() {
            this.el;
            o()(e.deleteName).val(""),
            o()(e.editName).val(e.currentData.name),
            e.deleteBtn.addClass("disabled"),
            e.acceptBtn.addClass("disabled")
        }
        ,
        t.options.onOpenEnd = function() {
            this.el;
            n.select("edit-swipe"),
            M.updateTextFields()
        }
        ,
        t.options.onCloseEnd = function() {
            o()(e.currentRow).removeClass("active"),
            o()(e.deleteName).val(""),
            o()(e.editName).val(""),
            n.select("edit-swipe"),
            e.currentData = null
        }
        ;
        var c = parseInt(o()("#page-length").val())
          , d = o()("#table_id").DataTable({
            autoWidth: !1,
            pageLength: c,
            dom: 'rt<"col s6">',
            ajax: {
               
                //url: " http://api.agromonitoring.com/agro/1.0/image/search/polygons?fields=area&appid=ad2f7d3a464cf415c08589ca308d1b64?fields=area,pixels,createdAt",
                url: "http://wp.agromonitoring.com/dashboard/api/polygons?fields=area,pixels,createdAt",
                dataSrc: "",
                 headers: {
                    'Access-Control-Allow-Credentials' : true,
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'GET',
                    'Access-Control-Allow-Headers':'application/json',
                  },
                error: function(t) {
                    !function(t, n) {
                        o()(e.modal.el).html('\n\t\t<div class="modal-content">\n\t\t    <h4 class="red-text">'.concat(t.title, "</h4>\n\t\t    <p>").concat(t.message, '</p>\n    \t</div>\n      \t<div class="modal-footer">\n \t\t\t').concat(n >= 2 ? '<a id="retry-button" class="waves-effect waves-green btn-flat">Retry</a>' : "", "\n \t\t\t").concat(n >= 1 ? '<a target="blank" href="mailto:info@openweathermap.org" class="modal-close waves-effect waves-green btn-flat">Support</a>' : "", "\n\t        ").concat(n >= 0 ? '<a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>' : "", "\n      \t</div>\n\t")),
                        n >= 2 && o()("#retry-button").click(function() {
                            e.modal.close(),
                            d.ajax.reload().draw(!1)
                        })
                    }({
                        title: "Error while loading polygons data",
                        message: "Please, try to retry or contact support."
                    }, 2),
                    e.modal.open()
                },
                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa("mustafa.varol.538@gmail.com"+ ":" + "malatya44"));
                },
            },
            columns: [{
                data: "pixels",
                searchable: !1,
                orderable: !1,
                render: function(e, t, n) {
                    return ""
                }
            }, {
                data: "name"
            }, {
                data: "area"
            }, {
                data: "createdAt",
                render: function(e, t, n) {
                    return new Date(1e3 * e).toISOString().split("T")[0]
                }
            }],
            order: [[3, "desc"]],
            initComplete: function(e, t) {
                var n = this.api();
                0 == n.data().length && window.location.replace("new-polygon"),
                u(),
                o()("#page-length").on("change", function() {
                    n.page.len(parseInt(o()(this).val())).draw("page")
                }),
                o()("#btn-next").on("click", function() {
                    n.page("next").draw("page")
                }),
                o()("#btn-previous").on("click", function() {
                    n.page("previous").draw("page")
                })
            },

            drawCallback: function(e) {
                var t = this.api();
                t.rows({
                    page: "current"
                }).every(function() {
                    var e = t.cell(this.index(), 0).node()
                      , n = this.data();
                    Object(a.a)(e, n.pixels)
                }),
                function(e) {
                    var t = e.page.info()
                      , n = "".concat(t.start + 1, "-").concat(t.end, " of ").concat(t.recordsDisplay, " polygons");
                    o()("#table-info").text(n),
                    o()("#btn-current").text(t.page + 1),
                    t.page == t.pages - 1 ? o()("#btn-next").addClass("disabled") : o()("#btn-next").removeClass("disabled");
                    0 == t.page ? o()("#btn-previous").addClass("disabled") : o()("#btn-previous").removeClass("disabled")
                }(t)
            },
            rowCallback: function(n, i) {
                this.api();
                o()(n).click(function() {
                    o()(this).toggleClass("active"),
                    e.currentData = i,
                    e.currentRow = this,
                    t.open()
                })
            }
        });
        o()("#search-input").keyup(function() {
            d.search(o()(this).val()).draw()
        })
    })
}
, function(e, t, n) {}
, function(e, t, n) {
    var i, o;
    /*! DataTables 1.10.19
 * ©2008-2018 SpryMedia Ltd - datatables.net/license
 */
    /*! DataTables 1.10.19
 * ©2008-2018 SpryMedia Ltd - datatables.net/license
 */
    !function(a) {
        "use strict";
        i = [n(0)],
        void 0 === (o = function(e) {
            return function(e, t, n, i) {
                var o, a, r, s, l = function(t) {
                    this.$ = function(e, t) {
                        return this.api(!0).$(e, t)
                    }
                    ,
                    this._ = function(e, t) {
                        return this.api(!0).rows(e, t).data()
                    }
                    ,
                    this.api = function(e) {
                        return new a(e ? at(this[o.iApiIndex]) : this)
                    }
                    ,
                    this.fnAddData = function(t, n) {
                        var o = this.api(!0)
                          , a = e.isArray(t) && (e.isArray(t[0]) || e.isPlainObject(t[0])) ? o.rows.add(t) : o.row.add(t);
                        return (n === i || n) && o.draw(),
                        a.flatten().toArray()
                    }
                    ,
                    this.fnAdjustColumnSizing = function(e) {
                        var t = this.api(!0).columns.adjust()
                          , n = t.settings()[0]
                          , o = n.oScroll;
                        e === i || e ? t.draw(!1) : "" === o.sX && "" === o.sY || Fe(n)
                    }
                    ,
                    this.fnClearTable = function(e) {
                        var t = this.api(!0).clear();
                        (e === i || e) && t.draw()
                    }
                    ,
                    this.fnClose = function(e) {
                        this.api(!0).row(e).child.hide()
                    }
                    ,
                    this.fnDeleteRow = function(e, t, n) {
                        var o = this.api(!0)
                          , a = o.rows(e)
                          , r = a.settings()[0]
                          , s = r.aoData[a[0][0]];
                        return a.remove(),
                        t && t.call(this, r, s),
                        (n === i || n) && o.draw(),
                        s
                    }
                    ,
                    this.fnDestroy = function(e) {
                        this.api(!0).destroy(e)
                    }
                    ,
                    this.fnDraw = function(e) {
                        this.api(!0).draw(e)
                    }
                    ,
                    this.fnFilter = function(e, t, n, o, a, r) {
                        var s = this.api(!0);
                        null === t || t === i ? s.search(e, n, o, r) : s.column(t).search(e, n, o, r),
                        s.draw()
                    }
                    ,
                    this.fnGetData = function(e, t) {
                        var n = this.api(!0);
                        if (e !== i) {
                            var o = e.nodeName ? e.nodeName.toLowerCase() : "";
                            return t !== i || "td" == o || "th" == o ? n.cell(e, t).data() : n.row(e).data() || null
                        }
                        return n.data().toArray()
                    }
                    ,
                    this.fnGetNodes = function(e) {
                        var t = this.api(!0);
                        return e !== i ? t.row(e).node() : t.rows().nodes().flatten().toArray()
                    }
                    ,
                    this.fnGetPosition = function(e) {
                        var t = this.api(!0)
                          , n = e.nodeName.toUpperCase();
                        if ("TR" == n)
                            return t.row(e).index();
                        if ("TD" == n || "TH" == n) {
                            var i = t.cell(e).index();
                            return [i.row, i.columnVisible, i.column]
                        }
                        return null
                    }
                    ,
                    this.fnIsOpen = function(e) {
                        return this.api(!0).row(e).child.isShown()
                    }
                    ,
                    this.fnOpen = function(e, t, n) {
                        return this.api(!0).row(e).child(t, n).show().child()[0]
                    }
                    ,
                    this.fnPageChange = function(e, t) {
                        var n = this.api(!0).page(e);
                        (t === i || t) && n.draw(!1)
                    }
                    ,
                    this.fnSetColumnVis = function(e, t, n) {
                        var o = this.api(!0).column(e).visible(t);
                        (n === i || n) && o.columns.adjust().draw()
                    }
                    ,
                    this.fnSettings = function() {
                        return at(this[o.iApiIndex])
                    }
                    ,
                    this.fnSort = function(e) {
                        this.api(!0).order(e).draw()
                    }
                    ,
                    this.fnSortListener = function(e, t, n) {
                        this.api(!0).order.listener(e, t, n)
                    }
                    ,
                    this.fnUpdate = function(e, t, n, o, a) {
                        var r = this.api(!0);
                        return n === i || null === n ? r.row(t).data(e) : r.cell(t, n).data(e),
                        (a === i || a) && r.columns.adjust(),
                        (o === i || o) && r.draw(),
                        0
                    }
                    ,
                    this.fnVersionCheck = o.fnVersionCheck;
                    var n = this
                      , r = t === i
                      , s = this.length;
                    for (var u in r && (t = {}),
                    this.oApi = this.internal = o.internal,
                    l.ext.internal)
                        u && (this[u] = At(u));
                    return this.each(function() {
                        var o, a = s > 1 ? lt({}, t, !0) : t, u = 0, c = this.getAttribute("id"), d = !1, h = l.defaults, p = e(this);
                        if ("table" == this.nodeName.toLowerCase()) {
                            L(h),
                            O(h.column),
                            S(h, h, !0),
                            S(h.column, h.column, !0),
                            S(h, e.extend(a, p.data()));
                            var f = l.settings;
                            for (u = 0,
                            o = f.length; u < o; u++) {
                                var v = f[u];
                                if (v.nTable == this || v.nTHead && v.nTHead.parentNode == this || v.nTFoot && v.nTFoot.parentNode == this) {
                                    var g = a.bRetrieve !== i ? a.bRetrieve : h.bRetrieve
                                      , m = a.bDestroy !== i ? a.bDestroy : h.bDestroy;
                                    if (r || g)
                                        return v.oInstance;
                                    if (m) {
                                        v.oInstance.fnDestroy();
                                        break
                                    }
                                    return void rt(v, 0, "Cannot reinitialise DataTable", 3)
                                }
                                if (v.sTableId == this.id) {
                                    f.splice(u, 1);
                                    break
                                }
                            }
                            null !== c && "" !== c || (c = "DataTables_Table_" + l.ext._unique++,
                            this.id = c);
                            var y = e.extend(!0, {}, l.models.oSettings, {
                                sDestroyWidth: p[0].style.width,
                                sInstance: c,
                                sTableId: c
                            });
                            y.nTable = this,
                            y.oApi = n.internal,
                            y.oInit = a,
                            f.push(y),
                            y.oInstance = 1 === n.length ? n : p.dataTable(),
                            L(a),
                            E(a.oLanguage),
                            a.aLengthMenu && !a.iDisplayLength && (a.iDisplayLength = e.isArray(a.aLengthMenu[0]) ? a.aLengthMenu[0][0] : a.aLengthMenu[0]),
                            a = lt(e.extend(!0, {}, h), a),
                            st(y.oFeatures, a, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]),
                            st(y, a, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"]]),
                            st(y.oScroll, a, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]),
                            st(y.oLanguage, a, "fnInfoCallback"),
                            ct(y, "aoDrawCallback", a.fnDrawCallback, "user"),
                            ct(y, "aoServerParams", a.fnServerParams, "user"),
                            ct(y, "aoStateSaveParams", a.fnStateSaveParams, "user"),
                            ct(y, "aoStateLoadParams", a.fnStateLoadParams, "user"),
                            ct(y, "aoStateLoaded", a.fnStateLoaded, "user"),
                            ct(y, "aoRowCallback", a.fnRowCallback, "user"),
                            ct(y, "aoRowCreatedCallback", a.fnCreatedRow, "user"),
                            ct(y, "aoHeaderCallback", a.fnHeaderCallback, "user"),
                            ct(y, "aoFooterCallback", a.fnFooterCallback, "user"),
                            ct(y, "aoInitComplete", a.fnInitComplete, "user"),
                            ct(y, "aoPreDrawCallback", a.fnPreDrawCallback, "user"),
                            y.rowIdFn = J(a.rowId),
                            A(y);
                            var b = y.oClasses;
                            if (e.extend(b, l.ext.classes, a.oClasses),
                            p.addClass(b.sTable),
                            y.iInitDisplayStart === i && (y.iInitDisplayStart = a.iDisplayStart,
                            y._iDisplayStart = a.iDisplayStart),
                            null !== a.iDeferLoading) {
                                y.bDeferLoading = !0;
                                var _ = e.isArray(a.iDeferLoading);
                                y._iRecordsDisplay = _ ? a.iDeferLoading[0] : a.iDeferLoading,
                                y._iRecordsTotal = _ ? a.iDeferLoading[1] : a.iDeferLoading
                            }
                            var w = y.oLanguage;
                            e.extend(!0, w, a.oLanguage),
                            w.sUrl && (e.ajax({
                                dataType: "json",
                                url: w.sUrl,
                                success: function(t) {
                                    E(t),
                                    S(h.oLanguage, t),
                                    e.extend(!0, w, t),
                                    Ae(y)
                                },
                                error: function() {
                                    Ae(y)
                                }
                            }),
                            d = !0),
                            null === a.asStripeClasses && (y.asStripeClasses = [b.sStripeOdd, b.sStripeEven]);
                            var C = y.asStripeClasses
                              , x = p.children("tbody").find("tr").eq(0);
                            -1 !== e.inArray(!0, e.map(C, function(e, t) {
                                return x.hasClass(e)
                            })) && (e("tbody tr", this).removeClass(C.join(" ")),
                            y.asDestroyStripes = C.slice());
                            var k, T = [], D = this.getElementsByTagName("thead");
                            if (0 !== D.length && (ce(y.aoHeader, D[0]),
                            T = de(y)),
                            null === a.aoColumns)
                                for (k = [],
                                u = 0,
                                o = T.length; u < o; u++)
                                    k.push(null);
                            else
                                k = a.aoColumns;
                            for (u = 0,
                            o = k.length; u < o; u++)
                                B(y, T ? T[u] : null);
                            if (W(y, a.aoColumnDefs, k, function(e, t) {
                                R(y, e, t)
                            }),
                            x.length) {
                                var M = function(e, t) {
                                    return null !== e.getAttribute("data-" + t) ? t : null
                                };
                                e(x[0]).children("th, td").each(function(e, t) {
                                    var n = y.aoColumns[e];
                                    if (n.mData === e) {
                                        var o = M(t, "sort") || M(t, "order")
                                          , a = M(t, "filter") || M(t, "search");
                                        null === o && null === a || (n.mData = {
                                            _: e + ".display",
                                            sort: null !== o ? e + ".@data-" + o : i,
                                            type: null !== o ? e + ".@data-" + o : i,
                                            filter: null !== a ? e + ".@data-" + a : i
                                        },
                                        R(y, e))
                                    }
                                })
                            }
                            var I = y.oFeatures
                              , $ = function() {
                                if (a.aaSorting === i) {
                                    var t = y.aaSorting;
                                    for (u = 0,
                                    o = t.length; u < o; u++)
                                        t[u][1] = y.aoColumns[u].asSorting[0]
                                }
                                tt(y),
                                I.bSort && ct(y, "aoDrawCallback", function() {
                                    if (y.bSorted) {
                                        var t = Je(y)
                                          , n = {};
                                        e.each(t, function(e, t) {
                                            n[t.src] = t.dir
                                        }),
                                        dt(y, null, "order", [y, t, n]),
                                        Ge(y)
                                    }
                                }),
                                ct(y, "aoDrawCallback", function() {
                                    (y.bSorted || "ssp" === ft(y) || I.bDeferRender) && tt(y)
                                }, "sc");
                                var n = p.children("caption").each(function() {
                                    this._captionSide = e(this).css("caption-side")
                                })
                                  , r = p.children("thead");
                                0 === r.length && (r = e("<thead/>").appendTo(p)),
                                y.nTHead = r[0];
                                var s = p.children("tbody");
                                0 === s.length && (s = e("<tbody/>").appendTo(p)),
                                y.nTBody = s[0];
                                var l = p.children("tfoot");
                                if (0 === l.length && n.length > 0 && ("" !== y.oScroll.sX || "" !== y.oScroll.sY) && (l = e("<tfoot/>").appendTo(p)),
                                0 === l.length || 0 === l.children().length ? p.addClass(b.sNoFooter) : l.length > 0 && (y.nTFoot = l[0],
                                ce(y.aoFooter, y.nTFoot)),
                                a.aaData)
                                    for (u = 0; u < a.aaData.length; u++)
                                        q(y, a.aaData[u]);
                                else
                                    (y.bDeferLoading || "dom" == ft(y)) && z(y, e(y.nTBody).children("tr"));
                                y.aiDisplay = y.aiDisplayMaster.slice(),
                                y.bInitialised = !0,
                                !1 === d && Ae(y)
                            };
                            a.bStateSave ? (I.bStateSave = !0,
                            ct(y, "aoDrawCallback", it, "state_save"),
                            ot(y, a, $)) : $()
                        } else
                            rt(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2)
                    }),
                    n = null,
                    this
                }, u = {}, c = /[\r\n]/g, d = /<.*?>/g, h = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/, p = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")","g"), f = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi, v = function(e) {
                    return !e || !0 === e || "-" === e
                }, g = function(e) {
                    var t = parseInt(e, 10);
                    return !isNaN(t) && isFinite(e) ? t : null
                }, m = function(e, t) {
                    return u[t] || (u[t] = new RegExp(xe(t),"g")),
                    "string" == typeof e && "." !== t ? e.replace(/\./g, "").replace(u[t], ".") : e
                }, y = function(e, t, n) {
                    var i = "string" == typeof e;
                    return !!v(e) || (t && i && (e = m(e, t)),
                    n && i && (e = e.replace(f, "")),
                    !isNaN(parseFloat(e)) && isFinite(e))
                }, b = function(e, t, n) {
                    if (v(e))
                        return !0;
                    var i = function(e) {
                        return v(e) || "string" == typeof e
                    }(e);
                    return i && !!y(k(e), t, n) || null
                }, _ = function(e, t, n) {
                    var o = []
                      , a = 0
                      , r = e.length;
                    if (n !== i)
                        for (; a < r; a++)
                            e[a] && e[a][t] && o.push(e[a][t][n]);
                    else
                        for (; a < r; a++)
                            e[a] && o.push(e[a][t]);
                    return o
                }, w = function(e, t, n, o) {
                    var a = []
                      , r = 0
                      , s = t.length;
                    if (o !== i)
                        for (; r < s; r++)
                            e[t[r]][n] && a.push(e[t[r]][n][o]);
                    else
                        for (; r < s; r++)
                            a.push(e[t[r]][n]);
                    return a
                }, C = function(e, t) {
                    var n, o = [];
                    t === i ? (t = 0,
                    n = e) : (n = t,
                    t = e);
                    for (var a = t; a < n; a++)
                        o.push(a);
                    return o
                }, x = function(e) {
                    for (var t = [], n = 0, i = e.length; n < i; n++)
                        e[n] && t.push(e[n]);
                    return t
                }, k = function(e) {
                    return e.replace(d, "")
                }, T = function(e) {
                    if (function(e) {
                        if (e.length < 2)
                            return !0;
                        for (var t = e.slice().sort(), n = t[0], i = 1, o = t.length; i < o; i++) {
                            if (t[i] === n)
                                return !1;
                            n = t[i]
                        }
                        return !0
                    }(e))
                        return e.slice();
                    var t, n, i, o = [], a = e.length, r = 0;
                    e: for (n = 0; n < a; n++) {
                        for (t = e[n],
                        i = 0; i < r; i++)
                            if (o[i] === t)
                                continue e;
                        o.push(t),
                        r++
                    }
                    return o
                };
                function D(t) {
                    var n, i, o = {};
                    e.each(t, function(e, a) {
                        (n = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (i = e.replace(n[0], n[2].toLowerCase()),
                        o[i] = e,
                        "o" === n[1] && D(t[e]))
                    }),
                    t._hungarianMap = o
                }
                function S(t, n, o) {
                    var a;
                    t._hungarianMap || D(t),
                    e.each(n, function(r, s) {
                        (a = t._hungarianMap[r]) === i || !o && n[a] !== i || ("o" === a.charAt(0) ? (n[a] || (n[a] = {}),
                        e.extend(!0, n[a], n[r]),
                        S(t[a], n[a], o)) : n[a] = n[r])
                    })
                }
                function E(e) {
                    var t = l.defaults.oLanguage
                      , n = t.sDecimal;
                    if (n && Lt(n),
                    e) {
                        var i = e.sZeroRecords;
                        !e.sEmptyTable && i && "No data available in table" === t.sEmptyTable && st(e, e, "sZeroRecords", "sEmptyTable"),
                        !e.sLoadingRecords && i && "Loading..." === t.sLoadingRecords && st(e, e, "sZeroRecords", "sLoadingRecords"),
                        e.sInfoThousands && (e.sThousands = e.sInfoThousands);
                        var o = e.sDecimal;
                        o && n !== o && Lt(o)
                    }
                }
                l.util = {
                    throttle: function(e, t) {
                        var n, o, a = t !== i ? t : 200;
                        return function() {
                            var t = this
                              , r = +new Date
                              , s = arguments;
                            n && r < n + a ? (clearTimeout(o),
                            o = setTimeout(function() {
                                n = i,
                                e.apply(t, s)
                            }, a)) : (n = r,
                            e.apply(t, s))
                        }
                    },
                    escapeRegex: function(e) {
                        return e.replace(p, "\\$1")
                    }
                };
                var M = function(e, t, n) {
                    e[t] !== i && (e[n] = e[t])
                };
                function L(e) {
                    M(e, "ordering", "bSort"),
                    M(e, "orderMulti", "bSortMulti"),
                    M(e, "orderClasses", "bSortClasses"),
                    M(e, "orderCellsTop", "bSortCellsTop"),
                    M(e, "order", "aaSorting"),
                    M(e, "orderFixed", "aaSortingFixed"),
                    M(e, "paging", "bPaginate"),
                    M(e, "pagingType", "sPaginationType"),
                    M(e, "pageLength", "iDisplayLength"),
                    M(e, "searching", "bFilter"),
                    "boolean" == typeof e.sScrollX && (e.sScrollX = e.sScrollX ? "100%" : ""),
                    "boolean" == typeof e.scrollX && (e.scrollX = e.scrollX ? "100%" : "");
                    var t = e.aoSearchCols;
                    if (t)
                        for (var n = 0, i = t.length; n < i; n++)
                            t[n] && S(l.models.oSearch, t[n])
                }
                function O(t) {
                    M(t, "orderable", "bSortable"),
                    M(t, "orderData", "aDataSort"),
                    M(t, "orderSequence", "asSorting"),
                    M(t, "orderDataType", "sortDataType");
                    var n = t.aDataSort;
                    "number" != typeof n || e.isArray(n) || (t.aDataSort = [n])
                }
                function A(n) {
                    if (!l.__browser) {
                        var i = {};
                        l.__browser = i;
                        var o = e("<div/>").css({
                            position: "fixed",
                            top: 0,
                            left: -1 * e(t).scrollLeft(),
                            height: 1,
                            width: 1,
                            overflow: "hidden"
                        }).append(e("<div/>").css({
                            position: "absolute",
                            top: 1,
                            left: 1,
                            width: 100,
                            overflow: "scroll"
                        }).append(e("<div/>").css({
                            width: "100%",
                            height: 10
                        }))).appendTo("body")
                          , a = o.children()
                          , r = a.children();
                        i.barWidth = a[0].offsetWidth - a[0].clientWidth,
                        i.bScrollOversize = 100 === r[0].offsetWidth && 100 !== a[0].clientWidth,
                        i.bScrollbarLeft = 1 !== Math.round(r.offset().left),
                        i.bBounding = !!o[0].getBoundingClientRect().width,
                        o.remove()
                    }
                    e.extend(n.oBrowser, l.__browser),
                    n.oScroll.iBarWidth = l.__browser.barWidth
                }
                function I(e, t, n, o, a, r) {
                    var s, l = o, u = !1;
                    for (n !== i && (s = n,
                    u = !0); l !== a; )
                        e.hasOwnProperty(l) && (s = u ? t(s, e[l], l, e) : e[l],
                        u = !0,
                        l += r);
                    return s
                }
                function B(t, i) {
                    var o = l.defaults.column
                      , a = t.aoColumns.length
                      , r = e.extend({}, l.models.oColumn, o, {
                        nTh: i || n.createElement("th"),
                        sTitle: o.sTitle ? o.sTitle : i ? i.innerHTML : "",
                        aDataSort: o.aDataSort ? o.aDataSort : [a],
                        mData: o.mData ? o.mData : a,
                        idx: a
                    });
                    t.aoColumns.push(r);
                    var s = t.aoPreSearchCols;
                    s[a] = e.extend({}, l.models.oSearch, s[a]),
                    R(t, a, e(i).data())
                }
                function R(t, n, o) {
                    var a = t.aoColumns[n]
                      , r = t.oClasses
                      , s = e(a.nTh);
                    if (!a.sWidthOrig) {
                        a.sWidthOrig = s.attr("width") || null;
                        var u = (s.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                        u && (a.sWidthOrig = u[1])
                    }
                    o !== i && null !== o && (O(o),
                    S(l.defaults.column, o),
                    o.mDataProp === i || o.mData || (o.mData = o.mDataProp),
                    o.sType && (a._sManualType = o.sType),
                    o.className && !o.sClass && (o.sClass = o.className),
                    o.sClass && s.addClass(o.sClass),
                    e.extend(a, o),
                    st(a, o, "sWidth", "sWidthOrig"),
                    o.iDataSort !== i && (a.aDataSort = [o.iDataSort]),
                    st(a, o, "aDataSort"));
                    var c = a.mData
                      , d = J(c)
                      , h = a.mRender ? J(a.mRender) : null
                      , p = function(e) {
                        return "string" == typeof e && -1 !== e.indexOf("@")
                    };
                    a._bAttrSrc = e.isPlainObject(c) && (p(c.sort) || p(c.type) || p(c.filter)),
                    a._setter = null,
                    a.fnGetData = function(e, t, n) {
                        var o = d(e, t, i, n);
                        return h && t ? h(o, t, e, n) : o
                    }
                    ,
                    a.fnSetData = function(e, t, n) {
                        return K(c)(e, t, n)
                    }
                    ,
                    "number" != typeof c && (t._rowReadObject = !0),
                    t.oFeatures.bSort || (a.bSortable = !1,
                    s.addClass(r.sSortableNone));
                    var f = -1 !== e.inArray("asc", a.asSorting)
                      , v = -1 !== e.inArray("desc", a.asSorting);
                    a.bSortable && (f || v) ? f && !v ? (a.sSortingClass = r.sSortableAsc,
                    a.sSortingClassJUI = r.sSortJUIAscAllowed) : !f && v ? (a.sSortingClass = r.sSortableDesc,
                    a.sSortingClassJUI = r.sSortJUIDescAllowed) : (a.sSortingClass = r.sSortable,
                    a.sSortingClassJUI = r.sSortJUI) : (a.sSortingClass = r.sSortableNone,
                    a.sSortingClassJUI = "")
                }
                function $(e) {
                    if (!1 !== e.oFeatures.bAutoWidth) {
                        var t = e.aoColumns;
                        ze(e);
                        for (var n = 0, i = t.length; n < i; n++)
                            t[n].nTh.style.width = t[n].sWidth
                    }
                    var o = e.oScroll;
                    "" === o.sY && "" === o.sX || Fe(e),
                    dt(e, null, "column-sizing", [e])
                }
                function P(e, t) {
                    var n = N(e, "bVisible");
                    return "number" == typeof n[t] ? n[t] : null
                }
                function j(t, n) {
                    var i = N(t, "bVisible")
                      , o = e.inArray(n, i);
                    return -1 !== o ? o : null
                }
                function H(t) {
                    var n = 0;
                    return e.each(t.aoColumns, function(t, i) {
                        i.bVisible && "none" !== e(i.nTh).css("display") && n++
                    }),
                    n
                }
                function N(t, n) {
                    var i = [];
                    return e.map(t.aoColumns, function(e, t) {
                        e[n] && i.push(t)
                    }),
                    i
                }
                function F(e) {
                    var t, n, o, a, r, s, u, c, d, h = e.aoColumns, p = e.aoData, f = l.ext.type.detect;
                    for (t = 0,
                    n = h.length; t < n; t++)
                        if (u = h[t],
                        d = [],
                        !u.sType && u._sManualType)
                            u.sType = u._sManualType;
                        else if (!u.sType) {
                            for (o = 0,
                            a = f.length; o < a; o++) {
                                for (r = 0,
                                s = p.length; r < s && (d[r] === i && (d[r] = V(e, r, t, "type")),
                                (c = f[o](d[r], e)) || o === f.length - 1) && "html" !== c; r++)
                                    ;
                                if (c) {
                                    u.sType = c;
                                    break
                                }
                            }
                            u.sType || (u.sType = "string")
                        }
                }
                function W(t, n, o, a) {
                    var r, s, l, u, c, d, h, p = t.aoColumns;
                    if (n)
                        for (r = n.length - 1; r >= 0; r--) {
                            var f = (h = n[r]).targets !== i ? h.targets : h.aTargets;
                            for (e.isArray(f) || (f = [f]),
                            l = 0,
                            u = f.length; l < u; l++)
                                if ("number" == typeof f[l] && f[l] >= 0) {
                                    for (; p.length <= f[l]; )
                                        B(t);
                                    a(f[l], h)
                                } else if ("number" == typeof f[l] && f[l] < 0)
                                    a(p.length + f[l], h);
                                else if ("string" == typeof f[l])
                                    for (c = 0,
                                    d = p.length; c < d; c++)
                                        ("_all" == f[l] || e(p[c].nTh).hasClass(f[l])) && a(c, h)
                        }
                    if (o)
                        for (r = 0,
                        s = o.length; r < s; r++)
                            a(r, o[r])
                }
                function q(t, n, o, a) {
                    var r = t.aoData.length
                      , s = e.extend(!0, {}, l.models.oRow, {
                        src: o ? "dom" : "data",
                        idx: r
                    });
                    s._aData = n,
                    t.aoData.push(s);
                    for (var u = t.aoColumns, c = 0, d = u.length; c < d; c++)
                        u[c].sType = null;
                    t.aiDisplayMaster.push(r);
                    var h = t.rowIdFn(n);
                    return h !== i && (t.aIds[h] = s),
                    !o && t.oFeatures.bDeferRender || ie(t, r, o, a),
                    r
                }
                function z(t, n) {
                    var i;
                    return n instanceof e || (n = e(n)),
                    n.map(function(e, n) {
                        return i = ne(t, n),
                        q(t, i.data, n, i.cells)
                    })
                }
                function V(e, t, n, o) {
                    var a = e.iDraw
                      , r = e.aoColumns[n]
                      , s = e.aoData[t]._aData
                      , l = r.sDefaultContent
                      , u = r.fnGetData(s, o, {
                        settings: e,
                        row: t,
                        col: n
                    });
                    if (u === i)
                        return e.iDrawError != a && null === l && (rt(e, 0, "Requested unknown parameter " + ("function" == typeof r.mData ? "{function}" : "'" + r.mData + "'") + " for row " + t + ", column " + n, 4),
                        e.iDrawError = a),
                        l;
                    if (u !== s && null !== u || null === l || o === i) {
                        if ("function" == typeof u)
                            return u.call(s)
                    } else
                        u = l;
                    return null === u && "display" == o ? "" : u
                }
                function X(e, t, n, i) {
                    var o = e.aoColumns[n]
                      , a = e.aoData[t]._aData;
                    o.fnSetData(a, i, {
                        settings: e,
                        row: t,
                        col: n
                    })
                }
                var U = /\[.*?\]$/
                  , Y = /\(\)$/;
                function Q(t) {
                    return e.map(t.match(/(\\.|[^\.])+/g) || [""], function(e) {
                        return e.replace(/\\\./g, ".")
                    })
                }
                function J(t) {
                    if (e.isPlainObject(t)) {
                        var n = {};
                        return e.each(t, function(e, t) {
                            t && (n[e] = J(t))
                        }),
                        function(e, t, o, a) {
                            var r = n[t] || n._;
                            return r !== i ? r(e, t, o, a) : e
                        }
                    }
                    if (null === t)
                        return function(e) {
                            return e
                        }
                        ;
                    if ("function" == typeof t)
                        return function(e, n, i, o) {
                            return t(e, n, i, o)
                        }
                        ;
                    if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("("))
                        return function(e, n) {
                            return e[t]
                        }
                        ;
                    var o = function(t, n, a) {
                        var r, s, l, u;
                        if ("" !== a)
                            for (var c = Q(a), d = 0, h = c.length; d < h; d++) {
                                if (r = c[d].match(U),
                                s = c[d].match(Y),
                                r) {
                                    if (c[d] = c[d].replace(U, ""),
                                    "" !== c[d] && (t = t[c[d]]),
                                    l = [],
                                    c.splice(0, d + 1),
                                    u = c.join("."),
                                    e.isArray(t))
                                        for (var p = 0, f = t.length; p < f; p++)
                                            l.push(o(t[p], n, u));
                                    var v = r[0].substring(1, r[0].length - 1);
                                    t = "" === v ? l : l.join(v);
                                    break
                                }
                                if (s)
                                    c[d] = c[d].replace(Y, ""),
                                    t = t[c[d]]();
                                else {
                                    if (null === t || t[c[d]] === i)
                                        return i;
                                    t = t[c[d]]
                                }
                            }
                        return t
                    };
                    return function(e, n) {
                        return o(e, n, t)
                    }
                }
                function K(t) {
                    if (e.isPlainObject(t))
                        return K(t._);
                    if (null === t)
                        return function() {}
                        ;
                    if ("function" == typeof t)
                        return function(e, n, i) {
                            t(e, "set", n, i)
                        }
                        ;
                    if ("string" != typeof t || -1 === t.indexOf(".") && -1 === t.indexOf("[") && -1 === t.indexOf("("))
                        return function(e, n) {
                            e[t] = n
                        }
                        ;
                    var n = function(t, o, a) {
                        for (var r, s, l, u, c, d = Q(a), h = d[d.length - 1], p = 0, f = d.length - 1; p < f; p++) {
                            if (s = d[p].match(U),
                            l = d[p].match(Y),
                            s) {
                                if (d[p] = d[p].replace(U, ""),
                                t[d[p]] = [],
                                (r = d.slice()).splice(0, p + 1),
                                c = r.join("."),
                                e.isArray(o))
                                    for (var v = 0, g = o.length; v < g; v++)
                                        n(u = {}, o[v], c),
                                        t[d[p]].push(u);
                                else
                                    t[d[p]] = o;
                                return
                            }
                            l && (d[p] = d[p].replace(Y, ""),
                            t = t[d[p]](o)),
                            null !== t[d[p]] && t[d[p]] !== i || (t[d[p]] = {}),
                            t = t[d[p]]
                        }
                        h.match(Y) ? t = t[h.replace(Y, "")](o) : t[h.replace(U, "")] = o
                    };
                    return function(e, i) {
                        return n(e, i, t)
                    }
                }
                function G(e) {
                    return _(e.aoData, "_aData")
                }
                function Z(e) {
                    e.aoData.length = 0,
                    e.aiDisplayMaster.length = 0,
                    e.aiDisplay.length = 0,
                    e.aIds = {}
                }
                function ee(e, t, n) {
                    for (var o = -1, a = 0, r = e.length; a < r; a++)
                        e[a] == t ? o = a : e[a] > t && e[a]--;
                    -1 != o && n === i && e.splice(o, 1)
                }
                function te(e, t, n, o) {
                    var a, r, s = e.aoData[t], l = function(n, i) {
                        for (; n.childNodes.length; )
                            n.removeChild(n.firstChild);
                        n.innerHTML = V(e, t, i, "display")
                    };
                    if ("dom" !== n && (n && "auto" !== n || "dom" !== s.src)) {
                        var u = s.anCells;
                        if (u)
                            if (o !== i)
                                l(u[o], o);
                            else
                                for (a = 0,
                                r = u.length; a < r; a++)
                                    l(u[a], a)
                    } else
                        s._aData = ne(e, s, o, o === i ? i : s._aData).data;
                    s._aSortData = null,
                    s._aFilterData = null;
                    var c = e.aoColumns;
                    if (o !== i)
                        c[o].sType = null;
                    else {
                        for (a = 0,
                        r = c.length; a < r; a++)
                            c[a].sType = null;
                        oe(e, s)
                    }
                }
                function ne(t, n, o, a) {
                    var r, s, l, u = [], c = n.firstChild, d = 0, h = t.aoColumns, p = t._rowReadObject;
                    a = a !== i ? a : p ? {} : [];
                    var f = function(e, t) {
                        if ("string" == typeof e) {
                            var n = e.indexOf("@");
                            if (-1 !== n) {
                                var i = e.substring(n + 1)
                                  , o = K(e);
                                o(a, t.getAttribute(i))
                            }
                        }
                    }
                      , v = function(t) {
                        if (o === i || o === d)
                            if (s = h[d],
                            l = e.trim(t.innerHTML),
                            s && s._bAttrSrc) {
                                var n = K(s.mData._);
                                n(a, l),
                                f(s.mData.sort, t),
                                f(s.mData.type, t),
                                f(s.mData.filter, t)
                            } else
                                p ? (s._setter || (s._setter = K(s.mData)),
                                s._setter(a, l)) : a[d] = l;
                        d++
                    };
                    if (c)
                        for (; c; )
                            "TD" != (r = c.nodeName.toUpperCase()) && "TH" != r || (v(c),
                            u.push(c)),
                            c = c.nextSibling;
                    else
                        for (var g = 0, m = (u = n.anCells).length; g < m; g++)
                            v(u[g]);
                    var y = n.firstChild ? n : n.nTr;
                    if (y) {
                        var b = y.getAttribute("id");
                        b && K(t.rowId)(a, b)
                    }
                    return {
                        data: a,
                        cells: u
                    }
                }
                function ie(t, i, o, a) {
                    var r, s, l, u, c, d = t.aoData[i], h = d._aData, p = [];
                    if (null === d.nTr) {
                        for (r = o || n.createElement("tr"),
                        d.nTr = r,
                        d.anCells = p,
                        r._DT_RowIndex = i,
                        oe(t, d),
                        u = 0,
                        c = t.aoColumns.length; u < c; u++)
                            l = t.aoColumns[u],
                            (s = o ? a[u] : n.createElement(l.sCellType))._DT_CellIndex = {
                                row: i,
                                column: u
                            },
                            p.push(s),
                            o && !l.mRender && l.mData === u || e.isPlainObject(l.mData) && l.mData._ === u + ".display" || (s.innerHTML = V(t, i, u, "display")),
                            l.sClass && (s.className += " " + l.sClass),
                            l.bVisible && !o ? r.appendChild(s) : !l.bVisible && o && s.parentNode.removeChild(s),
                            l.fnCreatedCell && l.fnCreatedCell.call(t.oInstance, s, V(t, i, u), h, i, u);
                        dt(t, "aoRowCreatedCallback", null, [r, h, i, p])
                    }
                    d.nTr.setAttribute("role", "row")
                }
                function oe(t, n) {
                    var i = n.nTr
                      , o = n._aData;
                    if (i) {
                        var a = t.rowIdFn(o);
                        if (a && (i.id = a),
                        o.DT_RowClass) {
                            var r = o.DT_RowClass.split(" ");
                            n.__rowc = n.__rowc ? T(n.__rowc.concat(r)) : r,
                            e(i).removeClass(n.__rowc.join(" ")).addClass(o.DT_RowClass)
                        }
                        o.DT_RowAttr && e(i).attr(o.DT_RowAttr),
                        o.DT_RowData && e(i).data(o.DT_RowData)
                    }
                }
                function ae(t) {
                    var n, i, o, a, r, s = t.nTHead, l = t.nTFoot, u = 0 === e("th, td", s).length, c = t.oClasses, d = t.aoColumns;
                    for (u && (a = e("<tr/>").appendTo(s)),
                    n = 0,
                    i = d.length; n < i; n++)
                        r = d[n],
                        o = e(r.nTh).addClass(r.sClass),
                        u && o.appendTo(a),
                        t.oFeatures.bSort && (o.addClass(r.sSortingClass),
                        !1 !== r.bSortable && (o.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId),
                        et(t, r.nTh, n))),
                        r.sTitle != o[0].innerHTML && o.html(r.sTitle),
                        pt(t, "header")(t, o, r, c);
                    if (u && ce(t.aoHeader, s),
                    e(s).find(">tr").attr("role", "row"),
                    e(s).find(">tr>th, >tr>td").addClass(c.sHeaderTH),
                    e(l).find(">tr>th, >tr>td").addClass(c.sFooterTH),
                    null !== l) {
                        var h = t.aoFooter[0];
                        for (n = 0,
                        i = h.length; n < i; n++)
                            (r = d[n]).nTf = h[n].cell,
                            r.sClass && e(r.nTf).addClass(r.sClass)
                    }
                }
                function re(t, n, o) {
                    var a, r, s, l, u, c, d, h, p, f = [], v = [], g = t.aoColumns.length;
                    if (n) {
                        for (o === i && (o = !1),
                        a = 0,
                        r = n.length; a < r; a++) {
                            for (f[a] = n[a].slice(),
                            f[a].nTr = n[a].nTr,
                            s = g - 1; s >= 0; s--)
                                t.aoColumns[s].bVisible || o || f[a].splice(s, 1);
                            v.push([])
                        }
                        for (a = 0,
                        r = f.length; a < r; a++) {
                            if (d = f[a].nTr)
                                for (; c = d.firstChild; )
                                    d.removeChild(c);
                            for (s = 0,
                            l = f[a].length; s < l; s++)
                                if (h = 1,
                                p = 1,
                                v[a][s] === i) {
                                    for (d.appendChild(f[a][s].cell),
                                    v[a][s] = 1; f[a + h] !== i && f[a][s].cell == f[a + h][s].cell; )
                                        v[a + h][s] = 1,
                                        h++;
                                    for (; f[a][s + p] !== i && f[a][s].cell == f[a][s + p].cell; ) {
                                        for (u = 0; u < h; u++)
                                            v[a + u][s + p] = 1;
                                        p++
                                    }
                                    e(f[a][s].cell).attr("rowspan", h).attr("colspan", p)
                                }
                        }
                    }
                }
                function se(t) {
                    var n = dt(t, "aoPreDrawCallback", "preDraw", [t]);
                    if (-1 === e.inArray(!1, n)) {
                        var o = []
                          , a = 0
                          , r = t.asStripeClasses
                          , s = r.length
                          , l = (t.aoOpenRows.length,
                        t.oLanguage)
                          , u = t.iInitDisplayStart
                          , c = "ssp" == ft(t)
                          , d = t.aiDisplay;
                        t.bDrawing = !0,
                        u !== i && -1 !== u && (t._iDisplayStart = c ? u : u >= t.fnRecordsDisplay() ? 0 : u,
                        t.iInitDisplayStart = -1);
                        var h = t._iDisplayStart
                          , p = t.fnDisplayEnd();
                        if (t.bDeferLoading)
                            t.bDeferLoading = !1,
                            t.iDraw++,
                            He(t, !1);
                        else if (c) {
                            if (!t.bDestroying && !pe(t))
                                return
                        } else
                            t.iDraw++;
                        if (0 !== d.length)
                            for (var f = c ? 0 : h, v = c ? t.aoData.length : p, g = f; g < v; g++) {
                                var m = d[g]
                                  , y = t.aoData[m];
                                null === y.nTr && ie(t, m);
                                var b = y.nTr;
                                if (0 !== s) {
                                    var _ = r[a % s];
                                    y._sRowStripe != _ && (e(b).removeClass(y._sRowStripe).addClass(_),
                                    y._sRowStripe = _)
                                }
                                dt(t, "aoRowCallback", null, [b, y._aData, a, g, m]),
                                o.push(b),
                                a++
                            }
                        else {
                            var w = l.sZeroRecords;
                            1 == t.iDraw && "ajax" == ft(t) ? w = l.sLoadingRecords : l.sEmptyTable && 0 === t.fnRecordsTotal() && (w = l.sEmptyTable),
                            o[0] = e("<tr/>", {
                                class: s ? r[0] : ""
                            }).append(e("<td />", {
                                valign: "top",
                                colSpan: H(t),
                                class: t.oClasses.sRowEmpty
                            }).html(w))[0]
                        }
                        dt(t, "aoHeaderCallback", "header", [e(t.nTHead).children("tr")[0], G(t), h, p, d]),
                        dt(t, "aoFooterCallback", "footer", [e(t.nTFoot).children("tr")[0], G(t), h, p, d]);
                        var C = e(t.nTBody);
                        C.children().detach(),
                        C.append(e(o)),
                        dt(t, "aoDrawCallback", "draw", [t]),
                        t.bSorted = !1,
                        t.bFiltered = !1,
                        t.bDrawing = !1
                    } else
                        He(t, !1)
                }
                function le(e, t) {
                    var n = e.oFeatures
                      , i = n.bSort
                      , o = n.bFilter;
                    i && Ke(e),
                    o ? ye(e, e.oPreviousSearch) : e.aiDisplay = e.aiDisplayMaster.slice(),
                    !0 !== t && (e._iDisplayStart = 0),
                    e._drawHold = t,
                    se(e),
                    e._drawHold = !1
                }
                function ue(t) {
                    var n = t.oClasses
                      , i = e(t.nTable)
                      , o = e("<div/>").insertBefore(i)
                      , a = t.oFeatures
                      , r = e("<div/>", {
                        id: t.sTableId + "_wrapper",
                        class: n.sWrapper + (t.nTFoot ? "" : " " + n.sNoFooter)
                    });
                    t.nHolding = o[0],
                    t.nTableWrapper = r[0],
                    t.nTableReinsertBefore = t.nTable.nextSibling;
                    for (var s, u, c, d, h, p, f = t.sDom.split(""), v = 0; v < f.length; v++) {
                        if (s = null,
                        "<" == (u = f[v])) {
                            if (c = e("<div/>")[0],
                            "'" == (d = f[v + 1]) || '"' == d) {
                                for (h = "",
                                p = 2; f[v + p] != d; )
                                    h += f[v + p],
                                    p++;
                                if ("H" == h ? h = n.sJUIHeader : "F" == h && (h = n.sJUIFooter),
                                -1 != h.indexOf(".")) {
                                    var g = h.split(".");
                                    c.id = g[0].substr(1, g[0].length - 1),
                                    c.className = g[1]
                                } else
                                    "#" == h.charAt(0) ? c.id = h.substr(1, h.length - 1) : c.className = h;
                                v += p
                            }
                            r.append(c),
                            r = e(c)
                        } else if (">" == u)
                            r = r.parent();
                        else if ("l" == u && a.bPaginate && a.bLengthChange)
                            s = Re(t);
                        else if ("f" == u && a.bFilter)
                            s = me(t);
                        else if ("r" == u && a.bProcessing)
                            s = je(t);
                        else if ("t" == u)
                            s = Ne(t);
                        else if ("i" == u && a.bInfo)
                            s = Me(t);
                        else if ("p" == u && a.bPaginate)
                            s = $e(t);
                        else if (0 !== l.ext.feature.length)
                            for (var m = l.ext.feature, y = 0, b = m.length; y < b; y++)
                                if (u == m[y].cFeature) {
                                    s = m[y].fnInit(t);
                                    break
                                }
                        if (s) {
                            var _ = t.aanFeatures;
                            _[u] || (_[u] = []),
                            _[u].push(s),
                            r.append(s)
                        }
                    }
                    o.replaceWith(r),
                    t.nHolding = null
                }
                function ce(t, n) {
                    var i, o, a, r, s, l, u, c, d, h, p, f = e(n).children("tr"), v = function(e, t, n) {
                        for (var i = e[t]; i[n]; )
                            n++;
                        return n
                    };
                    for (t.splice(0, t.length),
                    a = 0,
                    l = f.length; a < l; a++)
                        t.push([]);
                    for (a = 0,
                    l = f.length; a < l; a++)
                        for (i = f[a],
                        c = 0,
                        o = i.firstChild; o; ) {
                            if ("TD" == o.nodeName.toUpperCase() || "TH" == o.nodeName.toUpperCase())
                                for (d = 1 * o.getAttribute("colspan"),
                                h = 1 * o.getAttribute("rowspan"),
                                d = d && 0 !== d && 1 !== d ? d : 1,
                                h = h && 0 !== h && 1 !== h ? h : 1,
                                u = v(t, a, c),
                                p = 1 === d,
                                s = 0; s < d; s++)
                                    for (r = 0; r < h; r++)
                                        t[a + r][u + s] = {
                                            cell: o,
                                            unique: p
                                        },
                                        t[a + r].nTr = i;
                            o = o.nextSibling
                        }
                }
                function de(e, t, n) {
                    var i = [];
                    n || (n = e.aoHeader,
                    t && ce(n = [], t));
                    for (var o = 0, a = n.length; o < a; o++)
                        for (var r = 0, s = n[o].length; r < s; r++)
                            !n[o][r].unique || i[r] && e.bSortCellsTop || (i[r] = n[o][r].cell);
                    return i
                }
                function he(t, n, i) {
                    if (dt(t, "aoServerParams", "serverParams", [n]),
                    n && e.isArray(n)) {
                        var o = {}
                          , a = /(.*?)\[\]$/;
                        e.each(n, function(e, t) {
                            var n = t.name.match(a);
                            if (n) {
                                var i = n[0];
                                o[i] || (o[i] = []),
                                o[i].push(t.value)
                            } else
                                o[t.name] = t.value
                        }),
                        n = o
                    }
                    var r, s = t.ajax, l = t.oInstance, u = function(e) {
                        dt(t, null, "xhr", [t, e, t.jqXHR]),
                        i(e)
                    };
                    if (e.isPlainObject(s) && s.data) {
                        var c = "function" == typeof (r = s.data) ? r(n, t) : r;
                        n = "function" == typeof r && c ? c : e.extend(!0, n, c),
                        delete s.data
                    }
                    var d = {
                        data: n,
                        success: function(e) {
                            var n = e.error || e.sError;
                            n && rt(t, 0, n),
                            t.json = e,
                            u(e)
                        },
                        dataType: "json",
                        cache: !1,
                        type: t.sServerMethod,
                        error: function(n, i, o) {
                            var a = dt(t, null, "xhr", [t, null, t.jqXHR]);
                            -1 === e.inArray(!0, a) && ("parsererror" == i ? rt(t, 0, "Invalid JSON response", 1) : 4 === n.readyState && rt(t, 0, "Ajax error", 7)),
                            He(t, !1)
                        }
                    };
                    t.oAjaxData = n,
                    dt(t, null, "preXhr", [t, n]),
                    t.fnServerData ? t.fnServerData.call(l, t.sAjaxSource, e.map(n, function(e, t) {
                        return {
                            name: t,
                            value: e
                        }
                    }), u, t) : t.sAjaxSource || "string" == typeof s ? t.jqXHR = e.ajax(e.extend(d, {
                        url: s || t.sAjaxSource
                    })) : "function" == typeof s ? t.jqXHR = s.call(l, n, u, t) : (t.jqXHR = e.ajax(e.extend(d, s)),
                    s.data = r)
                }
                function pe(e) {
                    return !e.bAjaxDataGet || (e.iDraw++,
                    He(e, !0),
                    he(e, fe(e), function(t) {
                        ve(e, t)
                    }),
                    !1)
                }
                function fe(t) {
                    var n, i, o, a, r = t.aoColumns, s = r.length, u = t.oFeatures, c = t.oPreviousSearch, d = t.aoPreSearchCols, h = [], p = Je(t), f = t._iDisplayStart, v = !1 !== u.bPaginate ? t._iDisplayLength : -1, g = function(e, t) {
                        h.push({
                            name: e,
                            value: t
                        })
                    };
                    g("sEcho", t.iDraw),
                    g("iColumns", s),
                    g("sColumns", _(r, "sName").join(",")),
                    g("iDisplayStart", f),
                    g("iDisplayLength", v);
                    var m = {
                        draw: t.iDraw,
                        columns: [],
                        order: [],
                        start: f,
                        length: v,
                        search: {
                            value: c.sSearch,
                            regex: c.bRegex
                        }
                    };
                    for (n = 0; n < s; n++)
                        o = r[n],
                        a = d[n],
                        i = "function" == typeof o.mData ? "function" : o.mData,
                        m.columns.push({
                            data: i,
                            name: o.sName,
                            searchable: o.bSearchable,
                            orderable: o.bSortable,
                            search: {
                                value: a.sSearch,
                                regex: a.bRegex
                            }
                        }),
                        g("mDataProp_" + n, i),
                        u.bFilter && (g("sSearch_" + n, a.sSearch),
                        g("bRegex_" + n, a.bRegex),
                        g("bSearchable_" + n, o.bSearchable)),
                        u.bSort && g("bSortable_" + n, o.bSortable);
                    u.bFilter && (g("sSearch", c.sSearch),
                    g("bRegex", c.bRegex)),
                    u.bSort && (e.each(p, function(e, t) {
                        m.order.push({
                            column: t.col,
                            dir: t.dir
                        }),
                        g("iSortCol_" + e, t.col),
                        g("sSortDir_" + e, t.dir)
                    }),
                    g("iSortingCols", p.length));
                    var y = l.ext.legacy.ajax;
                    return null === y ? t.sAjaxSource ? h : m : y ? h : m
                }
                function ve(e, t) {
                    var n = function(e, n) {
                        return t[e] !== i ? t[e] : t[n]
                    }
                      , o = ge(e, t)
                      , a = n("sEcho", "draw")
                      , r = n("iTotalRecords", "recordsTotal")
                      , s = n("iTotalDisplayRecords", "recordsFiltered");
                    if (a) {
                        if (1 * a < e.iDraw)
                            return;
                        e.iDraw = 1 * a
                    }
                    Z(e),
                    e._iRecordsTotal = parseInt(r, 10),
                    e._iRecordsDisplay = parseInt(s, 10);
                    for (var l = 0, u = o.length; l < u; l++)
                        q(e, o[l]);
                    e.aiDisplay = e.aiDisplayMaster.slice(),
                    e.bAjaxDataGet = !1,
                    se(e),
                    e._bInitComplete || Ie(e, t),
                    e.bAjaxDataGet = !0,
                    He(e, !1)
                }
                function ge(t, n) {
                    var o = e.isPlainObject(t.ajax) && t.ajax.dataSrc !== i ? t.ajax.dataSrc : t.sAjaxDataProp;
                    return "data" === o ? n.aaData || n[o] : "" !== o ? J(o)(n) : n
                }
                function me(t) {
                    var i = t.oClasses
                      , o = t.sTableId
                      , a = t.oLanguage
                      , r = t.oPreviousSearch
                      , s = t.aanFeatures
                      , l = '<input type="search" class="' + i.sFilterInput + '"/>'
                      , u = a.sSearch;
                    u = u.match(/_INPUT_/) ? u.replace("_INPUT_", l) : u + l;
                    var c = e("<div/>", {
                        id: s.f ? null : o + "_filter",
                        class: i.sFilter
                    }).append(e("<label/>").append(u))
                      , d = function() {
                        s.f;
                        var e = this.value ? this.value : "";
                        e != r.sSearch && (ye(t, {
                            sSearch: e,
                            bRegex: r.bRegex,
                            bSmart: r.bSmart,
                            bCaseInsensitive: r.bCaseInsensitive
                        }),
                        t._iDisplayStart = 0,
                        se(t))
                    }
                      , h = null !== t.searchDelay ? t.searchDelay : "ssp" === ft(t) ? 400 : 0
                      , p = e("input", c).val(r.sSearch).attr("placeholder", a.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", h ? Ve(d, h) : d).on("keypress.DT", function(e) {
                        if (13 == e.keyCode)
                            return !1
                    }).attr("aria-controls", o);
                    return e(t.nTable).on("search.dt.DT", function(e, i) {
                        if (t === i)
                            try {
                                p[0] !== n.activeElement && p.val(r.sSearch)
                            } catch (e) {}
                    }),
                    c[0]
                }
                function ye(e, t, n) {
                    var o = e.oPreviousSearch
                      , a = e.aoPreSearchCols
                      , r = function(e) {
                        o.sSearch = e.sSearch,
                        o.bRegex = e.bRegex,
                        o.bSmart = e.bSmart,
                        o.bCaseInsensitive = e.bCaseInsensitive
                    }
                      , s = function(e) {
                        return e.bEscapeRegex !== i ? !e.bEscapeRegex : e.bRegex
                    };
                    if (F(e),
                    "ssp" != ft(e)) {
                        we(e, t.sSearch, n, s(t), t.bSmart, t.bCaseInsensitive),
                        r(t);
                        for (var l = 0; l < a.length; l++)
                            _e(e, a[l].sSearch, l, s(a[l]), a[l].bSmart, a[l].bCaseInsensitive);
                        be(e)
                    } else
                        r(t);
                    e.bFiltered = !0,
                    dt(e, null, "search", [e])
                }
                function be(t) {
                    for (var n, i, o = l.ext.search, a = t.aiDisplay, r = 0, s = o.length; r < s; r++) {
                        for (var u = [], c = 0, d = a.length; c < d; c++)
                            i = a[c],
                            n = t.aoData[i],
                            o[r](t, n._aFilterData, i, n._aData, c) && u.push(i);
                        a.length = 0,
                        e.merge(a, u)
                    }
                }
                function _e(e, t, n, i, o, a) {
                    if ("" !== t) {
                        for (var r, s = [], l = e.aiDisplay, u = Ce(t, i, o, a), c = 0; c < l.length; c++)
                            r = e.aoData[l[c]]._aFilterData[n],
                            u.test(r) && s.push(l[c]);
                        e.aiDisplay = s
                    }
                }
                function we(e, t, n, i, o, a) {
                    var r, s, u, c = Ce(t, i, o, a), d = e.oPreviousSearch.sSearch, h = e.aiDisplayMaster, p = [];
                    if (0 !== l.ext.search.length && (n = !0),
                    s = De(e),
                    t.length <= 0)
                        e.aiDisplay = h.slice();
                    else {
                        for ((s || n || d.length > t.length || 0 !== t.indexOf(d) || e.bSorted) && (e.aiDisplay = h.slice()),
                        r = e.aiDisplay,
                        u = 0; u < r.length; u++)
                            c.test(e.aoData[r[u]]._sFilterRow) && p.push(r[u]);
                        e.aiDisplay = p
                    }
                }
                function Ce(t, n, i, o) {
                    if (t = n ? t : xe(t),
                    i) {
                        var a = e.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function(e) {
                            if ('"' === e.charAt(0)) {
                                var t = e.match(/^"(.*)"$/);
                                e = t ? t[1] : e
                            }
                            return e.replace('"', "")
                        });
                        t = "^(?=.*?" + a.join(")(?=.*?") + ").*$"
                    }
                    return new RegExp(t,o ? "i" : "")
                }
                var xe = l.util.escapeRegex
                  , ke = e("<div>")[0]
                  , Te = ke.textContent !== i;
                function De(e) {
                    var t, n, i, o, a, r, s, u, c = e.aoColumns, d = l.ext.type.search, h = !1;
                    for (n = 0,
                    o = e.aoData.length; n < o; n++)
                        if (!(u = e.aoData[n])._aFilterData) {
                            for (r = [],
                            i = 0,
                            a = c.length; i < a; i++)
                                (t = c[i]).bSearchable ? (s = V(e, n, i, "filter"),
                                d[t.sType] && (s = d[t.sType](s)),
                                null === s && (s = ""),
                                "string" != typeof s && s.toString && (s = s.toString())) : s = "",
                                s.indexOf && -1 !== s.indexOf("&") && (ke.innerHTML = s,
                                s = Te ? ke.textContent : ke.innerText),
                                s.replace && (s = s.replace(/[\r\n]/g, "")),
                                r.push(s);
                            u._aFilterData = r,
                            u._sFilterRow = r.join("  "),
                            h = !0
                        }
                    return h
                }
                function Se(e) {
                    return {
                        search: e.sSearch,
                        smart: e.bSmart,
                        regex: e.bRegex,
                        caseInsensitive: e.bCaseInsensitive
                    }
                }
                function Ee(e) {
                    return {
                        sSearch: e.search,
                        bSmart: e.smart,
                        bRegex: e.regex,
                        bCaseInsensitive: e.caseInsensitive
                    }
                }
                function Me(t) {
                    var n = t.sTableId
                      , i = t.aanFeatures.i
                      , o = e("<div/>", {
                        class: t.oClasses.sInfo,
                        id: i ? null : n + "_info"
                    });
                    return i || (t.aoDrawCallback.push({
                        fn: Le,
                        sName: "information"
                    }),
                    o.attr("role", "status").attr("aria-live", "polite"),
                    e(t.nTable).attr("aria-describedby", n + "_info")),
                    o[0]
                }
                function Le(t) {
                    var n = t.aanFeatures.i;
                    if (0 !== n.length) {
                        var i = t.oLanguage
                          , o = t._iDisplayStart + 1
                          , a = t.fnDisplayEnd()
                          , r = t.fnRecordsTotal()
                          , s = t.fnRecordsDisplay()
                          , l = s ? i.sInfo : i.sInfoEmpty;
                        s !== r && (l += " " + i.sInfoFiltered),
                        l += i.sInfoPostFix,
                        l = Oe(t, l);
                        var u = i.fnInfoCallback;
                        null !== u && (l = u.call(t.oInstance, t, o, a, r, s, l)),
                        e(n).html(l)
                    }
                }
                function Oe(e, t) {
                    var n = e.fnFormatNumber
                      , i = e._iDisplayStart + 1
                      , o = e._iDisplayLength
                      , a = e.fnRecordsDisplay()
                      , r = -1 === o;
                    return t.replace(/_START_/g, n.call(e, i)).replace(/_END_/g, n.call(e, e.fnDisplayEnd())).replace(/_MAX_/g, n.call(e, e.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(e, a)).replace(/_PAGE_/g, n.call(e, r ? 1 : Math.ceil(i / o))).replace(/_PAGES_/g, n.call(e, r ? 1 : Math.ceil(a / o)))
                }
                function Ae(e) {
                    var t, n, i, o = e.iInitDisplayStart, a = e.aoColumns, r = e.oFeatures, s = e.bDeferLoading;
                    if (e.bInitialised) {
                        for (ue(e),
                        ae(e),
                        re(e, e.aoHeader),
                        re(e, e.aoFooter),
                        He(e, !0),
                        r.bAutoWidth && ze(e),
                        t = 0,
                        n = a.length; t < n; t++)
                            (i = a[t]).sWidth && (i.nTh.style.width = Qe(i.sWidth));
                        dt(e, null, "preInit", [e]),
                        le(e);
                        var l = ft(e);
                        ("ssp" != l || s) && ("ajax" == l ? he(e, [], function(n) {
                            var i = ge(e, n);
                            for (t = 0; t < i.length; t++)
                                q(e, i[t]);
                            e.iInitDisplayStart = o,
                            le(e),
                            He(e, !1),
                            Ie(e, n)
                        }) : (He(e, !1),
                        Ie(e)))
                    } else
                        setTimeout(function() {
                            Ae(e)
                        }, 200)
                }
                function Ie(e, t) {
                    e._bInitComplete = !0,
                    (t || e.oInit.aaData) && $(e),
                    dt(e, null, "plugin-init", [e, t]),
                    dt(e, "aoInitComplete", "init", [e, t])
                }
                function Be(e, t) {
                    var n = parseInt(t, 10);
                    e._iDisplayLength = n,
                    ht(e),
                    dt(e, null, "length", [e, n])
                }
                function Re(t) {
                    for (var n = t.oClasses, i = t.sTableId, o = t.aLengthMenu, a = e.isArray(o[0]), r = a ? o[0] : o, s = a ? o[1] : o, l = e("<select/>", {
                        name: i + "_length",
                        "aria-controls": i,
                        class: n.sLengthSelect
                    }), u = 0, c = r.length; u < c; u++)
                        l[0][u] = new Option("number" == typeof s[u] ? t.fnFormatNumber(s[u]) : s[u],r[u]);
                    var d = e("<div><label/></div>").addClass(n.sLength);
                    return t.aanFeatures.l || (d[0].id = i + "_length"),
                    d.children().append(t.oLanguage.sLengthMenu.replace("_MENU_", l[0].outerHTML)),
                    e("select", d).val(t._iDisplayLength).on("change.DT", function(n) {
                        Be(t, e(this).val()),
                        se(t)
                    }),
                    e(t.nTable).on("length.dt.DT", function(n, i, o) {
                        t === i && e("select", d).val(o)
                    }),
                    d[0]
                }
                function $e(t) {
                    var n = t.sPaginationType
                      , i = l.ext.pager[n]
                      , o = "function" == typeof i
                      , a = function(e) {
                        se(e)
                    }
                      , r = e("<div/>").addClass(t.oClasses.sPaging + n)[0]
                      , s = t.aanFeatures;
                    return o || i.fnInit(t, r, a),
                    s.p || (r.id = t.sTableId + "_paginate",
                    t.aoDrawCallback.push({
                        fn: function(e) {
                            if (o) {
                                var t, n, r = e._iDisplayStart, l = e._iDisplayLength, u = e.fnRecordsDisplay(), c = -1 === l, d = c ? 0 : Math.ceil(r / l), h = c ? 1 : Math.ceil(u / l), p = i(d, h);
                                for (t = 0,
                                n = s.p.length; t < n; t++)
                                    pt(e, "pageButton")(e, s.p[t], t, p, d, h)
                            } else
                                i.fnUpdate(e, a)
                        },
                        sName: "pagination"
                    })),
                    r
                }
                function Pe(e, t, n) {
                    var i = e._iDisplayStart
                      , o = e._iDisplayLength
                      , a = e.fnRecordsDisplay();
                    0 === a || -1 === o ? i = 0 : "number" == typeof t ? (i = t * o) > a && (i = 0) : "first" == t ? i = 0 : "previous" == t ? (i = o >= 0 ? i - o : 0) < 0 && (i = 0) : "next" == t ? i + o < a && (i += o) : "last" == t ? i = Math.floor((a - 1) / o) * o : rt(e, 0, "Unknown paging action: " + t, 5);
                    var r = e._iDisplayStart !== i;
                    return e._iDisplayStart = i,
                    r && (dt(e, null, "page", [e]),
                    n && se(e)),
                    r
                }
                function je(t) {
                    return e("<div/>", {
                        id: t.aanFeatures.r ? null : t.sTableId + "_processing",
                        class: t.oClasses.sProcessing
                    }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
                }
                function He(t, n) {
                    t.oFeatures.bProcessing && e(t.aanFeatures.r).css("display", n ? "block" : "none"),
                    dt(t, null, "processing", [t, n])
                }
                function Ne(t) {
                    var n = e(t.nTable);
                    n.attr("role", "grid");
                    var i = t.oScroll;
                    if ("" === i.sX && "" === i.sY)
                        return t.nTable;
                    var o = i.sX
                      , a = i.sY
                      , r = t.oClasses
                      , s = n.children("caption")
                      , l = s.length ? s[0]._captionSide : null
                      , u = e(n[0].cloneNode(!1))
                      , c = e(n[0].cloneNode(!1))
                      , d = n.children("tfoot")
                      , h = "<div/>"
                      , p = function(e) {
                        return e ? Qe(e) : null
                    };
                    d.length || (d = null);
                    var f = e(h, {
                        class: r.sScrollWrapper
                    }).append(e(h, {
                        class: r.sScrollHead
                    }).css({
                        overflow: "hidden",
                        position: "relative",
                        border: 0,
                        width: o ? p(o) : "100%"
                    }).append(e(h, {
                        class: r.sScrollHeadInner
                    }).css({
                        "box-sizing": "content-box",
                        width: i.sXInner || "100%"
                    }).append(u.removeAttr("id").css("margin-left", 0).append("top" === l ? s : null).append(n.children("thead"))))).append(e(h, {
                        class: r.sScrollBody
                    }).css({
                        position: "relative",
                        overflow: "auto",
                        width: p(o)
                    }).append(n));
                    d && f.append(e(h, {
                        class: r.sScrollFoot
                    }).css({
                        overflow: "hidden",
                        border: 0,
                        width: o ? p(o) : "100%"
                    }).append(e(h, {
                        class: r.sScrollFootInner
                    }).append(c.removeAttr("id").css("margin-left", 0).append("bottom" === l ? s : null).append(n.children("tfoot")))));
                    var v = f.children()
                      , g = v[0]
                      , m = v[1]
                      , y = d ? v[2] : null;
                    return o && e(m).on("scroll.DT", function(e) {
                        var t = this.scrollLeft;
                        g.scrollLeft = t,
                        d && (y.scrollLeft = t)
                    }),
                    e(m).css(a && i.bCollapse ? "max-height" : "height", a),
                    t.nScrollHead = g,
                    t.nScrollBody = m,
                    t.nScrollFoot = y,
                    t.aoDrawCallback.push({
                        fn: Fe,
                        sName: "scrolling"
                    }),
                    f[0]
                }
                function Fe(t) {
                    var n, o, a, r, s, l, u, c, d, h = t.oScroll, p = h.sX, f = h.sXInner, v = h.sY, g = h.iBarWidth, m = e(t.nScrollHead), y = m[0].style, b = m.children("div"), w = b[0].style, C = b.children("table"), x = t.nScrollBody, k = e(x), T = x.style, D = e(t.nScrollFoot), S = D.children("div"), E = S.children("table"), M = e(t.nTHead), L = e(t.nTable), O = L[0], A = O.style, I = t.nTFoot ? e(t.nTFoot) : null, B = t.oBrowser, R = B.bScrollOversize, j = _(t.aoColumns, "nTh"), H = [], N = [], F = [], W = [], q = function(e) {
                        var t = e.style;
                        t.paddingTop = "0",
                        t.paddingBottom = "0",
                        t.borderTopWidth = "0",
                        t.borderBottomWidth = "0",
                        t.height = 0
                    }, z = x.scrollHeight > x.clientHeight;
                    if (t.scrollBarVis !== z && t.scrollBarVis !== i)
                        return t.scrollBarVis = z,
                        void $(t);
                    t.scrollBarVis = z,
                    L.children("thead, tfoot").remove(),
                    I && (l = I.clone().prependTo(L),
                    o = I.find("tr"),
                    r = l.find("tr")),
                    s = M.clone().prependTo(L),
                    n = M.find("tr"),
                    a = s.find("tr"),
                    s.find("th, td").removeAttr("tabindex"),
                    p || (T.width = "100%",
                    m[0].style.width = "100%"),
                    e.each(de(t, s), function(e, n) {
                        u = P(t, e),
                        n.style.width = t.aoColumns[u].sWidth
                    }),
                    I && We(function(e) {
                        e.style.width = ""
                    }, r),
                    d = L.outerWidth(),
                    "" === p ? (A.width = "100%",
                    R && (L.find("tbody").height() > x.offsetHeight || "scroll" == k.css("overflow-y")) && (A.width = Qe(L.outerWidth() - g)),
                    d = L.outerWidth()) : "" !== f && (A.width = Qe(f),
                    d = L.outerWidth()),
                    We(q, a),
                    We(function(t) {
                        F.push(t.innerHTML),
                        H.push(Qe(e(t).css("width")))
                    }, a),
                    We(function(t, n) {
                        -1 !== e.inArray(t, j) && (t.style.width = H[n])
                    }, n),
                    e(a).height(0),
                    I && (We(q, r),
                    We(function(t) {
                        W.push(t.innerHTML),
                        N.push(Qe(e(t).css("width")))
                    }, r),
                    We(function(e, t) {
                        e.style.width = N[t]
                    }, o),
                    e(r).height(0)),
                    We(function(e, t) {
                        e.innerHTML = '<div class="dataTables_sizing">' + F[t] + "</div>",
                        e.childNodes[0].style.height = "0",
                        e.childNodes[0].style.overflow = "hidden",
                        e.style.width = H[t]
                    }, a),
                    I && We(function(e, t) {
                        e.innerHTML = '<div class="dataTables_sizing">' + W[t] + "</div>",
                        e.childNodes[0].style.height = "0",
                        e.childNodes[0].style.overflow = "hidden",
                        e.style.width = N[t]
                    }, r),
                    L.outerWidth() < d ? (c = x.scrollHeight > x.offsetHeight || "scroll" == k.css("overflow-y") ? d + g : d,
                    R && (x.scrollHeight > x.offsetHeight || "scroll" == k.css("overflow-y")) && (A.width = Qe(c - g)),
                    "" !== p && "" === f || rt(t, 1, "Possible column misalignment", 6)) : c = "100%",
                    T.width = Qe(c),
                    y.width = Qe(c),
                    I && (t.nScrollFoot.style.width = Qe(c)),
                    v || R && (T.height = Qe(O.offsetHeight + g));
                    var V = L.outerWidth();
                    C[0].style.width = Qe(V),
                    w.width = Qe(V);
                    var X = L.height() > x.clientHeight || "scroll" == k.css("overflow-y")
                      , U = "padding" + (B.bScrollbarLeft ? "Left" : "Right");
                    w[U] = X ? g + "px" : "0px",
                    I && (E[0].style.width = Qe(V),
                    S[0].style.width = Qe(V),
                    S[0].style[U] = X ? g + "px" : "0px"),
                    L.children("colgroup").insertBefore(L.children("thead")),
                    k.scroll(),
                    !t.bSorted && !t.bFiltered || t._drawHold || (x.scrollTop = 0)
                }
                function We(e, t, n) {
                    for (var i, o, a = 0, r = 0, s = t.length; r < s; ) {
                        for (i = t[r].firstChild,
                        o = n ? n[r].firstChild : null; i; )
                            1 === i.nodeType && (n ? e(i, o, a) : e(i, a),
                            a++),
                            i = i.nextSibling,
                            o = n ? o.nextSibling : null;
                        r++
                    }
                }
                var qe = /<.*?>/g;
                function ze(n) {
                    var i, o, a, r = n.nTable, s = n.aoColumns, l = n.oScroll, u = l.sY, c = l.sX, d = l.sXInner, h = s.length, p = N(n, "bVisible"), f = e("th", n.nTHead), v = r.getAttribute("width"), g = r.parentNode, m = !1, y = n.oBrowser, b = y.bScrollOversize, _ = r.style.width;
                    for (_ && -1 !== _.indexOf("%") && (v = _),
                    i = 0; i < p.length; i++)
                        null !== (o = s[p[i]]).sWidth && (o.sWidth = Xe(o.sWidthOrig, g),
                        m = !0);
                    if (b || !m && !c && !u && h == H(n) && h == f.length)
                        for (i = 0; i < h; i++) {
                            var w = P(n, i);
                            null !== w && (s[w].sWidth = Qe(f.eq(i).width()))
                        }
                    else {
                        var C = e(r).clone().css("visibility", "hidden").removeAttr("id");
                        C.find("tbody tr").remove();
                        var x = e("<tr/>").appendTo(C.find("tbody"));
                        for (C.find("thead, tfoot").remove(),
                        C.append(e(n.nTHead).clone()).append(e(n.nTFoot).clone()),
                        C.find("tfoot th, tfoot td").css("width", ""),
                        f = de(n, C.find("thead")[0]),
                        i = 0; i < p.length; i++)
                            o = s[p[i]],
                            f[i].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? Qe(o.sWidthOrig) : "",
                            o.sWidthOrig && c && e(f[i]).append(e("<div/>").css({
                                width: o.sWidthOrig,
                                margin: 0,
                                padding: 0,
                                border: 0,
                                height: 1
                            }));
                        if (n.aoData.length)
                            for (i = 0; i < p.length; i++)
                                a = p[i],
                                o = s[a],
                                e(Ue(n, a)).clone(!1).append(o.sContentPadding).appendTo(x);
                        e("[name]", C).removeAttr("name");
                        var k = e("<div/>").css(c || u ? {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: 1,
                            right: 0,
                            overflow: "hidden"
                        } : {}).append(C).appendTo(g);
                        c && d ? C.width(d) : c ? (C.css("width", "auto"),
                        C.removeAttr("width"),
                        C.width() < g.clientWidth && v && C.width(g.clientWidth)) : u ? C.width(g.clientWidth) : v && C.width(v);
                        var T = 0;
                        for (i = 0; i < p.length; i++) {
                            var D = e(f[i])
                              , S = D.outerWidth() - D.width()
                              , E = y.bBounding ? Math.ceil(f[i].getBoundingClientRect().width) : D.outerWidth();
                            T += E,
                            s[p[i]].sWidth = Qe(E - S)
                        }
                        r.style.width = Qe(T),
                        k.remove()
                    }
                    if (v && (r.style.width = Qe(v)),
                    (v || c) && !n._reszEvt) {
                        var M = function() {
                            e(t).on("resize.DT-" + n.sInstance, Ve(function() {
                                $(n)
                            }))
                        };
                        b ? setTimeout(M, 1e3) : M(),
                        n._reszEvt = !0
                    }
                }
                var Ve = l.util.throttle;
                function Xe(t, i) {
                    if (!t)
                        return 0;
                    var o = e("<div/>").css("width", Qe(t)).appendTo(i || n.body)
                      , a = o[0].offsetWidth;
                    return o.remove(),
                    a
                }
                function Ue(t, n) {
                    var i = Ye(t, n);
                    if (i < 0)
                        return null;
                    var o = t.aoData[i];
                    return o.nTr ? o.anCells[n] : e("<td/>").html(V(t, i, n, "display"))[0]
                }
                function Ye(e, t) {
                    for (var n, i = -1, o = -1, a = 0, r = e.aoData.length; a < r; a++)
                        (n = (n = (n = V(e, a, t, "display") + "").replace(qe, "")).replace(/&nbsp;/g, " ")).length > i && (i = n.length,
                        o = a);
                    return o
                }
                function Qe(e) {
                    return null === e ? "0px" : "number" == typeof e ? e < 0 ? "0px" : e + "px" : e.match(/\d$/) ? e + "px" : e
                }
                function Je(t) {
                    var n, o, a, r, s, u, c, d = [], h = t.aoColumns, p = t.aaSortingFixed, f = e.isPlainObject(p), v = [], g = function(t) {
                        t.length && !e.isArray(t[0]) ? v.push(t) : e.merge(v, t)
                    };
                    for (e.isArray(p) && g(p),
                    f && p.pre && g(p.pre),
                    g(t.aaSorting),
                    f && p.post && g(p.post),
                    n = 0; n < v.length; n++)
                        for (c = v[n][0],
                        r = h[c].aDataSort,
                        o = 0,
                        a = r.length; o < a; o++)
                            s = r[o],
                            u = h[s].sType || "string",
                            v[n]._idx === i && (v[n]._idx = e.inArray(v[n][1], h[s].asSorting)),
                            d.push({
                                src: c,
                                col: s,
                                dir: v[n][1],
                                index: v[n]._idx,
                                type: u,
                                formatter: l.ext.type.order[u + "-pre"]
                            });
                    return d
                }
                function Ke(e) {
                    var t, n, i, o, a, r = [], s = l.ext.type.order, u = e.aoData, c = (e.aoColumns,
                    0), d = e.aiDisplayMaster;
                    for (F(e),
                    a = Je(e),
                    t = 0,
                    n = a.length; t < n; t++)
                        (o = a[t]).formatter && c++,
                        nt(e, o.col);
                    if ("ssp" != ft(e) && 0 !== a.length) {
                        for (t = 0,
                        i = d.length; t < i; t++)
                            r[d[t]] = t;
                        c === a.length ? d.sort(function(e, t) {
                            var n, i, o, s, l, c = a.length, d = u[e]._aSortData, h = u[t]._aSortData;
                            for (o = 0; o < c; o++)
                                if (l = a[o],
                                n = d[l.col],
                                i = h[l.col],
                                0 !== (s = n < i ? -1 : n > i ? 1 : 0))
                                    return "asc" === l.dir ? s : -s;
                            return n = r[e],
                            i = r[t],
                            n < i ? -1 : n > i ? 1 : 0
                        }) : d.sort(function(e, t) {
                            var n, i, o, l, c, d, h = a.length, p = u[e]._aSortData, f = u[t]._aSortData;
                            for (o = 0; o < h; o++)
                                if (c = a[o],
                                n = p[c.col],
                                i = f[c.col],
                                d = s[c.type + "-" + c.dir] || s["string-" + c.dir],
                                0 !== (l = d(n, i)))
                                    return l;
                            return n = r[e],
                            i = r[t],
                            n < i ? -1 : n > i ? 1 : 0
                        })
                    }
                    e.bSorted = !0
                }
                function Ge(e) {
                    for (var t, n, i = e.aoColumns, o = Je(e), a = e.oLanguage.oAria, r = 0, s = i.length; r < s; r++) {
                        var l = i[r]
                          , u = l.asSorting
                          , c = l.sTitle.replace(/<.*?>/g, "")
                          , d = l.nTh;
                        d.removeAttribute("aria-sort"),
                        l.bSortable ? (o.length > 0 && o[0].col == r ? (d.setAttribute("aria-sort", "asc" == o[0].dir ? "ascending" : "descending"),
                        n = u[o[0].index + 1] || u[0]) : n = u[0],
                        t = c + ("asc" === n ? a.sSortAscending : a.sSortDescending)) : t = c,
                        d.setAttribute("aria-label", t)
                    }
                }
                function Ze(t, n, o, a) {
                    var r, s = t.aoColumns[n], l = t.aaSorting, u = s.asSorting, c = function(t, n) {
                        var o = t._idx;
                        return o === i && (o = e.inArray(t[1], u)),
                        o + 1 < u.length ? o + 1 : n ? null : 0
                    };
                    if ("number" == typeof l[0] && (l = t.aaSorting = [l]),
                    o && t.oFeatures.bSortMulti) {
                        var d = e.inArray(n, _(l, "0"));
                        -1 !== d ? (null === (r = c(l[d], !0)) && 1 === l.length && (r = 0),
                        null === r ? l.splice(d, 1) : (l[d][1] = u[r],
                        l[d]._idx = r)) : (l.push([n, u[0], 0]),
                        l[l.length - 1]._idx = 0)
                    } else
                        l.length && l[0][0] == n ? (r = c(l[0]),
                        l.length = 1,
                        l[0][1] = u[r],
                        l[0]._idx = r) : (l.length = 0,
                        l.push([n, u[0]]),
                        l[0]._idx = 0);
                    le(t),
                    "function" == typeof a && a(t)
                }
                function et(e, t, n, i) {
                    var o = e.aoColumns[n];
                    ut(t, {}, function(t) {
                        !1 !== o.bSortable && (e.oFeatures.bProcessing ? (He(e, !0),
                        setTimeout(function() {
                            Ze(e, n, t.shiftKey, i),
                            "ssp" !== ft(e) && He(e, !1)
                        }, 0)) : Ze(e, n, t.shiftKey, i))
                    })
                }
                function tt(t) {
                    var n, i, o, a = t.aLastSort, r = t.oClasses.sSortColumn, s = Je(t), l = t.oFeatures;
                    if (l.bSort && l.bSortClasses) {
                        for (n = 0,
                        i = a.length; n < i; n++)
                            o = a[n].src,
                            e(_(t.aoData, "anCells", o)).removeClass(r + (n < 2 ? n + 1 : 3));
                        for (n = 0,
                        i = s.length; n < i; n++)
                            o = s[n].src,
                            e(_(t.aoData, "anCells", o)).addClass(r + (n < 2 ? n + 1 : 3))
                    }
                    t.aLastSort = s
                }
                function nt(e, t) {
                    var n, i, o, a = e.aoColumns[t], r = l.ext.order[a.sSortDataType];
                    r && (n = r.call(e.oInstance, e, t, j(e, t)));
                    for (var s = l.ext.type.order[a.sType + "-pre"], u = 0, c = e.aoData.length; u < c; u++)
                        (i = e.aoData[u])._aSortData || (i._aSortData = []),
                        i._aSortData[t] && !r || (o = r ? n[u] : V(e, u, t, "sort"),
                        i._aSortData[t] = s ? s(o) : o)
                }
                function it(t) {
                    if (t.oFeatures.bStateSave && !t.bDestroying) {
                        var n = {
                            time: +new Date,
                            start: t._iDisplayStart,
                            length: t._iDisplayLength,
                            order: e.extend(!0, [], t.aaSorting),
                            search: Se(t.oPreviousSearch),
                            columns: e.map(t.aoColumns, function(e, n) {
                                return {
                                    visible: e.bVisible,
                                    search: Se(t.aoPreSearchCols[n])
                                }
                            })
                        };
                        dt(t, "aoStateSaveParams", "stateSaveParams", [t, n]),
                        t.oSavedState = n,
                        t.fnStateSaveCallback.call(t.oInstance, t, n)
                    }
                }
                function ot(t, n, o) {
                    var a, r, s = t.aoColumns, l = function(n) {
                        if (n && n.time) {
                            var l = dt(t, "aoStateLoadParams", "stateLoadParams", [t, n]);
                            if (-1 === e.inArray(!1, l)) {
                                var u = t.iStateDuration;
                                if (u > 0 && n.time < +new Date - 1e3 * u)
                                    o();
                                else if (n.columns && s.length !== n.columns.length)
                                    o();
                                else {
                                    if (t.oLoadedState = e.extend(!0, {}, n),
                                    n.start !== i && (t._iDisplayStart = n.start,
                                    t.iInitDisplayStart = n.start),
                                    n.length !== i && (t._iDisplayLength = n.length),
                                    n.order !== i && (t.aaSorting = [],
                                    e.each(n.order, function(e, n) {
                                        t.aaSorting.push(n[0] >= s.length ? [0, n[1]] : n)
                                    })),
                                    n.search !== i && e.extend(t.oPreviousSearch, Ee(n.search)),
                                    n.columns)
                                        for (a = 0,
                                        r = n.columns.length; a < r; a++) {
                                            var c = n.columns[a];
                                            c.visible !== i && (s[a].bVisible = c.visible),
                                            c.search !== i && e.extend(t.aoPreSearchCols[a], Ee(c.search))
                                        }
                                    dt(t, "aoStateLoaded", "stateLoaded", [t, n]),
                                    o()
                                }
                            } else
                                o()
                        } else
                            o()
                    };
                    if (t.oFeatures.bStateSave) {
                        var u = t.fnStateLoadCallback.call(t.oInstance, t, l);
                        u !== i && l(u)
                    } else
                        o()
                }
                function at(t) {
                    var n = l.settings
                      , i = e.inArray(t, _(n, "nTable"));
                    return -1 !== i ? n[i] : null
                }
                function rt(e, n, i, o) {
                    if (i = "DataTables warning: " + (e ? "table id=" + e.sTableId + " - " : "") + i,
                    o && (i += ". For more information about this error, please see http://datatables.net/tn/" + o),
                    n)
                        t.console && console.log;
                    else {
                        var a = l.ext
                          , r = a.sErrMode || a.errMode;
                        if (e && dt(e, null, "error", [e, o, i]),
                        "alert" == r)
                            alert(i);
                        else {
                            if ("throw" == r)
                                throw new Error(i);
                            "function" == typeof r && r(e, o, i)
                        }
                    }
                }
                function st(t, n, o, a) {
                    e.isArray(o) ? e.each(o, function(i, o) {
                        e.isArray(o) ? st(t, n, o[0], o[1]) : st(t, n, o)
                    }) : (a === i && (a = o),
                    n[o] !== i && (t[a] = n[o]))
                }
                function lt(t, n, i) {
                    var o;
                    for (var a in n)
                        n.hasOwnProperty(a) && (o = n[a],
                        e.isPlainObject(o) ? (e.isPlainObject(t[a]) || (t[a] = {}),
                        e.extend(!0, t[a], o)) : i && "data" !== a && "aaData" !== a && e.isArray(o) ? t[a] = o.slice() : t[a] = o);
                    return t
                }
                function ut(t, n, i) {
                    e(t).on("click.DT", n, function(n) {
                        e(t).blur(),
                        i(n)
                    }).on("keypress.DT", n, function(e) {
                        13 === e.which && (e.preventDefault(),
                        i(e))
                    }).on("selectstart.DT", function() {
                        return !1
                    })
                }
                function ct(e, t, n, i) {
                    n && e[t].push({
                        fn: n,
                        sName: i
                    })
                }
                function dt(t, n, i, o) {
                    var a = [];
                    if (n && (a = e.map(t[n].slice().reverse(), function(e, n) {
                        return e.fn.apply(t.oInstance, o)
                    })),
                    null !== i) {
                        var r = e.Event(i + ".dt");
                        e(t.nTable).trigger(r, o),
                        a.push(r.result)
                    }
                    return a
                }
                function ht(e) {
                    var t = e._iDisplayStart
                      , n = e.fnDisplayEnd()
                      , i = e._iDisplayLength;
                    t >= n && (t = n - i),
                    t -= t % i,
                    (-1 === i || t < 0) && (t = 0),
                    e._iDisplayStart = t
                }
                function pt(t, n) {
                    var i = t.renderer
                      , o = l.ext.renderer[n];
                    return e.isPlainObject(i) && i[n] ? o[i[n]] || o._ : "string" == typeof i && o[i] || o._
                }
                function ft(e) {
                    return e.oFeatures.bServerSide ? "ssp" : e.ajax || e.sAjaxSource ? "ajax" : "dom"
                }
                var vt = []
                  , gt = Array.prototype;
                a = function(t, n) {
                    if (!(this instanceof a))
                        return new a(t,n);
                    var i = []
                      , o = function(t) {
                        var n = function(t) {
                            var n, i, o = l.settings, a = e.map(o, function(e, t) {
                                return e.nTable
                            });
                            if (!t)
                                return [];
                            if (t.nTable && t.oApi)
                                return [t];
                            if (t.nodeName && "table" === t.nodeName.toLowerCase())
                                return -1 !== (n = e.inArray(t, a)) ? [o[n]] : null;
                            if (t && "function" == typeof t.settings)
                                return t.settings().toArray();
                            "string" == typeof t ? i = e(t) : t instanceof e && (i = t);
                            if (i)
                                return i.map(function(t) {
                                    return -1 !== (n = e.inArray(this, a)) ? o[n] : null
                                }).toArray()
                        }(t);
                        n && (i = i.concat(n))
                    };
                    if (e.isArray(t))
                        for (var r = 0, s = t.length; r < s; r++)
                            o(t[r]);
                    else
                        o(t);
                    this.context = T(i),
                    n && e.merge(this, n),
                    this.selector = {
                        rows: null,
                        cols: null,
                        opts: null
                    },
                    a.extend(this, this, vt)
                }
                ,
                l.Api = a,
                e.extend(a.prototype, {
                    any: function() {
                        return 0 !== this.count()
                    },
                    concat: gt.concat,
                    context: [],
                    count: function() {
                        return this.flatten().length
                    },
                    each: function(e) {
                        for (var t = 0, n = this.length; t < n; t++)
                            e.call(this, this[t], t, this);
                        return this
                    },
                    eq: function(e) {
                        var t = this.context;
                        return t.length > e ? new a(t[e],this[e]) : null
                    },
                    filter: function(e) {
                        var t = [];
                        if (gt.filter)
                            t = gt.filter.call(this, e, this);
                        else
                            for (var n = 0, i = this.length; n < i; n++)
                                e.call(this, this[n], n, this) && t.push(this[n]);
                        return new a(this.context,t)
                    },
                    flatten: function() {
                        var e = [];
                        return new a(this.context,e.concat.apply(e, this.toArray()))
                    },
                    join: gt.join,
                    indexOf: gt.indexOf || function(e, t) {
                        for (var n = t || 0, i = this.length; n < i; n++)
                            if (this[n] === e)
                                return n;
                        return -1
                    }
                    ,
                    iterator: function(e, t, n, o) {
                        var r, s, l, u, c, d, h, p, f = [], v = this.context, g = this.selector;
                        for ("string" == typeof e && (o = n,
                        n = t,
                        t = e,
                        e = !1),
                        s = 0,
                        l = v.length; s < l; s++) {
                            var m = new a(v[s]);
                            if ("table" === t)
                                (r = n.call(m, v[s], s)) !== i && f.push(r);
                            else if ("columns" === t || "rows" === t)
                                (r = n.call(m, v[s], this[s], s)) !== i && f.push(r);
                            else if ("column" === t || "column-rows" === t || "row" === t || "cell" === t)
                                for (h = this[s],
                                "column-rows" === t && (d = wt(v[s], g.opts)),
                                u = 0,
                                c = h.length; u < c; u++)
                                    p = h[u],
                                    (r = "cell" === t ? n.call(m, v[s], p.row, p.column, s, u) : n.call(m, v[s], p, s, u, d)) !== i && f.push(r)
                        }
                        if (f.length || o) {
                            var y = new a(v,e ? f.concat.apply([], f) : f)
                              , b = y.selector;
                            return b.rows = g.rows,
                            b.cols = g.cols,
                            b.opts = g.opts,
                            y
                        }
                        return this
                    },
                    lastIndexOf: gt.lastIndexOf || function(e, t) {
                        return this.indexOf.apply(this.toArray.reverse(), arguments)
                    }
                    ,
                    length: 0,
                    map: function(e) {
                        var t = [];
                        if (gt.map)
                            t = gt.map.call(this, e, this);
                        else
                            for (var n = 0, i = this.length; n < i; n++)
                                t.push(e.call(this, this[n], n));
                        return new a(this.context,t)
                    },
                    pluck: function(e) {
                        return this.map(function(t) {
                            return t[e]
                        })
                    },
                    pop: gt.pop,
                    push: gt.push,
                    reduce: gt.reduce || function(e, t) {
                        return I(this, e, t, 0, this.length, 1)
                    }
                    ,
                    reduceRight: gt.reduceRight || function(e, t) {
                        return I(this, e, t, this.length - 1, -1, -1)
                    }
                    ,
                    reverse: gt.reverse,
                    selector: null,
                    shift: gt.shift,
                    slice: function() {
                        return new a(this.context,this)
                    },
                    sort: gt.sort,
                    splice: gt.splice,
                    toArray: function() {
                        return gt.slice.call(this)
                    },
                    to$: function() {
                        return e(this)
                    },
                    toJQuery: function() {
                        return e(this)
                    },
                    unique: function() {
                        return new a(this.context,T(this))
                    },
                    unshift: gt.unshift
                }),
                a.extend = function(t, n, i) {
                    if (i.length && n && (n instanceof a || n.__dt_wrapper)) {
                        var o, r, s, l = function(e, t, n) {
                            return function() {
                                var i = t.apply(e, arguments);
                                return a.extend(i, i, n.methodExt),
                                i
                            }
                        };
                        for (o = 0,
                        r = i.length; o < r; o++)
                            s = i[o],
                            n[s.name] = "function" == typeof s.val ? l(t, s.val, s) : e.isPlainObject(s.val) ? {} : s.val,
                            n[s.name].__dt_wrapper = !0,
                            a.extend(t, n[s.name], s.propExt)
                    }
                }
                ,
                a.register = r = function(t, n) {
                    if (e.isArray(t))
                        for (var i = 0, o = t.length; i < o; i++)
                            a.register(t[i], n);
                    else {
                        var r, s, l, u, c = t.split("."), d = vt, h = function(e, t) {
                            for (var n = 0, i = e.length; n < i; n++)
                                if (e[n].name === t)
                                    return e[n];
                            return null
                        };
                        for (r = 0,
                        s = c.length; r < s; r++) {
                            u = -1 !== c[r].indexOf("()"),
                            l = u ? c[r].replace("()", "") : c[r];
                            var p = h(d, l);
                            p || (p = {
                                name: l,
                                val: {},
                                methodExt: [],
                                propExt: []
                            },
                            d.push(p)),
                            r === s - 1 ? p.val = n : d = u ? p.methodExt : p.propExt
                        }
                    }
                }
                ,
                a.registerPlural = s = function(t, n, o) {
                    a.register(t, o),
                    a.register(n, function() {
                        var t = o.apply(this, arguments);
                        return t === this ? this : t instanceof a ? t.length ? e.isArray(t[0]) ? new a(t.context,t[0]) : t[0] : i : t
                    })
                }
                ;
                r("tables()", function(t) {
                    return t ? new a(function(t, n) {
                        if ("number" == typeof t)
                            return [n[t]];
                        var i = e.map(n, function(e, t) {
                            return e.nTable
                        });
                        return e(i).filter(t).map(function(t) {
                            var o = e.inArray(this, i);
                            return n[o]
                        }).toArray()
                    }(t, this.context)) : this
                }),
                r("table()", function(e) {
                    var t = this.tables(e)
                      , n = t.context;
                    return n.length ? new a(n[0]) : t
                }),
                s("tables().nodes()", "table().node()", function() {
                    return this.iterator("table", function(e) {
                        return e.nTable
                    }, 1)
                }),
                s("tables().body()", "table().body()", function() {
                    return this.iterator("table", function(e) {
                        return e.nTBody
                    }, 1)
                }),
                s("tables().header()", "table().header()", function() {
                    return this.iterator("table", function(e) {
                        return e.nTHead
                    }, 1)
                }),
                s("tables().footer()", "table().footer()", function() {
                    return this.iterator("table", function(e) {
                        return e.nTFoot
                    }, 1)
                }),
                s("tables().containers()", "table().container()", function() {
                    return this.iterator("table", function(e) {
                        return e.nTableWrapper
                    }, 1)
                }),
                r("draw()", function(e) {
                    return this.iterator("table", function(t) {
                        "page" === e ? se(t) : ("string" == typeof e && (e = "full-hold" !== e),
                        le(t, !1 === e))
                    })
                }),
                r("page()", function(e) {
                    return e === i ? this.page.info().page : this.iterator("table", function(t) {
                        Pe(t, e)
                    })
                }),
                r("page.info()", function(e) {
                    if (0 === this.context.length)
                        return i;
                    var t = this.context[0]
                      , n = t._iDisplayStart
                      , o = t.oFeatures.bPaginate ? t._iDisplayLength : -1
                      , a = t.fnRecordsDisplay()
                      , r = -1 === o;
                    return {
                        page: r ? 0 : Math.floor(n / o),
                        pages: r ? 1 : Math.ceil(a / o),
                        start: n,
                        end: t.fnDisplayEnd(),
                        length: o,
                        recordsTotal: t.fnRecordsTotal(),
                        recordsDisplay: a,
                        serverSide: "ssp" === ft(t)
                    }
                }),
                r("page.len()", function(e) {
                    return e === i ? 0 !== this.context.length ? this.context[0]._iDisplayLength : i : this.iterator("table", function(t) {
                        Be(t, e)
                    })
                });
                var mt = function(e, t, n) {
                    if (n) {
                        var i = new a(e);
                        i.one("draw", function() {
                            n(i.ajax.json())
                        })
                    }
                    if ("ssp" == ft(e))
                        le(e, t);
                    else {
                        He(e, !0);
                        var o = e.jqXHR;
                        o && 4 !== o.readyState && o.abort(),
                        he(e, [], function(n) {
                            Z(e);
                            for (var i = ge(e, n), o = 0, a = i.length; o < a; o++)
                                q(e, i[o]);
                            le(e, t),
                            He(e, !1)
                        })
                    }
                };
                r("ajax.json()", function() {
                    var e = this.context;
                    if (e.length > 0)
                        return e[0].json
                }),
                r("ajax.params()", function() {
                    var e = this.context;
                    if (e.length > 0)
                        return e[0].oAjaxData
                }),
                r("ajax.reload()", function(e, t) {
                    return this.iterator("table", function(n) {
                        mt(n, !1 === t, e)
                    })
                }),
                r("ajax.url()", function(t) {
                    var n = this.context;
                    return t === i ? 0 === n.length ? i : (n = n[0]).ajax ? e.isPlainObject(n.ajax) ? n.ajax.url : n.ajax : n.sAjaxSource : this.iterator("table", function(n) {
                        e.isPlainObject(n.ajax) ? n.ajax.url = t : n.ajax = t
                    })
                }),
                r("ajax.url().load()", function(e, t) {
                    return this.iterator("table", function(n) {
                        mt(n, !1 === t, e)
                    })
                });
                var yt = function(t, n, a, r, s) {
                    var l, u, c, d, h, p, f = [], v = typeof n;
                    for (n && "string" !== v && "function" !== v && n.length !== i || (n = [n]),
                    c = 0,
                    d = n.length; c < d; c++)
                        for (u = n[c] && n[c].split && !n[c].match(/[\[\(:]/) ? n[c].split(",") : [n[c]],
                        h = 0,
                        p = u.length; h < p; h++)
                            (l = a("string" == typeof u[h] ? e.trim(u[h]) : u[h])) && l.length && (f = f.concat(l));
                    var g = o.selector[t];
                    if (g.length)
                        for (c = 0,
                        d = g.length; c < d; c++)
                            f = g[c](r, s, f);
                    return T(f)
                }
                  , bt = function(t) {
                    return t || (t = {}),
                    t.filter && t.search === i && (t.search = t.filter),
                    e.extend({
                        search: "none",
                        order: "current",
                        page: "all"
                    }, t)
                }
                  , _t = function(e) {
                    for (var t = 0, n = e.length; t < n; t++)
                        if (e[t].length > 0)
                            return e[0] = e[t],
                            e[0].length = 1,
                            e.length = 1,
                            e.context = [e.context[t]],
                            e;
                    return e.length = 0,
                    e
                }
                  , wt = function(t, n) {
                    var i, o = [], a = t.aiDisplay, r = t.aiDisplayMaster, s = n.search, l = n.order, u = n.page;
                    if ("ssp" == ft(t))
                        return "removed" === s ? [] : C(0, r.length);
                    if ("current" == u)
                        for (d = t._iDisplayStart,
                        h = t.fnDisplayEnd(); d < h; d++)
                            o.push(a[d]);
                    else if ("current" == l || "applied" == l) {
                        if ("none" == s)
                            o = r.slice();
                        else if ("applied" == s)
                            o = a.slice();
                        else if ("removed" == s) {
                            for (var c = {}, d = 0, h = a.length; d < h; d++)
                                c[a[d]] = null;
                            o = e.map(r, function(e) {
                                return c.hasOwnProperty(e) ? null : e
                            })
                        }
                    } else if ("index" == l || "original" == l)
                        for (d = 0,
                        h = t.aoData.length; d < h; d++)
                            "none" == s ? o.push(d) : (-1 === (i = e.inArray(d, a)) && "removed" == s || i >= 0 && "applied" == s) && o.push(d);
                    return o
                };
                r("rows()", function(t, n) {
                    t === i ? t = "" : e.isPlainObject(t) && (n = t,
                    t = ""),
                    n = bt(n);
                    var o = this.iterator("table", function(o) {
                        return function(t, n, o) {
                            var a;
                            return yt("row", n, function(n) {
                                var r = g(n)
                                  , s = t.aoData;
                                if (null !== r && !o)
                                    return [r];
                                if (a || (a = wt(t, o)),
                                null !== r && -1 !== e.inArray(r, a))
                                    return [r];
                                if (null === n || n === i || "" === n)
                                    return a;
                                if ("function" == typeof n)
                                    return e.map(a, function(e) {
                                        var t = s[e];
                                        return n(e, t._aData, t.nTr) ? e : null
                                    });
                                if (n.nodeName) {
                                    var l = n._DT_RowIndex
                                      , u = n._DT_CellIndex;
                                    if (l !== i)
                                        return s[l] && s[l].nTr === n ? [l] : [];
                                    if (u)
                                        return s[u.row] && s[u.row].nTr === n ? [u.row] : [];
                                    var c = e(n).closest("*[data-dt-row]");
                                    return c.length ? [c.data("dt-row")] : []
                                }
                                if ("string" == typeof n && "#" === n.charAt(0)) {
                                    var d = t.aIds[n.replace(/^#/, "")];
                                    if (d !== i)
                                        return [d.idx]
                                }
                                var h = x(w(t.aoData, a, "nTr"));
                                return e(h).filter(n).map(function() {
                                    return this._DT_RowIndex
                                }).toArray()
                            }, t, o)
                        }(o, t, n)
                    }, 1);
                    return o.selector.rows = t,
                    o.selector.opts = n,
                    o
                }),
                r("rows().nodes()", function() {
                    return this.iterator("row", function(e, t) {
                        return e.aoData[t].nTr || i
                    }, 1)
                }),
                r("rows().data()", function() {
                    return this.iterator(!0, "rows", function(e, t) {
                        return w(e.aoData, t, "_aData")
                    }, 1)
                }),
                s("rows().cache()", "row().cache()", function(e) {
                    return this.iterator("row", function(t, n) {
                        var i = t.aoData[n];
                        return "search" === e ? i._aFilterData : i._aSortData
                    }, 1)
                }),
                s("rows().invalidate()", "row().invalidate()", function(e) {
                    return this.iterator("row", function(t, n) {
                        te(t, n, e)
                    })
                }),
                s("rows().indexes()", "row().index()", function() {
                    return this.iterator("row", function(e, t) {
                        return t
                    }, 1)
                }),
                s("rows().ids()", "row().id()", function(e) {
                    for (var t = [], n = this.context, i = 0, o = n.length; i < o; i++)
                        for (var r = 0, s = this[i].length; r < s; r++) {
                            var l = n[i].rowIdFn(n[i].aoData[this[i][r]]._aData);
                            t.push((!0 === e ? "#" : "") + l)
                        }
                    return new a(n,t)
                }),
                s("rows().remove()", "row().remove()", function() {
                    var e = this;
                    return this.iterator("row", function(t, n, o) {
                        var a, r, s, l, u, c, d = t.aoData, h = d[n];
                        for (d.splice(n, 1),
                        a = 0,
                        r = d.length; a < r; a++)
                            if (u = d[a],
                            c = u.anCells,
                            null !== u.nTr && (u.nTr._DT_RowIndex = a),
                            null !== c)
                                for (s = 0,
                                l = c.length; s < l; s++)
                                    c[s]._DT_CellIndex.row = a;
                        ee(t.aiDisplayMaster, n),
                        ee(t.aiDisplay, n),
                        ee(e[o], n, !1),
                        t._iRecordsDisplay > 0 && t._iRecordsDisplay--,
                        ht(t);
                        var p = t.rowIdFn(h._aData);
                        p !== i && delete t.aIds[p]
                    }),
                    this.iterator("table", function(e) {
                        for (var t = 0, n = e.aoData.length; t < n; t++)
                            e.aoData[t].idx = t
                    }),
                    this
                }),
                r("rows.add()", function(t) {
                    var n = this.iterator("table", function(e) {
                        var n, i, o, a = [];
                        for (i = 0,
                        o = t.length; i < o; i++)
                            (n = t[i]).nodeName && "TR" === n.nodeName.toUpperCase() ? a.push(z(e, n)[0]) : a.push(q(e, n));
                        return a
                    }, 1)
                      , i = this.rows(-1);
                    return i.pop(),
                    e.merge(i, n),
                    i
                }),
                r("row()", function(e, t) {
                    return _t(this.rows(e, t))
                }),
                r("row().data()", function(t) {
                    var n = this.context;
                    if (t === i)
                        return n.length && this.length ? n[0].aoData[this[0]]._aData : i;
                    var o = n[0].aoData[this[0]];
                    return o._aData = t,
                    e.isArray(t) && o.nTr.id && K(n[0].rowId)(t, o.nTr.id),
                    te(n[0], this[0], "data"),
                    this
                }),
                r("row().node()", function() {
                    var e = this.context;
                    return e.length && this.length && e[0].aoData[this[0]].nTr || null
                }),
                r("row.add()", function(t) {
                    t instanceof e && t.length && (t = t[0]);
                    var n = this.iterator("table", function(e) {
                        return t.nodeName && "TR" === t.nodeName.toUpperCase() ? z(e, t)[0] : q(e, t)
                    });
                    return this.row(n[0])
                });
                var Ct = function(e, t) {
                    var n = e.context;
                    if (n.length) {
                        var o = n[0].aoData[t !== i ? t : e[0]];
                        o && o._details && (o._details.remove(),
                        o._detailsShow = i,
                        o._details = i)
                    }
                }
                  , xt = function(e, t) {
                    var n = e.context;
                    if (n.length && e.length) {
                        var i = n[0].aoData[e[0]];
                        i._details && (i._detailsShow = t,
                        t ? i._details.insertAfter(i.nTr) : i._details.detach(),
                        kt(n[0]))
                    }
                }
                  , kt = function(e) {
                    var t = new a(e)
                      , n = e.aoData;
                    t.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"),
                    _(n, "_details").length > 0 && (t.on("draw.dt.DT_details", function(i, o) {
                        e === o && t.rows({
                            page: "current"
                        }).eq(0).each(function(e) {
                            var t = n[e];
                            t._detailsShow && t._details.insertAfter(t.nTr)
                        })
                    }),
                    t.on("column-visibility.dt.DT_details", function(t, i, o, a) {
                        if (e === i)
                            for (var r, s = H(i), l = 0, u = n.length; l < u; l++)
                                (r = n[l])._details && r._details.children("td[colspan]").attr("colspan", s)
                    }),
                    t.on("destroy.dt.DT_details", function(i, o) {
                        if (e === o)
                            for (var a = 0, r = n.length; a < r; a++)
                                n[a]._details && Ct(t, a)
                    }))
                };
                r("row().child()", function(t, n) {
                    var o = this.context;
                    return t === i ? o.length && this.length ? o[0].aoData[this[0]]._details : i : (!0 === t ? this.child.show() : !1 === t ? Ct(this) : o.length && this.length && function(t, n, i, o) {
                        var a = []
                          , r = function(n, i) {
                            if (e.isArray(n) || n instanceof e)
                                for (var o = 0, s = n.length; o < s; o++)
                                    r(n[o], i);
                            else if (n.nodeName && "tr" === n.nodeName.toLowerCase())
                                a.push(n);
                            else {
                                var l = e("<tr><td/></tr>").addClass(i);
                                e("td", l).addClass(i).html(n)[0].colSpan = H(t),
                                a.push(l[0])
                            }
                        };
                        r(i, o),
                        n._details && n._details.detach();
                        n._details = e(a),
                        n._detailsShow && n._details.insertAfter(n.nTr)
                    }(o[0], o[0].aoData[this[0]], t, n),
                    this)
                }),
                r(["row().child.show()", "row().child().show()"], function(e) {
                    return xt(this, !0),
                    this
                }),
                r(["row().child.hide()", "row().child().hide()"], function() {
                    return xt(this, !1),
                    this
                }),
                r(["row().child.remove()", "row().child().remove()"], function() {
                    return Ct(this),
                    this
                }),
                r("row().child.isShown()", function() {
                    var e = this.context;
                    return e.length && this.length && e[0].aoData[this[0]]._detailsShow || !1
                });
                var Tt = /^([^:]+):(name|visIdx|visible)$/
                  , Dt = function(e, t, n, i, o) {
                    for (var a = [], r = 0, s = o.length; r < s; r++)
                        a.push(V(e, o[r], t));
                    return a
                };
                r("columns()", function(t, n) {
                    t === i ? t = "" : e.isPlainObject(t) && (n = t,
                    t = ""),
                    n = bt(n);
                    var o = this.iterator("table", function(i) {
                        return function(t, n, i) {
                            var o = t.aoColumns
                              , a = _(o, "sName")
                              , r = _(o, "nTh");
                            return yt("column", n, function(n) {
                                var s = g(n);
                                if ("" === n)
                                    return C(o.length);
                                if (null !== s)
                                    return [s >= 0 ? s : o.length + s];
                                if ("function" == typeof n) {
                                    var l = wt(t, i);
                                    return e.map(o, function(e, i) {
                                        return n(i, Dt(t, i, 0, 0, l), r[i]) ? i : null
                                    })
                                }
                                var u = "string" == typeof n ? n.match(Tt) : "";
                                if (u)
                                    switch (u[2]) {
                                    case "visIdx":
                                    case "visible":
                                        var c = parseInt(u[1], 10);
                                        if (c < 0) {
                                            var d = e.map(o, function(e, t) {
                                                return e.bVisible ? t : null
                                            });
                                            return [d[d.length + c]]
                                        }
                                        return [P(t, c)];
                                    case "name":
                                        return e.map(a, function(e, t) {
                                            return e === u[1] ? t : null
                                        });
                                    default:
                                        return []
                                    }
                                if (n.nodeName && n._DT_CellIndex)
                                    return [n._DT_CellIndex.column];
                                var h = e(r).filter(n).map(function() {
                                    return e.inArray(this, r)
                                }).toArray();
                                if (h.length || !n.nodeName)
                                    return h;
                                var p = e(n).closest("*[data-dt-column]");
                                return p.length ? [p.data("dt-column")] : []
                            }, t, i)
                        }(i, t, n)
                    }, 1);
                    return o.selector.cols = t,
                    o.selector.opts = n,
                    o
                }),
                s("columns().header()", "column().header()", function(e, t) {
                    return this.iterator("column", function(e, t) {
                        return e.aoColumns[t].nTh
                    }, 1)
                }),
                s("columns().footer()", "column().footer()", function(e, t) {
                    return this.iterator("column", function(e, t) {
                        return e.aoColumns[t].nTf
                    }, 1)
                }),
                s("columns().data()", "column().data()", function() {
                    return this.iterator("column-rows", Dt, 1)
                }),
                s("columns().dataSrc()", "column().dataSrc()", function() {
                    return this.iterator("column", function(e, t) {
                        return e.aoColumns[t].mData
                    }, 1)
                }),
                s("columns().cache()", "column().cache()", function(e) {
                    return this.iterator("column-rows", function(t, n, i, o, a) {
                        return w(t.aoData, a, "search" === e ? "_aFilterData" : "_aSortData", n)
                    }, 1)
                }),
                s("columns().nodes()", "column().nodes()", function() {
                    return this.iterator("column-rows", function(e, t, n, i, o) {
                        return w(e.aoData, o, "anCells", t)
                    }, 1)
                }),
                s("columns().visible()", "column().visible()", function(t, n) {
                    var o = this.iterator("column", function(n, o) {
                        if (t === i)
                            return n.aoColumns[o].bVisible;
                        !function(t, n, o) {
                            var a, r, s, l, u = t.aoColumns, c = u[n], d = t.aoData;
                            if (o === i)
                                return c.bVisible;
                            if (c.bVisible === o)
                                return;
                            if (o) {
                                var h = e.inArray(!0, _(u, "bVisible"), n + 1);
                                for (r = 0,
                                s = d.length; r < s; r++)
                                    l = d[r].nTr,
                                    a = d[r].anCells,
                                    l && l.insertBefore(a[n], a[h] || null)
                            } else
                                e(_(t.aoData, "anCells", n)).detach();
                            c.bVisible = o,
                            re(t, t.aoHeader),
                            re(t, t.aoFooter),
                            t.aiDisplay.length || e(t.nTBody).find("td[colspan]").attr("colspan", H(t));
                            it(t)
                        }(n, o, t)
                    });
                    return t !== i && (this.iterator("column", function(e, i) {
                        dt(e, null, "column-visibility", [e, i, t, n])
                    }),
                    (n === i || n) && this.columns.adjust()),
                    o
                }),
                s("columns().indexes()", "column().index()", function(e) {
                    return this.iterator("column", function(t, n) {
                        return "visible" === e ? j(t, n) : n
                    }, 1)
                }),
                r("columns.adjust()", function() {
                    return this.iterator("table", function(e) {
                        $(e)
                    }, 1)
                }),
                r("column.index()", function(e, t) {
                    if (0 !== this.context.length) {
                        var n = this.context[0];
                        if ("fromVisible" === e || "toData" === e)
                            return P(n, t);
                        if ("fromData" === e || "toVisible" === e)
                            return j(n, t)
                    }
                }),
                r("column()", function(e, t) {
                    return _t(this.columns(e, t))
                });
                r("cells()", function(t, n, o) {
                    if (e.isPlainObject(t) && (t.row === i ? (o = t,
                    t = null) : (o = n,
                    n = null)),
                    e.isPlainObject(n) && (o = n,
                    n = null),
                    null === n || n === i)
                        return this.iterator("table", function(n) {
                            return function(t, n, o) {
                                var a, r, s, l, u, c, d, h = t.aoData, p = wt(t, o), f = x(w(h, p, "anCells")), v = e([].concat.apply([], f)), g = t.aoColumns.length;
                                return yt("cell", n, function(n) {
                                    var o = "function" == typeof n;
                                    if (null === n || n === i || o) {
                                        for (r = [],
                                        s = 0,
                                        l = p.length; s < l; s++)
                                            for (a = p[s],
                                            u = 0; u < g; u++)
                                                c = {
                                                    row: a,
                                                    column: u
                                                },
                                                o ? (d = h[a],
                                                n(c, V(t, a, u), d.anCells ? d.anCells[u] : null) && r.push(c)) : r.push(c);
                                        return r
                                    }
                                    if (e.isPlainObject(n))
                                        return n.column !== i && n.row !== i && -1 !== e.inArray(n.row, p) ? [n] : [];
                                    var f = v.filter(n).map(function(e, t) {
                                        return {
                                            row: t._DT_CellIndex.row,
                                            column: t._DT_CellIndex.column
                                        }
                                    }).toArray();
                                    return f.length || !n.nodeName ? f : (d = e(n).closest("*[data-dt-row]")).length ? [{
                                        row: d.data("dt-row"),
                                        column: d.data("dt-column")
                                    }] : []
                                }, t, o)
                            }(n, t, bt(o))
                        });
                    var a, r, s, l, u, c = this.columns(n), d = this.rows(t);
                    this.iterator("table", function(e, t) {
                        for (a = [],
                        r = 0,
                        s = d[t].length; r < s; r++)
                            for (l = 0,
                            u = c[t].length; l < u; l++)
                                a.push({
                                    row: d[t][r],
                                    column: c[t][l]
                                })
                    }, 1);
                    var h = this.cells(a, o);
                    return e.extend(h.selector, {
                        cols: n,
                        rows: t,
                        opts: o
                    }),
                    h
                }),
                s("cells().nodes()", "cell().node()", function() {
                    return this.iterator("cell", function(e, t, n) {
                        var o = e.aoData[t];
                        return o && o.anCells ? o.anCells[n] : i
                    }, 1)
                }),
                r("cells().data()", function() {
                    return this.iterator("cell", function(e, t, n) {
                        return V(e, t, n)
                    }, 1)
                }),
                s("cells().cache()", "cell().cache()", function(e) {
                    return e = "search" === e ? "_aFilterData" : "_aSortData",
                    this.iterator("cell", function(t, n, i) {
                        return t.aoData[n][e][i]
                    }, 1)
                }),
                s("cells().render()", "cell().render()", function(e) {
                    return this.iterator("cell", function(t, n, i) {
                        return V(t, n, i, e)
                    }, 1)
                }),
                s("cells().indexes()", "cell().index()", function() {
                    return this.iterator("cell", function(e, t, n) {
                        return {
                            row: t,
                            column: n,
                            columnVisible: j(e, n)
                        }
                    }, 1)
                }),
                s("cells().invalidate()", "cell().invalidate()", function(e) {
                    return this.iterator("cell", function(t, n, i) {
                        te(t, n, e, i)
                    })
                }),
                r("cell()", function(e, t, n) {
                    return _t(this.cells(e, t, n))
                }),
                r("cell().data()", function(e) {
                    var t = this.context
                      , n = this[0];
                    return e === i ? t.length && n.length ? V(t[0], n[0].row, n[0].column) : i : (X(t[0], n[0].row, n[0].column, e),
                    te(t[0], n[0].row, "data", n[0].column),
                    this)
                }),
                r("order()", function(t, n) {
                    var o = this.context;
                    return t === i ? 0 !== o.length ? o[0].aaSorting : i : ("number" == typeof t ? t = [[t, n]] : t.length && !e.isArray(t[0]) && (t = Array.prototype.slice.call(arguments)),
                    this.iterator("table", function(e) {
                        e.aaSorting = t.slice()
                    }))
                }),
                r("order.listener()", function(e, t, n) {
                    return this.iterator("table", function(i) {
                        et(i, e, t, n)
                    })
                }),
                r("order.fixed()", function(t) {
                    if (!t) {
                        var n = this.context
                          , o = n.length ? n[0].aaSortingFixed : i;
                        return e.isArray(o) ? {
                            pre: o
                        } : o
                    }
                    return this.iterator("table", function(n) {
                        n.aaSortingFixed = e.extend(!0, {}, t)
                    })
                }),
                r(["columns().order()", "column().order()"], function(t) {
                    var n = this;
                    return this.iterator("table", function(i, o) {
                        var a = [];
                        e.each(n[o], function(e, n) {
                            a.push([n, t])
                        }),
                        i.aaSorting = a
                    })
                }),
                r("search()", function(t, n, o, a) {
                    var r = this.context;
                    return t === i ? 0 !== r.length ? r[0].oPreviousSearch.sSearch : i : this.iterator("table", function(i) {
                        i.oFeatures.bFilter && ye(i, e.extend({}, i.oPreviousSearch, {
                            sSearch: t + "",
                            bRegex: null !== n && n,
                            bSmart: null === o || o,
                            bCaseInsensitive: null === a || a
                        }), 1)
                    })
                }),
                s("columns().search()", "column().search()", function(t, n, o, a) {
                    return this.iterator("column", function(r, s) {
                        var l = r.aoPreSearchCols;
                        if (t === i)
                            return l[s].sSearch;
                        r.oFeatures.bFilter && (e.extend(l[s], {
                            sSearch: t + "",
                            bRegex: null !== n && n,
                            bSmart: null === o || o,
                            bCaseInsensitive: null === a || a
                        }),
                        ye(r, r.oPreviousSearch, 1))
                    })
                }),
                r("state()", function() {
                    return this.context.length ? this.context[0].oSavedState : null
                }),
                r("state.clear()", function() {
                    return this.iterator("table", function(e) {
                        e.fnStateSaveCallback.call(e.oInstance, e, {})
                    })
                }),
                r("state.loaded()", function() {
                    return this.context.length ? this.context[0].oLoadedState : null
                }),
                r("state.save()", function() {
                    return this.iterator("table", function(e) {
                        it(e)
                    })
                }),
                l.versionCheck = l.fnVersionCheck = function(e) {
                    for (var t, n, i = l.version.split("."), o = e.split("."), a = 0, r = o.length; a < r; a++)
                        if (t = parseInt(i[a], 10) || 0,
                        n = parseInt(o[a], 10) || 0,
                        t !== n)
                            return t > n;
                    return !0
                }
                ,
                l.isDataTable = l.fnIsDataTable = function(t) {
                    var n = e(t).get(0)
                      , i = !1;
                    return t instanceof l.Api || (e.each(l.settings, function(t, o) {
                        var a = o.nScrollHead ? e("table", o.nScrollHead)[0] : null
                          , r = o.nScrollFoot ? e("table", o.nScrollFoot)[0] : null;
                        o.nTable !== n && a !== n && r !== n || (i = !0)
                    }),
                    i)
                }
                ,
                l.tables = l.fnTables = function(t) {
                    var n = !1;
                    e.isPlainObject(t) && (n = t.api,
                    t = t.visible);
                    var i = e.map(l.settings, function(n) {
                        if (!t || t && e(n.nTable).is(":visible"))
                            return n.nTable
                    });
                    return n ? new a(i) : i
                }
                ,
                l.camelToHungarian = S,
                r("$()", function(t, n) {
                    var i = this.rows(n).nodes()
                      , o = e(i);
                    return e([].concat(o.filter(t).toArray(), o.find(t).toArray()))
                }),
                e.each(["on", "one", "off"], function(t, n) {
                    r(n + "()", function() {
                        var t = Array.prototype.slice.call(arguments);
                        t[0] = e.map(t[0].split(/\s/), function(e) {
                            return e.match(/\.dt\b/) ? e : e + ".dt"
                        }).join(" ");
                        var i = e(this.tables().nodes());
                        return i[n].apply(i, t),
                        this
                    })
                }),
                r("clear()", function() {
                    return this.iterator("table", function(e) {
                        Z(e)
                    })
                }),
                r("settings()", function() {
                    return new a(this.context,this.context)
                }),
                r("init()", function() {
                    var e = this.context;
                    return e.length ? e[0].oInit : null
                }),
                r("data()", function() {
                    return this.iterator("table", function(e) {
                        return _(e.aoData, "_aData")
                    }).flatten()
                }),
                r("destroy()", function(n) {
                    return n = n || !1,
                    this.iterator("table", function(i) {
                        var o, r = i.nTableWrapper.parentNode, s = i.oClasses, u = i.nTable, c = i.nTBody, d = i.nTHead, h = i.nTFoot, p = e(u), f = e(c), v = e(i.nTableWrapper), g = e.map(i.aoData, function(e) {
                            return e.nTr
                        });
                        i.bDestroying = !0,
                        dt(i, "aoDestroyCallback", "destroy", [i]),
                        n || new a(i).columns().visible(!0),
                        v.off(".DT").find(":not(tbody *)").off(".DT"),
                        e(t).off(".DT-" + i.sInstance),
                        u != d.parentNode && (p.children("thead").detach(),
                        p.append(d)),
                        h && u != h.parentNode && (p.children("tfoot").detach(),
                        p.append(h)),
                        i.aaSorting = [],
                        i.aaSortingFixed = [],
                        tt(i),
                        e(g).removeClass(i.asStripeClasses.join(" ")),
                        e("th, td", d).removeClass(s.sSortable + " " + s.sSortableAsc + " " + s.sSortableDesc + " " + s.sSortableNone),
                        f.children().detach(),
                        f.append(g);
                        var m = n ? "remove" : "detach";
                        p[m](),
                        v[m](),
                        !n && r && (r.insertBefore(u, i.nTableReinsertBefore),
                        p.css("width", i.sDestroyWidth).removeClass(s.sTable),
                        (o = i.asDestroyStripes.length) && f.children().each(function(t) {
                            e(this).addClass(i.asDestroyStripes[t % o])
                        }));
                        var y = e.inArray(i, l.settings);
                        -1 !== y && l.settings.splice(y, 1)
                    })
                }),
                e.each(["column", "row", "cell"], function(e, t) {
                    r(t + "s().every()", function(e) {
                        var n = this.selector.opts
                          , o = this;
                        return this.iterator(t, function(a, r, s, l, u) {
                            e.call(o[t](r, "cell" === t ? s : n, "cell" === t ? n : i), r, s, l, u)
                        })
                    })
                }),
                r("i18n()", function(t, n, o) {
                    var a = this.context[0]
                      , r = J(t)(a.oLanguage);
                    return r === i && (r = n),
                    o !== i && e.isPlainObject(r) && (r = r[o] !== i ? r[o] : r._),
                    r.replace("%d", o)
                }),
                l.version = "1.10.19",
                l.settings = [],
                l.models = {},
                l.models.oSearch = {
                    bCaseInsensitive: !0,
                    sSearch: "",
                    bRegex: !1,
                    bSmart: !0
                },
                l.models.oRow = {
                    nTr: null,
                    anCells: null,
                    _aData: [],
                    _aSortData: null,
                    _aFilterData: null,
                    _sFilterRow: null,
                    _sRowStripe: "",
                    src: null,
                    idx: -1
                },
                l.models.oColumn = {
                    idx: null,
                    aDataSort: null,
                    asSorting: null,
                    bSearchable: null,
                    bSortable: null,
                    bVisible: null,
                    _sManualType: null,
                    _bAttrSrc: !1,
                    fnCreatedCell: null,
                    fnGetData: null,
                    fnSetData: null,
                    mData: null,
                    mRender: null,
                    nTh: null,
                    nTf: null,
                    sClass: null,
                    sContentPadding: null,
                    sDefaultContent: null,
                    sName: null,
                    sSortDataType: "std",
                    sSortingClass: null,
                    sSortingClassJUI: null,
                    sTitle: null,
                    sType: null,
                    sWidth: null,
                    sWidthOrig: null
                },
                l.defaults = {
                    aaData: null,
                    aaSorting: [[0, "asc"]],
                    aaSortingFixed: [],
                    ajax: null,
                    aLengthMenu: [10, 25, 50, 100],
                    aoColumns: null,
                    aoColumnDefs: null,
                    aoSearchCols: [],
                    asStripeClasses: null,
                    bAutoWidth: !0,
                    bDeferRender: !1,
                    bDestroy: !1,
                    bFilter: !0,
                    bInfo: !0,
                    bLengthChange: !0,
                    bPaginate: !0,
                    bProcessing: !1,
                    bRetrieve: !1,
                    bScrollCollapse: !1,
                    bServerSide: !1,
                    bSort: !0,
                    bSortMulti: !0,
                    bSortCellsTop: !1,
                    bSortClasses: !0,
                    bStateSave: !1,
                    fnCreatedRow: null,
                    fnDrawCallback: null,
                    fnFooterCallback: null,
                    fnFormatNumber: function(e) {
                        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
                    },
                    fnHeaderCallback: null,
                    fnInfoCallback: null,
                    fnInitComplete: null,
                    fnPreDrawCallback: null,
                    fnRowCallback: null,
                    fnServerData: null,
                    fnServerParams: null,
                    fnStateLoadCallback: function(e) {
                        try {
                            return JSON.parse((-1 === e.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + e.sInstance + "_" + location.pathname))
                        } catch (e) {}
                    },
                    fnStateLoadParams: null,
                    fnStateLoaded: null,
                    fnStateSaveCallback: function(e, t) {
                        try {
                            (-1 === e.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + e.sInstance + "_" + location.pathname, JSON.stringify(t))
                        } catch (e) {}
                    },
                    fnStateSaveParams: null,
                    iStateDuration: 7200,
                    iDeferLoading: null,
                    iDisplayLength: 10,
                    iDisplayStart: 0,
                    iTabIndex: 0,
                    oClasses: {},
                    oLanguage: {
                        oAria: {
                            sSortAscending: ": activate to sort column ascending",
                            sSortDescending: ": activate to sort column descending"
                        },
                        oPaginate: {
                            sFirst: "First",
                            sLast: "Last",
                            sNext: "Next",
                            sPrevious: "Previous"
                        },
                        sEmptyTable: "No data available in table",
                        sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                        sInfoEmpty: "Showing 0 to 0 of 0 entries",
                        sInfoFiltered: "(filtered from _MAX_ total entries)",
                        sInfoPostFix: "",
                        sDecimal: "",
                        sThousands: ",",
                        sLengthMenu: "Show _MENU_ entries",
                        sLoadingRecords: "Loading...",
                        sProcessing: "Processing...",
                        sSearch: "Search:",
                        sSearchPlaceholder: "",
                        sUrl: "",
                        sZeroRecords: "No matching records found"
                    },
                    oSearch: e.extend({}, l.models.oSearch),
                    sAjaxDataProp: "data",
                    sAjaxSource: null,
                    sDom: "lfrtip",
                    searchDelay: null,
                    sPaginationType: "simple_numbers",
                    sScrollX: "",
                    sScrollXInner: "",
                    sScrollY: "",
                    sServerMethod: "GET",
                    renderer: null,
                    rowId: "DT_RowId"
                },
                D(l.defaults),
                l.defaults.column = {
                    aDataSort: null,
                    iDataSort: -1,
                    asSorting: ["asc", "desc"],
                    bSearchable: !0,
                    bSortable: !0,
                    bVisible: !0,
                    fnCreatedCell: null,
                    mData: null,
                    mRender: null,
                    sCellType: "td",
                    sClass: "",
                    sContentPadding: "",
                    sDefaultContent: null,
                    sName: "",
                    sSortDataType: "std",
                    sTitle: null,
                    sType: null,
                    sWidth: null
                },
                D(l.defaults.column),
                l.models.oSettings = {
                    oFeatures: {
                        bAutoWidth: null,
                        bDeferRender: null,
                        bFilter: null,
                        bInfo: null,
                        bLengthChange: null,
                        bPaginate: null,
                        bProcessing: null,
                        bServerSide: null,
                        bSort: null,
                        bSortMulti: null,
                        bSortClasses: null,
                        bStateSave: null
                    },
                    oScroll: {
                        bCollapse: null,
                        iBarWidth: 0,
                        sX: null,
                        sXInner: null,
                        sY: null
                    },
                    oLanguage: {
                        fnInfoCallback: null
                    },
                    oBrowser: {
                        bScrollOversize: !1,
                        bScrollbarLeft: !1,
                        bBounding: !1,
                        barWidth: 0
                    },
                    ajax: null,
                    aanFeatures: [],
                    aoData: [],
                    aiDisplay: [],
                    aiDisplayMaster: [],
                    aIds: {},
                    aoColumns: [],
                    aoHeader: [],
                    aoFooter: [],
                    oPreviousSearch: {},
                    aoPreSearchCols: [],
                    aaSorting: null,
                    aaSortingFixed: [],
                    asStripeClasses: null,
                    asDestroyStripes: [],
                    sDestroyWidth: 0,
                    aoRowCallback: [],
                    aoHeaderCallback: [],
                    aoFooterCallback: [],
                    aoDrawCallback: [],
                    aoRowCreatedCallback: [],
                    aoPreDrawCallback: [],
                    aoInitComplete: [],
                    aoStateSaveParams: [],
                    aoStateLoadParams: [],
                    aoStateLoaded: [],
                    sTableId: "",
                    nTable: null,
                    nTHead: null,
                    nTFoot: null,
                    nTBody: null,
                    nTableWrapper: null,
                    bDeferLoading: !1,
                    bInitialised: !1,
                    aoOpenRows: [],
                    sDom: null,
                    searchDelay: null,
                    sPaginationType: "two_button",
                    iStateDuration: 0,
                    aoStateSave: [],
                    aoStateLoad: [],
                    oSavedState: null,
                    oLoadedState: null,
                    sAjaxSource: null,
                    sAjaxDataProp: null,
                    bAjaxDataGet: !0,
                    jqXHR: null,
                    json: i,
                    oAjaxData: i,
                    fnServerData: null,
                    aoServerParams: [],
                    sServerMethod: null,
                    fnFormatNumber: null,
                    aLengthMenu: null,
                    iDraw: 0,
                    bDrawing: !1,
                    iDrawError: -1,
                    _iDisplayLength: 10,
                    _iDisplayStart: 0,
                    _iRecordsTotal: 0,
                    _iRecordsDisplay: 0,
                    oClasses: {},
                    bFiltered: !1,
                    bSorted: !1,
                    bSortCellsTop: null,
                    oInit: null,
                    aoDestroyCallback: [],
                    fnRecordsTotal: function() {
                        return "ssp" == ft(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
                    },
                    fnRecordsDisplay: function() {
                        return "ssp" == ft(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
                    },
                    fnDisplayEnd: function() {
                        var e = this._iDisplayLength
                          , t = this._iDisplayStart
                          , n = t + e
                          , i = this.aiDisplay.length
                          , o = this.oFeatures
                          , a = o.bPaginate;
                        return o.bServerSide ? !1 === a || -1 === e ? t + i : Math.min(t + e, this._iRecordsDisplay) : !a || n > i || -1 === e ? i : n
                    },
                    oInstance: null,
                    sInstance: null,
                    iTabIndex: 0,
                    nScrollHead: null,
                    nScrollFoot: null,
                    aLastSort: [],
                    oPlugins: {},
                    rowIdFn: null,
                    rowId: null
                },
                l.ext = o = {
                    buttons: {},
                    classes: {},
                    builder: "-source-",
                    errMode: "alert",
                    feature: [],
                    search: [],
                    selector: {
                        cell: [],
                        column: [],
                        row: []
                    },
                    internal: {},
                    legacy: {
                        ajax: null
                    },
                    pager: {},
                    renderer: {
                        pageButton: {},
                        header: {}
                    },
                    order: {},
                    type: {
                        detect: [],
                        search: {},
                        order: {}
                    },
                    _unique: 0,
                    fnVersionCheck: l.fnVersionCheck,
                    iApiIndex: 0,
                    oJUIClasses: {},
                    sVersion: l.version
                },
                e.extend(o, {
                    afnFiltering: o.search,
                    aTypes: o.type.detect,
                    ofnSearch: o.type.search,
                    oSort: o.type.order,
                    afnSortData: o.order,
                    aoFeatures: o.feature,
                    oApi: o.internal,
                    oStdClasses: o.classes,
                    oPagination: o.pager
                }),
                e.extend(l.ext.classes, {
                    sTable: "dataTable",
                    sNoFooter: "no-footer",
                    sPageButton: "paginate_button",
                    sPageButtonActive: "current",
                    sPageButtonDisabled: "disabled",
                    sStripeOdd: "odd",
                    sStripeEven: "even",
                    sRowEmpty: "dataTables_empty",
                    sWrapper: "dataTables_wrapper",
                    sFilter: "dataTables_filter",
                    sInfo: "dataTables_info",
                    sPaging: "dataTables_paginate paging_",
                    sLength: "dataTables_length",
                    sProcessing: "dataTables_processing",
                    sSortAsc: "sorting_asc",
                    sSortDesc: "sorting_desc",
                    sSortable: "sorting",
                    sSortableAsc: "sorting_asc_disabled",
                    sSortableDesc: "sorting_desc_disabled",
                    sSortableNone: "sorting_disabled",
                    sSortColumn: "sorting_",
                    sFilterInput: "",
                    sLengthSelect: "",
                    sScrollWrapper: "dataTables_scroll",
                    sScrollHead: "dataTables_scrollHead",
                    sScrollHeadInner: "dataTables_scrollHeadInner",
                    sScrollBody: "dataTables_scrollBody",
                    sScrollFoot: "dataTables_scrollFoot",
                    sScrollFootInner: "dataTables_scrollFootInner",
                    sHeaderTH: "",
                    sFooterTH: "",
                    sSortJUIAsc: "",
                    sSortJUIDesc: "",
                    sSortJUI: "",
                    sSortJUIAscAllowed: "",
                    sSortJUIDescAllowed: "",
                    sSortJUIWrapper: "",
                    sSortIcon: "",
                    sJUIHeader: "",
                    sJUIFooter: ""
                });
                var St = l.ext.pager;
                function Et(e, t) {
                    var n = []
                      , i = St.numbers_length
                      , o = Math.floor(i / 2);
                    return t <= i ? n = C(0, t) : e <= o ? ((n = C(0, i - 2)).push("ellipsis"),
                    n.push(t - 1)) : e >= t - 1 - o ? ((n = C(t - (i - 2), t)).splice(0, 0, "ellipsis"),
                    n.splice(0, 0, 0)) : ((n = C(e - o + 2, e + o - 1)).push("ellipsis"),
                    n.push(t - 1),
                    n.splice(0, 0, "ellipsis"),
                    n.splice(0, 0, 0)),
                    n.DT_el = "span",
                    n
                }
                e.extend(St, {
                    simple: function(e, t) {
                        return ["previous", "next"]
                    },
                    full: function(e, t) {
                        return ["first", "previous", "next", "last"]
                    },
                    numbers: function(e, t) {
                        return [Et(e, t)]
                    },
                    simple_numbers: function(e, t) {
                        return ["previous", Et(e, t), "next"]
                    },
                    full_numbers: function(e, t) {
                        return ["first", "previous", Et(e, t), "next", "last"]
                    },
                    first_last_numbers: function(e, t) {
                        return ["first", Et(e, t), "last"]
                    },
                    _numbers: Et,
                    numbers_length: 7
                }),
                e.extend(!0, l.ext.renderer, {
                    pageButton: {
                        _: function(t, o, a, r, s, l) {
                            var u, c, d, h = t.oClasses, p = t.oLanguage.oPaginate, f = t.oLanguage.oAria.paginate || {}, v = 0, g = function(n, i) {
                                var o, r, d, m = function(e) {
                                    Pe(t, e.data.action, !0)
                                };
                                for (o = 0,
                                r = i.length; o < r; o++)
                                    if (d = i[o],
                                    e.isArray(d)) {
                                        var y = e("<" + (d.DT_el || "div") + "/>").appendTo(n);
                                        g(y, d)
                                    } else {
                                        switch (u = null,
                                        c = "",
                                        d) {
                                        case "ellipsis":
                                            n.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            u = p.sFirst,
                                            c = d + (s > 0 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            u = p.sPrevious,
                                            c = d + (s > 0 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            u = p.sNext,
                                            c = d + (s < l - 1 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            u = p.sLast,
                                            c = d + (s < l - 1 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        default:
                                            u = d + 1,
                                            c = s === d ? h.sPageButtonActive : ""
                                        }
                                        null !== u && (ut(e("<a>", {
                                            class: h.sPageButton + " " + c,
                                            "aria-controls": t.sTableId,
                                            "aria-label": f[d],
                                            "data-dt-idx": v,
                                            tabindex: t.iTabIndex,
                                            id: 0 === a && "string" == typeof d ? t.sTableId + "_" + d : null
                                        }).html(u).appendTo(n), {
                                            action: d
                                        }, m),
                                        v++)
                                    }
                            };
                            try {
                                d = e(o).find(n.activeElement).data("dt-idx")
                            } catch (e) {}
                            g(e(o).empty(), r),
                            d !== i && e(o).find("[data-dt-idx=" + d + "]").focus()
                        }
                    }
                }),
                e.extend(l.ext.type.detect, [function(e, t) {
                    var n = t.oLanguage.sDecimal;
                    return y(e, n) ? "num" + n : null
                }
                , function(e, t) {
                    if (e && !(e instanceof Date) && !h.test(e))
                        return null;
                    var n = Date.parse(e);
                    return null !== n && !isNaN(n) || v(e) ? "date" : null
                }
                , function(e, t) {
                    var n = t.oLanguage.sDecimal;
                    return y(e, n, !0) ? "num-fmt" + n : null
                }
                , function(e, t) {
                    var n = t.oLanguage.sDecimal;
                    return b(e, n) ? "html-num" + n : null
                }
                , function(e, t) {
                    var n = t.oLanguage.sDecimal;
                    return b(e, n, !0) ? "html-num-fmt" + n : null
                }
                , function(e, t) {
                    return v(e) || "string" == typeof e && -1 !== e.indexOf("<") ? "html" : null
                }
                ]),
                e.extend(l.ext.type.search, {
                    html: function(e) {
                        return v(e) ? e : "string" == typeof e ? e.replace(c, " ").replace(d, "") : ""
                    },
                    string: function(e) {
                        return v(e) ? e : "string" == typeof e ? e.replace(c, " ") : e
                    }
                });
                var Mt = function(e, t, n, i) {
                    return 0 === e || e && "-" !== e ? (t && (e = m(e, t)),
                    e.replace && (n && (e = e.replace(n, "")),
                    i && (e = e.replace(i, ""))),
                    1 * e) : -1 / 0
                };
                function Lt(t) {
                    e.each({
                        num: function(e) {
                            return Mt(e, t)
                        },
                        "num-fmt": function(e) {
                            return Mt(e, t, f)
                        },
                        "html-num": function(e) {
                            return Mt(e, t, d)
                        },
                        "html-num-fmt": function(e) {
                            return Mt(e, t, d, f)
                        }
                    }, function(e, n) {
                        o.type.order[e + t + "-pre"] = n,
                        e.match(/^html\-/) && (o.type.search[e + t] = o.type.search.html)
                    })
                }
                e.extend(o.type.order, {
                    "date-pre": function(e) {
                        var t = Date.parse(e);
                        return isNaN(t) ? -1 / 0 : t
                    },
                    "html-pre": function(e) {
                        return v(e) ? "" : e.replace ? e.replace(/<.*?>/g, "").toLowerCase() : e + ""
                    },
                    "string-pre": function(e) {
                        return v(e) ? "" : "string" == typeof e ? e.toLowerCase() : e.toString ? e.toString() : ""
                    },
                    "string-asc": function(e, t) {
                        return e < t ? -1 : e > t ? 1 : 0
                    },
                    "string-desc": function(e, t) {
                        return e < t ? 1 : e > t ? -1 : 0
                    }
                }),
                Lt(""),
                e.extend(!0, l.ext.renderer, {
                    header: {
                        _: function(t, n, i, o) {
                            e(t.nTable).on("order.dt.DT", function(e, a, r, s) {
                                if (t === a) {
                                    var l = i.idx;
                                    n.removeClass(i.sSortingClass + " " + o.sSortAsc + " " + o.sSortDesc).addClass("asc" == s[l] ? o.sSortAsc : "desc" == s[l] ? o.sSortDesc : i.sSortingClass)
                                }
                            })
                        },
                        jqueryui: function(t, n, i, o) {
                            e("<div/>").addClass(o.sSortJUIWrapper).append(n.contents()).append(e("<span/>").addClass(o.sSortIcon + " " + i.sSortingClassJUI)).appendTo(n),
                            e(t.nTable).on("order.dt.DT", function(e, a, r, s) {
                                if (t === a) {
                                    var l = i.idx;
                                    n.removeClass(o.sSortAsc + " " + o.sSortDesc).addClass("asc" == s[l] ? o.sSortAsc : "desc" == s[l] ? o.sSortDesc : i.sSortingClass),
                                    n.find("span." + o.sSortIcon).removeClass(o.sSortJUIAsc + " " + o.sSortJUIDesc + " " + o.sSortJUI + " " + o.sSortJUIAscAllowed + " " + o.sSortJUIDescAllowed).addClass("asc" == s[l] ? o.sSortJUIAsc : "desc" == s[l] ? o.sSortJUIDesc : i.sSortingClassJUI)
                                }
                            })
                        }
                    }
                });
                var Ot = function(e) {
                    return "string" == typeof e ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : e
                };
                function At(e) {
                    return function() {
                        var t = [at(this[l.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                        return l.ext.internal[e].apply(this, t)
                    }
                }
                return l.render = {
                    number: function(e, t, n, i, o) {
                        return {
                            display: function(a) {
                                if ("number" != typeof a && "string" != typeof a)
                                    return a;
                                var r = a < 0 ? "-" : ""
                                  , s = parseFloat(a);
                                if (isNaN(s))
                                    return Ot(a);
                                s = s.toFixed(n),
                                a = Math.abs(s);
                                var l = parseInt(a, 10)
                                  , u = n ? t + (a - l).toFixed(n).substring(2) : "";
                                return r + (i || "") + l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, e) + u + (o || "")
                            }
                        }
                    },
                    text: function() {
                        return {
                            display: Ot,
                            filter: Ot
                        }
                    }
                },
                e.extend(l.ext.internal, {
                    _fnExternApiFunc: At,
                    _fnBuildAjax: he,
                    _fnAjaxUpdate: pe,
                    _fnAjaxParameters: fe,
                    _fnAjaxUpdateDraw: ve,
                    _fnAjaxDataSrc: ge,
                    _fnAddColumn: B,
                    _fnColumnOptions: R,
                    _fnAdjustColumnSizing: $,
                    _fnVisibleToColumnIndex: P,
                    _fnColumnIndexToVisible: j,
                    _fnVisbleColumns: H,
                    _fnGetColumns: N,
                    _fnColumnTypes: F,
                    _fnApplyColumnDefs: W,
                    _fnHungarianMap: D,
                    _fnCamelToHungarian: S,
                    _fnLanguageCompat: E,
                    _fnBrowserDetect: A,
                    _fnAddData: q,
                    _fnAddTr: z,
                    _fnNodeToDataIndex: function(e, t) {
                        return t._DT_RowIndex !== i ? t._DT_RowIndex : null
                    },
                    _fnNodeToColumnIndex: function(t, n, i) {
                        return e.inArray(i, t.aoData[n].anCells)
                    },
                    _fnGetCellData: V,
                    _fnSetCellData: X,
                    _fnSplitObjNotation: Q,
                    _fnGetObjectDataFn: J,
                    _fnSetObjectDataFn: K,
                    _fnGetDataMaster: G,
                    _fnClearTable: Z,
                    _fnDeleteIndex: ee,
                    _fnInvalidate: te,
                    _fnGetRowElements: ne,
                    _fnCreateTr: ie,
                    _fnBuildHead: ae,
                    _fnDrawHead: re,
                    _fnDraw: se,
                    _fnReDraw: le,
                    _fnAddOptionsHtml: ue,
                    _fnDetectHeader: ce,
                    _fnGetUniqueThs: de,
                    _fnFeatureHtmlFilter: me,
                    _fnFilterComplete: ye,
                    _fnFilterCustom: be,
                    _fnFilterColumn: _e,
                    _fnFilter: we,
                    _fnFilterCreateSearch: Ce,
                    _fnEscapeRegex: xe,
                    _fnFilterData: De,
                    _fnFeatureHtmlInfo: Me,
                    _fnUpdateInfo: Le,
                    _fnInfoMacros: Oe,
                    _fnInitialise: Ae,
                    _fnInitComplete: Ie,
                    _fnLengthChange: Be,
                    _fnFeatureHtmlLength: Re,
                    _fnFeatureHtmlPaginate: $e,
                    _fnPageChange: Pe,
                    _fnFeatureHtmlProcessing: je,
                    _fnProcessingDisplay: He,
                    _fnFeatureHtmlTable: Ne,
                    _fnScrollDraw: Fe,
                    _fnApplyToChildren: We,
                    _fnCalculateColumnWidths: ze,
                    _fnThrottle: Ve,
                    _fnConvertToWidth: Xe,
                    _fnGetWidestNode: Ue,
                    _fnGetMaxLenString: Ye,
                    _fnStringToCss: Qe,
                    _fnSortFlatten: Je,
                    _fnSort: Ke,
                    _fnSortAria: Ge,
                    _fnSortListener: Ze,
                    _fnSortAttachListener: et,
                    _fnSortingClasses: tt,
                    _fnSortData: nt,
                    _fnSaveState: it,
                    _fnLoadState: ot,
                    _fnSettingsFromNode: at,
                    _fnLog: rt,
                    _fnMap: st,
                    _fnBindAction: ut,
                    _fnCallbackReg: ct,
                    _fnCallbackFire: dt,
                    _fnLengthOverflow: ht,
                    _fnRenderer: pt,
                    _fnDataSource: ft,
                    _fnRowAttributes: oe,
                    _fnExtend: lt,
                    _fnCalculateEnd: function() {}
                }),
                e.fn.dataTable = l,
                l.$ = e,
                e.fn.dataTableSettings = l.settings,
                e.fn.dataTableExt = l.ext,
                e.fn.DataTable = function(t) {
                    return e(this).dataTable(t).api()
                }
                ,
                e.each(l, function(t, n) {
                    e.fn.DataTable[t] = n
                }),
                e.fn.dataTable
            }(e, window, document)
        }
        .apply(t, i)) || (e.exports = o)
    }()
}
, function(e) {
    e.exports = {}
}
]);
