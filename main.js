
var a;a||(a=typeof Module !== 'undefined' ? Module : {});var p={},r;for(r in a)a.hasOwnProperty(r)&&(p[r]=a[r]);function aa(b,c){throw c;}var t="";document.currentScript&&(t=document.currentScript.src);t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"";var u=a.printErr||console.warn.bind(console);for(r in p)p.hasOwnProperty(r)&&(a[r]=p[r]);p=null;a.quit&&(aa=a.quit);function ba(b){v||(v={});v[b]||(v[b]=1,u(b))}var v,w;a.wasmBinary&&(w=a.wasmBinary);var noExitRuntime;
a.noExitRuntime&&(noExitRuntime=a.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var y,z,A=!1;function ca(b,c){b||x("Assertion failed: "+c)}"undefined"!==typeof TextDecoder&&new TextDecoder("utf8");var C,da,ea,fa=a.INITIAL_MEMORY||16777216;a.wasmMemory?y=a.wasmMemory:y=new WebAssembly.Memory({initial:fa/65536,maximum:32768});y&&(C=y.buffer);fa=C.byteLength;var D=C;C=D;a.HEAP8=new Int8Array(D);a.HEAP16=new Int16Array(D);a.HEAP32=da=new Int32Array(D);a.HEAPU8=new Uint8Array(D);
a.HEAPU16=new Uint16Array(D);a.HEAPU32=ea=new Uint32Array(D);a.HEAPF32=new Float32Array(D);a.HEAPF64=new Float64Array(D);var ha=[],ia=[],ka=[],la=[];function ma(){var b=a.preRun.shift();ha.unshift(b)}var E=0,na=null,F=null;a.preloadedImages={};a.preloadedAudios={};function x(b){if(a.onAbort)a.onAbort(b);u(b);A=!0;throw new WebAssembly.RuntimeError("abort("+b+"). Build with -s ASSERTIONS=1 for more info.");}
function oa(){var b=G;return String.prototype.startsWith?b.startsWith("data:application/octet-stream;base64,"):0===b.indexOf("data:application/octet-stream;base64,")}var G="main.wasm";if(!oa()){var pa=G;G=a.locateFile?a.locateFile(pa,t):t+pa}function qa(){try{if(w)return new Uint8Array(w);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function ra(){return w||"function"!==typeof fetch?Promise.resolve().then(qa):fetch(G,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+G+"'";return b.arrayBuffer()}).catch(function(){return qa()})}function H(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c(a);else{var d=c.o;"number"===typeof d?void 0===c.l?z.get(d)():z.get(d)(c.l):d(void 0===c.l?null:c.l)}}}var I=null,J=0,K=null,sa=0,L=0,N=0,ta=0,ua=[],va={},O,wa,P,Q=!1,xa=!1,ya=[];
function za(){function b(){xa=document.pointerLockElement===a.canvas||document.mozPointerLockElement===a.canvas||document.webkitPointerLockElement===a.canvas||document.msPointerLockElement===a.canvas}a.preloadPlugins||(a.preloadPlugins=[]);if(!Aa){Aa=!0;try{R=!0}catch(d){R=!1,console.log("warning: no blob constructor, cannot create blobs with mimetypes")}Ba="undefined"!=typeof MozBlobBuilder?MozBlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:R?null:console.log("warning: no BlobBuilder");
S="undefined"!=typeof window?window.URL?window.URL:window.webkitURL:void 0;a.u||"undefined"!==typeof S||(console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."),a.u=!0);a.preloadPlugins.push({canHandle:function(d){return!a.u&&/\.(jpg|jpeg|png|bmp)$/i.test(d)},handle:function(d,e,f,g){var k=null;if(R)try{k=new Blob([d],{type:Ca(e)}),k.size!==d.length&&(k=new Blob([(new Uint8Array(d)).buffer],{type:Ca(e)}))}catch(n){ba("Blob constructor present but fails: "+
n+"; falling back to blob builder")}k||(k=new Ba,k.append((new Uint8Array(d)).buffer),k=k.getBlob());var l=S.createObjectURL(k),h=new Image;h.onload=function(){ca(h.complete,"Image "+e+" could not be decoded");var n=document.createElement("canvas");n.width=h.width;n.height=h.height;n.getContext("2d").drawImage(h,0,0);a.preloadedImages[e]=n;S.revokeObjectURL(l);f&&f(d)};h.onerror=function(){console.log("Image "+l+" could not be decoded");g&&g()};h.src=l}});a.preloadPlugins.push({canHandle:function(d){return!a.L&&
d.substr(-4)in{".ogg":1,".wav":1,".mp3":1}},handle:function(d,e,f,g){function k(q){h||(h=!0,a.preloadedAudios[e]=q,f&&f(d))}function l(){h||(h=!0,a.preloadedAudios[e]=new Audio,g&&g())}var h=!1;if(R){try{var n=new Blob([d],{type:Ca(e)})}catch(q){return l()}n=S.createObjectURL(n);var m=new Audio;m.addEventListener("canplaythrough",function(){k(m)},!1);m.onerror=function(){if(!h){console.log("warning: browser could not fully decode audio "+e+", trying slower base64 approach");for(var q="",M=0,B=0,ja=
0;ja<d.length;ja++)for(M=M<<8|d[ja],B+=8;6<=B;){var Pa=M>>B-6&63;B-=6;q+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[Pa]}2==B?(q+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(M&3)<<4],q+="=="):4==B&&(q+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(M&15)<<2],q+="=");m.src="data:audio/x-"+e.substr(-3)+";base64,"+q;k(m)}};m.src=n;Da(function(){k(m)})}else return l()}});var c=a.canvas;c&&(c.requestPointerLock=c.requestPointerLock||c.mozRequestPointerLock||
c.webkitRequestPointerLock||c.msRequestPointerLock||function(){},c.exitPointerLock=document.exitPointerLock||document.mozExitPointerLock||document.webkitExitPointerLock||document.msExitPointerLock||function(){},c.exitPointerLock=c.exitPointerLock.bind(document),document.addEventListener("pointerlockchange",b,!1),document.addEventListener("mozpointerlockchange",b,!1),document.addEventListener("webkitpointerlockchange",b,!1),document.addEventListener("mspointerlockchange",b,!1),a.elementPointerLock&&
c.addEventListener("click",function(d){!xa&&a.canvas.requestPointerLock&&(a.canvas.requestPointerLock(),d.preventDefault())},!1))}}
function Ea(b,c,d,e){if(c&&a.m&&b==a.canvas)return a.m;var f;if(c){var g={antialias:!1,alpha:!1,s:1};if(e)for(var k in e)g[k]=e[k];if("undefined"!==typeof Fa&&(f=Ga(b,g)))var l=T[f].j}else l=b.getContext("2d");if(!l)return null;d&&(c||ca("undefined"===typeof U,"cannot set in module if GLctx is used, but we are a non-GL context that would replace it"),a.m=l,c&&(V=T[f],a.m=U=V&&V.j),a.M=c,ya.forEach(function(h){h()}),za());return l}var Ha=!1,W=void 0,X=void 0;
function Ia(b,c){function d(){Q=!1;var g=e.parentNode;(document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===g?(e.exitFullscreen=Ja,W&&e.requestPointerLock(),Q=!0,X?("undefined"!=typeof SDL&&(da[SDL.screen>>2]=ea[SDL.screen>>2]|8388608),Y(a.canvas),Ka()):Y(e)):(g.parentNode.insertBefore(e,g),g.parentNode.removeChild(g),X?("undefined"!=typeof SDL&&(da[SDL.screen>>2]=ea[SDL.screen>>2]&-8388609),
Y(a.canvas),Ka()):Y(e));if(a.onFullScreen)a.onFullScreen(Q);if(a.onFullscreen)a.onFullscreen(Q)}W=b;X=c;"undefined"===typeof W&&(W=!0);"undefined"===typeof X&&(X=!1);var e=a.canvas;Ha||(Ha=!0,document.addEventListener("fullscreenchange",d,!1),document.addEventListener("mozfullscreenchange",d,!1),document.addEventListener("webkitfullscreenchange",d,!1),document.addEventListener("MSFullscreenChange",d,!1));var f=document.createElement("div");e.parentNode.insertBefore(f,e);f.appendChild(e);f.requestFullscreen=
f.requestFullscreen||f.mozRequestFullScreen||f.msRequestFullscreen||(f.webkitRequestFullscreen?function(){f.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}:null)||(f.webkitRequestFullScreen?function(){f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)}:null);f.requestFullscreen()}
function Ja(){if(!Q)return!1;(document.exitFullscreen||document.cancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.webkitCancelFullScreen||function(){}).apply(document,[]);return!0}var Z=0;function La(b){if("function"===typeof requestAnimationFrame)requestAnimationFrame(b);else{var c=Date.now();if(0===Z)Z=c+1E3/60;else for(;c+2>=Z;)Z+=1E3/60;setTimeout(b,Math.max(Z-c,0))}}function Da(b){noExitRuntime=!0;setTimeout(function(){A||b()},1E4)}
function Ca(b){return{jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",bmp:"image/bmp",ogg:"audio/ogg",wav:"audio/wav",mp3:"audio/mpeg"}[b.substr(b.lastIndexOf(".")+1)]}var Ma=[];function Ka(){var b=a.canvas;Ma.forEach(function(c){c(b.width,b.height)})}
function Y(b,c,d){c&&d?(b.D=c,b.A=d):(c=b.D,d=b.A);var e=c,f=d;a.forcedAspectRatio&&0<a.forcedAspectRatio&&(e/f<a.forcedAspectRatio?e=Math.round(f*a.forcedAspectRatio):f=Math.round(e/a.forcedAspectRatio));if((document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitFullscreenElement||document.webkitCurrentFullScreenElement)===b.parentNode&&"undefined"!=typeof screen){var g=Math.min(screen.width/e,screen.height/f);e=Math.round(e*g);f=Math.round(f*g)}X?
(b.width!=e&&(b.width=e),b.height!=f&&(b.height=f),"undefined"!=typeof b.style&&(b.style.removeProperty("width"),b.style.removeProperty("height"))):(b.width!=c&&(b.width=c),b.height!=d&&(b.height=d),"undefined"!=typeof b.style&&(e!=c||f!=d?(b.style.setProperty("width",e+"px","important"),b.style.setProperty("height",f+"px","important")):(b.style.removeProperty("width"),b.style.removeProperty("height"))))}var Aa,R,Ba,S;
function Na(b,c){L=b;N=c;if(K)if(0==b)I=function(){var e=Math.max(0,wa+c-Oa())|0;setTimeout(P,e)};else if(1==b)I=function(){La(P)};else if(2==b){if("undefined"===typeof setImmediate){var d=[];addEventListener("message",function(e){if("setimmediate"===e.data||"setimmediate"===e.data.target)e.stopPropagation(),d.shift()()},!0);setImmediate=function(e){d.push(e);postMessage("setimmediate","*")}}I=function(){setImmediate(P)}}}var Oa;Oa=function(){return performance.now()};
function Qa(b,c,d,e,f){noExitRuntime=!0;ca(!K,"emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");K=b;sa=e;var g=J;P=function(){if(!A)if(0<ua.length){var k=Date.now(),l=ua.shift();l.o(l.l);if(O){var h=O,n=0==h%1?h-1:Math.floor(h);O=l.G?n:(8*h+(n+.5))/9}console.log('main loop blocker "'+l.name+'" took '+(Date.now()-k)+" ms");a.setStatus&&(k=a.statusMessage||"Please wait...",
l=O,h=va.I,l?l<h?a.setStatus(k+" ("+(h-l)+"/"+h+")"):a.setStatus(k):a.setStatus(""));g<J||setTimeout(P,0)}else if(!(g<J))if(ta=ta+1|0,1==L&&1<N&&0!=ta%N)I();else{0==L&&(wa=Oa());a:if(!(A||a.preMainLoop&&!1===a.preMainLoop())){try{b()}catch(m){if(m instanceof Ra||"unwind"==m)break a;m&&"object"===typeof m&&m.stack&&u("exception thrown: "+[m,m.stack]);throw m;}a.postMainLoop&&a.postMainLoop()}g<J||("object"===typeof SDL&&SDL.audio&&SDL.audio.C&&SDL.audio.C(),I())}};f||(c&&0<c?Na(0,1E3/c):Na(1,1),I());
if(d)throw"unwind";}function Sa(b){var c=b.getExtension("ANGLE_instanced_arrays");c&&(b.vertexAttribDivisor=function(d,e){c.vertexAttribDivisorANGLE(d,e)},b.drawArraysInstanced=function(d,e,f,g){c.drawArraysInstancedANGLE(d,e,f,g)},b.drawElementsInstanced=function(d,e,f,g,k){c.drawElementsInstancedANGLE(d,e,f,g,k)})}
function Ta(b){var c=b.getExtension("OES_vertex_array_object");c&&(b.createVertexArray=function(){return c.createVertexArrayOES()},b.deleteVertexArray=function(d){c.deleteVertexArrayOES(d)},b.bindVertexArray=function(d){c.bindVertexArrayOES(d)},b.isVertexArray=function(d){return c.isVertexArrayOES(d)})}function Ua(b){var c=b.getExtension("WEBGL_draw_buffers");c&&(b.drawBuffers=function(d,e){c.drawBuffersWEBGL(d,e)})}var Va=1,T=[];
function Ga(b,c){if(b=b.getContext("webgl",c)){for(var d=T,e=Va++,f=d.length;f<e;f++)d[f]=null;d={J:e,attributes:c,version:c.s,j:b};b.canvas&&(b.canvas.F=d);T[e]=d;("undefined"===typeof c.v||c.v)&&Wa(d);c=e}else c=0;return c}
function Wa(b){b||(b=V);if(!b.B){b.B=!0;var c=b.j;Sa(c);Ta(c);Ua(c);c.H=c.getExtension("EXT_disjoint_timer_query");c.K=c.getExtension("WEBGL_multi_draw");var d="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(c.getSupportedExtensions()||
[]).forEach(function(e){-1!=d.indexOf(e)&&c.getExtension(e)})}}var Fa={},V;a.requestFullscreen=function(b,c){Ia(b,c)};a.requestAnimationFrame=function(b){La(b)};a.setCanvasSize=function(b,c,d){Y(a.canvas,b,c);d||Ka()};a.pauseMainLoop=function(){I=null;J++};a.resumeMainLoop=function(){J++;var b=L,c=N,d=K;K=null;Qa(d,0,!1,sa,!0);Na(b,c);I()};a.getUserMedia=function(){window.getUserMedia||(window.getUserMedia=navigator.getUserMedia||navigator.mozGetUserMedia);window.getUserMedia(void 0)};
a.createContext=function(b,c,d,e){return Ea(b,c,d,e)};var U;ia.push({o:function(){Xa()}});var Ya={d:function(b,c,d,e,f){Qa(function(){z.get(b)()},c,d,e,f)},b:function(b){U.clear(b)},c:function(b,c,d,e){U.clearColor(b,c,d,e)},e:function(){console.log("initializing gl");let b=Ga(document.querySelector("#canvas"),{s:1});null===b?alert("Unable to initialize WebGL. Your browser or machine may not support it."):(V=T[b],a.m=U=V&&V.j)},a:y};
(function(){function b(f){a.asm=f.exports;z=a.asm.f;E--;a.monitorRunDependencies&&a.monitorRunDependencies(E);0==E&&(null!==na&&(clearInterval(na),na=null),F&&(f=F,F=null,f()))}function c(f){b(f.instance)}function d(f){return ra().then(function(g){return WebAssembly.instantiate(g,e)}).then(f,function(g){u("failed to asynchronously prepare wasm: "+g);x(g)})}var e={a:Ya};E++;a.monitorRunDependencies&&a.monitorRunDependencies(E);if(a.instantiateWasm)try{return a.instantiateWasm(e,b)}catch(f){return u("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(w||"function"!==typeof WebAssembly.instantiateStreaming||oa()||"function"!==typeof fetch)return d(c);fetch(G,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,e).then(c,function(g){u("wasm streaming compile failed: "+g);u("falling back to ArrayBuffer instantiation");return d(c)})})})();return{}})();var Xa=a.___wasm_call_ctors=function(){return(Xa=a.___wasm_call_ctors=a.asm.g).apply(null,arguments)};
a.___em_js__print=function(){return(a.___em_js__print=a.asm.h).apply(null,arguments)};a._main=function(){return(a._main=a.asm.i).apply(null,arguments)};var Za;function Ra(b){this.name="ExitStatus";this.message="Program terminated with exit("+b+")";this.status=b}F=function $a(){Za||ab();Za||(F=$a)};
function ab(){function b(){if(!Za&&(Za=!0,a.calledRun=!0,!A)){H(ia);H(ka);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(bb){var c=a._main;try{var d=c(0,0);if(!noExitRuntime||0!==d){if(!noExitRuntime){if(a.onExit)a.onExit(d);A=!0}aa(d,new Ra(d))}}catch(e){e instanceof Ra||("unwind"==e?noExitRuntime=!0:((c=e)&&"object"===typeof e&&e.stack&&(c=[e,e.stack]),u("exception thrown: "+c),aa(1,e)))}finally{}}if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)c=
a.postRun.shift(),la.unshift(c);H(la)}}if(!(0<E)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)ma();H(ha);0<E||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}a.run=ab;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();var bb=!0;a.noInitialRun&&(bb=!1);noExitRuntime=!0;ab();
