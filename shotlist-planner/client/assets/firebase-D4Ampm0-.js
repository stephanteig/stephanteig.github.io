const Xo=()=>{};var kr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=function(i){const e=[];let n=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Yo=function(i){const e=[];let n=0,r=0;for(;n<i.length;){const o=i[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const h=i[n++];e[r++]=String.fromCharCode((o&31)<<6|h&63)}else if(o>239&&o<365){const h=i[n++],l=i[n++],w=i[n++],v=((o&7)<<18|(h&63)<<12|(l&63)<<6|w&63)-65536;e[r++]=String.fromCharCode(55296+(v>>10)),e[r++]=String.fromCharCode(56320+(v&1023))}else{const h=i[n++],l=i[n++];e[r++]=String.fromCharCode((o&15)<<12|(h&63)<<6|l&63)}}return e.join("")},ws={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const h=i[o],l=o+1<i.length,w=l?i[o+1]:0,v=o+2<i.length,E=v?i[o+2]:0,A=h>>2,S=(h&3)<<4|w>>4;let L=(w&15)<<2|E>>6,H=E&63;v||(H=64,l||(L=64)),r.push(n[A],n[S],n[L],n[H])}return r.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Is(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Yo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const h=n[i.charAt(o++)],w=o<i.length?n[i.charAt(o)]:0;++o;const E=o<i.length?n[i.charAt(o)]:64;++o;const S=o<i.length?n[i.charAt(o)]:64;if(++o,h==null||w==null||E==null||S==null)throw new Qo;const L=h<<2|w>>4;if(r.push(L),E!==64){const H=w<<4&240|E>>2;if(r.push(H),S!==64){const x=E<<6&192|S;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Qo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zo=function(i){const e=Is(i);return ws.encodeByteArray(e,!0)},cn=function(i){return Zo(i).replace(/\./g,"")},vs=function(i){try{return ws.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=()=>ea().__FIREBASE_DEFAULTS__,na=()=>{if(typeof process>"u"||typeof kr>"u")return;const i=kr.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},ia=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&vs(i[1]);return e&&JSON.parse(e)},di=()=>{try{return Xo()||ta()||na()||ia()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Es=i=>di()?.emulatorHosts?.[i],ra=i=>{const e=Es(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ts=()=>di()?.config,Ss=i=>di()?.[`_${i}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=i.iat||0,h=i.sub||i.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}},...i};return[cn(JSON.stringify(n)),cn(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function ca(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ha(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function la(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ua(){const i=q();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function da(){try{return typeof indexedDB=="object"}catch{return!1}}function fa(){return new Promise((i,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="FirebaseError";class ge extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pa,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lt.prototype.create)}}class Lt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,h=this.errors[e],l=h?ga(h,r):"Error",w=`${this.serviceName}: ${l} (${o}).`;return new ge(o,w,r)}}function ga(i,e){return i.replace(ma,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const ma=/\{\$([^}]+)}/g;function _a(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function qe(i,e){if(i===e)return!0;const n=Object.keys(i),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const h=i[o],l=e[o];if(Nr(h)&&Nr(l)){if(!qe(h,l))return!1}else if(h!==l)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function Nr(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(i){const e=[];for(const[n,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ya(i,e){const n=new Ia(i,e);return n.subscribe.bind(n)}class Ia{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wa(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=qn),o.error===void 0&&(o.error=qn),o.complete===void 0&&(o.complete=qn);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wa(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function qn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function As(i){return(await fetch(i,{credentials:"include"})).ok}class Ke{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sa;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ta(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const h=this.getOrInitializeService({instanceIdentifier:o});r.resolve(h)}catch{}}}}clearInstance(e=je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=je){return this.instances.has(e)}getOptions(e=je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[h,l]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(h);r===w&&l.resolve(o)}return o}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(r)??new Set;o.add(e),this.onInitCallbacks.set(r,o);const h=this.instances.get(r);return h&&e(h,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ea(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=je){return this.component?this.component.multipleInstances?e:je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ea(i){return i===je?void 0:i}function Ta(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new va(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(N||(N={}));const Aa={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},ba=N.INFO,Pa={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Ra=(i,e,...n)=>{if(e<i.logLevel)return;const r=new Date().toISOString(),o=Pa[e];if(o)console[o](`[${r}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fi{constructor(e){this.name=e,this._logLevel=ba,this._logHandler=Ra,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Aa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const Ca=(i,e)=>e.some(n=>i instanceof n);let Dr,Or;function ka(){return Dr||(Dr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Na(){return Or||(Or=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bs=new WeakMap,ni=new WeakMap,Ps=new WeakMap,Kn=new WeakMap,pi=new WeakMap;function Da(i){const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("success",h),i.removeEventListener("error",l)},h=()=>{n(Ne(i.result)),o()},l=()=>{r(i.error),o()};i.addEventListener("success",h),i.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&bs.set(n,i)}).catch(()=>{}),pi.set(e,i),e}function Oa(i){if(ni.has(i))return;const e=new Promise((n,r)=>{const o=()=>{i.removeEventListener("complete",h),i.removeEventListener("error",l),i.removeEventListener("abort",l)},h=()=>{n(),o()},l=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",h),i.addEventListener("error",l),i.addEventListener("abort",l)});ni.set(i,e)}let ii={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return ni.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ps.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ne(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function La(i){ii=i(ii)}function Ma(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=i.call(Jn(this),e,...n);return Ps.set(r,e.sort?e.sort():[e]),Ne(r)}:Na().includes(i)?function(...e){return i.apply(Jn(this),e),Ne(bs.get(this))}:function(...e){return Ne(i.apply(Jn(this),e))}}function Ua(i){return typeof i=="function"?Ma(i):(i instanceof IDBTransaction&&Oa(i),Ca(i,ka())?new Proxy(i,ii):i)}function Ne(i){if(i instanceof IDBRequest)return Da(i);if(Kn.has(i))return Kn.get(i);const e=Ua(i);return e!==i&&(Kn.set(i,e),pi.set(e,i)),e}const Jn=i=>pi.get(i);function xa(i,e,{blocked:n,upgrade:r,blocking:o,terminated:h}={}){const l=indexedDB.open(i,e),w=Ne(l);return r&&l.addEventListener("upgradeneeded",v=>{r(Ne(l.result),v.oldVersion,v.newVersion,Ne(l.transaction),v)}),n&&l.addEventListener("blocked",v=>n(v.oldVersion,v.newVersion,v)),w.then(v=>{h&&v.addEventListener("close",()=>h()),o&&v.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),w}const Fa=["get","getKey","getAll","getAllKeys","count"],Va=["put","add","delete","clear"],Xn=new Map;function Lr(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Xn.get(e))return Xn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Va.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Fa.includes(n)))return;const h=async function(l,...w){const v=this.transaction(l,o?"readwrite":"readonly");let E=v.store;return r&&(E=E.index(w.shift())),(await Promise.all([E[n](...w),o&&v.done]))[0]};return Xn.set(e,h),h}La(i=>({...i,get:(e,n,r)=>Lr(e,n)||i.get(e,n,r),has:(e,n)=>!!Lr(e,n)||i.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ba(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ba(i){return i.getComponent()?.type==="VERSION"}const ri="@firebase/app",Mr="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new fi("@firebase/app"),Ha="@firebase/app-compat",$a="@firebase/analytics-compat",Wa="@firebase/analytics",za="@firebase/app-check-compat",Ga="@firebase/app-check",qa="@firebase/auth",Ka="@firebase/auth-compat",Ja="@firebase/database",Xa="@firebase/data-connect",Ya="@firebase/database-compat",Qa="@firebase/functions",Za="@firebase/functions-compat",ec="@firebase/installations",tc="@firebase/installations-compat",nc="@firebase/messaging",ic="@firebase/messaging-compat",rc="@firebase/performance",sc="@firebase/performance-compat",oc="@firebase/remote-config",ac="@firebase/remote-config-compat",cc="@firebase/storage",hc="@firebase/storage-compat",lc="@firebase/firestore",uc="@firebase/ai",dc="@firebase/firestore-compat",fc="firebase",pc="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]",gc={[ri]:"fire-core",[Ha]:"fire-core-compat",[Wa]:"fire-analytics",[$a]:"fire-analytics-compat",[Ga]:"fire-app-check",[za]:"fire-app-check-compat",[qa]:"fire-auth",[Ka]:"fire-auth-compat",[Ja]:"fire-rtdb",[Xa]:"fire-data-connect",[Ya]:"fire-rtdb-compat",[Qa]:"fire-fn",[Za]:"fire-fn-compat",[ec]:"fire-iid",[tc]:"fire-iid-compat",[nc]:"fire-fcm",[ic]:"fire-fcm-compat",[rc]:"fire-perf",[sc]:"fire-perf-compat",[oc]:"fire-rc",[ac]:"fire-rc-compat",[cc]:"fire-gcs",[hc]:"fire-gcs-compat",[lc]:"fire-fst",[dc]:"fire-fst-compat",[uc]:"fire-vertex","fire-js":"fire-js",[fc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Map,mc=new Map,oi=new Map;function Ur(i,e){try{i.container.addComponent(e)}catch(n){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function ot(i){const e=i.name;if(oi.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;oi.set(e,i);for(const n of hn.values())Ur(n,i);for(const n of mc.values())Ur(n,i);return!0}function gi(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Q(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},De=new Lt("app","Firebase",_c);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ke("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=pc;function Ic(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const r={name:si,automaticDataCollectionEnabled:!0,...e},o=r.name;if(typeof o!="string"||!o)throw De.create("bad-app-name",{appName:String(o)});if(n||(n=Ts()),!n)throw De.create("no-options");const h=hn.get(o);if(h){if(qe(n,h.options)&&qe(r,h.config))return h;throw De.create("duplicate-app",{appName:o})}const l=new Sa(o);for(const v of oi.values())l.addComponent(v);const w=new yc(n,r,l);return hn.set(o,w),w}function Rs(i=si){const e=hn.get(i);if(!e&&i===si&&Ts())return Ic();if(!e)throw De.create("no-app",{appName:i});return e}function Oe(i,e,n){let r=gc[i]??i;n&&(r+=`-${n}`);const o=r.match(/\s|\//),h=e.match(/\s|\//);if(o||h){const l=[`Unable to register library "${r}" with version "${e}":`];o&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&h&&l.push("and"),h&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(l.join(" "));return}ot(new Ke(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="firebase-heartbeat-database",vc=1,Nt="firebase-heartbeat-store";let Yn=null;function Cs(){return Yn||(Yn=xa(wc,vc,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Nt)}catch(n){console.warn(n)}}}}).catch(i=>{throw De.create("idb-open",{originalErrorMessage:i.message})})),Yn}async function Ec(i){try{const n=(await Cs()).transaction(Nt),r=await n.objectStore(Nt).get(ks(i));return await n.done,r}catch(e){if(e instanceof ge)fe.warn(e.message);else{const n=De.create("idb-get",{originalErrorMessage:e?.message});fe.warn(n.message)}}}async function xr(i,e){try{const r=(await Cs()).transaction(Nt,"readwrite");await r.objectStore(Nt).put(e,ks(i)),await r.done}catch(n){if(n instanceof ge)fe.warn(n.message);else{const r=De.create("idb-set",{originalErrorMessage:n?.message});fe.warn(r.message)}}}function ks(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=1024,Sc=30;class Ac{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pc(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fr();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Sc){const o=Rc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){fe.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fr(),{heartbeatsToSend:n,unsentEntries:r}=bc(this._heartbeatsCache.heartbeats),o=cn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return fe.warn(e),""}}}function Fr(){return new Date().toISOString().substring(0,10)}function bc(i,e=Tc){const n=[];let r=i.slice();for(const o of i){const h=n.find(l=>l.agent===o.agent);if(h){if(h.dates.push(o.date),Vr(n)>e){h.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Vr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Pc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return da()?fa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ec(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xr(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Vr(i){return cn(JSON.stringify({version:2,heartbeats:i})).length}function Rc(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let r=1;r<i.length;r++)i[r].date<n&&(n=i[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(i){ot(new Ke("platform-logger",e=>new ja(e),"PRIVATE")),ot(new Ke("heartbeat",e=>new Ac(e),"PRIVATE")),Oe(ri,Mr,i),Oe(ri,Mr,"esm2020"),Oe("fire-js","")}Cc("");var kc="firebase",Nc="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe(kc,Nc,"app");function Ns(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dc=Ns,Ds=new Lt("auth","Firebase",Ns());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new fi("@firebase/auth");function Oc(i,...e){ln.logLevel<=N.WARN&&ln.warn(`Auth (${ht}): ${i}`,...e)}function nn(i,...e){ln.logLevel<=N.ERROR&&ln.error(`Auth (${ht}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(i,...e){throw _i(i,...e)}function te(i,...e){return _i(i,...e)}function mi(i,e,n){const r={...Dc(),[e]:n};return new Lt("auth","Firebase",r).create(e,{appName:i.name})}function We(i){return mi(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lc(i,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&he(i,"argument-error"),mi(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _i(i,...e){if(typeof i!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(n,...r)}return Ds.create(i,...e)}function b(i,e,...n){if(!i)throw _i(e,...n)}function ue(i){const e="INTERNAL ASSERTION FAILED: "+i;throw nn(e),new Error(e)}function pe(i,e){i||ue(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){return typeof self<"u"&&self.location?.href||""}function Mc(){return jr()==="http:"||jr()==="https:"}function jr(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mc()||ha()||"connection"in navigator)?navigator.onLine:!0}function xc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.shortDelay=e,this.longDelay=n,pe(n>e,"Short delay should be less than long delay!"),this.isMobile=aa()||la()}get(){return Uc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(i,e){pe(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jc=new Ut(3e4,6e4);function Ii(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function lt(i,e,n,r,o={}){return Ls(i,o,async()=>{let h={},l={};r&&(e==="GET"?l=r:h={body:JSON.stringify(r)});const w=Mt({key:i.config.apiKey,...l}).slice(1),v=await i._getAdditionalHeaders();v["Content-Type"]="application/json",i.languageCode&&(v["X-Firebase-Locale"]=i.languageCode);const E={method:e,headers:v,...h};return ca()||(E.referrerPolicy="no-referrer"),i.emulatorConfig&&_n(i.emulatorConfig.host)&&(E.credentials="include"),Os.fetch()(await Ms(i,i.config.apiHost,n,w),E)})}async function Ls(i,e,n){i._canInitEmulator=!1;const r={...Fc,...e};try{const o=new Hc(i),h=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const l=await h.json();if("needConfirmation"in l)throw Zt(i,"account-exists-with-different-credential",l);if(h.ok&&!("errorMessage"in l))return l;{const w=h.ok?l.errorMessage:l.error.message,[v,E]=w.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zt(i,"credential-already-in-use",l);if(v==="EMAIL_EXISTS")throw Zt(i,"email-already-in-use",l);if(v==="USER_DISABLED")throw Zt(i,"user-disabled",l);const A=r[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw mi(i,A,E);he(i,A)}}catch(o){if(o instanceof ge)throw o;he(i,"network-request-failed",{message:String(o)})}}async function Bc(i,e,n,r,o={}){const h=await lt(i,e,n,r,o);return"mfaPendingCredential"in h&&he(i,"multi-factor-auth-required",{_serverResponse:h}),h}async function Ms(i,e,n,r){const o=`${e}${n}?${r}`,h=i,l=h.config.emulator?yi(i.config,o):`${i.config.apiScheme}://${o}`;return Vc.includes(n)&&(await h._persistenceManagerAvailable,h._getPersistenceType()==="COOKIE")?h._getPersistence()._getFinalTarget(l).toString():l}class Hc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(te(this.auth,"network-request-failed")),jc.get())})}}function Zt(i,e,n){const r={appName:i.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=te(i,e,r);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(i,e){return lt(i,"POST","/v1/accounts:delete",e)}async function un(i,e){return lt(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wc(i,e=!1){const n=me(i),r=await n.getIdToken(e),o=wi(r);b(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const h=typeof o.firebase=="object"?o.firebase:void 0,l=h?.sign_in_provider;return{claims:o,token:r,authTime:Pt(Qn(o.auth_time)),issuedAtTime:Pt(Qn(o.iat)),expirationTime:Pt(Qn(o.exp)),signInProvider:l||null,signInSecondFactor:h?.sign_in_second_factor||null}}function Qn(i){return Number(i)*1e3}function wi(i){const[e,n,r]=i.split(".");if(e===void 0||n===void 0||r===void 0)return nn("JWT malformed, contained fewer than 3 sections"),null;try{const o=vs(n);return o?JSON.parse(o):(nn("Failed to decode base64 JWT payload"),null)}catch(o){return nn("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Br(i){const e=wi(i);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(i,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ge&&zc(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function zc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pt(this.lastLoginAt),this.creationTime=Pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(i){const e=i.auth,n=await i.getIdToken(),r=await Dt(i,un(e,{idToken:n}));b(r?.users.length,e,"internal-error");const o=r.users[0];i._notifyReloadListener(o);const h=o.providerUserInfo?.length?Us(o.providerUserInfo):[],l=Kc(i.providerData,h),w=i.isAnonymous,v=!(i.email&&o.passwordHash)&&!l?.length,E=w?v:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ci(o.createdAt,o.lastLoginAt),isAnonymous:E};Object.assign(i,A)}async function qc(i){const e=me(i);await dn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kc(i,e){return[...i.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function Us(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(i,e){const n=await Ls(i,{},async()=>{const r=Mt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:h}=i.config,l=await Ms(i,o,"/v1/token",`key=${h}`),w=await i._getAdditionalHeaders();w["Content-Type"]="application/x-www-form-urlencoded";const v={method:"POST",headers:w,body:r};return i.emulatorConfig&&_n(i.emulatorConfig.host)&&(v.credentials="include"),Os.fetch()(l,v)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xc(i,e){return lt(i,"POST","/v2/accounts:revokeToken",Ii(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Br(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=Br(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:h}=await Jc(e,n);this.updateTokensAndExpiration(r,o,Number(h))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:h}=n,l=new nt;return r&&(b(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),o&&(b(typeof o=="string","internal-error",{appName:e}),l.accessToken=o),h&&(b(typeof h=="number","internal-error",{appName:e}),l.expirationTime=h),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nt,this.toJSON())}_performRefresh(){return ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(i,e){b(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Z{constructor({uid:e,auth:n,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new Gc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ci(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Dt(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wc(this,e)}reload(){return qc(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Z({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await dn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(We(this.auth));const e=await this.getIdToken();return await Dt(this,$c(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,o=n.email??void 0,h=n.phoneNumber??void 0,l=n.photoURL??void 0,w=n.tenantId??void 0,v=n._redirectEventId??void 0,E=n.createdAt??void 0,A=n.lastLoginAt??void 0,{uid:S,emailVerified:L,isAnonymous:H,providerData:x,stsTokenManager:B}=n;b(S&&B,e,"internal-error");const M=nt.fromJSON(this.name,B);b(typeof S=="string",e,"internal-error"),be(r,e.name),be(o,e.name),b(typeof L=="boolean",e,"internal-error"),b(typeof H=="boolean",e,"internal-error"),be(h,e.name),be(l,e.name),be(w,e.name),be(v,e.name),be(E,e.name),be(A,e.name);const ne=new Z({uid:S,auth:e,email:o,emailVerified:L,displayName:r,isAnonymous:H,photoURL:l,phoneNumber:h,tenantId:w,stsTokenManager:M,createdAt:E,lastLoginAt:A});return x&&Array.isArray(x)&&(ne.providerData=x.map(_e=>({..._e}))),v&&(ne._redirectEventId=v),ne}static async _fromIdTokenResponse(e,n,r=!1){const o=new nt;o.updateFromServerResponse(n);const h=new Z({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await dn(h),h}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];b(o.localId!==void 0,"internal-error");const h=o.providerUserInfo!==void 0?Us(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!h?.length,w=new nt;w.updateFromIdToken(r);const v=new Z({uid:o.localId,auth:e,stsTokenManager:w,isAnonymous:l}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:h,metadata:new ci(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!h?.length};return Object.assign(v,E),v}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Map;function de(i){pe(i instanceof Function,"Expected a class definition");let e=Hr.get(i);return e?(pe(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Hr.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xs.type="NONE";const $r=xs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(i,e,n){return`firebase:${i}:${e}:${n}`}class it{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:h}=this.auth;this.fullUserKey=rn(this.userKey,o.apiKey,h),this.fullPersistenceKey=rn("persistence",o.apiKey,h),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await un(this.auth,{idToken:e}).catch(()=>{});return n?Z._fromGetAccountInfoResponse(this.auth,n,e):null}return Z._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new it(de($r),e,r);const o=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let h=o[0]||de($r);const l=rn(r,e.config.apiKey,e.name);let w=null;for(const E of n)try{const A=await E._get(l);if(A){let S;if(typeof A=="string"){const L=await un(e,{idToken:A}).catch(()=>{});if(!L)break;S=await Z._fromGetAccountInfoResponse(e,L,A)}else S=Z._fromJSON(e,A);E!==h&&(w=S),h=E;break}}catch{}const v=o.filter(E=>E._shouldAllowMigration);return!h._shouldAllowMigration||!v.length?new it(h,e,r):(h=v[0],w&&await h._set(l,w.toJSON()),await Promise.all(n.map(async E=>{if(E!==h)try{await E._remove(l)}catch{}})),new it(h,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($s(e))return"Blackberry";if(Ws(e))return"Webos";if(Vs(e))return"Safari";if((e.includes("chrome/")||js(e))&&!e.includes("edge/"))return"Chrome";if(Hs(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(n);if(r?.length===2)return r[1]}return"Other"}function Fs(i=q()){return/firefox\//i.test(i)}function Vs(i=q()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function js(i=q()){return/crios\//i.test(i)}function Bs(i=q()){return/iemobile/i.test(i)}function Hs(i=q()){return/android/i.test(i)}function $s(i=q()){return/blackberry/i.test(i)}function Ws(i=q()){return/webos/i.test(i)}function vi(i=q()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Yc(i=q()){return vi(i)&&!!window.navigator?.standalone}function Qc(){return ua()&&document.documentMode===10}function zs(i=q()){return vi(i)||Hs(i)||Ws(i)||$s(i)||/windows phone/i.test(i)||Bs(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(i,e=[]){let n;switch(i){case"Browser":n=Wr(q());break;case"Worker":n=`${Wr(q())}-${i}`;break;default:n=i}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ht}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=h=>new Promise((l,w)=>{try{const v=e(h);l(v)}catch(v){w(v)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eh(i,e={}){return lt(i,"GET","/v2/passwordPolicy",Ii(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=6;class nh{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??th,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,h){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zr(this),this.idTokenSubscription=new zr(this),this.beforeStateQueue=new Zc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ds,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(h=>this._resolvePersistenceManagerAvailable=h)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=de(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await it.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await un(this,{idToken:e}),r=await Z._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Q(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=this.redirectUser?._redirectEventId,l=r?._redirectEventId,w=await this.tryRedirectSignIn(e);(!h||h===l)&&w?.user&&(r=w.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(h){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dn(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Q(this.app))return Promise.reject(We(this));const n=e?me(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(We(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Q(this.app)?Promise.reject(We(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eh(this),n=new nh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Lt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Xc(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&de(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await it.create(this,[de(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const h=typeof n=="function"?n:n.next.bind(n);let l=!1;const w=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(w,this,"internal-error"),w.then(()=>{l||h(this.currentUser)}),typeof n=="function"){const v=e.addObserver(n,r,o);return()=>{l=!0,v()}}else{const v=e.addObserver(n);return()=>{l=!0,v()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Oc(`Error while retrieving App Check token: ${e.error}`),e?.token}}function yn(i){return me(i)}class zr{constructor(e){this.auth=e,this.observer=null,this.addObserver=ya(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rh(i){Ei=i}function sh(i){return Ei.loadJS(i)}function oh(){return Ei.gapiScript}function ah(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(i,e){const n=gi(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),h=n.getOptions();if(qe(h,e??{}))return o;he(o,"already-initialized")}return n.initialize({options:e})}function hh(i,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(de);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(r,e?.popupRedirectResolver)}function lh(i,e,n){const r=yn(i);b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,h=qs(e),{host:l,port:w}=uh(e),v=w===null?"":`:${w}`,E={url:`${h}//${l}${v}/`},A=Object.freeze({host:l,port:w,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){b(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),b(qe(E,r.config.emulator)&&qe(A,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=E,r.emulatorConfig=A,r.settings.appVerificationDisabledForTesting=!0,_n(l)?As(`${h}//${l}${v}`):dh()}function qs(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function uh(i){const e=qs(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const h=o[1];return{host:h,port:Gr(r.substr(h.length+1))}}else{const[h,l]=r.split(":");return{host:h,port:Gr(l)}}}function Gr(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function dh(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ue("not implemented")}_getIdTokenResponse(e){return ue("not implemented")}_linkToIdToken(e,n){return ue("not implemented")}_getReauthenticationResolver(e){return ue("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(i,e){return Bc(i,"POST","/v1/accounts:signInWithIdp",Ii(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="http://localhost";class Je extends Ks{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Je(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):he("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o,...h}=n;if(!r||!o)return null;const l=new Je(r,o);return l.idToken=h.idToken||void 0,l.accessToken=h.accessToken||void 0,l.secret=h.secret,l.nonce=h.nonce,l.pendingToken=h.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return rt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rt(e,n)}buildRequest(){const e={requestUri:fh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mt(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Ti{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends xt{constructor(){super("facebook.com")}static credential(e){return Je._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends xt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Je._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Re.credential(n,r)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com";Re.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends xt{constructor(){super("github.com")}static credential(e){return Je._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ce.credentialFromTaggedObject(e)}static credentialFromError(e){return Ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ce.credential(e.oauthAccessToken)}catch{return null}}}Ce.GITHUB_SIGN_IN_METHOD="github.com";Ce.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends xt{constructor(){super("twitter.com")}static credential(e,n){return Je._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ke.credential(n,r)}catch{return null}}}ke.TWITTER_SIGN_IN_METHOD="twitter.com";ke.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const h=await Z._fromIdTokenResponse(e,r,o),l=qr(r);return new at({user:h,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=qr(r);return new at({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function qr(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ge{constructor(e,n,r,o){super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,fn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new fn(e,n,r,o)}}function Js(i,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?fn._fromErrorAndOperation(i,h,e,r):h})}async function ph(i,e,n=!1){const r=await Dt(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return at._forOperation(i,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gh(i,e,n=!1){const{auth:r}=i;if(Q(r.app))return Promise.reject(We(r));const o="reauthenticate";try{const h=await Dt(i,Js(r,o,e,i),n);b(h.idToken,r,"internal-error");const l=wi(h.idToken);b(l,r,"internal-error");const{sub:w}=l;return b(i.uid===w,r,"user-mismatch"),at._forOperation(i,o,h)}catch(h){throw h?.code==="auth/user-not-found"&&he(r,"user-mismatch"),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(i,e,n=!1){if(Q(i.app))return Promise.reject(We(i));const r="signIn",o=await Js(i,r,e),h=await at._fromIdTokenResponse(i,r,o);return n||await i._updateCurrentUser(h.user),h}function _h(i,e,n,r){return me(i).onIdTokenChanged(e,n,r)}function yh(i,e,n){return me(i).beforeAuthStateChanged(e,n)}function hu(i,e,n,r){return me(i).onAuthStateChanged(e,n,r)}function lu(i){return me(i).signOut()}const pn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pn,"1"),this.storage.removeItem(pn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=1e3,wh=10;class Ys extends Xs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,w,v)=>{this.notifyListeners(l,v)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},h=this.storage.getItem(r);Qc()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,wh):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ih)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ys.type="LOCAL";const vh=Ys;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Xs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qs.type="SESSION";const Zs=Qs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new In(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:h}=n.data,l=this.handlersMap[o];if(!l?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const w=Array.from(l).map(async E=>E(n.origin,h)),v=await Eh(w);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:v})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}In.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(i="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let h,l;return new Promise((w,v)=>{const E=Si("",20);o.port1.start();const A=setTimeout(()=>{v(new Error("unsupported_event"))},r);l={messageChannel:o,onMessage(S){const L=S;if(L.data.eventId===E)switch(L.data.status){case"ack":clearTimeout(A),h=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),w(L.data.response);break;default:clearTimeout(A),clearTimeout(h),v(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:E,data:n},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(){return window}function Sh(i){ce().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function Ah(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bh(){return navigator?.serviceWorker?.controller||null}function Ph(){return eo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="firebaseLocalStorageDb",Rh=1,gn="firebaseLocalStorage",no="fbase_key";class Ft{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wn(i,e){return i.transaction([gn],e?"readwrite":"readonly").objectStore(gn)}function Ch(){const i=indexedDB.deleteDatabase(to);return new Ft(i).toPromise()}function hi(){const i=indexedDB.open(to,Rh);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(gn,{keyPath:no})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(gn)?e(r):(r.close(),await Ch(),e(await hi()))})})}async function Kr(i,e,n){const r=wn(i,!0).put({[no]:e,value:n});return new Ft(r).toPromise()}async function kh(i,e){const n=wn(i,!1).get(e),r=await new Ft(n).toPromise();return r===void 0?null:r.value}function Jr(i,e){const n=wn(i,!0).delete(e);return new Ft(n).toPromise()}const Nh=800,Dh=3;class io{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Dh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=In._getInstance(Ph()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Ah(),!this.activeServiceWorker)return;this.sender=new Th(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hi();return await Kr(e,pn,"1"),await Jr(e,pn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>kh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const h=wn(o,!1).getAll();return new Ft(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:h}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(h)&&(this.notifyListeners(o,h),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}io.type="LOCAL";const Oh=io;new Ut(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(i,e){return e?de(e):(b(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Ks{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Lh(i){return mh(i.auth,new Ai(i),i.bypassAuthState)}function Mh(i){const{auth:e,user:n}=i;return b(n,e,"internal-error"),gh(n,new Ai(i),i.bypassAuthState)}async function Uh(i){const{auth:e,user:n}=i;return b(n,e,"internal-error"),ph(n,new Ai(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,r,o,h=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:h,error:l,type:w}=e;if(l){this.reject(l);return}const v={auth:this.auth,requestUri:n,sessionId:r,tenantId:h||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(w)(v))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lh;case"linkViaPopup":case"linkViaRedirect":return Uh;case"reauthViaPopup":case"reauthViaRedirect":return Mh;default:he(this.auth,"internal-error")}}resolve(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=new Ut(2e3,1e4);async function uu(i,e,n){if(Q(i.app))return Promise.reject(te(i,"operation-not-supported-in-this-environment"));const r=yn(i);Lc(i,e,Ti);const o=ro(r,n);return new He(r,"signInViaPopup",e,o).executeNotNull()}class He extends so{constructor(e,n,r,o,h){super(e,n,o,h),this.provider=r,this.authWindow=null,this.pollId=null,He.currentPopupAction&&He.currentPopupAction.cancel(),He.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){pe(this.filter.length===1,"Popup operations only handle one event");const e=Si();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,He.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xh.get())};e()}}He.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="pendingRedirect",sn=new Map;class Vh extends so{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sn.get(this.auth._key());if(!e){try{const r=await jh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sn.set(this.auth._key(),e)}return this.bypassAuthState||sn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jh(i,e){const n=$h(e),r=Hh(i);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function Bh(i,e){sn.set(i._key(),e)}function Hh(i){return de(i._redirectPersistence)}function $h(i){return rn(Fh,i.config.apiKey,i.name)}async function Wh(i,e,n=!1){if(Q(i.app))return Promise.reject(We(i));const r=yn(i),o=ro(r,e),l=await new Vh(r,o,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=10*60*1e3;class Gh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!oo(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(te(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xr(e))}saveEventToCache(e){this.cachedEventUids.add(Xr(e)),this.lastProcessedEventTime=Date.now()}}function Xr(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function oo({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function qh(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oo(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kh(i,e={}){return lt(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xh=/^https?/;async function Yh(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Kh(i);for(const n of e)try{if(Qh(n))return}catch{}he(i,"unauthorized-domain")}function Qh(i){const e=ai(),{protocol:n,hostname:r}=new URL(e);if(i.startsWith("chrome-extension://")){const l=new URL(i);return l.hostname===""&&r===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!Xh.test(n))return!1;if(Jh.test(i))return r===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Ut(3e4,6e4);function Yr(){const i=ce().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function el(i){return new Promise((e,n)=>{function r(){Yr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yr(),n(te(i,"network-request-failed"))},timeout:Zh.get()})}if(ce().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ce().gapi?.load)r();else{const o=ah("iframefcb");return ce()[o]=()=>{gapi.load?r():n(te(i,"network-request-failed"))},sh(`${oh()}?onload=${o}`).catch(h=>n(h))}}).catch(e=>{throw on=null,e})}let on=null;function tl(i){return on=on||el(i),on}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Ut(5e3,15e3),il="__/auth/iframe",rl="emulator/auth/iframe",sl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ol=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function al(i){const e=i.config;b(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?yi(e,rl):`https://${i.config.authDomain}/${il}`,r={apiKey:e.apiKey,appName:i.name,v:ht},o=ol.get(i.config.apiHost);o&&(r.eid=o);const h=i._getFrameworks();return h.length&&(r.fw=h.join(",")),`${n}?${Mt(r).slice(1)}`}async function cl(i){const e=await tl(i),n=ce().gapi;return b(n,i,"internal-error"),e.open({where:document.body,url:al(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sl,dontclear:!0},r=>new Promise(async(o,h)=>{await r.restyle({setHideOnLeave:!1});const l=te(i,"network-request-failed"),w=ce().setTimeout(()=>{h(l)},nl.get());function v(){ce().clearTimeout(w),o(r)}r.ping(v).then(v,()=>{h(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ll=500,ul=600,dl="_blank",fl="http://localhost";class Qr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pl(i,e,n,r=ll,o=ul){const h=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let w="";const v={...hl,width:r.toString(),height:o.toString(),top:h,left:l},E=q().toLowerCase();n&&(w=js(E)?dl:n),Fs(E)&&(e=e||fl,v.scrollbars="yes");const A=Object.entries(v).reduce((L,[H,x])=>`${L}${H}=${x},`,"");if(Yc(E)&&w!=="_self")return gl(e||"",w),new Qr(null);const S=window.open(e||"",w,A);b(S,i,"popup-blocked");try{S.focus()}catch{}return new Qr(S)}function gl(i,e){const n=document.createElement("a");n.href=i,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="__/auth/handler",_l="emulator/auth/handler",yl=encodeURIComponent("fac");async function Zr(i,e,n,r,o,h){b(i.config.authDomain,i,"auth-domain-config-required"),b(i.config.apiKey,i,"invalid-api-key");const l={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:r,v:ht,eventId:o};if(e instanceof Ti){e.setDefaultLanguage(i.languageCode),l.providerId=e.providerId||"",_a(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,S]of Object.entries({}))l[A]=S}if(e instanceof xt){const A=e.getScopes().filter(S=>S!=="");A.length>0&&(l.scopes=A.join(","))}i.tenantId&&(l.tid=i.tenantId);const w=l;for(const A of Object.keys(w))w[A]===void 0&&delete w[A];const v=await i._getAppCheckToken(),E=v?`#${yl}=${encodeURIComponent(v)}`:"";return`${Il(i)}?${Mt(w).slice(1)}${E}`}function Il({config:i}){return i.emulator?yi(i,_l):`https://${i.authDomain}/${ml}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="webStorageSupport";class wl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zs,this._completeRedirectFn=Wh,this._overrideRedirectResult=Bh}async _openPopup(e,n,r,o){pe(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const h=await Zr(e,n,r,ai(),o);return pl(e,h,Si())}async _openRedirect(e,n,r,o){await this._originValidation(e);const h=await Zr(e,n,r,ai(),o);return Sh(h),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:h}=this.eventManagers[n];return o?Promise.resolve(o):(pe(h,"If manager is not set, promise should be"),h)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cl(e),r=new Gh(e);return n.register("authEvent",o=>(b(o?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zn,{type:Zn},o=>{const h=o?.[0]?.[Zn];h!==void 0&&n(!!h),he(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zs()||Vs()||vi()}}const vl=wl;var es="@firebase/auth",ts="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sl(i){ot(new Ke("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:l,authDomain:w}=r.options;b(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const v={apiKey:l,authDomain:w,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gs(i)},E=new ih(r,o,h,v);return hh(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ot(new Ke("auth-internal",e=>{const n=yn(e.getProvider("auth").getImmediate());return(r=>new El(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oe(es,ts,Tl(i)),Oe(es,ts,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=5*60,bl=Ss("authIdTokenMaxAge")||Al;let ns=null;const Pl=i=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bl)return;const o=n?.token;ns!==o&&(ns=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function du(i=Rs()){const e=gi(i,"auth");if(e.isInitialized())return e.getImmediate();const n=ch(i,{popupRedirectResolver:vl,persistence:[Oh,vh,Zs]}),r=Ss("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const h=new URL(r,location.origin);if(location.origin===h.origin){const l=Pl(h.toString());yh(n,l,()=>l(n.currentUser)),_h(n,w=>l(w))}}const o=Es("auth");return o&&lh(n,`http://${o}`),n}function Rl(){return document.getElementsByTagName("head")?.[0]??document}rh({loadJS(i){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=e,r.onerror=o=>{const h=te("internal-error");h.customData=o,n(h)},r.type="text/javascript",r.charset="UTF-8",Rl().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sl("Browser");var is=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bi;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,u){function f(){}f.prototype=u.prototype,g.F=u.prototype,g.prototype=new f,g.prototype.constructor=g,g.D=function(m,p,y){for(var d=Array(arguments.length-2),K=2;K<arguments.length;K++)d[K-2]=arguments[K];return u.prototype[p].apply(m,d)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(g,u,f){f||(f=0);const m=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)m[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)m[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=g.g[0],f=g.g[1],p=g.g[2];let y=g.g[3],d;d=u+(y^f&(p^y))+m[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(p^u&(f^p))+m[1]+3905402710&4294967295,y=u+(d<<12&4294967295|d>>>20),d=p+(f^y&(u^f))+m[2]+606105819&4294967295,p=y+(d<<17&4294967295|d>>>15),d=f+(u^p&(y^u))+m[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(y^f&(p^y))+m[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(p^u&(f^p))+m[5]+1200080426&4294967295,y=u+(d<<12&4294967295|d>>>20),d=p+(f^y&(u^f))+m[6]+2821735955&4294967295,p=y+(d<<17&4294967295|d>>>15),d=f+(u^p&(y^u))+m[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(y^f&(p^y))+m[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(p^u&(f^p))+m[9]+2336552879&4294967295,y=u+(d<<12&4294967295|d>>>20),d=p+(f^y&(u^f))+m[10]+4294925233&4294967295,p=y+(d<<17&4294967295|d>>>15),d=f+(u^p&(y^u))+m[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(y^f&(p^y))+m[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(p^u&(f^p))+m[13]+4254626195&4294967295,y=u+(d<<12&4294967295|d>>>20),d=p+(f^y&(u^f))+m[14]+2792965006&4294967295,p=y+(d<<17&4294967295|d>>>15),d=f+(u^p&(y^u))+m[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^y&(f^p))+m[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^p&(u^f))+m[6]+3225465664&4294967295,y=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(y^u))+m[11]+643717713&4294967295,p=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(p^y))+m[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^y&(f^p))+m[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^p&(u^f))+m[10]+38016083&4294967295,y=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(y^u))+m[15]+3634488961&4294967295,p=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(p^y))+m[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^y&(f^p))+m[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^p&(u^f))+m[14]+3275163606&4294967295,y=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(y^u))+m[3]+4107603335&4294967295,p=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(p^y))+m[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^y&(f^p))+m[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^p&(u^f))+m[2]+4243563512&4294967295,y=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(y^u))+m[7]+1735328473&4294967295,p=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(p^y))+m[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^y)+m[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^p)+m[8]+2272392833&4294967295,y=u+(d<<11&4294967295|d>>>21),d=p+(y^u^f)+m[11]+1839030562&4294967295,p=y+(d<<16&4294967295|d>>>16),d=f+(p^y^u)+m[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^y)+m[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^p)+m[4]+1272893353&4294967295,y=u+(d<<11&4294967295|d>>>21),d=p+(y^u^f)+m[7]+4139469664&4294967295,p=y+(d<<16&4294967295|d>>>16),d=f+(p^y^u)+m[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^y)+m[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^p)+m[0]+3936430074&4294967295,y=u+(d<<11&4294967295|d>>>21),d=p+(y^u^f)+m[3]+3572445317&4294967295,p=y+(d<<16&4294967295|d>>>16),d=f+(p^y^u)+m[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^y)+m[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^p)+m[12]+3873151461&4294967295,y=u+(d<<11&4294967295|d>>>21),d=p+(y^u^f)+m[15]+530742520&4294967295,p=y+(d<<16&4294967295|d>>>16),d=f+(p^y^u)+m[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~y))+m[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~p))+m[7]+1126891415&4294967295,y=u+(d<<10&4294967295|d>>>22),d=p+(u^(y|~f))+m[14]+2878612391&4294967295,p=y+(d<<15&4294967295|d>>>17),d=f+(y^(p|~u))+m[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~y))+m[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~p))+m[3]+2399980690&4294967295,y=u+(d<<10&4294967295|d>>>22),d=p+(u^(y|~f))+m[10]+4293915773&4294967295,p=y+(d<<15&4294967295|d>>>17),d=f+(y^(p|~u))+m[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~y))+m[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~p))+m[15]+4264355552&4294967295,y=u+(d<<10&4294967295|d>>>22),d=p+(u^(y|~f))+m[6]+2734768916&4294967295,p=y+(d<<15&4294967295|d>>>17),d=f+(y^(p|~u))+m[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~y))+m[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~p))+m[11]+3174756917&4294967295,y=u+(d<<10&4294967295|d>>>22),d=p+(u^(y|~f))+m[2]+718787259&4294967295,p=y+(d<<15&4294967295|d>>>17),d=f+(y^(p|~u))+m[9]+3951481745&4294967295,g.g[0]=g.g[0]+u&4294967295,g.g[1]=g.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+y&4294967295}r.prototype.v=function(g,u){u===void 0&&(u=g.length);const f=u-this.blockSize,m=this.C;let p=this.h,y=0;for(;y<u;){if(p==0)for(;y<=f;)o(this,g,y),y+=this.blockSize;if(typeof g=="string"){for(;y<u;)if(m[p++]=g.charCodeAt(y++),p==this.blockSize){o(this,m),p=0;break}}else for(;y<u;)if(m[p++]=g[y++],p==this.blockSize){o(this,m),p=0;break}}this.h=p,this.o+=u},r.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var u=1;u<g.length-8;++u)g[u]=0;u=this.o*8;for(var f=g.length-8;f<g.length;++f)g[f]=u&255,u/=256;for(this.v(g),g=Array(16),u=0,f=0;f<4;++f)for(let m=0;m<32;m+=8)g[u++]=this.g[f]>>>m&255;return g};function h(g,u){var f=w;return Object.prototype.hasOwnProperty.call(f,g)?f[g]:f[g]=u(g)}function l(g,u){this.h=u;const f=[];let m=!0;for(let p=g.length-1;p>=0;p--){const y=g[p]|0;m&&y==u||(f[p]=y,m=!1)}this.g=f}var w={};function v(g){return-128<=g&&g<128?h(g,function(u){return new l([u|0],u<0?-1:0)}):new l([g|0],g<0?-1:0)}function E(g){if(isNaN(g)||!isFinite(g))return S;if(g<0)return M(E(-g));const u=[];let f=1;for(let m=0;g>=f;m++)u[m]=g/f|0,f*=4294967296;return new l(u,0)}function A(g,u){if(g.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(g.charAt(0)=="-")return M(A(g.substring(1),u));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=E(Math.pow(u,8));let m=S;for(let y=0;y<g.length;y+=8){var p=Math.min(8,g.length-y);const d=parseInt(g.substring(y,y+p),u);p<8?(p=E(Math.pow(u,p)),m=m.j(p).add(E(d))):(m=m.j(f),m=m.add(E(d)))}return m}var S=v(0),L=v(1),H=v(16777216);i=l.prototype,i.m=function(){if(B(this))return-M(this).m();let g=0,u=1;for(let f=0;f<this.g.length;f++){const m=this.i(f);g+=(m>=0?m:4294967296+m)*u,u*=4294967296}return g},i.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(x(this))return"0";if(B(this))return"-"+M(this).toString(g);const u=E(Math.pow(g,6));var f=this;let m="";for(;;){const p=Ye(f,u).g;f=ne(f,p.j(u));let y=((f.g.length>0?f.g[0]:f.h)>>>0).toString(g);if(f=p,x(f))return y+m;for(;y.length<6;)y="0"+y;m=y+m}},i.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function x(g){if(g.h!=0)return!1;for(let u=0;u<g.g.length;u++)if(g.g[u]!=0)return!1;return!0}function B(g){return g.h==-1}i.l=function(g){return g=ne(this,g),B(g)?-1:x(g)?0:1};function M(g){const u=g.g.length,f=[];for(let m=0;m<u;m++)f[m]=~g.g[m];return new l(f,~g.h).add(L)}i.abs=function(){return B(this)?M(this):this},i.add=function(g){const u=Math.max(this.g.length,g.g.length),f=[];let m=0;for(let p=0;p<=u;p++){let y=m+(this.i(p)&65535)+(g.i(p)&65535),d=(y>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);m=d>>>16,y&=65535,d&=65535,f[p]=d<<16|y}return new l(f,f[f.length-1]&-2147483648?-1:0)};function ne(g,u){return g.add(M(u))}i.j=function(g){if(x(this)||x(g))return S;if(B(this))return B(g)?M(this).j(M(g)):M(M(this).j(g));if(B(g))return M(this.j(M(g)));if(this.l(H)<0&&g.l(H)<0)return E(this.m()*g.m());const u=this.g.length+g.g.length,f=[];for(var m=0;m<2*u;m++)f[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<g.g.length;p++){const y=this.i(m)>>>16,d=this.i(m)&65535,K=g.i(p)>>>16,Me=g.i(p)&65535;f[2*m+2*p]+=d*Me,_e(f,2*m+2*p),f[2*m+2*p+1]+=y*Me,_e(f,2*m+2*p+1),f[2*m+2*p+1]+=d*K,_e(f,2*m+2*p+1),f[2*m+2*p+2]+=y*K,_e(f,2*m+2*p+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new l(f,0)};function _e(g,u){for(;(g[u]&65535)!=g[u];)g[u+1]+=g[u]>>>16,g[u]&=65535,u++}function ye(g,u){this.g=g,this.h=u}function Ye(g,u){if(x(u))throw Error("division by zero");if(x(g))return new ye(S,S);if(B(g))return u=Ye(M(g),u),new ye(M(u.g),M(u.h));if(B(u))return u=Ye(g,M(u)),new ye(M(u.g),u.h);if(g.g.length>30){if(B(g)||B(u))throw Error("slowDivide_ only works with positive integers.");for(var f=L,m=u;m.l(g)<=0;)f=Ie(f),m=Ie(m);var p=J(f,1),y=J(m,1);for(m=J(m,2),f=J(f,2);!x(m);){var d=y.add(m);d.l(g)<=0&&(p=p.add(f),y=d),m=J(m,1),f=J(f,1)}return u=ne(g,p.j(u)),new ye(p,u)}for(p=S;g.l(u)>=0;){for(f=Math.max(1,Math.floor(g.m()/u.m())),m=Math.ceil(Math.log(f)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),y=E(f),d=y.j(u);B(d)||d.l(g)>0;)f-=m,y=E(f),d=y.j(u);x(y)&&(y=L),p=p.add(y),g=ne(g,d)}return new ye(p,g)}i.B=function(g){return Ye(this,g).h},i.and=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)&g.i(m);return new l(f,this.h&g.h)},i.or=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)|g.i(m);return new l(f,this.h|g.h)},i.xor=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)^g.i(m);return new l(f,this.h^g.h)};function Ie(g){const u=g.g.length+1,f=[];for(let m=0;m<u;m++)f[m]=g.i(m)<<1|g.i(m-1)>>>31;return new l(f,g.h)}function J(g,u){const f=u>>5;u%=32;const m=g.g.length-f,p=[];for(let y=0;y<m;y++)p[y]=u>0?g.i(y+f)>>>u|g.i(y+f+1)<<32-u:g.i(y+f);return new l(p,g.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=A,bi=l}).apply(typeof is<"u"?is:typeof self<"u"?self:typeof window<"u"?window:{});var en=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,e=Object.defineProperty;function n(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof en=="object"&&en];for(var s=0;s<t.length;++s){var a=t[s];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=n(this);function o(t,s){if(s)e:{var a=r;t=t.split(".");for(var c=0;c<t.length-1;c++){var _=t[c];if(!(_ in a))break e;a=a[_]}t=t[t.length-1],c=a[t],s=s(c),s!=c&&s!=null&&e(a,t,{configurable:!0,writable:!0,value:s})}}o("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(t){return t||function(s){var a=[],c;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&a.push([c,s[c]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},l=this||self;function w(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function v(t,s,a){return t.call.apply(t.bind,arguments)}function E(t,s,a){return E=v,E.apply(null,arguments)}function A(t,s){var a=Array.prototype.slice.call(arguments,1);return function(){var c=a.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function S(t,s){function a(){}a.prototype=s.prototype,t.Z=s.prototype,t.prototype=new a,t.prototype.constructor=t,t.Ob=function(c,_,I){for(var T=Array(arguments.length-2),P=2;P<arguments.length;P++)T[P-2]=arguments[P];return s.prototype[_].apply(c,T)}}var L=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function H(t){const s=t.length;if(s>0){const a=Array(s);for(let c=0;c<s;c++)a[c]=t[c];return a}return[]}function x(t,s){for(let c=1;c<arguments.length;c++){const _=arguments[c];var a=typeof _;if(a=a!="object"?a:_?Array.isArray(_)?"array":a:"null",a=="array"||a=="object"&&typeof _.length=="number"){a=t.length||0;const I=_.length||0;t.length=a+I;for(let T=0;T<I;T++)t[a+T]=_[T]}else t.push(_)}}class B{constructor(s,a){this.i=s,this.j=a,this.h=0,this.g=null}get(){let s;return this.h>0?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function M(t){l.setTimeout(()=>{throw t},0)}function ne(){var t=g;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class _e{constructor(){this.h=this.g=null}add(s,a){const c=ye.get();c.set(s,a),this.h?this.h.next=c:this.g=c,this.h=c}}var ye=new B(()=>new Ye,t=>t.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(s,a){this.h=s,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,J=!1,g=new _e,u=()=>{const t=Promise.resolve(void 0);Ie=()=>{t.then(f)}};function f(){for(var t;t=ne();){try{t.h.call(t.g)}catch(a){M(a)}var s=ye;s.j(t),s.h<100&&(s.h++,t.next=s.g,s.g=t)}J=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var y=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const a=()=>{};l.addEventListener("test",a,s),l.removeEventListener("test",a,s)}catch{}return t}();function d(t){return/^[\s\xa0]*$/.test(t)}function K(t,s){p.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,s)}S(K,p),K.prototype.init=function(t,s){const a=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget,s||(a=="mouseover"?s=t.fromElement:a=="mouseout"&&(s=t.toElement)),this.relatedTarget=s,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&K.Z.h.call(this)},K.prototype.h=function(){K.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Me="closure_listenable_"+(Math.random()*1e6|0),mo=0;function _o(t,s,a,c,_){this.listener=t,this.proxy=null,this.src=s,this.type=a,this.capture=!!c,this.ha=_,this.key=++mo,this.da=this.fa=!1}function Bt(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ht(t,s,a){for(const c in t)s.call(a,t[c],c,t)}function yo(t,s){for(const a in t)s.call(void 0,t[a],a,t)}function Ni(t){const s={};for(const a in t)s[a]=t[a];return s}const Di="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Oi(t,s){let a,c;for(let _=1;_<arguments.length;_++){c=arguments[_];for(a in c)t[a]=c[a];for(let I=0;I<Di.length;I++)a=Di[I],Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a])}}function $t(t){this.src=t,this.g={},this.h=0}$t.prototype.add=function(t,s,a,c,_){const I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);const T=En(t,s,c,_);return T>-1?(s=t[T],a||(s.fa=!1)):(s=new _o(s,this.src,I,!!c,_),s.fa=a,t.push(s)),s};function vn(t,s){const a=s.type;if(a in t.g){var c=t.g[a],_=Array.prototype.indexOf.call(c,s,void 0),I;(I=_>=0)&&Array.prototype.splice.call(c,_,1),I&&(Bt(s),t.g[a].length==0&&(delete t.g[a],t.h--))}}function En(t,s,a,c){for(let _=0;_<t.length;++_){const I=t[_];if(!I.da&&I.listener==s&&I.capture==!!a&&I.ha==c)return _}return-1}var Tn="closure_lm_"+(Math.random()*1e6|0),Sn={};function Li(t,s,a,c,_){if(Array.isArray(s)){for(let I=0;I<s.length;I++)Li(t,s[I],a,c,_);return null}return a=xi(a),t&&t[Me]?t.J(s,a,w(c)?!!c.capture:!1,_):Io(t,s,a,!1,c,_)}function Io(t,s,a,c,_,I){if(!s)throw Error("Invalid event type");const T=w(_)?!!_.capture:!!_;let P=bn(t);if(P||(t[Tn]=P=new $t(t)),a=P.add(s,a,c,T,I),a.proxy)return a;if(c=wo(),a.proxy=c,c.src=t,c.listener=a,t.addEventListener)y||(_=T),_===void 0&&(_=!1),t.addEventListener(s.toString(),c,_);else if(t.attachEvent)t.attachEvent(Ui(s.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return a}function wo(){function t(a){return s.call(t.src,t.listener,a)}const s=vo;return t}function Mi(t,s,a,c,_){if(Array.isArray(s))for(var I=0;I<s.length;I++)Mi(t,s[I],a,c,_);else c=w(c)?!!c.capture:!!c,a=xi(a),t&&t[Me]?(t=t.i,I=String(s).toString(),I in t.g&&(s=t.g[I],a=En(s,a,c,_),a>-1&&(Bt(s[a]),Array.prototype.splice.call(s,a,1),s.length==0&&(delete t.g[I],t.h--)))):t&&(t=bn(t))&&(s=t.g[s.toString()],t=-1,s&&(t=En(s,a,c,_)),(a=t>-1?s[t]:null)&&An(a))}function An(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[Me])vn(s.i,t);else{var a=t.type,c=t.proxy;s.removeEventListener?s.removeEventListener(a,c,t.capture):s.detachEvent?s.detachEvent(Ui(a),c):s.addListener&&s.removeListener&&s.removeListener(c),(a=bn(s))?(vn(a,t),a.h==0&&(a.src=null,s[Tn]=null)):Bt(t)}}}function Ui(t){return t in Sn?Sn[t]:Sn[t]="on"+t}function vo(t,s){if(t.da)t=!0;else{s=new K(s,this);const a=t.listener,c=t.ha||t.src;t.fa&&An(t),t=a.call(c,s)}return t}function bn(t){return t=t[Tn],t instanceof $t?t:null}var Pn="__closure_events_fn_"+(Math.random()*1e9>>>0);function xi(t){return typeof t=="function"?t:(t[Pn]||(t[Pn]=function(s){return t.handleEvent(s)}),t[Pn])}function $(){m.call(this),this.i=new $t(this),this.M=this,this.G=null}S($,m),$.prototype[Me]=!0,$.prototype.removeEventListener=function(t,s,a,c){Mi(this,t,s,a,c)};function W(t,s){var a,c=t.G;if(c)for(a=[];c;c=c.G)a.push(c);if(t=t.M,c=s.type||s,typeof s=="string")s=new p(s,t);else if(s instanceof p)s.target=s.target||t;else{var _=s;s=new p(c,t),Oi(s,_)}_=!0;let I,T;if(a)for(T=a.length-1;T>=0;T--)I=s.g=a[T],_=Wt(I,c,!0,s)&&_;if(I=s.g=t,_=Wt(I,c,!0,s)&&_,_=Wt(I,c,!1,s)&&_,a)for(T=0;T<a.length;T++)I=s.g=a[T],_=Wt(I,c,!1,s)&&_}$.prototype.N=function(){if($.Z.N.call(this),this.i){var t=this.i;for(const s in t.g){const a=t.g[s];for(let c=0;c<a.length;c++)Bt(a[c]);delete t.g[s],t.h--}}this.G=null},$.prototype.J=function(t,s,a,c){return this.i.add(String(t),s,!1,a,c)},$.prototype.K=function(t,s,a,c){return this.i.add(String(t),s,!0,a,c)};function Wt(t,s,a,c){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();let _=!0;for(let I=0;I<s.length;++I){const T=s[I];if(T&&!T.da&&T.capture==a){const P=T.listener,V=T.ha||T.src;T.fa&&vn(t.i,T),_=P.call(V,c)!==!1&&_}}return _&&!c.defaultPrevented}function Eo(t,s){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=E(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(s)>2147483647?-1:l.setTimeout(t,s||0)}function Fi(t){t.g=Eo(()=>{t.g=null,t.i&&(t.i=!1,Fi(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class To extends m{constructor(s,a){super(),this.m=s,this.l=a,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Fi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(t){m.call(this),this.h=t,this.g={}}S(ut,m);var Vi=[];function ji(t){Ht(t.g,function(s,a){this.g.hasOwnProperty(a)&&An(s)},t),t.g={}}ut.prototype.N=function(){ut.Z.N.call(this),ji(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rn=l.JSON.stringify,So=l.JSON.parse,Ao=class{stringify(t){return l.JSON.stringify(t,void 0)}parse(t){return l.JSON.parse(t,void 0)}};function Bi(){}function bo(){}var dt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Cn(){p.call(this,"d")}S(Cn,p);function kn(){p.call(this,"c")}S(kn,p);var Qe={},Hi=null;function Nn(){return Hi=Hi||new $}Qe.Ia="serverreachability";function $i(t){p.call(this,Qe.Ia,t)}S($i,p);function ft(t){const s=Nn();W(s,new $i(s))}Qe.STAT_EVENT="statevent";function Wi(t,s){p.call(this,Qe.STAT_EVENT,t),this.stat=s}S(Wi,p);function z(t){const s=Nn();W(s,new Wi(s,t))}Qe.Ja="timingevent";function zi(t,s){p.call(this,Qe.Ja,t),this.size=s}S(zi,p);function pt(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){t()},s)}function gt(){this.g=!0}gt.prototype.ua=function(){this.g=!1};function Po(t,s,a,c,_,I){t.info(function(){if(t.g)if(I){var T="",P=I.split("&");for(let D=0;D<P.length;D++){var V=P[D].split("=");if(V.length>1){const j=V[0];V=V[1];const re=j.split("_");T=re.length>=2&&re[1]=="type"?T+(j+"="+V+"&"):T+(j+"=redacted&")}}}else T=null;else T=I;return"XMLHTTP REQ ("+c+") [attempt "+_+"]: "+s+`
`+a+`
`+T})}function Ro(t,s,a,c,_,I,T){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+_+"]: "+s+`
`+a+`
`+I+" "+T})}function Ze(t,s,a,c){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+ko(t,a)+(c?" "+c:"")})}function Co(t,s){t.info(function(){return"TIMEOUT: "+s})}gt.prototype.info=function(){};function ko(t,s){if(!t.g)return s;if(!s)return null;try{const I=JSON.parse(s);if(I){for(t=0;t<I.length;t++)if(Array.isArray(I[t])){var a=I[t];if(!(a.length<2)){var c=a[1];if(Array.isArray(c)&&!(c.length<1)){var _=c[0];if(_!="noop"&&_!="stop"&&_!="close")for(let T=1;T<c.length;T++)c[T]=""}}}}return Rn(I)}catch{return s}}var Dn={NO_ERROR:0,TIMEOUT:8},No={},Gi;function On(){}S(On,Bi),On.prototype.g=function(){return new XMLHttpRequest},Gi=new On;function mt(t){return encodeURIComponent(String(t))}function Do(t){var s=1;t=t.split(":");const a=[];for(;s>0&&t.length;)a.push(t.shift()),s--;return t.length&&a.push(t.join(":")),a}function we(t,s,a,c){this.j=t,this.i=s,this.l=a,this.S=c||1,this.V=new ut(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qi}function qi(){this.i=null,this.g="",this.h=!1}var Ki={},Ln={};function Mn(t,s,a){t.M=1,t.A=Gt(ie(s)),t.u=a,t.R=!0,Ji(t,null)}function Ji(t,s){t.F=Date.now(),zt(t),t.B=ie(t.A);var a=t.B,c=t.S;Array.isArray(c)||(c=[String(c)]),cr(a.i,"t",c),t.C=0,a=t.j.L,t.h=new qi,t.g=br(t.j,a?s:null,!t.u),t.P>0&&(t.O=new To(E(t.Y,t,t.g),t.P)),s=t.V,a=t.g,c=t.ba;var _="readystatechange";Array.isArray(_)||(_&&(Vi[0]=_.toString()),_=Vi);for(let I=0;I<_.length;I++){const T=Li(a,_[I],c||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.J?Ni(t.J):{},t.u?(t.v||(t.v="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,s)):(t.v="GET",t.g.ea(t.B,t.v,null,s)),ft(),Po(t.i,t.v,t.B,t.l,t.S,t.u)}we.prototype.ba=function(t){t=t.target;const s=this.O;s&&Te(t)==3?s.j():this.Y(t)},we.prototype.Y=function(t){try{if(t==this.g)e:{const P=Te(this.g),V=this.g.ya(),D=this.g.ca();if(!(P<3)&&(P!=3||this.g&&(this.h.h||this.g.la()||gr(this.g)))){this.K||P!=4||V==7||(V==8||D<=0?ft(3):ft(2)),Un(this);var s=this.g.ca();this.X=s;var a=Oo(this);if(this.o=s==200,Ro(this.i,this.v,this.B,this.l,this.S,P,s),this.o){if(this.U&&!this.L){t:{if(this.g){var c,_=this.g;if((c=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(c)){var I=c;break t}}I=null}if(t=I)Ze(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,xn(this,t);else{this.o=!1,this.m=3,z(12),Ue(this),_t(this);break e}}if(this.R){t=!0;let j;for(;!this.K&&this.C<a.length;)if(j=Lo(this,a),j==Ln){P==4&&(this.m=4,z(14),t=!1),Ze(this.i,this.l,null,"[Incomplete Response]");break}else if(j==Ki){this.m=4,z(15),Ze(this.i,this.l,a,"[Invalid Chunk]"),t=!1;break}else Ze(this.i,this.l,j,null),xn(this,j);if(Xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),P!=4||a.length!=0||this.h.h||(this.m=1,z(16),t=!1),this.o=this.o&&t,!t)Ze(this.i,this.l,a,"[Invalid Chunked Response]"),Ue(this),_t(this);else if(a.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),zn(T),T.P=!0,z(11))}}else Ze(this.i,this.l,a,null),xn(this,a);P==4&&Ue(this),this.o&&!this.K&&(P==4?Er(this.j,this):(this.o=!1,zt(this)))}else Ko(this.g),s==400&&a.indexOf("Unknown SID")>0?(this.m=3,z(12)):(this.m=0,z(13)),Ue(this),_t(this)}}}catch{}finally{}};function Oo(t){if(!Xi(t))return t.g.la();const s=gr(t.g);if(s==="")return"";let a="";const c=s.length,_=Te(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return Ue(t),_t(t),"";t.h.i=new l.TextDecoder}for(let I=0;I<c;I++)t.h.h=!0,a+=t.h.i.decode(s[I],{stream:!(_&&I==c-1)});return s.length=0,t.h.g+=a,t.C=0,t.h.g}function Xi(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function Lo(t,s){var a=t.C,c=s.indexOf(`
`,a);return c==-1?Ln:(a=Number(s.substring(a,c)),isNaN(a)?Ki:(c+=1,c+a>s.length?Ln:(s=s.slice(c,c+a),t.C=c+a,s)))}we.prototype.cancel=function(){this.K=!0,Ue(this)};function zt(t){t.T=Date.now()+t.H,Yi(t,t.H)}function Yi(t,s){if(t.D!=null)throw Error("WatchDog timer not null");t.D=pt(E(t.aa,t),s)}function Un(t){t.D&&(l.clearTimeout(t.D),t.D=null)}we.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Co(this.i,this.B),this.M!=2&&(ft(),z(17)),Ue(this),this.m=2,_t(this)):Yi(this,this.T-t)};function _t(t){t.j.I==0||t.K||Er(t.j,t)}function Ue(t){Un(t);var s=t.O;s&&typeof s.dispose=="function"&&s.dispose(),t.O=null,ji(t.V),t.g&&(s=t.g,t.g=null,s.abort(),s.dispose())}function xn(t,s){try{var a=t.j;if(a.I!=0&&(a.g==t||Fn(a.h,t))){if(!t.L&&Fn(a.h,t)&&a.I==3){try{var c=a.Ba.g.parse(s)}catch{c=null}if(Array.isArray(c)&&c.length==3){var _=c;if(_[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<t.F)Yt(a),Jt(a);else break e;Wn(a),z(18)}}else a.xa=_[1],0<a.xa-a.K&&_[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=pt(E(a.Va,a),6e3));er(a.h)<=1&&a.ta&&(a.ta=void 0)}else Fe(a,11)}else if((t.L||a.g==t)&&Yt(a),!d(s))for(_=a.Ba.g.parse(s),s=0;s<_.length;s++){let D=_[s];const j=D[0];if(!(j<=a.K))if(a.K=j,D=D[1],a.I==2)if(D[0]=="c"){a.M=D[1],a.ba=D[2];const re=D[3];re!=null&&(a.ka=re,a.j.info("VER="+a.ka));const Ve=D[4];Ve!=null&&(a.za=Ve,a.j.info("SVER="+a.za));const Se=D[5];Se!=null&&typeof Se=="number"&&Se>0&&(c=1.5*Se,a.O=c,a.j.info("backChannelRequestTimeoutMs_="+c)),c=a;const Ae=t.g;if(Ae){const Qt=Ae.g?Ae.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qt){var I=c.h;I.g||Qt.indexOf("spdy")==-1&&Qt.indexOf("quic")==-1&&Qt.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Vn(I,I.h),I.h=null))}if(c.G){const Gn=Ae.g?Ae.g.getResponseHeader("X-HTTP-Session-Id"):null;Gn&&(c.wa=Gn,O(c.J,c.G,Gn))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-t.F,a.j.info("Handshake RTT: "+a.T+"ms")),c=a;var T=t;if(c.na=Ar(c,c.L?c.ba:null,c.W),T.L){tr(c.h,T);var P=T,V=c.O;V&&(P.H=V),P.D&&(Un(P),zt(P)),c.g=T}else wr(c);a.i.length>0&&Xt(a)}else D[0]!="stop"&&D[0]!="close"||Fe(a,7);else a.I==3&&(D[0]=="stop"||D[0]=="close"?D[0]=="stop"?Fe(a,7):$n(a):D[0]!="noop"&&a.l&&a.l.qa(D),a.A=0)}}ft(4)}catch{}}var Mo=class{constructor(t,s){this.g=t,this.map=s}};function Qi(t){this.l=t||10,l.PerformanceNavigationTiming?(t=l.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zi(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function er(t){return t.h?1:t.g?t.g.size:0}function Fn(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function Vn(t,s){t.g?t.g.add(s):t.h=s}function tr(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}Qi.prototype.cancel=function(){if(this.i=nr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nr(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const a of t.g.values())s=s.concat(a.G);return s}return H(t.i)}var ir=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uo(t,s){if(t){t=t.split("&");for(let a=0;a<t.length;a++){const c=t[a].indexOf("=");let _,I=null;c>=0?(_=t[a].substring(0,c),I=t[a].substring(c+1)):_=t[a],s(_,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ve(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let s;t instanceof ve?(this.l=t.l,yt(this,t.j),this.o=t.o,this.g=t.g,It(this,t.u),this.h=t.h,jn(this,hr(t.i)),this.m=t.m):t&&(s=String(t).match(ir))?(this.l=!1,yt(this,s[1]||"",!0),this.o=wt(s[2]||""),this.g=wt(s[3]||"",!0),It(this,s[4]),this.h=wt(s[5]||"",!0),jn(this,s[6]||"",!0),this.m=wt(s[7]||"")):(this.l=!1,this.i=new Et(null,this.l))}ve.prototype.toString=function(){const t=[];var s=this.j;s&&t.push(vt(s,rr,!0),":");var a=this.g;return(a||s=="file")&&(t.push("//"),(s=this.o)&&t.push(vt(s,rr,!0),"@"),t.push(mt(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&t.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&t.push("/"),t.push(vt(a,a.charAt(0)=="/"?Vo:Fo,!0))),(a=this.i.toString())&&t.push("?",a),(a=this.m)&&t.push("#",vt(a,Bo)),t.join("")},ve.prototype.resolve=function(t){const s=ie(this);let a=!!t.j;a?yt(s,t.j):a=!!t.o,a?s.o=t.o:a=!!t.g,a?s.g=t.g:a=t.u!=null;var c=t.h;if(a)It(s,t.u);else if(a=!!t.h){if(c.charAt(0)!="/")if(this.g&&!this.h)c="/"+c;else{var _=s.h.lastIndexOf("/");_!=-1&&(c=s.h.slice(0,_+1)+c)}if(_=c,_==".."||_==".")c="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){c=_.lastIndexOf("/",0)==0,_=_.split("/");const I=[];for(let T=0;T<_.length;){const P=_[T++];P=="."?c&&T==_.length&&I.push(""):P==".."?((I.length>1||I.length==1&&I[0]!="")&&I.pop(),c&&T==_.length&&I.push("")):(I.push(P),c=!0)}c=I.join("/")}else c=_}return a?s.h=c:a=t.i.toString()!=="",a?jn(s,hr(t.i)):a=!!t.m,a&&(s.m=t.m),s};function ie(t){return new ve(t)}function yt(t,s,a){t.j=a?wt(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function It(t,s){if(s){if(s=Number(s),isNaN(s)||s<0)throw Error("Bad port number "+s);t.u=s}else t.u=null}function jn(t,s,a){s instanceof Et?(t.i=s,Ho(t.i,t.l)):(a||(s=vt(s,jo)),t.i=new Et(s,t.l))}function O(t,s,a){t.i.set(s,a)}function Gt(t){return O(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function wt(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vt(t,s,a){return typeof t=="string"?(t=encodeURI(t).replace(s,xo),a&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xo(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rr=/[#\/\?@]/g,Fo=/[#\?:]/g,Vo=/[#\?]/g,jo=/[#\?@]/g,Bo=/#/g;function Et(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function xe(t){t.g||(t.g=new Map,t.h=0,t.i&&Uo(t.i,function(s,a){t.add(decodeURIComponent(s.replace(/\+/g," ")),a)}))}i=Et.prototype,i.add=function(t,s){xe(this),this.i=null,t=et(this,t);let a=this.g.get(t);return a||this.g.set(t,a=[]),a.push(s),this.h+=1,this};function sr(t,s){xe(t),s=et(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function or(t,s){return xe(t),s=et(t,s),t.g.has(s)}i.forEach=function(t,s){xe(this),this.g.forEach(function(a,c){a.forEach(function(_){t.call(s,_,c,this)},this)},this)};function ar(t,s){xe(t);let a=[];if(typeof s=="string")or(t,s)&&(a=a.concat(t.g.get(et(t,s))));else for(t=Array.from(t.g.values()),s=0;s<t.length;s++)a=a.concat(t[s]);return a}i.set=function(t,s){return xe(this),this.i=null,t=et(this,t),or(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},i.get=function(t,s){return t?(t=ar(this,t),t.length>0?String(t[0]):s):s};function cr(t,s,a){sr(t,s),a.length>0&&(t.i=null,t.g.set(et(t,s),H(a)),t.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(let c=0;c<s.length;c++){var a=s[c];const _=mt(a);a=ar(this,a);for(let I=0;I<a.length;I++){let T=_;a[I]!==""&&(T+="="+mt(a[I])),t.push(T)}}return this.i=t.join("&")};function hr(t){const s=new Et;return s.i=t.i,t.g&&(s.g=new Map(t.g),s.h=t.h),s}function et(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function Ho(t,s){s&&!t.j&&(xe(t),t.i=null,t.g.forEach(function(a,c){const _=c.toLowerCase();c!=_&&(sr(this,c),cr(this,_,a))},t)),t.j=s}function $o(t,s){const a=new gt;if(l.Image){const c=new Image;c.onload=A(Ee,a,"TestLoadImage: loaded",!0,s,c),c.onerror=A(Ee,a,"TestLoadImage: error",!1,s,c),c.onabort=A(Ee,a,"TestLoadImage: abort",!1,s,c),c.ontimeout=A(Ee,a,"TestLoadImage: timeout",!1,s,c),l.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else s(!1)}function Wo(t,s){const a=new gt,c=new AbortController,_=setTimeout(()=>{c.abort(),Ee(a,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:c.signal}).then(I=>{clearTimeout(_),I.ok?Ee(a,"TestPingServer: ok",!0,s):Ee(a,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(_),Ee(a,"TestPingServer: error",!1,s)})}function Ee(t,s,a,c,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),c(a)}catch{}}function zo(){this.g=new Ao}function Bn(t){this.i=t.Sb||null,this.h=t.ab||!1}S(Bn,Bi),Bn.prototype.g=function(){return new qt(this.i,this.h)};function qt(t,s){$.call(this),this.H=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(qt,$),i=qt.prototype,i.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=s,this.readyState=1,St(this)},i.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const s={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(s.body=t),(this.H||l).fetch(new Request(this.D,s)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Tt(this)),this.readyState=0},i.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,St(this)),this.g&&(this.readyState=3,St(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lr(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function lr(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}i.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.B.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?Tt(this):St(this),this.readyState==3&&lr(this)}},i.Oa=function(t){this.g&&(this.response=this.responseText=t,Tt(this))},i.Na=function(t){this.g&&(this.response=t,Tt(this))},i.ga=function(){this.g&&Tt(this)};function Tt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,St(t)}i.setRequestHeader=function(t,s){this.A.append(t,s)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var a=s.next();!a.done;)a=a.value,t.push(a[0]+": "+a[1]),a=s.next();return t.join(`\r
`)};function St(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function ur(t){let s="";return Ht(t,function(a,c){s+=c,s+=":",s+=a,s+=`\r
`}),s}function Hn(t,s,a){e:{for(c in a){var c=!1;break e}c=!0}c||(a=ur(a),typeof t=="string"?a!=null&&mt(a):O(t,s,a))}function U(t){$.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(U,$);var Go=/^https?$/i,qo=["POST","PUT"];i=U.prototype,i.Fa=function(t){this.H=t},i.ea=function(t,s,a,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gi.g(),this.g.onreadystatechange=L(E(this.Ca,this));try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(I){dr(this,I);return}if(t=a||"",a=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var _ in c)a.set(_,c[_]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const I of c.keys())a.set(I,c.get(I));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),_=l.FormData&&t instanceof l.FormData,!(Array.prototype.indexOf.call(qo,s,void 0)>=0)||c||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(I){dr(this,I)}};function dr(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.o=5,fr(t),Kt(t)}function fr(t){t.A||(t.A=!0,W(t,"complete"),W(t,"error"))}i.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,W(this,"complete"),W(this,"abort"),Kt(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Kt(this,!0)),U.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?pr(this):this.Xa())},i.Xa=function(){pr(this)};function pr(t){if(t.h&&typeof h<"u"){if(t.v&&Te(t)==4)setTimeout(t.Ca.bind(t),0);else if(W(t,"readystatechange"),Te(t)==4){t.h=!1;try{const I=t.ca();e:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break e;default:s=!1}var a;if(!(a=s)){var c;if(c=I===0){let T=String(t.D).match(ir)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),c=!Go.test(T?T.toLowerCase():"")}a=c}if(a)W(t,"complete"),W(t,"success");else{t.o=6;try{var _=Te(t)>2?t.g.statusText:""}catch{_=""}t.l=_+" ["+t.ca()+"]",fr(t)}}finally{Kt(t)}}}}function Kt(t,s){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const a=t.g;t.g=null,s||W(t,"ready");try{a.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Te(t){return t.g?t.g.readyState:0}i.ca=function(){try{return Te(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),So(s)}};function gr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Ko(t){const s={};t=(t.g&&Te(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<t.length;c++){if(d(t[c]))continue;var a=Do(t[c]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=s[_]||[];s[_]=I,I.push(a)}yo(s,function(c){return c.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function At(t,s,a){return a&&a.internalChannelParams&&a.internalChannelParams[t]||s}function mr(t){this.za=0,this.i=[],this.j=new gt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=At("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=At("baseRetryDelayMs",5e3,t),this.Za=At("retryDelaySeedMs",1e4,t),this.Ta=At("forwardChannelMaxRetries",2,t),this.va=At("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new Qi(t&&t.concurrentRequestLimit),this.Ba=new zo,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=mr.prototype,i.ka=8,i.I=1,i.connect=function(t,s,a,c){z(0),this.W=t,this.H=s||{},a&&c!==void 0&&(this.H.OSID=a,this.H.OAID=c),this.F=this.X,this.J=Ar(this,null,this.W),Xt(this)};function $n(t){if(_r(t),t.I==3){var s=t.V++,a=ie(t.J);if(O(a,"SID",t.M),O(a,"RID",s),O(a,"TYPE","terminate"),bt(t,a),s=new we(t,t.j,s),s.M=2,s.A=Gt(ie(a)),a=!1,l.navigator&&l.navigator.sendBeacon)try{a=l.navigator.sendBeacon(s.A.toString(),"")}catch{}!a&&l.Image&&(new Image().src=s.A,a=!0),a||(s.g=br(s.j,null),s.g.ea(s.A)),s.F=Date.now(),zt(s)}Sr(t)}function Jt(t){t.g&&(zn(t),t.g.cancel(),t.g=null)}function _r(t){Jt(t),t.v&&(l.clearTimeout(t.v),t.v=null),Yt(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&l.clearTimeout(t.m),t.m=null)}function Xt(t){if(!Zi(t.h)&&!t.m){t.m=!0;var s=t.Ea;Ie||u(),J||(Ie(),J=!0),g.add(s,t),t.D=0}}function Jo(t,s){return er(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=s.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=pt(E(t.Ea,t,s),Tr(t,t.D)),t.D++,!0)}i.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const _=new we(this,this.j,t);let I=this.o;if(this.U&&(I?(I=Ni(I),Oi(I,this.U)):I=this.U),this.u!==null||this.R||(_.J=I,I=null),this.S)e:{for(var s=0,a=0;a<this.i.length;a++){t:{var c=this.i[a];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(s+=c,s>4096){s=a;break e}if(s===4096||a===this.i.length-1){s=a+1;break e}}s=1e3}else s=1e3;s=Ir(this,_,s),a=ie(this.J),O(a,"RID",t),O(a,"CVER",22),this.G&&O(a,"X-HTTP-Session-Id",this.G),bt(this,a),I&&(this.R?s="headers="+mt(ur(I))+"&"+s:this.u&&Hn(a,this.u,I)),Vn(this.h,_),this.Ra&&O(a,"TYPE","init"),this.S?(O(a,"$req",s),O(a,"SID","null"),_.U=!0,Mn(_,a,null)):Mn(_,a,s),this.I=2}}else this.I==3&&(t?yr(this,t):this.i.length==0||Zi(this.h)||yr(this))};function yr(t,s){var a;s?a=s.l:a=t.V++;const c=ie(t.J);O(c,"SID",t.M),O(c,"RID",a),O(c,"AID",t.K),bt(t,c),t.u&&t.o&&Hn(c,t.u,t.o),a=new we(t,t.j,a,t.D+1),t.u===null&&(a.J=t.o),s&&(t.i=s.G.concat(t.i)),s=Ir(t,a,1e3),a.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),Vn(t.h,a),Mn(a,c,s)}function bt(t,s){t.H&&Ht(t.H,function(a,c){O(s,c,a)}),t.l&&Ht({},function(a,c){O(s,c,a)})}function Ir(t,s,a){a=Math.min(t.i.length,a);const c=t.l?E(t.l.Ka,t.l,t):null;e:{var _=t.i;let P=-1;for(;;){const V=["count="+a];P==-1?a>0?(P=_[0].g,V.push("ofs="+P)):P=0:V.push("ofs="+P);let D=!0;for(let j=0;j<a;j++){var I=_[j].g;const re=_[j].map;if(I-=P,I<0)P=Math.max(0,_[j].g-100),D=!1;else try{I="req"+I+"_"||"";try{var T=re instanceof Map?re:Object.entries(re);for(const[Ve,Se]of T){let Ae=Se;w(Se)&&(Ae=Rn(Se)),V.push(I+Ve+"="+encodeURIComponent(Ae))}}catch(Ve){throw V.push(I+"type="+encodeURIComponent("_badmap")),Ve}}catch{c&&c(re)}}if(D){T=V.join("&");break e}}T=void 0}return t=t.i.splice(0,a),s.G=t,T}function wr(t){if(!t.g&&!t.v){t.Y=1;var s=t.Da;Ie||u(),J||(Ie(),J=!0),g.add(s,t),t.A=0}}function Wn(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=pt(E(t.Da,t),Tr(t,t.A)),t.A++,!0)}i.Da=function(){if(this.v=null,vr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=pt(E(this.Wa,this),t)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,z(10),Jt(this),vr(this))};function zn(t){t.B!=null&&(l.clearTimeout(t.B),t.B=null)}function vr(t){t.g=new we(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var s=ie(t.na);O(s,"RID","rpc"),O(s,"SID",t.M),O(s,"AID",t.K),O(s,"CI",t.F?"0":"1"),!t.F&&t.ia&&O(s,"TO",t.ia),O(s,"TYPE","xmlhttp"),bt(t,s),t.u&&t.o&&Hn(s,t.u,t.o),t.O&&(t.g.H=t.O);var a=t.g;t=t.ba,a.M=1,a.A=Gt(ie(s)),a.u=null,a.R=!0,Ji(a,t)}i.Va=function(){this.C!=null&&(this.C=null,Jt(this),Wn(this),z(19))};function Yt(t){t.C!=null&&(l.clearTimeout(t.C),t.C=null)}function Er(t,s){var a=null;if(t.g==s){Yt(t),zn(t),t.g=null;var c=2}else if(Fn(t.h,s))a=s.G,tr(t.h,s),c=1;else return;if(t.I!=0){if(s.o)if(c==1){a=s.u?s.u.length:0,s=Date.now()-s.F;var _=t.D;c=Nn(),W(c,new zi(c,a)),Xt(t)}else wr(t);else if(_=s.m,_==3||_==0&&s.X>0||!(c==1&&Jo(t,s)||c==2&&Wn(t)))switch(a&&a.length>0&&(s=t.h,s.i=s.i.concat(a)),_){case 1:Fe(t,5);break;case 4:Fe(t,10);break;case 3:Fe(t,6);break;default:Fe(t,2)}}}function Tr(t,s){let a=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(a*=2),a*s}function Fe(t,s){if(t.j.info("Error code "+s),s==2){var a=E(t.bb,t),c=t.Ua;const _=!c;c=new ve(c||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||yt(c,"https"),Gt(c),_?$o(c.toString(),a):Wo(c.toString(),a)}else z(2);t.I=0,t.l&&t.l.pa(s),Sr(t),_r(t)}i.bb=function(t){t?(this.j.info("Successfully pinged google.com"),z(2)):(this.j.info("Failed to ping google.com"),z(1))};function Sr(t){if(t.I=0,t.ja=[],t.l){const s=nr(t.h);(s.length!=0||t.i.length!=0)&&(x(t.ja,s),x(t.ja,t.i),t.h.i.length=0,H(t.i),t.i.length=0),t.l.oa()}}function Ar(t,s,a){var c=a instanceof ve?ie(a):new ve(a);if(c.g!="")s&&(c.g=s+"."+c.g),It(c,c.u);else{var _=l.location;c=_.protocol,s=s?s+"."+_.hostname:_.hostname,_=+_.port;const I=new ve(null);c&&yt(I,c),s&&(I.g=s),_&&It(I,_),a&&(I.h=a),c=I}return a=t.G,s=t.wa,a&&s&&O(c,a,s),O(c,"VER",t.ka),bt(t,c),c}function br(t,s,a){if(s&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Aa&&!t.ma?new U(new Bn({ab:a})):new U(t.ma),s.Fa(t.L),s}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pr(){}i=Pr.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function X(t,s){$.call(this),this.g=new mr(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.sa&&(t?t["X-WebChannel-Client-Profile"]=s.sa:t={"X-WebChannel-Client-Profile":s.sa}),this.g.U=t,(t=s&&s.Qb)&&!d(t)&&(this.g.u=t),this.A=s&&s.supportsCrossDomainXhr||!1,this.v=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!d(s)&&(this.g.G=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new tt(this)}S(X,$),X.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},X.prototype.close=function(){$n(this.g)},X.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var a={};a.__data__=t,t=a}else this.v&&(a={},a.__data__=Rn(t),t=a);s.i.push(new Mo(s.Ya++,t)),s.I==3&&Xt(s)},X.prototype.N=function(){this.g.l=null,delete this.j,$n(this.g),delete this.g,X.Z.N.call(this)};function Rr(t){Cn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){e:{for(const a in s){t=a;break e}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}S(Rr,Cn);function Cr(){kn.call(this),this.status=1}S(Cr,kn);function tt(t){this.g=t}S(tt,Pr),tt.prototype.ra=function(){W(this.g,"a")},tt.prototype.qa=function(t){W(this.g,new Rr(t))},tt.prototype.pa=function(t){W(this.g,new Cr)},tt.prototype.oa=function(){W(this.g,"b")},X.prototype.send=X.prototype.o,X.prototype.open=X.prototype.m,X.prototype.close=X.prototype.close,Dn.NO_ERROR=0,Dn.TIMEOUT=8,Dn.HTTP_ERROR=6,No.COMPLETE="complete",bo.EventType=dt,dt.OPEN="a",dt.CLOSE="b",dt.ERROR="c",dt.MESSAGE="d",$.prototype.listen=$.prototype.J,U.prototype.listenOnce=U.prototype.K,U.prototype.getLastError=U.prototype.Ha,U.prototype.getLastErrorCode=U.prototype.ya,U.prototype.getStatus=U.prototype.ca,U.prototype.getResponseJson=U.prototype.La,U.prototype.getResponseText=U.prototype.la,U.prototype.send=U.prototype.ea,U.prototype.setWithCredentials=U.prototype.Fa}).apply(typeof en<"u"?en:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt="12.12.0";function Cl(i){Vt=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new fi("@firebase/firestore");function ee(i,...e){if(ct.logLevel<=N.DEBUG){const n=e.map(Pi);ct.debug(`Firestore (${Vt}): ${i}`,...n)}}function ao(i,...e){if(ct.logLevel<=N.ERROR){const n=e.map(Pi);ct.error(`Firestore (${Vt}): ${i}`,...n)}}function kl(i,...e){if(ct.logLevel<=N.WARN){const n=e.map(Pi);ct.warn(`Firestore (${Vt}): ${i}`,...n)}}function Pi(i){if(typeof i=="string")return i;try{return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(i,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,co(i,r,n)}function co(i,e,n){let r=`FIRESTORE (${Vt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ao(r),new Error(r)}function Rt(i,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,i||co(e,o,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class k extends ge{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(G.UNAUTHENTICATED))}shutdown(){}}class Dl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ol{constructor(e){this.t=e,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Rt(this.o===void 0,42304);let r=this.i;const o=v=>this.i!==r?(r=this.i,n(v)):Promise.resolve();let h=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Ct,e.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const v=h;e.enqueueRetryable(async()=>{await v.promise,await o(this.currentUser)})},w=v=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(v=>w(v)),setTimeout(()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?w(v):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Ct)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Rt(typeof r.accessToken=="string",31837,{l:r}),new ho(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Rt(e===null||typeof e=="string",2055,{h:e}),new G(e)}}class Ll{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=G.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ml{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Ll(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(G.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ul{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Q(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Rt(this.o===void 0,3512);const r=h=>{h.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const l=h.token!==this.m;return this.m=h.token,ee("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable(()=>r(h))};const o=h=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(h=>o(h)),setTimeout(()=>{if(!this.appCheck){const h=this.V.getImmediate({optional:!0});h?o(h):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new rs(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Rt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new rs(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<i;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=xl(40);for(let h=0;h<o.length;++h)r.length<20&&o[h]<n&&(r+=e.charAt(o[h]%62))}return r}}function Le(i,e){return i<e?-1:i>e?1:0}function Vl(i,e){const n=Math.min(i.length,e.length);for(let r=0;r<n;r++){const o=i.charAt(r),h=e.charAt(r);if(o!==h)return ei(o)===ei(h)?Le(o,h):ei(o)?1:-1}return Le(i.length,e.length)}const jl=55296,Bl=57343;function ei(i){const e=i.charCodeAt(0);return e>=jl&&e<=Bl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="__name__";class se{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ot(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ot(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return se.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof se?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const h=se.compareSegments(e.get(o),n.get(o));if(h!==0)return h}return Le(e.length,n.length)}static compareSegments(e,n){const r=se.isNumericId(e),o=se.isNumericId(n);return r&&!o?-1:!r&&o?1:r&&o?se.extractNumericId(e).compare(se.extractNumericId(n)):Vl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bi.fromString(e.substring(4,e.length-2))}}class Y extends se{construct(e,n,r){return new Y(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const Hl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends se{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return Hl.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ss}static keyField(){return new Be([ss])}static fromServerFormat(e){const n=[];let r="",o=0;const h=()=>{if(r.length===0)throw new k(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let l=!1;for(;o<e.length;){const w=e[o];if(w==="\\"){if(o+1===e.length)throw new k(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const v=e[o+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new k(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=v,o+=2}else w==="`"?(l=!l,o++):w!=="."||l?(r+=w,o++):(h(),o++)}if(h(),l)throw new k(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.path=e}static fromPath(e){return new $e(Y.fromString(e))}static fromName(e){return new $e(Y.fromString(e).popFirst(5))}static empty(){return new $e(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Y.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $e(new Y(e.slice()))}}function $l(i,e,n,r){if(e===!0&&r===!0)throw new k(C.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Wl(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function zl(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ot(12329,{type:typeof i})}function Gl(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new k(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zl(i);throw new k(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(i,e){const n={typeString:i};return e&&(n.value=e),n}function jt(i,e){if(!Wl(i))throw new k(C.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const o=e[r].typeString,h="value"in e[r]?{value:e[r].value}:void 0;if(!(r in i)){n=`JSON missing required field: '${r}'`;break}const l=i[r];if(o&&typeof l!==o){n=`JSON field '${r}' must be a ${o}.`;break}if(h!==void 0&&l!==h.value){n=`Expected '${r}' field to equal '${h.value}'`;break}}if(n)throw new k(C.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=-62135596800,as=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*as);return new oe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<os)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/as}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(jt(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-os;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:F("string",oe._jsonSchemaVersion),seconds:F("number"),nanoseconds:F("number")};function ql(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new Kl("Invalid base64 string: "+h):h}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(o){let h="";for(let l=0;l<o.length;++l)h+=String.fromCharCode(o[l]);return h}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const li="(default)";class mn{constructor(e,n){this.projectId=e,this.database=n||li}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database===li}isEqual(e){return e instanceof mn&&e.projectId===this.projectId&&e.database===this.database}}function Jl(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new k(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(i.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n=null,r=[],o=[],h=null,l="F",w=null,v=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=h,this.limitType=l,this.startAt=w,this.endAt=v,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Yl(i){return new Xl(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cs,R;(R=cs||(cs={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new bi([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=1048576;function ti(){return typeof document<"u"?document:null}class eu{constructor(e,n,r=1e3,o=1.5,h=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=o,this.V_=h,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-r);o>0&&ee("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n,r,o,h){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=h,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,h){const l=Date.now()+r,w=new Ri(e,n,l,o,h);return w.start(r),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var hs,ls;(ls=hs||(hs={})).Ma="default",ls.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="ComponentProvider",us=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="firestore.googleapis.com",ds=!0;class fs{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new k(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lo,this.ssl=ds}else this.host=e.host,this.ssl=e.ssl??ds;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ql;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Zl)throw new k(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$l("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tu(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uo{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fs({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new k(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fs(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nl;switch(r.type){case"firstParty":return new Ml(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=us.get(n);r&&(ee(nu,"Removing Datastore"),us.delete(n),r.terminate())}(this),Promise.resolve()}}function iu(i,e,n,r={}){i=Gl(i,uo);const o=_n(e),h=i._getSettings(),l={...h,emulatorOptions:i._getEmulatorOptions()},w=`${e}:${n}`;o&&As(`https://${w}`),h.host!==lo&&h.host!==w&&kl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v={...h,host:w,ssl:o,emulatorOptions:r};if(!qe(v,l)&&(i._setSettings(v),r.mockUserToken)){let E,A;if(typeof r.mockUserToken=="string")E=r.mockUserToken,A=G.MOCK_USER;else{E=oa(r.mockUserToken,i._app?.options.projectId);const S=r.mockUserToken.sub||r.mockUserToken.user_id;if(!S)throw new k(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new G(S)}i._authCredentials=new Dl(new ho(E,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class ae{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(jt(n,ae._jsonSchema))return new ae(e,r||null,new $e(Y.fromString(n.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:F("string",ae._jsonSchemaVersion),referencePath:F("string")};class ki extends Ci{constructor(e,n,r){super(e,n,Yl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new $e(e))}withConverter(e){return new ki(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="AsyncQueue";class gs{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new eu(this,"async_queue_retry"),this._c=()=>{const r=ti();r&&ee(ps,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ti();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ti();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Ct;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ql(e))throw e;ee(ps,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ao("INTERNAL UNHANDLED ERROR: ",ms(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=Ri.createAndSchedule(this,e,n,r,h=>this.hc(h));return this.tc.push(o),o}uc(){this.nc&&Ot(47125,{Pc:ms(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function ms(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class ru extends uo{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new gs,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gs(e),this._firestoreClient=void 0,await e}}}function fu(i,e){const n=typeof i=="object"?i:Rs(),r=typeof i=="string"?i:li,o=gi(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const h=ra("firestore");h&&iu(o,...h)}return o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this._byteString=e}static fromBase64String(e){try{return new le(Xe.fromBase64String(e))}catch(n){throw new k(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new le(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:le._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(jt(e,le._jsonSchema))return le.fromBase64String(e.bytes)}}le._jsonSchemaVersion="firestore/bytes/1.0",le._jsonSchema={type:F("string",le._jsonSchemaVersion),bytes:F("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ze._jsonSchemaVersion}}static fromJSON(e){if(jt(e,ze._jsonSchema))return new ze(e.latitude,e.longitude)}}ze._jsonSchemaVersion="firestore/geoPoint/1.0",ze._jsonSchema={type:F("string",ze._jsonSchemaVersion),latitude:F("number"),longitude:F("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let h=0;h<r.length;++h)if(r[h]!==o[h])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ge._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(jt(e,Ge._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ge(e.vectorValues);throw new k(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ge._jsonSchemaVersion="firestore/vectorValue/1.0",Ge._jsonSchema={type:F("string",Ge._jsonSchemaVersion),vectorValues:F("object")};function po(i,e,n){if((e=me(e))instanceof fo)return e._internalPath;if(typeof e=="string")return ou(i,e);throw ui("Field path arguments must be of type string or ",i)}const su=new RegExp("[~\\*/\\[\\]]");function ou(i,e,n){if(e.search(su)>=0)throw ui(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new fo(...e.split("."))._internalPath}catch{throw ui(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function ui(i,e,n,r,o){let h=`Function ${e}() called with invalid data`;h+=". ";let l="";return new k(C.INVALID_ARGUMENT,h+i+l)}const _s="@firebase/firestore",ys="4.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,r,o,h){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new au(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const n=this._document.data.field(po("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class au extends go{data(){return super.data()}}class tn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class st extends go{constructor(e,n,r,o,h,l){super(e,n,r,o,l),this._firestore=e,this._firestoreImpl=e,this.metadata=h}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new an(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(po("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=st._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}st._jsonSchemaVersion="firestore/documentSnapshot/1.0",st._jsonSchema={type:F("string",st._jsonSchemaVersion),bundleSource:F("string","DocumentSnapshot"),bundleName:F("string"),bundle:F("string")};class an extends st{data(e={}){return super.data(e)}}class kt{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new tn(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new an(this._firestore,this._userDataWriter,r.key,r,new tn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,h){if(o._snapshot.oldDocs.isEmpty()){let l=0;return o._snapshot.docChanges.map(w=>{const v=new an(o._firestore,o._userDataWriter,w.doc.key,w.doc,new tn(o._snapshot.mutatedKeys.has(w.doc.key),o._snapshot.fromCache),o.query.converter);return w.doc,{type:"added",doc:v,oldIndex:-1,newIndex:l++}})}{let l=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(w=>h||w.type!==3).map(w=>{const v=new an(o._firestore,o._userDataWriter,w.doc.key,w.doc,new tn(o._snapshot.mutatedKeys.has(w.doc.key),o._snapshot.fromCache),o.query.converter);let E=-1,A=-1;return w.type!==0&&(E=l.indexOf(w.doc.key),l=l.delete(w.doc.key)),w.type!==1&&(l=l.add(w.doc),A=l.indexOf(w.doc.key)),{type:cu(w.type),doc:v,oldIndex:E,newIndex:A}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=kt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Fl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],o=[];return this.docs.forEach(h=>{h._document!==null&&(n.push(h._document),r.push(this._userDataWriter.convertObjectMap(h._document.data.value.mapValue.fields,"previous")),o.push(h.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cu(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ot(61501,{type:i})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt._jsonSchemaVersion="firestore/querySnapshot/1.0",kt._jsonSchema={type:F("string",kt._jsonSchemaVersion),bundleSource:F("string","QuerySnapshot"),bundleName:F("string"),bundle:F("string")};(function(e,n=!0){Cl(ht),ot(new Ke("firestore",(r,{instanceIdentifier:o,options:h})=>{const l=r.getProvider("app").getImmediate(),w=new ru(new Ol(r.getProvider("auth-internal")),new Ul(l,r.getProvider("app-check-internal")),Jl(l,o),l);return h={useFetchStreams:n,...h},w._setSettings(h),w},"PUBLIC").setMultipleInstances(!0)),Oe(_s,ys,e),Oe(_s,ys,"esm2020")})();export{Re as G,fu as a,uu as b,du as g,Ic as i,hu as o,lu as s};
