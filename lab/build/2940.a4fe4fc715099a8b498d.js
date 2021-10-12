"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2940],{45407:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityMonitor=void 0;const o=n(41649);t.ActivityMonitor=class{constructor(e){this._timer=-1,this._timeout=-1,this._isDisposed=!1,this._activityStopped=new o.Signal(this),e.signal.connect(this._onSignalFired,this),this._timeout=e.timeout||1e3}get activityStopped(){return this._activityStopped}get timeout(){return this._timeout}set timeout(e){this._timeout=e}get isDisposed(){return this._isDisposed}dispose(){this._isDisposed||(this._isDisposed=!0,o.Signal.clearData(this))}_onSignalFired(e,t){clearTimeout(this._timer),this._sender=e,this._args=t,this._timer=setTimeout((()=>{this._activityStopped.emit({sender:this._sender,args:this._args})}),this._timeout)}}},52940:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(45407),t),r(n(13794),t),r(n(73502),t),r(n(79603),t),r(n(62282),t),r(n(1124),t),r(n(13463),t),r(n(80177),t)},13794:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},73502:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MarkdownCodeBlocks=void 0,function(e){e.CODE_BLOCK_MARKER="```";const t=[".markdown",".mdown",".mkdn",".md",".mkd",".mdwn",".mdtxt",".mdtext",".text",".txt",".Rmd"];class n{constructor(e){this.startLine=e,this.code="",this.endLine=-1}}e.MarkdownCodeBlock=n,e.isMarkdown=function(e){return t.indexOf(e)>-1},e.findMarkdownCodeBlocks=function(t){if(!t||""===t)return[];const o=t.split("\n"),r=[];let i=null;for(let t=0;t<o.length;t++){const a=o[t],s=0===a.indexOf(e.CODE_BLOCK_MARKER),u=null!=i;if(s||u)if(u)i&&(s?(i.endLine=t-1,r.push(i),i=null):i.code+=a+"\n");else{i=new n(t);const o=a.indexOf(e.CODE_BLOCK_MARKER),s=a.lastIndexOf(e.CODE_BLOCK_MARKER);o!==s&&(i.code=a.substring(o+e.CODE_BLOCK_MARKER.length,s),i.endLine=t,r.push(i),i=null)}}return r}}(t.MarkdownCodeBlocks||(t.MarkdownCodeBlocks={}))},79603:function(__unused_webpack_module,exports,__webpack_require__){var process=__webpack_require__(34406),__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PageConfig=void 0;const coreutils_1=__webpack_require__(93315),minimist_1=__importDefault(__webpack_require__(33649)),url_1=__webpack_require__(80177);var PageConfig;(function(PageConfig){function getOption(name){if(configData)return configData[name]||getBodyData(name);configData=Object.create(null);let found=!1;if("undefined"!=typeof document&&document){const e=document.getElementById("jupyter-config-data");e&&(configData=JSON.parse(e.textContent||""),found=!0)}if(!found&&process.argv)try{const cli=minimist_1.default(process.argv.slice(2)),path=__webpack_require__(21023);let fullPath="";"jupyter-config-data"in cli?fullPath=path.resolve(cli["jupyter-config-data"]):"JUPYTER_CONFIG_DATA"in{}&&(fullPath=path.resolve({}.JUPYTER_CONFIG_DATA)),fullPath&&(configData=eval("require")(fullPath))}catch(e){console.error(e)}if(coreutils_1.JSONExt.isObject(configData))for(const e in configData)"string"!=typeof configData[e]&&(configData[e]=JSON.stringify(configData[e]));else configData=Object.create(null);return configData[name]||getBodyData(name)}function setOption(e,t){const n=getOption(e);return configData[e]=t,n}function getBaseUrl(){return url_1.URLExt.normalize(getOption("baseUrl")||"/")}function getTreeUrl(){return url_1.URLExt.join(getBaseUrl(),getOption("treeUrl"))}function getShareUrl(){return url_1.URLExt.normalize(getOption("shareUrl")||getBaseUrl())}function getTreeShareUrl(){return url_1.URLExt.normalize(url_1.URLExt.join(getShareUrl(),getOption("treeUrl")))}function getUrl(e){var t,n,o;let r=getOption("baseUrl")||"/";const i=null!==(t=e.mode)&&void 0!==t?t:getOption("mode"),a=null!==(n=e.workspace)&&void 0!==n?n:getOption("workspace"),s="multiple-document"===i?"lab":"doc";r=url_1.URLExt.join(r,s),a!==PageConfig.defaultWorkspace&&(r=url_1.URLExt.join(r,"workspaces",encodeURIComponent(getOption("workspace"))));const u=null!==(o=e.treePath)&&void 0!==o?o:getOption("treePath");return u&&(r=url_1.URLExt.join(r,"tree",url_1.URLExt.encodeParts(u))),r}function getWsUrl(e){let t=getOption("wsUrl");if(!t){if(0!==(e=e?url_1.URLExt.normalize(e):getBaseUrl()).indexOf("http"))return"";t="ws"+e.slice(4)}return url_1.URLExt.normalize(t)}function getNBConvertURL({path:e,format:t,download:n}){const o=url_1.URLExt.encodeParts(e),r=url_1.URLExt.join(getBaseUrl(),"nbconvert",t,o);return n?r+"?download=true":r}function getToken(){return getOption("token")||getBodyData("jupyterApiToken")}function getNotebookVersion(){const e=getOption("notebookVersion");return""===e?[0,0,0]:JSON.parse(e)}PageConfig.getOption=getOption,PageConfig.setOption=setOption,PageConfig.getBaseUrl=getBaseUrl,PageConfig.getTreeUrl=getTreeUrl,PageConfig.getShareUrl=getShareUrl,PageConfig.getTreeShareUrl=getTreeShareUrl,PageConfig.getUrl=getUrl,PageConfig.defaultWorkspace="default",PageConfig.getWsUrl=getWsUrl,PageConfig.getNBConvertURL=getNBConvertURL,PageConfig.getToken=getToken,PageConfig.getNotebookVersion=getNotebookVersion;let configData=null,Extension;function getBodyData(e){if("undefined"==typeof document||!document.body)return"";const t=document.body.dataset[e];return void 0===t?"":decodeURIComponent(t)}!function(e){function t(e){try{const t=getOption(e);if(t)return JSON.parse(t)}catch(t){console.warn(`Unable to parse ${e}.`,t)}return[]}e.deferred=t("deferredExtensions"),e.disabled=t("disabledExtensions"),e.isDeferred=function(t){const n=t.indexOf(":");let o="";return-1!==n&&(o=t.slice(0,n)),e.deferred.some((e=>e===t||o&&e===o))},e.isDisabled=function(t){const n=t.indexOf(":");let o="";return-1!==n&&(o=t.slice(0,n)),e.disabled.some((e=>e===t||o&&e===o))}}(Extension=PageConfig.Extension||(PageConfig.Extension={}))})(PageConfig=exports.PageConfig||(exports.PageConfig={}))},62282:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PathExt=void 0;const o=n(21023);!function(e){function t(e){return 0===e.indexOf("/")&&(e=e.slice(1)),e}e.join=function(...e){const n=o.posix.join(...e);return"."===n?"":t(n)},e.basename=function(e,t){return o.posix.basename(e,t)},e.dirname=function(e){const n=t(o.posix.dirname(e));return"."===n?"":n},e.extname=function(e){return o.posix.extname(e)},e.normalize=function(e){return""===e?"":t(o.posix.normalize(e))},e.resolve=function(...e){return t(o.posix.resolve(...e))},e.relative=function(e,n){return t(o.posix.relative(e,n))},e.normalizeExtension=function(e){return e.length>0&&0!==e.indexOf(".")&&(e=`.${e}`),e},e.removeSlash=t}(t.PathExt||(t.PathExt={}))},1124:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0,function(e){const t="𝐚".length>1;e.jsIndexToCharIndex=function(e,n){if(t)return e;let o=e;for(let t=0;t+1<n.length&&t<e;t++){const e=n.charCodeAt(t);if(e>=55296&&e<=56319){const e=n.charCodeAt(t+1);e>=56320&&e<=57343&&(o--,t++)}}return o},e.charIndexToJsIndex=function(e,n){if(t)return e;let o=e;for(let e=0;e+1<n.length&&e<o;e++){const t=n.charCodeAt(e);if(t>=55296&&t<=56319){const t=n.charCodeAt(e+1);t>=56320&&t<=57343&&(o++,e++)}}return o},e.camelCase=function(e,t=!1){return e.replace(/^(\w)|[\s-_:]+(\w)/g,(function(e,n,o){return o?o.toUpperCase():t?n.toUpperCase():n.toLowerCase()}))},e.titleCase=function(e){return(e||"").toLowerCase().split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")}}(t.Text||(t.Text={}))},13463:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Time=void 0;const r=o(n(19034));var i;(i=t.Time||(t.Time={})).formatHuman=function(e){r.default.locale(document.documentElement.lang);let t=r.default(e).fromNow();return t="a few seconds ago"===t?"seconds ago":t,t},i.format=function(e,t="YYYY-MM-DD HH:mm"){return r.default(e).format(t)}},80177:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.URLExt=void 0;const r=n(21023),i=o(n(64846));!function(e){function t(e){if("undefined"!=typeof document&&document){const t=document.createElement("a");return t.href=e,t}return i.default(e)}function n(...e){const t=i.default(e[0],{}),n=`${t.protocol}${t.slashes?"//":""}${t.auth}${t.auth?"@":""}${t.host}`,o=r.posix.join(`${n&&"/"!==t.pathname[0]?"/":""}${t.pathname}`,...e.slice(1));return`${n}${"."===o?"":o}`}e.parse=t,e.getHostName=function(e){return i.default(e).hostname},e.normalize=function(e){return e&&t(e).toString()},e.join=n,e.encodeParts=function(e){return n(...e.split("/").map(encodeURIComponent))},e.objectToQueryString=function(e){const t=Object.keys(e).filter((e=>e.length>0));return t.length?"?"+t.map((t=>{const n=encodeURIComponent(String(e[t]));return t+(n?"="+n:"")})).join("&"):""},e.queryStringToObject=function(e){return e.replace(/^\?/,"").split("&").reduce(((e,t)=>{const[n,o]=t.split("=");return n.length>0&&(e[n]=decodeURIComponent(o||"")),e}),{})},e.isLocal=function(e){const{protocol:n}=t(e);return(!n||0!==e.toLowerCase().indexOf(n))&&0!==e.indexOf("/")}}(t.URLExt||(t.URLExt={}))}}]);
//# sourceMappingURL=2940.a4fe4fc715099a8b498d.js.map