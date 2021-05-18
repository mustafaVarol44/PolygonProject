!function(t) 
{
    var e = {};
    function i(n) {
        if (e[n])
            return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, i),
        o.l = !0,
        o.exports
    }
    i.m = t,
    i.c = e,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, e) {
        if (1 & e && (t = i(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                i.d(n, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "",
    i(i.s = 26)

}
([function(t, e, i) {
    var n;
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
    !function(e, i) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return i(t)
        }
        : i(e)
    }("undefined" != typeof window ? window : this, function(i, o) {
        "use strict";
        var s = []
          , r = i.document
          , a = Object.getPrototypeOf
          , l = s.slice
          , h = s.concat
          , u = s.push
          , c = s.indexOf
          , d = {}
          , p = d.toString
          , f = d.hasOwnProperty
          , m = f.toString
          , _ = m.call(Object)
          , v = {}
          , g = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }
          , y = function(t) {
            return null != t && t === t.window
        }
          , b = {
            type: !0,
            src: !0,
            noModule: !0
        };
        function w(t, e, i) {
            var n, o = (e = e || r).createElement("script");
            if (o.text = t,
            i)
                for (n in b)
                    i[n] && (o[n] = i[n]);
            e.head.appendChild(o).parentNode.removeChild(o)
        }
        function L(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[p.call(t)] || "object" : typeof t
        }
        var x = function(t, e) {
            return new x.fn.init(t,e)
        }
          , k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function C(t) {
            var e = !!t && "length"in t && t.length
              , i = L(t);
            return !g(t) && !y(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        x.fn = x.prototype = {
            jquery: "3.3.1",
            constructor: x,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(t) {
                return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = x.merge(this.constructor(), t);
                return e.prevObject = this,
                e
            },
            each: function(t) {
                return x.each(this, t)
            },
            map: function(t) {
                return this.pushStack(x.map(this, function(e, i) {
                    return t.call(e, i, e)
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
            eq: function(t) {
                var e = this.length
                  , i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: s.sort,
            splice: s.splice
        },
        x.extend = x.fn.extend = function() {
            var t, e, i, n, o, s, r = arguments[0] || {}, a = 1, l = arguments.length, h = !1;
            for ("boolean" == typeof r && (h = r,
            r = arguments[a] || {},
            a++),
            "object" == typeof r || g(r) || (r = {}),
            a === l && (r = this,
            a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t)
                        i = r[e],
                        r !== (n = t[e]) && (h && n && (x.isPlainObject(n) || (o = Array.isArray(n))) ? (o ? (o = !1,
                        s = i && Array.isArray(i) ? i : []) : s = i && x.isPlainObject(i) ? i : {},
                        r[e] = x.extend(h, s, n)) : void 0 !== n && (r[e] = n));
            return r
        }
        ,
        x.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, i;
                return !(!t || "[object Object]" !== p.call(t)) && (!(e = a(t)) || "function" == typeof (i = f.call(e, "constructor") && e.constructor) && m.call(i) === _)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            globalEval: function(t) {
                w(t)
            },
            each: function(t, e) {
                var i, n = 0;
                if (C(t))
                    for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++)
                        ;
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n]))
                            break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(k, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (C(Object(t)) ? x.merge(i, "string" == typeof t ? [t] : t) : u.call(i, t)),
                i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : c.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, o = t.length; n < i; n++)
                    t[o++] = e[n];
                return t.length = o,
                t
            },
            grep: function(t, e, i) {
                for (var n = [], o = 0, s = t.length, r = !i; o < s; o++)
                    !e(t[o], o) !== r && n.push(t[o]);
                return n
            },
            map: function(t, e, i) {
                var n, o, s = 0, r = [];
                if (C(t))
                    for (n = t.length; s < n; s++)
                        null != (o = e(t[s], s, i)) && r.push(o);
                else
                    for (s in t)
                        null != (o = e(t[s], s, i)) && r.push(o);
                return h.apply([], r)
            },
            guid: 1,
            support: v
        }),
        "function" == typeof Symbol && (x.fn[Symbol.iterator] = s[Symbol.iterator]),
        x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            d["[object " + e + "]"] = e.toLowerCase()
        });
        var E = 
        /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
        function(t) {
            var e, i, n, o, s, r, a, l, h, u, c, d, p, f, m, _, v, g, y, b = "sizzle" + 1 * new Date, w = t.document, L = 0, x = 0, k = rt(), C = rt(), E = rt(), T = function(t, e) {
                return t === e && (c = !0),
                0
            }, M = {}.hasOwnProperty, D = [], P = D.pop, S = D.push, O = D.push, I = D.slice, B = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e)
                        return i;
                return -1
            }, A = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", z = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", H = "\\[" + z + "*(" + R + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + z + "*\\]", j = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", N = new RegExp(z + "+","g"), $ = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$","g"), W = new RegExp("^" + z + "*," + z + "*"), F = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"), Z = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]","g"), q = new RegExp(j), U = new RegExp("^" + R + "$"), V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + j),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)","i"),
                bool: new RegExp("^(?:" + A + ")$","i"),
                needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)","i")
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, X = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /[+~]/, J = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)","ig"), tt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, it = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, nt = function() {
                d()
            }, ot = gt(function(t) {
                return !0 === t.disabled && ("form"in t || "label"in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                O.apply(D = I.call(w.childNodes), w.childNodes),
                D[w.childNodes.length].nodeType
            } catch (t) {
                O = {
                    apply: D.length ? function(t, e) {
                        S.apply(t, I.call(e))
                    }
                    : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++]; )
                            ;
                        t.length = i - 1
                    }
                }
            }
            function st(t, e, n, o) {
                var s, a, h, u, c, f, v, g = e && e.ownerDocument, L = e ? e.nodeType : 9;
                if (n = n || [],
                "string" != typeof t || !t || 1 !== L && 9 !== L && 11 !== L)
                    return n;
                if (!o && ((e ? e.ownerDocument || e : w) !== p && d(e),
                e = e || p,
                m)) {
                    if (11 !== L && (c = K.exec(t)))
                        if (s = c[1]) {
                            if (9 === L) {
                                if (!(h = e.getElementById(s)))
                                    return n;
                                if (h.id === s)
                                    return n.push(h),
                                    n
                            } else if (g && (h = g.getElementById(s)) && y(e, h) && h.id === s)
                                return n.push(h),
                                n
                        } else {
                            if (c[2])
                                return O.apply(n, e.getElementsByTagName(t)),
                                n;
                            if ((s = c[3]) && i.getElementsByClassName && e.getElementsByClassName)
                                return O.apply(n, e.getElementsByClassName(s)),
                                n
                        }
                    if (i.qsa && !E[t + " "] && (!_ || !_.test(t))) {
                        if (1 !== L)
                            g = e,
                            v = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((u = e.getAttribute("id")) ? u = u.replace(et, it) : e.setAttribute("id", u = b),
                            a = (f = r(t)).length; a--; )
                                f[a] = "#" + u + " " + vt(f[a]);
                            v = f.join(","),
                            g = Q.test(t) && mt(e.parentNode) || e
                        }
                        if (v)
                            try {
                                return O.apply(n, g.querySelectorAll(v)),
                                n
                            } catch (t) {} finally {
                                u === b && e.removeAttribute("id")
                            }
                    }
                }
                return l(t.replace($, "$1"), e, n, o)
            }
            function rt() {
                var t = [];
                return function e(i, o) {
                    return t.push(i + " ") > n.cacheLength && delete e[t.shift()],
                    e[i + " "] = o
                }
            }
            function at(t) {
                return t[b] = !0,
                t
            }
            function lt(t) {
                var e = p.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e),
                    e = null
                }
            }
            function ht(t, e) {
                for (var i = t.split("|"), o = i.length; o--; )
                    n.attrHandle[i[o]] = e
            }
            function ut(t, e) {
                var i = e && t
                  , n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n)
                    return n;
                if (i)
                    for (; i = i.nextSibling; )
                        if (i === e)
                            return -1;
                return t ? 1 : -1
            }
            function ct(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }
            function dt(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }
            function pt(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function ft(t) {
                return at(function(e) {
                    return e = +e,
                    at(function(i, n) {
                        for (var o, s = t([], i.length, e), r = s.length; r--; )
                            i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }
            function mt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in i = st.support = {},
            s = st.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }
            ,
            d = st.setDocument = function(t) {
                var e, o, r = t ? t.ownerDocument || t : w;
                return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement,
                m = !s(p),
                w !== p && (o = p.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", nt, !1) : o.attachEvent && o.attachEvent("onunload", nt)),
                i.attributes = lt(function(t) {
                    return t.className = "i",
                    !t.getAttribute("className")
                }),
                i.getElementsByTagName = lt(function(t) {
                    return t.appendChild(p.createComment("")),
                    !t.getElementsByTagName("*").length
                }),
                i.getElementsByClassName = X.test(p.getElementsByClassName),
                i.getById = lt(function(t) {
                    return f.appendChild(t).id = b,
                    !p.getElementsByName || !p.getElementsByName(b).length
                }),
                i.getById ? (n.filter.ID = function(t) {
                    var e = t.replace(J, tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                ,
                n.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }
                ) : (n.filter.ID = function(t) {
                    var e = t.replace(J, tt);
                    return function(t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }
                ,
                n.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var i, n, o, s = e.getElementById(t);
                        if (s) {
                            if ((i = s.getAttributeNode("id")) && i.value === t)
                                return [s];
                            for (o = e.getElementsByName(t),
                            n = 0; s = o[n++]; )
                                if ((i = s.getAttributeNode("id")) && i.value === t)
                                    return [s]
                        }
                        return []
                    }
                }
                ),
                n.find.TAG = i.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                }
                : function(t, e) {
                    var i, n = [], o = 0, s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[o++]; )
                            1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }
                ,
                n.find.CLASS = i.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && m)
                        return e.getElementsByClassName(t)
                }
                ,
                v = [],
                _ = [],
                (i.qsa = X.test(p.querySelectorAll)) && (lt(function(t) {
                    f.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    t.querySelectorAll("[msallowcapture^='']").length && _.push("[*^$]=" + z + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length || _.push("\\[" + z + "*(?:value|" + A + ")"),
                    t.querySelectorAll("[id~=" + b + "-]").length || _.push("~="),
                    t.querySelectorAll(":checked").length || _.push(":checked"),
                    t.querySelectorAll("a#" + b + "+*").length || _.push(".#.+[+~]")
                }),
                lt(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = p.createElement("input");
                    e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length && _.push("name" + z + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length && _.push(":enabled", ":disabled"),
                    f.appendChild(t).disabled = !0,
                    2 !== t.querySelectorAll(":disabled").length && _.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    _.push(",.*:")
                })),
                (i.matchesSelector = X.test(g = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function(t) {
                    i.disconnectedMatch = g.call(t, "*"),
                    g.call(t, "[s!='']:x"),
                    v.push("!=", j)
                }),
                _ = _.length && new RegExp(_.join("|")),
                v = v.length && new RegExp(v.join("|")),
                e = X.test(f.compareDocumentPosition),
                y = e || X.test(f.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t
                      , n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                }
                : function(t, e) {
                    if (e)
                        for (; e = e.parentNode; )
                            if (e === t)
                                return !0;
                    return !1
                }
                ,
                T = e ? function(t, e) {
                    if (t === e)
                        return c = !0,
                        0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === w && y(w, t) ? -1 : e === p || e.ownerDocument === w && y(w, e) ? 1 : u ? B(u, t) - B(u, e) : 0 : 4 & n ? -1 : 1)
                }
                : function(t, e) {
                    if (t === e)
                        return c = !0,
                        0;
                    var i, n = 0, o = t.parentNode, s = e.parentNode, r = [t], a = [e];
                    if (!o || !s)
                        return t === p ? -1 : e === p ? 1 : o ? -1 : s ? 1 : u ? B(u, t) - B(u, e) : 0;
                    if (o === s)
                        return ut(t, e);
                    for (i = t; i = i.parentNode; )
                        r.unshift(i);
                    for (i = e; i = i.parentNode; )
                        a.unshift(i);
                    for (; r[n] === a[n]; )
                        n++;
                    return n ? ut(r[n], a[n]) : r[n] === w ? -1 : a[n] === w ? 1 : 0
                }
                ,
                p) : p
            }
            ,
            st.matches = function(t, e) {
                return st(t, null, null, e)
            }
            ,
            st.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== p && d(t),
                e = e.replace(Z, "='$1']"),
                i.matchesSelector && m && !E[e + " "] && (!v || !v.test(e)) && (!_ || !_.test(e)))
                    try {
                        var n = g.call(t, e);
                        if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return n
                    } catch (t) {}
                return st(e, p, null, [t]).length > 0
            }
            ,
            st.contains = function(t, e) {
                return (t.ownerDocument || t) !== p && d(t),
                y(t, e)
            }
            ,
            st.attr = function(t, e) {
                (t.ownerDocument || t) !== p && d(t);
                var o = n.attrHandle[e.toLowerCase()]
                  , s = o && M.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
                return void 0 !== s ? s : i.attributes || !m ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
            }
            ,
            st.escape = function(t) {
                return (t + "").replace(et, it)
            }
            ,
            st.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }
            ,
            st.uniqueSort = function(t) {
                var e, n = [], o = 0, s = 0;
                if (c = !i.detectDuplicates,
                u = !i.sortStable && t.slice(0),
                t.sort(T),
                c) {
                    for (; e = t[s++]; )
                        e === t[s] && (o = n.push(s));
                    for (; o--; )
                        t.splice(n[o], 1)
                }
                return u = null,
                t
            }
            ,
            o = st.getText = function(t) {
                var e, i = "", n = 0, s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            i += o(t)
                    } else if (3 === s || 4 === s)
                        return t.nodeValue
                } else
                    for (; e = t[n++]; )
                        i += o(e);
                return i
            }
            ,
            (n = st.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: V,
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
                    ATTR: function(t) {
                        return t[1] = t[1].replace(J, tt),
                        t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(),
                        "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]),
                        t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                        t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]),
                        t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && q.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                        t[2] = i.slice(0, e)),
                        t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(J, tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        }
                        : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = k[t + " "];
                        return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && k(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, i) {
                        return function(n) {
                            var o = st.attr(n, t);
                            return null == o ? "!=" === e : !e || (o += "",
                            "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o.replace(N, " ") + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, o) {
                        var s = "nth" !== t.slice(0, 3)
                          , r = "last" !== t.slice(-4)
                          , a = "of-type" === e;
                        return 1 === n && 0 === o ? function(t) {
                            return !!t.parentNode
                        }
                        : function(e, i, l) {
                            var h, u, c, d, p, f, m = s !== r ? "nextSibling" : "previousSibling", _ = e.parentNode, v = a && e.nodeName.toLowerCase(), g = !l && !a, y = !1;
                            if (_) {
                                if (s) {
                                    for (; m; ) {
                                        for (d = e; d = d[m]; )
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                                return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? _.firstChild : _.lastChild],
                                r && g) {
                                    for (y = (p = (h = (u = (c = (d = _)[b] || (d[b] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] || [])[0] === L && h[1]) && h[2],
                                    d = p && _.childNodes[p]; d = ++p && d && d[m] || (y = p = 0) || f.pop(); )
                                        if (1 === d.nodeType && ++y && d === e) {
                                            u[t] = [L, p, y];
                                            break
                                        }
                                } else if (g && (y = p = (h = (u = (c = (d = e)[b] || (d[b] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] || [])[0] === L && h[1]),
                                !1 === y)
                                    for (; (d = ++p && d && d[m] || (y = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || (g && ((u = (c = d[b] || (d[b] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] = [L, y]),
                                    d !== e)); )
                                        ;
                                return (y -= o) === n || y % n == 0 && y / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                        return o[b] ? o(e) : o.length > 1 ? (i = [t, t, "", e],
                        n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, i) {
                            for (var n, s = o(t, e), r = s.length; r--; )
                                t[n = B(t, s[r])] = !(i[n] = s[r])
                        }) : function(t) {
                            return o(t, 0, i)
                        }
                        ) : o
                    }
                },
                pseudos: {
                    not: at(function(t) {
                        var e = []
                          , i = []
                          , n = a(t.replace($, "$1"));
                        return n[b] ? at(function(t, e, i, o) {
                            for (var s, r = n(t, null, o, []), a = t.length; a--; )
                                (s = r[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, o, s) {
                            return e[0] = t,
                            n(e, null, s, i),
                            e[0] = null,
                            !i.pop()
                        }
                    }),
                    has: at(function(t) {
                        return function(e) {
                            return st(t, e).length > 0
                        }
                    }),
                    contains: at(function(t) {
                        return t = t.replace(J, tt),
                        function(e) {
                            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                        }
                    }),
                    lang: at(function(t) {
                        return U.test(t || "") || st.error("unsupported lang: " + t),
                        t = t.replace(J, tt).toLowerCase(),
                        function(e) {
                            var i;
                            do {
                                if (i = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === f
                    },
                    focus: function(t) {
                        return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: pt(!1),
                    disabled: pt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !n.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Y.test(t.nodeName)
                    },
                    input: function(t) {
                        return G.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ft(function() {
                        return [0]
                    }),
                    last: ft(function(t, e) {
                        return [e - 1]
                    }),
                    eq: ft(function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: ft(function(t, e) {
                        for (var i = 0; i < e; i += 2)
                            t.push(i);
                        return t
                    }),
                    odd: ft(function(t, e) {
                        for (var i = 1; i < e; i += 2)
                            t.push(i);
                        return t
                    }),
                    lt: ft(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0; )
                            t.push(n);
                        return t
                    }),
                    gt: ft(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e; )
                            t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = n.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                n.pseudos[e] = ct(e);
            for (e in {
                submit: !0,
                reset: !0
            })
                n.pseudos[e] = dt(e);
            function _t() {}
            function vt(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++)
                    n += t[e].value;
                return n
            }
            function gt(t, e, i) {
                var n = e.dir
                  , o = e.next
                  , s = o || n
                  , r = i && "parentNode" === s
                  , a = x++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n]; )
                        if (1 === e.nodeType || r)
                            return t(e, i, o);
                    return !1
                }
                : function(e, i, l) {
                    var h, u, c, d = [L, a];
                    if (l) {
                        for (; e = e[n]; )
                            if ((1 === e.nodeType || r) && t(e, i, l))
                                return !0
                    } else
                        for (; e = e[n]; )
                            if (1 === e.nodeType || r)
                                if (u = (c = e[b] || (e[b] = {}))[e.uniqueID] || (c[e.uniqueID] = {}),
                                o && o === e.nodeName.toLowerCase())
                                    e = e[n] || e;
                                else {
                                    if ((h = u[s]) && h[0] === L && h[1] === a)
                                        return d[2] = h[2];
                                    if (u[s] = d,
                                    d[2] = t(e, i, l))
                                        return !0
                                }
                    return !1
                }
            }
            function yt(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var o = t.length; o--; )
                        if (!t[o](e, i, n))
                            return !1;
                    return !0
                }
                : t[0]
            }
            function bt(t, e, i, n, o) {
                for (var s, r = [], a = 0, l = t.length, h = null != e; a < l; a++)
                    (s = t[a]) && (i && !i(s, n, o) || (r.push(s),
                    h && e.push(a)));
                return r
            }
            function wt(t, e, i, n, o, s) {
                return n && !n[b] && (n = wt(n)),
                o && !o[b] && (o = wt(o, s)),
                at(function(s, r, a, l) {
                    var h, u, c, d = [], p = [], f = r.length, m = s || function(t, e, i) {
                        for (var n = 0, o = e.length; n < o; n++)
                            st(t, e[n], i);
                        return i
                    }(e || "*", a.nodeType ? [a] : a, []), _ = !t || !s && e ? m : bt(m, d, t, a, l), v = i ? o || (s ? t : f || n) ? [] : r : _;
                    if (i && i(_, v, a, l),
                    n)
                        for (h = bt(v, p),
                        n(h, [], a, l),
                        u = h.length; u--; )
                            (c = h[u]) && (v[p[u]] = !(_[p[u]] = c));
                    if (s) {
                        if (o || t) {
                            if (o) {
                                for (h = [],
                                u = v.length; u--; )
                                    (c = v[u]) && h.push(_[u] = c);
                                o(null, v = [], h, l)
                            }
                            for (u = v.length; u--; )
                                (c = v[u]) && (h = o ? B(s, c) : d[u]) > -1 && (s[h] = !(r[h] = c))
                        }
                    } else
                        v = bt(v === r ? v.splice(f, v.length) : v),
                        o ? o(null, r, v, l) : O.apply(r, v)
                })
            }
            function Lt(t) {
                for (var e, i, o, s = t.length, r = n.relative[t[0].type], a = r || n.relative[" "], l = r ? 1 : 0, u = gt(function(t) {
                    return t === e
                }, a, !0), c = gt(function(t) {
                    return B(e, t) > -1
                }, a, !0), d = [function(t, i, n) {
                    var o = !r && (n || i !== h) || ((e = i).nodeType ? u(t, i, n) : c(t, i, n));
                    return e = null,
                    o
                }
                ]; l < s; l++)
                    if (i = n.relative[t[l].type])
                        d = [gt(yt(d), i)];
                    else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
                            for (o = ++l; o < s && !n.relative[t[o].type]; o++)
                                ;
                            return wt(l > 1 && yt(d), l > 1 && vt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace($, "$1"), i, l < o && Lt(t.slice(l, o)), o < s && Lt(t = t.slice(o)), o < s && vt(t))
                        }
                        d.push(i)
                    }
                return yt(d)
            }
            return _t.prototype = n.filters = n.pseudos,
            n.setFilters = new _t,
            r = st.tokenize = function(t, e) {
                var i, o, s, r, a, l, h, u = C[t + " "];
                if (u)
                    return e ? 0 : u.slice(0);
                for (a = t,
                l = [],
                h = n.preFilter; a; ) {
                    for (r in i && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                    l.push(s = [])),
                    i = !1,
                    (o = F.exec(a)) && (i = o.shift(),
                    s.push({
                        value: i,
                        type: o[0].replace($, " ")
                    }),
                    a = a.slice(i.length)),
                    n.filter)
                        !(o = V[r].exec(a)) || h[r] && !(o = h[r](o)) || (i = o.shift(),
                        s.push({
                            value: i,
                            type: r,
                            matches: o
                        }),
                        a = a.slice(i.length));
                    if (!i)
                        break
                }
                return e ? a.length : a ? st.error(t) : C(t, l).slice(0)
            }
            ,
            a = st.compile = function(t, e) {
                var i, o = [], s = [], a = E[t + " "];
                if (!a) {
                    for (e || (e = r(t)),
                    i = e.length; i--; )
                        (a = Lt(e[i]))[b] ? o.push(a) : s.push(a);
                    (a = E(t, function(t, e) {
                        var i = e.length > 0
                          , o = t.length > 0
                          , s = function(s, r, a, l, u) {
                            var c, f, _, v = 0, g = "0", y = s && [], b = [], w = h, x = s || o && n.find.TAG("*", u), k = L += null == w ? 1 : Math.random() || .1, C = x.length;
                            for (u && (h = r === p || r || u); g !== C && null != (c = x[g]); g++) {
                                if (o && c) {
                                    for (f = 0,
                                    r || c.ownerDocument === p || (d(c),
                                    a = !m); _ = t[f++]; )
                                        if (_(c, r || p, a)) {
                                            l.push(c);
                                            break
                                        }
                                    u && (L = k)
                                }
                                i && ((c = !_ && c) && v--,
                                s && y.push(c))
                            }
                            if (v += g,
                            i && g !== v) {
                                for (f = 0; _ = e[f++]; )
                                    _(y, b, r, a);
                                if (s) {
                                    if (v > 0)
                                        for (; g--; )
                                            y[g] || b[g] || (b[g] = P.call(l));
                                    b = bt(b)
                                }
                                O.apply(l, b),
                                u && !s && b.length > 0 && v + e.length > 1 && st.uniqueSort(l)
                            }
                            return u && (L = k,
                            h = w),
                            y
                        };
                        return i ? at(s) : s
                    }(s, o))).selector = t
                }
                return a
            }
            ,
            l = st.select = function(t, e, i, o) {
                var s, l, h, u, c, d = "function" == typeof t && t, p = !o && r(t = d.selector || t);
                if (i = i || [],
                1 === p.length) {
                    if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (h = l[0]).type && 9 === e.nodeType && m && n.relative[l[1].type]) {
                        if (!(e = (n.find.ID(h.matches[0].replace(J, tt), e) || [])[0]))
                            return i;
                        d && (e = e.parentNode),
                        t = t.slice(l.shift().value.length)
                    }
                    for (s = V.needsContext.test(t) ? 0 : l.length; s-- && (h = l[s],
                    !n.relative[u = h.type]); )
                        if ((c = n.find[u]) && (o = c(h.matches[0].replace(J, tt), Q.test(l[0].type) && mt(e.parentNode) || e))) {
                            if (l.splice(s, 1),
                            !(t = o.length && vt(l)))
                                return O.apply(i, o),
                                i;
                            break
                        }
                }
                return (d || a(t, p))(o, e, !m, i, !e || Q.test(t) && mt(e.parentNode) || e),
                i
            }
            ,
            i.sortStable = b.split("").sort(T).join("") === b,
            i.detectDuplicates = !!c,
            d(),
            i.sortDetached = lt(function(t) {
                return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
            }),
            lt(function(t) {
                return t.innerHTML = "<a href='#'></a>",
                "#" === t.firstChild.getAttribute("href")
            }) || ht("type|href|height|width", function(t, e, i) {
                if (!i)
                    return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }),
            i.attributes && lt(function(t) {
                return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
            }) || ht("value", function(t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue
            }),
            lt(function(t) {
                return null == t.getAttribute("disabled")
            }) || ht(A, function(t, e, i) {
                var n;
                if (!i)
                    return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }),
            st
        }(i);
        x.find = E,
        x.expr = E.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.uniqueSort = x.unique = E.uniqueSort,
        x.text = E.getText,
        x.isXMLDoc = E.isXML,
        x.contains = E.contains,
        x.escapeSelector = E.escape;
        var T = function(t, e, i) {
            for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (o && x(t).is(i))
                        break;
                    n.push(t)
                }
            return n
        }
          , M = function(t, e) {
            for (var i = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && i.push(t);
            return i
        }
          , D = x.expr.match.needsContext;
        function P(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function O(t, e, i) {
            return g(e) ? x.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            }) : e.nodeType ? x.grep(t, function(t) {
                return t === e !== i
            }) : "string" != typeof e ? x.grep(t, function(t) {
                return c.call(e, t) > -1 !== i
            }) : x.filter(e, t, i)
        }
        x.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"),
            1 === e.length && 1 === n.nodeType ? x.find.matchesSelector(n, t) ? [n] : [] : x.find.matches(t, x.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }
        ,
        x.fn.extend({
            find: function(t) {
                var e, i, n = this.length, o = this;
                if ("string" != typeof t)
                    return this.pushStack(x(t).filter(function() {
                        for (e = 0; e < n; e++)
                            if (x.contains(o[e], this))
                                return !0
                    }));
                for (i = this.pushStack([]),
                e = 0; e < n; e++)
                    x.find(t, o[e], i);
                return n > 1 ? x.uniqueSort(i) : i
            },
            filter: function(t) {
                return this.pushStack(O(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(O(this, t || [], !0))
            },
            is: function(t) {
                return !!O(this, "string" == typeof t && D.test(t) ? x(t) : t || [], !1).length
            }
        });
        var I, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (x.fn.init = function(t, e, i) {
            var n, o;
            if (!t)
                return this;
            if (i = i || I,
            "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : B.exec(t)) || !n[1] && e)
                    return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof x ? e[0] : e,
                    x.merge(this, x.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : r, !0)),
                    S.test(n[1]) && x.isPlainObject(e))
                        for (n in e)
                            g(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (o = r.getElementById(n[2])) && (this[0] = o,
                this.length = 1),
                this
            }
            return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : g(t) ? void 0 !== i.ready ? i.ready(t) : t(x) : x.makeArray(t, this)
        }
        ).prototype = x.fn,
        I = x(r);
        var A = /^(?:parents|prev(?:Until|All))/
          , z = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function R(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType; )
                ;
            return t
        }
        x.fn.extend({
            has: function(t) {
                var e = x(t, this)
                  , i = e.length;
                return this.filter(function() {
                    for (var t = 0; t < i; t++)
                        if (x.contains(this, e[t]))
                            return !0
                })
            },
            closest: function(t, e) {
                var i, n = 0, o = this.length, s = [], r = "string" != typeof t && x(t);
                if (!D.test(t))
                    for (; n < o; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && x.find.matchesSelector(i, t))) {
                                s.push(i);
                                break
                            }
                return this.pushStack(s.length > 1 ? x.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? c.call(x(t), this[0]) : c.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(x.uniqueSort(x.merge(this.get(), x(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }),
        x.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return T(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return T(t, "parentNode", i)
            },
            next: function(t) {
                return R(t, "nextSibling")
            },
            prev: function(t) {
                return R(t, "previousSibling")
            },
            nextAll: function(t) {
                return T(t, "nextSibling")
            },
            prevAll: function(t) {
                return T(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return T(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return T(t, "previousSibling", i)
            },
            siblings: function(t) {
                return M((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return M(t.firstChild)
            },
            contents: function(t) {
                return P(t, "iframe") ? t.contentDocument : (P(t, "template") && (t = t.content || t),
                x.merge([], t.childNodes))
            }
        }, function(t, e) {
            x.fn[t] = function(i, n) {
                var o = x.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i),
                n && "string" == typeof n && (o = x.filter(n, o)),
                this.length > 1 && (z[t] || x.uniqueSort(o),
                A.test(t) && o.reverse()),
                this.pushStack(o)
            }
        });
        var H = /[^\x20\t\r\n\f]+/g;
        function j(t) {
            return t
        }
        function N(t) {
            throw t
        }
        function $(t, e, i, n) {
            var o;
            try {
                t && g(o = t.promise) ? o.call(t).done(e).fail(i) : t && g(o = t.then) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }
        x.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return x.each(t.match(H) || [], function(t, i) {
                    e[i] = !0
                }),
                e
            }(t) : x.extend({}, t);
            var e, i, n, o, s = [], r = [], a = -1, l = function() {
                for (o = o || t.once,
                n = e = !0; r.length; a = -1)
                    for (i = r.shift(); ++a < s.length; )
                        !1 === s[a].apply(i[0], i[1]) && t.stopOnFalse && (a = s.length,
                        i = !1);
                t.memory || (i = !1),
                e = !1,
                o && (s = i ? [] : "")
            }, h = {
                add: function() {
                    return s && (i && !e && (a = s.length - 1,
                    r.push(i)),
                    function e(i) {
                        x.each(i, function(i, n) {
                            g(n) ? t.unique && h.has(n) || s.push(n) : n && n.length && "string" !== L(n) && e(n)
                        })
                    }(arguments),
                    i && !e && l()),
                    this
                },
                remove: function() {
                    return x.each(arguments, function(t, e) {
                        for (var i; (i = x.inArray(e, s, i)) > -1; )
                            s.splice(i, 1),
                            i <= a && a--
                    }),
                    this
                },
                has: function(t) {
                    return t ? x.inArray(t, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []),
                    this
                },
                disable: function() {
                    return o = r = [],
                    s = i = "",
                    this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = r = [],
                    i || e || (s = i = ""),
                    this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, i) {
                    return o || (i = [t, (i = i || []).slice ? i.slice() : i],
                    r.push(i),
                    e || l()),
                    this
                },
                fire: function() {
                    return h.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!n
                }
            };
            return h
        }
        ,
        x.extend({
            Deferred: function(t) {
                var e = [["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2], ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]]
                  , n = "pending"
                  , o = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(t) {
                        return o.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return x.Deferred(function(i) {
                            x.each(e, function(e, n) {
                                var o = g(t[n[4]]) && t[n[4]];
                                s[n[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && g(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, o ? [t] : arguments)
                                })
                            }),
                            t = null
                        }).promise()
                    },
                    then: function(t, n, o) {
                        var s = 0;
                        function r(t, e, n, o) {
                            return function() {
                                var a = this
                                  , l = arguments
                                  , h = function() {
                                    var i, h;
                                    if (!(t < s)) {
                                        if ((i = n.apply(a, l)) === e.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        h = i && ("object" == typeof i || "function" == typeof i) && i.then,
                                        g(h) ? o ? h.call(i, r(s, e, j, o), r(s, e, N, o)) : (s++,
                                        h.call(i, r(s, e, j, o), r(s, e, N, o), r(s, e, j, e.notifyWith))) : (n !== j && (a = void 0,
                                        l = [i]),
                                        (o || e.resolveWith)(a, l))
                                    }
                                }
                                  , u = o ? h : function() {
                                    try {
                                        h()
                                    } catch (i) {
                                        x.Deferred.exceptionHook && x.Deferred.exceptionHook(i, u.stackTrace),
                                        t + 1 >= s && (n !== N && (a = void 0,
                                        l = [i]),
                                        e.rejectWith(a, l))
                                    }
                                }
                                ;
                                t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()),
                                i.setTimeout(u))
                            }
                        }
                        return x.Deferred(function(i) {
                            e[0][3].add(r(0, i, g(o) ? o : j, i.notifyWith)),
                            e[1][3].add(r(0, i, g(t) ? t : j)),
                            e[2][3].add(r(0, i, g(n) ? n : N))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? x.extend(t, o) : o
                    }
                }
                  , s = {};
                return x.each(e, function(t, i) {
                    var r = i[2]
                      , a = i[5];
                    o[i[1]] = r.add,
                    a && r.add(function() {
                        n = a
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock),
                    r.add(i[3].fire),
                    s[i[0]] = function() {
                        return s[i[0] + "With"](this === s ? void 0 : this, arguments),
                        this
                    }
                    ,
                    s[i[0] + "With"] = r.fireWith
                }),
                o.promise(s),
                t && t.call(s, s),
                s
            },
            when: function(t) {
                var e = arguments.length
                  , i = e
                  , n = Array(i)
                  , o = l.call(arguments)
                  , s = x.Deferred()
                  , r = function(t) {
                    return function(i) {
                        n[t] = this,
                        o[t] = arguments.length > 1 ? l.call(arguments) : i,
                        --e || s.resolveWith(n, o)
                    }
                };
                if (e <= 1 && ($(t, s.done(r(i)).resolve, s.reject, !e),
                "pending" === s.state() || g(o[i] && o[i].then)))
                    return s.then();
                for (; i--; )
                    $(o[i], r(i), s.reject);
                return s.promise()
            }
        });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        x.Deferred.exceptionHook = function(t, e) {
            i.console && i.console.warn && t && W.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }
        ,
        x.readyException = function(t) {
            i.setTimeout(function() {
                throw t
            })
        }
        ;
        var F = x.Deferred();
        function Z() {
            r.removeEventListener("DOMContentLoaded", Z),
            i.removeEventListener("load", Z),
            x.ready()
        }
        x.fn.ready = function(t) {
            return F.then(t).catch(function(t) {
                x.readyException(t)
            }),
            this
        }
        ,
        x.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --x.readyWait : x.isReady) || (x.isReady = !0,
                !0 !== t && --x.readyWait > 0 || F.resolveWith(r, [x]))
            }
        }),
        x.ready.then = F.then,
        "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? i.setTimeout(x.ready) : (r.addEventListener("DOMContentLoaded", Z),
        i.addEventListener("load", Z));
        var q = function(t, e, i, n, o, s, r) {
            var a = 0
              , l = t.length
              , h = null == i;
            if ("object" === L(i))
                for (a in o = !0,
                i)
                    q(t, e, a, i[a], !0, s, r);
            else if (void 0 !== n && (o = !0,
            g(n) || (r = !0),
            h && (r ? (e.call(t, n),
            e = null) : (h = e,
            e = function(t, e, i) {
                return h.call(x(t), i)
            }
            )),
            e))
                for (; a < l; a++)
                    e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return o ? t : h ? e.call(t) : l ? e(t[0], i) : s
        }
          , U = /^-ms-/
          , V = /-([a-z])/g;
        function G(t, e) {
            return e.toUpperCase()
        }
        function Y(t) {
            return t.replace(U, "ms-").replace(V, G)
        }
        var X = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        function K() {
            this.expando = x.expando + K.uid++
        }
        K.uid = 1,
        K.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {},
                X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))),
                e
            },
            set: function(t, e, i) {
                var n, o = this.cache(t);
                if ("string" == typeof e)
                    o[Y(e)] = i;
                else
                    for (n in e)
                        o[Y(n)] = e[n];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
            },
            access: function(t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i),
                void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        i = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e))in n ? [e] : e.match(H) || []).length;
                        for (; i--; )
                            delete n[e[i]]
                    }
                    (void 0 === e || x.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !x.isEmptyObject(e)
            }
        };
        var Q = new K
          , J = new K
          , tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , et = /[A-Z]/g;
        function it(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(et, "-$&").toLowerCase(),
                "string" == typeof (i = t.getAttribute(n))) {
                    try {
                        i = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                        }(i)
                    } catch (t) {}
                    J.set(t, e, i)
                } else
                    i = void 0;
            return i
        }
        x.extend({
            hasData: function(t) {
                return J.hasData(t) || Q.hasData(t)
            },
            data: function(t, e, i) {
                return J.access(t, e, i)
            },
            removeData: function(t, e) {
                J.remove(t, e)
            },
            _data: function(t, e, i) {
                return Q.access(t, e, i)
            },
            _removeData: function(t, e) {
                Q.remove(t, e)
            }
        }),
        x.fn.extend({
            data: function(t, e) {
                var i, n, o, s = this[0], r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = J.get(s),
                    1 === s.nodeType && !Q.get(s, "hasDataAttrs"))) {
                        for (i = r.length; i--; )
                            r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = Y(n.slice(5)),
                            it(s, n, o[n]));
                        Q.set(s, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    J.set(this, t)
                }) : q(this, function(e) {
                    var i;
                    if (s && void 0 === e)
                        return void 0 !== (i = J.get(s, t)) ? i : void 0 !== (i = it(s, t)) ? i : void 0;
                    this.each(function() {
                        J.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    J.remove(this, t)
                })
            }
        }),
        x.extend({
            queue: function(t, e, i) {
                var n;
                if (t)
                    return e = (e || "fx") + "queue",
                    n = Q.get(t, e),
                    i && (!n || Array.isArray(i) ? n = Q.access(t, e, x.makeArray(i)) : n.push(i)),
                    n || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = x.queue(t, e)
                  , n = i.length
                  , o = i.shift()
                  , s = x._queueHooks(t, e);
                "inprogress" === o && (o = i.shift(),
                n--),
                o && ("fx" === e && i.unshift("inprogress"),
                delete s.stop,
                o.call(t, function() {
                    x.dequeue(t, e)
                }, s)),
                !n && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return Q.get(t, i) || Q.access(t, i, {
                    empty: x.Callbacks("once memory").add(function() {
                        Q.remove(t, [e + "queue", i])
                    })
                })
            }
        }),
        x.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t,
                t = "fx",
                i--),
                arguments.length < i ? x.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = x.queue(this, t, e);
                    x._queueHooks(this, t),
                    "fx" === t && "inprogress" !== i[0] && x.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    x.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1, o = x.Deferred(), s = this, r = this.length, a = function() {
                    --n || o.resolveWith(s, [s])
                };
                for ("string" != typeof t && (e = t,
                t = void 0),
                t = t || "fx"; r--; )
                    (i = Q.get(s[r], t + "queueHooks")) && i.empty && (n++,
                    i.empty.add(a));
                return a(),
                o.promise(e)
            }
        });
        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , ot = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$","i")
          , st = ["Top", "Right", "Bottom", "Left"]
          , rt = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && x.contains(t.ownerDocument, t) && "none" === x.css(t, "display")
        }
          , at = function(t, e, i, n) {
            var o, s, r = {};
            for (s in e)
                r[s] = t.style[s],
                t.style[s] = e[s];
            for (s in o = i.apply(t, n || []),
            e)
                t.style[s] = r[s];
            return o
        };
        function lt(t, e, i, n) {
            var o, s, r = 20, a = n ? function() {
                return n.cur()
            }
            : function() {
                return x.css(t, e, "")
            }
            , l = a(), h = i && i[3] || (x.cssNumber[e] ? "" : "px"), u = (x.cssNumber[e] || "px" !== h && +l) && ot.exec(x.css(t, e));
            if (u && u[3] !== h) {
                for (l /= 2,
                h = h || u[3],
                u = +l || 1; r--; )
                    x.style(t, e, u + h),
                    (1 - s) * (1 - (s = a() / l || .5)) <= 0 && (r = 0),
                    u /= s;
                u *= 2,
                x.style(t, e, u + h),
                i = i || []
            }
            return i && (u = +u || +l || 0,
            o = i[1] ? u + (i[1] + 1) * i[2] : +i[2],
            n && (n.unit = h,
            n.start = u,
            n.end = o)),
            o
        }
        var ht = {};
        function ut(t) {
            var e, i = t.ownerDocument, n = t.nodeName, o = ht[n];
            return o || (e = i.body.appendChild(i.createElement(n)),
            o = x.css(e, "display"),
            e.parentNode.removeChild(e),
            "none" === o && (o = "block"),
            ht[n] = o,
            o)
        }
        function ct(t, e) {
            for (var i, n, o = [], s = 0, r = t.length; s < r; s++)
                (n = t[s]).style && (i = n.style.display,
                e ? ("none" === i && (o[s] = Q.get(n, "display") || null,
                o[s] || (n.style.display = "")),
                "" === n.style.display && rt(n) && (o[s] = ut(n))) : "none" !== i && (o[s] = "none",
                Q.set(n, "display", i)));
            for (s = 0; s < r; s++)
                null != o[s] && (t[s].style.display = o[s]);
            return t
        }
        x.fn.extend({
            show: function() {
                return ct(this, !0)
            },
            hide: function() {
                return ct(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    rt(this) ? x(this).show() : x(this).hide()
                })
            }
        });
        var dt = /^(?:checkbox|radio)$/i
          , pt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , ft = /^$|^module$|\/(?:java|ecma)script/i
          , mt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function _t(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
            void 0 === e || e && P(t, e) ? x.merge([t], i) : i
        }
        function vt(t, e) {
            for (var i = 0, n = t.length; i < n; i++)
                Q.set(t[i], "globalEval", !e || Q.get(e[i], "globalEval"))
        }
        mt.optgroup = mt.option,
        mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead,
        mt.th = mt.td;
        var gt = /<|&#?\w+;/;
        function yt(t, e, i, n, o) {
            for (var s, r, a, l, h, u, c = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
                if ((s = t[p]) || 0 === s)
                    if ("object" === L(s))
                        x.merge(d, s.nodeType ? [s] : s);
                    else if (gt.test(s)) {
                        for (r = r || c.appendChild(e.createElement("div")),
                        a = (pt.exec(s) || ["", ""])[1].toLowerCase(),
                        l = mt[a] || mt._default,
                        r.innerHTML = l[1] + x.htmlPrefilter(s) + l[2],
                        u = l[0]; u--; )
                            r = r.lastChild;
                        x.merge(d, r.childNodes),
                        (r = c.firstChild).textContent = ""
                    } else
                        d.push(e.createTextNode(s));
            for (c.textContent = "",
            p = 0; s = d[p++]; )
                if (n && x.inArray(s, n) > -1)
                    o && o.push(s);
                else if (h = x.contains(s.ownerDocument, s),
                r = _t(c.appendChild(s), "script"),
                h && vt(r),
                i)
                    for (u = 0; s = r[u++]; )
                        ft.test(s.type || "") && i.push(s);
            return c
        }
        !function() {
            var t = r.createDocumentFragment().appendChild(r.createElement("div"))
              , e = r.createElement("input");
            e.setAttribute("type", "radio"),
            e.setAttribute("checked", "checked"),
            e.setAttribute("name", "t"),
            t.appendChild(e),
            v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var bt = r.documentElement
          , wt = /^key/
          , Lt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , xt = /^([^.]*)(?:\.(.+)|)/;
        function kt() {
            return !0
        }
        function Ct() {
            return !1
        }
        function Et() {
            try {
                return r.activeElement
            } catch (t) {}
        }
        function Tt(t, e, i, n, o, s) {
            var r, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof i && (n = n || i,
                i = void 0),
                e)
                    Tt(t, a, i, n, e[a], s);
                return t
            }
            if (null == n && null == o ? (o = i,
            n = i = void 0) : null == o && ("string" == typeof i ? (o = n,
            n = void 0) : (o = n,
            n = i,
            i = void 0)),
            !1 === o)
                o = Ct;
            else if (!o)
                return t;
            return 1 === s && (r = o,
            (o = function(t) {
                return x().off(t),
                r.apply(this, arguments)
            }
            ).guid = r.guid || (r.guid = x.guid++)),
            t.each(function() {
                x.event.add(this, e, o, n, i)
            })
        }
        x.event = {
            global: {},
            add: function(t, e, i, n, o) {
                var s, r, a, l, h, u, c, d, p, f, m, _ = Q.get(t);
                if (_)
                    for (i.handler && (i = (s = i).handler,
                    o = s.selector),
                    o && x.find.matchesSelector(bt, o),
                    i.guid || (i.guid = x.guid++),
                    (l = _.events) || (l = _.events = {}),
                    (r = _.handle) || (r = _.handle = function(e) {
                        return void 0 !== x && x.event.triggered !== e.type ? x.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    h = (e = (e || "").match(H) || [""]).length; h--; )
                        p = m = (a = xt.exec(e[h]) || [])[1],
                        f = (a[2] || "").split(".").sort(),
                        p && (c = x.event.special[p] || {},
                        p = (o ? c.delegateType : c.bindType) || p,
                        c = x.event.special[p] || {},
                        u = x.extend({
                            type: p,
                            origType: m,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: o,
                            needsContext: o && x.expr.match.needsContext.test(o),
                            namespace: f.join(".")
                        }, s),
                        (d = l[p]) || ((d = l[p] = []).delegateCount = 0,
                        c.setup && !1 !== c.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)),
                        c.add && (c.add.call(t, u),
                        u.handler.guid || (u.handler.guid = i.guid)),
                        o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                        x.event.global[p] = !0)
            },
            remove: function(t, e, i, n, o) {
                var s, r, a, l, h, u, c, d, p, f, m, _ = Q.hasData(t) && Q.get(t);
                if (_ && (l = _.events)) {
                    for (h = (e = (e || "").match(H) || [""]).length; h--; )
                        if (p = m = (a = xt.exec(e[h]) || [])[1],
                        f = (a[2] || "").split(".").sort(),
                        p) {
                            for (c = x.event.special[p] || {},
                            d = l[p = (n ? c.delegateType : c.bindType) || p] || [],
                            a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            r = s = d.length; s--; )
                                u = d[s],
                                !o && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(s, 1),
                                u.selector && d.delegateCount--,
                                c.remove && c.remove.call(t, u));
                            r && !d.length && (c.teardown && !1 !== c.teardown.call(t, f, _.handle) || x.removeEvent(t, p, _.handle),
                            delete l[p])
                        } else
                            for (p in l)
                                x.event.remove(t, p + e[h], i, n, !0);
                    x.isEmptyObject(l) && Q.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, i, n, o, s, r, a = x.event.fix(t), l = new Array(arguments.length), h = (Q.get(this, "events") || {})[a.type] || [], u = x.event.special[a.type] || {};
                for (l[0] = a,
                e = 1; e < arguments.length; e++)
                    l[e] = arguments[e];
                if (a.delegateTarget = this,
                !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (r = x.event.handlers.call(this, a, h),
                    e = 0; (o = r[e++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = o.elem,
                        i = 0; (s = o.handlers[i++]) && !a.isImmediatePropagationStopped(); )
                            a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s,
                            a.data = s.data,
                            void 0 !== (n = ((x.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(),
                            a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(t, e) {
                var i, n, o, s, r, a = [], l = e.delegateCount, h = t.target;
                if (l && h.nodeType && !("click" === t.type && t.button >= 1))
                    for (; h !== this; h = h.parentNode || this)
                        if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                            for (s = [],
                            r = {},
                            i = 0; i < l; i++)
                                void 0 === r[o = (n = e[i]).selector + " "] && (r[o] = n.needsContext ? x(o, this).index(h) > -1 : x.find(o, this, null, [h]).length),
                                r[o] && s.push(n);
                            s.length && a.push({
                                elem: h,
                                handlers: s
                            })
                        }
                return h = this,
                l < e.length && a.push({
                    elem: h,
                    handlers: e.slice(l)
                }),
                a
            },
            addProp: function(t, e) {
                Object.defineProperty(x.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: g(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[x.expando] ? t : new x.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== Et() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === Et() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && P(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(t) {
                        return P(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        },
        x.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }
        ,
        x.Event = function(t, e) {
            if (!(this instanceof x.Event))
                return new x.Event(t,e);
            t && t.type ? (this.originalEvent = t,
            this.type = t.type,
            this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? kt : Ct,
            this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
            this.currentTarget = t.currentTarget,
            this.relatedTarget = t.relatedTarget) : this.type = t,
            e && x.extend(this, e),
            this.timeStamp = t && t.timeStamp || Date.now(),
            this[x.expando] = !0
        }
        ,
        x.Event.prototype = {
            constructor: x.Event,
            isDefaultPrevented: Ct,
            isPropagationStopped: Ct,
            isImmediatePropagationStopped: Ct,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = kt,
                t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = kt,
                t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = kt,
                t && !this.isSimulated && t.stopImmediatePropagation(),
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
            which: function(t) {
                var e = t.button;
                return null == t.which && wt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Lt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, x.event.addProp),
        x.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            x.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = t.relatedTarget, o = t.handleObj;
                    return n && (n === this || x.contains(this, n)) || (t.type = o.origType,
                    i = o.handler.apply(this, arguments),
                    t.type = e),
                    i
                }
            }
        }),
        x.fn.extend({
            on: function(t, e, i, n) {
                return Tt(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return Tt(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj)
                    return n = t.handleObj,
                    x(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                    this;
                if ("object" == typeof t) {
                    for (o in t)
                        this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e,
                e = void 0),
                !1 === i && (i = Ct),
                this.each(function() {
                    x.event.remove(this, t, i, e)
                })
            }
        });
        var Mt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , Dt = /<script|<style|<link/i
          , Pt = /checked\s*(?:[^=]|=\s*.checked.)/i
          , St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Ot(t, e) {
            return P(t, "table") && P(11 !== e.nodeType ? e : e.firstChild, "tr") && x(t).children("tbody")[0] || t
        }
        function It(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
            t
        }
        function Bt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
            t
        }
        function At(t, e) {
            var i, n, o, s, r, a, l, h;
            if (1 === e.nodeType) {
                if (Q.hasData(t) && (s = Q.access(t),
                r = Q.set(e, s),
                h = s.events))
                    for (o in delete r.handle,
                    r.events = {},
                    h)
                        for (i = 0,
                        n = h[o].length; i < n; i++)
                            x.event.add(e, o, h[o][i]);
                J.hasData(t) && (a = J.access(t),
                l = x.extend({}, a),
                J.set(e, l))
            }
        }
        function zt(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && dt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }
        function Rt(t, e, i, n) {
            e = h.apply([], e);
            var o, s, r, a, l, u, c = 0, d = t.length, p = d - 1, f = e[0], m = g(f);
            if (m || d > 1 && "string" == typeof f && !v.checkClone && Pt.test(f))
                return t.each(function(o) {
                    var s = t.eq(o);
                    m && (e[0] = f.call(this, o, s.html())),
                    Rt(s, e, i, n)
                });
            if (d && (s = (o = yt(e, t[0].ownerDocument, !1, t, n)).firstChild,
            1 === o.childNodes.length && (o = s),
            s || n)) {
                for (a = (r = x.map(_t(o, "script"), It)).length; c < d; c++)
                    l = o,
                    c !== p && (l = x.clone(l, !0, !0),
                    a && x.merge(r, _t(l, "script"))),
                    i.call(t[c], l, c);
                if (a)
                    for (u = r[r.length - 1].ownerDocument,
                    x.map(r, Bt),
                    c = 0; c < a; c++)
                        l = r[c],
                        ft.test(l.type || "") && !Q.access(l, "globalEval") && x.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(l.src) : w(l.textContent.replace(St, ""), u, l))
            }
            return t
        }
        function Ht(t, e, i) {
            for (var n, o = e ? x.filter(e, t) : t, s = 0; null != (n = o[s]); s++)
                i || 1 !== n.nodeType || x.cleanData(_t(n)),
                n.parentNode && (i && x.contains(n.ownerDocument, n) && vt(_t(n, "script")),
                n.parentNode.removeChild(n));
            return t
        }
        x.extend({
            htmlPrefilter: function(t) {
                return t.replace(Mt, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, o, s, r, a = t.cloneNode(!0), l = x.contains(t.ownerDocument, t);
                if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || x.isXMLDoc(t)))
                    for (r = _t(a),
                    n = 0,
                    o = (s = _t(t)).length; n < o; n++)
                        zt(s[n], r[n]);
                if (e)
                    if (i)
                        for (s = s || _t(t),
                        r = r || _t(a),
                        n = 0,
                        o = s.length; n < o; n++)
                            At(s[n], r[n]);
                    else
                        At(t, a);
                return (r = _t(a, "script")).length > 0 && vt(r, !l && _t(t, "script")),
                a
            },
            cleanData: function(t) {
                for (var e, i, n, o = x.event.special, s = 0; void 0 !== (i = t[s]); s++)
                    if (X(i)) {
                        if (e = i[Q.expando]) {
                            if (e.events)
                                for (n in e.events)
                                    o[n] ? x.event.remove(i, n) : x.removeEvent(i, n, e.handle);
                            i[Q.expando] = void 0
                        }
                        i[J.expando] && (i[J.expando] = void 0)
                    }
            }
        }),
        x.fn.extend({
            detach: function(t) {
                return Ht(this, t, !0)
            },
            remove: function(t) {
                return Ht(this, t)
            },
            text: function(t) {
                return q(this, function(t) {
                    return void 0 === t ? x.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return Rt(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return Rt(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Ot(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return Rt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return Rt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (x.cleanData(_t(t, !1)),
                    t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t,
                e = null == e ? t : e,
                this.map(function() {
                    return x.clone(this, t, e)
                })
            },
            html: function(t) {
                return q(this, function(t) {
                    var e = this[0] || {}
                      , i = 0
                      , n = this.length;
                    if (void 0 === t && 1 === e.nodeType)
                        return e.innerHTML;
                    if ("string" == typeof t && !Dt.test(t) && !mt[(pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = x.htmlPrefilter(t);
                        try {
                            for (; i < n; i++)
                                1 === (e = this[i] || {}).nodeType && (x.cleanData(_t(e, !1)),
                                e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return Rt(this, arguments, function(e) {
                    var i = this.parentNode;
                    x.inArray(this, t) < 0 && (x.cleanData(_t(this)),
                    i && i.replaceChild(e, this))
                }, t)
            }
        }),
        x.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            x.fn[t] = function(t) {
                for (var i, n = [], o = x(t), s = o.length - 1, r = 0; r <= s; r++)
                    i = r === s ? this : this.clone(!0),
                    x(o[r])[e](i),
                    u.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var jt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$","i")
          , Nt = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = i),
            e.getComputedStyle(t)
        }
          , $t = new RegExp(st.join("|"),"i");
        function Wt(t, e, i) {
            var n, o, s, r, a = t.style;
            return (i = i || Nt(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || x.contains(t.ownerDocument, t) || (r = x.style(t, e)),
            !v.pixelBoxStyles() && jt.test(r) && $t.test(e) && (n = a.width,
            o = a.minWidth,
            s = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = r,
            r = i.width,
            a.width = n,
            a.minWidth = o,
            a.maxWidth = s)),
            void 0 !== r ? r + "" : r
        }
        function Ft(t, e) {
            return {
                get: function() {
                    if (!t())
                        return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function t() {
                if (u) {
                    h.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    bt.appendChild(h).appendChild(u);
                    var t = i.getComputedStyle(u);
                    n = "1%" !== t.top,
                    l = 12 === e(t.marginLeft),
                    u.style.right = "60%",
                    a = 36 === e(t.right),
                    o = 36 === e(t.width),
                    u.style.position = "absolute",
                    s = 36 === u.offsetWidth || "absolute",
                    bt.removeChild(h),
                    u = null
                }
            }
            function e(t) {
                return Math.round(parseFloat(t))
            }
            var n, o, s, a, l, h = r.createElement("div"), u = r.createElement("div");
            u.style && (u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            v.clearCloneStyle = "content-box" === u.style.backgroundClip,
            x.extend(v, {
                boxSizingReliable: function() {
                    return t(),
                    o
                },
                pixelBoxStyles: function() {
                    return t(),
                    a
                },
                pixelPosition: function() {
                    return t(),
                    n
                },
                reliableMarginLeft: function() {
                    return t(),
                    l
                },
                scrollboxSize: function() {
                    return t(),
                    s
                }
            }))
        }();
        var Zt = /^(none|table(?!-c[ea]).+)/
          , qt = /^--/
          , Ut = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Vt = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , Gt = ["Webkit", "Moz", "ms"]
          , Yt = r.createElement("div").style;
        function Xt(t) {
            var e = x.cssProps[t];
            return e || (e = x.cssProps[t] = function(t) {
                if (t in Yt)
                    return t;
                for (var e = t[0].toUpperCase() + t.slice(1), i = Gt.length; i--; )
                    if ((t = Gt[i] + e)in Yt)
                        return t
            }(t) || t),
            e
        }
        function Kt(t, e, i) {
            var n = ot.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }
        function Qt(t, e, i, n, o, s) {
            var r = "width" === e ? 1 : 0
              , a = 0
              , l = 0;
            if (i === (n ? "border" : "content"))
                return 0;
            for (; r < 4; r += 2)
                "margin" === i && (l += x.css(t, i + st[r], !0, o)),
                n ? ("content" === i && (l -= x.css(t, "padding" + st[r], !0, o)),
                "margin" !== i && (l -= x.css(t, "border" + st[r] + "Width", !0, o))) : (l += x.css(t, "padding" + st[r], !0, o),
                "padding" !== i ? l += x.css(t, "border" + st[r] + "Width", !0, o) : a += x.css(t, "border" + st[r] + "Width", !0, o));
            return !n && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - .5))),
            l
        }
        function Jt(t, e, i) {
            var n = Nt(t)
              , o = Wt(t, e, n)
              , s = "border-box" === x.css(t, "boxSizing", !1, n)
              , r = s;
            if (jt.test(o)) {
                if (!i)
                    return o;
                o = "auto"
            }
            return r = r && (v.boxSizingReliable() || o === t.style[e]),
            ("auto" === o || !parseFloat(o) && "inline" === x.css(t, "display", !1, n)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)],
            r = !0),
            (o = parseFloat(o) || 0) + Qt(t, e, i || (s ? "border" : "content"), r, n, o) + "px"
        }
        function te(t, e, i, n, o) {
            return new te.prototype.init(t,e,i,n,o)
        }
        x.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = Wt(t, "opacity");
                            return "" === i ? "1" : i
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
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, r, a = Y(e), l = qt.test(e), h = t.style;
                    if (l || (e = Xt(a)),
                    r = x.cssHooks[e] || x.cssHooks[a],
                    void 0 === i)
                        return r && "get"in r && void 0 !== (o = r.get(t, !1, n)) ? o : h[e];
                    "string" === (s = typeof i) && (o = ot.exec(i)) && o[1] && (i = lt(t, e, o),
                    s = "number"),
                    null != i && i == i && ("number" === s && (i += o && o[3] || (x.cssNumber[a] ? "" : "px")),
                    v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"),
                    r && "set"in r && void 0 === (i = r.set(t, i, n)) || (l ? h.setProperty(e, i) : h[e] = i))
                }
            },
            css: function(t, e, i, n) {
                var o, s, r, a = Y(e);
                return qt.test(e) || (e = Xt(a)),
                (r = x.cssHooks[e] || x.cssHooks[a]) && "get"in r && (o = r.get(t, !0, i)),
                void 0 === o && (o = Wt(t, e, n)),
                "normal" === o && e in Vt && (o = Vt[e]),
                "" === i || i ? (s = parseFloat(o),
                !0 === i || isFinite(s) ? s || 0 : o) : o
            }
        }),
        x.each(["height", "width"], function(t, e) {
            x.cssHooks[e] = {
                get: function(t, i, n) {
                    if (i)
                        return !Zt.test(x.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Jt(t, e, n) : at(t, Ut, function() {
                            return Jt(t, e, n)
                        })
                },
                set: function(t, i, n) {
                    var o, s = Nt(t), r = "border-box" === x.css(t, "boxSizing", !1, s), a = n && Qt(t, e, n, r, s);
                    return r && v.scrollboxSize() === s.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - Qt(t, e, "border", !1, s) - .5)),
                    a && (o = ot.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i,
                    i = x.css(t, e)),
                    Kt(0, i, a)
                }
            }
        }),
        x.cssHooks.marginLeft = Ft(v.reliableMarginLeft, function(t, e) {
            if (e)
                return (parseFloat(Wt(t, "marginLeft")) || t.getBoundingClientRect().left - at(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                })) + "px"
        }),
        x.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            x.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                        o[t + st[n] + e] = s[n] || s[n - 2] || s[0];
                    return o
                }
            },
            "margin" !== t && (x.cssHooks[t + e].set = Kt)
        }),
        x.fn.extend({
            css: function(t, e) {
                return q(this, function(t, e, i) {
                    var n, o, s = {}, r = 0;
                    if (Array.isArray(e)) {
                        for (n = Nt(t),
                        o = e.length; r < o; r++)
                            s[e[r]] = x.css(t, e[r], !1, n);
                        return s
                    }
                    return void 0 !== i ? x.style(t, e, i) : x.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }),
        x.Tween = te,
        te.prototype = {
            constructor: te,
            init: function(t, e, i, n, o, s) {
                this.elem = t,
                this.prop = i,
                this.easing = o || x.easing._default,
                this.options = e,
                this.start = this.now = this.cur(),
                this.end = n,
                this.unit = s || (x.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = te.propHooks[this.prop];
                return t && t.get ? t.get(this) : te.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = te.propHooks[this.prop];
                return this.options.duration ? this.pos = e = x.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                i && i.set ? i.set(this) : te.propHooks._default.set(this),
                this
            }
        },
        te.prototype.init.prototype = te.prototype,
        te.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = x.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    x.fx.step[t.prop] ? x.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[x.cssProps[t.prop]] && !x.cssHooks[t.prop] ? t.elem[t.prop] = t.now : x.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        },
        te.propHooks.scrollTop = te.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        x.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        },
        x.fx = te.prototype.init,
        x.fx.step = {};
        var ee, ie, ne = /^(?:toggle|show|hide)$/, oe = /queueHooks$/;
        function se() {
            ie && (!1 === r.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(se) : i.setTimeout(se, x.fx.interval),
            x.fx.tick())
        }
        function re() {
            return i.setTimeout(function() {
                ee = void 0
            }),
            ee = Date.now()
        }
        function ae(t, e) {
            var i, n = 0, o = {
                height: t
            };
            for (e = e ? 1 : 0; n < 4; n += 2 - e)
                o["margin" + (i = st[n])] = o["padding" + i] = t;
            return e && (o.opacity = o.width = t),
            o
        }
        function le(t, e, i) {
            for (var n, o = (he.tweeners[e] || []).concat(he.tweeners["*"]), s = 0, r = o.length; s < r; s++)
                if (n = o[s].call(i, e, t))
                    return n
        }
        function he(t, e, i) {
            var n, o, s = 0, r = he.prefilters.length, a = x.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (o)
                    return !1;
                for (var e = ee || re(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), s = 0, r = h.tweens.length; s < r; s++)
                    h.tweens[s].run(n);
                return a.notifyWith(t, [h, n, i]),
                n < 1 && r ? i : (r || a.notifyWith(t, [h, 1, 0]),
                a.resolveWith(t, [h]),
                !1)
            }, h = a.promise({
                elem: t,
                props: x.extend({}, e),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: ee || re(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = x.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(n),
                    n
                },
                stop: function(e) {
                    var i = 0
                      , n = e ? h.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; i < n; i++)
                        h.tweens[i].run(1);
                    return e ? (a.notifyWith(t, [h, 1, 0]),
                    a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]),
                    this
                }
            }), u = h.props;
            for (!function(t, e) {
                var i, n, o, s, r;
                for (i in t)
                    if (o = e[n = Y(i)],
                    s = t[i],
                    Array.isArray(s) && (o = s[1],
                    s = t[i] = s[0]),
                    i !== n && (t[n] = s,
                    delete t[i]),
                    (r = x.cssHooks[n]) && "expand"in r)
                        for (i in s = r.expand(s),
                        delete t[n],
                        s)
                            i in t || (t[i] = s[i],
                            e[i] = o);
                    else
                        e[n] = o
            }(u, h.opts.specialEasing); s < r; s++)
                if (n = he.prefilters[s].call(h, t, u, h.opts))
                    return g(n.stop) && (x._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)),
                    n;
            return x.map(u, le, h),
            g(h.opts.start) && h.opts.start.call(t, h),
            h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always),
            x.fx.timer(x.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })),
            h
        }
        x.Animation = x.extend(he, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return lt(i.elem, t, ot.exec(e), i),
                    i
                }
                ]
            },
            tweener: function(t, e) {
                g(t) ? (e = t,
                t = ["*"]) : t = t.match(H);
                for (var i, n = 0, o = t.length; n < o; n++)
                    i = t[n],
                    he.tweeners[i] = he.tweeners[i] || [],
                    he.tweeners[i].unshift(e)
            },
            prefilters: [function(t, e, i) {
                var n, o, s, r, a, l, h, u, c = "width"in e || "height"in e, d = this, p = {}, f = t.style, m = t.nodeType && rt(t), _ = Q.get(t, "fxshow");
                for (n in i.queue || (null == (r = x._queueHooks(t, "fx")).unqueued && (r.unqueued = 0,
                a = r.empty.fire,
                r.empty.fire = function() {
                    r.unqueued || a()
                }
                ),
                r.unqueued++,
                d.always(function() {
                    d.always(function() {
                        r.unqueued--,
                        x.queue(t, "fx").length || r.empty.fire()
                    })
                })),
                e)
                    if (o = e[n],
                    ne.test(o)) {
                        if (delete e[n],
                        s = s || "toggle" === o,
                        o === (m ? "hide" : "show")) {
                            if ("show" !== o || !_ || void 0 === _[n])
                                continue;
                            m = !0
                        }
                        p[n] = _ && _[n] || x.style(t, n)
                    }
                if ((l = !x.isEmptyObject(e)) || !x.isEmptyObject(p))
                    for (n in c && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
                    null == (h = _ && _.display) && (h = Q.get(t, "display")),
                    "none" === (u = x.css(t, "display")) && (h ? u = h : (ct([t], !0),
                    h = t.style.display || h,
                    u = x.css(t, "display"),
                    ct([t]))),
                    ("inline" === u || "inline-block" === u && null != h) && "none" === x.css(t, "float") && (l || (d.done(function() {
                        f.display = h
                    }),
                    null == h && (u = f.display,
                    h = "none" === u ? "" : u)),
                    f.display = "inline-block")),
                    i.overflow && (f.overflow = "hidden",
                    d.always(function() {
                        f.overflow = i.overflow[0],
                        f.overflowX = i.overflow[1],
                        f.overflowY = i.overflow[2]
                    })),
                    l = !1,
                    p)
                        l || (_ ? "hidden"in _ && (m = _.hidden) : _ = Q.access(t, "fxshow", {
                            display: h
                        }),
                        s && (_.hidden = !m),
                        m && ct([t], !0),
                        d.done(function() {
                            for (n in m || ct([t]),
                            Q.remove(t, "fxshow"),
                            p)
                                x.style(t, n, p[n])
                        })),
                        l = le(m ? _[n] : 0, n, d),
                        n in _ || (_[n] = l.start,
                        m && (l.end = l.start,
                        l.start = 0))
            }
            ],
            prefilter: function(t, e) {
                e ? he.prefilters.unshift(t) : he.prefilters.push(t)
            }
        }),
        x.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? x.extend({}, t) : {
                complete: i || !i && e || g(t) && t,
                duration: t,
                easing: i && e || e && !g(e) && e
            };
            return x.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in x.fx.speeds ? n.duration = x.fx.speeds[n.duration] : n.duration = x.fx.speeds._default),
            null != n.queue && !0 !== n.queue || (n.queue = "fx"),
            n.old = n.complete,
            n.complete = function() {
                g(n.old) && n.old.call(this),
                n.queue && x.dequeue(this, n.queue)
            }
            ,
            n
        }
        ,
        x.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(rt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var o = x.isEmptyObject(t)
                  , s = x.speed(e, i, n)
                  , r = function() {
                    var e = he(this, x.extend({}, t), s);
                    (o || Q.get(this, "finish")) && e.stop(!0)
                };
                return r.finish = r,
                o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop,
                    e(i)
                };
                return "string" != typeof t && (i = e,
                e = t,
                t = void 0),
                e && !1 !== t && this.queue(t || "fx", []),
                this.each(function() {
                    var e = !0
                      , o = null != t && t + "queueHooks"
                      , s = x.timers
                      , r = Q.get(this);
                    if (o)
                        r[o] && r[o].stop && n(r[o]);
                    else
                        for (o in r)
                            r[o] && r[o].stop && oe.test(o) && n(r[o]);
                    for (o = s.length; o--; )
                        s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i),
                        e = !1,
                        s.splice(o, 1));
                    !e && i || x.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"),
                this.each(function() {
                    var e, i = Q.get(this), n = i[t + "queue"], o = i[t + "queueHooks"], s = x.timers, r = n ? n.length : 0;
                    for (i.finish = !0,
                    x.queue(this, t, []),
                    o && o.stop && o.stop.call(this, !0),
                    e = s.length; e--; )
                        s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0),
                        s.splice(e, 1));
                    for (e = 0; e < r; e++)
                        n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }),
        x.each(["toggle", "show", "hide"], function(t, e) {
            var i = x.fn[e];
            x.fn[e] = function(t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ae(e, !0), t, n, o)
            }
        }),
        x.each({
            slideDown: ae("show"),
            slideUp: ae("hide"),
            slideToggle: ae("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            x.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }),
        x.timers = [],
        x.fx.tick = function() {
            var t, e = 0, i = x.timers;
            for (ee = Date.now(); e < i.length; e++)
                (t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || x.fx.stop(),
            ee = void 0
        }
        ,
        x.fx.timer = function(t) {
            x.timers.push(t),
            x.fx.start()
        }
        ,
        x.fx.interval = 13,
        x.fx.start = function() {
            ie || (ie = !0,
            se())
        }
        ,
        x.fx.stop = function() {
            ie = null
        }
        ,
        x.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        x.fn.delay = function(t, e) {
            return t = x.fx && x.fx.speeds[t] || t,
            e = e || "fx",
            this.queue(e, function(e, n) {
                var o = i.setTimeout(e, t);
                n.stop = function() {
                    i.clearTimeout(o)
                }
            })
        }
        ,
        function() {
            var t = r.createElement("input")
              , e = r.createElement("select").appendChild(r.createElement("option"));
            t.type = "checkbox",
            v.checkOn = "" !== t.value,
            v.optSelected = e.selected,
            (t = r.createElement("input")).value = "t",
            t.type = "radio",
            v.radioValue = "t" === t.value
        }();
        var ue, ce = x.expr.attrHandle;
        x.fn.extend({
            attr: function(t, e) {
                return q(this, x.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    x.removeAttr(this, t)
                })
            }
        }),
        x.extend({
            attr: function(t, e, i) {
                var n, o, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                    return void 0 === t.getAttribute ? x.prop(t, e, i) : (1 === s && x.isXMLDoc(t) || (o = x.attrHooks[e.toLowerCase()] || (x.expr.match.bool.test(e) ? ue : void 0)),
                    void 0 !== i ? null === i ? void x.removeAttr(t, e) : o && "set"in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""),
                    i) : o && "get"in o && null !== (n = o.get(t, e)) ? n : null == (n = x.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!v.radioValue && "radio" === e && P(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e),
                            i && (t.value = i),
                            e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n = 0, o = e && e.match(H);
                if (o && 1 === t.nodeType)
                    for (; i = o[n++]; )
                        t.removeAttribute(i)
            }
        }),
        ue = {
            set: function(t, e, i) {
                return !1 === e ? x.removeAttr(t, i) : t.setAttribute(i, i),
                i
            }
        },
        x.each(x.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ce[e] || x.find.attr;
            ce[e] = function(t, e, n) {
                var o, s, r = e.toLowerCase();
                return n || (s = ce[r],
                ce[r] = o,
                o = null != i(t, e, n) ? r : null,
                ce[r] = s),
                o
            }
        });
        var de = /^(?:input|select|textarea|button)$/i
          , pe = /^(?:a|area)$/i;
        function fe(t) {
            return (t.match(H) || []).join(" ")
        }
        function me(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        function _e(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || []
        }
        x.fn.extend({
            prop: function(t, e) {
                return q(this, x.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[x.propFix[t] || t]
                })
            }
        }),
        x.extend({
            prop: function(t, e, i) {
                var n, o, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                    return 1 === s && x.isXMLDoc(t) || (e = x.propFix[e] || e,
                    o = x.propHooks[e]),
                    void 0 !== i ? o && "set"in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get"in o && null !== (n = o.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = x.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : de.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        v.optSelected || (x.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex,
                null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex)
            }
        }),
        x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            x.propFix[this.toLowerCase()] = this
        }),
        x.fn.extend({
            addClass: function(t) {
                var e, i, n, o, s, r, a, l = 0;
                if (g(t))
                    return this.each(function(e) {
                        x(this).addClass(t.call(this, e, me(this)))
                    });
                if ((e = _e(t)).length)
                    for (; i = this[l++]; )
                        if (o = me(i),
                        n = 1 === i.nodeType && " " + fe(o) + " ") {
                            for (r = 0; s = e[r++]; )
                                n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            o !== (a = fe(n)) && i.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, o, s, r, a, l = 0;
                if (g(t))
                    return this.each(function(e) {
                        x(this).removeClass(t.call(this, e, me(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = _e(t)).length)
                    for (; i = this[l++]; )
                        if (o = me(i),
                        n = 1 === i.nodeType && " " + fe(o) + " ") {
                            for (r = 0; s = e[r++]; )
                                for (; n.indexOf(" " + s + " ") > -1; )
                                    n = n.replace(" " + s + " ", " ");
                            o !== (a = fe(n)) && i.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t
                  , n = "string" === i || Array.isArray(t);
                return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : g(t) ? this.each(function(i) {
                    x(this).toggleClass(t.call(this, i, me(this), e), e)
                }) : this.each(function() {
                    var e, o, s, r;
                    if (n)
                        for (o = 0,
                        s = x(this),
                        r = _e(t); e = r[o++]; )
                            s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else
                        void 0 !== t && "boolean" !== i || ((e = me(this)) && Q.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++]; )
                    if (1 === i.nodeType && (" " + fe(me(i)) + " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        });
        var ve = /\r/g;
        x.fn.extend({
            val: function(t) {
                var e, i, n, o = this[0];
                return arguments.length ? (n = g(t),
                this.each(function(i) {
                    var o;
                    1 === this.nodeType && (null == (o = n ? t.call(this, i, x(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = x.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })),
                    (e = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) && "get"in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof (i = o.value) ? i.replace(ve, "") : null == i ? "" : i : void 0
            }
        }),
        x.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = x.find.attr(t, "value");
                        return null != e ? e : fe(x.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, n, o = t.options, s = t.selectedIndex, r = "select-one" === t.type, a = r ? null : [], l = r ? s + 1 : o.length;
                        for (n = s < 0 ? l : r ? s : 0; n < l; n++)
                            if (((i = o[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !P(i.parentNode, "optgroup"))) {
                                if (e = x(i).val(),
                                r)
                                    return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var i, n, o = t.options, s = x.makeArray(e), r = o.length; r--; )
                            ((n = o[r]).selected = x.inArray(x.valHooks.option.get(n), s) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1),
                        s
                    }
                }
            }
        }),
        x.each(["radio", "checkbox"], function() {
            x.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e))
                        return t.checked = x.inArray(x(t).val(), e) > -1
                }
            },
            v.checkOn || (x.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
            )
        }),
        v.focusin = "onfocusin"in i;
        var ge = /^(?:focusinfocus|focusoutblur)$/
          , ye = function(t) {
            t.stopPropagation()
        };
        x.extend(x.event, {
            trigger: function(t, e, n, o) {
                var s, a, l, h, u, c, d, p, m = [n || r], _ = f.call(t, "type") ? t.type : t, v = f.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = p = l = n = n || r,
                3 !== n.nodeType && 8 !== n.nodeType && !ge.test(_ + x.event.triggered) && (_.indexOf(".") > -1 && (_ = (v = _.split(".")).shift(),
                v.sort()),
                u = _.indexOf(":") < 0 && "on" + _,
                (t = t[x.expando] ? t : new x.Event(_,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
                t.namespace = v.join("."),
                t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                t.result = void 0,
                t.target || (t.target = n),
                e = null == e ? [t] : x.makeArray(e, [t]),
                d = x.event.special[_] || {},
                o || !d.trigger || !1 !== d.trigger.apply(n, e))) {
                    if (!o && !d.noBubble && !y(n)) {
                        for (h = d.delegateType || _,
                        ge.test(h + _) || (a = a.parentNode); a; a = a.parentNode)
                            m.push(a),
                            l = a;
                        l === (n.ownerDocument || r) && m.push(l.defaultView || l.parentWindow || i)
                    }
                    for (s = 0; (a = m[s++]) && !t.isPropagationStopped(); )
                        p = a,
                        t.type = s > 1 ? h : d.bindType || _,
                        (c = (Q.get(a, "events") || {})[t.type] && Q.get(a, "handle")) && c.apply(a, e),
                        (c = u && a[u]) && c.apply && X(a) && (t.result = c.apply(a, e),
                        !1 === t.result && t.preventDefault());
                    return t.type = _,
                    o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(m.pop(), e) || !X(n) || u && g(n[_]) && !y(n) && ((l = n[u]) && (n[u] = null),
                    x.event.triggered = _,
                    t.isPropagationStopped() && p.addEventListener(_, ye),
                    n[_](),
                    t.isPropagationStopped() && p.removeEventListener(_, ye),
                    x.event.triggered = void 0,
                    l && (n[u] = l)),
                    t.result
                }
            },
            simulate: function(t, e, i) {
                var n = x.extend(new x.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                x.event.trigger(n, null, e)
            }
        }),
        x.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    x.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i)
                    return x.event.trigger(t, e, i, !0)
            }
        }),
        v.focusin || x.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                x.event.simulate(e, t.target, x.event.fix(t))
            };
            x.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this
                      , o = Q.access(n, e);
                    o || n.addEventListener(t, i, !0),
                    Q.access(n, e, (o || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this
                      , o = Q.access(n, e) - 1;
                    o ? Q.access(n, e, o) : (n.removeEventListener(t, i, !0),
                    Q.remove(n, e))
                }
            }
        });
        var be = i.location
          , we = Date.now()
          , Le = /\?/;
        x.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t)
                return null;
            try {
                e = (new i.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t),
            e
        }
        ;
        var xe = /\[\]$/
          , ke = /\r?\n/g
          , Ce = /^(?:submit|button|image|reset|file)$/i
          , Ee = /^(?:input|select|textarea|keygen)/i;
        function Te(t, e, i, n) {
            var o;
            if (Array.isArray(e))
                x.each(e, function(e, o) {
                    i || xe.test(t) ? n(t, o) : Te(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
                });
            else if (i || "object" !== L(e))
                n(t, e);
            else
                for (o in e)
                    Te(t + "[" + o + "]", e[o], i, n)
        }
        x.param = function(t, e) {
            var i, n = [], o = function(t, e) {
                var i = g(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
            if (Array.isArray(t) || t.jquery && !x.isPlainObject(t))
                x.each(t, function() {
                    o(this.name, this.value)
                });
            else
                for (i in t)
                    Te(i, t[i], e, o);
            return n.join("&")
        }
        ,
        x.fn.extend({
            serialize: function() {
                return x.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = x.prop(this, "elements");
                    return t ? x.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !x(this).is(":disabled") && Ee.test(this.nodeName) && !Ce.test(t) && (this.checked || !dt.test(t))
                }).map(function(t, e) {
                    var i = x(this).val();
                    return null == i ? null : Array.isArray(i) ? x.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(ke, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(ke, "\r\n")
                    }
                }).get()
            }
        });
        var Me = /%20/g
          , De = /#.*$/
          , Pe = /([?&])_=[^&]*/
          , Se = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Oe = /^(?:GET|HEAD)$/
          , Ie = /^\/\//
          , Be = {}
          , Ae = {}
          , ze = "*/".concat("*")
          , Re = r.createElement("a");
        function He(t) {
            return function(e, i) {
                "string" != typeof e && (i = e,
                e = "*");
                var n, o = 0, s = e.toLowerCase().match(H) || [];
                if (g(i))
                    for (; n = s[o++]; )
                        "+" === n[0] ? (n = n.slice(1) || "*",
                        (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }
        function je(t, e, i, n) {
            var o = {}
              , s = t === Ae;
            function r(a) {
                var l;
                return o[a] = !0,
                x.each(t[a] || [], function(t, a) {
                    var h = a(e, i, n);
                    return "string" != typeof h || s || o[h] ? s ? !(l = h) : void 0 : (e.dataTypes.unshift(h),
                    r(h),
                    !1)
                }),
                l
            }
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }
        function Ne(t, e) {
            var i, n, o = x.ajaxSettings.flatOptions || {};
            for (i in e)
                void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && x.extend(!0, t, n),
            t
        }
        Re.href = be.href,
        x.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ze,
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
            ajaxSetup: function(t, e) {
                return e ? Ne(Ne(t, x.ajaxSettings), e) : Ne(x.ajaxSettings, t)
            },
            ajaxPrefilter: He(Be),
            ajaxTransport: He(Ae),
            ajax: function(t, e) {
                "object" == typeof t && (e = t,
                t = void 0),
                e = e || {};
                var n, o, s, a, l, h, u, c, d, p, f = x.ajaxSetup({}, e), m = f.context || f, _ = f.context && (m.nodeType || m.jquery) ? x(m) : x.event, v = x.Deferred(), g = x.Callbacks("once memory"), y = f.statusCode || {}, b = {}, w = {}, L = "canceled", k = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = Se.exec(s); )
                                    a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t,
                        b[t] = e),
                        this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (f.mimeType = t),
                        this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u)
                                k.always(t[k.status]);
                            else
                                for (e in t)
                                    y[e] = [y[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || L;
                        return n && n.abort(e),
                        C(0, e),
                        this
                    }
                };
                if (v.promise(k),
                f.url = ((t || f.url || be.href) + "").replace(Ie, be.protocol + "//"),
                f.type = e.method || e.type || f.method || f.type,
                f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""],
                null == f.crossDomain) {
                    h = r.createElement("a");
                    try {
                        h.href = f.url,
                        h.href = h.href,
                        f.crossDomain = Re.protocol + "//" + Re.host != h.protocol + "//" + h.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)),
                je(Be, f, e, k),
                u)
                    return k;
                for (d in (c = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !Oe.test(f.type),
                o = f.url.replace(De, ""),
                f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Me, "+")) : (p = f.url.slice(o.length),
                f.data && (f.processData || "string" == typeof f.data) && (o += (Le.test(o) ? "&" : "?") + f.data,
                delete f.data),
                !1 === f.cache && (o = o.replace(Pe, "$1"),
                p = (Le.test(o) ? "&" : "?") + "_=" + we++ + p),
                f.url = o + p),
                f.ifModified && (x.lastModified[o] && k.setRequestHeader("If-Modified-Since", x.lastModified[o]),
                x.etag[o] && k.setRequestHeader("If-None-Match", x.etag[o])),
                (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && k.setRequestHeader("Content-Type", f.contentType),
                k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : f.accepts["*"]),
                f.headers)
                    k.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, k, f) || u))
                    return k.abort();
                if (L = "abort",
                g.add(f.complete),
                k.done(f.success),
                k.fail(f.error),
                n = je(Ae, f, e, k)) {
                    if (k.readyState = 1,
                    c && _.trigger("ajaxSend", [k, f]),
                    u)
                        return k;
                    f.async && f.timeout > 0 && (l = i.setTimeout(function() {
                        k.abort("timeout")
                    }, f.timeout));
                    try {
                        u = !1,
                        n.send(b, C)
                    } catch (t) {
                        if (u)
                            throw t;
                        C(-1, t)
                    }
                } else
                    C(-1, "No Transport");
                function C(t, e, r, a) {
                    var h, d, p, b, w, L = e;
                    u || (u = !0,
                    l && i.clearTimeout(l),
                    n = void 0,
                    s = a || "",
                    k.readyState = t > 0 ? 4 : 0,
                    h = t >= 200 && t < 300 || 304 === t,
                    r && (b = function(t, e, i) {
                        for (var n, o, s, r, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                            l.shift(),
                            void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (o in a)
                                if (a[o] && a[o].test(n)) {
                                    l.unshift(o);
                                    break
                                }
                        if (l[0]in i)
                            s = l[0];
                        else {
                            for (o in i) {
                                if (!l[0] || t.converters[o + " " + l[0]]) {
                                    s = o;
                                    break
                                }
                                r || (r = o)
                            }
                            s = s || r
                        }
                        if (s)
                            return s !== l[0] && l.unshift(s),
                            i[s]
                    }(f, k, r)),
                    b = function(t, e, i, n) {
                        var o, s, r, a, l, h = {}, u = t.dataTypes.slice();
                        if (u[1])
                            for (r in t.converters)
                                h[r.toLowerCase()] = t.converters[r];
                        for (s = u.shift(); s; )
                            if (t.responseFields[s] && (i[t.responseFields[s]] = e),
                            !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                            l = s,
                            s = u.shift())
                                if ("*" === s)
                                    s = l;
                                else if ("*" !== l && l !== s) {
                                    if (!(r = h[l + " " + s] || h["* " + s]))
                                        for (o in h)
                                            if ((a = o.split(" "))[1] === s && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                                                !0 === r ? r = h[o] : !0 !== h[o] && (s = a[0],
                                                u.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== r)
                                        if (r && t.throws)
                                            e = r(e);
                                        else
                                            try {
                                                e = r(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: r ? t : "No conversion from " + l + " to " + s
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: e
                        }
                    }(f, b, k, h),
                    h ? (f.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (x.lastModified[o] = w),
                    (w = k.getResponseHeader("etag")) && (x.etag[o] = w)),
                    204 === t || "HEAD" === f.type ? L = "nocontent" : 304 === t ? L = "notmodified" : (L = b.state,
                    d = b.data,
                    h = !(p = b.error))) : (p = L,
                    !t && L || (L = "error",
                    t < 0 && (t = 0))),
                    k.status = t,
                    k.statusText = (e || L) + "",
                    h ? v.resolveWith(m, [d, L, k]) : v.rejectWith(m, [k, L, p]),
                    k.statusCode(y),
                    y = void 0,
                    c && _.trigger(h ? "ajaxSuccess" : "ajaxError", [k, f, h ? d : p]),
                    g.fireWith(m, [k, L]),
                    c && (_.trigger("ajaxComplete", [k, f]),
                    --x.active || x.event.trigger("ajaxStop")))
                }
                return k
            },
            getJSON: function(t, e, i) {
                return x.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return x.get(t, void 0, e, "script")
            }
        }),
        x.each(["get", "post"], function(t, e) {
            x[e] = function(t, i, n, o) {
                return g(i) && (o = o || n,
                n = i,
                i = void 0),
                x.ajax(x.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: i,
                    success: n
                }, x.isPlainObject(t) && t))
            }
        }),
        x._evalUrl = function(t) {
            return x.ajax({
                url: t,
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
            wrapAll: function(t) {
                var e;
                return this[0] && (g(t) && (t = t.call(this[0])),
                e = x(t, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                    return t
                }).append(this)),
                this
            },
            wrapInner: function(t) {
                return g(t) ? this.each(function(e) {
                    x(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = x(this)
                      , i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = g(t);
                return this.each(function(i) {
                    x(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    x(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        x.expr.pseudos.hidden = function(t) {
            return !x.expr.pseudos.visible(t)
        }
        ,
        x.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }
        ,
        x.ajaxSettings.xhr = function() {
            try {
                return new i.XMLHttpRequest
            } catch (t) {}
        }
        ;
        var $e = {
            0: 200,
            1223: 204
        }
          , We = x.ajaxSettings.xhr();
        v.cors = !!We && "withCredentials"in We,
        v.ajax = We = !!We,
        x.ajaxTransport(function(t) {
            var e, n;
            if (v.cors || We && !t.crossDomain)
                return {
                    send: function(o, s) {
                        var r, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password),
                        t.xhrFields)
                            for (r in t.xhrFields)
                                a[r] = t.xhrFields[r];
                        for (r in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                        t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                        o)
                            a.setRequestHeader(r, o[r]);
                        e = function(t) {
                            return function() {
                                e && (e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s($e[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = e(),
                        n = a.onerror = a.ontimeout = e("error"),
                        void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                            4 === a.readyState && i.setTimeout(function() {
                                e && n()
                            })
                        }
                        ,
                        e = e("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e)
                                throw t
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                }
        }),
        x.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }),
        x.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return x.globalEval(t),
                    t
                }
            }
        }),
        x.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET")
        }),
        x.ajaxTransport("script", function(t) {
            var e, i;
            if (t.crossDomain)
                return {
                    send: function(n, o) {
                        e = x("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(),
                            i = null,
                            t && o("error" === t.type ? 404 : 200, t.type)
                        }
                        ),
                        r.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
        });
        var Fe = []
          , Ze = /(=)\?(?=&|$)|\?\?/;
        x.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Fe.pop() || x.expando + "_" + we++;
                return this[t] = !0,
                t
            }
        }),
        x.ajaxPrefilter("json jsonp", function(t, e, n) {
            var o, s, r, a = !1 !== t.jsonp && (Ze.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ze.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])
                return o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a ? t[a] = t[a].replace(Ze, "$1" + o) : !1 !== t.jsonp && (t.url += (Le.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                t.converters["script json"] = function() {
                    return r || x.error(o + " was not called"),
                    r[0]
                }
                ,
                t.dataTypes[0] = "json",
                s = i[o],
                i[o] = function() {
                    r = arguments
                }
                ,
                n.always(function() {
                    void 0 === s ? x(i).removeProp(o) : i[o] = s,
                    t[o] && (t.jsonpCallback = e.jsonpCallback,
                    Fe.push(o)),
                    r && g(s) && s(r[0]),
                    r = s = void 0
                }),
                "script"
        }),
        v.createHTMLDocument = function() {
            var t = r.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>",
            2 === t.childNodes.length
        }(),
        x.parseHTML = function(t, e, i) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e,
            e = !1),
            e || (v.createHTMLDocument ? ((n = (e = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
            e.head.appendChild(n)) : e = r),
            o = S.exec(t),
            s = !i && [],
            o ? [e.createElement(o[1])] : (o = yt([t], e, s),
            s && s.length && x(s).remove(),
            x.merge([], o.childNodes)));
            var n, o, s
        }
        ,
        x.fn.load = function(t, e, i) {
            var n, o, s, r = this, a = t.indexOf(" ");
            return a > -1 && (n = fe(t.slice(a)),
            t = t.slice(0, a)),
            g(e) ? (i = e,
            e = void 0) : e && "object" == typeof e && (o = "POST"),
            r.length > 0 && x.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments,
                r.html(n ? x("<div>").append(x.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                r.each(function() {
                    i.apply(this, s || [t.responseText, e, t])
                })
            }
            ),
            this
        }
        ,
        x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            x.fn[e] = function(t) {
                return this.on(e, t)
            }
        }),
        x.expr.pseudos.animated = function(t) {
            return x.grep(x.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        x.offset = {
            setOffset: function(t, e, i) {
                var n, o, s, r, a, l, h = x.css(t, "position"), u = x(t), c = {};
                "static" === h && (t.style.position = "relative"),
                a = u.offset(),
                s = x.css(t, "top"),
                l = x.css(t, "left"),
                ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1 ? (r = (n = u.position()).top,
                o = n.left) : (r = parseFloat(s) || 0,
                o = parseFloat(l) || 0),
                g(e) && (e = e.call(t, i, x.extend({}, a))),
                null != e.top && (c.top = e.top - a.top + r),
                null != e.left && (c.left = e.left - a.left + o),
                "using"in e ? e.using.call(t, c) : u.css(c)
            }
        },
        x.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        x.offset.setOffset(this, t, e)
                    });
                var e, i, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
                i = n.ownerDocument.defaultView,
                {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i, n = this[0], o = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === x.css(n, "position"))
                        e = n.getBoundingClientRect();
                    else {
                        for (e = this.offset(),
                        i = n.ownerDocument,
                        t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === x.css(t, "position"); )
                            t = t.parentNode;
                        t && t !== n && 1 === t.nodeType && ((o = x(t).offset()).top += x.css(t, "borderTopWidth", !0),
                        o.left += x.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - o.top - x.css(n, "marginTop", !0),
                        left: e.left - o.left - x.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === x.css(t, "position"); )
                        t = t.offsetParent;
                    return t || bt
                })
            }
        }),
        x.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            x.fn[t] = function(n) {
                return q(this, function(t, n, o) {
                    var s;
                    if (y(t) ? s = t : 9 === t.nodeType && (s = t.defaultView),
                    void 0 === o)
                        return s ? s[e] : t[n];
                    s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : t[n] = o
                }, t, n, arguments.length)
            }
        }),
        x.each(["top", "left"], function(t, e) {
            x.cssHooks[e] = Ft(v.pixelPosition, function(t, i) {
                if (i)
                    return i = Wt(t, e),
                    jt.test(i) ? x(t).position()[e] + "px" : i
            })
        }),
        x.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            x.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                x.fn[n] = function(o, s) {
                    var r = arguments.length && (i || "boolean" != typeof o)
                      , a = i || (!0 === o || !0 === s ? "margin" : "border");
                    return q(this, function(e, i, o) {
                        var s;
                        return y(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement,
                        Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === o ? x.css(e, i, a) : x.style(e, i, o, a)
                    }, e, r ? o : void 0, r)
                }
            })
        }),
        x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            x.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }),
        x.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }),
        x.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }),
        x.proxy = function(t, e) {
            var i, n, o;
            if ("string" == typeof e && (i = t[e],
            e = t,
            t = i),
            g(t))
                return n = l.call(arguments, 2),
                (o = function() {
                    return t.apply(e || this, n.concat(l.call(arguments)))
                }
                ).guid = t.guid = t.guid || x.guid++,
                o
        }
        ,
        x.holdReady = function(t) {
            t ? x.readyWait++ : x.ready(!0)
        }
        ,
        x.isArray = Array.isArray,
        x.parseJSON = JSON.parse,
        x.nodeName = P,
        x.isFunction = g,
        x.isWindow = y,
        x.camelCase = Y,
        x.type = L,
        x.now = Date.now,
        x.isNumeric = function(t) {
            var e = x.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }
        ,
        void 0 === (n = function() {
            return x
        }
        .apply(e, [])) || (t.exports = n);
        var qe = i.jQuery
          , Ue = i.$;
        return x.noConflict = function(t) {
            return i.$ === x && (i.$ = Ue),
            t && i.jQuery === x && (i.jQuery = qe),
            x
        }
        ,
        o || (i.jQuery = i.$ = x),
        x
    })
}
, function(t, e, i) {
    /* @preserve
 * Leaflet 1.4.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
    !function(t, i) {
        !function(t) {
            "use strict";
            var e = Object.freeze;
            function i(t) {
                var e, i, n, o;
                for (i = 1,
                n = arguments.length; i < n; i++)
                    for (e in o = arguments[i])
                        t[e] = o[e];
                return t
            }
            Object.freeze = function(t) {
                return t
            }
            ;
            var n = Object.create || function() {
                function t() {}
                return function(e) {
                    return t.prototype = e,
                    new t
                }
            }();
            function o(t, e) {
                var i = Array.prototype.slice;
                if (t.bind)
                    return t.bind.apply(t, i.call(arguments, 1));
                var n = i.call(arguments, 2);
                return function() {
                    return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
                }
            }
            var s = 0;
            function r(t) {
                return t._leaflet_id = t._leaflet_id || ++s,
                t._leaflet_id
            }
            function a(t, e, i) {
                var n, o, s, r;
                return r = function() {
                    n = !1,
                    o && (s.apply(i, o),
                    o = !1)
                }
                ,
                s = function() {
                    n ? o = arguments : (t.apply(i, arguments),
                    setTimeout(r, e),
                    n = !0)
                }
            }
            function l(t, e, i) {
                var n = e[1]
                  , o = e[0]
                  , s = n - o;
                return t === n && i ? t : ((t - o) % s + s) % s + o
            }
            function h() {
                return !1
            }
            function u(t, e) {
                var i = Math.pow(10, void 0 === e ? 6 : e);
                return Math.round(t * i) / i
            }
            function c(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }
            function d(t) {
                return c(t).split(/\s+/)
            }
            function p(t, e) {
                for (var i in t.hasOwnProperty("options") || (t.options = t.options ? n(t.options) : {}),
                e)
                    t.options[i] = e[i];
                return t.options
            }
            function f(t, e, i) {
                var n = [];
                for (var o in t)
                    n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
            }
            var m = /\{ *([\w_-]+) *\}/g;
            function _(t, e) {
                return t.replace(m, function(t, i) {
                    var n = e[i];
                    if (void 0 === n)
                        throw new Error("No value provided for variable " + t);
                    return "function" == typeof n && (n = n(e)),
                    n
                })
            }
            var v = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            ;
            function g(t, e) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e)
                        return i;
                return -1
            }
            var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
            function b(t) {
                return window["webkit" + t] || window["moz" + t] || window["ms" + t]
            }
            var w = 0;
            function x(t) {
                var e = +new Date
                  , i = Math.max(0, 16 - (e - w));
                return w = e + i,
                window.setTimeout(t, i)
            }
            var k = window.requestAnimationFrame || b("RequestAnimationFrame") || x
              , C = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || function(t) {
                window.clearTimeout(t)
            }
            ;
            function E(t, e, i) {
                if (!i || k !== x)
                    return k.call(window, o(t, e));
                t.call(e)
            }
            function T(t) {
                t && C.call(window, t)
            }
            var M = (Object.freeze || Object)({
                freeze: e,
                extend: i,
                create: n,
                bind: o,
                lastId: s,
                stamp: r,
                throttle: a,
                wrapNum: l,
                falseFn: h,
                formatNum: u,
                trim: c,
                splitWords: d,
                setOptions: p,
                getParamString: f,
                template: _,
                isArray: v,
                indexOf: g,
                emptyImageUrl: y,
                requestFn: k,
                cancelFn: C,
                requestAnimFrame: E,
                cancelAnimFrame: T
            });
            function D() {}
            D.extend = function(t) {
                var e = function() {
                    this.initialize && this.initialize.apply(this, arguments),
                    this.callInitHooks()
                }
                  , o = e.__super__ = this.prototype
                  , s = n(o);
                for (var r in s.constructor = e,
                e.prototype = s,
                this)
                    this.hasOwnProperty(r) && "prototype" !== r && "__super__" !== r && (e[r] = this[r]);
                return t.statics && (i(e, t.statics),
                delete t.statics),
                t.includes && (!function(t) {
                    if ("undefined" == typeof L || !L || !L.Mixin)
                        return;
                    t = v(t) ? t : [t];
                    for (var e = 0; e < t.length; e++)
                        t[e],
                        L.Mixin.Events
                }(t.includes),
                i.apply(null, [s].concat(t.includes)),
                delete t.includes),
                s.options && (t.options = i(n(s.options), t.options)),
                i(s, t),
                s._initHooks = [],
                s.callInitHooks = function() {
                    if (!this._initHooksCalled) {
                        o.callInitHooks && o.callInitHooks.call(this),
                        this._initHooksCalled = !0;
                        for (var t = 0, e = s._initHooks.length; t < e; t++)
                            s._initHooks[t].call(this)
                    }
                }
                ,
                e
            }
            ,
            D.include = function(t) {
                return i(this.prototype, t),
                this
            }
            ,
            D.mergeOptions = function(t) {
                return i(this.prototype.options, t),
                this
            }
            ,
            D.addInitHook = function(t) {
                var e = Array.prototype.slice.call(arguments, 1)
                  , i = "function" == typeof t ? t : function() {
                    this[t].apply(this, e)
                }
                ;
                return this.prototype._initHooks = this.prototype._initHooks || [],
                this.prototype._initHooks.push(i),
                this
            }
            ;
            var P = {
                on: function(t, e, i) {
                    if ("object" == typeof t)
                        for (var n in t)
                            this._on(n, t[n], e);
                    else
                        for (var o = 0, s = (t = d(t)).length; o < s; o++)
                            this._on(t[o], e, i);
                    return this
                },
                off: function(t, e, i) {
                    if (t)
                        if ("object" == typeof t)
                            for (var n in t)
                                this._off(n, t[n], e);
                        else
                            for (var o = 0, s = (t = d(t)).length; o < s; o++)
                                this._off(t[o], e, i);
                    else
                        delete this._events;
                    return this
                },
                _on: function(t, e, i) {
                    this._events = this._events || {};
                    var n = this._events[t];
                    n || (n = [],
                    this._events[t] = n),
                    i === this && (i = void 0);
                    for (var o = {
                        fn: e,
                        ctx: i
                    }, s = n, r = 0, a = s.length; r < a; r++)
                        if (s[r].fn === e && s[r].ctx === i)
                            return;
                    s.push(o)
                },
                _off: function(t, e, i) {
                    var n, o, s;
                    if (this._events && (n = this._events[t]))
                        if (e) {
                            if (i === this && (i = void 0),
                            n)
                                for (o = 0,
                                s = n.length; o < s; o++) {
                                    var r = n[o];
                                    if (r.ctx === i && r.fn === e)
                                        return r.fn = h,
                                        this._firingCount && (this._events[t] = n = n.slice()),
                                        void n.splice(o, 1)
                                }
                        } else {
                            for (o = 0,
                            s = n.length; o < s; o++)
                                n[o].fn = h;
                            delete this._events[t]
                        }
                },
                fire: function(t, e, n) {
                    if (!this.listens(t, n))
                        return this;
                    var o = i({}, e, {
                        type: t,
                        target: this,
                        sourceTarget: e && e.sourceTarget || this
                    });
                    if (this._events) {
                        var s = this._events[t];
                        if (s) {
                            this._firingCount = this._firingCount + 1 || 1;
                            for (var r = 0, a = s.length; r < a; r++) {
                                var l = s[r];
                                l.fn.call(l.ctx || this, o)
                            }
                            this._firingCount--
                        }
                    }
                    return n && this._propagateEvent(o),
                    this
                },
                listens: function(t, e) {
                    var i = this._events && this._events[t];
                    if (i && i.length)
                        return !0;
                    if (e)
                        for (var n in this._eventParents)
                            if (this._eventParents[n].listens(t, e))
                                return !0;
                    return !1
                },
                once: function(t, e, i) {
                    if ("object" == typeof t) {
                        for (var n in t)
                            this.once(n, t[n], e);
                        return this
                    }
                    var s = o(function() {
                        this.off(t, e, i).off(t, s, i)
                    }, this);
                    return this.on(t, e, i).on(t, s, i)
                },
                addEventParent: function(t) {
                    return this._eventParents = this._eventParents || {},
                    this._eventParents[r(t)] = t,
                    this
                },
                removeEventParent: function(t) {
                    return this._eventParents && delete this._eventParents[r(t)],
                    this
                },
                _propagateEvent: function(t) {
                    for (var e in this._eventParents)
                        this._eventParents[e].fire(t.type, i({
                            layer: t.target,
                            propagatedFrom: t.target
                        }, t), !0)
                }
            };
            P.addEventListener = P.on,
            P.removeEventListener = P.clearAllEventListeners = P.off,
            P.addOneTimeEventListener = P.once,
            P.fireEvent = P.fire,
            P.hasEventListeners = P.listens;
            var S = D.extend(P);
            function O(t, e, i) {
                this.x = i ? Math.round(t) : t,
                this.y = i ? Math.round(e) : e
            }
            var I = Math.trunc || function(t) {
                return t > 0 ? Math.floor(t) : Math.ceil(t)
            }
            ;
            function B(t, e, i) {
                return t instanceof O ? t : v(t) ? new O(t[0],t[1]) : void 0 === t || null === t ? t : "object" == typeof t && "x"in t && "y"in t ? new O(t.x,t.y) : new O(t,e,i)
            }
            function A(t, e) {
                if (t)
                    for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                        this.extend(i[n])
            }
            function z(t, e) {
                return !t || t instanceof A ? t : new A(t,e)
            }
            function R(t, e) {
                if (t)
                    for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                        this.extend(i[n])
            }
            function H(t, e) {
                return t instanceof R ? t : new R(t,e)
            }
            function j(t, e, i) {
                if (isNaN(t) || isNaN(e))
                    throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                this.lat = +t,
                this.lng = +e,
                void 0 !== i && (this.alt = +i)
            }
            function N(t, e, i) {
                return t instanceof j ? t : v(t) && "object" != typeof t[0] ? 3 === t.length ? new j(t[0],t[1],t[2]) : 2 === t.length ? new j(t[0],t[1]) : null : void 0 === t || null === t ? t : "object" == typeof t && "lat"in t ? new j(t.lat,"lng"in t ? t.lng : t.lon,t.alt) : void 0 === e ? null : new j(t,e,i)
            }
            O.prototype = {
                clone: function() {
                    return new O(this.x,this.y)
                },
                add: function(t) {
                    return this.clone()._add(B(t))
                },
                _add: function(t) {
                    return this.x += t.x,
                    this.y += t.y,
                    this
                },
                subtract: function(t) {
                    return this.clone()._subtract(B(t))
                },
                _subtract: function(t) {
                    return this.x -= t.x,
                    this.y -= t.y,
                    this
                },
                divideBy: function(t) {
                    return this.clone()._divideBy(t)
                },
                _divideBy: function(t) {
                    return this.x /= t,
                    this.y /= t,
                    this
                },
                multiplyBy: function(t) {
                    return this.clone()._multiplyBy(t)
                },
                _multiplyBy: function(t) {
                    return this.x *= t,
                    this.y *= t,
                    this
                },
                scaleBy: function(t) {
                    return new O(this.x * t.x,this.y * t.y)
                },
                unscaleBy: function(t) {
                    return new O(this.x / t.x,this.y / t.y)
                },
                round: function() {
                    return this.clone()._round()
                },
                _round: function() {
                    return this.x = Math.round(this.x),
                    this.y = Math.round(this.y),
                    this
                },
                floor: function() {
                    return this.clone()._floor()
                },
                _floor: function() {
                    return this.x = Math.floor(this.x),
                    this.y = Math.floor(this.y),
                    this
                },
                ceil: function() {
                    return this.clone()._ceil()
                },
                _ceil: function() {
                    return this.x = Math.ceil(this.x),
                    this.y = Math.ceil(this.y),
                    this
                },
                trunc: function() {
                    return this.clone()._trunc()
                },
                _trunc: function() {
                    return this.x = I(this.x),
                    this.y = I(this.y),
                    this
                },
                distanceTo: function(t) {
                    var e = (t = B(t)).x - this.x
                      , i = t.y - this.y;
                    return Math.sqrt(e * e + i * i)
                },
                equals: function(t) {
                    return (t = B(t)).x === this.x && t.y === this.y
                },
                contains: function(t) {
                    return t = B(t),
                    Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
                },
                toString: function() {
                    return "Point(" + u(this.x) + ", " + u(this.y) + ")"
                }
            },
            A.prototype = {
                extend: function(t) {
                    return t = B(t),
                    this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x),
                    this.max.x = Math.max(t.x, this.max.x),
                    this.min.y = Math.min(t.y, this.min.y),
                    this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(),
                    this.max = t.clone()),
                    this
                },
                getCenter: function(t) {
                    return new O((this.min.x + this.max.x) / 2,(this.min.y + this.max.y) / 2,t)
                },
                getBottomLeft: function() {
                    return new O(this.min.x,this.max.y)
                },
                getTopRight: function() {
                    return new O(this.max.x,this.min.y)
                },
                getTopLeft: function() {
                    return this.min
                },
                getBottomRight: function() {
                    return this.max
                },
                getSize: function() {
                    return this.max.subtract(this.min)
                },
                contains: function(t) {
                    var e, i;
                    return (t = "number" == typeof t[0] || t instanceof O ? B(t) : z(t))instanceof A ? (e = t.min,
                    i = t.max) : e = i = t,
                    e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                },
                intersects: function(t) {
                    t = z(t);
                    var e = this.min
                      , i = this.max
                      , n = t.min
                      , o = t.max
                      , s = o.x >= e.x && n.x <= i.x
                      , r = o.y >= e.y && n.y <= i.y;
                    return s && r
                },
                overlaps: function(t) {
                    t = z(t);
                    var e = this.min
                      , i = this.max
                      , n = t.min
                      , o = t.max
                      , s = o.x > e.x && n.x < i.x
                      , r = o.y > e.y && n.y < i.y;
                    return s && r
                },
                isValid: function() {
                    return !(!this.min || !this.max)
                }
            },
            R.prototype = {
                extend: function(t) {
                    var e, i, n = this._southWest, o = this._northEast;
                    if (t instanceof j)
                        e = t,
                        i = t;
                    else {
                        if (!(t instanceof R))
                            return t ? this.extend(N(t) || H(t)) : this;
                        if (e = t._southWest,
                        i = t._northEast,
                        !e || !i)
                            return this
                    }
                    return n || o ? (n.lat = Math.min(e.lat, n.lat),
                    n.lng = Math.min(e.lng, n.lng),
                    o.lat = Math.max(i.lat, o.lat),
                    o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new j(e.lat,e.lng),
                    this._northEast = new j(i.lat,i.lng)),
                    this
                },
                pad: function(t) {
                    var e = this._southWest
                      , i = this._northEast
                      , n = Math.abs(e.lat - i.lat) * t
                      , o = Math.abs(e.lng - i.lng) * t;
                    return new R(new j(e.lat - n,e.lng - o),new j(i.lat + n,i.lng + o))
                },
                getCenter: function() {
                    return new j((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2)
                },
                getSouthWest: function() {
                    return this._southWest
                },
                getNorthEast: function() {
                    return this._northEast
                },
                getNorthWest: function() {
                    return new j(this.getNorth(),this.getWest())
                },
                getSouthEast: function() {
                    return new j(this.getSouth(),this.getEast())
                },
                getWest: function() {
                    return this._southWest.lng
                },
                getSouth: function() {
                    return this._southWest.lat
                },
                getEast: function() {
                    return this._northEast.lng
                },
                getNorth: function() {
                    return this._northEast.lat
                },
                contains: function(t) {
                    t = "number" == typeof t[0] || t instanceof j || "lat"in t ? N(t) : H(t);
                    var e, i, n = this._southWest, o = this._northEast;
                    return t instanceof R ? (e = t.getSouthWest(),
                    i = t.getNorthEast()) : e = i = t,
                    e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
                },
                intersects: function(t) {
                    t = H(t);
                    var e = this._southWest
                      , i = this._northEast
                      , n = t.getSouthWest()
                      , o = t.getNorthEast()
                      , s = o.lat >= e.lat && n.lat <= i.lat
                      , r = o.lng >= e.lng && n.lng <= i.lng;
                    return s && r
                },
                overlaps: function(t) {
                    t = H(t);
                    var e = this._southWest
                      , i = this._northEast
                      , n = t.getSouthWest()
                      , o = t.getNorthEast()
                      , s = o.lat > e.lat && n.lat < i.lat
                      , r = o.lng > e.lng && n.lng < i.lng;
                    return s && r
                },
                toBBoxString: function() {
                    return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
                },
                equals: function(t, e) {
                    return !!t && (t = H(t),
                    this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
                },
                isValid: function() {
                    return !(!this._southWest || !this._northEast)
                }
            },
            j.prototype = {
                equals: function(t, e) {
                    if (!t)
                        return !1;
                    t = N(t);
                    var i = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                    return i <= (void 0 === e ? 1e-9 : e)
                },
                toString: function(t) {
                    return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")"
                },
                distanceTo: function(t) {
                    return W.distance(this, N(t))
                },
                wrap: function() {
                    return W.wrapLatLng(this)
                },
                toBounds: function(t) {
                    var e = 180 * t / 40075017
                      , i = e / Math.cos(Math.PI / 180 * this.lat);
                    return H([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
                },
                clone: function() {
                    return new j(this.lat,this.lng,this.alt)
                }
            };
            var $ = {
                latLngToPoint: function(t, e) {
                    var i = this.projection.project(t)
                      , n = this.scale(e);
                    return this.transformation._transform(i, n)
                },
                pointToLatLng: function(t, e) {
                    var i = this.scale(e)
                      , n = this.transformation.untransform(t, i);
                    return this.projection.unproject(n)
                },
                project: function(t) {
                    return this.projection.project(t)
                },
                unproject: function(t) {
                    return this.projection.unproject(t)
                },
                scale: function(t) {
                    return 256 * Math.pow(2, t)
                },
                zoom: function(t) {
                    return Math.log(t / 256) / Math.LN2
                },
                getProjectedBounds: function(t) {
                    if (this.infinite)
                        return null;
                    var e = this.projection.bounds
                      , i = this.scale(t)
                      , n = this.transformation.transform(e.min, i)
                      , o = this.transformation.transform(e.max, i);
                    return new A(n,o)
                },
                infinite: !1,
                wrapLatLng: function(t) {
                    var e = this.wrapLng ? l(t.lng, this.wrapLng, !0) : t.lng
                      , i = this.wrapLat ? l(t.lat, this.wrapLat, !0) : t.lat
                      , n = t.alt;
                    return new j(i,e,n)
                },
                wrapLatLngBounds: function(t) {
                    var e = t.getCenter()
                      , i = this.wrapLatLng(e)
                      , n = e.lat - i.lat
                      , o = e.lng - i.lng;
                    if (0 === n && 0 === o)
                        return t;
                    var s = t.getSouthWest()
                      , r = t.getNorthEast()
                      , a = new j(s.lat - n,s.lng - o)
                      , l = new j(r.lat - n,r.lng - o);
                    return new R(a,l)
                }
            }
              , W = i({}, $, {
                wrapLng: [-180, 180],
                R: 6371e3,
                distance: function(t, e) {
                    var i = Math.PI / 180
                      , n = t.lat * i
                      , o = e.lat * i
                      , s = Math.sin((e.lat - t.lat) * i / 2)
                      , r = Math.sin((e.lng - t.lng) * i / 2)
                      , a = s * s + Math.cos(n) * Math.cos(o) * r * r
                      , l = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    return this.R * l
                }
            })
              , F = {
                R: 6378137,
                MAX_LATITUDE: 85.0511287798,
                project: function(t) {
                    var e = Math.PI / 180
                      , i = this.MAX_LATITUDE
                      , n = Math.max(Math.min(i, t.lat), -i)
                      , o = Math.sin(n * e);
                    return new O(this.R * t.lng * e,this.R * Math.log((1 + o) / (1 - o)) / 2)
                },
                unproject: function(t) {
                    var e = 180 / Math.PI;
                    return new j((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,t.x * e / this.R)
                },
                bounds: function() {
                    var t = 6378137 * Math.PI;
                    return new A([-t, -t],[t, t])
                }()
            };
            function Z(t, e, i, n) {
                if (v(t))
                    return this._a = t[0],
                    this._b = t[1],
                    this._c = t[2],
                    void (this._d = t[3]);
                this._a = t,
                this._b = e,
                this._c = i,
                this._d = n
            }
            function q(t, e, i, n) {
                return new Z(t,e,i,n)
            }
            Z.prototype = {
                transform: function(t, e) {
                    return this._transform(t.clone(), e)
                },
                _transform: function(t, e) {
                    return e = e || 1,
                    t.x = e * (this._a * t.x + this._b),
                    t.y = e * (this._c * t.y + this._d),
                    t
                },
                untransform: function(t, e) {
                    return e = e || 1,
                    new O((t.x / e - this._b) / this._a,(t.y / e - this._d) / this._c)
                }
            };
            var U = i({}, W, {
                code: "EPSG:3857",
                projection: F,
                transformation: function() {
                    var t = .5 / (Math.PI * F.R);
                    return q(t, .5, -t, .5)
                }()
            })
              , V = i({}, U, {
                code: "EPSG:900913"
            });
            function G(t) {
                return document.createElementNS("http://www.w3.org/2000/svg", t)
            }
            function Y(t, e) {
                var i, n, o, s, r, a, l = "";
                for (i = 0,
                o = t.length; i < o; i++) {
                    for (r = t[i],
                    n = 0,
                    s = r.length; n < s; n++)
                        a = r[n],
                        l += (n ? "L" : "M") + a.x + " " + a.y;
                    l += e ? Et ? "z" : "x" : ""
                }
                return l || "M0 0"
            }
            var X = document.documentElement.style
              , K = "ActiveXObject"in window
              , Q = K && !document.addEventListener
              , J = "msLaunchUri"in navigator && !("documentMode"in document)
              , tt = Mt("webkit")
              , et = Mt("android")
              , it = Mt("android 2") || Mt("android 3")
              , nt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10)
              , ot = et && Mt("Google") && nt < 537 && !("AudioNode"in window)
              , st = !!window.opera
              , rt = Mt("chrome")
              , at = Mt("gecko") && !tt && !st && !K
              , lt = !rt && Mt("safari")
              , ht = Mt("phantom")
              , ut = "OTransition"in X
              , ct = 0 === navigator.platform.indexOf("Win")
              , dt = K && "transition"in X
              , pt = "WebKitCSSMatrix"in window && "m11"in new window.WebKitCSSMatrix && !it
              , ft = "MozPerspective"in X
              , mt = !window.L_DISABLE_3D && (dt || pt || ft) && !ut && !ht
              , _t = "undefined" != typeof orientation || Mt("mobile")
              , vt = _t && tt
              , gt = _t && pt
              , yt = !window.PointerEvent && window.MSPointerEvent
              , bt = !(!window.PointerEvent && !yt)
              , wt = !window.L_NO_TOUCH && (bt || "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch)
              , Lt = _t && st
              , xt = _t && at
              , kt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1
              , Ct = function() {
                return !!document.createElement("canvas").getContext
            }()
              , Et = !(!document.createElementNS || !G("svg").createSVGRect)
              , Tt = !Et && function() {
                try {
                    var t = document.createElement("div");
                    t.innerHTML = '<v:shape adj="1"/>';
                    var e = t.firstChild;
                    return e.style.behavior = "url(#default#VML)",
                    e && "object" == typeof e.adj
                } catch (t) {
                    return !1
                }
            }();
            function Mt(t) {
                return navigator.userAgent.toLowerCase().indexOf(t) >= 0
            }
            var Dt = (Object.freeze || Object)({
                ie: K,
                ielt9: Q,
                edge: J,
                webkit: tt,
                android: et,
                android23: it,
                androidStock: ot,
                opera: st,
                chrome: rt,
                gecko: at,
                safari: lt,
                phantom: ht,
                opera12: ut,
                win: ct,
                ie3d: dt,
                webkit3d: pt,
                gecko3d: ft,
                any3d: mt,
                mobile: _t,
                mobileWebkit: vt,
                mobileWebkit3d: gt,
                msPointer: yt,
                pointer: bt,
                touch: wt,
                mobileOpera: Lt,
                mobileGecko: xt,
                retina: kt,
                canvas: Ct,
                svg: Et,
                vml: Tt
            })
              , Pt = yt ? "MSPointerDown" : "pointerdown"
              , St = yt ? "MSPointerMove" : "pointermove"
              , Ot = yt ? "MSPointerUp" : "pointerup"
              , It = yt ? "MSPointerCancel" : "pointercancel"
              , Bt = ["INPUT", "SELECT", "OPTION"]
              , At = {}
              , zt = !1
              , Rt = 0;
            function Ht(t, e, i, n) {
                return "touchstart" === e ? function(t, e, i) {
                    var n = o(function(t) {
                        if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                            if (!(Bt.indexOf(t.target.tagName) < 0))
                                return;
                            Ae(t)
                        }
                        Wt(t, e)
                    });
                    t["_leaflet_touchstart" + i] = n,
                    t.addEventListener(Pt, n, !1),
                    zt || (document.documentElement.addEventListener(Pt, jt, !0),
                    document.documentElement.addEventListener(St, Nt, !0),
                    document.documentElement.addEventListener(Ot, $t, !0),
                    document.documentElement.addEventListener(It, $t, !0),
                    zt = !0)
                }(t, i, n) : "touchmove" === e ? function(t, e, i) {
                    var n = function(t) {
                        (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && Wt(t, e)
                    };
                    t["_leaflet_touchmove" + i] = n,
                    t.addEventListener(St, n, !1)
                }(t, i, n) : "touchend" === e && function(t, e, i) {
                    var n = function(t) {
                        Wt(t, e)
                    };
                    t["_leaflet_touchend" + i] = n,
                    t.addEventListener(Ot, n, !1),
                    t.addEventListener(It, n, !1)
                }(t, i, n),
                this
            }
            function jt(t) {
                At[t.pointerId] = t,
                Rt++
            }
            function Nt(t) {
                At[t.pointerId] && (At[t.pointerId] = t)
            }
            function $t(t) {
                delete At[t.pointerId],
                Rt--
            }
            function Wt(t, e) {
                for (var i in t.touches = [],
                At)
                    t.touches.push(At[i]);
                t.changedTouches = [t],
                e(t)
            }
            var Ft = yt ? "MSPointerDown" : bt ? "pointerdown" : "touchstart"
              , Zt = yt ? "MSPointerUp" : bt ? "pointerup" : "touchend"
              , qt = "_leaflet_";
            function Ut(t, e, i) {
                var n, o, s = !1, r = 250;
                function a(t) {
                    var e;
                    if (bt) {
                        if (!J || "mouse" === t.pointerType)
                            return;
                        e = Rt
                    } else
                        e = t.touches.length;
                    if (!(e > 1)) {
                        var i = Date.now()
                          , a = i - (n || i);
                        o = t.touches ? t.touches[0] : t,
                        s = a > 0 && a <= r,
                        n = i
                    }
                }
                function l(t) {
                    if (s && !o.cancelBubble) {
                        if (bt) {
                            if (!J || "mouse" === t.pointerType)
                                return;
                            var i, r, a = {};
                            for (r in o)
                                i = o[r],
                                a[r] = i && i.bind ? i.bind(o) : i;
                            o = a
                        }
                        o.type = "dblclick",
                        e(o),
                        n = null
                    }
                }
                return t[qt + Ft + i] = a,
                t[qt + Zt + i] = l,
                t[qt + "dblclick" + i] = e,
                t.addEventListener(Ft, a, !1),
                t.addEventListener(Zt, l, !1),
                t.addEventListener("dblclick", e, !1),
                this
            }
            function Vt(t, e) {
                var i = t[qt + Ft + e]
                  , n = t[qt + Zt + e]
                  , o = t[qt + "dblclick" + e];
                return t.removeEventListener(Ft, i, !1),
                t.removeEventListener(Zt, n, !1),
                J || t.removeEventListener("dblclick", o, !1),
                this
            }
            var Gt, Yt, Xt, Kt, Qt, Jt = me(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), te = me(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), ee = "webkitTransition" === te || "OTransition" === te ? te + "End" : "transitionend";
            function ie(t) {
                return "string" == typeof t ? document.getElementById(t) : t
            }
            function ne(t, e) {
                var i = t.style[e] || t.currentStyle && t.currentStyle[e];
                if ((!i || "auto" === i) && document.defaultView) {
                    var n = document.defaultView.getComputedStyle(t, null);
                    i = n ? n[e] : null
                }
                return "auto" === i ? null : i
            }
            function oe(t, e, i) {
                var n = document.createElement(t);
                return n.className = e || "",
                i && i.appendChild(n),
                n
            }
            function se(t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            }
            function re(t) {
                for (; t.firstChild; )
                    t.removeChild(t.firstChild)
            }
            function ae(t) {
                var e = t.parentNode;
                e && e.lastChild !== t && e.appendChild(t)
            }
            function le(t) {
                var e = t.parentNode;
                e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
            }
            function he(t, e) {
                if (void 0 !== t.classList)
                    return t.classList.contains(e);
                var i = pe(t);
                return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
            }
            function ue(t, e) {
                if (void 0 !== t.classList)
                    for (var i = d(e), n = 0, o = i.length; n < o; n++)
                        t.classList.add(i[n]);
                else if (!he(t, e)) {
                    var s = pe(t);
                    de(t, (s ? s + " " : "") + e)
                }
            }
            function ce(t, e) {
                void 0 !== t.classList ? t.classList.remove(e) : de(t, c((" " + pe(t) + " ").replace(" " + e + " ", " ")))
            }
            function de(t, e) {
                void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
            }
            function pe(t) {
                return t.correspondingElement && (t = t.correspondingElement),
                void 0 === t.className.baseVal ? t.className : t.className.baseVal
            }
            function fe(t, e) {
                "opacity"in t.style ? t.style.opacity = e : "filter"in t.style && function(t, e) {
                    var i = !1
                      , n = "DXImageTransform.Microsoft.Alpha";
                    try {
                        i = t.filters.item(n)
                    } catch (t) {
                        if (1 === e)
                            return
                    }
                    e = Math.round(100 * e),
                    i ? (i.Enabled = 100 !== e,
                    i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
                }(t, e)
            }
            function me(t) {
                for (var e = document.documentElement.style, i = 0; i < t.length; i++)
                    if (t[i]in e)
                        return t[i];
                return !1
            }
            function _e(t, e, i) {
                var n = e || new O(0,0);
                t.style[Jt] = (dt ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
            }
            function ve(t, e) {
                t._leaflet_pos = e,
                mt ? _e(t, e) : (t.style.left = e.x + "px",
                t.style.top = e.y + "px")
            }
            function ge(t) {
                return t._leaflet_pos || new O(0,0)
            }
            if ("onselectstart"in document)
                Gt = function() {
                    Te(window, "selectstart", Ae)
                }
                ,
                Yt = function() {
                    De(window, "selectstart", Ae)
                }
                ;
            else {
                var ye = me(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                Gt = function() {
                    if (ye) {
                        var t = document.documentElement.style;
                        Xt = t[ye],
                        t[ye] = "none"
                    }
                }
                ,
                Yt = function() {
                    ye && (document.documentElement.style[ye] = Xt,
                    Xt = void 0)
                }
            }
            function be() {
                Te(window, "dragstart", Ae)
            }
            function we() {
                De(window, "dragstart", Ae)
            }
            function Le(t) {
                for (; -1 === t.tabIndex; )
                    t = t.parentNode;
                t.style && (xe(),
                Kt = t,
                Qt = t.style.outline,
                t.style.outline = "none",
                Te(window, "keydown", xe))
            }
            function xe() {
                Kt && (Kt.style.outline = Qt,
                Kt = void 0,
                Qt = void 0,
                De(window, "keydown", xe))
            }
            function ke(t) {
                do {
                    t = t.parentNode
                } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
                return t
            }
            function Ce(t) {
                var e = t.getBoundingClientRect();
                return {
                    x: e.width / t.offsetWidth || 1,
                    y: e.height / t.offsetHeight || 1,
                    boundingClientRect: e
                }
            }
            var Ee = (Object.freeze || Object)({
                TRANSFORM: Jt,
                TRANSITION: te,
                TRANSITION_END: ee,
                get: ie,
                getStyle: ne,
                create: oe,
                remove: se,
                empty: re,
                toFront: ae,
                toBack: le,
                hasClass: he,
                addClass: ue,
                removeClass: ce,
                setClass: de,
                getClass: pe,
                setOpacity: fe,
                testProp: me,
                setTransform: _e,
                setPosition: ve,
                getPosition: ge,
                disableTextSelection: Gt,
                enableTextSelection: Yt,
                disableImageDrag: be,
                enableImageDrag: we,
                preventOutline: Le,
                restoreOutline: xe,
                getSizedParentNode: ke,
                getScale: Ce
            });
            function Te(t, e, i, n) {
                if ("object" == typeof e)
                    for (var o in e)
                        Pe(t, o, e[o], i);
                else
                    for (var s = 0, r = (e = d(e)).length; s < r; s++)
                        Pe(t, e[s], i, n);
                return this
            }
            var Me = "_leaflet_events";
            function De(t, e, i, n) {
                if ("object" == typeof e)
                    for (var o in e)
                        Se(t, o, e[o], i);
                else if (e)
                    for (var s = 0, r = (e = d(e)).length; s < r; s++)
                        Se(t, e[s], i, n);
                else {
                    for (var a in t[Me])
                        Se(t, a, t[Me][a]);
                    delete t[Me]
                }
                return this
            }
            function Pe(t, e, i, n) {
                var o = e + r(i) + (n ? "_" + r(n) : "");
                if (t[Me] && t[Me][o])
                    return this;
                var s = function(e) {
                    return i.call(n || t, e || window.event)
                }
                  , a = s;
                bt && 0 === e.indexOf("touch") ? Ht(t, e, s, o) : !wt || "dblclick" !== e || !Ut || bt && rt ? "addEventListener"in t ? "mousewheel" === e ? t.addEventListener("onwheel"in t ? "wheel" : "mousewheel", s, !1) : "mouseenter" === e || "mouseleave" === e ? (s = function(e) {
                    e = e || window.event,
                    Ze(t, e) && a(e)
                }
                ,
                t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", s, !1)) : ("click" === e && et && (s = function(t) {
                    !function(t, e) {
                        var i = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp
                          , n = Ne && i - Ne;
                        if (n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated)
                            return void ze(t);
                        Ne = i,
                        e(t)
                    }(t, a)
                }
                ),
                t.addEventListener(e, s, !1)) : "attachEvent"in t && t.attachEvent("on" + e, s) : Ut(t, s, o),
                t[Me] = t[Me] || {},
                t[Me][o] = s
            }
            function Se(t, e, i, n) {
                var o = e + r(i) + (n ? "_" + r(n) : "")
                  , s = t[Me] && t[Me][o];
                if (!s)
                    return this;
                bt && 0 === e.indexOf("touch") ? function(t, e, i) {
                    var n = t["_leaflet_" + e + i];
                    "touchstart" === e ? t.removeEventListener(Pt, n, !1) : "touchmove" === e ? t.removeEventListener(St, n, !1) : "touchend" === e && (t.removeEventListener(Ot, n, !1),
                    t.removeEventListener(It, n, !1))
                }(t, e, o) : !wt || "dblclick" !== e || !Vt || bt && rt ? "removeEventListener"in t ? "mousewheel" === e ? t.removeEventListener("onwheel"in t ? "wheel" : "mousewheel", s, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, s, !1) : "detachEvent"in t && t.detachEvent("on" + e, s) : Vt(t, o),
                t[Me][o] = null
            }
            function Oe(t) {
                return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
                Fe(t),
                this
            }
            function Ie(t) {
                return Pe(t, "mousewheel", Oe),
                this
            }
            function Be(t) {
                return Te(t, "mousedown touchstart dblclick", Oe),
                Pe(t, "click", We),
                this
            }
            function Ae(t) {
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
                this
            }
            function ze(t) {
                return Ae(t),
                Oe(t),
                this
            }
            function Re(t, e) {
                if (!e)
                    return new O(t.clientX,t.clientY);
                var i = Ce(e)
                  , n = i.boundingClientRect;
                return new O((t.clientX - n.left) / i.x - e.clientLeft,(t.clientY - n.top) / i.y - e.clientTop)
            }
            var He = ct && rt ? 2 * window.devicePixelRatio : at ? window.devicePixelRatio : 1;
            function je(t) {
                return J ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / He : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
            }
            var Ne, $e = {};
            function We(t) {
                $e[t.type] = !0
            }
            function Fe(t) {
                var e = $e[t.type];
                return $e[t.type] = !1,
                e
            }
            function Ze(t, e) {
                var i = e.relatedTarget;
                if (!i)
                    return !0;
                try {
                    for (; i && i !== t; )
                        i = i.parentNode
                } catch (t) {
                    return !1
                }
                return i !== t
            }
            var qe = (Object.freeze || Object)({
                on: Te,
                off: De,
                stopPropagation: Oe,
                disableScrollPropagation: Ie,
                disableClickPropagation: Be,
                preventDefault: Ae,
                stop: ze,
                getMousePosition: Re,
                getWheelDelta: je,
                fakeStop: We,
                skipped: Fe,
                isExternalTarget: Ze,
                addListener: Te,
                removeListener: De
            })
              , Ue = S.extend({
                run: function(t, e, i, n) {
                    this.stop(),
                    this._el = t,
                    this._inProgress = !0,
                    this._duration = i || .25,
                    this._easeOutPower = 1 / Math.max(n || .5, .2),
                    this._startPos = ge(t),
                    this._offset = e.subtract(this._startPos),
                    this._startTime = +new Date,
                    this.fire("start"),
                    this._animate()
                },
                stop: function() {
                    this._inProgress && (this._step(!0),
                    this._complete())
                },
                _animate: function() {
                    this._animId = E(this._animate, this),
                    this._step()
                },
                _step: function(t) {
                    var e = +new Date - this._startTime
                      , i = 1e3 * this._duration;
                    e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1),
                    this._complete())
                },
                _runFrame: function(t, e) {
                    var i = this._startPos.add(this._offset.multiplyBy(t));
                    e && i._round(),
                    ve(this._el, i),
                    this.fire("step")
                },
                _complete: function() {
                    T(this._animId),
                    this._inProgress = !1,
                    this.fire("end")
                },
                _easeOut: function(t) {
                    return 1 - Math.pow(1 - t, this._easeOutPower)
                }
            })
              , Ve = S.extend({
                options: {
                    crs: U,
                    center: void 0,
                    zoom: void 0,
                    minZoom: void 0,
                    maxZoom: void 0,
                    layers: [],
                    maxBounds: void 0,
                    renderer: void 0,
                    zoomAnimation: !0,
                    zoomAnimationThreshold: 4,
                    fadeAnimation: !0,
                    markerZoomAnimation: !0,
                    transform3DLimit: 8388608,
                    zoomSnap: 1,
                    zoomDelta: 1,
                    trackResize: !0
                },
                initialize: function(t, e) {
                    e = p(this, e),
                    this._handlers = [],
                    this._layers = {},
                    this._zoomBoundLayers = {},
                    this._sizeChanged = !0,
                    this._initContainer(t),
                    this._initLayout(),
                    this._onResize = o(this._onResize, this),
                    this._initEvents(),
                    e.maxBounds && this.setMaxBounds(e.maxBounds),
                    void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                    e.center && void 0 !== e.zoom && this.setView(N(e.center), e.zoom, {
                        reset: !0
                    }),
                    this.callInitHooks(),
                    this._zoomAnimated = te && mt && !Lt && this.options.zoomAnimation,
                    this._zoomAnimated && (this._createAnimProxy(),
                    Te(this._proxy, ee, this._catchTransitionEnd, this)),
                    this._addLayers(this.options.layers)
                },
                setView: function(t, e, n) {
                    if (e = void 0 === e ? this._zoom : this._limitZoom(e),
                    t = this._limitCenter(N(t), e, this.options.maxBounds),
                    n = n || {},
                    this._stop(),
                    this._loaded && !n.reset && !0 !== n) {
                        void 0 !== n.animate && (n.zoom = i({
                            animate: n.animate
                        }, n.zoom),
                        n.pan = i({
                            animate: n.animate,
                            duration: n.duration
                        }, n.pan));
                        var o = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan);
                        if (o)
                            return clearTimeout(this._sizeTimer),
                            this
                    }
                    return this._resetView(t, e),
                    this
                },
                setZoom: function(t, e) {
                    return this._loaded ? this.setView(this.getCenter(), t, {
                        zoom: e
                    }) : (this._zoom = t,
                    this)
                },
                zoomIn: function(t, e) {
                    return t = t || (mt ? this.options.zoomDelta : 1),
                    this.setZoom(this._zoom + t, e)
                },
                zoomOut: function(t, e) {
                    return t = t || (mt ? this.options.zoomDelta : 1),
                    this.setZoom(this._zoom - t, e)
                },
                setZoomAround: function(t, e, i) {
                    var n = this.getZoomScale(e)
                      , o = this.getSize().divideBy(2)
                      , s = t instanceof O ? t : this.latLngToContainerPoint(t)
                      , r = s.subtract(o).multiplyBy(1 - 1 / n)
                      , a = this.containerPointToLatLng(o.add(r));
                    return this.setView(a, e, {
                        zoom: i
                    })
                },
                _getBoundsCenterZoom: function(t, e) {
                    e = e || {},
                    t = t.getBounds ? t.getBounds() : H(t);
                    var i = B(e.paddingTopLeft || e.padding || [0, 0])
                      , n = B(e.paddingBottomRight || e.padding || [0, 0])
                      , o = this.getBoundsZoom(t, !1, i.add(n));
                    if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0)
                        return {
                            center: t.getCenter(),
                            zoom: o
                        };
                    var s = n.subtract(i).divideBy(2)
                      , r = this.project(t.getSouthWest(), o)
                      , a = this.project(t.getNorthEast(), o)
                      , l = this.unproject(r.add(a).divideBy(2).add(s), o);
                    return {
                        center: l,
                        zoom: o
                    }
                },
                fitBounds: function(t, e) {
                    if (!(t = H(t)).isValid())
                        throw new Error("Bounds are not valid.");
                    var i = this._getBoundsCenterZoom(t, e);
                    return this.setView(i.center, i.zoom, e)
                },
                fitWorld: function(t) {
                    return this.fitBounds([[-90, -180], [90, 180]], t)
                },
                panTo: function(t, e) {
                    return this.setView(t, this._zoom, {
                        pan: e
                    })
                },
                panBy: function(t, e) {
                    if (t = B(t).round(),
                    e = e || {},
                    !t.x && !t.y)
                        return this.fire("moveend");
                    if (!0 !== e.animate && !this.getSize().contains(t))
                        return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
                        this;
                    if (this._panAnim || (this._panAnim = new Ue,
                    this._panAnim.on({
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd
                    }, this)),
                    e.noMoveStart || this.fire("movestart"),
                    !1 !== e.animate) {
                        ue(this._mapPane, "leaflet-pan-anim");
                        var i = this._getMapPanePos().subtract(t).round();
                        this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                    } else
                        this._rawPanBy(t),
                        this.fire("move").fire("moveend");
                    return this
                },
                flyTo: function(t, e, i) {
                    if (!1 === (i = i || {}).animate || !mt)
                        return this.setView(t, e, i);
                    this._stop();
                    var n = this.project(this.getCenter())
                      , o = this.project(t)
                      , s = this.getSize()
                      , r = this._zoom;
                    t = N(t),
                    e = void 0 === e ? r : e;
                    var a = Math.max(s.x, s.y)
                      , l = a * this.getZoomScale(r, e)
                      , h = o.distanceTo(n) || 1
                      , u = 1.42
                      , c = u * u;
                    function d(t) {
                        var e = t ? -1 : 1
                          , i = t ? l : a
                          , n = l * l - a * a + e * c * c * h * h
                          , o = 2 * i * c * h
                          , s = n / o
                          , r = Math.sqrt(s * s + 1) - s
                          , u = r < 1e-9 ? -18 : Math.log(r);
                        return u
                    }
                    function p(t) {
                        return (Math.exp(t) - Math.exp(-t)) / 2
                    }
                    function f(t) {
                        return (Math.exp(t) + Math.exp(-t)) / 2
                    }
                    var m = d(0);
                    function _(t) {
                        return a * (f(m) * function(t) {
                            return p(t) / f(t)
                        }(m + u * t) - p(m)) / c
                    }
                    var v = Date.now()
                      , g = (d(1) - m) / u
                      , y = i.duration ? 1e3 * i.duration : 1e3 * g * .8;
                    return this._moveStart(!0, i.noMoveStart),
                    function i() {
                        var s = (Date.now() - v) / y
                          , l = function(t) {
                            return 1 - Math.pow(1 - t, 1.5)
                        }(s) * g;
                        s <= 1 ? (this._flyToFrame = E(i, this),
                        this._move(this.unproject(n.add(o.subtract(n).multiplyBy(_(l) / h)), r), this.getScaleZoom(a / function(t) {
                            return a * (f(m) / f(m + u * t))
                        }(l), r), {
                            flyTo: !0
                        })) : this._move(t, e)._moveEnd(!0)
                    }
                    .call(this),
                    this
                },
                flyToBounds: function(t, e) {
                    var i = this._getBoundsCenterZoom(t, e);
                    return this.flyTo(i.center, i.zoom, e)
                },
                setMaxBounds: function(t) {
                    return (t = H(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
                    this.options.maxBounds = t,
                    this._loaded && this._panInsideMaxBounds(),
                    this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null,
                    this.off("moveend", this._panInsideMaxBounds))
                },
                setMinZoom: function(t) {
                    var e = this.options.minZoom;
                    return this.options.minZoom = t,
                    this._loaded && e !== t && (this.fire("zoomlevelschange"),
                    this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
                },
                setMaxZoom: function(t) {
                    var e = this.options.maxZoom;
                    return this.options.maxZoom = t,
                    this._loaded && e !== t && (this.fire("zoomlevelschange"),
                    this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
                },
                panInsideBounds: function(t, e) {
                    this._enforcingBounds = !0;
                    var i = this.getCenter()
                      , n = this._limitCenter(i, this._zoom, H(t));
                    return i.equals(n) || this.panTo(n, e),
                    this._enforcingBounds = !1,
                    this
                },
                panInside: function(t, e) {
                    var i = B((e = e || {}).paddingTopLeft || e.padding || [0, 0])
                      , n = B(e.paddingBottomRight || e.padding || [0, 0])
                      , o = this.getCenter()
                      , s = this.project(o)
                      , r = this.project(t)
                      , a = this.getPixelBounds()
                      , l = a.getSize().divideBy(2)
                      , h = z([a.min.add(i), a.max.subtract(n)]);
                    if (!h.contains(r)) {
                        this._enforcingBounds = !0;
                        var u = s.subtract(r)
                          , c = B(r.x + u.x, r.y + u.y);
                        (r.x < h.min.x || r.x > h.max.x) && (c.x = s.x - u.x,
                        u.x > 0 ? c.x += l.x - i.x : c.x -= l.x - n.x),
                        (r.y < h.min.y || r.y > h.max.y) && (c.y = s.y - u.y,
                        u.y > 0 ? c.y += l.y - i.y : c.y -= l.y - n.y),
                        this.panTo(this.unproject(c), e),
                        this._enforcingBounds = !1
                    }
                    return this
                },
                invalidateSize: function(t) {
                    if (!this._loaded)
                        return this;
                    t = i({
                        animate: !1,
                        pan: !0
                    }, !0 === t ? {
                        animate: !0
                    } : t);
                    var e = this.getSize();
                    this._sizeChanged = !0,
                    this._lastCenter = null;
                    var n = this.getSize()
                      , s = e.divideBy(2).round()
                      , r = n.divideBy(2).round()
                      , a = s.subtract(r);
                    return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a),
                    this.fire("move"),
                    t.debounceMoveend ? (clearTimeout(this._sizeTimer),
                    this._sizeTimer = setTimeout(o(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
                    this.fire("resize", {
                        oldSize: e,
                        newSize: n
                    })) : this
                },
                stop: function() {
                    return this.setZoom(this._limitZoom(this._zoom)),
                    this.options.zoomSnap || this.fire("viewreset"),
                    this._stop()
                },
                locate: function(t) {
                    if (t = this._locateOptions = i({
                        timeout: 1e4,
                        watch: !1
                    }, t),
                    !("geolocation"in navigator))
                        return this._handleGeolocationError({
                            code: 0,
                            message: "Geolocation not supported."
                        }),
                        this;
                    var e = o(this._handleGeolocationResponse, this)
                      , n = o(this._handleGeolocationError, this);
                    return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, n, t) : navigator.geolocation.getCurrentPosition(e, n, t),
                    this
                },
                stopLocate: function() {
                    return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
                    this._locateOptions && (this._locateOptions.setView = !1),
                    this
                },
                _handleGeolocationError: function(t) {
                    var e = t.code
                      , i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                    this._locateOptions.setView && !this._loaded && this.fitWorld(),
                    this.fire("locationerror", {
                        code: e,
                        message: "Geolocation error: " + i + "."
                    })
                },
                _handleGeolocationResponse: function(t) {
                    var e = t.coords.latitude
                      , i = t.coords.longitude
                      , n = new j(e,i)
                      , o = n.toBounds(2 * t.coords.accuracy)
                      , s = this._locateOptions;
                    if (s.setView) {
                        var r = this.getBoundsZoom(o);
                        this.setView(n, s.maxZoom ? Math.min(r, s.maxZoom) : r)
                    }
                    var a = {
                        latlng: n,
                        bounds: o,
                        timestamp: t.timestamp
                    };
                    for (var l in t.coords)
                        "number" == typeof t.coords[l] && (a[l] = t.coords[l]);
                    this.fire("locationfound", a)
                },
                addHandler: function(t, e) {
                    if (!e)
                        return this;
                    var i = this[t] = new e(this);
                    return this._handlers.push(i),
                    this.options[t] && i.enable(),
                    this
                },
                remove: function() {
                    if (this._initEvents(!0),
                    this._containerId !== this._container._leaflet_id)
                        throw new Error("Map container is being reused by another instance");
                    try {
                        delete this._container._leaflet_id,
                        delete this._containerId
                    } catch (t) {
                        this._container._leaflet_id = void 0,
                        this._containerId = void 0
                    }
                    var t;
                    for (t in void 0 !== this._locationWatchId && this.stopLocate(),
                    this._stop(),
                    se(this._mapPane),
                    this._clearControlPos && this._clearControlPos(),
                    this._resizeRequest && (T(this._resizeRequest),
                    this._resizeRequest = null),
                    this._clearHandlers(),
                    this._loaded && this.fire("unload"),
                    this._layers)
                        this._layers[t].remove();
                    for (t in this._panes)
                        se(this._panes[t]);
                    return this._layers = [],
                    this._panes = [],
                    delete this._mapPane,
                    delete this._renderer,
                    this
                },
                createPane: function(t, e) {
                    var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : "")
                      , n = oe("div", i, e || this._mapPane);
                    return t && (this._panes[t] = n),
                    n
                },
                getCenter: function() {
                    return this._checkIfLoaded(),
                    this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
                },
                getZoom: function() {
                    return this._zoom
                },
                getBounds: function() {
                    var t = this.getPixelBounds()
                      , e = this.unproject(t.getBottomLeft())
                      , i = this.unproject(t.getTopRight());
                    return new R(e,i)
                },
                getMinZoom: function() {
                    return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
                },
                getMaxZoom: function() {
                    return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
                },
                getBoundsZoom: function(t, e, i) {
                    t = H(t),
                    i = B(i || [0, 0]);
                    var n = this.getZoom() || 0
                      , o = this.getMinZoom()
                      , s = this.getMaxZoom()
                      , r = t.getNorthWest()
                      , a = t.getSouthEast()
                      , l = this.getSize().subtract(i)
                      , h = z(this.project(a, n), this.project(r, n)).getSize()
                      , u = mt ? this.options.zoomSnap : 1
                      , c = l.x / h.x
                      , d = l.y / h.y
                      , p = e ? Math.max(c, d) : Math.min(c, d);
                    return n = this.getScaleZoom(p, n),
                    u && (n = Math.round(n / (u / 100)) * (u / 100),
                    n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u),
                    Math.max(o, Math.min(s, n))
                },
                getSize: function() {
                    return this._size && !this._sizeChanged || (this._size = new O(this._container.clientWidth || 0,this._container.clientHeight || 0),
                    this._sizeChanged = !1),
                    this._size.clone()
                },
                getPixelBounds: function(t, e) {
                    var i = this._getTopLeftPoint(t, e);
                    return new A(i,i.add(this.getSize()))
                },
                getPixelOrigin: function() {
                    return this._checkIfLoaded(),
                    this._pixelOrigin
                },
                getPixelWorldBounds: function(t) {
                    return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
                },
                getPane: function(t) {
                    return "string" == typeof t ? this._panes[t] : t
                },
                getPanes: function() {
                    return this._panes
                },
                getContainer: function() {
                    return this._container
                },
                getZoomScale: function(t, e) {
                    var i = this.options.crs;
                    return e = void 0 === e ? this._zoom : e,
                    i.scale(t) / i.scale(e)
                },
                getScaleZoom: function(t, e) {
                    var i = this.options.crs;
                    e = void 0 === e ? this._zoom : e;
                    var n = i.zoom(t * i.scale(e));
                    return isNaN(n) ? 1 / 0 : n
                },
                project: function(t, e) {
                    return e = void 0 === e ? this._zoom : e,
                    this.options.crs.latLngToPoint(N(t), e)
                },
                unproject: function(t, e) {
                    return e = void 0 === e ? this._zoom : e,
                    this.options.crs.pointToLatLng(B(t), e)
                },
                layerPointToLatLng: function(t) {
                    var e = B(t).add(this.getPixelOrigin());
                    return this.unproject(e)
                },
                latLngToLayerPoint: function(t) {
                    var e = this.project(N(t))._round();
                    return e._subtract(this.getPixelOrigin())
                },
                wrapLatLng: function(t) {
                    return this.options.crs.wrapLatLng(N(t))
                },
                wrapLatLngBounds: function(t) {
                    return this.options.crs.wrapLatLngBounds(H(t))
                },
                distance: function(t, e) {
                    return this.options.crs.distance(N(t), N(e))
                },
                containerPointToLayerPoint: function(t) {
                    return B(t).subtract(this._getMapPanePos())
                },
                layerPointToContainerPoint: function(t) {
                    return B(t).add(this._getMapPanePos())
                },
                containerPointToLatLng: function(t) {
                    var e = this.containerPointToLayerPoint(B(t));
                    return this.layerPointToLatLng(e)
                },
                latLngToContainerPoint: function(t) {
                    return this.layerPointToContainerPoint(this.latLngToLayerPoint(N(t)))
                },
                mouseEventToContainerPoint: function(t) {
                    return Re(t, this._container)
                },
                mouseEventToLayerPoint: function(t) {
                    return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
                },
                mouseEventToLatLng: function(t) {
                    return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
                },
                _initContainer: function(t) {
                    var e = this._container = ie(t);
                    if (!e)
                        throw new Error("Map container not found.");
                    if (e._leaflet_id)
                        throw new Error("Map container is already initialized.");
                    Te(e, "scroll", this._onScroll, this),
                    this._containerId = r(e)
                },
                _initLayout: function() {
                    var t = this._container;
                    this._fadeAnimated = this.options.fadeAnimation && mt,
                    ue(t, "leaflet-container" + (wt ? " leaflet-touch" : "") + (kt ? " leaflet-retina" : "") + (Q ? " leaflet-oldie" : "") + (lt ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                    var e = ne(t, "position");
                    "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
                    this._initPanes(),
                    this._initControlPos && this._initControlPos()
                },
                _initPanes: function() {
                    var t = this._panes = {};
                    this._paneRenderers = {},
                    this._mapPane = this.createPane("mapPane", this._container),
                    ve(this._mapPane, new O(0,0)),
                    this.createPane("tilePane"),
                    this.createPane("shadowPane"),
                    this.createPane("overlayPane"),
                    this.createPane("markerPane"),
                    this.createPane("tooltipPane"),
                    this.createPane("popupPane"),
                    this.options.markerZoomAnimation || (ue(t.markerPane, "leaflet-zoom-hide"),
                    ue(t.shadowPane, "leaflet-zoom-hide"))
                },
                _resetView: function(t, e) {
                    ve(this._mapPane, new O(0,0));
                    var i = !this._loaded;
                    this._loaded = !0,
                    e = this._limitZoom(e),
                    this.fire("viewprereset");
                    var n = this._zoom !== e;
                    this._moveStart(n, !1)._move(t, e)._moveEnd(n),
                    this.fire("viewreset"),
                    i && this.fire("load")
                },
                _moveStart: function(t, e) {
                    return t && this.fire("zoomstart"),
                    e || this.fire("movestart"),
                    this
                },
                _move: function(t, e, i) {
                    void 0 === e && (e = this._zoom);
                    var n = this._zoom !== e;
                    return this._zoom = e,
                    this._lastCenter = t,
                    this._pixelOrigin = this._getNewPixelOrigin(t),
                    (n || i && i.pinch) && this.fire("zoom", i),
                    this.fire("move", i)
                },
                _moveEnd: function(t) {
                    return t && this.fire("zoomend"),
                    this.fire("moveend")
                },
                _stop: function() {
                    return T(this._flyToFrame),
                    this._panAnim && this._panAnim.stop(),
                    this
                },
                _rawPanBy: function(t) {
                    ve(this._mapPane, this._getMapPanePos().subtract(t))
                },
                _getZoomSpan: function() {
                    return this.getMaxZoom() - this.getMinZoom()
                },
                _panInsideMaxBounds: function() {
                    this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
                },
                _checkIfLoaded: function() {
                    if (!this._loaded)
                        throw new Error("Set map center and zoom first.")
                },
                _initEvents: function(t) {
                    this._targets = {},
                    this._targets[r(this._container)] = this;
                    var e = t ? De : Te;
                    e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this),
                    this.options.trackResize && e(window, "resize", this._onResize, this),
                    mt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
                },
                _onResize: function() {
                    T(this._resizeRequest),
                    this._resizeRequest = E(function() {
                        this.invalidateSize({
                            debounceMoveend: !0
                        })
                    }, this)
                },
                _onScroll: function() {
                    this._container.scrollTop = 0,
                    this._container.scrollLeft = 0
                },
                _onMoveEnd: function() {
                    var t = this._getMapPanePos();
                    Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
                },
                _findEventTargets: function(t, e) {
                    for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, a = !1; s; ) {
                        if ((i = this._targets[r(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                            a = !0;
                            break
                        }
                        if (i && i.listens(e, !0)) {
                            if (o && !Ze(s, t))
                                break;
                            if (n.push(i),
                            o)
                                break
                        }
                        if (s === this._container)
                            break;
                        s = s.parentNode
                    }
                    return n.length || a || o || !Ze(s, t) || (n = [this]),
                    n
                },
                _handleDOMEvent: function(t) {
                    if (this._loaded && !Fe(t)) {
                        var e = t.type;
                        "mousedown" !== e && "keypress" !== e || Le(t.target || t.srcElement),
                        this._fireDOMEvent(t, e)
                    }
                },
                _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                _fireDOMEvent: function(t, e, n) {
                    if ("click" === t.type) {
                        var o = i({}, t);
                        o.type = "preclick",
                        this._fireDOMEvent(o, o.type, n)
                    }
                    if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
                        var s = n[0];
                        "contextmenu" === e && s.listens(e, !0) && Ae(t);
                        var r = {
                            originalEvent: t
                        };
                        if ("keypress" !== t.type) {
                            var a = s.getLatLng && (!s._radius || s._radius <= 10);
                            r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t),
                            r.layerPoint = this.containerPointToLayerPoint(r.containerPoint),
                            r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint)
                        }
                        for (var l = 0; l < n.length; l++)
                            if (n[l].fire(e, r, !0),
                            r.originalEvent._stopped || !1 === n[l].options.bubblingMouseEvents && -1 !== g(this._mouseEvents, e))
                                return
                    }
                },
                _draggableMoved: function(t) {
                    return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
                },
                _clearHandlers: function() {
                    for (var t = 0, e = this._handlers.length; t < e; t++)
                        this._handlers[t].disable()
                },
                whenReady: function(t, e) {
                    return this._loaded ? t.call(e || this, {
                        target: this
                    }) : this.on("load", t, e),
                    this
                },
                _getMapPanePos: function() {
                    return ge(this._mapPane) || new O(0,0)
                },
                _moved: function() {
                    var t = this._getMapPanePos();
                    return t && !t.equals([0, 0])
                },
                _getTopLeftPoint: function(t, e) {
                    var i = t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
                    return i.subtract(this._getMapPanePos())
                },
                _getNewPixelOrigin: function(t, e) {
                    var i = this.getSize()._divideBy(2);
                    return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
                },
                _latLngToNewLayerPoint: function(t, e, i) {
                    var n = this._getNewPixelOrigin(i, e);
                    return this.project(t, e)._subtract(n)
                },
                _latLngBoundsToNewLayerBounds: function(t, e, i) {
                    var n = this._getNewPixelOrigin(i, e);
                    return z([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
                },
                _getCenterLayerPoint: function() {
                    return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
                },
                _getCenterOffset: function(t) {
                    return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
                },
                _limitCenter: function(t, e, i) {
                    if (!i)
                        return t;
                    var n = this.project(t, e)
                      , o = this.getSize().divideBy(2)
                      , s = new A(n.subtract(o),n.add(o))
                      , r = this._getBoundsOffset(s, i, e);
                    return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), e)
                },
                _limitOffset: function(t, e) {
                    if (!e)
                        return t;
                    var i = this.getPixelBounds()
                      , n = new A(i.min.add(t),i.max.add(t));
                    return t.add(this._getBoundsOffset(n, e))
                },
                _getBoundsOffset: function(t, e, i) {
                    var n = z(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i))
                      , o = n.min.subtract(t.min)
                      , s = n.max.subtract(t.max)
                      , r = this._rebound(o.x, -s.x)
                      , a = this._rebound(o.y, -s.y);
                    return new O(r,a)
                },
                _rebound: function(t, e) {
                    return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
                },
                _limitZoom: function(t) {
                    var e = this.getMinZoom()
                      , i = this.getMaxZoom()
                      , n = mt ? this.options.zoomSnap : 1;
                    return n && (t = Math.round(t / n) * n),
                    Math.max(e, Math.min(i, t))
                },
                _onPanTransitionStep: function() {
                    this.fire("move")
                },
                _onPanTransitionEnd: function() {
                    ce(this._mapPane, "leaflet-pan-anim"),
                    this.fire("moveend")
                },
                _tryAnimatedPan: function(t, e) {
                    var i = this._getCenterOffset(t)._trunc();
                    return !(!0 !== (e && e.animate) && !this.getSize().contains(i)) && (this.panBy(i, e),
                    !0)
                },
                _createAnimProxy: function() {
                    var t = this._proxy = oe("div", "leaflet-proxy leaflet-zoom-animated");
                    this._panes.mapPane.appendChild(t),
                    this.on("zoomanim", function(t) {
                        var e = Jt
                          , i = this._proxy.style[e];
                        _e(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                        i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                    }, this),
                    this.on("load moveend", function() {
                        var t = this.getCenter()
                          , e = this.getZoom();
                        _e(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
                    }, this),
                    this._on("unload", this._destroyAnimProxy, this)
                },
                _destroyAnimProxy: function() {
                    se(this._proxy),
                    delete this._proxy
                },
                _catchTransitionEnd: function(t) {
                    this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
                },
                _nothingToAnimate: function() {
                    return !this._container.getElementsByClassName("leaflet-zoom-animated").length
                },
                _tryAnimatedZoom: function(t, e, i) {
                    if (this._animatingZoom)
                        return !0;
                    if (i = i || {},
                    !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                        return !1;
                    var n = this.getZoomScale(e)
                      , o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                    return !(!0 !== i.animate && !this.getSize().contains(o)) && (E(function() {
                        this._moveStart(!0, !1)._animateZoom(t, e, !0)
                    }, this),
                    !0)
                },
                _animateZoom: function(t, e, i, n) {
                    this._mapPane && (i && (this._animatingZoom = !0,
                    this._animateToCenter = t,
                    this._animateToZoom = e,
                    ue(this._mapPane, "leaflet-zoom-anim")),
                    this.fire("zoomanim", {
                        center: t,
                        zoom: e,
                        noUpdate: n
                    }),
                    setTimeout(o(this._onZoomTransitionEnd, this), 250))
                },
                _onZoomTransitionEnd: function() {
                    this._animatingZoom && (this._mapPane && ce(this._mapPane, "leaflet-zoom-anim"),
                    this._animatingZoom = !1,
                    this._move(this._animateToCenter, this._animateToZoom),
                    E(function() {
                        this._moveEnd(!0)
                    }, this))
                }
            });
            var Ge = D.extend({
                options: {
                    position: "topright"
                },
                initialize: function(t) {
                    p(this, t)
                },
                getPosition: function() {
                    return this.options.position
                },
                setPosition: function(t) {
                    var e = this._map;
                    return e && e.removeControl(this),
                    this.options.position = t,
                    e && e.addControl(this),
                    this
                },
                getContainer: function() {
                    return this._container
                },
                addTo: function(t) {
                    this.remove(),
                    this._map = t;
                    var e = this._container = this.onAdd(t)
                      , i = this.getPosition()
                      , n = t._controlCorners[i];
                    return ue(e, "leaflet-control"),
                    -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e),
                    this
                },
                remove: function() {
                    return this._map ? (se(this._container),
                    this.onRemove && this.onRemove(this._map),
                    this._map = null,
                    this) : this
                },
                _refocusOnMap: function(t) {
                    this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
                }
            })
              , Ye = function(t) {
                return new Ge(t)
            };
            Ve.include({
                addControl: function(t) {
                    return t.addTo(this),
                    this
                },
                removeControl: function(t) {
                    return t.remove(),
                    this
                },
                _initControlPos: function() {
                    var t = this._controlCorners = {}
                      , e = "leaflet-"
                      , i = this._controlContainer = oe("div", e + "control-container", this._container);
                    function n(n, o) {
                        var s = e + n + " " + e + o;
                        t[n + o] = oe("div", s, i)
                    }
                    n("top", "left"),
                    n("top", "right"),
                    n("bottom", "left"),
                    n("bottom", "right")
                },
                _clearControlPos: function() {
                    for (var t in this._controlCorners)
                        se(this._controlCorners[t]);
                    se(this._controlContainer),
                    delete this._controlCorners,
                    delete this._controlContainer
                }
            });
            var Xe = Ge.extend({
                options: {
                    collapsed: !0,
                    position: "topright",
                    autoZIndex: !0,
                    hideSingleBase: !1,
                    sortLayers: !1,
                    sortFunction: function(t, e, i, n) {
                        return i < n ? -1 : n < i ? 1 : 0
                    }
                },
                initialize: function(t, e, i) {
                    for (var n in p(this, i),
                    this._layerControlInputs = [],
                    this._layers = [],
                    this._lastZIndex = 0,
                    this._handlingClick = !1,
                    t)
                        this._addLayer(t[n], n);
                    for (n in e)
                        this._addLayer(e[n], n, !0)
                },
                onAdd: function(t) {
                    this._initLayout(),
                    this._update(),
                    this._map = t,
                    t.on("zoomend", this._checkDisabledLayers, this);
                    for (var e = 0; e < this._layers.length; e++)
                        this._layers[e].layer.on("add remove", this._onLayerChange, this);
                    return this._container
                },
                addTo: function(t) {
                    return Ge.prototype.addTo.call(this, t),
                    this._expandIfNotCollapsed()
                },
                onRemove: function() {
                    this._map.off("zoomend", this._checkDisabledLayers, this);
                    for (var t = 0; t < this._layers.length; t++)
                        this._layers[t].layer.off("add remove", this._onLayerChange, this)
                },
                addBaseLayer: function(t, e) {
                    return this._addLayer(t, e),
                    this._map ? this._update() : this
                },
                addOverlay: function(t, e) {
                    return this._addLayer(t, e, !0),
                    this._map ? this._update() : this
                },
                removeLayer: function(t) {
                    t.off("add remove", this._onLayerChange, this);
                    var e = this._getLayer(r(t));
                    return e && this._layers.splice(this._layers.indexOf(e), 1),
                    this._map ? this._update() : this
                },
                expand: function() {
                    ue(this._container, "leaflet-control-layers-expanded"),
                    this._section.style.height = null;
                    var t = this._map.getSize().y - (this._container.offsetTop + 50);
                    return t < this._section.clientHeight ? (ue(this._section, "leaflet-control-layers-scrollbar"),
                    this._section.style.height = t + "px") : ce(this._section, "leaflet-control-layers-scrollbar"),
                    this._checkDisabledLayers(),
                    this
                },
                collapse: function() {
                    return ce(this._container, "leaflet-control-layers-expanded"),
                    this
                },
                _initLayout: function() {
                    var t = "leaflet-control-layers"
                      , e = this._container = oe("div", t)
                      , i = this.options.collapsed;
                    e.setAttribute("aria-haspopup", !0),
                    Be(e),
                    Ie(e);
                    var n = this._section = oe("section", t + "-list");
                    i && (this._map.on("click", this.collapse, this),
                    et || Te(e, {
                        mouseenter: this.expand,
                        mouseleave: this.collapse
                    }, this));
                    var o = this._layersLink = oe("a", t + "-toggle", e);
                    o.href = "#",
                    o.title = "Layers",
                    wt ? (Te(o, "click", ze),
                    Te(o, "click", this.expand, this)) : Te(o, "focus", this.expand, this),
                    i || this.expand(),
                    this._baseLayersList = oe("div", t + "-base", n),
                    this._separator = oe("div", t + "-separator", n),
                    this._overlaysList = oe("div", t + "-overlays", n),
                    e.appendChild(n)
                },
                _getLayer: function(t) {
                    for (var e = 0; e < this._layers.length; e++)
                        if (this._layers[e] && r(this._layers[e].layer) === t)
                            return this._layers[e]
                },
                _addLayer: function(t, e, i) {
                    this._map && t.on("add remove", this._onLayerChange, this),
                    this._layers.push({
                        layer: t,
                        name: e,
                        overlay: i
                    }),
                    this.options.sortLayers && this._layers.sort(o(function(t, e) {
                        return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                    }, this)),
                    this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
                    t.setZIndex(this._lastZIndex)),
                    this._expandIfNotCollapsed()
                },
                _update: function() {
                    if (!this._container)
                        return this;
                    re(this._baseLayersList),
                    re(this._overlaysList),
                    this._layerControlInputs = [];
                    var t, e, i, n, o = 0;
                    for (i = 0; i < this._layers.length; i++)
                        n = this._layers[i],
                        this._addItem(n),
                        e = e || n.overlay,
                        t = t || !n.overlay,
                        o += n.overlay ? 0 : 1;
                    return this.options.hideSingleBase && (t = t && o > 1,
                    this._baseLayersList.style.display = t ? "" : "none"),
                    this._separator.style.display = e && t ? "" : "none",
                    this
                },
                _onLayerChange: function(t) {
                    this._handlingClick || this._update();
                    var e = this._getLayer(r(t.target))
                      , i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                    i && this._map.fire(i, e)
                },
                _createRadioElement: function(t, e) {
                    var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>"
                      , n = document.createElement("div");
                    return n.innerHTML = i,
                    n.firstChild
                },
                _addItem: function(t) {
                    var e, i = document.createElement("label"), n = this._map.hasLayer(t.layer);
                    t.overlay ? ((e = document.createElement("input")).type = "checkbox",
                    e.className = "leaflet-control-layers-selector",
                    e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers", n),
                    this._layerControlInputs.push(e),
                    e.layerId = r(t.layer),
                    Te(e, "click", this._onInputClick, this);
                    var o = document.createElement("span");
                    o.innerHTML = " " + t.name;
                    var s = document.createElement("div");
                    i.appendChild(s),
                    s.appendChild(e),
                    s.appendChild(o);
                    var a = t.overlay ? this._overlaysList : this._baseLayersList;
                    return a.appendChild(i),
                    this._checkDisabledLayers(),
                    i
                },
                _onInputClick: function() {
                    var t, e, i = this._layerControlInputs, n = [], o = [];
                    this._handlingClick = !0;
                    for (var s = i.length - 1; s >= 0; s--)
                        t = i[s],
                        e = this._getLayer(t.layerId).layer,
                        t.checked ? n.push(e) : t.checked || o.push(e);
                    for (s = 0; s < o.length; s++)
                        this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                    for (s = 0; s < n.length; s++)
                        this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                    this._handlingClick = !1,
                    this._refocusOnMap()
                },
                _checkDisabledLayers: function() {
                    for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--)
                        t = i[o],
                        e = this._getLayer(t.layerId).layer,
                        t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
                },
                _expandIfNotCollapsed: function() {
                    return this._map && !this.options.collapsed && this.expand(),
                    this
                },
                _expand: function() {
                    return this.expand()
                },
                _collapse: function() {
                    return this.collapse()
                }
            })
              , Ke = Ge.extend({
                options: {
                    position: "topleft",
                    zoomInText: "+",
                    zoomInTitle: "Zoom in",
                    zoomOutText: "&#x2212;",
                    zoomOutTitle: "Zoom out"
                },
                onAdd: function(t) {
                    var e = "leaflet-control-zoom"
                      , i = oe("div", e + " leaflet-bar")
                      , n = this.options;
                    return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn),
                    this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut),
                    this._updateDisabled(),
                    t.on("zoomend zoomlevelschange", this._updateDisabled, this),
                    i
                },
                onRemove: function(t) {
                    t.off("zoomend zoomlevelschange", this._updateDisabled, this)
                },
                disable: function() {
                    return this._disabled = !0,
                    this._updateDisabled(),
                    this
                },
                enable: function() {
                    return this._disabled = !1,
                    this._updateDisabled(),
                    this
                },
                _zoomIn: function(t) {
                    !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                },
                _zoomOut: function(t) {
                    !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
                },
                _createButton: function(t, e, i, n, o) {
                    var s = oe("a", i, n);
                    return s.innerHTML = t,
                    s.href = "#",
                    s.title = e,
                    s.setAttribute("role", "button"),
                    s.setAttribute("aria-label", e),
                    Be(s),
                    Te(s, "click", ze),
                    Te(s, "click", o, this),
                    Te(s, "click", this._refocusOnMap, this),
                    s
                },
                _updateDisabled: function() {
                    var t = this._map
                      , e = "leaflet-disabled";
                    ce(this._zoomInButton, e),
                    ce(this._zoomOutButton, e),
                    (this._disabled || t._zoom === t.getMinZoom()) && ue(this._zoomOutButton, e),
                    (this._disabled || t._zoom === t.getMaxZoom()) && ue(this._zoomInButton, e)
                }
            });
            Ve.mergeOptions({
                zoomControl: !0
            }),
            Ve.addInitHook(function() {
                this.options.zoomControl && (this.zoomControl = new Ke,
                this.addControl(this.zoomControl))
            });
            var Qe = Ge.extend({
                options: {
                    position: "bottomleft",
                    maxWidth: 100,
                    metric: !0,
                    imperial: !0
                },
                onAdd: function(t) {
                    var e = oe("div", "leaflet-control-scale")
                      , i = this.options;
                    return this._addScales(i, "leaflet-control-scale-line", e),
                    t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this),
                    t.whenReady(this._update, this),
                    e
                },
                onRemove: function(t) {
                    t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
                },
                _addScales: function(t, e, i) {
                    t.metric && (this._mScale = oe("div", e, i)),
                    t.imperial && (this._iScale = oe("div", e, i))
                },
                _update: function() {
                    var t = this._map
                      , e = t.getSize().y / 2
                      , i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                    this._updateScales(i)
                },
                _updateScales: function(t) {
                    this.options.metric && t && this._updateMetric(t),
                    this.options.imperial && t && this._updateImperial(t)
                },
                _updateMetric: function(t) {
                    var e = this._getRoundNum(t)
                      , i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                    this._updateScale(this._mScale, i, e / t)
                },
                _updateImperial: function(t) {
                    var e, i, n, o = 3.2808399 * t;
                    o > 5280 ? (e = o / 5280,
                    i = this._getRoundNum(e),
                    this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o),
                    this._updateScale(this._iScale, n + " ft", n / o))
                },
                _updateScale: function(t, e, i) {
                    t.style.width = Math.round(this.options.maxWidth * i) + "px",
                    t.innerHTML = e
                },
                _getRoundNum: function(t) {
                    var e = Math.pow(10, (Math.floor(t) + "").length - 1)
                      , i = t / e;
                    return e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
                }
            })
              , Je = Ge.extend({
                options: {
                    position: "bottomright",
                    prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
                },
                initialize: function(t) {
                    p(this, t),
                    this._attributions = {}
                },
                onAdd: function(t) {
                    for (var e in t.attributionControl = this,
                    this._container = oe("div", "leaflet-control-attribution"),
                    Be(this._container),
                    t._layers)
                        t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                    return this._update(),
                    this._container
                },
                setPrefix: function(t) {
                    return this.options.prefix = t,
                    this._update(),
                    this
                },
                addAttribution: function(t) {
                    return t ? (this._attributions[t] || (this._attributions[t] = 0),
                    this._attributions[t]++,
                    this._update(),
                    this) : this
                },
                removeAttribution: function(t) {
                    return t ? (this._attributions[t] && (this._attributions[t]--,
                    this._update()),
                    this) : this
                },
                _update: function() {
                    if (this._map) {
                        var t = [];
                        for (var e in this._attributions)
                            this._attributions[e] && t.push(e);
                        var i = [];
                        this.options.prefix && i.push(this.options.prefix),
                        t.length && i.push(t.join(", ")),
                        this._container.innerHTML = i.join(" | ")
                    }
                }
            });
            Ve.mergeOptions({
                attributionControl: !0
            }),
            Ve.addInitHook(function() {
                this.options.attributionControl && (new Je).addTo(this)
            });
            Ge.Layers = Xe,
            Ge.Zoom = Ke,
            Ge.Scale = Qe,
            Ge.Attribution = Je,
            Ye.layers = function(t, e, i) {
                return new Xe(t,e,i)
            }
            ,
            Ye.zoom = function(t) {
                return new Ke(t)
            }
            ,
            Ye.scale = function(t) {
                return new Qe(t)
            }
            ,
            Ye.attribution = function(t) {
                return new Je(t)
            }
            ;
            var ti = D.extend({
                initialize: function(t) {
                    this._map = t
                },
                enable: function() {
                    return this._enabled ? this : (this._enabled = !0,
                    this.addHooks(),
                    this)
                },
                disable: function() {
                    return this._enabled ? (this._enabled = !1,
                    this.removeHooks(),
                    this) : this
                },
                enabled: function() {
                    return !!this._enabled
                }
            });
            ti.addTo = function(t, e) {
                return t.addHandler(e, this),
                this
            }
            ;
            var ei, ii = {
                Events: P
            }, ni = wt ? "touchstart mousedown" : "mousedown", oi = {
                mousedown: "mouseup",
                touchstart: "touchend",
                pointerdown: "touchend",
                MSPointerDown: "touchend"
            }, si = {
                mousedown: "mousemove",
                touchstart: "touchmove",
                pointerdown: "touchmove",
                MSPointerDown: "touchmove"
            }, ri = S.extend({
                options: {
                    clickTolerance: 3
                },
                initialize: function(t, e, i, n) {
                    p(this, n),
                    this._element = t,
                    this._dragStartTarget = e || t,
                    this._preventOutline = i
                },
                enable: function() {
                    this._enabled || (Te(this._dragStartTarget, ni, this._onDown, this),
                    this._enabled = !0)
                },
                disable: function() {
                    this._enabled && (ri._dragging === this && this.finishDrag(),
                    De(this._dragStartTarget, ni, this._onDown, this),
                    this._enabled = !1,
                    this._moved = !1)
                },
                _onDown: function(t) {
                    if (!t._simulated && this._enabled && (this._moved = !1,
                    !he(this._element, "leaflet-zoom-anim") && !(ri._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (ri._dragging = this,
                    this._preventOutline && Le(this._element),
                    be(),
                    Gt(),
                    this._moving)))) {
                        this.fire("down");
                        var e = t.touches ? t.touches[0] : t
                          , i = ke(this._element);
                        this._startPoint = new O(e.clientX,e.clientY),
                        this._parentScale = Ce(i),
                        Te(document, si[t.type], this._onMove, this),
                        Te(document, oi[t.type], this._onUp, this)
                    }
                },
                _onMove: function(t) {
                    if (!t._simulated && this._enabled)
                        if (t.touches && t.touches.length > 1)
                            this._moved = !0;
                        else {
                            var e = t.touches && 1 === t.touches.length ? t.touches[0] : t
                              , i = new O(e.clientX,e.clientY)._subtract(this._startPoint);
                            (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x,
                            i.y /= this._parentScale.y,
                            Ae(t),
                            this._moved || (this.fire("dragstart"),
                            this._moved = !0,
                            this._startPos = ge(this._element).subtract(i),
                            ue(document.body, "leaflet-dragging"),
                            this._lastTarget = t.target || t.srcElement,
                            window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
                            ue(this._lastTarget, "leaflet-drag-target")),
                            this._newPos = this._startPos.add(i),
                            this._moving = !0,
                            T(this._animRequest),
                            this._lastEvent = t,
                            this._animRequest = E(this._updatePosition, this, !0)))
                        }
                },
                _updatePosition: function() {
                    var t = {
                        originalEvent: this._lastEvent
                    };
                    this.fire("predrag", t),
                    ve(this._element, this._newPos),
                    this.fire("drag", t)
                },
                _onUp: function(t) {
                    !t._simulated && this._enabled && this.finishDrag()
                },
                finishDrag: function() {
                    for (var t in ce(document.body, "leaflet-dragging"),
                    this._lastTarget && (ce(this._lastTarget, "leaflet-drag-target"),
                    this._lastTarget = null),
                    si)
                        De(document, si[t], this._onMove, this),
                        De(document, oi[t], this._onUp, this);
                    we(),
                    Yt(),
                    this._moved && this._moving && (T(this._animRequest),
                    this.fire("dragend", {
                        distance: this._newPos.distanceTo(this._startPos)
                    })),
                    this._moving = !1,
                    ri._dragging = !1
                }
            });
            function ai(t, e) {
                if (!e || !t.length)
                    return t.slice();
                var i = e * e;
                return t = function(t, e) {
                    var i = t.length
                      , n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
                    n[0] = n[i - 1] = 1,
                    function t(e, i, n, o, s) {
                        var r, a, l, h = 0;
                        for (a = o + 1; a <= s - 1; a++)
                            (l = pi(e[a], e[o], e[s], !0)) > h && (r = a,
                            h = l);
                        h > n && (i[r] = 1,
                        t(e, i, n, o, r),
                        t(e, i, n, r, s))
                    }(t, n, e, 0, i - 1);
                    var o, s = [];
                    for (o = 0; o < i; o++)
                        n[o] && s.push(t[o]);
                    return s
                }(t = function(t, e) {
                    for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
                        di(t[n], t[o]) > e && (i.push(t[n]),
                        o = n);
                    o < s - 1 && i.push(t[s - 1]);
                    return i
                }(t, i), i)
            }
            function li(t, e, i) {
                return Math.sqrt(pi(t, e, i, !0))
            }
            function hi(t, e, i, n, o) {
                var s, r, a, l = n ? ei : ci(t, i), h = ci(e, i);
                for (ei = h; ; ) {
                    if (!(l | h))
                        return [t, e];
                    if (l & h)
                        return !1;
                    r = ui(t, e, s = l || h, i, o),
                    a = ci(r, i),
                    s === l ? (t = r,
                    l = a) : (e = r,
                    h = a)
                }
            }
            function ui(t, e, i, n, o) {
                var s, r, a = e.x - t.x, l = e.y - t.y, h = n.min, u = n.max;
                return 8 & i ? (s = t.x + a * (u.y - t.y) / l,
                r = u.y) : 4 & i ? (s = t.x + a * (h.y - t.y) / l,
                r = h.y) : 2 & i ? (s = u.x,
                r = t.y + l * (u.x - t.x) / a) : 1 & i && (s = h.x,
                r = t.y + l * (h.x - t.x) / a),
                new O(s,r,o)
            }
            function ci(t, e) {
                var i = 0;
                return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
                t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
                i
            }
            function di(t, e) {
                var i = e.x - t.x
                  , n = e.y - t.y;
                return i * i + n * n
            }
            function pi(t, e, i, n) {
                var o, s = e.x, r = e.y, a = i.x - s, l = i.y - r, h = a * a + l * l;
                return h > 0 && ((o = ((t.x - s) * a + (t.y - r) * l) / h) > 1 ? (s = i.x,
                r = i.y) : o > 0 && (s += a * o,
                r += l * o)),
                a = t.x - s,
                l = t.y - r,
                n ? a * a + l * l : new O(s,r)
            }
            function fi(t) {
                return !v(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
            }
            function mi(t) {
                return fi(t)
            }
            var _i = (Object.freeze || Object)({
                simplify: ai,
                pointToSegmentDistance: li,
                closestPointOnSegment: function(t, e, i) {
                    return pi(t, e, i)
                },
                clipSegment: hi,
                _getEdgeIntersection: ui,
                _getBitCode: ci,
                _sqClosestPointOnSegment: pi,
                isFlat: fi,
                _flat: mi
            });
            function vi(t, e, i) {
                var n, o, s, r, a, l, h, u, c, d = [1, 4, 2, 8];
                for (o = 0,
                h = t.length; o < h; o++)
                    t[o]._code = ci(t[o], e);
                for (r = 0; r < 4; r++) {
                    for (u = d[r],
                    n = [],
                    o = 0,
                    h = t.length,
                    s = h - 1; o < h; s = o++)
                        a = t[o],
                        l = t[s],
                        a._code & u ? l._code & u || ((c = ui(l, a, u, e, i))._code = ci(c, e),
                        n.push(c)) : (l._code & u && ((c = ui(l, a, u, e, i))._code = ci(c, e),
                        n.push(c)),
                        n.push(a));
                    t = n
                }
                return t
            }
            var gi = (Object.freeze || Object)({
                clipPolygon: vi
            })
              , yi = {
                project: function(t) {
                    return new O(t.lng,t.lat)
                },
                unproject: function(t) {
                    return new j(t.y,t.x)
                },
                bounds: new A([-180, -90],[180, 90])
            }
              , bi = {
                R: 6378137,
                R_MINOR: 6356752.314245179,
                bounds: new A([-20037508.34279, -15496570.73972],[20037508.34279, 18764656.23138]),
                project: function(t) {
                    var e = Math.PI / 180
                      , i = this.R
                      , n = t.lat * e
                      , o = this.R_MINOR / i
                      , s = Math.sqrt(1 - o * o)
                      , r = s * Math.sin(n)
                      , a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
                    return n = -i * Math.log(Math.max(a, 1e-10)),
                    new O(t.lng * e * i,n)
                },
                unproject: function(t) {
                    for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), l = 0, h = .1; l < 15 && Math.abs(h) > 1e-7; l++)
                        e = s * Math.sin(a),
                        e = Math.pow((1 - e) / (1 + e), s / 2),
                        h = Math.PI / 2 - 2 * Math.atan(r * e) - a,
                        a += h;
                    return new j(a * i,t.x * i / n)
                }
            }
              , wi = (Object.freeze || Object)({
                LonLat: yi,
                Mercator: bi,
                SphericalMercator: F
            })
              , Li = i({}, W, {
                code: "EPSG:3395",
                projection: bi,
                transformation: function() {
                    var t = .5 / (Math.PI * bi.R);
                    return q(t, .5, -t, .5)
                }()
            })
              , xi = i({}, W, {
                code: "EPSG:4326",
                projection: yi,
                transformation: q(1 / 180, 1, -1 / 180, .5)
            })
              , ki = i({}, $, {
                projection: yi,
                transformation: q(1, 0, -1, 0),
                scale: function(t) {
                    return Math.pow(2, t)
                },
                zoom: function(t) {
                    return Math.log(t) / Math.LN2
                },
                distance: function(t, e) {
                    var i = e.lng - t.lng
                      , n = e.lat - t.lat;
                    return Math.sqrt(i * i + n * n)
                },
                infinite: !0
            });
            $.Earth = W,
            $.EPSG3395 = Li,
            $.EPSG3857 = U,
            $.EPSG900913 = V,
            $.EPSG4326 = xi,
            $.Simple = ki;
            var Ci = S.extend({
                options: {
                    pane: "overlayPane",
                    attribution: null,
                    bubblingMouseEvents: !0
                },
                addTo: function(t) {
                    return t.addLayer(this),
                    this
                },
                remove: function() {
                    return this.removeFrom(this._map || this._mapToAdd)
                },
                removeFrom: function(t) {
                    return t && t.removeLayer(this),
                    this
                },
                getPane: function(t) {
                    return this._map.getPane(t ? this.options[t] || t : this.options.pane)
                },
                addInteractiveTarget: function(t) {
                    return this._map._targets[r(t)] = this,
                    this
                },
                removeInteractiveTarget: function(t) {
                    return delete this._map._targets[r(t)],
                    this
                },
                getAttribution: function() {
                    return this.options.attribution
                },
                _layerAdd: function(t) {
                    var e = t.target;
                    if (e.hasLayer(this)) {
                        if (this._map = e,
                        this._zoomAnimated = e._zoomAnimated,
                        this.getEvents) {
                            var i = this.getEvents();
                            e.on(i, this),
                            this.once("remove", function() {
                                e.off(i, this)
                            }, this)
                        }
                        this.onAdd(e),
                        this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()),
                        this.fire("add"),
                        e.fire("layeradd", {
                            layer: this
                        })
                    }
                }
            });
            Ve.include({
                addLayer: function(t) {
                    if (!t._layerAdd)
                        throw new Error("The provided object is not a Layer.");
                    var e = r(t);
                    return this._layers[e] ? this : (this._layers[e] = t,
                    t._mapToAdd = this,
                    t.beforeAdd && t.beforeAdd(this),
                    this.whenReady(t._layerAdd, t),
                    this)
                },
                removeLayer: function(t) {
                    var e = r(t);
                    return this._layers[e] ? (this._loaded && t.onRemove(this),
                    t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()),
                    delete this._layers[e],
                    this._loaded && (this.fire("layerremove", {
                        layer: t
                    }),
                    t.fire("remove")),
                    t._map = t._mapToAdd = null,
                    this) : this
                },
                hasLayer: function(t) {
                    return !!t && r(t)in this._layers
                },
                eachLayer: function(t, e) {
                    for (var i in this._layers)
                        t.call(e, this._layers[i]);
                    return this
                },
                _addLayers: function(t) {
                    for (var e = 0, i = (t = t ? v(t) ? t : [t] : []).length; e < i; e++)
                        this.addLayer(t[e])
                },
                _addZoomLimit: function(t) {
                    !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[r(t)] = t,
                    this._updateZoomLevels())
                },
                _removeZoomLimit: function(t) {
                    var e = r(t);
                    this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e],
                    this._updateZoomLevels())
                },
                _updateZoomLevels: function() {
                    var t = 1 / 0
                      , e = -1 / 0
                      , i = this._getZoomSpan();
                    for (var n in this._zoomBoundLayers) {
                        var o = this._zoomBoundLayers[n].options;
                        t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom),
                        e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
                    }
                    this._layersMaxZoom = e === -1 / 0 ? void 0 : e,
                    this._layersMinZoom = t === 1 / 0 ? void 0 : t,
                    i !== this._getZoomSpan() && this.fire("zoomlevelschange"),
                    void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
                    void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
                }
            });
            var Ei = Ci.extend({
                initialize: function(t, e) {
                    var i, n;
                    if (p(this, e),
                    this._layers = {},
                    t)
                        for (i = 0,
                        n = t.length; i < n; i++)
                            this.addLayer(t[i])
                },
                addLayer: function(t) {
                    var e = this.getLayerId(t);
                    return this._layers[e] = t,
                    this._map && this._map.addLayer(t),
                    this
                },
                removeLayer: function(t) {
                    var e = t in this._layers ? t : this.getLayerId(t);
                    return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
                    delete this._layers[e],
                    this
                },
                hasLayer: function(t) {
                    return !!t && (t in this._layers || this.getLayerId(t)in this._layers)
                },
                clearLayers: function() {
                    return this.eachLayer(this.removeLayer, this)
                },
                invoke: function(t) {
                    var e, i, n = Array.prototype.slice.call(arguments, 1);
                    for (e in this._layers)
                        (i = this._layers[e])[t] && i[t].apply(i, n);
                    return this
                },
                onAdd: function(t) {
                    this.eachLayer(t.addLayer, t)
                },
                onRemove: function(t) {
                    this.eachLayer(t.removeLayer, t)
                },
                eachLayer: function(t, e) {
                    for (var i in this._layers)
                        t.call(e, this._layers[i]);
                    return this
                },
                getLayer: function(t) {
                    return this._layers[t]
                },
                getLayers: function() {
                    var t = [];
                    return this.eachLayer(t.push, t),
                    t
                },
                setZIndex: function(t) {
                    return this.invoke("setZIndex", t)
                },
                getLayerId: function(t) {
                    return r(t)
                }
            })
              , Ti = Ei.extend({
                addLayer: function(t) {
                    return this.hasLayer(t) ? this : (t.addEventParent(this),
                    Ei.prototype.addLayer.call(this, t),
                    this.fire("layeradd", {
                        layer: t
                    }))
                },
                removeLayer: function(t) {
                    return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]),
                    t.removeEventParent(this),
                    Ei.prototype.removeLayer.call(this, t),
                    this.fire("layerremove", {
                        layer: t
                    })) : this
                },
                setStyle: function(t) {
                    return this.invoke("setStyle", t)
                },
                bringToFront: function() {
                    return this.invoke("bringToFront")
                },
                bringToBack: function() {
                    return this.invoke("bringToBack")
                },
                getBounds: function() {
                    var t = new R;
                    for (var e in this._layers) {
                        var i = this._layers[e];
                        t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
                    }
                    return t
                }
            })
              , Mi = D.extend({
                options: {
                    popupAnchor: [0, 0],
                    tooltipAnchor: [0, 0]
                },
                initialize: function(t) {
                    p(this, t)
                },
                createIcon: function(t) {
                    return this._createIcon("icon", t)
                },
                createShadow: function(t) {
                    return this._createIcon("shadow", t)
                },
                _createIcon: function(t, e) {
                    var i = this._getIconUrl(t);
                    if (!i) {
                        if ("icon" === t)
                            throw new Error("iconUrl not set in Icon options (see the docs).");
                        return null
                    }
                    var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
                    return this._setIconStyles(n, t),
                    n
                },
                _setIconStyles: function(t, e) {
                    var i = this.options
                      , n = i[e + "Size"];
                    "number" == typeof n && (n = [n, n]);
                    var o = B(n)
                      , s = B("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
                    t.className = "leaflet-marker-" + e + " " + (i.className || ""),
                    s && (t.style.marginLeft = -s.x + "px",
                    t.style.marginTop = -s.y + "px"),
                    o && (t.style.width = o.x + "px",
                    t.style.height = o.y + "px")
                },
                _createImg: function(t, e) {
                    return (e = e || document.createElement("img")).src = t,
                    e
                },
                _getIconUrl: function(t) {
                    return kt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
                }
            });
            var Di = Mi.extend({
                options: {
                    iconUrl: "marker-icon.png",
                    iconRetinaUrl: "marker-icon-2x.png",
                    shadowUrl: "marker-shadow.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                    shadowSize: [41, 41]
                },
                _getIconUrl: function(t) {
                    return Di.imagePath || (Di.imagePath = this._detectIconPath()),
                    (this.options.imagePath || Di.imagePath) + Mi.prototype._getIconUrl.call(this, t)
                },
                _detectIconPath: function() {
                    var t = oe("div", "leaflet-default-icon-path", document.body)
                      , e = ne(t, "background-image") || ne(t, "backgroundImage");
                    return document.body.removeChild(t),
                    e = null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
                }
            })
              , Pi = ti.extend({
                initialize: function(t) {
                    this._marker = t
                },
                addHooks: function() {
                    var t = this._marker._icon;
                    this._draggable || (this._draggable = new ri(t,t,!0)),
                    this._draggable.on({
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).enable(),
                    ue(t, "leaflet-marker-draggable")
                },
                removeHooks: function() {
                    this._draggable.off({
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this).disable(),
                    this._marker._icon && ce(this._marker._icon, "leaflet-marker-draggable")
                },
                moved: function() {
                    return this._draggable && this._draggable._moved
                },
                _adjustPan: function(t) {
                    var e = this._marker
                      , i = e._map
                      , n = this._marker.options.autoPanSpeed
                      , o = this._marker.options.autoPanPadding
                      , s = ge(e._icon)
                      , r = i.getPixelBounds()
                      , a = i.getPixelOrigin()
                      , l = z(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
                    if (!l.contains(s)) {
                        var h = B((Math.max(l.max.x, s.x) - l.max.x) / (r.max.x - l.max.x) - (Math.min(l.min.x, s.x) - l.min.x) / (r.min.x - l.min.x), (Math.max(l.max.y, s.y) - l.max.y) / (r.max.y - l.max.y) - (Math.min(l.min.y, s.y) - l.min.y) / (r.min.y - l.min.y)).multiplyBy(n);
                        i.panBy(h, {
                            animate: !1
                        }),
                        this._draggable._newPos._add(h),
                        this._draggable._startPos._add(h),
                        ve(e._icon, this._draggable._newPos),
                        this._onDrag(t),
                        this._panRequest = E(this._adjustPan.bind(this, t))
                    }
                },
                _onDragStart: function() {
                    this._oldLatLng = this._marker.getLatLng(),
                    this._marker.closePopup().fire("movestart").fire("dragstart")
                },
                _onPreDrag: function(t) {
                    this._marker.options.autoPan && (T(this._panRequest),
                    this._panRequest = E(this._adjustPan.bind(this, t)))
                },
                _onDrag: function(t) {
                    var e = this._marker
                      , i = e._shadow
                      , n = ge(e._icon)
                      , o = e._map.layerPointToLatLng(n);
                    i && ve(i, n),
                    e._latlng = o,
                    t.latlng = o,
                    t.oldLatLng = this._oldLatLng,
                    e.fire("move", t).fire("drag", t)
                },
                _onDragEnd: function(t) {
                    T(this._panRequest),
                    delete this._oldLatLng,
                    this._marker.fire("moveend").fire("dragend", t)
                }
            })
              , Si = Ci.extend({
                options: {
                    icon: new Di,
                    interactive: !0,
                    keyboard: !0,
                    title: "",
                    alt: "",
                    zIndexOffset: 0,
                    opacity: 1,
                    riseOnHover: !1,
                    riseOffset: 250,
                    pane: "markerPane",
                    bubblingMouseEvents: !1,
                    draggable: !1,
                    autoPan: !1,
                    autoPanPadding: [50, 50],
                    autoPanSpeed: 10
                },
                initialize: function(t, e) {
                    p(this, e),
                    this._latlng = N(t)
                },
                onAdd: function(t) {
                    this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
                    this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
                    this._initIcon(),
                    this.update()
                },
                onRemove: function(t) {
                    this.dragging && this.dragging.enabled() && (this.options.draggable = !0,
                    this.dragging.removeHooks()),
                    delete this.dragging,
                    this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
                    this._removeIcon(),
                    this._removeShadow()
                },
                getEvents: function() {
                    return {
                        zoom: this.update,
                        viewreset: this.update
                    }
                },
                getLatLng: function() {
                    return this._latlng
                },
                setLatLng: function(t) {
                    var e = this._latlng;
                    return this._latlng = N(t),
                    this.update(),
                    this.fire("move", {
                        oldLatLng: e,
                        latlng: this._latlng
                    })
                },
                setZIndexOffset: function(t) {
                    return this.options.zIndexOffset = t,
                    this.update()
                },
                setIcon: function(t) {
                    return this.options.icon = t,
                    this._map && (this._initIcon(),
                    this.update()),
                    this._popup && this.bindPopup(this._popup, this._popup.options),
                    this
                },
                getElement: function() {
                    return this._icon
                },
                update: function() {
                    if (this._icon && this._map) {
                        var t = this._map.latLngToLayerPoint(this._latlng).round();
                        this._setPos(t)
                    }
                    return this
                },
                _initIcon: function() {
                    var t = this.options
                      , e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide")
                      , i = t.icon.createIcon(this._icon)
                      , n = !1;
                    i !== this._icon && (this._icon && this._removeIcon(),
                    n = !0,
                    t.title && (i.title = t.title),
                    "IMG" === i.tagName && (i.alt = t.alt || "")),
                    ue(i, e),
                    t.keyboard && (i.tabIndex = "0"),
                    this._icon = i,
                    t.riseOnHover && this.on({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    });
                    var o = t.icon.createShadow(this._shadow)
                      , s = !1;
                    o !== this._shadow && (this._removeShadow(),
                    s = !0),
                    o && (ue(o, e),
                    o.alt = ""),
                    this._shadow = o,
                    t.opacity < 1 && this._updateOpacity(),
                    n && this.getPane().appendChild(this._icon),
                    this._initInteraction(),
                    o && s && this.getPane("shadowPane").appendChild(this._shadow)
                },
                _removeIcon: function() {
                    this.options.riseOnHover && this.off({
                        mouseover: this._bringToFront,
                        mouseout: this._resetZIndex
                    }),
                    se(this._icon),
                    this.removeInteractiveTarget(this._icon),
                    this._icon = null
                },
                _removeShadow: function() {
                    this._shadow && se(this._shadow),
                    this._shadow = null
                },
                _setPos: function(t) {
                    ve(this._icon, t),
                    this._shadow && ve(this._shadow, t),
                    this._zIndex = t.y + this.options.zIndexOffset,
                    this._resetZIndex()
                },
                _updateZIndex: function(t) {
                    this._icon.style.zIndex = this._zIndex + t
                },
                _animateZoom: function(t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                    this._setPos(e)
                },
                _initInteraction: function() {
                    if (this.options.interactive && (ue(this._icon, "leaflet-interactive"),
                    this.addInteractiveTarget(this._icon),
                    Pi)) {
                        var t = this.options.draggable;
                        this.dragging && (t = this.dragging.enabled(),
                        this.dragging.disable()),
                        this.dragging = new Pi(this),
                        t && this.dragging.enable()
                    }
                },
                setOpacity: function(t) {
                    return this.options.opacity = t,
                    this._map && this._updateOpacity(),
                    this
                },
                _updateOpacity: function() {
                    var t = this.options.opacity;
                    fe(this._icon, t),
                    this._shadow && fe(this._shadow, t)
                },
                _bringToFront: function() {
                    this._updateZIndex(this.options.riseOffset)
                },
                _resetZIndex: function() {
                    this._updateZIndex(0)
                },
                _getPopupAnchor: function() {
                    return this.options.icon.options.popupAnchor
                },
                _getTooltipAnchor: function() {
                    return this.options.icon.options.tooltipAnchor
                }
            });
            var Oi = Ci.extend({
                options: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 3,
                    opacity: 1,
                    lineCap: "round",
                    lineJoin: "round",
                    dashArray: null,
                    dashOffset: null,
                    fill: !1,
                    fillColor: null,
                    fillOpacity: .2,
                    fillRule: "evenodd",
                    interactive: !0,
                    bubblingMouseEvents: !0
                },
                beforeAdd: function(t) {
                    this._renderer = t.getRenderer(this)
                },
                onAdd: function() {
                    this._renderer._initPath(this),
                    this._reset(),
                    this._renderer._addPath(this)
                },
                onRemove: function() {
                    this._renderer._removePath(this)
                },
                redraw: function() {
                    return this._map && this._renderer._updatePath(this),
                    this
                },
                setStyle: function(t) {
                    return p(this, t),
                    this._renderer && this._renderer._updateStyle(this),
                    this
                },
                bringToFront: function() {
                    return this._renderer && this._renderer._bringToFront(this),
                    this
                },
                bringToBack: function() {
                    return this._renderer && this._renderer._bringToBack(this),
                    this
                },
                getElement: function() {
                    return this._path
                },
                _reset: function() {
                    this._project(),
                    this._update()
                },
                _clickTolerance: function() {
                    return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
                }
            })
              , Ii = Oi.extend({
                options: {
                    fill: !0,
                    radius: 10
                },
                initialize: function(t, e) {
                    p(this, e),
                    this._latlng = N(t),
                    this._radius = this.options.radius
                },
                setLatLng: function(t) {
                    return this._latlng = N(t),
                    this.redraw(),
                    this.fire("move", {
                        latlng: this._latlng
                    })
                },
                getLatLng: function() {
                    return this._latlng
                },
                setRadius: function(t) {
                    return this.options.radius = this._radius = t,
                    this.redraw()
                },
                getRadius: function() {
                    return this._radius
                },
                setStyle: function(t) {
                    var e = t && t.radius || this._radius;
                    return Oi.prototype.setStyle.call(this, t),
                    this.setRadius(e),
                    this
                },
                _project: function() {
                    this._point = this._map.latLngToLayerPoint(this._latlng),
                    this._updateBounds()
                },
                _updateBounds: function() {
                    var t = this._radius
                      , e = this._radiusY || t
                      , i = this._clickTolerance()
                      , n = [t + i, e + i];
                    this._pxBounds = new A(this._point.subtract(n),this._point.add(n))
                },
                _update: function() {
                    this._map && this._updatePath()
                },
                _updatePath: function() {
                    this._renderer._updateCircle(this)
                },
                _empty: function() {
                    return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
                },
                _containsPoint: function(t) {
                    return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
                }
            });
            var Bi = Ii.extend({
                initialize: function(t, e, n) {
                    if ("number" == typeof e && (e = i({}, n, {
                        radius: e
                    })),
                    p(this, e),
                    this._latlng = N(t),
                    isNaN(this.options.radius))
                        throw new Error("Circle radius cannot be NaN");
                    this._mRadius = this.options.radius
                },
                setRadius: function(t) {
                    return this._mRadius = t,
                    this.redraw()
                },
                getRadius: function() {
                    return this._mRadius
                },
                getBounds: function() {
                    var t = [this._radius, this._radiusY || this._radius];
                    return new R(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))
                },
                setStyle: Oi.prototype.setStyle,
                _project: function() {
                    var t = this._latlng.lng
                      , e = this._latlng.lat
                      , i = this._map
                      , n = i.options.crs;
                    if (n.distance === W.distance) {
                        var o = Math.PI / 180
                          , s = this._mRadius / W.R / o
                          , r = i.project([e + s, t])
                          , a = i.project([e - s, t])
                          , l = r.add(a).divideBy(2)
                          , h = i.unproject(l).lat
                          , u = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(h * o)) / (Math.cos(e * o) * Math.cos(h * o))) / o;
                        (isNaN(u) || 0 === u) && (u = s / Math.cos(Math.PI / 180 * e)),
                        this._point = l.subtract(i.getPixelOrigin()),
                        this._radius = isNaN(u) ? 0 : l.x - i.project([h, t - u]).x,
                        this._radiusY = l.y - r.y
                    } else {
                        var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                        this._point = i.latLngToLayerPoint(this._latlng),
                        this._radius = this._point.x - i.latLngToLayerPoint(c).x
                    }
                    this._updateBounds()
                }
            });
            var Ai = Oi.extend({
                options: {
                    smoothFactor: 1,
                    noClip: !1
                },
                initialize: function(t, e) {
                    p(this, e),
                    this._setLatLngs(t)
                },
                getLatLngs: function() {
                    return this._latlngs
                },
                setLatLngs: function(t) {
                    return this._setLatLngs(t),
                    this.redraw()
                },
                isEmpty: function() {
                    return !this._latlngs.length
                },
                closestLayerPoint: function(t) {
                    for (var e, i, n = 1 / 0, o = null, s = pi, r = 0, a = this._parts.length; r < a; r++)
                        for (var l = this._parts[r], h = 1, u = l.length; h < u; h++) {
                            e = l[h - 1],
                            i = l[h];
                            var c = s(t, e, i, !0);
                            c < n && (n = c,
                            o = s(t, e, i))
                        }
                    return o && (o.distance = Math.sqrt(n)),
                    o
                },
                getCenter: function() {
                    if (!this._map)
                        throw new Error("Must add layer to map before using getCenter()");
                    var t, e, i, n, o, s, r, a = this._rings[0], l = a.length;
                    if (!l)
                        return null;
                    for (t = 0,
                    e = 0; t < l - 1; t++)
                        e += a[t].distanceTo(a[t + 1]) / 2;
                    if (0 === e)
                        return this._map.layerPointToLatLng(a[0]);
                    for (t = 0,
                    n = 0; t < l - 1; t++)
                        if (o = a[t],
                        s = a[t + 1],
                        i = o.distanceTo(s),
                        (n += i) > e)
                            return r = (n - e) / i,
                            this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
                },
                getBounds: function() {
                    return this._bounds
                },
                addLatLng: function(t, e) {
                    return e = e || this._defaultShape(),
                    t = N(t),
                    e.push(t),
                    this._bounds.extend(t),
                    this.redraw()
                },
                _setLatLngs: function(t) {
                    this._bounds = new R,
                    this._latlngs = this._convertLatLngs(t)
                },
                _defaultShape: function() {
                    return fi(this._latlngs) ? this._latlngs : this._latlngs[0]
                },
                _convertLatLngs: function(t) {
                    for (var e = [], i = fi(t), n = 0, o = t.length; n < o; n++)
                        i ? (e[n] = N(t[n]),
                        this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
                    return e
                },
                _project: function() {
                    var t = new A;
                    this._rings = [],
                    this._projectLatlngs(this._latlngs, this._rings, t);
                    var e = this._clickTolerance()
                      , i = new O(e,e);
                    this._bounds.isValid() && t.isValid() && (t.min._subtract(i),
                    t.max._add(i),
                    this._pxBounds = t)
                },
                _projectLatlngs: function(t, e, i) {
                    var n, o, s = t[0]instanceof j, r = t.length;
                    if (s) {
                        for (o = [],
                        n = 0; n < r; n++)
                            o[n] = this._map.latLngToLayerPoint(t[n]),
                            i.extend(o[n]);
                        e.push(o)
                    } else
                        for (n = 0; n < r; n++)
                            this._projectLatlngs(t[n], e, i)
                },
                _clipPoints: function() {
                    var t = this._renderer._bounds;
                    if (this._parts = [],
                    this._pxBounds && this._pxBounds.intersects(t))
                        if (this.options.noClip)
                            this._parts = this._rings;
                        else {
                            var e, i, n, o, s, r, a, l = this._parts;
                            for (e = 0,
                            n = 0,
                            o = this._rings.length; e < o; e++)
                                for (a = this._rings[e],
                                i = 0,
                                s = a.length; i < s - 1; i++)
                                    (r = hi(a[i], a[i + 1], t, i, !0)) && (l[n] = l[n] || [],
                                    l[n].push(r[0]),
                                    r[1] === a[i + 1] && i !== s - 2 || (l[n].push(r[1]),
                                    n++))
                        }
                },
                _simplifyPoints: function() {
                    for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
                        t[i] = ai(t[i], e)
                },
                _update: function() {
                    this._map && (this._clipPoints(),
                    this._simplifyPoints(),
                    this._updatePath())
                },
                _updatePath: function() {
                    this._renderer._updatePoly(this)
                },
                _containsPoint: function(t, e) {
                    var i, n, o, s, r, a, l = this._clickTolerance();
                    if (!this._pxBounds || !this._pxBounds.contains(t))
                        return !1;
                    for (i = 0,
                    s = this._parts.length; i < s; i++)
                        for (a = this._parts[i],
                        n = 0,
                        r = a.length,
                        o = r - 1; n < r; o = n++)
                            if ((e || 0 !== n) && li(t, a[o], a[n]) <= l)
                                return !0;
                    return !1
                }
            });
            Ai._flat = mi;
            var zi = Ai.extend({
                options: {
                    fill: !0
                },
                isEmpty: function() {
                    return !this._latlngs.length || !this._latlngs[0].length
                },
                getCenter: function() {
                    if (!this._map)
                        throw new Error("Must add layer to map before using getCenter()");
                    var t, e, i, n, o, s, r, a, l, h = this._rings[0], u = h.length;
                    if (!u)
                        return null;
                    for (s = r = a = 0,
                    t = 0,
                    e = u - 1; t < u; e = t++)
                        i = h[t],
                        n = h[e],
                        o = i.y * n.x - n.y * i.x,
                        r += (i.x + n.x) * o,
                        a += (i.y + n.y) * o,
                        s += 3 * o;
                    return l = 0 === s ? h[0] : [r / s, a / s],
                    this._map.layerPointToLatLng(l)
                },
                _convertLatLngs: function(t) {
                    var e = Ai.prototype._convertLatLngs.call(this, t)
                      , i = e.length;
                    return i >= 2 && e[0]instanceof j && e[0].equals(e[i - 1]) && e.pop(),
                    e
                },
                _setLatLngs: function(t) {
                    Ai.prototype._setLatLngs.call(this, t),
                    fi(this._latlngs) && (this._latlngs = [this._latlngs])
                },
                _defaultShape: function() {
                    return fi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
                },
                _clipPoints: function() {
                    var t = this._renderer._bounds
                      , e = this.options.weight
                      , i = new O(e,e);
                    if (t = new A(t.min.subtract(i),t.max.add(i)),
                    this._parts = [],
                    this._pxBounds && this._pxBounds.intersects(t))
                        if (this.options.noClip)
                            this._parts = this._rings;
                        else
                            for (var n, o = 0, s = this._rings.length; o < s; o++)
                                (n = vi(this._rings[o], t, !0)).length && this._parts.push(n)
                },
                _updatePath: function() {
                    this._renderer._updatePoly(this, !0)
                },
                _containsPoint: function(t) {
                    var e, i, n, o, s, r, a, l, h = !1;
                    if (!this._pxBounds || !this._pxBounds.contains(t))
                        return !1;
                    for (o = 0,
                    a = this._parts.length; o < a; o++)
                        for (e = this._parts[o],
                        s = 0,
                        l = e.length,
                        r = l - 1; s < l; r = s++)
                            i = e[s],
                            n = e[r],
                            i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (h = !h);
                    return h || Ai.prototype._containsPoint.call(this, t, !0)
                }
            });
            var Ri = Ti.extend({
                initialize: function(t, e) {
                    p(this, e),
                    this._layers = {},
                    t && this.addData(t)
                },
                addData: function(t) {
                    var e, i, n, o = v(t) ? t : t.features;
                    if (o) {
                        for (e = 0,
                        i = o.length; e < i; e++)
                            ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                        return this
                    }
                    var s = this.options;
                    if (s.filter && !s.filter(t))
                        return this;
                    var r = Hi(t, s);
                    return r ? (r.feature = Zi(t),
                    r.defaultOptions = r.options,
                    this.resetStyle(r),
                    s.onEachFeature && s.onEachFeature(t, r),
                    this.addLayer(r)) : this
                },
                resetStyle: function(t) {
                    return t.options = i({}, t.defaultOptions),
                    this._setLayerStyle(t, this.options.style),
                    this
                },
                setStyle: function(t) {
                    return this.eachLayer(function(e) {
                        this._setLayerStyle(e, t)
                    }, this)
                },
                _setLayerStyle: function(t, e) {
                    "function" == typeof e && (e = e(t.feature)),
                    t.setStyle && t.setStyle(e)
                }
            });
            function Hi(t, e) {
                var i, n, o, s, r = "Feature" === t.type ? t.geometry : t, a = r ? r.coordinates : null, l = [], h = e && e.pointToLayer, u = e && e.coordsToLatLng || ji;
                if (!a && !r)
                    return null;
                switch (r.type) {
                case "Point":
                    return i = u(a),
                    h ? h(t, i) : new Si(i);
                case "MultiPoint":
                    for (o = 0,
                    s = a.length; o < s; o++)
                        i = u(a[o]),
                        l.push(h ? h(t, i) : new Si(i));
                    return new Ti(l);
                case "LineString":
                case "MultiLineString":
                    return n = Ni(a, "LineString" === r.type ? 0 : 1, u),
                    new Ai(n,e);
                case "Polygon":
                case "MultiPolygon":
                    return n = Ni(a, "Polygon" === r.type ? 1 : 2, u),
                    new zi(n,e);
                case "GeometryCollection":
                    for (o = 0,
                    s = r.geometries.length; o < s; o++) {
                        var c = Hi({
                            geometry: r.geometries[o],
                            type: "Feature",
                            properties: t.properties
                        }, e);
                        c && l.push(c)
                    }
                    return new Ti(l);
                default:
                    throw new Error("Invalid GeoJSON object.")
                }
            }
            function ji(t) {
                return new j(t[1],t[0],t[2])
            }
            function Ni(t, e, i) {
                for (var n, o = [], s = 0, r = t.length; s < r; s++)
                    n = e ? Ni(t[s], e - 1, i) : (i || ji)(t[s]),
                    o.push(n);
                return o
            }
            function $i(t, e) {
                return e = "number" == typeof e ? e : 6,
                void 0 !== t.alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)]
            }
            function Wi(t, e, i, n) {
                for (var o = [], s = 0, r = t.length; s < r; s++)
                    o.push(e ? Wi(t[s], e - 1, i, n) : $i(t[s], n));
                return !e && i && o.push(o[0]),
                o
            }
            function Fi(t, e) {
                return t.feature ? i({}, t.feature, {
                    geometry: e
                }) : Zi(e)
            }
            function Zi(t) {
                return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                    type: "Feature",
                    properties: {},
                    geometry: t
                }
            }
            var qi = {
                toGeoJSON: function(t) {
                    return Fi(this, {
                        type: "Point",
                        coordinates: $i(this.getLatLng(), t)
                    })
                }
            };
            function Ui(t, e) {
                return new Ri(t,e)
            }
            Si.include(qi),
            Bi.include(qi),
            Ii.include(qi),
            Ai.include({
                toGeoJSON: function(t) {
                    var e = !fi(this._latlngs)
                      , i = Wi(this._latlngs, e ? 1 : 0, !1, t);
                    return Fi(this, {
                        type: (e ? "Multi" : "") + "LineString",
                        coordinates: i
                    })
                }
            }),
            zi.include({
                toGeoJSON: function(t) {
                    var e = !fi(this._latlngs)
                      , i = e && !fi(this._latlngs[0])
                      , n = Wi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
                    return e || (n = [n]),
                    Fi(this, {
                        type: (i ? "Multi" : "") + "Polygon",
                        coordinates: n
                    })
                }
            }),
            Ei.include({
                toMultiPoint: function(t) {
                    var e = [];
                    return this.eachLayer(function(i) {
                        e.push(i.toGeoJSON(t).geometry.coordinates)
                    }),
                    Fi(this, {
                        type: "MultiPoint",
                        coordinates: e
                    })
                },
                toGeoJSON: function(t) {
                    var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                    if ("MultiPoint" === e)
                        return this.toMultiPoint(t);
                    var i = "GeometryCollection" === e
                      , n = [];
                    return this.eachLayer(function(e) {
                        if (e.toGeoJSON) {
                            var o = e.toGeoJSON(t);
                            if (i)
                                n.push(o.geometry);
                            else {
                                var s = Zi(o);
                                "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
                            }
                        }
                    }),
                    i ? Fi(this, {
                        geometries: n,
                        type: "GeometryCollection"
                    }) : {
                        type: "FeatureCollection",
                        features: n
                    }
                }
            });
            var Vi = Ui
              , Gi = Ci.extend({
                options: {
                    opacity: 1,
                    alt: "",
                    interactive: !1,
                    crossOrigin: !1,
                    errorOverlayUrl: "",
                    zIndex: 1,
                    className: ""
                },
                initialize: function(t, e, i) {
                    this._url = t,
                    this._bounds = H(e),
                    p(this, i)
                },
                onAdd: function() {
                    this._image || (this._initImage(),
                    this.options.opacity < 1 && this._updateOpacity()),
                    this.options.interactive && (ue(this._image, "leaflet-interactive"),
                    this.addInteractiveTarget(this._image)),
                    this.getPane().appendChild(this._image),
                    this._reset()
                },
                onRemove: function() {
                    se(this._image),
                    this.options.interactive && this.removeInteractiveTarget(this._image)
                },
                setOpacity: function(t) {
                    return this.options.opacity = t,
                    this._image && this._updateOpacity(),
                    this
                },
                setStyle: function(t) {
                    return t.opacity && this.setOpacity(t.opacity),
                    this
                },
                bringToFront: function() {
                    return this._map && ae(this._image),
                    this
                },
                bringToBack: function() {
                    return this._map && le(this._image),
                    this
                },
                setUrl: function(t) {
                    return this._url = t,
                    this._image && (this._image.src = t),
                    this
                },
                setBounds: function(t) {
                    return this._bounds = H(t),
                    this._map && this._reset(),
                    this
                },
                getEvents: function() {
                    var t = {
                        zoom: this._reset,
                        viewreset: this._reset
                    };
                    return this._zoomAnimated && (t.zoomanim = this._animateZoom),
                    t
                },
                setZIndex: function(t) {
                    return this.options.zIndex = t,
                    this._updateZIndex(),
                    this
                },
                getBounds: function() {
                    return this._bounds
                },
                getElement: function() {
                    return this._image
                },
                _initImage: function() {
                    var t = "IMG" === this._url.tagName
                      , e = this._image = t ? this._url : oe("img");
                    ue(e, "leaflet-image-layer"),
                    this._zoomAnimated && ue(e, "leaflet-zoom-animated"),
                    this.options.className && ue(e, this.options.className),
                    e.onselectstart = h,
                    e.onmousemove = h,
                    e.onload = o(this.fire, this, "load"),
                    e.onerror = o(this._overlayOnError, this, "error"),
                    (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                    this.options.zIndex && this._updateZIndex(),
                    t ? this._url = e.src : (e.src = this._url,
                    e.alt = this.options.alt)
                },
                _animateZoom: function(t) {
                    var e = this._map.getZoomScale(t.zoom)
                      , i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                    _e(this._image, i, e)
                },
                _reset: function() {
                    var t = this._image
                      , e = new A(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast()))
                      , i = e.getSize();
                    ve(t, e.min),
                    t.style.width = i.x + "px",
                    t.style.height = i.y + "px"
                },
                _updateOpacity: function() {
                    fe(this._image, this.options.opacity)
                },
                _updateZIndex: function() {
                    this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
                },
                _overlayOnError: function() {
                    this.fire("error");
                    var t = this.options.errorOverlayUrl;
                    t && this._url !== t && (this._url = t,
                    this._image.src = t)
                }
            })
              , Yi = Gi.extend({
                options: {
                    autoplay: !0,
                    loop: !0
                },
                _initImage: function() {
                    var t = "VIDEO" === this._url.tagName
                      , e = this._image = t ? this._url : oe("video");
                    if (ue(e, "leaflet-image-layer"),
                    this._zoomAnimated && ue(e, "leaflet-zoom-animated"),
                    e.onselectstart = h,
                    e.onmousemove = h,
                    e.onloadeddata = o(this.fire, this, "load"),
                    t) {
                        for (var i = e.getElementsByTagName("source"), n = [], s = 0; s < i.length; s++)
                            n.push(i[s].src);
                        this._url = i.length > 0 ? n : [e.src]
                    } else {
                        v(this._url) || (this._url = [this._url]),
                        e.autoplay = !!this.options.autoplay,
                        e.loop = !!this.options.loop;
                        for (var r = 0; r < this._url.length; r++) {
                            var a = oe("source");
                            a.src = this._url[r],
                            e.appendChild(a)
                        }
                    }
                }
            });
            var Xi = Ci.extend({
                options: {
                    offset: [0, 7],
                    className: "",
                    pane: "popupPane"
                },
                initialize: function(t, e) {
                    p(this, t),
                    this._source = e
                },
                onAdd: function(t) {
                    this._zoomAnimated = t._zoomAnimated,
                    this._container || this._initLayout(),
                    t._fadeAnimated && fe(this._container, 0),
                    clearTimeout(this._removeTimeout),
                    this.getPane().appendChild(this._container),
                    this.update(),
                    t._fadeAnimated && fe(this._container, 1),
                    this.bringToFront()
                },
                onRemove: function(t) {
                    t._fadeAnimated ? (fe(this._container, 0),
                    this._removeTimeout = setTimeout(o(se, void 0, this._container), 200)) : se(this._container)
                },
                getLatLng: function() {
                    return this._latlng
                },
                setLatLng: function(t) {
                    return this._latlng = N(t),
                    this._map && (this._updatePosition(),
                    this._adjustPan()),
                    this
                },
                getContent: function() {
                    return this._content
                },
                setContent: function(t) {
                    return this._content = t,
                    this.update(),
                    this
                },
                getElement: function() {
                    return this._container
                },
                update: function() {
                    this._map && (this._container.style.visibility = "hidden",
                    this._updateContent(),
                    this._updateLayout(),
                    this._updatePosition(),
                    this._container.style.visibility = "",
                    this._adjustPan())
                },
                getEvents: function() {
                    var t = {
                        zoom: this._updatePosition,
                        viewreset: this._updatePosition
                    };
                    return this._zoomAnimated && (t.zoomanim = this._animateZoom),
                    t
                },
                isOpen: function() {
                    return !!this._map && this._map.hasLayer(this)
                },
                bringToFront: function() {
                    return this._map && ae(this._container),
                    this
                },
                bringToBack: function() {
                    return this._map && le(this._container),
                    this
                },
                _updateContent: function() {
                    if (this._content) {
                        var t = this._contentNode
                          , e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                        if ("string" == typeof e)
                            t.innerHTML = e;
                        else {
                            for (; t.hasChildNodes(); )
                                t.removeChild(t.firstChild);
                            t.appendChild(e)
                        }
                        this.fire("contentupdate")
                    }
                },
                _updatePosition: function() {
                    if (this._map) {
                        var t = this._map.latLngToLayerPoint(this._latlng)
                          , e = B(this.options.offset)
                          , i = this._getAnchor();
                        this._zoomAnimated ? ve(this._container, t.add(i)) : e = e.add(t).add(i);
                        var n = this._containerBottom = -e.y
                          , o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                        this._container.style.bottom = n + "px",
                        this._container.style.left = o + "px"
                    }
                },
                _getAnchor: function() {
                    return [0, 0]
                }
            })
              , Ki = Xi.extend({
                options: {
                    maxWidth: 300,
                    minWidth: 50,
                    maxHeight: null,
                    autoPan: !0,
                    autoPanPaddingTopLeft: null,
                    autoPanPaddingBottomRight: null,
                    autoPanPadding: [5, 5],
                    keepInView: !1,
                    closeButton: !0,
                    autoClose: !0,
                    closeOnEscapeKey: !0,
                    className: ""
                },
                openOn: function(t) {
                    return t.openPopup(this),
                    this
                },
                onAdd: function(t) {
                    Xi.prototype.onAdd.call(this, t),
                    t.fire("popupopen", {
                        popup: this
                    }),
                    this._source && (this._source.fire("popupopen", {
                        popup: this
                    }, !0),
                    this._source instanceof Oi || this._source.on("preclick", Oe))
                },
                onRemove: function(t) {
                    Xi.prototype.onRemove.call(this, t),
                    t.fire("popupclose", {
                        popup: this
                    }),
                    this._source && (this._source.fire("popupclose", {
                        popup: this
                    }, !0),
                    this._source instanceof Oi || this._source.off("preclick", Oe))
                },
                getEvents: function() {
                    var t = Xi.prototype.getEvents.call(this);
                    return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
                    this.options.keepInView && (t.moveend = this._adjustPan),
                    t
                },
                _close: function() {
                    this._map && this._map.closePopup(this)
                },
                _initLayout: function() {
                    var t = "leaflet-popup"
                      , e = this._container = oe("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")
                      , i = this._wrapper = oe("div", t + "-content-wrapper", e);
                    if (this._contentNode = oe("div", t + "-content", i),
                    Be(i),
                    Ie(this._contentNode),
                    Te(i, "contextmenu", Oe),
                    this._tipContainer = oe("div", t + "-tip-container", e),
                    this._tip = oe("div", t + "-tip", this._tipContainer),
                    this.options.closeButton) {
                        var n = this._closeButton = oe("a", t + "-close-button", e);
                        n.href = "#close",
                        n.innerHTML = "&#215;",
                        Te(n, "click", this._onCloseButtonClick, this)
                    }
                },
                _updateLayout: function() {
                    var t = this._contentNode
                      , e = t.style;
                    e.width = "",
                    e.whiteSpace = "nowrap";
                    var i = t.offsetWidth;
                    i = Math.min(i, this.options.maxWidth),
                    i = Math.max(i, this.options.minWidth),
                    e.width = i + 1 + "px",
                    e.whiteSpace = "",
                    e.height = "";
                    var n = t.offsetHeight
                      , o = this.options.maxHeight;
                    o && n > o ? (e.height = o + "px",
                    ue(t, "leaflet-popup-scrolled")) : ce(t, "leaflet-popup-scrolled"),
                    this._containerWidth = this._container.offsetWidth
                },
                _animateZoom: function(t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
                      , i = this._getAnchor();
                    ve(this._container, e.add(i))
                },
                _adjustPan: function() {
                    if (this.options.autoPan) {
                        this._map._panAnim && this._map._panAnim.stop();
                        var t = this._map
                          , e = parseInt(ne(this._container, "marginBottom"), 10) || 0
                          , i = this._container.offsetHeight + e
                          , n = this._containerWidth
                          , o = new O(this._containerLeft,-i - this._containerBottom);
                        o._add(ge(this._container));
                        var s = t.layerPointToContainerPoint(o)
                          , r = B(this.options.autoPanPadding)
                          , a = B(this.options.autoPanPaddingTopLeft || r)
                          , l = B(this.options.autoPanPaddingBottomRight || r)
                          , h = t.getSize()
                          , u = 0
                          , c = 0;
                        s.x + n + l.x > h.x && (u = s.x + n - h.x + l.x),
                        s.x - u - a.x < 0 && (u = s.x - a.x),
                        s.y + i + l.y > h.y && (c = s.y + i - h.y + l.y),
                        s.y - c - a.y < 0 && (c = s.y - a.y),
                        (u || c) && t.fire("autopanstart").panBy([u, c])
                    }
                },
                _onCloseButtonClick: function(t) {
                    this._close(),
                    ze(t)
                },
                _getAnchor: function() {
                    return B(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
                }
            });
            Ve.mergeOptions({
                closePopupOnClick: !0
            }),
            Ve.include({
                openPopup: function(t, e, i) {
                    return t instanceof Ki || (t = new Ki(i).setContent(t)),
                    e && t.setLatLng(e),
                    this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(),
                    this._popup = t,
                    this.addLayer(t))
                },
                closePopup: function(t) {
                    return t && t !== this._popup || (t = this._popup,
                    this._popup = null),
                    t && this.removeLayer(t),
                    this
                }
            }),
            Ci.include({
                bindPopup: function(t, e) {
                    return t instanceof Ki ? (p(t, e),
                    this._popup = t,
                    t._source = this) : (this._popup && !e || (this._popup = new Ki(e,this)),
                    this._popup.setContent(t)),
                    this._popupHandlersAdded || (this.on({
                        click: this._openPopup,
                        keypress: this._onKeyPress,
                        remove: this.closePopup,
                        move: this._movePopup
                    }),
                    this._popupHandlersAdded = !0),
                    this
                },
                unbindPopup: function() {
                    return this._popup && (this.off({
                        click: this._openPopup,
                        keypress: this._onKeyPress,
                        remove: this.closePopup,
                        move: this._movePopup
                    }),
                    this._popupHandlersAdded = !1,
                    this._popup = null),
                    this
                },
                openPopup: function(t, e) {
                    if (t instanceof Ci || (e = t,
                    t = this),
                    t instanceof Ti)
                        for (var i in this._layers) {
                            t = this._layers[i];
                            break
                        }
                    return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()),
                    this._popup && this._map && (this._popup._source = t,
                    this._popup.update(),
                    this._map.openPopup(this._popup, e)),
                    this
                },
                closePopup: function() {
                    return this._popup && this._popup._close(),
                    this
                },
                togglePopup: function(t) {
                    return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)),
                    this
                },
                isPopupOpen: function() {
                    return !!this._popup && this._popup.isOpen()
                },
                setPopupContent: function(t) {
                    return this._popup && this._popup.setContent(t),
                    this
                },
                getPopup: function() {
                    return this._popup
                },
                _openPopup: function(t) {
                    var e = t.layer || t.target;
                    this._popup && this._map && (ze(t),
                    e instanceof Oi ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
                },
                _movePopup: function(t) {
                    this._popup.setLatLng(t.latlng)
                },
                _onKeyPress: function(t) {
                    13 === t.originalEvent.keyCode && this._openPopup(t)
                }
            });
            var Qi = Xi.extend({
                options: {
                    pane: "tooltipPane",
                    offset: [0, 0],
                    direction: "auto",
                    permanent: !1,
                    sticky: !1,
                    interactive: !1,
                    opacity: .9
                },
                onAdd: function(t) {
                    Xi.prototype.onAdd.call(this, t),
                    this.setOpacity(this.options.opacity),
                    t.fire("tooltipopen", {
                        tooltip: this
                    }),
                    this._source && this._source.fire("tooltipopen", {
                        tooltip: this
                    }, !0)
                },
                onRemove: function(t) {
                    Xi.prototype.onRemove.call(this, t),
                    t.fire("tooltipclose", {
                        tooltip: this
                    }),
                    this._source && this._source.fire("tooltipclose", {
                        tooltip: this
                    }, !0)
                },
                getEvents: function() {
                    var t = Xi.prototype.getEvents.call(this);
                    return wt && !this.options.permanent && (t.preclick = this._close),
                    t
                },
                _close: function() {
                    this._map && this._map.closeTooltip(this)
                },
                _initLayout: function() {
                    var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                    this._contentNode = this._container = oe("div", t)
                },
                _updateLayout: function() {},
                _adjustPan: function() {},
                _setPosition: function(t) {
                    var e = this._map
                      , i = this._container
                      , n = e.latLngToContainerPoint(e.getCenter())
                      , o = e.layerPointToContainerPoint(t)
                      , s = this.options.direction
                      , r = i.offsetWidth
                      , a = i.offsetHeight
                      , l = B(this.options.offset)
                      , h = this._getAnchor();
                    "top" === s ? t = t.add(B(-r / 2 + l.x, -a + l.y + h.y, !0)) : "bottom" === s ? t = t.subtract(B(r / 2 - l.x, -l.y, !0)) : "center" === s ? t = t.subtract(B(r / 2 + l.x, a / 2 - h.y + l.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right",
                    t = t.add(B(l.x + h.x, h.y - a / 2 + l.y, !0))) : (s = "left",
                    t = t.subtract(B(r + h.x - l.x, a / 2 - h.y - l.y, !0))),
                    ce(i, "leaflet-tooltip-right"),
                    ce(i, "leaflet-tooltip-left"),
                    ce(i, "leaflet-tooltip-top"),
                    ce(i, "leaflet-tooltip-bottom"),
                    ue(i, "leaflet-tooltip-" + s),
                    ve(i, t)
                },
                _updatePosition: function() {
                    var t = this._map.latLngToLayerPoint(this._latlng);
                    this._setPosition(t)
                },
                setOpacity: function(t) {
                    this.options.opacity = t,
                    this._container && fe(this._container, t)
                },
                _animateZoom: function(t) {
                    var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                    this._setPosition(e)
                },
                _getAnchor: function() {
                    return B(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
                }
            });
            Ve.include({
                openTooltip: function(t, e, i) {
                    return t instanceof Qi || (t = new Qi(i).setContent(t)),
                    e && t.setLatLng(e),
                    this.hasLayer(t) ? this : this.addLayer(t)
                },
                closeTooltip: function(t) {
                    return t && this.removeLayer(t),
                    this
                }
            }),
            Ci.include({
                bindTooltip: function(t, e) {
                    return t instanceof Qi ? (p(t, e),
                    this._tooltip = t,
                    t._source = this) : (this._tooltip && !e || (this._tooltip = new Qi(e,this)),
                    this._tooltip.setContent(t)),
                    this._initTooltipInteractions(),
                    this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
                    this
                },
                unbindTooltip: function() {
                    return this._tooltip && (this._initTooltipInteractions(!0),
                    this.closeTooltip(),
                    this._tooltip = null),
                    this
                },
                _initTooltipInteractions: function(t) {
                    if (t || !this._tooltipHandlersAdded) {
                        var e = t ? "off" : "on"
                          , i = {
                            remove: this.closeTooltip,
                            move: this._moveTooltip
                        };
                        this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip,
                        i.mouseout = this.closeTooltip,
                        this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
                        wt && (i.click = this._openTooltip)),
                        this[e](i),
                        this._tooltipHandlersAdded = !t
                    }
                },
                openTooltip: function(t, e) {
                    if (t instanceof Ci || (e = t,
                    t = this),
                    t instanceof Ti)
                        for (var i in this._layers) {
                            t = this._layers[i];
                            break
                        }
                    return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()),
                    this._tooltip && this._map && (this._tooltip._source = t,
                    this._tooltip.update(),
                    this._map.openTooltip(this._tooltip, e),
                    this._tooltip.options.interactive && this._tooltip._container && (ue(this._tooltip._container, "leaflet-clickable"),
                    this.addInteractiveTarget(this._tooltip._container))),
                    this
                },
                closeTooltip: function() {
                    return this._tooltip && (this._tooltip._close(),
                    this._tooltip.options.interactive && this._tooltip._container && (ce(this._tooltip._container, "leaflet-clickable"),
                    this.removeInteractiveTarget(this._tooltip._container))),
                    this
                },
                toggleTooltip: function(t) {
                    return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
                    this
                },
                isTooltipOpen: function() {
                    return this._tooltip.isOpen()
                },
                setTooltipContent: function(t) {
                    return this._tooltip && this._tooltip.setContent(t),
                    this
                },
                getTooltip: function() {
                    return this._tooltip
                },
                _openTooltip: function(t) {
                    var e = t.layer || t.target;
                    this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
                },
                _moveTooltip: function(t) {
                    var e, i, n = t.latlng;
                    this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent),
                    i = this._map.containerPointToLayerPoint(e),
                    n = this._map.layerPointToLatLng(i)),
                    this._tooltip.setLatLng(n)
                }
            });
            var Ji = Mi.extend({
                options: {
                    iconSize: [12, 12],
                    html: !1,
                    bgPos: null,
                    className: "leaflet-div-icon"
                },
                createIcon: function(t) {
                    var e = t && "DIV" === t.tagName ? t : document.createElement("div")
                      , i = this.options;
                    if (e.innerHTML = !1 !== i.html ? i.html : "",
                    i.bgPos) {
                        var n = B(i.bgPos);
                        e.style.backgroundPosition = -n.x + "px " + -n.y + "px"
                    }
                    return this._setIconStyles(e, "icon"),
                    e
                },
                createShadow: function() {
                    return null
                }
            });
            Mi.Default = Di;
            var tn = Ci.extend({
                options: {
                    tileSize: 256,
                    opacity: 1,
                    updateWhenIdle: _t,
                    updateWhenZooming: !0,
                    updateInterval: 200,
                    zIndex: 1,
                    bounds: null,
                    minZoom: 0,
                    maxZoom: void 0,
                    maxNativeZoom: void 0,
                    minNativeZoom: void 0,
                    noWrap: !1,
                    pane: "tilePane",
                    className: "",
                    keepBuffer: 2
                },
                initialize: function(t) {
                    p(this, t)
                },
                onAdd: function() {
                    this._initContainer(),
                    this._levels = {},
                    this._tiles = {},
                    this._resetView(),
                    this._update()
                },
                beforeAdd: function(t) {
                    t._addZoomLimit(this)
                },
                onRemove: function(t) {
                    this._removeAllTiles(),
                    se(this._container),
                    t._removeZoomLimit(this),
                    this._container = null,
                    this._tileZoom = void 0
                },
                bringToFront: function() {
                    return this._map && (ae(this._container),
                    this._setAutoZIndex(Math.max)),
                    this
                },
                bringToBack: function() {
                    return this._map && (le(this._container),
                    this._setAutoZIndex(Math.min)),
                    this
                },
                getContainer: function() {
                    return this._container
                },
                setOpacity: function(t) {
                    return this.options.opacity = t,
                    this._updateOpacity(),
                    this
                },
                setZIndex: function(t) {
                    return this.options.zIndex = t,
                    this._updateZIndex(),
                    this
                },
                isLoading: function() {
                    return this._loading
                },
                redraw: function() {
                    return this._map && (this._removeAllTiles(),
                    this._update()),
                    this
                },
                getEvents: function() {
                    var t = {
                        viewprereset: this._invalidateAll,
                        viewreset: this._resetView,
                        zoom: this._resetView,
                        moveend: this._onMoveEnd
                    };
                    return this.options.updateWhenIdle || (this._onMove || (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)),
                    t.move = this._onMove),
                    this._zoomAnimated && (t.zoomanim = this._animateZoom),
                    t
                },
                createTile: function() {
                    return document.createElement("div")
                },
                getTileSize: function() {
                    var t = this.options.tileSize;
                    return t instanceof O ? t : new O(t,t)
                },
                _updateZIndex: function() {
                    this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
                },
                _setAutoZIndex: function(t) {
                    for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++)
                        e = i[o].style.zIndex,
                        i[o] !== this._container && e && (n = t(n, +e));
                    isFinite(n) && (this.options.zIndex = n + t(-1, 1),
                    this._updateZIndex())
                },
                _updateOpacity: function() {
                    if (this._map && !Q) {
                        fe(this._container, this.options.opacity);
                        var t = +new Date
                          , e = !1
                          , i = !1;
                        for (var n in this._tiles) {
                            var o = this._tiles[n];
                            if (o.current && o.loaded) {
                                var s = Math.min(1, (t - o.loaded) / 200);
                                fe(o.el, s),
                                s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o),
                                o.active = !0)
                            }
                        }
                        i && !this._noPrune && this._pruneTiles(),
                        e && (T(this._fadeFrame),
                        this._fadeFrame = E(this._updateOpacity, this))
                    }
                },
                _onOpaqueTile: h,
                _initContainer: function() {
                    this._container || (this._container = oe("div", "leaflet-layer " + (this.options.className || "")),
                    this._updateZIndex(),
                    this.options.opacity < 1 && this._updateOpacity(),
                    this.getPane().appendChild(this._container))
                },
                _updateLevels: function() {
                    var t = this._tileZoom
                      , e = this.options.maxZoom;
                    if (void 0 !== t) {
                        for (var i in this._levels)
                            this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i),
                            this._onUpdateLevel(i)) : (se(this._levels[i].el),
                            this._removeTilesAtZoom(i),
                            this._onRemoveLevel(i),
                            delete this._levels[i]);
                        var n = this._levels[t]
                          , o = this._map;
                        return n || ((n = this._levels[t] = {}).el = oe("div", "leaflet-tile-container leaflet-zoom-animated", this._container),
                        n.el.style.zIndex = e,
                        n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(),
                        n.zoom = t,
                        this._setZoomTransform(n, o.getCenter(), o.getZoom()),
                        h(n.el.offsetWidth),
                        this._onCreateLevel(n)),
                        this._level = n,
                        n
                    }
                },
                _onUpdateLevel: h,
                _onRemoveLevel: h,
                _onCreateLevel: h,
                _pruneTiles: function() {
                    if (this._map) {
                        var t, e, i = this._map.getZoom();
                        if (i > this.options.maxZoom || i < this.options.minZoom)
                            this._removeAllTiles();
                        else {
                            for (t in this._tiles)
                                (e = this._tiles[t]).retain = e.current;
                            for (t in this._tiles)
                                if ((e = this._tiles[t]).current && !e.active) {
                                    var n = e.coords;
                                    this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                                }
                            for (t in this._tiles)
                                this._tiles[t].retain || this._removeTile(t)
                        }
                    }
                },
                _removeTilesAtZoom: function(t) {
                    for (var e in this._tiles)
                        this._tiles[e].coords.z === t && this._removeTile(e)
                },
                _removeAllTiles: function() {
                    for (var t in this._tiles)
                        this._removeTile(t)
                },
                _invalidateAll: function() {
                    for (var t in this._levels)
                        se(this._levels[t].el),
                        this._onRemoveLevel(t),
                        delete this._levels[t];
                    this._removeAllTiles(),
                    this._tileZoom = void 0
                },
                _retainParent: function(t, e, i, n) {
                    var o = Math.floor(t / 2)
                      , s = Math.floor(e / 2)
                      , r = i - 1
                      , a = new O(+o,+s);
                    a.z = +r;
                    var l = this._tileCoordsToKey(a)
                      , h = this._tiles[l];
                    return h && h.active ? (h.retain = !0,
                    !0) : (h && h.loaded && (h.retain = !0),
                    r > n && this._retainParent(o, s, r, n))
                },
                _retainChildren: function(t, e, i, n) {
                    for (var o = 2 * t; o < 2 * t + 2; o++)
                        for (var s = 2 * e; s < 2 * e + 2; s++) {
                            var r = new O(o,s);
                            r.z = i + 1;
                            var a = this._tileCoordsToKey(r)
                              , l = this._tiles[a];
                            l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0),
                            i + 1 < n && this._retainChildren(o, s, i + 1, n))
                        }
                },
                _resetView: function(t) {
                    var e = t && (t.pinch || t.flyTo);
                    this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
                },
                _animateZoom: function(t) {
                    this._setView(t.center, t.zoom, !0, t.noUpdate)
                },
                _clampZoom: function(t) {
                    var e = this.options;
                    return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
                },
                _setView: function(t, e, i, n) {
                    var o = this._clampZoom(Math.round(e));
                    (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
                    var s = this.options.updateWhenZooming && o !== this._tileZoom;
                    n && !s || (this._tileZoom = o,
                    this._abortLoading && this._abortLoading(),
                    this._updateLevels(),
                    this._resetGrid(),
                    void 0 !== o && this._update(t),
                    i || this._pruneTiles(),
                    this._noPrune = !!i),
                    this._setZoomTransforms(t, e)
                },
                _setZoomTransforms: function(t, e) {
                    for (var i in this._levels)
                        this._setZoomTransform(this._levels[i], t, e)
                },
                _setZoomTransform: function(t, e, i) {
                    var n = this._map.getZoomScale(i, t.zoom)
                      , o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                    mt ? _e(t.el, o, n) : ve(t.el, o)
                },
                _resetGrid: function() {
                    var t = this._map
                      , e = t.options.crs
                      , i = this._tileSize = this.getTileSize()
                      , n = this._tileZoom
                      , o = this._map.getPixelWorldBounds(this._tileZoom);
                    o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
                    this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)],
                    this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
                },
                _onMoveEnd: function() {
                    this._map && !this._map._animatingZoom && this._update()
                },
                _getTiledPixelBounds: function(t) {
                    var e = this._map
                      , i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom()
                      , n = e.getZoomScale(i, this._tileZoom)
                      , o = e.project(t, this._tileZoom).floor()
                      , s = e.getSize().divideBy(2 * n);
                    return new A(o.subtract(s),o.add(s))
                },
                _update: function(t) {
                    var e = this._map;
                    if (e) {
                        var i = this._clampZoom(e.getZoom());
                        if (void 0 === t && (t = e.getCenter()),
                        void 0 !== this._tileZoom) {
                            var n = this._getTiledPixelBounds(t)
                              , o = this._pxBoundsToTileRange(n)
                              , s = o.getCenter()
                              , r = []
                              , a = this.options.keepBuffer
                              , l = new A(o.getBottomLeft().subtract([a, -a]),o.getTopRight().add([a, -a]));
                            if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                                throw new Error("Attempted to load an infinite number of tiles");
                            for (var h in this._tiles) {
                                var u = this._tiles[h].coords;
                                u.z === this._tileZoom && l.contains(new O(u.x,u.y)) || (this._tiles[h].current = !1)
                            }
                            if (Math.abs(i - this._tileZoom) > 1)
                                this._setView(t, i);
                            else {
                                for (var c = o.min.y; c <= o.max.y; c++)
                                    for (var d = o.min.x; d <= o.max.x; d++) {
                                        var p = new O(d,c);
                                        if (p.z = this._tileZoom,
                                        this._isValidTile(p)) {
                                            var f = this._tiles[this._tileCoordsToKey(p)];
                                            f ? f.current = !0 : r.push(p)
                                        }
                                    }
                                if (r.sort(function(t, e) {
                                    return t.distanceTo(s) - e.distanceTo(s)
                                }),
                                0 !== r.length) {
                                    this._loading || (this._loading = !0,
                                    this.fire("loading"));
                                    var m = document.createDocumentFragment();
                                    for (d = 0; d < r.length; d++)
                                        this._addTile(r[d], m);
                                    this._level.el.appendChild(m)
                                }
                            }
                        }
                    }
                },
                _isValidTile: function(t) {
                    var e = this._map.options.crs;
                    if (!e.infinite) {
                        var i = this._globalTileRange;
                        if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                            return !1
                    }
                    if (!this.options.bounds)
                        return !0;
                    var n = this._tileCoordsToBounds(t);
                    return H(this.options.bounds).overlaps(n)
                },
                _keyToBounds: function(t) {
                    return this._tileCoordsToBounds(this._keyToTileCoords(t))
                },
                _tileCoordsToNwSe: function(t) {
                    var e = this._map
                      , i = this.getTileSize()
                      , n = t.scaleBy(i)
                      , o = n.add(i)
                      , s = e.unproject(n, t.z)
                      , r = e.unproject(o, t.z);
                    return [s, r]
                },
                _tileCoordsToBounds: function(t) {
                    var e = this._tileCoordsToNwSe(t)
                      , i = new R(e[0],e[1]);
                    return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)),
                    i
                },
                _tileCoordsToKey: function(t) {
                    return t.x + ":" + t.y + ":" + t.z
                },
                _keyToTileCoords: function(t) {
                    var e = t.split(":")
                      , i = new O(+e[0],+e[1]);
                    return i.z = +e[2],
                    i
                },
                _removeTile: function(t) {
                    var e = this._tiles[t];
                    e && (se(e.el),
                    delete this._tiles[t],
                    this.fire("tileunload", {
                        tile: e.el,
                        coords: this._keyToTileCoords(t)
                    }))
                },
                _initTile: function(t) {
                    ue(t, "leaflet-tile");
                    var e = this.getTileSize();
                    t.style.width = e.x + "px",
                    t.style.height = e.y + "px",
                    t.onselectstart = h,
                    t.onmousemove = h,
                    Q && this.options.opacity < 1 && fe(t, this.options.opacity),
                    et && !it && (t.style.WebkitBackfaceVisibility = "hidden")
                },
                _addTile: function(t, e) {
                    var i = this._getTilePos(t)
                      , n = this._tileCoordsToKey(t)
                      , s = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));
                    this._initTile(s),
                    this.createTile.length < 2 && E(o(this._tileReady, this, t, null, s)),
                    ve(s, i),
                    this._tiles[n] = {
                        el: s,
                        coords: t,
                        current: !0
                    },
                    e.appendChild(s),
                    this.fire("tileloadstart", {
                        tile: s,
                        coords: t
                    })
                },
                _tileReady: function(t, e, i) {
                    e && this.fire("tileerror", {
                        error: e,
                        tile: i,
                        coords: t
                    });
                    var n = this._tileCoordsToKey(t);
                    (i = this._tiles[n]) && (i.loaded = +new Date,
                    this._map._fadeAnimated ? (fe(i.el, 0),
                    T(this._fadeFrame),
                    this._fadeFrame = E(this._updateOpacity, this)) : (i.active = !0,
                    this._pruneTiles()),
                    e || (ue(i.el, "leaflet-tile-loaded"),
                    this.fire("tileload", {
                        tile: i.el,
                        coords: t
                    })),
                    this._noTilesToLoad() && (this._loading = !1,
                    this.fire("load"),
                    Q || !this._map._fadeAnimated ? E(this._pruneTiles, this) : setTimeout(o(this._pruneTiles, this), 250)))
                },
                _getTilePos: function(t) {
                    return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
                },
                _wrapCoords: function(t) {
                    var e = new O(this._wrapX ? l(t.x, this._wrapX) : t.x,this._wrapY ? l(t.y, this._wrapY) : t.y);
                    return e.z = t.z,
                    e
                },
                _pxBoundsToTileRange: function(t) {
                    var e = this.getTileSize();
                    return new A(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1, 1]))
                },
                _noTilesToLoad: function() {
                    for (var t in this._tiles)
                        if (!this._tiles[t].loaded)
                            return !1;
                    return !0
                }
            });
            var en = tn.extend({
                options: {
                    minZoom: 0,
                    maxZoom: 18,
                    subdomains: "abc",
                    errorTileUrl: "",
                    zoomOffset: 0,
                    tms: !1,
                    zoomReverse: !1,
                    detectRetina: !1,
                    crossOrigin: !1
                },
                initialize: function(t, e) {
                    this._url = t,
                    (e = p(this, e)).detectRetina && kt && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2),
                    e.zoomReverse ? (e.zoomOffset--,
                    e.minZoom++) : (e.zoomOffset++,
                    e.maxZoom--),
                    e.minZoom = Math.max(0, e.minZoom)),
                    "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
                    et || this.on("tileunload", this._onTileRemove)
                },
                setUrl: function(t, e) {
                    return this._url === t && void 0 === e && (e = !0),
                    this._url = t,
                    e || this.redraw(),
                    this
                },
                createTile: function(t, e) {
                    var i = document.createElement("img");
                    return Te(i, "load", o(this._tileOnLoad, this, e, i)),
                    Te(i, "error", o(this._tileOnError, this, e, i)),
                    (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                    i.alt = "",
                    i.setAttribute("role", "presentation"),
                    i.src = this.getTileUrl(t),
                    i
                },
                getTileUrl: function(t) {
                    var e = {
                        r: kt ? "@2x" : "",
                        s: this._getSubdomain(t),
                        x: t.x,
                        y: t.y,
                        z: this._getZoomForUrl()
                    };
                    if (this._map && !this._map.options.crs.infinite) {
                        var n = this._globalTileRange.max.y - t.y;
                        this.options.tms && (e.y = n),
                        e["-y"] = n
                    }
                    return _(this._url, i(e, this.options))
                },
                _tileOnLoad: function(t, e) {
                    Q ? setTimeout(o(t, this, null, e), 0) : t(null, e)
                },
                _tileOnError: function(t, e, i) {
                    var n = this.options.errorTileUrl;
                    n && e.getAttribute("src") !== n && (e.src = n),
                    t(i, e)
                },
                _onTileRemove: function(t) {
                    t.tile.onload = null
                },
                _getZoomForUrl: function() {
                    var t = this._tileZoom
                      , e = this.options.maxZoom
                      , i = this.options.zoomReverse
                      , n = this.options.zoomOffset;
                    return i && (t = e - t),
                    t + n
                },
                _getSubdomain: function(t) {
                    var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                    return this.options.subdomains[e]
                },
                _abortLoading: function() {
                    var t, e;
                    for (t in this._tiles)
                        this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = h,
                        e.onerror = h,
                        e.complete || (e.src = y,
                        se(e),
                        delete this._tiles[t]))
                },
                _removeTile: function(t) {
                    var e = this._tiles[t];
                    if (e)
                        return ot || e.el.setAttribute("src", y),
                        tn.prototype._removeTile.call(this, t)
                },
                _tileReady: function(t, e, i) {
                    if (this._map && (!i || i.getAttribute("src") !== y))
                        return tn.prototype._tileReady.call(this, t, e, i)
                }
            });
            function nn(t, e) {
                return new en(t,e)
            }
            var on = en.extend({
                defaultWmsParams: {
                    service: "WMS",
                    request: "GetMap",
                    layers: "",
                    styles: "",
                    format: "image/jpeg",
                    transparent: !1,
                    version: "1.1.1"
                },
                options: {
                    crs: null,
                    uppercase: !1
                },
                initialize: function(t, e) {
                    this._url = t;
                    var n = i({}, this.defaultWmsParams);
                    for (var o in e)
                        o in this.options || (n[o] = e[o]);
                    var s = (e = p(this, e)).detectRetina && kt ? 2 : 1
                      , r = this.getTileSize();
                    n.width = r.x * s,
                    n.height = r.y * s,
                    this.wmsParams = n
                },
                onAdd: function(t) {
                    this._crs = this.options.crs || t.options.crs,
                    this._wmsVersion = parseFloat(this.wmsParams.version);
                    var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                    this.wmsParams[e] = this._crs.code,
                    en.prototype.onAdd.call(this, t)
                },
                getTileUrl: function(t) {
                    var e = this._tileCoordsToNwSe(t)
                      , i = this._crs
                      , n = z(i.project(e[0]), i.project(e[1]))
                      , o = n.min
                      , s = n.max
                      , r = (this._wmsVersion >= 1.3 && this._crs === xi ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(",")
                      , a = en.prototype.getTileUrl.call(this, t);
                    return a + f(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
                },
                setParams: function(t, e) {
                    return i(this.wmsParams, t),
                    e || this.redraw(),
                    this
                }
            });
            en.WMS = on,
            nn.wms = function(t, e) {
                return new on(t,e)
            }
            ;
            var sn = Ci.extend({
                options: {
                    padding: .1,
                    tolerance: 0
                },
                initialize: function(t) {
                    p(this, t),
                    r(this),
                    this._layers = this._layers || {}
                },
                onAdd: function() {
                    this._container || (this._initContainer(),
                    this._zoomAnimated && ue(this._container, "leaflet-zoom-animated")),
                    this.getPane().appendChild(this._container),
                    this._update(),
                    this.on("update", this._updatePaths, this)
                },
                onRemove: function() {
                    this.off("update", this._updatePaths, this),
                    this._destroyContainer()
                },
                getEvents: function() {
                    var t = {
                        viewreset: this._reset,
                        zoom: this._onZoom,
                        moveend: this._update,
                        zoomend: this._onZoomEnd
                    };
                    return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
                    t
                },
                _onAnimZoom: function(t) {
                    this._updateTransform(t.center, t.zoom)
                },
                _onZoom: function() {
                    this._updateTransform(this._map.getCenter(), this._map.getZoom())
                },
                _updateTransform: function(t, e) {
                    var i = this._map.getZoomScale(e, this._zoom)
                      , n = ge(this._container)
                      , o = this._map.getSize().multiplyBy(.5 + this.options.padding)
                      , s = this._map.project(this._center, e)
                      , r = this._map.project(t, e)
                      , a = r.subtract(s)
                      , l = o.multiplyBy(-i).add(n).add(o).subtract(a);
                    mt ? _e(this._container, l, i) : ve(this._container, l)
                },
                _reset: function() {
                    for (var t in this._update(),
                    this._updateTransform(this._center, this._zoom),
                    this._layers)
                        this._layers[t]._reset()
                },
                _onZoomEnd: function() {
                    for (var t in this._layers)
                        this._layers[t]._project()
                },
                _updatePaths: function() {
                    for (var t in this._layers)
                        this._layers[t]._update()
                },
                _update: function() {
                    var t = this.options.padding
                      , e = this._map.getSize()
                      , i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                    this._bounds = new A(i,i.add(e.multiplyBy(1 + 2 * t)).round()),
                    this._center = this._map.getCenter(),
                    this._zoom = this._map.getZoom()
                }
            })
              , rn = sn.extend({
                getEvents: function() {
                    var t = sn.prototype.getEvents.call(this);
                    return t.viewprereset = this._onViewPreReset,
                    t
                },
                _onViewPreReset: function() {
                    this._postponeUpdatePaths = !0
                },
                onAdd: function() {
                    sn.prototype.onAdd.call(this),
                    this._draw()
                },
                _initContainer: function() {
                    var t = this._container = document.createElement("canvas");
                    Te(t, "mousemove", a(this._onMouseMove, 32, this), this),
                    Te(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
                    Te(t, "mouseout", this._handleMouseOut, this),
                    this._ctx = t.getContext("2d")
                },
                _destroyContainer: function() {
                    T(this._redrawRequest),
                    delete this._ctx,
                    se(this._container),
                    De(this._container),
                    delete this._container
                },
                _updatePaths: function() {
                    if (!this._postponeUpdatePaths) {
                        for (var t in this._redrawBounds = null,
                        this._layers)
                            this._layers[t]._update();
                        this._redraw()
                    }
                },
                _update: function() {
                    if (!this._map._animatingZoom || !this._bounds) {
                        sn.prototype._update.call(this);
                        var t = this._bounds
                          , e = this._container
                          , i = t.getSize()
                          , n = kt ? 2 : 1;
                        ve(e, t.min),
                        e.width = n * i.x,
                        e.height = n * i.y,
                        e.style.width = i.x + "px",
                        e.style.height = i.y + "px",
                        kt && this._ctx.scale(2, 2),
                        this._ctx.translate(-t.min.x, -t.min.y),
                        this.fire("update")
                    }
                },
                _reset: function() {
                    sn.prototype._reset.call(this),
                    this._postponeUpdatePaths && (this._postponeUpdatePaths = !1,
                    this._updatePaths())
                },
                _initPath: function(t) {
                    this._updateDashArray(t),
                    this._layers[r(t)] = t;
                    var e = t._order = {
                        layer: t,
                        prev: this._drawLast,
                        next: null
                    };
                    this._drawLast && (this._drawLast.next = e),
                    this._drawLast = e,
                    this._drawFirst = this._drawFirst || this._drawLast
                },
                _addPath: function(t) {
                    this._requestRedraw(t)
                },
                _removePath: function(t) {
                    var e = t._order
                      , i = e.next
                      , n = e.prev;
                    i ? i.prev = n : this._drawLast = n,
                    n ? n.next = i : this._drawFirst = i,
                    delete t._order,
                    delete this._layers[r(t)],
                    this._requestRedraw(t)
                },
                _updatePath: function(t) {
                    this._extendRedrawBounds(t),
                    t._project(),
                    t._update(),
                    this._requestRedraw(t)
                },
                _updateStyle: function(t) {
                    this._updateDashArray(t),
                    this._requestRedraw(t)
                },
                _updateDashArray: function(t) {
                    if ("string" == typeof t.options.dashArray) {
                        var e, i, n = t.options.dashArray.split(/[, ]+/), o = [];
                        for (i = 0; i < n.length; i++) {
                            if (e = Number(n[i]),
                            isNaN(e))
                                return;
                            o.push(e)
                        }
                        t.options._dashArray = o
                    } else
                        t.options._dashArray = t.options.dashArray
                },
                _requestRedraw: function(t) {
                    this._map && (this._extendRedrawBounds(t),
                    this._redrawRequest = this._redrawRequest || E(this._redraw, this))
                },
                _extendRedrawBounds: function(t) {
                    if (t._pxBounds) {
                        var e = (t.options.weight || 0) + 1;
                        this._redrawBounds = this._redrawBounds || new A,
                        this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                        this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                    }
                },
                _redraw: function() {
                    this._redrawRequest = null,
                    this._redrawBounds && (this._redrawBounds.min._floor(),
                    this._redrawBounds.max._ceil()),
                    this._clear(),
                    this._draw(),
                    this._redrawBounds = null
                },
                _clear: function() {
                    var t = this._redrawBounds;
                    if (t) {
                        var e = t.getSize();
                        this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                    } else
                        this._ctx.clearRect(0, 0, this._container.width, this._container.height)
                },
                _draw: function() {
                    var t, e = this._redrawBounds;
                    if (this._ctx.save(),
                    e) {
                        var i = e.getSize();
                        this._ctx.beginPath(),
                        this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
                        this._ctx.clip()
                    }
                    this._drawing = !0;
                    for (var n = this._drawFirst; n; n = n.next)
                        t = n.layer,
                        (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                    this._drawing = !1,
                    this._ctx.restore()
                },
                _updatePoly: function(t, e) {
                    if (this._drawing) {
                        var i, n, o, s, r = t._parts, a = r.length, l = this._ctx;
                        if (a) {
                            for (l.beginPath(),
                            i = 0; i < a; i++) {
                                for (n = 0,
                                o = r[i].length; n < o; n++)
                                    s = r[i][n],
                                    l[n ? "lineTo" : "moveTo"](s.x, s.y);
                                e && l.closePath()
                            }
                            this._fillStroke(l, t)
                        }
                    }
                },
                _updateCircle: function(t) {
                    if (this._drawing && !t._empty()) {
                        var e = t._point
                          , i = this._ctx
                          , n = Math.max(Math.round(t._radius), 1)
                          , o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                        1 !== o && (i.save(),
                        i.scale(1, o)),
                        i.beginPath(),
                        i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
                        1 !== o && i.restore(),
                        this._fillStroke(i, t)
                    }
                },
                _fillStroke: function(t, e) {
                    var i = e.options;
                    i.fill && (t.globalAlpha = i.fillOpacity,
                    t.fillStyle = i.fillColor || i.color,
                    t.fill(i.fillRule || "evenodd")),
                    i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []),
                    t.globalAlpha = i.opacity,
                    t.lineWidth = i.weight,
                    t.strokeStyle = i.color,
                    t.lineCap = i.lineCap,
                    t.lineJoin = i.lineJoin,
                    t.stroke())
                },
                _onClick: function(t) {
                    for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
                        (e = o.layer).options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
                    i && (We(t),
                    this._fireEvent([i], t))
                },
                _onMouseMove: function(t) {
                    if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                        var e = this._map.mouseEventToLayerPoint(t);
                        this._handleMouseHover(t, e)
                    }
                },
                _handleMouseOut: function(t) {
                    var e = this._hoveredLayer;
                    e && (ce(this._container, "leaflet-interactive"),
                    this._fireEvent([e], t, "mouseout"),
                    this._hoveredLayer = null)
                },
                _handleMouseHover: function(t, e) {
                    for (var i, n, o = this._drawFirst; o; o = o.next)
                        (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
                    n !== this._hoveredLayer && (this._handleMouseOut(t),
                    n && (ue(this._container, "leaflet-interactive"),
                    this._fireEvent([n], t, "mouseover"),
                    this._hoveredLayer = n)),
                    this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
                },
                _fireEvent: function(t, e, i) {
                    this._map._fireDOMEvent(e, i || e.type, t)
                },
                _bringToFront: function(t) {
                    var e = t._order;
                    if (e) {
                        var i = e.next
                          , n = e.prev;
                        i && (i.prev = n,
                        n ? n.next = i : i && (this._drawFirst = i),
                        e.prev = this._drawLast,
                        this._drawLast.next = e,
                        e.next = null,
                        this._drawLast = e,
                        this._requestRedraw(t))
                    }
                },
                _bringToBack: function(t) {
                    var e = t._order;
                    if (e) {
                        var i = e.next
                          , n = e.prev;
                        n && (n.next = i,
                        i ? i.prev = n : n && (this._drawLast = n),
                        e.prev = null,
                        e.next = this._drawFirst,
                        this._drawFirst.prev = e,
                        this._drawFirst = e,
                        this._requestRedraw(t))
                    }
                }
            });
            function an(t) {
                return Ct ? new rn(t) : null
            }
            var ln = function() {
                try {
                    return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                    function(t) {
                        return document.createElement("<lvml:" + t + ' class="lvml">')
                    }
                } catch (t) {
                    return function(t) {
                        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                    }
                }
            }()
              , hn = {
                _initContainer: function() {
                    this._container = oe("div", "leaflet-vml-container")
                },
                _update: function() {
                    this._map._animatingZoom || (sn.prototype._update.call(this),
                    this.fire("update"))
                },
                _initPath: function(t) {
                    var e = t._container = ln("shape");
                    ue(e, "leaflet-vml-shape " + (this.options.className || "")),
                    e.coordsize = "1 1",
                    t._path = ln("path"),
                    e.appendChild(t._path),
                    this._updateStyle(t),
                    this._layers[r(t)] = t
                },
                _addPath: function(t) {
                    var e = t._container;
                    this._container.appendChild(e),
                    t.options.interactive && t.addInteractiveTarget(e)
                },
                _removePath: function(t) {
                    var e = t._container;
                    se(e),
                    t.removeInteractiveTarget(e),
                    delete this._layers[r(t)]
                },
                _updateStyle: function(t) {
                    var e = t._stroke
                      , i = t._fill
                      , n = t.options
                      , o = t._container;
                    o.stroked = !!n.stroke,
                    o.filled = !!n.fill,
                    n.stroke ? (e || (e = t._stroke = ln("stroke")),
                    o.appendChild(e),
                    e.weight = n.weight + "px",
                    e.color = n.color,
                    e.opacity = n.opacity,
                    n.dashArray ? e.dashStyle = v(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "",
                    e.endcap = n.lineCap.replace("butt", "flat"),
                    e.joinstyle = n.lineJoin) : e && (o.removeChild(e),
                    t._stroke = null),
                    n.fill ? (i || (i = t._fill = ln("fill")),
                    o.appendChild(i),
                    i.color = n.fillColor || n.color,
                    i.opacity = n.fillOpacity) : i && (o.removeChild(i),
                    t._fill = null)
                },
                _updateCircle: function(t) {
                    var e = t._point.round()
                      , i = Math.round(t._radius)
                      , n = Math.round(t._radiusY || i);
                    this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
                },
                _setPath: function(t, e) {
                    t._path.v = e
                },
                _bringToFront: function(t) {
                    ae(t._container)
                },
                _bringToBack: function(t) {
                    le(t._container)
                }
            }
              , un = Tt ? ln : G
              , cn = sn.extend({
                getEvents: function() {
                    var t = sn.prototype.getEvents.call(this);
                    return t.zoomstart = this._onZoomStart,
                    t
                },
                _initContainer: function() {
                    this._container = un("svg"),
                    this._container.setAttribute("pointer-events", "none"),
                    this._rootGroup = un("g"),
                    this._container.appendChild(this._rootGroup)
                },
                _destroyContainer: function() {
                    se(this._container),
                    De(this._container),
                    delete this._container,
                    delete this._rootGroup,
                    delete this._svgSize
                },
                _onZoomStart: function() {
                    this._update()
                },
                _update: function() {
                    if (!this._map._animatingZoom || !this._bounds) {
                        sn.prototype._update.call(this);
                        var t = this._bounds
                          , e = t.getSize()
                          , i = this._container;
                        this._svgSize && this._svgSize.equals(e) || (this._svgSize = e,
                        i.setAttribute("width", e.x),
                        i.setAttribute("height", e.y)),
                        ve(i, t.min),
                        i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
                        this.fire("update")
                    }
                },
                _initPath: function(t) {
                    var e = t._path = un("path");
                    t.options.className && ue(e, t.options.className),
                    t.options.interactive && ue(e, "leaflet-interactive"),
                    this._updateStyle(t),
                    this._layers[r(t)] = t
                },
                _addPath: function(t) {
                    this._rootGroup || this._initContainer(),
                    this._rootGroup.appendChild(t._path),
                    t.addInteractiveTarget(t._path)
                },
                _removePath: function(t) {
                    se(t._path),
                    t.removeInteractiveTarget(t._path),
                    delete this._layers[r(t)]
                },
                _updatePath: function(t) {
                    t._project(),
                    t._update()
                },
                _updateStyle: function(t) {
                    var e = t._path
                      , i = t.options;
                    e && (i.stroke ? (e.setAttribute("stroke", i.color),
                    e.setAttribute("stroke-opacity", i.opacity),
                    e.setAttribute("stroke-width", i.weight),
                    e.setAttribute("stroke-linecap", i.lineCap),
                    e.setAttribute("stroke-linejoin", i.lineJoin),
                    i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"),
                    i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"),
                    i.fill ? (e.setAttribute("fill", i.fillColor || i.color),
                    e.setAttribute("fill-opacity", i.fillOpacity),
                    e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
                },
                _updatePoly: function(t, e) {
                    this._setPath(t, Y(t._parts, e))
                },
                _updateCircle: function(t) {
                    var e = t._point
                      , i = Math.max(Math.round(t._radius), 1)
                      , n = Math.max(Math.round(t._radiusY), 1) || i
                      , o = "a" + i + "," + n + " 0 1,0 "
                      , s = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + 2 * i + ",0 " + o + 2 * -i + ",0 ";
                    this._setPath(t, s)
                },
                _setPath: function(t, e) {
                    t._path.setAttribute("d", e)
                },
                _bringToFront: function(t) {
                    ae(t._path)
                },
                _bringToBack: function(t) {
                    le(t._path)
                }
            });
            Tt && cn.include(hn);
            function dn(t) {
                return Et || Tt ? new cn(t) : null
            }
            Ve.include({
                getRenderer: function(t) {
                    var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                    return e || (e = this._renderer = this._createRenderer()),
                    this.hasLayer(e) || this.addLayer(e),
                    e
                },
                _getPaneRenderer: function(t) {
                    if ("overlayPane" === t || void 0 === t)
                        return !1;
                    var e = this._paneRenderers[t];
                    return void 0 === e && (e = this._createRenderer({
                        pane: t
                    }),
                    this._paneRenderers[t] = e),
                    e
                },
                _createRenderer: function(t) {
                    return this.options.preferCanvas && an(t) || dn(t)
                }
            });
            var pn = zi.extend({
                initialize: function(t, e) {
                    zi.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
                },
                setBounds: function(t) {
                    return this.setLatLngs(this._boundsToLatLngs(t))
                },
                _boundsToLatLngs: function(t) {
                    return [(t = H(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
                }
            });
            cn.create = un,
            cn.pointsToPath = Y,
            Ri.geometryToLayer = Hi,
            Ri.coordsToLatLng = ji,
            Ri.coordsToLatLngs = Ni,
            Ri.latLngToCoords = $i,
            Ri.latLngsToCoords = Wi,
            Ri.getFeature = Fi,
            Ri.asFeature = Zi,
            Ve.mergeOptions({
                boxZoom: !0
            });
            var fn = ti.extend({
                initialize: function(t) {
                    this._map = t,
                    this._container = t._container,
                    this._pane = t._panes.overlayPane,
                    this._resetStateTimeout = 0,
                    t.on("unload", this._destroy, this)
                },
                addHooks: function() {
                    Te(this._container, "mousedown", this._onMouseDown, this)
                },
                removeHooks: function() {
                    De(this._container, "mousedown", this._onMouseDown, this)
                },
                moved: function() {
                    return this._moved
                },
                _destroy: function() {
                    se(this._pane),
                    delete this._pane
                },
                _resetState: function() {
                    this._resetStateTimeout = 0,
                    this._moved = !1
                },
                _clearDeferredResetState: function() {
                    0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout),
                    this._resetStateTimeout = 0)
                },
                _onMouseDown: function(t) {
                    if (!t.shiftKey || 1 !== t.which && 1 !== t.button)
                        return !1;
                    this._clearDeferredResetState(),
                    this._resetState(),
                    Gt(),
                    be(),
                    this._startPoint = this._map.mouseEventToContainerPoint(t),
                    Te(document, {
                        contextmenu: ze,
                        mousemove: this._onMouseMove,
                        mouseup: this._onMouseUp,
                        keydown: this._onKeyDown
                    }, this)
                },
                _onMouseMove: function(t) {
                    this._moved || (this._moved = !0,
                    this._box = oe("div", "leaflet-zoom-box", this._container),
                    ue(this._container, "leaflet-crosshair"),
                    this._map.fire("boxzoomstart")),
                    this._point = this._map.mouseEventToContainerPoint(t);
                    var e = new A(this._point,this._startPoint)
                      , i = e.getSize();
                    ve(this._box, e.min),
                    this._box.style.width = i.x + "px",
                    this._box.style.height = i.y + "px"
                },
                _finish: function() {
                    this._moved && (se(this._box),
                    ce(this._container, "leaflet-crosshair")),
                    Yt(),
                    we(),
                    De(document, {
                        contextmenu: ze,
                        mousemove: this._onMouseMove,
                        mouseup: this._onMouseUp,
                        keydown: this._onKeyDown
                    }, this)
                },
                _onMouseUp: function(t) {
                    if ((1 === t.which || 1 === t.button) && (this._finish(),
                    this._moved)) {
                        this._clearDeferredResetState(),
                        this._resetStateTimeout = setTimeout(o(this._resetState, this), 0);
                        var e = new R(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));
                        this._map.fitBounds(e).fire("boxzoomend", {
                            boxZoomBounds: e
                        })
                    }
                },
                _onKeyDown: function(t) {
                    27 === t.keyCode && this._finish()
                }
            });
            Ve.addInitHook("addHandler", "boxZoom", fn),
            Ve.mergeOptions({
                doubleClickZoom: !0
            });
            var mn = ti.extend({
                addHooks: function() {
                    this._map.on("dblclick", this._onDoubleClick, this)
                },
                removeHooks: function() {
                    this._map.off("dblclick", this._onDoubleClick, this)
                },
                _onDoubleClick: function(t) {
                    var e = this._map
                      , i = e.getZoom()
                      , n = e.options.zoomDelta
                      , o = t.originalEvent.shiftKey ? i - n : i + n;
                    "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
                }
            });
            Ve.addInitHook("addHandler", "doubleClickZoom", mn),
            Ve.mergeOptions({
                dragging: !0,
                inertia: !it,
                inertiaDeceleration: 3400,
                inertiaMaxSpeed: 1 / 0,
                easeLinearity: .2,
                worldCopyJump: !1,
                maxBoundsViscosity: 0
            });
            var _n = ti.extend({
                addHooks: function() {
                    if (!this._draggable) {
                        var t = this._map;
                        this._draggable = new ri(t._mapPane,t._container),
                        this._draggable.on({
                            dragstart: this._onDragStart,
                            drag: this._onDrag,
                            dragend: this._onDragEnd
                        }, this),
                        this._draggable.on("predrag", this._onPreDragLimit, this),
                        t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this),
                        t.on("zoomend", this._onZoomEnd, this),
                        t.whenReady(this._onZoomEnd, this))
                    }
                    ue(this._map._container, "leaflet-grab leaflet-touch-drag"),
                    this._draggable.enable(),
                    this._positions = [],
                    this._times = []
                },
                removeHooks: function() {
                    ce(this._map._container, "leaflet-grab"),
                    ce(this._map._container, "leaflet-touch-drag"),
                    this._draggable.disable()
                },
                moved: function() {
                    return this._draggable && this._draggable._moved
                },
                moving: function() {
                    return this._draggable && this._draggable._moving
                },
                _onDragStart: function() {
                    var t = this._map;
                    if (t._stop(),
                    this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                        var e = H(this._map.options.maxBounds);
                        this._offsetLimit = z(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),
                        this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                    } else
                        this._offsetLimit = null;
                    t.fire("movestart").fire("dragstart"),
                    t.options.inertia && (this._positions = [],
                    this._times = [])
                },
                _onDrag: function(t) {
                    if (this._map.options.inertia) {
                        var e = this._lastTime = +new Date
                          , i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                        this._positions.push(i),
                        this._times.push(e),
                        this._prunePositions(e)
                    }
                    this._map.fire("move", t).fire("drag", t)
                },
                _prunePositions: function(t) {
                    for (; this._positions.length > 1 && t - this._times[0] > 50; )
                        this._positions.shift(),
                        this._times.shift()
                },
                _onZoomEnd: function() {
                    var t = this._map.getSize().divideBy(2)
                      , e = this._map.latLngToLayerPoint([0, 0]);
                    this._initialWorldOffset = e.subtract(t).x,
                    this._worldWidth = this._map.getPixelWorldBounds().getSize().x
                },
                _viscousLimit: function(t, e) {
                    return t - (t - e) * this._viscosity
                },
                _onPreDragLimit: function() {
                    if (this._viscosity && this._offsetLimit) {
                        var t = this._draggable._newPos.subtract(this._draggable._startPos)
                          , e = this._offsetLimit;
                        t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                        t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                        t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                        t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                        this._draggable._newPos = this._draggable._startPos.add(t)
                    }
                },
                _onPreDragWrap: function() {
                    var t = this._worldWidth
                      , e = Math.round(t / 2)
                      , i = this._initialWorldOffset
                      , n = this._draggable._newPos.x
                      , o = (n - e + i) % t + e - i
                      , s = (n + e + i) % t - e - i
                      , r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                    this._draggable._absPos = this._draggable._newPos.clone(),
                    this._draggable._newPos.x = r
                },
                _onDragEnd: function(t) {
                    var e = this._map
                      , i = e.options
                      , n = !i.inertia || this._times.length < 2;
                    if (e.fire("dragend", t),
                    n)
                        e.fire("moveend");
                    else {
                        this._prunePositions(+new Date);
                        var o = this._lastPos.subtract(this._positions[0])
                          , s = (this._lastTime - this._times[0]) / 1e3
                          , r = i.easeLinearity
                          , a = o.multiplyBy(r / s)
                          , l = a.distanceTo([0, 0])
                          , h = Math.min(i.inertiaMaxSpeed, l)
                          , u = a.multiplyBy(h / l)
                          , c = h / (i.inertiaDeceleration * r)
                          , d = u.multiplyBy(-c / 2).round();
                        d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds),
                        E(function() {
                            e.panBy(d, {
                                duration: c,
                                easeLinearity: r,
                                noMoveStart: !0,
                                animate: !0
                            })
                        })) : e.fire("moveend")
                    }
                }
            });
            Ve.addInitHook("addHandler", "dragging", _n),
            Ve.mergeOptions({
                keyboard: !0,
                keyboardPanDelta: 80
            });
            var vn = ti.extend({
                keyCodes: {
                    left: [37],
                    right: [39],
                    down: [40],
                    up: [38],
                    zoomIn: [187, 107, 61, 171],
                    zoomOut: [189, 109, 54, 173]
                },
                initialize: function(t) {
                    this._map = t,
                    this._setPanDelta(t.options.keyboardPanDelta),
                    this._setZoomDelta(t.options.zoomDelta)
                },
                addHooks: function() {
                    var t = this._map._container;
                    t.tabIndex <= 0 && (t.tabIndex = "0"),
                    Te(t, {
                        focus: this._onFocus,
                        blur: this._onBlur,
                        mousedown: this._onMouseDown
                    }, this),
                    this._map.on({
                        focus: this._addHooks,
                        blur: this._removeHooks
                    }, this)
                },
                removeHooks: function() {
                    this._removeHooks(),
                    De(this._map._container, {
                        focus: this._onFocus,
                        blur: this._onBlur,
                        mousedown: this._onMouseDown
                    }, this),
                    this._map.off({
                        focus: this._addHooks,
                        blur: this._removeHooks
                    }, this)
                },
                _onMouseDown: function() {
                    if (!this._focused) {
                        var t = document.body
                          , e = document.documentElement
                          , i = t.scrollTop || e.scrollTop
                          , n = t.scrollLeft || e.scrollLeft;
                        this._map._container.focus(),
                        window.scrollTo(n, i)
                    }
                },
                _onFocus: function() {
                    this._focused = !0,
                    this._map.fire("focus")
                },
                _onBlur: function() {
                    this._focused = !1,
                    this._map.fire("blur")
                },
                _setPanDelta: function(t) {
                    var e, i, n = this._panKeys = {}, o = this.keyCodes;
                    for (e = 0,
                    i = o.left.length; e < i; e++)
                        n[o.left[e]] = [-1 * t, 0];
                    for (e = 0,
                    i = o.right.length; e < i; e++)
                        n[o.right[e]] = [t, 0];
                    for (e = 0,
                    i = o.down.length; e < i; e++)
                        n[o.down[e]] = [0, t];
                    for (e = 0,
                    i = o.up.length; e < i; e++)
                        n[o.up[e]] = [0, -1 * t]
                },
                _setZoomDelta: function(t) {
                    var e, i, n = this._zoomKeys = {}, o = this.keyCodes;
                    for (e = 0,
                    i = o.zoomIn.length; e < i; e++)
                        n[o.zoomIn[e]] = t;
                    for (e = 0,
                    i = o.zoomOut.length; e < i; e++)
                        n[o.zoomOut[e]] = -t
                },
                _addHooks: function() {
                    Te(document, "keydown", this._onKeyDown, this)
                },
                _removeHooks: function() {
                    De(document, "keydown", this._onKeyDown, this)
                },
                _onKeyDown: function(t) {
                    if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                        var e, i = t.keyCode, n = this._map;
                        if (i in this._panKeys)
                            n._panAnim && n._panAnim._inProgress || (e = this._panKeys[i],
                            t.shiftKey && (e = B(e).multiplyBy(3)),
                            n.panBy(e),
                            n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                        else if (i in this._zoomKeys)
                            n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                        else {
                            if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey)
                                return;
                            n.closePopup()
                        }
                        ze(t)
                    }
                }
            });
            Ve.addInitHook("addHandler", "keyboard", vn),
            Ve.mergeOptions({
                scrollWheelZoom: !0,
                wheelDebounceTime: 40,
                wheelPxPerZoomLevel: 60
            });
            var gn = ti.extend({
                addHooks: function() {
                    Te(this._map._container, "mousewheel", this._onWheelScroll, this),
                    this._delta = 0
                },
                removeHooks: function() {
                    De(this._map._container, "mousewheel", this._onWheelScroll, this)
                },
                _onWheelScroll: function(t) {
                    var e = je(t)
                      , i = this._map.options.wheelDebounceTime;
                    this._delta += e,
                    this._lastMousePos = this._map.mouseEventToContainerPoint(t),
                    this._startTime || (this._startTime = +new Date);
                    var n = Math.max(i - (+new Date - this._startTime), 0);
                    clearTimeout(this._timer),
                    this._timer = setTimeout(o(this._performZoom, this), n),
                    ze(t)
                },
                _performZoom: function() {
                    var t = this._map
                      , e = t.getZoom()
                      , i = this._map.options.zoomSnap || 0;
                    t._stop();
                    var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel)
                      , o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2
                      , s = i ? Math.ceil(o / i) * i : o
                      , r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
                    this._delta = 0,
                    this._startTime = null,
                    r && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r))
                }
            });
            Ve.addInitHook("addHandler", "scrollWheelZoom", gn),
            Ve.mergeOptions({
                tap: !0,
                tapTolerance: 15
            });
            var yn = ti.extend({
                addHooks: function() {
                    Te(this._map._container, "touchstart", this._onDown, this)
                },
                removeHooks: function() {
                    De(this._map._container, "touchstart", this._onDown, this)
                },
                _onDown: function(t) {
                    if (t.touches) {
                        if (Ae(t),
                        this._fireClick = !0,
                        t.touches.length > 1)
                            return this._fireClick = !1,
                            void clearTimeout(this._holdTimeout);
                        var e = t.touches[0]
                          , i = e.target;
                        this._startPos = this._newPos = new O(e.clientX,e.clientY),
                        i.tagName && "a" === i.tagName.toLowerCase() && ue(i, "leaflet-active"),
                        this._holdTimeout = setTimeout(o(function() {
                            this._isTapValid() && (this._fireClick = !1,
                            this._onUp(),
                            this._simulateEvent("contextmenu", e))
                        }, this), 1e3),
                        this._simulateEvent("mousedown", e),
                        Te(document, {
                            touchmove: this._onMove,
                            touchend: this._onUp
                        }, this)
                    }
                },
                _onUp: function(t) {
                    if (clearTimeout(this._holdTimeout),
                    De(document, {
                        touchmove: this._onMove,
                        touchend: this._onUp
                    }, this),
                    this._fireClick && t && t.changedTouches) {
                        var e = t.changedTouches[0]
                          , i = e.target;
                        i && i.tagName && "a" === i.tagName.toLowerCase() && ce(i, "leaflet-active"),
                        this._simulateEvent("mouseup", e),
                        this._isTapValid() && this._simulateEvent("click", e)
                    }
                },
                _isTapValid: function() {
                    return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
                },
                _onMove: function(t) {
                    var e = t.touches[0];
                    this._newPos = new O(e.clientX,e.clientY),
                    this._simulateEvent("mousemove", e)
                },
                _simulateEvent: function(t, e) {
                    var i = document.createEvent("MouseEvents");
                    i._simulated = !0,
                    e.target._simulatedClick = !0,
                    i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null),
                    e.target.dispatchEvent(i)
                }
            });
            wt && !bt && Ve.addInitHook("addHandler", "tap", yn);
            Ve.mergeOptions({
                touchZoom: wt && !it,
                bounceAtZoomLimits: !0
            });
            var bn = ti.extend({
                addHooks: function() {
                    ue(this._map._container, "leaflet-touch-zoom"),
                    Te(this._map._container, "touchstart", this._onTouchStart, this)
                },
                removeHooks: function() {
                    ce(this._map._container, "leaflet-touch-zoom"),
                    De(this._map._container, "touchstart", this._onTouchStart, this)
                },
                _onTouchStart: function(t) {
                    var e = this._map;
                    if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                        var i = e.mouseEventToContainerPoint(t.touches[0])
                          , n = e.mouseEventToContainerPoint(t.touches[1]);
                        this._centerPoint = e.getSize()._divideBy(2),
                        this._startLatLng = e.containerPointToLatLng(this._centerPoint),
                        "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))),
                        this._startDist = i.distanceTo(n),
                        this._startZoom = e.getZoom(),
                        this._moved = !1,
                        this._zooming = !0,
                        e._stop(),
                        Te(document, "touchmove", this._onTouchMove, this),
                        Te(document, "touchend", this._onTouchEnd, this),
                        Ae(t)
                    }
                },
                _onTouchMove: function(t) {
                    if (t.touches && 2 === t.touches.length && this._zooming) {
                        var e = this._map
                          , i = e.mouseEventToContainerPoint(t.touches[0])
                          , n = e.mouseEventToContainerPoint(t.touches[1])
                          , s = i.distanceTo(n) / this._startDist;
                        if (this._zoom = e.getScaleZoom(s, this._startZoom),
                        !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)),
                        "center" === e.options.touchZoom) {
                            if (this._center = this._startLatLng,
                            1 === s)
                                return
                        } else {
                            var r = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                            if (1 === s && 0 === r.x && 0 === r.y)
                                return;
                            this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
                        }
                        this._moved || (e._moveStart(!0, !1),
                        this._moved = !0),
                        T(this._animRequest);
                        var a = o(e._move, e, this._center, this._zoom, {
                            pinch: !0,
                            round: !1
                        });
                        this._animRequest = E(a, this, !0),
                        Ae(t)
                    }
                },
                _onTouchEnd: function() {
                    this._moved && this._zooming ? (this._zooming = !1,
                    T(this._animRequest),
                    De(document, "touchmove", this._onTouchMove),
                    De(document, "touchend", this._onTouchEnd),
                    this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
                }
            });
            Ve.addInitHook("addHandler", "touchZoom", bn),
            Ve.BoxZoom = fn,
            Ve.DoubleClickZoom = mn,
            Ve.Drag = _n,
            Ve.Keyboard = vn,
            Ve.ScrollWheelZoom = gn,
            Ve.Tap = yn,
            Ve.TouchZoom = bn,
            Object.freeze = e,
            t.version = "1.4.0",
            t.Control = Ge,
            t.control = Ye,
            t.Browser = Dt,
            t.Evented = S,
            t.Mixin = ii,
            t.Util = M,
            t.Class = D,
            t.Handler = ti,
            t.extend = i,
            t.bind = o,
            t.stamp = r,
            t.setOptions = p,
            t.DomEvent = qe,
            t.DomUtil = Ee,
            t.PosAnimation = Ue,
            t.Draggable = ri,
            t.LineUtil = _i,
            t.PolyUtil = gi,
            t.Point = O,
            t.point = B,
            t.Bounds = A,
            t.bounds = z,
            t.Transformation = Z,
            t.transformation = q,
            t.Projection = wi,
            t.LatLng = j,
            t.latLng = N,
            t.LatLngBounds = R,
            t.latLngBounds = H,
            t.CRS = $,
            t.GeoJSON = Ri,
            t.geoJSON = Ui,
            t.geoJson = Vi,
            t.Layer = Ci,
            t.LayerGroup = Ei,
            t.layerGroup = function(t, e) {
                return new Ei(t,e)
            }
            ,
            t.FeatureGroup = Ti,
            t.featureGroup = function(t) {
                return new Ti(t)
            }
            ,
            t.ImageOverlay = Gi,
            t.imageOverlay = function(t, e, i) {
                return new Gi(t,e,i)
            }
            ,
            t.VideoOverlay = Yi,
            t.videoOverlay = function(t, e, i) {
                return new Yi(t,e,i)
            }
            ,
            t.DivOverlay = Xi,
            t.Popup = Ki,
            t.popup = function(t, e) {
                return new Ki(t,e)
            }
            ,
            t.Tooltip = Qi,
            t.tooltip = function(t, e) {
                return new Qi(t,e)
            }
            ,
            t.Icon = Mi,
            t.icon = function(t) {
                return new Mi(t)
            }
            ,
            t.DivIcon = Ji,
            t.divIcon = function(t) {
                return new Ji(t)
            }
            ,
            t.Marker = Si,
            t.marker = function(t, e) {
                return new Si(t,e)
            }
            ,
            t.TileLayer = en,
            t.tileLayer = nn,
            t.GridLayer = tn,
            t.gridLayer = function(t) {
                return new tn(t)
            }
            ,
            t.SVG = cn,
            t.svg = dn,
            t.Renderer = sn,
            t.Canvas = rn,
            t.canvas = an,
            t.Path = Oi,
            t.CircleMarker = Ii,
            t.circleMarker = function(t, e) {
                return new Ii(t,e)
            }
            ,
            t.Circle = Bi,
            t.circle = function(t, e, i) {
                return new Bi(t,e,i)
            }
            ,
            t.Polyline = Ai,
            t.polyline = function(t, e) {
                return new Ai(t,e)
            }
            ,
            t.Polygon = zi,
            t.polygon = function(t, e) {
                return new zi(t,e)
            }
            ,
            t.Rectangle = pn,
            t.rectangle = function(t, e) {
                return new pn(t,e)
            }
            ,
            t.Map = Ve,
            t.map = function(t, e) {
                return new Ve(t,e)
            }
            ;
            var wn = window.L;
            t.noConflict = function() {
                return window.L = wn,
                this
            }
            ,
            window.L = t
        }(e)
    }()
}
, function(t, e, i) {
    "use strict";
    i.d(e, "i", function() {
        return a
    }),
    i.d(e, "a", function() {
        return l
    }),
    i.d(e, "o", function() {
        return h
    }),
    i.d(e, "b", function() {
        return u
    }),
    i.d(e, "g", function() {
        return c
    }),
    i.d(e, "f", function() {
        return d
    }),
    i.d(e, "h", function() {
        return p
    }),
    i.d(e, "k", function() {
        return f
    }),
    i.d(e, "m", function() {
        return m
    }),
    i.d(e, "l", function() {
        return _
    }),
    i.d(e, "e", function() {
        return v
    }),
    i.d(e, "n", function() {
        return g
    }),
    i.d(e, "j", function() {
        return y
    }),
    i.d(e, "c", function() {
        return b
    }),
    i.d(e, "d", function() {
        return w
    });
    i(8);
    function n(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            var i = []
              , n = !0
              , o = !1
              , s = void 0;
            try {
                for (var r, a = t[Symbol.iterator](); !(n = (r = a.next()).done) && (i.push(r.value),
                !e || i.length !== e); n = !0)
                    ;
            } catch (t) {
                o = !0,
                s = t
            } finally {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (o)
                        throw s
                }
            }
            return i
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    var o = "/dashboard";
    function s(t) {
        if (t) {
            var e = t.join(",");
            return "?fields=".concat(e)
        }
        return ""
    }
    function r(t, e, i) {
        fetch(t, e).then(function(t) {
            return new Promise(function(e) {
                if (t.ok)
                    t.json().then(function(t) {
                        e([null, t])
                    });
                else {
                    var i = t.headers && t.headers.get("content-type");
                    i && -1 !== i.indexOf("application/json") ? t.json().then(function(i) {
                        e([{
                            status: t.status,
                            statusText: t.statusText
                        }, i])
                    }) : t.text().then(function(i) {
                        e([{
                            status: t.status,
                            statusText: t.statusText
                        }, i])
                    })
                }
            }
            )
        }).then(function(t) {
            var e = n(t, 2)
              , o = e[0]
              , s = e[1];
            i(o, s)
        }).catch(function(t) {
            i({
                status: 500,
                message: t.message
            }, null)
        })
    }
    function a(t, e) {
        var i = s(t);
        fetch("".concat(o, "/api/polygons").concat(i)).then(function(t) {
            return t.json()
        }).then(function(t) {
            e(null, t)
        }).catch(function(t) {
            e(t, null)
        })
    }
    function l(t, e, i, n) {
        var a = s(i);
        r("".concat(o, "/api/polygons").concat(a), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: t,
                geo_json: e
            })
        }, n)
    }
    function h(t, e, i, n) {
        var a = s(i);
        r("".concat(o, "/api/polygons/").concat(e).concat(a), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: t
            })
        }, n)
    }
    function u(t, e) {
        fetch("".concat(o, "/api/polygons/").concat(t), {
            method: "DELETE"
        }).then(function(t) {
            e(null)
        }).catch(function(t) {
            e(t)
        })
    }
    function c(t, e) {
        r("".concat(o, "/api/meta?polyid=").concat(t), {}, function(t, i) {
            e(t, i && i.data)
        })
    }
    function d(t, e, i, n) {
        r("".concat(o, "/api/ndvi/one?src=").concat(t, "&date=").concat(e, "&polyid=").concat(i), {}, n)
    }
    function p(t, e, i, n, s) {
        var a = "".concat(o, "/api/ndvi/all?start=").concat(t, "&end=").concat(e, "&polyid=").concat(i)
          , l = n && n.join(",")
          , h = l ? "&fields=".concat(l) : "";
        r(h ? a + h : a, {}, s)
    }
    function f(t, e, i) {
        Promise.all([fetch("".concat(o, "/api/weather/current?lat=").concat(t, "&lon=").concat(e)), fetch("".concat(o, "/api/weather/uvi?lat=").concat(t, "&lon=").concat(e))]).then(function(t) {
            var e = n(t, 2)
              , i = e[0]
              , o = e[1];
            return new Promise(function(t) {
                if (i.ok)
                    if (o.ok)
                        Promise.all([i.json(), o.json()]).then(function(e) {
                            t([null, e])
                        });
                    else {
                        var e = o
                          , n = e.headers && e.headers.get("content-type");
                        n && -1 !== n.indexOf("application/json") ? e.json().then(function(i) {
                            t([{
                                status: e.status,
                                statusText: e.statusText
                            }, i])
                        }) : e.text().then(function(i) {
                            t([{
                                status: e.status,
                                statusText: e.statusText
                            }, i])
                        })
                    }
                else {
                    var s = i
                      , r = s.headers && s.headers.get("content-type");
                    r && -1 !== r.indexOf("application/json") ? s.json().then(function(e) {
                        t([{
                            status: s.status,
                            statusText: s.statusText
                        }, e])
                    }) : s.text().then(function(e) {
                        t([{
                            status: s.status,
                            statusText: s.statusText
                        }, e])
                    })
                }
            }
            )
        }).then(function(t) {
            var e = n(t, 2)
              , o = e[0]
              , s = e[1];
            i(o, s)
        }).catch(function(t) {
            i({
                status: 500,
                message: t.message
            }, null)
        })
    }
    function m(t, e, i) {
        r("".concat(o, "/api/weather/forecast/hourly?lat=").concat(t, "&lon=").concat(e), {}, i)
    }
    function _(t, e, i) {
        r("".concat(o, "/api/weather/forecast/16?lat=").concat(t, "&lon=").concat(e), {}, i)
    }
    function v(t, e, i, n, s, a) {
        r("".concat(o, "/api/weather/accumulated?lat=").concat(i, "&lon=").concat(n, "&start=").concat(t, "&end=").concat(e, "&threshold=").concat(Number(s) + 273.15), {}, a)
    }
    function g(t, e, i, n, s) {
        r("".concat(o, "/api/weather/history?lat=").concat(i, "&lon=").concat(n, "&start=").concat(t, "&end=").concat(e), {}, s)
    }
    function y(t, e, i, n, s) {
        r("".concat(o, "/api/weather/soil_history?lat=").concat(i, "&lon=").concat(n, "&start=").concat(t, "&end=").concat(e), {}, s)
    }
    function b(t, e, i) {
        r("https://nominatim.openstreetmap.org/search?q=".concat(t, "&format=json&limit=1&viewbox=").concat(e), {}, i)
    }
    function w(t) {
        r("".concat(o, "/lauth/service"), {}, t)
    }
}
, function(t, e, i) {
    "use strict";
    function n(t) {
        var e = "0" + t;
        return e.substr(e.length - 2)
    }
    function o(t) {
        if (null == t)
            return null;
        var e = new Date(1e3 * t);
        return "".concat(e.getFullYear(), "-").concat(n(e.getMonth() + 1), "-").concat(n(e.getDate()))
    }
    function s(t, e) {
        return 0 != (e & t)
    }
    i.d(e, "a", function() {
        return o
    }),
    i.d(e, "b", function() {
        return s
    })
}
, function(t, e, i) {
    "use strict";
    i.d(e, "f", function() {
        return l
    }),
    i.d(e, "h", function() {
        return h
    }),
    i.d(e, "g", function() {
        return u
    }),
    i.d(e, "a", function() {
        return c
    }),
    i.d(e, "d", function() {
        return d
    }),
    i.d(e, "c", function() {
        return p
    }),
    i.d(e, "i", function() {
        return f
    }),
    i.d(e, "e", function() {
        return m
    }),
    i.d(e, "j", function() {
        return _
    }),
    i.d(e, "b", function() {
        return v
    });
    var n = i(1)
      , o = i.n(n)
      , s = (i(9),
    i(0))
      , r = i.n(s)
      , a = {};
    function l() {
        a.currentMap = o.a.map("map", {
            center: [48.2246, 5.9326],
            zoom: 5,
            zoomControl: !1
        }),
        a.layers = {},
        a.layers.tileLayersGroup = new o.a.FeatureGroup,
        a.layers.tileLayersGroup.addTo(a.currentMap),
        a.shapeOptions = {
            color: "#1976d2",
            weight: 2,
            fill: !1,
            opacity: 1
        },
        o.a.control.zoom({
            position: "bottomright"
        }).addTo(a.currentMap)
    }
    function h(t) {
        switch (a.layers.tileLayersGroup.eachLayer(function(t) {
            a.layers.tileLayersGroup.removeLayer(t)
        }),
        t.toLowerCase()) {
        case "osm":
            a.layers.vectorLayer = a.layers.vectorLayer || new o.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                maxZoom: 18,
                zIndex: 0,
                subdomains: "abc"
            }),
            a.layers.vectorLayer.addTo(a.layers.tileLayersGroup);
            break;
        case "satellite":
            a.layers.satelliteLayer = a.layers.satelliteLayer || new o.a.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{
                attribution: "Copyright Google Maps",
                maxZoom: 18,
                zIndex: 0,
                subdomains: ["mt0", "mt1", "mt2", "mt3"]
            }),
            a.layers.satelliteLayer.addTo(a.layers.tileLayersGroup);
            break;
        case "cloudless":
            a.layers.satelliteLayer = a.layers.satelliteLayer || new o.a.tileLayer("https://{s}.sat.owm.io/sql/{z}/{x}/{y}/?appid=9de243494c0b295cca9337e1e96b00e2&overzoom=true&from=cloudless",{
                attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a target="_blank">OpenWeatherMap 2019</a>',
                maxZoom: 18,
                minZoom: 5,
                zIndex: 0,
                subdomains: "abc"
            }),
            a.layers.satelliteLayer.addTo(a.layers.tileLayersGroup)
        }
    }
    function u(t) {
        a.layers.image && (a.layers.image.remove(),
        delete a.layers.image),
        a.layers.polygon ? a.layers.polygon.setLatLngs(t).redraw() : a.layers.polygon = o.a.polygon(t, a.shapeOptions).addTo(a.currentMap),
        a.currentMap.fitBounds(a.layers.polygon.getBounds())
    }
    function c() {
        a.layers.image && (a.currentMap.removeLayer(a.layers.image),
        delete a.layers.image)
    }
    function d(t, e, i, n, s) {
        var r = new Date(i)
          , l = ("".concat(r.getFullYear(), "-").concat(r.getMonth() + 1, "-").concat(r.getDate()),
        "api/tiles/{z}/{x}/{y}?op=".concat(t, "&src=").concat(e, "&date=").concat(i, "&polyid= "));
        a.layers.image ? (a.layers.image.options.bounds = s,
        a.layers.image.setUrl(l)) : a.layers.image = o.a.tileLayer(l, {
            bounds: s
        }).addTo(a.currentMap)
    }
    function p(t) {
        a.layers.drawnItems = new o.a.FeatureGroup,
        a.currentMap.addControl(a.layers.drawnItems);
        var e = {
            position: "topright",
            draw: {
                polyline: !1,
                marker: !1,
                circlemarker: !1,
                circle: !1,
                rectangle: {
                    showArea: !1,
                    metric: ["ha"],
                    shapeOptions: a.shapeOptions
                },
                polygon: {
                    showArea: !0,
                    metric: ["ha"],
                    shapeOptions: a.shapeOptions
                }
            },
            edit: !1
        };
        a.layers.drawControl = new o.a.Control.Draw(e),
        a.currentMap.addControl(a.layers.drawControl),
        a.layers.drawnItems.on("layeradd", function(e) {
            var i = o.a.GeometryUtil.geodesicArea(e.layer.getLatLngs()[0]);
            t(Math.round(1e-4 * i * 10) / 10, e.layer.toGeoJSON()),
            a.currentMap.removeControl(a.layers.drawControl)
        }),
        a.layers.drawnItems.on("layerremove", function() {
            t(null, null),
            a.currentMap.addControl(a.layers.drawControl)
        }),
        a.currentMap.on("draw:created", function(t) {
            t.layer.addTo(a.layers.drawnItems)
        })
    }
    function f() {
        a.layers.drawnItems.eachLayer(function(t) {
            a.layers.drawnItems.removeLayer(t)
        })
    }
    function m(t) {
        var e = r()("ul.layer-changer__items")
          , i = e.children("li.layer-changer__item:not(.layer-changer__item--active)")
          , n = (i.find("div.layer-changer__item button img").attr("src"),
        i.find("div.layer-changer__item button p").text(),
        e.children("li.layer-changer__item--active"));
        n.find("div.layer-changer__item button img").attr("src");
        function o(i, n) {
            e.removeClass("layer-changer__items--active"),
            t(n)
        }
        o(0, n.find("div.layer-changer__item button p").text()),
        e.children("li.layer-changer__item").each(function() {
            r()(this).click(function(t) {
                r()(".layer-changer__item--active").removeClass("layer-changer__item--active"),
                r()(this).addClass("layer-changer__item--active"),
                o(0, r()(this).find("div.layer-changer__item button p").text())
            })
        })
    }
    function _(t) {
        a.currentMap.flyToBounds(t, {})
    }
    function v() {
        return a.currentMap.getBounds()
    }
}
, function(t, e, i) {
    (function(i) {
        var n;
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        /*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
        var s = function t(e, i, n) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === o) {
                var s = Object.getPrototypeOf(e);
                return null === s ? void 0 : t(s, i, n)
            }
            if ("value"in o)
                return o.value;
            var r = o.get;
            return void 0 !== r ? r.call(n) : void 0
        }
          , r = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i),
                n && t(e, n),
                e
            }
        }();
        function a(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== o(e) && "function" != typeof e ? t : e
        }
        function l(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + o(e));
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        function h(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        /*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
        /*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
        !function(t) {
            window.cash = function() {
                var t, e = document, i = window, n = Array.prototype, s = n.slice, r = n.filter, a = n.push, l = function() {}, h = function(t) {
                    return o(t) === o(l) && t.call
                }, u = function(t) {
                    return o(t) === o("")
                }, c = /^#[\w-]*$/, d = /^\.[\w-]*$/, p = /<.+>/, f = /^\w+$/;
                function m(t, i) {
                    i = i || e;
                    var n = d.test(t) ? i.getElementsByClassName(t.slice(1)) : f.test(t) ? i.getElementsByTagName(t) : i.querySelectorAll(t);
                    return n
                }
                function _(i) {
                    if (!t) {
                        var n = (t = e.implementation.createHTMLDocument(null)).createElement("base");
                        n.href = e.location.href,
                        t.head.appendChild(n)
                    }
                    return t.body.innerHTML = i,
                    t.body.childNodes
                }
                function v(t) {
                    "loading" !== e.readyState ? t() : e.addEventListener("DOMContentLoaded", t)
                }
                function g(t, n) {
                    if (!t)
                        return this;
                    if (t.cash && t !== i)
                        return t;
                    var o, s = t, r = 0;
                    if (u(t))
                        s = c.test(t) ? e.getElementById(t.slice(1)) : p.test(t) ? _(t) : m(t, n);
                    else if (h(t))
                        return v(t),
                        this;
                    if (!s)
                        return this;
                    if (s.nodeType || s === i)
                        this[0] = s,
                        this.length = 1;
                    else
                        for (o = this.length = s.length; r < o; r++)
                            this[r] = s[r];
                    return this
                }
                function y(t, e) {
                    return new g(t,e)
                }
                var b = y.fn = y.prototype = g.prototype = {
                    cash: !0,
                    length: 0,
                    push: a,
                    splice: n.splice,
                    map: n.map,
                    init: g
                };
                function w(t, e) {
                    for (var i = t.length, n = 0; n < i && !1 !== e.call(t[n], t[n], n, t); n++)
                        ;
                }
                function L(t, e) {
                    var i = t && (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector);
                    return !!i && i.call(t, e)
                }
                function x(t) {
                    return u(t) ? L : t.cash ? function(e) {
                        return t.is(e)
                    }
                    : function(t, e) {
                        return t === e
                    }
                }
                function k(t) {
                    return y(s.call(t).filter(function(t, e, i) {
                        return i.indexOf(t) === e
                    }))
                }
                Object.defineProperty(b, "constructor", {
                    value: y
                }),
                y.parseHTML = _,
                y.noop = l,
                y.isFunction = h,
                y.isString = u,
                y.extend = b.extend = function(t) {
                    t = t || {};
                    var e = s.call(arguments)
                      , i = e.length
                      , n = 1;
                    for (1 === e.length && (t = this,
                    n = 0); n < i; n++)
                        if (e[n])
                            for (var o in e[n])
                                e[n].hasOwnProperty(o) && (t[o] = e[n][o]);
                    return t
                }
                ,
                y.extend({
                    merge: function(t, e) {
                        for (var i = +e.length, n = t.length, o = 0; o < i; n++,
                        o++)
                            t[n] = e[o];
                        return t.length = n,
                        t
                    },
                    each: w,
                    matches: L,
                    unique: k,
                    isArray: Array.isArray,
                    isNumeric: function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    }
                });
                var C = y.uid = "_cash" + Date.now();
                function E(t) {
                    return t[C] = t[C] || {}
                }
                function T(t, e, i) {
                    return E(t)[e] = i
                }
                function M(t, e) {
                    var i = E(t);
                    return void 0 === i[e] && (i[e] = t.dataset ? t.dataset[e] : y(t).attr("data-" + e)),
                    i[e]
                }
                b.extend({
                    data: function(t, e) {
                        if (u(t))
                            return void 0 === e ? M(this[0], t) : this.each(function(i) {
                                return T(i, t, e)
                            });
                        for (var i in t)
                            this.data(i, t[i]);
                        return this
                    },
                    removeData: function(t) {
                        return this.each(function(e) {
                            return function(t, e) {
                                var i = E(t);
                                i ? delete i[e] : t.dataset ? delete t.dataset[e] : y(t).removeAttr("data-" + name)
                            }(e, t)
                        })
                    }
                });
                var D = /\S+/g;
                function P(t) {
                    return u(t) && t.match(D)
                }
                function S(t, e) {
                    return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)","gi").test(t.className)
                }
                function O(t, e, i) {
                    t.classList ? t.classList.add(e) : i.indexOf(" " + e + " ") && (t.className += " " + e)
                }
                function I(t, e) {
                    t.classList ? t.classList.remove(e) : t.className = t.className.replace(e, "")
                }
                b.extend({
                    addClass: function(t) {
                        var e = P(t);
                        return e ? this.each(function(t) {
                            var i = " " + t.className + " ";
                            w(e, function(e) {
                                O(t, e, i)
                            })
                        }) : this
                    },
                    attr: function(t, e) {
                        if (t) {
                            if (u(t))
                                return void 0 === e ? this[0] ? this[0].getAttribute ? this[0].getAttribute(t) : this[0][t] : void 0 : this.each(function(i) {
                                    i.setAttribute ? i.setAttribute(t, e) : i[t] = e
                                });
                            for (var i in t)
                                this.attr(i, t[i]);
                            return this
                        }
                    },
                    hasClass: function(t) {
                        var e = !1
                          , i = P(t);
                        return i && i.length && this.each(function(t) {
                            return !(e = S(t, i[0]))
                        }),
                        e
                    },
                    prop: function(t, e) {
                        if (u(t))
                            return void 0 === e ? this[0][t] : this.each(function(i) {
                                i[t] = e
                            });
                        for (var i in t)
                            this.prop(i, t[i]);
                        return this
                    },
                    removeAttr: function(t) {
                        return this.each(function(e) {
                            e.removeAttribute ? e.removeAttribute(t) : delete e[t]
                        })
                    },
                    removeClass: function(t) {
                        if (!arguments.length)
                            return this.attr("class", "");
                        var e = P(t);
                        return e ? this.each(function(t) {
                            w(e, function(e) {
                                I(t, e)
                            })
                        }) : this
                    },
                    removeProp: function(t) {
                        return this.each(function(e) {
                            delete e[t]
                        })
                    },
                    toggleClass: function(t, e) {
                        if (void 0 !== e)
                            return this[e ? "addClass" : "removeClass"](t);
                        var i = P(t);
                        return i ? this.each(function(t) {
                            var e = " " + t.className + " ";
                            w(i, function(i) {
                                S(t, i) ? I(t, i) : O(t, i, e)
                            })
                        }) : this
                    }
                }),
                b.extend({
                    add: function(t, e) {
                        return k(y.merge(this, y(t, e)))
                    },
                    each: function(t) {
                        return w(this, t),
                        this
                    },
                    eq: function(t) {
                        return y(this.get(t))
                    },
                    filter: function(t) {
                        if (!t)
                            return this;
                        var e = h(t) ? t : x(t);
                        return y(r.call(this, function(i) {
                            return e(i, t)
                        }))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    get: function(t) {
                        return void 0 === t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
                    },
                    index: function(t) {
                        var e = t ? y(t)[0] : this[0]
                          , i = t ? this : y(e).parent().children();
                        return s.call(i).indexOf(e)
                    },
                    last: function() {
                        return this.eq(-1)
                    }
                });
                var B = function() {
                    var t = /(?:^\w|[A-Z]|\b\w)/g
                      , e = /[\s-_]+/g;
                    return function(i) {
                        return i.replace(t, function(t, e) {
                            return t[0 === e ? "toLowerCase" : "toUpperCase"]()
                        }).replace(e, "")
                    }
                }()
                  , A = function() {
                    var t = {}
                      , e = document
                      , i = e.createElement("div")
                      , n = i.style;
                    return function(e) {
                        if (e = B(e),
                        t[e])
                            return t[e];
                        var i = e.charAt(0).toUpperCase() + e.slice(1)
                          , o = (e + " " + ["webkit", "moz", "ms", "o"].join(i + " ") + i).split(" ");
                        return w(o, function(i) {
                            if (i in n)
                                return t[i] = e = t[e] = i,
                                !1
                        }),
                        t[e]
                    }
                }();
                function z(t, e) {
                    return parseInt(i.getComputedStyle(t[0], null)[e], 10) || 0
                }
                function R(t, e, i) {
                    var n, o = M(t, "_cashEvents"), s = o && o[e];
                    s && (i ? (t.removeEventListener(e, i),
                    (n = s.indexOf(i)) >= 0 && s.splice(n, 1)) : (w(s, function(i) {
                        t.removeEventListener(e, i)
                    }),
                    s = []))
                }
                function H(t, e) {
                    return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e).replace(/%20/g, "+")
                }
                function j(t) {
                    var e = t.type;
                    if (!e)
                        return null;
                    switch (e.toLowerCase()) {
                    case "select-one":
                        return function(t) {
                            var e = t.selectedIndex;
                            return e >= 0 ? t.options[e].value : null
                        }(t);
                    case "select-multiple":
                        return function(t) {
                            var e = [];
                            return w(t.options, function(t) {
                                t.selected && e.push(t.value)
                            }),
                            e.length ? e : null
                        }(t);
                    case "radio":
                    case "checkbox":
                        return t.checked ? t.value : null;
                    default:
                        return t.value ? t.value : null
                    }
                }
                function N(t, e, i) {
                    var n = u(e);
                    n || !e.length ? w(t, n ? function(t) {
                        return t.insertAdjacentHTML(i ? "afterbegin" : "beforeend", e)
                    }
                    : function(t, n) {
                        return function(t, e, i) {
                            if (i) {
                                var n = t.childNodes[0];
                                t.insertBefore(e, n)
                            } else
                                t.appendChild(e)
                        }(t, 0 === n ? e : e.cloneNode(!0), i)
                    }
                    ) : w(e, function(e) {
                        return N(t, e, i)
                    })
                }
                y.prefixedProp = A,
                y.camelCase = B,
                b.extend({
                    css: function(t, e) {
                        if (u(t))
                            return t = A(t),
                            arguments.length > 1 ? this.each(function(i) {
                                return i.style[t] = e
                            }) : i.getComputedStyle(this[0])[t];
                        for (var n in t)
                            this.css(n, t[n]);
                        return this
                    }
                }),
                w(["Width", "Height"], function(t) {
                    var e = t.toLowerCase();
                    b[e] = function() {
                        return this[0].getBoundingClientRect()[e]
                    }
                    ,
                    b["inner" + t] = function() {
                        return this[0]["client" + t]
                    }
                    ,
                    b["outer" + t] = function(e) {
                        return this[0]["offset" + t] + (e ? z(this, "margin" + ("Width" === t ? "Left" : "Top")) + z(this, "margin" + ("Width" === t ? "Right" : "Bottom")) : 0)
                    }
                }),
                b.extend({
                    off: function(t, e) {
                        return this.each(function(i) {
                            return R(i, t, e)
                        })
                    },
                    on: function(t, e, i, n) {
                        var o;
                        if (!u(t)) {
                            for (var s in t)
                                this.on(s, e, t[s]);
                            return this
                        }
                        return h(e) && (i = e,
                        e = null),
                        "ready" === t ? (v(i),
                        this) : (e && (o = i,
                        i = function(t) {
                            for (var i = t.target; !L(i, e); ) {
                                if (i === this || null === i)
                                    return i = !1;
                                i = i.parentNode
                            }
                            i && o.call(i, t)
                        }
                        ),
                        this.each(function(e) {
                            var o = i;
                            n && (o = function() {
                                i.apply(this, arguments),
                                R(e, t, o)
                            }
                            ),
                            function(t, e, i) {
                                var n = M(t, "_cashEvents") || T(t, "_cashEvents", {});
                                n[e] = n[e] || [],
                                n[e].push(i),
                                t.addEventListener(e, i)
                            }(e, t, o)
                        }))
                    },
                    one: function(t, e, i) {
                        return this.on(t, e, i, !0)
                    },
                    ready: v,
                    trigger: function(t, e) {
                        if (document.createEvent) {
                            var i = document.createEvent("HTMLEvents");
                            return i.initEvent(t, !0, !1),
                            i = this.extend(i, e),
                            this.each(function(t) {
                                return t.dispatchEvent(i)
                            })
                        }
                    }
                }),
                b.extend({
                    serialize: function() {
                        var t = "";
                        return w(this[0].elements || this, function(e) {
                            if (!e.disabled && "FIELDSET" !== e.tagName) {
                                var i = e.name;
                                switch (e.type.toLowerCase()) {
                                case "file":
                                case "reset":
                                case "submit":
                                case "button":
                                    break;
                                case "select-multiple":
                                    var n = j(e);
                                    null !== n && w(n, function(e) {
                                        t += H(i, e)
                                    });
                                    break;
                                default:
                                    var o = j(e);
                                    null !== o && (t += H(i, o))
                                }
                            }
                        }),
                        t.substr(1)
                    },
                    val: function(t) {
                        return void 0 === t ? j(this[0]) : this.each(function(e) {
                            return e.value = t
                        })
                    }
                }),
                b.extend({
                    after: function(t) {
                        return y(t).insertAfter(this),
                        this
                    },
                    append: function(t) {
                        return N(this, t),
                        this
                    },
                    appendTo: function(t) {
                        return N(y(t), this),
                        this
                    },
                    before: function(t) {
                        return y(t).insertBefore(this),
                        this
                    },
                    clone: function() {
                        return y(this.map(function(t) {
                            return t.cloneNode(!0)
                        }))
                    },
                    empty: function() {
                        return this.html(""),
                        this
                    },
                    html: function(t) {
                        if (void 0 === t)
                            return this[0].innerHTML;
                        var e = t.nodeType ? t[0].outerHTML : t;
                        return this.each(function(t) {
                            return t.innerHTML = e
                        })
                    },
                    insertAfter: function(t) {
                        var e = this;
                        return y(t).each(function(t, i) {
                            var n = t.parentNode
                              , o = t.nextSibling;
                            e.each(function(t) {
                                n.insertBefore(0 === i ? t : t.cloneNode(!0), o)
                            })
                        }),
                        this
                    },
                    insertBefore: function(t) {
                        var e = this;
                        return y(t).each(function(t, i) {
                            var n = t.parentNode;
                            e.each(function(e) {
                                n.insertBefore(0 === i ? e : e.cloneNode(!0), t)
                            })
                        }),
                        this
                    },
                    prepend: function(t) {
                        return N(this, t, !0),
                        this
                    },
                    prependTo: function(t) {
                        return N(y(t), this, !0),
                        this
                    },
                    remove: function() {
                        return this.each(function(t) {
                            if (t.parentNode)
                                return t.parentNode.removeChild(t)
                        })
                    },
                    text: function(t) {
                        return void 0 === t ? this[0].textContent : this.each(function(e) {
                            return e.textContent = t
                        })
                    }
                });
                var $ = e.documentElement;
                return b.extend({
                    position: function() {
                        var t = this[0];
                        return {
                            left: t.offsetLeft,
                            top: t.offsetTop
                        }
                    },
                    offset: function() {
                        var t = this[0].getBoundingClientRect();
                        return {
                            top: t.top + i.pageYOffset - $.clientTop,
                            left: t.left + i.pageXOffset - $.clientLeft
                        }
                    },
                    offsetParent: function() {
                        return y(this[0].offsetParent)
                    }
                }),
                b.extend({
                    children: function(t) {
                        var e = [];
                        return this.each(function(t) {
                            a.apply(e, t.children)
                        }),
                        e = k(e),
                        t ? e.filter(function(e) {
                            return L(e, t)
                        }) : e
                    },
                    closest: function(t) {
                        return !t || this.length < 1 ? y() : this.is(t) ? this.filter(t) : this.parent().closest(t)
                    },
                    is: function(t) {
                        if (!t)
                            return !1;
                        var e = !1
                          , i = x(t);
                        return this.each(function(n) {
                            return !(e = i(n, t))
                        }),
                        e
                    },
                    find: function(t) {
                        if (!t || t.nodeType)
                            return y(t && this.has(t).length ? t : null);
                        var e = [];
                        return this.each(function(i) {
                            a.apply(e, m(t, i))
                        }),
                        k(e)
                    },
                    has: function(t) {
                        var e = u(t) ? function(e) {
                            return 0 !== m(t, e).length
                        }
                        : function(e) {
                            return e.contains(t)
                        }
                        ;
                        return this.filter(e)
                    },
                    next: function() {
                        return y(this[0].nextElementSibling)
                    },
                    not: function(t) {
                        if (!t)
                            return this;
                        var e = x(t);
                        return this.filter(function(i) {
                            return !e(i, t)
                        })
                    },
                    parent: function() {
                        var t = [];
                        return this.each(function(e) {
                            e && e.parentNode && t.push(e.parentNode)
                        }),
                        k(t)
                    },
                    parents: function(t) {
                        var i, n = [];
                        return this.each(function(o) {
                            for (i = o; i && i.parentNode && i !== e.body.parentNode; )
                                i = i.parentNode,
                                (!t || t && L(i, t)) && n.push(i)
                        }),
                        k(n)
                    },
                    prev: function() {
                        return y(this[0].previousElementSibling)
                    },
                    siblings: function(t) {
                        var e = this.parent().children(t)
                          , i = this[0];
                        return e.filter(function(t) {
                            return t !== i
                        })
                    }
                }),
                y
            }()
        }();
        var u = function() {
            function t(e, i, n) {
                h(this, t),
                Element;
                var o = e.getInstance(i);
                o && o.destroy(),
                this.el = i,
                this.$el = cash(i)
            }
            return r(t, null, [{
                key: "init",
                value: function(t, e, i) {
                    var n = null;
                    if (e instanceof Element)
                        n = new t(e,i);
                    else if (e && (e.jquery || e.cash || e instanceof NodeList)) {
                        for (var o = [], s = 0; s < e.length; s++)
                            o.push(new t(e[s],i));
                        n = o
                    }
                    return n
                }
            }]),
            t
        }();
        !function(t) {
            t.Package ? M = {} : t.M = {},
            M.jQueryLoaded = !!t.jQuery
        }(window),
        void 0 === (n = function() {
            return M
        }
        .apply(e, [])) || (t.exports = n),
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
        document.addEventListener("keydown", function(t) {
            M.keyDown = !0,
            t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !0)
        }, !0),
        document.addEventListener("keyup", function(t) {
            M.keyDown = !1,
            t.which !== M.keys.TAB && t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || (M.tabPressed = !1)
        }, !0),
        document.addEventListener("focus", function(t) {
            M.keyDown && document.body.classList.add("keyboard-focused")
        }, !0),
        document.addEventListener("blur", function(t) {
            document.body.classList.remove("keyboard-focused")
        }, !0),
        M.initializeJqueryWrapper = function(t, e, i) {
            jQuery.fn[e] = function(n) {
                if (t.prototype[n]) {
                    var s = Array.prototype.slice.call(arguments, 1);
                    if ("get" === n.slice(0, 3)) {
                        var r = this.first()[0][i];
                        return r[n].apply(r, s)
                    }
                    return this.each(function() {
                        var t = this[i];
                        t[n].apply(t, s)
                    })
                }
                if ("object" === o(n) || !n)
                    return t.init(this, arguments[0]),
                    this;
                jQuery.error("Method " + n + " does not exist on jQuery." + e)
            }
        }
        ,
        M.AutoInit = function(t) {
            var e = t || document.body
              , i = {
                Autocomplete: e.querySelectorAll(".autocomplete:not(.no-autoinit)"),
                Carousel: e.querySelectorAll(".carousel:not(.no-autoinit)"),
                Chips: e.querySelectorAll(".chips:not(.no-autoinit)"),
                Collapsible: e.querySelectorAll(".collapsible:not(.no-autoinit)"),
                Datepicker: e.querySelectorAll(".datepicker:not(.no-autoinit)"),
                Dropdown: e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),
                Materialbox: e.querySelectorAll(".materialboxed:not(.no-autoinit)"),
                Modal: e.querySelectorAll(".modal:not(.no-autoinit)"),
                Parallax: e.querySelectorAll(".parallax:not(.no-autoinit)"),
                Pushpin: e.querySelectorAll(".pushpin:not(.no-autoinit)"),
                ScrollSpy: e.querySelectorAll(".scrollspy:not(.no-autoinit)"),
                FormSelect: e.querySelectorAll("select:not(.no-autoinit)"),
                Sidenav: e.querySelectorAll(".sidenav:not(.no-autoinit)"),
                Tabs: e.querySelectorAll(".tabs:not(.no-autoinit)"),
                TapTarget: e.querySelectorAll(".tap-target:not(.no-autoinit)"),
                Timepicker: e.querySelectorAll(".timepicker:not(.no-autoinit)"),
                Tooltip: e.querySelectorAll(".tooltipped:not(.no-autoinit)"),
                FloatingActionButton: e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")
            };
            for (var n in i) {
                M[n].init(i[n])
            }
        }
        ,
        M.objectSelectorString = function(t) {
            return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "")
        }
        ,
        M.guid = function() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }(),
        M.escapeHash = function(t) {
            return t.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1")
        }
        ,
        M.elementOrParentIsFixed = function(t) {
            var e = $(t)
              , i = !1;
            return e.add(e.parents()).each(function() {
                if ("fixed" === $(this).css("position"))
                    return i = !0,
                    !1
            }),
            i
        }
        ,
        M.checkWithinContainer = function(t, e, i) {
            var n = {
                top: !1,
                right: !1,
                bottom: !1,
                left: !1
            }
              , o = t.getBoundingClientRect()
              , s = t === document.body ? Math.max(o.bottom, window.innerHeight) : o.bottom
              , r = t.scrollLeft
              , a = t.scrollTop
              , l = e.left - r
              , h = e.top - a;
            return (l < o.left + i || l < i) && (n.left = !0),
            (l + e.width > o.right - i || l + e.width > window.innerWidth - i) && (n.right = !0),
            (h < o.top + i || h < i) && (n.top = !0),
            (h + e.height > s - i || h + e.height > window.innerHeight - i) && (n.bottom = !0),
            n
        }
        ,
        M.checkPossibleAlignments = function(t, e, i, n) {
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
              , s = "visible" === getComputedStyle(e).overflow
              , r = e.getBoundingClientRect()
              , a = Math.min(r.height, window.innerHeight)
              , l = Math.min(r.width, window.innerWidth)
              , h = t.getBoundingClientRect()
              , u = e.scrollLeft
              , c = e.scrollTop
              , d = i.left - u
              , p = i.top - c
              , f = i.top + h.height - c;
            return o.spaceOnRight = s ? window.innerWidth - (h.left + i.width) : l - (d + i.width),
            o.spaceOnRight < 0 && (o.left = !1),
            o.spaceOnLeft = s ? h.right - i.width : d - i.width + h.width,
            o.spaceOnLeft < 0 && (o.right = !1),
            o.spaceOnBottom = s ? window.innerHeight - (h.top + i.height + n) : a - (p + i.height + n),
            o.spaceOnBottom < 0 && (o.top = !1),
            o.spaceOnTop = s ? h.bottom - (i.height + n) : f - (i.height - n),
            o.spaceOnTop < 0 && (o.bottom = !1),
            o
        }
        ,
        M.getOverflowParent = function(t) {
            return null == t ? null : t === document.body || "visible" !== getComputedStyle(t).overflow ? t : M.getOverflowParent(t.parentElement)
        }
        ,
        M.getIdFromTrigger = function(t) {
            var e = t.getAttribute("data-target");
            return e || (e = (e = t.getAttribute("href")) ? e.slice(1) : ""),
            e
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
        var c = Date.now || function() {
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
        M.throttle = function(t, e, i) {
            var n = void 0
              , o = void 0
              , s = void 0
              , r = null
              , a = 0;
            i || (i = {});
            var l = function() {
                a = !1 === i.leading ? 0 : c(),
                r = null,
                s = t.apply(n, o),
                n = o = null
            };
            return function() {
                var h = c();
                a || !1 !== i.leading || (a = h);
                var u = e - (h - a);
                return n = this,
                o = arguments,
                u <= 0 ? (clearTimeout(r),
                r = null,
                a = h,
                s = t.apply(n, o),
                n = o = null) : r || !1 === i.trailing || (r = setTimeout(l, u)),
                s
            }
        }
        ;
        var d = {
            scope: {}
        };
        d.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, i) {
            if (i.get || i.set)
                throw new TypeError("ES3 does not support getters and setters.");
            t != Array.prototype && t != Object.prototype && (t[e] = i.value)
        }
        ,
        d.getGlobal = function(t) {
            return "undefined" != typeof window && window === t ? t : void 0 !== i && null != i ? i : t
        }
        ,
        d.global = d.getGlobal(this),
        d.SYMBOL_PREFIX = "jscomp_symbol_",
        d.initSymbol = function() {
            d.initSymbol = function() {}
            ,
            d.global.Symbol || (d.global.Symbol = d.Symbol)
        }
        ,
        d.symbolCounter_ = 0,
        d.Symbol = function(t) {
            return d.SYMBOL_PREFIX + (t || "") + d.symbolCounter_++
        }
        ,
        d.initSymbolIterator = function() {
            d.initSymbol();
            var t = d.global.Symbol.iterator;
            t || (t = d.global.Symbol.iterator = d.global.Symbol("iterator")),
            "function" != typeof Array.prototype[t] && d.defineProperty(Array.prototype, t, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return d.arrayIterator(this)
                }
            }),
            d.initSymbolIterator = function() {}
        }
        ,
        d.arrayIterator = function(t) {
            var e = 0;
            return d.iteratorPrototype(function() {
                return e < t.length ? {
                    done: !1,
                    value: t[e++]
                } : {
                    done: !0
                }
            })
        }
        ,
        d.iteratorPrototype = function(t) {
            return d.initSymbolIterator(),
            (t = {
                next: t
            })[d.global.Symbol.iterator] = function() {
                return this
            }
            ,
            t
        }
        ,
        d.array = d.array || {},
        d.iteratorFromArray = function(t, e) {
            d.initSymbolIterator(),
            t instanceof String && (t += "");
            var i = 0
              , n = {
                next: function() {
                    if (i < t.length) {
                        var o = i++;
                        return {
                            value: e(o, t[o]),
                            done: !1
                        }
                    }
                    return n.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    }
                    ,
                    n.next()
                }
            };
            return n[Symbol.iterator] = function() {
                return n
            }
            ,
            n
        }
        ,
        d.polyfill = function(t, e, i, n) {
            if (e) {
                for (i = d.global,
                t = t.split("."),
                n = 0; n < t.length - 1; n++) {
                    var o = t[n];
                    o in i || (i[o] = {}),
                    i = i[o]
                }
                (e = e(n = i[t = t[t.length - 1]])) != n && null != e && d.defineProperty(i, t, {
                    configurable: !0,
                    writable: !0,
                    value: e
                })
            }
        }
        ,
        d.polyfill("Array.prototype.keys", function(t) {
            return t || function() {
                return d.iteratorFromArray(this, function(t) {
                    return t
                })
            }
        }, "es6-impl", "es3");
        var p = this;
        !function(t) {
            M.anime = function() {
                function t(t) {
                    if (!P.col(t))
                        try {
                            return document.querySelectorAll(t)
                        } catch (t) {}
                }
                function e(t, e) {
                    for (var i = t.length, n = 2 <= arguments.length ? arguments[1] : void 0, o = [], s = 0; s < i; s++)
                        if (s in t) {
                            var r = t[s];
                            e.call(n, r, s, t) && o.push(r)
                        }
                    return o
                }
                function i(t) {
                    return t.reduce(function(t, e) {
                        return t.concat(P.arr(e) ? i(e) : e)
                    }, [])
                }
                function n(e) {
                    return P.arr(e) ? e : (P.str(e) && (e = t(e) || e),
                    e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
                }
                function o(t, e) {
                    return t.some(function(t) {
                        return t === e
                    })
                }
                function s(t) {
                    var e, i = {};
                    for (e in t)
                        i[e] = t[e];
                    return i
                }
                function r(t, e) {
                    var i, n = s(t);
                    for (i in t)
                        n[i] = e.hasOwnProperty(i) ? e[i] : t[i];
                    return n
                }
                function a(t, e) {
                    var i, n = s(t);
                    for (i in e)
                        n[i] = P.und(t[i]) ? e[i] : t[i];
                    return n
                }
                function l(t) {
                    if (t = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))
                        return t[2]
                }
                function h(t, e) {
                    return P.fnc(t) ? t(e.target, e.id, e.total) : t
                }
                function u(t, e) {
                    if (e in t.style)
                        return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
                }
                function c(t, e) {
                    return P.dom(t) && o(D, e) ? "transform" : P.dom(t) && (t.getAttribute(e) || P.svg(t) && t[e]) ? "attribute" : P.dom(t) && "transform" !== e && u(t, e) ? "css" : null != t[e] ? "object" : void 0
                }
                function d(t, i) {
                    switch (c(t, i)) {
                    case "transform":
                        return function(t, i) {
                            var n = function(t) {
                                if (-1 < t.indexOf("translate") || "perspective" === t)
                                    return "px";
                                if (-1 < t.indexOf("rotate") || -1 < t.indexOf("skew"))
                                    return "deg"
                            }(i)
                              , n = -1 < i.indexOf("scale") ? 1 : 0 + n;
                            if (!(t = t.style.transform))
                                return n;
                            for (var o = [], s = [], r = [], a = /(\w+)\((.+?)\)/g; o = a.exec(t); )
                                s.push(o[1]),
                                r.push(o[2]);
                            return (t = e(r, function(t, e) {
                                return s[e] === i
                            })).length ? t[0] : n
                        }(t, i);
                    case "css":
                        return u(t, i);
                    case "attribute":
                        return t.getAttribute(i)
                    }
                    return t[i] || 0
                }
                function f(t, e) {
                    var i = /^(\*=|\+=|-=)/.exec(t);
                    if (!i)
                        return t;
                    var n = l(t) || 0;
                    switch (e = parseFloat(e),
                    t = parseFloat(t.replace(i[0], "")),
                    i[0][0]) {
                    case "+":
                        return e + t + n;
                    case "-":
                        return e - t + n;
                    case "*":
                        return e * t + n
                    }
                }
                function m(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }
                function _(t) {
                    t = t.points;
                    for (var e, i = 0, n = 0; n < t.numberOfItems; n++) {
                        var o = t.getItem(n);
                        0 < n && (i += m(e, o)),
                        e = o
                    }
                    return i
                }
                function v(t) {
                    if (t.getTotalLength)
                        return t.getTotalLength();
                    switch (t.tagName.toLowerCase()) {
                    case "circle":
                        return 2 * Math.PI * t.getAttribute("r");
                    case "rect":
                        return 2 * t.getAttribute("width") + 2 * t.getAttribute("height");
                    case "line":
                        return m({
                            x: t.getAttribute("x1"),
                            y: t.getAttribute("y1")
                        }, {
                            x: t.getAttribute("x2"),
                            y: t.getAttribute("y2")
                        });
                    case "polyline":
                        return _(t);
                    case "polygon":
                        var e = t.points;
                        return _(t) + m(e.getItem(e.numberOfItems - 1), e.getItem(0))
                    }
                }
                function g(t, e) {
                    function i(i) {
                        return i = void 0 === i ? 0 : i,
                        t.el.getPointAtLength(1 <= e + i ? e + i : 0)
                    }
                    var n = i()
                      , o = i(-1)
                      , s = i(1);
                    switch (t.property) {
                    case "x":
                        return n.x;
                    case "y":
                        return n.y;
                    case "angle":
                        return 180 * Math.atan2(s.y - o.y, s.x - o.x) / Math.PI
                    }
                }
                function y(t, e) {
                    var i, n = /-?\d*\.?\d+/g;
                    if (i = P.pth(t) ? t.totalLength : t,
                    P.col(i))
                        if (P.rgb(i)) {
                            var o = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);
                            i = o ? "rgba(" + o[1] + ",1)" : i
                        } else
                            i = P.hex(i) ? function(t) {
                                t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                                    return e + e + i + i + n + n
                                });
                                var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                                t = parseInt(e[1], 16);
                                var i = parseInt(e[2], 16)
                                  , e = parseInt(e[3], 16);
                                return "rgba(" + t + "," + i + "," + e + ",1)"
                            }(i) : P.hsl(i) ? function(t) {
                                function e(t, e, i) {
                                    return 0 > i && (i += 1),
                                    1 < i && --i,
                                    i < 1 / 6 ? t + 6 * (e - t) * i : .5 > i ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
                                }
                                var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);
                                t = parseInt(i[1]) / 360;
                                var n = parseInt(i[2]) / 100
                                  , o = parseInt(i[3]) / 100
                                  , i = i[4] || 1;
                                if (0 == n)
                                    o = n = t = o;
                                else {
                                    var s = .5 > o ? o * (1 + n) : o + n - o * n
                                      , r = 2 * o - s
                                      , o = e(r, s, t + 1 / 3)
                                      , n = e(r, s, t);
                                    t = e(r, s, t - 1 / 3)
                                }
                                return "rgba(" + 255 * o + "," + 255 * n + "," + 255 * t + "," + i + ")"
                            }(i) : void 0;
                    else
                        o = (o = l(i)) ? i.substr(0, i.length - o.length) : i,
                        i = e && !/\s/g.test(i) ? o + e : o;
                    return {
                        original: i += "",
                        numbers: i.match(n) ? i.match(n).map(Number) : [0],
                        strings: P.str(t) || e ? i.split(n) : []
                    }
                }
                function b(t) {
                    return e(t = t ? i(P.arr(t) ? t.map(n) : n(t)) : [], function(t, e, i) {
                        return i.indexOf(t) === e
                    })
                }
                function w(t, e) {
                    var i = s(e);
                    if (P.arr(t)) {
                        var o = t.length;
                        2 !== o || P.obj(t[0]) ? P.fnc(e.duration) || (i.duration = e.duration / o) : t = {
                            value: t
                        }
                    }
                    return n(t).map(function(t, i) {
                        return i = i ? 0 : e.delay,
                        t = P.obj(t) && !P.pth(t) ? t : {
                            value: t
                        },
                        P.und(t.delay) && (t.delay = i),
                        t
                    }).map(function(t) {
                        return a(t, i)
                    })
                }
                function L(t, e) {
                    var i;
                    return t.tweens.map(function(n) {
                        var o = (n = function(t, e) {
                            var i, n = {};
                            for (i in t) {
                                var o = h(t[i], e);
                                P.arr(o) && (1 === (o = o.map(function(t) {
                                    return h(t, e)
                                })).length && (o = o[0])),
                                n[i] = o
                            }
                            return n.duration = parseFloat(n.duration),
                            n.delay = parseFloat(n.delay),
                            n
                        }(n, e)).value
                          , s = d(e.target, t.name)
                          , r = i ? i.to.original : s
                          , r = P.arr(o) ? o[0] : r
                          , a = f(P.arr(o) ? o[1] : o, r)
                          , s = l(a) || l(r) || l(s);
                        return n.from = y(r, s),
                        n.to = y(a, s),
                        n.start = i ? i.end : t.offset,
                        n.end = n.start + n.delay + n.duration,
                        n.easing = function(t) {
                            return P.arr(t) ? S.apply(this, t) : O[t]
                        }(n.easing),
                        n.elasticity = (1e3 - Math.min(Math.max(n.elasticity, 1), 999)) / 1e3,
                        n.isPath = P.pth(o),
                        n.isColor = P.col(n.from.original),
                        n.isColor && (n.round = 1),
                        i = n
                    })
                }
                function x(t, e, i, n) {
                    var o = "delay" === t;
                    return e.length ? (o ? Math.min : Math.max).apply(Math, e.map(function(e) {
                        return e[t]
                    })) : o ? n.delay : i.offset + n.delay + n.duration
                }
                function k(t) {
                    var n, o = r(T, t), s = r(M, t), l = function(t) {
                        var e = b(t);
                        return e.map(function(t, i) {
                            return {
                                target: t,
                                id: i,
                                total: e.length
                            }
                        })
                    }(t.targets), h = [], u = a(o, s);
                    for (n in t)
                        u.hasOwnProperty(n) || "targets" === n || h.push({
                            name: n,
                            offset: u.offset,
                            tweens: w(t[n], s)
                        });
                    return t = function(t, n) {
                        return e(i(t.map(function(t) {
                            return n.map(function(e) {
                                var i = c(t.target, e.name);
                                if (i) {
                                    var n = L(e, t);
                                    e = {
                                        type: i,
                                        property: e.name,
                                        animatable: t,
                                        tweens: n,
                                        duration: n[n.length - 1].end,
                                        delay: n[0].delay
                                    }
                                } else
                                    e = void 0;
                                return e
                            })
                        })), function(t) {
                            return !P.und(t)
                        })
                    }(l, h),
                    a(o, {
                        children: [],
                        animatables: l,
                        animations: t,
                        duration: x("duration", t, o, s),
                        delay: x("delay", t, o, s)
                    })
                }
                function C(t) {
                    function i() {
                        return window.Promise && new Promise(function(t) {
                            return d = t
                        }
                        )
                    }
                    function n(t) {
                        return f.reversed ? f.duration - t : t
                    }
                    function o(t) {
                        for (var i = 0, n = {}, o = f.animations, s = o.length; i < s; ) {
                            var r = o[i]
                              , a = r.animatable
                              , l = r.tweens
                              , h = l.length - 1
                              , c = l[h];
                            h && (c = e(l, function(e) {
                                return t < e.end
                            })[0] || c);
                            for (var l = Math.min(Math.max(t - c.start - c.delay, 0), c.duration) / c.duration, d = isNaN(l) ? 1 : c.easing(l, c.elasticity), l = c.to.strings, p = c.round, h = [], m = void 0, m = c.to.numbers.length, _ = 0; _ < m; _++) {
                                var v = void 0
                                  , v = c.to.numbers[_]
                                  , y = c.from.numbers[_]
                                  , v = c.isPath ? g(c.value, d * v) : y + d * (v - y);
                                p && (c.isColor && 2 < _ || (v = Math.round(v * p) / p)),
                                h.push(v)
                            }
                            if (c = l.length)
                                for (m = l[0],
                                d = 0; d < c; d++)
                                    p = l[d + 1],
                                    _ = h[d],
                                    isNaN(_) || (m = p ? m + (_ + p) : m + (_ + " "));
                            else
                                m = h[0];
                            I[r.type](a.target, r.property, m, n, a.id),
                            r.currentValue = m,
                            i++
                        }
                        if (i = Object.keys(n).length)
                            for (o = 0; o < i; o++)
                                E || (E = u(document.body, "transform") ? "transform" : "-webkit-transform"),
                                f.animatables[o].target.style[E] = n[o].join(" ");
                        f.currentTime = t,
                        f.progress = t / f.duration * 100
                    }
                    function s(t) {
                        f[t] && f[t](f)
                    }
                    function r() {
                        f.remaining && !0 !== f.remaining && f.remaining--
                    }
                    function a(t) {
                        var e = f.duration
                          , a = f.offset
                          , u = a + f.delay
                          , m = f.currentTime
                          , _ = f.reversed
                          , v = n(t);
                        if (f.children.length) {
                            var g = f.children
                              , y = g.length;
                            if (v >= f.currentTime)
                                for (var b = 0; b < y; b++)
                                    g[b].seek(v);
                            else
                                for (; y--; )
                                    g[y].seek(v)
                        }
                        (v >= u || !e) && (f.began || (f.began = !0,
                        s("begin")),
                        s("run")),
                        v > a && v < e ? o(v) : (v <= a && 0 !== m && (o(0),
                        _ && r()),
                        (v >= e && m !== e || !e) && (o(e),
                        _ || r())),
                        s("update"),
                        t >= e && (f.remaining ? (h = l,
                        "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(),
                        f.completed || (f.completed = !0,
                        s("complete"),
                        "Promise"in window && (d(),
                        p = i()))),
                        c = 0)
                    }
                    t = void 0 === t ? {} : t;
                    var l, h, c = 0, d = null, p = i(), f = k(t);
                    return f.reset = function() {
                        var t = f.direction
                          , e = f.loop;
                        for (f.currentTime = 0,
                        f.progress = 0,
                        f.paused = !0,
                        f.began = !1,
                        f.completed = !1,
                        f.reversed = "reverse" === t,
                        f.remaining = "alternate" === t && 1 === e ? 2 : e,
                        o(0),
                        t = f.children.length; t--; )
                            f.children[t].reset()
                    }
                    ,
                    f.tick = function(t) {
                        l = t,
                        h || (h = l),
                        a((c + l - h) * C.speed)
                    }
                    ,
                    f.seek = function(t) {
                        a(n(t))
                    }
                    ,
                    f.pause = function() {
                        var t = B.indexOf(f);
                        -1 < t && B.splice(t, 1),
                        f.paused = !0
                    }
                    ,
                    f.play = function() {
                        f.paused && (f.paused = !1,
                        h = 0,
                        c = n(f.currentTime),
                        B.push(f),
                        A || z())
                    }
                    ,
                    f.reverse = function() {
                        f.reversed = !f.reversed,
                        h = 0,
                        c = n(f.currentTime)
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
                var E, T = {
                    update: void 0,
                    begin: void 0,
                    run: void 0,
                    complete: void 0,
                    loop: 1,
                    direction: "normal",
                    autoplay: !0,
                    offset: 0
                }, M = {
                    duration: 1e3,
                    delay: 0,
                    easing: "easeOutElastic",
                    elasticity: 500,
                    round: 0
                }, D = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), P = {
                    arr: function(t) {
                        return Array.isArray(t)
                    },
                    obj: function(t) {
                        return -1 < Object.prototype.toString.call(t).indexOf("Object")
                    },
                    pth: function(t) {
                        return P.obj(t) && t.hasOwnProperty("totalLength")
                    },
                    svg: function(t) {
                        return t instanceof SVGElement
                    },
                    dom: function(t) {
                        return t.nodeType || P.svg(t)
                    },
                    str: function(t) {
                        return "string" == typeof t
                    },
                    fnc: function(t) {
                        return "function" == typeof t
                    },
                    und: function(t) {
                        return void 0 === t
                    },
                    hex: function(t) {
                        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
                    },
                    rgb: function(t) {
                        return /^rgb/.test(t)
                    },
                    hsl: function(t) {
                        return /^hsl/.test(t)
                    },
                    col: function(t) {
                        return P.hex(t) || P.rgb(t) || P.hsl(t)
                    }
                }, S = function() {
                    function t(t, e, i) {
                        return (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t
                    }
                    return function(e, i, n, o) {
                        if (0 <= e && 1 >= e && 0 <= n && 1 >= n) {
                            var s = new Float32Array(11);
                            if (e !== i || n !== o)
                                for (var r = 0; 11 > r; ++r)
                                    s[r] = t(.1 * r, e, n);
                            return function(r) {
                                if (e === i && n === o)
                                    return r;
                                if (0 === r)
                                    return 0;
                                if (1 === r)
                                    return 1;
                                for (var a = 0, l = 1; 10 !== l && s[l] <= r; ++l)
                                    a += .1;
                                var l = a + (r - s[--l]) / (s[l + 1] - s[l]) * .1
                                  , h = 3 * (1 - 3 * n + 3 * e) * l * l + 2 * (3 * n - 6 * e) * l + 3 * e;
                                if (.001 <= h) {
                                    for (a = 0; 4 > a && 0 !== (h = 3 * (1 - 3 * n + 3 * e) * l * l + 2 * (3 * n - 6 * e) * l + 3 * e); ++a)
                                        var u = t(l, e, n) - r
                                          , l = l - u / h;
                                    r = l
                                } else if (0 === h)
                                    r = l;
                                else {
                                    var l = a
                                      , a = a + .1
                                      , c = 0;
                                    do {
                                        0 < (h = t(u = l + (a - l) / 2, e, n) - r) ? a = u : l = u
                                    } while (1e-7 < Math.abs(h) && 10 > ++c);
                                    r = u
                                }
                                return t(r, i, o)
                            }
                        }
                    }
                }(), O = function() {
                    function t(t, e) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(2 * (t - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e)
                    }
                    var e, i = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), n = {
                        In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], t],
                        Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function(e, i) {
                            return 1 - t(1 - e, i)
                        }
                        ],
                        InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function(e, i) {
                            return .5 > e ? t(2 * e, i) / 2 : 1 - t(-2 * e + 2, i) / 2
                        }
                        ]
                    }, o = {
                        linear: S(.25, .25, .75, .75)
                    }, s = {};
                    for (e in n)
                        s.type = e,
                        n[s.type].forEach(function(t) {
                            return function(e, n) {
                                o["ease" + t.type + i[n]] = P.fnc(e) ? e : S.apply(p, e)
                            }
                        }(s)),
                        s = {
                            type: s.type
                        };
                    return o
                }(), I = {
                    css: function(t, e, i) {
                        return t.style[e] = i
                    },
                    attribute: function(t, e, i) {
                        return t.setAttribute(e, i)
                    },
                    object: function(t, e, i) {
                        return t[e] = i
                    },
                    transform: function(t, e, i, n, o) {
                        n[o] || (n[o] = []),
                        n[o].push(e + "(" + i + ")")
                    }
                }, B = [], A = 0, z = function() {
                    function t() {
                        A = requestAnimationFrame(e)
                    }
                    function e(e) {
                        var i = B.length;
                        if (i) {
                            for (var n = 0; n < i; )
                                B[n] && B[n].tick(e),
                                n++;
                            t()
                        } else
                            cancelAnimationFrame(A),
                            A = 0
                    }
                    return t
                }();
                return C.version = "2.2.0",
                C.speed = 1,
                C.running = B,
                C.remove = function(t) {
                    t = b(t);
                    for (var e = B.length; e--; )
                        for (var i = B[e], n = i.animations, s = n.length; s--; )
                            o(t, n[s].animatable.target) && (n.splice(s, 1),
                            n.length || i.pause())
                }
                ,
                C.getValue = d,
                C.path = function(e, i) {
                    var n = P.str(e) ? t(e)[0] : e
                      , o = i || 100;
                    return function(t) {
                        return {
                            el: n,
                            property: t,
                            totalLength: v(n) * (o / 100)
                        }
                    }
                }
                ,
                C.setDashoffset = function(t) {
                    var e = v(t);
                    return t.setAttribute("stroke-dasharray", e),
                    e
                }
                ,
                C.bezier = S,
                C.easings = O,
                C.timeline = function(t) {
                    var e = C(t);
                    return e.pause(),
                    e.duration = 0,
                    e.add = function(i) {
                        return e.children.forEach(function(t) {
                            t.began = !0,
                            t.completed = !0
                        }),
                        n(i).forEach(function(i) {
                            var n = a(i, r(M, t || {}));
                            n.targets = n.targets || t.targets,
                            i = e.duration;
                            var o = n.offset;
                            n.autoplay = !1,
                            n.direction = e.direction,
                            n.offset = P.und(o) ? i : f(o, i),
                            e.began = !0,
                            e.completed = !0,
                            e.seek(n.offset),
                            (n = C(n)).began = !0,
                            n.completed = !0,
                            n.duration > i && (e.duration = n.duration),
                            e.children.push(n)
                        }),
                        e.seek(0),
                        e.reset(),
                        e.autoplay && e.restart(),
                        e
                    }
                    ,
                    e
                }
                ,
                C.random = function(t, e) {
                    return Math.floor(Math.random() * (e - t + 1)) + t
                }
                ,
                C
            }()
        }(),
        function(t, e) {
            "use strict";
            var i = {
                accordion: !0,
                onOpenStart: void 0,
                onOpenEnd: void 0,
                onCloseStart: void 0,
                onCloseEnd: void 0,
                inDuration: 300,
                outDuration: 300
            }
              , n = function(n) {
                function o(e, i) {
                    h(this, o);
                    var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, e, i));
                    n.el.M_Collapsible = n,
                    n.options = t.extend({}, o.defaults, i),
                    n.$headers = n.$el.children("li").children(".collapsible-header"),
                    n.$headers.attr("tabindex", 0),
                    n._setupEventHandlers();
                    var s = n.$el.children("li.active").children(".collapsible-body");
                    return n.options.accordion ? s.first().css("display", "block") : s.css("display", "block"),
                    n
                }
                return l(o, u),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_Collapsible = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var t = this;
                        this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this),
                        this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this),
                        this.el.addEventListener("click", this._handleCollapsibleClickBound),
                        this.$headers.each(function(e) {
                            e.addEventListener("keydown", t._handleCollapsibleKeydownBound)
                        })
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var t = this;
                        this.el.removeEventListener("click", this._handleCollapsibleClickBound),
                        this.$headers.each(function(e) {
                            e.removeEventListener("keydown", t._handleCollapsibleKeydownBound)
                        })
                    }
                }, {
                    key: "_handleCollapsibleClick",
                    value: function(e) {
                        var i = t(e.target).closest(".collapsible-header");
                        if (e.target && i.length) {
                            var n = i.closest(".collapsible");
                            if (n[0] === this.el) {
                                var o = i.closest("li")
                                  , s = n.children("li")
                                  , r = o[0].classList.contains("active")
                                  , a = s.index(o);
                                r ? this.close(a) : this.open(a)
                            }
                        }
                    }
                }, {
                    key: "_handleCollapsibleKeydown",
                    value: function(t) {
                        13 === t.keyCode && this._handleCollapsibleClickBound(t)
                    }
                }, {
                    key: "_animateIn",
                    value: function(t) {
                        var i = this
                          , n = this.$el.children("li").eq(t);
                        if (n.length) {
                            var o = n.children(".collapsible-body");
                            e.remove(o[0]),
                            o.css({
                                display: "block",
                                overflow: "hidden",
                                height: 0,
                                paddingTop: "",
                                paddingBottom: ""
                            });
                            var s = o.css("padding-top")
                              , r = o.css("padding-bottom")
                              , a = o[0].scrollHeight;
                            o.css({
                                paddingTop: 0,
                                paddingBottom: 0
                            }),
                            e({
                                targets: o[0],
                                height: a,
                                paddingTop: s,
                                paddingBottom: r,
                                duration: this.options.inDuration,
                                easing: "easeInOutCubic",
                                complete: function(t) {
                                    o.css({
                                        overflow: "",
                                        paddingTop: "",
                                        paddingBottom: "",
                                        height: ""
                                    }),
                                    "function" == typeof i.options.onOpenEnd && i.options.onOpenEnd.call(i, n[0])
                                }
                            })
                        }
                    }
                }, {
                    key: "_animateOut",
                    value: function(t) {
                        var i = this
                          , n = this.$el.children("li").eq(t);
                        if (n.length) {
                            var o = n.children(".collapsible-body");
                            e.remove(o[0]),
                            o.css("overflow", "hidden"),
                            e({
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
                                    "function" == typeof i.options.onCloseEnd && i.options.onCloseEnd.call(i, n[0])
                                }
                            })
                        }
                    }
                }, {
                    key: "open",
                    value: function(e) {
                        var i = this
                          , n = this.$el.children("li").eq(e);
                        if (n.length && !n[0].classList.contains("active")) {
                            if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, n[0]),
                            this.options.accordion) {
                                var o = this.$el.children("li");
                                this.$el.children("li.active").each(function(e) {
                                    var n = o.index(t(e));
                                    i.close(n)
                                })
                            }
                            n[0].classList.add("active"),
                            this._animateIn(e)
                        }
                    }
                }, {
                    key: "close",
                    value: function(t) {
                        var e = this.$el.children("li").eq(t);
                        e.length && e[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, e[0]),
                        e[0].classList.remove("active"),
                        this._animateOut(t))
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Collapsible
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            M.Collapsible = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "collapsible", "M_Collapsible")
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var i = {
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
              , n = function(n) {
                function o(e, i) {
                    h(this, o);
                    var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, e, i));
                    return n.el.M_Dropdown = n,
                    o._dropdowns.push(n),
                    n.id = M.getIdFromTrigger(e),
                    n.dropdownEl = document.getElementById(n.id),
                    n.$dropdownEl = t(n.dropdownEl),
                    n.options = t.extend({}, o.defaults, i),
                    n.isOpen = !1,
                    n.isScrollable = !1,
                    n.isTouchMoving = !1,
                    n.focusedIndex = -1,
                    n.filterQuery = [],
                    n.options.container ? t(n.options.container).append(n.dropdownEl) : n.$el.after(n.dropdownEl),
                    n._makeDropdownFocusable(),
                    n._resetFilterQueryBound = n._resetFilterQuery.bind(n),
                    n._handleDocumentClickBound = n._handleDocumentClick.bind(n),
                    n._handleDocumentTouchmoveBound = n._handleDocumentTouchmove.bind(n),
                    n._handleDropdownClickBound = n._handleDropdownClick.bind(n),
                    n._handleDropdownKeydownBound = n._handleDropdownKeydown.bind(n),
                    n._handleTriggerKeydownBound = n._handleTriggerKeydown.bind(n),
                    n._setupEventHandlers(),
                    n
                }
                return l(o, u),
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
                    value: function(t) {
                        t.preventDefault(),
                        this.open()
                    }
                }, {
                    key: "_handleMouseEnter",
                    value: function() {
                        this.open()
                    }
                }, {
                    key: "_handleMouseLeave",
                    value: function(e) {
                        var i = e.toElement || e.relatedTarget
                          , n = !!t(i).closest(".dropdown-content").length
                          , o = !1
                          , s = t(i).closest(".dropdown-trigger");
                        s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (o = !0),
                        o || n || this.close()
                    }
                }, {
                    key: "_handleDocumentClick",
                    value: function(e) {
                        var i = this
                          , n = t(e.target);
                        this.options.closeOnClick && n.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function() {
                            i.close()
                        }, 0) : !n.closest(".dropdown-trigger").length && n.closest(".dropdown-content").length || setTimeout(function() {
                            i.close()
                        }, 0),
                        this.isTouchMoving = !1
                    }
                }, {
                    key: "_handleTriggerKeydown",
                    value: function(t) {
                        t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ENTER || this.isOpen || (t.preventDefault(),
                        this.open())
                    }
                }, {
                    key: "_handleDocumentTouchmove",
                    value: function(e) {
                        t(e.target).closest(".dropdown-content").length && (this.isTouchMoving = !0)
                    }
                }, {
                    key: "_handleDropdownClick",
                    value: function(e) {
                        if ("function" == typeof this.options.onItemClick) {
                            var i = t(e.target).closest("li")[0];
                            this.options.onItemClick.call(this, i)
                        }
                    }
                }, {
                    key: "_handleDropdownKeydown",
                    value: function(e) {
                        if (e.which === M.keys.TAB)
                            e.preventDefault(),
                            this.close();
                        else if (e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ARROW_UP || !this.isOpen)
                            if (e.which === M.keys.ENTER && this.isOpen) {
                                var i = this.dropdownEl.children[this.focusedIndex]
                                  , n = t(i).find("a, button").first();
                                n.length ? n[0].click() : i && i.click()
                            } else
                                e.which === M.keys.ESC && this.isOpen && (e.preventDefault(),
                                this.close());
                        else {
                            e.preventDefault();
                            var o = e.which === M.keys.ARROW_DOWN ? 1 : -1
                              , s = this.focusedIndex
                              , r = !1;
                            do {
                                if (s += o,
                                this.dropdownEl.children[s] && -1 !== this.dropdownEl.children[s].tabIndex) {
                                    r = !0;
                                    break
                                }
                            } while (s < this.dropdownEl.children.length && s >= 0);
                            r && (this.focusedIndex = s,
                            this._focusFocusedItem())
                        }
                        var a = String.fromCharCode(e.which).toLowerCase();
                        if (a && -1 === [9, 13, 27, 38, 40].indexOf(e.which)) {
                            this.filterQuery.push(a);
                            var l = this.filterQuery.join("")
                              , h = t(this.dropdownEl).find("li").filter(function(e) {
                                return 0 === t(e).text().toLowerCase().indexOf(l)
                            })[0];
                            h && (this.focusedIndex = t(h).index(),
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
                        t(this.dropdownEl).children().each(function(t) {
                            t.getAttribute("tabindex") || t.setAttribute("tabindex", 0)
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
                        var t = this.el.getBoundingClientRect()
                          , e = this.dropdownEl.getBoundingClientRect()
                          , i = e.height
                          , n = e.width
                          , o = t.left - e.left
                          , s = t.top - e.top
                          , r = {
                            left: o,
                            top: s,
                            height: i,
                            width: n
                        }
                          , a = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode
                          , l = M.checkPossibleAlignments(this.el, a, r, this.options.coverTrigger ? 0 : t.height)
                          , h = "top"
                          , u = this.options.alignment;
                        if (s += this.options.coverTrigger ? 0 : t.height,
                        this.isScrollable = !1,
                        l.top || (l.bottom ? h = "bottom" : (this.isScrollable = !0,
                        l.spaceOnTop > l.spaceOnBottom ? (h = "bottom",
                        i += l.spaceOnTop,
                        s -= l.spaceOnTop) : i += l.spaceOnBottom)),
                        !l[u]) {
                            var c = "left" === u ? "right" : "left";
                            l[c] ? u = c : l.spaceOnLeft > l.spaceOnRight ? (u = "right",
                            n += l.spaceOnLeft,
                            o -= l.spaceOnLeft) : (u = "left",
                            n += l.spaceOnRight)
                        }
                        return "bottom" === h && (s = s - e.height + (this.options.coverTrigger ? t.height : 0)),
                        "right" === u && (o = o - e.width + t.width),
                        {
                            x: o,
                            y: s,
                            verticalAlignment: h,
                            horizontalAlignment: u,
                            height: i,
                            width: n
                        }
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        var t = this;
                        e.remove(this.dropdownEl),
                        e({
                            targets: this.dropdownEl,
                            opacity: {
                                value: [0, 1],
                                easing: "easeOutQuad"
                            },
                            scaleX: [.3, 1],
                            scaleY: [.3, 1],
                            duration: this.options.inDuration,
                            easing: "easeOutQuint",
                            complete: function(e) {
                                t.options.autoFocus && t.dropdownEl.focus(),
                                "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                            }
                        })
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        var t = this;
                        e.remove(this.dropdownEl),
                        e({
                            targets: this.dropdownEl,
                            opacity: {
                                value: 0,
                                easing: "easeOutQuint"
                            },
                            scaleX: .3,
                            scaleY: .3,
                            duration: this.options.outDuration,
                            easing: "easeOutQuint",
                            complete: function(e) {
                                t._resetDropdownStyles(),
                                "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                            }
                        })
                    }
                }, {
                    key: "_placeDropdown",
                    value: function() {
                        var t = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
                        this.dropdownEl.style.width = t + "px";
                        var e = this._getDropdownPosition();
                        this.dropdownEl.style.left = e.x + "px",
                        this.dropdownEl.style.top = e.y + "px",
                        this.dropdownEl.style.height = e.height + "px",
                        this.dropdownEl.style.width = e.width + "px",
                        this.dropdownEl.style.transformOrigin = ("left" === e.horizontalAlignment ? "0" : "100%") + " " + ("top" === e.verticalAlignment ? "0" : "100%")
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
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Dropdown
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            n._dropdowns = [],
            M.Dropdown = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "dropdown", "M_Dropdown")
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var i = {
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
              , n = function(n) {
                function o(e, i) {
                    h(this, o);
                    var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, e, i));
                    return n.el.M_Modal = n,
                    n.options = t.extend({}, o.defaults, i),
                    n.isOpen = !1,
                    n.id = n.$el.attr("id"),
                    n._openingTrigger = void 0,
                    n.$overlay = t('<div class="modal-overlay"></div>'),
                    n.el.tabIndex = 0,
                    n._nthModalOpened = 0,
                    o._count++,
                    n._setupEventHandlers(),
                    n
                }
                return l(o, u),
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
                    value: function(e) {
                        var i = t(e.target).closest(".modal-trigger");
                        if (i.length) {
                            var n = M.getIdFromTrigger(i[0])
                              , o = document.getElementById(n).M_Modal;
                            o && o.open(i),
                            e.preventDefault()
                        }
                    }
                }, {
                    key: "_handleOverlayClick",
                    value: function() {
                        this.options.dismissible && this.close()
                    }
                }, {
                    key: "_handleModalCloseClick",
                    value: function(e) {
                        t(e.target).closest(".modal-close").length && this.close()
                    }
                }, {
                    key: "_handleKeydown",
                    value: function(t) {
                        27 === t.keyCode && this.options.dismissible && this.close()
                    }
                }, {
                    key: "_handleFocus",
                    value: function(t) {
                        this.el.contains(t.target) || this._nthModalOpened !== o._modalsOpen || this.el.focus()
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        var i = this;
                        t.extend(this.el.style, {
                            display: "block",
                            opacity: 0
                        }),
                        t.extend(this.$overlay[0].style, {
                            display: "block",
                            opacity: 0
                        }),
                        e({
                            targets: this.$overlay[0],
                            opacity: this.options.opacity,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        });
                        var n = {
                            targets: this.el,
                            duration: this.options.inDuration,
                            easing: "easeOutCubic",
                            complete: function() {
                                "function" == typeof i.options.onOpenEnd && i.options.onOpenEnd.call(i, i.el, i._openingTrigger)
                            }
                        };
                        this.el.classList.contains("bottom-sheet") ? (t.extend(n, {
                            bottom: 0,
                            opacity: 1
                        }),
                        e(n)) : (t.extend(n, {
                            top: [this.options.startingTop, this.options.endingTop],
                            opacity: 1,
                            scaleX: [.8, 1],
                            scaleY: [.8, 1]
                        }),
                        e(n))
                    }
                }, {
                    key: "_animateOut",
                    value: function() {
                        var i = this;
                        e({
                            targets: this.$overlay[0],
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuart"
                        });
                        var n = {
                            targets: this.el,
                            duration: this.options.outDuration,
                            easing: "easeOutCubic",
                            complete: function() {
                                i.el.style.display = "none",
                                i.$overlay.remove(),
                                "function" == typeof i.options.onCloseEnd && i.options.onCloseEnd.call(i, i.el)
                            }
                        };
                        this.el.classList.contains("bottom-sheet") ? (t.extend(n, {
                            bottom: "-100%",
                            opacity: 0
                        }),
                        e(n)) : (t.extend(n, {
                            top: [this.options.endingTop, this.options.startingTop],
                            opacity: 0,
                            scaleX: .8,
                            scaleY: .8
                        }),
                        e(n))
                    }
                }, {
                    key: "open",
                    value: function(t) {
                        if (!this.isOpen)
                            return this.isOpen = !0,
                            o._modalsOpen++,
                            this._nthModalOpened = o._modalsOpen,
                            this.$overlay[0].style.zIndex = 1e3 + 2 * o._modalsOpen,
                            this.el.style.zIndex = 1e3 + 2 * o._modalsOpen + 1,
                            this._openingTrigger = t ? t[0] : void 0,
                            "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger),
                            this.options.preventScrolling && (document.body.style.overflow = "hidden"),
                            this.el.classList.add("open"),
                            this.el.insertAdjacentElement("afterend", this.$overlay[0]),
                            this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this),
                            this._handleFocusBound = this._handleFocus.bind(this),
                            document.addEventListener("keydown", this._handleKeydownBound),
                            document.addEventListener("focus", this._handleFocusBound, !0)),
                            e.remove(this.el),
                            e.remove(this.$overlay[0]),
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
                            e.remove(this.el),
                            e.remove(this.$overlay[0]),
                            this._animateOut(),
                            this
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Modal
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            n._modalsOpen = 0,
            n._count = 0,
            M.Modal = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "modal", "M_Modal")
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var i = {
                inDuration: 275,
                outDuration: 200,
                onOpenStart: null,
                onOpenEnd: null,
                onCloseStart: null,
                onCloseEnd: null
            }
              , n = function(n) {
                function o(e, i) {
                    h(this, o);
                    var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, e, i));
                    return n.el.M_Materialbox = n,
                    n.options = t.extend({}, o.defaults, i),
                    n.overlayActive = !1,
                    n.doneAnimating = !0,
                    n.placeholder = t("<div></div>").addClass("material-placeholder"),
                    n.originalWidth = 0,
                    n.originalHeight = 0,
                    n.originInlineStyles = n.$el.attr("style"),
                    n.caption = n.el.getAttribute("data-caption") || "",
                    n.$el.before(n.placeholder),
                    n.placeholder.append(n.$el),
                    n._setupEventHandlers(),
                    n
                }
                return l(o, u),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_Materialbox = void 0,
                        t(this.placeholder).after(this.el).remove(),
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
                    value: function(t) {
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
                    value: function(t) {
                        27 === t.keyCode && this.doneAnimating && this.overlayActive && this.close()
                    }
                }, {
                    key: "_makeAncestorsOverflowVisible",
                    value: function() {
                        this.ancestorsChanged = t();
                        for (var e = this.placeholder[0].parentNode; null !== e && !t(e).is(document); ) {
                            var i = t(e);
                            "visible" !== i.css("overflow") && (i.css("overflow", "visible"),
                            void 0 === this.ancestorsChanged ? this.ancestorsChanged = i : this.ancestorsChanged = this.ancestorsChanged.add(i)),
                            e = e.parentNode
                        }
                    }
                }, {
                    key: "_animateImageIn",
                    value: function() {
                        var t = this
                          , i = {
                            targets: this.el,
                            height: [this.originalHeight, this.newHeight],
                            width: [this.originalWidth, this.newWidth],
                            left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
                            top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                t.doneAnimating = !0,
                                "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                            }
                        };
                        this.maxWidth = this.$el.css("max-width"),
                        this.maxHeight = this.$el.css("max-height"),
                        "none" !== this.maxWidth && (i.maxWidth = this.newWidth),
                        "none" !== this.maxHeight && (i.maxHeight = this.newHeight),
                        e(i)
                    }
                }, {
                    key: "_animateImageOut",
                    value: function() {
                        var t = this
                          , i = {
                            targets: this.el,
                            width: this.originalWidth,
                            height: this.originalHeight,
                            left: 0,
                            top: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                t.placeholder.css({
                                    height: "",
                                    width: "",
                                    position: "",
                                    top: "",
                                    left: ""
                                }),
                                t.attrWidth && t.$el.attr("width", t.attrWidth),
                                t.attrHeight && t.$el.attr("height", t.attrHeight),
                                t.$el.removeAttr("style"),
                                t.originInlineStyles && t.$el.attr("style", t.originInlineStyles),
                                t.$el.removeClass("active"),
                                t.doneAnimating = !0,
                                t.ancestorsChanged.length && t.ancestorsChanged.css("overflow", ""),
                                "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                            }
                        };
                        e(i)
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
                        var i = this;
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
                        this.$overlay = t('<div id="materialbox-overlay"></div>').css({
                            opacity: 0
                        }).one("click", function() {
                            i.doneAnimating && i.close()
                        }),
                        this.$el.before(this.$overlay);
                        var n = this.$overlay[0].getBoundingClientRect();
                        this.$overlay.css({
                            width: this.windowWidth + "px",
                            height: this.windowHeight + "px",
                            left: -1 * n.left + "px",
                            top: -1 * n.top + "px"
                        }),
                        e.remove(this.el),
                        e.remove(this.$overlay[0]),
                        e({
                            targets: this.$overlay[0],
                            opacity: 1,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        }),
                        "" !== this.caption && (this.$photocaption && e.remove(this.$photoCaption[0]),
                        this.$photoCaption = t('<div class="materialbox-caption"></div>'),
                        this.$photoCaption.text(this.caption),
                        t("body").append(this.$photoCaption),
                        this.$photoCaption.css({
                            display: "inline"
                        }),
                        e({
                            targets: this.$photoCaption[0],
                            opacity: 1,
                            duration: this.options.inDuration,
                            easing: "easeOutQuad"
                        }));
                        var o = 0
                          , s = this.originalWidth / this.windowWidth
                          , r = this.originalHeight / this.windowHeight;
                        this.newWidth = 0,
                        this.newHeight = 0,
                        s > r ? (o = this.originalHeight / this.originalWidth,
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
                        var t = this;
                        this._updateVars(),
                        this.doneAnimating = !1,
                        "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                        e.remove(this.el),
                        e.remove(this.$overlay[0]),
                        "" !== this.caption && e.remove(this.$photoCaption[0]),
                        window.removeEventListener("scroll", this._handleWindowScrollBound),
                        window.removeEventListener("resize", this._handleWindowResizeBound),
                        window.removeEventListener("keyup", this._handleWindowEscapeBound),
                        e({
                            targets: this.$overlay[0],
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                t.overlayActive = !1,
                                t.$overlay.remove()
                            }
                        }),
                        this._animateImageOut(),
                        "" !== this.caption && e({
                            targets: this.$photoCaption[0],
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                t.$photoCaption.remove()
                            }
                        })
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Materialbox
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            M.Materialbox = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "materialbox", "M_Materialbox")
        }(cash, M.anime),
        function(t) {
            "use strict";
            var e = {
                responsiveThreshold: 0
            }
              , i = function(i) {
                function n(e, i) {
                    h(this, n);
                    var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
                    return o.el.M_Parallax = o,
                    o.options = t.extend({}, n.defaults, i),
                    o._enabled = window.innerWidth > o.options.responsiveThreshold,
                    o.$img = o.$el.find("img").first(),
                    o.$img.each(function() {
                        this.complete && t(this).trigger("load")
                    }),
                    o._updateParallax(),
                    o._setupEventHandlers(),
                    o._setupStyles(),
                    n._parallaxes.push(o),
                    o
                }
                return l(n, u),
                r(n, [{
                    key: "destroy",
                    value: function() {
                        n._parallaxes.splice(n._parallaxes.indexOf(this), 1),
                        this.$img[0].style.transform = "",
                        this._removeEventHandlers(),
                        this.$el[0].M_Parallax = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        this._handleImageLoadBound = this._handleImageLoad.bind(this),
                        this.$img[0].addEventListener("load", this._handleImageLoadBound),
                        0 === n._parallaxes.length && (n._handleScrollThrottled = M.throttle(n._handleScroll, 5),
                        window.addEventListener("scroll", n._handleScrollThrottled),
                        n._handleWindowResizeThrottled = M.throttle(n._handleWindowResize, 5),
                        window.addEventListener("resize", n._handleWindowResizeThrottled))
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.$img[0].removeEventListener("load", this._handleImageLoadBound),
                        0 === n._parallaxes.length && (window.removeEventListener("scroll", n._handleScrollThrottled),
                        window.removeEventListener("resize", n._handleWindowResizeThrottled))
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
                        var t = this.$el.height() > 0 ? this.el.parentNode.offsetHeight : 500
                          , e = this.$img[0].offsetHeight - t
                          , i = this.$el.offset().top + t
                          , n = this.$el.offset().top
                          , o = M.getDocumentScrollTop()
                          , s = window.innerHeight
                          , r = e * ((o + s - n) / (t + s));
                        this._enabled ? i > o && n < o + s && (this.$img[0].style.transform = "translate3D(-50%, " + r + "px, 0)") : this.$img[0].style.transform = ""
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Parallax
                    }
                }, {
                    key: "_handleScroll",
                    value: function() {
                        for (var t = 0; t < n._parallaxes.length; t++) {
                            var e = n._parallaxes[t];
                            e._updateParallax.call(e)
                        }
                    }
                }, {
                    key: "_handleWindowResize",
                    value: function() {
                        for (var t = 0; t < n._parallaxes.length; t++) {
                            var e = n._parallaxes[t];
                            e._enabled = window.innerWidth > e.options.responsiveThreshold
                        }
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                n
            }();
            i._parallaxes = [],
            M.Parallax = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "parallax", "M_Parallax")
        }(cash),
        function(t, e) {
            "use strict";
            var i = {
                duration: 300,
                onShow: null,
                swipeable: !1,
                responsiveThreshold: 1 / 0
            }
              , n = function(n) {
                function o(e, i) {
                    h(this, o);
                    var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, e, i));
                    return n.el.M_Tabs = n,
                    n.options = t.extend({}, o.defaults, i),
                    n.$tabLinks = n.$el.children("li.tab").children("a"),
                    n.index = 0,
                    n._setupActiveTabLink(),
                    n.options.swipeable ? n._setupSwipeableTabs() : n._setupNormalTabs(),
                    n._setTabsAndTabWidth(),
                    n._createIndicator(),
                    n._setupEventHandlers(),
                    n
                }
                return l(o, u),
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
                    value: function(e) {
                        var i = this
                          , n = t(e.target).closest("li.tab")
                          , o = t(e.target).closest("a");
                        if (o.length && o.parent().hasClass("tab"))
                            if (n.hasClass("disabled"))
                                e.preventDefault();
                            else if (!o.attr("target")) {
                                this.$activeTabLink.removeClass("active");
                                var s = this.$content;
                                this.$activeTabLink = o,
                                this.$content = t(M.escapeHash(o[0].hash)),
                                this.$tabLinks = this.$el.children("li.tab").children("a"),
                                this.$activeTabLink.addClass("active");
                                var r = this.index;
                                this.index = Math.max(this.$tabLinks.index(o), 0),
                                this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index, function() {
                                    "function" == typeof i.options.onShow && i.options.onShow.call(i, i.$content[0])
                                }) : this.$content.length && (this.$content[0].style.display = "block",
                                this.$content.addClass("active"),
                                "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]),
                                s.length && !s.is(this.$content) && (s[0].style.display = "none",
                                s.removeClass("active"))),
                                this._setTabsAndTabWidth(),
                                this._animateIndicator(r),
                                e.preventDefault()
                            }
                    }
                }, {
                    key: "_createIndicator",
                    value: function() {
                        var t = this
                          , e = document.createElement("li");
                        e.classList.add("indicator"),
                        this.el.appendChild(e),
                        this._indicator = e,
                        setTimeout(function() {
                            t._indicator.style.left = t._calcLeftPos(t.$activeTabLink) + "px",
                            t._indicator.style.right = t._calcRightPos(t.$activeTabLink) + "px"
                        }, 0)
                    }
                }, {
                    key: "_setupActiveTabLink",
                    value: function() {
                        this.$activeTabLink = t(this.$tabLinks.filter('[href="' + location.hash + '"]')),
                        0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()),
                        0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()),
                        this.$tabLinks.removeClass("active"),
                        this.$activeTabLink[0].classList.add("active"),
                        this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0),
                        this.$activeTabLink.length && (this.$content = t(M.escapeHash(this.$activeTabLink[0].hash)),
                        this.$content.addClass("active"))
                    }
                }, {
                    key: "_setupSwipeableTabs",
                    value: function() {
                        var e = this;
                        window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
                        var i = t();
                        this.$tabLinks.each(function(e) {
                            var n = t(M.escapeHash(e.hash));
                            n.addClass("carousel-item"),
                            i = i.add(n)
                        });
                        var n = t('<div class="tabs-content carousel carousel-slider"></div>');
                        i.first().before(n),
                        n.append(i),
                        i[0].style.display = "";
                        var o = this.$activeTabLink.closest(".tab").index();
                        this._tabsCarousel = M.Carousel.init(n[0], {
                            fullWidth: !0,
                            noWrap: !0,
                            onCycleTo: function(i) {
                                var n = e.index;
                                e.index = t(i).index(),
                                e.$activeTabLink.removeClass("active"),
                                e.$activeTabLink = e.$tabLinks.eq(e.index),
                                e.$activeTabLink.addClass("active"),
                                e._animateIndicator(n),
                                "function" == typeof e.options.onShow && e.options.onShow.call(e, e.$content[0])
                            }
                        }),
                        this._tabsCarousel.set(o)
                    }
                }, {
                    key: "_teardownSwipeableTabs",
                    value: function() {
                        var t = this._tabsCarousel.$el;
                        this._tabsCarousel.destroy(),
                        t.after(t.children()),
                        t.remove()
                    }
                }, {
                    key: "_setupNormalTabs",
                    value: function() {
                        this.$tabLinks.not(this.$activeTabLink).each(function(e) {
                            if (e.hash) {
                                var i = t(M.escapeHash(e.hash));
                                i.length && (i[0].style.display = "none")
                            }
                        })
                    }
                }, {
                    key: "_teardownNormalTabs",
                    value: function() {
                        this.$tabLinks.each(function(e) {
                            if (e.hash) {
                                var i = t(M.escapeHash(e.hash));
                                i.length && (i[0].style.display = "")
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
                    value: function(t) {
                        return Math.ceil(this.tabsWidth - t.position().left - t[0].getBoundingClientRect().width)
                    }
                }, {
                    key: "_calcLeftPos",
                    value: function(t) {
                        return Math.floor(t.position().left)
                    }
                }, {
                    key: "updateTabIndicator",
                    value: function() {
                        this._setTabsAndTabWidth(),
                        this._animateIndicator(this.index)
                    }
                }, {
                    key: "_animateIndicator",
                    value: function(t) {
                        var i = 0
                          , n = 0;
                        this.index - t >= 0 ? i = 90 : n = 90;
                        var o = {
                            targets: this._indicator,
                            left: {
                                value: this._calcLeftPos(this.$activeTabLink),
                                delay: i
                            },
                            right: {
                                value: this._calcRightPos(this.$activeTabLink),
                                delay: n
                            },
                            duration: this.options.duration,
                            easing: "easeOutQuad"
                        };
                        e.remove(this._indicator),
                        e(o)
                    }
                }, {
                    key: "select",
                    value: function(t) {
                        var e = this.$tabLinks.filter('[href="#' + t + '"]');
                        e.length && e.trigger("click")
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Tabs
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            M.Tabs = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "tabs", "M_Tabs")
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var i = {
                exitDelay: 200,
                enterDelay: 0,
                html: null,
                margin: 5,
                inDuration: 250,
                outDuration: 200,
                position: "bottom",
                transitionMovement: 10
            }
              , n = function(n) {
                function o(e, i) {
                    h(this, o);
                    var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, e, i));
                    return n.el.M_Tooltip = n,
                    n.options = t.extend({}, o.defaults, i),
                    n.isOpen = !1,
                    n.isHovered = !1,
                    n.isFocused = !1,
                    n._appendTooltipEl(),
                    n._setupEventHandlers(),
                    n
                }
                return l(o, u),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        t(this.tooltipEl).remove(),
                        this._removeEventHandlers(),
                        this.el.M_Tooltip = void 0
                    }
                }, {
                    key: "_appendTooltipEl",
                    value: function() {
                        var t = document.createElement("div");
                        t.classList.add("material-tooltip"),
                        this.tooltipEl = t;
                        var e = document.createElement("div");
                        e.classList.add("tooltip-content"),
                        e.innerHTML = this.options.html,
                        t.appendChild(e),
                        document.body.appendChild(t)
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
                    value: function(e) {
                        this.isOpen || (e = void 0 === e || void 0,
                        this.isOpen = !0,
                        this.options = t.extend({}, this.options, this._getAttributeOptions()),
                        this._updateTooltipContent(),
                        this._setEnterDelayTimeout(e))
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
                        var t = this;
                        clearTimeout(this._exitDelayTimeout),
                        this._exitDelayTimeout = setTimeout(function() {
                            t.isHovered || t.isFocused || t._animateOut()
                        }, this.options.exitDelay)
                    }
                }, {
                    key: "_setEnterDelayTimeout",
                    value: function(t) {
                        var e = this;
                        clearTimeout(this._enterDelayTimeout),
                        this._enterDelayTimeout = setTimeout(function() {
                            (e.isHovered || e.isFocused || t) && e._animateIn()
                        }, this.options.enterDelay)
                    }
                }, {
                    key: "_positionTooltip",
                    value: function() {
                        var e, i = this.el, n = this.tooltipEl, o = i.offsetHeight, s = i.offsetWidth, r = n.offsetHeight, a = n.offsetWidth, l = this.options.margin, h = void 0, u = void 0;
                        this.xMovement = 0,
                        this.yMovement = 0,
                        h = i.getBoundingClientRect().top + M.getDocumentScrollTop(),
                        u = i.getBoundingClientRect().left + M.getDocumentScrollLeft(),
                        "top" === this.options.position ? (h += -r - l,
                        u += s / 2 - a / 2,
                        this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (h += o / 2 - r / 2,
                        u += s + l,
                        this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (h += o / 2 - r / 2,
                        u += -a - l,
                        this.xMovement = -this.options.transitionMovement) : (h += o + l,
                        u += s / 2 - a / 2,
                        this.yMovement = this.options.transitionMovement),
                        e = this._repositionWithinScreen(u, h, a, r),
                        t(n).css({
                            top: e.y + "px",
                            left: e.x + "px"
                        })
                    }
                }, {
                    key: "_repositionWithinScreen",
                    value: function(t, e, i, n) {
                        var o = M.getDocumentScrollLeft()
                          , s = M.getDocumentScrollTop()
                          , r = t - o
                          , a = e - s
                          , l = {
                            left: r,
                            top: a,
                            width: i,
                            height: n
                        }
                          , h = this.options.margin + this.options.transitionMovement
                          , u = M.checkWithinContainer(document.body, l, h);
                        return u.left ? r = h : u.right && (r -= r + i - window.innerWidth),
                        u.top ? a = h : u.bottom && (a -= a + n - window.innerHeight),
                        {
                            x: r + o,
                            y: a + s
                        }
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        this._positionTooltip(),
                        this.tooltipEl.style.visibility = "visible",
                        e.remove(this.tooltipEl),
                        e({
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
                        e.remove(this.tooltipEl),
                        e({
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
                        var t = {}
                          , e = this.el.getAttribute("data-tooltip")
                          , i = this.el.getAttribute("data-position");
                        return e && (t.html = e),
                        i && (t.position = i),
                        t
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Tooltip
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            M.Tooltip = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "tooltip", "M_Tooltip")
        }(cash, M.anime),
        function(t) {
            "use strict";
            var e = e || {}
              , i = document.querySelectorAll.bind(document);
            function n(t) {
                var e = "";
                for (var i in t)
                    t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
                return e
            }
            var s = {
                duration: 750,
                show: function(t, e) {
                    if (2 === t.button)
                        return !1;
                    var i = e || this
                      , r = document.createElement("div");
                    r.className = "waves-ripple",
                    i.appendChild(r);
                    var a = function(t) {
                        var e, i, n = {
                            top: 0,
                            left: 0
                        }, s = t && t.ownerDocument;
                        return e = s.documentElement,
                        "undefined" !== o(t.getBoundingClientRect) && (n = t.getBoundingClientRect()),
                        i = function(t) {
                            return function(t) {
                                return null !== t && t === t.window
                            }(t) ? t : 9 === t.nodeType && t.defaultView
                        }(s),
                        {
                            top: n.top + i.pageYOffset - e.clientTop,
                            left: n.left + i.pageXOffset - e.clientLeft
                        }
                    }(i)
                      , l = t.pageY - a.top
                      , h = t.pageX - a.left
                      , u = "scale(" + i.clientWidth / 100 * 10 + ")";
                    "touches"in t && (l = t.touches[0].pageY - a.top,
                    h = t.touches[0].pageX - a.left),
                    r.setAttribute("data-hold", Date.now()),
                    r.setAttribute("data-scale", u),
                    r.setAttribute("data-x", h),
                    r.setAttribute("data-y", l);
                    var c = {
                        top: l + "px",
                        left: h + "px"
                    };
                    r.className = r.className + " waves-notransition",
                    r.setAttribute("style", n(c)),
                    r.className = r.className.replace("waves-notransition", ""),
                    c["-webkit-transform"] = u,
                    c["-moz-transform"] = u,
                    c["-ms-transform"] = u,
                    c["-o-transform"] = u,
                    c.transform = u,
                    c.opacity = "1",
                    c["-webkit-transition-duration"] = s.duration + "ms",
                    c["-moz-transition-duration"] = s.duration + "ms",
                    c["-o-transition-duration"] = s.duration + "ms",
                    c["transition-duration"] = s.duration + "ms",
                    c["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    c["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    c["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    c["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                    r.setAttribute("style", n(c))
                },
                hide: function(t) {
                    r.touchup(t);
                    var e = this
                      , i = (e.clientWidth,
                    null)
                      , o = e.getElementsByClassName("waves-ripple");
                    if (!(o.length > 0))
                        return !1;
                    var a = (i = o[o.length - 1]).getAttribute("data-x")
                      , l = i.getAttribute("data-y")
                      , h = i.getAttribute("data-scale")
                      , u = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
                    u < 0 && (u = 0),
                    setTimeout(function() {
                        var t = {
                            top: l + "px",
                            left: a + "px",
                            opacity: "0",
                            "-webkit-transition-duration": s.duration + "ms",
                            "-moz-transition-duration": s.duration + "ms",
                            "-o-transition-duration": s.duration + "ms",
                            "transition-duration": s.duration + "ms",
                            "-webkit-transform": h,
                            "-moz-transform": h,
                            "-ms-transform": h,
                            "-o-transform": h,
                            transform: h
                        };
                        i.setAttribute("style", n(t)),
                        setTimeout(function() {
                            try {
                                e.removeChild(i)
                            } catch (t) {
                                return !1
                            }
                        }, s.duration)
                    }, u)
                },
                wrapInput: function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if ("input" === i.tagName.toLowerCase()) {
                            var n = i.parentNode;
                            if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect"))
                                continue;
                            var o = document.createElement("i");
                            o.className = i.className + " waves-input-wrapper";
                            var s = i.getAttribute("style");
                            s || (s = ""),
                            o.setAttribute("style", s),
                            i.className = "waves-button-input",
                            i.removeAttribute("style"),
                            n.replaceChild(o, i),
                            o.appendChild(i)
                        }
                    }
                }
            }
              , r = {
                touches: 0,
                allowEvent: function(t) {
                    var e = !0;
                    return "touchstart" === t.type ? r.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                        r.touches > 0 && (r.touches -= 1)
                    }, 500) : "mousedown" === t.type && r.touches > 0 && (e = !1),
                    e
                },
                touchup: function(t) {
                    r.allowEvent(t)
                }
            };
            function a(e) {
                var i = function(t) {
                    if (!1 === r.allowEvent(t))
                        return null;
                    for (var e = null, i = t.target || t.srcElement; null !== i.parentNode; ) {
                        if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) {
                            e = i;
                            break
                        }
                        i = i.parentNode
                    }
                    return e
                }(e);
                null !== i && (s.show(e, i),
                "ontouchstart"in t && (i.addEventListener("touchend", s.hide, !1),
                i.addEventListener("touchcancel", s.hide, !1)),
                i.addEventListener("mouseup", s.hide, !1),
                i.addEventListener("mouseleave", s.hide, !1),
                i.addEventListener("dragend", s.hide, !1))
            }
            e.displayEffect = function(e) {
                "duration"in (e = e || {}) && (s.duration = e.duration),
                s.wrapInput(i(".waves-effect")),
                "ontouchstart"in t && document.body.addEventListener("touchstart", a, !1),
                document.body.addEventListener("mousedown", a, !1)
            }
            ,
            e.attach = function(e) {
                "input" === e.tagName.toLowerCase() && (s.wrapInput([e]),
                e = e.parentNode),
                "ontouchstart"in t && e.addEventListener("touchstart", a, !1),
                e.addEventListener("mousedown", a, !1)
            }
            ,
            t.Waves = e,
            document.addEventListener("DOMContentLoaded", function() {
                e.displayEffect()
            }, !1)
        }(window),
        function(t, e) {
            "use strict";
            var i = {
                html: "",
                displayLength: 4e3,
                inDuration: 300,
                outDuration: 375,
                classes: "",
                completeCallback: null,
                activationPercent: .8
            }
              , n = function() {
                function n(e) {
                    h(this, n),
                    this.options = t.extend({}, n.defaults, e),
                    this.message = this.options.html,
                    this.panning = !1,
                    this.timeRemaining = this.options.displayLength,
                    0 === n._toasts.length && n._createContainer(),
                    n._toasts.push(this);
                    var i = this._createToast();
                    i.M_Toast = this,
                    this.el = i,
                    this.$el = t(i),
                    this._animateIn(),
                    this._setTimer()
                }
                return r(n, [{
                    key: "_createToast",
                    value: function() {
                        var e = document.createElement("div");
                        return e.classList.add("toast"),
                        this.options.classes.length && t(e).addClass(this.options.classes),
                        ("object" === ("undefined" == typeof HTMLElement ? "undefined" : o(HTMLElement)) ? this.message instanceof HTMLElement : this.message && "object" === o(this.message) && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? e.appendChild(this.message) : this.message.jquery ? t(e).append(this.message[0]) : e.innerHTML = this.message,
                        n._container.appendChild(e),
                        e
                    }
                }, {
                    key: "_animateIn",
                    value: function() {
                        e({
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
                        var t = this;
                        this.timeRemaining !== 1 / 0 && (this.counterInterval = setInterval(function() {
                            t.panning || (t.timeRemaining -= 20),
                            t.timeRemaining <= 0 && t.dismiss()
                        }, 20))
                    }
                }, {
                    key: "dismiss",
                    value: function() {
                        var t = this;
                        window.clearInterval(this.counterInterval);
                        var i = this.el.offsetWidth * this.options.activationPercent;
                        this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s",
                        this.el.style.transform = "translateX(" + i + "px)",
                        this.el.style.opacity = 0),
                        e({
                            targets: this.el,
                            opacity: 0,
                            marginTop: -40,
                            duration: this.options.outDuration,
                            easing: "easeOutExpo",
                            complete: function() {
                                "function" == typeof t.options.completeCallback && t.options.completeCallback(),
                                t.$el.remove(),
                                n._toasts.splice(n._toasts.indexOf(t), 1),
                                0 === n._toasts.length && n._removeContainer()
                            }
                        })
                    }
                }], [{
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Toast
                    }
                }, {
                    key: "_createContainer",
                    value: function() {
                        var t = document.createElement("div");
                        t.setAttribute("id", "toast-container"),
                        t.addEventListener("touchstart", n._onDragStart),
                        t.addEventListener("touchmove", n._onDragMove),
                        t.addEventListener("touchend", n._onDragEnd),
                        t.addEventListener("mousedown", n._onDragStart),
                        document.addEventListener("mousemove", n._onDragMove),
                        document.addEventListener("mouseup", n._onDragEnd),
                        document.body.appendChild(t),
                        n._container = t
                    }
                }, {
                    key: "_removeContainer",
                    value: function() {
                        document.removeEventListener("mousemove", n._onDragMove),
                        document.removeEventListener("mouseup", n._onDragEnd),
                        t(n._container).remove(),
                        n._container = null
                    }
                }, {
                    key: "_onDragStart",
                    value: function(e) {
                        if (e.target && t(e.target).closest(".toast").length) {
                            var i = t(e.target).closest(".toast")[0].M_Toast;
                            i.panning = !0,
                            n._draggedToast = i,
                            i.el.classList.add("panning"),
                            i.el.style.transition = "",
                            i.startingXPos = n._xPos(e),
                            i.time = Date.now(),
                            i.xPos = n._xPos(e)
                        }
                    }
                }, {
                    key: "_onDragMove",
                    value: function(t) {
                        if (n._draggedToast) {
                            t.preventDefault();
                            var e = n._draggedToast;
                            e.deltaX = Math.abs(e.xPos - n._xPos(t)),
                            e.xPos = n._xPos(t),
                            e.velocityX = e.deltaX / (Date.now() - e.time),
                            e.time = Date.now();
                            var i = e.xPos - e.startingXPos
                              , o = e.el.offsetWidth * e.options.activationPercent;
                            e.el.style.transform = "translateX(" + i + "px)",
                            e.el.style.opacity = 1 - Math.abs(i / o)
                        }
                    }
                }, {
                    key: "_onDragEnd",
                    value: function() {
                        if (n._draggedToast) {
                            var t = n._draggedToast;
                            t.panning = !1,
                            t.el.classList.remove("panning");
                            var e = t.xPos - t.startingXPos
                              , i = t.el.offsetWidth * t.options.activationPercent;
                            Math.abs(e) > i || t.velocityX > 1 ? (t.wasSwiped = !0,
                            t.dismiss()) : (t.el.style.transition = "transform .2s, opacity .2s",
                            t.el.style.transform = "",
                            t.el.style.opacity = ""),
                            n._draggedToast = null
                        }
                    }
                }, {
                    key: "_xPos",
                    value: function(t) {
                        return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
                    }
                }, {
                    key: "dismissAll",
                    value: function() {
                        for (var t in n._toasts)
                            n._toasts[t].dismiss()
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                n
            }();
            n._toasts = [],
            n._container = null,
            n._draggedToast = null,
            M.Toast = n,
            M.toast = function(t) {
                return new n(t)
            }
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var i = {
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
              , n = function(n) {
                function o(e, i) {
                    h(this, o);
                    var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, e, i));
                    return n.el.M_Sidenav = n,
                    n.id = n.$el.attr("id"),
                    n.options = t.extend({}, o.defaults, i),
                    n.isOpen = !1,
                    n.isFixed = n.el.classList.contains("sidenav-fixed"),
                    n.isDragged = !1,
                    n.lastWindowWidth = window.innerWidth,
                    n.lastWindowHeight = window.innerHeight,
                    n._createOverlay(),
                    n._createDragTarget(),
                    n._setupEventHandlers(),
                    n._setupClasses(),
                    n._setupFixed(),
                    o._sidenavs.push(n),
                    n
                }
                return l(o, u),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._enableBodyScrolling(),
                        this._overlay.parentNode.removeChild(this._overlay),
                        this.dragTarget.parentNode.removeChild(this.dragTarget),
                        this.el.M_Sidenav = void 0,
                        this.el.style.transform = "";
                        var t = o._sidenavs.indexOf(this);
                        t >= 0 && o._sidenavs.splice(t, 1)
                    }
                }, {
                    key: "_createOverlay",
                    value: function() {
                        var t = document.createElement("div");
                        this._closeBound = this.close.bind(this),
                        t.classList.add("sidenav-overlay"),
                        t.addEventListener("click", this._closeBound),
                        document.body.appendChild(t),
                        this._overlay = t
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
                    value: function(e) {
                        var i = t(e.target).closest(".sidenav-trigger");
                        if (e.target && i.length) {
                            var n = M.getIdFromTrigger(i[0])
                              , o = document.getElementById(n).M_Sidenav;
                            o && o.open(i),
                            e.preventDefault()
                        }
                    }
                }, {
                    key: "_startDrag",
                    value: function(t) {
                        var i = t.targetTouches[0].clientX;
                        this.isDragged = !0,
                        this._startingXpos = i,
                        this._xPos = this._startingXpos,
                        this._time = Date.now(),
                        this._width = this.el.getBoundingClientRect().width,
                        this._overlay.style.display = "block",
                        this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop(),
                        this._verticallyScrolling = !1,
                        e.remove(this.el),
                        e.remove(this._overlay)
                    }
                }, {
                    key: "_dragMoveUpdate",
                    value: function(t) {
                        var e = t.targetTouches[0].clientX
                          , i = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
                        this.deltaX = Math.abs(this._xPos - e),
                        this._xPos = e,
                        this.velocityX = this.deltaX / (Date.now() - this._time),
                        this._time = Date.now(),
                        this._initialScrollTop !== i && (this._verticallyScrolling = !0)
                    }
                }, {
                    key: "_handleDragTargetDrag",
                    value: function(t) {
                        if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
                            this.isDragged || this._startDrag(t),
                            this._dragMoveUpdate(t);
                            var e = this._xPos - this._startingXpos
                              , i = e > 0 ? "right" : "left";
                            e = Math.min(this._width, Math.abs(e)),
                            this.options.edge === i && (e = 0);
                            var n = e
                              , o = "translateX(-100%)";
                            "right" === this.options.edge && (o = "translateX(100%)",
                            n = -n),
                            this.percentOpen = Math.min(1, e / this._width),
                            this.el.style.transform = o + " translateX(" + n + "px)",
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
                    value: function(t) {
                        if (this.isOpen) {
                            if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling)
                                return;
                            this.isDragged || this._startDrag(t),
                            this._dragMoveUpdate(t);
                            var e = this._xPos - this._startingXpos
                              , i = e > 0 ? "right" : "left";
                            e = Math.min(this._width, Math.abs(e)),
                            this.options.edge !== i && (e = 0);
                            var n = -e;
                            "right" === this.options.edge && (n = -n),
                            this.percentOpen = Math.min(1, 1 - e / this._width),
                            this.el.style.transform = "translateX(" + n + "px)",
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
                    value: function(e) {
                        t(e.target).closest(".sidenav-close").length && !this._isCurrentlyFixed() && this.close()
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
                        var t = document.createElement("div");
                        t.classList.add("drag-target"),
                        document.body.appendChild(t),
                        this.dragTarget = t
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
                        this._isCurrentlyFixed() ? (e.remove(this.el),
                        e({
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
                                var t = "left" === this.options.edge ? "-105%" : "105%";
                                this.el.style.transform = "translateX(" + t + ")"
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
                        var t = this
                          , i = "left" === this.options.edge ? -1 : 1;
                        this.isDragged && (i = "left" === this.options.edge ? i + this.percentOpen : i - this.percentOpen),
                        e.remove(this.el),
                        e({
                            targets: this.el,
                            translateX: [100 * i + "%", 0],
                            duration: this.options.inDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                "function" == typeof t.options.onOpenEnd && t.options.onOpenEnd.call(t, t.el)
                            }
                        })
                    }
                }, {
                    key: "_animateOverlayIn",
                    value: function() {
                        var i = 0;
                        this.isDragged ? i = this.percentOpen : t(this._overlay).css({
                            display: "block"
                        }),
                        e.remove(this._overlay),
                        e({
                            targets: this._overlay,
                            opacity: [i, 1],
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
                        var t = this
                          , i = "left" === this.options.edge ? -1 : 1
                          , n = 0;
                        this.isDragged && (n = "left" === this.options.edge ? i + this.percentOpen : i - this.percentOpen),
                        e.remove(this.el),
                        e({
                            targets: this.el,
                            translateX: [100 * n + "%", 105 * i + "%"],
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t, t.el)
                            }
                        })
                    }
                }, {
                    key: "_animateOverlayOut",
                    value: function() {
                        var i = this;
                        e.remove(this._overlay),
                        e({
                            targets: this._overlay,
                            opacity: 0,
                            duration: this.options.outDuration,
                            easing: "easeOutQuad",
                            complete: function() {
                                t(i._overlay).css("display", "none")
                            }
                        })
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Sidenav
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            n._sidenavs = [],
            M.Sidenav = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "sidenav", "M_Sidenav")
        }(cash, M.anime),
        function(t, e) {
            "use strict";
            var i = {
                throttle: 100,
                scrollOffset: 200,
                activeClass: "active",
                getActiveElement: function(t) {
                    return 'a[href="#' + t + '"]'
                }
            }
              , n = function(n) {
                function o(e, i) {
                    h(this, o);
                    var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, e, i));
                    return n.el.M_ScrollSpy = n,
                    n.options = t.extend({}, o.defaults, i),
                    o._elements.push(n),
                    o._count++,
                    o._increment++,
                    n.tickId = -1,
                    n.id = o._increment,
                    n._setupEventHandlers(),
                    n._handleWindowScroll(),
                    n
                }
                return l(o, u),
                r(o, [{
                    key: "destroy",
                    value: function() {
                        o._elements.splice(o._elements.indexOf(this), 1),
                        o._elementsInView.splice(o._elementsInView.indexOf(this), 1),
                        o._visibleElements.splice(o._visibleElements.indexOf(this.$el), 1),
                        o._count--,
                        this._removeEventHandlers(),
                        t(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),
                        this.el.M_ScrollSpy = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var t = M.throttle(this._handleWindowScroll, 200);
                        this._handleThrottledResizeBound = t.bind(this),
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
                    value: function(i) {
                        for (var n = t(i.target), s = o._elements.length - 1; s >= 0; s--) {
                            var r = o._elements[s];
                            if (n.is('a[href="#' + r.$el.attr("id") + '"]')) {
                                i.preventDefault();
                                var a = r.$el.offset().top + 1;
                                e({
                                    targets: [document.documentElement, document.body],
                                    scrollTop: a - r.options.scrollOffset,
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
                        for (var t = M.getDocumentScrollTop(), e = M.getDocumentScrollLeft(), i = e + window.innerWidth, n = t + window.innerHeight, s = o._findElements(t, i, n, e), r = 0; r < s.length; r++) {
                            var a = s[r];
                            a.tickId < 0 && a._enter(),
                            a.tickId = o._ticks
                        }
                        for (var l = 0; l < o._elementsInView.length; l++) {
                            var h = o._elementsInView[l]
                              , u = h.tickId;
                            u >= 0 && u !== o._ticks && (h._exit(),
                            h.tickId = -1)
                        }
                        o._elementsInView = s
                    }
                }, {
                    key: "_enter",
                    value: function() {
                        o._visibleElements = o._visibleElements.filter(function(t) {
                            return 0 != t.height()
                        }),
                        o._visibleElements[0] ? (t(this.options.getActiveElement(o._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                        o._visibleElements[0][0].M_ScrollSpy && this.id < o._visibleElements[0][0].M_ScrollSpy.id ? o._visibleElements.unshift(this.$el) : o._visibleElements.push(this.$el)) : o._visibleElements.push(this.$el),
                        t(this.options.getActiveElement(o._visibleElements[0].attr("id"))).addClass(this.options.activeClass)
                    }
                }, {
                    key: "_exit",
                    value: function() {
                        var e = this;
                        o._visibleElements = o._visibleElements.filter(function(t) {
                            return 0 != t.height()
                        }),
                        o._visibleElements[0] && (t(this.options.getActiveElement(o._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),
                        o._visibleElements = o._visibleElements.filter(function(t) {
                            return t.attr("id") != e.$el.attr("id")
                        }),
                        o._visibleElements[0] && t(this.options.getActiveElement(o._visibleElements[0].attr("id"))).addClass(this.options.activeClass))
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_ScrollSpy
                    }
                }, {
                    key: "_findElements",
                    value: function(t, e, i, n) {
                        for (var s = [], r = 0; r < o._elements.length; r++) {
                            var a = o._elements[r]
                              , l = t + a.options.scrollOffset || 200;
                            if (a.$el.height() > 0) {
                                var h = a.$el.offset().top
                                  , u = a.$el.offset().left
                                  , c = u + a.$el.width()
                                  , d = h + a.$el.height();
                                !(u > e || c < n || h > i || d < l) && s.push(a)
                            }
                        }
                        return s
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            n._elements = [],
            n._elementsInView = [],
            n._visibleElements = [],
            n._count = 0,
            n._increment = 0,
            n._ticks = 0,
            M.ScrollSpy = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "scrollSpy", "M_ScrollSpy")
        }(cash, M.anime),
        function(t) {
            "use strict";
            var e = {
                data: {},
                limit: 1 / 0,
                onAutocomplete: null,
                minLength: 1,
                sortFunction: function(t, e, i) {
                    return t.indexOf(i) - e.indexOf(i)
                }
            }
              , i = function(i) {
                function n(e, i) {
                    h(this, n);
                    var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
                    return o.el.M_Autocomplete = o,
                    o.options = t.extend({}, n.defaults, i),
                    o.isOpen = !1,
                    o.count = 0,
                    o.activeIndex = -1,
                    o.oldVal,
                    o.$inputField = o.$el.closest(".input-field"),
                    o.$active = t(),
                    o._mousedown = !1,
                    o._setupDropdown(),
                    o._setupEventHandlers(),
                    o
                }
                return l(n, u),
                r(n, [{
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
                        var e = this;
                        this.container = document.createElement("ul"),
                        this.container.id = "autocomplete-options-" + M.guid(),
                        t(this.container).addClass("autocomplete-content dropdown-content"),
                        this.$inputField.append(this.container),
                        this.el.setAttribute("data-target", this.container.id),
                        this.dropdown = M.Dropdown.init(this.el, {
                            autoFocus: !1,
                            closeOnClick: !1,
                            coverTrigger: !1,
                            onItemClick: function(i) {
                                e.selectOption(t(i))
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
                    value: function(t) {
                        "keyup" === t.type && (n._keydown = !1),
                        this.count = 0;
                        var e = this.el.value.toLowerCase();
                        13 !== t.keyCode && 38 !== t.keyCode && 40 !== t.keyCode && (this.oldVal === e || !M.tabPressed && "focus" === t.type || this.open(),
                        this.oldVal = e)
                    }
                }, {
                    key: "_handleInputKeydown",
                    value: function(e) {
                        n._keydown = !0;
                        var i = e.keyCode
                          , o = void 0
                          , s = t(this.container).children("li").length;
                        i === M.keys.ENTER && this.activeIndex >= 0 ? (o = t(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(o),
                        e.preventDefault()) : i !== M.keys.ARROW_UP && i !== M.keys.ARROW_DOWN || (e.preventDefault(),
                        i === M.keys.ARROW_UP && this.activeIndex > 0 && this.activeIndex--,
                        i === M.keys.ARROW_DOWN && this.activeIndex < s - 1 && this.activeIndex++,
                        this.$active.removeClass("active"),
                        this.activeIndex >= 0 && (this.$active = t(this.container).children("li").eq(this.activeIndex),
                        this.$active.addClass("active")))
                    }
                }, {
                    key: "_handleInputClick",
                    value: function(t) {
                        this.open()
                    }
                }, {
                    key: "_handleContainerMousedownAndTouchstart",
                    value: function(t) {
                        this._mousedown = !0
                    }
                }, {
                    key: "_handleContainerMouseupAndTouchend",
                    value: function(t) {
                        this._mousedown = !1
                    }
                }, {
                    key: "_highlight",
                    value: function(t, e) {
                        var i = e.find("img")
                          , n = e.text().toLowerCase().indexOf("" + t.toLowerCase())
                          , o = n + t.length - 1
                          , s = e.text().slice(0, n)
                          , r = e.text().slice(n, o + 1)
                          , a = e.text().slice(o + 1);
                        e.html("<span>" + s + "<span class='highlight'>" + r + "</span>" + a + "</span>"),
                        i.length && e.prepend(i)
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
                        t(this.container).empty(),
                        this._resetCurrentElement(),
                        this.oldVal = null,
                        this.isOpen = !1,
                        this._mousedown = !1
                    }
                }, {
                    key: "selectOption",
                    value: function(t) {
                        var e = t.text().trim();
                        this.el.value = e,
                        this.$el.trigger("change"),
                        this._resetAutocomplete(),
                        this.close(),
                        "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, e)
                    }
                }, {
                    key: "_renderDropdown",
                    value: function(e, i) {
                        var n = this;
                        this._resetAutocomplete();
                        var o = [];
                        for (var s in e)
                            if (e.hasOwnProperty(s) && -1 !== s.toLowerCase().indexOf(i)) {
                                if (this.count >= this.options.limit)
                                    break;
                                var r = {
                                    data: e[s],
                                    key: s
                                };
                                o.push(r),
                                this.count++
                            }
                        if (this.options.sortFunction) {
                            o.sort(function(t, e) {
                                return n.options.sortFunction(t.key.toLowerCase(), e.key.toLowerCase(), i.toLowerCase())
                            })
                        }
                        for (var a = 0; a < o.length; a++) {
                            var l = o[a]
                              , h = t("<li></li>");
                            l.data ? h.append('<img src="' + l.data + '" class="right circle"><span>' + l.key + "</span>") : h.append("<span>" + l.key + "</span>"),
                            t(this.container).append(h),
                            this._highlight(i, h)
                        }
                    }
                }, {
                    key: "open",
                    value: function() {
                        var t = this.el.value.toLowerCase();
                        this._resetAutocomplete(),
                        t.length >= this.options.minLength && (this.isOpen = !0,
                        this._renderDropdown(this.options.data, t)),
                        this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open()
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.dropdown.close()
                    }
                }, {
                    key: "updateData",
                    value: function(t) {
                        var e = this.el.value.toLowerCase();
                        this.options.data = t,
                        this.isOpen && this._renderDropdown(t, e)
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Autocomplete
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                n
            }();
            i._keydown = !1,
            M.Autocomplete = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "autocomplete", "M_Autocomplete")
        }(cash),
        function(t) {
            M.updateTextFields = function() {
                t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(e, i) {
                    var n = t(this);
                    e.value.length > 0 || t(e).is(":focus") || e.autofocus || null !== n.attr("placeholder") ? n.siblings("label").addClass("active") : e.validity ? n.siblings("label").toggleClass("active", !0 === e.validity.badInput) : n.siblings("label").removeClass("active")
                })
            }
            ,
            M.validate_field = function(t) {
                var e = null !== t.attr("data-length")
                  , i = parseInt(t.attr("data-length"))
                  , n = t[0].value.length;
                0 !== n || !1 !== t[0].validity.badInput || t.is(":required") ? t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"),
                t.addClass("valid")) : (t.removeClass("valid"),
                t.addClass("invalid"))) : t.hasClass("validate") && (t.removeClass("valid"),
                t.removeClass("invalid"))
            }
            ,
            M.textareaAutoResize = function(e) {
                if (e instanceof Element && (e = t(e)),
                e.length) {
                    var i = t(".hiddendiv").first();
                    i.length || (i = t('<div class="hiddendiv common"></div>'),
                    t("body").append(i));
                    var n = e.css("font-family")
                      , o = e.css("font-size")
                      , s = e.css("line-height")
                      , r = e.css("padding-top")
                      , a = e.css("padding-right")
                      , l = e.css("padding-bottom")
                      , h = e.css("padding-left");
                    o && i.css("font-size", o),
                    n && i.css("font-family", n),
                    s && i.css("line-height", s),
                    r && i.css("padding-top", r),
                    a && i.css("padding-right", a),
                    l && i.css("padding-bottom", l),
                    h && i.css("padding-left", h),
                    e.data("original-height") || e.data("original-height", e.height()),
                    "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"),
                    i.text(e[0].value + "\n");
                    var u = i.html().replace(/\n/g, "<br>");
                    i.html(u),
                    e[0].offsetWidth > 0 && e[0].offsetHeight > 0 ? i.css("width", e.width() + "px") : i.css("width", window.innerWidth / 2 + "px"),
                    e.data("original-height") <= i.innerHeight() ? e.css("height", i.innerHeight() + "px") : e[0].value.length < e.data("previous-length") && e.css("height", e.data("original-height") + "px"),
                    e.data("previous-length", e[0].value.length)
                }
            }
            ,
            t(document).ready(function() {
                var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
                t(document).on("change", e, function() {
                    0 === this.value.length && null === t(this).attr("placeholder") || t(this).siblings("label").addClass("active"),
                    M.validate_field(t(this))
                }),
                t(document).ready(function() {
                    M.updateTextFields()
                }),
                t(document).on("reset", function(i) {
                    var n = t(i.target);
                    n.is("form") && (n.find(e).removeClass("valid").removeClass("invalid"),
                    n.find(e).each(function(e) {
                        this.value.length && t(this).siblings("label").removeClass("active")
                    }),
                    setTimeout(function() {
                        n.find("select").each(function() {
                            this.M_FormSelect && t(this).trigger("change")
                        })
                    }, 0))
                }),
                document.addEventListener("focus", function(i) {
                    t(i.target).is(e) && t(i.target).siblings("label, .prefix").addClass("active")
                }, !0),
                document.addEventListener("blur", function(i) {
                    var n = t(i.target);
                    if (n.is(e)) {
                        var o = ".prefix";
                        0 === n[0].value.length && !0 !== n[0].validity.badInput && null === n.attr("placeholder") && (o += ", label"),
                        n.siblings(o).removeClass("active"),
                        M.validate_field(n)
                    }
                }, !0);
                t(document).on("keyup", "input[type=radio], input[type=checkbox]", function(e) {
                    if (e.which === M.keys.TAB)
                        return t(this).addClass("tabbed"),
                        void t(this).one("blur", function(e) {
                            t(this).removeClass("tabbed")
                        })
                });
                t(".materialize-textarea").each(function() {
                    var e = t(this);
                    e.data("original-height", e.height()),
                    e.data("previous-length", this.value.length),
                    M.textareaAutoResize(e)
                }),
                t(document).on("keyup", ".materialize-textarea", function() {
                    M.textareaAutoResize(t(this))
                }),
                t(document).on("keydown", ".materialize-textarea", function() {
                    M.textareaAutoResize(t(this))
                }),
                t(document).on("change", '.file-field input[type="file"]', function() {
                    for (var e = t(this).closest(".file-field").find("input.file-path"), i = t(this)[0].files, n = [], o = 0; o < i.length; o++)
                        n.push(i[o].name);
                    e[0].value = n.join(", "),
                    e.trigger("change")
                })
            })
        }(cash),
        function(t, e) {
            "use strict";
            var i = {
                indicators: !0,
                height: 400,
                duration: 500,
                interval: 6e3
            }
              , n = function(n) {
                function o(i, n) {
                    h(this, o);
                    var s = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, i, n));
                    return s.el.M_Slider = s,
                    s.options = t.extend({}, o.defaults, n),
                    s.$slider = s.$el.find(".slides"),
                    s.$slides = s.$slider.children("li"),
                    s.activeIndex = s.$slides.filter(function(e) {
                        return t(e).hasClass("active")
                    }).first().index(),
                    -1 != s.activeIndex && (s.$active = s.$slides.eq(s.activeIndex)),
                    s._setSliderHeight(),
                    s.$slides.find(".caption").each(function(t) {
                        s._animateCaptionIn(t, 0)
                    }),
                    s.$slides.find("img").each(function(e) {
                        var i = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                        t(e).attr("src") !== i && (t(e).css("background-image", 'url("' + t(e).attr("src") + '")'),
                        t(e).attr("src", i))
                    }),
                    s._setupIndicators(),
                    s.$active ? s.$active.css("display", "block") : (s.$slides.first().addClass("active"),
                    e({
                        targets: s.$slides.first()[0],
                        opacity: 1,
                        duration: s.options.duration,
                        easing: "easeOutQuad"
                    }),
                    s.activeIndex = 0,
                    s.$active = s.$slides.eq(s.activeIndex),
                    s.options.indicators && s.$indicators.eq(s.activeIndex).addClass("active")),
                    s.$active.find("img").each(function(t) {
                        e({
                            targets: s.$active.find(".caption")[0],
                            opacity: 1,
                            translateX: 0,
                            translateY: 0,
                            duration: s.options.duration,
                            easing: "easeOutQuad"
                        })
                    }),
                    s._setupEventHandlers(),
                    s.start(),
                    s
                }
                return l(o, u),
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
                        var t = this;
                        this._handleIntervalBound = this._handleInterval.bind(this),
                        this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                        this.options.indicators && this.$indicators.each(function(e) {
                            e.addEventListener("click", t._handleIndicatorClickBound)
                        })
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var t = this;
                        this.options.indicators && this.$indicators.each(function(e) {
                            e.removeEventListener("click", t._handleIndicatorClickBound)
                        })
                    }
                }, {
                    key: "_handleIndicatorClick",
                    value: function(e) {
                        var i = t(e.target).index();
                        this.set(i)
                    }
                }, {
                    key: "_handleInterval",
                    value: function() {
                        var t = this.$slider.find(".active").index();
                        this.$slides.length === t + 1 ? t = 0 : t += 1,
                        this.set(t)
                    }
                }, {
                    key: "_animateCaptionIn",
                    value: function(i, n) {
                        var o = {
                            targets: i,
                            opacity: 0,
                            duration: n,
                            easing: "easeOutQuad"
                        };
                        t(i).hasClass("center-align") ? o.translateY = -100 : t(i).hasClass("right-align") ? o.translateX = 100 : t(i).hasClass("left-align") && (o.translateX = -100),
                        e(o)
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
                        var e = this;
                        this.options.indicators && (this.$indicators = t('<ul class="indicators"></ul>'),
                        this.$slides.each(function(i, n) {
                            var o = t('<li class="indicator-item"></li>');
                            e.$indicators.append(o[0])
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
                    value: function(t) {
                        var i = this;
                        if (t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                        this.activeIndex != t) {
                            this.$active = this.$slides.eq(this.activeIndex);
                            var n = this.$active.find(".caption");
                            this.$active.removeClass("active"),
                            e({
                                targets: this.$active[0],
                                opacity: 0,
                                duration: this.options.duration,
                                easing: "easeOutQuad",
                                complete: function() {
                                    i.$slides.not(".active").each(function(t) {
                                        e({
                                            targets: t,
                                            opacity: 0,
                                            translateX: 0,
                                            translateY: 0,
                                            duration: 0,
                                            easing: "easeOutQuad"
                                        })
                                    })
                                }
                            }),
                            this._animateCaptionIn(n[0], this.options.duration),
                            this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"),
                            this.$indicators.eq(t).addClass("active")),
                            e({
                                targets: this.$slides.eq(t)[0],
                                opacity: 1,
                                duration: this.options.duration,
                                easing: "easeOutQuad"
                            }),
                            e({
                                targets: this.$slides.eq(t).find(".caption")[0],
                                opacity: 1,
                                translateX: 0,
                                translateY: 0,
                                duration: this.options.duration,
                                delay: this.options.duration,
                                easing: "easeOutQuad"
                            }),
                            this.$slides.eq(t).addClass("active"),
                            this.activeIndex = t,
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
                        var t = this.activeIndex + 1;
                        t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                        this.set(t)
                    }
                }, {
                    key: "prev",
                    value: function() {
                        var t = this.activeIndex - 1;
                        t >= this.$slides.length ? t = 0 : t < 0 && (t = this.$slides.length - 1),
                        this.set(t)
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Slider
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            M.Slider = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "slider", "M_Slider")
        }(cash, M.anime),
        function(t, e) {
            t(document).on("click", ".card", function(i) {
                if (t(this).children(".card-reveal").length) {
                    var n = t(i.target).closest(".card");
                    void 0 === n.data("initialOverflow") && n.data("initialOverflow", void 0 === n.css("overflow") ? "" : n.css("overflow"));
                    var o = t(this).find(".card-reveal");
                    t(i.target).is(t(".card-reveal .card-title")) || t(i.target).is(t(".card-reveal .card-title i")) ? e({
                        targets: o[0],
                        translateY: 0,
                        duration: 225,
                        easing: "easeInOutQuad",
                        complete: function(e) {
                            var i = e.animatables[0].target;
                            t(i).css({
                                display: "none"
                            }),
                            n.css("overflow", n.data("initialOverflow"))
                        }
                    }) : (t(i.target).is(t(".card .activator")) || t(i.target).is(t(".card .activator i"))) && (n.css("overflow", "hidden"),
                    o.css({
                        display: "block"
                    }),
                    e({
                        targets: o[0],
                        translateY: "-100%",
                        duration: 300,
                        easing: "easeInOutQuad"
                    }))
                }
            })
        }(cash, M.anime),
        function(t) {
            "use strict";
            var e = {
                data: [],
                placeholder: "",
                secondaryPlaceholder: "",
                autocompleteOptions: {},
                limit: 1 / 0,
                onChipAdd: null,
                onChipSelect: null,
                onChipDelete: null
            }
              , i = function(i) {
                function n(e, i) {
                    h(this, n);
                    var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
                    return o.el.M_Chips = o,
                    o.options = t.extend({}, n.defaults, i),
                    o.$el.addClass("chips input-field"),
                    o.chipsData = [],
                    o.$chips = t(),
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
                return l(n, u),
                r(n, [{
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
                        document.addEventListener("keydown", n._handleChipsKeydown),
                        document.addEventListener("keyup", n._handleChipsKeyup),
                        this.el.addEventListener("blur", n._handleChipsBlur, !0),
                        this.$input[0].addEventListener("focus", this._handleInputFocusBound),
                        this.$input[0].addEventListener("blur", this._handleInputBlurBound),
                        this.$input[0].addEventListener("keydown", this._handleInputKeydownBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        this.el.removeEventListener("click", this._handleChipClickBound),
                        document.removeEventListener("keydown", n._handleChipsKeydown),
                        document.removeEventListener("keyup", n._handleChipsKeyup),
                        this.el.removeEventListener("blur", n._handleChipsBlur, !0),
                        this.$input[0].removeEventListener("focus", this._handleInputFocusBound),
                        this.$input[0].removeEventListener("blur", this._handleInputBlurBound),
                        this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound)
                    }
                }, {
                    key: "_handleChipClick",
                    value: function(e) {
                        var i = t(e.target).closest(".chip")
                          , n = t(e.target).is(".close");
                        if (i.length) {
                            var o = i.index();
                            n ? (this.deleteChip(o),
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
                    value: function(t) {
                        if (n._keydown = !0,
                        13 === t.keyCode) {
                            if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen)
                                return;
                            t.preventDefault(),
                            this.addChip({
                                tag: this.$input[0].value
                            }),
                            this.$input[0].value = ""
                        } else
                            8 !== t.keyCode && 37 !== t.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (t.preventDefault(),
                            this.selectChip(this.chipsData.length - 1))
                    }
                }, {
                    key: "_renderChip",
                    value: function(e) {
                        if (e.tag) {
                            var i = document.createElement("div")
                              , n = document.createElement("i");
                            if (i.classList.add("chip"),
                            i.textContent = e.tag,
                            i.setAttribute("tabindex", 0),
                            t(n).addClass("material-icons close"),
                            n.textContent = "close",
                            e.image) {
                                var o = document.createElement("img");
                                o.setAttribute("src", e.image),
                                i.insertBefore(o, i.firstChild)
                            }
                            return i.appendChild(n),
                            i
                        }
                    }
                }, {
                    key: "_renderChips",
                    value: function() {
                        this.$chips.remove();
                        for (var t = 0; t < this.chipsData.length; t++) {
                            var e = this._renderChip(this.chipsData[t]);
                            this.$el.append(e),
                            this.$chips.add(e)
                        }
                        this.$el.append(this.$input[0])
                    }
                }, {
                    key: "_setupAutocomplete",
                    value: function() {
                        var t = this;
                        this.options.autocompleteOptions.onAutocomplete = function(e) {
                            t.addChip({
                                tag: e
                            }),
                            t.$input[0].value = "",
                            t.$input[0].focus()
                        }
                        ,
                        this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions)
                    }
                }, {
                    key: "_setupInput",
                    value: function() {
                        this.$input = this.$el.find("input"),
                        this.$input.length || (this.$input = t("<input></input>"),
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
                        void 0 !== this.chipsData && !this.chipsData.length && this.options.placeholder ? t(this.$input).prop("placeholder", this.options.placeholder) : (void 0 === this.chipsData || this.chipsData.length) && this.options.secondaryPlaceholder && t(this.$input).prop("placeholder", this.options.secondaryPlaceholder)
                    }
                }, {
                    key: "_isValid",
                    value: function(t) {
                        if (t.hasOwnProperty("tag") && "" !== t.tag) {
                            for (var e = !1, i = 0; i < this.chipsData.length; i++)
                                if (this.chipsData[i].tag === t.tag) {
                                    e = !0;
                                    break
                                }
                            return !e
                        }
                        return !1
                    }
                }, {
                    key: "addChip",
                    value: function(e) {
                        if (this._isValid(e) && !(this.chipsData.length >= this.options.limit)) {
                            var i = this._renderChip(e);
                            this.$chips.add(i),
                            this.chipsData.push(e),
                            t(this.$input).before(i),
                            this._setPlaceholder(),
                            "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, i)
                        }
                    }
                }, {
                    key: "deleteChip",
                    value: function(e) {
                        var i = this.$chips.eq(e);
                        this.$chips.eq(e).remove(),
                        this.$chips = this.$chips.filter(function(e) {
                            return t(e).index() >= 0
                        }),
                        this.chipsData.splice(e, 1),
                        this._setPlaceholder(),
                        "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, i[0])
                    }
                }, {
                    key: "selectChip",
                    value: function(t) {
                        var e = this.$chips.eq(t);
                        this._selectedChip = e,
                        e[0].focus(),
                        "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, e[0])
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Chips
                    }
                }, {
                    key: "_handleChipsKeydown",
                    value: function(e) {
                        n._keydown = !0;
                        var i = t(e.target).closest(".chips")
                          , o = e.target && i.length;
                        if (!t(e.target).is("input, textarea") && o) {
                            var s = i[0].M_Chips;
                            if (8 === e.keyCode || 46 === e.keyCode) {
                                e.preventDefault();
                                var r = s.chipsData.length;
                                if (s._selectedChip) {
                                    var a = s._selectedChip.index();
                                    s.deleteChip(a),
                                    s._selectedChip = null,
                                    r = Math.max(a - 1, 0)
                                }
                                s.chipsData.length && s.selectChip(r)
                            } else if (37 === e.keyCode) {
                                if (s._selectedChip) {
                                    var l = s._selectedChip.index() - 1;
                                    if (l < 0)
                                        return;
                                    s.selectChip(l)
                                }
                            } else if (39 === e.keyCode && s._selectedChip) {
                                var h = s._selectedChip.index() + 1;
                                h >= s.chipsData.length ? s.$input[0].focus() : s.selectChip(h)
                            }
                        }
                    }
                }, {
                    key: "_handleChipsKeyup",
                    value: function(t) {
                        n._keydown = !1
                    }
                }, {
                    key: "_handleChipsBlur",
                    value: function(e) {
                        n._keydown || (t(e.target).closest(".chips")[0].M_Chips._selectedChip = null)
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                n
            }();
            i._keydown = !1,
            M.Chips = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "chips", "M_Chips"),
            t(document).ready(function() {
                t(document.body).on("click", ".chip .close", function() {
                    var e = t(this).closest(".chips");
                    e.length && e[0].M_Chips || t(this).closest(".chip").remove()
                })
            })
        }(cash),
        function(t) {
            "use strict";
            var e = {
                top: 0,
                bottom: 1 / 0,
                offset: 0,
                onPositionChange: null
            }
              , i = function(i) {
                function n(e, i) {
                    h(this, n);
                    var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
                    return o.el.M_Pushpin = o,
                    o.options = t.extend({}, n.defaults, i),
                    o.originalOffset = o.el.offsetTop,
                    n._pushpins.push(o),
                    o._setupEventHandlers(),
                    o._updatePosition(),
                    o
                }
                return l(n, u),
                r(n, [{
                    key: "destroy",
                    value: function() {
                        this.el.style.top = null,
                        this._removePinClasses(),
                        this._removeEventHandlers();
                        var t = n._pushpins.indexOf(this);
                        n._pushpins.splice(t, 1)
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        document.addEventListener("scroll", n._updateElements)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        document.removeEventListener("scroll", n._updateElements)
                    }
                }, {
                    key: "_updatePosition",
                    value: function() {
                        var t = M.getDocumentScrollTop() + this.options.offset;
                        this.options.top <= t && this.options.bottom >= t && !this.el.classList.contains("pinned") && (this._removePinClasses(),
                        this.el.style.top = this.options.offset + "px",
                        this.el.classList.add("pinned"),
                        "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")),
                        t < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(),
                        this.el.style.top = 0,
                        this.el.classList.add("pin-top"),
                        "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")),
                        t > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(),
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
                    value: function(t, e) {
                        return s(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Pushpin
                    }
                }, {
                    key: "_updateElements",
                    value: function() {
                        for (var t in n._pushpins) {
                            n._pushpins[t]._updatePosition()
                        }
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                n
            }();
            i._pushpins = [],
            M.Pushpin = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "pushpin", "M_Pushpin")
        }(cash),
        function(t, e) {
            "use strict";
            var i = {
                direction: "top",
                hoverEnabled: !0,
                toolbarEnabled: !1
            };
            t.fn.reverse = [].reverse;
            var n = function(n) {
                function o(e, i) {
                    h(this, o);
                    var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, e, i));
                    return n.el.M_FloatingActionButton = n,
                    n.options = t.extend({}, o.defaults, i),
                    n.isOpen = !1,
                    n.$anchor = n.$el.children("a").first(),
                    n.$menu = n.$el.children("ul").first(),
                    n.$floatingBtns = n.$el.find("ul .btn-floating"),
                    n.$floatingBtnsReverse = n.$el.find("ul .btn-floating").reverse(),
                    n.offsetY = 0,
                    n.offsetX = 0,
                    n.$el.addClass("direction-" + n.options.direction),
                    "top" === n.options.direction ? n.offsetY = 40 : "right" === n.options.direction ? n.offsetX = -40 : "bottom" === n.options.direction ? n.offsetY = -40 : n.offsetX = 40,
                    n._setupEventHandlers(),
                    n
                }
                return l(o, u),
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
                    value: function(e) {
                        t(e.target).closest(this.$menu).length || this.close()
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
                        var t = this;
                        this.$el.addClass("active");
                        var i = 0;
                        this.$floatingBtnsReverse.each(function(n) {
                            e({
                                targets: n,
                                opacity: 1,
                                scale: [.4, 1],
                                translateY: [t.offsetY, 0],
                                translateX: [t.offsetX, 0],
                                duration: 275,
                                delay: i,
                                easing: "easeInOutQuad"
                            }),
                            i += 40
                        })
                    }
                }, {
                    key: "_animateOutFAB",
                    value: function() {
                        var t = this;
                        this.$floatingBtnsReverse.each(function(i) {
                            e.remove(i),
                            e({
                                targets: i,
                                opacity: 0,
                                scale: .4,
                                translateY: t.offsetY,
                                translateX: t.offsetX,
                                duration: 175,
                                easing: "easeOutQuad",
                                complete: function() {
                                    t.$el.removeClass("active")
                                }
                            })
                        })
                    }
                }, {
                    key: "_animateInToolbar",
                    value: function() {
                        var e, i = this, n = window.innerWidth, o = window.innerHeight, s = this.el.getBoundingClientRect(), r = t('<div class="fab-backdrop"></div>'), a = this.$anchor.css("background-color");
                        this.$anchor.append(r),
                        this.offsetX = s.left - n / 2 + s.width / 2,
                        this.offsetY = o - s.bottom,
                        e = n / r[0].clientWidth,
                        this.btnBottom = s.bottom,
                        this.btnLeft = s.left,
                        this.btnWidth = s.width,
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
                            "background-color": a
                        }),
                        setTimeout(function() {
                            i.$el.css({
                                transform: "",
                                transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                            }),
                            i.$anchor.css({
                                overflow: "visible",
                                transform: "",
                                transition: "transform .2s"
                            }),
                            setTimeout(function() {
                                i.$el.css({
                                    overflow: "hidden",
                                    "background-color": a
                                }),
                                r.css({
                                    transform: "scale(" + e + ")",
                                    transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                                }),
                                i.$menu.children("li").children("a").css({
                                    opacity: 1
                                }),
                                i._handleDocumentClickBound = i._handleDocumentClick.bind(i),
                                window.addEventListener("scroll", i._handleCloseBound, !0),
                                document.body.addEventListener("click", i._handleDocumentClickBound, !0)
                            }, 100)
                        }, 0)
                    }
                }, {
                    key: "_animateOutToolbar",
                    value: function() {
                        var t = this
                          , e = window.innerWidth
                          , i = window.innerHeight
                          , n = this.$el.find(".fab-backdrop")
                          , o = this.$anchor.css("background-color");
                        this.offsetX = this.btnLeft - e / 2 + this.btnWidth / 2,
                        this.offsetY = i - this.btnBottom,
                        this.$el.removeClass("active"),
                        this.$el.css({
                            "background-color": "transparent",
                            transition: "none"
                        }),
                        this.$anchor.css({
                            transition: "none"
                        }),
                        n.css({
                            transform: "scale(0)",
                            "background-color": o
                        }),
                        this.$menu.children("li").children("a").css({
                            opacity: ""
                        }),
                        setTimeout(function() {
                            n.remove(),
                            t.$el.css({
                                "text-align": "",
                                width: "",
                                bottom: "",
                                left: "",
                                overflow: "",
                                "background-color": "",
                                transform: "translate3d(" + -t.offsetX + "px,0,0)"
                            }),
                            t.$anchor.css({
                                overflow: "",
                                transform: "translate3d(0," + t.offsetY + "px,0)"
                            }),
                            setTimeout(function() {
                                t.$el.css({
                                    transform: "translate3d(0,0,0)",
                                    transition: "transform .2s"
                                }),
                                t.$anchor.css({
                                    transform: "translate3d(0,0,0)",
                                    transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                                })
                            }, 20)
                        }, 200)
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_FloatingActionButton
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            M.FloatingActionButton = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "floatingActionButton", "M_FloatingActionButton")
        }(cash, M.anime),
        function(t) {
            "use strict";
            var e = {
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
              , i = function(i) {
                function n(e, i) {
                    h(this, n);
                    var s = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
                    s.el.M_Datepicker = s,
                    s.options = t.extend({}, n.defaults, i),
                    i && i.hasOwnProperty("i18n") && "object" === o(i.i18n) && (s.options.i18n = t.extend({}, n.defaults.i18n, i.i18n)),
                    s.options.minDate && s.options.minDate.setHours(0, 0, 0, 0),
                    s.options.maxDate && s.options.maxDate.setHours(0, 0, 0, 0),
                    s.id = M.guid(),
                    s._setupVariables(),
                    s._insertHTMLIntoDOM(),
                    s._setupModal(),
                    s._setupEventHandlers(),
                    s.options.defaultDate || (s.options.defaultDate = new Date(Date.parse(s.el.value)));
                    var r = s.options.defaultDate;
                    return n._isDate(r) ? s.options.setDefaultDate ? (s.setDate(r, !0),
                    s.setInputValue()) : s.gotoDate(r) : s.gotoDate(new Date),
                    s.isOpen = !1,
                    s
                }
                return l(n, u),
                r(n, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.modal.destroy(),
                        t(this.modalEl).remove(),
                        this.destroySelects(),
                        this.el.M_Datepicker = void 0
                    }
                }, {
                    key: "destroySelects",
                    value: function() {
                        var t = this.calendarEl.querySelector(".orig-select-year");
                        t && M.FormSelect.getInstance(t).destroy();
                        var e = this.calendarEl.querySelector(".orig-select-month");
                        e && M.FormSelect.getInstance(e).destroy()
                    }
                }, {
                    key: "_insertHTMLIntoDOM",
                    value: function() {
                        this.options.showClearBtn && (t(this.clearBtn).css({
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
                        var t = this;
                        this.modalEl.id = "modal-" + this.id,
                        this.modal = M.Modal.init(this.modalEl, {
                            onCloseEnd: function() {
                                t.isOpen = !1
                            }
                        })
                    }
                }, {
                    key: "toString",
                    value: function(t) {
                        var e = this;
                        return t = t || this.options.format,
                        n._isDate(this.date) ? t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(t) {
                            return e.formats[t] ? e.formats[t]() : t
                        }).join("") : ""
                    }
                }, {
                    key: "setDate",
                    value: function(t, e) {
                        if (!t)
                            return this.date = null,
                            this._renderDateDisplay(),
                            this.draw();
                        if ("string" == typeof t && (t = new Date(Date.parse(t))),
                        n._isDate(t)) {
                            var i = this.options.minDate
                              , o = this.options.maxDate;
                            n._isDate(i) && t < i ? t = i : n._isDate(o) && t > o && (t = o),
                            this.date = new Date(t.getTime()),
                            this._renderDateDisplay(),
                            n._setToStartOfDay(this.date),
                            this.gotoDate(this.date),
                            e || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date)
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
                        var t = n._isDate(this.date) ? this.date : new Date
                          , e = this.options.i18n
                          , i = e.weekdaysShort[t.getDay()]
                          , o = e.monthsShort[t.getMonth()]
                          , s = t.getDate();
                        this.yearTextEl.innerHTML = t.getFullYear(),
                        this.dateTextEl.innerHTML = i + ", " + o + " " + s
                    }
                }, {
                    key: "gotoDate",
                    value: function(t) {
                        var e = !0;
                        if (n._isDate(t)) {
                            if (this.calendars) {
                                var i = new Date(this.calendars[0].year,this.calendars[0].month,1)
                                  , o = new Date(this.calendars[this.calendars.length - 1].year,this.calendars[this.calendars.length - 1].month,1)
                                  , s = t.getTime();
                                o.setMonth(o.getMonth() + 1),
                                o.setDate(o.getDate() - 1),
                                e = s < i.getTime() || o.getTime() < s
                            }
                            e && (this.calendars = [{
                                month: t.getMonth(),
                                year: t.getFullYear()
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
                    value: function(t) {
                        return t.month < 0 && (t.year -= Math.ceil(Math.abs(t.month) / 12),
                        t.month += 12),
                        t.month > 11 && (t.year += Math.floor(Math.abs(t.month) / 12),
                        t.month -= 12),
                        t
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
                    value: function(t, e, i) {
                        var o = this.options
                          , s = new Date
                          , r = n._getDaysInMonth(t, e)
                          , a = new Date(t,e,1).getDay()
                          , l = []
                          , h = [];
                        n._setToStartOfDay(s),
                        o.firstDay > 0 && (a -= o.firstDay) < 0 && (a += 7);
                        for (var u = 0 === e ? 11 : e - 1, c = 11 === e ? 0 : e + 1, d = 0 === e ? t - 1 : t, p = 11 === e ? t + 1 : t, f = n._getDaysInMonth(d, u), m = r + a, _ = m; _ > 7; )
                            _ -= 7;
                        m += 7 - _;
                        for (var v = !1, g = 0, y = 0; g < m; g++) {
                            var b = new Date(t,e,g - a + 1)
                              , w = !!n._isDate(this.date) && n._compareDates(b, this.date)
                              , L = n._compareDates(b, s)
                              , x = -1 !== o.events.indexOf(b.toDateString())
                              , k = g < a || g >= r + a
                              , C = g - a + 1
                              , E = e
                              , T = t
                              , M = o.startRange && n._compareDates(o.startRange, b)
                              , D = o.endRange && n._compareDates(o.endRange, b)
                              , P = o.startRange && o.endRange && o.startRange < b && b < o.endRange
                              , S = o.minDate && b < o.minDate || o.maxDate && b > o.maxDate || o.disableWeekends && n._isWeekend(b) || o.disableDayFn && o.disableDayFn(b);
                            k && (g < a ? (C = f + C,
                            E = u,
                            T = d) : (C -= r,
                            E = c,
                            T = p));
                            var O = {
                                day: C,
                                month: E,
                                year: T,
                                hasEvent: x,
                                isSelected: w,
                                isToday: L,
                                isDisabled: S,
                                isEmpty: k,
                                isStartRange: M,
                                isEndRange: D,
                                isInRange: P,
                                showDaysInNextAndPreviousMonths: o.showDaysInNextAndPreviousMonths
                            };
                            h.push(this.renderDay(O)),
                            7 == ++y && (l.push(this.renderRow(h, o.isRTL, v)),
                            h = [],
                            y = 0,
                            v = !1)
                        }
                        return this.renderTable(o, l, i)
                    }
                }, {
                    key: "renderDay",
                    value: function(t) {
                        var e = []
                          , i = "false";
                        if (t.isEmpty) {
                            if (!t.showDaysInNextAndPreviousMonths)
                                return '<td class="is-empty"></td>';
                            e.push("is-outside-current-month"),
                            e.push("is-selection-disabled")
                        }
                        return t.isDisabled && e.push("is-disabled"),
                        t.isToday && e.push("is-today"),
                        t.isSelected && (e.push("is-selected"),
                        i = "true"),
                        t.hasEvent && e.push("has-event"),
                        t.isInRange && e.push("is-inrange"),
                        t.isStartRange && e.push("is-startrange"),
                        t.isEndRange && e.push("is-endrange"),
                        '<td data-day="' + t.day + '" class="' + e.join(" ") + '" aria-selected="' + i + '"><button class="datepicker-day-button" type="button" data-year="' + t.year + '" data-month="' + t.month + '" data-day="' + t.day + '">' + t.day + "</button></td>"
                    }
                }, {
                    key: "renderRow",
                    value: function(t, e, i) {
                        return '<tr class="datepicker-row' + (i ? " is-selected" : "") + '">' + (e ? t.reverse() : t).join("") + "</tr>"
                    }
                }, {
                    key: "renderTable",
                    value: function(t, e, i) {
                        return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + i + '">' + this.renderHead(t) + this.renderBody(e) + "</table></div>"
                    }
                }, {
                    key: "renderHead",
                    value: function(t) {
                        var e = void 0
                          , i = [];
                        for (e = 0; e < 7; e++)
                            i.push('<th scope="col"><abbr title="' + this.renderDayName(t, e) + '">' + this.renderDayName(t, e, !0) + "</abbr></th>");
                        return "<thead><tr>" + (t.isRTL ? i.reverse() : i).join("") + "</tr></thead>"
                    }
                }, {
                    key: "renderBody",
                    value: function(t) {
                        return "<tbody>" + t.join("") + "</tbody>"
                    }
                }, {
                    key: "renderTitle",
                    value: function(e, i, n, o, s, r) {
                        var a, l, h = void 0, u = void 0, c = void 0, d = this.options, p = n === d.minYear, f = n === d.maxYear, m = '<div id="' + r + '" class="datepicker-controls" role="heading" aria-live="assertive">', _ = !0, v = !0;
                        for (c = [],
                        h = 0; h < 12; h++)
                            c.push('<option value="' + (n === s ? h - i : 12 + h - i) + '"' + (h === o ? ' selected="selected"' : "") + (p && h < d.minMonth || f && h > d.maxMonth ? 'disabled="disabled"' : "") + ">" + d.i18n.months[h] + "</option>");
                        for (a = '<select class="datepicker-select orig-select-month" tabindex="-1">' + c.join("") + "</select>",
                        t.isArray(d.yearRange) ? (h = d.yearRange[0],
                        u = d.yearRange[1] + 1) : (h = n - d.yearRange,
                        u = 1 + n + d.yearRange),
                        c = []; h < u && h <= d.maxYear; h++)
                            h >= d.minYear && c.push('<option value="' + h + '" ' + (h === n ? 'selected="selected"' : "") + ">" + h + "</option>");
                        l = '<select class="datepicker-select orig-select-year" tabindex="-1">' + c.join("") + "</select>";
                        m += '<button class="month-prev' + (_ ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>',
                        m += '<div class="selects-container">',
                        d.showMonthAfterYear ? m += l + a : m += a + l,
                        m += "</div>",
                        p && (0 === o || d.minMonth >= o) && (_ = !1),
                        f && (11 === o || d.maxMonth <= o) && (v = !1);
                        return (m += '<button class="month-next' + (v ? "" : " is-disabled") + '" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>') + "</div>"
                    }
                }, {
                    key: "draw",
                    value: function(t) {
                        if (this.isOpen || t) {
                            var e, i = this.options, n = i.minYear, o = i.maxYear, s = i.minMonth, r = i.maxMonth, a = "";
                            this._y <= n && (this._y = n,
                            !isNaN(s) && this._m < s && (this._m = s)),
                            this._y >= o && (this._y = o,
                            !isNaN(r) && this._m > r && (this._m = r)),
                            e = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                            for (var l = 0; l < 1; l++)
                                this._renderDateDisplay(),
                                a += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, e) + this.render(this.calendars[l].year, this.calendars[l].month, e);
                            this.destroySelects(),
                            this.calendarEl.innerHTML = a;
                            var h = this.calendarEl.querySelector(".orig-select-year")
                              , u = this.calendarEl.querySelector(".orig-select-month");
                            M.FormSelect.init(h, {
                                classes: "select-year",
                                dropdownOptions: {
                                    container: document.body,
                                    constrainWidth: !1
                                }
                            }),
                            M.FormSelect.init(u, {
                                classes: "select-month",
                                dropdownOptions: {
                                    container: document.body,
                                    constrainWidth: !1
                                }
                            }),
                            h.addEventListener("change", this._handleYearChange.bind(this)),
                            u.addEventListener("change", this._handleMonthChange.bind(this)),
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
                        var e = this;
                        this.$modalEl = t(n._template),
                        this.modalEl = this.$modalEl[0],
                        this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"),
                        this.yearTextEl = this.modalEl.querySelector(".year-text"),
                        this.dateTextEl = this.modalEl.querySelector(".date-text"),
                        this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")),
                        this.doneBtn = this.modalEl.querySelector(".datepicker-done"),
                        this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"),
                        this.formats = {
                            d: function() {
                                return e.date.getDate()
                            },
                            dd: function() {
                                var t = e.date.getDate();
                                return (t < 10 ? "0" : "") + t
                            },
                            ddd: function() {
                                return e.options.i18n.weekdaysShort[e.date.getDay()]
                            },
                            dddd: function() {
                                return e.options.i18n.weekdays[e.date.getDay()]
                            },
                            m: function() {
                                return e.date.getMonth() + 1
                            },
                            mm: function() {
                                var t = e.date.getMonth() + 1;
                                return (t < 10 ? "0" : "") + t
                            },
                            mmm: function() {
                                return e.options.i18n.monthsShort[e.date.getMonth()]
                            },
                            mmmm: function() {
                                return e.options.i18n.months[e.date.getMonth()]
                            },
                            yy: function() {
                                return ("" + e.date.getFullYear()).slice(2)
                            },
                            yyyy: function() {
                                return e.date.getFullYear()
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
                    value: function(t) {
                        t.which === M.keys.ENTER && (t.preventDefault(),
                        this.open())
                    }
                }, {
                    key: "_handleCalendarClick",
                    value: function(e) {
                        if (this.isOpen) {
                            var i = t(e.target);
                            i.hasClass("is-disabled") || (!i.hasClass("datepicker-day-button") || i.hasClass("is-empty") || i.parent().hasClass("is-disabled") ? i.closest(".month-prev").length ? this.prevMonth() : i.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(e.target.getAttribute("data-year"),e.target.getAttribute("data-month"),e.target.getAttribute("data-day"))),
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
                    value: function(t) {
                        this.gotoMonth(t.target.value)
                    }
                }, {
                    key: "_handleYearChange",
                    value: function(t) {
                        this.gotoYear(t.target.value)
                    }
                }, {
                    key: "gotoMonth",
                    value: function(t) {
                        isNaN(t) || (this.calendars[0].month = parseInt(t, 10),
                        this.adjustCalendars())
                    }
                }, {
                    key: "gotoYear",
                    value: function(t) {
                        isNaN(t) || (this.calendars[0].year = parseInt(t, 10),
                        this.adjustCalendars())
                    }
                }, {
                    key: "_handleInputChange",
                    value: function(t) {
                        var e = void 0;
                        t.firedBy !== this && (e = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)),
                        n._isDate(e) && this.setDate(e))
                    }
                }, {
                    key: "renderDayName",
                    value: function(t, e, i) {
                        for (e += t.firstDay; e >= 7; )
                            e -= 7;
                        return i ? t.i18n.weekdaysAbbrev[e] : t.i18n.weekdays[e]
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
                    value: function(t, e) {
                        return s(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "_isDate",
                    value: function(t) {
                        return /Date/.test(Object.prototype.toString.call(t)) && !isNaN(t.getTime())
                    }
                }, {
                    key: "_isWeekend",
                    value: function(t) {
                        var e = t.getDay();
                        return 0 === e || 6 === e
                    }
                }, {
                    key: "_setToStartOfDay",
                    value: function(t) {
                        n._isDate(t) && t.setHours(0, 0, 0, 0)
                    }
                }, {
                    key: "_getDaysInMonth",
                    value: function(t, e) {
                        return [31, n._isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
                    }
                }, {
                    key: "_isLeapYear",
                    value: function(t) {
                        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                    }
                }, {
                    key: "_compareDates",
                    value: function(t, e) {
                        return t.getTime() === e.getTime()
                    }
                }, {
                    key: "_setToStartOfDay",
                    value: function(t) {
                        n._isDate(t) && t.setHours(0, 0, 0, 0)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Datepicker
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                n
            }();
            i._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""),
            M.Datepicker = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "datepicker", "M_Datepicker")
        }(cash),
        function(t) {
            "use strict";
            var e = {
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
              , i = function(i) {
                function n(e, i) {
                    h(this, n);
                    var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
                    return o.el.M_Timepicker = o,
                    o.options = t.extend({}, n.defaults, i),
                    o.id = M.guid(),
                    o._insertHTMLIntoDOM(),
                    o._setupModal(),
                    o._setupVariables(),
                    o._setupEventHandlers(),
                    o._clockSetup(),
                    o._pickerSetup(),
                    o
                }
                return l(n, u),
                r(n, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.modal.destroy(),
                        t(this.modalEl).remove(),
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
                        t(this.spanHours).on("click", this.showView.bind(this, "hours")),
                        t(this.spanMinutes).on("click", this.showView.bind(this, "minutes"))
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
                    value: function(t) {
                        t.which === M.keys.ENTER && (t.preventDefault(),
                        this.open())
                    }
                }, {
                    key: "_handleClockClickStart",
                    value: function(t) {
                        t.preventDefault();
                        var e = this.plate.getBoundingClientRect()
                          , i = e.left
                          , o = e.top;
                        this.x0 = i + this.options.dialRadius,
                        this.y0 = o + this.options.dialRadius,
                        this.moved = !1;
                        var s = n._Pos(t);
                        this.dx = s.x - this.x0,
                        this.dy = s.y - this.y0,
                        this.setHand(this.dx, this.dy, !1),
                        document.addEventListener("mousemove", this._handleDocumentClickMoveBound),
                        document.addEventListener("touchmove", this._handleDocumentClickMoveBound),
                        document.addEventListener("mouseup", this._handleDocumentClickEndBound),
                        document.addEventListener("touchend", this._handleDocumentClickEndBound)
                    }
                }, {
                    key: "_handleDocumentClickMove",
                    value: function(t) {
                        t.preventDefault();
                        var e = n._Pos(t)
                          , i = e.x - this.x0
                          , o = e.y - this.y0;
                        this.moved = !0,
                        this.setHand(i, o, !1, !0)
                    }
                }, {
                    key: "_handleDocumentClickEnd",
                    value: function(e) {
                        var i = this;
                        e.preventDefault(),
                        document.removeEventListener("mouseup", this._handleDocumentClickEndBound),
                        document.removeEventListener("touchend", this._handleDocumentClickEndBound);
                        var o = n._Pos(e)
                          , s = o.x - this.x0
                          , r = o.y - this.y0;
                        this.moved && s === this.dx && r === this.dy && this.setHand(s, r),
                        "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (t(this.minutesView).addClass("timepicker-dial-out"),
                        setTimeout(function() {
                            i.done()
                        }, this.options.duration / 2)),
                        "function" == typeof this.options.onSelect && this.options.onSelect.call(this, this.hours, this.minutes),
                        document.removeEventListener("mousemove", this._handleDocumentClickMoveBound),
                        document.removeEventListener("touchmove", this._handleDocumentClickMoveBound)
                    }
                }, {
                    key: "_insertHTMLIntoDOM",
                    value: function() {
                        this.$modalEl = t(n._template),
                        this.modalEl = this.$modalEl[0],
                        this.modalEl.id = "modal-" + this.id;
                        var e = document.querySelector(this.options.container);
                        this.options.container && e ? this.$modalEl.appendTo(e) : this.$modalEl.insertBefore(this.el)
                    }
                }, {
                    key: "_setupModal",
                    value: function() {
                        var t = this;
                        this.modal = M.Modal.init(this.modalEl, {
                            onOpenStart: this.options.onOpenStart,
                            onOpenEnd: this.options.onOpenEnd,
                            onCloseStart: this.options.onCloseStart,
                            onCloseEnd: function() {
                                "function" == typeof t.options.onCloseEnd && t.options.onCloseEnd.call(t),
                                t.isOpen = !1
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
                        var e = t('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
                        this.options.showClearBtn && e.css({
                            visibility: ""
                        });
                        var i = t('<div class="confirmation-btns"></div>');
                        t('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(i).on("click", this.close.bind(this)),
                        t('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(i).on("click", this.done.bind(this)),
                        i.appendTo(this.footer)
                    }
                }, {
                    key: "_clockSetup",
                    value: function() {
                        this.options.twelveHour && (this.$amBtn = t('<div class="am-btn">AM</div>'),
                        this.$pmBtn = t('<div class="pm-btn">PM</div>'),
                        this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm),
                        this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),
                        this._buildHoursView(),
                        this._buildMinutesView(),
                        this._buildSVGClock()
                    }
                }, {
                    key: "_buildSVGClock",
                    value: function() {
                        var t = this.options.dialRadius
                          , e = this.options.tickRadius
                          , i = 2 * t
                          , o = n._createSVGEl("svg");
                        o.setAttribute("class", "timepicker-svg"),
                        o.setAttribute("width", i),
                        o.setAttribute("height", i);
                        var s = n._createSVGEl("g");
                        s.setAttribute("transform", "translate(" + t + "," + t + ")");
                        var r = n._createSVGEl("circle");
                        r.setAttribute("class", "timepicker-canvas-bearing"),
                        r.setAttribute("cx", 0),
                        r.setAttribute("cy", 0),
                        r.setAttribute("r", 4);
                        var a = n._createSVGEl("line");
                        a.setAttribute("x1", 0),
                        a.setAttribute("y1", 0);
                        var l = n._createSVGEl("circle");
                        l.setAttribute("class", "timepicker-canvas-bg"),
                        l.setAttribute("r", e),
                        s.appendChild(a),
                        s.appendChild(l),
                        s.appendChild(r),
                        o.appendChild(s),
                        this._canvas.appendChild(o),
                        this.hand = a,
                        this.bg = l,
                        this.bearing = r,
                        this.g = s
                    }
                }, {
                    key: "_buildHoursView",
                    value: function() {
                        var e = t('<div class="timepicker-tick"></div>');
                        if (this.options.twelveHour)
                            for (var i = 1; i < 13; i += 1) {
                                var n = e.clone()
                                  , o = i / 6 * Math.PI
                                  , s = this.options.outerRadius;
                                n.css({
                                    left: this.options.dialRadius + Math.sin(o) * s - this.options.tickRadius + "px",
                                    top: this.options.dialRadius - Math.cos(o) * s - this.options.tickRadius + "px"
                                }),
                                n.html(0 === i ? "00" : i),
                                this.hoursView.appendChild(n[0])
                            }
                        else
                            for (var r = 0; r < 24; r += 1) {
                                var a = e.clone()
                                  , l = r / 6 * Math.PI
                                  , h = r > 0 && r < 13 ? this.options.innerRadius : this.options.outerRadius;
                                a.css({
                                    left: this.options.dialRadius + Math.sin(l) * h - this.options.tickRadius + "px",
                                    top: this.options.dialRadius - Math.cos(l) * h - this.options.tickRadius + "px"
                                }),
                                a.html(0 === r ? "00" : r),
                                this.hoursView.appendChild(a[0])
                            }
                    }
                }, {
                    key: "_buildMinutesView",
                    value: function() {
                        for (var e = t('<div class="timepicker-tick"></div>'), i = 0; i < 60; i += 5) {
                            var o = e.clone()
                              , s = i / 30 * Math.PI;
                            o.css({
                                left: this.options.dialRadius + Math.sin(s) * this.options.outerRadius - this.options.tickRadius + "px",
                                top: this.options.dialRadius - Math.cos(s) * this.options.outerRadius - this.options.tickRadius + "px"
                            }),
                            o.html(n._addLeadingZero(i)),
                            this.minutesView.appendChild(o[0])
                        }
                    }
                }, {
                    key: "_handleAmPmClick",
                    value: function(e) {
                        var i = t(e.target);
                        this.amOrPm = i.hasClass("am-btn") ? "AM" : "PM",
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
                        var t = ((this.el.value || this.options.defaultTime || "") + "").split(":");
                        if (this.options.twelveHour && void 0 !== t[1] && (t[1].toUpperCase().indexOf("AM") > 0 ? this.amOrPm = "AM" : this.amOrPm = "PM",
                        t[1] = t[1].replace("AM", "").replace("PM", "")),
                        "now" === t[0]) {
                            var e = new Date(+new Date + this.options.fromNow);
                            t = [e.getHours(), e.getMinutes()],
                            this.options.twelveHour && (this.amOrPm = t[0] >= 12 && t[0] < 24 ? "PM" : "AM")
                        }
                        this.hours = +t[0] || 0,
                        this.minutes = +t[1] || 0,
                        this.spanHours.innerHTML = this.hours,
                        this.spanMinutes.innerHTML = n._addLeadingZero(this.minutes),
                        this._updateAmPmView()
                    }
                }, {
                    key: "showView",
                    value: function(e, i) {
                        "minutes" === e && t(this.hoursView).css("visibility");
                        var n = "hours" === e
                          , o = n ? this.hoursView : this.minutesView
                          , s = n ? this.minutesView : this.hoursView;
                        this.currentView = e,
                        t(this.spanHours).toggleClass("text-primary", n),
                        t(this.spanMinutes).toggleClass("text-primary", !n),
                        s.classList.add("timepicker-dial-out"),
                        t(o).css("visibility", "visible").removeClass("timepicker-dial-out"),
                        this.resetClock(i),
                        clearTimeout(this.toggleViewTimer),
                        this.toggleViewTimer = setTimeout(function() {
                            t(s).css("visibility", "hidden")
                        }, this.options.duration)
                    }
                }, {
                    key: "resetClock",
                    value: function(e) {
                        var i = this.currentView
                          , n = this[i]
                          , o = "hours" === i
                          , s = n * (Math.PI / (o ? 6 : 30))
                          , r = o && n > 0 && n < 13 ? this.options.innerRadius : this.options.outerRadius
                          , a = Math.sin(s) * r
                          , l = -Math.cos(s) * r
                          , h = this;
                        e ? (t(this.canvas).addClass("timepicker-canvas-out"),
                        setTimeout(function() {
                            t(h.canvas).removeClass("timepicker-canvas-out"),
                            h.setHand(a, l)
                        }, e)) : this.setHand(a, l)
                    }
                }, {
                    key: "setHand",
                    value: function(t, e, i) {
                        var o = this
                          , s = Math.atan2(t, -e)
                          , r = "hours" === this.currentView
                          , a = Math.PI / (r || i ? 6 : 30)
                          , l = Math.sqrt(t * t + e * e)
                          , h = r && l < (this.options.outerRadius + this.options.innerRadius) / 2
                          , u = h ? this.options.innerRadius : this.options.outerRadius;
                        this.options.twelveHour && (u = this.options.outerRadius),
                        s < 0 && (s = 2 * Math.PI + s);
                        var c = Math.round(s / a);
                        s = c * a,
                        this.options.twelveHour ? r ? 0 === c && (c = 12) : (i && (c *= 5),
                        60 === c && (c = 0)) : r ? (12 === c && (c = 0),
                        c = h ? 0 === c ? 12 : c : 0 === c ? 0 : c + 12) : (i && (c *= 5),
                        60 === c && (c = 0)),
                        this[this.currentView] !== c && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10),
                        this.vibrateTimer = setTimeout(function() {
                            o.vibrateTimer = null
                        }, 100))),
                        this[this.currentView] = c,
                        r ? this.spanHours.innerHTML = c : this.spanMinutes.innerHTML = n._addLeadingZero(c);
                        var d = Math.sin(s) * (u - this.options.tickRadius)
                          , p = -Math.cos(s) * (u - this.options.tickRadius)
                          , f = Math.sin(s) * u
                          , m = -Math.cos(s) * u;
                        this.hand.setAttribute("x2", d),
                        this.hand.setAttribute("y2", p),
                        this.bg.setAttribute("cx", f),
                        this.bg.setAttribute("cy", m)
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
                    value: function(t, e) {
                        var i = this.el.value
                          , o = e ? "" : n._addLeadingZero(this.hours) + ":" + n._addLeadingZero(this.minutes);
                        this.time = o,
                        !e && this.options.twelveHour && (o = o + " " + this.amOrPm),
                        this.el.value = o,
                        o !== i && this.$el.trigger("change"),
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
                    value: function(t, e) {
                        return s(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "_addLeadingZero",
                    value: function(t) {
                        return (t < 10 ? "0" : "") + t
                    }
                }, {
                    key: "_createSVGEl",
                    value: function(t) {
                        return document.createElementNS("http://www.w3.org/2000/svg", t)
                    }
                }, {
                    key: "_Pos",
                    value: function(t) {
                        return t.targetTouches && t.targetTouches.length >= 1 ? {
                            x: t.targetTouches[0].clientX,
                            y: t.targetTouches[0].clientY
                        } : {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Timepicker
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                n
            }();
            i._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""),
            M.Timepicker = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "timepicker", "M_Timepicker")
        }(cash),
        function(t) {
            "use strict";
            var e = {}
              , i = function(i) {
                function n(e, i) {
                    h(this, n);
                    var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
                    return o.el.M_CharacterCounter = o,
                    o.options = t.extend({}, n.defaults, i),
                    o.isInvalid = !1,
                    o.isValidLength = !1,
                    o._setupCounter(),
                    o._setupEventHandlers(),
                    o
                }
                return l(n, u),
                r(n, [{
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
                        t(this.counterEl).addClass("character-counter").css({
                            float: "right",
                            "font-size": "12px",
                            height: 1
                        }),
                        this.$el.parent().append(this.counterEl)
                    }
                }, {
                    key: "_removeCounter",
                    value: function() {
                        t(this.counterEl).remove()
                    }
                }, {
                    key: "updateCounter",
                    value: function() {
                        var e = +this.$el.attr("data-length")
                          , i = this.el.value.length;
                        this.isValidLength = i <= e;
                        var n = i;
                        e && (n += "/" + e,
                        this._validateInput()),
                        t(this.counterEl).html(n)
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
                    value: function(t, e) {
                        return s(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_CharacterCounter
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                n
            }();
            M.CharacterCounter = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "characterCounter", "M_CharacterCounter")
        }(cash),
        function(t) {
            "use strict";
            var e = {
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
              , i = function(i) {
                function n(e, i) {
                    h(this, n);
                    var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
                    return o.el.M_Carousel = o,
                    o.options = t.extend({}, n.defaults, i),
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
                    o.$indicators = t('<ul class="indicators"></ul>'),
                    o.$el.find(".carousel-item").each(function(e, i) {
                        if (o.images.push(e),
                        o.showIndicators) {
                            var n = t('<li class="indicator-item"></li>');
                            0 === i && n[0].classList.add("active"),
                            o.$indicators.append(n)
                        }
                    }),
                    o.showIndicators && o.$el.append(o.$indicators),
                    o.count = o.images.length,
                    o.options.numVisible = Math.min(o.count, o.options.numVisible),
                    o.xform = "transform",
                    ["webkit", "Moz", "O", "ms"].every(function(t) {
                        var e = t + "Transform";
                        return void 0 === document.body.style[e] || (o.xform = e,
                        !1)
                    }),
                    o._setupEventHandlers(),
                    o._scroll(o.offset),
                    o
                }
                return l(n, u),
                r(n, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this.el.M_Carousel = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var t = this;
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
                        this.$indicators.find(".indicator-item").each(function(e, i) {
                            e.addEventListener("click", t._handleIndicatorClickBound)
                        }));
                        var e = M.throttle(this._handleResize, 200);
                        this._handleThrottledResizeBound = e.bind(this),
                        window.addEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var t = this;
                        void 0 !== window.ontouchstart && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound),
                        this.el.removeEventListener("touchmove", this._handleCarouselDragBound),
                        this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)),
                        this.el.removeEventListener("mousedown", this._handleCarouselTapBound),
                        this.el.removeEventListener("mousemove", this._handleCarouselDragBound),
                        this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound),
                        this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound),
                        this.el.removeEventListener("click", this._handleCarouselClickBound),
                        this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function(e, i) {
                            e.removeEventListener("click", t._handleIndicatorClickBound)
                        }),
                        window.removeEventListener("resize", this._handleThrottledResizeBound)
                    }
                }, {
                    key: "_handleCarouselTap",
                    value: function(e) {
                        "mousedown" === e.type && t(e.target).is("img") && e.preventDefault(),
                        this.pressed = !0,
                        this.dragged = !1,
                        this.verticalDragged = !1,
                        this.reference = this._xpos(e),
                        this.referenceY = this._ypos(e),
                        this.velocity = this.amplitude = 0,
                        this.frame = this.offset,
                        this.timestamp = Date.now(),
                        clearInterval(this.ticker),
                        this.ticker = setInterval(this._trackBound, 100)
                    }
                }, {
                    key: "_handleCarouselDrag",
                    value: function(t) {
                        var e = void 0
                          , i = void 0
                          , n = void 0;
                        if (this.pressed)
                            if (e = this._xpos(t),
                            i = this._ypos(t),
                            n = this.reference - e,
                            Math.abs(this.referenceY - i) < 30 && !this.verticalDragged)
                                (n > 2 || n < -2) && (this.dragged = !0,
                                this.reference = e,
                                this._scroll(this.offset + n));
                            else {
                                if (this.dragged)
                                    return t.preventDefault(),
                                    t.stopPropagation(),
                                    !1;
                                this.verticalDragged = !0
                            }
                        if (this.dragged)
                            return t.preventDefault(),
                            t.stopPropagation(),
                            !1
                    }
                }, {
                    key: "_handleCarouselRelease",
                    value: function(t) {
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
                            this.dragged && (t.preventDefault(),
                            t.stopPropagation()),
                            !1
                    }
                }, {
                    key: "_handleCarouselClick",
                    value: function(e) {
                        if (this.dragged)
                            return e.preventDefault(),
                            e.stopPropagation(),
                            !1;
                        if (!this.options.fullWidth) {
                            var i = t(e.target).closest(".carousel-item").index();
                            0 !== this._wrap(this.center) - i && (e.preventDefault(),
                            e.stopPropagation()),
                            this._cycleTo(i)
                        }
                    }
                }, {
                    key: "_handleIndicatorClick",
                    value: function(e) {
                        e.stopPropagation();
                        var i = t(e.target).closest(".indicator-item");
                        i.length && this._cycleTo(i.index())
                    }
                }, {
                    key: "_handleResize",
                    value: function(t) {
                        this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(),
                        this.imageHeight = this.$el.find(".carousel-item.active").height(),
                        this.dim = 2 * this.itemWidth + this.options.padding,
                        this.offset = 2 * this.center * this.itemWidth,
                        this.target = this.offset,
                        this._setCarouselHeight(!0)) : this._scroll()
                    }
                }, {
                    key: "_setCarouselHeight",
                    value: function(t) {
                        var e = this
                          , i = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first()
                          , n = i.find("img").first();
                        if (n.length)
                            if (n[0].complete) {
                                var o = n.height();
                                if (o > 0)
                                    this.$el.css("height", o + "px");
                                else {
                                    var s = n[0].naturalWidth
                                      , r = n[0].naturalHeight
                                      , a = this.$el.width() / s * r;
                                    this.$el.css("height", a + "px")
                                }
                            } else
                                n.one("load", function(t, i) {
                                    e.$el.css("height", t.offsetHeight + "px")
                                });
                        else if (!t) {
                            var l = i.height();
                            this.$el.css("height", l + "px")
                        }
                    }
                }, {
                    key: "_xpos",
                    value: function(t) {
                        return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
                    }
                }, {
                    key: "_ypos",
                    value: function(t) {
                        return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY
                    }
                }, {
                    key: "_wrap",
                    value: function(t) {
                        return t >= this.count ? t % this.count : t < 0 ? this._wrap(this.count + t % this.count) : t
                    }
                }, {
                    key: "_track",
                    value: function() {
                        var t, e, i, n;
                        e = (t = Date.now()) - this.timestamp,
                        this.timestamp = t,
                        i = this.offset - this.frame,
                        this.frame = this.offset,
                        n = 1e3 * i / (1 + e),
                        this.velocity = .8 * n + .2 * this.velocity
                    }
                }, {
                    key: "_autoScroll",
                    value: function() {
                        var t = void 0
                          , e = void 0;
                        this.amplitude && (t = Date.now() - this.timestamp,
                        (e = this.amplitude * Math.exp(-t / this.options.duration)) > 2 || e < -2 ? (this._scroll(this.target - e),
                        requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target))
                    }
                }, {
                    key: "_scroll",
                    value: function(e) {
                        var i = this;
                        this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"),
                        null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout),
                        this.scrollingTimeout = window.setTimeout(function() {
                            i.$el.removeClass("scrolling")
                        }, this.options.duration);
                        var n, o, s, r, a = void 0, l = void 0, h = void 0, u = void 0, c = void 0, d = void 0, p = this.center, f = 1 / this.options.numVisible;
                        if (this.offset = "number" == typeof e ? e : this.offset,
                        this.center = Math.floor((this.offset + this.dim / 2) / this.dim),
                        r = -(s = (o = this.offset - this.center * this.dim) < 0 ? 1 : -1) * o * 2 / this.dim,
                        n = this.count >> 1,
                        this.options.fullWidth ? (h = "translateX(0)",
                        d = 1) : (h = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ",
                        h += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)",
                        d = 1 - f * r),
                        this.showIndicators) {
                            var m = this.center % this.count
                              , _ = this.$indicators.find(".indicator-item.active");
                            _.index() !== m && (_.removeClass("active"),
                            this.$indicators.find(".indicator-item").eq(m)[0].classList.add("active"))
                        }
                        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
                            l = this.images[this._wrap(this.center)],
                            t(l).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"),
                            l.classList.add("active"));
                            var v = h + " translateX(" + -o / 2 + "px) translateX(" + s * this.options.shift * r * a + "px) translateZ(" + this.options.dist * r + "px)";
                            this._updateItemStyle(l, d, 0, v)
                        }
                        for (a = 1; a <= n; ++a) {
                            if (this.options.fullWidth ? (u = this.options.dist,
                            c = a === n && o < 0 ? 1 - r : 1) : (u = this.options.dist * (2 * a + r * s),
                            c = 1 - f * (2 * a + r * s)),
                            !this.noWrap || this.center + a < this.count) {
                                l = this.images[this._wrap(this.center + a)];
                                var g = h + " translateX(" + (this.options.shift + (this.dim * a - o) / 2) + "px) translateZ(" + u + "px)";
                                this._updateItemStyle(l, c, -a, g)
                            }
                            if (this.options.fullWidth ? (u = this.options.dist,
                            c = a === n && o > 0 ? 1 - r : 1) : (u = this.options.dist * (2 * a - r * s),
                            c = 1 - f * (2 * a - r * s)),
                            !this.noWrap || this.center - a >= 0) {
                                l = this.images[this._wrap(this.center - a)];
                                var y = h + " translateX(" + (-this.options.shift + (-this.dim * a - o) / 2) + "px) translateZ(" + u + "px)";
                                this._updateItemStyle(l, c, -a, y)
                            }
                        }
                        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
                            l = this.images[this._wrap(this.center)];
                            var b = h + " translateX(" + -o / 2 + "px) translateX(" + s * this.options.shift * r + "px) translateZ(" + this.options.dist * r + "px)";
                            this._updateItemStyle(l, d, 0, b)
                        }
                        var w = this.$el.find(".carousel-item").eq(this._wrap(this.center));
                        p !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, w[0], this.dragged),
                        "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, w[0], this.dragged),
                        this.oneTimeCallback = null)
                    }
                }, {
                    key: "_updateItemStyle",
                    value: function(t, e, i, n) {
                        t.style[this.xform] = n,
                        t.style.zIndex = i,
                        t.style.opacity = e,
                        t.style.visibility = "visible"
                    }
                }, {
                    key: "_cycleTo",
                    value: function(t, e) {
                        var i = this.center % this.count - t;
                        this.noWrap || (i < 0 ? Math.abs(i + this.count) < Math.abs(i) && (i += this.count) : i > 0 && Math.abs(i - this.count) < i && (i -= this.count)),
                        this.target = this.dim * Math.round(this.offset / this.dim),
                        i < 0 ? this.target += this.dim * Math.abs(i) : i > 0 && (this.target -= this.dim * i),
                        "function" == typeof e && (this.oneTimeCallback = e),
                        this.offset !== this.target && (this.amplitude = this.target - this.offset,
                        this.timestamp = Date.now(),
                        requestAnimationFrame(this._autoScrollBound))
                    }
                }, {
                    key: "next",
                    value: function(t) {
                        (void 0 === t || isNaN(t)) && (t = 1);
                        var e = this.center + t;
                        if (e >= this.count || e < 0) {
                            if (this.noWrap)
                                return;
                            e = this._wrap(e)
                        }
                        this._cycleTo(e)
                    }
                }, {
                    key: "prev",
                    value: function(t) {
                        (void 0 === t || isNaN(t)) && (t = 1);
                        var e = this.center - t;
                        if (e >= this.count || e < 0) {
                            if (this.noWrap)
                                return;
                            e = this._wrap(e)
                        }
                        this._cycleTo(e)
                    }
                }, {
                    key: "set",
                    value: function(t, e) {
                        if ((void 0 === t || isNaN(t)) && (t = 0),
                        t > this.count || t < 0) {
                            if (this.noWrap)
                                return;
                            t = this._wrap(t)
                        }
                        this._cycleTo(t, e)
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Carousel
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                n
            }();
            M.Carousel = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "carousel", "M_Carousel")
        }(cash),
        function(t) {
            "use strict";
            var e = {
                onOpen: void 0,
                onClose: void 0
            }
              , i = function(i) {
                function n(e, i) {
                    h(this, n);
                    var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
                    return o.el.M_TapTarget = o,
                    o.options = t.extend({}, n.defaults, i),
                    o.isOpen = !1,
                    o.$origin = t("#" + o.$el.attr("data-target")),
                    o._setup(),
                    o._calculatePositioning(),
                    o._setupEventHandlers(),
                    o
                }
                return l(n, u),
                r(n, [{
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
                        var t = M.throttle(this._handleResize, 200);
                        this._handleThrottledResizeBound = t.bind(this),
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
                    value: function(t) {
                        this.open()
                    }
                }, {
                    key: "_handleOriginClick",
                    value: function(t) {
                        this.close()
                    }
                }, {
                    key: "_handleResize",
                    value: function(t) {
                        this._calculatePositioning()
                    }
                }, {
                    key: "_handleDocumentClick",
                    value: function(e) {
                        t(e.target).closest(".tap-target-wrapper").length || (this.close(),
                        e.preventDefault(),
                        e.stopPropagation())
                    }
                }, {
                    key: "_setup",
                    value: function() {
                        this.wrapper = this.$el.parent()[0],
                        this.waveEl = t(this.wrapper).find(".tap-target-wave")[0],
                        this.originEl = t(this.wrapper).find(".tap-target-origin")[0],
                        this.contentEl = this.$el.find(".tap-target-content")[0],
                        t(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"),
                        this.wrapper.classList.add("tap-target-wrapper"),
                        this.$el.before(t(this.wrapper)),
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
                        var e = "fixed" === this.$origin.css("position");
                        if (!e)
                            for (var i = this.$origin.parents(), n = 0; n < i.length && !(e = "fixed" == t(i[n]).css("position")); n++)
                                ;
                        var o = this.$origin.outerWidth()
                          , s = this.$origin.outerHeight()
                          , r = e ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top
                          , a = e ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left
                          , l = window.innerWidth
                          , h = window.innerHeight
                          , u = l / 2
                          , c = h / 2
                          , d = a <= u
                          , p = a > u
                          , f = r <= c
                          , m = r > c
                          , _ = a >= .25 * l && a <= .75 * l
                          , v = this.$el.outerWidth()
                          , g = this.$el.outerHeight()
                          , y = r + s / 2 - g / 2
                          , b = a + o / 2 - v / 2
                          , w = e ? "fixed" : "absolute"
                          , L = _ ? v : v / 2 + o
                          , x = g / 2
                          , k = f ? g / 2 : 0
                          , C = d && !_ ? v / 2 - o : 0
                          , E = o
                          , T = m ? "bottom" : "top"
                          , D = 2 * o
                          , P = D
                          , S = g / 2 - P / 2
                          , O = v / 2 - D / 2
                          , I = {};
                        I.top = f ? y + "px" : "",
                        I.right = p ? l - b - v + "px" : "",
                        I.bottom = m ? h - y - g + "px" : "",
                        I.left = d ? b + "px" : "",
                        I.position = w,
                        t(this.wrapper).css(I),
                        t(this.contentEl).css({
                            width: L + "px",
                            height: x + "px",
                            top: k + "px",
                            right: "0px",
                            bottom: "0px",
                            left: C + "px",
                            padding: E + "px",
                            verticalAlign: T
                        }),
                        t(this.waveEl).css({
                            top: S + "px",
                            left: O + "px",
                            width: D + "px",
                            height: P + "px"
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
                    value: function(t, e) {
                        return s(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_TapTarget
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                n
            }();
            M.TapTarget = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "tapTarget", "M_TapTarget")
        }(cash),
        function(t) {
            "use strict";
            var e = {
                classes: "",
                dropdownOptions: {}
            }
              , i = function(i) {
                function n(e, i) {
                    h(this, n);
                    var o = a(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, e, i));
                    return o.$el.hasClass("browser-default") ? a(o) : (o.el.M_FormSelect = o,
                    o.options = t.extend({}, n.defaults, i),
                    o.isMultiple = o.$el.prop("multiple"),
                    o.el.tabIndex = -1,
                    o._keysSelected = {},
                    o._valueDict = {},
                    o._setupDropdown(),
                    o._setupEventHandlers(),
                    o)
                }
                return l(n, u),
                r(n, [{
                    key: "destroy",
                    value: function() {
                        this._removeEventHandlers(),
                        this._removeDropdown(),
                        this.el.M_FormSelect = void 0
                    }
                }, {
                    key: "_setupEventHandlers",
                    value: function() {
                        var e = this;
                        this._handleSelectChangeBound = this._handleSelectChange.bind(this),
                        this._handleOptionClickBound = this._handleOptionClick.bind(this),
                        this._handleInputClickBound = this._handleInputClick.bind(this),
                        t(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) {
                            t.addEventListener("click", e._handleOptionClickBound)
                        }),
                        this.el.addEventListener("change", this._handleSelectChangeBound),
                        this.input.addEventListener("click", this._handleInputClickBound)
                    }
                }, {
                    key: "_removeEventHandlers",
                    value: function() {
                        var e = this;
                        t(this.dropdownOptions).find("li:not(.optgroup)").each(function(t) {
                            t.removeEventListener("click", e._handleOptionClickBound)
                        }),
                        this.el.removeEventListener("change", this._handleSelectChangeBound),
                        this.input.removeEventListener("click", this._handleInputClickBound)
                    }
                }, {
                    key: "_handleSelectChange",
                    value: function(t) {
                        this._setValueToInput()
                    }
                }, {
                    key: "_handleOptionClick",
                    value: function(e) {
                        e.preventDefault();
                        var i = t(e.target).closest("li")[0]
                          , n = i.id;
                        if (!t(i).hasClass("disabled") && !t(i).hasClass("optgroup") && n.length) {
                            var o = !0;
                            if (this.isMultiple) {
                                var s = t(this.dropdownOptions).find("li.disabled.selected");
                                s.length && (s.removeClass("selected"),
                                s.find('input[type="checkbox"]').prop("checked", !1),
                                this._toggleEntryFromArray(s[0].id)),
                                o = this._toggleEntryFromArray(n)
                            } else
                                t(this.dropdownOptions).find("li").removeClass("selected"),
                                t(i).toggleClass("selected", o);
                            t(this._valueDict[n].el).prop("selected") !== o && (t(this._valueDict[n].el).prop("selected", o),
                            this.$el.trigger("change"))
                        }
                        e.stopPropagation()
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
                        var e = this;
                        this.wrapper = document.createElement("div"),
                        t(this.wrapper).addClass("select-wrapper " + this.options.classes),
                        this.$el.before(t(this.wrapper)),
                        this.wrapper.appendChild(this.el),
                        this.el.disabled && this.wrapper.classList.add("disabled"),
                        this.$selectOptions = this.$el.children("option, optgroup"),
                        this.dropdownOptions = document.createElement("ul"),
                        this.dropdownOptions.id = "select-options-" + M.guid(),
                        t(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : "")),
                        this.$selectOptions.length && this.$selectOptions.each(function(i) {
                            if (t(i).is("option")) {
                                var n = void 0;
                                n = e.isMultiple ? e._appendOptionWithIcon(e.$el, i, "multiple") : e._appendOptionWithIcon(e.$el, i),
                                e._addOptionToValueDict(i, n)
                            } else if (t(i).is("optgroup")) {
                                var o = t(i).children("option");
                                t(e.dropdownOptions).append(t('<li class="optgroup"><span>' + i.getAttribute("label") + "</span></li>")[0]),
                                o.each(function(t) {
                                    var i = e._appendOptionWithIcon(e.$el, t, "optgroup-option");
                                    e._addOptionToValueDict(t, i)
                                })
                            }
                        }),
                        this.$el.after(this.dropdownOptions),
                        this.input = document.createElement("input"),
                        t(this.input).addClass("select-dropdown dropdown-trigger"),
                        this.input.setAttribute("type", "text"),
                        this.input.setAttribute("readonly", "true"),
                        this.input.setAttribute("data-target", this.dropdownOptions.id),
                        this.el.disabled && t(this.input).prop("disabled", "true"),
                        this.$el.before(this.input),
                        this._setValueToInput();
                        var i = t('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
                        if (this.$el.before(i[0]),
                        !this.el.disabled) {
                            var n = t.extend({}, this.options.dropdownOptions);
                            n.onOpenEnd = function(i) {
                                var n = t(e.dropdownOptions).find(".selected").first();
                                if (n.length && (M.keyDown = !0,
                                e.dropdown.focusedIndex = n.index(),
                                e.dropdown._focusFocusedItem(),
                                M.keyDown = !1,
                                e.dropdown.isScrollable)) {
                                    var o = n[0].getBoundingClientRect().top - e.dropdownOptions.getBoundingClientRect().top;
                                    o -= e.dropdownOptions.clientHeight / 2,
                                    e.dropdownOptions.scrollTop = o
                                }
                            }
                            ,
                            this.isMultiple && (n.closeOnClick = !1),
                            this.dropdown = M.Dropdown.init(this.input, n)
                        }
                        this._setSelectedStates()
                    }
                }, {
                    key: "_addOptionToValueDict",
                    value: function(t, e) {
                        var i = Object.keys(this._valueDict).length
                          , n = this.dropdownOptions.id + i
                          , o = {};
                        e.id = n,
                        o.el = t,
                        o.optionEl = e,
                        this._valueDict[n] = o
                    }
                }, {
                    key: "_removeDropdown",
                    value: function() {
                        t(this.wrapper).find(".caret").remove(),
                        t(this.input).remove(),
                        t(this.dropdownOptions).remove(),
                        t(this.wrapper).before(this.$el),
                        t(this.wrapper).remove()
                    }
                }, {
                    key: "_appendOptionWithIcon",
                    value: function(e, i, n) {
                        var o = i.disabled ? "disabled " : ""
                          , s = "optgroup-option" === n ? "optgroup-option " : ""
                          , r = this.isMultiple ? '<label><input type="checkbox"' + o + '"/><span>' + i.innerHTML + "</span></label>" : i.innerHTML
                          , a = t("<li></li>")
                          , l = t("<span></span>");
                        l.html(r),
                        a.addClass(o + " " + s),
                        a.append(l);
                        var h = i.getAttribute("data-icon");
                        if (h) {
                            var u = t('<img alt="" src="' + h + '">');
                            a.prepend(u)
                        }
                        return t(this.dropdownOptions).append(a[0]),
                        a[0]
                    }
                }, {
                    key: "_toggleEntryFromArray",
                    value: function(e) {
                        var i = !this._keysSelected.hasOwnProperty(e)
                          , n = t(this._valueDict[e].optionEl);
                        return i ? this._keysSelected[e] = !0 : delete this._keysSelected[e],
                        n.toggleClass("selected", i),
                        n.find('input[type="checkbox"]').prop("checked", i),
                        n.prop("selected", i),
                        i
                    }
                }, {
                    key: "_setValueToInput",
                    value: function() {
                        var e = [];
                        if (this.$el.find("option").each(function(i) {
                            if (t(i).prop("selected")) {
                                var n = t(i).text();
                                e.push(n)
                            }
                        }),
                        !e.length) {
                            var i = this.$el.find("option:disabled").eq(0);
                            i.length && "" === i[0].value && e.push(i.text())
                        }
                        this.input.value = e.join(", ")
                    }
                }, {
                    key: "_setSelectedStates",
                    value: function() {
                        for (var e in this._keysSelected = {},
                        this._valueDict) {
                            var i = this._valueDict[e]
                              , n = t(i.el).prop("selected");
                            t(i.optionEl).find('input[type="checkbox"]').prop("checked", n),
                            n ? (this._activateOption(t(this.dropdownOptions), t(i.optionEl)),
                            this._keysSelected[e] = !0) : t(i.optionEl).removeClass("selected")
                        }
                    }
                }, {
                    key: "_activateOption",
                    value: function(e, i) {
                        i && (this.isMultiple || e.find("li.selected").removeClass("selected"),
                        t(i).addClass("selected"))
                    }
                }, {
                    key: "getSelectedValues",
                    value: function() {
                        var t = [];
                        for (var e in this._keysSelected)
                            t.push(this._valueDict[e].el.value);
                        return t
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_FormSelect
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return e
                    }
                }]),
                n
            }();
            M.FormSelect = i,
            M.jQueryLoaded && M.initializeJqueryWrapper(i, "formSelect", "M_FormSelect")
        }(cash),
        function(t, e) {
            "use strict";
            var i = {}
              , n = function(n) {
                function o(e, i) {
                    h(this, o);
                    var n = a(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, o, e, i));
                    return n.el.M_Range = n,
                    n.options = t.extend({}, o.defaults, i),
                    n._mousedown = !1,
                    n._setupThumb(),
                    n._setupEventHandlers(),
                    n
                }
                return l(o, u),
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
                        t(this.value).html(this.$el.val()),
                        t(this.thumb).hasClass("active") || this._showRangeBubble();
                        var e = this._calcRangeOffset();
                        t(this.thumb).addClass("active").css("left", e + "px")
                    }
                }, {
                    key: "_handleRangeMousedownTouchstart",
                    value: function(e) {
                        if (t(this.value).html(this.$el.val()),
                        this._mousedown = !0,
                        this.$el.addClass("active"),
                        t(this.thumb).hasClass("active") || this._showRangeBubble(),
                        "input" !== e.type) {
                            var i = this._calcRangeOffset();
                            t(this.thumb).addClass("active").css("left", i + "px")
                        }
                    }
                }, {
                    key: "_handleRangeInputMousemoveTouchmove",
                    value: function() {
                        if (this._mousedown) {
                            t(this.thumb).hasClass("active") || this._showRangeBubble();
                            var e = this._calcRangeOffset();
                            t(this.thumb).addClass("active").css("left", e + "px"),
                            t(this.value).html(this.$el.val())
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
                            var i = 7 + parseInt(this.$el.css("padding-left")) + "px";
                            t(this.thumb).hasClass("active") && (e.remove(this.thumb),
                            e({
                                targets: this.thumb,
                                height: 0,
                                width: 0,
                                top: 10,
                                easing: "easeOutQuad",
                                marginLeft: i,
                                duration: 100
                            })),
                            t(this.thumb).removeClass("active")
                        }
                    }
                }, {
                    key: "_setupThumb",
                    value: function() {
                        this.thumb = document.createElement("span"),
                        this.value = document.createElement("span"),
                        t(this.thumb).addClass("thumb"),
                        t(this.value).addClass("value"),
                        t(this.thumb).append(this.value),
                        this.$el.after(this.thumb)
                    }
                }, {
                    key: "_removeThumb",
                    value: function() {
                        t(this.thumb).remove()
                    }
                }, {
                    key: "_showRangeBubble",
                    value: function() {
                        var i = -7 + parseInt(t(this.thumb).parent().css("padding-left")) + "px";
                        e.remove(this.thumb),
                        e({
                            targets: this.thumb,
                            height: 30,
                            width: 30,
                            top: -30,
                            marginLeft: i,
                            duration: 300,
                            easing: "easeOutQuint"
                        })
                    }
                }, {
                    key: "_calcRangeOffset",
                    value: function() {
                        var t = this.$el.width() - 15
                          , e = parseFloat(this.$el.attr("max")) || 100
                          , i = parseFloat(this.$el.attr("min")) || 0;
                        return (parseFloat(this.$el.val()) - i) / (e - i) * t
                    }
                }], [{
                    key: "init",
                    value: function(t, e) {
                        return s(o.__proto__ || Object.getPrototypeOf(o), "init", this).call(this, this, t, e)
                    }
                }, {
                    key: "getInstance",
                    value: function(t) {
                        return (t.jquery ? t[0] : t).M_Range
                    }
                }, {
                    key: "defaults",
                    get: function() {
                        return i
                    }
                }]),
                o
            }();
            M.Range = n,
            M.jQueryLoaded && M.initializeJqueryWrapper(n, "range", "M_Range"),
            n.init(t("input[type=range]"))
        }(cash, M.anime)
    }
    ).call(this, i(6))
}
, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}
, function(t, e, i) {}
, function(t, e, i) {
    "use strict";
    var n = {
        searchParams: "URLSearchParams"in self,
        iterable: "Symbol"in self && "iterator"in Symbol,
        blob: "FileReader"in self && "Blob"in self && function() {
            try {
                return new Blob,
                !0
            } catch (t) {
                return !1
            }
        }(),
        formData: "FormData"in self,
        arrayBuffer: "ArrayBuffer"in self
    };
    if (n.arrayBuffer)
        var o = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
          , s = ArrayBuffer.isView || function(t) {
            return t && o.indexOf(Object.prototype.toString.call(t)) > -1
        }
        ;
    function r(t) {
        if ("string" != typeof t && (t = String(t)),
        /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
            throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
    }
    function a(t) {
        return "string" != typeof t && (t = String(t)),
        t
    }
    function l(t) {
        var e = {
            next: function() {
                var e = t.shift();
                return {
                    done: void 0 === e,
                    value: e
                }
            }
        };
        return n.iterable && (e[Symbol.iterator] = function() {
            return e
        }
        ),
        e
    }
    function h(t) {
        this.map = {},
        t instanceof h ? t.forEach(function(t, e) {
            this.append(e, t)
        }, this) : Array.isArray(t) ? t.forEach(function(t) {
            this.append(t[0], t[1])
        }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
            this.append(e, t[e])
        }, this)
    }
    function u(t) {
        if (t.bodyUsed)
            return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }
    function c(t) {
        return new Promise(function(e, i) {
            t.onload = function() {
                e(t.result)
            }
            ,
            t.onerror = function() {
                i(t.error)
            }
        }
        )
    }
    function d(t) {
        var e = new FileReader
          , i = c(e);
        return e.readAsArrayBuffer(t),
        i
    }
    function p(t) {
        if (t.slice)
            return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)),
        e.buffer
    }
    function f() {
        return this.bodyUsed = !1,
        this._initBody = function(t) {
            this._bodyInit = t,
            t ? "string" == typeof t ? this._bodyText = t : n.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : n.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : n.arrayBuffer && n.blob && function(t) {
                return t && DataView.prototype.isPrototypeOf(t)
            }(t) ? (this._bodyArrayBuffer = p(t.buffer),
            this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || s(t)) ? this._bodyArrayBuffer = p(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "",
            this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }
        ,
        n.blob && (this.blob = function() {
            var t = u(this);
            if (t)
                return t;
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
            return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(d)
        }
        ),
        this.text = function() {
            var t = u(this);
            if (t)
                return t;
            if (this._bodyBlob)
                return function(t) {
                    var e = new FileReader
                      , i = c(e);
                    return e.readAsText(t),
                    i
                }(this._bodyBlob);
            if (this._bodyArrayBuffer)
                return Promise.resolve(function(t) {
                    for (var e = new Uint8Array(t), i = new Array(e.length), n = 0; n < e.length; n++)
                        i[n] = String.fromCharCode(e[n]);
                    return i.join("")
                }(this._bodyArrayBuffer));
            if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }
        ,
        n.formData && (this.formData = function() {
            return this.text().then(v)
        }
        ),
        this.json = function() {
            return this.text().then(JSON.parse)
        }
        ,
        this
    }
    h.prototype.append = function(t, e) {
        t = r(t),
        e = a(e);
        var i = this.map[t];
        this.map[t] = i ? i + ", " + e : e
    }
    ,
    h.prototype.delete = function(t) {
        delete this.map[r(t)]
    }
    ,
    h.prototype.get = function(t) {
        return t = r(t),
        this.has(t) ? this.map[t] : null
    }
    ,
    h.prototype.has = function(t) {
        return this.map.hasOwnProperty(r(t))
    }
    ,
    h.prototype.set = function(t, e) {
        this.map[r(t)] = a(e)
    }
    ,
    h.prototype.forEach = function(t, e) {
        for (var i in this.map)
            this.map.hasOwnProperty(i) && t.call(e, this.map[i], i, this)
    }
    ,
    h.prototype.keys = function() {
        var t = [];
        return this.forEach(function(e, i) {
            t.push(i)
        }),
        l(t)
    }
    ,
    h.prototype.values = function() {
        var t = [];
        return this.forEach(function(e) {
            t.push(e)
        }),
        l(t)
    }
    ,
    h.prototype.entries = function() {
        var t = [];
        return this.forEach(function(e, i) {
            t.push([i, e])
        }),
        l(t)
    }
    ,
    n.iterable && (h.prototype[Symbol.iterator] = h.prototype.entries);
    var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    function _(t, e) {
        var i = (e = e || {}).body;
        if (t instanceof _) {
            if (t.bodyUsed)
                throw new TypeError("Already read");
            this.url = t.url,
            this.credentials = t.credentials,
            e.headers || (this.headers = new h(t.headers)),
            this.method = t.method,
            this.mode = t.mode,
            this.signal = t.signal,
            i || null == t._bodyInit || (i = t._bodyInit,
            t.bodyUsed = !0)
        } else
            this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "same-origin",
        !e.headers && this.headers || (this.headers = new h(e.headers)),
        this.method = function(t) {
            var e = t.toUpperCase();
            return m.indexOf(e) > -1 ? e : t
        }(e.method || this.method || "GET"),
        this.mode = e.mode || this.mode || null,
        this.signal = e.signal || this.signal,
        this.referrer = null,
        ("GET" === this.method || "HEAD" === this.method) && i)
            throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(i)
    }
    function v(t) {
        var e = new FormData;
        return t.trim().split("&").forEach(function(t) {
            if (t) {
                var i = t.split("=")
                  , n = i.shift().replace(/\+/g, " ")
                  , o = i.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(n), decodeURIComponent(o))
            }
        }),
        e
    }
    function g(t, e) {
        e || (e = {}),
        this.type = "default",
        this.status = void 0 === e.status ? 200 : e.status,
        this.ok = this.status >= 200 && this.status < 300,
        this.statusText = "statusText"in e ? e.statusText : "OK",
        this.headers = new h(e.headers),
        this.url = e.url || "",
        this._initBody(t)
    }
    _.prototype.clone = function() {
        return new _(this,{
            body: this._bodyInit
        })
    }
    ,
    f.call(_.prototype),
    f.call(g.prototype),
    g.prototype.clone = function() {
        return new g(this._bodyInit,{
            status: this.status,
            statusText: this.statusText,
            headers: new h(this.headers),
            url: this.url
        })
    }
    ,
    g.error = function() {
        var t = new g(null,{
            status: 0,
            statusText: ""
        });
        return t.type = "error",
        t
    }
    ;
    var y = [301, 302, 303, 307, 308];
    g.redirect = function(t, e) {
        if (-1 === y.indexOf(e))
            throw new RangeError("Invalid status code");
        return new g(null,{
            status: e,
            headers: {
                location: t
            }
        })
    }
    ;
    var b = self.DOMException;
    try {
        new b
    } catch (t) {
        (b = function(t, e) {
            this.message = t,
            this.name = e;
            var i = Error(t);
            this.stack = i.stack
        }
        ).prototype = Object.create(Error.prototype),
        b.prototype.constructor = b
    }
    function w(t, e) {
        return new Promise(function(i, o) {
            var s = new _(t,e);
            if (s.signal && s.signal.aborted)
                return o(new b("Aborted","AbortError"));
            var r = new XMLHttpRequest;
            function a() {
                r.abort()
            }
            r.onload = function() {
                var t = {
                    status: r.status,
                    statusText: r.statusText,
                    headers: function(t) {
                        var e = new h;
                        return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                            var i = t.split(":")
                              , n = i.shift().trim();
                            if (n) {
                                var o = i.join(":").trim();
                                e.append(n, o)
                            }
                        }),
                        e
                    }(r.getAllResponseHeaders() || "")
                };
                t.url = "responseURL"in r ? r.responseURL : t.headers.get("X-Request-URL");
                var e = "response"in r ? r.response : r.responseText;
                i(new g(e,t))
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
                o(new b("Aborted","AbortError"))
            }
            ,
            r.open(s.method, s.url, !0),
            "include" === s.credentials ? r.withCredentials = !0 : "omit" === s.credentials && (r.withCredentials = !1),
            "responseType"in r && n.blob && (r.responseType = "blob"),
            s.headers.forEach(function(t, e) {
                r.setRequestHeader(e, t)
            }),
            s.signal && (s.signal.addEventListener("abort", a),
            r.onreadystatechange = function() {
                4 === r.readyState && s.signal.removeEventListener("abort", a)
            }
            ),
            r.send(void 0 === s._bodyInit ? null : s._bodyInit)
        }
        )
    }
    w.polyfill = !0,
    self.fetch || (self.fetch = w,
    self.Headers = h,
    self.Request = _,
    self.Response = g)
}
, function(t, e) {
    !function(t, e, i) {
        L.drawVersion = "1.0.4",
        L.Draw = {},
        L.drawLocal = {
            draw: {
                toolbar: {
                    actions: {
                        title: "Cancel drawing",
                        text: "Cancel"
                    },
                    finish: {
                        title: "Finish drawing",
                        text: "Finish"
                    },
                    undo: {
                        title: "Delete last point drawn",
                        text: "Delete last point"
                    },
                    buttons: {
                        polyline: "Draw a polyline",
                        polygon: "Draw a polygon",
                        rectangle: "Draw a rectangle",
                        circle: "Draw a circle",
                        marker: "Draw a marker",
                        circlemarker: "Draw a circlemarker"
                    }
                },
                handlers: {
                    circle: {
                        tooltip: {
                            start: "Click and drag to draw circle."
                        },
                        radius: "Radius"
                    },
                    circlemarker: {
                        tooltip: {
                            start: "Click map to place circle marker."
                        }
                    },
                    marker: {
                        tooltip: {
                            start: "Click map to place marker."
                        }
                    },
                    polygon: {
                        tooltip: {
                            start: "Click to start drawing shape.",
                            cont: "Click to continue drawing shape.",
                            end: "Click first point to close this shape."
                        }
                    },
                    polyline: {
                        error: "<strong>Error:</strong> shape edges cannot cross!",
                        tooltip: {
                            start: "Click to start drawing line.",
                            cont: "Click to continue drawing line.",
                            end: "Click last point to finish line."
                        }
                    },
                    rectangle: {
                        tooltip: {
                            start: "Click and drag to draw rectangle."
                        }
                    },
                    simpleshape: {
                        tooltip: {
                            end: "Release mouse to finish drawing."
                        }
                    }
                }
            },
            edit: {
                toolbar: {
                    actions: {
                        save: {
                            title: "Save changes",
                            text: "Save"
                        },
                        cancel: {
                            title: "Cancel editing, discards all changes",
                            text: "Cancel"
                        },
                        clearAll: {
                            title: "Clear all layers",
                            text: "Clear All"
                        }
                    },
                    buttons: {
                        edit: "Edit layers",
                        editDisabled: "No layers to edit",
                        remove: "Delete layers",
                        removeDisabled: "No layers to delete"
                    }
                },
                handlers: {
                    edit: {
                        tooltip: {
                            text: "Drag handles or markers to edit features.",
                            subtext: "Click cancel to undo changes."
                        }
                    },
                    remove: {
                        tooltip: {
                            text: "Click on a feature to remove."
                        }
                    }
                }
            }
        },
        L.Draw.Event = {},
        L.Draw.Event.CREATED = "draw:created",
        L.Draw.Event.EDITED = "draw:edited",
        L.Draw.Event.DELETED = "draw:deleted",
        L.Draw.Event.DRAWSTART = "draw:drawstart",
        L.Draw.Event.DRAWSTOP = "draw:drawstop",
        L.Draw.Event.DRAWVERTEX = "draw:drawvertex",
        L.Draw.Event.EDITSTART = "draw:editstart",
        L.Draw.Event.EDITMOVE = "draw:editmove",
        L.Draw.Event.EDITRESIZE = "draw:editresize",
        L.Draw.Event.EDITVERTEX = "draw:editvertex",
        L.Draw.Event.EDITSTOP = "draw:editstop",
        L.Draw.Event.DELETESTART = "draw:deletestart",
        L.Draw.Event.DELETESTOP = "draw:deletestop",
        L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened",
        L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed",
        L.Draw.Event.MARKERCONTEXT = "draw:markercontext",
        L.Draw = L.Draw || {},
        L.Draw.Feature = L.Handler.extend({
            initialize: function(t, e) {
                this._map = t,
                this._container = t._container,
                this._overlayPane = t._panes.overlayPane,
                this._popupPane = t._panes.popupPane,
                e && e.shapeOptions && (e.shapeOptions = L.Util.extend({}, this.options.shapeOptions, e.shapeOptions)),
                L.setOptions(this, e);
                var i = L.version.split(".");
                1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events)
            },
            enable: function() {
                this._enabled || (L.Handler.prototype.enable.call(this),
                this.fire("enabled", {
                    handler: this.type
                }),
                this._map.fire(L.Draw.Event.DRAWSTART, {
                    layerType: this.type
                }))
            },
            disable: function() {
                this._enabled && (L.Handler.prototype.disable.call(this),
                this._map.fire(L.Draw.Event.DRAWSTOP, {
                    layerType: this.type
                }),
                this.fire("disabled", {
                    handler: this.type
                }))
            },
            addHooks: function() {
                var t = this._map;
                t && (L.DomUtil.disableTextSelection(),
                t.getContainer().focus(),
                this._tooltip = new L.Draw.Tooltip(this._map),
                L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this))
            },
            removeHooks: function() {
                this._map && (L.DomUtil.enableTextSelection(),
                this._tooltip.dispose(),
                this._tooltip = null,
                L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this))
            },
            setOptions: function(t) {
                L.setOptions(this, t)
            },
            _fireCreatedEvent: function(t) {
                this._map.fire(L.Draw.Event.CREATED, {
                    layer: t,
                    layerType: this.type
                })
            },
            _cancelDrawing: function(t) {
                27 === t.keyCode && (this._map.fire("draw:canceled", {
                    layerType: this.type
                }),
                this.disable())
            }
        }),
        L.Draw.Polyline = L.Draw.Feature.extend({
            statics: {
                TYPE: "polyline"
            },
            Poly: L.Polyline,
            options: {
                allowIntersection: !0,
                repeatMode: !1,
                drawError: {
                    color: "#b00b00",
                    timeout: 2500
                },
                icon: new L.DivIcon({
                    iconSize: new L.Point(8,8),
                    className: "leaflet-div-icon leaflet-editing-icon"
                }),
                touchIcon: new L.DivIcon({
                    iconSize: new L.Point(20,20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
                }),
                guidelineDistance: 20,
                maxGuideLineLength: 4e3,
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !1,
                    clickable: !0
                },
                metric: !0,
                feet: !0,
                nautic: !1,
                showLength: !0,
                zIndexOffset: 2e3,
                factor: 1,
                maxPoints: 0
            },
            initialize: function(t, e) {
                L.Browser.touch && (this.options.icon = this.options.touchIcon),
                this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error,
                e && e.drawError && (e.drawError = L.Util.extend({}, this.options.drawError, e.drawError)),
                this.type = L.Draw.Polyline.TYPE,
                L.Draw.Feature.prototype.initialize.call(this, t, e)
            },
            addHooks: function() {
                L.Draw.Feature.prototype.addHooks.call(this),
                this._map && (this._markers = [],
                this._markerGroup = new L.LayerGroup,
                this._map.addLayer(this._markerGroup),
                this._poly = new L.Polyline([],this.options.shapeOptions),
                this._tooltip.updateContent(this._getTooltipText()),
                this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                    icon: L.divIcon({
                        className: "leaflet-mouse-marker",
                        iconAnchor: [20, 20],
                        iconSize: [40, 40]
                    }),
                    opacity: 0,
                    zIndexOffset: this.options.zIndexOffset
                })),
                this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map),
                this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this))
            },
            removeHooks: function() {
                L.Draw.Feature.prototype.removeHooks.call(this),
                this._clearHideErrorTimeout(),
                this._cleanUpShape(),
                this._map.removeLayer(this._markerGroup),
                delete this._markerGroup,
                delete this._markers,
                this._map.removeLayer(this._poly),
                delete this._poly,
                this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this),
                this._map.removeLayer(this._mouseMarker),
                delete this._mouseMarker,
                this._clearGuides(),
                this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this)
            },
            deleteLastVertex: function() {
                if (!(this._markers.length <= 1)) {
                    var t = this._markers.pop()
                      , e = this._poly
                      , i = e.getLatLngs()
                      , n = i.splice(-1, 1)[0];
                    this._poly.setLatLngs(i),
                    this._markerGroup.removeLayer(t),
                    e.getLatLngs().length < 2 && this._map.removeLayer(e),
                    this._vertexChanged(n, !1)
                }
            },
            addVertex: function(t) {
                this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(t) ? this._showErrorTooltip() : (this._errorShown && this._hideErrorTooltip(),
                this._markers.push(this._createMarker(t)),
                this._poly.addLatLng(t),
                2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly),
                this._vertexChanged(t, !0))
            },
            completeShape: function() {
                this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(),
                this.disable(),
                this.options.repeatMode && this.enable())
            },
            _finishShape: function() {
                var t = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs()
                  , e = this._poly.newLatLngIntersects(t[t.length - 1]);
                !this.options.allowIntersection && e || !this._shapeIsValid() ? this._showErrorTooltip() : (this._fireCreatedEvent(),
                this.disable(),
                this.options.repeatMode && this.enable())
            },
            _shapeIsValid: function() {
                return !0
            },
            _onZoomEnd: function() {
                null !== this._markers && this._updateGuide()
            },
            _onMouseMove: function(t) {
                var e = this._map.mouseEventToLayerPoint(t.originalEvent)
                  , i = this._map.layerPointToLatLng(e);
                this._currentLatLng = i,
                this._updateTooltip(i),
                this._updateGuide(e),
                this._mouseMarker.setLatLng(i),
                L.DomEvent.preventDefault(t.originalEvent)
            },
            _vertexChanged: function(t, e) {
                this._map.fire(L.Draw.Event.DRAWVERTEX, {
                    layers: this._markerGroup
                }),
                this._updateFinishHandler(),
                this._updateRunningMeasure(t, e),
                this._clearGuides(),
                this._updateTooltip()
            },
            _onMouseDown: function(t) {
                if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
                    this._onMouseMove(t),
                    this._clickHandled = !0,
                    this._disableNewMarkers();
                    var e = t.originalEvent
                      , i = e.clientX
                      , n = e.clientY;
                    this._startPoint.call(this, i, n)
                }
            },
            _startPoint: function(t, e) {
                this._mouseDownOrigin = L.point(t, e)
            },
            _onMouseUp: function(t) {
                var e = t.originalEvent
                  , i = e.clientX
                  , n = e.clientY;
                this._endPoint.call(this, i, n, t),
                this._clickHandled = null
            },
            _endPoint: function(e, i, n) {
                if (this._mouseDownOrigin) {
                    var o = L.point(e, i).distanceTo(this._mouseDownOrigin)
                      , s = this._calculateFinishDistance(n.latlng);
                    this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(n.latlng),
                    this._finishShape()) : s < 10 && L.Browser.touch ? this._finishShape() : Math.abs(o) < 9 * (t.devicePixelRatio || 1) && this.addVertex(n.latlng),
                    this._enableNewMarkers()
                }
                this._mouseDownOrigin = null
            },
            _onTouch: function(t) {
                var e, i, n = t.originalEvent;
                !n.touches || !n.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (e = n.touches[0].clientX,
                i = n.touches[0].clientY,
                this._disableNewMarkers(),
                this._touchHandled = !0,
                this._startPoint.call(this, e, i),
                this._endPoint.call(this, e, i, t),
                this._touchHandled = null),
                this._clickHandled = null
            },
            _onMouseOut: function() {
                this._tooltip && this._tooltip._onMouseOut.call(this._tooltip)
            },
            _calculateFinishDistance: function(t) {
                var e;
                if (this._markers.length > 0) {
                    var i;
                    if (this.type === L.Draw.Polyline.TYPE)
                        i = this._markers[this._markers.length - 1];
                    else {
                        if (this.type !== L.Draw.Polygon.TYPE)
                            return 1 / 0;
                        i = this._markers[0]
                    }
                    var n = this._map.latLngToContainerPoint(i.getLatLng())
                      , o = new L.Marker(t,{
                        icon: this.options.icon,
                        zIndexOffset: 2 * this.options.zIndexOffset
                    })
                      , s = this._map.latLngToContainerPoint(o.getLatLng());
                    e = n.distanceTo(s)
                } else
                    e = 1 / 0;
                return e
            },
            _updateFinishHandler: function() {
                var t = this._markers.length;
                t > 1 && this._markers[t - 1].on("click", this._finishShape, this),
                t > 2 && this._markers[t - 2].off("click", this._finishShape, this)
            },
            _createMarker: function(t) {
                var e = new L.Marker(t,{
                    icon: this.options.icon,
                    zIndexOffset: 2 * this.options.zIndexOffset
                });
                return this._markerGroup.addLayer(e),
                e
            },
            _updateGuide: function(t) {
                var e = this._markers ? this._markers.length : 0;
                e > 0 && (t = t || this._map.latLngToLayerPoint(this._currentLatLng),
                this._clearGuides(),
                this._drawGuide(this._map.latLngToLayerPoint(this._markers[e - 1].getLatLng()), t))
            },
            _updateTooltip: function(t) {
                var e = this._getTooltipText();
                t && this._tooltip.updatePosition(t),
                this._errorShown || this._tooltip.updateContent(e)
            },
            _drawGuide: function(t, e) {
                var i, n, o, s = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))), r = this.options.guidelineDistance, a = this.options.maxGuideLineLength, l = s > a ? s - a : r;
                for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); l < s; l += this.options.guidelineDistance)
                    i = l / s,
                    n = {
                        x: Math.floor(t.x * (1 - i) + i * e.x),
                        y: Math.floor(t.y * (1 - i) + i * e.y)
                    },
                    (o = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer)).style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color,
                    L.DomUtil.setPosition(o, n)
            },
            _updateGuideColor: function(t) {
                if (this._guidesContainer)
                    for (var e = 0, i = this._guidesContainer.childNodes.length; e < i; e++)
                        this._guidesContainer.childNodes[e].style.backgroundColor = t
            },
            _clearGuides: function() {
                if (this._guidesContainer)
                    for (; this._guidesContainer.firstChild; )
                        this._guidesContainer.removeChild(this._guidesContainer.firstChild)
            },
            _getTooltipText: function() {
                var t, e, i = this.options.showLength;
                return 0 === this._markers.length ? t = {
                    text: L.drawLocal.draw.handlers.polyline.tooltip.start
                } : (e = i ? this._getMeasurementString() : "",
                t = 1 === this._markers.length ? {
                    text: L.drawLocal.draw.handlers.polyline.tooltip.cont,
                    subtext: e
                } : {
                    text: L.drawLocal.draw.handlers.polyline.tooltip.end,
                    subtext: e
                }),
                t
            },
            _updateRunningMeasure: function(t, e) {
                var i, n, o = this._markers.length;
                1 === this._markers.length ? this._measurementRunningTotal = 0 : (i = o - (e ? 2 : 1),
                n = L.GeometryUtil.isVersion07x() ? t.distanceTo(this._markers[i].getLatLng()) * (this.options.factor || 1) : this._map.distance(t, this._markers[i].getLatLng()) * (this.options.factor || 1),
                this._measurementRunningTotal += n * (e ? 1 : -1))
            },
            _getMeasurementString: function() {
                var t, e = this._currentLatLng, i = this._markers[this._markers.length - 1].getLatLng();
                return t = L.GeometryUtil.isVersion07x() ? i && e && e.distanceTo ? this._measurementRunningTotal + e.distanceTo(i) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : i && e ? this._measurementRunningTotal + this._map.distance(e, i) * (this.options.factor || 1) : this._measurementRunningTotal || 0,
                L.GeometryUtil.readableDistance(t, this.options.metric, this.options.feet, this.options.nautic, this.options.precision)
            },
            _showErrorTooltip: function() {
                this._errorShown = !0,
                this._tooltip.showAsError().updateContent({
                    text: this.options.drawError.message
                }),
                this._updateGuideColor(this.options.drawError.color),
                this._poly.setStyle({
                    color: this.options.drawError.color
                }),
                this._clearHideErrorTimeout(),
                this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout)
            },
            _hideErrorTooltip: function() {
                this._errorShown = !1,
                this._clearHideErrorTimeout(),
                this._tooltip.removeError().updateContent(this._getTooltipText()),
                this._updateGuideColor(this.options.shapeOptions.color),
                this._poly.setStyle({
                    color: this.options.shapeOptions.color
                })
            },
            _clearHideErrorTimeout: function() {
                this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout),
                this._hideErrorTimeout = null)
            },
            _disableNewMarkers: function() {
                this._disableMarkers = !0
            },
            _enableNewMarkers: function() {
                setTimeout(function() {
                    this._disableMarkers = !1
                }
                .bind(this), 50)
            },
            _cleanUpShape: function() {
                this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this)
            },
            _fireCreatedEvent: function() {
                var t = new this.Poly(this._poly.getLatLngs(),this.options.shapeOptions);
                L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
            }
        }),
        L.Draw.Polygon = L.Draw.Polyline.extend({
            statics: {
                TYPE: "polygon"
            },
            Poly: L.Polygon,
            options: {
                showArea: !1,
                showLength: !1,
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !0,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0
                },
                metric: !0,
                feet: !0,
                nautic: !1,
                precision: {}
            },
            initialize: function(t, e) {
                L.Draw.Polyline.prototype.initialize.call(this, t, e),
                this.type = L.Draw.Polygon.TYPE
            },
            _updateFinishHandler: function() {
                var t = this._markers.length;
                1 === t && this._markers[0].on("click", this._finishShape, this),
                t > 2 && (this._markers[t - 1].on("dblclick", this._finishShape, this),
                t > 3 && this._markers[t - 2].off("dblclick", this._finishShape, this))
            },
            _getTooltipText: function() {
                var t, e;
                return 0 === this._markers.length ? t = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (t = L.drawLocal.draw.handlers.polygon.tooltip.cont,
                e = this._getMeasurementString()) : (t = L.drawLocal.draw.handlers.polygon.tooltip.end,
                e = this._getMeasurementString()),
                {
                    text: t,
                    subtext: e
                }
            },
            _getMeasurementString: function() {
                var t = this._area
                  , e = "";
                return t || this.options.showLength ? (this.options.showLength && (e = L.Draw.Polyline.prototype._getMeasurementString.call(this)),
                t && (e += "<br>" + L.GeometryUtil.readableArea(t, this.options.metric, this.options.precision)),
                e) : null
            },
            _shapeIsValid: function() {
                return this._markers.length >= 3
            },
            _vertexChanged: function(t, e) {
                var i;
                !this.options.allowIntersection && this.options.showArea && (i = this._poly.getLatLngs(),
                this._area = L.GeometryUtil.geodesicArea(i)),
                L.Draw.Polyline.prototype._vertexChanged.call(this, t, e)
            },
            _cleanUpShape: function() {
                var t = this._markers.length;
                t > 0 && (this._markers[0].off("click", this._finishShape, this),
                t > 2 && this._markers[t - 1].off("dblclick", this._finishShape, this))
            }
        }),
        L.SimpleShape = {},
        L.Draw.SimpleShape = L.Draw.Feature.extend({
            options: {
                repeatMode: !1
            },
            initialize: function(t, e) {
                this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end,
                L.Draw.Feature.prototype.initialize.call(this, t, e)
            },
            addHooks: function() {
                L.Draw.Feature.prototype.addHooks.call(this),
                this._map && (this._mapDraggable = this._map.dragging.enabled(),
                this._mapDraggable && this._map.dragging.disable(),
                this._container.style.cursor = "crosshair",
                this._tooltip.updateContent({
                    text: this._initialLabelText
                }),
                this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this),
                e.addEventListener("touchstart", L.DomEvent.preventDefault, {
                    passive: !1
                }))
            },
            removeHooks: function() {
                L.Draw.Feature.prototype.removeHooks.call(this),
                this._map && (this._mapDraggable && this._map.dragging.enable(),
                this._container.style.cursor = "",
                this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this),
                L.DomEvent.off(e, "mouseup", this._onMouseUp, this),
                L.DomEvent.off(e, "touchend", this._onMouseUp, this),
                e.removeEventListener("touchstart", L.DomEvent.preventDefault),
                this._shape && (this._map.removeLayer(this._shape),
                delete this._shape)),
                this._isDrawing = !1
            },
            _getTooltipText: function() {
                return {
                    text: this._endLabelText
                }
            },
            _onMouseDown: function(t) {
                this._isDrawing = !0,
                this._startLatLng = t.latlng,
                L.DomEvent.on(e, "mouseup", this._onMouseUp, this).on(e, "touchend", this._onMouseUp, this).preventDefault(t.originalEvent)
            },
            _onMouseMove: function(t) {
                var e = t.latlng;
                this._tooltip.updatePosition(e),
                this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()),
                this._drawShape(e))
            },
            _onMouseUp: function() {
                this._shape && this._fireCreatedEvent(),
                this.disable(),
                this.options.repeatMode && this.enable()
            }
        }),
        L.Draw.Rectangle = L.Draw.SimpleShape.extend({
            statics: {
                TYPE: "rectangle"
            },
            options: {
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !0,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0
                },
                showArea: !0,
                metric: !0
            },
            initialize: function(t, e) {
                this.type = L.Draw.Rectangle.TYPE,
                this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start,
                L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
            },
            disable: function() {
                this._enabled && (this._isCurrentlyTwoClickDrawing = !1,
                L.Draw.SimpleShape.prototype.disable.call(this))
            },
            _onMouseUp: function(t) {
                this._shape || this._isCurrentlyTwoClickDrawing ? this._isCurrentlyTwoClickDrawing && !function(t, e) {
                    for (; (t = t.parentElement) && !t.classList.contains(e); )
                        ;
                    return t
                }(t.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this) : this._isCurrentlyTwoClickDrawing = !0
            },
            _drawShape: function(t) {
                this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng,t)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng,t),this.options.shapeOptions),
                this._map.addLayer(this._shape))
            },
            _fireCreatedEvent: function() {
                var t = new L.Rectangle(this._shape.getBounds(),this.options.shapeOptions);
                L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
            },
            _getTooltipText: function() {
                var t, e, i, n = L.Draw.SimpleShape.prototype._getTooltipText.call(this), o = this._shape, s = this.options.showArea;
                return o && (t = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(),
                e = L.GeometryUtil.geodesicArea(t),
                i = s ? L.GeometryUtil.readableArea(e, this.options.metric) : ""),
                {
                    text: n.text,
                    subtext: i
                }
            }
        }),
        L.Draw.Marker = L.Draw.Feature.extend({
            statics: {
                TYPE: "marker"
            },
            options: {
                icon: new L.Icon.Default,
                repeatMode: !1,
                zIndexOffset: 2e3
            },
            initialize: function(t, e) {
                this.type = L.Draw.Marker.TYPE,
                this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start,
                L.Draw.Feature.prototype.initialize.call(this, t, e)
            },
            addHooks: function() {
                L.Draw.Feature.prototype.addHooks.call(this),
                this._map && (this._tooltip.updateContent({
                    text: this._initialLabelText
                }),
                this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                    icon: L.divIcon({
                        className: "leaflet-mouse-marker",
                        iconAnchor: [20, 20],
                        iconSize: [40, 40]
                    }),
                    opacity: 0,
                    zIndexOffset: this.options.zIndexOffset
                })),
                this._mouseMarker.on("click", this._onClick, this).addTo(this._map),
                this._map.on("mousemove", this._onMouseMove, this),
                this._map.on("click", this._onTouch, this))
            },
            removeHooks: function() {
                L.Draw.Feature.prototype.removeHooks.call(this),
                this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this),
                this._marker && (this._marker.off("click", this._onClick, this),
                this._map.removeLayer(this._marker),
                delete this._marker),
                this._mouseMarker.off("click", this._onClick, this),
                this._map.removeLayer(this._mouseMarker),
                delete this._mouseMarker,
                this._map.off("mousemove", this._onMouseMove, this))
            },
            _onMouseMove: function(t) {
                var e = t.latlng;
                this._tooltip.updatePosition(e),
                this._mouseMarker.setLatLng(e),
                this._marker ? (e = this._mouseMarker.getLatLng(),
                this._marker.setLatLng(e)) : (this._marker = this._createMarker(e),
                this._marker.on("click", this._onClick, this),
                this._map.on("click", this._onClick, this).addLayer(this._marker))
            },
            _createMarker: function(t) {
                return new L.Marker(t,{
                    icon: this.options.icon,
                    zIndexOffset: this.options.zIndexOffset
                })
            },
            _onClick: function() {
                this._fireCreatedEvent(),
                this.disable(),
                this.options.repeatMode && this.enable()
            },
            _onTouch: function(t) {
                this._onMouseMove(t),
                this._onClick()
            },
            _fireCreatedEvent: function() {
                var t = new L.Marker.Touch(this._marker.getLatLng(),{
                    icon: this.options.icon
                });
                L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
            }
        }),
        L.Draw.CircleMarker = L.Draw.Marker.extend({
            statics: {
                TYPE: "circlemarker"
            },
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 4,
                opacity: .5,
                fill: !0,
                fillColor: null,
                fillOpacity: .2,
                clickable: !0,
                zIndexOffset: 2e3
            },
            initialize: function(t, e) {
                this.type = L.Draw.CircleMarker.TYPE,
                this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start,
                L.Draw.Feature.prototype.initialize.call(this, t, e)
            },
            _fireCreatedEvent: function() {
                var t = new L.CircleMarker(this._marker.getLatLng(),this.options);
                L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
            },
            _createMarker: function(t) {
                return new L.CircleMarker(t,this.options)
            }
        }),
        L.Draw.Circle = L.Draw.SimpleShape.extend({
            statics: {
                TYPE: "circle"
            },
            options: {
                shapeOptions: {
                    stroke: !0,
                    color: "#3388ff",
                    weight: 4,
                    opacity: .5,
                    fill: !0,
                    fillColor: null,
                    fillOpacity: .2,
                    clickable: !0
                },
                showRadius: !0,
                metric: !0,
                feet: !0,
                nautic: !1
            },
            initialize: function(t, e) {
                this.type = L.Draw.Circle.TYPE,
                this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start,
                L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
            },
            _drawShape: function(t) {
                if (L.GeometryUtil.isVersion07x())
                    var e = this._startLatLng.distanceTo(t);
                else
                    e = this._map.distance(this._startLatLng, t);
                this._shape ? this._shape.setRadius(e) : (this._shape = new L.Circle(this._startLatLng,e,this.options.shapeOptions),
                this._map.addLayer(this._shape))
            },
            _fireCreatedEvent: function() {
                var t = new L.Circle(this._startLatLng,this._shape.getRadius(),this.options.shapeOptions);
                L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
            },
            _onMouseMove: function(t) {
                var e, i = t.latlng, n = this.options.showRadius, o = this.options.metric;
                if (this._tooltip.updatePosition(i),
                this._isDrawing) {
                    this._drawShape(i),
                    e = this._shape.getRadius().toFixed(1);
                    var s = "";
                    n && (s = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(e, o, this.options.feet, this.options.nautic)),
                    this._tooltip.updateContent({
                        text: this._endLabelText,
                        subtext: s
                    })
                }
            }
        }),
        L.Edit = L.Edit || {},
        L.Edit.Marker = L.Handler.extend({
            initialize: function(t, e) {
                this._marker = t,
                L.setOptions(this, e)
            },
            addHooks: function() {
                var t = this._marker;
                t.dragging.enable(),
                t.on("dragend", this._onDragEnd, t),
                this._toggleMarkerHighlight()
            },
            removeHooks: function() {
                var t = this._marker;
                t.dragging.disable(),
                t.off("dragend", this._onDragEnd, t),
                this._toggleMarkerHighlight()
            },
            _onDragEnd: function(t) {
                var e = t.target;
                e.edited = !0,
                this._map.fire(L.Draw.Event.EDITMOVE, {
                    layer: e
                })
            },
            _toggleMarkerHighlight: function() {
                var t = this._marker._icon;
                t && (t.style.display = "none",
                L.DomUtil.hasClass(t, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(t, "leaflet-edit-marker-selected"),
                this._offsetMarker(t, -4)) : (L.DomUtil.addClass(t, "leaflet-edit-marker-selected"),
                this._offsetMarker(t, 4)),
                t.style.display = "")
            },
            _offsetMarker: function(t, e) {
                var i = parseInt(t.style.marginTop, 10) - e
                  , n = parseInt(t.style.marginLeft, 10) - e;
                t.style.marginTop = i + "px",
                t.style.marginLeft = n + "px"
            }
        }),
        L.Marker.addInitHook(function() {
            L.Edit.Marker && (this.editing = new L.Edit.Marker(this),
            this.options.editable && this.editing.enable())
        }),
        L.Edit = L.Edit || {},
        L.Edit.Poly = L.Handler.extend({
            initialize: function(t) {
                this.latlngs = [t._latlngs],
                t._holes && (this.latlngs = this.latlngs.concat(t._holes)),
                this._poly = t,
                this._poly.on("revert-edited", this._updateLatLngs, this)
            },
            _defaultShape: function() {
                return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs
            },
            _eachVertexHandler: function(t) {
                for (var e = 0; e < this._verticesHandlers.length; e++)
                    t(this._verticesHandlers[e])
            },
            addHooks: function() {
                this._initHandlers(),
                this._eachVertexHandler(function(t) {
                    t.addHooks()
                })
            },
            removeHooks: function() {
                this._eachVertexHandler(function(t) {
                    t.removeHooks()
                })
            },
            updateMarkers: function() {
                this._eachVertexHandler(function(t) {
                    t.updateMarkers()
                })
            },
            _initHandlers: function() {
                this._verticesHandlers = [];
                for (var t = 0; t < this.latlngs.length; t++)
                    this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly,this.latlngs[t],this._poly.options.poly))
            },
            _updateLatLngs: function(t) {
                this.latlngs = [t.layer._latlngs],
                t.layer._holes && (this.latlngs = this.latlngs.concat(t.layer._holes))
            }
        }),
        L.Edit.PolyVerticesEdit = L.Handler.extend({
            options: {
                icon: new L.DivIcon({
                    iconSize: new L.Point(8,8),
                    className: "leaflet-div-icon leaflet-editing-icon"
                }),
                touchIcon: new L.DivIcon({
                    iconSize: new L.Point(20,20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
                }),
                drawError: {
                    color: "#b00b00",
                    timeout: 1e3
                }
            },
            initialize: function(t, e, i) {
                L.Browser.touch && (this.options.icon = this.options.touchIcon),
                this._poly = t,
                i && i.drawError && (i.drawError = L.Util.extend({}, this.options.drawError, i.drawError)),
                this._latlngs = e,
                L.setOptions(this, i)
            },
            _defaultShape: function() {
                return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs
            },
            addHooks: function() {
                var t = this._poly
                  , e = t._path;
                t instanceof L.Polygon || (t.options.fill = !1,
                t.options.editing && (t.options.editing.fill = !1)),
                e && t.options.editing && t.options.editing.className && (t.options.original.className && t.options.original.className.split(" ").forEach(function(t) {
                    L.DomUtil.removeClass(e, t)
                }),
                t.options.editing.className.split(" ").forEach(function(t) {
                    L.DomUtil.addClass(e, t)
                })),
                t.setStyle(t.options.editing),
                this._poly._map && (this._map = this._poly._map,
                this._markerGroup || this._initMarkers(),
                this._poly._map.addLayer(this._markerGroup))
            },
            removeHooks: function() {
                var t = this._poly
                  , e = t._path;
                e && t.options.editing && t.options.editing.className && (t.options.editing.className.split(" ").forEach(function(t) {
                    L.DomUtil.removeClass(e, t)
                }),
                t.options.original.className && t.options.original.className.split(" ").forEach(function(t) {
                    L.DomUtil.addClass(e, t)
                })),
                t.setStyle(t.options.original),
                t._map && (t._map.removeLayer(this._markerGroup),
                delete this._markerGroup,
                delete this._markers)
            },
            updateMarkers: function() {
                this._markerGroup.clearLayers(),
                this._initMarkers()
            },
            _initMarkers: function() {
                this._markerGroup || (this._markerGroup = new L.LayerGroup),
                this._markers = [];
                var t, e, i, n, o, s, r = this._defaultShape();
                for (t = 0,
                i = r.length; t < i; t++)
                    (n = this._createMarker(r[t], t)).on("click", this._onMarkerClick, this),
                    n.on("contextmenu", this._onContextMenu, this),
                    this._markers.push(n);
                for (t = 0,
                e = i - 1; t < i; e = t++)
                    (0 !== t || L.Polygon && this._poly instanceof L.Polygon) && (o = this._markers[e],
                    s = this._markers[t],
                    this._createMiddleMarker(o, s),
                    this._updatePrevNext(o, s))
            },
            _createMarker: function(t, e) {
                var i = new L.Marker.Touch(t,{
                    draggable: !0,
                    icon: this.options.icon
                });
                return i._origLatLng = t,
                i._index = e,
                i.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this),
                this._markerGroup.addLayer(i),
                i
            },
            _onMarkerDragStart: function() {
                this._poly.fire("editstart")
            },
            _spliceLatLngs: function() {
                var t = this._defaultShape()
                  , e = [].splice.apply(t, arguments);
                return this._poly._convertLatLngs(t, !0),
                this._poly.redraw(),
                e
            },
            _removeMarker: function(t) {
                var e = t._index;
                this._markerGroup.removeLayer(t),
                this._markers.splice(e, 1),
                this._spliceLatLngs(e, 1),
                this._updateIndexes(e, -1),
                t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this)
            },
            _fireEdit: function() {
                this._poly.edited = !0,
                this._poly.fire("edit"),
                this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
                    layers: this._markerGroup,
                    poly: this._poly
                })
            },
            _onMarkerDrag: function(t) {
                var e = t.target
                  , i = this._poly
                  , n = L.LatLngUtil.cloneLatLng(e._origLatLng);
                if (L.extend(e._origLatLng, e._latlng),
                i.options.poly) {
                    var o = i._map._editTooltip;
                    if (!i.options.poly.allowIntersection && i.intersects()) {
                        L.extend(e._origLatLng, n),
                        e.setLatLng(n);
                        var s = i.options.color;
                        i.setStyle({
                            color: this.options.drawError.color
                        }),
                        o && o.updateContent({
                            text: L.drawLocal.draw.handlers.polyline.error
                        }),
                        setTimeout(function() {
                            i.setStyle({
                                color: s
                            }),
                            o && o.updateContent({
                                text: L.drawLocal.edit.handlers.edit.tooltip.text,
                                subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                            })
                        }, 1e3)
                    }
                }
                e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev, e)),
                e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)),
                this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0),
                this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0);
                var r = this._poly.getLatLngs();
                this._poly._convertLatLngs(r, !0),
                this._poly.redraw(),
                this._poly.fire("editdrag")
            },
            _onMarkerClick: function(t) {
                var e = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3
                  , i = t.target;
                this._defaultShape().length < e || (this._removeMarker(i),
                this._updatePrevNext(i._prev, i._next),
                i._middleLeft && this._markerGroup.removeLayer(i._middleLeft),
                i._middleRight && this._markerGroup.removeLayer(i._middleRight),
                i._prev && i._next ? this._createMiddleMarker(i._prev, i._next) : i._prev ? i._next || (i._prev._middleRight = null) : i._next._middleLeft = null,
                this._fireEdit())
            },
            _onContextMenu: function(t) {
                var e = t.target;
                this._poly,
                this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, {
                    marker: e,
                    layers: this._markerGroup,
                    poly: this._poly
                }),
                L.DomEvent.stopPropagation
            },
            _onTouchMove: function(t) {
                var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0])
                  , i = this._map.layerPointToLatLng(e)
                  , n = t.target;
                L.extend(n._origLatLng, i),
                n._middleLeft && n._middleLeft.setLatLng(this._getMiddleLatLng(n._prev, n)),
                n._middleRight && n._middleRight.setLatLng(this._getMiddleLatLng(n, n._next)),
                this._poly.redraw(),
                this.updateMarkers()
            },
            _updateIndexes: function(t, e) {
                this._markerGroup.eachLayer(function(i) {
                    i._index > t && (i._index += e)
                })
            },
            _createMiddleMarker: function(t, e) {
                var i, n, o, s = this._getMiddleLatLng(t, e), r = this._createMarker(s);
                r.setOpacity(.6),
                t._middleRight = e._middleLeft = r,
                n = function() {
                    r.off("touchmove", n, this);
                    var o = e._index;
                    r._index = o,
                    r.off("click", i, this).on("click", this._onMarkerClick, this),
                    s.lat = r.getLatLng().lat,
                    s.lng = r.getLatLng().lng,
                    this._spliceLatLngs(o, 0, s),
                    this._markers.splice(o, 0, r),
                    r.setOpacity(1),
                    this._updateIndexes(o, 1),
                    e._index++,
                    this._updatePrevNext(t, r),
                    this._updatePrevNext(r, e),
                    this._poly.fire("editstart")
                }
                ,
                o = function() {
                    r.off("dragstart", n, this),
                    r.off("dragend", o, this),
                    r.off("touchmove", n, this),
                    this._createMiddleMarker(t, r),
                    this._createMiddleMarker(r, e)
                }
                ,
                i = function() {
                    n.call(this),
                    o.call(this),
                    this._fireEdit()
                }
                ,
                r.on("click", i, this).on("dragstart", n, this).on("dragend", o, this).on("touchmove", n, this),
                this._markerGroup.addLayer(r)
            },
            _updatePrevNext: function(t, e) {
                t && (t._next = e),
                e && (e._prev = t)
            },
            _getMiddleLatLng: function(t, e) {
                var i = this._poly._map
                  , n = i.project(t.getLatLng())
                  , o = i.project(e.getLatLng());
                return i.unproject(n._add(o)._divideBy(2))
            }
        }),
        L.Polyline.addInitHook(function() {
            this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this),
            this.options.editable && this.editing.enable()),
            this.on("add", function() {
                this.editing && this.editing.enabled() && this.editing.addHooks()
            }),
            this.on("remove", function() {
                this.editing && this.editing.enabled() && this.editing.removeHooks()
            }))
        }),
        L.Edit = L.Edit || {},
        L.Edit.SimpleShape = L.Handler.extend({
            options: {
                moveIcon: new L.DivIcon({
                    iconSize: new L.Point(8,8),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
                }),
                resizeIcon: new L.DivIcon({
                    iconSize: new L.Point(8,8),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
                }),
                touchMoveIcon: new L.DivIcon({
                    iconSize: new L.Point(20,20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"
                }),
                touchResizeIcon: new L.DivIcon({
                    iconSize: new L.Point(20,20),
                    className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"
                })
            },
            initialize: function(t, e) {
                L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon,
                this.options.resizeIcon = this.options.touchResizeIcon),
                this._shape = t,
                L.Util.setOptions(this, e)
            },
            addHooks: function() {
                var t = this._shape;
                this._shape._map && (this._map = this._shape._map,
                t.setStyle(t.options.editing),
                t._map && (this._map = t._map,
                this._markerGroup || this._initMarkers(),
                this._map.addLayer(this._markerGroup)))
            },
            removeHooks: function() {
                var t = this._shape;
                if (t.setStyle(t.options.original),
                t._map) {
                    this._unbindMarker(this._moveMarker);
                    for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
                        this._unbindMarker(this._resizeMarkers[e]);
                    this._resizeMarkers = null,
                    this._map.removeLayer(this._markerGroup),
                    delete this._markerGroup
                }
                this._map = null
            },
            updateMarkers: function() {
                this._markerGroup.clearLayers(),
                this._initMarkers()
            },
            _initMarkers: function() {
                this._markerGroup || (this._markerGroup = new L.LayerGroup),
                this._createMoveMarker(),
                this._createResizeMarker()
            },
            _createMoveMarker: function() {},
            _createResizeMarker: function() {},
            _createMarker: function(t, e) {
                var i = new L.Marker.Touch(t,{
                    draggable: !0,
                    icon: e,
                    zIndexOffset: 10
                });
                return this._bindMarker(i),
                this._markerGroup.addLayer(i),
                i
            },
            _bindMarker: function(t) {
                t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this)
            },
            _unbindMarker: function(t) {
                t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this)
            },
            _onMarkerDragStart: function(t) {
                t.target.setOpacity(0),
                this._shape.fire("editstart")
            },
            _fireEdit: function() {
                this._shape.edited = !0,
                this._shape.fire("edit")
            },
            _onMarkerDrag: function(t) {
                var e = t.target
                  , i = e.getLatLng();
                e === this._moveMarker ? this._move(i) : this._resize(i),
                this._shape.redraw(),
                this._shape.fire("editdrag")
            },
            _onMarkerDragEnd: function(t) {
                t.target.setOpacity(1),
                this._fireEdit()
            },
            _onTouchStart: function(t) {
                if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t),
                "function" == typeof this._getCorners) {
                    var e = this._getCorners()
                      , i = t.target
                      , n = i._cornerIndex;
                    i.setOpacity(0),
                    this._oppositeCorner = e[(n + 2) % 4],
                    this._toggleCornerMarkers(0, n)
                }
                this._shape.fire("editstart")
            },
            _onTouchMove: function(t) {
                var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0])
                  , i = this._map.layerPointToLatLng(e);
                return t.target === this._moveMarker ? this._move(i) : this._resize(i),
                this._shape.redraw(),
                !1
            },
            _onTouchEnd: function(t) {
                t.target.setOpacity(1),
                this.updateMarkers(),
                this._fireEdit()
            },
            _move: function() {},
            _resize: function() {}
        }),
        L.Edit = L.Edit || {},
        L.Edit.Rectangle = L.Edit.SimpleShape.extend({
            _createMoveMarker: function() {
                var t = this._shape.getBounds().getCenter();
                this._moveMarker = this._createMarker(t, this.options.moveIcon)
            },
            _createResizeMarker: function() {
                var t = this._getCorners();
                this._resizeMarkers = [];
                for (var e = 0, i = t.length; e < i; e++)
                    this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)),
                    this._resizeMarkers[e]._cornerIndex = e
            },
            _onMarkerDragStart: function(t) {
                L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
                var e = this._getCorners()
                  , i = t.target._cornerIndex;
                this._oppositeCorner = e[(i + 2) % 4],
                this._toggleCornerMarkers(0, i)
            },
            _onMarkerDragEnd: function(t) {
                var e, i = t.target;
                i === this._moveMarker && (e = this._shape.getBounds().getCenter(),
                i.setLatLng(e)),
                this._toggleCornerMarkers(1),
                this._repositionCornerMarkers(),
                L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t)
            },
            _move: function(t) {
                for (var e, i = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), n = this._shape.getBounds().getCenter(), o = [], s = 0, r = i.length; s < r; s++)
                    e = [i[s].lat - n.lat, i[s].lng - n.lng],
                    o.push([t.lat + e[0], t.lng + e[1]]);
                this._shape.setLatLngs(o),
                this._repositionCornerMarkers(),
                this._map.fire(L.Draw.Event.EDITMOVE, {
                    layer: this._shape
                })
            },
            _resize: function(t) {
                var e;
                this._shape.setBounds(L.latLngBounds(t, this._oppositeCorner)),
                e = this._shape.getBounds(),
                this._moveMarker.setLatLng(e.getCenter()),
                this._map.fire(L.Draw.Event.EDITRESIZE, {
                    layer: this._shape
                })
            },
            _getCorners: function() {
                var t = this._shape.getBounds();
                return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()]
            },
            _toggleCornerMarkers: function(t) {
                for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
                    this._resizeMarkers[e].setOpacity(t)
            },
            _repositionCornerMarkers: function() {
                for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++)
                    this._resizeMarkers[e].setLatLng(t[e])
            }
        }),
        L.Rectangle.addInitHook(function() {
            L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this),
            this.options.editable && this.editing.enable())
        }),
        L.Edit = L.Edit || {},
        L.Edit.CircleMarker = L.Edit.SimpleShape.extend({
            _createMoveMarker: function() {
                var t = this._shape.getLatLng();
                this._moveMarker = this._createMarker(t, this.options.moveIcon)
            },
            _createResizeMarker: function() {
                this._resizeMarkers = []
            },
            _move: function(t) {
                if (this._resizeMarkers.length) {
                    var e = this._getResizeMarkerPoint(t);
                    this._resizeMarkers[0].setLatLng(e)
                }
                this._shape.setLatLng(t),
                this._map.fire(L.Draw.Event.EDITMOVE, {
                    layer: this._shape
                })
            }
        }),
        L.CircleMarker.addInitHook(function() {
            L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this),
            this.options.editable && this.editing.enable()),
            this.on("add", function() {
                this.editing && this.editing.enabled() && this.editing.addHooks()
            }),
            this.on("remove", function() {
                this.editing && this.editing.enabled() && this.editing.removeHooks()
            })
        }),
        L.Edit = L.Edit || {},
        L.Edit.Circle = L.Edit.CircleMarker.extend({
            _createResizeMarker: function() {
                var t = this._shape.getLatLng()
                  , e = this._getResizeMarkerPoint(t);
                this._resizeMarkers = [],
                this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon))
            },
            _getResizeMarkerPoint: function(t) {
                var e = this._shape._radius * Math.cos(Math.PI / 4)
                  , i = this._map.project(t);
                return this._map.unproject([i.x + e, i.y - e])
            },
            _resize: function(t) {
                var e = this._moveMarker.getLatLng();
                L.GeometryUtil.isVersion07x() ? radius = e.distanceTo(t) : radius = this._map.distance(e, t),
                this._shape.setRadius(radius),
                this._map.editTooltip && this._map._editTooltip.updateContent({
                    text: L.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + L.drawLocal.edit.handlers.edit.tooltip.text,
                    subtext: L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(radius, !0, this.options.feet, this.options.nautic)
                }),
                this._shape.setRadius(radius),
                this._map.fire(L.Draw.Event.EDITRESIZE, {
                    layer: this._shape
                })
            }
        }),
        L.Circle.addInitHook(function() {
            L.Edit.Circle && (this.editing = new L.Edit.Circle(this),
            this.options.editable && this.editing.enable())
        }),
        L.Map.mergeOptions({
            touchExtend: !0
        }),
        L.Map.TouchExtend = L.Handler.extend({
            initialize: function(t) {
                this._map = t,
                this._container = t._container,
                this._pane = t._panes.overlayPane
            },
            addHooks: function() {
                L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this),
                L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this),
                L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this),
                this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this),
                L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this),
                L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this),
                L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this),
                L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this))
            },
            removeHooks: function() {
                L.DomEvent.off(this._container, "touchstart", this._onTouchStart, this),
                L.DomEvent.off(this._container, "touchend", this._onTouchEnd, this),
                L.DomEvent.off(this._container, "touchmove", this._onTouchMove, this),
                this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this),
                L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this),
                L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this),
                L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this),
                L.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this))
            },
            _touchEvent: function(t, e) {
                var i = {};
                if (void 0 !== t.touches) {
                    if (!t.touches.length)
                        return;
                    i = t.touches[0]
                } else {
                    if ("touch" !== t.pointerType)
                        return;
                    if (i = t,
                    !this._filterClick(t))
                        return
                }
                var n = this._map.mouseEventToContainerPoint(i)
                  , o = this._map.mouseEventToLayerPoint(i)
                  , s = this._map.layerPointToLatLng(o);
                this._map.fire(e, {
                    latlng: s,
                    layerPoint: o,
                    containerPoint: n,
                    pageX: i.pageX,
                    pageY: i.pageY,
                    originalEvent: t
                })
            },
            _filterClick: function(t) {
                var e = t.timeStamp || t.originalEvent.timeStamp
                  , i = L.DomEvent._lastClick && e - L.DomEvent._lastClick;
                return i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? (L.DomEvent.stop(t),
                !1) : (L.DomEvent._lastClick = e,
                !0)
            },
            _onTouchStart: function(t) {
                this._map._loaded && this._touchEvent(t, "touchstart")
            },
            _onTouchEnd: function(t) {
                this._map._loaded && this._touchEvent(t, "touchend")
            },
            _onTouchCancel: function(t) {
                if (this._map._loaded) {
                    var e = "touchcancel";
                    this._detectIE() && (e = "pointercancel"),
                    this._touchEvent(t, e)
                }
            },
            _onTouchLeave: function(t) {
                this._map._loaded && this._touchEvent(t, "touchleave")
            },
            _onTouchMove: function(t) {
                this._map._loaded && this._touchEvent(t, "touchmove")
            },
            _detectIE: function() {
                var e = t.navigator.userAgent
                  , i = e.indexOf("MSIE ");
                if (i > 0)
                    return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);
                if (e.indexOf("Trident/") > 0) {
                    var n = e.indexOf("rv:");
                    return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10)
                }
                var o = e.indexOf("Edge/");
                return o > 0 && parseInt(e.substring(o + 5, e.indexOf(".", o)), 10)
            }
        }),
        L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend),
        L.Marker.Touch = L.Marker.extend({
            _initInteraction: function() {
                return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy()
            },
            _initInteractionLegacy: function() {
                if (this.options.clickable) {
                    var t = this._icon
                      , e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
                    this._detectIE ? e.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : e.concat(["touchcancel"]),
                    L.DomUtil.addClass(t, "leaflet-clickable"),
                    L.DomEvent.on(t, "click", this._onMouseClick, this),
                    L.DomEvent.on(t, "keypress", this._onKeyPress, this);
                    for (var i = 0; i < e.length; i++)
                        L.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                    L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this),
                    this.options.draggable && this.dragging.enable())
                }
            },
            _detectIE: function() {
                var e = t.navigator.userAgent
                  , i = e.indexOf("MSIE ");
                if (i > 0)
                    return parseInt(e.substring(i + 5, e.indexOf(".", i)), 10);
                if (e.indexOf("Trident/") > 0) {
                    var n = e.indexOf("rv:");
                    return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10)
                }
                var o = e.indexOf("Edge/");
                return o > 0 && parseInt(e.substring(o + 5, e.indexOf(".", o)), 10)
            }
        }),
        L.LatLngUtil = {
            cloneLatLngs: function(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++)
                    Array.isArray(t[i]) ? e.push(L.LatLngUtil.cloneLatLngs(t[i])) : e.push(this.cloneLatLng(t[i]));
                return e
            },
            cloneLatLng: function(t) {
                return L.latLng(t.lat, t.lng)
            }
        },
        function() {
            var t = {
                km: 2,
                ha: 2,
                m: 0,
                mi: 2,
                ac: 2,
                yd: 0,
                ft: 0,
                nm: 2
            };
            L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
                geodesicArea: function(t) {
                    var e, i, n = t.length, o = 0, s = Math.PI / 180;
                    if (n > 2) {
                        for (var r = 0; r < n; r++)
                            e = t[r],
                            o += ((i = t[(r + 1) % n]).lng - e.lng) * s * (2 + Math.sin(e.lat * s) + Math.sin(i.lat * s));
                        o = 6378137 * o * 6378137 / 2
                    }
                    return Math.abs(o)
                },
                formattedNumber: function(t, e) {
                    var i = parseFloat(t).toFixed(e)
                      , n = L.drawLocal.format && L.drawLocal.format.numeric
                      , o = n && n.delimiters
                      , s = o && o.thousands
                      , r = o && o.decimal;
                    if (s || r) {
                        var a = i.split(".");
                        i = s ? a[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + s) : a[0],
                        r = r || ".",
                        a.length > 1 && (i = i + r + a[1])
                    }
                    return i
                },
                readableArea: function(e, i, n) {
                    var o, s;
                    n = L.Util.extend({}, t, n);
                    return i ? (s = ["ha", "m"],
                    type = typeof i,
                    "string" === type ? s = [i] : "boolean" !== type && (s = i),
                    o = e >= 1e6 && -1 !== s.indexOf("km") ? L.GeometryUtil.formattedNumber(1e-6 * e, n.km) + " km²" : e >= 1e4 && -1 !== s.indexOf("ha") ? L.GeometryUtil.formattedNumber(1e-4 * e, n.ha) + " ha" : L.GeometryUtil.formattedNumber(e, n.m) + " m²") : o = (e /= .836127) >= 3097600 ? L.GeometryUtil.formattedNumber(e / 3097600, n.mi) + " mi²" : e >= 4840 ? L.GeometryUtil.formattedNumber(e / 4840, n.ac) + " acres" : L.GeometryUtil.formattedNumber(e, n.yd) + " yd²",
                    o
                },
                readableDistance: function(e, i, n, o, s) {
                    var r;
                    s = L.Util.extend({}, t, s);
                    switch (i ? "string" == typeof i ? i : "metric" : n ? "feet" : o ? "nauticalMile" : "yards") {
                    case "metric":
                        r = e > 1e3 ? L.GeometryUtil.formattedNumber(e / 1e3, s.km) + " km" : L.GeometryUtil.formattedNumber(e, s.m) + " m";
                        break;
                    case "feet":
                        e *= 3.28083,
                        r = L.GeometryUtil.formattedNumber(e, s.ft) + " ft";
                        break;
                    case "nauticalMile":
                        e *= .53996,
                        r = L.GeometryUtil.formattedNumber(e / 1e3, s.nm) + " nm";
                        break;
                    case "yards":
                    default:
                        r = (e *= 1.09361) > 1760 ? L.GeometryUtil.formattedNumber(e / 1760, s.mi) + " miles" : L.GeometryUtil.formattedNumber(e, s.yd) + " yd"
                    }
                    return r
                },
                isVersion07x: function() {
                    var t = L.version.split(".");
                    return 0 === parseInt(t[0], 10) && 7 === parseInt(t[1], 10)
                }
            })
        }(),
        L.Util.extend(L.LineUtil, {
            segmentsIntersect: function(t, e, i, n) {
                return this._checkCounterclockwise(t, i, n) !== this._checkCounterclockwise(e, i, n) && this._checkCounterclockwise(t, e, i) !== this._checkCounterclockwise(t, e, n)
            },
            _checkCounterclockwise: function(t, e, i) {
                return (i.y - t.y) * (e.x - t.x) > (e.y - t.y) * (i.x - t.x)
            }
        }),
        L.Polyline.include({
            intersects: function() {
                var t, e, i, n = this._getProjectedPoints(), o = n ? n.length : 0;
                if (this._tooFewPointsForIntersection())
                    return !1;
                for (t = o - 1; t >= 3; t--)
                    if (e = n[t - 1],
                    i = n[t],
                    this._lineSegmentsIntersectsRange(e, i, t - 2))
                        return !0;
                return !1
            },
            newLatLngIntersects: function(t, e) {
                return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(t), e)
            },
            newPointIntersects: function(t, e) {
                var i = this._getProjectedPoints()
                  , n = i ? i.length : 0
                  , o = i ? i[n - 1] : null
                  , s = n - 2;
                return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(o, t, s, e ? 1 : 0)
            },
            _tooFewPointsForIntersection: function(t) {
                var e = this._getProjectedPoints()
                  , i = e ? e.length : 0;
                return !e || (i += t || 0) <= 3
            },
            _lineSegmentsIntersectsRange: function(t, e, i, n) {
                var o, s, r = this._getProjectedPoints();
                n = n || 0;
                for (var a = i; a > n; a--)
                    if (o = r[a - 1],
                    s = r[a],
                    L.LineUtil.segmentsIntersect(t, e, o, s))
                        return !0;
                return !1
            },
            _getProjectedPoints: function() {
                if (!this._defaultShape)
                    return this._originalPoints;
                for (var t = [], e = this._defaultShape(), i = 0; i < e.length; i++)
                    t.push(this._map.latLngToLayerPoint(e[i]));
                return t
            }
        }),
        L.Polygon.include({
            intersects: function() {
                var t, e, i, n, o = this._getProjectedPoints();
                return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (t = o.length,
                e = o[0],
                i = o[t - 1],
                n = t - 2,
                this._lineSegmentsIntersectsRange(i, e, n, 1)))
            }
        }),
        L.Control.Draw = L.Control.extend({
            options: {
                position: "topleft",
                draw: {},
                edit: !1
            },
            initialize: function(t) {
                if (L.version < "0.7")
                    throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
                var e;
                L.Control.prototype.initialize.call(this, t),
                this._toolbars = {},
                L.DrawToolbar && this.options.draw && (e = new L.DrawToolbar(this.options.draw),
                this._toolbars[L.DrawToolbar.TYPE] = e,
                this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)),
                L.EditToolbar && this.options.edit && (e = new L.EditToolbar(this.options.edit),
                this._toolbars[L.EditToolbar.TYPE] = e,
                this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)),
                L.toolbar = this
            },
            onAdd: function(t) {
                var e, i = L.DomUtil.create("div", "leaflet-draw"), n = !1;
                for (var o in this._toolbars)
                    this._toolbars.hasOwnProperty(o) && (e = this._toolbars[o].addToolbar(t)) && (n || (L.DomUtil.hasClass(e, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(e.childNodes[0], "leaflet-draw-toolbar-top"),
                    n = !0),
                    i.appendChild(e));
                return i
            },
            onRemove: function() {
                for (var t in this._toolbars)
                    this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar()
            },
            setDrawingOptions: function(t) {
                for (var e in this._toolbars)
                    this._toolbars[e]instanceof L.DrawToolbar && this._toolbars[e].setOptions(t)
            },
            _toolbarEnabled: function(t) {
                var e = t.target;
                for (var i in this._toolbars)
                    this._toolbars[i] !== e && this._toolbars[i].disable()
            }
        }),
        L.Map.mergeOptions({
            drawControlTooltips: !0,
            drawControl: !1
        }),
        L.Map.addInitHook(function() {
            this.options.drawControl && (this.drawControl = new L.Control.Draw,
            this.addControl(this.drawControl))
        }),
        L.Toolbar = L.Class.extend({
            initialize: function(t) {
                L.setOptions(this, t),
                this._modes = {},
                this._actionButtons = [],
                this._activeMode = null;
                var e = L.version.split(".");
                1 === parseInt(e[0], 10) && parseInt(e[1], 10) >= 2 ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events)
            },
            enabled: function() {
                return null !== this._activeMode
            },
            disable: function() {
                this.enabled() && this._activeMode.handler.disable()
            },
            addToolbar: function(t) {
                var e, i = L.DomUtil.create("div", "leaflet-draw-section"), n = 0, o = this._toolbarClass || "", s = this.getModeHandlers(t);
                for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"),
                this._map = t,
                e = 0; e < s.length; e++)
                    s[e].enabled && this._initModeHandler(s[e].handler, this._toolbarContainer, n++, o, s[e].title);
                if (n)
                    return this._lastButtonIndex = --n,
                    this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"),
                    i.appendChild(this._toolbarContainer),
                    i.appendChild(this._actionsContainer),
                    i
            },
            removeToolbar: function() {
                for (var t in this._modes)
                    this._modes.hasOwnProperty(t) && (this._disposeButton(this._modes[t].button, this._modes[t].handler.enable, this._modes[t].handler),
                    this._modes[t].handler.disable(),
                    this._modes[t].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
                this._modes = {};
                for (var e = 0, i = this._actionButtons.length; e < i; e++)
                    this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback, this);
                this._actionButtons = [],
                this._actionsContainer = null
            },
            _initModeHandler: function(t, e, i, n, o) {
                var s = t.type;
                this._modes[s] = {},
                this._modes[s].handler = t,
                this._modes[s].button = this._createButton({
                    type: s,
                    title: o,
                    className: n + "-" + s,
                    container: e,
                    callback: this._modes[s].handler.enable,
                    context: this._modes[s].handler
                }),
                this._modes[s].buttonIndex = i,
                this._modes[s].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this)
            },
            _detectIOS: function() {
                return /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream
            },
            _createButton: function(t) {
                var e = L.DomUtil.create("a", t.className || "", t.container)
                  , i = L.DomUtil.create("span", "sr-only", t.container);
                e.href = "#",
                e.appendChild(i),
                t.title && (e.title = t.title,
                i.innerHTML = t.title),
                t.text && (e.innerHTML = t.text,
                i.innerHTML = t.text);
                var n = this._detectIOS() ? "touchstart" : "click";
                return L.DomEvent.on(e, "click", L.DomEvent.stopPropagation).on(e, "mousedown", L.DomEvent.stopPropagation).on(e, "dblclick", L.DomEvent.stopPropagation).on(e, "touchstart", L.DomEvent.stopPropagation).on(e, "click", L.DomEvent.preventDefault).on(e, n, t.callback, t.context),
                e
            },
            _disposeButton: function(t, e) {
                var i = this._detectIOS() ? "touchstart" : "click";
                L.DomEvent.off(t, "click", L.DomEvent.stopPropagation).off(t, "mousedown", L.DomEvent.stopPropagation).off(t, "dblclick", L.DomEvent.stopPropagation).off(t, "touchstart", L.DomEvent.stopPropagation).off(t, "click", L.DomEvent.preventDefault).off(t, i, e)
            },
            _handlerActivated: function(t) {
                this.disable(),
                this._activeMode = this._modes[t.handler],
                L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"),
                this._showActionsToolbar(),
                this.fire("enable")
            },
            _handlerDeactivated: function() {
                this._hideActionsToolbar(),
                L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"),
                this._activeMode = null,
                this.fire("disable")
            },
            _createActions: function(t) {
                var e, i, n, o, s = this._actionsContainer, r = this.getActions(t), a = r.length;
                for (i = 0,
                n = this._actionButtons.length; i < n; i++)
                    this._disposeButton(this._actionButtons[i].button, this._actionButtons[i].callback);
                for (this._actionButtons = []; s.firstChild; )
                    s.removeChild(s.firstChild);
                for (var l = 0; l < a; l++)
                    "enabled"in r[l] && !r[l].enabled || (e = L.DomUtil.create("li", "", s),
                    o = this._createButton({
                        title: r[l].title,
                        text: r[l].text,
                        container: e,
                        callback: r[l].callback,
                        context: r[l].context
                    }),
                    this._actionButtons.push({
                        button: o,
                        callback: r[l].callback
                    }))
            },
            _showActionsToolbar: function() {
                var t = this._activeMode.buttonIndex
                  , e = this._lastButtonIndex
                  , i = this._activeMode.button.offsetTop - 1;
                this._createActions(this._activeMode.handler),
                this._actionsContainer.style.top = i + "px",
                0 === t && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"),
                L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")),
                t === e && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"),
                L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")),
                this._actionsContainer.style.display = "block",
                this._map.fire(L.Draw.Event.TOOLBAROPENED)
            },
            _hideActionsToolbar: function() {
                this._actionsContainer.style.display = "none",
                L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"),
                L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"),
                L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"),
                L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"),
                this._map.fire(L.Draw.Event.TOOLBARCLOSED)
            }
        }),
        L.Draw = L.Draw || {},
        L.Draw.Tooltip = L.Class.extend({
            initialize: function(t) {
                this._map = t,
                this._popupPane = t._panes.popupPane,
                this._visible = !1,
                this._container = t.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null,
                this._singleLineLabel = !1,
                this._map.on("mouseout", this._onMouseOut, this)
            },
            dispose: function() {
                this._map.off("mouseout", this._onMouseOut, this),
                this._container && (this._popupPane.removeChild(this._container),
                this._container = null)
            },
            updateContent: function(t) {
                return this._container ? (t.subtext = t.subtext || "",
                0 !== t.subtext.length || this._singleLineLabel ? t.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"),
                this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"),
                this._singleLineLabel = !0),
                this._container.innerHTML = (t.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + t.subtext + "</span><br />" : "") + "<span>" + t.text + "</span>",
                t.text || t.subtext ? (this._visible = !0,
                this._container.style.visibility = "inherit") : (this._visible = !1,
                this._container.style.visibility = "hidden"),
                this) : this
            },
            updatePosition: function(t) {
                var e = this._map.latLngToLayerPoint(t)
                  , i = this._container;
                return this._container && (this._visible && (i.style.visibility = "inherit"),
                L.DomUtil.setPosition(i, e)),
                this
            },
            showAsError: function() {
                return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"),
                this
            },
            removeError: function() {
                return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"),
                this
            },
            _onMouseOut: function() {
                this._container && (this._container.style.visibility = "hidden")
            }
        }),
        L.DrawToolbar = L.Toolbar.extend({
            statics: {
                TYPE: "draw"
            },
            options: {
                polyline: {},
                polygon: {},
                rectangle: {},
                circle: {},
                marker: {},
                circlemarker: {}
            },
            initialize: function(t) {
                for (var e in this.options)
                    this.options.hasOwnProperty(e) && t[e] && (t[e] = L.extend({}, this.options[e], t[e]));
                this._toolbarClass = "leaflet-draw-draw",
                L.Toolbar.prototype.initialize.call(this, t)
            },
            getModeHandlers: function(t) {
                return [{
                    enabled: this.options.polyline,
                    handler: new L.Draw.Polyline(t,this.options.polyline),
                    title: L.drawLocal.draw.toolbar.buttons.polyline
                }, {
                    enabled: this.options.polygon,
                    handler: new L.Draw.Polygon(t,this.options.polygon),
                    title: L.drawLocal.draw.toolbar.buttons.polygon
                }, {
                    enabled: this.options.rectangle,
                    handler: new L.Draw.Rectangle(t,this.options.rectangle),
                    title: L.drawLocal.draw.toolbar.buttons.rectangle
                }, {
                    enabled: this.options.circle,
                    handler: new L.Draw.Circle(t,this.options.circle),
                    title: L.drawLocal.draw.toolbar.buttons.circle
                }, {
                    enabled: this.options.marker,
                    handler: new L.Draw.Marker(t,this.options.marker),
                    title: L.drawLocal.draw.toolbar.buttons.marker
                }, {
                    enabled: this.options.circlemarker,
                    handler: new L.Draw.CircleMarker(t,this.options.circlemarker),
                    title: L.drawLocal.draw.toolbar.buttons.circlemarker
                }]
            },
            getActions: function(t) {
                return [{
                    enabled: t.completeShape,
                    title: L.drawLocal.draw.toolbar.finish.title,
                    text: L.drawLocal.draw.toolbar.finish.text,
                    callback: t.completeShape,
                    context: t
                }, {
                    enabled: t.deleteLastVertex,
                    title: L.drawLocal.draw.toolbar.undo.title,
                    text: L.drawLocal.draw.toolbar.undo.text,
                    callback: t.deleteLastVertex,
                    context: t
                }, {
                    title: L.drawLocal.draw.toolbar.actions.title,
                    text: L.drawLocal.draw.toolbar.actions.text,
                    callback: this.disable,
                    context: this
                }]
            },
            setOptions: function(t) {
                for (var e in L.setOptions(this, t),
                this._modes)
                    this._modes.hasOwnProperty(e) && t.hasOwnProperty(e) && this._modes[e].handler.setOptions(t[e])
            }
        }),
        L.EditToolbar = L.Toolbar.extend({
            statics: {
                TYPE: "edit"
            },
            options: {
                edit: {
                    selectedPathOptions: {
                        dashArray: "10, 10",
                        fill: !0,
                        fillColor: "#fe57a1",
                        fillOpacity: .1,
                        maintainColor: !1
                    }
                },
                remove: {},
                poly: null,
                featureGroup: null
            },
            initialize: function(t) {
                t.edit && (void 0 === t.edit.selectedPathOptions && (t.edit.selectedPathOptions = this.options.edit.selectedPathOptions),
                t.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, t.edit.selectedPathOptions)),
                t.remove && (t.remove = L.extend({}, this.options.remove, t.remove)),
                t.poly && (t.poly = L.extend({}, this.options.poly, t.poly)),
                this._toolbarClass = "leaflet-draw-edit",
                L.Toolbar.prototype.initialize.call(this, t),
                this._selectedFeatureCount = 0
            },
            getModeHandlers: function(t) {
                var e = this.options.featureGroup;
                return [{
                    enabled: this.options.edit,
                    handler: new L.EditToolbar.Edit(t,{
                        featureGroup: e,
                        selectedPathOptions: this.options.edit.selectedPathOptions,
                        poly: this.options.poly
                    }),
                    title: L.drawLocal.edit.toolbar.buttons.edit
                }, {
                    enabled: this.options.remove,
                    handler: new L.EditToolbar.Delete(t,{
                        featureGroup: e
                    }),
                    title: L.drawLocal.edit.toolbar.buttons.remove
                }]
            },
            getActions: function(t) {
                var e = [{
                    title: L.drawLocal.edit.toolbar.actions.save.title,
                    text: L.drawLocal.edit.toolbar.actions.save.text,
                    callback: this._save,
                    context: this
                }, {
                    title: L.drawLocal.edit.toolbar.actions.cancel.title,
                    text: L.drawLocal.edit.toolbar.actions.cancel.text,
                    callback: this.disable,
                    context: this
                }];
                return t.removeAllLayers && e.push({
                    title: L.drawLocal.edit.toolbar.actions.clearAll.title,
                    text: L.drawLocal.edit.toolbar.actions.clearAll.text,
                    callback: this._clearAllLayers,
                    context: this
                }),
                e
            },
            addToolbar: function(t) {
                var e = L.Toolbar.prototype.addToolbar.call(this, t);
                return this._checkDisabled(),
                this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this),
                e
            },
            removeToolbar: function() {
                this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this),
                L.Toolbar.prototype.removeToolbar.call(this)
            },
            disable: function() {
                this.enabled() && (this._activeMode.handler.revertLayers(),
                L.Toolbar.prototype.disable.call(this))
            },
            _save: function() {
                this._activeMode.handler.save(),
                this._activeMode && this._activeMode.handler.disable()
            },
            _clearAllLayers: function() {
                this._activeMode.handler.removeAllLayers(),
                this._activeMode && this._activeMode.handler.disable()
            },
            _checkDisabled: function() {
                var t, e = 0 !== this.options.featureGroup.getLayers().length;
                this.options.edit && (t = this._modes[L.EditToolbar.Edit.TYPE].button,
                e ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"),
                t.setAttribute("title", e ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)),
                this.options.remove && (t = this._modes[L.EditToolbar.Delete.TYPE].button,
                e ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"),
                t.setAttribute("title", e ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled))
            }
        }),
        L.EditToolbar.Edit = L.Handler.extend({
            statics: {
                TYPE: "edit"
            },
            initialize: function(t, e) {
                if (L.Handler.prototype.initialize.call(this, t),
                L.setOptions(this, e),
                this._featureGroup = e.featureGroup,
                !(this._featureGroup instanceof L.FeatureGroup))
                    throw new Error("options.featureGroup must be a L.FeatureGroup");
                this._uneditedLayerProps = {},
                this.type = L.EditToolbar.Edit.TYPE;
                var i = L.version.split(".");
                1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events)
            },
            enable: function() {
                !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
                    handler: this.type
                }),
                this._map.fire(L.Draw.Event.EDITSTART, {
                    handler: this.type
                }),
                L.Handler.prototype.enable.call(this),
                this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this))
            },
            disable: function() {
                this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this),
                L.Handler.prototype.disable.call(this),
                this._map.fire(L.Draw.Event.EDITSTOP, {
                    handler: this.type
                }),
                this.fire("disabled", {
                    handler: this.type
                }))
            },
            addHooks: function() {
                var t = this._map;
                t && (t.getContainer().focus(),
                this._featureGroup.eachLayer(this._enableLayerEdit, this),
                this._tooltip = new L.Draw.Tooltip(this._map),
                this._tooltip.updateContent({
                    text: L.drawLocal.edit.handlers.edit.tooltip.text,
                    subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                }),
                t._editTooltip = this._tooltip,
                this._updateTooltip(),
                this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
            },
            removeHooks: function() {
                this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this),
                this._uneditedLayerProps = {},
                this._tooltip.dispose(),
                this._tooltip = null,
                this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
            },
            revertLayers: function() {
                this._featureGroup.eachLayer(function(t) {
                    this._revertLayer(t)
                }, this)
            },
            save: function() {
                var t = new L.LayerGroup;
                this._featureGroup.eachLayer(function(e) {
                    e.edited && (t.addLayer(e),
                    e.edited = !1)
                }),
                this._map.fire(L.Draw.Event.EDITED, {
                    layers: t
                })
            },
            _backupLayer: function(t) {
                var e = L.Util.stamp(t);
                this._uneditedLayerProps[e] || (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? this._uneditedLayerProps[e] = {
                    latlngs: L.LatLngUtil.cloneLatLngs(t.getLatLngs())
                } : t instanceof L.Circle ? this._uneditedLayerProps[e] = {
                    latlng: L.LatLngUtil.cloneLatLng(t.getLatLng()),
                    radius: t.getRadius()
                } : (t instanceof L.Marker || t instanceof L.CircleMarker) && (this._uneditedLayerProps[e] = {
                    latlng: L.LatLngUtil.cloneLatLng(t.getLatLng())
                }))
            },
            _getTooltipText: function() {
                return {
                    text: L.drawLocal.edit.handlers.edit.tooltip.text,
                    subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                }
            },
            _updateTooltip: function() {
                this._tooltip.updateContent(this._getTooltipText())
            },
            _revertLayer: function(t) {
                var e = L.Util.stamp(t);
                t.edited = !1,
                this._uneditedLayerProps.hasOwnProperty(e) && (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? t.setLatLngs(this._uneditedLayerProps[e].latlngs) : t instanceof L.Circle ? (t.setLatLng(this._uneditedLayerProps[e].latlng),
                t.setRadius(this._uneditedLayerProps[e].radius)) : (t instanceof L.Marker || t instanceof L.CircleMarker) && t.setLatLng(this._uneditedLayerProps[e].latlng),
                t.fire("revert-edited", {
                    layer: t
                }))
            },
            _enableLayerEdit: function(t) {
                var e, i, n = t.layer || t.target || t;
                this._backupLayer(n),
                this.options.poly && (i = L.Util.extend({}, this.options.poly),
                n.options.poly = i),
                this.options.selectedPathOptions && ((e = L.Util.extend({}, this.options.selectedPathOptions)).maintainColor && (e.color = n.options.color,
                e.fillColor = n.options.fillColor),
                n.options.original = L.extend({}, n.options),
                n.options.editing = e),
                n instanceof L.Marker ? (n.editing && n.editing.enable(),
                n.dragging.enable(),
                n.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : n.editing.enable()
            },
            _disableLayerEdit: function(t) {
                var e = t.layer || t.target || t;
                e.edited = !1,
                e.editing && e.editing.disable(),
                delete e.options.editing,
                delete e.options.original,
                this._selectedPathOptions && (e instanceof L.Marker ? this._toggleMarkerHighlight(e) : (e.setStyle(e.options.previousOptions),
                delete e.options.previousOptions)),
                e instanceof L.Marker ? (e.dragging.disable(),
                e.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : e.editing.disable()
            },
            _onMouseMove: function(t) {
                this._tooltip.updatePosition(t.latlng)
            },
            _onMarkerDragEnd: function(t) {
                var e = t.target;
                e.edited = !0,
                this._map.fire(L.Draw.Event.EDITMOVE, {
                    layer: e
                })
            },
            _onTouchMove: function(t) {
                var e = t.originalEvent.changedTouches[0]
                  , i = this._map.mouseEventToLayerPoint(e)
                  , n = this._map.layerPointToLatLng(i);
                t.target.setLatLng(n)
            },
            _hasAvailableLayers: function() {
                return 0 !== this._featureGroup.getLayers().length
            }
        }),
        L.EditToolbar.Delete = L.Handler.extend({
            statics: {
                TYPE: "remove"
            },
            initialize: function(t, e) {
                if (L.Handler.prototype.initialize.call(this, t),
                L.Util.setOptions(this, e),
                this._deletableLayers = this.options.featureGroup,
                !(this._deletableLayers instanceof L.FeatureGroup))
                    throw new Error("options.featureGroup must be a L.FeatureGroup");
                this.type = L.EditToolbar.Delete.TYPE;
                var i = L.version.split(".");
                1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events)
            },
            enable: function() {
                !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
                    handler: this.type
                }),
                this._map.fire(L.Draw.Event.DELETESTART, {
                    handler: this.type
                }),
                L.Handler.prototype.enable.call(this),
                this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this))
            },
            disable: function() {
                this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this),
                L.Handler.prototype.disable.call(this),
                this._map.fire(L.Draw.Event.DELETESTOP, {
                    handler: this.type
                }),
                this.fire("disabled", {
                    handler: this.type
                }))
            },
            addHooks: function() {
                var t = this._map;
                t && (t.getContainer().focus(),
                this._deletableLayers.eachLayer(this._enableLayerDelete, this),
                this._deletedLayers = new L.LayerGroup,
                this._tooltip = new L.Draw.Tooltip(this._map),
                this._tooltip.updateContent({
                    text: L.drawLocal.edit.handlers.remove.tooltip.text
                }),
                this._map.on("mousemove", this._onMouseMove, this))
            },
            removeHooks: function() {
                this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this),
                this._deletedLayers = null,
                this._tooltip.dispose(),
                this._tooltip = null,
                this._map.off("mousemove", this._onMouseMove, this))
            },
            revertLayers: function() {
                this._deletedLayers.eachLayer(function(t) {
                    this._deletableLayers.addLayer(t),
                    t.fire("revert-deleted", {
                        layer: t
                    })
                }, this)
            },
            save: function() {
                this._map.fire(L.Draw.Event.DELETED, {
                    layers: this._deletedLayers
                })
            },
            removeAllLayers: function() {
                this._deletableLayers.eachLayer(function(t) {
                    this._removeLayer({
                        layer: t
                    })
                }, this),
                this.save()
            },
            _enableLayerDelete: function(t) {
                (t.layer || t.target || t).on("click", this._removeLayer, this)
            },
            _disableLayerDelete: function(t) {
                var e = t.layer || t.target || t;
                e.off("click", this._removeLayer, this),
                this._deletedLayers.removeLayer(e)
            },
            _removeLayer: function(t) {
                var e = t.layer || t.target || t;
                this._deletableLayers.removeLayer(e),
                this._deletedLayers.addLayer(e),
                e.fire("deleted")
            },
            _onMouseMove: function(t) {
                this._tooltip.updatePosition(t.latlng)
            },
            _hasAvailableLayers: function() {
                return 0 !== this._deletableLayers.getLayers().length
            }
        })
    }(window, document)
}
, function(t, e, i) {
    "use strict";
    function n(t, e, i) {
        t.forEach(function(t, n) {
            var o = document.getElementById("polygon-info-item").content.cloneNode(!0)
              , s = o.querySelector(".card-content__name")
              , r = o.querySelector(".card-content__area")
              , a = o.querySelector(".map-container")
              , l = document.createElement("div");
            a.appendChild(l),
            l.id = "map".concat(n),
            l.classList.add("card-map", "responsive-img"),
            l.style.width = 50,
            l.style.height = 50;
            var h = document.createElement("canvas");
            l.appendChild(h),
            h.name = l.id,
            h.width = 50,
            h.height = 50;
            var u = h.getContext("2d")
              , c = t.pixels.map(function(t) {
                return {
                    x: t[0],
                    y: t[1]
                }
            })
              , d = new Path2D;
            d.strokeWidth = 1,
            d.moveTo(c[0].x, c[0].y);
            for (var p = 1; p < c.length; p++) {
                var f = c[p];
                d.lineTo(f.x, f.y)
            }
            d.closePath(),
            u.strokeStyle = "rgba(3, 155, 229, 1)",
            u.fillStyle = "rgba(3, 155, 229, 0.1)",
            u.lineWidth = 2,
            u.fill(d, "evenodd"),
            u.stroke(d, "evenodd"),
            s.textContent = s && t.name,
            r.textContent = r && t.area + " ha";
            var m = document.createElement("div");
            m.id = "polygon:".concat(n),
            m.classList.add("collection-item"),
            m.onclick = function() {
                i(this.id.split(":")[1])
            }
            ,
            m.appendChild(o),
            e.appendChild(m)
        })
    }
    i.d(e, "a", function() {
        return n
    })
}
, , , function(t, e, i) {}
, , , , , , , , , , , , , function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i(0)
      , o = i.n(n)
      , s = (i(8),
    i(5),
    i(7),
    i(13),
    i(4))
      , r = i(3)
      , a = {};
    function l(t) {
        return Math.round(1e3 * t) / 1e3
    }
    function h(t, e) {
        var i = document.querySelector(".statistic__title");
        for (var n in i.textContent = "Statistics: " + (Object(r.a)(e) || "No data"),
        null == t && (t = {
            ndvi: {},
            evi: {}
        }),
        t)
            document.querySelector(".".concat(n, "-statistic__max")).textContent = void 0 != t[n].p75 ? l(t[n].p75) : "-",
            document.querySelector(".".concat(n, "-statistic__min")).textContent = void 0 != t[n].p25 ? l(t[n].p25) : "-",
            document.querySelector(".".concat(n, "-statistic__mean")).textContent = void 0 != t[n].mean ? l(t[n].mean) : "-",
            document.querySelector(".".concat(n, "-statistic__num")).textContent = void 0 != t[n].num ? l(t[n].num) : "-",
            document.querySelector(".".concat(n, "-statistic__deviation")).textContent = void 0 != t[n].std ? l(t[n].std) : "-"
    }
    function u() {
        a.chart.hideLoading()
    }
    function c(t) {
        t = t.sort(function(t, e) {
            return t.dt - e.dt
        });
        var e = []
          , i = []
          , n = []
          , o = !0
          , s = !1
          , r = void 0;
        try {
            for (var l, h = t[Symbol.iterator](); !(o = (l = h.next()).done); o = !0) {
                var u = l.value;
                e.push([u.dt, u.p25]),
                i.push([u.dt, u.p75]),
                n.push([u.dt, u.mean])
            }
        } catch (t) {
            s = !0,
            r = t
        } finally {
            try {
                o || null == h.return || h.return()
            } finally {
                if (s)
                    throw r
            }
        }
        a.chart.series[0].setData(i, !0, {}, !1),
        a.chart.series[1].setData(e, !0, {}, !1),
        a.chart.series[2].setData(n, !0, {}, !1)
    }
    var d = i(10)
      , p = {
        l8t: "Landsat-8 (30m/px)",
        l8: "Landsat-8 (30m/px)",
        s2: "Sentinel-2 (10m/px)"
    };
    var f = function(t, e, i) {
        var n = document.getElementById("satellite-imagery-item").content;
        return t.forEach(function(t, o) {
            var s = n.cloneNode(!0)
              , a = s.querySelector(".card-content__date")
              , l = s.querySelector(".card-content__resolution")
              , h = s.querySelector(".card-content__clouds")
              , u = s.querySelector(".card-content__coverage");
            a.textContent = a && Object(r.a)(t.dt),
            l.textContent = l && p[t.src],
            h.textContent = h && Math.round(t.cl) + "%",
            u.textContent = u && Math.round(t.dc) + "%";
            var c = document.createElement("div");
            c.id = "image:".concat(o),
            c.classList.add("collection-item"),
            c.onclick = function() {
                i(this.id.split(":")[1])
            }
            ,
            c.appendChild(s),
            e.appendChild(c)
        }),
        e
    }
      , m = i(2);
    function _() {
        Object(m.i)(["area", "coordinates", "bounds", "pixels"], function(t, e) {
            t ? (w({
                title: "Failed to load polygons data",
                message: "Please, try to retry or contact support."
            }, 2),
            L.modal.open()) : e && e.length ? function(t) {
                L.polygons = t;
                var e = document.querySelector(".polygons-collection");
                if (e) {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    var i = document.createDocumentFragment();
                    Object(d.a)(t, i, v),
                    e.appendChild(i),
                    v(L.activePolygon.index, !0)
                }
            }(e) : window.location.replace("new-polygon")
        })
    }
    function v(t, e) {
        if (t = parseInt(t),
        L.activePolygon.index != t || e) {
            var i = document.getElementById("polygon:".concat(L.activePolygon.index));
            i && i.classList.remove("active");
            var n = document.getElementById("polygon:".concat(t));
            n && n.classList.add("active"),
            L.activePolygon.index = t;
            var o = L.polygons[t];
            Object(s.g)(o.coordinates),
            Object(m.g)(o.id, function(t, e) {
                t ? (w({
                    title: "Failed to load scenes data",
                    message: "Please, try to retry or contact support."
                }, 2),
                L.modal.open()) : 0 == e.length ? (w({
                    title: "There are no scenes for your polygon",
                    message: "Please, contact our support."
                }, 1),
                L.modal.open(),
                y(e)) : y(e)
            }),
            g()
        }
    }
    function g() {
        var t = Date.UTC(L.dateFrom.date.getFullYear(), L.dateFrom.date.getMonth(), L.dateFrom.date.getDate())
          , e = Date.UTC(L.dateTo.date.getFullYear(), L.dateTo.date.getMonth(), L.dateTo.date.getDate());
        !function() {
            a.chart.showLoading()
        }(),
        Object(m.h)(t.valueOf() / 1e3, e.valueOf() / 1e3, L.polygons[L.activePolygon.index].id, ["mean", "p25", "p75"], function(t, e) {
            t ? (w({
                title: "Error while loading NDVI history",
                message: "Please, try to retry or contact support."
            }, 2),
            L.modal.open(),
            c([]),
            u()) : (c(e),
            u())
        })
    }
    function y(t) {
        L.images = t;
        var e = document.querySelector(".imagery-collection");
        if (e) {
            for (; e.firstChild; )
                e.removeChild(e.firstChild);
            if (t.length) {
                var i = document.createDocumentFragment();
                f(t, i, b),
                e.appendChild(i),
                b(0, !0)
            } else
                b(null, !0)
        }
    }
    function b(t, e) {
        if (null != t) {
            t = parseInt(t);
            var i = L.images[t]
              , n = L.polygons[L.activePolygon.index];
            if (L.activeImage.index != t || e) {
                var o = document.getElementById("image:".concat(L.activeImage.index));
                o && o.classList.remove("active");
                var r = document.getElementById("image:".concat(t));
                r && r.classList.add("active"),
                L.activeImage.index = t,
                Object(m.f)(i.src, i.dt, n.id, function(t, e) {
                    t ? (w({
                        title: "Error while loading NDVI/EVI data",
                        message: "Please, try to retry or contact support."
                    }, 2),
                    L.modal.open(),
                    h(null, i.dt)) : h(e, i.dt)
                })
            }
            Object(s.d)(L.op, i.src, i.dt, n.id, n.bounds)
        } else
            L.activeImage.index = null,
            h(null, null),
            Object(s.a)()
    }
    function w(t, e) {
        o()(L.modal.el).html('\n\t\t<div class="modal-content">\n\t\t    <h4 class="red-text">'.concat(t.title, "</h4>\n\t\t    <p>").concat(t.message, '</p>\n    \t</div>\n      \t<div class="modal-footer">\n \t\t\t').concat(e >= 2 ? '<a id="retry-button" class="waves-effect waves-green btn-flat">Retry</a>' : "", "\n \t\t\t").concat(e >= 1 ? '<a target="blank" href="mailto:info@openweathermap.org" class="modal-close waves-effect waves-green btn-flat">Support</a>' : "", "\n\t        ").concat(e >= 0 ? '<a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>' : "", "\n      \t</div>\n\t")),
        e >= 2 && o()("#retry-button").click(function() {
            L.modal.close(),
            _()
        })
    }
    var L = {
        polygons: [],
        activePolygon: {
            index: 0
        },
        images: [],
        activeImage: {
            index: 0
        }
    }
      , x = document.querySelectorAll(".datepicker")
      , k = new Date;
    L.dateFrom = M.Datepicker.init(x[0], {
        autoClose: !0,
        setDefaultDate: !0,
        defaultDate: new Date(k.getUTCFullYear(),k.getUTCMonth() - 6,k.getUTCDate()),
        onSelect: g
    }),
    L.dateTo = M.Datepicker.init(x[1], {
        autoClose: !0,
        setDefaultDate: !0,
        defaultDate: new Date(k.getUTCFullYear(),k.getUTCMonth(),k.getUTCDate()),
        onSelect: g
    });
    var C = document.querySelectorAll("select")[0];
    L.selectProduct = M.FormSelect.init(C, {});
    var E = o()(L.selectProduct.el);
    L.op = E.val(),
    o()(L.selectProduct.el).on("change", function() {
        var t = o()(this).val();
        L.op != t && (L.op = t,
        b(L.activeImage.index))
    });
    var T = document.querySelectorAll(".tabs");
    M.Tabs.init(T, {});
    M.Modal.init(o()("#response-modal"), {
        onCloseEnd: function() {
            o()(this.el).html("")
        }
    }),
    L.modal = M.Modal.getInstance(o()("#response-modal")),
    Object(s.f)(),
    Object(s.e)(s.h),
    function() {
        a.chart = new Highcharts.Chart({
            chart: {
                renderTo: "graphic-container"
            },
            loading: {
                hideDuration: 100,
                showDuration: 100
            },
            lang: {
                noData: "There are no scenes for selected time period"
            },
            title: {
                text: ""
            },
            yAxis: {
                title: {
                    text: ""
                }
            },
            xAxis: {
                type: "datetime",
                labels: {
                    align: "left"
                }
            },
            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "middle"
            },
            tooltip: {
                crosshairs: !0,
                shared: !0,
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> <br/>',
                valueDecimals: 2,
                split: !0
            },
            series: [{
                name: "max"
            }, {
                name: "min"
            }, {
                name: "mean"
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: "horizontal",
                            align: "center",
                            verticalAlign: "bottom"
                        }
                    }
                }]
            }
        })
    }(),
    Object(m.d)(function(t, e) {
        e && e.rate && Object(r.b)(parseInt("10111", 2), e.rate) || window.location.replace("no_access"),
        _()
    })
}
]);
