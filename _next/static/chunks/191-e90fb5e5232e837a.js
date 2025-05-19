"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[191], {
    901: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "RouterContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(8229)._(r(2115)).default.createContext(null)
    }
    ,
    1193: (e, t) => {
        function r(e) {
            var t;
            let {config: r, src: n, width: o, quality: i} = e
              , a = i || (null == (t = r.qualities) ? void 0 : t.reduce( (e, t) => Math.abs(t - 75) < Math.abs(e - 75) ? t : e)) || 75;
            return r.path + "?url=" + encodeURIComponent(n) + "&w=" + o + "&q=" + a + (n.startsWith("/_next/static/media/"),
            "")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r.__next_img_default = !0;
        let n = r
    }
    ,
    1285: (e, t, r) => {
        r.d(t, {
            B: () => s
        });
        var n, o = r(2115), i = r(2712), a = (n || (n = r.t(o, 2)))["useId".toString()] || ( () => void 0), l = 0;
        function s(e) {
            let[t,r] = o.useState(a());
            return (0,
            i.N)( () => {
                e || r(e => e ?? String(l++))
            }
            , [e]),
            e || (t ? `radix-${t}` : "")
        }
    }
    ,
    1362: (e, t, r) => {
        r.d(t, {
            D: () => u,
            N: () => c
        });
        var n = r(2115)
          , o = (e, t, r, n, o, i, a, l) => {
            let s = document.documentElement
              , u = ["light", "dark"];
            function c(t) {
                var r;
                (Array.isArray(e) ? e : [e]).forEach(e => {
                    let r = "class" === e
                      , n = r && i ? o.map(e => i[e] || e) : o;
                    r ? (s.classList.remove(...n),
                    s.classList.add(i && i[t] ? i[t] : t)) : s.setAttribute(e, t)
                }
                ),
                r = t,
                l && u.includes(r) && (s.style.colorScheme = r)
            }
            if (n)
                c(n);
            else
                try {
                    let e = localStorage.getItem(t) || r
                      , n = a && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
                    c(n)
                } catch (e) {}
        }
          , i = ["light", "dark"]
          , a = "(prefers-color-scheme: dark)"
          , l = n.createContext(void 0)
          , s = {
            setTheme: e => {}
            ,
            themes: []
        }
          , u = () => {
            var e;
            return null != (e = n.useContext(l)) ? e : s
        }
          , c = e => n.useContext(l) ? n.createElement(n.Fragment, null, e.children) : n.createElement(f, {
            ...e
        })
          , d = ["light", "dark"]
          , f = e => {
            let {forcedTheme: t, disableTransitionOnChange: r=!1, enableSystem: o=!0, enableColorScheme: s=!0, storageKey: u="theme", themes: c=d, defaultTheme: f=o ? "system" : "light", attribute: g="data-theme", value: y, children: b, nonce: w, scriptProps: x} = e
              , [E,C] = n.useState( () => m(u, f))
              , [R,j] = n.useState( () => "system" === E ? h() : E)
              , k = y ? Object.values(y) : c
              , P = n.useCallback(e => {
                let t = e;
                if (!t)
                    return;
                "system" === e && o && (t = h());
                let n = y ? y[t] : t
                  , a = r ? v(w) : null
                  , l = document.documentElement
                  , u = e => {
                    "class" === e ? (l.classList.remove(...k),
                    n && l.classList.add(n)) : e.startsWith("data-") && (n ? l.setAttribute(e, n) : l.removeAttribute(e))
                }
                ;
                if (Array.isArray(g) ? g.forEach(u) : u(g),
                s) {
                    let e = i.includes(f) ? f : null
                      , r = i.includes(t) ? t : e;
                    l.style.colorScheme = r
                }
                null == a || a()
            }
            , [w])
              , S = n.useCallback(e => {
                let t = "function" == typeof e ? e(E) : e;
                C(t);
                try {
                    localStorage.setItem(u, t)
                } catch (e) {}
            }
            , [E])
              , M = n.useCallback(e => {
                j(h(e)),
                "system" === E && o && !t && P("system")
            }
            , [E, t]);
            n.useEffect( () => {
                let e = window.matchMedia(a);
                return e.addListener(M),
                M(e),
                () => e.removeListener(M)
            }
            , [M]),
            n.useEffect( () => {
                let e = e => {
                    e.key === u && (e.newValue ? C(e.newValue) : S(f))
                }
                ;
                return window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
            }
            , [S]),
            n.useEffect( () => {
                P(null != t ? t : E)
            }
            , [t, E]);
            let O = n.useMemo( () => ({
                theme: E,
                setTheme: S,
                forcedTheme: t,
                resolvedTheme: "system" === E ? R : E,
                themes: o ? [...c, "system"] : c,
                systemTheme: o ? R : void 0
            }), [E, S, t, R, o, c]);
            return n.createElement(l.Provider, {
                value: O
            }, n.createElement(p, {
                forcedTheme: t,
                storageKey: u,
                attribute: g,
                enableSystem: o,
                enableColorScheme: s,
                defaultTheme: f,
                value: y,
                themes: c,
                nonce: w,
                scriptProps: x
            }), b)
        }
          , p = n.memo(e => {
            let {forcedTheme: t, storageKey: r, attribute: i, enableSystem: a, enableColorScheme: l, defaultTheme: s, value: u, themes: c, nonce: d, scriptProps: f} = e
              , p = JSON.stringify([i, r, s, t, c, u, a, l]).slice(1, -1);
            return n.createElement("script", {
                ...f,
                suppressHydrationWarning: !0,
                nonce: "",
                dangerouslySetInnerHTML: {
                    __html: "(".concat(o.toString(), ")(").concat(p, ")")
                }
            })
        }
        )
          , m = (e, t) => {
            let r;
            try {
                r = localStorage.getItem(e) || void 0
            } catch (e) {}
            return r || t
        }
          , v = e => {
            let t = document.createElement("style");
            return e && t.setAttribute("nonce", e),
            t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
            document.head.appendChild(t),
            () => {
                window.getComputedStyle(document.body),
                setTimeout( () => {
                    document.head.removeChild(t)
                }
                , 1)
            }
        }
          , h = e => (e || (e = window.matchMedia(a)),
        e.matches ? "dark" : "light")
    }
    ,
    2085: (e, t, r) => {
        r.d(t, {
            F: () => a
        });
        var n = r(2596);
        let o = e => "boolean" == typeof e ? `${e}` : 0 === e ? "0" : e
          , i = n.$
          , a = (e, t) => r => {
            var n;
            if ((null == t ? void 0 : t.variants) == null)
                return i(e, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
            let {variants: a, defaultVariants: l} = t
              , s = Object.keys(a).map(e => {
                let t = null == r ? void 0 : r[e]
                  , n = null == l ? void 0 : l[e];
                if (null === t)
                    return null;
                let i = o(t) || o(n);
                return a[e][i]
            }
            )
              , u = r && Object.entries(r).reduce( (e, t) => {
                let[r,n] = t;
                return void 0 === n || (e[r] = n),
                e
            }
            , {});
            return i(e, s, null == t ? void 0 : null === (n = t.compoundVariants) || void 0 === n ? void 0 : n.reduce( (e, t) => {
                let {class: r, className: n, ...o} = t;
                return Object.entries(o).every(e => {
                    let[t,r] = e;
                    return Array.isArray(r) ? r.includes({
                        ...l,
                        ...u
                    }[t]) : ({
                        ...l,
                        ...u
                    })[t] === r
                }
                ) ? [...e, r, n] : e
            }
            , []), null == r ? void 0 : r.class, null == r ? void 0 : r.className)
        }
    }
    ,
    2098: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        let n = (0,
        r(9946).A)("Sun", [["circle", {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }], ["path", {
            d: "M12 2v2",
            key: "tus03m"
        }], ["path", {
            d: "M12 20v2",
            key: "1lh1kg"
        }], ["path", {
            d: "m4.93 4.93 1.41 1.41",
            key: "149t6j"
        }], ["path", {
            d: "m17.66 17.66 1.41 1.41",
            key: "ptbguv"
        }], ["path", {
            d: "M2 12h2",
            key: "1t8f8n"
        }], ["path", {
            d: "M20 12h2",
            key: "1q8mjw"
        }], ["path", {
            d: "m6.34 17.66-1.41 1.41",
            key: "1m8zz5"
        }], ["path", {
            d: "m19.07 4.93-1.41 1.41",
            key: "1shlcs"
        }]])
    }
    ,
    2284: (e, t, r) => {
        r.d(t, {
            N: () => s
        });
        var n = r(2115)
          , o = r(6081)
          , i = r(6101)
          , a = r(9708)
          , l = r(5155);
        function s(e) {
            let t = e + "CollectionProvider"
              , [r,s] = (0,
            o.A)(t)
              , [u,c] = r(t, {
                collectionRef: {
                    current: null
                },
                itemMap: new Map
            })
              , d = e => {
                let {scope: t, children: r} = e
                  , o = n.useRef(null)
                  , i = n.useRef(new Map).current;
                return (0,
                l.jsx)(u, {
                    scope: t,
                    itemMap: i,
                    collectionRef: o,
                    children: r
                })
            }
            ;
            d.displayName = t;
            let f = e + "CollectionSlot"
              , p = n.forwardRef( (e, t) => {
                let {scope: r, children: n} = e
                  , o = c(f, r)
                  , s = (0,
                i.s)(t, o.collectionRef);
                return (0,
                l.jsx)(a.DX, {
                    ref: s,
                    children: n
                })
            }
            );
            p.displayName = f;
            let m = e + "CollectionItemSlot"
              , v = "data-radix-collection-item"
              , h = n.forwardRef( (e, t) => {
                let {scope: r, children: o, ...s} = e
                  , u = n.useRef(null)
                  , d = (0,
                i.s)(t, u)
                  , f = c(m, r);
                return n.useEffect( () => (f.itemMap.set(u, {
                    ref: u,
                    ...s
                }),
                () => void f.itemMap.delete(u))),
                (0,
                l.jsx)(a.DX, {
                    [v]: "",
                    ref: d,
                    children: o
                })
            }
            );
            return h.displayName = m,
            [{
                Provider: d,
                Slot: p,
                ItemSlot: h
            }, function(t) {
                let r = c(e + "CollectionConsumer", t);
                return n.useCallback( () => {
                    let e = r.collectionRef.current;
                    if (!e)
                        return [];
                    let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                    return Array.from(r.itemMap.values()).sort( (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                }
                , [r.collectionRef, r.itemMap])
            }
            , s]
        }
    }
    ,
    2293: (e, t, r) => {
        r.d(t, {
            Oh: () => i
        });
        var n = r(2115)
          , o = 0;
        function i() {
            n.useEffect( () => {
                var e, t;
                let r = document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin", null !== (e = r[0]) && void 0 !== e ? e : a()),
                document.body.insertAdjacentElement("beforeend", null !== (t = r[1]) && void 0 !== t ? t : a()),
                o++,
                () => {
                    1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()),
                    o--
                }
            }
            , [])
        }
        function a() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""),
            e.tabIndex = 0,
            e.style.outline = "none",
            e.style.opacity = "0",
            e.style.position = "fixed",
            e.style.pointerEvents = "none",
            e
        }
    }
    ,
    2464: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = r(8229)._(r(2115)).default.createContext({})
    }
    ,
    2564: (e, t, r) => {
        r.d(t, {
            b: () => l,
            s: () => a
        });
        var n = r(2115)
          , o = r(3655)
          , i = r(5155)
          , a = n.forwardRef( (e, t) => (0,
        i.jsx)(o.sG.span, {
            ...e,
            ref: t,
            style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style
            }
        }));
        a.displayName = "VisuallyHidden";
        var l = a
    }
    ,
    2596: (e, t, r) => {
        r.d(t, {
            $: () => n
        });
        function n() {
            for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
                (e = arguments[r]) && (t = function e(t) {
                    var r, n, o = "";
                    if ("string" == typeof t || "number" == typeof t)
                        o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var i = t.length;
                            for (r = 0; r < i; r++)
                                t[r] && (n = e(t[r])) && (o && (o += " "),
                                o += n)
                        } else
                            for (n in t)
                                t[n] && (o && (o += " "),
                                o += n)
                    }
                    return o
                }(e)) && (n && (n += " "),
                n += t);
            return n
        }
    }
    ,
    2712: (e, t, r) => {
        r.d(t, {
            N: () => o
        });
        var n = r(2115)
          , o = globalThis?.document ? n.useLayoutEffect : () => {}
    }
    ,
    2757: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            formatUrl: function() {
                return i
            },
            formatWithValidation: function() {
                return l
            },
            urlObjectKeys: function() {
                return a
            }
        });
        let n = r(6966)._(r(8859))
          , o = /https?|ftp|gopher|file/;
        function i(e) {
            let {auth: t, hostname: r} = e
              , i = e.protocol || ""
              , a = e.pathname || ""
              , l = e.hash || ""
              , s = e.query || ""
              , u = !1;
            t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
            e.host ? u = t + e.host : r && (u = t + (~r.indexOf(":") ? "[" + r + "]" : r),
            e.port && (u += ":" + e.port)),
            s && "object" == typeof s && (s = String(n.urlQueryToSearchParams(s)));
            let c = e.search || s && "?" + s || "";
            return i && !i.endsWith(":") && (i += ":"),
            e.slashes || (!i || o.test(i)) && !1 !== u ? (u = "//" + (u || ""),
            a && "/" !== a[0] && (a = "/" + a)) : u || (u = ""),
            l && "#" !== l[0] && (l = "#" + l),
            c && "?" !== c[0] && (c = "?" + c),
            "" + i + u + (a = a.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + l
        }
        let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function l(e) {
            return i(e)
        }
    }
    ,
    3052: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        let n = (0,
        r(9946).A)("ChevronRight", [["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]])
    }
    ,
    3063: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return w
            }
        });
        let n = r(8229)
          , o = r(6966)
          , i = r(5155)
          , a = o._(r(2115))
          , l = n._(r(7650))
          , s = n._(r(5564))
          , u = r(8883)
          , c = r(5840)
          , d = r(6752);
        r(3230);
        let f = r(901)
          , p = n._(r(1193))
          , m = r(6654)
          , v = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
        };
        function h(e, t, r, n, o, i, a) {
            let l = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l,
            ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && o(!0),
                    null == r ? void 0 : r.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let n = !1
                          , o = !1;
                        r.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => n,
                            isPropagationStopped: () => o,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                n = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                o = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == n ? void 0 : n.current) && n.current(e)
                }
            }
            ))
        }
        function g(e) {
            return a.use ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        let y = (0,
        a.forwardRef)( (e, t) => {
            let {src: r, srcSet: n, sizes: o, height: l, width: s, decoding: u, className: c, style: d, fetchPriority: f, placeholder: p, loading: v, unoptimized: y, fill: b, onLoadRef: w, onLoadingCompleteRef: x, setBlurComplete: E, setShowAltText: C, sizesInput: R, onLoad: j, onError: k, ...P} = e
              , S = (0,
            a.useCallback)(e => {
                e && (k && (e.src = e.src),
                e.complete && h(e, p, w, x, E, y, R))
            }
            , [r, p, w, x, E, k, y, R])
              , M = (0,
            m.useMergedRef)(t, S);
            return (0,
            i.jsx)("img", {
                ...P,
                ...g(f),
                loading: v,
                width: s,
                height: l,
                decoding: u,
                "data-nimg": b ? "fill" : "1",
                className: c,
                style: d,
                sizes: o,
                srcSet: n,
                src: r,
                ref: M,
                onLoad: e => {
                    h(e.currentTarget, p, w, x, E, y, R)
                }
                ,
                onError: e => {
                    C(!0),
                    "empty" !== p && E(!0),
                    k && k(e)
                }
            })
        }
        );
        function b(e) {
            let {isAppRouter: t, imgAttributes: r} = e
              , n = {
                as: "image",
                imageSrcSet: r.srcSet,
                imageSizes: r.sizes,
                crossOrigin: r.crossOrigin,
                referrerPolicy: r.referrerPolicy,
                ...g(r.fetchPriority)
            };
            return t && l.default.preload ? (l.default.preload(r.src, n),
            null) : (0,
            i.jsx)(s.default, {
                children: (0,
                i.jsx)("link", {
                    rel: "preload",
                    href: r.srcSet ? void 0 : r.src,
                    ...n
                }, "__nimg-" + r.src + r.srcSet + r.sizes)
            })
        }
        let w = (0,
        a.forwardRef)( (e, t) => {
            let r = (0,
            a.useContext)(f.RouterContext)
              , n = (0,
            a.useContext)(d.ImageConfigContext)
              , o = (0,
            a.useMemo)( () => {
                var e;
                let t = v || n || c.imageConfigDefault
                  , r = [...t.deviceSizes, ...t.imageSizes].sort( (e, t) => e - t)
                  , o = t.deviceSizes.sort( (e, t) => e - t)
                  , i = null == (e = t.qualities) ? void 0 : e.sort( (e, t) => e - t);
                return {
                    ...t,
                    allSizes: r,
                    deviceSizes: o,
                    qualities: i
                }
            }
            , [n])
              , {onLoad: l, onLoadingComplete: s} = e
              , m = (0,
            a.useRef)(l);
            (0,
            a.useEffect)( () => {
                m.current = l
            }
            , [l]);
            let h = (0,
            a.useRef)(s);
            (0,
            a.useEffect)( () => {
                h.current = s
            }
            , [s]);
            let[g,w] = (0,
            a.useState)(!1)
              , [x,E] = (0,
            a.useState)(!1)
              , {props: C, meta: R} = (0,
            u.getImgProps)(e, {
                defaultLoader: p.default,
                imgConf: o,
                blurComplete: g,
                showAltText: x
            });
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(y, {
                    ...C,
                    unoptimized: R.unoptimized,
                    placeholder: R.placeholder,
                    fill: R.fill,
                    onLoadRef: m,
                    onLoadingCompleteRef: h,
                    setBlurComplete: w,
                    setShowAltText: E,
                    sizesInput: e.sizes,
                    ref: t
                }), R.priority ? (0,
                i.jsx)(b, {
                    isAppRouter: !r,
                    imgAttributes: C
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    3509: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        let n = (0,
        r(9946).A)("Moon", [["path", {
            d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
            key: "a7tn18"
        }]])
    }
    ,
    3655: (e, t, r) => {
        r.d(t, {
            hO: () => s,
            sG: () => l
        });
        var n = r(2115)
          , o = r(7650)
          , i = r(9708)
          , a = r(5155)
          , l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce( (e, t) => {
            let r = n.forwardRef( (e, r) => {
                let {asChild: n, ...o} = e
                  , l = n ? i.DX : t;
                return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0,
                a.jsx)(l, {
                    ...o,
                    ref: r
                })
            }
            );
            return r.displayName = `Primitive.${t}`,
            {
                ...e,
                [t]: r
            }
        }
        , {});
        function s(e, t) {
            e && o.flushSync( () => e.dispatchEvent(t))
        }
    }
    ,
    3795: (e, t, r) => {
        r.d(t, {
            A: () => V
        });
        var n, o = function() {
            return (o = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        };
        function i(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
            return r
        }
        Object.create;
        Object.create;
        var a = ("function" == typeof SuppressedError && SuppressedError,
        r(2115))
          , l = "right-scroll-bar-position"
          , s = "width-before-scroll-bar";
        function u(e, t) {
            return "function" == typeof e ? e(t) : e && (e.current = t),
            e
        }
        var c = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect
          , d = new WeakMap;
        function f(e) {
            return e
        }
        var p = function(e) {
            void 0 === e && (e = {});
            var t, r, n, i, a = (t = null,
            void 0 === r && (r = f),
            n = [],
            i = !1,
            {
                read: function() {
                    if (i)
                        throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                    return n.length ? n[n.length - 1] : null
                },
                useMedium: function(e) {
                    var t = r(e, i);
                    return n.push(t),
                    function() {
                        n = n.filter(function(e) {
                            return e !== t
                        })
                    }
                },
                assignSyncMedium: function(e) {
                    for (i = !0; n.length; ) {
                        var t = n;
                        n = [],
                        t.forEach(e)
                    }
                    n = {
                        push: function(t) {
                            return e(t)
                        },
                        filter: function() {
                            return n
                        }
                    }
                },
                assignMedium: function(e) {
                    i = !0;
                    var t = [];
                    if (n.length) {
                        var r = n;
                        n = [],
                        r.forEach(e),
                        t = n
                    }
                    var o = function() {
                        var r = t;
                        t = [],
                        r.forEach(e)
                    }
                      , a = function() {
                        return Promise.resolve().then(o)
                    };
                    a(),
                    n = {
                        push: function(e) {
                            t.push(e),
                            a()
                        },
                        filter: function(e) {
                            return t = t.filter(e),
                            n
                        }
                    }
                }
            });
            return a.options = o({
                async: !0,
                ssr: !1
            }, e),
            a
        }()
          , m = function() {}
          , v = a.forwardRef(function(e, t) {
            var r, n, l, s, f = a.useRef(null), v = a.useState({
                onScrollCapture: m,
                onWheelCapture: m,
                onTouchMoveCapture: m
            }), h = v[0], g = v[1], y = e.forwardProps, b = e.children, w = e.className, x = e.removeScrollBar, E = e.enabled, C = e.shards, R = e.sideCar, j = e.noRelative, k = e.noIsolation, P = e.inert, S = e.allowPinchZoom, M = e.as, O = e.gapMode, N = i(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), A = (r = [f, t],
            n = function(e) {
                return r.forEach(function(t) {
                    return u(t, e)
                })
            }
            ,
            (l = (0,
            a.useState)(function() {
                return {
                    value: null,
                    callback: n,
                    facade: {
                        get current() {
                            return l.value
                        },
                        set current(value) {
                            var e = l.value;
                            e !== value && (l.value = value,
                            l.callback(value, e))
                        }
                    }
                }
            })[0]).callback = n,
            s = l.facade,
            c(function() {
                var e = d.get(s);
                if (e) {
                    var t = new Set(e)
                      , n = new Set(r)
                      , o = s.current;
                    t.forEach(function(e) {
                        n.has(e) || u(e, null)
                    }),
                    n.forEach(function(e) {
                        t.has(e) || u(e, o)
                    })
                }
                d.set(s, r)
            }, [r]),
            s), T = o(o({}, N), h);
            return a.createElement(a.Fragment, null, E && a.createElement(R, {
                sideCar: p,
                removeScrollBar: x,
                shards: C,
                noRelative: j,
                noIsolation: k,
                inert: P,
                setCallbacks: g,
                allowPinchZoom: !!S,
                lockRef: f,
                gapMode: O
            }), y ? a.cloneElement(a.Children.only(b), o(o({}, T), {
                ref: A
            })) : a.createElement(void 0 === M ? "div" : M, o({}, T, {
                className: w,
                ref: A
            }), b))
        });
        v.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        v.classNames = {
            fullWidth: s,
            zeroRight: l
        };
        var h = function(e) {
            var t = e.sideCar
              , r = i(e, ["sideCar"]);
            if (!t)
                throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var n = t.read();
            if (!n)
                throw Error("Sidecar medium not found");
            return a.createElement(n, o({}, r))
        };
        h.isSideCarExport = !0;
        var g = function() {
            var e = 0
              , t = null;
            return {
                add: function(o) {
                    if (0 == e && (t = function() {
                        if (!document)
                            return null;
                        var e = document.createElement("style");
                        e.type = "text/css";
                        var t = n || r.nc;
                        return t && e.setAttribute("nonce", t),
                        e
                    }())) {
                        var i, a;
                        (i = t).styleSheet ? i.styleSheet.cssText = o : i.appendChild(document.createTextNode(o)),
                        a = t,
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                    }
                    e++
                },
                remove: function() {
                    --e || !t || (t.parentNode && t.parentNode.removeChild(t),
                    t = null)
                }
            }
        }
          , y = function() {
            var e = g();
            return function(t, r) {
                a.useEffect(function() {
                    return e.add(t),
                    function() {
                        e.remove()
                    }
                }, [t && r])
            }
        }
          , b = function() {
            var e = y();
            return function(t) {
                return e(t.styles, t.dynamic),
                null
            }
        }
          , w = {
            left: 0,
            top: 0,
            right: 0,
            gap: 0
        }
          , x = function(e) {
            return parseInt(e || "", 10) || 0
        }
          , E = function(e) {
            var t = window.getComputedStyle(document.body)
              , r = t["padding" === e ? "paddingLeft" : "marginLeft"]
              , n = t["padding" === e ? "paddingTop" : "marginTop"]
              , o = t["padding" === e ? "paddingRight" : "marginRight"];
            return [x(r), x(n), x(o)]
        }
          , C = function(e) {
            if (void 0 === e && (e = "margin"),
            "undefined" == typeof window)
                return w;
            var t = E(e)
              , r = document.documentElement.clientWidth
              , n = window.innerWidth;
            return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, n - r + t[2] - t[0])
            }
        }
          , R = b()
          , j = "data-scroll-locked"
          , k = function(e, t, r, n) {
            var o = e.left
              , i = e.top
              , a = e.right
              , u = e.gap;
            return void 0 === r && (r = "margin"),
            "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(n, ";\n   padding-right: ").concat(u, "px ").concat(n, ";\n  }\n  body[").concat(j, "] {\n    overflow: hidden ").concat(n, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(n, ";"), "margin" === r && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(n, ";\n    "), "padding" === r && "padding-right: ".concat(u, "px ").concat(n, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(l, " {\n    right: ").concat(u, "px ").concat(n, ";\n  }\n  \n  .").concat(s, " {\n    margin-right: ").concat(u, "px ").concat(n, ";\n  }\n  \n  .").concat(l, " .").concat(l, " {\n    right: 0 ").concat(n, ";\n  }\n  \n  .").concat(s, " .").concat(s, " {\n    margin-right: 0 ").concat(n, ";\n  }\n  \n  body[").concat(j, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
        }
          , P = function() {
            var e = parseInt(document.body.getAttribute(j) || "0", 10);
            return isFinite(e) ? e : 0
        }
          , S = function() {
            a.useEffect(function() {
                return document.body.setAttribute(j, (P() + 1).toString()),
                function() {
                    var e = P() - 1;
                    e <= 0 ? document.body.removeAttribute(j) : document.body.setAttribute(j, e.toString())
                }
            }, [])
        }
          , M = function(e) {
            var t = e.noRelative
              , r = e.noImportant
              , n = e.gapMode
              , o = void 0 === n ? "margin" : n;
            S();
            var i = a.useMemo(function() {
                return C(o)
            }, [o]);
            return a.createElement(R, {
                styles: k(i, !t, o, r ? "" : "!important")
            })
        }
          , O = !1;
        if ("undefined" != typeof window)
            try {
                var N = Object.defineProperty({}, "passive", {
                    get: function() {
                        return O = !0,
                        !0
                    }
                });
                window.addEventListener("test", N, N),
                window.removeEventListener("test", N, N)
            } catch (e) {
                O = !1
            }
        var A = !!O && {
            passive: !1
        }
          , T = function(e, t) {
            if (!(e instanceof Element))
                return !1;
            var r = window.getComputedStyle(e);
            return "hidden" !== r[t] && (r.overflowY !== r.overflowX || "TEXTAREA" === e.tagName || "visible" !== r[t])
        }
          , _ = function(e, t) {
            var r = t.ownerDocument
              , n = t;
            do {
                if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host),
                D(e, n)) {
                    var o = L(e, n);
                    if (o[1] > o[2])
                        return !0
                }
                n = n.parentNode
            } while (n && n !== r.body);
            return !1
        }
          , D = function(e, t) {
            return "v" === e ? T(t, "overflowY") : T(t, "overflowX")
        }
          , L = function(e, t) {
            return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
        }
          , I = function(e, t, r, n, o) {
            var i, a = (i = window.getComputedStyle(t).direction,
            "h" === e && "rtl" === i ? -1 : 1), l = a * n, s = r.target, u = t.contains(s), c = !1, d = l > 0, f = 0, p = 0;
            do {
                var m = L(e, s)
                  , v = m[0]
                  , h = m[1] - m[2] - a * v;
                (v || h) && D(e, s) && (f += h,
                p += v),
                s = s.parentNode.host || s.parentNode
            } while (!u && s !== document.body || u && (t.contains(s) || t === s));
            return d && (o && 1 > Math.abs(f) || !o && l > f) ? c = !0 : !d && (o && 1 > Math.abs(p) || !o && -l > p) && (c = !0),
            c
        }
          , F = function(e) {
            return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        }
          , z = function(e) {
            return [e.deltaX, e.deltaY]
        }
          , W = function(e) {
            return e && "current"in e ? e.current : e
        }
          , G = 0
          , B = [];
        let K = (p.useMedium(function(e) {
            var t = a.useRef([])
              , r = a.useRef([0, 0])
              , n = a.useRef()
              , o = a.useState(G++)[0]
              , i = a.useState(b)[0]
              , l = a.useRef(e);
            a.useEffect(function() {
                l.current = e
            }, [e]),
            a.useEffect(function() {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(o));
                    var t = (function(e, t, r) {
                        if (r || 2 == arguments.length)
                            for (var n, o = 0, i = t.length; o < i; o++)
                                !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)),
                                n[o] = t[o]);
                        return e.concat(n || Array.prototype.slice.call(t))
                    }
                    )([e.lockRef.current], (e.shards || []).map(W), !0).filter(Boolean);
                    return t.forEach(function(e) {
                        return e.classList.add("allow-interactivity-".concat(o))
                    }),
                    function() {
                        document.body.classList.remove("block-interactivity-".concat(o)),
                        t.forEach(function(e) {
                            return e.classList.remove("allow-interactivity-".concat(o))
                        })
                    }
                }
            }, [e.inert, e.lockRef.current, e.shards]);
            var s = a.useCallback(function(e, t) {
                if ("touches"in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey)
                    return !l.current.allowPinchZoom;
                var o, i = F(e), a = r.current, s = "deltaX"in e ? e.deltaX : a[0] - i[0], u = "deltaY"in e ? e.deltaY : a[1] - i[1], c = e.target, d = Math.abs(s) > Math.abs(u) ? "h" : "v";
                if ("touches"in e && "h" === d && "range" === c.type)
                    return !1;
                var f = _(d, c);
                if (!f)
                    return !0;
                if (f ? o = d : (o = "v" === d ? "h" : "v",
                f = _(d, c)),
                !f)
                    return !1;
                if (!n.current && "changedTouches"in e && (s || u) && (n.current = o),
                !o)
                    return !0;
                var p = n.current || o;
                return I(p, t, e, "h" === p ? s : u, !0)
            }, [])
              , u = a.useCallback(function(e) {
                if (B.length && B[B.length - 1] === i) {
                    var r = "deltaY"in e ? z(e) : F(e)
                      , n = t.current.filter(function(t) {
                        var n;
                        return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (n = t.delta)[0] === r[0] && n[1] === r[1]
                    })[0];
                    if (n && n.should) {
                        e.cancelable && e.preventDefault();
                        return
                    }
                    if (!n) {
                        var o = (l.current.shards || []).map(W).filter(Boolean).filter(function(t) {
                            return t.contains(e.target)
                        });
                        (o.length > 0 ? s(e, o[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault()
                    }
                }
            }, [])
              , c = a.useCallback(function(e, r, n, o) {
                var i = {
                    name: e,
                    delta: r,
                    target: n,
                    should: o,
                    shadowParent: function(e) {
                        for (var t = null; null !== e; )
                            e instanceof ShadowRoot && (t = e.host,
                            e = e.host),
                            e = e.parentNode;
                        return t
                    }(n)
                };
                t.current.push(i),
                setTimeout(function() {
                    t.current = t.current.filter(function(e) {
                        return e !== i
                    })
                }, 1)
            }, [])
              , d = a.useCallback(function(e) {
                r.current = F(e),
                n.current = void 0
            }, [])
              , f = a.useCallback(function(t) {
                c(t.type, z(t), t.target, s(t, e.lockRef.current))
            }, [])
              , p = a.useCallback(function(t) {
                c(t.type, F(t), t.target, s(t, e.lockRef.current))
            }, []);
            a.useEffect(function() {
                return B.push(i),
                e.setCallbacks({
                    onScrollCapture: f,
                    onWheelCapture: f,
                    onTouchMoveCapture: p
                }),
                document.addEventListener("wheel", u, A),
                document.addEventListener("touchmove", u, A),
                document.addEventListener("touchstart", d, A),
                function() {
                    B = B.filter(function(e) {
                        return e !== i
                    }),
                    document.removeEventListener("wheel", u, A),
                    document.removeEventListener("touchmove", u, A),
                    document.removeEventListener("touchstart", d, A)
                }
            }, []);
            var m = e.removeScrollBar
              , v = e.inert;
            return a.createElement(a.Fragment, null, v ? a.createElement(i, {
                styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
            }) : null, m ? a.createElement(M, {
                noRelative: e.noRelative,
                gapMode: e.gapMode
            }) : null)
        }),
        h);
        var U = a.forwardRef(function(e, t) {
            return a.createElement(v, o({}, e, {
                ref: t,
                sideCar: K
            }))
        });
        U.classNames = v.classNames;
        let V = U
    }
    ,
    4315: (e, t, r) => {
        r.d(t, {
            jH: () => i
        });
        var n = r(2115);
        r(5155);
        var o = n.createContext(void 0);
        function i(e) {
            let t = n.useContext(o);
            return e || t || "ltr"
        }
    }
    ,
    4378: (e, t, r) => {
        r.d(t, {
            Z: () => s
        });
        var n = r(2115)
          , o = r(7650)
          , i = r(3655)
          , a = r(2712)
          , l = r(5155)
          , s = n.forwardRef( (e, t) => {
            var r, s;
            let {container: u, ...c} = e
              , [d,f] = n.useState(!1);
            (0,
            a.N)( () => f(!0), []);
            let p = u || d && (null === (s = globalThis) || void 0 === s ? void 0 : null === (r = s.document) || void 0 === r ? void 0 : r.body);
            return p ? o.createPortal((0,
            l.jsx)(i.sG.div, {
                ...c,
                ref: t
            }), p) : null
        }
        );
        s.displayName = "Portal"
    }
    ,
    4416: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        let n = (0,
        r(9946).A)("X", [["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }], ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]])
    }
    ,
    5029: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let n = r(2115)
          , o = n.useLayoutEffect
          , i = n.useEffect;
        function a(e) {
            let {headManager: t, reduceComponentsToState: r} = e;
            function a() {
                if (t && t.mountedInstances) {
                    let o = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(r(o, e))
                }
            }
            return o( () => {
                var r;
                return null == t || null == (r = t.mountedInstances) || r.add(e.children),
                () => {
                    var r;
                    null == t || null == (r = t.mountedInstances) || r.delete(e.children)
                }
            }
            ),
            o( () => (t && (t._pendingUpdate = a),
            () => {
                t && (t._pendingUpdate = a)
            }
            )),
            i( () => (t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            () => {
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    }
    ,
    5100: (e, t) => {
        function r(e) {
            let {widthInt: t, heightInt: r, blurWidth: n, blurHeight: o, blurDataURL: i, objectFit: a} = e
              , l = n ? 40 * n : t
              , s = o ? 40 * o : r
              , u = l && s ? "viewBox='0 0 " + l + " " + s + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    }
    ,
    5185: (e, t, r) => {
        r.d(t, {
            m: () => n
        });
        function n(e, t, {checkForDefaultPrevented: r=!0}={}) {
            return function(n) {
                if (e?.(n),
                !1 === r || !n.defaultPrevented)
                    return t?.(n)
            }
        }
    }
    ,
    5196: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        let n = (0,
        r(9946).A)("Check", [["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]])
    }
    ,
    5452: (e, t, r) => {
        r.d(t, {
            UC: () => et,
            VY: () => en,
            ZL: () => Q,
            bL: () => Z,
            bm: () => eo,
            hE: () => er,
            hJ: () => ee,
            l9: () => J
        });
        var n = r(2115)
          , o = r(5185)
          , i = r(6101)
          , a = r(6081)
          , l = r(1285)
          , s = r(5845)
          , u = r(9178)
          , c = r(7900)
          , d = r(4378)
          , f = r(8905)
          , p = r(3655)
          , m = r(2293)
          , v = r(3795)
          , h = r(8168)
          , g = r(9708)
          , y = r(5155)
          , b = "Dialog"
          , [w,x] = (0,
        a.A)(b)
          , [E,C] = w(b)
          , R = e => {
            let {__scopeDialog: t, children: r, open: o, defaultOpen: i, onOpenChange: a, modal: u=!0} = e
              , c = n.useRef(null)
              , d = n.useRef(null)
              , [f=!1,p] = (0,
            s.i)({
                prop: o,
                defaultProp: i,
                onChange: a
            });
            return (0,
            y.jsx)(E, {
                scope: t,
                triggerRef: c,
                contentRef: d,
                contentId: (0,
                l.B)(),
                titleId: (0,
                l.B)(),
                descriptionId: (0,
                l.B)(),
                open: f,
                onOpenChange: p,
                onOpenToggle: n.useCallback( () => p(e => !e), [p]),
                modal: u,
                children: r
            })
        }
        ;
        R.displayName = b;
        var j = "DialogTrigger"
          , k = n.forwardRef( (e, t) => {
            let {__scopeDialog: r, ...n} = e
              , a = C(j, r)
              , l = (0,
            i.s)(t, a.triggerRef);
            return (0,
            y.jsx)(p.sG.button, {
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": a.open,
                "aria-controls": a.contentId,
                "data-state": V(a.open),
                ...n,
                ref: l,
                onClick: (0,
                o.m)(e.onClick, a.onOpenToggle)
            })
        }
        );
        k.displayName = j;
        var P = "DialogPortal"
          , [S,M] = w(P, {
            forceMount: void 0
        })
          , O = e => {
            let {__scopeDialog: t, forceMount: r, children: o, container: i} = e
              , a = C(P, t);
            return (0,
            y.jsx)(S, {
                scope: t,
                forceMount: r,
                children: n.Children.map(o, e => (0,
                y.jsx)(f.C, {
                    present: r || a.open,
                    children: (0,
                    y.jsx)(d.Z, {
                        asChild: !0,
                        container: i,
                        children: e
                    })
                }))
            })
        }
        ;
        O.displayName = P;
        var N = "DialogOverlay"
          , A = n.forwardRef( (e, t) => {
            let r = M(N, e.__scopeDialog)
              , {forceMount: n=r.forceMount, ...o} = e
              , i = C(N, e.__scopeDialog);
            return i.modal ? (0,
            y.jsx)(f.C, {
                present: n || i.open,
                children: (0,
                y.jsx)(T, {
                    ...o,
                    ref: t
                })
            }) : null
        }
        );
        A.displayName = N;
        var T = n.forwardRef( (e, t) => {
            let {__scopeDialog: r, ...n} = e
              , o = C(N, r);
            return (0,
            y.jsx)(v.A, {
                as: g.DX,
                allowPinchZoom: !0,
                shards: [o.contentRef],
                children: (0,
                y.jsx)(p.sG.div, {
                    "data-state": V(o.open),
                    ...n,
                    ref: t,
                    style: {
                        pointerEvents: "auto",
                        ...n.style
                    }
                })
            })
        }
        )
          , _ = "DialogContent"
          , D = n.forwardRef( (e, t) => {
            let r = M(_, e.__scopeDialog)
              , {forceMount: n=r.forceMount, ...o} = e
              , i = C(_, e.__scopeDialog);
            return (0,
            y.jsx)(f.C, {
                present: n || i.open,
                children: i.modal ? (0,
                y.jsx)(L, {
                    ...o,
                    ref: t
                }) : (0,
                y.jsx)(I, {
                    ...o,
                    ref: t
                })
            })
        }
        );
        D.displayName = _;
        var L = n.forwardRef( (e, t) => {
            let r = C(_, e.__scopeDialog)
              , a = n.useRef(null)
              , l = (0,
            i.s)(t, r.contentRef, a);
            return n.useEffect( () => {
                let e = a.current;
                if (e)
                    return (0,
                    h.Eq)(e)
            }
            , []),
            (0,
            y.jsx)(F, {
                ...e,
                ref: l,
                trapFocus: r.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0,
                o.m)(e.onCloseAutoFocus, e => {
                    var t;
                    e.preventDefault(),
                    null === (t = r.triggerRef.current) || void 0 === t || t.focus()
                }
                ),
                onPointerDownOutside: (0,
                o.m)(e.onPointerDownOutside, e => {
                    let t = e.detail.originalEvent
                      , r = 0 === t.button && !0 === t.ctrlKey;
                    (2 === t.button || r) && e.preventDefault()
                }
                ),
                onFocusOutside: (0,
                o.m)(e.onFocusOutside, e => e.preventDefault())
            })
        }
        )
          , I = n.forwardRef( (e, t) => {
            let r = C(_, e.__scopeDialog)
              , o = n.useRef(!1)
              , i = n.useRef(!1);
            return (0,
            y.jsx)(F, {
                ...e,
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                onCloseAutoFocus: t => {
                    var n, a;
                    null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, t),
                    t.defaultPrevented || (o.current || null === (a = r.triggerRef.current) || void 0 === a || a.focus(),
                    t.preventDefault()),
                    o.current = !1,
                    i.current = !1
                }
                ,
                onInteractOutside: t => {
                    var n, a;
                    null === (n = e.onInteractOutside) || void 0 === n || n.call(e, t),
                    t.defaultPrevented || (o.current = !0,
                    "pointerdown" !== t.detail.originalEvent.type || (i.current = !0));
                    let l = t.target;
                    (null === (a = r.triggerRef.current) || void 0 === a ? void 0 : a.contains(l)) && t.preventDefault(),
                    "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
                }
            })
        }
        )
          , F = n.forwardRef( (e, t) => {
            let {__scopeDialog: r, trapFocus: o, onOpenAutoFocus: a, onCloseAutoFocus: l, ...s} = e
              , d = C(_, r)
              , f = n.useRef(null)
              , p = (0,
            i.s)(t, f);
            return (0,
            m.Oh)(),
            (0,
            y.jsxs)(y.Fragment, {
                children: [(0,
                y.jsx)(c.n, {
                    asChild: !0,
                    loop: !0,
                    trapped: o,
                    onMountAutoFocus: a,
                    onUnmountAutoFocus: l,
                    children: (0,
                    y.jsx)(u.qW, {
                        role: "dialog",
                        id: d.contentId,
                        "aria-describedby": d.descriptionId,
                        "aria-labelledby": d.titleId,
                        "data-state": V(d.open),
                        ...s,
                        ref: p,
                        onDismiss: () => d.onOpenChange(!1)
                    })
                }), (0,
                y.jsxs)(y.Fragment, {
                    children: [(0,
                    y.jsx)($, {
                        titleId: d.titleId
                    }), (0,
                    y.jsx)(Y, {
                        contentRef: f,
                        descriptionId: d.descriptionId
                    })]
                })]
            })
        }
        )
          , z = "DialogTitle"
          , W = n.forwardRef( (e, t) => {
            let {__scopeDialog: r, ...n} = e
              , o = C(z, r);
            return (0,
            y.jsx)(p.sG.h2, {
                id: o.titleId,
                ...n,
                ref: t
            })
        }
        );
        W.displayName = z;
        var G = "DialogDescription"
          , B = n.forwardRef( (e, t) => {
            let {__scopeDialog: r, ...n} = e
              , o = C(G, r);
            return (0,
            y.jsx)(p.sG.p, {
                id: o.descriptionId,
                ...n,
                ref: t
            })
        }
        );
        B.displayName = G;
        var K = "DialogClose"
          , U = n.forwardRef( (e, t) => {
            let {__scopeDialog: r, ...n} = e
              , i = C(K, r);
            return (0,
            y.jsx)(p.sG.button, {
                type: "button",
                ...n,
                ref: t,
                onClick: (0,
                o.m)(e.onClick, () => i.onOpenChange(!1))
            })
        }
        );
        function V(e) {
            return e ? "open" : "closed"
        }
        U.displayName = K;
        var H = "DialogTitleWarning"
          , [q,X] = (0,
        a.q)(H, {
            contentName: _,
            titleName: z,
            docsSlug: "dialog"
        })
          , $ = e => {
            let {titleId: t} = e
              , r = X(H)
              , o = "`".concat(r.contentName, "` requires a `").concat(r.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(r.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(r.docsSlug);
            return n.useEffect( () => {
                t && !document.getElementById(t) && console.error(o)
            }
            , [o, t]),
            null
        }
          , Y = e => {
            let {contentRef: t, descriptionId: r} = e
              , o = X("DialogDescriptionWarning")
              , i = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName, "}.");
            return n.useEffect( () => {
                var e;
                let n = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                r && n && !document.getElementById(r) && console.warn(i)
            }
            , [i, t, r]),
            null
        }
          , Z = R
          , J = k
          , Q = O
          , ee = A
          , et = D
          , er = W
          , en = B
          , eo = U
    }
    ,
    5503: (e, t, r) => {
        r.d(t, {
            Z: () => o
        });
        var n = r(2115);
        function o(e) {
            let t = n.useRef({
                value: e,
                previous: e
            });
            return n.useMemo( () => (t.current.value !== e && (t.current.previous = t.current.value,
            t.current.value = e),
            t.current.previous), [e])
        }
    }
    ,
    5564: (e, t, r) => {
        var n = r(9509);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            default: function() {
                return h
            },
            defaultHead: function() {
                return f
            }
        });
        let o = r(8229)
          , i = r(6966)
          , a = r(5155)
          , l = i._(r(2115))
          , s = o._(r(5029))
          , u = r(2464)
          , c = r(2830)
          , d = r(7544);
        function f(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            a.jsx)("meta", {
                charSet: "utf-8"
            }, "charset")];
            return e || t.push((0,
            a.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            }, "viewport")),
            t
        }
        function p(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === l.default.Fragment ? e.concat(l.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        r(3230);
        let m = ["name", "httpEquiv", "charSet", "itemProp"];
        function v(e, t) {
            let {inAmpMode: r} = t;
            return e.reduce(p, []).reverse().concat(f(r).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , r = new Set
                  , n = {};
                return o => {
                    let i = !0
                      , a = !1;
                    if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                        a = !0;
                        let t = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(t) ? i = !1 : e.add(t)
                    }
                    switch (o.type) {
                    case "title":
                    case "base":
                        t.has(o.type) ? i = !1 : t.add(o.type);
                        break;
                    case "meta":
                        for (let e = 0, t = m.length; e < t; e++) {
                            let t = m[e];
                            if (o.props.hasOwnProperty(t)) {
                                if ("charSet" === t)
                                    r.has(t) ? i = !1 : r.add(t);
                                else {
                                    let e = o.props[t]
                                      , r = n[t] || new Set;
                                    ("name" !== t || !a) && r.has(e) ? i = !1 : (r.add(e),
                                    n[t] = r)
                                }
                            }
                        }
                    }
                    return i
                }
            }()).reverse().map( (e, t) => {
                let o = e.key || t;
                if (n.env.__NEXT_OPTIMIZE_FONTS && !r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                    let t = {
                        ...e.props || {}
                    };
                    return t["data-href"] = t.href,
                    t.href = void 0,
                    t["data-optimized-fonts"] = !0,
                    l.default.cloneElement(e, t)
                }
                return l.default.cloneElement(e, {
                    key: o
                })
            }
            )
        }
        let h = function(e) {
            let {children: t} = e
              , r = (0,
            l.useContext)(u.AmpStateContext)
              , n = (0,
            l.useContext)(c.HeadManagerContext);
            return (0,
            a.jsx)(s.default, {
                reduceComponentsToState: v,
                headManager: n,
                inAmpMode: (0,
                d.isInAmpMode)(r),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    5840: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            VALID_LOADERS: function() {
                return r
            },
            imageConfigDefault: function() {
                return n
            }
        });
        let r = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: void 0,
            unoptimized: !1
        }
    }
    ,
    5845: (e, t, r) => {
        r.d(t, {
            i: () => i
        });
        var n = r(2115)
          , o = r(9033);
        function i({prop: e, defaultProp: t, onChange: r= () => {}
        }) {
            let[i,a] = function({defaultProp: e, onChange: t}) {
                let r = n.useState(e)
                  , [i] = r
                  , a = n.useRef(i)
                  , l = (0,
                o.c)(t);
                return n.useEffect( () => {
                    a.current !== i && (l(i),
                    a.current = i)
                }
                , [i, a, l]),
                r
            }({
                defaultProp: t,
                onChange: r
            })
              , l = void 0 !== e
              , s = l ? e : i
              , u = (0,
            o.c)(r);
            return [s, n.useCallback(t => {
                if (l) {
                    let r = "function" == typeof t ? t(e) : t;
                    r !== e && u(r)
                } else
                    a(t)
            }
            , [l, e, a, u])]
        }
    }
    ,
    6081: (e, t, r) => {
        r.d(t, {
            A: () => a,
            q: () => i
        });
        var n = r(2115)
          , o = r(5155);
        function i(e, t) {
            let r = n.createContext(t)
              , i = e => {
                let {children: t, ...i} = e
                  , a = n.useMemo( () => i, Object.values(i));
                return (0,
                o.jsx)(r.Provider, {
                    value: a,
                    children: t
                })
            }
            ;
            return i.displayName = e + "Provider",
            [i, function(o) {
                let i = n.useContext(r);
                if (i)
                    return i;
                if (void 0 !== t)
                    return t;
                throw Error(`\`${o}\` must be used within \`${e}\``)
            }
            ]
        }
        function a(e, t=[]) {
            let r = []
              , i = () => {
                let t = r.map(e => n.createContext(e));
                return function(r) {
                    let o = r?.[e] || t;
                    return n.useMemo( () => ({
                        [`__scope${e}`]: {
                            ...r,
                            [e]: o
                        }
                    }), [r, o])
                }
            }
            ;
            return i.scopeName = e,
            [function(t, i) {
                let a = n.createContext(i)
                  , l = r.length;
                r = [...r, i];
                let s = t => {
                    let {scope: r, children: i, ...s} = t
                      , u = r?.[e]?.[l] || a
                      , c = n.useMemo( () => s, Object.values(s));
                    return (0,
                    o.jsx)(u.Provider, {
                        value: c,
                        children: i
                    })
                }
                ;
                return s.displayName = t + "Provider",
                [s, function(r, o) {
                    let s = o?.[e]?.[l] || a
                      , u = n.useContext(s);
                    if (u)
                        return u;
                    if (void 0 !== i)
                        return i;
                    throw Error(`\`${r}\` must be used within \`${t}\``)
                }
                ]
            }
            , function(...e) {
                let t = e[0];
                if (1 === e.length)
                    return t;
                let r = () => {
                    let r = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let o = r.reduce( (t, {useScope: r, scopeName: n}) => {
                            let o = r(e)[`__scope${n}`];
                            return {
                                ...t,
                                ...o
                            }
                        }
                        , {});
                        return n.useMemo( () => ({
                            [`__scope${t.scopeName}`]: o
                        }), [o])
                    }
                }
                ;
                return r.scopeName = t.scopeName,
                r
            }(i, ...t)]
        }
    }
    ,
    6101: (e, t, r) => {
        r.d(t, {
            s: () => a,
            t: () => i
        });
        var n = r(2115);
        function o(e, t) {
            if ("function" == typeof e)
                return e(t);
            null != e && (e.current = t)
        }
        function i(...e) {
            return t => {
                let r = !1
                  , n = e.map(e => {
                    let n = o(e, t);
                    return r || "function" != typeof n || (r = !0),
                    n
                }
                );
                if (r)
                    return () => {
                        for (let t = 0; t < n.length; t++) {
                            let r = n[t];
                            "function" == typeof r ? r() : o(e[t], null)
                        }
                    }
            }
        }
        function a(...e) {
            return n.useCallback(i(...e), e)
        }
    }
    ,
    6248: (e, t, r) => {
        r.d(t, {
            Content: () => eb,
            Indicator: () => ey,
            Item: () => ev,
            Link: () => eg,
            List: () => em,
            Root: () => ep,
            Trigger: () => eh,
            Viewport: () => ew
        });
        var n = r(2115)
          , o = r(7650)
          , i = r(6081)
          , a = r(5185)
          , l = r(3655)
          , s = r(5845)
          , u = r(6101)
          , c = r(4315)
          , d = r(8905)
          , f = r(1285)
          , p = r(2284)
          , m = r(9178)
          , v = r(5503)
          , h = r(2712)
          , g = r(9033)
          , y = r(2564)
          , b = r(5155)
          , w = "NavigationMenu"
          , [x,E,C] = (0,
        p.N)(w)
          , [R,j,k] = (0,
        p.N)(w)
          , [P,S] = (0,
        i.A)(w, [C, k])
          , [M,O] = P(w)
          , [N,A] = P(w)
          , T = n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, value: o, onValueChange: i, defaultValue: a, delayDuration: d=200, skipDelayDuration: f=300, orientation: p="horizontal", dir: m, ...v} = e
              , [h,g] = n.useState(null)
              , y = (0,
            u.s)(t, e => g(e))
              , w = (0,
            c.jH)(m)
              , x = n.useRef(0)
              , E = n.useRef(0)
              , C = n.useRef(0)
              , [R,j] = n.useState(!0)
              , [k="",P] = (0,
            s.i)({
                prop: o,
                onChange: e => {
                    let t = f > 0;
                    "" !== e ? (window.clearTimeout(C.current),
                    t && j(!1)) : (window.clearTimeout(C.current),
                    C.current = window.setTimeout( () => j(!0), f)),
                    null == i || i(e)
                }
                ,
                defaultProp: a
            })
              , S = n.useCallback( () => {
                window.clearTimeout(E.current),
                E.current = window.setTimeout( () => P(""), 150)
            }
            , [P])
              , M = n.useCallback(e => {
                window.clearTimeout(E.current),
                P(e)
            }
            , [P])
              , O = n.useCallback(e => {
                k === e ? window.clearTimeout(E.current) : x.current = window.setTimeout( () => {
                    window.clearTimeout(E.current),
                    P(e)
                }
                , d)
            }
            , [k, P, d]);
            return n.useEffect( () => () => {
                window.clearTimeout(x.current),
                window.clearTimeout(E.current),
                window.clearTimeout(C.current)
            }
            , []),
            (0,
            b.jsx)(D, {
                scope: r,
                isRootMenu: !0,
                value: k,
                dir: w,
                orientation: p,
                rootNavigationMenu: h,
                onTriggerEnter: e => {
                    window.clearTimeout(x.current),
                    R ? O(e) : M(e)
                }
                ,
                onTriggerLeave: () => {
                    window.clearTimeout(x.current),
                    S()
                }
                ,
                onContentEnter: () => window.clearTimeout(E.current),
                onContentLeave: S,
                onItemSelect: e => {
                    P(t => t === e ? "" : e)
                }
                ,
                onItemDismiss: () => P(""),
                children: (0,
                b.jsx)(l.sG.nav, {
                    "aria-label": "Main",
                    "data-orientation": p,
                    dir: w,
                    ...v,
                    ref: y
                })
            })
        }
        );
        T.displayName = w;
        var _ = "NavigationMenuSub";
        n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, value: n, onValueChange: o, defaultValue: i, orientation: a="horizontal", ...u} = e
              , c = O(_, r)
              , [d="",f] = (0,
            s.i)({
                prop: n,
                onChange: o,
                defaultProp: i
            });
            return (0,
            b.jsx)(D, {
                scope: r,
                isRootMenu: !1,
                value: d,
                dir: c.dir,
                orientation: a,
                rootNavigationMenu: c.rootNavigationMenu,
                onTriggerEnter: e => f(e),
                onItemSelect: e => f(e),
                onItemDismiss: () => f(""),
                children: (0,
                b.jsx)(l.sG.div, {
                    "data-orientation": a,
                    ...u,
                    ref: t
                })
            })
        }
        ).displayName = _;
        var D = e => {
            let {scope: t, isRootMenu: r, rootNavigationMenu: o, dir: i, orientation: a, children: l, value: s, onItemSelect: u, onItemDismiss: c, onTriggerEnter: d, onTriggerLeave: p, onContentEnter: m, onContentLeave: h} = e
              , [y,w] = n.useState(null)
              , [E,C] = n.useState(new Map)
              , [R,j] = n.useState(null);
            return (0,
            b.jsx)(M, {
                scope: t,
                isRootMenu: r,
                rootNavigationMenu: o,
                value: s,
                previousValue: (0,
                v.Z)(s),
                baseId: (0,
                f.B)(),
                dir: i,
                orientation: a,
                viewport: y,
                onViewportChange: w,
                indicatorTrack: R,
                onIndicatorTrackChange: j,
                onTriggerEnter: (0,
                g.c)(d),
                onTriggerLeave: (0,
                g.c)(p),
                onContentEnter: (0,
                g.c)(m),
                onContentLeave: (0,
                g.c)(h),
                onItemSelect: (0,
                g.c)(u),
                onItemDismiss: (0,
                g.c)(c),
                onViewportContentChange: n.useCallback( (e, t) => {
                    C(r => (r.set(e, t),
                    new Map(r)))
                }
                , []),
                onViewportContentRemove: n.useCallback(e => {
                    C(t => t.has(e) ? (t.delete(e),
                    new Map(t)) : t)
                }
                , []),
                children: (0,
                b.jsx)(x.Provider, {
                    scope: t,
                    children: (0,
                    b.jsx)(N, {
                        scope: t,
                        items: E,
                        children: l
                    })
                })
            })
        }
          , L = "NavigationMenuList"
          , I = n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, ...n} = e
              , o = O(L, r)
              , i = (0,
            b.jsx)(l.sG.ul, {
                "data-orientation": o.orientation,
                ...n,
                ref: t
            });
            return (0,
            b.jsx)(l.sG.div, {
                style: {
                    position: "relative"
                },
                ref: o.onIndicatorTrackChange,
                children: (0,
                b.jsx)(x.Slot, {
                    scope: r,
                    children: o.isRootMenu ? (0,
                    b.jsx)(en, {
                        asChild: !0,
                        children: i
                    }) : i
                })
            })
        }
        );
        I.displayName = L;
        var F = "NavigationMenuItem"
          , [z,W] = P(F)
          , G = n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, value: o, ...i} = e
              , a = (0,
            f.B)()
              , s = n.useRef(null)
              , u = n.useRef(null)
              , c = n.useRef(null)
              , d = n.useRef( () => {}
            )
              , p = n.useRef(!1)
              , m = n.useCallback(function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "start";
                if (s.current) {
                    d.current();
                    let t = ea(s.current);
                    t.length && el("start" === e ? t : t.reverse())
                }
            }, [])
              , v = n.useCallback( () => {
                if (s.current) {
                    let e = ea(s.current);
                    e.length && (d.current = function(e) {
                        return e.forEach(e => {
                            e.dataset.tabindex = e.getAttribute("tabindex") || "",
                            e.setAttribute("tabindex", "-1")
                        }
                        ),
                        () => {
                            e.forEach(e => {
                                let t = e.dataset.tabindex;
                                e.setAttribute("tabindex", t)
                            }
                            )
                        }
                    }(e))
                }
            }
            , []);
            return (0,
            b.jsx)(z, {
                scope: r,
                value: o || a || "LEGACY_REACT_AUTO_VALUE",
                triggerRef: u,
                contentRef: s,
                focusProxyRef: c,
                wasEscapeCloseRef: p,
                onEntryKeyDown: m,
                onFocusProxyEnter: m,
                onRootContentClose: v,
                onContentFocusOutside: v,
                children: (0,
                b.jsx)(l.sG.li, {
                    ...i,
                    ref: t
                })
            })
        }
        );
        G.displayName = F;
        var B = "NavigationMenuTrigger"
          , K = n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, disabled: o, ...i} = e
              , s = O(B, e.__scopeNavigationMenu)
              , c = W(B, e.__scopeNavigationMenu)
              , d = n.useRef(null)
              , f = (0,
            u.s)(d, c.triggerRef, t)
              , p = ec(s.baseId, c.value)
              , m = ed(s.baseId, c.value)
              , v = n.useRef(!1)
              , h = n.useRef(!1)
              , g = c.value === s.value;
            return (0,
            b.jsxs)(b.Fragment, {
                children: [(0,
                b.jsx)(x.ItemSlot, {
                    scope: r,
                    value: c.value,
                    children: (0,
                    b.jsx)(ei, {
                        asChild: !0,
                        children: (0,
                        b.jsx)(l.sG.button, {
                            id: p,
                            disabled: o,
                            "data-disabled": o ? "" : void 0,
                            "data-state": eu(g),
                            "aria-expanded": g,
                            "aria-controls": m,
                            ...i,
                            ref: f,
                            onPointerEnter: (0,
                            a.m)(e.onPointerEnter, () => {
                                h.current = !1,
                                c.wasEscapeCloseRef.current = !1
                            }
                            ),
                            onPointerMove: (0,
                            a.m)(e.onPointerMove, ef( () => {
                                o || h.current || c.wasEscapeCloseRef.current || v.current || (s.onTriggerEnter(c.value),
                                v.current = !0)
                            }
                            )),
                            onPointerLeave: (0,
                            a.m)(e.onPointerLeave, ef( () => {
                                o || (s.onTriggerLeave(),
                                v.current = !1)
                            }
                            )),
                            onClick: (0,
                            a.m)(e.onClick, () => {
                                s.onItemSelect(c.value),
                                h.current = g
                            }
                            ),
                            onKeyDown: (0,
                            a.m)(e.onKeyDown, e => {
                                let t = {
                                    horizontal: "ArrowDown",
                                    vertical: "rtl" === s.dir ? "ArrowLeft" : "ArrowRight"
                                }[s.orientation];
                                g && e.key === t && (c.onEntryKeyDown(),
                                e.preventDefault())
                            }
                            )
                        })
                    })
                }), g && (0,
                b.jsxs)(b.Fragment, {
                    children: [(0,
                    b.jsx)(y.b, {
                        "aria-hidden": !0,
                        tabIndex: 0,
                        ref: c.focusProxyRef,
                        onFocus: e => {
                            let t = c.contentRef.current
                              , r = e.relatedTarget
                              , n = r === d.current
                              , o = null == t ? void 0 : t.contains(r);
                            (n || !o) && c.onFocusProxyEnter(n ? "start" : "end")
                        }
                    }), s.viewport && (0,
                    b.jsx)("span", {
                        "aria-owns": m
                    })]
                })]
            })
        }
        );
        K.displayName = B;
        var U = "navigationMenu.linkSelect"
          , V = n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, active: n, onSelect: o, ...i} = e;
            return (0,
            b.jsx)(ei, {
                asChild: !0,
                children: (0,
                b.jsx)(l.sG.a, {
                    "data-active": n ? "" : void 0,
                    "aria-current": n ? "page" : void 0,
                    ...i,
                    ref: t,
                    onClick: (0,
                    a.m)(e.onClick, e => {
                        let t = e.target
                          , r = new CustomEvent(U,{
                            bubbles: !0,
                            cancelable: !0
                        });
                        if (t.addEventListener(U, e => null == o ? void 0 : o(e), {
                            once: !0
                        }),
                        (0,
                        l.hO)(t, r),
                        !r.defaultPrevented && !e.metaKey) {
                            let e = new CustomEvent(J,{
                                bubbles: !0,
                                cancelable: !0
                            });
                            (0,
                            l.hO)(t, e)
                        }
                    }
                    , {
                        checkForDefaultPrevented: !1
                    })
                })
            })
        }
        );
        V.displayName = "NavigationMenuLink";
        var H = "NavigationMenuIndicator"
          , q = n.forwardRef( (e, t) => {
            let {forceMount: r, ...n} = e
              , i = O(H, e.__scopeNavigationMenu)
              , a = !!i.value;
            return i.indicatorTrack ? o.createPortal((0,
            b.jsx)(d.C, {
                present: r || a,
                children: (0,
                b.jsx)(X, {
                    ...n,
                    ref: t
                })
            }), i.indicatorTrack) : null
        }
        );
        q.displayName = H;
        var X = n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, ...o} = e
              , i = O(H, r)
              , a = E(r)
              , [s,u] = n.useState(null)
              , [c,d] = n.useState(null)
              , f = "horizontal" === i.orientation
              , p = !!i.value;
            n.useEffect( () => {
                var e;
                let t = null === (e = a().find(e => e.value === i.value)) || void 0 === e ? void 0 : e.ref.current;
                t && u(t)
            }
            , [a, i.value]);
            let m = () => {
                s && d({
                    size: f ? s.offsetWidth : s.offsetHeight,
                    offset: f ? s.offsetLeft : s.offsetTop
                })
            }
            ;
            return es(s, m),
            es(i.indicatorTrack, m),
            c ? (0,
            b.jsx)(l.sG.div, {
                "aria-hidden": !0,
                "data-state": p ? "visible" : "hidden",
                "data-orientation": i.orientation,
                ...o,
                ref: t,
                style: {
                    position: "absolute",
                    ...f ? {
                        left: 0,
                        width: c.size + "px",
                        transform: "translateX(".concat(c.offset, "px)")
                    } : {
                        top: 0,
                        height: c.size + "px",
                        transform: "translateY(".concat(c.offset, "px)")
                    },
                    ...o.style
                }
            }) : null
        }
        )
          , $ = "NavigationMenuContent"
          , Y = n.forwardRef( (e, t) => {
            let {forceMount: r, ...n} = e
              , o = O($, e.__scopeNavigationMenu)
              , i = W($, e.__scopeNavigationMenu)
              , l = (0,
            u.s)(i.contentRef, t)
              , s = i.value === o.value
              , c = {
                value: i.value,
                triggerRef: i.triggerRef,
                focusProxyRef: i.focusProxyRef,
                wasEscapeCloseRef: i.wasEscapeCloseRef,
                onContentFocusOutside: i.onContentFocusOutside,
                onRootContentClose: i.onRootContentClose,
                ...n
            };
            return o.viewport ? (0,
            b.jsx)(Z, {
                forceMount: r,
                ...c,
                ref: l
            }) : (0,
            b.jsx)(d.C, {
                present: r || s,
                children: (0,
                b.jsx)(Q, {
                    "data-state": eu(s),
                    ...c,
                    ref: l,
                    onPointerEnter: (0,
                    a.m)(e.onPointerEnter, o.onContentEnter),
                    onPointerLeave: (0,
                    a.m)(e.onPointerLeave, ef(o.onContentLeave)),
                    style: {
                        pointerEvents: !s && o.isRootMenu ? "none" : void 0,
                        ...c.style
                    }
                })
            })
        }
        );
        Y.displayName = $;
        var Z = n.forwardRef( (e, t) => {
            let {onViewportContentChange: r, onViewportContentRemove: n} = O($, e.__scopeNavigationMenu);
            return (0,
            h.N)( () => {
                r(e.value, {
                    ref: t,
                    ...e
                })
            }
            , [e, t, r]),
            (0,
            h.N)( () => () => n(e.value), [e.value, n]),
            null
        }
        )
          , J = "navigationMenu.rootContentDismiss"
          , Q = n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, value: o, triggerRef: i, focusProxyRef: l, wasEscapeCloseRef: s, onRootContentClose: c, onContentFocusOutside: d, ...f} = e
              , p = O($, r)
              , v = n.useRef(null)
              , h = (0,
            u.s)(v, t)
              , g = ec(p.baseId, o)
              , y = ed(p.baseId, o)
              , w = E(r)
              , x = n.useRef(null)
              , {onItemDismiss: C} = p;
            n.useEffect( () => {
                let e = v.current;
                if (p.isRootMenu && e) {
                    let t = () => {
                        var t;
                        C(),
                        c(),
                        e.contains(document.activeElement) && (null === (t = i.current) || void 0 === t || t.focus())
                    }
                    ;
                    return e.addEventListener(J, t),
                    () => e.removeEventListener(J, t)
                }
            }
            , [p.isRootMenu, e.value, i, C, c]);
            let R = n.useMemo( () => {
                let e = w().map(e => e.value);
                "rtl" === p.dir && e.reverse();
                let t = e.indexOf(p.value)
                  , r = e.indexOf(p.previousValue)
                  , n = o === p.value
                  , i = r === e.indexOf(o);
                if (!n && !i)
                    return x.current;
                let a = ( () => {
                    if (t !== r) {
                        if (n && -1 !== r)
                            return t > r ? "from-end" : "from-start";
                        if (i && -1 !== t)
                            return t > r ? "to-start" : "to-end"
                    }
                    return null
                }
                )();
                return x.current = a,
                a
            }
            , [p.previousValue, p.value, p.dir, w, o]);
            return (0,
            b.jsx)(en, {
                asChild: !0,
                children: (0,
                b.jsx)(m.qW, {
                    id: y,
                    "aria-labelledby": g,
                    "data-motion": R,
                    "data-orientation": p.orientation,
                    ...f,
                    ref: h,
                    disableOutsidePointerEvents: !1,
                    onDismiss: () => {
                        var e;
                        let t = new Event(J,{
                            bubbles: !0,
                            cancelable: !0
                        });
                        null === (e = v.current) || void 0 === e || e.dispatchEvent(t)
                    }
                    ,
                    onFocusOutside: (0,
                    a.m)(e.onFocusOutside, e => {
                        var t;
                        d();
                        let r = e.target;
                        (null === (t = p.rootNavigationMenu) || void 0 === t ? void 0 : t.contains(r)) && e.preventDefault()
                    }
                    ),
                    onPointerDownOutside: (0,
                    a.m)(e.onPointerDownOutside, e => {
                        var t;
                        let r = e.target
                          , n = w().some(e => {
                            var t;
                            return null === (t = e.ref.current) || void 0 === t ? void 0 : t.contains(r)
                        }
                        )
                          , o = p.isRootMenu && (null === (t = p.viewport) || void 0 === t ? void 0 : t.contains(r));
                        (n || o || !p.isRootMenu) && e.preventDefault()
                    }
                    ),
                    onKeyDown: (0,
                    a.m)(e.onKeyDown, e => {
                        let t = e.altKey || e.ctrlKey || e.metaKey;
                        if ("Tab" === e.key && !t) {
                            let t = ea(e.currentTarget)
                              , n = document.activeElement
                              , o = t.findIndex(e => e === n);
                            if (el(e.shiftKey ? t.slice(0, o).reverse() : t.slice(o + 1, t.length)))
                                e.preventDefault();
                            else {
                                var r;
                                null === (r = l.current) || void 0 === r || r.focus()
                            }
                        }
                    }
                    ),
                    onEscapeKeyDown: (0,
                    a.m)(e.onEscapeKeyDown, e => {
                        s.current = !0
                    }
                    )
                })
            })
        }
        )
          , ee = "NavigationMenuViewport"
          , et = n.forwardRef( (e, t) => {
            let {forceMount: r, ...n} = e
              , o = !!O(ee, e.__scopeNavigationMenu).value;
            return (0,
            b.jsx)(d.C, {
                present: r || o,
                children: (0,
                b.jsx)(er, {
                    ...n,
                    ref: t
                })
            })
        }
        );
        et.displayName = ee;
        var er = n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, children: o, ...i} = e
              , s = O(ee, r)
              , c = (0,
            u.s)(t, s.onViewportChange)
              , f = A($, e.__scopeNavigationMenu)
              , [p,m] = n.useState(null)
              , [v,h] = n.useState(null)
              , g = p ? (null == p ? void 0 : p.width) + "px" : void 0
              , y = p ? (null == p ? void 0 : p.height) + "px" : void 0
              , w = !!s.value
              , x = w ? s.value : s.previousValue;
            return es(v, () => {
                v && m({
                    width: v.offsetWidth,
                    height: v.offsetHeight
                })
            }
            ),
            (0,
            b.jsx)(l.sG.div, {
                "data-state": eu(w),
                "data-orientation": s.orientation,
                ...i,
                ref: c,
                style: {
                    pointerEvents: !w && s.isRootMenu ? "none" : void 0,
                    "--radix-navigation-menu-viewport-width": g,
                    "--radix-navigation-menu-viewport-height": y,
                    ...i.style
                },
                onPointerEnter: (0,
                a.m)(e.onPointerEnter, s.onContentEnter),
                onPointerLeave: (0,
                a.m)(e.onPointerLeave, ef(s.onContentLeave)),
                children: Array.from(f.items).map(e => {
                    let[t,{ref: r, forceMount: n, ...o}] = e
                      , i = x === t;
                    return (0,
                    b.jsx)(d.C, {
                        present: n || i,
                        children: (0,
                        b.jsx)(Q, {
                            ...o,
                            ref: (0,
                            u.t)(r, e => {
                                i && e && h(e)
                            }
                            )
                        })
                    }, t)
                }
                )
            })
        }
        )
          , en = n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, ...n} = e
              , o = O("FocusGroup", r);
            return (0,
            b.jsx)(R.Provider, {
                scope: r,
                children: (0,
                b.jsx)(R.Slot, {
                    scope: r,
                    children: (0,
                    b.jsx)(l.sG.div, {
                        dir: o.dir,
                        ...n,
                        ref: t
                    })
                })
            })
        }
        )
          , eo = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"]
          , ei = n.forwardRef( (e, t) => {
            let {__scopeNavigationMenu: r, ...n} = e
              , o = j(r)
              , i = O("FocusGroupItem", r);
            return (0,
            b.jsx)(R.ItemSlot, {
                scope: r,
                children: (0,
                b.jsx)(l.sG.button, {
                    ...n,
                    ref: t,
                    onKeyDown: (0,
                    a.m)(e.onKeyDown, e => {
                        if (["Home", "End", ...eo].includes(e.key)) {
                            let t = o().map(e => e.ref.current);
                            if (["rtl" === i.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(),
                            eo.includes(e.key)) {
                                let r = t.indexOf(e.currentTarget);
                                t = t.slice(r + 1)
                            }
                            setTimeout( () => el(t)),
                            e.preventDefault()
                        }
                    }
                    )
                })
            })
        }
        );
        function ea(e) {
            let t = []
              , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => {
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
            for (; r.nextNode(); )
                t.push(r.currentNode);
            return t
        }
        function el(e) {
            let t = document.activeElement;
            return e.some(e => e === t || (e.focus(),
            document.activeElement !== t))
        }
        function es(e, t) {
            let r = (0,
            g.c)(t);
            (0,
            h.N)( () => {
                let t = 0;
                if (e) {
                    let n = new ResizeObserver( () => {
                        cancelAnimationFrame(t),
                        t = window.requestAnimationFrame(r)
                    }
                    );
                    return n.observe(e),
                    () => {
                        window.cancelAnimationFrame(t),
                        n.unobserve(e)
                    }
                }
            }
            , [e, r])
        }
        function eu(e) {
            return e ? "open" : "closed"
        }
        function ec(e, t) {
            return "".concat(e, "-trigger-").concat(t)
        }
        function ed(e, t) {
            return "".concat(e, "-content-").concat(t)
        }
        function ef(e) {
            return t => "mouse" === t.pointerType ? e(t) : void 0
        }
        var ep = T
          , em = I
          , ev = G
          , eh = K
          , eg = V
          , ey = q
          , eb = Y
          , ew = et
    }
    ,
    6474: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        let n = (0,
        r(9946).A)("ChevronDown", [["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]])
    }
    ,
    6654: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useMergedRef", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(2115);
        function o(e, t) {
            let r = (0,
            n.useRef)(null)
              , o = (0,
            n.useRef)(null);
            return (0,
            n.useCallback)(n => {
                if (null === n) {
                    let e = r.current;
                    e && (r.current = null,
                    e());
                    let t = o.current;
                    t && (o.current = null,
                    t())
                } else
                    e && (r.current = i(e, n)),
                    t && (o.current = i(t, n))
            }
            , [e, t])
        }
        function i(e, t) {
            if ("function" != typeof e)
                return e.current = t,
                () => {
                    e.current = null
                }
                ;
            {
                let r = e(t);
                return "function" == typeof r ? r : () => e(null)
            }
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    6752: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = r(8229)._(r(2115))
          , o = r(5840)
          , i = n.default.createContext(o.imageConfigDefault)
    }
    ,
    6874: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return m
            }
        });
        let n = r(8229)
          , o = r(5155)
          , i = n._(r(2115))
          , a = r(2757)
          , l = r(5227)
          , s = r(9818)
          , u = r(6654)
          , c = r(9991)
          , d = r(5929);
        r(3230);
        let f = r(4930);
        function p(e) {
            return "string" == typeof e ? e : (0,
            a.formatUrl)(e)
        }
        let m = i.default.forwardRef(function(e, t) {
            let r, n;
            let {href: a, as: m, children: v, prefetch: h=null, passHref: g, replace: y, shallow: b, scroll: w, onClick: x, onMouseEnter: E, onTouchStart: C, legacyBehavior: R=!1, ...j} = e;
            r = v,
            R && ("string" == typeof r || "number" == typeof r) && (r = (0,
            o.jsx)("a", {
                children: r
            }));
            let k = i.default.useContext(l.AppRouterContext)
              , P = !1 !== h
              , S = null === h ? s.PrefetchKind.AUTO : s.PrefetchKind.FULL
              , {href: M, as: O} = i.default.useMemo( () => {
                let e = p(a);
                return {
                    href: e,
                    as: m ? p(m) : e
                }
            }
            , [a, m]);
            R && (n = i.default.Children.only(r));
            let N = R ? n && "object" == typeof n && n.ref : t
              , A = i.default.useCallback(e => (P && null !== k && (0,
            f.mountLinkInstance)(e, M, k, S),
            () => {
                (0,
                f.unmountLinkInstance)(e)
            }
            ), [P, M, k, S])
              , T = {
                ref: (0,
                u.useMergedRef)(A, N),
                onClick(e) {
                    R || "function" != typeof x || x(e),
                    R && n.props && "function" == typeof n.props.onClick && n.props.onClick(e),
                    k && !e.defaultPrevented && !function(e, t, r, n, o, a, l) {
                        let {nodeName: s} = e.currentTarget;
                        !("A" === s.toUpperCase() && function(e) {
                            let t = e.currentTarget.getAttribute("target");
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e)) && (e.preventDefault(),
                        i.default.startTransition( () => {
                            let e = null == l || l;
                            "beforePopState"in t ? t[o ? "replace" : "push"](r, n, {
                                shallow: a,
                                scroll: e
                            }) : t[o ? "replace" : "push"](n || r, {
                                scroll: e
                            })
                        }
                        ))
                    }(e, k, M, O, y, b, w)
                },
                onMouseEnter(e) {
                    R || "function" != typeof E || E(e),
                    R && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
                    k && P && (0,
                    f.onNavigationIntent)(e.currentTarget)
                },
                onTouchStart: function(e) {
                    R || "function" != typeof C || C(e),
                    R && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e),
                    k && P && (0,
                    f.onNavigationIntent)(e.currentTarget)
                }
            };
            return (0,
            c.isAbsoluteUrl)(O) ? T.href = O : R && !g && ("a" !== n.type || "href"in n.props) || (T.href = (0,
            d.addBasePath)(O)),
            R ? i.default.cloneElement(n, T) : (0,
            o.jsx)("a", {
                ...j,
                ...T,
                children: r
            })
        });
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    }
    ,
    7544: (e, t) => {
        function r(e) {
            let {ampFirst: t=!1, hybrid: r=!1, hasQuery: n=!1} = void 0 === e ? {} : e;
            return t || r && n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    }
    ,
    7900: (e, t, r) => {
        r.d(t, {
            n: () => d
        });
        var n = r(2115)
          , o = r(6101)
          , i = r(3655)
          , a = r(9033)
          , l = r(5155)
          , s = "focusScope.autoFocusOnMount"
          , u = "focusScope.autoFocusOnUnmount"
          , c = {
            bubbles: !1,
            cancelable: !0
        }
          , d = n.forwardRef( (e, t) => {
            let {loop: r=!1, trapped: d=!1, onMountAutoFocus: h, onUnmountAutoFocus: g, ...y} = e
              , [b,w] = n.useState(null)
              , x = (0,
            a.c)(h)
              , E = (0,
            a.c)(g)
              , C = n.useRef(null)
              , R = (0,
            o.s)(t, e => w(e))
              , j = n.useRef({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            n.useEffect( () => {
                if (d) {
                    let e = function(e) {
                        if (j.paused || !b)
                            return;
                        let t = e.target;
                        b.contains(t) ? C.current = t : m(C.current, {
                            select: !0
                        })
                    }
                      , t = function(e) {
                        if (j.paused || !b)
                            return;
                        let t = e.relatedTarget;
                        null === t || b.contains(t) || m(C.current, {
                            select: !0
                        })
                    };
                    document.addEventListener("focusin", e),
                    document.addEventListener("focusout", t);
                    let r = new MutationObserver(function(e) {
                        if (document.activeElement === document.body)
                            for (let t of e)
                                t.removedNodes.length > 0 && m(b)
                    }
                    );
                    return b && r.observe(b, {
                        childList: !0,
                        subtree: !0
                    }),
                    () => {
                        document.removeEventListener("focusin", e),
                        document.removeEventListener("focusout", t),
                        r.disconnect()
                    }
                }
            }
            , [d, b, j.paused]),
            n.useEffect( () => {
                if (b) {
                    v.add(j);
                    let e = document.activeElement;
                    if (!b.contains(e)) {
                        let t = new CustomEvent(s,c);
                        b.addEventListener(s, x),
                        b.dispatchEvent(t),
                        t.defaultPrevented || (function(e) {
                            let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                              , r = document.activeElement;
                            for (let n of e)
                                if (m(n, {
                                    select: t
                                }),
                                document.activeElement !== r)
                                    return
                        }(f(b).filter(e => "A" !== e.tagName), {
                            select: !0
                        }),
                        document.activeElement === e && m(b))
                    }
                    return () => {
                        b.removeEventListener(s, x),
                        setTimeout( () => {
                            let t = new CustomEvent(u,c);
                            b.addEventListener(u, E),
                            b.dispatchEvent(t),
                            t.defaultPrevented || m(null != e ? e : document.body, {
                                select: !0
                            }),
                            b.removeEventListener(u, E),
                            v.remove(j)
                        }
                        , 0)
                    }
                }
            }
            , [b, x, E, j]);
            let k = n.useCallback(e => {
                if (!r && !d || j.paused)
                    return;
                let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey
                  , n = document.activeElement;
                if (t && n) {
                    let t = e.currentTarget
                      , [o,i] = function(e) {
                        let t = f(e);
                        return [p(t, e), p(t.reverse(), e)]
                    }(t);
                    o && i ? e.shiftKey || n !== i ? e.shiftKey && n === o && (e.preventDefault(),
                    r && m(i, {
                        select: !0
                    })) : (e.preventDefault(),
                    r && m(o, {
                        select: !0
                    })) : n === t && e.preventDefault()
                }
            }
            , [r, d, j.paused]);
            return (0,
            l.jsx)(i.sG.div, {
                tabIndex: -1,
                ...y,
                ref: R,
                onKeyDown: k
            })
        }
        );
        function f(e) {
            let t = []
              , r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => {
                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            });
            for (; r.nextNode(); )
                t.push(r.currentNode);
            return t
        }
        function p(e, t) {
            for (let r of e)
                if (!function(e, t) {
                    let {upTo: r} = t;
                    if ("hidden" === getComputedStyle(e).visibility)
                        return !0;
                    for (; e && (void 0 === r || e !== r); ) {
                        if ("none" === getComputedStyle(e).display)
                            return !0;
                        e = e.parentElement
                    }
                    return !1
                }(r, {
                    upTo: t
                }))
                    return r
        }
        function m(e) {
            let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e && e.focus) {
                var r;
                let n = document.activeElement;
                e.focus({
                    preventScroll: !0
                }),
                e !== n && (r = e)instanceof HTMLInputElement && "select"in r && t && e.select()
            }
        }
        d.displayName = "FocusScope";
        var v = function() {
            let e = [];
            return {
                add(t) {
                    let r = e[0];
                    t !== r && (null == r || r.pause()),
                    (e = h(e, t)).unshift(t)
                },
                remove(t) {
                    var r;
                    null === (r = (e = h(e, t))[0]) || void 0 === r || r.resume()
                }
            }
        }();
        function h(e, t) {
            let r = [...e]
              , n = r.indexOf(t);
            return -1 !== n && r.splice(n, 1),
            r
        }
    }
    ,
    8168: (e, t, r) => {
        r.d(t, {
            Eq: () => c
        });
        var n = function(e) {
            return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
        }
          , o = new WeakMap
          , i = new WeakMap
          , a = {}
          , l = 0
          , s = function(e) {
            return e && (e.host || s(e.parentNode))
        }
          , u = function(e, t, r, n) {
            var u = (Array.isArray(e) ? e : [e]).map(function(e) {
                if (t.contains(e))
                    return e;
                var r = s(e);
                return r && t.contains(r) ? r : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"),
                null)
            }).filter(function(e) {
                return !!e
            });
            a[r] || (a[r] = new WeakMap);
            var c = a[r]
              , d = []
              , f = new Set
              , p = new Set(u)
              , m = function(e) {
                !(!e || f.has(e)) && (f.add(e),
                m(e.parentNode))
            };
            u.forEach(m);
            var v = function(e) {
                !(!e || p.has(e)) && Array.prototype.forEach.call(e.children, function(e) {
                    if (f.has(e))
                        v(e);
                    else
                        try {
                            var t = e.getAttribute(n)
                              , a = null !== t && "false" !== t
                              , l = (o.get(e) || 0) + 1
                              , s = (c.get(e) || 0) + 1;
                            o.set(e, l),
                            c.set(e, s),
                            d.push(e),
                            1 === l && a && i.set(e, !0),
                            1 === s && e.setAttribute(r, "true"),
                            a || e.setAttribute(n, "true")
                        } catch (t) {
                            console.error("aria-hidden: cannot operate on ", e, t)
                        }
                })
            };
            return v(t),
            f.clear(),
            l++,
            function() {
                d.forEach(function(e) {
                    var t = o.get(e) - 1
                      , a = c.get(e) - 1;
                    o.set(e, t),
                    c.set(e, a),
                    t || (i.has(e) || e.removeAttribute(n),
                    i.delete(e)),
                    a || e.removeAttribute(r)
                }),
                --l || (o = new WeakMap,
                o = new WeakMap,
                i = new WeakMap,
                a = {})
            }
        }
          , c = function(e, t, r) {
            void 0 === r && (r = "data-aria-hidden");
            var o = Array.from(Array.isArray(e) ? e : [e])
              , i = t || n(e);
            return i ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live], script"))),
            u(o, i, r, "aria-hidden")) : function() {
                return null
            }
        }
    }
    ,
    8795: (e, t, r) => {
        r.d(t, {
            Mz: () => e$,
            i3: () => eZ,
            UC: () => eY,
            bL: () => eX,
            Bk: () => eA
        });
        var n = r(2115);
        let o = ["top", "right", "bottom", "left"]
          , i = Math.min
          , a = Math.max
          , l = Math.round
          , s = Math.floor
          , u = e => ({
            x: e,
            y: e
        })
          , c = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        }
          , d = {
            start: "end",
            end: "start"
        };
        function f(e, t) {
            return "function" == typeof e ? e(t) : e
        }
        function p(e) {
            return e.split("-")[0]
        }
        function m(e) {
            return e.split("-")[1]
        }
        function v(e) {
            return "x" === e ? "y" : "x"
        }
        function h(e) {
            return "y" === e ? "height" : "width"
        }
        function g(e) {
            return ["top", "bottom"].includes(p(e)) ? "y" : "x"
        }
        function y(e) {
            return e.replace(/start|end/g, e => d[e])
        }
        function b(e) {
            return e.replace(/left|right|bottom|top/g, e => c[e])
        }
        function w(e) {
            return "number" != typeof e ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...e
            } : {
                top: e,
                right: e,
                bottom: e,
                left: e
            }
        }
        function x(e) {
            let {x: t, y: r, width: n, height: o} = e;
            return {
                width: n,
                height: o,
                top: r,
                left: t,
                right: t + n,
                bottom: r + o,
                x: t,
                y: r
            }
        }
        function E(e, t, r) {
            let n, {reference: o, floating: i} = e, a = g(t), l = v(g(t)), s = h(l), u = p(t), c = "y" === a, d = o.x + o.width / 2 - i.width / 2, f = o.y + o.height / 2 - i.height / 2, y = o[s] / 2 - i[s] / 2;
            switch (u) {
            case "top":
                n = {
                    x: d,
                    y: o.y - i.height
                };
                break;
            case "bottom":
                n = {
                    x: d,
                    y: o.y + o.height
                };
                break;
            case "right":
                n = {
                    x: o.x + o.width,
                    y: f
                };
                break;
            case "left":
                n = {
                    x: o.x - i.width,
                    y: f
                };
                break;
            default:
                n = {
                    x: o.x,
                    y: o.y
                }
            }
            switch (m(t)) {
            case "start":
                n[l] -= y * (r && c ? -1 : 1);
                break;
            case "end":
                n[l] += y * (r && c ? -1 : 1)
            }
            return n
        }
        let C = async (e, t, r) => {
            let {placement: n="bottom", strategy: o="absolute", middleware: i=[], platform: a} = r
              , l = i.filter(Boolean)
              , s = await (null == a.isRTL ? void 0 : a.isRTL(t))
              , u = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
            })
              , {x: c, y: d} = E(u, n, s)
              , f = n
              , p = {}
              , m = 0;
            for (let r = 0; r < l.length; r++) {
                let {name: i, fn: v} = l[r]
                  , {x: h, y: g, data: y, reset: b} = await v({
                    x: c,
                    y: d,
                    initialPlacement: n,
                    placement: f,
                    strategy: o,
                    middlewareData: p,
                    rects: u,
                    platform: a,
                    elements: {
                        reference: e,
                        floating: t
                    }
                });
                c = null != h ? h : c,
                d = null != g ? g : d,
                p = {
                    ...p,
                    [i]: {
                        ...p[i],
                        ...y
                    }
                },
                b && m <= 50 && (m++,
                "object" == typeof b && (b.placement && (f = b.placement),
                b.rects && (u = !0 === b.rects ? await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }) : b.rects),
                {x: c, y: d} = E(u, f, s)),
                r = -1)
            }
            return {
                x: c,
                y: d,
                placement: f,
                strategy: o,
                middlewareData: p
            }
        }
        ;
        async function R(e, t) {
            var r;
            void 0 === t && (t = {});
            let {x: n, y: o, platform: i, rects: a, elements: l, strategy: s} = e
              , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: d="floating", altBoundary: p=!1, padding: m=0} = f(t, e)
              , v = w(m)
              , h = l[p ? "floating" === d ? "reference" : "floating" : d]
              , g = x(await i.getClippingRect({
                element: null == (r = await (null == i.isElement ? void 0 : i.isElement(h))) || r ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
                boundary: u,
                rootBoundary: c,
                strategy: s
            }))
              , y = "floating" === d ? {
                x: n,
                y: o,
                width: a.floating.width,
                height: a.floating.height
            } : a.reference
              , b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating))
              , E = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
                x: 1,
                y: 1
            }
              , C = x(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: l,
                rect: y,
                offsetParent: b,
                strategy: s
            }) : y);
            return {
                top: (g.top - C.top + v.top) / E.y,
                bottom: (C.bottom - g.bottom + v.bottom) / E.y,
                left: (g.left - C.left + v.left) / E.x,
                right: (C.right - g.right + v.right) / E.x
            }
        }
        function j(e, t) {
            return {
                top: e.top - t.height,
                right: e.right - t.width,
                bottom: e.bottom - t.height,
                left: e.left - t.width
            }
        }
        function k(e) {
            return o.some(t => e[t] >= 0)
        }
        async function P(e, t) {
            let {placement: r, platform: n, elements: o} = e
              , i = await (null == n.isRTL ? void 0 : n.isRTL(o.floating))
              , a = p(r)
              , l = m(r)
              , s = "y" === g(r)
              , u = ["left", "top"].includes(a) ? -1 : 1
              , c = i && s ? -1 : 1
              , d = f(t, e)
              , {mainAxis: v, crossAxis: h, alignmentAxis: y} = "number" == typeof d ? {
                mainAxis: d,
                crossAxis: 0,
                alignmentAxis: null
            } : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis
            };
            return l && "number" == typeof y && (h = "end" === l ? -1 * y : y),
            s ? {
                x: h * c,
                y: v * u
            } : {
                x: v * u,
                y: h * c
            }
        }
        function S() {
            return "undefined" != typeof window
        }
        function M(e) {
            return A(e) ? (e.nodeName || "").toLowerCase() : "#document"
        }
        function O(e) {
            var t;
            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
        }
        function N(e) {
            var t;
            return null == (t = (A(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
        }
        function A(e) {
            return !!S() && (e instanceof Node || e instanceof O(e).Node)
        }
        function T(e) {
            return !!S() && (e instanceof Element || e instanceof O(e).Element)
        }
        function _(e) {
            return !!S() && (e instanceof HTMLElement || e instanceof O(e).HTMLElement)
        }
        function D(e) {
            return !!S() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof O(e).ShadowRoot)
        }
        function L(e) {
            let {overflow: t, overflowX: r, overflowY: n, display: o} = G(e);
            return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(o)
        }
        function I(e) {
            return [":popover-open", ":modal"].some(t => {
                try {
                    return e.matches(t)
                } catch (e) {
                    return !1
                }
            }
            )
        }
        function F(e) {
            let t = z()
              , r = T(e) ? G(e) : e;
            return ["transform", "translate", "scale", "rotate", "perspective"].some(e => !!r[e] && "none" !== r[e]) || !!r.containerType && "normal" !== r.containerType || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
        }
        function z() {
            return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
        }
        function W(e) {
            return ["html", "body", "#document"].includes(M(e))
        }
        function G(e) {
            return O(e).getComputedStyle(e)
        }
        function B(e) {
            return T(e) ? {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            } : {
                scrollLeft: e.scrollX,
                scrollTop: e.scrollY
            }
        }
        function K(e) {
            if ("html" === M(e))
                return e;
            let t = e.assignedSlot || e.parentNode || D(e) && e.host || N(e);
            return D(t) ? t.host : t
        }
        function U(e, t, r) {
            var n;
            void 0 === t && (t = []),
            void 0 === r && (r = !0);
            let o = function e(t) {
                let r = K(t);
                return W(r) ? t.ownerDocument ? t.ownerDocument.body : t.body : _(r) && L(r) ? r : e(r)
            }(e)
              , i = o === (null == (n = e.ownerDocument) ? void 0 : n.body)
              , a = O(o);
            if (i) {
                let e = V(a);
                return t.concat(a, a.visualViewport || [], L(o) ? o : [], e && r ? U(e) : [])
            }
            return t.concat(o, U(o, [], r))
        }
        function V(e) {
            return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
        }
        function H(e) {
            let t = G(e)
              , r = parseFloat(t.width) || 0
              , n = parseFloat(t.height) || 0
              , o = _(e)
              , i = o ? e.offsetWidth : r
              , a = o ? e.offsetHeight : n
              , s = l(r) !== i || l(n) !== a;
            return s && (r = i,
            n = a),
            {
                width: r,
                height: n,
                $: s
            }
        }
        function q(e) {
            return T(e) ? e : e.contextElement
        }
        function X(e) {
            let t = q(e);
            if (!_(t))
                return u(1);
            let r = t.getBoundingClientRect()
              , {width: n, height: o, $: i} = H(t)
              , a = (i ? l(r.width) : r.width) / n
              , s = (i ? l(r.height) : r.height) / o;
            return a && Number.isFinite(a) || (a = 1),
            s && Number.isFinite(s) || (s = 1),
            {
                x: a,
                y: s
            }
        }
        let $ = u(0);
        function Y(e) {
            let t = O(e);
            return z() && t.visualViewport ? {
                x: t.visualViewport.offsetLeft,
                y: t.visualViewport.offsetTop
            } : $
        }
        function Z(e, t, r, n) {
            var o;
            void 0 === t && (t = !1),
            void 0 === r && (r = !1);
            let i = e.getBoundingClientRect()
              , a = q(e)
              , l = u(1);
            t && (n ? T(n) && (l = X(n)) : l = X(e));
            let s = (void 0 === (o = r) && (o = !1),
            n && (!o || n === O(a)) && o) ? Y(a) : u(0)
              , c = (i.left + s.x) / l.x
              , d = (i.top + s.y) / l.y
              , f = i.width / l.x
              , p = i.height / l.y;
            if (a) {
                let e = O(a)
                  , t = n && T(n) ? O(n) : n
                  , r = e
                  , o = V(r);
                for (; o && n && t !== r; ) {
                    let e = X(o)
                      , t = o.getBoundingClientRect()
                      , n = G(o)
                      , i = t.left + (o.clientLeft + parseFloat(n.paddingLeft)) * e.x
                      , a = t.top + (o.clientTop + parseFloat(n.paddingTop)) * e.y;
                    c *= e.x,
                    d *= e.y,
                    f *= e.x,
                    p *= e.y,
                    c += i,
                    d += a,
                    o = V(r = O(o))
                }
            }
            return x({
                width: f,
                height: p,
                x: c,
                y: d
            })
        }
        function J(e, t) {
            let r = B(e).scrollLeft;
            return t ? t.left + r : Z(N(e)).left + r
        }
        function Q(e, t, r) {
            void 0 === r && (r = !1);
            let n = e.getBoundingClientRect();
            return {
                x: n.left + t.scrollLeft - (r ? 0 : J(e, n)),
                y: n.top + t.scrollTop
            }
        }
        function ee(e, t, r) {
            let n;
            if ("viewport" === t)
                n = function(e, t) {
                    let r = O(e)
                      , n = N(e)
                      , o = r.visualViewport
                      , i = n.clientWidth
                      , a = n.clientHeight
                      , l = 0
                      , s = 0;
                    if (o) {
                        i = o.width,
                        a = o.height;
                        let e = z();
                        (!e || e && "fixed" === t) && (l = o.offsetLeft,
                        s = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: l,
                        y: s
                    }
                }(e, r);
            else if ("document" === t)
                n = function(e) {
                    let t = N(e)
                      , r = B(e)
                      , n = e.ownerDocument.body
                      , o = a(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth)
                      , i = a(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight)
                      , l = -r.scrollLeft + J(e)
                      , s = -r.scrollTop;
                    return "rtl" === G(n).direction && (l += a(t.clientWidth, n.clientWidth) - o),
                    {
                        width: o,
                        height: i,
                        x: l,
                        y: s
                    }
                }(N(e));
            else if (T(t))
                n = function(e, t) {
                    let r = Z(e, !0, "fixed" === t)
                      , n = r.top + e.clientTop
                      , o = r.left + e.clientLeft
                      , i = _(e) ? X(e) : u(1)
                      , a = e.clientWidth * i.x
                      , l = e.clientHeight * i.y;
                    return {
                        width: a,
                        height: l,
                        x: o * i.x,
                        y: n * i.y
                    }
                }(t, r);
            else {
                let r = Y(e);
                n = {
                    x: t.x - r.x,
                    y: t.y - r.y,
                    width: t.width,
                    height: t.height
                }
            }
            return x(n)
        }
        function et(e) {
            return "static" === G(e).position
        }
        function er(e, t) {
            if (!_(e) || "fixed" === G(e).position)
                return null;
            if (t)
                return t(e);
            let r = e.offsetParent;
            return N(e) === r && (r = r.ownerDocument.body),
            r
        }
        function en(e, t) {
            let r = O(e);
            if (I(e))
                return r;
            if (!_(e)) {
                let t = K(e);
                for (; t && !W(t); ) {
                    if (T(t) && !et(t))
                        return t;
                    t = K(t)
                }
                return r
            }
            let n = er(e, t);
            for (; n && ["table", "td", "th"].includes(M(n)) && et(n); )
                n = er(n, t);
            return n && W(n) && et(n) && !F(n) ? r : n || function(e) {
                let t = K(e);
                for (; _(t) && !W(t); ) {
                    if (F(t))
                        return t;
                    if (I(t))
                        break;
                    t = K(t)
                }
                return null
            }(e) || r
        }
        let eo = async function(e) {
            let t = this.getOffsetParent || en
              , r = this.getDimensions
              , n = await r(e.floating);
            return {
                reference: function(e, t, r) {
                    let n = _(t)
                      , o = N(t)
                      , i = "fixed" === r
                      , a = Z(e, !0, i, t)
                      , l = {
                        scrollLeft: 0,
                        scrollTop: 0
                    }
                      , s = u(0);
                    if (n || !n && !i) {
                        if (("body" !== M(t) || L(o)) && (l = B(t)),
                        n) {
                            let e = Z(t, !0, i, t);
                            s.x = e.x + t.clientLeft,
                            s.y = e.y + t.clientTop
                        } else
                            o && (s.x = J(o))
                    }
                    i && !n && o && (s.x = J(o));
                    let c = !o || n || i ? u(0) : Q(o, l);
                    return {
                        x: a.left + l.scrollLeft - s.x - c.x,
                        y: a.top + l.scrollTop - s.y - c.y,
                        width: a.width,
                        height: a.height
                    }
                }(e.reference, await t(e.floating), e.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: n.width,
                    height: n.height
                }
            }
        }
          , ei = {
            convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                let {elements: t, rect: r, offsetParent: n, strategy: o} = e
                  , i = "fixed" === o
                  , a = N(n)
                  , l = !!t && I(t.floating);
                if (n === a || l && i)
                    return r;
                let s = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , c = u(1)
                  , d = u(0)
                  , f = _(n);
                if ((f || !f && !i) && (("body" !== M(n) || L(a)) && (s = B(n)),
                _(n))) {
                    let e = Z(n);
                    c = X(n),
                    d.x = e.x + n.clientLeft,
                    d.y = e.y + n.clientTop
                }
                let p = !a || f || i ? u(0) : Q(a, s, !0);
                return {
                    width: r.width * c.x,
                    height: r.height * c.y,
                    x: r.x * c.x - s.scrollLeft * c.x + d.x + p.x,
                    y: r.y * c.y - s.scrollTop * c.y + d.y + p.y
                }
            },
            getDocumentElement: N,
            getClippingRect: function(e) {
                let {element: t, boundary: r, rootBoundary: n, strategy: o} = e
                  , l = [..."clippingAncestors" === r ? I(t) ? [] : function(e, t) {
                    let r = t.get(e);
                    if (r)
                        return r;
                    let n = U(e, [], !1).filter(e => T(e) && "body" !== M(e))
                      , o = null
                      , i = "fixed" === G(e).position
                      , a = i ? K(e) : e;
                    for (; T(a) && !W(a); ) {
                        let t = G(a)
                          , r = F(a);
                        r || "fixed" !== t.position || (o = null),
                        (i ? !r && !o : !r && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || L(a) && !r && function e(t, r) {
                            let n = K(t);
                            return !(n === r || !T(n) || W(n)) && ("fixed" === G(n).position || e(n, r))
                        }(e, a)) ? n = n.filter(e => e !== a) : o = t,
                        a = K(a)
                    }
                    return t.set(e, n),
                    n
                }(t, this._c) : [].concat(r), n]
                  , s = l[0]
                  , u = l.reduce( (e, r) => {
                    let n = ee(t, r, o);
                    return e.top = a(n.top, e.top),
                    e.right = i(n.right, e.right),
                    e.bottom = i(n.bottom, e.bottom),
                    e.left = a(n.left, e.left),
                    e
                }
                , ee(t, s, o));
                return {
                    width: u.right - u.left,
                    height: u.bottom - u.top,
                    x: u.left,
                    y: u.top
                }
            },
            getOffsetParent: en,
            getElementRects: eo,
            getClientRects: function(e) {
                return Array.from(e.getClientRects())
            },
            getDimensions: function(e) {
                let {width: t, height: r} = H(e);
                return {
                    width: t,
                    height: r
                }
            },
            getScale: X,
            isElement: T,
            isRTL: function(e) {
                return "rtl" === G(e).direction
            }
        };
        function ea(e, t) {
            return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
        }
        let el = e => ({
            name: "arrow",
            options: e,
            async fn(t) {
                let {x: r, y: n, placement: o, rects: l, platform: s, elements: u, middlewareData: c} = t
                  , {element: d, padding: p=0} = f(e, t) || {};
                if (null == d)
                    return {};
                let y = w(p)
                  , b = {
                    x: r,
                    y: n
                }
                  , x = v(g(o))
                  , E = h(x)
                  , C = await s.getDimensions(d)
                  , R = "y" === x
                  , j = R ? "clientHeight" : "clientWidth"
                  , k = l.reference[E] + l.reference[x] - b[x] - l.floating[E]
                  , P = b[x] - l.reference[x]
                  , S = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(d))
                  , M = S ? S[j] : 0;
                M && await (null == s.isElement ? void 0 : s.isElement(S)) || (M = u.floating[j] || l.floating[E]);
                let O = M / 2 - C[E] / 2 - 1
                  , N = i(y[R ? "top" : "left"], O)
                  , A = i(y[R ? "bottom" : "right"], O)
                  , T = M - C[E] - A
                  , _ = M / 2 - C[E] / 2 + (k / 2 - P / 2)
                  , D = a(N, i(_, T))
                  , L = !c.arrow && null != m(o) && _ !== D && l.reference[E] / 2 - (_ < N ? N : A) - C[E] / 2 < 0
                  , I = L ? _ < N ? _ - N : _ - T : 0;
                return {
                    [x]: b[x] + I,
                    data: {
                        [x]: D,
                        centerOffset: _ - D - I,
                        ...L && {
                            alignmentOffset: I
                        }
                    },
                    reset: L
                }
            }
        })
          , es = (e, t, r) => {
            let n = new Map
              , o = {
                platform: ei,
                ...r
            }
              , i = {
                ...o.platform,
                _c: n
            };
            return C(e, t, {
                ...o,
                platform: i
            })
        }
        ;
        var eu = r(7650)
          , ec = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
        function ed(e, t) {
            let r, n, o;
            if (e === t)
                return !0;
            if (typeof e != typeof t)
                return !1;
            if ("function" == typeof e && e.toString() === t.toString())
                return !0;
            if (e && t && "object" == typeof e) {
                if (Array.isArray(e)) {
                    if ((r = e.length) !== t.length)
                        return !1;
                    for (n = r; 0 != n--; )
                        if (!ed(e[n], t[n]))
                            return !1;
                    return !0
                }
                if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length)
                    return !1;
                for (n = r; 0 != n--; )
                    if (!({}).hasOwnProperty.call(t, o[n]))
                        return !1;
                for (n = r; 0 != n--; ) {
                    let r = o[n];
                    if (("_owner" !== r || !e.$$typeof) && !ed(e[r], t[r]))
                        return !1
                }
                return !0
            }
            return e != e && t != t
        }
        function ef(e) {
            return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
        }
        function ep(e, t) {
            let r = ef(e);
            return Math.round(t * r) / r
        }
        function em(e) {
            let t = n.useRef(e);
            return ec( () => {
                t.current = e
            }
            ),
            t
        }
        let ev = e => ({
            name: "arrow",
            options: e,
            fn(t) {
                let {element: r, padding: n} = "function" == typeof e ? e(t) : e;
                return r && ({}).hasOwnProperty.call(r, "current") ? null != r.current ? el({
                    element: r.current,
                    padding: n
                }).fn(t) : {} : r ? el({
                    element: r,
                    padding: n
                }).fn(t) : {}
            }
        })
          , eh = (e, t) => ({
            ...function(e) {
                return void 0 === e && (e = 0),
                {
                    name: "offset",
                    options: e,
                    async fn(t) {
                        var r, n;
                        let {x: o, y: i, placement: a, middlewareData: l} = t
                          , s = await P(t, e);
                        return a === (null == (r = l.offset) ? void 0 : r.placement) && null != (n = l.arrow) && n.alignmentOffset ? {} : {
                            x: o + s.x,
                            y: i + s.y,
                            data: {
                                ...s,
                                placement: a
                            }
                        }
                    }
                }
            }(e),
            options: [e, t]
        })
          , eg = (e, t) => ({
            ...function(e) {
                return void 0 === e && (e = {}),
                {
                    name: "shift",
                    options: e,
                    async fn(t) {
                        let {x: r, y: n, placement: o} = t
                          , {mainAxis: l=!0, crossAxis: s=!1, limiter: u={
                            fn: e => {
                                let {x: t, y: r} = e;
                                return {
                                    x: t,
                                    y: r
                                }
                            }
                        }, ...c} = f(e, t)
                          , d = {
                            x: r,
                            y: n
                        }
                          , m = await R(t, c)
                          , h = g(p(o))
                          , y = v(h)
                          , b = d[y]
                          , w = d[h];
                        if (l) {
                            let e = "y" === y ? "top" : "left"
                              , t = "y" === y ? "bottom" : "right"
                              , r = b + m[e]
                              , n = b - m[t];
                            b = a(r, i(b, n))
                        }
                        if (s) {
                            let e = "y" === h ? "top" : "left"
                              , t = "y" === h ? "bottom" : "right"
                              , r = w + m[e]
                              , n = w - m[t];
                            w = a(r, i(w, n))
                        }
                        let x = u.fn({
                            ...t,
                            [y]: b,
                            [h]: w
                        });
                        return {
                            ...x,
                            data: {
                                x: x.x - r,
                                y: x.y - n,
                                enabled: {
                                    [y]: l,
                                    [h]: s
                                }
                            }
                        }
                    }
                }
            }(e),
            options: [e, t]
        })
          , ey = (e, t) => ({
            ...function(e) {
                return void 0 === e && (e = {}),
                {
                    options: e,
                    fn(t) {
                        let {x: r, y: n, placement: o, rects: i, middlewareData: a} = t
                          , {offset: l=0, mainAxis: s=!0, crossAxis: u=!0} = f(e, t)
                          , c = {
                            x: r,
                            y: n
                        }
                          , d = g(o)
                          , m = v(d)
                          , h = c[m]
                          , y = c[d]
                          , b = f(l, t)
                          , w = "number" == typeof b ? {
                            mainAxis: b,
                            crossAxis: 0
                        } : {
                            mainAxis: 0,
                            crossAxis: 0,
                            ...b
                        };
                        if (s) {
                            let e = "y" === m ? "height" : "width"
                              , t = i.reference[m] - i.floating[e] + w.mainAxis
                              , r = i.reference[m] + i.reference[e] - w.mainAxis;
                            h < t ? h = t : h > r && (h = r)
                        }
                        if (u) {
                            var x, E;
                            let e = "y" === m ? "width" : "height"
                              , t = ["top", "left"].includes(p(o))
                              , r = i.reference[d] - i.floating[e] + (t && (null == (x = a.offset) ? void 0 : x[d]) || 0) + (t ? 0 : w.crossAxis)
                              , n = i.reference[d] + i.reference[e] + (t ? 0 : (null == (E = a.offset) ? void 0 : E[d]) || 0) - (t ? w.crossAxis : 0);
                            y < r ? y = r : y > n && (y = n)
                        }
                        return {
                            [m]: h,
                            [d]: y
                        }
                    }
                }
            }(e),
            options: [e, t]
        })
          , eb = (e, t) => ({
            ...function(e) {
                return void 0 === e && (e = {}),
                {
                    name: "flip",
                    options: e,
                    async fn(t) {
                        var r, n, o, i, a, l;
                        let {placement: s, middlewareData: u, rects: c, initialPlacement: d, platform: w, elements: x} = t
                          , {mainAxis: E=!0, crossAxis: C=!0, fallbackPlacements: j, fallbackStrategy: k="bestFit", fallbackAxisSideDirection: P="none", flipAlignment: S=!0, ...M} = f(e, t);
                        if (null != (r = u.arrow) && r.alignmentOffset)
                            return {};
                        let O = p(s)
                          , N = g(d)
                          , A = p(d) === d
                          , T = await (null == w.isRTL ? void 0 : w.isRTL(x.floating))
                          , _ = j || (A || !S ? [b(d)] : function(e) {
                            let t = b(e);
                            return [y(e), t, y(t)]
                        }(d))
                          , D = "none" !== P;
                        !j && D && _.push(...function(e, t, r, n) {
                            let o = m(e)
                              , i = function(e, t, r) {
                                let n = ["left", "right"]
                                  , o = ["right", "left"];
                                switch (e) {
                                case "top":
                                case "bottom":
                                    if (r)
                                        return t ? o : n;
                                    return t ? n : o;
                                case "left":
                                case "right":
                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                default:
                                    return []
                                }
                            }(p(e), "start" === r, n);
                            return o && (i = i.map(e => e + "-" + o),
                            t && (i = i.concat(i.map(y)))),
                            i
                        }(d, S, P, T));
                        let L = [d, ..._]
                          , I = await R(t, M)
                          , F = []
                          , z = (null == (n = u.flip) ? void 0 : n.overflows) || [];
                        if (E && F.push(I[O]),
                        C) {
                            let e = function(e, t, r) {
                                void 0 === r && (r = !1);
                                let n = m(e)
                                  , o = v(g(e))
                                  , i = h(o)
                                  , a = "x" === o ? n === (r ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                                return t.reference[i] > t.floating[i] && (a = b(a)),
                                [a, b(a)]
                            }(s, c, T);
                            F.push(I[e[0]], I[e[1]])
                        }
                        if (z = [...z, {
                            placement: s,
                            overflows: F
                        }],
                        !F.every(e => e <= 0)) {
                            let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1
                              , t = L[e];
                            if (t) {
                                let r = "alignment" === C && N !== g(t)
                                  , n = (null == (a = z[0]) ? void 0 : a.overflows[0]) > 0;
                                if (!r || n)
                                    return {
                                        data: {
                                            index: e,
                                            overflows: z
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    }
                            }
                            let r = null == (i = z.filter(e => e.overflows[0] <= 0).sort( (e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                            if (!r)
                                switch (k) {
                                case "bestFit":
                                    {
                                        let e = null == (l = z.filter(e => {
                                            if (D) {
                                                let t = g(e.placement);
                                                return t === N || "y" === t
                                            }
                                            return !0
                                        }
                                        ).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce( (e, t) => e + t, 0)]).sort( (e, t) => e[1] - t[1])[0]) ? void 0 : l[0];
                                        e && (r = e);
                                        break
                                    }
                                case "initialPlacement":
                                    r = d
                                }
                            if (s !== r)
                                return {
                                    reset: {
                                        placement: r
                                    }
                                }
                        }
                        return {}
                    }
                }
            }(e),
            options: [e, t]
        })
          , ew = (e, t) => ({
            ...function(e) {
                return void 0 === e && (e = {}),
                {
                    name: "size",
                    options: e,
                    async fn(t) {
                        var r, n;
                        let o, l;
                        let {placement: s, rects: u, platform: c, elements: d} = t
                          , {apply: v= () => {}
                        , ...h} = f(e, t)
                          , y = await R(t, h)
                          , b = p(s)
                          , w = m(s)
                          , x = "y" === g(s)
                          , {width: E, height: C} = u.floating;
                        "top" === b || "bottom" === b ? (o = b,
                        l = w === (await (null == c.isRTL ? void 0 : c.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (l = b,
                        o = "end" === w ? "top" : "bottom");
                        let j = C - y.top - y.bottom
                          , k = E - y.left - y.right
                          , P = i(C - y[o], j)
                          , S = i(E - y[l], k)
                          , M = !t.middlewareData.shift
                          , O = P
                          , N = S;
                        if (null != (r = t.middlewareData.shift) && r.enabled.x && (N = k),
                        null != (n = t.middlewareData.shift) && n.enabled.y && (O = j),
                        M && !w) {
                            let e = a(y.left, 0)
                              , t = a(y.right, 0)
                              , r = a(y.top, 0)
                              , n = a(y.bottom, 0);
                            x ? N = E - 2 * (0 !== e || 0 !== t ? e + t : a(y.left, y.right)) : O = C - 2 * (0 !== r || 0 !== n ? r + n : a(y.top, y.bottom))
                        }
                        await v({
                            ...t,
                            availableWidth: N,
                            availableHeight: O
                        });
                        let A = await c.getDimensions(d.floating);
                        return E !== A.width || C !== A.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }
            }(e),
            options: [e, t]
        })
          , ex = (e, t) => ({
            ...function(e) {
                return void 0 === e && (e = {}),
                {
                    name: "hide",
                    options: e,
                    async fn(t) {
                        let {rects: r} = t
                          , {strategy: n="referenceHidden", ...o} = f(e, t);
                        switch (n) {
                        case "referenceHidden":
                            {
                                let e = j(await R(t, {
                                    ...o,
                                    elementContext: "reference"
                                }), r.reference);
                                return {
                                    data: {
                                        referenceHiddenOffsets: e,
                                        referenceHidden: k(e)
                                    }
                                }
                            }
                        case "escaped":
                            {
                                let e = j(await R(t, {
                                    ...o,
                                    altBoundary: !0
                                }), r.floating);
                                return {
                                    data: {
                                        escapedOffsets: e,
                                        escaped: k(e)
                                    }
                                }
                            }
                        default:
                            return {}
                        }
                    }
                }
            }(e),
            options: [e, t]
        })
          , eE = (e, t) => ({
            ...ev(e),
            options: [e, t]
        });
        var eC = r(3655)
          , eR = r(5155)
          , ej = n.forwardRef( (e, t) => {
            let {children: r, width: n=10, height: o=5, ...i} = e;
            return (0,
            eR.jsx)(eC.sG.svg, {
                ...i,
                ref: t,
                width: n,
                height: o,
                viewBox: "0 0 30 10",
                preserveAspectRatio: "none",
                children: e.asChild ? r : (0,
                eR.jsx)("polygon", {
                    points: "0,0 30,0 15,10"
                })
            })
        }
        );
        ej.displayName = "Arrow";
        var ek = r(6101)
          , eP = r(6081)
          , eS = r(9033)
          , eM = r(2712)
          , eO = "Popper"
          , [eN,eA] = (0,
        eP.A)(eO)
          , [eT,e_] = eN(eO)
          , eD = e => {
            let {__scopePopper: t, children: r} = e
              , [o,i] = n.useState(null);
            return (0,
            eR.jsx)(eT, {
                scope: t,
                anchor: o,
                onAnchorChange: i,
                children: r
            })
        }
        ;
        eD.displayName = eO;
        var eL = "PopperAnchor"
          , eI = n.forwardRef( (e, t) => {
            let {__scopePopper: r, virtualRef: o, ...i} = e
              , a = e_(eL, r)
              , l = n.useRef(null)
              , s = (0,
            ek.s)(t, l);
            return n.useEffect( () => {
                a.onAnchorChange((null == o ? void 0 : o.current) || l.current)
            }
            ),
            o ? null : (0,
            eR.jsx)(eC.sG.div, {
                ...i,
                ref: s
            })
        }
        );
        eI.displayName = eL;
        var eF = "PopperContent"
          , [ez,eW] = eN(eF)
          , eG = n.forwardRef( (e, t) => {
            var r, o, l, u, c, d, f, p;
            let {__scopePopper: m, side: v="bottom", sideOffset: h=0, align: g="center", alignOffset: y=0, arrowPadding: b=0, avoidCollisions: w=!0, collisionBoundary: x=[], collisionPadding: E=0, sticky: C="partial", hideWhenDetached: R=!1, updatePositionStrategy: j="optimized", onPlaced: k, ...P} = e
              , S = e_(eF, m)
              , [M,O] = n.useState(null)
              , A = (0,
            ek.s)(t, e => O(e))
              , [T,_] = n.useState(null)
              , D = function(e) {
                let[t,r] = n.useState(void 0);
                return (0,
                eM.N)( () => {
                    if (e) {
                        r({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let n, o;
                            if (!Array.isArray(t) || !t.length)
                                return;
                            let i = t[0];
                            if ("borderBoxSize"in i) {
                                let e = i.borderBoxSize
                                  , t = Array.isArray(e) ? e[0] : e;
                                n = t.inlineSize,
                                o = t.blockSize
                            } else
                                n = e.offsetWidth,
                                o = e.offsetHeight;
                            r({
                                width: n,
                                height: o
                            })
                        }
                        );
                        return t.observe(e, {
                            box: "border-box"
                        }),
                        () => t.unobserve(e)
                    }
                    r(void 0)
                }
                , [e]),
                t
            }(T)
              , L = null !== (f = null == D ? void 0 : D.width) && void 0 !== f ? f : 0
              , I = null !== (p = null == D ? void 0 : D.height) && void 0 !== p ? p : 0
              , F = "number" == typeof E ? E : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...E
            }
              , z = Array.isArray(x) ? x : [x]
              , W = z.length > 0
              , G = {
                padding: F,
                boundary: z.filter(eV),
                altBoundary: W
            }
              , {refs: B, floatingStyles: K, placement: V, isPositioned: H, middlewareData: X} = function(e) {
                void 0 === e && (e = {});
                let {placement: t="bottom", strategy: r="absolute", middleware: o=[], platform: i, elements: {reference: a, floating: l}={}, transform: s=!0, whileElementsMounted: u, open: c} = e
                  , [d,f] = n.useState({
                    x: 0,
                    y: 0,
                    strategy: r,
                    placement: t,
                    middlewareData: {},
                    isPositioned: !1
                })
                  , [p,m] = n.useState(o);
                ed(p, o) || m(o);
                let[v,h] = n.useState(null)
                  , [g,y] = n.useState(null)
                  , b = n.useCallback(e => {
                    e !== C.current && (C.current = e,
                    h(e))
                }
                , [])
                  , w = n.useCallback(e => {
                    e !== R.current && (R.current = e,
                    y(e))
                }
                , [])
                  , x = a || v
                  , E = l || g
                  , C = n.useRef(null)
                  , R = n.useRef(null)
                  , j = n.useRef(d)
                  , k = null != u
                  , P = em(u)
                  , S = em(i)
                  , M = em(c)
                  , O = n.useCallback( () => {
                    if (!C.current || !R.current)
                        return;
                    let e = {
                        placement: t,
                        strategy: r,
                        middleware: p
                    };
                    S.current && (e.platform = S.current),
                    es(C.current, R.current, e).then(e => {
                        let t = {
                            ...e,
                            isPositioned: !1 !== M.current
                        };
                        N.current && !ed(j.current, t) && (j.current = t,
                        eu.flushSync( () => {
                            f(t)
                        }
                        ))
                    }
                    )
                }
                , [p, t, r, S, M]);
                ec( () => {
                    !1 === c && j.current.isPositioned && (j.current.isPositioned = !1,
                    f(e => ({
                        ...e,
                        isPositioned: !1
                    })))
                }
                , [c]);
                let N = n.useRef(!1);
                ec( () => (N.current = !0,
                () => {
                    N.current = !1
                }
                ), []),
                ec( () => {
                    if (x && (C.current = x),
                    E && (R.current = E),
                    x && E) {
                        if (P.current)
                            return P.current(x, E, O);
                        O()
                    }
                }
                , [x, E, O, P, k]);
                let A = n.useMemo( () => ({
                    reference: C,
                    floating: R,
                    setReference: b,
                    setFloating: w
                }), [b, w])
                  , T = n.useMemo( () => ({
                    reference: x,
                    floating: E
                }), [x, E])
                  , _ = n.useMemo( () => {
                    let e = {
                        position: r,
                        left: 0,
                        top: 0
                    };
                    if (!T.floating)
                        return e;
                    let t = ep(T.floating, d.x)
                      , n = ep(T.floating, d.y);
                    return s ? {
                        ...e,
                        transform: "translate(" + t + "px, " + n + "px)",
                        ...ef(T.floating) >= 1.5 && {
                            willChange: "transform"
                        }
                    } : {
                        position: r,
                        left: t,
                        top: n
                    }
                }
                , [r, s, T.floating, d.x, d.y]);
                return n.useMemo( () => ({
                    ...d,
                    update: O,
                    refs: A,
                    elements: T,
                    floatingStyles: _
                }), [d, O, A, T, _])
            }({
                strategy: "fixed",
                placement: v + ("center" !== g ? "-" + g : ""),
                whileElementsMounted: function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                        t[r] = arguments[r];
                    return function(e, t, r, n) {
                        let o;
                        void 0 === n && (n = {});
                        let {ancestorScroll: l=!0, ancestorResize: u=!0, elementResize: c="function" == typeof ResizeObserver, layoutShift: d="function" == typeof IntersectionObserver, animationFrame: f=!1} = n
                          , p = q(e)
                          , m = l || u ? [...p ? U(p) : [], ...U(t)] : [];
                        m.forEach(e => {
                            l && e.addEventListener("scroll", r, {
                                passive: !0
                            }),
                            u && e.addEventListener("resize", r)
                        }
                        );
                        let v = p && d ? function(e, t) {
                            let r, n = null, o = N(e);
                            function l() {
                                var e;
                                clearTimeout(r),
                                null == (e = n) || e.disconnect(),
                                n = null
                            }
                            return !function u(c, d) {
                                void 0 === c && (c = !1),
                                void 0 === d && (d = 1),
                                l();
                                let f = e.getBoundingClientRect()
                                  , {left: p, top: m, width: v, height: h} = f;
                                if (c || t(),
                                !v || !h)
                                    return;
                                let g = s(m)
                                  , y = s(o.clientWidth - (p + v))
                                  , b = {
                                    rootMargin: -g + "px " + -y + "px " + -s(o.clientHeight - (m + h)) + "px " + -s(p) + "px",
                                    threshold: a(0, i(1, d)) || 1
                                }
                                  , w = !0;
                                function x(t) {
                                    let n = t[0].intersectionRatio;
                                    if (n !== d) {
                                        if (!w)
                                            return u();
                                        n ? u(!1, n) : r = setTimeout( () => {
                                            u(!1, 1e-7)
                                        }
                                        , 1e3)
                                    }
                                    1 !== n || ea(f, e.getBoundingClientRect()) || u(),
                                    w = !1
                                }
                                try {
                                    n = new IntersectionObserver(x,{
                                        ...b,
                                        root: o.ownerDocument
                                    })
                                } catch (e) {
                                    n = new IntersectionObserver(x,b)
                                }
                                n.observe(e)
                            }(!0),
                            l
                        }(p, r) : null
                          , h = -1
                          , g = null;
                        c && (g = new ResizeObserver(e => {
                            let[n] = e;
                            n && n.target === p && g && (g.unobserve(t),
                            cancelAnimationFrame(h),
                            h = requestAnimationFrame( () => {
                                var e;
                                null == (e = g) || e.observe(t)
                            }
                            )),
                            r()
                        }
                        ),
                        p && !f && g.observe(p),
                        g.observe(t));
                        let y = f ? Z(e) : null;
                        return f && function t() {
                            let n = Z(e);
                            y && !ea(y, n) && r(),
                            y = n,
                            o = requestAnimationFrame(t)
                        }(),
                        r(),
                        () => {
                            var e;
                            m.forEach(e => {
                                l && e.removeEventListener("scroll", r),
                                u && e.removeEventListener("resize", r)
                            }
                            ),
                            null == v || v(),
                            null == (e = g) || e.disconnect(),
                            g = null,
                            f && cancelAnimationFrame(o)
                        }
                    }(...t, {
                        animationFrame: "always" === j
                    })
                },
                elements: {
                    reference: S.anchor
                },
                middleware: [eh({
                    mainAxis: h + I,
                    alignmentAxis: y
                }), w && eg({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === C ? ey() : void 0,
                    ...G
                }), w && eb({
                    ...G
                }), ew({
                    ...G,
                    apply: e => {
                        let {elements: t, rects: r, availableWidth: n, availableHeight: o} = e
                          , {width: i, height: a} = r.reference
                          , l = t.floating.style;
                        l.setProperty("--radix-popper-available-width", "".concat(n, "px")),
                        l.setProperty("--radix-popper-available-height", "".concat(o, "px")),
                        l.setProperty("--radix-popper-anchor-width", "".concat(i, "px")),
                        l.setProperty("--radix-popper-anchor-height", "".concat(a, "px"))
                    }
                }), T && eE({
                    element: T,
                    padding: b
                }), eH({
                    arrowWidth: L,
                    arrowHeight: I
                }), R && ex({
                    strategy: "referenceHidden",
                    ...G
                })]
            })
              , [$,Y] = eq(V)
              , J = (0,
            eS.c)(k);
            (0,
            eM.N)( () => {
                H && (null == J || J())
            }
            , [H, J]);
            let Q = null === (r = X.arrow) || void 0 === r ? void 0 : r.x
              , ee = null === (o = X.arrow) || void 0 === o ? void 0 : o.y
              , et = (null === (l = X.arrow) || void 0 === l ? void 0 : l.centerOffset) !== 0
              , [er,en] = n.useState();
            return (0,
            eM.N)( () => {
                M && en(window.getComputedStyle(M).zIndex)
            }
            , [M]),
            (0,
            eR.jsx)("div", {
                ref: B.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...K,
                    transform: H ? K.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: er,
                    "--radix-popper-transform-origin": [null === (u = X.transformOrigin) || void 0 === u ? void 0 : u.x, null === (c = X.transformOrigin) || void 0 === c ? void 0 : c.y].join(" "),
                    ...(null === (d = X.hide) || void 0 === d ? void 0 : d.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none"
                    }
                },
                dir: e.dir,
                children: (0,
                eR.jsx)(ez, {
                    scope: m,
                    placedSide: $,
                    onArrowChange: _,
                    arrowX: Q,
                    arrowY: ee,
                    shouldHideArrow: et,
                    children: (0,
                    eR.jsx)(eC.sG.div, {
                        "data-side": $,
                        "data-align": Y,
                        ...P,
                        ref: A,
                        style: {
                            ...P.style,
                            animation: H ? void 0 : "none"
                        }
                    })
                })
            })
        }
        );
        eG.displayName = eF;
        var eB = "PopperArrow"
          , eK = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        }
          , eU = n.forwardRef(function(e, t) {
            let {__scopePopper: r, ...n} = e
              , o = eW(eB, r)
              , i = eK[o.placedSide];
            return (0,
            eR.jsx)("span", {
                ref: o.onArrowChange,
                style: {
                    position: "absolute",
                    left: o.arrowX,
                    top: o.arrowY,
                    [i]: 0,
                    transformOrigin: {
                        top: "",
                        right: "0 0",
                        bottom: "center 0",
                        left: "100% 0"
                    }[o.placedSide],
                    transform: {
                        top: "translateY(100%)",
                        right: "translateY(50%) rotate(90deg) translateX(-50%)",
                        bottom: "rotate(180deg)",
                        left: "translateY(50%) rotate(-90deg) translateX(50%)"
                    }[o.placedSide],
                    visibility: o.shouldHideArrow ? "hidden" : void 0
                },
                children: (0,
                eR.jsx)(ej, {
                    ...n,
                    ref: t,
                    style: {
                        ...n.style,
                        display: "block"
                    }
                })
            })
        });
        function eV(e) {
            return null !== e
        }
        eU.displayName = eB;
        var eH = e => ({
            name: "transformOrigin",
            options: e,
            fn(t) {
                var r, n, o, i, a;
                let {placement: l, rects: s, middlewareData: u} = t
                  , c = (null === (r = u.arrow) || void 0 === r ? void 0 : r.centerOffset) !== 0
                  , d = c ? 0 : e.arrowWidth
                  , f = c ? 0 : e.arrowHeight
                  , [p,m] = eq(l)
                  , v = {
                    start: "0%",
                    center: "50%",
                    end: "100%"
                }[m]
                  , h = (null !== (i = null === (n = u.arrow) || void 0 === n ? void 0 : n.x) && void 0 !== i ? i : 0) + d / 2
                  , g = (null !== (a = null === (o = u.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== a ? a : 0) + f / 2
                  , y = ""
                  , b = "";
                return "bottom" === p ? (y = c ? v : "".concat(h, "px"),
                b = "".concat(-f, "px")) : "top" === p ? (y = c ? v : "".concat(h, "px"),
                b = "".concat(s.floating.height + f, "px")) : "right" === p ? (y = "".concat(-f, "px"),
                b = c ? v : "".concat(g, "px")) : "left" === p && (y = "".concat(s.floating.width + f, "px"),
                b = c ? v : "".concat(g, "px")),
                {
                    data: {
                        x: y,
                        y: b
                    }
                }
            }
        });
        function eq(e) {
            let[t,r="center"] = e.split("-");
            return [t, r]
        }
        var eX = eD
          , e$ = eI
          , eY = eG
          , eZ = eU
    }
    ,
    8859: (e, t) => {
        function r(e) {
            let t = {};
            for (let[r,n] of e.entries()) {
                let e = t[r];
                void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
            }
            return t
        }
        function n(e) {
            return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
        }
        function o(e) {
            let t = new URLSearchParams;
            for (let[r,o] of Object.entries(e))
                if (Array.isArray(o))
                    for (let e of o)
                        t.append(r, n(e));
                else
                    t.set(r, n(o));
            return t
        }
        function i(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                r[n - 1] = arguments[n];
            for (let t of r) {
                for (let r of t.keys())
                    e.delete(r);
                for (let[r,n] of t.entries())
                    e.append(r, n)
            }
            return e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            assign: function() {
                return i
            },
            searchParamsToUrlQuery: function() {
                return r
            },
            urlQueryToSearchParams: function() {
                return o
            }
        })
    }
    ,
    8883: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return l
            }
        }),
        r(3230);
        let n = r(5100)
          , o = r(5840);
        function i(e) {
            return void 0 !== e.default
        }
        function a(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function l(e, t) {
            var r, l;
            let s, u, c, {src: d, sizes: f, unoptimized: p=!1, priority: m=!1, loading: v, className: h, quality: g, width: y, height: b, fill: w=!1, style: x, overrideSrc: E, onLoad: C, onLoadingComplete: R, placeholder: j="empty", blurDataURL: k, fetchPriority: P, decoding: S="async", layout: M, objectFit: O, objectPosition: N, lazyBoundary: A, lazyRoot: T, ..._} = e, {imgConf: D, showAltText: L, blurComplete: I, defaultLoader: F} = t, z = D || o.imageConfigDefault;
            if ("allSizes"in z)
                s = z;
            else {
                let e = [...z.deviceSizes, ...z.imageSizes].sort( (e, t) => e - t)
                  , t = z.deviceSizes.sort( (e, t) => e - t)
                  , n = null == (r = z.qualities) ? void 0 : r.sort( (e, t) => e - t);
                s = {
                    ...z,
                    allSizes: e,
                    deviceSizes: t,
                    qualities: n
                }
            }
            if (void 0 === F)
                throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                    value: "E163",
                    enumerable: !1,
                    configurable: !0
                });
            let W = _.loader || F;
            delete _.loader,
            delete _.srcSet;
            let G = "__next_img_default"in W;
            if (G) {
                if ("custom" === s.loader)
                    throw Object.defineProperty(Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", {
                        value: "E252",
                        enumerable: !1,
                        configurable: !0
                    })
            } else {
                let e = W;
                W = t => {
                    let {config: r, ...n} = t;
                    return e(n)
                }
            }
            if (M) {
                "fill" === M && (w = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[M];
                e && (x = {
                    ...x,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[M];
                t && !f && (f = t)
            }
            let B = ""
              , K = a(y)
              , U = a(b);
            if ((l = d) && "object" == typeof l && (i(l) || void 0 !== l.src)) {
                let e = i(d) ? d.default : d;
                if (!e.src)
                    throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E460",
                        enumerable: !1,
                        configurable: !0
                    });
                if (!e.height || !e.width)
                    throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e)), "__NEXT_ERROR_CODE", {
                        value: "E48",
                        enumerable: !1,
                        configurable: !0
                    });
                if (u = e.blurWidth,
                c = e.blurHeight,
                k = k || e.blurDataURL,
                B = e.src,
                !w) {
                    if (K || U) {
                        if (K && !U) {
                            let t = K / e.width;
                            U = Math.round(e.height * t)
                        } else if (!K && U) {
                            let t = U / e.height;
                            K = Math.round(e.width * t)
                        }
                    } else
                        K = e.width,
                        U = e.height
                }
            }
            let V = !m && ("lazy" === v || void 0 === v);
            (!(d = "string" == typeof d ? d : B) || d.startsWith("data:") || d.startsWith("blob:")) && (p = !0,
            V = !1),
            s.unoptimized && (p = !0),
            G && !s.dangerouslyAllowSVG && d.split("?", 1)[0].endsWith(".svg") && (p = !0);
            let H = a(g)
              , q = Object.assign(w ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: O,
                objectPosition: N
            } : {}, L ? {} : {
                color: "transparent"
            }, x)
              , X = I || "empty" === j ? null : "blur" === j ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            n.getImageBlurSvg)({
                widthInt: K,
                heightInt: U,
                blurWidth: u,
                blurHeight: c,
                blurDataURL: k || "",
                objectFit: q.objectFit
            }) + '")' : 'url("' + j + '")'
              , $ = X ? {
                backgroundSize: q.objectFit || "cover",
                backgroundPosition: q.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: X
            } : {}
              , Y = function(e) {
                let {config: t, src: r, unoptimized: n, width: o, quality: i, sizes: a, loader: l} = e;
                if (n)
                    return {
                        src: r,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: s, kind: u} = function(e, t, r) {
                    let {deviceSizes: n, allSizes: o} = e;
                    if (r) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let n; n = e.exec(r); n)
                            t.push(parseInt(n[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: o.filter(t => t >= n[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: o,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: n,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))],
                        kind: "x"
                    }
                }(t, o, a)
                  , c = s.length - 1;
                return {
                    sizes: a || "w" !== u ? a : "100vw",
                    srcSet: s.map( (e, n) => l({
                        config: t,
                        src: r,
                        quality: i,
                        width: e
                    }) + " " + ("w" === u ? e : n + 1) + u).join(", "),
                    src: l({
                        config: t,
                        src: r,
                        quality: i,
                        width: s[c]
                    })
                }
            }({
                config: s,
                src: d,
                unoptimized: p,
                width: K,
                quality: H,
                sizes: f,
                loader: W
            });
            return {
                props: {
                    ..._,
                    loading: V ? "lazy" : v,
                    fetchPriority: P,
                    width: K,
                    height: U,
                    decoding: S,
                    className: h,
                    style: {
                        ...q,
                        ...$
                    },
                    sizes: Y.sizes,
                    srcSet: Y.srcSet,
                    src: E || Y.src
                },
                meta: {
                    unoptimized: p,
                    priority: m,
                    placeholder: j,
                    fill: w
                }
            }
        }
    }
    ,
    8905: (e, t, r) => {
        r.d(t, {
            C: () => a
        });
        var n = r(2115)
          , o = r(6101)
          , i = r(2712)
          , a = e => {
            let {present: t, children: r} = e
              , a = function(e) {
                var t, r;
                let[o,a] = n.useState()
                  , s = n.useRef({})
                  , u = n.useRef(e)
                  , c = n.useRef("none")
                  , [d,f] = (t = e ? "mounted" : "unmounted",
                r = {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                },
                n.useReducer( (e, t) => {
                    let n = r[e][t];
                    return null != n ? n : e
                }
                , t));
                return n.useEffect( () => {
                    let e = l(s.current);
                    c.current = "mounted" === d ? e : "none"
                }
                , [d]),
                (0,
                i.N)( () => {
                    let t = s.current
                      , r = u.current;
                    if (r !== e) {
                        let n = c.current
                          , o = l(t);
                        e ? f("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? f("UNMOUNT") : r && n !== o ? f("ANIMATION_OUT") : f("UNMOUNT"),
                        u.current = e
                    }
                }
                , [e, f]),
                (0,
                i.N)( () => {
                    if (o) {
                        var e;
                        let t;
                        let r = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window
                          , n = e => {
                            let n = l(s.current).includes(e.animationName);
                            if (e.target === o && n && (f("ANIMATION_END"),
                            !u.current)) {
                                let e = o.style.animationFillMode;
                                o.style.animationFillMode = "forwards",
                                t = r.setTimeout( () => {
                                    "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                }
                                )
                            }
                        }
                          , i = e => {
                            e.target === o && (c.current = l(s.current))
                        }
                        ;
                        return o.addEventListener("animationstart", i),
                        o.addEventListener("animationcancel", n),
                        o.addEventListener("animationend", n),
                        () => {
                            r.clearTimeout(t),
                            o.removeEventListener("animationstart", i),
                            o.removeEventListener("animationcancel", n),
                            o.removeEventListener("animationend", n)
                        }
                    }
                    f("ANIMATION_END")
                }
                , [o, f]),
                {
                    isPresent: ["mounted", "unmountSuspended"].includes(d),
                    ref: n.useCallback(e => {
                        e && (s.current = getComputedStyle(e)),
                        a(e)
                    }
                    , [])
                }
            }(t)
              , s = "function" == typeof r ? r({
                present: a.isPresent
            }) : n.Children.only(r)
              , u = (0,
            o.s)(a.ref, function(e) {
                var t, r;
                let n = null === (t = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === t ? void 0 : t.get
                  , o = n && "isReactWarning"in n && n.isReactWarning;
                return o ? e.ref : (o = (n = null === (r = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === r ? void 0 : r.get) && "isReactWarning"in n && n.isReactWarning) ? e.props.ref : e.props.ref || e.ref
            }(s));
            return "function" == typeof r || a.isPresent ? n.cloneElement(s, {
                ref: u
            }) : null
        }
        ;
        function l(e) {
            return (null == e ? void 0 : e.animationName) || "none"
        }
        a.displayName = "Presence"
    }
    ,
    9033: (e, t, r) => {
        r.d(t, {
            c: () => o
        });
        var n = r(2115);
        function o(e) {
            let t = n.useRef(e);
            return n.useEffect( () => {
                t.current = e
            }
            ),
            n.useMemo( () => (...e) => t.current?.(...e), [])
        }
    }
    ,
    9178: (e, t, r) => {
        r.d(t, {
            qW: () => f
        });
        var n, o = r(2115), i = r(5185), a = r(3655), l = r(6101), s = r(9033), u = r(5155), c = "dismissableLayer.update", d = o.createContext({
            layers: new Set,
            layersWithOutsidePointerEventsDisabled: new Set,
            branches: new Set
        }), f = o.forwardRef( (e, t) => {
            var r, f;
            let {disableOutsidePointerEvents: v=!1, onEscapeKeyDown: h, onPointerDownOutside: g, onFocusOutside: y, onInteractOutside: b, onDismiss: w, ...x} = e
              , E = o.useContext(d)
              , [C,R] = o.useState(null)
              , j = null !== (f = null == C ? void 0 : C.ownerDocument) && void 0 !== f ? f : null === (r = globalThis) || void 0 === r ? void 0 : r.document
              , [,k] = o.useState({})
              , P = (0,
            l.s)(t, e => R(e))
              , S = Array.from(E.layers)
              , [M] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1)
              , O = S.indexOf(M)
              , N = C ? S.indexOf(C) : -1
              , A = E.layersWithOutsidePointerEventsDisabled.size > 0
              , T = N >= O
              , _ = function(e) {
                var t;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document
                  , n = (0,
                s.c)(e)
                  , i = o.useRef(!1)
                  , a = o.useRef( () => {}
                );
                return o.useEffect( () => {
                    let e = e => {
                        if (e.target && !i.current) {
                            let t = function() {
                                m("dismissableLayer.pointerDownOutside", n, o, {
                                    discrete: !0
                                })
                            }
                              , o = {
                                originalEvent: e
                            };
                            "touch" === e.pointerType ? (r.removeEventListener("click", a.current),
                            a.current = t,
                            r.addEventListener("click", a.current, {
                                once: !0
                            })) : t()
                        } else
                            r.removeEventListener("click", a.current);
                        i.current = !1
                    }
                      , t = window.setTimeout( () => {
                        r.addEventListener("pointerdown", e)
                    }
                    , 0);
                    return () => {
                        window.clearTimeout(t),
                        r.removeEventListener("pointerdown", e),
                        r.removeEventListener("click", a.current)
                    }
                }
                , [r, n]),
                {
                    onPointerDownCapture: () => i.current = !0
                }
            }(e => {
                let t = e.target
                  , r = [...E.branches].some(e => e.contains(t));
                !T || r || (null == g || g(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w())
            }
            , j)
              , D = function(e) {
                var t;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document
                  , n = (0,
                s.c)(e)
                  , i = o.useRef(!1);
                return o.useEffect( () => {
                    let e = e => {
                        e.target && !i.current && m("dismissableLayer.focusOutside", n, {
                            originalEvent: e
                        }, {
                            discrete: !1
                        })
                    }
                    ;
                    return r.addEventListener("focusin", e),
                    () => r.removeEventListener("focusin", e)
                }
                , [r, n]),
                {
                    onFocusCapture: () => i.current = !0,
                    onBlurCapture: () => i.current = !1
                }
            }(e => {
                let t = e.target;
                [...E.branches].some(e => e.contains(t)) || (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w())
            }
            , j);
            return !function(e, t=globalThis?.document) {
                let r = (0,
                s.c)(e);
                o.useEffect( () => {
                    let e = e => {
                        "Escape" === e.key && r(e)
                    }
                    ;
                    return t.addEventListener("keydown", e, {
                        capture: !0
                    }),
                    () => t.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }
                , [r, t])
            }(e => {
                N === E.layers.size - 1 && (null == h || h(e),
                !e.defaultPrevented && w && (e.preventDefault(),
                w()))
            }
            , j),
            o.useEffect( () => {
                if (C)
                    return v && (0 === E.layersWithOutsidePointerEventsDisabled.size && (n = j.body.style.pointerEvents,
                    j.body.style.pointerEvents = "none"),
                    E.layersWithOutsidePointerEventsDisabled.add(C)),
                    E.layers.add(C),
                    p(),
                    () => {
                        v && 1 === E.layersWithOutsidePointerEventsDisabled.size && (j.body.style.pointerEvents = n)
                    }
            }
            , [C, j, v, E]),
            o.useEffect( () => () => {
                C && (E.layers.delete(C),
                E.layersWithOutsidePointerEventsDisabled.delete(C),
                p())
            }
            , [C, E]),
            o.useEffect( () => {
                let e = () => k({});
                return document.addEventListener(c, e),
                () => document.removeEventListener(c, e)
            }
            , []),
            (0,
            u.jsx)(a.sG.div, {
                ...x,
                ref: P,
                style: {
                    pointerEvents: A ? T ? "auto" : "none" : void 0,
                    ...e.style
                },
                onFocusCapture: (0,
                i.m)(e.onFocusCapture, D.onFocusCapture),
                onBlurCapture: (0,
                i.m)(e.onBlurCapture, D.onBlurCapture),
                onPointerDownCapture: (0,
                i.m)(e.onPointerDownCapture, _.onPointerDownCapture)
            })
        }
        );
        function p() {
            let e = new CustomEvent(c);
            document.dispatchEvent(e)
        }
        function m(e, t, r, n) {
            let {discrete: o} = n
              , i = r.originalEvent.target
              , l = new CustomEvent(e,{
                bubbles: !1,
                cancelable: !0,
                detail: r
            });
            t && i.addEventListener(e, t, {
                once: !0
            }),
            o ? (0,
            a.hO)(i, l) : i.dispatchEvent(l)
        }
        f.displayName = "DismissableLayer",
        o.forwardRef( (e, t) => {
            let r = o.useContext(d)
              , n = o.useRef(null)
              , i = (0,
            l.s)(t, n);
            return o.useEffect( () => {
                let e = n.current;
                if (e)
                    return r.branches.add(e),
                    () => {
                        r.branches.delete(e)
                    }
            }
            , [r.branches]),
            (0,
            u.jsx)(a.sG.div, {
                ...e,
                ref: i
            })
        }
        ).displayName = "DismissableLayerBranch"
    }
    ,
    9428: (e, t, r) => {
        r.d(t, {
            A: () => n
        });
        let n = (0,
        r(9946).A)("Circle", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]])
    }
    ,
    9449: (e, t, r) => {
        r.d(t, {
            H_: () => td,
            UC: () => tl,
            YJ: () => ts,
            q7: () => tc,
            VF: () => tm,
            JU: () => tu,
            ZL: () => ta,
            z6: () => tf,
            hN: () => tp,
            bL: () => to,
            wv: () => tv,
            Pb: () => th,
            G5: () => ty,
            ZP: () => tg,
            l9: () => ti
        });
        var n = r(2115)
          , o = r(5185)
          , i = r(6101)
          , a = r(6081)
          , l = r(5845)
          , s = r(3655)
          , u = r(2284)
          , c = r(4315)
          , d = r(9178)
          , f = r(2293)
          , p = r(7900)
          , m = r(1285)
          , v = r(8795)
          , h = r(4378)
          , g = r(8905)
          , y = r(9033)
          , b = r(5155)
          , w = "rovingFocusGroup.onEntryFocus"
          , x = {
            bubbles: !1,
            cancelable: !0
        }
          , E = "RovingFocusGroup"
          , [C,R,j] = (0,
        u.N)(E)
          , [k,P] = (0,
        a.A)(E, [j])
          , [S,M] = k(E)
          , O = n.forwardRef( (e, t) => (0,
        b.jsx)(C.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0,
            b.jsx)(C.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: (0,
                b.jsx)(N, {
                    ...e,
                    ref: t
                })
            })
        }));
        O.displayName = E;
        var N = n.forwardRef( (e, t) => {
            let {__scopeRovingFocusGroup: r, orientation: a, loop: u=!1, dir: d, currentTabStopId: f, defaultCurrentTabStopId: p, onCurrentTabStopIdChange: m, onEntryFocus: v, preventScrollOnEntryFocus: h=!1, ...g} = e
              , E = n.useRef(null)
              , C = (0,
            i.s)(t, E)
              , j = (0,
            c.jH)(d)
              , [k=null,P] = (0,
            l.i)({
                prop: f,
                defaultProp: p,
                onChange: m
            })
              , [M,O] = n.useState(!1)
              , N = (0,
            y.c)(v)
              , A = R(r)
              , T = n.useRef(!1)
              , [_,L] = n.useState(0);
            return n.useEffect( () => {
                let e = E.current;
                if (e)
                    return e.addEventListener(w, N),
                    () => e.removeEventListener(w, N)
            }
            , [N]),
            (0,
            b.jsx)(S, {
                scope: r,
                orientation: a,
                dir: j,
                loop: u,
                currentTabStopId: k,
                onItemFocus: n.useCallback(e => P(e), [P]),
                onItemShiftTab: n.useCallback( () => O(!0), []),
                onFocusableItemAdd: n.useCallback( () => L(e => e + 1), []),
                onFocusableItemRemove: n.useCallback( () => L(e => e - 1), []),
                children: (0,
                b.jsx)(s.sG.div, {
                    tabIndex: M || 0 === _ ? -1 : 0,
                    "data-orientation": a,
                    ...g,
                    ref: C,
                    style: {
                        outline: "none",
                        ...e.style
                    },
                    onMouseDown: (0,
                    o.m)(e.onMouseDown, () => {
                        T.current = !0
                    }
                    ),
                    onFocus: (0,
                    o.m)(e.onFocus, e => {
                        let t = !T.current;
                        if (e.target === e.currentTarget && t && !M) {
                            let t = new CustomEvent(w,x);
                            if (e.currentTarget.dispatchEvent(t),
                            !t.defaultPrevented) {
                                let e = A().filter(e => e.focusable);
                                D([e.find(e => e.active), e.find(e => e.id === k), ...e].filter(Boolean).map(e => e.ref.current), h)
                            }
                        }
                        T.current = !1
                    }
                    ),
                    onBlur: (0,
                    o.m)(e.onBlur, () => O(!1))
                })
            })
        }
        )
          , A = "RovingFocusGroupItem"
          , T = n.forwardRef( (e, t) => {
            let {__scopeRovingFocusGroup: r, focusable: i=!0, active: a=!1, tabStopId: l, ...u} = e
              , c = (0,
            m.B)()
              , d = l || c
              , f = M(A, r)
              , p = f.currentTabStopId === d
              , v = R(r)
              , {onFocusableItemAdd: h, onFocusableItemRemove: g} = f;
            return n.useEffect( () => {
                if (i)
                    return h(),
                    () => g()
            }
            , [i, h, g]),
            (0,
            b.jsx)(C.ItemSlot, {
                scope: r,
                id: d,
                focusable: i,
                active: a,
                children: (0,
                b.jsx)(s.sG.span, {
                    tabIndex: p ? 0 : -1,
                    "data-orientation": f.orientation,
                    ...u,
                    ref: t,
                    onMouseDown: (0,
                    o.m)(e.onMouseDown, e => {
                        i ? f.onItemFocus(d) : e.preventDefault()
                    }
                    ),
                    onFocus: (0,
                    o.m)(e.onFocus, () => f.onItemFocus(d)),
                    onKeyDown: (0,
                    o.m)(e.onKeyDown, e => {
                        if ("Tab" === e.key && e.shiftKey) {
                            f.onItemShiftTab();
                            return
                        }
                        if (e.target !== e.currentTarget)
                            return;
                        let t = function(e, t, r) {
                            var n;
                            let o = (n = e.key,
                            "rtl" !== r ? n : "ArrowLeft" === n ? "ArrowRight" : "ArrowRight" === n ? "ArrowLeft" : n);
                            if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o)))
                                return _[o]
                        }(e, f.orientation, f.dir);
                        if (void 0 !== t) {
                            if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                                return;
                            e.preventDefault();
                            let r = v().filter(e => e.focusable).map(e => e.ref.current);
                            if ("last" === t)
                                r.reverse();
                            else if ("prev" === t || "next" === t) {
                                "prev" === t && r.reverse();
                                let n = r.indexOf(e.currentTarget);
                                r = f.loop ? function(e, t) {
                                    return e.map( (r, n) => e[(t + n) % e.length])
                                }(r, n + 1) : r.slice(n + 1)
                            }
                            setTimeout( () => D(r))
                        }
                    }
                    )
                })
            })
        }
        );
        T.displayName = A;
        var _ = {
            ArrowLeft: "prev",
            ArrowUp: "prev",
            ArrowRight: "next",
            ArrowDown: "next",
            PageUp: "first",
            Home: "first",
            PageDown: "last",
            End: "last"
        };
        function D(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , r = document.activeElement;
            for (let n of e)
                if (n === r || (n.focus({
                    preventScroll: t
                }),
                document.activeElement !== r))
                    return
        }
        var L = r(9708)
          , I = r(8168)
          , F = r(3795)
          , z = ["Enter", " "]
          , W = ["ArrowUp", "PageDown", "End"]
          , G = ["ArrowDown", "PageUp", "Home", ...W]
          , B = {
            ltr: [...z, "ArrowRight"],
            rtl: [...z, "ArrowLeft"]
        }
          , K = {
            ltr: ["ArrowLeft"],
            rtl: ["ArrowRight"]
        }
          , U = "Menu"
          , [V,H,q] = (0,
        u.N)(U)
          , [X,$] = (0,
        a.A)(U, [q, v.Bk, P])
          , Y = (0,
        v.Bk)()
          , Z = P()
          , [J,Q] = X(U)
          , [ee,et] = X(U)
          , er = e => {
            let {__scopeMenu: t, open: r=!1, children: o, dir: i, onOpenChange: a, modal: l=!0} = e
              , s = Y(t)
              , [u,d] = n.useState(null)
              , f = n.useRef(!1)
              , p = (0,
            y.c)(a)
              , m = (0,
            c.jH)(i);
            return n.useEffect( () => {
                let e = () => {
                    f.current = !0,
                    document.addEventListener("pointerdown", t, {
                        capture: !0,
                        once: !0
                    }),
                    document.addEventListener("pointermove", t, {
                        capture: !0,
                        once: !0
                    })
                }
                  , t = () => f.current = !1;
                return document.addEventListener("keydown", e, {
                    capture: !0
                }),
                () => {
                    document.removeEventListener("keydown", e, {
                        capture: !0
                    }),
                    document.removeEventListener("pointerdown", t, {
                        capture: !0
                    }),
                    document.removeEventListener("pointermove", t, {
                        capture: !0
                    })
                }
            }
            , []),
            (0,
            b.jsx)(v.bL, {
                ...s,
                children: (0,
                b.jsx)(J, {
                    scope: t,
                    open: r,
                    onOpenChange: p,
                    content: u,
                    onContentChange: d,
                    children: (0,
                    b.jsx)(ee, {
                        scope: t,
                        onClose: n.useCallback( () => p(!1), [p]),
                        isUsingKeyboardRef: f,
                        dir: m,
                        modal: l,
                        children: o
                    })
                })
            })
        }
        ;
        er.displayName = U;
        var en = n.forwardRef( (e, t) => {
            let {__scopeMenu: r, ...n} = e
              , o = Y(r);
            return (0,
            b.jsx)(v.Mz, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        en.displayName = "MenuAnchor";
        var eo = "MenuPortal"
          , [ei,ea] = X(eo, {
            forceMount: void 0
        })
          , el = e => {
            let {__scopeMenu: t, forceMount: r, children: n, container: o} = e
              , i = Q(eo, t);
            return (0,
            b.jsx)(ei, {
                scope: t,
                forceMount: r,
                children: (0,
                b.jsx)(g.C, {
                    present: r || i.open,
                    children: (0,
                    b.jsx)(h.Z, {
                        asChild: !0,
                        container: o,
                        children: n
                    })
                })
            })
        }
        ;
        el.displayName = eo;
        var es = "MenuContent"
          , [eu,ec] = X(es)
          , ed = n.forwardRef( (e, t) => {
            let r = ea(es, e.__scopeMenu)
              , {forceMount: n=r.forceMount, ...o} = e
              , i = Q(es, e.__scopeMenu)
              , a = et(es, e.__scopeMenu);
            return (0,
            b.jsx)(V.Provider, {
                scope: e.__scopeMenu,
                children: (0,
                b.jsx)(g.C, {
                    present: n || i.open,
                    children: (0,
                    b.jsx)(V.Slot, {
                        scope: e.__scopeMenu,
                        children: a.modal ? (0,
                        b.jsx)(ef, {
                            ...o,
                            ref: t
                        }) : (0,
                        b.jsx)(ep, {
                            ...o,
                            ref: t
                        })
                    })
                })
            })
        }
        )
          , ef = n.forwardRef( (e, t) => {
            let r = Q(es, e.__scopeMenu)
              , a = n.useRef(null)
              , l = (0,
            i.s)(t, a);
            return n.useEffect( () => {
                let e = a.current;
                if (e)
                    return (0,
                    I.Eq)(e)
            }
            , []),
            (0,
            b.jsx)(em, {
                ...e,
                ref: l,
                trapFocus: r.open,
                disableOutsidePointerEvents: r.open,
                disableOutsideScroll: !0,
                onFocusOutside: (0,
                o.m)(e.onFocusOutside, e => e.preventDefault(), {
                    checkForDefaultPrevented: !1
                }),
                onDismiss: () => r.onOpenChange(!1)
            })
        }
        )
          , ep = n.forwardRef( (e, t) => {
            let r = Q(es, e.__scopeMenu);
            return (0,
            b.jsx)(em, {
                ...e,
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                onDismiss: () => r.onOpenChange(!1)
            })
        }
        )
          , em = n.forwardRef( (e, t) => {
            let {__scopeMenu: r, loop: a=!1, trapFocus: l, onOpenAutoFocus: s, onCloseAutoFocus: u, disableOutsidePointerEvents: c, onEntryFocus: m, onEscapeKeyDown: h, onPointerDownOutside: g, onFocusOutside: y, onInteractOutside: w, onDismiss: x, disableOutsideScroll: E, ...C} = e
              , R = Q(es, r)
              , j = et(es, r)
              , k = Y(r)
              , P = Z(r)
              , S = H(r)
              , [M,N] = n.useState(null)
              , A = n.useRef(null)
              , T = (0,
            i.s)(t, A, R.onContentChange)
              , _ = n.useRef(0)
              , D = n.useRef("")
              , I = n.useRef(0)
              , z = n.useRef(null)
              , B = n.useRef("right")
              , K = n.useRef(0)
              , U = E ? F.A : n.Fragment
              , V = E ? {
                as: L.DX,
                allowPinchZoom: !0
            } : void 0
              , q = e => {
                var t, r;
                let n = D.current + e
                  , o = S().filter(e => !e.disabled)
                  , i = document.activeElement
                  , a = null === (t = o.find(e => e.ref.current === i)) || void 0 === t ? void 0 : t.textValue
                  , l = function(e, t, r) {
                    var n;
                    let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t
                      , i = (n = Math.max(r ? e.indexOf(r) : -1, 0),
                    e.map( (t, r) => e[(n + r) % e.length]));
                    1 === o.length && (i = i.filter(e => e !== r));
                    let a = i.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                    return a !== r ? a : void 0
                }(o.map(e => e.textValue), n, a)
                  , s = null === (r = o.find(e => e.textValue === l)) || void 0 === r ? void 0 : r.ref.current;
                !function e(t) {
                    D.current = t,
                    window.clearTimeout(_.current),
                    "" !== t && (_.current = window.setTimeout( () => e(""), 1e3))
                }(n),
                s && setTimeout( () => s.focus())
            }
            ;
            n.useEffect( () => () => window.clearTimeout(_.current), []),
            (0,
            f.Oh)();
            let X = n.useCallback(e => {
                var t, r;
                return B.current === (null === (t = z.current) || void 0 === t ? void 0 : t.side) && function(e, t) {
                    return !!t && function(e, t) {
                        let {x: r, y: n} = e
                          , o = !1;
                        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                            let a = t[e].x
                              , l = t[e].y
                              , s = t[i].x
                              , u = t[i].y;
                            l > n != u > n && r < (s - a) * (n - l) / (u - l) + a && (o = !o)
                        }
                        return o
                    }({
                        x: e.clientX,
                        y: e.clientY
                    }, t)
                }(e, null === (r = z.current) || void 0 === r ? void 0 : r.area)
            }
            , []);
            return (0,
            b.jsx)(eu, {
                scope: r,
                searchRef: D,
                onItemEnter: n.useCallback(e => {
                    X(e) && e.preventDefault()
                }
                , [X]),
                onItemLeave: n.useCallback(e => {
                    var t;
                    X(e) || (null === (t = A.current) || void 0 === t || t.focus(),
                    N(null))
                }
                , [X]),
                onTriggerLeave: n.useCallback(e => {
                    X(e) && e.preventDefault()
                }
                , [X]),
                pointerGraceTimerRef: I,
                onPointerGraceIntentChange: n.useCallback(e => {
                    z.current = e
                }
                , []),
                children: (0,
                b.jsx)(U, {
                    ...V,
                    children: (0,
                    b.jsx)(p.n, {
                        asChild: !0,
                        trapped: l,
                        onMountAutoFocus: (0,
                        o.m)(s, e => {
                            var t;
                            e.preventDefault(),
                            null === (t = A.current) || void 0 === t || t.focus({
                                preventScroll: !0
                            })
                        }
                        ),
                        onUnmountAutoFocus: u,
                        children: (0,
                        b.jsx)(d.qW, {
                            asChild: !0,
                            disableOutsidePointerEvents: c,
                            onEscapeKeyDown: h,
                            onPointerDownOutside: g,
                            onFocusOutside: y,
                            onInteractOutside: w,
                            onDismiss: x,
                            children: (0,
                            b.jsx)(O, {
                                asChild: !0,
                                ...P,
                                dir: j.dir,
                                orientation: "vertical",
                                loop: a,
                                currentTabStopId: M,
                                onCurrentTabStopIdChange: N,
                                onEntryFocus: (0,
                                o.m)(m, e => {
                                    j.isUsingKeyboardRef.current || e.preventDefault()
                                }
                                ),
                                preventScrollOnEntryFocus: !0,
                                children: (0,
                                b.jsx)(v.UC, {
                                    role: "menu",
                                    "aria-orientation": "vertical",
                                    "data-state": eB(R.open),
                                    "data-radix-menu-content": "",
                                    dir: j.dir,
                                    ...k,
                                    ...C,
                                    ref: T,
                                    style: {
                                        outline: "none",
                                        ...C.style
                                    },
                                    onKeyDown: (0,
                                    o.m)(C.onKeyDown, e => {
                                        let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget
                                          , r = e.ctrlKey || e.altKey || e.metaKey
                                          , n = 1 === e.key.length;
                                        t && ("Tab" === e.key && e.preventDefault(),
                                        !r && n && q(e.key));
                                        let o = A.current;
                                        if (e.target !== o || !G.includes(e.key))
                                            return;
                                        e.preventDefault();
                                        let i = S().filter(e => !e.disabled).map(e => e.ref.current);
                                        W.includes(e.key) && i.reverse(),
                                        function(e) {
                                            let t = document.activeElement;
                                            for (let r of e)
                                                if (r === t || (r.focus(),
                                                document.activeElement !== t))
                                                    return
                                        }(i)
                                    }
                                    ),
                                    onBlur: (0,
                                    o.m)(e.onBlur, e => {
                                        e.currentTarget.contains(e.target) || (window.clearTimeout(_.current),
                                        D.current = "")
                                    }
                                    ),
                                    onPointerMove: (0,
                                    o.m)(e.onPointerMove, eV(e => {
                                        let t = e.target
                                          , r = K.current !== e.clientX;
                                        e.currentTarget.contains(t) && r && (B.current = e.clientX > K.current ? "right" : "left",
                                        K.current = e.clientX)
                                    }
                                    ))
                                })
                            })
                        })
                    })
                })
            })
        }
        );
        ed.displayName = es;
        var ev = n.forwardRef( (e, t) => {
            let {__scopeMenu: r, ...n} = e;
            return (0,
            b.jsx)(s.sG.div, {
                role: "group",
                ...n,
                ref: t
            })
        }
        );
        ev.displayName = "MenuGroup";
        var eh = n.forwardRef( (e, t) => {
            let {__scopeMenu: r, ...n} = e;
            return (0,
            b.jsx)(s.sG.div, {
                ...n,
                ref: t
            })
        }
        );
        eh.displayName = "MenuLabel";
        var eg = "MenuItem"
          , ey = "menu.itemSelect"
          , eb = n.forwardRef( (e, t) => {
            let {disabled: r=!1, onSelect: a, ...l} = e
              , u = n.useRef(null)
              , c = et(eg, e.__scopeMenu)
              , d = ec(eg, e.__scopeMenu)
              , f = (0,
            i.s)(t, u)
              , p = n.useRef(!1);
            return (0,
            b.jsx)(ew, {
                ...l,
                ref: f,
                disabled: r,
                onClick: (0,
                o.m)(e.onClick, () => {
                    let e = u.current;
                    if (!r && e) {
                        let t = new CustomEvent(ey,{
                            bubbles: !0,
                            cancelable: !0
                        });
                        e.addEventListener(ey, e => null == a ? void 0 : a(e), {
                            once: !0
                        }),
                        (0,
                        s.hO)(e, t),
                        t.defaultPrevented ? p.current = !1 : c.onClose()
                    }
                }
                ),
                onPointerDown: t => {
                    var r;
                    null === (r = e.onPointerDown) || void 0 === r || r.call(e, t),
                    p.current = !0
                }
                ,
                onPointerUp: (0,
                o.m)(e.onPointerUp, e => {
                    var t;
                    p.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                }
                ),
                onKeyDown: (0,
                o.m)(e.onKeyDown, e => {
                    let t = "" !== d.searchRef.current;
                    !r && (!t || " " !== e.key) && z.includes(e.key) && (e.currentTarget.click(),
                    e.preventDefault())
                }
                )
            })
        }
        );
        eb.displayName = eg;
        var ew = n.forwardRef( (e, t) => {
            let {__scopeMenu: r, disabled: a=!1, textValue: l, ...u} = e
              , c = ec(eg, r)
              , d = Z(r)
              , f = n.useRef(null)
              , p = (0,
            i.s)(t, f)
              , [m,v] = n.useState(!1)
              , [h,g] = n.useState("");
            return n.useEffect( () => {
                let e = f.current;
                if (e) {
                    var t;
                    g((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                }
            }
            , [u.children]),
            (0,
            b.jsx)(V.ItemSlot, {
                scope: r,
                disabled: a,
                textValue: null != l ? l : h,
                children: (0,
                b.jsx)(T, {
                    asChild: !0,
                    ...d,
                    focusable: !a,
                    children: (0,
                    b.jsx)(s.sG.div, {
                        role: "menuitem",
                        "data-highlighted": m ? "" : void 0,
                        "aria-disabled": a || void 0,
                        "data-disabled": a ? "" : void 0,
                        ...u,
                        ref: p,
                        onPointerMove: (0,
                        o.m)(e.onPointerMove, eV(e => {
                            a ? c.onItemLeave(e) : (c.onItemEnter(e),
                            e.defaultPrevented || e.currentTarget.focus({
                                preventScroll: !0
                            }))
                        }
                        )),
                        onPointerLeave: (0,
                        o.m)(e.onPointerLeave, eV(e => c.onItemLeave(e))),
                        onFocus: (0,
                        o.m)(e.onFocus, () => v(!0)),
                        onBlur: (0,
                        o.m)(e.onBlur, () => v(!1))
                    })
                })
            })
        }
        )
          , ex = n.forwardRef( (e, t) => {
            let {checked: r=!1, onCheckedChange: n, ...i} = e;
            return (0,
            b.jsx)(eM, {
                scope: e.__scopeMenu,
                checked: r,
                children: (0,
                b.jsx)(eb, {
                    role: "menuitemcheckbox",
                    "aria-checked": eK(r) ? "mixed" : r,
                    ...i,
                    ref: t,
                    "data-state": eU(r),
                    onSelect: (0,
                    o.m)(i.onSelect, () => null == n ? void 0 : n(!!eK(r) || !r), {
                        checkForDefaultPrevented: !1
                    })
                })
            })
        }
        );
        ex.displayName = "MenuCheckboxItem";
        var eE = "MenuRadioGroup"
          , [eC,eR] = X(eE, {
            value: void 0,
            onValueChange: () => {}
        })
          , ej = n.forwardRef( (e, t) => {
            let {value: r, onValueChange: n, ...o} = e
              , i = (0,
            y.c)(n);
            return (0,
            b.jsx)(eC, {
                scope: e.__scopeMenu,
                value: r,
                onValueChange: i,
                children: (0,
                b.jsx)(ev, {
                    ...o,
                    ref: t
                })
            })
        }
        );
        ej.displayName = eE;
        var ek = "MenuRadioItem"
          , eP = n.forwardRef( (e, t) => {
            let {value: r, ...n} = e
              , i = eR(ek, e.__scopeMenu)
              , a = r === i.value;
            return (0,
            b.jsx)(eM, {
                scope: e.__scopeMenu,
                checked: a,
                children: (0,
                b.jsx)(eb, {
                    role: "menuitemradio",
                    "aria-checked": a,
                    ...n,
                    ref: t,
                    "data-state": eU(a),
                    onSelect: (0,
                    o.m)(n.onSelect, () => {
                        var e;
                        return null === (e = i.onValueChange) || void 0 === e ? void 0 : e.call(i, r)
                    }
                    , {
                        checkForDefaultPrevented: !1
                    })
                })
            })
        }
        );
        eP.displayName = ek;
        var eS = "MenuItemIndicator"
          , [eM,eO] = X(eS, {
            checked: !1
        })
          , eN = n.forwardRef( (e, t) => {
            let {__scopeMenu: r, forceMount: n, ...o} = e
              , i = eO(eS, r);
            return (0,
            b.jsx)(g.C, {
                present: n || eK(i.checked) || !0 === i.checked,
                children: (0,
                b.jsx)(s.sG.span, {
                    ...o,
                    ref: t,
                    "data-state": eU(i.checked)
                })
            })
        }
        );
        eN.displayName = eS;
        var eA = n.forwardRef( (e, t) => {
            let {__scopeMenu: r, ...n} = e;
            return (0,
            b.jsx)(s.sG.div, {
                role: "separator",
                "aria-orientation": "horizontal",
                ...n,
                ref: t
            })
        }
        );
        eA.displayName = "MenuSeparator";
        var eT = n.forwardRef( (e, t) => {
            let {__scopeMenu: r, ...n} = e
              , o = Y(r);
            return (0,
            b.jsx)(v.i3, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        eT.displayName = "MenuArrow";
        var e_ = "MenuSub"
          , [eD,eL] = X(e_)
          , eI = e => {
            let {__scopeMenu: t, children: r, open: o=!1, onOpenChange: i} = e
              , a = Q(e_, t)
              , l = Y(t)
              , [s,u] = n.useState(null)
              , [c,d] = n.useState(null)
              , f = (0,
            y.c)(i);
            return n.useEffect( () => (!1 === a.open && f(!1),
            () => f(!1)), [a.open, f]),
            (0,
            b.jsx)(v.bL, {
                ...l,
                children: (0,
                b.jsx)(J, {
                    scope: t,
                    open: o,
                    onOpenChange: f,
                    content: c,
                    onContentChange: d,
                    children: (0,
                    b.jsx)(eD, {
                        scope: t,
                        contentId: (0,
                        m.B)(),
                        triggerId: (0,
                        m.B)(),
                        trigger: s,
                        onTriggerChange: u,
                        children: r
                    })
                })
            })
        }
        ;
        eI.displayName = e_;
        var eF = "MenuSubTrigger"
          , ez = n.forwardRef( (e, t) => {
            let r = Q(eF, e.__scopeMenu)
              , a = et(eF, e.__scopeMenu)
              , l = eL(eF, e.__scopeMenu)
              , s = ec(eF, e.__scopeMenu)
              , u = n.useRef(null)
              , {pointerGraceTimerRef: c, onPointerGraceIntentChange: d} = s
              , f = {
                __scopeMenu: e.__scopeMenu
            }
              , p = n.useCallback( () => {
                u.current && window.clearTimeout(u.current),
                u.current = null
            }
            , []);
            return n.useEffect( () => p, [p]),
            n.useEffect( () => {
                let e = c.current;
                return () => {
                    window.clearTimeout(e),
                    d(null)
                }
            }
            , [c, d]),
            (0,
            b.jsx)(en, {
                asChild: !0,
                ...f,
                children: (0,
                b.jsx)(ew, {
                    id: l.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": r.open,
                    "aria-controls": l.contentId,
                    "data-state": eB(r.open),
                    ...e,
                    ref: (0,
                    i.t)(t, l.onTriggerChange),
                    onClick: t => {
                        var n;
                        null === (n = e.onClick) || void 0 === n || n.call(e, t),
                        e.disabled || t.defaultPrevented || (t.currentTarget.focus(),
                        r.open || r.onOpenChange(!0))
                    }
                    ,
                    onPointerMove: (0,
                    o.m)(e.onPointerMove, eV(t => {
                        s.onItemEnter(t),
                        t.defaultPrevented || e.disabled || r.open || u.current || (s.onPointerGraceIntentChange(null),
                        u.current = window.setTimeout( () => {
                            r.onOpenChange(!0),
                            p()
                        }
                        , 100))
                    }
                    )),
                    onPointerLeave: (0,
                    o.m)(e.onPointerLeave, eV(e => {
                        var t, n;
                        p();
                        let o = null === (t = r.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        if (o) {
                            let t = null === (n = r.content) || void 0 === n ? void 0 : n.dataset.side
                              , i = "right" === t
                              , a = o[i ? "left" : "right"]
                              , l = o[i ? "right" : "left"];
                            s.onPointerGraceIntentChange({
                                area: [{
                                    x: e.clientX + (i ? -5 : 5),
                                    y: e.clientY
                                }, {
                                    x: a,
                                    y: o.top
                                }, {
                                    x: l,
                                    y: o.top
                                }, {
                                    x: l,
                                    y: o.bottom
                                }, {
                                    x: a,
                                    y: o.bottom
                                }],
                                side: t
                            }),
                            window.clearTimeout(c.current),
                            c.current = window.setTimeout( () => s.onPointerGraceIntentChange(null), 300)
                        } else {
                            if (s.onTriggerLeave(e),
                            e.defaultPrevented)
                                return;
                            s.onPointerGraceIntentChange(null)
                        }
                    }
                    )),
                    onKeyDown: (0,
                    o.m)(e.onKeyDown, t => {
                        let n = "" !== s.searchRef.current;
                        if (!e.disabled && (!n || " " !== t.key) && B[a.dir].includes(t.key)) {
                            var o;
                            r.onOpenChange(!0),
                            null === (o = r.content) || void 0 === o || o.focus(),
                            t.preventDefault()
                        }
                    }
                    )
                })
            })
        }
        );
        ez.displayName = eF;
        var eW = "MenuSubContent"
          , eG = n.forwardRef( (e, t) => {
            let r = ea(es, e.__scopeMenu)
              , {forceMount: a=r.forceMount, ...l} = e
              , s = Q(es, e.__scopeMenu)
              , u = et(es, e.__scopeMenu)
              , c = eL(eW, e.__scopeMenu)
              , d = n.useRef(null)
              , f = (0,
            i.s)(t, d);
            return (0,
            b.jsx)(V.Provider, {
                scope: e.__scopeMenu,
                children: (0,
                b.jsx)(g.C, {
                    present: a || s.open,
                    children: (0,
                    b.jsx)(V.Slot, {
                        scope: e.__scopeMenu,
                        children: (0,
                        b.jsx)(em, {
                            id: c.contentId,
                            "aria-labelledby": c.triggerId,
                            ...l,
                            ref: f,
                            align: "start",
                            side: "rtl" === u.dir ? "left" : "right",
                            disableOutsidePointerEvents: !1,
                            disableOutsideScroll: !1,
                            trapFocus: !1,
                            onOpenAutoFocus: e => {
                                var t;
                                u.isUsingKeyboardRef.current && (null === (t = d.current) || void 0 === t || t.focus()),
                                e.preventDefault()
                            }
                            ,
                            onCloseAutoFocus: e => e.preventDefault(),
                            onFocusOutside: (0,
                            o.m)(e.onFocusOutside, e => {
                                e.target !== c.trigger && s.onOpenChange(!1)
                            }
                            ),
                            onEscapeKeyDown: (0,
                            o.m)(e.onEscapeKeyDown, e => {
                                u.onClose(),
                                e.preventDefault()
                            }
                            ),
                            onKeyDown: (0,
                            o.m)(e.onKeyDown, e => {
                                let t = e.currentTarget.contains(e.target)
                                  , r = K[u.dir].includes(e.key);
                                if (t && r) {
                                    var n;
                                    s.onOpenChange(!1),
                                    null === (n = c.trigger) || void 0 === n || n.focus(),
                                    e.preventDefault()
                                }
                            }
                            )
                        })
                    })
                })
            })
        }
        );
        function eB(e) {
            return e ? "open" : "closed"
        }
        function eK(e) {
            return "indeterminate" === e
        }
        function eU(e) {
            return eK(e) ? "indeterminate" : e ? "checked" : "unchecked"
        }
        function eV(e) {
            return t => "mouse" === t.pointerType ? e(t) : void 0
        }
        eG.displayName = eW;
        var eH = "DropdownMenu"
          , [eq,eX] = (0,
        a.A)(eH, [$])
          , e$ = $()
          , [eY,eZ] = eq(eH)
          , eJ = e => {
            let {__scopeDropdownMenu: t, children: r, dir: o, open: i, defaultOpen: a, onOpenChange: s, modal: u=!0} = e
              , c = e$(t)
              , d = n.useRef(null)
              , [f=!1,p] = (0,
            l.i)({
                prop: i,
                defaultProp: a,
                onChange: s
            });
            return (0,
            b.jsx)(eY, {
                scope: t,
                triggerId: (0,
                m.B)(),
                triggerRef: d,
                contentId: (0,
                m.B)(),
                open: f,
                onOpenChange: p,
                onOpenToggle: n.useCallback( () => p(e => !e), [p]),
                modal: u,
                children: (0,
                b.jsx)(er, {
                    ...c,
                    open: f,
                    onOpenChange: p,
                    dir: o,
                    modal: u,
                    children: r
                })
            })
        }
        ;
        eJ.displayName = eH;
        var eQ = "DropdownMenuTrigger"
          , e0 = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, disabled: n=!1, ...a} = e
              , l = eZ(eQ, r)
              , u = e$(r);
            return (0,
            b.jsx)(en, {
                asChild: !0,
                ...u,
                children: (0,
                b.jsx)(s.sG.button, {
                    type: "button",
                    id: l.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": l.open,
                    "aria-controls": l.open ? l.contentId : void 0,
                    "data-state": l.open ? "open" : "closed",
                    "data-disabled": n ? "" : void 0,
                    disabled: n,
                    ...a,
                    ref: (0,
                    i.t)(t, l.triggerRef),
                    onPointerDown: (0,
                    o.m)(e.onPointerDown, e => {
                        n || 0 !== e.button || !1 !== e.ctrlKey || (l.onOpenToggle(),
                        l.open || e.preventDefault())
                    }
                    ),
                    onKeyDown: (0,
                    o.m)(e.onKeyDown, e => {
                        !n && (["Enter", " "].includes(e.key) && l.onOpenToggle(),
                        "ArrowDown" === e.key && l.onOpenChange(!0),
                        ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                    }
                    )
                })
            })
        }
        );
        e0.displayName = eQ;
        var e1 = e => {
            let {__scopeDropdownMenu: t, ...r} = e
              , n = e$(t);
            return (0,
            b.jsx)(el, {
                ...n,
                ...r
            })
        }
        ;
        e1.displayName = "DropdownMenuPortal";
        var e5 = "DropdownMenuContent"
          , e2 = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...i} = e
              , a = eZ(e5, r)
              , l = e$(r)
              , s = n.useRef(!1);
            return (0,
            b.jsx)(ed, {
                id: a.contentId,
                "aria-labelledby": a.triggerId,
                ...l,
                ...i,
                ref: t,
                onCloseAutoFocus: (0,
                o.m)(e.onCloseAutoFocus, e => {
                    var t;
                    s.current || null === (t = a.triggerRef.current) || void 0 === t || t.focus(),
                    s.current = !1,
                    e.preventDefault()
                }
                ),
                onInteractOutside: (0,
                o.m)(e.onInteractOutside, e => {
                    let t = e.detail.originalEvent
                      , r = 0 === t.button && !0 === t.ctrlKey
                      , n = 2 === t.button || r;
                    (!a.modal || n) && (s.current = !0)
                }
                ),
                style: {
                    ...e.style,
                    "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                }
            })
        }
        );
        e2.displayName = e5;
        var e6 = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(ev, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        e6.displayName = "DropdownMenuGroup";
        var e9 = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(eh, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        e9.displayName = "DropdownMenuLabel";
        var e3 = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(eb, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        e3.displayName = "DropdownMenuItem";
        var e8 = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(ex, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        e8.displayName = "DropdownMenuCheckboxItem";
        var e4 = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(ej, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        e4.displayName = "DropdownMenuRadioGroup";
        var e7 = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(eP, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        e7.displayName = "DropdownMenuRadioItem";
        var te = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(eN, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        te.displayName = "DropdownMenuItemIndicator";
        var tt = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(eA, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        tt.displayName = "DropdownMenuSeparator",
        n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(eT, {
                ...o,
                ...n,
                ref: t
            })
        }
        ).displayName = "DropdownMenuArrow";
        var tr = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(ez, {
                ...o,
                ...n,
                ref: t
            })
        }
        );
        tr.displayName = "DropdownMenuSubTrigger";
        var tn = n.forwardRef( (e, t) => {
            let {__scopeDropdownMenu: r, ...n} = e
              , o = e$(r);
            return (0,
            b.jsx)(eG, {
                ...o,
                ...n,
                ref: t,
                style: {
                    ...e.style,
                    "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                }
            })
        }
        );
        tn.displayName = "DropdownMenuSubContent";
        var to = eJ
          , ti = e0
          , ta = e1
          , tl = e2
          , ts = e6
          , tu = e9
          , tc = e3
          , td = e8
          , tf = e4
          , tp = e7
          , tm = te
          , tv = tt
          , th = e => {
            let {__scopeDropdownMenu: t, children: r, open: n, onOpenChange: o, defaultOpen: i} = e
              , a = e$(t)
              , [s=!1,u] = (0,
            l.i)({
                prop: n,
                defaultProp: i,
                onChange: o
            });
            return (0,
            b.jsx)(eI, {
                ...a,
                open: s,
                onOpenChange: u,
                children: r
            })
        }
          , tg = tr
          , ty = tn
    }
    ,
    9688: (e, t, r) => {
        r.d(t, {
            QP: () => $
        });
        let n = e => {
            let t = l(e)
              , {conflictingClassGroups: r, conflictingClassGroupModifiers: n} = e;
            return {
                getClassGroupId: e => {
                    let r = e.split("-");
                    return "" === r[0] && 1 !== r.length && r.shift(),
                    o(r, t) || a(e)
                }
                ,
                getConflictingClassGroupIds: (e, t) => {
                    let o = r[e] || [];
                    return t && n[e] ? [...o, ...n[e]] : o
                }
            }
        }
          , o = (e, t) => {
            if (0 === e.length)
                return t.classGroupId;
            let r = e[0]
              , n = t.nextPart.get(r)
              , i = n ? o(e.slice(1), n) : void 0;
            if (i)
                return i;
            if (0 === t.validators.length)
                return;
            let a = e.join("-");
            return t.validators.find( ({validator: e}) => e(a))?.classGroupId
        }
          , i = /^\[(.+)\]$/
          , a = e => {
            if (i.test(e)) {
                let t = i.exec(e)[1]
                  , r = t?.substring(0, t.indexOf(":"));
                if (r)
                    return "arbitrary.." + r
            }
        }
          , l = e => {
            let {theme: t, prefix: r} = e
              , n = {
                nextPart: new Map,
                validators: []
            };
            return d(Object.entries(e.classGroups), r).forEach( ([e,r]) => {
                s(r, n, e, t)
            }
            ),
            n
        }
          , s = (e, t, r, n) => {
            e.forEach(e => {
                if ("string" == typeof e) {
                    ("" === e ? t : u(t, e)).classGroupId = r;
                    return
                }
                if ("function" == typeof e) {
                    if (c(e)) {
                        s(e(n), t, r, n);
                        return
                    }
                    t.validators.push({
                        validator: e,
                        classGroupId: r
                    });
                    return
                }
                Object.entries(e).forEach( ([e,o]) => {
                    s(o, u(t, e), r, n)
                }
                )
            }
            )
        }
          , u = (e, t) => {
            let r = e;
            return t.split("-").forEach(e => {
                r.nextPart.has(e) || r.nextPart.set(e, {
                    nextPart: new Map,
                    validators: []
                }),
                r = r.nextPart.get(e)
            }
            ),
            r
        }
          , c = e => e.isThemeGetter
          , d = (e, t) => t ? e.map( ([e,r]) => [e, r.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map( ([e,r]) => [t + e, r])) : e)]) : e
          , f = e => {
            if (e < 1)
                return {
                    get: () => void 0,
                    set: () => {}
                };
            let t = 0
              , r = new Map
              , n = new Map
              , o = (o, i) => {
                r.set(o, i),
                ++t > e && (t = 0,
                n = r,
                r = new Map)
            }
            ;
            return {
                get(e) {
                    let t = r.get(e);
                    return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t),
                    t) : void 0
                },
                set(e, t) {
                    r.has(e) ? r.set(e, t) : o(e, t)
                }
            }
        }
          , p = e => {
            let {separator: t, experimentalParseClassName: r} = e
              , n = 1 === t.length
              , o = t[0]
              , i = t.length
              , a = e => {
                let r;
                let a = []
                  , l = 0
                  , s = 0;
                for (let u = 0; u < e.length; u++) {
                    let c = e[u];
                    if (0 === l) {
                        if (c === o && (n || e.slice(u, u + i) === t)) {
                            a.push(e.slice(s, u)),
                            s = u + i;
                            continue
                        }
                        if ("/" === c) {
                            r = u;
                            continue
                        }
                    }
                    "[" === c ? l++ : "]" === c && l--
                }
                let u = 0 === a.length ? e : e.substring(s)
                  , c = u.startsWith("!")
                  , d = c ? u.substring(1) : u;
                return {
                    modifiers: a,
                    hasImportantModifier: c,
                    baseClassName: d,
                    maybePostfixModifierPosition: r && r > s ? r - s : void 0
                }
            }
            ;
            return r ? e => r({
                className: e,
                parseClassName: a
            }) : a
        }
          , m = e => {
            if (e.length <= 1)
                return e;
            let t = []
              , r = [];
            return e.forEach(e => {
                "[" === e[0] ? (t.push(...r.sort(), e),
                r = []) : r.push(e)
            }
            ),
            t.push(...r.sort()),
            t
        }
          , v = e => ({
            cache: f(e.cacheSize),
            parseClassName: p(e),
            ...n(e)
        })
          , h = /\s+/
          , g = (e, t) => {
            let {parseClassName: r, getClassGroupId: n, getConflictingClassGroupIds: o} = t
              , i = []
              , a = e.trim().split(h)
              , l = "";
            for (let e = a.length - 1; e >= 0; e -= 1) {
                let t = a[e]
                  , {modifiers: s, hasImportantModifier: u, baseClassName: c, maybePostfixModifierPosition: d} = r(t)
                  , f = !!d
                  , p = n(f ? c.substring(0, d) : c);
                if (!p) {
                    if (!f || !(p = n(c))) {
                        l = t + (l.length > 0 ? " " + l : l);
                        continue
                    }
                    f = !1
                }
                let v = m(s).join(":")
                  , h = u ? v + "!" : v
                  , g = h + p;
                if (i.includes(g))
                    continue;
                i.push(g);
                let y = o(p, f);
                for (let e = 0; e < y.length; ++e) {
                    let t = y[e];
                    i.push(h + t)
                }
                l = t + (l.length > 0 ? " " + l : l)
            }
            return l
        }
        ;
        function y() {
            let e, t, r = 0, n = "";
            for (; r < arguments.length; )
                (e = arguments[r++]) && (t = b(e)) && (n && (n += " "),
                n += t);
            return n
        }
        let b = e => {
            let t;
            if ("string" == typeof e)
                return e;
            let r = "";
            for (let n = 0; n < e.length; n++)
                e[n] && (t = b(e[n])) && (r && (r += " "),
                r += t);
            return r
        }
          , w = e => {
            let t = t => t[e] || [];
            return t.isThemeGetter = !0,
            t
        }
          , x = /^\[(?:([a-z-]+):)?(.+)\]$/i
          , E = /^\d+\/\d+$/
          , C = new Set(["px", "full", "screen"])
          , R = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
          , j = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
          , k = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
          , P = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
          , S = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
          , M = e => N(e) || C.has(e) || E.test(e)
          , O = e => U(e, "length", V)
          , N = e => !!e && !Number.isNaN(Number(e))
          , A = e => U(e, "number", N)
          , T = e => !!e && Number.isInteger(Number(e))
          , _ = e => e.endsWith("%") && N(e.slice(0, -1))
          , D = e => x.test(e)
          , L = e => R.test(e)
          , I = new Set(["length", "size", "percentage"])
          , F = e => U(e, I, H)
          , z = e => U(e, "position", H)
          , W = new Set(["image", "url"])
          , G = e => U(e, W, X)
          , B = e => U(e, "", q)
          , K = () => !0
          , U = (e, t, r) => {
            let n = x.exec(e);
            return !!n && (n[1] ? "string" == typeof t ? n[1] === t : t.has(n[1]) : r(n[2]))
        }
          , V = e => j.test(e) && !k.test(e)
          , H = () => !1
          , q = e => P.test(e)
          , X = e => S.test(e);
        Symbol.toStringTag;
        let $ = function(e, ...t) {
            let r, n, o;
            let i = function(l) {
                return n = (r = v(t.reduce( (e, t) => t(e), e()))).cache.get,
                o = r.cache.set,
                i = a,
                a(l)
            };
            function a(e) {
                let t = n(e);
                if (t)
                    return t;
                let i = g(e, r);
                return o(e, i),
                i
            }
            return function() {
                return i(y.apply(null, arguments))
            }
        }( () => {
            let e = w("colors")
              , t = w("spacing")
              , r = w("blur")
              , n = w("brightness")
              , o = w("borderColor")
              , i = w("borderRadius")
              , a = w("borderSpacing")
              , l = w("borderWidth")
              , s = w("contrast")
              , u = w("grayscale")
              , c = w("hueRotate")
              , d = w("invert")
              , f = w("gap")
              , p = w("gradientColorStops")
              , m = w("gradientColorStopPositions")
              , v = w("inset")
              , h = w("margin")
              , g = w("opacity")
              , y = w("padding")
              , b = w("saturate")
              , x = w("scale")
              , E = w("sepia")
              , C = w("skew")
              , R = w("space")
              , j = w("translate")
              , k = () => ["auto", "contain", "none"]
              , P = () => ["auto", "hidden", "clip", "visible", "scroll"]
              , S = () => ["auto", D, t]
              , I = () => [D, t]
              , W = () => ["", M, O]
              , U = () => ["auto", N, D]
              , V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
              , H = () => ["solid", "dashed", "dotted", "double", "none"]
              , q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
              , X = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
              , $ = () => ["", "0", D]
              , Y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
              , Z = () => [N, D];
            return {
                cacheSize: 500,
                separator: ":",
                theme: {
                    colors: [K],
                    spacing: [M, O],
                    blur: ["none", "", L, D],
                    brightness: Z(),
                    borderColor: [e],
                    borderRadius: ["none", "", "full", L, D],
                    borderSpacing: I(),
                    borderWidth: W(),
                    contrast: Z(),
                    grayscale: $(),
                    hueRotate: Z(),
                    invert: $(),
                    gap: I(),
                    gradientColorStops: [e],
                    gradientColorStopPositions: [_, O],
                    inset: S(),
                    margin: S(),
                    opacity: Z(),
                    padding: I(),
                    saturate: Z(),
                    scale: Z(),
                    sepia: $(),
                    skew: Z(),
                    space: I(),
                    translate: I()
                },
                classGroups: {
                    aspect: [{
                        aspect: ["auto", "square", "video", D]
                    }],
                    container: ["container"],
                    columns: [{
                        columns: [L]
                    }],
                    "break-after": [{
                        "break-after": Y()
                    }],
                    "break-before": [{
                        "break-before": Y()
                    }],
                    "break-inside": [{
                        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                    }],
                    "box-decoration": [{
                        "box-decoration": ["slice", "clone"]
                    }],
                    box: [{
                        box: ["border", "content"]
                    }],
                    display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                    float: [{
                        float: ["right", "left", "none", "start", "end"]
                    }],
                    clear: [{
                        clear: ["left", "right", "both", "none", "start", "end"]
                    }],
                    isolation: ["isolate", "isolation-auto"],
                    "object-fit": [{
                        object: ["contain", "cover", "fill", "none", "scale-down"]
                    }],
                    "object-position": [{
                        object: [...V(), D]
                    }],
                    overflow: [{
                        overflow: P()
                    }],
                    "overflow-x": [{
                        "overflow-x": P()
                    }],
                    "overflow-y": [{
                        "overflow-y": P()
                    }],
                    overscroll: [{
                        overscroll: k()
                    }],
                    "overscroll-x": [{
                        "overscroll-x": k()
                    }],
                    "overscroll-y": [{
                        "overscroll-y": k()
                    }],
                    position: ["static", "fixed", "absolute", "relative", "sticky"],
                    inset: [{
                        inset: [v]
                    }],
                    "inset-x": [{
                        "inset-x": [v]
                    }],
                    "inset-y": [{
                        "inset-y": [v]
                    }],
                    start: [{
                        start: [v]
                    }],
                    end: [{
                        end: [v]
                    }],
                    top: [{
                        top: [v]
                    }],
                    right: [{
                        right: [v]
                    }],
                    bottom: [{
                        bottom: [v]
                    }],
                    left: [{
                        left: [v]
                    }],
                    visibility: ["visible", "invisible", "collapse"],
                    z: [{
                        z: ["auto", T, D]
                    }],
                    basis: [{
                        basis: S()
                    }],
                    "flex-direction": [{
                        flex: ["row", "row-reverse", "col", "col-reverse"]
                    }],
                    "flex-wrap": [{
                        flex: ["wrap", "wrap-reverse", "nowrap"]
                    }],
                    flex: [{
                        flex: ["1", "auto", "initial", "none", D]
                    }],
                    grow: [{
                        grow: $()
                    }],
                    shrink: [{
                        shrink: $()
                    }],
                    order: [{
                        order: ["first", "last", "none", T, D]
                    }],
                    "grid-cols": [{
                        "grid-cols": [K]
                    }],
                    "col-start-end": [{
                        col: ["auto", {
                            span: ["full", T, D]
                        }, D]
                    }],
                    "col-start": [{
                        "col-start": U()
                    }],
                    "col-end": [{
                        "col-end": U()
                    }],
                    "grid-rows": [{
                        "grid-rows": [K]
                    }],
                    "row-start-end": [{
                        row: ["auto", {
                            span: [T, D]
                        }, D]
                    }],
                    "row-start": [{
                        "row-start": U()
                    }],
                    "row-end": [{
                        "row-end": U()
                    }],
                    "grid-flow": [{
                        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                    }],
                    "auto-cols": [{
                        "auto-cols": ["auto", "min", "max", "fr", D]
                    }],
                    "auto-rows": [{
                        "auto-rows": ["auto", "min", "max", "fr", D]
                    }],
                    gap: [{
                        gap: [f]
                    }],
                    "gap-x": [{
                        "gap-x": [f]
                    }],
                    "gap-y": [{
                        "gap-y": [f]
                    }],
                    "justify-content": [{
                        justify: ["normal", ...X()]
                    }],
                    "justify-items": [{
                        "justify-items": ["start", "end", "center", "stretch"]
                    }],
                    "justify-self": [{
                        "justify-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    "align-content": [{
                        content: ["normal", ...X(), "baseline"]
                    }],
                    "align-items": [{
                        items: ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "align-self": [{
                        self: ["auto", "start", "end", "center", "stretch", "baseline"]
                    }],
                    "place-content": [{
                        "place-content": [...X(), "baseline"]
                    }],
                    "place-items": [{
                        "place-items": ["start", "end", "center", "baseline", "stretch"]
                    }],
                    "place-self": [{
                        "place-self": ["auto", "start", "end", "center", "stretch"]
                    }],
                    p: [{
                        p: [y]
                    }],
                    px: [{
                        px: [y]
                    }],
                    py: [{
                        py: [y]
                    }],
                    ps: [{
                        ps: [y]
                    }],
                    pe: [{
                        pe: [y]
                    }],
                    pt: [{
                        pt: [y]
                    }],
                    pr: [{
                        pr: [y]
                    }],
                    pb: [{
                        pb: [y]
                    }],
                    pl: [{
                        pl: [y]
                    }],
                    m: [{
                        m: [h]
                    }],
                    mx: [{
                        mx: [h]
                    }],
                    my: [{
                        my: [h]
                    }],
                    ms: [{
                        ms: [h]
                    }],
                    me: [{
                        me: [h]
                    }],
                    mt: [{
                        mt: [h]
                    }],
                    mr: [{
                        mr: [h]
                    }],
                    mb: [{
                        mb: [h]
                    }],
                    ml: [{
                        ml: [h]
                    }],
                    "space-x": [{
                        "space-x": [R]
                    }],
                    "space-x-reverse": ["space-x-reverse"],
                    "space-y": [{
                        "space-y": [R]
                    }],
                    "space-y-reverse": ["space-y-reverse"],
                    w: [{
                        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, t]
                    }],
                    "min-w": [{
                        "min-w": [D, t, "min", "max", "fit"]
                    }],
                    "max-w": [{
                        "max-w": [D, t, "none", "full", "min", "max", "fit", "prose", {
                            screen: [L]
                        }, L]
                    }],
                    h: [{
                        h: [D, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "min-h": [{
                        "min-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    "max-h": [{
                        "max-h": [D, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                    }],
                    size: [{
                        size: [D, t, "auto", "min", "max", "fit"]
                    }],
                    "font-size": [{
                        text: ["base", L, O]
                    }],
                    "font-smoothing": ["antialiased", "subpixel-antialiased"],
                    "font-style": ["italic", "not-italic"],
                    "font-weight": [{
                        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", A]
                    }],
                    "font-family": [{
                        font: [K]
                    }],
                    "fvn-normal": ["normal-nums"],
                    "fvn-ordinal": ["ordinal"],
                    "fvn-slashed-zero": ["slashed-zero"],
                    "fvn-figure": ["lining-nums", "oldstyle-nums"],
                    "fvn-spacing": ["proportional-nums", "tabular-nums"],
                    "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                    tracking: [{
                        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", D]
                    }],
                    "line-clamp": [{
                        "line-clamp": ["none", N, A]
                    }],
                    leading: [{
                        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M, D]
                    }],
                    "list-image": [{
                        "list-image": ["none", D]
                    }],
                    "list-style-type": [{
                        list: ["none", "disc", "decimal", D]
                    }],
                    "list-style-position": [{
                        list: ["inside", "outside"]
                    }],
                    "placeholder-color": [{
                        placeholder: [e]
                    }],
                    "placeholder-opacity": [{
                        "placeholder-opacity": [g]
                    }],
                    "text-alignment": [{
                        text: ["left", "center", "right", "justify", "start", "end"]
                    }],
                    "text-color": [{
                        text: [e]
                    }],
                    "text-opacity": [{
                        "text-opacity": [g]
                    }],
                    "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                    "text-decoration-style": [{
                        decoration: [...H(), "wavy"]
                    }],
                    "text-decoration-thickness": [{
                        decoration: ["auto", "from-font", M, O]
                    }],
                    "underline-offset": [{
                        "underline-offset": ["auto", M, D]
                    }],
                    "text-decoration-color": [{
                        decoration: [e]
                    }],
                    "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                    "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                    "text-wrap": [{
                        text: ["wrap", "nowrap", "balance", "pretty"]
                    }],
                    indent: [{
                        indent: I()
                    }],
                    "vertical-align": [{
                        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D]
                    }],
                    whitespace: [{
                        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                    }],
                    break: [{
                        break: ["normal", "words", "all", "keep"]
                    }],
                    hyphens: [{
                        hyphens: ["none", "manual", "auto"]
                    }],
                    content: [{
                        content: ["none", D]
                    }],
                    "bg-attachment": [{
                        bg: ["fixed", "local", "scroll"]
                    }],
                    "bg-clip": [{
                        "bg-clip": ["border", "padding", "content", "text"]
                    }],
                    "bg-opacity": [{
                        "bg-opacity": [g]
                    }],
                    "bg-origin": [{
                        "bg-origin": ["border", "padding", "content"]
                    }],
                    "bg-position": [{
                        bg: [...V(), z]
                    }],
                    "bg-repeat": [{
                        bg: ["no-repeat", {
                            repeat: ["", "x", "y", "round", "space"]
                        }]
                    }],
                    "bg-size": [{
                        bg: ["auto", "cover", "contain", F]
                    }],
                    "bg-image": [{
                        bg: ["none", {
                            "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, G]
                    }],
                    "bg-color": [{
                        bg: [e]
                    }],
                    "gradient-from-pos": [{
                        from: [m]
                    }],
                    "gradient-via-pos": [{
                        via: [m]
                    }],
                    "gradient-to-pos": [{
                        to: [m]
                    }],
                    "gradient-from": [{
                        from: [p]
                    }],
                    "gradient-via": [{
                        via: [p]
                    }],
                    "gradient-to": [{
                        to: [p]
                    }],
                    rounded: [{
                        rounded: [i]
                    }],
                    "rounded-s": [{
                        "rounded-s": [i]
                    }],
                    "rounded-e": [{
                        "rounded-e": [i]
                    }],
                    "rounded-t": [{
                        "rounded-t": [i]
                    }],
                    "rounded-r": [{
                        "rounded-r": [i]
                    }],
                    "rounded-b": [{
                        "rounded-b": [i]
                    }],
                    "rounded-l": [{
                        "rounded-l": [i]
                    }],
                    "rounded-ss": [{
                        "rounded-ss": [i]
                    }],
                    "rounded-se": [{
                        "rounded-se": [i]
                    }],
                    "rounded-ee": [{
                        "rounded-ee": [i]
                    }],
                    "rounded-es": [{
                        "rounded-es": [i]
                    }],
                    "rounded-tl": [{
                        "rounded-tl": [i]
                    }],
                    "rounded-tr": [{
                        "rounded-tr": [i]
                    }],
                    "rounded-br": [{
                        "rounded-br": [i]
                    }],
                    "rounded-bl": [{
                        "rounded-bl": [i]
                    }],
                    "border-w": [{
                        border: [l]
                    }],
                    "border-w-x": [{
                        "border-x": [l]
                    }],
                    "border-w-y": [{
                        "border-y": [l]
                    }],
                    "border-w-s": [{
                        "border-s": [l]
                    }],
                    "border-w-e": [{
                        "border-e": [l]
                    }],
                    "border-w-t": [{
                        "border-t": [l]
                    }],
                    "border-w-r": [{
                        "border-r": [l]
                    }],
                    "border-w-b": [{
                        "border-b": [l]
                    }],
                    "border-w-l": [{
                        "border-l": [l]
                    }],
                    "border-opacity": [{
                        "border-opacity": [g]
                    }],
                    "border-style": [{
                        border: [...H(), "hidden"]
                    }],
                    "divide-x": [{
                        "divide-x": [l]
                    }],
                    "divide-x-reverse": ["divide-x-reverse"],
                    "divide-y": [{
                        "divide-y": [l]
                    }],
                    "divide-y-reverse": ["divide-y-reverse"],
                    "divide-opacity": [{
                        "divide-opacity": [g]
                    }],
                    "divide-style": [{
                        divide: H()
                    }],
                    "border-color": [{
                        border: [o]
                    }],
                    "border-color-x": [{
                        "border-x": [o]
                    }],
                    "border-color-y": [{
                        "border-y": [o]
                    }],
                    "border-color-s": [{
                        "border-s": [o]
                    }],
                    "border-color-e": [{
                        "border-e": [o]
                    }],
                    "border-color-t": [{
                        "border-t": [o]
                    }],
                    "border-color-r": [{
                        "border-r": [o]
                    }],
                    "border-color-b": [{
                        "border-b": [o]
                    }],
                    "border-color-l": [{
                        "border-l": [o]
                    }],
                    "divide-color": [{
                        divide: [o]
                    }],
                    "outline-style": [{
                        outline: ["", ...H()]
                    }],
                    "outline-offset": [{
                        "outline-offset": [M, D]
                    }],
                    "outline-w": [{
                        outline: [M, O]
                    }],
                    "outline-color": [{
                        outline: [e]
                    }],
                    "ring-w": [{
                        ring: W()
                    }],
                    "ring-w-inset": ["ring-inset"],
                    "ring-color": [{
                        ring: [e]
                    }],
                    "ring-opacity": [{
                        "ring-opacity": [g]
                    }],
                    "ring-offset-w": [{
                        "ring-offset": [M, O]
                    }],
                    "ring-offset-color": [{
                        "ring-offset": [e]
                    }],
                    shadow: [{
                        shadow: ["", "inner", "none", L, B]
                    }],
                    "shadow-color": [{
                        shadow: [K]
                    }],
                    opacity: [{
                        opacity: [g]
                    }],
                    "mix-blend": [{
                        "mix-blend": [...q(), "plus-lighter", "plus-darker"]
                    }],
                    "bg-blend": [{
                        "bg-blend": q()
                    }],
                    filter: [{
                        filter: ["", "none"]
                    }],
                    blur: [{
                        blur: [r]
                    }],
                    brightness: [{
                        brightness: [n]
                    }],
                    contrast: [{
                        contrast: [s]
                    }],
                    "drop-shadow": [{
                        "drop-shadow": ["", "none", L, D]
                    }],
                    grayscale: [{
                        grayscale: [u]
                    }],
                    "hue-rotate": [{
                        "hue-rotate": [c]
                    }],
                    invert: [{
                        invert: [d]
                    }],
                    saturate: [{
                        saturate: [b]
                    }],
                    sepia: [{
                        sepia: [E]
                    }],
                    "backdrop-filter": [{
                        "backdrop-filter": ["", "none"]
                    }],
                    "backdrop-blur": [{
                        "backdrop-blur": [r]
                    }],
                    "backdrop-brightness": [{
                        "backdrop-brightness": [n]
                    }],
                    "backdrop-contrast": [{
                        "backdrop-contrast": [s]
                    }],
                    "backdrop-grayscale": [{
                        "backdrop-grayscale": [u]
                    }],
                    "backdrop-hue-rotate": [{
                        "backdrop-hue-rotate": [c]
                    }],
                    "backdrop-invert": [{
                        "backdrop-invert": [d]
                    }],
                    "backdrop-opacity": [{
                        "backdrop-opacity": [g]
                    }],
                    "backdrop-saturate": [{
                        "backdrop-saturate": [b]
                    }],
                    "backdrop-sepia": [{
                        "backdrop-sepia": [E]
                    }],
                    "border-collapse": [{
                        border: ["collapse", "separate"]
                    }],
                    "border-spacing": [{
                        "border-spacing": [a]
                    }],
                    "border-spacing-x": [{
                        "border-spacing-x": [a]
                    }],
                    "border-spacing-y": [{
                        "border-spacing-y": [a]
                    }],
                    "table-layout": [{
                        table: ["auto", "fixed"]
                    }],
                    caption: [{
                        caption: ["top", "bottom"]
                    }],
                    transition: [{
                        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", D]
                    }],
                    duration: [{
                        duration: Z()
                    }],
                    ease: [{
                        ease: ["linear", "in", "out", "in-out", D]
                    }],
                    delay: [{
                        delay: Z()
                    }],
                    animate: [{
                        animate: ["none", "spin", "ping", "pulse", "bounce", D]
                    }],
                    transform: [{
                        transform: ["", "gpu", "none"]
                    }],
                    scale: [{
                        scale: [x]
                    }],
                    "scale-x": [{
                        "scale-x": [x]
                    }],
                    "scale-y": [{
                        "scale-y": [x]
                    }],
                    rotate: [{
                        rotate: [T, D]
                    }],
                    "translate-x": [{
                        "translate-x": [j]
                    }],
                    "translate-y": [{
                        "translate-y": [j]
                    }],
                    "skew-x": [{
                        "skew-x": [C]
                    }],
                    "skew-y": [{
                        "skew-y": [C]
                    }],
                    "transform-origin": [{
                        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", D]
                    }],
                    accent: [{
                        accent: ["auto", e]
                    }],
                    appearance: [{
                        appearance: ["none", "auto"]
                    }],
                    cursor: [{
                        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D]
                    }],
                    "caret-color": [{
                        caret: [e]
                    }],
                    "pointer-events": [{
                        "pointer-events": ["none", "auto"]
                    }],
                    resize: [{
                        resize: ["none", "y", "x", ""]
                    }],
                    "scroll-behavior": [{
                        scroll: ["auto", "smooth"]
                    }],
                    "scroll-m": [{
                        "scroll-m": I()
                    }],
                    "scroll-mx": [{
                        "scroll-mx": I()
                    }],
                    "scroll-my": [{
                        "scroll-my": I()
                    }],
                    "scroll-ms": [{
                        "scroll-ms": I()
                    }],
                    "scroll-me": [{
                        "scroll-me": I()
                    }],
                    "scroll-mt": [{
                        "scroll-mt": I()
                    }],
                    "scroll-mr": [{
                        "scroll-mr": I()
                    }],
                    "scroll-mb": [{
                        "scroll-mb": I()
                    }],
                    "scroll-ml": [{
                        "scroll-ml": I()
                    }],
                    "scroll-p": [{
                        "scroll-p": I()
                    }],
                    "scroll-px": [{
                        "scroll-px": I()
                    }],
                    "scroll-py": [{
                        "scroll-py": I()
                    }],
                    "scroll-ps": [{
                        "scroll-ps": I()
                    }],
                    "scroll-pe": [{
                        "scroll-pe": I()
                    }],
                    "scroll-pt": [{
                        "scroll-pt": I()
                    }],
                    "scroll-pr": [{
                        "scroll-pr": I()
                    }],
                    "scroll-pb": [{
                        "scroll-pb": I()
                    }],
                    "scroll-pl": [{
                        "scroll-pl": I()
                    }],
                    "snap-align": [{
                        snap: ["start", "end", "center", "align-none"]
                    }],
                    "snap-stop": [{
                        snap: ["normal", "always"]
                    }],
                    "snap-type": [{
                        snap: ["none", "x", "y", "both"]
                    }],
                    "snap-strictness": [{
                        snap: ["mandatory", "proximity"]
                    }],
                    touch: [{
                        touch: ["auto", "none", "manipulation"]
                    }],
                    "touch-x": [{
                        "touch-pan": ["x", "left", "right"]
                    }],
                    "touch-y": [{
                        "touch-pan": ["y", "up", "down"]
                    }],
                    "touch-pz": ["touch-pinch-zoom"],
                    select: [{
                        select: ["none", "text", "all", "auto"]
                    }],
                    "will-change": [{
                        "will-change": ["auto", "scroll", "contents", "transform", D]
                    }],
                    fill: [{
                        fill: [e, "none"]
                    }],
                    "stroke-w": [{
                        stroke: [M, O, A]
                    }],
                    stroke: [{
                        stroke: [e, "none"]
                    }],
                    sr: ["sr-only", "not-sr-only"],
                    "forced-color-adjust": [{
                        "forced-color-adjust": ["auto", "none"]
                    }]
                },
                conflictingClassGroups: {
                    overflow: ["overflow-x", "overflow-y"],
                    overscroll: ["overscroll-x", "overscroll-y"],
                    inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                    "inset-x": ["right", "left"],
                    "inset-y": ["top", "bottom"],
                    flex: ["basis", "grow", "shrink"],
                    gap: ["gap-x", "gap-y"],
                    p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                    px: ["pr", "pl"],
                    py: ["pt", "pb"],
                    m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                    mx: ["mr", "ml"],
                    my: ["mt", "mb"],
                    size: ["w", "h"],
                    "font-size": ["leading"],
                    "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                    "fvn-ordinal": ["fvn-normal"],
                    "fvn-slashed-zero": ["fvn-normal"],
                    "fvn-figure": ["fvn-normal"],
                    "fvn-spacing": ["fvn-normal"],
                    "fvn-fraction": ["fvn-normal"],
                    "line-clamp": ["display", "overflow"],
                    rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                    "rounded-s": ["rounded-ss", "rounded-es"],
                    "rounded-e": ["rounded-se", "rounded-ee"],
                    "rounded-t": ["rounded-tl", "rounded-tr"],
                    "rounded-r": ["rounded-tr", "rounded-br"],
                    "rounded-b": ["rounded-br", "rounded-bl"],
                    "rounded-l": ["rounded-tl", "rounded-bl"],
                    "border-spacing": ["border-spacing-x", "border-spacing-y"],
                    "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                    "border-w-x": ["border-w-r", "border-w-l"],
                    "border-w-y": ["border-w-t", "border-w-b"],
                    "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                    "border-color-x": ["border-color-r", "border-color-l"],
                    "border-color-y": ["border-color-t", "border-color-b"],
                    "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                    "scroll-mx": ["scroll-mr", "scroll-ml"],
                    "scroll-my": ["scroll-mt", "scroll-mb"],
                    "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                    "scroll-px": ["scroll-pr", "scroll-pl"],
                    "scroll-py": ["scroll-pt", "scroll-pb"],
                    touch: ["touch-x", "touch-y", "touch-pz"],
                    "touch-x": ["touch"],
                    "touch-y": ["touch"],
                    "touch-pz": ["touch"]
                },
                conflictingClassGroupModifiers: {
                    "font-size": ["leading"]
                }
            }
        }
        )
    }
    ,
    9708: (e, t, r) => {
        r.d(t, {
            DX: () => a,
            xV: () => s
        });
        var n = r(2115)
          , o = r(6101)
          , i = r(5155)
          , a = n.forwardRef( (e, t) => {
            let {children: r, ...o} = e
              , a = n.Children.toArray(r)
              , s = a.find(u);
            if (s) {
                let e = s.props.children
                  , r = a.map(t => t !== s ? t : n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null);
                return (0,
                i.jsx)(l, {
                    ...o,
                    ref: t,
                    children: n.isValidElement(e) ? n.cloneElement(e, void 0, r) : null
                })
            }
            return (0,
            i.jsx)(l, {
                ...o,
                ref: t,
                children: r
            })
        }
        );
        a.displayName = "Slot";
        var l = n.forwardRef( (e, t) => {
            let {children: r, ...i} = e;
            if (n.isValidElement(r)) {
                let e = function(e) {
                    let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
                      , r = t && "isReactWarning"in t && t.isReactWarning;
                    return r ? e.ref : (r = (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) && "isReactWarning"in t && t.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                }(r);
                return n.cloneElement(r, {
                    ...function(e, t) {
                        let r = {
                            ...t
                        };
                        for (let n in t) {
                            let o = e[n]
                              , i = t[n];
                            /^on[A-Z]/.test(n) ? o && i ? r[n] = (...e) => {
                                i(...e),
                                o(...e)
                            }
                            : o && (r[n] = o) : "style" === n ? r[n] = {
                                ...o,
                                ...i
                            } : "className" === n && (r[n] = [o, i].filter(Boolean).join(" "))
                        }
                        return {
                            ...e,
                            ...r
                        }
                    }(i, r.props),
                    ref: t ? (0,
                    o.t)(t, e) : e
                })
            }
            return n.Children.count(r) > 1 ? n.Children.only(null) : null
        }
        );
        l.displayName = "SlotClone";
        var s = ({children: e}) => (0,
        i.jsx)(i.Fragment, {
            children: e
        });
        function u(e) {
            return n.isValidElement(e) && e.type === s
        }
    }
    ,
    9946: (e, t, r) => {
        r.d(t, {
            A: () => s
        });
        var n = r(2115);
        let o = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
          , i = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return t.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
        };
        var a = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
        };
        let l = (0,
        n.forwardRef)( (e, t) => {
            let {color: r="currentColor", size: o=24, strokeWidth: l=2, absoluteStrokeWidth: s, className: u="", children: c, iconNode: d, ...f} = e;
            return (0,
            n.createElement)("svg", {
                ref: t,
                ...a,
                width: o,
                height: o,
                stroke: r,
                strokeWidth: s ? 24 * Number(l) / Number(o) : l,
                className: i("lucide", u),
                ...f
            }, [...d.map(e => {
                let[t,r] = e;
                return (0,
                n.createElement)(t, r)
            }
            ), ...Array.isArray(c) ? c : [c]])
        }
        )
          , s = (e, t) => {
            let r = (0,
            n.forwardRef)( (r, a) => {
                let {className: s, ...u} = r;
                return (0,
                n.createElement)(l, {
                    ref: a,
                    iconNode: t,
                    className: i("lucide-".concat(o(e)), s),
                    ...u
                })
            }
            );
            return r.displayName = "".concat(e),
            r
        }
    }
    ,
    9991: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        !function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            DecodeError: function() {
                return m
            },
            MiddlewareNotFoundError: function() {
                return y
            },
            MissingStaticPage: function() {
                return g
            },
            NormalizeError: function() {
                return v
            },
            PageNotFoundError: function() {
                return h
            },
            SP: function() {
                return f
            },
            ST: function() {
                return p
            },
            WEB_VITALS: function() {
                return r
            },
            execOnce: function() {
                return n
            },
            getDisplayName: function() {
                return s
            },
            getLocationOrigin: function() {
                return a
            },
            getURL: function() {
                return l
            },
            isAbsoluteUrl: function() {
                return i
            },
            isResSent: function() {
                return u
            },
            loadGetInitialProps: function() {
                return d
            },
            normalizeRepeatedSlashes: function() {
                return c
            },
            stringifyError: function() {
                return b
            }
        });
        let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function n(e) {
            let t, r = !1;
            return function() {
                for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
                    o[i] = arguments[i];
                return r || (r = !0,
                t = e(...o)),
                t
            }
        }
        let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , i = e => o.test(e);
        function a() {
            let {protocol: e, hostname: t, port: r} = window.location;
            return e + "//" + t + (r ? ":" + r : "")
        }
        function l() {
            let {href: e} = window.location
              , t = a();
            return e.substring(t.length)
        }
        function s(e) {
            return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
        }
        function u(e) {
            return e.finished || e.headersSent
        }
        function c(e) {
            let t = e.split("?");
            return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
        }
        async function d(e, t) {
            let r = t.res || t.ctx && t.ctx.res;
            if (!e.getInitialProps)
                return t.ctx && t.Component ? {
                    pageProps: await d(t.Component, t.ctx)
                } : {};
            let n = await e.getInitialProps(t);
            if (r && u(r))
                return n;
            if (!n)
                throw Object.defineProperty(Error('"' + s(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.'), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: !1,
                    configurable: !0
                });
            return n
        }
        let f = "undefined" != typeof performance
          , p = f && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
        class m extends Error {
        }
        class v extends Error {
        }
        class h extends Error {
            constructor(e) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + e
            }
        }
        class g extends Error {
            constructor(e, t) {
                super(),
                this.message = "Failed to load static file for page: " + e + " " + t
            }
        }
        class y extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function b(e) {
            return JSON.stringify({
                message: e.message,
                stack: e.stack
            })
        }
    }
}]);
