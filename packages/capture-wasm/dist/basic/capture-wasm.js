var createModule = (() => {
  var _scriptDir =
    typeof document !== "undefined" && document.currentScript
      ? document.currentScript.src
      : undefined;

  return function (createModule = {}) {
    /*

 Copyright 2019 The Emscripten Authors
 SPDX-License-Identifier: MIT

 Copyright 2013 The Emscripten Authors
 SPDX-License-Identifier: MIT

 This file gets implicatly injected as a `--post-js` file when
 emcc is run with `--emrun`
*/
    var g;
    g || (g = typeof createModule !== "undefined" ? createModule : {});
    var aa, ba;
    g.ready = new Promise(function (a, b) {
      aa = a;
      ba = b;
    });
    g.ub || (g.ub = 0);
    g.ub++;
    g.ENVIRONMENT_IS_PTHREAD ||
      g.$ww ||
      (function (a) {
        function b(m, n, r) {
          var p = new XMLHttpRequest();
          p.open("GET", m, !0);
          p.responseType = "arraybuffer";
          p.onprogress = function (q) {
            var k = n;
            q.total && (k = q.total);
            if (q.loaded) {
              p.Zb
                ? (g.Ua[m].loaded = q.loaded)
                : ((p.Zb = !0),
                  g.Ua || (g.Ua = {}),
                  (g.Ua[m] = { loaded: q.loaded, total: k }));
              var t = (k = q = 0),
                x;
              for (x in g.Ua) {
                var z = g.Ua[x];
                q += z.total;
                k += z.loaded;
                t++;
              }
              q = Math.ceil((q * g.ub) / t);
              g.setStatus &&
                g.setStatus("Downloading data... (" + k + "/" + q + ")");
            } else !g.Ua && g.setStatus && g.setStatus("Downloading data...");
          };
          p.onerror = function () {
            throw Error("NetworkError for: " + m);
          };
          p.onload = function () {
            if (
              200 == p.status ||
              304 == p.status ||
              206 == p.status ||
              (0 == p.status && p.response)
            )
              r(p.response);
            else throw Error(p.statusText + " : " + p.responseURL);
          };
          p.send(null);
        }
        function c(m) {
          console.error("package error:", m);
        }
        function d() {
          function m(q, k, t) {
            this.start = q;
            this.end = k;
            this.audio = t;
          }
          function n(q) {
            if (!q) throw "Loading data file failed." + Error().stack;
            if (q.constructor.name !== ArrayBuffer.name)
              throw "bad input to processPackageData" + Error().stack;
            q = new Uint8Array(q);
            m.prototype.cc = q;
            q = a.files;
            for (var k = 0; k < q.length; ++k)
              m.prototype.Db[q[k].filename].onload();
            g.removeRunDependency(
              "datafile_/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/basic/capture-wasm.data",
            );
          }
          g.FS_createPath("/", "microblink", !0, !0);
          g.FS_createPath("/microblink", "capture", !0, !0);
          m.prototype = {
            Db: {},
            open: function (q, k) {
              this.name = k;
              this.Db[k] = this;
              g.addRunDependency("fp " + this.name);
            },
            send: function () {},
            onload: function () {
              this.finish(this.cc.subarray(this.start, this.end));
            },
            finish: function (q) {
              g.FS_createDataFile(this.name, null, q, !0, !0, !0);
              g.removeRunDependency("fp " + this.name);
              this.Db[this.name] = null;
            },
          };
          for (var r = a.files, p = 0; p < r.length; ++p)
            new m(r[p].start, r[p].end, r[p].audio || 0).open(
              "GET",
              r[p].filename,
            );
          g.addRunDependency(
            "datafile_/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/basic/capture-wasm.data",
          );
          g.Rb || (g.Rb = {});
          g.Rb[
            "/Users/ivan/Dev/imagecapture-browser/packages/capture-wasm/dist/basic/capture-wasm.data"
          ] = { Lc: !1 };
          l ? (n(l), (l = null)) : (h = n);
        }
        "object" === typeof window
          ? window.encodeURIComponent(
              window.location.pathname
                .toString()
                .substring(
                  0,
                  window.location.pathname.toString().lastIndexOf("/"),
                ) + "/",
            )
          : "undefined" === typeof process &&
            "undefined" !== typeof location &&
            encodeURIComponent(
              location.pathname
                .toString()
                .substring(0, location.pathname.toString().lastIndexOf("/")) +
                "/",
            );
        "function" !== typeof g.locateFilePackage ||
          g.locateFile ||
          ((g.locateFile = g.locateFilePackage),
          u(
            "warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)",
          ));
        var e = g.locateFile
            ? g.locateFile("capture-wasm.data", "")
            : "capture-wasm.data",
          f = a.remote_package_size,
          h = null,
          l = g.getPreloadedPackage ? g.getPreloadedPackage(e, f) : null;
        l ||
          b(
            e,
            f,
            function (m) {
              h ? (h(m), (h = null)) : (l = m);
            },
            c,
          );
        g.calledRun ? d() : (g.preRun || (g.preRun = []), g.preRun.push(d));
      })({
        files: [
          {
            filename:
              "/microblink/capture/Model_021c530a7efe77c0e90c4bfe19c3bebaaceee433103e4e6d4f1424d921885982.strop",
            start: 0,
            end: 308674,
          },
          {
            filename:
              "/microblink/capture/Model_0c0458bedf340ad5858a25dd463e63f57ddb42e69c3c5ff0c572a528356b020d.strop",
            start: 308674,
            end: 429092,
          },
          {
            filename:
              "/microblink/capture/Model_2880751121560047e6dc571bc8ff4683aeb863886f7c0789234594ceb1e23577.strop",
            start: 429092,
            end: 433030,
          },
          {
            filename:
              "/microblink/capture/Model_3b11c3ffacbbf390b932fb9a7024f1a0016f66281ea8c790f8b5903374ad89c2.strop",
            start: 433030,
            end: 721810,
          },
          {
            filename:
              "/microblink/capture/Model_e4f1f62f68ec44b71ecad3fb3f3b48fe3790beb5ab325611e17d63af06e9f644.strop",
            start: 721810,
            end: 778324,
          },
          {
            filename:
              "/microblink/capture/Model_ed586fd6ca47c8eebb513c4ffaaacc2c54e92162b145062d7022519fba0911de.strop",
            start: 778324,
            end: 1491556,
          },
          {
            filename:
              "/microblink/capture/Model_f2874f5766b779c063dbe30467979163497dc4b29c43bab23d70c798ee32993a.strop",
            start: 1491556,
            end: 1573062,
          },
        ],
        remote_package_size: 1573062,
      });
    g.onAbort = function (a) {
      u("Aborted with message: " + a);
      try {
        throw new WebAssembly.RuntimeError(a);
      } catch (b) {
        u("Stacktrace: " + b.stack);
      }
    };
    if ("object" == typeof window) {
      g.arguments = window.location.search.substr(1).trim().split("&");
      for (let a = 0; a < g.arguments.length; ++a)
        g.arguments[a] = decodeURI(g.arguments[a]);
      g.arguments[0] || (g.arguments = []);
    }
    var ca = Object.assign({}, g),
      da = "./this.program",
      ea = (a, b) => {
        throw b;
      },
      fa = "",
      ha,
      ia,
      ja;
    fa = self.location.href;
    _scriptDir && (fa = _scriptDir);
    fa =
      0 !== fa.indexOf("blob:")
        ? fa.substr(0, fa.replace(/[?#].*/, "").lastIndexOf("/") + 1)
        : "";
    ha = (a) => {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.send(null);
      return b.responseText;
    };
    ja = (a) => {
      var b = new XMLHttpRequest();
      b.open("GET", a, !1);
      b.responseType = "arraybuffer";
      b.send(null);
      return new Uint8Array(b.response);
    };
    ia = (a, b, c) => {
      var d = new XMLHttpRequest();
      d.open("GET", a, !0);
      d.responseType = "arraybuffer";
      d.onload = () => {
        200 == d.status || (0 == d.status && d.response) ? b(d.response) : c();
      };
      d.onerror = c;
      d.send(null);
    };
    var ka = g.print || console.log.bind(console),
      u = g.printErr || console.warn.bind(console);
    Object.assign(g, ca);
    ca = null;
    g.thisProgram && (da = g.thisProgram);
    g.quit && (ea = g.quit);
    var la;
    g.wasmBinary && (la = g.wasmBinary);
    var noExitRuntime = g.noExitRuntime || !1;
    "object" != typeof WebAssembly && ma("no native wasm support detected");
    var na,
      oa = !1,
      pa,
      qa = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
    function ra(a, b, c) {
      var d = b + c;
      for (c = b; a[c] && !(c >= d); ) ++c;
      if (16 < c - b && a.buffer && qa) return qa.decode(a.subarray(b, c));
      for (d = ""; b < c; ) {
        var e = a[b++];
        if (e & 128) {
          var f = a[b++] & 63;
          if (192 == (e & 224)) d += String.fromCharCode(((e & 31) << 6) | f);
          else {
            var h = a[b++] & 63;
            e =
              224 == (e & 240)
                ? ((e & 15) << 12) | (f << 6) | h
                : ((e & 7) << 18) | (f << 12) | (h << 6) | (a[b++] & 63);
            65536 > e
              ? (d += String.fromCharCode(e))
              : ((e -= 65536),
                (d += String.fromCharCode(
                  55296 | (e >> 10),
                  56320 | (e & 1023),
                )));
          }
        } else d += String.fromCharCode(e);
      }
      return d;
    }
    function v(a, b) {
      return a ? ra(w, a, b) : "";
    }
    function A(a, b, c, d) {
      if (!(0 < d)) return 0;
      var e = c;
      d = c + d - 1;
      for (var f = 0; f < a.length; ++f) {
        var h = a.charCodeAt(f);
        if (55296 <= h && 57343 >= h) {
          var l = a.charCodeAt(++f);
          h = (65536 + ((h & 1023) << 10)) | (l & 1023);
        }
        if (127 >= h) {
          if (c >= d) break;
          b[c++] = h;
        } else {
          if (2047 >= h) {
            if (c + 1 >= d) break;
            b[c++] = 192 | (h >> 6);
          } else {
            if (65535 >= h) {
              if (c + 2 >= d) break;
              b[c++] = 224 | (h >> 12);
            } else {
              if (c + 3 >= d) break;
              b[c++] = 240 | (h >> 18);
              b[c++] = 128 | ((h >> 12) & 63);
            }
            b[c++] = 128 | ((h >> 6) & 63);
          }
          b[c++] = 128 | (h & 63);
        }
      }
      b[c] = 0;
      return c - e;
    }
    function sa(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        127 >= d
          ? b++
          : 2047 >= d
          ? (b += 2)
          : 55296 <= d && 57343 >= d
          ? ((b += 4), ++c)
          : (b += 3);
      }
      return b;
    }
    var C, w, ta, D, E, I, ua, va;
    function wa() {
      var a = na.buffer;
      g.HEAP8 = C = new Int8Array(a);
      g.HEAP16 = ta = new Int16Array(a);
      g.HEAP32 = E = new Int32Array(a);
      g.HEAPU8 = w = new Uint8Array(a);
      g.HEAPU16 = D = new Uint16Array(a);
      g.HEAPU32 = I = new Uint32Array(a);
      g.HEAPF32 = ua = new Float32Array(a);
      g.HEAPF64 = va = new Float64Array(a);
    }
    var xa,
      ya = [],
      za = [],
      Aa = [],
      Ba = [],
      Ca = !1,
      Da = 0;
    function Ea() {
      var a = g.preRun.shift();
      ya.unshift(a);
    }
    var Fa = 0,
      Ga = null,
      Ha = null;
    function Ia() {
      Fa++;
      g.monitorRunDependencies && g.monitorRunDependencies(Fa);
    }
    function Ja() {
      Fa--;
      g.monitorRunDependencies && g.monitorRunDependencies(Fa);
      if (0 == Fa && (null !== Ga && (clearInterval(Ga), (Ga = null)), Ha)) {
        var a = Ha;
        Ha = null;
        a();
      }
    }
    function ma(a) {
      if (g.onAbort) g.onAbort(a);
      a = "Aborted(" + a + ")";
      u(a);
      oa = !0;
      pa = 1;
      a = new WebAssembly.RuntimeError(
        a + ". Build with -sASSERTIONS for more info.",
      );
      ba(a);
      throw a;
    }
    function Ka(a) {
      return a.startsWith("data:application/octet-stream;base64,");
    }
    var La;
    La = "capture-wasm.wasm";
    if (!Ka(La)) {
      var Ma = La;
      La = g.locateFile ? g.locateFile(Ma, fa) : fa + Ma;
    }
    function Na(a) {
      try {
        if (a == La && la) return new Uint8Array(la);
        if (ja) return ja(a);
        throw "both async and sync fetching of the wasm failed";
      } catch (b) {
        ma(b);
      }
    }
    function Oa(a) {
      return la || "function" != typeof fetch
        ? Promise.resolve().then(function () {
            return Na(a);
          })
        : fetch(a, { credentials: "same-origin" })
            .then(function (b) {
              if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
              return b.arrayBuffer();
            })
            .catch(function () {
              return Na(a);
            });
    }
    function Pa(a, b, c) {
      return Oa(a)
        .then(function (d) {
          return WebAssembly.instantiate(d, b);
        })
        .then(function (d) {
          return d;
        })
        .then(c, function (d) {
          u("failed to asynchronously prepare wasm: " + d);
          ma(d);
        });
    }
    function Sa(a, b) {
      var c = La;
      return la ||
        "function" != typeof WebAssembly.instantiateStreaming ||
        Ka(c) ||
        "function" != typeof fetch
        ? Pa(c, a, b)
        : fetch(c, { credentials: "same-origin" }).then(function (d) {
            return WebAssembly.instantiateStreaming(d, a).then(b, function (e) {
              u("wasm streaming compile failed: " + e);
              u("falling back to ArrayBuffer instantiation");
              return Pa(c, a, b);
            });
          });
    }
    var J,
      K,
      Ta = {
        59716: (a, b, c, d) => {
          a = v(a);
          b = v(b);
          c = v(c);
          d = v(d);
          throw Error(a + b + c + d);
        },
        59932: (a, b) => {
          a = v(a);
          b = v(b);
          throw Error(a + b);
        },
      };
    function Ua(a) {
      this.name = "ExitStatus";
      this.message = "Program terminated with exit(" + a + ")";
      this.status = a;
    }
    function Va(a) {
      for (; 0 < a.length; ) a.shift()(g);
    }
    var Wa = (a, b) => {
        for (var c = 0, d = a.length - 1; 0 <= d; d--) {
          var e = a[d];
          "." === e
            ? a.splice(d, 1)
            : ".." === e
            ? (a.splice(d, 1), c++)
            : c && (a.splice(d, 1), c--);
        }
        if (b) for (; c; c--) a.unshift("..");
        return a;
      },
      L = (a) => {
        var b = "/" === a.charAt(0),
          c = "/" === a.substr(-1);
        (a = Wa(
          a.split("/").filter((d) => !!d),
          !b,
        ).join("/")) ||
          b ||
          (a = ".");
        a && c && (a += "/");
        return (b ? "/" : "") + a;
      },
      Xa = (a) => {
        var b = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
          .exec(a)
          .slice(1);
        a = b[0];
        b = b[1];
        if (!a && !b) return ".";
        b && (b = b.substr(0, b.length - 1));
        return a + b;
      },
      Ya = (a) => {
        if ("/" === a) return "/";
        a = L(a);
        a = a.replace(/\/$/, "");
        var b = a.lastIndexOf("/");
        return -1 === b ? a : a.substr(b + 1);
      };
    function Za() {
      if (
        "object" == typeof crypto &&
        "function" == typeof crypto.getRandomValues
      ) {
        var a = new Uint8Array(1);
        return () => {
          crypto.getRandomValues(a);
          return a[0];
        };
      }
      return () => ma("randomDevice");
    }
    function $a() {
      for (var a = "", b = !1, c = arguments.length - 1; -1 <= c && !b; c--) {
        b = 0 <= c ? arguments[c] : "/";
        if ("string" != typeof b)
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!b) return "";
        a = b + "/" + a;
        b = "/" === b.charAt(0);
      }
      a = Wa(
        a.split("/").filter((d) => !!d),
        !b,
      ).join("/");
      return (b ? "/" : "") + a || ".";
    }
    function ab(a, b) {
      var c = Array(sa(a) + 1);
      a = A(a, c, 0, c.length);
      b && (c.length = a);
      return c;
    }
    var bb = [];
    function cb(a, b) {
      bb[a] = { input: [], Ba: [], Ya: b };
      db(a, eb);
    }
    var eb = {
        open: function (a) {
          var b = bb[a.node.cb];
          if (!b) throw new N(43);
          a.Fa = b;
          a.seekable = !1;
        },
        close: function (a) {
          a.Fa.Ya.jb(a.Fa);
        },
        jb: function (a) {
          a.Fa.Ya.jb(a.Fa);
        },
        read: function (a, b, c, d) {
          if (!a.Fa || !a.Fa.Ya.Ob) throw new N(60);
          for (var e = 0, f = 0; f < d; f++) {
            try {
              var h = a.Fa.Ya.Ob(a.Fa);
            } catch (l) {
              throw new N(29);
            }
            if (void 0 === h && 0 === e) throw new N(6);
            if (null === h || void 0 === h) break;
            e++;
            b[c + f] = h;
          }
          e && (a.node.timestamp = Date.now());
          return e;
        },
        write: function (a, b, c, d) {
          if (!a.Fa || !a.Fa.Ya.zb) throw new N(60);
          try {
            for (var e = 0; e < d; e++) a.Fa.Ya.zb(a.Fa, b[c + e]);
          } catch (f) {
            throw new N(29);
          }
          d && (a.node.timestamp = Date.now());
          return e;
        },
      },
      fb = {
        Ob: function (a) {
          if (!a.input.length) {
            var b = null;
            "undefined" != typeof window && "function" == typeof window.prompt
              ? ((b = window.prompt("Input: ")), null !== b && (b += "\n"))
              : "function" == typeof readline &&
                ((b = readline()), null !== b && (b += "\n"));
            if (!b) return null;
            a.input = ab(b, !0);
          }
          return a.input.shift();
        },
        zb: function (a, b) {
          null === b || 10 === b
            ? (ka(ra(a.Ba, 0)), (a.Ba = []))
            : 0 != b && a.Ba.push(b);
        },
        jb: function (a) {
          a.Ba && 0 < a.Ba.length && (ka(ra(a.Ba, 0)), (a.Ba = []));
        },
      },
      gb = {
        zb: function (a, b) {
          null === b || 10 === b
            ? (u(ra(a.Ba, 0)), (a.Ba = []))
            : 0 != b && a.Ba.push(b);
        },
        jb: function (a) {
          a.Ba && 0 < a.Ba.length && (u(ra(a.Ba, 0)), (a.Ba = []));
        },
      };
    function hb(a) {
      a = 65536 * Math.ceil(a / 65536);
      var b = ib(65536, a);
      b ? (w.fill(0, b, b + a), (a = b)) : (a = 0);
      return a;
    }
    var O = {
      La: null,
      Na: function () {
        return O.createNode(null, "/", 16895, 0);
      },
      createNode: function (a, b, c, d) {
        if (24576 === (c & 61440) || 4096 === (c & 61440)) throw new N(63);
        O.La ||
          (O.La = {
            dir: {
              node: {
                Ka: O.va.Ka,
                Ea: O.va.Ea,
                Za: O.va.Za,
                nb: O.va.nb,
                Vb: O.va.Vb,
                tb: O.va.tb,
                Wb: O.va.Wb,
                Ub: O.va.Ub,
                qb: O.va.qb,
              },
              stream: { Ra: O.wa.Ra },
            },
            file: {
              node: { Ka: O.va.Ka, Ea: O.va.Ea },
              stream: {
                Ra: O.wa.Ra,
                read: O.wa.read,
                write: O.wa.write,
                Fb: O.wa.Fb,
                $a: O.wa.$a,
                ob: O.wa.ob,
              },
            },
            link: {
              node: { Ka: O.va.Ka, Ea: O.va.Ea, eb: O.va.eb },
              stream: {},
            },
            Ib: { node: { Ka: O.va.Ka, Ea: O.va.Ea }, stream: jb },
          });
        c = kb(a, b, c, d);
        16384 === (c.mode & 61440)
          ? ((c.va = O.La.dir.node), (c.wa = O.La.dir.stream), (c.ua = {}))
          : 32768 === (c.mode & 61440)
          ? ((c.va = O.La.file.node),
            (c.wa = O.La.file.stream),
            (c.za = 0),
            (c.ua = null))
          : 40960 === (c.mode & 61440)
          ? ((c.va = O.La.link.node), (c.wa = O.La.link.stream))
          : 8192 === (c.mode & 61440) &&
            ((c.va = O.La.Ib.node), (c.wa = O.La.Ib.stream));
        c.timestamp = Date.now();
        a && ((a.ua[b] = c), (a.timestamp = c.timestamp));
        return c;
      },
      Mc: function (a) {
        return a.ua
          ? a.ua.subarray
            ? a.ua.subarray(0, a.za)
            : new Uint8Array(a.ua)
          : new Uint8Array(0);
      },
      Lb: function (a, b) {
        var c = a.ua ? a.ua.length : 0;
        c >= b ||
          ((b = Math.max(b, (c * (1048576 > c ? 2 : 1.125)) >>> 0)),
          0 != c && (b = Math.max(b, 256)),
          (c = a.ua),
          (a.ua = new Uint8Array(b)),
          0 < a.za && a.ua.set(c.subarray(0, a.za), 0));
      },
      zc: function (a, b) {
        if (a.za != b)
          if (0 == b) (a.ua = null), (a.za = 0);
          else {
            var c = a.ua;
            a.ua = new Uint8Array(b);
            c && a.ua.set(c.subarray(0, Math.min(b, a.za)));
            a.za = b;
          }
      },
      va: {
        Ka: function (a) {
          var b = {};
          b.hc = 8192 === (a.mode & 61440) ? a.id : 1;
          b.wb = a.id;
          b.mode = a.mode;
          b.vc = 1;
          b.uid = 0;
          b.oc = 0;
          b.cb = a.cb;
          b.size =
            16384 === (a.mode & 61440)
              ? 4096
              : 32768 === (a.mode & 61440)
              ? a.za
              : 40960 === (a.mode & 61440)
              ? a.link.length
              : 0;
          b.$b = new Date(a.timestamp);
          b.uc = new Date(a.timestamp);
          b.ec = new Date(a.timestamp);
          b.ac = 4096;
          b.bc = Math.ceil(b.size / b.ac);
          return b;
        },
        Ea: function (a, b) {
          void 0 !== b.mode && (a.mode = b.mode);
          void 0 !== b.timestamp && (a.timestamp = b.timestamp);
          void 0 !== b.size && O.zc(a, b.size);
        },
        Za: function () {
          throw lb[44];
        },
        nb: function (a, b, c, d) {
          return O.createNode(a, b, c, d);
        },
        Vb: function (a, b, c) {
          if (16384 === (a.mode & 61440)) {
            try {
              var d = mb(b, c);
            } catch (f) {}
            if (d) for (var e in d.ua) throw new N(55);
          }
          delete a.parent.ua[a.name];
          a.parent.timestamp = Date.now();
          a.name = c;
          b.ua[c] = a;
          b.timestamp = a.parent.timestamp;
          a.parent = b;
        },
        tb: function (a, b) {
          delete a.ua[b];
          a.timestamp = Date.now();
        },
        Wb: function (a, b) {
          var c = mb(a, b),
            d;
          for (d in c.ua) throw new N(55);
          delete a.ua[b];
          a.timestamp = Date.now();
        },
        Ub: function (a) {
          var b = [".", ".."],
            c;
          for (c in a.ua) a.ua.hasOwnProperty(c) && b.push(c);
          return b;
        },
        qb: function (a, b, c) {
          a = O.createNode(a, b, 41471, 0);
          a.link = c;
          return a;
        },
        eb: function (a) {
          if (40960 !== (a.mode & 61440)) throw new N(28);
          return a.link;
        },
      },
      wa: {
        read: function (a, b, c, d, e) {
          var f = a.node.ua;
          if (e >= a.node.za) return 0;
          a = Math.min(a.node.za - e, d);
          if (8 < a && f.subarray) b.set(f.subarray(e, e + a), c);
          else for (d = 0; d < a; d++) b[c + d] = f[e + d];
          return a;
        },
        write: function (a, b, c, d, e, f) {
          b.buffer === C.buffer && (f = !1);
          if (!d) return 0;
          a = a.node;
          a.timestamp = Date.now();
          if (b.subarray && (!a.ua || a.ua.subarray)) {
            if (f) return (a.ua = b.subarray(c, c + d)), (a.za = d);
            if (0 === a.za && 0 === e)
              return (a.ua = b.slice(c, c + d)), (a.za = d);
            if (e + d <= a.za) return a.ua.set(b.subarray(c, c + d), e), d;
          }
          O.Lb(a, e + d);
          if (a.ua.subarray && b.subarray) a.ua.set(b.subarray(c, c + d), e);
          else for (f = 0; f < d; f++) a.ua[e + f] = b[c + f];
          a.za = Math.max(a.za, e + d);
          return d;
        },
        Ra: function (a, b, c) {
          1 === c
            ? (b += a.position)
            : 2 === c && 32768 === (a.node.mode & 61440) && (b += a.node.za);
          if (0 > b) throw new N(28);
          return b;
        },
        Fb: function (a, b, c) {
          O.Lb(a.node, b + c);
          a.node.za = Math.max(a.node.za, b + c);
        },
        $a: function (a, b, c, d, e) {
          if (32768 !== (a.node.mode & 61440)) throw new N(43);
          a = a.node.ua;
          if (e & 2 || a.buffer !== C.buffer) {
            if (0 < c || c + b < a.length)
              a = a.subarray
                ? a.subarray(c, c + b)
                : Array.prototype.slice.call(a, c, c + b);
            c = !0;
            b = hb(b);
            if (!b) throw new N(48);
            C.set(a, b);
          } else (c = !1), (b = a.byteOffset);
          return { ya: b, Gb: c };
        },
        ob: function (a, b, c, d) {
          O.wa.write(a, b, 0, d, c, !1);
          return 0;
        },
      },
    };
    function nb(a, b, c) {
      var d = "al " + a;
      ia(
        a,
        (e) => {
          e || ma('Loading data file "' + a + '" failed (no arrayBuffer).');
          b(new Uint8Array(e));
          d && Ja(d);
        },
        () => {
          if (c) c();
          else throw 'Loading data file "' + a + '" failed.';
        },
      );
      d && Ia(d);
    }
    var ob = null,
      pb = {},
      qb = [],
      rb = 1,
      sb = null,
      tb = !0,
      N = null,
      lb = {},
      P = (a, b = {}) => {
        a = $a(a);
        if (!a) return { path: "", node: null };
        b = Object.assign({ Nb: !0, Bb: 0 }, b);
        if (8 < b.Bb) throw new N(32);
        a = a.split("/").filter((h) => !!h);
        for (var c = ob, d = "/", e = 0; e < a.length; e++) {
          var f = e === a.length - 1;
          if (f && b.parent) break;
          c = mb(c, a[e]);
          d = L(d + "/" + a[e]);
          c.ab && (!f || (f && b.Nb)) && (c = c.ab.root);
          if (!f || b.ib)
            for (f = 0; 40960 === (c.mode & 61440); )
              if (
                ((c = ub(d)),
                (d = $a(Xa(d), c)),
                (c = P(d, { Bb: b.Bb + 1 }).node),
                40 < f++)
              )
                throw new N(32);
        }
        return { path: d, node: c };
      },
      vb = (a) => {
        for (var b; ; ) {
          if (a === a.parent)
            return (
              (a = a.Na.Qb),
              b ? ("/" !== a[a.length - 1] ? a + "/" + b : a + b) : a
            );
          b = b ? a.name + "/" + b : a.name;
          a = a.parent;
        }
      },
      wb = (a, b) => {
        for (var c = 0, d = 0; d < b.length; d++)
          c = ((c << 5) - c + b.charCodeAt(d)) | 0;
        return ((a + c) >>> 0) % sb.length;
      },
      mb = (a, b) => {
        var c;
        if ((c = (c = xb(a, "x")) ? c : a.va.Za ? 0 : 2)) throw new N(c, a);
        for (c = sb[wb(a.id, b)]; c; c = c.Xa) {
          var d = c.name;
          if (c.parent.id === a.id && d === b) return c;
        }
        return a.va.Za(a, b);
      },
      kb = (a, b, c, d) => {
        a = new yb(a, b, c, d);
        b = wb(a.parent.id, a.name);
        a.Xa = sb[b];
        return (sb[b] = a);
      },
      zb = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 },
      Ab = (a) => {
        var b = ["r", "w", "rw"][a & 3];
        a & 512 && (b += "w");
        return b;
      },
      xb = (a, b) => {
        if (tb) return 0;
        if (!b.includes("r") || a.mode & 292) {
          if (
            (b.includes("w") && !(a.mode & 146)) ||
            (b.includes("x") && !(a.mode & 73))
          )
            return 2;
        } else return 2;
        return 0;
      },
      Bb = (a, b) => {
        try {
          return mb(a, b), 20;
        } catch (c) {}
        return xb(a, "wx");
      },
      Cb = () => {
        for (var a = 0; 4096 >= a; a++) if (!qb[a]) return a;
        throw new N(33);
      },
      Eb = (a) => {
        Db ||
          ((Db = function () {
            this.pb = {};
          }),
          (Db.prototype = {}),
          Object.defineProperties(Db.prototype, {
            object: {
              get: function () {
                return this.node;
              },
              set: function (c) {
                this.node = c;
              },
            },
            flags: {
              get: function () {
                return this.pb.flags;
              },
              set: function (c) {
                this.pb.flags = c;
              },
            },
            position: {
              get: function () {
                return this.pb.position;
              },
              set: function (c) {
                this.pb.position = c;
              },
            },
          }));
        a = Object.assign(new Db(), a);
        var b = Cb();
        a.Qa = b;
        return (qb[b] = a);
      },
      jb = {
        open: (a) => {
          a.wa = pb[a.node.cb].wa;
          a.wa.open && a.wa.open(a);
        },
        Ra: () => {
          throw new N(70);
        },
      },
      db = (a, b) => {
        pb[a] = { wa: b };
      },
      Fb = (a, b) => {
        var c = "/" === b,
          d = !b;
        if (c && ob) throw new N(10);
        if (!c && !d) {
          var e = P(b, { Nb: !1 });
          b = e.path;
          e = e.node;
          if (e.ab) throw new N(10);
          if (16384 !== (e.mode & 61440)) throw new N(54);
        }
        b = { type: a, Pc: {}, Qb: b, tc: [] };
        a = a.Na(b);
        a.Na = b;
        b.root = a;
        c ? (ob = a) : e && ((e.ab = b), e.Na && e.Na.tc.push(b));
      },
      Q = (a, b, c) => {
        var d = P(a, { parent: !0 }).node;
        a = Ya(a);
        if (!a || "." === a || ".." === a) throw new N(28);
        var e = Bb(d, a);
        if (e) throw new N(e);
        if (!d.va.nb) throw new N(63);
        return d.va.nb(d, a, b, c);
      },
      Gb = (a, b, c) => {
        "undefined" == typeof c && ((c = b), (b = 438));
        return Q(a, b | 8192, c);
      },
      Hb = (a, b) => {
        if (!$a(a)) throw new N(44);
        var c = P(b, { parent: !0 }).node;
        if (!c) throw new N(44);
        b = Ya(b);
        var d = Bb(c, b);
        if (d) throw new N(d);
        if (!c.va.qb) throw new N(63);
        c.va.qb(c, b, a);
      },
      Ib = (a) => {
        var b = P(a, { parent: !0 }).node;
        if (!b) throw new N(44);
        var c = Ya(a);
        a = mb(b, c);
        a: {
          try {
            var d = mb(b, c);
          } catch (f) {
            d = f.Ga;
            break a;
          }
          var e = xb(b, "wx");
          d = e ? e : 16384 === (d.mode & 61440) ? 31 : 0;
        }
        if (d) throw new N(d);
        if (!b.va.tb) throw new N(63);
        if (a.ab) throw new N(10);
        b.va.tb(b, c);
        b = wb(a.parent.id, a.name);
        if (sb[b] === a) sb[b] = a.Xa;
        else
          for (b = sb[b]; b; ) {
            if (b.Xa === a) {
              b.Xa = a.Xa;
              break;
            }
            b = b.Xa;
          }
      },
      ub = (a) => {
        a = P(a).node;
        if (!a) throw new N(44);
        if (!a.va.eb) throw new N(28);
        return $a(vb(a.parent), a.va.eb(a));
      },
      Jb = (a, b) => {
        a = P(a, { ib: !b }).node;
        if (!a) throw new N(44);
        if (!a.va.Ka) throw new N(63);
        return a.va.Ka(a);
      },
      Kb = (a) => Jb(a, !0),
      Lb = (a, b) => {
        a = "string" == typeof a ? P(a, { ib: !0 }).node : a;
        if (!a.va.Ea) throw new N(63);
        a.va.Ea(a, {
          mode: (b & 4095) | (a.mode & -4096),
          timestamp: Date.now(),
        });
      },
      Nb = (a, b, c) => {
        if ("" === a) throw new N(44);
        if ("string" == typeof b) {
          var d = zb[b];
          if ("undefined" == typeof d)
            throw Error("Unknown file open mode: " + b);
          b = d;
        }
        c = b & 64 ? (("undefined" == typeof c ? 438 : c) & 4095) | 32768 : 0;
        if ("object" == typeof a) var e = a;
        else {
          a = L(a);
          try {
            e = P(a, { ib: !(b & 131072) }).node;
          } catch (f) {}
        }
        d = !1;
        if (b & 64)
          if (e) {
            if (b & 128) throw new N(20);
          } else (e = Q(a, c, 0)), (d = !0);
        if (!e) throw new N(44);
        8192 === (e.mode & 61440) && (b &= -513);
        if (b & 65536 && 16384 !== (e.mode & 61440)) throw new N(54);
        if (
          !d &&
          (c = e
            ? 40960 === (e.mode & 61440)
              ? 32
              : 16384 === (e.mode & 61440) && ("r" !== Ab(b) || b & 512)
              ? 31
              : xb(e, Ab(b))
            : 44)
        )
          throw new N(c);
        if (b & 512 && !d) {
          c = e;
          c = "string" == typeof c ? P(c, { ib: !0 }).node : c;
          if (!c.va.Ea) throw new N(63);
          if (16384 === (c.mode & 61440)) throw new N(31);
          if (32768 !== (c.mode & 61440)) throw new N(28);
          if ((d = xb(c, "w"))) throw new N(d);
          c.va.Ea(c, { size: 0, timestamp: Date.now() });
        }
        b &= -131713;
        e = Eb({
          node: e,
          path: vb(e),
          flags: b,
          seekable: !0,
          position: 0,
          wa: e.wa,
          Kc: [],
          error: !1,
        });
        e.wa.open && e.wa.open(e);
        !g.logReadFiles || b & 1 || (Mb || (Mb = {}), a in Mb || (Mb[a] = 1));
        return e;
      },
      Ob = (a) => {
        if (null === a.Qa) throw new N(8);
        a.vb && (a.vb = null);
        try {
          a.wa.close && a.wa.close(a);
        } catch (b) {
          throw b;
        } finally {
          qb[a.Qa] = null;
        }
        a.Qa = null;
      },
      Pb = (a, b, c) => {
        if (null === a.Qa) throw new N(8);
        if (!a.seekable || !a.wa.Ra) throw new N(70);
        if (0 != c && 1 != c && 2 != c) throw new N(28);
        a.position = a.wa.Ra(a, b, c);
        a.Kc = [];
      },
      Qb = (a, b, c, d, e, f) => {
        if (0 > d || 0 > e) throw new N(28);
        if (null === a.Qa) throw new N(8);
        if (0 === (a.flags & 2097155)) throw new N(8);
        if (16384 === (a.node.mode & 61440)) throw new N(31);
        if (!a.wa.write) throw new N(28);
        a.seekable && a.flags & 1024 && Pb(a, 0, 2);
        var h = "undefined" != typeof e;
        if (!h) e = a.position;
        else if (!a.seekable) throw new N(70);
        b = a.wa.write(a, b, c, d, e, f);
        h || (a.position += b);
        return b;
      },
      Rb = () => {
        N ||
          ((N = function (a, b) {
            this.name = "ErrnoError";
            this.node = b;
            this.Bc = function (c) {
              this.Ga = c;
            };
            this.Bc(a);
            this.message = "FS error";
          }),
          (N.prototype = Error()),
          (N.prototype.constructor = N),
          [44].forEach((a) => {
            lb[a] = new N(a);
            lb[a].stack = "<generic error, no stack>";
          }));
      },
      Sb,
      Tb = (a, b) => {
        var c = 0;
        a && (c |= 365);
        b && (c |= 146);
        return c;
      },
      Ub = (a, b) => {
        a = "string" == typeof a ? a : vb(a);
        for (b = b.split("/").reverse(); b.length; ) {
          var c = b.pop();
          if (c) {
            var d = L(a + "/" + c);
            try {
              Q(d, 16895, 0);
            } catch (e) {}
            a = d;
          }
        }
        return d;
      },
      Vb = (a, b, c, d) => {
        a = L(("string" == typeof a ? a : vb(a)) + "/" + b);
        c = Tb(c, d);
        return Q(a, ((void 0 !== c ? c : 438) & 4095) | 32768, 0);
      },
      Wb = (a, b, c, d, e, f) => {
        var h = b;
        a &&
          ((a = "string" == typeof a ? a : vb(a)),
          (h = b ? L(a + "/" + b) : a));
        a = Tb(d, e);
        h = Q(h, ((void 0 !== a ? a : 438) & 4095) | 32768, 0);
        if (c) {
          if ("string" == typeof c) {
            b = Array(c.length);
            d = 0;
            for (e = c.length; d < e; ++d) b[d] = c.charCodeAt(d);
            c = b;
          }
          Lb(h, a | 146);
          b = Nb(h, 577);
          Qb(b, c, 0, c.length, 0, f);
          Ob(b);
          Lb(h, a);
        }
        return h;
      },
      R = (a, b, c, d) => {
        a = L(("string" == typeof a ? a : vb(a)) + "/" + b);
        b = Tb(!!c, !!d);
        R.Pb || (R.Pb = 64);
        var e = (R.Pb++ << 8) | 0;
        db(e, {
          open: (f) => {
            f.seekable = !1;
          },
          close: () => {
            d && d.buffer && d.buffer.length && d(10);
          },
          read: (f, h, l, m) => {
            for (var n = 0, r = 0; r < m; r++) {
              try {
                var p = c();
              } catch (q) {
                throw new N(29);
              }
              if (void 0 === p && 0 === n) throw new N(6);
              if (null === p || void 0 === p) break;
              n++;
              h[l + r] = p;
            }
            n && (f.node.timestamp = Date.now());
            return n;
          },
          write: (f, h, l, m) => {
            for (var n = 0; n < m; n++)
              try {
                d(h[l + n]);
              } catch (r) {
                throw new N(29);
              }
            m && (f.node.timestamp = Date.now());
            return n;
          },
        });
        return Gb(a, b, e);
      },
      Xb = (a) => {
        if (!(a.qc || a.rc || a.link || a.ua)) {
          if ("undefined" != typeof XMLHttpRequest)
            throw Error(
              "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.",
            );
          if (ha)
            try {
              (a.ua = ab(ha(a.url), !0)), (a.za = a.ua.length);
            } catch (b) {
              throw new N(29);
            }
          else throw Error("Cannot load without read() or XMLHttpRequest.");
        }
      },
      Yb = (a, b, c, d, e) => {
        function f() {
          this.yb = !1;
          this.hb = [];
        }
        function h(p, q, k, t, x) {
          p = p.node.ua;
          if (x >= p.length) return 0;
          t = Math.min(p.length - x, t);
          if (p.slice) for (var z = 0; z < t; z++) q[k + z] = p[x + z];
          else for (z = 0; z < t; z++) q[k + z] = p.get(x + z);
          return t;
        }
        f.prototype.get = function (p) {
          if (!(p > this.length - 1 || 0 > p)) {
            var q = p % this.Jb;
            return this.kb((p / this.Jb) | 0)[q];
          }
        };
        f.prototype.Ac = function (p) {
          this.kb = p;
        };
        f.prototype.Hb = function () {
          var p = new XMLHttpRequest();
          p.open("HEAD", c, !1);
          p.send(null);
          if (!((200 <= p.status && 300 > p.status) || 304 === p.status))
            throw Error("Couldn't load " + c + ". Status: " + p.status);
          var q = Number(p.getResponseHeader("Content-length")),
            k,
            t = (k = p.getResponseHeader("Accept-Ranges")) && "bytes" === k;
          p = (k = p.getResponseHeader("Content-Encoding")) && "gzip" === k;
          var x = 1048576;
          t || (x = q);
          var z = this;
          z.Ac((F) => {
            var G = F * x,
              y = (F + 1) * x - 1;
            y = Math.min(y, q - 1);
            if ("undefined" == typeof z.hb[F]) {
              var M = z.hb;
              if (G > y)
                throw Error(
                  "invalid range (" + G + ", " + y + ") or no bytes requested!",
                );
              if (y > q - 1)
                throw Error(
                  "only " + q + " bytes available! programmer error!",
                );
              var B = new XMLHttpRequest();
              B.open("GET", c, !1);
              q !== x && B.setRequestHeader("Range", "bytes=" + G + "-" + y);
              B.responseType = "arraybuffer";
              B.overrideMimeType &&
                B.overrideMimeType("text/plain; charset=x-user-defined");
              B.send(null);
              if (!((200 <= B.status && 300 > B.status) || 304 === B.status))
                throw Error("Couldn't load " + c + ". Status: " + B.status);
              G =
                void 0 !== B.response
                  ? new Uint8Array(B.response || [])
                  : ab(B.responseText || "", !0);
              M[F] = G;
            }
            if ("undefined" == typeof z.hb[F]) throw Error("doXHR failed!");
            return z.hb[F];
          });
          if (p || !q)
            (x = q = 1),
              (x = q = this.kb(0).length),
              ka(
                "LazyFiles on gzip forces download of the whole file when length is accessed",
              );
          this.Yb = q;
          this.Xb = x;
          this.yb = !0;
        };
        if ("undefined" != typeof XMLHttpRequest) {
          var l = new f();
          Object.defineProperties(l, {
            length: {
              get: function () {
                this.yb || this.Hb();
                return this.Yb;
              },
            },
            Jb: {
              get: function () {
                this.yb || this.Hb();
                return this.Xb;
              },
            },
          });
          var m = void 0;
        } else (m = c), (l = void 0);
        var n = Vb(a, b, d, e);
        l ? (n.ua = l) : m && ((n.ua = null), (n.url = m));
        Object.defineProperties(n, {
          za: {
            get: function () {
              return this.ua.length;
            },
          },
        });
        var r = {};
        Object.keys(n.wa).forEach((p) => {
          var q = n.wa[p];
          r[p] = function () {
            Xb(n);
            return q.apply(null, arguments);
          };
        });
        r.read = (p, q, k, t, x) => {
          Xb(n);
          return h(p, q, k, t, x);
        };
        r.$a = (p, q, k) => {
          Xb(n);
          var t = hb(q);
          if (!t) throw new N(48);
          h(p, C, t, q, k);
          return { ya: t, Gb: !0 };
        };
        n.wa = r;
        return n;
      },
      $b = (a, b, c, d, e, f, h, l, m, n) => {
        function r(k) {
          function t(x) {
            n && n();
            l || Wb(a, b, x, d, e, m);
            f && f();
            Ja(q);
          }
          Zb.Nc(k, p, t, () => {
            h && h();
            Ja(q);
          }) || t(k);
        }
        var p = b ? $a(L(a + "/" + b)) : a,
          q = "cp " + p;
        Ia(q);
        "string" == typeof c ? nb(c, (k) => r(k), h) : r(c);
      },
      S = {},
      Db,
      Mb;
    function ac(a, b, c) {
      if ("/" === b.charAt(0)) return b;
      a = -100 === a ? "/" : bc(a).path;
      if (0 == b.length) {
        if (!c) throw new N(44);
        return a;
      }
      return L(a + "/" + b);
    }
    function cc(a, b, c) {
      try {
        var d = a(b);
      } catch (f) {
        if (f && f.node && L(b) !== L(vb(f.node))) return -54;
        throw f;
      }
      E[c >> 2] = d.hc;
      E[(c + 8) >> 2] = d.wb;
      E[(c + 12) >> 2] = d.mode;
      I[(c + 16) >> 2] = d.vc;
      E[(c + 20) >> 2] = d.uid;
      E[(c + 24) >> 2] = d.oc;
      E[(c + 28) >> 2] = d.cb;
      K = [
        d.size >>> 0,
        ((J = d.size),
        1 <= +Math.abs(J)
          ? 0 < J
            ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      E[(c + 40) >> 2] = K[0];
      E[(c + 44) >> 2] = K[1];
      E[(c + 48) >> 2] = 4096;
      E[(c + 52) >> 2] = d.bc;
      a = d.$b.getTime();
      b = d.uc.getTime();
      var e = d.ec.getTime();
      K = [
        Math.floor(a / 1e3) >>> 0,
        ((J = Math.floor(a / 1e3)),
        1 <= +Math.abs(J)
          ? 0 < J
            ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      E[(c + 56) >> 2] = K[0];
      E[(c + 60) >> 2] = K[1];
      I[(c + 64) >> 2] = (a % 1e3) * 1e3;
      K = [
        Math.floor(b / 1e3) >>> 0,
        ((J = Math.floor(b / 1e3)),
        1 <= +Math.abs(J)
          ? 0 < J
            ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      E[(c + 72) >> 2] = K[0];
      E[(c + 76) >> 2] = K[1];
      I[(c + 80) >> 2] = (b % 1e3) * 1e3;
      K = [
        Math.floor(e / 1e3) >>> 0,
        ((J = Math.floor(e / 1e3)),
        1 <= +Math.abs(J)
          ? 0 < J
            ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      E[(c + 88) >> 2] = K[0];
      E[(c + 92) >> 2] = K[1];
      I[(c + 96) >> 2] = (e % 1e3) * 1e3;
      K = [
        d.wb >>> 0,
        ((J = d.wb),
        1 <= +Math.abs(J)
          ? 0 < J
            ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
          : 0),
      ];
      E[(c + 104) >> 2] = K[0];
      E[(c + 108) >> 2] = K[1];
      return 0;
    }
    var dc = void 0;
    function bc(a) {
      a = qb[a];
      if (!a) throw new N(8);
      return a;
    }
    var ec = {};
    function fc(a) {
      for (; a.length; ) {
        var b = a.pop();
        a.pop()(b);
      }
    }
    function gc(a) {
      return this.fromWireType(E[a >> 2]);
    }
    var hc = {},
      ic = {},
      jc = {};
    function kc(a) {
      if (void 0 === a) return "_unknown";
      a = a.replace(/[^a-zA-Z0-9_]/g, "$");
      var b = a.charCodeAt(0);
      return 48 <= b && 57 >= b ? "_" + a : a;
    }
    function lc(a, b) {
      a = kc(a);
      return {
        [a]: function () {
          return b.apply(this, arguments);
        },
      }[a];
    }
    function mc(a) {
      var b = Error,
        c = lc(a, function (d) {
          this.name = a;
          this.message = d;
          d = Error(d).stack;
          void 0 !== d &&
            (this.stack =
              this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
        });
      c.prototype = Object.create(b.prototype);
      c.prototype.constructor = c;
      c.prototype.toString = function () {
        return void 0 === this.message
          ? this.name
          : this.name + ": " + this.message;
      };
      return c;
    }
    var nc = void 0;
    function oc(a) {
      throw new nc(a);
    }
    function pc(a, b, c) {
      function d(l) {
        l = c(l);
        l.length !== a.length && oc("Mismatched type converter count");
        for (var m = 0; m < a.length; ++m) qc(a[m], l[m]);
      }
      a.forEach(function (l) {
        jc[l] = b;
      });
      var e = Array(b.length),
        f = [],
        h = 0;
      b.forEach((l, m) => {
        ic.hasOwnProperty(l)
          ? (e[m] = ic[l])
          : (f.push(l),
            hc.hasOwnProperty(l) || (hc[l] = []),
            hc[l].push(() => {
              e[m] = ic[l];
              ++h;
              h === f.length && d(e);
            }));
      });
      0 === f.length && d(e);
    }
    function rc(a) {
      switch (a) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + a);
      }
    }
    var sc = void 0;
    function T(a) {
      for (var b = ""; w[a]; ) b += sc[w[a++]];
      return b;
    }
    var tc = void 0;
    function U(a) {
      throw new tc(a);
    }
    function qc(a, b, c = {}) {
      if (!("argPackAdvance" in b))
        throw new TypeError(
          "registerType registeredInstance requires argPackAdvance",
        );
      var d = b.name;
      a || U('type "' + d + '" must have a positive integer typeid pointer');
      if (ic.hasOwnProperty(a)) {
        if (c.pc) return;
        U("Cannot register type '" + d + "' twice");
      }
      ic[a] = b;
      delete jc[a];
      hc.hasOwnProperty(a) &&
        ((b = hc[a]), delete hc[a], b.forEach((e) => e()));
    }
    function uc(a) {
      U(a.ta.Aa.xa.name + " instance already deleted");
    }
    var vc = !1;
    function wc() {}
    function xc(a) {
      --a.count.value;
      0 === a.count.value && (a.Da ? a.Ha.Oa(a.Da) : a.Aa.xa.Oa(a.ya));
    }
    function yc(a, b, c) {
      if (b === c) return a;
      if (void 0 === c.Ia) return null;
      a = yc(a, b, c.Ia);
      return null === a ? null : c.ic(a);
    }
    var zc = {},
      Ac = [];
    function Bc() {
      for (; Ac.length; ) {
        var a = Ac.pop();
        a.ta.Va = !1;
        a["delete"]();
      }
    }
    var Cc = void 0,
      Dc = {};
    function Ec(a, b) {
      for (void 0 === b && U("ptr should not be undefined"); a.Ia; )
        (b = a.fb(b)), (a = a.Ia);
      return Dc[b];
    }
    function Fc(a, b) {
      (b.Aa && b.ya) || oc("makeClassHandle requires ptr and ptrType");
      !!b.Ha !== !!b.Da &&
        oc("Both smartPtrType and smartPtr must be specified");
      b.count = { value: 1 };
      return Gc(Object.create(a, { ta: { value: b } }));
    }
    function Gc(a) {
      if ("undefined" === typeof FinalizationRegistry)
        return (Gc = (b) => b), a;
      vc = new FinalizationRegistry((b) => {
        xc(b.ta);
      });
      Gc = (b) => {
        var c = b.ta;
        c.Da && vc.register(b, { ta: c }, b);
        return b;
      };
      wc = (b) => {
        vc.unregister(b);
      };
      return Gc(a);
    }
    function Hc() {}
    function Ic(a, b, c) {
      if (void 0 === a[b].Ca) {
        var d = a[b];
        a[b] = function () {
          a[b].Ca.hasOwnProperty(arguments.length) ||
            U(
              "Function '" +
                c +
                "' called with an invalid number of arguments (" +
                arguments.length +
                ") - expects one of (" +
                a[b].Ca +
                ")!",
            );
          return a[b].Ca[arguments.length].apply(this, arguments);
        };
        a[b].Ca = [];
        a[b].Ca[d.gb] = d;
      }
    }
    function Jc(a, b, c) {
      g.hasOwnProperty(a)
        ? ((void 0 === c || (void 0 !== g[a].Ca && void 0 !== g[a].Ca[c])) &&
            U("Cannot register public name '" + a + "' twice"),
          Ic(g, a, a),
          g.hasOwnProperty(c) &&
            U(
              "Cannot register multiple overloads of a function with the same number of arguments (" +
                c +
                ")!",
            ),
          (g[a].Ca[c] = b))
        : ((g[a] = b), void 0 !== c && (g[a].Oc = c));
    }
    function Kc(a, b, c, d, e, f, h, l) {
      this.name = a;
      this.constructor = b;
      this.Wa = c;
      this.Oa = d;
      this.Ia = e;
      this.kc = f;
      this.fb = h;
      this.ic = l;
      this.xc = [];
    }
    function Lc(a, b, c) {
      for (; b !== c; )
        b.fb ||
          U(
            "Expected null or instance of " +
              c.name +
              ", got an instance of " +
              b.name,
          ),
          (a = b.fb(a)),
          (b = b.Ia);
      return a;
    }
    function Mc(a, b) {
      if (null === b)
        return this.xb && U("null is not a valid " + this.name), 0;
      b.ta || U('Cannot pass "' + Nc(b) + '" as a ' + this.name);
      b.ta.ya ||
        U("Cannot pass deleted object as a pointer of type " + this.name);
      return Lc(b.ta.ya, b.ta.Aa.xa, this.xa);
    }
    function Oc(a, b) {
      if (null === b) {
        this.xb && U("null is not a valid " + this.name);
        if (this.mb) {
          var c = this.Ab();
          null !== a && a.push(this.Oa, c);
          return c;
        }
        return 0;
      }
      b.ta || U('Cannot pass "' + Nc(b) + '" as a ' + this.name);
      b.ta.ya ||
        U("Cannot pass deleted object as a pointer of type " + this.name);
      !this.lb &&
        b.ta.Aa.lb &&
        U(
          "Cannot convert argument of type " +
            (b.ta.Ha ? b.ta.Ha.name : b.ta.Aa.name) +
            " to parameter type " +
            this.name,
        );
      c = Lc(b.ta.ya, b.ta.Aa.xa, this.xa);
      if (this.mb)
        switch (
          (void 0 === b.ta.Da &&
            U("Passing raw pointer to smart pointer is illegal"),
          this.Fc)
        ) {
          case 0:
            b.ta.Ha === this
              ? (c = b.ta.Da)
              : U(
                  "Cannot convert argument of type " +
                    (b.ta.Ha ? b.ta.Ha.name : b.ta.Aa.name) +
                    " to parameter type " +
                    this.name,
                );
            break;
          case 1:
            c = b.ta.Da;
            break;
          case 2:
            if (b.ta.Ha === this) c = b.ta.Da;
            else {
              var d = b.clone();
              c = this.yc(
                c,
                Pc(function () {
                  d["delete"]();
                }),
              );
              null !== a && a.push(this.Oa, c);
            }
            break;
          default:
            U("Unsupporting sharing policy");
        }
      return c;
    }
    function Qc(a, b) {
      if (null === b)
        return this.xb && U("null is not a valid " + this.name), 0;
      b.ta || U('Cannot pass "' + Nc(b) + '" as a ' + this.name);
      b.ta.ya ||
        U("Cannot pass deleted object as a pointer of type " + this.name);
      b.ta.Aa.lb &&
        U(
          "Cannot convert argument of type " +
            b.ta.Aa.name +
            " to parameter type " +
            this.name,
        );
      return Lc(b.ta.ya, b.ta.Aa.xa, this.xa);
    }
    function Rc(a, b, c, d) {
      this.name = a;
      this.xa = b;
      this.xb = c;
      this.lb = d;
      this.mb = !1;
      this.Oa = this.yc = this.Ab = this.Tb = this.Fc = this.wc = void 0;
      void 0 !== b.Ia
        ? (this.toWireType = Oc)
        : ((this.toWireType = d ? Mc : Qc), (this.Ja = null));
    }
    function Sc(a, b, c) {
      g.hasOwnProperty(a) || oc("Replacing nonexistant public symbol");
      void 0 !== g[a].Ca && void 0 !== c
        ? (g[a].Ca[c] = b)
        : ((g[a] = b), (g[a].gb = c));
    }
    var Tc = [];
    function Uc(a) {
      var b = Tc[a];
      b || (a >= Tc.length && (Tc.length = a + 1), (Tc[a] = b = xa.get(a)));
      return b;
    }
    function Vc(a, b) {
      var c = [];
      return function () {
        c.length = 0;
        Object.assign(c, arguments);
        if (a.includes("j")) {
          var d = g["dynCall_" + a];
          d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
        } else d = Uc(b).apply(null, c);
        return d;
      };
    }
    function W(a, b) {
      a = T(a);
      var c = a.includes("j") ? Vc(a, b) : Uc(b);
      "function" != typeof c &&
        U("unknown function pointer with signature " + a + ": " + b);
      return c;
    }
    var Wc = void 0;
    function Xc(a) {
      a = Yc(a);
      var b = T(a);
      X(a);
      return b;
    }
    function Zc(a, b) {
      function c(f) {
        e[f] || ic[f] || (jc[f] ? jc[f].forEach(c) : (d.push(f), (e[f] = !0)));
      }
      var d = [],
        e = {};
      b.forEach(c);
      throw new Wc(a + ": " + d.map(Xc).join([", "]));
    }
    function $c(a, b) {
      for (var c = [], d = 0; d < a; d++) c.push(I[(b + 4 * d) >> 2]);
      return c;
    }
    function ad(a, b, c, d, e) {
      var f = b.length;
      2 > f &&
        U(
          "argTypes array size mismatch! Must at least get return value and 'this' types!",
        );
      var h = null !== b[1] && null !== c,
        l = !1;
      for (c = 1; c < b.length; ++c)
        if (null !== b[c] && void 0 === b[c].Ja) {
          l = !0;
          break;
        }
      var m = "void" !== b[0].name,
        n = f - 2,
        r = Array(n),
        p = [],
        q = [];
      return function () {
        arguments.length !== n &&
          U(
            "function " +
              a +
              " called with " +
              arguments.length +
              " arguments, expected " +
              n +
              " args!",
          );
        q.length = 0;
        p.length = h ? 2 : 1;
        p[0] = e;
        if (h) {
          var k = b[1].toWireType(q, this);
          p[1] = k;
        }
        for (var t = 0; t < n; ++t)
          (r[t] = b[t + 2].toWireType(q, arguments[t])), p.push(r[t]);
        t = d.apply(null, p);
        if (l) fc(q);
        else
          for (var x = h ? 1 : 2; x < b.length; x++) {
            var z = 1 === x ? k : r[x - 2];
            null !== b[x].Ja && b[x].Ja(z);
          }
        k = m ? b[0].fromWireType(t) : void 0;
        return k;
      };
    }
    var bd = [],
      Y = [
        {},
        { value: void 0 },
        { value: null },
        { value: !0 },
        { value: !1 },
      ];
    function cd(a) {
      4 < a && 0 === --Y[a].Cb && ((Y[a] = void 0), bd.push(a));
    }
    var dd = (a) => {
        a || U("Cannot use deleted val. handle = " + a);
        return Y[a].value;
      },
      Pc = (a) => {
        switch (a) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            var b = bd.length ? bd.pop() : Y.length;
            Y[b] = { Cb: 1, value: a };
            return b;
        }
      };
    function Nc(a) {
      if (null === a) return "null";
      var b = typeof a;
      return "object" === b || "array" === b || "function" === b
        ? a.toString()
        : "" + a;
    }
    function ed(a, b) {
      switch (b) {
        case 2:
          return function (c) {
            return this.fromWireType(ua[c >> 2]);
          };
        case 3:
          return function (c) {
            return this.fromWireType(va[c >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + a);
      }
    }
    function fd(a, b, c) {
      switch (b) {
        case 0:
          return c
            ? function (d) {
                return C[d];
              }
            : function (d) {
                return w[d];
              };
        case 1:
          return c
            ? function (d) {
                return ta[d >> 1];
              }
            : function (d) {
                return D[d >> 1];
              };
        case 2:
          return c
            ? function (d) {
                return E[d >> 2];
              }
            : function (d) {
                return I[d >> 2];
              };
        default:
          throw new TypeError("Unknown integer type: " + a);
      }
    }
    var gd =
      "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
    function hd(a, b) {
      var c = a >> 1;
      for (var d = c + b / 2; !(c >= d) && D[c]; ) ++c;
      c <<= 1;
      if (32 < c - a && gd) return gd.decode(w.subarray(a, c));
      c = "";
      for (d = 0; !(d >= b / 2); ++d) {
        var e = ta[(a + 2 * d) >> 1];
        if (0 == e) break;
        c += String.fromCharCode(e);
      }
      return c;
    }
    function jd(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (2 > c) return 0;
      c -= 2;
      var d = b;
      c = c < 2 * a.length ? c / 2 : a.length;
      for (var e = 0; e < c; ++e) (ta[b >> 1] = a.charCodeAt(e)), (b += 2);
      ta[b >> 1] = 0;
      return b - d;
    }
    function kd(a) {
      return 2 * a.length;
    }
    function ld(a, b) {
      for (var c = 0, d = ""; !(c >= b / 4); ) {
        var e = E[(a + 4 * c) >> 2];
        if (0 == e) break;
        ++c;
        65536 <= e
          ? ((e -= 65536),
            (d += String.fromCharCode(55296 | (e >> 10), 56320 | (e & 1023))))
          : (d += String.fromCharCode(e));
      }
      return d;
    }
    function md(a, b, c) {
      void 0 === c && (c = 2147483647);
      if (4 > c) return 0;
      var d = b;
      c = d + c - 4;
      for (var e = 0; e < a.length; ++e) {
        var f = a.charCodeAt(e);
        if (55296 <= f && 57343 >= f) {
          var h = a.charCodeAt(++e);
          f = (65536 + ((f & 1023) << 10)) | (h & 1023);
        }
        E[b >> 2] = f;
        b += 4;
        if (b + 4 > c) break;
      }
      E[b >> 2] = 0;
      return b - d;
    }
    function nd(a) {
      for (var b = 0, c = 0; c < a.length; ++c) {
        var d = a.charCodeAt(c);
        55296 <= d && 57343 >= d && ++c;
        b += 4;
      }
      return b;
    }
    function od(a, b) {
      var c = ic[a];
      void 0 === c && U(b + " has unknown type " + Xc(a));
      return c;
    }
    var pd = {};
    function qd(a) {
      var b = pd[a];
      return void 0 === b ? T(a) : b;
    }
    var rd = [];
    function sd() {
      function a(b) {
        b.$$$embind_global$$$ = b;
        var c =
          "object" == typeof $$$embind_global$$$ && b.$$$embind_global$$$ == b;
        c || delete b.$$$embind_global$$$;
        return c;
      }
      if ("object" == typeof globalThis) return globalThis;
      if ("object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
      "object" == typeof global && a(global)
        ? ($$$embind_global$$$ = global)
        : "object" == typeof self && a(self) && ($$$embind_global$$$ = self);
      if ("object" == typeof $$$embind_global$$$) return $$$embind_global$$$;
      throw Error("unable to get global object.");
    }
    function td(a) {
      var b = rd.length;
      rd.push(a);
      return b;
    }
    function ud(a, b) {
      for (var c = Array(a), d = 0; d < a; ++d)
        c[d] = od(I[(b + 4 * d) >> 2], "parameter " + d);
      return c;
    }
    var vd = [];
    function wd(a) {
      var b = Array(a + 1);
      return function (c, d, e) {
        b[0] = c;
        for (var f = 0; f < a; ++f) {
          var h = od(I[(d + 4 * f) >> 2], "parameter " + f);
          b[f + 1] = h.readValueFromPointer(e);
          e += h.argPackAdvance;
        }
        c = new (c.bind.apply(c, b))();
        return Pc(c);
      };
    }
    var xd = {};
    function yd(a) {
      return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
    }
    var zd = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
      Ad = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    function Bd(a) {
      return (yd(a.getFullYear()) ? zd : Ad)[a.getMonth()] + a.getDate() - 1;
    }
    function Cd(a) {
      var b = sa(a) + 1,
        c = Dd(b);
      c && A(a, C, c, b);
      return c;
    }
    var Ed = [],
      Fd = {};
    function Z(a, b) {
      I[a >> 2] = b;
      I[(a + 4) >> 2] = (b / 4294967296) | 0;
    }
    var Gd;
    function Hd(a, b, c, d, e) {
      function f() {
        var B = 0,
          V = 0;
        y.response &&
          F &&
          0 === I[(a + 12) >> 2] &&
          (V = y.response.byteLength);
        0 < V && ((B = Dd(V)), w.set(new Uint8Array(y.response), B));
        I[(a + 12) >> 2] = B;
        Z(a + 16, V);
        Z(a + 24, 0);
        (B = y.response ? y.response.byteLength : 0) && Z(a + 32, B);
        D[(a + 40) >> 1] = y.readyState;
        D[(a + 42) >> 1] = y.status;
        y.statusText && A(y.statusText, w, a + 44, 64);
      }
      var h = I[(a + 8) >> 2];
      if (h) {
        var l = v(h),
          m = a + 112,
          n = v(m);
        n || (n = "GET");
        var r = I[(m + 52) >> 2],
          p = I[(m + 56) >> 2],
          q = !!I[(m + 60) >> 2],
          k = I[(m + 68) >> 2],
          t = I[(m + 72) >> 2];
        h = I[(m + 76) >> 2];
        var x = I[(m + 80) >> 2],
          z = I[(m + 84) >> 2];
        m = I[(m + 88) >> 2];
        var F = !!(r & 1),
          G = !!(r & 2);
        r = !!(r & 64);
        k = k ? v(k) : void 0;
        t = t ? v(t) : void 0;
        var y = new XMLHttpRequest();
        y.withCredentials = q;
        y.open(n, l, !r, k, t);
        r || (y.timeout = p);
        y.Rc = l;
        y.responseType = "arraybuffer";
        x && ((l = v(x)), y.overrideMimeType(l));
        if (h)
          for (;;) {
            n = I[h >> 2];
            if (!n) break;
            l = I[(h + 4) >> 2];
            if (!l) break;
            h += 8;
            n = v(n);
            l = v(l);
            y.setRequestHeader(n, l);
          }
        var M = I[(a + 0) >> 2];
        Fd[M] = y;
        h = z && m ? w.slice(z, z + m) : null;
        y.onload = (B) => {
          M in Fd &&
            (f(),
            200 <= y.status && 300 > y.status
              ? b && b(a, y, B)
              : c && c(a, y, B));
        };
        y.onerror = (B) => {
          M in Fd && (f(), c && c(a, y, B));
        };
        y.ontimeout = (B) => {
          M in Fd && c && c(a, y, B);
        };
        y.onprogress = (B) => {
          if (M in Fd) {
            var V = F && G && y.response ? y.response.byteLength : 0,
              H = 0;
            0 < V &&
              F &&
              G &&
              ((H = Dd(V)), w.set(new Uint8Array(y.response), H));
            I[(a + 12) >> 2] = H;
            Z(a + 16, V);
            Z(a + 24, B.loaded - V);
            Z(a + 32, B.total);
            D[(a + 40) >> 1] = y.readyState;
            3 <= y.readyState &&
              0 === y.status &&
              0 < B.loaded &&
              (y.status = 200);
            D[(a + 42) >> 1] = y.status;
            y.statusText && A(y.statusText, w, a + 44, 64);
            d && d(a, y, B);
            H && X(H);
          }
        };
        y.onreadystatechange = (B) => {
          M in Fd
            ? ((D[(a + 40) >> 1] = y.readyState),
              2 <= y.readyState && (D[(a + 42) >> 1] = y.status),
              e && e(a, y, B))
            : --Da;
        };
        try {
          y.send(h);
        } catch (B) {
          c && c(a, y, B);
        }
      } else c(a, 0, "no url specified!");
    }
    function Id(a) {
      a instanceof Ua || "unwind" == a || ea(1, a);
    }
    function Jd(a) {
      pa = a;
      if (!(noExitRuntime || 0 < Da)) {
        Kd();
        Va(Aa);
        Sb = !1;
        Ld(0);
        for (var b = 0; b < qb.length; b++) {
          var c = qb[b];
          c && Ob(c);
        }
        Ca = !0;
      }
      pa = a;
      if (!(noExitRuntime || 0 < Da)) {
        if (g.onExit) g.onExit(a);
        oa = !0;
      }
      ea(a, new Ua(a));
    }
    function Md(a, b, c, d) {
      var e = Gd;
      if (e) {
        var f = I[(a + 112 + 64) >> 2];
        f || (f = I[(a + 8) >> 2]);
        var h = v(f);
        try {
          var l = e
            .transaction(["FILES"], "readwrite")
            .objectStore("FILES")
            .put(b, h);
          l.onsuccess = () => {
            D[(a + 40) >> 1] = 4;
            D[(a + 42) >> 1] = 200;
            A("OK", w, a + 44, 64);
            c(a, 0, h);
          };
          l.onerror = (m) => {
            D[(a + 40) >> 1] = 4;
            D[(a + 42) >> 1] = 413;
            A("Payload Too Large", w, a + 44, 64);
            d(a, 0, m);
          };
        } catch (m) {
          d(a, 0, m);
        }
      } else d(a, 0, "IndexedDB not available!");
    }
    function Nd(a, b, c) {
      var d = Gd;
      if (d) {
        var e = I[(a + 112 + 64) >> 2];
        e || (e = I[(a + 8) >> 2]);
        e = v(e);
        try {
          var f = d
            .transaction(["FILES"], "readonly")
            .objectStore("FILES")
            .get(e);
          f.onsuccess = (h) => {
            if (h.target.result) {
              h = h.target.result;
              var l = h.byteLength || h.length,
                m = Dd(l);
              w.set(new Uint8Array(h), m);
              I[(a + 12) >> 2] = m;
              Z(a + 16, l);
              Z(a + 24, 0);
              Z(a + 32, l);
              D[(a + 40) >> 1] = 4;
              D[(a + 42) >> 1] = 200;
              A("OK", w, a + 44, 64);
              b(a, 0, h);
            } else
              (D[(a + 40) >> 1] = 4),
                (D[(a + 42) >> 1] = 404),
                A("Not Found", w, a + 44, 64),
                c(a, 0, "no data");
          };
          f.onerror = (h) => {
            D[(a + 40) >> 1] = 4;
            D[(a + 42) >> 1] = 404;
            A("Not Found", w, a + 44, 64);
            c(a, 0, h);
          };
        } catch (h) {
          c(a, 0, h);
        }
      } else c(a, 0, "IndexedDB not available!");
    }
    function Od(a, b, c) {
      var d = Gd;
      if (d) {
        var e = I[(a + 112 + 64) >> 2];
        e || (e = I[(a + 8) >> 2]);
        e = v(e);
        try {
          var f = d
            .transaction(["FILES"], "readwrite")
            .objectStore("FILES")
            .delete(e);
          f.onsuccess = (h) => {
            h = h.target.result;
            I[(a + 12) >> 2] = 0;
            Z(a + 16, 0);
            Z(a + 24, 0);
            Z(a + 32, 0);
            D[(a + 40) >> 1] = 4;
            D[(a + 42) >> 1] = 200;
            A("OK", w, a + 44, 64);
            b(a, 0, h);
          };
          f.onerror = (h) => {
            D[(a + 40) >> 1] = 4;
            D[(a + 42) >> 1] = 404;
            A("Not Found", w, a + 44, 64);
            c(a, 0, h);
          };
        } catch (h) {
          c(a, 0, h);
        }
      } else c(a, 0, "IndexedDB not available!");
    }
    var Pd = {};
    function Qd() {
      if (!Rd) {
        var a = {
            USER: "web_user",
            LOGNAME: "web_user",
            PATH: "/",
            PWD: "/",
            HOME: "/home/web_user",
            LANG:
              (
                ("object" == typeof navigator &&
                  navigator.languages &&
                  navigator.languages[0]) ||
                "C"
              ).replace("-", "_") + ".UTF-8",
            _: da || "./this.program",
          },
          b;
        for (b in Pd) void 0 === Pd[b] ? delete a[b] : (a[b] = Pd[b]);
        var c = [];
        for (b in a) c.push(b + "=" + a[b]);
        Rd = c;
      }
      return Rd;
    }
    var Rd;
    function Sd(a, b) {
      Sd.Sb || (Sd.Sb = Za());
      for (var c = 0; c < b; c++) C[(a + c) >> 0] = Sd.Sb();
      return 0;
    }
    var Td = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      Ud = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function Vd(a, b, c, d) {
      function e(k, t, x) {
        for (k = "number" == typeof k ? k.toString() : k || ""; k.length < t; )
          k = x[0] + k;
        return k;
      }
      function f(k, t) {
        return e(k, t, "0");
      }
      function h(k, t) {
        function x(F) {
          return 0 > F ? -1 : 0 < F ? 1 : 0;
        }
        var z;
        0 === (z = x(k.getFullYear() - t.getFullYear())) &&
          0 === (z = x(k.getMonth() - t.getMonth())) &&
          (z = x(k.getDate() - t.getDate()));
        return z;
      }
      function l(k) {
        switch (k.getDay()) {
          case 0:
            return new Date(k.getFullYear() - 1, 11, 29);
          case 1:
            return k;
          case 2:
            return new Date(k.getFullYear(), 0, 3);
          case 3:
            return new Date(k.getFullYear(), 0, 2);
          case 4:
            return new Date(k.getFullYear(), 0, 1);
          case 5:
            return new Date(k.getFullYear() - 1, 11, 31);
          case 6:
            return new Date(k.getFullYear() - 1, 11, 30);
        }
      }
      function m(k) {
        var t = k.Sa;
        for (k = new Date(new Date(k.Ta + 1900, 0, 1).getTime()); 0 < t; ) {
          var x = k.getMonth(),
            z = (yd(k.getFullYear()) ? Td : Ud)[x];
          if (t > z - k.getDate())
            (t -= z - k.getDate() + 1),
              k.setDate(1),
              11 > x
                ? k.setMonth(x + 1)
                : (k.setMonth(0), k.setFullYear(k.getFullYear() + 1));
          else {
            k.setDate(k.getDate() + t);
            break;
          }
        }
        x = new Date(k.getFullYear() + 1, 0, 4);
        t = l(new Date(k.getFullYear(), 0, 4));
        x = l(x);
        return 0 >= h(t, k)
          ? 0 >= h(x, k)
            ? k.getFullYear() + 1
            : k.getFullYear()
          : k.getFullYear() - 1;
      }
      var n = E[(d + 40) >> 2];
      d = {
        Ic: E[d >> 2],
        Hc: E[(d + 4) >> 2],
        rb: E[(d + 8) >> 2],
        Eb: E[(d + 12) >> 2],
        sb: E[(d + 16) >> 2],
        Ta: E[(d + 20) >> 2],
        Ma: E[(d + 24) >> 2],
        Sa: E[(d + 28) >> 2],
        Qc: E[(d + 32) >> 2],
        Gc: E[(d + 36) >> 2],
        Jc: n ? v(n) : "",
      };
      c = v(c);
      n = {
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m/%d/%y",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%r": "%I:%M:%S %p",
        "%R": "%H:%M",
        "%T": "%H:%M:%S",
        "%x": "%m/%d/%y",
        "%X": "%H:%M:%S",
        "%Ec": "%c",
        "%EC": "%C",
        "%Ex": "%m/%d/%y",
        "%EX": "%H:%M:%S",
        "%Ey": "%y",
        "%EY": "%Y",
        "%Od": "%d",
        "%Oe": "%e",
        "%OH": "%H",
        "%OI": "%I",
        "%Om": "%m",
        "%OM": "%M",
        "%OS": "%S",
        "%Ou": "%u",
        "%OU": "%U",
        "%OV": "%V",
        "%Ow": "%w",
        "%OW": "%W",
        "%Oy": "%y",
      };
      for (var r in n) c = c.replace(new RegExp(r, "g"), n[r]);
      var p = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
          " ",
        ),
        q =
          "January February March April May June July August September October November December".split(
            " ",
          );
      n = {
        "%a": function (k) {
          return p[k.Ma].substring(0, 3);
        },
        "%A": function (k) {
          return p[k.Ma];
        },
        "%b": function (k) {
          return q[k.sb].substring(0, 3);
        },
        "%B": function (k) {
          return q[k.sb];
        },
        "%C": function (k) {
          return f(((k.Ta + 1900) / 100) | 0, 2);
        },
        "%d": function (k) {
          return f(k.Eb, 2);
        },
        "%e": function (k) {
          return e(k.Eb, 2, " ");
        },
        "%g": function (k) {
          return m(k).toString().substring(2);
        },
        "%G": function (k) {
          return m(k);
        },
        "%H": function (k) {
          return f(k.rb, 2);
        },
        "%I": function (k) {
          k = k.rb;
          0 == k ? (k = 12) : 12 < k && (k -= 12);
          return f(k, 2);
        },
        "%j": function (k) {
          for (
            var t = 0, x = 0;
            x <= k.sb - 1;
            t += (yd(k.Ta + 1900) ? Td : Ud)[x++]
          );
          return f(k.Eb + t, 3);
        },
        "%m": function (k) {
          return f(k.sb + 1, 2);
        },
        "%M": function (k) {
          return f(k.Hc, 2);
        },
        "%n": function () {
          return "\n";
        },
        "%p": function (k) {
          return 0 <= k.rb && 12 > k.rb ? "AM" : "PM";
        },
        "%S": function (k) {
          return f(k.Ic, 2);
        },
        "%t": function () {
          return "\t";
        },
        "%u": function (k) {
          return k.Ma || 7;
        },
        "%U": function (k) {
          return f(Math.floor((k.Sa + 7 - k.Ma) / 7), 2);
        },
        "%V": function (k) {
          var t = Math.floor((k.Sa + 7 - ((k.Ma + 6) % 7)) / 7);
          2 >= (k.Ma + 371 - k.Sa - 2) % 7 && t++;
          if (t)
            53 == t &&
              ((x = (k.Ma + 371 - k.Sa) % 7),
              4 == x || (3 == x && yd(k.Ta)) || (t = 1));
          else {
            t = 52;
            var x = (k.Ma + 7 - k.Sa - 1) % 7;
            (4 == x || (5 == x && yd((k.Ta % 400) - 1))) && t++;
          }
          return f(t, 2);
        },
        "%w": function (k) {
          return k.Ma;
        },
        "%W": function (k) {
          return f(Math.floor((k.Sa + 7 - ((k.Ma + 6) % 7)) / 7), 2);
        },
        "%y": function (k) {
          return (k.Ta + 1900).toString().substring(2);
        },
        "%Y": function (k) {
          return k.Ta + 1900;
        },
        "%z": function (k) {
          k = k.Gc;
          var t = 0 <= k;
          k = Math.abs(k) / 60;
          return (
            (t ? "+" : "-") +
            String("0000" + ((k / 60) * 100 + (k % 60))).slice(-4)
          );
        },
        "%Z": function (k) {
          return k.Jc;
        },
        "%%": function () {
          return "%";
        },
      };
      c = c.replace(/%%/g, "\x00\x00");
      for (r in n)
        c.includes(r) && (c = c.replace(new RegExp(r, "g"), n[r](d)));
      c = c.replace(/\0\0/g, "%");
      r = ab(c, !1);
      if (r.length > b) return 0;
      C.set(r, a);
      return r.length - 1;
    }
    function yb(a, b, c, d) {
      a || (a = this);
      this.parent = a;
      this.Na = a.Na;
      this.ab = null;
      this.id = rb++;
      this.name = b;
      this.mode = c;
      this.va = {};
      this.wa = {};
      this.cb = d;
    }
    Object.defineProperties(yb.prototype, {
      read: {
        get: function () {
          return 365 === (this.mode & 365);
        },
        set: function (a) {
          a ? (this.mode |= 365) : (this.mode &= -366);
        },
      },
      write: {
        get: function () {
          return 146 === (this.mode & 146);
        },
        set: function (a) {
          a ? (this.mode |= 146) : (this.mode &= -147);
        },
      },
      rc: {
        get: function () {
          return 16384 === (this.mode & 61440);
        },
      },
      qc: {
        get: function () {
          return 8192 === (this.mode & 61440);
        },
      },
    });
    Rb();
    sb = Array(4096);
    Fb(O, "/");
    Q("/tmp", 16895, 0);
    Q("/home", 16895, 0);
    Q("/home/web_user", 16895, 0);
    (() => {
      Q("/dev", 16895, 0);
      db(259, { read: () => 0, write: (b, c, d, e) => e });
      Gb("/dev/null", 259);
      cb(1280, fb);
      cb(1536, gb);
      Gb("/dev/tty", 1280);
      Gb("/dev/tty1", 1536);
      var a = Za();
      R("/dev", "random", a);
      R("/dev", "urandom", a);
      Q("/dev/shm", 16895, 0);
      Q("/dev/shm/tmp", 16895, 0);
    })();
    (() => {
      Q("/proc", 16895, 0);
      var a = Q("/proc/self", 16895, 0);
      Q("/proc/self/fd", 16895, 0);
      Fb(
        {
          Na: () => {
            var b = kb(a, "fd", 16895, 73);
            b.va = {
              Za: (c, d) => {
                var e = qb[+d];
                if (!e) throw new N(8);
                c = {
                  parent: null,
                  Na: { Qb: "fake" },
                  va: { eb: () => e.path },
                };
                return (c.parent = c);
              },
            };
            return b;
          },
        },
        "/proc/self/fd",
      );
    })();
    var Zb;
    g.FS_createPath = Ub;
    g.FS_createDataFile = Wb;
    g.FS_createPreloadedFile = $b;
    g.FS_unlink = Ib;
    g.FS_createLazyFile = Yb;
    g.FS_createDevice = R;
    nc = g.InternalError = mc("InternalError");
    for (var Wd = Array(256), Xd = 0; 256 > Xd; ++Xd)
      Wd[Xd] = String.fromCharCode(Xd);
    sc = Wd;
    tc = g.BindingError = mc("BindingError");
    Hc.prototype.isAliasOf = function (a) {
      if (!(this instanceof Hc && a instanceof Hc)) return !1;
      var b = this.ta.Aa.xa,
        c = this.ta.ya,
        d = a.ta.Aa.xa;
      for (a = a.ta.ya; b.Ia; ) (c = b.fb(c)), (b = b.Ia);
      for (; d.Ia; ) (a = d.fb(a)), (d = d.Ia);
      return b === d && c === a;
    };
    Hc.prototype.clone = function () {
      this.ta.ya || uc(this);
      if (this.ta.bb) return (this.ta.count.value += 1), this;
      var a = Gc,
        b = Object,
        c = b.create,
        d = Object.getPrototypeOf(this),
        e = this.ta;
      a = a(
        c.call(b, d, {
          ta: {
            value: {
              count: e.count,
              Va: e.Va,
              bb: e.bb,
              ya: e.ya,
              Aa: e.Aa,
              Da: e.Da,
              Ha: e.Ha,
            },
          },
        }),
      );
      a.ta.count.value += 1;
      a.ta.Va = !1;
      return a;
    };
    Hc.prototype["delete"] = function () {
      this.ta.ya || uc(this);
      this.ta.Va && !this.ta.bb && U("Object already scheduled for deletion");
      wc(this);
      xc(this.ta);
      this.ta.bb || ((this.ta.Da = void 0), (this.ta.ya = void 0));
    };
    Hc.prototype.isDeleted = function () {
      return !this.ta.ya;
    };
    Hc.prototype.deleteLater = function () {
      this.ta.ya || uc(this);
      this.ta.Va && !this.ta.bb && U("Object already scheduled for deletion");
      Ac.push(this);
      1 === Ac.length && Cc && Cc(Bc);
      this.ta.Va = !0;
      return this;
    };
    g.getInheritedInstanceCount = function () {
      return Object.keys(Dc).length;
    };
    g.getLiveInheritedInstances = function () {
      var a = [],
        b;
      for (b in Dc) Dc.hasOwnProperty(b) && a.push(Dc[b]);
      return a;
    };
    g.flushPendingDeletes = Bc;
    g.setDelayFunction = function (a) {
      Cc = a;
      Ac.length && Cc && Cc(Bc);
    };
    Rc.prototype.lc = function (a) {
      this.Tb && (a = this.Tb(a));
      return a;
    };
    Rc.prototype.Kb = function (a) {
      this.Oa && this.Oa(a);
    };
    Rc.prototype.argPackAdvance = 8;
    Rc.prototype.readValueFromPointer = gc;
    Rc.prototype.deleteObject = function (a) {
      if (null !== a) a["delete"]();
    };
    Rc.prototype.fromWireType = function (a) {
      function b() {
        return this.mb
          ? Fc(this.xa.Wa, { Aa: this.wc, ya: c, Ha: this, Da: a })
          : Fc(this.xa.Wa, { Aa: this, ya: a });
      }
      var c = this.lc(a);
      if (!c) return this.Kb(a), null;
      var d = Ec(this.xa, c);
      if (void 0 !== d) {
        if (0 === d.ta.count.value)
          return (d.ta.ya = c), (d.ta.Da = a), d.clone();
        d = d.clone();
        this.Kb(a);
        return d;
      }
      d = this.xa.kc(c);
      d = zc[d];
      if (!d) return b.call(this);
      d = this.lb ? d.dc : d.pointerType;
      var e = yc(c, this.xa, d.xa);
      return null === e
        ? b.call(this)
        : this.mb
        ? Fc(d.xa.Wa, { Aa: d, ya: e, Ha: this, Da: a })
        : Fc(d.xa.Wa, { Aa: d, ya: e });
    };
    Wc = g.UnboundTypeError = mc("UnboundTypeError");
    g.count_emval_handles = function () {
      for (var a = 0, b = 5; b < Y.length; ++b) void 0 !== Y[b] && ++a;
      return a;
    };
    g.get_first_emval = function () {
      for (var a = 5; a < Y.length; ++a) if (void 0 !== Y[a]) return Y[a];
      return null;
    };
    Ia("library_fetch_init");
    (function (a, b) {
      try {
        var c = indexedDB.open("emscripten_filesystem", 1);
      } catch (d) {
        b(d);
        return;
      }
      c.onupgradeneeded = (d) => {
        d = d.target.result;
        d.objectStoreNames.contains("FILES") && d.deleteObjectStore("FILES");
        d.createObjectStore("FILES");
      };
      c.onsuccess = (d) => a(d.target.result);
      c.onerror = (d) => b(d);
    })(
      (a) => {
        Gd = a;
        Ja("library_fetch_init");
      },
      () => {
        Gd = !1;
        Ja("library_fetch_init");
      },
    );
    var Yd = {
      L: function (a, b) {
        try {
          var c = bc(a);
          return cc(Jb, c.path, b);
        } catch (d) {
          if ("undefined" == typeof S || "ErrnoError" !== d.name) throw d;
          return -d.Ga;
        }
      },
      J: function (a, b, c, d) {
        try {
          b = v(b);
          var e = d & 256;
          b = ac(a, b, d & 4096);
          return cc(e ? Kb : Jb, b, c);
        } catch (f) {
          if ("undefined" == typeof S || "ErrnoError" !== f.name) throw f;
          return -f.Ga;
        }
      },
      M: function (a, b, c, d) {
        dc = d;
        try {
          b = v(b);
          b = ac(a, b);
          if (d) {
            dc += 4;
            var e = E[(dc - 4) >> 2];
          } else e = 0;
          return Nb(b, c, e).Qa;
        } catch (f) {
          if ("undefined" == typeof S || "ErrnoError" !== f.name) throw f;
          return -f.Ga;
        }
      },
      K: function (a, b) {
        try {
          return (a = v(a)), cc(Jb, a, b);
        } catch (c) {
          if ("undefined" == typeof S || "ErrnoError" !== c.name) throw c;
          return -c.Ga;
        }
      },
      e: function (a) {
        var b = ec[a];
        delete ec[a];
        var c = b.Ab,
          d = b.Oa,
          e = b.Mb,
          f = e.map((h) => h.nc).concat(e.map((h) => h.Dc));
        pc([a], f, (h) => {
          var l = {};
          e.forEach((m, n) => {
            var r = h[n],
              p = m.kb,
              q = m.mc,
              k = h[n + e.length],
              t = m.Cc,
              x = m.Ec;
            l[m.jc] = {
              read: (z) => r.fromWireType(p(q, z)),
              write: (z, F) => {
                var G = [];
                t(x, z, k.toWireType(G, F));
                fc(G);
              },
            };
          });
          return [
            {
              name: b.name,
              fromWireType: function (m) {
                var n = {},
                  r;
                for (r in l) n[r] = l[r].read(m);
                d(m);
                return n;
              },
              toWireType: function (m, n) {
                for (var r in l)
                  if (!(r in n))
                    throw new TypeError('Missing field:  "' + r + '"');
                var p = c();
                for (r in l) l[r].write(p, n[r]);
                null !== m && m.push(d, p);
                return p;
              },
              argPackAdvance: 8,
              readValueFromPointer: gc,
              Ja: d,
            },
          ];
        });
      },
      B: function () {},
      U: function (a, b, c, d, e) {
        var f = rc(c);
        b = T(b);
        qc(a, {
          name: b,
          fromWireType: function (h) {
            return !!h;
          },
          toWireType: function (h, l) {
            return l ? d : e;
          },
          argPackAdvance: 8,
          readValueFromPointer: function (h) {
            if (1 === c) var l = C;
            else if (2 === c) l = ta;
            else if (4 === c) l = E;
            else throw new TypeError("Unknown boolean type size: " + b);
            return this.fromWireType(l[h >> f]);
          },
          Ja: null,
        });
      },
      z: function (a, b, c, d, e, f, h, l, m, n, r, p, q) {
        r = T(r);
        f = W(e, f);
        l && (l = W(h, l));
        n && (n = W(m, n));
        q = W(p, q);
        var k = kc(r);
        Jc(k, function () {
          Zc("Cannot construct " + r + " due to unbound types", [d]);
        });
        pc([a, b, c], d ? [d] : [], function (t) {
          t = t[0];
          if (d) {
            var x = t.xa;
            var z = x.Wa;
          } else z = Hc.prototype;
          t = lc(k, function () {
            if (Object.getPrototypeOf(this) !== F)
              throw new tc("Use 'new' to construct " + r);
            if (void 0 === G.Pa)
              throw new tc(r + " has no accessible constructor");
            var M = G.Pa[arguments.length];
            if (void 0 === M)
              throw new tc(
                "Tried to invoke ctor of " +
                  r +
                  " with invalid number of parameters (" +
                  arguments.length +
                  ") - expected (" +
                  Object.keys(G.Pa).toString() +
                  ") parameters instead!",
              );
            return M.apply(this, arguments);
          });
          var F = Object.create(z, { constructor: { value: t } });
          t.prototype = F;
          var G = new Kc(r, t, F, q, x, f, l, n);
          x = new Rc(r, G, !0, !1);
          z = new Rc(r + "*", G, !1, !1);
          var y = new Rc(r + " const*", G, !1, !0);
          zc[a] = { pointerType: z, dc: y };
          Sc(k, t);
          return [x, z, y];
        });
      },
      ca: function (a, b, c, d, e, f) {
        0 < b || ma();
        var h = $c(b, c);
        e = W(d, e);
        pc([], [a], function (l) {
          l = l[0];
          var m = "constructor " + l.name;
          void 0 === l.xa.Pa && (l.xa.Pa = []);
          if (void 0 !== l.xa.Pa[b - 1])
            throw new tc(
              "Cannot register multiple constructors with identical number of parameters (" +
                (b - 1) +
                ") for class '" +
                l.name +
                "'! Overload resolution is currently only performed using the parameter count, not actual type info!",
            );
          l.xa.Pa[b - 1] = () => {
            Zc("Cannot construct " + l.name + " due to unbound types", h);
          };
          pc([], h, function (n) {
            n.splice(1, 0, null);
            l.xa.Pa[b - 1] = ad(m, n, null, e, f);
            return [];
          });
          return [];
        });
      },
      i: function (a, b, c, d, e, f, h, l) {
        var m = $c(c, d);
        b = T(b);
        f = W(e, f);
        pc([], [a], function (n) {
          function r() {
            Zc("Cannot call " + p + " due to unbound types", m);
          }
          n = n[0];
          var p = n.name + "." + b;
          b.startsWith("@@") && (b = Symbol[b.substring(2)]);
          l && n.xa.xc.push(b);
          var q = n.xa.Wa,
            k = q[b];
          void 0 === k ||
          (void 0 === k.Ca && k.className !== n.name && k.gb === c - 2)
            ? ((r.gb = c - 2), (r.className = n.name), (q[b] = r))
            : (Ic(q, b, p), (q[b].Ca[c - 2] = r));
          pc([], m, function (t) {
            t = ad(p, t, n, f, h);
            void 0 === q[b].Ca
              ? ((t.gb = c - 2), (q[b] = t))
              : (q[b].Ca[c - 2] = t);
            return [];
          });
          return [];
        });
      },
      T: function (a, b) {
        b = T(b);
        qc(a, {
          name: b,
          fromWireType: function (c) {
            var d = dd(c);
            cd(c);
            return d;
          },
          toWireType: function (c, d) {
            return Pc(d);
          },
          argPackAdvance: 8,
          readValueFromPointer: gc,
          Ja: null,
        });
      },
      u: function (a, b, c) {
        c = rc(c);
        b = T(b);
        qc(a, {
          name: b,
          fromWireType: function (d) {
            return d;
          },
          toWireType: function (d, e) {
            return e;
          },
          argPackAdvance: 8,
          readValueFromPointer: ed(b, c),
          Ja: null,
        });
      },
      o: function (a, b, c, d, e, f) {
        var h = $c(b, c);
        a = T(a);
        e = W(d, e);
        Jc(
          a,
          function () {
            Zc("Cannot call " + a + " due to unbound types", h);
          },
          b - 1,
        );
        pc([], h, function (l) {
          Sc(a, ad(a, [l[0], null].concat(l.slice(1)), null, e, f), b - 1);
          return [];
        });
      },
      f: function (a, b, c, d, e) {
        b = T(b);
        -1 === e && (e = 4294967295);
        e = rc(c);
        var f = (l) => l;
        if (0 === d) {
          var h = 32 - 8 * c;
          f = (l) => (l << h) >>> h;
        }
        c = b.includes("unsigned")
          ? function (l, m) {
              return m >>> 0;
            }
          : function (l, m) {
              return m;
            };
        qc(a, {
          name: b,
          fromWireType: f,
          toWireType: c,
          argPackAdvance: 8,
          readValueFromPointer: fd(b, e, 0 !== d),
          Ja: null,
        });
      },
      d: function (a, b, c) {
        function d(f) {
          f >>= 2;
          var h = I;
          return new e(h.buffer, h[f + 1], h[f]);
        }
        var e = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
        ][b];
        c = T(c);
        qc(
          a,
          {
            name: c,
            fromWireType: d,
            argPackAdvance: 8,
            readValueFromPointer: d,
          },
          { pc: !0 },
        );
      },
      v: function (a, b) {
        b = T(b);
        var c = "std::string" === b;
        qc(a, {
          name: b,
          fromWireType: function (d) {
            var e = I[d >> 2],
              f = d + 4;
            if (c)
              for (var h = f, l = 0; l <= e; ++l) {
                var m = f + l;
                if (l == e || 0 == w[m]) {
                  h = v(h, m - h);
                  if (void 0 === n) var n = h;
                  else (n += String.fromCharCode(0)), (n += h);
                  h = m + 1;
                }
              }
            else {
              n = Array(e);
              for (l = 0; l < e; ++l) n[l] = String.fromCharCode(w[f + l]);
              n = n.join("");
            }
            X(d);
            return n;
          },
          toWireType: function (d, e) {
            e instanceof ArrayBuffer && (e = new Uint8Array(e));
            var f = "string" == typeof e;
            f ||
              e instanceof Uint8Array ||
              e instanceof Uint8ClampedArray ||
              e instanceof Int8Array ||
              U("Cannot pass non-string to std::string");
            var h = c && f ? sa(e) : e.length;
            var l = Dd(4 + h + 1),
              m = l + 4;
            I[l >> 2] = h;
            if (c && f) A(e, w, m, h + 1);
            else if (f)
              for (f = 0; f < h; ++f) {
                var n = e.charCodeAt(f);
                255 < n &&
                  (X(m),
                  U("String has UTF-16 code units that do not fit in 8 bits"));
                w[m + f] = n;
              }
            else for (f = 0; f < h; ++f) w[m + f] = e[f];
            null !== d && d.push(X, l);
            return l;
          },
          argPackAdvance: 8,
          readValueFromPointer: gc,
          Ja: function (d) {
            X(d);
          },
        });
      },
      n: function (a, b, c) {
        c = T(c);
        if (2 === b) {
          var d = hd;
          var e = jd;
          var f = kd;
          var h = () => D;
          var l = 1;
        } else
          4 === b && ((d = ld), (e = md), (f = nd), (h = () => I), (l = 2));
        qc(a, {
          name: c,
          fromWireType: function (m) {
            for (var n = I[m >> 2], r = h(), p, q = m + 4, k = 0; k <= n; ++k) {
              var t = m + 4 + k * b;
              if (k == n || 0 == r[t >> l])
                (q = d(q, t - q)),
                  void 0 === p
                    ? (p = q)
                    : ((p += String.fromCharCode(0)), (p += q)),
                  (q = t + b);
            }
            X(m);
            return p;
          },
          toWireType: function (m, n) {
            "string" != typeof n &&
              U("Cannot pass non-string to C++ string type " + c);
            var r = f(n),
              p = Dd(4 + r + b);
            I[p >> 2] = r >> l;
            e(n, p + 4, r + b);
            null !== m && m.push(X, p);
            return p;
          },
          argPackAdvance: 8,
          readValueFromPointer: gc,
          Ja: function (m) {
            X(m);
          },
        });
      },
      g: function (a, b, c, d, e, f) {
        ec[a] = { name: T(b), Ab: W(c, d), Oa: W(e, f), Mb: [] };
      },
      b: function (a, b, c, d, e, f, h, l, m, n) {
        ec[a].Mb.push({
          jc: T(b),
          nc: c,
          kb: W(d, e),
          mc: f,
          Dc: h,
          Cc: W(l, m),
          Ec: n,
        });
      },
      V: function (a, b) {
        b = T(b);
        qc(a, {
          sc: !0,
          name: b,
          argPackAdvance: 0,
          fromWireType: function () {},
          toWireType: function () {},
        });
      },
      W: function (a) {
        var b = Fd[a];
        b && (delete Fd[a], 0 < b.readyState && 4 > b.readyState && b.abort());
      },
      O: function () {
        return !0;
      },
      l: function (a, b, c) {
        a = dd(a);
        b = od(b, "emval::as");
        var d = [],
          e = Pc(d);
        I[c >> 2] = e;
        return b.toWireType(d, a);
      },
      ba: function (a, b, c, d) {
        a = rd[a];
        b = dd(b);
        c = qd(c);
        a(b, c, null, d);
      },
      c: cd,
      q: function (a) {
        if (0 === a) return Pc(sd());
        a = qd(a);
        return Pc(sd()[a]);
      },
      aa: function (a, b) {
        var c = ud(a, b),
          d = c[0];
        b =
          d.name +
          "_$" +
          c
            .slice(1)
            .map(function (h) {
              return h.name;
            })
            .join("_") +
          "$";
        var e = vd[b];
        if (void 0 !== e) return e;
        var f = Array(a - 1);
        e = td((h, l, m, n) => {
          for (var r = 0, p = 0; p < a - 1; ++p)
            (f[p] = c[p + 1].readValueFromPointer(n + r)),
              (r += c[p + 1].argPackAdvance);
          h = h[l].apply(h, f);
          for (p = 0; p < a - 1; ++p) c[p + 1].fc && c[p + 1].fc(f[p]);
          if (!d.sc) return d.toWireType(m, h);
        });
        return (vd[b] = e);
      },
      x: function (a, b) {
        a = dd(a);
        b = dd(b);
        return Pc(a[b]);
      },
      j: function (a) {
        4 < a && (Y[a].Cb += 1);
      },
      p: function (a, b, c, d) {
        a = dd(a);
        var e = xd[b];
        e || ((e = wd(b)), (xd[b] = e));
        return e(a, c, d);
      },
      w: function (a) {
        return Pc(qd(a));
      },
      k: function (a) {
        var b = dd(a);
        fc(b);
        cd(a);
      },
      h: function (a, b) {
        a = od(a, "_emval_take_value");
        a = a.readValueFromPointer(b);
        return Pc(a);
      },
      Q: function (a, b) {
        a = new Date(1e3 * (I[a >> 2] + 4294967296 * E[(a + 4) >> 2]));
        E[b >> 2] = a.getSeconds();
        E[(b + 4) >> 2] = a.getMinutes();
        E[(b + 8) >> 2] = a.getHours();
        E[(b + 12) >> 2] = a.getDate();
        E[(b + 16) >> 2] = a.getMonth();
        E[(b + 20) >> 2] = a.getFullYear() - 1900;
        E[(b + 24) >> 2] = a.getDay();
        E[(b + 28) >> 2] = Bd(a) | 0;
        E[(b + 36) >> 2] = -(60 * a.getTimezoneOffset());
        var c = new Date(a.getFullYear(), 6, 1).getTimezoneOffset(),
          d = new Date(a.getFullYear(), 0, 1).getTimezoneOffset();
        E[(b + 32) >> 2] =
          (c != d && a.getTimezoneOffset() == Math.min(d, c)) | 0;
      },
      R: function (a) {
        var b = new Date(
            E[(a + 20) >> 2] + 1900,
            E[(a + 16) >> 2],
            E[(a + 12) >> 2],
            E[(a + 8) >> 2],
            E[(a + 4) >> 2],
            E[a >> 2],
            0,
          ),
          c = E[(a + 32) >> 2],
          d = b.getTimezoneOffset(),
          e = new Date(b.getFullYear(), 6, 1).getTimezoneOffset(),
          f = new Date(b.getFullYear(), 0, 1).getTimezoneOffset(),
          h = Math.min(f, e);
        0 > c
          ? (E[(a + 32) >> 2] = Number(e != f && h == d))
          : 0 < c != (h == d) &&
            ((e = Math.max(f, e)),
            b.setTime(b.getTime() + 6e4 * ((0 < c ? h : e) - d)));
        E[(a + 24) >> 2] = b.getDay();
        E[(a + 28) >> 2] = Bd(b) | 0;
        E[a >> 2] = b.getSeconds();
        E[(a + 4) >> 2] = b.getMinutes();
        E[(a + 8) >> 2] = b.getHours();
        E[(a + 12) >> 2] = b.getDate();
        E[(a + 16) >> 2] = b.getMonth();
        E[(a + 20) >> 2] = b.getYear();
        return (b.getTime() / 1e3) | 0;
      },
      F: function (a, b, c, d, e, f, h) {
        try {
          var l = bc(d);
          if (0 !== (b & 2) && 0 === (c & 2) && 2 !== (l.flags & 2097155))
            throw new N(2);
          if (1 === (l.flags & 2097155)) throw new N(2);
          if (!l.wa.$a) throw new N(43);
          var m = l.wa.$a(l, a, e, b, c);
          var n = m.ya;
          E[f >> 2] = m.Gb;
          I[h >> 2] = n;
          return 0;
        } catch (r) {
          if ("undefined" == typeof S || "ErrnoError" !== r.name) throw r;
          return -r.Ga;
        }
      },
      G: function (a, b, c, d, e, f) {
        try {
          var h = bc(e);
          if (c & 2) {
            if (32768 !== (h.node.mode & 61440)) throw new N(43);
            d & 2 || (h.wa.ob && h.wa.ob(h, w.slice(a, a + b), f, b, d));
          }
        } catch (l) {
          if ("undefined" == typeof S || "ErrnoError" !== l.name) throw l;
          return -l.Ga;
        }
      },
      S: function (a, b, c) {
        function d(m) {
          return (m = m.toTimeString().match(/\(([A-Za-z ]+)\)$/))
            ? m[1]
            : "GMT";
        }
        var e = new Date().getFullYear(),
          f = new Date(e, 0, 1),
          h = new Date(e, 6, 1);
        e = f.getTimezoneOffset();
        var l = h.getTimezoneOffset();
        I[a >> 2] = 60 * Math.max(e, l);
        E[b >> 2] = Number(e != l);
        a = d(f);
        b = d(h);
        a = Cd(a);
        b = Cd(b);
        l < e
          ? ((I[c >> 2] = a), (I[(c + 4) >> 2] = b))
          : ((I[c >> 2] = b), (I[(c + 4) >> 2] = a));
      },
      a: function () {
        ma("");
      },
      y: function (a, b, c) {
        Ed.length = 0;
        var d;
        for (c >>= 2; (d = w[b++]); )
          (c += (105 != d) & c), Ed.push(105 == d ? E[c] : va[c++ >> 1]), ++c;
        return Ta[a].apply(null, Ed);
      },
      P: function () {
        return Date.now();
      },
      m: () => performance.now(),
      Y: function () {
        return !1;
      },
      N: function (a, b, c) {
        w.copyWithin(a, b, b + c);
      },
      E: function (a) {
        var b = w.length;
        a >>>= 0;
        if (2147483648 < a) return !1;
        for (var c = 1; 4 >= c; c *= 2) {
          var d = Math,
            e = d.min;
          var f = Math.max(a, b + 2097152 / c);
          f += (65536 - (f % 65536)) % 65536;
          a: {
            var h = na.buffer;
            try {
              na.grow((e.call(d, 2147483648, f) - h.byteLength + 65535) >>> 16);
              wa();
              var l = 1;
              break a;
            } catch (m) {}
            l = void 0;
          }
          if (l) return !0;
        }
        return !1;
      },
      X: function (a, b, c, d, e) {
        function f(H) {
          if (z) H();
          else if (!Ca && !oa)
            try {
              if ((H(), !(noExitRuntime || 0 < Da)))
                try {
                  Jd(pa);
                } catch (Qa) {
                  Id(Qa);
                }
            } catch (Qa) {
              Id(Qa);
            }
        }
        Da += 1;
        var h = a + 112,
          l = v(h),
          m = I[(h + 36) >> 2],
          n = I[(h + 40) >> 2],
          r = I[(h + 44) >> 2],
          p = I[(h + 48) >> 2],
          q = I[(h + 52) >> 2],
          k = !!(q & 4),
          t = !!(q & 32),
          x = !!(q & 16),
          z = !!(q & 64),
          F = (H) => {
            --Da;
            f(() => {
              m ? Uc(m)(H) : b && b(H);
            });
          },
          G = (H) => {
            f(() => {
              r ? Uc(r)(H) : d && d(H);
            });
          },
          y = (H) => {
            --Da;
            f(() => {
              n ? Uc(n)(H) : c && c(H);
            });
          },
          M = (H) => {
            f(() => {
              p ? Uc(p)(H) : e && e(H);
            });
          };
        q = (H) => {
          Hd(H, F, y, G, M);
        };
        var B = (H, Qa) => {
            Md(
              H,
              Qa.response,
              (Ra) => {
                --Da;
                f(() => {
                  m ? Uc(m)(Ra) : b && b(Ra);
                });
              },
              (Ra) => {
                --Da;
                f(() => {
                  m ? Uc(m)(Ra) : b && b(Ra);
                });
              },
            );
          },
          V = (H) => {
            Hd(H, B, y, G, M);
          };
        if ("EM_IDB_STORE" === l)
          (l = I[(h + 84) >> 2]), Md(a, w.slice(l, l + I[(h + 88) >> 2]), F, y);
        else if ("EM_IDB_DELETE" === l) Od(a, F, y);
        else if (x) {
          if (t) return 0;
          Hd(a, k ? B : F, y, G, M);
        } else Nd(a, F, t ? y : k ? V : q);
        return a;
      },
      H: function (a, b) {
        var c = 0;
        Qd().forEach(function (d, e) {
          var f = b + c;
          e = I[(a + 4 * e) >> 2] = f;
          for (f = 0; f < d.length; ++f) C[e++ >> 0] = d.charCodeAt(f);
          C[e >> 0] = 0;
          c += d.length + 1;
        });
        return 0;
      },
      I: function (a, b) {
        var c = Qd();
        I[a >> 2] = c.length;
        var d = 0;
        c.forEach(function (e) {
          d += e.length + 1;
        });
        I[b >> 2] = d;
        return 0;
      },
      $: Jd,
      t: function (a) {
        try {
          var b = bc(a);
          Ob(b);
          return 0;
        } catch (c) {
          if ("undefined" == typeof S || "ErrnoError" !== c.name) throw c;
          return c.Ga;
        }
      },
      s: function (a, b, c, d) {
        try {
          a: {
            var e = bc(a);
            a = b;
            for (var f, h = (b = 0); h < c; h++) {
              var l = I[a >> 2],
                m = I[(a + 4) >> 2];
              a += 8;
              var n = e,
                r = l,
                p = m,
                q = f,
                k = C;
              if (0 > p || 0 > q) throw new N(28);
              if (null === n.Qa) throw new N(8);
              if (1 === (n.flags & 2097155)) throw new N(8);
              if (16384 === (n.node.mode & 61440)) throw new N(31);
              if (!n.wa.read) throw new N(28);
              var t = "undefined" != typeof q;
              if (!t) q = n.position;
              else if (!n.seekable) throw new N(70);
              var x = n.wa.read(n, k, r, p, q);
              t || (n.position += x);
              var z = x;
              if (0 > z) {
                var F = -1;
                break a;
              }
              b += z;
              if (z < m) break;
              "undefined" !== typeof f && (f += z);
            }
            F = b;
          }
          I[d >> 2] = F;
          return 0;
        } catch (G) {
          if ("undefined" == typeof S || "ErrnoError" !== G.name) throw G;
          return G.Ga;
        }
      },
      A: function (a, b, c, d, e) {
        try {
          b =
            (c + 2097152) >>> 0 < 4194305 - !!b
              ? (b >>> 0) + 4294967296 * c
              : NaN;
          if (isNaN(b)) return 61;
          var f = bc(a);
          Pb(f, b, d);
          K = [
            f.position >>> 0,
            ((J = f.position),
            1 <= +Math.abs(J)
              ? 0 < J
                ? (Math.min(+Math.floor(J / 4294967296), 4294967295) | 0) >>> 0
                : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
              : 0),
          ];
          E[e >> 2] = K[0];
          E[(e + 4) >> 2] = K[1];
          f.vb && 0 === b && 0 === d && (f.vb = null);
          return 0;
        } catch (h) {
          if ("undefined" == typeof S || "ErrnoError" !== h.name) throw h;
          return h.Ga;
        }
      },
      r: function (a, b, c, d) {
        try {
          a: {
            var e = bc(a);
            a = b;
            for (var f, h = (b = 0); h < c; h++) {
              var l = I[a >> 2],
                m = I[(a + 4) >> 2];
              a += 8;
              var n = Qb(e, C, l, m, f);
              if (0 > n) {
                var r = -1;
                break a;
              }
              b += n;
              "undefined" !== typeof f && (f += n);
            }
            r = b;
          }
          I[d >> 2] = r;
          return 0;
        } catch (p) {
          if ("undefined" == typeof S || "ErrnoError" !== p.name) throw p;
          return p.Ga;
        }
      },
      Z: function () {
        var a = stackTrace(),
          b = sa(a) + 1,
          c = Dd(b);
        A(a, w, c, b);
        return c;
      },
      C: Sd,
      _: Vd,
      D: function (a, b, c, d) {
        return Vd(a, b, c, d);
      },
    };
    (function () {
      function a(c) {
        c = c.exports;
        g.asm = c;
        na = g.asm.da;
        wa();
        xa = g.asm.ha;
        za.unshift(g.asm.ea);
        Ja("wasm-instantiate");
        return c;
      }
      var b = { a: Yd };
      Ia("wasm-instantiate");
      if (g.instantiateWasm)
        try {
          return g.instantiateWasm(b, a);
        } catch (c) {
          u("Module.instantiateWasm callback failed with error: " + c), ba(c);
        }
      Sa(b, function (c) {
        a(c.instance);
      }).catch(ba);
      return {};
    })();
    function X() {
      return (X = g.asm.fa).apply(null, arguments);
    }
    function Dd() {
      return (Dd = g.asm.ga).apply(null, arguments);
    }
    var Ld = (g._fflush = function () {
        return (Ld = g._fflush = g.asm.ia).apply(null, arguments);
      }),
      Yc = (g.___getTypeName = function () {
        return (Yc = g.___getTypeName = g.asm.ja).apply(null, arguments);
      });
    g.__embind_initialize_bindings = function () {
      return (g.__embind_initialize_bindings = g.asm.ka).apply(null, arguments);
    };
    function Kd() {
      return (Kd = g.asm.la).apply(null, arguments);
    }
    function ib() {
      return (ib = g.asm.ma).apply(null, arguments);
    }
    g.dynCall_ji = function () {
      return (g.dynCall_ji = g.asm.na).apply(null, arguments);
    };
    g.dynCall_jiji = function () {
      return (g.dynCall_jiji = g.asm.oa).apply(null, arguments);
    };
    g.dynCall_viijii = function () {
      return (g.dynCall_viijii = g.asm.pa).apply(null, arguments);
    };
    g.dynCall_iiiiij = function () {
      return (g.dynCall_iiiiij = g.asm.qa).apply(null, arguments);
    };
    g.dynCall_iiiiijj = function () {
      return (g.dynCall_iiiiijj = g.asm.ra).apply(null, arguments);
    };
    g.dynCall_iiiiiijj = function () {
      return (g.dynCall_iiiiiijj = g.asm.sa).apply(null, arguments);
    };
    g.__ZN2MB2NN28LinearDefragmentingAllocator10Allocation4nullE = 1024;
    g.___start_em_js = 60042;
    g.___stop_em_js = 60465;
    g.addRunDependency = Ia;
    g.removeRunDependency = Ja;
    g.FS_createPath = Ub;
    g.FS_createDataFile = Wb;
    g.FS_createPreloadedFile = $b;
    g.FS_createLazyFile = Yb;
    g.FS_createDevice = R;
    g.FS_unlink = Ib;
    var Zd;
    Ha = function $d() {
      Zd || ae();
      Zd || (Ha = $d);
    };
    function ae() {
      function a() {
        if (!Zd && ((Zd = !0), (g.calledRun = !0), !oa)) {
          g.noFSInit ||
            Sb ||
            ((Sb = !0),
            Rb(),
            (g.stdin = g.stdin),
            (g.stdout = g.stdout),
            (g.stderr = g.stderr),
            g.stdin
              ? R("/dev", "stdin", g.stdin)
              : Hb("/dev/tty", "/dev/stdin"),
            g.stdout
              ? R("/dev", "stdout", null, g.stdout)
              : Hb("/dev/tty", "/dev/stdout"),
            g.stderr
              ? R("/dev", "stderr", null, g.stderr)
              : Hb("/dev/tty1", "/dev/stderr"),
            Nb("/dev/stdin", 0),
            Nb("/dev/stdout", 1),
            Nb("/dev/stderr", 1));
          tb = !1;
          Va(za);
          aa(g);
          if (g.onRuntimeInitialized) g.onRuntimeInitialized();
          if (g.postRun)
            for (
              "function" == typeof g.postRun && (g.postRun = [g.postRun]);
              g.postRun.length;

            ) {
              var b = g.postRun.shift();
              Ba.unshift(b);
            }
          Va(Ba);
        }
      }
      if (!(0 < Fa)) {
        if (g.preRun)
          for (
            "function" == typeof g.preRun && (g.preRun = [g.preRun]);
            g.preRun.length;

          )
            Ea();
        Va(ya);
        0 < Fa ||
          (g.setStatus
            ? (g.setStatus("Running..."),
              setTimeout(function () {
                setTimeout(function () {
                  g.setStatus("");
                }, 1);
                a();
              }, 1))
            : a());
      }
    }
    if (g.preInit)
      for (
        "function" == typeof g.preInit && (g.preInit = [g.preInit]);
        0 < g.preInit.length;

      )
        g.preInit.pop()();
    ae();
    if (
      "object" == typeof window &&
      ("undefined" == typeof ENVIRONMENT_IS_PTHREAD || !ENVIRONMENT_IS_PTHREAD)
    ) {
      var be = () => {
        var a = 0,
          b = !1,
          c = (m) => {
            var n = new XMLHttpRequest();
            n.open("POST", "stdio.html", !1);
            n.send(m);
            try {
              window.close();
            } catch (r) {}
          },
          d = (m) => {
            var n = new XMLHttpRequest();
            ++a;
            n.onreadystatechange = () => {
              4 == n.readyState && 0 == --a && b && c("^exit^" + pa);
            };
            n.open("POST", "stdio.html", !0);
            n.send(m);
          };
        if (
          -1 != document.URL.search("localhost") ||
          -1 != document.URL.search(":6931/")
        ) {
          var e = 1,
            f = ka,
            h = u;
          Aa.unshift(() => {
            0 == a ? c("^exit^" + pa) : (b = !0);
          });
          ka = (m) => {
            d("^out^" + e++ + "^" + encodeURIComponent(m));
            f(m);
          };
          u = (m) => {
            d("^err^" + e++ + "^" + encodeURIComponent(m));
            h(m);
          };
          var l = () => {
            try {
              d("^pageload^");
            } catch (m) {
              setTimeout(l, 50);
            }
          };
          l();
        }
      };
      "undefined" != typeof document && be();
    }

    return createModule.ready;
  };
})();
if (typeof exports === "object" && typeof module === "object")
  module.exports = createModule;
else if (typeof define === "function" && define["amd"])
  define([], function () {
    return createModule;
  });
else if (typeof exports === "object") exports["createModule"] = createModule;
