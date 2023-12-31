(()=>{"use strict";class t{static counter=0;static tasks=[];constructor(e="New Task",n="New Task",r=format(new Date,"d MMMM yyyy"),a="L",o=[],i=!1){this._title=e,this._description=n,this._dueDate=r,this._priority=a,this._notes=o,this._completionStatus=i,this._id=++t.counter,t.tasks.push(this)}get id(){return this._id}set id(t){this._id=t}get completionStatus(){return this._completionStatus}set completionStatus(t){this._completionStatus=t}get title(){return this._title}set title(t){this._title=t}get description(){return this._description}set description(t){this._description=t}get dueDate(){return this._dueDate}set dueDate(t){this._dueDate=t}get priority(){return this._priority}set priority(t){this._priority=t}get notes(){return this._notes}editNote(t,e){this._notes[t]=e}addNote(t){this._notes.push(t)}removeNote(t){this._notes.splice(t,1)}completeTodo(){this._completionStatus=!0}}const e=t;class n{static projects=[];static counter=0;constructor(t="New Project",e="New Project"){this._name=t,this._description=e,this._tasks=[],n.projects.push(this),this._id=++n.counter}static get Projects(){return n.projects}static deleteProject(t){n.projects=n.projects.filter((e=>e._id!=t))}static deleteTodo(t){e.tasks=e.tasks.filter((e=>e._id!=t)),n.projects.forEach((e=>{e._tasks=e._tasks.filter((e=>e._id!=t))}))}get name(){return this._name}set name(t){this._name=t}get description(){return this._description}set description(t){this._description=t}get tasks(){return this._tasks}addTask(t){this._tasks.push(t)}removeTask(t){this._tasks=this._tasks.filter((e=>e._id!=t))}}const r=n;function a(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function o(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=a(t);return!isNaN(Number(n))}const i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const u={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function d(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function h(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let c;return c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}var l;const m={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=i[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:(t,e,n,r)=>c[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:d({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:d({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:d({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:d({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:d({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(l={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(l.matchPattern);if(!n)return null;const r=n[0],a=t.match(l.parsePattern);if(!a)return null;let o=l.valueCallback?l.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let f={};function g(){return f}Math.pow(10,8);const w=6048e5,b=864e5;function y(t){const e=a(t);return e.setHours(0,0,0,0),e}function p(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function M(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function k(t){const e=a(t);return function(t,e){const n=y(t),r=y(e),a=n.getTime()-p(n),o=r.getTime()-p(r);return Math.round((a-o)/b)}(e,function(t){const e=a(t),n=M(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function D(t,e){const n=g(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=a(t),i=o.getDay(),s=(i<r?7:0)+i-r;return o.setDate(o.getDate()-s),o.setHours(0,0,0,0),o}function v(t){return D(t,{weekStartsOn:1})}function S(t){const e=a(t),n=e.getFullYear(),r=M(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=v(r),i=M(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=v(i);return e.getTime()>=o.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function x(t){const e=a(t),n=v(e).getTime()-function(t){const e=S(t),n=M(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),v(n)}(e).getTime();return Math.round(n/w)+1}function T(t,e){const n=a(t),r=n.getFullYear(),o=g(),i=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,s=M(t,0);s.setFullYear(r+1,0,i),s.setHours(0,0,0,0);const u=D(s,e),c=M(t,0);c.setFullYear(r,0,i),c.setHours(0,0,0,0);const d=D(c,e);return n.getTime()>=u.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function P(t,e){const n=a(t),r=D(n,e).getTime()-function(t,e){const n=g(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=T(t,e),o=M(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),D(o,e)}(n,e).getTime();return Math.round(r/w)+1}function W(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const _={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return W("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):W(n+1,2)},d:(t,e)=>W(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>W(t.getHours()%12||12,e.length),H:(t,e)=>W(t.getHours(),e.length),m:(t,e)=>W(t.getMinutes(),e.length),s:(t,e)=>W(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return W(Math.floor(r*Math.pow(10,n-3)),e.length)}},Y={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return _.y(t,e)},Y:function(t,e,n,r){const a=T(t,r),o=a>0?a:1-a;return"YY"===e?W(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):W(o,e.length)},R:function(t,e){return W(S(t),e.length)},u:function(t,e){return W(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return W(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return _.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=P(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):W(a,e.length)},I:function(t,e,n){const r=x(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):W(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):_.d(t,e)},D:function(t,e,n){const r=k(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):W(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return W(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return W(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return W(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return _.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):_.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):_.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):_.s(t,e)},S:function(t,e){return _.S(t,e)},X:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return j(a);case"XXXX":case"XX":return N(a);default:return N(a,":")}},x:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return j(a);case"xxxx":case"xx":return N(a);default:return N(a,":")}},O:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+C(a,":");default:return"GMT"+N(a,":")}},z:function(t,e,n,r){const a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+C(a,":");default:return"GMT"+N(a,":")}},t:function(t,e,n,r){const a=r._originalDate||t;return W(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return W((r._originalDate||t).getTime(),e.length)}};function C(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+W(o,2)}function j(t,e){return t%60==0?(t>0?"-":"+")+W(Math.abs(t)/60,2):N(t,e)}function N(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+W(Math.floor(r/60),2)+e+W(r%60,2)}const O=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},q=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},E={p:q,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return O(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",O(r,e)).replace("{{time}}",q(a,e))}},H=["D","DD"],F=["YY","YYYY"];function L(t,e,n){if("YYYY"===t)throw new RangeError(`Use \`yyyy\` instead of \`YYYY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("YY"===t)throw new RangeError(`Use \`yy\` instead of \`YY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("D"===t)throw new RangeError(`Use \`d\` instead of \`D\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if("DD"===t)throw new RangeError(`Use \`dd\` instead of \`DD\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`)}const A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Q=/^'([^]*?)'?$/,B=/''/g,G=/[a-zA-Z]/;const X=function(t,e){e.innerHTML="",t.forEach((t=>{const n=document.createElement("li");n.setAttribute("id",t.id),n.classList.add(t.priority),n.classList.add(t.completionStatus),n.textContent=`${t.title} ${function(t,e,n){const r=g(),i=n?.locale??r.locale??m,s=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,u=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=a(t);if(!o(c))throw new RangeError("Invalid time value");const d={firstWeekContainsDate:s,weekStartsOn:u,locale:i,_originalDate:c};return e.match(z).map((function(t){const e=t[0];return"p"===e||"P"===e?(0,E[e])(t,i.formatLong):t})).join("").match(A).map((function(r){if("''"===r)return"'";const a=r[0];if("'"===a)return function(t){const e=t.match(Q);return e?e[1].replace(B,"'"):t}(r);const o=Y[a];if(o)return n?.useAdditionalWeekYearTokens||(s=r,-1===F.indexOf(s))||L(r,e,String(t)),!n?.useAdditionalDayOfYearTokens&&function(t){return-1!==H.indexOf(t)}(r)&&L(r,e,String(t)),o(c,r,i.localize,d);var s;if(a.match(G))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}(t.dueDate,"MMMM do, yyyy")}`,e.appendChild(n)}))},$=function(t){document.querySelector(".main-subtitle").textContent=t.target.textContent;let n=e.tasks.slice();const r=document.querySelector(".show-tasks");n=n.filter((e=>{return 1==t.target.value||(2==t.target.value?(n=e.dueDate,r=new Date,+y(n)==+y(r)):3==t.target.value?function(t,e,n){return+D(t,n)==+D(e,n)}(e.dueDate,new Date):4==t.target.value?function(t,e){const n=a(t),r=a(e);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}(e.dueDate,new Date):void 0);var n,r})),n.sort(((t,e)=>t.dueDate-e.dueDate)),X(n,r)},J=function(t){document.querySelector(".main-subtitle").textContent=t.target.textContent;let e=r.projects[parseInt(t.target.id)].tasks;console.log(e);const n=document.querySelector(".show-tasks");e.sort(((t,e)=>t.dueDate-e.dueDate)),X(e,n)},U=(new e("Test task","Test",new Date(2024,0,1)),new e("Brush Teeth","Use a toothbrush to brush my teeth",new Date(2024,0,12)));new e("Walk Dog","what da dog doin?",new Date(2024,0,7),"H"),new e("test 2","new1",new Date,"M",[],!0),console.log(U);const R=new r,I=new e("Work Out","Chest day",new Date(2024,0,2),"M"),V=new e("Work Out","Leg day",new Date(2024,0,3),"H"),K=new e("Work Out","Shoulders day",new Date(2024,0,5),"L");R.addTask(I),R.addTask(V),R.addTask(K),console.log(r.projects),console.log(r.projects[0]._tasks),function(){let t=e.tasks.slice();const n=document.querySelector(".show-tasks");t.sort(((t,e)=>t.dueDate-e.dueDate)),X(t,n)}(),document.querySelectorAll(".chronological > li").forEach((t=>{t.addEventListener("click",$)})),document.querySelectorAll(".projects > li").forEach((t=>{t.addEventListener("click",J)}))})();