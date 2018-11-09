(window.webpackJsonp = window.webpackJsonp || []).push([[3], {
    3: function (e, t, n) {
        e.exports = n("zUnb")
    }, crnd: function (e, t) {
        function n(e) {
            return Promise.resolve().then(function () {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            })
        }

        n.keys = function () {
            return []
        }, n.resolve = n, e.exports = n, n.id = "crnd"
    }, zUnb: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = function (e, t) {
            return (r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        };

        function o(e, t) {
            function n() {
                this.constructor = e
            }

            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }

        var i = function () {
            return (i = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

        function l(e, t, n, r) {
            var o, i = arguments.length, l = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, n, r); else for (var u = e.length - 1; u >= 0; u--) (o = e[u]) && (l = (i < 3 ? o(l) : i > 3 ? o(t, n, l) : o(t, n)) || l);
            return i > 3 && l && Object.defineProperty(t, n, l), l
        }

        function u(e, t) {
            return function (n, r) {
                t(n, r, e)
            }
        }

        function a(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
        }

        function s(e) {
            var t = "function" == typeof Symbol && e[Symbol.iterator], n = 0;
            return t ? t.call(e) : {
                next: function () {
                    return e && n >= e.length && (e = void 0), {value: e && e[n++], done: !e}
                }
            }
        }

        function c(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, o, i = n.call(e), l = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done;) l.push(r.value)
            } catch (e) {
                o = {error: e}
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o) throw o.error
                }
            }
            return l
        }

        function p() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
            return e
        }

        function f(e) {
            return "function" == typeof e
        }

        var d = !1, h = {
            Promise: void 0, set useDeprecatedSynchronousErrorHandling(e) {
                d = e
            }, get useDeprecatedSynchronousErrorHandling() {
                return d
            }
        };

        function g(e) {
            setTimeout(function () {
                throw e
            })
        }

        var v = {
            closed: !0, next: function (e) {
            }, error: function (e) {
                if (h.useDeprecatedSynchronousErrorHandling) throw e;
                g(e)
            }, complete: function () {
            }
        }, y = Array.isArray || function (e) {
            return e && "number" == typeof e.length
        };

        function m(e) {
            return null != e && "object" == typeof e
        }

        var b, _ = {e: {}};

        function w() {
            try {
                return b.apply(this, arguments)
            } catch (e) {
                return _.e = e, _
            }
        }

        function C(e) {
            return b = e, w
        }

        function S(e) {
            return Error.call(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map(function (e, t) {
                return t + 1 + ") " + e.toString()
            }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e, this
        }

        S.prototype = Object.create(Error.prototype);
        var x = S, E = function () {
            function e(e) {
                this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, e && (this._unsubscribe = e)
            }

            var t;
            return e.prototype.unsubscribe = function () {
                var e, t = !1;
                if (!this.closed) {
                    var n = this._parent, r = this._parents, o = this._unsubscribe, i = this._subscriptions;
                    this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                    for (var l = -1, u = r ? r.length : 0; n;) n.remove(this), n = ++l < u && r[l] || null;
                    if (f(o) && C(o).call(this) === _ && (t = !0, e = e || (_.e instanceof x ? k(_.e.errors) : [_.e])), y(i)) for (l = -1, u = i.length; ++l < u;) {
                        var a = i[l];
                        if (m(a) && C(a.unsubscribe).call(a) === _) {
                            t = !0, e = e || [];
                            var s = _.e;
                            s instanceof x ? e = e.concat(k(s.errors)) : e.push(s)
                        }
                    }
                    if (t) throw new x(e)
                }
            }, e.prototype.add = function (t) {
                if (!t || t === e.EMPTY) return e.EMPTY;
                if (t === this) return this;
                var n = t;
                switch (typeof t) {
                    case"function":
                        n = new e(t);
                    case"object":
                        if (n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if ("function" != typeof n._addParent) {
                            var r = n;
                            (n = new e)._subscriptions = [r]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + t + " added to Subscription.")
                }
                return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
            }, e.prototype.remove = function (e) {
                var t = this._subscriptions;
                if (t) {
                    var n = t.indexOf(e);
                    -1 !== n && t.splice(n, 1)
                }
            }, e.prototype._addParent = function (e) {
                var t = this._parent, n = this._parents;
                t && t !== e ? n ? -1 === n.indexOf(e) && n.push(e) : this._parents = [e] : this._parent = e
            }, e.EMPTY = ((t = new e).closed = !0, t), e
        }();

        function k(e) {
            return e.reduce(function (e, t) {
                return e.concat(t instanceof x ? t.errors : t)
            }, [])
        }

        var P = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("rxSubscriber") : "@@rxSubscriber",
            T = function (e) {
                function t(t, n, r) {
                    var o, i = e.call(this) || this;
                    switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, i._parentSubscription = null, arguments.length) {
                        case 0:
                            i.destination = v;
                            break;
                        case 1:
                            if (!t) {
                                i.destination = v;
                                break
                            }
                            if ("object" == typeof t) {
                                if ((o = t) instanceof T || "_addParentTeardownLogic" in o && o[P]) {
                                    var l = t[P]();
                                    i.syncErrorThrowable = l.syncErrorThrowable, i.destination = l, l._addParentTeardownLogic(i)
                                } else i.syncErrorThrowable = !0, i.destination = new O(i, t);
                                break
                            }
                        default:
                            i.syncErrorThrowable = !0, i.destination = new O(i, t, n, r)
                    }
                    return i
                }

                return o(t, e), t.prototype[P] = function () {
                    return this
                }, t.create = function (e, n, r) {
                    var o = new t(e, n, r);
                    return o.syncErrorThrowable = !1, o
                }, t.prototype.next = function (e) {
                    this.isStopped || this._next(e)
                }, t.prototype.error = function (e) {
                    this.isStopped || (this.isStopped = !0, this._error(e), this._unsubscribeParentSubscription())
                }, t.prototype.complete = function () {
                    this.isStopped || (this.isStopped = !0, this._complete(), this._unsubscribeParentSubscription())
                }, t.prototype.unsubscribe = function () {
                    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this))
                }, t.prototype._next = function (e) {
                    this.destination.next(e)
                }, t.prototype._error = function (e) {
                    this.destination.error(e), this.unsubscribe()
                }, t.prototype._complete = function () {
                    this.destination.complete(), this.unsubscribe()
                }, t.prototype._addParentTeardownLogic = function (e) {
                    e !== this && (this._parentSubscription = this.add(e))
                }, t.prototype._unsubscribeParentSubscription = function () {
                    null !== this._parentSubscription && this._parentSubscription.unsubscribe()
                }, t.prototype._unsubscribeAndRecycle = function () {
                    var e = this._parent, t = this._parents;
                    return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = e, this._parents = t, this._parentSubscription = null, this
                }, t
            }(E), O = function (e) {
                function t(t, n, r, o) {
                    var i, l = e.call(this) || this;
                    l._parentSubscriber = t;
                    var u = l;
                    return f(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== v && (f((u = Object.create(n)).unsubscribe) && l.add(u.unsubscribe.bind(u)), u.unsubscribe = l.unsubscribe.bind(l))), l._context = u, l._next = i, l._error = r, l._complete = o, l
                }

                return o(t, e), t.prototype.next = function (e) {
                    if (!this.isStopped && this._next) {
                        var t = this._parentSubscriber;
                        h.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                    }
                }, t.prototype.error = function (e) {
                    if (!this.isStopped) {
                        var t = this._parentSubscriber, n = h.useDeprecatedSynchronousErrorHandling;
                        if (this._error) n && t.syncErrorThrowable ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe()) : (this.__tryOrUnsub(this._error, e), this.unsubscribe()); else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : g(e), this.unsubscribe(); else {
                            if (this.unsubscribe(), n) throw e;
                            g(e)
                        }
                    }
                }, t.prototype.complete = function () {
                    var e = this;
                    if (!this.isStopped) {
                        var t = this._parentSubscriber;
                        if (this._complete) {
                            var n = function () {
                                return e._complete.call(e._context)
                            };
                            h.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }, t.prototype.__tryOrUnsub = function (e, t) {
                    try {
                        e.call(this._context, t)
                    } catch (e) {
                        if (this.unsubscribe(), h.useDeprecatedSynchronousErrorHandling) throw e;
                        g(e)
                    }
                }, t.prototype.__tryOrSetError = function (e, t, n) {
                    if (!h.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                    try {
                        t.call(this._context, n)
                    } catch (t) {
                        return h.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = t, e.syncErrorThrown = !0, !0) : (g(t), !0)
                    }
                    return !1
                }, t.prototype._unsubscribe = function () {
                    var e = this._parentSubscriber;
                    this._context = null, this._parentSubscriber = null, e.unsubscribe()
                }, t
            }(T), I = "function" == typeof Symbol && Symbol.observable || "@@observable";

        function A() {
        }

        function N() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return R(e)
        }

        function R(e) {
            return e ? 1 === e.length ? e[0] : function (t) {
                return e.reduce(function (e, t) {
                    return t(e)
                }, t)
            } : A
        }

        var M = function () {
            function e(e) {
                this._isScalar = !1, e && (this._subscribe = e)
            }

            return e.prototype.lift = function (t) {
                var n = new e;
                return n.source = this, n.operator = t, n
            }, e.prototype.subscribe = function (e, t, n) {
                var r = this.operator, o = function (e, t, n) {
                    if (e) {
                        if (e instanceof T) return e;
                        if (e[P]) return e[P]()
                    }
                    return e || t || n ? new T(e, t, n) : new T(v)
                }(e, t, n);
                if (r ? r.call(o, this.source) : o._addParentTeardownLogic(this.source || h.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), h.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                return o
            }, e.prototype._trySubscribe = function (e) {
                try {
                    return this._subscribe(e)
                } catch (t) {
                    h.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), e.error(t)
                }
            }, e.prototype.forEach = function (e, t) {
                var n = this;
                return new (t = D(t))(function (t, r) {
                    var o;
                    o = n.subscribe(function (t) {
                        try {
                            e(t)
                        } catch (e) {
                            r(e), o && o.unsubscribe()
                        }
                    }, r, t)
                })
            }, e.prototype._subscribe = function (e) {
                var t = this.source;
                return t && t.subscribe(e)
            }, e.prototype[I] = function () {
                return this
            }, e.prototype.pipe = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return 0 === e.length ? this : R(e)(this)
            }, e.prototype.toPromise = function (e) {
                var t = this;
                return new (e = D(e))(function (e, n) {
                    var r;
                    t.subscribe(function (e) {
                        return r = e
                    }, function (e) {
                        return n(e)
                    }, function () {
                        return e(r)
                    })
                })
            }, e.create = function (t) {
                return new e(t)
            }, e
        }();

        function D(e) {
            if (e || (e = h.Promise || Promise), !e) throw new Error("no Promise impl found");
            return e
        }

        function j(e) {
            return e && "function" == typeof e.schedule
        }

        var L = function (e) {
            function t(t, n, r) {
                var o = e.call(this) || this;
                return o.parent = t, o.outerValue = n, o.outerIndex = r, o.index = 0, o
            }

            return o(t, e), t.prototype._next = function (e) {
                this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this)
            }, t.prototype._error = function (e) {
                this.parent.notifyError(e, this), this.unsubscribe()
            }, t.prototype._complete = function () {
                this.parent.notifyComplete(this), this.unsubscribe()
            }, t
        }(T), V = function (e) {
            return function (t) {
                for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
                t.closed || t.complete()
            }
        }, U = function (e) {
            return function (t) {
                return e.then(function (e) {
                    t.closed || (t.next(e), t.complete())
                }, function (e) {
                    return t.error(e)
                }).then(null, g), t
            }
        }, H = function () {
            return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
        }(), F = function (e) {
            return function (t) {
                for (var n = e[H](); ;) {
                    var r = n.next();
                    if (r.done) {
                        t.complete();
                        break
                    }
                    if (t.next(r.value), t.closed) break
                }
                return "function" == typeof n.return && t.add(function () {
                    n.return && n.return()
                }), t
            }
        }, z = function (e) {
            return function (t) {
                var n = e[I]();
                if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                return n.subscribe(t)
            }
        }, B = function (e) {
            return e && "number" == typeof e.length && "function" != typeof e
        };

        function q(e) {
            return e && "function" != typeof e.subscribe && "function" == typeof e.then
        }

        var Z = function (e) {
            if (e instanceof M) return function (t) {
                return e._isScalar ? (t.next(e.value), void t.complete()) : e.subscribe(t)
            };
            if (e && "function" == typeof e[I]) return z(e);
            if (B(e)) return V(e);
            if (q(e)) return U(e);
            if (e && "function" == typeof e[H]) return F(e);
            var t = m(e) ? "an invalid object" : "'" + e + "'";
            throw new TypeError("You provided " + t + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
        };

        function Q(e, t, n, r, o) {
            if (void 0 === o && (o = new L(e, n, r)), !o.closed) return Z(t)(o)
        }

        var G = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return o(t, e), t.prototype.notifyNext = function (e, t, n, r, o) {
                this.destination.next(t)
            }, t.prototype.notifyError = function (e, t) {
                this.destination.error(e)
            }, t.prototype.notifyComplete = function (e) {
                this.destination.complete()
            }, t
        }(T);

        function W(e, t) {
            return function (n) {
                if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return n.lift(new K(e, t))
            }
        }

        var K = function () {
            function e(e, t) {
                this.project = e, this.thisArg = t
            }

            return e.prototype.call = function (e, t) {
                return t.subscribe(new Y(e, this.project, this.thisArg))
            }, e
        }(), Y = function (e) {
            function t(t, n, r) {
                var o = e.call(this, t) || this;
                return o.project = n, o.count = 0, o.thisArg = r || o, o
            }

            return o(t, e), t.prototype._next = function (e) {
                var t;
                try {
                    t = this.project.call(this.thisArg, e, this.count++)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(t)
            }, t
        }(T);

        function J(e, t) {
            return new M(t ? function (n) {
                var r = new E, o = 0;
                return r.add(t.schedule(function () {
                    o !== e.length ? (n.next(e[o++]), n.closed || r.add(this.schedule())) : n.complete()
                })), r
            } : V(e))
        }

        function $(e, t) {
            if (!t) return e instanceof M ? e : new M(Z(e));
            if (null != e) {
                if (function (e) {
                    return e && "function" == typeof e[I]
                }(e)) return function (e, t) {
                    return new M(t ? function (n) {
                        var r = new E;
                        return r.add(t.schedule(function () {
                            var o = e[I]();
                            r.add(o.subscribe({
                                next: function (e) {
                                    r.add(t.schedule(function () {
                                        return n.next(e)
                                    }))
                                }, error: function (e) {
                                    r.add(t.schedule(function () {
                                        return n.error(e)
                                    }))
                                }, complete: function () {
                                    r.add(t.schedule(function () {
                                        return n.complete()
                                    }))
                                }
                            }))
                        })), r
                    } : z(e))
                }(e, t);
                if (q(e)) return function (e, t) {
                    return new M(t ? function (n) {
                        var r = new E;
                        return r.add(t.schedule(function () {
                            return e.then(function (e) {
                                r.add(t.schedule(function () {
                                    n.next(e), r.add(t.schedule(function () {
                                        return n.complete()
                                    }))
                                }))
                            }, function (e) {
                                r.add(t.schedule(function () {
                                    return n.error(e)
                                }))
                            })
                        })), r
                    } : U(e))
                }(e, t);
                if (B(e)) return J(e, t);
                if (function (e) {
                    return e && "function" == typeof e[H]
                }(e) || "string" == typeof e) return function (e, t) {
                    if (!e) throw new Error("Iterable cannot be null");
                    return new M(t ? function (n) {
                        var r, o = new E;
                        return o.add(function () {
                            r && "function" == typeof r.return && r.return()
                        }), o.add(t.schedule(function () {
                            r = e[H](), o.add(t.schedule(function () {
                                if (!n.closed) {
                                    var e, t;
                                    try {
                                        var o = r.next();
                                        e = o.value, t = o.done
                                    } catch (e) {
                                        return void n.error(e)
                                    }
                                    t ? n.complete() : (n.next(e), this.schedule())
                                }
                            }))
                        })), o
                    } : F(e))
                }(e, t)
            }
            throw new TypeError((null !== e && typeof e || e) + " is not observable")
        }

        function X(e, t, n) {
            return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof t ? function (r) {
                return r.pipe(X(function (n, r) {
                    return $(e(n, r)).pipe(W(function (e, o) {
                        return t(n, e, r, o)
                    }))
                }, n))
            } : ("number" == typeof t && (n = t), function (t) {
                return t.lift(new ee(e, n))
            })
        }

        var ee = function () {
            function e(e, t) {
                void 0 === t && (t = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = t
            }

            return e.prototype.call = function (e, t) {
                return t.subscribe(new te(e, this.project, this.concurrent))
            }, e
        }(), te = function (e) {
            function t(t, n, r) {
                void 0 === r && (r = Number.POSITIVE_INFINITY);
                var o = e.call(this, t) || this;
                return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
            }

            return o(t, e), t.prototype._next = function (e) {
                this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e)
            }, t.prototype._tryNext = function (e) {
                var t, n = this.index++;
                try {
                    t = this.project(e, n)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.active++, this._innerSub(t, e, n)
            }, t.prototype._innerSub = function (e, t, n) {
                var r = new L(this, void 0, void 0);
                this.add(r), Q(this, e, t, n, r)
            }, t.prototype._complete = function () {
                this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete()
            }, t.prototype.notifyNext = function (e, t, n, r, o) {
                this.destination.next(t)
            }, t.prototype.notifyComplete = function (e) {
                var t = this.buffer;
                this.remove(e), this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, t
        }(G);

        function ne(e) {
            return e
        }

        function re(e) {
            return void 0 === e && (e = Number.POSITIVE_INFINITY), X(ne, e)
        }

        function oe() {
            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
        }

        oe.prototype = Object.create(Error.prototype);
        var ie = oe, le = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.subject = t, r.subscriber = n, r.closed = !1, r
            }

            return o(t, e), t.prototype.unsubscribe = function () {
                if (!this.closed) {
                    this.closed = !0;
                    var e = this.subject, t = e.observers;
                    if (this.subject = null, t && 0 !== t.length && !e.isStopped && !e.closed) {
                        var n = t.indexOf(this.subscriber);
                        -1 !== n && t.splice(n, 1)
                    }
                }
            }, t
        }(E), ue = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.destination = t, n
            }

            return o(t, e), t
        }(T), ae = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
            }

            return o(t, e), t.prototype[P] = function () {
                return new ue(this)
            }, t.prototype.lift = function (e) {
                var t = new se(this, this);
                return t.operator = e, t
            }, t.prototype.next = function (e) {
                if (this.closed) throw new ie;
                if (!this.isStopped) for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].next(e)
            }, t.prototype.error = function (e) {
                if (this.closed) throw new ie;
                this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                for (var t = this.observers, n = t.length, r = t.slice(), o = 0; o < n; o++) r[o].error(e);
                this.observers.length = 0
            }, t.prototype.complete = function () {
                if (this.closed) throw new ie;
                this.isStopped = !0;
                for (var e = this.observers, t = e.length, n = e.slice(), r = 0; r < t; r++) n[r].complete();
                this.observers.length = 0
            }, t.prototype.unsubscribe = function () {
                this.isStopped = !0, this.closed = !0, this.observers = null
            }, t.prototype._trySubscribe = function (t) {
                if (this.closed) throw new ie;
                return e.prototype._trySubscribe.call(this, t)
            }, t.prototype._subscribe = function (e) {
                if (this.closed) throw new ie;
                return this.hasError ? (e.error(this.thrownError), E.EMPTY) : this.isStopped ? (e.complete(), E.EMPTY) : (this.observers.push(e), new le(this, e))
            }, t.prototype.asObservable = function () {
                var e = new M;
                return e.source = this, e
            }, t.create = function (e, t) {
                return new se(e, t)
            }, t
        }(M), se = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.destination = t, r.source = n, r
            }

            return o(t, e), t.prototype.next = function (e) {
                var t = this.destination;
                t && t.next && t.next(e)
            }, t.prototype.error = function (e) {
                var t = this.destination;
                t && t.error && this.destination.error(e)
            }, t.prototype.complete = function () {
                var e = this.destination;
                e && e.complete && this.destination.complete()
            }, t.prototype._subscribe = function (e) {
                return this.source ? this.source.subscribe(e) : E.EMPTY
            }, t
        }(ae);

        function ce() {
            return function (e) {
                return e.lift(new pe(e))
            }
        }

        var pe = function () {
            function e(e) {
                this.connectable = e
            }

            return e.prototype.call = function (e, t) {
                var n = this.connectable;
                n._refCount++;
                var r = new fe(e, n), o = t.subscribe(r);
                return r.closed || (r.connection = n.connect()), o
            }, e
        }(), fe = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.connectable = n, r
            }

            return o(t, e), t.prototype._unsubscribe = function () {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._refCount;
                    if (t <= 0) this.connection = null; else if (e._refCount = t - 1, t > 1) this.connection = null; else {
                        var n = this.connection, r = e._connection;
                        this.connection = null, !r || n && r !== n || r.unsubscribe()
                    }
                } else this.connection = null
            }, t
        }(T), de = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.source = t, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
            }

            return o(t, e), t.prototype._subscribe = function (e) {
                return this.getSubject().subscribe(e)
            }, t.prototype.getSubject = function () {
                var e = this._subject;
                return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject
            }, t.prototype.connect = function () {
                var e = this._connection;
                return e || (this._isComplete = !1, (e = this._connection = new E).add(this.source.subscribe(new ge(this.getSubject(), this))), e.closed ? (this._connection = null, e = E.EMPTY) : this._connection = e), e
            }, t.prototype.refCount = function () {
                return ce()(this)
            }, t
        }(M).prototype, he = {
            operator: {value: null},
            _refCount: {value: 0, writable: !0},
            _subject: {value: null, writable: !0},
            _connection: {value: null, writable: !0},
            _subscribe: {value: de._subscribe},
            _isComplete: {value: de._isComplete, writable: !0},
            getSubject: {value: de.getSubject},
            connect: {value: de.connect},
            refCount: {value: de.refCount}
        }, ge = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.connectable = n, r
            }

            return o(t, e), t.prototype._error = function (t) {
                this._unsubscribe(), e.prototype._error.call(this, t)
            }, t.prototype._complete = function () {
                this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this)
            }, t.prototype._unsubscribe = function () {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._connection;
                    e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                }
            }, t
        }(ue);

        function ve() {
            return new ae
        }

        function ye(e) {
            return {providedIn: e.providedIn || null, factory: e.factory, value: void 0}
        }

        var me = function () {
            function e(e, t) {
                this._desc = e, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0 !== t ? ye({
                    providedIn: t.providedIn || "root",
                    factory: t.factory
                }) : void 0
            }

            return e.prototype.toString = function () {
                return "InjectionToken " + this._desc
            }, e
        }(), be = "__parameters__", _e = "__prop__metadata__";

        function we(e) {
            return function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                if (e) {
                    var r = e.apply(void 0, p(t));
                    for (var o in r) this[o] = r[o]
                }
            }
        }

        function Ce(e, t, n) {
            var r = we(t);

            function o() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                if (this instanceof o) return r.apply(this, t), this;
                var i = new ((e = o).bind.apply(e, p([void 0], t)));
                return l.annotation = i, l;

                function l(e, t, n) {
                    for (var r = e.hasOwnProperty(be) ? e[be] : Object.defineProperty(e, be, {value: []})[be]; r.length <= n;) r.push(null);
                    return (r[n] = r[n] || []).push(i), e
                }
            }

            return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = e, o.annotationCls = o, o
        }

        function Se(e, t, n) {
            var r = we(t);

            function o() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                if (this instanceof o) return r.apply(this, t), this;
                var i = new ((e = o).bind.apply(e, p([void 0], t)));
                return function (e, t) {
                    var n = e.constructor,
                        r = n.hasOwnProperty(_e) ? n[_e] : Object.defineProperty(n, _e, {value: {}})[_e];
                    r[t] = r.hasOwnProperty(t) && r[t] || [], r[t].unshift(i)
                }
            }

            return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = e, o.annotationCls = o, o
        }

        var xe = new me("AnalyzeForEntryComponents"), Ee = Ce("Attribute", function (e) {
            return {attributeName: e}
        }), ke = Se("Input", function (e) {
            return {bindingPropertyName: e}
        }), Pe = Se("HostBinding", function (e) {
            return {hostPropertyName: e}
        });
        Function;
        var Te = "undefined" != typeof window && window,
            Oe = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
            Ie = "undefined" != typeof global && global || Te || Oe, Ae = Promise.resolve(0), Ne = null;

        function Re() {
            if (!Ne) {
                var e = Ie.Symbol;
                if (e && e.iterator) Ne = e.iterator; else for (var t = Object.getOwnPropertyNames(Map.prototype), n = 0; n < t.length; ++n) {
                    var r = t[n];
                    "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Ne = r)
                }
            }
            return Ne
        }

        function Me(e) {
            "undefined" == typeof Zone ? Ae.then(function () {
                e && e.apply(null, null)
            }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e)
        }

        function De(e, t) {
            return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
        }

        function je(e) {
            if ("string" == typeof e) return e;
            if (e instanceof Array) return "[" + e.map(je).join(", ") + "]";
            if (null == e) return "" + e;
            if (e.overriddenName) return "" + e.overriddenName;
            if (e.name) return "" + e.name;
            var t = e.toString();
            if (null == t) return "" + t;
            var n = t.indexOf("\n");
            return -1 === n ? t : t.substring(0, n)
        }

        function Le(e) {
            return e.__forward_ref__ = Le, e.toString = function () {
                return je(this())
            }, e
        }

        function Ve(e) {
            return "function" == typeof e && e.hasOwnProperty("__forward_ref__") && e.__forward_ref__ === Le ? e() : e
        }

        var Ue = Ce("Inject", function (e) {
                return {token: e}
            }), He = Ce("Optional"), Fe = Ce("Self"), ze = Ce("SkipSelf"), Be = "__source", qe = new Object, Ze = qe,
            Qe = new me("INJECTOR"), Ge = function () {
                function e() {
                }

                return e.prototype.get = function (e, t) {
                    if (void 0 === t && (t = qe), t === qe) throw new Error("NullInjectorError: No provider for " + je(e) + "!");
                    return t
                }, e
            }(), We = function () {
                function e() {
                }

                return e.create = function (e, t) {
                    return Array.isArray(e) ? new ot(e, t) : new ot(e.providers, e.parent, e.name || null)
                }, e.THROW_IF_NOT_FOUND = qe, e.NULL = new Ge, e.ngInjectableDef = ye({
                    providedIn: "any",
                    factory: function () {
                        return ct(Qe)
                    }
                }), e
            }(), Ke = function (e) {
                return e
            }, Ye = [], Je = Ke, $e = function () {
                return Array.prototype.slice.call(arguments)
            }, Xe = {}, et = function (e) {
                for (var t in e) if (e[t] === Xe) return t;
                throw Error("!prop")
            }({provide: String, useValue: Xe}), tt = We.NULL, nt = /\n/gm, rt = "\u0275", ot = function () {
                function e(e, t, n) {
                    void 0 === t && (t = tt), void 0 === n && (n = null), this.parent = t, this.source = n;
                    var r = this._records = new Map;
                    r.set(We, {token: We, fn: Ke, deps: Ye, value: this, useNew: !1}), r.set(Qe, {
                        token: Qe,
                        fn: Ke,
                        deps: Ye,
                        value: this,
                        useNew: !1
                    }), function e(t, n) {
                        if (n) if ((n = Ve(n)) instanceof Array) for (var r = 0; r < n.length; r++) e(t, n[r]); else {
                            if ("function" == typeof n) throw ut("Function/Class not supported", n);
                            if (!n || "object" != typeof n || !n.provide) throw ut("Unexpected provider", n);
                            var o = Ve(n.provide), i = function (e) {
                                var t = function (e) {
                                    var t = Ye, n = e.deps;
                                    if (n && n.length) {
                                        t = [];
                                        for (var r = 0; r < n.length; r++) {
                                            var o = 6;
                                            if ((a = Ve(n[r])) instanceof Array) for (var i = 0, l = a; i < l.length; i++) {
                                                var u = l[i];
                                                u instanceof He || u == He ? o |= 1 : u instanceof ze || u == ze ? o &= -3 : u instanceof Fe || u == Fe ? o &= -5 : a = u instanceof Ue ? u.token : Ve(u)
                                            }
                                            t.push({token: a, options: o})
                                        }
                                    } else if (e.useExisting) {
                                        var a;
                                        t = [{token: a = Ve(e.useExisting), options: 6}]
                                    } else if (!(n || et in e)) throw ut("'deps' required", e);
                                    return t
                                }(e), n = Ke, r = Ye, o = !1, i = Ve(e.provide);
                                if (et in e) r = e.useValue; else if (e.useFactory) n = e.useFactory; else if (e.useExisting) ; else if (e.useClass) o = !0, n = Ve(e.useClass); else {
                                    if ("function" != typeof i) throw ut("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", e);
                                    o = !0, n = i
                                }
                                return {deps: t, fn: n, useNew: o, value: r}
                            }(n);
                            if (!0 === n.multi) {
                                var l = t.get(o);
                                if (l) {
                                    if (l.fn !== $e) throw it(o)
                                } else t.set(o, l = {token: n.provide, deps: [], useNew: !1, fn: $e, value: Ye});
                                l.deps.push({token: o = n, options: 6})
                            }
                            var u = t.get(o);
                            if (u && u.fn == $e) throw it(o);
                            t.set(o, i)
                        }
                    }(r, e)
                }

                return e.prototype.get = function (e, t, n) {
                    void 0 === n && (n = 0);
                    var r = this._records.get(e);
                    try {
                        return function e(t, n, r, o, i, l) {
                            try {
                                return function (t, n, r, o, i, l) {
                                    var u, a;
                                    if (!n || 4 & l) 2 & l || (a = o.get(t, i, 0)); else {
                                        if ((a = n.value) == Je) throw Error(rt + "Circular dependency");
                                        if (a === Ye) {
                                            n.value = Je;
                                            var s = n.useNew, c = n.fn, f = n.deps, d = Ye;
                                            if (f.length) {
                                                d = [];
                                                for (var h = 0; h < f.length; h++) {
                                                    var g = f[h], v = g.options, y = 2 & v ? r.get(g.token) : void 0;
                                                    d.push(e(g.token, y, r, y || 4 & v ? o : tt, 1 & v ? null : We.THROW_IF_NOT_FOUND, 0))
                                                }
                                            }
                                            n.value = a = s ? new ((u = c).bind.apply(u, p([void 0], d))) : c.apply(void 0, d)
                                        }
                                    }
                                    return a
                                }(t, n, r, o, i, l)
                            } catch (e) {
                                throw e instanceof Error || (e = new Error(e)), (e.ngTempTokenPath = e.ngTempTokenPath || []).unshift(t), n && n.value == Je && (n.value = Ye), e
                            }
                        }(e, r, this._records, this.parent, t, n)
                    } catch (t) {
                        var o = t.ngTempTokenPath;
                        throw e[Be] && o.unshift(e[Be]), t.message = lt("\n" + t.message, o, this.source), t.ngTokenPath = o, t.ngTempTokenPath = null, t
                    }
                }, e.prototype.toString = function () {
                    var e = [];
                    return this._records.forEach(function (t, n) {
                        return e.push(je(n))
                    }), "StaticInjector[" + e.join(", ") + "]"
                }, e
            }();

        function it(e) {
            return ut("Cannot mix multi providers and regular providers", e)
        }

        function lt(e, t, n) {
            void 0 === n && (n = null), e = e && "\n" === e.charAt(0) && e.charAt(1) == rt ? e.substr(2) : e;
            var r = je(t);
            if (t instanceof Array) r = t.map(je).join(" -> "); else if ("object" == typeof t) {
                var o = [];
                for (var i in t) if (t.hasOwnProperty(i)) {
                    var l = t[i];
                    o.push(i + ":" + ("string" == typeof l ? JSON.stringify(l) : je(l)))
                }
                r = "{" + o.join(", ") + "}"
            }
            return "StaticInjectorError" + (n ? "(" + n + ")" : "") + "[" + r + "]: " + e.replace(nt, "\n  ")
        }

        function ut(e, t) {
            return new Error(lt(e, t))
        }

        var at = void 0;

        function st(e) {
            var t = at;
            return at = e, t
        }

        function ct(e, t) {
            if (void 0 === t && (t = 0), void 0 === at) throw new Error("inject() must be called from an injection context");
            if (null === at) {
                var n = e.ngInjectableDef;
                if (n && "root" == n.providedIn) return void 0 === n.value ? n.value = n.factory() : n.value;
                if (8 & t) return null;
                throw new Error("Injector: NOT_FOUND [" + je(e) + "]")
            }
            return at.get(e, 8 & t ? null : void 0, t)
        }

        function pt(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var r = e[n];
                if (Array.isArray(r)) {
                    if (0 === r.length) throw new Error("Arguments array must have arguments.");
                    for (var o = void 0, i = 0, l = 0; l < r.length; l++) {
                        var u = r[l];
                        u instanceof He || "Optional" === u.ngMetadataName ? i |= 8 : u instanceof ze || "SkipSelf" === u.ngMetadataName ? i |= 4 : u instanceof Fe || "Self" === u.ngMetadataName ? i |= 2 : o = u instanceof Ue ? u.token : u
                    }
                    t.push(ct(o, i))
                } else t.push(ct(r))
            }
            return t
        }

        String;
        var ft = function (e) {
            return e[e.Emulated = 0] = "Emulated", e[e.Native = 1] = "Native", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e
        }({}), dt = new function (e) {
            this.full = "6.1.8", this.major = "6.1.8".split(".")[0], this.minor = "6.1.8".split(".")[1], this.patch = "6.1.8".split(".").slice(2).join(".")
        }("6.1.8"), ht = "ngDebugContext", gt = "ngOriginalError", vt = "ngErrorLogger";

        function yt(e) {
            return e[ht]
        }

        function mt(e) {
            return e[gt]
        }

        function bt(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            e.error.apply(e, p(t))
        }

        var _t = function () {
                function e() {
                    this._console = console
                }

                return e.prototype.handleError = function (e) {
                    var t = this._findOriginalError(e), n = this._findContext(e), r = function (e) {
                        return e[vt] || bt
                    }(e);
                    r(this._console, "ERROR", e), t && r(this._console, "ORIGINAL ERROR", t), n && r(this._console, "ERROR CONTEXT", n)
                }, e.prototype._findContext = function (e) {
                    return e ? yt(e) ? yt(e) : this._findContext(mt(e)) : null
                }, e.prototype._findOriginalError = function (e) {
                    for (var t = mt(e); t && mt(t);) t = mt(t);
                    return t
                }, e
            }(), wt = new me("The presence of this token marks an injector as being the root injector."), Ct = {}, St = {},
            xt = [], Et = void 0;

        function kt() {
            return void 0 === Et && (Et = new Ge), Et
        }

        var Pt = function () {
            function e(e, t, n) {
                var r = this;
                this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this.destroyed = !1, It([e], function (e) {
                    return r.processInjectorType(e, new Set)
                }), t && It(t, function (e) {
                    return r.processProvider(e)
                }), this.records.set(Qe, Ot(void 0, this)), this.isRootInjector = this.records.has(wt), this.injectorDefTypes.forEach(function (e) {
                    return r.get(e)
                })
            }

            return e.prototype.destroy = function () {
                this.assertNotDestroyed(), this.destroyed = !0;
                try {
                    this.onDestroy.forEach(function (e) {
                        return e.ngOnDestroy()
                    })
                } finally {
                    this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                }
            }, e.prototype.get = function (e, t, n) {
                void 0 === t && (t = Ze), void 0 === n && (n = 0), this.assertNotDestroyed();
                var r, o = st(this);
                try {
                    if (!(4 & n)) {
                        var i = this.records.get(e);
                        if (void 0 === i) {
                            var l = ("function" == typeof(r = e) || "object" == typeof r && r instanceof me) && e.ngInjectableDef || void 0;
                            void 0 !== l && this.injectableDefInScope(l) && (i = Tt(e), this.records.set(e, i))
                        }
                        if (void 0 !== i) return this.hydrate(e, i)
                    }
                    return 2 & n && kt(), this.parent.get(e, t)
                } finally {
                    st(o)
                }
            }, e.prototype.assertNotDestroyed = function () {
                if (this.destroyed) throw new Error("Injector has already been destroyed.")
            }, e.prototype.processInjectorType = function (e, t) {
                var n = this, r = (e = Ve(e)).ngInjectorDef, o = null == r && e.ngModule || void 0,
                    i = void 0 === o ? e : o, l = void 0 !== o && e.providers || xt;
                if (void 0 !== o && (r = o.ngInjectorDef), null != r) {
                    if (t.has(i)) throw new Error("Circular dependency: type " + je(i) + " ends up importing itself.");
                    if (this.injectorDefTypes.add(i), this.records.set(i, Ot(r.factory)), null != r.imports) {
                        t.add(i);
                        try {
                            It(r.imports, function (e) {
                                return n.processInjectorType(e, t)
                            })
                        } finally {
                            t.delete(i)
                        }
                    }
                    null != r.providers && It(r.providers, function (e) {
                        return n.processProvider(e)
                    }), It(l, function (e) {
                        return n.processProvider(e)
                    })
                }
            }, e.prototype.processProvider = function (e) {
                var t = At(e = Ve(e)) ? e : Ve(e.provide), n = function (e) {
                    var t = Ve(e), n = Ct, r = void 0;
                    if (At(e)) return Tt(e);
                    if (t = Ve(e.provide), et in e) n = e.useValue; else if (e.useExisting) r = function () {
                        return ct(e.useExisting)
                    }; else if (e.useFactory) r = function () {
                        return e.useFactory.apply(e, p(pt(e.deps || [])))
                    }; else {
                        var o = e.useClass || t;
                        if (!e.deps) return Tt(o);
                        r = function () {
                            return new (o.bind.apply(o, p([void 0], pt(e.deps))))
                        }
                    }
                    return Ot(r, n)
                }(e);
                if (At(e) || !0 !== e.multi) {
                    var r = this.records.get(t);
                    if (r && void 0 !== r.multi) throw new Error("Mixed multi-provider for " + je(t))
                } else {
                    var o = this.records.get(t);
                    if (o) {
                        if (void 0 === o.multi) throw new Error("Mixed multi-provider for " + t + ".")
                    } else (o = Ot(void 0, Ct, !0)).factory = function () {
                        return pt(o.multi)
                    }, this.records.set(t, o);
                    t = e, o.multi.push(e)
                }
                this.records.set(t, n)
            }, e.prototype.hydrate = function (e, t) {
                if (t.value === St) throw new Error("Circular dep for " + je(e));
                var n;
                return t.value === Ct && (t.value = St, t.value = t.factory()), "object" == typeof t.value && t.value && "object" == typeof(n = t.value) && null != n && n.ngOnDestroy && "function" == typeof n.ngOnDestroy && this.onDestroy.add(t.value), t.value
            }, e.prototype.injectableDefInScope = function (e) {
                return !!e.providedIn && ("string" == typeof e.providedIn ? "any" === e.providedIn || "root" === e.providedIn && this.isRootInjector : this.injectorDefTypes.has(e.providedIn))
            }, e
        }();

        function Tt(e) {
            var t = e.ngInjectableDef;
            if (void 0 === t) {
                if (e instanceof me) throw new Error("Token " + je(e) + " is missing an ngInjectableDef definition.");
                return Ot(function () {
                    return new e
                })
            }
            return Ot(t.factory)
        }

        function Ot(e, t, n) {
            return void 0 === t && (t = Ct), void 0 === n && (n = !1), {factory: e, value: t, multi: n ? [] : void 0}
        }

        function It(e, t) {
            e.forEach(function (e) {
                return Array.isArray(e) ? It(e, t) : t(e)
            })
        }

        function At(e) {
            return "function" == typeof e
        }

        function Nt(e) {
            return !!e && "function" == typeof e.then
        }

        var Rt = new me("Application Initializer"), Mt = function () {
            function e(e) {
                var t = this;
                this.appInits = e, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function (e, n) {
                    t.resolve = e, t.reject = n
                })
            }

            return e.prototype.runInitializers = function () {
                var e = this;
                if (!this.initialized) {
                    var t = [], n = function () {
                        e.done = !0, e.resolve()
                    };
                    if (this.appInits) for (var r = 0; r < this.appInits.length; r++) {
                        var o = this.appInits[r]();
                        Nt(o) && t.push(o)
                    }
                    Promise.all(t).then(function () {
                        n()
                    }).catch(function (t) {
                        e.reject(t)
                    }), 0 === t.length && n(), this.initialized = !0
                }
            }, l([u(0, Ue(Rt)), u(0, He())], e)
        }(), Dt = new me("AppId");

        function jt() {
            return "" + Lt() + Lt() + Lt()
        }

        function Lt() {
            return String.fromCharCode(97 + Math.floor(25 * Math.random()))
        }

        var Vt = new me("Platform Initializer"), Ut = new me("Platform ID"), Ht = new me("appBootstrapListener"),
            Ft = function () {
                function e() {
                }

                return e.prototype.log = function (e) {
                    console.log(e)
                }, e.prototype.warn = function (e) {
                    console.warn(e)
                }, e
            }();

        function zt() {
            throw new Error("Runtime compiler is not loaded")
        }

        var Bt = function () {
            function e() {
            }

            return e.prototype.compileModuleSync = function (e) {
                throw zt()
            }, e.prototype.compileModuleAsync = function (e) {
                throw zt()
            }, e.prototype.compileModuleAndAllComponentsSync = function (e) {
                throw zt()
            }, e.prototype.compileModuleAndAllComponentsAsync = function (e) {
                throw zt()
            }, e.prototype.clearCache = function () {
            }, e.prototype.clearCacheFor = function (e) {
            }, e.prototype.getModuleId = function (e) {
            }, e
        }(), qt = function () {
        }, Zt = function () {
        }, Qt = function () {
        };

        function Gt(e) {
            var t = Error("No component factory found for " + je(e) + ". Did you add it to @NgModule.entryComponents?");
            return t[Yt] = e, t
        }

        var Wt, Kt, Yt = "ngComponent", Jt = function () {
            function e() {
            }

            return e.prototype.resolveComponentFactory = function (e) {
                throw Gt(e)
            }, e
        }(), $t = function () {
            function e() {
            }

            return e.NULL = new Jt, e
        }(), Xt = function () {
            function e(e, t, n) {
                this._parent = t, this._ngModule = n, this._factories = new Map;
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    this._factories.set(o.componentType, o)
                }
            }

            return e.prototype.resolveComponentFactory = function (e) {
                var t = this._factories.get(e);
                if (!t && this._parent && (t = this._parent.resolveComponentFactory(e)), !t) throw Gt(e);
                return new en(t, this._ngModule)
            }, e
        }(), en = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r.factory = t, r.ngModule = n, r.selector = t.selector, r.componentType = t.componentType, r.ngContentSelectors = t.ngContentSelectors, r.inputs = t.inputs, r.outputs = t.outputs, r
            }

            return o(t, e), t.prototype.create = function (e, t, n, r) {
                return this.factory.create(e, t, n, r || this.ngModule)
            }, t
        }(Qt), tn = function () {
        }, nn = function () {
        }, rn = function () {
            var e = Ie.wtf;
            return !(!e || !(Wt = e.trace) || (Kt = Wt.events, 0))
        }();

        function on(e, t) {
            return null
        }

        var ln = rn ? function (e, t) {
            return void 0 === t && (t = null), Kt.createScope(e, t)
        } : function (e, t) {
            return on
        }, un = rn ? function (e, t) {
            return Wt.leaveScope(e, t), t
        } : function (e, t) {
            return t
        }, an = function (e) {
            function t(t) {
                void 0 === t && (t = !1);
                var n = e.call(this) || this;
                return n.__isAsync = t, n
            }

            return o(t, e), t.prototype.emit = function (t) {
                e.prototype.next.call(this, t)
            }, t.prototype.subscribe = function (t, n, r) {
                var o, i = function (e) {
                    return null
                }, l = function () {
                    return null
                };
                t && "object" == typeof t ? (o = this.__isAsync ? function (e) {
                    setTimeout(function () {
                        return t.next(e)
                    })
                } : function (e) {
                    t.next(e)
                }, t.error && (i = this.__isAsync ? function (e) {
                    setTimeout(function () {
                        return t.error(e)
                    })
                } : function (e) {
                    t.error(e)
                }), t.complete && (l = this.__isAsync ? function () {
                    setTimeout(function () {
                        return t.complete()
                    })
                } : function () {
                    t.complete()
                })) : (o = this.__isAsync ? function (e) {
                    setTimeout(function () {
                        return t(e)
                    })
                } : function (e) {
                    t(e)
                }, n && (i = this.__isAsync ? function (e) {
                    setTimeout(function () {
                        return n(e)
                    })
                } : function (e) {
                    n(e)
                }), r && (l = this.__isAsync ? function () {
                    setTimeout(function () {
                        return r()
                    })
                } : function () {
                    r()
                }));
                var u = e.prototype.subscribe.call(this, o, i, l);
                return t instanceof E && t.add(u), u
            }, t
        }(ae), sn = function () {
            function e(e) {
                var t, n = e.enableLongStackTrace, r = void 0 !== n && n;
                if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new an(!1), this.onMicrotaskEmpty = new an(!1), this.onStable = new an(!1), this.onError = new an(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (t = this)._inner = t._inner.fork({
                    name: "angular",
                    properties: {isAngularZone: !0},
                    onInvokeTask: function (e, n, r, o, i, l) {
                        try {
                            return dn(t), e.invokeTask(r, o, i, l)
                        } finally {
                            hn(t)
                        }
                    },
                    onInvoke: function (e, n, r, o, i, l, u) {
                        try {
                            return dn(t), e.invoke(r, o, i, l, u)
                        } finally {
                            hn(t)
                        }
                    },
                    onHasTask: function (e, n, r, o) {
                        e.hasTask(r, o), n === r && ("microTask" == o.change ? (t.hasPendingMicrotasks = o.microTask, fn(t)) : "macroTask" == o.change && (t.hasPendingMacrotasks = o.macroTask))
                    },
                    onHandleError: function (e, n, r, o) {
                        return e.handleError(r, o), t.runOutsideAngular(function () {
                            return t.onError.emit(o)
                        }), !1
                    }
                })
            }

            return e.isInAngularZone = function () {
                return !0 === Zone.current.get("isAngularZone")
            }, e.assertInAngularZone = function () {
                if (!e.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
            }, e.assertNotInAngularZone = function () {
                if (e.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
            }, e.prototype.run = function (e, t, n) {
                return this._inner.run(e, t, n)
            }, e.prototype.runTask = function (e, t, n, r) {
                var o = this._inner, i = o.scheduleEventTask("NgZoneEvent: " + r, e, pn, cn, cn);
                try {
                    return o.runTask(i, t, n)
                } finally {
                    o.cancelTask(i)
                }
            }, e.prototype.runGuarded = function (e, t, n) {
                return this._inner.runGuarded(e, t, n)
            }, e.prototype.runOutsideAngular = function (e) {
                return this._outer.run(e)
            }, e
        }();

        function cn() {
        }

        var pn = {};

        function fn(e) {
            if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
                e._nesting++, e.onMicrotaskEmpty.emit(null)
            } finally {
                if (e._nesting--, !e.hasPendingMicrotasks) try {
                    e.runOutsideAngular(function () {
                        return e.onStable.emit(null)
                    })
                } finally {
                    e.isStable = !0
                }
            }
        }

        function dn(e) {
            e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
        }

        function hn(e) {
            e._nesting--, fn(e)
        }

        var gn, vn = function () {
            function e() {
                this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new an, this.onMicrotaskEmpty = new an, this.onStable = new an, this.onError = new an
            }

            return e.prototype.run = function (e) {
                return e()
            }, e.prototype.runGuarded = function (e) {
                return e()
            }, e.prototype.runOutsideAngular = function (e) {
                return e()
            }, e.prototype.runTask = function (e) {
                return e()
            }, e
        }(), yn = function () {
            function e(e) {
                var t = this;
                this._ngZone = e, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this._watchAngularEvents(), e.run(function () {
                    t.taskTrackingZone = Zone.current.get("TaskTrackingZone")
                })
            }

            return e.prototype._watchAngularEvents = function () {
                var e = this;
                this._ngZone.onUnstable.subscribe({
                    next: function () {
                        e._didWork = !0, e._isZoneStable = !1
                    }
                }), this._ngZone.runOutsideAngular(function () {
                    e._ngZone.onStable.subscribe({
                        next: function () {
                            sn.assertNotInAngularZone(), Me(function () {
                                e._isZoneStable = !0, e._runCallbacksIfReady()
                            })
                        }
                    })
                })
            }, e.prototype.increasePendingRequestCount = function () {
                return this._pendingCount += 1, this._didWork = !0, this._pendingCount
            }, e.prototype.decreasePendingRequestCount = function () {
                if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                return this._runCallbacksIfReady(), this._pendingCount
            }, e.prototype.isStable = function () {
                return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
            }, e.prototype._runCallbacksIfReady = function () {
                var e = this;
                if (this.isStable()) Me(function () {
                    for (; 0 !== e._callbacks.length;) {
                        var t = e._callbacks.pop();
                        clearTimeout(t.timeoutId), t.doneCb(e._didWork)
                    }
                    e._didWork = !1
                }); else {
                    var t = this.getPendingTasks();
                    this._callbacks = this._callbacks.filter(function (e) {
                        return !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)
                    }), this._didWork = !0
                }
            }, e.prototype.getPendingTasks = function () {
                return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function (e) {
                    return {
                        source: e.source,
                        isPeriodic: e.data.isPeriodic,
                        delay: e.data.delay,
                        creationLocation: e.creationLocation,
                        xhr: e.data.target
                    }
                }) : []
            }, e.prototype.addCallback = function (e, t, n) {
                var r = this, o = -1;
                t && t > 0 && (o = setTimeout(function () {
                    r._callbacks = r._callbacks.filter(function (e) {
                        return e.timeoutId !== o
                    }), e(r._didWork, r.getPendingTasks())
                }, t)), this._callbacks.push({doneCb: e, timeoutId: o, updateCb: n})
            }, e.prototype.whenStable = function (e, t, n) {
                if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                this.addCallback(e, t, n), this._runCallbacksIfReady()
            }, e.prototype.getPendingRequestCount = function () {
                return this._pendingCount
            }, e.prototype.findProviders = function (e, t, n) {
                return []
            }, e
        }(), mn = function () {
            function e() {
                this._applications = new Map, bn.addToWindow(this)
            }

            return e.prototype.registerApplication = function (e, t) {
                this._applications.set(e, t)
            }, e.prototype.unregisterApplication = function (e) {
                this._applications.delete(e)
            }, e.prototype.unregisterAllApplications = function () {
                this._applications.clear()
            }, e.prototype.getTestability = function (e) {
                return this._applications.get(e) || null
            }, e.prototype.getAllTestabilities = function () {
                return Array.from(this._applications.values())
            }, e.prototype.getAllRootElements = function () {
                return Array.from(this._applications.keys())
            }, e.prototype.findTestabilityInTree = function (e, t) {
                return void 0 === t && (t = !0), bn.findTestabilityInTree(this, e, t)
            }, l([a("design:paramtypes", [])], e)
        }(), bn = new (function () {
            function e() {
            }

            return e.prototype.addToWindow = function (e) {
            }, e.prototype.findTestabilityInTree = function (e, t, n) {
                return null
            }, e
        }()), _n = !0, wn = !1, Cn = new me("AllowMultipleToken");

        function Sn() {
            return wn = !0, _n
        }

        var xn = function (e, t) {
            this.name = e, this.token = t
        };

        function En(e, t, n) {
            void 0 === n && (n = []);
            var r = "Platform: " + t, o = new me(r);
            return function (t) {
                void 0 === t && (t = []);
                var i = kn();
                if (!i || i.injector.get(Cn, !1)) if (e) e(n.concat(t).concat({provide: o, useValue: !0})); else {
                    var l = n.concat(t).concat({provide: o, useValue: !0});
                    !function (e) {
                        if (gn && !gn.destroyed && !gn.injector.get(Cn, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                        gn = e.get(Pn);
                        var t = e.get(Vt, null);
                        t && t.forEach(function (e) {
                            return e()
                        })
                    }(We.create({providers: l, name: r}))
                }
                return function (e) {
                    var t = kn();
                    if (!t) throw new Error("No platform exists!");
                    if (!t.injector.get(e, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                    return t
                }(o)
            }
        }

        function kn() {
            return gn && !gn.destroyed ? gn : null
        }

        var Pn = function () {
            function e(e) {
                this._injector = e, this._modules = [], this._destroyListeners = [], this._destroyed = !1
            }

            return e.prototype.bootstrapModuleFactory = function (e, t) {
                var n, r = this,
                    o = "noop" === (n = t ? t.ngZone : void 0) ? new vn : ("zone.js" === n ? void 0 : n) || new sn({enableLongStackTrace: Sn()}),
                    i = [{provide: sn, useValue: o}];
                return o.run(function () {
                    var t = We.create({providers: i, parent: r.injector, name: e.moduleType.name}), n = e.create(t),
                        l = n.injector.get(_t, null);
                    if (!l) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                    return n.onDestroy(function () {
                        return In(r._modules, n)
                    }), o.runOutsideAngular(function () {
                        return o.onError.subscribe({
                            next: function (e) {
                                l.handleError(e)
                            }
                        })
                    }), function (e, t, o) {
                        try {
                            var i = ((l = n.injector.get(Mt)).runInitializers(), l.donePromise.then(function () {
                                return r._moduleDoBootstrap(n), n
                            }));
                            return Nt(i) ? i.catch(function (n) {
                                throw t.runOutsideAngular(function () {
                                    return e.handleError(n)
                                }), n
                            }) : i
                        } catch (n) {
                            throw t.runOutsideAngular(function () {
                                return e.handleError(n)
                            }), n
                        }
                        var l
                    }(l, o)
                })
            }, e.prototype.bootstrapModule = function (e, t) {
                var n = this;
                void 0 === t && (t = []);
                var r = this.injector.get(qt), o = Tn({}, t);
                return r.createCompiler([o]).compileModuleAsync(e).then(function (e) {
                    return n.bootstrapModuleFactory(e, o)
                })
            }, e.prototype._moduleDoBootstrap = function (e) {
                var t = e.injector.get(On);
                if (e._bootstrapComponents.length > 0) e._bootstrapComponents.forEach(function (e) {
                    return t.bootstrap(e)
                }); else {
                    if (!e.instance.ngDoBootstrap) throw new Error("The module " + je(e.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                    e.instance.ngDoBootstrap(t)
                }
                this._modules.push(e)
            }, e.prototype.onDestroy = function (e) {
                this._destroyListeners.push(e)
            }, Object.defineProperty(e.prototype, "injector", {
                get: function () {
                    return this._injector
                }, enumerable: !0, configurable: !0
            }), e.prototype.destroy = function () {
                if (this._destroyed) throw new Error("The platform has already been destroyed!");
                this._modules.slice().forEach(function (e) {
                    return e.destroy()
                }), this._destroyListeners.forEach(function (e) {
                    return e()
                }), this._destroyed = !0
            }, Object.defineProperty(e.prototype, "destroyed", {
                get: function () {
                    return this._destroyed
                }, enumerable: !0, configurable: !0
            }), e
        }();

        function Tn(e, t) {
            return Array.isArray(t) ? t.reduce(Tn, e) : i({}, e, t)
        }

        var On = function () {
            function e(e, t, n, r, o, i) {
                var l = this;
                this._zone = e, this._console = t, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = o, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Sn(), this._zone.onMicrotaskEmpty.subscribe({
                    next: function () {
                        l._zone.run(function () {
                            l.tick()
                        })
                    }
                });
                var u = new M(function (e) {
                    l._stable = l._zone.isStable && !l._zone.hasPendingMacrotasks && !l._zone.hasPendingMicrotasks, l._zone.runOutsideAngular(function () {
                        e.next(l._stable), e.complete()
                    })
                }), a = new M(function (e) {
                    var t;
                    l._zone.runOutsideAngular(function () {
                        t = l._zone.onStable.subscribe(function () {
                            sn.assertNotInAngularZone(), Me(function () {
                                l._stable || l._zone.hasPendingMacrotasks || l._zone.hasPendingMicrotasks || (l._stable = !0, e.next(!0))
                            })
                        })
                    });
                    var n = l._zone.onUnstable.subscribe(function () {
                        sn.assertInAngularZone(), l._stable && (l._stable = !1, l._zone.runOutsideAngular(function () {
                            e.next(!1)
                        }))
                    });
                    return function () {
                        t.unsubscribe(), n.unsubscribe()
                    }
                });
                this.isStable = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = Number.POSITIVE_INFINITY, r = null, o = e[e.length - 1];
                    return j(o) ? (r = e.pop(), e.length > 1 && "number" == typeof e[e.length - 1] && (n = e.pop())) : "number" == typeof o && (n = e.pop()), null === r && 1 === e.length && e[0] instanceof M ? e[0] : re(n)(J(e, r))
                }(u, a.pipe(function (e) {
                    return ce()((t = ve, function (e) {
                        var n;
                        n = "function" == typeof t ? t : function () {
                            return t
                        };
                        var r = Object.create(e, he);
                        return r.source = e, r.subjectFactory = n, r
                    })(e));
                    var t
                }))
            }

            var t;
            return t = e, e.prototype.bootstrap = function (e, t) {
                var n, r = this;
                if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                n = e instanceof Qt ? e : this._componentFactoryResolver.resolveComponentFactory(e), this.componentTypes.push(n.componentType);
                var o = n instanceof en ? null : this._injector.get(tn), i = n.create(We.NULL, [], t || n.selector, o);
                i.onDestroy(function () {
                    r._unloadComponent(i)
                });
                var l = i.injector.get(yn, null);
                return l && i.injector.get(mn).registerApplication(i.location.nativeElement, l), this._loadComponent(i), Sn() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), i
            }, e.prototype.tick = function () {
                var e = this;
                if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                var n = t._tickScope();
                try {
                    this._runningTick = !0, this._views.forEach(function (e) {
                        return e.detectChanges()
                    }), this._enforceNoNewChanges && this._views.forEach(function (e) {
                        return e.checkNoChanges()
                    })
                } catch (t) {
                    this._zone.runOutsideAngular(function () {
                        return e._exceptionHandler.handleError(t)
                    })
                } finally {
                    this._runningTick = !1, un(n)
                }
            }, e.prototype.attachView = function (e) {
                var t = e;
                this._views.push(t), t.attachToAppRef(this)
            }, e.prototype.detachView = function (e) {
                var t = e;
                In(this._views, t), t.detachFromAppRef()
            }, e.prototype._loadComponent = function (e) {
                this.attachView(e.hostView), this.tick(), this.components.push(e), this._injector.get(Ht, []).concat(this._bootstrapListeners).forEach(function (t) {
                    return t(e)
                })
            }, e.prototype._unloadComponent = function (e) {
                this.detachView(e.hostView), In(this.components, e)
            }, e.prototype.ngOnDestroy = function () {
                this._views.slice().forEach(function (e) {
                    return e.destroy()
                })
            }, Object.defineProperty(e.prototype, "viewCount", {
                get: function () {
                    return this._views.length
                }, enumerable: !0, configurable: !0
            }), e._tickScope = ln("ApplicationRef#tick()"), e
        }();

        function In(e, t) {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }

        var An = function () {
        }, Nn = function (e) {
            return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e
        }({}), Rn = function () {
        }, Mn = function (e) {
            this.nativeElement = e
        }, Dn = function () {
        }, jn = function () {
            function e() {
                this.dirty = !0, this._results = [], this.changes = new an, this.length = 0
            }

            return e.prototype.map = function (e) {
                return this._results.map(e)
            }, e.prototype.filter = function (e) {
                return this._results.filter(e)
            }, e.prototype.find = function (e) {
                return this._results.find(e)
            }, e.prototype.reduce = function (e, t) {
                return this._results.reduce(e, t)
            }, e.prototype.forEach = function (e) {
                this._results.forEach(e)
            }, e.prototype.some = function (e) {
                return this._results.some(e)
            }, e.prototype.toArray = function () {
                return this._results.slice()
            }, e.prototype[Re()] = function () {
                return this._results[Re()]()
            }, e.prototype.toString = function () {
                return this._results.toString()
            }, e.prototype.reset = function (e) {
                this._results = function e(t) {
                    return t.reduce(function (t, n) {
                        var r = Array.isArray(n) ? e(n) : n;
                        return t.concat(r)
                    }, [])
                }(e), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
            }, e.prototype.notifyOnChanges = function () {
                this.changes.emit(this)
            }, e.prototype.setDirty = function () {
                this.dirty = !0
            }, e.prototype.destroy = function () {
                this.changes.complete(), this.changes.unsubscribe()
            }, e
        }(), Ln = function () {
        }, Vn = {factoryPathPrefix: "", factoryPathSuffix: ".ngfactory"}, Un = function () {
            function e(e, t) {
                this._compiler = e, this._config = t || Vn
            }

            return e.prototype.load = function (e) {
                return this._compiler instanceof Bt ? this.loadFactory(e) : this.loadAndCompile(e)
            }, e.prototype.loadAndCompile = function (e) {
                var t = this, r = c(e.split("#"), 2), o = r[0], i = r[1];
                return void 0 === i && (i = "default"), n("crnd")(o).then(function (e) {
                    return e[i]
                }).then(function (e) {
                    return Hn(e, o, i)
                }).then(function (e) {
                    return t._compiler.compileModuleAsync(e)
                })
            }, e.prototype.loadFactory = function (e) {
                var t = c(e.split("#"), 2), r = t[0], o = t[1], i = "NgFactory";
                return void 0 === o && (o = "default", i = ""), n("crnd")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(function (e) {
                    return e[o + i]
                }).then(function (e) {
                    return Hn(e, r, o)
                })
            }, l([u(1, He())], e)
        }();

        function Hn(e, t, n) {
            if (!e) throw new Error("Cannot find '" + n + "' in '" + t + "'");
            return e
        }

        var Fn = function () {
        }, zn = function () {
        }, Bn = function () {
        }, qn = function () {
            function e(e, t, n) {
                this._debugContext = n, this.nativeNode = e, t && t instanceof Zn ? t.addChild(this) : this.parent = null, this.listeners = []
            }

            return Object.defineProperty(e.prototype, "injector", {
                get: function () {
                    return this._debugContext.injector
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "componentInstance", {
                get: function () {
                    return this._debugContext.component
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "context", {
                get: function () {
                    return this._debugContext.context
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "references", {
                get: function () {
                    return this._debugContext.references
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "providerTokens", {
                get: function () {
                    return this._debugContext.providerTokens
                }, enumerable: !0, configurable: !0
            }), e
        }(), Zn = function (e) {
            function t(t, n, r) {
                var o = e.call(this, t, n, r) || this;
                return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], o.nativeElement = t, o
            }

            return o(t, e), t.prototype.addChild = function (e) {
                e && (this.childNodes.push(e), e.parent = this)
            }, t.prototype.removeChild = function (e) {
                var t = this.childNodes.indexOf(e);
                -1 !== t && (e.parent = null, this.childNodes.splice(t, 1))
            }, t.prototype.insertChildrenAfter = function (e, t) {
                var n, r = this, o = this.childNodes.indexOf(e);
                -1 !== o && ((n = this.childNodes).splice.apply(n, p([o + 1, 0], t)), t.forEach(function (e) {
                    e.parent && e.parent.removeChild(e), e.parent = r
                }))
            }, t.prototype.insertBefore = function (e, t) {
                var n = this.childNodes.indexOf(e);
                -1 === n ? this.addChild(t) : (t.parent && t.parent.removeChild(t), t.parent = this, this.childNodes.splice(n, 0, t))
            }, t.prototype.query = function (e) {
                return this.queryAll(e)[0] || null
            }, t.prototype.queryAll = function (e) {
                var t = [];
                return function e(t, n, r) {
                    t.childNodes.forEach(function (t) {
                        t instanceof Zn && (n(t) && r.push(t), e(t, n, r))
                    })
                }(this, e, t), t
            }, t.prototype.queryAllNodes = function (e) {
                var t = [];
                return function e(t, n, r) {
                    t instanceof Zn && t.childNodes.forEach(function (t) {
                        n(t) && r.push(t), t instanceof Zn && e(t, n, r)
                    })
                }(this, e, t), t
            }, Object.defineProperty(t.prototype, "children", {
                get: function () {
                    return this.childNodes.filter(function (e) {
                        return e instanceof t
                    })
                }, enumerable: !0, configurable: !0
            }), t.prototype.triggerEventHandler = function (e, t) {
                this.listeners.forEach(function (n) {
                    n.name == e && n.callback(t)
                })
            }, t
        }(qn), Qn = new Map;

        function Gn(e) {
            return Qn.get(e) || null
        }

        function Wn(e) {
            Qn.set(e.nativeNode, e)
        }

        function Kn(e, t) {
            var n = $n(e), r = $n(t);
            return n && r ? function (e, t, n) {
                for (var r = e[Re()](), o = t[Re()](); ;) {
                    var i = r.next(), l = o.next();
                    if (i.done && l.done) return !0;
                    if (i.done || l.done) return !1;
                    if (!n(i.value, l.value)) return !1
                }
            }(e, t, Kn) : !(n || !e || "object" != typeof e && "function" != typeof e || r || !t || "object" != typeof t && "function" != typeof t) || De(e, t)
        }

        var Yn = function () {
            function e(e) {
                this.wrapped = e
            }

            return e.wrap = function (t) {
                return new e(t)
            }, e.unwrap = function (t) {
                return e.isWrapped(t) ? t.wrapped : t
            }, e.isWrapped = function (t) {
                return t instanceof e
            }, e
        }(), Jn = function () {
            function e(e, t, n) {
                this.previousValue = e, this.currentValue = t, this.firstChange = n
            }

            return e.prototype.isFirstChange = function () {
                return this.firstChange
            }, e
        }();

        function $n(e) {
            return !!Xn(e) && (Array.isArray(e) || !(e instanceof Map) && Re() in e)
        }

        function Xn(e) {
            return null !== e && ("function" == typeof e || "object" == typeof e)
        }

        var er = function () {
            function e() {
            }

            return e.prototype.supports = function (e) {
                return $n(e)
            }, e.prototype.create = function (e) {
                return new nr(e)
            }, e
        }(), tr = function (e, t) {
            return t
        }, nr = function () {
            function e(e) {
                this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = e || tr
            }

            return e.prototype.forEachItem = function (e) {
                var t;
                for (t = this._itHead; null !== t; t = t._next) e(t)
            }, e.prototype.forEachOperation = function (e) {
                for (var t = this._itHead, n = this._removalsHead, r = 0, o = null; t || n;) {
                    var i = !n || t && t.currentIndex < lr(n, r, o) ? t : n, l = lr(i, r, o), u = i.currentIndex;
                    if (i === n) r--, n = n._nextRemoved; else if (t = t._next, null == i.previousIndex) r++; else {
                        o || (o = []);
                        var a = l - r, s = u - r;
                        if (a != s) {
                            for (var c = 0; c < a; c++) {
                                var p = c < o.length ? o[c] : o[c] = 0, f = p + c;
                                s <= f && f < a && (o[c] = p + 1)
                            }
                            o[i.previousIndex] = s - a
                        }
                    }
                    l !== u && e(i, l, u)
                }
            }, e.prototype.forEachPreviousItem = function (e) {
                var t;
                for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t)
            }, e.prototype.forEachAddedItem = function (e) {
                var t;
                for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
            }, e.prototype.forEachMovedItem = function (e) {
                var t;
                for (t = this._movesHead; null !== t; t = t._nextMoved) e(t)
            }, e.prototype.forEachRemovedItem = function (e) {
                var t;
                for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
            }, e.prototype.forEachIdentityChange = function (e) {
                var t;
                for (t = this._identityChangesHead; null !== t; t = t._nextIdentityChange) e(t)
            }, e.prototype.diff = function (e) {
                if (null == e && (e = []), !$n(e)) throw new Error("Error trying to diff '" + je(e) + "'. Only arrays and iterables are allowed");
                return this.check(e) ? this : null
            }, e.prototype.onDestroy = function () {
            }, e.prototype.check = function (e) {
                var t = this;
                this._reset();
                var n, r, o, i = this._itHead, l = !1;
                if (Array.isArray(e)) {
                    this.length = e.length;
                    for (var u = 0; u < this.length; u++) o = this._trackByFn(u, r = e[u]), null !== i && De(i.trackById, o) ? (l && (i = this._verifyReinsertion(i, r, o, u)), De(i.item, r) || this._addIdentityChange(i, r)) : (i = this._mismatch(i, r, o, u), l = !0), i = i._next
                } else n = 0, function (e, t) {
                    if (Array.isArray(e)) for (var n = 0; n < e.length; n++) t(e[n]); else for (var r = e[Re()](), o = void 0; !(o = r.next()).done;) t(o.value)
                }(e, function (e) {
                    o = t._trackByFn(n, e), null !== i && De(i.trackById, o) ? (l && (i = t._verifyReinsertion(i, e, o, n)), De(i.item, e) || t._addIdentityChange(i, e)) : (i = t._mismatch(i, e, o, n), l = !0), i = i._next, n++
                }), this.length = n;
                return this._truncate(i), this.collection = e, this.isDirty
            }, Object.defineProperty(e.prototype, "isDirty", {
                get: function () {
                    return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                }, enumerable: !0, configurable: !0
            }), e.prototype._reset = function () {
                if (this.isDirty) {
                    var e = void 0, t = void 0;
                    for (e = this._previousItHead = this._itHead; null !== e; e = e._next) e._nextPrevious = e._next;
                    for (e = this._additionsHead; null !== e; e = e._nextAdded) e.previousIndex = e.currentIndex;
                    for (this._additionsHead = this._additionsTail = null, e = this._movesHead; null !== e; e = t) e.previousIndex = e.currentIndex, t = e._nextMoved;
                    this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                }
            }, e.prototype._mismatch = function (e, t, n, r) {
                var o;
                return null === e ? o = this._itTail : (o = e._prev, this._remove(e)), null !== (e = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (De(e.item, t) || this._addIdentityChange(e, t), this._moveAfter(e, o, r)) : null !== (e = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (De(e.item, t) || this._addIdentityChange(e, t), this._reinsertAfter(e, o, r)) : e = this._addAfter(new rr(t, n), o, r), e
            }, e.prototype._verifyReinsertion = function (e, t, n, r) {
                var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                return null !== o ? e = this._reinsertAfter(o, e._prev, r) : e.currentIndex != r && (e.currentIndex = r, this._addToMoves(e, r)), e
            }, e.prototype._truncate = function (e) {
                for (; null !== e;) {
                    var t = e._next;
                    this._addToRemovals(this._unlink(e)), e = t
                }
                null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
            }, e.prototype._reinsertAfter = function (e, t, n) {
                null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
                var r = e._prevRemoved, o = e._nextRemoved;
                return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(e, t, n), this._addToMoves(e, n), e
            }, e.prototype._moveAfter = function (e, t, n) {
                return this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e
            }, e.prototype._addAfter = function (e, t, n) {
                return this._insertAfter(e, t, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = e : this._additionsTail._nextAdded = e, e
            }, e.prototype._insertAfter = function (e, t, n) {
                var r = null === t ? this._itHead : t._next;
                return e._next = r, e._prev = t, null === r ? this._itTail = e : r._prev = e, null === t ? this._itHead = e : t._next = e, null === this._linkedRecords && (this._linkedRecords = new ir), this._linkedRecords.put(e), e.currentIndex = n, e
            }, e.prototype._remove = function (e) {
                return this._addToRemovals(this._unlink(e))
            }, e.prototype._unlink = function (e) {
                null !== this._linkedRecords && this._linkedRecords.remove(e);
                var t = e._prev, n = e._next;
                return null === t ? this._itHead = n : t._next = n, null === n ? this._itTail = t : n._prev = t, e
            }, e.prototype._addToMoves = function (e, t) {
                return e.previousIndex === t ? e : (this._movesTail = null === this._movesTail ? this._movesHead = e : this._movesTail._nextMoved = e, e)
            }, e.prototype._addToRemovals = function (e) {
                return null === this._unlinkedRecords && (this._unlinkedRecords = new ir), this._unlinkedRecords.put(e), e.currentIndex = null, e._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = e, e._prevRemoved = null) : (e._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = e), e
            }, e.prototype._addIdentityChange = function (e, t) {
                return e.item = t, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = e : this._identityChangesTail._nextIdentityChange = e, e
            }, e
        }(), rr = function (e, t) {
            this.item = e, this.trackById = t, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
        }, or = function () {
            function e() {
                this._head = null, this._tail = null
            }

            return e.prototype.add = function (e) {
                null === this._head ? (this._head = this._tail = e, e._nextDup = null, e._prevDup = null) : (this._tail._nextDup = e, e._prevDup = this._tail, e._nextDup = null, this._tail = e)
            }, e.prototype.get = function (e, t) {
                var n;
                for (n = this._head; null !== n; n = n._nextDup) if ((null === t || t <= n.currentIndex) && De(n.trackById, e)) return n;
                return null
            }, e.prototype.remove = function (e) {
                var t = e._prevDup, n = e._nextDup;
                return null === t ? this._head = n : t._nextDup = n, null === n ? this._tail = t : n._prevDup = t, null === this._head
            }, e
        }(), ir = function () {
            function e() {
                this.map = new Map
            }

            return e.prototype.put = function (e) {
                var t = e.trackById, n = this.map.get(t);
                n || (n = new or, this.map.set(t, n)), n.add(e)
            }, e.prototype.get = function (e, t) {
                var n = this.map.get(e);
                return n ? n.get(e, t) : null
            }, e.prototype.remove = function (e) {
                var t = e.trackById;
                return this.map.get(t).remove(e) && this.map.delete(t), e
            }, Object.defineProperty(e.prototype, "isEmpty", {
                get: function () {
                    return 0 === this.map.size
                }, enumerable: !0, configurable: !0
            }), e.prototype.clear = function () {
                this.map.clear()
            }, e
        }();

        function lr(e, t, n) {
            var r = e.previousIndex;
            if (null === r) return r;
            var o = 0;
            return n && r < n.length && (o = n[r]), r + t + o
        }

        var ur = function () {
                function e() {
                }

                return e.prototype.supports = function (e) {
                    return e instanceof Map || Xn(e)
                }, e.prototype.create = function () {
                    return new ar
                }, e
            }(), ar = function () {
                function e() {
                    this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                }

                return Object.defineProperty(e.prototype, "isDirty", {
                    get: function () {
                        return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                    }, enumerable: !0, configurable: !0
                }), e.prototype.forEachItem = function (e) {
                    var t;
                    for (t = this._mapHead; null !== t; t = t._next) e(t)
                }, e.prototype.forEachPreviousItem = function (e) {
                    var t;
                    for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t)
                }, e.prototype.forEachChangedItem = function (e) {
                    var t;
                    for (t = this._changesHead; null !== t; t = t._nextChanged) e(t)
                }, e.prototype.forEachAddedItem = function (e) {
                    var t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t)
                }, e.prototype.forEachRemovedItem = function (e) {
                    var t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t)
                }, e.prototype.diff = function (e) {
                    if (e) {
                        if (!(e instanceof Map || Xn(e))) throw new Error("Error trying to diff '" + je(e) + "'. Only maps and objects are allowed")
                    } else e = new Map;
                    return this.check(e) ? this : null
                }, e.prototype.onDestroy = function () {
                }, e.prototype.check = function (e) {
                    var t = this;
                    this._reset();
                    var n = this._mapHead;
                    if (this._appendAfter = null, this._forEach(e, function (e, r) {
                        if (n && n.key === r) t._maybeAddToChanges(n, e), t._appendAfter = n, n = n._next; else {
                            var o = t._getOrCreateRecordForKey(r, e);
                            n = t._insertBeforeOrAppend(n, o)
                        }
                    }), n) {
                        n._prev && (n._prev._next = null), this._removalsHead = n;
                        for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                    }
                    return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                }, e.prototype._insertBeforeOrAppend = function (e, t) {
                    if (e) {
                        var n = e._prev;
                        return t._next = e, t._prev = n, e._prev = t, n && (n._next = t), e === this._mapHead && (this._mapHead = t), this._appendAfter = e, e
                    }
                    return this._appendAfter ? (this._appendAfter._next = t, t._prev = this._appendAfter) : this._mapHead = t, this._appendAfter = t, null
                }, e.prototype._getOrCreateRecordForKey = function (e, t) {
                    if (this._records.has(e)) {
                        var n = this._records.get(e);
                        this._maybeAddToChanges(n, t);
                        var r = n._prev, o = n._next;
                        return r && (r._next = o), o && (o._prev = r), n._next = null, n._prev = null, n
                    }
                    var i = new sr(e);
                    return this._records.set(e, i), i.currentValue = t, this._addToAdditions(i), i
                }, e.prototype._reset = function () {
                    if (this.isDirty) {
                        var e = void 0;
                        for (this._previousMapHead = this._mapHead, e = this._previousMapHead; null !== e; e = e._next) e._nextPrevious = e._next;
                        for (e = this._changesHead; null !== e; e = e._nextChanged) e.previousValue = e.currentValue;
                        for (e = this._additionsHead; null != e; e = e._nextAdded) e.previousValue = e.currentValue;
                        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                    }
                }, e.prototype._maybeAddToChanges = function (e, t) {
                    De(t, e.currentValue) || (e.previousValue = e.currentValue, e.currentValue = t, this._addToChanges(e))
                }, e.prototype._addToAdditions = function (e) {
                    null === this._additionsHead ? this._additionsHead = this._additionsTail = e : (this._additionsTail._nextAdded = e, this._additionsTail = e)
                }, e.prototype._addToChanges = function (e) {
                    null === this._changesHead ? this._changesHead = this._changesTail = e : (this._changesTail._nextChanged = e, this._changesTail = e)
                }, e.prototype._forEach = function (e, t) {
                    e instanceof Map ? e.forEach(t) : Object.keys(e).forEach(function (n) {
                        return t(e[n], n)
                    })
                }, e
            }(), sr = function (e) {
                this.key = e, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
            }, cr = function () {
                function e(e) {
                    this.factories = e
                }

                return e.create = function (t, n) {
                    if (null != n) {
                        var r = n.factories.slice();
                        t = t.concat(r)
                    }
                    return new e(t)
                }, e.extend = function (t) {
                    return {
                        provide: e, useFactory: function (n) {
                            if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                            return e.create(t, n)
                        }, deps: [[e, new ze, new He]]
                    }
                }, e.prototype.find = function (e) {
                    var t, n = this.factories.find(function (t) {
                        return t.supports(e)
                    });
                    if (null != n) return n;
                    throw new Error("Cannot find a differ supporting object '" + e + "' of type '" + ((t = e).name || typeof t) + "'")
                }, e.ngInjectableDef = ye({
                    providedIn: "root", factory: function () {
                        return new e([new er])
                    }
                }), e
            }(), pr = function () {
                function e(e) {
                    this.factories = e
                }

                return e.create = function (t, n) {
                    if (n) {
                        var r = n.factories.slice();
                        t = t.concat(r)
                    }
                    return new e(t)
                }, e.extend = function (t) {
                    return {
                        provide: e, useFactory: function (n) {
                            if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                            return e.create(t, n)
                        }, deps: [[e, new ze, new He]]
                    }
                }, e.prototype.find = function (e) {
                    var t = this.factories.find(function (t) {
                        return t.supports(e)
                    });
                    if (t) return t;
                    throw new Error("Cannot find a differ supporting object '" + e + "'")
                }, e
            }(), fr = [new ur], dr = new cr([new er]), hr = new pr(fr),
            gr = En(null, "core", [{provide: Ut, useValue: "unknown"}, {provide: Pn, deps: [We]}, {
                provide: mn,
                deps: []
            }, {provide: Ft, deps: []}]), vr = new me("LocaleId");

        function yr() {
            return dr
        }

        function mr() {
            return hr
        }

        function br(e) {
            return e || "en-US"
        }

        var _r = function (e) {
            }, wr = function () {
                function e(e) {
                    if (this.defaultDoc = e, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                        var t = this.inertDocument.createElement("html");
                        this.inertDocument.appendChild(t), this.inertBodyElement = this.inertDocument.createElement("body"), t.appendChild(this.inertBodyElement)
                    }
                    this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function () {
                        try {
                            return !!window.DOMParser
                        } catch (e) {
                            return !1
                        }
                    }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
                }

                return e.prototype.getInertBodyElement_XHR = function (e) {
                    e = "<body><remove></remove>" + e + "</body>";
                    try {
                        e = encodeURI(e)
                    } catch (e) {
                        return null
                    }
                    var t = new XMLHttpRequest;
                    t.responseType = "document", t.open("GET", "data:text/html;charset=utf-8," + e, !1), t.send(null);
                    var n = t.response.body;
                    return n.removeChild(n.firstChild), n
                }, e.prototype.getInertBodyElement_DOMParser = function (e) {
                    e = "<body><remove></remove>" + e + "</body>";
                    try {
                        var t = (new window.DOMParser).parseFromString(e, "text/html").body;
                        return t.removeChild(t.firstChild), t
                    } catch (e) {
                        return null
                    }
                }, e.prototype.getInertBodyElement_InertDocument = function (e) {
                    var t = this.inertDocument.createElement("template");
                    return "content" in t ? (t.innerHTML = e, t) : (this.inertBodyElement.innerHTML = e, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement)
                }, e.prototype.stripCustomNsAttrs = function (e) {
                    for (var t = e.attributes, n = t.length - 1; 0 < n; n--) {
                        var r = t.item(n).name;
                        "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || e.removeAttribute(r)
                    }
                    for (var o = e.firstChild; o;) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), o = o.nextSibling
                }, e
            }(), Cr = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            Sr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

        function xr(e) {
            return (e = String(e)).match(Cr) || e.match(Sr) ? e : (Sn() && console.warn("WARNING: sanitizing unsafe URL value " + e + " (see http://g.co/ng/security#xss)"), "unsafe:" + e)
        }

        function Er(e) {
            var t, n, r = {};
            try {
                for (var o = s(e.split(",")), i = o.next(); !i.done; i = o.next()) r[i.value] = !0
            } catch (e) {
                t = {error: e}
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (t) throw t.error
                }
            }
            return r
        }

        function kr() {
            for (var e, t, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var o = {};
            try {
                for (var i = s(n), l = i.next(); !l.done; l = i.next()) {
                    var u = l.value;
                    for (var a in u) u.hasOwnProperty(a) && (o[a] = !0)
                }
            } catch (t) {
                e = {error: t}
            } finally {
                try {
                    l && !l.done && (t = i.return) && t.call(i)
                } finally {
                    if (e) throw e.error
                }
            }
            return o
        }

        var Pr, Tr = Er("area,br,col,hr,img,wbr"), Or = Er("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            Ir = Er("rp,rt"), Ar = kr(Ir, Or),
            Nr = kr(Tr, kr(Or, Er("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), kr(Ir, Er("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Ar),
            Rr = Er("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), Mr = Er("srcset"),
            Dr = kr(Rr, Mr, Er("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")),
            jr = function () {
                function e() {
                    this.sanitizedSomething = !1, this.buf = []
                }

                return e.prototype.sanitizeChildren = function (e) {
                    for (var t = e.firstChild; t;) if (t.nodeType === Node.ELEMENT_NODE ? this.startElement(t) : t.nodeType === Node.TEXT_NODE ? this.chars(t.nodeValue) : this.sanitizedSomething = !0, t.firstChild) t = t.firstChild; else for (; t;) {
                        t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                        var n = this.checkClobberedElement(t, t.nextSibling);
                        if (n) {
                            t = n;
                            break
                        }
                        t = this.checkClobberedElement(t, t.parentNode)
                    }
                    return this.buf.join("")
                }, e.prototype.startElement = function (e) {
                    var t = e.nodeName.toLowerCase();
                    if (Nr.hasOwnProperty(t)) {
                        this.buf.push("<"), this.buf.push(t);
                        for (var n, r = e.attributes, o = 0; o < r.length; o++) {
                            var i = r.item(o), l = i.name, u = l.toLowerCase();
                            if (Dr.hasOwnProperty(u)) {
                                var a = i.value;
                                Rr[u] && (a = xr(a)), Mr[u] && (n = a, a = (n = String(n)).split(",").map(function (e) {
                                    return xr(e.trim())
                                }).join(", ")), this.buf.push(" ", l, '="', Ur(a), '"')
                            } else this.sanitizedSomething = !0
                        }
                        this.buf.push(">")
                    } else this.sanitizedSomething = !0
                }, e.prototype.endElement = function (e) {
                    var t = e.nodeName.toLowerCase();
                    Nr.hasOwnProperty(t) && !Tr.hasOwnProperty(t) && (this.buf.push("</"), this.buf.push(t), this.buf.push(">"))
                }, e.prototype.chars = function (e) {
                    this.buf.push(Ur(e))
                }, e.prototype.checkClobberedElement = function (e, t) {
                    if (t && (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + e.outerHTML);
                    return t
                }, e
            }(), Lr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Vr = /([^\#-~ |!])/g;

        function Ur(e) {
            return e.replace(/&/g, "&amp;").replace(Lr, function (e) {
                return "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";"
            }).replace(Vr, function (e) {
                return "&#" + e.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function Hr(e) {
            return "content" in e && function (e) {
                return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            }(e) ? e.content : null
        }

        var Fr = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
            zr = /^url\(([^)]+)\)$/, Br = function (e) {
                return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e
            }({}), qr = function () {
            };

        function Zr(e, t, n) {
            var r = e.state, o = 1792 & r;
            return o === t ? (e.state = -1793 & r | n, e.initIndex = -1, !0) : o === n
        }

        function Qr(e, t, n) {
            return (1792 & e.state) === t && e.initIndex <= n && (e.initIndex = n + 1, !0)
        }

        function Gr(e, t) {
            return e.nodes[t]
        }

        function Wr(e, t) {
            return e.nodes[t]
        }

        function Kr(e, t) {
            return e.nodes[t]
        }

        function Yr(e, t) {
            return e.nodes[t]
        }

        function Jr(e, t) {
            return e.nodes[t]
        }

        var $r = {
            setCurrentNode: void 0,
            createRootView: void 0,
            createEmbeddedView: void 0,
            createComponentView: void 0,
            createNgModuleRef: void 0,
            overrideProvider: void 0,
            overrideComponentView: void 0,
            clearOverrides: void 0,
            checkAndUpdateView: void 0,
            checkNoChangesView: void 0,
            destroyView: void 0,
            resolveDep: void 0,
            createDebugContext: void 0,
            handleEvent: void 0,
            updateDirectives: void 0,
            updateRenderer: void 0,
            dirtyParentQueries: void 0
        };

        function Xr(e, t, n, r) {
            var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + t + "'. Current value: '" + n + "'.";
            return r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"), function (e, t) {
                var n = new Error(e);
                return eo(n, t), n
            }(o, e)
        }

        function eo(e, t) {
            e[ht] = t, e[vt] = t.logError.bind(t)
        }

        function to(e) {
            return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + e)
        }

        var no = function () {
        }, ro = new Map;

        function oo(e) {
            var t = ro.get(e);
            return t || (t = je(e) + "_" + ro.size, ro.set(e, t)), t
        }

        var io = "$$undefined", lo = "$$empty";

        function uo(e) {
            return {id: io, styles: e.styles, encapsulation: e.encapsulation, data: e.data}
        }

        var ao = 0;

        function so(e, t, n, r) {
            return !(!(2 & e.state) && De(e.oldValues[t.bindingIndex + n], r))
        }

        function co(e, t, n, r) {
            return !!so(e, t, n, r) && (e.oldValues[t.bindingIndex + n] = r, !0)
        }

        function po(e, t, n, r) {
            var o = e.oldValues[t.bindingIndex + n];
            if (1 & e.state || !Kn(o, r)) {
                var i = t.bindings[n].name;
                throw Xr($r.createDebugContext(e, t.nodeIndex), i + ": " + o, i + ": " + r, 0 != (1 & e.state))
            }
        }

        function fo(e) {
            for (var t = e; t;) 2 & t.def.flags && (t.state |= 8), t = t.viewContainerParent || t.parent
        }

        function ho(e, t) {
            for (var n = e; n && n !== t;) n.state |= 64, n = n.viewContainerParent || n.parent
        }

        function go(e, t, n, r) {
            try {
                return fo(33554432 & e.def.nodes[t].flags ? Wr(e, t).componentView : e), $r.handleEvent(e, t, n, r)
            } catch (t) {
                e.root.errorHandler.handleError(t)
            }
        }

        function vo(e) {
            return e.parent ? Wr(e.parent, e.parentNodeDef.nodeIndex) : null
        }

        function yo(e) {
            return e.parent ? e.parentNodeDef.parent : null
        }

        function mo(e, t) {
            switch (201347067 & t.flags) {
                case 1:
                    return Wr(e, t.nodeIndex).renderElement;
                case 2:
                    return Gr(e, t.nodeIndex).renderText
            }
        }

        function bo(e) {
            return !!e.parent && !!(32768 & e.parentNodeDef.flags)
        }

        function _o(e) {
            return !(!e.parent || 32768 & e.parentNodeDef.flags)
        }

        function wo(e) {
            var t = {}, n = 0, r = {};
            return e && e.forEach(function (e) {
                var o = c(e, 2), i = o[0], l = o[1];
                "number" == typeof i ? (t[i] = l, n |= function (e) {
                    return 1 << e % 32
                }(i)) : r[i] = l
            }), {matchedQueries: t, references: r, matchedQueryIds: n}
        }

        function Co(e, t) {
            return e.map(function (e) {
                var n, r, o;
                return Array.isArray(e) ? (o = (n = c(e, 2))[0], r = n[1]) : (o = 0, r = e), r && ("function" == typeof r || "object" == typeof r) && t && Object.defineProperty(r, Be, {
                    value: t,
                    configurable: !0
                }), {flags: o, token: r, tokenKey: oo(r)}
            })
        }

        function So(e, t, n) {
            var r = n.renderParent;
            return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === ft.Native ? Wr(e, n.renderParent.nodeIndex).renderElement : void 0 : t
        }

        var xo = new WeakMap;

        function Eo(e) {
            var t = xo.get(e);
            return t || ((t = e(function () {
                return no
            })).factory = e, xo.set(e, t)), t
        }

        function ko(e, t, n, r, o) {
            3 === t && (n = e.renderer.parentNode(mo(e, e.def.lastRenderRootNode))), Po(e, t, 0, e.def.nodes.length - 1, n, r, o)
        }

        function Po(e, t, n, r, o, i, l) {
            for (var u = n; u <= r; u++) {
                var a = e.def.nodes[u];
                11 & a.flags && Oo(e, a, t, o, i, l), u += a.childCount
            }
        }

        function To(e, t, n, r, o, i) {
            for (var l = e; l && !bo(l);) l = l.parent;
            for (var u = l.parent, a = yo(l), s = a.nodeIndex + a.childCount, c = a.nodeIndex + 1; c <= s; c++) {
                var p = u.def.nodes[c];
                p.ngContentIndex === t && Oo(u, p, n, r, o, i), c += p.childCount
            }
            if (!u.parent) {
                var f = e.root.projectableNodes[t];
                if (f) for (c = 0; c < f.length; c++) Io(e, f[c], n, r, o, i)
            }
        }

        function Oo(e, t, n, r, o, i) {
            if (8 & t.flags) To(e, t.ngContent.index, n, r, o, i); else {
                var l = mo(e, t);
                if (3 === n && 33554432 & t.flags && 48 & t.bindingFlags ? (16 & t.bindingFlags && Io(e, l, n, r, o, i), 32 & t.bindingFlags && Io(Wr(e, t.nodeIndex).componentView, l, n, r, o, i)) : Io(e, l, n, r, o, i), 16777216 & t.flags) for (var u = Wr(e, t.nodeIndex).viewContainer._embeddedViews, a = 0; a < u.length; a++) ko(u[a], n, r, o, i);
                1 & t.flags && !t.element.name && Po(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, o, i)
            }
        }

        function Io(e, t, n, r, o, i) {
            var l = e.renderer;
            switch (n) {
                case 1:
                    l.appendChild(r, t);
                    break;
                case 2:
                    l.insertBefore(r, t, o);
                    break;
                case 3:
                    l.removeChild(r, t);
                    break;
                case 0:
                    i.push(t)
            }
        }

        var Ao = /^:([^:]+):(.+)$/;

        function No(e) {
            if (":" === e[0]) {
                var t = e.match(Ao);
                return [t[1], t[2]]
            }
            return ["", e]
        }

        function Ro(e) {
            for (var t = 0, n = 0; n < e.length; n++) t |= e[n].flags;
            return t
        }

        function Mo(e, t, n, r, o, i, l, u, a, s, p, f) {
            var d;
            void 0 === l && (l = []), s || (s = no);
            var h = wo(n), g = h.matchedQueries, v = h.references, y = h.matchedQueryIds, m = null, b = null;
            i && (m = (d = c(No(i), 2))[0], b = d[1]), u = u || [];
            for (var _ = new Array(u.length), w = 0; w < u.length; w++) {
                var C = c(u[w], 3), S = C[0], x = C[2], E = c(No(C[1]), 2), k = E[0], P = E[1], T = void 0, O = void 0;
                switch (15 & S) {
                    case 4:
                        O = x;
                        break;
                    case 1:
                    case 8:
                        T = x
                }
                _[w] = {flags: S, ns: k, name: P, nonMinifiedName: P, securityContext: T, suffix: O}
            }
            a = a || [];
            var I = new Array(a.length);
            for (w = 0; w < a.length; w++) {
                var A = c(a[w], 2);
                I[w] = {type: 0, target: A[0], eventName: A[1], propName: null}
            }
            var N = (l = l || []).map(function (e) {
                var t = c(e, 2), n = t[1], r = c(No(t[0]), 2);
                return [r[0], r[1], n]
            });
            return f = function (e) {
                if (e && e.id === io) {
                    var t = null != e.encapsulation && e.encapsulation !== ft.None || e.styles.length || Object.keys(e.data).length;
                    e.id = t ? "c" + ao++ : lo
                }
                return e && e.id === lo && (e = null), e || null
            }(f), p && (t |= 33554432), {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: e,
                flags: t |= 1,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: g,
                matchedQueryIds: y,
                references: v,
                ngContentIndex: r,
                childCount: o,
                bindings: _,
                bindingFlags: Ro(_),
                outputs: I,
                element: {
                    ns: m,
                    name: b,
                    attrs: N,
                    template: null,
                    componentProvider: null,
                    componentView: p || null,
                    componentRendererType: f,
                    publicProviders: null,
                    allProviders: null,
                    handleEvent: s || no
                },
                provider: null,
                text: null,
                query: null,
                ngContent: null
            }
        }

        function Do(e, t, n) {
            var r, o = n.element, i = e.root.selectorOrNode, l = e.renderer;
            if (e.parent || !i) {
                r = o.name ? l.createElement(o.name, o.ns) : l.createComment("");
                var u = So(e, t, n);
                u && l.appendChild(u, r)
            } else r = l.selectRootElement(i);
            if (o.attrs) for (var a = 0; a < o.attrs.length; a++) {
                var s = c(o.attrs[a], 3);
                l.setAttribute(r, s[1], s[2], s[0])
            }
            return r
        }

        function jo(e, t, n, r) {
            for (var o = 0; o < n.outputs.length; o++) {
                var i = n.outputs[o], l = Lo(e, n.nodeIndex, (p = i.eventName, (c = i.target) ? c + ":" + p : p)),
                    u = i.target, a = e;
                "component" === i.target && (u = null, a = t);
                var s = a.renderer.listen(u || r, i.eventName, l);
                e.disposables[n.outputIndex + o] = s
            }
            var c, p
        }

        function Lo(e, t, n) {
            return function (r) {
                return go(e, t, n, r)
            }
        }

        function Vo(e, t, n, r) {
            if (!co(e, t, n, r)) return !1;
            var o = t.bindings[n], i = Wr(e, t.nodeIndex), l = i.renderElement, u = o.name;
            switch (15 & o.flags) {
                case 1:
                    !function (e, t, n, r, o, i) {
                        var l = t.securityContext, u = l ? e.root.sanitizer.sanitize(l, i) : i;
                        u = null != u ? u.toString() : null;
                        var a = e.renderer;
                        null != i ? a.setAttribute(n, o, u, r) : a.removeAttribute(n, o, r)
                    }(e, o, l, o.ns, u, r);
                    break;
                case 2:
                    !function (e, t, n, r) {
                        var o = e.renderer;
                        r ? o.addClass(t, n) : o.removeClass(t, n)
                    }(e, l, u, r);
                    break;
                case 4:
                    !function (e, t, n, r, o) {
                        var i = e.root.sanitizer.sanitize(Br.STYLE, o);
                        if (null != i) {
                            i = i.toString();
                            var l = t.suffix;
                            null != l && (i += l)
                        } else i = null;
                        var u = e.renderer;
                        null != i ? u.setStyle(n, r, i) : u.removeStyle(n, r)
                    }(e, o, l, u, r);
                    break;
                case 8:
                    !function (e, t, n, r, o) {
                        var i = t.securityContext, l = i ? e.root.sanitizer.sanitize(i, o) : o;
                        e.renderer.setProperty(n, r, l)
                    }(33554432 & t.flags && 32 & o.flags ? i.componentView : e, o, l, u, r)
            }
            return !0
        }

        var Uo = new Object, Ho = oo(We), Fo = oo(Qe), zo = oo(tn);

        function Bo(e, t, n, r) {
            return n = Ve(n), {index: -1, deps: Co(r, je(t)), flags: e, token: t, value: n}
        }

        function qo(e, t, n) {
            void 0 === n && (n = We.THROW_IF_NOT_FOUND);
            var r, o, i = st(e);
            try {
                if (8 & t.flags) return t.token;
                if (2 & t.flags && (n = null), 1 & t.flags) return e._parent.get(t.token, n);
                var l = t.tokenKey;
                switch (l) {
                    case Ho:
                    case Fo:
                    case zo:
                        return e
                }
                var u = e._def.providersByKey[l];
                if (u) {
                    var a = e._providers[u.index];
                    return void 0 === a && (a = e._providers[u.index] = Zo(e, u)), a === Uo ? void 0 : a
                }
                if (t.token.ngInjectableDef && (r = e, null != (o = t.token.ngInjectableDef).providedIn && (function (e, t) {
                    return e._def.modules.indexOf(o.providedIn) > -1
                }(r) || "root" === o.providedIn && r._def.isRoot))) {
                    var s = e._providers.length;
                    return e._def.providersByKey[t.tokenKey] = {
                        flags: 5120,
                        value: t.token.ngInjectableDef.factory,
                        deps: [],
                        index: s,
                        token: t.token
                    }, e._providers[s] = Uo, e._providers[s] = Zo(e, e._def.providersByKey[t.tokenKey])
                }
                return 4 & t.flags ? n : e._parent.get(t.token, n)
            } finally {
                st(i)
            }
        }

        function Zo(e, t) {
            var n;
            switch (201347067 & t.flags) {
                case 512:
                    n = function (e, t, n) {
                        var r = n.length;
                        switch (r) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(qo(e, n[0]));
                            case 2:
                                return new t(qo(e, n[0]), qo(e, n[1]));
                            case 3:
                                return new t(qo(e, n[0]), qo(e, n[1]), qo(e, n[2]));
                            default:
                                for (var o = new Array(r), i = 0; i < r; i++) o[i] = qo(e, n[i]);
                                return new (t.bind.apply(t, p([void 0], o)))
                        }
                    }(e, t.value, t.deps);
                    break;
                case 1024:
                    n = function (e, t, n) {
                        var r = n.length;
                        switch (r) {
                            case 0:
                                return t();
                            case 1:
                                return t(qo(e, n[0]));
                            case 2:
                                return t(qo(e, n[0]), qo(e, n[1]));
                            case 3:
                                return t(qo(e, n[0]), qo(e, n[1]), qo(e, n[2]));
                            default:
                                for (var o = Array(r), i = 0; i < r; i++) o[i] = qo(e, n[i]);
                                return t.apply(void 0, p(o))
                        }
                    }(e, t.value, t.deps);
                    break;
                case 2048:
                    n = qo(e, t.deps[0]);
                    break;
                case 256:
                    n = t.value
            }
            return n === Uo || null == n || "object" != typeof n || 131072 & t.flags || "function" != typeof n.ngOnDestroy || (t.flags |= 131072), void 0 === n ? Uo : n
        }

        function Qo(e, t) {
            var n = e.viewContainer._embeddedViews;
            if ((null == t || t >= n.length) && (t = n.length - 1), t < 0) return null;
            var r = n[t];
            return r.viewContainerParent = null, Yo(n, t), $r.dirtyParentQueries(r), Wo(r), r
        }

        function Go(e, t, n) {
            var r = t ? mo(t, t.def.lastRenderRootNode) : e.renderElement;
            ko(n, 2, n.renderer.parentNode(r), n.renderer.nextSibling(r), void 0)
        }

        function Wo(e) {
            ko(e, 3, null, null, void 0)
        }

        function Ko(e, t, n) {
            t >= e.length ? e.push(n) : e.splice(t, 0, n)
        }

        function Yo(e, t) {
            t >= e.length - 1 ? e.pop() : e.splice(t, 1)
        }

        var Jo = new Object;

        function $o(e, t, n, r, o, i) {
            return new Xo(e, t, n, r, o, i)
        }

        var Xo = function (e) {
            function t(t, n, r, o, i, l) {
                var u = e.call(this) || this;
                return u.selector = t, u.componentType = n, u._inputs = o, u._outputs = i, u.ngContentSelectors = l, u.viewDefFactory = r, u
            }

            return o(t, e), Object.defineProperty(t.prototype, "inputs", {
                get: function () {
                    var e = [], t = this._inputs;
                    for (var n in t) e.push({propName: n, templateName: t[n]});
                    return e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "outputs", {
                get: function () {
                    var e = [];
                    for (var t in this._outputs) e.push({propName: t, templateName: this._outputs[t]});
                    return e
                }, enumerable: !0, configurable: !0
            }), t.prototype.create = function (e, t, n, r) {
                if (!r) throw new Error("ngModule should be provided");
                var o = Eo(this.viewDefFactory), i = o.nodes[0].element.componentProvider.nodeIndex,
                    l = $r.createRootView(e, t || [], n, o, r, Jo), u = Kr(l, i).instance;
                return n && l.renderer.setAttribute(Wr(l, 0).renderElement, "ng-version", dt.full), new ei(l, new oi(l), u)
            }, t
        }(Qt), ei = function (e) {
            function t(t, n, r) {
                var o = e.call(this) || this;
                return o._view = t, o._viewRef = n, o._component = r, o._elDef = o._view.def.nodes[0], o.hostView = n, o.changeDetectorRef = n, o.instance = r, o
            }

            return o(t, e), Object.defineProperty(t.prototype, "location", {
                get: function () {
                    return new Mn(Wr(this._view, this._elDef.nodeIndex).renderElement)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "injector", {
                get: function () {
                    return new ai(this._view, this._elDef)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "componentType", {
                get: function () {
                    return this._component.constructor
                }, enumerable: !0, configurable: !0
            }), t.prototype.destroy = function () {
                this._viewRef.destroy()
            }, t.prototype.onDestroy = function (e) {
                this._viewRef.onDestroy(e)
            }, t
        }(Zt);

        function ti(e, t, n) {
            return new ni(e, t, n)
        }

        var ni = function () {
            function e(e, t, n) {
                this._view = e, this._elDef = t, this._data = n, this._embeddedViews = []
            }

            return Object.defineProperty(e.prototype, "element", {
                get: function () {
                    return new Mn(this._data.renderElement)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "injector", {
                get: function () {
                    return new ai(this._view, this._elDef)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "parentInjector", {
                get: function () {
                    for (var e = this._view, t = this._elDef.parent; !t && e;) t = yo(e), e = e.parent;
                    return e ? new ai(e, t) : new ai(this._view, null)
                }, enumerable: !0, configurable: !0
            }), e.prototype.clear = function () {
                for (var e = this._embeddedViews.length - 1; e >= 0; e--) {
                    var t = Qo(this._data, e);
                    $r.destroyView(t)
                }
            }, e.prototype.get = function (e) {
                var t = this._embeddedViews[e];
                if (t) {
                    var n = new oi(t);
                    return n.attachToViewContainerRef(this), n
                }
                return null
            }, Object.defineProperty(e.prototype, "length", {
                get: function () {
                    return this._embeddedViews.length
                }, enumerable: !0, configurable: !0
            }), e.prototype.createEmbeddedView = function (e, t, n) {
                var r = e.createEmbeddedView(t || {});
                return this.insert(r, n), r
            }, e.prototype.createComponent = function (e, t, n, r, o) {
                var i = n || this.parentInjector;
                o || e instanceof en || (o = i.get(tn));
                var l = e.create(i, r, void 0, o);
                return this.insert(l.hostView, t), l
            }, e.prototype.insert = function (e, t) {
                if (e.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                var n, r, o, i, l = e;
                return o = l._view, i = (n = this._data).viewContainer._embeddedViews, null !== (r = t) && void 0 !== r || (r = i.length), o.viewContainerParent = this._view, Ko(i, r, o), function (e, t) {
                    var n = vo(t);
                    if (n && n !== e && !(16 & t.state)) {
                        t.state |= 16;
                        var r = n.template._projectedViews;
                        r || (r = n.template._projectedViews = []), r.push(t), function (e, n) {
                            if (!(4 & n.flags)) {
                                t.parent.def.nodeFlags |= 4, n.flags |= 4;
                                for (var r = n.parent; r;) r.childFlags |= 4, r = r.parent
                            }
                        }(0, t.parentNodeDef)
                    }
                }(n, o), $r.dirtyParentQueries(o), Go(n, r > 0 ? i[r - 1] : null, o), l.attachToViewContainerRef(this), e
            }, e.prototype.move = function (e, t) {
                if (e.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                var n, r, o, i, l, u = this._embeddedViews.indexOf(e._view);
                return o = t, l = (i = (n = this._data).viewContainer._embeddedViews)[r = u], Yo(i, r), null == o && (o = i.length), Ko(i, o, l), $r.dirtyParentQueries(l), Wo(l), Go(n, o > 0 ? i[o - 1] : null, l), e
            }, e.prototype.indexOf = function (e) {
                return this._embeddedViews.indexOf(e._view)
            }, e.prototype.remove = function (e) {
                var t = Qo(this._data, e);
                t && $r.destroyView(t)
            }, e.prototype.detach = function (e) {
                var t = Qo(this._data, e);
                return t ? new oi(t) : null
            }, e
        }();

        function ri(e) {
            return new oi(e)
        }

        var oi = function () {
            function e(e) {
                this._view = e, this._viewContainerRef = null, this._appRef = null
            }

            return Object.defineProperty(e.prototype, "rootNodes", {
                get: function () {
                    return ko(this._view, 0, void 0, void 0, e = []), e;
                    var e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "context", {
                get: function () {
                    return this._view.context
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "destroyed", {
                get: function () {
                    return 0 != (128 & this._view.state)
                }, enumerable: !0, configurable: !0
            }), e.prototype.markForCheck = function () {
                fo(this._view)
            }, e.prototype.detach = function () {
                this._view.state &= -5
            }, e.prototype.detectChanges = function () {
                var e = this._view.root.rendererFactory;
                e.begin && e.begin();
                try {
                    $r.checkAndUpdateView(this._view)
                } finally {
                    e.end && e.end()
                }
            }, e.prototype.checkNoChanges = function () {
                $r.checkNoChangesView(this._view)
            }, e.prototype.reattach = function () {
                this._view.state |= 4
            }, e.prototype.onDestroy = function (e) {
                this._view.disposables || (this._view.disposables = []), this._view.disposables.push(e)
            }, e.prototype.destroy = function () {
                this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), $r.destroyView(this._view)
            }, e.prototype.detachFromAppRef = function () {
                this._appRef = null, Wo(this._view), $r.dirtyParentQueries(this._view)
            }, e.prototype.attachToAppRef = function (e) {
                if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                this._appRef = e
            }, e.prototype.attachToViewContainerRef = function (e) {
                if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                this._viewContainerRef = e
            }, e
        }();

        function ii(e, t) {
            return new li(e, t)
        }

        var li = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return r._parentView = t, r._def = n, r
            }

            return o(t, e), t.prototype.createEmbeddedView = function (e) {
                return new oi($r.createEmbeddedView(this._parentView, this._def, this._def.element.template, e))
            }, Object.defineProperty(t.prototype, "elementRef", {
                get: function () {
                    return new Mn(Wr(this._parentView, this._def.nodeIndex).renderElement)
                }, enumerable: !0, configurable: !0
            }), t
        }(Fn);

        function ui(e, t) {
            return new ai(e, t)
        }

        var ai = function () {
            function e(e, t) {
                this.view = e, this.elDef = t
            }

            return e.prototype.get = function (e, t) {
                return void 0 === t && (t = We.THROW_IF_NOT_FOUND), $r.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), {
                    flags: 0,
                    token: e,
                    tokenKey: oo(e)
                }, t)
            }, e
        }();

        function si(e, t) {
            var n = e.def.nodes[t];
            if (1 & n.flags) {
                var r = Wr(e, n.nodeIndex);
                return n.element.template ? r.template : r.renderElement
            }
            if (2 & n.flags) return Gr(e, n.nodeIndex).renderText;
            if (20240 & n.flags) return Kr(e, n.nodeIndex).instance;
            throw new Error("Illegal state: read nodeValue for node index " + t)
        }

        function ci(e) {
            return new pi(e.renderer)
        }

        var pi = function () {
            function e(e) {
                this.delegate = e
            }

            return e.prototype.selectRootElement = function (e) {
                return this.delegate.selectRootElement(e)
            }, e.prototype.createElement = function (e, t) {
                var n = c(No(t), 2), r = this.delegate.createElement(n[1], n[0]);
                return e && this.delegate.appendChild(e, r), r
            }, e.prototype.createViewRoot = function (e) {
                return e
            }, e.prototype.createTemplateAnchor = function (e) {
                var t = this.delegate.createComment("");
                return e && this.delegate.appendChild(e, t), t
            }, e.prototype.createText = function (e, t) {
                var n = this.delegate.createText(t);
                return e && this.delegate.appendChild(e, n), n
            }, e.prototype.projectNodes = function (e, t) {
                for (var n = 0; n < t.length; n++) this.delegate.appendChild(e, t[n])
            }, e.prototype.attachViewAfter = function (e, t) {
                for (var n = this.delegate.parentNode(e), r = this.delegate.nextSibling(e), o = 0; o < t.length; o++) this.delegate.insertBefore(n, t[o], r)
            }, e.prototype.detachView = function (e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t], r = this.delegate.parentNode(n);
                    this.delegate.removeChild(r, n)
                }
            }, e.prototype.destroyView = function (e, t) {
                for (var n = 0; n < t.length; n++) this.delegate.destroyNode(t[n])
            }, e.prototype.listen = function (e, t, n) {
                return this.delegate.listen(e, t, n)
            }, e.prototype.listenGlobal = function (e, t, n) {
                return this.delegate.listen(e, t, n)
            }, e.prototype.setElementProperty = function (e, t, n) {
                this.delegate.setProperty(e, t, n)
            }, e.prototype.setElementAttribute = function (e, t, n) {
                var r = c(No(t), 2), o = r[0], i = r[1];
                null != n ? this.delegate.setAttribute(e, i, n, o) : this.delegate.removeAttribute(e, i, o)
            }, e.prototype.setBindingDebugInfo = function (e, t, n) {
            }, e.prototype.setElementClass = function (e, t, n) {
                n ? this.delegate.addClass(e, t) : this.delegate.removeClass(e, t)
            }, e.prototype.setElementStyle = function (e, t, n) {
                null != n ? this.delegate.setStyle(e, t, n) : this.delegate.removeStyle(e, t)
            }, e.prototype.invokeElementMethod = function (e, t, n) {
                e[t].apply(e, n)
            }, e.prototype.setText = function (e, t) {
                this.delegate.setValue(e, t)
            }, e.prototype.animate = function () {
                throw new Error("Renderer.animate is no longer supported!")
            }, e
        }();

        function fi(e, t, n, r) {
            return new di(e, t, n, r)
        }

        var di = function () {
            function e(e, t, n, r) {
                this._moduleType = e, this._parent = t, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this, function (e) {
                    for (var t = e._def, n = e._providers = new Array(t.providers.length), r = 0; r < t.providers.length; r++) {
                        var o = t.providers[r];
                        4096 & o.flags || void 0 === n[r] && (n[r] = Zo(e, o))
                    }
                }(this)
            }

            return e.prototype.get = function (e, t, n) {
                void 0 === t && (t = We.THROW_IF_NOT_FOUND), void 0 === n && (n = 0);
                var r = 0;
                return 4 & n ? r |= 1 : 2 & n && (r |= 4), qo(this, {token: e, tokenKey: oo(e), flags: r}, t)
            }, Object.defineProperty(e.prototype, "instance", {
                get: function () {
                    return this.get(this._moduleType)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "componentFactoryResolver", {
                get: function () {
                    return this.get($t)
                }, enumerable: !0, configurable: !0
            }), e.prototype.destroy = function () {
                if (this._destroyed) throw new Error("The ng module " + je(this.instance.constructor) + " has already been destroyed.");
                this._destroyed = !0, function (e, t) {
                    for (var n = e._def, r = new Set, o = 0; o < n.providers.length; o++) if (131072 & n.providers[o].flags) {
                        var i = e._providers[o];
                        if (i && i !== Uo) {
                            var l = i.ngOnDestroy;
                            "function" != typeof l || r.has(i) || (l.apply(i), r.add(i))
                        }
                    }
                }(this), this._destroyListeners.forEach(function (e) {
                    return e()
                })
            }, e.prototype.onDestroy = function (e) {
                this._destroyListeners.push(e)
            }, e
        }(), hi = oo(function () {
        }), gi = oo(Rn), vi = oo(Mn), yi = oo(zn), mi = oo(Fn), bi = oo(Bn), _i = oo(We), wi = oo(Qe);

        function Ci(e, t, n, r, o, i, l, u) {
            var a = [];
            if (l) for (var s in l) {
                var p = c(l[s], 2);
                a[p[0]] = {flags: 8, name: s, nonMinifiedName: p[1], ns: null, securityContext: null, suffix: null}
            }
            var f = [];
            if (u) for (var d in u) f.push({type: 1, propName: d, target: null, eventName: u[d]});
            return function (e, t, n, r, o, i, l, u, a) {
                var s = wo(n), c = s.matchedQueries, p = s.references, f = s.matchedQueryIds;
                a || (a = []), u || (u = []), i = Ve(i);
                var d = Co(l, je(o));
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: e,
                    flags: t,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: c,
                    matchedQueryIds: f,
                    references: p,
                    ngContentIndex: -1,
                    childCount: r,
                    bindings: u,
                    bindingFlags: Ro(u),
                    outputs: a,
                    element: null,
                    provider: {token: o, value: i, deps: d},
                    text: null,
                    query: null,
                    ngContent: null
                }
            }(e, t |= 16384, n, r, o, o, i, a, f)
        }

        function Si(e, t) {
            return Pi(e, t)
        }

        function xi(e, t) {
            for (var n = e; n.parent && !bo(n);) n = n.parent;
            return Ti(n.parent, yo(n), !0, t.provider.value, t.provider.deps)
        }

        function Ei(e, t) {
            var n = Ti(e, t.parent, (32768 & t.flags) > 0, t.provider.value, t.provider.deps);
            if (t.outputs.length) for (var r = 0; r < t.outputs.length; r++) {
                var o = t.outputs[r], i = n[o.propName].subscribe(ki(e, t.parent.nodeIndex, o.eventName));
                e.disposables[t.outputIndex + r] = i.unsubscribe.bind(i)
            }
            return n
        }

        function ki(e, t, n) {
            return function (r) {
                return go(e, t, n, r)
            }
        }

        function Pi(e, t) {
            var n = (8192 & t.flags) > 0, r = t.provider;
            switch (201347067 & t.flags) {
                case 512:
                    return Ti(e, t.parent, n, r.value, r.deps);
                case 1024:
                    return function (e, t, n, r, o) {
                        var i = o.length;
                        switch (i) {
                            case 0:
                                return r();
                            case 1:
                                return r(Ii(e, t, n, o[0]));
                            case 2:
                                return r(Ii(e, t, n, o[0]), Ii(e, t, n, o[1]));
                            case 3:
                                return r(Ii(e, t, n, o[0]), Ii(e, t, n, o[1]), Ii(e, t, n, o[2]));
                            default:
                                for (var l = Array(i), u = 0; u < i; u++) l[u] = Ii(e, t, n, o[u]);
                                return r.apply(void 0, p(l))
                        }
                    }(e, t.parent, n, r.value, r.deps);
                case 2048:
                    return Ii(e, t.parent, n, r.deps[0]);
                case 256:
                    return r.value
            }
        }

        function Ti(e, t, n, r, o) {
            var i = o.length;
            switch (i) {
                case 0:
                    return new r;
                case 1:
                    return new r(Ii(e, t, n, o[0]));
                case 2:
                    return new r(Ii(e, t, n, o[0]), Ii(e, t, n, o[1]));
                case 3:
                    return new r(Ii(e, t, n, o[0]), Ii(e, t, n, o[1]), Ii(e, t, n, o[2]));
                default:
                    for (var l = new Array(i), u = 0; u < i; u++) l[u] = Ii(e, t, n, o[u]);
                    return new (r.bind.apply(r, p([void 0], l)))
            }
        }

        var Oi = {};

        function Ii(e, t, n, r, o) {
            if (void 0 === o && (o = We.THROW_IF_NOT_FOUND), 8 & r.flags) return r.token;
            var i = e;
            2 & r.flags && (o = null);
            var l = r.tokenKey;
            l === bi && (n = !(!t || !t.element.componentView)), t && 1 & r.flags && (n = !1, t = t.parent);
            for (var u = e; u;) {
                if (t) switch (l) {
                    case hi:
                        return ci(Ai(u, t, n));
                    case gi:
                        return Ai(u, t, n).renderer;
                    case vi:
                        return new Mn(Wr(u, t.nodeIndex).renderElement);
                    case yi:
                        return Wr(u, t.nodeIndex).viewContainer;
                    case mi:
                        if (t.element.template) return Wr(u, t.nodeIndex).template;
                        break;
                    case bi:
                        return ri(Ai(u, t, n));
                    case _i:
                    case wi:
                        return ui(u, t);
                    default:
                        var a = (n ? t.element.allProviders : t.element.publicProviders)[l];
                        if (a) {
                            var s = Kr(u, a.nodeIndex);
                            return s || (s = {instance: Pi(u, a)}, u.nodes[a.nodeIndex] = s), s.instance
                        }
                }
                n = bo(u), t = yo(u), u = u.parent, 4 & r.flags && (u = null)
            }
            var c = i.root.injector.get(r.token, Oi);
            return c !== Oi || o === Oi ? c : i.root.ngModule.injector.get(r.token, o)
        }

        function Ai(e, t, n) {
            var r;
            if (n) r = Wr(e, t.nodeIndex).componentView; else for (r = e; r.parent && !bo(r);) r = r.parent;
            return r
        }

        function Ni(e, t, n, r, o, i) {
            if (32768 & n.flags) {
                var l = Wr(e, n.parent.nodeIndex).componentView;
                2 & l.def.flags && (l.state |= 8)
            }
            if (t.instance[n.bindings[r].name] = o, 524288 & n.flags) {
                i = i || {};
                var u = Yn.unwrap(e.oldValues[n.bindingIndex + r]);
                i[n.bindings[r].nonMinifiedName] = new Jn(u, o, 0 != (2 & e.state))
            }
            return e.oldValues[n.bindingIndex + r] = o, i
        }

        function Ri(e, t) {
            if (e.def.nodeFlags & t) for (var n = e.def.nodes, r = 0, o = 0; o < n.length; o++) {
                var i = n[o], l = i.parent;
                for (!l && i.flags & t && Di(e, o, i.flags & t, r++), 0 == (i.childFlags & t) && (o += i.childCount); l && 1 & l.flags && o === l.nodeIndex + l.childCount;) l.directChildFlags & t && (r = Mi(e, l, t, r)), l = l.parent
            }
        }

        function Mi(e, t, n, r) {
            for (var o = t.nodeIndex + 1; o <= t.nodeIndex + t.childCount; o++) {
                var i = e.def.nodes[o];
                i.flags & n && Di(e, o, i.flags & n, r++), o += i.childCount
            }
            return r
        }

        function Di(e, t, n, r) {
            var o = Kr(e, t);
            if (o) {
                var i = o.instance;
                i && ($r.setCurrentNode(e, t), 1048576 & n && Qr(e, 512, r) && i.ngAfterContentInit(), 2097152 & n && i.ngAfterContentChecked(), 4194304 & n && Qr(e, 768, r) && i.ngAfterViewInit(), 8388608 & n && i.ngAfterViewChecked(), 131072 & n && i.ngOnDestroy())
            }
        }

        function ji(e) {
            for (var t = e.def.nodeMatchedQueries; e.parent && _o(e);) {
                var n = e.parentNodeDef;
                e = e.parent;
                for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++) 67108864 & (i = e.def.nodes[o]).flags && 536870912 & i.flags && (i.query.filterId & t) === i.query.filterId && Jr(e, o).setDirty(), !(1 & i.flags && o + i.childCount < n.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags || (o += i.childCount)
            }
            if (134217728 & e.def.nodeFlags) for (o = 0; o < e.def.nodes.length; o++) {
                var i;
                134217728 & (i = e.def.nodes[o]).flags && 536870912 & i.flags && Jr(e, o).setDirty(), o += i.childCount
            }
        }

        function Li(e, t) {
            var n = Jr(e, t.nodeIndex);
            if (n.dirty) {
                var r, o = void 0;
                if (67108864 & t.flags) {
                    var i = t.parent.parent;
                    o = Vi(e, i.nodeIndex, i.nodeIndex + i.childCount, t.query, []), r = Kr(e, t.parent.nodeIndex).instance
                } else 134217728 & t.flags && (o = Vi(e, 0, e.def.nodes.length - 1, t.query, []), r = e.component);
                n.reset(o);
                for (var l = t.query.bindings, u = !1, a = 0; a < l.length; a++) {
                    var s = l[a], c = void 0;
                    switch (s.bindingType) {
                        case 0:
                            c = n.first;
                            break;
                        case 1:
                            c = n, u = !0
                    }
                    r[s.propName] = c
                }
                u && n.notifyOnChanges()
            }
        }

        function Vi(e, t, n, r, o) {
            for (var i = t; i <= n; i++) {
                var l = e.def.nodes[i], u = l.matchedQueries[r.id];
                if (null != u && o.push(Ui(e, l, u)), 1 & l.flags && l.element.template && (l.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                    var a = Wr(e, i);
                    if ((l.childMatchedQueries & r.filterId) === r.filterId && (Vi(e, i + 1, i + l.childCount, r, o), i += l.childCount), 16777216 & l.flags) for (var s = a.viewContainer._embeddedViews, c = 0; c < s.length; c++) {
                        var p = s[c], f = vo(p);
                        f && f === a && Vi(p, 0, p.def.nodes.length - 1, r, o)
                    }
                    var d = a.template._projectedViews;
                    if (d) for (c = 0; c < d.length; c++) {
                        var h = d[c];
                        Vi(h, 0, h.def.nodes.length - 1, r, o)
                    }
                }
                (l.childMatchedQueries & r.filterId) !== r.filterId && (i += l.childCount)
            }
            return o
        }

        function Ui(e, t, n) {
            if (null != n) switch (n) {
                case 1:
                    return Wr(e, t.nodeIndex).renderElement;
                case 0:
                    return new Mn(Wr(e, t.nodeIndex).renderElement);
                case 2:
                    return Wr(e, t.nodeIndex).template;
                case 3:
                    return Wr(e, t.nodeIndex).viewContainer;
                case 4:
                    return Kr(e, t.nodeIndex).instance
            }
        }

        function Hi(e, t, n) {
            var r = So(e, t, n);
            r && To(e, n.ngContent.index, 1, r, null, void 0)
        }

        function Fi(e, t) {
            for (var n = Object.keys(t), r = n.length, o = new Array(r), i = 0; i < r; i++) {
                var l = n[i];
                o[t[l]] = l
            }
            return function (e, t, n) {
                for (var r = new Array(n.length), o = 0; o < n.length; o++) {
                    var i = n[o];
                    r[o] = {flags: 8, name: i, ns: null, nonMinifiedName: i, securityContext: null, suffix: null}
                }
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: 64,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: {},
                    matchedQueryIds: 0,
                    references: {},
                    ngContentIndex: -1,
                    childCount: 0,
                    bindings: r,
                    bindingFlags: Ro(r),
                    outputs: [],
                    element: null,
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null
                }
            }(0, e, o)
        }

        function zi(e, t, n) {
            for (var r = new Array(n.length - 1), o = 1; o < n.length; o++) r[o - 1] = {
                flags: 8,
                name: null,
                ns: null,
                nonMinifiedName: null,
                securityContext: null,
                suffix: n[o]
            };
            return {
                nodeIndex: -1,
                parent: null,
                renderParent: null,
                bindingIndex: -1,
                outputIndex: -1,
                checkIndex: e,
                flags: 2,
                childFlags: 0,
                directChildFlags: 0,
                childMatchedQueries: 0,
                matchedQueries: {},
                matchedQueryIds: 0,
                references: {},
                ngContentIndex: t,
                childCount: 0,
                bindings: r,
                bindingFlags: 8,
                outputs: [],
                element: null,
                provider: null,
                text: {prefix: n[0]},
                query: null,
                ngContent: null
            }
        }

        function Bi(e, t, n) {
            var r, o = e.renderer;
            r = o.createText(n.text.prefix);
            var i = So(e, t, n);
            return i && o.appendChild(i, r), {renderText: r}
        }

        function qi(e, t) {
            return (null != e ? e.toString() : "") + t.suffix
        }

        function Zi(e, t, n, r) {
            for (var o = 0, i = 0, l = 0, u = 0, a = 0, s = null, c = null, p = !1, f = !1, d = null, h = 0; h < t.length; h++) {
                var g = t[h];
                if (g.nodeIndex = h, g.parent = s, g.bindingIndex = o, g.outputIndex = i, g.renderParent = c, l |= g.flags, a |= g.matchedQueryIds, g.element) {
                    var v = g.element;
                    v.publicProviders = s ? s.element.publicProviders : Object.create(null), v.allProviders = v.publicProviders, p = !1, f = !1, g.element.template && (a |= g.element.template.nodeMatchedQueries)
                }
                if (Gi(s, g, t.length), o += g.bindings.length, i += g.outputs.length, !c && 3 & g.flags && (d = g), 20224 & g.flags) {
                    p || (p = !0, s.element.publicProviders = Object.create(s.element.publicProviders), s.element.allProviders = s.element.publicProviders);
                    var y = 0 != (32768 & g.flags);
                    0 == (8192 & g.flags) || y ? s.element.publicProviders[oo(g.provider.token)] = g : (f || (f = !0, s.element.allProviders = Object.create(s.element.publicProviders)), s.element.allProviders[oo(g.provider.token)] = g), y && (s.element.componentProvider = g)
                }
                if (s ? (s.childFlags |= g.flags, s.directChildFlags |= g.flags, s.childMatchedQueries |= g.matchedQueryIds, g.element && g.element.template && (s.childMatchedQueries |= g.element.template.nodeMatchedQueries)) : u |= g.flags, g.childCount > 0) s = g, Qi(g) || (c = g); else for (; s && h === s.nodeIndex + s.childCount;) {
                    var m = s.parent;
                    m && (m.childFlags |= s.childFlags, m.childMatchedQueries |= s.childMatchedQueries), c = (s = m) && Qi(s) ? s.renderParent : s
                }
            }
            return {
                factory: null,
                nodeFlags: l,
                rootNodeFlags: u,
                nodeMatchedQueries: a,
                flags: e,
                nodes: t,
                updateDirectives: n || no,
                updateRenderer: r || no,
                handleEvent: function (e, n, r, o) {
                    return t[n].element.handleEvent(e, r, o)
                },
                bindingCount: o,
                outputCount: i,
                lastRenderRootNode: d
            }
        }

        function Qi(e) {
            return 0 != (1 & e.flags) && null === e.element.name
        }

        function Gi(e, t, n) {
            var r = t.element && t.element.template;
            if (r) {
                if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
                if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + t.nodeIndex + "!")
            }
            if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + t.nodeIndex + "!");
            if (t.query) {
                if (67108864 & t.flags && (!e || 0 == (16384 & e.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + t.nodeIndex + "!");
                if (134217728 & t.flags && e) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + t.nodeIndex + "!")
            }
            if (t.childCount) {
                var o = e ? e.nodeIndex + e.childCount : n - 1;
                if (t.nodeIndex <= o && t.nodeIndex + t.childCount > o) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + t.nodeIndex + "!")
            }
        }

        function Wi(e, t, n, r) {
            var o = Ji(e.root, e.renderer, e, t, n);
            return $i(o, e.component, r), Xi(o), o
        }

        function Ki(e, t, n) {
            var r = Ji(e, e.renderer, null, null, t);
            return $i(r, n, n), Xi(r), r
        }

        function Yi(e, t, n, r) {
            var o, i = t.element.componentRendererType;
            return o = i ? e.root.rendererFactory.createRenderer(r, i) : e.root.renderer, Ji(e.root, o, e, t.element.componentProvider, n)
        }

        function Ji(e, t, n, r, o) {
            var i = new Array(o.nodes.length), l = o.outputCount ? new Array(o.outputCount) : null;
            return {
                def: o,
                parent: n,
                viewContainerParent: null,
                parentNodeDef: r,
                context: null,
                component: null,
                nodes: i,
                state: 13,
                root: e,
                renderer: t,
                oldValues: new Array(o.bindingCount),
                disposables: l,
                initIndex: -1
            }
        }

        function $i(e, t, n) {
            e.component = t, e.context = n
        }

        function Xi(e) {
            var t;
            bo(e) && (t = Wr(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
            for (var n = e.def, r = e.nodes, o = 0; o < n.nodes.length; o++) {
                var i = n.nodes[o];
                $r.setCurrentNode(e, o);
                var l = void 0;
                switch (201347067 & i.flags) {
                    case 1:
                        var u = Do(e, t, i), a = void 0;
                        if (33554432 & i.flags) {
                            var s = Eo(i.element.componentView);
                            a = $r.createComponentView(e, i, s, u)
                        }
                        jo(e, a, i, u), l = {
                            renderElement: u,
                            componentView: a,
                            viewContainer: null,
                            template: i.element.template ? ii(e, i) : void 0
                        }, 16777216 & i.flags && (l.viewContainer = ti(e, i, l));
                        break;
                    case 2:
                        l = Bi(e, t, i);
                        break;
                    case 512:
                    case 1024:
                    case 2048:
                    case 256:
                        (l = r[o]) || 4096 & i.flags || (l = {instance: Si(e, i)});
                        break;
                    case 16:
                        l = {instance: xi(e, i)};
                        break;
                    case 16384:
                        (l = r[o]) || (l = {instance: Ei(e, i)}), 32768 & i.flags && $i(Wr(e, i.parent.nodeIndex).componentView, l.instance, l.instance);
                        break;
                    case 32:
                    case 64:
                    case 128:
                        l = {value: void 0};
                        break;
                    case 67108864:
                    case 134217728:
                        l = new jn;
                        break;
                    case 8:
                        Hi(e, t, i), l = void 0
                }
                r[o] = l
            }
            al(e, ul.CreateViewNodes), fl(e, 201326592, 268435456, 0)
        }

        function el(e) {
            rl(e), $r.updateDirectives(e, 1), sl(e, ul.CheckNoChanges), $r.updateRenderer(e, 1), al(e, ul.CheckNoChanges), e.state &= -97
        }

        function tl(e) {
            1 & e.state ? (e.state &= -2, e.state |= 2) : e.state &= -3, Zr(e, 0, 256), rl(e), $r.updateDirectives(e, 0), sl(e, ul.CheckAndUpdate), fl(e, 67108864, 536870912, 0);
            var t = Zr(e, 256, 512);
            Ri(e, 2097152 | (t ? 1048576 : 0)), $r.updateRenderer(e, 0), al(e, ul.CheckAndUpdate), fl(e, 134217728, 536870912, 0), Ri(e, 8388608 | ((t = Zr(e, 512, 768)) ? 4194304 : 0)), 2 & e.def.flags && (e.state &= -9), e.state &= -97, Zr(e, 768, 1024)
        }

        function nl(e, t, n, r, o, i, l, u, a, s, c, f, d) {
            return 0 === n ? function (e, t, n, r, o, i, l, u, a, s, c, p) {
                switch (201347067 & t.flags) {
                    case 1:
                        return function (e, t, n, r, o, i, l, u, a, s, c, p) {
                            var f = t.bindings.length, d = !1;
                            return f > 0 && Vo(e, t, 0, n) && (d = !0), f > 1 && Vo(e, t, 1, r) && (d = !0), f > 2 && Vo(e, t, 2, o) && (d = !0), f > 3 && Vo(e, t, 3, i) && (d = !0), f > 4 && Vo(e, t, 4, l) && (d = !0), f > 5 && Vo(e, t, 5, u) && (d = !0), f > 6 && Vo(e, t, 6, a) && (d = !0), f > 7 && Vo(e, t, 7, s) && (d = !0), f > 8 && Vo(e, t, 8, c) && (d = !0), f > 9 && Vo(e, t, 9, p) && (d = !0), d
                        }(e, t, n, r, o, i, l, u, a, s, c, p);
                    case 2:
                        return function (e, t, n, r, o, i, l, u, a, s, c, p) {
                            var f = !1, d = t.bindings, h = d.length;
                            if (h > 0 && co(e, t, 0, n) && (f = !0), h > 1 && co(e, t, 1, r) && (f = !0), h > 2 && co(e, t, 2, o) && (f = !0), h > 3 && co(e, t, 3, i) && (f = !0), h > 4 && co(e, t, 4, l) && (f = !0), h > 5 && co(e, t, 5, u) && (f = !0), h > 6 && co(e, t, 6, a) && (f = !0), h > 7 && co(e, t, 7, s) && (f = !0), h > 8 && co(e, t, 8, c) && (f = !0), h > 9 && co(e, t, 9, p) && (f = !0), f) {
                                var g = t.text.prefix;
                                h > 0 && (g += qi(n, d[0])), h > 1 && (g += qi(r, d[1])), h > 2 && (g += qi(o, d[2])), h > 3 && (g += qi(i, d[3])), h > 4 && (g += qi(l, d[4])), h > 5 && (g += qi(u, d[5])), h > 6 && (g += qi(a, d[6])), h > 7 && (g += qi(s, d[7])), h > 8 && (g += qi(c, d[8])), h > 9 && (g += qi(p, d[9]));
                                var v = Gr(e, t.nodeIndex).renderText;
                                e.renderer.setValue(v, g)
                            }
                            return f
                        }(e, t, n, r, o, i, l, u, a, s, c, p);
                    case 16384:
                        return function (e, t, n, r, o, i, l, u, a, s, c, p) {
                            var f = Kr(e, t.nodeIndex), d = f.instance, h = !1, g = void 0, v = t.bindings.length;
                            return v > 0 && so(e, t, 0, n) && (h = !0, g = Ni(e, f, t, 0, n, g)), v > 1 && so(e, t, 1, r) && (h = !0, g = Ni(e, f, t, 1, r, g)), v > 2 && so(e, t, 2, o) && (h = !0, g = Ni(e, f, t, 2, o, g)), v > 3 && so(e, t, 3, i) && (h = !0, g = Ni(e, f, t, 3, i, g)), v > 4 && so(e, t, 4, l) && (h = !0, g = Ni(e, f, t, 4, l, g)), v > 5 && so(e, t, 5, u) && (h = !0, g = Ni(e, f, t, 5, u, g)), v > 6 && so(e, t, 6, a) && (h = !0, g = Ni(e, f, t, 6, a, g)), v > 7 && so(e, t, 7, s) && (h = !0, g = Ni(e, f, t, 7, s, g)), v > 8 && so(e, t, 8, c) && (h = !0, g = Ni(e, f, t, 8, c, g)), v > 9 && so(e, t, 9, p) && (h = !0, g = Ni(e, f, t, 9, p, g)), g && d.ngOnChanges(g), 65536 & t.flags && Qr(e, 256, t.nodeIndex) && d.ngOnInit(), 262144 & t.flags && d.ngDoCheck(), h
                        }(e, t, n, r, o, i, l, u, a, s, c, p);
                    case 32:
                    case 64:
                    case 128:
                        return function (e, t, n, r, o, i, l, u, a, s, c, p) {
                            var f = t.bindings, d = !1, h = f.length;
                            if (h > 0 && co(e, t, 0, n) && (d = !0), h > 1 && co(e, t, 1, r) && (d = !0), h > 2 && co(e, t, 2, o) && (d = !0), h > 3 && co(e, t, 3, i) && (d = !0), h > 4 && co(e, t, 4, l) && (d = !0), h > 5 && co(e, t, 5, u) && (d = !0), h > 6 && co(e, t, 6, a) && (d = !0), h > 7 && co(e, t, 7, s) && (d = !0), h > 8 && co(e, t, 8, c) && (d = !0), h > 9 && co(e, t, 9, p) && (d = !0), d) {
                                var g = Yr(e, t.nodeIndex), v = void 0;
                                switch (201347067 & t.flags) {
                                    case 32:
                                        v = new Array(f.length), h > 0 && (v[0] = n), h > 1 && (v[1] = r), h > 2 && (v[2] = o), h > 3 && (v[3] = i), h > 4 && (v[4] = l), h > 5 && (v[5] = u), h > 6 && (v[6] = a), h > 7 && (v[7] = s), h > 8 && (v[8] = c), h > 9 && (v[9] = p);
                                        break;
                                    case 64:
                                        v = {}, h > 0 && (v[f[0].name] = n), h > 1 && (v[f[1].name] = r), h > 2 && (v[f[2].name] = o), h > 3 && (v[f[3].name] = i), h > 4 && (v[f[4].name] = l), h > 5 && (v[f[5].name] = u), h > 6 && (v[f[6].name] = a), h > 7 && (v[f[7].name] = s), h > 8 && (v[f[8].name] = c), h > 9 && (v[f[9].name] = p);
                                        break;
                                    case 128:
                                        var y = n;
                                        switch (h) {
                                            case 1:
                                                v = y.transform(n);
                                                break;
                                            case 2:
                                                v = y.transform(r);
                                                break;
                                            case 3:
                                                v = y.transform(r, o);
                                                break;
                                            case 4:
                                                v = y.transform(r, o, i);
                                                break;
                                            case 5:
                                                v = y.transform(r, o, i, l);
                                                break;
                                            case 6:
                                                v = y.transform(r, o, i, l, u);
                                                break;
                                            case 7:
                                                v = y.transform(r, o, i, l, u, a);
                                                break;
                                            case 8:
                                                v = y.transform(r, o, i, l, u, a, s);
                                                break;
                                            case 9:
                                                v = y.transform(r, o, i, l, u, a, s, c);
                                                break;
                                            case 10:
                                                v = y.transform(r, o, i, l, u, a, s, c, p)
                                        }
                                }
                                g.value = v
                            }
                            return d
                        }(e, t, n, r, o, i, l, u, a, s, c, p);
                    default:
                        throw"unreachable"
                }
            }(e, t, r, o, i, l, u, a, s, c, f, d) : function (e, t, n) {
                switch (201347067 & t.flags) {
                    case 1:
                        return function (e, t, n) {
                            for (var r = !1, o = 0; o < n.length; o++) Vo(e, t, o, n[o]) && (r = !0);
                            return r
                        }(e, t, n);
                    case 2:
                        return function (e, t, n) {
                            for (var r = t.bindings, o = !1, i = 0; i < n.length; i++) co(e, t, i, n[i]) && (o = !0);
                            if (o) {
                                var l = "";
                                for (i = 0; i < n.length; i++) l += qi(n[i], r[i]);
                                l = t.text.prefix + l;
                                var u = Gr(e, t.nodeIndex).renderText;
                                e.renderer.setValue(u, l)
                            }
                            return o
                        }(e, t, n);
                    case 16384:
                        return function (e, t, n) {
                            for (var r = Kr(e, t.nodeIndex), o = r.instance, i = !1, l = void 0, u = 0; u < n.length; u++) so(e, t, u, n[u]) && (i = !0, l = Ni(e, r, t, u, n[u], l));
                            return l && o.ngOnChanges(l), 65536 & t.flags && Qr(e, 256, t.nodeIndex) && o.ngOnInit(), 262144 & t.flags && o.ngDoCheck(), i
                        }(e, t, n);
                    case 32:
                    case 64:
                    case 128:
                        return function (e, t, n) {
                            for (var r = t.bindings, o = !1, i = 0; i < n.length; i++) co(e, t, i, n[i]) && (o = !0);
                            if (o) {
                                var l = Yr(e, t.nodeIndex), u = void 0;
                                switch (201347067 & t.flags) {
                                    case 32:
                                        u = n;
                                        break;
                                    case 64:
                                        for (u = {}, i = 0; i < n.length; i++) u[r[i].name] = n[i];
                                        break;
                                    case 128:
                                        var a = n[0], s = n.slice(1);
                                        u = a.transform.apply(a, p(s))
                                }
                                l.value = u
                            }
                            return o
                        }(e, t, n);
                    default:
                        throw"unreachable"
                }
            }(e, t, r)
        }

        function rl(e) {
            var t = e.def;
            if (4 & t.nodeFlags) for (var n = 0; n < t.nodes.length; n++) {
                var r = t.nodes[n];
                if (4 & r.flags) {
                    var o = Wr(e, n).template._projectedViews;
                    if (o) for (var i = 0; i < o.length; i++) {
                        var l = o[i];
                        l.state |= 32, ho(l, e)
                    }
                } else 0 == (4 & r.childFlags) && (n += r.childCount)
            }
        }

        function ol(e, t, n, r, o, i, l, u, a, s, c, p, f) {
            return 0 === n ? function (e, t, n, r, o, i, l, u, a, s, c, p) {
                var f = t.bindings.length;
                f > 0 && po(e, t, 0, n), f > 1 && po(e, t, 1, r), f > 2 && po(e, t, 2, o), f > 3 && po(e, t, 3, i), f > 4 && po(e, t, 4, l), f > 5 && po(e, t, 5, u), f > 6 && po(e, t, 6, a), f > 7 && po(e, t, 7, s), f > 8 && po(e, t, 8, c), f > 9 && po(e, t, 9, p)
            }(e, t, r, o, i, l, u, a, s, c, p, f) : function (e, t, n) {
                for (var r = 0; r < n.length; r++) po(e, t, r, n[r])
            }(e, t, r), !1
        }

        function il(e, t) {
            if (Jr(e, t.nodeIndex).dirty) throw Xr($r.createDebugContext(e, t.nodeIndex), "Query " + t.query.id + " not dirty", "Query " + t.query.id + " dirty", 0 != (1 & e.state))
        }

        function ll(e) {
            if (!(128 & e.state)) {
                if (sl(e, ul.Destroy), al(e, ul.Destroy), Ri(e, 131072), e.disposables) for (var t = 0; t < e.disposables.length; t++) e.disposables[t]();
                !function (e) {
                    if (16 & e.state) {
                        var t = vo(e);
                        if (t) {
                            var n = t.template._projectedViews;
                            n && (Yo(n, n.indexOf(e)), $r.dirtyParentQueries(e))
                        }
                    }
                }(e), e.renderer.destroyNode && function (e) {
                    for (var t = e.def.nodes.length, n = 0; n < t; n++) {
                        var r = e.def.nodes[n];
                        1 & r.flags ? e.renderer.destroyNode(Wr(e, n).renderElement) : 2 & r.flags ? e.renderer.destroyNode(Gr(e, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && Jr(e, n).destroy()
                    }
                }(e), bo(e) && e.renderer.destroy(), e.state |= 128
            }
        }

        var ul = function (e) {
            return e[e.CreateViewNodes = 0] = "CreateViewNodes", e[e.CheckNoChanges = 1] = "CheckNoChanges", e[e.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", e[e.CheckAndUpdate = 3] = "CheckAndUpdate", e[e.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", e[e.Destroy = 5] = "Destroy", e
        }({});

        function al(e, t) {
            var n = e.def;
            if (33554432 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
                var o = n.nodes[r];
                33554432 & o.flags ? cl(Wr(e, r).componentView, t) : 0 == (33554432 & o.childFlags) && (r += o.childCount)
            }
        }

        function sl(e, t) {
            var n = e.def;
            if (16777216 & n.nodeFlags) for (var r = 0; r < n.nodes.length; r++) {
                var o = n.nodes[r];
                if (16777216 & o.flags) for (var i = Wr(e, r).viewContainer._embeddedViews, l = 0; l < i.length; l++) cl(i[l], t); else 0 == (16777216 & o.childFlags) && (r += o.childCount)
            }
        }

        function cl(e, t) {
            var n = e.state;
            switch (t) {
                case ul.CheckNoChanges:
                    0 == (128 & n) && (12 == (12 & n) ? el(e) : 64 & n && pl(e, ul.CheckNoChangesProjectedViews));
                    break;
                case ul.CheckNoChangesProjectedViews:
                    0 == (128 & n) && (32 & n ? el(e) : 64 & n && pl(e, t));
                    break;
                case ul.CheckAndUpdate:
                    0 == (128 & n) && (12 == (12 & n) ? tl(e) : 64 & n && pl(e, ul.CheckAndUpdateProjectedViews));
                    break;
                case ul.CheckAndUpdateProjectedViews:
                    0 == (128 & n) && (32 & n ? tl(e) : 64 & n && pl(e, t));
                    break;
                case ul.Destroy:
                    ll(e);
                    break;
                case ul.CreateViewNodes:
                    Xi(e)
            }
        }

        function pl(e, t) {
            sl(e, t), al(e, t)
        }

        function fl(e, t, n, r) {
            if (e.def.nodeFlags & t && e.def.nodeFlags & n) for (var o = e.def.nodes.length, i = 0; i < o; i++) {
                var l = e.def.nodes[i];
                if (l.flags & t && l.flags & n) switch ($r.setCurrentNode(e, l.nodeIndex), r) {
                    case 0:
                        Li(e, l);
                        break;
                    case 1:
                        il(e, l)
                }
                l.childFlags & t && l.childFlags & n || (i += l.childCount)
            }
        }

        var dl = !1;

        function hl(e, t, n, r, o, i) {
            return Ki(vl(e, o, o.injector.get(An), t, n), r, i)
        }

        function gl(e, t, n, r, o, i) {
            var l = o.injector.get(An), u = vl(e, o, new Yl(l), t, n), a = kl(r);
            return Wl(Dl.create, Ki, null, [u, a, i])
        }

        function vl(e, t, n, r, o) {
            var i = t.injector.get(qr), l = t.injector.get(_t);
            return {
                ngModule: t,
                injector: e,
                projectableNodes: r,
                selectorOrNode: o,
                sanitizer: i,
                rendererFactory: n,
                renderer: n.createRenderer(null, null),
                errorHandler: l
            }
        }

        function yl(e, t, n, r) {
            var o = kl(n);
            return Wl(Dl.create, Wi, null, [e, t, o, r])
        }

        function ml(e, t, n, r) {
            return n = Cl.get(t.element.componentProvider.provider.token) || kl(n), Wl(Dl.create, Yi, null, [e, t, n, r])
        }

        function bl(e, t, n, r) {
            return fi(e, t, n, function (e) {
                var t = function (e) {
                    var t = !1, n = !1;
                    return 0 === _l.size ? {
                        hasOverrides: t,
                        hasDeprecatedOverrides: n
                    } : (e.providers.forEach(function (e) {
                        var r = _l.get(e.token);
                        3840 & e.flags && r && (t = !0, n = n || r.deprecatedBehavior)
                    }), e.modules.forEach(function (e) {
                        wl.forEach(function (r, o) {
                            o.ngInjectableDef.providedIn === e && (t = !0, n = n || r.deprecatedBehavior)
                        })
                    }), {hasOverrides: t, hasDeprecatedOverrides: n})
                }(e), n = t.hasDeprecatedOverrides;
                return t.hasOverrides ? (function (e) {
                    for (var t = 0; t < e.providers.length; t++) {
                        var r = e.providers[t];
                        n && (r.flags |= 4096);
                        var o = _l.get(r.token);
                        o && (r.flags = -3841 & r.flags | o.flags, r.deps = Co(o.deps), r.value = o.value)
                    }
                    if (wl.size > 0) {
                        var i = new Set(e.modules);
                        wl.forEach(function (t, r) {
                            if (i.has(r.ngInjectableDef.providedIn)) {
                                var o = {
                                    token: r,
                                    flags: t.flags | (n ? 4096 : 0),
                                    deps: Co(t.deps),
                                    value: t.value,
                                    index: e.providers.length
                                };
                                e.providers.push(o), e.providersByKey[oo(r)] = o
                            }
                        })
                    }
                }(e = e.factory(function () {
                    return no
                })), e) : e
            }(r))
        }

        var _l = new Map, wl = new Map, Cl = new Map;

        function Sl(e) {
            _l.set(e.token, e), "function" == typeof e.token && e.token.ngInjectableDef && "function" == typeof e.token.ngInjectableDef.providedIn && wl.set(e.token, e)
        }

        function xl(e, t) {
            var n = Eo(Eo(t.viewDefFactory).nodes[0].element.componentView);
            Cl.set(e, n)
        }

        function El() {
            _l.clear(), wl.clear(), Cl.clear()
        }

        function kl(e) {
            if (0 === _l.size) return e;
            var t = function (e) {
                for (var t = [], n = null, r = 0; r < e.nodes.length; r++) {
                    var o = e.nodes[r];
                    1 & o.flags && (n = o), n && 3840 & o.flags && _l.has(o.provider.token) && (t.push(n.nodeIndex), n = null)
                }
                return t
            }(e);
            if (0 === t.length) return e;
            e = e.factory(function () {
                return no
            });
            for (var n = 0; n < t.length; n++) r(e, t[n]);
            return e;

            function r(e, t) {
                for (var n = t + 1; n < e.nodes.length; n++) {
                    var r = e.nodes[n];
                    if (1 & r.flags) return;
                    if (3840 & r.flags) {
                        var o = r.provider, i = _l.get(o.token);
                        i && (r.flags = -3841 & r.flags | i.flags, o.deps = Co(i.deps), o.value = i.value)
                    }
                }
            }
        }

        function Pl(e, t, n, r, o, i, l, u, a, s, c, p, f) {
            var d = e.def.nodes[t];
            return nl(e, d, n, r, o, i, l, u, a, s, c, p, f), 224 & d.flags ? Yr(e, t).value : void 0
        }

        function Tl(e, t, n, r, o, i, l, u, a, s, c, p, f) {
            var d = e.def.nodes[t];
            return ol(e, d, n, r, o, i, l, u, a, s, c, p, f), 224 & d.flags ? Yr(e, t).value : void 0
        }

        function Ol(e) {
            return Wl(Dl.detectChanges, tl, null, [e])
        }

        function Il(e) {
            return Wl(Dl.checkNoChanges, el, null, [e])
        }

        function Al(e) {
            return Wl(Dl.destroy, ll, null, [e])
        }

        var Nl, Rl, Ml, Dl = function (e) {
            return e[e.create = 0] = "create", e[e.detectChanges = 1] = "detectChanges", e[e.checkNoChanges = 2] = "checkNoChanges", e[e.destroy = 3] = "destroy", e[e.handleEvent = 4] = "handleEvent", e
        }({});

        function jl(e, t) {
            Rl = e, Ml = t
        }

        function Ll(e, t, n, r) {
            return jl(e, t), Wl(Dl.handleEvent, e.def.handleEvent, null, [e, t, n, r])
        }

        function Vl(e, t) {
            if (128 & e.state) throw to(Dl[Nl]);
            return jl(e, ql(e, 0)), e.def.updateDirectives(function (e, n, r) {
                for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                var l = e.def.nodes[n];
                return 0 === t ? Hl(e, l, r, o) : Fl(e, l, r, o), 16384 & l.flags && jl(e, ql(e, n)), 224 & l.flags ? Yr(e, l.nodeIndex).value : void 0
            }, e)
        }

        function Ul(e, t) {
            if (128 & e.state) throw to(Dl[Nl]);
            return jl(e, Zl(e, 0)), e.def.updateRenderer(function (e, n, r) {
                for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                var l = e.def.nodes[n];
                return 0 === t ? Hl(e, l, r, o) : Fl(e, l, r, o), 3 & l.flags && jl(e, Zl(e, n)), 224 & l.flags ? Yr(e, l.nodeIndex).value : void 0
            }, e)
        }

        function Hl(e, t, n, r) {
            if (nl.apply(void 0, p([e, t, n], r))) {
                var o = 1 === n ? r[0] : r;
                if (16384 & t.flags) {
                    for (var i = {}, l = 0; l < t.bindings.length; l++) {
                        var u = t.bindings[l], a = o[l];
                        8 & u.flags && (i[(d = u.nonMinifiedName, "ng-reflect-" + (d = d.replace(/[$@]/g, "_").replace(zl, function () {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            return "-" + e[1].toLowerCase()
                        })))] = Bl(a))
                    }
                    var s = t.parent, c = Wr(e, s.nodeIndex).renderElement;
                    if (s.element.name) for (var f in i) null != (a = i[f]) ? e.renderer.setAttribute(c, f, a) : e.renderer.removeAttribute(c, f); else e.renderer.setValue(c, "bindings=" + JSON.stringify(i, null, 2))
                }
            }
            var d
        }

        function Fl(e, t, n, r) {
            ol.apply(void 0, p([e, t, n], r))
        }

        var zl = /([A-Z])/g;

        function Bl(e) {
            try {
                return null != e ? e.toString().slice(0, 30) : e
            } catch (e) {
                return "[ERROR] Exception while trying to serialize the value"
            }
        }

        function ql(e, t) {
            for (var n = t; n < e.def.nodes.length; n++) {
                var r = e.def.nodes[n];
                if (16384 & r.flags && r.bindings && r.bindings.length) return n
            }
            return null
        }

        function Zl(e, t) {
            for (var n = t; n < e.def.nodes.length; n++) {
                var r = e.def.nodes[n];
                if (3 & r.flags && r.bindings && r.bindings.length) return n
            }
            return null
        }

        var Ql = function () {
            function e(e, t) {
                this.view = e, this.nodeIndex = t, null == t && (this.nodeIndex = t = 0), this.nodeDef = e.def.nodes[t];
                for (var n = this.nodeDef, r = e; n && 0 == (1 & n.flags);) n = n.parent;
                if (!n) for (; !n && r;) n = yo(r), r = r.parent;
                this.elDef = n, this.elView = r
            }

            return Object.defineProperty(e.prototype, "elOrCompView", {
                get: function () {
                    return Wr(this.elView, this.elDef.nodeIndex).componentView || this.view
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "injector", {
                get: function () {
                    return ui(this.elView, this.elDef)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "component", {
                get: function () {
                    return this.elOrCompView.component
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "context", {
                get: function () {
                    return this.elOrCompView.context
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "providerTokens", {
                get: function () {
                    var e = [];
                    if (this.elDef) for (var t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
                        var n = this.elView.def.nodes[t];
                        20224 & n.flags && e.push(n.provider.token), t += n.childCount
                    }
                    return e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "references", {
                get: function () {
                    var e = {};
                    if (this.elDef) {
                        Gl(this.elView, this.elDef, e);
                        for (var t = this.elDef.nodeIndex + 1; t <= this.elDef.nodeIndex + this.elDef.childCount; t++) {
                            var n = this.elView.def.nodes[t];
                            20224 & n.flags && Gl(this.elView, n, e), t += n.childCount
                        }
                    }
                    return e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "componentRenderElement", {
                get: function () {
                    var e = function (e) {
                        for (; e && !bo(e);) e = e.parent;
                        return e.parent ? Wr(e.parent, yo(e).nodeIndex) : null
                    }(this.elOrCompView);
                    return e ? e.renderElement : void 0
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "renderNode", {
                get: function () {
                    return 2 & this.nodeDef.flags ? mo(this.view, this.nodeDef) : mo(this.elView, this.elDef)
                }, enumerable: !0, configurable: !0
            }), e.prototype.logError = function (e) {
                for (var t, n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                2 & this.nodeDef.flags ? (t = this.view.def, n = this.nodeDef.nodeIndex) : (t = this.elView.def, n = this.elDef.nodeIndex);
                var i = function (e, t) {
                    for (var n = -1, r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
                    return n
                }(t, n), l = -1;
                t.factory(function () {
                    var t;
                    return ++l === i ? (t = e.error).bind.apply(t, p([e], r)) : no
                }), l < i && (e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), e.error.apply(e, p(r)))
            }, e
        }();

        function Gl(e, t, n) {
            for (var r in t.references) n[r] = Ui(e, t, t.references[r])
        }

        function Wl(e, t, n, r) {
            var o = Nl, i = Rl, l = Ml;
            try {
                Nl = e;
                var u = t.apply(n, r);
                return Rl = i, Ml = l, Nl = o, u
            } catch (e) {
                if (yt(e) || !Rl) throw e;
                throw function (e, t) {
                    return e instanceof Error || (e = new Error(e.toString())), eo(e, t), e
                }(e, Kl())
            }
        }

        function Kl() {
            return Rl ? new Ql(Rl, Ml) : null
        }

        var Yl = function () {
            function e(e) {
                this.delegate = e
            }

            return e.prototype.createRenderer = function (e, t) {
                return new Jl(this.delegate.createRenderer(e, t))
            }, e.prototype.begin = function () {
                this.delegate.begin && this.delegate.begin()
            }, e.prototype.end = function () {
                this.delegate.end && this.delegate.end()
            }, e.prototype.whenRenderingDone = function () {
                return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null)
            }, e
        }(), Jl = function () {
            function e(e) {
                this.delegate = e, this.data = this.delegate.data
            }

            return e.prototype.destroyNode = function (e) {
                !function (e) {
                    Qn.delete(e.nativeNode)
                }(Gn(e)), this.delegate.destroyNode && this.delegate.destroyNode(e)
            }, e.prototype.destroy = function () {
                this.delegate.destroy()
            }, e.prototype.createElement = function (e, t) {
                var n = this.delegate.createElement(e, t), r = Kl();
                if (r) {
                    var o = new Zn(n, null, r);
                    o.name = e, Wn(o)
                }
                return n
            }, e.prototype.createComment = function (e) {
                var t = this.delegate.createComment(e), n = Kl();
                return n && Wn(new qn(t, null, n)), t
            }, e.prototype.createText = function (e) {
                var t = this.delegate.createText(e), n = Kl();
                return n && Wn(new qn(t, null, n)), t
            }, e.prototype.appendChild = function (e, t) {
                var n = Gn(e), r = Gn(t);
                n && r && n instanceof Zn && n.addChild(r), this.delegate.appendChild(e, t)
            }, e.prototype.insertBefore = function (e, t, n) {
                var r = Gn(e), o = Gn(t), i = Gn(n);
                r && o && r instanceof Zn && r.insertBefore(i, o), this.delegate.insertBefore(e, t, n)
            }, e.prototype.removeChild = function (e, t) {
                var n = Gn(e), r = Gn(t);
                n && r && n instanceof Zn && n.removeChild(r), this.delegate.removeChild(e, t)
            }, e.prototype.selectRootElement = function (e) {
                var t = this.delegate.selectRootElement(e), n = Kl();
                return n && Wn(new Zn(t, null, n)), t
            }, e.prototype.setAttribute = function (e, t, n, r) {
                var o = Gn(e);
                o && o instanceof Zn && (o.attributes[r ? r + ":" + t : t] = n), this.delegate.setAttribute(e, t, n, r)
            }, e.prototype.removeAttribute = function (e, t, n) {
                var r = Gn(e);
                r && r instanceof Zn && (r.attributes[n ? n + ":" + t : t] = null), this.delegate.removeAttribute(e, t, n)
            }, e.prototype.addClass = function (e, t) {
                var n = Gn(e);
                n && n instanceof Zn && (n.classes[t] = !0), this.delegate.addClass(e, t)
            }, e.prototype.removeClass = function (e, t) {
                var n = Gn(e);
                n && n instanceof Zn && (n.classes[t] = !1), this.delegate.removeClass(e, t)
            }, e.prototype.setStyle = function (e, t, n, r) {
                var o = Gn(e);
                o && o instanceof Zn && (o.styles[t] = n), this.delegate.setStyle(e, t, n, r)
            }, e.prototype.removeStyle = function (e, t, n) {
                var r = Gn(e);
                r && r instanceof Zn && (r.styles[t] = null), this.delegate.removeStyle(e, t, n)
            }, e.prototype.setProperty = function (e, t, n) {
                var r = Gn(e);
                r && r instanceof Zn && (r.properties[t] = n), this.delegate.setProperty(e, t, n)
            }, e.prototype.listen = function (e, t, n) {
                if ("string" != typeof e) {
                    var r = Gn(e);
                    r && r.listeners.push(new function (e, t) {
                        this.name = e, this.callback = t
                    }(t, n))
                }
                return this.delegate.listen(e, t, n)
            }, e.prototype.parentNode = function (e) {
                return this.delegate.parentNode(e)
            }, e.prototype.nextSibling = function (e) {
                return this.delegate.nextSibling(e)
            }, e.prototype.setValue = function (e, t) {
                return this.delegate.setValue(e, t)
            }, e
        }(), $l = function (e) {
            function t(t, n, r) {
                var o = e.call(this) || this;
                return o.moduleType = t, o._bootstrapComponents = n, o._ngModuleDefFactory = r, o
            }

            return o(t, e), t.prototype.create = function (e) {
                !function () {
                    if (!dl) {
                        dl = !0;
                        var e = Sn() ? {
                            setCurrentNode: jl,
                            createRootView: gl,
                            createEmbeddedView: yl,
                            createComponentView: ml,
                            createNgModuleRef: bl,
                            overrideProvider: Sl,
                            overrideComponentView: xl,
                            clearOverrides: El,
                            checkAndUpdateView: Ol,
                            checkNoChangesView: Il,
                            destroyView: Al,
                            createDebugContext: function (e, t) {
                                return new Ql(e, t)
                            },
                            handleEvent: Ll,
                            updateDirectives: Vl,
                            updateRenderer: Ul
                        } : {
                            setCurrentNode: function () {
                            },
                            createRootView: hl,
                            createEmbeddedView: Wi,
                            createComponentView: Yi,
                            createNgModuleRef: fi,
                            overrideProvider: no,
                            overrideComponentView: no,
                            clearOverrides: no,
                            checkAndUpdateView: tl,
                            checkNoChangesView: el,
                            destroyView: ll,
                            createDebugContext: function (e, t) {
                                return new Ql(e, t)
                            },
                            handleEvent: function (e, t, n, r) {
                                return e.def.handleEvent(e, t, n, r)
                            },
                            updateDirectives: function (e, t) {
                                return e.def.updateDirectives(0 === t ? Pl : Tl, e)
                            },
                            updateRenderer: function (e, t) {
                                return e.def.updateRenderer(0 === t ? Pl : Tl, e)
                            }
                        };
                        $r.setCurrentNode = e.setCurrentNode, $r.createRootView = e.createRootView, $r.createEmbeddedView = e.createEmbeddedView, $r.createComponentView = e.createComponentView, $r.createNgModuleRef = e.createNgModuleRef, $r.overrideProvider = e.overrideProvider, $r.overrideComponentView = e.overrideComponentView, $r.clearOverrides = e.clearOverrides, $r.checkAndUpdateView = e.checkAndUpdateView, $r.checkNoChangesView = e.checkNoChangesView, $r.destroyView = e.destroyView, $r.resolveDep = Ii, $r.createDebugContext = e.createDebugContext, $r.handleEvent = e.handleEvent, $r.updateDirectives = e.updateDirectives, $r.updateRenderer = e.updateRenderer, $r.dirtyParentQueries = ji
                    }
                }();
                var t = function (e) {
                    var t = Array.from(e.providers), n = Array.from(e.modules), r = {};
                    for (var o in e.providersByKey) r[o] = e.providersByKey[o];
                    return {factory: e.factory, isRoot: e.isRoot, providers: t, modules: n, providersByKey: r}
                }(Eo(this._ngModuleDefFactory));
                return $r.createNgModuleRef(this.moduleType, e || We.NULL, this._bootstrapComponents, t)
            }, t
        }(nn);

        function Xl(e, t, n) {
            e != t && tu(n)
        }

        function eu(e, t) {
            null == e && tu(t)
        }

        function tu(e) {
            throw new Error("ASSERTION ERROR: " + e)
        }

        var nu = 16, ru = 0, ou = 1, iu = 2, lu = 3, uu = 4, au = 5, su = 6, cu = 7, pu = 8, fu = 9, du = 10, hu = 11,
            gu = 14;

        function vu(e, t, n) {
            e.afterContentInit && (t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentInit), e.afterContentChecked && ((t.contentHooks || (t.contentHooks = [])).push(n, e.afterContentChecked), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, e.afterContentChecked))
        }

        function yu(e, t, n) {
            e.afterViewInit && (t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewInit), e.afterViewChecked && ((t.viewHooks || (t.viewHooks = [])).push(n, e.afterViewChecked), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, e.afterViewChecked))
        }

        function mu(e, t, n) {
            null != e.onDestroy && (t.destroyHooks || (t.destroyHooks = [])).push(n, e.onDestroy)
        }

        function bu(e, t, n) {
            16 & e[uu] && (_u(e[cu], t.initHooks, t.checkHooks, n), e[uu] &= -17)
        }

        function _u(e, t, n, r) {
            var o = r ? t : n;
            o && wu(e, o)
        }

        function wu(e, t) {
            for (var n = 0; n < t.length; n += 2) t[n + 1].call(e[t[n]])
        }

        "undefined" == typeof ngDevMode || ngDevMode;
        var Cu = 0, Su = 4, xu = "ngProjectAs";

        function Eu(e) {
            return !!e.listen
        }

        var ku = {
            createRenderer: function (e, t) {
                return document
            }
        };

        function Pu(e, t) {
            eu(e, "should be called with a node"), Xl(e.tNode.type, t, "should be a " + function (e) {
                return 1 == e ? "Projection" : 0 == e ? "Container" : 2 == e ? "View" : 3 == e ? "Element" : "<unknown>"
            }(t))
        }

        function Tu(e) {
            return Array.isArray(e) ? e[0] : e
        }

        function Ou(e) {
            if (2 === e.tNode.type) {
                var t = e.data;
                return t[iu] ? t[iu][au] : null
            }
            return e.tNode.next ? e.view[e.tNode.next.index] : null
        }

        function Iu(e) {
            return e.tNode.child ? Tu((2 === e.tNode.type ? e.data : e.view)[e.tNode.child.index]) : null
        }

        function Au(e) {
            if (-1 === e.tNode.index && 2 === e.tNode.type) {
                var t = e.data[gu];
                return -1 === t ? null : e.view[t].dynamicLContainerNode
            }
            var n = e.tNode.parent;
            return Tu(n ? e.view[n.index] : e.view[au])
        }

        var Nu = [];

        function Ru(e) {
            for (var t = e[au]; 2 === t.tNode.type;) ngDevMode && eu(e[ou], "lViewData.parent"), t = (e = e[ou])[au];
            return ngDevMode && Pu(t, 3), ngDevMode && eu(t.data, "node.data"), t
        }

        function Mu(e, t, n, r, o) {
            0 === e ? Eu(t) ? t.insertBefore(n, r, o) : n.insertBefore(r, o, !0) : 1 === e ? Eu(t) ? t.removeChild(n, r) : n.removeChild(r) : 2 === e && (ngDevMode && ngDevMode.rendererDestroyNode++, t.destroyNode(r))
        }

        function Du(e) {
            if (-1 === e[ru].childIndex) return null;
            var t = e[e[ru].childIndex];
            return t.data ? t.data : t.dynamicLContainerNode.data
        }

        function ju(e, t) {
            var n;
            return (n = e[au]) && 2 === n.tNode.type ? Au(n).data : e[ou] === t ? null : e[ou]
        }

        function Lu(e) {
            if (e[ru]) {
                var t = e;
                !function (e) {
                    var t = e[ru].cleanup;
                    if (null != t) {
                        for (var n = 0; n < t.length - 1; n += 2) "string" == typeof t[n] ? (Tu(e[t[n + 1]]).native.removeEventListener(t[n], e[pu][t[n + 2]], t[n + 3]), n += 2) : "number" == typeof t[n] ? (0, e[pu][t[n]])() : t[n].call(e[pu][t[n + 1]]);
                        e[pu] = null
                    }
                }(t), function (e) {
                    var t, n = e[ru];
                    null != n && null != (t = n.destroyHooks) && wu(e[cu], t)
                }(t), (r = (n = t)[ru] && n[ru].pipeDestroyHooks) && wu(n, r), -1 === t[ru].id && Eu(t[hu]) && (ngDevMode && ngDevMode.rendererDestroy++, t[hu].destroy())
            }
            var n, r
        }

        var Vu, Uu, Hu, Fu, zu, Bu, qu, Zu, Qu, Gu = "__ngHostLNode__", Wu = Promise.resolve(null), Ku = [0, 0],
            Yu = new Array(nu).fill(null), Ju = !1, $u = !0;

        function Xu(e, t) {
            var n = Zu;
            return Qu = e && e[cu], zu = e && e[ru], qu = e && 1 == (1 & e[uu]), $u = e && zu.firstTemplatePass, Vu = e && e[hu], null != t && (Hu = t, Fu = !0), Zu = e, Bu = e && e[lu], n
        }

        function ea(e, t) {
            t || (Ju || _u(Qu, zu.viewHooks, zu.viewCheckHooks, qu), Zu[uu] &= -6), Zu[uu] |= 16, Zu[su] = -1, Xu(e, null)
        }

        function ta() {
            Ju || bu(Zu, zu, qu), function (e) {
                for (var t = Du(Zu); null !== t; t = t[iu]) if (t.length < nu && null === t[Cu]) for (var n = t, r = 0; r < n[Su].length; r++) {
                    var o = n[Su][r], i = o.data;
                    ngDevMode && eu(i[ru], "TView must be allocated"), ia(o, i[ru], i[fu], 2)
                }
            }(), Ju || _u(Qu, zu.contentHooks, zu.contentCheckHooks, qu), zu.firstTemplatePass = $u = !1, na(zu.hostBindings), function (e) {
                if (null != e.contentQueries) for (var t = 0; t < e.contentQueries.length; t += 2) {
                    var n = e.contentQueries[t];
                    e.directives[n].contentQueriesRefresh(n, e.contentQueries[t + 1])
                }
            }(zu), function (e) {
                if (null != e) for (var t = 0; t < e.length; t += 2) da(e[t], e[t + 1])
            }(zu.components)
        }

        function na(e) {
            if (null != e) for (var t = zu.directives, n = 0; n < e.length; n += 2) {
                var r = e[n], o = t[r];
                o.hostBindings && o.hostBindings(r, e[n + 1])
            }
        }

        function ra(e, t, n, r, o) {
            return [t, Zu, null, null, 25 | r, null, -1, null, null, n, Zu && Zu[du], e, o || null, null, -1, null]
        }

        function oa(e, t, n, r, o, i) {
            var l = Fu ? Hu : Hu && Au(Hu), u = l && l.view === Zu ? l.tNode : null,
                a = (Fu ? Bu : Hu && Hu.queries) || l && l.queries && l.queries.child(), s = null != i,
                c = function (e, t, n, r, o, i) {
                    return {
                        native: r,
                        view: Zu,
                        nodeInjector: n ? n.nodeInjector : null,
                        data: o,
                        queries: i,
                        tNode: null,
                        dynamicLContainerNode: null
                    }
                }(0, 0, l, n, s ? i : null, a);
            if (-1 === e || 2 === t) c.tNode = (i ? i[ru].node : null) || fa(t, e, null, null, u, null); else {
                var p = e + nu;
                ngDevMode && _a(p);
                var f = zu.data;
                if (Zu[p] = c, p >= f.length) {
                    var d = f[p] = fa(t, p, r, o, u, null);
                    if (!Fu && Hu) {
                        var h = Hu.tNode;
                        h.next = d, h.dynamicContainerNode && (h.dynamicContainerNode.next = d)
                    }
                }
                c.tNode = f[p], Fu && (Bu = null, (null == Hu.tNode.child && Hu.view === Zu || 2 === Hu.tNode.type) && (Hu.tNode.child = c.tNode))
            }
            if (2 == (2 & t) && s) {
                var g = i;
                ngDevMode && null != g[au] && tu("lViewData[HOST_NODE] should not have been initialized"), g[au] = c, $u && (g[ru].node = c.tNode)
            }
            return Hu = c, Fu = !0, c
        }

        function ia(e, t, n, r) {
            var o, i = Fu, l = Hu;
            if (null == e.data[ou] && e.data[fu] && !t.template) ga(e.data[fu]); else try {
                Fu = !0, Hu = null, o = Xu(e.data, e), sa(), t.template(r, n), 2 & r ? ta() : e.data[ru].firstTemplatePass = $u = !1
            } finally {
                ea(o, 1 == (1 & r)), Fu = i, Hu = l
            }
            return e
        }

        function la(e, t, n, r) {
            var o = Xu(t, e);
            try {
                Uu.begin && Uu.begin(), r ? (sa(), r(ua(t), n), ta()) : (Ju || (bu(Zu, zu, qu), _u(Qu, zu.contentHooks, zu.contentCheckHooks, qu)), na(Ku), da(0, nu))
            } finally {
                Uu.end && Uu.end(), ea(o)
            }
        }

        function ua(e) {
            return 1 & e[uu] ? 3 : 2
        }

        var aa = null;

        function sa() {
            aa = null
        }

        function ca(e, t, n, r, o) {
            return ngDevMode && ngDevMode.tView++, {
                id: e,
                template: t,
                viewQuery: o,
                node: null,
                data: Yu.slice(),
                childIndex: -1,
                bindingStartIndex: -1,
                directives: null,
                firstTemplatePass: !0,
                initHooks: null,
                checkHooks: null,
                contentHooks: null,
                contentCheckHooks: null,
                viewHooks: null,
                viewCheckHooks: null,
                destroyHooks: null,
                pipeDestroyHooks: null,
                cleanup: null,
                hostBindings: null,
                contentQueries: null,
                components: null,
                directiveRegistry: "function" == typeof n ? n() : n,
                pipeRegistry: "function" == typeof r ? r() : r,
                currentMatches: null
            }
        }

        function pa(e, t) {
            ngDevMode && ba(-1), Uu = e;
            var n, r = e.createRenderer(null, null),
                o = "string" == typeof t ? Eu(r) ? r.selectRootElement(t) : r.querySelector(t) : t;
            if (ngDevMode && !o) throw new Error("Renderer: " + ("string" == typeof t ? "Host node with selector not found:" : "Host node is required:") + " [" + ("function" == typeof(n = t) ? n.name || n : "string" == typeof n ? n : null == n ? "" : "" + n) + "]");
            return o
        }

        function fa(e, t, n, r, o, i) {
            return ngDevMode && ngDevMode.tNode++, {
                type: e,
                index: t,
                flags: 0,
                tagName: n,
                attrs: r,
                localNames: null,
                initialInputs: void 0,
                inputs: void 0,
                outputs: void 0,
                tViews: i,
                next: null,
                child: null,
                parent: o,
                dynamicContainerNode: null,
                detached: null,
                stylingTemplate: null,
                projection: null
            }
        }

        function da(e, t) {
            ngDevMode && ba(t);
            var n = Zu[t];
            ngDevMode && Pu(n, 3), ngDevMode && eu(n.data, "Component's host node should have an LViewData attached.");
            var r = n.data;
            ha(r) && 6 & r[uu] && (ngDevMode && ba(e, Qu), ma(r, n, Qu[e]))
        }

        function ha(e) {
            return 8 == (8 & e[uu])
        }

        function ga(e) {
            for (var t = 0; t < e.components.length; t++) {
                var n = e.components[t], r = wa(n);
                ngDevMode && eu(r.data, "Component host node should be attached to an LView"), la(r, va(n), n)
            }
        }

        function va(e) {
            ngDevMode && eu(e, "component");
            for (var t = wa(e).view; t[ou];) t = t[ou];
            return t
        }

        function ya(e) {
            var t = wa(e);
            ngDevMode && eu(t.data, "Component host node should be attached to an LViewData instance."), ma(t.data, t, e)
        }

        function ma(e, t, n) {
            var r = Xu(e, t), o = e[ru], i = o.template, l = o.viewQuery;
            try {
                sa(), function (t, n, r) {
                    t && 1 & e[uu] && t(1, r)
                }(l, 0, n), i(ua(e), n), ta(), function (e, t) {
                    e && e(2, t)
                }(l, n)
            } finally {
                ea(r)
            }
        }

        function ba(e, t) {
            null == t && (t = Zu), function (e, t) {
                e >= (t ? t.length : 0) && tu("index expected to be a valid data index")
            }(e, t || Zu)
        }

        function _a(e, t) {
            null == t && (t = Zu), Xl(t.length, e, "index " + e + " expected to be at the end of arr (length " + t.length + ")")
        }

        function wa(e) {
            ngDevMode && eu(e, "expecting component got null");
            var t = e[Gu];
            return ngDevMode && eu(e, "object is not a component"), t
        }

        var Ca = Wu;

        function Sa(e) {
            return {components: [], scheduler: e, clean: Ca}
        }

        var xa = function () {
            function e(e, t) {
                this._view = e, this._appRef = null, this._viewContainerRef = null, this._lViewNode = null, this.context = t
            }

            return e.prototype._setComponentContext = function (e, t) {
                this._view = e, this.context = t
            }, Object.defineProperty(e.prototype, "destroyed", {
                get: function () {
                    return 32 == (32 & this._view[uu])
                }, enumerable: !0, configurable: !0
            }), e.prototype.destroy = function () {
                var e, t;
                this._viewContainerRef && ha(this._view) && (this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), this._viewContainerRef = null), Eu(t = (e = this._view)[hu]) && t.destroyNode && function (t, n, r, o, i, l) {
                    for (var u = e[au], a = -1; u;) {
                        var s = null, c = u.tNode.type;
                        if (3 === c) Mu(2, o, null, u.native, l), u.dynamicLContainerNode && Mu(2, o, null, u.dynamicLContainerNode.native, l); else if (0 === c) {
                            Mu(2, o, null, u.native, l);
                            var p = u, f = p.dynamicLContainerNode ? p.dynamicLContainerNode.data : p.data;
                            (s = f[Su].length ? Iu(f[Su][0]) : null) && (l = p.dynamicLContainerNode ? p.dynamicLContainerNode.native : p.native)
                        } else if (1 === c) {
                            var d = Ru(u.view), h = d.tNode.projection[u.tNode.projection];
                            Nu[++a] = u, s = h ? d.data[ou][h.index] : null
                        } else s = Iu(u);
                        if (null === s) for (null === (s = Ou(u)) && 8192 & u.tNode.flags && (s = Ou(Nu[a--])); u && !s;) {
                            if (null === (u = Au(u)) || u === n) return null;
                            u.tNode.next || 0 !== c || (l = u.native), s = Ou(u)
                        }
                        u = s
                    }
                }(0, e[au], 0, t), function (e) {
                    if (-1 === e[ru].childIndex) return Lu(e);
                    for (var t = Du(e); t;) {
                        var n = null;
                        if (t.length >= nu ? t[ru].childIndex > -1 && (n = Du(t)) : t[Su].length && (n = t[Su][0].data), null == n) {
                            for (; t && !t[iu] && t !== e;) Lu(t), t = ju(t, e);
                            Lu(t || e), n = t && t[iu]
                        }
                        t = n
                    }
                }(e), e[uu] |= 32
            }, e.prototype.onDestroy = function (e) {
                var t, n;
                n = e, function (e) {
                    return e[pu] || (e[pu] = [])
                }(t = this._view).push(n), t[ru].firstTemplatePass && function (e) {
                    return e[ru].cleanup || (e[ru].cleanup = [])
                }(t).push(t[pu].length - 1, null)
            }, e.prototype.markForCheck = function () {
                !function (e) {
                    for (var t = e; null != t[ou];) t[uu] |= 4, t = t[ou];
                    var n, r;
                    t[uu] |= 4, ngDevMode && eu(t[fu], "rootContext"), (n = t[fu]).clean == Wu && (n.clean = new Promise(function (e) {
                        return r = e
                    }), n.scheduler(function () {
                        ga(n), r(null), n.clean = Wu
                    }))
                }(this._view)
            }, e.prototype.detach = function () {
                this._view[uu] &= -9
            }, e.prototype.reattach = function () {
                this._view[uu] |= 8
            }, e.prototype.detectChanges = function () {
                ya(this.context)
            }, e.prototype.checkNoChanges = function () {
                !function (e) {
                    Ju = !0;
                    try {
                        ya(e)
                    } finally {
                        Ju = !1
                    }
                }(this.context)
            }, e.prototype.attachToViewContainerRef = function (e) {
                this._viewContainerRef = e
            }, e.prototype.detachFromAppRef = function () {
                this._appRef = null
            }, e.prototype.attachToAppRef = function (e) {
                this._appRef = e
            }, e
        }(), Ea = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return o(t, e), t.prototype.resolveComponentFactory = function (e) {
                return ngDevMode && (void 0 === t && (t = "Type passed in is not ComponentType, it does not have 'ngComponentDef' property."), e.ngComponentDef || tu(t)), new Oa(e.ngComponentDef);
                var t
            }, t
        }($t);

        function ka(e) {
            var t = [];
            for (var n in e) e.hasOwnProperty(n) && t.push({propName: e[n], templateName: n});
            return t
        }

        var Pa = new me("ROOT_CONTEXT_TOKEN", {
            providedIn: "root", factory: function () {
                return Sa(ct(Ta))
            }
        }), Ta = new me("SCHEDULER_TOKEN", {
            providedIn: "root", factory: function () {
                return requestAnimationFrame.bind(window)
            }
        }), Oa = function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.componentDef = t, n.componentType = t.type, n.selector = t.selectors[0][0], n.ngContentSelectors = [], n
            }

            return o(t, e), Object.defineProperty(t.prototype, "inputs", {
                get: function () {
                    return ka(this.componentDef.inputs)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "outputs", {
                get: function () {
                    return ka(this.componentDef.outputs)
                }, enumerable: !0, configurable: !0
            }), t.prototype.create = function (e, t, n, r) {
                var o, i, l = void 0 === n, u = r ? r.injector.get(An) : ku,
                    a = l ? (o = this.selector, Eu(i = u.createRenderer(null, this.componentDef.rendererType) || Vu) ? i.createElement(o, aa) : null === aa ? i.createElement(o) : i.createElementNS(aa, o)) : pa(u, n),
                    s = r && !l ? r.injector.get(Pa) : Sa(requestAnimationFrame.bind(window)),
                    c = ra(u.createRenderer(a, this.componentDef.rendererType), ca(-1, null, null, null, null), s, this.componentDef.onPush ? 4 : 2);
                c[du] = r && r.injector || null;
                var p, f, d = Xu(c, null);
                try {
                    if (u.begin && u.begin(), f = function (e, t, n, r) {
                        Fu = !1, Hu = null;
                        var o,
                            i = oa(0, 3, t, null, null, ra(Vu, (o = n.template).ngPrivateData || (o.ngPrivateData = ca(-1, o, n.directiveDefs, n.pipeDefs, n.viewQuery)), null, n.onPush ? 4 : 2, r));
                        return $u && (i.tNode.flags = 4096, n.diPublic && n.diPublic(n), zu.directives = [n]), i
                    }(0, a, this.componentDef), s.components.push(p = function (e, t, n) {
                        if (ngDevMode && Xl(Zu[su], -1, "directives should be created before any bindings"), ngDevMode && Xl(Fu, !0, "previousOrParentNode should be a parent"), Object.defineProperty(t, Gu, {
                            enumerable: !1,
                            value: Hu
                        }), null == Qu && (Zu[cu] = Qu = []), ngDevMode && _a(e, Qu), Qu[e] = t, $u) {
                            var r = Hu.tNode.flags;
                            0 == (4095 & r) ? Hu.tNode.flags = e << 14 | 4096 & r | 1 : (ngDevMode && 4095 == (4095 & r) && tu("Reached the max number of directives"), Hu.tNode.flags++)
                        } else {
                            var o = n.diPublic;
                            o && o(n)
                        }
                        return null != n.attributes && 3 == Hu.tNode.type && function (e, t) {
                            for (var n = Eu(Vu), r = 0; r < t.length;) {
                                var o = t[r];
                                if (1 === o) break;
                                if (o === xu) r += 2; else if (ngDevMode && ngDevMode.rendererSetAttribute++, 0 === o) {
                                    var i = t[r + 1], l = t[r + 2], u = t[r + 3];
                                    n ? Vu.setAttribute(e, l, u, i) : e.setAttributeNS(i, l, u), r += 4
                                } else u = t[r + 1], n ? Vu.setAttribute(e, o, u) : e.setAttribute(o, u), r += 2
                            }
                        }(Hu.native, n.attributes), t
                    }(0, this.componentDef.factory(), this.componentDef)), function (e, t, n) {
                        e && null != e.changeDetectorRef && e.changeDetectorRef._setComponentContext(f.data, p)
                    }(f.nodeInjector), function (e, t) {
                        var n = wa(e), r = n.view[ru];
                        (function (e, t, n, r) {
                            ngDevMode && Xl(r.firstTemplatePass, !0, "Should only be called on first template pass"), t && (r.initHooks || (r.initHooks = [])).push(0, t), n && ((r.initHooks || (r.initHooks = [])).push(0, n), (r.checkHooks || (r.checkHooks = [])).push(0, n))
                        })(0, t.onInit, t.doCheck, r), function (e, t) {
                            if (t.firstTemplatePass) for (var n = e >> 14, r = n + (4095 & e), o = n; o < r; o++) {
                                var i = t.directives[o];
                                vu(i, t, o), yu(i, t, o), mu(i, t, o)
                            }
                        }(n.tNode.flags, r)
                    }(p, this.componentDef), t) for (var h = 0, g = f.tNode.projection = [], v = 0; v < t.length; v++) {
                        for (var y = t[v], m = null, b = null, _ = 0; _ < y.length; _++) {
                            var w = oa(++h, 3, y[_], null, null);
                            b ? b.next = w.tNode : m = w.tNode, b = w.tNode
                        }
                        g.push(m)
                    }
                    ia(f, f.data[ru], p, 1), f.data[uu] &= -2
                } finally {
                    Xu(d, null), u.end && u.end()
                }
                var C = new Ia(this.componentType, p, c, e, a);
                return l && (C.hostView._lViewNode.tNode.child = f.tNode), C
            }, t
        }(Qt), Ia = function (e) {
            function t(t, n, r, o, i) {
                var l = e.call(this) || this;
                return l.destroyCbs = [], l.instance = n, l.hostView = l.changeDetectorRef = new xa(r, n), l.hostView._lViewNode = oa(-1, 2, null, null, null, r), l.injector = o, l.location = new Mn(i), l.componentType = t, l
            }

            return o(t, e), t.prototype.destroy = function () {
                ngDevMode && eu(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.forEach(function (e) {
                    return e()
                }), this.destroyCbs = null
            }, t.prototype.onDestroy = function (e) {
                ngDevMode && eu(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.push(e)
            }, t
        }(Zt), Aa = {
            provide: $t, useFactory: function () {
                return new Ea
            }, deps: []
        }, Na = function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                r._bootstrapComponents = [], r.destroyCbs = [];
                var o = t.ngModuleDef;
                return ngDevMode && eu(o, "NgModule '" + je(t) + "' is not a subtype of 'NgModuleType'."), r._bootstrapComponents = o.bootstrap, r.injector = function (e, t, n) {
                    return void 0 === t && (t = null), void 0 === n && (n = null), t = t || kt(), new Pt(e, n, t)
                }(t, n, [Aa, {
                    provide: tn,
                    useValue: r
                }]), r.instance = r.injector.get(t), r.componentFactoryResolver = new Ea, r
            }

            return o(t, e), t.prototype.destroy = function () {
                ngDevMode && eu(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.forEach(function (e) {
                    return e()
                }), this.destroyCbs = null
            }, t.prototype.onDestroy = function (e) {
                ngDevMode && eu(this.destroyCbs, "NgModule already destroyed"), this.destroyCbs.push(e)
            }, t
        }(tn);
        !function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.moduleType = t, n
            }

            o(t, e), t.prototype.create = function (e) {
                return new Na(this.moduleType, e)
            }
        }(nn);
        var Ra = function () {
        }, Ma = new M(function (e) {
            return e.complete()
        });

        function Da(e) {
            return e ? function (e) {
                return new M(function (t) {
                    return e.schedule(function () {
                        return t.complete()
                    })
                })
            }(e) : Ma
        }

        function ja() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n, r, o = e[e.length - 1];
            switch (j(o) ? e.pop() : o = void 0, e.length) {
                case 0:
                    return Da(o);
                case 1:
                    return o ? J(e, o) : (n = e[0], (r = new M(function (e) {
                        e.next(n), e.complete()
                    }))._isScalar = !0, r.value = n, r);
                default:
                    return J(e, o)
            }
        }

        function La() {
            return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
        }

        La.prototype = Object.create(Error.prototype);
        var Va = La, Ua = function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return n._value = t, n
            }

            return o(t, e), Object.defineProperty(t.prototype, "value", {
                get: function () {
                    return this.getValue()
                }, enumerable: !0, configurable: !0
            }), t.prototype._subscribe = function (t) {
                var n = e.prototype._subscribe.call(this, t);
                return n && !n.closed && t.next(this._value), n
            }, t.prototype.getValue = function () {
                if (this.hasError) throw this.thrownError;
                if (this.closed) throw new ie;
                return this._value
            }, t.prototype.next = function (t) {
                e.prototype.next.call(this, this._value = t)
            }, t
        }(ae);

        function Ha(e, t) {
            return X(e, t, 1)
        }

        function Fa(e, t) {
            return function (n) {
                return n.lift(new za(e, t))
            }
        }

        var za = function () {
            function e(e, t) {
                this.predicate = e, this.thisArg = t
            }

            return e.prototype.call = function (e, t) {
                return t.subscribe(new Ba(e, this.predicate, this.thisArg))
            }, e
        }(), Ba = function (e) {
            function t(t, n, r) {
                var o = e.call(this, t) || this;
                return o.predicate = n, o.thisArg = r, o.count = 0, o
            }

            return o(t, e), t.prototype._next = function (e) {
                var t;
                try {
                    t = this.predicate.call(this.thisArg, e, this.count++)
                } catch (e) {
                    return void this.destination.error(e)
                }
                t && this.destination.next(e)
            }, t
        }(T);

        function qa() {
            return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
        }

        qa.prototype = Object.create(Error.prototype);
        var Za = qa;

        function Qa(e) {
            return function (t) {
                return 0 === e ? Da() : t.lift(new Ga(e))
            }
        }

        var Ga = function () {
            function e(e) {
                if (this.total = e, this.total < 0) throw new Za
            }

            return e.prototype.call = function (e, t) {
                return t.subscribe(new Wa(e, this.total))
            }, e
        }(), Wa = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.total = n, r.ring = new Array, r.count = 0, r
            }

            return o(t, e), t.prototype._next = function (e) {
                var t = this.ring, n = this.total, r = this.count++;
                t.length < n ? t.push(e) : t[r % n] = e
            }, t.prototype._complete = function () {
                var e = this.destination, t = this.count;
                if (t > 0) for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0; o < n; o++) {
                    var i = t++ % n;
                    e.next(r[i])
                }
                e.complete()
            }, t
        }(T), Ka = function () {
            function e(e, t, n) {
                this.nextOrObserver = e, this.error = t, this.complete = n
            }

            return e.prototype.call = function (e, t) {
                return t.subscribe(new Ya(e, this.nextOrObserver, this.error, this.complete))
            }, e
        }(), Ya = function (e) {
            function t(t, n, r, o) {
                var i = e.call(this, t) || this;
                return i._tapNext = A, i._tapError = A, i._tapComplete = A, i._tapError = r || A, i._tapComplete = o || A, f(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || A, i._tapError = n.error || A, i._tapComplete = n.complete || A), i
            }

            return o(t, e), t.prototype._next = function (e) {
                try {
                    this._tapNext.call(this._context, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.next(e)
            }, t.prototype._error = function (e) {
                try {
                    this._tapError.call(this._context, e)
                } catch (e) {
                    return void this.destination.error(e)
                }
                this.destination.error(e)
            }, t.prototype._complete = function () {
                try {
                    this._tapComplete.call(this._context)
                } catch (e) {
                    return void this.destination.error(e)
                }
                return this.destination.complete()
            }, t
        }(T), Ja = function (e) {
            return void 0 === e && (e = $a), t = {
                hasValue: !1, next: function () {
                    this.hasValue = !0
                }, complete: function () {
                    if (!this.hasValue) throw e()
                }
            }, function (e) {
                return e.lift(new Ka(t, void 0, void 0))
            };
            var t
        };

        function $a() {
            return new Va
        }

        function Xa(e) {
            return void 0 === e && (e = null), function (t) {
                return t.lift(new es(e))
            }
        }

        var es = function () {
            function e(e) {
                this.defaultValue = e
            }

            return e.prototype.call = function (e, t) {
                return t.subscribe(new ts(e, this.defaultValue))
            }, e
        }(), ts = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.defaultValue = n, r.isEmpty = !0, r
            }

            return o(t, e), t.prototype._next = function (e) {
                this.isEmpty = !1, this.destination.next(e)
            }, t.prototype._complete = function () {
                this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
            }, t
        }(T);

        function ns(e, t) {
            var n = arguments.length >= 2;
            return function (r) {
                return r.pipe(e ? Fa(function (t, n) {
                    return e(t, n, r)
                }) : ne, Qa(1), n ? Xa(t) : Ja(function () {
                    return new Va
                }))
            }
        }

        function rs(e) {
            return function (t) {
                var n = new os(e), r = t.lift(n);
                return n.caught = r
            }
        }

        var os = function () {
            function e(e) {
                this.selector = e
            }

            return e.prototype.call = function (e, t) {
                return t.subscribe(new is(e, this.selector, this.caught))
            }, e
        }(), is = function (e) {
            function t(t, n, r) {
                var o = e.call(this, t) || this;
                return o.selector = n, o.caught = r, o
            }

            return o(t, e), t.prototype.error = function (t) {
                if (!this.isStopped) {
                    var n = void 0;
                    try {
                        n = this.selector(t, this.caught)
                    } catch (t) {
                        return void e.prototype.error.call(this, t)
                    }
                    this._unsubscribeAndRecycle();
                    var r = new L(this, void 0, void 0);
                    this.add(r), Q(this, n, void 0, void 0, r)
                }
            }, t
        }(G);

        function ls(e, t) {
            return function (n) {
                return n.lift(new us(e, t, n))
            }
        }

        var us = function () {
            function e(e, t, n) {
                this.predicate = e, this.thisArg = t, this.source = n
            }

            return e.prototype.call = function (e, t) {
                return t.subscribe(new as(e, this.predicate, this.thisArg, this.source))
            }, e
        }(), as = function (e) {
            function t(t, n, r, o) {
                var i = e.call(this, t) || this;
                return i.predicate = n, i.thisArg = r, i.source = o, i.index = 0, i.thisArg = r || i, i
            }

            return o(t, e), t.prototype.notifyComplete = function (e) {
                this.destination.next(e), this.destination.complete()
            }, t.prototype._next = function (e) {
                var t = !1;
                try {
                    t = this.predicate.call(this.thisArg, e, this.index++, this.source)
                } catch (e) {
                    return void this.destination.error(e)
                }
                t || this.notifyComplete(!1)
            }, t.prototype._complete = function () {
                this.notifyComplete(!0)
            }, t
        }(T), ss = function () {
            function e(e) {
                if (this.total = e, this.total < 0) throw new Za
            }

            return e.prototype.call = function (e, t) {
                return t.subscribe(new cs(e, this.total))
            }, e
        }(), cs = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.total = n, r.count = 0, r
            }

            return o(t, e), t.prototype._next = function (e) {
                var t = this.total, n = ++this.count;
                n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
            }, t
        }(T);

        function ps(e, t) {
            var n = arguments.length >= 2;
            return function (r) {
                return r.pipe(e ? Fa(function (t, n) {
                    return e(t, n, r)
                }) : ne, function (e) {
                    return e.lift(new ss(1))
                }, n ? Xa(t) : Ja(function () {
                    return new Va
                }))
            }
        }

        function fs() {
            return re(1)
        }

        function ds(e, t) {
            var n = !1;
            return arguments.length >= 2 && (n = !0), function (r) {
                return r.lift(new hs(e, t, n))
            }
        }

        var hs = function () {
            function e(e, t, n) {
                void 0 === n && (n = !1), this.accumulator = e, this.seed = t, this.hasSeed = n
            }

            return e.prototype.call = function (e, t) {
                return t.subscribe(new gs(e, this.accumulator, this.seed, this.hasSeed))
            }, e
        }(), gs = function (e) {
            function t(t, n, r, o) {
                var i = e.call(this, t) || this;
                return i.accumulator = n, i._seed = r, i.hasSeed = o, i.index = 0, i
            }

            return o(t, e), Object.defineProperty(t.prototype, "seed", {
                get: function () {
                    return this._seed
                }, set: function (e) {
                    this.hasSeed = !0, this._seed = e
                }, enumerable: !0, configurable: !0
            }), t.prototype._next = function (e) {
                if (this.hasSeed) return this._tryNext(e);
                this.seed = e, this.destination.next(e)
            }, t.prototype._tryNext = function (e) {
                var t, n = this.index++;
                try {
                    t = this.accumulator(this.seed, e, n)
                } catch (e) {
                    this.destination.error(e)
                }
                this.seed = t, this.destination.next(t)
            }, t
        }(T), vs = function () {
        }, ys = new me("Location Initialized"), ms = function () {
        }, bs = new me("appBaseHref"), _s = function () {
            function e(e) {
                var n = this;
                this._subject = new an, this._platformStrategy = e;
                var r = this._platformStrategy.getBaseHref();
                this._baseHref = t.stripTrailingSlash(ws(r)), this._platformStrategy.onPopState(function (e) {
                    n._subject.emit({url: n.path(!0), pop: !0, state: e.state, type: e.type})
                })
            }

            var t;
            return t = e, e.prototype.path = function (e) {
                return void 0 === e && (e = !1), this.normalize(this._platformStrategy.path(e))
            }, e.prototype.isCurrentPathEqualTo = function (e, n) {
                return void 0 === n && (n = ""), this.path() == this.normalize(e + t.normalizeQueryParams(n))
            }, e.prototype.normalize = function (e) {
                return t.stripTrailingSlash(function (e, t) {
                    return e && t.startsWith(e) ? t.substring(e.length) : t
                }(this._baseHref, ws(e)))
            }, e.prototype.prepareExternalUrl = function (e) {
                return e && "/" !== e[0] && (e = "/" + e), this._platformStrategy.prepareExternalUrl(e)
            }, e.prototype.go = function (e, t, n) {
                void 0 === t && (t = ""), void 0 === n && (n = null), this._platformStrategy.pushState(n, "", e, t)
            }, e.prototype.replaceState = function (e, t, n) {
                void 0 === t && (t = ""), void 0 === n && (n = null), this._platformStrategy.replaceState(n, "", e, t)
            }, e.prototype.forward = function () {
                this._platformStrategy.forward()
            }, e.prototype.back = function () {
                this._platformStrategy.back()
            }, e.prototype.subscribe = function (e, t, n) {
                return this._subject.subscribe({next: e, error: t, complete: n})
            }, e.normalizeQueryParams = function (e) {
                return e && "?" !== e[0] ? "?" + e : e
            }, e.joinWithSlash = function (e, t) {
                if (0 == e.length) return t;
                if (0 == t.length) return e;
                var n = 0;
                return e.endsWith("/") && n++, t.startsWith("/") && n++, 2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
            }, e.stripTrailingSlash = function (e) {
                var t = e.match(/#|\?|$/), n = t && t.index || e.length;
                return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n)
            }, e
        }();

        function ws(e) {
            return e.replace(/\/index.html$/, "")
        }

        var Cs = function (e) {
                function t(t, n) {
                    var r = e.call(this) || this;
                    return r._platformLocation = t, r._baseHref = "", null != n && (r._baseHref = n), r
                }

                return o(t, e), t.prototype.onPopState = function (e) {
                    this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e)
                }, t.prototype.getBaseHref = function () {
                    return this._baseHref
                }, t.prototype.path = function (e) {
                    void 0 === e && (e = !1);
                    var t = this._platformLocation.hash;
                    return null == t && (t = "#"), t.length > 0 ? t.substring(1) : t
                }, t.prototype.prepareExternalUrl = function (e) {
                    var t = _s.joinWithSlash(this._baseHref, e);
                    return t.length > 0 ? "#" + t : t
                }, t.prototype.pushState = function (e, t, n, r) {
                    var o = this.prepareExternalUrl(n + _s.normalizeQueryParams(r));
                    0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(e, t, o)
                }, t.prototype.replaceState = function (e, t, n, r) {
                    var o = this.prepareExternalUrl(n + _s.normalizeQueryParams(r));
                    0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(e, t, o)
                }, t.prototype.forward = function () {
                    this._platformLocation.forward()
                }, t.prototype.back = function () {
                    this._platformLocation.back()
                }, l([u(1, He()), u(1, Ue(bs))], t)
            }(ms), Ss = function (e) {
                function t(t, n) {
                    var r = e.call(this) || this;
                    if (r._platformLocation = t, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                    return r._baseHref = n, r
                }

                return o(t, e), t.prototype.onPopState = function (e) {
                    this._platformLocation.onPopState(e), this._platformLocation.onHashChange(e)
                }, t.prototype.getBaseHref = function () {
                    return this._baseHref
                }, t.prototype.prepareExternalUrl = function (e) {
                    return _s.joinWithSlash(this._baseHref, e)
                }, t.prototype.path = function (e) {
                    void 0 === e && (e = !1);
                    var t = this._platformLocation.pathname + _s.normalizeQueryParams(this._platformLocation.search),
                        n = this._platformLocation.hash;
                    return n && e ? "" + t + n : t
                }, t.prototype.pushState = function (e, t, n, r) {
                    var o = this.prepareExternalUrl(n + _s.normalizeQueryParams(r));
                    this._platformLocation.pushState(e, t, o)
                }, t.prototype.replaceState = function (e, t, n, r) {
                    var o = this.prepareExternalUrl(n + _s.normalizeQueryParams(r));
                    this._platformLocation.replaceState(e, t, o)
                }, t.prototype.forward = function () {
                    this._platformLocation.forward()
                }, t.prototype.back = function () {
                    this._platformLocation.back()
                }, l([u(1, He()), u(1, Ue(bs))], t)
            }(ms), xs = void 0,
            Es = ["en", [["a", "p"], ["AM", "PM"], xs], [["AM", "PM"], xs, xs], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], xs, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], xs, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", xs, "{1} 'at' {0}", xs], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {}, function (e) {
                var t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length;
                return 1 === t && 0 === n ? 1 : 5
            }], ks = {}, Ps = function (e) {
                return e[e.Zero = 0] = "Zero", e[e.One = 1] = "One", e[e.Two = 2] = "Two", e[e.Few = 3] = "Few", e[e.Many = 4] = "Many", e[e.Other = 5] = "Other", e
            }({}), Ts = new me("UseV4Plurals"), Os = function () {
            }, Is = function (e) {
                function t(t, n) {
                    var r = e.call(this) || this;
                    return r.locale = t, r.deprecatedPluralFn = n, r
                }

                return o(t, e), t.prototype.getPluralCategory = function (e, t) {
                    switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(t || this.locale, e) : function (e) {
                        return function (e) {
                            var t = e.toLowerCase().replace(/_/g, "-"), n = ks[t];
                            if (n) return n;
                            var r = t.split("-")[0];
                            if (n = ks[r]) return n;
                            if ("en" === r) return Es;
                            throw new Error('Missing locale data for the locale "' + e + '".')
                        }(e)[18]
                    }(t || this.locale)(e)) {
                        case Ps.Zero:
                            return "zero";
                        case Ps.One:
                            return "one";
                        case Ps.Two:
                            return "two";
                        case Ps.Few:
                            return "few";
                        case Ps.Many:
                            return "many";
                        default:
                            return "other"
                    }
                }, l([u(0, Ue(vr)), u(1, He()), u(1, Ue(Ts))], t)
            }(Os), As = function () {
                function e(e, t, n, r) {
                    this._iterableDiffers = e, this._keyValueDiffers = t, this._ngEl = n, this._renderer = r, this._initialClasses = []
                }

                return Object.defineProperty(e.prototype, "klass", {
                    set: function (e) {
                        this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof e ? e.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass)
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "ngClass", {
                    set: function (e) {
                        this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof e ? e.split(/\s+/) : e, this._rawClass && ($n(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create())
                    }, enumerable: !0, configurable: !0
                }), e.prototype.ngDoCheck = function () {
                    if (this._iterableDiffer) {
                        var e = this._iterableDiffer.diff(this._rawClass);
                        e && this._applyIterableChanges(e)
                    } else if (this._keyValueDiffer) {
                        var t = this._keyValueDiffer.diff(this._rawClass);
                        t && this._applyKeyValueChanges(t)
                    }
                }, e.prototype._applyKeyValueChanges = function (e) {
                    var t = this;
                    e.forEachAddedItem(function (e) {
                        return t._toggleClass(e.key, e.currentValue)
                    }), e.forEachChangedItem(function (e) {
                        return t._toggleClass(e.key, e.currentValue)
                    }), e.forEachRemovedItem(function (e) {
                        e.previousValue && t._toggleClass(e.key, !1)
                    })
                }, e.prototype._applyIterableChanges = function (e) {
                    var t = this;
                    e.forEachAddedItem(function (e) {
                        if ("string" != typeof e.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + je(e.item));
                        t._toggleClass(e.item, !0)
                    }), e.forEachRemovedItem(function (e) {
                        return t._toggleClass(e.item, !1)
                    })
                }, e.prototype._applyClasses = function (e) {
                    var t = this;
                    e && (Array.isArray(e) || e instanceof Set ? e.forEach(function (e) {
                        return t._toggleClass(e, !0)
                    }) : Object.keys(e).forEach(function (n) {
                        return t._toggleClass(n, !!e[n])
                    }))
                }, e.prototype._removeClasses = function (e) {
                    var t = this;
                    e && (Array.isArray(e) || e instanceof Set ? e.forEach(function (e) {
                        return t._toggleClass(e, !1)
                    }) : Object.keys(e).forEach(function (e) {
                        return t._toggleClass(e, !1)
                    }))
                }, e.prototype._toggleClass = function (e, t) {
                    var n = this;
                    (e = e.trim()) && e.split(/\s+/g).forEach(function (e) {
                        t ? n._renderer.addClass(n._ngEl.nativeElement, e) : n._renderer.removeClass(n._ngEl.nativeElement, e)
                    })
                }, e
            }(), Ns = function () {
            }, Rs = new me("DocumentToken"), Ms = "server", Ds = function () {
                function e() {
                }

                return e.ngInjectableDef = ye({
                    providedIn: "root", factory: function () {
                        return new js(ct(Rs), window)
                    }
                }), e
            }(), js = function () {
                function e(e, t) {
                    this.document = e, this.window = t, this.offset = function () {
                        return [0, 0]
                    }
                }

                return e.prototype.setOffset = function (e) {
                    this.offset = Array.isArray(e) ? function () {
                        return e
                    } : e
                }, e.prototype.getScrollPosition = function () {
                    return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
                }, e.prototype.scrollToPosition = function (e) {
                    this.supportScrollRestoration() && this.window.scrollTo(e[0], e[1])
                }, e.prototype.scrollToAnchor = function (e) {
                    if (this.supportScrollRestoration()) {
                        var t = this.document.querySelector("#" + e);
                        if (t) return void this.scrollToElement(t);
                        var n = this.document.querySelector("[name='" + e + "']");
                        if (n) return void this.scrollToElement(n)
                    }
                }, e.prototype.setHistoryScrollRestoration = function (e) {
                    if (this.supportScrollRestoration()) {
                        var t = this.window.history;
                        t && t.scrollRestoration && (t.scrollRestoration = e)
                    }
                }, e.prototype.scrollToElement = function (e) {
                    var t = e.getBoundingClientRect(), n = t.left + this.window.pageXOffset,
                        r = t.top + this.window.pageYOffset, o = this.offset();
                    this.window.scrollTo(n - o[0], r - o[1])
                }, e.prototype.supportScrollRestoration = function () {
                    try {
                        return !!this.window && !!this.window.scrollTo
                    } catch (e) {
                        return !1
                    }
                }, e
            }(), Ls = null;

        function Vs() {
            return Ls
        }

        var Us, Hs = {class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex"}, Fs = {
            "\b": "Backspace",
            "\t": "Tab",
            "\x7f": "Delete",
            "\x1b": "Escape",
            Del: "Delete",
            Esc: "Escape",
            Left: "ArrowLeft",
            Right: "ArrowRight",
            Up: "ArrowUp",
            Down: "ArrowDown",
            Menu: "ContextMenu",
            Scroll: "ScrollLock",
            Win: "OS"
        }, zs = {
            A: "1",
            B: "2",
            C: "3",
            D: "4",
            E: "5",
            F: "6",
            G: "7",
            H: "8",
            I: "9",
            J: "*",
            K: "+",
            M: "-",
            N: ".",
            O: "/",
            "`": "0",
            "\x90": "NumLock"
        };
        Ie.Node && (Us = Ie.Node.prototype.contains || function (e) {
            return !!(16 & this.compareDocumentPosition(e))
        });
        var Bs, qs = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return o(t, e), t.prototype.parse = function (e) {
                throw new Error("parse not implemented")
            }, t.makeCurrent = function () {
                var e;
                e = new t, Ls || (Ls = e)
            }, t.prototype.hasProperty = function (e, t) {
                return t in e
            }, t.prototype.setProperty = function (e, t, n) {
                e[t] = n
            }, t.prototype.getProperty = function (e, t) {
                return e[t]
            }, t.prototype.invoke = function (e, t, n) {
                var r;
                (r = e)[t].apply(r, p(n))
            }, t.prototype.logError = function (e) {
                window.console && (console.error ? console.error(e) : console.log(e))
            }, t.prototype.log = function (e) {
                window.console && window.console.log && window.console.log(e)
            }, t.prototype.logGroup = function (e) {
                window.console && window.console.group && window.console.group(e)
            }, t.prototype.logGroupEnd = function () {
                window.console && window.console.groupEnd && window.console.groupEnd()
            }, Object.defineProperty(t.prototype, "attrToPropMap", {
                get: function () {
                    return Hs
                }, enumerable: !0, configurable: !0
            }), t.prototype.contains = function (e, t) {
                return Us.call(e, t)
            }, t.prototype.querySelector = function (e, t) {
                return e.querySelector(t)
            }, t.prototype.querySelectorAll = function (e, t) {
                return e.querySelectorAll(t)
            }, t.prototype.on = function (e, t, n) {
                e.addEventListener(t, n, !1)
            }, t.prototype.onAndCancel = function (e, t, n) {
                return e.addEventListener(t, n, !1), function () {
                    e.removeEventListener(t, n, !1)
                }
            }, t.prototype.dispatchEvent = function (e, t) {
                e.dispatchEvent(t)
            }, t.prototype.createMouseEvent = function (e) {
                var t = this.getDefaultDocument().createEvent("MouseEvent");
                return t.initEvent(e, !0, !0), t
            }, t.prototype.createEvent = function (e) {
                var t = this.getDefaultDocument().createEvent("Event");
                return t.initEvent(e, !0, !0), t
            }, t.prototype.preventDefault = function (e) {
                e.preventDefault(), e.returnValue = !1
            }, t.prototype.isPrevented = function (e) {
                return e.defaultPrevented || null != e.returnValue && !e.returnValue
            }, t.prototype.getInnerHTML = function (e) {
                return e.innerHTML
            }, t.prototype.getTemplateContent = function (e) {
                return "content" in e && this.isTemplateElement(e) ? e.content : null
            }, t.prototype.getOuterHTML = function (e) {
                return e.outerHTML
            }, t.prototype.nodeName = function (e) {
                return e.nodeName
            }, t.prototype.nodeValue = function (e) {
                return e.nodeValue
            }, t.prototype.type = function (e) {
                return e.type
            }, t.prototype.content = function (e) {
                return this.hasProperty(e, "content") ? e.content : e
            }, t.prototype.firstChild = function (e) {
                return e.firstChild
            }, t.prototype.nextSibling = function (e) {
                return e.nextSibling
            }, t.prototype.parentElement = function (e) {
                return e.parentNode
            }, t.prototype.childNodes = function (e) {
                return e.childNodes
            }, t.prototype.childNodesAsList = function (e) {
                for (var t = e.childNodes, n = new Array(t.length), r = 0; r < t.length; r++) n[r] = t[r];
                return n
            }, t.prototype.clearNodes = function (e) {
                for (; e.firstChild;) e.removeChild(e.firstChild)
            }, t.prototype.appendChild = function (e, t) {
                e.appendChild(t)
            }, t.prototype.removeChild = function (e, t) {
                e.removeChild(t)
            }, t.prototype.replaceChild = function (e, t, n) {
                e.replaceChild(t, n)
            }, t.prototype.remove = function (e) {
                return e.parentNode && e.parentNode.removeChild(e), e
            }, t.prototype.insertBefore = function (e, t, n) {
                e.insertBefore(n, t)
            }, t.prototype.insertAllBefore = function (e, t, n) {
                n.forEach(function (n) {
                    return e.insertBefore(n, t)
                })
            }, t.prototype.insertAfter = function (e, t, n) {
                e.insertBefore(n, t.nextSibling)
            }, t.prototype.setInnerHTML = function (e, t) {
                e.innerHTML = t
            }, t.prototype.getText = function (e) {
                return e.textContent
            }, t.prototype.setText = function (e, t) {
                e.textContent = t
            }, t.prototype.getValue = function (e) {
                return e.value
            }, t.prototype.setValue = function (e, t) {
                e.value = t
            }, t.prototype.getChecked = function (e) {
                return e.checked
            }, t.prototype.setChecked = function (e, t) {
                e.checked = t
            }, t.prototype.createComment = function (e) {
                return this.getDefaultDocument().createComment(e)
            }, t.prototype.createTemplate = function (e) {
                var t = this.getDefaultDocument().createElement("template");
                return t.innerHTML = e, t
            }, t.prototype.createElement = function (e, t) {
                return (t = t || this.getDefaultDocument()).createElement(e)
            }, t.prototype.createElementNS = function (e, t, n) {
                return (n = n || this.getDefaultDocument()).createElementNS(e, t)
            }, t.prototype.createTextNode = function (e, t) {
                return (t = t || this.getDefaultDocument()).createTextNode(e)
            }, t.prototype.createScriptTag = function (e, t, n) {
                var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
                return r.setAttribute(e, t), r
            }, t.prototype.createStyleElement = function (e, t) {
                var n = (t = t || this.getDefaultDocument()).createElement("style");
                return this.appendChild(n, this.createTextNode(e, t)), n
            }, t.prototype.createShadowRoot = function (e) {
                return e.createShadowRoot()
            }, t.prototype.getShadowRoot = function (e) {
                return e.shadowRoot
            }, t.prototype.getHost = function (e) {
                return e.host
            }, t.prototype.clone = function (e) {
                return e.cloneNode(!0)
            }, t.prototype.getElementsByClassName = function (e, t) {
                return e.getElementsByClassName(t)
            }, t.prototype.getElementsByTagName = function (e, t) {
                return e.getElementsByTagName(t)
            }, t.prototype.classList = function (e) {
                return Array.prototype.slice.call(e.classList, 0)
            }, t.prototype.addClass = function (e, t) {
                e.classList.add(t)
            }, t.prototype.removeClass = function (e, t) {
                e.classList.remove(t)
            }, t.prototype.hasClass = function (e, t) {
                return e.classList.contains(t)
            }, t.prototype.setStyle = function (e, t, n) {
                e.style[t] = n
            }, t.prototype.removeStyle = function (e, t) {
                e.style[t] = ""
            }, t.prototype.getStyle = function (e, t) {
                return e.style[t]
            }, t.prototype.hasStyle = function (e, t, n) {
                var r = this.getStyle(e, t) || "";
                return n ? r == n : r.length > 0
            }, t.prototype.tagName = function (e) {
                return e.tagName
            }, t.prototype.attributeMap = function (e) {
                for (var t = new Map, n = e.attributes, r = 0; r < n.length; r++) {
                    var o = n.item(r);
                    t.set(o.name, o.value)
                }
                return t
            }, t.prototype.hasAttribute = function (e, t) {
                return e.hasAttribute(t)
            }, t.prototype.hasAttributeNS = function (e, t, n) {
                return e.hasAttributeNS(t, n)
            }, t.prototype.getAttribute = function (e, t) {
                return e.getAttribute(t)
            }, t.prototype.getAttributeNS = function (e, t, n) {
                return e.getAttributeNS(t, n)
            }, t.prototype.setAttribute = function (e, t, n) {
                e.setAttribute(t, n)
            }, t.prototype.setAttributeNS = function (e, t, n, r) {
                e.setAttributeNS(t, n, r)
            }, t.prototype.removeAttribute = function (e, t) {
                e.removeAttribute(t)
            }, t.prototype.removeAttributeNS = function (e, t, n) {
                e.removeAttributeNS(t, n)
            }, t.prototype.templateAwareRoot = function (e) {
                return this.isTemplateElement(e) ? this.content(e) : e
            }, t.prototype.createHtmlDocument = function () {
                return document.implementation.createHTMLDocument("fakeTitle")
            }, t.prototype.getDefaultDocument = function () {
                return document
            }, t.prototype.getBoundingClientRect = function (e) {
                try {
                    return e.getBoundingClientRect()
                } catch (e) {
                    return {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
                }
            }, t.prototype.getTitle = function (e) {
                return e.title
            }, t.prototype.setTitle = function (e, t) {
                e.title = t || ""
            }, t.prototype.elementMatches = function (e, t) {
                return !!this.isElementNode(e) && (e.matches && e.matches(t) || e.msMatchesSelector && e.msMatchesSelector(t) || e.webkitMatchesSelector && e.webkitMatchesSelector(t))
            }, t.prototype.isTemplateElement = function (e) {
                return this.isElementNode(e) && "TEMPLATE" === e.nodeName
            }, t.prototype.isTextNode = function (e) {
                return e.nodeType === Node.TEXT_NODE
            }, t.prototype.isCommentNode = function (e) {
                return e.nodeType === Node.COMMENT_NODE
            }, t.prototype.isElementNode = function (e) {
                return e.nodeType === Node.ELEMENT_NODE
            }, t.prototype.hasShadowRoot = function (e) {
                return null != e.shadowRoot && e instanceof HTMLElement
            }, t.prototype.isShadowRoot = function (e) {
                return e instanceof DocumentFragment
            }, t.prototype.importIntoDoc = function (e) {
                return document.importNode(this.templateAwareRoot(e), !0)
            }, t.prototype.adoptNode = function (e) {
                return document.adoptNode(e)
            }, t.prototype.getHref = function (e) {
                return e.getAttribute("href")
            }, t.prototype.getEventKey = function (e) {
                var t = e.key;
                if (null == t) {
                    if (null == (t = e.keyIdentifier)) return "Unidentified";
                    t.startsWith("U+") && (t = String.fromCharCode(parseInt(t.substring(2), 16)), 3 === e.location && zs.hasOwnProperty(t) && (t = zs[t]))
                }
                return Fs[t] || t
            }, t.prototype.getGlobalEventTarget = function (e, t) {
                return "window" === t ? window : "document" === t ? e : "body" === t ? e.body : null
            }, t.prototype.getHistory = function () {
                return window.history
            }, t.prototype.getLocation = function () {
                return window.location
            }, t.prototype.getBaseHref = function (e) {
                var t, n = Zs || (Zs = document.querySelector("base")) ? Zs.getAttribute("href") : null;
                return null == n ? null : (t = n, Bs || (Bs = document.createElement("a")), Bs.setAttribute("href", t), "/" === Bs.pathname.charAt(0) ? Bs.pathname : "/" + Bs.pathname)
            },t.prototype.resetBaseElement = function () {
                Zs = null
            },t.prototype.getUserAgent = function () {
                return window.navigator.userAgent
            },t.prototype.setData = function (e, t, n) {
                this.setAttribute(e, "data-" + t, n)
            },t.prototype.getData = function (e, t) {
                return this.getAttribute(e, "data-" + t)
            },t.prototype.getComputedStyle = function (e) {
                return getComputedStyle(e)
            },t.prototype.supportsWebAnimation = function () {
                return "function" == typeof Element.prototype.animate
            },t.prototype.performanceNow = function () {
                return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
            },t.prototype.supportsCookies = function () {
                return !0
            },t.prototype.getCookie = function (e) {
                return function (e, t) {
                    var n, r;
                    t = encodeURIComponent(t);
                    try {
                        for (var o = s(e.split(";")), i = o.next(); !i.done; i = o.next()) {
                            var l = i.value, u = l.indexOf("="),
                                a = c(-1 == u ? [l, ""] : [l.slice(0, u), l.slice(u + 1)], 2), p = a[1];
                            if (a[0].trim() === t) return decodeURIComponent(p)
                        }
                    } catch (e) {
                        n = {error: e}
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return null
                }(document.cookie, e)
            },t.prototype.setCookie = function (e, t) {
                document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            },t
        }(function (e) {
            function t() {
                var t = e.call(this) || this;
                t._animationPrefix = null, t._transitionEnd = null;
                try {
                    var n = t.createElement("div", document);
                    if (null != t.getStyle(n, "animationName")) t._animationPrefix = ""; else for (var r = ["Webkit", "Moz", "O", "ms"], o = 0; o < r.length; o++) if (null != t.getStyle(n, r[o] + "AnimationName")) {
                        t._animationPrefix = "-" + r[o].toLowerCase() + "-";
                        break
                    }
                    var i = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                    Object.keys(i).forEach(function (e) {
                        null != t.getStyle(n, e) && (t._transitionEnd = i[e])
                    })
                } catch (e) {
                    t._animationPrefix = null, t._transitionEnd = null
                }
                return t
            }

            return o(t, e), t.prototype.getDistributedNodes = function (e) {
                return e.getDistributedNodes()
            }, t.prototype.resolveAndSetHref = function (e, t, n) {
                e.href = null == n ? t : t + "/../" + n
            }, t.prototype.supportsDOMEvents = function () {
                return !0
            }, t.prototype.supportsNativeShadowDOM = function () {
                return "function" == typeof document.body.createShadowRoot
            }, t.prototype.getAnimationPrefix = function () {
                return this._animationPrefix ? this._animationPrefix : ""
            }, t.prototype.getTransitionEnd = function () {
                return this._transitionEnd ? this._transitionEnd : ""
            }, t.prototype.supportsAnimation = function () {
                return null != this._animationPrefix && null != this._transitionEnd
            }, t
        }(function () {
            function e() {
                this.resourceLoaderType = null
            }

            return Object.defineProperty(e.prototype, "attrToPropMap", {
                get: function () {
                    return this._attrToPropMap
                }, set: function (e) {
                    this._attrToPropMap = e
                }, enumerable: !0, configurable: !0
            }), e
        }())), Zs = null, Qs = Rs;

        function Gs() {
            return !!window.history.pushState
        }

        var Ws = function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return n._doc = t, n._init(), n
            }

            return o(t, e), t.prototype._init = function () {
                this.location = Vs().getLocation(), this._history = Vs().getHistory()
            }, t.prototype.getBaseHrefFromDOM = function () {
                return Vs().getBaseHref(this._doc)
            }, t.prototype.onPopState = function (e) {
                Vs().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", e, !1)
            }, t.prototype.onHashChange = function (e) {
                Vs().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", e, !1)
            }, Object.defineProperty(t.prototype, "pathname", {
                get: function () {
                    return this.location.pathname
                }, set: function (e) {
                    this.location.pathname = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "search", {
                get: function () {
                    return this.location.search
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(t.prototype, "hash", {
                get: function () {
                    return this.location.hash
                }, enumerable: !0, configurable: !0
            }), t.prototype.pushState = function (e, t, n) {
                Gs() ? this._history.pushState(e, t, n) : this.location.hash = n
            }, t.prototype.replaceState = function (e, t, n) {
                Gs() ? this._history.replaceState(e, t, n) : this.location.hash = n
            }, t.prototype.forward = function () {
                this._history.forward()
            }, t.prototype.back = function () {
                this._history.back()
            }, l([u(0, Ue(Qs)), a("design:paramtypes", [Object])], t)
        }(vs), Ks = new me("TRANSITION_ID"), Ys = [{
            provide: Rt, useFactory: function (e, t, n) {
                return function () {
                    n.get(Mt).donePromise.then(function () {
                        var n = Vs();
                        Array.prototype.slice.apply(n.querySelectorAll(t, "style[ng-transition]")).filter(function (t) {
                            return n.getAttribute(t, "ng-transition") === e
                        }).forEach(function (e) {
                            return n.remove(e)
                        })
                    })
                }
            }, deps: [Ks, Qs, We], multi: !0
        }], Js = function () {
            function e() {
            }

            return e.init = function () {
                var t;
                t = new e, bn = t
            }, e.prototype.addToWindow = function (e) {
                Ie.getAngularTestability = function (t, n) {
                    void 0 === n && (n = !0);
                    var r = e.findTestabilityInTree(t, n);
                    if (null == r) throw new Error("Could not find testability for element.");
                    return r
                }, Ie.getAllAngularTestabilities = function () {
                    return e.getAllTestabilities()
                }, Ie.getAllAngularRootElements = function () {
                    return e.getAllRootElements()
                }, Ie.frameworkStabilizers || (Ie.frameworkStabilizers = []), Ie.frameworkStabilizers.push(function (e) {
                    var t = Ie.getAllAngularTestabilities(), n = t.length, r = !1, o = function (t) {
                        r = r || t, 0 == --n && e(r)
                    };
                    t.forEach(function (e) {
                        e.whenStable(o)
                    })
                })
            }, e.prototype.findTestabilityInTree = function (e, t, n) {
                if (null == t) return null;
                var r = e.getTestability(t);
                return null != r ? r : n ? Vs().isShadowRoot(t) ? this.findTestabilityInTree(e, Vs().getHost(t), !0) : this.findTestabilityInTree(e, Vs().parentElement(t), !0) : null
            }, e
        }();

        function $s(e, t) {
            "undefined" != typeof COMPILED && COMPILED || ((Ie.ng = Ie.ng || {})[e] = t)
        }

        var Xs = {ApplicationRef: On, NgZone: sn};

        function ec(e) {
            return Gn(e)
        }

        var tc = new me("EventManagerPlugins"), nc = function () {
            function e(e, t) {
                var n = this;
                this._zone = t, this._eventNameToPlugin = new Map, e.forEach(function (e) {
                    return e.manager = n
                }), this._plugins = e.slice().reverse()
            }

            return e.prototype.addEventListener = function (e, t, n) {
                return this._findPluginFor(t).addEventListener(e, t, n)
            }, e.prototype.addGlobalEventListener = function (e, t, n) {
                return this._findPluginFor(t).addGlobalEventListener(e, t, n)
            }, e.prototype.getZone = function () {
                return this._zone
            }, e.prototype._findPluginFor = function (e) {
                var t = this._eventNameToPlugin.get(e);
                if (t) return t;
                for (var n = this._plugins, r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (o.supports(e)) return this._eventNameToPlugin.set(e, o), o
                }
                throw new Error("No event manager plugin found for event " + e)
            }, l([u(0, Ue(tc))], e)
        }(), rc = function () {
            function e(e) {
                this._doc = e
            }

            return e.prototype.addGlobalEventListener = function (e, t, n) {
                var r = Vs().getGlobalEventTarget(this._doc, e);
                if (!r) throw new Error("Unsupported event target " + r + " for event " + t);
                return this.addEventListener(r, t, n)
            }, e
        }(), oc = function () {
            function e() {
                this._stylesSet = new Set
            }

            return e.prototype.addStyles = function (e) {
                var t = this, n = new Set;
                e.forEach(function (e) {
                    t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e))
                }), this.onStylesAdded(n)
            }, e.prototype.onStylesAdded = function (e) {
            }, e.prototype.getAllStyles = function () {
                return Array.from(this._stylesSet)
            }, e
        }(), ic = function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return n._doc = t, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(t.head), n
            }

            return o(t, e), t.prototype._addStylesToHost = function (e, t) {
                var n = this;
                e.forEach(function (e) {
                    var r = n._doc.createElement("style");
                    r.textContent = e, n._styleNodes.add(t.appendChild(r))
                })
            }, t.prototype.addHost = function (e) {
                this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e)
            }, t.prototype.removeHost = function (e) {
                this._hostNodes.delete(e)
            }, t.prototype.onStylesAdded = function (e) {
                var t = this;
                this._hostNodes.forEach(function (n) {
                    return t._addStylesToHost(e, n)
                })
            }, t.prototype.ngOnDestroy = function () {
                this._styleNodes.forEach(function (e) {
                    return Vs().remove(e)
                })
            }, l([u(0, Ue(Qs))], t)
        }(oc), lc = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: "http://www.w3.org/1999/xhtml",
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }, uc = /%COMP%/g, ac = "_nghost-%COMP%", sc = "_ngcontent-%COMP%";

        function cc(e, t, n) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                Array.isArray(o) ? cc(e, o, n) : (o = o.replace(uc, e), n.push(o))
            }
            return n
        }

        function pc(e) {
            return function (t) {
                !1 === e(t) && (t.preventDefault(), t.returnValue = !1)
            }
        }

        var fc = function () {
            function e(e, t) {
                this.eventManager = e, this.sharedStylesHost = t, this.rendererByCompId = new Map, this.defaultRenderer = new dc(e)
            }

            return e.prototype.createRenderer = function (e, t) {
                if (!e || !t) return this.defaultRenderer;
                switch (t.encapsulation) {
                    case ft.Emulated:
                        var n = this.rendererByCompId.get(t.id);
                        return n || (n = new yc(this.eventManager, this.sharedStylesHost, t), this.rendererByCompId.set(t.id, n)), n.applyToHost(e), n;
                    case ft.Native:
                    case ft.ShadowDom:
                        return new mc(this.eventManager, this.sharedStylesHost, e, t);
                    default:
                        if (!this.rendererByCompId.has(t.id)) {
                            var r = cc(t.id, t.styles, []);
                            this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(t.id, this.defaultRenderer)
                        }
                        return this.defaultRenderer
                }
            }, e.prototype.begin = function () {
            }, e.prototype.end = function () {
            }, e
        }(), dc = function () {
            function e(e) {
                this.eventManager = e, this.data = Object.create(null)
            }

            return e.prototype.destroy = function () {
            }, e.prototype.createElement = function (e, t) {
                return t ? document.createElementNS(lc[t], e) : document.createElement(e)
            }, e.prototype.createComment = function (e) {
                return document.createComment(e)
            }, e.prototype.createText = function (e) {
                return document.createTextNode(e)
            }, e.prototype.appendChild = function (e, t) {
                e.appendChild(t)
            }, e.prototype.insertBefore = function (e, t, n) {
                e && e.insertBefore(t, n)
            }, e.prototype.removeChild = function (e, t) {
                e && e.removeChild(t)
            }, e.prototype.selectRootElement = function (e) {
                var t = "string" == typeof e ? document.querySelector(e) : e;
                if (!t) throw new Error('The selector "' + e + '" did not match any elements');
                return t.textContent = "", t
            }, e.prototype.parentNode = function (e) {
                return e.parentNode
            }, e.prototype.nextSibling = function (e) {
                return e.nextSibling
            }, e.prototype.setAttribute = function (e, t, n, r) {
                if (r) {
                    t = r + ":" + t;
                    var o = lc[r];
                    o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n)
                } else e.setAttribute(t, n)
            }, e.prototype.removeAttribute = function (e, t, n) {
                if (n) {
                    var r = lc[n];
                    r ? e.removeAttributeNS(r, t) : e.removeAttribute(n + ":" + t)
                } else e.removeAttribute(t)
            }, e.prototype.addClass = function (e, t) {
                e.classList.add(t)
            }, e.prototype.removeClass = function (e, t) {
                e.classList.remove(t)
            }, e.prototype.setStyle = function (e, t, n, r) {
                r & Nn.DashCase ? e.style.setProperty(t, n, r & Nn.Important ? "important" : "") : e.style[t] = n
            }, e.prototype.removeStyle = function (e, t, n) {
                n & Nn.DashCase ? e.style.removeProperty(t) : e.style[t] = ""
            }, e.prototype.setProperty = function (e, t, n) {
                gc(t, "property"), e[t] = n
            }, e.prototype.setValue = function (e, t) {
                e.nodeValue = t
            }, e.prototype.listen = function (e, t, n) {
                return gc(t, "listener"), "string" == typeof e ? this.eventManager.addGlobalEventListener(e, t, pc(n)) : this.eventManager.addEventListener(e, t, pc(n))
            }, e
        }(), hc = "@".charCodeAt(0);

        function gc(e, t) {
            if (e.charCodeAt(0) === hc) throw new Error("Found the synthetic " + t + " " + e + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')
        }

        var vc, yc = function (e) {
                function t(t, n, r) {
                    var o = e.call(this, t) || this;
                    o.component = r;
                    var i = cc(r.id, r.styles, []);
                    return n.addStyles(i), o.contentAttr = sc.replace(uc, r.id), o.hostAttr = ac.replace(uc, r.id), o
                }

                return o(t, e), t.prototype.applyToHost = function (t) {
                    e.prototype.setAttribute.call(this, t, this.hostAttr, "")
                }, t.prototype.createElement = function (t, n) {
                    var r = e.prototype.createElement.call(this, t, n);
                    return e.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
                }, t
            }(dc), mc = function (e) {
                function t(t, n, r, o) {
                    var i = e.call(this, t) || this;
                    i.sharedStylesHost = n, i.hostEl = r, i.component = o, i.shadowRoot = o.encapsulation === ft.ShadowDom ? r.attachShadow({mode: "open"}) : r.createShadowRoot(), i.sharedStylesHost.addHost(i.shadowRoot);
                    for (var l = cc(o.id, o.styles, []), u = 0; u < l.length; u++) {
                        var a = document.createElement("style");
                        a.textContent = l[u], i.shadowRoot.appendChild(a)
                    }
                    return i
                }

                return o(t, e), t.prototype.nodeOrShadowRoot = function (e) {
                    return e === this.hostEl ? this.shadowRoot : e
                }, t.prototype.destroy = function () {
                    this.sharedStylesHost.removeHost(this.shadowRoot)
                }, t.prototype.appendChild = function (t, n) {
                    return e.prototype.appendChild.call(this, this.nodeOrShadowRoot(t), n)
                }, t.prototype.insertBefore = function (t, n, r) {
                    return e.prototype.insertBefore.call(this, this.nodeOrShadowRoot(t), n, r)
                }, t.prototype.removeChild = function (t, n) {
                    return e.prototype.removeChild.call(this, this.nodeOrShadowRoot(t), n)
                }, t.prototype.parentNode = function (t) {
                    return this.nodeOrShadowRoot(e.prototype.parentNode.call(this, this.nodeOrShadowRoot(t)))
                }, t
            }(dc), bc = "undefined" != typeof Zone && Zone.__symbol__ || function (e) {
                return "__zone_symbol__" + e
            }, _c = bc("addEventListener"), wc = bc("removeEventListener"), Cc = {},
            Sc = "__zone_symbol__propagationStopped";
        "undefined" != typeof Zone && Zone[bc("BLACK_LISTED_EVENTS")] && (vc = {});
        var xc = function (e) {
            return !!vc && vc.hasOwnProperty(e)
        }, Ec = function (e) {
            var t = Cc[e.type];
            if (t) {
                var n = this[t];
                if (n) {
                    var r = [e];
                    if (1 === n.length) return (l = n[0]).zone !== Zone.current ? l.zone.run(l.handler, this, r) : l.handler.apply(this, r);
                    for (var o = n.slice(), i = 0; i < o.length && !0 !== e[Sc]; i++) {
                        var l;
                        (l = o[i]).zone !== Zone.current ? l.zone.run(l.handler, this, r) : l.handler.apply(this, r)
                    }
                }
            }
        }, kc = function (e) {
            function t(t, n, r) {
                var o = e.call(this, t) || this;
                return o.ngZone = n, r && function (e) {
                    return e === Ms
                }(r) || o.patchEvent(), o
            }

            return o(t, e), t.prototype.patchEvent = function () {
                if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                    var e = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                    Event.prototype.stopImmediatePropagation = function () {
                        this && (this[Sc] = !0), e && e.apply(this, arguments)
                    }
                }
            }, t.prototype.supports = function (e) {
                return !0
            }, t.prototype.addEventListener = function (e, t, n) {
                var r = this, o = n;
                if (!e[_c] || sn.isInAngularZone() && !xc(t)) e.addEventListener(t, o, !1); else {
                    var i = Cc[t];
                    i || (i = Cc[t] = bc("ANGULAR" + t + "FALSE"));
                    var l = e[i], u = l && l.length > 0;
                    l || (l = e[i] = []);
                    var a = xc(t) ? Zone.root : Zone.current;
                    if (0 === l.length) l.push({zone: a, handler: o}); else {
                        for (var s = !1, c = 0; c < l.length; c++) if (l[c].handler === o) {
                            s = !0;
                            break
                        }
                        s || l.push({zone: a, handler: o})
                    }
                    u || e[_c](t, Ec, !1)
                }
                return function () {
                    return r.removeEventListener(e, t, o)
                }
            }, t.prototype.removeEventListener = function (e, t, n) {
                var r = e[wc];
                if (!r) return e.removeEventListener.apply(e, [t, n, !1]);
                var o = Cc[t], i = o && e[o];
                if (!i) return e.removeEventListener.apply(e, [t, n, !1]);
                for (var l = !1, u = 0; u < i.length; u++) if (i[u].handler === n) {
                    l = !0, i.splice(u, 1);
                    break
                }
                l ? 0 === i.length && r.apply(e, [t, Ec, !1]) : e.removeEventListener.apply(e, [t, n, !1])
            }, l([u(0, Ue(Qs)), u(2, He()), u(2, Ue(Ut))], t)
        }(rc), Pc = {
            pan: !0,
            panstart: !0,
            panmove: !0,
            panend: !0,
            pancancel: !0,
            panleft: !0,
            panright: !0,
            panup: !0,
            pandown: !0,
            pinch: !0,
            pinchstart: !0,
            pinchmove: !0,
            pinchend: !0,
            pinchcancel: !0,
            pinchin: !0,
            pinchout: !0,
            press: !0,
            pressup: !0,
            rotate: !0,
            rotatestart: !0,
            rotatemove: !0,
            rotateend: !0,
            rotatecancel: !0,
            swipe: !0,
            swipeleft: !0,
            swiperight: !0,
            swipeup: !0,
            swipedown: !0,
            tap: !0
        }, Tc = new me("HammerGestureConfig"), Oc = new me("HammerLoader"), Ic = function () {
            function e() {
                this.events = [], this.overrides = {}
            }

            return e.prototype.buildHammer = function (e) {
                var t = new Hammer(e, this.options);
                for (var n in t.get("pinch").set({enable: !0}), t.get("rotate").set({enable: !0}), this.overrides) t.get(n).set(this.overrides[n]);
                return t
            }, e
        }(), Ac = function (e) {
            function t(t, n, r, o) {
                var i = e.call(this, t) || this;
                return i._config = n, i.console = r, i.loader = o, i
            }

            return o(t, e), t.prototype.supports = function (e) {
                return !(!Pc.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e) || !window.Hammer && !this.loader && (this.console.warn('The "' + e + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1))
            }, t.prototype.addEventListener = function (e, t, n) {
                var r = this, o = this.manager.getZone();
                if (t = t.toLowerCase(), !window.Hammer && this.loader) {
                    var i = !1, l = function () {
                        i = !0
                    };
                    return this.loader().then(function () {
                        if (!window.Hammer) return r.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void(l = function () {
                        });
                        i || (l = r.addEventListener(e, t, n))
                    }).catch(function () {
                        r.console.warn('The "' + t + '" event cannot be bound because the custom Hammer.JS loader failed.'), l = function () {
                        }
                    }), function () {
                        l()
                    }
                }
                return o.runOutsideAngular(function () {
                    var i = r._config.buildHammer(e), l = function (e) {
                        o.runGuarded(function () {
                            n(e)
                        })
                    };
                    return i.on(t, l), function () {
                        return i.off(t, l)
                    }
                })
            }, t.prototype.isCustomEvent = function (e) {
                return this._config.events.indexOf(e) > -1
            }, l([u(0, Ue(Qs)), u(1, Ue(Tc)), u(3, He()), u(3, Ue(Oc))], t)
        }(rc), Nc = ["alt", "control", "meta", "shift"], Rc = {
            alt: function (e) {
                return e.altKey
            }, control: function (e) {
                return e.ctrlKey
            }, meta: function (e) {
                return e.metaKey
            }, shift: function (e) {
                return e.shiftKey
            }
        }, Mc = function (e) {
            function t(t) {
                return e.call(this, t) || this
            }

            var n;
            return o(t, e), n = t, t.prototype.supports = function (e) {
                return null != n.parseEventName(e)
            }, t.prototype.addEventListener = function (e, t, r) {
                var o = n.parseEventName(t), i = n.eventCallback(o.fullKey, r, this.manager.getZone());
                return this.manager.getZone().runOutsideAngular(function () {
                    return Vs().onAndCancel(e, o.domEventName, i)
                })
            }, t.parseEventName = function (e) {
                var t = e.toLowerCase().split("."), r = t.shift();
                if (0 === t.length || "keydown" !== r && "keyup" !== r) return null;
                var o = n._normalizeKey(t.pop()), i = "";
                if (Nc.forEach(function (e) {
                    var n = t.indexOf(e);
                    n > -1 && (t.splice(n, 1), i += e + ".")
                }), i += o, 0 != t.length || 0 === o.length) return null;
                var l = {};
                return l.domEventName = r, l.fullKey = i, l
            }, t.getEventFullKey = function (e) {
                var t = "", n = Vs().getEventKey(e);
                return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), Nc.forEach(function (r) {
                    r != n && (0, Rc[r])(e) && (t += r + ".")
                }), t += n
            }, t.eventCallback = function (e, t, r) {
                return function (o) {
                    n.getEventFullKey(o) === e && r.runGuarded(function () {
                        return t(o)
                    })
                }
            }, t._normalizeKey = function (e) {
                switch (e) {
                    case"esc":
                        return "escape";
                    default:
                        return e
                }
            }, n = l([u(0, Ue(Qs))], t)
        }(rc), Dc = function () {
        }, jc = function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return n._doc = t, n
            }

            return o(t, e), t.prototype.sanitize = function (e, t) {
                if (null == t) return null;
                switch (e) {
                    case Br.NONE:
                        return t;
                    case Br.HTML:
                        return t instanceof Vc ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "HTML"), function (e, t) {
                            var n = null;
                            try {
                                Pr = Pr || new wr(e);
                                var r = t ? String(t) : "";
                                n = Pr.getInertBodyElement(r);
                                var o = 5, i = r;
                                do {
                                    if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                                    o--, r = i, i = n.innerHTML, n = Pr.getInertBodyElement(r)
                                } while (r !== i);
                                var l = new jr, u = l.sanitizeChildren(Hr(n) || n);
                                return Sn() && l.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."), u
                            } finally {
                                if (n) for (var a = Hr(n) || n; a.firstChild;) a.removeChild(a.firstChild)
                            }
                        }(this._doc, String(t)));
                    case Br.STYLE:
                        return t instanceof Uc ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "Style"), function (e) {
                            if (!(e = String(e).trim())) return "";
                            var t = e.match(zr);
                            return t && xr(t[1]) === t[1] || e.match(Fr) && function (e) {
                                for (var t = !0, n = !0, r = 0; r < e.length; r++) {
                                    var o = e.charAt(r);
                                    "'" === o && n ? t = !t : '"' === o && t && (n = !n)
                                }
                                return t && n
                            }(e) ? e : (Sn() && console.warn("WARNING: sanitizing unsafe style value " + e + " (see http://g.co/ng/security#xss)."), "unsafe")
                        }(t));
                    case Br.SCRIPT:
                        if (t instanceof Hc) return t.changingThisBreaksApplicationSecurity;
                        throw this.checkNotSafeValue(t, "Script"), new Error("unsafe value used in a script context");
                    case Br.URL:
                        return t instanceof zc || t instanceof Fc ? t.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(t, "URL"), xr(String(t)));
                    case Br.RESOURCE_URL:
                        if (t instanceof zc) return t.changingThisBreaksApplicationSecurity;
                        throw this.checkNotSafeValue(t, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                    default:
                        throw new Error("Unexpected SecurityContext " + e + " (see http://g.co/ng/security#xss)")
                }
            }, t.prototype.checkNotSafeValue = function (e, t) {
                if (e instanceof Lc) throw new Error("Required a safe " + t + ", got a " + e.getTypeName() + " (see http://g.co/ng/security#xss)")
            }, t.prototype.bypassSecurityTrustHtml = function (e) {
                return new Vc(e)
            }, t.prototype.bypassSecurityTrustStyle = function (e) {
                return new Uc(e)
            }, t.prototype.bypassSecurityTrustScript = function (e) {
                return new Hc(e)
            }, t.prototype.bypassSecurityTrustUrl = function (e) {
                return new Fc(e)
            }, t.prototype.bypassSecurityTrustResourceUrl = function (e) {
                return new zc(e)
            }, l([u(0, Ue(Qs))], t)
        }(Dc), Lc = function () {
            function e(e) {
                this.changingThisBreaksApplicationSecurity = e
            }

            return e.prototype.toString = function () {
                return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
            }, e
        }(), Vc = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return o(t, e), t.prototype.getTypeName = function () {
                return "HTML"
            }, t
        }(Lc), Uc = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return o(t, e), t.prototype.getTypeName = function () {
                return "Style"
            }, t
        }(Lc), Hc = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return o(t, e), t.prototype.getTypeName = function () {
                return "Script"
            }, t
        }(Lc), Fc = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return o(t, e), t.prototype.getTypeName = function () {
                return "URL"
            }, t
        }(Lc), zc = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return o(t, e), t.prototype.getTypeName = function () {
                return "ResourceURL"
            }, t
        }(Lc), Bc = En(gr, "browser", [{provide: Ut, useValue: "browser"}, {
            provide: Vt, useValue: function () {
                qs.makeCurrent(), Js.init()
            }, multi: !0
        }, {provide: vs, useClass: Ws, deps: [Qs]}, {
            provide: Qs, useFactory: function () {
                return document
            }, deps: []
        }]);

        function qc() {
            return new _t
        }

        var Zc = function () {
            function e(e) {
                if (e) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
            }

            var t;
            return t = e, e.withServerTransition = function (e) {
                return {ngModule: t, providers: [{provide: Dt, useValue: e.appId}, {provide: Ks, useExisting: Dt}, Ys]}
            }, t = l([u(0, He()), u(0, ze()), u(0, Ue(t))], e)
        }();
        "undefined" != typeof window && window;
        var Qc = function (e, t) {
            this.id = e, this.url = t
        }, Gc = function (e) {
            function t(t, n, r, o) {
                void 0 === r && (r = "imperative"), void 0 === o && (o = null);
                var i = e.call(this, t, n) || this;
                return i.navigationTrigger = r, i.restoredState = o, i
            }

            return o(t, e), t.prototype.toString = function () {
                return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"
            }, t
        }(Qc), Wc = function (e) {
            function t(t, n, r) {
                var o = e.call(this, t, n) || this;
                return o.urlAfterRedirects = r, o
            }

            return o(t, e), t.prototype.toString = function () {
                return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')"
            }, t
        }(Qc), Kc = function (e) {
            function t(t, n, r) {
                var o = e.call(this, t, n) || this;
                return o.reason = r, o
            }

            return o(t, e), t.prototype.toString = function () {
                return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"
            }, t
        }(Qc), Yc = function (e) {
            function t(t, n, r) {
                var o = e.call(this, t, n) || this;
                return o.error = r, o
            }

            return o(t, e), t.prototype.toString = function () {
                return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")"
            }, t
        }(Qc), Jc = function (e) {
            function t(t, n, r, o) {
                var i = e.call(this, t, n) || this;
                return i.urlAfterRedirects = r, i.state = o, i
            }

            return o(t, e), t.prototype.toString = function () {
                return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, t
        }(Qc), $c = function (e) {
            function t(t, n, r, o) {
                var i = e.call(this, t, n) || this;
                return i.urlAfterRedirects = r, i.state = o, i
            }

            return o(t, e), t.prototype.toString = function () {
                return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, t
        }(Qc), Xc = function (e) {
            function t(t, n, r, o, i) {
                var l = e.call(this, t, n) || this;
                return l.urlAfterRedirects = r, l.state = o, l.shouldActivate = i, l
            }

            return o(t, e), t.prototype.toString = function () {
                return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")"
            }, t
        }(Qc), ep = function (e) {
            function t(t, n, r, o) {
                var i = e.call(this, t, n) || this;
                return i.urlAfterRedirects = r, i.state = o, i
            }

            return o(t, e), t.prototype.toString = function () {
                return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, t
        }(Qc), tp = function (e) {
            function t(t, n, r, o) {
                var i = e.call(this, t, n) || this;
                return i.urlAfterRedirects = r, i.state = o, i
            }

            return o(t, e), t.prototype.toString = function () {
                return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
            }, t
        }(Qc), np = function () {
            function e(e) {
                this.route = e
            }

            return e.prototype.toString = function () {
                return "RouteConfigLoadStart(path: " + this.route.path + ")"
            }, e
        }(), rp = function () {
            function e(e) {
                this.route = e
            }

            return e.prototype.toString = function () {
                return "RouteConfigLoadEnd(path: " + this.route.path + ")"
            }, e
        }(), op = function () {
            function e(e) {
                this.snapshot = e
            }

            return e.prototype.toString = function () {
                return "ChildActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, e
        }(), ip = function () {
            function e(e) {
                this.snapshot = e
            }

            return e.prototype.toString = function () {
                return "ChildActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, e
        }(), lp = function () {
            function e(e) {
                this.snapshot = e
            }

            return e.prototype.toString = function () {
                return "ActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, e
        }(), up = function () {
            function e(e) {
                this.snapshot = e
            }

            return e.prototype.toString = function () {
                return "ActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
            }, e
        }(), ap = function () {
            function e(e, t, n) {
                this.routerEvent = e, this.position = t, this.anchor = n
            }

            return e.prototype.toString = function () {
                return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ", " + this.position[1] : null) + "')"
            }, e
        }(), sp = function () {
        }, cp = "primary", pp = function () {
            function e(e) {
                this.params = e || {}
            }

            return e.prototype.has = function (e) {
                return this.params.hasOwnProperty(e)
            }, e.prototype.get = function (e) {
                if (this.has(e)) {
                    var t = this.params[e];
                    return Array.isArray(t) ? t[0] : t
                }
                return null
            }, e.prototype.getAll = function (e) {
                if (this.has(e)) {
                    var t = this.params[e];
                    return Array.isArray(t) ? t : [t]
                }
                return []
            }, Object.defineProperty(e.prototype, "keys", {
                get: function () {
                    return Object.keys(this.params)
                }, enumerable: !0, configurable: !0
            }), e
        }();

        function fp(e) {
            return new pp(e)
        }

        function dp(e, t, n) {
            var r = n.path.split("/");
            if (r.length > e.length) return null;
            if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length)) return null;
            for (var o = {}, i = 0; i < r.length; i++) {
                var l = r[i], u = e[i];
                if (l.startsWith(":")) o[l.substring(1)] = u; else if (l !== u.path) return null
            }
            return {consumed: e.slice(0, r.length), posParams: o}
        }

        var hp = function (e, t) {
            this.routes = e, this.module = t
        };

        function gp(e, t) {
            void 0 === t && (t = "");
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                vp(r, yp(t, r))
            }
        }

        function vp(e, t) {
            if (!e) throw new Error("\n      Invalid configuration of route '" + t + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
            if (Array.isArray(e)) throw new Error("Invalid configuration of route '" + t + "': Array cannot be specified");
            if (!e.component && !e.children && !e.loadChildren && e.outlet && e.outlet !== cp) throw new Error("Invalid configuration of route '" + t + "': a componentless route without children or loadChildren cannot have a named outlet set");
            if (e.redirectTo && e.children) throw new Error("Invalid configuration of route '" + t + "': redirectTo and children cannot be used together");
            if (e.redirectTo && e.loadChildren) throw new Error("Invalid configuration of route '" + t + "': redirectTo and loadChildren cannot be used together");
            if (e.children && e.loadChildren) throw new Error("Invalid configuration of route '" + t + "': children and loadChildren cannot be used together");
            if (e.redirectTo && e.component) throw new Error("Invalid configuration of route '" + t + "': redirectTo and component cannot be used together");
            if (e.path && e.matcher) throw new Error("Invalid configuration of route '" + t + "': path and matcher cannot be used together");
            if (void 0 === e.redirectTo && !e.component && !e.children && !e.loadChildren) throw new Error("Invalid configuration of route '" + t + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
            if (void 0 === e.path && void 0 === e.matcher) throw new Error("Invalid configuration of route '" + t + "': routes must have either a path or a matcher specified");
            if ("string" == typeof e.path && "/" === e.path.charAt(0)) throw new Error("Invalid configuration of route '" + t + "': path cannot start with a slash");
            if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch) throw new Error("Invalid configuration of route '{path: \"" + t + '", redirectTo: "' + e.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.");
            if (void 0 !== e.pathMatch && "full" !== e.pathMatch && "prefix" !== e.pathMatch) throw new Error("Invalid configuration of route '" + t + "': pathMatch can only be set to 'prefix' or 'full'");
            e.children && gp(e.children, t)
        }

        function yp(e, t) {
            return t ? e || t.path ? e && !t.path ? e + "/" : !e && t.path ? t.path : e + "/" + t.path : "" : e
        }

        function mp(e) {
            var t = e.children && e.children.map(mp), n = t ? i({}, e, {children: t}) : i({}, e);
            return !n.component && (t || n.loadChildren) && n.outlet && n.outlet !== cp && (n.component = sp), n
        }

        function bp(e, t) {
            var n, r = Object.keys(e), o = Object.keys(t);
            if (r.length != o.length) return !1;
            for (var i = 0; i < r.length; i++) if (e[n = r[i]] !== t[n]) return !1;
            return !0
        }

        function _p(e) {
            return Array.prototype.concat.apply([], e)
        }

        function wp(e) {
            return e.length > 0 ? e[e.length - 1] : null
        }

        function Cp(e, t) {
            for (var n in e) e.hasOwnProperty(n) && t(e[n], n)
        }

        function Sp(e) {
            return e.pipe(re(), ls(function (e) {
                return !0 === e
            }))
        }

        function xp(e) {
            return (t = e) && "function" == typeof t.subscribe ? e : Nt(e) ? $(Promise.resolve(e)) : ja(e);
            var t
        }

        function Ep(e, t, n) {
            return n ? function (e, t) {
                return bp(e, t)
            }(e.queryParams, t.queryParams) && function e(t, n) {
                if (!Op(t.segments, n.segments)) return !1;
                if (t.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                    if (!t.children[r]) return !1;
                    if (!e(t.children[r], n.children[r])) return !1
                }
                return !0
            }(e.root, t.root) : function (e, t) {
                return Object.keys(t).length <= Object.keys(e).length && Object.keys(t).every(function (n) {
                    return t[n] === e[n]
                })
            }(e.queryParams, t.queryParams) && function e(t, n) {
                return function t(n, r, o) {
                    if (n.segments.length > o.length) return !!Op(l = n.segments.slice(0, o.length), o) && !r.hasChildren();
                    if (n.segments.length === o.length) {
                        if (!Op(n.segments, o)) return !1;
                        for (var i in r.children) {
                            if (!n.children[i]) return !1;
                            if (!e(n.children[i], r.children[i])) return !1
                        }
                        return !0
                    }
                    var l = o.slice(0, n.segments.length), u = o.slice(n.segments.length);
                    return !!Op(n.segments, l) && !!n.children[cp] && t(n.children[cp], r, u)
                }(t, n, n.segments)
            }(e.root, t.root)
        }

        var kp = function () {
            function e(e, t, n) {
                this.root = e, this.queryParams = t, this.fragment = n
            }

            return Object.defineProperty(e.prototype, "queryParamMap", {
                get: function () {
                    return this._queryParamMap || (this._queryParamMap = fp(this.queryParams)), this._queryParamMap
                }, enumerable: !0, configurable: !0
            }), e.prototype.toString = function () {
                return Rp.serialize(this)
            }, e
        }(), Pp = function () {
            function e(e, t) {
                var n = this;
                this.segments = e, this.children = t, this.parent = null, Cp(t, function (e, t) {
                    return e.parent = n
                })
            }

            return e.prototype.hasChildren = function () {
                return this.numberOfChildren > 0
            }, Object.defineProperty(e.prototype, "numberOfChildren", {
                get: function () {
                    return Object.keys(this.children).length
                }, enumerable: !0, configurable: !0
            }), e.prototype.toString = function () {
                return Mp(this)
            }, e
        }(), Tp = function () {
            function e(e, t) {
                this.path = e, this.parameters = t
            }

            return Object.defineProperty(e.prototype, "parameterMap", {
                get: function () {
                    return this._parameterMap || (this._parameterMap = fp(this.parameters)), this._parameterMap
                }, enumerable: !0, configurable: !0
            }), e.prototype.toString = function () {
                return Hp(this)
            }, e
        }();

        function Op(e, t) {
            return e.length === t.length && e.every(function (e, n) {
                return e.path === t[n].path
            })
        }

        function Ip(e, t) {
            var n = [];
            return Cp(e.children, function (e, r) {
                r === cp && (n = n.concat(t(e, r)))
            }), Cp(e.children, function (e, r) {
                r !== cp && (n = n.concat(t(e, r)))
            }), n
        }

        var Ap = function () {
        }, Np = function () {
            function e() {
            }

            return e.prototype.parse = function (e) {
                var t = new Zp(e);
                return new kp(t.parseRootSegment(), t.parseQueryParams(), t.parseFragment())
            }, e.prototype.serialize = function (e) {
                var t, n;
                return "/" + function e(t, n) {
                    if (!t.hasChildren()) return Mp(t);
                    if (n) {
                        var r = t.children[cp] ? e(t.children[cp], !1) : "", o = [];
                        return Cp(t.children, function (t, n) {
                            n !== cp && o.push(n + ":" + e(t, !1))
                        }), o.length > 0 ? r + "(" + o.join("//") + ")" : r
                    }
                    var i = Ip(t, function (n, r) {
                        return r === cp ? [e(t.children[cp], !1)] : [r + ":" + e(n, !1)]
                    });
                    return Mp(t) + "/(" + i.join("//") + ")"
                }(e.root, !0) + (t = e.queryParams, (n = Object.keys(t).map(function (e) {
                    var n = t[e];
                    return Array.isArray(n) ? n.map(function (t) {
                        return jp(e) + "=" + jp(t)
                    }).join("&") : jp(e) + "=" + jp(n)
                })).length ? "?" + n.join("&") : "") + ("string" == typeof e.fragment ? "#" + encodeURI(e.fragment) : "")
            }, e
        }(), Rp = new Np;

        function Mp(e) {
            return e.segments.map(function (e) {
                return Hp(e)
            }).join("/")
        }

        function Dp(e) {
            return encodeURIComponent(e).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }

        function jp(e) {
            return Dp(e).replace(/%3B/gi, ";")
        }

        function Lp(e) {
            return Dp(e).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
        }

        function Vp(e) {
            return decodeURIComponent(e)
        }

        function Up(e) {
            return Vp(e.replace(/\+/g, "%20"))
        }

        function Hp(e) {
            return "" + Lp(e.path) + (t = e.parameters, Object.keys(t).map(function (e) {
                return ";" + Lp(e) + "=" + Lp(t[e])
            }).join(""));
            var t
        }

        var Fp = /^[^\/()?;=#]+/;

        function zp(e) {
            var t = e.match(Fp);
            return t ? t[0] : ""
        }

        var Bp = /^[^=?&#]+/, qp = /^[^?&#]+/, Zp = function () {
            function e(e) {
                this.url = e, this.remaining = e
            }

            return e.prototype.parseRootSegment = function () {
                return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Pp([], {}) : new Pp([], this.parseChildren())
            }, e.prototype.parseQueryParams = function () {
                var e = {};
                if (this.consumeOptional("?")) do {
                    this.parseQueryParam(e)
                } while (this.consumeOptional("&"));
                return e
            }, e.prototype.parseFragment = function () {
                return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
            }, e.prototype.parseChildren = function () {
                if ("" === this.remaining) return {};
                this.consumeOptional("/");
                var e = [];
                for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), e.push(this.parseSegment());
                var t = {};
                this.peekStartsWith("/(") && (this.capture("/"), t = this.parseParens(!0));
                var n = {};
                return this.peekStartsWith("(") && (n = this.parseParens(!1)), (e.length > 0 || Object.keys(t).length > 0) && (n[cp] = new Pp(e, t)), n
            }, e.prototype.parseSegment = function () {
                var e = zp(this.remaining);
                if ("" === e && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
                return this.capture(e), new Tp(Vp(e), this.parseMatrixParams())
            }, e.prototype.parseMatrixParams = function () {
                for (var e = {}; this.consumeOptional(";");) this.parseParam(e);
                return e
            }, e.prototype.parseParam = function (e) {
                var t = zp(this.remaining);
                if (t) {
                    this.capture(t);
                    var n = "";
                    if (this.consumeOptional("=")) {
                        var r = zp(this.remaining);
                        r && this.capture(n = r)
                    }
                    e[Vp(t)] = Vp(n)
                }
            }, e.prototype.parseQueryParam = function (e) {
                var t, n = (t = this.remaining.match(Bp)) ? t[0] : "";
                if (n) {
                    this.capture(n);
                    var r = "";
                    if (this.consumeOptional("=")) {
                        var o = function (e) {
                            var t = e.match(qp);
                            return t ? t[0] : ""
                        }(this.remaining);
                        o && this.capture(r = o)
                    }
                    var i = Up(n), l = Up(r);
                    if (e.hasOwnProperty(i)) {
                        var u = e[i];
                        Array.isArray(u) || (e[i] = u = [u]), u.push(l)
                    } else e[i] = l
                }
            }, e.prototype.parseParens = function (e) {
                var t = {};
                for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                    var n = zp(this.remaining), r = this.remaining[n.length];
                    if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '" + this.url + "'");
                    var o = void 0;
                    n.indexOf(":") > -1 ? (o = n.substr(0, n.indexOf(":")), this.capture(o), this.capture(":")) : e && (o = cp);
                    var i = this.parseChildren();
                    t[o] = 1 === Object.keys(i).length ? i[cp] : new Pp([], i), this.consumeOptional("//")
                }
                return t
            }, e.prototype.peekStartsWith = function (e) {
                return this.remaining.startsWith(e)
            }, e.prototype.consumeOptional = function (e) {
                return !!this.peekStartsWith(e) && (this.remaining = this.remaining.substring(e.length), !0)
            }, e.prototype.capture = function (e) {
                if (!this.consumeOptional(e)) throw new Error('Expected "' + e + '".')
            }, e
        }(), Qp = function (e) {
            this.segmentGroup = e || null
        }, Gp = function (e) {
            this.urlTree = e
        };

        function Wp(e) {
            return new M(function (t) {
                return t.error(new Qp(e))
            })
        }

        function Kp(e) {
            return new M(function (t) {
                return t.error(new Gp(e))
            })
        }

        function Yp(e) {
            return new M(function (t) {
                return t.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + e + "'"))
            })
        }

        var Jp = function () {
            function e(e, t, n, r, o) {
                this.configLoader = t, this.urlSerializer = n, this.urlTree = r, this.config = o, this.allowRedirects = !0, this.ngModule = e.get(tn)
            }

            return e.prototype.apply = function () {
                var e = this;
                return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, cp).pipe(W(function (t) {
                    return e.createUrlTree(t, e.urlTree.queryParams, e.urlTree.fragment)
                })).pipe(rs(function (t) {
                    if (t instanceof Gp) return e.allowRedirects = !1, e.match(t.urlTree);
                    if (t instanceof Qp) throw e.noMatchError(t);
                    throw t
                }))
            }, e.prototype.match = function (e) {
                var t = this;
                return this.expandSegmentGroup(this.ngModule, this.config, e.root, cp).pipe(W(function (n) {
                    return t.createUrlTree(n, e.queryParams, e.fragment)
                })).pipe(rs(function (e) {
                    if (e instanceof Qp) throw t.noMatchError(e);
                    throw e
                }))
            }, e.prototype.noMatchError = function (e) {
                return new Error("Cannot match any routes. URL Segment: '" + e.segmentGroup + "'")
            }, e.prototype.createUrlTree = function (e, t, n) {
                var r, o = e.segments.length > 0 ? new Pp([], ((r = {})[cp] = e, r)) : e;
                return new kp(o, t, n)
            }, e.prototype.expandSegmentGroup = function (e, t, n, r) {
                return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(e, t, n).pipe(W(function (e) {
                    return new Pp([], e)
                })) : this.expandSegment(e, n, t, n.segments, r, !0)
            }, e.prototype.expandChildren = function (e, t, n) {
                var r = this;
                return function (n, o) {
                    if (0 === Object.keys(n).length) return ja({});
                    var i = [], l = [], u = {};
                    return Cp(n, function (n, o) {
                        var a, s, c = (a = o, s = n, r.expandSegmentGroup(e, t, s, a)).pipe(W(function (e) {
                            return u[o] = e
                        }));
                        o === cp ? i.push(c) : l.push(c)
                    }), ja.apply(null, i.concat(l)).pipe(fs(), ns(), W(function () {
                        return u
                    }))
                }(n.children)
            }, e.prototype.expandSegment = function (e, t, n, r, o, i) {
                var l = this;
                return ja.apply(void 0, p(n)).pipe(W(function (u) {
                    return l.expandSegmentAgainstRoute(e, t, n, u, r, o, i).pipe(rs(function (e) {
                        if (e instanceof Qp) return ja(null);
                        throw e
                    }))
                }), fs(), ps(function (e) {
                    return !!e
                }), rs(function (e, n) {
                    if (e instanceof Va || "EmptyError" === e.name) {
                        if (l.noLeftoversInUrl(t, r, o)) return ja(new Pp([], {}));
                        throw new Qp(t)
                    }
                    throw e
                }))
            }, e.prototype.noLeftoversInUrl = function (e, t, n) {
                return 0 === t.length && !e.children[n]
            }, e.prototype.expandSegmentAgainstRoute = function (e, t, n, r, o, i, l) {
                return tf(r) !== i ? Wp(t) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(e, t, r, o) : l && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, o, i) : Wp(t)
            }, e.prototype.expandSegmentAgainstRouteUsingRedirect = function (e, t, n, r, o, i) {
                return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, o, i)
            }, e.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (e, t, n, r) {
                var o = this, i = this.applyRedirectCommands([], n.redirectTo, {});
                return n.redirectTo.startsWith("/") ? Kp(i) : this.lineralizeSegments(n, i).pipe(X(function (n) {
                    var i = new Pp(n, {});
                    return o.expandSegment(e, i, t, n, r, !1)
                }))
            }, e.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (e, t, n, r, o, i) {
                var l = this, u = $p(t, r, o), a = u.consumedSegments, s = u.lastChild, c = u.positionalParamSegments;
                if (!u.matched) return Wp(t);
                var p = this.applyRedirectCommands(a, r.redirectTo, c);
                return r.redirectTo.startsWith("/") ? Kp(p) : this.lineralizeSegments(r, p).pipe(X(function (r) {
                    return l.expandSegment(e, t, n, r.concat(o.slice(s)), i, !1)
                }))
            }, e.prototype.matchSegmentAgainstRoute = function (e, t, n, r) {
                var o = this;
                if ("**" === n.path) return n.loadChildren ? this.configLoader.load(e.injector, n).pipe(W(function (e) {
                    return n._loadedConfig = e, new Pp(r, {})
                })) : ja(new Pp(r, {}));
                var l = $p(t, n, r), u = l.consumedSegments, a = l.lastChild;
                if (!l.matched) return Wp(t);
                var c = r.slice(a);
                return this.getChildConfig(e, n).pipe(X(function (e) {
                    var n = e.module, r = e.routes, l = function (e, t, n, r) {
                        return n.length > 0 && function (e, t, n) {
                            return r.some(function (n) {
                                return ef(e, t, n) && tf(n) !== cp
                            })
                        }(e, n) ? {
                            segmentGroup: Xp(new Pp(t, function (e, t) {
                                var n, r, o = {};
                                o[cp] = t;
                                try {
                                    for (var i = s(e), l = i.next(); !l.done; l = i.next()) {
                                        var u = l.value;
                                        "" === u.path && tf(u) !== cp && (o[tf(u)] = new Pp([], {}))
                                    }
                                } catch (e) {
                                    n = {error: e}
                                } finally {
                                    try {
                                        l && !l.done && (r = i.return) && r.call(i)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                return o
                            }(r, new Pp(n, e.children)))), slicedSegments: []
                        } : 0 === n.length && function (e, t, n) {
                            return r.some(function (n) {
                                return ef(e, t, n)
                            })
                        }(e, n) ? {
                            segmentGroup: Xp(new Pp(e.segments, function (e, t, n, r) {
                                var o, l, u = {};
                                try {
                                    for (var a = s(n), c = a.next(); !c.done; c = a.next()) {
                                        var p = c.value;
                                        ef(e, t, p) && !r[tf(p)] && (u[tf(p)] = new Pp([], {}))
                                    }
                                } catch (e) {
                                    o = {error: e}
                                } finally {
                                    try {
                                        c && !c.done && (l = a.return) && l.call(a)
                                    } finally {
                                        if (o) throw o.error
                                    }
                                }
                                return i({}, r, u)
                            }(e, n, r, e.children))), slicedSegments: n
                        } : {segmentGroup: e, slicedSegments: n}
                    }(t, u, c, r), a = l.segmentGroup, p = l.slicedSegments;
                    return 0 === p.length && a.hasChildren() ? o.expandChildren(n, r, a).pipe(W(function (e) {
                        return new Pp(u, e)
                    })) : 0 === r.length && 0 === p.length ? ja(new Pp(u, {})) : o.expandSegment(n, a, r, p, cp, !0).pipe(W(function (e) {
                        return new Pp(u.concat(e.segments), e.children)
                    }))
                }))
            }, e.prototype.getChildConfig = function (e, t) {
                var n = this;
                return t.children ? ja(new hp(t.children, e)) : t.loadChildren ? void 0 !== t._loadedConfig ? ja(t._loadedConfig) : function (e, t) {
                    var n = t.canLoad;
                    return n && 0 !== n.length ? Sp($(n).pipe(W(function (n) {
                        var r = e.get(n);
                        return xp(r.canLoad ? r.canLoad(t) : r(t))
                    }))) : ja(!0)
                }(e.injector, t).pipe(X(function (r) {
                    return r ? n.configLoader.load(e.injector, t).pipe(W(function (e) {
                        return t._loadedConfig = e, e
                    })) : function (e) {
                        return new M(function (t) {
                            return t.error(((n = Error("NavigationCancelingError: Cannot load children because the guard of the route \"path: '" + e.path + "'\" returned false")).ngNavigationCancelingError = !0, n));
                            var n
                        })
                    }(t)
                })) : ja(new hp([], e))
            }, e.prototype.lineralizeSegments = function (e, t) {
                for (var n = [], r = t.root; ;) {
                    if (n = n.concat(r.segments), 0 === r.numberOfChildren) return ja(n);
                    if (r.numberOfChildren > 1 || !r.children[cp]) return Yp(e.redirectTo);
                    r = r.children[cp]
                }
            }, e.prototype.applyRedirectCommands = function (e, t, n) {
                return this.applyRedirectCreatreUrlTree(t, this.urlSerializer.parse(t), e, n)
            }, e.prototype.applyRedirectCreatreUrlTree = function (e, t, n, r) {
                var o = this.createSegmentGroup(e, t.root, n, r);
                return new kp(o, this.createQueryParams(t.queryParams, this.urlTree.queryParams), t.fragment)
            }, e.prototype.createQueryParams = function (e, t) {
                var n = {};
                return Cp(e, function (e, r) {
                    if ("string" == typeof e && e.startsWith(":")) {
                        var o = e.substring(1);
                        n[r] = t[o]
                    } else n[r] = e
                }), n
            }, e.prototype.createSegmentGroup = function (e, t, n, r) {
                var o = this, i = this.createSegments(e, t.segments, n, r), l = {};
                return Cp(t.children, function (t, i) {
                    l[i] = o.createSegmentGroup(e, t, n, r)
                }), new Pp(i, l)
            }, e.prototype.createSegments = function (e, t, n, r) {
                var o = this;
                return t.map(function (t) {
                    return t.path.startsWith(":") ? o.findPosParam(e, t, r) : o.findOrReturn(t, n)
                })
            }, e.prototype.findPosParam = function (e, t, n) {
                var r = n[t.path.substring(1)];
                if (!r) throw new Error("Cannot redirect to '" + e + "'. Cannot find '" + t.path + "'.");
                return r
            }, e.prototype.findOrReturn = function (e, t) {
                var n, r, o = 0;
                try {
                    for (var i = s(t), l = i.next(); !l.done; l = i.next()) {
                        var u = l.value;
                        if (u.path === e.path) return t.splice(o), u;
                        o++
                    }
                } catch (e) {
                    n = {error: e}
                } finally {
                    try {
                        l && !l.done && (r = i.return) && r.call(i)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return e
            }, e
        }();

        function $p(e, t, n) {
            if ("" === t.path) return "full" === t.pathMatch && (e.hasChildren() || n.length > 0) ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {}
            } : {matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {}};
            var r = (t.matcher || dp)(n, e, t);
            return r ? {
                matched: !0,
                consumedSegments: r.consumed,
                lastChild: r.consumed.length,
                positionalParamSegments: r.posParams
            } : {matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {}}
        }

        function Xp(e) {
            if (1 === e.numberOfChildren && e.children[cp]) {
                var t = e.children[cp];
                return new Pp(e.segments.concat(t.segments), t.children)
            }
            return e
        }

        function ef(e, t, n) {
            return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
        }

        function tf(e) {
            return e.outlet || cp
        }

        var nf = function () {
            function e(e) {
                this._root = e
            }

            return Object.defineProperty(e.prototype, "root", {
                get: function () {
                    return this._root.value
                }, enumerable: !0, configurable: !0
            }), e.prototype.parent = function (e) {
                var t = this.pathFromRoot(e);
                return t.length > 1 ? t[t.length - 2] : null
            }, e.prototype.children = function (e) {
                var t = rf(e, this._root);
                return t ? t.children.map(function (e) {
                    return e.value
                }) : []
            }, e.prototype.firstChild = function (e) {
                var t = rf(e, this._root);
                return t && t.children.length > 0 ? t.children[0].value : null
            }, e.prototype.siblings = function (e) {
                var t = of(e, this._root);
                return t.length < 2 ? [] : t[t.length - 2].children.map(function (e) {
                    return e.value
                }).filter(function (t) {
                    return t !== e
                })
            }, e.prototype.pathFromRoot = function (e) {
                return of(e, this._root).map(function (e) {
                    return e.value
                })
            }, e
        }();

        function rf(e, t) {
            var n, r;
            if (e === t.value) return t;
            try {
                for (var o = s(t.children), i = o.next(); !i.done; i = o.next()) {
                    var l = rf(e, i.value);
                    if (l) return l
                }
            } catch (e) {
                n = {error: e}
            } finally {
                try {
                    i && !i.done && (r = o.return) && r.call(o)
                } finally {
                    if (n) throw n.error
                }
            }
            return null
        }

        function of(e, t) {
            var n, r;
            if (e === t.value) return [t];
            try {
                for (var o = s(t.children), i = o.next(); !i.done; i = o.next()) {
                    var l = of(e, i.value);
                    if (l.length) return l.unshift(t), l
                }
            } catch (e) {
                n = {error: e}
            } finally {
                try {
                    i && !i.done && (r = o.return) && r.call(o)
                } finally {
                    if (n) throw n.error
                }
            }
            return []
        }

        var lf = function () {
            function e(e, t) {
                this.value = e, this.children = t
            }

            return e.prototype.toString = function () {
                return "TreeNode(" + this.value + ")"
            }, e
        }();

        function uf(e) {
            var t = {};
            return e && e.children.forEach(function (e) {
                return t[e.value.outlet] = e
            }), t
        }

        var af = function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                return r.snapshot = n, hf(r, t), r
            }

            return o(t, e), t.prototype.toString = function () {
                return this.snapshot.toString()
            }, t
        }(nf);

        function sf(e, t) {
            var n = function (e, t) {
                    var n = new ff([], {}, {}, "", {}, cp, t, null, e.root, -1, {});
                    return new df("", new lf(n, []))
                }(e, t), r = new Ua([new Tp("", {})]), o = new Ua({}), i = new Ua({}), l = new Ua({}), u = new Ua(""),
                a = new cf(r, o, l, u, i, cp, t, n.root);
            return a.snapshot = n.root, new af(new lf(a, []), n)
        }

        var cf = function () {
            function e(e, t, n, r, o, i, l, u) {
                this.url = e, this.params = t, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = l, this._futureSnapshot = u
            }

            return Object.defineProperty(e.prototype, "routeConfig", {
                get: function () {
                    return this._futureSnapshot.routeConfig
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "root", {
                get: function () {
                    return this._routerState.root
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "parent", {
                get: function () {
                    return this._routerState.parent(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "firstChild", {
                get: function () {
                    return this._routerState.firstChild(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "children", {
                get: function () {
                    return this._routerState.children(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "pathFromRoot", {
                get: function () {
                    return this._routerState.pathFromRoot(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "paramMap", {
                get: function () {
                    return this._paramMap || (this._paramMap = this.params.pipe(W(function (e) {
                        return fp(e)
                    }))), this._paramMap
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "queryParamMap", {
                get: function () {
                    return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(W(function (e) {
                        return fp(e)
                    }))), this._queryParamMap
                }, enumerable: !0, configurable: !0
            }), e.prototype.toString = function () {
                return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")"
            }, e
        }();

        function pf(e, t) {
            void 0 === t && (t = "emptyOnly");
            var n = e.pathFromRoot, r = 0;
            if ("always" !== t) for (r = n.length - 1; r >= 1;) {
                var o = n[r], l = n[r - 1];
                if (o.routeConfig && "" === o.routeConfig.path) r--; else {
                    if (l.component) break;
                    r--
                }
            }
            return function (e) {
                return e.reduce(function (e, t) {
                    return {
                        params: i({}, e.params, t.params),
                        data: i({}, e.data, t.data),
                        resolve: i({}, e.resolve, t._resolvedData)
                    }
                }, {params: {}, data: {}, resolve: {}})
            }(n.slice(r))
        }

        var ff = function () {
            function e(e, t, n, r, o, i, l, u, a, s, c) {
                this.url = e, this.params = t, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = l, this.routeConfig = u, this._urlSegment = a, this._lastPathIndex = s, this._resolve = c
            }

            return Object.defineProperty(e.prototype, "root", {
                get: function () {
                    return this._routerState.root
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "parent", {
                get: function () {
                    return this._routerState.parent(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "firstChild", {
                get: function () {
                    return this._routerState.firstChild(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "children", {
                get: function () {
                    return this._routerState.children(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "pathFromRoot", {
                get: function () {
                    return this._routerState.pathFromRoot(this)
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "paramMap", {
                get: function () {
                    return this._paramMap || (this._paramMap = fp(this.params)), this._paramMap
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "queryParamMap", {
                get: function () {
                    return this._queryParamMap || (this._queryParamMap = fp(this.queryParams)), this._queryParamMap
                }, enumerable: !0, configurable: !0
            }), e.prototype.toString = function () {
                return "Route(url:'" + this.url.map(function (e) {
                    return e.toString()
                }).join("/") + "', path:'" + (this.routeConfig ? this.routeConfig.path : "") + "')"
            }, e
        }(), df = function (e) {
            function t(t, n) {
                var r = e.call(this, n) || this;
                return r.url = t, hf(r, n), r
            }

            return o(t, e), t.prototype.toString = function () {
                return gf(this._root)
            }, t
        }(nf);

        function hf(e, t) {
            t.value._routerState = e, t.children.forEach(function (t) {
                return hf(e, t)
            })
        }

        function gf(e) {
            var t = e.children.length > 0 ? " { " + e.children.map(gf).join(", ") + " } " : "";
            return "" + e.value + t
        }

        function vf(e) {
            if (e.snapshot) {
                var t = e.snapshot, n = e._futureSnapshot;
                e.snapshot = n, bp(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams), t.fragment !== n.fragment && e.fragment.next(n.fragment), bp(t.params, n.params) || e.params.next(n.params), function (e, t) {
                    if (e.length !== t.length) return !1;
                    for (var n = 0; n < e.length; ++n) if (!bp(e[n], t[n])) return !1;
                    return !0
                }(t.url, n.url) || e.url.next(n.url), bp(t.data, n.data) || e.data.next(n.data)
            } else e.snapshot = e._futureSnapshot, e.data.next(e._futureSnapshot.data)
        }

        function yf(e, t) {
            var n, r;
            return bp(e.params, t.params) && Op(n = e.url, r = t.url) && n.every(function (e, t) {
                return bp(e.parameters, r[t].parameters)
            }) && !(!e.parent != !t.parent) && (!e.parent || yf(e.parent, t.parent))
        }

        function mf(e) {
            return "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        }

        function bf(e, t, n, r, o) {
            var i = {};
            return r && Cp(r, function (e, t) {
                i[t] = Array.isArray(e) ? e.map(function (e) {
                    return "" + e
                }) : "" + e
            }), new kp(n.root === e ? t : function e(t, n, r) {
                var o = {};
                return Cp(t.children, function (t, i) {
                    o[i] = t === n ? r : e(t, n, r)
                }), new Pp(t.segments, o)
            }(n.root, e, t), i, o)
        }

        var _f = function () {
            function e(e, t, n) {
                if (this.isAbsolute = e, this.numberOfDoubleDots = t, this.commands = n, e && n.length > 0 && mf(n[0])) throw new Error("Root segment cannot have matrix parameters");
                var r = n.find(function (e) {
                    return "object" == typeof e && null != e && e.outlets
                });
                if (r && r !== wp(n)) throw new Error("{outlets:{}} has to be the last command")
            }

            return e.prototype.toRoot = function () {
                return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
            }, e
        }(), wf = function (e, t, n) {
            this.segmentGroup = e, this.processChildren = t, this.index = n
        };

        function Cf(e) {
            return "object" == typeof e && null != e && e.outlets ? e.outlets[cp] : "" + e
        }

        function Sf(e, t, n) {
            if (e || (e = new Pp([], {})), 0 === e.segments.length && e.hasChildren()) return xf(e, t, n);
            var r = function (e, t, n) {
                for (var r = 0, o = t, i = {match: !1, pathIndex: 0, commandIndex: 0}; o < e.segments.length;) {
                    if (r >= n.length) return i;
                    var l = e.segments[o], u = Cf(n[r]), a = r < n.length - 1 ? n[r + 1] : null;
                    if (o > 0 && void 0 === u) break;
                    if (u && a && "object" == typeof a && void 0 === a.outlets) {
                        if (!Tf(u, a, l)) return i;
                        r += 2
                    } else {
                        if (!Tf(u, {}, l)) return i;
                        r++
                    }
                    o++
                }
                return {match: !0, pathIndex: o, commandIndex: r}
            }(e, t, n), o = n.slice(r.commandIndex);
            if (r.match && r.pathIndex < e.segments.length) {
                var i = new Pp(e.segments.slice(0, r.pathIndex), {});
                return i.children[cp] = new Pp(e.segments.slice(r.pathIndex), e.children), xf(i, 0, o)
            }
            return r.match && 0 === o.length ? new Pp(e.segments, {}) : r.match && !e.hasChildren() ? Ef(e, t, n) : r.match ? xf(e, 0, o) : Ef(e, t, n)
        }

        function xf(e, t, n) {
            if (0 === n.length) return new Pp(e.segments, {});
            var r = function (e) {
                var t, n;
                return "object" != typeof e[0] ? ((t = {})[cp] = e, t) : void 0 === e[0].outlets ? ((n = {})[cp] = e, n) : e[0].outlets
            }(n), o = {};
            return Cp(r, function (n, r) {
                null !== n && (o[r] = Sf(e.children[r], t, n))
            }), Cp(e.children, function (e, t) {
                void 0 === r[t] && (o[t] = e)
            }), new Pp(e.segments, o)
        }

        function Ef(e, t, n) {
            for (var r = e.segments.slice(0, t), o = 0; o < n.length;) {
                if ("object" == typeof n[o] && void 0 !== n[o].outlets) {
                    var i = kf(n[o].outlets);
                    return new Pp(r, i)
                }
                if (0 === o && mf(n[0])) r.push(new Tp(e.segments[t].path, n[0])), o++; else {
                    var l = Cf(n[o]), u = o < n.length - 1 ? n[o + 1] : null;
                    l && u && mf(u) ? (r.push(new Tp(l, Pf(u))), o += 2) : (r.push(new Tp(l, {})), o++)
                }
            }
            return new Pp(r, {})
        }

        function kf(e) {
            var t = {};
            return Cp(e, function (e, n) {
                null !== e && (t[n] = Ef(new Pp([], {}), 0, e))
            }), t
        }

        function Pf(e) {
            var t = {};
            return Cp(e, function (e, n) {
                return t[n] = "" + e
            }), t
        }

        function Tf(e, t, n) {
            return e == n.path && bp(t, n.parameters)
        }

        var Of = function (e) {
            this.path = e, this.route = this.path[this.path.length - 1]
        }, If = function (e, t) {
            this.component = e, this.route = t
        }, Af = function () {
            function e(e, t, n, r) {
                this.future = e, this.curr = t, this.moduleInjector = n, this.forwardEvent = r, this.canActivateChecks = [], this.canDeactivateChecks = []
            }

            return e.prototype.initialize = function (e) {
                var t = this.future._root;
                this.setupChildRouteGuards(t, this.curr ? this.curr._root : null, e, [t.value])
            }, e.prototype.checkGuards = function () {
                var e = this;
                return this.isDeactivating() || this.isActivating() ? this.runCanDeactivateChecks().pipe(X(function (t) {
                    return t ? e.runCanActivateChecks() : ja(!1)
                })) : ja(!0)
            }, e.prototype.resolveData = function (e) {
                var t = this;
                return this.isActivating() ? $(this.canActivateChecks).pipe(Ha(function (n) {
                    return t.runResolve(n.route, e)
                }), function (e, t) {
                    return arguments.length >= 2 ? function (n) {
                        return N(ds(e, t), Qa(1), Xa(t))(n)
                    } : function (t) {
                        return N(ds(function (t, n, r) {
                            return e(t, n, r + 1)
                        }), Qa(1))(t)
                    }
                }(function (e, t) {
                    return e
                })) : ja(null)
            }, e.prototype.isDeactivating = function () {
                return 0 !== this.canDeactivateChecks.length
            }, e.prototype.isActivating = function () {
                return 0 !== this.canActivateChecks.length
            }, e.prototype.setupChildRouteGuards = function (e, t, n, r) {
                var o = this, i = uf(t);
                e.children.forEach(function (e) {
                    o.setupRouteGuards(e, i[e.value.outlet], n, r.concat([e.value])), delete i[e.value.outlet]
                }), Cp(i, function (e, t) {
                    return o.deactivateRouteAndItsChildren(e, n.getContext(t))
                })
            }, e.prototype.setupRouteGuards = function (e, t, n, r) {
                var o = e.value, i = t ? t.value : null, l = n ? n.getContext(e.value.outlet) : null;
                if (i && o.routeConfig === i.routeConfig) {
                    var u = this.shouldRunGuardsAndResolvers(i, o, o.routeConfig.runGuardsAndResolvers);
                    u ? this.canActivateChecks.push(new Of(r)) : (o.data = i.data, o._resolvedData = i._resolvedData), this.setupChildRouteGuards(e, t, o.component ? l ? l.children : null : n, r), u && this.canDeactivateChecks.push(new If(l.outlet.component, i))
                } else i && this.deactivateRouteAndItsChildren(t, l), this.canActivateChecks.push(new Of(r)), this.setupChildRouteGuards(e, null, o.component ? l ? l.children : null : n, r)
            }, e.prototype.shouldRunGuardsAndResolvers = function (e, t, n) {
                switch (n) {
                    case"always":
                        return !0;
                    case"paramsOrQueryParamsChange":
                        return !yf(e, t) || !bp(e.queryParams, t.queryParams);
                    case"paramsChange":
                    default:
                        return !yf(e, t)
                }
            }, e.prototype.deactivateRouteAndItsChildren = function (e, t) {
                var n = this, r = uf(e), o = e.value;
                Cp(r, function (e, r) {
                    n.deactivateRouteAndItsChildren(e, o.component ? t ? t.children.getContext(r) : null : t)
                }), this.canDeactivateChecks.push(new If(o.component && t && t.outlet && t.outlet.isActivated ? t.outlet.component : null, o))
            }, e.prototype.runCanDeactivateChecks = function () {
                var e = this;
                return $(this.canDeactivateChecks).pipe(X(function (t) {
                    return e.runCanDeactivate(t.component, t.route)
                }), ls(function (e) {
                    return !0 === e
                }))
            }, e.prototype.runCanActivateChecks = function () {
                var e = this;
                return $(this.canActivateChecks).pipe(Ha(function (t) {
                    return Sp($([e.fireChildActivationStart(t.route.parent), e.fireActivationStart(t.route), e.runCanActivateChild(t.path), e.runCanActivate(t.route)]))
                }), ls(function (e) {
                    return !0 === e
                }))
            }, e.prototype.fireActivationStart = function (e) {
                return null !== e && this.forwardEvent && this.forwardEvent(new lp(e)), ja(!0)
            }, e.prototype.fireChildActivationStart = function (e) {
                return null !== e && this.forwardEvent && this.forwardEvent(new op(e)), ja(!0)
            }, e.prototype.runCanActivate = function (e) {
                var t = this, n = e.routeConfig ? e.routeConfig.canActivate : null;
                return n && 0 !== n.length ? Sp($(n).pipe(W(function (n) {
                    var r = t.getToken(n, e);
                    return xp(r.canActivate ? r.canActivate(e, t.future) : r(e, t.future)).pipe(ps())
                }))) : ja(!0)
            }, e.prototype.runCanActivateChild = function (e) {
                var t = this, n = e[e.length - 1];
                return Sp($(e.slice(0, e.length - 1).reverse().map(function (e) {
                    return t.extractCanActivateChild(e)
                }).filter(function (e) {
                    return null !== e
                })).pipe(W(function (e) {
                    return Sp($(e.guards).pipe(W(function (r) {
                        var o = t.getToken(r, e.node);
                        return xp(o.canActivateChild ? o.canActivateChild(n, t.future) : o(n, t.future)).pipe(ps())
                    })))
                })))
            }, e.prototype.extractCanActivateChild = function (e) {
                var t = e.routeConfig ? e.routeConfig.canActivateChild : null;
                return t && 0 !== t.length ? {node: e, guards: t} : null
            }, e.prototype.runCanDeactivate = function (e, t) {
                var n = this, r = t && t.routeConfig ? t.routeConfig.canDeactivate : null;
                return r && 0 !== r.length ? $(r).pipe(X(function (r) {
                    var o = n.getToken(r, t);
                    return xp(o.canDeactivate ? o.canDeactivate(e, t, n.curr, n.future) : o(e, t, n.curr, n.future)).pipe(ps())
                })).pipe(ls(function (e) {
                    return !0 === e
                })) : ja(!0)
            }, e.prototype.runResolve = function (e, t) {
                return this.resolveNode(e._resolve, e).pipe(W(function (n) {
                    return e._resolvedData = n, e.data = i({}, e.data, pf(e, t).resolve), null
                }))
            }, e.prototype.resolveNode = function (e, t) {
                var n = this, r = Object.keys(e);
                if (0 === r.length) return ja({});
                if (1 === r.length) {
                    var o = r[0];
                    return this.getResolver(e[o], t).pipe(W(function (e) {
                        var t;
                        return (t = {})[o] = e, t
                    }))
                }
                var i = {};
                return $(r).pipe(X(function (r) {
                    return n.getResolver(e[r], t).pipe(W(function (e) {
                        return i[r] = e, e
                    }))
                })).pipe(ns(), W(function () {
                    return i
                }))
            }, e.prototype.getResolver = function (e, t) {
                var n = this.getToken(e, t);
                return xp(n.resolve ? n.resolve(t, this.future) : n(t, this.future))
            }, e.prototype.getToken = function (e, t) {
                var n = function (e) {
                    if (!e) return null;
                    for (var t = e.parent; t; t = t.parent) {
                        var n = t.routeConfig;
                        if (n && n._loadedConfig) return n._loadedConfig
                    }
                    return null
                }(t);
                return (n ? n.module.injector : this.moduleInjector).get(e)
            }, e
        }(), Nf = function () {
        }, Rf = function () {
            function e(e, t, n, r, o, i) {
                this.rootComponentType = e, this.config = t, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = i
            }

            return e.prototype.recognize = function () {
                try {
                    var e = jf(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                        t = this.processSegmentGroup(this.config, e, cp),
                        n = new ff([], Object.freeze({}), Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, cp, this.rootComponentType, null, this.urlTree.root, -1, {}),
                        r = new lf(n, t), o = new df(this.url, r);
                    return this.inheritParamsAndData(o._root), ja(o)
                } catch (e) {
                    return new M(function (t) {
                        return t.error(e)
                    })
                }
            }, e.prototype.inheritParamsAndData = function (e) {
                var t = this, n = e.value, r = pf(n, this.paramsInheritanceStrategy);
                n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), e.children.forEach(function (e) {
                    return t.inheritParamsAndData(e)
                })
            }, e.prototype.processSegmentGroup = function (e, t, n) {
                return 0 === t.segments.length && t.hasChildren() ? this.processChildren(e, t) : this.processSegment(e, t, t.segments, n)
            }, e.prototype.processChildren = function (e, t) {
                var n, r = this, o = Ip(t, function (t, n) {
                    return r.processSegmentGroup(e, t, n)
                });
                return n = {}, o.forEach(function (e) {
                    var t = n[e.value.outlet];
                    if (t) {
                        var r = t.url.map(function (e) {
                            return e.toString()
                        }).join("/"), o = e.value.url.map(function (e) {
                            return e.toString()
                        }).join("/");
                        throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.")
                    }
                    n[e.value.outlet] = e.value
                }), o.sort(function (e, t) {
                    return e.value.outlet === cp ? -1 : t.value.outlet === cp ? 1 : e.value.outlet.localeCompare(t.value.outlet)
                }), o
            }, e.prototype.processSegment = function (e, t, n, r) {
                var o, i;
                try {
                    for (var l = s(e), u = l.next(); !u.done; u = l.next()) {
                        var a = u.value;
                        try {
                            return this.processSegmentAgainstRoute(a, t, n, r)
                        } catch (e) {
                            if (!(e instanceof Nf)) throw e
                        }
                    }
                } catch (e) {
                    o = {error: e}
                } finally {
                    try {
                        u && !u.done && (i = l.return) && i.call(l)
                    } finally {
                        if (o) throw o.error
                    }
                }
                if (this.noLeftoversInUrl(t, n, r)) return [];
                throw new Nf
            }, e.prototype.noLeftoversInUrl = function (e, t, n) {
                return 0 === t.length && !e.children[n]
            }, e.prototype.processSegmentAgainstRoute = function (e, t, n, r) {
                if (e.redirectTo) throw new Nf;
                if ((e.outlet || cp) !== r) throw new Nf;
                var o, l = [], u = [];
                if ("**" === e.path) {
                    var a = n.length > 0 ? wp(n).parameters : {};
                    o = new ff(n, a, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Uf(e), r, e.component, e, Mf(t), Df(t) + n.length, Hf(e))
                } else {
                    var s = function (e, t, n) {
                        if ("" === t.path) {
                            if ("full" === t.pathMatch && (e.hasChildren() || n.length > 0)) throw new Nf;
                            return {consumedSegments: [], lastChild: 0, parameters: {}}
                        }
                        var r = (t.matcher || dp)(n, e, t);
                        if (!r) throw new Nf;
                        var o = {};
                        Cp(r.posParams, function (e, t) {
                            o[t] = e.path
                        });
                        var l = r.consumed.length > 0 ? i({}, o, r.consumed[r.consumed.length - 1].parameters) : o;
                        return {consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: l}
                    }(t, e, n);
                    l = s.consumedSegments, u = n.slice(s.lastChild), o = new ff(l, s.parameters, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, Uf(e), r, e.component, e, Mf(t), Df(t) + l.length, Hf(e))
                }
                var c = function (e) {
                    return e.children ? e.children : e.loadChildren ? e._loadedConfig.routes : []
                }(e), p = jf(t, l, u, c, this.relativeLinkResolution), f = p.segmentGroup, d = p.slicedSegments;
                if (0 === d.length && f.hasChildren()) {
                    var h = this.processChildren(c, f);
                    return [new lf(o, h)]
                }
                if (0 === c.length && 0 === d.length) return [new lf(o, [])];
                var g = this.processSegment(c, f, d, cp);
                return [new lf(o, g)]
            }, e
        }();

        function Mf(e) {
            for (var t = e; t._sourceSegment;) t = t._sourceSegment;
            return t
        }

        function Df(e) {
            for (var t = e, n = t._segmentIndexShift ? t._segmentIndexShift : 0; t._sourceSegment;) n += (t = t._sourceSegment)._segmentIndexShift ? t._segmentIndexShift : 0;
            return n - 1
        }

        function jf(e, t, n, r, o) {
            if (n.length > 0 && function (e, t, n) {
                return r.some(function (n) {
                    return Lf(e, t, n) && Vf(n) !== cp
                })
            }(e, n)) {
                var l = new Pp(t, function (e, t, n, r) {
                    var o, i, l = {};
                    l[cp] = r, r._sourceSegment = e, r._segmentIndexShift = t.length;
                    try {
                        for (var u = s(n), a = u.next(); !a.done; a = u.next()) {
                            var c = a.value;
                            if ("" === c.path && Vf(c) !== cp) {
                                var p = new Pp([], {});
                                p._sourceSegment = e, p._segmentIndexShift = t.length, l[Vf(c)] = p
                            }
                        }
                    } catch (e) {
                        o = {error: e}
                    } finally {
                        try {
                            a && !a.done && (i = u.return) && i.call(u)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return l
                }(e, t, r, new Pp(n, e.children)));
                return l._sourceSegment = e, l._segmentIndexShift = t.length, {segmentGroup: l, slicedSegments: []}
            }
            if (0 === n.length && function (e, t, n) {
                return r.some(function (n) {
                    return Lf(e, t, n)
                })
            }(e, n)) {
                var u = new Pp(e.segments, function (e, t, n, r, o, l) {
                    var u, a, c = {};
                    try {
                        for (var p = s(r), f = p.next(); !f.done; f = p.next()) {
                            var d = f.value;
                            if (Lf(e, n, d) && !o[Vf(d)]) {
                                var h = new Pp([], {});
                                h._sourceSegment = e, h._segmentIndexShift = "legacy" === l ? e.segments.length : t.length, c[Vf(d)] = h
                            }
                        }
                    } catch (e) {
                        u = {error: e}
                    } finally {
                        try {
                            f && !f.done && (a = p.return) && a.call(p)
                        } finally {
                            if (u) throw u.error
                        }
                    }
                    return i({}, o, c)
                }(e, t, n, r, e.children, o));
                return u._sourceSegment = e, u._segmentIndexShift = t.length, {segmentGroup: u, slicedSegments: n}
            }
            var a = new Pp(e.segments, e.children);
            return a._sourceSegment = e, a._segmentIndexShift = t.length, {segmentGroup: a, slicedSegments: n}
        }

        function Lf(e, t, n) {
            return (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
        }

        function Vf(e) {
            return e.outlet || cp
        }

        function Uf(e) {
            return e.data || {}
        }

        function Hf(e) {
            return e.resolve || {}
        }

        var Ff = function () {
        }, zf = function () {
            function e() {
            }

            return e.prototype.shouldDetach = function (e) {
                return !1
            }, e.prototype.store = function (e, t) {
            }, e.prototype.shouldAttach = function (e) {
                return !1
            }, e.prototype.retrieve = function (e) {
                return null
            }, e.prototype.shouldReuseRoute = function (e, t) {
                return e.routeConfig === t.routeConfig
            }, e
        }(), Bf = new me("ROUTES"), qf = function () {
            function e(e, t, n, r) {
                this.loader = e, this.compiler = t, this.onLoadStartListener = n, this.onLoadEndListener = r
            }

            return e.prototype.load = function (e, t) {
                var n = this;
                return this.onLoadStartListener && this.onLoadStartListener(t), this.loadModuleFactory(t.loadChildren).pipe(W(function (r) {
                    n.onLoadEndListener && n.onLoadEndListener(t);
                    var o = r.create(e);
                    return new hp(_p(o.injector.get(Bf)).map(mp), o)
                }))
            }, e.prototype.loadModuleFactory = function (e) {
                var t = this;
                return "string" == typeof e ? $(this.loader.load(e)) : xp(e()).pipe(X(function (e) {
                    return e instanceof nn ? ja(e) : $(t.compiler.compileModuleAsync(e))
                }))
            }, e
        }(), Zf = function () {
        }, Qf = function () {
            function e() {
            }

            return e.prototype.shouldProcessUrl = function (e) {
                return !0
            }, e.prototype.extract = function (e) {
                return e
            }, e.prototype.merge = function (e, t) {
                return e
            }, e
        }();

        function Gf(e) {
            throw e
        }

        function Wf(e, t, n) {
            return t.parse("/")
        }

        function Kf(e, t) {
            return ja(null)
        }

        var Yf = function () {
            function e(e, t, n, r, o, i, l, u) {
                var a = this;
                this.rootComponentType = e, this.urlSerializer = t, this.rootContexts = n, this.location = r, this.config = u, this.navigations = new Ua(null), this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new ae, this.errorHandler = Gf, this.malformedUriErrorHandler = Wf, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                    beforePreactivation: Kf,
                    afterPreactivation: Kf
                }, this.urlHandlingStrategy = new Qf, this.routeReuseStrategy = new zf, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(tn), this.console = o.get(Ft);
                var s = o.get(sn);
                this.isNgZoneEnabled = s instanceof sn, this.resetConfig(u), this.currentUrlTree = new kp(new Pp([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.configLoader = new qf(i, l, function (e) {
                    return a.triggerEvent(new np(e))
                }, function (e) {
                    return a.triggerEvent(new rp(e))
                }), this.routerState = sf(this.currentUrlTree, this.rootComponentType), this.processNavigations()
            }

            return e.prototype.resetRootComponentType = function (e) {
                this.rootComponentType = e, this.routerState.root.component = this.rootComponentType
            }, e.prototype.initialNavigation = function () {
                this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {replaceUrl: !0})
            }, e.prototype.setUpLocationChangeListener = function () {
                var e = this;
                this.locationSubscription || (this.locationSubscription = this.location.subscribe(function (t) {
                    var n = e.parseUrl(t.url), r = "popstate" === t.type ? "popstate" : "hashchange",
                        o = t.state && t.state.navigationId ? {navigationId: t.state.navigationId} : null;
                    setTimeout(function () {
                        e.scheduleNavigation(n, r, o, {replaceUrl: !0})
                    }, 0)
                }))
            }, Object.defineProperty(e.prototype, "url", {
                get: function () {
                    return this.serializeUrl(this.currentUrlTree)
                }, enumerable: !0, configurable: !0
            }), e.prototype.triggerEvent = function (e) {
                this.events.next(e)
            }, e.prototype.resetConfig = function (e) {
                gp(e), this.config = e.map(mp), this.navigated = !1, this.lastSuccessfulId = -1
            }, e.prototype.ngOnDestroy = function () {
                this.dispose()
            }, e.prototype.dispose = function () {
                this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
            }, e.prototype.createUrlTree = function (e, t) {
                void 0 === t && (t = {});
                var n = t.relativeTo, r = t.queryParams, o = t.fragment, l = t.preserveQueryParams,
                    u = t.queryParamsHandling, a = t.preserveFragment;
                Sn() && l && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                var s = n || this.routerState.root, c = a ? this.currentUrlTree.fragment : o, f = null;
                if (u) switch (u) {
                    case"merge":
                        f = i({}, this.currentUrlTree.queryParams, r);
                        break;
                    case"preserve":
                        f = this.currentUrlTree.queryParams;
                        break;
                    default:
                        f = r || null
                } else f = l ? this.currentUrlTree.queryParams : r || null;
                return null !== f && (f = this.removeEmptyProps(f)), function (e, t, n, r, o) {
                    if (0 === n.length) return bf(t.root, t.root, t, r, o);
                    var i = function (e) {
                        if ("string" == typeof e[0] && 1 === e.length && "/" === e[0]) return new _f(!0, 0, e);
                        var t = 0, n = !1, r = e.reduce(function (e, r, o) {
                            if ("object" == typeof r && null != r) {
                                if (r.outlets) {
                                    var i = {};
                                    return Cp(r.outlets, function (e, t) {
                                        i[t] = "string" == typeof e ? e.split("/") : e
                                    }), p(e, [{outlets: i}])
                                }
                                if (r.segmentPath) return p(e, [r.segmentPath])
                            }
                            return "string" != typeof r ? p(e, [r]) : 0 === o ? (r.split("/").forEach(function (r, o) {
                                0 == o && "." === r || (0 == o && "" === r ? n = !0 : ".." === r ? t++ : "" != r && e.push(r))
                            }), e) : p(e, [r])
                        }, []);
                        return new _f(n, t, r)
                    }(n);
                    if (i.toRoot()) return bf(t.root, new Pp([], {}), t, r, o);
                    var l = function (e, n, r) {
                            if (e.isAbsolute) return new wf(t.root, !0, 0);
                            if (-1 === r.snapshot._lastPathIndex) return new wf(r.snapshot._urlSegment, !0, 0);
                            var o = mf(e.commands[0]) ? 0 : 1;
                            return function (t, n, i) {
                                for (var l = r.snapshot._urlSegment, u = r.snapshot._lastPathIndex + o, a = e.numberOfDoubleDots; a > u;) {
                                    if (a -= u, !(l = l.parent)) throw new Error("Invalid number of '../'");
                                    u = l.segments.length
                                }
                                return new wf(l, !1, u - a)
                            }()
                        }(i, 0, e),
                        u = l.processChildren ? xf(l.segmentGroup, l.index, i.commands) : Sf(l.segmentGroup, l.index, i.commands);
                    return bf(l.segmentGroup, u, t, r, o)
                }(s, this.currentUrlTree, e, f, c)
            }, e.prototype.navigateByUrl = function (e, t) {
                void 0 === t && (t = {skipLocationChange: !1}), Sn() && this.isNgZoneEnabled && !sn.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                var n = e instanceof kp ? e : this.parseUrl(e), r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                return this.scheduleNavigation(r, "imperative", null, t)
            }, e.prototype.navigate = function (e, t) {
                return void 0 === t && (t = {skipLocationChange: !1}), function (e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (null == n) throw new Error("The requested path contains " + n + " segment at index " + t)
                    }
                }(e), this.navigateByUrl(this.createUrlTree(e, t), t)
            }, e.prototype.serializeUrl = function (e) {
                return this.urlSerializer.serialize(e)
            }, e.prototype.parseUrl = function (e) {
                var t;
                try {
                    t = this.urlSerializer.parse(e)
                } catch (n) {
                    t = this.malformedUriErrorHandler(n, this.urlSerializer, e)
                }
                return t
            }, e.prototype.isActive = function (e, t) {
                if (e instanceof kp) return Ep(this.currentUrlTree, e, t);
                var n = this.parseUrl(e);
                return Ep(this.currentUrlTree, n, t)
            }, e.prototype.removeEmptyProps = function (e) {
                return Object.keys(e).reduce(function (t, n) {
                    var r = e[n];
                    return null !== r && void 0 !== r && (t[n] = r), t
                }, {})
            }, e.prototype.processNavigations = function () {
                var e = this;
                this.navigations.pipe(Ha(function (t) {
                    return t ? (e.executeScheduledNavigation(t), t.promise.catch(function () {
                    })) : ja(null)
                })).subscribe(function () {
                })
            }, e.prototype.scheduleNavigation = function (e, t, n, r) {
                var o = this.navigations.value;
                if (o && "imperative" !== t && "imperative" === o.source && o.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                if (o && "hashchange" == t && "popstate" === o.source && o.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                if (o && "popstate" == t && "hashchange" === o.source && o.rawUrl.toString() === e.toString()) return Promise.resolve(!0);
                var i = null, l = null, u = new Promise(function (e, t) {
                    i = e, l = t
                }), a = ++this.navigationId;
                return this.navigations.next({
                    id: a,
                    source: t,
                    state: n,
                    rawUrl: e,
                    extras: r,
                    resolve: i,
                    reject: l,
                    promise: u
                }), u.catch(function (e) {
                    return Promise.reject(e)
                })
            }, e.prototype.executeScheduledNavigation = function (e) {
                var t = this, n = e.id, r = e.rawUrl, o = e.extras, i = e.resolve, l = e.reject, u = e.source,
                    a = e.state, s = this.urlHandlingStrategy.extract(r),
                    c = !this.navigated || s.toString() !== this.currentUrlTree.toString();
                ("reload" === this.onSameUrlNavigation || c) && this.urlHandlingStrategy.shouldProcessUrl(r) ? ("eager" !== this.urlUpdateStrategy || o.skipLocationChange || this.setBrowserUrl(r, !!o.replaceUrl, n), this.events.next(new Gc(n, this.serializeUrl(s), u, a)), Promise.resolve().then(function (e) {
                    return t.runNavigate(s, r, !!o.skipLocationChange, !!o.replaceUrl, n, null)
                }).then(i, l)) : c && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree) ? (this.events.next(new Gc(n, this.serializeUrl(s), u, a)), Promise.resolve().then(function (e) {
                    return t.runNavigate(s, r, !1, !1, n, sf(s, t.rootComponentType).snapshot)
                }).then(i, l)) : (this.rawUrlTree = r, i(null))
            }, e.prototype.runNavigate = function (e, t, n, r, o, i) {
                var l = this;
                return o !== this.navigationId ? (this.events.next(new Kc(o, this.serializeUrl(e), "Navigation ID " + o + " is not equal to the current navigation id " + this.navigationId)), Promise.resolve(!1)) : new Promise(function (u, a) {
                    var c, p = (i ? ja({
                        appliedUrl: e,
                        snapshot: i
                    }) : new Jp(l.ngModule.injector, l.configLoader, l.urlSerializer, e, l.config).apply().pipe(X(function (t) {
                        return function (e, t, n, r, o, i) {
                            return void 0 === o && (o = "emptyOnly"), void 0 === i && (i = "legacy"), new Rf(e, t, n, r, o, i).recognize()
                        }(l.rootComponentType, l.config, t, l.serializeUrl(t), l.paramsInheritanceStrategy, l.relativeLinkResolution).pipe(W(function (n) {
                            return l.events.next(new Jc(o, l.serializeUrl(e), l.serializeUrl(t), n)), {
                                appliedUrl: t,
                                snapshot: n
                            }
                        }))
                    }))).pipe(X(function (i) {
                        return "boolean" == typeof i ? ja(i) : l.hooks.beforePreactivation(i.snapshot, {
                            navigationId: o,
                            appliedUrlTree: e,
                            rawUrlTree: t,
                            skipLocationChange: n,
                            replaceUrl: r
                        }).pipe(W(function () {
                            return i
                        }))
                    })).pipe(W(function (e) {
                        if ("boolean" == typeof e) return e;
                        var t = e.appliedUrl, n = e.snapshot;
                        return (c = new Af(n, l.routerState.snapshot, l.ngModule.injector, function (e) {
                            return l.triggerEvent(e)
                        })).initialize(l.rootContexts), {appliedUrl: t, snapshot: n}
                    })).pipe(X(function (t) {
                        if ("boolean" == typeof t || l.navigationId !== o) return ja(!1);
                        var n = t.appliedUrl, r = t.snapshot;
                        return l.triggerEvent(new $c(o, l.serializeUrl(e), l.serializeUrl(n), r)), c.checkGuards().pipe(W(function (t) {
                            return l.triggerEvent(new Xc(o, l.serializeUrl(e), l.serializeUrl(n), r, t)), {
                                appliedUrl: n,
                                snapshot: r,
                                shouldActivate: t
                            }
                        }))
                    })).pipe(X(function (t) {
                        return "boolean" == typeof t || l.navigationId !== o ? ja(!1) : t.shouldActivate && c.isActivating() ? (l.triggerEvent(new ep(o, l.serializeUrl(e), l.serializeUrl(t.appliedUrl), t.snapshot)), c.resolveData(l.paramsInheritanceStrategy).pipe(W(function () {
                            return l.triggerEvent(new tp(o, l.serializeUrl(e), l.serializeUrl(t.appliedUrl), t.snapshot)), t
                        }))) : ja(t)
                    })).pipe(X(function (i) {
                        return "boolean" == typeof i || l.navigationId !== o ? ja(!1) : l.hooks.afterPreactivation(i.snapshot, {
                            navigationId: o,
                            appliedUrlTree: e,
                            rawUrlTree: t,
                            skipLocationChange: n,
                            replaceUrl: r
                        }).pipe(W(function () {
                            return i
                        }))
                    })).pipe(W(function (e) {
                        if ("boolean" == typeof e || l.navigationId !== o) return !1;
                        var t, n, r, i = e.appliedUrl, u = e.shouldActivate;
                        return u ? {
                            appliedUrl: i,
                            state: (r = function e(t, n, r) {
                                if (r && t.shouldReuseRoute(n.value, r.value.snapshot)) {
                                    (a = r.value)._futureSnapshot = n.value;
                                    var o = function (t, n, r) {
                                        return n.children.map(function (n) {
                                            var o, i;
                                            try {
                                                for (var l = s(r.children), u = l.next(); !u.done; u = l.next()) {
                                                    var a = u.value;
                                                    if (t.shouldReuseRoute(a.value.snapshot, n.value)) return e(t, n, a)
                                                }
                                            } catch (e) {
                                                o = {error: e}
                                            } finally {
                                                try {
                                                    u && !u.done && (i = l.return) && i.call(l)
                                                } finally {
                                                    if (o) throw o.error
                                                }
                                            }
                                            return e(t, n)
                                        })
                                    }(t, n, r);
                                    return new lf(a, o)
                                }
                                var i = t.retrieve(n.value);
                                if (i) {
                                    var l = i.route;
                                    return function e(t, n) {
                                        if (t.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                        if (t.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                        n.value._futureSnapshot = t.value;
                                        for (var r = 0; r < t.children.length; ++r) e(t.children[r], n.children[r])
                                    }(n, l), l
                                }
                                var u,
                                    a = new cf(new Ua((u = n.value).url), new Ua(u.params), new Ua(u.queryParams), new Ua(u.fragment), new Ua(u.data), u.outlet, u.component, u);
                                return o = n.children.map(function (n) {
                                    return e(t, n)
                                }), new lf(a, o)
                            }(l.routeReuseStrategy, (t = e.snapshot)._root, (n = l.routerState) ? n._root : void 0), new af(r, t)),
                            shouldActivate: u
                        } : {appliedUrl: i, state: null, shouldActivate: u}
                    }));
                    l.activateRoutes(p, l.routerState, l.currentUrlTree, o, e, t, n, r, u, a)
                })
            }, e.prototype.activateRoutes = function (e, t, n, r, o, i, l, u, a, s) {
                var c, p = this;
                e.forEach(function (e) {
                    if ("boolean" != typeof e && e.shouldActivate && r === p.navigationId && e.state) {
                        var n = e.state;
                        p.currentUrlTree = e.appliedUrl, p.rawUrlTree = p.urlHandlingStrategy.merge(p.currentUrlTree, i), p.routerState = n, "deferred" !== p.urlUpdateStrategy || l || p.setBrowserUrl(p.rawUrlTree, u, r), new Jf(p.routeReuseStrategy, n, t, function (e) {
                            return p.triggerEvent(e)
                        }).activate(p.rootContexts), c = !0
                    } else c = !1
                }).then(function () {
                    c ? (p.navigated = !0, p.lastSuccessfulId = r, p.events.next(new Wc(r, p.serializeUrl(o), p.serializeUrl(p.currentUrlTree))), a(!0)) : (p.resetUrlToCurrentUrlTree(), p.events.next(new Kc(r, p.serializeUrl(o), "")), a(!1))
                }, function (e) {
                    if ((l = e) && l.ngNavigationCancelingError) p.navigated = !0, p.resetStateAndUrl(t, n, i), p.events.next(new Kc(r, p.serializeUrl(o), e.message)), a(!1); else {
                        p.resetStateAndUrl(t, n, i), p.events.next(new Yc(r, p.serializeUrl(o), e));
                        try {
                            a(p.errorHandler(e))
                        } catch (e) {
                            s(e)
                        }
                    }
                    var l
                })
            }, e.prototype.setBrowserUrl = function (e, t, n) {
                var r = this.urlSerializer.serialize(e);
                this.location.isCurrentPathEqualTo(r) || t ? this.location.replaceState(r, "", {navigationId: n}) : this.location.go(r, "", {navigationId: n})
            }, e.prototype.resetStateAndUrl = function (e, t, n) {
                this.routerState = e, this.currentUrlTree = t, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
            }, e.prototype.resetUrlToCurrentUrlTree = function () {
                this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {navigationId: this.lastSuccessfulId})
            }, e
        }(), Jf = function () {
            function e(e, t, n, r) {
                this.routeReuseStrategy = e, this.futureState = t, this.currState = n, this.forwardEvent = r
            }

            return e.prototype.activate = function (e) {
                var t = this.futureState._root, n = this.currState ? this.currState._root : null;
                this.deactivateChildRoutes(t, n, e), vf(this.futureState.root), this.activateChildRoutes(t, n, e)
            }, e.prototype.deactivateChildRoutes = function (e, t, n) {
                var r = this, o = uf(t);
                e.children.forEach(function (e) {
                    var t = e.value.outlet;
                    r.deactivateRoutes(e, o[t], n), delete o[t]
                }), Cp(o, function (e, t) {
                    r.deactivateRouteAndItsChildren(e, n)
                })
            }, e.prototype.deactivateRoutes = function (e, t, n) {
                var r = e.value, o = t ? t.value : null;
                if (r === o) if (r.component) {
                    var i = n.getContext(r.outlet);
                    i && this.deactivateChildRoutes(e, t, i.children)
                } else this.deactivateChildRoutes(e, t, n); else o && this.deactivateRouteAndItsChildren(t, n)
            }, e.prototype.deactivateRouteAndItsChildren = function (e, t) {
                this.routeReuseStrategy.shouldDetach(e.value.snapshot) ? this.detachAndStoreRouteSubtree(e, t) : this.deactivateRouteAndOutlet(e, t)
            }, e.prototype.detachAndStoreRouteSubtree = function (e, t) {
                var n = t.getContext(e.value.outlet);
                if (n && n.outlet) {
                    var r = n.outlet.detach(), o = n.children.onOutletDeactivated();
                    this.routeReuseStrategy.store(e.value.snapshot, {componentRef: r, route: e, contexts: o})
                }
            }, e.prototype.deactivateRouteAndOutlet = function (e, t) {
                var n = this, r = t.getContext(e.value.outlet);
                if (r) {
                    var o = uf(e), i = e.value.component ? r.children : t;
                    Cp(o, function (e, t) {
                        return n.deactivateRouteAndItsChildren(e, i)
                    }), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
                }
            }, e.prototype.activateChildRoutes = function (e, t, n) {
                var r = this, o = uf(t);
                e.children.forEach(function (e) {
                    r.activateRoutes(e, o[e.value.outlet], n), r.forwardEvent(new up(e.value.snapshot))
                }), e.children.length && this.forwardEvent(new ip(e.value.snapshot))
            }, e.prototype.activateRoutes = function (e, t, n) {
                var r = e.value, o = t ? t.value : null;
                if (vf(r), r === o) if (r.component) {
                    var i = n.getOrCreateContext(r.outlet);
                    this.activateChildRoutes(e, t, i.children)
                } else this.activateChildRoutes(e, t, n); else if (r.component) if (i = n.getOrCreateContext(r.outlet), this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                    var l = this.routeReuseStrategy.retrieve(r.snapshot);
                    this.routeReuseStrategy.store(r.snapshot, null), i.children.onOutletReAttached(l.contexts), i.attachRef = l.componentRef, i.route = l.route.value, i.outlet && i.outlet.attach(l.componentRef, l.route.value), $f(l.route)
                } else {
                    var u = function (e) {
                        for (var t = r.snapshot.parent; t; t = t.parent) {
                            var n = t.routeConfig;
                            if (n && n._loadedConfig) return n._loadedConfig;
                            if (n && n.component) return null
                        }
                        return null
                    }(), a = u ? u.module.componentFactoryResolver : null;
                    i.attachRef = null, i.route = r, i.resolver = a, i.outlet && i.outlet.activateWith(r, a), this.activateChildRoutes(e, null, i.children)
                } else this.activateChildRoutes(e, null, n)
            }, e
        }();

        function $f(e) {
            vf(e.value), e.children.forEach($f)
        }

        var Xf = function () {
            function e(e, t, n) {
                var r = this;
                this.router = e, this.route = t, this.locationStrategy = n, this.commands = [], this.subscription = e.events.subscribe(function (e) {
                    e instanceof Wc && r.updateTargetUrlAndHref()
                })
            }

            return Object.defineProperty(e.prototype, "routerLink", {
                set: function (e) {
                    this.commands = null != e ? Array.isArray(e) ? e : [e] : []
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "preserveQueryParams", {
                set: function (e) {
                    Sn() && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."), this.preserve = e
                }, enumerable: !0, configurable: !0
            }), e.prototype.ngOnChanges = function (e) {
                this.updateTargetUrlAndHref()
            }, e.prototype.ngOnDestroy = function () {
                this.subscription.unsubscribe()
            }, e.prototype.onClick = function (e, t, n, r) {
                if (0 !== e || t || n || r) return !0;
                if ("string" == typeof this.target && "_self" != this.target) return !0;
                var o = {skipLocationChange: ed(this.skipLocationChange), replaceUrl: ed(this.replaceUrl)};
                return this.router.navigateByUrl(this.urlTree, o), !1
            }, e.prototype.updateTargetUrlAndHref = function () {
                this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))
            }, Object.defineProperty(e.prototype, "urlTree", {
                get: function () {
                    return this.router.createUrlTree(this.commands, {
                        relativeTo: this.route,
                        queryParams: this.queryParams,
                        fragment: this.fragment,
                        preserveQueryParams: ed(this.preserve),
                        queryParamsHandling: this.queryParamsHandling,
                        preserveFragment: ed(this.preserveFragment)
                    })
                }, enumerable: !0, configurable: !0
            }), l([Pe("attr.target"), ke(), a("design:type", String)], e.prototype, "target", void 0), e
        }();

        function ed(e) {
            return "" === e || !!e
        }

        var td = function () {
                return function () {
                    this.outlet = null, this.route = null, this.resolver = null, this.children = new nd, this.attachRef = null
                }
            }(), nd = function () {
                function e() {
                    this.contexts = new Map
                }

                return e.prototype.onChildOutletCreated = function (e, t) {
                    var n = this.getOrCreateContext(e);
                    n.outlet = t, this.contexts.set(e, n)
                }, e.prototype.onChildOutletDestroyed = function (e) {
                    var t = this.getContext(e);
                    t && (t.outlet = null)
                }, e.prototype.onOutletDeactivated = function () {
                    var e = this.contexts;
                    return this.contexts = new Map, e
                }, e.prototype.onOutletReAttached = function (e) {
                    this.contexts = e
                }, e.prototype.getOrCreateContext = function (e) {
                    var t = this.getContext(e);
                    return t || (t = new td, this.contexts.set(e, t)), t
                }, e.prototype.getContext = function (e) {
                    return this.contexts.get(e) || null
                }, e
            }(), rd = function () {
                function e(e, t, n, r, o) {
                    this.parentContexts = e, this.location = t, this.resolver = n, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new an, this.deactivateEvents = new an, this.name = r || cp, e.onChildOutletCreated(this.name, this)
                }

                return e.prototype.ngOnDestroy = function () {
                    this.parentContexts.onChildOutletDestroyed(this.name)
                }, e.prototype.ngOnInit = function () {
                    if (!this.activated) {
                        var e = this.parentContexts.getContext(this.name);
                        e && e.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.resolver || null))
                    }
                }, Object.defineProperty(e.prototype, "isActivated", {
                    get: function () {
                        return !!this.activated
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "component", {
                    get: function () {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this.activated.instance
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "activatedRoute", {
                    get: function () {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        return this._activatedRoute
                    }, enumerable: !0, configurable: !0
                }), Object.defineProperty(e.prototype, "activatedRouteData", {
                    get: function () {
                        return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                    }, enumerable: !0, configurable: !0
                }), e.prototype.detach = function () {
                    if (!this.activated) throw new Error("Outlet is not activated");
                    this.location.detach();
                    var e = this.activated;
                    return this.activated = null, this._activatedRoute = null, e
                }, e.prototype.attach = function (e, t) {
                    this.activated = e, this._activatedRoute = t, this.location.insert(e.hostView)
                }, e.prototype.deactivate = function () {
                    if (this.activated) {
                        var e = this.component;
                        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e)
                    }
                }, e.prototype.activateWith = function (e, t) {
                    if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                    this._activatedRoute = e;
                    var n = (t = t || this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),
                        r = this.parentContexts.getOrCreateContext(this.name).children,
                        o = new od(e, r, this.location.injector);
                    this.activated = this.location.createComponent(n, this.location.length, o), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                }, l([u(3, Ee("name"))], e)
            }(), od = function () {
                function e(e, t, n) {
                    this.route = e, this.childContexts = t, this.parent = n
                }

                return e.prototype.get = function (e, t) {
                    return e === cf ? this.route : e === nd ? this.childContexts : this.parent.get(e, t)
                }, e
            }(), id = function () {
            }, ld = function () {
                function e() {
                }

                return e.prototype.preload = function (e, t) {
                    return t().pipe(rs(function () {
                        return ja(null)
                    }))
                }, e
            }(), ud = function () {
                function e() {
                }

                return e.prototype.preload = function (e, t) {
                    return ja(null)
                }, e
            }(), ad = function () {
                function e(e, t, n, r, o) {
                    this.router = e, this.injector = r, this.preloadingStrategy = o, this.loader = new qf(t, n, function (t) {
                        return e.triggerEvent(new np(t))
                    }, function (t) {
                        return e.triggerEvent(new rp(t))
                    })
                }

                return e.prototype.setUpPreloading = function () {
                    var e = this;
                    this.subscription = this.router.events.pipe(Fa(function (e) {
                        return e instanceof Wc
                    }), Ha(function () {
                        return e.preload()
                    })).subscribe(function () {
                    })
                }, e.prototype.preload = function () {
                    var e = this.injector.get(tn);
                    return this.processRoutes(e, this.router.config)
                }, e.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe()
                }, e.prototype.processRoutes = function (e, t) {
                    var n, r, o = [];
                    try {
                        for (var i = s(t), l = i.next(); !l.done; l = i.next()) {
                            var u = l.value;
                            if (u.loadChildren && !u.canLoad && u._loadedConfig) {
                                var a = u._loadedConfig;
                                o.push(this.processRoutes(a.module, a.routes))
                            } else u.loadChildren && !u.canLoad ? o.push(this.preloadConfig(e, u)) : u.children && o.push(this.processRoutes(e, u.children))
                        }
                    } catch (e) {
                        n = {error: e}
                    } finally {
                        try {
                            l && !l.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return $(o).pipe(re(), W(function (e) {
                    }))
                }, e.prototype.preloadConfig = function (e, t) {
                    var n = this;
                    return this.preloadingStrategy.preload(t, function () {
                        return n.loader.load(e.injector, t).pipe(X(function (e) {
                            return t._loadedConfig = e, n.processRoutes(e.module, e.routes)
                        }))
                    })
                }, e
            }(), sd = function () {
                function e(e, t, n) {
                    void 0 === n && (n = {}), this.router = e, this.viewportScroller = t, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
                }

                return e.prototype.init = function () {
                    "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                }, e.prototype.createScrollEvents = function () {
                    var e = this;
                    return this.router.events.subscribe(function (t) {
                        t instanceof Gc ? (e.store[e.lastId] = e.viewportScroller.getScrollPosition(), e.lastSource = t.navigationTrigger, e.restoredId = t.restoredState ? t.restoredState.navigationId : 0) : t instanceof Wc && (e.lastId = t.id, e.scheduleScrollEvent(t, e.router.parseUrl(t.urlAfterRedirects).fragment))
                    })
                }, e.prototype.consumeScrollEvents = function () {
                    var e = this;
                    return this.router.events.subscribe(function (t) {
                        t instanceof ap && (t.position ? "top" === e.options.scrollPositionRestoration ? e.viewportScroller.scrollToPosition([0, 0]) : "enabled" === e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition(t.position) : t.anchor && "enabled" === e.options.anchorScrolling ? e.viewportScroller.scrollToAnchor(t.anchor) : "disabled" !== e.options.scrollPositionRestoration && e.viewportScroller.scrollToPosition([0, 0]))
                    })
                }, e.prototype.scheduleScrollEvent = function (e, t) {
                    this.router.triggerEvent(new ap(e, "popstate" === this.lastSource ? this.store[this.restoredId] : null, t))
                }, e.prototype.ngOnDestroy = function () {
                    this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                }, e
            }(), cd = new me("ROUTER_CONFIGURATION"), pd = new me("ROUTER_FORROOT_GUARD"),
            fd = [_s, {provide: Ap, useClass: Np}, {
                provide: Yf,
                useFactory: bd,
                deps: [On, Ap, nd, _s, We, Dn, Bt, Bf, cd, [Zf, new He], [Ff, new He]]
            }, nd, {provide: cf, useFactory: _d, deps: [Yf]}, {provide: Dn, useClass: Un}, ad, ud, ld, {
                provide: cd,
                useValue: {enableTracing: !1}
            }];

        function dd() {
            return new xn("Router", Yf)
        }

        var hd = function () {
            function e(e, t) {
            }

            var t;
            return t = e, e.forRoot = function (e, n) {
                return {
                    ngModule: t,
                    providers: [fd, md(e), {provide: pd, useFactory: yd, deps: [[Yf, new He, new ze]]}, {
                        provide: cd,
                        useValue: n || {}
                    }, {provide: ms, useFactory: vd, deps: [vs, [new Ue(bs), new He], cd]}, {
                        provide: sd,
                        useFactory: gd,
                        deps: [Yf, Ds, cd]
                    }, {provide: id, useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : ud}, {
                        provide: xn,
                        multi: !0,
                        useFactory: dd
                    }, [wd, {provide: Rt, multi: !0, useFactory: Cd, deps: [wd]}, {
                        provide: xd,
                        useFactory: Sd,
                        deps: [wd]
                    }, {provide: Ht, multi: !0, useExisting: xd}]]
                }
            }, e.forChild = function (e) {
                return {ngModule: t, providers: [md(e)]}
            }, t = l([u(0, He()), u(0, Ue(pd)), u(1, He())], e)
        }();

        function gd(e, t, n) {
            return n.scrollOffset && t.setOffset(n.scrollOffset), new sd(e, t, n)
        }

        function vd(e, t, n) {
            return void 0 === n && (n = {}), n.useHash ? new Cs(e, t) : new Ss(e, t)
        }

        function yd(e) {
            if (e) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
            return "guarded"
        }

        function md(e) {
            return [{provide: xe, multi: !0, useValue: e}, {provide: Bf, multi: !0, useValue: e}]
        }

        function bd(e, t, n, r, o, i, l, u, a, s, c) {
            void 0 === a && (a = {});
            var p = new Yf(null, t, n, r, o, i, l, _p(u));
            if (s && (p.urlHandlingStrategy = s), c && (p.routeReuseStrategy = c), a.errorHandler && (p.errorHandler = a.errorHandler), a.malformedUriErrorHandler && (p.malformedUriErrorHandler = a.malformedUriErrorHandler), a.enableTracing) {
                var f = Vs();
                p.events.subscribe(function (e) {
                    f.logGroup("Router Event: " + e.constructor.name), f.log(e.toString()), f.log(e), f.logGroupEnd()
                })
            }
            return a.onSameUrlNavigation && (p.onSameUrlNavigation = a.onSameUrlNavigation), a.paramsInheritanceStrategy && (p.paramsInheritanceStrategy = a.paramsInheritanceStrategy), a.urlUpdateStrategy && (p.urlUpdateStrategy = a.urlUpdateStrategy), a.relativeLinkResolution && (p.relativeLinkResolution = a.relativeLinkResolution), p
        }

        function _d(e) {
            return e.routerState.root
        }

        var wd = function () {
            function e(e) {
                this.injector = e, this.initNavigation = !1, this.resultOfPreactivationDone = new ae
            }

            return e.prototype.appInitializer = function () {
                var e = this;
                return this.injector.get(ys, Promise.resolve(null)).then(function () {
                    var t = null, n = new Promise(function (e) {
                        return t = e
                    }), r = e.injector.get(Yf), o = e.injector.get(cd);
                    if (e.isLegacyDisabled(o) || e.isLegacyEnabled(o)) t(!0); else if ("disabled" === o.initialNavigation) r.setUpLocationChangeListener(), t(!0); else {
                        if ("enabled" !== o.initialNavigation) throw new Error("Invalid initialNavigation options: '" + o.initialNavigation + "'");
                        r.hooks.afterPreactivation = function () {
                            return e.initNavigation ? ja(null) : (e.initNavigation = !0, t(!0), e.resultOfPreactivationDone)
                        }, r.initialNavigation()
                    }
                    return n
                })
            }, e.prototype.bootstrapListener = function (e) {
                var t = this.injector.get(cd), n = this.injector.get(ad), r = this.injector.get(sd),
                    o = this.injector.get(Yf), i = this.injector.get(On);
                e === i.components[0] && (this.isLegacyEnabled(t) ? o.initialNavigation() : this.isLegacyDisabled(t) && o.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), o.resetRootComponentType(i.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
            }, e.prototype.isLegacyEnabled = function (e) {
                return "legacy_enabled" === e.initialNavigation || !0 === e.initialNavigation || void 0 === e.initialNavigation
            }, e.prototype.isLegacyDisabled = function (e) {
                return "legacy_disabled" === e.initialNavigation || !1 === e.initialNavigation
            }, e
        }();

        function Cd(e) {
            return e.appInitializer.bind(e)
        }

        function Sd(e) {
            return e.bootstrapListener.bind(e)
        }

        var xd = new me("Router Initializer"), Ed = function () {
            function e() {
            }

            return Object.defineProperty(e, "defaultEasingLogic", {
                get: function () {
                    return e._easingLogic
                }, set: function (t) {
                    e._easingLogic = t
                }, enumerable: !0, configurable: !0
            }), e._interval = 10, e._minScrollDistance = 2, e._defaultNamespace = "default", e.defaultIsVerticalScrolling = !0, e._logLevel = 1, e.defaultDuration = 1250, e.defaultScrollOffset = 0, e.defaultAdvancedInlineOffsetCalculation = !1, e._interruptEvents = ["mousedown", "wheel", "DOMMouseScroll", "mousewheel", "keyup", "touchmove"], e._interruptKeys = [33, 34, 35, 36, 38, 40], e.defaultInterruptible = !0, e._easingLogic = {
                ease: function (e, t, n, r) {
                    return n * e / r + t
                }
            }, e
        }(), kd = function () {
            function e() {
            }

            return e.isUndefinedOrNull = function (e) {
                return void 0 === e || void 0 === e || null === e
            }, e.extractElementPosition = function (t, n) {
                var r = t.body, o = t.documentElement,
                    i = t.defaultView && t.defaultView.pageYOffset || o.scrollTop || r.scrollTop,
                    l = t.defaultView && t.defaultView.pageXOffset || o.scrollLeft || r.scrollLeft,
                    u = o.clientTop || r.clientTop || 0, a = o.clientLeft || r.clientLeft || 0;
                if (e.isUndefinedOrNull(n)) return {top: i, left: l};
                var s = n.getBoundingClientRect(), c = s.left + l - a;
                return {top: Math.round(s.top + i - u), left: Math.round(c)}
            }, e
        }(), Pd = function () {
            function e() {
                var t = this;
                this.runningInstances = [], this.onInterrupted = {
                    report: function (e, n) {
                        if (n.interruptible) {
                            var r = !0;
                            "keyup" === e.type ? -1 === Ed._interruptKeys.indexOf(e.keyCode) && (r = !1) : "mousedown" === e.type && (n.scrollingViews.some(function (t) {
                                return t.contains(e.target)
                            }) || (r = !1)), r && t.stopAll(n.namespace)
                        }
                    }
                }, e.instanceCounter > 0 && (Ed._logLevel >= 2 || Ed._logLevel >= 1 && Sn()) && console.warn("An instance of PageScrollService already exists, usually including one provider should be enough, so double check."), e.instanceCounter++
            }

            return e.prototype.stopInternal = function (e, t) {
                var n = this.runningInstances.indexOf(t);
                return n >= 0 && this.runningInstances.splice(n, 1), t.interruptListenersAttached && t.detachInterruptListeners(), !!t.timer && (clearInterval(t.timer), t.timer = void 0, t.fireEvent(!e), !0)
            }, e.prototype.start = function (e) {
                var t = this;
                if (this.stopAll(e.namespace), null !== e.scrollingViews && 0 !== e.scrollingViews.length) {
                    var n = !1;
                    e.startScrollPosition = 0, e.scrollingViews.forEach(function (t) {
                        if (!kd.isUndefinedOrNull(t)) {
                            var r = e.getScrollPropertyValue(t);
                            !n && r && (e.startScrollPosition = r, n = !0)
                        }
                    });
                    var r = e.getCurrentOffset(), o = e.extractScrollTargetPosition();
                    if (e.targetScrollPosition = Math.round((e.verticalScrolling ? o.top : o.left) - r), e.distanceToScroll = e.targetScrollPosition - e.startScrollPosition, isNaN(e.distanceToScroll)) return (Ed._logLevel >= 2 || Ed._logLevel >= 1 && Sn()) && console.log("Scrolling not possible, as we can't find the specified target"), void e.fireEvent(!1);
                    var i = Math.abs(e.distanceToScroll) < Ed._minScrollDistance;
                    if (e.executionDuration = e.duration, !kd.isUndefinedOrNull(e.speed) && kd.isUndefinedOrNull(e.duration) && (e.executionDuration = Math.abs(e.distanceToScroll) / e.speed * 1e3), i || e.executionDuration <= Ed._interval) return (Ed._logLevel >= 2 || Ed._logLevel >= 1 && Sn()) && (i ? console.log("Scrolling not possible, as we can't get any closer to the destination") : console.log("Scroll duration shorter that interval length, jumping to target")), e.setScrollPosition(e.targetScrollPosition), void e.fireEvent(!0);
                    (e.interruptible || kd.isUndefinedOrNull(e.interruptible) && Ed.defaultInterruptible) && e.attachInterruptListeners(this.onInterrupted), e.startTime = (new Date).getTime(), e.endTime = e.startTime + e.executionDuration, e.timer = setInterval(function (e) {
                        var n, r = (new Date).getTime(), o = !1;
                        e.endTime <= r ? (n = e.targetScrollPosition, o = !0) : n = Math.round(e.easingLogic.ease(r - e.startTime, e.startScrollPosition, e.distanceToScroll, e.executionDuration)), e.setScrollPosition(n) || (o = !0), o && t.stopInternal(!1, e)
                    }, Ed._interval, e), this.runningInstances.push(e)
                } else (Ed._logLevel >= 2 || Ed._logLevel >= 1 && Sn()) && console.warn("No scrollingViews specified, this ngx-page-scroll does not know which DOM elements to scroll")
            }, e.prototype.stopAll = function (e) {
                if (this.runningInstances.length > 0) {
                    for (var t = !1, n = 0; n < this.runningInstances.length; ++n) {
                        var r = this.runningInstances[n];
                        (kd.isUndefinedOrNull(e) || 0 === e.length || r.namespace === e) && (t = !0, this.stopInternal(!0, r), n--)
                    }
                    return t
                }
                return !1
            }, e.prototype.stop = function (e) {
                return this.stopInternal(!0, e)
            }, e.instanceCounter = 0, e
        }();

        function Td(e) {
            return e || new Pd
        }

        new He, new ze;
        var Od = function () {
            function e(e, t) {
                this._namespace = Ed._defaultNamespace, this._verticalScrolling = Ed.defaultIsVerticalScrolling, this._offset = Ed.defaultScrollOffset, this._duration = Ed.defaultDuration, this._easingLogic = Ed.defaultEasingLogic, this._interruptible = Ed.defaultInterruptible, this._advancedInlineOffsetCalculation = Ed.defaultAdvancedInlineOffsetCalculation, this._pageScrollFinish = new an, this._startScrollPosition = 0, this._interruptListenersAttached = !1, this._timer = null, this._namespace = e, this.document = t
            }

            return e.simpleInstance = function (t, n, r) {
                return e.newInstance({document: t, scrollTarget: n, namespace: r})
            }, e.newInstance = function (t) {
                (kd.isUndefinedOrNull(t.namespace) || t.namespace.length <= 0) && (t.namespace = Ed._defaultNamespace);
                var n = new e(t.namespace, document);
                return kd.isUndefinedOrNull(t.scrollingViews) || 0 === t.scrollingViews.length ? (n._isInlineScrolling = !1, n._scrollingViews = [document.documentElement, document.body, document.body.parentNode]) : (n._isInlineScrolling = !0, n._scrollingViews = t.scrollingViews), n._scrollTarget = t.scrollTarget, kd.isUndefinedOrNull(t.verticalScrolling) || (n._verticalScrolling = t.verticalScrolling), kd.isUndefinedOrNull(t.pageScrollOffset) || (n._offset = t.pageScrollOffset), kd.isUndefinedOrNull(t.pageScrollEasingLogic) || (n._easingLogic = t.pageScrollEasingLogic), kd.isUndefinedOrNull(t.pageScrollDuration) && !kd.isUndefinedOrNull(t.pageScrollSpeed) ? (n._speed = t.pageScrollSpeed, n._duration = void 0) : kd.isUndefinedOrNull(t.pageScrollDuration) || (n._duration = t.pageScrollDuration), kd.isUndefinedOrNull(t.pageScrollFinishListener) || (n._pageScrollFinish = t.pageScrollFinishListener), n._interruptible = t.pageScrollInterruptible || kd.isUndefinedOrNull(t.pageScrollInterruptible) && Ed.defaultInterruptible, n._advancedInlineOffsetCalculation = t.advancedInlineOffsetCalculation || kd.isUndefinedOrNull(t.advancedInlineOffsetCalculation) && Ed.defaultAdvancedInlineOffsetCalculation, n
            }, e.prototype.getScrollPropertyValue = function (e) {
                return this.verticalScrolling ? e.scrollTop : e.scrollLeft
            }, e.prototype.extractScrollTargetPosition = function () {
                var e;
                if ("string" == typeof this._scrollTarget) {
                    var t = this._scrollTarget;
                    e = null !== t.match(/^#[^\s]+$/g) ? this.document.getElementById(t.substr(1)) : this.document.querySelector(t)
                } else e = this._scrollTarget;
                if (null === e || void 0 === e) return {top: NaN, left: NaN};
                if (this._isInlineScrolling) {
                    var n = {top: e.offsetTop, left: e.offsetLeft};
                    if (this._advancedInlineOffsetCalculation && 1 === this.scrollingViews.length) {
                        for (var r = {
                            top: 0,
                            left: 0
                        }, o = e.ownerDocument.defaultView, i = !1, l = e.parentElement; !i && !kd.isUndefinedOrNull(l);) "relative" === o.getComputedStyle(l).getPropertyValue("position") && (r.top += l.offsetTop, r.left += l.offsetLeft), i = (l = l.parentElement) === this.scrollingViews[0];
                        i ? (n.top += r.top, n.left += r.left) : (Ed._logLevel >= 2 || Ed._logLevel >= 1 && Sn()) && console.warn("Unable to find nested scrolling targets parent!")
                    }
                    return n
                }
                return kd.extractElementPosition(this.document, e)
            }, e.prototype.getCurrentOffset = function () {
                return this._offset
            }, e.prototype.setScrollPosition = function (e) {
                var t = this;
                return Ed._logLevel >= 5 && Sn() && console.warn("Scroll Position: " + e), this.scrollingViews.reduce(function (n, r) {
                    var o = t.getScrollPropertyValue(r);
                    if (r && !kd.isUndefinedOrNull(o)) {
                        var i = Math.abs(o - e), l = i < Ed._minScrollDistance;
                        if (t.verticalScrolling ? r.scrollTop = e : r.scrollLeft = e, l || i > Math.abs(t.getScrollPropertyValue(r) - e)) return !0
                    }
                    return n
                }, !1)
            }, e.prototype.fireEvent = function (e) {
                this._pageScrollFinish && this._pageScrollFinish.emit(e)
            }, e.prototype.attachInterruptListeners = function (e) {
                var t = this;
                this._interruptListenersAttached && this.detachInterruptListeners(), this._interruptListener = function (n) {
                    e.report(n, t)
                }, Ed._interruptEvents.forEach(function (e) {
                    return t.document.body.addEventListener(e, t._interruptListener)
                }), this._interruptListenersAttached = !0
            }, e.prototype.detachInterruptListeners = function () {
                var e = this;
                Ed._interruptEvents.forEach(function (t) {
                    return e.document.body.removeEventListener(t, e._interruptListener)
                }), this._interruptListenersAttached = !1
            }, Object.defineProperty(e.prototype, "namespace", {
                get: function () {
                    return this._namespace
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "scrollTarget", {
                get: function () {
                    return this._scrollTarget
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "verticalScrolling", {
                get: function () {
                    return this._verticalScrolling
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "scrollingViews", {
                get: function () {
                    return this._scrollingViews
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "startScrollPosition", {
                get: function () {
                    return this._startScrollPosition
                }, set: function (e) {
                    this._startScrollPosition = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "targetScrollPosition", {
                get: function () {
                    return this._targetScrollPosition
                }, set: function (e) {
                    this._targetScrollPosition = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "distanceToScroll", {
                get: function () {
                    return this._distanceToScroll
                }, set: function (e) {
                    this._distanceToScroll = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "executionDuration", {
                get: function () {
                    return this._executionDuration
                }, set: function (e) {
                    this._executionDuration = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "duration", {
                get: function () {
                    return this._duration
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "speed", {
                get: function () {
                    return this._speed
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "easingLogic", {
                get: function () {
                    return this._easingLogic
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "interruptible", {
                get: function () {
                    return this._interruptible
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "startTime", {
                get: function () {
                    return this._startTime
                }, set: function (e) {
                    this._startTime = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "endTime", {
                get: function () {
                    return this._endTime
                }, set: function (e) {
                    this._endTime = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "timer", {
                get: function () {
                    return this._timer
                }, set: function (e) {
                    this._timer = e
                }, enumerable: !0, configurable: !0
            }), Object.defineProperty(e.prototype, "interruptListenersAttached", {
                get: function () {
                    return this._interruptListenersAttached
                }, enumerable: !0, configurable: !0
            }), e
        }(), Id = function () {
            function e(e, t, n) {
                this.pageScrollService = e, this.router = t, this.pageScrollTarget = null, this.pageScrollHorizontal = null, this.pageScrollOffset = null, this.pageScrollDuration = null, this.pageScrollSpeed = null, this.pageScrollEasing = null, this.pageScrollAdjustHash = !1, this.pageScroll = null, this.pageScrollFinish = new an, this.document = n
            }

            return e.prototype.ngOnChanges = function (e) {
                this.pageScrollInstance = void 0
            }, e.prototype.ngOnDestroy = function () {
                this.pageScrollInstance && this.pageScrollService.stop(this.pageScrollInstance)
            }, e.prototype.generatePageScrollInstance = function () {
                return kd.isUndefinedOrNull(this.pageScrollInstance) && (this.pageScrollInstance = Od.newInstance({
                    document: this.document,
                    scrollTarget: this.pageScrollTarget || this.href,
                    scrollingViews: null,
                    namespace: this.pageScroll,
                    verticalScrolling: !this.pageScrollHorizontal,
                    pageScrollOffset: this.pageScrollOffset,
                    pageScrollInterruptible: this.pageScrollInterruptible,
                    pageScrollEasingLogic: this.pageScrollEasing,
                    pageScrollDuration: this.pageScrollDuration,
                    pageScrollSpeed: this.pageScrollSpeed,
                    pageScrollFinishListener: this.pageScrollFinish
                })), this.pageScrollInstance
            }, e.prototype.pushRouterState = function () {
                this.pageScrollAdjustHash && "string" == typeof this.pageScrollInstance.scrollTarget && "#" === this.pageScrollInstance.scrollTarget.substr(0, 1) && this.router.navigate([], {
                    fragment: this.pageScrollInstance.scrollTarget.substr(1),
                    preserveQueryParams: !0
                })
            }, e.prototype.scroll = function () {
                var e = this.generatePageScrollInstance();
                this.pushRouterState(), this.pageScrollService.start(e)
            }, e.prototype.handleClick = function (e) {
                var t, n = this;
                if (this.routerLink && null !== this.router && void 0 !== this.router && (t = "string" == typeof this.routerLink ? this.router.parseUrl(this.routerLink) : this.router.createUrlTree(this.routerLink), !this.router.isActive(t, !0))) {
                    var r = this.router.events.subscribe(function (e) {
                        e instanceof Wc ? (r.unsubscribe(), setTimeout(function () {
                            n.scroll()
                        }, 0)) : (e instanceof Yc || e instanceof Kc) && r.unsubscribe()
                    });
                    return !1
                }
                return this.scroll(), !1
            }, e
        }(), Ad = function () {
        }, Nd = function () {
            return function () {
                Ed.defaultScrollOffset = 100, Ed.defaultDuration = 700
            }
        }(), Rd = uo({encapsulation: 2, styles: [], data: {}});

        function Md(e) {
            return Zi(0, [(e()(), Mo(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), Ci(1, 212992, null, 0, rd, [nd, zn, $t, [8, null], Bn], null, null)], function (e, t) {
                e(t, 1, 0)
            }, null)
        }

        var Dd = $o("ng-component", sp, function (e) {
            return Zi(0, [(e()(), Mo(0, 0, null, null, 1, "ng-component", [], null, null, null, Md, Rd)), Ci(1, 49152, null, 0, sp, [], null, null)], null, null)
        }, {}, {}, []), jd = function () {
            function e() {
                this.onTop = !0, this.menuOpen = !1
            }

            return e.prototype.doSomething = function (e) {
                this.onTop = !0, this.onTop = window.pageYOffset < 150
            }, e.prototype.ngOnInit = function () {
            }, e.prototype.abrirMenu = function () {
                this.menuOpen = !this.menuOpen
            }, e.prototype.scrollMenu = function () {
                this.menuOpen = !1
            }, e
        }(), Ld = uo({
            encapsulation: 0,
            styles: [[".header[_ngcontent-%COMP%]{padding:16px 0}.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border-right:1px solid rgba(255,255,255,.25)}header[_ngcontent-%COMP%]{position:fixed;width:100%;z-index:100;border-bottom:1px solid rgba(255,255,255,.25)}header.active[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.7)}nav[_ngcontent-%COMP%]{width:770px;display:inline-block;vertical-align:middle}header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;margin-left:150px}header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline;float:left}header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-align:center;padding:0 12px;text-decoration:none;font-family:'Poiret One',cursive;color:#fff;font-size:24px}.logonav[_ngcontent-%COMP%]{width:150px;display:inline-block;padding:10px 0;vertical-align:middle;margin-left:35px}.ico-redes[_ngcontent-%COMP%]{display:inline-block;padding-left:18px}.redes_sociales[_ngcontent-%COMP%]{width:20px;display:inline-block;padding:0 5px;vertical-align:middle}.burguer[_ngcontent-%COMP%]{display:none;transition:.5s}@media only screen and (max-width:1115px){header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0}.ico-redes[_ngcontent-%COMP%]{padding:0}nav[_ngcontent-%COMP%]{width:auto}}@media only screen and (max-width:850px){.header[_ngcontent-%COMP%]{padding:8px 0}logonav[_ngcontent-%COMP%]{margin-left:15px}nav[_ngcontent-%COMP%]{display:none;transition:.5s}nav.active[_ngcontent-%COMP%]{display:block;height:calc(100vh - 111px)}nav.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%}nav.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;float:none}nav.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px 0}.ico-redes[_ngcontent-%COMP%]{margin:auto;display:block;width:60px}.burguer[_ngcontent-%COMP%]{display:block;position:absolute;height:45px;right:15px;top:20px;width:45px;transition:.5s}.burguer.active[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin:16px 0 0}.burguer.active[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]{display:none}.burguer.active[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);margin:-5px 0 0}.burguer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;background-color:#fff;height:5px;border-radius:3px;margin:7px 0;display:block;transition:.5s}}"]],
            data: {}
        });

        function Vd(e) {
            return Zi(0, [(e()(), Mo(0, 0, null, null, 45, "header", [], null, null, null, null, null)), Ci(1, 278528, null, 0, As, [cr, pr, Mn, Rn], {ngClass: [0, "ngClass"]}, null), Fi(2, {active: 0}), (e()(), Mo(3, 0, null, null, 42, "div", [["class", "content"]], null, null, null, null, null)), (e()(), Mo(4, 0, null, null, 41, "div", [["class", "header"], ["id", "mainmenu"]], null, null, null, null, null)), (e()(), Mo(5, 0, null, null, 0, "img", [["class", "logonav"], ["src", "../../assets/img/logo-versatti.png"]], null, null, null, null, null)), (e()(), Mo(6, 0, null, null, 28, "nav", [], null, null, null, null, null)), Ci(7, 278528, null, 0, As, [cr, pr, Mn, Rn], {ngClass: [0, "ngClass"]}, null), Fi(8, {active: 0}), (e()(), Mo(9, 0, null, null, 25, "ul", [], null, null, null, null, null)), (e()(), Mo(10, 0, null, null, 4, "li", [], null, null, null, null, null)), (e()(), Mo(11, 0, null, null, 3, "a", [["class", "lnk-menu"], ["fragment", "section-1"], ["href", "#section-1"], ["pageScroll", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (e, t, n) {
                var r = !0, o = e.component;
                return "click" === t && (r = !1 !== si(e, 12).handleClick(n) && r), "click" === t && (r = !1 !== si(e, 13).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), "click" === t && (r = !1 !== o.scrollMenu() && r), r
            }, null, null)), Ci(12, 671744, null, 0, Id, [Pd, [2, Yf], Rs], {
                routerLink: [0, "routerLink"],
                href: [1, "href"],
                pageScroll: [2, "pageScroll"]
            }, null), Ci(13, 671744, null, 0, Xf, [Yf, cf, ms], {
                fragment: [0, "fragment"],
                routerLink: [1, "routerLink"]
            }, null), (e()(), zi(-1, null, ["Promociones"])), (e()(), Mo(15, 0, null, null, 4, "li", [], null, null, null, null, null)), (e()(), Mo(16, 0, null, null, 3, "a", [["class", "lnk-menu"], ["fragment", "section-2"], ["href", "#section-2"], ["pageScroll", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (e, t, n) {
                var r = !0, o = e.component;
                return "click" === t && (r = !1 !== si(e, 17).handleClick(n) && r), "click" === t && (r = !1 !== si(e, 18).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), "click" === t && (r = !1 !== o.scrollMenu() && r), r
            }, null, null)), Ci(17, 671744, null, 0, Id, [Pd, [2, Yf], Rs], {
                routerLink: [0, "routerLink"],
                href: [1, "href"],
                pageScroll: [2, "pageScroll"]
            }, null), Ci(18, 671744, null, 0, Xf, [Yf, cf, ms], {
                fragment: [0, "fragment"],
                routerLink: [1, "routerLink"]
            }, null), (e()(), zi(-1, null, ["Servicios"])), (e()(), Mo(20, 0, null, null, 4, "li", [], null, null, null, null, null)), (e()(), Mo(21, 0, null, null, 3, "a", [["class", "lnk-menu"], ["fragment", "section-3"], ["href", "#section-3"], ["pageScroll", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (e, t, n) {
                var r = !0, o = e.component;
                return "click" === t && (r = !1 !== si(e, 22).handleClick(n) && r), "click" === t && (r = !1 !== si(e, 23).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), "click" === t && (r = !1 !== o.scrollMenu() && r), r
            }, null, null)), Ci(22, 671744, null, 0, Id, [Pd, [2, Yf], Rs], {
                routerLink: [0, "routerLink"],
                href: [1, "href"],
                pageScroll: [2, "pageScroll"]
            }, null), Ci(23, 671744, null, 0, Xf, [Yf, cf, ms], {
                fragment: [0, "fragment"],
                routerLink: [1, "routerLink"]
            }, null), (e()(), zi(-1, null, ["Equipo"])), (e()(), Mo(25, 0, null, null, 4, "li", [], null, null, null, null, null)), (e()(), Mo(26, 0, null, null, 3, "a", [["class", "lnk-menu"], ["fragment", "section-4"], ["href", "#section-4"], ["pageScroll", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (e, t, n) {
                var r = !0, o = e.component;
                return "click" === t && (r = !1 !== si(e, 27).handleClick(n) && r), "click" === t && (r = !1 !== si(e, 28).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), "click" === t && (r = !1 !== o.scrollMenu() && r), r
            }, null, null)), Ci(27, 671744, null, 0, Id, [Pd, [2, Yf], Rs], {
                routerLink: [0, "routerLink"],
                href: [1, "href"],
                pageScroll: [2, "pageScroll"]
            }, null), Ci(28, 671744, null, 0, Xf, [Yf, cf, ms], {
                fragment: [0, "fragment"],
                routerLink: [1, "routerLink"]
            }, null), (e()(), zi(-1, null, ["Nosotros"])), (e()(), Mo(30, 0, null, null, 4, "li", [], null, null, null, null, null)), (e()(), Mo(31, 0, null, null, 3, "a", [["class", "lnk-menu"], ["fragment", "section-5"], ["href", "#section-5"], ["pageScroll", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (e, t, n) {
                var r = !0, o = e.component;
                return "click" === t && (r = !1 !== si(e, 32).handleClick(n) && r), "click" === t && (r = !1 !== si(e, 33).onClick(n.button, n.ctrlKey, n.metaKey, n.shiftKey) && r), "click" === t && (r = !1 !== o.scrollMenu() && r), r
            }, null, null)), Ci(32, 671744, null, 0, Id, [Pd, [2, Yf], Rs], {
                routerLink: [0, "routerLink"],
                href: [1, "href"],
                pageScroll: [2, "pageScroll"]
            }, null), Ci(33, 671744, null, 0, Xf, [Yf, cf, ms], {
                fragment: [0, "fragment"],
                routerLink: [1, "routerLink"]
            }, null), (e()(), zi(-1, null, ["Cont\xe1ctanos"])), (e()(), Mo(35, 0, null, null, 4, "div", [["class", "ico-redes"]], null, null, null, null, null)), (e()(), Mo(36, 0, null, null, 1, "a", [["href", "https://www.facebook.com/VersattiSalonSpa/"], ["target", "_blank"]], null, null, null, null, null)), (e()(), Mo(37, 0, null, null, 0, "img", [["class", "redes_sociales"], ["src", "../../assets/img/fb.png"]], null, null, null, null, null)), (e()(), Mo(38, 0, null, null, 1, "a", [["href", "https://www.instagram.com/versattisalon/"], ["target", "_blank"]], null, null, null, null, null)), (e()(), Mo(39, 0, null, null, 0, "img", [["class", "redes_sociales"], ["src", "../../assets/img/inst.png"]], null, null, null, null, null)), (e()(), Mo(40, 0, null, null, 5, "div", [["class", "burguer "]], null, [[null, "click"]], function (e, t, n) {
                var r = !0;
                return "click" === t && (r = !1 !== e.component.abrirMenu() && r), r
            }, null, null)), Ci(41, 278528, null, 0, As, [cr, pr, Mn, Rn], {
                klass: [0, "klass"],
                ngClass: [1, "ngClass"]
            }, null), Fi(42, {active: 0}), (e()(), Mo(43, 0, null, null, 0, "span", [["class", "one"]], null, null, null, null, null)), (e()(), Mo(44, 0, null, null, 0, "span", [["class", "two"]], null, null, null, null, null)), (e()(), Mo(45, 0, null, null, 0, "span", [["class", "three"]], null, null, null, null, null))], function (e, t) {
                var n = t.component;
                e(t, 1, 0, e(t, 2, 0, !n.onTop)), e(t, 7, 0, e(t, 8, 0, n.menuOpen)), e(t, 12, 0, "/", "#section-1", ""), e(t, 13, 0, "section-1", "/"), e(t, 17, 0, "/", "#section-2", ""), e(t, 18, 0, "section-2", "/"), e(t, 22, 0, "/", "#section-3", ""), e(t, 23, 0, "section-3", "/"), e(t, 27, 0, "/", "#section-4", ""), e(t, 28, 0, "section-4", "/"), e(t, 32, 0, "/", "#section-5", ""), e(t, 33, 0, "section-5", "/"), e(t, 41, 0, "burguer ", e(t, 42, 0, n.menuOpen))
            }, function (e, t) {
                e(t, 11, 0, si(t, 13).target, si(t, 13).href), e(t, 16, 0, si(t, 18).target, si(t, 18).href), e(t, 21, 0, si(t, 23).target, si(t, 23).href), e(t, 26, 0, si(t, 28).target, si(t, 28).href), e(t, 31, 0, si(t, 33).target, si(t, 33).href)
            })
        }

        var Ud = function () {
            function e() {
            }

            return e.prototype.ngOnInit = function () {
            }, e
        }(), Hd = uo({
            encapsulation: 0,
            styles: [[".carrusel[_ngcontent-%COMP%]{width:100%;position:relative;overflow:hidden}.img_slider[_ngcontent-%COMP%]{width:100%}"]],
            data: {}
        });

        function Fd(e) {
            return Zi(0, [(e()(), Mo(0, 0, null, null, 7, "section", [["class", "carrusel"], ["id", "section-1"]], null, null, null, null, null)), (e()(), Mo(1, 0, null, null, 6, "div", [["class", "carrusel-1"]], null, null, null, null, null)), (e()(), Mo(2, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), Mo(3, 0, null, null, 0, "img", [["class", "img_slider"], ["src", "../../assets/img/img-slider.png"]], null, null, null, null, null)), (e()(), Mo(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), Mo(5, 0, null, null, 0, "img", [["class", "img_slider"], ["src", "../../assets/img/img-slider.png"]], null, null, null, null, null)), (e()(), Mo(6, 0, null, null, 1, "div", [], null, null, null, null, null)), (e()(), Mo(7, 0, null, null, 0, "img", [["class", "img_slider"], ["src", "../../assets/img/img-slider.png"]], null, null, null, null, null))], null, null)
        }

        var zd = function () {
            function e() {
            }

            return e.prototype.ngOnInit = function () {
            }, e
        }(), Bd = uo({
            encapsulation: 0,
            styles: [[".servicios[_ngcontent-%COMP%]{margin:auto;display:flex;padding:50px 0 125px}.cont-servicios[_ngcontent-%COMP%]{display:flex;margin-top:57px}.servicio[_ngcontent-%COMP%]{width:33.3%;display:block}.caja_serv[_ngcontent-%COMP%]{width:270px;height:350px;padding:15px 7px;font-family:Champagne-Limousines-Bold;display:block;margin:0 auto;align-content:center;transition:.3s}.caja_serv_posterior[_ngcontent-%COMP%]{width:270px;height:350px;padding:15px 7px;display:none;margin:0 auto}.text_caja_posterior[_ngcontent-%COMP%]{font-family:Champagne-Limousines-Bold;font-size:30px}.text_caja_posterior_precio[_ngcontent-%COMP%]{font-family:Blacksword;color:#c09;font-size:30px;font-weight:lighter}.text_caja_posterior_precio[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Champagne-Limousines-Bold}.lista_servicios[_ngcontent-%COMP%]{padding-left:20px;margin-top:20px}.list_ser[_ngcontent-%COMP%]{font-family:Champagne-Limousines-Bold;font-size:18px;line-height:25px}.servicio[_ngcontent-%COMP%]:hover   .caja_serv[_ngcontent-%COMP%]{display:none}.servicio[_ngcontent-%COMP%]:hover   .caja_serv_posterior[_ngcontent-%COMP%]{display:block}.caja_serv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:auto}.cont_img[_ngcontent-%COMP%]{display:block;margin:auto;height:112px;width:270px}.caja_serv[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;font-family:Blacksword;font-size:42px;font-weight:lighter;padding-top:10px}.caja_serv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:24px}@media only screen and (max-width:936px){.cont-servicios[_ngcontent-%COMP%]{display:block}.servicio[_ngcontent-%COMP%]{width:100%}.caja_serv[_ngcontent-%COMP%]{display:block;margin:auto}}"]],
            data: {}
        });

        function qd(e) {
            return Zi(0, [(e()(), Mo(0, 0, null, null, 101, "section", [["class", "servicios"], ["id", "section-2"]], null, null, null, null, null)), (e()(), Mo(1, 0, null, null, 100, "div", [["class", "centrado-vertical"]], null, null, null, null, null)), (e()(), Mo(2, 0, null, null, 99, "div", [["class", "content"]], null, null, null, null, null)), (e()(), Mo(3, 0, null, null, 1, "h3", [["class", "titulo-corrido"]], null, null, null, null, null)), (e()(), zi(-1, null, ["nuestros"])), (e()(), Mo(5, 0, null, null, 1, "h2", [["class", "titulo-normal"]], null, null, null, null, null)), (e()(), zi(-1, null, ["servicios"])), (e()(), Mo(7, 0, null, null, 94, "div", [["class", "cont-servicios"]], null, null, null, null, null)), (e()(), Mo(8, 0, null, null, 31, "div", [["class", "servicio"]], null, null, null, null, null)), (e()(), Mo(9, 0, null, null, 6, "div", [["class", "caja_serv"]], null, null, null, null, null)), (e()(), Mo(10, 0, null, null, 1, "div", [["class", "cont_img"]], null, null, null, null, null)), (e()(), Mo(11, 0, null, null, 0, "img", [["alt", "corte"], ["src", "../../assets/img/tijera.png"]], null, null, null, null, null)), (e()(), Mo(12, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Cabello"])), (e()(), Mo(14, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Si quieres cambiar tu estilo o simplemente mantener el cabello saludable, este es el mejor lugar que est\xe1s buscando."])), (e()(), Mo(16, 0, null, null, 23, "div", [["class", "caja_serv_posterior"]], null, null, null, null, null)), (e()(), Mo(17, 0, null, null, 1, "h4", [["class", "text_caja_posterior"]], null, null, null, null, null)), (e()(), zi(-1, null, ["CORTES DE CABELLO"])), (e()(), Mo(19, 0, null, null, 3, "h4", [["class", "text_caja_posterior_precio"]], null, null, null, null, null)), (e()(), zi(-1, null, ["desde "])), (e()(), Mo(21, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), zi(-1, null, ["S/. 50"])), (e()(), Mo(23, 0, null, null, 14, "ul", [["class", "lista_servicios"]], null, null, null, null, null)), (e()(), Mo(24, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["corte de cabello para ella"])), (e()(), Mo(26, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["corte de cabello para el"])), (e()(), Mo(28, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["peinados elaborados"])), (e()(), Mo(30, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["tintes con amoniaco"])), (e()(), Mo(32, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["mechas balayage o californianas"])), (e()(), Mo(34, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["tratamientos de nutrici\xf3n"])), (e()(), Mo(36, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["tratamiento reconstructiva"])), (e()(), Mo(38, 0, null, null, 1, "div", [["class", "boton_reserva"]], null, null, null, null, null)), (e()(), zi(-1, null, ["Reserva una cita"])), (e()(), Mo(40, 0, null, null, 31, "div", [["class", "servicio"]], null, null, null, null, null)), (e()(), Mo(41, 0, null, null, 6, "div", [["class", "caja_serv"]], null, null, null, null, null)), (e()(), Mo(42, 0, null, null, 1, "div", [["class", "cont_img"]], null, null, null, null, null)), (e()(), Mo(43, 0, null, null, 0, "img", [["alt", "coloracion"], ["src", "../../assets/img/manicure.png"]], null, null, null, null, null)), (e()(), Mo(44, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Belleza"])), (e()(), Mo(46, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Somos un sal\xf3n de servicio completo. Ofrecemos los servicios m\xe1s recientes y de la m\xe1s alta calidad para todos los miembros de su familia."])), (e()(), Mo(48, 0, null, null, 23, "div", [["class", "caja_serv_posterior"]], null, null, null, null, null)), (e()(), Mo(49, 0, null, null, 1, "h4", [["class", "text_caja_posterior"]], null, null, null, null, null)), (e()(), zi(-1, null, ["MAQUILLAJE"])), (e()(), Mo(51, 0, null, null, 3, "h4", [["class", "text_caja_posterior_precio"]], null, null, null, null, null)), (e()(), zi(-1, null, ["desde "])), (e()(), Mo(53, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), zi(-1, null, ["S/. 25"])), (e()(), Mo(55, 0, null, null, 14, "ul", [["class", "lista_servicios"]], null, null, null, null, null)), (e()(), Mo(56, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["manicure spa"])), (e()(), Mo(58, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["pedicure spa"])), (e()(), Mo(60, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["color gel"])), (e()(), Mo(62, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["maquillaje mac"])), (e()(), Mo(64, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["maquillaje mac premiun"])), (e()(), Mo(66, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["micropigmentacion de cejas"])), (e()(), Mo(68, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["extensi\xf3n de pesta\xf1as"])), (e()(), Mo(70, 0, null, null, 1, "div", [["class", "boton_reserva"]], null, null, null, null, null)), (e()(), zi(-1, null, ["Reserva una cita"])), (e()(), Mo(72, 0, null, null, 29, "div", [["class", "servicio"]], null, null, null, null, null)), (e()(), Mo(73, 0, null, null, 6, "div", [["class", "caja_serv"]], null, null, null, null, null)), (e()(), Mo(74, 0, null, null, 1, "div", [["class", "cont_img"]], null, null, null, null, null)), (e()(), Mo(75, 0, null, null, 0, "img", [["alt", "manicure"], ["src", "../../assets/img/tinte.png"]], null, null, null, null, null)), (e()(), Mo(76, 0, null, null, 1, "h4", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Bienestar"])), (e()(), Mo(78, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Ofrecemos una amplia variedad de servicios, centr\xe1ndonos en la est\xe9tica personal. Nuestros practicantes est\xe1n bien entrenados."])), (e()(), Mo(80, 0, null, null, 21, "div", [["class", "caja_serv_posterior"]], null, null, null, null, null)), (e()(), Mo(81, 0, null, null, 1, "h4", [["class", "text_caja_posterior"]], null, null, null, null, null)), (e()(), zi(-1, null, ["DEPILACI\xd3N"])), (e()(), Mo(83, 0, null, null, 3, "h4", [["class", "text_caja_posterior_precio"]], null, null, null, null, null)), (e()(), zi(-1, null, ["desde "])), (e()(), Mo(85, 0, null, null, 1, "span", [], null, null, null, null, null)), (e()(), zi(-1, null, ["S/. 30"])), (e()(), Mo(87, 0, null, null, 12, "ul", [["class", "lista_servicios"]], null, null, null, null, null)), (e()(), Mo(88, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["limpieza facial dermalogica"])), (e()(), Mo(90, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["limpieza facial dermalogica m\xe1s velo de col\xe1geno"])), (e()(), Mo(92, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["masaje relajante"])), (e()(), Mo(94, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["ampollas control ca\xedda"])), (e()(), Mo(96, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["depilaci\xf3n de rostro"])), (e()(), Mo(98, 0, null, null, 1, "li", [["class", "list_ser"]], null, null, null, null, null)), (e()(), zi(-1, null, ["depilaci\xf3n corpora"])), (e()(), Mo(100, 0, null, null, 1, "div", [["class", "boton_reserva"]], null, null, null, null, null)), (e()(), zi(-1, null, ["Reserva una cita"]))], null, null)
        }

        var Zd = function () {
            function e() {
            }

            return e.prototype.ngOnInit = function () {
            }, e
        }(), Qd = uo({
            encapsulation: 0,
            styles: [[".promociones[_ngcontent-%COMP%]{background-image:url(foto-salon.a5287928ca091c6d8d8e.png);background-repeat:no-repeat;background-size:cover;margin:auto;display:flex;padding:50px 0 125px}.promociones[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:auto;display:block;width:800px;text-align:center;color:#fff;font-family:'Open Sans',sans-serif;font-size:16px;font-weight:300;line-height:1.8em;letter-spacing:.3px}@media only screen and (max-width:936px){.promociones[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}}"]],
            data: {}
        });

        function Gd(e) {
            return Zi(0, [(e()(), Mo(0, 0, null, null, 10, "section", [["class", "promociones"], ["id", "section-3"]], null, null, null, null, null)), (e()(), Mo(1, 0, null, null, 9, "div", [["class", "centrado-vertical"]], null, null, null, null, null)), (e()(), Mo(2, 0, null, null, 8, "div", [["class", "content"]], null, null, null, null, null)), (e()(), Mo(3, 0, null, null, 1, "h3", [["class", "titulo-corrido"]], null, null, null, null, null)), (e()(), zi(-1, null, ["reserve su cita en l\xednea"])), (e()(), Mo(5, 0, null, null, 1, "h2", [["class", "titulo-normal-2"]], null, null, null, null, null)), (e()(), zi(-1, null, ["OBTEN HASTA UN 20% DE DESCUENTO"])), (e()(), Mo(7, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, [" Hacemos un descuento solo para aquellos clientes que hacen una cita, as\xed que ap\xfarate para hacer una cita con nuestros especialistas \xa1Ahorra hasta 20%!"])), (e()(), Mo(9, 0, null, null, 1, "div", [["class", "boton_reserva"]], null, null, null, null, null)), (e()(), zi(-1, null, ["Reserva una cita"]))], null, null)
        }

        var Wd = function () {
            function e() {
            }

            return e.prototype.ngOnInit = function () {
            }, e
        }(), Kd = uo({
            encapsulation: 0,
            styles: [[".bienvenidos[_ngcontent-%COMP%]{display:flex;padding:80px 0 125px}.con-video[_ngcontent-%COMP%]{display:flex}.descri-video[_ngcontent-%COMP%], .video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:598px;height:420px}.descri-video[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;margin:auto}.descri-video[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:auto;width:auto}.descri-video[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-top:20px;text-align:center;font-family:Champagne-Limousines-Bold;font-weight:lighter;font-size:20px;margin:0 38px}@media only screen and (max-width:1020px){.bienvenidos[_ngcontent-%COMP%]{padding:50px 0}.con-video[_ngcontent-%COMP%]{display:block}.video[_ngcontent-%COMP%]{width:100%}.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{margin:0 auto 20px;display:block}.descri-video[_ngcontent-%COMP%]{width:100%}}@media only screen and (max-width:598px){.descri-video[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90%;margin:auto}.video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:320px;height:260px}}"]],
            data: {}
        });

        function Yd(e) {
            return Zi(0, [(e()(), Mo(0, 0, null, null, 12, "section", [["class", "bienvenidos"], ["id", "section-4"]], null, null, null, null, null)), (e()(), Mo(1, 0, null, null, 11, "div", [["class", "centrado-vertical"]], null, null, null, null, null)), (e()(), Mo(2, 0, null, null, 10, "div", [["class", "content con-video"]], null, null, null, null, null)), (e()(), Mo(3, 0, null, null, 1, "div", [["class", "video"]], null, null, null, null, null)), (e()(), Mo(4, 0, null, null, 0, "iframe", [["allow", "autoplay; encrypted-media"], ["allowfullscreen", ""], ["frameborder", "0"], ["src", "https://www.youtube.com/embed/5M_hB8y8XZQ"]], null, null, null, null, null)), (e()(), Mo(5, 0, null, null, 7, "div", [["class", "descri-video"]], null, null, null, null, null)), (e()(), Mo(6, 0, null, null, 1, "h2", [["class", "titulo-corrido"]], null, null, null, null, null)), (e()(), zi(-1, null, ["bienvenido a"])), (e()(), Mo(8, 0, null, null, 0, "img", [["alt", ""], ["class", "logo"], ["src", "../../assets/img/logo-negro.png"]], null, null, null, null, null)), (e()(), Mo(9, 0, null, null, 3, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Valoramos a nuestros clientes y sabemos exactamente qu\xe9 es lo que m\xe1s se adapta a ellos y c\xf3mo implementar sus ideas m\xe1s creativas en la realidad para mejorar su apariencia natural."])), (e()(), Mo(11, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, ["\xa1Si\xe9ntase libre de expresarse a trav\xe9s de su apariencia confiando en nosotros!"]))], null, null)
        }

        var Jd = function () {
            function e() {
            }

            return e.prototype.ngOnInit = function () {
            }, e
        }(), $d = uo({
            encapsulation: 0,
            styles: [[".mapa[_ngcontent-%COMP%]{display:block;margin:auto;height:530px}.ubicacion[_ngcontent-%COMP%]{background:#000}.cont-datos[_ngcontent-%COMP%]{width:100%}.datos-ubicacion[_ngcontent-%COMP%]{background-color:#c09;padding:60px 5% 0;height:160px;justify-content:center}.direccion[_ngcontent-%COMP%]{display:inline-block;width:33%;padding:0 31px;box-sizing:border-box}.direccion[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 5px;vertical-align:top}.direccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;color:#fff;font-size:20px;font-weight:lighter;font-family:Champagne-Limousines-Bold;margin:0 10px}.mapa[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width:1120px){.datos-ubicacion[_ngcontent-%COMP%]{padding:60px 15px 0}.direccion[_ngcontent-%COMP%]{padding:0}.direccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:160px}}@media only screen and (max-width:812px){.direccion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:120px;font-size:17px}}@media only screen and (max-width:480px){.datos-ubicacion[_ngcontent-%COMP%]{padding:40px 10px 20px;height:auto}.direccion[_ngcontent-%COMP%]{display:block;margin:0 auto 20px;width:211px}.direccion[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.mapa[_ngcontent-%COMP%]{height:340px}}"]],
            data: {}
        });

        function Xd(e) {
            return Zi(0, [(e()(), Mo(0, 0, null, null, 66, "section", [["class", "ubicacion"]], null, null, null, null, null)), (e()(), Mo(1, 0, null, null, 32, "div", [["class", "centrado-vertical"]], null, null, null, null, null)), (e()(), Mo(2, 0, null, null, 31, "div", [["class", "cont-datos"]], null, null, null, null, null)), (e()(), Mo(3, 0, null, null, 30, "div", [["class", "datos-ubicacion"]], null, null, null, null, null)), (e()(), Mo(4, 0, null, null, 29, "div", [["class", "content"]], null, null, null, null, null)), (e()(), Mo(5, 0, null, null, 9, "div", [["class", "direccion"]], null, null, null, null, null)), (e()(), Mo(6, 0, null, null, 0, "img", [["src", "../../assets/img/place-holder.png"]], null, null, null, null, null)), (e()(), Mo(7, 0, null, null, 7, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Direcci\xf3n:"])), (e()(), Mo(9, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" Jr. Brigadier Mateo "])), (e()(), Mo(11, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" Pumacahua 2529 "])), (e()(), Mo(13, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" Lince, Lima"])), (e()(), Mo(15, 0, null, null, 8, "div", [["class", "direccion"]], null, null, null, null, null)), (e()(), Mo(16, 0, null, null, 0, "img", [["src", "../../assets/img/phone-call.png"]], null, null, null, null, null)), (e()(), Mo(17, 0, null, null, 6, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Tel\xe9fonos:"])), (e()(), Mo(19, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" (01) 472 0889"])), (e()(), Mo(21, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" 991 916 126"])), (e()(), Mo(23, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), Mo(24, 0, null, null, 9, "div", [["class", "direccion"]], null, null, null, null, null)), (e()(), Mo(25, 0, null, null, 0, "img", [["src", "../../assets/img/clock.png"]], null, null, null, null, null)), (e()(), Mo(26, 0, null, null, 7, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Horario de atenci\xf3n:"])), (e()(), Mo(28, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" lunes a s\xe1bado"])), (e()(), Mo(30, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" de 10:00 a.m."])), (e()(), Mo(32, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" a 8:00 p.m."])), (e()(), Mo(34, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["class", "mapa"], ["frameborder", "0"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.364943343865!2d-77.04500068509638!3d-12.087149991440429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85868ae6a35%3A0xbb61a7371183807a!2sVersatti!5e0!3m2!1ses!2spe!4v1530919659243"], ["style", "border:0"]], null, null, null, null, null)), (e()(), Mo(35, 0, null, null, 30, "div", [["class", "centrado-vertical"]], null, null, null, null, null)), (e()(), Mo(36, 0, null, null, 29, "div", [["class", "cont-datos"]], null, null, null, null, null)), (e()(), Mo(37, 0, null, null, 28, "div", [["class", "datos-ubicacion"]], null, null, null, null, null)), (e()(), Mo(38, 0, null, null, 27, "div", [["class", "content"]], null, null, null, null, null)), (e()(), Mo(39, 0, null, null, 7, "div", [["class", "direccion"]], null, null, null, null, null)), (e()(), Mo(40, 0, null, null, 0, "img", [["src", "../../assets/img/place-holder.png"]], null, null, null, null, null)), (e()(), Mo(41, 0, null, null, 5, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Direcci\xf3n:"])), (e()(), Mo(43, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" Jr. Gavilanes 167 "])), (e()(), Mo(45, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" San Isidro, Lima"])), (e()(), Mo(47, 0, null, null, 8, "div", [["class", "direccion"]], null, null, null, null, null)), (e()(), Mo(48, 0, null, null, 0, "img", [["src", "../../assets/img/phone-call.png"]], null, null, null, null, null)), (e()(), Mo(49, 0, null, null, 6, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Tel\xe9fonos:"])), (e()(), Mo(51, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" (01) 693 8086"])), (e()(), Mo(53, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" 991 916 126"])), (e()(), Mo(55, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), Mo(56, 0, null, null, 9, "div", [["class", "direccion"]], null, null, null, null, null)), (e()(), Mo(57, 0, null, null, 0, "img", [["src", "../../assets/img/clock.png"]], null, null, null, null, null)), (e()(), Mo(58, 0, null, null, 7, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Horario de atenci\xf3n:"])), (e()(), Mo(60, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" lunes a s\xe1bado"])), (e()(), Mo(62, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" de 10:00 a.m."])), (e()(), Mo(64, 0, null, null, 0, "br", [], null, null, null, null, null)), (e()(), zi(-1, null, [" a 8:00 p.m."])), (e()(), Mo(66, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["class", "mapa"], ["frameborder", "0"], ["src", "https://www.google.com/maps/embed/v1/place?q=Calle%20los%20gavilanes%20167%20san%20isidro&key=AIzaSyDF6P_VsDHZV7J_NM4zc96C8yzVWyRmFtw"], ["style", "border:0"]], null, null, null, null, null))], null, null)
        }

        var eh = function () {
            function e() {
            }

            return e.prototype.ngOnInit = function () {
            }, e
        }(), th = uo({
            encapsulation: 0,
            styles: [[".footer[_ngcontent-%COMP%]{width:auto;height:70px;background-color:#000}.con-foot[_ngcontent-%COMP%]{border-bottom:1px solid rgba(255,255,255,.25);padding-top:30px}.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:rgba(255,255,255,.25);font-family:Champagne-Limousines-Bold;font-size:15px;font-weight:lighter;padding-top:10px;display:inline-block}.ico-redes[_ngcontent-%COMP%]{float:right}.ico-redes[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 5px;opacity:.6}"]],
            data: {}
        });

        function nh(e) {
            return Zi(0, [(e()(), Mo(0, 0, null, null, 9, "div", [["class", "footer"]], null, null, null, null, null)), (e()(), Mo(1, 0, null, null, 8, "div", [["class", "content"]], null, null, null, null, null)), (e()(), Mo(2, 0, null, null, 0, "div", [["class", "con-foot"]], null, null, null, null, null)), (e()(), Mo(3, 0, null, null, 1, "p", [], null, null, null, null, null)), (e()(), zi(-1, null, ["Versatti Copyrirht \xa9 2018"])), (e()(), Mo(5, 0, null, null, 4, "div", [["class", "ico-redes"]], null, null, null, null, null)), (e()(), Mo(6, 0, null, null, 1, "a", [["href", "https://www.facebook.com/VersattiSalonSpa/"], ["target", "_blank"]], null, null, null, null, null)), (e()(), Mo(7, 0, null, null, 0, "img", [["class", "redes_sociales"], ["src", "../../assets/img/fb.png"]], null, null, null, null, null)), (e()(), Mo(8, 0, null, null, 1, "a", [["href", "https://www.instagram.com/versattisalon/"], ["target", "_blank"]], null, null, null, null, null)), (e()(), Mo(9, 0, null, null, 0, "img", [["class", "redes_sociales"], ["src", "../../assets/img/inst.png"]], null, null, null, null, null))], null, null)
        }

        var rh = uo({encapsulation: 0, styles: [[""]], data: {}});

        function oh(e) {
            return Zi(0, [(e()(), Mo(0, 0, null, null, 1, "app-header", [], null, [["window", "scroll"]], function (e, t, n) {
                var r = !0;
                return "window:scroll" === t && (r = !1 !== si(e, 1).doSomething(n) && r), r
            }, Vd, Ld)), Ci(1, 114688, null, 0, jd, [], null, null), (e()(), Mo(2, 0, null, null, 1, "app-slider", [], null, null, null, Fd, Hd)), Ci(3, 114688, null, 0, Ud, [], null, null), (e()(), Mo(4, 0, null, null, 1, "app-servicios", [], null, null, null, qd, Bd)), Ci(5, 114688, null, 0, zd, [], null, null), (e()(), Mo(6, 0, null, null, 1, "app-promociones", [], null, null, null, Gd, Qd)), Ci(7, 114688, null, 0, Zd, [], null, null), (e()(), Mo(8, 0, null, null, 1, "app-bienvenidos", [], null, null, null, Yd, Kd)), Ci(9, 114688, null, 0, Wd, [], null, null), (e()(), Mo(10, 0, null, null, 1, "app-map", [], null, null, null, Xd, $d)), Ci(11, 114688, null, 0, Jd, [], null, null), (e()(), Mo(12, 0, null, null, 1, "app-footer", [], null, null, null, nh, th)), Ci(13, 114688, null, 0, eh, [], null, null)], function (e, t) {
                e(t, 1, 0), e(t, 3, 0), e(t, 5, 0), e(t, 7, 0), e(t, 9, 0), e(t, 11, 0), e(t, 13, 0)
            }, null)
        }

        var ih = $o("app-root", Nd, function (e) {
            return Zi(0, [(e()(), Mo(0, 0, null, null, 1, "app-root", [], null, null, null, oh, rh)), Ci(1, 49152, null, 0, Nd, [], null, null)], null, null)
        }, {}, {}, []), lh = function (e, t, n) {
            return new $l(Ra, [Nd], function (e) {
                return function (e) {
                    for (var t = {}, n = [], r = !1, o = 0; o < e.length; o++) {
                        var i = e[o];
                        i.token === wt && !0 === i.value && (r = !0), 1073741824 & i.flags && n.push(i.token), i.index = o, t[oo(i.token)] = i
                    }
                    return {factory: null, providersByKey: t, providers: e, modules: n, isRoot: r}
                }([Bo(512, $t, Xt, [[8, [Dd, ih]], [3, $t], tn]), Bo(5120, vr, br, [[3, vr]]), Bo(4608, Os, Is, [vr, [2, Ts]]), Bo(5120, Dt, jt, []), Bo(5120, cr, yr, []), Bo(5120, pr, mr, []), Bo(4608, Dc, jc, [Rs]), Bo(6144, qr, null, [Dc]), Bo(4608, Tc, Ic, []), Bo(5120, tc, function (e, t, n, r, o, i, l, u) {
                    return [new kc(e, t, n), new Mc(r), new Ac(o, i, l, u)]
                }, [Rs, sn, Ut, Rs, Rs, Tc, Ft, [2, Oc]]), Bo(4608, nc, nc, [tc, sn]), Bo(135680, ic, ic, [Rs]), Bo(4608, fc, fc, [nc, ic]), Bo(6144, An, null, [fc]), Bo(6144, oc, null, [ic]), Bo(4608, yn, yn, [sn]), Bo(5120, Pd, Td, [[3, Pd]]), Bo(5120, cf, _d, [Yf]), Bo(4608, ud, ud, []), Bo(6144, id, null, [ud]), Bo(135680, ad, ad, [Yf, Dn, Bt, We, id]), Bo(4608, ld, ld, []), Bo(5120, sd, gd, [Yf, Ds, cd]), Bo(5120, xd, Sd, [wd]), Bo(5120, Ht, function (e) {
                    return [e]
                }, [xd]), Bo(1073742336, Ns, Ns, []), Bo(1024, _t, qc, []), Bo(1024, xn, function () {
                    return [dd()]
                }, []), Bo(512, wd, wd, [We]), Bo(1024, Rt, function (e, t) {
                    return [(n = e, $s("probe", ec), $s("coreTokens", i({}, Xs, (n || []).reduce(function (e, t) {
                        return e[t.name] = t.token, e
                    }, {}))), function () {
                        return ec
                    }), Cd(t)];
                    var n
                }, [[2, xn], wd]), Bo(512, Mt, Mt, [[2, Rt]]), Bo(131584, On, On, [sn, Ft, We, _t, $t, Mt]), Bo(1073742336, _r, _r, [On]), Bo(1073742336, Zc, Zc, [[3, Zc]]), Bo(1073742336, Ad, Ad, []), Bo(1024, pd, yd, [[3, Yf]]), Bo(512, Ap, Np, []), Bo(512, nd, nd, []), Bo(256, cd, {}, []), Bo(1024, ms, vd, [vs, [2, bs], cd]), Bo(512, _s, _s, [ms]), Bo(512, Bt, Bt, []), Bo(512, Dn, Un, [Bt, [2, Ln]]), Bo(1024, Bf, function () {
                    return [[{path: "", component: Nd}]]
                }, []), Bo(1024, Yf, bd, [On, Ap, nd, _s, We, Dn, Bt, Bf, cd, [2, Zf], [2, Ff]]), Bo(1073742336, hd, hd, [[2, pd], [2, Yf]]), Bo(1073742336, Ra, Ra, []), Bo(256, wt, !0, [])])
            })
        }();
        (function () {
            if (wn) throw new Error("Cannot enable prod mode after platform setup.");
            _n = !1
        })(), Bc().bootstrapModuleFactory(lh).catch(function (e) {
            return console.log(e)
        })
    }
}, [[3, 0]]]);