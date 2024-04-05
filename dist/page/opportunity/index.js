"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/@tarekraafat+autocomplete.js@10.2.7/node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js
  var require_autoComplete_min = __commonJS({
    "node_modules/.pnpm/@tarekraafat+autocomplete.js@10.2.7/node_modules/@tarekraafat/autocomplete.js/dist/autoComplete.min.js"(exports, module) {
      init_live_reload();
      var e;
      var t;
      e = exports, t = function() {
        "use strict";
        function e2(e3, t3) {
          var n2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(e3);
            t3 && (r2 = r2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function t2(t3) {
          for (var n2 = 1; n2 < arguments.length; n2++) {
            var i2 = null != arguments[n2] ? arguments[n2] : {};
            n2 % 2 ? e2(Object(i2), true).forEach(function(e3) {
              r(t3, e3, i2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i2)) : e2(Object(i2)).forEach(function(e3) {
              Object.defineProperty(t3, e3, Object.getOwnPropertyDescriptor(i2, e3));
            });
          }
          return t3;
        }
        function n(e3) {
          return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, n(e3);
        }
        function r(e3, t3, n2) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
        }
        function i(e3) {
          return function(e4) {
            if (Array.isArray(e4))
              return s(e4);
          }(e3) || function(e4) {
            if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"])
              return Array.from(e4);
          }(e3) || o(e3) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function o(e3, t3) {
          if (e3) {
            if ("string" == typeof e3)
              return s(e3, t3);
            var n2 = Object.prototype.toString.call(e3).slice(8, -1);
            return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? s(e3, t3) : void 0;
          }
        }
        function s(e3, t3) {
          (null == t3 || t3 > e3.length) && (t3 = e3.length);
          for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++)
            r2[n2] = e3[n2];
          return r2;
        }
        var u = function(e3) {
          return "string" == typeof e3 ? document.querySelector(e3) : e3();
        }, a = function(e3, t3) {
          var n2 = "string" == typeof e3 ? document.createElement(e3) : e3;
          for (var r2 in t3) {
            var i2 = t3[r2];
            if ("inside" === r2)
              i2.append(n2);
            else if ("dest" === r2)
              u(i2[0]).insertAdjacentElement(i2[1], n2);
            else if ("around" === r2) {
              var o2 = i2;
              o2.parentNode.insertBefore(n2, o2), n2.append(o2), null != o2.getAttribute("autofocus") && o2.focus();
            } else
              r2 in n2 ? n2[r2] = i2 : n2.setAttribute(r2, i2);
          }
          return n2;
        }, c = function(e3, t3) {
          return e3 = String(e3).toLowerCase(), t3 ? e3.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFC") : e3;
        }, l = function(e3, n2) {
          return a("mark", t2({ innerHTML: e3 }, "string" == typeof n2 && { class: n2 })).outerHTML;
        }, f = function(e3, t3) {
          t3.input.dispatchEvent(new CustomEvent(e3, { bubbles: true, detail: t3.feedback, cancelable: true }));
        }, p = function(e3, t3, n2) {
          var r2 = n2 || {}, i2 = r2.mode, o2 = r2.diacritics, s2 = r2.highlight, u2 = c(t3, o2);
          if (t3 = String(t3), e3 = c(e3, o2), "loose" === i2) {
            var a2 = (e3 = e3.replace(/ /g, "")).length, f2 = 0, p2 = Array.from(t3).map(function(t4, n3) {
              return f2 < a2 && u2[n3] === e3[f2] && (t4 = s2 ? l(t4, s2) : t4, f2++), t4;
            }).join("");
            if (f2 === a2)
              return p2;
          } else {
            var d2 = u2.indexOf(e3);
            if (~d2)
              return e3 = t3.substring(d2, d2 + e3.length), d2 = s2 ? t3.replace(e3, l(e3, s2)) : t3;
          }
        }, d = function(e3, t3) {
          return new Promise(function(n2, r2) {
            var i2;
            return (i2 = e3.data).cache && i2.store ? n2() : new Promise(function(e4, n3) {
              return "function" == typeof i2.src ? i2.src(t3).then(e4, n3) : e4(i2.src);
            }).then(function(t4) {
              try {
                return e3.feedback = i2.store = t4, f("response", e3), n2();
              } catch (e4) {
                return r2(e4);
              }
            }, r2);
          });
        }, h = function(e3, t3) {
          var n2 = t3.data, r2 = t3.searchEngine, i2 = [];
          n2.store.forEach(function(s3, u2) {
            var a2 = function(n3) {
              var o2 = n3 ? s3[n3] : s3, u3 = "function" == typeof r2 ? r2(e3, o2) : p(e3, o2, { mode: r2, diacritics: t3.diacritics, highlight: t3.resultItem.highlight });
              if (u3) {
                var a3 = { match: u3, value: s3 };
                n3 && (a3.key = n3), i2.push(a3);
              }
            };
            if (n2.keys) {
              var c2, l2 = function(e4, t4) {
                var n3 = "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
                if (!n3) {
                  if (Array.isArray(e4) || (n3 = o(e4)) || t4 && e4 && "number" == typeof e4.length) {
                    n3 && (e4 = n3);
                    var r3 = 0, i3 = function() {
                    };
                    return { s: i3, n: function() {
                      return r3 >= e4.length ? { done: true } : { done: false, value: e4[r3++] };
                    }, e: function(e5) {
                      throw e5;
                    }, f: i3 };
                  }
                  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var s4, u3 = true, a3 = false;
                return { s: function() {
                  n3 = n3.call(e4);
                }, n: function() {
                  var e5 = n3.next();
                  return u3 = e5.done, e5;
                }, e: function(e5) {
                  a3 = true, s4 = e5;
                }, f: function() {
                  try {
                    u3 || null == n3.return || n3.return();
                  } finally {
                    if (a3)
                      throw s4;
                  }
                } };
              }(n2.keys);
              try {
                for (l2.s(); !(c2 = l2.n()).done; )
                  a2(c2.value);
              } catch (e4) {
                l2.e(e4);
              } finally {
                l2.f();
              }
            } else
              a2();
          }), n2.filter && (i2 = n2.filter(i2));
          var s2 = i2.slice(0, t3.resultsList.maxResults);
          t3.feedback = { query: e3, matches: i2, results: s2 }, f("results", t3);
        }, m = "aria-expanded", b = "aria-activedescendant", y = "aria-selected", v = function(e3, n2) {
          e3.feedback.selection = t2({ index: n2 }, e3.feedback.results[n2]);
        }, g = function(e3) {
          e3.isOpen || ((e3.wrapper || e3.input).setAttribute(m, true), e3.list.removeAttribute("hidden"), e3.isOpen = true, f("open", e3));
        }, w = function(e3) {
          e3.isOpen && ((e3.wrapper || e3.input).setAttribute(m, false), e3.input.setAttribute(b, ""), e3.list.setAttribute("hidden", ""), e3.isOpen = false, f("close", e3));
        }, O = function(e3, t3) {
          var n2 = t3.resultItem, r2 = t3.list.getElementsByTagName(n2.tag), o2 = !!n2.selected && n2.selected.split(" ");
          if (t3.isOpen && r2.length) {
            var s2, u2, a2 = t3.cursor;
            e3 >= r2.length && (e3 = 0), e3 < 0 && (e3 = r2.length - 1), t3.cursor = e3, a2 > -1 && (r2[a2].removeAttribute(y), o2 && (u2 = r2[a2].classList).remove.apply(u2, i(o2))), r2[e3].setAttribute(y, true), o2 && (s2 = r2[e3].classList).add.apply(s2, i(o2)), t3.input.setAttribute(b, r2[t3.cursor].id), t3.list.scrollTop = r2[e3].offsetTop - t3.list.clientHeight + r2[e3].clientHeight + 5, t3.feedback.cursor = t3.cursor, v(t3, e3), f("navigate", t3);
          }
        }, A = function(e3) {
          O(e3.cursor + 1, e3);
        }, k = function(e3) {
          O(e3.cursor - 1, e3);
        }, L = function(e3, t3, n2) {
          (n2 = n2 >= 0 ? n2 : e3.cursor) < 0 || (e3.feedback.event = t3, v(e3, n2), f("selection", e3), w(e3));
        };
        function j(e3, n2) {
          var r2 = this;
          return new Promise(function(i2, o2) {
            var s2, u2;
            return s2 = n2 || ((u2 = e3.input) instanceof HTMLInputElement || u2 instanceof HTMLTextAreaElement ? u2.value : u2.innerHTML), function(e4, t3, n3) {
              return t3 ? t3(e4) : e4.length >= n3;
            }(s2 = e3.query ? e3.query(s2) : s2, e3.trigger, e3.threshold) ? d(e3, s2).then(function(n3) {
              try {
                return e3.feedback instanceof Error ? i2() : (h(s2, e3), e3.resultsList && function(e4) {
                  var n4 = e4.resultsList, r3 = e4.list, i3 = e4.resultItem, o3 = e4.feedback, s3 = o3.matches, u3 = o3.results;
                  if (e4.cursor = -1, r3.innerHTML = "", s3.length || n4.noResults) {
                    var c3 = new DocumentFragment();
                    u3.forEach(function(e5, n5) {
                      var r4 = a(i3.tag, t2({ id: "".concat(i3.id, "_").concat(n5), role: "option", innerHTML: e5.match, inside: c3 }, i3.class && { class: i3.class }));
                      i3.element && i3.element(r4, e5);
                    }), r3.append(c3), n4.element && n4.element(r3, o3), g(e4);
                  } else
                    w(e4);
                }(e3), c2.call(r2));
              } catch (e4) {
                return o2(e4);
              }
            }, o2) : (w(e3), c2.call(r2));
            function c2() {
              return i2();
            }
          });
        }
        var S = function(e3, t3) {
          for (var n2 in e3)
            for (var r2 in e3[n2])
              t3(n2, r2);
        }, T = function(e3) {
          var n2, r2, i2, o2 = e3.events, s2 = (n2 = function() {
            return j(e3);
          }, r2 = e3.debounce, function() {
            clearTimeout(i2), i2 = setTimeout(function() {
              return n2();
            }, r2);
          }), u2 = e3.events = t2({ input: t2({}, o2 && o2.input) }, e3.resultsList && { list: o2 ? t2({}, o2.list) : {} }), a2 = { input: { input: function() {
            s2();
          }, keydown: function(t3) {
            !function(e4, t4) {
              switch (e4.keyCode) {
                case 40:
                case 38:
                  e4.preventDefault(), 40 === e4.keyCode ? A(t4) : k(t4);
                  break;
                case 13:
                  t4.submit || e4.preventDefault(), t4.cursor >= 0 && L(t4, e4);
                  break;
                case 9:
                  t4.resultsList.tabSelect && t4.cursor >= 0 && L(t4, e4);
                  break;
                case 27:
                  t4.input.value = "", w(t4);
              }
            }(t3, e3);
          }, blur: function() {
            w(e3);
          } }, list: { mousedown: function(e4) {
            e4.preventDefault();
          }, click: function(t3) {
            !function(e4, t4) {
              var n3 = t4.resultItem.tag.toUpperCase(), r3 = Array.from(t4.list.querySelectorAll(n3)), i3 = e4.target.closest(n3);
              i3 && i3.nodeName === n3 && L(t4, e4, r3.indexOf(i3));
            }(t3, e3);
          } } };
          S(a2, function(t3, n3) {
            (e3.resultsList || "input" === n3) && (u2[t3][n3] || (u2[t3][n3] = a2[t3][n3]));
          }), S(u2, function(t3, n3) {
            e3[t3].addEventListener(n3, u2[t3][n3]);
          });
        };
        function E(e3) {
          var n2 = this;
          return new Promise(function(r2, i2) {
            var o2, s2, u2;
            if (o2 = e3.placeHolder, u2 = { role: "combobox", "aria-owns": (s2 = e3.resultsList).id, "aria-haspopup": true, "aria-expanded": false }, a(e3.input, t2(t2({ "aria-controls": s2.id, "aria-autocomplete": "both" }, o2 && { placeholder: o2 }), !e3.wrapper && t2({}, u2))), e3.wrapper && (e3.wrapper = a("div", t2({ around: e3.input, class: e3.name + "_wrapper" }, u2))), s2 && (e3.list = a(s2.tag, t2({ dest: [s2.destination, s2.position], id: s2.id, role: "listbox", hidden: "hidden" }, s2.class && { class: s2.class }))), T(e3), e3.data.cache)
              return d(e3).then(function(e4) {
                try {
                  return c2.call(n2);
                } catch (e5) {
                  return i2(e5);
                }
              }, i2);
            function c2() {
              return f("init", e3), r2();
            }
            return c2.call(n2);
          });
        }
        function x(e3) {
          var t3 = e3.prototype;
          t3.init = function() {
            E(this);
          }, t3.start = function(e4) {
            j(this, e4);
          }, t3.unInit = function() {
            if (this.wrapper) {
              var e4 = this.wrapper.parentNode;
              e4.insertBefore(this.input, this.wrapper), e4.removeChild(this.wrapper);
            }
            var t4;
            S((t4 = this).events, function(e5, n2) {
              t4[e5].removeEventListener(n2, t4.events[e5][n2]);
            });
          }, t3.open = function() {
            g(this);
          }, t3.close = function() {
            w(this);
          }, t3.goTo = function(e4) {
            O(e4, this);
          }, t3.next = function() {
            A(this);
          }, t3.previous = function() {
            k(this);
          }, t3.select = function(e4) {
            L(this, null, e4);
          }, t3.search = function(e4, t4, n2) {
            return p(e4, t4, n2);
          };
        }
        return function e3(t3) {
          this.options = t3, this.id = e3.instances = (e3.instances || 0) + 1, this.name = "autoComplete", this.wrapper = 1, this.threshold = 1, this.debounce = 0, this.resultsList = { position: "afterend", tag: "ul", maxResults: 5 }, this.resultItem = { tag: "li" }, function(e4) {
            var t4 = e4.name, r2 = e4.options, i2 = e4.resultsList, o2 = e4.resultItem;
            for (var s2 in r2)
              if ("object" === n(r2[s2]))
                for (var a2 in e4[s2] || (e4[s2] = {}), r2[s2])
                  e4[s2][a2] = r2[s2][a2];
              else
                e4[s2] = r2[s2];
            e4.selector = e4.selector || "#" + t4, i2.destination = i2.destination || e4.selector, i2.id = i2.id || t4 + "_list_" + e4.id, o2.id = o2.id || t4 + "_result", e4.input = u(e4.selector);
          }(this), x.call(this, e3), E(this);
        };
      }, "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).autoComplete = t();
    }
  });

  // src/page/opportunity/index.js
  init_live_reload();

  // src/utils/redirectWithParams.ts
  init_live_reload();
  var currentURL = new URL(window.location.href);
  var paramsToKepp = currentURL.search;
  var linkKeppParams = document.querySelectorAll("[lb-keep-params]");
  var redirectLinks = function() {
    linkKeppParams.forEach((link) => {
      link.href = link.href + paramsToKepp;
    });
  };

  // src/utils/setupForms.js
  init_live_reload();

  // src/utils/autoCompleteOrganisations.js
  init_live_reload();
  var import_autocomplete = __toESM(require_autoComplete_min(), 1);

  // src/data/prescribersArr.js
  init_live_reload();
  var dataPrescribers = [
    {
      Name: "A Nous Tous - Si\xE8ge",
      recordID: "recDbiWXryB6EKczt"
    },
    {
      Name: "A.R.I.M (Association Rouennaise pour l'Int\xE9gration des Migrants) - Si\xE8ge",
      recordID: "recOQuA3Iq1t6ymc3"
    },
    {
      Name: "A Voix Haute - Si\xE8ge",
      recordID: "recypWmgyMC4c6Wu6"
    },
    {
      Name: "AAES (Association Aide Emploi Service) - Dunkerque",
      recordID: "recBZrVLJkszQWZPZ"
    },
    {
      Name: "AAJT (Association d'Aide aux Jeunes Travailleurs) - Marseille",
      recordID: "recKX0gmna3lYTaV5"
    },
    {
      Name: "AAJT (Association d'Aide aux Jeunes Travailleurs) - Si\xE8ge",
      recordID: "recHLlU4V9lA7A9qP"
    },
    {
      Name: "AAPPI (Association d\u2019Aide aux Populations Pr\xE9caires et Immigr\xE9es) - CPH Charleville M\xE9zi\xE8res",
      recordID: "recWWc4409mdUr3jS"
    },
    {
      Name: "AAPPI (Association d\u2019Aide aux Populations Pr\xE9caires et Immigr\xE9es) - Si\xE8ge",
      recordID: "recszBpULYexfXGRG"
    },
    {
      Name: "ABAAFE - Bretagne",
      recordID: "recAF89G5RXkQiskU"
    },
    {
      Name: "ABAAFE - Si\xE8ge",
      recordID: "recWjVnCCQNFaEV1l"
    },
    {
      Name: "Abajad - Si\xE8ge",
      recordID: "recvMrSM9pXQoXTrG"
    },
    {
      Name: "ABEJ Solidarit\xE9s - Si\xE8ge",
      recordID: "reccbK5KvMNwZk1GG"
    },
    {
      Name: "Abri Groupe - Si\xE8ge",
      recordID: "recW9EQefmhtD8ARq"
    },
    {
      Name: "Acad\xE9mie de Cr\xE9teil - Si\xE8ge",
      recordID: "recj2uU3GuZ04xpMJ"
    },
    {
      Name: "Acad\xE9mie de Lille - Si\xE8ge",
      recordID: "recwSpjDUqANUXR3B"
    },
    {
      Name: "ACCES (Actions Culturelles Contre les Exclusions et les S\xE9gr\xE9gations) - Haut Rhin",
      recordID: "recFEuKhgYAJW8IoM"
    },
    {
      Name: "ACCES (Actions Culturelles Contre les Exclusions et les S\xE9gr\xE9gations) - HUDA Preiss",
      recordID: "recCJ0U0BIaApYShT"
    },
    {
      Name: "ACCES (Actions Culturelles Contre les Exclusions et les S\xE9gr\xE9gations) - HUDA Tassigny",
      recordID: "rec3opXDiteh4OqsX"
    },
    {
      Name: "ACCES (Actions Culturelles Contre les Exclusions et les S\xE9gr\xE9gations) - SPADA 68",
      recordID: "rec9cz7z8p8tzN1QG"
    },
    {
      Name: "Accueil Et Culture - Si\xE8ge",
      recordID: "rec3W2KhyKEOofawJ"
    },
    {
      Name: "Accueil Fraternel - Roubaix",
      recordID: "recjHPx6NJQodE9M1"
    },
    {
      Name: "Accueil Insertion Rencontre - CADA de Roubaix",
      recordID: "recd4MSu6VnAQuem4"
    },
    {
      Name: "Accueil Insertion Rencontre - CADA de Tourcoing",
      recordID: "recCJZgGjfIuA4mOK"
    },
    {
      Name: "Accueil Insertion Rencontre - Si\xE8ge",
      recordID: "recn2koWGYWqk1sXq"
    },
    {
      Name: "Accueil sans fonti\xE8res - HUDA - Saverne",
      recordID: "recJNt4yPglkpwEg7"
    },
    {
      Name: "Accueillir et Partager - Si\xE8ge",
      recordID: "recWbctmWEZtWtEGS"
    },
    {
      Name: "ACI (Association de Conseil et d'Insertion) - Si\xE8ge",
      recordID: "rectAuv6LQQi8UNFe"
    },
    {
      Name: "ACINA - Si\xE8ge",
      recordID: "recGqxf5SfzGgrnLC"
    },
    {
      Name: "ACM Formation - Si\xE8ge",
      recordID: "recnMe9qlOFOc9cbP"
    },
    {
      Name: "ACPM - Si\xE8ge",
      recordID: "recdlVPMln3jR97Ob"
    },
    {
      Name: "ACRIP - Si\xE8ge",
      recordID: "reckUHqqC7yHRXIKZ"
    },
    {
      Name: "ACSC - CADA - VIA TOLOSA",
      recordID: "reclCCAcgOGAnVBDm"
    },
    {
      Name: "Action Emploi R\xE9fugi\xE9s - Acquitaine",
      recordID: "recAUjvKhXFsSAvjB"
    },
    {
      Name: "Action Emploi R\xE9fugi\xE9s - Action Emploi R\xE9fugi\xE9s",
      recordID: "recHUuStuXc20ERXg"
    },
    {
      Name: "Action Emploi R\xE9fugi\xE9s - Paris",
      recordID: "recfqnrAhNvObg6Cx"
    },
    {
      Name: "Action Emploi R\xE9fugi\xE9s - Si\xE8ge",
      recordID: "recyEOAnvfIYKbnPb"
    },
    {
      Name: "Action Emploi R\xE9fugi\xE9s - SOCLE",
      recordID: "recpauSF0qfSqSa02"
    },
    {
      Name: "Action Logement - Si\xE8ge",
      recordID: "recNKLRFD8ZnSlHkP"
    },
    {
      Name: "Action Solidarit\xE9 de Marignane - Si\xE8ge",
      recordID: "rec54M92fY2NMcH2g"
    },
    {
      Name: "Actualis - Si\xE8ge",
      recordID: "reco5q23wOwEme5u2"
    },
    {
      Name: "AD HOC Collectif d'Innovation Sociale - AD HOC Collectif d'Innovation Sociale",
      recordID: "recO1mGW7YSjQims8"
    },
    {
      Name: "ADA (Accueil demandeurs d'asile) - Si\xE8ge",
      recordID: "recIf4bCFHA7bs04t"
    },
    {
      Name: "ADAGE (Association D'Accompagnement Global contre l'Exclusion) - Si\xE8ge",
      recordID: "recpskjgvpjMWAbuY"
    },
    {
      Name: "ADAGES - Montpellier HUDA + CADA",
      recordID: "recIWGnXcO8E7Ex5x"
    },
    {
      Name: "ADALI - Habitat - Si\xE8ge",
      recordID: "recV0ASyv0DKCp2Wx"
    },
    {
      Name: "Adamal - Si\xE8ge",
      recordID: "recnTchnfPg1jcLhv"
    },
    {
      Name: "ADAO - Association de d\xE9mocratisation de l'art oratoire - Si\xE8ge",
      recordID: "recUdnZhuvzowL6MG"
    },
    {
      Name: "ADATE - Grenoble",
      recordID: "recp5UdVRpwzVK3zV"
    },
    {
      Name: "ADATE - Si\xE8ge",
      recordID: "recY7EGwQxXSYDe5M"
    },
    {
      Name: "ADDAP 13 - Si\xE8ge",
      recordID: "recm81z7x7PzYnT7y"
    },
    {
      Name: "ADEF (Association D\xE9partementale d'\xC9tudes et de Formation) - Si\xE8ge",
      recordID: "rec8bzX18E42vYV3x"
    },
    {
      Name: "ADELE Begles (Association pour le D\xE9veloppement Local et l'Emploi) - Si\xE8ge",
      recordID: "reck3wCPlvQdOa8r3"
    },
    {
      Name: "ADEP (Association pour le D\xE9veloppement de l'Education  Permanente) - Si\xE8ge",
      recordID: "recSOAsyCtOz7eEmK"
    },
    {
      Name: "ADEPAP - Repairs95 - Val d'Oise",
      recordID: "rec4b0U4HCYygez9d"
    },
    {
      Name: "ADFIC - Si\xE8ge",
      recordID: "rec2HFhVr3NSmh2vd"
    },
    {
      Name: "ADICE - Si\xE8ge",
      recordID: "recBvbbs6Z9HqreVi"
    },
    {
      Name: "Adie - Dax",
      recordID: "rec1HkJH2D1UeEhBA"
    },
    {
      Name: "Adie - \xCEle-de-France - Accompagnement mobilit\xE9",
      recordID: "recIs4CMlCTebvtbV"
    },
    {
      Name: "Adie - Lille - Accompagnement mobilit\xE9",
      recordID: "recmmVRKK4FSpiYHf"
    },
    {
      Name: "Adie - PACA - Accompagnement mobilit\xE9",
      recordID: "recMrOQAsHCaGQKL9"
    },
    {
      Name: "Adie - Pau",
      recordID: "recuOvLgJ9WZZJCjm"
    },
    {
      Name: "Adie - Si\xE8ge",
      recordID: "recVMYNMTBAlHaINT"
    },
    {
      Name: "ADIPH (Association D\xE9partementale pour l'Insertion des Personnes Handicap\xE9es) - 35",
      recordID: "recUtiIqg3IdKQhYQ"
    },
    {
      Name: "Adoma CDC Habitat - Alsace (Strasbourg)",
      recordID: "recJ0oaIMBoClxeab"
    },
    {
      Name: "Adoma CDC Habitat - Aquitaine Limousin",
      recordID: "rechDJiYcTg6mi0AS"
    },
    {
      Name: "Adoma CDC Habitat - CADA - Cabazat",
      recordID: "rectBBaBBl3ss1Bnw"
    },
    {
      Name: "Adoma CDC Habitat - CADA de Marseille",
      recordID: "recfU7362Vxxigjqv"
    },
    {
      Name: "Adoma CDC Habitat - CADA de Mulhouse",
      recordID: "recjLnuhlVJoZlx5C"
    },
    {
      Name: "Adoma CDC Habitat - CADA - ESSEY LES NANCY",
      recordID: "recPfVnJmhAfHtxFy"
    },
    {
      Name: "Adoma CDC Habitat - CADA - HERSERANGE",
      recordID: "recBAWnsmwIP8rYGO"
    },
    {
      Name: "Adoma CDC Habitat - CADA la Verpill\xE8re",
      recordID: "rec9bd7ryIunFHxqG"
    },
    {
      Name: "Adoma CDC Habitat - CADA Les Verriers",
      recordID: "recBnWifTAId75aj1"
    },
    {
      Name: "Adoma CDC Habitat - CADA Liancourt",
      recordID: "recXNIvY3iKrQaHeJ"
    },
    {
      Name: "Adoma CDC Habitat - CADA - Limousin P\xE9age-de-Roussillon",
      recordID: "recxQmOQIeOj5u3G5"
    },
    {
      Name: "Adoma CDC Habitat - CADA - Nancy",
      recordID: "recZbQMFHP7iEDoup"
    },
    {
      Name: "Adoma CDC Habitat - CADA - R\xE9sidence TOULOUSE PIERRE NOUGARO",
      recordID: "rec8l6KQooenkTVzf"
    },
    {
      Name: "Adoma CDC Habitat - CADA - Villefontaine",
      recordID: "recJh9gRub3gQUvW7"
    },
    {
      Name: "Adoma CDC Habitat - Central",
      recordID: "recaJFZz7D3pnQ5Fq"
    },
    {
      Name: "Adoma CDC Habitat - Champagne Ardenne",
      recordID: "recV5bgB7PjgAzqK4"
    },
    {
      Name: "Adoma CDC Habitat - CPH - Metz",
      recordID: "recZ19upsUbCDikVv"
    },
    {
      Name: "Adoma CDC Habitat - Epinal",
      recordID: "rec3SScoqqqMcu8wS"
    },
    {
      Name: "Adoma CDC Habitat - Grand-Est",
      recordID: "rec03MceVQkY27Gqe"
    },
    {
      Name: "Adoma CDC Habitat - HUDA de Gennevilliers",
      recordID: "rec7gWPbchG3dFcqb"
    },
    {
      Name: "Adoma CDC Habitat - HUDA Fort d\u2019Aubervilliers",
      recordID: "recMErAFVFsN2fvuJ"
    },
    {
      Name: "Adoma CDC Habitat - HUDA Les Ulis",
      recordID: "recwVCIE5YbkFJAEm"
    },
    {
      Name: "Adoma CDC Habitat - HUDA - Toulouse",
      recordID: "recJlFyhN4Xlzzqym"
    },
    {
      Name: "Adoma CDC Habitat - INSAIR 38",
      recordID: "recSAaKevXD6HCfAc"
    },
    {
      Name: "Adoma CDC Habitat - Lille",
      recordID: "reco9gEkMr2vNacHh"
    },
    {
      Name: "Adoma CDC Habitat - Maladi\xE8re",
      recordID: "recYd3NRbOiTwt20x"
    },
    {
      Name: "Adoma CDC Habitat - Marseille",
      recordID: "recimllTjQN15p9OF"
    },
    {
      Name: "Adoma CDC Habitat - Moselle",
      recordID: "rec0u9YIyAaLDwpCJ"
    },
    {
      Name: "Adoma CDC Habitat - PRAHDA De Pau",
      recordID: "recRgh1HjSAEcJyiH"
    },
    {
      Name: "Adoma CDC Habitat - Romain Rolland",
      recordID: "recMd3fsXLNoSGOUX"
    },
    {
      Name: "Adoma CDC Habitat - Saint Germain en Laye",
      recordID: "reckcrjxiHoRRBPSp"
    },
    {
      Name: "Adoma CDC Habitat - Seine Saint Denis",
      recordID: "rec8hsjit7S5P6gKO"
    },
    {
      Name: "Adoma CDC Habitat - SHAPAD Beauvais",
      recordID: "recRI2iL7Cp6F3rE1"
    },
    {
      Name: "Adoma CDC Habitat - Si\xE8ge",
      recordID: "reclvqQ6QgcnbILLZ"
    },
    {
      Name: "Adoma CDC Habitat - Si\xE8ge",
      recordID: "recXnnu6W5v0wqdeF"
    },
    {
      Name: "Adoma CDC Habitat - Si\xE8ge",
      recordID: "rec69fNhvE1INRRcO"
    },
    {
      Name: "ADRIC - Si\xE8ge",
      recordID: "recexMknJy4w1J7Rd"
    },
    {
      Name: "ADRIM - CADA",
      recordID: "receWhsQcHJk9KUc9"
    },
    {
      Name: "ADRIM - Si\xE8ge",
      recordID: "recHGppQUcLLotN08"
    },
    {
      Name: "ADSF - Si\xE8ge",
      recordID: "recQgmIHmp3MyYVT0"
    },
    {
      Name: "AEA (Association Est Accompagnement) - HUDA - Metz",
      recordID: "recCJsY3ybCgT1La6"
    },
    {
      Name: "AEA (Association Est Accompagnement) - Si\xE8ge",
      recordID: "recLGvbJ8OBbxly8x"
    },
    {
      Name: "AEMO - Marseille",
      recordID: "rec9fWAbwODNbEzTh"
    },
    {
      Name: "AEP (Association Accueil et Promotion) - Si\xE8ge",
      recordID: "recHnRCtEzXISSjb7"
    },
    {
      Name: "AFEJI - CADA Dunkerque",
      recordID: "rec0Iz6wN1nYmnQDn"
    },
    {
      Name: "AFEJI - Si\xE8ge",
      recordID: "receNgx2mYhDWaKDr"
    },
    {
      Name: "AFEPT - Si\xE8ge",
      recordID: "recccMNnov4KP3ly4"
    },
    {
      Name: "AFEV - Si\xE8ge",
      recordID: "rec9OuoBgS4JL5Wzu"
    },
    {
      Name: "AFEV - Si\xE8ge",
      recordID: "reciKkJkApxYUW6qA"
    },
    {
      Name: "AFI (Action Formation Insertion) - Si\xE8ge",
      recordID: "recK9BUi3AR1P1qKt"
    },
    {
      Name: "AFP2i - Arras",
      recordID: "recM0d7apWHX65RCE"
    },
    {
      Name: "AFPA - HOPE",
      recordID: "recFpzyzfQlSvQgXA"
    },
    {
      Name: "AFPA Hope - Si\xE8ge",
      recordID: "recsakJKdRxnR8oHA"
    },
    {
      Name: "AFPA - Si\xE8ge",
      recordID: "rec2B35Ag4lkvhnm2"
    },
    {
      Name: "AFRISANTE - Si\xE8ge",
      recordID: "recIWWvVhHvYfWtdn"
    },
    {
      Name: "AGDS - Association Gestion et D\xE9veloppement Social - Si\xE8ge",
      recordID: "recsRHHXF7fFaVbjo"
    },
    {
      Name: "Agefiph - Si\xE8ge",
      recordID: "recfTH23c607xhFc2"
    },
    {
      Name: "AGEHB - CHRS Kastell Dour",
      recordID: "rec5pcEhye1dI3Mmi"
    },
    {
      Name: "AGEHB - CHRS Les Ajoncs",
      recordID: "recBg967mLp605eaJ"
    },
    {
      Name: "AGEHB - Le Phare",
      recordID: "rec6N784zZPr33dHF"
    },
    {
      Name: "Agence CRIT - Si\xE8ge",
      recordID: "reckN27ORJ6e9qq6g"
    },
    {
      Name: "Agir avec Nous - Axes Pluriels",
      recordID: "rec5YgMdWSw6H4pmc"
    },
    {
      Name: "AGORAE (banque alimentaire) - Si\xE8ge",
      recordID: "rec0Gmg5pMkCPaXbB"
    },
    {
      Name: "Agro Formation - Si\xE8ge",
      recordID: "recZBrfEfzNs7A48m"
    },
    {
      Name: "AGS-CSF - Si\xE8ge",
      recordID: "rech4XwjMXfk1o3Be"
    },
    {
      Name: "AHARP - Avignon",
      recordID: "recULOoPcsR2C0EXW"
    },
    {
      Name: "AIDA - Si\xE8ge",
      recordID: "recEwYb9NeLQiP0Zi"
    },
    {
      Name: "AIDAPHI - CADA d'Orl\xE9ans",
      recordID: "recnnead6EPI1T2Uc"
    },
    {
      Name: "Aidons les R\xE9fugi\xE9s - Si\xE8ge",
      recordID: "rece337pVGWSO8F8r"
    },
    {
      Name: "AIEM (Association d'Information et d'Entraide Mosellane) - CADA de Metz",
      recordID: "reccALzFvGDMvD5yp"
    },
    {
      Name: "AIEM (Association d'Information et d'Entraide Mosellane) - CPH - Metz",
      recordID: "reci2EAtN60xAXp92"
    },
    {
      Name: "AIEM (Association d'Information et d'Entraide Mosellane) - HUDA - Metz",
      recordID: "recl7shXQkYIxwfHP"
    },
    {
      Name: "AIEM (Association d'Information et d'Entraide Mosellane) - P\xF4le Asile",
      recordID: "recJoC1l7uCQLV1Uf"
    },
    {
      Name: "AIEM (Association d'Information et d'Entraide Mosellane) - SPADA - Metz",
      recordID: "recEfMJoJgtlCZSrp"
    },
    {
      Name: "AILES - Si\xE8ge",
      recordID: "recJfoy2rHuJpxF5W"
    },
    {
      Name: "AIME Formations - Si\xE8ge",
      recordID: "recAGQgIQoRwDoF3m"
    },
    {
      Name: "AITE - Si\xE8ge",
      recordID: "rec1LrEDiYezUsyZI"
    },
    {
      Name: "AIVS Alma (Agence Immo \xE0 vocation sociale) - Alma",
      recordID: "recAd2gr8iIJ5INyG"
    },
    {
      Name: "AJAR - Pour la Justice l'Accueil et la R\xE9insertion",
      recordID: "recomA2HgL6Ipb1z0"
    },
    {
      Name: "AJAR - Si\xE8ge",
      recordID: "receZrA9EnMSNiiXQ"
    },
    {
      Name: "AKDN - Focus Humanitarian Assistance (Centre Culturel Ismaelien)",
      recordID: "recnbAxXN3qes2E78"
    },
    {
      Name: "AKOLAD - Si\xE8ge",
      recordID: "reckrfWh9RvqdKJZh"
    },
    {
      Name: "Aksis - Aksis",
      recordID: "recQ0STOvrRtQMwkK"
    },
    {
      Name: "ALAJI - Metz",
      recordID: "rec3mVMVt3A3qBR47"
    },
    {
      Name: "ALC - CADA L'Olivier",
      recordID: "reccGGAVNOtMBicSd"
    },
    {
      Name: "ALC - HUDA de Nice",
      recordID: "recLAvz1T0qJeAYci"
    },
    {
      Name: "ALEOS - Colmar",
      recordID: "recWvBc3vUByXlu4k"
    },
    {
      Name: "ALEOS - Mulhouse",
      recordID: "recGMOR5irSZ8wsIJ"
    },
    {
      Name: "ALEOS - Si\xE8ge",
      recordID: "rec25uaIgTCONykNV"
    },
    {
      Name: "Alfa 14 - Si\xE8ge",
      recordID: "recyIFoMn6m4zaSSd"
    },
    {
      Name: "ALIFS (Association du Lien Interculturel Familial et Social) - Acquitaine",
      recordID: "rechL7dV29yaFZjNU"
    },
    {
      Name: "ALIFS (Association du Lien Interculturel Familial et Social) - Si\xE8ge",
      recordID: "recqZoCxZb3eGvwC8"
    },
    {
      Name: "ALIOS Formation - Si\xE8ge",
      recordID: "rec113q5R1YEU0BOV"
    },
    {
      Name: "Alis\xE9s - HUDA - Val de Brey",
      recordID: "recyNKFI6EAbGLuE6"
    },
    {
      Name: "Alliance de D\xE9veloppement - Grenoble",
      recordID: "rec7ixCWWmckEnuhm"
    },
    {
      Name: "Alliance Fran\xE7aise - Alliance Fran\xE7aise",
      recordID: "recDJ4352amrpaxLl"
    },
    {
      Name: "Alliance Fran\xE7aise - Bordeaux",
      recordID: "reckqw3cjhsSwhnDb"
    },
    {
      Name: "Almea Formations - Champagne-Ardenne",
      recordID: "recAmU7t7E323O6nu"
    },
    {
      Name: "Almea Formations - Si\xE8ge",
      recordID: "rec8qPvh8Yd3ymHmq"
    },
    {
      Name: "Alotra - Si\xE8ge",
      recordID: "reclGHgwzbKOSoPbf"
    },
    {
      Name: "ALOTRA - Si\xE8ge",
      recordID: "rec9xA2vSUncOBf4I"
    },
    {
      Name: "ALP - Librairie",
      recordID: "rec7oziNikgtn1Mup"
    },
    {
      Name: "alpha 3a - Vienne",
      recordID: "recphkMVg24Jyatc4"
    },
    {
      Name: "Alpha 4 - Si\xE8ge",
      recordID: "recNf2towQMN0pG44"
    },
    {
      Name: "Alpha plus - Si\xE8ge",
      recordID: "recc9mOsNYaAbmBqT"
    },
    {
      Name: "Alter Ego - Aurignac",
      recordID: "recztVsf3OMkAzhsE"
    },
    {
      Name: "ALTHEA - CADA de Caen",
      recordID: "rec8tmdZbEjqXXCrK"
    },
    {
      Name: "AMA (Accueil Migrants Asni\xE8res) - Si\xE8ge",
      recordID: "rec1YsjVnijS8PWM2"
    },
    {
      Name: "AMI (Accompagnement Migrant Int\xE9gration) - Si\xE8ge",
      recordID: "recqoQZXrIprU7Vqf"
    },
    {
      Name: "AMI (Accompagnement Migrant Int\xE9gration) - Si\xE8ge",
      recordID: "recjjxN9th9F9TUXz"
    },
    {
      Name: "AMI (Accompagnement Migrant Int\xE9gration) - Si\xE8ge",
      recordID: "recQY0MMi9fFOW3uR"
    },
    {
      Name: "Amicale du Nid - Si\xE8ge",
      recordID: "recRQBxVYd8JlwKSz"
    },
    {
      Name: "AMIFA - Si\xE8ge",
      recordID: "recUr2T13GR04cxJi"
    },
    {
      Name: "Amigrants de Rouen - Si\xE8ge",
      recordID: "recJc3T95v25To5Tc"
    },
    {
      Name: "AMISEP - CADA",
      recordID: "recNrQAvrmgdsHtj8"
    },
    {
      Name: "AMISEP - Rennes",
      recordID: "recCZJ04VJJo80r4U"
    },
    {
      Name: "AMISEP - Si\xE8ge",
      recordID: "reckdkUkDJWPjMFmw"
    },
    {
      Name: "AMISEP - Vannes",
      recordID: "reckOQJmcbeIUAvd9"
    },
    {
      Name: "AMLI - CADA de Metz",
      recordID: "recyq7my4CL64OTQ7"
    },
    {
      Name: "AMLI - Ile de France",
      recordID: "recaFP3PKSXmkTicM"
    },
    {
      Name: "AMLI - Metz : Dispositif DALIR",
      recordID: "recMEcGXADfuvNfnq"
    },
    {
      Name: "AMLI - Metz : Dispositif HU Diffus",
      recordID: "recyK5mJ11Kd9Awam"
    },
    {
      Name: "AMLI - Metz : Dispositif HU-HUDA",
      recordID: "recceK02c301Bd1oN"
    },
    {
      Name: "AMLI - Si\xE8ge",
      recordID: "rec3mbsCQfTGCUeIF"
    },
    {
      Name: "Amnesty International - Nice Groupe 2",
      recordID: "recN7OnxzFXVXvqlg"
    },
    {
      Name: "Amnesty International - Si\xE8ge",
      recordID: "rec4PZYHLnyjgYfwX"
    },
    {
      Name: "AMPIL - Si\xE8ge",
      recordID: "recs9kCqk2GBY1fcA"
    },
    {
      Name: "Anciela - Si\xE8ge",
      recordID: "recpy2v49pvcRDlZV"
    },
    {
      Name: "Ancrages - Si\xE8ge",
      recordID: "recZWqICtd9HH2C0D"
    },
    {
      Name: "ANEF - D\xE9l\xE9gation du Puy de Dome",
      recordID: "recC1TXfwnJ9oWniV"
    },
    {
      Name: "ANEF - HUDA puy de dome",
      recordID: "recRK6qyQRF1sC9vr"
    },
    {
      Name: "ANEF - Si\xE8ge",
      recordID: "recFfAqQpTvUerbFJ"
    },
    {
      Name: "ANEFA - Si\xE8ge",
      recordID: "recvbGZ47XbYxhTO3"
    },
    {
      Name: "ANRJ (Association Nouveaux Regards sur la Jeunesse) - Si\xE8ge",
      recordID: "reccFEVI2ZIlBomEw"
    },
    {
      Name: "Apare - Si\xE8ge",
      recordID: "recb9dY07P5CbPdGm"
    },
    {
      Name: "APART - CPH",
      recordID: "recwgerGJRAuCwA0N"
    },
    {
      Name: "APASO - Ile de France",
      recordID: "rec9DqzkcaZCLZoGB"
    },
    {
      Name: "APEC - Si\xE8ge",
      recordID: "rec2olaOrYazcDQT8"
    },
    {
      Name: "APELS (Agence pour l'\xE9ducation par le sport)  - Si\xE8ge",
      recordID: "recG0kDdYtQd8zknA"
    },
    {
      Name: "API Provence - R\xE9sidence Soleiado",
      recordID: "recgcw65Yjn1yDAWl"
    },
    {
      Name: "API Provence - Si\xE8ge",
      recordID: "recdUpXeBS1ubm0UU"
    },
    {
      Name: "API Provence - Si\xE8ge",
      recordID: "recXUl1Xny16hhw9m"
    },
    {
      Name: "APIJ BAT - Si\xE8ge",
      recordID: "recbzjh9aa7KAwzku"
    },
    {
      Name: "APIREF - Si\xE8ge",
      recordID: "recaJy0PJZu4VF96v"
    },
    {
      Name: "Apprentis d'Auteuil - Maisons des Familles",
      recordID: "recsJFvTNbZlXDHOv"
    },
    {
      Name: "Apprentis d'Auteuil - Marseille",
      recordID: "recjCqRcBq5tdqBCh"
    },
    {
      Name: "Apprentis d'Auteuil - Si\xE8ge",
      recordID: "recgJraeBALdz4gVX"
    },
    {
      Name: "Apprentis d\u2019Auteuil - Toulouse",
      recordID: "rec2gn6LibykIBHJJ"
    },
    {
      Name: "Approches Cultures & Territoires - Si\xE8ge",
      recordID: "recNRESKa6fg7qn5I"
    },
    {
      Name: "APPUIS - Haut-Rhin",
      recordID: "recIBiaFfNQIKtQds"
    },
    {
      Name: "Apr\xE9mis - Si\xE8ge",
      recordID: "recIKNcvKsEVMJRUe"
    },
    {
      Name: "APSA - CADA + HUDA Lens",
      recordID: "recvj9SagVosE5nnP"
    },
    {
      Name: "APSCO (Association Pour le Soutien Scolaire) - Si\xE8ge",
      recordID: "recujRU5H9py0OmDe"
    },
    {
      Name: "APTIMA - Si\xE8ge",
      recordID: "recpKILigBEEVNwvk"
    },
    {
      Name: "ARACT - Si\xE8ge",
      recordID: "recYdeKxv6tUjtDmx"
    },
    {
      Name: "ARCAL - Si\xE8ge",
      recordID: "recPlCBdjlPPsGFGU"
    },
    {
      Name: "Archipel Habitat - Si\xE8ge",
      recordID: "recK6AbOvg5EMbSRz"
    },
    {
      Name: "Archipelia - Si\xE8ge",
      recordID: "recLDgGh1lt58IEHE"
    },
    {
      Name: "Ar\xE9li - Lille",
      recordID: "rec0cWYaT42z698SP"
    },
    {
      Name: "Ares - Access",
      recordID: "rec8CJOSgWETNi4yC"
    },
    {
      Name: "Ares - Ares + Programme Adhoc",
      recordID: "recDIR4M1ljoTNa56"
    },
    {
      Name: "Ares - Ateliers Sans Fronti\xE8res",
      recordID: "recJetO38H3iLZFjo"
    },
    {
      Name: "Ares - Ateliers Sans Fronti\xE8res - Bonneuil sur Marne",
      recordID: "rechMxcvx0KP0yI2Z"
    },
    {
      Name: "Ares - Lyon",
      recordID: "recif8MzTvOT0YDk3"
    },
    {
      Name: "Ares - Mobil'Emploi",
      recordID: "recpp9PGufPws1V9l"
    },
    {
      Name: "Ares - Services 77",
      recordID: "recQ5EffgwSYeFIJz"
    },
    {
      Name: "Ares - Services Paris",
      recordID: "recKqdNxbGs02D02x"
    },
    {
      Name: "Ares - Si\xE8ge",
      recordID: "recEBhnRPNrE7OqlQ"
    },
    {
      Name: "Ares - Si\xE8ge",
      recordID: "recRylcKLfe5olM4a"
    },
    {
      Name: "ARI (Association R\xE9gionale pour l'Int\xE9gration) - Si\xE8ge",
      recordID: "recLvbqnJi5rINe8y"
    },
    {
      Name: "ARILE - CPH Atlas",
      recordID: "recoBI0QQB46k4Zal"
    },
    {
      Name: "ARILE - Ile de France - SIAO",
      recordID: "recSs1igEZbJwzTFR"
    },
    {
      Name: "Arm\xE9e du Salut - Cite refuge",
      recordID: "recZXXwawClAAqNjW"
    },
    {
      Name: "Arm\xE9e du Salut - Cite refuge - ACI CAPACITE",
      recordID: "recFWYaxSFaYjsZZQ"
    },
    {
      Name: "Arm\xE9e du Salut - CITE REFUGE - POLE ESS - ACI CAPACITE",
      recordID: "recZCnvW1Ut8Y1hsg"
    },
    {
      Name: "Arm\xE9e du Salut - CPH de Reims",
      recordID: "reckGnTSjezObuAWp"
    },
    {
      Name: "Arm\xE9e du Salut - Poste de Nice",
      recordID: "recMyZdEvzDMSkElc"
    },
    {
      Name: "Arm\xE9e du Salut - Si\xE8ge",
      recordID: "rectOS72OMxbyIBWv"
    },
    {
      Name: "Arm\xE9e du Salut - Terre de Femmes",
      recordID: "recfu2GoqzROfGbOV"
    },
    {
      Name: "ARS - CADA - Nancy",
      recordID: "rechy8V7LE0CJwM0r"
    },
    {
      Name: "ARS - CPH - Nancy",
      recordID: "recDRCSzTEiKoA4Gj"
    },
    {
      Name: "ARS - HUDA - Nancy",
      recordID: "recEC4HSzjt8MNQ3m"
    },
    {
      Name: "ARSEAA - CADA/CPH - SARDELIS",
      recordID: "recEVJypVucmjoqZl"
    },
    {
      Name: 'ARSEAA - P\xF4le social "Sardelis" (CADA HUDA CPH)',
      recordID: "rec2uhtzJ10VgDBBk"
    },
    {
      Name: "Article 13 - Si\xE8ge",
      recordID: "recds3nVXSBVFjT0B"
    },
    {
      Name: "ASCS - Association des Cit\xE9s du Secours Catholique",
      recordID: "recr8twCuphhiOdkh"
    },
    {
      Name: "ASD (Association de Soutien de la Dordogne) - CADA",
      recordID: "recQrBoY6LmBlzhXF"
    },
    {
      Name: "ASD (Association de Soutien de la Dordogne) - Si\xE8ge",
      recordID: "recaT2EdbSsvodByT"
    },
    {
      Name: "ASF (Association Sud Formation) - Si\xE8ge",
      recordID: "recLqwB7bTFWPVdYr"
    },
    {
      Name: "ASL - Ateliers du savoir sociolinguistique - Si\xE8ge",
      recordID: "recCoVZ6PN5spx6Zp"
    },
    {
      Name: "ASML/Syria - Si\xE8ge",
      recordID: "reca1wUrsSU38bJfs"
    },
    {
      Name: "Asslema Breizh - Si\xE8ge",
      recordID: "recitnjSdOUT69wvs"
    },
    {
      Name: "Association Accueil et Promotion Sambre - CADA de Haumont (R\xE9sidence Sociale Ex FTM)",
      recordID: "recempfcZAqtsGjmk"
    },
    {
      Name: "Association ASILE - Casp ATSA",
      recordID: "rec3b68YnbKCuR7us"
    },
    {
      Name: "Association ASILE - Si\xE8ge",
      recordID: "recw1s3L8yfdlQ5ZP"
    },
    {
      Name: "Association Carrefour - Si\xE8ge",
      recordID: "recpzwTV5lgvZCdcD"
    },
    {
      Name: "Association Catholique pour l\u2019Accueil et l\u2019Accompagnement des Migrants - Lyon",
      recordID: "recFZk9NaONuaTiMD"
    },
    {
      Name: "Association Culturelle Omid - Ile de France",
      recordID: "recl2UVhJtAsxJ8hq"
    },
    {
      Name: "ASSOCIATION D'AIDE AUX REFUGIES CHRETIENS DU MOYEN-ORIENT  -  Pau",
      recordID: "recGYtbikglpvBEpU"
    },
    {
      Name: "Association ELIA - Marseille",
      recordID: "rectTmUWYNjCUJFzu"
    },
    {
      Name: "Association Fedde Aamadu Hampaate Bah - Si\xE8ge",
      recordID: "recRByXHYOYSPx8Zs"
    },
    {
      Name: "Association Foyer Notre-Dame - Centre d'Insertion pour R\xE9fugi\xE9s",
      recordID: "recoKDj0r5EQZuI29"
    },
    {
      Name: "Association Foyer Notre-Dame - Strasbourg",
      recordID: "recssLE9Vh3OuDwMJ"
    },
    {
      Name: "Association Franco-Chinoise Pierre Ducerf - Si\xE8ge",
      recordID: "recO1E1ueNXHlFuNV"
    },
    {
      Name: "Association Habitat et Citoyennet\xE9 - Nice",
      recordID: "recRKjaOeM54Zy8W3"
    },
    {
      Name: "Association L'Atelier - Si\xE8ge",
      recordID: "recmF7U1qW2YCelyf"
    },
    {
      Name: "Association Les Eaux Vives - CADA 3 Rivi\xE8res",
      recordID: "recM8V90eWaWqA7kx"
    },
    {
      Name: "Association Liguey - Si\xE8ge",
      recordID: "recbh4M2YqkdKBEFu"
    },
    {
      Name: "Association Logement Pays d'Aix - Si\xE8ge",
      recordID: "rec31LH35jrdnCv47"
    },
    {
      Name: "Association Logivar - CHRS Toulon",
      recordID: "reckS4dxnY6oBFUHR"
    },
    {
      Name: "Association Maison Accueil - Si\xE8ge",
      recordID: "recFpauMwXwYUIME8"
    },
    {
      Name: "Association Mythes et R\xE9alit\xE9s sur l'Immigration. AMYRI - Nice",
      recordID: "reckPXr2wJD5KyBZU"
    },
    {
      Name: "ASSOCIATION NICE POUR L INTEGRATION ET LA SOLIDARITE (ANIS) - Nice",
      recordID: "recrYv1k1rG0nNfyw"
    },
    {
      Name: "Association Parabole - Si\xE8ge",
      recordID: "rec5gzdoJF5bMOoDt"
    },
    {
      Name: "Association PASSERELLE - Si\xE8ge",
      recordID: "rec1xjFsHmZJZqHQ0"
    },
    {
      Name: "Association pour la D\xE9mocratie \xE0 Nice et dans les Alpes Maritimes - Nice",
      recordID: "recDGA8gRs2ND71RZ"
    },
    {
      Name: "Association pour la R\xE9adaptation Sociale - CHRS",
      recordID: "recOlBNbiG9DYBgfU"
    },
    {
      Name: "Association pour la R\xE9adaptation Sociale - Si\xE8ge",
      recordID: "rec1RyAdjncujbf9n"
    },
    {
      Name: "Association Quatorze - Programme IMBY",
      recordID: "recJVOTc3Yvb9dq5i"
    },
    {
      Name: "Association Saint Beno\xEEt Labre (ASBL) - Si\xE8ge",
      recordID: "rec1OiGptjUNQ1pd9"
    },
    {
      Name: "Association Sant\xE9 Migrants Loire Atlantique (A.S.A.M.L.A) - Si\xE8ge",
      recordID: "recr4nC3DNd95wIBy"
    },
    {
      Name: "Association Vaudaise pour l\u2019Entraide dans La Cit\xE9 (AVEC) - Si\xE8ge",
      recordID: "recDfOLU2ce7W2gYi"
    },
    {
      Name: "Association VISA - Si\xE8ge",
      recordID: "recbBZzc0IStCMpWu"
    },
    {
      Name: "ASSOR Ozanam - Reims",
      recordID: "recbH2RPKV5tlYgWE"
    },
    {
      Name: "ASTI (Association de Solidarit\xE9 avec Tous les Immigr\xE9s) - Aix",
      recordID: "rec9xw6hAwxXx10BW"
    },
    {
      Name: "ASTI (Association de Solidarit\xE9 avec Tous les Immigr\xE9s) - Martigues",
      recordID: "rec5r4oFGsMLzre29"
    },
    {
      Name: "ASTI (Association de Solidarit\xE9 avec Tous les Immigr\xE9s) - Petit-Quevilly",
      recordID: "recomv3KZhC2J1hys"
    },
    {
      Name: "ASTI (Association de Solidarit\xE9 avec tous les Immigr\xE9s) - Si\xE8ge",
      recordID: "recunv8RCXGiaZiIC"
    },
    {
      Name: "ATD Quart Monde - Grenoble Alpes M\xE9tropole",
      recordID: "recSeDmdXABP1x0fK"
    },
    {
      Name: "ATD Quart Monde - Si\xE8ge",
      recordID: "recnXLfRjH2FCb7zw"
    },
    {
      Name: "ATE - CADA de Nice",
      recordID: "recArLo4l00PWVUuv"
    },
    {
      Name: "ATE - CPH de NICE",
      recordID: "recsEN2ine4Cq2eWh"
    },
    {
      Name: "Atelier CPH Bordeaux - Si\xE8ge",
      recordID: "recD5ZPQHpgGYC4qL"
    },
    {
      Name: "ATMF (Association des Travailleurs Maghr\xE9bins en France) - Si\xE8ge",
      recordID: "recwjjIsaN6cWK34r"
    },
    {
      Name: "Atouts Cours - Si\xE8ge",
      recordID: "rec4xdzvUVRbXFBnY"
    },
    {
      Name: "ATOUTS - Si\xE8ge",
      recordID: "rec3tA9wWPaOHDv7s"
    },
    {
      Name: "ATTAC - Si\xE8ge",
      recordID: "recpH0nBJI0NTJTb8"
    },
    {
      Name: "AUDASSE - CADA de Arass",
      recordID: "recihgyntleuAvrTV"
    },
    {
      Name: "AUDASSE - CPH de Arass",
      recordID: "recuzabvsBwhlbCJ9"
    },
    {
      Name: "AUDASSE - HUDA de Arras",
      recordID: "recqS4omjI8NmgpAb"
    },
    {
      Name: "AUF - Si\xE8ge",
      recordID: "rec9caG61zaUC50yl"
    },
    {
      Name: "Aurore - Accueil de Jour Paris",
      recordID: "recpAiU1ISg3xhx4Z"
    },
    {
      Name: "Aurore - ACI Les Jardins Biologiques",
      recordID: "rec7CZ2iudlTIpzIz"
    },
    {
      Name: "Aurore - CAIR",
      recordID: "recMwsnBL3vkVPyZ5"
    },
    {
      Name: "Aurore - Central",
      recordID: "recWm51yyFkvkcX1M"
    },
    {
      Name: "Aurore - CHRS",
      recordID: "recCryEBJ66fHVG0d"
    },
    {
      Name: "Aurore - Cinq Toits",
      recordID: "recWjOxvULlGNl6C1"
    },
    {
      Name: "Aurore - CPH de Nantes",
      recordID: "rec1lZFWGKglfby0s"
    },
    {
      Name: "Aurore - HUDA Antony",
      recordID: "rec4lLefUDiYauE2V"
    },
    {
      Name: "Aurore - HUDA MASSENA",
      recordID: "recPrxb6OySMx61Z8"
    },
    {
      Name: "Aurore - HUDA Mezy",
      recordID: "recE8mx7jA1SV0paD"
    },
    {
      Name: "Aurore - L'Epicerie Solidaire de Montreuil",
      recordID: "reclCM4cQbKJjBF9U"
    },
    {
      Name: "AURORE - Les Amarres - tiers lieux",
      recordID: "recmZk0ctPJJEbAbO"
    },
    {
      Name: "Aurore - Si\xE8ge",
      recordID: "rec4FZyyyqnRj8ibk"
    },
    {
      Name: "Aurore - Tous Mobilis\xE9s Tous Employables",
      recordID: "recWoj1f6MzuxQPBN"
    },
    {
      Name: "Aurore - Un Toit Un Emploi",
      recordID: "recxfqvTyLwFrkAJZ"
    },
    {
      Name: "Autre Monde - Si\xE8ge",
      recordID: "recCvNPt2loS2anRY"
    },
    {
      Name: "AUTRE - Si\xE8ge",
      recordID: "reccR6LWMJc4ecT1o"
    },
    {
      Name: "BA-BA13 - Si\xE8ge",
      recordID: "recgzCqqFQyX5rG2R"
    },
    {
      Name: "BAAM - Si\xE8ge",
      recordID: "recfyuQF8xHPO7iGk"
    },
    {
      Name: "Baluchon - Si\xE8ge",
      recordID: "rec7qP9vBqebndkla"
    },
    {
      Name: "Banque Alimentaire - Alpes Maritimes",
      recordID: "recvWRz2OfQu7oyPT"
    },
    {
      Name: "Banque Alimentaire - Si\xE8ge",
      recordID: "recTR1XNejTi5kpyl"
    },
    {
      Name: "Barreau de Paris - Si\xE8ge",
      recordID: "recZcKmeaBpJiKn1X"
    },
    {
      Name: "Bastina - Si\xE8ge",
      recordID: "recTi46JBtZVb1tVq"
    },
    {
      Name: "BATI ACTION - Si\xE8ge",
      recordID: "recQhv1cmCQD76Kfe"
    },
    {
      Name: "BATIFORM - Si\xE8ge",
      recordID: "recl4xV8YusdFijix"
    },
    {
      Name: "Batig\xE8re - Metz",
      recordID: "recCiOGySH26NK7CH"
    },
    {
      Name: "Batig\xE8re - Si\xE8ge",
      recordID: "recOUCAgWFhGOrhAI"
    },
    {
      Name: "Batik international - Si\xE8ge",
      recordID: "recDJSyyJMaz6RrDQ"
    },
    {
      Name: "BENENOVA - Si\xE8ge",
      recordID: "recmSYaqacP8ySPQa"
    },
    {
      Name: "Biblioth\xE8ques Sans Fronti\xE8res - Si\xE8ge",
      recordID: "recnlz8QlswEQn6W0"
    },
    {
      Name: "Bienvenue 64 - Pau",
      recordID: "recJzpEFNtrYJ429e"
    },
    {
      Name: "Bordeaux M\xE9diation - Si\xE8ge",
      recordID: "recTXHTK81C63gMHI"
    },
    {
      Name: "Bordeaux M\xE9tropole - Si\xE8ge",
      recordID: "recIvnnXkrVYwJClg"
    },
    {
      Name: "Bourgogne School of Business - Dijon",
      recordID: "recuPizoiUDLZzv1q"
    },
    {
      Name: "Brest M\xE9tropole - Si\xE8ge",
      recordID: "rec3KVH0Sa8xRN7P6"
    },
    {
      Name: "Bretagne D\xE9veloppement Innovation - Si\xE8ge",
      recordID: "recuL6VUw5gcrMyHa"
    },
    {
      Name: "Cabinet Vanhoutte - Si\xE8ge",
      recordID: "recztD5rN9hJlMCpK"
    },
    {
      Name: "CADA ADOMA Marseille - Si\xE8ge",
      recordID: "rec5MT7q5ayplWmFg"
    },
    {
      Name: "CADA MARCO POLO - Si\xE8ge",
      recordID: "rec71mpWvvC2pNlJI"
    },
    {
      Name: "CADA - Metz",
      recordID: "recvyU5YpU0ThpeKL"
    },
    {
      Name: "CADA - Quimperl\xE9",
      recordID: "recvn5syCCa2zRO04"
    },
    {
      Name: "CADA SARA - Si\xE8ge",
      recordID: "rec8A5MvoADui7OpH"
    },
    {
      Name: "CADE - Si\xE8ge",
      recordID: "recXaGPigbihh0GlK"
    },
    {
      Name: "Caf\xE9 Social - Si\xE8ge",
      recordID: "recNzRmWgUarO7N1s"
    },
    {
      Name: "CAIO Bordeaux (Centre d'Accueil d'Information et d'Orientation) - Self Emploi",
      recordID: "recrKjlWRJYh0Bkvf"
    },
    {
      Name: "CAIO Bordeaux (Centre d'Accueil d'Information et d'Orientation) - SIAO Gironde",
      recordID: "recc8G5hfjbDSdaiG"
    },
    {
      Name: "CAIO Bordeaux (Centre d'Accueil d'Information et d'Orientation) - Si\xE8ge",
      recordID: "recjAiBhNBiYCUZre"
    },
    {
      Name: "CAIR - Si\xE8ge",
      recordID: "recd65cWlgR2fVIiY"
    },
    {
      Name: "Campus France - Recherche",
      recordID: "reck2BTrop5tFFrlG"
    },
    {
      Name: "Cap Emploi - 33",
      recordID: "recCjX1PbR2pefIsd"
    },
    {
      Name: "Cap Jeunes Non Accompagn\xE9s - Si\xE8ge",
      recordID: "recS1CWdRMRp7uPHR"
    },
    {
      Name: "Cap Solidarit\xE9s - Si\xE8ge",
      recordID: "recWSfinnSM2hInmk"
    },
    {
      Name: "CAPB35 (Conf\xE9d\xE9ration de l\u2019Artisanat et des Petites Entreprises du B\xE2timent) - Si\xE8ge",
      recordID: "recxFCiDk5m4CiQ9U"
    },
    {
      Name: "CAPS (Comit\xE9 d'Action et de Promotion Sociale) - 76",
      recordID: "recf0B8ryCjFWj0jv"
    },
    {
      Name: "Caracol - Si\xE8ge",
      recordID: "rec1cbTTgCi4y2wBk"
    },
    {
      Name: "Carrefour des Solidarit\xE9s - Rouen",
      recordID: "recEZyoUi5PJ0vSbg"
    },
    {
      Name: "Carrefour des Solidarit\xE9s - Si\xE8ge",
      recordID: "recWsdVdyzpdSNCzt"
    },
    {
      Name: "Carton Plein - Si\xE8ge",
      recordID: "recXMTHKNwWIlFYEB"
    },
    {
      Name: "Casa Meteca  - Si\xE8ge",
      recordID: "reck9YjvMx4Uqzn16"
    },
    {
      Name: "CASA SOS - Si\xE8ge",
      recordID: "recC4HoJrJVai1Sod"
    },
    {
      Name: "CASAM - Metz",
      recordID: "recIS229ForNVL3Da"
    },
    {
      Name: "CASNAV - Si\xE8ge",
      recordID: "rec4llDgHYDyxEUUy"
    },
    {
      Name: "CASP (Centre d'Action Sociale Protestant) - CAFDA",
      recordID: "recT73BnqKV2bp2v0"
    },
    {
      Name: "CASP (Centre d'Action Sociale Protestant) - CPH 92 / Malakoff",
      recordID: "recBNaKeK1qiqqIlR"
    },
    {
      Name: "CASP (Centre d'Action Sociale Protestant) - Est",
      recordID: "recxtzNXFG81pqS0c"
    },
    {
      Name: "CASP (Centre d'Action Sociale Protestant) - FLE",
      recordID: "recnkjZ6i0Ls5o6J2"
    },
    {
      Name: "CASP (Centre d'Action Sociale Protestant) - HUDA 75 Jardin du Monde",
      recordID: "recGMdoxo716CcZPS"
    },
    {
      Name: "CASP (Centre d'Action Sociale Protestant) - Si\xE8ge",
      recordID: "rec4mKsy5lvpYdHJf"
    },
    {
      Name: "CASP (Centre d'Action Sociale Protestant) - Si\xE8ge",
      recordID: "recNKjkxklSouDL9F"
    },
    {
      Name: "Causons - Si\xE8ge",
      recordID: "recEe1mSQ8bhuJOXx"
    },
    {
      Name: "CCAS - Aix",
      recordID: "recob7wSpUKiPddsy"
    },
    {
      Name: "CCAS - Arras",
      recordID: "recXzuTZR6JkzGr8n"
    },
    {
      Name: "CCAS - Brest",
      recordID: "recAOyExAffihG4tm"
    },
    {
      Name: "CCAS - Brest-Point Kerros",
      recordID: "rec8NnOwump9RNCPX"
    },
    {
      Name: "CCAS (Centre Communal d'Action Social) - Centre Nantais d\u2019H\xE9bergement des R\xE9fugi\xE9s",
      recordID: "recBgPeWMs3NEItAx"
    },
    {
      Name: "CCAS (Centre Communal d'Action Social) - Metz",
      recordID: "recqyyfn6OgnTT43y"
    },
    {
      Name: "CCAS (Centre Communal d'Action Social) - Pau",
      recordID: "recx2TX6V03MmGBdE"
    },
    {
      Name: "CCAS (Centre Communal d'Action Social) - Petit Quevilly",
      recordID: "recxGP0m79JV8KEsi"
    },
    {
      Name: "CCAS (Centre Communal d'Action Social) - St Etienne du Rouvray",
      recordID: "recTFWlGcSYo85ly5"
    },
    {
      Name: "CCAS (Centre Communal d'Action Social) - Strasbourg",
      recordID: "recCiJe9oiFGUKo9S"
    },
    {
      Name: "CCAS (Centre Communal d'Action Social) - Tourcoing",
      recordID: "reclJUq00RBRI3ii9"
    },
    {
      Name: "CCAS - Concarneau",
      recordID: "reccX8ca9j2qTtMra"
    },
    {
      Name: "CCAS - Metz",
      recordID: "recH6H8fKG3PcrsZQ"
    },
    {
      Name: "CCAS - Montigny-L\xE8s-Metz",
      recordID: "recHkFCYSWEyX3eOn"
    },
    {
      Name: "CCAS - Nice",
      recordID: "recvVxt8SMft7WWII"
    },
    {
      Name: "CCAS - Point Keros",
      recordID: "rec3M7ZtUeX2EjCVA"
    },
    {
      Name: "CCAS - Rennes",
      recordID: "recKwfj1wuqYbnHsn"
    },
    {
      Name: "CCAS - Rouen",
      recordID: "reccnwOfUs2uFkdbK"
    },
    {
      Name: "CCAS - Thionville",
      recordID: "recv0jI4t41DwaPOm"
    },
    {
      Name: "CCAS - Unit\xE9 de travail social - Rouen",
      recordID: "recw1qztIXZ1AjwV8"
    },
    {
      Name: "CCAS - Vienne",
      recordID: "recZIT2ZzUGrH8eYg"
    },
    {
      Name: "CCAS - Villefontaine",
      recordID: "recd3hbcTBoNVEitK"
    },
    {
      Name: "CCEM - Si\xE8ge",
      recordID: "rec2keywN3iEoxmgJ"
    },
    {
      Name: "CCFD-Terre Solidaire - Nice",
      recordID: "recry0Y66T964La59"
    },
    {
      Name: "CCI - Rennes",
      recordID: "recwjZzRx0wKYdWjj"
    },
    {
      Name: "CCPS - HUDA",
      recordID: "recY2CehjvjSZpjwz"
    },
    {
      Name: "CDAD de Guyane (Conseils D\xE9partementaux de l'Acc\xE8s aux Droits) - Si\xE8ge",
      recordID: "rec7dWLulytyQIwxq"
    },
    {
      Name: "CDOS (Comit\xE9 D\xE9partemental Olympique et Sportif) - Seine-Saint-Denis",
      recordID: "recHo6109JDisFNOV"
    },
    {
      Name: "CDOS (Comit\xE9 D\xE9partemental Olympique et Sportif) - Seine Saint Denis",
      recordID: "rec7j0HZkxt2rmTJn"
    },
    {
      Name: "CDRIML (Coordination territoriale linguistique de Cergy) - Si\xE8ge",
      recordID: "recyZ8tFm2ysKuTKq"
    },
    {
      Name: "CEAS (Centre d'Etudes et d'Actions Sociales du Morbihan) - Si\xE8ge",
      recordID: "recAeN7maXVRLKUPq"
    },
    {
      Name: "CeCler - CADA",
      recordID: "recZXjr1MPoMX4NNt"
    },
    {
      Name: "CeCler - CPH",
      recordID: "rec9GD59EjQ9yIE7M"
    },
    {
      Name: "CeCler - HUDA",
      recordID: "recBEjVED3Jy4Rc9s"
    },
    {
      Name: "CeCler - Si\xE8ge",
      recordID: "recxrs3U7p56073tD"
    },
    {
      Name: "CEFIL - Si\xE8ge",
      recordID: "recor9goAhmokdLAg"
    },
    {
      Name: "Centrale Marseille - Si\xE8ge",
      recordID: "recun5au4qg6HZ9ri"
    },
    {
      Name: "Centre Cervantes - Si\xE8ge",
      recordID: "reck0mpER9c5ilzwt"
    },
    {
      Name: "Centre de formation professionnelle et CFA CLPS - Si\xE8ge",
      recordID: "rec7Uw5V40RUVzUOR"
    },
    {
      Name: "Centre Diaconal Marhaban - Si\xE8ge",
      recordID: "rechU2TyF6URJHIgU"
    },
    {
      Name: "Centre d\u2019Innovation pour l\u2019Emploi et le Reclassement Social (CIERES) - Si\xE8ge",
      recordID: "recKTT7BRHqV7MHk9"
    },
    {
      Name: "Centre Goethe - Si\xE8ge",
      recordID: "recAp22AOVSTfCUwv"
    },
    {
      Name: "Centre Populaire d\u2019Enseignement (CPE) - Si\xE8ge",
      recordID: "recSsYiC9FdulzzUv"
    },
    {
      Name: "Centre Social  - AGO / Goutte d'Or",
      recordID: "recsPoN8qdNBmkqAK"
    },
    {
      Name: "Centre Social  - Air Bel",
      recordID: "recDfoZlZxtXxu3ft"
    },
    {
      Name: "Centre Social  - Baussenque",
      recordID: "recPwyhrVBv3UV2V2"
    },
    {
      Name: "Centre Social  - Centre Social Bernard du Bois",
      recordID: "recV42zYMWdHievSu"
    },
    {
      Name: "Centre Social  - Centre Social Grand Antoine",
      recordID: "recta8ZToKpDYVHXV"
    },
    {
      Name: "Centre Social  - Centre Social Sainte Marthe",
      recordID: "recxOUVCcnBCaant0"
    },
    {
      Name: "Centre Social  - Centre Social Susini St-J\xE9r\xF4me La Renaude",
      recordID: "recQFFQO3EyFvzABh"
    },
    {
      Name: "Centre Social  - Confluence",
      recordID: "recYjKy7X5JYfESFB"
    },
    {
      Name: "Centre Social  - Del Rio",
      recordID: "recVqqJPrtlSQF9tc"
    },
    {
      Name: "Centre Social  - La Cabane \xE0 Projets",
      recordID: "recGTZNhBzjHjXket"
    },
    {
      Name: "Centre Social  - La Castellane",
      recordID: "recLhduDg8ZZOgIiv"
    },
    {
      Name: "Centre Social  - La castellane",
      recordID: "recvGrudbU7e21y2s"
    },
    {
      Name: "Centre Social  - Les Bourrely Notre Dame Limite",
      recordID: "reczBUieY8bRK7QF8"
    },
    {
      Name: "Centre Social  - Les Escourtines",
      recordID: "reczb5ZWJ1TUF2CDL"
    },
    {
      Name: "Centre Social  - Les oliviers",
      recordID: "reccGHye6ZdwHO4Sz"
    },
    {
      Name: "Centre Social  - Malpass\xE9",
      recordID: "reclXGLE4tZmf950i"
    },
    {
      Name: "Centre Social  - Mer et colline",
      recordID: "recK2Fkg8dWDycDig"
    },
    {
      Name: "Centre Social  - Mosa\xEFque",
      recordID: "rechUvCc388b5qe9A"
    },
    {
      Name: "Centre Social  - Pierre Miallet",
      recordID: "recoNC1ug7bzniVvc"
    },
    {
      Name: "Centre Social  - Relais 59",
      recordID: "rec29OoU3USO2hkTB"
    },
    {
      Name: "Centre Social  - Saint Gabriel",
      recordID: "recUXfvHiQTqcK4qt"
    },
    {
      Name: "Centre Social  - Val Plan B\xE9gudes",
      recordID: "recuIoJJgqnNd4SAt"
    },
    {
      Name: "Centre Socio-Culturel Albert Schweitzer - Si\xE8ge",
      recordID: "recGE2XeA3yrkBS0M"
    },
    {
      Name: "Centre Socio-Culturel Rail-Atac de Louvroil - Si\xE8ge",
      recordID: "recIwg8Z6EPjVdbdU"
    },
    {
      Name: "Cercle international de l'Arc - Si\xE8ge",
      recordID: "recrZ0SPuEeekvaH6"
    },
    {
      Name: "CESAM - Si\xE8ge",
      recordID: "recQYasjPItRCjB72"
    },
    {
      Name: "CFM BTP - Si\xE8ge",
      recordID: "recfFNPfwC5JnJD0C"
    },
    {
      Name: "CHAAM - Si\xE8ge",
      recordID: "recP9x6DPzTr87JW0"
    },
    {
      Name: "Chambre d'agriculture - Bretagne",
      recordID: "recOOhiNGRfutWFvA"
    },
    {
      Name: "Chambre d'agriculture - Gironde",
      recordID: "recGEvgxZVdpeJyft"
    },
    {
      Name: "Chantier Ecole - Si\xE8ge",
      recordID: "recE3uflDNd395NPV"
    },
    {
      Name: "Chantiers et Territoires Solidaires - Fonds de dotation - Vinci",
      recordID: "recpwEmPh82RujYuR"
    },
    {
      Name: "Charisma - Le Blanc-Mesnil",
      recordID: "recH0bsU2rJWHyEdy"
    },
    {
      Name: "CHRS ARS Marseille - Si\xE8ge",
      recordID: "recR1TrotxOsyzX3A"
    },
    {
      Name: "CHRS ARS Marseille - Si\xE8ge",
      recordID: "reck1A4UdyoLWm6J4"
    },
    {
      Name: "CHRS Jean Polidori  - CHRS Jean Polidori",
      recordID: "recFXw64ujMf0DSxI"
    },
    {
      Name: "CHRS La Chaumi\xE8re - Si\xE8ge",
      recordID: "recrKwbT4lTC1S6ZI"
    },
    {
      Name: "CHRS La Selonne (SAHIB) - Si\xE8ge",
      recordID: "recfrkI9QfdvYbb6Z"
    },
    {
      Name: "CHRS Marseille - Si\xE8ge",
      recordID: "recLN4iladqOWEZVg"
    },
    {
      Name: "CHRU - Covipsy29",
      recordID: "recFl5MF1SPewoAIL"
    },
    {
      Name: "CHU Brest - Drogue et addictions",
      recordID: "rec5o7aKR4Da7aueP"
    },
    {
      Name: "CHU Rennes - Si\xE8ge",
      recordID: "recABicrGI5Zg1nAr"
    },
    {
      Name: "CIBC33 - Si\xE8ge",
      recordID: "recc8NibKI6lQxK7Z"
    },
    {
      Name: "CICADE - Si\xE8ge",
      recordID: "recrhXoPbHzL5r0Zm"
    },
    {
      Name: "CIDFF - Aquitaine",
      recordID: "recYn0ihvXnwRnmr6"
    },
    {
      Name: "CIDFF - Arles",
      recordID: "recSKhrdQtJGD40jZ"
    },
    {
      Name: "CIDFF - Bouches-du-Rh\xF4ne Phoc\xE9en",
      recordID: "recLsz5N2n2cpJ4xW"
    },
    {
      Name: "CIDFF - Bretagne",
      recordID: "recyshcJW50tH6FBZ"
    },
    {
      Name: "CIDFF - PACA",
      recordID: "recWDtl0vwCdyi47w"
    },
    {
      Name: "CIDFF - Rh\xF4ne-Arc Alpin",
      recordID: "recmOJyKhBnR9UCxX"
    },
    {
      Name: "CIEP - Si\xE8ge",
      recordID: "recwEZk0vL8J85V2P"
    },
    {
      Name: "CITE LA MADELEINE (ACSC) - Toulouse",
      recordID: "recoxi3qDcgaml69e"
    },
    {
      Name: "Cit\xE9s Caritas - CHU Les Matelots",
      recordID: "recxDMKDz1bue2eE4"
    },
    {
      Name: "Cit\xE9s Caritas - CPH Saint-Yves",
      recordID: "recWJ2WZVEwfLDKA0"
    },
    {
      Name: "Cit\xE9s Caritas - CPH TRAJECTOIRE 94",
      recordID: "recPkiY6POkwpFiXt"
    },
    {
      Name: "Cit\xE9s Caritas - Grandes Carmes",
      recordID: "recPBawHQ02rYt0Yc"
    },
    {
      Name: "Cit\xE9s Caritas - Si\xE8ge",
      recordID: "reciFTZPQTU7dTSle"
    },
    {
      Name: "CLAP (Comit\xE9 de Liaison des Acteurs de la Promotion) - Si\xE8ge",
      recordID: "recAhcamqhw2f9EGF"
    },
    {
      Name: "CLLAJ Boutique Logement Jeunes - Metz",
      recordID: "recn8VJQBvwRCuUo4"
    },
    {
      Name: "CLPS (Centre de Formation pour Adulte) - Bretagne",
      recordID: "recGzEm1ICvGRmD7q"
    },
    {
      Name: "CLPS (Centre de Formation pour Adulte) - Rennes",
      recordID: "recZOeUbFK3R70CN9"
    },
    {
      Name: "CLPS (Centre de Formation pour Adulte) - Si\xE8ge",
      recordID: "recYZJ1lPwE3I9wYd"
    },
    {
      Name: "CMA (Chambre de M\xE9tiers et de l'Artisanat) - Rennes",
      recordID: "recQ1eq84Wi0ymKo7"
    },
    {
      Name: "CMAO (Coordination Mobile d'Accueil et d'Orientation) - Si\xE8ge",
      recordID: "recl6Si74WvrZqqfa"
    },
    {
      Name: "COALLIA - C.A.D.A. D' EVRY",
      recordID: "recpX2SyxKjBwFjAI"
    },
    {
      Name: "COALLIA - C.A.D.A. DE PORCHEVILLE",
      recordID: "recBqfadympABcmQT"
    },
    {
      Name: "COALLIA - C.A.D.A. DE SARTROUVILLE",
      recordID: "recRBCMzDonX3TDmF"
    },
    {
      Name: "COALLIA - C.A.D.A. DE ST GERMAIN EN LAYE",
      recordID: "recJ3hH8RJoRj1ppo"
    },
    {
      Name: "COALLIA - C.A.D.A. LIVRY GARGAN",
      recordID: "reczB3ed3epx4dORb"
    },
    {
      Name: "COALLIA - C.A.D.A. PIERREFITTE",
      recordID: "recLFuXujO1kbp8OX"
    },
    {
      Name: "Coallia - CADA Brest",
      recordID: "recW2uqSezmNGvhiZ"
    },
    {
      Name: "Coallia - CADA Compeigne",
      recordID: "rec90v0lyOPtYdadu"
    },
    {
      Name: "Coallia - CADA de Brest",
      recordID: "recHcC8LkSWrnVHLD"
    },
    {
      Name: "Coallia - CADA de Creil",
      recordID: "recorAKWZLTG1hLPM"
    },
    {
      Name: "Coallia - CADA de Livry-Gargan",
      recordID: "recgByD4tzDFUWI91"
    },
    {
      Name: "Coallia - CADA de Nanterre",
      recordID: "recqMGkWXoVamXCwC"
    },
    {
      Name: "Coallia - CADA de Noyon",
      recordID: "recUKkz0SNrBgbfPh"
    },
    {
      Name: "Coallia - CADA de Rouen",
      recordID: "recKkqkOHHp552ixF"
    },
    {
      Name: "Coallia - CADA de Tours",
      recordID: "recghrMjYwJ63ZYkQ"
    },
    {
      Name: "Coallia - CADA Meru",
      recordID: "recpQIWXRVVXbF9dt"
    },
    {
      Name: "Coallia - CADA Paris 14",
      recordID: "reccXLrmFgHnxCYp1"
    },
    {
      Name: "Coallia - CADA - St Die Des Vosges",
      recordID: "recGKpt6TbOygAlK2"
    },
    {
      Name: "Coallia - CAO Brest",
      recordID: "recGPzeWyUjLaAh93"
    },
    {
      Name: "Coallia - Central",
      recordID: "rechemeMeiseadwt3"
    },
    {
      Name: "Coallia - CPH 29",
      recordID: "rec531gIoCj5nF6wv"
    },
    {
      Name: "Coallia - CPH Colombes",
      recordID: "recW69LyV1vWLn7EQ"
    },
    {
      Name: "Coallia - CPH de Livry-Gargan",
      recordID: "rec8kY8QKQ5hAUHpg"
    },
    {
      Name: "Coallia - CPH de Somain",
      recordID: "rec9jp6VCEXgkfAuE"
    },
    {
      Name: "Coallia - CPH de Tours",
      recordID: "recVoiU8DmEnv0zyC"
    },
    {
      Name: "Coallia - CPH de Villeneuve-Saint-Georges",
      recordID: "recaLejA5lMiFFSq1"
    },
    {
      Name: "Coallia - CPH-Digne-les-Bains",
      recordID: "recZM4WWe1fuNBuNc"
    },
    {
      Name: "Coallia - CPH d'Ille-et-Vilaine",
      recordID: "rec8Low9JNk3tPiJx"
    },
    {
      Name: "Coallia - CPH d'Orl\xE9ans",
      recordID: "recsCakXPY29adc3g"
    },
    {
      Name: "Coallia - CPH du Val d'Oise",
      recordID: "rec8J2FV4btOHszW9"
    },
    {
      Name: "Coallia - CPH Malakoff",
      recordID: "rec0ZljtEMLmlGqMK"
    },
    {
      Name: "Coallia - HUDA",
      recordID: "recBVdtb5wBPxA6xy"
    },
    {
      Name: "Coallia - HUDA villeneuv-Saint-Georges",
      recordID: "rec3oODqBsgm8SCcG"
    },
    {
      Name: "Coallia - Montbard - R\xE9sidence Sociale de la Charme",
      recordID: "receaeNE5zDm3PmOV"
    },
    {
      Name: "Coallia - Plateforme d'accompagnement vers l'emploi",
      recordID: "recrYK6k0hc4bVPqT"
    },
    {
      Name: "Coallia - Rennes",
      recordID: "recnkR3CXXUwXh0nd"
    },
    {
      Name: "Coallia - R\xE9sidence Sociale Port de Commerce",
      recordID: "recgL6Qe2tDx1dBae"
    },
    {
      Name: "Coallia - Si\xE8ge",
      recordID: "recwhxIx0rougNfTe"
    },
    {
      Name: "Coallia - SPADA de Dijon",
      recordID: "rect0IQlCucIEDupM"
    },
    {
      Name: "Coallia - SPADA Evry",
      recordID: "recP932TGi9FDkoJa"
    },
    {
      Name: "CODES 30 (Comit\xE9 D\xE9partemental de l'Education pour la Sant\xE9 du Gard) - Si\xE8ge",
      recordID: "recirMKKRDdsYtWkn"
    },
    {
      Name: "COFRIMI - Si\xE8ge",
      recordID: "recKpePclOqSTJoul"
    },
    {
      Name: "Collectif AGIR - Si\xE8ge",
      recordID: "reciBkEf6fA4TDzw8"
    },
    {
      Name: "Collectif Humanit\xE9 Plouguerneau - Si\xE8ge",
      recordID: "rectGCMgFs2t1n5gv"
    },
    {
      Name: "Collectif inter associatif Toulouse - Si\xE8ge",
      recordID: "recdMn95bwoZtzQzc"
    },
    {
      Name: "Collectif Migrants bienvenu - Montpellier",
      recordID: "recsop3hP15BeyWMg"
    },
    {
      Name: "Collectif R\xE9fugi\xE9s - Si\xE8ge",
      recordID: "recKI0HDm5k502CqL"
    },
    {
      Name: "Collectif Solidarit\xE9 R\xE9fugi\xE9s Hennebont - Si\xE8ge",
      recordID: "recduwNYgtojXSaTw"
    },
    {
      Name: "Collectif soutien migrants 13  - Si\xE8ge",
      recordID: "recimskefyE8gkhJO"
    },
    {
      Name: "Coll\xE8ge de France - Programme PAUSE",
      recordID: "reclCpLpMLmrB4gHz"
    },
    {
      Name: "Colombbus - 10mentionWeb 91",
      recordID: "recTBjlfhTEAknkjT"
    },
    {
      Name: "Colombbus - 10mentionWeb 92",
      recordID: "rechgFDMHJb3VPRvF"
    },
    {
      Name: "Colombbus - Central",
      recordID: "rec1SHnbBT2eO4VTz"
    },
    {
      Name: "Comede - Si\xE8ge",
      recordID: "recqMsS24Qs794FvH"
    },
    {
      Name: "COMIT\xC9 DE PARRAINAGE DES FAMILLES DEMANDEURS D\u2019ASILE DU CANTON DE FIRMINY - Si\xE8ge",
      recordID: "recv8jQspBfadUnvU"
    },
    {
      Name: "Communaut\xE9 d'Agglom\xE9ration - Canteleu",
      recordID: "recmPip4v1xeXwbax"
    },
    {
      Name: "Communaut\xE9 d'Agglom\xE9ration - Roissy Pays de France",
      recordID: "recQ264xKoWXNPCyM"
    },
    {
      Name: "Communitywide Refugee Task Force - Si\xE8ge",
      recordID: "recgOZe7jEHlu8Olu"
    },
    {
      Name: "Compagnons B\xE2tisseurs - Si\xE8ge",
      recordID: "receXcxYSJBlFmaVT"
    },
    {
      Name: "Compagnons Du Devoir - Si\xE8ge",
      recordID: "recfEr7M62K9XWNuc"
    },
    {
      Name: "Confluences Marseille   - Si\xE8ge",
      recordID: "recfjBPdTJFEo07MU"
    },
    {
      Name: "Conseil d\xE9partemental des Landes - Accompagnement pour l'emploi des jeunes - Mont-de-Marsan",
      recordID: "rec71BTp3gtcm78Bk"
    },
    {
      Name: "Contacts  - Si\xE8ge",
      recordID: "recuauPb5YWTwotLh"
    },
    {
      Name: "Contre faits  - Photographie",
      recordID: "rec1wiY0jzzMF5esj"
    },
    {
      Name: "Coop\xE9ration et Famille - Si\xE8ge",
      recordID: "recXCME7FGKEAGjyB"
    },
    {
      Name: "Cooptalis - Si\xE8ge",
      recordID: "reckQiWp1O8UCVXY1"
    },
    {
      Name: "Cosmopolitaine - Plateforme Linguistique 31",
      recordID: "recpldFmKz5pCdJc4"
    },
    {
      Name: "Cosmopolitaine - Si\xE8ge",
      recordID: "recxDQuTIRIPiicf4"
    },
    {
      Name: "Coup de Soleil - Si\xE8ge",
      recordID: "recdx2rudxFXH7lt4"
    },
    {
      Name: "CPCV - Est",
      recordID: "recUaduEVYjRg0XWM"
    },
    {
      Name: "CPCV - Ile-de-France",
      recordID: "recftG495ZRGJJGkE"
    },
    {
      Name: "CPH La Caravelle Aubagne - Si\xE8ge",
      recordID: "rec9LgGRrYBGJGRpF"
    },
    {
      Name: "CPH La Caravelle Aubagne - Si\xE8ge",
      recordID: "rec3SkMCrzRkreZia"
    },
    {
      Name: "CREPI - Est - Antenne de Metz",
      recordID: "recM8kGMPa3utmZTB"
    },
    {
      Name: "CREPI - Est - Antenne de Nancy",
      recordID: "rec5hbxJhomj4em95"
    },
    {
      Name: "CREPI - Est - Antenne de Reims",
      recordID: "receW0NbeuxGjXag2"
    },
    {
      Name: "CREPI - Gironde",
      recordID: "rec0U9yDuxoBL8UeY"
    },
    {
      Name: "CREPI - Paris",
      recordID: "recsJiCOzJeO3kmIm"
    },
    {
      Name: "CREPI - Si\xE8ge",
      recordID: "rec2OF3km2VOjtodD"
    },
    {
      Name: "CRFP - Si\xE8ge",
      recordID: "recXwaFFNGlHdxtsi"
    },
    {
      Name: "Cridev 35 - Si\xE8ge",
      recordID: "recE9c7anC0wMDecf"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - 33",
      recordID: "recO1zL4NiMzFTlMG"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - APASO",
      recordID: "recJNQ2xkb2aWQgaV"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise -  Arras",
      recordID: "recRULQdsRDSSoOlh"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - Brest",
      recordID: "recPumlRPM5YrGfR3"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - Br\xE9tigny-sur-Orge (Trois Vall\xE9es)",
      recordID: "rec0HcsFCtUTDQyrY"
    },
    {
      Name: "Croix-Rouge fran\xE7aise - C.A.D.A. 77",
      recordID: "reclaUqAzqPX2nlpu"
    },
    {
      Name: "Croix-Rouge fran\xE7aise - C.A.D.A 94",
      recordID: "recIcVM6qwjHpYfq8"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - CADA 77",
      recordID: "rec6ElXoysmY8JSBE"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - CADA de Br\xE9tigny-sur-Orge",
      recordID: "recD4Op5FhNHdYvPg"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - CADA de Dijon",
      recordID: "recEJa7kpsmHFUSPh"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - CADA de Fleury les Aubrais",
      recordID: "recwGre860JUKLXhT"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - CADA d'Olivet",
      recordID: "rechxbun4OXCMI0eO"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - Centre d'Accueil Croix Rouge Fran\xE7aise",
      recordID: "recRHjhCLM1jToCOn"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - CHRS Avignon",
      recordID: "recCxgyGTFsM8vhx6"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - ESIRAS",
      recordID: "rec2SQWk8fWISg385"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - Finist\xE8re",
      recordID: "rect8aI5Gj1jq2GQr"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - HUDA 77",
      recordID: "recORz7nXzlVCqjEc"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - HUDA Fresnes",
      recordID: "rec55jW9YcTPW2DpB"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - HUDA H\xF4telier IDF",
      recordID: "rec1kR7F3MMxgdExA"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - HUDA L'Escale",
      recordID: "recCdjgLSzy4KHEki"
    },
    {
      Name: "Croix-Rouge fran\xE7aise - HUDA L'ESCALE",
      recordID: "recQXzvwP1Rxpwiau"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - HUDA Trappes",
      recordID: "recev4ieRvHzlWrGu"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - Impulse Toit",
      recordID: "recoeP8kN9L0R2bH6"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - Marseille",
      recordID: "rec8zcw3JbiIK1t9J"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - M\xE9tier et formation",
      recordID: "recsRpUPCnqUSNSxn"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - PAUH Roissy",
      recordID: "recoE5Bm2cc55OMwR"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - Programme IPeR ACTIFS 21 Dijon",
      recordID: "rec58Im73RUk3zjNc"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - Reims",
      recordID: "recezuGOTZMDQBztx"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - R\xE9tablissement des Liens Familiaux (RLF) de Paris",
      recordID: "recjPVSr3SvrIXyV8"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - Si\xE8ge",
      recordID: "recL4yuByrYCwez3C"
    },
    {
      Name: "Croix-Rouge Fran\xE7aise - Toulouse",
      recordID: "recIlMmvvQdjYOT9d"
    },
    {
      Name: "CROUS - Bordeaux",
      recordID: "recfOwdD4ru7RQ1yF"
    },
    {
      Name: "CROUS - Bordeaux FLE",
      recordID: "recTGqDNnLpbnAk5R"
    },
    {
      Name: "CROUS - Dijon",
      recordID: "rec8yJxuI4GHpnluD"
    },
    {
      Name: "CROUS - Rennes",
      recordID: "rec4xPeba1c8AqdIZ"
    },
    {
      Name: "CSC Endoume - Si\xE8ge",
      recordID: "recWLyTIDdh49tcrG"
    },
    {
      Name: "CSF de Lanester (Conf\xE9d\xE9ration Syndicale des Familles) - Si\xE8ge",
      recordID: "recKeYPCmavQP7rbu"
    },
    {
      Name: "DAR LAMIFA - Si\xE8ge",
      recordID: "recWCCCZabJ7ullrN"
    },
    {
      Name: "Daradja - Si\xE8ge",
      recordID: "rec56uwbVghf48RHY"
    },
    {
      Name: "DAVA - Rectorat de l'Academie de Paris (VAE sans Fronti\xE8res)",
      recordID: "recHl2vfbYFySgUMR"
    },
    {
      Name: "DAVA - Si\xE8ge",
      recordID: "reckPtOiA4GfN0Cam"
    },
    {
      Name: "DDCS - Finist\xE8re",
      recordID: "recMpDAFkT3ETjnXE"
    },
    {
      Name: "DDCS - Finist\xE8re",
      recordID: "recvv5DLRWHUaLbKX"
    },
    {
      Name: "DDCS - Pas de Calais",
      recordID: "reckCNxbnLUw5juzt"
    },
    {
      Name: "D\xE9clic Femmes - Si\xE8ge",
      recordID: "recLbxEzt9NokHwek"
    },
    {
      Name: "D\xE9fi M\xE9tiers - Ile de France",
      recordID: "rec3UWQe1ZSiVmzSk"
    },
    {
      Name: "D\xE9fi M\xE9tiers - Le p\xF4le formation",
      recordID: "reciuHaqXQRzB8w4c"
    },
    {
      Name: "D\xE9fi M\xE9tiers - Si\xE8ge",
      recordID: "recg5CPDgEAeqMFgg"
    },
    {
      Name: "D\xE9fis Emplois - Si\xE8ge",
      recordID: "recua9tdMG5zF1c1p"
    },
    {
      Name: "D\xE9fis Emplois - Si\xE8ge",
      recordID: "recwxnsSW1wGMb0nb"
    },
    {
      Name: "D\xE9partement - 13",
      recordID: "recsgrHvRT6Hbrw72"
    },
    {
      Name: "D\xE9partement du Nord - Si\xE8ge",
      recordID: "recMzoHx8UVs7LYkr"
    },
    {
      Name: "D\xE9partement - Gironde",
      recordID: "rec6ooC4u2jW7XWlU"
    },
    {
      Name: "D\xE9partement - Gironde DIDS",
      recordID: "rec2OVxRzprNlazhk"
    },
    {
      Name: "D\xE9partement - Ille et vilaine",
      recordID: "rec4kYX3Y5AfqvkEk"
    },
    {
      Name: "Destination Familles - Si\xE8ge",
      recordID: "recidtPsPnPUTdtPm"
    },
    {
      Name: "D\xE9velop'Ponts - Si\xE8ge",
      recordID: "recQzVrixizC0951G"
    },
    {
      Name: "Diaconat de Bordeaux - CHRS Mamr\xE9",
      recordID: "recKDy55abGZlK8U8"
    },
    {
      Name: "Diaconat de Bordeaux - Les capucins",
      recordID: "recpLZUwVIaghK3t5"
    },
    {
      Name: "Diaconat de Bordeaux - Other",
      recordID: "recqLp8k2VXcciH64"
    },
    {
      Name: "Diaconat de Bordeaux - S",
      recordID: "recNSW78PwcLxpqED"
    },
    {
      Name: "Diaconat de Bordeaux - Si\xE8ge",
      recordID: "recc20LLeLbedfCk8"
    },
    {
      Name: "DIAIR (D\xE9l\xE9gation interminist\xE9rielle \xE0 l'accueil et \xE0 l'int\xE9gration des r\xE9fugi\xE9s) - Si\xE8ge",
      recordID: "recXGjhW36y4z9FCM"
    },
    {
      Name: "D'Ici ou D'Ailleurs - Si\xE8ge",
      recordID: "recsWHqCc3v3K81er"
    },
    {
      Name: "Digemer - Si\xE8ge",
      recordID: "recfPIxu6po1IKSFs"
    },
    {
      Name: "Dioc\xE8se de Nantes - La Pastorale des Migrants",
      recordID: "recaFBFo7JmRXiLsN"
    },
    {
      Name: "Dioc\xE8se de Paris - Si\xE8ge",
      recordID: "recUWAaDIogA0FVwv"
    },
    {
      Name: "Direccte - Alpes de haute provence",
      recordID: "recwfBKrQZIu6Dv34"
    },
    {
      Name: "Direccte - Alpes Maritimes",
      recordID: "rec6ac075sjYIUe5k"
    },
    {
      Name: "Direccte - Bouches du rhone",
      recordID: "recfEscAoBwf1eaSl"
    },
    {
      Name: "Direccte - Charente",
      recordID: "recswbR3JMCFfQYze"
    },
    {
      Name: "Direccte - Charente Maritime",
      recordID: "rec5VXjU9Dw4SI3Fr"
    },
    {
      Name: "Direccte - Cotes d'Armor",
      recordID: "rec9b8Zvce3CJohHi"
    },
    {
      Name: "Direccte - Creuse",
      recordID: "recGGcrqgXbGhU42H"
    },
    {
      Name: "Direccte - Deux S\xE8vres",
      recordID: "recm9JvBkrniG51rc"
    },
    {
      Name: "Direccte - Dordogne",
      recordID: "recgmWwx5c0L5HXIr"
    },
    {
      Name: "Direccte - Gironde",
      recordID: "recClUEUbyZYFq6Zy"
    },
    {
      Name: "Direccte - Hauts de france",
      recordID: "recjQ1m3hU0VwUyeI"
    },
    {
      Name: "Direccte - Nouvelle aquitaine",
      recordID: "recXxcCwH7gsrSmnm"
    },
    {
      Name: "Direccte - PACA",
      recordID: "recM9EEBLBT4i5dzI"
    },
    {
      Name: "Direccte - PACA",
      recordID: "recidAbqjLhj882sd"
    },
    {
      Name: "Direccte - Seine saint denis",
      recordID: "reclOQMHH324TqCbd"
    },
    {
      Name: "Direccte - UD des hautes alpes",
      recordID: "recBTnlpw8GpSr0qE"
    },
    {
      Name: "Direccte - UD du Var",
      recordID: "recI3eQGq4vNOCysB"
    },
    {
      Name: "Direccte - Val-de-Marne",
      recordID: "recY2qUOLsLbJKpGq"
    },
    {
      Name: "Direccte - Val d'Oise",
      recordID: "recNcO6uvopcKQ7pd"
    },
    {
      Name: "Dom'Asile - Si\xE8ge",
      recordID: "rec07ubJKezfkfjbG"
    },
    {
      Name: "Dom'Asile - Versailles",
      recordID: "recG3znBCHTYWNxgH"
    },
    {
      Name: "Don Bosco - CHRS Emergence",
      recordID: "recERUQHEAYsdavzj"
    },
    {
      Name: "Don Bosco - Si\xE8ge",
      recordID: "recPWP1BPOyacmodx"
    },
    {
      Name: "DRJSCS - Hauts de France",
      recordID: "recOTJ2kTL7TPyFQx"
    },
    {
      Name: "Droit au Logement 35 - Si\xE8ge",
      recordID: "rec5DQffu1rfuHvtt"
    },
    {
      Name: "Drop de beton - Si\xE8ge",
      recordID: "recU1EpVXTeCi1xyM"
    },
    {
      Name: "Duo for a job - Duo for a job",
      recordID: "recSYl8OqriCqm4g1"
    },
    {
      Name: "Duo for a Job - Si\xE8ge",
      recordID: "recnJnC1dkEMPJ76X"
    },
    {
      Name: "each One - Alumni",
      recordID: "rec8WFiqdJTxGplPh"
    },
    {
      Name: "each One - AMU : Universit\xE9 d'Aix Marseille",
      recordID: "recH7KIAUx8xyhfI4"
    },
    {
      Name: "each One - BSB Dijon",
      recordID: "recyxtXmHfCcYlXkO"
    },
    {
      Name: "each One - Centrale Sup\xE9lec",
      recordID: "recvxEU5TJ4Pxncyx"
    },
    {
      Name: "each One - Dauphine",
      recordID: "rec1svqLkBHU60JYg"
    },
    {
      Name: "each One - ENIB",
      recordID: "recqvXI3v6cRVnNeX"
    },
    {
      Name: "each One - ESCP",
      recordID: "recrISBLV8h7VAlRz"
    },
    {
      Name: "each One - ESSEC",
      recordID: "recFwRnfVeUPDUPwX"
    },
    {
      Name: "each One - HEC",
      recordID: "recExSpNRCNHPzVZn"
    },
    {
      Name: "each One - IAE Gustave Eiffel",
      recordID: "recGLhFVzwX8LiqVl"
    },
    {
      Name: "each One - MINES ParisTech",
      recordID: "recqpgktmcR6sITwx"
    },
    {
      Name: "each One - Sciences Po Aix",
      recordID: "recCuafvPy2FqlQuj"
    },
    {
      Name: "each One - Sciences Po Bordeaux",
      recordID: "recdUXlIHgupo34Zb"
    },
    {
      Name: "each One - Sciences Po Lille",
      recordID: "reclXfNmY4mwwSNkP"
    },
    {
      Name: "each One - Sciences Po Paris",
      recordID: "rec0oenPZ3FjXncxD"
    },
    {
      Name: "each One - Sciences Po Rennes",
      recordID: "recoZGmKynqSQosy7"
    },
    {
      Name: "each One - Tim",
      recordID: "recQKj3vUts0kiufl"
    },
    {
      Name: "Ecodair - Si\xE8ge",
      recordID: "rec26OaBpJfIvA7o5"
    },
    {
      Name: "Ecole Christian Vabret - IDF",
      recordID: "recHYFn9CcHolKExP"
    },
    {
      Name: "Ecole de la Deuxi\xE8me Chance - E2C Paris",
      recordID: "recB4soGVertUq8mL"
    },
    {
      Name: "Ecole de la Deuxi\xE8me Chance - Grenoble",
      recordID: "recjS6ta5BMVs0Yiz"
    },
    {
      Name: "Ecole de la Deuxi\xE8me Chance - Montigny",
      recordID: "recuObHSLwocReuZj"
    },
    {
      Name: "Ecole de la Deuxi\xE8me Chance - Paris",
      recordID: "recNcoO1vULWKrqnc"
    },
    {
      Name: "Ecole de la Deuxi\xE8me Chance - Reims",
      recordID: "rec2FHYVt30HyV0Ws"
    },
    {
      Name: "Ecole de la Deuxi\xE8me Chance - Si\xE8ge",
      recordID: "rec2BYStU7DE0ItG2"
    },
    {
      Name: "Ecole de la Deuxi\xE8me Chance - Si\xE8ge",
      recordID: "recL9ldxhNRoawhBu"
    },
    {
      Name: "\xC9cole des droits de l'homme - Si\xE8ge",
      recordID: "recb36460RVfWVd6T"
    },
    {
      Name: "Ecole param\xE9dicale Jeanne Blum - Si\xE8ge",
      recordID: "recnpWBrXSMNxJY8Z"
    },
    {
      Name: "Education et formation - Si\xE8ge",
      recordID: "recEn7wINhjQLthci"
    },
    {
      Name: "Elan Interculturel - ARISE",
      recordID: "recw1w7RjqnY4hnna"
    },
    {
      Name: "Elan Interculturel - COMBO",
      recordID: "recu9gmpgX1m9T5xy"
    },
    {
      Name: "Elan Interculturel - Kaleidoscope",
      recordID: "recT4UJhjkSwccdDA"
    },
    {
      Name: "Elan Interculturel - LALI",
      recordID: "recAv0jUfirYnbGYL"
    },
    {
      Name: "Elan Interculturel - Migrapreneurs",
      recordID: "recEs7Cv3cCGKWyxE"
    },
    {
      Name: "Elan Interculturel - Real Path",
      recordID: "recIy1Y30qVP7bT2v"
    },
    {
      Name: "Elan Interculturel - Si\xE8ge",
      recordID: "recVV2yTQSXxqu0lx"
    },
    {
      Name: "Elan Interculturel - SMART",
      recordID: "recxRd0oGhTvLFNaJ"
    },
    {
      Name: "ELIA - Si\xE8ge",
      recordID: "recN2uBtKszSKvOwQ"
    },
    {
      Name: "ELIA - Si\xE8ge",
      recordID: "reclmfychbWS7eWbs"
    },
    {
      Name: "Emera - Si\xE8ge",
      recordID: "reccgD9vzA9pHmpJJ"
    },
    {
      Name: "Emergence - Si\xE8ge",
      recordID: "recmDSANLDMlt8SOt"
    },
    {
      Name: "EMF - Lille",
      recordID: "rec32iUjSQuE2UqIs"
    },
    {
      Name: "Emma\xFCs - Agir",
      recordID: "recKhezrwQkTTznZi"
    },
    {
      Name: "Emma\xFCs Alternatives - Si\xE8ge",
      recordID: "rec1JPOQnof5KmV93"
    },
    {
      Name: "Emma\xFCs - CHU",
      recordID: "recPz6j0aEt92x1jx"
    },
    {
      Name: "Emma\xFCs Connect - Marseille",
      recordID: "rec32n8wkuUBnLvjx"
    },
    {
      Name: "Emma\xFCs Connect - Si\xE8ge",
      recordID: "recCuA1qfKn8HsLlR"
    },
    {
      Name: "Emma\xFCs - Emma\xFCs La Friperie Solidaire",
      recordID: "reciIJSw1HLkP8ez2"
    },
    {
      Name: "Emma\xFCs - Insertion",
      recordID: "recwgFnqBvMR5FNah"
    },
    {
      Name: "Emma\xFCs - Pau",
      recordID: "recaFT9g91WbAmj8K"
    },
    {
      Name: "Emma\xFCs - Rennes",
      recordID: "recVmDkfY6LMWy8Sc"
    },
    {
      Name: "Emma\xFCs - Si\xE8ge",
      recordID: "reciatfOc99dLCqVo"
    },
    {
      Name: "Emma\xFCs Solidarit\xE9 - CADA de M\xE9rignac",
      recordID: "rec45BnZSc0Ch5NVF"
    },
    {
      Name: "Emma\xFCs Solidarit\xE9 - EMMAUS SOLIDARITE COMPETENCES",
      recordID: "rec6RZd3Z3w3jEMSJ"
    },
    {
      Name: "Emma\xFCs Solidarit\xE9 - Gironde",
      recordID: "recZXt6FUawK1j2kZ"
    },
    {
      Name: "Emma\xFCs Solidarit\xE9 - Logement",
      recordID: "recB5WPmyKiASVBWL"
    },
    {
      Name: "Emma\xFCs Solidarit\xE9 - Maison des R\xE9fugi\xE9s",
      recordID: "recEjCLT69Yn9iRgY"
    },
    {
      Name: "Emma\xFCs Solidarit\xE9 - Si\xE8ge",
      recordID: "recjSQSEFMBk6BkUb"
    },
    {
      Name: "Emma\xFCs - Toulouse",
      recordID: "recslLcvAnfZb9JcJ"
    },
    {
      Name: "EMPREINTES - Centre : CPH",
      recordID: "recpZEiLnEAdJFvJg"
    },
    {
      Name: "EMPREINTES - Episode",
      recordID: "recsQS69kiLhTuMXI"
    },
    {
      Name: "EMPREINTES - Episode",
      recordID: "recMD228BmrapjJqs"
    },
    {
      Name: "EMPREINTES - Si\xE8ge",
      recordID: "recQjV4AUDeTGxGFM"
    },
    {
      Name: "EMPREINTES - Si\xE8ge",
      recordID: "rec12hSym4bVC23Ri"
    },
    {
      Name: "Engage.world - Si\xE8ge",
      recordID: "rec6DiGY9glK1sqVY"
    },
    {
      Name: "ENS Ulm - Si\xE8ge",
      recordID: "rec0nElbMqcL4QDi9"
    },
    {
      Name: "Enterprise for Peace - Si\xE8ge",
      recordID: "recz1tnfwk9m4YRXN"
    },
    {
      Name: "Entraide Bordeaux Sud - Si\xE8ge",
      recordID: "recau8pp0fFt67G8n"
    },
    {
      Name: "Entraide et Amiti\xE9 - Si\xE8ge",
      recordID: "recQTVIMQUekKlRKg"
    },
    {
      Name: "Entraide et Solidarit\xE9s - Tours",
      recordID: "recG3EBgxvxYwHdp8"
    },
    {
      Name: "ENTRAIDE Pierre Valdo - CADA",
      recordID: "recymHnrg1WFFlAFI"
    },
    {
      Name: "ENTRAIDE Pierre Valdo - CPH",
      recordID: "recgJIq8YCpA5e1b4"
    },
    {
      Name: "ENTRAIDE Pierre Valdo - CPH Avignon",
      recordID: "recQEzbzmFTOlIKWF"
    },
    {
      Name: "ENTRAIDE Pierre Valdo - CPH Grenoble",
      recordID: "recFxK4vaIyzhR6Dw"
    },
    {
      Name: "ENTRAIDE Pierre Valdo - H\xE9bergement d'Urgence",
      recordID: "rec30VbXq5KLIdl64"
    },
    {
      Name: "ENTRAIDE Pierre Valdo - Lyon",
      recordID: "recjsCiRqfrO5I35K"
    },
    {
      Name: "ENTRAIDE Pierre Valdo - Mineurs Non Accompagn\xE9s",
      recordID: "recr0k992xjJWnhZO"
    },
    {
      Name: "ENTRAIDE Pierre Valdo - Saint-\xC9tienne",
      recordID: "recn5SUHQw3AxIBFQ"
    },
    {
      Name: "ENTRAIDE Pierre Valdo - Si\xE8ge",
      recordID: "rec3Hq4e9FDxzN2FF"
    },
    {
      Name: "Entraide Protestante - Toulouse",
      recordID: "recvOBtJa6UgvdG8Z"
    },
    {
      Name: "Entrepreneur du Monde - Si\xE8ge",
      recordID: "rec0HDru4w3eS2g5g"
    },
    {
      Name: "Envergure - Paris",
      recordID: "recjaOBb2zRkv33hF"
    },
    {
      Name: "Envergure - Si\xE8ge",
      recordID: "recNvTwf7soTJCNir"
    },
    {
      Name: "Eole - Si\xE8ge",
      recordID: "recP8B8jshT9NHMxe"
    },
    {
      Name: "EPDH ASSO - Si\xE8ge",
      recordID: "recqtw938QIdmqxLf"
    },
    {
      Name: "EPEC - Paris",
      recordID: "reciRpZE8CWumLCYY"
    },
    {
      Name: "EPFF - Si\xE8ge",
      recordID: "recFEMNmU3siVgTo2"
    },
    {
      Name: "Epicentre - Si\xE8ge",
      recordID: "recWzxLS9OU5ew2Ni"
    },
    {
      Name: "EPIDE (Etablissement pour l'Insertion dans l'Emploi) - 31",
      recordID: "recbLV0QzSc2Qa7Vi"
    },
    {
      Name: "EPIDE (Etablissement pour l'Insertion dans l'Emploi) - Si\xE8ge",
      recordID: "recktJCizHsw3uodN"
    },
    {
      Name: "EPSI (Ecole d'Informatique de Bordeaux) - Si\xE8ge",
      recordID: "reczD5e0fp8DDDGyr"
    },
    {
      Name: "Equalis - CADA 77",
      recordID: "recqrknTHkBXFWjjW"
    },
    {
      Name: "Equalis - CPH 77",
      recordID: "recSeFIrSTUwsYZQJ"
    },
    {
      Name: "Equalis - CPH 78",
      recordID: "recL1T0AtmQKqxVEg"
    },
    {
      Name: "Equalis - CPH Montevrain",
      recordID: "recLnDijrGe2WfURd"
    },
    {
      Name: "Equalis - ENTIT\xC9 H\xC9BERGEMENT / LOGEMENT 77",
      recordID: "recPfluC1CGvQuRof"
    },
    {
      Name: "Equalis - HUDA 78",
      recordID: "recmRAVwYOK3wN6SF"
    },
    {
      Name: "Equalis - HUDA 91",
      recordID: "recXUjFI4ftzddNfj"
    },
    {
      Name: "Equalis - HUDA de Bussy-Saint-Georges",
      recordID: "recliEviDZ1fx26sP"
    },
    {
      Name: "Equalis - HUDA Lisses",
      recordID: "rec0VidtnyKTV8xne"
    },
    {
      Name: "Equalis - HUDA-Orl\xE9ans",
      recordID: "recywl6flw5ifjCY1"
    },
    {
      Name: "Equalis - Int\xE9gration 77-45",
      recordID: "recP1K1hHAlxkUMvU"
    },
    {
      Name: "Equalis - SIAO 77-78",
      recordID: "recmHy3iNy15khe9R"
    },
    {
      Name: "Equalis - Si\xE8ge",
      recordID: "recy9c4t9xwNrhuX1"
    },
    {
      Name: "Equipes Saint Vincent - Toulouse",
      recordID: "recSr2q4KZD0cvKqD"
    },
    {
      Name: "Espace 19 - Si\xE8ge",
      recordID: "rec0IaeI6Jq0Ldv5j"
    },
    {
      Name: "ESPACE (Espace de Soutien aux Professionnels de l\u2019Accueil et du Conseil aux Etrangers) - Si\xE8ge",
      recordID: "rec3ONv1XnndS2epM"
    },
    {
      Name: "Espaces - Si\xE8ge",
      recordID: "recjbjQMsxMBsg4UM"
    },
    {
      Name: "Esperem - Si\xE8ge",
      recordID: "recfNy3yQ2HfBZw1w"
    },
    {
      Name: "Esperer - 95",
      recordID: "recE9ssUVeXKcre1h"
    },
    {
      Name: "ESPERER 95 - HUDA",
      recordID: "recCzpHfEQ9ayjlCS"
    },
    {
      Name: "ESPERER 95 - SIAO 95",
      recordID: "rec7mm7E4j1lhUKwe"
    },
    {
      Name: "ESPERER 95 - Si\xE8ge",
      recordID: "recHK4pEhx8rlyDl6"
    },
    {
      Name: "Esperer - PLATEFORME i-PRO",
      recordID: "reccBCl9wwE3KAxFZ"
    },
    {
      Name: "ESPERO - Si\xE8ge",
      recordID: "recMKuCGDMA01yQd4"
    },
    {
      Name: "ESPOIR - HUDA - Toulouse",
      recordID: "recWLMLbziBn2JQmx"
    },
    {
      Name: "ESSEC (\xC9cole sup\xE9rieure des sciences \xE9conomiques et commerciales ) - Paris",
      recordID: "recKPFornI9XB6es4"
    },
    {
      Name: "Essivam - Si\xE8ge",
      recordID: "recoDSg3ncxpxb2le"
    },
    {
      Name: "ESSOR - FLE",
      recordID: "rec4Wq4Ua3D4Cl3AS"
    },
    {
      Name: "Etap'Habitat - Grand-Est",
      recordID: "recvXfF4Zhcp5TPs8"
    },
    {
      Name: "Exilophone - Si\xE8ge",
      recordID: "recVSaQe1QVeKqEk8"
    },
    {
      Name: "Fabrique Nomade - Si\xE8ge",
      recordID: "recBT5k9jgra6mtOh"
    },
    {
      Name: "Fac m\xE9tiers   - Rennes",
      recordID: "recantaXE4Vp4x6R1"
    },
    {
      Name: "FACE - CADA",
      recordID: "recjwWKZXiXjasT0y"
    },
    {
      Name: "FACE - Central",
      recordID: "rec3YBIigfNPRLUhd"
    },
    {
      Name: "FACE - Grand Lyon",
      recordID: "recLlVpHIalkNHD4t"
    },
    {
      Name: "FACE - Ille-et-Vilaine",
      recordID: "recNwwKQy5t9GVGZS"
    },
    {
      Name: "FACE - Paris",
      recordID: "recGa6xDODxkyC9F7"
    },
    {
      Name: "FACE - Rennes",
      recordID: "recsB714b1GfbPahQ"
    },
    {
      Name: "FACE - Si\xE8ge",
      recordID: "recZSsiW05XXuuOei"
    },
    {
      Name: "FACE VAR - Si\xE8ge",
      recordID: "recczGpSweSk1qZ9A"
    },
    {
      Name: "FACE VAR - Toulon",
      recordID: "recPQGM58L8QJ53my"
    },
    {
      Name: "FAFTT - Si\xE8ge",
      recordID: "rec2gIpzSuJTY20U8"
    },
    {
      Name: "FAIRE - Si\xE8ge",
      recordID: "reczfw3yLyXtzCQgZ"
    },
    {
      Name: "FAS - Paris",
      recordID: "recz2QF1JlxrwyJye"
    },
    {
      Name: "FASTI (F\xE9d\xE9ration des Associations de Solidarit\xE9 avec Tou-te-s les Immigr\xE9-e-s) - CADA C\xF4tes d'Armor",
      recordID: "reck82ULbUii0PRxS"
    },
    {
      Name: "FASTI (F\xE9d\xE9ration des Associations de Solidarit\xE9 avec Tou-te-s les Immigr\xE9-e-s) - Si\xE8ge",
      recordID: "rectQLnKeR8rDJcBZ"
    },
    {
      Name: "FCPE - Communication",
      recordID: "recxsrIslmRdzuNqF"
    },
    {
      Name: "FCPE - Si\xE8ge",
      recordID: "recAZa5iaaj833lGa"
    },
    {
      Name: "F\xE9d\xE9ration des Acteurs de la Solidarit\xE9 - 13",
      recordID: "recWZRhjk9QMqcCDf"
    },
    {
      Name: "F\xE9d\xE9ration des Acteurs de la Solidarit\xE9 - Champagne-Ardenne",
      recordID: "recafPoox1g4RjZPN"
    },
    {
      Name: "F\xE9d\xE9ration des Acteurs de la Solidarit\xE9 - Grand-Est",
      recordID: "recdZBMcQYJiFhdkM"
    },
    {
      Name: "F\xE9d\xE9ration des Acteurs de la Solidarit\xE9 - IDF",
      recordID: "recLKHXSusd4T225Q"
    },
    {
      Name: "F\xE9d\xE9ration des Acteurs de la Solidarit\xE9 - Ile-de-France",
      recordID: "recrRsTwpoaYOqdIf"
    },
    {
      Name: "F\xE9d\xE9ration des Acteurs de la Solidarit\xE9 - Occitanie",
      recordID: "recpyoEN25UhfXIGy"
    },
    {
      Name: "F\xE9d\xE9ration des Acteurs de la Solidarit\xE9 - Si\xE8ge",
      recordID: "recTiKqv86G6dqXPy"
    },
    {
      Name: "F\xE9d\xE9ration des Acteurs de Solidarit\xE9 (FAS) - Si\xE8ge",
      recordID: "recEPJEQ2TGJUMk0i"
    },
    {
      Name: "F\xE9d\xE9ration du B\xE2timent et des Travaux Publics - Ille-et-Vilaine",
      recordID: "reck19dIovQcxdaMF"
    },
    {
      Name: "F\xE9d\xE9ration GAMS - Si\xE8ge",
      recordID: "recBpoFsGWA84mxjH"
    },
    {
      Name: "F\xE9d\xE9ration M\xE9dico-Sociale - CADA - Epinal",
      recordID: "recIoJlhoAhmourEL"
    },
    {
      Name: "F\xE9d\xE9ration M\xE9dico-Sociale - CADA - G\xE9rardmer",
      recordID: "rec2i5smQL1YFL22B"
    },
    {
      Name: "F\xE9d\xE9ration M\xE9dico-Sociale - HUDA - Epinal",
      recordID: "recNv7SIoJ22SzEbM"
    },
    {
      Name: "F\xE9d\xE9ration M\xE9dico-Sociale - Vosges",
      recordID: "recGsHh3cw6mtOiFZ"
    },
    {
      Name: "F\xE9d\xE9ration Nationale des CIDFF - Si\xE8ge",
      recordID: "rec4ZarwNkKMGBEwc"
    },
    {
      Name: "Femme Inter Associations (FIA)  - Rouen",
      recordID: "rec5lGKvVpM8N9TcK"
    },
    {
      Name: "Femmes de la Terre - Si\xE8ge",
      recordID: "recr82Kr0SrG9RDXh"
    },
    {
      Name: "Femmes d'ici et d'ailleurs - Si\xE8ge",
      recordID: "recMRw1WBWs9efZSU"
    },
    {
      Name: "FEP - Si\xE8ge",
      recordID: "recXKFu09ypjkPh7W"
    },
    {
      Name: "FEUILLE D'ERABLE - Si\xE8ge",
      recordID: "recOCrEMoJKMIN1wP"
    },
    {
      Name: "FIDE (Formation Insertion pour le D\xE9veloppement et l\u2019Emploi) - Si\xE8ge",
      recordID: "rec5U18Ytbl19fR8Y"
    },
    {
      Name: "FIPA - Si\xE8ge",
      recordID: "recv6BJjyzmBMtwpf"
    },
    {
      Name: "FISPE (Fran\xE7ais pour l'Insertion Social et Professionnelle en Europe) - Si\xE8ge",
      recordID: "recL4RE8YoUrhFPPg"
    },
    {
      Name: "FIT (Formation Insertion Travail) - Si\xE8ge",
      recordID: "recHxcCBaCPVNlLVt"
    },
    {
      Name: "FJFV - Espace de Dynamique Insertion TIPI",
      recordID: "recfypwj15PVonYwL"
    },
    {
      Name: "FLE & Compagnie - Si\xE8ge",
      recordID: "recwmFKGusUtdBNl7"
    },
    {
      Name: "FLE et Compagnie - Ile de France",
      recordID: "rec5fLwXeiY6XCKK4"
    },
    {
      Name: "FLE + - Si\xE8ge",
      recordID: "recdLlgbLQEuOKRh1"
    },
    {
      Name: "FLS (Fondation pour le Logement Social) - Si\xE8ge",
      recordID: "rec3Dmsy3NQwCZDh4"
    },
    {
      Name: "FNCIDFF - Si\xE8ge",
      recordID: "recMpx07tAKfZQBrY"
    },
    {
      Name: "FNMP (F\xE9d\xE9ration Nationale des Maisons des Potes) - Si\xE8ge",
      recordID: "rec2g2vTuz0IHT3fD"
    },
    {
      Name: "FNTP - Si\xE8ge",
      recordID: "recPx385C1eibwPO0"
    },
    {
      Name: "Focus/Agakan - Focus/Agakan",
      recordID: "recO7QkZ93vSC1Ydb"
    },
    {
      Name: "Fondation CMA-CGM - Fondation CMA-CGM",
      recordID: "recEaI2mwJ6zI0728"
    },
    {
      Name: "Fondation COS - CADA COS Les Sureaux",
      recordID: "rec8p8cl6BRsBbwUY"
    },
    {
      Name: "Fondation COS - CADA de Villenave D'Ornon",
      recordID: "recgeQjoZ2V5yU5PP"
    },
    {
      Name: "Fondation COS - CADA Isard",
      recordID: "rec4oHWcQNG1ijMh5"
    },
    {
      Name: "Fondation COS - CADA Quancard",
      recordID: "recFBbS9XwZspF3JH"
    },
    {
      Name: "Fondation COS - Central",
      recordID: "rec8i1hW6FI8vEgGa"
    },
    {
      Name: "Fondation COS - CPH Bordeaux",
      recordID: "rect8O3elHpqLcCX3"
    },
    {
      Name: "Fondation COS - CPH Isard",
      recordID: "recDQagWw3W3kJBo5"
    },
    {
      Name: "Fondation COS - CPH Mont-de-Marsan",
      recordID: "recCz9i7f390omK5C"
    },
    {
      Name: "Fondation COS - Maison Relai",
      recordID: "recd1lfx6UN1YdsSm"
    },
    {
      Name: "Fondation COS - Plateforme D\xE9partementale AIR : Gironde",
      recordID: "recrrXZ65qL3L5e5A"
    },
    {
      Name: "Fondation COS - Si\xE8ge",
      recordID: "recR9TXMHqvJe35oz"
    },
    {
      Name: "Fondation COS - Villenave d'Ornon - Foyer Claude Quancard",
      recordID: "recRWPds0zSN7WRLa"
    },
    {
      Name: "Fondation de Marseille - Fondation de Marseille",
      recordID: "rec2KYJxQZXRTCdCk"
    },
    {
      Name: "Fondation de Nice - CADA - Les vall\xE9es Nice",
      recordID: "rechJ1VSiIZOtr9MM"
    },
    {
      Name: "Fondation de Nice - Fondation de Nice - service migrants",
      recordID: "recd7oqr7XQdPMj5f"
    },
    {
      Name: "Fondation des Possibles - Si\xE8ge",
      recordID: "reciKqoAzISBPadsw"
    },
    {
      Name: "Fondation du Nord - Fondation du Nord",
      recordID: "recIBbJZ9EVvPxcrn"
    },
    {
      Name: "Fondation EDF - Fondation EDF",
      recordID: "recCH14FnuDpJB8AG"
    },
    {
      Name: "Fondation GRDF - Fondation GRDF",
      recordID: "recTdZXBrwAkuT9OQ"
    },
    {
      Name: "Fondation La France s'Engage - Si\xE8ge",
      recordID: "recKEMxAqu6RZkBi8"
    },
    {
      Name: "Fondation Mass\xE9-Tr\xE9vidy - CADA du sud Finist\xE8re",
      recordID: "recWRnwO1Ze8Go6Ar"
    },
    {
      Name: "Fondation Mass\xE9-Tr\xE9vidy - CHRS Le Jarlot",
      recordID: "recy7zIztvzsahzdn"
    },
    {
      Name: "Fondation Mass\xE9-Tr\xE9vidy - CHRS L'Escale",
      recordID: "recUpKjB3b92CG5wT"
    },
    {
      Name: "Fondation Primonial - Fondation Primonial",
      recordID: "recfKIgvowaqCWWik"
    },
    {
      Name: "Fondation Seltzer - CADA Nord 05",
      recordID: "recPw2ZmXlrEVIrLV"
    },
    {
      Name: "Fondation SJD - CHRS Fondation Saint Jean de Dieu",
      recordID: "recoq5YscfpRmDTdM"
    },
    {
      Name: "Fondation Up - Fondation Up",
      recordID: "rec38JLKwRoWqFBFs"
    },
    {
      Name: "Fondation Vinci - Fondation Vinci pour la Cit\xE9",
      recordID: "recRkX1IT3BAjnc8n"
    },
    {
      Name: "Force Femmes - Si\xE8ge",
      recordID: "recykfScUGWCrqR8J"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Accelair",
      recordID: "recC9enx28WTXrAnw"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Accelair 69 - Lyon 08",
      recordID: "recVnphlsE3LlElmJ"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Adamal",
      recordID: "rec5IWehkv3FNhHXt"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Centre de transit Lyon",
      recordID: "rec35fhoXtSRzhyqR"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Clermont-Ferrand",
      recordID: "rec0O5ko7A9bY76Dx"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - CPH",
      recordID: "recHmU8CLHK3GHcRP"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - HUDA Toulon",
      recordID: "reccRqyfxbgfuW6bK"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - HUDA - Toulouse",
      recordID: "recjKcK8g3CyvUzzG"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Lyon",
      recordID: "rec9UcOnz5mlQMQyn"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Marseille",
      recordID: "recjz1kMJepn4ZH9L"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Montpellier - Accelair 34",
      recordID: "recK1bDmbmnMBQzdV"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Plateforme de Nice",
      recordID: "recfbBFY1TOGfrhAs"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Prir 03",
      recordID: "recKOtfFUVLPqSHJL"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Si\xE8ge",
      recordID: "rec100redIf46kvkj"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Si\xE8ge",
      recordID: "recUrHkcjCE9PXrZw"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - SPADA de Marseille",
      recordID: "recPFynDAEUmC0N2u"
    },
    {
      Name: "Forum R\xE9fugi\xE9s - Toulouse",
      recordID: "recWj8uNmLNiUtX7j"
    },
    {
      Name: "Foyer Colson - Si\xE8ge",
      recordID: "rectE7jNUZuVBUSpM"
    },
    {
      Name: "Foyer des Jeunes Ouvriers - Metz",
      recordID: "recVeWAFQzZ0OMtbp"
    },
    {
      Name: "Foyer Mara\xE9 - Nancy",
      recordID: "recOzSXEK3M1ckTz0"
    },
    {
      Name: "Foyer Notre-Dame - Si\xE8ge",
      recordID: "recYzqsc5JPBjTXeQ"
    },
    {
      Name: "Fran\xE7ais Langue d'Accueil (FLA) - Si\xE8ge",
      recordID: "recHK6stsmUJvVjdu"
    },
    {
      Name: "France Fraternit\xE9s - Ile-de-France",
      recordID: "recwT0GSEIYzijSmD"
    },
    {
      Name: "France Horizon - CADA - Nancy",
      recordID: "recoBLOS1CL9urn3Z"
    },
    {
      Name: "France Horizon - CADA - Toulouse",
      recordID: "recXrTeqQUDQ8wjcP"
    },
    {
      Name: "France Horizon - CPH de VILLENEUVE ASCQ",
      recordID: "rechS6gSn7rIDfL0n"
    },
    {
      Name: "France Horizon - CPH Grenoble",
      recordID: "recAg1JgPHzKnd12m"
    },
    {
      Name: "France Horizon - CPH Pessac",
      recordID: "recZzMELG4ANNgMZa"
    },
    {
      Name: "France Horizon - Hauts-de-France",
      recordID: "recmL2kUukP5X8MRj"
    },
    {
      Name: "France Horizon - HUDA de Montmorency",
      recordID: "recT4x0Bcnr3sLvtm"
    },
    {
      Name: "France Horizon - HUDA - Toulouse",
      recordID: "recIHmFyKyTtWpKTb"
    },
    {
      Name: "France Horizon - Occitanie",
      recordID: "recfnomxvyelIp0bj"
    },
    {
      Name: "France Horizon - Pessac",
      recordID: "recZTpwkbARYbcUpK"
    },
    {
      Name: "France Horizon - Si\xE8ge",
      recordID: "recJjpt2DwWExj84z"
    },
    {
      Name: "France Terre d'Asile - 92",
      recordID: "recx4E8ghIsvmDnRC"
    },
    {
      Name: "France Terre d'Asile - Bureau du 18\xE8me",
      recordID: "rec5lvXWbPxEPvBl9"
    },
    {
      Name: "France Terre d'Asile - C.A.D.A. DE L'ORGE",
      recordID: "recxaIk6vjMEKS33w"
    },
    {
      Name: "France Terre d'Asile - C.A.D.A. DE MELUN",
      recordID: "recuCsj0nEvDnsyE6"
    },
    {
      Name: "France Terre d'Asile - C.A.D.A. FTDA ASNIERES",
      recordID: "recyPGdqtc2KuQ2bD"
    },
    {
      Name: "France Terre d'Asile - C.A.D.A. FTDA CHATILLON",
      recordID: "rec067JvYKZpBbnN9"
    },
    {
      Name: "France Terre d'Asile - C.A.D.A. SAINT DENIS",
      recordID: "recd0DgQDh4kGH2I1"
    },
    {
      Name: "France Terre d'Asile - C.A.D.A. STAINS",
      recordID: "recCXANfda3t0yuFi"
    },
    {
      Name: "France Terre D'Asile - CADA Clichy",
      recordID: "reck3u5VKW7G2uNbj"
    },
    {
      Name: "France Terre D'Asile - CADA D'ASNI\xC8RES-SUR-SEINE",
      recordID: "reccGJ0zTYVhxdRps"
    },
    {
      Name: "France Terre D'Asile - CADA de Caen",
      recordID: "recE3lYNQdKmBpGxr"
    },
    {
      Name: "France Terre D'Asile - CADA de Creil",
      recordID: "recSX2FmkmxR9BGmM"
    },
    {
      Name: "France Terre D'Asile - CADA de l'Orge",
      recordID: "recqj2CG4RBGE83Ux"
    },
    {
      Name: "France Terre D'Asile - CADA de Nantes",
      recordID: "recE39EGndN6EWMEs"
    },
    {
      Name: "France Terre D'Asile - CADA de Paris",
      recordID: "recTpZGdqjKVUciGl"
    },
    {
      Name: "France Terre D'Asile - CADA de Rouen",
      recordID: "rec4aNMxkO2QaKkUk"
    },
    {
      Name: "France Terre D'Asile - CADA de Saint-Denis",
      recordID: "rec4OH72BcnXzML1M"
    },
    {
      Name: "France Terre D'Asile - CADA de Toulon",
      recordID: "recqwGpEUXW4LlAh3"
    },
    {
      Name: "France Terre D'Asile - CADA des Hauts-de-Seine",
      recordID: "recw4TpIImUZC7KCs"
    },
    {
      Name: "France Terre D'Asile - CADA Hauts de Seine",
      recordID: "reclQVyqIxO33A5sI"
    },
    {
      Name: "France Terre D'Asile - CADA La Courneuve",
      recordID: "recnXBPKtaGce27A5"
    },
    {
      Name: "France Terre D'Asile - CADA Toulon",
      recordID: "recPIWopMYOW8VAsp"
    },
    {
      Name: "France Terre D'Asile - Centre Miguel Angel Estrella - Cr\xE9teil",
      recordID: "recO8obAW7zrggVNX"
    },
    {
      Name: "France Terre D'Asile - Christophe LONCA / FTDA Toulon",
      recordID: "recLBi5CJnondXyGX"
    },
    {
      Name: "France Terre D'Asile - CPH de Rouen",
      recordID: "rec06qSpx9FKM2WSM"
    },
    {
      Name: "France Terre D'Asile - DIEL : Dahar",
      recordID: "recMy7Ifvug0XyYrN"
    },
    {
      Name: "France Terre D'Asile - DPHRS Paris",
      recordID: "recti6Rr0PIKU0i1z"
    },
    {
      Name: "France Terre D'Asile - FTDA DIEL POLE INTEGRATION DES HAUTS DE SEINE",
      recordID: "recaAjXpKd6z466BD"
    },
    {
      Name: "France Terre D'Asile - HAI Paris",
      recordID: "recFzlsstQVebnwSq"
    },
    {
      Name: "France Terre D'Asile - HUDA Saint-Denis",
      recordID: "recITnXyfUwgRJFkw"
    },
    {
      Name: "France Terre D'Asile - Maison d'accueil et d'accompagnement vers l'autonomie pour mineurs isol\xE9s",
      recordID: "recpjLSvkPNHYiaZk"
    },
    {
      Name: "France Terre D'Asile - Maison du jeune r\xE9fugi\xE9",
      recordID: "recwVohlfTcpNDw3Y"
    },
    {
      Name: "France Terre D'Asile - Manche",
      recordID: "reclyLSKJiCbfYyjl"
    },
    {
      Name: "France Terre D'Asile - Projet RELOREF",
      recordID: "rec98cGD4YLa08hkd"
    },
    {
      Name: "France Terre D'Asile - Si\xE8ge",
      recordID: "rec5YDQvH7FM5uckj"
    },
    {
      Name: "France Terre d'Asile - Yvelines",
      recordID: "recOMwWNv2WQOfycI"
    },
    {
      Name: "France Ukraine News - Si\xE8ge",
      recordID: "rec66GYVcSnB2Ceey"
    },
    {
      Name: "FRATERNITE Belle de Mai - Si\xE8ge",
      recordID: "recuGwB4TNOvVIdqk"
    },
    {
      Name: "Fraternit\xE9 Mission Populaire - Si\xE8ge",
      recordID: "recNsiAM7L6Dvzfyt"
    },
    {
      Name: "Fr\xE9d\xE9ration Fran\xE7aise de Badminton - Si\xE8ge",
      recordID: "recf5j5PTabNwbakZ"
    },
    {
      Name: "Fr\xE8res Humains - Si\xE8ge",
      recordID: "recUwcEARigQzPzvy"
    },
    {
      Name: "Fringuette - Si\xE8ge",
      recordID: "recTPyW3Sn2Wcgoy7"
    },
    {
      Name: "FTCR (F\xE9d\xE9ration Tunisienne pour une Citoyennet\xE9 des Deux Rives) - Si\xE8ge",
      recordID: "recOAdNIV0FRGwxT9"
    },
    {
      Name: "GAF - Toulouse",
      recordID: "rec7KstS25V4u6tgH"
    },
    {
      Name: "Gasprom-asti (groupement d\u2019Accueil Promotion des travailleurs immigr\xE9s) - Si\xE8ge",
      recordID: "recjLnTf4SzHEl85U"
    },
    {
      Name: "G\xE9n\xE9ration 2 Citoyennet\xE9 Int\xE9gration - Si\xE8ge",
      recordID: "recOod6C9QfabYWbP"
    },
    {
      Name: "G\xE9n\xE9rations Solidaires - Val d'Oise",
      recordID: "recHipb9701L2D2Az"
    },
    {
      Name: "G\xE9n\xE9riques - Si\xE8ge",
      recordID: "recGmS9StZi3I3JI6"
    },
    {
      Name: "GEOSE - Groupement d'Employeurs du bassin d'emplois de Redon - Si\xE8ge",
      recordID: "rec3ZXGZxgT5SIVP0"
    },
    {
      Name: "Germae - Paris",
      recordID: "recazA5OlBLy1AG1X"
    },
    {
      Name: "GHSC - Groupe Hospitalier S\xE9clin Carvin - Si\xE8ge",
      recordID: "reccw0oRUXOUZoWhp"
    },
    {
      Name: "GIP Habitat et Interventions Sociales - Si\xE8ge",
      recordID: "rec9or4Y8RN7twLyp"
    },
    {
      Name: "Globenet - Si\xE8ge",
      recordID: "recZ6kp2A7ExVZW3C"
    },
    {
      Name: "GOTAF - Si\xE8ge",
      recordID: "recFrzJzE93XbpiJm"
    },
    {
      Name: "GRDR - Migration Citoyennet\xE9 D\xE9veloppement",
      recordID: "recSwnq9tOfDFd1Xb"
    },
    {
      Name: "GRDR - Rennes",
      recordID: "recxhs0dRnEbbm9xN"
    },
    {
      Name: "GREF - Groupement des \xE9ducateurs sans fronti\xE8res - PACA",
      recordID: "recGG6YYVo3NFtuLo"
    },
    {
      Name: "Grenoble-Alpes-M\xE9tropole - Rising (relais)",
      recordID: "rec2Q8TAD0LaKYk7w"
    },
    {
      Name: "Grenoble Ecole de Management - Si\xE8ge",
      recordID: "rec7ztfS4n63NE0lf"
    },
    {
      Name: "GRETA - 92",
      recordID: "recQzhN73DebZiwz8"
    },
    {
      Name: "GRETA - 94",
      recordID: "recBiFlEBEwII73oT"
    },
    {
      Name: "GRETA - Central",
      recordID: "rec6HClqOKD3eO47H"
    },
    {
      Name: "GRETA - Lorraine - Nord",
      recordID: "recavRERpEoSppWAI"
    },
    {
      Name: "GRETA - MTE 93",
      recordID: "recmSseYd01xywHfP"
    },
    {
      Name: "Groupe Actual - Si\xE8ge",
      recordID: "recZ8N1D4W3bovf42"
    },
    {
      Name: "Groupe SOS - ASSFAM Saint-Etienne",
      recordID: "recdEKtUv9yHzfcuq"
    },
    {
      Name: "Groupe SOS - ASSFAM Vienne",
      recordID: "recc1GeJXCE1aeKLQ"
    },
    {
      Name: "Groupe SOS - CADA de Bordeaux",
      recordID: "recCUknjhYihCxshu"
    },
    {
      Name: "Groupe SOS - CADA de Grand Dax",
      recordID: "recHXQqoiAEfLamRD"
    },
    {
      Name: "Groupe SOS - Cada de Grands Lacs",
      recordID: "rec31OFNKnIeykjpC"
    },
    {
      Name: "Groupe SOS - CADA de Gretz-Armainvilliers",
      recordID: "recaapPimaYMK3NYV"
    },
    {
      Name: "Groupe SOS - CADA de Lille",
      recordID: "rec6iULAlY08Yuake"
    },
    {
      Name: "Groupe SOS - CADA de Marseille",
      recordID: "recyyPs3fKDOQiLz7"
    },
    {
      Name: "Groupe SOS - CADA  de Paris",
      recordID: "recqDQu2bdvG7Ny5M"
    },
    {
      Name: "Groupe SOS - CADA de Rouen",
      recordID: "recJdKKFBJnTc6D9r"
    },
    {
      Name: "Groupe SOS - CADA Elisa",
      recordID: "recNkevZIXIJNad4s"
    },
    {
      Name: "Groupe SOS - CADA ELISA Montpellier",
      recordID: "reccxezjNFUiFE1gM"
    },
    {
      Name: "Groupe SOS - CADA Grand Dax",
      recordID: "rectDTJrsIe0gA8HB"
    },
    {
      Name: "Groupe SOS - Central",
      recordID: "recFgAzx8EpPeKYK0"
    },
    {
      Name: "Groupe SOS - Cohabitations Solidaires",
      recordID: "recKU1nbEH2MfjKDC"
    },
    {
      Name: "Groupe SOS - CPH Argenteuil-Bezons",
      recordID: "recPS8sso8QPYJwN5"
    },
    {
      Name: "Groupe SOS - CPH Boucle de Seine",
      recordID: "rec5akFYlrGCy86Ww"
    },
    {
      Name: "Groupe SOS - CPH de l'Essonne",
      recordID: "recGrMh4YQ1SCgtLc"
    },
    {
      Name: "Groupe SOS - CPH de Libourne",
      recordID: "recg1iiTMIMfkZrZX"
    },
    {
      Name: "Groupe SOS - CPH de Rouen",
      recordID: "recc45jk9AwP9mL8V"
    },
    {
      Name: "Groupe SOS - Groupe SOS",
      recordID: "recqieuXBqB1DEHof"
    },
    {
      Name: "Groupe SOS - H\xE9bergement Citoyen",
      recordID: "recgB5YTWnvDRLdtx"
    },
    {
      Name: "Groupe SOS - HUDA ALBERT EINSTEIN",
      recordID: "recPxBtzXusqoK4Gs"
    },
    {
      Name: "Groupe SOS - HUDA de Aulnay-sous-Bois",
      recordID: "recF7TS7DpZIZgzDe"
    },
    {
      Name: "Groupe SOS - HUDA de Paris",
      recordID: "recqL5xErBFSNHqlU"
    },
    {
      Name: "Groupe SOS - HUDA Orangis",
      recordID: "recwGCI1H7LGwFLTp"
    },
    {
      Name: "Groupe SOS - HUDA SOS Solidarit\xE9s Aulnay sous Bois",
      recordID: "recDvZ7vPr2RdTBFa"
    },
    {
      Name: "Groupe SOS - \xCEle-de-France - Accompagnement social",
      recordID: "recylbiztzLw11DAb"
    },
    {
      Name: "Groupe SOS - Le Fil d'Ariane",
      recordID: "rec3i0y290NSkh1mA"
    },
    {
      Name: "Groupe SOS - Lille - Accompagnement social",
      recordID: "recb8Cfl95JqdiJHU"
    },
    {
      Name: "Groupe SOS - PACA - Accompagnement social",
      recordID: "recKNDW4SMxXHJY35"
    },
    {
      Name: "Groupe SOS - Plateforme AIR 77",
      recordID: "recp48JrFXDI1V8Ad"
    },
    {
      Name: "Groupe SOS - Si\xE8ge",
      recordID: "rechlcSvwysfZg7DN"
    },
    {
      Name: "Groupe SOS - SIGNAL",
      recordID: "recHc8tXdhTLcm6UL"
    },
    {
      Name: "Groupe SOS - Solidarit\xE9s",
      recordID: "recxGzpULezWGRl35"
    },
    {
      Name: "Groupement d'Employeur pour l'Insertion et la Qualification dans les m\xE9tiers du BTP - BTP",
      recordID: "recbZ4SjZVHGLQzL7"
    },
    {
      Name: "Guyancourt Accueil - Si\xE8ge",
      recordID: "recr0uQZYNrHR9kvQ"
    },
    {
      Name: "Gymglish - Si\xE8ge",
      recordID: "recfSEKKraY35jyQ0"
    },
    {
      Name: "Habitat Alternatif Social - Avignon",
      recordID: "recscZOSKgnLU8RdC"
    },
    {
      Name: "Habitat Alternatif Social - Si\xE8ge",
      recordID: "reciTrzOfEwkHmWKb"
    },
    {
      Name: "Habitat & Humanisme - Bretagne",
      recordID: "recCG2x0MUOMw7aBq"
    },
    {
      Name: "Habitat & Humanisme - CPH Mont\xE9vrain",
      recordID: "recHadwiHYPx5RCRd"
    },
    {
      Name: "Habitat & Humanisme - Groupe HuMAIn",
      recordID: "recpxXQppJcLs3BNz"
    },
    {
      Name: "Habitat & Humanisme - Location Solidaire",
      recordID: "reclbDIbWYAM2fbVd"
    },
    {
      Name: "Habitat & Humanisme - Mise \xE0 l'abri Paris/Montreuil",
      recordID: "recvwV7yPYYtBTPUu"
    },
    {
      Name: "Habitat & Humanisme - Rh\xF4ne",
      recordID: "reczwHAwY7inZL8yh"
    },
    {
      Name: "Habitat & Humanisme - Si\xE8ge",
      recordID: "recNLpLc6LfTGkew1"
    },
    {
      Name: "Habitat pluriel - Marseille",
      recordID: "recENxSLlzN3WXxjT"
    },
    {
      Name: "Happy FLE - Fle pour grand d\xE9butant",
      recordID: "recko8ShjKQQDjHgc"
    },
    {
      Name: "HEC - Si\xE8ge",
      recordID: "rec93cb1674f6Txhi"
    },
    {
      Name: "Help Me Up - Si\xE8ge",
      recordID: "recLlwYf53u8kGwqS"
    },
    {
      Name: "Home des Flandres - Si\xE8ge",
      recordID: "rec01QID2Yn3ARvrg"
    },
    {
      Name: "Hors piste  - Si\xE8ge",
      recordID: "rectbKn3Nn6EBDlcx"
    },
    {
      Name: "Hospitalit\xE9 Saint-Martin - Si\xE8ge",
      recordID: "recM9oPJDPaLPhycd"
    },
    {
      Name: "HPF - CADA",
      recordID: "rec6hVe1LWdssvoQW"
    },
    {
      Name: "HPF CADA Marseille - Si\xE8ge",
      recordID: "recHinu9FgC3Btybw"
    },
    {
      Name: "HPF CADA Marseille - Si\xE8ge",
      recordID: "rec2cOQlvWrYDGrYo"
    },
    {
      Name: "HPF - CHRS Hospitalit\xE9 pour les Femmes (HPF)",
      recordID: "reccZuFVxsVZRBPtp"
    },
    {
      Name: "Hub de la R\xE9ussite - Si\xE8ge",
      recordID: "recc9mdfJ10iT5rut"
    },
    {
      Name: "Humando - agence d'int\xE9rim",
      recordID: "recT8NkqReCprQpKD"
    },
    {
      Name: "Humando - Comp\xE9tences \u2013 Agence Inclusive",
      recordID: "recGpPWESfNCpXatd"
    },
    {
      Name: "Humando - Comp\xE9tences \u2013 \xAB La Main, le Coeur, la T\xEAte \xBB",
      recordID: "recWZUNVwjQjG8RrY"
    },
    {
      Name: "Humando - Comp\xE9tences \u2013 Lotus",
      recordID: "rechATRo6DDfuSKcH"
    },
    {
      Name: "Humando - Insertion Boulogne",
      recordID: "recExb1ivMAIezU4E"
    },
    {
      Name: "Humando - Insertion BTP",
      recordID: "recMpClscNvo5DoSJ"
    },
    {
      Name: "Humando - Insertion Clichy",
      recordID: "recIitBpYAnZnSnsX"
    },
    {
      Name: "Humando - Insertion Industrie & Services",
      recordID: "recDk3uHeKN48a2MR"
    },
    {
      Name: "Humando - Insertion JOP",
      recordID: "recHhVytMxFyXTGTe"
    },
    {
      Name: "Humando - Insertion Massy",
      recordID: "rec2tgBc6dnDEWASC"
    },
    {
      Name: "Humando - Insertion Pantin",
      recordID: "recqCOlf2JBoEeCtz"
    },
    {
      Name: "Humando - Insertion Paris 1",
      recordID: "recQ1pubpGayj4lcb"
    },
    {
      Name: "Humando - Insertion Paris 11",
      recordID: "recudfYvuWQ782u8S"
    },
    {
      Name: "Humando - Insertion Sartrouville",
      recordID: "recUyiD02VhrGMONm"
    },
    {
      Name: "Humando - Insertion Tertiaires & Services",
      recordID: "recrwNvPq9jc9YoLN"
    },
    {
      Name: "Humando - Insertion Villejuif",
      recordID: "recmZbVzYumPLVdHc"
    },
    {
      Name: "Humando - Pluriels",
      recordID: "rec1oUEu6zirzfCLQ"
    },
    {
      Name: "Humando - Projet Lotus",
      recordID: "recdmsKQZHDCDbw6q"
    },
    {
      Name: "Humans for Women - Si\xE8ge",
      recordID: "recoue6JzVy29a8x0"
    },
    {
      Name: "Ibep Formation - Si\xE8ge",
      recordID: "recjqu6rpBfbjr37a"
    },
    {
      Name: "ICART - Toulouse",
      recordID: "recozSvxtDqK9oiJu"
    },
    {
      Name: "ICEO Brest - Si\xE8ge",
      recordID: "recJhTY1JDvHwu5Ol"
    },
    {
      Name: "ICFA - Si\xE8ge",
      recordID: "rec9sDWSbYyc2wzmM"
    },
    {
      Name: "ID Formation  - Si\xE8ge",
      recordID: "rec3uI672pEN19d3W"
    },
    {
      Name: "IDC Formation - Si\xE8ge",
      recordID: "recYT22nNDHny7tSz"
    },
    {
      Name: "IDEFLE - Si\xE8ge",
      recordID: "recTyVhy6FZMmqpAC"
    },
    {
      Name: "IFAC - Centre social Julien",
      recordID: "recxRPWplfKtPRWYe"
    },
    {
      Name: "IFAC - Centre social Tivoli",
      recordID: "recHIZuCcu6rzQycq"
    },
    {
      Name: "IFAC - Si\xE8ge",
      recordID: "rec1uZsHnsOgnFhI9"
    },
    {
      Name: "IFRA - Formation continue",
      recordID: "reckzNGp8uK2wPFUC"
    },
    {
      Name: "Illetrisme - PACA",
      recordID: "recmcVnyHqOZMacUa"
    },
    {
      Name: "Imaje Sant\xE9 - Si\xE8ge",
      recordID: "recmBSZvFQrumw1bH"
    },
    {
      Name: "Impact Formation - Si\xE8ge",
      recordID: "recAG26LLZynRW423"
    },
    {
      Name: "Imported item 1868",
      recordID: "rec4wvnuSvFLs5pQv"
    },
    {
      Name: "ImpulseR  - Gironde",
      recordID: "rect2ddB0X7TGeGs2"
    },
    {
      Name: "INALCO - Al-Wissal",
      recordID: "reczUa96F33lzX2tu"
    },
    {
      Name: "INCO Academy - Get Into Tech",
      recordID: "recjaeubgpmVoeBUN"
    },
    {
      Name: "Indigo - Si\xE8ge",
      recordID: "recJDK9I6KBoyHokH"
    },
    {
      Name: "Inflechir Paris 4 - Si\xE8ge",
      recordID: "reccjdgYbLjEmr7GX"
    },
    {
      Name: "INFREP - Paris",
      recordID: "recZa2CpDsjqG22xs"
    },
    {
      Name: "INFREP - Si\xE8ge",
      recordID: "recKyEvSdPnME2ESj"
    },
    {
      Name: "Insertion R\xE9fugi\xE9s - Diaconat Protestant - Si\xE8ge",
      recordID: "reckBdyZRRj775f3A"
    },
    {
      Name: "Insertion solidarit\xE9 autonomie - Si\xE8ge",
      recordID: "recydp4pcKWSihVZR"
    },
    {
      Name: "Institut Catholique - Lille",
      recordID: "recRyDZO5IU3YGB2u"
    },
    {
      Name: "Institut Catholique - Paris",
      recordID: "recpbCD4RGq6tV8lC"
    },
    {
      Name: "Institut de l'Engagement - National",
      recordID: "recIOWQVeB3TVUB2a"
    },
    {
      Name: "Inter CARIF OREF - National",
      recordID: "recm9Buhg0FGzxhoH"
    },
    {
      Name: "IREV - Hauts de France",
      recordID: "recnKYCQK532wuxqt"
    },
    {
      Name: "Iris Formation  - Si\xE8ge",
      recordID: "recupQIKJ6UrfOf4h"
    },
    {
      Name: "ISM - Interservices migrants m\xE9diterran\xE9e - Traduction",
      recordID: "recxeul2iAzHgOGwG"
    },
    {
      Name: "ISMM - Montesori",
      recordID: "rec6SjxnpgH3wDXAy"
    },
    {
      Name: "ISP FORMATION - Si\xE8ge",
      recordID: "recnOR9C8Un5eK4XZ"
    },
    {
      Name: "J2P - Si\xE8ge",
      recordID: "recJq1LiYNzmvml1l"
    },
    {
      Name: "Jamais Seul - CHRS de Reims",
      recordID: "rec56AbuZQ5nxYcXP"
    },
    {
      Name: "Jane Pannier - CADA",
      recordID: "recol0A9zMNNFyjeg"
    },
    {
      Name: "J'apprends - Cours de FLE",
      recordID: "recamPSUOJn5MPvQU"
    },
    {
      Name: "JCEF (Jeune Chambre Economique Fran\xE7aise) - Antenne locale de Paris",
      recordID: "rec2QmiOr2oNoUtVM"
    },
    {
      Name: "JCEF (Jeune Chambre Economique Fran\xE7aise) - Bordeaux",
      recordID: "recjuDpkVQe85kbGU"
    },
    {
      Name: "JCEF (Jeune Chambre Economique Fran\xE7aise) - Si\xE8ge",
      recordID: "rec42l16F1bFO5LJg"
    },
    {
      Name: "Job4mi - Si\xE8ge",
      recordID: "recnnukhOW0bAswD8"
    },
    {
      Name: "JRS France - Bordeaux",
      recordID: "recQnULJOwkgnbyta"
    },
    {
      Name: "JRS France - Ecole de Fran\xE7ais",
      recordID: "recr4z9sDrw0erLkF"
    },
    {
      Name: "JRS France - Emploi Formation",
      recordID: "recXWRmjB9fhI1QtZ"
    },
    {
      Name: "JRS France - FLE",
      recordID: "reckAzkRYHxmgwnuj"
    },
    {
      Name: "JRS France - Marseille",
      recordID: "reclWOzzlOdFKFK5E"
    },
    {
      Name: "JRS France - Nantes",
      recordID: "recuWNQzru0Er98cy"
    },
    {
      Name: "JRS France - Nice",
      recordID: "recOFNtAEwSt9ST3h"
    },
    {
      Name: "JRS France - Orl\xE9ans",
      recordID: "reciPADX0ldMTGPG0"
    },
    {
      Name: "JRS France - Saint-\xC9tienne",
      recordID: "recHn1bpnSHY251MW"
    },
    {
      Name: "JRS France - Si\xE8ge",
      recordID: "recCmV69K8XlhjJqG"
    },
    {
      Name: "JRS France - Tours",
      recordID: "rectZGyw53o8TMQNO"
    },
    {
      Name: "JRS France - Welcome Metz",
      recordID: "reccwZcO1UCSYfbMl"
    },
    {
      Name: "Kabubu - FIT",
      recordID: "receZhx928TywvVkE"
    },
    {
      Name: "Kabubu (insertion sport) - Kabubu (insertion sport)",
      recordID: "recN74viS9MQUWl4b"
    },
    {
      Name: "Kabubu - Si\xE8ge",
      recordID: "reccHnXJ0W1IMwi2e"
    },
    {
      Name: "KIPAWA - Marseille",
      recordID: "rec2JRl2Hmi9nkFtA"
    },
    {
      Name: "KleeGroup - Si\xE8ge",
      recordID: "recgwQUNBHkUGyFde"
    },
    {
      Name: "Kodiko - Central",
      recordID: "rec9dT6iKP2pAJnns"
    },
    {
      Name: "Kodiko - \xCEle-de-France",
      recordID: "recuwtC7Uebn3VtlQ"
    },
    {
      Name: "Kodiko - Rennes",
      recordID: "recbVVmPOcHcZebi5"
    },
    {
      Name: "Kodiko - Si\xE8ge",
      recordID: "recSQKxaoXRwR0HvB"
    },
    {
      Name: "Kodiko - Strasbourg",
      recordID: "recTfC8OrV3cCo6UW"
    },
    {
      Name: "Kodiko - Tours",
      recordID: "rec77VOUaALKkWdtV"
    },
    {
      Name: "Kolone - Si\xE8ge",
      recordID: "rech60u2HAIQsCwbK"
    },
    {
      Name: "Konexio - DigiStart",
      recordID: "recMRqimFAVxJUTo0"
    },
    {
      Name: "Konexio - Digit'All",
      recordID: "recKeApFfEWtnSA0m"
    },
    {
      Name: "Konexio - Formation",
      recordID: "recWu4Gasrk77M7b2"
    },
    {
      Name: "Konexio - Konexio",
      recordID: "reciqYTFBH2GHo5qv"
    },
    {
      Name: "Konexio - Paris",
      recordID: "reciQ8uuTsjXxJQ9W"
    },
    {
      Name: "Konexio - Programme Digital - Avanc\xE9",
      recordID: "recY43P8TvMQpt3zc"
    },
    {
      Name: "Konexio - Programme Digital - D\xE9butant",
      recordID: "recmd7XrjoI95Lhsg"
    },
    {
      Name: "Konexio - Programme Digital - Interm\xE9diaire",
      recordID: "recIxm9dPNlaJlz2L"
    },
    {
      Name: "Konexio - Programme DigiTous",
      recordID: "recHWWXjxl9CjJ8Ig"
    },
    {
      Name: "Konexio - TSSR",
      recordID: "rec1sxLL7mk5Z4gS6"
    },
    {
      Name: "La Banque Postale - Bureau St Maur",
      recordID: "recyTGbCSY75Syces"
    },
    {
      Name: "La Banque Postale - Si\xE8ge",
      recordID: "recUcGZ55cdvp4rW2"
    },
    {
      Name: "La brique - Arras",
      recordID: "recM1biT0dzzEQZKm"
    },
    {
      Name: "La Caravelle - CADA",
      recordID: "reclbscBTXHuzfgT2"
    },
    {
      Name: "La Caravelle - CPH Marseille",
      recordID: "recadriwfE6lOrHTZ"
    },
    {
      Name: "La Caravelle Marseille - Si\xE8ge",
      recordID: "recJjUD03tNCksBKB"
    },
    {
      Name: "La Caravelle Marseille - Si\xE8ge",
      recordID: "recK5KxRhFIK6XrL4"
    },
    {
      Name: "La Caravelle Marseille - Si\xE8ge",
      recordID: "recncrjDKnTOxRuhu"
    },
    {
      Name: "La Caravelle Marseille - Si\xE8ge",
      recordID: "rechl0As8OCv5peQ1"
    },
    {
      Name: "La Caravelle - Si\xE8ge",
      recordID: "recOp9jTdbDMgrgB8"
    },
    {
      Name: "La Cimade - 76",
      recordID: "recY8RF1we7reaeRK"
    },
    {
      Name: "La Cimade - Auvergne-Rh\xF4ne-Alpes",
      recordID: "recBqJEPsv058VVvY"
    },
    {
      Name: "La Cimade - Bretagne",
      recordID: "recrIBad9jo9QVQ4C"
    },
    {
      Name: "La Cimade - Clermont-Ferrand",
      recordID: "rec9sjrhrc3p4XZzH"
    },
    {
      Name: "La Cimade - Ille-et-Vilaine",
      recordID: "recq3nTx2sKeabC4r"
    },
    {
      Name: "La Cimade - Marseille",
      recordID: "recZZjDkLiypLxen6"
    },
    {
      Name: "La Cimade - Massy",
      recordID: "recFs59Typ8uqkndd"
    },
    {
      Name: "La Cimade - Mont-de-Marsan",
      recordID: "recjcsAbSt1N27gSy"
    },
    {
      Name: "La Cimade - Nantes",
      recordID: "reccuITHNe2EgWCYW"
    },
    {
      Name: "La Cimade - Nice",
      recordID: "recc3FY2SZ3yEZ06h"
    },
    {
      Name: "La Cimade - Pau",
      recordID: "recgogiTS8829UiDs"
    },
    {
      Name: "La Cimade - Reims",
      recordID: "recqxbJ08jPeU15ZY"
    },
    {
      Name: "La Cimade - Saint-Etienne",
      recordID: "recUESMEp33wQIWdS"
    },
    {
      Name: "La Cimade - S\xE9lestat",
      recordID: "recNTYCeNDxohsamZ"
    },
    {
      Name: "La Cimade - Si\xE8ge",
      recordID: "rec0ex6THWzgvA4rA"
    },
    {
      Name: "La cl\xE9 - Si\xE8ge",
      recordID: "reciMBMkTUBye3HOQ"
    },
    {
      Name: "La cravate solidaire - Si\xE8ge",
      recordID: "recmJX2mnBKPo9KBU"
    },
    {
      Name: "La Fabrique des Colibris - Si\xE8ge",
      recordID: "rec2VG4P1foJwVyrU"
    },
    {
      Name: "La Fabrique Nomade - Si\xE8ge",
      recordID: "recQl4gcGzIyBH5Yq"
    },
    {
      Name: "La Fourmiloise - Si\xE8ge",
      recordID: "recW1wYAvlQqOkY32"
    },
    {
      Name: "La Grande Classe - Si\xE8ge",
      recordID: "rec1561Ppa2oyrvSQ"
    },
    {
      Name: "La Halte - Brest",
      recordID: "recRMy31D0673k7su"
    },
    {
      Name: "La Ligue - 13",
      recordID: "rec9ET4UOR0ogfov7"
    },
    {
      Name: "La Ligue - Aquitaine",
      recordID: "recsuzRJua79lm7H9"
    },
    {
      Name: "La Maison des Journalistes - Si\xE8ge",
      recordID: "recFk1IXLp4tNqR3Y"
    },
    {
      Name: "La Maison pour Rebondir - Si\xE8ge",
      recordID: "recv5GoPVeDhqpY8e"
    },
    {
      Name: "La Manufacturette - Si\xE8ge",
      recordID: "recXCJ4qTFcsXItCg"
    },
    {
      Name: "La parenth\xE8se - CHRS Douai",
      recordID: "rectD2afHXzV92KYY"
    },
    {
      Name: "La Pierre Blanche - Si\xE8ge",
      recordID: "recLnWLY8Tx7ORg9w"
    },
    {
      Name: "La Roulotte Solidaire - Toulouse",
      recordID: "recrvXB56E8nOYMdb"
    },
    {
      Name: "La Ruche - Incubateur \xE0 Montreuil pour Entrepreneurs R\xE9fugi\xE9s",
      recordID: "recnTi9M9Z1pwrfgY"
    },
    {
      Name: "La Ruche - Incubateur r\xE9fugi\xE9s",
      recordID: "recsIFuZU7S7QRfYl"
    },
    {
      Name: "La Sauvegarde du Nord - Si\xE8ge",
      recordID: "recdtAoY9wLhz0fba"
    },
    {
      Name: "La Sauvegarde - Paris",
      recordID: "recMt79XDxJDfr0T5"
    },
    {
      Name: "La table de cana  - Marseille",
      recordID: "recbMyyxAXLRdRxoA"
    },
    {
      Name: "La Varappe - Marseille",
      recordID: "recyQZxrfizQCFZ2R"
    },
    {
      Name: "La voix des r\xE9fugi\xE9s - Si\xE8ge",
      recordID: "recghR3IVieTU5K8c"
    },
    {
      Name: "Label Gamelle - Si\xE8ge",
      recordID: "recARJquB2YjqMeY2"
    },
    {
      Name: "Landes Accueil Nouveaux Arrivants - CADA de Mont-de-Marsan",
      recordID: "recFxPuLexorBF1TY"
    },
    {
      Name: "Langophonies - FLE",
      recordID: "recWYraq3MTrST6ZO"
    },
    {
      Name: "Langophonies - Rennes",
      recordID: "recBhE6tGEpcMAqun"
    },
    {
      Name: "Langue & Communication - Si\xE8ge",
      recordID: "receZ0GjYfqMQzsjG"
    },
    {
      Name: "Langue et communication - FLE - Si\xE8ge",
      recordID: "recVXSj5l354jOAjq"
    },
    {
      Name: "Langues Plurielles - Si\xE8ge",
      recordID: "recIudMAQ51uJujAm"
    },
    {
      Name: "L'atelier des talents - Si\xE8ge",
      recordID: "reccBPRY4BjAh34sS"
    },
    {
      Name: "L'Atelier Remum\xE9nage - Si\xE8ge",
      recordID: "recQzsxfEkCmqAQJD"
    },
    {
      Name: "Lcause - Si\xE8ge",
      recordID: "recRiOBCTtCsWpyq4"
    },
    {
      Name: "Le Bus des femmes - Si\xE8ge",
      recordID: "recuJ3z5dgI30WFRS"
    },
    {
      Name: "Le MAPP - Si\xE8ge",
      recordID: "recR4adhOZW7w18aF"
    },
    {
      Name: "Le petit Renard - Le Petit Renard",
      recordID: "recizwLbolmALSr2u"
    },
    {
      Name: "LE POLE - Si\xE8ge",
      recordID: "rec1RnZugEhEUxgJH"
    },
    {
      Name: "Le Quidam - CPH Le Quidam",
      recordID: "recF92Rty8qW0zTGN"
    },
    {
      Name: "Le r\xE9cho - Collectif d'association",
      recordID: "recBiZobaEJZ7YQtB"
    },
    {
      Name: "Le Refuge - Si\xE8ge",
      recordID: "recnpyKJFhH3quvUX"
    },
    {
      Name: "Le Relais - CHRS Le Relais",
      recordID: "recMpD68J4TJRtUXY"
    },
    {
      Name: "Le Relais - Gironde",
      recordID: "recvat08hI1JiXRX2"
    },
    {
      Name: "Le r\xE9pertoire de Gaspard - Si\xE8ge",
      recordID: "recnAIPslMIVn3nDH"
    },
    {
      Name: "Le rocher  - Grenoble",
      recordID: "recfqKpF2QSnGiy3v"
    },
    {
      Name: "Le Rocheton - CADA - La Rochette",
      recordID: "rec7Gufv9JeyLkHDl"
    },
    {
      Name: "Le Rocheton - UCJG/YMCA",
      recordID: "recqNy8kB2SGEfmhm"
    },
    {
      Name: "Le tamis  - Si\xE8ge",
      recordID: "recaliqstDRTNuydb"
    },
    {
      Name: "L'Entraide - Si\xE8ge",
      recordID: "recHlFNS8KaDZ35on"
    },
    {
      Name: "L'Entreprise des Possibles - Si\xE8ge",
      recordID: "recLGATWzqZGxdFhg"
    },
    {
      Name: "Les amis culteurs  - Si\xE8ge",
      recordID: "recHlAhwiMbyizjs4"
    },
    {
      Name: "Les Cuistots Migrateurs - Si\xE8ge",
      recordID: "recvRIQpN2ooO3sg1"
    },
    {
      Name: "Les Mots Pour l'Ecrire (LMPE) - Si\xE8ge",
      recordID: "recEDkUz84Ui8BGjp"
    },
    {
      Name: "Les Nouveaux Voisins 29 - Si\xE8ge",
      recordID: "rectP3kr8j6UsugSe"
    },
    {
      Name: "Les Oies Sauvages - Marseille",
      recordID: "recNlW5mMgKWlnO5G"
    },
    {
      Name: "Les Ombres - Si\xE8ge",
      recordID: "recE3T6jlqysRRaFe"
    },
    {
      Name: "Les petits d\xE9brouillards - Si\xE8ge",
      recordID: "recth4Lg2ieyKGzQH"
    },
    {
      Name: "Les Restos du C\u0153ur - 63",
      recordID: "reclHQJmUKge4MG1b"
    },
    {
      Name: "Les Restos du C\u0153ur - Arras",
      recordID: "recoOQTw3diQvweiu"
    },
    {
      Name: "Les Restos du C\u0153ur - Les Jardins des C\u0153urs",
      recordID: "rechSVX6gdCTkLoNj"
    },
    {
      Name: "Les Restos du C\u0153ur - Les Relais du Coeur",
      recordID: "rec3wY60VyLGkwvvJ"
    },
    {
      Name: "Les Restos du C\u0153ur - Mont-de-Marsan",
      recordID: "recp3TwHQup8fsSYZ"
    },
    {
      Name: "Les Restos du C\u0153ur - Moselle",
      recordID: "reclutU9xq8vPEhdi"
    },
    {
      Name: "Les Restos du C\u0153ur - Rh\xF4ne",
      recordID: "reco4fTaSQSloOsNl"
    },
    {
      Name: "Les Restos du C\u0153ur - Si\xE8ge",
      recordID: "recoX5lhgjFiMcCIn"
    },
    {
      Name: "Les Restos du C\u0153ur - Si\xE8ge",
      recordID: "recGnjsO6AgCLh2Re"
    },
    {
      Name: "Les Restos du C\u0153ur - Vienne",
      recordID: "recFe7y4MchOEhYJr"
    },
    {
      Name: "Les Restos du C\u0153ur - Villefontaine",
      recordID: "recMAIwdP5LmL81lw"
    },
    {
      Name: "L'Escale - CADA de Charente Maritime",
      recordID: "recl3YpLB5lDC1FkZ"
    },
    {
      Name: "L'Escale - CADA des Deux-S\xE8vres",
      recordID: "receHFVOHHPfT5Fiy"
    },
    {
      Name: "L'Escale - Centre Social & Culturel Robertsau",
      recordID: "recL54J0PbbM5qs4j"
    },
    {
      Name: "L'Escale - HUDA de Niort et Parhenay",
      recordID: "recK27vQx18MIcOmt"
    },
    {
      Name: "L'Escale - Reims : R\xE9sidence Habitat Jeunes",
      recordID: "rec6bbQeSzjC4Igrw"
    },
    {
      Name: "L'\xE9tabli - Si\xE8ge",
      recordID: "rec2UZeb7SGgZrHQf"
    },
    {
      Name: "LF Habitat - Si\xE8ge",
      recordID: "recSkQlsN6vEEYCI3"
    },
    {
      Name: "LFID (Ligue des Femmes Iraniennes pour la D\xE9mocratie) - Si\xE8ge",
      recordID: "recf4QKeFcA0W7uCK"
    },
    {
      Name: "Ligue des Droits de l'Homme - Bretagne",
      recordID: "recIgw1yNIUbnoVSp"
    },
    {
      Name: "Ligue des Droits de l'Homme - Si\xE8ge",
      recordID: "rechR05u4b8DS0x8a"
    },
    {
      Name: "LIMBO - Si\xE8ge",
      recordID: "recoYGMP40VVOFy0s"
    },
    {
      Name: "Live for good - Si\xE8ge",
      recordID: "recxu26jJSRiO6L4B"
    },
    {
      Name: "L'\u0152uvre d'Orient - Si\xE8ge",
      recordID: "recjiesG3v9zE2Vqm"
    },
    {
      Name: "Logement St Benoit - Si\xE8ge",
      recordID: "recTbDp382ZRqPSqk"
    },
    {
      Name: "Logisol - CADA",
      recordID: "recuT2wCfS2bA62X1"
    },
    {
      Name: "Logisol - CADA",
      recordID: "recX7idjXuSTpSkJC"
    },
    {
      Name: "L'Oiseau Bleu - Grenoble",
      recordID: "recJ07PEVhfPAibeJ"
    },
    {
      Name: "LTF - (Light Towards Future) - Si\xE8ge",
      recordID: "recG2HIGfsqqv3nq3"
    },
    {
      Name: "LYCEE FENELON - Si\xE8ge",
      recordID: "recJveK7gjzOIa9qM"
    },
    {
      Name: "MADE - Si\xE8ge",
      recordID: "reczS8zYT2nncXTdw"
    },
    {
      Name: "MADERA - Si\xE8ge",
      recordID: "rec0vOVHMlGFj2z09"
    },
    {
      Name: "Main tendue - 31",
      recordID: "recaIQm5ESCLBhUD1"
    },
    {
      Name: "Mairie - Ambar\xE8s et Lagrave",
      recordID: "recvWILRFf3DsN73Z"
    },
    {
      Name: "Mairie - Arras",
      recordID: "recV8ZAzn77QmQ48w"
    },
    {
      Name: "Mairie - B\xE8gles",
      recordID: "recaJu0k1hv1fsq5F"
    },
    {
      Name: "Mairie - Bordeaux",
      recordID: "recenTxMfFdkBUNg8"
    },
    {
      Name: "Mairie - Bordeaux, Responsable CADA",
      recordID: "recgm339dNusaoClY"
    },
    {
      Name: "Mairie - Bouscat",
      recordID: "recHsvPRvpS7KizPk"
    },
    {
      Name: "Mairie - Canteleu",
      recordID: "rec5jHIvVu1lm31Mb"
    },
    {
      Name: "Mairie - Cenon",
      recordID: "recyJQcxOGuFQC9fR"
    },
    {
      Name: "Mairie - Clichy",
      recordID: "recrGADNstc6oO4Hv"
    },
    {
      Name: "Mairie de Maisons-Laffitte - 78",
      recordID: "recEs7aBeFHP7lSvh"
    },
    {
      Name: "Mairie - Dijon",
      recordID: "recTAnWEi5J0QhbvJ"
    },
    {
      Name: "Mairie - Evry-Courcouronnes",
      recordID: "recbISJZegHkQTc6z"
    },
    {
      Name: "Mairie - Garges",
      recordID: "rec9nCI9r8dDQspsN"
    },
    {
      Name: "Mairie - Gonesse",
      recordID: "recZdKcrIvWkc6T69"
    },
    {
      Name: "Mairie - Gradignan",
      recordID: "recCilAb1F5SDFbzM"
    },
    {
      Name: "Mairie - Grenoble",
      recordID: "rec1AjrU7f8jNPHtQ"
    },
    {
      Name: "Mairie - Guingamp",
      recordID: "recOn9cTMkhVWv7EQ"
    },
    {
      Name: "Mairie - Istres",
      recordID: "rec6fPWFsaPIUxko0"
    },
    {
      Name: "Mairie - Lavarri\xE8re - Centre Socioculturel Jacques Miquel",
      recordID: "rec8cFo5B6dZCNlQJ"
    },
    {
      Name: "Mairie - Lille",
      recordID: "recP259NqJqxe7zQe"
    },
    {
      Name: "Mairie - Lormont",
      recordID: "recPJkuzowvbUNorJ"
    },
    {
      Name: "Mairie - Lyon - Adjointe affaires sociales",
      recordID: "reccDtHugviZbwTlM"
    },
    {
      Name: "Mairie - Mairie de Clermont Ferrand",
      recordID: "rec5JCIgZFOr9Tu0X"
    },
    {
      Name: "Mairie - Mantes la jolie",
      recordID: "recKcTMISn3M9fEQd"
    },
    {
      Name: "Mairie - Mantes la ville",
      recordID: "recwz0K4tdxke28Xv"
    },
    {
      Name: "Mairie - Marseille",
      recordID: "recQifaQD6yXZT2kI"
    },
    {
      Name: "Mairie - Merignac",
      recordID: "recMi0p4Z4ChPtZ5H"
    },
    {
      Name: "Mairie - M\xE9rignac",
      recordID: "rectWSXUO1xea32Ee"
    },
    {
      Name: "Mairie - Montmagny",
      recordID: "recPS80QU4IuFkUEF"
    },
    {
      Name: "Mairie - Mureaux",
      recordID: "recwfBmcsxB9Ts9ME"
    },
    {
      Name: "Mairie - Nice",
      recordID: "recmnZiH7Ndtutig8"
    },
    {
      Name: "Mairie - Paris",
      recordID: "rec9JlK1TVGsx4Epq"
    },
    {
      Name: "Mairie - Paris",
      recordID: "receug1LnyVyAOY5Z"
    },
    {
      Name: "Mairie - Paris",
      recordID: "recu4Qxx8ZY270in8"
    },
    {
      Name: "Mairie - Paris - CASVP",
      recordID: "recGR3JYNq7qvIoJL"
    },
    {
      Name: "Mairie - Paris - Maison asso",
      recordID: "rec50hCsYlQZZq0WW"
    },
    {
      Name: "Mairie - Paris - maison des associations",
      recordID: "recg6R8xaqGRjGOUW"
    },
    {
      Name: "Mairie - Pau",
      recordID: "recuj9CZS9FVxa96e"
    },
    {
      Name: "Mairie - Pessac",
      recordID: "reciYmRng1xK6HRs9"
    },
    {
      Name: "Mairie - Petit-couronne",
      recordID: "recyWQsW4GrtazpNf"
    },
    {
      Name: "Mairie - Petit-Couronne",
      recordID: "recS7MjSvaJeo325T"
    },
    {
      Name: "Mairie - Petit-Quevilly",
      recordID: "recWp1cTjdj4UALaK"
    },
    {
      Name: "Mairie - Pierre Laye",
      recordID: "recBR20fpUnsqB59W"
    },
    {
      Name: `Mairie - Rambouillet - MJC Centre Social "L'usine \xE0 chapeaux"`,
      recordID: "recExDUXOKshJS88w"
    },
    {
      Name: "Mairie - Rennes",
      recordID: "rec6orH16BSaVBbqT"
    },
    {
      Name: "Mairie - Rennes - Plateforme SolidaRen",
      recordID: "recPQqyq4QmMPEuAk"
    },
    {
      Name: "Mairie - Rouen",
      recordID: "recxKvjIRHAkPlu5Q"
    },
    {
      Name: "Mairie - Saint-Etienne-du-Rouvray",
      recordID: "recnS2YD6wL4AkbFI"
    },
    {
      Name: "Mairie - Soisy-sous-montmorency",
      recordID: "recIt8mVyff1mBdsR"
    },
    {
      Name: "Mairie - Sotteville-L\xE8s-Rouen",
      recordID: "recl2hrTWsIYyD85v"
    },
    {
      Name: "Mairie - Talence",
      recordID: "recFlq39v2MT7vKn5"
    },
    {
      Name: "Mairie - Toulouse",
      recordID: "recTL1V1X1VNOpNJw"
    },
    {
      Name: "Mairie - Trappes - Coordination linguistique, parcours et ASL",
      recordID: "recGEBe3SSLTjNaML"
    },
    {
      Name: "Mairie - Vienne",
      recordID: "reckPaAspjBagSprA"
    },
    {
      Name: "Mairie - Villenave d'Ornon",
      recordID: "recrWzADjlebZR8ta"
    },
    {
      Name: "Mairie - Villiers-le-bel",
      recordID: "recwLVNjKpohVI6wW"
    },
    {
      Name: "Maison de l'emploi Grand Paris - Si\xE8ge",
      recordID: "recgQrbRE708iLNTd"
    },
    {
      Name: "Maison de quartier Bealet - Si\xE8ge",
      recordID: "rec5DTCWGL0iONIo8"
    },
    {
      Name: "Maison de quartier des Bois Blancs - Si\xE8ge",
      recordID: "recRsnNiKn953dy8y"
    },
    {
      Name: "Maison des potes  - Si\xE8ge",
      recordID: "rec8033oXr5uja0fv"
    },
    {
      Name: "Maison du logement - DAX",
      recordID: "rec9lBrDLyY8sHviF"
    },
    {
      Name: "Maison Emploi - Bordeaux",
      recordID: "recyalrf5EPaDzM1j"
    },
    {
      Name: "Maison Internationale de Rennes - Si\xE8ge",
      recordID: "recFPs3HHzx5ihS9z"
    },
    {
      Name: "Maison pour tous - Landerneau",
      recordID: "recQAiHzcydgbtVcA"
    },
    {
      Name: "Makesense - COMBO",
      recordID: "recywB9GnJoqTa67u"
    },
    {
      Name: "Makesense - COMBO : Exploration",
      recordID: "recgYkB2hGbm47NvU"
    },
    {
      Name: "Makesense - COMBO : Incubation",
      recordID: "rechfTp07cY1bD2tf"
    },
    {
      Name: "Makesense - Si\xE8ge",
      recordID: "recRvUdhZ7I7iEbQX"
    },
    {
      Name: "Mam\u2019ayoka - Si\xE8ge",
      recordID: "recSiVTUEgxwmzVN0"
    },
    {
      Name: "Marseille Solutions - Si\xE8ge",
      recordID: "recqKiYtrkNDBOTe0"
    },
    {
      Name: "Martigues - Ville",
      recordID: "rec6nMml3UPtRQRYp"
    },
    {
      Name: "Maurepas Entraide - Si\xE8ge",
      recordID: "recdtjso2sBUMtbJk"
    },
    {
      Name: "M\xE9decins du Monde - Bordeaux",
      recordID: "recN8pFggjMIH4OHY"
    },
    {
      Name: "M\xE9decins du Monde - Nantes",
      recordID: "reczMqMNDVISMnWdR"
    },
    {
      Name: "M\xE9decins du Monde - Si\xE8ge",
      recordID: "recocHv2lI98tR8wo"
    },
    {
      Name: "M\xE9decins du Monde - Toulouse",
      recordID: "recK1RCpiWK9Xlv5k"
    },
    {
      Name: "M\xE9decins Sans Fronti\xE8res - Si\xE8ge",
      recordID: "recwYR29AHuNUGaQa"
    },
    {
      Name: "Meet My Mama - Si\xE8ge",
      recordID: "recKYCtmVYV4dpbFb"
    },
    {
      Name: "M\xE9solia - Bailleur social",
      recordID: "reco9A6DF1UZLO7fq"
    },
    {
      Name: "Metishima - Si\xE8ge",
      recordID: "recDxFUJnFNlH5rEd"
    },
    {
      Name: "M\xE9tropole de Lyon",
      recordID: "recLB8qCMvh0v4sCU"
    },
    {
      Name: "M\xE9tropole de Lyon - Mission d'\xE9valuation et d'Orientation des Mineurs Isol\xE9s Etrangers (MEOMIE)",
      recordID: "recKcB8i9AHutRuV7"
    },
    {
      Name: "M\xE9tropole de Lyon - Si\xE8ge",
      recordID: "recRvWp8cucFSB1wM"
    },
    {
      Name: "Migration et d\xE9veloppement  - Si\xE8ge",
      recordID: "rec5Yuf4X39t3DPWC"
    },
    {
      Name: "MIGRENS - Si\xE8ge",
      recordID: "recefC1euaT8XGRai"
    },
    {
      Name: "Mission Locale - ARML - Antenne BAGATELLE",
      recordID: "recTdsDkOOK0vALcP"
    },
    {
      Name: "Mission Locale - ARML - Antenne Centre",
      recordID: "recPOPidc9Y8YCiXG"
    },
    {
      Name: "Mission Locale - ARML - Antenne MIRAIL",
      recordID: "reckDS3xRXJmG1Jza"
    },
    {
      Name: "Mission Locale - ARML - Antenne Nord",
      recordID: "recReNGpYQQoNBRg6"
    },
    {
      Name: "Mission Locale - ARML - Antenne QUARTIERS EST",
      recordID: "rec7XdYPBb8zQtAhx"
    },
    {
      Name: "Mission Locale - ARML Grand Est",
      recordID: "rec4fT3SDanqvzbwl"
    },
    {
      Name: "Mission Locale - ARML \xCEle-de-France",
      recordID: "recBuMXeZLUUZyd6h"
    },
    {
      Name: "Mission Locale - ARML Nouvelle-Aquitaine",
      recordID: "recTYZ5o6hQMrhAza"
    },
    {
      Name: "Mission Locale - ARML Nouvelle Aquitaine",
      recordID: "recF0zR5Vl3qo6x7G"
    },
    {
      Name: "Mission Locale - ARML Occitanie",
      recordID: "recv8EdKD7GCer1vt"
    },
    {
      Name: "Mission Locale - Arras",
      recordID: "reccLCDAOL4WVngFr"
    },
    {
      Name: "Mission Locale - Bordeaux",
      recordID: "rec9b6hI7hTpR9WL3"
    },
    {
      Name: "Mission Locale - Bords de Marne",
      recordID: "recPD577GoBPJ1x27"
    },
    {
      Name: "Mission Locale - Boucles de la Marne",
      recordID: "recHHzQDYlMwfyLpq"
    },
    {
      Name: "Mission Locale - Brest",
      recordID: "reccR9wTkdP8X9LcN"
    },
    {
      Name: "Mission Locale - Brest - Garantie jeune",
      recordID: "rec3YTfzXKvaJyw0W"
    },
    {
      Name: "Mission Locale - Bretagne",
      recordID: "receqgJfxHv2OtIAl"
    },
    {
      Name: "Mission Locale - Br\xE9tigny-sur-Orge (Trois Vall\xE9es)",
      recordID: "rec3nLWvEkowHRKtT"
    },
    {
      Name: "Mission Locale - Caen la mer Calvados Centre",
      recordID: "rec3xcPfKTORnRbxv"
    },
    {
      Name: "Mission Locale - Cergy-Pontoise : Association AVEC",
      recordID: "reca94cZ6jSDZsXmO"
    },
    {
      Name: "Mission Locale - Ch\xE2lons en Champagne",
      recordID: "recZNGMfuXaX9hvbp"
    },
    {
      Name: "Mission Locale - Charleville-M\xE9zi\xE8re",
      recordID: "reccUJ1sHvhCEo2U3"
    },
    {
      Name: "Mission Locale - Clermont Ferrand",
      recordID: "reca7y9RAHAXGfWOv"
    },
    {
      Name: "Mission Locale - Colmar",
      recordID: "recC9FqO8q7iMt8a7"
    },
    {
      Name: "Mission locale - Des bords de marne",
      recordID: "recGxrcbjEdr5CZo0"
    },
    {
      Name: "Mission Locale - Dijon",
      recordID: "recujrVHwhUR0aGFN"
    },
    {
      Name: "Mission Locale - Grenoble",
      recordID: "recajjeQD1anMBFN4"
    },
    {
      Name: "Mission Locale - Haute Garonne",
      recordID: "reckpyeV4ldUMejX2"
    },
    {
      Name: "Mission Locale - Haute Gironde",
      recordID: "recP1814kuaiuJ1Uy"
    },
    {
      Name: "Mission Locale - Jaures",
      recordID: "reciZSz20ADCJYpfG"
    },
    {
      Name: "Mission Locale - Jeunes Grand Avignon",
      recordID: "recesznGBXqea95do"
    },
    {
      Name: "Mission Locale - La Brie et des Morins",
      recordID: "reck4tvEZMVIR9LNU"
    },
    {
      Name: "Mission Locale - Les Graves",
      recordID: "recoKTCVMdULCE2sa"
    },
    {
      Name: "Mission Locale - Libourne",
      recordID: "rec7w64xVyvd485nV"
    },
    {
      Name: "Mission Locale - Lun\xE9villois",
      recordID: "recffMkPviUrFMLDv"
    },
    {
      Name: "Mission Locale - Lyon",
      recordID: "recBfP7MCtD0qFOQH"
    },
    {
      Name: "Mission Locale - Marseille",
      recordID: "recSAObE1HTxKxipH"
    },
    {
      Name: "Mission Locale - Metz",
      recordID: "recUF4WxwRJGFtQeB"
    },
    {
      Name: "Mission Locale - Mission locale de l'Orl\xE9anais",
      recordID: "recK8lepSyg3Tthnw"
    },
    {
      Name: "Mission Locale - Mission locale de Touraine-Antenne Centre",
      recordID: "recD0v64KcrBroaOM"
    },
    {
      Name: "Mission Locale - Mission locale de Touraine-Antenne Nord",
      recordID: "rechUjzo0gtqRzhhx"
    },
    {
      Name: "Mission Locale - Mission locale de Touraine-Antenne Sud",
      recordID: "recmw0GQKdqVbzQQs"
    },
    {
      Name: "Mission Locale - Mission Locale Rurale Nord Ouest Rh\xF4ne (Tarare)",
      recordID: "rec3izzK35cE3pGjr"
    },
    {
      Name: "Mission Locale - MLOCVA : Orly / Choisy / Villeneuve-le-Roi / Ablon-sur-Seine",
      recordID: "recqDvWxghYvlxaGN"
    },
    {
      Name: "Mission Locale - MLPE Strasbourg Garantie Jeunes",
      recordID: "recwpUBcZVbjVPviM"
    },
    {
      Name: "Mission Locale - Mont-de-Marsan",
      recordID: "recxZ5gcmvg73INtH"
    },
    {
      Name: "Mission Locale - Montpellier",
      recordID: "reckMfxeTxfhEZyBr"
    },
    {
      Name: "Mission Locale - Nantes M\xE9tropole Bellevue",
      recordID: "rec37HrGOQOpWA08l"
    },
    {
      Name: "Mission Locale - Nantes M\xE9tropole Centre",
      recordID: "recEAHi4WHfKgh1AN"
    },
    {
      Name: "Mission Locale - Nantes M\xE9tropole Dervalli\xE8res",
      recordID: "rec32IhzRDecqxXQN"
    },
    {
      Name: "Mission Locale - Nantes M\xE9tropole Est",
      recordID: "recR2x1fxlvvLBnrY"
    },
    {
      Name: "Mission Locale - Nantes M\xE9tropole Malakoff",
      recordID: "recGpe1iwbfuDrES1"
    },
    {
      Name: "Mission Locale - Nantes M\xE9tropole Sud",
      recordID: "recQKSGyDnGPSPV2Z"
    },
    {
      Name: "Mission Locale - National",
      recordID: "recAkhGyCO285fDC6"
    },
    {
      Name: "Mission Locale - Nimes M\xE9tropole",
      recordID: "recsHXhmM5wpEzWKk"
    },
    {
      Name: "Mission Locale - Nord Is\xE8re",
      recordID: "recYBFJb8XR2sC30Z"
    },
    {
      Name: "Mission Locale - Nord Meusien",
      recordID: "recP5EUuIzC5TDtuB"
    },
    {
      Name: "Mission Locale - Nord Mosellan",
      recordID: "reciAfGoKHsydrRcI"
    },
    {
      Name: "Mission Locale - Paris",
      recordID: "rec9Y7qoV2J3VZ4zV"
    },
    {
      Name: "Mission Locale - Paris - 20\xE8me Arrondissement",
      recordID: "recaYud2NodQvPnOC"
    },
    {
      Name: "Mission Locale - Paris Saclay - VITA-LIS",
      recordID: "recTSRiO0ZoXvypvz"
    },
    {
      Name: "Mission Locale - Pessac",
      recordID: "recMAlPmA8SWimCf0"
    },
    {
      Name: "Mission Locale - Plaine Centrale du Val de Marne",
      recordID: "recgmTx1swwjYL0ME"
    },
    {
      Name: "Mission Locale - Poissy / Conflans",
      recordID: "recRpqldL9IpUmsnv"
    },
    {
      Name: "Mission Locale - Reims",
      recordID: "recVhzWDzf3Ey59Rj"
    },
    {
      Name: "Mission Locale - Rennes",
      recordID: "recTyz8Mo9F2wJ19h"
    },
    {
      Name: "Mission Locale - Rive droite",
      recordID: "recG1fzBHYLuXumPL"
    },
    {
      Name: "Mission Locale - Rive droite",
      recordID: "reccv4piunlUyAuy3"
    },
    {
      Name: "Mission Locale - Rive Droite Brest",
      recordID: "recUT0sVL1wOti55K"
    },
    {
      Name: "Mission Locale - Saint-Germain-en-Laye (Dynam Jeunes)",
      recordID: "recz3zBG6Hr6VEclX"
    },
    {
      Name: "Mission Locale - Schiltigheim",
      recordID: "rec3vp8SvIRqVTZVB"
    },
    {
      Name: "Mission Locale - S\xE9maphore MSA (Mulhouse Sud Alsace)",
      recordID: "recxD6M3FncEk8gLt"
    },
    {
      Name: "Mission Locale - Sevran - Tremblay - Villepinte",
      recordID: "recTOZloNZ5U16ksl"
    },
    {
      Name: "Mission Locale - Si\xE8ge",
      recordID: "recxy1Wgb8FRn0pmz"
    },
    {
      Name: "Mission Locale - Si\xE8ge",
      recordID: "recTZJfzNMz0fuK1F"
    },
    {
      Name: "Mission Locale - Si\xE8ge",
      recordID: "recByXsd4xvGiKFVR"
    },
    {
      Name: "Mission Locale - Sud Gironde",
      recordID: "recCgwITBIJs694qo"
    },
    {
      Name: "Mission Locale - Tarare",
      recordID: "reco8SDZNjUvq7pRr"
    },
    {
      Name: "Mission Locale - Thionville",
      recordID: "reckg3GDGdV8ThJ3H"
    },
    {
      Name: "Mission Locale - Toulon",
      recordID: "recutYnkJ1rLnWG8A"
    },
    {
      Name: "Mission Locale - Toulouse",
      recordID: "rec1B24c7hCQZ9dQ1"
    },
    {
      Name: "Mission Locale - Troyes",
      recordID: "rec5D237E2pHZt7qn"
    },
    {
      Name: "Mission Locale - Vall\xE9e de Montmorency : MLVM",
      recordID: "recvcHAekwS1SCPz8"
    },
    {
      Name: "Mission Locale - Versailles",
      recordID: "recIqfVSjH8Dk3xav"
    },
    {
      Name: "Mission Locale - Versailles MLIV",
      recordID: "recv7GRVlsYZZBJHU"
    },
    {
      Name: "Mission Locale - Vienne",
      recordID: "rec2h6FXP6UuPZ6Rn"
    },
    {
      Name: "Mission Locale - Vitr\xE9",
      recordID: "recCHkKgirvJGyemm"
    },
    {
      Name: "Mission Locale - We Ker",
      recordID: "recANdcFd7VX7pJaM"
    },
    {
      Name: "Mission Locale - Wittenheim",
      recordID: "rec8Q8KqwrqkLUAgl"
    },
    {
      Name: "MJF - CADA",
      recordID: "recujktVkvNzlWNEW"
    },
    {
      Name: "Momartre - Si\xE8ge",
      recordID: "recEVjWvQFRbju6q0"
    },
    {
      Name: "MONISNAP - Si\xE8ge",
      recordID: "recUUSx9g3CFVpTRI"
    },
    {
      Name: "Montpellier R\xE9fugi\xE9s - Collectif citoyen",
      recordID: "recq3Q17I9m3rBA1C"
    },
    {
      Name: "Mosqu\xE9e Rennes - Si\xE8ge",
      recordID: "rec056tZasTrg2JpE"
    },
    {
      Name: "MOT \xE0 MOT - Si\xE8ge",
      recordID: "recyB5CZHMUsM3Q57"
    },
    {
      Name: "MOTS ET MERVEILLES - Si\xE8ge",
      recordID: "recd8f356Vey8jSzq"
    },
    {
      Name: "Moulin de Pont R\xFB - Cergy",
      recordID: "recfcM7qeETLfUuWX"
    },
    {
      Name: "MRAP - Landes",
      recordID: "recZm9dlWRDIIZHHk"
    },
    {
      Name: "MULEKETU - Si\xE8ge",
      recordID: "rechsBB4vTC0VXoXd"
    },
    {
      Name: "NATAKALLAM - Si\xE8ge",
      recordID: "recYEDteddeTXzgNn"
    },
    {
      Name: "N\xE9nuphar M\xE9diation - Si\xE8ge",
      recordID: "recpmR0weI1Ve9DBv"
    },
    {
      Name: "Network for Refugee Voices - Si\xE8ge",
      recordID: "recy46lrH54NzNP53"
    },
    {
      Name: "NICKEL - Si\xE8ge",
      recordID: "recldm1TmRdc5IGCo"
    },
    {
      Name: "NOM_STRUCTURE - Si\xE8ge",
      recordID: "recUnT5oYGW26bD71"
    },
    {
      Name: "Non identifi\xE9 - HUDA BUSSY",
      recordID: "reckmtkmk39CksKiq"
    },
    {
      Name: "Nouvelle Etoile - Si\xE8ge",
      recordID: "recNSEAIj466DcOuH"
    },
    {
      Name: "Nouvelle Etoile - Si\xE8ge",
      recordID: "recylCPALuVNrRKS7"
    },
    {
      Name: "NOZDEIZ - Si\xE8ge",
      recordID: "recOUuX7O8fMzYyn7"
    },
    {
      Name: "Observatoire du Pays des Foug\xE8res - Si\xE8ge",
      recordID: "rect7eb6poe58tDkr"
    },
    {
      Name: "Odyss\xE9e - Si\xE8ge",
      recordID: "reckabN0TBPrHhrSP"
    },
    {
      Name: "\u0152UVRE FALRET - La Marcotte - CHRS",
      recordID: "rec8aNwZNioKNXoKD"
    },
    {
      Name: "\u0152UVRE FALRET - Si\xE8ge",
      recordID: "recXjbvAq9Qbb1PUk"
    },
    {
      Name: "OFAR - ONM - P\xF4le h\xE9bergement [S.A.A.S]",
      recordID: "recV9FKOzyDVBQSxK"
    },
    {
      Name: "OFII - Alsace-Moselle",
      recordID: "rece31z05EpvcwYde"
    },
    {
      Name: "OFII - Amiens",
      recordID: "recL4syid5B28pWl5"
    },
    {
      Name: "OFII - Bobigny",
      recordID: "rec3edy4AlB5ARNnk"
    },
    {
      Name: "OFII - Bobigny",
      recordID: "rec3edy4AlB5ARNnk"
    },
    {
      Name: "OFII - Bordeaux",
      recordID: "recHoGiTKuXrBeAjb"
    },
    {
      Name: "OFII - Bordeaux",
      recordID: "recE3bGKKi7BywIq1"
    },
    {
      Name: "OFII - Bretagne",
      recordID: "recvZnmqTe2JcaFnT"
    },
    {
      Name: "OFII - Caen",
      recordID: "recDgkomnHuZ5nZ60"
    },
    {
      Name: "OFII - Cr\xE9teil",
      recordID: "recpQmnLvONFXHgRC"
    },
    {
      Name: "OFII - Cr\xE9teil",
      recordID: "recBAda5EZqlolJco"
    },
    {
      Name: "OFII - Cr\xE9teil",
      recordID: "recFB3AllfIH8e1Oj"
    },
    {
      Name: "OFII - D\xE9l\xE9gation territoriale d'Auvergne",
      recordID: "recD0qtDi84ZutCPz"
    },
    {
      Name: "OFII - Dijon",
      recordID: "recE19cAj6TCp7iKy"
    },
    {
      Name: "OFII - DT Amiens",
      recordID: "rec46xibcWVMs3XOE"
    },
    {
      Name: "OFII - DT Besan\xE7on",
      recordID: "rec0Gz2KWuQcGlQVF"
    },
    {
      Name: "OFII - DT Bobigny",
      recordID: "rec9XsRCVVnhqE3SW"
    },
    {
      Name: "OFII - DT Bobigny",
      recordID: "recov21z33XdtcEBS"
    },
    {
      Name: "OFII - DT Bordeaux",
      recordID: "recTO3mY2t62Ituo1"
    },
    {
      Name: "OFII - DT Caen",
      recordID: "rectudieNXvXLaw4U"
    },
    {
      Name: "OFII - DT Cayenne",
      recordID: "recFMfVTF407YXdkX"
    },
    {
      Name: "OFII - DT Cergy",
      recordID: "recoa2UKxRTNAc3pt"
    },
    {
      Name: "OFII - DT Cr\xE9teil",
      recordID: "reciCiiLcnYh2bkUt"
    },
    {
      Name: "OFII - DT Cr\xE9teil",
      recordID: "recsVsvQXkhhaHxN7"
    },
    {
      Name: "OFII - DT Dijon",
      recordID: "recvGF25016disHgo"
    },
    {
      Name: "OFII - DT Grenoble",
      recordID: "recTWLgwlY6ahDim6"
    },
    {
      Name: "OFII - DT Lille",
      recordID: "recHeVNlZJPyf8kNV"
    },
    {
      Name: "OFII - DT Limoges",
      recordID: "recNcF76KybZ6EluW"
    },
    {
      Name: "OFII - DT Lyon",
      recordID: "rectemeEZkhWtDutr"
    },
    {
      Name: "OFII - DT Marseille",
      recordID: "recjcTqGagQlFZDft"
    },
    {
      Name: "OFII - DT Marseille",
      recordID: "recHdPGLignAjwXYo"
    },
    {
      Name: "OFII - DT Melun",
      recordID: "recMUjxY6fphxCWff"
    },
    {
      Name: "OFII - DT Metz",
      recordID: "recJgSP4zAA7LXPAy"
    },
    {
      Name: "OFII - DT Montpellier",
      recordID: "recJjedfsa9nTAycm"
    },
    {
      Name: "OFII - DT Montrouge",
      recordID: "recohITx89ZuapeOK"
    },
    {
      Name: "OFII - DT Montrouge",
      recordID: "rec8MHBvWVIqas3tg"
    },
    {
      Name: "OFII - DT Nantes",
      recordID: "rec2lUmHxzNpEBb2D"
    },
    {
      Name: "OFII - DT Nice",
      recordID: "recqOOMBPJJmSX6KK"
    },
    {
      Name: "OFII - DT Orl\xE9ans",
      recordID: "recIspw6TF1zp6NgU"
    },
    {
      Name: "OFII - DT Paris",
      recordID: "recydvYUjahwtWaMu"
    },
    {
      Name: "OFII - DT Paris",
      recordID: "reccxTbum5JEnYkCX"
    },
    {
      Name: "OFII - DT Reims",
      recordID: "recTMnLKiLqbWEl2H"
    },
    {
      Name: "OFII - DT Rennes",
      recordID: "reclV2la1MHfxEOca"
    },
    {
      Name: "OFII - DT Rouen",
      recordID: "recrGfAB2AH1E3Q8O"
    },
    {
      Name: "OFII - DT Strasbourg",
      recordID: "reci2MnSRZ7AjNS1C"
    },
    {
      Name: "OFII - DT Toulouse",
      recordID: "recbqUewkCcrEcZZB"
    },
    {
      Name: "OFII - Grenoble",
      recordID: "recGQQp9UV3mNEadX"
    },
    {
      Name: "OFII - Grenoble",
      recordID: "recGWcGaatAiaaQtl"
    },
    {
      Name: "OFII - Lille",
      recordID: "recjZ8q0kr1hIMSzh"
    },
    {
      Name: "OFII - Lille",
      recordID: "recGvSSrmRMi9bx7v"
    },
    {
      Name: "OFII - Lyon",
      recordID: "rec9VoDQzDFVm5bAe"
    },
    {
      Name: "OFII - Lyon",
      recordID: "rec2aRp8103IUDJjS"
    },
    {
      Name: "OFII - Marseille",
      recordID: "recYEdIamDaq3fYGT"
    },
    {
      Name: "OFII - Marseille",
      recordID: "recJ1cVLNUK21CSO4"
    },
    {
      Name: "OFII - Melun",
      recordID: "rectewwRv2M6YKJkZ"
    },
    {
      Name: "OFII - Metz",
      recordID: "recFap6fEBJ6Z1rJl"
    },
    {
      Name: "OFII - Montrouge",
      recordID: "recs6QlxNGzwZaQEF"
    },
    {
      Name: "OFII - Montrouge",
      recordID: "rec161ccXWC5mcL0h"
    },
    {
      Name: "OFII - National",
      recordID: "recKD9iEJ4hFfnka5"
    },
    {
      Name: "OFII - Nice",
      recordID: "recz6Jo1uMcFuk6O8"
    },
    {
      Name: "OFII - Nice",
      recordID: "rechJZvQFdukc1g4g"
    },
    {
      Name: "OFII - Nord-Pas de Calais (59 + 62)",
      recordID: "recrrkqQt6LJkxjR4"
    },
    {
      Name: "OFII - PACA",
      recordID: "recmXFIRvdPYiyKut"
    },
    {
      Name: "OFII - Paris",
      recordID: "recPvKWTO6r0dpGTZ"
    },
    {
      Name: "OFII - Paris",
      recordID: "recRng8EunC3sLsR4"
    },
    {
      Name: "OFII - Poitiers",
      recordID: "recNBW5A8UixQcpH9"
    },
    {
      Name: "OFII - Reims",
      recordID: "rec5SyfGXbuCphLXZ"
    },
    {
      Name: "OFII - Rennes",
      recordID: "recPKXYe8Kczm81zf"
    },
    {
      Name: "OFII - Rouen",
      recordID: "recRVZnM9nmNzaR1b"
    },
    {
      Name: "OFII - Rouen",
      recordID: "rec8GXqsUqU4Tc3hx"
    },
    {
      Name: "OFII - Si\xE8ge",
      recordID: "recnokPPk35TznYk1"
    },
    {
      Name: "OFII - Strasbourg",
      recordID: "recflplwavoJ7y43Z"
    },
    {
      Name: "OFII - Toulouse",
      recordID: "recaKlhRzlIwTulrn"
    },
    {
      Name: "OFII - Yvelines",
      recordID: "recfMxuhjFsRrNJBq"
    },
    {
      Name: "OGFA - CADA de Pau",
      recordID: "recf5DyAYKOM79TPI"
    },
    {
      Name: "OGFA - CADA Messins",
      recordID: "recCdWAfAW4HYpmr6"
    },
    {
      Name: "OGFA - HUDA de Pau",
      recordID: "recFgycMINaS1X30Q"
    },
    {
      Name: "OGFA - Si\xE8ge",
      recordID: "recBbaPrHQ3Ts68sX"
    },
    {
      Name: "OGFA - Strasbourg",
      recordID: "rec1o2rfNEkIDBrze"
    },
    {
      Name: "OICEM - CPH de Pau",
      recordID: "rec3nYhr664TM7ZFM"
    },
    {
      Name: "ONG EDESI - Si\xE8ge",
      recordID: "recpgzXJQnSq9r4lb"
    },
    {
      Name: "ONM (Oeuvre Normande des M\xE8res) - Nice",
      recordID: "rec32tNNQPkndvJPs"
    },
    {
      Name: "OpenClassrooms - Si\xE8ge",
      recordID: "rec60EBZH19CcoAoo"
    },
    {
      Name: "Ordre de Malte - Pau",
      recordID: "rec8u85TBJ0F2pJTy"
    },
    {
      Name: "OSIRIS - Si\xE8ge",
      recordID: "recyv7tIPpvmLPkvv"
    },
    {
      Name: "Osons Ici Et Maintenant - Si\xE8ge",
      recordID: "recDym8Ee4KfV5LtU"
    },
    {
      Name: "Ovale Citoyen (insertion par rugby) - Si\xE8ge",
      recordID: "recRqxPucRw49Gk1D"
    },
    {
      Name: "Paradoxes  - Si\xE8ge",
      recordID: "rec6pQjF4NlZ5Voas"
    },
    {
      Name: "Parole Expression - Si\xE8ge",
      recordID: "reccaCSUawopsssbo"
    },
    {
      Name: "Paroles d'Hommes et de Femmes - Si\xE8ge",
      recordID: "rece5e4ceAWijmW7M"
    },
    {
      Name: "Paroles voyageuses - Si\xE8ge",
      recordID: "recXDS8Lu53w7pyZv"
    },
    {
      Name: "Party en Exil - Si\xE8ge",
      recordID: "recPXALkOl3ZfSoiv"
    },
    {
      Name: "Pas Sans Toit 31 - Toulouse",
      recordID: "recoMZE8r87bPqQrG"
    },
    {
      Name: "Pastorale des Migrants - Dioc\xE8se de Metz",
      recordID: "recRWrUW1vF7FFui9"
    },
    {
      Name: "Pastorale des Migrants - Nice",
      recordID: "recgg8FdJnfdUdoGr"
    },
    {
      Name: "PBE (Profession Bien-\xEAtre) - Si\xE8ge",
      recordID: "recSgxCR8cczhZ13B"
    },
    {
      Name: "PEI ENSAD - Si\xE8ge",
      recordID: "rec8SdzmORxohzD4r"
    },
    {
      Name: "PEP - 29",
      recordID: "recWhA9fF1rNQ69Tu"
    },
    {
      Name: "Petits Fr\xE8res des Pauvres - Toulouse",
      recordID: "rec3rDLY36as9d3Uz"
    },
    {
      Name: "PFPA - Si\xE8ge",
      recordID: "reco4p6uN40C3jAj6"
    },
    {
      Name: "Philia - CADA",
      recordID: "recuTAdt5ulnclbkh"
    },
    {
      Name: "Philia - Si\xE8ge",
      recordID: "recQ0qXwic6qoNk2K"
    },
    {
      Name: "Pierre Claver - School",
      recordID: "recM8NgoHsUyij9mt"
    },
    {
      Name: "PimpMyApp - Si\xE8ge",
      recordID: "recgl2moQOWd8Kv1v"
    },
    {
      Name: "PLACE - Central",
      recordID: "rechYp4XCgODkyAiY"
    },
    {
      Name: "PLACE - Ecole des Ponts Business School (ITM Certificate)",
      recordID: "rec609J407Jio6Dfq"
    },
    {
      Name: "PLACE - Emerging Leaders",
      recordID: "reck5YJR9cmlJTYsK"
    },
    {
      Name: "PLACE - Ice Academy",
      recordID: "recbJvUPbhYJ3yPJn"
    },
    {
      Name: "PLACE - Si\xE8ge",
      recordID: "rec9pW8bd12OWWSvC"
    },
    {
      Name: "Plateforme d\u2019Accueil des Demandeurs d\u2019Asiles     \xAB le Grand Centrale \xBB - Si\xE8ge",
      recordID: "recwoNcJ18lh4wjDL"
    },
    {
      Name: "Plateforme Emploi Entreprises UCRM - 31",
      recordID: "recit1ZPx28viHOUE"
    },
    {
      Name: "Plateforme Langues et Communication - Si\xE8ge",
      recordID: "recmcTUbscokwVa9Y"
    },
    {
      Name: "Plateforme TALENTS MIGRANTS - Si\xE8ge",
      recordID: "recf7gSIJHTL1cEdA"
    },
    {
      Name: "PLIE - Argenteuil",
      recordID: "recYTMwcfdKiQXukN"
    },
    {
      Name: "PLIE - Haute Garonne",
      recordID: "recSOEftcDYu1d2Rc"
    },
    {
      Name: "PLIE - Les Sources",
      recordID: "recpb5cXagwC80Bzu"
    },
    {
      Name: "PLIE - Libournais",
      recordID: "rectO6ihMHnqKf3We"
    },
    {
      Name: "PLIE - Portes du Sud",
      recordID: "rec9Yvfun3PVEogup"
    },
    {
      Name: "PLIE - Technowest",
      recordID: "rec7SQ7gDzxq3Xfch"
    },
    {
      Name: "P\xF4le Emploi - Agence NANTES CENTRE",
      recordID: "recTPeKMgocBy3bUG"
    },
    {
      Name: "P\xF4le Emploi - Armand Carrel",
      recordID: "reca2GQ0lL0qrtPc2"
    },
    {
      Name: "P\xF4le Emploi - Arras",
      recordID: "rec7bzAPCrF0lwxfj"
    },
    {
      Name: "P\xF4le Emploi - Aulnay-sous-bois",
      recordID: "recLP11BXk4P9EBf5"
    },
    {
      Name: "P\xF4le Emploi - AURA",
      recordID: "recAbD1Ko2xGnMxli"
    },
    {
      Name: "P\xF4le Emploi - Brest",
      recordID: "recOmkLvzPWnUSswU"
    },
    {
      Name: "P\xF4le Emploi - Bretagne",
      recordID: "recCGO9ytlctI1ApD"
    },
    {
      Name: "P\xF4le Emploi - Equip' Emploi Genevoix",
      recordID: "recK1FMYcYYLOtiCI"
    },
    {
      Name: "P\xF4le Emploi - Equip' Emploi Nanterre",
      recordID: "recAnBhi1H0FSqzap"
    },
    {
      Name: "P\xF4le Emploi - GENNEVILLIERS",
      recordID: "reciBthubwdrPU4Mj"
    },
    {
      Name: "P\xF4le Emploi - Hauts-de-France",
      recordID: "recMiNwgfLJRhOzSL"
    },
    {
      Name: "P\xF4le Emploi - IDF",
      recordID: "recKlKob5AjqMjC8G"
    },
    {
      Name: "P\xF4le Emploi - Laumi\xE8re - Paris 19",
      recordID: "recTLXlkp0AI7GUf9"
    },
    {
      Name: "P\xF4le Emploi - Le Havre - Seine-Maritime",
      recordID: "rec3ev7ollFf98cv4"
    },
    {
      Name: "P\xF4le Emploi - Lyon",
      recordID: "rec0L3snHzZ6evkin"
    },
    {
      Name: "P\xF4le Emploi - Marseille",
      recordID: "recTVgLUknmzs0Ttb"
    },
    {
      Name: "P\xF4le Emploi - Mont-de-Marsan",
      recordID: "recibpAiX62WaiUlQ"
    },
    {
      Name: "P\xF4le Emploi - Nanterre",
      recordID: "recViOxxOifkWo2Qd"
    },
    {
      Name: "P\xF4le Emploi - Paris",
      recordID: "rec39yEh2SncHVFB6"
    },
    {
      Name: "P\xF4le Emploi - Paris 10e",
      recordID: "recmbEv9BHh9y2yZg"
    },
    {
      Name: "P\xF4le Emploi - Paris 10\xE8me : Vicq D'Azir",
      recordID: "recsPT3Ic92dtbhlz"
    },
    {
      Name: "P\xF4le Emploi - Paris Cardinet",
      recordID: "recqqogRhNQzp7isj"
    },
    {
      Name: "P\xF4le Emploi - rennes nord",
      recordID: "receaCj6u0n2pkBYS"
    },
    {
      Name: "P\xF4le Emploi - Rennes Sud",
      recordID: "rec4K1tyuHv9IfvdZ"
    },
    {
      Name: "P\xF4le Emploi - Saint Flour",
      recordID: "reccNtijqYnzlr8w7"
    },
    {
      Name: "P\xF4le Emploi - Si\xE8ge",
      recordID: "recm3Ow51y84SfE87"
    },
    {
      Name: "P\xF4le Emploi - Toulouse",
      recordID: "recePZfeUoKApHqew"
    },
    {
      Name: "POP - IDF",
      recordID: "rec6w6zcDbvwvRRPy"
    },
    {
      Name: "PQNA (Pays et Quartiers de la Nouvelle Aquitaine) - Si\xE8ge",
      recordID: "recD0rAgIl9rMBO9H"
    },
    {
      Name: "PRAHDA Vitrolles - Si\xE8ge",
      recordID: "recMj3Mu5SAqPFIID"
    },
    {
      Name: "PRAHDA Vitrolles - Si\xE8ge",
      recordID: "rec1fxsLXe42ESMYy"
    },
    {
      Name: "Pr\xE9fecture - 13",
      recordID: "rec4iTzLCscpd0Xvs"
    },
    {
      Name: "Pr\xE9fecture - 35",
      recordID: "recmk9EMwcUwIalDa"
    },
    {
      Name: "Pr\xE9fecture - Alpes-Maritime",
      recordID: "recrnS2glKOqoAzBq"
    },
    {
      Name: "Pr\xE9fecture - Bouches du Rh\xF4ne",
      recordID: "recVdRp9d4KFbgrf0"
    },
    {
      Name: "Pr\xE9fecture - Bretagne - droit des femmes",
      recordID: "recsDkfX2o4CV39KL"
    },
    {
      Name: "Pr\xE9fecture - C\xF4te d'Or",
      recordID: "recshQ7vpWObleTzR"
    },
    {
      Name: "Pr\xE9fecture - C\xF4tes d'Or",
      recordID: "rec7YyUOXs1lYQjBi"
    },
    {
      Name: "Pr\xE9fecture - Gironde",
      recordID: "recCsI81DDR41mSuM"
    },
    {
      Name: "Pr\xE9fecture - Haut de France - ESS",
      recordID: "recqWZMEjp2J9g2sb"
    },
    {
      Name: "Pr\xE9fecture - Haute Garonne",
      recordID: "recP12dwyF56WwaIJ"
    },
    {
      Name: "Pr\xE9fecture - Hauts de France",
      recordID: "rec6C7GQALoqHOC5Z"
    },
    {
      Name: "Pr\xE9fecture - \xCEle de France",
      recordID: "recgJALkDsIDx0zYs"
    },
    {
      Name: "Pr\xE9fecture - Nord",
      recordID: "rec7aNE6tJDWR0Lqu"
    },
    {
      Name: "Pr\xE9fecture - Occitanie",
      recordID: "recEqNoxFC5CBpip8"
    },
    {
      Name: "Pr\xE9fecture - Pas de Calais - Bureau de l'immigration et de l'int\xE9gration",
      recordID: "recq9xtYbAjnxpRXD"
    },
    {
      Name: "Pr\xE9fecture - Pyr\xE9n\xE9es Atlantiques - Bureau immigration",
      recordID: "recoOs4gi6k1TfX2m"
    },
    {
      Name: "Pr\xE9fecture - Rh\xF4ne",
      recordID: "recjzpHzDPgs8wixy"
    },
    {
      Name: "Pr\xE9fecture - Seine Maritime - Bureau int\xE9gration",
      recordID: "reccKUiu1XGgEQ6Ii"
    },
    {
      Name: "Premi\xE8re Urgence Internationale - Si\xE8ge",
      recordID: "recgLYXx1x0LdKURR"
    },
    {
      Name: "PRISME - Si\xE8ge",
      recordID: "recuNbFc44kNGu3tU"
    },
    {
      Name: "Programme Etudiant.e.s Exil\xE9.e.s de l\u2019EHESS - Programme Etudiant.e.s Exil\xE9.e.s de l\u2019EHESS",
      recordID: "recHifzq8gC9wRYrD"
    },
    {
      Name: "Promofemme - Si\xE8ge",
      recordID: "recwmY5X2k6dLJa50"
    },
    {
      Name: "R59 Formation - 59",
      recordID: "recw9eIhQqmcuGfAJ"
    },
    {
      Name: "Racines et Horizons - Si\xE8ge",
      recordID: "reczblPxKJcA1g2NS"
    },
    {
      Name: "Ramina (R\xE9seau des Minots Non-Accompagn\xE9s) - Si\xE8ge",
      recordID: "recU6gZTSd0bys6QV"
    },
    {
      Name: "REBONDIR Formation - Nemours",
      recordID: "recQz0tG0QZAFDZ5y"
    },
    {
      Name: "Reconnect - Si\xE8ge",
      recordID: "recBKfzuhddCWQbmQ"
    },
    {
      Name: "REED - Lyon",
      recordID: "recLoLzEJEaJ5D7HY"
    },
    {
      Name: "Refugee Food festival - Si\xE8ge",
      recordID: "rectd7IWoJI58GQev"
    },
    {
      Name: "RefugeeFood - RefugeeFood",
      recordID: "recPb0xthhTdhumMF"
    },
    {
      Name: "R\xE9fugi\xE9s Bienvenue - Si\xE8ge",
      recordID: "recQ8YtDOLxHoA92Y"
    },
    {
      Name: "R\xE9fugi\xE9s.info - Si\xE8ge",
      recordID: "recnyVv8bNFRsn04L"
    },
    {
      Name: "R\xE9fugi\xE9s Paris 1 - Si\xE8ge",
      recordID: "recq8flGl8u0mvc9S"
    },
    {
      Name: "R\xE9gion Bretagne - Si\xE8ge",
      recordID: "recIvE89gUZWAcO1y"
    },
    {
      Name: "R\xE9gion Nouvelle-Aquitaine - Si\xE8ge",
      recordID: "recmOzuO2LCqgPsH0"
    },
    {
      Name: "Reines de femmes  - Si\xE8ge",
      recordID: "rec4v7b9jVYDrIRzP"
    },
    {
      Name: "Relais Accueil - Si\xE8ge",
      recordID: "recYihZF7nSzKj7hk"
    },
    {
      Name: "Relais Aide et Amiti\xE9 - Si\xE8ge",
      recordID: "rec7DIXhxq74uwAAt"
    },
    {
      Name: "Relais de Saint Donat - Si\xE8ge",
      recordID: "recNsMgGPrF9nyfq8"
    },
    {
      Name: "Relais Ozanam - Grenoble",
      recordID: "recYsAGiRV5kCb864"
    },
    {
      Name: "Rena\xEEtre - Si\xE8ge",
      recordID: "reciuLojJ01X1ompL"
    },
    {
      Name: "Rencontre et Dialogue - Si\xE8ge",
      recordID: "recBcXwfPDAV942Wh"
    },
    {
      Name: "Rennes M\xE9tropole - Si\xE8ge",
      recordID: "reciOQMpxuI0613ca"
    },
    {
      Name: "RESAM (R\xE9seau de Solidarit\xE9 des Association Messines) - Si\xE8ge",
      recordID: "recYQxX6AYEAl4c6w"
    },
    {
      Name: "RESAM (R\xE9seau de Solidarit\xE9 des Association Messines) - Si\xE8ge",
      recordID: "recW4NJmdNuDDWPbi"
    },
    {
      Name: "R\xE9seau Alpha - ADAGE",
      recordID: "reczSWjuPo6Sq2xCc"
    },
    {
      Name: "R\xE9seau Alpha - ARIES",
      recordID: "recjYONVJ8pJIiy4r"
    },
    {
      Name: "R\xE9seau Alpha - ETM (Entraide Tiers Monde)",
      recordID: "recpy8Ko9iKG6APpg"
    },
    {
      Name: "R\xE9seau Alpha - Femmes Initiatives",
      recordID: "recG5e80im0gqEtXQ"
    },
    {
      Name: "R\xE9seau Alpha - Plateforme",
      recordID: "recK56Lbu1GEWuFEV"
    },
    {
      Name: "R\xE9seau Alpha - Si\xE8ge",
      recordID: "rec16JweKJAWRapcI"
    },
    {
      Name: "R\xE9seau EIF-FEL - Si\xE8ge",
      recordID: "recVeMGtE841xeDnl"
    },
    {
      Name: "R\xE9seau Hospitalit\xE9s - Si\xE8ge",
      recordID: "recSMA2HQ1jArPbhs"
    },
    {
      Name: "R\xE9seau Les Entreprises pour la Cit\xE9 - Si\xE8ge",
      recordID: "recIxaEAhcd3PeYo3"
    },
    {
      Name: "RESF (R\xE9seau Education Sans Fronti\xE8res) - Rouen",
      recordID: "recL22tZnnhnEQpnt"
    },
    {
      Name: "RESF (R\xE9seau Education Sans Fronti\xE8res) - Si\xE8ge",
      recordID: "recccTNNOOzBqPvHG"
    },
    {
      Name: "R\xE9sidence Jeunes Sainte Constance - Metz",
      recordID: "recI6wQiqGY2OXZ0s"
    },
    {
      Name: "R\xE9sidence - Les Galets d'Azur",
      recordID: "recNlVSYTYtRSzxDY"
    },
    {
      Name: "R\xE9sidence Plus - Si\xE8ge",
      recordID: "recoXqqZUx8Qd4LCs"
    },
    {
      Name: "Residsocial - Si\xE8ge",
      recordID: "recYeblMyS84X8Q5k"
    },
    {
      Name: "R\xC9SO Solidaire - Si\xE8ge",
      recordID: "recrqVD8DhOgwaqg1"
    },
    {
      Name: "RESOME - Agros Migrateurs",
      recordID: "recqPxFKuIpdftxut"
    },
    {
      Name: "RESOME - InFLEchir",
      recordID: "recGJA7hdNVN0Bnku"
    },
    {
      Name: "RESOME - Si\xE8ge",
      recordID: "recrpneTSO0DKY2dP"
    },
    {
      Name: "R\xE9soudre - Si\xE8ge",
      recordID: "reckkhEiAROr14ujc"
    },
    {
      Name: "Revivre - Si\xE8ge",
      recordID: "recyNyzrqnHXLOsKZ"
    },
    {
      Name: "RICOCHET - Si\xE8ge",
      recordID: "recuK7x0refvP2F0G"
    },
    {
      Name: "Rising You - Si\xE8ge",
      recordID: "recBCjT0zwq87d3xQ"
    },
    {
      Name: "RLG - Si\xE8ge",
      recordID: "recMXD8z00YOUemnx"
    },
    {
      Name: "Ronalpia - Lyon",
      recordID: "recVmVVf4Bb6oRD3b"
    },
    {
      Name: "Rotary - Bordeaux",
      recordID: "reckUHTr6CYKGVXaD"
    },
    {
      Name: "ROUTE 37 - Si\xE8ge",
      recordID: "recKKlmQx5TQi53JY"
    },
    {
      Name: "RSM - R\xE9seau de Solidarit\xE9 avec les Migrants - ROUEN",
      recordID: "rec907BhSalutelfm"
    },
    {
      Name: "RTA (Rouen Terre d'Accueil) - Si\xE8ge",
      recordID: "rec4PxTaKzyIibV4J"
    },
    {
      Name: "RUBIS - Si\xE8ge",
      recordID: "recnma8OBaWEFaCOZ"
    },
    {
      Name: "SAFI - Si\xE8ge",
      recordID: "recBJuJcujpmIMtYj"
    },
    {
      Name: "Saint Joseph Afor - CHRS AFOR Saint Joseph",
      recordID: "rec3HOL7hV3HkrdKt"
    },
    {
      Name: "Salle Saint Bruno - Espace Proximit\xE9 Emploi",
      recordID: "recYTBIH4yBcIIIXZ"
    },
    {
      Name: "Salle Saint Bruno - Si\xE8ge",
      recordID: "recVHRCIzqkXiPShp"
    },
    {
      Name: "SAM (Association Solidarite\u0301 Accompagnement des Migrants) - Si\xE8ge",
      recordID: "rectvY4ySPXSuWWGc"
    },
    {
      Name: "Sama For All - Si\xE8ge",
      recordID: "recEwo5vkJarR0odf"
    },
    {
      Name: "Samu Social - Programme ELAN",
      recordID: "rec5RC4MOj6kc2BOS"
    },
    {
      Name: "Samu Social - Si\xE8ge",
      recordID: "rec9huhRdY9MPuKVp"
    },
    {
      Name: "Sara Logisol - CADA",
      recordID: "recYO1IXj1JfdHhAv"
    },
    {
      Name: "Sara Logisol - CADA Sara Logisol",
      recordID: "recILOcPPpkG54Wqh"
    },
    {
      Name: "Sara Logisol - Si\xE8ge",
      recordID: "rec9pJYkOhjxWT4eR"
    },
    {
      Name: "Sato Interim - Si\xE8ge",
      recordID: "recEVLquyNzwXa4eT"
    },
    {
      Name: "Sauve Garde - CADA",
      recordID: "recPWezvyti0UNlJY"
    },
    {
      Name: "Sauve Garde - CADA BON ENCONTRE",
      recordID: "recu0v0d7Qq7ukTEH"
    },
    {
      Name: "Sauvegarde 13 - Si\xE8ge",
      recordID: "rec2C50PKcFWbK9WF"
    },
    {
      Name: "Sauvegarde 56 - CADA",
      recordID: "recTaA9nwVcBgT2W4"
    },
    {
      Name: "Sauvegarde 56 - Si\xE8ge",
      recordID: "recH86P8TrgYVap4S"
    },
    {
      Name: "Sauvegarde de l\u2019enfance - Si\xE8ge",
      recordID: "recybUibqfVo1l2pn"
    },
    {
      Name: "Sawa - Si\xE8ge",
      recordID: "recFb3o5K0Z5lNpPm"
    },
    {
      Name: "Scarab\xE9e - Si\xE8ge",
      recordID: "recdIDiMT0svsNZNi"
    },
    {
      Name: "Schebba, Maison de la Femme - Si\xE8ge",
      recordID: "receFjKswMk2x3mHF"
    },
    {
      Name: "Sciences Po - Programme Certifiant",
      recordID: "recD4vdhENcDc6W9C"
    },
    {
      Name: "Sciences Po Rennes - Communication",
      recordID: "rec9uFYIM1Blncq03"
    },
    {
      Name: "SCOP Confluence - Si\xE8ge",
      recordID: "recrZORmDS1aiqfZI"
    },
    {
      Name: "SEA35 - Si\xE8ge",
      recordID: "reckW4og1FnCCliqW"
    },
    {
      Name: "Secours Catholique - Arras",
      recordID: "recFTd0nRt9t9H9dt"
    },
    {
      Name: "Secours Catholique - Brest",
      recordID: "recgcfRQSLryPIzgO"
    },
    {
      Name: "Secours Catholique - C\xE8dre",
      recordID: "recHoIVQeGjklcmcw"
    },
    {
      Name: "Secours Catholique - Centre C\xE8dre",
      recordID: "reclfrFy4haX2tzBC"
    },
    {
      Name: "Secours Catholique - CPH Cit\xE9 Saint Yves",
      recordID: "recOuSEAjAXnBHIdv"
    },
    {
      Name: "Secours Catholique - D\xE9l\xE9gation Cantal Puy-de-D\xF4me",
      recordID: "recZpRaIpFotySKq9"
    },
    {
      Name: "Secours Catholique - D\xE9l\xE9gation d'Indre-et-Loire",
      recordID: "reci8yxTWEhuFORVO"
    },
    {
      Name: "Secours Catholique - Dioc\xE8se de Marseille",
      recordID: "recUyIYvtD5pAUYBw"
    },
    {
      Name: "Secours Catholique - Finist\xE8re",
      recordID: "recZi0VNHwK7cWEwp"
    },
    {
      Name: "Secours Catholique - Ille et Vilaine",
      recordID: "rec9TavtLhHogd2yu"
    },
    {
      Name: "Secours Catholique - Maison B\xE9thanie",
      recordID: "recaUwGJP6J3PzOqx"
    },
    {
      Name: "Secours catholique - Nice",
      recordID: "recH9Krpa9VzI0pwB"
    },
    {
      Name: "Secours Catholique - Si\xE8ge",
      recordID: "recdOyYVcuLtjsuJ9"
    },
    {
      Name: "Secours Catholique - Toulouse",
      recordID: "recZxnd5D1g2YUbY5"
    },
    {
      Name: "Secours Islamique - Centre d'accueil",
      recordID: "recL3ZpnqaCUFejd7"
    },
    {
      Name: "Secours Islamique - Si\xE8ge",
      recordID: "recYOVIUZXO5D3cp5"
    },
    {
      Name: "Secours Populaire - Antenne de Toulon",
      recordID: "rec8xrJrZV06dbE08"
    },
    {
      Name: "Secours Populaire - Bretagne",
      recordID: "recX5osf6pbrT4zsc"
    },
    {
      Name: "Secours Populaire - F\xE9d\xE9ration d'Indre et Loire",
      recordID: "recNtIZawDjXRoYbT"
    },
    {
      Name: "Secours Populaire - Locarno",
      recordID: "recOL56ziW8xajQnX"
    },
    {
      Name: "Secours Populaire - Montpellier",
      recordID: "recckWvGvIoUn4lvk"
    },
    {
      Name: "Secours Populaire - Nice",
      recordID: "rec4chBBWjeS98AiF"
    },
    {
      Name: "Secours Populaire - Nord",
      recordID: "recpHlaomMCrx8ZQA"
    },
    {
      Name: "Secours Populaire - Rennes",
      recordID: "recpHwKLtzieqdlDI"
    },
    {
      Name: "Secours Populaire - Si\xE8ge",
      recordID: "recds1DXkQhx3gbWC"
    },
    {
      Name: "S\xE9maphor - E2II - agence d'int\xE9rim",
      recordID: "recw15hGzgb3NsHxG"
    },
    {
      Name: "SENDRA - Service d'aide \xE0 la recherche d'emplois - Si\xE8ge",
      recordID: "rec0QpJKCfnk9C2Wq"
    },
    {
      Name: "SERENA Marseille - Si\xE8ge",
      recordID: "recLwtCtkMyEowwPc"
    },
    {
      Name: "Service d'Accompagnement des Migrants en Auvergne - Si\xE8ge",
      recordID: "recungGg3eG7p0K9v"
    },
    {
      Name: "Services M\xE9diation - Si\xE8ge",
      recordID: "rec3eAvTKPiygetQN"
    },
    {
      Name: "SGAR - Nouvelle Aquitaine",
      recordID: "recSi8YjZy7YY1Oq6"
    },
    {
      Name: "Sharing perspective - Si\xE8ge",
      recordID: "recrDk6BA3UfuBbBF"
    },
    {
      Name: "SIAO  - 75",
      recordID: "reczdZv7YTJxPFGFB"
    },
    {
      Name: "SIAO  - Dijon",
      recordID: "recCP5ANgiy9S2L7g"
    },
    {
      Name: "SIAO  - Rennes",
      recordID: "recglAvlQvkh1iSAM"
    },
    {
      Name: "SIAO  - Si\xE8ge",
      recordID: "recyyAnwjPJ08absI"
    },
    {
      Name: "- Si\xE8ge",
      recordID: "recfAJvoYajPdAQI7"
    },
    {
      Name: "Simplon - Central",
      recordID: "recHVM6nTJQxZYVtL"
    },
    {
      Name: "Simplon - Occitanie",
      recordID: "rec3cQ7XE5hr1Izau"
    },
    {
      Name: "Simplon - Refugeeks",
      recordID: "recwDrO9x4ZZZoiwD"
    },
    {
      Name: "Simplon - Si\xE8ge",
      recordID: "recklwEeu1ycypIXq"
    },
    {
      Name: "Simplon - Welcode",
      recordID: "recVoWw39fXyf37R9"
    },
    {
      Name: "SINGA - BORDEAUX",
      recordID: "rec4zqn753ZTWhq4l"
    },
    {
      Name: "SINGA - Buddy Pro",
      recordID: "recwM0d7ghzvYLzKr"
    },
    {
      Name: "SINGA - CALM",
      recordID: "recxEWAYGQHSSKhsy"
    },
    {
      Name: "SINGA - Central",
      recordID: "recbg4CW1dWGxdmzj"
    },
    {
      Name: "SINGA - \xCEle-de-France - Communaut\xE9",
      recordID: "reczZ9L0r70DWPWtK"
    },
    {
      Name: "SINGA - \xCEle-de-France - Formation lien interculturel",
      recordID: "recXe3GBO8PIp5SWD"
    },
    {
      Name: "SINGA - \xCEle-de-France - Incubation",
      recordID: "rec6ihYtV9Kdzn770"
    },
    {
      Name: "SINGA - \xCEle-de-France - Modules pr\xE9paration entreprenariat",
      recordID: "rec6GfauGgbdgjlfC"
    },
    {
      Name: "SINGA - \xCEle-de-France - Permanences entreprenariat",
      recordID: "recEc5o9dulLeb7yS"
    },
    {
      Name: "SINGA - \xCEle-de-France - Pr\xE9-incubation",
      recordID: "rec2mvltQX5sb4716"
    },
    {
      Name: "SINGA - \xCEle-de-France - Sensibilisation lien social",
      recordID: "recmC2JPbkOlKngeH"
    },
    {
      Name: "SINGA - J'accueille",
      recordID: "rec8RvIHTu6hzHByK"
    },
    {
      Name: "SINGA - Lille - Communaut\xE9",
      recordID: "recm2FYQYrDMY9qGt"
    },
    {
      Name: "SINGA - Lille - Formation lien interculturel",
      recordID: "recn9agBFtLDBJhtn"
    },
    {
      Name: "SINGA - Lille - Incubation",
      recordID: "recB2a5ttXxFekR0O"
    },
    {
      Name: "SINGA - Lille - Modules pr\xE9paration entreprenariat",
      recordID: "recGl6Ef02gZugmiY"
    },
    {
      Name: "SINGA - Lille - Permanences entreprenariat",
      recordID: "recFuvO6mtxU7aMH5"
    },
    {
      Name: "SINGA - Lille - Pr\xE9-incubation",
      recordID: "recLnGdhp7dksa1rl"
    },
    {
      Name: "SINGA - Lille - Sensibilisation lien social",
      recordID: "receNk2mbEO7Id9Nr"
    },
    {
      Name: "SINGA - Lyon",
      recordID: "recEdgKU7CY1r0oKM"
    },
    {
      Name: "SINGA - Marseille",
      recordID: "recXwwtuc1CgYJbTK"
    },
    {
      Name: "SINGA - Nantes",
      recordID: "recYGAJcgweRqUMAv"
    },
    {
      Name: "SINGA - Si\xE8ge",
      recordID: "rechFqciw2fMuthrM"
    },
    {
      Name: "Sistech - Si\xE8ge",
      recordID: "recKynvwh7EF0tGph"
    },
    {
      Name: "Skill&You - Si\xE8ge",
      recordID: "rec8c1enG64NuJJx0"
    },
    {
      Name: "Small Bang - Si\xE8ge",
      recordID: "receNKHg4nk5Im2XR"
    },
    {
      Name: "SNL (Solidarit\xE9s Nouvelles pour le Logement) - Essone",
      recordID: "recEqutN9Vef5putf"
    },
    {
      Name: "SNL (Solidarit\xE9s Nouvelles pour le Logement) - Hauts-de-Seine",
      recordID: "receQMnfI3CLSmWGw"
    },
    {
      Name: "SNL (Solidarit\xE9s Nouvelles pour le Logement) - Paris",
      recordID: "recuWxW6iGWKPVW8r"
    },
    {
      Name: "SNL (Solidarit\xE9s Nouvelles pour le Logement) - Si\xE8ge",
      recordID: "rec0ta1iGLPPfM8XC"
    },
    {
      Name: "SNL (Solidarit\xE9s Nouvelles pour le Logement) - Val-de-Marne",
      recordID: "recv4BKHbIyUjTrL7"
    },
    {
      Name: "SNL (Solidarit\xE9s Nouvelles pour le Logement) - Yvelines",
      recordID: "recVHRI7Iicrm9C8C"
    },
    {
      Name: "Soci\xE9t\xE9 Saint-Vincent de Paul - Marne",
      recordID: "recv519pwtFDtdsz5"
    },
    {
      Name: "Soci\xE9t\xE9 Saint-Vincent de Paul - Si\xE8ge",
      recordID: "reclby0YdOfzFYxhG"
    },
    {
      Name: "Soci\xE9t\xE9 Saint Vincent - Si\xE8ge",
      recordID: "recqF2OybuJhKwKp2"
    },
    {
      Name: "SOLAMI - Si\xE8ge",
      recordID: "rec4iEY6i5Nl7D3cz"
    },
    {
      Name: "Soli'Act - Reims",
      recordID: "recjyioZ8PsiFWNp4"
    },
    {
      Name: "Solidaire Habitat - Marseille",
      recordID: "recixL3Hro9qsqzgk"
    },
    {
      Name: "Solidarit\xE9 Femmes - Iroise",
      recordID: "recQ4dF7fQG2nYCkG"
    },
    {
      Name: "Solidarit\xE9 Femmes - Si\xE8ge",
      recordID: "recDAaOaFHvvFM3q3"
    },
    {
      Name: "Solidarit\xE9 Migrants - Moselle",
      recordID: "recDbbVJzEqttMMCc"
    },
    {
      Name: "Solidarit\xE9 Provence Afghanistan - Si\xE8ge",
      recordID: "recKJi35TdPG2Zprs"
    },
    {
      Name: "SOLIFORM (Association Cultures et Formations Solidaires ( - Si\xE8ge",
      recordID: "recMNWbkXjVEAKfiw"
    },
    {
      Name: "SOLIHA - 31",
      recordID: "recIt935Mcl2nz3wT"
    },
    {
      Name: "SOLIHA - Provence",
      recordID: "recRQBSz02hOsMw4v"
    },
    {
      Name: "SOLIHA - Si\xE8ge",
      recordID: "recE038QJVVcZ7fAJ"
    },
    {
      Name: "Solincite - Bordeaux",
      recordID: "recmXq5wVS9CZeIfH"
    },
    {
      Name: "Sorbonne Universit\xE9s - DU RESPE",
      recordID: "recCEVSjFkikxb5np"
    },
    {
      Name: "SOS Africaines en Danger - Si\xE8ge",
      recordID: "recXFJ19TOEZm39k5"
    },
    {
      Name: "SOS Femmes - Si\xE8ge",
      recordID: "recPZ97HYEDvRAWLD"
    },
    {
      Name: "SOS M\xE9diterrann\xE9e - Si\xE8ge",
      recordID: "recCrGpRY5aaWSwDk"
    },
    {
      Name: "SOUTIEN MIGRANTS \u2013 COLLECTIF 06 - Nice",
      recordID: "recI7YWV54SfbD7Ic"
    },
    {
      Name: "Sport dans la Ville - Hauts de France",
      recordID: "recIu75WDQ3wFr1wB"
    },
    {
      Name: "Sport dans la Ville - IDF",
      recordID: "recFCTPQ4rgSYxuNp"
    },
    {
      Name: "Sport dans la ville - Si\xE8ge",
      recordID: "rec8quI7WJWnNVtl3"
    },
    {
      Name: "Sport dans la Ville - Sud",
      recordID: "recyK2nn71hXfbYlK"
    },
    {
      Name: "SSAAD -  Soutien Social Aide Aux Devoirs - Si\xE8ge",
      recordID: "recK8YYT7XtlYj7AT"
    },
    {
      Name: "St Pierre Actes - CADA de Nice",
      recordID: "reca5ikFby3B0atck"
    },
    {
      Name: "SYNERGIE FAMILY - Si\xE8ge",
      recordID: "recosyywvZ5oj64Mc"
    },
    {
      Name: "Synergie - Si\xE8ge",
      recordID: "recaHoJmLqQujEHf7"
    },
    {
      Name: "Syrie D\xE9mocratie 33 - Si\xE8ge",
      recordID: "recjv1kz3hrIMKX7C"
    },
    {
      Name: "Syrie Sans Fronti\xE8res - Si\xE8ge",
      recordID: "recVFejqhSQYp54cI"
    },
    {
      Name: "Tandem R\xE9fugi\xE9s - Si\xE8ge",
      recordID: "recZasCE698WcVgoV"
    },
    {
      Name: "Tandem - Si\xE8ge",
      recordID: "recrfNHGH8s0Kw6Nn"
    },
    {
      Name: "Techfugees - Central",
      recordID: "recoSEd1EIaMja2kq"
    },
    {
      Name: "Techfugees - Si\xE8ge",
      recordID: "recqwCu2XJQuZVx7w"
    },
    {
      Name: "TEEF - Si\xE8ge",
      recordID: "rec2EoZXquyKpUyMG"
    },
    {
      Name: "TEMPS FORT - Si\xE8ge",
      recordID: "reccLeCf41gnfJHfd"
    },
    {
      Name: "Terre d'Ancrage - Si\xE8ge",
      recordID: "recfQRxZg5CnNJEbW"
    },
    {
      Name: "Terre d'Ukraine - Si\xE8ge",
      recordID: "recdZj1nOqZoELmpR"
    },
    {
      Name: "T\xE9traccord - Si\xE8ge",
      recordID: "rece989v85hZgyVQn"
    },
    {
      Name: "TEZEA - Si\xE8ge",
      recordID: "recwkV2hwqHc5Y73E"
    },
    {
      Name: "Th\xE9atre de la Cri\xE9e - Si\xE8ge",
      recordID: "recYUY06aJ6qptSWT"
    },
    {
      Name: "Thot - Si\xE8ge",
      recordID: "rec8qJsiYAPpDa7Ur"
    },
    {
      Name: "Tissu Solidaire - Lyon / Annecy / Grenoble",
      recordID: "recLu6FTwR7yeioVn"
    },
    {
      Name: "TNBA (Th\xE9\xE2tre National de Bordeaux en Aquitaine) - Si\xE8ge",
      recordID: "recj4dkKLaanrltbr"
    },
    {
      Name: "Toit du Ph\xE9nix - Paris",
      recordID: "recBPPJsMUzXMwcKC"
    },
    {
      Name: "Tous B\xE9n\xE9voles - Si\xE8ge",
      recordID: "recPVCyJiZf2ozYIg"
    },
    {
      Name: "Tous pour la Syrie - Si\xE8ge",
      recordID: "rec5NP4MEQxvuz3lV"
    },
    {
      Name: "Tous Repreneurs - Si\xE8ge",
      recordID: "recTVcsr8NfaHPC4m"
    },
    {
      Name: "Tralalere - Si\xE8ge",
      recordID: "recPjcoGqUKluq2zS"
    },
    {
      Name: "Transcultures - Si\xE8ge",
      recordID: "rec3r0HgwAwHFPN6B"
    },
    {
      Name: "Travail entraide - Le Mee sur Seine",
      recordID: "rec2qADLvsdNkCCPm"
    },
    {
      Name: "Tremplin Vitr\xE9 - Si\xE8ge",
      recordID: "recu8h16LYgCWwWuN"
    },
    {
      Name: "TUTTI FRUTTI - Si\xE8ge",
      recordID: "recZ7a8hnPMbvzUn6"
    },
    {
      Name: "UAB PHASES - CADA Le C\xE8dre Grenoble",
      recordID: "rec3vSrigfNUjM8C8"
    },
    {
      Name: "UAIR (Union des Associations Interculturelles de Rennes) - Si\xE8ge",
      recordID: "rech0qEDX3zRUQFDe"
    },
    {
      Name: "UCRM - CADA - Toulouse",
      recordID: "rec7X2BsmOQ3jYY5w"
    },
    {
      Name: "UCRM - CPH SAN FRANCISCO R.MONNIER",
      recordID: "recbDfatn3PSkgX7q"
    },
    {
      Name: "UCRM - HUDA - Toulouse",
      recordID: "recRTQ1RlYRBLogDI"
    },
    {
      Name: "UDSSF (Union Pour Le D\xE9veloppement et La Solidarit\xE9 Sans Fronti\xE8res) - Si\xE8ge",
      recordID: "recyU0eTwpAd6K9w1"
    },
    {
      Name: "UFOLEP - Si\xE8ge",
      recordID: "rec3VGxTI7OFp1RaJ"
    },
    {
      Name: "UMIH - C\xF4te d'Emeraude",
      recordID: "recSH1PVCv9FJVaPe"
    },
    {
      Name: "UMIH - Gironde",
      recordID: "rec6EbVuqT11HHzcC"
    },
    {
      Name: "Un Toit c'est Un Droit - Si\xE8ge",
      recordID: "rec6OZ7IlaS2ZsQ5G"
    },
    {
      Name: "Un Toit Pour Tous - Grenoble",
      recordID: "recAHOxNJayWjXHsA"
    },
    {
      Name: "Une Terre Culturelle - Si\xE8ge",
      recordID: "rec3zwZrnc01jK1XU"
    },
    {
      Name: "UNHAJ - Metz",
      recordID: "rec42l9xREVZDYNC1"
    },
    {
      Name: "UNHAJ - Si\xE8ge",
      recordID: "rec1hObSKLUMVjvIH"
    },
    {
      Name: "UNHCR - Si\xE8ge",
      recordID: "recfrYmX0I7j2op8r"
    },
    {
      Name: "UNICEF - Si\xE8ge",
      recordID: "reccrEqky8j6c7vhr"
    },
    {
      Name: "UNICIL - CADA",
      recordID: "rec3EH8ZMwN2dB2fI"
    },
    {
      Name: "UNICIL - Si\xE8ge",
      recordID: "rec5igdPqyKw9vEII"
    },
    {
      Name: "Union des Entreprises 35 - Si\xE8ge",
      recordID: "recAFa8wLqlcGaxV3"
    },
    {
      Name: "UniR - Si\xE8ge",
      recordID: "recux7xCCBeyYlS5r"
    },
    {
      Name: "Unir - Si\xE8ge",
      recordID: "recNMyxvgMXCYJRxs"
    },
    {
      Name: "Unis-Cit\xE9 - DAX",
      recordID: "recHru7HSzM2pHLIa"
    },
    {
      Name: "Unis-Cit\xE9 - Metz",
      recordID: "rec4FU1ObFORBQbTG"
    },
    {
      Name: "Unis-Cit\xE9 - Metz",
      recordID: "recNOkx0nAJjcnyde"
    },
    {
      Name: "Unis-Cit\xE9 - Paris",
      recordID: "recLt0rkZcj2Cwlv9"
    },
    {
      Name: "Unis-Cit\xE9 - Rennes",
      recordID: "recaZWveRdfsk1qdW"
    },
    {
      Name: "Unis-Cit\xE9 - Rouen",
      recordID: "recILWYw0oK9Hzflc"
    },
    {
      Name: "Unis-Cit\xE9 - Seine-et-Marne",
      recordID: "recKSxfjFKVvBmxZ7"
    },
    {
      Name: "Unit\xE9 Territoriale d'Action Socio M\xE9dicale - Strasbourg Nord",
      recordID: "recC9tNsckrhMUdpT"
    },
    {
      Name: "United Persons for Humaness - Si\xE8ge",
      recordID: "recSZnUhGABV7ftcw"
    },
    {
      Name: "Universit\xE9 d'Aix-Marseille (AMU) - Programme SUFLE",
      recordID: "recDVkVSkKlU7Pjq7"
    },
    {
      Name: "Universit\xE9 de Bordeaux - FLE",
      recordID: "rec0aUQGdS6KsflKO"
    },
    {
      Name: "Universit\xE9 de Bordeaux - Si\xE8ge",
      recordID: "recVzdqkCyVMVenlW"
    },
    {
      Name: "Universit\xE9 de Bourgogne - FLE",
      recordID: "recR3AXs69U8rJuFD"
    },
    {
      Name: "Universit\xE9 de Lille - Programme PILOT",
      recordID: "recIr8pz7fQex4Wyc"
    },
    {
      Name: "Universit\xE9 de Lille - Si\xE8ge",
      recordID: "recepTg46K68dgHRh"
    },
    {
      Name: "Universit\xE9 de Lille - Si\xE8ge",
      recordID: "recyNWjfL0mJrRGFf"
    },
    {
      Name: "Universit\xE9 de Rouen - Vincent Tchen - Universit\xE9 de Rouen",
      recordID: "recHWA8GOMMYPElMS"
    },
    {
      Name: "Universit\xE9 Rennes 1 - Si\xE8ge",
      recordID: "recIASjdLNJFWesb5"
    },
    {
      Name: "Universit\xE9 Rennes 2 - CIREFE",
      recordID: "recUeoaysSF2tIU3J"
    },
    {
      Name: "Universit\xE9 Rennes 2 - FLE",
      recordID: "recNuLBu1fXMiARdp"
    },
    {
      Name: "Universit\xE9 Rennes 2 - Si\xE8ge",
      recordID: "recVbuXd35DoOHBD6"
    },
    {
      Name: "UP for Humanness - Si\xE8ge",
      recordID: "recALwLiLmTLkKe8R"
    },
    {
      Name: "URHAJ-IDF - Si\xE8ge",
      recordID: "rec3sm7QHjgjd8lKZ"
    },
    {
      Name: "URIOPSS Hauts de France - Si\xE8ge",
      recordID: "rec5Pe8qI5IrIFLjx"
    },
    {
      Name: "URIOPSS Hauts de France - Si\xE8ge",
      recordID: "recCU7v0ImTd3UWhc"
    },
    {
      Name: "UROF (F\xE9d\xE9ration Nationale des Unions R\xE9gionales des Organismes de Formation) - Si\xE8ge",
      recordID: "recOOCqNGgGkWNO4Q"
    },
    {
      Name: "Utopia 56 - Si\xE8ge",
      recordID: "recKZatK0khKFYP4B"
    },
    {
      Name: "Utopia 56 - Tours",
      recordID: "recmJEcqwl4A15BD1"
    },
    {
      Name: "Vilta\xEFs - Association Vilta\xEFs, programme BOOSTER 16",
      recordID: "recojvH4XEY6HDJLA"
    },
    {
      Name: "Vitamine T - Si\xE8ge",
      recordID: "reckjDzexbDp7wCDF"
    },
    {
      Name: "VYV - Festival",
      recordID: "rec1KskKFSWai1T2m"
    },
    {
      Name: "Wake up caf\xE9 - Si\xE8ge",
      recordID: "rec9ingUGAaCH1fNP"
    },
    {
      Name: "We Job - Si\xE8ge",
      recordID: "recSU1V81k7AuJJSJ"
    },
    {
      Name: "Weavers France - Lyon",
      recordID: "recxCkcMAH3GMlxFh"
    },
    {
      Name: "Welcome 2 Nanterre - Si\xE8ge",
      recordID: "recXanKcGin2W3AB0"
    },
    {
      Name: "Welcome R\xE9fugi\xE9s - Marseille Nord",
      recordID: "recGDMXpfccZ3EkA6"
    },
    {
      Name: "Welcome R\xE9fugi\xE9s - Marseille Sud",
      recordID: "rec71GCJbwvfIUXye"
    },
    {
      Name: "Welcome Rouen - Si\xE8ge",
      recordID: "recVKoUX4tweTUJHH"
    },
    {
      Name: "Welcome - Si\xE8ge",
      recordID: "recMmJAMrTmUSMWcP"
    },
    {
      Name: "WERO - Test",
      recordID: "recymkjky7lVpLBNy"
    },
    {
      Name: "WERO - Tim",
      recordID: "recn1OyuB24poUFMC"
    },
    {
      Name: "Wimoov - Plateforme IDF",
      recordID: "recYEyCBOCe87Cytp"
    },
    {
      Name: "Wimoov - Si\xE8ge",
      recordID: "rectLeoltXYNNlXZO"
    },
    {
      Name: "XL Emploi - 77",
      recordID: "recqttE99otfa5CVB"
    },
    {
      Name: "YES WE CAMP - Coco Velten",
      recordID: "recICAwgWhyFaCmWH"
    },
    {
      Name: "YES WE CAMP - Si\xE8ge",
      recordID: "recU7KdrAiCtotrXi"
    }
  ];

  // src/utils/autoCompleteOrganisations.js
  var selectors = document.querySelectorAll("input[autocomplete]");
  var setupAutoComplete = function() {
    selectors.forEach(function(selector) {
      const selectorID = "#" + selector.id;
      const autoCompleteJS = new import_autocomplete.default({
        selector: `${selectorID}`,
        placeHolder: "Chercher un organisme...",
        data: {
          src: dataPrescribers,
          keys: ["Name"],
          cache: true
        },
        threshold: 1,
        resultItem: {
          highlight: true,
          tag: "li",
          class: "autoComplete_result"
        },
        resultsList: {
          element: (list, data) => {
            if (!data.results.length) {
              const message = document.createElement("li");
              message.setAttribute("class", "autoComplete_result");
              let errorMsg = "Je ne trouve pas ou n'ai pas d'organisation";
              message.innerHTML = `<span>${errorMsg}</span>`;
              list.prepend(message);
              message.addEventListener("click", () => {
                list.style.display = "none";
                const selection = { value: { Name: errorMsg } };
                autoCompleteJS.input.value = selection.value.Name;
                const recordIDInput = document.querySelectorAll("input[data-prescribing='id']");
                recordIDInput.value = "";
                recordIDInput.forEach(function(input) {
                  input.value = recordIDInput.value;
                });
              });
            }
          },
          noResults: true
        },
        events: {
          input: {
            selection: (event2) => {
              const selection = event2.detail.selection.value.Name;
              autoCompleteJS.input.value = selection;
              const recordIDInput = document.querySelectorAll("input[data-prescribing='id']");
              recordIDInput.value = event2.detail.selection.value.recordID;
              recordIDInput.forEach(function(input) {
                input.value = recordIDInput.value;
              });
            }
          }
        }
      });
    });
  };

  // src/utils/findParams.ts
  init_live_reload();
  var ParamsToSearch = class {
    constructor(name, inputAttr) {
      this.currentURL = new URL(window.location.href);
      this.name = name;
      this.inputAttr = inputAttr;
    }
    search() {
      const input = document.querySelectorAll(`[${this.inputAttr}]`);
      const val = this.currentURL.searchParams.get(this.name);
      input.forEach((i) => {
        if (val) {
          i.value = val;
        }
      });
    }
  };
  var paramsToSearchArr = [
    new ParamsToSearch("application_mail_address", "data-email"),
    new ParamsToSearch("application_prescribing_organisation", "data-orga"),
    new ParamsToSearch("application_acquisition_campaign", "data-campaign"),
    new ParamsToSearch("contact_mail_address", "data-email"),
    new ParamsToSearch("contact_prescribing_organisation", "data-orga"),
    new ParamsToSearch("contact_acquisition_campaign", "data-campaign")
  ];
  var paramsSearch = function() {
    paramsToSearchArr.forEach((param) => {
      param.search();
    });
  };

  // src/utils/inputsMirror.js
  init_live_reload();
  var inputMirror = class {
    constructor() {
      this.inputGroups = {};
      const elements = Array.from(document.querySelectorAll("[data-mirror]"));
      elements.forEach((element) => {
        const groupName = element.getAttribute("data-mirror");
        if (!(groupName in this.inputGroups)) {
          this.inputGroups[groupName] = [];
        }
        this.inputGroups[groupName].push(element);
      });
      this.registerEvents();
    }
    // Register events
    registerEvents() {
      Object.values(this.inputGroups).forEach((group) => {
        group.forEach((element) => {
          element.addEventListener("input", (e) => {
            group.forEach((el) => {
              if (el !== e.target) {
                el.value = e.target.value;
              }
            });
          });
        });
      });
    }
  };
  var inputsMirror = new inputMirror();

  // src/utils/search-city/displayAddress.js
  init_live_reload();

  // src/utils/search-city/const.js
  init_live_reload();
  var inputHabitationFull = document.querySelector("[data-address='full']");
  var addressList = document.querySelector("[data-address-list]");
  var inputVille = document.querySelector("[data-empty-ville]");
  var inputCodePostal = document.querySelector("[data-empty-codepostal]");
  var inputNumberStreet = document.querySelector("[data-empty-numberstreet]");
  var textAddress = document.querySelector("[data-address-item]");
  var parent = textAddress.parentNode;
  var addressText = "[data-adress-label]";
  var addressPostalText = "[data-adress-postal]";

  // src/utils/search-city/getAdressWithAPI.js
  init_live_reload();
  var getAdress = async (search) => {
    try {
      while (parent.children.length > 1) {
        parent.removeChild(parent.lastChild);
      }
      const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${search}`);
      const data = await response.json();
      addressList.style.display = "flex";
      const addresses = data.features.map((feature) => ({
        label: feature.properties.label,
        city: feature.properties.city,
        postcode: feature.properties.postcode,
        context: feature.properties.context,
        numero: feature.properties.housenumber,
        nom: feature.properties.name
      }));
      addresses.forEach((address) => {
        const clone = textAddress.cloneNode(true);
        const cloneLabel = clone.querySelector(addressText);
        const clonePostal = clone.querySelector(addressPostalText);
        cloneLabel.textContent = address.label;
        clonePostal.textContent = address.context;
        clone.style.display = "";
        clone.addEventListener("click", () => {
          inputVille.value = address.city;
          inputCodePostal.value = address.postcode;
          inputNumberStreet.value = address.nom;
          inputHabitationFull.value = address.label;
          addressList.style.display = "none";
        });
        document.addEventListener("click", function(event2) {
          if (!addressList.contains(event2.target)) {
            addressList.style.display = "none";
          }
        });
        parent.appendChild(clone);
      });
      textAddress.style.display = "none";
      return addresses;
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  };

  // src/utils/search-city/displayAddress.js
  addressList.style.display = "none";
  var makeAPIsearch = function(event2) {
    let address = event2.target.value;
    if (address.length > 3) {
      getAdress(address);
    }
  };
  var searchCity = inputHabitationFull.addEventListener("input", makeAPIsearch);

  // src/utils/showHiddenFields.ts
  init_live_reload();
  var hiddenInputs = document.querySelectorAll("[fieldset='hidden']");
  var showHiddenInputs = function(decision) {
    if (!decision) {
      hiddenInputs.forEach(function(input) {
        input.classList.add("display-none");
      });
    }
  };

  // src/utils/setupForms.js
  inputsMirror.registerEvents();
  setupAutoComplete();
  var sectionForm = document.querySelectorAll("[form-component]");
  var prescribingWraps = document.querySelectorAll("[prescribing-wrap]");
  function paramsHas(param) {
    const currentURL2 = new URL(window.location.href);
    return currentURL2.searchParams.has(param);
  }
  function setupForms() {
    paramsSearch();
    showHiddenInputs(false);
    if (!paramsHas("application_prescribing_organisation")) {
      prescribingWraps.forEach(function(precribingWrap) {
        precribingWrap.style.display = "block";
      });
    } else {
      prescribingWraps.forEach(function(precribingWrap) {
        precribingWrap.style.display = "none";
      });
    }
    jQuery.extend(jQuery.validator.messages, {
      required: "Ce champ est requis",
      remote: "votre message",
      email: "Remplissez votre adresse email",
      url: "votre message",
      date: "Remplissez une date valide",
      dateISO: "votre message",
      number: "votre message",
      digits: "votre message",
      creditcard: "votre message",
      equalTo: "votre message",
      accept: "votre message",
      maxlength: jQuery.validator.format("Maximum {0} caract\xE8res."),
      minlength: jQuery.validator.format("Au moins {0} caract\xE8res."),
      rangelength: jQuery.validator.format("votre message  entre {0} et {1} caract\xE9res."),
      range: jQuery.validator.format("votre message  entre {0} et {1}."),
      max: jQuery.validator.format("Votre message est inf\xE9rieur ou \xE9gal \xE0 {0}."),
      min: jQuery.validator.format("Votre message est sup\xE9rieur ou \xE9gal \xE0 {0}.")
    });
    jQuery.validator.addMethod(
      "customPostalCode",
      function(value, element) {
        return this.optional(element) || /^[0-9]{5}$/gm.test(value);
      },
      "Veuillez fournir un code postal valide."
    );
    jQuery.validator.addMethod(
      "customDate",
      function(value, element) {
        return this.optional(element) || /^(((0[1-9]|[12][0-9]|3[01])[- /.](0[13578]|1[02])|(0[1-9]|[12][0-9]|30)[- /.](0[469]|11)|(0[1-9]|1\d|2[0-8])[- /.]02)[- /.]\d{4}|29[- /.]02[- /.](\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00))$/gm.test(
          value
        );
      },
      "Veuillez fournir une date au format JJ/MM/AAAA."
    );
    jQuery.validator.addMethod(
      "customPhoneNumberWhatsApp",
      function(value, element) {
        return this.optional(element) || /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
          value
        );
      },
      "Veuillez fournir un num\xE9ro de t\xE9l\xE9phone valide commen\xE7ant par '+'"
    );
    jQuery.validator.addMethod(
      "customPhoneNumber",
      function(value, element) {
        return this.optional(element) || /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(
          value
        );
      },
      "Veuillez fournir un num\xE9ro de t\xE9l\xE9phone valide"
    );
    jQuery.validator.addMethod(
      "customEmail",
      function(value, element) {
        return this.optional(element) || /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm.test(
          value
        );
      },
      "Veuillez fournir une adresse e-mail valide."
    );
    sectionForm.forEach(function(section) {
      const form = section.querySelector("form[form-element]");
      const formID = section.querySelector("form[form-element]").id;
      const inputsStep1 = form.querySelectorAll(".fieldset.is-1 input");
      const step1 = form.querySelectorAll("[fieldset='step1']");
      const inputsStep2 = form.querySelectorAll(".fieldset.is-2 input, .fieldset.is-2 select");
      const step2 = form.querySelector(".fieldset.is-2");
      const btnStep1 = form.querySelector(".msf-button");
      const btnStep2 = form.querySelector(".msf-button.is-submit");
      const btnSubmit = form.querySelector("[submit-btn]");
      const btnSubmitMirror = section.querySelector("[data-submit-mirror]");
      const textStep = form.querySelectorAll(".text-step");
      searchCity;
      var validator = $(`#${formID}`).validate({
        errorPlacement: function(error, element) {
          if (element.attr("type") === "radio") {
            error.appendTo(element.closest(".form-question-wrapper"));
          } else {
            error.insertAfter(element);
          }
        },
        rules: {
          application_mail_address: {
            required: true,
            customEmail: true
          },
          application_habitation_city: {
            required: true,
            minlength: 5
          },
          select: {
            required: true
          },
          application_habitation_postcode: {
            required: true,
            customPostalCode: true,
            maxlength: 5
          },
          application_birth_date: {
            customDate: true,
            maxlength: 10
          },
          application_whatsapp_phone_number: {
            required: true,
            customPhoneNumberWhatsApp: true
          },
          application_phone_number: {
            required: true,
            customPhoneNumber: true,
            minlength: 10,
            maxlength: 10
          }
        }
      });
      const verifyInputs = function(inputs) {
        let allValid = true;
        inputs.forEach(function(input) {
          if (input.hasAttribute("required")) {
            let result = validator.element(input);
            if (!result) {
              allValid = false;
            }
          }
        });
        return allValid;
      };
      const displayStep2 = function() {
        step1.forEach(function(step) {
          step.childNodes.forEach(function(child) {
            child.classList.add("display-none");
          });
        });
        step2.classList.remove("display-none");
        btnStep1.classList.add("display-none");
        btnStep2.classList.remove("display-none");
        if (textStep) {
          textStep.forEach(function(text) {
            text.textContent = "\xC9tape 2/2";
          });
        }
      };
      step2.classList.add("display-none");
      btnStep1.addEventListener("click", function() {
        let isStepOneValid = verifyInputs(inputsStep1);
        if (isStepOneValid) {
          displayStep2();
          if (btnSubmitMirror) {
            btnSubmitMirror.click();
          }
        }
      });
      btnStep2.addEventListener("click", function() {
        let isStepTwoValid = verifyInputs(inputsStep2);
        if (isStepTwoValid) {
          btnSubmit.click();
        }
      });
    });
  }

  // src/utils/swiper/video.js
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/swiper.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/swiper-core.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/ssr-window.esm.mjs
  init_live_reload();
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined")
        target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent2() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/utils.mjs
  init_live_reload();
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c) => !!c.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
      }
      try {
        delete object[key];
      } catch (e) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m41;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[12]);
      else
        curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m42;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[13]);
      else
        curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = "";
    }
    return [...element.children].filter((el) => el.matches(selector));
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector) {
        if (prev.matches(selector))
          prevEls.push(prev);
      } else
        prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector) {
        if (next.matches(selector))
          nextEls.push(next);
      } else
        nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1)
          i += 1;
      }
      return i;
    }
    return void 0;
  }
  function elementParents(el, selector) {
    const parents = [];
    let parent2 = el.parentElement;
    while (parent2) {
      if (selector) {
        if (parent2.matches(selector))
          parents.push(parent2);
      } else {
        parents.push(parent2);
      }
      parent2 = parent2.parentElement;
    }
    return parents;
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad)
        ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    return {
      isSafari: needPerspectiveFix || isSafari(),
      needPerspectiveFix,
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent)
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper.el)
              return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("orientationchange");
    };
    on("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper.__preventObserver__)
          return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: typeof options.childList === "undefined" ? true : options.childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer)
        return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self2.eventsListeners[event2])
          self2.eventsListeners[event2] = [];
        self2.eventsListeners[event2][method](handler);
      });
      return self2;
    },
    once(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      function onceHandler() {
        self2.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self2, args);
      }
      onceHandler.__emitterProxy = handler;
      return self2.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      if (self2.eventsAnyListeners.indexOf(handler) < 0) {
        self2.eventsAnyListeners[method](handler);
      }
      return self2;
    },
    offAny(handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsAnyListeners)
        return self2;
      const index = self2.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self2.eventsAnyListeners.splice(index, 1);
      }
      return self2;
    },
    off(events2, handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsListeners)
        return self2;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self2.eventsListeners[event2] = [];
        } else if (self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self2.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self2;
    },
    emit() {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsListeners)
        return self2;
      let events2;
      let data;
      let context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context = self2;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context = args[0].context || self2;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
          self2.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data]);
          });
        }
        if (self2.eventsListeners && self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self2;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width))
      width = 0;
    if (Number.isNaN(height))
      height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i])
        slide2 = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide2, slides);
      }
      if (slides[i] && elementStyle(slide2, "display") === "none")
        continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i].style[swiper.getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3)
          slidePosition = 0;
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths)
          slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i = 0; i < groups; i += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0)
      snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
      slides.filter((_, slideIndex) => {
        if (!params.cssMode || params.loop)
          return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = `${spaceBetween}px`;
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map((snap) => {
        if (snap <= 0)
          return -offsetBefore;
        if (snap > maxSnap)
          return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      if (allSlidesSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow)
        swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded)
          swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual)
            break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0)
      swiper.wrapperEl.style.height = `${newHeight}px`;
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0)
      return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl)
      offsetCenter = translate2;
    slides.forEach((slideEl) => {
      slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slide2 = slides[i];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i);
        slides[i].classList.add(params.slideVisibleClass);
      }
      if (isFullyVisible) {
        slides[i].classList.add(params.slideFullyVisibleClass);
      }
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded)
        progress = 0;
      if (isEndRounded)
        progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1)
        progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
      swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
      return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    };
    slides.forEach((slideEl) => {
      slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
    });
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0)
          slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length)
          slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
      } else {
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0];
        nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0];
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      activeSlide.classList.add(params.slideActiveClass);
      if (gridEnabled) {
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      } else {
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        if (nextSlide) {
          nextSlide.classList.add(params.slideNextClass);
        }
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
        if (prevSlide) {
          prevSlide.classList.add(params.slidePrevClass);
        }
      }
    }
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params)
      return;
    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
              if (lazyEl)
                lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl)
        lazyEl.remove();
    }
  };
  var unlazy = (swiper, index) => {
    if (!swiper.slides[index])
      return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl)
      imageEl.removeAttribute("loading");
  };
  var preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params)
      return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0)
      return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_, i) => {
        return activeColumn + slidesPerView + i;
      }));
      swiper.slides.forEach((slideEl, i) => {
        if (preloadColumns.includes(slideEl.column))
          unlazy(swiper, i);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView)
          unlazy(swiper, realIndex);
      }
    } else {
      for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
        if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
          unlazy(swiper, i);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate2 >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined")
        activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper.virtual.slides.length) {
        realIndex2 -= swiper.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide2) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl)
      currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate2 : translate2;
    } else {
      y = translate2;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    }
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2)
      newTranslate = maxTranslate2;
    else
      newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
            if (!swiper || swiper.destroyed)
              return;
            if (e.target !== this)
              return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode)
      return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode)
      return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0)
      slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
      return false;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex)
      direction = "next";
    else if (slideIndex < activeIndex)
      direction = "prev";
    else
      direction = "reset";
    if (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate2 : -translate2;
      if (speed === 0) {
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t,
          behavior: "smooth"
        });
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed)
            return;
          if (e.target !== this)
            return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides
        } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled)
      return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper.loopFix({
        direction: "next"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled)
      return swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper.loopFix({
        direction: "prev"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0)
        return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0)
        prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
      if (swiper.animating)
        return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
      return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i = 0; i < amountOfSlides; i += 1) {
        const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next"
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop)
      return;
    swiper.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides
    } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
            if (slides[i2].column === colIndexToPrepend)
              prependSlidesIndexes.push(i2);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i = 0; i < slidesAppended; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index)
              appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide2, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c) => {
          if (!c.destroyed && c.params.loop)
            c.loopFix({
              ...loopParams,
              slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
            });
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix({
          ...loopParams,
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      }
    }
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
      return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
      return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow())
        return null;
      if (el.assignedSlot)
        el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event2, startX) {
    const window2 = getWindow();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e.pointerId) {
        return;
      }
      data.pointerId = e.pointerId;
    } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
      data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === "touchstart") {
      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && e.pointerType === "mouse")
      return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!swiper.wrapperEl.contains(targetEl))
        return;
    }
    if ("which" in e && e.which === 3)
      return;
    if ("button" in e && e.button > 0)
      return;
    if (data.isTouched && data.isMoved)
      return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler))
        return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper, e, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0)
      data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && event2.pointerType === "mouse")
      return;
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    if (e.type === "pointermove") {
      if (data.touchId !== null)
        return;
      const id = e.pointerId;
      if (id !== data.pointerId)
        return;
    }
    let targetTouch;
    if (e.type === "touchmove") {
      targetTouch = [...e.changedTouches].filter((t) => t.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    } else {
      targetTouch = e;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document2.activeElement) {
      if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
      return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode)
      return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event2;
    if (e.originalEvent)
      e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null)
        return;
      if (e.pointerId !== data.pointerId)
        return;
      targetTouch = e;
    } else {
      targetTouch = [...e.changedTouches].filter((t) => t.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && e.pointerType === "mouse")
      return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed)
        swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment2] !== "undefined") {
        if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment2] - slidesGrid[i];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0)
      return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled)
      return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks)
        e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled)
      return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0)
      swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded)
      return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }
  var events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
      return;
    const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint)
      return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined")
        return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl)
      return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const {
        point,
        value
      } = points[i];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName])
        params[moduleParamName] = {
          enabled: false
        };
      extend2(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class _Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params)
        params = {};
      params = extend2({}, params);
      if (el && !params.el)
        params.el = el;
      const document2 = getDocument();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new _Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend2({}, defaults, allModulesParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
      const swiper = this;
      if (swiper.enabled)
        return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled)
        return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed)
        return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number")
        return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed)
        return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
      swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate)
        swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
        return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted)
        return true;
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === "SWIPER-CONTAINER") {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized)
        return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false)
        return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e) => {
            processLazyPreloader(swiper, e.target);
          });
        }
      });
      preload(swiper);
      swiper.initialized = true;
      preload(swiper);
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        el.removeAttribute("style");
        wrapperEl.removeAttribute("style");
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        swiper.el.swiper = null;
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!_Swiper.prototype.__modules__)
        _Swiper.prototype.__modules__ = [];
      const modules = _Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => _Swiper.installModule(m));
        return _Swiper;
      }
      _Swiper.installModule(module);
      return _Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/index.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/virtual.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/keyboard.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/mousewheel.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/navigation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/create-element-if-not-defined.mjs
  init_live_reload();
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/navigation.mjs
  function Navigation(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null
    };
    const makeElementsArray = (el) => (Array.isArray(el) ? el : [el]).filter((e) => !!e);
    function getEl(el) {
      let res;
      if (el && typeof el === "string" && swiper.isElement) {
        res = swiper.el.querySelector(el);
        if (res)
          return res;
      }
      if (el) {
        if (typeof el === "string")
          res = [...document.querySelectorAll(el)];
        if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
          res = swiper.el.querySelector(el);
        }
      }
      if (el && !res)
        return el;
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (subEl) {
          subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
          if (subEl.tagName === "BUTTON")
            subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
          }
        }
      });
    }
    function update2() {
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
        return;
      swiper.slideNext();
      emit("navigationNext");
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl))
        return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl,
        prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        }
        if (!swiper.enabled && el) {
          el.classList.add(...params.lockClass.split(" "));
        }
      };
      nextEl.forEach((el) => initButton(el, "next"));
      prevEl.forEach((el) => initButton(el, "prev"));
    }
    function destroy() {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
      };
      nextEl.forEach((el) => destroyButton(el, "next"));
      prevEl.forEach((el) => destroyButton(el, "prev"));
    }
    on("init", () => {
      if (swiper.params.navigation.enabled === false) {
        disable();
      } else {
        init();
        update2();
      }
    });
    on("toEdge fromEdge lock unlock", () => {
      update2();
    });
    on("destroy", () => {
      destroy();
    });
    on("enable disable", () => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper.enabled) {
        update2();
        return;
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
    });
    on("click", (_s, e) => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e.target;
      if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
          return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
      init();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
      destroy();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update: update2,
      init,
      destroy
    });
  }

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/pagination.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/classes-to-selector.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/scrollbar.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/parallax.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/zoom.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/controller.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/a11y.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/history.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/hash-navigation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/autoplay.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/thumbs.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/free-mode.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/grid.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/manipulation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-fade.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/effect-init.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/effect-target.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/effect-virtual-transition-end.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-cube.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-flip.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/shared/create-shadow.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-coverflow.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-creative.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.0.5/node_modules/swiper/modules/effect-cards.mjs
  init_live_reload();

  // src/utils/swiper/video.js
  var setupVideoSwiper = function() {
    document.querySelectorAll("[slider-component]").forEach(function(element, index) {
      const swiper = new Swiper(element.querySelector(".swiper"), {
        modules: [Navigation],
        spaceBetween: "3%",
        navigation: {
          nextEl: element.querySelector('[swiper-arrow="right"]'),
          prevEl: element.querySelector('[swiper-arrow="left"]')
        },
        pagination: {
          el: ".swiper-pagination"
        },
        breakpoints: {
          // mobile landscape
          480: {
            slidesPerView: 1,
            spaceBetween: "3%"
          },
          // tablet
          768: {
            slidesPerView: 2,
            spaceBetween: "4%"
          },
          // desktop
          992: {
            slidesPerView: 3,
            spaceBetween: "4%"
          }
        }
      });
    });
  };

  // src/page/opportunity/index.js
  setupVideoSwiper();
  setupForms();
  redirectLinks();
  var sectionStep1and2 = document.querySelector('[section="lead-aio"]');
  var sectionStep2 = document.querySelector('[section="step-2"]');
  var checkIfQueryParamExists = function(queryParam) {
    const currentURL2 = new URL(window.location.href);
    return currentURL2.searchParams.has(queryParam);
  };
  function displayAppropriateSection() {
    sectionStep1and2.style.display = "none";
    sectionStep2.style.display = "none";
    if (checkIfQueryParamExists("application_mail_address")) {
      sectionStep2.style.display = "block";
      const step2 = document.querySelectorAll('[fieldset="step2"]');
      step2.forEach(function(step) {
        step.classList.remove("display-none");
      });
    } else {
      sectionStep1and2.style.display = "block";
    }
  }
  displayAppropriateSection();
})();
//# sourceMappingURL=index.js.map
