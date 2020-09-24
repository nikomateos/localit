(function () {var b={};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}var h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.domain,a=void 0===r?"":r,o=t.type,n=void 0===o?"localStorage":o;f(this,e),this.store="localStorage"==n?localStorage:sessionStorage,this.DOMAIN=a?"".concat(a,"_"):"",this.EXPIRE="_expiration_date"}return g(e,[{key:"set",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e)return console.error("Localit: provide a key to store a value");"object"==d(t)&&(t=JSON.stringify(t)),this.store.setItem("".concat(this.getFullKey(e)),t),r&&this.setExpiration(e,r)}},{key:"setExpiration",value:function(e,t){if(t.includes("h")||t.includes("d")||t.includes("m")){var r=new Date,a=null;t.includes("m")&&(a=parseInt(t.replace("m","")),r.setMinutes(r.getMinutes()+a)),t.includes("h")&&(a=parseInt(t.replace("h","")),r.setHours(r.getHours()+a)),t.includes("d")&&(a=parseInt(t.replace("d","")),r.setDate(r.getDate()+a)),this.store.setItem("".concat(this.getFullKey(e)).concat(this.EXPIRE),JSON.stringify(r))}}},{key:"get",value:function(e){if(this.hasExpirationDate(this.getFullKey(e))&&this.hasExpired(this.getFullKey(e)))return this.store.remove(e),null;try{return JSON.parse(this.store.getItem(this.getFullKey(e)))}catch(t){return this.store.getItem(this.getFullKey(e))}}},{key:"remove",value:function(e){this.store.removeItem(this.getFullKey(e)),this.store.removeItem("".concat(this.getFullKey(e)).concat(this.EXPIRE))}},{key:"setDomain",value:function(e){this.DOMAIN="".concat(e,"_")}},{key:"clearDomain",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.DOMAIN,t=0,r=Object.keys(localStorage);t<r.length;t++){var a=r[t];a.includes(e)&&this.store.removeItem(a)}}},{key:"hasExpirationDate",value:function(e){return null!==this.store.getItem("".concat(this.getFullKey(e)).concat(this.EXPIRE))}},{key:"hasExpired",value:function(e){var t=JSON.parse(this.store.getItem("".concat(this.getFullKey(e)).concat(this.EXPIRE)));return new Date>new Date(t)}},{key:"getFullKey",value:function(e){return"".concat(this.DOMAIN).concat(e)}},{key:"bust",value:function(){this.store.clear()}}]),e}();b.Localit=h;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b}else if(typeof define==="function"&&define.amd){define(function(){return b})}})();