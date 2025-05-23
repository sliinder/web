(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[177], {
    449: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 9324, 23)),
        Promise.resolve().then(r.bind(r, 9304))
    }
    ,
    1362: (e, t, r) => {
        "use strict";
        r.d(t, {
            D: () => c,
            N: () => m
        });
        var n = r(2115)
          , s = (e, t, r, n, s, a, l, o) => {
            let i = document.documentElement
              , c = ["light", "dark"];
            function m(t) {
                var r;
                (Array.isArray(e) ? e : [e]).forEach(e => {
                    let r = "class" === e
                      , n = r && a ? s.map(e => a[e] || e) : s;
                    r ? (i.classList.remove(...n),
                    i.classList.add(a && a[t] ? a[t] : t)) : i.setAttribute(e, t)
                }
                ),
                r = t,
                o && c.includes(r) && (i.style.colorScheme = r)
            }
            if (n)
                m(n);
            else
                try {
                    let e = localStorage.getItem(t) || r
                      , n = l && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
                    m(n)
                } catch (e) {}
        }
          , a = ["light", "dark"]
          , l = "(prefers-color-scheme: dark)"
          , o = n.createContext(void 0)
          , i = {
            setTheme: e => {}
            ,
            themes: []
        }
          , c = () => {
            var e;
            return null != (e = n.useContext(o)) ? e : i
        }
          , m = e => n.useContext(o) ? n.createElement(n.Fragment, null, e.children) : n.createElement(u, {
            ...e
        })
          , d = ["light", "dark"]
          , u = e => {
            let {forcedTheme: t, disableTransitionOnChange: r=!1, enableSystem: s=!0, enableColorScheme: i=!0, storageKey: c="theme", themes: m=d, defaultTheme: u=s ? "system" : "light", attribute: p="data-theme", value: v, children: g, nonce: E, scriptProps: S} = e
              , [k,w] = n.useState( () => y(c, u))
              , [T,C] = n.useState( () => "system" === k ? b() : k)
              , L = v ? Object.values(v) : m
              , A = n.useCallback(e => {
                let t = e;
                if (!t)
                    return;
                "system" === e && s && (t = b());
                let n = v ? v[t] : t
                  , l = r ? f(E) : null
                  , o = document.documentElement
                  , c = e => {
                    "class" === e ? (o.classList.remove(...L),
                    n && o.classList.add(n)) : e.startsWith("data-") && (n ? o.setAttribute(e, n) : o.removeAttribute(e))
                }
                ;
                if (Array.isArray(p) ? p.forEach(c) : c(p),
                i) {
                    let e = a.includes(u) ? u : null
                      , r = a.includes(t) ? t : e;
                    o.style.colorScheme = r
                }
                null == l || l()
            }
            , [E])
              , _ = n.useCallback(e => {
                let t = "function" == typeof e ? e(k) : e;
                w(t);
                try {
                    localStorage.setItem(c, t)
                } catch (e) {}
            }
            , [k])
              , N = n.useCallback(e => {
                C(b(e)),
                "system" === k && s && !t && A("system")
            }
            , [k, t]);
            n.useEffect( () => {
                let e = window.matchMedia(l);
                return e.addListener(N),
                N(e),
                () => e.removeListener(N)
            }
            , [N]),
            n.useEffect( () => {
                let e = e => {
                    e.key === c && (e.newValue ? w(e.newValue) : _(u))
                }
                ;
                return window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
            }
            , [_]),
            n.useEffect( () => {
                A(null != t ? t : k)
            }
            , [t, k]);
            let P = n.useMemo( () => ({
                theme: k,
                setTheme: _,
                forcedTheme: t,
                resolvedTheme: "system" === k ? T : k,
                themes: s ? [...m, "system"] : m,
                systemTheme: s ? T : void 0
            }), [k, _, t, T, s, m]);
            return n.createElement(o.Provider, {
                value: P
            }, n.createElement(h, {
                forcedTheme: t,
                storageKey: c,
                attribute: p,
                enableSystem: s,
                enableColorScheme: i,
                defaultTheme: u,
                value: v,
                themes: m,
                nonce: E,
                scriptProps: S
            }), g)
        }
          , h = n.memo(e => {
            let {forcedTheme: t, storageKey: r, attribute: a, enableSystem: l, enableColorScheme: o, defaultTheme: i, value: c, themes: m, nonce: d, scriptProps: u} = e
              , h = JSON.stringify([a, r, i, t, m, c, l, o]).slice(1, -1);
            return n.createElement("script", {
                ...u,
                suppressHydrationWarning: !0,
                nonce: "",
                dangerouslySetInnerHTML: {
                    __html: "(".concat(s.toString(), ")(").concat(h, ")")
                }
            })
        }
        )
          , y = (e, t) => {
            let r;
            try {
                r = localStorage.getItem(e) || void 0
            } catch (e) {}
            return r || t
        }
          , f = e => {
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
          , b = e => (e || (e = window.matchMedia(l)),
        e.matches ? "dark" : "light")
    }
    ,
    9304: (e, t, r) => {
        "use strict";
        r.d(t, {
            ThemeProvider: () => a
        });
        var n = r(5155)
          , s = r(1362);
        function a(e) {
            let {children: t, ...r} = e;
            return (0,
            n.jsx)(s.N, {
                attribute: "class",
                defaultTheme: "dark",
                enableSystem: !0,
                ...r,
                children: t
            })
        }
    }
    ,
    9324: () => {}
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [533, 441, 684, 358], () => t(449)),
    _N_E = e.O()
}
]);
