(function(root){
const EU=['DE','NL','FR','BE','LU','IE','IT','ES','PT','AT','PL','CZ','DK','SE','FI','EE','LV','LT','MT','CY','GR','HR','SI','SK','HU','RO','BG'];
function num(v){return v===''||v==null||String(v).trim()===''?null:Number.isFinite(Number(v))?Number(v):null}
function evaluate(d){
 const revenues=d.revenues.map(num),hits=revenues.filter(v=>v!==null&&v>=750).length,missing=revenues.filter(v=>v===null).length;
 const invalid=revenues.some(v=>v!==null&&v<0)||['shRevenue','sbie'].some(k=>num(d[k])!==null&&num(d[k])<0);
 const supported=['2024','2025','2026'].includes(String(d.year))&&d.standard==='yes';
 const threshold=hits>=2?'yes':hits+missing<2?'no':'unknown';
 const scope=!supported||invalid||d.special!=='no'||d.germany==='unknown'||d.group!=='yes'?'review':d.germany==='no'||threshold==='no'?'no':threshold==='yes'?'yes':'unknown';
 const upper=[{country:d.upe},...d.parents],eu=upper.filter(p=>EU.includes(p.country)),structureUnknown=upper.some(p=>['unknown','OTHER'].includes(p.country));
 const role=d.upe==='DE'?'upe':d.single==='yes'?'single':d.upe==='unknown'||d.single!=='no'?'unknown':d.common==='yes'?'common':d.common!=='no'?'unknown':d.designated==='yes'?'designated':d.designated==='no'?'fallback':'unknown';
 const iir=d.partial!=='no'?'partial':d.upe==='DE'?'upe':d.upe==='unknown'||d.holds==='unknown'?'unknown':d.holds==='no'?'nohold':d.upperIIR==='yes'?'exception':'review';
 const r=num(d.shRevenue),p=num(d.profit),t=num(d.tax),s=num(d.sbie),rate=({2024:15,2025:16,2026:17})[d.year];
 const tests=[r===null||p===null||r<0?null:r<10&&p<1,p===null||t===null||p<=0?null:t*100+1e-10>=p*rate,p===null||s===null||s<0?null:p<=s];
 const sh=!supported||invalid?'review':d.history==='blocked'?'blocked':d.qualified==='no'?'invalid':d.history!=='eligible'||d.qualified!=='yes'||d.adjusted!=='yes'||d.shSpecial!=='no'?'review':tests.some(x=>x===true)?'pass':tests[0]===false&&tests[2]===false&&(tests[1]===false||p<=0)?'fail':'unknown';
 const gir=d.girWhere==='DE'?'local':d.girWhere==='foreign'&&d.girFiled==='yes'&&d.exchange==='yes'&&d.girCountry&&!['unknown','DE','OTHER'].includes(d.girCountry)&&d.girEntity?.trim()?'foreign':'review';
 const girDate=!supported||!['yes','no'].includes(d.first)?null:(Number(d.year)+2)+'-'+(d.first==='yes'?'06-30':'03-31');
 const due=girDate&&girDate<'2026-06-30'?'2026-06-30':girDate;
 return {hits,missing,threshold,scope,eu,structureUnknown,role,iir,tests,rate,etr:p!==null&&p>0&&t!==null?t/p*100:null,sh,gir,due,supported,invalid,notification:supported?`${Number(d.year)+1}-02-${(Number(d.year)+1)%4===0?'29':'28'}`:null};
}
root.P2={evaluate,EU};if(typeof module!=='undefined')module.exports=root.P2;
})(typeof window==='undefined'?globalThis:window);
