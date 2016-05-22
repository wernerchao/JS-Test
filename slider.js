(function(h, f, c, j, d, l, k) { /*! Jssor */
    new(function() {});
    var e = {
        Fe: function(a) {
            return -c.cos(a * c.PI) / 2 + .5
        },
        Ge: function(a) {
            return a
        },
        He: function(a) {
            return -a * (a - 2)
        }
    };
    var b = new function() {
        var g = this,
            Ab = /\S+/g,
            F = 1,
            yb = 2,
            fb = 3,
            eb = 4,
            jb = 5,
            G, r = 0,
            i = 0,
            s = 0,
            X = 0,
            z = 0,
            I = navigator,
            ob = I.appName,
            o = I.userAgent,
            p = parseFloat;

        function Ib() {
            if (!G) {
                G = {
                    de: "ontouchstart" in h || "createTouch" in f
                };
                var a;
                if (I.pointerEnabled || (a = I.msPointerEnabled)) G.bd = a ? "msTouchAction" : "touchAction"
            }
            return G
        }

        function v(j) {
            if (!r) {
                r = -1;
                if (ob == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    r = F;
                    s = p(o.substring(e + 5, o.indexOf(";", e))); /*@cc_on X=@_jscript_version@*/ ;
                    i = f.documentMode || s
                } else if (ob == "Netscape" && !!h.addEventListener) {
                    var d = o.indexOf("Firefox"),
                        b = o.indexOf("Safari"),
                        g = o.indexOf("Chrome"),
                        c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        r = yb;
                        i = p(o.substring(d + 8))
                    } else if (b >= 0) {
                        var k = o.substring(0, b).lastIndexOf("/");
                        r = g >= 0 ? eb : fb;
                        i = p(o.substring(k + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            r = F;
                            i = s = p(a[1])
                        }
                    }
                    if (c >= 0) z = p(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        r = jb;
                        i = p(a[2])
                    }
                }
            }
            return j == r
        }

        function q() {
            return v(F)
        }

        function Q() {
            return q() && (i < 6 || f.compatMode == "BackCompat")
        }

        function db() {
            return v(fb)
        }

        function ib() {
            return v(jb)
        }

        function vb() {
            return db() && z > 534 && z < 535
        }

        function J() {
            v();
            return z > 537 || i > 42 || r == F && i >= 11
        }

        function O() {
            return q() && i < 9
        }

        function wb(a) {
            var b, c;
            return function(f) {
                if (!b) {
                    b = d;
                    var e = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, d) {
                        var b = a;
                        if (d) b = g + e;
                        if (f.style[b] != k) return c = b
                    })
                }
                return c
            }
        }

        function ub(b) {
            var a;
            return function(c) {
                a = a || wb(b)(c) || b;
                return a
            }
        }
        var K = ub("transform");

        function nb(a) {
            return {}.toString.call(a)
        }
        var kb = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
            kb["[object " + a + "]"] = a.toLowerCase()
        });

        function n(b, d) {
            var a, c;
            if (nb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)
                    if (c = d(b[a], a, b)) return c
            } else
                for (a in b)
                    if (c = d(b[a], a, b)) return c
        }

        function C(a) {
            return a == j ? String(a) : kb[nb(a)] || "object"
        }

        function lb(a) {
            for (var b in a) return d
        }

        function A(a) {
            try {
                return C(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function u(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function rb(b, a) {
            setTimeout(b, a || 0)
        }

        function H(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }

        function tb(b, a) {
            if (i < 9) b.style.filter = a
        }
        g.Be = Ib;
        g.cd = q;
        g.fe = db;
        g.Ae = J;
        g.md = O;
        wb("transform");
        g.jd = function() {
            return i
        };
        g.ld = rb;

        function Y(a) {
            a.constructor === Y.caller && a.Sc && a.Sc.apply(a, Y.caller.arguments)
        }
        g.Sc = Y;
        g.X = function(a) {
            if (g.Te(a)) a = f.getElementById(a);
            return a
        };

        function t(a) {
            return a || h.event
        }
        g.Hc = t;
        g.Ub = function(b) {
            b = t(b);
            var a = b.target || b.srcElement || f;
            if (a.nodeType == 3) a = g.wc(a);
            return a
        };
        g.Rc = function(a) {
            a = t(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };

        function D(c, d, a) {
            if (a !== k) c.style[d] = a == k ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && h.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, j);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function ab(b, c, a, d) {
            if (a !== k) {
                if (a == j) a = "";
                else d && (a += "px");
                D(b, c, a)
            } else return p(D(b, c))
        }

        function m(c, a) {
            var d = a ? ab : D,
                b;
            if (a & 4) b = ub(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Db(b) {
            if (q() && s < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? p(a[1]) / 100 : 1
            } else return p(b.style.opacity || "1")
        }

        function Fb(b, a, f) {
            if (q() && s < 9) {
                var h = b.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = c.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = H(h, [i], d);
                tb(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }
        var L = {
            Y: ["rotate"],
            G: ["rotateX"],
            H: ["rotateY"],
            Bb: ["skewX"],
            Cb: ["skewY"]
        };
        if (!J()) L = B(L, {
            m: ["scaleX", 2],
            n: ["scaleY", 2],
            I: ["translateZ", 1]
        });

        function M(d, a) {
            var c = "";
            if (a) {
                if (q() && i && i < 10) {
                    delete a.G;
                    delete a.H;
                    delete a.I
                }
                b.e(a, function(d, b) {
                    var a = L[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (N[b] != d) c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (J()) {
                    if (a.ab || a.eb || a.I) c += " translate3d(" + (a.ab || 0) + "px," + (a.eb || 0) + "px," + (a.I || 0) + "px)";
                    if (a.m == k) a.m = 1;
                    if (a.n == k) a.n = 1;
                    if (a.m != 1 || a.n != 1) c += " scale3d(" + a.m + ", " + a.n + ", 1)"
                }
            }
            d.style[K(d)] = c
        }
        g.zc = m("transformOrigin", 4);
        g.Pd = m("backfaceVisibility", 4);
        g.Ue = m("transformStyle", 4);
        g.Se = m("perspective", 6);
        g.Re = m("perspectiveOrigin", 4);
        g.Pe = function(a, b) {
            if (q() && s < 9 || s < 10 && Q()) a.style.zoom = b == 1 ? "" : b;
            else {
                var c = K(a),
                    f = "scale(" + b + ")",
                    e = a.style[c],
                    g = new RegExp(/[\s]*scale\(.*?\)/g),
                    d = H(e, [g], f);
                a.style[c] = d
            }
        };
        g.Db = function(b, a) {
            return function(c) {
                c = t(c);
                var e = c.type,
                    d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !g.Ne(a, d)) && b(c)
            }
        };
        g.a = function(a, d, b, c) {
            a = g.X(a);
            if (a.addEventListener) {
                d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
                a.addEventListener(d, b, c)
            } else if (a.attachEvent) {
                a.attachEvent("on" + d, b);
                c && a.setCapture && a.setCapture()
            }
        };
        g.C = function(a, c, d, b) {
            a = g.X(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        g.Fb = function(a) {
            a = t(a);
            a.preventDefault && a.preventDefault();
            a.cancel = d;
            a.returnValue = l
        };
        g.Me = function(a) {
            a = t(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = d
        };
        g.D = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        g.Je = function(a, b) {
            if (b == k) return a.textContent || a.innerText;
            var c = f.createTextNode(b);
            g.cc(a);
            a.appendChild(c)
        };
        g.Gb = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function mb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (U(a, b) == c) return a;
                    if (!e) {
                        var d = mb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        g.o = mb;

        function S(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    U(a, b) == d && c.push(a);
                    if (!f) {
                        var e = S(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function gb(a, c, d) {
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = gb(a, c, d);
                        if (b) return b
                    }
                }
        }
        g.De = gb;
        g.we = function(b, a) {
            return b.getElementsByTagName(a)
        };

        function B() {
            var e = arguments,
                d, c, b, a, g = 1 & e[0],
                f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) {
                        a = c[b];
                        if (a !== k) {
                            a = c[b];
                            var h = d[b];
                            d[b] = g && (A(h) || A(a)) ? B(g, {}, h, a) : a
                        }
                    }
                return d
        }
        g.O = B;

        function Z(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (A(a) && A(b)) {
                        a = Z(a, b);
                        e = !lb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        g.Bc = function(a) {
            return C(a) == "function"
        };
        g.Te = function(a) {
            return C(a) == "string"
        };
        g.ud = function(a) {
            return !isNaN(p(a)) && isFinite(a)
        };
        g.e = n;

        function R(a) {
            return f.createElement(a)
        }
        g.bb = function() {
            return R("DIV")
        };
        g.td = function() {
            return R("SPAN")
        };
        g.Ec = function() {};

        function V(b, c, a) {
            if (a == k) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function U(a, b) {
            return V(a, b) || V(a, "data-" + b)
        }
        g.L = V;
        g.i = U;

        function x(b, a) {
            if (a == k) return b.className;
            b.className = a
        }
        g.Gc = x;

        function qb(b) {
            var a = {};
            n(b, function(b) {
                a[b] = b
            });
            return a
        }

        function sb(b, a) {
            return b.match(a || Ab)
        }

        function P(b, a) {
            return qb(sb(b || "", a))
        }
        g.od = sb;

        function bb(b, c) {
            var a = "";
            n(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function E(a, c, b) {
            x(a, bb(" ", B(Z(P(x(a)), P(c)), P(b))))
        }
        g.wc = function(a) {
            return a.parentNode
        };
        g.K = function(a) {
            g.J(a, "none")
        };
        g.cb = function(a, b) {
            g.J(a, b ? "none" : "")
        };
        g.Cd = function(b, a) {
            b.removeAttribute(a)
        };
        g.Ed = function() {
            return q() && i < 10
        };
        g.Od = function(d, a) {
            if (a) d.style.clip = "rect(" + c.round(a.l || a.s || 0) + "px " + c.round(a.v) + "px " + c.round(a.z) + "px " + c.round(a.k || a.q || 0) + "px)";
            else if (a !== k) {
                var g = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = H(g, f, "");
                b.Ab(d, e)
            }
        };
        g.M = function() {
            return +new Date
        };
        g.B = function(b, a) {
            b.appendChild(a)
        };
        g.yb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        g.pb = function(b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        g.Kd = function(a, b) {
            n(a, function(a) {
                g.pb(a, b)
            })
        };
        g.cc = function(a) {
            g.Kd(g.Gb(a, d), a)
        };
        g.Id = function(a, b) {
            var c = g.wc(a);
            b & 1 && g.u(a, (g.g(c) - g.g(a)) / 2);
            b & 2 && g.p(a, (g.j(c) - g.j(a)) / 2)
        };
        g.Bd = function(b, a) {
            return parseInt(b, a || 10)
        };
        g.yd = p;
        g.Ne = function(b, a) {
            var c = f.body;
            while (a && b !== a && c !== a) try {
                a = a.parentNode
            } catch (d) {
                return l
            }
            return b === a
        };

        function W(d, c, b) {
            var a = d.cloneNode(!c);
            !b && g.Cd(a, "id");
            return a
        }
        g.gb = W;
        g.qb = function(e, f) {
            var a = new Image;

            function b(e, d) {
                g.C(a, "load", b);
                g.C(a, "abort", c);
                g.C(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, d)
            }
            if (ib() && i < 11.6 || !e) b(!e);
            else {
                g.a(a, "load", b);
                g.a(a, "abort", c);
                g.a(a, "error", c);
                a.src = e
            }
        };
        g.qd = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            n(d, function(a) {
                g.qb(a.src, b)
            });
            b()
        };
        g.Tc = function(a, g, i, h) {
            if (h) a = W(a);
            var c = S(a, g);
            if (!c.length) c = b.we(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = W(i);
                x(e, x(d));
                b.Ab(e, d.style.cssText);
                b.yb(e, d);
                b.pb(d)
            }
            return a
        };

        function Gb(a) {
            var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                e = [],
                q, j = 0,
                h = 0,
                d = 0;

            function i() {
                E(a, q, e[d || j || h & 2 || h]);
                b.E(a, "pointer-events", d ? "none" : "")
            }

            function c() {
                j = 0;
                i();
                g.C(f, "mouseup", c);
                g.C(f, "touchend", c);
                g.C(f, "touchcancel", c)
            }

            function o(a) {
                if (d) g.Fb(a);
                else {
                    j = 4;
                    i();
                    g.a(f, "mouseup", c);
                    g.a(f, "touchend", c);
                    g.a(f, "touchcancel", c)
                }
            }
            l.Wc = function(a) {
                if (a === k) return h;
                h = a & 2 || a & 1;
                i()
            };
            l.Xc = function(a) {
                if (a === k) return !d;
                d = a ? 0 : 3;
                i()
            };
            l.T = a = g.X(a);
            var m = b.od(x(a));
            if (m) p = m.shift();
            n(r, function(a) {
                e.push(p + a)
            });
            q = bb(" ", e);
            e.unshift("");
            g.a(a, "mousedown", o);
            g.a(a, "touchstart", o)
        }
        g.ad = function(a) {
            return new Gb(a)
        };
        g.E = D;
        g.rb = m("overflow");
        g.p = m("top", 2);
        g.u = m("left", 2);
        g.g = m("width", 2);
        g.j = m("height", 2);
        g.Dd = m("marginLeft", 2);
        g.pd = m("marginTop", 2);
        g.r = m("position");
        g.J = m("display");
        g.A = m("zIndex", 1);
        g.lc = function(b, a, c) {
            if (a != k) Fb(b, a, c);
            else return Db(b)
        };
        g.Ab = function(a, b) {
            if (b != k) a.style.cssText = b;
            else return a.style.cssText
        };
        var T = {
            kb: g.lc,
            l: g.p,
            k: g.u,
            ub: g.g,
            Hb: g.j,
            lb: g.r,
            hf: g.J,
            nb: g.A
        };

        function w(f, l) {
            var e = O(),
                b = J(),
                d = vb(),
                h = K(f);

            function i(b, d, a) {
                var e = b.S(u(-d / 2, -a / 2)),
                    f = b.S(u(d / 2, -a / 2)),
                    g = b.S(u(d / 2, a / 2)),
                    h = b.S(u(-d / 2, a / 2));
                b.S(u(300, 300));
                return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(d, a) {
                a = a || {};
                var f = a.I || 0,
                    l = (a.G || 0) % 360,
                    m = (a.H || 0) % 360,
                    o = (a.Y || 0) % 360,
                    p = a.gf;
                if (e) {
                    f = 0;
                    l = 0;
                    m = 0;
                    p = 0
                }
                var c = new Cb(a.ab, a.eb, f);
                c.G(l);
                c.H(m);
                c.Fd(o);
                c.xd(a.Bb, a.Cb);
                c.bc(a.m, a.n, p);
                if (b) {
                    c.ob(a.q, a.s);
                    d.style[h] = c.zd()
                } else if (!X || X < 9) {
                    var j = "";
                    if (o || a.m != k && a.m != 1 || a.n != k && a.n != 1) {
                        var n = i(c, a.V, a.Z);
                        g.pd(d, n.y);
                        g.Dd(d, n.x);
                        j = c.Md()
                    }
                    var r = d.style.filter,
                        s = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                        q = H(r, [s], j);
                    tb(d, q)
                }
            }
            w = function(e, c) {
                c = c || {};
                var h = c.q,
                    i = c.s,
                    f;
                n(T, function(a, b) {
                    f = c[b];
                    f !== k && a(e, f)
                });
                g.Od(e, c.c);
                if (!b) {
                    h != k && g.u(e, (c.Dc || 0) + h);
                    i != k && g.p(e, (c.Pc || 0) + i)
                }
                if (c.Jd)
                    if (d) rb(g.D(j, M, e, c));
                    else a(e, c)
            };
            g.Ib = M;
            if (d) g.Ib = w;
            if (e) g.Ib = a;
            else if (!b) a = M;
            g.N = w;
            w(f, l)
        }
        g.Ib = w;
        g.N = w;

        function Cb(i, l, p) {
            var d = this,
                b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, i || 0, l || 0, p || 0, 1],
                h = c.sin,
                g = c.cos,
                m = c.tan;

            function f(a) {
                return a * c.PI / 180
            }

            function o(a, b) {
                return {
                    x: a,
                    y: b
                }
            }

            function n(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
                return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j]
            }

            function e(c, a) {
                return n.apply(j, (a || b).concat(c))
            }
            d.bc = function(a, c, d) {
                if (a == k) a = 1;
                if (c == k) c = 1;
                if (d == k) d = 1;
                if (a != 1 || c != 1 || d != 1) b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.ob = function(a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.G = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([1, 0, 0, 0, 0, d, i, 0, 0, -i, d, 0, 0, 0, 0, 1])
                }
            };
            d.H = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([d, 0, -i, 0, 0, 1, 0, 0, i, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.Fd = function(c) {
                if (c) {
                    a = f(c);
                    var d = g(a),
                        i = h(a);
                    b = e([d, i, 0, 0, -i, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.xd = function(a, c) {
                if (a || c) {
                    i = f(a);
                    l = f(c);
                    b = e([1, m(l), 0, 0, m(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.S = function(c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return o(a[12], a[13])
            };
            d.zd = function() {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.Md = function() {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }
        new function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.m = function(b, c) {
                return a.Yc(b, c, 0)
            };
            a.n = function(b, c) {
                return a.Yc(b, 0, c)
            };
            a.Yc = function(a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.S = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return u(a[0][0], a[1][0])
            }
        };
        var N = {
            Dc: 0,
            Pc: 0,
            q: 0,
            s: 0,
            U: 1,
            m: 1,
            n: 1,
            Y: 0,
            G: 0,
            H: 0,
            ab: 0,
            eb: 0,
            I: 0,
            Bb: 0,
            Cb: 0
        };
        g.vd = function(a) {
            var c = a || {};
            if (a)
                if (b.Bc(a)) c = {
                    gc: c
                };
                else if (b.Bc(a.c)) c.c = {
                gc: a.c
            };
            return c
        };
        g.Ld = function(l, m, x, q, z, A, n) {
            var a = m;
            if (l) {
                a = {};
                for (var g in m) {
                    var B = A[g] || 1,
                        w = z[g] || [0, 1],
                        f = (x - w[0]) / w[1];
                    f = c.min(c.max(f, 0), 1);
                    f = f * B;
                    var u = c.floor(f);
                    if (f != u) f -= u;
                    var h = q.gc || e.Fe,
                        i, C = l[g],
                        o = m[g];
                    if (b.ud(o)) {
                        h = q[g] || h;
                        var y = h(f);
                        i = C + o * y
                    } else {
                        i = b.O({
                            Jb: {}
                        }, l[g]);
                        var v = q[g] || {};
                        b.e(o.Jb || o, function(d, a) {
                            h = v[a] || v.gc || h;
                            var c = h(f),
                                b = d * c;
                            i.Jb[a] = b;
                            i[a] += b
                        })
                    }
                    a[g] = i
                }
                var t = b.e(m, function(b, a) {
                    return N[a] != k
                });
                t && b.e(N, function(c, b) {
                    if (a[b] == k && l[b] !== k) a[b] = l[b]
                });
                if (t) {
                    if (a.U) a.m = a.n = a.U;
                    a.V = n.V;
                    a.Z = n.Z;
                    a.Jd = d
                }
            }
            if (m.c && n.ob) {
                var p = a.c.Jb,
                    s = (p.l || 0) + (p.z || 0),
                    r = (p.k || 0) + (p.v || 0);
                a.k = (a.k || 0) + r;
                a.l = (a.l || 0) + s;
                a.c.k -= r;
                a.c.v -= r;
                a.c.l -= s;
                a.c.z -= s
            }
            if (a.c && b.Ed() && !a.c.l && !a.c.k && !a.c.s && !a.c.q && a.c.v == n.V && a.c.z == n.Z) a.c = j;
            return a
        }
    };

    function n() {
        var a = this,
            d = [];

        function i(a, b) {
            d.push({
                Rb: a,
                ec: b
            })
        }

        function g(a, c) {
            b.e(d, function(b, e) {
                b.Rb == a && b.ec === c && d.splice(e, 1)
            })
        }
        a.sb = a.addEventListener = i;
        a.removeEventListener = g;
        a.f = function(a) {
            var c = [].slice.call(arguments, 1);
            b.e(d, function(b) {
                b.Rb == a && b.ec.apply(h, c)
            })
        }
    }
    var m = function(z, C, i, J, M, L) {
        z = z || 0;
        var a = this,
            q, n, o, u, A = 0,
            G, H, F, B, y = 0,
            g = 0,
            m = 0,
            D, k, f, e, p, w = [],
            x;

        function O(a) {
            f += a;
            e += a;
            k += a;
            g += a;
            m += a;
            y += a
        }

        function t(o) {
            var h = o;
            if (p && (h >= e || h <= f)) h = ((h - f) % p + p) % p + f;
            if (!D || u || g != h) {
                var j = c.min(h, e);
                j = c.max(j, f);
                if (!D || u || j != m) {
                    if (L) {
                        var l = (j - k) / (C || 1);
                        if (i.sd) l = 1 - l;
                        var n = b.Ld(M, L, l, G, F, H, i);
                        if (x) b.e(n, function(b, a) {
                            x[a] && x[a](J, b)
                        });
                        else b.N(J, n)
                    }
                    a.fc(m - k, j - k);
                    m = j;
                    b.e(w, function(b, c) {
                        var a = o < g ? w[w.length - c - 1] : b;
                        a.Q(m - y)
                    });
                    var r = g,
                        q = m;
                    g = h;
                    D = d;
                    a.xb(r, q)
                }
            }
        }

        function E(a, b, d) {
            b && a.Ob(e);
            if (!d) {
                f = c.min(f, a.kd() + y);
                e = c.max(e, a.Qb() + y)
            }
            w.push(a)
        }
        var r = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;
        if (b.fe() && b.jd() < 7) r = j;
        r = r || function(a) {
            b.ld(a, i.tc)
        };

        function I() {
            if (q) {
                var d = b.M(),
                    e = c.min(d - A, i.rc),
                    a = g + e * o;
                A = d;
                if (a * o >= n * o) a = n;
                t(a);
                if (!u && a * o >= n * o) K(B);
                else r(I)
            }
        }

        function s(h, i, j) {
            if (!q) {
                q = d;
                u = j;
                B = i;
                h = c.max(h, f);
                h = c.min(h, e);
                n = h;
                o = n < g ? -1 : 1;
                a.qc();
                A = b.M();
                r(I)
            }
        }

        function K(b) {
            if (q) {
                u = q = B = l;
                a.pc();
                b && b()
            }
        }
        a.oc = function(a, b, c) {
            s(a ? g + a : e, b, c)
        };
        a.nc = s;
        a.db = K;
        a.Nd = function(a) {
            s(a)
        };
        a.P = function() {
            return g
        };
        a.Cc = function() {
            return n
        };
        a.fb = function() {
            return m
        };
        a.Q = t;
        a.ob = function(a) {
            t(g + a)
        };
        a.Jc = function() {
            return q
        };
        a.wd = function(a) {
            p = a
        };
        a.Ob = O;
        a.xc = function(a, b) {
            E(a, 0, b)
        };
        a.jc = function(a) {
            E(a, 1)
        };
        a.kd = function() {
            return f
        };
        a.Qb = function() {
            return e
        };
        a.xb = a.qc = a.pc = a.fc = b.Ec;
        a.Mb = b.M();
        i = b.O({
            tc: 16,
            rc: 50
        }, i);
        p = i.sc;
        x = i.nd;
        f = k = z;
        e = z + C;
        H = i.Ad || {};
        F = i.rd || {};
        G = b.vd(i.mb)
    };
    new(function() {});
    var i = function(p, fc) {
        var g = this;

        function Bc() {
            var a = this;
            m.call(a, -1e8, 2e8);
            a.ee = function() {
                var b = a.fb(),
                    d = c.floor(b),
                    f = t(d),
                    e = b - c.floor(b);
                return {
                    W: f,
                    ce: d,
                    lb: e
                }
            };
            a.xb = function(b, a) {
                var e = c.floor(a);
                if (e != a && a > b) e++;
                Ub(e, d);
                g.f(i.be, t(a), t(b), a, b)
            }
        }

        function Ac() {
            var a = this;
            m.call(a, 0, 0, {
                sc: q
            });
            b.e(C, function(b) {
                D & 1 && b.wd(q);
                a.jc(b);
                b.Ob(ib / bc)
            })
        }

        function zc() {
            var a = this,
                b = Tb.T;
            m.call(a, -1, 2, {
                mb: e.Ge,
                nd: {
                    lb: Zb
                },
                sc: q
            }, b, {
                lb: 1
            }, {
                lb: -2
            });
            a.wb = b
        }

        function nc(o, n) {
            var b = this,
                e, f, h, k, c;
            m.call(b, -1e8, 2e8, {
                rc: 100
            });
            b.qc = function() {
                M = d;
                R = j;
                g.f(i.ae, t(w.P()), w.P())
            };
            b.pc = function() {
                M = l;
                k = l;
                var a = w.ee();
                g.f(i.Zd, t(w.P()), w.P());
                !a.lb && Dc(a.ce, s)
            };
            b.xb = function(i, g) {
                var b;
                if (k) b = c;
                else {
                    b = f;
                    if (h) {
                        var d = g / h;
                        b = a.Yd(d) * (f - e) + e
                    }
                }
                w.Q(b)
            };
            b.vb = function(a, d, c, g) {
                e = a;
                f = d;
                h = c;
                w.Q(a);
                b.Q(0);
                b.nc(c, g)
            };
            b.Xd = function(a) {
                k = d;
                c = a;
                b.oc(a, j, d)
            };
            b.Wd = function(a) {
                c = a
            };
            w = new Bc;
            w.xc(o);
            w.xc(n)
        }

        function pc() {
            var c = this,
                a = Xb();
            b.A(a, 0);
            b.E(a, "pointerEvents", "none");
            c.T = a;
            c.zb = function() {
                b.K(a);
                b.cc(a)
            }
        }

        function xc(o, f) {
            var e = this,
                r, L, v, k, y = [],
                x, B, W, G, Q, F, h, w, p;
            m.call(e, -u, u + 1, {});

            function E(a) {
                r && r.Uc();
                T(o, a, 0);
                F = d;
                r = new I.F(o, I, b.yd(b.i(o, "idle")) || lc);
                r.Q(0)
            }

            function Z() {
                r.Mb < I.Mb && E()
            }

            function M(p, r, o) {
                if (!G) {
                    G = d;
                    if (k && o) {
                        var h = o.width,
                            c = o.height,
                            n = h,
                            m = c;
                        if (h && c && a.hb) {
                            if (a.hb & 3 && (!(a.hb & 4) || h > K || c > J)) {
                                var j = l,
                                    q = K / J * c / h;
                                if (a.hb & 1) j = q > 1;
                                else if (a.hb & 2) j = q < 1;
                                n = j ? h * J / c : K;
                                m = j ? J : c * K / h
                            }
                            b.g(k, n);
                            b.j(k, m);
                            b.p(k, (J - m) / 2);
                            b.u(k, (K - n) / 2)
                        }
                        b.r(k, "absolute");
                        g.f(i.Ud, f)
                    }
                }
                b.K(r);
                p && p(e)
            }

            function Y(b, c, d, g) {
                if (g == R && s == f && N)
                    if (!Cc) {
                        var a = t(b);
                        A.Ce(a, f, c, e, d);
                        c.Td();
                        U.Ob(a - U.kd() - 1);
                        U.Q(a);
                        z.vb(b, b, 0)
                    }
            }

            function cb(b) {
                if (b == R && s == f) {
                    if (!h) {
                        var a = j;
                        if (A)
                            if (A.W == f) a = A.he();
                            else A.zb();
                        Z();
                        h = new vc(o, f, a, r);
                        h.mc(p)
                    }!h.Jc() && h.kc()
                }
            }

            function S(d, g, l) {
                if (d == f) {
                    if (d != g) C[g] && C[g].Sd();
                    else !l && h && h.Rd();
                    p && p.Xc();
                    var m = R = b.M();
                    e.qb(b.D(j, cb, m))
                } else {
                    var k = c.min(f, d),
                        i = c.max(f, d),
                        o = c.min(i - k, k + q - i),
                        n = u + a.ge - 1;
                    (!Q || o <= n) && e.qb()
                }
            }

            function db() {
                if (s == f && h) {
                    h.db();
                    p && p.ie();
                    p && p.je();
                    h.hd()
                }
            }

            function eb() {
                s == f && h && h.db()
            }

            function ab(a) {
                !P && g.f(i.ye, f, a)
            }

            function O() {
                p = w.pInstance;
                h && h.mc(p)
            }
            e.qb = function(c, a) {
                a = a || v;
                if (y.length && !G) {
                    b.cb(a);
                    if (!W) {
                        W = d;
                        g.f(i.xe, f);
                        b.e(y, function(a) {
                            if (!b.L(a, "src")) {
                                a.src = b.i(a, "src2");
                                b.J(a, a["display-origin"])
                            }
                        })
                    }
                    b.qd(y, k, b.D(j, M, c, a))
                } else M(c, a)
            };
            e.Qd = function() {
                var h = f;
                if (a.Qc < 0) h -= q;
                var d = h + a.Qc * tc;
                if (D & 2) d = t(d);
                if (!(D & 1)) d = c.max(0, c.min(d, q - u));
                if (d != f) {
                    if (A) {
                        var e = A.Qe(q);
                        if (e) {
                            var i = R = b.M(),
                                g = C[t(d)];
                            return g.qb(b.D(j, Y, d, g, e, i), v)
                        }
                    }
                    bb(d)
                }
            };
            e.ic = function() {
                S(f, f, d)
            };
            e.Sd = function() {
                p && p.ie();
                p && p.je();
                e.vc();
                h && h.ve();
                h = j;
                E()
            };
            e.Td = function() {
                b.K(o)
            };
            e.vc = function() {
                b.cb(o)
            };
            e.ue = function() {
                p && p.Xc()
            };

            function T(a, c, e) {
                if (b.L(a, "jssor-slider")) return;
                if (!F) {
                    if (a.tagName == "IMG") {
                        y.push(a);
                        if (!b.L(a, "src")) {
                            Q = d;
                            a["display-origin"] = b.J(a);
                            b.K(a)
                        }
                    }
                    b.md() && b.A(a, (b.A(a) || 0) + 1)
                }
                var f = b.Gb(a);
                b.e(f, function(f) {
                    var h = f.tagName,
                        i = b.i(f, "u");
                    if (i == "player" && !w) {
                        w = f;
                        if (w.pInstance) O();
                        else b.a(w, "dataavailable", O)
                    }
                    if (i == "caption") {
                        if (c) {
                            b.zc(f, b.i(f, "to"));
                            b.Pd(f, b.i(f, "bf"));
                            b.i(f, "3d") && b.Ue(f, "preserve-3d")
                        } else if (!b.cd()) {
                            var g = b.gb(f, l, d);
                            b.yb(g, f, a);
                            b.pb(f, a);
                            f = g;
                            c = d
                        }
                    } else if (!F && !e && !k) {
                        if (h == "A") {
                            if (b.i(f, "u") == "image") k = b.De(f, "IMG");
                            else k = b.o(f, "image", d);
                            if (k) {
                                x = f;
                                b.J(x, "block");
                                b.N(x, V);
                                B = b.gb(x, d);
                                b.r(x, "relative");
                                b.lc(B, 0);
                                b.E(B, "backgroundColor", "#000")
                            }
                        } else if (h == "IMG" && b.i(f, "u") == "image") k = f;
                        if (k) {
                            k.border = 0;
                            b.N(k, V)
                        }
                    }
                    T(f, c, e + 1)
                })
            }
            e.fc = function(c, b) {
                var a = u - b;
                Zb(L, a)
            };
            e.W = f;
            n.call(e);
            b.Se(o, b.i(o, "p"));
            b.Re(o, b.i(o, "po"));
            var H = b.o(o, "thumb", d);
            if (H) {
                e.te = b.gb(H);
                b.K(H)
            }
            b.cb(o);
            v = b.gb(fb);
            b.A(v, 1e3);
            b.a(o, "click", ab);
            E(d);
            e.id = k;
            e.Oc = B;
            e.wb = L = o;
            b.B(L, v);
            g.sb(203, S);
            g.sb(28, eb);
            g.sb(24, db)
        }

        function vc(y, f, p, q) {
            var a = this,
                n = 0,
                u = 0,
                h, j, e, c, k, t, r, o = C[f];
            m.call(a, 0, 0);

            function v() {
                b.cc(L);
                cc && k && o.Oc && b.B(L, o.Oc);
                b.cb(L, !k && o.id)
            }

            function w() {
                a.kc()
            }

            function x(b) {
                r = b;
                a.db();
                a.kc()
            }
            a.kc = function() {
                var b = a.fb();
                if (!B && !M && !r && s == f) {
                    if (!b) {
                        if (h && !k) {
                            k = d;
                            a.hd(d);
                            g.f(i.se, f, n, u, h, c)
                        }
                        v()
                    }
                    var l, p = i.Lc;
                    if (b != c)
                        if (b == e) l = c;
                        else if (b == j) l = e;
                    else if (!b) l = j;
                    else l = a.Cc();
                    g.f(p, f, b, n, j, e, c);
                    var m = N && (!E || F);
                    if (b == c)(e != c && !(E & 12) || m) && o.Qd();
                    else(m || b != e) && a.nc(l, w)
                }
            };
            a.Rd = function() {
                e == c && e == a.fb() && a.Q(j)
            };
            a.ve = function() {
                A && A.W == f && A.zb();
                var b = a.fb();
                b < c && g.f(i.Lc, f, -b - 1, n, j, e, c)
            };
            a.hd = function(a) {
                p && b.rb(jb, a && p.uc.ff ? "" : "hidden")
            };
            a.fc = function(b, a) {
                if (k && a >= h) {
                    k = l;
                    v();
                    o.vc();
                    A.zb();
                    g.f(i.re, f, n, u, h, c)
                }
                g.f(i.qe, f, a, n, j, e, c)
            };
            a.mc = function(a) {
                if (a && !t) {
                    t = a;
                    a.sb($JssorPlayer$.Hd, x)
                }
            };
            p && a.jc(p);
            h = a.Qb();
            a.jc(q);
            j = h + q.ed;
            e = h + q.fd;
            c = a.Qb()
        }

        function Kb(a, c, d) {
            b.u(a, c);
            b.p(a, d)
        }

        function Zb(c, b) {
            var a = x > 0 ? x : eb,
                d = zb * b * (a & 1),
                e = Ab * b * (a >> 1 & 1);
            Kb(c, d, e)
        }

        function Pb() {
            pb = M;
            Ib = z.Cc();
            G = w.P()
        }

        function gc() {
            Pb();
            if (B || !F && E & 12) {
                z.db();
                g.f(i.pe)
            }
        }

        function ec(f) {
            if (!B && (F || !(E & 12)) && !z.Jc()) {
                var d = w.P(),
                    b = c.ceil(G);
                if (f && c.abs(H) >= a.Nc) {
                    b = c.ceil(d);
                    b += hb
                }
                if (!(D & 1)) b = c.min(q - u, c.max(b, 0));
                var e = c.abs(b - d);
                e = 1 - c.pow(1 - e, 5);
                if (!P && pb) z.Nd(Ib);
                else if (d == b) {
                    sb.ue();
                    sb.ic()
                } else z.vb(d, b, e * Vb)
            }
        }

        function Hb(a) {
            !b.i(b.Ub(a), "nodrag") && b.Fb(a)
        }

        function rc(a) {
            Yb(a, 1)
        }

        function Yb(a, c) {
            a = b.Hc(a);
            var k = b.Ub(a);
            if (!O && !b.i(k, "nodrag") && sc() && (!c || a.touches.length == 1)) {
                B = d;
                yb = l;
                R = j;
                b.a(f, c ? "touchmove" : "mousemove", Bb);
                b.M();
                P = 0;
                gc();
                if (!pb) x = 0;
                if (c) {
                    var h = a.touches[0];
                    ub = h.clientX;
                    vb = h.clientY
                } else {
                    var e = b.Rc(a);
                    ub = e.x;
                    vb = e.y
                }
                H = 0;
                gb = 0;
                hb = 0;
                g.f(i.oe, t(G), G, a)
            }
        }

        function Bb(e) {
            if (B) {
                e = b.Hc(e);
                var f;
                if (e.type != "mousemove") {
                    var l = e.touches[0];
                    f = {
                        x: l.clientX,
                        y: l.clientY
                    }
                } else f = b.Rc(e);
                if (f) {
                    var j = f.x - ub,
                        k = f.y - vb;
                    if (c.floor(G) != G) x = x || eb & O;
                    if ((j || k) && !x) {
                        if (O == 3)
                            if (c.abs(k) > c.abs(j)) x = 2;
                            else x = 1;
                        else x = O;
                        if (mb && x == 1 && c.abs(k) - c.abs(j) > 3) yb = d
                    }
                    if (x) {
                        var a = k,
                            i = Ab;
                        if (x == 1) {
                            a = j;
                            i = zb
                        }
                        if (!(D & 1)) {
                            if (a > 0) {
                                var g = i * s,
                                    h = a - g;
                                if (h > 0) a = g + c.sqrt(h) * 5
                            }
                            if (a < 0) {
                                var g = i * (q - u - s),
                                    h = -a - g;
                                if (h > 0) a = -g - c.sqrt(h) * 5
                            }
                        }
                        if (H - gb < -2) hb = 0;
                        else if (H - gb > 2) hb = -1;
                        gb = H;
                        H = a;
                        rb = G - H / i / (Y || 1);
                        if (H && x && !yb) {
                            b.Fb(e);
                            if (!M) z.Xd(rb);
                            else z.Wd(rb)
                        }
                    }
                }
            }
        }

        function ab() {
            qc();
            if (B) {
                B = l;
                b.M();
                b.C(f, "mousemove", Bb);
                b.C(f, "touchmove", Bb);
                P = H;
                z.db();
                var a = w.P();
                g.f(i.ne, t(a), a, t(G), G);
                E & 12 && Pb();
                ec(d)
            }
        }

        function jc(c) {
            if (P) {
                b.Me(c);
                var a = b.Ub(c);
                while (a && v !== a) {
                    a.tagName == "A" && b.Fb(c);
                    try {
                        a = a.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function Jb(a) {
            C[s];
            s = t(a);
            sb = C[s];
            Ub(a);
            return s
        }

        function Dc(a, b) {
            x = 0;
            Jb(a);
            g.f(i.me, t(a), b)
        }

        function Ub(a, c) {
            wb = a;
            b.e(S, function(b) {
                b.Nb(t(a), a, c)
            })
        }

        function sc() {
            var b = i.dd || 0,
                a = X;
            if (mb) a & 1 && (a &= 1);
            i.dd |= a;
            return O = a & ~b
        }

        function qc() {
            if (O) {
                i.dd &= ~X;
                O = 0
            }
        }

        function Xb() {
            var a = b.bb();
            b.N(a, V);
            b.r(a, "absolute");
            return a
        }

        function t(a) {
            return (a % q + q) % q
        }

        function kc(b, d) {
            if (d)
                if (!D) {
                    b = c.min(c.max(b + wb, 0), q - u);
                    d = l
                } else if (D & 2) {
                b = t(b + wb);
                d = l
            }
            bb(b, a.Pb, d)
        }

        function xb() {
            b.e(S, function(a) {
                a.Lb(a.Kb.ef <= F)
            })
        }

        function hc() {
            if (!F) {
                F = 1;
                xb();
                if (!B) {
                    E & 12 && ec();
                    E & 3 && C[s].ic()
                }
            }
        }

        function Ec() {
            if (F) {
                F = 0;
                xb();
                B || !(E & 12) || gc()
            }
        }

        function ic() {
            V = {
                ub: K,
                Hb: J,
                l: 0,
                k: 0
            };
            b.e(T, function(a) {
                b.N(a, V);
                b.r(a, "absolute");
                b.rb(a, "hidden");
                b.K(a)
            });
            b.N(fb, V)
        }

        function ob(b, a) {
            bb(b, a, d)
        }

        function bb(g, f, j) {
            if (Rb && (!B && (F || !(E & 12)) || a.Ac)) {
                M = d;
                B = l;
                z.db();
                if (f == k) f = Vb;
                var e = Cb.fb(),
                    b = g;
                if (j) {
                    b = e + g;
                    if (g > 0) b = c.ceil(b);
                    else b = c.floor(b)
                }
                if (D & 2) b = t(b);
                if (!(D & 1)) b = c.max(0, c.min(b, q - u));
                var i = (b - e) % q;
                b = e + i;
                var h = e == b ? 0 : f * c.abs(i);
                h = c.min(h, f * u * 1.5);
                z.vb(e, b, h || 1)
            }
        }
        g.le = bb;
        g.oc = function() {
            if (!N) {
                N = d;
                C[s] && C[s].ic()
            }
        };
        g.ke = function() {
            return P
        };

        function W() {
            return b.g(y || p)
        }

        function lb() {
            return b.j(y || p)
        }
        g.V = W;
        g.Z = lb;

        function Eb(c, d) {
            if (c == k) return b.g(p);
            if (!y) {
                var a = b.bb(f);
                b.Gc(a, b.Gc(p));
                b.Ab(a, b.Ab(p));
                b.J(a, "block");
                b.r(a, "relative");
                b.p(a, 0);
                b.u(a, 0);
                b.rb(a, "visible");
                y = b.bb(f);
                b.r(y, "absolute");
                b.p(y, 0);
                b.u(y, 0);
                b.g(y, b.g(p));
                b.j(y, b.j(p));
                b.zc(y, "0 0");
                b.B(y, a);
                var h = b.Gb(p);
                b.B(p, y);
                b.E(p, "backgroundImage", "");
                b.e(h, function(c) {
                    b.B(b.i(c, "noscale") ? p : a, c);
                    b.i(c, "autocenter") && Mb.push(c)
                })
            }
            Y = c / (d ? b.j : b.g)(y);
            b.Pe(y, Y);
            var g = d ? Y * W() : c,
                e = d ? c : Y * lb();
            b.g(p, g);
            b.j(p, e);
            b.e(Mb, function(a) {
                var c = b.Bd(b.i(a, "autocenter"));
                b.Id(a, c)
            })
        }
        g.ze = Eb;
        g.Zc = function(a) {
            var d = c.ceil(t(ib / bc)),
                b = t(a - s + d);
            if (b > u) {
                if (a - s > q / 2) a -= q;
                else if (a - s <= -q / 2) a += q
            } else a = s + b - d;
            return a
        };
        n.call(g);
        g.T = p = b.X(p);
        var a = b.O({
            hb: 0,
            ge: 1,
            Wb: 1,
            Xb: 0,
            Yb: l,
            yc: 1,
            tb: d,
            Ac: d,
            Qc: 1,
            Mc: 3e3,
            Kc: 1,
            Pb: 500,
            Yd: e.He,
            Nc: 20,
            Ic: 0,
            R: 1,
            dc: 0,
            Vd: 1,
            hc: 1,
            Vc: 1
        }, fc);
        a.tb = a.tb && b.Ae();
        if (a.Ve != k) a.Mc = a.Ve;
        if (a.We != k) a.dc = a.We;
        var eb = a.hc & 3,
            tc = (a.hc & 4) / -4 || 1,
            kb = a.df,
            I = b.O({
                F: r,
                tb: a.tb
            }, a.cf);
        I.Sb = I.Sb || I.bf;
        var Fb = a.Le,
            Z = a.af,
            db = a.Ke,
            Q = !a.Vd,
            y, v = b.o(p, "slides", Q),
            fb = b.o(p, "loading", Q) || b.bb(f),
            Nb = b.o(p, "navigator", Q),
            dc = b.o(p, "arrowleft", Q),
            ac = b.o(p, "arrowright", Q),
            Lb = b.o(p, "thumbnavigator", Q),
            oc = b.g(v),
            mc = b.j(v),
            V, T = [],
            uc = b.Gb(v);
        b.e(uc, function(a) {
            if (a.tagName == "DIV" && !b.i(a, "u")) T.push(a);
            else b.md() && b.A(a, (b.A(a) || 0) + 1)
        });
        var s = -1,
            wb, sb, q = T.length,
            K = a.Oe || oc,
            J = a.Ie || mc,
            Wb = a.Ic,
            zb = K + Wb,
            Ab = J + Wb,
            bc = eb & 1 ? zb : Ab,
            u = c.min(a.R, q),
            jb, x, O, yb, S = [],
            Qb, Sb, Ob, cc, Cc, N, E = a.Kc,
            lc = a.Mc,
            Vb = a.Pb,
            qb, tb, ib, Rb = u < q,
            D = Rb ? a.yc : 0,
            X, P, F = 1,
            M, B, R, ub = 0,
            vb = 0,
            H, gb, hb, Cb, w, U, z, Tb = new pc,
            Y, Mb = [];
        if (q) {
            if (a.tb) Kb = function(a, c, d) {
                b.Ib(a, {
                    ab: c,
                    eb: d
                })
            };
            N = a.Yb;
            g.Kb = fc;
            ic();
            b.L(p, "jssor-slider", d);
            b.A(v, b.A(v) || 0);
            b.r(v, "absolute");
            jb = b.gb(v, d);
            b.yb(jb, v);
            if (kb) {
                cc = kb.Ze;
                qb = kb.F;
                tb = u == 1 && q > 1 && qb && (!b.cd() || b.jd() >= 8)
            }
            ib = tb || u >= q || !(D & 1) ? 0 : a.dc;
            X = (u > 1 || ib ? eb : -1) & a.Vc;
            var Gb = v,
                C = [],
                A, L, Db = b.Be(),
                mb = Db.de,
                G, pb, Ib, rb;
            Db.bd && b.E(Gb, Db.bd, ([j, "pan-y", "pan-x", "none"])[X] || "");
            U = new zc;
            if (tb) A = new qb(Tb, K, J, kb, mb);
            b.B(jb, U.wb);
            b.rb(v, "hidden");
            L = Xb();
            b.E(L, "backgroundColor", "#000");
            b.lc(L, 0);
            b.yb(L, Gb.firstChild, Gb);
            for (var cb = 0; cb < T.length; cb++) {
                var wc = T[cb],
                    yc = new xc(wc, cb);
                C.push(yc)
            }
            b.K(fb);
            Cb = new Ac;
            z = new nc(Cb, U);
            if (X) {
                b.a(v, "mousedown", Yb);
                b.a(v, "touchstart", rc);
                b.a(v, "dragstart", Hb);
                b.a(v, "selectstart", Hb);
                b.a(f, "mouseup", ab);
                b.a(f, "touchend", ab);
                b.a(f, "touchcancel", ab);
                b.a(h, "blur", ab)
            }
            E &= mb ? 10 : 5;
            if (Nb && Fb) {
                Qb = new Fb.F(Nb, Fb, W(), lb());
                S.push(Qb)
            }
            if (Z && dc && ac) {
                Z.yc = D;
                Z.R = u;
                Sb = new Z.F(dc, ac, Z, W(), lb());
                S.push(Sb)
            }
            if (Lb && db) {
                db.Xb = a.Xb;
                Ob = new db.F(Lb, db);
                S.push(Ob)
            }
            b.e(S, function(a) {
                a.Tb(q, C, fb);
                a.sb(o.Vb, kc)
            });
            b.E(p, "visibility", "visible");
            Eb(W());
            b.a(v, "click", jc, d);
            b.a(p, "mouseout", b.Db(hc, p));
            b.a(p, "mouseover", b.Db(Ec, p));
            xb();
            a.Wb && b.a(f, "keydown", function(b) {
                if (b.keyCode == 37) ob(-a.Wb);
                else b.keyCode == 39 && ob(a.Wb)
            });
            var nb = a.Xb;
            if (!(D & 1)) nb = c.max(0, c.min(nb, q - u));
            z.vb(nb, nb, 0)
        }
    };
    i.ye = 21;
    i.oe = 22;
    i.ne = 23;
    i.ae = 24;
    i.Zd = 25;
    i.xe = 26;
    i.Ud = 27;
    i.pe = 28;
    i.be = 202;
    i.me = 203;
    i.se = 206;
    i.re = 207;
    i.qe = 208;
    i.Lc = 209;
    var o = {
            Vb: 1
        },
        s = function(e, C) {
            var f = this;
            n.call(f);
            e = b.X(e);
            var s, A, z, r, k = 0,
                a, m, i, w, x, h, g, q, p, B = [],
                y = [];

            function v(a) {
                a != -1 && y[a].Wc(a == k)
            }

            function t(a) {
                f.f(o.Vb, a * m)
            }
            f.T = e;
            f.Nb = function(a) {
                if (a != r) {
                    var d = k,
                        b = c.floor(a / m);
                    k = b;
                    r = a;
                    v(d);
                    v(b)
                }
            };
            f.Lb = function(a) {
                b.cb(e, a)
            };
            var u;
            f.Tb = function(D) {
                if (!u) {
                    s = c.ceil(D / m);
                    k = 0;
                    var o = q + w,
                        r = p + x,
                        n = c.ceil(s / i) - 1;
                    A = q + o * (!h ? n : i - 1);
                    z = p + r * (h ? n : i - 1);
                    b.g(e, A);
                    b.j(e, z);
                    for (var f = 0; f < s; f++) {
                        var C = b.td();
                        b.Je(C, f + 1);
                        var l = b.Tc(g, "numbertemplate", C, d);
                        b.r(l, "absolute");
                        var v = f % (n + 1);
                        b.u(l, !h ? o * v : f % i * o);
                        b.p(l, h ? r * v : c.floor(f / (n + 1)) * r);
                        b.B(e, l);
                        B[f] = l;
                        a.jb & 1 && b.a(l, "click", b.D(j, t, f));
                        a.jb & 2 && b.a(l, "mouseover", b.Db(b.D(j, t, f), l));
                        y[f] = b.ad(l)
                    }
                    u = d
                }
            };
            f.Kb = a = b.O({
                Zb: 10,
                ac: 10,
                ib: 1,
                jb: 1
            }, C);
            g = b.o(e, "prototype");
            q = b.g(g);
            p = b.j(g);
            b.pb(g, e);
            m = a.Ee || 1;
            i = a.gd || 1;
            w = a.Zb;
            x = a.ac;
            h = a.ib - 1;
            a.bc == l && b.L(e, "noscale", d);
            a.Eb && b.L(e, "autocenter", a.Eb)
        };
    var q = function(g, B) {
        var h = this,
            z, p, a, v = [],
            x, w, e, q, r, u, t, m, s, f, k;
        n.call(h);
        g = b.X(g);

        function A(n, f) {
            var g = this,
                c, m, l;

            function q() {
                m.Wc(p == f)
            }

            function i(d) {
                if (d || !s.ke()) {
                    var a = e - f % e,
                        b = s.Zc((f + a) / e - 1),
                        c = b * e + e - a;
                    h.f(o.Vb, c)
                }
            }
            g.W = f;
            g.Fc = q;
            l = n.te || n.id || b.bb();
            g.wb = c = b.Tc(k, "thumbnailtemplate", l, d);
            m = b.ad(c);
            a.jb & 1 && b.a(c, "click", b.D(j, i, 0));
            a.jb & 2 && b.a(c, "mouseover", b.Db(b.D(j, i, 1), c))
        }
        h.Nb = function(b, d, f) {
            var a = p;
            p = b;
            a != -1 && v[a].Fc();
            v[b].Fc();
            !f && s.le(s.Zc(c.floor(d / e)))
        };
        h.Lb = function(a) {
            b.cb(g, a)
        };
        var y;
        h.Tb = function(D, C) {
            if (!y) {
                z = D;
                c.ceil(z / e);
                p = -1;
                m = c.min(m, C.length);
                var h = a.ib & 1,
                    n = u + (u + q) * (e - 1) * (1 - h),
                    k = t + (t + r) * (e - 1) * h,
                    B = n + (n + q) * (m - 1) * h,
                    o = k + (k + r) * (m - 1) * (1 - h);
                b.r(f, "absolute");
                b.rb(f, "hidden");
                a.Eb & 1 && b.u(f, (x - B) / 2);
                a.Eb & 2 && b.p(f, (w - o) / 2);
                b.g(f, B);
                b.j(f, o);
                var j = [];
                b.e(C, function(l, g) {
                    var i = new A(l, g),
                        d = i.wb,
                        a = c.floor(g / e),
                        k = g % e;
                    b.u(d, (u + q) * k * (1 - h));
                    b.p(d, (t + r) * k * h);
                    if (!j[a]) {
                        j[a] = b.bb();
                        b.B(f, j[a])
                    }
                    b.B(j[a], d);
                    v.push(i)
                });
                var E = b.O({
                    Yb: l,
                    Ac: l,
                    Oe: n,
                    Ie: k,
                    Ic: q * h + r * (1 - h),
                    Nc: 12,
                    Pb: 200,
                    Kc: 1,
                    hc: a.ib,
                    Vc: a.Ye || a.Xe ? 0 : a.ib
                }, a);
                s = new i(g, E);
                y = d
            }
        };
        h.Kb = a = b.O({
            Zb: 0,
            ac: 0,
            R: 1,
            ib: 1,
            Eb: 3,
            jb: 1
        }, B);
        x = b.g(g);
        w = b.j(g);
        f = b.o(g, "slides", d);
        k = b.o(f, "prototype");
        u = b.g(k);
        t = b.j(k);
        b.pb(k, f);
        e = a.gd || 1;
        q = a.Zb;
        r = a.ac;
        m = a.R;
        a.bc == l && b.L(g, "noscale", d)
    };

    function r(e, d, c) {
        var a = this;
        m.call(a, 0, c);
        a.Uc = b.Ec;
        a.ed = 0;
        a.fd = c
    }
    jssor_1_slider_init = function() {
        var f = {
                Yb: d,
                Le: {
                    F: s
                },
                Ke: {
                    F: q,
                    R: 3,
                    dc: 200
                }
            },
            e = new i("jssor_1", f);

        function a() {
            var b = e.T.parentNode.clientWidth;
            if (b) {
                b = c.min(b, 600);
                e.ze(b)
            } else h.setTimeout(a, 30)
        }
        a();
        b.a(h, "load", a);
        b.a(h, "resize", a);
        b.a(h, "orientationchange", a)
    }
})(window, document, Math, null, true, false)