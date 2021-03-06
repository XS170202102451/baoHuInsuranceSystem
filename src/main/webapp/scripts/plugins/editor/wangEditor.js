!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.wangEditor = e()
}(this, function () {
    "use strict";

    function t(t) {
        var e = void 0;
        return e = document.createElement("div"), e.innerHTML = t, e.children
    }

    function e(t) {
        return !!t && (t instanceof HTMLCollection || t instanceof NodeList)
    }

    function n(t) {
        var n = document.querySelectorAll(t);
        return e(n) ? n : [n]
    }

    function i(o) {
        if (o) {
            if (o instanceof i) return o;
            this.selector = o;
            var r = o.nodeType, a = [];
            9 === r ? a = [o] : 1 === r ? a = [o] : e(o) || o instanceof Array ? a = o : "string" == typeof o && (o = o.replace("/\n/mg", "").trim(), a = 0 === o.indexOf("<") ? t(o) : n(o));
            var c = a.length;
            if (!c) return this;
            var A = void 0;
            for (A = 0; A < c; A++) this[A] = a[A];
            this.length = c
        }
    }

    function o(t) {
        return new i(t)
    }

    function r(t, e) {
        var n = void 0;
        for (n in t) if (t.hasOwnProperty(n) && !1 === e.call(t, n, t[n])) break
    }

    function a(t, e) {
        var n = void 0, i = void 0, o = t.length || 0;
        for (n = 0; n < o && (i = t[n], !1 !== e.call(t, i, n)); n++) ;
    }

    function c(t) {
        return t + Math.random().toString().slice(2)
    }

    function A(t) {
        return null == t ? "" : t.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;")
    }

    function s(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-bold"><i/>\n        </div>'), this.type = "click", this._active = !1
    }

    function l(t, e) {
        var n = this, i = t.editor;
        this.menu = t, this.opt = e;
        var r = o('<div class="w-e-droplist"></div>'), a = e.$title, c = void 0;
        a && (c = a.html(), c = z(i, c), a.html(c), a.addClass("w-e-dp-title"), r.append(a));
        var A = e.list || [], s = e.type || "list", l = e.onClick || J,
            d = o('<ul class="' + ("list" === s ? "w-e-list" : "w-e-block") + '"></ul>');
        r.append(d), A.forEach(function (t) {
            var e = t.$elem, r = e.html();
            r = z(i, r), e.html(r);
            var a = t.value, c = o('<li class="w-e-item"></li>');
            e && (c.append(e), d.append(c), e.on("click", function (t) {
                l(a), n.hideTimeoutId = setTimeout(function () {
                    n.hide()
                }, 0)
            }))
        }), r.on("mouseleave", function (t) {
            n.hideTimeoutId = setTimeout(function () {
                n.hide()
            }, 0)
        }), this.$container = r, this._rendered = !1, this._show = !1
    }

    function d(t) {
        var e = this;
        this.editor = t, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-header"><i/></div>'), this.type = "droplist", this._active = !1, this.droplist = new l(this, {
            width: 100,
            $title: o("<p>设置标题</p>"),
            type: "list",
            list: [{$elem: o("<h1>H1</h1>"), value: "<h1>"}, {
                $elem: o("<h2>H2</h2>"),
                value: "<h2>"
            }, {$elem: o("<h3>H3</h3>"), value: "<h3>"}, {
                $elem: o("<h4>H4</h4>"),
                value: "<h4>"
            }, {$elem: o("<h5>H5</h5>"), value: "<h5>"}, {$elem: o("<p>正文</p>"), value: "<p>"}],
            onClick: function (t) {
                e._command(t)
            }
        })
    }

    function u(t, e) {
        this.menu = t, this.opt = e
    }

    function p(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-link"><i/></div>'), this.type = "panel", this._active = !1
    }

    function h(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-italic"><i/>\n        </div>'), this.type = "click", this._active = !1
    }

    function f(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-redo"><i/>\n        </div>'), this.type = "click", this._active = !1
    }

    function g(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-strikethrough"><i/>\n        </div>'), this.type = "click", this._active = !1
    }

    function m(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-underline"><i/>\n        </div>'), this.type = "click", this._active = !1
    }

    function w(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-undo"><i/>\n        </div>'), this.type = "click", this._active = !1
    }

    function v(t) {
        var e = this;
        this.editor = t, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-list2"><i/></div>'), this.type = "droplist", this._active = !1, this.droplist = new l(this, {
            width: 120,
            $title: o("<p>设置列表</p>"),
            type: "list",
            list: [{
                $elem: o('<span><i class="w-e-icon-list-numbered"></i> 有序列表</span>'),
                value: "insertOrderedList"
            }, {$elem: o('<span><i class="w-e-icon-list2"></i> 无序列表</span>'), value: "insertUnorderedList"}],
            onClick: function (t) {
                e._command(t)
            }
        })
    }

    function b(t) {
        var e = this;
        this.editor = t, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-paragraph-left"><i/></div>'), this.type = "droplist", this._active = !1, this.droplist = new l(this, {
            width: 100,
            $title: o("<p>对齐方式</p>"),
            type: "list",
            list: [{
                $elem: o('<span><i class="w-e-icon-paragraph-left"></i> 靠左</span>'),
                value: "justifyLeft"
            }, {
                $elem: o('<span><i class="w-e-icon-paragraph-center"></i> 居中</span>'),
                value: "justifyCenter"
            }, {$elem: o('<span><i class="w-e-icon-paragraph-right"></i> 靠右</span>'), value: "justifyRight"}],
            onClick: function (t) {
                e._command(t)
            }
        })
    }

    function y(t) {
        var e = this;
        this.editor = t, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-pencil2"><i/></div>'), this.type = "droplist";
        var n = t.config, i = n.colors || [];
        this._active = !1, this.droplist = new l(this, {
            width: 120,
            $title: o("<p>文字颜色</p>"),
            type: "inline-block",
            list: i.map(function (t) {
                return {$elem: o('<i style="color:' + t + ';" class="w-e-icon-pencil2"></i>'), value: t}
            }),
            onClick: function (t) {
                e._command(t)
            }
        })
    }

    function E(t) {
        var e = this;
        this.editor = t, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-paint-brush"><i/></div>'), this.type = "droplist";
        var n = t.config, i = n.colors || [];
        this._active = !1, this.droplist = new l(this, {
            width: 120,
            $title: o("<p>背景色</p>"),
            type: "inline-block",
            list: i.map(function (t) {
                return {$elem: o('<i style="color:' + t + ';" class="w-e-icon-paint-brush"></i>'), value: t}
            }),
            onClick: function (t) {
                e._command(t)
            }
        })
    }

    function x(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-quotes-left"><i/>\n        </div>'), this.type = "click", this._active = !1
    }

    function B(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-terminal"><i/>\n        </div>'), this.type = "panel", this._active = !1
    }

    function C(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu">\n            <i class="w-e-icon-happy"><i/>\n        </div>'), this.type = "panel", this._active = !1
    }

    function I(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-table2"><i/></div>'), this.type = "panel", this._active = !1
    }

    function Q(t) {
        this.editor = t, this.$elem = o('<div class="w-e-menu"><i class="w-e-icon-play"><i/></div>'), this.type = "panel", this._active = !1
    }

    function _(t) {
        this.editor = t;
        var e = c("w-e-img");
        this.$elem = o('<div class="w-e-menu" id="' + e + '"><i class="w-e-icon-image"><i/></div>'), t.imgMenuId = e, this.type = "panel", this._active = !1
    }

    function D(t) {
        this.editor = t, this.menus = {}
    }

    function k(t) {
        var e = t.clipboardData || t.originalEvent && t.originalEvent.clipboardData, n = void 0;
        return n = null == e ? window.clipboardData && window.clipboardData.getData("text") : e.getData("text/plain"), A(n)
    }

    function M(t, e) {
        var n = t.clipboardData || t.originalEvent && t.originalEvent.clipboardData, i = void 0, o = void 0;
        if (null == n ? i = window.clipboardData && window.clipboardData.getData("text") : (i = n.getData("text/plain"), o = n.getData("text/html")), !o && i && (o = "<p>" + A(i) + "</p>"), o) {
            var r = o.split("</html>");
            return 2 === r.length && (o = r[0]), o = o.replace(/<(meta|script|link).+?>/gim, ""), o = o.replace(/<!--.*?-->/gm, ""), o = e ? o.replace(/\s?(class|style)=('|").+?('|")/gim, "") : o.replace(/\s?class=('|").+?('|")/gim, "")
        }
    }

    function U(t) {
        var e = [];
        if (k(t)) return e;
        var n = t.clipboardData || t.originalEvent && t.originalEvent.clipboardData || {}, i = n.items;
        return i ? (r(i, function (t, n) {
            var i = n.type;
            /image/i.test(i) && e.push(n.getAsFile())
        }), e) : e
    }

    function S(t) {
        var e = [];
        return (t.childNodes() || []).forEach(function (t) {
            var n = void 0, i = t.nodeType;
            if (3 === i && (n = t.textContent), 1 === i) {
                n = {}, n.tag = t.nodeName.toLowerCase();
                for (var r = [], a = t.attributes || {}, c = a.length || 0, A = 0; A < c; A++) {
                    var s = a[A];
                    r.push({name: s.name, value: s.value})
                }
                n.attrs = r, n.children = S(o(t))
            }
            e.push(n)
        }), e
    }

    function N(t) {
        this.editor = t
    }

    function R(t) {
        this.editor = t
    }

    function F(t) {
        this.editor = t, this._currentRange = null
    }

    function T(t) {
        this.editor = t, this._time = 0, this._isShow = !1, this._isRender = !1, this._timeoutId = 0, this.$textContainer = t.$textContainerElem, this.$bar = o('<div class="w-e-progress"></div>')
    }

    function j(t) {
        this.editor = t
    }

    function H(t, e) {
        if (null == t) throw new Error("错误：初始化编辑器时候未传入任何参数，请查阅文档");
        this.id = "wangEditor-" + W++, this.toolbarSelector = t, this.textSelector = e, this.customConfig = {}
    }

    var Y = [];
    i.prototype = {
        constructor: i, forEach: function (t) {
            var e = void 0;
            for (e = 0; e < this.length; e++) {
                var n = this[e];
                if (!1 === t.call(n, n, e)) break
            }
            return this
        }, clone: function (t) {
            var e = [];
            return this.forEach(function (n) {
                e.push(n.cloneNode(!!t))
            }), o(e)
        }, get: function (t) {
            var e = this.length;
            return t >= e && (t %= e), o(this[t])
        }, first: function () {
            return this.get(0)
        }, last: function () {
            var t = this.length;
            return this.get(t - 1)
        }, on: function (t, e, n) {
            n || (n = e, e = null);
            var i = [];
            return i = t.split(/\s+/), this.forEach(function (t) {
                i.forEach(function (i) {
                    if (i) {
                        if (Y.push({elem: t, type: i, fn: n}), !e) return void t.addEventListener(i, n);
                        t.addEventListener(i, function (t) {
                            var i = t.target;
                            i.matches(e) && n.call(i, t)
                        })
                    }
                })
            })
        }, off: function (t, e) {
            return this.forEach(function (n) {
                n.removeEventListener(t, e)
            })
        }, attr: function (t, e) {
            return null == e ? this[0].getAttribute(t) : this.forEach(function (n) {
                n.setAttribute(t, e)
            })
        }, addClass: function (t) {
            return t ? this.forEach(function (e) {
                var n = void 0;
                e.className ? (n = e.className.split(/\s/), n = n.filter(function (t) {
                    return !!t.trim()
                }), n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")) : e.className = t
            }) : this
        }, removeClass: function (t) {
            return t ? this.forEach(function (e) {
                var n = void 0;
                e.className && (n = e.className.split(/\s/), n = n.filter(function (e) {
                    return !(!(e = e.trim()) || e === t)
                }), e.className = n.join(" "))
            }) : this
        }, css: function (t, e) {
            var n = t + ":" + e + ";";
            return this.forEach(function (e) {
                var i = (e.getAttribute("style") || "").trim(), o = void 0, r = [];
                i ? (o = i.split(";"), o.forEach(function (t) {
                    var e = t.split(":").map(function (t) {
                        return t.trim()
                    });
                    2 === e.length && r.push(e[0] + ":" + e[1])
                }), r = r.map(function (e) {
                    return 0 === e.indexOf(t) ? n : e
                }), r.indexOf(n) < 0 && r.push(n), e.setAttribute("style", r.join("; "))) : e.setAttribute("style", n)
            })
        }, show: function () {
            return this.css("display", "block")
        }, hide: function () {
            return this.css("display", "none")
        }, children: function () {
            var t = this[0];
            return t ? o(t.children) : null
        }, childNodes: function () {
            var t = this[0];
            return t ? o(t.childNodes) : null
        }, append: function (t) {
            return this.forEach(function (e) {
                t.forEach(function (t) {
                    e.appendChild(t)
                })
            })
        }, remove: function () {
            return this.forEach(function (t) {
                if (t.remove) t.remove(); else {
                    var e = t.parentElement;
                    e && e.removeChild(t)
                }
            })
        }, isContain: function (t) {
            var e = this[0], n = t[0];
            return e.contains(n)
        }, getSizeData: function () {
            return this[0].getBoundingClientRect()
        }, getNodeName: function () {
            return this[0].nodeName
        }, find: function (t) {
            return o(this[0].querySelectorAll(t))
        }, text: function (t) {
            return t ? this.forEach(function (e) {
                e.innerHTML = t
            }) : this[0].innerHTML.replace(/<.*?>/g, function () {
                return ""
            })
        }, html: function (t) {
            var e = this[0];
            return null == t ? e.innerHTML : (e.innerHTML = t, this)
        }, val: function () {
            return this[0].value.trim()
        }, focus: function () {
            return this.forEach(function (t) {
                t.focus()
            })
        }, parent: function () {
            return o(this[0].parentElement)
        }, parentUntil: function (t, e) {
            var n = document.querySelectorAll(t), i = n.length;
            if (!i) return null;
            var r = e || this[0];
            if ("BODY" === r.nodeName) return null;
            var a = r.parentElement, c = void 0;
            for (c = 0; c < i; c++) if (a === n[c]) return o(a);
            return this.parentUntil(t, a)
        }, equal: function (t) {
            return 1 === t.nodeType ? this[0] === t : this[0] === t[0]
        }, insertBefore: function (t) {
            var e = o(t), n = e[0];
            return n ? this.forEach(function (t) {
                n.parentNode.insertBefore(t, n)
            }) : this
        }, insertAfter: function (t) {
            var e = o(t), n = e[0];
            return n ? this.forEach(function (t) {
                var e = n.parentNode;
                e.lastChild === n ? e.appendChild(t) : e.insertBefore(t, n.nextSibling)
            }) : this
        }
    }, o.offAll = function () {
        Y.forEach(function (t) {
            var e = t.elem, n = t.type, i = t.fn;
            e.removeEventListener(n, i)
        })
    };
    var L = {
        menus: ["head", "bold", "italic", "underline", "strikeThrough", "foreColor", "backColor", "link", "list", "justify", "quote", "emoticon", "image", "table", "video", "code", "undo", "redo"],
        colors: ["#000000", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b", "#ffffff"],
        emotions: [{
            title: "默认",
            type: "image",
            content: [{
                alt: "[坏笑]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png"
            }, {
                alt: "[舔屏]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png"
            }, {
                alt: "[污]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3c/pcmoren_wu_org.png"
            }, {
                alt: "[允悲]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2c/moren_yunbei_org.png"
            }, {
                alt: "[笑而不语]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3a/moren_xiaoerbuyu_org.png"
            }, {
                alt: "[费解]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3c/moren_feijie_org.png"
            }, {
                alt: "[憧憬]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/37/moren_chongjing_org.png"
            }, {
                alt: "[并不简单]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/fc/moren_bbjdnew_org.png"
            }, {
                alt: "[微笑]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/huanglianwx_org.gif"
            }, {
                alt: "[酷]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8a/pcmoren_cool2017_org.png"
            }, {
                alt: "[嘻嘻]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/tootha_org.gif"
            }, {
                alt: "[哈哈]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6a/laugh.gif"
            }, {
                alt: "[可爱]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/14/tza_org.gif"
            }, {
                alt: "[可怜]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/kl_org.gif"
            }, {
                alt: "[挖鼻]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/wabi_org.gif"
            }, {
                alt: "[吃惊]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f4/cj_org.gif"
            }, {
                alt: "[害羞]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/shamea_org.gif"
            }, {
                alt: "[挤眼]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c3/zy_org.gif"
            }, {
                alt: "[闭嘴]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/29/bz_org.gif"
            }, {
                alt: "[鄙视]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/71/bs2_org.gif"
            }, {
                alt: "[爱你]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/lovea_org.gif"
            }, {
                alt: "[泪]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/sada_org.gif"
            }, {
                alt: "[偷笑]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/19/heia_org.gif"
            }, {
                alt: "[亲亲]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8f/qq_org.gif"
            }, {
                alt: "[生病]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/sb_org.gif"
            }, {
                alt: "[太开心]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/mb_org.gif"
            }, {
                alt: "[白眼]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/landeln_org.gif"
            }, {
                alt: "[右哼哼]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/98/yhh_org.gif"
            }, {
                alt: "[左哼哼]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/zhh_org.gif"
            }, {alt: "[嘘]", src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a6/x_org.gif"}, {
                alt: "[衰]",
                src: "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/cry.gif"
            }]
        }, {
            title: "新浪",
            type: "image",
            content: [{
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif",
                alt: "[草泥马]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif",
                alt: "[神马]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif",
                alt: "[浮云]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c9/geili_thumb.gif",
                alt: "[给力]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f2/wg_thumb.gif",
                alt: "[围观]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/vw_thumb.gif",
                alt: "[威武]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/panda_thumb.gif",
                alt: "[熊猫]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/81/rabbit_thumb.gif",
                alt: "[兔子]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/otm_thumb.gif",
                alt: "[奥特曼]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/15/j_thumb.gif",
                alt: "[囧]"
            }, {
                src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/hufen_thumb.gif",
                alt: "[互粉]"
            }, {src: "http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c4/liwu_thumb.gif", alt: "[礼物]"}]
        }, {
            title: "emoji",
            type: "emoji",
            content: "😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 😏 😒 😞 😔 😟 😕 🙁  😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 😭 😓 😪 😴 🙄 🤔 😬 🤐".split(/\s/)
        }],
        zIndex: 1e4,
        debug: !1,
        linkCheck: function (t, e) {
            return !0
        },
        linkImgCheck: function (t) {
            return !0
        },
        pasteFilterStyle: !0,
        pasteTextHandle: function (t) {
            return t
        },
        showLinkImg: !0,
        linkImgCallback: function (t) {
        },
        uploadImgMaxSize: 5242880,
        uploadImgShowBase64: !1,
        uploadFileName: "",
        uploadImgParams: {},
        uploadImgHeaders: {},
        withCredentials: !1,
        uploadImgTimeout: 1e4,
        uploadImgHooks: {
            before: function (t, e, n) {
            }, success: function (t, e, n) {
            }, fail: function (t, e, n) {
            }, error: function (t, e) {
            }, timeout: function (t, e) {
            }
        },
        qiniu: !1
    }, P = {
        _ua: navigator.userAgent, isWebkit: function () {
            return /webkit/i.test(this._ua)
        }, isIE: function () {
            return "ActiveXObject" in window
        }
    };
    s.prototype = {
        constructor: s, onClick: function (t) {
            var e = this.editor, n = e.selection.isSelectionEmpty();
            n && e.selection.createEmptyRange(), e.cmd.do("bold"), n && (e.selection.collapseRange(), e.selection.restoreSelection())
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem;
            e.cmd.queryCommandState("bold") ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    };
    var z = function (t, e) {
        var n = t.config.langArgs || [], i = e;
        return n.forEach(function (t) {
            var e = t.reg, n = t.val;
            e.test(i) && (i = i.replace(e, function () {
                return n
            }))
        }), i
    }, J = function () {
    };
    l.prototype = {
        constructor: l, show: function () {
            this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
            var t = this.menu, e = t.$elem, n = this.$container;
            if (!this._show) {
                if (this._rendered) n.show(); else {
                    var i = e.getSizeData().height || 0, o = this.opt.width || 100;
                    n.css("margin-top", i + "px").css("width", o + "px"), e.append(n), this._rendered = !0
                }
                this._show = !0
            }
        }, hide: function () {
            this.showTimeoutId && clearTimeout(this.showTimeoutId);
            var t = this.$container;
            this._show && (t.hide(), this._show = !1)
        }
    }, d.prototype = {
        constructor: d, _command: function (t) {
            var e = this.editor, n = e.selection.getSelectionContainerElem();
            e.$textElem.equal(n) || e.cmd.do("formatBlock", t)
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem, i = /^h/i, o = e.cmd.queryCommandValue("formatBlock");
            i.test(o) ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    };
    var O = function () {
    }, G = [];
    u.prototype = {
        constructor: u, show: function () {
            var t = this, e = this.menu;
            if (!(G.indexOf(e) >= 0)) {
                var n = e.editor, i = o("body"), r = n.$textContainerElem, a = this.opt,
                    c = o('<div class="w-e-panel-container"></div>'), A = a.width || 300;
                c.css("width", A + "px").css("margin-left", (0 - A) / 2 + "px");
                var s = o('<i class="w-e-icon-close w-e-panel-close"></i>');
                c.append(s), s.on("click", function () {
                    t.hide()
                });
                var l = o('<ul class="w-e-panel-tab-title"></ul>'), d = o('<div class="w-e-panel-tab-content"></div>');
                c.append(l).append(d);
                var u = a.height;
                u && d.css("height", u + "px").css("overflow-y", "auto");
                var p = a.tabs || [], h = [], f = [];
                p.forEach(function (t, e) {
                    if (t) {
                        var i = t.title || "", r = t.tpl || "";
                        i = z(n, i), r = z(n, r);
                        var a = o('<li class="w-e-item">' + i + "</li>");
                        l.append(a);
                        var c = o(r);
                        d.append(c), a._index = e, h.push(a), f.push(c), 0 === e ? (a._active = !0, a.addClass("w-e-active")) : c.hide(), a.on("click", function (t) {
                            a._active || (h.forEach(function (t) {
                                t._active = !1, t.removeClass("w-e-active")
                            }), f.forEach(function (t) {
                                t.hide()
                            }), a._active = !0, a.addClass("w-e-active"), c.show())
                        })
                    }
                }), c.on("click", function (t) {
                    t.stopPropagation()
                }), i.on("click", function (e) {
                    t.hide()
                }), r.append(c), p.forEach(function (e, n) {
                    if (e) {
                        (e.events || []).forEach(function (e) {
                            var i = e.selector, o = e.type, r = e.fn || O;
                            f[n].find(i).on(o, function (e) {
                                e.stopPropagation(), r(e) && t.hide()
                            })
                        })
                    }
                });
                var g = c.find("input[type=text],textarea");
                g.length && g.get(0).focus(), this.$container = c, this._hideOtherPanels(), G.push(e)
            }
        }, hide: function () {
            var t = this.menu, e = this.$container;
            e && e.remove(), G = G.filter(function (e) {
                return e !== t
            })
        }, _hideOtherPanels: function () {
            G.length && G.forEach(function (t) {
                var e = t.panel || {};
                e.hide && e.hide()
            })
        }
    }, p.prototype = {
        constructor: p, onClick: function (t) {
            var e = this.editor, n = void 0;
            if (this._active) {
                if (!(n = e.selection.getSelectionContainerElem())) return;
                e.selection.createRangeByElem(n), e.selection.restoreSelection(), this._createPanel(n.text(), n.attr("href"))
            } else e.selection.isSelectionEmpty() ? this._createPanel("", "") : this._createPanel(e.selection.getSelectionText(), "")
        }, _createPanel: function (t, e) {
            var n = this, i = c("input-link"), r = c("input-text"), a = c("btn-ok"), A = c("btn-del"),
                s = this._active ? "inline-block" : "none", l = new u(this, {
                    width: 300,
                    tabs: [{
                        title: "链接",
                        tpl: '<div>\n                            <input id="' + r + '" type="text" class="block" value="' + t + '" placeholder="链接文字"/></td>\n                            <input id="' + i + '" type="text" class="block" value="' + e + '" placeholder="http://..."/></td>\n                            <div class="w-e-button-container">\n                                <button id="' + a + '" class="right">插入</button>\n                                <button id="' + A + '" class="gray right" style="display:' + s + '">删除链接</button>\n                            </div>\n                        </div>',
                        events: [{
                            selector: "#" + a, type: "click", fn: function () {
                                var t = o("#" + i), e = o("#" + r), a = t.val(), c = e.val();
                                return n._insertLink(c, a), !0
                            }
                        }, {
                            selector: "#" + A, type: "click", fn: function () {
                                return n._delLink(), !0
                            }
                        }]
                    }]
                });
            l.show(), this.panel = l
        }, _delLink: function () {
            if (this._active) {
                var t = this.editor;
                if (t.selection.getSelectionContainerElem()) {
                    var e = t.selection.getSelectionText();
                    t.cmd.do("insertHTML", "<span>" + e + "</span>")
                }
            }
        }, _insertLink: function (t, e) {
            if (t && e) {
                var n = this.editor, i = n.config, o = i.linkCheck, r = !0;
                o && "function" == typeof o && (r = o(t, e)), !0 === r ? n.cmd.do("insertHTML", '<a href="' + e + '" target="_blank">' + t + "</a>") : alert(r)
            }
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem, i = e.selection.getSelectionContainerElem();
            i && ("A" === i.getNodeName() ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active")))
        }
    }, h.prototype = {
        constructor: h, onClick: function (t) {
            var e = this.editor, n = e.selection.isSelectionEmpty();
            n && e.selection.createEmptyRange(), e.cmd.do("italic"), n && (e.selection.collapseRange(), e.selection.restoreSelection())
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem;
            e.cmd.queryCommandState("italic") ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, f.prototype = {
        constructor: f, onClick: function (t) {
            this.editor.cmd.do("redo")
        }
    }, g.prototype = {
        constructor: g, onClick: function (t) {
            var e = this.editor, n = e.selection.isSelectionEmpty();
            n && e.selection.createEmptyRange(), e.cmd.do("strikeThrough"), n && (e.selection.collapseRange(), e.selection.restoreSelection())
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem;
            e.cmd.queryCommandState("strikeThrough") ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, m.prototype = {
        constructor: m, onClick: function (t) {
            var e = this.editor, n = e.selection.isSelectionEmpty();
            n && e.selection.createEmptyRange(), e.cmd.do("underline"), n && (e.selection.collapseRange(), e.selection.restoreSelection())
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem;
            e.cmd.queryCommandState("underline") ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, w.prototype = {
        constructor: w, onClick: function (t) {
            this.editor.cmd.do("undo")
        }
    }, v.prototype = {
        constructor: v, _command: function (t) {
            var e = this.editor, n = e.$textElem;
            if (e.selection.restoreSelection(), !e.cmd.queryCommandState(t)) {
                e.cmd.do(t);
                var i = e.selection.getSelectionContainerElem();
                if ("LI" === i.getNodeName() && (i = i.parent()), !1 !== /^ol|ul$/i.test(i.getNodeName()) && !i.equal(n)) {
                    var o = i.parent();
                    o.equal(n) || (i.insertAfter(o), o.remove())
                }
            }
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem;
            e.cmd.queryCommandState("insertUnOrderedList") || e.cmd.queryCommandState("insertOrderedList") ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, b.prototype = {
        constructor: b, _command: function (t) {
            this.editor.cmd.do(t)
        }
    }, y.prototype = {
        constructor: y, _command: function (t) {
            this.editor.cmd.do("foreColor", t)
        }
    }, E.prototype = {
        constructor: E, _command: function (t) {
            this.editor.cmd.do("backColor", t)
        }
    }, x.prototype = {
        constructor: x, onClick: function (t) {
            var e = this.editor, n = e.selection.getSelectionContainerElem(), i = n.getNodeName();
            if (!P.isIE()) return void ("BLOCKQUOTE" === i ? e.cmd.do("formatBlock", "<P>") : e.cmd.do("formatBlock", "<BLOCKQUOTE>"));
            var r = void 0, a = void 0;
            if ("P" === i) return r = n.text(), a = o("<blockquote>" + r + "</blockquote>"), a.insertAfter(n), void n.remove();
            "BLOCKQUOTE" === i && (r = n.text(), a = o("<p>" + r + "</p>"), a.insertAfter(n), n.remove())
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem, i = /^BLOCKQUOTE$/i, o = e.cmd.queryCommandValue("formatBlock");
            i.test(o) ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    }, B.prototype = {
        constructor: B, onClick: function (t) {
            var e = this.editor, n = e.selection.getSelectionStartElem(), i = e.selection.getSelectionEndElem(),
                r = e.selection.isSelectionEmpty(), a = e.selection.getSelectionText(), c = void 0;
            return n.equal(i) ? r ? void (this._active ? this._createPanel(n.html()) : this._createPanel()) : (c = o("<code>" + a + "</code>"), e.cmd.do("insertElem", c), e.selection.createRangeByElem(c, !1), void e.selection.restoreSelection()) : void e.selection.restoreSelection()
        }, _createPanel: function (t) {
            var e = this;
            t = t || "";
            var n = t ? "edit" : "new", i = c("texxt"), r = c("btn"), a = new u(this, {
                width: 500,
                tabs: [{
                    title: "插入代码",
                    tpl: '<div>\n                        <textarea id="' + i + '" style="height:145px;;">' + t + '</textarea>\n                        <div class="w-e-button-container">\n                            <button id="' + r + '" class="right">插入</button>\n                        </div>\n                    <div>',
                    events: [{
                        selector: "#" + r, type: "click", fn: function () {
                            var t = o("#" + i), r = t.val() || t.html();
                            return r = A(r), "new" === n ? e._insertCode(r) : e._updateCode(r), !0
                        }
                    }]
                }]
            });
            a.show(), this.panel = a
        }, _insertCode: function (t) {
            this.editor.cmd.do("insertHTML", "<pre><code>" + t + "</code></pre><p><br></p>")
        }, _updateCode: function (t) {
            var e = this.editor, n = e.selection.getSelectionContainerElem();
            n && (n.html(t), e.selection.restoreSelection())
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem, i = e.selection.getSelectionContainerElem();
            if (i) {
                var o = i.parent();
                "CODE" === i.getNodeName() && "PRE" === o.getNodeName() ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
            }
        }
    }, C.prototype = {
        constructor: C, onClick: function () {
            this._createPanel()
        }, _createPanel: function () {
            var t = this, e = this.editor, n = e.config, i = n.emotions || [], r = [];
            i.forEach(function (e) {
                var n = e.type, i = e.content || [], a = "";
                "emoji" === n && i.forEach(function (t) {
                    t && (a += '<span class="w-e-item">' + t + "</span>")
                }), "image" === n && i.forEach(function (t) {
                    var e = t.src, n = t.alt;
                    e && (a += '<span class="w-e-item"><img src="' + e + '" alt="' + n + '" data-w-e="1"/></span>')
                }), r.push({
                    title: e.title,
                    tpl: '<div class="w-e-emoticon-container">' + a + "</div>",
                    events: [{
                        selector: "span.w-e-item", type: "click", fn: function (e) {
                            var n = e.target, i = o(n), r = i.getNodeName(), a = void 0;
                            return a = "IMG" === r ? i.parent().html() : "<span>" + i.html() + "</span>", t._insert(a), !0
                        }
                    }]
                })
            });
            var a = new u(this, {width: 300, height: 200, tabs: r});
            a.show(), this.panel = a
        }, _insert: function (t) {
            this.editor.cmd.do("insertHTML", t)
        }
    }, I.prototype = {
        constructor: I, onClick: function () {
            this._active ? this._createEditPanel() : this._createInsertPanel()
        }, _createInsertPanel: function () {
            var t = this, e = c("btn"), n = c("row"), i = c("col"), r = new u(this, {
                width: 250,
                tabs: [{
                    title: "插入表格",
                    tpl: '<div>\n                        <p style="text-align:left; padding:5px 0;">\n                            创建\n                            <input id="' + n + '" type="text" value="5" style="width:40px;text-align:center;"/>\n                            行\n                            <input id="' + i + '" type="text" value="5" style="width:40px;text-align:center;"/>\n                            列的表格\n                        </p>\n                        <div class="w-e-button-container">\n                            <button id="' + e + '" class="right">插入</button>\n                        </div>\n                    </div>',
                    events: [{
                        selector: "#" + e, type: "click", fn: function () {
                            var e = parseInt(o("#" + n).val()), r = parseInt(o("#" + i).val());
                            return e && r && e > 0 && r > 0 && t._insert(e, r), !0
                        }
                    }]
                }]
            });
            r.show(), this.panel = r
        }, _insert: function (t, e) {
            var n = void 0, i = void 0, o = '<table border="0" width="100%" cellpadding="0" cellspacing="0">';
            for (n = 0; n < t; n++) {
                if (o += "<tr>", 0 === n) for (i = 0; i < e; i++) o += "<th>&nbsp;</th>"; else for (i = 0; i < e; i++) o += "<td>&nbsp;</td>";
                o += "</tr>"
            }
            o += "</table><p><br></p>";
            var r = this.editor;
            r.cmd.do("insertHTML", o), r.cmd.do("enableObjectResizing", !1), r.cmd.do("enableInlineTableEditing", !1)
        }, _createEditPanel: function () {
            var t = this, e = c("add-row"), n = c("add-col"), i = c("del-row"), o = c("del-col"), r = c("del-table");
            new u(this, {
                width: 320, tabs: [{
                    title: "编辑表格",
                    tpl: '<div>\n                        <div class="w-e-button-container" style="border-bottom:1px solid #f1f1f1;padding-bottom:5px;margin-bottom:5px;">\n                            <button id="' + e + '" class="left">增加行</button>\n                            <button id="' + i + '" class="red left">删除行</button>\n                            <button id="' + n + '" class="left">增加列</button>\n                            <button id="' + o + '" class="red left">删除列</button>\n                        </div>\n                        <div class="w-e-button-container">\n                            <button id="' + r + '" class="gray left">删除表格</button>\n                        </dv>\n                    </div>',
                    events: [{
                        selector: "#" + e, type: "click", fn: function () {
                            return t._addRow(), !0
                        }
                    }, {
                        selector: "#" + n, type: "click", fn: function () {
                            return t._addCol(), !0
                        }
                    }, {
                        selector: "#" + i, type: "click", fn: function () {
                            return t._delRow(), !0
                        }
                    }, {
                        selector: "#" + o, type: "click", fn: function () {
                            return t._delCol(), !0
                        }
                    }, {
                        selector: "#" + r, type: "click", fn: function () {
                            return t._delTable(), !0
                        }
                    }]
                }]
            }).show()
        }, _getLocationData: function () {
            var t = {}, e = this.editor, n = e.selection.getSelectionContainerElem();
            if (n) {
                var i = n.getNodeName();
                if ("TD" === i || "TH" === i) {
                    var o = n.parent(), r = o.children(), a = r.length;
                    r.forEach(function (e, i) {
                        if (e === n[0]) return t.td = {index: i, elem: e, length: a}, !1
                    });
                    var c = o.parent(), A = c.children(), s = A.length;
                    return A.forEach(function (e, n) {
                        if (e === o[0]) return t.tr = {index: n, elem: e, length: s}, !1
                    }), t
                }
            }
        }, _addRow: function () {
            var t = this._getLocationData();
            if (t) {
                var e = t.tr, n = o(e.elem), i = t.td, r = i.length, a = document.createElement("tr"), c = "",
                    A = void 0;
                for (A = 0; A < r; A++) c += "<td>&nbsp;</td>";
                a.innerHTML = c, o(a).insertAfter(n)
            }
        }, _addCol: function () {
            var t = this._getLocationData();
            if (t) {
                var e = t.tr, n = t.td, i = n.index;
                o(e.elem).parent().children().forEach(function (t) {
                    var e = o(t), n = e.children(), r = n.get(i), a = r.getNodeName().toLowerCase();
                    o(document.createElement(a)).insertAfter(r)
                })
            }
        }, _delRow: function () {
            var t = this._getLocationData();
            if (t) {
                o(t.tr.elem).remove()
            }
        }, _delCol: function () {
            var t = this._getLocationData();
            if (t) {
                var e = t.tr, n = t.td, i = n.index;
                o(e.elem).parent().children().forEach(function (t) {
                    o(t).children().get(i).remove()
                })
            }
        }, _delTable: function () {
            var t = this.editor, e = t.selection.getSelectionContainerElem();
            if (e) {
                var n = e.parentUntil("table");
                n && n.remove()
            }
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem, i = e.selection.getSelectionContainerElem();
            if (i) {
                var o = i.getNodeName();
                "TD" === o || "TH" === o ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
            }
        }
    }, Q.prototype = {
        constructor: Q, onClick: function () {
            this._createPanel()
        }, _createPanel: function () {
            var t = this, e = c("text-val"), n = c("btn"), i = new u(this, {
                width: 350,
                tabs: [{
                    title: "插入视频",
                    tpl: '<div>\n                        <input id="' + e + '" type="text" class="block" placeholder="格式如：<iframe src=... ></iframe>"/>\n                        <div class="w-e-button-container">\n                            <button id="' + n + '" class="right">插入</button>\n                        </div>\n                    </div>',
                    events: [{
                        selector: "#" + n, type: "click", fn: function () {
                            var n = o("#" + e), i = n.val().trim();
                            return i && t._insert(i), !0
                        }
                    }]
                }]
            });
            i.show(), this.panel = i
        }, _insert: function (t) {
            this.editor.cmd.do("insertHTML", t + "<p><br></p>")
        }
    }, _.prototype = {
        constructor: _, onClick: function () {
            this.editor.config.qiniu || (this._active ? this._createEditPanel() : this._createInsertPanel())
        }, _createEditPanel: function () {
            var t = this.editor, e = c("width-30"), n = c("width-50"), i = c("width-100"), o = c("del-btn"), r = [{
                title: "编辑图片",
                tpl: '<div>\n                    <div class="w-e-button-container" style="border-bottom:1px solid #f1f1f1;padding-bottom:5px;margin-bottom:5px;">\n                        <span style="float:left;font-size:14px;margin:4px 5px 0 5px;color:#333;">最大宽度：</span>\n                        <button id="' + e + '" class="left">30%</button>\n                        <button id="' + n + '" class="left">50%</button>\n                        <button id="' + i + '" class="left">100%</button>\n                    </div>\n                    <div class="w-e-button-container">\n                        <button id="' + o + '" class="gray left">删除图片</button>\n                    </dv>\n                </div>',
                events: [{
                    selector: "#" + e, type: "click", fn: function () {
                        var e = t._selectedImg;
                        return e && e.css("max-width", "30%"), !0
                    }
                }, {
                    selector: "#" + n, type: "click", fn: function () {
                        var e = t._selectedImg;
                        return e && e.css("max-width", "50%"), !0
                    }
                }, {
                    selector: "#" + i, type: "click", fn: function () {
                        var e = t._selectedImg;
                        return e && e.css("max-width", "100%"), !0
                    }
                }, {
                    selector: "#" + o, type: "click", fn: function () {
                        var e = t._selectedImg;
                        return e && e.remove(), !0
                    }
                }]
            }], a = new u(this, {width: 300, tabs: r});
            a.show(), this.panel = a
        }, _createInsertPanel: function () {
            var t = this.editor, e = t.uploadImg, n = t.config, i = c("up-trigger"), r = c("up-file"),
                a = c("link-url"), A = c("link-btn"), s = [{
                    title: "上传图片",
                    tpl: '<div class="w-e-up-img-container">\n                    <div id="' + i + '" class="w-e-up-btn">\n                        <i class="w-e-icon-upload2"></i>\n                    </div>\n                    <div style="display:none;">\n                        <input id="' + r + '" type="file" multiple="multiple" accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp"/>\n                    </div>\n                </div>',
                    events: [{
                        selector: "#" + i, type: "click", fn: function () {
                            var t = o("#" + r), e = t[0];
                            if (!e) return !0;
                            e.click()
                        }
                    }, {
                        selector: "#" + r, type: "change", fn: function () {
                            var t = o("#" + r), n = t[0];
                            if (!n) return !0;
                            var i = n.files;
                            return i.length && e.uploadImg(i), !0
                        }
                    }]
                }, {
                    title: "网络图片",
                    tpl: '<div>\n                    <input id="' + a + '" type="text" class="block" placeholder="图片链接"/></td>\n                    <div class="w-e-button-container">\n                        <button id="' + A + '" class="right">插入</button>\n                    </div>\n                </div>',
                    events: [{
                        selector: "#" + A, type: "click", fn: function () {
                            var t = o("#" + a), n = t.val().trim();
                            return n && e.insertLinkImg(n), !0
                        }
                    }]
                }], l = [];
            (n.uploadImgShowBase64 || n.uploadImgServer || n.customUploadImg) && window.FileReader && l.push(s[0]), n.showLinkImg && l.push(s[1]);
            var d = new u(this, {width: 300, tabs: l});
            d.show(), this.panel = d
        }, tryChangeActive: function (t) {
            var e = this.editor, n = this.$elem;
            e._selectedImg ? (this._active = !0, n.addClass("w-e-active")) : (this._active = !1, n.removeClass("w-e-active"))
        }
    };
    var $ = {};
    $.bold = s, $.head = d, $.link = p, $.italic = h, $.redo = f, $.strikeThrough = g, $.underline = m, $.undo = w, $.list = v, $.justify = b, $.foreColor = y, $.backColor = E, $.quote = x, $.code = B, $.emoticon = C, $.table = I, $.video = Q, $.image = _, D.prototype = {
        constructor: D, init: function () {
            var t = this, e = this.editor;
            ((e.config || {}).menus || []).forEach(function (n) {
                var i = $[n];
                i && "function" == typeof i && (t.menus[n] = new i(e))
            }), this._addToToolbar(), this._bindEvent()
        }, _addToToolbar: function () {
            var t = this.editor, e = t.$toolbarElem, n = this.menus, i = t.config, o = i.zIndex + 1;
            r(n, function (t, n) {
                var i = n.$elem;
                i && (i.css("z-index", o), e.append(i))
            })
        }, _bindEvent: function () {
            var t = this.menus, e = this.editor;
            r(t, function (t, n) {
                var i = n.type;
                if (i) {
                    var o = n.$elem, r = n.droplist;
                    n.panel;
                    "click" === i && n.onClick && o.on("click", function (t) {
                        null != e.selection.getRange() && n.onClick(t)
                    }), "droplist" === i && r && o.on("mouseenter", function (t) {
                        null != e.selection.getRange() && (r.showTimeoutId = setTimeout(function () {
                            r.show()
                        }, 200))
                    }).on("mouseleave", function (t) {
                        r.hideTimeoutId = setTimeout(function () {
                            r.hide()
                        }, 0)
                    }), "panel" === i && n.onClick && o.on("click", function (t) {
                        t.stopPropagation(), null != e.selection.getRange() && n.onClick(t)
                    })
                }
            })
        }, changeActive: function () {
            r(this.menus, function (t, e) {
                e.tryChangeActive && setTimeout(function () {
                    e.tryChangeActive()
                }, 100)
            })
        }
    }, N.prototype = {
        constructor: N, init: function () {
            this._bindEvent()
        }, clear: function () {
            this.html("<p><br></p>")
        }, html: function (t) {
            var e = this.editor, n = e.$textElem;
            if (null == t) return n.html();
            n.html(t), e.initSelection()
        }, getJSON: function () {
            return S(this.editor.$textElem)
        }, text: function (t) {
            var e = this.editor, n = e.$textElem;
            if (null == t) return n.text();
            n.text("<p>" + t + "</p>"), e.initSelection()
        }, append: function (t) {
            var e = this.editor;
            e.$textElem.append(o(t)), e.initSelection()
        }, _bindEvent: function () {
            this._saveRangeRealTime(), this._enterKeyHandle(), this._clearHandle(), this._pasteHandle(), this._tabHandle(), this._imgHandle(), this._dragHandle()
        }, _saveRangeRealTime: function () {
            function t(t) {
                e.selection.saveRange(), e.menus.changeActive()
            }

            var e = this.editor, n = e.$textElem;
            n.on("keyup", t), n.on("mousedown", function (e) {
                n.on("mouseleave", t)
            }), n.on("mouseup", function (e) {
                t(), n.off("mouseleave", t)
            })
        }, _enterKeyHandle: function () {
            function t(t) {
                var e = o("<p><br></p>");
                e.insertBefore(t), i.selection.createRangeByElem(e, !0), i.selection.restoreSelection(), t.remove()
            }

            function e(e) {
                var n = i.selection.getSelectionContainerElem(), o = n.parent();
                if ("<code><br></code>" === o.html()) return void t(n);
                if (o.equal(r)) {
                    "P" !== n.getNodeName() && (n.text() || t(n))
                }
            }

            function n(t) {
                var e = i.selection.getSelectionContainerElem();
                if (e) {
                    var n = e.parent(), r = e.getNodeName(), a = n.getNodeName();
                    if ("CODE" === r && "PRE" === a && i.cmd.queryCommandSupported("insertHTML")) {
                        if (!0 === i._willBreakCode) {
                            var c = o("<p><br></p>");
                            return c.insertAfter(n), i.selection.createRangeByElem(c, !0), i.selection.restoreSelection(), i._willBreakCode = !1, void t.preventDefault()
                        }
                        var A = i.selection.getRange().startOffset;
                        i.cmd.do("insertHTML", "\n"), i.selection.saveRange(), i.selection.getRange().startOffset === A && i.cmd.do("insertHTML", "\n");
                        var s = e.html().length;
                        i.selection.getRange().startOffset + 1 === s && (i._willBreakCode = !0), t.preventDefault()
                    }
                }
            }

            var i = this.editor, r = i.$textElem;
            r.on("keyup", function (t) {
                13 === t.keyCode && e(t)
            }), r.on("keydown", function (t) {
                if (13 !== t.keyCode) return void (i._willBreakCode = !1);
                n(t)
            })
        }, _clearHandle: function () {
            var t = this.editor, e = t.$textElem;
            e.on("keydown", function (t) {
                if (8 === t.keyCode) {
                    return "<p><br></p>" === e.html().toLowerCase().trim() ? void t.preventDefault() : void 0
                }
            }), e.on("keyup", function (n) {
                if (8 === n.keyCode) {
                    var i = void 0, r = e.html().toLowerCase().trim();
                    r && "<br>" !== r || (i = o("<p><br/></p>"), e.html(""), e.append(i), t.selection.createRangeByElem(i, !1, !0), t.selection.restoreSelection())
                }
            })
        }, _pasteHandle: function () {
            function t() {
                var t = Date.now(), e = !1;
                return t - a >= 500 && (e = !0), a = t, e
            }

            var e = this.editor, n = e.config, i = n.pasteFilterStyle, o = n.pasteTextHandle, r = e.$textElem, a = 0;
            r.on("paste", function (n) {
                if (!P.isIE() && (n.preventDefault(), t())) {
                    var r = M(n, i), a = k(n);
                    a = a.replace(/\n/gm, "<br>"), o && "function" == typeof o && (r = "" + (o(r) || ""), a = "" + (o(a) || ""));
                    var c = e.selection.getSelectionContainerElem();
                    if (c) {
                        var A = c.getNodeName();
                        if ("CODE" === A || "PRE" === A) return void e.cmd.do("insertHTML", "<p>" + a + "</p>");
                        if (r) try {
                            e.cmd.do("insertHTML", r)
                        } catch (t) {
                            e.cmd.do("insertHTML", "<p>" + a + "</p>")
                        }
                    }
                }
            }), r.on("paste", function (n) {
                if (!P.isIE() && (n.preventDefault(), t())) {
                    var i = U(n);
                    if (i && i.length) {
                        var o = e.selection.getSelectionContainerElem();
                        if (o) {
                            var r = o.getNodeName();
                            if ("CODE" !== r && "PRE" !== r) {
                                e.uploadImg.uploadImg(i)
                            }
                        }
                    }
                }
            })
        }, _tabHandle: function () {
            var t = this.editor;
            t.$textElem.on("keydown", function (e) {
                if (9 === e.keyCode && t.cmd.queryCommandSupported("insertHTML")) {
                    var n = t.selection.getSelectionContainerElem();
                    if (n) {
                        var i = n.parent(), o = n.getNodeName(), r = i.getNodeName();
                        "CODE" === o && "PRE" === r ? t.cmd.do("insertHTML", "    ") : t.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;"), e.preventDefault()
                    }
                }
            })
        }, _imgHandle: function () {
            var t = this.editor, e = t.$textElem;
            e.on("click", "img", function (e) {
                var n = this, i = o(n);
                "1" !== i.attr("data-w-e") && (t._selectedImg = i, t.selection.createRangeByElem(i), t.selection.restoreSelection())
            }), e.on("click  keyup", function (e) {
                e.target.matches("img") || (t._selectedImg = null)
            })
        }, _dragHandle: function () {
            var t = this.editor;
            o(document).on("dragleave drop dragenter dragover", function (t) {
                t.preventDefault()
            }), t.$textElem.on("drop", function (e) {
                e.preventDefault();
                var n = e.dataTransfer && e.dataTransfer.files;
                n && n.length && t.uploadImg.uploadImg(n)
            })
        }
    }, R.prototype = {
        constructor: R, do: function (t, e) {
            var n = this.editor;
            if (n.selection.getRange()) {
                n.selection.restoreSelection();
                var i = "_" + t;
                this[i] ? this[i](e) : this._execCommand(t, e), n.menus.changeActive(), n.selection.saveRange(), n.selection.restoreSelection(), n.change && n.change()
            }
        }, _insertHTML: function (t) {
            var e = this.editor, n = e.selection.getRange();
            this.queryCommandSupported("insertHTML") ? this._execCommand("insertHTML", t) : n.insertNode ? (n.deleteContents(), n.insertNode(o(t)[0])) : n.pasteHTML && n.pasteHTML(t)
        }, _insertElem: function (t) {
            var e = this.editor, n = e.selection.getRange();
            n.insertNode && (n.deleteContents(), n.insertNode(t[0]))
        }, _execCommand: function (t, e) {
            document.execCommand(t, !1, e)
        }, queryCommandValue: function (t) {
            return document.queryCommandValue(t)
        }, queryCommandState: function (t) {
            return document.queryCommandState(t)
        }, queryCommandSupported: function (t) {
            return document.queryCommandSupported(t)
        }
    }, F.prototype = {
        constructor: F, getRange: function () {
            return this._currentRange
        }, saveRange: function (t) {
            if (t) return void (this._currentRange = t);
            var e = window.getSelection();
            if (0 !== e.rangeCount) {
                var n = e.getRangeAt(0), i = this.getSelectionContainerElem(n);
                if (i) {
                    this.editor.$textElem.isContain(i) && (this._currentRange = n)
                }
            }
        }, collapseRange: function (t) {
            null == t && (t = !1);
            var e = this._currentRange;
            e && e.collapse(t)
        }, getSelectionText: function () {
            return this._currentRange ? this._currentRange.toString() : ""
        }, getSelectionContainerElem: function (t) {
            t = t || this._currentRange;
            var e = void 0;
            if (t) return e = t.commonAncestorContainer, o(1 === e.nodeType ? e : e.parentNode)
        }, getSelectionStartElem: function (t) {
            t = t || this._currentRange;
            var e = void 0;
            if (t) return e = t.startContainer, o(1 === e.nodeType ? e : e.parentNode)
        }, getSelectionEndElem: function (t) {
            t = t || this._currentRange;
            var e = void 0;
            if (t) return e = t.endContainer, o(1 === e.nodeType ? e : e.parentNode)
        }, isSelectionEmpty: function () {
            var t = this._currentRange;
            return !(!t || !t.startContainer || t.startContainer !== t.endContainer || t.startOffset !== t.endOffset)
        }, restoreSelection: function () {
            var t = window.getSelection();
            t.removeAllRanges(), t.addRange(this._currentRange)
        }, createEmptyRange: function () {
            var t = this.editor, e = this.getRange(), n = void 0;
            if (e && this.isSelectionEmpty()) try {
                P.isWebkit() ? (t.cmd.do("insertHTML", "&#8203;"), e.setEnd(e.endContainer, e.endOffset + 1), this.saveRange(e)) : (n = o("<strong>&#8203;</strong>"), t.cmd.do("insertElem", n), this.createRangeByElem(n, !0))
            } catch (t) {
            }
        }, createRangeByElem: function (t, e, n) {
            if (t.length) {
                var i = t[0], o = document.createRange();
                n ? o.selectNodeContents(i) : o.selectNode(i), "boolean" == typeof e && o.collapse(e), this.saveRange(o)
            }
        }
    }, T.prototype = {
        constructor: T, show: function (t) {
            var e = this;
            if (!this._isShow) {
                this._isShow = !0;
                var n = this.$bar;
                if (this._isRender) this._isRender = !0; else {
                    this.$textContainer.append(n)
                }
                Date.now() - this._time > 100 && t <= 1 && (n.css("width", 100 * t + "%"), this._time = Date.now());
                var i = this._timeoutId;
                i && clearTimeout(i), i = setTimeout(function () {
                    e._hide()
                }, 500)
            }
        }, _hide: function () {
            this.$bar.remove(), this._time = 0, this._isShow = !1, this._isRender = !1
        }
    };
    var q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    j.prototype = {
        constructor: j, _alert: function (t, e) {
            var n = this.editor, i = n.config.debug, o = n.config.customAlert;
            if (i) throw new Error("wangEditor: " + (e || t));
            o && "function" == typeof o ? o(t) : alert(t)
        }, insertLinkImg: function (t) {
            var e = this;
            if (t) {
                var n = this.editor, i = n.config, o = i.linkImgCheck, r = void 0;
                if (o && "function" == typeof o && "string" == typeof (r = o(t))) return void alert(r);
                n.cmd.do("insertHTML", '<img src="' + t + '" style="max-width:100%;"/>');
                var a = document.createElement("img");
                a.onload = function () {
                    var e = i.linkImgCallback;
                    e && "function" == typeof e && e(t), a = null
                }, a.onerror = function () {
                    a = null, e._alert("插入图片错误", 'wangEditor: 插入图片出错，图片链接是 "' + t + '"，下载该链接失败')
                }, a.onabort = function () {
                    a = null
                }, a.src = t
            }
        }, uploadImg: function (t) {
            var e = this;
            if (t && t.length) {
                var n = this.editor, i = n.config, o = i.uploadImgServer, c = i.uploadImgShowBase64,
                    A = i.uploadImgMaxSize, s = A / 1e3 / 1e3, l = i.uploadImgMaxLength || 1e4,
                    d = i.uploadFileName || "", u = i.uploadImgParams || {}, p = i.uploadImgParamsWithUrl,
                    h = i.uploadImgHeaders || {}, f = i.uploadImgHooks || {}, g = i.uploadImgTimeout || 3e3,
                    m = i.withCredentials;
                null == m && (m = !1);
                var w = i.customUploadImg;
                if (w || o || c) {
                    var v = [], b = [];
                    if (a(t, function (t) {
                        var e = t.name, n = t.size;
                        if (e && n) return !1 === /\.(jpg|jpeg|png|bmp|gif)$/i.test(e) ? void b.push("【" + e + "】不是图片") : A < n ? void b.push("【" + e + "】大于 " + s + "M") : void v.push(t)
                    }), b.length) return void this._alert("图片验证未通过: \n" + b.join("\n"));
                    if (v.length > l) return void this._alert("一次最多上传" + l + "张图片");
                    if (w && "function" == typeof w) return void w(v, this.insertLinkImg.bind(this));
                    var y = new FormData;
                    if (a(v, function (t) {
                        var e = d || t.name;
                        y.append(e, t)
                    }), o && "string" == typeof o) {
                        var E = o.split("#");
                        o = E[0];
                        var x = E[1] || "";
                        r(u, function (t, e) {
                            e = encodeURIComponent(e), p && (o.indexOf("?") > 0 ? o += "&" : o += "?", o = o + t + "=" + e), y.append(t, e)
                        }), x && (o += "#" + x);
                        var B = new XMLHttpRequest;
                        if (B.open("POST", o), B.timeout = g, B.ontimeout = function () {
                            f.timeout && "function" == typeof f.timeout && f.timeout(B, n), e._alert("上传图片超时")
                        }, B.upload && (B.upload.onprogress = function (t) {
                            var e = void 0, i = new T(n);
                            t.lengthComputable && (e = t.loaded / t.total, i.show(e))
                        }), B.onreadystatechange = function () {
                            var t = void 0;
                            if (4 === B.readyState) {
                                if (B.status < 200 || B.status >= 300) return f.error && "function" == typeof f.error && f.error(B, n), void e._alert("上传图片发生错误", "上传图片发生错误，服务器返回状态是 " + B.status);
                                if (t = B.responseText, "object" !== (void 0 === t ? "undefined" : q(t))) try {
                                    t = JSON.parse(t)
                                } catch (i) {
                                    return f.fail && "function" == typeof f.fail && f.fail(B, n, t), void e._alert("上传图片失败", "上传图片返回结果错误，返回结果是: " + t)
                                }
                                if (f.customInsert || "0" == t.errno) {
                                    if (f.customInsert && "function" == typeof f.customInsert) f.customInsert(e.insertLinkImg.bind(e), t, n); else {
                                        (t.data || []).forEach(function (t) {
                                            e.insertLinkImg(t)
                                        })
                                    }
                                    f.success && "function" == typeof f.success && f.success(B, n, t)
                                } else f.fail && "function" == typeof f.fail && f.fail(B, n, t), e._alert("上传图片失败", "上传图片返回结果错误，返回结果 errno=" + t.errno)
                            }
                        }, f.before && "function" == typeof f.before) {
                            var C = f.before(B, n, v);
                            if (C && "object" === (void 0 === C ? "undefined" : q(C)) && C.prevent) return void this._alert(C.msg)
                        }
                        return r(h, function (t, e) {
                            B.setRequestHeader(t, e)
                        }), B.withCredentials = m, void B.send(y)
                    }
                    c && a(t, function (t) {
                        var n = e, i = new FileReader;
                        i.readAsDataURL(t), i.onload = function () {
                            n.insertLinkImg(this.result)
                        }
                    })
                }
            }
        }
    };
    var W = 1;
    H.prototype = {
        constructor: H, _initConfig: function () {
            var t = {};
            this.config = Object.assign(t, L, this.customConfig);
            var e = this.config.lang || {}, n = [];
            r(e, function (t, e) {
                n.push({reg: new RegExp(t, "img"), val: e})
            }), this.config.langArgs = n
        }, _initDom: function () {
            var t = this, e = this.toolbarSelector, n = o(e), i = this.textSelector, r = this.config, a = r.zIndex,
                A = void 0, s = void 0, l = void 0, d = void 0;
            null == i ? (A = o("<div></div>"), s = o("<div></div>"), d = n.children(), n.append(A).append(s), A.css("background-color", "#f1f1f1").css("border", "1px solid #ccc"), s.css("border", "1px solid #ccc").css("border-top", "none").css("height", "300px")) : (A = n, s = o(i), d = s.children()), l = o("<div></div>"), l.attr("contenteditable", "true").css("width", "100%").css("height", "100%"), d && d.length ? l.append(d) : l.append(o("<p><br></p>")), s.append(l), A.addClass("w-e-toolbar"), s.addClass("w-e-text-container"), s.css("z-index", a), l.addClass("w-e-text");
            var u = c("toolbar-elem");
            A.attr("id", u);
            var p = c("text-elem");
            l.attr("id", p), this.$toolbarElem = A, this.$textContainerElem = s, this.$textElem = l, this.toolbarElemId = u, this.textElemId = p, s.on("click keyup", function () {
                t.change && t.change()
            }), A.on("click", function () {
                this.change && this.change()
            }), (r.onfocus || r.onblur) && (this.isFocus = !1, o(document).on("click", function (e) {
                n.isContain(o(e.target)) ? (t.isFocus || t.onfocus && t.onfocus(), t.isFocus = !0) : (t.isFocus && t.onblur && t.onblur(), t.isFocus = !1)
            }))
        }, _initCommand: function () {
            this.cmd = new R(this)
        }, _initSelectionAPI: function () {
            this.selection = new F(this)
        }, _initUploadImg: function () {
            this.uploadImg = new j(this)
        }, _initMenus: function () {
            this.menus = new D(this), this.menus.init()
        }, _initText: function () {
            this.txt = new N(this), this.txt.init()
        }, initSelection: function (t) {
            var e = this.$textElem, n = e.children();
            if (!n.length) return e.append(o("<p><br></p>")), void this.initSelection();
            var i = n.last();
            if (t) {
                var r = i.html().toLowerCase(), a = i.getNodeName();
                if ("<br>" !== r && "<br/>" !== r || "P" !== a) return e.append(o("<p><br></p>")), void this.initSelection()
            }
            this.selection.createRangeByElem(i, !1, !0), this.selection.restoreSelection()
        }, _bindEvent: function () {
            var t = 0, e = this.txt.html(), n = this.config, i = n.onchangeTimeout;
            (!(i = parseInt(i, 10)) || i <= 0) && (i = 200);
            var o = n.onchange;
            o && "function" == typeof o && (this.change = function () {
                var n = this.txt.html();
                n.length === e.length && n === e || (t && clearTimeout(t), t = setTimeout(function () {
                    o(n), e = n
                }, i))
            });
            var r = n.onblur;
            r && "function" == typeof r && (this.onblur = function () {
                var t = this.txt.html();
                r(t)
            });
            var a = n.onfocus;
            a && "function" == typeof a && (this.onfocus = function () {
                a()
            })
        }, create: function () {
            this._initConfig(), this._initDom(), this._initCommand(), this._initSelectionAPI(), this._initText(), this._initMenus(), this._initUploadImg(), this.initSelection(!0), this._bindEvent()
        }, _offAllEvent: function () {
            o.offAll()
        }
    };
    try {
        document
    } catch (t) {
        throw new Error("请在浏览器环境下运行")
    }
    !function () {
        "function" != typeof Object.assign && (Object.assign = function (t, e) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (null != o) for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r])
            }
            return n
        }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (t) {
            for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;) ;
            return n > -1
        })
    }();
    var K = document.createElement("style");
    return K.type = "text/css",
        K.innerHTML = '.w-e-toolbar,.w-e-text-container,.w-e-menu-panel {  padding: 0;  margin: 0;  box-sizing: border-box;}.w-e-toolbar *,.w-e-text-container *,.w-e-menu-panel * {  padding: 0;  margin: 0;  box-sizing: border-box;}.w-e-clear-fix:after {  content: "";  display: table;  clear: both;}.w-e-toolbar .w-e-droplist {  position: absolute;  left: 0;  top: 0;  background-color: #fff;  border: 1px solid #f1f1f1;  border-right-color: #ccc;  border-bottom-color: #ccc;}.w-e-toolbar .w-e-droplist .w-e-dp-title {  text-align: center;  color: #999;  line-height: 2;  border-bottom: 1px solid #f1f1f1;  font-size: 13px;}.w-e-toolbar .w-e-droplist ul.w-e-list {  list-style: none;  line-height: 1;}.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {  color: #333;  padding: 5px 0;}.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {  background-color: #f1f1f1;}.w-e-toolbar .w-e-droplist ul.w-e-block {  list-style: none;  text-align: left;  padding: 5px;}.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {  display: inline-block;  *display: inline;  *zoom: 1;  padding: 3px 5px;}.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {  background-color: #f1f1f1;}@font-face {  font-family: \'w-e-icon\';  src: url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAABXAAAsAAAAAFXQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPAmNtYXAAAAFoAAAA9AAAAPRAxxN6Z2FzcAAAAlwAAAAIAAAACAAAABBnbHlmAAACZAAAEHwAABB8kRGt5WhlYWQAABLgAAAANgAAADYN4rlyaGhlYQAAExgAAAAkAAAAJAfEA99obXR4AAATPAAAAHwAAAB8cAcDvGxvY2EAABO4AAAAQAAAAEAx8jYEbWF4cAAAE/gAAAAgAAAAIAAqALZuYW1lAAAUGAAAAYYAAAGGmUoJ+3Bvc3QAABWgAAAAIAAAACAAAwAAAAMD3AGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEANgAAAAyACAABAASAAEAIOkG6Q3pEulH6Wbpd+m56bvpxunL6d/qDepl6mjqcep58A3wFPEg8dzx/P/9//8AAAAAACDpBukN6RLpR+ll6Xfpuem76cbpy+nf6g3qYupo6nHqd/AN8BTxIPHc8fz//f//AAH/4xb+FvgW9BbAFqMWkxZSFlEWRxZDFjAWAxWvFa0VpRWgEA0QBw78DkEOIgADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAACgALAAAAS4DIyIOAgcOAxUUHgIXHgMzMj4CNz4DNTQuAicBEQ0BA9U2cXZ5Pz95dnE2Cw8LBgYLDws2cXZ5Pz95dnE2Cw8LBgYLDwv9qwFA/sADIAgMCAQECAwIKVRZWy8vW1lUKQgMCAQECAwIKVRZWy8vW1lUKf3gAYDAwAAAAAACAMD/wANAA8AAEwAfAAABIg4CFRQeAjEwPgI1NC4CAyImNTQ2MzIWFRQGAgBCdVcyZHhkZHhkMld1QlBwcFBQcHADwDJXdUJ4+syCgsz6eEJ1VzL+AHBQUHBwUFBwAAABAAAAAAQAA4AAIQAAASIOAgcnESEnPgEzMh4CFRQOAgcXPgM1NC4CIwIANWRcUiOWAYCQNYtQUItpPBIiMB5VKEAtGFCLu2oDgBUnNyOW/oCQNDw8aYtQK1FJQRpgI1ZibDlqu4tQAAEAAAAABAADgAAgAAATFB4CFzcuAzU0PgIzMhYXByERBy4DIyIOAgAYLUAoVR4wIhI8aYtQUIs1kAGAliNSXGQ1aruLUAGAOWxiViNgGkFJUStQi2k8PDSQAYCWIzcnFVCLuwACAAAAQAQBAwAAHgA9AAATMh4CFRQOAiMiLgI1JzQ+AjMVIgYHDgEHPgEhMh4CFRQOAiMiLgI1JzQ+AjMVIgYHDgEHPgHhLlI9IyM9Ui4uUj0jAUZ6o11AdS0JEAcIEgJJLlI9IyM9Ui4uUj0jAUZ6o11AdS0JEAcIEgIAIz1SLi5SPSMjPVIuIF2jekaAMC4IEwoCASM9Ui4uUj0jIz1SLiBdo3pGgDAuCBMKAgEAAAYAQP/ABAADwAADAAcACwARAB0AKQAAJSEVIREhFSERIRUhJxEjNSM1ExUzFSM1NzUjNTMVFREjNTM1IzUzNSM1AYACgP2AAoD9gAKA/YDAQEBAgMCAgMDAgICAgICAAgCAAgCAwP8AwED98jJAkjwyQJLu/sBAQEBAQAAGAAD/wAQAA8AAAwAHAAsAFwAjAC8AAAEhFSERIRUhESEVIQE0NjMyFhUUBiMiJhE0NjMyFhUUBiMiJhE0NjMyFhUUBiMiJgGAAoD9gAKA/YACgP2A/oBLNTVLSzU1S0s1NUtLNTVLSzU1S0s1NUsDgID/AID/AIADQDVLSzU1S0v+tTVLSzU1S0v+tTVLSzU1S0sAAwAAAAAEAAOgAAMADQAUAAA3IRUhJRUhNRMhFSE1ISUJASMRIxEABAD8AAQA/ACAAQABAAEA/WABIAEg4IBAQMBAQAEAgIDAASD+4P8AAQAAAAAAAgBT/8wDrQO0AC8AXAAAASImJy4BNDY/AT4BMzIWFx4BFAYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJy4BNDY/ATYyFxYUDwEGFBceATMyNj8BNjQnJjQ3NjIXHgEUBg8BDgEjAbgKEwgjJCQjwCNZMTFZIyMkJCNYDywPDw9YKSkUMxwcMxTAKSkPDwgTCrgxWSMjJCQjWA8sDw8PWCkpFDMcHDMUwCkpDw8PKxAjJCQjwCNZMQFECAckWl5aJMAiJSUiJFpeWiRXEBAPKw9YKXQpFBUVFMApdCkPKxAHCP6IJSIkWl5aJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJFpeWiTAIiUAAAAABQAA/8AEAAPAABMAJwA7AEcAUwAABTI+AjU0LgIjIg4CFRQeAhMyHgIVFA4CIyIuAjU0PgITMj4CNw4DIyIuAiceAyc0NjMyFhUUBiMiJiU0NjMyFhUUBiMiJgIAaruLUFCLu2pqu4tQUIu7alaYcUFBcZhWVphxQUFxmFYrVVFMIwU3Vm8/P29WNwUjTFFV1SUbGyUlGxslAYAlGxslJRsbJUBQi7tqaruLUFCLu2pqu4tQA6BBcZhWVphxQUFxmFZWmHFB/gkMFSAUQ3RWMTFWdEMUIBUM9yg4OCgoODgoKDg4KCg4OAAAAAADAAD/wAQAA8AAEwAnADMAAAEiDgIVFB4CMzI+AjU0LgIDIi4CNTQ+AjMyHgIVFA4CEwcnBxcHFzcXNyc3AgBqu4tQUIu7amq7i1BQi7tqVphxQUFxmFZWmHFBQXGYSqCgYKCgYKCgYKCgA8BQi7tqaruLUFCLu2pqu4tQ/GBBcZhWVphxQUFxmFZWmHFBAqCgoGCgoGCgoGCgoAADAMAAAANAA4AAEgAbACQAAAE+ATU0LgIjIREhMj4CNTQmATMyFhUUBisBEyMRMzIWFRQGAsQcIChGXTX+wAGANV1GKET+hGUqPDwpZp+fnyw+PgHbIlQvNV1GKPyAKEZdNUZ0AUZLNTVL/oABAEs1NUsAAAIAwAAAA0ADgAAbAB8AAAEzERQOAiMiLgI1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgDJXdUJCdVcygBsYHEkoKEkcGBv+AAKA/YADgP5gPGlOLS1OaTwBoP5gHjgXGBsbGBc4Hv6ggAAAAQCAAAADgAOAAAsAAAEVIwEzFSE1MwEjNQOAgP7AgP5AgAFAgAOAQP0AQEADAEAAAQAAAAAEAAOAAD0AAAEVIx4BFRQGBw4BIyImJy4BNTMUFjMyNjU0JiMhNSEuAScuATU0Njc+ATMyFhceARUjNCYjIgYVFBYzMhYXBADrFRY1MCxxPj5xLDA1gHJOTnJyTv4AASwCBAEwNTUwLHE+PnEsMDWAck5OcnJOO24rAcBAHUEiNWIkISQkISRiNTRMTDQ0TEABAwEkYjU1YiQhJCQhJGI1NExMNDRMIR8AAAAHAAD/wAQAA8AAAwAHAAsADwATABsAIwAAEzMVIzczFSMlMxUjNzMVIyUzFSMDEyETMxMhEwEDIQMjAyEDAICAwMDAAQCAgMDAwAEAgIAQEP0AECAQAoAQ/UAQAwAQIBD9gBABwEBAQEBAQEBAQAJA/kABwP6AAYD8AAGA/oABQP7AAAAKAAAAAAQAA4AAAwAHAAsADwATABcAGwAfACMAJwAAExEhEQE1IRUdASE1ARUhNSMVITURIRUhJSEVIRE1IRUBIRUhITUhFQAEAP2AAQD/AAEA/wBA/wABAP8AAoABAP8AAQD8gAEA/wACgAEAA4D8gAOA/cDAwEDAwAIAwMDAwP8AwMDAAQDAwP7AwMDAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFSEVIREhFSERIRUhESEVIQAEAPwAAoD9gAKA/YAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEXIRUhESEVIQMhFSERIRUhAAQA/ADAAoD9gAKA/YDABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIQUhFSERIRUhASEVIREhFSEABAD8AAGAAoD9gAKA/YD+gAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAANox8glfDzz1AAsEAAAAAADVYbp/AAAAANVhun8AAP+3BAEDwAAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAA//8EAQABAAAAAAAAAAAAAAAAAAAAHwQAAAAAAAAAAAAAAAIAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAEAAAABAAAUwQAAAAEAAAABAAAwAQAAMAEAACABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAAAyUAPwMlAAADvgAHBAAAIwP/AAAAAAAAAAoAFAAeAEwAlADaAQoBPgFwAcgCBgJQAnoDBAN6A8gEAgQ2BE4EpgToBTAFWAWABaoF7gamBvAH4gg+AAEAAAAfALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format(\'truetype\');  font-weight: normal;  font-style: normal;}[class^="w-e-icon-"],[class*=" w-e-icon-"] {  /* use !important to prevent issues with browser extensions that change fonts */  font-family: \'w-e-icon\' !important;  speak: none;  font-style: normal;  font-weight: normal;  font-variant: normal;  text-transform: none;  line-height: 1;  /* Better Font Rendering =========== */  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}.w-e-icon-close:before {  content: "\\f00d";}.w-e-icon-upload2:before {  content: "\\e9c6";}.w-e-icon-trash-o:before {  content: "\\f014";}.w-e-icon-header:before {  content: "\\f1dc";}.w-e-icon-pencil2:before {  content: "\\e906";}.w-e-icon-paint-brush:before {  content: "\\f1fc";}.w-e-icon-image:before {  content: "\\e90d";}.w-e-icon-play:before {  content: "\\e912";}.w-e-icon-location:before {  content: "\\e947";}.w-e-icon-undo:before {  content: "\\e965";}.w-e-icon-redo:before {  content: "\\e966";}.w-e-icon-quotes-left:before {  content: "\\e977";}.w-e-icon-list-numbered:before {  content: "\\e9b9";}.w-e-icon-list2:before {  content: "\\e9bb";}.w-e-icon-link:before {  content: "\\e9cb";}.w-e-icon-happy:before {  content: "\\e9df";}.w-e-icon-bold:before {  content: "\\ea62";}.w-e-icon-underline:before {  content: "\\ea63";}.w-e-icon-italic:before {  content: "\\ea64";}.w-e-icon-strikethrough:before {  content: "\\ea65";}.w-e-icon-table2:before {  content: "\\ea71";}.w-e-icon-paragraph-left:before {  content: "\\ea77";}.w-e-icon-paragraph-center:before {  content: "\\ea78";}.w-e-icon-paragraph-right:before {  content: "\\ea79";}.w-e-icon-terminal:before {  content: "\\f120";}.w-e-icon-page-break:before {  content: "\\ea68";}.w-e-icon-cancel-circle:before {  content: "\\ea0d";}.w-e-toolbar {  display: -webkit-box;  display: -ms-flexbox;  display: flex;  padding: 0 5px;  /* 单个菜单 */}.w-e-toolbar .w-e-menu {  position: relative;  text-align: center;  padding: 5px 10px;  cursor: pointer;}.w-e-toolbar .w-e-menu i {  color: #999;}.w-e-toolbar .w-e-menu:hover i {  color: #333;}.w-e-toolbar .w-e-active i {  color: #1e88e5;}.w-e-toolbar .w-e-active:hover i {  color: #1e88e5;}.w-e-text-container .w-e-panel-container {  position: absolute;  top: 0;  left: 50%;  border: 1px solid #ccc;  border-top: 0;  box-shadow: 1px 1px 2px #ccc;  color: #333;  background-color: #fff;  /* 为 emotion panel 定制的样式 */  /* 上传图片的 panel 定制样式 */}.w-e-text-container .w-e-panel-container .w-e-panel-close {  position: absolute;  right: 0;  top: 0;  padding: 5px;  margin: 2px 5px 0 0;  cursor: pointer;  color: #999;}.w-e-text-container .w-e-panel-container .w-e-panel-close:hover {  color: #333;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title {  list-style: none;  display: -webkit-box;  display: -ms-flexbox;  display: flex;  font-size: 14px;  margin: 2px 10px 0 10px;  border-bottom: 1px solid #f1f1f1;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title .w-e-item {  padding: 3px 5px;  color: #999;  cursor: pointer;  margin: 0 3px;  position: relative;  top: 1px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title .w-e-active {  color: #333;  border-bottom: 1px solid #333;  cursor: default;  font-weight: 700;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content {  padding: 10px 15px 10px 15px;  font-size: 16px;  /* 输入框的样式 */  /* 按钮的样式 */}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input:focus,.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea:focus,.w-e-text-container .w-e-panel-container .w-e-panel-tab-content button:focus {  outline: none;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea {  width: 100%;  border: 1px solid #ccc;  padding: 5px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea:focus {  border-color: #1e88e5;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text] {  border: none;  border-bottom: 1px solid #ccc;  font-size: 14px;  height: 20px;  color: #333;  text-align: left;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text].small {  width: 30px;  text-align: center;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text].block {  display: block;  width: 100%;  margin: 10px 0;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {  border-bottom: 2px solid #1e88e5;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {  font-size: 14px;  color: #1e88e5;  border: none;  padding: 5px 10px;  background-color: #fff;  cursor: pointer;  border-radius: 3px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {  float: left;  margin-right: 10px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {  float: right;  margin-left: 10px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {  color: #999;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {  color: #c24f4a;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {  background-color: #f1f1f1;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {  content: "";  display: table;  clear: both;}.w-e-text-container .w-e-panel-container .w-e-emoticon-container .w-e-item {  cursor: pointer;  font-size: 18px;  padding: 0 3px;  display: inline-block;  *display: inline;  *zoom: 1;}.w-e-text-container .w-e-panel-container .w-e-up-img-container {  text-align: center;}.w-e-text-container .w-e-panel-container .w-e-up-img-container .w-e-up-btn {  display: inline-block;  *display: inline;  *zoom: 1;  color: #999;  cursor: pointer;  font-size: 60px;  line-height: 1;}.w-e-text-container .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover {  color: #333;}.w-e-text-container {  position: relative;}.w-e-text-container .w-e-progress {  position: absolute;  background-color: #1e88e5;  bottom: 0;  left: 0;  height: 1px;}.w-e-text {  padding: 0 10px;  overflow-y: scroll;}.w-e-text p,.w-e-text h1,.w-e-text h2,.w-e-text h3,.w-e-text h4,.w-e-text h5,.w-e-text table,.w-e-text pre {  margin: 10px 0;  line-height: 1.5;}.w-e-text ul,.w-e-text ol {  margin: 10px 0 10px 20px;}.w-e-text blockquote {  display: block;  border-left: 8px solid #d0e5f2;  padding: 5px 10px;  margin: 10px 0;  line-height: 1.4;  font-size: 100%;  background-color: #f1f1f1;}.w-e-text code {  display: inline-block;  *display: inline;  *zoom: 1;  background-color: #f1f1f1;  border-radius: 3px;  padding: 3px 5px;  margin: 0 3px;}.w-e-text pre code {  display: block;}.w-e-text table {  border-top: 1px solid #ccc;  border-left: 1px solid #ccc;}.w-e-text table td,.w-e-text table th {  border-bottom: 1px solid #ccc;  border-right: 1px solid #ccc;  padding: 3px 5px;}.w-e-text table th {  border-bottom: 2px solid #ccc;  text-align: center;}.w-e-text:focus {  outline: none;}.w-e-text img {  cursor: pointer;}.w-e-text img:hover {  box-shadow: 0 0 5px #333;}', document.getElementsByTagName("HEAD").item(0).appendChild(K), window.wangEditor || H
});
//# sourceMappingURL=wangEditor.min.js.map