(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.ke(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.a(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.k7(b)
return new s(c,this)}:function(){if(s===null)s=A.k7(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.k7(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
kb(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k8(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.k9==null){A.oH()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.k(A.l0("Return interceptor for "+A.p(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.iI
if(o==null)o=$.iI=A.jy(n)
p=q[o]}if(p!=null)return p
p=A.oM(a)
if(p!=null)return p
if(typeof a=="function")return B.jb
s=Object.getPrototypeOf(a)
if(s==null)return B.bq
if(s===Object.prototype)return B.bq
if(typeof q=="function"){o=$.iI
if(o==null)o=$.iI=A.jy(n)
Object.defineProperty(q,o,{value:B.aI,enumerable:false,writable:true,configurable:true})
return B.aI}return B.aI},
mK(a,b){if(a<0||a>4294967295)throw A.k(A.a9(a,0,4294967295,"length",null))
return J.mM(new Array(a),b)},
mL(a,b){if(a<0)throw A.k(A.aJ("Length must be a non-negative integer: "+a,null))
return A.a(new Array(a),b.i("Q<0>"))},
mM(a,b){var s=A.a(a,b.i("Q<0>"))
s.$flags=1
return s},
kE(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mN(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.kE(r))break;++b}return b},
mO(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.kE(q))break}return b},
bt(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cw.prototype
return J.eh.prototype}if(typeof a=="string")return J.bb.prototype
if(a==null)return J.cx.prototype
if(typeof a=="boolean")return J.eg.prototype
if(Array.isArray(a))return J.Q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
if(typeof a=="symbol")return J.cC.prototype
if(typeof a=="bigint")return J.cA.prototype
return a}if(a instanceof A.M)return a
return J.k8(a)},
jw(a){if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(Array.isArray(a))return J.Q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
if(typeof a=="symbol")return J.cC.prototype
if(typeof a=="bigint")return J.cA.prototype
return a}if(a instanceof A.M)return a
return J.k8(a)},
jx(a){if(a==null)return a
if(Array.isArray(a))return J.Q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ay.prototype
if(typeof a=="symbol")return J.cC.prototype
if(typeof a=="bigint")return J.cA.prototype
return a}if(a instanceof A.M)return a
return J.k8(a)},
lV(a){if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(!(a instanceof A.M))return J.c0.prototype
return a},
fa(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bt(a).S(a,b)},
ml(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.oK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jw(a).q(a,b)},
mm(a,b,c){return J.jx(a).h(a,b,c)},
mn(a,b){return J.lV(a).bm(a,b)},
mo(a,b){return J.jx(a).af(a,b)},
jG(a,b){return J.jx(a).P(a,b)},
cd(a){return J.bt(a).gF(a)},
b5(a){return J.jx(a).gD(a)},
b6(a){return J.jw(a).gv(a)},
mp(a){return J.bt(a).gJ(a)},
jH(a,b,c){return J.lV(a).l(a,b,c)},
aR(a){return J.bt(a).k(a)},
ee:function ee(){},
eg:function eg(){},
cx:function cx(){},
cB:function cB(){},
aZ:function aZ(){},
ev:function ev(){},
c0:function c0(){},
ay:function ay(){},
cA:function cA(){},
cC:function cC(){},
Q:function Q(a){this.$ti=a},
ef:function ef(){},
fP:function fP(a){this.$ti=a},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cy:function cy(){},
cw:function cw(){},
eh:function eh(){},
bb:function bb(){}},A={jL:function jL(){},
ms(a,b,c){if(t.W.b(a))return new A.d0(a,b.i("@<0>").G(c).i("d0<1,2>"))
return new A.b8(a,b.i("@<0>").G(c).i("b8<1,2>"))},
mP(a){return new A.cE("Field '"+a+"' has been assigned during initialization.")},
mQ(a){return new A.cE("Field '"+a+"' has not been initialized.")},
jz(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
lR(a,b,c){return a},
ka(a){var s,r
for(s=$.ar.length,r=0;r<s;++r)if(a===$.ar[r])return!0
return!1},
kI(a,b,c,d){if(t.W.b(a))return new A.cl(a,b,c.i("@<0>").G(d).i("cl<1,2>"))
return new A.bf(a,b,c.i("@<0>").G(d).i("bf<1,2>"))},
kD(){return new A.cU("No element")},
b0:function b0(){},
cf:function cf(a,b){this.a=a
this.$ti=b},
b8:function b8(a,b){this.a=a
this.$ti=b},
d0:function d0(a,b){this.a=a
this.$ti=b},
cZ:function cZ(){},
aK:function aK(a,b){this.a=a
this.$ti=b},
cE:function cE(a){this.a=a},
dE:function dE(a){this.a=a},
r:function r(){},
al:function al(){},
cV:function cV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bd:function bd(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.$ti=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a6:function a6(a,b,c){this.a=a
this.b=b
this.$ti=c},
bo:function bo(a,b,c){this.a=a
this.b=b
this.$ti=c},
cY:function cY(a,b,c){this.a=a
this.b=b
this.$ti=c},
ae:function ae(){},
bm:function bm(){},
c1:function c1(){},
dq:function dq(){},
kp(){throw A.k(A.bn("Cannot modify unmodifiable Map"))},
m2(a){var s=A.m1(a)
if(s!=null)return s
return"minified:"+a},
oK(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
p(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aR(a)
return s},
bj(a){var s,r=$.kQ
if(r==null)r=$.kQ=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
jR(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.e(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.k(A.a9(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
kR(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.c.a4(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
bR(a){var s,r,q,p
if(a instanceof A.M)return A.ao(A.b3(a),null)
s=J.bt(a)
if(s===B.ja||s===B.jc||t.ak.b(a)){r=B.aV(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.ao(A.b3(a),null)},
n_(a){var s,r,q
if(typeof a=="number"||A.k4(a))return J.aR(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.aT)return a.k(0)
s=$.mk()
for(r=0;r<1;++r){q=s[r].dh(a)
if(q!=null)return q}return"Instance of '"+A.bR(a)+"'"},
n0(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
b_(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.q.aJ(s,10)|55296)>>>0,s&1023|56320)}}throw A.k(A.a9(a,0,1114111,null,null))},
mZ(a){var s=a.$thrownJsError
if(s==null)return null
return A.b2(s)},
oF(a){throw A.k(A.k6(a))},
e(a,b){if(a==null)J.b6(a)
throw A.k(A.ju(a,b))},
ju(a,b){var s,r="index"
if(!A.lG(b))return new A.ax(!0,b,r,null)
s=J.b6(a)
if(b<0||b>=s)return A.fN(b,s,a,r)
return A.kS(b,r)},
oD(a,b,c){if(a>c)return A.a9(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.a9(b,a,c,"end",null)
return new A.ax(!0,b,"end",null)},
k6(a){return new A.ax(!0,a,null,null)},
k(a){return A.a3(a,new Error())},
a3(a,b){var s
if(a==null)a=new A.aO()
b.dartException=a
s=A.oW
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
oW(){return J.aR(this.dartException)},
cb(a,b){throw A.a3(a,b==null?new Error():b)},
as(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.cb(A.nV(a,b,c),s)},
nV(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.d.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.cW("'"+s+"': Cannot "+o+" "+l+k+n)},
aH(a){throw A.k(A.at(a))},
aP(a){var s,r,q,p,o,n
a=A.m_(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.a([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.h7(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
h8(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
l_(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jM(a,b){var s=b==null,r=s?null:b.method
return new A.ei(a,r,s?null:b.receiver)},
b4(a){if(a==null)return new A.fW(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.bx(a,a.dartException)
return A.ow(a)},
bx(a,b){if(t.a.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ow(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.q.aJ(r,16)&8191)===10)switch(q){case 438:return A.bx(a,A.jM(A.p(s)+" (Error "+q+")",null))
case 445:case 5007:A.p(s)
return A.bx(a,new A.cP())}}if(a instanceof TypeError){p=$.m4()
o=$.m5()
n=$.m6()
m=$.m7()
l=$.ma()
k=$.mb()
j=$.m9()
$.m8()
i=$.md()
h=$.mc()
g=p.V(s)
if(g!=null)return A.bx(a,A.jM(A.w(s),g))
else{g=o.V(s)
if(g!=null){g.method="call"
return A.bx(a,A.jM(A.w(s),g))}else if(n.V(s)!=null||m.V(s)!=null||l.V(s)!=null||k.V(s)!=null||j.V(s)!=null||m.V(s)!=null||i.V(s)!=null||h.V(s)!=null){A.w(s)
return A.bx(a,new A.cP())}}return A.bx(a,new A.eG(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bX()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.bx(a,new A.ax(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bX()
return a},
b2(a){var s
if(a==null)return new A.de(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.de(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
lX(a){if(a==null)return J.cd(a)
if(typeof a=="object")return A.bj(a)
return J.cd(a)},
oA(a){if(typeof a=="number")return B.X.gF(a)
if(a instanceof A.dh)return A.bj(a)
return A.lX(a)},
lU(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.h(0,a[s],a[r])}return b},
o6(a,b,c,d,e,f){t.Z.a(a)
switch(A.a2(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.k(A.jJ("Unsupported number of arguments for wrapped closure"))},
jt(a,b){var s=a.$identity
if(!!s)return s
s=A.oB(a,b)
a.$identity=s
return s},
oB(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.o6)},
mx(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.eB().constructor.prototype):Object.create(new A.bA(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.ko(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.mt(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.ko(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
mt(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.k("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.mq)}throw A.k("Error in functionType of tearoff")},
mu(a,b,c,d){var s=A.km
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ko(a,b,c,d){if(c)return A.mw(a,b,d)
return A.mu(b.length,d,a,b)},
mv(a,b,c,d){var s=A.km,r=A.mr
switch(b?-1:a){case 0:throw A.k(new A.ey("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
mw(a,b,c){var s,r
if($.kk==null)$.kk=A.kj("interceptor")
if($.kl==null)$.kl=A.kj("receiver")
s=b.length
r=A.mv(s,c,a,b)
return r},
k7(a){return A.mx(a)},
mq(a,b){return A.j2(v.typeUniverse,A.b3(a.a),b)},
km(a){return a.a},
mr(a){return a.b},
kj(a){var s,r,q,p=new A.bA("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.k(A.aJ("Field name "+a+" not found.",null))},
jy(a){return v.getIsolateTag(a)},
oM(a){var s,r,q,p,o,n=A.w($.lW.$1(a)),m=$.jv[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jD[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.aC($.lO.$2(a,n))
if(q!=null){m=$.jv[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jD[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.jF(s)
$.jv[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jD[n]=s
return s}if(p==="-"){o=A.jF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.lY(a,s)
if(p==="*")throw A.k(A.l0(n))
if(v.leafTags[n]===true){o=A.jF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.lY(a,s)},
lY(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kb(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jF(a){return J.kb(a,!1,null,!!a.$iaq)},
oO(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.jF(s)
else return J.kb(s,c,null,null)},
oH(){if(!0===$.k9)return
$.k9=!0
A.oI()},
oI(){var s,r,q,p,o,n,m,l
$.jv=Object.create(null)
$.jD=Object.create(null)
A.oG()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lZ.$1(o)
if(n!=null){m=A.oO(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
oG(){var s,r,q,p,o,n,m=B.cf()
m=A.c9(B.cg,A.c9(B.ch,A.c9(B.aW,A.c9(B.aW,A.c9(B.ci,A.c9(B.cj,A.c9(B.ck(B.aV),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lW=new A.jA(p)
$.lO=new A.jB(o)
$.lZ=new A.jC(n)},
c9(a,b){return a(b)||b},
oC(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
kF(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.k(A.ac("Illegal RegExp pattern ("+String(o)+")",a,null))},
oS(a,b,c){var s=a.indexOf(b,c)
return s>=0},
lT(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m_(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kd(a,b,c){var s
if(typeof b=="string")return A.oU(a,b,c)
if(b instanceof A.cz){s=b.gbh()
s.lastIndex=0
return a.replace(s,A.lT(c))}return A.oT(a,b,c)},
oT(a,b,c){var s,r,q,p
for(s=J.mn(b,a),s=s.gD(s),r=0,q="";s.t();){p=s.gu()
q=q+a.substring(r,p.gb1())+c
r=p.gaT()}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
oU(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.m_(b),"g"),A.lT(c))},
oV(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.m0(a,s,s+b.length,c)},
m0(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
bD:function bD(){},
X:function X(a,b,c){this.a=a
this.b=b
this.$ti=c},
d4:function d4(a,b){this.a=a
this.$ti=b},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bH:function bH(a,b){this.a=a
this.$ti=b},
cT:function cT(){},
h7:function h7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cP:function cP(){},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a){this.a=a},
fW:function fW(a){this.a=a},
de:function de(a){this.a=a
this.b=null},
aT:function aT(){},
dC:function dC(){},
dD:function dD(){},
eD:function eD(){},
eB:function eB(){},
bA:function bA(a,b){this.a=a
this.b=b},
ey:function ey(a){this.a=a},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fQ:function fQ(a){this.a=a},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cG:function cG(a,b){this.a=a
this.$ti=b},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fS:function fS(a,b){this.a=a
this.$ti=b},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ag:function ag(a,b){this.a=a
this.$ti=b},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cD:function cD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
cz:function cz(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
f0:function f0(a){this.b=a},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eC:function eC(a,b){this.a=a
this.c=b},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
nW(a){return a},
mR(a){return new Int8Array(a)},
mS(a){return new Uint8Array(a)},
aQ(a,b,c){if(a>>>0!==a||a>=c)throw A.k(A.ju(b,a))},
nU(a,b,c){var s
if(!(a>>>0!==a))if(b==null)s=a>c
else s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.k(A.oD(a,b,c))
if(b==null)return c
return b},
bP:function bP(){},
cM:function cM(){},
em:function em(){},
a7:function a7(){},
cK:function cK(){},
cL:function cL(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
cN:function cN(){},
cO:function cO(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
jS(a,b){var s=b.c
return s==null?b.c=A.dk(a,"cv",[b.x]):s},
kU(a){var s=a.w
if(s===6||s===7)return A.kU(a.x)
return s===11||s===12},
n2(a){return a.as},
bs(a){return A.j1(v.typeUniverse,a,!1)},
br(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.br(a1,s,a3,a4)
if(r===s)return a2
return A.lh(a1,r,!0)
case 7:s=a2.x
r=A.br(a1,s,a3,a4)
if(r===s)return a2
return A.lg(a1,r,!0)
case 8:q=a2.y
p=A.c8(a1,q,a3,a4)
if(p===q)return a2
return A.dk(a1,a2.x,p)
case 9:o=a2.x
n=A.br(a1,o,a3,a4)
m=a2.y
l=A.c8(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.jX(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.c8(a1,j,a3,a4)
if(i===j)return a2
return A.li(a1,k,i)
case 11:h=a2.x
g=A.br(a1,h,a3,a4)
f=a2.y
e=A.ot(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.lf(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.c8(a1,d,a3,a4)
o=a2.x
n=A.br(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.jY(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.k(A.dy("Attempted to substitute unexpected RTI kind "+a0))}},
c8(a,b,c,d){var s,r,q,p,o=b.length,n=A.jl(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.br(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
ou(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.jl(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.br(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
ot(a,b,c,d){var s,r=b.a,q=A.c8(a,r,c,d),p=b.b,o=A.c8(a,p,c,d),n=b.c,m=A.ou(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.eW()
s.a=q
s.b=o
s.c=m
return s},
a(a,b){a[v.arrayRti]=b
return a},
lS(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.oE(s)
return a.$S()}return null},
oJ(a,b){var s
if(A.kU(b))if(a instanceof A.aT){s=A.lS(a)
if(s!=null)return s}return A.b3(a)},
b3(a){if(a instanceof A.M)return A.H(a)
if(Array.isArray(a))return A.an(a)
return A.k3(J.bt(a))},
an(a){var s=a[v.arrayRti],r=t.D
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
H(a){var s=a.$ti
return s!=null?s:A.k3(a)},
k3(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.o4(a,s)},
o4(a,b){var s=a instanceof A.aT?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.nB(v.typeUniverse,s.name)
b.$ccache=r
return r},
oE(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.j1(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
aw(a){return A.aG(A.H(a))},
os(a){var s=a instanceof A.aT?A.lS(a):null
if(s!=null)return s
if(t.dm.b(a))return J.mp(a).a
if(Array.isArray(a))return A.an(a)
return A.b3(a)},
aG(a){var s=a.r
return s==null?a.r=new A.dh(a):s},
aI(a){return A.aG(A.j1(v.typeUniverse,a,!1))},
o3(a){var s=this
s.b=A.oq(s)
return s.b(a)},
oq(a){var s,r,q,p,o
if(a===t.K)return A.oc
if(A.bv(a))return A.og
s=a.w
if(s===6)return A.o0
if(s===1)return A.lI
if(s===7)return A.o7
r=A.op(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.bv)){a.f="$i"+q
if(q==="A")return A.oa
if(a===t.m)return A.o9
return A.of}}else if(s===10){p=A.oC(a.x,a.y)
o=p==null?A.lI:p
return o==null?A.f8(o):o}return A.nZ},
op(a){if(a.w===8){if(a===t.S)return A.lG
if(a===t.i||a===t.o)return A.ob
if(a===t.N)return A.oe
if(a===t.w)return A.k4}return null},
o2(a){var s=this,r=A.nY
if(A.bv(s))r=A.nS
else if(s===t.K)r=A.f8
else if(A.ca(s)){r=A.o_
if(s===t.h6)r=A.nQ
else if(s===t.dk)r=A.aC
else if(s===t.fQ)r=A.nO
else if(s===t.cg)r=A.lB
else if(s===t.cD)r=A.nP
else if(s===t.an)r=A.z}else if(s===t.S)r=A.a2
else if(s===t.N)r=A.w
else if(s===t.w)r=A.k1
else if(s===t.o)r=A.nR
else if(s===t.i)r=A.lA
else if(s===t.m)r=A.d
s.a=r
return s.a(a)},
nZ(a){var s=this
if(a==null)return A.ca(s)
return A.oL(v.typeUniverse,A.oJ(a,s),s)},
o0(a){if(a==null)return!0
return this.x.b(a)},
of(a){var s,r=this
if(a==null)return A.ca(r)
s=r.f
if(a instanceof A.M)return!!a[s]
return!!J.bt(a)[s]},
oa(a){var s,r=this
if(a==null)return A.ca(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.M)return!!a[s]
return!!J.bt(a)[s]},
o9(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.M)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
lH(a){if(typeof a=="object"){if(a instanceof A.M)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
nY(a){var s=this
if(a==null){if(A.ca(s))return a}else if(s.b(a))return a
throw A.a3(A.lC(a,s),new Error())},
o_(a){var s=this
if(a==null||s.b(a))return a
throw A.a3(A.lC(a,s),new Error())},
lC(a,b){return new A.di("TypeError: "+A.l9(a,A.ao(b,null)))},
l9(a,b){return A.fn(a)+": type '"+A.ao(A.os(a),null)+"' is not a subtype of type '"+b+"'"},
av(a,b){return new A.di("TypeError: "+A.l9(a,b))},
o7(a){var s=this
return s.x.b(a)||A.jS(v.typeUniverse,s).b(a)},
oc(a){return a!=null},
f8(a){if(a!=null)return a
throw A.a3(A.av(a,"Object"),new Error())},
og(a){return!0},
nS(a){return a},
lI(a){return!1},
k4(a){return!0===a||!1===a},
k1(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a3(A.av(a,"bool"),new Error())},
nO(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a3(A.av(a,"bool?"),new Error())},
lA(a){if(typeof a=="number")return a
throw A.a3(A.av(a,"double"),new Error())},
nP(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a3(A.av(a,"double?"),new Error())},
lG(a){return typeof a=="number"&&Math.floor(a)===a},
a2(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a3(A.av(a,"int"),new Error())},
nQ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a3(A.av(a,"int?"),new Error())},
ob(a){return typeof a=="number"},
nR(a){if(typeof a=="number")return a
throw A.a3(A.av(a,"num"),new Error())},
lB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a3(A.av(a,"num?"),new Error())},
oe(a){return typeof a=="string"},
w(a){if(typeof a=="string")return a
throw A.a3(A.av(a,"String"),new Error())},
aC(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a3(A.av(a,"String?"),new Error())},
d(a){if(A.lH(a))return a
throw A.a3(A.av(a,"JSObject"),new Error())},
z(a){if(a==null)return a
if(A.lH(a))return a
throw A.a3(A.av(a,"JSObject?"),new Error())},
lL(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.ao(a[q],b)
return s},
ok(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.lL(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.ao(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
lD(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.a([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.e.p(a4,"T"+(r+q))
for(p=t.I,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.e(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.ao(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.ao(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.ao(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.ao(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.ao(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
ao(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.ao(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.ao(a.x,b)+">"
if(l===8){p=A.ov(a.x)
o=a.y
return o.length>0?p+("<"+A.lL(o,b)+">"):p}if(l===10)return A.ok(a,b)
if(l===11)return A.lD(a,b,null)
if(l===12)return A.lD(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.e(b,n)
return b[n]}return"?"},
ov(a){var s=A.m1(a)
if(s!=null)return s
return"minified:"+a},
nC(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
nB(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.j1(a,b,!1)
else if(typeof m=="number"){s=m
r=A.dl(a,5,"#")
q=A.jl(s)
for(p=0;p<s;++p)q[p]=r
o=A.dk(a,b,q)
n[b]=o
return o}else return m},
nz(a,b){return A.ly(a.tR,b)},
ny(a,b){return A.ly(a.eT,b)},
j1(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.lj(a,null,b,!1)
r.set(b,s)
return s},
j2(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.lj(a,b,c,!0)
q.set(c,r)
return r},
nA(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.jX(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
lj(a,b,c,d){return A.nq(A.nk(a,b,c,d))},
b1(a,b){b.a=A.o2
b.b=A.o3
return b},
dl(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.aA(null,null)
s.w=b
s.as=c
r=A.b1(a,s)
a.eC.set(c,r)
return r},
lh(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.nw(a,b,r,c)
a.eC.set(r,s)
return s},
nw(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.bv(b))if(!(b===t.P||b===t.u))if(s!==6)r=s===7&&A.ca(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.aA(null,null)
q.w=6
q.x=b
q.as=c
return A.b1(a,q)},
lg(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.nu(a,b,r,c)
a.eC.set(r,s)
return s},
nu(a,b,c,d){var s,r
if(d){s=b.w
if(A.bv(b)||b===t.K)return b
else if(s===1)return A.dk(a,"cv",[b])
else if(b===t.P||b===t.u)return t.eH}r=new A.aA(null,null)
r.w=7
r.x=b
r.as=c
return A.b1(a,r)},
nx(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.aA(null,null)
s.w=13
s.x=b
s.as=q
r=A.b1(a,s)
a.eC.set(q,r)
return r},
dj(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
nt(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
dk(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dj(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.aA(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.b1(a,r)
a.eC.set(p,q)
return q},
jX(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.dj(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.aA(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.b1(a,o)
a.eC.set(q,n)
return n},
li(a,b,c){var s,r,q="+"+(b+"("+A.dj(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.aA(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.b1(a,s)
a.eC.set(q,r)
return r},
lf(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dj(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.dj(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.nt(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.aA(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.b1(a,p)
a.eC.set(r,o)
return o},
jY(a,b,c,d){var s,r=b.as+("<"+A.dj(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.nv(a,b,c,r,d)
a.eC.set(r,s)
return s},
nv(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.jl(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.br(a,b,r,0)
m=A.c8(a,c,r,0)
return A.jY(a,n,m,c!==m)}}l=new A.aA(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.b1(a,l)},
nk(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nq(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.nm(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.lc(a,r,l,k,!1)
else if(q===46)r=A.lc(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.bq(a.u,a.e,k.pop()))
break
case 94:k.push(A.nx(a.u,k.pop()))
break
case 35:k.push(A.dl(a.u,5,"#"))
break
case 64:k.push(A.dl(a.u,2,"@"))
break
case 126:k.push(A.dl(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.no(a,k)
break
case 38:A.nn(a,k)
break
case 63:p=a.u
k.push(A.lh(p,A.bq(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.lg(p,A.bq(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.nl(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.ld(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.nr(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.bq(a.u,a.e,m)},
nm(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lc(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.nC(s,o.x)[p]
if(n==null)A.cb('No "'+p+'" in "'+A.n2(o)+'"')
d.push(A.j2(s,o,n))}else d.push(p)
return m},
no(a,b){var s,r=a.u,q=A.lb(a,b),p=b.pop()
if(typeof p=="string")b.push(A.dk(r,p,q))
else{s=A.bq(r,a.e,p)
switch(s.w){case 11:b.push(A.jY(r,s,q,a.n))
break
default:b.push(A.jX(r,s,q))
break}}},
nl(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.lb(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.bq(p,a.e,o)
q=new A.eW()
q.a=s
q.b=n
q.c=m
b.push(A.lf(p,r,q))
return
case-4:b.push(A.li(p,b.pop(),s))
return
default:throw A.k(A.dy("Unexpected state under `()`: "+A.p(o)))}},
nn(a,b){var s=b.pop()
if(0===s){b.push(A.dl(a.u,1,"0&"))
return}if(1===s){b.push(A.dl(a.u,4,"1&"))
return}throw A.k(A.dy("Unexpected extended operation "+A.p(s)))},
lb(a,b){var s=b.splice(a.p)
A.ld(a.u,a.e,s)
a.p=b.pop()
return s},
bq(a,b,c){if(typeof c=="string")return A.dk(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.np(a,b,c)}else return c},
ld(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.bq(a,b,c[s])},
nr(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.bq(a,b,c[s])},
np(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.k(A.dy("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.k(A.dy("Bad index "+c+" for "+b.k(0)))},
oL(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.a_(a,b,null,c,null)
r.set(c,s)}return s},
a_(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.bv(d))return!0
s=b.w
if(s===4)return!0
if(A.bv(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.a_(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.u){if(q===7)return A.a_(a,b,c,d.x,e)
return d===p||d===t.u||q===6}if(d===t.K){if(s===7)return A.a_(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.a_(a,b.x,c,d,e))return!1
return A.a_(a,A.jS(a,b),c,d,e)}if(s===6)return A.a_(a,p,c,d,e)&&A.a_(a,b.x,c,d,e)
if(q===7){if(A.a_(a,b,c,d.x,e))return!0
return A.a_(a,b,c,A.jS(a,d),e)}if(q===6)return A.a_(a,b,c,p,e)||A.a_(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.a_(a,j,c,i,e)||!A.a_(a,i,e,j,c))return!1}return A.lF(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.lF(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.o8(a,b,c,d,e)}if(o&&q===10)return A.od(a,b,c,d,e)
return!1},
lF(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.a_(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.a_(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.a_(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.a_(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.a_(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
o8(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.j2(a,b,r[o])
return A.lz(a,p,null,c,d.y,e)}return A.lz(a,b.y,null,c,d.y,e)},
lz(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.a_(a,b[s],d,e[s],f))return!1
return!0},
od(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.a_(a,r[s],c,q[s],e))return!1
return!0},
ca(a){var s=a.w,r=!0
if(!(a===t.P||a===t.u))if(!A.bv(a))if(s!==6)r=s===7&&A.ca(a.x)
return r},
bv(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.I},
ly(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
jl(a){return a>0?new Array(a):v.typeUniverse.sEA},
aA:function aA(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
eW:function eW(){this.c=this.b=this.a=null},
dh:function dh(a){this.a=a},
eU:function eU(){},
di:function di(a){this.a=a},
nf(){var s,r,q
if(self.scheduleImmediate!=null)return A.ox()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.jt(new A.hs(s),1)).observe(r,{childList:true})
return new A.hr(s,r,q)}else if(self.setImmediate!=null)return A.oy()
return A.oz()},
ng(a){self.scheduleImmediate(A.jt(new A.ht(t.M.a(a)),0))},
nh(a){self.setImmediate(A.jt(new A.hu(t.M.a(a)),0))},
ni(a){A.kZ(B.cW,t.M.a(a))},
kZ(a,b){return A.ns(a.a/1000|0,b)},
ns(a,b){var s=new A.j_()
s.bJ(a,b)
return s},
le(a,b,c){return 0},
jI(a){var s
if(t.a.b(a)){s=a.gaa()
if(s!=null)return s}return B.cn},
kz(a,b,c){var s=new A.au($.a1,c.i("au<0>"))
A.n7(a,new A.fH(b,s,c))
return s},
o5(a,b){var s=$.a1
if(s===B.a2)return null
s.cf(s,a,b)
return null},
la(a,b,c){var s,r,q,p={},o=p.a=a
for(s=t._;r=o.a,(r&4)!==0;o=a){a=s.a(o.c)
p.a=a}if(o===b){s=A.n3()
b.bP(new A.aD(new A.ax(!0,o,null,"Cannot complete a future with itself"),s))
return}s=r|b.a&1
o.a=s
if((s&24)===0){q=t.F.a(b.c)
b.a=b.a&1|4
b.c=o
o.bi(q)
return}q=b.ad()
b.ac(p.a)
A.c4(b,q)
return},
c4(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={},d=e.a=a
for(s=t.t,r=t.F;;){q={}
p=d.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(d.c)
d=d.b
d.aC(d,m.a,m.b)}return}q.a=b
l=b.a
for(d=b;l!=null;d=l,l=k){d.a=null
A.c4(e.a,d)
q.a=l
k=l.a}j=e.a.c
q.b=n
q.c=j
if(o){p=d.c
p=(p&1)!==0||(p&15)===8}else p=!0
if(p){i=d.b.b
h=$.a1
if(h!==i)$.a1=i
else h=null
d=d.c
if((d&15)===8)new A.i5(q,e,n).$0()
else if(o){if((d&1)!==0)new A.i4(q,j).$0()}else if((d&2)!==0)new A.i3(e,q).$0()
if(h!=null)$.a1=h
d=q.c
if(d instanceof A.au){p=q.a.$ti
p=p.i("cv<2>").b(d)||!p.y[1].b(d)}else p=!1
if(p){g=q.a.b
if((d.a&24)!==0){f=r.a(g.c)
g.c=null
b=g.ae(f)
g.a=d.a&30|g.a&1
g.c=d.c
e.a=d
continue}else A.la(d,g,!0)
return}}g=q.a.b
f=r.a(g.c)
g.c=null
b=g.ae(f)
d=q.b
p=q.c
if(!d){g.$ti.c.a(p)
g.a=8
g.c=p}else{s.a(p)
g.a=g.a&1|16
g.c=p}e.a=g
d=g}},
ol(a,b){var s=t.C
if(s.b(a))return b.cw(b,s.a(a),t.z,t.K,t.j)
s=t.x
if(s.b(a))return b.bk(b,s.a(a),t.z,t.K)
throw A.k(A.kh(a,"onError",u.c))},
oj(){var s,r
for(s=$.c7;s!=null;s=$.c7){$.ds=null
r=s.b
$.c7=r
if(r==null)$.dr=null
s.a.$0()}},
or(){$.k5=!0
try{A.oj()}finally{$.ds=null
$.k5=!1
if($.c7!=null)$.kg().$1(A.lP())}},
lN(a){var s=new A.eP(a),r=$.dr
if(r==null){$.c7=$.dr=s
if(!$.k5)$.kg().$1(A.lP())}else $.dr=r.b=s},
oo(a){var s,r,q,p=$.c7
if(p==null){A.lN(a)
$.ds=$.dr
return}s=new A.eP(a)
r=$.ds
if(r==null){s.b=p
$.c7=$.ds=s}else{q=r.b
s.b=q
$.ds=r.b=s
if(q==null)$.dr=s}},
n7(a,b){var s=$.a1
if(s===B.a2)return s.bd(s,a,t.M.a(b))
return s.bd(s,a,t.M.a(s.cR(b)))},
om(a,b){A.oo(new A.jp(a,b))},
on(a,b){if(B.a2!==a)b=a.bn(b,t.H)
A.lN(b)},
hs:function hs(a){this.a=a},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
j_:function j_(){},
j0:function j0(a,b){this.a=a
this.b=b},
dg:function dg(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
c5:function c5(a,b){this.a=a
this.$ti=b},
aD:function aD(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
au:function au(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
i0:function i0(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(a){this.a=a},
i4:function i4(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
eP:function eP(a){this.a=a
this.b=null},
hk:function hk(){},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b){this.a=a
this.b=b},
jp:function jp(a,b){this.a=a
this.b=b},
jO(a,b){return new A.az(a.i("@<0>").G(b).i("az<1,2>"))},
C(a,b,c){return b.i("@<0>").G(c).i("jN<1,2>").a(A.lU(a,new A.az(b.i("@<0>").G(c).i("az<1,2>"))))},
l(a,b){return new A.az(a.i("@<0>").G(b).i("az<1,2>"))},
jP(a){return new A.d6(a.i("d6<0>"))},
jW(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nj(a,b,c){var s=new A.bp(a,b,c.i("bp<0>"))
s.c=a.e
return s},
kG(a,b,c){var s=A.jO(b,c)
a.R(0,new A.fT(s,b,c))
return s},
cH(a,b,c){var s=A.jO(b,c)
s.H(0,a)
return s},
jQ(a){var s,r
if(A.ka(a))return"{...}"
s=new A.aa("")
try{r={}
B.e.p($.ar,a)
s.a+="{"
r.a=!0
a.R(0,new A.fV(r,s))
s.a+="}"}finally{if(0>=$.ar.length)return A.e($.ar,-1)
$.ar.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d6:function d6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f_:function f_(a){this.a=a
this.c=this.b=null},
bp:function bp(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
B:function B(){},
bM:function bM(){},
fV:function fV(a,b){this.a=a
this.b=b},
f6:function f6(){},
cI:function cI(){},
c2:function c2(a,b){this.a=a
this.$ti=b},
bV:function bV(){},
dd:function dd(){},
dm:function dm(){},
nM(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.mj()
else s=new Uint8Array(o)
for(r=J.jw(a),q=0;q<o;++q){p=r.q(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
nL(a,b,c,d){var s=a?$.mi():$.mh()
if(s==null)return null
if(0===c&&d===b.length)return A.lx(s,b)
return A.lx(s,b.subarray(c,d))},
lx(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
ki(a,b,c,d,e,f){if(B.q.am(f,4)!==0)throw A.k(A.ac("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.k(A.ac("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.k(A.ac("Invalid base64 padding, more than two '=' characters",a,b))},
nN(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
jb:function jb(){},
ja:function ja(){},
dA:function dA(){},
fb:function fb(){},
bC:function bC(){},
dG:function dG(){},
dK:function dK(){},
eJ:function eJ(){},
hd:function hd(){},
jc:function jc(a){this.b=0
this.c=a},
hc:function hc(a){this.a=a},
j9:function j9(a){this.a=a
this.b=16
this.c=0},
kr(a){return new A.dL(new WeakMap(),a.i("dL<0>"))},
ks(a){},
bu(a,b){var s=A.jR(a,b)
if(s!=null)return s
throw A.k(A.ac(a,null,null))},
my(a,b){a=A.a3(a,new Error())
if(a==null)a=A.f8(a)
a.stack=b.k(0)
throw a},
kH(a,b,c,d){var s,r=c?J.mL(a,d):J.mK(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
bL(a,b){var s,r=A.a([],b.i("Q<0>"))
for(s=J.b5(a);s.t();)B.e.p(r,s.gu())
return r},
kX(a,b,c){var s,r
A.ew(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.k(A.a9(c,b,null,"end",null))
if(s===0)return""}r=A.n6(a,b,c)
return r},
n6(a,b,c){var s=a.length
if(b>=s)return""
return A.n0(a,b,c==null||c>s?s:c)},
kT(a){return new A.cz(a,A.kF(a,!1,!0,!1,!1,""))},
kW(a,b,c){var s=J.b5(b)
if(!s.t())return a
if(c.length===0){do a+=A.p(s.gu())
while(s.t())}else{a+=A.p(s.gu())
while(s.t())a=a+c+A.p(s.gu())}return a},
k0(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.S){s=$.mf()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.cm.aP(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.f.charCodeAt(o)&a)!==0)p+=A.b_(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
nG(a){var s,r,q
if(!$.mg())return A.nH(a)
s=new URLSearchParams()
a.R(0,new A.j7(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.c.l(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
n3(){return A.b2(new Error())},
fn(a){if(typeof a=="number"||A.k4(a)||a==null)return J.aR(a)
if(typeof a=="string")return JSON.stringify(a)
return A.n_(a)},
mz(a,b){A.lR(a,"error",t.K)
A.lR(b,"stackTrace",t.j)
A.my(a,b)},
dy(a){return new A.dx(a)},
aJ(a,b){return new A.ax(!1,null,b,a)},
kh(a,b,c){return new A.ax(!0,a,b,c)},
kS(a,b){return new A.cQ(null,null,!0,a,b,"Value not in range")},
a9(a,b,c,d,e){return new A.cQ(b,c,!0,a,d,"Invalid value")},
cR(a,b,c){if(0>a||a>c)throw A.k(A.a9(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.k(A.a9(b,a,c,"end",null))
return b}return c},
ew(a,b){if(a<0)throw A.k(A.a9(a,0,null,b,null))
return a},
fN(a,b,c,d){return new A.eb(b,!0,a,d,"Index out of range")},
bn(a){return new A.cW(a)},
l0(a){return new A.eF(a)},
kV(a){return new A.cU(a)},
at(a){return new A.dF(a)},
jJ(a){return new A.hV(a)},
ac(a,b,c){return new A.aM(a,b,c)},
mJ(a,b,c){var s,r
if(A.ka(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.a([],t.s)
B.e.p($.ar,a)
try{A.oh(a,s)}finally{if(0>=$.ar.length)return A.e($.ar,-1)
$.ar.pop()}r=A.kW(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
jK(a,b,c){var s,r
if(A.ka(a))return b+"..."+c
s=new A.aa(b)
B.e.p($.ar,a)
try{r=s
r.a=A.kW(r.a,a,", ")}finally{if(0>=$.ar.length)return A.e($.ar,-1)
$.ar.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
oh(a,b){var s,r,q,p,o,n,m,l=a.gD(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.t())return
s=A.p(l.gu())
B.e.p(b,s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return A.e(b,-1)
r=b.pop()
if(0>=b.length)return A.e(b,-1)
q=b.pop()}else{p=l.gu();++j
if(!l.t()){if(j<=4){B.e.p(b,A.p(p))
return}r=A.p(p)
if(0>=b.length)return A.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gu();++j
for(;l.t();p=o,o=n){n=l.gu();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2;--j}B.e.p(b,"...")
return}}q=A.p(p)
r=A.p(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.e.p(b,m)
B.e.p(b,q)
B.e.p(b,r)},
kc(a){A.oR(a)},
l2(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){if(4>=a4)return A.e(a5,4)
s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.l1(a4<a4?B.c.l(a5,0,a4):a5,5,a3).gbC()
else if(s===32)return A.l1(B.c.l(a5,5,a4),0,a3).gbC()}r=A.kH(8,0,!1,t.S)
B.e.h(r,0,0)
B.e.h(r,1,-1)
B.e.h(r,2,-1)
B.e.h(r,7,-1)
B.e.h(r,3,0)
B.e.h(r,4,0)
B.e.h(r,5,a4)
B.e.h(r,6,a4)
if(A.lM(a5,0,a4,0,r)>=14)B.e.h(r,7,a4)
q=r[1]
if(q>=0)if(A.lM(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.c.L(a5,"\\",n))if(p>0)h=B.c.L(a5,"\\",p-1)||B.c.L(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.c.L(a5,"..",n)))h=m>n+2&&B.c.L(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.c.L(a5,"file",0)){if(p<=0){if(!B.c.L(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.c.l(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.c.a3(a5,n,m,"/");++a4
m=f}j="file"}else if(B.c.L(a5,"http",0)){if(i&&o+3===n&&B.c.L(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.c.a3(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.c.L(a5,"https",0)){if(i&&o+4===n&&B.c.L(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.c.a3(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.f2(a4<a5.length?B.c.l(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.nI(a5,0,q)
else{if(q===0)A.c6(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.lr(a5,c,p-1):""
a=A.lo(a5,p,o,!1)
i=o+1
if(i<n){a0=A.jR(B.c.l(a5,i,n),a3)
d=A.lq(a0==null?A.cb(A.ac("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.lp(a5,n,m,a3,j,a!=null)
a2=m<l?A.j4(a5,m+1,l,a3):a3
return A.j3(j,b,a,d,a1,a2,l<a4?A.ln(a5,l+1,a4):a3)},
l4(a){var s=t.N
return B.e.d1(A.a(a.split("&"),t.s),A.l(s,s),new A.hb(B.S),t.f)},
eI(a,b,c){throw A.k(A.ac("Illegal IPv4 address, "+a,b,c))},
nb(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.e(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.eI("each part must be in the range 0..255",a,r)}A.eI("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.eI(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.as(d)
if(!(k<16))return A.e(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.eI(j,a,q)
p=l}A.eI("IPv4 address should contain exactly 4 parts",a,q)},
nc(a,b,c){var s
if(b===c)throw A.k(A.ac("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.e(a,b)
if(a.charCodeAt(b)===118){s=A.nd(a,b,c)
if(s!=null)throw A.k(s)
return!1}A.l3(a,b,c)
return!0},
nd(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.aM(n,a,q)
r=q
break}return new A.aM("Unexpected character",a,q-1)}if(r-1===b)return new A.aM(n,a,r)
return new A.aM("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.aM("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.e(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.aM("Invalid IPvFuture address character",a,r)}},
l3(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="an address must contain at most 8 parts",a1=new A.ha(a2)
if(a4-a3<2)a1.$2("address is too short",null)
s=new Uint8Array(16)
r=a2.length
if(!(a3>=0&&a3<r))return A.e(a2,a3)
q=-1
p=0
if(a2.charCodeAt(a3)===58){o=a3+1
if(!(o<r))return A.e(a2,o)
if(a2.charCodeAt(o)===58){n=a3+2
m=n
q=0
p=1}else{a1.$2("invalid start colon",a3)
n=a3
m=n}}else{n=a3
m=n}for(l=0,k=!0;;){if(n>=a4)j=0
else{if(!(n<r))return A.e(a2,n)
j=a2.charCodeAt(n)}A:{i=j^48
if(i<=9)h=i
else{g=j|32
if(g>=97&&g<=102)h=g-87
else break A
k=!1}if(n<m+4){l=l*16+h;++n
continue}a1.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.nb(a2,m,a4,s,p*2)
p+=2
n=a4
break}a1.$2(a0,m)}break}o=p*2
f=B.q.aJ(l,8)
if(!(o<16))return A.e(s,o)
s[o]=f;++o
if(!(o<16))return A.e(s,o)
s[o]=l&255;++p
if(j===58){if(p<8){++n
m=n
l=0
k=!0
continue}a1.$2(a0,n)}break}if(j===58){if(q<0){e=p+1;++n
q=p
p=e
m=n
continue}a1.$2("only one wildcard `::` is allowed",n)}if(q!==p-1)a1.$2("missing part",n)
break}if(n<a4)a1.$2("invalid character",n)
if(p<8){if(q<0)a1.$2("an address without a wildcard must contain exactly 8 parts",a4)
d=q+1
c=p-d
if(c>0){b=d*2
a=16-c*2
B.bo.bF(s,a,16,s,b)
B.bo.d_(s,b,a,0)}}return s},
j3(a,b,c,d,e,f,g){return new A.dn(a,b,c,d,e,f,g)},
lk(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c6(a,b,c){throw A.k(A.ac(c,a,b))},
lq(a,b){if(a!=null&&a===A.lk(b))return null
return a},
lo(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(a==null)return null
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.e(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.e(a,r)
if(a.charCodeAt(r)!==93)A.c6(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.e(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.nE(a,q,r)
if(o<r){n=o+1
p=A.lv(a,B.c.L(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.nc(a,q,o)
l=B.c.l(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.e(a,k)
if(a.charCodeAt(k)===58){o=B.c.ah(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.lv(a,B.c.L(a,"25",n)?o+3:n,c,"%25")}else p=""
A.l3(a,b,o)
return"["+B.c.l(a,b,o)+p+"]"}}return A.nK(a,b,c)},
nE(a,b,c){var s=B.c.ah(a,"%",b)
return s>=b&&s<c?s:c},
lv(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aa(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.k_(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aa("")
l=h.a+=B.c.l(a,q,r)
if(m)n=B.c.l(a,r,r+3)
else if(n==="%")A.c6(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.f.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aa("")
if(q<r){h.a+=B.c.l(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.e(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.c.l(a,q,r)
if(h==null){h=new A.aa("")
m=h}else m=h
m.a+=i
l=A.jZ(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.c.l(a,b,c)
if(q<c){i=B.c.l(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
nK(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.e(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.k_(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aa("")
k=B.c.l(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.c.l(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aa("")
if(q<r){p.a+=B.c.l(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.c6(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.e(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.c.l(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aa("")
l=p}else l=p
l.a+=k
j=A.jZ(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.c.l(a,b,c)
if(q<c){k=B.c.l(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
nI(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.e(a,b)
if(!A.lm(a.charCodeAt(b)))A.c6(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.e(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.c6(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.c.l(a,b,c)
return A.nD(q?a.toLowerCase():a)},
nD(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
lr(a,b,c){if(a==null)return""
return A.dp(a,b,c,16,!1,!1)},
lp(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.dp(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.c.C(s,"/"))s="/"+s
return A.nJ(s,e,f)},
nJ(a,b,c){var s=b.length===0
if(s&&!c&&!B.c.C(a,"/")&&!B.c.C(a,"\\"))return A.lu(a,!s||c)
return A.lw(a)},
j4(a,b,c,d){if(a!=null){if(d!=null)throw A.k(A.aJ("Both query and queryParameters specified",null))
return A.dp(a,b,c,256,!0,!1)}if(d==null)return null
return A.nG(d)},
nH(a){var s={},r=new A.aa("")
s.a=""
a.R(0,new A.j5(new A.j6(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
ln(a,b,c){if(a==null)return null
return A.dp(a,b,c,256,!0,!1)},
k_(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.e(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.e(a,l)
q=a.charCodeAt(l)
p=A.jz(r)
o=A.jz(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.e(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.b_(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.c.l(a,b,b+3).toUpperCase()
return null},
jZ(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.e(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.q.cH(a,6*p)&63|q
if(!(o<r))return A.e(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.e(k,l)
if(!(m<r))return A.e(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.e(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.kX(s,0,null)},
dp(a,b,c,d,e,f){var s=A.lt(a,b,c,d,e,f)
return s==null?B.c.l(a,b,c):s},
lt(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.e(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.k_(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.c6(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.e(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.jZ(n)}if(o==null){o=new A.aa("")
k=o}else k=o
k.a=(k.a+=B.c.l(a,p,q))+l
if(typeof m!=="number")return A.oF(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.c.l(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
ls(a){if(B.c.C(a,"."))return!0
return B.c.bu(a,"/.")!==-1},
lw(a){var s,r,q,p,o,n,m
if(!A.ls(a))return a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.e(s,-1)
s.pop()
if(s.length===0)B.e.p(s,"")}p=!0}else{p="."===n
if(!p)B.e.p(s,n)}}if(p)B.e.p(s,"")
return B.e.T(s,"/")},
lu(a,b){var s,r,q,p,o,n
if(!A.ls(a))return!b?A.ll(a):a
s=A.a([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.e.ga0(s)!==".."){if(0>=s.length)return A.e(s,-1)
s.pop()}else B.e.p(s,"..")
p=!0}else{p="."===n
if(!p)B.e.p(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.e.p(s,"")
if(!b){if(0>=s.length)return A.e(s,0)
B.e.h(s,0,A.ll(s[0]))}return B.e.T(s,"/")},
ll(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.lm(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.c.l(a,0,s)+"%3A"+B.c.Z(a,s+1)
if(r<=127){if(!(r<128))return A.e(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
nF(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.e(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.k(A.aJ("Invalid URL encoding",null))}}return r},
j8(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=e&&r===43
if(q){s=!1
break}++n}if(s)if(B.S===d)return B.c.l(a,b,c)
else p=new A.dE(B.c.l(a,b,c))
else{p=A.a([],t.Y)
for(n=b;n<c;++n){if(!(n<o))return A.e(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.k(A.aJ("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.k(A.aJ("Truncated URI",null))
B.e.p(p,A.nF(a,n+1))
n+=2}else if(e&&r===43)B.e.p(p,32)
else B.e.p(p,r)}}t.L.a(p)
return B.lw.aP(p)},
lm(a){var s=a|32
return 97<=s&&s<=122},
l1(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.a([b-1],t.Y)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.k(A.ac(k,a,r))}}if(q<0&&r>b)throw A.k(A.ac(k,a,r))
while(p!==44){B.e.p(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.e(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.e.p(j,o)
else{n=B.e.ga0(j)
if(p!==44||r!==n+7||!B.c.L(a,"base64",n+1))throw A.k(A.ac("Expecting '='",a,r))
break}}B.e.p(j,r)
m=r+1
if((j.length&1)===1)a=B.cc.d9(a,m,s)
else{l=A.lt(a,m,s,256,!0,!1)
if(l!=null)a=B.c.a3(a,m,s,l)}return new A.h9(a,j,c)},
lM(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.e(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.e(n,p)
o=n.charCodeAt(p)
d=o&31
B.e.h(e,o>>>5,r)}return d},
j7:function j7(a){this.a=a},
aU:function aU(a){this.a=a},
hU:function hU(){},
O:function O(){},
dx:function dx(a){this.a=a},
aO:function aO(){},
ax:function ax(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cQ:function cQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eb:function eb(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cW:function cW(a){this.a=a},
eF:function eF(a){this.a=a},
cU:function cU(a){this.a=a},
dF:function dF(a){this.a=a},
eu:function eu(){},
bX:function bX(){},
hV:function hV(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
a0:function a0(a,b,c){this.a=a
this.b=b
this.$ti=c},
a8:function a8(){},
M:function M(){},
f5:function f5(){},
aa:function aa(a){this.a=a},
hb:function hb(a){this.a=a},
ha:function ha(a){this.a=a},
dn:function dn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
j6:function j6(a,b){this.a=a
this.b=b},
j5:function j5(a){this.a=a},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
eR:function eR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
dL:function dL(a,b){this.a=a
this.$ti=b},
Y:function Y(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.a=d},
d_:function d_(a){var _=this
_.f=!1
_.b=_.a=$
_.c=null
_.d=!0
_.e=a},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hF:function hF(a){this.a=a},
V:function V(a,b,c){this.c=a
this.d=b
this.a=c},
eS:function eS(a){var _=this
_.r=_.f=!1
_.b=_.a=$
_.c=null
_.d=!0
_.e=a},
hT:function hT(a){this.a=a},
hN:function hN(a){this.a=a},
hM:function hM(a){this.a=a},
hO:function hO(a){this.a=a},
hL:function hL(a){this.a=a},
hR:function hR(a){this.a=a},
hJ:function hJ(a){this.a=a},
hQ:function hQ(){},
hP:function hP(a){this.a=a},
hK:function hK(a){this.a=a},
hS:function hS(a){this.a=a},
hI:function hI(a){this.a=a},
dI:function dI(a){this.a=a},
fh:function fh(a){this.a=a},
L:function L(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
eY:function eY(a){var _=this
_.f=!1
_.b=_.a=$
_.c=null
_.d=!0
_.e=a},
iG:function iG(a){this.a=a},
iF:function iF(a){this.a=a},
iH:function iH(a){this.a=a},
iE:function iE(a){this.a=a},
dJ:function dJ(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.a=e},
fl:function fl(a){this.a=a},
fi:function fi(){},
fj:function fj(a,b){this.a=a
this.b=b},
fk:function fk(){},
oi(a){var s=t.dq
s=A.bL(new A.bo(B.k3,t.h1.a(new A.jo(a.toLowerCase())),s),s.i("m.E"))
return s},
jo:function jo(a){this.a=a},
jn:function jn(a){this.a=a},
bT:function bT(a,b){this.c=a
this.a=b},
dc:function dc(a,b,c){var _=this
_.f=a
_.r=b
_.w=""
_.b=_.a=$
_.c=null
_.d=!0
_.e=c},
iU:function iU(a){this.a=a},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(){},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.a=d},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a){this.a=a},
bI:function bI(a){this.a=a},
d3:function d3(a,b,c,d){var _=this
_.f=0
_.r=!0
_.w=50
_.x=a
_.y=b
_.z=5
_.Q=!1
_.as=null
_.at=c
_.b=_.a=$
_.c=null
_.d=!0
_.e=d},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
id:function id(){},
ie:function ie(){},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a},
il:function il(a){this.a=a},
ii:function ii(a){this.a=a},
im:function im(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
io:function io(a){this.a=a},
ig:function ig(a,b){this.a=a
this.b=b},
i8:function i8(a){this.a=a},
ib:function ib(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
ic:function ic(a,b){this.a=a
this.b=b},
i9:function i9(a,b){this.a=a
this.b=b},
ed:function ed(a){this.a=a},
bS:function bS(a){this.a=a},
f1:function f1(a){var _=this
_.f=320
_.b=_.a=$
_.c=null
_.d=!0
_.e=a},
iP:function iP(a){this.a=a},
iO:function iO(a){this.a=a},
iQ:function iQ(a){this.a=a},
iN:function iN(a){this.a=a},
iR:function iR(a){this.a=a},
iM:function iM(a){this.a=a},
ex:function ex(a){this.a=a},
bZ:function bZ(a){this.a=a},
df:function df(a,b,c){var _=this
_.f=a
_.r=b
_.b=_.a=$
_.c=null
_.d=!0
_.e=c},
iX:function iX(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=b},
bz:function bz(a){this.a=a},
eO:function eO(a){var _=this
_.f=!1
_.r=!0
_.b=_.a=$
_.c=null
_.d=!0
_.e=a},
ho:function ho(a){this.a=a},
hn:function hn(a){this.a=a},
hq:function hq(a){this.a=a},
hp:function hp(a){this.a=a},
dB:function dB(a){this.a=a},
bB:function bB(a){this.a=a},
eQ:function eQ(a){var _=this
_.f="None"
_.b=_.a=$
_.c=null
_.d=!0
_.e=a},
hz:function hz(a){this.a=a},
hy:function hy(a){this.a=a},
hA:function hA(a){this.a=a},
hx:function hx(a){this.a=a},
hB:function hB(a){this.a=a},
hw:function hw(a){this.a=a},
hC:function hC(a){this.a=a},
hv:function hv(a){this.a=a},
hE:function hE(a){this.a=a},
hD:function hD(a){this.a=a},
dH:function dH(a){this.a=a},
bK:function bK(a){this.a=a},
eX:function eX(a,b){var _=this
_.f=a
_.r=!0
_.w=1
_.x=!0
_.y=40
_.z="Option 1"
_.b=_.a=$
_.c=null
_.d=!0
_.e=b},
iu:function iu(a){this.a=a},
it:function it(){},
iv:function iv(a){this.a=a},
is:function is(a,b){this.a=a
this.b=b},
iA:function iA(a){this.a=a},
iz:function iz(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
iy:function iy(a,b){this.a=a
this.b=b},
iC:function iC(a){this.a=a},
ix:function ix(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a},
iw:function iw(a,b){this.a=a
this.b=b},
ej:function ej(a){this.a=a},
bO:function bO(a){this.a=a},
d7:function d7(a){var _=this
_.f=!1
_.b=_.a=$
_.c=null
_.d=!0
_.e=a},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
iJ:function iJ(a){this.a=a},
ez:function ez(a){this.a=a},
h1:function h1(){},
c3:function c3(a){this.a=a},
f7:function f7(a){var _=this
_.f=!1
_.r=!0
_.b=_.a=$
_.c=null
_.d=!0
_.e=a},
jg:function jg(a){this.a=a},
jf:function jf(a){this.a=a},
jh:function jh(a){this.a=a},
je:function je(a){this.a=a},
ji:function ji(a){this.a=a},
jd:function jd(a){this.a=a},
jk:function jk(a){this.a=a},
jj:function jj(a){this.a=a},
kq(a){if(a===B.aX)return"linear"
if(a instanceof A.ci)return"cubic-bezier(0.42, 0, 0.58, 1)"
return"ease"},
cj:function cj(){},
eZ:function eZ(){},
ci:function ci(){},
bk:function bk(a,b){this.b=a
this.a=b},
q:function q(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fG:function fG(){},
aF:function aF(a){this.a=a},
aL:function aL(a){this.a=a},
cX(a){var s,r,q,p,o,n
if(A.a2(a.nodeType)===1){$.du().h(0,a,null)
$.cc().h(0,a,null)
if(A.w(a.id).length!==0)A.n4(A.w(a.id))
s=A.d(a.querySelectorAll("[id]"))
for(r=t.m,q=0;q<A.a2(s.length);++q){p=A.z(s.item(q))
if(r.b(p)&&A.w(p.id).length!==0){o=$.du()
o.a.set(p,null)
o=$.cc()
o.a.set(p,null)
n=$.f9.M(0,A.w(p.id))
if(n!=null)n.a9()}}}},
he(a){var s,r,q
if(A.a2(a.nodeType)!==1)return null
s=$.cc()
A.ks(a)
r=s.a.get(a)
if(r!=null&&r.length!==0)return r
q=A.aC(a.getAttribute("data-key"))
if(q!=null&&q.length!==0)return q
if(A.w(a.id).length!==0)return A.w(a.id)
return null},
jU(a){var s
if(a instanceof A.q){s=a.c
if(s!=null&&s.length!==0)return s
s=a.b
if(s!=null&&s.length!==0)return s}return null},
l7(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
if(c instanceof A.aF)if(A.a2(b.nodeType)!==3){A.cX(b)
s=A.d(A.d(v.G.document).createTextNode(c.a))
A.d(a.replaceChild(s,b))
return s}else{r=c.a
if(A.aC(b.textContent)!==r)b.textContent=r
return b}else if(c instanceof A.aL){A.cX(b)
q=A.d(A.d(v.G.document).createElement("div"))
q.setHTMLUnsafe(c.a)
if(A.a2(A.d(q.childNodes).length)===1){r=A.z(q.firstChild)
r.toString
s=r}else s=q
A.d(a.replaceChild(s,b))
return s}else if(c instanceof A.q)if(A.a2(b.nodeType)!==1){A.cX(b)
s=A.eK(c)
A.d(a.replaceChild(s,b))
return s}else{r=A.w(b.tagName)
p=A.he(b)
o=A.jU(c)
n=o!=null&&p!=null&&o!==p
m=c.b
l=m==null
k=!l
j=k&&A.w(b.id).length!==0&&A.w(b.id)!==m
if(r.toLowerCase()!==c.a.toLowerCase()||n||j){A.cX(b)
s=A.eK(c)
A.d(a.replaceChild(s,b))
return s}else{if(k&&A.w(b.id)!==m)b.id=m
else if(l&&A.w(b.id).length!==0)b.removeAttribute("id")
i=c.c
if(i==null)i=(l?null:m.length!==0)===!0?m:null
if(i!=null){$.cc().h(0,b,i)
b.setAttribute("data-key",i)}else{$.cc().h(0,b,null)
b.removeAttribute("data-key")}A.l5(b,c)
A.l8(b,c)
A.l6(b,c)
A.jV(b,c.f)
return b}}throw A.k(A.jJ("Unknown VDOM node type"))},
eK(a){var s,r,q,p,o,n
if(a instanceof A.aF)return A.d(A.d(v.G.document).createTextNode(a.a))
else if(a instanceof A.aL){s=A.d(A.d(v.G.document).createElement("div"))
s.setHTMLUnsafe(a.a)
if(A.a2(A.d(s.childNodes).length)===1){r=A.z(s.firstChild)
r.toString}else r=s
return r}else if(a instanceof A.q){q=A.d(A.d(v.G.document).createElement(a.a))
r=a.b
p=r==null
if(!p)q.id=r
o=a.c
if(o==null)o=(p?null:r.length!==0)===!0?r:null
if(o!=null){$.cc().h(0,q,o)
q.setAttribute("data-key",o)}A.l5(q,a)
A.l8(q,a)
A.l6(q,a)
r=a.f
if(r!=null)for(p=r.length,n=0;n<r.length;r.length===p||(0,A.aH)(r),++n)A.d(q.appendChild(A.eK(r[n])))
return q}throw A.k(A.jJ("Unknown VDOM node type"))},
l5(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="value",g=b.d
if(g==null){s=t.N
g=A.l(s,s)}r=A.a([],t.s)
for(q=0;q<A.a2(A.d(a.attributes).length);++q){p=A.z(A.d(a.attributes).item(q))
if(p!=null&&A.w(p.name)!=="style"&&A.w(p.name)!=="id"&&A.w(p.name)!=="data-key")B.e.p(r,A.w(p.name))}for(s=r.length,o=0;o<r.length;r.length===s||(0,A.aH)(r),++o){n=r[o]
if(!g.K(n))a.removeAttribute(n)}for(s=g.gag(),s=s.gD(s);s.t();){m=s.gu()
l=m.a
k=A.aC(a.getAttribute(l))
m=m.b
if(k!==m)a.setAttribute(l,m)}if(A.w(a.tagName).toUpperCase()==="INPUT"){if(g.K(h)&&A.w(a.value)!==g.q(0,h)){s=g.q(0,h)
s.toString
a.value=s}if(g.K("checked")){j=g.q(0,"checked")
i=j==="true"||j==="checked"||j===""
if(A.k1(a.checked)!==i)a.checked=i}else if(A.w(a.type)==="checkbox"||A.w(a.type)==="radio")a.checked=!1}},
l8(a,b){var s,r,q,p=b.e
if(p==null){s=t.N
p=A.l(s,s)}r=A.aC(a.getAttribute("style"))
if(r==null)r=""
s=A.H(p).i("ag<1,2>")
q=A.kI(new A.ag(p,s),s.i("f(m.E)").a(new A.hj()),s.i("m.E"),t.N).T(0," ")
if(r!==q)if(q.length===0)a.removeAttribute("style")
else a.setAttribute("style",q)},
l6(a,b){var s,r,q,p,o=b.r
if(o==null)o=A.l(t.N,t.v)
s=$.du()
A.ks(a)
r=s.a.get(a)
if(r==null)r=A.l(t.N,t.g)
q=A.a([],t.s)
r.R(0,new A.hh(o,a,q))
for(s=q.length,p=0;p<q.length;q.length===s||(0,A.aH)(q),++p)r.M(0,q[p])
o.R(0,new A.hi(r,a))
if(r.ga_(r))$.du().h(0,a,null)
else $.du().h(0,a,r)},
jV(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(a3==null)a3=A.a([],t.y)
s=A.ne(a2)
q=a3.length
p=0
for(;;){if(!(p<q)){r=!1
break}if(A.jU(a3[p])!=null){r=!0
break}++p}if(!r){q=s.length
p=0
for(;;){if(!(p<s.length)){r=!1
break}if(A.he(s[p])!=null){r=!0
break}s.length===q||(0,A.aH)(s);++p}}if(!r){for(o=0;q=a3.length,o<q;){if(o<s.length){n=s[o]
if(!(o<q))return A.e(a3,o)
A.l7(a2,n,a3[o])}else A.d(a2.appendChild(A.eK(a3[o])));++o}while(o<s.length){A.cX(s[o])
if(!(o<s.length))return A.e(s,o)
q=s[o]
if(A.z(q.parentNode)===a2)A.d(a2.removeChild(q));++o}return}q=t.m
m=A.l(t.N,q)
for(n=s.length,p=0;p<s.length;s.length===n||(0,A.aH)(s),++p){l=s[p]
k=A.he(l)
if(k!=null)m.by(k,new A.hf(l))}j=A.jP(q)
i=A.a([],t.c)
for(q=s.length,p=0;p<s.length;s.length===q||(0,A.aH)(s),++p){l=s[p]
if(A.he(l)==null)B.e.p(i,l)}for(h=0,g=0;g<a3.length;++g){f=a3[g]
e=A.jU(f)
if(e!=null)d=m.M(0,e)
else for(;;){q=i.length
if(!(h<q)){d=null
break}c=h+1
if(!(h>=0))return A.e(i,h)
b=i[h]
if(!j.X(0,b)){d=b
h=c
break}h=c}if(d!=null){j.p(0,d)
a=A.l7(a2,d,f)
if(a!==d){j.M(0,d)
j.p(0,a)}a0=A.z(A.d(a2.childNodes).item(g))
if(a0!==a)A.d(a2.insertBefore(a,a0))}else A.d(a2.insertBefore(A.eK(f),A.z(A.d(a2.childNodes).item(g))))}for(q=s.length,p=0;p<s.length;s.length===q||(0,A.aH)(s),++p){a1=s[p]
if(!j.X(0,a1)){A.cX(a1)
if(A.z(a1.parentNode)===a2)A.d(a2.removeChild(a1))}}},
ne(a){var s,r,q=A.a([],t.c),p=A.d(a.childNodes)
for(s=0;s<A.a2(p.length);++s){r=A.z(p.item(s))
if(r!=null)B.e.p(q,r)}return q},
hj:function hj(){},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(a,b){this.a=a
this.b=b},
hg:function hg(a){this.a=a},
hf:function hf(a){this.a=a},
dz:function dz(a,b){this.a=a
this.b=b},
be:function be(a,b){this.a=a
this.b=b},
ch:function ch(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
h2:function h2(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
eE:function eE(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(a,b){this.a=a
this.b=b},
fg:function fg(){},
bQ:function bQ(a){this.b=a},
jE(a){var s=B.c.a4(a).toLowerCase()
if(B.c.C(s,"http://")||B.c.C(s,"https://")||B.c.C(s,"mailto:")||B.c.C(s,"tel:")||B.c.C(s,"sms:"))return!0
if(B.c.C(s,"//")&&!B.c.C(s,"///"))return!0
return!1},
oQ(a){var s
if(A.jE(a))return a
if(a.length===0)return"/"
s=A.jr(a)
if(s.length===0)return"/"
return"/"+B.e.T(s,"/")},
oP(a,b){var s,r,q,p,o=null,n=A.jr(a),m=A.jr(b),l=t.N,k=A.l(l,l)
for(s=0;l=n.length,s<l;++s){r=n[s]
if(r==="*"){l=A.an(m)
q=new A.cV(m,s,o,l.i("cV<1>"))
q.bI(m,s,o,l.c)
k.h(0,"*",q.T(0,"/"))
return k}if(s>=m.length)return o
p=m[s]
if(B.c.C(r,":")&&r.length>1){k.h(0,B.c.Z(r,1),A.j8(p,0,p.length,B.S,!1))
continue}if(r!==p)return o}if(!(l!==0&&B.e.ga0(n)==="*"))if(n.length!==m.length)return o
return k},
lQ(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=null
if(A.jE(a)){if(a0==null||a0.ga_(a0))return a
s=A.l2(a)
r=t.N
q=A.kG(s.gaZ(),r,r)
q.H(0,a0)
return s.bz(q).gaL()}p=A.oQ(a)
if(a0==null||a0.ga_(a0))return"#"+p
r=t.N
o=A.kG(a0,r,r)
n=A.jr(p)
for(m=0;r=n.length,m<r;++m){l=n[m]
if(B.c.C(l,":")&&l.length>1){k=B.c.Z(l,1)
if(o.K(k)){r=o.q(0,k)
r.toString
B.e.h(n,m,A.k0(2,r,B.S,!1))
o.M(0,k)}}else if(l==="*"&&o.K("*")){r=o.q(0,"*")
r.toString
B.e.h(n,m,r)
o.M(0,"*")}}j=r===0?"/":"/"+B.e.T(n,"/")
if(o.a===0)return"#"+j
i=A.lr(b,0,0)
h=A.lo(b,0,0,!1)
g=A.j4(b,0,0,o)
f=A.ln(b,0,0)
e=A.lq(b,"")
if(h==null)if(i.length===0)r=e!=null
else r=!0
else r=!1
if(r)h=""
r=h==null
d=!r
c=A.lp(b,0,0,b,"",d)
if(r&&!B.c.C(c,"/"))c=A.lu(c,d)
else c=A.lw(c)
g=A.j3("",i,r&&B.c.C(c,"//")?"":h,e,c,g,f).f
if(g==null)g=""
return"#"+j+"?"+g},
jr(a){var s
if(a==="/"||a.length===0)return B.jT
s=t.cc
s=A.bL(new A.bo(A.a(a.split("/"),t.s),t.bB.a(new A.js()),s),s.i("m.E"))
return s},
js:function js(){},
by:function by(a,b){this.a=a
this.b=b},
v(a,b){var s=new A.b7(b,a)
return new A.aS(s,s,s,s)},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a,b){this.a=a
this.b=b},
fc:function fc(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h:function h(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=e
_.r=f},
fd:function fd(){},
fI:function fI(){},
fJ:function fJ(){},
aj:function aj(a,b,c){this.c=a
this.d=b
this.e=c},
mB(a){var s=B.c.bx(B.q.df(a,16),8,"0"),r=B.c.l(s,0,2),q=B.c.l(s,2,4),p=B.c.l(s,4,6),o=B.c.l(s,6,8),n=A.bu(r,16)/255
if(n>=0.999)return"#"+q+p+o
return"rgba("+A.bu(q,16)+", "+A.bu(p,16)+", "+A.bu(o,16)+", "+B.X.dg(n,2)+")"},
F:function F(a,b){this.a=a
this.b=b},
cu:function cu(a,b,c){this.c=a
this.a=b
this.b=c},
x:function x(a,b){this.a=a
this.b=b},
t:function t(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kM(){var s,r,q=null
if($.a4.length===0)return B.ly
s=B.e.ga0($.a4)
r=$.bg
if(r===B.w)return s
switch(r.a){case 1:return A.cm(s,!0,q,q,q)
case 2:return A.cm(s,!0,100,q,q)
case 3:return A.cm(s,!0,-100,q,q)
case 4:return A.cm(s,!0,q,100,q)
case 5:return A.cm(s,!0,q,-100,q)
case 6:return A.cm(s,!0,q,q,0.8)
default:return s}},
mY(a){$.bh.cU(0)
$.bh.H(0,a.d7(0,new A.fZ(),t.N,t.Q))
$.mU=$.mX=$.mT=null},
bi(a,b){var s
if(A.jE(a)){A.kO(a,!1)
return}$.bg=b
s=t.N
A.kK(a,A.l(s,s),!1)},
kO(a,b){var s=v.G
if(b)A.z(A.d(s.window).open(a,"_blank"))
else A.d(A.d(s.window).location).assign(a)},
kP(a){var s
if(A.jE(a)){A.kO(a,!0)
return}s=A.lQ(a,null)
A.z(A.d(v.G.window).open(s,"_blank"))},
kN(){var s,r,q
if($.kJ)return
$.kJ=!0
s=v.G
A.d(s.window).addEventListener("popstate",A.k2(new A.fX()))
r=B.c.bA(A.w(A.d(A.d(s.window).location).hash),"#","")
if(B.c.C(r,"/"))s=r
else s=r.length===0?"/":"/"+r
q=A.l2(s)
A.kK(q.gaX(),q.gaZ(),!0)},
kK(a,b,c){var s,r,q,p=A.mV(a,b)
if(p!=null){if(c&&$.a4.length!==0){if(0>=$.a4.length)return A.e($.a4,-1)
$.a4.pop()}B.e.p($.a4,p)
A.kL(p,b,c,a)
s=$.bg
A.dt()
if(s===B.w)$.bg=B.w
return}s=a==="/"
if((s||a.length===0)&&$.a4.length!==0)return
if(s&&$.bh.a!==0){r=new A.ag($.bh,A.H($.bh).i("ag<1,2>")).gd0(0)
q=r.b.$1(b)
if(c&&$.a4.length!==0){if(0>=$.a4.length)return A.e($.a4,-1)
$.a4.pop()}B.e.p($.a4,q)
A.kL(q,b,c,r.a)
s=$.bg
A.dt()
if(s===B.w)$.bg=B.w
return}A.mW(a)},
mV(a,b){var s,r,q,p=$.bh.q(0,a)
if(p!=null)return p.$1(b)
for(s=new A.ag($.bh,A.H($.bh).i("ag<1,2>")).gD(0);s.t();){r=s.d
q=A.oP(r.a,a)
if(q==null)continue
s=t.N
s=A.jO(s,s)
s.H(0,b)
s.H(0,q)
return r.b.$1(s)}return null},
kL(a,b,c,d){var s=A.lQ(d,b)
if(c){A.d(A.d(v.G.window).history).replaceState("Instance of '"+A.bR(a)+"'","",s)
return}A.d(A.d(v.G.window).history).pushState("Instance of '"+A.bR(a)+"'","",s)},
mW(a){var s=A.z(A.d(v.G.document).querySelector("#output"))
if(s!=null)s.setHTMLUnsafe('<div>404: Route "$path" not found</div>')},
h0:function h0(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
fY:function fY(a){this.a=a},
fX:function fX(){},
eT:function eT(a){this.a=a},
cg:function cg(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=b},
aB(a,b,c,d,e){return new A.o(a,b,c,null,e,d)},
aY:function aY(a){this.a=a},
o:function o(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.f=d
_.r=e
_.x=f},
kY(){var s=null
return new A.h5(B.iF,B.W,B.W,A.aB(B.iv,16,s,s,s),new A.F("#eeeeee",s),B.iG,!1)},
am(a){var s=a.cX(t.gZ),r=s==null?null:s.d
return r==null?A.kY():r},
h5:function h5(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.y=g},
bl:function bl(a,b,c){this.d=a
this.b=b
this.a=c},
nX(){var s,r
if($.jq!=null)return
s=A.kB()
s.id="flart-animation-sheet"
r=A.z(A.d(v.G.document).head)
if(r!=null)r.append(s)
$.jq=A.z(s.sheet)
A.o1()},
o1(){var s,r,q="flart-entrance-anim"
if($.jq==null)return
if(!$.lE.X(0,q))try{s=$.jq
A.a2(s.insertRule("@keyframes flart-entrance-anim {\n  0% {\n    opacity: var(--flart-anim-opacity, 1);\n    transform: translate(var(--flart-anim-x, 0px), var(--flart-anim-y, 0px)) scale(var(--flart-anim-scale, 1));\n  }\n  100% {\n    opacity: 1;\n    transform: translate(0px, 0px) scale(1);\n  }\n}\n",A.a2(A.d(s.cssRules).length)))
$.lE.p(0,q)}catch(r){}},
cm(a,b,c,d,e){return new A.dN(a,c,d,e,!0,null)},
dN:function dN(a,b,c,d,e,f){var _=this
_.b=a
_.e=b
_.f=c
_.r=d
_.x=e
_.a=f},
dO:function dO(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.f=d
_.y=e
_.z=f
_.a=g},
dv:function dv(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
kt(a,b){return new A.dM(b,a,null)},
dM:function dM(a,b,c){this.b=a
this.c=b
this.a=c},
cn(a){return new A.ad(a,null)},
ad:function ad(a,b){this.b=a
this.a=b},
n(a,b,c,d){return new A.R(a,c,b,d,null)},
R:function R(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.a=e},
fp:function fp(a){this.a=a},
fU:function fU(a,b){this.a=a
this.b=b},
e_:function e_(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.r=e
_.w=f
_.y=g
_.z=h
_.Q=i
_.a=j},
ku(a,b,c,d,e){return new A.bG(b,e,c,d,a,null)},
bG:function bG(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.a=f},
I(a,b,c,d){return new A.Z(a,c,b,d,null)},
Z:function Z(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.a=e},
fy:function fy(a){this.a=a},
kw(a,b){return new A.cr(a,b,null)},
cr:function cr(a,b,c){this.b=a
this.e=b
this.a=c},
fC:function fC(a){this.a=a},
aX(a,b,c,d,e){return new A.ct(b,a,c,e,d,null)},
ct:function ct(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.r=e
_.a=f},
fF:function fF(a){this.a=a},
ap(a,b){return new A.dT(a,b,null)},
dT:function dT(a,b,c){this.b=a
this.c=b
this.a=c},
fr:function fr(a){this.a=a},
S(a,b){return new A.dU(a,b,null)},
fL:function fL(a,b){this.a=a
this.b=b},
dU:function dU(a,b,c){this.b=a
this.c=b
this.a=c},
fs:function fs(a){this.a=a},
dX:function dX(a,b,c){this.b=a
this.c=b
this.a=c},
fu:function fu(a){this.a=a},
e1:function e1(a,b,c){this.b=a
this.c=b
this.a=c},
fw:function fw(a){this.a=a},
ky(a,b){return new A.e6(a,b,null)},
e6:function e6(a,b,c){this.b=a
this.d=b
this.a=c},
fE:function fE(a){this.a=a},
mE(a,b){$.ec.by(a,new A.fO()).p(0,b)},
mF(a){var s
for(s=new A.bc($.ec,$.ec.r,$.ec.e,A.H($.ec).i("bc<2>"));s.t();)s.d.M(0,a)},
fO:function fO(){},
bJ:function bJ(){},
kv(a,b,c,d){return new A.e4(d,b,a,c,null)},
cp:function cp(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.a=d
_.$ti=e},
fq:function fq(a){this.a=a},
aV:function aV(a,b,c,d){var _=this
_.b=a
_.c=b
_.a=c
_.$ti=d},
e4:function e4(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.r=d
_.a=e},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
kx(a,b){return new A.e5(b,a,null)},
dP:function dP(a,b,c){this.b=a
this.c=b
this.a=c},
fo:function fo(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.a=d
_.$ti=e},
fx:function fx(a){this.a=a},
e5:function e5(a,b,c){this.b=a
this.c=b
this.a=c},
fD:function fD(a){this.a=a},
cs(a,b,c,d,e){return new A.e7(b,d,c,e,a,null)},
e7:function e7(a,b,c,d,e,f){var _=this
_.c=a
_.e=b
_.w=c
_.ch=d
_.go=e
_.a=f},
n4(a){var s=$.f9.M(0,a)
if(s!=null)s.a9()},
y:function y(){},
U:function U(){},
eA:function eA(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i(a,b,c,d,e,f,g,h,i,j){return new A.P(b,g,j,f,d,i,h,e,c,a,null)},
P:function P(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.z=i
_.Q=j
_.a=k},
bF:function bF(a,b,c){this.b=a
this.c=b
this.a=c},
dR:function dR(a){this.a=a},
dQ:function dQ(a){this.a=a},
e9:function e9(a,b,c){this.b=a
this.c=b
this.a=c},
co:function co(a,b){this.f=a
this.a=b},
ab:function ab(a,b,c){this.b=a
this.c=b
this.a=c},
fK:function fK(a,b){this.a=a
this.b=b},
dV:function dV(a,b,c,d,e){var _=this
_.c=a
_.e=b
_.f=c
_.r=d
_.a=e},
ft:function ft(a,b){this.a=a
this.b=b},
ea(a,b,c){return new A.N(a,c,b,null,null,null)},
dW:function dW(){},
N:function N(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.a=f},
fv(a,b,c,d,e){return new A.dY(a.length===0?"/assets/flart_logo_with_text.png":a,e,d,c,b,null)},
fM:function fM(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.y=e
_.a=f},
e0:function e0(a,b,c,d){var _=this
_.b=a
_.e=b
_.as=c
_.a=d},
ak:function ak(a,b,c){this.b=a
this.c=b
this.a=c},
bE:function bE(a,b){this.d=a
this.a=b},
dZ:function dZ(a){this.a=a},
fz(a,b){return new A.e3(a,b,null)},
e3:function e3(a,b,c){this.b=a
this.c=b
this.a=c},
E:function E(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.a=d},
e8:function e8(a,b,c){this.b=a
this.c=b
this.a=c},
b9:function b9(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.w=e
_.y=f
_.z=g
_.Q=h
_.as=i
_.ax=j
_.ay=k
_.a=l},
d1:function d1(a){var _=this
_.b=_.a=_.f=$
_.c=null
_.d=!0
_.e=a},
hW:function hW(){},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
e2:function e2(a,b){this.b=a
this.a=b},
u(a,b,c){return new A.b(a,b,c,null)},
b:function b(a,b,c,d){var _=this
_.b=a
_.d=b
_.f=c
_.a=d},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
kn(a,b,c,d,e,f,g){var s,r,q,p,o=null
if(b==null)s=c==null?o:c.c
else s=b
if(s==null)s=A.l(t.n,t.l)
if(f==null)r=c==null?o:c.d
else r=f
if(r==null)r=A.l(t.n,t.z)
if(d==null)q=c==null?o:c.e
else q=d
if(q==null)q="root"
if(e==null)p=c==null?o:c.f
else p=e
return new A.aE(g,s,r,q,p==null?new A.bW():p,a)},
bW:function bW(){this.a=0},
aE:function aE(a,b,c,d,e,f){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
aW:function aW(a,b){this.c=a
this.a=b},
eV:function eV(a){var _=this
_.f=null
_.b=_.a=$
_.c=null
_.d=!0
_.e=a},
i_:function i_(a){this.a=a},
hZ:function hZ(){},
mA(a,b,c,d,e){return new A.dS(d,a,c,b,e,null)},
dS:function dS(a,b,c,d,e,f){var _=this
_.b=a
_.d=b
_.e=c
_.f=d
_.w=e
_.a=f},
j:function j(){},
oN(){var s,r,q
A.mY(A.C(["/",B.iJ,"/docs/installation",B.bm,"/docs/architecture",B.bE,"/docs/responsive",B.br,"/docs/state",B.bt,"/docs/routing",B.bs,"/docs/widgets/basic",B.aM,"/docs/widgets/layout",B.bn,"/docs/widgets/decoration",B.cU,"/docs/widgets/scrollables",B.kE,"/docs/widgets/inputs",B.bl,"/docs/widgets/buttons",B.aU,"/docs/widgets/animation",B.aK,"/docs/widgets/media",B.ky,"/docs/widgets/utility",B.lx,"/installation",B.bm,"/responsive",B.br,"/state",B.bt,"/routing",B.bs,"/basic",B.aM,"/layout",B.bn,"/inputs",B.bl,"/interactions",B.aU,"/animations",B.aK],t.N,t.l))
A.kN()
$.lK=B.kz
s=v.G
r=A.z(A.d(s.document).querySelector("#output"))
if(r==null)r=A.z(A.d(s.document).querySelector("#app"))
$.jm=r==null?A.z(A.d(s.document).body):r
r=A.z(A.d(s.document).querySelector("#flart-overlay"))
$.lJ=r
if(r==null){q=A.d(A.d(s.document).createElement("div"))
q.id="flart-overlay"
A.d(q.style).position="fixed"
A.d(q.style).top="0"
A.d(q.style).left="0"
A.d(q.style).width="100vw"
A.d(q.style).height="100vh"
A.d(q.style).pointerEvents="none"
A.d(q.style).zIndex="9999"
$.lJ=q
s=A.z(A.d(s.document).body)
if(s!=null)s.append(q)}A.dt()
A.kc("Flart app initialized and rendered")},
el:function el(a){this.a=a},
m1(a){return v.mangledGlobalNames[a]},
oR(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
a5(a){throw A.a3(A.mQ(a),new Error())},
ke(a){throw A.a3(A.mP(a),new Error())},
k2(a){var s
if(typeof a=="function")throw A.k(A.aJ("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.nT,a)
s[$.kf()]=a
return s},
nT(a,b,c){t.Z.a(a)
if(A.a2(c)>=1)return a.$1(b)
return a.$0()},
dt(){var s,r,q,p,o,n,m=null,l=$.lK
if(l==null||$.jm==null){A.kc("Cannot render: root widget or app container is null")
return}try{s=A.kn(m,m,m,m,m,m,l)
o=t.ez.a(s)
r=l.B(o).j(o)
o=$.jm
o.toString
A.jV(o,A.a([r],t.y))}catch(n){q=A.b4(n)
p=A.b2(n)
A.kc("Error rendering app: "+A.p(q)+"\n"+A.p(p))
l=$.jm
l.toString
l.setHTMLUnsafe('      <div style="padding: 20px; color: red; font-family: sans-serif; background: #fff;">\n        <h2>Flart Framework Error</h2>\n        <p><strong>Message:</strong> '+A.p(q)+'</p>\n        <pre style="overflow: auto; font-size: 12px; margin-top: 10px; background: #f5f5f5; padding: 10px;">'+A.p(p)+"</pre>\n      </div>\n    ")}},
kA(){return A.d(A.d(v.G.document).createElement("link"))},
kB(){return A.d(A.d(v.G.document).createElement("style"))}},B={}
var w=[A,J,B]
var $={}
A.jL.prototype={}
J.ee.prototype={
S(a,b){return a===b},
gF(a){return A.bj(a)},
k(a){return"Instance of '"+A.bR(a)+"'"},
gJ(a){return A.aG(A.k3(this))}}
J.eg.prototype={
k(a){return String(a)},
gF(a){return a?519018:218159},
gJ(a){return A.aG(t.w)},
$iK:1,
$iah:1}
J.cx.prototype={
S(a,b){return null==b},
k(a){return"null"},
gF(a){return 0},
$iK:1,
$ia8:1}
J.cB.prototype={$iJ:1}
J.aZ.prototype={
gF(a){return 0},
k(a){return String(a)}}
J.ev.prototype={}
J.c0.prototype={}
J.ay.prototype={
k(a){var s=a[$.m3()]
if(s==null)s=a[$.kf()]
if(s==null)return this.bG(a)
return"JavaScript function for "+J.aR(s)},
$iba:1}
J.cA.prototype={
gF(a){return 0},
k(a){return String(a)}}
J.cC.prototype={
gF(a){return 0},
k(a){return String(a)}}
J.Q.prototype={
af(a,b){return new A.aK(a,A.an(a).i("@<1>").G(b).i("aK<1,2>"))},
p(a,b){A.an(a).c.a(b)
a.$flags&1&&A.as(a,29)
a.push(b)},
dc(a,b){var s
a.$flags&1&&A.as(a,"removeAt",1)
s=a.length
if(b>=s)throw A.k(A.kS(b,null))
return a.splice(b,1)[0]},
M(a,b){var s
a.$flags&1&&A.as(a,"remove",1)
for(s=0;s<a.length;++s)if(J.fa(a[s],b)){a.splice(s,1)
return!0}return!1},
H(a,b){var s
A.an(a).i("m<1>").a(b)
a.$flags&1&&A.as(a,"addAll",2)
if(Array.isArray(b)){this.bM(a,b)
return}for(s=J.b5(b);s.t();)a.push(s.gu())},
bM(a,b){var s,r
t.D.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.k(A.at(a))
for(r=0;r<s;++r)a.push(b[r])},
T(a,b){var s,r=A.kH(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.h(r,s,A.p(a[s]))
return r.join(b)},
d1(a,b,c,d){var s,r,q
d.a(b)
A.an(a).G(d).i("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.k(A.at(a))}return r},
P(a,b){if(!(b>=0&&b<a.length))return A.e(a,b)
return a[b]},
ga0(a){var s=a.length
if(s>0)return a[s-1]
throw A.k(A.kD())},
k(a){return A.jK(a,"[","]")},
gD(a){return new J.ce(a,a.length,A.an(a).i("ce<1>"))},
gF(a){return A.bj(a)},
gv(a){return a.length},
q(a,b){if(!(b>=0&&b<a.length))throw A.k(A.ju(a,b))
return a[b]},
h(a,b,c){A.an(a).c.a(c)
a.$flags&2&&A.as(a)
if(!(b>=0&&b<a.length))throw A.k(A.ju(a,b))
a[b]=c},
$ir:1,
$im:1,
$iA:1}
J.ef.prototype={
dh(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.bR(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.fP.prototype={}
J.ce.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
t(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.aH(q)
throw A.k(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iT:1}
J.cy.prototype={
aO(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gak(b)
if(this.gak(a)===s)return 0
if(this.gak(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gak(a){return a===0?1/a<0:a<0},
bB(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.k(A.bn(""+a+".toInt()"))},
a2(a,b,c){if(this.aO(b,c)>0)throw A.k(A.k6(b))
if(this.aO(a,b)<0)return b
if(this.aO(a,c)>0)return c
return a},
dg(a,b){var s
if(b>20)throw A.k(A.a9(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gak(a))return"-"+s
return s},
df(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.k(A.a9(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.e(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.cb(A.bn("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.e(p,1)
s=p[1]
if(3>=r)return A.e(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.c.an("0",o)},
k(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
am(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
aK(a,b){return(a|0)===a?a/b|0:this.cL(a,b)},
cL(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.k(A.bn("Result of truncating division is "+A.p(s)+": "+A.p(a)+" ~/ "+b))},
aJ(a,b){var s
if(a>0)s=this.bl(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cH(a,b){if(0>b)throw A.k(A.k6(b))
return this.bl(a,b)},
bl(a,b){return b>31?0:a>>>b},
gJ(a){return A.aG(t.o)},
$iD:1,
$ibw:1}
J.cw.prototype={
gJ(a){return A.aG(t.S)},
$iK:1,
$ic:1}
J.eh.prototype={
gJ(a){return A.aG(t.i)},
$iK:1}
J.bb.prototype={
aN(a,b,c){var s=b.length
if(c>s)throw A.k(A.a9(c,0,s,null,null))
return new A.f3(b,a,c)},
bm(a,b){return this.aN(a,b,0)},
cY(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.Z(a,r-s)},
bA(a,b,c){return A.oV(a,b,c,0)},
a3(a,b,c,d){var s=A.cR(b,c,a.length)
return A.m0(a,b,s,d)},
L(a,b,c){var s
if(c<0||c>a.length)throw A.k(A.a9(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
C(a,b){return this.L(a,b,0)},
l(a,b,c){return a.substring(b,A.cR(b,c,a.length))},
Z(a,b){return this.l(a,b,null)},
a4(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.e(p,0)
if(p.charCodeAt(0)===133){s=J.mN(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.e(p,r)
q=p.charCodeAt(r)===133?J.mO(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
an(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.k(B.cl)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
bx(a,b,c){var s=b-a.length
if(s<=0)return a
return this.an(c,s)+a},
ah(a,b,c){var s
if(c<0||c>a.length)throw A.k(A.a9(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
bu(a,b){return this.ah(a,b,0)},
X(a,b){return A.oS(a,b,0)},
k(a){return a},
gF(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gJ(a){return A.aG(t.N)},
gv(a){return a.length},
$iK:1,
$ih_:1,
$if:1}
A.b0.prototype={
gD(a){return new A.cf(J.b5(this.ga8()),A.H(this).i("cf<1,2>"))},
gv(a){return J.b6(this.ga8())},
P(a,b){return A.H(this).y[1].a(J.jG(this.ga8(),b))},
k(a){return J.aR(this.ga8())}}
A.cf.prototype={
t(){return this.a.t()},
gu(){return this.$ti.y[1].a(this.a.gu())},
$iT:1}
A.b8.prototype={
ga8(){return this.a}}
A.d0.prototype={$ir:1}
A.cZ.prototype={
q(a,b){return this.$ti.y[1].a(J.ml(this.a,b))},
h(a,b,c){var s=this.$ti
J.mm(this.a,b,s.c.a(s.y[1].a(c)))},
$ir:1,
$iA:1}
A.aK.prototype={
af(a,b){return new A.aK(this.a,this.$ti.i("@<1>").G(b).i("aK<1,2>"))},
ga8(){return this.a}}
A.cE.prototype={
k(a){return"LateInitializationError: "+this.a}}
A.dE.prototype={
gv(a){return this.a.length},
q(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.e(s,b)
return s.charCodeAt(b)}}
A.r.prototype={}
A.al.prototype={
gD(a){var s=this
return new A.bd(s,s.gv(s),A.H(s).i("bd<al.E>"))},
T(a,b){var s,r,q,p=this,o=p.gv(p)
if(b.length!==0){if(o===0)return""
s=A.p(p.P(0,0))
if(o!==p.gv(p))throw A.k(A.at(p))
for(r=s,q=1;q<o;++q){r=r+b+A.p(p.P(0,q))
if(o!==p.gv(p))throw A.k(A.at(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.p(p.P(0,q))
if(o!==p.gv(p))throw A.k(A.at(p))}return r.charCodeAt(0)==0?r:r}}}
A.cV.prototype={
bI(a,b,c,d){var s,r=this.b
A.ew(r,"start")
s=this.c
if(s!=null){A.ew(s,"end")
if(r>s)throw A.k(A.a9(r,0,s,"start",null))}},
gce(){var s=J.b6(this.a),r=this.c
if(r==null||r>s)return s
return r},
gcI(){var s=J.b6(this.a),r=this.b
if(r>s)return s
return r},
gv(a){var s,r=J.b6(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
P(a,b){var s=this,r=s.gcI()+b
if(b<0||r>=s.gce())throw A.k(A.fN(b,s.gv(0),s,"index"))
return J.jG(s.a,r)}}
A.bd.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
t(){var s,r=this,q=r.a,p=J.jw(q),o=p.gv(q)
if(r.b!==o)throw A.k(A.at(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.P(q,s);++r.c
return!0},
$iT:1}
A.bf.prototype={
gD(a){var s=this.a
return new A.cJ(s.gD(s),this.b,A.H(this).i("cJ<1,2>"))},
gv(a){var s=this.a
return s.gv(s)},
P(a,b){var s=this.a
return this.b.$1(s.P(s,b))}}
A.cl.prototype={$ir:1}
A.cJ.prototype={
t(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gu())
return!0}s.a=null
return!1},
gu(){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iT:1}
A.a6.prototype={
gv(a){return J.b6(this.a)},
P(a,b){return this.b.$1(J.jG(this.a,b))}}
A.bo.prototype={
gD(a){return new A.cY(J.b5(this.a),this.b,this.$ti.i("cY<1>"))}}
A.cY.prototype={
t(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gu()))return!0
return!1},
gu(){return this.a.gu()},
$iT:1}
A.ae.prototype={}
A.bm.prototype={
h(a,b,c){A.H(this).i("bm.E").a(c)
throw A.k(A.bn("Cannot modify an unmodifiable list"))}}
A.c1.prototype={}
A.dq.prototype={}
A.bD.prototype={
ga_(a){return this.gv(this)===0},
k(a){return A.jQ(this)},
h(a,b,c){var s=A.H(this)
s.c.a(b)
s.y[1].a(c)
A.kp()},
M(a,b){A.kp()},
gag(){return new A.c5(this.cZ(),A.H(this).i("c5<a0<1,2>>"))},
cZ(){var s=this
return function(){var r=0,q=1,p=[],o,n,m,l,k
return function $async$gag(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.gbv(),o=o.gD(o),n=A.H(s),m=n.y[1],n=n.i("a0<1,2>")
case 2:if(!o.t()){r=3
break}l=o.gu()
k=s.q(0,l)
r=4
return a.b=new A.a0(l,k==null?m.a(k):k,n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
$iG:1}
A.X.prototype={
gv(a){return this.b.length},
gbf(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
K(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
q(a,b){if(!this.K(b))return null
return this.b[this.a[b]]},
R(a,b){var s,r,q,p
this.$ti.i("~(1,2)").a(b)
s=this.gbf()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gbv(){return new A.d4(this.gbf(),this.$ti.i("d4<1>"))}}
A.d4.prototype={
gv(a){return this.a.length},
gD(a){var s=this.a
return new A.d5(s,s.length,this.$ti.i("d5<1>"))}}
A.d5.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
t(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iT:1}
A.bH.prototype={
a7(){var s=this,r=s.$map
if(r==null){r=new A.cD(s.$ti.i("cD<1,2>"))
A.lU(s.a,r)
s.$map=r}return r},
K(a){return this.a7().K(a)},
q(a,b){return this.a7().q(0,b)},
R(a,b){this.$ti.i("~(1,2)").a(b)
this.a7().R(0,b)},
gbv(){var s=this.a7()
return new A.cG(s,A.H(s).i("cG<1>"))},
gv(a){return this.a7().a}}
A.cT.prototype={}
A.h7.prototype={
V(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.cP.prototype={
k(a){return"Null check operator used on a null value"}}
A.ei.prototype={
k(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.eG.prototype={
k(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.fW.prototype={
k(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.de.prototype={
k(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ibY:1}
A.aT.prototype={
k(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.m2(r==null?"unknown":r)+"'"},
$iba:1,
gdi(){return this},
$C:"$1",
$R:1,
$D:null}
A.dC.prototype={$C:"$0",$R:0}
A.dD.prototype={$C:"$2",$R:2}
A.eD.prototype={}
A.eB.prototype={
k(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.m2(s)+"'"}}
A.bA.prototype={
S(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.bA))return!1
return this.$_target===b.$_target&&this.a===b.a},
gF(a){return(A.lX(this.a)^A.bj(this.$_target))>>>0},
k(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.bR(this.a)+"'")}}
A.ey.prototype={
k(a){return"RuntimeError: "+this.a}}
A.az.prototype={
gv(a){return this.a},
ga_(a){return this.a===0},
gag(){return new A.ag(this,A.H(this).i("ag<1,2>"))},
K(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else{r=this.d4(a)
return r}},
d4(a){var s=this.d
if(s==null)return!1
return this.aj(this.be(s,a),a)>=0},
H(a,b){A.H(this).i("G<1,2>").a(b).R(0,new A.fQ(this))},
q(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.d5(b)},
d5(a){var s,r,q=this.d
if(q==null)return null
s=this.be(q,a)
r=this.aj(s,a)
if(r<0)return null
return s[r].b},
h(a,b,c){var s,r,q=this,p=A.H(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.b4(s==null?q.b=q.aD():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.b4(r==null?q.c=q.aD():r,b,c)}else q.d6(b,c)},
d6(a,b){var s,r,q,p,o=this,n=A.H(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.aD()
r=o.aV(a)
q=s[r]
if(q==null)s[r]=[o.aq(a,b)]
else{p=o.aj(q,a)
if(p>=0)q[p].b=b
else q.push(o.aq(a,b))}},
by(a,b){var s,r,q=this,p=A.H(q)
p.c.a(a)
p.i("2()").a(b)
if(q.K(a)){s=q.q(0,a)
return s==null?p.y[1].a(s):s}r=b.$0()
q.h(0,a,r)
return r},
M(a,b){var s=this.cA(this.b,b)
return s},
cU(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.ap()}},
R(a,b){var s,r,q=this
A.H(q).i("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.k(A.at(q))
s=s.c}},
b4(a,b,c){var s,r=A.H(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.aq(b,c)
else s.b=c},
cA(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.bK(s)
delete a[b]
return s.b},
ap(){this.r=this.r+1&1073741823},
aq(a,b){var s=this,r=A.H(s),q=new A.fR(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.ap()
return q},
bK(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.ap()},
aV(a){return J.cd(a)&1073741823},
be(a,b){return a[this.aV(b)]},
aj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.fa(a[r].a,b))return r
return-1},
k(a){return A.jQ(this)},
aD(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ijN:1}
A.fQ.prototype={
$2(a,b){var s=this.a,r=A.H(s)
s.h(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.H(this.a).i("~(1,2)")}}
A.fR.prototype={}
A.cG.prototype={
gv(a){return this.a.a},
gD(a){var s=this.a
return new A.aN(s,s.r,s.e,this.$ti.i("aN<1>"))}}
A.aN.prototype={
gu(){return this.d},
t(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iT:1}
A.fS.prototype={
gv(a){return this.a.a},
gD(a){var s=this.a
return new A.bc(s,s.r,s.e,this.$ti.i("bc<1>"))}}
A.bc.prototype={
gu(){return this.d},
t(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iT:1}
A.ag.prototype={
gv(a){return this.a.a},
gD(a){var s=this.a
return new A.cF(s,s.r,s.e,this.$ti.i("cF<1,2>"))}}
A.cF.prototype={
gu(){var s=this.d
s.toString
return s},
t(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.k(A.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.a0(s.a,s.b,r.$ti.i("a0<1,2>"))
r.c=s.c
return!0}},
$iT:1}
A.cD.prototype={
aV(a){return A.oA(a)&1073741823},
aj(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.fa(a[r].a,b))return r
return-1}}
A.jA.prototype={
$1(a){return this.a(a)},
$S:20}
A.jB.prototype={
$2(a,b){return this.a(a,b)},
$S:35}
A.jC.prototype={
$1(a){return this.a(A.w(a))},
$S:36}
A.cz.prototype={
k(a){return"RegExp/"+this.a+"/"+this.b.flags},
gbh(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.kF(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
aN(a,b,c){var s=b.length
if(c>s)throw A.k(A.a9(c,0,s,null,null))
return new A.eM(this,b,c)},
bm(a,b){return this.aN(0,b,0)},
cg(a,b){var s,r=this.gbh()
if(r==null)r=A.f8(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.f0(s)},
$ih_:1,
$in1:1}
A.f0.prototype={
gb1(){return this.b.index},
gaT(){var s=this.b
return s.index+s[0].length},
$ibN:1,
$icS:1}
A.eM.prototype={
gD(a){return new A.eN(this.a,this.b,this.c)}}
A.eN.prototype={
gu(){var s=this.d
return s==null?t.cz.a(s):s},
t(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.cg(l,s)
if(p!=null){m.d=p
o=p.gaT()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.e(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.e(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iT:1}
A.eC.prototype={
gaT(){return this.a+this.c.length},
$ibN:1,
gb1(){return this.a}}
A.f3.prototype={
gD(a){return new A.f4(this.a,this.b,this.c)}}
A.f4.prototype={
t(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.eC(s,o)
q.c=r===q.c?r+1:r
return!0},
gu(){var s=this.d
s.toString
return s},
$iT:1}
A.bP.prototype={
gJ(a){return B.ll},
$iK:1}
A.cM.prototype={
co(a,b,c,d){var s=A.a9(b,0,c,d,null)
throw A.k(s)},
bb(a,b,c,d){if(b>>>0!==b||b>c)this.co(a,b,c,d)}}
A.em.prototype={
gJ(a){return B.lm},
$iK:1}
A.a7.prototype={
gv(a){return a.length},
$iaq:1}
A.cK.prototype={
q(a,b){A.aQ(b,a,a.length)
return a[b]},
h(a,b,c){A.lA(c)
a.$flags&2&&A.as(a)
A.aQ(b,a,a.length)
a[b]=c},
$ir:1,
$im:1,
$iA:1}
A.cL.prototype={
h(a,b,c){A.a2(c)
a.$flags&2&&A.as(a)
A.aQ(b,a,a.length)
a[b]=c},
bF(a,b,c,d,e){var s,r,q
t.hb.a(d)
a.$flags&2&&A.as(a,5)
s=a.length
this.bb(a,b,s,"start")
this.bb(a,c,s,"end")
if(b>c)A.cb(A.a9(b,0,c,null,null))
r=c-b
if(e<0)A.cb(A.aJ(e,null))
if(16-e<r)A.cb(A.kV("Not enough elements"))
q=e!==0||16!==r?d.subarray(e,e+r):d
a.set(q,b)
return},
$ir:1,
$im:1,
$iA:1}
A.en.prototype={
gJ(a){return B.ln},
$iK:1}
A.eo.prototype={
gJ(a){return B.lo},
$iK:1}
A.ep.prototype={
gJ(a){return B.lp},
q(a,b){A.aQ(b,a,a.length)
return a[b]},
$iK:1}
A.eq.prototype={
gJ(a){return B.lq},
q(a,b){A.aQ(b,a,a.length)
return a[b]},
$iK:1}
A.er.prototype={
gJ(a){return B.lr},
q(a,b){A.aQ(b,a,a.length)
return a[b]},
$iK:1}
A.es.prototype={
gJ(a){return B.ls},
q(a,b){A.aQ(b,a,a.length)
return a[b]},
$iK:1}
A.et.prototype={
gJ(a){return B.lt},
q(a,b){A.aQ(b,a,a.length)
return a[b]},
$iK:1}
A.cN.prototype={
gJ(a){return B.lu},
gv(a){return a.length},
q(a,b){A.aQ(b,a,a.length)
return a[b]},
$iK:1}
A.cO.prototype={
gJ(a){return B.lv},
gv(a){return a.length},
q(a,b){A.aQ(b,a,a.length)
return a[b]},
$iK:1,
$ijT:1}
A.d8.prototype={}
A.d9.prototype={}
A.da.prototype={}
A.db.prototype={}
A.aA.prototype={
i(a){return A.j2(v.typeUniverse,this,a)},
G(a){return A.nA(v.typeUniverse,this,a)}}
A.eW.prototype={}
A.dh.prototype={
k(a){return A.ao(this.a,null)},
$ih6:1}
A.eU.prototype={
k(a){return this.a}}
A.di.prototype={$iaO:1}
A.hs.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:15}
A.hr.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:29}
A.ht.prototype={
$0(){this.a.$0()},
$S:3}
A.hu.prototype={
$0(){this.a.$0()},
$S:3}
A.j_.prototype={
bJ(a,b){if(self.setTimeout!=null)self.setTimeout(A.jt(new A.j0(this,b),0),a)
else throw A.k(A.bn("`setTimeout()` not found."))}}
A.j0.prototype={
$0(){this.b.$0()},
$S:0}
A.dg.prototype={
gu(){var s=this.b
return s==null?this.$ti.c.a(s):s},
cC(a,b){var s,r,q
a=A.a2(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
t(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.t()){o.b=s.gu()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.cC(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.le
return!1}if(0>=p.length)return A.e(p,-1)
o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.le
throw n
return!1}if(0>=p.length)return A.e(p,-1)
o.a=p.pop()
m=1
continue}throw A.k(A.kV("sync*"))}return!1},
dk(a){var s,r,q=this
if(a instanceof A.c5){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.e.p(r,q.a)
q.a=s
return 2}else{q.d=J.b5(a)
return 2}},
$iT:1}
A.c5.prototype={
gD(a){return new A.dg(this.a(),this.$ti.i("dg<1>"))}}
A.aD.prototype={
k(a){return A.p(this.a)},
$iO:1,
gaa(){return this.b}}
A.fH.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.bc(null)}else{s=null
try{s=l.$0()}catch(p){r=A.b4(p)
q=A.b2(p)
l=r
o=q
n=A.o5(l,o)
l=new A.aD(l,o)
m.b.au(l)
return}m.b.bc(s)}},
$S:0}
A.d2.prototype={
d8(a){var s
if((this.c&15)!==6)return!0
s=this.b.b
return s.aG(s,t.al.a(this.d),a.a,t.w,t.K)},
d3(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.cF(l,q,m,a.b,o,n,t.j)
else p=l.aG(l,t.x.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.eK.b(A.b4(s))){if((r.c&1)!==0)throw A.k(A.aJ("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.k(A.aJ("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.au.prototype={
de(a,b,c){var s,r,q,p=this.$ti
p.G(c).i("1/(2)").a(a)
s=$.a1
if(s===B.a2){if(b!=null&&!t.C.b(b)&&!t.x.b(b))throw A.k(A.kh(b,"onError",u.c))}else{r=p.c
a=s.bk(s,c.i("@<0/>").G(r).i("1(2)").a(a),c.i("0/"),r)
if(b!=null)b=A.ol(b,s)}q=new A.au(s,c.i("au<0>"))
r=b==null?1:3
this.b6(new A.d2(q,r,a,b,p.i("@<1>").G(c).i("d2<1,2>")))
return q},
cG(a){this.a=this.a&1|16
this.c=a},
ac(a){this.a=a.a&30|this.a&1
this.c=a.c},
b6(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.b6(a)
return}r.ac(s)}q=r.b
q.aI(q,new A.i0(r,a))}},
bi(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.bi(a)
return}m.ac(n)}l.a=m.ae(a)
s=m.b
s.aI(s,new A.i2(l,m))}},
ad(){var s=t.F.a(this.c)
this.c=null
return this.ae(s)},
ae(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bc(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("cv<1>").b(a))A.la(a,r,!0)
else{s=r.ad()
q.c.a(a)
r.a=8
r.c=a
A.c4(r,s)}},
c8(a){var s=this.ad()
this.ac(a)
A.c4(this,s)},
au(a){var s=this.ad()
this.cG(a)
A.c4(this,s)},
bP(a){var s
this.a^=2
s=this.b
s.aI(s,new A.i1(this,a))},
$icv:1}
A.i0.prototype={
$0(){A.c4(this.a,this.b)},
$S:0}
A.i2.prototype={
$0(){A.c4(this.b,this.a.a)},
$S:0}
A.i1.prototype={
$0(){this.a.au(this.b)},
$S:0}
A.i5.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
p=q.b.b
j=p.aH(p,t.fO.a(q.d),t.z)}catch(o){s=A.b4(o)
r=A.b2(o)
if(k.c&&t.t.a(k.b.a.c).a===s){q=k.a
q.c=t.t.a(k.b.a.c)}else{q=s
p=r
if(p==null)p=A.jI(q)
n=k.a
n.c=new A.aD(q,p)
q=n}q.b=!0
return}if(j instanceof A.au&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.t.a(j.c)
q.b=!0}return}if(j instanceof A.au){m=k.b.a
l=new A.au(m.b,m.$ti)
j.de(new A.i6(l,m),new A.i7(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.i6.prototype={
$1(a){this.a.c8(this.b)},
$S:15}
A.i7.prototype={
$2(a,b){A.f8(a)
t.j.a(b)
this.a.au(new A.aD(a,b))},
$S:38}
A.i4.prototype={
$0(){var s,r,q,p,o,n,m,l,k
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
l=p.b.b
q.c=l.aG(l,o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(k){s=A.b4(k)
r=A.b2(k)
q=s
p=r
if(p==null)p=A.jI(q)
o=this.a
o.c=new A.aD(q,p)
o.b=!0}},
$S:0}
A.i3.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.t.a(l.a.a.c)
p=l.b
if(p.a.d8(s)&&p.a.e!=null){p.c=p.a.d3(s)
p.b=!1}}catch(o){r=A.b4(o)
q=A.b2(o)
p=t.t.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.jI(p)
m=l.b
m.c=new A.aD(p,n)
p=m}p.b=!0}},
$S:0}
A.eP.prototype={}
A.hk.prototype={
dd(a){var s,r,q,p,o=this
t.M.a(a)
try{q=o.aH(o,a,t.H)
return q}catch(p){s=A.b4(p)
r=A.b2(p)
o.aC(o,s,r)}},
bn(a,b){return new A.hm(this,this.bj(this,b.i("0()").a(a),b),b)},
cR(a){return new A.hl(this,this.bj(this,t.M.a(a),t.H))},
aC(a,b,c){var s,r,q,p,o,n,m,l
t.j.a(c)
s=null
if(s==null){A.om(b,c)
return}r=s.gb0()
q=r.gdj()
p=$.a1
try{$.a1=q
s.d2(r,r.gaF(),a,b,c)
$.a1=p}catch(m){o=A.b4(m)
n=A.b2(m)
$.a1=p
l=b===o?c:n
q.aC(r,o,l)}},
aH(a,b,c){var s,r,q
c.i("0()").a(b)
r=$.a1
if(r===a)return b.$0()
s=r
$.a1=a
try{r=b.$0()
return r}finally{$.a1=s}q=null.gb0()
return null.dl(q,q.gaF(),a,b)},
aG(a,b,c,d,e){var s,r,q
d.i("@<0>").G(e).i("1(2)").a(b)
e.a(c)
r=$.a1
if(r===a)return b.$1(c)
s=r
$.a1=a
try{r=b.$1(c)
return r}finally{$.a1=s}q=null.gb0()
return null.d2(q,q.gaF(),a,b,c)},
cF(a,b,c,d,e,f,g){var s,r,q
e.i("@<0>").G(f).G(g).i("1(2,3)").a(b)
f.a(c)
g.a(d)
r=$.a1
if(r===a)return b.$2(c,d)
s=r
$.a1=a
try{r=b.$2(c,d)
return r}finally{$.a1=s}q=null.gb0()
return null.dm(q,q.gaF(),a,b,c,d)},
bj(a,b,c){c.i("0()").a(b)
return b},
bk(a,b,c,d){c.i("@<0>").G(d).i("1(2)").a(b)
return b},
cw(a,b,c,d,e){c.i("@<0>").G(d).G(e).i("1(2,3)").a(b)
return b},
cf(a,b,c){return null},
aI(a,b){A.on(a,t.M.a(b))
return},
bd(a,b,c){t.M.a(c)
return A.kZ(b,B.a2!==a?a.bn(c,t.H):c)}}
A.hm.prototype={
$0(){var s=this.a
return s.aH(s,this.b,this.c)},
$S(){return this.c.i("0()")}}
A.hl.prototype={
$0(){return this.a.dd(this.b)},
$S:0}
A.jp.prototype={
$0(){A.mz(this.a,this.b)},
$S:0}
A.d6.prototype={
gD(a){var s=this,r=new A.bp(s,s.r,s.$ti.i("bp<1>"))
r.c=s.e
return r},
gv(a){return this.a},
X(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.J.a(s[b])!=null}else{r=this.ca(b)
return r}},
ca(a){var s=this.d
if(s==null)return!1
return this.aA(s[J.cd(a)&1073741823],a)>=0},
p(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.b5(s==null?q.b=A.jW():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.b5(r==null?q.c=A.jW():r,b)}else return q.bL(b)},
bL(a){var s,r,q,p=this
p.$ti.c.a(a)
s=p.d
if(s==null)s=p.d=A.jW()
r=J.cd(a)&1073741823
q=s[r]
if(q==null)s[r]=[p.aE(a)]
else{if(p.aA(q,a)>=0)return!1
q.push(p.aE(a))}return!0},
M(a,b){var s=this.cz(b)
return s},
cz(a){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.cd(a)&1073741823
r=o[s]
q=this.aA(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.cO(p)
return!0},
b5(a,b){this.$ti.c.a(b)
if(t.J.a(a[b])!=null)return!1
a[b]=this.aE(b)
return!0},
bg(){this.r=this.r+1&1073741823},
aE(a){var s,r=this,q=new A.f_(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.bg()
return q},
cO(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.bg()},
aA(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.fa(a[r].a,b))return r
return-1}}
A.f_.prototype={}
A.bp.prototype={
gu(){var s=this.d
return s==null?this.$ti.c.a(s):s},
t(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.k(A.at(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.i("1?").a(r.a)
s.c=r.b
return!0}},
$iT:1}
A.fT.prototype={
$2(a,b){this.a.h(0,this.b.a(a),this.c.a(b))},
$S:16}
A.B.prototype={
gD(a){return new A.bd(a,this.gv(a),A.b3(a).i("bd<B.E>"))},
P(a,b){return this.q(a,b)},
cQ(a,b){var s,r
A.b3(a).i("ah(B.E)").a(b)
s=this.gv(a)
for(r=0;r<s;++r){if(b.$1(this.q(a,r)))return!0
if(s!==this.gv(a))throw A.k(A.at(a))}return!1},
af(a,b){return new A.aK(a,A.b3(a).i("@<B.E>").G(b).i("aK<1,2>"))},
d_(a,b,c,d){var s,r,q=A.b3(a)
q.i("B.E?").a(d)
s=d==null?q.i("B.E").a(d):d
A.cR(b,c,this.gv(a))
for(r=b;r<c;++r)this.h(a,r,s)},
k(a){return A.jK(a,"[","]")},
$ir:1,
$im:1,
$iA:1}
A.bM.prototype={
R(a,b){var s,r,q,p=this,o=A.H(p)
o.i("~(1,2)").a(b)
for(s=new A.aN(p,p.r,p.e,o.i("aN<1>")),o=o.y[1];s.t();){r=s.d
q=p.q(0,r)
b.$2(r,q==null?o.a(q):q)}},
d7(a,b,c,d){var s,r,q,p,o,n=this,m=A.H(n)
m.G(c).G(d).i("a0<1,2>(3,4)").a(b)
s=A.l(c,d)
for(r=new A.aN(n,n.r,n.e,m.i("aN<1>")),m=m.y[1];r.t();){q=r.d
p=n.q(0,q)
o=b.$2(q,p==null?m.a(p):p)
s.h(0,o.a,o.b)}return s},
K(a){return this.K(a)},
gv(a){return this.a},
ga_(a){return this.a===0},
k(a){return A.jQ(this)},
$iG:1}
A.fV.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.p(a)
r.a=(r.a+=s)+": "
s=A.p(b)
r.a+=s},
$S:17}
A.f6.prototype={
h(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
throw A.k(A.bn("Cannot modify unmodifiable map"))},
M(a,b){throw A.k(A.bn("Cannot modify unmodifiable map"))}}
A.cI.prototype={
q(a,b){return this.a.q(0,b)},
h(a,b,c){var s=this.$ti
this.a.h(0,s.c.a(b),s.y[1].a(c))},
K(a){return this.a.K(a)},
R(a,b){this.a.R(0,this.$ti.i("~(1,2)").a(b))},
ga_(a){var s=this.a
return s.ga_(s)},
gv(a){var s=this.a
return s.gv(s)},
M(a,b){return this.a.M(0,b)},
k(a){return this.a.k(0)},
$iG:1}
A.c2.prototype={}
A.bV.prototype={
k(a){return A.jK(this,"{","}")},
P(a,b){var s,r,q,p=this
A.ew(b,"index")
s=A.nj(p,p.r,p.$ti.c)
for(r=b;s.t();){if(r===0){q=s.d
return q==null?s.$ti.c.a(q):q}--r}throw A.k(A.fN(b,b-r,p,"index"))},
$ir:1,
$im:1,
$ibU:1}
A.dd.prototype={}
A.dm.prototype={}
A.jb.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:8}
A.ja.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:8}
A.dA.prototype={
d9(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a3.length
a5=A.cR(a4,a5,a2)
s=$.me()
for(r=s.length,q=a4,p=q,o=null,n=-1,m=-1,l=0;q<a5;q=k){k=q+1
if(!(q<a2))return A.e(a3,q)
j=a3.charCodeAt(q)
if(j===37){i=k+2
if(i<=a5){if(!(k<a2))return A.e(a3,k)
h=A.jz(a3.charCodeAt(k))
g=k+1
if(!(g<a2))return A.e(a3,g)
f=A.jz(a3.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.e(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.e(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aa("")
g=o}else g=o
g.a+=B.c.l(a3,p,q)
c=A.b_(j)
g.a+=c
p=k
continue}}throw A.k(A.ac("Invalid base64 data",a3,q))}if(o!=null){a2=B.c.l(a3,p,a5)
a2=o.a+=a2
r=a2.length
if(n>=0)A.ki(a3,m,a5,n,l,r)
else{b=B.q.am(r-1,4)+1
if(b===1)throw A.k(A.ac(a1,a3,a5))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.c.a3(a3,a4,a5,a2.charCodeAt(0)==0?a2:a2)}a=a5-a4
if(n>=0)A.ki(a3,m,a5,n,l,a)
else{b=B.q.am(a,4)
if(b===1)throw A.k(A.ac(a1,a3,a5))
if(b>1)a3=B.c.a3(a3,a5,a5,b===2?"==":"=")}return a3}}
A.fb.prototype={}
A.bC.prototype={}
A.dG.prototype={}
A.dK.prototype={}
A.eJ.prototype={}
A.hd.prototype={
aP(a){var s,r,q,p,o=a.length,n=A.cR(0,null,o)
if(n===0)return new Uint8Array(0)
s=n*3
r=new Uint8Array(s)
q=new A.jc(r)
if(q.ci(a,0,n)!==n){p=n-1
if(!(p>=0&&p<o))return A.e(a,p)
q.aM()}return new Uint8Array(r.subarray(0,A.nU(0,q.b,s)))}}
A.jc.prototype={
aM(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.as(q)
s=q.length
if(!(p<s))return A.e(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.e(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.e(q,p)
q[p]=189},
cP(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.as(r)
o=r.length
if(!(q<o))return A.e(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.e(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.e(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.e(r,p)
r[p]=s&63|128
return!0}else{n.aM()
return!1}},
ci(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.e(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.e(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.as(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.e(a,m)
if(k.cP(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.aM()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.as(s)
if(!(m<q))return A.e(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.as(s)
if(!(m<q))return A.e(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.e(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.e(s,m)
s[m]=n&63|128}}}return o}}
A.hc.prototype={
aP(a){return new A.j9(this.a).cb(t.L.a(a),0,null,!0)}}
A.j9.prototype={
cb(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.L.a(a)
s=A.cR(b,c,J.b6(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.nM(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.nL(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.av(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.nN(o)
l.b=0
throw A.k(A.ac(m,a,p+l.c))}return n},
av(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.q.aK(b+c,2)
r=q.av(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.av(a,s,c,d)}return q.cW(a,b,c,d)},
cW(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aa(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.e(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.e(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.e(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.b_(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.b_(h)
e.a+=p
break
case 65:p=A.b_(h)
e.a+=p;--d
break
default:p=A.b_(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.e(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.e(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.e(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.e(a,l)
p=A.b_(a[l])
e.a+=p}else{p=A.kX(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.b_(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.j7.prototype={
$2(a,b){var s,r
A.w(a)
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.b5(t.U.a(b)),r=this.a;s.t();){b=s.gu()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.aC(b)}},
$S:9}
A.aU.prototype={
S(a,b){if(b==null)return!1
return b instanceof A.aU&&this.a===b.a},
gF(a){return B.q.gF(this.a)},
k(a){var s,r,q,p=this.a,o=p%36e8,n=B.q.aK(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.q.aK(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.c.bx(B.q.k(o%1e6),6,"0")}}
A.hU.prototype={
k(a){return this.I()}}
A.O.prototype={
gaa(){return A.mZ(this)}}
A.dx.prototype={
k(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.fn(s)
return"Assertion failed"}}
A.aO.prototype={}
A.ax.prototype={
gaz(){return"Invalid argument"+(!this.a?"(s)":"")},
gaw(){return""},
k(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.p(p),n=s.gaz()+q+o
if(!s.a)return n
return n+s.gaw()+": "+A.fn(s.gaW())},
gaW(){return this.b}}
A.cQ.prototype={
gaW(){return A.lB(this.b)},
gaz(){return"RangeError"},
gaw(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.p(q):""
else if(q==null)s=": Not greater than or equal to "+A.p(r)
else if(q>r)s=": Not in inclusive range "+A.p(r)+".."+A.p(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.p(r)
return s}}
A.eb.prototype={
gaW(){return A.a2(this.b)},
gaz(){return"RangeError"},
gaw(){if(A.a2(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gv(a){return this.f}}
A.cW.prototype={
k(a){return"Unsupported operation: "+this.a}}
A.eF.prototype={
k(a){return"UnimplementedError: "+this.a}}
A.cU.prototype={
k(a){return"Bad state: "+this.a}}
A.dF.prototype={
k(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.fn(s)+"."}}
A.eu.prototype={
k(a){return"Out of Memory"},
gaa(){return null},
$iO:1}
A.bX.prototype={
k(a){return"Stack Overflow"},
gaa(){return null},
$iO:1}
A.hV.prototype={
k(a){return"Exception: "+this.a}}
A.aM.prototype={
k(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.c.l(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.e(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.e(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.c.l(e,i,j)+k+"\n"+B.c.an(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.p(f)+")"):g}}
A.m.prototype={
af(a,b){return A.ms(this,A.H(this).i("m.E"),b)},
T(a,b){var s,r,q=this.gD(this)
if(!q.t())return""
s=J.aR(q.gu())
if(!q.t())return s
if(b.length===0){r=s
do r+=J.aR(q.gu())
while(q.t())}else{r=s
do r=r+b+J.aR(q.gu())
while(q.t())}return r.charCodeAt(0)==0?r:r},
gv(a){var s,r=this.gD(this)
for(s=0;r.t();)++s
return s},
gd0(a){var s=this.gD(this)
if(!s.t())throw A.k(A.kD())
return s.gu()},
P(a,b){var s,r
A.ew(b,"index")
s=this.gD(this)
for(r=b;s.t();){if(r===0)return s.gu();--r}throw A.k(A.fN(b,b-r,this,"index"))},
k(a){return A.mJ(this,"(",")")}}
A.a0.prototype={
k(a){return"MapEntry("+A.p(this.a)+": "+A.p(this.b)+")"}}
A.a8.prototype={
gF(a){return A.M.prototype.gF.call(this,0)},
k(a){return"null"}}
A.M.prototype={$iM:1,
S(a,b){return this===b},
gF(a){return A.bj(this)},
k(a){return"Instance of '"+A.bR(this)+"'"},
gJ(a){return A.aw(this)},
toString(){return this.k(this)}}
A.f5.prototype={
k(a){return""},
$ibY:1}
A.aa.prototype={
gv(a){return this.a.length},
k(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$in5:1}
A.hb.prototype={
$2(a,b){var s,r,q,p
t.f.a(a)
A.w(b)
s=B.c.bu(b,"=")
if(s===-1){if(b!=="")a.h(0,A.j8(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.c.l(b,0,s)
q=B.c.Z(b,s+1)
p=this.a
a.h(0,A.j8(r,0,r.length,p,!0),A.j8(q,0,q.length,p,!0))}return a},
$S:18}
A.ha.prototype={
$2(a,b){throw A.k(A.ac("Illegal IPv6 address, "+a,this.a,b))},
$S:19}
A.dn.prototype={
gaL(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.p(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gF(a){var s,r=this,q=r.y
if(q===$){s=B.c.gF(r.gaL())
r.y!==$&&A.ke("hashCode")
r.y=s
q=s}return q},
gaZ(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.l4(s==null?"":s)
r.z!==$&&A.ke("queryParameters")
q=r.z=new A.c2(s,t.h)}return q},
gbD(){return this.b},
gaU(){var s=this.c
if(s==null)return""
if(B.c.C(s,"[")&&!B.c.L(s,"v",1))return B.c.l(s,1,s.length-1)
return s},
gal(){var s=this.d
return s==null?A.lk(this.a):s},
gaY(){var s=this.f
return s==null?"":s},
gbp(){var s=this.r
return s==null?"":s},
bz(a){var s,r,q,p,o,n,m,l,k,j=this
t.G.a(a)
s=j.a
r=s==="file"
q=j.b
p=j.d
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.c.C(n,"/"))n="/"+n
l=n
if(a!=null)k=A.j4(null,0,0,a)
else k=j.f
return A.j3(s,q,o,p,l,k,j.r)},
gbq(){return this.c!=null},
gbt(){return this.f!=null},
gbr(){return this.r!=null},
k(a){return this.gaL()},
S(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.E.b(b))if(p.a===b.gao())if(p.c!=null===b.gbq())if(p.b===b.gbD())if(p.gaU()===b.gaU())if(p.gal()===b.gal())if(p.e===b.gaX()){r=p.f
q=r==null
if(!q===b.gbt()){if(q)r=""
if(r===b.gaY()){r=p.r
q=r==null
if(!q===b.gbr()){s=q?"":r
s=s===b.gbp()}}}}return s},
$ieH:1,
gao(){return this.a},
gaX(){return this.e}}
A.j6.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.k0(1,a,B.S,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.k0(1,b,B.S,!0)
s.a+=r}},
$S:40}
A.j5.prototype={
$2(a,b){var s,r
A.w(a)
if(b==null||typeof b=="string")this.a.$2(a,A.aC(b))
else for(s=J.b5(t.U.a(b)),r=this.a;s.t();)r.$2(a,A.w(s.gu()))},
$S:9}
A.h9.prototype={
gbC(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.e(m,0)
s=o.a
m=m[0]+1
r=B.c.ah(s,"?",m)
q=s.length
if(r>=0){p=A.dp(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.eR("data","",n,n,A.dp(s,m,q,128,!1,!1),p,n)}return m},
k(a){var s,r=this.b
if(0>=r.length)return A.e(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.f2.prototype={
gbq(){return this.c>0},
gbs(){return this.c>0&&this.d+1<this.e},
gbt(){return this.f<this.r},
gbr(){return this.r<this.a.length},
gao(){var s=this.w
return s==null?this.w=this.c9():s},
c9(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.c.C(r.a,"http"))return"http"
if(q===5&&B.c.C(r.a,"https"))return"https"
if(s&&B.c.C(r.a,"file"))return"file"
if(q===7&&B.c.C(r.a,"package"))return"package"
return B.c.l(r.a,0,q)},
gbD(){var s=this.c,r=this.b+3
return s>r?B.c.l(this.a,r,s-1):""},
gaU(){var s=this.c
return s>0?B.c.l(this.a,s,this.d):""},
gal(){var s,r=this
if(r.gbs())return A.bu(B.c.l(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.c.C(r.a,"http"))return 80
if(s===5&&B.c.C(r.a,"https"))return 443
return 0},
gaX(){return B.c.l(this.a,this.e,this.f)},
gaY(){var s=this.f,r=this.r
return s<r?B.c.l(this.a,s+1,r):""},
gbp(){var s=this.r,r=this.a
return s<r.length?B.c.Z(r,s+1):""},
gaZ(){if(this.f>=this.r)return B.kv
return new A.c2(A.l4(this.gaY()),t.h)},
bz(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
t.G.a(a)
s=h.gao()
r=s==="file"
q=h.c
p=q>0?B.c.l(h.a,h.b+3,q):""
o=h.gbs()?h.gal():g
q=h.c
if(q>0)n=B.c.l(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.c.l(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.c.C(l,"/"))l="/"+l
if(a!=null)j=A.j4(g,0,0,a)
else{k=h.r
j=m<k?B.c.l(q,m+1,k):g}m=h.r
i=m<q.length?B.c.Z(q,m+1):g
return A.j3(s,p,n,o,l,j,i)},
gF(a){var s=this.x
return s==null?this.x=B.c.gF(this.a):s},
S(a,b){if(b==null)return!1
if(this===b)return!0
return t.E.b(b)&&this.a===b.k(0)},
k(a){return this.a},
$ieH:1}
A.eR.prototype={}
A.dL.prototype={
h(a,b,c){this.$ti.i("1?").a(c)
this.a.set(b,c)},
k(a){return"Expando:null"}}
A.Y.prototype={
O(){return new A.d_(A.l(t.n,t.O))}}
A.d_.prototype={
cd(){var s,r,q,p=this
try{s=A.d(A.d(A.d(v.G.window).navigator).clipboard)
r=p.a
r===$&&A.a5("widget")
A.d(s.writeText(r.c))
t.M.a(new A.hG(p)).$0()
p.n()
A.kz(B.cX,new A.hH(p),t.P)}catch(q){}},
B(a){var s,r,q,p,o,n=this,m=null,l=A.v(B.l,1),k=n.a
k===$&&A.a5("widget")
s=t.p
k=A.I(A.a([B.e5,B.al,B.e0,B.al,B.ea,B.eB,A.u(k.e,B.li,m)],s),B.a,B.d,B.b)
r=n.f?B.f.A(0.2):B.z
q=n.f
p=A.v(q?B.f:B.l,1)
o=q?"\u2713 Copied!":"Copy"
return A.i(m,A.n(A.a([A.i(m,A.I(A.a([k,A.S(A.i(m,A.u(o,A.aB(q?B.f:B.n,11,B.M,m,m),m),m,m,new A.h(r,B.m,m,p,m,m),m,m,m,B.t,m),n.gcc())],s),B.a,B.A,B.b),m,m,B.c1,m,m,m,B.be,m),A.fz(A.i(m,A.u(n.a.c,B.lg,m),m,m,m,m,m,m,B.ab,m),B.aL)],s),B.T,B.d,B.b),m,m,new A.h(B.b3,B.a_,m,l,m,m),m,m,B.d6,m,1/0)}}
A.hG.prototype={
$0(){return this.a.f=!0},
$S:0}
A.hH.prototype={
$0(){var s=this.a
if(s.d){t.M.a(new A.hF(s)).$0()
s.n()}},
$S:3}
A.hF.prototype={
$0(){return this.a.f=!1},
$S:0}
A.V.prototype={
O(){return new A.eS(A.l(t.n,t.O))}}
A.eS.prototype={
B(a){return new A.aW(new A.hT(this),null)}}
A.hT.prototype={
$2(a,b){var s,r,q,p,o=null,n=b.b,m=n<768,l=n>=768&&n<1024,k=n>=1024,j=this.a,i=j.r,h=j.a
h===$&&A.a5("widget")
s=t.p
r=A.a([],s)
if(k)r.push(new A.ck(j.a.c,o,!1,o))
if(m)q=16
else q=l?28:48
p=m?24:36
r.push(new A.ab(A.n(A.a([A.cn(A.i(o,j.a.d,o,B.bM,o,o,o,o,new A.t(p,q,p,q),o)),B.cV],s),B.a,B.d,B.b),1,o))
s=A.a([A.n(A.a([new A.dJ(new A.hN(j),new A.hO(j),i,h.c,o),A.I(r,B.a,B.d,B.b)],s),B.a,B.d,B.b)],s)
if(!k&&j.r)s.push(A.ku(0,A.S(A.i(o,A.kt(B.bC,A.S(new A.ck(j.a.c,new A.hP(j),!0,o),new A.hQ())),B.cN,o,o,o,o,o,o,o),new A.hR(j)),0,0,64))
if(j.f)s.push(A.ku(0,new A.bT(new A.hS(j),o),0,0,0))
return A.i(o,A.kw(s,B.aY),B.cK,o,o,o,o,o,o,1/0)},
$S:10}
A.hN.prototype={
$0(){var s=this.a
t.M.a(new A.hM(s)).$0()
s.n()
return null},
$S:0}
A.hM.prototype={
$0(){return this.a.f=!0},
$S:0}
A.hO.prototype={
$0(){var s=this.a
t.M.a(new A.hL(s)).$0()
s.n()
return null},
$S:0}
A.hL.prototype={
$0(){var s=this.a
return s.r=!s.r},
$S:0}
A.hR.prototype={
$0(){var s=this.a
t.M.a(new A.hJ(s)).$0()
s.n()
return null},
$S:0}
A.hJ.prototype={
$0(){return this.a.r=!1},
$S:0}
A.hQ.prototype={
$0(){},
$S:0}
A.hP.prototype={
$0(){var s=this.a
t.M.a(new A.hK(s)).$0()
s.n()
return null},
$S:0}
A.hK.prototype={
$0(){return this.a.r=!1},
$S:0}
A.hS.prototype={
$0(){var s=this.a
t.M.a(new A.hI(s)).$0()
s.n()
return null},
$S:0}
A.hI.prototype={
$0(){return this.a.f=!1},
$S:0}
A.dI.prototype={
B(a){var s=null,r=t.p
return A.i(s,A.cn(A.i(s,A.n(A.a([A.I(A.a([A.n(A.a([A.I(A.a([A.i(B.aJ,A.fv("assets/dart_logo.png","Dart Logo",B.ah,26,26),s,s,s,26,s,s,s,26),B.P,B.fP],r),B.a,B.d,B.b),B.h,B.eG],r),B.a,B.d,B.b),A.n(A.a([B.hq,B.h,this.b7("pub.dev / flartdart","https://pub.dev/packages/flartdart"),this.b7("Dart SDK","https://dart.dev")],r),B.a,B.d,B.b)],r),B.a,B.A,B.b),B.eL,B.eb,B.J,B.es],r),B.a,B.d,B.b),s,B.bL,s,s,s,s,s,s)),s,s,B.bW,s,s,s,B.db,1/0)},
b7(a,b){return A.S(new A.ak(B.b6,A.u(a,B.Q,null),null),new A.fh(b))}}
A.fh.prototype={
$0(){return A.kP(this.a)},
$S:0}
A.L.prototype={
O(){return new A.eY(A.l(t.n,t.O))}}
A.eY.prototype={
B(a){var s,r,q,p,o,n=this,m=null,l=A.v(B.l,1),k=n.a
k===$&&A.a5("widget")
s=t.p
k=A.n(A.a([A.u(k.c,B.ar,m),B.V,A.u(k.d,B.Q,m)],s),B.a,B.d,B.b)
r=A.v(B.l,1)
q=n.f
p=!q
o=p?B.k:B.am
o=A.S(A.i(m,A.u("Preview",A.aB(p?B.W:B.n,12,B.M,m,m),m),m,m,new A.h(o,B.m,m,m,m,m),m,m,m,B.bd,m),new A.iG(n))
p=q?B.k:B.am
k=A.a([A.i(m,A.I(A.a([k,A.i(m,A.I(A.a([o,A.S(A.i(m,A.u("Code",A.aB(q?B.W:B.n,12,B.M,m,m),m),m,m,new A.h(p,B.m,m,m,m,m),m,m,m,B.bd,m),new A.iH(n))],s),B.a,B.d,B.b),m,m,new A.h(B.z,B.y,m,r,m,m),m,m,m,B.da,m)],s),B.a,B.A,B.b),m,m,B.aT,m,m,m,B.b9,m)],s)
s=n.f
r=n.a
if(!s)k.push(A.i(m,A.cn(r.e),m,m,B.bT,m,m,m,B.a5,m))
else k.push(new A.ak(B.ai,new A.Y(r.f,"dart",r.c,m),m))
return A.i(m,A.n(k,B.T,B.d,B.b),m,m,new A.h(B.r,B.F,B.jQ,l,m,m),m,m,B.d7,m,1/0)}}
A.iG.prototype={
$0(){var s=this.a
t.M.a(new A.iF(s)).$0()
s.n()
return null},
$S:0}
A.iF.prototype={
$0(){return this.a.f=!1},
$S:0}
A.iH.prototype={
$0(){var s=this.a
t.M.a(new A.iE(s)).$0()
s.n()
return null},
$S:0}
A.iE.prototype={
$0(){return this.a.f=!0},
$S:0}
A.dJ.prototype={
B(a){return new A.aW(new A.fl(this),null)},
bT(){var s=null
return A.S(A.I(A.a([A.i(B.aJ,A.fv("assets/dart_logo.png","Dart Logo",B.ah,32,32),s,s,s,32,s,s,s,32),B.P,B.id,B.H,A.i(s,B.fz,s,s,new A.h(B.cQ,B.a_,s,A.v(B.cI,1),s,s),s,s,s,B.dj,s)],t.p),B.a,B.d,B.O),new A.fi())},
ar(a,b,c){var s=null,r=c?B.cL:B.am,q=c?A.v(B.cM,1):s,p=c?B.an:B.iH
return A.S(A.i(s,A.u(a,A.aB(c?B.f:B.n,13,p,s,s),s),s,s,new A.h(r,B.y,s,q,s,s),s,s,B.d4,B.de,s),new A.fj(c,b))},
b9(){var s=null
return A.S(A.i(s,B.et,s,s,new A.h(B.cS,B.y,s,A.v(B.au,1),s,s),s,s,s,B.dd,s),new A.fk())},
b8(){var s=null,r=A.v(B.b2,1)
return A.S(A.i(s,A.ea(this.e?"close":"menu",B.p,20),s,s,new A.h(B.b1,B.y,s,r,s,s),s,s,s,B.dg,s),this.d)}}
A.fl.prototype={
$2(a,b){var s,r,q,p=null,o=b.b,n=o>=1024,m=o>=768&&o<1024,l=this.a,k=l.f,j=B.c.X(k,"/architecture"),i=B.c.X(k,"/widgets"),h=!1
if(!j)if(!i){k=k==="/"||B.c.C(k,"/docs")
h=k}k=o<768?16:24
s=t.p
r=A.a([l.bT()],s)
if(n)r.push(A.S(A.i(p,B.en,p,p,new A.h(B.b0,B.bJ,p,A.v(B.au,1),p,p),p,p,B.d3,B.di,400),l.c))
if(n)r.push(A.I(A.a([l.ar("Docs","/docs/installation",h),l.ar("Architecture","/docs/architecture",j),l.ar("Widgets","/docs/widgets/basic",i),B.H,B.dY,B.bi,l.b9()],s),B.a,B.d,B.b))
else{q=l.c
if(m)r.push(A.I(A.a([A.S(A.i(p,B.eq,p,p,new A.h(B.b0,B.y,p,A.v(B.au,1),p,p),p,p,p,B.df,p),q),B.P,l.b9(),B.P,l.b8()],s),B.a,B.d,B.b))
else r.push(A.I(A.a([A.S(A.i(p,B.iM,p,p,new A.h(B.b1,B.y,p,A.v(B.b2,1),p,p),p,p,p,B.aw,p),q),B.H,l.b8()],s),B.a,B.d,B.b))}return A.i(p,A.I(r,B.cT,B.A,B.b),p,p,B.c4,64,"flart-docs-navbar",p,new A.t(0,k,0,k),1/0)},
$S:10}
A.fi.prototype={
$0(){return A.bi("/",B.w)},
$S:0}
A.fj.prototype={
$0(){if(!this.a)A.bi(this.b,B.w)},
$S:0}
A.fk.prototype={
$0(){A.kP("https://pub.dev/packages/flartdart")},
$S:0}
A.jo.prototype={
$1(a){var s,r,q,p
t.e.a(a)
s=A.w(a.q(0,"title"))
r=A.w(a.q(0,"description"))
q=J.mo(t.d.a(a.q(0,"keywords")),t.N)
p=this.a
return B.c.X(s.toLowerCase(),p)||B.c.X(r.toLowerCase(),p)||q.cQ(q,new A.jn(p))},
$S:21}
A.jn.prototype={
$1(a){return B.c.X(A.w(a),this.a)},
$S:11}
A.bT.prototype={
O(){return new A.dc(new A.bk("",A.a([],t.b)),A.a([],t.X),A.l(t.n,t.O))},
bw(){return this.c.$0()}}
A.dc.prototype={
cv(a){var s=this,r=B.c.a4(a)
if(r.length===0){t.M.a(new A.iU(s)).$0()
s.n()
return}t.M.a(new A.iV(s,r)).$0()
s.n()},
B(a){var s,r,q,p,o,n,m,l=this,k=null,j=l.a
j===$&&A.a5("widget")
j=j.c
s=A.v(B.l,1.5)
r=t.p
q=A.i(k,A.I(A.a([B.j1,B.U,new A.ab(A.cs(!0,l.f,l.gcu(),"Search documentation, widgets, APIs...",B.l8),1,k),B.U,A.S(A.i(k,B.hb,k,k,new A.h(B.z,B.m,k,A.v(B.l,1),k,k),k,k,k,B.bc,k),j)],r),B.a,B.d,B.b),k,k,B.ag,k,k,k,B.aj,k)
p=A.a([],r)
if(l.r.length===0&&l.w.length!==0)p.push(new A.ak(B.d9,A.n(A.a([B.iX,B.h,A.u('No results found for "'+l.w+'"',B.E,k)],r),B.a,B.d,B.b),k))
if(l.r.length===0&&l.w.length===0)p.push(new A.ak(B.a5,A.n(A.a([B.hp,B.h,l.a5("Installation","/docs/installation"),l.a5("Virtual DOM Architecture","/docs/architecture"),l.a5("Responsive Design","/docs/responsive"),l.a5("Widgets: Layout & Structure","/docs/widgets/layout"),l.a5("State Management","/docs/state")],r),B.a,B.d,B.b),k))
for(o=l.r,n=o.length,m=0;m<o.length;o.length===n||(0,A.aH)(o),++m)p.push(l.c4(o[m]))
return A.S(A.i(k,A.kt(B.bD,A.S(A.i(k,A.n(A.a([q,A.i(k,A.fz(A.n(p,B.a,B.d,B.b),B.a8),k,B.bO,k,k,k,k,k,k),B.e3],r),B.T,B.d,B.O),k,B.aQ,new A.h(B.r,B.F,B.je,s,k,k),k,k,k,k,k),new A.iW())),k,k,B.bV,k,k,k,B.dh,1/0),j)},
a5(a,b){var s=null
return A.S(A.i(s,A.I(A.a([A.u(a,B.ap,s),B.iL],t.p),B.a,B.A,B.b),s,s,B.aS,s,s,B.d2,B.ak,s),new A.iS(this,b))},
c4(a){var s,r,q,p,o,n,m,l=null
t.e.a(a)
s=A.aC(a.q(0,"title"))
if(s==null)s=""
r=A.aC(a.q(0,"category"))
if(r==null)r="Doc"
q=A.aC(a.q(0,"description"))
if(q==null)q=""
p=A.aC(a.q(0,"path"))
if(p==null)p="/"
o=B.k.A(0.15)
n=A.v(B.k.A(0.3),1)
m=t.p
return A.S(A.i(l,A.I(A.a([A.i(l,A.u(r.toUpperCase(),B.l1,l),l,l,new A.h(o,B.m,l,n,l,l),l,l,l,B.bc,l),B.U,new A.ab(A.n(A.a([A.u(s,B.lh,l),B.V,A.u(q,B.ao,l)],m),B.a,B.d,B.b),1,l),B.H,B.iO],m),B.a,B.d,B.b),l,l,B.ag,l,l,l,B.aj,l),new A.iT(this,p))}}
A.iU.prototype={
$0(){var s=this.a
s.w=""
s.r=A.a([],t.X)},
$S:0}
A.iV.prototype={
$0(){var s=this.a,r=this.b
s.w=r
s.r=A.oi(r)},
$S:0}
A.iW.prototype={
$0(){},
$S:0}
A.iS.prototype={
$0(){var s=this.a.a
s===$&&A.a5("widget")
s.bw()
A.bi(this.b,B.w)},
$S:0}
A.iT.prototype={
$0(){var s=this.a.a
s===$&&A.a5("widget")
s.bw()
A.bi(this.b,B.w)},
$S:0}
A.ck.prototype={
B(a){var s=this,r=null,q=s.e?"flart-docs-drawer-content":"flart-docs-sidebar"
return A.i(r,A.fz(new A.ak(B.d8,A.n(A.a([new A.ak(B.av,A.u("GETTING STARTED",B.aE,r),r),s.N("Overview","/","home"),s.N("Installation & CLI","/docs/installation","terminal"),s.N("Virtual DOM Architecture","/docs/architecture","memory"),B.J,new A.ak(B.av,A.u("CORE CONCEPTS",B.aE,r),r),s.N("Responsive Design","/docs/responsive","devices"),s.N("State Management","/docs/state","refresh"),s.N("Declarative Routing","/docs/routing","alt_route"),B.J,new A.ak(B.av,A.u("THE 9 WIDGET CATEGORIES",B.aE,r),r),s.N("1. Basic & Core","/docs/widgets/basic","widgets"),s.N("2. Layout & Structure","/docs/widgets/layout","view_quilt"),s.N("3. Decoration & Style","/docs/widgets/decoration","palette"),s.N("4. Scrollables & Lists","/docs/widgets/scrollables","view_stream"),s.N("5. Form & Inputs","/docs/widgets/inputs","edit"),s.N("6. Buttons & Gestures","/docs/widgets/buttons","touch_app"),s.N("7. Animations","/docs/widgets/animation","animation"),s.N("8. Media & Feedback","/docs/widgets/media","image"),s.N("9. Utility & Modals","/docs/widgets/utility","layers")],t.p),B.a,B.d,B.b),r),B.a8),r,r,B.c0,r,q,r,r,260)},
N(a,b,c){var s=null,r=this.c===b,q=r?B.f.A(0.12):B.am,p=r?A.v(B.f.A(0.3),1):s,o=A.ea(c,r?B.f:B.u,16),n=r?B.an:B.iI
o=A.a([o,B.P,new A.ab(A.u(a,A.aB(r?B.f:B.n,13,n,s,s),s),1,s)],t.p)
if(r)o.push(B.e7)
return A.S(A.i(s,A.I(o,B.a,B.d,B.b),s,s,new A.h(q,B.y,s,p,s,s),s,s,B.d1,B.ak,s),new A.fm(this,r,b))}}
A.fm.prototype={
$0(){var s=this.a.d
if(s!=null)s.$0()
if(!this.b)A.bi(this.c,B.w)},
$S:0}
A.dw.prototype={
B(a){var s=this,r=null,q=t.p,p=A.n(A.a([A.i(r,B.f_,r,r,new A.h(B.a4.A(0.15),B.m,r,r,r,r),r,r,r,B.t,r),B.h,B.eU,B.o,B.hs],q),B.a,B.d,B.b),o=A.v(B.l,1)
return new A.V("/docs/architecture",A.n(A.a([p,B.i,B.dJ,B.i,A.i(r,A.n(A.a([B.dX,s.a1("Rendering Engine","Pure Dart Virtual DOM (HTML5)","Skia / WASM (<canvas>)"),s.a1("Gzipped Bundle Size","~280 KB","18.4 MB"),s.a1("Time to Interactive (TTI)","< 180 ms","2,100 \u2013 3,500 ms"),s.a1("SEO / Crawlability","100% Native Semantic DOM","Invisible to crawlers"),s.a1("RAM Consumption","~40 MB","320 MB+"),s.a1("API Parity","100% Flutter API Parity","Native Flutter")],q),B.a,B.d,B.b),r,r,new A.h(B.r,B.F,r,o,r,r),r,r,r,r,1/0),B.i,B.dI,B.i,A.i(r,B.dF,r,r,new A.h(B.a3,B.F,r,A.v(B.k.A(0.3),1),r,r),r,r,r,B.a5,r)],q),B.a,B.d,B.b),r)},
a1(a,b,c){var s=null
return A.i(s,A.I(A.a([new A.ab(A.u(a,B.Q,s),3,s),new A.ab(A.u(b,B.by,s),3,s),new A.ab(A.u(c,B.l7,s),3,s)],t.p),B.a,B.d,B.b),s,s,B.ag,s,s,s,B.b8,s)}}
A.bI.prototype={
O(){var s=t.b
return new A.d3(new A.bk("",A.a([],s)),new A.bk("",A.a([],s)),A.a([],t.X),A.l(t.n,t.O))}}
A.d3.prototype={
cK(){var s,r,q,p=this,o=B.c.a4(p.x.b)
if(o.length===0)return
s=t.M
s.a(new A.ip(p)).$0()
p.n()
r=p.z
q=B.c.a4(p.y.b)
B.e.p(p.at,A.C(["rating",r,"message",o,"author",q.length!==0?q:"Anonymous Developer"],t.N,t.z))
s.a(new A.iq(p)).$0()
p.n()},
B(a){return new A.aW(new A.ir(this),null)},
bZ(a,b){var s,r,q,p=null,o=B.f.A(0.12),n=A.v(B.f.A(0.3),1),m=t.p
n=A.i(p,A.I(A.a([A.fv("assets/dart_logo.png","Dart Logo",B.ah,16,16),B.H,B.fI],m),B.a,B.d,B.O),p,p,new A.h(o,B.bI,p,n,p,p),p,p,p,B.be,p)
o=a?"Fast, minimal web\nframework for Dart":"Fast, minimal, lightweight\nweb framework for Dart"
if(a)s=32
else s=b?40:48
o=A.u(o,A.aB(B.p,s,B.a6,1.15,a?-0.5:-1.2),B.Y)
s=A.cn(A.i(p,A.u("Build rich, responsive web apps in pure Dart with an ultra-lightweight Virtual DOM, 100% Flutter API parity, and zero CanvasKit overhead.",A.aB(B.n,a?15:17,p,1.6,p),B.Y),p,B.bN,p,p,p,p,p,p))
r=a?22:28
r=A.S(A.i(p,B.ew,p,p,B.bR,p,p,p,new A.t(14,r,14,r),p),new A.id())
q=a?20:24
q=A.aX(B.N,A.a([r,A.S(A.i(p,B.fx,p,p,new A.h(B.a3,B.ae,p,A.v(B.l,1),p,p),p,p,p,new A.t(14,q,14,q),p),new A.ie())],m),B.R,12,16)
r=A.v(B.l,1)
return A.n(A.a([n,B.eJ,o,B.D,s,B.i,q,B.i,A.i(p,A.fz(B.ev,B.aL),p,B.aQ,new A.h(B.b3,B.a_,p,r,p,p),p,p,p,B.aj,p)],m),B.a,B.d,B.b)},
ab(a,b,c,d,e,f,g){var s=null,r=d?1/0:220,q=A.v(B.l,1),p=A.ea(c,b,22),o=b.A(0.15),n=t.p
return A.i(s,A.n(A.a([A.I(A.a([p,A.i(s,A.u(a,A.aB(b,10,B.j,s,s),s),s,s,new A.h(o,B.m,s,s,s,s),s,s,s,B.bb,s)],n),B.a,B.A,B.b),B.D,A.u(g,B.kX,s),B.V,A.u(f,B.lc,s),B.V,A.u(e,B.aC,s)],n),B.a,B.d,B.b),s,s,new A.h(B.r,B.F,s,q,s,s),s,s,s,B.I,r)},
c0(a){var s,r,q,p,o,n,m,l=this,k=null,j=A.v(B.l,1.5),i=a?18:24,h=t.p
i=A.i(k,A.aX(B.A,A.a([A.n(A.a([A.u("Live Interactive Flart Playground",A.aB(B.p,a?18:20,B.j,k,k),k),B.V,B.hG],h),B.a,B.d,B.b),A.i(k,B.hj,k,k,new A.h(B.f.A(0.15),B.m,k,k,k,k),k,k,k,B.bb,k)],h),B.bB,8,12),k,k,B.bX,k,k,k,new A.t(i,i,i,i),k)
s=a?20:32
r=a?1/0:240
q=A.v(B.l,1)
r=A.i(k,A.n(A.a([B.fJ,B.h,A.u(""+l.f,B.kN,k),B.D,A.I(A.a([A.ap(B.hT,new A.ik(l)),B.U,A.ap(B.eO,new A.il(l))],h),B.a,B.N,B.b)],h),B.a,B.d,B.b),k,k,new A.h(B.z,B.a0,k,q,k,k),k,k,k,B.I,r)
q=a?1/0:240
p=A.v(B.l,1)
o=l.r
n=A.kx(new A.im(l),o)
m=o?"Status: Active (ON)":"Status: Inactive (OFF)"
q=A.i(k,A.n(A.a([B.hL,B.D,n,B.D,A.u(m,A.aB(o?B.f:B.u,12,B.j,k,k),k)],h),B.a,B.d,B.b),k,k,new A.h(B.z,B.a0,k,p,k,k),k,k,k,B.I,q)
p=a?1/0:260
o=A.v(B.l,1)
n=l.w
return A.i(k,A.n(A.a([i,new A.ak(new A.t(s,s,s,s),A.aX(B.kf,A.a([r,q,A.i(k,A.n(A.a([B.fG,B.h,A.u(""+B.X.bB(n)+"%",B.lj,k),B.o,A.kv(100,0,new A.io(l),n)],h),B.a,B.d,B.b),k,k,new A.h(B.z,B.a0,k,o,k,k),k,k,k,B.I,p)],h),B.R,20,24),k)],h),B.T,B.d,B.b),k,k,new A.h(B.r,B.as,k,j,k,k),k,k,k,k,k)},
a6(a,b){return A.n(A.a([A.u(a,B.aC,null),B.V,A.u(b,B.le,null)],t.p),B.a,B.d,B.b)},
W(a,b,c,d,e){var s=null,r=e?1/0:280,q=A.v(B.l,1)
return A.S(A.i(s,A.n(A.a([A.ea(d,B.f,24),B.h,A.u(a,B.ar,s),B.o,A.u(b,B.kR,s),B.eI,B.em],t.p),B.a,B.d,B.b),s,s,new A.h(B.r,B.F,s,q,s,s),s,s,s,B.I,r),new A.i8(c))},
bV(a){var s,r,q,p,o=this,n=null,m="Your name or handle (e.g. @developer)",l=a?20:32,k=A.v(B.l,1),j=t.p,i=A.a([B.hA,B.bk,B.fb,B.bj],j)
if(o.as!=null){s=B.f.A(0.15)
r=A.v(B.f,1)
q=o.as
q.toString
i.push(A.i(n,A.u(q,B.ad,n),n,n,new A.h(s,B.ae,n,r,n,n),n,n,B.d0,B.ab,n))}s=o.y
if(a){s=A.cs(!1,s,n,m,B.K)
r=A.a([B.fQ,B.H],j)
for(p=1;p<=5;++p)r.push(A.S(new A.ak(B.b7,new A.N("star",24,p<=o.z?B.G:B.u,n,n,n),n),new A.ib(o,p)))
B.e.H(i,A.a([s,B.h,A.I(r,B.a,B.d,B.b)],j))}else{s=A.i(n,A.cs(!1,s,n,m,B.K),n,n,n,n,n,n,n,500)
r=A.a([],j)
for(p=1;p<=5;++p)r.push(A.S(new A.ak(B.b7,new A.N("star",22,p<=o.z?B.G:B.u,n,n,n),n),new A.ic(o,p)))
i.push(A.I(A.a([s,B.P,A.I(r,B.a,B.d,B.b)],j),B.a,B.d,B.b))}i.push(B.D)
i.push(A.cs(!1,o.x,n,"What do you think of FlartDart v2.2.0?",B.K))
i.push(B.J)
j=o.Q
s=j?n:o.gcJ()
i.push(A.ap(A.u(j?"Submitting...":"Submit Feedback",n,n),s))
return A.i(n,A.n(i,B.a,B.d,B.b),n,n,new A.h(B.r,B.as,n,k,n,n),n,n,n,new A.t(l,l,l,l),n)}}
A.ip.prototype={
$0(){this.a.Q=!0},
$S:0}
A.iq.prototype={
$0(){var s=this.a
s.Q=!1
s.as="Thank you! Your feedback has been recorded."
s.x.sb_("")},
$S:0}
A.ir.prototype={
$2(a,b){var s=null,r=b.b,q=r<768,p=r>=768&&r<1024,o=this.a,n=o.bZ(q,p),m=t.p,l=A.n(A.a([B.fl,B.h,B.h2,B.i,A.aX(B.N,A.a([o.ab("98.4% Smaller",B.f,"compress",q,"vs 18.4 MB (CanvasKit)","Bundle Size (gzipped)","~280 KB"),o.ab("17.5x Faster",B.k,"speed",q,"vs 2,100 ms (CanvasKit)","First Contentful Paint","120 ms"),o.ab("Full Web Searchable",B.L,"search",q,"Semantic HTML5 Elements","SEO & Search Indexing","100% Native"),o.ab("60+ FPS Smooth",B.a4,"memory",q,"Microsecond Reconciler","Virtual DOM Diffing","0.3 ms")],m),B.R,16,16)],m),B.a,B.d,B.b),k=o.c0(q),j=q?20:28,i=A.v(B.f.A(0.3),1),h=A.fv("assets/dart_logo.png","Dart Logo",B.ah,24,24)
return new A.V("/",A.n(A.a([n,B.ac,l,B.ac,k,B.ac,A.i(s,A.n(A.a([A.aX(B.A,A.a([A.I(A.a([h,B.U,A.n(A.a([A.u("FlartDart Framework Stats",A.aB(B.p,q?16:18,B.j,s,s),s),B.eK,B.ic],m),B.a,B.d,B.b)],m),B.a,B.d,B.O),A.i(s,B.i9,s,s,new A.h(B.f.A(0.2),B.y,s,s,s,s),s,s,s,B.t,s)],m),B.bB,10,12),B.J,A.aX(B.d,A.a([o.a6("Runtime","Dart SDK 3.x"),o.a6("Widgets Audited","100+"),o.a6("Categories","9 Categories (100% Parity)"),o.a6("Bundle Size","~280 KB gzipped"),o.a6("License","MIT")],m),B.R,16,24)],m),B.a,B.d,B.b),s,s,new A.h(B.a3,B.aO,s,i,s,s),s,s,s,new A.t(j,j,j,j),s),B.ac,A.n(A.a([B.f5,B.h,B.ht,B.i,A.aX(B.N,A.a([o.W("1. Basic & Core","Container, Text, Padding, Center, SizedBox, ColoredBox","/docs/widgets/basic","widgets",q),o.W("2. Layout & Structure","Column, Row, Flex, Expanded, Spacer, Wrap, Stack, Positioned","/docs/widgets/layout","view_quilt",q),o.W("3. Decoration & Style","BoxDecoration, Border, BorderRadius, BoxShadow, Gradient, ClipRRect","/docs/widgets/decoration","palette",q),o.W("4. Scrollables & Lists","ListView, ListView.builder, GridView, SingleChildScrollView","/docs/widgets/scrollables","view_stream",q),o.W("5. Form & Inputs","TextField, TextFormField, Checkbox, Radio, Switch, Slider, Dropdown","/docs/widgets/inputs","edit",q),o.W("6. Buttons & Gestures","ElevatedButton, TextButton, OutlinedButton, IconButton, GestureDetector","/docs/widgets/buttons","touch_app",q),o.W("7. Animations","AnimatedContainer, AnimatedOpacity, FadeTransition, SlideTransition","/docs/widgets/animation","animation",q),o.W("8. Media & Feedback","Image.network, Icon, ProgressIndicator, Tooltip, SnackBar","/docs/widgets/media","image",q),o.W("9. Utility & Modals","Dialog, AlertDialog, BottomSheet, Divider, Opacity, Visibility","/docs/widgets/utility","layers",q)],m),B.R,16,16)],m),B.a,B.d,B.b),B.ac,o.bV(q)],m),B.T,B.d,B.b),s)},
$S:22}
A.id.prototype={
$0(){return A.bi("/docs/installation",B.w)},
$S:0}
A.ie.prototype={
$0(){return A.bi("/docs/widgets/basic",B.w)},
$S:0}
A.ik.prototype={
$0(){var s=this.a
t.M.a(new A.ij(s)).$0()
s.n()
return null},
$S:0}
A.ij.prototype={
$0(){return this.a.f--},
$S:0}
A.il.prototype={
$0(){var s=this.a
t.M.a(new A.ii(s)).$0()
s.n()
return null},
$S:0}
A.ii.prototype={
$0(){return this.a.f++},
$S:0}
A.im.prototype={
$1(a){var s=this.a
t.M.a(new A.ih(s,a)).$0()
s.n()
return null},
$S:7}
A.ih.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.io.prototype={
$1(a){var s=this.a
t.M.a(new A.ig(s,a)).$0()
s.n()
return null},
$S:14}
A.ig.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.i8.prototype={
$0(){return A.bi(this.a,B.w)},
$S:0}
A.ib.prototype={
$0(){var s=this.a
t.M.a(new A.ia(s,this.b)).$0()
s.n()
return null},
$S:0}
A.ia.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.ic.prototype={
$0(){var s=this.a
t.M.a(new A.i9(s,this.b)).$0()
s.n()
return null},
$S:0}
A.i9.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.ed.prototype={
B(a){var s=null,r=t.p
return new A.V("/docs/installation",A.n(A.a([A.n(A.a([A.i(s,B.hx,s,s,new A.h(B.k.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.hg,B.o,B.hw],r),B.a,B.d,B.b),B.i,B.dE,B.i,B.dK,B.i,B.dU,B.i,B.dO,B.i,B.dM],r),B.a,B.d,B.b),s)}}
A.bS.prototype={
O(){return new A.f1(A.l(t.n,t.O))}}
A.f1.prototype={
B(a){var s=null,r=t.p
return new A.V("/docs/responsive",A.n(A.a([A.n(A.a([A.i(s,B.ij,s,s,new A.h(B.k.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.hd,B.o,B.ii],r),B.a,B.d,B.b),B.i,this.c_(),B.i,B.dQ,B.i,B.dL],r),B.a,B.d,B.b),s)},
c_(){var s,r=this,q=null,p=r.f,o=p<380?B.G.A(0.15):B.f.A(0.15),n=r.f,m=n<380,l=A.v(m?B.G:B.f,1.5),k=m?"phone_android":"laptop"
k=A.ea(k,m?B.G:B.f,32)
s=t.p
return new A.L("Adaptive Responsive Container","Drag the slider below to simulate different container widths and watch the layout adapt.",A.n(A.a([A.i(q,A.n(A.a([k,B.ax,A.u(m?"Mobile Viewport":"Desktop / Tablet Viewport",B.az,q),B.V,A.u("Width: "+B.q.bB(n)+"px",B.ao,q)],s),B.a,B.d,B.b),q,q,new A.h(o,B.F,q,l,q,q),q,q,q,B.I,p),B.J,A.I(A.a([B.hB,A.ap(B.fM,new A.iP(r)),B.H,A.ap(B.ib,new A.iQ(r)),B.H,A.ap(B.f9,new A.iR(r))],s),B.a,B.N,B.b)],s),B.a,B.d,B.b),"Widget build(BuildContext context) {\n  return LayoutBuilder(\n    builder: (context, constraints) {\n      final isCompact = constraints.maxWidth < 380;\n      return Container(\n        padding: const EdgeInsets.all(20),\n        decoration: BoxDecoration(\n          color: isCompact ? Color(0x22F59E0B) : Color(0x2210B981),\n          borderRadius: BorderRadius.circular(16),\n          border: Border.all(color: isCompact ? Colors.amber : Colors.green),\n        ),\n        child: Column(\n          children: [\n            Icon(isCompact ? Icons.phone_android : Icons.laptop),\n            Text(isCompact ? 'Mobile Viewport' : 'Desktop Viewport'),\n          ],\n        ),\n      );\n    },\n  );\n}",q)}}
A.iP.prototype={
$0(){var s=this.a
t.M.a(new A.iO(s)).$0()
s.n()
return null},
$S:0}
A.iO.prototype={
$0(){return this.a.f=260},
$S:0}
A.iQ.prototype={
$0(){var s=this.a
t.M.a(new A.iN(s)).$0()
s.n()
return null},
$S:0}
A.iN.prototype={
$0(){return this.a.f=440},
$S:0}
A.iR.prototype={
$0(){var s=this.a
t.M.a(new A.iM(s)).$0()
s.n()
return null},
$S:0}
A.iM.prototype={
$0(){return this.a.f=620},
$S:0}
A.ex.prototype={
B(a){var s=null,r=t.p
return new A.V("/docs/routing",A.n(A.a([A.n(A.a([A.i(s,B.hF,s,s,new A.h(B.G.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.eN,B.o,B.hM],r),B.a,B.d,B.b),B.i,B.dW,B.i,B.dV,B.i,B.dD,B.i,B.dT,B.i,B.dH],r),B.a,B.d,B.b),s)}}
A.bZ.prototype={
O(){return new A.df(A.a(["Audit widget styling","Verify zero rawCss","Deploy Flart docs"],t.s),new A.bk("",A.a([],t.b)),A.l(t.n,t.O))}}
A.df.prototype={
bO(){var s=B.c.a4(this.r.b)
if(s.length!==0){t.M.a(new A.iX(this,s)).$0()
this.n()}},
cB(a){t.M.a(new A.iZ(this,a)).$0()
this.n()},
B(a){var s=null,r=t.p
return new A.V("/docs/state",A.n(A.a([A.n(A.a([A.i(s,B.hr,s,s,new A.h(B.L.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.hm,B.o,B.ha],r),B.a,B.d,B.b),B.i,this.c1(),B.i,B.dR,B.i,B.dG],r),B.a,B.d,B.b),s)},
c1(){var s,r,q=this,p=null,o=A.v(B.l,1),n=t.p,m=A.I(A.a([new A.ab(A.cs(!1,q.r,p,"New task...",B.ap),1,p),B.H,A.ap(B.fa,q.gbN())],n),B.a,B.d,B.b),l=A.a([],n)
for(s=q.f,r=0;r<s.length;++r)l.push(new A.P(new A.Z(A.a([A.u(s[r],B.ap,p),A.S(B.iN,new A.iY(q,r))],n),B.A,B.a,B.b,p),p,p,p,p,B.ak,B.b6,B.aS,p,p,p))
return new A.L("Interactive State Management Demo","Add and remove tasks live to see StatefulWidget and setState diffing in action.",A.i(p,A.n(A.a([B.hC,B.h,m,B.D,A.n(l,B.a,B.d,B.b)],n),B.T,B.d,B.b),p,p,new A.h(B.r,B.F,p,o,p,p),p,p,p,B.I,360),"class TodoListWidget extends StatefulWidget {\n  const TodoListWidget({super.key});\n\n  @override\n  State<TodoListWidget> createState() => _TodoListWidgetState();\n}\n\nclass _TodoListWidgetState extends State<TodoListWidget> {\n  final List<String> _todos = ['Task 1', 'Task 2'];\n  final TextEditingController _ctrl = TextEditingController();\n\n  void _add() {\n    if (_ctrl.text.isNotEmpty) {\n      setState(() {\n        _todos.add(_ctrl.text);\n        _ctrl.text = '';\n      });\n    }\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      children: [\n        TextField(controller: _ctrl),\n        ElevatedButton(onPressed: _add, child: const Text('Add')),\n        for (final t in _todos) Text(t),\n      ],\n    );\n  }\n}",p)}}
A.iX.prototype={
$0(){var s=this.a
B.e.p(s.f,this.b)
s.r.sb_("")},
$S:0}
A.iZ.prototype={
$0(){B.e.dc(this.a.f,this.b)},
$S:0}
A.iY.prototype={
$0(){return this.a.cB(this.b)},
$S:0}
A.bz.prototype={
O(){return new A.eO(A.l(t.n,t.O))}}
A.eO.prototype={
B(a){var s=null,r=t.p
return new A.V("/docs/widgets/animation",A.n(A.a([A.n(A.a([A.i(s,B.fs,s,s,new A.h(B.L.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.ig,B.o,B.hf],r),B.a,B.d,B.b),B.i,this.bR(),B.i,this.bS()],r),B.a,B.d,B.b),s)},
bR(){var s=null,r=this.f,q=r?260:120,p=r?140:80,o=r?B.f:B.k,n=r?24:12,m=A.a([new A.aj(B.ay,16,(r?B.f:B.k).A(0.4))],t.V)
return new A.L("AnimatedContainer","Animates changes in width, height, color, and borderRadius smoothly over time.",A.n(A.a([new A.dO(A.cn(A.u(this.f?"Expanded!":"Click Toggle",B.Z,s)),q,p,new A.h(o,new A.W(n,n,n,n),m,s,s,s),B.cd,B.cZ,s),B.J,A.ap(B.fX,new A.ho(this))],t.p),B.a,B.d,B.b),"AnimatedContainer(\n  duration: const Duration(milliseconds: 500),\n  curve: Curves.easeInOut,\n  width: _isExpanded ? 260 : 120,\n  height: _isExpanded ? 140 : 80,\n  decoration: BoxDecoration(\n    color: _isExpanded ? Colors.green : Colors.blue,\n    borderRadius: BorderRadius.circular(_isExpanded ? 24 : 12),\n  ),\n  child: Center(child: Text(_isExpanded ? 'Expanded!' : 'Contracted')),\n)",s)},
bS(){var s=null,r=this.r,q=r?1:0,p=A.i(s,B.h4,s,s,new A.h(B.r,B.a_,s,A.v(B.L,1),s,s),s,s,s,B.ba,s)
return new A.L("AnimatedOpacity","Gradually fades child widgets in and out with configurable duration and easing curves.",A.n(A.a([new A.dv(p,q,B.d_,s),B.J,A.ap(A.u(r?"Fade Out":"Fade In",s,s),new A.hq(this))],t.p),B.a,B.d,B.b),"AnimatedOpacity(\n  opacity: _isVisible ? 1.0 : 0.0,\n  duration: const Duration(milliseconds: 600),\n  child: Container(\n    padding: const EdgeInsets.all(16),\n    child: const Text('Fading Content Box'),\n  ),\n)",s)}}
A.ho.prototype={
$0(){var s=this.a
t.M.a(new A.hn(s)).$0()
s.n()
return null},
$S:0}
A.hn.prototype={
$0(){var s=this.a
return s.f=!s.f},
$S:0}
A.hq.prototype={
$0(){var s=this.a
t.M.a(new A.hp(s)).$0()
s.n()
return null},
$S:0}
A.hp.prototype={
$0(){var s=this.a
return s.r=!s.r},
$S:0}
A.dB.prototype={
B(a){var s=null,r=t.p,q=A.n(A.a([A.i(s,B.i8,s,s,new A.h(B.f.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.i1,B.o,B.fO],r),B.a,B.d,B.b),p=A.i(s,B.dS,s,s,new A.h(B.r,B.F,B.jN,A.v(B.l,1.5),s,s),s,s,s,B.a5,320)
return new A.V("/docs/widgets/basic",A.n(A.a([q,B.i,new A.L("Container & Padding","A versatile convenience widget combining sizing, padding, and box decoration.",p,"Container(\n  width: 320,\n  padding: const EdgeInsets.all(24),\n  decoration: BoxDecoration(\n    color: const Color(0xFF111827),\n    borderRadius: BorderRadius.circular(16),\n    border: Border.all(color: const Color(0xFF334155), width: 1.5),\n    boxShadow: const [\n      BoxShadow(\n        color: Color(0x33000000),\n        blurRadius: 12,\n        offset: Offset(0, 6),\n      ),\n    ],\n  ),\n  child: Column(\n    children: [\n      Text('Container with Padding', style: TextStyle(fontWeight: FontWeight.bold)),\n      SizedBox(height: 8),\n      Text('Clean declarative styling.'),\n    ],\n  ),\n)",s),B.i,new A.L("Text & RichText Spans","Display styled text spans with individual font weights, colors, and line heights.",A.i(s,new A.e2(B.kI,s),s,s,B.af,s,s,s,B.I,s),"RichText(\n  text: const TextSpan(\n    text: 'Flart provides ',\n    style: TextStyle(fontSize: 16, color: Colors.grey),\n    children: [\n      TextSpan(\n        text: '100% Flutter API parity ',\n        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Colors.green),\n      ),\n      TextSpan(\n        text: 'with zero canvas baggage.',\n        style: TextStyle(fontSize: 16, color: Colors.grey),\n      ),\n    ],\n  ),\n)",s),B.i,B.j7],r),B.a,B.d,B.b),s)}}
A.bB.prototype={
O(){return new A.eQ(A.l(t.n,t.O))}}
A.eQ.prototype={
B(a){var s=null,r=t.p
return new A.V("/docs/widgets/buttons",A.n(A.a([A.n(A.a([A.i(s,B.i6,s,s,new A.h(B.k.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.fn,B.o,B.he],r),B.a,B.d,B.b),B.i,this.bU(),B.i,this.bX()],r),B.a,B.d,B.b),s)},
bU(){var s=this,r=null,q=t.p
return new A.L("Button Variants","Standard Material button types with custom styling and click handlers.",A.n(A.a([A.aX(B.N,A.a([A.ap(B.fq,new A.hz(s)),new A.e1(B.fY,new A.hA(s),r),A.ky(B.h9,new A.hB(s)),new A.dX(B.iK,new A.hC(s),r)],q),B.R,12,12),B.D,A.u("Last Clicked: "+s.f,B.l4,r)],q),B.a,B.d,B.b),"ElevatedButton(\n  onPressed: () => print('Elevated clicked'),\n  child: const Text('ElevatedButton'),\n)\n\nOutlinedButton(\n  onPressed: () => print('Outlined clicked'),\n  child: const Text('OutlinedButton'),\n)\n\nTextButton(\n  onPressed: () => print('Text clicked'),\n  child: const Text('TextButton'),\n)",r)},
bX(){var s=null
return new A.L("GestureDetector & InkWell","Wrap any custom UI element with tap, double-tap, or hover handlers.",A.S(A.i(s,B.eo,s,s,new A.h(B.r,B.a_,s,A.v(B.f,1),s,s),s,s,s,B.ba,s),new A.hE(this)),"GestureDetector(\n  onTap: () => print('Custom card tapped'),\n  child: Container(\n    padding: const EdgeInsets.all(16),\n    decoration: BoxDecoration(\n      color: Colors.slate,\n      borderRadius: BorderRadius.circular(12),\n    ),\n    child: Text('Tap me'),\n  ),\n)",s)}}
A.hz.prototype={
$0(){var s=this.a
t.M.a(new A.hy(s)).$0()
s.n()
return null},
$S:0}
A.hy.prototype={
$0(){return this.a.f="ElevatedButton"},
$S:0}
A.hA.prototype={
$0(){var s=this.a
t.M.a(new A.hx(s)).$0()
s.n()
return null},
$S:0}
A.hx.prototype={
$0(){return this.a.f="OutlinedButton"},
$S:0}
A.hB.prototype={
$0(){var s=this.a
t.M.a(new A.hw(s)).$0()
s.n()
return null},
$S:0}
A.hw.prototype={
$0(){return this.a.f="TextButton"},
$S:0}
A.hC.prototype={
$0(){var s=this.a
t.M.a(new A.hv(s)).$0()
s.n()
return null},
$S:0}
A.hv.prototype={
$0(){return this.a.f="IconButton (Thumb Up)"},
$S:0}
A.hE.prototype={
$0(){var s=this.a
t.M.a(new A.hD(s)).$0()
s.n()
return null},
$S:0}
A.hD.prototype={
$0(){return this.a.f="Custom GestureDetector Card"},
$S:0}
A.dH.prototype={
B(a){var s=null,r=t.p
return new A.V("/docs/widgets/decoration",A.n(A.a([A.n(A.a([A.i(s,B.fr,s,s,new A.h(B.L.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.hI,B.o,B.ft],r),B.a,B.d,B.b),B.i,new A.L("BoxDecoration & Rounded Borders","Border radii, solid borders, and background color mapping.",A.i(s,B.dq,s,s,new A.h(B.r,B.as,s,A.v(B.f,2),s,s),s,s,s,B.a5,260),"Container(\n  width: 260,\n  padding: const EdgeInsets.all(24),\n  decoration: BoxDecoration(\n    color: const Color(0xFF111827),\n    borderRadius: BorderRadius.circular(20),\n    border: Border.all(color: const Color(0xFF10B981), width: 2),\n  ),\n  child: const Text('Border.all & BorderRadius'),\n)",s),B.i,B.j8,B.i,B.j5],r),B.a,B.d,B.b),s)}}
A.bK.prototype={
O(){return new A.eX(new A.bk("",A.a([],t.b)),A.l(t.n,t.O))}}
A.eX.prototype={
B(a){var s=null,r=t.p
return new A.V("/docs/widgets/inputs",A.n(A.a([A.n(A.a([A.i(s,B.fS,s,s,new A.h(B.a4.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.h5,B.o,B.fB],r),B.a,B.d,B.b),B.i,this.bW(),B.i,this.c5()],r),B.a,B.d,B.b),s)},
bW(){var s=this,r=null,q=s.f,p=A.cs(!1,q,new A.iu(s),"Enter username...",B.K)
q=q.b
return new A.L("TextField & DropdownButton","Single-line text entry and selection menus with reactive state.",A.i(r,A.n(A.a([p,B.h,A.u("Live value: "+(q.length===0?"(empty)":q),B.kT,r),B.D,new A.cp(s.z,B.jH,new A.iv(s),r,t.gH)],t.p),B.T,B.d,B.b),r,r,B.aR,r,r,r,B.I,360),"TextField(\n  controller: _textCtrl,\n  placeholder: 'Enter username...',\n  onChanged: (val) => setState(() {}),\n)\n\nDropdownButton<String>(\n  value: _dropdownVal,\n  items: const [\n    DropdownMenuItem(value: 'Option 1', child: Text('Option 1')),\n    DropdownMenuItem(value: 'Option 2', child: Text('Option 2')),\n  ],\n  onChanged: (val) => setState(() => _dropdownVal = val!),\n)",r)},
c5(){var s=this,r=null,q=t.p
return new A.L("Checkbox, Switch, Radio & Slider","Boolean toggles, exclusive selections, and continuous sliders.",A.i(r,A.n(A.a([A.I(A.a([B.eT,new A.dP(s.r,new A.iA(s),r)],q),B.a,B.A,B.b),B.h,A.I(A.a([B.eQ,A.kx(new A.iB(s),s.x)],q),B.a,B.A,B.b),B.h,A.I(A.a([B.f7,new A.cq(1,s.w,new A.iC(s),r,t.b_)],q),B.a,B.A,B.b),B.h,A.kv(100,0,new A.iD(s),s.y)],q),B.a,B.d,B.b),r,r,B.aR,r,r,r,B.I,360),"Checkbox(\n  value: _checkboxVal,\n  onChanged: (val) => setState(() => _checkboxVal = val!),\n)\n\nSwitch(\n  value: _switchVal,\n  onChanged: (val) => setState(() => _switchVal = val),\n)\n\nSlider(\n  value: _sliderVal,\n  min: 0,\n  max: 100,\n  onChanged: (val) => setState(() => _sliderVal = val),\n)",r)}}
A.iu.prototype={
$1(a){t.M.a(new A.it()).$0()
this.a.n()
return null},
$S:12}
A.it.prototype={
$0(){},
$S:0}
A.iv.prototype={
$1(a){var s=this.a
t.M.a(new A.is(s,a)).$0()
s.n()},
$S:23}
A.is.prototype={
$0(){return this.a.z=this.b},
$S:0}
A.iA.prototype={
$1(a){var s=this.a
t.M.a(new A.iz(s,a)).$0()
s.n()
return null},
$S:24}
A.iz.prototype={
$0(){return this.a.r=this.b===!0},
$S:0}
A.iB.prototype={
$1(a){var s=this.a
t.M.a(new A.iy(s,a)).$0()
s.n()
return null},
$S:7}
A.iy.prototype={
$0(){return this.a.x=this.b},
$S:0}
A.iC.prototype={
$1(a){var s=this.a
t.M.a(new A.ix(s,a)).$0()
s.n()
return null},
$S:25}
A.ix.prototype={
$0(){return this.a.w=this.b},
$S:0}
A.iD.prototype={
$1(a){var s=this.a
t.M.a(new A.iw(s,a)).$0()
s.n()
return null},
$S:14}
A.iw.prototype={
$0(){return this.a.y=this.b},
$S:0}
A.ej.prototype={
B(a){var s=null,r=t.p
return new A.V("/docs/widgets/layout",A.n(A.a([A.n(A.a([A.i(s,B.i5,s,s,new A.h(B.k.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.f1,B.o,B.hR],r),B.a,B.d,B.b),B.i,new A.L("Row, Column & Expanded","Flex-based layout distributing children proportionally across the main axis.",A.i(s,A.I(A.a([new A.ab(A.i(s,B.dl,s,s,new A.h(B.k.A(0.2),B.y,s,A.v(B.k,1),s,s),s,s,s,B.ai,s),1,s),B.U,new A.ab(A.i(s,B.dp,s,s,new A.h(B.f.A(0.2),B.y,s,A.v(B.f,1),s,s),s,s,s,B.ai,s),2,s)],r),B.a,B.d,B.b),s,s,B.af,s,s,s,B.ab,380),"Row(\n  children: [\n    Expanded(\n      flex: 1,\n      child: Container(child: Center(child: Text('flex: 1'))),\n    ),\n    const SizedBox(width: 12),\n    Expanded(\n      flex: 2,\n      child: Container(child: Center(child: Text('flex: 2'))),\n    ),\n  ],\n)",s),B.i,new A.L("Stack & Positioned","Overlay widgets on top of each other with precise coordinate offsets.",A.i(s,B.eM,s,s,new A.h(B.z,B.F,s,A.v(B.l,1),s,s),180,s,s,s,280),"Stack(\n  children: [\n    Positioned(\n      top: 16,\n      left: 16,\n      child: Container(child: Text('Top-Left Badge')),\n    ),\n    Center(child: Text('Stack Base Layer')),\n    Positioned(\n      bottom: 16,\n      right: 16,\n      child: Container(child: Text('Bottom-Right')),\n    ),\n  ],\n)",s),B.i,this.c7()],r),B.a,B.d,B.b),s)},
c7(){var s,r,q,p,o=null,n=A.a([],t.p)
for(s=["Dart","Virtual DOM","Flutter API","Full-Stack","Pure Dart","Zero CanvasKit","Web 60 FPS"],r=s.length,q=0;q<r;++q){p=new A.b7(1,B.l)
n.push(new A.P(A.u(s[q],B.kY,o),o,o,o,o,B.dc,o,new A.h(B.r,B.y,o,new A.aS(p,p,p,p),o,o),o,o,o))}return new A.L("Wrap (Flow Layout)","Automatically flows children to the next line when horizontal bounds are reached.",A.i(o,A.aX(B.d,n,B.R,8,8),o,o,B.af,o,o,o,B.ab,320),"Wrap(\n  spacing: 8,\n  runSpacing: 8,\n  children: [\n    Chip(label: Text('Dart')),\n    Chip(label: Text('Virtual DOM')),\n    Chip(label: Text('Flutter API')),\n    Chip(label: Text('Pure Dart')),\n  ],\n)",o)}}
A.bO.prototype={
O(){return new A.d7(A.l(t.n,t.O))}}
A.d7.prototype={
cN(){t.M.a(new A.iK(this)).$0()
this.n()
A.kz(B.cY,new A.iL(this),t.P)},
B(a){var s=null,r=t.p,q=A.n(A.a([A.i(s,B.fR,s,s,new A.h(B.a4.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.hW,B.o,B.fw],r),B.a,B.d,B.b),p=A.a([new A.e8(A.i(s,B.ey,s,s,new A.h(B.z,B.y,s,A.v(B.l,1),s,s),s,s,s,B.aa,s),"This is a Flart hover tooltip!",s),B.J,A.ap(B.eY,this.gcM())],r)
if(this.f)B.e.H(p,A.a([B.D,B.dZ],r))
return new A.V("/docs/widgets/media",A.n(A.a([q,B.i,B.j9,B.i,new A.L("Tooltip & Feedback Toast","Contextual hover tooltips and interactive toast feedback triggers.",A.n(p,B.a,B.d,B.b),"Tooltip(\n  message: 'This is a Flart hover tooltip!',\n  child: Text('Hover over me'),\n)",s),B.i,B.j4],r),B.a,B.d,B.b),s)}}
A.iK.prototype={
$0(){return this.a.f=!0},
$S:0}
A.iL.prototype={
$0(){var s=this.a
if(s.d){t.M.a(new A.iJ(s)).$0()
s.n()}},
$S:3}
A.iJ.prototype={
$0(){return this.a.f=!1},
$S:0}
A.ez.prototype={
B(a){var s=null,r=t.p
return new A.V("/docs/widgets/scrollables",A.n(A.a([A.n(A.a([A.i(s,B.i_,s,s,new A.h(B.G.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.h3,B.o,B.ho],r),B.a,B.d,B.b),B.i,this.c2(),B.i,this.bY()],r),B.a,B.d,B.b),s)},
c2(){var s=null
return new A.L("ListView.builder","Scrollable list of items generated dynamically via an itemBuilder callback.",A.i(s,new A.e_(B.a8,s,!1,!1,15,new A.h1(),B.jd,s,s,s),s,s,new A.h(B.z,B.a0,s,A.v(B.l,1),s,s),220,s,s,s,320),"ListView.builder(\n  itemCount: 15,\n  itemBuilder: (context, index) {\n    return ListTile(\n      leading: CircleAvatar(child: Text('${index + 1}')),\n      title: Text('Data Item #${index + 1}'),\n    );\n  },\n)",s)},
bY(){var s,r,q=null,p=A.v(B.l,1),o=t.p,n=A.a([],o)
for(s=1;s<=6;++s){r=new A.b7(1,B.l)
n.push(new A.P(new A.ad(new A.R(A.a([B.iS,B.bk,A.u("Cell "+s,B.bw,q)],o),B.N,B.a,B.b,q),q),q,q,q,q,q,q,new A.h(B.r,B.ae,q,new A.aS(r,r,r,r),q,q),q,q,q))}return new A.L("GridView.count","Responsive multi-column grid with crossAxisCount and aspect ratio control.",A.i(q,new A.dV(3,10,10,n,q),q,q,new A.h(B.z,B.a0,q,p,q,q),220,q,q,B.ai,360),"GridView.count(\n  crossAxisCount: 3,\n  crossAxisSpacing: 10,\n  mainAxisSpacing: 10,\n  children: [\n    for (int i = 1; i <= 6; i++)\n      Card(child: Center(child: Text('Cell $i'))),\n  ],\n)",q)}}
A.h1.prototype={
$2(a,b){var s=null,r=B.k.A(0.2),q=""+(b+1)
return A.i(s,A.I(A.a([A.i(s,A.cn(A.u(q,B.kU,s)),s,s,new A.h(r,s,s,s,s,B.a1),28,s,s,s,28),B.U,A.u("Data Item #"+q,B.ap,s)],t.p),B.a,B.d,B.b),s,s,B.ag,s,s,s,B.aj,s)},
$S:26}
A.c3.prototype={
O(){return new A.f7(A.l(t.n,t.O))}}
A.f7.prototype={
B(a){var s=null,r=t.p
return new A.V("/docs/widgets/utility",A.n(A.a([A.n(A.a([A.i(s,B.i0,s,s,new A.h(B.G.A(0.15),B.m,s,s,s,s),s,s,s,B.t,s),B.h,B.hZ,B.o,B.eS],r),B.a,B.d,B.b),B.i,this.c3(),B.i,B.j6,B.i,this.c6()],r),B.a,B.d,B.b),s)},
c3(){var s,r=this,q=null,p=t.p,o=A.a([A.ap(B.hv,new A.jg(r))],p)
if(r.f){s=A.v(B.l,1.5)
B.e.H(o,A.a([B.J,A.i(q,A.n(A.a([B.fu,B.ax,B.hK,B.J,A.I(A.a([A.ky(B.fh,new A.jh(r)),B.H,A.ap(B.fj,new A.ji(r))],p),B.a,B.ke,B.b)],p),B.a,B.d,B.b),q,q,new A.h(B.r,B.F,B.jx,s,q,q),q,q,q,B.I,320)],p))}return new A.L("AlertDialog & Dialog Overlays","Modal confirmation dialog rendered into Flart's top-level overlay layer.",A.n(o,B.a,B.d,B.b),"AlertDialog(\n  title: const Text('Confirm Action'),\n  content: const Text('Are you sure you want to proceed?'),\n  actions: [\n    TextButton(onPressed: () => Navigator.pop(), child: const Text('Cancel')),\n    ElevatedButton(onPressed: () => doAction(), child: const Text('Confirm')),\n  ],\n)",q)},
c6(){var s=null,r=this.r,q=A.i(s,B.ff,s,s,new A.h(B.f.A(0.2),B.y,s,A.v(B.f,1),s,s),s,s,s,B.b8,s)
return new A.L("Visibility & Opacity","Conditionally mount/unmount or visually dim elements without DOM removal.",A.n(A.a([new A.e9(q,r,s),B.D,A.ap(A.u(this.r?"Hide Element":"Show Element",s,s),new A.jk(this))],t.p),B.a,B.d,B.b),"Visibility(\n  visible: _isVisible,\n  child: Container(child: Text('Visible Element')),\n)",s)}}
A.jg.prototype={
$0(){var s=this.a
t.M.a(new A.jf(s)).$0()
s.n()
return null},
$S:0}
A.jf.prototype={
$0(){return this.a.f=!0},
$S:0}
A.jh.prototype={
$0(){var s=this.a
t.M.a(new A.je(s)).$0()
s.n()
return null},
$S:0}
A.je.prototype={
$0(){return this.a.f=!1},
$S:0}
A.ji.prototype={
$0(){var s=this.a
t.M.a(new A.jd(s)).$0()
s.n()
return null},
$S:0}
A.jd.prototype={
$0(){return this.a.f=!1},
$S:0}
A.jk.prototype={
$0(){var s=this.a
t.M.a(new A.jj(s)).$0()
s.n()
return null},
$S:0}
A.jj.prototype={
$0(){var s=this.a
return s.r=!s.r},
$S:0}
A.cj.prototype={}
A.eZ.prototype={}
A.ci.prototype={}
A.bk.prototype={
sb_(a){if(this.b===a)return
this.b=a
this.da()}}
A.q.prototype={
Y(){var s,r,q,p=this,o=new A.aa(""),n=p.a,m="<"+n
o.a=m
s=p.b
if(s!=null)o.a=m+(' id="'+s+'"')
m=p.d
if(m!=null)for(m=m.gag(),m=m.gD(m);m.t();){s=m.gu()
r=s.a
if(r!=="id"&&r!=="style")o.a+=" "+r+'="'+s.b+'"'}m=p.e
if(m!=null&&m.a!==0){s=A.H(m).i("ag<1,2>")
s=' style="'+A.kI(new A.ag(m,s),s.i("f(m.E)").a(new A.fG()),s.i("m.E"),t.N).T(0," ")+'"'
o.a+=s}m=p.f
s=m==null||m.length===0
r=o.a
if(s)n=o.a=r+("></"+n+">")
else{s=o.a=r+">"
for(r=m.length,q=0;q<m.length;m.length===r||(0,A.aH)(m),++q){s+=m[q].Y()
o.a=s}n=o.a=s+("</"+n+">")}return n.charCodeAt(0)==0?n:n},
$iaf:1}
A.fG.prototype={
$1(a){t.q.a(a)
return a.a+": "+a.b+";"},
$S:13}
A.aF.prototype={
Y(){var s=A.kd(this.a,"<","&lt;")
return A.kd(s,">","&gt;")},
$iaf:1}
A.aL.prototype={
Y(){return this.a},
$iaf:1}
A.hj.prototype={
$1(a){t.q.a(a)
return a.a+": "+a.b+";"},
$S:13}
A.hh.prototype={
$2(a,b){A.w(a)
t.g.a(b)
if(!this.a.K(a)){this.b.removeEventListener(a,b)
B.e.p(this.c,a)}},
$S:27}
A.hi.prototype={
$2(a,b){var s,r
A.w(a)
t.v.a(b)
s=this.a
if(s.K(a))this.b.removeEventListener(a,s.q(0,a))
r=A.k2(new A.hg(b))
this.b.addEventListener(a,r)
s.h(0,a,r)},
$S:28}
A.hg.prototype={
$1(a){this.a.$1(A.d(a))},
$S:6}
A.hf.prototype={
$0(){return this.a},
$S:30}
A.dz.prototype={
I(){return"Axis."+this.b}}
A.be.prototype={
I(){return"MainAxisAlignment."+this.b}}
A.ch.prototype={
I(){return"CrossAxisAlignment."+this.b}}
A.ek.prototype={
I(){return"MainAxisSize."+this.b}}
A.h2.prototype={
I(){return"StackFit."+this.b}}
A.eL.prototype={
I(){return"WrapCrossAlignment."+this.b}}
A.fe.prototype={
I(){return"BoxFit."+this.b}}
A.eE.prototype={
I(){return"TextAlign."+this.b}}
A.h3.prototype={
I(){return"TextInputType."+this.b}}
A.h4.prototype={
I(){return"TextTag."+this.b}}
A.fg.prototype={
da(){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aH)(s),++q)s[q].$0()}}
A.bQ.prototype={
k(a){return"Offset(0, "+this.b+")"}}
A.js.prototype={
$1(a){return A.w(a).length!==0},
$S:11}
A.by.prototype={
E(){var s=t.N
return A.C(["display","flex","justify-content",this.a,"align-items",this.b],s,s)}}
A.aS.prototype={}
A.b7.prototype={
S(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=b instanceof A.b7&&A.aw(r)===A.aw(b)&&r.a===b.a&&r.b.gm()===b.b.gm()
else s=!0
return s},
gF(a){return B.X.gF(this.a)^B.c.gF(this.b.gm())}}
A.fc.prototype={}
A.W.prototype={
E(){var s,r=this,q=r.a,p=r.b
if(q===p){s=r.d
s=p===s&&s===r.c}else s=!1
if(s)return""+q+"px"
return""+q+"px "+p+"px "+r.d+"px "+r.c+"px"}}
A.h.prototype={
E(){var s,r,q,p,o,n,m=this,l=t.N,k=A.l(l,l),j=m.a
if(j!=null)k.h(0,"background-color",j.gm())
if(m.r===B.a1)k.h(0,"border-radius","50%")
else{j=m.b
if(j!=null)k.H(0,A.C(["border-radius",""+j.a+"px "+j.b+"px "+j.d+"px "+j.c+"px"],l,l))}j=m.c
if(j!=null){s=A.an(j)
k.h(0,"box-shadow",new A.a6(j,s.i("f(1)").a(new A.fd()),s.i("a6<1,f>")).T(0,", "))}j=m.d
if(j!=null){r=A.l(l,l)
l=j.a
s=l!=null
q=!1
if(s){p=j.b
if(p!=null){o=j.c
if(o!=null){n=j.d
p=n!=null&&l.S(0,p)&&p.S(0,o)&&o.S(0,n)}else p=q
q=p}}if(q)r.h(0,"border",A.p(l.a)+"px solid "+l.b.gm())
else{if(s)r.h(0,"border-top",A.p(l.a)+"px solid "+l.b.gm())
l=j.b
if(l!=null)r.h(0,"border-right",A.p(l.a)+"px solid "+l.b.gm())
l=j.c
if(l!=null)r.h(0,"border-bottom",A.p(l.a)+"px solid "+l.b.gm())
l=j.d
if(l!=null)r.h(0,"border-left",A.p(l.a)+"px solid "+l.b.gm())}k.H(0,r)}l=m.f
if(l!=null)k.h(0,"background-image",l.E())
return k}}
A.fd.prototype={
$1(a){var s,r,q,p
t.gy.a(a)
s=a.c
r=s==null
q=r?null:0
if(q==null)q=0
p=r?null:s.b
if(p==null)p=0
return""+q+"px "+p+"px "+a.d+"px "+a.e.gm()},
$S:31}
A.fI.prototype={
E(){return"linear-gradient(to bottom right, "+new A.a6(B.jg,t.bg.a(new A.fJ()),t.ai).T(0,", ")+")"}}
A.fJ.prototype={
$1(a){return t.eu.a(a).gm()},
$S:32}
A.aj.prototype={}
A.F.prototype={
gm(){var s=this.b
if(s!=null)return A.mB(s)
return this.a},
ck(){var s,r,q,p,o,n,m=this.gm()
if(!B.c.C(m,"#")||m.length<7)return A.C(["r",0,"g",0,"b",0],t.N,t.S)
s=B.c.bA(m,"#","")
try{r=A.bu(J.jH(s,0,2),16)
q=A.bu(J.jH(s,2,4),16)
p=A.bu(J.jH(s,4,6),16)
o=A.C(["r",r,"g",q,"b",p],t.N,t.S)
return o}catch(n){o=A.C(["r",0,"g",0,"b",0],t.N,t.S)
return o}},
bE(a){var s
if(B.c.C(this.gm(),"#")){s=this.ck()
return new A.F("rgba("+A.p(s.q(0,"r"))+", "+A.p(s.q(0,"g"))+", "+A.p(s.q(0,"b"))+", "+A.p(a)+")",null)}return this},
A(a){var s=this.bE(a)
return s},
S(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.F&&A.aw(this)===A.aw(b)&&this.gm()===b.gm()
else s=!0
return s},
gF(a){return B.c.gF(this.gm())},
k(a){return this.gm()}}
A.cu.prototype={}
A.x.prototype={}
A.t.prototype={
E(){var s=this
return A.p(s.a)+"px "+s.b+"px "+A.p(s.c)+"px "+s.d+"px"}}
A.h0.prototype={
I(){return"RouteTransition."+this.b}}
A.fZ.prototype={
$2(a,b){return new A.a0(A.w(a),new A.fY(t.l.a(b)),t.ag)},
$S:33}
A.fY.prototype={
$1(a){t.f.a(a)
return this.a},
$S:34}
A.fX.prototype={
$1(a){A.d(a)
if($.a4.length>1){$.a4.pop()
$.bg=B.w
A.dt()
$.bg=B.w}},
$S:6}
A.eT.prototype={
U(a){return"<div>No route defined</div>"}}
A.cg.prototype={
I(){return"Clip."+this.b}}
A.ff.prototype={
I(){return"BoxShape."+this.b}}
A.aY.prototype={
k(a){return this.a}}
A.o.prototype={
E(){var s=this,r=t.N,q=A.l(r,r)
q.h(0,"color",s.a.gm())
r=s.c
if(r!=null)q.h(0,"font-size",A.p(r)+"px")
r=s.d
if(r!=null)q.h(0,"font-weight",r.a)
r=s.f
if(r!=null)q.h(0,"font-family",r)
r=s.r
if(r!=null)q.h(0,"letter-spacing",A.p(r)+"px")
r=s.x
if(r!=null)q.h(0,"line-height",B.X.k(r))
return q}}
A.h5.prototype={}
A.bl.prototype={}
A.dN.prototype={
j(a){var s,r,q,p,o,n=this,m=null
A.nX()
s=n.r
if(s==null)s=1
r=n.e
if(r==null)r=0
q=n.f
if(q==null)q=0
p=t.N
o=A.C(["--flart-anim-opacity","0","--flart-anim-x",""+r+"px","--flart-anim-y",""+q+"px","--flart-anim-scale",B.X.k(s),"animation","flart-entrance-anim 600ms ease-out 0ms both","will-change","opacity, transform"],p,p)
return new A.q("div",m,m,m,o,A.a([n.b.j(a)],t.y),m)},
U(a){return this.j(a).Y()}}
A.dO.prototype={
j(a){var s,r,q=this,p=null,o=A.kq(q.y),n=""+(q.z.a/1000|0),m=t.N,l=A.C(["box-sizing","border-box","transition","width "+n+"ms "+o+", height "+n+"ms "+o+", background-color "+n+"ms "+o+", border "+n+"ms "+o+", border-radius "+n+"ms "+o+", box-shadow "+n+"ms "+o+", padding "+n+"ms "+o+", margin "+n+"ms "+o+", transform "+n+"ms "+o],m,m)
l.h(0,"width",""+q.c+"px")
l.h(0,"height",""+q.d+"px")
n=q.f
s=n.a
if(s==null)s=p
if(s!=null)l.h(0,"background-color",s.gm())
l.H(0,n.E())
r=A.l(m,t.v)
n=r.a!==0?r:p
m=A.a([q.b.j(a)],t.y)
return new A.q("div",p,p,p,l,m,n)},
U(a){return this.j(a).Y()}}
A.dv.prototype={
j(a){var s=null,r=t.N,q=A.C(["opacity",B.X.k(B.q.a2(this.c,0,1)),"transition","opacity "+(this.d.a/1000|0)+"ms "+A.kq(B.aX)],r,r),p=A.l(r,t.v)
r=p.a!==0?p:s
return new A.q("div",s,s,s,q,A.a([this.b.j(a)],t.y),r)},
U(a){return this.j(a).Y()}}
A.dM.prototype={
j(a){var s=null,r=this.c.E(),q=t.N
q=A.l(q,q)
q.h(0,"box-sizing","border-box")
q.h(0,"display","flex")
q.H(0,r)
q.h(0,"width","100%")
q.h(0,"height","100%")
return new A.q("div",s,s,s,q,A.a([this.b.j(a)],t.y),s)}}
A.ad.prototype={
j(a){var s=null,r=t.N
r=A.l(r,r)
r.h(0,"box-sizing","border-box")
r.h(0,"display","flex")
r.h(0,"align-items","center")
r.h(0,"justify-content","center")
r.h(0,"width","100%")
r.h(0,"height","100%")
return new A.q("div",s,s,s,r,A.a([this.b.j(a)],t.y),s)}}
A.R.prototype={
j(a){var s,r,q,p=this,o=null,n=t.N
n=A.l(n,n)
n.h(0,"box-sizing","border-box")
n.h(0,"display","flex")
n.h(0,"flex-direction","column")
n.h(0,"justify-content",p.ct(p.c))
n.h(0,"align-items",p.cs(p.d))
if(p.e===B.O)n.h(0,"height","fit-content")
s=p.b
r=A.an(s)
q=r.i("a6<1,af>")
s=A.bL(new A.a6(s,r.i("af(1)").a(new A.fp(a)),q),q.i("al.E"))
return new A.q("div",o,o,o,n,s,o)},
ct(a){switch(a.a){case 1:return"center"
case 2:return"flex-end"
case 3:return"space-between"
case 4:return"space-around"
case 5:return"space-evenly"
case 0:return"flex-start"}},
cs(a){switch(a.a){case 1:return"center"
case 2:return"flex-end"
case 3:return"stretch"
case 4:return"baseline"
case 0:return"flex-start"}}}
A.fp.prototype={
$1(a){return t.l.a(a).j(this.a)},
$S:4}
A.fU.prototype={
I(){return"ListViewType."+this.b}}
A.e_.prototype={
j(a){var s,r,q,p,o,n,m=this,l=null,k=m.b===B.a8
if(k)s="column"
else s="row"
r=t.N
q=A.l(r,r)
q.h(0,"box-sizing","border-box")
q.h(0,"display","flex")
q.h(0,"flex-direction",s)
p=k?"auto":"hidden"
q.H(0,A.C(["height","100%","overflow-y",p,"overflow-x",k?"hidden":"auto"],r,r))
o=A.a([],t.y)
switch(m.y.a){case 0:break
case 1:for(r=m.r,p=m.w,n=0;n<r;++n)B.e.p(o,p.$2(a,n).j(a))
break
case 2:break}return new A.q("div",l,l,l,q,o,l)}}
A.bG.prototype={
j(a){var s,r=this,q=null,p=t.N
p=A.l(p,p)
p.h(0,"box-sizing","border-box")
p.h(0,"position","absolute")
s=r.c
if(s!=null)p.h(0,"top",A.p(s)+"px")
s=r.d
if(s!=null)p.h(0,"left",A.p(s)+"px")
s=r.e
if(s!=null)p.h(0,"right",A.p(s)+"px")
s=r.f
if(s!=null)p.h(0,"bottom",A.p(s)+"px")
return new A.q("div",q,q,q,p,A.a([r.b.j(a)],t.y),q)}}
A.Z.prototype={
j(a){var s,r,q,p=this,o=null,n=t.N
n=A.l(n,n)
n.h(0,"box-sizing","border-box")
n.h(0,"display","flex")
n.h(0,"flex-direction","row")
n.h(0,"justify-content",p.cE(p.c))
n.h(0,"align-items",p.cD(p.d))
n.h(0,"width",p.e===B.O?"fit-content":"100%")
n.h(0,"overflow-wrap","break-word")
s=p.b
r=A.an(s)
q=r.i("a6<1,af>")
s=A.bL(new A.a6(s,r.i("af(1)").a(new A.fy(a)),q),q.i("al.E"))
return new A.q("div",o,o,o,n,s,o)},
cE(a){switch(a.a){case 1:return"center"
case 2:return"flex-end"
case 3:return"space-between"
case 4:return"space-around"
case 5:return"space-evenly"
case 0:return"flex-start"}},
cD(a){switch(a.a){case 1:return"center"
case 2:return"flex-end"
case 3:return"stretch"
case 4:return"baseline"
case 0:return"flex-start"}}}
A.fy.prototype={
$1(a){return t.l.a(a).j(this.a)},
$S:4}
A.cr.prototype={
j(a){var s,r,q=null,p=t.N,o=A.l(p,p)
o.h(0,"box-sizing","border-box")
o.h(0,"position","relative")
o.H(0,A.C(["width","100%"],p,p))
if(this.e!==B.aY)o.h(0,"overflow","hidden")
p=this.b
s=A.an(p)
r=s.i("a6<1,af>")
p=A.bL(new A.a6(p,s.i("af(1)").a(new A.fC(a)),r),r.i("al.E"))
return new A.q("div",q,q,q,o,p,q)}}
A.fC.prototype={
$1(a){return t.l.a(a).j(this.a)},
$S:4}
A.ct.prototype={
j(a){var s,r,q,p=this,o=p.cq(p.d),n=p.cr(p.e),m=t.N,l=A.l(m,m)
l.h(0,"box-sizing","border-box")
l.h(0,"display","flex")
l.h(0,"flex-wrap","wrap")
l.h(0,"flex-direction","row")
l.h(0,"justify-content",o)
l.h(0,"align-items",n)
l.h(0,"gap",""+p.r+"px "+p.f+"px")
m=A.C(["class","flart-wrap"],m,m)
s=p.b
r=A.an(s)
q=r.i("a6<1,af>")
s=A.bL(new A.a6(s,r.i("af(1)").a(new A.fF(a)),q),q.i("al.E"))
return new A.q("div",null,null,m,l,s,null)},
cq(a){switch(a.a){case 0:return"flex-start"
case 2:return"flex-end"
case 1:return"center"
case 3:return"space-between"
case 4:return"space-around"
case 5:return"space-evenly"}},
cr(a){switch(a.a){case 0:return"flex-start"
case 1:return"flex-end"
case 2:return"center"}}}
A.fF.prototype={
$1(a){return t.l.a(a).j(this.a)},
$S:4}
A.dT.prototype={
j(a){var s,r,q,p,o,n,m,l="none",k=A.am(a),j=this.c==null,i=!j
if(i)s=k.a.gm()
else s="#e2e8f0"
if(i)r="#ffffff"
else r="#94a3b8"
q=i?2:0
if(q>0)p="0 "+q+"px "+q*2+"px rgba(0,0,0,0.18)"
else p=l
o=t.N
n=A.l(o,o)
n.h(0,"display","inline-flex")
n.h(0,"align-items","center")
n.h(0,"justify-content","center")
n.h(0,"box-sizing","border-box")
n.h(0,"padding",B.aa.E())
n.h(0,"font-size","14px")
n.h(0,"font-weight","500")
n.h(0,"font-family","inherit")
n.h(0,"background-color",s)
n.h(0,"color",r)
n.h(0,"border",l)
n.h(0,"border-radius",new A.W(6,6,6,6).E())
n.h(0,"box-shadow",p)
n.h(0,"cursor",i?"pointer":"not-allowed")
n.h(0,"outline",l)
n.h(0,"user-select",l)
n.h(0,"transition","all 0.2s cubic-bezier(0.4, 0, 0.2, 1)")
if(j)n.h(0,"opacity","0.7")
m=A.l(o,t.T)
if(i)m.h(0,"click",new A.fr(this))
o=A.l(o,o)
o.h(0,"type","button")
if(j)o.h(0,"disabled","")
j=m.a!==0?m:null
return new A.q("button",null,null,o,n,A.a([this.b.j(a)],t.y),j)}}
A.fr.prototype={
$1(a){return this.a.c.$0()},
$S:2}
A.fL.prototype={
I(){return"HitTestBehavior."+this.b}}
A.dU.prototype={
j(a){var s,r=t.N,q=A.l(r,t.T)
q.h(0,"click",new A.fs(this))
r=A.l(r,r)
r.h(0,"box-sizing","border-box")
r.h(0,"outline","none")
r.h(0,"display","inline-block")
r.h(0,"pointer-events","auto")
r.h(0,"cursor","pointer")
s=q.a!==0?q:null
return new A.q("div",null,null,B.kg,r,A.a([this.b.j(a)],t.y),s)}}
A.fs.prototype={
$1(a){return this.a.c.$0()},
$S:2}
A.dX.prototype={
j(a){var s,r,q="none",p=A.am(a),o=p.a,n=t.N,m=A.l(n,n)
m.h(0,"display","inline-flex")
m.h(0,"align-items","center")
m.h(0,"justify-content","center")
m.h(0,"box-sizing","border-box")
m.h(0,"padding",B.aw.E())
m.h(0,"width","40px")
m.h(0,"height","40px")
m.h(0,"font-size","24px")
m.h(0,"border",q)
m.h(0,"background-color","transparent")
m.h(0,"color",o.gm())
m.h(0,"border-radius","50%")
m.h(0,"cursor","pointer")
m.h(0,"outline",q)
m.h(0,"user-select",q)
m.h(0,"transition","all 0.15s ease-in-out")
s=A.l(n,n)
s.h(0,"type","button")
s.h(0,"class","flart-icon-button")
r=A.l(n,t.T)
r.h(0,"click",new A.fu(this))
n=r.a!==0?r:null
return new A.q("button",null,null,s,m,A.a([this.b.j(a)],t.y),n)}}
A.fu.prototype={
$1(a){return this.a.c.$0()},
$S:2}
A.e1.prototype={
j(a){var s,r,q,p=A.am(a).a,o=p.gm(),n=p.gm(),m="1px solid "+n
n=t.N
s=A.l(n,n)
s.h(0,"display","inline-flex")
s.h(0,"align-items","center")
s.h(0,"justify-content","center")
s.h(0,"box-sizing","border-box")
s.h(0,"padding",B.aa.E())
s.h(0,"font-size","14px")
s.h(0,"font-weight","500")
s.h(0,"font-family","inherit")
s.h(0,"background-color","transparent")
s.h(0,"color",o)
s.h(0,"border",m)
s.h(0,"border-radius",new A.W(6,6,6,6).E())
s.h(0,"cursor","pointer")
s.h(0,"outline","none")
s.h(0,"user-select","none")
s.h(0,"transition","all 0.2s cubic-bezier(0.4, 0, 0.2, 1)")
r=A.l(n,t.T)
r.h(0,"click",new A.fw(this))
n=A.l(n,n)
n.h(0,"type","button")
n.h(0,"class","flart-outlined-button")
q=r.a!==0?r:null
return new A.q("button",null,null,n,s,A.a([this.b.j(a)],t.y),q)}}
A.fw.prototype={
$1(a){return this.a.c.$0()},
$S:2}
A.e6.prototype={
j(a){var s,r,q="none",p=A.am(a),o=p.a.gm(),n=t.N,m=A.l(n,n)
m.h(0,"display","inline-flex")
m.h(0,"align-items","center")
m.h(0,"justify-content","center")
m.h(0,"box-sizing","border-box")
m.h(0,"padding",B.ak.E())
m.h(0,"font-size","14px")
m.h(0,"font-weight","500")
m.h(0,"font-family","inherit")
m.h(0,"background-color","transparent")
m.h(0,"color",o)
m.h(0,"border",q)
m.h(0,"border-radius",new A.W(6,6,6,6).E())
m.h(0,"cursor","pointer")
m.h(0,"outline",q)
m.h(0,"user-select",q)
m.h(0,"transition","all 0.2s cubic-bezier(0.4, 0, 0.2, 1)")
s=A.a([],t.y)
B.e.p(s,this.b.j(a))
r=A.l(n,t.T)
r.h(0,"click",new A.fE(this))
n=A.l(n,n)
n.h(0,"type","button")
n.h(0,"class","flart-text-button")
return new A.q("button",null,null,n,m,s,r.a!==0?r:null)}}
A.fE.prototype={
$1(a){return this.a.d.$0()},
$S:2}
A.fO.prototype={
$0(){return A.jP(t.k)},
$S:37}
A.bJ.prototype={
j(a){var s,r=this
$.kC.h(0,A.aw(r),r)
s=A.cH(a.c,t.n,t.l)
s.h(0,A.aw(r),r)
return r.b.j(a.bo(s,r))},
U(a){var s,r=this
$.kC.h(0,A.aw(r),r)
s=A.cH(a.c,t.n,t.l)
s.h(0,A.aw(r),r)
return r.b.U(a.bo(s,r))}}
A.cp.prototype={
j(a){var s,r,q,p,o,n,m,l,k=null,j=A.am(a),i=t.N,h=A.l(i,i)
h.h(0,"padding","8px 12px")
h.h(0,"border","1px solid "+j.e.k(0))
h.h(0,"border-radius","4px")
s=j.c.gm()
h.h(0,"background-color",s)
s=j.d.a.gm()
h.h(0,"color",s)
h.h(0,"cursor","pointer")
h.h(0,"font-size","14px")
h.h(0,"font-family","inherit")
h.h(0,"outline","none")
h.h(0,"box-sizing","border-box")
s=t.y
r=A.a([],s)
for(q=this.c,p=this.b,o=0;o<3;++o){n=q[o]
m=A.l(i,i)
m.h(0,"value",""+o)
if(n.b===p)m.h(0,"selected","true")
B.e.p(r,new A.q("option",k,k,m,k,A.a([n.c.j(a)],s),k))}l=A.l(i,t.v)
l.h(0,"change",new A.fq(this))
i=A.l(i,i)
i.h(0,"class","flart-dropdown-select")
return new A.q("select",k,k,i,h,r,l)}}
A.fq.prototype={
$1(a){var s,r,q,p=A.z(A.d(a).target)
if(p!=null){s=A.jR(A.w(p.value),null)
if(s!=null&&s>=0&&s<3){r=this.a
q=r.c
if(s>>>0!==s||s>=3)return A.e(q,s)
r.d.$1(q[s].b)}}},
$S:1}
A.aV.prototype={
j(a){return this.c.j(a)}}
A.e4.prototype={
j(a){var s,r,q,p=this,o=A.am(a),n=o.a.gm(),m=t.N,l=A.C(["width","100%","height","6px","border-radius","3px","outline","none","cursor","pointer","accent-color",n,"margin","8px 0","vertical-align","middle"],m,m),k=A.l(m,t.v)
k.h(0,"input",new A.fA(p))
k.h(0,"change",new A.fB(p))
m=A.l(m,m)
m.h(0,"type","range")
s=""+p.c
m.h(0,"min",s)
r=""+p.d
m.h(0,"max",r)
q=A.p(p.b)
m.h(0,"value",q)
m.h(0,"step","any")
m.h(0,"role","slider")
m.h(0,"aria-valuenow",q)
m.h(0,"aria-valuemin",s)
m.h(0,"aria-valuemax",r)
return new A.q("input",null,null,m,l,null,k)}}
A.fA.prototype={
$1(a){var s,r=A.z(A.d(a).target)
if(r!=null){s=A.kR(A.w(r.value))
if(s!=null)this.a.r.$1(s)}},
$S:1}
A.fB.prototype={
$1(a){var s=A.z(A.d(a).target)
if(s!=null)A.kR(A.w(s.value))},
$S:1}
A.dP.prototype={
j(a){var s,r="checkbox",q=A.am(a),p=q.a.gm(),o=this.b,n=t.N,m=A.C(["width","18px","height","18px","cursor","pointer","accent-color",p,"margin","0","vertical-align","middle","transition","accent-color 0.2s"],n,n),l=A.l(n,t.v)
l.h(0,"change",new A.fo(this,o))
n=A.l(n,n)
n.h(0,"type",r)
if(o)n.h(0,"checked","true")
n.h(0,"role",r)
s=o?"true":"false"
n.h(0,"aria-checked",s)
return new A.q("input",null,null,n,m,null,l)}}
A.fo.prototype={
$1(a){var s=A.z(A.d(a).target),r=s==null?null:A.k1(s.checked)
if(r==null)r=!this.b
this.a.c.$1(r)},
$S:1}
A.cq.prototype={
j(a){var s=A.am(a),r=s.a.gm(),q=this.b===this.c,p=t.N,o=A.C(["width","18px","height","18px","cursor","pointer","accent-color",r,"margin","0","vertical-align","middle","transition","accent-color 0.2s"],p,p),n=A.l(p,t.v)
n.h(0,"change",new A.fx(this))
p=A.l(p,p)
p.h(0,"type","radio")
if(q)p.h(0,"checked","true")
p.h(0,"role","radio")
p.h(0,"aria-checked",q?"true":"false")
return new A.q("input",null,null,p,o,null,n)}}
A.fx.prototype={
$1(a){var s
A.d(a)
s=this.a
s.d.$1(s.b)},
$S:1}
A.e5.prototype={
j(a){var s,r,q,p,o,n,m,l=null,k="background-color",j=A.am(a),i=j.a,h=i.gm(),g=i.bE(0.5).gm()
i=t.N
s=A.C(["display","inline-flex","align-items","center","cursor","pointer","opacity","1","user-select","none","vertical-align","middle"],i,i)
r=A.l(i,t.v)
r.h(0,"click",new A.fD(this))
q=this.b
p=A.C(["class","flart-switch","role","switch","aria-checked",q?"true":"false"],i,i)
o=A.C(["width","46px","height","24px",k,q?g:"#bdbdbd","border-radius","12px","position","relative","transition","background-color 0.25s ease"],i,i)
n=q?h:"#fafafa"
m=t.y
return new A.q("div",l,l,p,s,A.a([new A.q("div",l,l,l,o,A.a([new A.q("div",l,l,l,A.C(["width","20px","height","20px",k,n,"border-radius","50%","position","absolute","top","2px","left",q?"24px":"2px","transition","left 0.25s ease, background-color 0.25s ease","box-shadow","0 2px 4px rgba(0,0,0,0.25)"],i,i),l,l)],m),l)],m),r)}}
A.fD.prototype={
$1(a){var s
A.d(a)
s=this.a
s.c.$1(!s.b)},
$S:1}
A.e7.prototype={
B(a){var s,r=this,q=null,p=A.am(a),o=new A.W(4,4,4,4),n=p.e,m=A.v(n,1),l=new A.t(10,12,10,12)
n=t.p
s=A.a([],n)
n=A.a([new A.b9(r.c,r.ch,r.e,!1,r.go,q,r.w,q,B.kF,l,!1,q)],n)
s.push(A.i(q,A.kw(n,B.aZ),q,q,new A.h(p.c,o,q,m,q,q),q,q,q,q,q))
return A.n(s,B.a,B.d,B.b)}}
A.y.prototype={
ai(){},
aS(a){A.H(this).i("y.T").a(a)},
cT(a){var s,r,q,p,o,n
for(s=this.e,r=new A.ag(s,A.H(s).i("ag<1,2>")).gD(0),q=a.c;r.t();){p=r.d
o=p.a
n=q.q(0,o)
if(n instanceof A.bl&&n!==p.b)s.h(0,o,n)}},
a9(){this.d=!1
A.mF(this)},
n(){var s,r,q,p,o=this,n=o.c
if(n==null){A.dt()
return}s=A.z(A.d(v.G.document).getElementById(n))
if(s!=null){n=o.b
n===$&&A.a5("context")
r=o.c
q=A.cH(n.d,t.n,t.z)
q.h(0,A.aw(o),o)
p=n.aQ(o,r,new A.bW(),q)
A.jV(s,A.a([o.B(p).j(p)],t.y))}else A.dt()}}
A.U.prototype={
j(a){var s,r,q,p,o,n=this,m=A.ao(A.aw(n).a,null),l=A.kT("[<>]"),k=A.kd(m,l,"_"),j=a.e+"__"+k+"_"+a.f.a++
m=t.n
l=t.z
s=a.d
if($.f9.K(j)){r=$.f9.q(0,j)
q=r.a
q===$&&A.a5("widget")
r.a=A.H(r).i("y.T").a(n)
l=A.cH(s,m,l)
l.h(0,A.aw(r),r)
p=a.aQ(r,j,new A.bW(),l)
r.b=p
r.aS(q)
r.cT(p)}else{r=n.O()
r.a=A.H(r).i("y.T").a(n)
m=A.cH(s,m,l)
m.h(0,A.aw(r),r)
r.b=a.aQ(r,j,new A.bW(),m)
r.c=j
$.f9.h(0,j,r)
r.ai()}m=r.b
m===$&&A.a5("context")
o=r.B(m).j(m)
m=t.N
return new A.q("div",j,j,null,A.C(["display","contents"],m,m),A.a([o],t.y),null)},
U(a){return this.j(a).Y()}}
A.eA.prototype={
j(a){return this.B(a).j(a)},
U(a){return this.B(a).U(a)}}
A.ai.prototype={}
A.P.prototype={
j(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="100%",d="min-width",c="min-height",b=g.x
if(b==null){s=g.z
b=s!=null?new A.h(s,f,f,f,f,f):f}s=g.d
r=s==null
q=!r||g.e!=null
p=g.f
if(q){if(p==null)q=f
else{q=g.e
o=!r
n=p.a
m=o?B.q.a2(s,n,p.b):n
l=p.b
o=o?B.q.a2(s,n,l):l
n=q!=null
l=p.c
k=n?B.q.a2(q,l,p.d):l
j=p.d
q=new A.ai(m,o,k,n?B.q.a2(q,l,j):j)}if(q==null){q=g.e
o=r?0:s
if(r)s=1/0
r=q==null
n=r?0:q
s=new A.ai(o,s,n,r?1/0:q)
p=s}else p=q}s=t.N
r=A.l(s,s)
r.h(0,"box-sizing","border-box")
if(p!=null){i=A.l(s,s)
q=p.a
o=p.b
if(q===o)if(q===1/0)i.h(0,"width",e)
else i.h(0,"width",A.p(q)+"px")
else{if(q>0&&q!==1/0)i.h(0,d,A.p(q)+"px")
else if(q===1/0)i.h(0,d,e)
if(o!==1/0)i.h(0,"max-width",A.p(o)+"px")}q=p.c
o=p.d
if(q===o)if(q===1/0)i.h(0,"height",e)
else i.h(0,"height",A.p(q)+"px")
else{if(q>0&&q!==1/0)i.h(0,c,A.p(q)+"px")
else if(q===1/0)i.h(0,c,e)
if(o!==1/0)i.h(0,"max-height",A.p(o)+"px")}r.H(0,i)}q=g.r
if(q!=null)r.h(0,"padding",q.E())
q=g.w
if(q!=null)r.h(0,"margin",q.E())
q=b==null?f:b.E()
if(q!=null)r.H(0,q)
q=g.Q
q=q==null?f:q.E()
if(q!=null)r.H(0,q)
h=A.l(s,t.T)
s=g.c
if(s==null)s=f
q=h.a!==0?h:f
o=g.b
return new A.q("div",s,f,f,r,o!=null?A.a([o.j(a)],t.y):f,q)}}
A.bF.prototype={
j(a){var s,r=null,q=t.N
q=A.l(q,q)
q.h(0,"box-sizing","border-box")
q.h(0,"background-color",this.b.gm())
s=A.a([this.c.j(a)],t.y)
return new A.q("div",r,r,r,q,s,r)}}
A.dR.prototype={
j(a){var s,r=t.N,q=A.C(["class","flart-clip-rrect"],r,r)
r=A.l(r,r)
r.h(0,"box-sizing","border-box")
r.h(0,"border-radius",B.F.E())
r.h(0,"overflow","hidden")
r.h(0,"display","block")
r.h(0,"isolation","isolate")
s=A.a([B.e_.j(a)],t.y)
return new A.q("div",null,null,q,r,s,null)}}
A.dQ.prototype={
j(a){var s,r=t.N,q=A.C(["class","flart-clip-oval"],r,r)
r=A.l(r,r)
r.h(0,"box-sizing","border-box")
r.h(0,"border-radius","50%")
r.h(0,"overflow","hidden")
r.h(0,"display","block")
r.h(0,"isolation","isolate")
s=A.a([B.e6.j(a)],t.y)
return new A.q("div",null,null,q,r,s,null)}}
A.e9.prototype={
j(a){if(this.c)return this.b.j(a)
return B.eA.j(a)}}
A.co.prototype={
j(a){var s,r,q,p=null
A.am(a)
s=B.q.a2(0,0,1/0)
r=t.N
r=A.l(r,r)
r.h(0,"box-sizing","border-box")
r.h(0,"height","1px")
r.h(0,"width","auto")
q=this.f.gm()
r.h(0,"background-color",q)
r.h(0,"border","none")
r.h(0,"display","block")
r.h(0,"margin-left","0px")
r.h(0,"margin-right","0px")
s=A.p(s/2)+"px"
r.h(0,"margin-top",s)
r.h(0,"margin-bottom",s)
return new A.q("hr",p,p,p,r,p,p)}}
A.ab.prototype={
j(a){var s=null,r=""+this.c,q=t.N,p=A.C(["box-sizing","border-box","flex",r+" "+r+" 0px","min-width","0","min-height","0"],q,q)
return new A.q("div",s,s,s,p,A.a([this.b.j(a)],t.y),s)}}
A.fK.prototype={
I(){return"GridViewType."+this.b}}
A.dV.prototype={
j(a){var s,r,q,p,o,n=this,m=null,l="box-sizing",k="border-box",j=A.a([],t.p)
switch(0){case 0:case 1:j=n.r
break}s=t.N
r=A.l(s,s)
r.h(0,l,k)
r.h(0,"display","grid")
r.h(0,"grid-template-columns","repeat("+n.c+", 1fr)")
r.h(0,"gap",""+n.f+"px "+n.e+"px")
s=A.l(s,s)
s.h(0,l,k)
q=A.an(j)
p=q.i("a6<1,q>")
o=A.bL(new A.a6(j,q.i("q(1)").a(new A.ft(s,a)),p),p.i("al.E"))
return new A.q("div",m,m,m,r,o,m)}}
A.ft.prototype={
$1(a){var s,r=null
t.l.a(a)
s=this.a
s=s.a!==0?s:r
return new A.q("div",r,r,r,s,A.a([a.j(this.b)],t.y),r)},
$S:39}
A.dW.prototype={
j(a){var s,r=t.N,q=A.l(r,r)
q.h(0,"class","material-icons")
s=""+this.c+"px"
return new A.q("i",null,null,q,A.C(["box-sizing","border-box","font-size",s,"width",s,"height",s,"line-height",s,"color",this.d.gm(),"user-select","none","display","inline-flex","align-items","center","justify-content","center"],r,r),A.a([new A.aF(this.b)],t.y),null)}}
A.N.prototype={}
A.fM.prototype={
I(){return"ImageLoading."+this.b}}
A.dY.prototype={
j(a){var s=this,r=null,q=t.N,p=A.l(q,q)
p.h(0,"box-sizing","border-box")
p.h(0,"display","inline-block")
p.h(0,"width",""+s.c+"px")
p.h(0,"height",""+s.d+"px")
p.h(0,"object-fit",s.bQ(s.e))
return new A.q("img",r,r,A.C(["src",s.b,"alt",s.y,"loading","lazy"],q,q),p,r,r)},
bQ(a){var s="scale-down"
switch(a.a){case 0:return"fill"
case 1:return"contain"
case 2:return"cover"
case 3:return s
case 4:return s
case 5:return"none"
case 6:return s}}}
A.e0.prototype={
j(a){var s,r,q,p,o,n,m,l,k,j=this,i=$.a4.length
if(i===0)B.e.p($.a4,j.e)
else if(i<=1)B.e.h($.a4,0,j.e)
A.kN()
s=A.kY()
i=$.a4.length
if(i<=1)r=j.e
else if(i===0){i=j.e
r=i}else{i=A.kM()
r=i}i=v.G
A.d(i.document).title=j.b
j.cm()
j.cl()
j.cn()
q=s.y
p=A.z(A.d(i.document).body)
if(p!=null){A.d(p.classList).remove("flart-light")
A.d(p.classList).remove("flart-dark")
o=A.d(p.classList)
n=q?"flart-dark":"flart-light"
o.add(n)
A.d(p.style).setProperty("--primary-color",s.a.gm())
n=A.d(p.style)
o=s.b
n.setProperty("--background-color",o.gm())
n=A.d(p.style)
m=s.d.a
n.setProperty("--text-color",m.gm())
A.d(p.style).setProperty("--card-color",s.c.gm())
A.d(p.style).backgroundColor=o.gm()
A.d(p.style).color=m.gm()}o=A.z(A.d(i.document).head)
l=o==null?null:A.z(o.querySelector("#flart-global-styles"))
if(l==null){l=A.kB()
l.id="flart-global-styles"
i=A.z(A.d(i.document).head)
if(i!=null)i.append(l)}l.textContent="      *, *::before, *::after {\n        box-sizing: border-box;\n      }\n      body {\n        margin: 0;\n        padding: 0;\n      }\n      \n    "
k=new A.bl(s,r,null).j(a)
return k},
cl(){var s,r=v.G,q=A.z(A.d(r.document).head),p=q==null?null:A.z(q.querySelector("link[rel*='icon']"))
q=p==null
if(!q&&B.c.cY(A.w(p.href),"assets/flart_logo.png"))return
if(!q)p.remove()
s=A.kA()
s.type="image/x-icon"
s.rel="shortcut icon"
s.href="assets/flart_logo.png"
r=A.z(A.d(r.document).head)
if(r!=null)r.append(s)},
cm(){var s,r=v.G,q=A.z(A.d(r.document).head)
if((q==null?null:A.z(q.querySelector('link[href*="Material+Icons"]')))!=null)return
s=A.kA()
s.rel="stylesheet"
s.href="https://fonts.googleapis.com/icon?family=Material+Icons"
r=A.z(A.d(r.document).head)
if(r!=null)r.append(s)},
cn(){var s,r=v.G,q=A.z(A.d(r.document).head)
if((q==null?null:A.z(q.querySelector('meta[name="viewport"]')))!=null)return
s=A.d(A.d(r.document).createElement("meta"))
s.name="viewport"
s.content="width=device-width, initial-scale=1.0"
r=A.z(A.d(r.document).head)
if(r!=null)r.append(s)}}
A.ak.prototype={
j(a){var s=null,r=t.N,q=A.C(["padding",this.b.E(),"box-sizing","border-box"],r,r)
return new A.q("div",s,s,s,q,A.a([this.c.j(a)],t.y),s)}}
A.bE.prototype={
j(a){var s=A.am(a),r=this.d.gm(),q=s.e.gm(),p=t.N,o=A.l(p,p)
o.h(0,"width","40px")
o.h(0,"height","40px")
o.h(0,"border","4px solid "+q)
o.h(0,"border-top-color",r)
o.h(0,"border-radius","50%")
o.h(0,"display","inline-block")
o.h(0,"box-sizing","border-box")
o.h(0,"animation","flart-spin 1s linear infinite")
p=A.l(p,p)
p.h(0,"class","flart-circular-progress")
p.h(0,"role","progressbar")
return new A.q("div",null,null,p,o,A.a([new A.aL("      <style>\n        @keyframes flart-spin {\n          to { transform: rotate(360deg); }\n        }\n      </style>\n    ")],t.y),null)}}
A.dZ.prototype={
j(a){var s=null,r="background-color",q=A.am(a),p=B.f.gm(),o=q.e.gm(),n=t.N,m=A.l(n,n)
m.h(0,"width","100%")
m.h(0,"height","4px")
m.h(0,r,o)
m.h(0,"border-radius","2px")
m.h(0,"overflow","hidden")
m.h(0,"position","relative")
return new A.q("div",s,s,A.C(["class","flart-linear-progress indeterminate","role","progressbar"],n,n),m,A.a([new A.aL("        <style>\n          @keyframes flart-progress-slide {\n            0% { left: -30%; width: 30%; }\n            50% { width: 50%; }\n            100% { left: 100%; width: 30%; }\n          }\n        </style>\n      "),new A.q("div",s,s,A.C(["class","flart-progress-bar"],n,n),A.C(["position","absolute","height","100%",r,p,"animation","flart-progress-slide 1.5s ease-in-out infinite"],n,n),s,s)],t.y),s)}}
A.e3.prototype={
j(a){var s=this.c===B.a8,r=s?"hidden":"auto",q=s?"auto":"hidden",p=t.N,o=A.C(["box-sizing","border-box","overflow-x",r,"overflow-y",q,"display","block","width","100%","height","100%"],p,p)
return new A.q("div",null,null,A.C(["class","flart-scroll-view"],p,p),o,A.a([this.b.j(a)],t.y),null)}}
A.E.prototype={
j(a){var s,r=null,q=t.N,p=A.C(["box-sizing","border-box"],q,q)
q=this.b
if(q!=null)if(q===1/0)p.h(0,"width","100%")
else{q=A.p(q)+"px"
p.h(0,"width",q)
p.h(0,"min-width",q)}q=this.c
if(q!=null)if(q===1/0)p.h(0,"height","100%")
else{q=A.p(q)+"px"
p.h(0,"height",q)
p.h(0,"min-height",q)}q=this.d
s=q==null
if(s)p.h(0,"display","inline-block")
return new A.q("div",r,r,r,p,!s?A.a([q.j(a)],t.y):r,r)}}
A.e8.prototype={
j(a){var s,r,q,p,o=null,n=A.bj(this),m="tooltip_"+n
n=t.N
s=A.C(["class","flart-tooltip-text","role","tooltip"],n,n)
r=A.C(["box-sizing","border-box","background-color","rgba(97, 97, 97, 0.9)","color","white","font-size","12px","text-align","center","border-radius","4px","padding",B.aw.E()],n,n)
q=t.y
p=A.a([new A.aF(this.c)],q)
return new A.q("div",o,o,A.C(["class",m],n,n),o,A.a([new A.aL("      <style>\n        ."+m+" {\n          position: relative;\n          display: inline-block;\n        }\n        ."+m+" .flart-tooltip-text {\n          visibility: hidden;\n          opacity: 0;\n          position: absolute;\n          z-index: 1000;\n          bottom: 125%;\n          left: 50%;\n          transform: translateX(-50%);\n          white-space: nowrap;\n          transition: opacity 0.2s, visibility 0.2s;\n          pointer-events: none;\n        }\n        ."+m+":hover .flart-tooltip-text {\n          visibility: visible;\n          opacity: 1;\n        }\n      </style>\n    "),this.b.j(a),new A.q("div",o,o,s,r,p,o)],q),o)}}
A.b9.prototype={
O(){return new A.d1(A.l(t.n,t.O))}}
A.d1.prototype={
ai(){var s,r=this
r.b3()
r.f="editable_"+A.bj(r)+"_"+Date.now()
s=r.a
s===$&&A.a5("widget")
B.e.p(s.c.a,t.M.a(r.gaB()))},
aS(a){var s,r,q=this
t.dx.a(a)
q.bH(a)
s=q.a
s===$&&A.a5("widget")
r=a.c
if(s.c!==r){s=t.M.a(q.gaB())
B.e.M(r.a,s)
B.e.p(q.a.c.a,s)}},
a9(){var s=this.a
s===$&&A.a5("widget")
B.e.M(s.c.a,t.M.a(this.gaB()))
this.b2()},
cj(){t.M.a(new A.hW()).$0()
this.n()},
B(a){var s,r,q,p,o,n,m,l=this,k=A.am(a),j=l.a
j===$&&A.a5("widget")
s=l.cp(B.kG)
j=j.ax.E()
r=l.a.d
q=r.c
q=q!=null?A.p(q)+"px":"16px"
r=r.a.gm()
if(r==null)r=k.d.a.gm()
p=l.a
p=B.e.ga0(p.as.I().split("."))
o=l.a.d.f
if(o==null)o="inherit"
n=t.N
m=A.C(["box-sizing","border-box","padding",j,"font-size",q,"color",r,"border","none","border-radius","6px","outline","none","text-align",p,"width","100%","background","transparent","font-family",o,"resize","none"],n,n)
o=A.l(n,n)
p=l.f
p===$&&A.a5("_inputId")
o.h(0,"id",p)
o.h(0,"placeholder",l.a.e)
j=l.a
if(j.w)o.h(0,"autofocus","")
o.h(0,"type",s)
o.h(0,"value",l.a.c.b)
return A.mA(o,A.C(["input",new A.hX(l),"keydown",new A.hY(l)],n,t.v),m,"input",null)},
cp(a){switch(a.a){case 2:return"email"
case 1:case 3:return"number"
case 4:return"url"
default:return"text"}}}
A.hW.prototype={
$0(){},
$S:0}
A.hX.prototype={
$1(a){var s,r,q,p=A.z(A.d(a).target)
if(p!=null){s=A.w(p.value)
r=this.a
q=r.a
q===$&&A.a5("widget")
q=q.c
if(q.b!==s){q.sb_(s)
r=r.a.z
if(r!=null)r.$1(s)}}},
$S:1}
A.hY.prototype={
$1(a){var s
A.d(a)
s=A.z(a.target)
if(A.w(a.key)==="Enter"&&s!=null){A.w(s.value)
this.a.a===$&&A.a5("widget")
s.blur()}},
$S:1}
A.e2.prototype={
j(a){var s=null,r=t.N
r=A.l(r,r)
r.h(0,"box-sizing","border-box")
r.h(0,"display","block")
return new A.q("div",s,s,s,r,A.a([this.ba(this.b)],t.y),s)},
ba(a){var s,r,q=null,p=t.N,o=A.l(p,p)
p=a.b
if(p!=null)o.H(0,p.E())
s=A.a([],t.y)
p=a.a
if(p!=null&&p.length!==0)B.e.p(s,new A.aF(p))
p=a.c
if(p!=null)for(r=0;r<2;++r)B.e.p(s,this.ba(p[r]))
return new A.q("span",q,q,q,o,s,q)}}
A.b.prototype={
j(a){var s,r=null,q=A.am(a),p=t.N,o=A.l(p,p)
o.h(0,"box-sizing","border-box")
o.H(0,q.d.E())
q=this.d
q=q==null?r:q.E()
o.H(0,q==null?A.l(p,p):q)
o.h(0,"user-select","none")
q=this.f
if(q!=null){o.h(0,"text-align",B.e.ga0(q.k(0).split(".")))
o.h(0,"display","block")}s=B.e.ga0(B.lk.I().split("."))
return new A.q(s,r,r,A.l(p,p),o,A.a([new A.aF(this.b)],t.y),r)}}
A.c_.prototype={}
A.bW.prototype={}
A.aE.prototype={
cX(a){var s,r,q,p,o=this.c.q(0,A.aG(a))
if(a.b(o)){s=this.r
if(s!=null&&o instanceof A.bl){r=A.aG(a)
s.e.h(0,r,o)
q=s.b
q===$&&A.a5("context")
p=A.cH(q.c,t.n,t.l)
p.h(0,r,o)
s.b=q.cV(p)
A.mE(A.aG(a),s)}return a.a(o)}return null},
aR(a,b,c,d,e,f){var s,r,q,p,o,n=this
t.ch.a(b)
t.g4.a(e)
t.fE.a(a)
s=f==null?n.a:f
r=b==null?n.c:b
q=e==null?n.d:e
p=c==null?n.e:c
o=d==null?n.f:d
return A.kn(a==null?n.r:a,r,n,p,o,q,s)},
bo(a,b){var s=null
return this.aR(s,a,s,s,s,b)},
cV(a){var s=null
return this.aR(s,a,s,s,s,s)},
aQ(a,b,c,d){return this.aR(a,null,b,c,d,null)}}
A.aW.prototype={
O(){return new A.eV(A.l(t.n,t.O))},
cS(a,b){return this.c.$2(a,b)}}
A.eV.prototype={
ai(){this.b3()
var s=A.k2(new A.i_(this))
this.f=s
A.d(v.G.window).addEventListener("resize",s)},
a9(){var s=this.f
if(s!=null)A.d(v.G.window).removeEventListener("resize",s)
this.b2()},
B(a){var s=v.G,r=A.a2(A.d(s.window).innerWidth),q=A.a2(A.d(s.window).innerHeight)
s=this.a
s===$&&A.a5("widget")
return s.cS(a,new A.ai(0,r,0,q))}}
A.i_.prototype={
$1(a){var s
A.d(a)
s=this.a
if(s.d){t.M.a(new A.hZ()).$0()
s.n()}},
$S:6}
A.hZ.prototype={
$0(){},
$S:0}
A.dS.prototype={
j(a){var s,r=this,q=r.w
if(q!=null)s=A.a([new A.aF(q)],t.y)
else s=null
return new A.q(r.b,null,null,r.d,r.e,s,r.f)},
U(a){return this.j(a).Y()}}
A.j.prototype={
U(a){var s,r
try{s=this.j(a).Y()
return s}catch(r){if(A.b4(r) instanceof A.bX)return"<div>Unimplemented render</div>"
else throw r}},
j(a){return new A.aL(this.U(a))}}
A.el.prototype={
B(a){return new A.e0("Flart \u2014 Pure Dart Web Framework",A.kM(),!1,null)}};(function aliases(){var s=J.aZ.prototype
s.bG=s.k
s=A.y.prototype
s.b3=s.ai
s.bH=s.aS
s.b2=s.a9})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
s(A,"ox","ng",5)
s(A,"oy","nh",5)
s(A,"oz","ni",5)
r(A,"lP","or",0)
q(A.d_.prototype,"gcc","cd",0)
p(A.dc.prototype,"gcu","cv",12)
q(A.d3.prototype,"gcJ","cK",0)
q(A.df.prototype,"gbN","bO",0)
q(A.d7.prototype,"gcM","cN",0)
q(A.d1.prototype,"gaB","cj",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.M,null)
q(A.M,[A.jL,J.ee,A.cT,J.ce,A.m,A.cf,A.O,A.B,A.bd,A.cJ,A.cY,A.ae,A.bm,A.bD,A.d5,A.h7,A.fW,A.de,A.aT,A.bM,A.fR,A.aN,A.bc,A.cF,A.cz,A.f0,A.eN,A.eC,A.f4,A.aA,A.eW,A.dh,A.j_,A.dg,A.aD,A.d2,A.au,A.eP,A.hk,A.bV,A.f_,A.bp,A.f6,A.cI,A.bC,A.dG,A.jc,A.j9,A.aU,A.hU,A.eu,A.bX,A.hV,A.aM,A.a0,A.a8,A.f5,A.aa,A.dn,A.h9,A.f2,A.dL,A.j,A.y,A.cj,A.fg,A.q,A.aF,A.aL,A.bQ,A.by,A.fc,A.b7,A.W,A.h,A.fI,A.aj,A.F,A.t,A.aY,A.o,A.h5,A.ai,A.c_,A.bW,A.aE])
q(J.ee,[J.eg,J.cx,J.cB,J.cA,J.cC,J.cy,J.bb])
q(J.cB,[J.aZ,J.Q,A.bP,A.cM])
q(J.aZ,[J.ev,J.c0,J.ay])
r(J.ef,A.cT)
r(J.fP,J.Q)
q(J.cy,[J.cw,J.eh])
q(A.m,[A.b0,A.r,A.bf,A.bo,A.d4,A.eM,A.f3,A.c5])
q(A.b0,[A.b8,A.dq])
r(A.d0,A.b8)
r(A.cZ,A.dq)
r(A.aK,A.cZ)
q(A.O,[A.cE,A.aO,A.ei,A.eG,A.ey,A.eU,A.dx,A.ax,A.cW,A.eF,A.cU,A.dF])
r(A.c1,A.B)
r(A.dE,A.c1)
q(A.r,[A.al,A.cG,A.fS,A.ag])
q(A.al,[A.cV,A.a6])
r(A.cl,A.bf)
q(A.bD,[A.X,A.bH])
r(A.cP,A.aO)
q(A.aT,[A.dC,A.dD,A.eD,A.jA,A.jC,A.hs,A.hr,A.i6,A.jo,A.jn,A.im,A.io,A.iu,A.iv,A.iA,A.iB,A.iC,A.iD,A.fG,A.hj,A.hg,A.js,A.fd,A.fJ,A.fY,A.fX,A.fp,A.fy,A.fC,A.fF,A.fr,A.fs,A.fu,A.fw,A.fE,A.fq,A.fA,A.fB,A.fo,A.fx,A.fD,A.ft,A.hX,A.hY,A.i_])
q(A.eD,[A.eB,A.bA])
r(A.az,A.bM)
q(A.dD,[A.fQ,A.jB,A.i7,A.fT,A.fV,A.j7,A.hb,A.ha,A.j6,A.j5,A.hT,A.fl,A.ir,A.h1,A.hh,A.hi,A.fZ])
r(A.cD,A.az)
q(A.cM,[A.em,A.a7])
q(A.a7,[A.d8,A.da])
r(A.d9,A.d8)
r(A.cK,A.d9)
r(A.db,A.da)
r(A.cL,A.db)
q(A.cK,[A.en,A.eo])
q(A.cL,[A.ep,A.eq,A.er,A.es,A.et,A.cN,A.cO])
r(A.di,A.eU)
q(A.dC,[A.ht,A.hu,A.j0,A.fH,A.i0,A.i2,A.i1,A.i5,A.i4,A.i3,A.hm,A.hl,A.jp,A.jb,A.ja,A.hG,A.hH,A.hF,A.hN,A.hM,A.hO,A.hL,A.hR,A.hJ,A.hQ,A.hP,A.hK,A.hS,A.hI,A.fh,A.iG,A.iF,A.iH,A.iE,A.fi,A.fj,A.fk,A.iU,A.iV,A.iW,A.iS,A.iT,A.fm,A.ip,A.iq,A.id,A.ie,A.ik,A.ij,A.il,A.ii,A.ih,A.ig,A.i8,A.ib,A.ia,A.ic,A.i9,A.iP,A.iO,A.iQ,A.iN,A.iR,A.iM,A.iX,A.iZ,A.iY,A.ho,A.hn,A.hq,A.hp,A.hz,A.hy,A.hA,A.hx,A.hB,A.hw,A.hC,A.hv,A.hE,A.hD,A.it,A.is,A.iz,A.iy,A.ix,A.iw,A.iK,A.iL,A.iJ,A.jg,A.jf,A.jh,A.je,A.ji,A.jd,A.jk,A.jj,A.hf,A.fO,A.hW,A.hZ])
r(A.dd,A.bV)
r(A.d6,A.dd)
r(A.dm,A.cI)
r(A.c2,A.dm)
q(A.bC,[A.dA,A.dK])
q(A.dG,[A.fb,A.hd,A.hc])
r(A.eJ,A.dK)
q(A.ax,[A.cQ,A.eb])
r(A.eR,A.dn)
q(A.j,[A.U,A.eA,A.eT,A.bJ,A.dN,A.dO,A.dv,A.dM,A.ad,A.R,A.e_,A.bG,A.Z,A.cr,A.ct,A.dT,A.dU,A.dX,A.e1,A.e6,A.cp,A.aV,A.e4,A.dP,A.cq,A.e5,A.P,A.bF,A.dR,A.dQ,A.e9,A.co,A.ab,A.dV,A.dW,A.dY,A.e0,A.ak,A.bE,A.dZ,A.e3,A.E,A.e8,A.e2,A.b,A.dS])
q(A.U,[A.Y,A.V,A.L,A.bT,A.bI,A.bS,A.bZ,A.bz,A.bB,A.bK,A.bO,A.c3,A.b9,A.aW])
q(A.y,[A.d_,A.eS,A.eY,A.dc,A.d3,A.f1,A.df,A.eO,A.eQ,A.eX,A.d7,A.f7,A.d1,A.eV])
q(A.eA,[A.dI,A.dJ,A.ck,A.dw,A.ed,A.ex,A.dB,A.dH,A.ej,A.ez,A.e7,A.el])
q(A.cj,[A.eZ,A.ci])
r(A.bk,A.fg)
q(A.hU,[A.dz,A.be,A.ch,A.ek,A.h2,A.eL,A.fe,A.eE,A.h3,A.h4,A.h0,A.cg,A.ff,A.fU,A.fL,A.fK,A.fM])
r(A.aS,A.fc)
q(A.F,[A.cu,A.x])
r(A.bl,A.bJ)
r(A.N,A.dW)
s(A.c1,A.bm)
s(A.dq,A.B)
s(A.d8,A.B)
s(A.d9,A.ae)
s(A.da,A.B)
s(A.db,A.ae)
s(A.dm,A.f6)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",D:"double",bw:"num",f:"String",ah:"bool",a8:"Null",A:"List",M:"Object",G:"Map",J:"JSObject"},mangledNames:{},types:["~()","~(J)","~(@)","a8()","af(j)","~(~())","a8(J)","~(ah)","@()","~(f,@)","P(aE,ai)","ah(f)","~(f)","f(a0<f,f>)","~(D)","a8(@)","~(@,@)","~(M?,M?)","G<f,f>(G<f,f>,f)","0&(f,c?)","@(@)","ah(G<f,@>)","V(aE,ai)","~(f?)","~(ah?)","~(c?)","P(aE,c)","~(f,ay)","~(f,~(J))","a8(~())","J()","f(aj)","f(F)","a0<f,j(G<f,f>)>(f,j)","j(G<f,f>)","@(@,f)","@(f)","bU<y<U>>()","a8(M,bY)","q(j)","~(f,f?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.nz(v.typeUniverse,JSON.parse('{"ay":"aZ","ev":"aZ","c0":"aZ","p0":"bP","eg":{"ah":[],"K":[]},"cx":{"a8":[],"K":[]},"cB":{"J":[]},"aZ":{"J":[]},"Q":{"A":["1"],"r":["1"],"J":[],"m":["1"]},"ef":{"cT":[]},"fP":{"Q":["1"],"A":["1"],"r":["1"],"J":[],"m":["1"]},"ce":{"T":["1"]},"cy":{"D":[],"bw":[]},"cw":{"D":[],"c":[],"bw":[],"K":[]},"eh":{"D":[],"bw":[],"K":[]},"bb":{"f":[],"h_":[],"K":[]},"b0":{"m":["2"]},"cf":{"T":["2"]},"b8":{"b0":["1","2"],"m":["2"],"m.E":"2"},"d0":{"b8":["1","2"],"b0":["1","2"],"r":["2"],"m":["2"],"m.E":"2"},"cZ":{"B":["2"],"A":["2"],"b0":["1","2"],"r":["2"],"m":["2"]},"aK":{"cZ":["1","2"],"B":["2"],"A":["2"],"b0":["1","2"],"r":["2"],"m":["2"],"B.E":"2","m.E":"2"},"cE":{"O":[]},"dE":{"B":["c"],"bm":["c"],"A":["c"],"r":["c"],"m":["c"],"B.E":"c","bm.E":"c"},"r":{"m":["1"]},"al":{"r":["1"],"m":["1"]},"cV":{"al":["1"],"r":["1"],"m":["1"],"m.E":"1","al.E":"1"},"bd":{"T":["1"]},"bf":{"m":["2"],"m.E":"2"},"cl":{"bf":["1","2"],"r":["2"],"m":["2"],"m.E":"2"},"cJ":{"T":["2"]},"a6":{"al":["2"],"r":["2"],"m":["2"],"m.E":"2","al.E":"2"},"bo":{"m":["1"],"m.E":"1"},"cY":{"T":["1"]},"c1":{"B":["1"],"bm":["1"],"A":["1"],"r":["1"],"m":["1"]},"bD":{"G":["1","2"]},"X":{"bD":["1","2"],"G":["1","2"]},"d4":{"m":["1"],"m.E":"1"},"d5":{"T":["1"]},"bH":{"bD":["1","2"],"G":["1","2"]},"cP":{"aO":[],"O":[]},"ei":{"O":[]},"eG":{"O":[]},"de":{"bY":[]},"aT":{"ba":[]},"dC":{"ba":[]},"dD":{"ba":[]},"eD":{"ba":[]},"eB":{"ba":[]},"bA":{"ba":[]},"ey":{"O":[]},"az":{"bM":["1","2"],"jN":["1","2"],"G":["1","2"]},"cG":{"r":["1"],"m":["1"],"m.E":"1"},"aN":{"T":["1"]},"fS":{"r":["1"],"m":["1"],"m.E":"1"},"bc":{"T":["1"]},"ag":{"r":["a0<1,2>"],"m":["a0<1,2>"],"m.E":"a0<1,2>"},"cF":{"T":["a0<1,2>"]},"cD":{"az":["1","2"],"bM":["1","2"],"jN":["1","2"],"G":["1","2"]},"cz":{"n1":[],"h_":[]},"f0":{"cS":[],"bN":[]},"eM":{"m":["cS"],"m.E":"cS"},"eN":{"T":["cS"]},"eC":{"bN":[]},"f3":{"m":["bN"],"m.E":"bN"},"f4":{"T":["bN"]},"bP":{"J":[],"K":[]},"cM":{"J":[]},"em":{"J":[],"K":[]},"a7":{"aq":["1"],"J":[]},"cK":{"B":["D"],"a7":["D"],"A":["D"],"aq":["D"],"r":["D"],"J":[],"m":["D"],"ae":["D"]},"cL":{"B":["c"],"a7":["c"],"A":["c"],"aq":["c"],"r":["c"],"J":[],"m":["c"],"ae":["c"]},"en":{"B":["D"],"a7":["D"],"A":["D"],"aq":["D"],"r":["D"],"J":[],"m":["D"],"ae":["D"],"K":[],"B.E":"D"},"eo":{"B":["D"],"a7":["D"],"A":["D"],"aq":["D"],"r":["D"],"J":[],"m":["D"],"ae":["D"],"K":[],"B.E":"D"},"ep":{"B":["c"],"a7":["c"],"A":["c"],"aq":["c"],"r":["c"],"J":[],"m":["c"],"ae":["c"],"K":[],"B.E":"c"},"eq":{"B":["c"],"a7":["c"],"A":["c"],"aq":["c"],"r":["c"],"J":[],"m":["c"],"ae":["c"],"K":[],"B.E":"c"},"er":{"B":["c"],"a7":["c"],"A":["c"],"aq":["c"],"r":["c"],"J":[],"m":["c"],"ae":["c"],"K":[],"B.E":"c"},"es":{"B":["c"],"a7":["c"],"A":["c"],"aq":["c"],"r":["c"],"J":[],"m":["c"],"ae":["c"],"K":[],"B.E":"c"},"et":{"B":["c"],"a7":["c"],"A":["c"],"aq":["c"],"r":["c"],"J":[],"m":["c"],"ae":["c"],"K":[],"B.E":"c"},"cN":{"B":["c"],"a7":["c"],"A":["c"],"aq":["c"],"r":["c"],"J":[],"m":["c"],"ae":["c"],"K":[],"B.E":"c"},"cO":{"jT":[],"B":["c"],"a7":["c"],"A":["c"],"aq":["c"],"r":["c"],"J":[],"m":["c"],"ae":["c"],"K":[],"B.E":"c"},"dh":{"h6":[]},"eU":{"O":[]},"di":{"aO":[],"O":[]},"dg":{"T":["1"]},"c5":{"m":["1"],"m.E":"1"},"aD":{"O":[]},"au":{"cv":["1"]},"d6":{"bV":["1"],"bU":["1"],"r":["1"],"m":["1"]},"bp":{"T":["1"]},"B":{"A":["1"],"r":["1"],"m":["1"]},"bM":{"G":["1","2"]},"cI":{"G":["1","2"]},"c2":{"dm":["1","2"],"cI":["1","2"],"f6":["1","2"],"G":["1","2"]},"bV":{"bU":["1"],"r":["1"],"m":["1"]},"dd":{"bV":["1"],"bU":["1"],"r":["1"],"m":["1"]},"dA":{"bC":["A<c>","f"]},"dK":{"bC":["f","A<c>"]},"eJ":{"bC":["f","A<c>"]},"D":{"bw":[]},"c":{"bw":[]},"A":{"r":["1"],"m":["1"]},"cS":{"bN":[]},"bU":{"r":["1"],"m":["1"]},"f":{"h_":[]},"dx":{"O":[]},"aO":{"O":[]},"ax":{"O":[]},"cQ":{"O":[]},"eb":{"O":[]},"cW":{"O":[]},"eF":{"O":[]},"cU":{"O":[]},"dF":{"O":[]},"eu":{"O":[]},"bX":{"O":[]},"f5":{"bY":[]},"aa":{"n5":[]},"dn":{"eH":[]},"f2":{"eH":[]},"eR":{"eH":[]},"Y":{"U":[],"j":[]},"d_":{"y":["Y"],"y.T":"Y"},"V":{"U":[],"j":[]},"eS":{"y":["V"],"y.T":"V"},"dI":{"j":[]},"L":{"U":[],"j":[]},"eY":{"y":["L"],"y.T":"L"},"dJ":{"j":[]},"bT":{"U":[],"j":[]},"dc":{"y":["bT"],"y.T":"bT"},"ck":{"j":[]},"dw":{"j":[]},"bI":{"U":[],"j":[]},"d3":{"y":["bI"],"y.T":"bI"},"ed":{"j":[]},"bS":{"U":[],"j":[]},"f1":{"y":["bS"],"y.T":"bS"},"ex":{"j":[]},"bZ":{"U":[],"j":[]},"df":{"y":["bZ"],"y.T":"bZ"},"bz":{"U":[],"j":[]},"eO":{"y":["bz"],"y.T":"bz"},"dB":{"j":[]},"bB":{"U":[],"j":[]},"eQ":{"y":["bB"],"y.T":"bB"},"dH":{"j":[]},"bK":{"U":[],"j":[]},"eX":{"y":["bK"],"y.T":"bK"},"ej":{"j":[]},"bO":{"U":[],"j":[]},"d7":{"y":["bO"],"y.T":"bO"},"ez":{"j":[]},"c3":{"U":[],"j":[]},"f7":{"y":["c3"],"y.T":"c3"},"eZ":{"cj":[]},"ci":{"cj":[]},"q":{"af":[]},"aF":{"af":[]},"aL":{"af":[]},"cu":{"F":[]},"x":{"F":[]},"eT":{"j":[]},"bl":{"bJ":[],"j":[]},"dN":{"j":[]},"dO":{"j":[]},"dv":{"j":[]},"dM":{"j":[]},"ad":{"j":[]},"R":{"j":[]},"e_":{"j":[]},"bG":{"j":[]},"Z":{"j":[]},"cr":{"j":[]},"ct":{"j":[]},"dT":{"j":[]},"dU":{"j":[]},"dX":{"j":[]},"e1":{"j":[]},"e6":{"j":[]},"bJ":{"j":[]},"aV":{"j":[]},"cp":{"j":[]},"e4":{"j":[]},"dP":{"j":[]},"cq":{"j":[]},"e5":{"j":[]},"e7":{"j":[]},"U":{"j":[]},"eA":{"j":[]},"P":{"j":[]},"bF":{"j":[]},"dR":{"j":[]},"dQ":{"j":[]},"e9":{"j":[]},"co":{"j":[]},"ab":{"j":[]},"dV":{"j":[]},"dW":{"j":[]},"N":{"j":[]},"dY":{"j":[]},"e0":{"j":[]},"ak":{"j":[]},"bE":{"j":[]},"dZ":{"j":[]},"e3":{"j":[]},"E":{"j":[]},"e8":{"j":[]},"b9":{"U":[],"j":[]},"d1":{"y":["b9"],"y.T":"b9"},"e2":{"j":[]},"b":{"j":[]},"aW":{"U":[],"j":[]},"eV":{"y":["aW"],"y.T":"aW"},"dS":{"j":[]},"el":{"j":[]},"mI":{"A":["c"],"r":["c"],"m":["c"]},"jT":{"A":["c"],"r":["c"],"m":["c"]},"na":{"A":["c"],"r":["c"],"m":["c"]},"mG":{"A":["c"],"r":["c"],"m":["c"]},"n8":{"A":["c"],"r":["c"],"m":["c"]},"mH":{"A":["c"],"r":["c"],"m":["c"]},"n9":{"A":["c"],"r":["c"],"m":["c"]},"mC":{"A":["D"],"r":["D"],"m":["D"]},"mD":{"A":["D"],"r":["D"],"m":["D"]}}'))
A.ny(v.typeUniverse,JSON.parse('{"c1":1,"dq":2,"a7":1,"dd":1,"dG":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.bs
return{t:s("aD"),gy:s("aj"),ez:s("aE"),B:s("X<f,f>"),R:s("X<f,@>"),W:s("r<@>"),a:s("O"),gH:s("cp<f>"),A:s("aV<f>"),dx:s("b9"),b_:s("cq<c>"),eu:s("F"),Z:s("ba"),r:s("bH<c,F>"),O:s("bJ"),U:s("m<@>"),hb:s("m<c>"),V:s("Q<aj>"),y:s("Q<af>"),c:s("Q<J>"),X:s("Q<G<f,@>>"),s:s("Q<f>"),p:s("Q<j>"),D:s("Q<@>"),Y:s("Q<c>"),b:s("Q<~()>"),u:s("cx"),m:s("J"),g:s("ay"),aU:s("aq<@>"),d:s("A<@>"),L:s("A<c>"),q:s("a0<f,f>"),ag:s("a0<f,j(G<f,f>)>"),f:s("G<f,f>"),e:s("G<f,@>"),ai:s("a6<F,f>"),P:s("a8"),K:s("M"),gT:s("p1"),cz:s("cS"),j:s("bY"),k:s("y<U>"),N:s("f"),bg:s("f(F)"),gZ:s("bl"),dm:s("K"),n:s("h6"),eK:s("aO"),ak:s("c0"),h:s("c2<f,f>"),E:s("eH"),dq:s("bo<G<f,@>>"),cc:s("bo<f>"),l:s("j"),Q:s("j(G<f,f>)"),_:s("au<@>"),w:s("ah"),h1:s("ah(G<f,@>)"),al:s("ah(M)"),bB:s("ah(f)"),i:s("D"),z:s("@"),fO:s("@()"),x:s("@(M)"),C:s("@(M,bY)"),S:s("c"),eH:s("cv<a8>?"),an:s("J?"),G:s("G<f,@>?"),ch:s("G<h6,j>?"),g4:s("G<h6,@>?"),I:s("M?"),fE:s("y<U>?"),dk:s("f?"),F:s("d2<@,@>?"),J:s("f_?"),fQ:s("ah?"),cD:s("D?"),h6:s("c?"),cg:s("bw?"),o:s("bw"),H:s("~"),M:s("~()"),v:s("~(J)"),T:s("~(@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.ja=J.ee.prototype
B.e=J.Q.prototype
B.q=J.cw.prototype
B.X=J.cy.prototype
B.c=J.bb.prototype
B.jb=J.ay.prototype
B.jc=J.cB.prototype
B.bo=A.cO.prototype
B.bq=J.ev.prototype
B.aI=J.c0.prototype
B.lz=new A.by("flex-end","flex-end")
B.aJ=new A.by("center","center")
B.bC=new A.by("flex-start","flex-start")
B.bD=new A.by("center","flex-start")
B.aK=new A.bz(null)
B.bE=new A.dw(null)
B.aL=new A.dz(0,"horizontal")
B.a8=new A.dz(1,"vertical")
B.aM=new A.dB(null)
B.ae=new A.W(10,10,10,10)
B.a_=new A.W(12,12,12,12)
B.a0=new A.W(14,14,14,14)
B.F=new A.W(16,16,16,16)
B.aO=new A.W(18,18,18,18)
B.as=new A.W(20,20,20,20)
B.bI=new A.W(24,24,24,24)
B.m=new A.W(6,6,6,6)
B.y=new A.W(8,8,8,8)
B.bJ=new A.W(9,9,9,9)
B.bL=new A.ai(0,1100,0,1/0)
B.aQ=new A.ai(0,580,0,1/0)
B.bM=new A.ai(0,960,0,1/0)
B.bN=new A.ai(0,680,0,1/0)
B.bO=new A.ai(0,1/0,0,380)
B.f=new A.x("",4279286145)
B.ay=new A.bQ(4)
B.cE=new A.x("",1141946753)
B.c7=new A.aj(B.ay,16,B.cE)
B.jm=s([B.c7],t.V)
B.bR=new A.h(B.f,B.ae,B.jm,null,null,null)
B.z=new A.x("",4280166715)
B.aR=new A.h(B.z,B.a0,null,null,null,null)
B.aS=new A.h(B.z,B.y,null,null,null,null)
B.cP=new A.x("",4279046943)
B.aN=new A.W(0,0,15,15)
B.bT=new A.h(B.cP,B.aN,null,null,null,null)
B.cG=new A.x("",3422552064)
B.bV=new A.h(B.cG,null,null,null,null,null)
B.r=new A.x("",4279310375)
B.at=new A.b7(1,B.z)
B.aP=new A.aS(B.at,null,null,null)
B.bW=new A.h(B.r,null,null,B.aP,null,null)
B.a3=new A.x("",4279639856)
B.bH=new A.W(19,19,0,0)
B.a9=new A.aS(null,null,B.at,null)
B.bX=new A.h(B.a3,B.bH,null,B.a9,null,null)
B.bK=new A.aS(null,B.at,null,null)
B.c0=new A.h(B.r,null,null,B.bK,null,null)
B.bF=new A.W(11,11,0,0)
B.c1=new A.h(B.r,B.bF,null,B.a9,null,null)
B.bG=new A.W(15,15,0,0)
B.aT=new A.h(B.a3,B.bG,null,B.a9,null,null)
B.af=new A.h(B.z,B.a_,null,null,null,null)
B.c4=new A.h(B.r,null,null,B.a9,null,null)
B.ag=new A.h(null,null,null,B.a9,null,null)
B.ah=new A.fe(1,"contain")
B.a1=new A.ff(1,"circle")
B.aU=new A.bB(null)
B.lA=new A.fb()
B.cc=new A.dA()
B.cd=new A.ci()
B.aV=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.cf=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.ck=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.cg=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.cj=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.ci=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.ch=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.aW=function(hooks) { return hooks; }

B.cl=new A.eu()
B.S=new A.eJ()
B.cm=new A.hd()
B.a2=new A.hk()
B.aX=new A.eZ()
B.cn=new A.f5()
B.aY=new A.cg(0,"none")
B.aZ=new A.cg(1,"hardEdge")
B.lB=new A.cg(2,"antiAlias")
B.p=new A.x("",4294507260)
B.k=new A.x("",4282090230)
B.b0=new A.x("",268435455)
B.cI=new A.x("",856734081)
B.L=new A.x("",4287323382)
B.au=new A.x("",536870911)
B.cK=new A.x("",4278914841)
B.b1=new A.x("",184549375)
B.cL=new A.x("",521189761)
B.b2=new A.x("",352321535)
B.cM=new A.x("",1292941697)
B.cN=new A.x("",3858759680)
B.n=new A.x("",4287931320)
B.b3=new A.x("",4279179050)
B.G=new A.x("",4294286859)
B.a4=new A.x("",4278630100)
B.cQ=new A.x("",437303681)
B.u=new A.x("",4284773515)
B.l=new A.x("",4281549141)
B.cS=new A.x("",234881023)
B.a=new A.ch(0,"start")
B.cT=new A.ch(1,"center")
B.T=new A.ch(3,"stretch")
B.cU=new A.dH(null)
B.cV=new A.dI(null)
B.cW=new A.aU(0)
B.cX=new A.aU(2e6)
B.cY=new A.aU(3e6)
B.cZ=new A.aU(5e5)
B.d_=new A.aU(6e5)
B.d0=new A.t(0,0,20,0)
B.d1=new A.t(0,0,2,0)
B.d2=new A.t(0,0,6,0)
B.b6=new A.t(0,0,8,0)
B.d3=new A.t(0,10,0,10)
B.d4=new A.t(0,2,0,2)
B.b7=new A.t(0,4,0,4)
B.aa=new A.t(10,16,10,16)
B.d6=new A.t(12,0,12,0)
B.ai=new A.t(12,12,12,12)
B.aj=new A.t(12,16,12,16)
B.b8=new A.t(12,20,12,20)
B.b9=new A.t(14,20,14,20)
B.d7=new A.t(16,0,16,0)
B.ab=new A.t(16,16,16,16)
B.ba=new A.t(16,24,16,24)
B.d8=new A.t(20,12,20,12)
B.I=new A.t(20,20,20,20)
B.a5=new A.t(24,24,24,24)
B.d9=new A.t(32,32,32,32)
B.da=new A.t(3,3,3,3)
B.bb=new A.t(3,8,3,8)
B.db=new A.t(48,32,48,32)
B.av=new A.t(4,0,8,12)
B.t=new A.t(4,10,4,10)
B.bc=new A.t(4,8,4,8)
B.dc=new A.t(5,10,5,10)
B.dd=new A.t(6,11,6,11)
B.bd=new A.t(6,12,6,12)
B.de=new A.t(6,13,6,13)
B.df=new A.t(7,12,7,12)
B.dg=new A.t(7,7,7,7)
B.dh=new A.t(80,16,40,16)
B.ak=new A.t(8,12,8,12)
B.di=new A.t(8,14,8,14)
B.be=new A.t(8,16,8,16)
B.aw=new A.t(8,8,8,8)
B.dj=new A.t(2.5,7,2.5,7)
B.j=new A.aY("bold")
B.l5=new A.o(B.k,null,B.j,null,null,null)
B.lk=new A.h4(0,"span")
B.fm=new A.b("flex: 1",B.l5,null,null)
B.dl=new A.ad(B.fm,null)
B.ad=new A.o(B.f,null,B.j,null,null,null)
B.eR=new A.b("flex: 2",B.ad,null,null)
B.dp=new A.ad(B.eR,null)
B.Y=new A.eE(1,"center")
B.eP=new A.b("Border.all & BorderRadius",B.ad,B.Y,null)
B.dq=new A.ad(B.eP,null)
B.v=new A.o(B.p,22,B.j,null,null,null)
B.fe=new A.b("Navigating Between Pages",B.v,null,null)
B.h=new A.E(null,12,null,null)
B.E=new A.o(B.n,14,null,null,null,null)
B.fp=new A.b("Pushing, replacing, and popping routes with optional animated transitions:",B.E,null,null)
B.co=new A.Y("// Push a named route onto history\nPageNavigator.pushNamed('/docs/widgets');\n\n// Push with transition\nPageNavigator.pushNamed(\n  '/docs/architecture',\n  transition: RouteTransition.fade,\n);\n\n// Replace current route (no back stack entry)\nPageNavigator.replaceNamed('/dashboard');\n\n// Pop top route (browser history back)\nPageNavigator.pop();","dart","Navigation Commands",null)
B.k1=s([B.fe,B.h,B.fp,B.h,B.co],t.p)
B.d=new A.be(0,"start")
B.b=new A.ek(1,"max")
B.dD=new A.R(B.k1,B.d,B.a,B.b,null)
B.fN=new A.b("Prerequisites",B.v,null,null)
B.o=new A.E(null,8,null,null)
B.a7=new A.o(B.n,14,null,null,null,1.5)
B.eZ=new A.b("Flart requires Dart SDK 3.0.0 or higher. You do not need the full Flutter SDK or Android/iOS toolchains, making it ultra-lightweight for web and CI/CD pipelines.",B.a7,null,null)
B.D=new A.E(null,16,null,null)
B.cB=new A.Y("dart --version\n# Dart SDK version: 3.5.0 (or higher)","bash","Verify Dart SDK",null)
B.ka=s([B.fN,B.o,B.eZ,B.D,B.cB],t.p)
B.dE=new A.R(B.ka,B.d,B.a,B.b,null)
B.iV=new A.N("verified",22,B.k,null,null,null)
B.P=new A.E(10,null,null,null)
B.aA=new A.o(B.p,18,B.j,null,null,null)
B.fk=new A.b("Zero-Escape-Hatch Guarantee",B.aA,null,null)
B.jR=s([B.iV,B.P,B.fk],t.p)
B.ep=new A.Z(B.jR,B.d,B.a,B.b,null)
B.ax=new A.E(null,10,null,null)
B.fK=new A.b("In Flart v2.1.0, all widgets adhere strictly to Flutter styling principles. There are NO rawCss or raw inline HTML string escape hatches. Styling is accomplished cleanly using BoxDecoration, Border, BorderRadius, BoxShadow, Gradient, TextStyle, and EdgeInsets.",B.a7,null,null)
B.jj=s([B.ep,B.ax,B.fK],t.p)
B.dF=new A.R(B.jj,B.d,B.a,B.b,null)
B.i7=new A.b("2. Reactive ValueNotifier & ValueListenableBuilder",B.v,null,null)
B.f3=new A.b("For decoupled or scoped state, use ValueNotifier without needing an entire StatefulWidget:",B.E,null,null)
B.cw=new A.Y("final counterNotifier = ValueNotifier<int>(0);\n\n// In your UI:\nValueListenableBuilder<int>(\n  valueListenable: counterNotifier,\n  builder: (context, value, child) {\n    return Text('Count: $value');\n  },\n);\n\n// Mutating state anywhere:\ncounterNotifier.value++;","dart","ValueNotifier Pattern",null)
B.jK=s([B.i7,B.h,B.f3,B.h,B.cw],t.p)
B.dG=new A.R(B.jK,B.d,B.a,B.b,null)
B.hO=new A.b("Route Guards & Authentication",B.v,null,null)
B.fL=new A.b("Protect routes using PageNavigator's built-in guard function:",B.E,null,null)
B.cr=new A.Y("PageNavigator.registerRoutes(\n  routes,\n  guard: (routeName) {\n    if (routeName.startsWith('/admin')) {\n      return authService.isAuthenticated;\n    }\n    return true;\n  },\n  unauthorizedRoute: '/login',\n);","dart","Route Guards",null)
B.jX=s([B.hO,B.h,B.fL,B.h,B.cr],t.p)
B.dH=new A.R(B.jX,B.d,B.a,B.b,null)
B.hh=new A.b("Reconciliation Lifecycle",B.v,null,null)
B.bz=new A.o(B.n,14,null,null,null,1.6)
B.hE=new A.b("When setState() or ValueNotifier triggers a rebuild in Flart:\n1. Build Phase: Flart calls the build(context) method to construct a fresh Virtual DOM tree.\n2. Diffing Phase: The VDomReconciler compares the new tree against the previously rendered tree.\n3. Patching Phase: Only the changed attributes, styles, or children nodes are mutated in the browser DOM.\n4. Microsecond Efficiency: Pure Dart diffing executes in ~0.3ms without dropping frames.",B.bz,null,null)
B.cA=new A.Y("// Virtual DOM reconciler execution\nvoid reRenderApp() {\n  if (_rootWidget == null || _appContainer == null) return;\n  final newVNode = _rootWidget!.toVNode(BuildContext());\n  final patches = VDomReconciler.diff(_currentVNode, newVNode);\n  VDomReconciler.patch(_appContainer!, patches);\n  _currentVNode = newVNode;\n}","dart","vdom_reconciler.dart",null)
B.k0=s([B.hh,B.h,B.hE,B.D,B.cA],t.p)
B.dI=new A.R(B.k0,B.d,B.a,B.b,null)
B.fT=new A.b("The Philosophy: Semantic HTML DOM vs CanvasKit",B.v,null,null)
B.ie=new A.b("Standard Flutter Web uses CanvasKit (Skia compiled to WebAssembly) to draw pixels directly onto an HTML <canvas> element. While this guarantees pixel-identical mobile fidelity, it incurs huge trade-offs on the web:\n\n\u2022 Large Initial Download: 15\u201320 MB of WASM and font assets before the first pixel appears.\n\u2022 Non-Semantic DOM: Search engine crawlers (Google, Bing) see an empty canvas.\n\u2022 Degraded Text Selection: Native browser text selection, spell-checking, and browser extensions do not work out of the box.\n\u2022 High Memory Usage: 300+ MB baseline memory per tab.\n\nFlart solves this by bringing Flutter's declarative widget tree to a lightweight, pure Dart Virtual DOM that compiles directly to semantic HTML5 elements (<div>, <input>, <button>, <p>, <span>).",B.bz,null,null)
B.jB=s([B.fT,B.h,B.ie],t.p)
B.dJ=new A.R(B.jB,B.d,B.a,B.b,null)
B.hN=new A.b("1. Install the Flart CLI",B.v,null,null)
B.h8=new A.b("Activate the flart command-line tool globally via pub.dev:",B.E,null,null)
B.cq=new A.Y("dart pub global activate flart","bash","Install CLI",null)
B.k5=s([B.hN,B.o,B.h8,B.h,B.cq],t.p)
B.dK=new A.R(B.k5,B.d,B.a,B.b,null)
B.hy=new A.b("LayoutBuilder & Breakpoints",B.v,null,null)
B.h6=new A.b("Use LayoutBuilder to switch widget trees based on parent container constraints:",B.E,null,null)
B.cy=new A.Y("LayoutBuilder(\n  builder: (context, constraints) {\n    if (constraints.maxWidth >= 1024) {\n      return DesktopThreeColumnLayout();\n    } else if (constraints.maxWidth >= 768) {\n      return TabletTwoColumnLayout();\n    } else {\n      return MobileSingleColumnLayout();\n    }\n  },\n)","dart","LayoutBuilder Pattern",null)
B.jZ=s([B.hy,B.h,B.h6,B.h,B.cy],t.p)
B.dL=new A.R(B.jZ,B.d,B.a,B.b,null)
B.hk=new A.b("4. Compile for Production",B.v,null,null)
B.ia=new A.b("Compile an optimized, minified production build with tree shaking:",B.E,null,null)
B.cs=new A.Y("dart run build_runner build --release --output web:build","bash","Production Build",null)
B.hz=new A.b("The resulting build/ folder contains static HTML, CSS, and minified JS (~280 KB gzipped) ready to deploy to GitHub Pages, Cloudflare Pages, Firebase Hosting, Netlify, or Vercel.",B.a7,null,null)
B.jf=s([B.hk,B.o,B.ia,B.h,B.cs,B.h,B.hz],t.p)
B.dM=new A.R(B.jf,B.d,B.a,B.b,null)
B.h_=new A.b("3. Start the Development Server",B.v,null,null)
B.hJ=new A.b("Run the local development server with instant incremental compilation and source maps:",B.E,null,null)
B.cu=new A.Y("dart run build_runner serve web:8080","bash","Development Server",null)
B.kL=new A.o(B.f,14,null,null,null,null)
B.fc=new A.b("Open http://localhost:8080 in your browser to view your live Flart application.",B.kL,null,null)
B.jI=s([B.h_,B.o,B.hJ,B.h,B.cu,B.h,B.fc],t.p)
B.dO=new A.R(B.jI,B.d,B.a,B.b,null)
B.f0=new A.b("ScreenUtil Extensions (.w, .h, .sp)",B.v,null,null)
B.hY=new A.b("Initialize ScreenUtil once in main() to enable dynamic proportional scaling:",B.E,null,null)
B.cx=new A.Y("void main() {\n  ScreenUtil.init(\n    designSize: const Size(1920, 1080),\n    minTextAdapt: true,\n  );\n  runApp(const MyApp());\n}\n\n// In your widgets:\nContainer(\n  width: 200.w,   // Proportional width\n  height: 50.h,   // Proportional height\n  child: Text('Scaled Text', style: TextStyle(fontSize: 16.sp)),\n)","dart","ScreenUtil Usage",null)
B.jk=s([B.f0,B.h,B.hY,B.h,B.cx],t.p)
B.dQ=new A.R(B.jk,B.d,B.a,B.b,null)
B.hc=new A.b("1. StatefulWidget & setState()",B.v,null,null)
B.fU=new A.b("Every StatefulWidget in Flart has its own persistent State object and lifecycle (initState, didUpdateWidget, dispose). Calling setState() batches changes and schedules a Virtual DOM reconciliation pass.",B.a7,null,null)
B.jr=s([B.hc,B.h,B.fU],t.p)
B.dR=new A.R(B.jr,B.d,B.a,B.b,null)
B.ar=new A.o(B.p,16,B.j,null,null,null)
B.hP=new A.b("Container with Padding",B.ar,null,null)
B.Q=new A.o(B.n,13,null,null,null,null)
B.fi=new A.b("Combines width, height, padding, margin, and decoration into a single clean element.",B.Q,B.Y,null)
B.jA=s([B.hP,B.o,B.fi],t.p)
B.dS=new A.R(B.jA,B.d,B.a,B.b,null)
B.fA=new A.b("Navigating to External Websites",B.v,null,null)
B.hS=new A.b("Flart provides dedicated methods to navigate to external websites in the same tab or in a new browser tab without interfering with SPA routing:",B.a7,null,null)
B.cz=new A.Y("// 1. Open external website in the SAME tab\nPageNavigator.openUrl('https://dart.dev');\n// or explicitly:\nPageNavigator.openUrl('https://dart.dev', newTab: false);\n\n// 2. Open external website in a NEW tab (_blank)\nPageNavigator.openUrl('https://pub.dev/packages/flartdart', newTab: true);\n\n// 3. Convenience helper (Flutter url_launcher style)\nPageNavigator.launchUrl('https://github.com', newTab: true);\n\n// 4. Open either an internal route or external website in a new tab\nPageNavigator.pushNewTab('/docs/widgets/basic'); // internal route in new tab\nPageNavigator.pushNewTab('https://dart.dev');          // external website in new tab","dart","External Web Navigation",null)
B.k2=s([B.fA,B.h,B.hS,B.h,B.cz],t.p)
B.dT=new A.R(B.k2,B.d,B.a,B.b,null)
B.eV=new A.b("2. Scaffold a New Project",B.v,null,null)
B.hD=new A.b("Use the flart create command to generate a preconfigured web application with Virtual DOM reconciler and build_runner:",B.E,null,null)
B.ct=new A.Y("flart create my_first_flart_app\ncd my_first_flart_app","bash","Create Project",null)
B.f8=new A.b("Or add flartdart directly to an existing Dart project:'s pubspec.yaml:",B.E,null,null)
B.cv=new A.Y("dependencies:\n  flartdart: ^2.1.0\n\ndev_dependencies:\n  build_runner: ^2.4.9\n  build_web_compilers: ^4.0.10","yaml","pubspec.yaml",null)
B.jO=s([B.eV,B.o,B.hD,B.h,B.ct,B.h,B.f8,B.h,B.cv],t.p)
B.dU=new A.R(B.jO,B.d,B.a,B.b,null)
B.il=new A.b("Registering Routes in main()",B.v,null,null)
B.fy=new A.b("Register routes before running runApp:",B.E,null,null)
B.cp=new A.Y("void main() {\n  PageNavigator.registerRoutes({\n    '/': const HomePage(),\n    '/docs/installation': const InstallationPage(),\n    '/docs/architecture': const ArchitecturePage(),\n    '/docs/widgets': const WidgetsCatalogPage(),\n  });\n\n  PageNavigator.init();\n\n  runApp(const MyApp());\n}\n\nclass MyApp extends StatelessWidget {\n  const MyApp({super.key});\n\n  @override\n  Widget build(BuildContext context) {\n    return FDMaterialApp(\n      title: 'My Flart App',\n      home: PageNavigator.current,\n    );\n  }\n}","dart","Route Registration",null)
B.kc=s([B.il,B.h,B.fy,B.h,B.cp],t.p)
B.dV=new A.R(B.kc,B.d,B.a,B.b,null)
B.h1=new A.b("Overview",B.v,null,null)
B.i2=new A.b("Flart's PageNavigator provides a declarative routing stack designed specifically for browser single-page applications (SPAs). It integrates seamlessly with the browser's window.history API, supporting hash-based deep linking, forward and back buttons, and query parameters without requiring server-side fallback rules.",B.a7,null,null)
B.jv=s([B.h1,B.h,B.i2],t.p)
B.dW=new A.R(B.jv,B.d,B.a,B.b,null)
B.az=new A.o(B.p,null,B.j,null,null,null)
B.i4=new A.b("Feature / Metric",B.az,null,null)
B.eh=new A.ab(B.i4,3,null)
B.ik=new A.b("FlartDart 2.1.0",B.ad,null,null)
B.ef=new A.ab(B.ik,3,null)
B.l3=new A.o(B.u,null,B.j,null,null,null)
B.fF=new A.b("Flutter Web (CanvasKit)",B.l3,null,null)
B.eg=new A.ab(B.fF,3,null)
B.jJ=s([B.eh,B.ef,B.eg],t.p)
B.eu=new A.Z(B.jJ,B.d,B.a,B.b,null)
B.dX=new A.P(B.eu,null,null,null,null,B.b9,null,B.aT,null,null,null)
B.d5=new A.t(0,6,0,6)
B.cC=new A.x("",654311423)
B.dY=new A.P(null,null,1,18,null,null,B.d5,null,B.cC,null,null)
B.W=new A.F("#FFFFFF",null)
B.Z=new A.o(B.W,null,B.j,null,null,null)
B.eX=new A.b("Action completed successfully!",B.Z,null,null)
B.c_=new A.h(B.f,B.y,null,null,null,null)
B.dZ=new A.P(B.eX,null,null,null,null,B.aa,null,B.c_,null,null,null)
B.im=new A.b("ClipRRect",B.Z,null,null)
B.dk=new A.ad(B.im,null)
B.e_=new A.P(B.dk,null,100,100,null,null,null,null,B.f,null,null)
B.bU=new A.h(B.G,null,null,null,null,B.a1)
B.e0=new A.P(null,null,10,10,null,null,null,B.bU,null,null,null)
B.aC=new A.o(B.u,11,null,null,null,null)
B.hH=new A.b("Instant local search across all documentation",B.aC,null,null)
B.aG=new A.o(B.f,11,B.j,null,null,null)
B.h7=new A.b("Flart v2.2.0",B.aG,null,null)
B.jl=s([B.hH,B.h7],t.p)
B.A=new A.be(3,"spaceBetween")
B.el=new A.Z(B.jl,B.A,B.a,B.b,null)
B.bP=new A.h(B.a3,B.aN,null,B.aP,null,null)
B.e3=new A.P(B.el,null,null,null,null,B.aa,null,B.bP,null,null,null)
B.b_=new A.x("",4293870660)
B.c2=new A.h(B.b_,null,null,null,null,B.a1)
B.e5=new A.P(null,null,10,10,null,null,null,B.c2,null,null,null)
B.fZ=new A.b("ClipOval",B.Z,null,null)
B.dm=new A.ad(B.fZ,null)
B.e6=new A.P(B.dm,null,100,100,null,null,null,null,B.k,null,null)
B.cH=new A.x("",1712372097)
B.c5=new A.aj(null,6,B.cH)
B.k8=s([B.c5],t.V)
B.bY=new A.h(B.f,null,B.k8,null,null,B.a1)
B.e7=new A.P(null,null,6,6,null,null,null,B.bY,null,null,null)
B.bQ=new A.h(B.f,null,null,null,null,B.a1)
B.ea=new A.P(null,null,10,10,null,null,null,B.bQ,null,null,null)
B.eb=new A.co(B.z,null)
B.l9=new A.o(B.f,12,B.j,null,null,null)
B.hU=new A.b("View Widgets",B.l9,null,null)
B.bi=new A.E(4,null,null,null)
B.j2=new A.N("arrow_forward",14,B.f,null,null,null)
B.jW=s([B.hU,B.bi,B.j2],t.p)
B.em=new A.Z(B.jW,B.d,B.a,B.b,null)
B.iP=new A.N("search",16,B.u,null,null,null)
B.eW=new A.b("Search documentation...",B.Q,null,null)
B.jS=s([B.iP,B.P,B.eW],t.p)
B.en=new A.Z(B.jS,B.d,B.a,B.b,null)
B.iZ=new A.N("touch_app",20,B.f,null,null,null)
B.fg=new A.b("Tap me (GestureDetector)",B.az,null,null)
B.k_=s([B.iZ,B.P,B.fg],t.p)
B.O=new A.ek(0,"min")
B.eo=new A.Z(B.k_,B.d,B.a,B.O,null)
B.iT=new A.N("search",15,B.n,null,null,null)
B.al=new A.E(6,null,null,null)
B.ao=new A.o(B.n,12,null,null,null,null)
B.io=new A.b("Search docs...",B.ao,null,null)
B.jF=s([B.iT,B.al,B.io],t.p)
B.eq=new A.Z(B.jF,B.d,B.a,B.b,null)
B.l6=new A.o(B.u,12,null,null,null,null)
B.f6=new A.b("\xa9 2026 FlartDart Authors \u2022 Released under the MIT License",B.l6,null,null)
B.M=new A.aY("600")
B.kM=new A.o(B.f,12,B.M,null,null,null)
B.f2=new A.b("Built with Flart v2.2.0",B.kM,null,null)
B.jD=s([B.f6,B.f2],t.p)
B.es=new A.Z(B.jD,B.A,B.a,B.b,null)
B.iU=new A.N("star",14,B.G,null,null,null)
B.bw=new A.o(B.p,12,B.j,null,null,null)
B.f4=new A.b("pub.dev",B.bw,null,null)
B.eD=new A.E(5,null,null,null)
B.bx=new A.o(B.u,11,B.j,null,null,null)
B.hu=new A.b("\u2197",B.bx,null,null)
B.k6=s([B.iU,B.al,B.f4,B.eD,B.hu],t.p)
B.et=new A.Z(B.k6,B.d,B.a,B.b,null)
B.kS=new A.o(B.f,null,null,"JetBrains Mono",null,null)
B.hQ=new A.b("$ ",B.kS,null,null)
B.b4=new A.x("",4293060848)
B.kQ=new A.o(B.b4,13,null,"JetBrains Mono",null,null)
B.hX=new A.b("dart pub global activate flart && flart create my_app",B.kQ,null,null)
B.jp=s([B.hQ,B.hX],t.p)
B.ev=new A.Z(B.jp,B.d,B.a,B.O,null)
B.b5=new A.x("",4278464286)
B.kW=new A.o(B.b5,15,B.j,null,null,null)
B.h0=new A.b("Get Started",B.kW,null,null)
B.H=new A.E(8,null,null,null)
B.iR=new A.N("arrow_forward",16,B.b5,null,null,null)
B.k4=s([B.h0,B.H,B.iR],t.p)
B.ew=new A.Z(B.k4,B.d,B.a,B.O,null)
B.j3=new A.N("info_outline",16,B.a4,null,null,null)
B.K=new A.o(B.p,null,null,null,null,null)
B.ih=new A.b("Hover over me for Tooltip",B.K,null,null)
B.ji=s([B.j3,B.H,B.ih],t.p)
B.ey=new A.Z(B.ji,B.d,B.a,B.O,null)
B.eA=new A.E(0,0,null,null)
B.U=new A.E(12,null,null,null)
B.eB=new A.E(14,null,null,null)
B.lb=new A.o(B.n,13,null,null,null,1.5)
B.fV=new A.b("The lightweight web framework for Dart.\nPure Dart Virtual DOM, zero CanvasKit overhead, 100% Flutter API parity.",B.lb,null,null)
B.eG=new A.E(300,null,B.fV,null)
B.eI=new A.E(null,14,null,null)
B.J=new A.E(null,20,null,null)
B.bj=new A.E(null,24,null,null)
B.eJ=new A.E(null,28,null,null)
B.eK=new A.E(null,2,null,null)
B.i=new A.E(null,32,null,null)
B.eL=new A.E(null,36,null,null)
B.V=new A.E(null,4,null,null)
B.ac=new A.E(null,64,null,null)
B.bk=new A.E(null,6,null,null)
B.bu=new A.o(B.W,11,B.j,null,null,null)
B.fo=new A.b("Top-Left Badge",B.bu,null,null)
B.bS=new A.h(B.f,B.m,null,null,null,null)
B.e4=new A.P(B.fo,null,null,null,null,B.t,null,B.bS,null,null,null)
B.ek=new A.bG(B.e4,16,16,null,null,null)
B.lf=new A.o(B.n,null,B.j,null,null,null)
B.hV=new A.b("Stack Base Layer",B.lf,null,null)
B.dn=new A.ad(B.hV,null)
B.hi=new A.b("Bottom-Right",B.bu,null,null)
B.c3=new A.h(B.k,B.m,null,null,null,null)
B.e1=new A.P(B.hi,null,null,null,null,B.t,null,B.c3,null,null,null)
B.ej=new A.bG(B.e1,null,null,16,16,null)
B.jC=s([B.ek,B.dn,B.ej],t.p)
B.lF=new A.h2(0,"loose")
B.eM=new A.cr(B.jC,B.aZ,null)
B.a6=new A.aY("800")
B.C=new A.o(B.p,36,B.a6,null,null,null)
B.eN=new A.b("Declarative Routing & History",B.C,null,null)
B.eO=new A.b("+1",null,null,null)
B.eQ=new A.b("Switch:",B.K,null,null)
B.x=new A.o(B.n,16,null,null,null,null)
B.eS=new A.b("Modal layers and conditional rendering: Dialog, AlertDialog, BottomSheet, Divider, VerticalDivider, Opacity, and Visibility.",B.x,null,null)
B.eT=new A.b("Checkbox:",B.K,null,null)
B.eU=new A.b("Virtual DOM & Core Architecture",B.C,null,null)
B.eY=new A.b("Show Feedback Toast",null,null,null)
B.aB=new A.o(B.a4,11,B.j,null,null,null)
B.f_=new A.b("ARCHITECTURE",B.aB,null,null)
B.f1=new A.b("Layout & Structure Widgets",B.C,null,null)
B.bA=new A.o(B.p,28,B.j,null,null,null)
B.f5=new A.b("Explore the 9 Widget Categories",B.bA,null,null)
B.f7=new A.b("Radio (Option 1):",B.K,null,null)
B.f9=new A.b("Desktop (620px)",null,null,null)
B.fa=new A.b("Add",null,null,null)
B.fb=new A.b("Share your thoughts on FlartDart 2.2.0 \u2014 we love hearing from the community.",B.E,null,null)
B.ff=new A.b("Visible Element",B.ad,null,null)
B.fh=new A.b("Cancel",null,null,null)
B.fj=new A.b("Confirm",null,null,null)
B.fl=new A.b("Engineered for Peak Web Performance",B.bA,B.Y,null)
B.fn=new A.b("Buttons & Gesture Widgets",B.C,null,null)
B.fq=new A.b("ElevatedButton",null,null,null)
B.aF=new A.o(B.L,11,B.j,null,null,null)
B.fr=new A.b("CATEGORY 3 \u2022 WIDGET CATALOG",B.aF,null,null)
B.fs=new A.b("CATEGORY 7 \u2022 WIDGET CATALOG",B.aF,null,null)
B.ft=new A.b("Modern visual aesthetics without raw CSS: BoxDecoration, Border, BorderRadius, BoxShadow, LinearGradient, ClipRRect, ClipOval, and DecoratedBox.",B.x,null,null)
B.fu=new A.b("Confirm Action",B.aA,null,null)
B.fw=new A.b("Visual assets and user feedback: Image, Icon, CircularProgressIndicator, LinearProgressIndicator, Tooltip, and SnackBar.",B.x,null,null)
B.l2=new A.o(B.p,15,B.M,null,null,null)
B.fx=new A.b("Explore Widgets (100+)",B.l2,null,null)
B.an=new A.aY("700")
B.ld=new A.o(B.f,11,B.an,null,null,null)
B.fz=new A.b("v2.2.0",B.ld,null,null)
B.fB=new A.b("Capture user data with validation: TextField, TextFormField, Form, Checkbox, Radio, Switch, Slider, and DropdownButton.",B.x,null,null)
B.aH=new A.o(B.n,14,B.M,null,null,null)
B.fG=new A.b("Slider Control",B.aH,null,null)
B.by=new A.o(B.f,13,B.M,null,null,null)
B.fI=new A.b("Flart v2.2.0 \u2022 Pure Dart Web Framework",B.by,null,null)
B.fJ=new A.b("Counter State",B.aH,null,null)
B.fM=new A.b("Mobile (260px)",null,null,null)
B.fO=new A.b("Fundamental building blocks for assembling web UIs: Container, Text, RichText, Padding, Center, SizedBox, and ColoredBox.",B.x,null,null)
B.fP=new A.b("FlartDart",B.aA,null,null)
B.fQ=new A.b("Rating: ",B.Q,null,null)
B.fS=new A.b("CATEGORY 5 \u2022 WIDGET CATALOG",B.aB,null,null)
B.fR=new A.b("CATEGORY 8 \u2022 WIDGET CATALOG",B.aB,null,null)
B.fX=new A.b("Toggle AnimatedContainer",null,null,null)
B.fY=new A.b("OutlinedButton",null,null,null)
B.bv=new A.o(B.n,15,null,null,null,null)
B.h2=new A.b("Flart compiles to pure semantic HTML DOM with zero CanvasKit or WebAssembly baggage.",B.bv,B.Y,null)
B.h3=new A.b("Scrollable & Data-Driven Widgets",B.C,null,null)
B.kV=new A.o(B.L,null,B.j,null,null,null)
B.h4=new A.b("Fading Content Box",B.kV,null,null)
B.h5=new A.b("Form & Interactive Input Widgets",B.C,null,null)
B.h9=new A.b("TextButton",null,null,null)
B.ha=new A.b("Manage local UI state and global application data with zero external boilerplate.",B.x,null,null)
B.hb=new A.b("ESC",B.bx,null,null)
B.hd=new A.b("Responsive Design & ScreenUtil",B.C,null,null)
B.he=new A.b("Interactive buttons and touch handlers: ElevatedButton, TextButton, OutlinedButton, IconButton, GestureDetector, and InkWell.",B.x,null,null)
B.hf=new A.b("Smooth 60 FPS transitions and declarative motion: AnimatedContainer, AnimatedOpacity, FadeTransition, SlideTransition, and FDAnimate.",B.x,null,null)
B.hg=new A.b("Installation & Setup",B.C,null,null)
B.la=new A.o(B.f,10,B.j,null,null,null)
B.hj=new A.b("LIVE RENDER",B.la,null,null)
B.hm=new A.b("State Management",B.C,null,null)
B.ho=new A.b("Virtualized and continuous scrolling for large datasets: ListView, ListView.builder, GridView, GridView.count, SingleChildScrollView, and Scrollbar.",B.x,null,null)
B.kO=new A.o(B.u,12,B.j,null,0.5,null)
B.hp=new A.b("Quick Suggestions",B.kO,null,null)
B.l_=new A.o(B.u,11,B.j,null,0.8,null)
B.hq=new A.b("ECOSYSTEM",B.l_,null,null)
B.hr=new A.b("CORE CONCEPTS",B.aF,null,null)
B.hs=new A.b("How Flart brings Flutter's component model to the open web with microsecond DOM updates and zero canvas overhead.",B.x,null,null)
B.ht=new A.b("100+ production widgets with zero rawCss escape hatches and complete Flutter API parity.",B.bv,null,null)
B.hv=new A.b("Launch AlertDialog",null,null,null)
B.hw=new A.b("Get your Flart application up and running in less than 60 seconds with the Flart CLI.",B.x,null,null)
B.aq=new A.o(B.k,11,B.j,null,null,null)
B.hx=new A.b("GETTING STARTED",B.aq,null,null)
B.hA=new A.b("Community Developer Feedback",B.v,null,null)
B.kP=new A.o(B.n,null,null,null,null,null)
B.hB=new A.b("Width: ",B.kP,null,null)
B.hC=new A.b("Flart Task Manager",B.ar,null,null)
B.aD=new A.o(B.G,11,B.j,null,null,null)
B.hF=new A.b("NAVIGATION",B.aD,null,null)
B.hG=new A.b("Interact with real Flart widgets rendered directly into the HTML DOM below.",B.Q,null,null)
B.hI=new A.b("Decoration & Styling Widgets",B.C,null,null)
B.hK=new A.b("Are you sure you want to proceed with this operation?",B.Q,B.Y,null)
B.hL=new A.b("Reactive Switch",B.aH,null,null)
B.hM=new A.b("Deep-linking, browser history synchronization, route guards, and transitions with PageNavigator.",B.x,null,null)
B.hR=new A.b("Flexbox and multi-child layout widgets: Column, Row, Flex, Expanded, Spacer, Wrap, Stack, Positioned, and Align.",B.x,null,null)
B.hT=new A.b("-1",null,null,null)
B.hW=new A.b("Media & Feedback Widgets",B.C,null,null)
B.hZ=new A.b("Utility & Overlay Widgets",B.C,null,null)
B.i_=new A.b("CATEGORY 4 \u2022 WIDGET CATALOG",B.aD,null,null)
B.i0=new A.b("CATEGORY 9 \u2022 WIDGET CATALOG",B.aD,null,null)
B.i1=new A.b("Basic & Core Widgets",B.C,null,null)
B.i5=new A.b("CATEGORY 2 \u2022 WIDGET CATALOG",B.aq,null,null)
B.i6=new A.b("CATEGORY 6 \u2022 WIDGET CATALOG",B.aq,null,null)
B.i8=new A.b("CATEGORY 1 \u2022 WIDGET CATALOG",B.aG,null,null)
B.i9=new A.b("v2.2.0 STABLE",B.aG,null,null)
B.ib=new A.b("Tablet (440px)",null,null,null)
B.ic=new A.b("Lightweight pure Dart web framework at a glance",B.ao,null,null)
B.kK=new A.o(B.p,20,B.a6,null,-0.6,null)
B.id=new A.b("Flart",B.kK,null,null)
B.ig=new A.b("Animation & Motion Widgets",B.C,null,null)
B.ii=new A.b("Build fluid, pixel-perfect UIs that automatically scale across mobile, tablet, desktop, and ultra-wide displays.",B.x,null,null)
B.ij=new A.b("CORE CONCEPTS",B.aq,null,null)
B.iv=new A.F("#000000",null)
B.am=new A.F("transparent",null)
B.iA=new A.F("#E3F2FD",null)
B.ir=new A.F("#BBDEFB",null)
B.iC=new A.F("#90CAF9",null)
B.it=new A.F("#64B5F6",null)
B.iq=new A.F("#42A5F5",null)
B.ix=new A.F("#2196F3",null)
B.iw=new A.F("#1E88E5",null)
B.iD=new A.F("#1976D2",null)
B.iy=new A.F("#1565C0",null)
B.iE=new A.F("#0D47A1",null)
B.kx=new A.bH([50,B.iA,100,B.ir,200,B.iC,300,B.it,400,B.iq,500,B.ix,600,B.iw,700,B.iD,800,B.iy,900,B.iE],t.r)
B.iF=new A.cu(B.kx,"#2196F3",null)
B.iz=new A.F("#FFCDD2",null)
B.is=new A.F("#EF9A9A",null)
B.iu=new A.F("#F44336",null)
B.iB=new A.F("#B71C1C",null)
B.kw=new A.bH([100,B.iz,200,B.is,500,B.iu,900,B.iB],t.r)
B.iG=new A.cu(B.kw,"#F44336",null)
B.iH=new A.aY("500")
B.iI=new A.aY("400")
B.lC=new A.fK(0,"count")
B.lD=new A.fL(0,"deferToChild")
B.iJ=new A.bI(null)
B.iK=new A.N("thumb_up",24,B.f,null,null,null)
B.iL=new A.N("arrow_forward",14,B.u,null,null,null)
B.iM=new A.N("search",18,B.p,null,null,null)
B.iN=new A.N("close",16,B.u,null,null,null)
B.iO=new A.N("chevron_right",18,B.u,null,null,null)
B.iS=new A.N("grid_view",20,B.f,null,null,null)
B.iX=new A.N("info",32,B.u,null,null,null)
B.j1=new A.N("search",20,B.f,null,null,null)
B.lE=new A.fM(1,"lazy")
B.bl=new A.bK(null)
B.bm=new A.ed(null)
B.iW=new A.N("favorite",28,B.b_,null,null,null)
B.j0=new A.N("star",28,B.G,null,null,null)
B.iY=new A.N("bolt",28,B.k,null,null,null)
B.iQ=new A.N("check_circle",28,B.f,null,null,null)
B.j_=new A.N("settings",28,B.n,null,null,null)
B.jn=s([B.iW,B.j0,B.iY,B.iQ,B.j_],t.p)
B.R=new A.eL(0,"start")
B.ip=new A.ct(B.jn,B.d,B.R,24,16,null)
B.j4=new A.L("Material Icons","Comprehensive icon glyphs rendered cleanly in vector SVG/web format.",B.ip,"Icon(Icons.favorite, color: Colors.red)\nIcon(Icons.star, color: Colors.amber)\nIcon(Icons.bolt, color: Colors.blue)",null)
B.dz=new A.dR(null)
B.eC=new A.E(24,null,null,null)
B.dy=new A.dQ(null)
B.k7=s([B.dz,B.eC,B.dy],t.p)
B.N=new A.be(1,"center")
B.er=new A.Z(B.k7,B.N,B.a,B.b,null)
B.j5=new A.L("ClipRRect & ClipOval","Smooth rounded and circular clipping for arbitrary child widgets.",B.er,"Row(\n  children: [\n    ClipRRect(\n      borderRadius: BorderRadius.circular(16),\n      child: Container(width: 100, height: 100, color: Colors.green),\n    ),\n    ClipOval(\n      child: Container(width: 100, height: 100, color: Colors.blue),\n    ),\n  ],\n)",null)
B.fd=new A.b("Section One",B.K,null,null)
B.bf=new A.co(B.l,null)
B.fH=new A.b("Section Two",B.K,null,null)
B.i3=new A.b("Section Three",B.K,null,null)
B.ju=s([B.fd,B.bf,B.fH,B.bf,B.i3],t.p)
B.dP=new A.R(B.ju,B.d,B.a,B.b,null)
B.e2=new A.P(B.dP,null,320,null,null,B.ab,null,B.af,null,null,null)
B.j6=new A.L("Divider & VerticalDivider","Visual thin lines separating content blocks horizontally and vertically.",B.e2,"Column(\n  children: [\n    Text('Section One'),\n    Divider(color: Colors.grey),\n    Text('Section Two'),\n  ],\n)",null)
B.fv=new A.b("Box 1",B.Z,null,null)
B.ds=new A.ad(B.fv,null)
B.eE=new A.E(80,60,B.ds,null)
B.dA=new A.bF(B.k,B.eE,null)
B.bg=new A.E(16,null,null,null)
B.hl=new A.b("Box 2",B.Z,null,null)
B.dr=new A.ad(B.hl,null)
B.eF=new A.E(80,60,B.dr,null)
B.dC=new A.bF(B.L,B.eF,null)
B.hn=new A.b("Box 3",B.Z,null,null)
B.du=new A.ad(B.hn,null)
B.eH=new A.E(80,60,B.du,null)
B.dB=new A.bF(B.f,B.eH,null)
B.jy=s([B.dA,B.bg,B.dC,B.bg,B.dB],t.p)
B.ez=new A.Z(B.jy,B.N,B.a,B.b,null)
B.j7=new A.L("SizedBox & ColoredBox","High performance structural spacing and background tinting.",B.ez,"Row(\n  children: [\n    ColoredBox(\n      color: Colors.blue,\n      child: SizedBox(width: 80, height: 60, child: Center(child: Text('Box 1'))),\n    ),\n    const SizedBox(width: 16),\n    ColoredBox(\n      color: Colors.purple,\n      child: SizedBox(width: 80, height: 60, child: Center(child: Text('Box 2'))),\n    ),\n  ],\n)",null)
B.kZ=new A.o(B.W,15,B.j,null,null,null)
B.fW=new A.b("Gradient with Glow Shadow",B.kZ,null,null)
B.dt=new A.ad(B.fW,null)
B.bp=new A.bQ(8)
B.cR=new A.x("",1715176182)
B.cb=new A.aj(B.bp,20,B.cR)
B.jV=s([B.cb],t.V)
B.jg=s([B.k,B.L],A.bs("Q<F>"))
B.ce=new A.fI()
B.bZ=new A.h(null,B.aO,B.jV,null,B.ce,null)
B.e8=new A.P(B.dt,null,280,null,null,B.a5,null,B.bZ,null,null,null)
B.j8=new A.L("LinearGradient & Multi BoxShadow","Rich color gradients and soft multi-layer drop shadows.",B.e8,"Container(\n  decoration: BoxDecoration(\n    gradient: const LinearGradient(\n      colors: [Color(0xFF3B82F6), Color(0xFF8B5CF6)],\n      begin: Alignment.topLeft,\n      end: Alignment.bottomRight,\n    ),\n    borderRadius: BorderRadius.circular(18),\n    boxShadow: const [\n      BoxShadow(\n        color: Color(0x663B82F6),\n        blurRadius: 20,\n        offset: Offset(0, 8),\n      ),\n    ],\n  ),\n  child: const Text('Gradient with Glow Shadow'),\n)",null)
B.dw=new A.bE(B.f,null)
B.bh=new A.E(32,null,null,null)
B.dv=new A.bE(B.k,null)
B.dx=new A.bE(B.L,null)
B.js=s([B.dw,B.bh,B.dv,B.bh,B.dx],t.p)
B.ex=new A.Z(B.js,B.N,B.a,B.b,null)
B.ei=new A.dZ(null)
B.e9=new A.P(B.ei,null,260,null,null,null,null,null,null,null,null)
B.jw=s([B.ex,B.bj,B.e9],t.p)
B.dN=new A.R(B.jw,B.d,B.a,B.b,null)
B.j9=new A.L("Progress Indicators","Circular and linear loading feedback indicators.",B.dN,"// Circular loading spinner\nCircularProgressIndicator(color: Colors.green)\n\n// Linear indeterminate loading bar\nLinearProgressIndicator(color: Colors.green)",null)
B.bn=new A.ej(null)
B.jd=new A.fU(1,"builder")
B.kC=new A.bQ(12)
B.cD=new A.x("",2281701376)
B.c9=new A.aj(B.kC,32,B.cD)
B.je=s([B.c9],t.V)
B.cO=new A.x("",1711276032)
B.c6=new A.aj(B.bp,24,B.cO)
B.jx=s([B.c6],t.V)
B.fC=new A.b("Option 1",null,null,null)
B.ec=new A.aV("Option 1",B.fC,null,t.A)
B.fD=new A.b("Option 2",null,null,null)
B.ed=new A.aV("Option 2",B.fD,null,t.A)
B.fE=new A.b("Option 3",null,null,null)
B.ee=new A.aV("Option 3",B.fE,null,t.A)
B.jH=s([B.ec,B.ed,B.ee],A.bs("Q<aV<f>>"))
B.kD=new A.bQ(6)
B.cF=new A.x("",855638016)
B.c8=new A.aj(B.kD,12,B.cF)
B.jN=s([B.c8],t.V)
B.cJ=new A.x("",570425344)
B.ca=new A.aj(B.ay,16,B.cJ)
B.jQ=s([B.ca],t.V)
B.jT=s([],t.s)
B.B={title:0,path:1,category:2,description:3,keywords:4}
B.jt=s(["install","cli","setup","pubspec","getting started","create","new","flart","runapp"],t.s)
B.ko=new A.X(B.B,["Getting Started & Installation","/docs/installation","Guide","How to install the Flart CLI, create new projects, and configure pubspec.yaml.",B.jt],t.R)
B.jE=s(["vdom","virtual dom","reconciler","diff","patch","performance","dom","architecture","canvaskit","lightweight"],t.s)
B.kj=new A.X(B.B,["Virtual DOM & Architecture","/docs/architecture","Architecture","Deep dive into Flart's pure Dart Virtual DOM, reconciler, and zero-CanvasKit DOM rendering.",B.jE],t.R)
B.jL=s(["responsive","screenutil","mobile","tablet","desktop","breakpoints","layoutbuilder","mediaquery","scaling"],t.s)
B.kn=new A.X(B.B,["Responsive Design & ScreenUtil","/docs/responsive","Core","Master responsive layouts with ScreenUtil (.w, .h, .sp), LayoutBuilder, and MediaQuery breakpoints.",B.jL],t.R)
B.jz=s(["state","setstate","valuenotifier","valuelistenablebuilder","reactive","lifecycle","initstate","dispose"],t.s)
B.kq=new A.X(B.B,["State Management: Stateful & Reactive","/docs/state","Core","StatefulWidget, setState, ValueNotifier, and lightweight reactive state without complex boilerplate.",B.jz],t.R)
B.kb=s(["routing","pagenavigator","navigation","history","hash","routes","guards","transitions","push","pop"],t.s)
B.ku=new A.X(B.B,["Declarative Routing & History","/docs/routing","Navigation","PageNavigator, pushNamed, replaceNamed, hash-based URLs, route guards, and transitions.",B.kb],t.R)
B.jP=s(["text","container","icon","image","sizedbox","center","opacity","basic","core"],t.s)
B.km=new A.X(B.B,["Basic & Core Widgets","/docs/widgets/basic","Widgets","Text, Container, Icon, Image, SizedBox, Center, Opacity, and other fundamental building blocks.",B.jP],t.R)
B.jG=s(["row","column","stack","wrap","expanded","flexible","align","padding","layout"],t.s)
B.kk=new A.X(B.B,["Layout & Structure Widgets","/docs/widgets/layout","Widgets","Row, Column, Stack, Wrap, Expanded, Flexible, Align, Padding, and advanced layout systems.",B.jG],t.R)
B.jM=s(["decoration","gradient","border","shadow","cliprrect","style","radius","color"],t.s)
B.kt=new A.X(B.B,["Decoration & Style Widgets","/docs/widgets/decoration","Widgets","BoxDecoration, gradients, borders, shadows, ClipRRect, and visual styling.",B.jM],t.R)
B.k9=s(["listview","scroll","gridview","singlechild","scrollable","list"],t.s)
B.kp=new A.X(B.B,["Scrollables & Lists","/docs/widgets/scrollables","Widgets","ListView, SingleChildScrollView, GridView, and scrollable containers.",B.k9],t.R)
B.kd=s(["textfield","checkbox","radio","switch","slider","dropdown","form","input"],t.s)
B.kl=new A.X(B.B,["Form & Input Widgets","/docs/widgets/inputs","Widgets","TextField, Checkbox, Radio, Switch, Slider, DropdownButton, and form controls.",B.kd],t.R)
B.jq=s(["button","elevated","text","outlined","icon","gesture","inkwell","tap"],t.s)
B.ks=new A.X(B.B,["Buttons & Gestures","/docs/widgets/buttons","Widgets","ElevatedButton, TextButton, OutlinedButton, IconButton, GestureDetector, and InkWell.",B.jq],t.R)
B.jo=s(["animation","animated","transition","opacity","implicit","tween"],t.s)
B.kr=new A.X(B.B,["Animations","/docs/widgets/animation","Widgets","AnimatedContainer, AnimatedOpacity, implicit animations, and transition widgets.",B.jo],t.R)
B.jY=s(["image","progress","circular","linear","tooltip","media","feedback"],t.s)
B.kh=new A.X(B.B,["Media & Feedback","/docs/widgets/media","Widgets","Image, CircularProgressIndicator, LinearProgressIndicator, Tooltip, and media widgets.",B.jY],t.R)
B.jU=s(["visibility","layoutbuilder","mediaquery","builder","utility","modal"],t.s)
B.ki=new A.X(B.B,["Utility & Modals","/docs/widgets/utility","Widgets","Visibility, LayoutBuilder, MediaQuery, Builder, and utility widgets.",B.jU],t.R)
B.k3=s([B.ko,B.kj,B.kn,B.kq,B.ku,B.km,B.kk,B.kt,B.kp,B.kl,B.ks,B.kr,B.kh,B.ki],t.X)
B.ke=new A.be(2,"end")
B.kf=new A.be(5,"spaceEvenly")
B.kB={tabindex:0,class:1}
B.kg=new A.X(B.kB,["0","flart-gesture-detector"],t.B)
B.kA={}
B.kv=new A.X(B.kA,[],t.B)
B.ky=new A.bO(null)
B.kz=new A.el(null)
B.br=new A.bS(null)
B.w=new A.h0(0,"none")
B.bs=new A.ex(null)
B.kE=new A.ez(null)
B.bt=new A.bZ(null)
B.kF=new A.eE(4,"start")
B.kG=new A.h3(0,"text")
B.l0=new A.o(B.f,16,B.j,null,null,null)
B.kH=new A.c_("100% Flutter API parity ",B.l0,null)
B.kJ=new A.c_("with zero canvas baggage.",B.x,null)
B.jh=s([B.kH,B.kJ],A.bs("Q<c_>"))
B.kI=new A.c_("Flart provides ",B.x,B.jh)
B.kN=new A.o(B.f,36,B.a6,null,null,null)
B.kR=new A.o(B.n,13,null,null,null,1.4)
B.kT=new A.o(B.f,12,null,null,null,null)
B.kU=new A.o(B.k,12,B.j,null,null,null)
B.kX=new A.o(B.p,28,B.a6,null,null,null)
B.kY=new A.o(B.p,12,null,null,null,null)
B.l1=new A.o(B.k,10,B.j,null,null,null)
B.l4=new A.o(B.f,13,B.j,null,null,null)
B.l7=new A.o(B.u,13,null,null,null,null)
B.aE=new A.o(B.u,11,B.an,null,0.8,null)
B.l8=new A.o(B.p,16,null,null,null,null)
B.ap=new A.o(B.p,13,null,null,null,null)
B.lc=new A.o(B.n,13,B.M,null,null,null)
B.le=new A.o(B.p,14,B.j,null,null,null)
B.lg=new A.o(B.b4,13,null,"JetBrains Mono",null,1.6)
B.lh=new A.o(B.p,14,B.M,null,null,null)
B.li=new A.o(B.n,12,B.M,null,0.8,null)
B.lj=new A.o(B.k,28,B.a6,null,null,null)
B.ll=A.aI("oX")
B.lm=A.aI("oY")
B.ln=A.aI("mC")
B.lo=A.aI("mD")
B.lp=A.aI("mG")
B.lq=A.aI("mH")
B.lr=A.aI("mI")
B.ls=A.aI("n8")
B.lt=A.aI("n9")
B.lu=A.aI("na")
B.lv=A.aI("jT")
B.lw=new A.hc(!1)
B.lx=new A.c3(null)
B.bB=new A.eL(2,"center")
B.ly=new A.eT(null)})();(function staticFields(){$.iI=null
$.ar=A.a([],A.bs("Q<M>"))
$.kQ=null
$.kl=null
$.kk=null
$.lW=null
$.lO=null
$.lZ=null
$.jv=null
$.jD=null
$.k9=null
$.c7=null
$.dr=null
$.ds=null
$.k5=!1
$.a1=B.a2
$.lK=null
$.jm=null
$.lJ=null
$.a4=A.a([],t.p)
$.bh=A.l(t.N,t.Q)
$.mT=null
$.mX=null
$.kJ=!1
$.mU=null
$.bg=B.w
$.jq=null
$.lE=A.jP(t.N)
$.kC=A.l(t.n,t.O)
$.ec=A.l(t.n,A.bs("bU<y<U>>"))
$.f9=A.l(t.N,t.k)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"p_","m3",()=>A.jy("_$dart_dartClosure"))
s($,"oZ","kf",()=>A.jy("_$dart_dartClosure_dartJSInterop"))
s($,"pl","mk",()=>A.a([new J.ef()],A.bs("Q<cT>")))
s($,"p2","m4",()=>A.aP(A.h8({
toString:function(){return"$receiver$"}})))
s($,"p3","m5",()=>A.aP(A.h8({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"p4","m6",()=>A.aP(A.h8(null)))
s($,"p5","m7",()=>A.aP(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"p8","ma",()=>A.aP(A.h8(void 0)))
s($,"p9","mb",()=>A.aP(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"p7","m9",()=>A.aP(A.l_(null)))
s($,"p6","m8",()=>A.aP(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"pb","md",()=>A.aP(A.l_(void 0)))
s($,"pa","mc",()=>A.aP(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"pe","kg",()=>A.nf())
s($,"pk","mj",()=>A.mS(4096))
s($,"pi","mh",()=>new A.jb().$0())
s($,"pj","mi",()=>new A.ja().$0())
s($,"pf","me",()=>A.mR(A.nW(A.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.Y))))
s($,"pg","mf",()=>A.kT("^[\\-\\.0-9A-Z_a-z~]*$"))
s($,"ph","mg",()=>typeof URLSearchParams=="function")
s($,"pc","du",()=>A.kr(A.bs("G<f,ay>")))
s($,"pd","cc",()=>A.kr(t.N))})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bP,SharedArrayBuffer:A.bP,ArrayBufferView:A.cM,DataView:A.em,Float32Array:A.en,Float64Array:A.eo,Int16Array:A.ep,Int32Array:A.eq,Int8Array:A.er,Uint16Array:A.es,Uint32Array:A.et,Uint8ClampedArray:A.cN,CanvasPixelArray:A.cN,Uint8Array:A.cO})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.a7.$nativeSuperclassTag="ArrayBufferView"
A.d8.$nativeSuperclassTag="ArrayBufferView"
A.d9.$nativeSuperclassTag="ArrayBufferView"
A.cK.$nativeSuperclassTag="ArrayBufferView"
A.da.$nativeSuperclassTag="ArrayBufferView"
A.db.$nativeSuperclassTag="ArrayBufferView"
A.cL.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$1$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.oN
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
